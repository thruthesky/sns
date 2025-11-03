(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const th=!1;var Bl=Array.isArray,fv=Array.prototype.indexOf,Hl=Array.from,wo=Object.keys,ks=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,nh=Object.getOwnPropertyDescriptors,pv=Object.prototype,mv=Array.prototype,Vl=Object.getPrototypeOf,gu=Object.isExtensible;function Xi(t){return typeof t=="function"}const Nn=()=>{};function vv(t){return t()}function yo(t){for(var e=0;e<t.length;e++)t[e]()}function rh(){var t,e,n=new Promise((r,i)=>{t=r,e=i});return{promise:n,resolve:t,reject:e}}function gv(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const At=2,Wl=4,Jo=8,nr=16,rr=32,Lr=64,Xo=128,Tt=1024,jt=2048,ir=4096,Kt=8192,Wn=16384,Gl=32768,xr=65536,_u=1<<17,_v=1<<18,oi=1<<19,ih=1<<20,an=256,Eo=512,Co=32768,el=1<<21,Kl=1<<22,Vr=1<<23,Ln=Symbol("$state"),Yl=Symbol("legacy props"),bv=Symbol(""),wi=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},wv=1,Ql=3,ji=8;function sh(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ev(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Iv(t){throw new Error("https://svelte.dev/e/effect_orphan")}function kv(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tv(){throw new Error("https://svelte.dev/e/hydration_failed")}function xv(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Sv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Av(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Pv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Zo=1,ea=2,oh=4,Nv=8,Lv=16,Ov=1,Dv=2,ah=4,Mv=8,$v=16,Uv=1,Fv=2,lh="[",ta="[!",Jl="]",Ai={},gt=Symbol(),zv="http://www.w3.org/1999/xhtml",qv="http://www.w3.org/2000/svg",jv="@attach";function na(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Bv(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Hv(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ce=!1;function Wt(t){ce=t}let ke;function bt(t){if(t===null)throw na(),Ai;return ke=t}function Yr(){return bt($n(ke))}function h(t){if(ce){if($n(ke)!==null)throw na(),Ai;ke=t}}function rn(t=1){if(ce){for(var e=t,n=ke;e--;)n=$n(n);ke=n}}function Io(t=!0){for(var e=0,n=ke;;){if(n.nodeType===ji){var r=n.data;if(r===Jl){if(e===0)return n;e-=1}else(r===lh||r===ta)&&(e+=1)}var i=$n(n);t&&n.remove(),n=i}}function ch(t){if(!t||t.nodeType!==ji)throw na(),Ai;return t.data}function uh(t){return t===this.v}function dh(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function hh(t){return!dh(t,this.v)}let Bi=!1,Vv=!1;function Wv(){Bi=!0}let Ye=null;function Ri(t){Ye=t}function qe(t,e=!1,n){Ye={p:Ye,i:!1,c:null,e:null,s:t,x:null,l:Bi&&!e?{s:null,u:null,$:[]}:null}}function je(t){var e=Ye,n=e.e;if(n!==null){e.e=null;for(var r of n)Rh(r)}return t!==void 0&&(e.x=t),e.i=!0,Ye=e.p,t??{}}function qs(){return!Bi||Ye!==null&&Ye.l===null}let Br=[];function fh(){var t=Br;Br=[],yo(t)}function Or(t){if(Br.length===0&&!ds){var e=Br;queueMicrotask(()=>{e===Br&&fh()})}Br.push(t)}function Gv(){for(;Br.length>0;)fh()}function ph(t){var e=_e;if(e===null)return Ie.f|=Vr,t;if((e.f&Gl)===0){if((e.f&Xo)===0)throw t;e.b.error(t)}else Pi(t,e)}function Pi(t,e){for(;e!==null;){if((e.f&Xo)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const oo=new Set;let Le=null,us=null,pn=null,An=[],ra=null,tl=!1,ds=!1;class _n{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#i=0;#l=null;#o=[];#s=[];skipped_effects=new Set;is_fork=!1;process(e){An=[],us=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects)):(us=this,Le=null,bu(n.render_effects),bu(n.effects),us=null,this.#l?.resolve()),pn=null}#n(e,n){e.f^=Tt;for(var r=e.first;r!==null;){var i=r.f,s=(i&(rr|Lr))!==0,o=s&&(i&Tt)!==0,a=o||(i&Kt)!==0||this.skipped_effects.has(r);if((r.f&Xo)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=Tt:(i&Wl)!==0?n.effects.push(r):Vs(r)&&((r.f&nr)!==0&&n.block_effects.push(r),xs(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#a(e){for(const n of e)((n.f&jt)!==0?this.#o:this.#s).push(n),St(n,Tt)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),pn?.set(e,e.v)}activate(){Le=this}deactivate(){Le=null,pn=null}flush(){if(this.activate(),An.length>0){if(mh(),Le!==null&&Le!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(oo.size>1){this.previous.clear();var e=pn,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of oo){if(i===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(n&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)vh(c,o,a,l);if(An.length>0){Le=i,i.apply();for(const c of An)i.#n(c,r);An=[],i.deactivate()}}}Le=null,pn=e}this.committed=!0,oo.delete(this)}increment(e){this.#r+=1,e&&(this.#i+=1)}decrement(e){this.#r-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)St(e,jt),Qr(e);for(const e of this.#s)St(e,ir),Qr(e);this.#o=[],this.#s=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=rh()).promise}static ensure(){if(Le===null){const e=Le=new _n;oo.add(Le),ds||_n.enqueue(()=>{Le===e&&e.flush()})}return Le}static enqueue(e){Or(e)}apply(){}}function ze(t){var e=ds;ds=!0;try{for(var n;;){if(Gv(),An.length===0&&(Le?.flush(),An.length===0))return ra=null,n;mh()}}finally{ds=e}}function mh(){var t=Ii;tl=!0;try{var e=0;for(Cu(!0);An.length>0;){var n=_n.ensure();if(e++>1e3){var r,i;Kv()}n.process(An),wr.clear()}}finally{tl=!1,Cu(t),ra=null}}function Kv(){try{kv()}catch(t){Pi(t,ra)}}let qn=null;function bu(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Wn|Kt))===0&&Vs(r)&&(qn=new Set,xs(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Lh(r):r.fn=null),qn?.size>0)){wr.clear();for(const i of qn){if((i.f&(Wn|Kt))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)qn.has(o)&&(qn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Wn|Kt))===0&&xs(l)}}qn.clear()}}qn=null}}function vh(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const i of t.reactions){const s=i.f;(s&At)!==0?vh(i,e,n,r):(s&(Kl|nr))!==0&&(s&jt)===0&&gh(i,e,r)&&(St(i,jt),Qr(i))}}function gh(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const i of t.deps){if(e.includes(i))return!0;if((i.f&At)!==0&&gh(i,e,n))return n.set(i,!0),!0}return n.set(t,!1),!1}function Qr(t){for(var e=ra=t;e.parent!==null;){e=e.parent;var n=e.f;if(tl&&e===_e&&(n&nr)!==0)return;if((n&(Lr|rr))!==0){if((n&Tt)===0)return;e.f^=Tt}}An.push(e)}function Yv(t){let e=0,n=Sr(0),r;return()=>{ag()&&(m(n),sa(()=>(e===0&&(r=Mn(()=>t(()=>hs(n)))),e+=1,()=>{Or(()=>{e-=1,e===0&&(r?.(),r=void 0,hs(n))})})))}}var Qv=xr|oi|Xo;function Jv(t,e,n){new Xv(t,e,n)}class Xv{parent;#t=!1;#e;#r=ce?ke:null;#i;#l;#o;#s=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=Yv(()=>(this.#h=Sr(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#i=n,this.#l=r,this.parent=_e.b,this.#t=!!this.#i.pending,this.#o=ai(()=>{if(_e.b=this,ce){const s=this.#r;Yr(),s.nodeType===ji&&s.data===ta?this.#y():this.#w()}else{var i=this.#g();try{this.#s=Ut(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},Qv),ce&&(this.#e=ke)}#w(){try{this.#s=Ut(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#i.pending;e&&(this.#n=Ut(()=>e(this.#e)),_n.enqueue(()=>{var n=this.#g();this.#s=this.#m(()=>(_n.ensure(),Ut(()=>this.#l(n)))),this.#d>0?this.#v():(Ci(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=ln(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(e){var n=_e,r=Ie,i=Ye;cn(this.#o),Ft(this.#o),Ri(this.#o.ctx);try{return e()}catch(s){return ph(s),null}finally{cn(n),Ft(r),Ri(i)}}#v(){const e=this.#i.pending;this.#s!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Mh(this.#s,this.#c)),this.#n===null&&(this.#n=Ut(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&Ci(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Ni(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var n=this.#i.onerror;let r=this.#i.failed;if(this.#p||!n&&!r)throw e;this.#s&&(ut(this.#s),this.#s=null),this.#n&&(ut(this.#n),this.#n=null),this.#a&&(ut(this.#a),this.#a=null),ce&&(bt(this.#r),rn(),bt(Io()));var i=!1,s=!1;const o=()=>{if(i){Hv();return}i=!0,s&&Pv(),_n.ensure(),this.#f=0,this.#a!==null&&Ci(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#s=this.#m(()=>(this.#p=!1,Ut(()=>this.#l(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=Ie;try{Ft(null),s=!0,n?.(e,o),s=!1}catch(l){Pi(l,this.#o&&this.#o.parent)}finally{Ft(a)}r&&Or(()=>{this.#a=this.#m(()=>{_n.ensure(),this.#p=!0;try{return Ut(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Pi(l,this.#o.parent),null}finally{this.#p=!1}})})}}function _h(t,e,n,r){const i=qs()?js:Xl;if(n.length===0&&t.length===0){r(e.map(i));return}var s=Le,o=_e,a=Zv();function l(){Promise.all(n.map(c=>eg(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&Wn)===0&&Pi(d,o)}s?.deactivate(),ko()}).catch(c=>{Pi(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),ko()}}):l()}function Zv(){var t=_e,e=Ie,n=Ye,r=Le;return function(s=!0){cn(t),Ft(e),Ri(n),s&&r?.activate()}}function ko(){cn(null),Ft(null),Ri(null)}function js(t){var e=At|jt,n=Ie!==null&&(Ie.f&At)!==0?Ie:null;return _e===null||n!==null&&(n.f&an)!==0?e|=an:_e.f|=oi,{ctx:Ye,deps:null,effects:null,equals:uh,f:e,fn:t,reactions:null,rv:0,v:gt,wv:0,parent:n??_e,ac:null}}function eg(t,e){let n=_e;n===null&&yv();var r=n.b,i=void 0,s=Sr(gt),o=!Ie,a=new Map;return dg(()=>{var l=rh();i=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===Le&&c.committed&&c.deactivate(),ko()})}catch(u){l.reject(u),ko()}var c=Le;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(wi),a.delete(c),a.set(c,l)}const f=(u,v=void 0)=>{if(c.activate(),v)v!==wi&&(s.f|=Vr,Ni(s,v));else{(s.f&Vr)!==0&&(s.f^=Vr),Ni(s,u);for(const[g,b]of a){if(a.delete(g),g===c)break;b.reject(wi)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(f,u=>f(null,u||"unknown"))}),Bs(()=>{for(const l of a.values())l.reject(wi)}),new Promise(l=>{function c(d){function f(){d===i?l(s):c(i)}d.then(f,f)}c(i)})}function nl(t){const e=js(t);return $h(e),e}function Xl(t){const e=js(t);return e.equals=hh,e}function bh(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)ut(e[n])}}function tg(t){for(var e=t.parent;e!==null;){if((e.f&At)===0)return e;e=e.parent}return null}function Zl(t){var e,n=_e;cn(tg(t));try{t.f&=~Co,bh(t),e=qh(t)}finally{cn(n)}return e}function wh(t){var e=Zl(t);if(t.equals(e)||(t.v=e,t.wv=Fh()),!li)if(pn!==null)pn.set(t,t.v);else{var n=(vr||(t.f&an)!==0)&&t.deps!==null?ir:Tt;St(t,n)}}let rl=new Set;const wr=new Map;let yh=!1;function Sr(t,e){var n={f:0,v:t,reactions:null,equals:uh,rv:0,wv:0};return n}function X(t,e){const n=Sr(t);return $h(n),n}function ec(t,e=!1,n=!0){const r=Sr(t);return e||(r.equals=hh),Bi&&n&&Ye!==null&&Ye.l!==null&&(Ye.l.s??=[]).push(r),r}function y(t,e,n=!1){Ie!==null&&(!mn||(Ie.f&_u)!==0)&&qs()&&(Ie.f&(At|nr|Kl|_u))!==0&&!Gn?.includes(t)&&Rv();let r=n?xt(e):e;return Ni(t,r)}function Ni(t,e){if(!t.equals(e)){var n=t.v;li?wr.set(t,e):wr.set(t,n),t.v=e;var r=_n.ensure();r.capture(t,n),(t.f&At)!==0&&((t.f&jt)!==0&&Zl(t),St(t,(t.f&an)===0?Tt:ir)),t.wv=Fh(),Eh(t,jt),qs()&&_e!==null&&(_e.f&Tt)!==0&&(_e.f&(rr|Lr))===0&&(nn===null?pg([t]):nn.push(t)),!r.is_fork&&rl.size>0&&!yh&&ng()}return e}function ng(){yh=!1;const t=Array.from(rl);for(const e of t)(e.f&Tt)!==0&&St(e,ir),Vs(e)&&xs(e);rl.clear()}function il(t,e=1){var n=m(t),r=e===1?n++:n--;return y(t,n),r}function hs(t){y(t,t.v+1)}function Eh(t,e){var n=t.reactions;if(n!==null)for(var r=qs(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;if(!(!r&&o===_e)){var l=(a&jt)===0;l&&St(o,e),(a&At)!==0?(a&Co)===0&&(o.f|=Co,Eh(o,ir)):l&&((a&nr)!==0&&qn!==null&&qn.add(o),Qr(o))}}}function xt(t){if(typeof t!="object"||t===null||Ln in t)return t;const e=Vl(t);if(e!==pv&&e!==mv)return t;var n=new Map,r=Bl(t),i=X(0),s=Wr,o=a=>{if(Wr===s)return a();var l=Ie,c=Wr;Ft(null),ku(s);var d=a();return Ft(l),ku(c),d};return r&&n.set("length",X(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Sv();var d=n.get(l);return d===void 0?d=o(()=>{var f=X(c.value);return n.set(l,f),f}):y(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>X(gt));n.set(l,d),hs(i)}}else y(c,gt),hs(i);return!0},get(a,l,c){if(l===Ln)return t;var d=n.get(l),f=l in a;if(d===void 0&&(!f||Vn(a,l)?.writable)&&(d=o(()=>{var v=xt(f?a[l]:gt),g=X(v);return g}),n.set(l,d)),d!==void 0){var u=m(d);return u===gt?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=m(d))}else if(c===void 0){var f=n.get(l),u=f?.v;if(f!==void 0&&u!==gt)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Ln)return!0;var c=n.get(l),d=c!==void 0&&c.v!==gt||Reflect.has(a,l);if(c!==void 0||_e!==null&&(!d||Vn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?xt(a[l]):gt,v=X(u);return v}),n.set(l,c));var f=m(c);if(f===gt)return!1}return d},set(a,l,c,d){var f=n.get(l),u=l in a;if(r&&l==="length")for(var v=c;v<f.v;v+=1){var g=n.get(v+"");g!==void 0?y(g,gt):v in a&&(g=o(()=>X(gt)),n.set(v+"",g))}if(f===void 0)(!u||Vn(a,l)?.writable)&&(f=o(()=>X(void 0)),y(f,xt(c)),n.set(l,f));else{u=f.v!==gt;var b=o(()=>xt(c));y(f,b)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(d,c),!u){if(r&&typeof l=="string"){var k=n.get("length"),I=Number(l);Number.isInteger(I)&&I>=k.v&&y(k,I+1)}hs(i)}return!0},ownKeys(a){m(i);var l=Reflect.ownKeys(a).filter(f=>{var u=n.get(f);return u===void 0||u.v!==gt});for(var[c,d]of n)d.v!==gt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Av()}})}function wu(t){try{if(t!==null&&typeof t=="object"&&Ln in t)return t[Ln]}catch{}return t}function rg(t,e){return Object.is(wu(t),wu(e))}var yu,Ch,Ih,kh;function sl(){if(yu===void 0){yu=window,Ch=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Ih=Vn(e,"firstChild").get,kh=Vn(e,"nextSibling").get,gu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),gu(n)&&(n.__t=void 0)}}function ln(t=""){return document.createTextNode(t)}function En(t){return Ih.call(t)}function $n(t){return kh.call(t)}function p(t,e){if(!ce)return En(t);var n=En(ke);if(n===null)n=ke.appendChild(ln());else if(e&&n.nodeType!==Ql){var r=ln();return n?.before(r),bt(r),r}return bt(n),n}function se(t,e=!1){if(!ce){var n=En(t);return n instanceof Comment&&n.data===""?$n(n):n}if(e&&ke?.nodeType!==Ql){var r=ln();return ke?.before(r),bt(r),r}return ke}function _(t,e=1,n=!1){let r=ce?ke:t;for(var i;e--;)i=r,r=$n(r);if(!ce)return r;if(n&&r?.nodeType!==Ql){var s=ln();return r===null?i?.after(s):r.before(s),bt(s),s}return bt(r),r}function tc(t){t.textContent=""}function Th(){return!1}function ig(t,e){if(e){const n=document.body;t.autofocus=!0,Or(()=>{document.activeElement===n&&t.focus()})}}function sg(t){ce&&En(t)!==null&&tc(t)}let Eu=!1;function xh(){Eu||(Eu=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function ia(t){var e=Ie,n=_e;Ft(null),cn(null);try{return t()}finally{Ft(e),cn(n)}}function Sh(t,e,n,r=n){t.addEventListener(e,()=>ia(n));const i=t.__on_r;i?t.__on_r=()=>{i(),r(!0)}:t.__on_r=()=>r(!0),xh()}function Ah(t){_e===null&&Ie===null&&Iv(),Ie!==null&&(Ie.f&an)!==0&&_e===null&&Cv(),li&&Ev()}function og(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Cn(t,e,n,r=!0){var i=_e;i!==null&&(i.f&Kt)!==0&&(t|=Kt);var s={ctx:Ye,deps:null,nodes_start:null,nodes_end:null,f:t|jt,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{xs(s),s.f|=Gl}catch(l){throw ut(s),l}else e!==null&&Qr(s);if(r){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&oi)===0&&(o=o.first,(t&nr)!==0&&(t&xr)!==0&&o!==null&&(o.f|=xr)),o!==null&&(o.parent=i,i!==null&&og(o,i),Ie!==null&&(Ie.f&At)!==0&&(t&Lr)===0)){var a=Ie;(a.effects??=[]).push(o)}}return s}function ag(){return Ie!==null&&!mn}function Bs(t){const e=Cn(Jo,null,!1);return St(e,Tt),e.teardown=t,e}function Jr(t){Ah();var e=_e.f,n=!Ie&&(e&rr)!==0&&(e&Gl)===0;if(n){var r=Ye;(r.e??=[]).push(t)}else return Rh(t)}function Rh(t){return Cn(Wl|ih,t,!1)}function lg(t){return Ah(),Cn(Jo|ih,t,!0)}function cg(t){_n.ensure();const e=Cn(Lr|oi,t,!0);return()=>{ut(e)}}function ug(t){_n.ensure();const e=Cn(Lr|oi,t,!0);return(n={})=>new Promise(r=>{n.outro?Ci(e,()=>{ut(e),r(void 0)}):(ut(e),r(void 0))})}function Hs(t){return Cn(Wl,t,!1)}function dg(t){return Cn(Kl|oi,t,!0)}function sa(t,e=0){return Cn(Jo|e,t,!0)}function ee(t,e=[],n=[],r=[]){_h(r,e,n,i=>{Cn(Jo,()=>t(...i.map(m)),!0)})}function ai(t,e=0){var n=Cn(nr|e,t,!0);return n}function Ut(t,e=!0){return Cn(rr|oi,t,!0,e)}function Ph(t){var e=t.teardown;if(e!==null){const n=li,r=Ie;Iu(!0),Ft(null);try{e.call(null)}finally{Iu(n),Ft(r)}}}function Nh(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const i=n.ac;i!==null&&ia(()=>{i.abort(wi)});var r=n.next;(n.f&Lr)!==0?n.parent=null:ut(n,e),n=r}}function hg(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&rr)===0&&ut(e),e=n}}function ut(t,e=!0){var n=!1;(e||(t.f&_v)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(fg(t.nodes_start,t.nodes_end),n=!0),Nh(t,e&&!n),To(t,0),St(t,Wn);var r=t.transitions;if(r!==null)for(const s of r)s.stop();Ph(t);var i=t.parent;i!==null&&i.first!==null&&Lh(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function fg(t,e){for(;t!==null;){var n=t===e?null:$n(t);t.remove(),t=n}}function Lh(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Ci(t,e,n=!0){var r=[];nc(t,r,!0),Oh(r,()=>{n&&ut(t),e&&e()})}function Oh(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function nc(t,e,n){if((t.f&Kt)===0){if(t.f^=Kt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var i=r.next,s=(r.f&xr)!==0||(r.f&rr)!==0&&(t.f&nr)!==0;nc(r,e,s?n:!1),r=i}}}function rc(t){Dh(t,!0)}function Dh(t,e){if((t.f&Kt)!==0){t.f^=Kt,(t.f&Tt)===0&&(St(t,jt),Qr(t));for(var n=t.first;n!==null;){var r=n.next,i=(n.f&xr)!==0||(n.f&rr)!==0;Dh(n,i?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function Mh(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var i=n===r?null:$n(n);e.append(n),n=i}}let Ii=!1;function Cu(t){Ii=t}let li=!1;function Iu(t){li=t}let Ie=null,mn=!1;function Ft(t){Ie=t}let _e=null;function cn(t){_e=t}let Gn=null;function $h(t){Ie!==null&&(Gn===null?Gn=[t]:Gn.push(t))}let Lt=null,Vt=0,nn=null;function pg(t){nn=t}let Uh=1,Ts=0,Wr=Ts;function ku(t){Wr=t}let vr=!1;function Fh(){return++Uh}function Vs(t){var e=t.f;if((e&jt)!==0)return!0;if((e&ir)!==0){var n=t.deps,r=(e&an)!==0;if(e&At&&(t.f&=~Co),n!==null){var i,s,o=(e&Eo)!==0,a=r&&_e!==null&&!vr,l=n.length;if((o||a)&&(_e===null||(_e.f&Wn)===0)){var c=t,d=c.parent;for(i=0;i<l;i++)s=n[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=Eo),a&&d!==null&&(d.f&an)===0&&(c.f^=an)}for(i=0;i<l;i++)if(s=n[i],Vs(s)&&wh(s),s.wv>t.wv)return!0}(!r||_e!==null&&!vr)&&St(t,Tt)}return!1}function zh(t,e,n=!0){var r=t.reactions;if(r!==null&&!Gn?.includes(t))for(var i=0;i<r.length;i++){var s=r[i];(s.f&At)!==0?zh(s,e,!1):e===s&&(n?St(s,jt):(s.f&Tt)!==0&&St(s,ir),Qr(s))}}function qh(t){var e=Lt,n=Vt,r=nn,i=Ie,s=vr,o=Gn,a=Ye,l=mn,c=Wr,d=t.f;Lt=null,Vt=0,nn=null,vr=(d&an)!==0&&(mn||!Ii||Ie===null),Ie=(d&(rr|Lr))===0?t:null,Gn=null,Ri(t.ctx),mn=!1,Wr=++Ts,t.ac!==null&&(ia(()=>{t.ac.abort(wi)}),t.ac=null);try{t.f|=el;var f=t.fn,u=f(),v=t.deps;if(Lt!==null){var g;if(To(t,Vt),v!==null&&Vt>0)for(v.length=Vt+Lt.length,g=0;g<Lt.length;g++)v[Vt+g]=Lt[g];else t.deps=v=Lt;if(!vr||(d&At)!==0&&t.reactions!==null)for(g=Vt;g<v.length;g++)(v[g].reactions??=[]).push(t)}else v!==null&&Vt<v.length&&(To(t,Vt),v.length=Vt);if(qs()&&nn!==null&&!mn&&v!==null&&(t.f&(At|ir|jt))===0)for(g=0;g<nn.length;g++)zh(nn[g],t);return i!==null&&i!==t&&(Ts++,nn!==null&&(r===null?r=nn:r.push(...nn))),(t.f&Vr)!==0&&(t.f^=Vr),u}catch(b){return ph(b)}finally{t.f^=el,Lt=e,Vt=n,nn=r,Ie=i,vr=s,Gn=o,Ri(a),mn=l,Wr=c}}function mg(t,e){let n=e.reactions;if(n!==null){var r=fv.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&At)!==0&&(Lt===null||!Lt.includes(e))&&(St(e,ir),(e.f&(an|Eo))===0&&(e.f^=Eo),bh(e),To(e,0))}function To(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)mg(t,n[r])}function xs(t){var e=t.f;if((e&Wn)===0){St(t,Tt);var n=_e,r=Ii;_e=t,Ii=!0;try{(e&nr)!==0?hg(t):Nh(t),Ph(t);var i=qh(t);t.teardown=typeof i=="function"?i:null,t.wv=Uh;var s;th&&Vv&&(t.f&jt)!==0&&t.deps}finally{Ii=r,_e=n}}}async function vg(){await Promise.resolve(),ze()}function m(t){var e=t.f,n=(e&At)!==0;if(Ie!==null&&!mn){var r=_e!==null&&(_e.f&Wn)!==0;if(!r&&!Gn?.includes(t)){var i=Ie.deps;if((Ie.f&el)!==0)t.rv<Ts&&(t.rv=Ts,Lt===null&&i!==null&&i[Vt]===t?Vt++:Lt===null?Lt=[t]:(!vr||!Lt.includes(t))&&Lt.push(t));else{(Ie.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[Ie]:s.includes(Ie)||s.push(Ie)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&an)===0&&(o.f^=an)}if(li){if(wr.has(t))return wr.get(t);if(n){o=t;var l=o.v;return((o.f&Tt)===0&&o.reactions!==null||jh(o))&&(l=Zl(o)),wr.set(o,l),l}}else if(n){if(o=t,pn?.has(o))return pn.get(o);Vs(o)&&wh(o)}if(pn?.has(t))return pn.get(t);if((t.f&Vr)!==0)throw t.v;return t.v}function jh(t){if(t.v===gt)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(wr.has(e)||(e.f&At)!==0&&jh(e))return!0;return!1}function Mn(t){var e=mn;try{return mn=!0,t()}finally{mn=e}}const gg=-7169;function St(t,e){t.f=t.f&gg|e}function bi(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Ln in t)ol(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Ln in n&&ol(n)}}}function ol(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ol(t[r],e)}catch{}const n=Vl(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=nh(n);for(let i in r){const s=r[i].get;if(s)try{s.call(t)}catch{}}}}}function _g(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const bg=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function wg(t){return bg.includes(t)}const yg={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Eg(t){return t=t.toLowerCase(),yg[t]??t}const Cg=["touchstart","touchmove"];function Ig(t){return Cg.includes(t)}const kg=["textarea","script","style","title"];function Tg(t){return kg.includes(t)}const Bh=new Set,al=new Set;function Hh(t,e,n,r={}){function i(s){if(r.capture||os.call(e,s),!s.cancelBubble)return ia(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Or(()=>{e.addEventListener(t,i,r)}):e.addEventListener(t,i,r),i}function Ss(t,e,n,r,i){var s={capture:r,passive:i},o=Hh(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Bs(()=>{e.removeEventListener(t,o,s)})}function st(t){for(var e=0;e<t.length;e++)Bh.add(t[e]);for(var n of al)n(t)}let Tu=null;function os(t){var e=this,n=e.ownerDocument,r=t.type,i=t.composedPath?.()||[],s=i[0]||t.target;Tu=t;var o=0,a=Tu===t&&t.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||t.target,s!==e){ks(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=Ie,f=_e;Ft(null),cn(null);try{for(var u,v=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var b=s["__"+r];b!=null&&(!s.disabled||t.target===s)&&b.call(s,t)}catch(E){u?v.push(E):u=E}if(t.cancelBubble||g===e||g===null)break;s=g}if(u){for(let E of v)queueMicrotask(()=>{throw E});throw u}}finally{t.__root=e,delete t.currentTarget,Ft(d),cn(f)}}}function Vh(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Kn(t,e){var n=_e;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function N(t,e){var n=(e&Uv)!==0,r=(e&Fv)!==0,i,s=!t.startsWith("<!>");return()=>{if(ce)return Kn(ke,null),ke;i===void 0&&(i=Vh(s?t:"<!>"+t),n||(i=En(i)));var o=r||Ch?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=En(o),l=o.lastChild;Kn(a,l)}else Kn(o,o);return o}}function xg(t,e,n="svg"){var r=!t.startsWith("<!>"),i=`<${n}>${r?t:"<!>"+t}</${n}>`,s;return()=>{if(ce)return Kn(ke,null),ke;if(!s){var o=Vh(i),a=En(o);s=En(a)}var l=s.cloneNode(!0);return Kn(l,l),l}}function Sg(t,e){return xg(t,e,"svg")}function de(){if(ce)return Kn(ke,null),ke;var t=document.createDocumentFragment(),e=document.createComment(""),n=ln();return t.append(e,n),Kn(e,n),t}function w(t,e){if(ce){_e.nodes_end=ke,Yr();return}t!==null&&t.before(e)}function S(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function ic(t,e){return Wh(t,e)}function Ag(t,e){sl(),e.intro=e.intro??!1;const n=e.target,r=ce,i=ke;try{for(var s=En(n);s&&(s.nodeType!==ji||s.data!==lh);)s=$n(s);if(!s)throw Ai;Wt(!0),bt(s);const o=Wh(t,{...e,anchor:s});return Wt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Ai&&console.warn("Failed to hydrate: ",o),e.recover===!1&&Tv(),sl(),tc(n),Wt(!1),ic(t,e)}finally{Wt(r),bt(i)}}const mi=new Map;function Wh(t,{target:e,anchor:n,props:r={},events:i,context:s,intro:o=!0}){sl();var a=new Set,l=f=>{for(var u=0;u<f.length;u++){var v=f[u];if(!a.has(v)){a.add(v);var g=Ig(v);e.addEventListener(v,os,{passive:g});var b=mi.get(v);b===void 0?(document.addEventListener(v,os,{passive:g}),mi.set(v,1)):mi.set(v,b+1)}}};l(Hl(Bh)),al.add(l);var c=void 0,d=ug(()=>{var f=n??e.appendChild(ln());return Jv(f,{pending:()=>{}},u=>{if(s){qe({});var v=Ye;v.c=s}if(i&&(r.$$events=i),ce&&Kn(u,null),c=t(u,r)||{},ce&&(_e.nodes_end=ke,ke===null||ke.nodeType!==ji||ke.data!==Jl))throw na(),Ai;s&&je()}),()=>{for(var u of a){e.removeEventListener(u,os);var v=mi.get(u);--v===0?(document.removeEventListener(u,os),mi.delete(u)):mi.set(u,v)}al.delete(l),f!==n&&f.parentNode?.removeChild(f)}});return ll.set(c,d),c}let ll=new WeakMap;function Rg(t,e){const n=ll.get(t);return n?(ll.delete(t),n(e)):Promise.resolve()}class sc{anchor;#t=new Map;#e=new Map;#r=new Map;#i=!0;constructor(e,n=!0){this.anchor=e,this.#i=n}#l=()=>{var e=Le;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)rc(r);else{var i=this.#r.get(n);i&&(this.#e.set(n,i.effect),this.#r.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#r.get(o);a&&(ut(a.effect),this.#r.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Mh(o,c),c.append(ln()),this.#r.set(s,{effect:o,fragment:c})}else ut(o);this.#e.delete(s)};this.#i||!r?Ci(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,i]of this.#r)n.includes(r)||(ut(i.effect),this.#r.delete(r))};ensure(e,n){var r=Le,i=Th();if(n&&!this.#e.has(e)&&!this.#r.has(e))if(i){var s=document.createDocumentFragment(),o=ln();s.append(o),this.#r.set(e,{effect:Ut(()=>n(o)),fragment:s})}else this.#e.set(e,Ut(()=>n(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else ce&&(this.anchor=ke),this.#l()}}function V(t,e,n=!1){ce&&Yr();var r=new sc(t),i=n?xr:0;function s(o,a){if(ce){const c=ch(t)===ta;if(o===c){var l=Io();bt(l),r.anchor=l,Wt(!1),r.ensure(o,a),Wt(!0);return}}r.ensure(o,a)}ai(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function gr(t,e){return e}function Pg(t,e,n){for(var r=t.items,i=[],s=e.length,o=0;o<s;o++)nc(e[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var l=n.parentNode;tc(l),l.append(n),r.clear(),Sn(t,e[0].prev,e[s-1].next)}Oh(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),Sn(t,d.prev,d.next)),ut(d.e,!a)}})}function zt(t,e,n,r,i,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&oh)!==0;if(l){var c=t;o=ce?bt(En(c)):c.appendChild(ln())}ce&&Yr();var d=null,f=!1,u=new Map,v=Xl(()=>{var k=n();return Bl(k)?k:k==null?[]:Hl(k)}),g,b;function E(){Ng(b,g,a,u,o,i,e,r,n),s!==null&&(g.length===0?d?rc(d):d=Ut(()=>s(o)):d!==null&&Ci(d,()=>{d=null}))}ai(()=>{b??=_e,g=m(v);var k=g.length;if(f&&k===0)return;f=k===0;let I=!1;if(ce){var A=ch(o)===ta;A!==(k===0)&&(o=Io(),bt(o),Wt(!1),I=!0)}if(ce){for(var L=null,P,R=0;R<k;R++){if(ke.nodeType===ji&&ke.data===Jl){o=ke,I=!0,Wt(!1);break}var T=g[R],C=r(T,R);P=cl(ke,a,L,null,T,C,R,i,e,n),a.items.set(C,P),L=P}k>0&&bt(Io())}if(ce)k===0&&s&&(d=Ut(()=>s(o)));else if(Th()){var M=new Set,B=Le;for(R=0;R<k;R+=1){T=g[R],C=r(T,R);var H=a.items.get(C)??u.get(C);H?(e&(Zo|ea))!==0&&Gh(H,T,R,e):(P=cl(null,a,null,null,T,C,R,i,e,n,!0),u.set(C,P)),M.add(C)}for(const[$,Y]of a.items)M.has($)||B.skipped_effects.add(Y.e);B.oncommit(E)}else E();I&&Wt(!0),m(v)}),ce&&(o=ke)}function Ng(t,e,n,r,i,s,o,a,l){var c=(o&Nv)!==0,d=(o&(Zo|ea))!==0,f=e.length,u=n.items,v=n.first,g=v,b,E=null,k,I=[],A=[],L,P,R,T;if(c)for(T=0;T<f;T+=1)L=e[T],P=a(L,T),R=u.get(P),R!==void 0&&(R.a?.measure(),(k??=new Set).add(R));for(T=0;T<f;T+=1){if(L=e[T],P=a(L,T),R=u.get(P),R===void 0){var C=r.get(P);if(C!==void 0){r.delete(P),u.set(P,C);var M=E?E.next:g;Sn(n,E,C),Sn(n,C,M),Sa(C,M,i),E=C}else{var B=g?g.e.nodes_start:i;E=cl(B,n,E,E===null?n.first:E.next,L,P,T,s,o,l)}u.set(P,E),I=[],A=[],g=E.next;continue}if(d&&Gh(R,L,T,o),(R.e.f&Kt)!==0&&(rc(R.e),c&&(R.a?.unfix(),(k??=new Set).delete(R))),R!==g){if(b!==void 0&&b.has(R)){if(I.length<A.length){var H=A[0],$;E=H.prev;var Y=I[0],le=I[I.length-1];for($=0;$<I.length;$+=1)Sa(I[$],H,i);for($=0;$<A.length;$+=1)b.delete(A[$]);Sn(n,Y.prev,le.next),Sn(n,E,Y),Sn(n,le,H),g=H,E=le,T-=1,I=[],A=[]}else b.delete(R),Sa(R,g,i),Sn(n,R.prev,R.next),Sn(n,R,E===null?n.first:E.next),Sn(n,E,R),E=R;continue}for(I=[],A=[];g!==null&&g.k!==P;)(g.e.f&Kt)===0&&(b??=new Set).add(g),A.push(g),g=g.next;if(g===null)continue;R=g}I.push(R),E=R,g=R.next}if(g!==null||b!==void 0){for(var Z=b===void 0?[]:Hl(b);g!==null;)(g.e.f&Kt)===0&&Z.push(g),g=g.next;var j=Z.length;if(j>0){var Q=(o&oh)!==0&&f===0?i:null;if(c){for(T=0;T<j;T+=1)Z[T].a?.measure();for(T=0;T<j;T+=1)Z[T].a?.fix()}Pg(n,Z,Q)}}c&&Or(()=>{if(k!==void 0)for(R of k)R.a?.apply()}),t.first=n.first&&n.first.e,t.last=E&&E.e;for(var J of r.values())ut(J.e);r.clear()}function Gh(t,e,n,r){(r&Zo)!==0&&Ni(t.v,e),(r&ea)!==0?Ni(t.i,n):t.i=n}function cl(t,e,n,r,i,s,o,a,l,c,d){var f=(l&Zo)!==0,u=(l&Lv)===0,v=f?u?ec(i,!1,!1):Sr(i):i,g=(l&ea)===0?o:Sr(o),b={i:g,v,k:s,a:null,e:null,prev:n,next:r};try{if(t===null){var E=document.createDocumentFragment();E.append(t=ln())}return b.e=Ut(()=>a(t,v,g,c),ce),b.e.prev=n&&n.e,b.e.next=r&&r.e,n===null?d||(e.first=b):(n.next=b,n.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Sa(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==r;){var o=$n(s);i.before(s),s=o}}function Sn(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Xe(t,e,n,r,i){ce&&Yr();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>r:r)}function vi(t,e,...n){var r=new sc(t);ai(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...n)))},xr)}function Lg(t,e,n,r,i,s){let o=ce;ce&&Yr();var a=null;ce&&ke.nodeType===wv&&(a=ke,Yr());var l=ce?ke:t,c=new sc(l,!1);ai(()=>{const d=e()||null;var f=qv;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=ce?a:document.createElementNS(f,d),Kn(a,a),r){ce&&Tg(d)&&a.append(document.createComment(""));var v=ce?En(a):a.appendChild(ln());ce&&(v===null?Wt(!1):bt(v)),r(a,v)}_e.nodes_end=a,u.before(a)}ce&&bt(u)}),()=>{}},xr),Bs(()=>{}),o&&(Wt(!0),bt(l))}function Be(t,e){Hs(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function Og(t,e){var n=void 0,r;ai(()=>{n!==(n=e())&&(r&&(ut(r),r=null),n&&(r=Ut(()=>{Hs(()=>n(t))})))})}function Kh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Kh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Dg(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Kh(t))&&(r&&(r+=" "),r+=e);return r}function Mg(t){return typeof t=="object"?Dg(t):t??""}const xu=[...` 	
\r\f \v\uFEFF`];function $g(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||xu.includes(r[o-1]))&&(a===r.length||xu.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Su(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var s=t[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Aa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Ug(t,e){if(e){var n="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Aa)),i&&l.push(...Object.keys(i).map(Aa));var c=0,d=-1;const b=t.length;for(var f=0;f<b;f++){var u=t[f];if(a?u==="/"&&t[f-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[f+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=f;else if(u===";"||f===b-1){if(d!==-1){var v=Aa(t.substring(c,d).trim());if(!l.includes(v)){u!==";"&&f++;var g=t.substring(c,f).trim();n+=" "+g+";"}}c=f+1,d=-1}}}}return r&&(n+=Su(r)),i&&(n+=Su(i,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function vn(t,e,n,r,i,s){var o=t.__className;if(ce||o!==n||o===void 0){var a=$g(n,r,s);(!ce||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&t.classList.toggle(l,c)}return s}function Ra(t,e={},n,r){for(var i in n){var s=n[i];e[i]!==s&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,s,r))}}function oc(t,e,n,r){var i=t.__style;if(ce||i!==e){var s=Ug(e,r);(!ce||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else r&&(Array.isArray(r)?(Ra(t,n?.[0],r[0]),Ra(t,n?.[1],r[1],"important")):Ra(t,n,r));return r}function xo(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Bl(e))return Bv();for(var r of t.options)r.selected=e.includes(fs(r));return}for(r of t.options){var i=fs(r);if(rg(i,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Yh(t){var e=new MutationObserver(()=>{xo(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Bs(()=>{e.disconnect()})}function ac(t,e,n=e){var r=new WeakSet,i=!0;Sh(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),fs);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&fs(l)}n(a),Le!==null&&r.add(Le)}),Hs(()=>{var s=e();if(t===document.activeElement){var o=us??Le;if(r.has(o))return}if(xo(t,s,i),i&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=fs(a),n(s))}t.__value=s,i=!1}),Yh(t)}function fs(t){return"__value"in t?t.__value:t.value}const Zi=Symbol("class"),es=Symbol("style"),Qh=Symbol("is custom element"),Jh=Symbol("is html");function Li(t){if(ce){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;Fe(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;Fe(t,"checked",null),t.checked=i}}};t.__on_r=n,Or(n),xh()}}function Fg(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Fe(t,e,n,r){var i=Xh(t);ce&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="loading"&&(t[bv]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Zh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function zg(t,e,n,r,i=!1,s=!1){if(ce&&i&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Li(o)}var l=Xh(t),c=l[Qh],d=!l[Jh];let f=ce&&c;f&&Wt(!1);var u=e||{},v=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class?n.class=Mg(n.class):n[Zi]&&(n.class=null),n[es]&&(n.style??=null);var b=Zh(t);for(const T in n){let C=n[T];if(v&&T==="value"&&C==null){t.value=t.__value="",u[T]=C;continue}if(T==="class"){var E=t.namespaceURI==="http://www.w3.org/1999/xhtml";vn(t,E,C,r,e?.[Zi],n[Zi]),u[T]=C,u[Zi]=n[Zi];continue}if(T==="style"){oc(t,C,e?.[es],n[es]),u[T]=C,u[es]=n[es];continue}var k=u[T];if(!(C===k&&!(C===void 0&&t.hasAttribute(T)))){u[T]=C;var I=T[0]+T[1];if(I!=="$$")if(I==="on"){const M={},B="$$"+T;let H=T.slice(2);var A=wg(H);if(_g(H)&&(H=H.slice(0,-7),M.capture=!0),!A&&k){if(C!=null)continue;t.removeEventListener(H,u[B],M),u[B]=null}if(C!=null)if(A)t[`__${H}`]=C,st([H]);else{let $=function(Y){u[T].call(this,Y)};var R=$;u[B]=Hh(H,t,$,M)}else A&&(t[`__${H}`]=void 0)}else if(T==="style")Fe(t,T,C);else if(T==="autofocus")ig(t,!!C);else if(!c&&(T==="__value"||T==="value"&&C!=null))t.value=t.__value=C;else if(T==="selected"&&v)Fg(t,C);else{var L=T;d||(L=Eg(L));var P=L==="defaultValue"||L==="defaultChecked";if(C==null&&!c&&!P)if(l[T]=null,L==="value"||L==="checked"){let M=t;const B=e===void 0;if(L==="value"){let H=M.defaultValue;M.removeAttribute(L),M.defaultValue=H,M.value=M.__value=B?H:null}else{let H=M.defaultChecked;M.removeAttribute(L),M.defaultChecked=H,M.checked=B?H:!1}}else t.removeAttribute(T);else P||b.includes(L)&&(c||typeof C!="string")?(t[L]=C,L in l&&(l[L]=gt)):typeof C!="function"&&Fe(t,L,C)}}}return f&&Wt(!0),u}function Au(t,e,n=[],r=[],i=[],s,o=!1,a=!1){_h(i,n,r,l=>{var c=void 0,d={},f=t.nodeName==="SELECT",u=!1;if(ai(()=>{var g=e(...l.map(m)),b=zg(t,c,g,s,o,a);u&&f&&"value"in g&&xo(t,g.value);for(let k of Object.getOwnPropertySymbols(d))g[k]||ut(d[k]);for(let k of Object.getOwnPropertySymbols(g)){var E=g[k];k.description===jv&&(!c||E!==c[k])&&(d[k]&&ut(d[k]),d[k]=Ut(()=>Og(t,()=>E))),b[k]=E}c=b}),f){var v=t;Hs(()=>{xo(v,c.value,!0),Yh(v)})}u=!0})}function Xh(t){return t.__attributes??={[Qh]:t.nodeName.includes("-"),[Jh]:t.namespaceURI===zv}}var Ru=new Map;function Zh(t){var e=t.getAttribute("is")||t.nodeName,n=Ru.get(e);if(n)return n;Ru.set(e,n=[]);for(var r,i=t,s=Element.prototype;s!==i;){r=nh(i);for(var o in r)r[o].set&&n.push(o);i=Vl(i)}return n}function Oi(t,e,n=e){var r=new WeakSet;Sh(t,"input",async i=>{var s=i?t.defaultValue:t.value;if(s=Pa(t)?Na(s):s,n(s),Le!==null&&r.add(Le),await vg(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(ce&&t.defaultValue!==t.value||Mn(e)==null&&t.value)&&(n(Pa(t)?Na(t.value):t.value),Le!==null&&r.add(Le)),sa(()=>{var i=e();if(t===document.activeElement){var s=us??Le;if(r.has(s))return}Pa(t)&&i===Na(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Pa(t){var e=t.type;return e==="number"||e==="range"}function Na(t){return t===""?null:+t}function Pu(t,e){return t===e||t?.[Ln]===e}function lc(t={},e,n,r){return Hs(()=>{var i,s;return sa(()=>{i=s,s=[],Mn(()=>{t!==n(...s)&&(e(t,...s),i&&Pu(n(...i),t)&&e(null,...i))})}),()=>{Or(()=>{s&&Pu(n(...s),t)&&e(null,...s)})}}),t}function Qt(t=!1){const e=Ye,n=e.l.u;if(!n)return;let r=()=>bi(e.s);if(t){let i=0,s={};const o=js(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>m(o)}n.b.length&&lg(()=>{Nu(e,r),yo(n.b)}),Jr(()=>{const i=Mn(()=>n.m.map(vv));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Jr(()=>{Nu(e,r),yo(n.a)})}function Nu(t,e){if(t.l.s)for(const n of t.l.s)m(n);e()}function cc(t,e,n){if(t==null)return e(void 0),n&&n(void 0),Nn;const r=Mn(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const gi=[];function qg(t,e){return{subscribe:Ws(t,e).subscribe}}function Ws(t,e=Nn){let n=null;const r=new Set;function i(a){if(dh(t,a)&&(t=a,n)){const l=!gi.length;for(const c of r)c[1](),gi.push(c,t);if(l){for(let c=0;c<gi.length;c+=2)gi[c][0](gi[c+1]);gi.length=0}}}function s(a){i(a(t))}function o(a,l=Nn){const c=[a,l];return r.add(c),r.size===1&&(n=e(i,s)||Nn),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function jg(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return qg(n,(o,a)=>{let l=!1;const c=[];let d=0,f=Nn;const u=()=>{if(d)return;f();const g=e(r?c[0]:c,o,a);s?o(g):f=typeof g=="function"?g:Nn},v=i.map((g,b)=>cc(g,E=>{c[b]=E,d&=~(1<<b),l&&u()},()=>{d|=1<<b}));return l=!0,u(),function(){yo(v),f(),l=!1}})}function Bg(t){let e;return cc(t,n=>e=n)(),e}let ao=!1,ul=Symbol();function On(t,e,n){const r=n[e]??={store:null,source:ec(void 0),unsubscribe:Nn};if(r.store!==t&&!(ul in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=Nn;else{var i=!0;r.unsubscribe=cc(t,s=>{i?r.source.v=s:y(r.source,s)}),i=!1}return t&&ul in n?Bg(t):m(r.source)}function Hi(){const t={};function e(){Bs(()=>{for(var n in t)t[n].unsubscribe();ks(t,ul,{enumerable:!1,value:!0})})}return[t,e]}function Hg(t){var e=ao;try{return ao=!1,[t(),ao]}finally{ao=e}}const Vg={get(t,e){if(!t.exclude.includes(e))return m(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=_e;try{cn(t.parent_effect),t.special[e]=Ve({get[e](){return t.props[e]}},e,ah)}finally{cn(r)}}return t.special[e](n),il(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),il(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Qe(t,e){return new Proxy({props:t,exclude:e,special:{},version:Sr(0),parent_effect:_e},Vg)}const Wg={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Xi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let i=t.props[r];Xi(i)&&(i=i());const s=Vn(i,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Xi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Vn(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===Ln||e===Yl)return!1;for(let n of t.props)if(Xi(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(Xi(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function ot(...t){return new Proxy({props:t},Wg)}function Ve(t,e,n,r){var i=!Bi||(n&Dv)!==0,s=(n&Mv)!==0,o=(n&$v)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Mn(r):r),a),d;if(s){var f=Ln in t||Yl in t;d=Vn(t,e)?.set??(f&&e in t?A=>t[e]=A:void 0)}var u,v=!1;s?[u,v]=Hg(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&xv(),d(u)));var g;if(i?g=()=>{var A=t[e];return A===void 0?c():(l=!0,A)}:g=()=>{var A=t[e];return A!==void 0&&(a=void 0),A===void 0?a:A},i&&(n&ah)===0)return g;if(d){var b=t.$$legacy;return(function(A,L){return arguments.length>0?((!i||!L||b||v)&&d(L?g():A),A):g()})}var E=!1,k=((n&Ov)!==0?js:Xl)(()=>(E=!1,g()));s&&m(k);var I=_e;return(function(A,L){if(arguments.length>0){const P=L?m(k):i&&s?xt(A):A;return y(k,P),E=!0,a!==void 0&&(a=P),A}return li&&E||(I.f&Wn)!==0?k.v:m(k)})}function Gg(t){return new Kg(t)}class Kg{#t;#e;constructor(e){var n=new Map,r=(s,o)=>{var a=ec(o,!1,!1);return n.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return m(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===Yl?!0:(m(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return y(n.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?Ag:ic)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&ze(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||ks(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{Rg(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...i)=>n.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let ef;typeof HTMLElement=="function"&&(ef=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return s=>{const o=document.createElement("slot");i!=="default"&&(o.name=i),w(s,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Yg(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=po(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Gg({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=cg(()=>{sa(()=>{this.$$r=!0;for(const i of wo(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const s=po(i,this.$$d[i],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,s)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const o=this.$$c.$on(i,s);this.$$l_u.set(s,o)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=po(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return wo(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function po(t,e,n,r){const i=n[t]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Yg(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function he(t,e,n,r,i,s){let o=class extends ef{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return wo(e).map(a=>(e[a].attribute||a).toLowerCase())}};return wo(e).forEach(a=>{ks(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=po(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=Vn(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{ks(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}function yt(t){Ye===null&&sh(),Bi&&Ye.l!==null?Qg(Ye).m.push(t):Jr(()=>{const e=Mn(t);if(typeof e=="function")return e})}function tf(t){Ye===null&&sh(),yt(()=>()=>Mn(t))}function Qg(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const Jg="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Jg);const Xg=()=>{};var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Vi(e)},Vi=function(t){return new Error("Firebase Database ("+nf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(u=64)),r.push(n[d],n[f],n[u],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new e_;const u=s<<2|a>>4;if(r.push(u),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class e_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sf=function(t){const e=rf(t);return uc.encodeByteArray(e,!0)},So=function(t){return sf(t).replace(/\./g,"")},Ao=function(t){try{return uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){return of(void 0,t)}function of(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!n_(n)||(t[n]=of(t[n],e[n]));return t}function n_(t){return t!=="__proto__"}/**
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
 */function r_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const i_=()=>r_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof Lu>"u")return;const t=Lu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},o_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ao(t[1]);return e&&JSON.parse(e)},dc=()=>{try{return Xg()||i_()||s_()||o_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},af=t=>dc()?.emulatorHosts?.[t],lf=t=>{const e=af(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cf=()=>dc()?.config,uf=t=>dc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Dr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function df(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[So(JSON.stringify(n)),So(JSON.stringify(o)),""].join(".")}const ps={};function a_(){const t={prod:[],emulator:[]};for(const e of Object.keys(ps))ps[e]?t.emulator.push(e):t.prod.push(e);return t}function l_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ou=!1;function fc(t,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||ps[t]===e||ps[t]||Ou)return;ps[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=a_().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,v){u.setAttribute("width","24"),u.setAttribute("id",v),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Ou=!0,o()},u}function d(u,v){u.setAttribute("id",v),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function f(){const u=l_(r),v=n("text"),g=document.getElementById(v)||document.createElement("span"),b=n("learnmore"),E=document.getElementById(b)||document.createElement("a"),k=n("preprendIcon"),I=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const A=u.element;a(A),d(E,b);const L=c();l(I,k),A.append(I,g,E,L),document.body.appendChild(A)}s?(g.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(I.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function c_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function u_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h_(){return nf.NODE_ADMIN===!0}function f_(){try{return typeof indexedDB=="object"}catch{return!1}}function p_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=m_,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?v_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function v_(t,e){return t.replace(g_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=As(Ao(s[0])||""),n=As(Ao(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},__=function(t){const e=ff(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},b_=function(t){const e=ff(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Du(s)&&Du(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Du(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const u=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function y_(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}function oa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x_(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(t){return t===zr?void 0:t}function x_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const A_={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},R_=Oe.INFO,P_={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},N_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=P_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=R_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const L_=(t,e)=>e.some(n=>t instanceof n);let Mu,$u;function O_(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D_(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,hl=new WeakMap,mf=new WeakMap,Oa=new WeakMap,vc=new WeakMap;function M_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pf.set(n,t)}).catch(()=>{}),vc.set(e,t),e}function $_(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U_(t){fl=t(fl)}function F_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Da(this),e,...n);return mf.set(r,e.sort?e.sort():[e]),yr(r)}:D_().includes(t)?function(...e){return t.apply(Da(this),e),yr(pf.get(this))}:function(...e){return yr(t.apply(Da(this),e))}}function z_(t){return typeof t=="function"?F_(t):(t instanceof IDBTransaction&&$_(t),L_(t,O_())?new Proxy(t,fl):t)}function yr(t){if(t instanceof IDBRequest)return M_(t);if(Oa.has(t))return Oa.get(t);const e=z_(t);return e!==t&&(Oa.set(t,e),vc.set(e,t)),e}const Da=t=>vc.get(t);function q_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const j_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],Ma=new Map;function Uu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ma.set(e,s),s}U_(t=>({...t,get:(e,n,r)=>Uu(e,n)||t.get(e,n,r),has:(e,n)=>!!Uu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V_(t){return t.getComponent()?.type==="VERSION"}const pl="@firebase/app",Fu="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new mc("@firebase/app"),W_="@firebase/app-compat",G_="@firebase/analytics-compat",K_="@firebase/analytics",Y_="@firebase/app-check-compat",Q_="@firebase/app-check",J_="@firebase/auth",X_="@firebase/auth-compat",Z_="@firebase/database",eb="@firebase/data-connect",tb="@firebase/database-compat",nb="@firebase/functions",rb="@firebase/functions-compat",ib="@firebase/installations",sb="@firebase/installations-compat",ob="@firebase/messaging",ab="@firebase/messaging-compat",lb="@firebase/performance",cb="@firebase/performance-compat",ub="@firebase/remote-config",db="@firebase/remote-config-compat",hb="@firebase/storage",fb="@firebase/storage-compat",pb="@firebase/firestore",mb="@firebase/ai",vb="@firebase/firestore-compat",gb="firebase",_b="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="[DEFAULT]",bb={[pl]:"fire-core",[W_]:"fire-core-compat",[K_]:"fire-analytics",[G_]:"fire-analytics-compat",[Q_]:"fire-app-check",[Y_]:"fire-app-check-compat",[J_]:"fire-auth",[X_]:"fire-auth-compat",[Z_]:"fire-rtdb",[eb]:"fire-data-connect",[tb]:"fire-rtdb-compat",[nb]:"fire-fn",[rb]:"fire-fn-compat",[ib]:"fire-iid",[sb]:"fire-iid-compat",[ob]:"fire-fcm",[ab]:"fire-fcm-compat",[lb]:"fire-perf",[cb]:"fire-perf-compat",[ub]:"fire-rc",[db]:"fire-rc-compat",[hb]:"fire-gcs",[fb]:"fire-gcs-compat",[pb]:"fire-fst",[vb]:"fire-fst-compat",[mb]:"fire-vertex","fire-js":"fire-js",[gb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,wb=new Map,vl=new Map;function zu(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(vl.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Po.values())zu(n,t);for(const n of wb.values())zu(n,t);return!0}function la(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new Ks("app","Firebase",yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=_b;function vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ml,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=cf()),!n)throw Er.create("no-options");const s=Po.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new S_(i);for(const l of vl.values())o.addComponent(l);const a=new Eb(n,r,o);return Po.set(i,a),a}function gc(t=ml){const e=Po.get(t);if(!e&&t===ml&&cf())return vf();if(!e)throw Er.create("no-app",{appName:t});return e}function Dn(t,e,n){let r=bb[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(o.join(" "));return}Zr(new Ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Cb="firebase-heartbeat-database",Ib=1,Rs="firebase-heartbeat-store";let $a=null;function gf(){return $a||($a=q_(Cb,Ib,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),$a}async function kb(t){try{const n=(await gf()).transaction(Rs),r=await n.objectStore(Rs).get(_f(t));return await n.done,r}catch(e){if(e instanceof sr)Jn.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e?.message});Jn.warn(n.message)}}}async function qu(t,e){try{const r=(await gf()).transaction(Rs,"readwrite");await r.objectStore(Rs).put(e,_f(t)),await r.done}catch(n){if(n instanceof sr)Jn.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n?.message});Jn.warn(r.message)}}}function _f(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tb=1024,xb=30;class Sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ju();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>xb){const i=Pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Jn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ju(),{heartbeatsToSend:n,unsentEntries:r}=Ab(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Jn.warn(e),""}}}function ju(){return new Date().toISOString().substring(0,10)}function Ab(t,e=Tb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bu(t){return So(JSON.stringify({version:2,heartbeats:t})).length}function Pb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){Zr(new Ar("platform-logger",e=>new H_(e),"PRIVATE")),Zr(new Ar("heartbeat",e=>new Sb(e),"PRIVATE")),Dn(pl,Fu,t),Dn(pl,Fu,"esm2020"),Dn("fire-js","")}Nb("");var Lb="firebase",Ob="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(Lb,Ob,"app");function bf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Db=bf,wf=new Ks("auth","Firebase",bf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new mc("@firebase/auth");function Mb(t,...e){No.logLevel<=Oe.WARN&&No.warn(`Auth (${ui}): ${t}`,...e)}function mo(t,...e){No.logLevel<=Oe.ERROR&&No.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,...e){throw _c(t,...e)}function Yt(t,...e){return _c(t,...e)}function yf(t,e,n){const r={...Db(),[e]:n};return new Ks("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return yf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wf.create(t,...e)}function K(t,e,...n){if(!t)throw _c(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function Zn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof self<"u"&&self.location?.href||""}function Ef(){return Hu()==="http:"||Hu()==="https:"}function Hu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ef()||u_()||"connection"in navigator)?navigator.onLine:!0}function Ub(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=pc()||hf()}get(){return $b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qb=new Ys(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dn(t,e,n,r,i={}){return If(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ci({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return c_()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(c.credentials="include"),Cf.fetch()(await kf(t,t.config.apiHost,n,a),c)})}async function If(t,e,n){t._canInitEmulator=!1;const r={...Fb,...e};try{const i=new Bb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw as(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw as(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw as(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yf(t,d,c);Xn(t,d)}}catch(i){if(i instanceof sr)throw i;Xn(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,r,i={}){const s=await dn(t,e,n,r,i);return"mfaPendingCredential"in s&&Xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function kf(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?bc(t.config,i):`${t.config.apiScheme}://${i}`;return zb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function jb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),qb.get())})}}function as(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return t!==void 0&&t.getResponse!==void 0}function Wu(t){return t!==void 0&&t.enterprise!==void 0}class Tf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t){return(await dn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function xf(t,e){return dn(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function Lo(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wb(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=wc(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:ms(Ua(i.auth_time)),issuedAtTime:ms(Ua(i.iat)),expirationTime:ms(Ua(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ua(t){return Number(t)*1e3}function wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ao(n);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Gu(t){const e=wc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&Gb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t){const e=t.auth,n=await t.getIdToken(),r=await Mi(t,Lo(e,{idToken:n}));K(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?Sf(i.providerUserInfo):[],o=Qb(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Yb(t){const e=Ze(t);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){const n=await If(t,{},async()=>{const r=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await kf(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(l.credentials="include"),Cf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xb(t,e){return dn(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Gu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ki;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wb(this,e)}reload(){return Yb(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Mi(this,Vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:u,isAnonymous:v,providerData:g,stsTokenManager:b}=n;K(f&&b,e,"internal-error");const E=ki.fromJSON(this.name,b);K(typeof f=="string",e,"internal-error"),ur(r,e.name),ur(i,e.name),K(typeof u=="boolean",e,"internal-error"),K(typeof v=="boolean",e,"internal-error"),ur(s,e.name),ur(o,e.name),ur(a,e.name),ur(l,e.name),ur(c,e.name),ur(d,e.name);const k=new bn({uid:f,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return g&&Array.isArray(g)&&(k.providerData=g.map(I=>({...I}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new ki;a.updateFromIdToken(r);const l=new bn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map;function Bn(t){Zn(t instanceof Function,"Expected a class definition");let e=Ku.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ku.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Af.type="NONE";const Yu=Af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Lo(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(Bn(Yu),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn(Yu);const o=vo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const u=await Lo(e,{idToken:d}).catch(()=>{});if(!u)break;f=await bn._fromGetAccountInfoResponse(e,u,d)}else f=bn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Df(e))return"Blackberry";if(Mf(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||Nf(e))&&!e.includes("edge/"))return"Chrome";if(Of(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Rf(t=Mt()){return/firefox\//i.test(t)}function Pf(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nf(t=Mt()){return/crios\//i.test(t)}function Lf(t=Mt()){return/iemobile/i.test(t)}function Of(t=Mt()){return/android/i.test(t)}function Df(t=Mt()){return/blackberry/i.test(t)}function Mf(t=Mt()){return/webos/i.test(t)}function yc(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zb(t=Mt()){return yc(t)&&!!window.navigator?.standalone}function e1(){return d_()&&document.documentMode===10}function $f(t=Mt()){return yc(t)||Of(t)||Mf(t)||Df(t)||/windows phone/i.test(t)||Lf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e=[]){let n;switch(t){case"Browser":n=Qu(Mt());break;case"Worker":n=`${Qu(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class t1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function n1(t,e={}){return dn(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
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
 */const r1=6;class i1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??r1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ju(this),this.idTokenSubscription=new Ju(this),this.beforeStateQueue=new t1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lo(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(sn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ub()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Cr(this));const n=e?Ze(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n1(this),n=new i1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Mb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Mr(t){return Ze(t)}class Ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=y_(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o1(t){Qs=t}function Ec(t){return Qs.loadJS(t)}function a1(){return Qs.recaptchaV2Script}function l1(){return Qs.recaptchaEnterpriseScript}function c1(){return Qs.gapiScript}function Ff(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=500,d1=6e4,lo=1e12;class h1{constructor(e){this.auth=e,this.counter=lo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new m1(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||lo;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||lo;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||lo;return this._widgets.get(n)?.execute(),""}}class f1{constructor(){this.enterprise=new p1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class p1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class m1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;K(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=v1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},d1)},u1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function v1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const g1="recaptcha-enterprise",vs="NO_RECAPTCHA";class zf{constructor(e){this.type=g1,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Tf(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Wu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(vs)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new f1().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Wu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=l1();l.length!==0&&(l+=a),Ec(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fa(t,e,n,r=!1,i=!1){const s=new zf(t);let o;if(i)o=vs;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function za(t,e,n,r,i){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Fa(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Fa(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const s=await Fa(t,e,n,!1,!0);return r(t,s)}}async function _1(t){const e=Mr(t),n=await xf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Tf(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new zf(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e){const n=la(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;Xn(i,"already-initialized")}return n.initialize({options:e})}function w1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Bn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function y1(t,e,n){const r=Mr(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qf(e),{host:o,port:a}=E1(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Xr(c,r.config.emulator)&&Xr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Dr(o)?(hc(`${s}//${o}${l}`),fc("Auth",!0)):C1()}function qf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function E1(t){const e=qf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xu(o)}}}function Xu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class ei extends Cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(t,e){return dn(t,"POST","/v1/accounts:sendVerificationCode",Fn(t,e))}async function k1(t,e){return ca(t,"POST","/v1/accounts:signInWithPhoneNumber",Fn(t,e))}async function T1(t,e){const n=await ca(t,"POST","/v1/accounts:signInWithPhoneNumber",Fn(t,e));if(n.temporaryProof)throw as(t,"account-exists-with-different-credential",n);return n}const x1={USER_NOT_FOUND:"user-not-found"};async function S1(t,e){const n={...e,operation:"REAUTH"};return ca(t,"POST","/v1/accounts:signInWithPhoneNumber",Fn(t,n),x1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Cc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new gs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new gs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return k1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return T1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return S1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new gs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Js{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Js{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Js{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=ed(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ed(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends sr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Do(e,n,r,i)}}function Bf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(t,s,e,r):s})}async function A1(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Cr(r));const i="reauthenticate";try{const s=await Mi(t,Bf(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=wc(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Xn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e,n=!1){if(sn(t.app))return Promise.reject(Cr(t));const r="signIn",i=await Bf(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function P1(t,e){return Hf(Mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){return dn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ze(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mi(r,N1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function O1(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function D1(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function Vf(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function M1(t){return Ze(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){return dn(t,"POST","/v2/accounts/mfaEnrollment:start",Fn(t,e))}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=1e3,U1=10;class Gf extends Wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$f(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);e1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,U1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gf.type="LOCAL";const F1=Gf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends Wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kf.type="SESSION";const Yf=Kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await z1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ic("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const u=f;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function j1(t){it().location.href=t}/**
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
 */function kc(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function B1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H1(){return navigator?.serviceWorker?.controller||null}function V1(){return kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="firebaseLocalStorageDb",W1=1,$o="firebaseLocalStorage",Jf="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function G1(){const t=indexedDB.deleteDatabase(Qf);return new Xs(t).toPromise()}function bl(){const t=indexedDB.open(Qf,W1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Jf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await G1(),e(await bl()))})})}async function nd(t,e,n){const r=da(t,!0).put({[Jf]:e,value:n});return new Xs(r).toPromise()}async function K1(t,e){const n=da(t,!1).get(e),r=await new Xs(n).toPromise();return r===void 0?null:r.value}function rd(t,e){const n=da(t,!0).delete(e);return new Xs(n).toPromise()}const Y1=800,Q1=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new q1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await nd(e,Mo,"1"),await rd(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>K1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=da(i,!1).getAll();return new Xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const J1=Xf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e){return dn(t,"POST","/v2/accounts/mfaSignIn:start",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=Ff("rcb"),X1=new Ys(3e4,6e4);class Z1{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!it().grecaptcha?.render}load(e,n=""){return K(ew(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Vu(it().grecaptcha)?Promise.resolve(it().grecaptcha):new Promise((r,i)=>{const s=it().setTimeout(()=>{i(Yt(e,"network-request-failed"))},X1.get());it()[qa]=()=>{it().clearTimeout(s),delete it()[qa];const a=it().grecaptcha;if(!a||!Vu(a)){i(Yt(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${a1()}?${ci({onload:qa,render:"explicit",hl:n})}`;Ec(o).catch(()=>{clearTimeout(s),i(Yt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!it().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ew(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class tw{async load(e){return new h1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="recaptcha",nw={theme:"light",type:"image"};class rw{constructor(e,n,r={...nw}){this.parameters=r,this.type=_s,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Mr(e),this.isInvisible=this.parameters.size==="invisible",K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;K(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tw:new Z1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){K(!this.parameters.sitekey,this.auth,"argument-error"),K(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=it()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){K(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){K(Ef()&&!kc(),this.auth,"internal-error"),await iw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Hb(this.auth);K(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return K(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function iw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=gs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ow(t,e,n){if(sn(t.app))return Promise.reject(Cr(t));const r=Mr(t),i=await aw(r,e,Ze(n));return new sw(i,s=>P1(r,s))}async function aw(t,e,n){if(!t._getRecaptchaConfig())try{await _1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){K(i.type==="enroll",t,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await za(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===vs){K(n?.type===_s,c,"argument-error");const f=await ja(c,d,n);return td(c,f)}return td(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{K(i.type==="signin",t,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;K(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await za(t,o,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===vs){K(n?.type===_s,d,"argument-error");const u=await ja(d,f,n);return id(d,u)}return id(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await za(t,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===vs){K(n?.type===_s,l,"argument-error");const d=await ja(l,c,n);return Zu(l,d)}return Zu(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function ja(t,e,n){K(n.type===_s,t,"argument-error");const r=await n.verify();K(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function lw(t,e){return e?Bn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cw(t){return Hf(t.auth,new Tc(t),t.bypassAuthState)}function uw(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),R1(n,new Tc(t),t.bypassAuthState)}async function dw(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),A1(n,new Tc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cw;case"linkViaPopup":case"linkViaRedirect":return dw;case"reauthViaPopup":case"reauthViaRedirect":return uw;default:Xn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new Ys(2e3,1e4);class yi extends Zf{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hw.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="pendingRedirect",go=new Map;class pw extends Zf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mw(t,e){const n=_w(e),r=gw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vw(t,e){go.set(t._key(),e)}function gw(t){return Bn(t._redirectPersistence)}function _w(t){return vo(fw,t.config.apiKey,t.name)}async function bw(t,e,n=!1){if(sn(t.app))return Promise.reject(Cr(t));const r=Mr(t),i=lw(r,e),o=await new pw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=600*1e3;class yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ep(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Yt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ww&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(e))}saveEventToCache(e){this.cachedEventUids.add(sd(e)),this.lastProcessedEventTime=Date.now()}}function sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kw=/^https?/;async function Tw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cw(t);for(const n of e)try{if(xw(n))return}catch{}Xn(t,"unauthorized-domain")}function xw(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kw.test(n))return!1;if(Iw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Sw=new Ys(3e4,6e4);function od(){const t=it().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Aw(t){return new Promise((e,n)=>{function r(){od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{od(),n(Yt(t,"network-request-failed"))},timeout:Sw.get()})}if(it().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(it().gapi?.load)r();else{const i=Ff("iframefcb");return it()[i]=()=>{gapi.load?r():n(Yt(t,"network-request-failed"))},Ec(`${c1()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw _o=null,e})}let _o=null;function Rw(t){return _o=_o||Aw(t),_o}/**
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
 */const Pw=new Ys(5e3,15e3),Nw="__/auth/iframe",Lw="emulator/auth/iframe",Ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mw(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bc(e,Lw):`https://${t.config.authDomain}/${Nw}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=Dw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ci(r).slice(1)}`}async function $w(t){const e=await Rw(t),n=it().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Mw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ow,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=it().setTimeout(()=>{s(o)},Pw.get());function l(){it().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Uw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fw=500,zw=600,qw="_blank",jw="http://localhost";class ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(t,e,n,r=Fw,i=zw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Uw,width:r.toString(),height:i.toString(),top:s,left:o},c=Mt().toLowerCase();n&&(a=Nf(c)?qw:n),Rf(c)&&(e=e||jw,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[v,g])=>`${u}${v}=${g},`,"");if(Zb(c)&&a!=="_self")return Hw(e||"",a),new ad(null);const f=window.open(e||"",a,d);K(f,t,"popup-blocked");try{f.focus()}catch{}return new ad(f)}function Hw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Vw="__/auth/handler",Ww="emulator/auth/handler",Gw=encodeURIComponent("fac");async function ld(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Js){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${Gw}=${encodeURIComponent(l)}`:"";return`${Kw(t)}?${ci(a).slice(1)}${c}`}function Kw({config:t}){return t.emulator?bc(t,Ww):`https://${t.authDomain}/${Vw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class Yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yf,this._completeRedirectFn=bw,this._overrideRedirectResult=vw}async _openPopup(e,n,r,i){Zn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await ld(e,n,r,gl(),i);return Bw(e,s,Ic())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ld(e,n,r,gl(),i);return j1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $w(e),r=new yw(e);return n.register("authEvent",i=>(K(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ba,{type:Ba},i=>{const s=i?.[0]?.[Ba];s!==void 0&&n(!!s),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $f()||Pf()||yc()}}const Qw=Yw;var cd="@firebase/auth",ud="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zw(t){Zr(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uf(t)},c=new s1(r,i,s,l);return w1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Ar("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new Jw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(cd,ud,Xw(t)),Dn(cd,ud,"esm2020")}/**
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
 */const e0=300,t0=uf("authIdTokenMaxAge")||e0;let dd=null;const n0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t0)return;const i=n?.token;dd!==i&&(dd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function r0(t=gc()){const e=la(t,"auth");if(e.isInitialized())return e.getImmediate();const n=b1(t,{popupRedirectResolver:Qw,persistence:[J1,F1,Yf]}),r=uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=n0(s.toString());D1(n,o,()=>o(n.currentUser)),O1(n,a=>o(a))}}const i=af("auth");return i&&y1(n,`http://${i}`),n}function i0(){return document.getElementsByTagName("head")?.[0]??document}o1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",i0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zw("Browser");var hd={};const fd="@firebase/database",pd="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp="";function s0(t){tp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o0(e)}}catch{}return new a0},Hr=np("localStorage"),l0=np("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new mc("@firebase/database"),c0=(function(){let t=1;return function(){return t++}})(),rp=function(t){const e=I_(t),n=new w_;n.update(e);const r=n.digest();return uc.encodeByteArray(r)},Zs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zs.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let bs=null,md=!0;const u0=function(t,e){O(!0,"Can't turn on custom loggers persistently."),Si.logLevel=Oe.VERBOSE,bs=Si.log.bind(Si)},_t=function(...t){if(md===!0&&(md=!1,bs===null&&l0.get("logging_enabled")===!0&&u0()),bs){const e=Zs.apply(null,t);bs(e)}},eo=function(t){return function(...e){_t(t,...e)}},wl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zs(...t);Si.error(e)},er=function(...t){const e=`FIREBASE FATAL ERROR: ${Zs(...t)}`;throw Si.error(e),new Error(e)},Dt=function(...t){const e="FIREBASE WARNING: "+Zs(...t);Si.warn(e)},d0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},h0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",tr="[MAX_NAME]",di=function(t,e){if(t===e)return 0;if(t===ti||e===tr)return-1;if(e===ti||t===tr)return 1;{const n=vd(t),r=vd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},f0=function(t,e){return t===e?0:t<e?-1:1},ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},Sc=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=Sc(t[e[r]]);return n+="}",n},ip=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sp=function(t){O(!xc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),f=f+u}return f.toLowerCase()},p0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},m0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function v0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const g0=new RegExp("^-?(0*)\\d{1,10}$"),_0=-2147483648,b0=2147483647,vd=function(t){if(g0.test(t)){const e=Number(t);if(e>=_0&&e<=b0)return e}return null},Wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},w0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class y0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dt(e)}}class bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="5",op="v",ap="s",lp="r",cp="f",up=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dp="ls",hp="p",yl="ac",fp="websocket",pp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vp(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===fp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C0(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return t_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={},Va={};function Rc(t){const e=t.toString();return Ha[e]||(Ha[e]=new I0),Ha[e]}function k0(t,e){const n=t.toString();return Va[n]||(Va[n]=e()),Va[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="start",x0="close",S0="pLPCommand",A0="pRTLPCB",gp="id",_p="pw",bp="ser",R0="cb",P0="seg",N0="ts",L0="d",O0="dframe",wp=1870,yp=30,D0=wp-yp,M0=25e3,$0=3e4;class Ei{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=Rc(n),this.urlFn=l=>(this.appCheckToken&&(l[yl]=this.appCheckToken),vp(n,pp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new T0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($0)),h0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pc((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gd)this.id=a,this.password=l;else if(o===x0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gd]="t",r[bp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[R0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[op]=Ac,this.transportSessionId&&(r[ap]=this.transportSessionId),this.lastSessionId&&(r[dp]=this.lastSessionId),this.applicationId&&(r[hp]=this.applicationId),this.appCheckToken&&(r[yl]=this.appCheckToken),typeof location<"u"&&location.hostname&&up.test(location.hostname)&&(r[lp]=cp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!p0()&&!m0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sf(n),i=ip(r,D0);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[O0]="t",r[gp]=e,r[_p]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=c0(),window[S0+this.uniqueCallbackIdentifier]=e,window[A0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gp]=this.myID,e[_p]=this.myPW,e[bp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yp+r.length<=wp;){const o=this.pendingSegs.shift();r=r+"&"+P0+i+"="+o.seg+"&"+N0+i+"="+o.ts+"&"+L0+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(M0)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=16384,F0=45e3;let Uo=null;typeof MozWebSocket<"u"?Uo=MozWebSocket:typeof WebSocket<"u"&&(Uo=WebSocket);class gn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=Rc(n),this.connURL=gn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[op]=Ac,typeof location<"u"&&location.hostname&&up.test(location.hostname)&&(o[lp]=cp),n&&(o[ap]=n),r&&(o[dp]=r),i&&(o[yl]=i),s&&(o[hp]=s),vp(e,fp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let r;h_(),this.mySock=new Uo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uo!==null&&!gn.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||Hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=As(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ip(n,U0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(F0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static get ALL_TRANSPORTS(){return[Ei,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=gn&&gn.isAvailable();let r=n&&!gn.previouslyFailed();if(e.webSocketOnly&&(n||Dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gn];else{const i=this.transports_=[];for(const s of Ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=6e4,q0=5e3,j0=10*1024,B0=100*1024,Wa="t",_d="d",H0="s",bd="r",V0="e",wd="o",yd="a",Ed="n",Cd="p",W0="h";class G0{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>B0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>j0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wa in e){const n=e[Wa];n===yd?this.upgradeIfSecondaryHealthy_():n===bd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ed,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(Wa,e);if(_d in e){const r=e[_d];if(n===W0){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ed){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H0?this.onConnectionShutdown_(r):n===bd?this.onReset_(r):n===V0?wl("Server Error: "+r):n===wd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ac!==r&&Dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(z0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(q0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Cp{static getInstance(){return new Fo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=32,kd=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new Pe("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rr(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Nc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function K0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ip(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Pe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Pe(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Ot(t,e){const n=we(t),r=we(e);if(n===null)return e;if(n===r)return Ot(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Y0(t,e){const n=Ns(t,0),r=Ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=di(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Lc(t,e){if(Rr(t)!==Rr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function on(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rr(t)>Rr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Q0{constructor(e,n){this.errorPrefix_=n,this.parts_=Ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=aa(this.parts_[r]);kp(this)}}function J0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=aa(e),kp(t)}function X0(t){const e=t.parts_.pop();t.byteLength_-=aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function kp(t){if(t.byteLength_>kd)throw new Error(t.errorPrefix_+"has a key path longer than "+kd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Id)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Id+") or object contains a cycle "+qr(t))}function qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Cp{static getInstance(){return new Oc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,Z0=300*1e3,Td=30*1e3,ey=1.3,ty=3e4,ny="server_kill",xd=3;class Yn extends Ep{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yn.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=Z0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ct(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Gs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const r=Di(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||b_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Td)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=__(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wl("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ty&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ey)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=u&&u.token,a=new G0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Dt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(ny)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Dt(f),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dl(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Sc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Pe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xd&&(this.reconnectDelay_=Td,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tp.replace(/\./g,"-")]=1,pc()?e["framework.cordova"]=1:hf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fo.getInstance().currentlyOnline();return dl(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ha{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ee(ti,e),i=new Ee(ti,n);return this.compare(r,i)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;class Tp extends ha{static get __EMPTY_NODE(){return co}static set __EMPTY_NODE(e){co=e}compare(e,n){return di(e.name,n.name)}isDefinedOn(e){throw Vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(tr,co)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,co)}toString(){return".key"}}const Ir=new Tp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??qt.EMPTY_NODE,this.right=s??qt.EMPTY_NODE}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class ry{copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new uo(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new ry;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){return di(t.name,e.name)}function Dc(t,e){return di(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;function sy(t){El=t}const xp=function(t){return typeof t=="number"?"number:"+sp(t):"string:"+t},Sp=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else O(t===El||t.isEmpty(),"priority of unexpected type.");O(t===El||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;class pt{static set __childrenNodeConstructor(e){Sd=e}static get __childrenNodeConstructor(){return Sd}constructor(e,n=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:we(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=we(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sp(this.value_):e+=this.value_,this.lazyHash_=rp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pt.VALUE_TYPE_ORDER.indexOf(n),s=pt.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap,Rp;function oy(t){Ap=t}function ay(t){Rp=t}class ly extends ha{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?di(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(tr,new pt("[PRIORITY-POST]",Rp))}makePost(e,n){const r=Ap(e);return new Ee(n,new pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=Math.log(2);class uy{constructor(e){const n=s=>parseInt(Math.log(s)/cy,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zo=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let f,u;if(d===0)return null;if(d===1)return f=t[l],u=n?n(f):f,new mt(u,f.node,mt.BLACK,null,null);{const v=parseInt(d/2,10)+l,g=i(l,v),b=i(v+1,c);return f=t[v],u=n?n(f):f,new mt(u,f.node,mt.BLACK,g,b)}},s=function(l){let c=null,d=null,f=t.length;const u=function(g,b){const E=f-g,k=f;f-=g;const I=i(E+1,k),A=t[E],L=n?n(A):A;v(new mt(L,A.node,b,null,I))},v=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));b?u(E,mt.BLACK):(u(E,mt.BLACK),u(E,mt.RED))}return d},o=new uy(t.length),a=s(o);return new qt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;const _i={};class Hn{static get Default(){return O(_i&&We,"ChildrenNode.ts has not been loaded"),Ga=Ga||new Hn({".priority":_i},{".priority":We}),Ga}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=zo(r,e.getCompare()):a=_i;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Hn(d,c)}addToIndexes(e,n){const r=Ro(this.indexes_,(i,s)=>{const o=Di(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zo(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new Hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ro(this.indexes_,i=>{if(i===_i)return i;{const s=n.get(e.name);return s?i.remove(new Ee(e.name,s)):i}});return new Hn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class ae{static get EMPTY_NODE(){return rs||(rs=new ae(new qt(Dc),null,Hn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sp(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=we(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?rs:this.priorityNode_;return new ae(i,o,s)}}updateChild(e,n){const r=we(e);if(r===null)return n;{O(we(e)!==".priority"||Rr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xp(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===to?-1:0}withIndex(e){if(e===Ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ir?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dy extends ae{constructor(){super(new qt(Dc),ae.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const to=new dy;Object.defineProperties(Ee,{MIN:{value:new Ee(ti,ae.EMPTY_NODE)},MAX:{value:new Ee(tr,to)}});Tp.__EMPTY_NODE=ae.EMPTY_NODE;pt.__childrenNodeConstructor=ae;sy(to);ay(to);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=!0;function lt(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pt(n,lt(e))}if(!(t instanceof Array)&&hy){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=lt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const s=zo(n,iy,o=>o.name,Dc);if(r){const o=zo(n,We.getCompare());return new ae(s,lt(e),new Hn({".priority":o},{".priority":We}))}else return new ae(s,lt(e),Hn.Default)}else{let n=ae.EMPTY_NODE;return wt(t,(r,i)=>{if(Un(t,r)&&r.substring(0,1)!=="."){const s=lt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(lt(e))}}oy(lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends ha{constructor(e){super(),this.indexPath_=e,O(!ye(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?di(e.name,n.name):s}makePost(e,n){const r=lt(e),i=ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(n,i)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,to);return new Ee(tr,e)}toString(){return Ns(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends ha{compare(e,n){const r=e.node.compareTo(n.node);return r===0?di(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const r=lt(e);return new Ee(n,r)}toString(){return".value"}}const Pp=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){return{type:"value",snapshotNode:t}}function Ui(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function py(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ls(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ui(n,r)):o.trackChildChange(Os(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ls(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Os(i,s,o))}else r.trackChildChange(Ui(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ae.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.indexedFilter_=new $c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Ee(n,r))||(r=ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ae.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ae.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,a)=>{s.matches(new Ee(o,a))||(i=i.updateImmediateChild(o,ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Ee(n,r))||(r=ae.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ae.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ae.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(u,v)=>f(v,u)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new Ee(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const v=u==null?1:o(u,l);if(d&&!r.isEmpty()&&v>=0)return s?.trackChildChange(Os(n,r,f)),a.updateImmediateChild(n,r);{s?.trackChildChange(Ls(n,f));const b=a.updateImmediateChild(n,ae.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(Ui(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ls(c.name,c.node)),s.trackChildChange(Ui(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Uc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vy(t){return t.loadsAllData()?new $c(t.getIndex()):t.hasLimit()?new my(t):new Ds(t)}function gy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function _y(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Ad(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function by(t,e,n){let r;return t.index_===Ir||n?r=Ad(t,e,n):r=Ad(t,e,tr),r.startAfterSet_=!0,r}function wy(t,e){const n=t.copy();return n.index_=e,n}function Rd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===Pp?n="$value":t.index_===Ir?n="$key":(O(t.index_ instanceof Mc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Ep{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=eo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Rd(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Di(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=qo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Rd(e._queryParams),r=e._path.toString(),i=new Gs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ci(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=As(a.responseText)}catch{Dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(){return{value:null,children:new Map}}function Lp(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=we(e);t.children.has(r)||t.children.set(r,jo());const i=t.children.get(r);e=Ue(e),Lp(i,e,n)}}function Cl(t,e,n){t.value!==null?n(e,t.value):Ey(t,(r,i)=>{const s=new Pe(e.toString()+"/"+r);Cl(i,s,n)})}function Ey(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=10*1e3,Iy=30*1e3,ky=300*1e3;class Ty{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cy(e);const r=Nd+(Iy-Nd)*Math.random();ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&Un(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*ky))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wn||(wn={}));function Fc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wn.ACK_USER_WRITE,this.source=Fc()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Bo(Ae(),n,this.revert)}}else return O(we(this.path)===e,"operationForChild called for unrelated child."),new Bo(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=wn.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new Ms(this.source,Ae()):new Ms(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wn.OVERWRITE}operationForChild(e){return ye(this.path)?new ni(this.source,Ae(),this.snap.getImmediateChild(e)):new ni(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new ni(this.source,Ae(),n.value):new Fi(this.source,Ae(),n)}else return O(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fi(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=we(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sy(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(py(o.childName,o.snapshotNode))}),is(t,i,"child_removed",e,r,n),is(t,i,"child_added",e,r,n),is(t,i,"child_moved",s,r,n),is(t,i,"child_changed",e,r,n),is(t,i,"value",e,r,n),i}function is(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Ry(t,a,l)),o.forEach(a=>{const l=Ay(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ay(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ry(t,e,n){if(e.childName==null||n.childName==null)throw Vi("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),i=new Ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e){return{eventCache:t,serverCache:e}}function ys(t,e,n,r){return fa(new Pr(e,n,r),t.serverCache)}function Op(t,e,n,r){return fa(t.eventCache,new Pr(e,n,r))}function Ho(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;const Py=()=>(Ka||(Ka=new qt(f0)),Ka);class $e{static fromObject(e){let n=new $e(null);return wt(e,(r,i)=>{n=n.set(new Pe(r),i)}),n}constructor(e,n=Py()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(ye(e))return null;{const r=we(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ue(e),n);return s!=null?{path:Ke(new Pe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=we(e),r=this.children.get(n);return r!==null?r.subtree(Ue(e)):new $e(null)}}set(e,n){if(ye(e))return new $e(n,this.children);{const r=we(e),s=(this.children.get(r)||new $e(null)).set(Ue(e),n),o=this.children.insert(r,s);return new $e(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=we(e),r=this.children.get(n);if(r){const i=r.remove(Ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new $e(null):new $e(this.value,s)}else return this}}get(e){if(ye(e))return this.value;{const n=we(e),r=this.children.get(n);return r?r.get(Ue(e)):null}}setTree(e,n){if(ye(e))return n;{const r=we(e),s=(this.children.get(r)||new $e(null)).setTree(Ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $e(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(e))return null;{const s=we(e),o=this.children.get(s);return o?o.findOnPath_(Ue(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const i=we(e),s=this.children.get(i);return s?s.foreachOnPath_(Ue(e),Ke(n,i),r):new $e(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new $e(null))}}function Es(t,e,n){if(ye(e))return new yn(new $e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ot(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new $e(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function Il(t,e,n){let r=t;return wt(n,(i,s)=>{r=Es(r,Ke(e,i),s)}),r}function Ld(t,e){if(ye(e))return yn.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new yn(n)}}function kl(t,e){return hi(t,e)!=null}function hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ot(n.path,e)):null}function Od(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new Ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ee(r,i.value))}),e}function kr(t,e){if(ye(e))return t;{const n=hi(t,e);return n!=null?new yn(new $e(n)):new yn(t.writeTree_.subtree(e))}}function Tl(t){return t.writeTree_.isEmpty()}function zi(t,e){return Dp(Ae(),t.writeTree_,e)}function Dp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Dp(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e){return Fp(e,t)}function Ny(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=r}function Ly(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Il(t.visibleWrites,e,n),t.lastWriteId=r}function Oy(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Dy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&My(a,r.path)?i=!1:on(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $y(t),!0;if(r.snap)t.visibleWrites=Ld(t.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{t.visibleWrites=Ld(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function My(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(Ke(t.path,n),e))return!0;return!1}function $y(t){t.visibleWrites=Mp(t.allWrites,Uy,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Uy(t){return t.visible}function Mp(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)on(n,o)?(a=Ot(n,o),r=Es(r,a,s.snap)):on(o,n)&&(a=Ot(o,n),r=Es(r,Ae(),s.snap.getChild(a)));else if(s.children){if(on(n,o))a=Ot(n,o),r=Il(r,a,s.children);else if(on(o,n))if(a=Ot(o,n),ye(a))r=Il(r,Ae(),s.children);else{const l=Di(s.children,we(a));if(l){const c=l.getChild(Ue(a));r=Es(r,Ae(),c)}}}else throw Vi("WriteRecord should have .snap or .children")}}return r}function $p(t,e,n,r,i){if(!r&&!i){const s=hi(t.visibleWrites,e);if(s!=null)return s;{const o=kr(t.visibleWrites,e);if(Tl(o))return n;if(n==null&&!kl(o,Ae()))return null;{const a=n||ae.EMPTY_NODE;return zi(o,a)}}}else{const s=kr(t.visibleWrites,e);if(!i&&Tl(s))return n;if(!i&&n==null&&!kl(s,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(on(c.path,e)||on(e,c.path))},a=Mp(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return zi(a,l)}}}function Fy(t,e,n){let r=ae.EMPTY_NODE;const i=hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kr(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=zi(kr(s,new Pe(o)),a);r=r.updateImmediateChild(o,l)}),Od(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kr(t.visibleWrites,e);return Od(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function zy(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(kl(t.visibleWrites,s))return null;{const o=kr(t.visibleWrites,s);return Tl(o)?i.getChild(n):zi(o,i.getChild(n))}}function qy(t,e,n,r){const i=Ke(e,n),s=hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,i);return zi(o,r.getNode().getImmediateChild(n))}else return null}function jy(t,e){return hi(t.visibleWrites,e)}function By(t,e,n,r,i,s,o){let a;const l=kr(t.visibleWrites,e),c=hi(l,Ae());if(c!=null)a=c;else if(n!=null)a=zi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=u.getNext();for(;v&&d.length<i;)f(v,r)!==0&&d.push(v),v=u.getNext();return d}else return[]}function Hy(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Vo(t,e,n,r){return $p(t.writeTree,t.treePath,e,n,r)}function jc(t,e){return Fy(t.writeTree,t.treePath,e)}function Dd(t,e,n,r){return zy(t.writeTree,t.treePath,e,n,r)}function Wo(t,e){return jy(t.writeTree,Ke(t.treePath,e))}function Vy(t,e,n,r,i,s){return By(t.writeTree,t.treePath,e,n,r,i,s)}function Bc(t,e,n){return qy(t.writeTree,t.treePath,e,n)}function Up(t,e){return Fp(Ke(t.treePath,e),t.writeTree)}function Fp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Os(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ls(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ui(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Os(r,e.snapshotNode,i.oldSnap));else throw Vi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const zp=new Gy;class Hc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ri(this.viewCache_),s=Vy(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){return{filter:t}}function Yy(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qy(t,e,n,r,i){const s=new Wy;let o,a;if(n.type===wn.OVERWRITE){const c=n;c.source.fromUser?o=xl(t,e,c.path,c.snap,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Go(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wn.MERGE){const c=n;c.source.fromUser?o=Xy(t,e,c.path,c.children,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Sl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wn.ACK_USER_WRITE){const c=n;c.revert?o=tE(t,e,c.path,r,i,s):o=Zy(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wn.LISTEN_COMPLETE)o=eE(t,e,n.path,r,s);else throw Vi("Unknown operation type: "+n.type);const l=s.getChanges();return Jy(e,o,l),{viewCache:o,changes:l}}function Jy(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ho(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Np(Ho(e)))}}function qp(t,e,n,r,i,s){const o=e.eventCache;if(Wo(r,n)!=null)return e;{let a,l;if(ye(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ri(e),d=c instanceof ae?c:ae.EMPTY_NODE,f=jc(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Vo(r,ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=we(n);if(c===".priority"){O(Rr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Dd(r,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ue(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Dd(r,n,o.getNode(),l);u!=null?f=o.getNode().getImmediateChild(c).updateChild(d,u):f=o.getNode().getImmediateChild(c)}else f=Bc(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return ys(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Go(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),v,null)}else{const v=we(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return e;const g=Ue(n),E=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),v,E,g,zp,null)}const f=Op(e,c,l.isFullyInitialized()||ye(n),d.filtersNodes()),u=new Hc(i,f,s);return qp(t,f,n,i,u,a)}function xl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Hc(i,e,s);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ys(e,c,!0,t.filter.filtersNodes());else{const f=we(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ys(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=Ue(n),v=a.getNode().getImmediateChild(f);let g;if(ye(u))g=r;else{const b=d.getCompleteChild(f);b!=null?Nc(u)===".priority"&&b.getChild(Ip(u)).isEmpty()?g=b:g=b.updateChild(u,r):g=ae.EMPTY_NODE}if(v.equals(g))l=e;else{const b=t.filter.updateChild(a.getNode(),f,g,u,d,o);l=ys(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Md(t,e){return t.eventCache.isCompleteForChild(e)}function Xy(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ke(n,l);Md(e,we(d))&&(a=xl(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ke(n,l);Md(e,we(d))||(a=xl(t,a,d,c,i,s,o))}),a}function $d(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=r:c=new $e(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,u)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),g=$d(t,v,u);l=Go(t,l,new Pe(f),g,i,s,o,a)}}),c.children.inorderTraversal((f,u)=>{const v=!e.serverCache.isCompleteForChild(f)&&u.value===null;if(!d.hasChild(f)&&!v){const g=e.serverCache.getNode().getImmediateChild(f),b=$d(t,g,u);l=Go(t,l,new Pe(f),b,i,s,o,a)}}),l}function Zy(t,e,n,r,i,s,o){if(Wo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Go(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ye(n)){let c=new $e(null);return l.getNode().forEachChild(Ir,(d,f)=>{c=c.set(new Pe(d),f)}),Sl(t,e,n,c,i,s,a,o)}else return e}else{let c=new $e(null);return r.foreach((d,f)=>{const u=Ke(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),Sl(t,e,n,c,i,s,a,o)}}function eE(t,e,n,r,i){const s=e.serverCache,o=Op(e,s.getNode(),s.isFullyInitialized()||ye(n),s.isFiltered());return qp(t,o,n,r,zp,i)}function tE(t,e,n,r,i,s){let o;if(Wo(r,n)!=null)return e;{const a=new Hc(r,e,i),l=e.eventCache.getNode();let c;if(ye(n)||we(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Vo(r,ri(e));else{const f=e.serverCache.getNode();O(f instanceof ae,"serverChildren would be complete if leaf node"),d=jc(r,f)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=we(n);let f=Bc(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?c=t.filter.updateChild(l,d,f,Ue(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,ae.EMPTY_NODE,Ue(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vo(r,ri(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wo(r,Ae())!=null,ys(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $c(r.getIndex()),s=vy(r);this.processor_=Ky(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ae.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ae.EMPTY_NODE,a.getNode(),null),d=new Pr(l,o.isFullyInitialized(),i.filtersNodes()),f=new Pr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=fa(f,d),this.eventGenerator_=new xy(this.query_)}get query(){return this.query_}}function rE(t){return t.viewCache_.serverCache.getNode()}function iE(t){return Ho(t.viewCache_)}function sE(t,e){const n=ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(we(e)).isEmpty())?n.getChild(e):null}function Ud(t){return t.eventRegistrations_.length===0}function oE(t,e){t.eventRegistrations_.push(e)}function Fd(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function zd(t,e,n,r){e.type===wn.MERGE&&e.source.queryId!==null&&(O(ri(t.viewCache_),"We should always have a full cache before handling merges"),O(Ho(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Qy(t.processor_,i,e,n,r);return Yy(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,jp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function aE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(Ui(s,o))}),n.isFullyInitialized()&&r.push(Np(n.getNode())),jp(t,r,n.getNode(),e)}function jp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Sy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class Bp{constructor(){this.views=new Map}}function lE(t){O(!Ko,"__referenceConstructor has already been defined"),Ko=t}function cE(){return O(Ko,"Reference.ts has not been loaded"),Ko}function uE(t){return t.views.size===0}function Vc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),zd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(zd(o,e,n,r));return s}}function Hp(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Vo(n,i?r:null),l=!1;a?l=!0:r instanceof ae?(a=jc(n,r),l=!1):(a=ae.EMPTY_NODE,l=!1);const c=fa(new Pr(a,l,!1),new Pr(r,i,!1));return new nE(e,c)}return o}function dE(t,e,n,r,i,s){const o=Hp(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oE(o,n),aE(o,n)}function hE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Nr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fd(c,n,r)),Ud(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fd(l,n,r)),Ud(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nr(t)&&s.push(new(cE())(e._repo,e._path)),{removed:s,events:o}}function Vp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tr(t,e){let n=null;for(const r of t.views.values())n=n||sE(r,e);return n}function Wp(t,e){if(e._queryParams.loadsAllData())return ma(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Gp(t,e){return Wp(t,e)!=null}function Nr(t){return ma(t)!=null}function ma(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;function fE(t){O(!Yo,"__referenceConstructor has already been defined"),Yo=t}function pE(){return O(Yo,"Reference.ts has not been loaded"),Yo}let mE=1;class qd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=Hy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kp(t,e,n,r,i){return Ny(t.pendingWriteTree_,e,n,r,i),i?Gi(t,new ni(Fc(),e,n)):[]}function vE(t,e,n,r){Ly(t.pendingWriteTree_,e,n,r);const i=$e.fromObject(n);return Gi(t,new Fi(Fc(),e,i))}function _r(t,e,n=!1){const r=Oy(t.pendingWriteTree_,e);if(Dy(t.pendingWriteTree_,e)){let s=new $e(null);return r.snap!=null?s=s.set(Ae(),!0):wt(r.children,o=>{s=s.set(new Pe(o),!0)}),Gi(t,new Bo(r.path,s,n))}else return[]}function no(t,e,n){return Gi(t,new ni(zc(),e,n))}function gE(t,e,n){const r=$e.fromObject(n);return Gi(t,new Fi(zc(),e,r))}function _E(t,e){return Gi(t,new Ms(zc(),e))}function bE(t,e,n){const r=Gc(t,n);if(r){const i=Kc(r),s=i.path,o=i.queryId,a=Ot(s,e),l=new Ms(qc(o),a);return Yc(t,s,l)}else return[]}function Qo(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Gp(o,e))){const l=hE(o,e,n,r);uE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(u,v)=>Nr(v));if(d&&!f){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const v=EE(u);for(let g=0;g<v.length;++g){const b=v[g],E=b.query,k=Xp(t,b);t.listenProvider_.startListening(Cs(E),$s(t,E),k.hashFn,k.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Cs(e),null):c.forEach(u=>{const v=t.queryToTagMap.get(va(u));t.listenProvider_.stopListening(Cs(u),v)}))}CE(t,c)}return a}function Yp(t,e,n,r){const i=Gc(t,r);if(i!=null){const s=Kc(i),o=s.path,a=s.queryId,l=Ot(o,e),c=new ni(qc(a),l,n);return Yc(t,o,c)}else return[]}function wE(t,e,n,r){const i=Gc(t,r);if(i){const s=Kc(i),o=s.path,a=s.queryId,l=Ot(o,e),c=$e.fromObject(n),d=new Fi(qc(a),l,c);return Yc(t,o,d)}else return[]}function Al(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,v)=>{const g=Ot(u,i);s=s||Tr(v,g),o=o||Nr(v)});let a=t.syncPointTree_.get(i);a?(o=o||Nr(a),s=s||Tr(a,Ae())):(a=new Bp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ae.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,g)=>{const b=Tr(g,Ae());b&&(s=s.updateImmediateChild(v,b))}));const c=Gp(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=va(e);O(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const v=IE();t.queryToTagMap.set(u,v),t.tagToQueryMap.set(v,u)}const d=pa(t.pendingWriteTree_,i);let f=dE(a,e,n,d,s,l);if(!c&&!o&&!r){const u=Wp(a,e);f=f.concat(kE(t,e,u))}return f}function Wc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ot(o,e),c=Tr(a,l);if(c)return c});return $p(i,e,s,n,!0)}function yE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const f=Ot(c,n);r=r||Tr(d,f)});let i=t.syncPointTree_.get(n);i?r=r||Tr(i,Ae()):(i=new Bp,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Pr(r,!0,!1):null,a=pa(t.pendingWriteTree_,e._path),l=Hp(i,e,a,s?o.getNode():ae.EMPTY_NODE,s);return iE(l)}function Gi(t,e){return Qp(e,t.syncPointTree_,null,pa(t.pendingWriteTree_,Ae()))}function Qp(t,e,n,r){if(ye(t.path))return Jp(t,e,n,r);{const i=e.get(Ae());n==null&&i!=null&&(n=Tr(i,Ae()));let s=[];const o=we(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Up(r,o);s=s.concat(Qp(a,l,c,d))}return i&&(s=s.concat(Vc(i,t,r,n))),s}}function Jp(t,e,n,r){const i=e.get(Ae());n==null&&i!=null&&(n=Tr(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Up(r,o),d=t.operationForChild(o);d&&(s=s.concat(Jp(d,a,l,c)))}),i&&(s=s.concat(Vc(i,t,r,n))),s}function Xp(t,e){const n=e.query,r=$s(t,n);return{hashFn:()=>(rE(e)||ae.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bE(t,n._path,r):_E(t,n._path);{const s=v0(i,n);return Qo(t,n,null,s)}}}}function $s(t,e){const n=va(e);return t.queryToTagMap.get(n)}function va(t){return t._path.toString()+"$"+t._queryIdentifier}function Gc(t,e){return t.tagToQueryMap.get(e)}function Kc(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function Yc(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=pa(t.pendingWriteTree_,e);return Vc(r,n,i,null)}function EE(t){return t.fold((e,n,r)=>{if(n&&Nr(n))return[ma(n)];{let i=[];return n&&(i=Vp(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pE())(t._repo,t._path):t}function CE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=va(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function IE(){return mE++}function kE(t,e,n){const r=e._path,i=$s(t,e),s=Xp(t,n),o=t.listenProvider_.startListening(Cs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,f)=>{if(!ye(c)&&d&&Nr(d))return[ma(d).query];{let u=[];return d&&(u=u.concat(Vp(d).map(v=>v.query))),wt(f,(v,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Cs(d),$s(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qc(n)}node(){return this.node_}}class Jc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Jc(this.syncTree_,n)}node(){return Wc(this.syncTree_,this.path_)}}const TE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jd=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return SE(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},SE=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Zp=function(t,e,n,r){return Xc(e,new Jc(n,t),r)},em=function(t,e,n){return Xc(t,new Qc(e),n)};function Xc(t,e,n){const r=t.getPriority().val(),i=jd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pt(a,lt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pt(i))),o.forEachChild(We,(a,l)=>{const c=Xc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function eu(t,e){let n=e instanceof Pe?e:new Pe(e),r=t,i=we(n);for(;i!==null;){const s=Di(r.node.children,i)||{children:{},childCount:0};r=new Zc(i,r,s),n=Ue(n),i=we(n)}return r}function Ki(t){return t.node.value}function tm(t,e){t.node.value=e,Rl(t)}function nm(t){return t.node.childCount>0}function AE(t){return Ki(t)===void 0&&!nm(t)}function ga(t,e){wt(t.node.children,(n,r)=>{e(new Zc(n,t,r))})}function rm(t,e,n,r){n&&e(t),ga(t,i=>{rm(i,e,!0)})}function RE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ro(t){return new Pe(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function Rl(t){t.parent!==null&&PE(t.parent,t.name,t)}function PE(t,e,n){const r=AE(n),i=Un(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Rl(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/[\[\].#$\/\u0000-\u001F\u007F]/,LE=/[\[\].#$\u0000-\u001F\u007F]/,Ya=10*1024*1024,tu=function(t){return typeof t=="string"&&t.length!==0&&!NE.test(t)},im=function(t){return typeof t=="string"&&t.length!==0&&!LE.test(t)},OE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),im(t)},Pl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!xc(t)||t&&typeof t=="object"&&Un(t,".sv")},nu=function(t,e,n,r){r&&e===void 0||_a(oa(t,"value"),e,n)},_a=function(t,e,n){const r=n instanceof Pe?new Q0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+qr(r)+" with contents = "+e.toString());if(xc(e))throw new Error(t+"contains "+e.toString()+" "+qr(r));if(typeof e=="string"&&e.length>Ya/3&&aa(e)>Ya)throw new Error(t+"contains a string greater than "+Ya+" utf8 bytes "+qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tu(o)))throw new Error(t+" contains an invalid key ("+o+") "+qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);J0(r,o),_a(t,a,r),X0(r)}),i&&s)throw new Error(t+' contains ".value" child '+qr(r)+" in addition to actual children.")}},DE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!tu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Y0);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&on(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ME=function(t,e,n,r){const i=oa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];wt(e,(o,a)=>{const l=new Pe(o);if(_a(i,a,Ke(n,l)),Nc(l)===".priority"&&!Pl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),DE(i,s)},ru=function(t,e,n,r){if(!im(n))throw new Error(oa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$E=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ru(t,e,n)},sm=function(t,e){if(we(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},UE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!OE(n))throw new Error(oa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ba(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function om(t,e,n){ba(t,n),am(t,r=>Lc(r,e))}function un(t,e,n){ba(t,n),am(t,r=>on(r,e)||on(e,r))}function am(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bs&&_t("event: "+n.toString()),Wi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="repo_interrupt",jE=25;class BE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jo(),this.transactionQueueTree_=new Zc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HE(t,e,n){if(t.stats_=Rc(t.repoInfo_),t.forceRestClient_||w0())t.server_=new qo(t.repoInfo_,(r,i,s,o)=>{Bd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,i,s,o)=>{Bd(t,r,i,s,o)},r=>{Hd(t,r)},r=>{VE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=k0(t.repoInfo_,()=>new Ty(t.stats_,t.server_)),t.infoData_=new yy,t.infoSyncTree_=new qd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=no(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),iu(t,"connected",!1),t.serverSyncTree_=new qd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);un(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lm(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wa(t){return TE({timestamp:lm(t)})}function Bd(t,e,n,r,i){t.dataUpdateCount++;const s=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ro(n,c=>lt(c));o=wE(t.serverSyncTree_,s,l,i)}else{const l=lt(n);o=Yp(t.serverSyncTree_,s,l,i)}else if(r){const l=Ro(n,c=>lt(c));o=gE(t.serverSyncTree_,s,l)}else{const l=lt(n);o=no(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=qi(t,s)),un(t.eventQueue_,a,o)}function Hd(t,e){iu(t,"connected",e),e===!1&&YE(t)}function VE(t,e){wt(e,(n,r)=>{iu(t,n,r)})}function iu(t,e,n){const r=new Pe("/.info/"+e),i=lt(n);t.infoData_.updateSnapshot(r,i);const s=no(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function su(t){return t.nextWriteId_++}function WE(t,e,n){const r=yE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=lt(i).withIndex(e._queryParams.getIndex());Al(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=no(t.serverSyncTree_,e._path,s);else{const a=$s(t.serverSyncTree_,e);o=Yp(t.serverSyncTree_,e._path,s,a)}return un(t.eventQueue_,e._path,o),Qo(t.serverSyncTree_,e,n,null,!0),s},i=>(io(t,"get for query "+ct(e)+" failed: "+i),Promise.reject(new Error(i))))}function GE(t,e,n,r,i){io(t,"set",{path:e.toString(),value:n,priority:r});const s=wa(t),o=lt(n,r),a=Wc(t.serverSyncTree_,e),l=em(o,a,s),c=su(t),d=Kp(t.serverSyncTree_,e,l,c,!0);ba(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,v)=>{const g=u==="ok";g||Dt("set at "+e+" failed: "+u);const b=_r(t.serverSyncTree_,c,!g);un(t.eventQueue_,e,b),Ll(t,i,u,v)});const f=au(t,e);qi(t,f),un(t.eventQueue_,f,[])}function KE(t,e,n,r){io(t,"update",{path:e.toString(),value:n});let i=!0;const s=wa(t),o={};if(wt(n,(a,l)=>{i=!1,o[a]=Zp(Ke(e,a),lt(l),t.serverSyncTree_,s)}),i)_t("update() called with empty data.  Don't do anything."),Ll(t,r,"ok",void 0);else{const a=su(t),l=vE(t.serverSyncTree_,e,o,a);ba(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const f=c==="ok";f||Dt("update at "+e+" failed: "+c);const u=_r(t.serverSyncTree_,a,!f),v=u.length>0?qi(t,e):e;un(t.eventQueue_,v,u),Ll(t,r,c,d)}),wt(n,c=>{const d=au(t,Ke(e,c));qi(t,d)}),un(t.eventQueue_,e,[])}}function YE(t){io(t,"onDisconnectEvents");const e=wa(t),n=jo();Cl(t.onDisconnect_,Ae(),(i,s)=>{const o=Zp(i,s,t.serverSyncTree_,e);Lp(n,i,o)});let r=[];Cl(n,Ae(),(i,s)=>{r=r.concat(no(t.serverSyncTree_,i,s));const o=au(t,i);qi(t,o)}),t.onDisconnect_=jo(),un(t.eventQueue_,Ae(),r)}function QE(t,e,n){let r;we(e._path)===".info"?r=Al(t.infoSyncTree_,e,n):r=Al(t.serverSyncTree_,e,n),om(t.eventQueue_,e._path,r)}function Nl(t,e,n){let r;we(e._path)===".info"?r=Qo(t.infoSyncTree_,e,n):r=Qo(t.serverSyncTree_,e,n),om(t.eventQueue_,e._path,r)}function JE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qE)}function io(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function Ll(t,e,n,r){e&&Wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function cm(t,e,n){return Wc(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function ou(t,e=t.transactionQueueTree_){if(e||ya(t,e),Ki(e)){const n=dm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XE(t,ro(e),n)}else nm(e)&&ga(e,n=>{ou(t,n)})}function XE(t,e,n){const r=n.map(c=>c.currentWriteId),i=cm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];O(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Ot(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{io(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(_r(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&f.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();ya(t,eu(t.transactionQueueTree_,e)),ou(t,t.transactionQueueTree_),un(t.eventQueue_,e,d);for(let u=0;u<f.length;u++)Wi(f[u])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Dt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}qi(t,e)}},o)}function qi(t,e){const n=um(t,e),r=ro(n),i=dm(t,n);return ZE(t,i,r),r}function ZE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ot(n,l.path);let d=!1,f;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jE)d=!0,f="maxretry",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else{const u=cm(t,l.path,o);l.currentInputSnapshot=u;const v=e[a].update(u.val());if(v!==void 0){_a("transaction failed: Data returned ",v,l.path);let g=lt(v);typeof v=="object"&&v!=null&&Un(v,".priority")||(g=g.updatePriority(u.getPriority()));const E=l.currentWriteId,k=wa(t),I=em(g,u,k);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=su(t),o.splice(o.indexOf(E),1),i=i.concat(Kp(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),i=i.concat(_r(t.serverSyncTree_,E,!0))}else d=!0,f="nodata",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ya(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Wi(r[a]);ou(t,t.transactionQueueTree_)}function um(t,e){let n,r=t.transactionQueueTree_;for(n=we(e);n!==null&&Ki(r)===void 0;)r=eu(r,n),e=Ue(e),n=we(e);return r}function dm(t,e){const n=[];return hm(t,e,n),n.sort((r,i)=>r.order-i.order),n}function hm(t,e,n){const r=Ki(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ga(e,i=>{hm(t,i,n)})}function ya(t,e){const n=Ki(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,tm(e,n.length>0?n:void 0)}ga(e,r=>{ya(t,r)})}function au(t,e){const n=ro(um(t,e)),r=eu(t.transactionQueueTree_,e);return RE(r,i=>{Qa(t,i)}),Qa(t,r),rm(r,i=>{Qa(t,i)}),n}function Qa(t,e){const n=Ki(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_r(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?tm(e,void 0):n.length=s+1,un(t.eventQueue_,ro(e),i);for(let o=0;o<r.length;o++)Wi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vd=function(t,e){const n=nC(t),r=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||d0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mp(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Pe(n.pathString)}},nC=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=eC(t.substring(d,f)));const u=tC(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rC=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Wd.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Wd.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class sC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:Nc(this._path)}get ref(){return new or(this._repo,this._path)}get _queryIdentifier(){const e=Pd(this._queryParams),n=Sc(e);return n==="{}"?"default":n}get _queryObject(){return Pd(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof fi))return!1;const n=this._repo===e._repo,r=Lc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+K0(this._path)}}function oC(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function pm(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ir){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ti)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==tr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===We){if(e!=null&&!Pl(e)||n!=null&&!Pl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof Mc||t.getIndex()===Pp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function aC(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class or extends fi{constructor(e,n){super(e,n,new Uc,!1)}get parent(){const e=Ip(this._path);return e===null?null:new or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Pe(e),r=Fs(this.ref,e);return new Us(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Us(i,Fs(this.ref,r),We)))}hasChild(e){const n=new Pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qn(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Fs(t._root,e):t._root}function Fs(t,e){return t=Ze(t),we(t._path)===null?$E("child","path",e):ru("child","path",e),new or(t._repo,Ke(t._path,e))}function mm(t,e){t=Ze(t),sm("push",t._path),nu("push",e,t._path,!0);const n=lm(t._repo),r=rC(n),i=Fs(t,r),s=Fs(t,r);let o;return e!=null?o=lC(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lC(t,e){t=Ze(t),sm("set",t._path),nu("set",e,t._path,!1);const n=new Gs;return GE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cC(t,e){ME("update",e,t._path);const n=new Gs;return KE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Gd(t){t=Ze(t);const e=new fm(()=>{}),n=new Ea(e);return WE(t._repo,t,n).then(r=>new Us(r,new or(t._repo,t._path),t._queryParams.getIndex()))}class Ea{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iC("value",this,new Us(e.snapshotNode,new or(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sC(this,e,n):null}matches(e){return e instanceof Ea?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uC(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,f)=>{Nl(t._repo,t,a),l(d,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new fm(n,s||void 0),a=new Ea(o);return QE(t._repo,t,a),()=>Nl(t._repo,t,a)}function Ca(t,e,n,r){return uC(t,"value",e,n,r)}function vm(t,e,n){Nl(t._repo,t,null)}class Ia{}class dC extends Ia{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){nu("startAfter",this._value,e._path,!1);const n=by(e._queryParams,this._value,this._key);if(aC(n),pm(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new fi(e._repo,e._path,n,e._orderByCalled)}}function hC(t,e){return new dC(t,e)}class fC extends Ia{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new fi(e._repo,e._path,gy(e._queryParams,this._limit),e._orderByCalled)}}function Kd(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new fC(t)}class pC extends Ia{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new fi(e._repo,e._path,_y(e._queryParams,this._limit),e._orderByCalled)}}function mC(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new pC(t)}class vC extends Ia{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){oC(e,"orderByChild");const n=new Pe(this._path);if(ye(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Mc(n),i=wy(e._queryParams,r);return pm(i),new fi(e._repo,e._path,i,!0)}}function Ol(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ru("orderByChild","path",t),new vC(t)}function Dl(t,...e){let n=Ze(t);for(const r of e)n=r._apply(n);return n}lE(or);fE(or);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="FIREBASE_DATABASE_EMULATOR_HOST",Ml={};let _C=!1;function bC(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Dr(s);t.repoInfo_=new mp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function wC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vd(s,i),a=o.repoInfo,l;typeof process<"u"&&hd&&(l=hd[gC]),l?(s=`http://${l}?ns=${a.namespace}`,o=Vd(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new E0(t.name,t.options,e);UE("Invalid Firebase Database URL",o),ye(o.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const d=EC(a,t,c,new y0(t,n));return new CC(d,t)}function yC(t,e){const n=Ml[e];(!n||n[t.key]!==t)&&er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JE(t),delete n[t.key]}function EC(t,e,n,r){let i=Ml[e.name];i||(i={},Ml[e.name]=i);let s=i[t.toURLString()];return s&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new BE(t,_C,n,r),i[t.toURLString()]=s,s}class CC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new or(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}function IC(t=gc(),e){const n=la(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lf("database");r&&kC(n,...r)}return n}function kC(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Xr(r,s.repoInfo_.emulatorOptions))return;er("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&er('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new bo(bo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:df(r.mockUserToken,t.app.options.projectId);o=new bo(a)}Dr(e)&&(hc(e),fc("Database",!0)),bC(s,i,r,o)}/**
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
 */function TC(t){s0(ui),Zr(new Ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Dn(fd,pd,t),Dn(fd,pd,"esm2020")}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TC();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="firebasestorage.googleapis.com",_m="storageBucket",xC=120*1e3,SC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends sr{constructor(e,n,r=0){super(Ja(e),`Firebase Storage: ${n} (${Ja(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Je||(Je={}));function Ja(t){return"storage/"+t}function lu(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Je.UNKNOWN,t)}function AC(t){return new et(Je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RC(t){return new et(Je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Je.UNAUTHENTICATED,t)}function NC(){return new et(Je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LC(t){return new et(Je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OC(){return new et(Je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DC(){return new et(Je.CANCELED,"User canceled the upload/download.")}function MC(t){return new et(Je.INVALID_URL,"Invalid URL '"+t+"'.")}function $C(t){return new et(Je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UC(){return new et(Je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_m+"' property when initializing the app?")}function FC(){return new et(Je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zC(){return new et(Je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qC(t){return new et(Je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $l(t){return new et(Je.INVALID_ARGUMENT,t)}function bm(){return new et(Je.APP_DELETED,"The Firebase app was deleted.")}function jC(t){return new et(Je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Is(t,e){return new et(Je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ss(t){throw new et(Je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw $C(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${u}`,"i"),g={bucket:1,path:3},b=n===gm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",k=new RegExp(`^https?://${b}/${i}/${E}`,"i"),A=[{regex:a,indices:l,postModify:s},{regex:v,indices:g,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<A.length;L++){const P=A[L],R=P.regex.exec(e);if(R){const T=R[P.indices.bucket];let C=R[P.indices.path];C||(C=""),r=new Gt(T,C),P.postModify(r);break}}if(r==null)throw MC(e);return r}}class BC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...E){c||(c=!0,e.apply(null,E))}function f(E){i=setTimeout(()=>{i=null,t(v,l())},E)}function u(){s&&clearTimeout(s)}function v(E,...k){if(c){u();return}if(E){u(),d.call(null,E,...k);return}if(l()||o){u(),d.call(null,E,...k);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,f(A)}let g=!1;function b(E){g||(g=!0,u(),!c&&(i!==null?(E||(a=2),clearTimeout(i),f(0)):E||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function VC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){return t!==void 0}function GC(t){return typeof t=="object"&&!Array.isArray(t)}function cu(t){return typeof t=="string"||t instanceof String}function Yd(t){return uu()&&t instanceof Blob}function uu(){return typeof Blob<"u"}function Qd(t,e,n,r){if(r<e)throw $l(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $l(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
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
 */function KC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s,o,a,l,c,d,f,u=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=u,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ho(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Gr.NO_ERROR,l=s.getStatus();if(!a||KC(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Gr.ABORT;r(!1,new ho(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ho(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WC(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=lu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?bm():DC();o(l)}else{const l=OC();o(l)}};this.canceled_?n(!1,new ho(!1,null,!0)):this.backoffId_=HC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ho{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eI(t,e,n,r,i,s,o=!0,a=!1){const l=wm(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return XC(d,e),QC(d,n),JC(d,s),ZC(d,r),new YC(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nI(...t){const e=tI();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uu())return new Blob(t);throw new et(Je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rI(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function iI(t){if(typeof atob>"u")throw qC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xa{constructor(e,n){this.data=e,this.contentType=n||null}}function sI(t,e){switch(t){case Rn.RAW:return new Xa(ym(e));case Rn.BASE64:case Rn.BASE64URL:return new Xa(Em(t,e));case Rn.DATA_URL:return new Xa(aI(e),lI(e))}throw lu()}function ym(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oI(t){let e;try{e=decodeURIComponent(t)}catch{throw Is(Rn.DATA_URL,"Malformed data URL.")}return ym(e)}function Em(t,e){switch(t){case Rn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Is(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Is(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iI(e)}catch(i){throw i.message.includes("polyfill")?i:Is(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Cm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Is(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aI(t){const e=new Cm(t);return e.base64?Em(Rn.BASE64,e.rest):oI(e.rest)}function lI(t){return new Cm(t).contentType}function cI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";Yd(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Yd(this.data_)){const r=this.data_,i=rI(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(uu()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(nI.apply(null,n))}else{const n=e.map(o=>cu(o)?sI(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){let e;try{e=JSON.parse(t)}catch{return null}return GC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dI(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function km(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){return e}class Nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||hI}}let fo=null;function fI(t){return!cu(t)||t.length<2?t:km(t)}function Tm(){if(fo)return fo;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(s,o){return fI(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Nt("size");return i.xform=r,t.push(i),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),fo=t,fo}function pI(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mI(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pI(r,t),r}function xm(t,e,n){const r=Im(e);return r===null?null:mI(t,r,n)}function vI(t,e,n,r){const i=Im(e);if(i===null||!cu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,u="/b/"+o(d)+"/o/"+o(f),v=du(u,n,r),g=wm({alt:"media",token:c});return v+g})[0]}function gI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Sm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){if(!t)throw lu()}function _I(t,e){function n(r,i){const s=xm(t,i,e);return Am(s!==null),s}return n}function bI(t,e){function n(r,i){const s=xm(t,i,e);return Am(s!==null),vI(s,i,t.host,t._protocol)}return n}function Rm(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=NC():i=PC():n.getStatus()===402?i=RC(t.bucket):n.getStatus()===403?i=LC(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function wI(t){const e=Rm(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=AC(t.path)),s.serverResponse=i.serverResponse,s}return n}function yI(t,e,n){const r=e.fullServerUrl(),i=du(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sm(i,s,bI(t,n),o);return a.errorHandler=wI(e),a}function EI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EI(null,e)),r}function II(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let L=0;L<2;L++)A=A+Math.random().toString().slice(2);return A}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=CI(e,r,i),d=gI(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,u=`\r
--`+l+"--",v=mr.getBlob(f,r,u);if(v===null)throw FC();const g={name:c.fullPath},b=du(s,t.host,t._protocol),E="POST",k=t.maxUploadRetryTime,I=new Sm(b,E,_I(t,n),k);return I.urlParams=g,I.headers=o,I.body=v.uploadData(),I.errorHandler=Rm(e),I}class kI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw ss("cannot .send() more than once");if(Dr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TI extends kI{initXhr(){this.xhr_.responseType="text"}}function Pm(){return new TI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ii(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return km(this._location.path)}get storage(){return this._service}get parent(){const e=uI(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new ii(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jC(e)}}function xI(t,e,n){t._throwIfRoot("uploadBytes");const r=II(t.storage,t._location,Tm(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,Pm).then(i=>({metadata:i,ref:t}))}function SI(t){t._throwIfRoot("getDownloadURL");const e=yI(t.storage,t._location,Tm());return t.storage.makeRequestWithTokens(e,Pm).then(n=>{if(n===null)throw zC();return n})}function AI(t,e){const n=dI(t._location.path,e),r=new Gt(t._location.bucket,n);return new ii(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){return/^[A-Za-z]+:\/\//.test(t)}function PI(t,e){return new ii(t,e)}function Nm(t,e){if(t instanceof hu){const n=t;if(n._bucket==null)throw UC();const r=new ii(n,n._bucket);return e!=null?Nm(r,e):r}else return e!==void 0?AI(t,e):t}function NI(t,e){if(e&&RI(e)){if(t instanceof hu)return PI(t,e);throw $l("To use ref(service, url), the first argument must be a Storage instance.")}else return Nm(t,e)}function Jd(t,e){const n=e?.[_m];return n==null?null:Gt.makeFromBucketSpec(n,t)}function LI(t,e,n,r={}){t.host=`${e}:${n}`;const i=Dr(e);i&&(hc(`https://${t.host}/b`),fc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:df(s,t.app.options.projectId))}class hu{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=gm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xC,this._maxUploadRetryTime=SC,this._requests=new Set,i!=null?this._bucket=Gt.makeFromBucketSpec(i,this._host):this._bucket=Jd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=Jd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ii(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new BC(bm());{const o=eI(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xd="@firebase/storage",Zd="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="storage";function OI(t,e,n){return t=Ze(t),xI(t,e,n)}function DI(t){return t=Ze(t),SI(t)}function MI(t,e){return t=Ze(t),NI(t,e)}function $I(t=gc(),e){t=Ze(t);const r=la(t,Lm).getImmediate({identifier:e}),i=lf("storage");return i&&UI(r,...i),r}function UI(t,e,n,r={}){LI(t,e,n,r)}function FI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hu(n,r,i,e,ui)}function zI(){Zr(new Ar(Lm,FI,"PUBLIC").setMultipleInstances(!0)),Dn(Xd,Zd,""),Dn(Xd,Zd,"esm2020")}zI();const Om={apiKey:void 0,authDomain:void 0,databaseURL:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};console.log("Firebase Config:",Om);const fu=vf(Om),si=r0(fu),Pn=IC(fu),qI=$I(fu);var jI=N('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),BI=N('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),HI=N('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),VI=N('<h3 class="post-title svelte-1t1odzy"> </h3>'),WI=N('<p class="post-text svelte-1t1odzy"> </p>'),GI=N('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),KI=N('<div class="posts svelte-1t1odzy"></div>'),YI=N('<div class="post-list-container svelte-1t1odzy"><!></div>');const QI={hash:"svelte-1t1odzy",code:`
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
  }`};function JI(t,e){qe(e,!0),Be(t,QI);let n=Ve(e,"path",7,"posts"),r=Ve(e,"limit",7,"10"),i=X(xt([])),s=X(!0),o=X(""),a=null;yt(()=>{l()}),tf(()=>{c()});function l(){try{a=Qn(Pn,n()),Ca(a,I=>{const A=I.val();A?y(i,Object.entries(A).map(([L,P])=>({id:L,...P})).sort((L,P)=>(P.timestamp||0)-(L.timestamp||0)).slice(0,parseInt(r())),!0):y(i,[],!0),y(s,!1),y(o,"")},I=>{console.error("데이터 읽기 오류:",I),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(s,!1)})}catch(I){console.error("구독 설정 오류:",I),y(o,"데이터베이스 연결에 실패했습니다."),y(s,!1)}}function c(){a&&vm(a)}function d(I){const A=new CustomEvent("post-click",{detail:{post:I},bubbles:!0,composed:!0});dispatchEvent(A)}function f(I,A){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),d(A))}function u(I){if(!I)return"";const A=typeof I=="string"?Number(I):I,L=new Date(A),R=new Date().getTime()-L.getTime(),T=Math.floor(R/6e4),C=Math.floor(R/36e5),M=Math.floor(R/864e5);return T<1?"방금 전":T<60?`${T}분 전`:C<24?`${C}시간 전`:M<7?`${M}일 전`:L.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var v={get path(){return n()},set path(I="posts"){n(I),ze()},get limit(){return r()},set limit(I="10"){r(I),ze()}},g=YI(),b=p(g);{var E=I=>{var A=jI();w(I,A)},k=I=>{var A=de(),L=se(A);{var P=T=>{var C=BI(),M=p(C),B=p(M,!0);h(M),h(C),ee(()=>S(B,m(o))),w(T,C)},R=T=>{var C=de(),M=se(C);{var B=$=>{var Y=HI();w($,Y)},H=$=>{var Y=KI();zt(Y,21,()=>m(i),le=>le.id,(le,Z)=>{var j=GI();j.__click=()=>d(m(Z)),j.__keydown=me=>f(me,m(Z));var Q=p(j),J=p(Q),F=p(J),x=p(F,!0);h(F);var z=_(F,2),W=p(z,!0);h(z),h(J),h(Q);var G=_(Q,2),fe=p(G);{var D=me=>{var ue=VI(),Te=p(ue,!0);h(ue),ee(()=>S(Te,m(Z).title)),w(me,ue)};V(fe,me=>{m(Z).title&&me(D)})}var q=_(fe,2);{var ie=me=>{var ue=WI(),Te=p(ue,!0);h(ue),ee(()=>S(Te,m(Z).content)),w(me,ue)};V(q,me=>{m(Z).content&&me(ie)})}h(G);var ne=_(G,2),ge=p(ne),re=p(ge);h(ge);var oe=_(ge,2),pe=p(oe);h(oe),h(ne),h(j),ee(me=>{Fe(j,"aria-label",`게시물: ${(m(Z).title||m(Z).content||"제목 없음")??""}`),S(x,m(Z).author||"익명"),S(W,me),S(re,`👍 ${(m(Z).likes||0)??""}`),S(pe,`💬 ${(m(Z).comments?.length||0)??""}`)},[()=>u(m(Z).timestamp)]),w(le,j)}),h(Y),w($,Y)};V(M,$=>{m(i).length===0?$(B):$(H,!1)},!0)}w(T,C)};V(L,T=>{m(o)?T(P):T(R,!1)},!0)}w(I,A)};V(b,I=>{m(s)?I(E):I(k,!1)})}return h(g),w(t,g),je(v)}st(["click","keydown"]);customElements.define("post-list",he(JI,{path:{},limit:{}},[],[],!0));Wv();/**
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
 */const XI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ZI=Sg("<svg><!><!></svg>");function nt(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]),r=Qe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);qe(e,!1);let i=Ve(e,"name",12,void 0),s=Ve(e,"color",12,"currentColor"),o=Ve(e,"size",12,24),a=Ve(e,"strokeWidth",12,2),l=Ve(e,"absoluteStrokeWidth",12,!1),c=Ve(e,"iconNode",28,()=>[]);const d=(...b)=>b.filter((E,k,I)=>!!E&&I.indexOf(E)===k).join(" ");var f={get name(){return i()},set name(b){i(b),ze()},get color(){return s()},set color(b){s(b),ze()},get size(){return o()},set size(b){o(b),ze()},get strokeWidth(){return a()},set strokeWidth(b){a(b),ze()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),ze()},get iconNode(){return c()},set iconNode(b){c(b),ze()}};Qt();var u=ZI();Au(u,(b,E)=>({...XI,...r,width:o(),height:o(),stroke:s(),"stroke-width":b,class:E}),[()=>(bi(l()),bi(a()),bi(o()),Mn(()=>l()?Number(a())*24/Number(o()):a())),()=>(bi(i()),bi(n),Mn(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var v=p(u);zt(v,1,c,gr,(b,E)=>{var k=nl(()=>gv(m(E),2));let I=()=>m(k)[0],A=()=>m(k)[1];var L=de(),P=se(L);Lg(P,I,!0,(R,T)=>{Au(R,()=>({...A()}))}),w(b,L)});var g=_(v);return Xe(g,e,"default",{}),h(u),w(t,u),je(f)}he(nt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Dm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];nt(t,ot({name:"book-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Dm,{},["default"],[],!0);function Mm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];nt(t,ot({name:"camera"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Mm,{},["default"],[],!0);function Ul(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];nt(t,ot({name:"check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Ul,{},["default"],[],!0);function pu(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];nt(t,ot({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(pu,{},["default"],[],!0);function Fl(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];nt(t,ot({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Fl,{},["default"],[],!0);function zl(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];nt(t,ot({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(zl,{},["default"],[],!0);function ql(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];nt(t,ot({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(ql,{},["default"],[],!0);function mu(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];nt(t,ot({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(mu,{},["default"],[],!0);function $m(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];nt(t,ot({name:"house"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he($m,{},["default"],[],!0);function ls(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];nt(t,ot({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(ls,{},["default"],[],!0);function Um(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];nt(t,ot({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Um,{},["default"],[],!0);function Fm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];nt(t,ot({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Fm,{},["default"],[],!0);function cs(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];nt(t,ot({name:"menu"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(cs,{},["default"],[],!0);function br(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];nt(t,ot({name:"message-circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(br,{},["default"],[],!0);function zm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];nt(t,ot({name:"phone"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(zm,{},["default"],[],!0);function qm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];nt(t,ot({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(qm,{},["default"],[],!0);function jm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];nt(t,ot({name:"trending-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(jm,{},["default"],[],!0);function Kr(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];nt(t,ot({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Kr,{},["default"],[],!0);function zs(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];nt(t,ot({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(zs,{},["default"],[],!0);function Bm(t,e){const n=Qe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];nt(t,ot({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=de(),a=se(o);Xe(a,e,"default",{}),w(i,o)},$$slots:{default:!0}}))}he(Bm,{},["default"],[],!0);var ek=N("<option> </option>"),tk=N('<div class="error-message svelte-1e01td3"> </div>'),nk=N('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),rk=N("<!> 인증 코드 전송",1),ik=N('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),sk=N('<div class="error-message svelte-1e01td3"> </div>'),ok=N('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),ak=N("<!> 로그인",1),lk=N('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),ck=N('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const uk={hash:"svelte-1e01td3",code:`\r
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
  }`};function dk(t,e){qe(e,!0),Be(t,uk);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=X("+82"),i=X(""),s=X(""),o=X("phone"),a=X(!1),l=X(""),c=X(null),d=X(null),f=X(void 0),u=X(null);function v(){return new Promise((C,M)=>{try{if(!m(u)){const B=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B);return}if(m(c)){if(m(f)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(f)),console.log("reCAPTCHA reset completed"),C(m(f));return}catch(B){console.warn("Failed to reset reCAPTCHA:",B)}try{m(c).clear(),y(c,null),y(f,void 0)}catch(B){console.warn("Failed to clear reCAPTCHA:",B)}}y(c,new rw(si,m(u).id,{size:"invisible",callback:B=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(f)!==void 0?window.grecaptcha.reset(m(f)):v()}}),!0),m(c).render().then(B=>{y(f,B,!0),console.log("reCAPTCHA rendered with widgetId:",B),C(B)}).catch(B=>{console.error("Failed to render reCAPTCHA:",B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B)})}catch(B){console.error("reCAPTCHA 초기화 실패:",B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B)}})}yt(()=>{const C=document.createElement("div");return C.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),C.className="recaptcha-container-light-dom",C.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(C),y(u,C,!0),v(),()=>{C&&C.parentNode&&C.parentNode.removeChild(C)}});function g(C){return/^[0-9]{6,15}$/.test(C)}async function b(){if(y(l,""),!g(m(i))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const C=`${m(r)}${m(i)}`;console.log("Sending verification code to:",C),y(d,await ow(si,C,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(C){console.error("SMS 전송 실패:",C),C.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):C.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${C.message}`)}finally{y(a,!1)}}async function E(){if(y(l,""),m(s).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const C=await m(d).confirm(m(s));console.log("Login successful:",C.user);const M=new CustomEvent("login-success",{detail:{user:C.user,phoneNumber:C.user.phoneNumber}});dispatchEvent(M),y(i,""),y(s,""),y(o,"phone")}catch(C){console.error("인증 코드 확인 실패:",C),C.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):C.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${C.message}`);const M=new CustomEvent("login-error",{detail:{error:C.message}});dispatchEvent(M)}finally{y(a,!1)}}function k(){y(o,"phone"),y(s,""),y(l,"")}var I=ck(),A=p(I),L=p(A);{var P=C=>{var M=ik(),B=p(M),H=p(B);zm(H,{class:"icon-large"}),rn(4),h(B);var $=_(B,2),Y=_(p($),2);zt(Y,21,()=>n,gr,(D,q)=>{var ie=ek(),ne=p(ie);h(ie);var ge={};ee(()=>{S(ne,`${m(q).flag??""} ${m(q).name??""} (${m(q).code??""})`),ge!==(ge=m(q).code)&&(ie.value=(ie.__value=m(q).code)??"")}),w(D,ie)}),h(Y),h($);var le=_($,2),Z=_(p(le),2),j=p(Z),Q=p(j,!0);h(j);var J=_(j,2);Li(J),h(Z),rn(2),h(le);var F=_(le,2);{var x=D=>{var q=tk(),ie=p(q,!0);h(q),ee(()=>S(ie,m(l))),w(D,q)};V(F,D=>{m(l)&&D(x)})}var z=_(F,2);z.__click=b;var W=p(z);{var G=D=>{var q=nk();rn(),w(D,q)},fe=D=>{var q=rk(),ie=se(q);qm(ie,{class:"btn-icon"}),rn(),w(D,q)};V(W,D=>{m(a)?D(G):D(fe,!1)})}h(z),h(M),ee(()=>{Y.disabled=m(a),S(Q,m(r)),J.disabled=m(a),z.disabled=m(a)||!m(i)}),ac(Y,()=>m(r),D=>y(r,D)),Ss("keypress",J,D=>{D.key==="Enter"&&(D.preventDefault(),b())}),Oi(J,()=>m(i),D=>y(i,D)),w(C,M)},R=C=>{var M=de(),B=se(M);{var H=$=>{var Y=lk(),le=p(Y),Z=p(le);Ul(Z,{class:"icon-large"});var j=_(Z,4),Q=p(j);rn(2),h(j),h(le);var J=_(le,2),F=_(p(J),2);Li(F),rn(2),h(J);var x=_(J,2);{var z=re=>{var oe=sk(),pe=p(oe,!0);h(oe),ee(()=>S(pe,m(l))),w(re,oe)};V(x,re=>{m(l)&&re(z)})}var W=_(x,2),G=p(W);G.__click=k;var fe=_(G,2);fe.__click=E;var D=p(fe);{var q=re=>{var oe=ok();rn(),w(re,oe)},ie=re=>{var oe=ak(),pe=se(oe);Ul(pe,{class:"btn-icon"}),rn(),w(re,oe)};V(D,re=>{m(a)?re(q):re(ie,!1)})}h(fe),h(W);var ne=_(W,2),ge=_(p(ne));ge.__click=k,h(ne),h(Y),ee(()=>{S(Q,`${m(r)??""}${m(i)??""}로 전송된`),F.disabled=m(a),G.disabled=m(a),fe.disabled=m(a)||m(s).length!==6}),Ss("keypress",F,re=>{re.key==="Enter"&&(re.preventDefault(),E())}),Oi(F,()=>m(s),re=>y(s,re)),w($,Y)};V(B,$=>{m(o)==="code"&&$(H)},!0)}w(C,M)};V(L,C=>{m(o)==="phone"?C(P):C(R,!1)})}var T=_(L,2);lc(T,C=>y(u,C),()=>m(u)),h(A),h(I),w(t,I),je()}st(["click"]);customElements.define("phone-login",he(dk,{},[],[],!0));const ka=Ws(null),hk=Ws(!0);Vf(si,t=>{ka.set(t),hk.set(!1)});async function fk(){try{return await M1(si),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}class jr{static#t=null;#e=X(!0);get loading(){return m(this.#e)}set loading(e){y(this.#e,e,!0)}#r=X(!1);get isAuthenticated(){return m(this.#r)}set isAuthenticated(e){y(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#i=X(null);get data(){return m(this.#i)}set data(e){y(this.#i,e,!0)}#l=X(null);get error(){return m(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#s=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return jr.#t||(jr.#t=new jr),jr.#t}#a(){try{if(!si)throw new Error("Auth instance not available");this.#s=Vf(si,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const n=Qn(Pn,`users/${e.uid}`);this.#n=Ca(n,r=>{this.data=r.val()},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),(e.photoUrl!==void 0||e.photoUrl!==void 0)&&(n.photoUrl=e.photoUrl),Object.keys(n).length>0&&await L1(this.#o,n);const r={...e};r.photoUrl!==void 0&&(r.photoUrl===void 0&&(r.photoUrl=r.photoUrl),delete r.photoUrl);const i=Qn(Pn,`users/${this.uid}`);await cC(i,r)}catch(n){throw this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#s&&(this.#s(),this.#s=null),this.#n&&(this.#n(),this.#n=null),jr.#t=null}}const be=jr.getInstance(),pk={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace"},mk={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터"},vk={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス"},gk={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城"},Za={en:pk,ko:mk,ja:vk,zh:gk};function jl(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Hm(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=jl(e);if(n!=="en")return n}return"en"}function _k(t){let e=jl(t)||Hm();function n(s){e=jl(s)}function r(){return e}function i(s,o={}){return((Za[e]??Za.en)[s]??Za.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:n,getLocale:r}}const Vm=Hm(),bk=_k(Vm),wk=Ws(Vm),Yi=jg(wk,t=>(e,n={})=>bk.t(e,n)),Wm=Ws("");function Jt(t){Wm.set(t)}var yk=N('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),Ek=N('<img alt="프로필" class="avatar-image svelte-38psow"/>'),Ck=N('<div class="avatar-fallback svelte-38psow"> </div>'),Ik=N('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),kk=N('<img class="avatar-image svelte-38psow"/>'),Tk=N('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),xk=N('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),Sk=N('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),Ak=N('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const Rk={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function Pk(t,e){qe(e,!0),Be(t,Rk);const n=()=>On(Wm,"$pageTitle",s),r=()=>On(ka,"$user",s),i=()=>On(Yi,"$t",s),[s,o]=Hi();let a=X(!1);async function l(){if((await fk()).success){const R=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(R)}y(a,!1)}function c(){return be.data?.displayName?be.data.displayName.charAt(0).toUpperCase():be.email?be.email.charAt(0).toUpperCase():"U"}function d(){y(a,!m(a))}function f(P){const R=document.querySelector(".dropdown-menu"),T=document.querySelector(".dropdown-trigger");R&&!R.contains(P.target)&&!T?.contains(P.target)&&y(a,!1)}yt(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}));var u=Ak(),v=p(u),g=p(v),b=_(p(g),2);{var E=P=>{var R=yk(),T=p(R),C=p(T,!0);h(T),h(R),ee(()=>S(C,n())),w(P,R)};V(b,P=>{n()&&P(E)})}h(g);var k=_(g,2),I=p(k);{var A=P=>{var R=xk(),T=se(R),C=p(T),M=p(C);ls(M,{size:16});var B=_(M,2),H=p(B,!0);h(B),h(C);var $=_(C,2),Y=p($);br(Y,{size:16});var le=_(Y,2),Z=p(le,!0);h(le),h($);var j=_($,2),Q=p(j);zs(Q,{size:16});var J=_(Q,2),F=p(J,!0);h(J),h(j);var x=_(j,2),z=p(x);z.__click=d;var W=p(z),G=p(W);{var fe=Se=>{var Ce=Ek();ee(()=>Fe(Ce,"src",be.data.photoUrl)),w(Se,Ce)},D=Se=>{var Ce=Ck(),Ge=p(Ce,!0);h(Ce),ee($t=>S(Ge,$t),[c]),w(Se,Ce)};V(G,Se=>{be.data?.photoUrl?Se(fe):Se(D,!1)})}h(W);var q=_(W,2),ie=p(q,!0);h(q),h(z);var ne=_(z,2);{var ge=Se=>{var Ce=Ik(),Ge=p(Ce),$t=p(Ge,!0);h(Ge);var Xt=_(Ge,4),Bt=p(Xt);Kr(Bt,{size:16});var Ct=_(Bt,2),Ht=p(Ct,!0);h(Ct),h(Xt);var Zt=_(Xt,4);Zt.__click=l;var vt=p(Zt);Fm(vt,{size:16});var Rt=_(vt,2),at=p(Rt,!0);h(Rt),h(Zt),h(Ce),ee((en,In,dt)=>{S($t,en),S(Ht,In),S(at,dt)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),w(Se,Ce)};V(ne,Se=>{m(a)&&Se(ge)})}h(x);var re=_(x,2),oe=p(re);cs(oe,{size:24}),h(re),h(T);var pe=_(T,2),me=p(pe),ue=p(me);ls(ue,{size:20}),h(me);var Te=_(me,2),Ne=p(Te);zs(Ne,{size:20}),h(Te);var U=_(Te,2),te=p(U);br(te,{size:20}),h(U);var ve=_(U,2),Me=p(ve),tt=p(Me);{var xe=Se=>{var Ce=kk();ee(Ge=>{Fe(Ce,"src",be.data.photoUrl),Fe(Ce,"alt",Ge)},[()=>i()("프로필")]),w(Se,Ce)},Re=Se=>{var Ce=Tk(),Ge=p(Ce,!0);h(Ce),ee($t=>S(Ge,$t),[c]),w(Se,Ce)};V(tt,Se=>{be.data?.photoUrl?Se(xe):Se(Re,!1)})}h(Me),h(ve);var He=_(ve,2),Et=p(He);cs(Et,{size:24}),h(He),h(pe),ee((Se,Ce,Ge,$t,Xt,Bt,Ct,Ht,Zt)=>{S(H,Se),S(Z,Ce),S(F,Ge),S(ie,be.data?.displayName||be.email),Fe(re,"title",$t),Fe(me,"title",Xt),Fe(Te,"title",Bt),Fe(U,"title",Ct),Fe(ve,"title",Ht),Fe(He,"title",Zt)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),w(P,R)},L=P=>{var R=Sk(),T=se(R),C=p(T),M=p(C);ls(M,{size:16});var B=_(M,2),H=p(B,!0);h(B),h(C);var $=_(C,2),Y=p($);br(Y,{size:16});var le=_(Y,2),Z=p(le,!0);h(le),h($);var j=_($,2),Q=p(j,!0);h(j);var J=_(j,2),F=p(J);cs(F,{size:20}),h(J),h(T);var x=_(T,2),z=p(x),W=p(z);ls(W,{size:20}),h(z);var G=_(z,2),fe=p(G);br(fe,{size:20}),h(G);var D=_(G,2),q=p(D);Kr(q,{size:20}),h(D);var ie=_(D,2),ne=p(ie);cs(ne,{size:24}),h(ie),h(x),ee((ge,re,oe,pe,me,ue,Te,Ne)=>{S(H,ge),S(Z,re),S(Q,oe),Fe(J,"title",pe),Fe(z,"title",me),Fe(G,"title",ue),Fe(D,"title",Te),Fe(ie,"title",Ne)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),w(P,R)};V(I,P=>{r()?P(A):P(L,!1)})}h(k),h(v),h(u),w(t,u),je(),o()}st(["click"]);customElements.define("sns-topbar",he(Pk,{},[],[],!0));var Nk=N('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),Lk=N('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),Ok=N('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const Dk={hash:"svelte-najsij",code:`\r
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}
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
  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-notice.svelte-najsij {padding:0.75rem;background-color:#f3f4f6;border-radius:0.375rem;font-size:0.75rem;color:#6b7280;text-align:center;}\r
\r
  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}\r
\r
  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}\r
\r
  /* 반응형: 모바일에서는 숨김 */\r
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}\r
  }`};function Mk(t,e){qe(e,!1),Be(t,Dk);const n=()=>On(Yi,"$t",i),r=()=>On(ka,"$user",i),[i,s]=Hi();Qt();var o=Ok(),a=p(o),l=p(a),c=p(l,!0);h(l);var d=_(l,2),f=p(d),u=p(f);$m(u,{size:20});var v=_(u,2),g=p(v,!0);h(v),h(f);var b=_(f,2),E=p(b);br(E,{size:20});var k=_(E,2),I=p(k,!0);h(k),h(b);var A=_(b,2),L=p(A);zs(L,{size:20});var P=_(L,2),R=p(P,!0);h(P),h(A);var T=_(A,2),C=p(T);Kr(C,{size:20});var M=_(C,2),B=p(M,!0);h(M),h(T);var H=_(T,2),$=p(H);mu($,{size:20});var Y=_($,2),le=p(Y,!0);h(Y),h(H),h(d);var Z=_(d,4),j=p(Z),Q=p(j,!0);h(j);var J=_(j,2),F=p(J);{var x=vt=>{var Rt=Nk(),at=p(Rt);Kr(at,{size:16});var en=_(at,2),In=p(en,!0);h(en),h(Rt),ee(dt=>S(In,dt),[()=>n()("회원정보수정")]),w(vt,Rt)},z=vt=>{var Rt=Lk(),at=se(Rt),en=p(at);Um(en,{size:16});var In=_(en,2),dt=p(In,!0);h(In),h(at);var De=_(at,2),ht=p(De);Kr(ht,{size:16});var ft=_(ht,2),It=p(ft,!0);h(ft),h(De),ee((kn,hn)=>{S(dt,kn),S(It,hn)},[()=>n()("로그인"),()=>n()("회원가입")]),w(vt,Rt)};V(F,vt=>{r()?vt(x):vt(z,!1)})}h(J),h(Z);var W=_(Z,4),G=p(W),fe=p(G);zs(fe,{size:16});var D=_(fe,2),q=p(D,!0);h(D),h(G);var ie=_(G,2),ne=_(p(ie),2),ge=p(ne,!0);h(ne);var re=_(ne,2);ql(re,{size:12,class:"external-icon"}),h(ie);var oe=_(ie,2),pe=p(oe);br(pe,{size:16});var me=_(pe,2),ue=p(me,!0);h(me);var Te=_(me,2);ql(Te,{size:12,class:"external-icon"}),h(oe);var Ne=_(oe,2),U=p(Ne);Dm(U,{size:16});var te=_(U,2),ve=p(te,!0);h(te),h(Ne),h(W);var Me=_(W,2),tt=p(Me),xe=p(tt,!0);h(tt);var Re=_(tt,2),He=p(Re,!0);h(Re),h(Me);var Et=_(Me,2),Se=p(Et),Ce=p(Se),Ge=p(Ce,!0);h(Ce);var $t=_(Ce,2),Xt=p($t,!0);h($t),h(Se),h(Et);var Bt=_(Et,2),Ct=p(Bt),Ht=p(Ct,!0),Zt=_(Ht,2);h(Ct),h(Bt),h(a),h(o),ee((vt,Rt,at,en,In,dt,De,ht,ft,It,kn,hn,ar,$r,lr,Tn,tn)=>{S(c,vt),S(g,Rt),S(I,at),S(R,en),S(B,In),S(le,dt),S(Q,De),S(q,ht),S(ge,ft),S(ue,It),S(ve,kn),S(xe,hn),S(He,ar),S(Ge,$r),S(Xt,lr),S(Ht,Tn),S(Zt,` ${tn??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어전환기능안내"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),w(t,o),je(),s()}customElements.define("sns-left-sidebar",he(Mk,{},[],[],!0));var $k=N('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const Uk={hash:"svelte-3epon2",code:`\r
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
  }`};function Fk(t,e){qe(e,!0),Be(t,Uk);const n=()=>On(Yi,"$t",r),[r,i]=Hi();let s=X(xt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=$k(),a=p(o),l=p(a),c=p(l,!0);h(l);var d=_(l,2),f=p(d),u=p(f),v=p(u);Kr(v,{size:20}),h(u);var g=_(u,2),b=p(g),E=p(b,!0);h(b);var k=_(b,2),I=p(k,!0);h(k),h(g),h(f);var A=_(f,2),L=p(A),P=p(L);jm(P,{size:20}),h(L);var R=_(L,2),T=p(R),C=p(T,!0);h(T);var M=_(T,2),B=p(M,!0);h(M),h(R),h(A);var H=_(A,2),$=p(H),Y=p($);mu(Y,{size:20}),h($);var le=_($,2),Z=p(le),j=p(Z,!0);h(Z);var Q=_(Z,2),J=p(Q,!0);h(Q);var F=_(Q,2),x=p(F,!0);h(F),h(le),h(H);var z=_(H,2),W=p(z),G=p(W);br(G,{size:20}),h(W);var fe=_(W,2),D=p(fe),q=p(D,!0);h(D);var ie=_(D,2),ne=p(ie,!0);h(ie),h(fe),h(z),h(d);var ge=_(d,2),re=p(ge,!0);h(ge),h(a),h(o),ee((oe,pe,me,ue,Te,Ne,U)=>{S(c,oe),S(E,pe),S(I,m(s).totalUsers),S(C,me),S(B,m(s).totalScore),S(j,ue),S(J,m(s).totalPosts),S(x,Te),S(q,Ne),S(ne,m(s).totalMessages),S(re,U)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),w(t,o),je(),i()}customElements.define("sns-right-sidebar",he(Fk,{},[],[],!0));var zk=N('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const qk={hash:"svelte-um1xbq",code:`\r
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
  }`};function jk(t,e){Be(t,qk);var n=zk(),r=p(n),i=_(r,2),s=p(i);vn(s,1,"left-sidebar svelte-um1xbq");var o=_(s,2),a=p(o);Xe(a,e,"default",{}),h(o);var l=_(o,2);vn(l,1,"right-sidebar svelte-um1xbq"),h(i),h(n),w(t,n)}customElements.define("sns-layout",he(jk,{},["default"],[],!0));var Bk=N('<div class="icon-container svelte-m3h71q"> </div>'),Hk=N('<p class="hint-box svelte-m3h71q"> </p>'),Vk=N('<p class="gpl-box svelte-m3h71q"> </p>'),Wk=N('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),Gk=N('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),Kk=N('<div class="accordion svelte-m3h71q"></div>');const Yk={hash:"svelte-m3h71q",code:`\r
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
  }`};function Qk(t,e){qe(e,!0),Be(t,Yk);let n=Ve(e,"items",7,"[]"),r=Ve(e,"type",7,"single"),i=Ve(e,"collapsible",7,!0),s=nl(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=nl(()=>()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=X(xt(new Set));function l(u){const v=new Set(m(a));r()==="single"?v.has(u)?m(o)&&v.delete(u):(v.clear(),v.add(u)):v.has(u)?v.delete(u):v.add(u),y(a,v,!0)}function c(u){return m(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),ze()},get type(){return r()},set type(u="single"){r(u),ze()},get collapsible(){return i()},set collapsible(u=!0){i(u),ze()}},f=Kk();return zt(f,21,()=>m(s),gr,(u,v,g)=>{var b=Gk(),E=p(b);E.__click=()=>l(g);var k=p(E),I=p(k);{var A=H=>{var $=Bk(),Y=p($,!0);h($),ee(()=>S(Y,m(v).icon)),w(H,$)};V(I,H=>{m(v).icon&&H(A)})}var L=_(I,2),P=p(L,!0);h(L),h(k);var R=_(k,2);let T;var C=p(R);pu(C,{size:20}),h(R),h(E);var M=_(E,2);{var B=H=>{var $=Wk(),Y=p($),le=p(Y,!0);h(Y);var Z=_(Y,2);{var j=F=>{var x=Hk(),z=p(x,!0);h(x),ee(()=>S(z,m(v).hint)),w(F,x)};V(Z,F=>{m(v).hint&&F(j)})}var Q=_(Z,2);{var J=F=>{var x=Vk(),z=p(x,!0);h(x),ee(()=>S(z,m(v).gpl)),w(F,x)};V(Q,F=>{m(v).gpl&&F(J)})}h($),ee(()=>S(le,m(v).content)),w(H,$)};V(M,H=>{c(g)&&H(B)})}h(b),ee((H,$)=>{Fe(E,"aria-expanded",H),S(P,m(v).title),T=vn(R,1,"chevron svelte-m3h71q",null,T,$)},[()=>c(g),()=>({"rotate-180":c(g)})]),w(u,b)}),h(f),w(t,f),je(d)}st(["click"]);customElements.define("sns-accordion",he(Qk,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var Jk=N('<div class="gpl-badge svelte-1ubq0t6"> </div>'),Xk=N('<div class="hint svelte-1ubq0t6"> </div>'),Zk=N('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),eT=N('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),tT=N('<div class="todo-description svelte-1ubq0t6"> </div>'),nT=N('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),rT=N('<div class="todo-subitems svelte-1ubq0t6"></div>'),iT=N('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),sT=N('<span class="badge svelte-1ubq0t6"> </span>'),oT=N('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const aT={hash:"svelte-1ubq0t6",code:`\r
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
  }`};function Gm(t,e){qe(e,!0),Be(t,aT);const n=()=>On(Yi,"$t",r),[r,i]=Hi();let s=X(null);function o(dt){y(s,m(s)===dt?null:dt,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var d=oT(),f=p(d),u=p(f),v=p(u);h(u),h(f);var g=_(f,2),b=p(g),E=p(b,!0);h(b);var k=_(b,2),I=p(k),A=_(I),L=p(A,!0);h(A);var P=_(A);h(k),h(g);var R=_(g,2),T=p(R),C=p(T,!0);h(T);var M=_(T,2),B=p(M),H=_(p(B),2),$=p(H,!0);h(H);var Y=_(H,2),le=p(Y,!0);h(Y),h(B);var Z=_(B,2),j=_(p(Z),2),Q=p(j,!0);h(j);var J=_(j,2),F=p(J,!0);h(J),h(Z);var x=_(Z,2),z=_(p(x),2),W=p(z,!0);h(z);var G=_(z,2),fe=p(G,!0);h(G),h(x);var D=_(x,2),q=_(p(D),2),ie=p(q,!0);h(q);var ne=_(q,2),ge=p(ne,!0);h(ne),h(D),h(M),h(R);var re=_(R,2),oe=p(re),pe=p(oe,!0);h(oe);var me=_(oe,2);zt(me,21,()=>a,gr,(dt,De)=>{var ht=eT(),ft=p(ht);ft.__click=()=>o(m(De).id);var It=p(ft),kn=p(It,!0);h(It);var hn=_(It,2);let ar;var $r=p(hn);pu($r,{size:20}),h(hn),h(ft);var lr=_(ft,2);{var Tn=tn=>{var Ur=Zk(),Fr=p(Ur),Qi=p(Fr,!0);h(Fr);var pi=_(Fr,2);{var Ji=Pt=>{var kt=Jk(),zn=p(kt,!0);h(kt),ee(xn=>S(zn,xn),[()=>n()("home.aiTruth.item3.gpl")]),w(Pt,kt)};V(pi,Pt=>{m(De).showGpl&&Pt(Ji)})}var rt=_(pi,2);{var fn=Pt=>{var kt=Xk(),zn=p(kt,!0);h(kt),ee(xn=>S(zn,xn),[()=>n()(m(De).hintKey)]),w(Pt,kt)};V(rt,Pt=>{m(De).hintKey&&Pt(fn)})}h(Ur),ee(Pt=>S(Qi,Pt),[()=>n()(m(De).contentKey)]),w(tn,Ur)};V(lr,tn=>{m(s)===m(De).id&&tn(Tn)})}h(ht),ee(tn=>{Fe(ft,"aria-expanded",m(s)===m(De).id),S(kn,tn),ar=vn(hn,1,"accordion-icon svelte-1ubq0t6",null,ar,{open:m(s)===m(De).id})},[()=>n()(m(De).titleKey)]),w(dt,ht)}),h(me),h(re);var ue=_(re,2),Te=p(ue),Ne=p(Te,!0);h(Te);var U=_(Te,2);zt(U,21,()=>l,gr,(dt,De)=>{var ht=iT(),ft=p(ht),It=p(ft);let kn;var hn=p(It);{var ar=rt=>{Fl(rt,{size:20})},$r=rt=>{zl(rt,{size:20})};V(hn,rt=>{m(De).completed?rt(ar):rt($r,!1)})}h(It);var lr=_(It,2),Tn=p(lr);let tn;var Ur=p(Tn,!0);h(Tn);var Fr=_(Tn,2);{var Qi=rt=>{var fn=tT(),Pt=p(fn,!0);h(fn),ee(kt=>S(Pt,kt),[()=>n()(m(De).descriptionKey)]),w(rt,fn)};V(Fr,rt=>{m(De).descriptionKey&&rt(Qi)})}h(lr),h(ft);var pi=_(ft,2);{var Ji=rt=>{var fn=rT();zt(fn,21,()=>m(De).subitems,gr,(Pt,kt)=>{var zn=nT(),xn=p(zn);let so;var Ta=p(xn);{var uv=cr=>{Fl(cr,{size:16})},dv=cr=>{zl(cr,{size:16})};V(Ta,cr=>{m(kt).completed?cr(uv):cr(dv,!1)})}h(xn);var xa=_(xn,2);let vu;var hv=p(xa,!0);h(xa),h(zn),ee(cr=>{so=vn(xn,1,"todo-subicon svelte-1ubq0t6",null,so,{completed:m(kt).completed}),vu=vn(xa,1,"todo-subtext svelte-1ubq0t6",null,vu,{completed:m(kt).completed}),S(hv,cr)},[()=>n()(m(kt).key)]),w(Pt,zn)}),h(fn),w(rt,fn)};V(pi,rt=>{m(De).subitems.length>0&&rt(Ji)})}h(ht),ee(rt=>{kn=vn(It,1,"todo-icon svelte-1ubq0t6",null,kn,{completed:m(De).completed}),tn=vn(Tn,1,"todo-label svelte-1ubq0t6",null,tn,{completed:m(De).completed}),S(Ur,rt)},[()=>n()(m(De).labelKey)]),w(dt,ht)}),h(U),h(ue);var te=_(ue,2),ve=p(te),Me=p(ve,!0);h(ve);var tt=_(ve,2),xe=p(tt),Re=p(xe),He=p(Re,!0);h(Re);var Et=_(Re,1,!0);h(xe);var Se=_(xe,2);zt(Se,21,()=>c,gr,(dt,De)=>{var ht=sT(),ft=p(ht,!0);h(ht),ee(It=>S(ft,It),[()=>n()(m(De))]),w(dt,ht)}),h(Se),h(tt),h(te);var Ce=_(te,2),Ge=p(Ce),$t=p(Ge,!0);h(Ge);var Xt=_(Ge,2),Bt=p(Xt),Ct=p(Bt,!0);h(Bt);var Ht=_(Bt,2),Zt=p(Ht),vt=_(Zt),Rt=p(vt,!0);h(vt);var at=_(vt,1,!0);h(Ht);var en=_(Ht,2),In=p(en,!0);h(en),h(Xt),h(Ce),h(d),ee((dt,De,ht,ft,It,kn,hn,ar,$r,lr,Tn,tn,Ur,Fr,Qi,pi,Ji,rt,fn,Pt,kt,zn,xn,so,Ta)=>{S(v,`✨ ${dt??""}`),S(E,De),S(I,`${ht??""} `),S(L,ft),S(P,` ${It??""}`),S(C,kn),S($,hn),S(le,ar),S(Q,$r),S(F,lr),S(W,Tn),S(fe,tn),S(ie,Ur),S(ge,Fr),S(pe,Qi),S(Ne,pi),S(Me,Ji),S(He,rt),S(Et,fn),S($t,Pt),S(Ct,kt),S(Zt,`${zn??""} `),S(Rt,xn),S(at,so),S(In,Ta)},[()=>n()("home.vibeBanner"),()=>n()("home.title"),()=>n()("home.description.part1"),()=>n()("home.description.linkText"),()=>n()("home.description.part2"),()=>n()("home.techStack.title"),()=>n()("home.techStack.svelte"),()=>n()("home.techStack.svelteDesc"),()=>n()("home.techStack.flutter"),()=>n()("home.techStack.flutterDesc"),()=>n()("home.techStack.firebase"),()=>n()("home.techStack.firebaseDesc"),()=>n()("home.techStack.dokplay"),()=>n()("home.techStack.dokplayDesc"),()=>n()("home.aiTruth.title"),()=>n()("home.todo.title"),()=>n()("home.overview.title"),()=>n()("home.overview.brand"),()=>n()("home.overview.description"),()=>n()("home.aiChange.title"),()=>n()("home.aiChange.description"),()=>n()("home.aiChange.emphasis"),()=>n()("home.aiChange.highlight"),()=>n()("home.aiChange.conclusion"),()=>n()("home.aiChange.hint")]),w(t,d),je(),i()}st(["click"]);he(Gm,{},[],[],!0);var lT=N('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx">전화번호로 간편하게 로그인하세요.</p> <phone-login></phone-login></div>',2),cT=N('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx">환영합니다!</h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx">홈으로 이동</a></div>'),uT=N('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const dT={hash:"svelte-1mz53xx",code:`\r
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
  }`};function Km(t,e){qe(e,!1),Be(t,dT);const n=()=>On(ka,"$user",i),r=()=>On(Yi,"$t",i),[i,s]=Hi();function o(v){console.log("Login successful:",v.detail),alert(`로그인 성공!
전화번호: ${v.detail.phoneNumber}`),window.location.href="/"}function a(v){console.error("Login error:",v.detail),alert(`로그인 실패: ${v.detail.error}`)}Qt();var l=uT(),c=p(l),d=p(c);{var f=v=>{var g=lT(),b=p(g),E=p(b,!0);h(b);var k=_(b,4);h(g),ee(I=>S(E,I),[()=>r()("로그인")]),Ss("login-success",k,o),Ss("login-error",k,a),w(v,g)},u=v=>{var g=cT(),b=_(p(g),2),E=p(b);h(b),rn(2),h(g),ee(()=>S(E,`${n().phoneNumber??""}로 로그인하셨습니다.`)),w(v,g)};V(d,v=>{n()?v(u,!1):v(f)})}h(c),h(l),w(t,l),je(),s()}he(Km,{},[],[],!0);var hT=N('<button class="menu-item svelte-163o8b2"> </button>'),fT=N('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2">아래에서 이동할 페이지를 선택하세요</p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const pT={hash:"svelte-163o8b2",code:`\r
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
  }`};function Ym(t,e){qe(e,!1),Be(t,pT),yt(()=>{Jt("메뉴")});function n(a){window.history.pushState({},"",a),window.dispatchEvent(new PopStateEvent("popstate"))}const r=[{label:"홈",path:"/"},{label:"로그인",path:"/user/login"},{label:"사용자 프로필",path:"/user/profile"},{label:"게시물 목록",path:"/post/list"},{label:"게시물 상세 (예: ID:123)",path:"/post/detail/123"},{label:"채팅 목록",path:"/chat/list"},{label:"설정",path:"/settings"},{label:"앱 정보",path:"/about"},{label:"도움말",path:"/help"},{label:"이용 약관",path:"/terms"},{label:"개인정보 처리방침",path:"/privacy"},{label:"문의하기",path:"/contact"},{label:"[개발] 테스트 게시글 생성",path:"/dev/generate-posts"}];Qt();var i=fT(),s=p(i),o=_(p(s),2);zt(o,5,()=>r,a=>a.path,(a,l)=>{var c=hT();c.__click=()=>n(m(l).path);var d=p(c,!0);h(c),ee(()=>S(d,m(l).label)),w(a,c)}),h(o),h(s),h(i),w(t,i),je()}st(["click"]);he(Ym,{},[],[],!0);var mT=N('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),vT=N('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3">사진 없음</span></div>'),gT=N('<button type="button" class="photo-remove-button svelte-17u94r3" aria-label="프로필 사진 제거"><!></button>'),_T=N('<p class="upload-status svelte-17u94r3">사진을 저장하는 중입니다...</p>'),bT=N('<div class="message-box success-message svelte-17u94r3"> </div>'),wT=N('<div class="message-box error-message svelte-17u94r3"> </div>'),yT=N('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3">프로필 사진</label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;" aria-label="프로필 사진 선택"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3">프로필 사진을 클릭하여 변경</p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName">닉네임</label> <input type="text" id="displayName" class="form-input svelte-17u94r3" placeholder="닉네임을 입력하세요" maxlength="50" required/> <p class="form-helper svelte-17u94r3">최대 50자까지 입력할 수 있습니다</p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender">성별</label> <select id="gender" class="form-select svelte-17u94r3"><option>선택하지 않음</option><option>남자</option><option>여자</option><option>기타</option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth">생년월일</label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3">YYYY-MM-DD 형식으로 선택해주세요</p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3">취소</button></div></form></div>');const ET={hash:"svelte-17u94r3",code:`
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
  }`};function Qm(t,e){qe(e,!0),Be(t,ET);let n=X(xt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),r=X(null),i=X(null),s=X(!1),o=X(!1),a=X(null),l=X(null),c=null,d=null;function f(U){y(a,U,!0),c&&clearTimeout(c),c=setTimeout(()=>{y(a,null),c=null},3e3)}function u(U){y(l,U,!0),d&&clearTimeout(d),d=setTimeout(()=>{y(l,null),d=null},5e3)}tf(()=>{c&&clearTimeout(c),d&&clearTimeout(d)}),yt(()=>{Jt("프로필 수정")}),Jr(()=>{if(be.data){m(n).displayName=be.data.displayName||"",m(n).gender=be.data.gender||"",m(n).dateOfBirth=be.data.dateOfBirth||"";const U=be.data.photoUrl??be.data.photoURL??"";m(n).photoUrl=U,y(r,U||null,!0)}});function v(){m(o)||m(i)?.click()}async function g(U){const ve=U.currentTarget?.files?.[0];if(!ve)return;if(m(o)){u("다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.");return}if(!be.isAuthenticated||!be.uid){u("로그인 후 이용해주세요.");return}if(!ve.type.startsWith("image/")){u("이미지 파일만 선택 가능합니다.");return}if(ve.size>5*1024*1024){u("파일 크기는 5MB 이하여야 합니다.");return}const Me=m(r),tt=m(n).photoUrl,xe=new FileReader;xe.onload=Re=>{const He=Re.target?.result;typeof He=="string"&&y(r,He,!0)},xe.readAsDataURL(ve);try{await E(ve)}catch{y(r,Me,!0),m(n).photoUrl=tt,m(i)&&(m(i).value="")}}async function b(){if(m(o))return;if(!be.isAuthenticated||!be.uid){u("로그인 후 이용해주세요.");return}const U=m(r),te=m(n).photoUrl;y(r,null),m(n).photoUrl="",m(i)&&(m(i).value="");try{y(o,!0),await be.updateProfile({photoUrl:null}),f("프로필 사진이 제거되었습니다.")}catch(ve){console.error("프로필 사진 제거 오류:",ve),u(`사진 제거 실패: ${ve.message||"알 수 없는 오류가 발생했습니다."}`),y(r,U,!0),m(n).photoUrl=te}finally{y(o,!1)}}async function E(U,{showSuccess:te=!0}={}){if(!be.isAuthenticated||!be.uid)throw u("로그인 후 이용해주세요."),new Error("User is not authenticated");try{y(o,!0);const ve=U.name.split(".").pop()?.toLowerCase()||"jpg",Me=`profile_${be.uid}_${Date.now()}.${ve}`,tt=MI(qI,`users/${be.uid}/profile/${Me}`),xe=await OI(tt,U),Re=await DI(xe.ref);return m(n).photoUrl=Re,y(r,Re,!0),await be.updateProfile({photoUrl:Re}),te&&f("프로필 사진이 저장되었습니다."),Re}catch(ve){throw console.error("프로필 사진 업로드 오류:",ve),u(`사진 저장 실패: ${ve.message||"알 수 없는 오류가 발생했습니다."}`),ve}finally{y(o,!1),m(i)&&(m(i).value="")}}async function k(U){U.preventDefault(),y(s,!0),y(l,null),y(a,null);try{let te=m(n).photoUrl;const ve=m(i)?.files?.[0];if(ve)try{te=await E(ve,{showSuccess:!1})}catch{y(s,!1);return}const Me={displayName:m(n).displayName,gender:m(n).gender,dateOfBirth:m(n).dateOfBirth,photoUrl:te||null};await be.updateProfile(Me),f("프로필이 성공적으로 업데이트되었습니다!"),console.log("프로필 업데이트 완료:",Me)}catch(te){console.error("프로필 업데이트 오류:",te),u(`오류: ${te.message||"알 수 없는 오류가 발생했습니다."}`)}finally{y(s,!1)}}function I(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var A=yT(),L=p(A),P=p(L),R=_(p(P),2),T=p(R);T.__change=g,lc(T,U=>y(i,U),()=>m(i));var C=_(T,2),M=p(C);M.__click=v;var B=p(M);{var H=U=>{var te=mT();ee(()=>oc(te,`background-image: url("${m(r)}")`)),w(U,te)},$=U=>{var te=vT();w(U,te)};V(B,U=>{m(r)?U(H):U($,!1)})}h(M);var Y=_(M,2);{var le=U=>{var te=gT();te.__click=b;var ve=p(te);Bm(ve,{size:18,"stroke-width":3}),h(te),ee(()=>te.disabled=m(s)||m(o)),w(U,te)};V(Y,U=>{m(r)&&U(le)})}var Z=_(Y,2),j=p(Z);Mm(j,{size:20,"stroke-width":2}),h(Z),h(C);var Q=_(C,4);{var J=U=>{var te=_T();w(U,te)};V(Q,U=>{m(o)&&U(J)})}h(R),h(P);var F=_(P,2),x=_(p(F),2);Li(x),rn(2),h(F);var z=_(F,2),W=_(p(z),2),G=p(W);G.value=G.__value="";var fe=_(G);fe.value=fe.__value="male";var D=_(fe);D.value=D.__value="female";var q=_(D);q.value=q.__value="other",h(W),h(z);var ie=_(z,2),ne=_(p(ie),2);Li(ne),rn(2),h(ie);var ge=_(ie,2);{var re=U=>{var te=bT(),ve=p(te);h(te),ee(()=>S(ve,`✅ ${m(a)??""}`)),w(U,te)};V(ge,U=>{m(a)&&U(re)})}var oe=_(ge,2);{var pe=U=>{var te=wT(),ve=p(te);h(te),ee(()=>S(ve,`⚠️ ${m(l)??""}`)),w(U,te)};V(oe,U=>{m(l)&&U(pe)})}var me=_(oe,2),ue=p(me),Te=p(ue,!0);h(ue);var Ne=_(ue,2);Ne.__click=I,h(me),h(L),h(A),ee(()=>{M.disabled=m(s)||m(o),Fe(M,"aria-label",m(r)?"프로필 사진 변경":"프로필 사진 추가"),x.disabled=m(s),W.disabled=m(s),ne.disabled=m(s),ue.disabled=m(s)||m(o)||!be.isAuthenticated,S(Te,m(s)?"저장 중...":"저장"),Ne.disabled=m(s)}),Ss("submit",L,k),Oi(x,()=>m(n).displayName,U=>m(n).displayName=U),ac(W,()=>m(n).gender,U=>m(n).gender=U),Oi(ne,()=>m(n).dateOfBirth,U=>m(n).dateOfBirth=U),w(t,A),je()}st(["change","click"]);he(Qm,{},[],[],!0);var CT=N('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),IT=N('<div class="loading-container svelte-a4suww"><!></div>'),kT=N('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),TT=N('<div class="error-container svelte-a4suww"><!></div>'),xT=N('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),ST=N('<div class="empty-container svelte-a4suww"><!></div>'),AT=N('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),RT=N('<div class="item-wrapper svelte-a4suww"><!></div>'),PT=N('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),NT=N('<div class="loading-more svelte-a4suww"><!></div>'),LT=N('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),OT=N('<div class="no-more svelte-a4suww"><!></div>'),DT=N('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),MT=N('<div class="database-list-view svelte-a4suww"><!></div>');const $T={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function Jm(t,e){qe(e,!0),Be(t,$T);let n=Ve(e,"path",7,""),r=Ve(e,"pageSize",7,10),i=Ve(e,"orderBy",7,"createdAt"),s=Ve(e,"threshold",7,300),o=Ve(e,"reverse",7,!1),a=Ve(e,"item",7),l=Ve(e,"loading",7),c=Ve(e,"empty",7),d=Ve(e,"error",7),f=Ve(e,"loadingMore",7),u=Ve(e,"noMore",7),v=X(xt([])),g=X(!1),b=X(!0),E=X(!0),k=X(null),I=X(null),A=X(0),L=X(null),P=X(null),R=new Map,T=new Map;Jr(()=>{n()&&Pn&&B()}),Jr(()=>{if(m(P))return m(P).addEventListener("scroll",$),window.addEventListener("scroll",Y),()=>{m(P)?.removeEventListener("scroll",$),window.removeEventListener("scroll",Y)}});function C(x,z){if(x.length===0)return null;const W=x[x.length-1],G=W.data[z];return G!=null&&G!==""?(console.log(`DatabaseListView: Using cursor from '${z}':`,{value:G,key:W.key}),{value:G,key:W.key}):(console.warn(`DatabaseListView: Field '${z}' not found in last item, using key as fallback:`,W.key),{value:W.key,key:W.key})}function M(x,z){const W=`${x}`;if(R.has(W))return;const G=Qn(Pn,`${n()}/${x}`),fe=Ca(G,D=>{if(D.exists()){const q=D.val();m(v)[z]={key:x,data:q},y(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${x}`,q)}},D=>{console.error(`DatabaseListView: Error listening to item ${x}`,D)});R.set(W,fe)}async function B(){console.log("DatabaseListView: Loading initial data from",n()),y(b,!0),y(L,null),y(v,[],!0),T.clear(),R.clear(),y(k,null),y(I,null),y(E,!0),y(A,0);try{const x=Qn(Pn,n()),z=Dl(x,Ol(i()),Kd(r()+1)),W=await Gd(z);if(W.exists()){const G=[],fe=W.val();if(Object.entries(fe).forEach(([D,q])=>{G.push({key:D,data:q})}),console.log(`DatabaseListView: Initial query returned ${G.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",G.map(D=>({key:D.key,[i()]:D.data[i()]}))),o()&&G.reverse(),G.length>r()){y(E,!0),y(v,G.slice(0,r()),!0);const D=C(m(v),i());D?(y(k,D.value,!0),y(I,D.key,!0)):y(E,!1)}else if(y(E,!1),y(v,G,!0),m(v).length>0){const D=C(m(v),i());D&&(y(k,D.value,!0),y(I,D.key,!0))}T.set(0,m(v)),m(v).forEach((D,q)=>{M(D.key,q)}),console.log(`DatabaseListView: Page ${m(A)} - Loaded ${m(v).length} items, hasMore: ${m(E)}`)}else console.log("DatabaseListView: No data found"),y(v,[],!0),y(E,!1)}catch(x){console.error("DatabaseListView: Load error",x),y(L,x.message,!0)}finally{y(b,!1)}}async function H(){if(!(m(g)||!m(E))){il(A),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(A)}`),y(g,!0),y(L,null);try{if(m(k)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(E,!1),y(g,!1);return}const x=Qn(Pn,n()),z=Dl(x,Ol(i()),hC(m(k)),Kd(r()+1)),W=await Gd(z);if(W.exists()){const G=[],fe=W.val();Object.entries(fe).forEach(([ne,ge])=>{G.push({key:ne,data:ge})}),console.log(`DatabaseListView: Page ${m(A)} - startAfter query returned ${G.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(A)} - Items orderBy values:`,G.map(ne=>({key:ne.key,[i()]:ne.data[i()]}))),o()&&G.reverse();const D=new Set(m(v).map(ne=>ne.key)),q=G.filter(ne=>!D.has(ne.key));if(console.log(`DatabaseListView: Page ${m(A)} - After filtering duplicates: ${q.length} items`),q.length===0){console.log("DatabaseListView: No more data"),y(E,!1),y(g,!1);return}if(q.length>r()){y(E,!0);const ne=q.slice(0,r());y(v,[...m(v),...ne],!0);const ge=C(ne,i());ge?(y(k,ge.value,!0),y(I,ge.key,!0)):y(E,!1)}else if(y(E,!1),y(v,[...m(v),...q],!0),q.length>0){const ne=C(q,i());ne&&(y(k,ne.value,!0),y(I,ne.key,!0))}const ie=m(v).length-(q.length>r()?r():q.length);m(v).slice(ie).forEach((ne,ge)=>{M(ne.key,ie+ge)}),console.log(`DatabaseListView: Page ${m(A)} - Loaded ${q.length} more items, total: ${m(v).length}, hasMore: ${m(E)}`)}else console.log("DatabaseListView: No more data"),y(E,!1)}catch(x){console.error("DatabaseListView: Load more error",{name:x.name,message:x.message,code:x.code,toString:x.toString()}),y(L,x.message||x.code||"Unknown error",!0)}finally{y(g,!1)}}}function $(){if(!m(P)||m(g)||!m(E))return;const{scrollTop:x,scrollHeight:z,clientHeight:W}=m(P);z-(x+W)<s()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),H())}function Y(){if(m(g)||!m(E))return;const x=window.pageYOffset||document.documentElement.scrollTop,z=document.documentElement.scrollHeight,W=window.innerHeight;z-(x+W)<s()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),H())}function le(){console.log("DatabaseListView: Refreshing..."),B()}var Z={refresh:le,get path(){return n()},set path(x=""){n(x),ze()},get pageSize(){return r()},set pageSize(x=10){r(x),ze()},get orderBy(){return i()},set orderBy(x="createdAt"){i(x),ze()},get threshold(){return s()},set threshold(x=300){s(x),ze()},get reverse(){return o()},set reverse(x=!1){o(x),ze()},get item(){return a()},set item(x){a(x),ze()},get loading(){return l()},set loading(x){l(x),ze()},get empty(){return c()},set empty(x){c(x),ze()},get error(){return d()},set error(x){d(x),ze()},get loadingMore(){return f()},set loadingMore(x){f(x),ze()},get noMore(){return u()},set noMore(x){u(x),ze()}},j=MT(),Q=p(j);{var J=x=>{var z=IT(),W=p(z);{var G=D=>{var q=de(),ie=se(q);vi(ie,l),w(D,q)},fe=D=>{var q=CT();w(D,q)};V(W,D=>{l()?D(G):D(fe,!1)})}h(z),w(x,z)},F=x=>{var z=de(),W=se(z);{var G=D=>{var q=TT(),ie=p(q);{var ne=re=>{var oe=de(),pe=se(oe);vi(pe,d,()=>m(L)),w(re,oe)},ge=re=>{var oe=kT(),pe=_(p(oe),2),me=p(pe,!0);h(pe);var ue=_(pe,2);ue.__click=le,h(oe),ee(()=>S(me,m(L))),w(re,oe)};V(ie,re=>{d()?re(ne):re(ge,!1)})}h(q),w(D,q)},fe=D=>{var q=de(),ie=se(q);{var ne=re=>{var oe=ST(),pe=p(oe);{var me=Te=>{var Ne=de(),U=se(Ne);vi(U,c),w(Te,Ne)},ue=Te=>{var Ne=xT();w(Te,Ne)};V(pe,Te=>{c()?Te(me):Te(ue,!1)})}h(oe),w(re,oe)},ge=re=>{var oe=DT(),pe=p(oe);zt(pe,19,()=>m(v),U=>U.key,(U,te,ve)=>{var Me=RT(),tt=p(Me);{var xe=He=>{var Et=de(),Se=se(Et);vi(Se,a,()=>m(te),()=>m(ve)),w(He,Et)},Re=He=>{var Et=AT(),Se=p(Et),Ce=p(Se,!0);h(Se),h(Et),ee(Ge=>S(Ce,Ge),[()=>JSON.stringify(m(te).data,null,2)]),w(He,Et)};V(tt,He=>{a()?He(xe):He(Re,!1)})}h(Me),ee(()=>Fe(Me,"data-key",m(te).key)),w(U,Me)});var me=_(pe,2);{var ue=U=>{var te=NT(),ve=p(te);{var Me=xe=>{var Re=de(),He=se(Re);vi(He,f),w(xe,Re)},tt=xe=>{var Re=PT();w(xe,Re)};V(ve,xe=>{f()?xe(Me):xe(tt,!1)})}h(te),w(U,te)};V(me,U=>{m(g)&&U(ue)})}var Te=_(me,2);{var Ne=U=>{var te=OT(),ve=p(te);{var Me=xe=>{var Re=de(),He=se(Re);vi(He,u),w(xe,Re)},tt=xe=>{var Re=LT();w(xe,Re)};V(ve,xe=>{u()?xe(Me):xe(tt,!1)})}h(te),w(U,te)};V(Te,U=>{!m(E)&&!m(g)&&U(Ne)})}h(oe),w(re,oe)};V(ie,re=>{m(v).length===0?re(ne):re(ge,!1)},!0)}w(D,q)};V(W,D=>{m(L)?D(G):D(fe,!1)},!0)}w(x,z)};V(Q,x=>{m(b)?x(J):x(F,!1)})}return h(j),lc(j,x=>y(P,x),()=>m(P)),w(t,j),je(Z)}st(["click"]);he(Jm,{path:{},pageSize:{},orderBy:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var UT=N('<img class="svelte-r48pmi"/>'),FT=N('<div class="avatar-placeholder svelte-r48pmi"> </div>'),zT=N('<span class="badge-me svelte-r48pmi">나</span>'),qT=N('<p class="user-email svelte-r48pmi"> </p>'),jT=N('<p class="user-bio svelte-r48pmi"> </p>'),BT=N('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi">프로필 보기</button></div></div>'),HT=N('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p>사용자 목록을 불러오는 중...</p></div>'),VT=N('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi">등록된 사용자가 없습니다.</p></div>'),WT=N('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi">사용자 목록을 불러오는데 실패했습니다.</p> <p class="error-detail svelte-r48pmi"> </p></div>'),GT=N('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi">더 많은 사용자를 불러오는 중...</p></div>'),KT=N('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi">모든 사용자를 불러왔습니다.</p></div>');const YT={hash:"svelte-r48pmi",code:`\r
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
  }`};function Xm(t,e){qe(e,!1),Be(t,YT);const n=()=>On(Yi,"$t",r),[r,i]=Hi();function s(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"정보 없음"}yt(()=>{Jt(n()("사용자찾기"))});function o(a){a===be.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}Qt(),Jm(t,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(v,g=Nn)=>{var b=BT();b.__click=()=>o(g().key),b.__keydown=F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),o(g().key))};var E=p(b),k=p(E);{var I=F=>{var x=UT();ee(()=>{Fe(x,"src",g().data?.photoUrl??g().data?.photoURL),Fe(x,"alt",g().data?.displayName||"사용자")}),w(F,x)},A=F=>{var x=FT(),z=p(x,!0);h(x),ee(W=>S(z,W),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),w(F,x)};V(k,F=>{g().data?.photoUrl||g().data?.photoURL?F(I):F(A,!1)})}h(E);var L=_(E,2),P=p(L),R=p(P),T=_(R);{var C=F=>{var x=zT();w(F,x)};V(T,F=>{g().key===be.uid&&F(C)})}h(P);var M=_(P,2),B=p(M,!0);h(M);var H=_(M,2);{var $=F=>{var x=qT(),z=p(x,!0);h(x),ee(()=>S(z,g().data.email)),w(F,x)};V(H,F=>{g().data?.email&&F($)})}var Y=_(H,2);{var le=F=>{var x=jT(),z=p(x,!0);h(x),ee(()=>S(z,g().data.bio)),w(F,x)};V(Y,F=>{g().data?.bio&&F(le)})}var Z=_(Y,2),j=p(Z);h(Z),h(L);var Q=_(L,2),J=p(Q);J.__click=F=>{F.stopPropagation(),o(g().key)},h(Q),h(b),ee(F=>{S(R,`${(g().data?.displayName||"이름 없음")??""} `),S(B,g().key),S(j,`가입일: ${F??""}`)},[()=>s(g().data?.createdAt)]),w(v,b)},loading:v=>{var g=HT();w(v,g)},empty:v=>{var g=VT();w(v,g)},error:(v,g=Nn)=>{var b=WT(),E=_(p(b),4),k=p(E,!0);h(E),h(b),ee(()=>S(k,g())),w(v,b)},loadingMore:v=>{var g=GT();w(v,g)},noMore:v=>{var g=KT();w(v,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),je(),i()}st(["click","keydown"]);he(Xm,{},[],[],!0);async function QT(t,e,n,r,i){try{const s=Date.now(),o={uid:e,title:r,content:i,author:n,category:t,createdAt:s,updatedAt:s},a=Qn(Pn,`posts/${t}`);return{success:!0,postId:(await mm(a,o)).key}}catch(s){return console.error("게시글 생성 실패:",s),{success:!1,error:s.message}}}function JT(t,e=10,n){try{const r=Qn(Pn,`posts/${t}`),i=Dl(r,Ol("createdAt"),mC(e)),s=Ca(i,o=>{if(o.exists()){const a=[];o.forEach(l=>{a.push({postId:l.key,...l.val()})}),a.reverse(),n(a)}else n([])});return()=>{vm(r)}}catch(r){return console.error("게시글 조회 실패:",r),n([]),()=>{}}}const eh=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];var XT=N('<div class="loading-screen svelte-1r1wwfo"><p>로딩 중...</p></div>'),ZT=N("<button> </button>"),ex=N('<div class="empty-state svelte-1r1wwfo"><div class="empty-icon svelte-1r1wwfo">📝</div> <p class="empty-message svelte-1r1wwfo">게시글이 없습니다</p> <p class="empty-hint svelte-1r1wwfo">첫 번째 게시글을 작성해보세요!</p></div>'),tx=N('<div class="post-item svelte-1r1wwfo"><h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><span class="post-author svelte-1r1wwfo"> </span> <span class="post-date svelte-1r1wwfo"> </span></div></div>'),nx=N('<div class="posts-list svelte-1r1wwfo"></div>'),rx=N("<option> </option>"),ix=N('<div class="modal-backdrop svelte-1r1wwfo" role="presentation"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo">새 게시글 작성</h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo">카테고리</label> <select id="category" class="form-control svelte-1r1wwfo"><option>카테고리 선택</option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo">제목</label> <input id="title" type="text" placeholder="제목을 입력하세요" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo">내용</label> <textarea id="content" placeholder="내용을 입력하세요" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo">취소</button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),sx=N('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div> <button class="btn-create-post svelte-1r1wwfo">✏️ 글쓰기</button></div> <!></div> <!>',1);const ox={hash:"svelte-1r1wwfo",code:`\r
  /* 게시판 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:64rem;margin:0 auto;padding:2rem 1rem;}\r
\r
  /* 상단 도구 모음 (카테고리 + 글쓰기) */.toolbar.svelte-1r1wwfo {display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;padding-bottom:0.75rem;margin-bottom:1.5rem;border-bottom:1px solid #e5e7eb;}
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.75rem 1.5rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:background-color 0.2s ease;flex-shrink:0;}.btn-create-post.svelte-1r1wwfo:hover {background-color:#2563eb;}\r
\r
  /* 카테고리 탭 */.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;overflow-x:auto;flex:1;}.tab.svelte-1r1wwfo {padding:0.75rem 1rem;background-color:transparent;border:none;color:#6b7280;font-size:0.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:all 0.2s ease;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#1f2937;color:#ffffff;border-radius:0.25rem 0.25rem 0 0;}\r
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
  @media (max-width: 640px) {.post-list-container.svelte-1r1wwfo {padding:1rem;}.btn-create-post.svelte-1r1wwfo {width:100%;}.modal.svelte-1r1wwfo {width:calc(100% - 2rem);max-height:85vh;}.category-tabs.svelte-1r1wwfo {overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
  }`};function Zm(t,e){qe(e,!0),Be(t,ox);let n=X(null),r=X(""),i=X(!0);const s=new URLSearchParams(typeof window<"u"?window.location.search:"");let o=X(xt(s.get("category")||"community")),a=X(!1),l=X(""),c=X(""),d=X(""),f=X(!1),u=X(xt([]));yt(()=>{Jt("게시판");const P=si.onAuthStateChanged(async R=>{if(R){y(n,R.uid,!0);const T=R.displayName||R.email||"익명";y(r,T,!0)}else y(n,null),y(r,"");y(i,!1)});return()=>P()}),Jr(()=>{if(!m(i)){const P=JT(m(o),10,R=>{y(u,R,!0)});return()=>P()}});function v(){if(!m(n)){window.location.href="/user/login";return}y(a,!0)}function g(){y(a,!1),y(l,""),y(c,""),y(d,"")}async function b(){if(!m(l)){alert("카테고리를 선택해주세요.");return}if(!m(c).trim()){alert("제목을 입력해주세요.");return}if(!m(d).trim()){alert("내용을 입력해주세요.");return}if(!m(n)||!m(r)){alert("로그인 정보를 확인할 수 없습니다.");return}y(f,!0);try{const P=await QT(m(l),m(n),m(r),m(c),m(d));if(P.success){const R=m(l);y(a,!1),y(l,""),y(c,""),y(d,""),alert("게시글이 작성되었습니다.")}else alert(`게시글 저장 실패: ${P.error||"Unknown error"}`)}catch(P){console.error("게시글 저장 오류:",P),alert("게시글 저장 중 오류가 발생했습니다.")}finally{y(f,!1)}}function E(P){y(o,P,!0),window.history.pushState({},"",`/post/list?category=${P}`)}var k=de(),I=se(k);{var A=P=>{var R=XT();w(P,R)},L=P=>{var R=sx(),T=se(R),C=p(T),M=p(C);zt(M,21,()=>eh,j=>j.value,(j,Q)=>{var J=ZT();J.__click=()=>E(m(Q).value);var F=p(J,!0);h(J),ee(()=>{vn(J,1,`tab ${m(o)===m(Q).value?"active":""}`,"svelte-1r1wwfo"),S(F,m(Q).label)}),w(j,J)}),h(M);var B=_(M,2);B.__click=v,h(C);var H=_(C,2);{var $=j=>{var Q=ex();w(j,Q)},Y=j=>{var Q=nx();zt(Q,21,()=>m(u),J=>J.postId,(J,F)=>{var x=tx(),z=p(x),W=p(z,!0);h(z);var G=_(z,2),fe=p(G,!0);h(G);var D=_(G,2),q=p(D),ie=p(q);h(q);var ne=_(q,2),ge=p(ne,!0);h(ne),h(D),h(x),ee(re=>{S(W,m(F).title),S(fe,m(F).content),S(ie,`작성자: ${m(F).author??""}`),S(ge,re)},[()=>new Date(m(F).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),w(J,x)}),h(Q),w(j,Q)};V(H,j=>{m(u).length===0?j($):j(Y,!1)})}h(T);var le=_(T,2);{var Z=j=>{var Q=ix();Q.__click=()=>y(a,!1),Q.__keydown=ue=>ue.key==="Escape"&&y(a,!1);var J=p(Q);J.__click=ue=>ue.stopPropagation();var F=p(J),x=_(p(F),2);x.__click=()=>y(a,!1),h(F);var z=_(F,2),W=p(z),G=_(p(W),2),fe=p(G);fe.value=fe.__value="";var D=_(fe);zt(D,17,()=>eh,ue=>ue.value,(ue,Te)=>{var Ne=rx(),U=p(Ne,!0);h(Ne);var te={};ee(()=>{S(U,m(Te).label),te!==(te=m(Te).value)&&(Ne.value=(Ne.__value=m(Te).value)??"")}),w(ue,Ne)}),h(G),h(W);var q=_(W,2),ie=_(p(q),2);Li(ie),h(q);var ne=_(q,2),ge=_(p(ne),2);sg(ge),h(ne),h(z);var re=_(z,2),oe=p(re);oe.__click=g;var pe=_(oe,2);pe.__click=b;var me=p(pe,!0);h(pe),h(re),h(J),h(Q),ee(()=>{oe.disabled=m(f),pe.disabled=m(f),S(me,m(f)?"전송 중...":"전송")}),ac(G,()=>m(l),ue=>y(l,ue)),Oi(ie,()=>m(c),ue=>y(c,ue)),Oi(ge,()=>m(d),ue=>y(d,ue)),w(j,Q)};V(le,j=>{m(a)&&j(Z)})}w(P,R)};V(I,P=>{m(i)?P(A):P(L,!1)})}w(t,k),je()}st(["click","keydown"]);he(Zm,{},[],[],!0);var ax=N('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1sszjx6">게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1sszjx6">메뉴로 돌아가기</button></div></div>');const lx={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function ev(t,e){qe(e,!1),Be(t,lx),yt(()=>{Jt("게시물 상세")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=ax(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(ev,{},[],[],!0);var cx=N('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1xfn8v9">채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1xfn8v9">메뉴로 돌아가기</button></div></div>');const ux={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function tv(t,e){qe(e,!1),Be(t,ux),yt(()=>{Jt("채팅")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=cx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(tv,{},[],[],!0);var dx=N('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08">이 페이지는 공사중입니다</p> <p class="construction-description svelte-177ja08">설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-177ja08">메뉴로 돌아가기</button></div></div>');const hx={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function nv(t,e){qe(e,!1),Be(t,hx),yt(()=>{Jt("설정")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=dx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(nv,{},[],[],!0);var fx=N('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe">이 페이지는 공사중입니다</p> <p class="construction-description svelte-65loqe">앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-65loqe">메뉴로 돌아가기</button></div></div>');const px={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function rv(t,e){qe(e,!1),Be(t,px),yt(()=>{Jt("앱 정보")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=fx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(rv,{},[],[],!0);var mx=N('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna">이 페이지는 공사중입니다</p> <p class="construction-description svelte-19u7yna">도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-19u7yna">메뉴로 돌아가기</button></div></div>');const vx={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function iv(t,e){qe(e,!1),Be(t,vx),yt(()=>{Jt("도움말")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=mx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(iv,{},[],[],!0);var gx=N('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w">이 페이지는 공사중입니다</p> <p class="construction-description svelte-134dw7w">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-134dw7w">메뉴로 돌아가기</button></div></div>');const _x={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function sv(t,e){qe(e,!1),Be(t,_x),yt(()=>{Jt("이용약관")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=gx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(sv,{},[],[],!0);var bx=N('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj">이 페이지는 공사중입니다</p> <p class="construction-description svelte-8iwrwj">개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-8iwrwj">메뉴로 돌아가기</button></div></div>');const wx={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function ov(t,e){qe(e,!1),Be(t,wx),yt(()=>{Jt("개인정보처리방침")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=bx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(ov,{},[],[],!0);var yx=N('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1f7uyy3">문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1f7uyy3">메뉴로 돌아가기</button></div></div>');const Ex={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function av(t,e){qe(e,!1),Be(t,Ex),yt(()=>{Jt("문의하기")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Qt();var r=yx(),i=p(r),s=_(p(i),2);s.__click=n,h(i),h(r),w(t,r),je()}st(["click"]);he(av,{},[],[],!0);var Cx=N('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp">⚠️ 로그인이 필요합니다.</p> <a href="/user/login" class="svelte-uqnmwp">로그인하러 가기</a></div>'),Ix=N('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),kx=N('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),Tx=N('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp">실행 로그</h3> <div class="logs svelte-uqnmwp"></div></div>'),xx=N('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp">✅ 완료! 게시판 페이지에서 확인해보세요.</p> <a href="/post/list" class="btn-view svelte-uqnmwp">게시판 보기</a></div>'),Sx=N('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <!></div> <!> <!>',1),Ax=N('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp">📝 테스트 게시글 생성</h1> <p class="svelte-uqnmwp">각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.</p></div> <!></div></div>');const Rx={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0;color:#6b7280;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function lv(t,e){qe(e,!0),Be(t,Rx);let n=X(!1),r=X(xt({current:0,total:0,category:""})),i=X(xt([])),s=X(!1);yt(()=>{Jt("테스트 데이터 생성")});function o(k,I="info"){y(i,[...m(i),{message:k,type:I,time:new Date().toLocaleTimeString()}],!0)}const a={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},qna:{titles:["근처 좋은 병원 추천해주세요","택배 수령 어디서 하나요?","버스 노선 문의드립니다","주차장 이용 방법 알려주세요","쓰레기 배출 시간이 언제인가요?","세탁소 추천 부탁드려요","동네 도서관 이용 방법","반려동물 병원 어디가 좋나요?","자전거 보관소 위치 알려주세요"],contents:["{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?","{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.","{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?","{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]},market:{titles:["중고 자전거 판매합니다","안쓰는 가전제품 나눔해요","아이 장난감 저렴하게 팔아요","책장 정리 - 책 나눔","운동기구 판매합니다","여행 캐리어 팔아요","화분과 식물 나눔","게임기 판매합니다","옷장 정리 - 의류 판매"],contents:["{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!","집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!","{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!"]}},l={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function c(k){return k[Math.floor(Math.random()*k.length)]}function d(k){let I=k;for(const[A,L]of Object.entries(l)){const P=new RegExp(`\\{${A}\\}`,"g");I=I.replace(P,c(L))}return I}async function f(){if(!be.isAuthenticated||!be.uid){o("❌ 로그인이 필요합니다.","error");return}y(n,!0),y(s,!1),y(i,[],!0),o("✅ 테스트 데이터 생성 시작","success"),o(`사용자: ${be.data?.displayName||be.email}`,"info");const k=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];for(const I of k){y(r,{current:0,total:100,category:I.label},!0),o(`
📂 [${I.label}] 생성 중...`,"info");const A=a[I.value];let L=0;for(let P=0;P<100;P++)try{const R=d(c(A.titles)),T=d(c(A.contents)),C=Date.now(),M={uid:be.uid,title:R,content:T,author:be.data?.displayName||be.email||"익명",category:I.value,createdAt:C-Math.floor(Math.random()*30*24*60*60*1e3),updatedAt:C},B=Qn(Pn,`posts/${I.value}`);await mm(B,M),L++,y(r,{...m(r),current:P+1},!0),(P+1)%20===0&&o(`  ✓ ${P+1}/100 완료`,"success"),await new Promise(H=>setTimeout(H,50))}catch(R){o(`  ✗ 실패: ${R.message}`,"error")}o(`✅ [${I.label}] 완료: ${L}개 생성`,"success")}o(`
🎉 모든 테스트 데이터 생성 완료!`,"success"),o("총 400개의 게시글이 생성되었습니다.","success"),y(n,!1),y(s,!0)}var u=Ax(),v=p(u),g=_(p(v),2);{var b=k=>{var I=Cx();w(k,I)},E=k=>{var I=Sx(),A=se(I),L=p(A);L.__click=f;var P=p(L,!0);h(L);var R=_(L,2);{var T=$=>{var Y=Ix(),le=p(Y),Z=p(le,!0);h(le);var j=_(le,2),Q=p(j);h(j);var J=_(j,2),F=p(J);h(J),h(Y),ee(()=>{S(Z,m(r).category),oc(Q,`width: ${m(r).current/m(r).total*100}%`),S(F,`${m(r).current??""} / ${m(r).total??""}`)}),w($,Y)};V(R,$=>{m(n)&&$(T)})}h(A);var C=_(A,2);{var M=$=>{var Y=Tx(),le=_(p(Y),2);zt(le,21,()=>m(i),gr,(Z,j)=>{var Q=kx(),J=p(Q),F=p(J,!0);h(J);var x=_(J,2),z=p(x,!0);h(x),h(Q),ee(()=>{vn(Q,1,`log-item log-${m(j).type??""}`,"svelte-uqnmwp"),S(F,m(j).time),S(z,m(j).message)}),w(Z,Q)}),h(le),h(Y),w($,Y)};V(C,$=>{m(i).length>0&&$(M)})}var B=_(C,2);{var H=$=>{var Y=xx();w($,Y)};V(B,$=>{m(s)&&$(H)})}ee(()=>{L.disabled=m(n),S(P,m(n)?"생성 중...":"게시글 생성 시작")}),w(k,I)};V(g,k=>{be.isAuthenticated?k(E,!1):k(b)})}h(v),h(u),w(t,u),je()}st(["click"]);he(lv,{},[],[],!0);var Px=N('<sns-layout><main class="content svelte-1hwhcgc"><!></main></sns-layout>',2);const Nx={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 반응형 */`};function cv(t){Be(t,Nx);let e=X(xt(window.location.pathname));function n(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",n);var r=Px(),i=p(r),s=p(i);{var o=l=>{Km(l,{})},a=l=>{var c=de(),d=se(c);{var f=v=>{Ym(v,{})},u=v=>{var g=de(),b=se(g);{var E=I=>{Qm(I,{})},k=I=>{var A=de(),L=se(A);{var P=T=>{Xm(T,{})},R=T=>{var C=de(),M=se(C);{var B=$=>{Zm($,{})},H=$=>{var Y=de(),le=se(Y);{var Z=Q=>{ev(Q,{})},j=Q=>{var J=de(),F=se(J);{var x=W=>{tv(W,{})},z=W=>{var G=de(),fe=se(G);{var D=ie=>{nv(ie,{})},q=ie=>{var ne=de(),ge=se(ne);{var re=pe=>{rv(pe,{})},oe=pe=>{var me=de(),ue=se(me);{var Te=U=>{iv(U,{})},Ne=U=>{var te=de(),ve=se(te);{var Me=xe=>{sv(xe,{})},tt=xe=>{var Re=de(),He=se(Re);{var Et=Ce=>{ov(Ce,{})},Se=Ce=>{var Ge=de(),$t=se(Ge);{var Xt=Ct=>{av(Ct,{})},Bt=Ct=>{var Ht=de(),Zt=se(Ht);{var vt=at=>{lv(at,{})},Rt=at=>{Gm(at,{})};V(Zt,at=>{m(e)==="/dev/generate-posts"?at(vt):at(Rt,!1)},!0)}w(Ct,Ht)};V($t,Ct=>{m(e)==="/contact"?Ct(Xt):Ct(Bt,!1)},!0)}w(Ce,Ge)};V(He,Ce=>{m(e)==="/privacy"?Ce(Et):Ce(Se,!1)},!0)}w(xe,Re)};V(ve,xe=>{m(e)==="/terms"?xe(Me):xe(tt,!1)},!0)}w(U,te)};V(ue,U=>{m(e)==="/help"?U(Te):U(Ne,!1)},!0)}w(pe,me)};V(ge,pe=>{m(e)==="/about"?pe(re):pe(oe,!1)},!0)}w(ie,ne)};V(fe,ie=>{m(e)==="/settings"?ie(D):ie(q,!1)},!0)}w(W,G)};V(F,W=>{m(e)==="/chat/list"?W(x):W(z,!1)},!0)}w(Q,J)};V(le,Q=>{m(e).startsWith("/post/detail/")?Q(Z):Q(j,!1)},!0)}w($,Y)};V(M,$=>{m(e)==="/post/list"?$(B):$(H,!1)},!0)}w(T,C)};V(L,T=>{m(e)==="/user/list"?T(P):T(R,!1)},!0)}w(I,A)};V(b,I=>{m(e)==="/user/profile"?I(E):I(k,!1)},!0)}w(v,g)};V(d,v=>{m(e)==="/menu"?v(f):v(u,!1)},!0)}w(l,c)};V(s,l=>{m(e)==="/user/login"?l(o):l(a,!1)})}h(i),h(r),w(t,r)}he(cv,{},[],[],!0);ic(cv,{target:document.getElementById("app")});
