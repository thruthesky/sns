(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const uh=!1;var Wl=Array.isArray,kv=Array.prototype.indexOf,Gl=Array.from,ko=Object.keys,Ti=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,dh=Object.getOwnPropertyDescriptors,Cv=Object.prototype,Iv=Array.prototype,Kl=Object.getPrototypeOf,Cu=Object.isExtensible;function Zs(t){return typeof t=="function"}const cn=()=>{};function Tv(t){return t()}function Co(t){for(var e=0;e<t.length;e++)t[e]()}function hh(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function xv(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const St=2,Yl=4,na=8,or=16,ar=32,$r=64,ra=128,Tt=1024,Bt=2048,lr=4096,Jt=8192,Qn=16384,Ql=32768,Rr=65536,Iu=1<<17,Sv=1<<18,as=1<<19,fh=1<<20,un=256,Io=512,To=32768,ol=1<<21,Jl=1<<22,Kr=1<<23,Nn=Symbol("$state"),Xl=Symbol("legacy props"),Av=Symbol(""),ys=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Rv=1,Zl=3,Vs=8;function ph(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Pv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Nv(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Lv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ov(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Dv(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mv(){throw new Error("https://svelte.dev/e/hydration_failed")}function $v(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Uv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Fv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function qv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const sa=1,ia=2,mh=4,jv=8,Bv=16,Vv=1,Hv=2,vh=4,Wv=8,Gv=16,Kv=1,Yv=2,gh="[",oa="[!",ec="]",Rs={},bt=Symbol(),Qv="http://www.w3.org/1999/xhtml",Jv="http://www.w3.org/2000/svg",Xv="@attach";function aa(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Zv(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function eg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let de=!1;function Yt(t){de=t}let Te;function yt(t){if(t===null)throw aa(),Rs;return Te=t}function Xr(){return yt(Dn(Te))}function h(t){if(de){if(Dn(Te)!==null)throw aa(),Rs;Te=t}}function on(t=1){if(de){for(var e=t,n=Te;e--;)n=Dn(n);Te=n}}function xo(t=!0){for(var e=0,n=Te;;){if(n.nodeType===Vs){var r=n.data;if(r===ec){if(e===0)return n;e-=1}else(r===gh||r===oa)&&(e+=1)}var s=Dn(n);t&&n.remove(),n=s}}function _h(t){if(!t||t.nodeType!==Vs)throw aa(),Rs;return t.data}function bh(t){return t===this.v}function wh(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function yh(t){return!wh(t,this.v)}let Hs=!1,tg=!1;function ng(){Hs=!0}let Ze=null;function Ps(t){Ze=t}function Be(t,e=!1,n){Ze={p:Ze,i:!1,c:null,e:null,s:t,x:null,l:Hs&&!e?{s:null,u:null,$:[]}:null}}function Ve(t){var e=Ze,n=e.e;if(n!==null){e.e=null;for(var r of n)Fh(r)}return t!==void 0&&(e.x=t),e.i=!0,Ze=e.p,t??{}}function ji(){return!Hs||Ze!==null&&Ze.l===null}let Wr=[];function Eh(){var t=Wr;Wr=[],Co(t)}function Ur(t){if(Wr.length===0&&!hi){var e=Wr;queueMicrotask(()=>{e===Wr&&Eh()})}Wr.push(t)}function rg(){for(;Wr.length>0;)Eh()}function kh(t){var e=_e;if(e===null)return Ie.f|=Kr,t;if((e.f&Ql)===0){if((e.f&ra)===0)throw t;e.b.error(t)}else Ns(t,e)}function Ns(t,e){for(;e!==null;){if((e.f&ra)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const ao=new Set;let Oe=null,di=null,gn=null,Rn=[],la=null,al=!1,hi=!1;class wn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){Rn=[],di=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,n);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects)):(di=this,Oe=null,Tu(n.render_effects),Tu(n.effects),di=null,this.#l?.resolve()),gn=null}#n(e,n){e.f^=Tt;for(var r=e.first;r!==null;){var s=r.f,i=(s&(ar|$r))!==0,o=i&&(s&Tt)!==0,a=o||(s&Jt)!==0||this.skipped_effects.has(r);if((r.f&ra)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=Tt:(s&Yl)!==0?n.effects.push(r):Wi(r)&&((r.f&or)!==0&&n.block_effects.push(r),Si(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#a(e){for(const n of e)((n.f&Bt)!==0?this.#o:this.#i).push(n),xt(n,Tt)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),gn?.set(e,e.v)}activate(){Oe=this}deactivate(){Oe=null,gn=null}flush(){if(this.activate(),Rn.length>0){if(Ch(),Oe!==null&&Oe!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(ao.size>1){this.previous.clear();var e=gn,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of ao){if(s===this){n=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(n&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of i)Ih(c,o,a,l);if(Rn.length>0){Oe=s,s.apply();for(const c of Rn)s.#n(c,r);Rn=[],s.deactivate()}}}Oe=null,gn=e}this.committed=!0,ao.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)xt(e,Bt),Zr(e);for(const e of this.#i)xt(e,lr),Zr(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=hh()).promise}static ensure(){if(Oe===null){const e=Oe=new wn;ao.add(Oe),hi||wn.enqueue(()=>{Oe===e&&e.flush()})}return Oe}static enqueue(e){Ur(e)}apply(){}}function Ge(t){var e=hi;hi=!0;try{for(var n;;){if(rg(),Rn.length===0&&(Oe?.flush(),Rn.length===0))return la=null,n;Ch()}}finally{hi=e}}function Ch(){var t=Is;al=!0;try{var e=0;for(Ru(!0);Rn.length>0;){var n=wn.ensure();if(e++>1e3){var r,s;sg()}n.process(Rn),kr.clear()}}finally{al=!1,Ru(t),la=null}}function sg(){try{Dv()}catch(t){Ns(t,la)}}let Bn=null;function Tu(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Qn|Jt))===0&&Wi(r)&&(Bn=new Set,Si(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?jh(r):r.fn=null),Bn?.size>0)){kr.clear();for(const s of Bn){if((s.f&(Qn|Jt))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Bn.has(o)&&(Bn.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Qn|Jt))===0&&Si(l)}}Bn.clear()}}Bn=null}}function Ih(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const i=s.f;(i&St)!==0?Ih(s,e,n,r):(i&(Jl|or))!==0&&(i&Bt)===0&&Th(s,e,r)&&(xt(s,Bt),Zr(s))}}function Th(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if(e.includes(s))return!0;if((s.f&St)!==0&&Th(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function Zr(t){for(var e=la=t;e.parent!==null;){e=e.parent;var n=e.f;if(al&&e===_e&&(n&or)!==0)return;if((n&($r|ar))!==0){if((n&Tt)===0)return;e.f^=Tt}}Rn.push(e)}function ig(t){let e=0,n=Pr(0),r;return()=>{gg()&&(m(n),da(()=>(e===0&&(r=On(()=>t(()=>fi(n)))),e+=1,()=>{Ur(()=>{e-=1,e===0&&(r?.(),r=void 0,fi(n))})})))}}var og=Rr|as|ra;function ag(t,e,n){new lg(t,e,n)}class lg{parent;#t=!1;#e;#r=de?Te:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=ig(()=>(this.#h=Pr(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#s=n,this.#l=r,this.parent=_e.b,this.#t=!!this.#s.pending,this.#o=ls(()=>{if(_e.b=this,de){const i=this.#r;Xr(),i.nodeType===Vs&&i.data===oa?this.#y():this.#w()}else{var s=this.#g();try{this.#i=zt(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},og),de&&(this.#e=Te)}#w(){try{this.#i=zt(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=zt(()=>e(this.#e)),wn.enqueue(()=>{var n=this.#g();this.#i=this.#m(()=>(wn.ensure(),zt(()=>this.#l(n)))),this.#d>0?this.#v():(Cs(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=hn(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#m(e){var n=_e,r=Ie,s=Ze;fn(this.#o),qt(this.#o),Ps(this.#o.ctx);try{return e()}catch(i){return kh(i),null}finally{fn(n),qt(r),Ps(s)}}#v(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Hh(this.#i,this.#c)),this.#n===null&&(this.#n=zt(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&Cs(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Ls(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var n=this.#s.onerror;let r=this.#s.failed;if(this.#p||!n&&!r)throw e;this.#i&&(mt(this.#i),this.#i=null),this.#n&&(mt(this.#n),this.#n=null),this.#a&&(mt(this.#a),this.#a=null),de&&(yt(this.#r),on(),yt(xo()));var s=!1,i=!1;const o=()=>{if(s){eg();return}s=!0,i&&qv(),wn.ensure(),this.#f=0,this.#a!==null&&Cs(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#m(()=>(this.#p=!1,zt(()=>this.#l(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=Ie;try{qt(null),i=!0,n?.(e,o),i=!1}catch(l){Ns(l,this.#o&&this.#o.parent)}finally{qt(a)}r&&Ur(()=>{this.#a=this.#m(()=>{wn.ensure(),this.#p=!0;try{return zt(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Ns(l,this.#o.parent),null}finally{this.#p=!1}})})}}function xh(t,e,n,r){const s=ji()?Bi:ca;if(n.length===0&&t.length===0){r(e.map(s));return}var i=Oe,o=_e,a=cg();function l(){Promise.all(n.map(c=>ug(c))).then(c=>{a();try{r([...e.map(s),...c])}catch(d){(o.f&Qn)===0&&Ns(d,o)}i?.deactivate(),So()}).catch(c=>{Ns(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{i?.deactivate(),So()}}):l()}function cg(){var t=_e,e=Ie,n=Ze,r=Oe;return function(i=!0){fn(t),qt(e),Ps(n),i&&r?.activate()}}function So(){fn(null),qt(null),Ps(null)}function Bi(t){var e=St|Bt,n=Ie!==null&&(Ie.f&St)!==0?Ie:null;return _e===null||n!==null&&(n.f&un)!==0?e|=un:_e.f|=as,{ctx:Ze,deps:null,effects:null,equals:bh,f:e,fn:t,reactions:null,rv:0,v:bt,wv:0,parent:n??_e,ac:null}}function ug(t,e){let n=_e;n===null&&Pv();var r=n.b,s=void 0,i=Pr(bt),o=!Ie,a=new Map;return yg(()=>{var l=hh();s=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===Oe&&c.committed&&c.deactivate(),So()})}catch(u){l.reject(u),So()}var c=Oe;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(ys),a.delete(c),a.set(c,l)}const f=(u,v=void 0)=>{if(c.activate(),v)v!==ys&&(i.f|=Kr,Ls(i,v));else{(i.f&Kr)!==0&&(i.f^=Kr),Ls(i,u);for(const[g,b]of a){if(a.delete(g),g===c)break;b.reject(ys)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(f,u=>f(null,u||"unknown"))}),Vi(()=>{for(const l of a.values())l.reject(ys)}),new Promise(l=>{function c(d){function f(){d===s?l(i):c(s)}d.then(f,f)}c(s)})}function Ao(t){const e=Bi(t);return Wh(e),e}function ca(t){const e=Bi(t);return e.equals=yh,e}function Sh(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)mt(e[n])}}function dg(t){for(var e=t.parent;e!==null;){if((e.f&St)===0)return e;e=e.parent}return null}function tc(t){var e,n=_e;fn(dg(t));try{t.f&=~To,Sh(t),e=Qh(t)}finally{fn(n)}return e}function Ah(t){var e=tc(t);if(t.equals(e)||(t.v=e,t.wv=Kh()),!cs)if(gn!==null)gn.set(t,t.v);else{var n=(wr||(t.f&un)!==0)&&t.deps!==null?lr:Tt;xt(t,n)}}let ll=new Set;const kr=new Map;let Rh=!1;function Pr(t,e){var n={f:0,v:t,reactions:null,equals:bh,rv:0,wv:0};return n}function te(t,e){const n=Pr(t);return Wh(n),n}function nc(t,e=!1,n=!0){const r=Pr(t);return e||(r.equals=yh),Hs&&n&&Ze!==null&&Ze.l!==null&&(Ze.l.s??=[]).push(r),r}function y(t,e,n=!1){Ie!==null&&(!_n||(Ie.f&Iu)!==0)&&ji()&&(Ie.f&(St|or|Jl|Iu))!==0&&!Jn?.includes(t)&&zv();let r=n?Lt(e):e;return Ls(t,r)}function Ls(t,e){if(!t.equals(e)){var n=t.v;cs?kr.set(t,e):kr.set(t,n),t.v=e;var r=wn.ensure();r.capture(t,n),(t.f&St)!==0&&((t.f&Bt)!==0&&tc(t),xt(t,(t.f&un)===0?Tt:lr)),t.wv=Kh(),Ph(t,Bt),ji()&&_e!==null&&(_e.f&Tt)!==0&&(_e.f&(ar|$r))===0&&(sn===null?Cg([t]):sn.push(t)),!r.is_fork&&ll.size>0&&!Rh&&hg()}return e}function hg(){Rh=!1;const t=Array.from(ll);for(const e of t)(e.f&Tt)!==0&&xt(e,lr),Wi(e)&&Si(e);ll.clear()}function cl(t,e=1){var n=m(t),r=e===1?n++:n--;return y(t,n),r}function fi(t){y(t,t.v+1)}function Ph(t,e){var n=t.reactions;if(n!==null)for(var r=ji(),s=n.length,i=0;i<s;i++){var o=n[i],a=o.f;if(!(!r&&o===_e)){var l=(a&Bt)===0;l&&xt(o,e),(a&St)!==0?(a&To)===0&&(o.f|=To,Ph(o,lr)):l&&((a&or)!==0&&Bn!==null&&Bn.add(o),Zr(o))}}}function Lt(t){if(typeof t!="object"||t===null||Nn in t)return t;const e=Kl(t);if(e!==Cv&&e!==Iv)return t;var n=new Map,r=Wl(t),s=te(0),i=Yr,o=a=>{if(Yr===i)return a();var l=Ie,c=Yr;qt(null),Nu(i);var d=a();return qt(l),Nu(c),d};return r&&n.set("length",te(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Uv();var d=n.get(l);return d===void 0?d=o(()=>{var f=te(c.value);return n.set(l,f),f}):y(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>te(bt));n.set(l,d),fi(s)}}else y(c,bt),fi(s);return!0},get(a,l,c){if(l===Nn)return t;var d=n.get(l),f=l in a;if(d===void 0&&(!f||Yn(a,l)?.writable)&&(d=o(()=>{var v=Lt(f?a[l]:bt),g=te(v);return g}),n.set(l,d)),d!==void 0){var u=m(d);return u===bt?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=m(d))}else if(c===void 0){var f=n.get(l),u=f?.v;if(f!==void 0&&u!==bt)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Nn)return!0;var c=n.get(l),d=c!==void 0&&c.v!==bt||Reflect.has(a,l);if(c!==void 0||_e!==null&&(!d||Yn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?Lt(a[l]):bt,v=te(u);return v}),n.set(l,c));var f=m(c);if(f===bt)return!1}return d},set(a,l,c,d){var f=n.get(l),u=l in a;if(r&&l==="length")for(var v=c;v<f.v;v+=1){var g=n.get(v+"");g!==void 0?y(g,bt):v in a&&(g=o(()=>te(bt)),n.set(v+"",g))}if(f===void 0)(!u||Yn(a,l)?.writable)&&(f=o(()=>te(void 0)),y(f,Lt(c)),n.set(l,f));else{u=f.v!==bt;var b=o(()=>Lt(c));y(f,b)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(d,c),!u){if(r&&typeof l=="string"){var I=n.get("length"),C=Number(l);Number.isInteger(C)&&C>=I.v&&y(I,C+1)}fi(s)}return!0},ownKeys(a){m(s);var l=Reflect.ownKeys(a).filter(f=>{var u=n.get(f);return u===void 0||u.v!==bt});for(var[c,d]of n)d.v!==bt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Fv()}})}function xu(t){try{if(t!==null&&typeof t=="object"&&Nn in t)return t[Nn]}catch{}return t}function fg(t,e){return Object.is(xu(t),xu(e))}var Su,Nh,Lh,Oh;function ul(){if(Su===void 0){Su=window,Nh=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Lh=Yn(e,"firstChild").get,Oh=Yn(e,"nextSibling").get,Cu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Cu(n)&&(n.__t=void 0)}}function hn(t=""){return document.createTextNode(t)}function Cn(t){return Lh.call(t)}function Dn(t){return Oh.call(t)}function p(t,e){if(!de)return Cn(t);var n=Cn(Te);if(n===null)n=Te.appendChild(hn());else if(e&&n.nodeType!==Zl){var r=hn();return n?.before(r),yt(r),r}return yt(n),n}function se(t,e=!1){if(!de){var n=Cn(t);return n instanceof Comment&&n.data===""?Dn(n):n}if(e&&Te?.nodeType!==Zl){var r=hn();return Te?.before(r),yt(r),r}return Te}function _(t,e=1,n=!1){let r=de?Te:t;for(var s;e--;)s=r,r=Dn(r);if(!de)return r;if(n&&r?.nodeType!==Zl){var i=hn();return r===null?s?.after(i):r.before(i),yt(i),i}return yt(r),r}function rc(t){t.textContent=""}function Dh(){return!1}function pg(t,e){if(e){const n=document.body;t.autofocus=!0,Ur(()=>{document.activeElement===n&&t.focus()})}}function mg(t){de&&Cn(t)!==null&&rc(t)}let Au=!1;function Mh(){Au||(Au=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function ua(t){var e=Ie,n=_e;qt(null),fn(null);try{return t()}finally{qt(e),fn(n)}}function $h(t,e,n,r=n){t.addEventListener(e,()=>ua(n));const s=t.__on_r;s?t.__on_r=()=>{s(),r(!0)}:t.__on_r=()=>r(!0),Mh()}function Uh(t){_e===null&&Ie===null&&Ov(),Ie!==null&&(Ie.f&un)!==0&&_e===null&&Lv(),cs&&Nv()}function vg(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function In(t,e,n,r=!0){var s=_e;s!==null&&(s.f&Jt)!==0&&(t|=Jt);var i={ctx:Ze,deps:null,nodes_start:null,nodes_end:null,f:t|Bt,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Si(i),i.f|=Ql}catch(l){throw mt(i),l}else e!==null&&Zr(i);if(r){var o=i;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&as)===0&&(o=o.first,(t&or)!==0&&(t&Rr)!==0&&o!==null&&(o.f|=Rr)),o!==null&&(o.parent=s,s!==null&&vg(o,s),Ie!==null&&(Ie.f&St)!==0&&(t&$r)===0)){var a=Ie;(a.effects??=[]).push(o)}}return i}function gg(){return Ie!==null&&!_n}function Vi(t){const e=In(na,null,!1);return xt(e,Tt),e.teardown=t,e}function Os(t){Uh();var e=_e.f,n=!Ie&&(e&ar)!==0&&(e&Ql)===0;if(n){var r=Ze;(r.e??=[]).push(t)}else return Fh(t)}function Fh(t){return In(Yl|fh,t,!1)}function _g(t){return Uh(),In(na|fh,t,!0)}function bg(t){wn.ensure();const e=In($r|as,t,!0);return()=>{mt(e)}}function wg(t){wn.ensure();const e=In($r|as,t,!0);return(n={})=>new Promise(r=>{n.outro?Cs(e,()=>{mt(e),r(void 0)}):(mt(e),r(void 0))})}function Hi(t){return In(Yl,t,!1)}function yg(t){return In(Jl|as,t,!0)}function da(t,e=0){return In(na|e,t,!0)}function J(t,e=[],n=[],r=[]){xh(r,e,n,s=>{In(na,()=>t(...s.map(m)),!0)})}function ls(t,e=0){var n=In(or|e,t,!0);return n}function zt(t,e=!0){return In(ar|as,t,!0,e)}function zh(t){var e=t.teardown;if(e!==null){const n=cs,r=Ie;Pu(!0),qt(null);try{e.call(null)}finally{Pu(n),qt(r)}}}function qh(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&ua(()=>{s.abort(ys)});var r=n.next;(n.f&$r)!==0?n.parent=null:mt(n,e),n=r}}function Eg(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&ar)===0&&mt(e),e=n}}function mt(t,e=!0){var n=!1;(e||(t.f&Sv)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(kg(t.nodes_start,t.nodes_end),n=!0),qh(t,e&&!n),Ro(t,0),xt(t,Qn);var r=t.transitions;if(r!==null)for(const i of r)i.stop();zh(t);var s=t.parent;s!==null&&s.first!==null&&jh(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function kg(t,e){for(;t!==null;){var n=t===e?null:Dn(t);t.remove(),t=n}}function jh(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Cs(t,e,n=!0){var r=[];sc(t,r,!0),Bh(r,()=>{n&&mt(t),e&&e()})}function Bh(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var s of t)s.out(r)}else e()}function sc(t,e,n){if((t.f&Jt)===0){if(t.f^=Jt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var s=r.next,i=(r.f&Rr)!==0||(r.f&ar)!==0&&(t.f&or)!==0;sc(r,e,i?n:!1),r=s}}}function ic(t){Vh(t,!0)}function Vh(t,e){if((t.f&Jt)!==0){t.f^=Jt,(t.f&Tt)===0&&(xt(t,Bt),Zr(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&Rr)!==0||(n.f&ar)!==0;Vh(n,s?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}function Hh(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var s=n===r?null:Dn(n);e.append(n),n=s}}let Is=!1;function Ru(t){Is=t}let cs=!1;function Pu(t){cs=t}let Ie=null,_n=!1;function qt(t){Ie=t}let _e=null;function fn(t){_e=t}let Jn=null;function Wh(t){Ie!==null&&(Jn===null?Jn=[t]:Jn.push(t))}let Nt=null,Gt=0,sn=null;function Cg(t){sn=t}let Gh=1,xi=0,Yr=xi;function Nu(t){Yr=t}let wr=!1;function Kh(){return++Gh}function Wi(t){var e=t.f;if((e&Bt)!==0)return!0;if((e&lr)!==0){var n=t.deps,r=(e&un)!==0;if(e&St&&(t.f&=~To),n!==null){var s,i,o=(e&Io)!==0,a=r&&_e!==null&&!wr,l=n.length;if((o||a)&&(_e===null||(_e.f&Qn)===0)){var c=t,d=c.parent;for(s=0;s<l;s++)i=n[s],(o||!i?.reactions?.includes(c))&&(i.reactions??=[]).push(c);o&&(c.f^=Io),a&&d!==null&&(d.f&un)===0&&(c.f^=un)}for(s=0;s<l;s++)if(i=n[s],Wi(i)&&Ah(i),i.wv>t.wv)return!0}(!r||_e!==null&&!wr)&&xt(t,Tt)}return!1}function Yh(t,e,n=!0){var r=t.reactions;if(r!==null&&!Jn?.includes(t))for(var s=0;s<r.length;s++){var i=r[s];(i.f&St)!==0?Yh(i,e,!1):e===i&&(n?xt(i,Bt):(i.f&Tt)!==0&&xt(i,lr),Zr(i))}}function Qh(t){var e=Nt,n=Gt,r=sn,s=Ie,i=wr,o=Jn,a=Ze,l=_n,c=Yr,d=t.f;Nt=null,Gt=0,sn=null,wr=(d&un)!==0&&(_n||!Is||Ie===null),Ie=(d&(ar|$r))===0?t:null,Jn=null,Ps(t.ctx),_n=!1,Yr=++xi,t.ac!==null&&(ua(()=>{t.ac.abort(ys)}),t.ac=null);try{t.f|=ol;var f=t.fn,u=f(),v=t.deps;if(Nt!==null){var g;if(Ro(t,Gt),v!==null&&Gt>0)for(v.length=Gt+Nt.length,g=0;g<Nt.length;g++)v[Gt+g]=Nt[g];else t.deps=v=Nt;if(!wr||(d&St)!==0&&t.reactions!==null)for(g=Gt;g<v.length;g++)(v[g].reactions??=[]).push(t)}else v!==null&&Gt<v.length&&(Ro(t,Gt),v.length=Gt);if(ji()&&sn!==null&&!_n&&v!==null&&(t.f&(St|lr|Bt))===0)for(g=0;g<sn.length;g++)Yh(sn[g],t);return s!==null&&s!==t&&(xi++,sn!==null&&(r===null?r=sn:r.push(...sn))),(t.f&Kr)!==0&&(t.f^=Kr),u}catch(b){return kh(b)}finally{t.f^=ol,Nt=e,Gt=n,sn=r,Ie=s,wr=i,Jn=o,Ps(a),_n=l,Yr=c}}function Ig(t,e){let n=e.reactions;if(n!==null){var r=kv.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}n===null&&(e.f&St)!==0&&(Nt===null||!Nt.includes(e))&&(xt(e,lr),(e.f&(un|Io))===0&&(e.f^=Io),Sh(e),Ro(e,0))}function Ro(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Ig(t,n[r])}function Si(t){var e=t.f;if((e&Qn)===0){xt(t,Tt);var n=_e,r=Is;_e=t,Is=!0;try{(e&or)!==0?Eg(t):qh(t),zh(t);var s=Qh(t);t.teardown=typeof s=="function"?s:null,t.wv=Gh;var i;uh&&tg&&(t.f&Bt)!==0&&t.deps}finally{Is=r,_e=n}}}async function Tg(){await Promise.resolve(),Ge()}function m(t){var e=t.f,n=(e&St)!==0;if(Ie!==null&&!_n){var r=_e!==null&&(_e.f&Qn)!==0;if(!r&&!Jn?.includes(t)){var s=Ie.deps;if((Ie.f&ol)!==0)t.rv<xi&&(t.rv=xi,Nt===null&&s!==null&&s[Gt]===t?Gt++:Nt===null?Nt=[t]:(!wr||!Nt.includes(t))&&Nt.push(t));else{(Ie.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Ie]:i.includes(Ie)||i.push(Ie)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&un)===0&&(o.f^=un)}if(cs){if(kr.has(t))return kr.get(t);if(n){o=t;var l=o.v;return((o.f&Tt)===0&&o.reactions!==null||Jh(o))&&(l=tc(o)),kr.set(o,l),l}}else if(n){if(o=t,gn?.has(o))return gn.get(o);Wi(o)&&Ah(o)}if(gn?.has(t))return gn.get(t);if((t.f&Kr)!==0)throw t.v;return t.v}function Jh(t){if(t.v===bt)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(kr.has(e)||(e.f&St)!==0&&Jh(e))return!0;return!1}function On(t){var e=_n;try{return _n=!0,t()}finally{_n=e}}const xg=-7169;function xt(t,e){t.f=t.f&xg|e}function ws(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Nn in t)dl(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Nn in n&&dl(n)}}}function dl(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{dl(t[r],e)}catch{}const n=Kl(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=dh(n);for(let s in r){const i=r[s].get;if(i)try{i.call(t)}catch{}}}}}function Sg(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Ag=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Rg(t){return Ag.includes(t)}const Pg={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ng(t){return t=t.toLowerCase(),Pg[t]??t}const Lg=["touchstart","touchmove"];function Og(t){return Lg.includes(t)}const Dg=["textarea","script","style","title"];function Mg(t){return Dg.includes(t)}const Xh=new Set,hl=new Set;function Zh(t,e,n,r={}){function s(i){if(r.capture||ai.call(e,i),!i.cancelBubble)return ua(()=>n?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Ur(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Ai(t,e,n,r,s){var i={capture:r,passive:s},o=Zh(t,e,n,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Vi(()=>{e.removeEventListener(t,o,i)})}function nt(t){for(var e=0;e<t.length;e++)Xh.add(t[e]);for(var n of hl)n(t)}let Lu=null;function ai(t){var e=this,n=e.ownerDocument,r=t.type,s=t.composedPath?.()||[],i=s[0]||t.target;Lu=t;var o=0,a=Lu===t&&t.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=s[o]||t.target,i!==e){Ti(t,"currentTarget",{configurable:!0,get(){return i||n}});var d=Ie,f=_e;qt(null),fn(null);try{for(var u,v=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var b=i["__"+r];b!=null&&(!i.disabled||t.target===i)&&b.call(i,t)}catch(E){u?v.push(E):u=E}if(t.cancelBubble||g===e||g===null)break;i=g}if(u){for(let E of v)queueMicrotask(()=>{throw E});throw u}}finally{t.__root=e,delete t.currentTarget,qt(d),fn(f)}}}function ef(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Xn(t,e){var n=_e;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function R(t,e){var n=(e&Kv)!==0,r=(e&Yv)!==0,s,i=!t.startsWith("<!>");return()=>{if(de)return Xn(Te,null),Te;s===void 0&&(s=ef(i?t:"<!>"+t),n||(s=Cn(s)));var o=r||Nh?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Cn(o),l=o.lastChild;Xn(a,l)}else Xn(o,o);return o}}function $g(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,i;return()=>{if(de)return Xn(Te,null),Te;if(!i){var o=ef(s),a=Cn(o);i=Cn(a)}var l=i.cloneNode(!0);return Xn(l,l),l}}function Ug(t,e){return $g(t,e,"svg")}function fe(){if(de)return Xn(Te,null),Te;var t=document.createDocumentFragment(),e=document.createComment(""),n=hn();return t.append(e,n),Xn(e,n),t}function w(t,e){if(de){_e.nodes_end=Te,Xr();return}t!==null&&t.before(e)}function S(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function oc(t,e){return tf(t,e)}function Fg(t,e){ul(),e.intro=e.intro??!1;const n=e.target,r=de,s=Te;try{for(var i=Cn(n);i&&(i.nodeType!==Vs||i.data!==gh);)i=Dn(i);if(!i)throw Rs;Yt(!0),yt(i);const o=tf(t,{...e,anchor:i});return Yt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Rs&&console.warn("Failed to hydrate: ",o),e.recover===!1&&Mv(),ul(),rc(n),Yt(!1),oc(t,e)}finally{Yt(r),yt(s)}}const vs=new Map;function tf(t,{target:e,anchor:n,props:r={},events:s,context:i,intro:o=!0}){ul();var a=new Set,l=f=>{for(var u=0;u<f.length;u++){var v=f[u];if(!a.has(v)){a.add(v);var g=Og(v);e.addEventListener(v,ai,{passive:g});var b=vs.get(v);b===void 0?(document.addEventListener(v,ai,{passive:g}),vs.set(v,1)):vs.set(v,b+1)}}};l(Gl(Xh)),hl.add(l);var c=void 0,d=wg(()=>{var f=n??e.appendChild(hn());return ag(f,{pending:()=>{}},u=>{if(i){Be({});var v=Ze;v.c=i}if(s&&(r.$$events=s),de&&Xn(u,null),c=t(u,r)||{},de&&(_e.nodes_end=Te,Te===null||Te.nodeType!==Vs||Te.data!==ec))throw aa(),Rs;i&&Ve()}),()=>{for(var u of a){e.removeEventListener(u,ai);var v=vs.get(u);--v===0?(document.removeEventListener(u,ai),vs.delete(u)):vs.set(u,v)}hl.delete(l),f!==n&&f.parentNode?.removeChild(f)}});return fl.set(c,d),c}let fl=new WeakMap;function zg(t,e){const n=fl.get(t);return n?(fl.delete(t),n(e)):Promise.resolve()}class ac{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,n=!0){this.anchor=e,this.#s=n}#l=()=>{var e=Oe;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)ic(r);else{var s=this.#r.get(n);s&&(this.#e.set(n,s.effect),this.#r.delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(mt(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var c=document.createDocumentFragment();Hh(o,c),c.append(hn()),this.#r.set(i,{effect:o,fragment:c})}else mt(o);this.#e.delete(i)};this.#s||!r?Cs(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,s]of this.#r)n.includes(r)||(mt(s.effect),this.#r.delete(r))};ensure(e,n){var r=Oe,s=Dh();if(n&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=hn();i.append(o),this.#r.set(e,{effect:zt(()=>n(o)),fragment:i})}else this.#e.set(e,zt(()=>n(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else de&&(this.anchor=Te),this.#l()}}function H(t,e,n=!1){de&&Xr();var r=new ac(t),s=n?Rr:0;function i(o,a){if(de){const c=_h(t)===oa;if(o===c){var l=xo();yt(l),r.anchor=l,Yt(!1),r.ensure(o,a),Yt(!0);return}}r.ensure(o,a)}ls(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function Vn(t,e){return e}function qg(t,e,n){for(var r=t.items,s=[],i=e.length,o=0;o<i;o++)sc(e[o].e,s,!0);var a=i>0&&s.length===0&&n!==null;if(a){var l=n.parentNode;rc(l),l.append(n),r.clear(),An(t,e[0].prev,e[i-1].next)}Bh(s,()=>{for(var c=0;c<i;c++){var d=e[c];a||(r.delete(d.k),An(t,d.prev,d.next)),mt(d.e,!a)}})}function Ot(t,e,n,r,s,i=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&mh)!==0;if(l){var c=t;o=de?yt(Cn(c)):c.appendChild(hn())}de&&Xr();var d=null,f=!1,u=new Map,v=ca(()=>{var I=n();return Wl(I)?I:I==null?[]:Gl(I)}),g,b;function E(){jg(b,g,a,u,o,s,e,r,n),i!==null&&(g.length===0?d?ic(d):d=zt(()=>i(o)):d!==null&&Cs(d,()=>{d=null}))}ls(()=>{b??=_e,g=m(v);var I=g.length;if(f&&I===0)return;f=I===0;let C=!1;if(de){var P=_h(o)===oa;P!==(I===0)&&(o=xo(),yt(o),Yt(!1),C=!0)}if(de){for(var T=null,L,N=0;N<I;N++){if(Te.nodeType===Vs&&Te.data===ec){o=Te,C=!0,Yt(!1);break}var A=g[N],k=r(A,N);L=pl(Te,a,T,null,A,k,N,s,e,n),a.items.set(k,L),T=L}I>0&&yt(xo())}if(de)I===0&&i&&(d=zt(()=>i(o)));else if(Dh()){var M=new Set,q=Oe;for(N=0;N<I;N+=1){A=g[N],k=r(A,N);var V=a.items.get(k)??u.get(k);V?(e&(sa|ia))!==0&&nf(V,A,N,e):(L=pl(null,a,null,null,A,k,N,s,e,n,!0),u.set(k,L)),M.add(k)}for(const[F,B]of a.items)M.has(F)||q.skipped_effects.add(B.e);q.oncommit(E)}else E();C&&Yt(!0),m(v)}),de&&(o=Te)}function jg(t,e,n,r,s,i,o,a,l){var c=(o&jv)!==0,d=(o&(sa|ia))!==0,f=e.length,u=n.items,v=n.first,g=v,b,E=null,I,C=[],P=[],T,L,N,A;if(c)for(A=0;A<f;A+=1)T=e[A],L=a(T,A),N=u.get(L),N!==void 0&&(N.a?.measure(),(I??=new Set).add(N));for(A=0;A<f;A+=1){if(T=e[A],L=a(T,A),N=u.get(L),N===void 0){var k=r.get(L);if(k!==void 0){r.delete(L),u.set(L,k);var M=E?E.next:g;An(n,E,k),An(n,k,M),La(k,M,s),E=k}else{var q=g?g.e.nodes_start:s;E=pl(q,n,E,E===null?n.first:E.next,T,L,A,i,o,l)}u.set(L,E),C=[],P=[],g=E.next;continue}if(d&&nf(N,T,A,o),(N.e.f&Jt)!==0&&(ic(N.e),c&&(N.a?.unfix(),(I??=new Set).delete(N))),N!==g){if(b!==void 0&&b.has(N)){if(C.length<P.length){var V=P[0],F;E=V.prev;var B=C[0],K=C[C.length-1];for(F=0;F<C.length;F+=1)La(C[F],V,s);for(F=0;F<P.length;F+=1)b.delete(P[F]);An(n,B.prev,K.next),An(n,E,B),An(n,K,V),g=V,E=K,A-=1,C=[],P=[]}else b.delete(N),La(N,g,s),An(n,N.prev,N.next),An(n,N,E===null?n.first:E.next),An(n,E,N),E=N;continue}for(C=[],P=[];g!==null&&g.k!==L;)(g.e.f&Jt)===0&&(b??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;N=g}C.push(N),E=N,g=N.next}if(g!==null||b!==void 0){for(var W=b===void 0?[]:Gl(b);g!==null;)(g.e.f&Jt)===0&&W.push(g),g=g.next;var Y=W.length;if(Y>0){var ae=(o&mh)!==0&&f===0?s:null;if(c){for(A=0;A<Y;A+=1)W[A].a?.measure();for(A=0;A<Y;A+=1)W[A].a?.fix()}qg(n,W,ae)}}c&&Ur(()=>{if(I!==void 0)for(N of I)N.a?.apply()}),t.first=n.first&&n.first.e,t.last=E&&E.e;for(var ee of r.values())mt(ee.e);r.clear()}function nf(t,e,n,r){(r&sa)!==0&&Ls(t.v,e),(r&ia)!==0?Ls(t.i,n):t.i=n}function pl(t,e,n,r,s,i,o,a,l,c,d){var f=(l&sa)!==0,u=(l&Bv)===0,v=f?u?nc(s,!1,!1):Pr(s):s,g=(l&ia)===0?o:Pr(o),b={i:g,v,k:i,a:null,e:null,prev:n,next:r};try{if(t===null){var E=document.createDocumentFragment();E.append(t=hn())}return b.e=zt(()=>a(t,v,g,c),de),b.e.prev=n&&n.e,b.e.next=r&&r.e,n===null?d||(e.first=b):(n.next=b,n.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function La(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,s=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==null&&i!==r;){var o=Dn(i);s.before(i),i=o}}function An(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function rt(t,e,n,r,s){de&&Xr();var i=e.$$slots?.[n],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(t,o?()=>r:r)}function gs(t,e,...n){var r=new ac(t);ls(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...n)))},Rr)}function Bg(t,e,n,r,s,i){let o=de;de&&Xr();var a=null;de&&Te.nodeType===Rv&&(a=Te,Xr());var l=de?Te:t,c=new ac(l,!1);ls(()=>{const d=e()||null;var f=Jv;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=de?a:document.createElementNS(f,d),Xn(a,a),r){de&&Mg(d)&&a.append(document.createComment(""));var v=de?Cn(a):a.appendChild(hn());de&&(v===null?Yt(!1):yt(v)),r(a,v)}_e.nodes_end=a,u.before(a)}de&&yt(u)}),()=>{}},Rr),Vi(()=>{}),o&&(Yt(!0),yt(l))}function He(t,e){Hi(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function Vg(t,e){var n=void 0,r;ls(()=>{n!==(n=e())&&(r&&(mt(r),r=null),n&&(r=zt(()=>{Hi(()=>n(t))})))})}function rf(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=rf(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Hg(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=rf(t))&&(r&&(r+=" "),r+=e);return r}function Wg(t){return typeof t=="object"?Hg(t):t??""}const Ou=[...` 	
\r\f \v\uFEFF`];function Gg(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s in n)if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||Ou.includes(r[o-1]))&&(a===r.length||Ou.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Du(t,e=!1){var n=e?" !important;":";",r="";for(var s in t){var i=t[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Oa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Kg(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Oa)),s&&l.push(...Object.keys(s).map(Oa));var c=0,d=-1;const b=t.length;for(var f=0;f<b;f++){var u=t[f];if(a?u==="/"&&t[f-1]==="*"&&(a=!1):i?i===u&&(i=!1):u==="/"&&t[f+1]==="*"?a=!0:u==='"'||u==="'"?i=u:u==="("?o++:u===")"&&o--,!a&&i===!1&&o===0){if(u===":"&&d===-1)d=f;else if(u===";"||f===b-1){if(d!==-1){var v=Oa(t.substring(c,d).trim());if(!l.includes(v)){u!==";"&&f++;var g=t.substring(c,f).trim();n+=" "+g+";"}}c=f+1,d=-1}}}}return r&&(n+=Du(r)),s&&(n+=Du(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Kt(t,e,n,r,s,i){var o=t.__className;if(de||o!==n||o===void 0){var a=Gg(n,r,i);(!de||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(i&&s!==i)for(var l in i){var c=!!i[l];(s==null||c!==!!s[l])&&t.classList.toggle(l,c)}return i}function Da(t,e={},n,r){for(var s in n){var i=n[s];e[s]!==i&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,r))}}function lc(t,e,n,r){var s=t.__style;if(de||s!==e){var i=Kg(e,r);(!de||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=e}else r&&(Array.isArray(r)?(Da(t,n?.[0],r[0]),Da(t,n?.[1],r[1],"important")):Da(t,n,r));return r}function Po(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Wl(e))return Zv();for(var r of t.options)r.selected=e.includes(pi(r));return}for(r of t.options){var s=pi(r);if(fg(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function sf(t){var e=new MutationObserver(()=>{Po(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Vi(()=>{e.disconnect()})}function cc(t,e,n=e){var r=new WeakSet,s=!0;$h(t,"change",i=>{var o=i?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),pi);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&pi(l)}n(a),Oe!==null&&r.add(Oe)}),Hi(()=>{var i=e();if(t===document.activeElement){var o=di??Oe;if(r.has(o))return}if(Po(t,i,s),s&&i===void 0){var a=t.querySelector(":checked");a!==null&&(i=pi(a),n(i))}t.__value=i,s=!1}),sf(t)}function pi(t){return"__value"in t?t.__value:t.value}const ei=Symbol("class"),ti=Symbol("style"),of=Symbol("is custom element"),af=Symbol("is html");function Ds(t){if(de){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;je(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var s=t.checked;je(t,"checked",null),t.checked=s}}};t.__on_r=n,Ur(n),Mh()}}function Yg(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function je(t,e,n,r){var s=lf(t);de&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=n)&&(e==="loading"&&(t[Av]=n),n==null?t.removeAttribute(e):typeof n!="string"&&cf(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Qg(t,e,n,r,s=!1,i=!1){if(de&&s&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Ds(o)}var l=lf(t),c=l[of],d=!l[af];let f=de&&c;f&&Yt(!1);var u=e||{},v=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class?n.class=Wg(n.class):n[ei]&&(n.class=null),n[ti]&&(n.style??=null);var b=cf(t);for(const A in n){let k=n[A];if(v&&A==="value"&&k==null){t.value=t.__value="",u[A]=k;continue}if(A==="class"){var E=t.namespaceURI==="http://www.w3.org/1999/xhtml";Kt(t,E,k,r,e?.[ei],n[ei]),u[A]=k,u[ei]=n[ei];continue}if(A==="style"){lc(t,k,e?.[ti],n[ti]),u[A]=k,u[ti]=n[ti];continue}var I=u[A];if(!(k===I&&!(k===void 0&&t.hasAttribute(A)))){u[A]=k;var C=A[0]+A[1];if(C!=="$$")if(C==="on"){const M={},q="$$"+A;let V=A.slice(2);var P=Rg(V);if(Sg(V)&&(V=V.slice(0,-7),M.capture=!0),!P&&I){if(k!=null)continue;t.removeEventListener(V,u[q],M),u[q]=null}if(k!=null)if(P)t[`__${V}`]=k,nt([V]);else{let F=function(B){u[A].call(this,B)};var N=F;u[q]=Zh(V,t,F,M)}else P&&(t[`__${V}`]=void 0)}else if(A==="style")je(t,A,k);else if(A==="autofocus")pg(t,!!k);else if(!c&&(A==="__value"||A==="value"&&k!=null))t.value=t.__value=k;else if(A==="selected"&&v)Yg(t,k);else{var T=A;d||(T=Ng(T));var L=T==="defaultValue"||T==="defaultChecked";if(k==null&&!c&&!L)if(l[A]=null,T==="value"||T==="checked"){let M=t;const q=e===void 0;if(T==="value"){let V=M.defaultValue;M.removeAttribute(T),M.defaultValue=V,M.value=M.__value=q?V:null}else{let V=M.defaultChecked;M.removeAttribute(T),M.defaultChecked=V,M.checked=q?V:!1}}else t.removeAttribute(A);else L||b.includes(T)&&(c||typeof k!="string")?(t[T]=k,T in l&&(l[T]=bt)):typeof k!="function"&&je(t,T,k)}}}return f&&Yt(!0),u}function Mu(t,e,n=[],r=[],s=[],i,o=!1,a=!1){xh(s,n,r,l=>{var c=void 0,d={},f=t.nodeName==="SELECT",u=!1;if(ls(()=>{var g=e(...l.map(m)),b=Qg(t,c,g,i,o,a);u&&f&&"value"in g&&Po(t,g.value);for(let I of Object.getOwnPropertySymbols(d))g[I]||mt(d[I]);for(let I of Object.getOwnPropertySymbols(g)){var E=g[I];I.description===Xv&&(!c||E!==c[I])&&(d[I]&&mt(d[I]),d[I]=zt(()=>Vg(t,()=>E))),b[I]=E}c=b}),f){var v=t;Hi(()=>{Po(v,c.value,!0),sf(v)})}u=!0})}function lf(t){return t.__attributes??={[of]:t.nodeName.includes("-"),[af]:t.namespaceURI===Qv}}var $u=new Map;function cf(t){var e=t.getAttribute("is")||t.nodeName,n=$u.get(e);if(n)return n;$u.set(e,n=[]);for(var r,s=t,i=Element.prototype;i!==s;){r=dh(s);for(var o in r)r[o].set&&n.push(o);s=Kl(s)}return n}function Ms(t,e,n=e){var r=new WeakSet;$h(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Ma(t)?$a(i):i,n(i),Oe!==null&&r.add(Oe),await Tg(),i!==(i=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=i??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(de&&t.defaultValue!==t.value||On(e)==null&&t.value)&&(n(Ma(t)?$a(t.value):t.value),Oe!==null&&r.add(Oe)),da(()=>{var s=e();if(t===document.activeElement){var i=di??Oe;if(r.has(i))return}Ma(t)&&s===$a(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Ma(t){var e=t.type;return e==="number"||e==="range"}function $a(t){return t===""?null:+t}function Uu(t,e){return t===e||t?.[Nn]===e}function uc(t={},e,n,r){return Hi(()=>{var s,i;return da(()=>{s=i,i=[],On(()=>{t!==n(...i)&&(e(t,...i),s&&Uu(n(...s),t)&&e(null,...s))})}),()=>{Ur(()=>{i&&Uu(n(...i),t)&&e(null,...i)})}}),t}function Vt(t=!1){const e=Ze,n=e.l.u;if(!n)return;let r=()=>ws(e.s);if(t){let s=0,i={};const o=Bi(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],a=!0);return a&&s++,s});r=()=>m(o)}n.b.length&&_g(()=>{Fu(e,r),Co(n.b)}),Os(()=>{const s=On(()=>n.m.map(Tv));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Os(()=>{Fu(e,r),Co(n.a)})}function Fu(t,e){if(t.l.s)for(const n of t.l.s)m(n);e()}function dc(t,e,n){if(t==null)return e(void 0),n&&n(void 0),cn;const r=On(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const _s=[];function Jg(t,e){return{subscribe:Ws(t,e).subscribe}}function Ws(t,e=cn){let n=null;const r=new Set;function s(a){if(wh(t,a)&&(t=a,n)){const l=!_s.length;for(const c of r)c[1](),_s.push(c,t);if(l){for(let c=0;c<_s.length;c+=2)_s[c][0](_s[c+1]);_s.length=0}}}function i(a){s(a(t))}function o(a,l=cn){const c=[a,l];return r.add(c),r.size===1&&(n=e(s,i)||cn),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function Xg(t,e,n){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return Jg(n,(o,a)=>{let l=!1;const c=[];let d=0,f=cn;const u=()=>{if(d)return;f();const g=e(r?c[0]:c,o,a);i?o(g):f=typeof g=="function"?g:cn},v=s.map((g,b)=>dc(g,E=>{c[b]=E,d&=~(1<<b),l&&u()},()=>{d|=1<<b}));return l=!0,u(),function(){Co(v),f(),l=!1}})}function Zg(t){let e;return dc(t,n=>e=n)(),e}let lo=!1,ml=Symbol();function dn(t,e,n){const r=n[e]??={store:null,source:nc(void 0),unsubscribe:cn};if(r.store!==t&&!(ml in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=cn;else{var s=!0;r.unsubscribe=dc(t,i=>{s?r.source.v=i:y(r.source,i)}),s=!1}return t&&ml in n?Zg(t):m(r.source)}function us(){const t={};function e(){Vi(()=>{for(var n in t)t[n].unsubscribe();Ti(t,ml,{enumerable:!1,value:!0})})}return[t,e]}function e_(t){var e=lo;try{return lo=!1,[t(),lo]}finally{lo=e}}const t_={get(t,e){if(!t.exclude.includes(e))return m(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=_e;try{fn(t.parent_effect),t.special[e]=Ye({get[e](){return t.props[e]}},e,vh)}finally{fn(r)}}return t.special[e](n),cl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),cl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function et(t,e){return new Proxy({props:t,exclude:e,special:{},version:Pr(0),parent_effect:_e},t_)}const n_={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Zs(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];Zs(s)&&(s=s());const i=Yn(s,e);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Zs(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=Yn(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Nn||e===Xl)return!1;for(let n of t.props)if(Zs(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(Zs(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function ht(...t){return new Proxy({props:t},n_)}function Ye(t,e,n,r){var s=!Hs||(n&Hv)!==0,i=(n&Wv)!==0,o=(n&Gv)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?On(r):r),a),d;if(i){var f=Nn in t||Xl in t;d=Yn(t,e)?.set??(f&&e in t?P=>t[e]=P:void 0)}var u,v=!1;i?[u,v]=e_(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(s&&$v(),d(u)));var g;if(s?g=()=>{var P=t[e];return P===void 0?c():(l=!0,P)}:g=()=>{var P=t[e];return P!==void 0&&(a=void 0),P===void 0?a:P},s&&(n&vh)===0)return g;if(d){var b=t.$$legacy;return(function(P,T){return arguments.length>0?((!s||!T||b||v)&&d(T?g():P),P):g()})}var E=!1,I=((n&Vv)!==0?Bi:ca)(()=>(E=!1,g()));i&&m(I);var C=_e;return(function(P,T){if(arguments.length>0){const L=T?m(I):s&&i?Lt(P):P;return y(I,L),E=!0,a!==void 0&&(a=L),P}return cs&&E||(C.f&Qn)!==0?I.v:m(I)})}function r_(t){return new s_(t)}class s_{#t;#e;constructor(e){var n=new Map,r=(i,o)=>{var a=nc(o,!1,!1);return n.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return m(n.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Xl?!0:(m(n.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return y(n.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?Fg:oc)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Ge(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||Ti(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{zg(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...s)=>n.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let uf;typeof HTMLElement=="function"&&(uf=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),w(i,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=i_(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),n.default=!0):n[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=go(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=r_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=bg(()=>{da(()=>{this.$$r=!0;for(const s of ko(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=go(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=go(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return ko(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function go(t,e,n,r){const s=n[t]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function i_(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function pe(t,e,n,r,s,i){let o=class extends uf{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return ko(e).map(a=>(e[a].attribute||a).toLowerCase())}};return ko(e).forEach(a=>{Ti(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=go(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=Yn(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Ti(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}function kt(t){Ze===null&&ph(),Hs&&Ze.l!==null?o_(Ze).m.push(t):Os(()=>{const e=On(t);if(typeof e=="function")return e})}function df(t){Ze===null&&ph(),kt(()=>()=>On(t))}function o_(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const a_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(a_);const l_=()=>{};var zu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Gs(e)},Gs=function(t){return new Error("Firebase Database ("+hf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},c_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let u=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(u=64)),r.push(n[d],n[f],n[u],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new u_;const u=i<<2|a>>4;if(r.push(u),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pf=function(t){const e=ff(t);return hc.encodeByteArray(e,!0)},No=function(t){return pf(t).replace(/\./g,"")},Lo=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){return mf(void 0,t)}function mf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!h_(n)||(t[n]=mf(t[n],e[n]));return t}function h_(t){return t!=="__proto__"}/**
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
 */const p_=()=>f_().__FIREBASE_DEFAULTS__,m_=()=>{if(typeof process>"u"||typeof zu>"u")return;const t=zu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lo(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return l_()||p_()||m_()||v_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vf=t=>fc()?.emulatorHosts?.[t],gf=t=>{const e=vf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_f=()=>fc()?.config,bf=t=>fc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}const mi={};function g_(){const t={prod:[],emulator:[]};for(const e of Object.keys(mi))mi[e]?t.emulator.push(e):t.prod.push(e);return t}function __(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qu=!1;function mc(t,e){if(typeof window>"u"||typeof document>"u"||!Fr(window.location.host)||mi[t]===e||mi[t]||qu)return;mi[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",i=g_().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,v){u.setAttribute("width","24"),u.setAttribute("id",v),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{qu=!0,o()},u}function d(u,v){u.setAttribute("id",v),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function f(){const u=__(r),v=n("text"),g=document.getElementById(v)||document.createElement("span"),b=n("learnmore"),E=document.getElementById(b)||document.createElement("a"),I=n("preprendIcon"),C=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const P=u.element;a(P),d(E,b);const T=c();l(C,I),P.append(C,g,E,T),document.body.appendChild(P)}i?(g.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function b_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y_(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function E_(){return hf.NODE_ADMIN===!0}function k_(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=I_,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?T_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cr(s,a,r)}}function T_(t,e){return t.replace(x_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const x_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){return JSON.parse(t)}function pt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ri(Lo(i[0])||""),n=Ri(Lo(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},S_=function(t){const e=Ef(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},A_=function(t){const e=Ef(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ju(i)&&ju(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ju(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const u=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):f<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const u=(s<<5|s>>>27)+c+l+d+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function P_(t,e){const n=new N_(t,e);return n.subscribe.bind(n)}class N_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");L_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}function ha(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($_(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M_(t){return t===Br?void 0:t}function $_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const F_={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},z_=De.INFO,q_={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},j_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=q_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=z_,this._logHandler=j_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const B_=(t,e)=>e.some(n=>t instanceof n);let Bu,Vu;function V_(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H_(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kf=new WeakMap,gl=new WeakMap,Cf=new WeakMap,Fa=new WeakMap,_c=new WeakMap;function W_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kf.set(n,t)}).catch(()=>{}),_c.set(e,t),e}function G_(t){if(gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K_(t){_l=t(_l)}function Y_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return Cf.set(r,e.sort?e.sort():[e]),Cr(r)}:H_().includes(t)?function(...e){return t.apply(za(this),e),Cr(kf.get(this))}:function(...e){return Cr(t.apply(za(this),e))}}function Q_(t){return typeof t=="function"?Y_(t):(t instanceof IDBTransaction&&G_(t),B_(t,V_())?new Proxy(t,_l):t)}function Cr(t){if(t instanceof IDBRequest)return W_(t);if(Fa.has(t))return Fa.get(t);const e=Q_(t);return e!==t&&(Fa.set(t,e),_c.set(e,t)),e}const za=t=>_c.get(t);function J_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cr(o.result),l.oldVersion,l.newVersion,Cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const X_=["get","getKey","getAll","getAllKeys","count"],Z_=["put","add","delete","clear"],qa=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Z_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||X_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return qa.set(e,i),i}K_(t=>({...t,get:(e,n,r)=>Hu(e,n)||t.get(e,n,r),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tb(t){return t.getComponent()?.type==="VERSION"}const bl="@firebase/app",Wu="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new gc("@firebase/app"),nb="@firebase/app-compat",rb="@firebase/analytics-compat",sb="@firebase/analytics",ib="@firebase/app-check-compat",ob="@firebase/app-check",ab="@firebase/auth",lb="@firebase/auth-compat",cb="@firebase/database",ub="@firebase/data-connect",db="@firebase/database-compat",hb="@firebase/functions",fb="@firebase/functions-compat",pb="@firebase/installations",mb="@firebase/installations-compat",vb="@firebase/messaging",gb="@firebase/messaging-compat",_b="@firebase/performance",bb="@firebase/performance-compat",wb="@firebase/remote-config",yb="@firebase/remote-config-compat",Eb="@firebase/storage",kb="@firebase/storage-compat",Cb="@firebase/firestore",Ib="@firebase/ai",Tb="@firebase/firestore-compat",xb="firebase",Sb="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="[DEFAULT]",Ab={[bl]:"fire-core",[nb]:"fire-core-compat",[sb]:"fire-analytics",[rb]:"fire-analytics-compat",[ob]:"fire-app-check",[ib]:"fire-app-check-compat",[ab]:"fire-auth",[lb]:"fire-auth-compat",[cb]:"fire-rtdb",[ub]:"fire-data-connect",[db]:"fire-rtdb-compat",[hb]:"fire-fn",[fb]:"fire-fn-compat",[pb]:"fire-iid",[mb]:"fire-iid-compat",[vb]:"fire-fcm",[gb]:"fire-fcm-compat",[_b]:"fire-perf",[bb]:"fire-perf-compat",[wb]:"fire-rc",[yb]:"fire-rc-compat",[Eb]:"fire-gcs",[kb]:"fire-gcs-compat",[Cb]:"fire-fst",[Tb]:"fire-fst-compat",[Ib]:"fire-vertex","fire-js":"fire-js",[xb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,Rb=new Map,yl=new Map;function Gu(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(yl.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of Do.values())Gu(n,t);for(const n of Rb.values())Gu(n,t);return!0}function pa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Ki("app","Firebase",Pb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=Sb;function If(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=_f()),!n)throw Ir.create("no-options");const i=Do.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new U_(s);for(const l of yl.values())o.addComponent(l);const a=new Nb(n,r,o);return Do.set(s,a),a}function bc(t=wl){const e=Do.get(t);if(!e&&t===wl&&_f())return If();if(!e)throw Ir.create("no-app",{appName:t});return e}function Ln(t,e,n){let r=Ab[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(o.join(" "));return}ts(new Nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Lb="firebase-heartbeat-database",Ob=1,Pi="firebase-heartbeat-store";let ja=null;function Tf(){return ja||(ja=J_(Lb,Ob,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),ja}async function Db(t){try{const n=(await Tf()).transaction(Pi),r=await n.objectStore(Pi).get(xf(t));return await n.done,r}catch(e){if(e instanceof cr)tr.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e?.message});tr.warn(n.message)}}}async function Ku(t,e){try{const r=(await Tf()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(e,xf(t)),await r.done}catch(n){if(n instanceof cr)tr.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n?.message});tr.warn(r.message)}}}function xf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mb=1024,$b=30;class Ub{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>$b){const s=qb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){tr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yu(),{heartbeatsToSend:n,unsentEntries:r}=Fb(this._heartbeatsCache.heartbeats),s=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return tr.warn(e),""}}}function Yu(){return new Date().toISOString().substring(0,10)}function Fb(t,e=Mb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k_()?C_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Db(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return No(JSON.stringify({version:2,heartbeats:t})).length}function qb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){ts(new Nr("platform-logger",e=>new eb(e),"PRIVATE")),ts(new Nr("heartbeat",e=>new Ub(e),"PRIVATE")),Ln(bl,Wu,t),Ln(bl,Wu,"esm2020"),Ln("fire-js","")}jb("");var Bb="firebase",Vb="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(Bb,Vb,"app");function Sf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hb=Sf,Af=new Ki("auth","Firebase",Sf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new gc("@firebase/auth");function Wb(t,...e){Mo.logLevel<=De.WARN&&Mo.warn(`Auth (${hs}): ${t}`,...e)}function _o(t,...e){Mo.logLevel<=De.ERROR&&Mo.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw wc(t,...e)}function Xt(t,...e){return wc(t,...e)}function Rf(t,e,n){const r={...Hb(),[e]:n};return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return Rf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Af.create(t,...e)}function G(t,e,...n){if(!t)throw wc(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function rr(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof self<"u"&&self.location?.href||""}function Pf(){return Ju()==="http:"||Ju()==="https:"}function Ju(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pf()||w_()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=vc()||yf()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jb=new Yi(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mn(t,e,n,r,s={}){return Lf(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ds({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...i};return b_()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Fr(t.emulatorConfig.host)&&(c.credentials="include"),Nf.fetch()(await Of(t,t.config.apiHost,n,a),c)})}async function Lf(t,e,n){t._canInitEmulator=!1;const r={...Yb,...e};try{const s=new Zb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw li(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw li(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw li(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw li(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rf(t,d,c);nr(t,d)}}catch(s){if(s instanceof cr)throw s;nr(t,"network-request-failed",{message:String(s)})}}async function ma(t,e,n,r,s={}){const i=await mn(t,e,n,r,s);return"mfaPendingCredential"in i&&nr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Of(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?yc(t.config,s):`${t.config.apiScheme}://${s}`;return Qb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Xb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),Jb.get())})}}function li(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return t!==void 0&&t.getResponse!==void 0}function Zu(t){return t!==void 0&&t.enterprise!==void 0}class Df{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t){return(await mn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Mf(t,e){return mn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function $o(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n1(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Ec(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:vi(Ba(s.auth_time)),issuedAtTime:vi(Ba(s.iat)),expirationTime:vi(Ba(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ba(t){return Number(t)*1e3}function Ec(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lo(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ed(t){const e=Ec(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&r1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){const e=t.auth,n=await t.getIdToken(),r=await Us(t,$o(e,{idToken:n}));G(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$f(s.providerUserInfo):[],o=o1(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,c=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function i1(t){const e=st(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $f(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){const n=await Lf(t,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Of(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Fr(t.emulatorConfig.host)&&(l.credentials="include"),Nf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l1(t,e){return mn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ts;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n1(this,e)}reload(){return i1(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Us(this,t1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:u,isAnonymous:v,providerData:g,stsTokenManager:b}=n;G(f&&b,e,"internal-error");const E=Ts.fromJSON(this.name,b);G(typeof f=="string",e,"internal-error"),pr(r,e.name),pr(s,e.name),G(typeof u=="boolean",e,"internal-error"),G(typeof v=="boolean",e,"internal-error"),pr(i,e.name),pr(o,e.name),pr(a,e.name),pr(l,e.name),pr(c,e.name),pr(d,e.name);const I=new yn({uid:f,auth:e,email:s,emailVerified:u,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return g&&Array.isArray(g)&&(I.providerData=g.map(C=>({...C}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ts;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Uo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$f(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ts;a.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function Wn(t){rr(t instanceof Function,"Expected a class definition");let e=td.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uf.type="NONE";const nd=Uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $o(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Wn(nd),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Wn(nd);const o=bo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const u=await $o(e,{idToken:d}).catch(()=>{});if(!u)break;f=await yn._fromGetAccountInfoResponse(e,u,d)}else f=yn._fromJSON(e,d);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new xs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ff(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Hf(e))return"Webos";if(zf(e))return"Safari";if((e.includes("chrome/")||qf(e))&&!e.includes("edge/"))return"Chrome";if(Bf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Ff(t=$t()){return/firefox\//i.test(t)}function zf(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qf(t=$t()){return/crios\//i.test(t)}function jf(t=$t()){return/iemobile/i.test(t)}function Bf(t=$t()){return/android/i.test(t)}function Vf(t=$t()){return/blackberry/i.test(t)}function Hf(t=$t()){return/webos/i.test(t)}function kc(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c1(t=$t()){return kc(t)&&!!window.navigator?.standalone}function u1(){return y_()&&document.documentMode===10}function Wf(t=$t()){return kc(t)||Bf(t)||Hf(t)||Vf(t)||/windows phone/i.test(t)||jf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e=[]){let n;switch(t){case"Browser":n=rd($t());break;case"Worker":n=`${rd($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function h1(t,e={}){return mn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const f1=6;class p1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??f1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $o(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(an(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Tr(this));const n=e?st(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h1(this),n=new p1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Wb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function zr(t){return st(t)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=P_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v1(t){Qi=t}function Cc(t){return Qi.loadJS(t)}function g1(){return Qi.recaptchaV2Script}function _1(){return Qi.recaptchaEnterpriseScript}function b1(){return Qi.gapiScript}function Kf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=500,y1=6e4,co=1e12;class E1{constructor(e){this.auth=e,this.counter=co,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new I1(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||co;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||co;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||co;return this._widgets.get(n)?.execute(),""}}class k1{constructor(){this.enterprise=new C1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class C1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class I1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;G(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=T1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},y1)},w1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function T1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const x1="recaptcha-enterprise",gi="NO_RECAPTCHA";class Yf{constructor(e){this.type=x1,this.auth=zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Mf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Df(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(gi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new k1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zu(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_1();l.length!==0&&(l+=a),Cc(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Va(t,e,n,r=!1,s=!1){const i=new Yf(t);let o;if(s)o=gi;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ha(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Va(t,e,n);return r(t,i).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Va(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const i=await Va(t,e,n,!1,!0);return r(t,i)}}async function S1(t){const e=zr(t),n=await Mf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Df(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Yf(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){const n=pa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;nr(s,"already-initialized")}return n.initialize({options:e})}function R1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Wn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function P1(t,e,n){const r=zr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qf(e),{host:o,port:a}=N1(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(es(c,r.config.emulator)&&es(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Fr(o)?(pc(`${i}//${o}${l}`),mc("Auth",!0)):L1()}function Qf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function N1(t){const e=Qf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:id(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:id(o)}}}function id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="http://localhost";class ns extends Ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:O1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e){return mn(t,"POST","/v1/accounts:sendVerificationCode",$n(t,e))}async function D1(t,e){return ma(t,"POST","/v1/accounts:signInWithPhoneNumber",$n(t,e))}async function M1(t,e){const n=await ma(t,"POST","/v1/accounts:signInWithPhoneNumber",$n(t,e));if(n.temporaryProof)throw li(t,"account-exists-with-different-credential",n);return n}const $1={USER_NOT_FOUND:"user-not-found"};async function U1(t,e){const n={...e,operation:"REAUTH"};return ma(t,"POST","/v1/accounts:signInWithPhoneNumber",$n(t,n),$1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Ic{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new _i({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new _i({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return D1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return M1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return U1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new _i({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ji{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ji{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ji{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=ad(r);return new Fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ad(r);return new Fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends cr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function Xf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function F1(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await Us(t,Xf(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Ec(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Fs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(t,e,n=!1){if(an(t.app))return Promise.reject(Tr(t));const r="signIn",s=await Xf(t,r,e),i=await Fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function q1(t,e){return Zf(zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e){return mn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=st(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,j1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function V1(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function H1(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function ep(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function W1(t){return st(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){return mn(t,"POST","/v2/accounts/mfaEnrollment:start",$n(t,e))}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=1e3,K1=10;class np extends tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);u1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,K1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},G1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}np.type="LOCAL";const Y1=np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rp.type="SESSION";const sp=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Q1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Tc("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const u=f;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(u.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function X1(t){dt().location.href=t}/**
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
 */function xc(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Z1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ew(){return navigator?.serviceWorker?.controller||null}function tw(){return xc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="firebaseLocalStorageDb",nw=1,qo="firebaseLocalStorage",op="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function rw(){const t=indexedDB.deleteDatabase(ip);return new Xi(t).toPromise()}function Cl(){const t=indexedDB.open(ip,nw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qo,{keyPath:op})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qo)?e(r):(r.close(),await rw(),e(await Cl()))})})}async function cd(t,e,n){const r=ga(t,!0).put({[op]:e,value:n});return new Xi(r).toPromise()}async function sw(t,e){const n=ga(t,!1).get(e),r=await new Xi(n).toPromise();return r===void 0?null:r.value}function ud(t,e){const n=ga(t,!0).delete(e);return new Xi(n).toPromise()}const iw=800,ow=3;class ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(tw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Z1(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ew()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await cd(e,zo,"1"),await ud(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ga(s,!1).getAll();return new Xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ap.type="LOCAL";const aw=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){return mn(t,"POST","/v2/accounts/mfaSignIn:start",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=Kf("rcb"),lw=new Yi(3e4,6e4);class cw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!dt().grecaptcha?.render}load(e,n=""){return G(uw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Xu(dt().grecaptcha)?Promise.resolve(dt().grecaptcha):new Promise((r,s)=>{const i=dt().setTimeout(()=>{s(Xt(e,"network-request-failed"))},lw.get());dt()[Wa]=()=>{dt().clearTimeout(i),delete dt()[Wa];const a=dt().grecaptcha;if(!a||!Xu(a)){s(Xt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${g1()}?${ds({onload:Wa,render:"explicit",hl:n})}`;Cc(o).catch(()=>{clearTimeout(i),s(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!dt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function uw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class dw{async load(e){return new E1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="recaptcha",hw={theme:"light",type:"image"};class fw{constructor(e,n,r={...hw}){this.parameters=r,this.type=bi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zr(e),this.isInvisible=this.parameters.size==="invisible",G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;G(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dw:new cw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=dt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(Pf()&&!xc(),this.auth,"internal-error"),await pw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await e1(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function pw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=_i._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function vw(t,e,n){if(an(t.app))return Promise.reject(Tr(t));const r=zr(t),s=await gw(r,e,st(n));return new mw(s,i=>q1(r,i))}async function gw(t,e,n){if(!t._getRecaptchaConfig())try{await S1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){G(s.type==="enroll",t,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,i,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===gi){G(n?.type===bi,c,"argument-error");const f=await Ga(c,d,n);return ld(c,f)}return ld(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{G(s.type==="signin",t,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;G(i,t,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,o,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===gi){G(n?.type===bi,d,"argument-error");const u=await Ga(d,f,n);return dd(d,u)}return dd(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ha(t,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===gi){G(n?.type===bi,l,"argument-error");const d=await Ga(l,c,n);return od(l,d)}return od(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Ga(t,e,n){G(n.type===bi,t,"argument-error");const r=await n.verify();G(typeof r=="string",t,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function _w(t,e){return e?Wn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Ic{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bw(t){return Zf(t.auth,new Sc(t),t.bypassAuthState)}function ww(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),z1(n,new Sc(t),t.bypassAuthState)}async function yw(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),F1(n,new Sc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bw;case"linkViaPopup":case"linkViaRedirect":return yw;case"reauthViaPopup":case"reauthViaRedirect":return ww;default:nr(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Yi(2e3,1e4);class Es extends lp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ew.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="pendingRedirect",wo=new Map;class Cw extends lp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await Iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iw(t,e){const n=Sw(e),r=xw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tw(t,e){wo.set(t._key(),e)}function xw(t){return Wn(t._redirectPersistence)}function Sw(t){return bo(kw,t.config.apiKey,t.name)}async function Aw(t,e,n=!1){if(an(t.app))return Promise.reject(Tr(t));const r=zr(t),s=_w(r,e),o=await new Cw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=600*1e3;class Pw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!cp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Xt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(hd(e))}saveEventToCache(e){this.cachedEventUids.add(hd(e)),this.lastProcessedEventTime=Date.now()}}function hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cp({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Nw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dw=/^https?/;async function Mw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lw(t);for(const n of e)try{if($w(n))return}catch{}nr(t,"unauthorized-domain")}function $w(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dw.test(n))return!1;if(Ow.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Uw=new Yi(3e4,6e4);function fd(){const t=dt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fw(t){return new Promise((e,n)=>{function r(){fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fd(),n(Xt(t,"network-request-failed"))},timeout:Uw.get()})}if(dt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dt().gapi?.load)r();else{const s=Kf("iframefcb");return dt()[s]=()=>{gapi.load?r():n(Xt(t,"network-request-failed"))},Cc(`${b1()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw yo=null,e})}let yo=null;function zw(t){return yo=yo||Fw(t),yo}/**
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
 */const qw=new Yi(5e3,15e3),jw="__/auth/iframe",Bw="emulator/auth/iframe",Vw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ww(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yc(e,Bw):`https://${t.config.authDomain}/${jw}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=Hw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ds(r).slice(1)}`}async function Gw(t){const e=await zw(t),n=dt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Ww(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=dt().setTimeout(()=>{i(o)},qw.get());function l(){dt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yw=500,Qw=600,Jw="_blank",Xw="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zw(t,e,n,r=Yw,s=Qw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Kw,width:r.toString(),height:s.toString(),top:i,left:o},c=$t().toLowerCase();n&&(a=qf(c)?Jw:n),Ff(c)&&(e=e||Xw,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[v,g])=>`${u}${v}=${g},`,"");if(c1(c)&&a!=="_self")return e0(e||"",a),new pd(null);const f=window.open(e||"",a,d);G(f,t,"popup-blocked");try{f.focus()}catch{}return new pd(f)}function e0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const t0="__/auth/handler",n0="emulator/auth/handler",r0=encodeURIComponent("fac");async function md(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof Jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ji){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${r0}=${encodeURIComponent(l)}`:"";return`${s0(t)}?${ds(a).slice(1)}${c}`}function s0({config:t}){return t.emulator?yc(t,n0):`https://${t.authDomain}/${t0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class i0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sp,this._completeRedirectFn=Aw,this._overrideRedirectResult=Tw}async _openPopup(e,n,r,s){rr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await md(e,n,r,El(),s);return Zw(e,i,Tc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await md(e,n,r,El(),s);return X1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gw(e),r=new Pw(e);return n.register("authEvent",s=>(G(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},s=>{const i=s?.[0]?.[Ka];i!==void 0&&n(!!i),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wf()||zf()||kc()}}const o0=i0;var vd="@firebase/auth",gd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c0(t){ts(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gf(t)},c=new m1(r,s,i,l);return R1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Nr("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new a0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(vd,gd,l0(t)),Ln(vd,gd,"esm2020")}/**
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
 */const u0=300,d0=bf("authIdTokenMaxAge")||u0;let _d=null;const h0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>d0)return;const s=n?.token;_d!==s&&(_d=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function f0(t=bc()){const e=pa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A1(t,{popupRedirectResolver:o0,persistence:[aw,Y1,sp]}),r=bf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=h0(i.toString());H1(n,o,()=>o(n.currentUser)),V1(n,a=>o(a))}}const s=vf("auth");return s&&P1(n,`http://${s}`),n}function p0(){return document.getElementsByTagName("head")?.[0]??document}v1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",p0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c0("Browser");var bd={};const wd="@firebase/database",yd="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up="";function m0(t){up=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ri(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v0(e)}}catch{}return new g0},Gr=dp("localStorage"),_0=dp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new gc("@firebase/database"),b0=(function(){let t=1;return function(){return t++}})(),hp=function(t){const e=O_(t),n=new R_;n.update(e);const r=n.digest();return hc.encodeByteArray(r)},Zi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zi.apply(null,r):typeof r=="object"?e+=pt(r):e+=r,e+=" "}return e};let wi=null,Ed=!0;const w0=function(t,e){D(!0,"Can't turn on custom loggers persistently."),As.logLevel=De.VERBOSE,wi=As.log.bind(As)},wt=function(...t){if(Ed===!0&&(Ed=!1,wi===null&&_0.get("logging_enabled")===!0&&w0()),wi){const e=Zi.apply(null,t);wi(e)}},eo=function(t){return function(...e){wt(t,...e)}},Il=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zi(...t);As.error(e)},sr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zi(...t)}`;throw As.error(e),new Error(e)},Mt=function(...t){const e="FIREBASE WARNING: "+Zi(...t);As.warn(e)},y0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ac=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},E0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Lr="[MIN_NAME]",ir="[MAX_NAME]",fs=function(t,e){if(t===e)return 0;if(t===Lr||e===ir)return-1;if(e===Lr||t===ir)return 1;{const n=kd(t),r=kd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},k0=function(t,e){return t===e?0:t<e?-1:1},ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pt(e))},Rc=function(t){if(typeof t!="object"||t===null)return pt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pt(e[r]),n+=":",n+=Rc(t[e[r]]);return n+="}",n},fp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pp=function(t){D(!Ac(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},C0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},I0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function T0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const x0=new RegExp("^-?(0*)\\d{1,10}$"),S0=-2147483648,A0=2147483647,kd=function(t){if(x0.test(t)){const e=Number(t);if(e>=S0&&e<=A0)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},R0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,an(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class Eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="5",mp="v",vp="s",gp="r",_p="f",bp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wp="ls",yp="p",Tl="ac",Ep="websocket",kp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function L0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ip(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Ep)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);L0(t)&&(n.ns=t.namespace);const s=[];return Et(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return d_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={},Qa={};function Nc(t){const e=t.toString();return Ya[e]||(Ya[e]=new O0),Ya[e]}function D0(t,e){const n=t.toString();return Qa[n]||(Qa[n]=e()),Qa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ks(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="start",$0="close",U0="pLPCommand",F0="pRTLPCB",Tp="id",xp="pw",Sp="ser",z0="cb",q0="seg",j0="ts",B0="d",V0="dframe",Ap=1870,Rp=30,H0=Ap-Rp,W0=25e3,G0=3e4;class ks{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=Nc(n),this.urlFn=l=>(this.appCheckToken&&(l[Tl]=this.appCheckToken),Ip(n,kp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new M0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G0)),E0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lc((...i)=>{const[o,a,l,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cd)this.id=a,this.password=l;else if(o===$0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cd]="t",r[Sp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[z0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mp]=Pc,this.transportSessionId&&(r[vp]=this.transportSessionId),this.lastSessionId&&(r[wp]=this.lastSessionId),this.applicationId&&(r[yp]=this.applicationId),this.appCheckToken&&(r[Tl]=this.appCheckToken),typeof location<"u"&&location.hostname&&bp.test(location.hostname)&&(r[gp]=_p);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!C0()&&!I0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pf(n),s=fp(r,H0);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[V0]="t",r[Tp]=e,r[xp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lc{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=b0(),window[U0+this.uniqueCallbackIdentifier]=e,window[F0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tp]=this.myID,e[xp]=this.myPW,e[Sp]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rp+r.length<=Ap;){const o=this.pendingSegs.shift();r=r+"&"+q0+s+"="+o.seg+"&"+j0+s+"="+o.ts+"&"+B0+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(W0)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=16384,Y0=45e3;let jo=null;typeof MozWebSocket<"u"?jo=MozWebSocket:typeof WebSocket<"u"&&(jo=WebSocket);class bn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=Nc(n),this.connURL=bn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[mp]=Pc,typeof location<"u"&&location.hostname&&bp.test(location.hostname)&&(o[gp]=_p),n&&(o[vp]=n),r&&(o[wp]=r),s&&(o[Tl]=s),i&&(o[yp]=i),Ip(e,Ep,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gr.set("previous_websocket_failure",!0);try{let r;E_(),this.mySock=new jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&jo!==null&&!bn.forceDisallow_}static previouslyFailed(){return Gr.isInMemoryStorage||Gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ri(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fp(n,K0);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bn.responsesRequiredToBeHealthy=2;bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{static get ALL_TRANSPORTS(){return[ks,bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=bn&&bn.isAvailable();let r=n&&!bn.previouslyFailed();if(e.webSocketOnly&&(n||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bn];else{const s=this.transports_=[];for(const i of Ni.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ni.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=6e4,J0=5e3,X0=10*1024,Z0=100*1024,Ja="t",Id="d",ey="s",Td="r",ty="e",xd="o",Sd="a",Ad="n",Rd="p",ny="h";class ry{constructor(e,n,r,s,i,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new Ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>X0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===Sd?this.upgradeIfSecondaryHealthy_():n===Td?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ad,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ni(Ja,e);if(Id in e){const r=e[Id];if(n===ny){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ad){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ey?this.onConnectionShutdown_(r):n===Td?this.onReset_(r):n===ty?Il("Server Error: "+r):n===xd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Il("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pc!==r&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(J0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Np{static getInstance(){return new Bo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=32,Nd=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Le("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Or(t){return t.pieces_.length-t.pieceNum_}function qe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function Oc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Li(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=we(t),r=we(e);if(n===null)return e;if(n===r)return Dt(qe(t),qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iy(t,e){const n=Li(t,0),r=Li(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=fs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Dc(t,e){if(Or(t)!==Or(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Or(t)>Or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oy{constructor(e,n){this.errorPrefix_=n,this.parts_=Li(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fa(this.parts_[r]);Op(this)}}function ay(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fa(e),Op(t)}function ly(t){const e=t.parts_.pop();t.byteLength_-=fa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Op(t){if(t.byteLength_>Nd)throw new Error(t.errorPrefix_+"has a key path longer than "+Nd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Pd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pd+") or object contains a cycle "+Vr(t))}function Vr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Np{static getInstance(){return new Mc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e3,cy=300*1e3,Ld=30*1e3,uy=1.3,dy=3e4,hy="server_kill",Od=3;class Zn extends Pp{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zn.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=cy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(pt(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Gi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const r=$s(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||A_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ld)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=S_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Il("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dy&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,a=new ry(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Mt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(hy)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Mt(f),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vl(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Rc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Le(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Od&&(this.reconnectDelay_=Ld,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Od&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+up.replace(/\./g,"-")]=1,vc()?e["framework.cordova"]=1:yf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bo.getInstance().currentlyOnline();return vl(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ee(Lr,e),s=new Ee(Lr,n);return this.compare(r,s)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class Dp extends _a{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(e){uo=e}compare(e,n){return fs(e.name,n.name)}isDefinedOn(e){throw Gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(ir,uo)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,uo)}toString(){return".key"}}const er=new Dp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??jt.EMPTY_NODE,this.right=i??jt.EMPTY_NODE}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return jt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gt.RED=!0;gt.BLACK=!1;class fy{copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,n=jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,gt.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e){return fs(t.name,e.name)}function $c(t,e){return fs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;function my(t){xl=t}const Mp=function(t){return typeof t=="number"?"number:"+pp(t):"string:"+t},$p=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else D(t===xl||t.isEmpty(),"priority of unexpected type.");D(t===xl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd;class vt{static set __childrenNodeConstructor(e){Dd=e}static get __childrenNodeConstructor(){return Dd}constructor(e,n=vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$p(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new vt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:we(e)===".priority"?this.priorityNode_:vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=we(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(qe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pp(this.value_):e+=this.value_,this.lazyHash_=hp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof vt.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=vt.VALUE_TYPE_ORDER.indexOf(n),i=vt.VALUE_TYPE_ORDER.indexOf(r);return D(s>=0,"Unknown leaf type: "+n),D(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up,Fp;function vy(t){Up=t}function gy(t){Fp=t}class _y extends _a{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?fs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(ir,new vt("[PRIORITY-POST]",Fp))}makePost(e,n){const r=Up(e);return new Ee(n,new vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qe=new _y;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=Math.log(2);class wy{constructor(e){const n=i=>parseInt(Math.log(i)/by,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vo=function(t,e,n,r){t.sort(e);const s=function(l,c){const d=c-l;let f,u;if(d===0)return null;if(d===1)return f=t[l],u=n?n(f):f,new gt(u,f.node,gt.BLACK,null,null);{const v=parseInt(d/2,10)+l,g=s(l,v),b=s(v+1,c);return f=t[v],u=n?n(f):f,new gt(u,f.node,gt.BLACK,g,b)}},i=function(l){let c=null,d=null,f=t.length;const u=function(g,b){const E=f-g,I=f;f-=g;const C=s(E+1,I),P=t[E],T=n?n(P):P;v(new gt(T,P.node,b,null,C))},v=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));b?u(E,gt.BLACK):(u(E,gt.BLACK),u(E,gt.RED))}return d},o=new wy(t.length),a=i(o);return new jt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;const bs={};class Gn{static get Default(){return D(bs&&Qe,"ChildrenNode.ts has not been loaded"),Xa=Xa||new Gn({".priority":bs},{".priority":Qe}),Xa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jt?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ee.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Vo(r,e.getCompare()):a=bs;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Gn(d,c)}addToIndexes(e,n){const r=Oo(this.indexes_,(s,i)=>{const o=$s(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),s===bs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vo(a,o.getCompare())}else return bs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new Gn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oo(this.indexes_,s=>{if(s===bs)return s;{const i=n.get(e.name);return i?s.remove(new Ee(e.name,i)):s}});return new Gn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class oe{static get EMPTY_NODE(){return si||(si=new oe(new jt($c),null,Gn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$p(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?si:n}}getChild(e){const n=we(e);return n===null?this:this.getImmediateChild(n).getChild(qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ee(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?si:this.priorityNode_;return new oe(s,o,i)}}updateChild(e,n){const r=we(e);if(r===null)return n;{D(we(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(qe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Qe,(o,a)=>{n[o]=a.val(e),r++,i&&oe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mp(this.getPriority().val())+":"),this.forEachChild(Qe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":hp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ee(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===to?-1:0}withIndex(e){if(e===er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Qe),s=n.getIterator(Qe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===er?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yy extends oe{constructor(){super(new jt($c),oe.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const to=new yy;Object.defineProperties(Ee,{MIN:{value:new Ee(Lr,oe.EMPTY_NODE)},MAX:{value:new Ee(ir,to)}});Dp.__EMPTY_NODE=oe.EMPTY_NODE;vt.__childrenNodeConstructor=oe;my(to);gy(to);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=!0;function ft(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new vt(n,ft(e))}if(!(t instanceof Array)&&Ey){const n=[];let r=!1;if(Et(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ft(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const i=Vo(n,py,o=>o.name,$c);if(r){const o=Vo(n,Qe.getCompare());return new oe(i,ft(e),new Gn({".priority":o},{".priority":Qe}))}else return new oe(i,ft(e),Gn.Default)}else{let n=oe.EMPTY_NODE;return Et(t,(r,s)=>{if(Mn(t,r)&&r.substring(0,1)!=="."){const i=ft(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ft(e))}}vy(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends _a{constructor(e){super(),this.indexPath_=e,D(!ye(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?fs(e.name,n.name):i}makePost(e,n){const r=ft(e),s=oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(n,s)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,to);return new Ee(ir,e)}toString(){return Li(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends _a{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const r=ft(e);return new Ee(n,r)}toString(){return".value"}}const zp=new ky;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){return{type:"value",snapshotNode:t}}function zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Di(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Oi(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zs(n,r)):o.trackChildChange(Di(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Qe,(s,i)=>{n.hasChild(s)||r.trackChildChange(Oi(s,i))}),n.isLeafNode()||n.forEachChild(Qe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Di(s,i,o))}else r.trackChildChange(zs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.indexedFilter_=new Fc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mi.getStartPost_(e),this.endPost_=Mi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new Ee(n,r))||(r=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=oe.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(oe.EMPTY_NODE);const i=this;return n.forEachChild(Qe,(o,a)=>{i.matches(new Ee(o,a))||(s=s.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new Ee(n,r))||(r=oe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=oe.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(oe.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(u,v)=>f(v,u)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new Ee(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const v=u==null?1:o(u,l);if(d&&!r.isEmpty()&&v>=0)return i?.trackChildChange(Di(n,r,f)),a.updateImmediateChild(n,r);{i?.trackChildChange(Oi(n,f));const b=a.updateImmediateChild(n,oe.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(i?.trackChildChange(zs(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return r.isEmpty()?e:d&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Oi(c.name,c.node)),i.trackChildChange(zs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,oe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Lr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ty(t){return t.loadsAllData()?new Fc(t.getIndex()):t.hasLimit()?new Iy(t):new Mi(t)}function xy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Sy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Md(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Ay(t,e,n){let r;return t.index_===er||n?r=Md(t,e,n):r=Md(t,e,ir),r.startAfterSet_=!0,r}function $d(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Ry(t,e,n){let r;return t.index_===er||n?r=$d(t,e,n):r=$d(t,e,Lr),r.endBeforeSet_=!0,r}function Py(t,e){const n=t.copy();return n.index_=e,n}function Ud(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Qe?n="$priority":t.index_===zp?n="$value":t.index_===er?n="$key":(D(t.index_ instanceof Uc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Qe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Pp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=eo("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ho.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ud(e._queryParams);this.restRequest_(i+".json",l,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),$s(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,n){const r=Ho.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ud(e._queryParams),r=e._path.toString(),s=new Gi;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ri(a.responseText)}catch{Mt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Mt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return{value:null,children:new Map}}function jp(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=we(e);t.children.has(r)||t.children.set(r,Wo());const s=t.children.get(r);e=qe(e),jp(s,e,n)}}function Sl(t,e,n){t.value!==null?n(e,t.value):Ly(t,(r,s)=>{const i=new Le(e.toString()+"/"+r);Sl(s,i,n)})}function Ly(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Et(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=10*1e3,Dy=30*1e3,My=300*1e3;class $y{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Oy(e);const r=zd+(Dy-zd)*Math.random();yi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Et(e,(s,i)=>{i>0&&Mn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*My))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function qc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=En.ACK_USER_WRITE,this.source=qc()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new Go(Se(),n,this.revert)}}else return D(we(this.path)===e,"operationForChild called for unrelated child."),new Go(qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.source=e,this.path=n,this.type=En.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new $i(this.source,Se()):new $i(this.source,qe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=En.OVERWRITE}operationForChild(e){return ye(this.path)?new rs(this.source,Se(),this.snap.getImmediateChild(e)):new rs(this.source,qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=En.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new rs(this.source,Se(),n.value):new qs(this.source,Se(),n)}else return D(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qs(this.source,qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=we(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fy(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Cy(o.childName,o.snapshotNode))}),ii(t,s,"child_removed",e,r,n),ii(t,s,"child_added",e,r,n),ii(t,s,"child_moved",i,r,n),ii(t,s,"child_changed",e,r,n),ii(t,s,"value",e,r,n),s}function ii(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>qy(t,a,l)),o.forEach(a=>{const l=zy(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function zy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qy(t,e,n){if(e.childName==null||n.childName==null)throw Gs("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),s=new Ee(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return ba(new Dr(e,n,r),t.serverCache)}function Bp(t,e,n,r){return ba(t.eventCache,new Dr(e,n,r))}function Ko(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const jy=()=>(Za||(Za=new jt(k0)),Za);class ze{static fromObject(e){let n=new ze(null);return Et(e,(r,s)=>{n=n.set(new Le(r),s)}),n}constructor(e,n=jy()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ye(e))return null;{const r=we(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(qe(e),n);return i!=null?{path:Xe(new Le(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=we(e),r=this.children.get(n);return r!==null?r.subtree(qe(e)):new ze(null)}}set(e,n){if(ye(e))return new ze(n,this.children);{const r=we(e),i=(this.children.get(r)||new ze(null)).set(qe(e),n),o=this.children.insert(r,i);return new ze(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const n=we(e),r=this.children.get(n);if(r){const s=r.remove(qe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ze(null):new ze(this.value,i)}else return this}}get(e){if(ye(e))return this.value;{const n=we(e),r=this.children.get(n);return r?r.get(qe(e)):null}}setTree(e,n){if(ye(e))return n;{const r=we(e),i=(this.children.get(r)||new ze(null)).setTree(qe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ze(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ye(e))return null;{const i=we(e),o=this.children.get(i);return o?o.findOnPath_(qe(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const s=we(e),i=this.children.get(s);return i?i.foreachOnPath_(qe(e),Xe(n,s),r):new ze(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new ze(null))}}function ki(t,e,n){if(ye(e))return new kn(new ze(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Dt(s,e);return i=i.updateChild(o,n),new kn(t.writeTree_.set(s,i))}else{const s=new ze(n),i=t.writeTree_.setTree(e,s);return new kn(i)}}}function Al(t,e,n){let r=t;return Et(n,(s,i)=>{r=ki(r,Xe(e,s),i)}),r}function qd(t,e){if(ye(e))return kn.empty();{const n=t.writeTree_.setTree(e,new ze(null));return new kn(n)}}function Rl(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function jd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Qe,(r,s)=>{e.push(new Ee(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ee(r,s.value))}),e}function xr(t,e){if(ye(e))return t;{const n=ps(t,e);return n!=null?new kn(new ze(n)):new kn(t.writeTree_.subtree(e))}}function Pl(t){return t.writeTree_.isEmpty()}function js(t,e){return Vp(Se(),t.writeTree_,e)}function Vp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Vp(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e){return Kp(e,t)}function By(t,e,n,r,s){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ki(t.visibleWrites,e,n)),t.lastWriteId=r}function Vy(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Al(t.visibleWrites,e,n),t.lastWriteId=r}function Hy(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Wy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Gy(a,r.path)?s=!1:ln(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Ky(t),!0;if(r.snap)t.visibleWrites=qd(t.visibleWrites,r.path);else{const a=r.children;Et(a,l=>{t.visibleWrites=qd(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function Gy(t,e){if(t.snap)return ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ln(Xe(t.path,n),e))return!0;return!1}function Ky(t){t.visibleWrites=Hp(t.allWrites,Yy,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yy(t){return t.visible}function Hp(t,e,n){let r=kn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ln(n,o)?(a=Dt(n,o),r=ki(r,a,i.snap)):ln(o,n)&&(a=Dt(o,n),r=ki(r,Se(),i.snap.getChild(a)));else if(i.children){if(ln(n,o))a=Dt(n,o),r=Al(r,a,i.children);else if(ln(o,n))if(a=Dt(o,n),ye(a))r=Al(r,Se(),i.children);else{const l=$s(i.children,we(a));if(l){const c=l.getChild(qe(a));r=ki(r,Se(),c)}}}else throw Gs("WriteRecord should have .snap or .children")}}return r}function Wp(t,e,n,r,s){if(!r&&!s){const i=ps(t.visibleWrites,e);if(i!=null)return i;{const o=xr(t.visibleWrites,e);if(Pl(o))return n;if(n==null&&!Rl(o,Se()))return null;{const a=n||oe.EMPTY_NODE;return js(o,a)}}}else{const i=xr(t.visibleWrites,e);if(!s&&Pl(i))return n;if(!s&&n==null&&!Rl(i,Se()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(ln(c.path,e)||ln(e,c.path))},a=Hp(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return js(a,l)}}}function Qy(t,e,n){let r=oe.EMPTY_NODE;const s=ps(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Qe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=xr(t.visibleWrites,e);return n.forEachChild(Qe,(o,a)=>{const l=js(xr(i,new Le(o)),a);r=r.updateImmediateChild(o,l)}),jd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=xr(t.visibleWrites,e);return jd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Jy(t,e,n,r,s){D(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(Rl(t.visibleWrites,i))return null;{const o=xr(t.visibleWrites,i);return Pl(o)?s.getChild(n):js(o,s.getChild(n))}}function Xy(t,e,n,r){const s=Xe(e,n),i=ps(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=xr(t.visibleWrites,s);return js(o,r.getNode().getImmediateChild(n))}else return null}function Zy(t,e){return ps(t.visibleWrites,e)}function eE(t,e,n,r,s,i,o){let a;const l=xr(t.visibleWrites,e),c=ps(l,Se());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),u=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=u.getNext();for(;v&&d.length<s;)f(v,r)!==0&&d.push(v),v=u.getNext();return d}else return[]}function tE(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function Yo(t,e,n,r){return Wp(t.writeTree,t.treePath,e,n,r)}function Vc(t,e){return Qy(t.writeTree,t.treePath,e)}function Bd(t,e,n,r){return Jy(t.writeTree,t.treePath,e,n,r)}function Qo(t,e){return Zy(t.writeTree,Xe(t.treePath,e))}function nE(t,e,n,r,s,i){return eE(t.writeTree,t.treePath,e,n,r,s,i)}function Hc(t,e,n){return Xy(t.writeTree,t.treePath,e,n)}function Gp(t,e){return Kp(Xe(t.treePath,e),t.writeTree)}function Kp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Di(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Oi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,zs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Di(r,e.snapshotNode,s.oldSnap));else throw Gs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Yp=new sE;class Wc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),i=nE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){return{filter:t}}function oE(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aE(t,e,n,r,s){const i=new rE;let o,a;if(n.type===En.OVERWRITE){const c=n;c.source.fromUser?o=Nl(t,e,c.path,c.snap,r,s,i):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Jo(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===En.MERGE){const c=n;c.source.fromUser?o=cE(t,e,c.path,c.children,r,s,i):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ll(t,e,c.path,c.children,r,s,a,i))}else if(n.type===En.ACK_USER_WRITE){const c=n;c.revert?o=hE(t,e,c.path,r,s,i):o=uE(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===En.LISTEN_COMPLETE)o=dE(t,e,n.path,r,i);else throw Gs("Unknown operation type: "+n.type);const l=i.getChanges();return lE(e,o,l),{viewCache:o,changes:l}}function lE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ko(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(qp(Ko(e)))}}function Qp(t,e,n,r,s,i){const o=e.eventCache;if(Qo(r,n)!=null)return e;{let a,l;if(ye(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ss(e),d=c instanceof oe?c:oe.EMPTY_NODE,f=Vc(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Yo(r,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=we(n);if(c===".priority"){D(Or(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Bd(r,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=qe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Bd(r,n,o.getNode(),l);u!=null?f=o.getNode().getImmediateChild(c).updateChild(d,u):f=o.getNode().getImmediateChild(c)}else f=Hc(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,s,i):a=o.getNode()}}return Ei(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Jo(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),v,null)}else{const v=we(n);if(!l.isCompleteForPath(n)&&Or(n)>1)return e;const g=qe(n),E=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),v,E,g,Yp,null)}const f=Bp(e,c,l.isFullyInitialized()||ye(n),d.filtersNodes()),u=new Wc(s,f,i);return Qp(t,f,n,s,u,a)}function Nl(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const d=new Wc(s,e,i);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ei(e,c,!0,t.filter.filtersNodes());else{const f=we(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ei(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=qe(n),v=a.getNode().getImmediateChild(f);let g;if(ye(u))g=r;else{const b=d.getCompleteChild(f);b!=null?Oc(u)===".priority"&&b.getChild(Lp(u)).isEmpty()?g=b:g=b.updateChild(u,r):g=oe.EMPTY_NODE}if(v.equals(g))l=e;else{const b=t.filter.updateChild(a.getNode(),f,g,u,d,o);l=Ei(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Vd(t,e){return t.eventCache.isCompleteForChild(e)}function cE(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const d=Xe(n,l);Vd(e,we(d))&&(a=Nl(t,a,d,c,s,i,o))}),r.foreach((l,c)=>{const d=Xe(n,l);Vd(e,we(d))||(a=Nl(t,a,d,c,s,i,o))}),a}function Hd(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ll(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=r:c=new ze(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,u)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),g=Hd(t,v,u);l=Jo(t,l,new Le(f),g,s,i,o,a)}}),c.children.inorderTraversal((f,u)=>{const v=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!d.hasChild(f)&&!v){const g=e.serverCache.getNode().getImmediateChild(f),b=Hd(t,g,u);l=Jo(t,l,new Le(f),b,s,i,o,a)}}),l}function uE(t,e,n,r,s,i,o){if(Qo(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jo(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ye(n)){let c=new ze(null);return l.getNode().forEachChild(er,(d,f)=>{c=c.set(new Le(d),f)}),Ll(t,e,n,c,s,i,a,o)}else return e}else{let c=new ze(null);return r.foreach((d,f)=>{const u=Xe(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),Ll(t,e,n,c,s,i,a,o)}}function dE(t,e,n,r,s){const i=e.serverCache,o=Bp(e,i.getNode(),i.isFullyInitialized()||ye(n),i.isFiltered());return Qp(t,o,n,r,Yp,s)}function hE(t,e,n,r,s,i){let o;if(Qo(r,n)!=null)return e;{const a=new Wc(r,e,s),l=e.eventCache.getNode();let c;if(ye(n)||we(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yo(r,ss(e));else{const f=e.serverCache.getNode();D(f instanceof oe,"serverChildren would be complete if leaf node"),d=Vc(r,f)}d=d,c=t.filter.updateFullNode(l,d,i)}else{const d=we(n);let f=Hc(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?c=t.filter.updateChild(l,d,f,qe(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,oe.EMPTY_NODE,qe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yo(r,ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Qo(r,Se())!=null,Ei(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Fc(r.getIndex()),i=Ty(r);this.processor_=iE(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),d=new Dr(l,o.isFullyInitialized(),s.filtersNodes()),f=new Dr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ba(f,d),this.eventGenerator_=new Uy(this.query_)}get query(){return this.query_}}function pE(t){return t.viewCache_.serverCache.getNode()}function mE(t){return Ko(t.viewCache_)}function vE(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(we(e)).isEmpty())?n.getChild(e):null}function Wd(t){return t.eventRegistrations_.length===0}function gE(t,e){t.eventRegistrations_.push(e)}function Gd(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Kd(t,e,n,r){e.type===En.MERGE&&e.source.queryId!==null&&(D(ss(t.viewCache_),"We should always have a full cache before handling merges"),D(Ko(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=aE(t.processor_,s,e,n,r);return oE(t.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Jp(t,i.changes,i.viewCache.eventCache.getNode(),null)}function _E(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,(i,o)=>{r.push(zs(i,o))}),n.isFullyInitialized()&&r.push(qp(n.getNode())),Jp(t,r,n.getNode(),e)}function Jp(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Fy(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class Xp{constructor(){this.views=new Map}}function bE(t){D(!Xo,"__referenceConstructor has already been defined"),Xo=t}function wE(){return D(Xo,"Reference.ts has not been loaded"),Xo}function yE(t){return t.views.size===0}function Gc(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return D(i!=null,"SyncTree gave us an op for an invalid query."),Kd(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Kd(o,e,n,r));return i}}function Zp(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Yo(n,s?r:null),l=!1;a?l=!0:r instanceof oe?(a=Vc(n,r),l=!1):(a=oe.EMPTY_NODE,l=!1);const c=ba(new Dr(a,l,!1),new Dr(r,s,!1));return new fE(e,c)}return o}function EE(t,e,n,r,s,i){const o=Zp(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gE(o,n),_E(o,n)}function kE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Mr(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Gd(c,n,r)),Wd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Gd(l,n,r)),Wd(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Mr(t)&&i.push(new(wE())(e._repo,e._path)),{removed:i,events:o}}function em(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Sr(t,e){let n=null;for(const r of t.views.values())n=n||vE(r,e);return n}function tm(t,e){if(e._queryParams.loadsAllData())return ya(t);{const r=e._queryIdentifier;return t.views.get(r)}}function nm(t,e){return tm(t,e)!=null}function Mr(t){return ya(t)!=null}function ya(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;function CE(t){D(!Zo,"__referenceConstructor has already been defined"),Zo=t}function IE(){return D(Zo,"Reference.ts has not been loaded"),Zo}let TE=1;class Yd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=tE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rm(t,e,n,r,s){return By(t.pendingWriteTree_,e,n,r,s),s?Ys(t,new rs(qc(),e,n)):[]}function xE(t,e,n,r){Vy(t.pendingWriteTree_,e,n,r);const s=ze.fromObject(n);return Ys(t,new qs(qc(),e,s))}function yr(t,e,n=!1){const r=Hy(t.pendingWriteTree_,e);if(Wy(t.pendingWriteTree_,e)){let i=new ze(null);return r.snap!=null?i=i.set(Se(),!0):Et(r.children,o=>{i=i.set(new Le(o),!0)}),Ys(t,new Go(r.path,i,n))}else return[]}function no(t,e,n){return Ys(t,new rs(jc(),e,n))}function SE(t,e,n){const r=ze.fromObject(n);return Ys(t,new qs(jc(),e,r))}function AE(t,e){return Ys(t,new $i(jc(),e))}function RE(t,e,n){const r=Yc(t,n);if(r){const s=Qc(r),i=s.path,o=s.queryId,a=Dt(i,e),l=new $i(Bc(o),a);return Jc(t,i,l)}else return[]}function ea(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||nm(o,e))){const l=kE(o,e,n,r);yE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(u,v)=>Mr(v));if(d&&!f){const u=t.syncPointTree_.subtree(i);if(!u.isEmpty()){const v=LE(u);for(let g=0;g<v.length;++g){const b=v[g],E=b.query,I=am(t,b);t.listenProvider_.startListening(Ci(E),Ui(t,E),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ci(e),null):c.forEach(u=>{const v=t.queryToTagMap.get(Ea(u));t.listenProvider_.stopListening(Ci(u),v)}))}OE(t,c)}return a}function sm(t,e,n,r){const s=Yc(t,r);if(s!=null){const i=Qc(s),o=i.path,a=i.queryId,l=Dt(o,e),c=new rs(Bc(a),l,n);return Jc(t,o,c)}else return[]}function PE(t,e,n,r){const s=Yc(t,r);if(s){const i=Qc(s),o=i.path,a=i.queryId,l=Dt(o,e),c=ze.fromObject(n),d=new qs(Bc(a),l,c);return Jc(t,o,d)}else return[]}function Ol(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(u,v)=>{const g=Dt(u,s);i=i||Sr(v,g),o=o||Mr(v)});let a=t.syncPointTree_.get(s);a?(o=o||Mr(a),i=i||Sr(a,Se())):(a=new Xp,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=oe.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,g)=>{const b=Sr(g,Se());b&&(i=i.updateImmediateChild(v,b))}));const c=nm(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Ea(e);D(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const v=DE();t.queryToTagMap.set(u,v),t.tagToQueryMap.set(v,u)}const d=wa(t.pendingWriteTree_,s);let f=EE(a,e,n,d,i,l);if(!c&&!o&&!r){const u=tm(a,e);f=f.concat(ME(t,e,u))}return f}function Kc(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Dt(o,e),c=Sr(a,l);if(c)return c});return Wp(s,e,i,n,!0)}function NE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const f=Dt(c,n);r=r||Sr(d,f)});let s=t.syncPointTree_.get(n);s?r=r||Sr(s,Se()):(s=new Xp,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Dr(r,!0,!1):null,a=wa(t.pendingWriteTree_,e._path),l=Zp(s,e,a,i?o.getNode():oe.EMPTY_NODE,i);return mE(l)}function Ys(t,e){return im(e,t.syncPointTree_,null,wa(t.pendingWriteTree_,Se()))}function im(t,e,n,r){if(ye(t.path))return om(t,e,n,r);{const s=e.get(Se());n==null&&s!=null&&(n=Sr(s,Se()));let i=[];const o=we(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Gp(r,o);i=i.concat(im(a,l,c,d))}return s&&(i=i.concat(Gc(s,t,r,n))),i}}function om(t,e,n,r){const s=e.get(Se());n==null&&s!=null&&(n=Sr(s,Se()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Gp(r,o),d=t.operationForChild(o);d&&(i=i.concat(om(d,a,l,c)))}),s&&(i=i.concat(Gc(s,t,r,n))),i}function am(t,e){const n=e.query,r=Ui(t,n);return{hashFn:()=>(pE(e)||oe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?RE(t,n._path,r):AE(t,n._path);{const i=T0(s,n);return ea(t,n,null,i)}}}}function Ui(t,e){const n=Ea(e);return t.queryToTagMap.get(n)}function Ea(t){return t._path.toString()+"$"+t._queryIdentifier}function Yc(t,e){return t.tagToQueryMap.get(e)}function Qc(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function Jc(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const s=wa(t.pendingWriteTree_,e);return Gc(r,n,s,null)}function LE(t){return t.fold((e,n,r)=>{if(n&&Mr(n))return[ya(n)];{let s=[];return n&&(s=em(n)),Et(r,(i,o)=>{s=s.concat(o)}),s}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(IE())(t._repo,t._path):t}function OE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ea(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function DE(){return TE++}function ME(t,e,n){const r=e._path,s=Ui(t,e),i=am(t,n),o=t.listenProvider_.startListening(Ci(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)D(!Mr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,f)=>{if(!ye(c)&&d&&Mr(d))return[ya(d).query];{let u=[];return d&&(u=u.concat(em(d).map(v=>v.query))),Et(f,(v,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Ci(d),Ui(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xc(n)}node(){return this.node_}}class Zc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Zc(this.syncTree_,n)}node(){return Kc(this.syncTree_,this.path_)}}const $E=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qd=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FE(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},FE=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},lm=function(t,e,n,r){return eu(e,new Zc(n,t),r)},cm=function(t,e,n){return eu(t,new Xc(e),n)};function eu(t,e,n){const r=t.getPriority().val(),s=Qd(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Qd(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new vt(a,ft(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new vt(s))),o.forEachChild(Qe,(a,l)=>{const c=eu(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nu(t,e){let n=e instanceof Le?e:new Le(e),r=t,s=we(n);for(;s!==null;){const i=$s(r.node.children,s)||{children:{},childCount:0};r=new tu(s,r,i),n=qe(n),s=we(n)}return r}function Qs(t){return t.node.value}function um(t,e){t.node.value=e,Dl(t)}function dm(t){return t.node.childCount>0}function zE(t){return Qs(t)===void 0&&!dm(t)}function ka(t,e){Et(t.node.children,(n,r)=>{e(new tu(n,t,r))})}function hm(t,e,n,r){n&&e(t),ka(t,s=>{hm(s,e,!0)})}function qE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ro(t){return new Le(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function Dl(t){t.parent!==null&&jE(t.parent,t.name,t)}function jE(t,e,n){const r=zE(n),s=Mn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Dl(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Dl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=/[\[\].#$\/\u0000-\u001F\u007F]/,VE=/[\[\].#$\u0000-\u001F\u007F]/,el=10*1024*1024,ru=function(t){return typeof t=="string"&&t.length!==0&&!BE.test(t)},fm=function(t){return typeof t=="string"&&t.length!==0&&!VE.test(t)},HE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fm(t)},Ml=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ac(t)||t&&typeof t=="object"&&Mn(t,".sv")},Ca=function(t,e,n,r){r&&e===void 0||Ia(ha(t,"value"),e,n)},Ia=function(t,e,n){const r=n instanceof Le?new oy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vr(r)+" with contents = "+e.toString());if(Ac(e))throw new Error(t+"contains "+e.toString()+" "+Vr(r));if(typeof e=="string"&&e.length>el/3&&fa(e)>el)throw new Error(t+"contains a string greater than "+el+" utf8 bytes "+Vr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Et(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ru(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ay(r,o),Ia(t,a,r),ly(r)}),s&&i)throw new Error(t+' contains ".value" child '+Vr(r)+" in addition to actual children.")}},WE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Li(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ru(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iy);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&ln(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},GE=function(t,e,n,r){const s=ha(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Et(e,(o,a)=>{const l=new Le(o);if(Ia(s,a,Xe(n,l)),Oc(l)===".priority"&&!Ml(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),WE(s,i)},su=function(t,e,n,r){if(!fm(n))throw new Error(ha(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),su(t,e,n)},pm=function(t,e){if(we(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ru(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HE(n))throw new Error(ha(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ta(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Dc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function mm(t,e,n){Ta(t,n),vm(t,r=>Dc(r,e))}function pn(t,e,n){Ta(t,n),vm(t,r=>ln(r,e)||ln(e,r))}function vm(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(JE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wi&&wt("event: "+n.toString()),Ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="repo_interrupt",ZE=25;class ek{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wo(),this.transactionQueueTree_=new tu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tk(t,e,n){if(t.stats_=Nc(t.repoInfo_),t.forceRestClient_||R0())t.server_=new Ho(t.repoInfo_,(r,s,i,o)=>{Jd(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,s,i,o)=>{Jd(t,r,s,i,o)},r=>{Xd(t,r)},r=>{nk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=D0(t.repoInfo_,()=>new $y(t.stats_,t.server_)),t.infoData_=new Ny,t.infoSyncTree_=new Yd({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=no(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),iu(t,"connected",!1),t.serverSyncTree_=new Yd({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);pn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function gm(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xa(t){return $E({timestamp:gm(t)})}function Jd(t,e,n,r,s){t.dataUpdateCount++;const i=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Oo(n,c=>ft(c));o=PE(t.serverSyncTree_,i,l,s)}else{const l=ft(n);o=sm(t.serverSyncTree_,i,l,s)}else if(r){const l=Oo(n,c=>ft(c));o=SE(t.serverSyncTree_,i,l)}else{const l=ft(n);o=no(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Bs(t,i)),pn(t.eventQueue_,a,o)}function Xd(t,e){iu(t,"connected",e),e===!1&&ok(t)}function nk(t,e){Et(e,(n,r)=>{iu(t,n,r)})}function iu(t,e,n){const r=new Le("/.info/"+e),s=ft(n);t.infoData_.updateSnapshot(r,s);const i=no(t.infoSyncTree_,r,s);pn(t.eventQueue_,r,i)}function ou(t){return t.nextWriteId_++}function rk(t,e,n){const r=NE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ft(s).withIndex(e._queryParams.getIndex());Ol(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=no(t.serverSyncTree_,e._path,i);else{const a=Ui(t.serverSyncTree_,e);o=sm(t.serverSyncTree_,e._path,i,a)}return pn(t.eventQueue_,e._path,o),ea(t.serverSyncTree_,e,n,null,!0),i},s=>(so(t,"get for query "+pt(e)+" failed: "+s),Promise.reject(new Error(s))))}function sk(t,e,n,r,s){so(t,"set",{path:e.toString(),value:n,priority:r});const i=xa(t),o=ft(n,r),a=Kc(t.serverSyncTree_,e),l=cm(o,a,i),c=ou(t),d=rm(t.serverSyncTree_,e,l,c,!0);Ta(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,v)=>{const g=u==="ok";g||Mt("set at "+e+" failed: "+u);const b=yr(t.serverSyncTree_,c,!g);pn(t.eventQueue_,e,b),Ul(t,s,u,v)});const f=lu(t,e);Bs(t,f),pn(t.eventQueue_,f,[])}function ik(t,e,n,r){so(t,"update",{path:e.toString(),value:n});let s=!0;const i=xa(t),o={};if(Et(n,(a,l)=>{s=!1,o[a]=lm(Xe(e,a),ft(l),t.serverSyncTree_,i)}),s)wt("update() called with empty data.  Don't do anything."),Ul(t,r,"ok",void 0);else{const a=ou(t),l=xE(t.serverSyncTree_,e,o,a);Ta(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const f=c==="ok";f||Mt("update at "+e+" failed: "+c);const u=yr(t.serverSyncTree_,a,!f),v=u.length>0?Bs(t,e):e;pn(t.eventQueue_,v,u),Ul(t,r,c,d)}),Et(n,c=>{const d=lu(t,Xe(e,c));Bs(t,d)}),pn(t.eventQueue_,e,[])}}function ok(t){so(t,"onDisconnectEvents");const e=xa(t),n=Wo();Sl(t.onDisconnect_,Se(),(s,i)=>{const o=lm(s,i,t.serverSyncTree_,e);jp(n,s,o)});let r=[];Sl(n,Se(),(s,i)=>{r=r.concat(no(t.serverSyncTree_,s,i));const o=lu(t,s);Bs(t,o)}),t.onDisconnect_=Wo(),pn(t.eventQueue_,Se(),r)}function ak(t,e,n){let r;we(e._path)===".info"?r=Ol(t.infoSyncTree_,e,n):r=Ol(t.serverSyncTree_,e,n),mm(t.eventQueue_,e._path,r)}function $l(t,e,n){let r;we(e._path)===".info"?r=ea(t.infoSyncTree_,e,n):r=ea(t.serverSyncTree_,e,n),mm(t.eventQueue_,e._path,r)}function lk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XE)}function so(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function Ul(t,e,n,r){e&&Ks(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function _m(t,e,n){return Kc(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function au(t,e=t.transactionQueueTree_){if(e||Sa(t,e),Qs(e)){const n=wm(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&ck(t,ro(e),n)}else dm(e)&&ka(e,n=>{au(t,n)})}function ck(t,e,n){const r=n.map(c=>c.currentWriteId),s=_m(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];D(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Dt(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{so(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(yr(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&f.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();Sa(t,nu(t.transactionQueueTree_,e)),au(t,t.transactionQueueTree_),pn(t.eventQueue_,e,d);for(let u=0;u<f.length;u++)Ks(f[u])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Mt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Bs(t,e)}},o)}function Bs(t,e){const n=bm(t,e),r=ro(n),s=wm(t,n);return uk(t,s,r),r}function uk(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Dt(n,l.path);let d=!1,f;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZE)d=!0,f="maxretry",s=s.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else{const u=_m(t,l.path,o);l.currentInputSnapshot=u;const v=e[a].update(u.val());if(v!==void 0){Ia("transaction failed: Data returned ",v,l.path);let g=ft(v);typeof v=="object"&&v!=null&&Mn(v,".priority")||(g=g.updatePriority(u.getPriority()));const E=l.currentWriteId,I=xa(t),C=cm(g,u,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=ou(t),o.splice(o.indexOf(E),1),s=s.concat(rm(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(yr(t.serverSyncTree_,E,!0))}else d=!0,f="nodata",s=s.concat(yr(t.serverSyncTree_,l.currentWriteId,!0))}pn(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Sa(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ks(r[a]);au(t,t.transactionQueueTree_)}function bm(t,e){let n,r=t.transactionQueueTree_;for(n=we(e);n!==null&&Qs(r)===void 0;)r=nu(r,n),e=qe(e),n=we(e);return r}function wm(t,e){const n=[];return ym(t,e,n),n.sort((r,s)=>r.order-s.order),n}function ym(t,e,n){const r=Qs(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ka(e,s=>{ym(t,s,n)})}function Sa(t,e){const n=Qs(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,um(e,n.length>0?n:void 0)}ka(e,r=>{Sa(t,r)})}function lu(t,e){const n=ro(bm(t,e)),r=nu(t.transactionQueueTree_,e);return qE(r,s=>{tl(t,s)}),tl(t,r),hm(r,s=>{tl(t,s)}),n}function tl(t,e){const n=Qs(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(yr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?um(e,void 0):n.length=i+1,pn(t.eventQueue_,ro(e),s);for(let o=0;o<r.length;o++)Ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zd=function(t,e){const n=fk(t),r=n.namespace;n.domain==="firebase.com"&&sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||y0();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cp(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Le(n.pathString)}},fk=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=dk(t.substring(d,f)));const u=hk(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in u&&(i=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pk=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=eh.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=eh.charAt(e[s]);return D(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pt(this.snapshot.exportVal())}}class vk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ye(this._path)?null:Oc(this._path)}get ref(){return new ur(this._repo,this._path)}get _queryIdentifier(){const e=Fd(this._queryParams),n=Rc(e);return n==="{}"?"default":n}get _queryObject(){return Fd(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof qr))return!1;const n=this._repo===e._repo,r=Dc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+sy(this._path)}}function gk(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function cu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===er){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Lr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==ir)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===Qe){if(e!=null&&!Ml(e)||n!=null&&!Ml(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof Uc||t.getIndex()===zp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function km(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ur extends qr{constructor(e,n){super(e,n,new zc,!1)}get parent(){const e=Lp(this._path);return e===null?null:new ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Le(e),r=zi(this.ref,e);return new Fi(this._node.getChild(n),r,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Fi(s,zi(this.ref,r),Qe)))}hasChild(e){const n=new Le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ar(t,e){return t=st(t),t._checkNotDeleted("ref"),e!==void 0?zi(t._root,e):t._root}function zi(t,e){return t=st(t),we(t._path)===null?KE("child","path",e):su("child","path",e),new ur(t._repo,Xe(t._path,e))}function Cm(t,e){t=st(t),pm("push",t._path),Ca("push",e,t._path,!0);const n=gm(t._repo),r=pk(n),s=zi(t,r),i=zi(t,r);let o;return e!=null?o=_k(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function _k(t,e){t=st(t),pm("set",t._path),Ca("set",e,t._path,!1);const n=new Gi;return sk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bk(t,e){GE("update",e,t._path);const n=new Gi;return ik(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function th(t){t=st(t);const e=new Em(()=>{}),n=new Aa(e);return rk(t._repo,t,n).then(r=>new Fi(r,new ur(t._repo,t._path),t._queryParams.getIndex()))}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mk("value",this,new Fi(e.snapshotNode,new ur(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vk(this,e,n):null}matches(e){return e instanceof Aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wk(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(d,f)=>{$l(t._repo,t,a),l(d,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Em(n,i||void 0),a=new Aa(o);return ak(t._repo,t,a),()=>$l(t._repo,t,a)}function uu(t,e,n,r){return wk(t,"value",e,n,r)}function yk(t,e,n){$l(t._repo,t,null)}class io{}class Ek extends io{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Ca("endBefore",this._value,e._path,!1);const n=Ry(e._queryParams,this._value,this._key);if(km(n),cu(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qr(e._repo,e._path,n,e._orderByCalled)}}function kk(t,e){return new Ek(t,e)}class Ck extends io{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Ca("startAfter",this._value,e._path,!1);const n=Ay(e._queryParams,this._value,this._key);if(km(n),cu(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new qr(e._repo,e._path,n,e._orderByCalled)}}function Ik(t,e){return new Ck(t,e)}class Tk extends io{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new qr(e._repo,e._path,xy(e._queryParams,this._limit),e._orderByCalled)}}function nh(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Tk(t)}class xk extends io{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qr(e._repo,e._path,Sy(e._queryParams,this._limit),e._orderByCalled)}}function rh(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new xk(t)}class Sk extends io{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){gk(e,"orderByChild");const n=new Le(this._path);if(ye(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Uc(n),s=Py(e._queryParams,r);return cu(s),new qr(e._repo,e._path,s,!0)}}function fo(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return su("orderByChild","path",t),new Sk(t)}function po(t,...e){let n=st(t);for(const r of e)n=r._apply(n);return n}bE(ur);CE(ur);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="FIREBASE_DATABASE_EMULATOR_HOST",Fl={};let Rk=!1;function Pk(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Fr(i);t.repoInfo_=new Cp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Nk(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zd(i,s),a=o.repoInfo,l;typeof process<"u"&&bd&&(l=bd[Ak]),l?(i=`http://${l}?ns=${a.namespace}`,o=Zd(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new N0(t.name,t.options,e);YE("Invalid Firebase Database URL",o),ye(o.path)||sr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ok(a,t,c,new P0(t,n));return new Dk(d,t)}function Lk(t,e){const n=Fl[e];(!n||n[t.key]!==t)&&sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lk(t),delete n[t.key]}function Ok(t,e,n,r){let s=Fl[e.name];s||(s={},Fl[e.name]=s);let i=s[t.toURLString()];return i&&sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ek(t,Rk,n,r),s[t.toURLString()]=i,i}class Dk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ur(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sr("Cannot call "+e+" on a deleted database.")}}function Mk(t=bc(),e){const n=pa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=gf("database");r&&$k(n,...r)}return n}function $k(t,e,n,r={}){t=st(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&es(r,i.repoInfo_.emulatorOptions))return;sr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Eo(Eo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:wf(r.mockUserToken,t.app.options.projectId);o=new Eo(a)}Fr(e)&&(pc(e),mc("Database",!0)),Pk(i,s,r,o)}/**
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
 */function Uk(t){m0(hs),ts(new Nr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Nk(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Ln(wd,yd,t),Ln(wd,yd,"esm2020")}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Uk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="firebasestorage.googleapis.com",Tm="storageBucket",Fk=120*1e3,zk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends cr{constructor(e,n,r=0){super(nl(e),`Firebase Storage: ${n} (${nl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function nl(t){return"storage/"+t}function du(){const t="An unknown error occurred, please check the error payload for server response.";return new it(tt.UNKNOWN,t)}function qk(t){return new it(tt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jk(t){return new it(tt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(tt.UNAUTHENTICATED,t)}function Vk(){return new it(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hk(t){return new it(tt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Wk(){return new it(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gk(){return new it(tt.CANCELED,"User canceled the upload/download.")}function Kk(t){return new it(tt.INVALID_URL,"Invalid URL '"+t+"'.")}function Yk(t){return new it(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qk(){return new it(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Tm+"' property when initializing the app?")}function Jk(){return new it(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xk(){return new it(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Zk(t){return new it(tt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zl(t){return new it(tt.INVALID_ARGUMENT,t)}function xm(){return new it(tt.APP_DELETED,"The Firebase app was deleted.")}function eC(t){return new it(tt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t,e){return new it(tt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function oi(t){throw new it(tt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw Yk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${s}/o${u}`,"i"),g={bucket:1,path:3},b=n===Im?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",I=new RegExp(`^https?://${b}/${s}/${E}`,"i"),P=[{regex:a,indices:l,postModify:i},{regex:v,indices:g,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<P.length;T++){const L=P[T],N=L.regex.exec(e);if(N){const A=N[L.indices.bucket];let k=N[L.indices.path];k||(k=""),r=new Qt(A,k),L.postModify(r);break}}if(r==null)throw Kk(e);return r}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...E){c||(c=!0,e.apply(null,E))}function f(E){s=setTimeout(()=>{s=null,t(v,l())},E)}function u(){i&&clearTimeout(i)}function v(E,...I){if(c){u();return}if(E){u(),d.call(null,E,...I);return}if(l()||o){u(),d.call(null,E,...I);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,f(P)}let g=!1;function b(E){g||(g=!0,u(),!c&&(s!==null?(E||(a=2),clearTimeout(s),f(0)):E||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function rC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){return t!==void 0}function iC(t){return typeof t=="object"&&!Array.isArray(t)}function hu(t){return typeof t=="string"||t instanceof String}function sh(t){return fu()&&t instanceof Blob}function fu(){return typeof Blob<"u"}function ih(t,e,n,r){if(r<e)throw zl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
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
 */function oC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,s,i,o,a,l,c,d,f,u=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=u,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new mo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Qr.NO_ERROR,l=i.getStatus();if(!a||oC(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Qr.ABORT;r(!1,new mo(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new mo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sC(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=du();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?xm():Gk();o(l)}else{const l=Wk();o(l)}};this.canceled_?n(!1,new mo(!1,null,!0)):this.backoffId_=nC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hC(t,e,n,r,s,i,o=!0,a=!1){const l=Sm(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return uC(d,e),lC(d,n),cC(d,i),dC(d,r),new aC(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pC(...t){const e=fC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fu())return new Blob(t);throw new it(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function vC(t){if(typeof atob>"u")throw Zk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rl{constructor(e,n){this.data=e,this.contentType=n||null}}function gC(t,e){switch(t){case Pn.RAW:return new rl(Am(e));case Pn.BASE64:case Pn.BASE64URL:return new rl(Rm(t,e));case Pn.DATA_URL:return new rl(bC(e),wC(e))}throw du()}function Am(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _C(t){let e;try{e=decodeURIComponent(t)}catch{throw Ii(Pn.DATA_URL,"Malformed data URL.")}return Am(e)}function Rm(t,e){switch(t){case Pn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vC(e)}catch(s){throw s.message.includes("polyfill")?s:Ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Pm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ii(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bC(t){const e=new Pm(t);return e.base64?Rm(Pn.BASE64,e.rest):_C(e.rest)}function wC(t){return new Pm(t).contentType}function yC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){let r=0,s="";sh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sh(this.data_)){const r=this.data_,s=mC(r,e,n);return s===null?null:new br(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new br(r,!0)}}static getBlob(...e){if(fu()){const n=e.map(r=>r instanceof br?r.data_:r);return new br(pC.apply(null,n))}else{const n=e.map(o=>hu(o)?gC(Pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new br(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){let e;try{e=JSON.parse(t)}catch{return null}return iC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Lm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||CC}}let vo=null;function IC(t){return!hu(t)||t.length<2?t:Lm(t)}function Om(){if(vo)return vo;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return IC(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),vo=t,vo}function TC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Qt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function xC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return TC(r,t),r}function Dm(t,e,n){const r=Nm(e);return r===null?null:xC(t,r,n)}function SC(t,e,n,r){const s=Nm(e);if(s===null||!hu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,f=t.fullPath,u="/b/"+o(d)+"/o/"+o(f),v=pu(u,n,r),g=Sm({alt:"media",token:c});return v+g})[0]}function AC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Mm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){if(!t)throw du()}function RC(t,e){function n(r,s){const i=Dm(t,s,e);return $m(i!==null),i}return n}function PC(t,e){function n(r,s){const i=Dm(t,s,e);return $m(i!==null),SC(i,s,t.host,t._protocol)}return n}function Um(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Vk():s=Bk():n.getStatus()===402?s=jk(t.bucket):n.getStatus()===403?s=Hk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function NC(t){const e=Um(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=qk(t.path)),i.serverResponse=s.serverResponse,i}return n}function LC(t,e,n){const r=e.fullServerUrl(),s=pu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Mm(s,i,PC(t,n),o);return a.errorHandler=NC(e),a}function OC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=OC(null,e)),r}function MC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let T=0;T<2;T++)P=P+Math.random().toString().slice(2);return P}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=DC(e,r,s),d=AC(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,u=`\r
--`+l+"--",v=br.getBlob(f,r,u);if(v===null)throw Jk();const g={name:c.fullPath},b=pu(i,t.host,t._protocol),E="POST",I=t.maxUploadRetryTime,C=new Mm(b,E,RC(t,n),I);return C.urlParams=g,C.headers=o,C.body=v.uploadData(),C.errorHandler=Um(e),C}class $C{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw oi("cannot .send() more than once");if(Fr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UC extends $C{initXhr(){this.xhr_.responseType="text"}}function Fm(){return new UC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lm(this._location.path)}get storage(){return this._service}get parent(){const e=EC(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eC(e)}}function FC(t,e,n){t._throwIfRoot("uploadBytes");const r=MC(t.storage,t._location,Om(),new br(e,!0),n);return t.storage.makeRequestWithTokens(r,Fm).then(s=>({metadata:s,ref:t}))}function zC(t){t._throwIfRoot("getDownloadURL");const e=LC(t.storage,t._location,Om());return t.storage.makeRequestWithTokens(e,Fm).then(n=>{if(n===null)throw Xk();return n})}function qC(t,e){const n=kC(t._location.path,e),r=new Qt(t._location.bucket,n);return new is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){return/^[A-Za-z]+:\/\//.test(t)}function BC(t,e){return new is(t,e)}function zm(t,e){if(t instanceof mu){const n=t;if(n._bucket==null)throw Qk();const r=new is(n,n._bucket);return e!=null?zm(r,e):r}else return e!==void 0?qC(t,e):t}function VC(t,e){if(e&&jC(e)){if(t instanceof mu)return BC(t,e);throw zl("To use ref(service, url), the first argument must be a Storage instance.")}else return zm(t,e)}function oh(t,e){const n=e?.[Tm];return n==null?null:Qt.makeFromBucketSpec(n,t)}function HC(t,e,n,r={}){t.host=`${e}:${n}`;const s=Fr(e);s&&(pc(`https://${t.host}/b`),mc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wf(i,t.app.options.projectId))}class mu{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Im,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fk,this._maxUploadRetryTime=zk,this._requests=new Set,s!=null?this._bucket=Qt.makeFromBucketSpec(s,this._host):this._bucket=oh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=oh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ih("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ih("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tC(xm());{const o=hC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ah="@firebase/storage",lh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="storage";function WC(t,e,n){return t=st(t),FC(t,e,n)}function GC(t){return t=st(t),zC(t)}function KC(t,e){return t=st(t),VC(t,e)}function YC(t=bc(),e){t=st(t);const r=pa(t,qm).getImmediate({identifier:e}),s=gf("storage");return s&&QC(r,...s),r}function QC(t,e,n,r={}){HC(t,e,n,r)}function JC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new mu(n,r,s,e,hs)}function XC(){ts(new Nr(qm,JC,"PUBLIC").setMultipleInstances(!0)),Ln(ah,lh,""),Ln(ah,lh,"esm2020")}XC();const jm={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",jm);const vu=If(jm),os=f0(vu),Kn=Mk(vu),ZC=YC(vu);var eI=R('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),tI=R('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),nI=R('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),rI=R('<h3 class="post-title svelte-1t1odzy"> </h3>'),sI=R('<p class="post-text svelte-1t1odzy"> </p>'),iI=R('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),oI=R('<div class="posts svelte-1t1odzy"></div>'),aI=R('<div class="post-list-container svelte-1t1odzy"><!></div>');const lI={hash:"svelte-1t1odzy",code:`
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
  }`};function cI(t,e){Be(e,!0),He(t,lI);let n=Ye(e,"path",7,"posts"),r=Ye(e,"limit",7,"10"),s=te(Lt([])),i=te(!0),o=te(""),a=null;kt(()=>{l()}),df(()=>{c()});function l(){try{a=Ar(Kn,n()),uu(a,C=>{const P=C.val();P?y(s,Object.entries(P).map(([T,L])=>({id:T,...L})).sort((T,L)=>(L.timestamp||0)-(T.timestamp||0)).slice(0,parseInt(r())),!0):y(s,[],!0),y(i,!1),y(o,"")},C=>{console.error("데이터 읽기 오류:",C),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(i,!1)})}catch(C){console.error("구독 설정 오류:",C),y(o,"데이터베이스 연결에 실패했습니다."),y(i,!1)}}function c(){a&&yk(a)}function d(C){const P=new CustomEvent("post-click",{detail:{post:C},bubbles:!0,composed:!0});dispatchEvent(P)}function f(C,P){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),d(P))}function u(C){if(!C)return"";const P=typeof C=="string"?Number(C):C,T=new Date(P),N=new Date().getTime()-T.getTime(),A=Math.floor(N/6e4),k=Math.floor(N/36e5),M=Math.floor(N/864e5);return A<1?"방금 전":A<60?`${A}분 전`:k<24?`${k}시간 전`:M<7?`${M}일 전`:T.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var v={get path(){return n()},set path(C="posts"){n(C),Ge()},get limit(){return r()},set limit(C="10"){r(C),Ge()}},g=aI(),b=p(g);{var E=C=>{var P=eI();w(C,P)},I=C=>{var P=fe(),T=se(P);{var L=A=>{var k=tI(),M=p(k),q=p(M,!0);h(M),h(k),J(()=>S(q,m(o))),w(A,k)},N=A=>{var k=fe(),M=se(k);{var q=F=>{var B=nI();w(F,B)},V=F=>{var B=oI();Ot(B,21,()=>m(s),K=>K.id,(K,W)=>{var Y=iI();Y.__click=()=>d(m(W)),Y.__keydown=me=>f(me,m(W));var ae=p(Y),ee=p(ae),$=p(ee),x=p($,!0);h($);var U=_($,2),Z=p(U,!0);h(U),h(ee),h(ae);var Q=_(ae,2),he=p(Q);{var O=me=>{var ve=rI(),Ce=p(ve,!0);h(ve),J(()=>S(Ce,m(W).title)),w(me,ve)};H(he,me=>{m(W).title&&me(O)})}var j=_(he,2);{var le=me=>{var ve=sI(),Ce=p(ve,!0);h(ve),J(()=>S(Ce,m(W).content)),w(me,ve)};H(j,me=>{m(W).content&&me(le)})}h(Q);var re=_(Q,2),ce=p(re),ne=p(ce);h(ce);var X=_(ce,2),ke=p(X);h(X),h(re),h(Y),J(me=>{je(Y,"aria-label",`게시물: ${(m(W).title||m(W).content||"제목 없음")??""}`),S(x,m(W).author||"익명"),S(Z,me),S(ne,`👍 ${(m(W).likes||0)??""}`),S(ke,`💬 ${(m(W).comments?.length||0)??""}`)},[()=>u(m(W).timestamp)]),w(K,Y)}),h(B),w(F,B)};H(M,F=>{m(s).length===0?F(q):F(V,!1)},!0)}w(A,k)};H(T,A=>{m(o)?A(L):A(N,!1)},!0)}w(C,P)};H(b,C=>{m(i)?C(E):C(I,!1)})}return h(g),w(t,g),Ve(v)}nt(["click","keydown"]);customElements.define("post-list",pe(cI,{path:{},limit:{}},[],[],!0));ng();/**
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
 */const uI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var dI=Ug("<svg><!><!></svg>");function at(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]),r=et(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Be(e,!1);let s=Ye(e,"name",12,void 0),i=Ye(e,"color",12,"currentColor"),o=Ye(e,"size",12,24),a=Ye(e,"strokeWidth",12,2),l=Ye(e,"absoluteStrokeWidth",12,!1),c=Ye(e,"iconNode",28,()=>[]);const d=(...b)=>b.filter((E,I,C)=>!!E&&C.indexOf(E)===I).join(" ");var f={get name(){return s()},set name(b){s(b),Ge()},get color(){return i()},set color(b){i(b),Ge()},get size(){return o()},set size(b){o(b),Ge()},get strokeWidth(){return a()},set strokeWidth(b){a(b),Ge()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),Ge()},get iconNode(){return c()},set iconNode(b){c(b),Ge()}};Vt();var u=dI();Mu(u,(b,E)=>({...uI,...r,width:o(),height:o(),stroke:i(),"stroke-width":b,class:E}),[()=>(ws(l()),ws(a()),ws(o()),On(()=>l()?Number(a())*24/Number(o()):a())),()=>(ws(s()),ws(n),On(()=>d("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var v=p(u);Ot(v,1,c,Vn,(b,E)=>{var I=Ao(()=>xv(m(E),2));let C=()=>m(I)[0],P=()=>m(I)[1];var T=fe(),L=se(T);Bg(L,C,!0,(N,A)=>{Mu(N,()=>({...P()}))}),w(b,T)});var g=_(v);return rt(g,e,"default",{}),h(u),w(t,u),Ve(f)}pe(at,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Bm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];at(t,ht({name:"book-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Bm,{},["default"],[],!0);function Vm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];at(t,ht({name:"camera"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Vm,{},["default"],[],!0);function ql(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];at(t,ht({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(ql,{},["default"],[],!0);function gu(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];at(t,ht({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(gu,{},["default"],[],!0);function jl(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];at(t,ht({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(jl,{},["default"],[],!0);function Bl(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];at(t,ht({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Bl,{},["default"],[],!0);function Vl(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];at(t,ht({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Vl,{},["default"],[],!0);function _u(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];at(t,ht({name:"file-text"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(_u,{},["default"],[],!0);function Hm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];at(t,ht({name:"house"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Hm,{},["default"],[],!0);function ci(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];at(t,ht({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(ci,{},["default"],[],!0);function Wm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];at(t,ht({name:"log-in"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Wm,{},["default"],[],!0);function Gm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];at(t,ht({name:"log-out"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Gm,{},["default"],[],!0);function ui(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];at(t,ht({name:"menu"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(ui,{},["default"],[],!0);function Er(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];at(t,ht({name:"message-circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Er,{},["default"],[],!0);function Km(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];at(t,ht({name:"phone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Km,{},["default"],[],!0);function Ym(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];at(t,ht({name:"send"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Ym,{},["default"],[],!0);function Qm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];at(t,ht({name:"trending-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Qm,{},["default"],[],!0);function Jr(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];at(t,ht({name:"user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Jr,{},["default"],[],!0);function qi(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];at(t,ht({name:"users"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(qi,{},["default"],[],!0);function Jm(t,e){const n=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];at(t,ht({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=fe(),a=se(o);rt(a,e,"default",{}),w(s,o)},$$slots:{default:!0}}))}pe(Jm,{},["default"],[],!0);var hI=R("<option> </option>"),fI=R('<div class="error-message svelte-1e01td3"> </div>'),pI=R('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),mI=R("<!> 인증 코드 전송",1),vI=R('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),gI=R('<div class="error-message svelte-1e01td3"> </div>'),_I=R('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),bI=R("<!> 로그인",1),wI=R('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),yI=R('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const EI={hash:"svelte-1e01td3",code:`\r
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
  }`};function kI(t,e){Be(e,!0),He(t,EI);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=te("+82"),s=te(""),i=te(""),o=te("phone"),a=te(!1),l=te(""),c=te(null),d=te(null),f=te(void 0),u=te(null);function v(){return new Promise((k,M)=>{try{if(!m(u)){const q=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(q),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(q);return}if(m(c)){if(m(f)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(f)),console.log("reCAPTCHA reset completed"),k(m(f));return}catch(q){console.warn("Failed to reset reCAPTCHA:",q)}try{m(c).clear(),y(c,null),y(f,void 0)}catch(q){console.warn("Failed to clear reCAPTCHA:",q)}}y(c,new fw(os,m(u).id,{size:"invisible",callback:q=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(f)!==void 0?window.grecaptcha.reset(m(f)):v()}}),!0),m(c).render().then(q=>{y(f,q,!0),console.log("reCAPTCHA rendered with widgetId:",q),k(q)}).catch(q=>{console.error("Failed to render reCAPTCHA:",q),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(q)})}catch(q){console.error("reCAPTCHA 초기화 실패:",q),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(q)}})}kt(()=>{const k=document.createElement("div");return k.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),k.className="recaptcha-container-light-dom",k.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(k),y(u,k,!0),v(),()=>{k&&k.parentNode&&k.parentNode.removeChild(k)}});function g(k){return/^[0-9]{6,15}$/.test(k)}async function b(){if(y(l,""),!g(m(s))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const k=`${m(r)}${m(s)}`;console.log("Sending verification code to:",k),y(d,await vw(os,k,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(k){console.error("SMS 전송 실패:",k),k.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):k.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${k.message}`)}finally{y(a,!1)}}async function E(){if(y(l,""),m(i).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const k=await m(d).confirm(m(i));console.log("Login successful:",k.user);const M=new CustomEvent("login-success",{detail:{user:k.user,phoneNumber:k.user.phoneNumber}});dispatchEvent(M),y(s,""),y(i,""),y(o,"phone")}catch(k){console.error("인증 코드 확인 실패:",k),k.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):k.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${k.message}`);const M=new CustomEvent("login-error",{detail:{error:k.message}});dispatchEvent(M)}finally{y(a,!1)}}function I(){y(o,"phone"),y(i,""),y(l,"")}var C=yI(),P=p(C),T=p(P);{var L=k=>{var M=vI(),q=p(M),V=p(q);Km(V,{class:"icon-large"}),on(4),h(q);var F=_(q,2),B=_(p(F),2);Ot(B,21,()=>n,Vn,(O,j)=>{var le=hI(),re=p(le);h(le);var ce={};J(()=>{S(re,`${m(j).flag??""} ${m(j).name??""} (${m(j).code??""})`),ce!==(ce=m(j).code)&&(le.value=(le.__value=m(j).code)??"")}),w(O,le)}),h(B),h(F);var K=_(F,2),W=_(p(K),2),Y=p(W),ae=p(Y,!0);h(Y);var ee=_(Y,2);Ds(ee),h(W),on(2),h(K);var $=_(K,2);{var x=O=>{var j=fI(),le=p(j,!0);h(j),J(()=>S(le,m(l))),w(O,j)};H($,O=>{m(l)&&O(x)})}var U=_($,2);U.__click=b;var Z=p(U);{var Q=O=>{var j=pI();on(),w(O,j)},he=O=>{var j=mI(),le=se(j);Ym(le,{class:"btn-icon"}),on(),w(O,j)};H(Z,O=>{m(a)?O(Q):O(he,!1)})}h(U),h(M),J(()=>{B.disabled=m(a),S(ae,m(r)),ee.disabled=m(a),U.disabled=m(a)||!m(s)}),cc(B,()=>m(r),O=>y(r,O)),Ai("keypress",ee,O=>{O.key==="Enter"&&(O.preventDefault(),b())}),Ms(ee,()=>m(s),O=>y(s,O)),w(k,M)},N=k=>{var M=fe(),q=se(M);{var V=F=>{var B=wI(),K=p(B),W=p(K);ql(W,{class:"icon-large"});var Y=_(W,4),ae=p(Y);on(2),h(Y),h(K);var ee=_(K,2),$=_(p(ee),2);Ds($),on(2),h(ee);var x=_(ee,2);{var U=ne=>{var X=gI(),ke=p(X,!0);h(X),J(()=>S(ke,m(l))),w(ne,X)};H(x,ne=>{m(l)&&ne(U)})}var Z=_(x,2),Q=p(Z);Q.__click=I;var he=_(Q,2);he.__click=E;var O=p(he);{var j=ne=>{var X=_I();on(),w(ne,X)},le=ne=>{var X=bI(),ke=se(X);ql(ke,{class:"btn-icon"}),on(),w(ne,X)};H(O,ne=>{m(a)?ne(j):ne(le,!1)})}h(he),h(Z);var re=_(Z,2),ce=_(p(re));ce.__click=I,h(re),h(B),J(()=>{S(ae,`${m(r)??""}${m(s)??""}로 전송된`),$.disabled=m(a),Q.disabled=m(a),he.disabled=m(a)||m(i).length!==6}),Ai("keypress",$,ne=>{ne.key==="Enter"&&(ne.preventDefault(),E())}),Ms($,()=>m(i),ne=>y(i,ne)),w(F,B)};H(q,F=>{m(o)==="code"&&F(V)},!0)}w(k,M)};H(T,k=>{m(o)==="phone"?k(L):k(N,!1)})}var A=_(T,2);uc(A,k=>y(u,k),()=>m(u)),h(P),h(C),w(t,C),Ve()}nt(["click"]);customElements.define("phone-login",pe(kI,{},[],[],!0));const Ra=Ws(null),CI=Ws(!0);ep(os,t=>{Ra.set(t),CI.set(!1)});async function II(){try{return await W1(os),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}class Hr{static#t=null;#e=te(!0);get loading(){return m(this.#e)}set loading(e){y(this.#e,e,!0)}#r=te(!1);get isAuthenticated(){return m(this.#r)}set isAuthenticated(e){y(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=te(null);get data(){return m(this.#s)}set data(e){y(this.#s,e,!0)}#l=te(null);get error(){return m(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Hr.#t||(Hr.#t=new Hr),Hr.#t}#a(){try{if(!os)throw new Error("Auth instance not available");this.#i=ep(os,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const n=Ar(Kn,`users/${e.uid}`);this.#n=uu(n,r=>{this.data=r.val()},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),(e.photoUrl!==void 0||e.photoUrl!==void 0)&&(n.photoUrl=e.photoUrl),Object.keys(n).length>0&&await B1(this.#o,n);const r={...e};r.photoUrl!==void 0&&(r.photoUrl===void 0&&(r.photoUrl=r.photoUrl),delete r.photoUrl);const s=Ar(Kn,`users/${this.uid}`);await bk(s,r)}catch(n){throw this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),Hr.#t=null}}const be=Hr.getInstance(),TI={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese"},xI={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",현재언어:"현재 언어",언어_한국어:"한국어",언어_영어:"영어",언어_일본어:"일본어",언어_중국어:"중국어"},SI={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語"},AI={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文"},sl={en:TI,ko:xI,ja:SI,zh:AI};function Hl(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Xm(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Hl(e);if(n!=="en")return n}return"en"}function RI(t){let e=Hl(t)||Xm();function n(i){e=Hl(i)}function r(){return e}function s(i,o={}){return((sl[e]??sl.en)[i]??sl.en[i]??i).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:s,setLocale:n,getLocale:r}}const bu="sns-web-locale",Zm=[{code:"ko",labelKey:"언어_한국어"},{code:"en",labelKey:"언어_영어"},{code:"ja",labelKey:"언어_일본어"},{code:"zh",labelKey:"언어_중국어"}];function PI(){if(typeof localStorage>"u")return null;const t=localStorage.getItem(bu);if(!t)return null;const e=Zm.find(n=>n.code===t);return e?e.code:null}const ev=PI()??Xm(),ta=RI(ev);typeof localStorage<"u"&&localStorage.setItem(bu,ta.getLocale());const wu=Ws(ev);function NI(t){ta.setLocale(t);const e=ta.getLocale();wu.set(e),typeof localStorage<"u"&&localStorage.setItem(bu,e)}const Js=Xg(wu,t=>(e,n={})=>ta.t(e,n)),tv=Ws("");function Zt(t){tv.set(t)}var LI=R('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),OI=R('<img alt="프로필" class="avatar-image svelte-38psow"/>'),DI=R('<div class="avatar-fallback svelte-38psow"> </div>'),MI=R('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),$I=R('<img class="avatar-image svelte-38psow"/>'),UI=R('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),FI=R('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),zI=R('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),qI=R('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const jI={hash:"svelte-38psow",code:`\r
  /* 탑바 */.topbar.svelte-38psow {position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);background-color:white;}\r
\r
  /* 컨테이너 */.container.svelte-38psow {max-width:1280px;margin:0 auto;display:flex;height:4rem;align-items:center;padding:0 1rem;}\r
\r
  /* 로고 */.logo-link.svelte-38psow {display:flex;align-items:center;text-decoration:none;color:inherit;flex-shrink:0;}\r
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
  /* 네비게이션 버튼 */.nav-button.svelte-38psow {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.nav-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 주요 버튼 */\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function BI(t,e){Be(e,!0),He(t,jI);const n=()=>dn(tv,"$pageTitle",i),r=()=>dn(Ra,"$user",i),s=()=>dn(Js,"$t",i),[i,o]=us();let a=te(!1);async function l(){if((await II()).success){const N=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(N)}y(a,!1)}function c(){return be.data?.displayName?be.data.displayName.charAt(0).toUpperCase():be.email?be.email.charAt(0).toUpperCase():"U"}function d(){y(a,!m(a))}function f(L){const N=document.querySelector(".dropdown-menu"),A=document.querySelector(".dropdown-trigger");N&&!N.contains(L.target)&&!A?.contains(L.target)&&y(a,!1)}kt(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}));var u=qI(),v=p(u),g=p(v),b=_(p(g),2);{var E=L=>{var N=LI(),A=p(N),k=p(A,!0);h(A),h(N),J(()=>S(k,n())),w(L,N)};H(b,L=>{n()&&L(E)})}h(g);var I=_(g,2),C=p(I);{var P=L=>{var N=FI(),A=se(N),k=p(A),M=p(k);ci(M,{size:16});var q=_(M,2),V=p(q,!0);h(q),h(k);var F=_(k,2),B=p(F);Er(B,{size:16});var K=_(B,2),W=p(K,!0);h(K),h(F);var Y=_(F,2),ae=p(Y);qi(ae,{size:16});var ee=_(ae,2),$=p(ee,!0);h(ee),h(Y);var x=_(Y,2),U=p(x);U.__click=d;var Z=p(U),Q=p(Z);{var he=xe=>{var Ne=OI();J(()=>je(Ne,"src",be.data.photoUrl)),w(xe,Ne)},O=xe=>{var Ne=DI(),Je=p(Ne,!0);h(Ne),J(ct=>S(Je,ct),[c]),w(xe,Ne)};H(Q,xe=>{be.data?.photoUrl?xe(he):xe(O,!1)})}h(Z);var j=_(Z,2),le=p(j,!0);h(j),h(U);var re=_(U,2);{var ce=xe=>{var Ne=MI(),Je=p(Ne),ct=p(Je,!0);h(Je);var Ut=_(Je,4),Ft=p(Ut);Jr(Ft,{size:16});var Tn=_(Ft,2),en=p(Tn,!0);h(Tn),h(Ut);var _t=_(Ut,4);_t.__click=l;var tn=p(_t);Gm(tn,{size:16});var Un=_(tn,2),dr=p(Un,!0);h(Un),h(_t),h(Ne),J((hr,Me,$e)=>{S(ct,hr),S(en,Me),S(dr,$e)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),w(xe,Ne)};H(re,xe=>{m(a)&&xe(ce)})}h(x);var ne=_(x,2),X=p(ne);ui(X,{size:24}),h(ne),h(A);var ke=_(A,2),me=p(ke),ve=p(me);ci(ve,{size:20}),h(me);var Ce=_(me,2),Ke=p(Ce);qi(Ke,{size:20}),h(Ce);var z=_(Ce,2),ie=p(z);Er(ie,{size:20}),h(z);var ue=_(z,2),Fe=p(ue),lt=p(Fe);{var Re=xe=>{var Ne=$I();J(Je=>{je(Ne,"src",be.data.photoUrl),je(Ne,"alt",Je)},[()=>s()("프로필")]),w(xe,Ne)},Ae=xe=>{var Ne=UI(),Je=p(Ne,!0);h(Ne),J(ct=>S(Je,ct),[c]),w(xe,Ne)};H(lt,xe=>{be.data?.photoUrl?xe(Re):xe(Ae,!1)})}h(Fe),h(ue);var Pe=_(ue,2),At=p(Pe);ui(At,{size:24}),h(Pe),h(ke),J((xe,Ne,Je,ct,Ut,Ft,Tn,en,_t)=>{S(V,xe),S(W,Ne),S($,Je),S(le,be.data?.displayName||be.email),je(ne,"title",ct),je(me,"title",Ut),je(Ce,"title",Ft),je(z,"title",Tn),je(ue,"title",en),je(Pe,"title",_t)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),w(L,N)},T=L=>{var N=zI(),A=se(N),k=p(A),M=p(k);ci(M,{size:16});var q=_(M,2),V=p(q,!0);h(q),h(k);var F=_(k,2),B=p(F);Er(B,{size:16});var K=_(B,2),W=p(K,!0);h(K),h(F);var Y=_(F,2),ae=p(Y,!0);h(Y);var ee=_(Y,2),$=p(ee);ui($,{size:20}),h(ee),h(A);var x=_(A,2),U=p(x),Z=p(U);ci(Z,{size:20}),h(U);var Q=_(U,2),he=p(Q);Er(he,{size:20}),h(Q);var O=_(Q,2),j=p(O);Jr(j,{size:20}),h(O);var le=_(O,2),re=p(le);ui(re,{size:24}),h(le),h(x),J((ce,ne,X,ke,me,ve,Ce,Ke)=>{S(V,ce),S(W,ne),S(ae,X),je(ee,"title",ke),je(U,"title",me),je(Q,"title",ve),je(O,"title",Ce),je(le,"title",Ke)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),w(L,N)};H(C,L=>{r()?L(P):L(T,!1)})}h(I),h(v),h(u),w(t,u),Ve(),o()}nt(["click"]);customElements.define("sns-topbar",pe(BI,{},[],[],!0));var VI=R('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),HI=R('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),WI=R('<div class="language-current svelte-najsij"><span class="language-current-label svelte-najsij"> </span> <span class="language-current-value svelte-najsij"> </span></div>'),GI=R('<button type="button"> </button>'),KI=R('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <!> <div class="language-options svelte-najsij"></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const YI={hash:"svelte-najsij",code:`\r
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}\r
\r
  /* 사이드바 콘텐츠 */.sidebar-content.svelte-najsij {position:sticky;top:5rem;}\r
\r
  /* 섹션 제목 */.section-title.svelte-najsij {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}\r
\r
  /* 섹션 부제목 */.section-subtitle.svelte-najsij {font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;color:#6b7280;}\r
\r
  /* 메뉴 */.menu.svelte-najsij {display:flex;flex-direction:column;gap:0.5rem;}\r
\r
  /* 메뉴 아이템 */.menu-item.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;cursor:pointer;}.menu-item.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}\r
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
  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-current.svelte-najsij {display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0.75rem;border-radius:0.5rem;background-color:#f9fafb;margin-bottom:0.75rem;}.language-current-label.svelte-najsij {font-size:0.75rem;color:#6b7280;}.language-current-value.svelte-najsij {font-weight:600;color:#111827;font-size:0.9rem;}.language-options.svelte-najsij {display:grid;grid-template-columns:repeat(auto-fit, minmax(90px, 1fr));gap:0.5rem;}.language-button.svelte-najsij {padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#374151;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s;}.language-button.svelte-najsij:hover {background-color:#f3f4f6;border-color:#3b82f6;color:#1f2937;}.language-button.active.svelte-najsij {background-color:#3b82f6;border-color:#3b82f6;color:#ffffff;box-shadow:0 4px 12px rgba(59, 130, 246, 0.25);}\r
\r
  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}\r
\r
  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}\r
\r
  /* 반응형: 모바일에서는 숨김 */\r
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}\r
  }`};function QI(t,e){Be(e,!1),He(t,YI);const n=()=>dn(Js,"$t",i),r=()=>dn(Ra,"$user",i),s=()=>dn(wu,"$locale",i),[i,o]=us(),a=Zm;function l(Me){NI(Me)}Vt();var c=KI(),d=p(c),f=p(d),u=p(f,!0);h(f);var v=_(f,2),g=p(v),b=p(g);Hm(b,{size:20});var E=_(b,2),I=p(E,!0);h(E),h(g);var C=_(g,2),P=p(C);Er(P,{size:20});var T=_(P,2),L=p(T,!0);h(T),h(C);var N=_(C,2),A=p(N);qi(A,{size:20});var k=_(A,2),M=p(k,!0);h(k),h(N);var q=_(N,2),V=p(q);Jr(V,{size:20});var F=_(V,2),B=p(F,!0);h(F),h(q);var K=_(q,2),W=p(K);_u(W,{size:20});var Y=_(W,2),ae=p(Y,!0);h(Y),h(K),h(v);var ee=_(v,4),$=p(ee),x=p($,!0);h($);var U=_($,2),Z=p(U);{var Q=Me=>{var $e=VI(),ge=p($e);Jr(ge,{size:16});var Ue=_(ge,2),We=p(Ue,!0);h(Ue),h($e),J(ot=>S(We,ot),[()=>n()("회원정보수정")]),w(Me,$e)},he=Me=>{var $e=HI(),ge=se($e),Ue=p(ge);Wm(Ue,{size:16});var We=_(Ue,2),ot=p(We,!0);h(We),h(ge);var Ht=_(ge,2),Ct=p(Ht);Jr(Ct,{size:16});var Wt=_(Ct,2),Fn=p(Wt,!0);h(Wt),h(Ht),J((xn,nn)=>{S(ot,xn),S(Fn,nn)},[()=>n()("로그인"),()=>n()("회원가입")]),w(Me,$e)};H(Z,Me=>{r()?Me(Q):Me(he,!1)})}h(U),h(ee);var O=_(ee,4),j=p(O),le=p(j);qi(le,{size:16});var re=_(le,2),ce=p(re,!0);h(re),h(j);var ne=_(j,2),X=_(p(ne),2),ke=p(X,!0);h(X);var me=_(X,2);Vl(me,{size:12,class:"external-icon"}),h(ne);var ve=_(ne,2),Ce=p(ve);Er(Ce,{size:16});var Ke=_(Ce,2),z=p(Ke,!0);h(Ke);var ie=_(Ke,2);Vl(ie,{size:12,class:"external-icon"}),h(ve);var ue=_(ve,2),Fe=p(ue);Bm(Fe,{size:16});var lt=_(Fe,2),Re=p(lt,!0);h(lt),h(ue),h(O);var Ae=_(O,2),Pe=p(Ae),At=p(Pe,!0);h(Pe);var xe=_(Pe,2);{var Ne=Me=>{const $e=ca(()=>a.find(Ct=>Ct.code===s())??a[0]);var ge=WI(),Ue=p(ge),We=p(Ue,!0);h(Ue);var ot=_(Ue,2),Ht=p(ot,!0);h(ot),h(ge),J((Ct,Wt)=>{S(We,Ct),S(Ht,Wt)},[()=>n()("현재언어"),()=>n()(m($e).labelKey)]),w(Me,ge)};H(xe,Me=>{Me(Ne)})}var Je=_(xe,2);Ot(Je,5,()=>a,Vn,(Me,$e)=>{var ge=GI();ge.__click=()=>l(m($e).code);var Ue=p(ge,!0);h(ge),J(We=>{Kt(ge,1,`language-button ${m($e).code===s()?"active":""}`,"svelte-najsij"),S(Ue,We)},[()=>n()(m($e).labelKey)]),w(Me,ge)}),h(Je),h(Ae);var ct=_(Ae,2),Ut=p(ct),Ft=p(Ut),Tn=p(Ft,!0);h(Ft);var en=_(Ft,2),_t=p(en,!0);h(en),h(Ut),h(ct);var tn=_(ct,2),Un=p(tn),dr=p(Un,!0),hr=_(dr,2);h(Un),h(tn),h(d),h(c),J((Me,$e,ge,Ue,We,ot,Ht,Ct,Wt,Fn,xn,nn,rn,zn,qn,jr)=>{S(u,Me),S(I,$e),S(L,ge),S(M,Ue),S(B,We),S(ae,ot),S(x,Ht),S(ce,Ct),S(ke,Wt),S(z,Fn),S(Re,xn),S(At,nn),S(Tn,rn),S(_t,zn),S(dr,qn),S(hr,` ${jr??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),w(t,c),Ve(),o()}nt(["click"]);customElements.define("sns-left-sidebar",pe(QI,{},[],[],!0));var JI=R('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const XI={hash:"svelte-3epon2",code:`\r
  /* 사이드바 */.sidebar.svelte-3epon2 {width:16rem;border-left:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}
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
  }`};function ZI(t,e){Be(e,!0),He(t,XI);const n=()=>dn(Js,"$t",r),[r,s]=us();let i=te(Lt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=JI(),a=p(o),l=p(a),c=p(l,!0);h(l);var d=_(l,2),f=p(d),u=p(f),v=p(u);Jr(v,{size:20}),h(u);var g=_(u,2),b=p(g),E=p(b,!0);h(b);var I=_(b,2),C=p(I,!0);h(I),h(g),h(f);var P=_(f,2),T=p(P),L=p(T);Qm(L,{size:20}),h(T);var N=_(T,2),A=p(N),k=p(A,!0);h(A);var M=_(A,2),q=p(M,!0);h(M),h(N),h(P);var V=_(P,2),F=p(V),B=p(F);_u(B,{size:20}),h(F);var K=_(F,2),W=p(K),Y=p(W,!0);h(W);var ae=_(W,2),ee=p(ae,!0);h(ae);var $=_(ae,2),x=p($,!0);h($),h(K),h(V);var U=_(V,2),Z=p(U),Q=p(Z);Er(Q,{size:20}),h(Z);var he=_(Z,2),O=p(he),j=p(O,!0);h(O);var le=_(O,2),re=p(le,!0);h(le),h(he),h(U),h(d);var ce=_(d,2),ne=p(ce,!0);h(ce),h(a),h(o),J((X,ke,me,ve,Ce,Ke,z)=>{S(c,X),S(E,ke),S(C,m(i).totalUsers),S(k,me),S(q,m(i).totalScore),S(Y,ve),S(ee,m(i).totalPosts),S(x,Ce),S(j,Ke),S(re,m(i).totalMessages),S(ne,z)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),w(t,o),Ve(),s()}customElements.define("sns-right-sidebar",pe(ZI,{},[],[],!0));var eT=R('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const tT={hash:"svelte-um1xbq",code:`\r
  /* 전체 레이아웃 */.layout.svelte-um1xbq {min-height:100vh;background-color:#f9fafb;}\r
\r
  /* 메인 컨테이너 */.main-container.svelte-um1xbq {display:flex;margin-top:4rem; /* Topbar 높이만큼 여백 */min-height:calc(100vh - 4rem);}\r
\r
  /* 왼쪽 사이드바 */.left-sidebar.svelte-um1xbq {display:none;}\r
\r
  @media (min-width: 768px) {.left-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}
  }
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
  @media (min-width: 1024px) {.right-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}
  }`};function nT(t,e){He(t,tT);var n=eT(),r=p(n),s=_(r,2),i=p(s);Kt(i,1,"left-sidebar svelte-um1xbq");var o=_(i,2),a=p(o);rt(a,e,"default",{}),h(o);var l=_(o,2);Kt(l,1,"right-sidebar svelte-um1xbq"),h(s),h(n),w(t,n)}customElements.define("sns-layout",pe(nT,{},["default"],[],!0));var rT=R('<div class="icon-container svelte-m3h71q"> </div>'),sT=R('<p class="hint-box svelte-m3h71q"> </p>'),iT=R('<p class="gpl-box svelte-m3h71q"> </p>'),oT=R('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),aT=R('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),lT=R('<div class="accordion svelte-m3h71q"></div>');const cT={hash:"svelte-m3h71q",code:`\r
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
  }`};function uT(t,e){Be(e,!0),He(t,cT);let n=Ye(e,"items",7,"[]"),r=Ye(e,"type",7,"single"),s=Ye(e,"collapsible",7,!0),i=Ao(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=Ao(()=>()=>{const u=s();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=te(Lt(new Set));function l(u){const v=new Set(m(a));r()==="single"?v.has(u)?m(o)&&v.delete(u):(v.clear(),v.add(u)):v.has(u)?v.delete(u):v.add(u),y(a,v,!0)}function c(u){return m(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),Ge()},get type(){return r()},set type(u="single"){r(u),Ge()},get collapsible(){return s()},set collapsible(u=!0){s(u),Ge()}},f=lT();return Ot(f,21,()=>m(i),Vn,(u,v,g)=>{var b=aT(),E=p(b);E.__click=()=>l(g);var I=p(E),C=p(I);{var P=V=>{var F=rT(),B=p(F,!0);h(F),J(()=>S(B,m(v).icon)),w(V,F)};H(C,V=>{m(v).icon&&V(P)})}var T=_(C,2),L=p(T,!0);h(T),h(I);var N=_(I,2);let A;var k=p(N);gu(k,{size:20}),h(N),h(E);var M=_(E,2);{var q=V=>{var F=oT(),B=p(F),K=p(B,!0);h(B);var W=_(B,2);{var Y=$=>{var x=sT(),U=p(x,!0);h(x),J(()=>S(U,m(v).hint)),w($,x)};H(W,$=>{m(v).hint&&$(Y)})}var ae=_(W,2);{var ee=$=>{var x=iT(),U=p(x,!0);h(x),J(()=>S(U,m(v).gpl)),w($,x)};H(ae,$=>{m(v).gpl&&$(ee)})}h(F),J(()=>S(K,m(v).content)),w(V,F)};H(M,V=>{c(g)&&V(q)})}h(b),J((V,F)=>{je(E,"aria-expanded",V),S(L,m(v).title),A=Kt(N,1,"chevron svelte-m3h71q",null,A,F)},[()=>c(g),()=>({"rotate-180":c(g)})]),w(u,b)}),h(f),w(t,f),Ve(d)}nt(["click"]);customElements.define("sns-accordion",pe(uT,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var dT=R('<div class="gpl-badge svelte-1ubq0t6"> </div>'),hT=R('<div class="hint svelte-1ubq0t6"> </div>'),fT=R('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),pT=R('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),mT=R('<div class="todo-description svelte-1ubq0t6"> </div>'),vT=R('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),gT=R('<div class="todo-subitems svelte-1ubq0t6"></div>'),_T=R('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),bT=R('<span class="badge svelte-1ubq0t6"> </span>'),wT=R('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const yT={hash:"svelte-1ubq0t6",code:`\r
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
  /* 사용자 정보 섹션 */\r
\r
  /* 반응형 */\r
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}.techstack-grid.svelte-1ubq0t6 {justify-content:center;gap:0.5rem;}.techstack-item.svelte-1ubq0t6 {min-width:150px;padding:0.6rem 0.75rem;}.techstack-icon.svelte-1ubq0t6 {width:38px;height:38px;font-size:1.5rem;margin-bottom:0.25rem;}.techstack-name.svelte-1ubq0t6 {font-size:0.825rem;}.techstack-description.svelte-1ubq0t6 {font-size:0.65rem;}\r
  }\r
\r
  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}\r
  }`};function nv(t,e){Be(e,!0),He(t,yT);const n=()=>dn(Js,"$t",r),[r,s]=us();let i=te(null);function o($e){y(i,m(i)===$e?null:$e,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var d=wT(),f=p(d),u=p(f),v=p(u);h(u),h(f);var g=_(f,2),b=p(g),E=p(b,!0);h(b);var I=_(b,2),C=p(I),P=_(C),T=p(P,!0);h(P);var L=_(P);h(I),h(g);var N=_(g,2),A=p(N),k=p(A,!0);h(A);var M=_(A,2),q=p(M),V=_(p(q),2),F=p(V,!0);h(V);var B=_(V,2),K=p(B,!0);h(B),h(q);var W=_(q,2),Y=_(p(W),2),ae=p(Y,!0);h(Y);var ee=_(Y,2),$=p(ee,!0);h(ee),h(W);var x=_(W,2),U=_(p(x),2),Z=p(U,!0);h(U);var Q=_(U,2),he=p(Q,!0);h(Q),h(x);var O=_(x,2),j=_(p(O),2),le=p(j,!0);h(j);var re=_(j,2),ce=p(re,!0);h(re),h(O),h(M),h(N);var ne=_(N,2),X=p(ne),ke=p(X,!0);h(X);var me=_(X,2);Ot(me,21,()=>a,Vn,($e,ge)=>{var Ue=pT(),We=p(Ue);We.__click=()=>o(m(ge).id);var ot=p(We),Ht=p(ot,!0);h(ot);var Ct=_(ot,2);let Wt;var Fn=p(Ct);gu(Fn,{size:20}),h(Ct),h(We);var xn=_(We,2);{var nn=rn=>{var zn=fT(),qn=p(zn),jr=p(qn,!0);h(qn);var ms=_(qn,2);{var Xs=Rt=>{var It=dT(),jn=p(It,!0);h(It),J(Sn=>S(jn,Sn),[()=>n()("home.aiTruth.item3.gpl")]),w(Rt,It)};H(ms,Rt=>{m(ge).showGpl&&Rt(Xs)})}var ut=_(ms,2);{var vn=Rt=>{var It=hT(),jn=p(It,!0);h(It),J(Sn=>S(jn,Sn),[()=>n()(m(ge).hintKey)]),w(Rt,It)};H(ut,Rt=>{m(ge).hintKey&&Rt(vn)})}h(zn),J(Rt=>S(jr,Rt),[()=>n()(m(ge).contentKey)]),w(rn,zn)};H(xn,rn=>{m(i)===m(ge).id&&rn(nn)})}h(Ue),J(rn=>{je(We,"aria-expanded",m(i)===m(ge).id),S(Ht,rn),Wt=Kt(Ct,1,"accordion-icon svelte-1ubq0t6",null,Wt,{open:m(i)===m(ge).id})},[()=>n()(m(ge).titleKey)]),w($e,Ue)}),h(me),h(ne);var ve=_(ne,2),Ce=p(ve),Ke=p(Ce,!0);h(Ce);var z=_(Ce,2);Ot(z,21,()=>l,Vn,($e,ge)=>{var Ue=_T(),We=p(Ue),ot=p(We);let Ht;var Ct=p(ot);{var Wt=ut=>{jl(ut,{size:20})},Fn=ut=>{Bl(ut,{size:20})};H(Ct,ut=>{m(ge).completed?ut(Wt):ut(Fn,!1)})}h(ot);var xn=_(ot,2),nn=p(xn);let rn;var zn=p(nn,!0);h(nn);var qn=_(nn,2);{var jr=ut=>{var vn=mT(),Rt=p(vn,!0);h(vn),J(It=>S(Rt,It),[()=>n()(m(ge).descriptionKey)]),w(ut,vn)};H(qn,ut=>{m(ge).descriptionKey&&ut(jr)})}h(xn),h(We);var ms=_(We,2);{var Xs=ut=>{var vn=gT();Ot(vn,21,()=>m(ge).subitems,Vn,(Rt,It)=>{var jn=vT(),Sn=p(jn);let oo;var Pa=p(Sn);{var wv=fr=>{jl(fr,{size:16})},yv=fr=>{Bl(fr,{size:16})};H(Pa,fr=>{m(It).completed?fr(wv):fr(yv,!1)})}h(Sn);var Na=_(Sn,2);let ku;var Ev=p(Na,!0);h(Na),h(jn),J(fr=>{oo=Kt(Sn,1,"todo-subicon svelte-1ubq0t6",null,oo,{completed:m(It).completed}),ku=Kt(Na,1,"todo-subtext svelte-1ubq0t6",null,ku,{completed:m(It).completed}),S(Ev,fr)},[()=>n()(m(It).key)]),w(Rt,jn)}),h(vn),w(ut,vn)};H(ms,ut=>{m(ge).subitems.length>0&&ut(Xs)})}h(Ue),J(ut=>{Ht=Kt(ot,1,"todo-icon svelte-1ubq0t6",null,Ht,{completed:m(ge).completed}),rn=Kt(nn,1,"todo-label svelte-1ubq0t6",null,rn,{completed:m(ge).completed}),S(zn,ut)},[()=>n()(m(ge).labelKey)]),w($e,Ue)}),h(z),h(ve);var ie=_(ve,2),ue=p(ie),Fe=p(ue,!0);h(ue);var lt=_(ue,2),Re=p(lt),Ae=p(Re),Pe=p(Ae,!0);h(Ae);var At=_(Ae,1,!0);h(Re);var xe=_(Re,2);Ot(xe,21,()=>c,Vn,($e,ge)=>{var Ue=bT(),We=p(Ue,!0);h(Ue),J(ot=>S(We,ot),[()=>n()(m(ge))]),w($e,Ue)}),h(xe),h(lt),h(ie);var Ne=_(ie,2),Je=p(Ne),ct=p(Je,!0);h(Je);var Ut=_(Je,2),Ft=p(Ut),Tn=p(Ft,!0);h(Ft);var en=_(Ft,2),_t=p(en),tn=_(_t),Un=p(tn,!0);h(tn);var dr=_(tn,1,!0);h(en);var hr=_(en,2),Me=p(hr,!0);h(hr),h(Ut),h(Ne),h(d),J(($e,ge,Ue,We,ot,Ht,Ct,Wt,Fn,xn,nn,rn,zn,qn,jr,ms,Xs,ut,vn,Rt,It,jn,Sn,oo,Pa)=>{S(v,`✨ ${$e??""}`),S(E,ge),S(C,`${Ue??""} `),S(T,We),S(L,` ${ot??""}`),S(k,Ht),S(F,Ct),S(K,Wt),S(ae,Fn),S($,xn),S(Z,nn),S(he,rn),S(le,zn),S(ce,qn),S(ke,jr),S(Ke,ms),S(Fe,Xs),S(Pe,ut),S(At,vn),S(ct,Rt),S(Tn,It),S(_t,`${jn??""} `),S(Un,Sn),S(dr,oo),S(Me,Pa)},[()=>n()("home.vibeBanner"),()=>n()("home.title"),()=>n()("home.description.part1"),()=>n()("home.description.linkText"),()=>n()("home.description.part2"),()=>n()("home.techStack.title"),()=>n()("home.techStack.svelte"),()=>n()("home.techStack.svelteDesc"),()=>n()("home.techStack.flutter"),()=>n()("home.techStack.flutterDesc"),()=>n()("home.techStack.firebase"),()=>n()("home.techStack.firebaseDesc"),()=>n()("home.techStack.dokplay"),()=>n()("home.techStack.dokplayDesc"),()=>n()("home.aiTruth.title"),()=>n()("home.todo.title"),()=>n()("home.overview.title"),()=>n()("home.overview.brand"),()=>n()("home.overview.description"),()=>n()("home.aiChange.title"),()=>n()("home.aiChange.description"),()=>n()("home.aiChange.emphasis"),()=>n()("home.aiChange.highlight"),()=>n()("home.aiChange.conclusion"),()=>n()("home.aiChange.hint")]),w(t,d),Ve(),s()}nt(["click"]);pe(nv,{},[],[],!0);var ET=R('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx">전화번호로 간편하게 로그인하세요.</p> <phone-login></phone-login></div>',2),kT=R('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx">환영합니다!</h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx">홈으로 이동</a></div>'),CT=R('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const IT={hash:"svelte-1mz53xx",code:`\r
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
  }`};function rv(t,e){Be(e,!1),He(t,IT);const n=()=>dn(Ra,"$user",s),r=()=>dn(Js,"$t",s),[s,i]=us();function o(v){console.log("Login successful:",v.detail),alert(`로그인 성공!
전화번호: ${v.detail.phoneNumber}`),window.location.href="/"}function a(v){console.error("Login error:",v.detail),alert(`로그인 실패: ${v.detail.error}`)}Vt();var l=CT(),c=p(l),d=p(c);{var f=v=>{var g=ET(),b=p(g),E=p(b,!0);h(b);var I=_(b,4);h(g),J(C=>S(E,C),[()=>r()("로그인")]),Ai("login-success",I,o),Ai("login-error",I,a),w(v,g)},u=v=>{var g=kT(),b=_(p(g),2),E=p(b);h(b),on(2),h(g),J(()=>S(E,`${n().phoneNumber??""}로 로그인하셨습니다.`)),w(v,g)};H(d,v=>{n()?v(u,!1):v(f)})}h(c),h(l),w(t,l),Ve(),i()}pe(rv,{},[],[],!0);var TT=R('<button class="menu-item svelte-163o8b2"> </button>'),xT=R('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2">아래에서 이동할 페이지를 선택하세요</p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const ST={hash:"svelte-163o8b2",code:`\r
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
  }`};function sv(t,e){Be(e,!1),He(t,ST),kt(()=>{Zt("메뉴")});function n(a){window.history.pushState({},"",a),window.dispatchEvent(new PopStateEvent("popstate"))}const r=[{label:"홈",path:"/"},{label:"로그인",path:"/user/login"},{label:"사용자 프로필",path:"/user/profile"},{label:"게시물 목록",path:"/post/list"},{label:"게시물 상세 (예: ID:123)",path:"/post/detail/123"},{label:"채팅 목록",path:"/chat/list"},{label:"설정",path:"/settings"},{label:"앱 정보",path:"/about"},{label:"도움말",path:"/help"},{label:"이용 약관",path:"/terms"},{label:"개인정보 처리방침",path:"/privacy"},{label:"문의하기",path:"/contact"},{label:"[개발] 테스트 게시글 생성",path:"/dev/generate-posts"}];Vt();var s=xT(),i=p(s),o=_(p(i),2);Ot(o,5,()=>r,a=>a.path,(a,l)=>{var c=TT();c.__click=()=>n(m(l).path);var d=p(c,!0);h(c),J(()=>S(d,m(l).label)),w(a,c)}),h(o),h(i),h(s),w(t,s),Ve()}nt(["click"]);pe(sv,{},[],[],!0);var AT=R('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),RT=R('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3">사진 없음</span></div>'),PT=R('<button type="button" class="photo-remove-button svelte-17u94r3" aria-label="프로필 사진 제거"><!></button>'),NT=R('<p class="upload-status svelte-17u94r3">사진을 저장하는 중입니다...</p>'),LT=R('<div class="message-box success-message svelte-17u94r3"> </div>'),OT=R('<div class="message-box error-message svelte-17u94r3"> </div>'),DT=R('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3">프로필 사진</label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;" aria-label="프로필 사진 선택"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3">프로필 사진을 클릭하여 변경</p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName">닉네임</label> <input type="text" id="displayName" class="form-input svelte-17u94r3" placeholder="닉네임을 입력하세요" maxlength="50" required/> <p class="form-helper svelte-17u94r3">최대 50자까지 입력할 수 있습니다</p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender">성별</label> <select id="gender" class="form-select svelte-17u94r3"><option>선택하지 않음</option><option>남자</option><option>여자</option><option>기타</option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth">생년월일</label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3">YYYY-MM-DD 형식으로 선택해주세요</p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3">취소</button></div></form></div>');const MT={hash:"svelte-17u94r3",code:`
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
  }`};function iv(t,e){Be(e,!0),He(t,MT);let n=te(Lt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),r=te(null),s=te(null),i=te(!1),o=te(!1),a=te(null),l=te(null),c=null,d=null;function f(z){y(a,z,!0),c&&clearTimeout(c),c=setTimeout(()=>{y(a,null),c=null},3e3)}function u(z){y(l,z,!0),d&&clearTimeout(d),d=setTimeout(()=>{y(l,null),d=null},5e3)}df(()=>{c&&clearTimeout(c),d&&clearTimeout(d)}),kt(()=>{Zt("프로필 수정")}),Os(()=>{if(be.data){m(n).displayName=be.data.displayName||"",m(n).gender=be.data.gender||"",m(n).dateOfBirth=be.data.dateOfBirth||"";const z=be.data.photoUrl??be.data.photoURL??"";m(n).photoUrl=z,y(r,z||null,!0)}});function v(){m(o)||m(s)?.click()}async function g(z){const ue=z.currentTarget?.files?.[0];if(!ue)return;if(m(o)){u("다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.");return}if(!be.isAuthenticated||!be.uid){u("로그인 후 이용해주세요.");return}if(!ue.type.startsWith("image/")){u("이미지 파일만 선택 가능합니다.");return}if(ue.size>5*1024*1024){u("파일 크기는 5MB 이하여야 합니다.");return}const Fe=m(r),lt=m(n).photoUrl,Re=new FileReader;Re.onload=Ae=>{const Pe=Ae.target?.result;typeof Pe=="string"&&y(r,Pe,!0)},Re.readAsDataURL(ue);try{await E(ue)}catch{y(r,Fe,!0),m(n).photoUrl=lt,m(s)&&(m(s).value="")}}async function b(){if(m(o))return;if(!be.isAuthenticated||!be.uid){u("로그인 후 이용해주세요.");return}const z=m(r),ie=m(n).photoUrl;y(r,null),m(n).photoUrl="",m(s)&&(m(s).value="");try{y(o,!0),await be.updateProfile({photoUrl:null}),f("프로필 사진이 제거되었습니다.")}catch(ue){console.error("프로필 사진 제거 오류:",ue),u(`사진 제거 실패: ${ue.message||"알 수 없는 오류가 발생했습니다."}`),y(r,z,!0),m(n).photoUrl=ie}finally{y(o,!1)}}async function E(z,{showSuccess:ie=!0}={}){if(!be.isAuthenticated||!be.uid)throw u("로그인 후 이용해주세요."),new Error("User is not authenticated");try{y(o,!0);const ue=z.name.split(".").pop()?.toLowerCase()||"jpg",Fe=`profile_${be.uid}_${Date.now()}.${ue}`,lt=KC(ZC,`users/${be.uid}/profile/${Fe}`),Re=await WC(lt,z),Ae=await GC(Re.ref);return m(n).photoUrl=Ae,y(r,Ae,!0),await be.updateProfile({photoUrl:Ae}),ie&&f("프로필 사진이 저장되었습니다."),Ae}catch(ue){throw console.error("프로필 사진 업로드 오류:",ue),u(`사진 저장 실패: ${ue.message||"알 수 없는 오류가 발생했습니다."}`),ue}finally{y(o,!1),m(s)&&(m(s).value="")}}async function I(z){z.preventDefault(),y(i,!0),y(l,null),y(a,null);try{let ie=m(n).photoUrl;const ue=m(s)?.files?.[0];if(ue)try{ie=await E(ue,{showSuccess:!1})}catch{y(i,!1);return}const Fe={displayName:m(n).displayName,gender:m(n).gender,dateOfBirth:m(n).dateOfBirth,photoUrl:ie||null};await be.updateProfile(Fe),f("프로필이 성공적으로 업데이트되었습니다!"),console.log("프로필 업데이트 완료:",Fe)}catch(ie){console.error("프로필 업데이트 오류:",ie),u(`오류: ${ie.message||"알 수 없는 오류가 발생했습니다."}`)}finally{y(i,!1)}}function C(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var P=DT(),T=p(P),L=p(T),N=_(p(L),2),A=p(N);A.__change=g,uc(A,z=>y(s,z),()=>m(s));var k=_(A,2),M=p(k);M.__click=v;var q=p(M);{var V=z=>{var ie=AT();J(()=>lc(ie,`background-image: url("${m(r)}")`)),w(z,ie)},F=z=>{var ie=RT();w(z,ie)};H(q,z=>{m(r)?z(V):z(F,!1)})}h(M);var B=_(M,2);{var K=z=>{var ie=PT();ie.__click=b;var ue=p(ie);Jm(ue,{size:18,"stroke-width":3}),h(ie),J(()=>ie.disabled=m(i)||m(o)),w(z,ie)};H(B,z=>{m(r)&&z(K)})}var W=_(B,2),Y=p(W);Vm(Y,{size:20,"stroke-width":2}),h(W),h(k);var ae=_(k,4);{var ee=z=>{var ie=NT();w(z,ie)};H(ae,z=>{m(o)&&z(ee)})}h(N),h(L);var $=_(L,2),x=_(p($),2);Ds(x),on(2),h($);var U=_($,2),Z=_(p(U),2),Q=p(Z);Q.value=Q.__value="";var he=_(Q);he.value=he.__value="male";var O=_(he);O.value=O.__value="female";var j=_(O);j.value=j.__value="other",h(Z),h(U);var le=_(U,2),re=_(p(le),2);Ds(re),on(2),h(le);var ce=_(le,2);{var ne=z=>{var ie=LT(),ue=p(ie);h(ie),J(()=>S(ue,`✅ ${m(a)??""}`)),w(z,ie)};H(ce,z=>{m(a)&&z(ne)})}var X=_(ce,2);{var ke=z=>{var ie=OT(),ue=p(ie);h(ie),J(()=>S(ue,`⚠️ ${m(l)??""}`)),w(z,ie)};H(X,z=>{m(l)&&z(ke)})}var me=_(X,2),ve=p(me),Ce=p(ve,!0);h(ve);var Ke=_(ve,2);Ke.__click=C,h(me),h(T),h(P),J(()=>{M.disabled=m(i)||m(o),je(M,"aria-label",m(r)?"프로필 사진 변경":"프로필 사진 추가"),x.disabled=m(i),Z.disabled=m(i),re.disabled=m(i),ve.disabled=m(i)||m(o)||!be.isAuthenticated,S(Ce,m(i)?"저장 중...":"저장"),Ke.disabled=m(i)}),Ai("submit",T,I),Ms(x,()=>m(n).displayName,z=>m(n).displayName=z),cc(Z,()=>m(n).gender,z=>m(n).gender=z),Ms(re,()=>m(n).dateOfBirth,z=>m(n).dateOfBirth=z),w(t,P),Ve()}nt(["change","click"]);pe(iv,{},[],[],!0);var $T=R('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),UT=R('<div class="loading-container svelte-a4suww"><!></div>'),FT=R('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),zT=R('<div class="error-container svelte-a4suww"><!></div>'),qT=R('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),jT=R('<div class="empty-container svelte-a4suww"><!></div>'),BT=R('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),VT=R('<div class="item-wrapper svelte-a4suww"><!></div>'),HT=R('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),WT=R('<div class="loading-more svelte-a4suww"><!></div>'),GT=R('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),KT=R('<div class="no-more svelte-a4suww"><!></div>'),YT=R('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),QT=R('<div class="database-list-view svelte-a4suww"><!></div>');const JT={hash:"svelte-a4suww",code:`\r
  /* 컨테이너 */.database-list-view.svelte-a4suww {width:100%;height:100%;overflow-y:auto;overflow-x:hidden;flex:1;display:flex;flex-direction:column;}\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function yu(t,e){Be(e,!0),He(t,JT);let n=Ye(e,"path",7,""),r=Ye(e,"pageSize",7,10),s=Ye(e,"orderBy",7,"createdAt"),i=Ye(e,"threshold",7,300),o=Ye(e,"reverse",7,!1),a=Ye(e,"item",7),l=Ye(e,"loading",7),c=Ye(e,"empty",7),d=Ye(e,"error",7),f=Ye(e,"loadingMore",7),u=Ye(e,"noMore",7),v=te(Lt([])),g=te(!1),b=te(!0),E=te(!0),I=te(null),C=te(null),P=te(0),T=te(null),L=te(null),N=new Map,A=new Map;Os(()=>{n()&&Kn&&q()}),Os(()=>{if(m(L))return m(L).addEventListener("scroll",F),window.addEventListener("scroll",B),()=>{m(L)?.removeEventListener("scroll",F),window.removeEventListener("scroll",B)}});function k(x,U){if(x.length===0)return null;const Z=x[x.length-1],Q=Z.data[U];return Q!=null&&Q!==""?(console.log(`DatabaseListView: Using cursor from '${U}':`,{value:Q,key:Z.key}),{value:Q,key:Z.key}):(console.warn(`DatabaseListView: Field '${U}' not found in last item, using key as fallback:`,Z.key),{value:Z.key,key:Z.key})}function M(x,U){const Z=`${x}`;if(N.has(Z))return;const Q=Ar(Kn,`${n()}/${x}`),he=uu(Q,O=>{if(O.exists()){const j=O.val();m(v)[U]={key:x,data:j},y(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${x}`,j)}},O=>{console.error(`DatabaseListView: Error listening to item ${x}`,O)});N.set(Z,he)}async function q(){console.log("DatabaseListView: Loading initial data from",n(),"(reverse:",o(),")"),y(b,!0),y(T,null),y(v,[],!0),A.clear(),N.clear(),y(I,null),y(C,null),y(E,!0),y(P,0);try{const x=Ar(Kn,n());let U;o()?(U=po(x,fo(s()),rh(r()+1)),console.log("DatabaseListView: Using limitToLast for reverse order")):(U=po(x,fo(s()),nh(r()+1)),console.log("DatabaseListView: Using limitToFirst for normal order"));const Z=await th(U);if(Z.exists()){const Q=[],he=Z.val();if(Object.entries(he).forEach(([O,j])=>{Q.push({key:O,data:j})}),console.log(`DatabaseListView: Initial query returned ${Q.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",Q.map(O=>({key:O.key,[s()]:O.data[s()]}))),o()&&(Q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),Q.length>r()){y(E,!0),y(v,Q.slice(0,r()),!0);const O=k(m(v),s());O?(y(I,O.value,!0),y(C,O.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:m(I),lastLoadedKey:m(C)})):y(E,!1)}else if(y(E,!1),y(v,Q,!0),m(v).length>0){const O=k(m(v),s());O&&(y(I,O.value,!0),y(C,O.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:m(I),lastLoadedKey:m(C)}))}A.set(0,m(v)),m(v).forEach((O,j)=>{M(O.key,j)}),console.log(`DatabaseListView: Page ${m(P)} - Loaded ${m(v).length} items, hasMore: ${m(E)}`)}else console.log("DatabaseListView: No data found"),y(v,[],!0),y(E,!1)}catch(x){console.error("DatabaseListView: Load error",x),y(T,x.message,!0)}finally{y(b,!1)}}async function V(){if(m(g)||!m(E)){console.log("DatabaseListView: Cannot load more - loading:",m(g),"hasMore:",m(E));return}cl(P),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(P)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",m(I),"lastLoadedKey:",m(C)),y(g,!0),y(T,null);try{if(m(I)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(E,!1),y(g,!1);return}const x=Ar(Kn,n());let U;o()?(U=po(x,fo(s()),kk(m(I)),rh(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination")):(U=po(x,fo(s()),Ik(m(I)),nh(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination"));const Z=await th(U);if(Z.exists()){const Q=[],he=Z.val();Object.entries(he).forEach(([re,ce])=>{Q.push({key:re,data:ce})}),console.log(`DatabaseListView: Page ${m(P)} - Query returned ${Q.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(P)} - Items orderBy values:`,Q.map(re=>({key:re.key,[s()]:re.data[s()]}))),o()&&(Q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const O=new Set(m(v).map(re=>re.key)),j=Q.filter(re=>!O.has(re.key));if(console.log(`DatabaseListView: Page ${m(P)} - After filtering duplicates: ${j.length} items`),j.length===0){console.log("DatabaseListView: No more unique items after filtering"),y(E,!1),y(g,!1);return}if(Q.length>r()){y(E,!0);const re=j.slice(0,r());y(v,[...m(v),...re],!0);const ce=k(re,s());ce?(y(I,ce.value,!0),y(C,ce.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:m(I),lastLoadedKey:m(C)})):(y(E,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(y(E,!1),y(v,[...m(v),...j],!0),j.length>0){const re=k(j,s());re&&(y(I,re.value,!0),y(C,re.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:m(I),lastLoadedKey:m(C)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const le=m(v).length-(j.length>r()?r():j.length);m(v).slice(le).forEach((re,ce)=>{M(re.key,le+ce)}),console.log(`DatabaseListView: Page ${m(P)} - Loaded ${j.length} more items, total: ${m(v).length}, hasMore: ${m(E)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),y(E,!1)}catch(x){console.error("DatabaseListView: Load more error",{name:x.name,message:x.message,code:x.code,toString:x.toString()}),y(T,x.message||x.code||"Unknown error",!0)}finally{y(g,!1)}}function F(){if(!m(L)||m(g)||!m(E))return;const{scrollTop:x,scrollHeight:U,clientHeight:Z}=m(L);U-(x+Z)<i()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),V())}function B(){if(m(g)||!m(E))return;const x=window.pageYOffset||document.documentElement.scrollTop,U=document.documentElement.scrollHeight,Z=window.innerHeight;U-(x+Z)<i()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),V())}function K(){console.log("DatabaseListView: Refreshing..."),q()}var W={refresh:K,get path(){return n()},set path(x=""){n(x),Ge()},get pageSize(){return r()},set pageSize(x=10){r(x),Ge()},get orderBy(){return s()},set orderBy(x="createdAt"){s(x),Ge()},get threshold(){return i()},set threshold(x=300){i(x),Ge()},get reverse(){return o()},set reverse(x=!1){o(x),Ge()},get item(){return a()},set item(x){a(x),Ge()},get loading(){return l()},set loading(x){l(x),Ge()},get empty(){return c()},set empty(x){c(x),Ge()},get error(){return d()},set error(x){d(x),Ge()},get loadingMore(){return f()},set loadingMore(x){f(x),Ge()},get noMore(){return u()},set noMore(x){u(x),Ge()}},Y=QT(),ae=p(Y);{var ee=x=>{var U=UT(),Z=p(U);{var Q=O=>{var j=fe(),le=se(j);gs(le,l),w(O,j)},he=O=>{var j=$T();w(O,j)};H(Z,O=>{l()?O(Q):O(he,!1)})}h(U),w(x,U)},$=x=>{var U=fe(),Z=se(U);{var Q=O=>{var j=zT(),le=p(j);{var re=ne=>{var X=fe(),ke=se(X);gs(ke,d,()=>m(T)),w(ne,X)},ce=ne=>{var X=FT(),ke=_(p(X),2),me=p(ke,!0);h(ke);var ve=_(ke,2);ve.__click=K,h(X),J(()=>S(me,m(T))),w(ne,X)};H(le,ne=>{d()?ne(re):ne(ce,!1)})}h(j),w(O,j)},he=O=>{var j=fe(),le=se(j);{var re=ne=>{var X=jT(),ke=p(X);{var me=Ce=>{var Ke=fe(),z=se(Ke);gs(z,c),w(Ce,Ke)},ve=Ce=>{var Ke=qT();w(Ce,Ke)};H(ke,Ce=>{c()?Ce(me):Ce(ve,!1)})}h(X),w(ne,X)},ce=ne=>{var X=YT(),ke=p(X);Ot(ke,19,()=>m(v),z=>z.key,(z,ie,ue)=>{var Fe=VT(),lt=p(Fe);{var Re=Pe=>{var At=fe(),xe=se(At);gs(xe,a,()=>m(ie),()=>m(ue)),w(Pe,At)},Ae=Pe=>{var At=BT(),xe=p(At),Ne=p(xe,!0);h(xe),h(At),J(Je=>S(Ne,Je),[()=>JSON.stringify(m(ie).data,null,2)]),w(Pe,At)};H(lt,Pe=>{a()?Pe(Re):Pe(Ae,!1)})}h(Fe),J(()=>je(Fe,"data-key",m(ie).key)),w(z,Fe)});var me=_(ke,2);{var ve=z=>{var ie=WT(),ue=p(ie);{var Fe=Re=>{var Ae=fe(),Pe=se(Ae);gs(Pe,f),w(Re,Ae)},lt=Re=>{var Ae=HT();w(Re,Ae)};H(ue,Re=>{f()?Re(Fe):Re(lt,!1)})}h(ie),w(z,ie)};H(me,z=>{m(g)&&z(ve)})}var Ce=_(me,2);{var Ke=z=>{var ie=KT(),ue=p(ie);{var Fe=Re=>{var Ae=fe(),Pe=se(Ae);gs(Pe,u),w(Re,Ae)},lt=Re=>{var Ae=GT();w(Re,Ae)};H(ue,Re=>{u()?Re(Fe):Re(lt,!1)})}h(ie),w(z,ie)};H(Ce,z=>{!m(E)&&!m(g)&&z(Ke)})}h(X),w(ne,X)};H(le,ne=>{m(v).length===0?ne(re):ne(ce,!1)},!0)}w(O,j)};H(Z,O=>{m(T)?O(Q):O(he,!1)},!0)}w(x,U)};H(ae,x=>{m(b)?x(ee):x($,!1)})}return h(Y),uc(Y,x=>y(L,x),()=>m(L)),w(t,Y),Ve(W)}nt(["click"]);pe(yu,{path:{},pageSize:{},orderBy:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var XT=R('<img class="svelte-r48pmi"/>'),ZT=R('<div class="avatar-placeholder svelte-r48pmi"> </div>'),ex=R('<span class="badge-me svelte-r48pmi">나</span>'),tx=R('<p class="user-email svelte-r48pmi"> </p>'),nx=R('<p class="user-bio svelte-r48pmi"> </p>'),rx=R('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi">프로필 보기</button></div></div>'),sx=R('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p>사용자 목록을 불러오는 중...</p></div>'),ix=R('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi">등록된 사용자가 없습니다.</p></div>'),ox=R('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi">사용자 목록을 불러오는데 실패했습니다.</p> <p class="error-detail svelte-r48pmi"> </p></div>'),ax=R('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi">더 많은 사용자를 불러오는 중...</p></div>'),lx=R('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi">모든 사용자를 불러왔습니다.</p></div>');const cx={hash:"svelte-r48pmi",code:`\r
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
  }`};function ov(t,e){Be(e,!1),He(t,cx);const n=()=>dn(Js,"$t",r),[r,s]=us();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"정보 없음"}kt(()=>{Zt(n()("사용자찾기"))});function o(a){a===be.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}Vt(),yu(t,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(v,g=cn)=>{var b=rx();b.__click=()=>o(g().key),b.__keydown=$=>{($.key==="Enter"||$.key===" ")&&($.preventDefault(),o(g().key))};var E=p(b),I=p(E);{var C=$=>{var x=XT();J(()=>{je(x,"src",g().data?.photoUrl??g().data?.photoURL),je(x,"alt",g().data?.displayName||"사용자")}),w($,x)},P=$=>{var x=ZT(),U=p(x,!0);h(x),J(Z=>S(U,Z),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),w($,x)};H(I,$=>{g().data?.photoUrl||g().data?.photoURL?$(C):$(P,!1)})}h(E);var T=_(E,2),L=p(T),N=p(L),A=_(N);{var k=$=>{var x=ex();w($,x)};H(A,$=>{g().key===be.uid&&$(k)})}h(L);var M=_(L,2),q=p(M,!0);h(M);var V=_(M,2);{var F=$=>{var x=tx(),U=p(x,!0);h(x),J(()=>S(U,g().data.email)),w($,x)};H(V,$=>{g().data?.email&&$(F)})}var B=_(V,2);{var K=$=>{var x=nx(),U=p(x,!0);h(x),J(()=>S(U,g().data.bio)),w($,x)};H(B,$=>{g().data?.bio&&$(K)})}var W=_(B,2),Y=p(W);h(W),h(T);var ae=_(T,2),ee=p(ae);ee.__click=$=>{$.stopPropagation(),o(g().key)},h(ae),h(b),J($=>{S(N,`${(g().data?.displayName||"이름 없음")??""} `),S(q,g().key),S(Y,`가입일: ${$??""}`)},[()=>i(g().data?.createdAt)]),w(v,b)},loading:v=>{var g=sx();w(v,g)},empty:v=>{var g=ix();w(v,g)},error:(v,g=cn)=>{var b=ox(),E=_(p(b),4),I=p(E,!0);h(E),h(b),J(()=>S(I,g())),w(v,b)},loadingMore:v=>{var g=ax();w(v,g)},noMore:v=>{var g=lx();w(v,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),Ve(),s()}nt(["click","keydown"]);pe(ov,{},[],[],!0);async function ux(t,e,n,r,s){try{const i=Date.now(),o={uid:e,title:r,content:s,author:n,category:t,createdAt:i,updatedAt:i},a=Ar(Kn,`posts/${t}`);return{success:!0,postId:(await Cm(a,o)).key}}catch(i){return console.error("게시글 생성 실패:",i),{success:!1,error:i.message}}}const ch=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}],Eu=Ws([]);function il(t,e="success",n=3e3){const r=Date.now();Eu.update(s=>[...s,{id:r,message:t,type:e}]),setTimeout(()=>{av(r)},n)}function av(t){Eu.update(e=>e.filter(n=>n.id!==t))}var dx=R('<div class="loading-screen svelte-1r1wwfo"><p>로딩 중...</p></div>'),hx=R("<button> </button>"),fx=R('<div class="post-item svelte-1r1wwfo"><h3 class="post-title svelte-1r1wwfo"><span class="post-number svelte-1r1wwfo"> </span> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><span class="post-author svelte-1r1wwfo"> </span> <span class="post-date svelte-1r1wwfo"> </span></div></div>'),px=R('<div class="empty-state svelte-1r1wwfo"><div class="empty-icon svelte-1r1wwfo">📝</div> <p class="empty-message svelte-1r1wwfo">게시글이 없습니다</p> <p class="empty-hint svelte-1r1wwfo">첫 번째 게시글을 작성해보세요!</p></div>'),mx=R('<div class="loading-more svelte-1r1wwfo"><p class="svelte-1r1wwfo">게시글을 불러오는 중...</p></div>'),vx=R("<option> </option>"),gx=R('<div class="modal-backdrop svelte-1r1wwfo" role="presentation"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo">새 게시글 작성</h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo">카테고리</label> <select id="category" class="form-control svelte-1r1wwfo"><option>카테고리 선택</option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo">제목</label> <input id="title" type="text" placeholder="제목을 입력하세요" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo">내용</label> <textarea id="content" placeholder="내용을 입력하세요" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo">취소</button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),_x=R('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div> <button class="btn-create-post svelte-1r1wwfo">✏️ 글쓰기</button></div> <!></div> <!>',1);const bx={hash:"svelte-1r1wwfo",code:`\r
  /* 게시판 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:64rem;margin:0 auto;padding:2rem 1rem;}\r
\r
  /* 상단 도구 모음 (카테고리 + 글쓰기) */.toolbar.svelte-1r1wwfo {display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;padding-bottom:0.75rem;margin-bottom:1.5rem;border-bottom:1px solid #e5e7eb;}\r
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.75rem 1.5rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:background-color 0.2s ease;flex-shrink:0;}.btn-create-post.svelte-1r1wwfo:hover {background-color:#2563eb;}\r
\r
  /* 카테고리 탭 */.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;overflow-x:auto;flex:1;}.tab.svelte-1r1wwfo {padding:0.75rem 1rem;background-color:transparent;border:none;color:#6b7280;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all 0.2s ease;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#1f2937;color:#ffffff;border-radius:0.25rem 0.25rem 0 0;}\r
\r
  /* 빈 상태 */.empty-state.svelte-1r1wwfo {background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:3rem;text-align:center;}.empty-icon.svelte-1r1wwfo {font-size:2.5rem;margin-bottom:1rem;display:block;}.empty-message.svelte-1r1wwfo {margin:0 0 0.5rem 0;font-size:1rem;color:#111827;font-weight:600;}.empty-hint.svelte-1r1wwfo {margin:0;font-size:0.875rem;color:#6b7280;}\r
\r
  /* 게시글 목록 */.post-item.svelte-1r1wwfo {background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;transition:box-shadow 0.2s ease, transform 0.2s ease;cursor:pointer;}.post-item.svelte-1r1wwfo:hover {box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);transform:translateY(-2px);}.post-title.svelte-1r1wwfo {margin:0 0 1rem 0;font-size:1.125rem;font-weight:600;color:#111827;}\r
\r
  /* 게시글 번호 */.post-number.svelte-1r1wwfo {display:inline-block;min-width:2.5rem;color:#3b82f6;font-weight:700;font-size:1rem;}.post-content.svelte-1r1wwfo {margin:0 0 1rem 0;font-size:0.875rem;color:#6b7280;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1r1wwfo {display:flex;gap:1rem;font-size:0.75rem;color:#9ca3af;}.post-author.svelte-1r1wwfo,\r
  .post-date.svelte-1r1wwfo {display:inline-block;}\r
\r
  /* 로딩 화면 */.loading-screen.svelte-1r1wwfo {display:flex;align-items:center;justify-content:center;min-height:100vh;font-size:0.95rem;color:#6b7280;}\r
\r
  /* 추가 로딩 중 표시 (무한 스크롤) */.loading-more.svelte-1r1wwfo {padding:2rem;text-align:center;color:#6b7280;font-size:0.875rem;}.loading-more.svelte-1r1wwfo p:where(.svelte-1r1wwfo) {margin:0;}\r
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
  @media (max-width: 640px) {.post-list-container.svelte-1r1wwfo {padding:1rem;}.btn-create-post.svelte-1r1wwfo {width:100%;}.modal.svelte-1r1wwfo {width:calc(100% - 2rem);max-height:85vh;}.category-tabs.svelte-1r1wwfo {overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
  }`};function lv(t,e){Be(e,!0),He(t,bx);let n=te(null),r=te(""),s=te(!0);const i=new URLSearchParams(typeof window<"u"?window.location.search:"");let o=te(Lt(i.get("category")||"community")),a=te(!1),l=te(""),c=te(""),d=te(""),f=te(!1);kt(()=>{Zt("게시판");const T=os.onAuthStateChanged(async L=>{if(L){y(n,L.uid,!0);const N=L.displayName||L.email||"익명";y(r,N,!0)}else y(n,null),y(r,"");y(s,!1)});return()=>T()});function u(){if(!m(n)){window.location.href="/user/login";return}y(a,!0)}function v(){y(a,!1),y(l,""),y(c,""),y(d,"")}async function g(){if(!m(l)){alert("카테고리를 선택해주세요.");return}if(!m(c).trim()){alert("제목을 입력해주세요.");return}if(!m(d).trim()){alert("내용을 입력해주세요.");return}if(!m(n)||!m(r)){alert("로그인 정보를 확인할 수 없습니다.");return}y(f,!0);try{const T=await ux(m(l),m(n),m(r),m(c),m(d));if(T.success){const L=m(l);y(a,!1),y(l,""),y(c,""),y(d,""),il("게시글이 작성되었습니다.","success")}else il(`게시글 저장 실패: ${T.error||"Unknown error"}`,"error")}catch(T){console.error("게시글 저장 오류:",T),il("게시글 저장 중 오류가 발생했습니다.","error")}finally{y(f,!1)}}function b(T){y(o,T,!0),window.history.pushState({},"",`/post/list?category=${T}`)}var E=fe(),I=se(E);{var C=T=>{var L=dx();w(T,L)},P=T=>{var L=_x(),N=se(L),A=p(N),k=p(A);Ot(k,21,()=>ch,B=>B.value,(B,K)=>{var W=hx();W.__click=()=>b(m(K).value);var Y=p(W,!0);h(W),J(()=>{Kt(W,1,`tab ${m(o)===m(K).value?"active":""}`,"svelte-1r1wwfo"),S(Y,m(K).label)}),w(B,W)}),h(k);var M=_(k,2);M.__click=u,h(A);var q=_(A,2);{const B=(ae,ee=cn,$=cn)=>{var x=fx(),U=p(x),Z=p(U),Q=p(Z);h(Z);var he=_(Z);h(U);var O=_(U,2),j=p(O,!0);h(O);var le=_(O,2),re=p(le),ce=p(re);h(re);var ne=_(re,2),X=p(ne,!0);h(ne),h(le),h(x),J(ke=>{S(Q,`${$()+1}.`),S(he,` ${ee().data.title??""}`),S(j,ee().data.content),S(ce,`작성자: ${ee().data.author??""}`),S(X,ke)},[()=>new Date(ee().data.createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),w(ae,x)},K=ae=>{var ee=px();w(ae,ee)},W=ae=>{var ee=mx();w(ae,ee)};let Y=Ao(()=>`posts/${m(o)}`);yu(q,{get path(){return m(Y)},orderBy:"createdAt",reverse:!0,pageSize:20,item:B,empty:K,loading:W,$$slots:{item:!0,empty:!0,loading:!0}})}h(N);var V=_(N,2);{var F=B=>{var K=gx();K.__click=()=>y(a,!1),K.__keydown=X=>X.key==="Escape"&&y(a,!1);var W=p(K);W.__click=X=>X.stopPropagation();var Y=p(W),ae=_(p(Y),2);ae.__click=()=>y(a,!1),h(Y);var ee=_(Y,2),$=p(ee),x=_(p($),2),U=p(x);U.value=U.__value="";var Z=_(U);Ot(Z,17,()=>ch,X=>X.value,(X,ke)=>{var me=vx(),ve=p(me,!0);h(me);var Ce={};J(()=>{S(ve,m(ke).label),Ce!==(Ce=m(ke).value)&&(me.value=(me.__value=m(ke).value)??"")}),w(X,me)}),h(x),h($);var Q=_($,2),he=_(p(Q),2);Ds(he),h(Q);var O=_(Q,2),j=_(p(O),2);mg(j),h(O),h(ee);var le=_(ee,2),re=p(le);re.__click=v;var ce=_(re,2);ce.__click=g;var ne=p(ce,!0);h(ce),h(le),h(W),h(K),J(()=>{re.disabled=m(f),ce.disabled=m(f),S(ne,m(f)?"전송 중...":"전송")}),cc(x,()=>m(l),X=>y(l,X)),Ms(he,()=>m(c),X=>y(c,X)),Ms(j,()=>m(d),X=>y(d,X)),w(B,K)};H(V,B=>{m(a)&&B(F)})}w(T,L)};H(I,T=>{m(s)?T(C):T(P,!1)})}w(t,E),Ve()}nt(["click","keydown"]);pe(lv,{},[],[],!0);var wx=R('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1sszjx6">게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1sszjx6">메뉴로 돌아가기</button></div></div>');const yx={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function cv(t,e){Be(e,!1),He(t,yx),kt(()=>{Zt("게시물 상세")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=wx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(cv,{},[],[],!0);var Ex=R('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1xfn8v9">채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1xfn8v9">메뉴로 돌아가기</button></div></div>');const kx={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function uv(t,e){Be(e,!1),He(t,kx),kt(()=>{Zt("채팅")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Ex(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(uv,{},[],[],!0);var Cx=R('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08">이 페이지는 공사중입니다</p> <p class="construction-description svelte-177ja08">설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-177ja08">메뉴로 돌아가기</button></div></div>');const Ix={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function dv(t,e){Be(e,!1),He(t,Ix),kt(()=>{Zt("설정")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Cx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(dv,{},[],[],!0);var Tx=R('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe">이 페이지는 공사중입니다</p> <p class="construction-description svelte-65loqe">앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-65loqe">메뉴로 돌아가기</button></div></div>');const xx={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function hv(t,e){Be(e,!1),He(t,xx),kt(()=>{Zt("앱 정보")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Tx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(hv,{},[],[],!0);var Sx=R('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna">이 페이지는 공사중입니다</p> <p class="construction-description svelte-19u7yna">도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-19u7yna">메뉴로 돌아가기</button></div></div>');const Ax={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function fv(t,e){Be(e,!1),He(t,Ax),kt(()=>{Zt("도움말")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Sx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(fv,{},[],[],!0);var Rx=R('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w">이 페이지는 공사중입니다</p> <p class="construction-description svelte-134dw7w">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-134dw7w">메뉴로 돌아가기</button></div></div>');const Px={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function pv(t,e){Be(e,!1),He(t,Px),kt(()=>{Zt("이용약관")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Rx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(pv,{},[],[],!0);var Nx=R('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj">이 페이지는 공사중입니다</p> <p class="construction-description svelte-8iwrwj">개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-8iwrwj">메뉴로 돌아가기</button></div></div>');const Lx={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function mv(t,e){Be(e,!1),He(t,Lx),kt(()=>{Zt("개인정보처리방침")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Nx(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(mv,{},[],[],!0);var Ox=R('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1f7uyy3">문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1f7uyy3">메뉴로 돌아가기</button></div></div>');const Dx={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function vv(t,e){Be(e,!1),He(t,Dx),kt(()=>{Zt("문의하기")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Vt();var r=Ox(),s=p(r),i=_(p(s),2);i.__click=n,h(s),h(r),w(t,r),Ve()}nt(["click"]);pe(vv,{},[],[],!0);var Mx=R('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp">⚠️ 로그인이 필요합니다.</p> <a href="/user/login" class="svelte-uqnmwp">로그인하러 가기</a></div>'),$x=R('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),Ux=R('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),Fx=R('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp">실행 로그</h3> <div class="logs svelte-uqnmwp"></div></div>'),zx=R('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp">✅ 완료! 게시판 페이지에서 확인해보세요.</p> <a href="/post/list" class="btn-view svelte-uqnmwp">게시판 보기</a></div>'),qx=R('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <!></div> <!> <!>',1),jx=R('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp">📝 테스트 게시글 생성</h1> <p class="svelte-uqnmwp">각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.</p></div> <!></div></div>');const Bx={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0;color:#6b7280;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function gv(t,e){Be(e,!0),He(t,Bx);let n=te(!1),r=te(Lt({current:0,total:0,category:""})),s=te(Lt([])),i=te(!1);kt(()=>{Zt("테스트 데이터 생성")});function o(I,C="info"){y(s,[...m(s),{message:I,type:C,time:new Date().toLocaleTimeString()}],!0)}const a={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},qna:{titles:["근처 좋은 병원 추천해주세요","택배 수령 어디서 하나요?","버스 노선 문의드립니다","주차장 이용 방법 알려주세요","쓰레기 배출 시간이 언제인가요?","세탁소 추천 부탁드려요","동네 도서관 이용 방법","반려동물 병원 어디가 좋나요?","자전거 보관소 위치 알려주세요"],contents:["{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?","{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.","{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?","{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]},market:{titles:["중고 자전거 판매합니다","안쓰는 가전제품 나눔해요","아이 장난감 저렴하게 팔아요","책장 정리 - 책 나눔","운동기구 판매합니다","여행 캐리어 팔아요","화분과 식물 나눔","게임기 판매합니다","옷장 정리 - 의류 판매"],contents:["{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!","집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!","{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!"]}},l={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function c(I){return I[Math.floor(Math.random()*I.length)]}function d(I){let C=I;for(const[P,T]of Object.entries(l)){const L=new RegExp(`\\{${P}\\}`,"g");C=C.replace(L,c(T))}return C}async function f(){if(!be.isAuthenticated||!be.uid){o("❌ 로그인이 필요합니다.","error");return}y(n,!0),y(i,!1),y(s,[],!0),o("✅ 테스트 데이터 생성 시작","success"),o(`사용자: ${be.data?.displayName||be.email}`,"info");const I=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];for(const C of I){y(r,{current:0,total:100,category:C.label},!0),o(`
📂 [${C.label}] 생성 중...`,"info");const P=a[C.value];let T=0;for(let L=0;L<100;L++)try{const N=d(c(P.titles)),A=d(c(P.contents)),k=Date.now(),M={uid:be.uid,title:N,content:A,author:be.data?.displayName||be.email||"익명",category:C.value,createdAt:k-Math.floor(Math.random()*30*24*60*60*1e3),updatedAt:k},q=Ar(Kn,`posts/${C.value}`);await Cm(q,M),T++,y(r,{...m(r),current:L+1},!0),(L+1)%20===0&&o(`  ✓ ${L+1}/100 완료`,"success"),await new Promise(V=>setTimeout(V,50))}catch(N){o(`  ✗ 실패: ${N.message}`,"error")}o(`✅ [${C.label}] 완료: ${T}개 생성`,"success")}o(`
🎉 모든 테스트 데이터 생성 완료!`,"success"),o("총 400개의 게시글이 생성되었습니다.","success"),y(n,!1),y(i,!0)}var u=jx(),v=p(u),g=_(p(v),2);{var b=I=>{var C=Mx();w(I,C)},E=I=>{var C=qx(),P=se(C),T=p(P);T.__click=f;var L=p(T,!0);h(T);var N=_(T,2);{var A=F=>{var B=$x(),K=p(B),W=p(K,!0);h(K);var Y=_(K,2),ae=p(Y);h(Y);var ee=_(Y,2),$=p(ee);h(ee),h(B),J(()=>{S(W,m(r).category),lc(ae,`width: ${m(r).current/m(r).total*100}%`),S($,`${m(r).current??""} / ${m(r).total??""}`)}),w(F,B)};H(N,F=>{m(n)&&F(A)})}h(P);var k=_(P,2);{var M=F=>{var B=Fx(),K=_(p(B),2);Ot(K,21,()=>m(s),Vn,(W,Y)=>{var ae=Ux(),ee=p(ae),$=p(ee,!0);h(ee);var x=_(ee,2),U=p(x,!0);h(x),h(ae),J(()=>{Kt(ae,1,`log-item log-${m(Y).type??""}`,"svelte-uqnmwp"),S($,m(Y).time),S(U,m(Y).message)}),w(W,ae)}),h(K),h(B),w(F,B)};H(k,F=>{m(s).length>0&&F(M)})}var q=_(k,2);{var V=F=>{var B=zx();w(F,B)};H(q,F=>{m(i)&&F(V)})}J(()=>{T.disabled=m(n),S(L,m(n)?"생성 중...":"게시글 생성 시작")}),w(I,C)};H(g,I=>{be.isAuthenticated?I(E,!1):I(b)})}h(v),h(u),w(t,u),Ve()}nt(["click"]);pe(gv,{},[],[],!0);var Vx=R('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),Hx=R('<div class="toast-container svelte-1cpok13"></div>');const Wx={hash:"svelte-1cpok13",code:`\r
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
  }`};function _v(t,e){Be(e,!1),He(t,Wx);const n=()=>dn(Eu,"$toasts",r),[r,s]=us();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}Vt();var o=Hx();Ot(o,5,n,a=>a.id,(a,l)=>{var c=Vx(),d=p(c),f=p(d,!0);h(d);var u=_(d,2),v=p(u,!0);h(u);var g=_(u,2);g.__click=()=>av(m(l).id),h(c),J(b=>{Kt(c,1,`toast toast-${m(l).type??""}`,"svelte-1cpok13"),S(f,b),S(v,m(l).message)},[()=>i(m(l).type)]),w(a,c)}),h(o),w(t,o),Ve(),s()}nt(["click"]);pe(_v,{},[],[],!0);var Gx=R('<sns-layout><main class="content svelte-1hwhcgc"><!></main></sns-layout> <!>',3);const Kx={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 반응형 */`};function bv(t){He(t,Kx);let e=te(Lt(window.location.pathname));function n(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",n);var r=Gx(),s=se(r),i=p(s),o=p(i);{var a=d=>{rv(d,{})},l=d=>{var f=fe(),u=se(f);{var v=b=>{sv(b,{})},g=b=>{var E=fe(),I=se(E);{var C=T=>{iv(T,{})},P=T=>{var L=fe(),N=se(L);{var A=M=>{ov(M,{})},k=M=>{var q=fe(),V=se(q);{var F=K=>{lv(K,{})},B=K=>{var W=fe(),Y=se(W);{var ae=$=>{cv($,{})},ee=$=>{var x=fe(),U=se(x);{var Z=he=>{uv(he,{})},Q=he=>{var O=fe(),j=se(O);{var le=ce=>{dv(ce,{})},re=ce=>{var ne=fe(),X=se(ne);{var ke=ve=>{hv(ve,{})},me=ve=>{var Ce=fe(),Ke=se(Ce);{var z=ue=>{fv(ue,{})},ie=ue=>{var Fe=fe(),lt=se(Fe);{var Re=Pe=>{pv(Pe,{})},Ae=Pe=>{var At=fe(),xe=se(At);{var Ne=ct=>{mv(ct,{})},Je=ct=>{var Ut=fe(),Ft=se(Ut);{var Tn=_t=>{vv(_t,{})},en=_t=>{var tn=fe(),Un=se(tn);{var dr=Me=>{gv(Me,{})},hr=Me=>{nv(Me,{})};H(Un,Me=>{m(e)==="/dev/generate-posts"?Me(dr):Me(hr,!1)},!0)}w(_t,tn)};H(Ft,_t=>{m(e)==="/contact"?_t(Tn):_t(en,!1)},!0)}w(ct,Ut)};H(xe,ct=>{m(e)==="/privacy"?ct(Ne):ct(Je,!1)},!0)}w(Pe,At)};H(lt,Pe=>{m(e)==="/terms"?Pe(Re):Pe(Ae,!1)},!0)}w(ue,Fe)};H(Ke,ue=>{m(e)==="/help"?ue(z):ue(ie,!1)},!0)}w(ve,Ce)};H(X,ve=>{m(e)==="/about"?ve(ke):ve(me,!1)},!0)}w(ce,ne)};H(j,ce=>{m(e)==="/settings"?ce(le):ce(re,!1)},!0)}w(he,O)};H(U,he=>{m(e)==="/chat/list"?he(Z):he(Q,!1)},!0)}w($,x)};H(Y,$=>{m(e).startsWith("/post/detail/")?$(ae):$(ee,!1)},!0)}w(K,W)};H(V,K=>{m(e)==="/post/list"?K(F):K(B,!1)},!0)}w(M,q)};H(N,M=>{m(e)==="/user/list"?M(A):M(k,!1)},!0)}w(T,L)};H(I,T=>{m(e)==="/user/profile"?T(C):T(P,!1)},!0)}w(b,E)};H(u,b=>{m(e)==="/menu"?b(v):b(g,!1)},!0)}w(d,f)};H(o,d=>{m(e)==="/user/login"?d(a):d(l,!1)})}h(i),h(s);var c=_(s,2);_v(c,{}),w(t,r)}pe(bv,{},[],[],!0);oc(bv,{target:document.getElementById("app")});
