(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ah=!1;var Gl=Array.isArray,gv=Array.prototype.indexOf,Kl=Array.from,Co=Object.keys,Ss=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,lh=Object.getOwnPropertyDescriptors,_v=Object.prototype,bv=Array.prototype,Yl=Object.getPrototypeOf,Iu=Object.isExtensible;function ts(t){return typeof t=="function"}const Dn=()=>{};function wv(t){return t()}function ko(t){for(var e=0;e<t.length;e++)t[e]()}function ch(){var t,e,n=new Promise((r,i)=>{t=r,e=i});return{promise:n,resolve:t,reject:e}}function yv(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const At=2,Ql=4,na=8,lr=16,cr=32,zr=64,ra=128,Tt=1024,Ht=2048,ur=4096,Zt=8192,Zn=16384,Jl=32768,Or=65536,Cu=1<<17,Ev=1<<18,di=1<<19,uh=1<<20,hn=256,To=512,xo=32768,il=1<<21,Xl=1<<22,Qr=1<<23,Mn=Symbol("$state"),Zl=Symbol("legacy props"),Iv=Symbol(""),ki=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Cv=1,ec=3,Gi=8;function dh(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function kv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Tv(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sv(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Av(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Rv(){throw new Error("https://svelte.dev/e/hydration_failed")}function Pv(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Nv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Lv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ov(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Dv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ia=1,sa=2,hh=4,Mv=8,$v=16,Uv=1,Fv=2,fh=4,zv=8,qv=16,jv=1,Bv=2,ph="[",oa="[!",tc="]",Oi={},_t=Symbol(),Hv="http://www.w3.org/1999/xhtml",Vv="http://www.w3.org/2000/svg",Wv="@attach";function aa(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Gv(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Kv(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ce=!1;function Jt(t){ce=t}let Ce;function wt(t){if(t===null)throw aa(),Oi;return Ce=t}function ei(){return wt(qn(Ce))}function h(t){if(ce){if(qn(Ce)!==null)throw aa(),Oi;Ce=t}}function Qt(t=1){if(ce){for(var e=t,n=Ce;e--;)n=qn(n);Ce=n}}function So(t=!0){for(var e=0,n=Ce;;){if(n.nodeType===Gi){var r=n.data;if(r===tc){if(e===0)return n;e-=1}else(r===ph||r===oa)&&(e+=1)}var i=qn(n);t&&n.remove(),n=i}}function mh(t){if(!t||t.nodeType!==Gi)throw aa(),Oi;return t.data}function vh(t){return t===this.v}function gh(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function _h(t){return!gh(t,this.v)}let Ki=!1,Yv=!1;function Qv(){Ki=!0}let Je=null;function Di(t){Je=t}function je(t,e=!1,n){Je={p:Je,i:!1,c:null,e:null,s:t,x:null,l:Ki&&!e?{s:null,u:null,$:[]}:null}}function Be(t){var e=Je,n=e.e;if(n!==null){e.e=null;for(var r of n)Mh(r)}return t!==void 0&&(e.x=t),e.i=!0,Je=e.p,t??{}}function Hs(){return!Ki||Je!==null&&Je.l===null}let Kr=[];function bh(){var t=Kr;Kr=[],ko(t)}function qr(t){if(Kr.length===0&&!ps){var e=Kr;queueMicrotask(()=>{e===Kr&&bh()})}Kr.push(t)}function Jv(){for(;Kr.length>0;)bh()}function wh(t){var e=_e;if(e===null)return Ie.f|=Qr,t;if((e.f&Jl)===0){if((e.f&ra)===0)throw t;e.b.error(t)}else Mi(t,e)}function Mi(t,e){for(;e!==null;){if((e.f&ra)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const uo=new Set;let Oe=null,fs=null,wn=null,Ln=[],la=null,sl=!1,ps=!1;class Cn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#i=0;#n=0;#o=null;#s=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){Ln=[],fs=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#r(r,n);this.is_fork||this.#c(),this.#n>0||this.is_fork?(this.#l(n.effects),this.#l(n.render_effects),this.#l(n.block_effects)):(fs=this,Oe=null,ku(n.render_effects),ku(n.effects),fs=null,this.#o?.resolve()),wn=null}#r(e,n){e.f^=Tt;for(var r=e.first;r!==null;){var i=r.f,s=(i&(cr|zr))!==0,o=s&&(i&Tt)!==0,a=o||(i&Zt)!==0||this.skipped_effects.has(r);if((r.f&ra)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=Tt:(i&Ql)!==0?n.effects.push(r):Ks(r)&&((r.f&lr)!==0&&n.block_effects.push(r),Rs(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#l(n.effects),this.#l(n.render_effects),this.#l(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#l(e){for(const n of e)((n.f&Ht)!==0?this.#s:this.#a).push(n),St(n,Tt)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),wn?.set(e,e.v)}activate(){Oe=this}deactivate(){Oe=null,wn=null}flush(){if(this.activate(),Ln.length>0){if(yh(),Oe!==null&&Oe!==this)return}else this.#i===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#n===0){for(const e of this.#t)e();this.#t.clear()}this.#i===0&&this.#u()}#u(){if(uo.size>1){this.previous.clear();var e=wn,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of uo){if(i===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(n&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)Eh(c,o,a,l);if(Ln.length>0){Oe=i,i.apply();for(const c of Ln)i.#r(c,r);Ln=[],i.deactivate()}}}Oe=null,wn=e}this.committed=!0,uo.delete(this)}increment(e){this.#i+=1,e&&(this.#n+=1)}decrement(e){this.#i-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#s)St(e,Ht),ti(e);for(const e of this.#a)St(e,ur),ti(e);this.#s=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#o??=ch()).promise}static ensure(){if(Oe===null){const e=Oe=new Cn;uo.add(Oe),ps||Cn.enqueue(()=>{Oe===e&&e.flush()})}return Oe}static enqueue(e){qr(e)}apply(){}}function qe(t){var e=ps;ps=!0;try{for(var n;;){if(Jv(),Ln.length===0&&(Oe?.flush(),Ln.length===0))return la=null,n;yh()}}finally{ps=e}}function yh(){var t=Ai;sl=!0;try{var e=0;for(Au(!0);Ln.length>0;){var n=Cn.ensure();if(e++>1e3){var r,i;Xv()}n.process(Ln),xr.clear()}}finally{sl=!1,Au(t),la=null}}function Xv(){try{Av()}catch(t){Mi(t,la)}}let Kn=null;function ku(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Zn|Zt))===0&&Ks(r)&&(Kn=new Set,Rs(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Fh(r):r.fn=null),Kn?.size>0)){xr.clear();for(const i of Kn){if((i.f&(Zn|Zt))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)Kn.has(o)&&(Kn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Zn|Zt))===0&&Rs(l)}}Kn.clear()}}Kn=null}}function Eh(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const i of t.reactions){const s=i.f;(s&At)!==0?Eh(i,e,n,r):(s&(Xl|lr))!==0&&(s&Ht)===0&&Ih(i,e,r)&&(St(i,Ht),ti(i))}}function Ih(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const i of t.deps){if(e.includes(i))return!0;if((i.f&At)!==0&&Ih(i,e,n))return n.set(i,!0),!0}return n.set(t,!1),!1}function ti(t){for(var e=la=t;e.parent!==null;){e=e.parent;var n=e.f;if(sl&&e===_e&&(n&lr)!==0)return;if((n&(zr|cr))!==0){if((n&Tt)===0)return;e.f^=Tt}}Ln.push(e)}function Zv(t){let e=0,n=Dr(0),r;return()=>{dg()&&(m(n),ua(()=>(e===0&&(r=zn(()=>t(()=>ms(n)))),e+=1,()=>{qr(()=>{e-=1,e===0&&(r?.(),r=void 0,ms(n))})})))}}var eg=Or|di|ra;function tg(t,e,n){new ng(t,e,n)}class ng{parent;#t=!1;#e;#i=ce?Ce:null;#n;#o;#s;#a=null;#r=null;#l=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=Zv(()=>(this.#h=Dr(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#n=n,this.#o=r,this.parent=_e.b,this.#t=!!this.#n.pending,this.#s=hi(()=>{if(_e.b=this,ce){const s=this.#i;ei(),s.nodeType===Gi&&s.data===oa?this.#y():this.#w()}else{var i=this.#g();try{this.#a=zt(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},eg),ce&&(this.#e=Ce)}#w(){try{this.#a=zt(()=>this.#o(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#n.pending;e&&(this.#r=zt(()=>e(this.#e)),Cn.enqueue(()=>{var n=this.#g();this.#a=this.#m(()=>(Cn.ensure(),zt(()=>this.#o(n)))),this.#d>0?this.#v():(Si(this.#r,()=>{this.#r=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=fn(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var n=_e,r=Ie,i=Je;pn(this.#s),qt(this.#s),Di(this.#s.ctx);try{return e()}catch(s){return wh(s),null}finally{pn(n),qt(r),Di(i)}}#v(){const e=this.#n.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),jh(this.#a,this.#c)),this.#r===null&&(this.#r=zt(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#r&&Si(this.#r,()=>{this.#r=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&$i(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var n=this.#n.onerror;let r=this.#n.failed;if(this.#p||!n&&!r)throw e;this.#a&&(ft(this.#a),this.#a=null),this.#r&&(ft(this.#r),this.#r=null),this.#l&&(ft(this.#l),this.#l=null),ce&&(wt(this.#i),Qt(),wt(So()));var i=!1,s=!1;const o=()=>{if(i){Kv();return}i=!0,s&&Dv(),Cn.ensure(),this.#f=0,this.#l!==null&&Si(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#a=this.#m(()=>(this.#p=!1,zt(()=>this.#o(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=Ie;try{qt(null),s=!0,n?.(e,o),s=!1}catch(l){Mi(l,this.#s&&this.#s.parent)}finally{qt(a)}r&&qr(()=>{this.#l=this.#m(()=>{Cn.ensure(),this.#p=!0;try{return zt(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Mi(l,this.#s.parent),null}finally{this.#p=!1}})})}}function Ch(t,e,n,r){const i=Hs()?Vs:nc;if(n.length===0&&t.length===0){r(e.map(i));return}var s=Oe,o=_e,a=rg();function l(){Promise.all(n.map(c=>ig(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&Zn)===0&&Mi(d,o)}s?.deactivate(),Ao()}).catch(c=>{Mi(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),Ao()}}):l()}function rg(){var t=_e,e=Ie,n=Je,r=Oe;return function(s=!0){pn(t),qt(e),Di(n),s&&r?.activate()}}function Ao(){pn(null),qt(null),Di(null)}function Vs(t){var e=At|Ht,n=Ie!==null&&(Ie.f&At)!==0?Ie:null;return _e===null||n!==null&&(n.f&hn)!==0?e|=hn:_e.f|=di,{ctx:Je,deps:null,effects:null,equals:vh,f:e,fn:t,reactions:null,rv:0,v:_t,wv:0,parent:n??_e,ac:null}}function ig(t,e){let n=_e;n===null&&kv();var r=n.b,i=void 0,s=Dr(_t),o=!Ie,a=new Map;return mg(()=>{var l=ch();i=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===Oe&&c.committed&&c.deactivate(),Ao()})}catch(u){l.reject(u),Ao()}var c=Oe;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(ki),a.delete(c),a.set(c,l)}const p=(u,v=void 0)=>{if(c.activate(),v)v!==ki&&(s.f|=Qr,$i(s,v));else{(s.f&Qr)!==0&&(s.f^=Qr),$i(s,u);for(const[g,w]of a){if(a.delete(g),g===c)break;w.reject(ki)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(p,u=>p(null,u||"unknown"))}),Ws(()=>{for(const l of a.values())l.reject(ki)}),new Promise(l=>{function c(d){function p(){d===i?l(s):c(i)}d.then(p,p)}c(i)})}function ol(t){const e=Vs(t);return Bh(e),e}function nc(t){const e=Vs(t);return e.equals=_h,e}function kh(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)ft(e[n])}}function sg(t){for(var e=t.parent;e!==null;){if((e.f&At)===0)return e;e=e.parent}return null}function rc(t){var e,n=_e;pn(sg(t));try{t.f&=~xo,kh(t),e=Gh(t)}finally{pn(n)}return e}function Th(t){var e=rc(t);if(t.equals(e)||(t.v=e,t.wv=Vh()),!fi)if(wn!==null)wn.set(t,t.v);else{var n=(Ir||(t.f&hn)!==0)&&t.deps!==null?ur:Tt;St(t,n)}}let al=new Set;const xr=new Map;let xh=!1;function Dr(t,e){var n={f:0,v:t,reactions:null,equals:vh,rv:0,wv:0};return n}function Q(t,e){const n=Dr(t);return Bh(n),n}function ic(t,e=!1,n=!0){const r=Dr(t);return e||(r.equals=_h),Ki&&n&&Je!==null&&Je.l!==null&&(Je.l.s??=[]).push(r),r}function y(t,e,n=!1){Ie!==null&&(!yn||(Ie.f&Cu)!==0)&&Hs()&&(Ie.f&(At|lr|Xl|Cu))!==0&&!er?.includes(t)&&Ov();let r=n?xt(e):e;return $i(t,r)}function $i(t,e){if(!t.equals(e)){var n=t.v;fi?xr.set(t,e):xr.set(t,n),t.v=e;var r=Cn.ensure();r.capture(t,n),(t.f&At)!==0&&((t.f&Ht)!==0&&rc(t),St(t,(t.f&hn)===0?Tt:ur)),t.wv=Vh(),Sh(t,Ht),Hs()&&_e!==null&&(_e.f&Tt)!==0&&(_e.f&(cr|zr))===0&&(ln===null?_g([t]):ln.push(t)),!r.is_fork&&al.size>0&&!xh&&og()}return e}function og(){xh=!1;const t=Array.from(al);for(const e of t)(e.f&Tt)!==0&&St(e,ur),Ks(e)&&Rs(e);al.clear()}function ll(t,e=1){var n=m(t),r=e===1?n++:n--;return y(t,n),r}function ms(t){y(t,t.v+1)}function Sh(t,e){var n=t.reactions;if(n!==null)for(var r=Hs(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;if(!(!r&&o===_e)){var l=(a&Ht)===0;l&&St(o,e),(a&At)!==0?(a&xo)===0&&(o.f|=xo,Sh(o,ur)):l&&((a&lr)!==0&&Kn!==null&&Kn.add(o),ti(o))}}}function xt(t){if(typeof t!="object"||t===null||Mn in t)return t;const e=Yl(t);if(e!==_v&&e!==bv)return t;var n=new Map,r=Gl(t),i=Q(0),s=Jr,o=a=>{if(Jr===s)return a();var l=Ie,c=Jr;qt(null),Pu(s);var d=a();return qt(l),Pu(c),d};return r&&n.set("length",Q(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Nv();var d=n.get(l);return d===void 0?d=o(()=>{var p=Q(c.value);return n.set(l,p),p}):y(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>Q(_t));n.set(l,d),ms(i)}}else y(c,_t),ms(i);return!0},get(a,l,c){if(l===Mn)return t;var d=n.get(l),p=l in a;if(d===void 0&&(!p||Xn(a,l)?.writable)&&(d=o(()=>{var v=xt(p?a[l]:_t),g=Q(v);return g}),n.set(l,d)),d!==void 0){var u=m(d);return u===_t?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=m(d))}else if(c===void 0){var p=n.get(l),u=p?.v;if(p!==void 0&&u!==_t)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Mn)return!0;var c=n.get(l),d=c!==void 0&&c.v!==_t||Reflect.has(a,l);if(c!==void 0||_e!==null&&(!d||Xn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?xt(a[l]):_t,v=Q(u);return v}),n.set(l,c));var p=m(c);if(p===_t)return!1}return d},set(a,l,c,d){var p=n.get(l),u=l in a;if(r&&l==="length")for(var v=c;v<p.v;v+=1){var g=n.get(v+"");g!==void 0?y(g,_t):v in a&&(g=o(()=>Q(_t)),n.set(v+"",g))}if(p===void 0)(!u||Xn(a,l)?.writable)&&(p=o(()=>Q(void 0)),y(p,xt(c)),n.set(l,p));else{u=p.v!==_t;var w=o(()=>xt(c));y(p,w)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(d,c),!u){if(r&&typeof l=="string"){var T=n.get("length"),C=Number(l);Number.isInteger(C)&&C>=T.v&&y(T,C+1)}ms(i)}return!0},ownKeys(a){m(i);var l=Reflect.ownKeys(a).filter(p=>{var u=n.get(p);return u===void 0||u.v!==_t});for(var[c,d]of n)d.v!==_t&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Lv()}})}function Tu(t){try{if(t!==null&&typeof t=="object"&&Mn in t)return t[Mn]}catch{}return t}function ag(t,e){return Object.is(Tu(t),Tu(e))}var xu,Ah,Rh,Ph;function cl(){if(xu===void 0){xu=window,Ah=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Rh=Xn(e,"firstChild").get,Ph=Xn(e,"nextSibling").get,Iu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Iu(n)&&(n.__t=void 0)}}function fn(t=""){return document.createTextNode(t)}function Sn(t){return Rh.call(t)}function qn(t){return Ph.call(t)}function f(t,e){if(!ce)return Sn(t);var n=Sn(Ce);if(n===null)n=Ce.appendChild(fn());else if(e&&n.nodeType!==ec){var r=fn();return n?.before(r),wt(r),r}return wt(n),n}function re(t,e=!1){if(!ce){var n=Sn(t);return n instanceof Comment&&n.data===""?qn(n):n}if(e&&Ce?.nodeType!==ec){var r=fn();return Ce?.before(r),wt(r),r}return Ce}function _(t,e=1,n=!1){let r=ce?Ce:t;for(var i;e--;)i=r,r=qn(r);if(!ce)return r;if(n&&r?.nodeType!==ec){var s=fn();return r===null?i?.after(s):r.before(s),wt(s),s}return wt(r),r}function sc(t){t.textContent=""}function Nh(){return!1}function lg(t,e){if(e){const n=document.body;t.autofocus=!0,qr(()=>{document.activeElement===n&&t.focus()})}}function cg(t){ce&&Sn(t)!==null&&sc(t)}let Su=!1;function Lh(){Su||(Su=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function ca(t){var e=Ie,n=_e;qt(null),pn(null);try{return t()}finally{qt(e),pn(n)}}function Oh(t,e,n,r=n){t.addEventListener(e,()=>ca(n));const i=t.__on_r;i?t.__on_r=()=>{i(),r(!0)}:t.__on_r=()=>r(!0),Lh()}function Dh(t){_e===null&&Ie===null&&Sv(),Ie!==null&&(Ie.f&hn)!==0&&_e===null&&xv(),fi&&Tv()}function ug(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function An(t,e,n,r=!0){var i=_e;i!==null&&(i.f&Zt)!==0&&(t|=Zt);var s={ctx:Je,deps:null,nodes_start:null,nodes_end:null,f:t|Ht,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Rs(s),s.f|=Jl}catch(l){throw ft(s),l}else e!==null&&ti(s);if(r){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&di)===0&&(o=o.first,(t&lr)!==0&&(t&Or)!==0&&o!==null&&(o.f|=Or)),o!==null&&(o.parent=i,i!==null&&ug(o,i),Ie!==null&&(Ie.f&At)!==0&&(t&zr)===0)){var a=Ie;(a.effects??=[]).push(o)}}return s}function dg(){return Ie!==null&&!yn}function Ws(t){const e=An(na,null,!1);return St(e,Tt),e.teardown=t,e}function ni(t){Dh();var e=_e.f,n=!Ie&&(e&cr)!==0&&(e&Jl)===0;if(n){var r=Je;(r.e??=[]).push(t)}else return Mh(t)}function Mh(t){return An(Ql|uh,t,!1)}function hg(t){return Dh(),An(na|uh,t,!0)}function fg(t){Cn.ensure();const e=An(zr|di,t,!0);return()=>{ft(e)}}function pg(t){Cn.ensure();const e=An(zr|di,t,!0);return(n={})=>new Promise(r=>{n.outro?Si(e,()=>{ft(e),r(void 0)}):(ft(e),r(void 0))})}function Gs(t){return An(Ql,t,!1)}function mg(t){return An(Xl|di,t,!0)}function ua(t,e=0){return An(na|e,t,!0)}function Z(t,e=[],n=[],r=[]){Ch(r,e,n,i=>{An(na,()=>t(...i.map(m)),!0)})}function hi(t,e=0){var n=An(lr|e,t,!0);return n}function zt(t,e=!0){return An(cr|di,t,!0,e)}function $h(t){var e=t.teardown;if(e!==null){const n=fi,r=Ie;Ru(!0),qt(null);try{e.call(null)}finally{Ru(n),qt(r)}}}function Uh(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const i=n.ac;i!==null&&ca(()=>{i.abort(ki)});var r=n.next;(n.f&zr)!==0?n.parent=null:ft(n,e),n=r}}function vg(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&cr)===0&&ft(e),e=n}}function ft(t,e=!0){var n=!1;(e||(t.f&Ev)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(gg(t.nodes_start,t.nodes_end),n=!0),Uh(t,e&&!n),Ro(t,0),St(t,Zn);var r=t.transitions;if(r!==null)for(const s of r)s.stop();$h(t);var i=t.parent;i!==null&&i.first!==null&&Fh(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function gg(t,e){for(;t!==null;){var n=t===e?null:qn(t);t.remove(),t=n}}function Fh(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Si(t,e,n=!0){var r=[];oc(t,r,!0),zh(r,()=>{n&&ft(t),e&&e()})}function zh(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function oc(t,e,n){if((t.f&Zt)===0){if(t.f^=Zt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var i=r.next,s=(r.f&Or)!==0||(r.f&cr)!==0&&(t.f&lr)!==0;oc(r,e,s?n:!1),r=i}}}function ac(t){qh(t,!0)}function qh(t,e){if((t.f&Zt)!==0){t.f^=Zt,(t.f&Tt)===0&&(St(t,Ht),ti(t));for(var n=t.first;n!==null;){var r=n.next,i=(n.f&Or)!==0||(n.f&cr)!==0;qh(n,i?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function jh(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var i=n===r?null:qn(n);e.append(n),n=i}}let Ai=!1;function Au(t){Ai=t}let fi=!1;function Ru(t){fi=t}let Ie=null,yn=!1;function qt(t){Ie=t}let _e=null;function pn(t){_e=t}let er=null;function Bh(t){Ie!==null&&(er===null?er=[t]:er.push(t))}let Mt=null,Yt=0,ln=null;function _g(t){ln=t}let Hh=1,As=0,Jr=As;function Pu(t){Jr=t}let Ir=!1;function Vh(){return++Hh}function Ks(t){var e=t.f;if((e&Ht)!==0)return!0;if((e&ur)!==0){var n=t.deps,r=(e&hn)!==0;if(e&At&&(t.f&=~xo),n!==null){var i,s,o=(e&To)!==0,a=r&&_e!==null&&!Ir,l=n.length;if((o||a)&&(_e===null||(_e.f&Zn)===0)){var c=t,d=c.parent;for(i=0;i<l;i++)s=n[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=To),a&&d!==null&&(d.f&hn)===0&&(c.f^=hn)}for(i=0;i<l;i++)if(s=n[i],Ks(s)&&Th(s),s.wv>t.wv)return!0}(!r||_e!==null&&!Ir)&&St(t,Tt)}return!1}function Wh(t,e,n=!0){var r=t.reactions;if(r!==null&&!er?.includes(t))for(var i=0;i<r.length;i++){var s=r[i];(s.f&At)!==0?Wh(s,e,!1):e===s&&(n?St(s,Ht):(s.f&Tt)!==0&&St(s,ur),ti(s))}}function Gh(t){var e=Mt,n=Yt,r=ln,i=Ie,s=Ir,o=er,a=Je,l=yn,c=Jr,d=t.f;Mt=null,Yt=0,ln=null,Ir=(d&hn)!==0&&(yn||!Ai||Ie===null),Ie=(d&(cr|zr))===0?t:null,er=null,Di(t.ctx),yn=!1,Jr=++As,t.ac!==null&&(ca(()=>{t.ac.abort(ki)}),t.ac=null);try{t.f|=il;var p=t.fn,u=p(),v=t.deps;if(Mt!==null){var g;if(Ro(t,Yt),v!==null&&Yt>0)for(v.length=Yt+Mt.length,g=0;g<Mt.length;g++)v[Yt+g]=Mt[g];else t.deps=v=Mt;if(!Ir||(d&At)!==0&&t.reactions!==null)for(g=Yt;g<v.length;g++)(v[g].reactions??=[]).push(t)}else v!==null&&Yt<v.length&&(Ro(t,Yt),v.length=Yt);if(Hs()&&ln!==null&&!yn&&v!==null&&(t.f&(At|ur|Ht))===0)for(g=0;g<ln.length;g++)Wh(ln[g],t);return i!==null&&i!==t&&(As++,ln!==null&&(r===null?r=ln:r.push(...ln))),(t.f&Qr)!==0&&(t.f^=Qr),u}catch(w){return wh(w)}finally{t.f^=il,Mt=e,Yt=n,ln=r,Ie=i,Ir=s,er=o,Di(a),yn=l,Jr=c}}function bg(t,e){let n=e.reactions;if(n!==null){var r=gv.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&At)!==0&&(Mt===null||!Mt.includes(e))&&(St(e,ur),(e.f&(hn|To))===0&&(e.f^=To),kh(e),Ro(e,0))}function Ro(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)bg(t,n[r])}function Rs(t){var e=t.f;if((e&Zn)===0){St(t,Tt);var n=_e,r=Ai;_e=t,Ai=!0;try{(e&lr)!==0?vg(t):Uh(t),$h(t);var i=Gh(t);t.teardown=typeof i=="function"?i:null,t.wv=Hh;var s;ah&&Yv&&(t.f&Ht)!==0&&t.deps}finally{Ai=r,_e=n}}}async function wg(){await Promise.resolve(),qe()}function m(t){var e=t.f,n=(e&At)!==0;if(Ie!==null&&!yn){var r=_e!==null&&(_e.f&Zn)!==0;if(!r&&!er?.includes(t)){var i=Ie.deps;if((Ie.f&il)!==0)t.rv<As&&(t.rv=As,Mt===null&&i!==null&&i[Yt]===t?Yt++:Mt===null?Mt=[t]:(!Ir||!Mt.includes(t))&&Mt.push(t));else{(Ie.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[Ie]:s.includes(Ie)||s.push(Ie)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&hn)===0&&(o.f^=hn)}if(fi){if(xr.has(t))return xr.get(t);if(n){o=t;var l=o.v;return((o.f&Tt)===0&&o.reactions!==null||Kh(o))&&(l=rc(o)),xr.set(o,l),l}}else if(n){if(o=t,wn?.has(o))return wn.get(o);Ks(o)&&Th(o)}if(wn?.has(t))return wn.get(t);if((t.f&Qr)!==0)throw t.v;return t.v}function Kh(t){if(t.v===_t)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(xr.has(e)||(e.f&At)!==0&&Kh(e))return!0;return!1}function zn(t){var e=yn;try{return yn=!0,t()}finally{yn=e}}const yg=-7169;function St(t,e){t.f=t.f&yg|e}function Ci(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Mn in t)ul(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Mn in n&&ul(n)}}}function ul(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ul(t[r],e)}catch{}const n=Yl(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=lh(n);for(let i in r){const s=r[i].get;if(s)try{s.call(t)}catch{}}}}}function Eg(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Ig=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Cg(t){return Ig.includes(t)}const kg={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Tg(t){return t=t.toLowerCase(),kg[t]??t}const xg=["touchstart","touchmove"];function Sg(t){return xg.includes(t)}const Ag=["textarea","script","style","title"];function Rg(t){return Ag.includes(t)}const Yh=new Set,dl=new Set;function Qh(t,e,n,r={}){function i(s){if(r.capture||cs.call(e,s),!s.cancelBubble)return ca(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?qr(()=>{e.addEventListener(t,i,r)}):e.addEventListener(t,i,r),i}function Ps(t,e,n,r,i){var s={capture:r,passive:i},o=Qh(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Ws(()=>{e.removeEventListener(t,o,s)})}function at(t){for(var e=0;e<t.length;e++)Yh.add(t[e]);for(var n of dl)n(t)}let Nu=null;function cs(t){var e=this,n=e.ownerDocument,r=t.type,i=t.composedPath?.()||[],s=i[0]||t.target;Nu=t;var o=0,a=Nu===t&&t.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||t.target,s!==e){Ss(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=Ie,p=_e;qt(null),pn(null);try{for(var u,v=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var w=s["__"+r];w!=null&&(!s.disabled||t.target===s)&&w.call(s,t)}catch(E){u?v.push(E):u=E}if(t.cancelBubble||g===e||g===null)break;s=g}if(u){for(let E of v)queueMicrotask(()=>{throw E});throw u}}finally{t.__root=e,delete t.currentTarget,qt(d),pn(p)}}}function Jh(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function tr(t,e){var n=_e;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function P(t,e){var n=(e&jv)!==0,r=(e&Bv)!==0,i,s=!t.startsWith("<!>");return()=>{if(ce)return tr(Ce,null),Ce;i===void 0&&(i=Jh(s?t:"<!>"+t),n||(i=Sn(i)));var o=r||Ah?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=Sn(o),l=o.lastChild;tr(a,l)}else tr(o,o);return o}}function Pg(t,e,n="svg"){var r=!t.startsWith("<!>"),i=`<${n}>${r?t:"<!>"+t}</${n}>`,s;return()=>{if(ce)return tr(Ce,null),Ce;if(!s){var o=Jh(i),a=Sn(o);s=Sn(a)}var l=s.cloneNode(!0);return tr(l,l),l}}function Ng(t,e){return Pg(t,e,"svg")}function ue(){if(ce)return tr(Ce,null),Ce;var t=document.createDocumentFragment(),e=document.createComment(""),n=fn();return t.append(e,n),tr(e,n),t}function b(t,e){if(ce){_e.nodes_end=Ce,ei();return}t!==null&&t.before(e)}function k(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function lc(t,e){return Xh(t,e)}function Lg(t,e){cl(),e.intro=e.intro??!1;const n=e.target,r=ce,i=Ce;try{for(var s=Sn(n);s&&(s.nodeType!==Gi||s.data!==ph);)s=qn(s);if(!s)throw Oi;Jt(!0),wt(s);const o=Xh(t,{...e,anchor:s});return Jt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Oi&&console.warn("Failed to hydrate: ",o),e.recover===!1&&Rv(),cl(),sc(n),Jt(!1),lc(t,e)}finally{Jt(r),wt(i)}}const wi=new Map;function Xh(t,{target:e,anchor:n,props:r={},events:i,context:s,intro:o=!0}){cl();var a=new Set,l=p=>{for(var u=0;u<p.length;u++){var v=p[u];if(!a.has(v)){a.add(v);var g=Sg(v);e.addEventListener(v,cs,{passive:g});var w=wi.get(v);w===void 0?(document.addEventListener(v,cs,{passive:g}),wi.set(v,1)):wi.set(v,w+1)}}};l(Kl(Yh)),dl.add(l);var c=void 0,d=pg(()=>{var p=n??e.appendChild(fn());return tg(p,{pending:()=>{}},u=>{if(s){je({});var v=Je;v.c=s}if(i&&(r.$$events=i),ce&&tr(u,null),c=t(u,r)||{},ce&&(_e.nodes_end=Ce,Ce===null||Ce.nodeType!==Gi||Ce.data!==tc))throw aa(),Oi;s&&Be()}),()=>{for(var u of a){e.removeEventListener(u,cs);var v=wi.get(u);--v===0?(document.removeEventListener(u,cs),wi.delete(u)):wi.set(u,v)}dl.delete(l),p!==n&&p.parentNode?.removeChild(p)}});return hl.set(c,d),c}let hl=new WeakMap;function Og(t,e){const n=hl.get(t);return n?(hl.delete(t),n(e)):Promise.resolve()}class cc{anchor;#t=new Map;#e=new Map;#i=new Map;#n=!0;constructor(e,n=!0){this.anchor=e,this.#n=n}#o=()=>{var e=Oe;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)ac(r);else{var i=this.#i.get(n);i&&(this.#e.set(n,i.effect),this.#i.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#i.get(o);a&&(ft(a.effect),this.#i.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();jh(o,c),c.append(fn()),this.#i.set(s,{effect:o,fragment:c})}else ft(o);this.#e.delete(s)};this.#n||!r?Si(o,a,!1):a()}}};#s=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,i]of this.#i)n.includes(r)||(ft(i.effect),this.#i.delete(r))};ensure(e,n){var r=Oe,i=Nh();if(n&&!this.#e.has(e)&&!this.#i.has(e))if(i){var s=document.createDocumentFragment(),o=fn();s.append(o),this.#i.set(e,{effect:zt(()=>n(o)),fragment:s})}else this.#e.set(e,zt(()=>n(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#i)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#o),r.ondiscard(this.#s)}else ce&&(this.anchor=Ce),this.#o()}}function j(t,e,n=!1){ce&&ei();var r=new cc(t),i=n?Or:0;function s(o,a){if(ce){const c=mh(t)===oa;if(o===c){var l=So();wt(l),r.anchor=l,Jt(!1),r.ensure(o,a),Jt(!0);return}}r.ensure(o,a)}hi(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function Cr(t,e){return e}function Dg(t,e,n){for(var r=t.items,i=[],s=e.length,o=0;o<s;o++)oc(e[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var l=n.parentNode;sc(l),l.append(n),r.clear(),Nn(t,e[0].prev,e[s-1].next)}zh(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),Nn(t,d.prev,d.next)),ft(d.e,!a)}})}function jt(t,e,n,r,i,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&hh)!==0;if(l){var c=t;o=ce?wt(Sn(c)):c.appendChild(fn())}ce&&ei();var d=null,p=!1,u=new Map,v=nc(()=>{var T=n();return Gl(T)?T:T==null?[]:Kl(T)}),g,w;function E(){Mg(w,g,a,u,o,i,e,r,n),s!==null&&(g.length===0?d?ac(d):d=zt(()=>s(o)):d!==null&&Si(d,()=>{d=null}))}hi(()=>{w??=_e,g=m(v);var T=g.length;if(p&&T===0)return;p=T===0;let C=!1;if(ce){var A=mh(o)===oa;A!==(T===0)&&(o=So(),wt(o),Jt(!1),C=!0)}if(ce){for(var L=null,N,R=0;R<T;R++){if(Ce.nodeType===Gi&&Ce.data===tc){o=Ce,C=!0,Jt(!1);break}var x=g[R],I=r(x,R);N=fl(Ce,a,L,null,x,I,R,i,e,n),a.items.set(I,N),L=N}T>0&&wt(So())}if(ce)T===0&&s&&(d=zt(()=>s(o)));else if(Nh()){var M=new Set,B=Oe;for(R=0;R<T;R+=1){x=g[R],I=r(x,R);var V=a.items.get(I)??u.get(I);V?(e&(ia|sa))!==0&&Zh(V,x,R,e):(N=fl(null,a,null,null,x,I,R,i,e,n,!0),u.set(I,N)),M.add(I)}for(const[$,K]of a.items)M.has($)||B.skipped_effects.add(K.e);B.oncommit(E)}else E();C&&Jt(!0),m(v)}),ce&&(o=Ce)}function Mg(t,e,n,r,i,s,o,a,l){var c=(o&Mv)!==0,d=(o&(ia|sa))!==0,p=e.length,u=n.items,v=n.first,g=v,w,E=null,T,C=[],A=[],L,N,R,x;if(c)for(x=0;x<p;x+=1)L=e[x],N=a(L,x),R=u.get(N),R!==void 0&&(R.a?.measure(),(T??=new Set).add(R));for(x=0;x<p;x+=1){if(L=e[x],N=a(L,x),R=u.get(N),R===void 0){var I=r.get(N);if(I!==void 0){r.delete(N),u.set(N,I);var M=E?E.next:g;Nn(n,E,I),Nn(n,I,M),Na(I,M,i),E=I}else{var B=g?g.e.nodes_start:i;E=fl(B,n,E,E===null?n.first:E.next,L,N,x,s,o,l)}u.set(N,E),C=[],A=[],g=E.next;continue}if(d&&Zh(R,L,x,o),(R.e.f&Zt)!==0&&(ac(R.e),c&&(R.a?.unfix(),(T??=new Set).delete(R))),R!==g){if(w!==void 0&&w.has(R)){if(C.length<A.length){var V=A[0],$;E=V.prev;var K=C[0],oe=C[C.length-1];for($=0;$<C.length;$+=1)Na(C[$],V,i);for($=0;$<A.length;$+=1)w.delete(A[$]);Nn(n,K.prev,oe.next),Nn(n,E,K),Nn(n,oe,V),g=V,E=oe,x-=1,C=[],A=[]}else w.delete(R),Na(R,g,i),Nn(n,R.prev,R.next),Nn(n,R,E===null?n.first:E.next),Nn(n,E,R),E=R;continue}for(C=[],A=[];g!==null&&g.k!==N;)(g.e.f&Zt)===0&&(w??=new Set).add(g),A.push(g),g=g.next;if(g===null)continue;R=g}C.push(R),E=R,g=R.next}if(g!==null||w!==void 0){for(var te=w===void 0?[]:Kl(w);g!==null;)(g.e.f&Zt)===0&&te.push(g),g=g.next;var H=te.length;if(H>0){var J=(o&hh)!==0&&p===0?i:null;if(c){for(x=0;x<H;x+=1)te[x].a?.measure();for(x=0;x<H;x+=1)te[x].a?.fix()}Dg(n,te,J)}}c&&qr(()=>{if(T!==void 0)for(R of T)R.a?.apply()}),t.first=n.first&&n.first.e,t.last=E&&E.e;for(var X of r.values())ft(X.e);r.clear()}function Zh(t,e,n,r){(r&ia)!==0&&$i(t.v,e),(r&sa)!==0?$i(t.i,n):t.i=n}function fl(t,e,n,r,i,s,o,a,l,c,d){var p=(l&ia)!==0,u=(l&$v)===0,v=p?u?ic(i,!1,!1):Dr(i):i,g=(l&sa)===0?o:Dr(o),w={i:g,v,k:s,a:null,e:null,prev:n,next:r};try{if(t===null){var E=document.createDocumentFragment();E.append(t=fn())}return w.e=zt(()=>a(t,v,g,c),ce),w.e.prev=n&&n.e,w.e.next=r&&r.e,n===null?d||(e.first=w):(n.next=w,n.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{}}function Na(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==r;){var o=qn(s);i.before(s),s=o}}function Nn(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function et(t,e,n,r,i){ce&&ei();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>r:r)}function yi(t,e,...n){var r=new cc(t);hi(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...n)))},Or)}function $g(t,e,n,r,i,s){let o=ce;ce&&ei();var a=null;ce&&Ce.nodeType===Cv&&(a=Ce,ei());var l=ce?Ce:t,c=new cc(l,!1);hi(()=>{const d=e()||null;var p=Vv;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=ce?a:document.createElementNS(p,d),tr(a,a),r){ce&&Rg(d)&&a.append(document.createComment(""));var v=ce?Sn(a):a.appendChild(fn());ce&&(v===null?Jt(!1):wt(v)),r(a,v)}_e.nodes_end=a,u.before(a)}ce&&wt(u)}),()=>{}},Or),Ws(()=>{}),o&&(Jt(!0),wt(l))}function He(t,e){Gs(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function Ug(t,e){var n=void 0,r;hi(()=>{n!==(n=e())&&(r&&(ft(r),r=null),n&&(r=zt(()=>{Gs(()=>n(t))})))})}function ef(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=ef(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Fg(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=ef(t))&&(r&&(r+=" "),r+=e);return r}function zg(t){return typeof t=="object"?Fg(t):t??""}const Lu=[...` 	
\r\f \v\uFEFF`];function qg(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||Lu.includes(r[o-1]))&&(a===r.length||Lu.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Ou(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var s=t[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function La(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function jg(t,e){if(e){var n="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(La)),i&&l.push(...Object.keys(i).map(La));var c=0,d=-1;const w=t.length;for(var p=0;p<w;p++){var u=t[p];if(a?u==="/"&&t[p-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[p+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=p;else if(u===";"||p===w-1){if(d!==-1){var v=La(t.substring(c,d).trim());if(!l.includes(v)){u!==";"&&p++;var g=t.substring(c,p).trim();n+=" "+g+";"}}c=p+1,d=-1}}}}return r&&(n+=Ou(r)),i&&(n+=Ou(i,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function En(t,e,n,r,i,s){var o=t.__className;if(ce||o!==n||o===void 0){var a=qg(n,r,s);(!ce||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&t.classList.toggle(l,c)}return s}function Oa(t,e={},n,r){for(var i in n){var s=n[i];e[i]!==s&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,s,r))}}function uc(t,e,n,r){var i=t.__style;if(ce||i!==e){var s=jg(e,r);(!ce||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else r&&(Array.isArray(r)?(Oa(t,n?.[0],r[0]),Oa(t,n?.[1],r[1],"important")):Oa(t,n,r));return r}function Po(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Gl(e))return Gv();for(var r of t.options)r.selected=e.includes(vs(r));return}for(r of t.options){var i=vs(r);if(ag(i,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function tf(t){var e=new MutationObserver(()=>{Po(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ws(()=>{e.disconnect()})}function dc(t,e,n=e){var r=new WeakSet,i=!0;Oh(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),vs);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&vs(l)}n(a),Oe!==null&&r.add(Oe)}),Gs(()=>{var s=e();if(t===document.activeElement){var o=fs??Oe;if(r.has(o))return}if(Po(t,s,i),i&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=vs(a),n(s))}t.__value=s,i=!1}),tf(t)}function vs(t){return"__value"in t?t.__value:t.value}const ns=Symbol("class"),rs=Symbol("style"),nf=Symbol("is custom element"),rf=Symbol("is html");function Ui(t){if(ce){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;Fe(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;Fe(t,"checked",null),t.checked=i}}};t.__on_r=n,qr(n),Lh()}}function Bg(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Fe(t,e,n,r){var i=sf(t);ce&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="loading"&&(t[Iv]=n),n==null?t.removeAttribute(e):typeof n!="string"&&of(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Hg(t,e,n,r,i=!1,s=!1){if(ce&&i&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Ui(o)}var l=sf(t),c=l[nf],d=!l[rf];let p=ce&&c;p&&Jt(!1);var u=e||{},v=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class?n.class=zg(n.class):n[ns]&&(n.class=null),n[rs]&&(n.style??=null);var w=of(t);for(const x in n){let I=n[x];if(v&&x==="value"&&I==null){t.value=t.__value="",u[x]=I;continue}if(x==="class"){var E=t.namespaceURI==="http://www.w3.org/1999/xhtml";En(t,E,I,r,e?.[ns],n[ns]),u[x]=I,u[ns]=n[ns];continue}if(x==="style"){uc(t,I,e?.[rs],n[rs]),u[x]=I,u[rs]=n[rs];continue}var T=u[x];if(!(I===T&&!(I===void 0&&t.hasAttribute(x)))){u[x]=I;var C=x[0]+x[1];if(C!=="$$")if(C==="on"){const M={},B="$$"+x;let V=x.slice(2);var A=Cg(V);if(Eg(V)&&(V=V.slice(0,-7),M.capture=!0),!A&&T){if(I!=null)continue;t.removeEventListener(V,u[B],M),u[B]=null}if(I!=null)if(A)t[`__${V}`]=I,at([V]);else{let $=function(K){u[x].call(this,K)};var R=$;u[B]=Qh(V,t,$,M)}else A&&(t[`__${V}`]=void 0)}else if(x==="style")Fe(t,x,I);else if(x==="autofocus")lg(t,!!I);else if(!c&&(x==="__value"||x==="value"&&I!=null))t.value=t.__value=I;else if(x==="selected"&&v)Bg(t,I);else{var L=x;d||(L=Tg(L));var N=L==="defaultValue"||L==="defaultChecked";if(I==null&&!c&&!N)if(l[x]=null,L==="value"||L==="checked"){let M=t;const B=e===void 0;if(L==="value"){let V=M.defaultValue;M.removeAttribute(L),M.defaultValue=V,M.value=M.__value=B?V:null}else{let V=M.defaultChecked;M.removeAttribute(L),M.defaultChecked=V,M.checked=B?V:!1}}else t.removeAttribute(x);else N||w.includes(L)&&(c||typeof I!="string")?(t[L]=I,L in l&&(l[L]=_t)):typeof I!="function"&&Fe(t,L,I)}}}return p&&Jt(!0),u}function Du(t,e,n=[],r=[],i=[],s,o=!1,a=!1){Ch(i,n,r,l=>{var c=void 0,d={},p=t.nodeName==="SELECT",u=!1;if(hi(()=>{var g=e(...l.map(m)),w=Hg(t,c,g,s,o,a);u&&p&&"value"in g&&Po(t,g.value);for(let T of Object.getOwnPropertySymbols(d))g[T]||ft(d[T]);for(let T of Object.getOwnPropertySymbols(g)){var E=g[T];T.description===Wv&&(!c||E!==c[T])&&(d[T]&&ft(d[T]),d[T]=zt(()=>Ug(t,()=>E))),w[T]=E}c=w}),p){var v=t;Gs(()=>{Po(v,c.value,!0),tf(v)})}u=!0})}function sf(t){return t.__attributes??={[nf]:t.nodeName.includes("-"),[rf]:t.namespaceURI===Hv}}var Mu=new Map;function of(t){var e=t.getAttribute("is")||t.nodeName,n=Mu.get(e);if(n)return n;Mu.set(e,n=[]);for(var r,i=t,s=Element.prototype;s!==i;){r=lh(i);for(var o in r)r[o].set&&n.push(o);i=Yl(i)}return n}function Fi(t,e,n=e){var r=new WeakSet;Oh(t,"input",async i=>{var s=i?t.defaultValue:t.value;if(s=Da(t)?Ma(s):s,n(s),Oe!==null&&r.add(Oe),await wg(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(ce&&t.defaultValue!==t.value||zn(e)==null&&t.value)&&(n(Da(t)?Ma(t.value):t.value),Oe!==null&&r.add(Oe)),ua(()=>{var i=e();if(t===document.activeElement){var s=fs??Oe;if(r.has(s))return}Da(t)&&i===Ma(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Da(t){var e=t.type;return e==="number"||e==="range"}function Ma(t){return t===""?null:+t}function $u(t,e){return t===e||t?.[Mn]===e}function hc(t={},e,n,r){return Gs(()=>{var i,s;return ua(()=>{i=s,s=[],zn(()=>{t!==n(...s)&&(e(t,...s),i&&$u(n(...i),t)&&e(null,...i))})}),()=>{qr(()=>{s&&$u(n(...s),t)&&e(null,...s)})}}),t}function tn(t=!1){const e=Je,n=e.l.u;if(!n)return;let r=()=>Ci(e.s);if(t){let i=0,s={};const o=Vs(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>m(o)}n.b.length&&hg(()=>{Uu(e,r),ko(n.b)}),ni(()=>{const i=zn(()=>n.m.map(wv));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&ni(()=>{Uu(e,r),ko(n.a)})}function Uu(t,e){if(t.l.s)for(const n of t.l.s)m(n);e()}function fc(t,e,n){if(t==null)return e(void 0),n&&n(void 0),Dn;const r=zn(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const Ei=[];function Vg(t,e){return{subscribe:Ys(t,e).subscribe}}function Ys(t,e=Dn){let n=null;const r=new Set;function i(a){if(gh(t,a)&&(t=a,n)){const l=!Ei.length;for(const c of r)c[1](),Ei.push(c,t);if(l){for(let c=0;c<Ei.length;c+=2)Ei[c][0](Ei[c+1]);Ei.length=0}}}function s(a){i(a(t))}function o(a,l=Dn){const c=[a,l];return r.add(c),r.size===1&&(n=e(i,s)||Dn),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Wg(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Vg(n,(o,a)=>{let l=!1;const c=[];let d=0,p=Dn;const u=()=>{if(d)return;p();const g=e(r?c[0]:c,o,a);s?o(g):p=typeof g=="function"?g:Dn},v=i.map((g,w)=>fc(g,E=>{c[w]=E,d&=~(1<<w),l&&u()},()=>{d|=1<<w}));return l=!0,u(),function(){ko(v),p(),l=!1}})}function Gg(t){let e;return fc(t,n=>e=n)(),e}let ho=!1,pl=Symbol();function $n(t,e,n){const r=n[e]??={store:null,source:ic(void 0),unsubscribe:Dn};if(r.store!==t&&!(pl in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=Dn;else{var i=!0;r.unsubscribe=fc(t,s=>{i?r.source.v=s:y(r.source,s)}),i=!1}return t&&pl in n?Gg(t):m(r.source)}function Yi(){const t={};function e(){Ws(()=>{for(var n in t)t[n].unsubscribe();Ss(t,pl,{enumerable:!1,value:!0})})}return[t,e]}function Kg(t){var e=ho;try{return ho=!1,[t(),ho]}finally{ho=e}}const Yg={get(t,e){if(!t.exclude.includes(e))return m(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=_e;try{pn(t.parent_effect),t.special[e]=Ve({get[e](){return t.props[e]}},e,fh)}finally{pn(r)}}return t.special[e](n),ll(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),ll(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Xe(t,e){return new Proxy({props:t,exclude:e,special:{},version:Dr(0),parent_effect:_e},Yg)}const Qg={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let i=t.props[r];ts(i)&&(i=i());const s=Xn(i,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Xn(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===Mn||e===Zl)return!1;for(let n of t.props)if(ts(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ts(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function lt(...t){return new Proxy({props:t},Qg)}function Ve(t,e,n,r){var i=!Ki||(n&Fv)!==0,s=(n&zv)!==0,o=(n&qv)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?zn(r):r),a),d;if(s){var p=Mn in t||Zl in t;d=Xn(t,e)?.set??(p&&e in t?A=>t[e]=A:void 0)}var u,v=!1;s?[u,v]=Kg(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&Pv(),d(u)));var g;if(i?g=()=>{var A=t[e];return A===void 0?c():(l=!0,A)}:g=()=>{var A=t[e];return A!==void 0&&(a=void 0),A===void 0?a:A},i&&(n&fh)===0)return g;if(d){var w=t.$$legacy;return(function(A,L){return arguments.length>0?((!i||!L||w||v)&&d(L?g():A),A):g()})}var E=!1,T=((n&Uv)!==0?Vs:nc)(()=>(E=!1,g()));s&&m(T);var C=_e;return(function(A,L){if(arguments.length>0){const N=L?m(T):i&&s?xt(A):A;return y(T,N),E=!0,a!==void 0&&(a=N),A}return fi&&E||(C.f&Zn)!==0?T.v:m(T)})}function Jg(t){return new Xg(t)}class Xg{#t;#e;constructor(e){var n=new Map,r=(s,o)=>{var a=ic(o,!1,!1);return n.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return m(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===Zl?!0:(m(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return y(n.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?Lg:lc)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&qe(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||Ss(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{Og(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...i)=>n.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let af;typeof HTMLElement=="function"&&(af=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return s=>{const o=document.createElement("slot");i!=="default"&&(o.name=i),b(s,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Zg(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=_o(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Jg({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=fg(()=>{ua(()=>{this.$$r=!0;for(const i of Co(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const s=_o(i,this.$$d[i],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,s)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const o=this.$$c.$on(i,s);this.$$l_u.set(s,o)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=_o(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Co(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function _o(t,e,n,r){const i=n[t]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Zg(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function pe(t,e,n,r,i,s){let o=class extends af{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return Co(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Co(e).forEach(a=>{Ss(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=_o(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=Xn(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Ss(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}function Et(t){Je===null&&dh(),Ki&&Je.l!==null?e_(Je).m.push(t):ni(()=>{const e=zn(t);if(typeof e=="function")return e})}function lf(t){Je===null&&dh(),Et(()=>()=>zn(t))}function e_(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const t_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(t_);const n_=()=>{};var Fu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Qi(e)},Qi=function(t){return new Error("Firebase Database ("+cf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(u=64)),r.push(n[d],n[p],n[u],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new i_;const u=s<<2|a>>4;if(r.push(u),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const g=c<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const df=function(t){const e=uf(t);return pc.encodeByteArray(e,!0)},No=function(t){return df(t).replace(/\./g,"")},Lo=function(t){try{return pc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){return hf(void 0,t)}function hf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!o_(n)||(t[n]=hf(t[n],e[n]));return t}function o_(t){return t!=="__proto__"}/**
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
 */function a_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l_=()=>a_().__FIREBASE_DEFAULTS__,c_=()=>{if(typeof process>"u"||typeof Fu>"u")return;const t=Fu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lo(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return n_()||l_()||c_()||u_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ff=t=>mc()?.emulatorHosts?.[t],pf=t=>{const e=ff(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mf=()=>mc()?.config,vf=t=>mc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function gf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}const gs={};function d_(){const t={prod:[],emulator:[]};for(const e of Object.keys(gs))gs[e]?t.emulator.push(e):t.prod.push(e);return t}function h_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zu=!1;function gc(t,e){if(typeof window>"u"||typeof document>"u"||!jr(window.location.host)||gs[t]===e||gs[t]||zu)return;gs[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=d_().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,v){u.setAttribute("width","24"),u.setAttribute("id",v),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{zu=!0,o()},u}function d(u,v){u.setAttribute("id",v),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function p(){const u=h_(r),v=n("text"),g=document.getElementById(v)||document.createElement("span"),w=n("learnmore"),E=document.getElementById(w)||document.createElement("a"),T=n("preprendIcon"),C=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const A=u.element;a(A),d(E,w);const L=c();l(C,T),A.append(C,g,E,L),document.body.appendChild(A)}s?(g.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function f_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function p_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m_(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v_(){return cf.NODE_ADMIN===!0}function g_(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="FirebaseError";class dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=b_,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?w_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dr(i,a,r)}}function w_(t,e){return t.replace(y_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const y_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){return JSON.parse(t)}function ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ns(Lo(s[0])||""),n=Ns(Lo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},E_=function(t){const e=bf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},I_=function(t){const e=bf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qu(s)&&qu(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const u=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):p<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[p]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function k_(t,e){const n=new T_(t,e);return n.subscribe.bind(n)}class T_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");x_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$a),i.error===void 0&&(i.error=$a),i.complete===void 0&&(i.complete=$a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function da(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ha=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class A_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P_(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R_(t){return t===Vr?void 0:t}function P_(t){return t.instantiationMode==="EAGER"}/**
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
 */class N_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const L_={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},O_=De.INFO,D_={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},M_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=O_,this._logHandler=M_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const $_=(t,e)=>e.some(n=>t instanceof n);let ju,Bu;function U_(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F_(){return Bu||(Bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,vl=new WeakMap,yf=new WeakMap,Ua=new WeakMap,wc=new WeakMap;function z_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wf.set(n,t)}).catch(()=>{}),wc.set(e,t),e}function q_(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j_(t){gl=t(gl)}function B_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fa(this),e,...n);return yf.set(r,e.sort?e.sort():[e]),Sr(r)}:F_().includes(t)?function(...e){return t.apply(Fa(this),e),Sr(wf.get(this))}:function(...e){return Sr(t.apply(Fa(this),e))}}function H_(t){return typeof t=="function"?B_(t):(t instanceof IDBTransaction&&q_(t),$_(t,U_())?new Proxy(t,gl):t)}function Sr(t){if(t instanceof IDBRequest)return z_(t);if(Ua.has(t))return Ua.get(t);const e=H_(t);return e!==t&&(Ua.set(t,e),wc.set(e,t)),e}const Fa=t=>wc.get(t);function V_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const W_=["get","getKey","getAll","getAllKeys","count"],G_=["put","add","delete","clear"],za=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=G_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return za.set(e,s),s}j_(t=>({...t,get:(e,n,r)=>Hu(e,n)||t.get(e,n,r),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
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
 */class K_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y_(t){return t.getComponent()?.type==="VERSION"}const _l="@firebase/app",Vu="0.14.5";/**
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
 */const rr=new bc("@firebase/app"),Q_="@firebase/app-compat",J_="@firebase/analytics-compat",X_="@firebase/analytics",Z_="@firebase/app-check-compat",eb="@firebase/app-check",tb="@firebase/auth",nb="@firebase/auth-compat",rb="@firebase/database",ib="@firebase/data-connect",sb="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",lb="@firebase/installations",cb="@firebase/installations-compat",ub="@firebase/messaging",db="@firebase/messaging-compat",hb="@firebase/performance",fb="@firebase/performance-compat",pb="@firebase/remote-config",mb="@firebase/remote-config-compat",vb="@firebase/storage",gb="@firebase/storage-compat",_b="@firebase/firestore",bb="@firebase/ai",wb="@firebase/firestore-compat",yb="firebase",Eb="12.5.0";/**
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
 */const bl="[DEFAULT]",Ib={[_l]:"fire-core",[Q_]:"fire-core-compat",[X_]:"fire-analytics",[J_]:"fire-analytics-compat",[eb]:"fire-app-check",[Z_]:"fire-app-check-compat",[tb]:"fire-auth",[nb]:"fire-auth-compat",[rb]:"fire-rtdb",[ib]:"fire-data-connect",[sb]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[lb]:"fire-iid",[cb]:"fire-iid-compat",[ub]:"fire-fcm",[db]:"fire-fcm-compat",[hb]:"fire-perf",[fb]:"fire-perf-compat",[pb]:"fire-rc",[mb]:"fire-rc-compat",[vb]:"fire-gcs",[gb]:"fire-gcs-compat",[_b]:"fire-fst",[wb]:"fire-fst-compat",[bb]:"fire-vertex","fire-js":"fire-js",[yb]:"fire-js-all"};/**
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
 */const Do=new Map,Cb=new Map,wl=new Map;function Wu(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(wl.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,t);for(const n of Do.values())Wu(n,t);for(const n of Cb.values())Wu(n,t);return!0}function fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new Js("app","Firebase",kb);/**
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
 */class Tb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=Eb;function Ef(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:bl,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ar.create("bad-app-name",{appName:String(i)});if(n||(n=mf()),!n)throw Ar.create("no-options");const s=Do.get(i);if(s){if(ri(n,s.options)&&ri(r,s.config))return s;throw Ar.create("duplicate-app",{appName:i})}const o=new N_(i);for(const l of wl.values())o.addComponent(l);const a=new Tb(n,r,o);return Do.set(i,a),a}function yc(t=bl){const e=Do.get(t);if(!e&&t===bl&&mf())return Ef();if(!e)throw Ar.create("no-app",{appName:t});return e}function Un(t,e,n){let r=Ib[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}ii(new Mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xb="firebase-heartbeat-database",Sb=1,Ls="firebase-heartbeat-store";let qa=null;function If(){return qa||(qa=V_(xb,Sb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),qa}async function Ab(t){try{const n=(await If()).transaction(Ls),r=await n.objectStore(Ls).get(Cf(t));return await n.done,r}catch(e){if(e instanceof dr)rr.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e?.message});rr.warn(n.message)}}}async function Gu(t,e){try{const r=(await If()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,Cf(t)),await r.done}catch(n){if(n instanceof dr)rr.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n?.message});rr.warn(r.message)}}}function Cf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rb=1024,Pb=30;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ob(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ku();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Pb){const i=Db(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:n,unsentEntries:r}=Lb(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return rr.warn(e),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function Lb(t,e=Rb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g_()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ab(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yu(t){return No(JSON.stringify({version:2,heartbeats:t})).length}function Db(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Mb(t){ii(new Mr("platform-logger",e=>new K_(e),"PRIVATE")),ii(new Mr("heartbeat",e=>new Nb(e),"PRIVATE")),Un(_l,Vu,t),Un(_l,Vu,"esm2020"),Un("fire-js","")}Mb("");var $b="firebase",Ub="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un($b,Ub,"app");function kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fb=kf,Tf=new Js("auth","Firebase",kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new bc("@firebase/auth");function zb(t,...e){Mo.logLevel<=De.WARN&&Mo.warn(`Auth (${mi}): ${t}`,...e)}function bo(t,...e){Mo.logLevel<=De.ERROR&&Mo.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,...e){throw Ec(t,...e)}function en(t,...e){return Ec(t,...e)}function xf(t,e,n){const r={...Fb(),[e]:n};return new Js("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return xf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ec(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tf.create(t,...e)}function Y(t,e,...n){if(!t)throw Ec(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bo(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return typeof self<"u"&&self.location?.href||""}function Sf(){return Qu()==="http:"||Qu()==="https:"}function Qu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sf()||p_()||"connection"in navigator)?navigator.onLine:!0}function jb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=_c()||_f()}get(){return qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vb=new Xs(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vn(t,e,n,r,i={}){return Rf(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return f_()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&jr(t.emulatorConfig.host)&&(c.credentials="include"),Af.fetch()(await Pf(t,t.config.apiHost,n,a),c)})}async function Rf(t,e,n){t._canInitEmulator=!1;const r={...Bb,...e};try{const i=new Gb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw us(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw us(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw us(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xf(t,d,c);ir(t,d)}}catch(i){if(i instanceof dr)throw i;ir(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await vn(t,e,n,r,i);return"mfaPendingCredential"in s&&ir(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Pf(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ic(t.config,i):`${t.config.apiScheme}://${i}`;return Hb.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Wb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Vb.get())})}}function us(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){return t!==void 0&&t.getResponse!==void 0}function Xu(t){return t!==void 0&&t.enterprise!==void 0}class Nf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t){return(await vn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Lf(t,e){return vn(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return vn(t,"POST","/v1/accounts:delete",e)}async function $o(t,e){return vn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Cc(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:_s(ja(i.auth_time)),issuedAtTime:_s(ja(i.iat)),expirationTime:_s(ja(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ja(t){return Number(t)*1e3}function Cc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lo(n);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Zu(t){const e=Cc(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&Jb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(t){const e=t.auth,n=await t.getIdToken(),r=await qi(t,$o(e,{idToken:n}));Y(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?Of(i.providerUserInfo):[],o=e1(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Zb(t){const e=tt(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Of(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e){const n=await Rf(t,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Pf(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&jr(t.emulatorConfig.host)&&(l.credentials="include"),Af.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function n1(t,e){return vn(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Zu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await t1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ri;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return Zb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await qi(this,Yb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:u,isAnonymous:v,providerData:g,stsTokenManager:w}=n;Y(p&&w,e,"internal-error");const E=Ri.fromJSON(this.name,w);Y(typeof p=="string",e,"internal-error"),gr(r,e.name),gr(i,e.name),Y(typeof u=="boolean",e,"internal-error"),Y(typeof v=="boolean",e,"internal-error"),gr(s,e.name),gr(o,e.name),gr(a,e.name),gr(l,e.name),gr(c,e.name),gr(d,e.name);const T=new kn({uid:p,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return g&&Array.isArray(g)&&(T.providerData=g.map(C=>({...C}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ri;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Uo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Of(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new Ri;a.updateFromIdToken(r);const l=new kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function Qn(t){sr(t instanceof Function,"Expected a class definition");let e=ed.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ed.set(t,e),e)}/**
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
 */class Df{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Df.type="NONE";const td=Df;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $o(this.auth,{idToken:e}).catch(()=>{});return n?kn._fromGetAccountInfoResponse(this.auth,n,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pi(Qn(td),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Qn(td);const o=wo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const u=await $o(e,{idToken:d}).catch(()=>{});if(!u)break;p=await kn._fromGetAccountInfoResponse(e,u,d)}else p=kn._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Pi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ff(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qf(e))return"Blackberry";if(jf(e))return"Webos";if($f(e))return"Safari";if((e.includes("chrome/")||Uf(e))&&!e.includes("edge/"))return"Chrome";if(zf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Mf(t=Ft()){return/firefox\//i.test(t)}function $f(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uf(t=Ft()){return/crios\//i.test(t)}function Ff(t=Ft()){return/iemobile/i.test(t)}function zf(t=Ft()){return/android/i.test(t)}function qf(t=Ft()){return/blackberry/i.test(t)}function jf(t=Ft()){return/webos/i.test(t)}function kc(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r1(t=Ft()){return kc(t)&&!!window.navigator?.standalone}function i1(){return m_()&&document.documentMode===10}function Bf(t=Ft()){return kc(t)||zf(t)||jf(t)||qf(t)||/windows phone/i.test(t)||Ff(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t,e=[]){let n;switch(t){case"Browser":n=nd(Ft());break;case"Worker":n=`${nd(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class s1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function o1(t,e={}){return vn(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */const a1=6;class l1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??a1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new s1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $o(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Rr(this));const n=e?tt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o1(this),n=new l1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await n1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&zb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Br(t){return tt(t)}class rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=k_(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u1(t){Zs=t}function Tc(t){return Zs.loadJS(t)}function d1(){return Zs.recaptchaV2Script}function h1(){return Zs.recaptchaEnterpriseScript}function f1(){return Zs.gapiScript}function Vf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=500,m1=6e4,fo=1e12;class v1{constructor(e){this.auth=e,this.counter=fo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new b1(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||fo;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||fo;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||fo;return this._widgets.get(n)?.execute(),""}}class g1{constructor(){this.enterprise=new _1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class b1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;Y(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=w1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},m1)},p1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function w1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const y1="recaptcha-enterprise",bs="NO_RECAPTCHA";class Wf{constructor(e){this.type=y1,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Lf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Nf(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Xu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bs)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new g1().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Xu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=h1();l.length!==0&&(l+=a),Tc(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ba(t,e,n,r=!1,i=!1){const s=new Wf(t);let o;if(i)o=bs;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ha(t,e,n,r,i){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Ba(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Ba(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const s=await Ba(t,e,n,!1,!0);return r(t,s)}}async function E1(t){const e=Br(t),n=await Lf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Nf(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Wf(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e){const n=fa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ri(s,e??{}))return i;ir(i,"already-initialized")}return n.initialize({options:e})}function C1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Qn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function k1(t,e,n){const r=Br(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Gf(e),{host:o,port:a}=T1(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(ri(c,r.config.emulator)&&ri(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,jr(o)?(vc(`${s}//${o}${l}`),gc("Auth",!0)):x1()}function Gf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T1(t){const e=Gf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:id(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:id(o)}}}function id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="http://localhost";class si extends xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:S1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,e){return vn(t,"POST","/v1/accounts:sendVerificationCode",Bn(t,e))}async function A1(t,e){return pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Bn(t,e))}async function R1(t,e){const n=await pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Bn(t,e));if(n.temporaryProof)throw us(t,"account-exists-with-different-credential",n);return n}const P1={USER_NOT_FOUND:"user-not-found"};async function N1(t,e){const n={...e,operation:"REAUTH"};return pa(t,"POST","/v1/accounts:signInWithPhoneNumber",Bn(t,n),P1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends xc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return A1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return R1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return N1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ws({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends Kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends eo{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends eo{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends eo{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=od(r);return new ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=od(r);return new ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends dr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fo(e,n,r,i)}}function Yf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,s,e,r):s})}async function L1(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",r)}/**
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
 */async function O1(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await qi(t,Yf(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Cc(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),ji._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ir(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t,e,n=!1){if(cn(t.app))return Promise.reject(Rr(t));const r="signIn",i=await Yf(t,r,e),s=await ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function D1(t,e){return Qf(Br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e){return vn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qi(r,M1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function U1(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function F1(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Jf(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function z1(t){return tt(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e){return vn(t,"POST","/v2/accounts/mfaEnrollment:start",Bn(t,e))}const zo="__sak";/**
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
 */class Xf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=1e3,j1=10;class Zf extends Xf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);i1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zf.type="LOCAL";const B1=Zf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Xf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ep.type="SESSION";const tp=ep;/**
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
 */function H1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await H1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class V1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Sc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const u=p;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function W1(t){ot().location.href=t}/**
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
 */function Ac(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function G1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){return navigator?.serviceWorker?.controller||null}function Y1(){return Ac()?self:null}/**
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
 */const np="firebaseLocalStorageDb",Q1=1,qo="firebaseLocalStorage",rp="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function J1(){const t=indexedDB.deleteDatabase(np);return new to(t).toPromise()}function Il(){const t=indexedDB.open(np,Q1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qo,{keyPath:rp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qo)?e(r):(r.close(),await J1(),e(await Il()))})})}async function ld(t,e,n){const r=va(t,!0).put({[rp]:e,value:n});return new to(r).toPromise()}async function X1(t,e){const n=va(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function cd(t,e){const n=va(t,!0).delete(e);return new to(n).toPromise()}const Z1=800,ew=3;class ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(Y1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new V1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await ld(e,zo,"1"),await cd(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>X1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=va(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ip.type="LOCAL";const tw=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){return vn(t,"POST","/v2/accounts/mfaSignIn:start",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=Vf("rcb"),nw=new Xs(3e4,6e4);class rw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ot().grecaptcha?.render}load(e,n=""){return Y(iw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ju(ot().grecaptcha)?Promise.resolve(ot().grecaptcha):new Promise((r,i)=>{const s=ot().setTimeout(()=>{i(en(e,"network-request-failed"))},nw.get());ot()[Va]=()=>{ot().clearTimeout(s),delete ot()[Va];const a=ot().grecaptcha;if(!a||!Ju(a)){i(en(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const p=l(c,d);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${d1()}?${pi({onload:Va,render:"explicit",hl:n})}`;Tc(o).catch(()=>{clearTimeout(s),i(en(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ot().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class sw{async load(e){return new v1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="recaptcha",ow={theme:"light",type:"image"};class aw{constructor(e,n,r={...ow}){this.parameters=r,this.type=ys,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Br(e),this.isInvisible=this.parameters.size==="invisible",Y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;Y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sw:new rw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){Y(!this.parameters.sitekey,this.auth,"argument-error"),Y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ot()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){Y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Y(Sf()&&!Ac(),this.auth,"internal-error"),await lw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Kb(this.auth);Y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function lw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function uw(t,e,n){if(cn(t.app))return Promise.reject(Rr(t));const r=Br(t),i=await dw(r,e,tt(n));return new cw(i,s=>D1(r,s))}async function dw(t,e,n){if(!t._getRecaptchaConfig())try{await E1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){Y(i.type==="enroll",t,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===bs){Y(n?.type===ys,c,"argument-error");const p=await Wa(c,d,n);return ad(c,p)}return ad(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{Y(i.type==="signin",t,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;Y(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,o,"mfaSmsSignIn",async(d,p)=>{if(p.phoneSignInInfo.captchaResponse===bs){Y(n?.type===ys,d,"argument-error");const u=await Wa(d,p,n);return ud(d,u)}return ud(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ha(t,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===bs){Y(n?.type===ys,l,"argument-error");const d=await Wa(l,c,n);return sd(l,d)}return sd(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Wa(t,e,n){Y(n.type===ys,t,"argument-error");const r=await n.verify();Y(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function hw(t,e){return e?Qn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rc extends xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fw(t){return Qf(t.auth,new Rc(t),t.bypassAuthState)}function pw(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),O1(n,new Rc(t),t.bypassAuthState)}async function mw(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),L1(n,new Rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fw;case"linkViaPopup":case"linkViaRedirect":return mw;case"reauthViaPopup":case"reauthViaRedirect":return pw;default:ir(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Xs(2e3,1e4);class Ti extends sp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vw.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",yo=new Map;class _w extends sp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await bw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bw(t,e){const n=Ew(e),r=yw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ww(t,e){yo.set(t._key(),e)}function yw(t){return Qn(t._redirectPersistence)}function Ew(t){return wo(gw,t.config.apiKey,t.name)}async function Iw(t,e,n=!1){if(cn(t.app))return Promise.reject(Rr(t));const r=Br(t),i=hw(r,e),o=await new _w(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=600*1e3;class kw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!op(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(en(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cw&&this.cachedEventUids.clear(),this.cachedEventUids.has(dd(e))}saveEventToCache(e){this.cachedEventUids.add(dd(e)),this.lastProcessedEventTime=Date.now()}}function dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function op({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Tw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e={}){return vn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aw=/^https?/;async function Rw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xw(t);for(const n of e)try{if(Pw(n))return}catch{}ir(t,"unauthorized-domain")}function Pw(t){const e=yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Aw.test(n))return!1;if(Sw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Nw=new Xs(3e4,6e4);function hd(){const t=ot().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Lw(t){return new Promise((e,n)=>{function r(){hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hd(),n(en(t,"network-request-failed"))},timeout:Nw.get()})}if(ot().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ot().gapi?.load)r();else{const i=Vf("iframefcb");return ot()[i]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},Tc(`${f1()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Ow(t){return Eo=Eo||Lw(t),Eo}/**
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
 */const Dw=new Xs(5e3,15e3),Mw="__/auth/iframe",$w="emulator/auth/iframe",Uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zw(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ic(e,$w):`https://${t.config.authDomain}/${Mw}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=Fw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pi(r).slice(1)}`}async function qw(t){const e=await Ow(t),n=ot().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:zw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=ot().setTimeout(()=>{s(o)},Dw.get());function l(){ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bw=500,Hw=600,Vw="_blank",Ww="http://localhost";class fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gw(t,e,n,r=Bw,i=Hw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...jw,width:r.toString(),height:i.toString(),top:s,left:o},c=Ft().toLowerCase();n&&(a=Uf(c)?Vw:n),Mf(c)&&(e=e||Ww,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[v,g])=>`${u}${v}=${g},`,"");if(r1(c)&&a!=="_self")return Kw(e||"",a),new fd(null);const p=window.open(e||"",a,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new fd(p)}function Kw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yw="__/auth/handler",Qw="emulator/auth/handler",Jw=encodeURIComponent("fac");async function pd(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof Kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ml(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${Jw}=${encodeURIComponent(l)}`:"";return`${Xw(t)}?${pi(a).slice(1)}${c}`}function Xw({config:t}){return t.emulator?Ic(t,Qw):`https://${t.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class Zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tp,this._completeRedirectFn=Iw,this._overrideRedirectResult=ww}async _openPopup(e,n,r,i){sr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await pd(e,n,r,yl(),i);return Gw(e,s,Sc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pd(e,n,r,yl(),i);return W1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qw(e),r=new kw(e);return n.register("authEvent",i=>(Y(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},i=>{const s=i?.[0]?.[Ga];s!==void 0&&n(!!s),ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bf()||$f()||kc()}}const e0=Zw;var md="@firebase/auth",vd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r0(t){ii(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hf(t)},c=new c1(r,i,s,l);return C1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new Mr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new t0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(md,vd,n0(t)),Un(md,vd,"esm2020")}/**
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
 */const i0=300,s0=vf("authIdTokenMaxAge")||i0;let gd=null;const o0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s0)return;const i=n?.token;gd!==i&&(gd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function a0(t=yc()){const e=fa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I1(t,{popupRedirectResolver:e0,persistence:[tw,B1,tp]}),r=vf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=o0(s.toString());F1(n,o,()=>o(n.currentUser)),U1(n,a=>o(a))}}const i=ff("auth");return i&&k1(n,`http://${i}`),n}function l0(){return document.getElementsByTagName("head")?.[0]??document}u1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r0("Browser");var _d={};const bd="@firebase/database",wd="1.1.0";/**
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
 */let ap="";function c0(t){ap=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new u0(e)}}catch{}return new d0},Yr=lp("localStorage"),h0=lp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new bc("@firebase/database"),f0=(function(){let t=1;return function(){return t++}})(),cp=function(t){const e=S_(t),n=new C_;n.update(e);const r=n.digest();return pc.encodeByteArray(r)},no=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=no.apply(null,r):typeof r=="object"?e+=ht(r):e+=r,e+=" "}return e};let Es=null,yd=!0;const p0=function(t,e){O(!0,"Can't turn on custom loggers persistently."),Li.logLevel=De.VERBOSE,Es=Li.log.bind(Li)},bt=function(...t){if(yd===!0&&(yd=!1,Es===null&&h0.get("logging_enabled")===!0&&p0()),Es){const e=no.apply(null,t);Es(e)}},ro=function(t){return function(...e){bt(t,...e)}},Cl=function(...t){const e="FIREBASE INTERNAL ERROR: "+no(...t);Li.error(e)},or=function(...t){const e=`FIREBASE FATAL ERROR: ${no(...t)}`;throw Li.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+no(...t);Li.warn(e)},m0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},v0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",ar="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===oi||e===ar)return-1;if(e===oi||t===ar)return 1;{const n=Ed(t),r=Ed(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},g0=function(t,e){return t===e?0:t<e?-1:1},is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ht(e))},Nc=function(t){if(typeof t!="object"||t===null)return ht(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ht(e[r]),n+=":",n+=Nc(t[e[r]]);return n+="}",n},up=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dp=function(t){O(!Pc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),p=p+u}return p.toLowerCase()},_0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function w0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const y0=new RegExp("^-?(0*)\\d{1,10}$"),E0=-2147483648,I0=2147483647,Ed=function(t){if(y0.test(t)){const e=Number(t);if(e>=E0&&e<=I0)return e}return null},Ji=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},C0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class k0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,cn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Io{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Io.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",hp="v",fp="s",pp="r",mp="f",vp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gp="ls",_p="p",kl="ac",bp="websocket",wp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function x0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ep(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===bp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);x0(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.counters_={}}incrementCounter(e,n=1){jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={},Ya={};function Oc(t){const e=t.toString();return Ka[e]||(Ka[e]=new S0),Ka[e]}function A0(t,e){const n=t.toString();return Ya[n]||(Ya[n]=e()),Ya[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ji(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="start",P0="close",N0="pLPCommand",L0="pRTLPCB",Ip="id",Cp="pw",kp="ser",O0="cb",D0="seg",M0="ts",$0="d",U0="dframe",Tp=1870,xp=30,F0=Tp-xp,z0=25e3,q0=3e4;class xi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=Oc(n),this.urlFn=l=>(this.appCheckToken&&(l[kl]=this.appCheckToken),Ep(n,wp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new R0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q0)),v0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dc((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Id)this.id=a,this.password=l;else if(o===P0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Id]="t",r[kp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[O0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[hp]=Lc,this.transportSessionId&&(r[fp]=this.transportSessionId),this.lastSessionId&&(r[gp]=this.lastSessionId),this.applicationId&&(r[_p]=this.applicationId),this.appCheckToken&&(r[kl]=this.appCheckToken),typeof location<"u"&&location.hostname&&vp.test(location.hostname)&&(r[pp]=mp);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_0()&&!b0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=df(n),i=up(r,F0);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[U0]="t",r[Ip]=e,r[Cp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f0(),window[N0+this.uniqueCallbackIdentifier]=e,window[L0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ip]=this.myID,e[Cp]=this.myPW,e[kp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xp+r.length<=Tp;){const o=this.pendingSegs.shift();r=r+"&"+D0+i+"="+o.seg+"&"+M0+i+"="+o.ts+"&"+$0+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(z0)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=16384,B0=45e3;let jo=null;typeof MozWebSocket<"u"?jo=MozWebSocket:typeof WebSocket<"u"&&(jo=WebSocket);class In{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=Oc(n),this.connURL=In.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[hp]=Lc,typeof location<"u"&&location.hostname&&vp.test(location.hostname)&&(o[pp]=mp),n&&(o[fp]=n),r&&(o[gp]=r),i&&(o[kl]=i),s&&(o[_p]=s),Ep(e,bp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let r;v_(),this.mySock=new jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&jo!==null&&!In.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=up(n,j0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(B0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static get ALL_TRANSPORTS(){return[xi,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const i=this.transports_=[];for(const s of Os.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=6e4,V0=5e3,W0=10*1024,G0=100*1024,Qa="t",Cd="d",K0="s",kd="r",Y0="e",Td="o",xd="a",Sd="n",Ad="p",Q0="h";class J0{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>G0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>W0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qa in e){const n=e[Qa];n===xd?this.upgradeIfSecondaryHealthy_():n===kd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Td&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=is("t",e),r=is("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=is("t",e),r=is("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=is(Qa,e);if(Cd in e){const r=e[Cd];if(n===Q0){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Sd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===K0?this.onConnectionShutdown_(r):n===kd?this.onReset_(r):n===Y0?Cl("Server Error: "+r):n===Td?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lc!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(H0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(V0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Ap{static getInstance(){return new Bo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_c()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=32,Pd=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new Le("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $r(t){return t.pieces_.length-t.pieceNum_}function Ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function Mc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function X0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ds(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function Qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=we(t),r=we(e);if(n===null)return e;if(n===r)return $t(Ue(t),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Z0(t,e){const n=Ds(t,0),r=Ds(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function $c(t,e){if($r(t)!==$r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function un(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($r(t)>$r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ey{constructor(e,n){this.errorPrefix_=n,this.parts_=Ds(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ha(this.parts_[r]);Pp(this)}}function ty(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ha(e),Pp(t)}function ny(t){const e=t.parts_.pop();t.byteLength_-=ha(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pp(t){if(t.byteLength_>Pd)throw new Error(t.errorPrefix_+"has a key path longer than "+Pd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rd+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Ap{static getInstance(){return new Uc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1e3,ry=300*1e3,Nd=30*1e3,iy=1.3,sy=3e4,oy="server_kill",Ld=3;class nr extends Sp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nr.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=ry,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ht(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Qs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jn(e,"w")){const r=zi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||I_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cl("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sy&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(p){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=u&&u.token,a=new J0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Ut(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(oy)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ut(p),l())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Le(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ld&&(this.reconnectDelay_=Nd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ld&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ap.replace(/\./g,"-")]=1,_c()?e["framework.cordova"]=1:_f()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bo.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ga{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ee(oi,e),i=new Ee(oi,n);return this.compare(r,i)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;class Np extends ga{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(ar,po)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,po)}toString(){return".key"}}const Pr=new Np;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??Bt.EMPTY_NODE,this.right=s??Bt.EMPTY_NODE}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class ay{copy(e,n,r,i,s){return this}insert(e,n,r){return new vt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new ay;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e){return vi(t.name,e.name)}function Fc(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function cy(t){Tl=t}const Lp=function(t){return typeof t=="number"?"number:"+dp(t):"string:"+t},Op=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jn(e,".sv"),"Priority must be a string or number.")}else O(t===Tl||t.isEmpty(),"priority of unexpected type.");O(t===Tl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od;class mt{static set __childrenNodeConstructor(e){Od=e}static get __childrenNodeConstructor(){return Od}constructor(e,n=mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Op(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new mt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:we(e)===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=we(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||$r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,mt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dp(this.value_):e+=this.value_,this.lazyHash_=cp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===mt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof mt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=mt.VALUE_TYPE_ORDER.indexOf(n),s=mt.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp,Mp;function uy(t){Dp=t}function dy(t){Mp=t}class hy extends ga{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(ar,new mt("[PRIORITY-POST]",Mp))}makePost(e,n){const r=Dp(e);return new Ee(n,new mt("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new hy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=Math.log(2);class py{constructor(e){const n=s=>parseInt(Math.log(s)/fy,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ho=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let p,u;if(d===0)return null;if(d===1)return p=t[l],u=n?n(p):p,new vt(u,p.node,vt.BLACK,null,null);{const v=parseInt(d/2,10)+l,g=i(l,v),w=i(v+1,c);return p=t[v],u=n?n(p):p,new vt(u,p.node,vt.BLACK,g,w)}},s=function(l){let c=null,d=null,p=t.length;const u=function(g,w){const E=p-g,T=p;p-=g;const C=i(E+1,T),A=t[E],L=n?n(A):A;v(new vt(L,A.node,w,null,C))},v=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));w?u(E,vt.BLACK):(u(E,vt.BLACK),u(E,vt.RED))}return d},o=new py(t.length),a=s(o);return new Bt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja;const Ii={};class Jn{static get Default(){return O(Ii&&We,"ChildrenNode.ts has not been loaded"),Ja=Ja||new Jn({".priority":Ii},{".priority":We}),Ja}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=zi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return jn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Pr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ho(r,e.getCompare()):a=Ii;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Jn(d,c)}addToIndexes(e,n){const r=Oo(this.indexes_,(i,s)=>{const o=zi(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===Ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ho(a,o.getCompare())}else return Ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oo(this.indexes_,i=>{if(i===Ii)return i;{const s=n.get(e.name);return s?i.remove(new Ee(e.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os;class ae{static get EMPTY_NODE(){return os||(os=new ae(new Bt(Fc),null,Jn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Op(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||os}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?os:n}}getChild(e){const n=we(e);return n===null?this:this.getImmediateChild(n).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?os:this.priorityNode_;return new ae(i,o,s)}}updateChild(e,n){const r=we(e);if(r===null)return n;{O(we(e)!==".priority"||$r(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lp(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===Pr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pr?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class my extends ae{constructor(){super(new Bt(Fc),ae.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const io=new my;Object.defineProperties(Ee,{MIN:{value:new Ee(oi,ae.EMPTY_NODE)},MAX:{value:new Ee(ar,io)}});Np.__EMPTY_NODE=ae.EMPTY_NODE;mt.__childrenNodeConstructor=ae;cy(io);dy(io);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=!0;function dt(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new mt(n,dt(e))}if(!(t instanceof Array)&&vy){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=dt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const s=Ho(n,ly,o=>o.name,Fc);if(r){const o=Ho(n,We.getCompare());return new ae(s,dt(e),new Jn({".priority":o},{".priority":We}))}else return new ae(s,dt(e),Jn.Default)}else{let n=ae.EMPTY_NODE;return yt(t,(r,i)=>{if(jn(t,r)&&r.substring(0,1)!=="."){const s=dt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(dt(e))}}uy(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends ga{constructor(e){super(),this.indexPath_=e,O(!ye(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vi(e.name,n.name):s}makePost(e,n){const r=dt(e),i=ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(n,i)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,io);return new Ee(ar,e)}toString(){return Ds(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends ga{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const r=dt(e);return new Ee(n,r)}toString(){return".value"}}const $p=new gy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){return{type:"value",snapshotNode:t}}function Bi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ms(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _y(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ms(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bi(n,r)):o.trackChildChange($s(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ms(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($s(i,s,o))}else r.trackChildChange(Bi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ae.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.indexedFilter_=new qc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Ee(n,r))||(r=ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ae.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ae.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,a)=>{s.matches(new Ee(o,a))||(i=i.updateImmediateChild(o,ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Ee(n,r))||(r=ae.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ae.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ae.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(u,v)=>p(v,u)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new Ee(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const p=a.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const v=u==null?1:o(u,l);if(d&&!r.isEmpty()&&v>=0)return s?.trackChildChange($s(n,r,p)),a.updateImmediateChild(n,r);{s?.trackChildChange(Ms(n,p));const w=a.updateImmediateChild(n,ae.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(Bi(u.name,u.node)),w.updateImmediateChild(u.name,u.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Ms(c.name,c.node)),s.trackChildChange(Bi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wy(t){return t.loadsAllData()?new qc(t.getIndex()):t.hasLimit()?new by(t):new Us(t)}function yy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Ey(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Dd(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Iy(t,e,n){let r;return t.index_===Pr||n?r=Dd(t,e,n):r=Dd(t,e,ar),r.startAfterSet_=!0,r}function Cy(t,e){const n=t.copy();return n.index_=e,n}function Md(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===$p?n="$value":t.index_===Pr?n="$key":(O(t.index_ instanceof zc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ht(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ht(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ht(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ht(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $d(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends Sp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ro("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Md(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),zi(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=Vo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Md(e._queryParams),r=e._path.toString(),i=new Qs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ns(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return{value:null,children:new Map}}function Fp(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=we(e);t.children.has(r)||t.children.set(r,Wo());const i=t.children.get(r);e=Ue(e),Fp(i,e,n)}}function xl(t,e,n){t.value!==null?n(e,t.value):Ty(t,(r,i)=>{const s=new Le(e.toString()+"/"+r);xl(i,s,n)})}function Ty(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=10*1e3,Sy=30*1e3,Ay=300*1e3;class Ry{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xy(e);const r=Ud+(Sy-Ud)*Math.random();Is(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&jn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ay))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function Bc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Tn.ACK_USER_WRITE,this.source=Bc()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new Go(Ae(),n,this.revert)}}else return O(we(this.path)===e,"operationForChild called for unrelated child."),new Go(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.source=e,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new Fs(this.source,Ae()):new Fs(this.source,Ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Tn.OVERWRITE}operationForChild(e){return ye(this.path)?new ai(this.source,Ae(),this.snap.getImmediateChild(e)):new ai(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Tn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new ai(this.source,Ae(),n.value):new Hi(this.source,Ae(),n)}else return O(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=we(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ny(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_y(o.childName,o.snapshotNode))}),as(t,i,"child_removed",e,r,n),as(t,i,"child_added",e,r,n),as(t,i,"child_moved",s,r,n),as(t,i,"child_changed",e,r,n),as(t,i,"value",e,r,n),i}function as(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Oy(t,a,l)),o.forEach(a=>{const l=Ly(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ly(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Oy(t,e,n){if(e.childName==null||n.childName==null)throw Qi("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),i=new Ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e){return{eventCache:t,serverCache:e}}function Cs(t,e,n,r){return _a(new Ur(e,n,r),t.serverCache)}function zp(t,e,n,r){return _a(t.eventCache,new Ur(e,n,r))}function Ko(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;const Dy=()=>(Xa||(Xa=new Bt(g0)),Xa);class $e{static fromObject(e){let n=new $e(null);return yt(e,(r,i)=>{n=n.set(new Le(r),i)}),n}constructor(e,n=Dy()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(ye(e))return null;{const r=we(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ue(e),n);return s!=null?{path:Qe(new Le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=we(e),r=this.children.get(n);return r!==null?r.subtree(Ue(e)):new $e(null)}}set(e,n){if(ye(e))return new $e(n,this.children);{const r=we(e),s=(this.children.get(r)||new $e(null)).set(Ue(e),n),o=this.children.insert(r,s);return new $e(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=we(e),r=this.children.get(n);if(r){const i=r.remove(Ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new $e(null):new $e(this.value,s)}else return this}}get(e){if(ye(e))return this.value;{const n=we(e),r=this.children.get(n);return r?r.get(Ue(e)):null}}setTree(e,n){if(ye(e))return n;{const r=we(e),s=(this.children.get(r)||new $e(null)).setTree(Ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $e(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(e))return null;{const s=we(e),o=this.children.get(s);return o?o.findOnPath_(Ue(e),Qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const i=we(e),s=this.children.get(i);return s?s.foreachOnPath_(Ue(e),Qe(n,i),r):new $e(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new $e(null))}}function ks(t,e,n){if(ye(e))return new xn(new $e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$t(i,e);return s=s.updateChild(o,n),new xn(t.writeTree_.set(i,s))}else{const i=new $e(n),s=t.writeTree_.setTree(e,i);return new xn(s)}}}function Sl(t,e,n){let r=t;return yt(n,(i,s)=>{r=ks(r,Qe(e,i),s)}),r}function Fd(t,e){if(ye(e))return xn.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new xn(n)}}function Al(t,e){return gi(t,e)!=null}function gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function zd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new Ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ee(r,i.value))}),e}function Nr(t,e){if(ye(e))return t;{const n=gi(t,e);return n!=null?new xn(new $e(n)):new xn(t.writeTree_.subtree(e))}}function Rl(t){return t.writeTree_.isEmpty()}function Vi(t,e){return qp(Ae(),t.writeTree_,e)}function qp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=qp(Qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return Vp(e,t)}function My(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ks(t.visibleWrites,e,n)),t.lastWriteId=r}function $y(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Sl(t.visibleWrites,e,n),t.lastWriteId=r}function Uy(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Fy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zy(a,r.path)?i=!1:un(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return qy(t),!0;if(r.snap)t.visibleWrites=Fd(t.visibleWrites,r.path);else{const a=r.children;yt(a,l=>{t.visibleWrites=Fd(t.visibleWrites,Qe(r.path,l))})}return!0}else return!1}function zy(t,e){if(t.snap)return un(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&un(Qe(t.path,n),e))return!0;return!1}function qy(t){t.visibleWrites=jp(t.allWrites,jy,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jy(t){return t.visible}function jp(t,e,n){let r=xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)un(n,o)?(a=$t(n,o),r=ks(r,a,s.snap)):un(o,n)&&(a=$t(o,n),r=ks(r,Ae(),s.snap.getChild(a)));else if(s.children){if(un(n,o))a=$t(n,o),r=Sl(r,a,s.children);else if(un(o,n))if(a=$t(o,n),ye(a))r=Sl(r,Ae(),s.children);else{const l=zi(s.children,we(a));if(l){const c=l.getChild(Ue(a));r=ks(r,Ae(),c)}}}else throw Qi("WriteRecord should have .snap or .children")}}return r}function Bp(t,e,n,r,i){if(!r&&!i){const s=gi(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(Rl(o))return n;if(n==null&&!Al(o,Ae()))return null;{const a=n||ae.EMPTY_NODE;return Vi(o,a)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&Rl(s))return n;if(!i&&n==null&&!Al(s,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(un(c.path,e)||un(e,c.path))},a=jp(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return Vi(a,l)}}}function By(t,e,n){let r=ae.EMPTY_NODE;const i=gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Vi(Nr(s,new Le(o)),a);r=r.updateImmediateChild(o,l)}),zd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return zd(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Hy(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qe(e,n);if(Al(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return Rl(o)?i.getChild(n):Vi(o,i.getChild(n))}}function Vy(t,e,n,r){const i=Qe(e,n),s=gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return Vi(o,r.getNode().getImmediateChild(n))}else return null}function Wy(t,e){return gi(t.visibleWrites,e)}function Gy(t,e,n,r,i,s,o){let a;const l=Nr(t.visibleWrites,e),c=gi(l,Ae());if(c!=null)a=c;else if(n!=null)a=Vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],p=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=u.getNext();for(;v&&d.length<i;)p(v,r)!==0&&d.push(v),v=u.getNext();return d}else return[]}function Ky(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Yo(t,e,n,r){return Bp(t.writeTree,t.treePath,e,n,r)}function Wc(t,e){return By(t.writeTree,t.treePath,e)}function qd(t,e,n,r){return Hy(t.writeTree,t.treePath,e,n,r)}function Qo(t,e){return Wy(t.writeTree,Qe(t.treePath,e))}function Yy(t,e,n,r,i,s){return Gy(t.writeTree,t.treePath,e,n,r,i,s)}function Gc(t,e,n){return Vy(t.writeTree,t.treePath,e,n)}function Hp(t,e){return Vp(Qe(t.treePath,e),t.writeTree)}function Vp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ms(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Bi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$s(r,e.snapshotNode,i.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Wp=new Jy;class Kc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),s=Yy(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){return{filter:t}}function Zy(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eE(t,e,n,r,i){const s=new Qy;let o,a;if(n.type===Tn.OVERWRITE){const c=n;c.source.fromUser?o=Pl(t,e,c.path,c.snap,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Jo(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Tn.MERGE){const c=n;c.source.fromUser?o=nE(t,e,c.path,c.children,r,i,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nl(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Tn.ACK_USER_WRITE){const c=n;c.revert?o=sE(t,e,c.path,r,i,s):o=rE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Tn.LISTEN_COMPLETE)o=iE(t,e,n.path,r,s);else throw Qi("Unknown operation type: "+n.type);const l=s.getChanges();return tE(e,o,l),{viewCache:o,changes:l}}function tE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ko(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Up(Ko(e)))}}function Gp(t,e,n,r,i,s){const o=e.eventCache;if(Qo(r,n)!=null)return e;{let a,l;if(ye(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=li(e),d=c instanceof ae?c:ae.EMPTY_NODE,p=Wc(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Yo(r,li(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=we(n);if(c===".priority"){O($r(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const p=qd(r,n,d,l);p!=null?a=t.filter.updatePriority(d,p):a=o.getNode()}else{const d=Ue(n);let p;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=qd(r,n,o.getNode(),l);u!=null?p=o.getNode().getImmediateChild(c).updateChild(d,u):p=o.getNode().getImmediateChild(c)}else p=Gc(r,c,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),c,p,d,i,s):a=o.getNode()}}return Cs(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Jo(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),v,null)}else{const v=we(n);if(!l.isCompleteForPath(n)&&$r(n)>1)return e;const g=Ue(n),E=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),v,E,g,Wp,null)}const p=zp(e,c,l.isFullyInitialized()||ye(n),d.filtersNodes()),u=new Kc(i,p,s);return Gp(t,p,n,i,u,a)}function Pl(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Kc(i,e,s);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Cs(e,c,!0,t.filter.filtersNodes());else{const p=we(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Cs(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=Ue(n),v=a.getNode().getImmediateChild(p);let g;if(ye(u))g=r;else{const w=d.getCompleteChild(p);w!=null?Mc(u)===".priority"&&w.getChild(Rp(u)).isEmpty()?g=w:g=w.updateChild(u,r):g=ae.EMPTY_NODE}if(v.equals(g))l=e;else{const w=t.filter.updateChild(a.getNode(),p,g,u,d,o);l=Cs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jd(t,e){return t.eventCache.isCompleteForChild(e)}function nE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Qe(n,l);jd(e,we(d))&&(a=Pl(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Qe(n,l);jd(e,we(d))||(a=Pl(t,a,d,c,i,s,o))}),a}function Bd(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nl(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=r:c=new $e(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,u)=>{if(d.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),g=Bd(t,v,u);l=Jo(t,l,new Le(p),g,i,s,o,a)}}),c.children.inorderTraversal((p,u)=>{const v=!e.serverCache.isCompleteForChild(p)&&u.value===null;if(!d.hasChild(p)&&!v){const g=e.serverCache.getNode().getImmediateChild(p),w=Bd(t,g,u);l=Jo(t,l,new Le(p),w,i,s,o,a)}}),l}function rE(t,e,n,r,i,s,o){if(Qo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jo(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ye(n)){let c=new $e(null);return l.getNode().forEachChild(Pr,(d,p)=>{c=c.set(new Le(d),p)}),Nl(t,e,n,c,i,s,a,o)}else return e}else{let c=new $e(null);return r.foreach((d,p)=>{const u=Qe(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),Nl(t,e,n,c,i,s,a,o)}}function iE(t,e,n,r,i){const s=e.serverCache,o=zp(e,s.getNode(),s.isFullyInitialized()||ye(n),s.isFiltered());return Gp(t,o,n,r,Wp,i)}function sE(t,e,n,r,i,s){let o;if(Qo(r,n)!=null)return e;{const a=new Kc(r,e,i),l=e.eventCache.getNode();let c;if(ye(n)||we(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yo(r,li(e));else{const p=e.serverCache.getNode();O(p instanceof ae,"serverChildren would be complete if leaf node"),d=Wc(r,p)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=we(n);let p=Gc(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=l.getImmediateChild(d)),p!=null?c=t.filter.updateChild(l,d,p,Ue(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,ae.EMPTY_NODE,Ue(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yo(r,li(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Qo(r,Ae())!=null,Cs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new qc(r.getIndex()),s=wy(r);this.processor_=Xy(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ae.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ae.EMPTY_NODE,a.getNode(),null),d=new Ur(l,o.isFullyInitialized(),i.filtersNodes()),p=new Ur(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_a(p,d),this.eventGenerator_=new Py(this.query_)}get query(){return this.query_}}function aE(t){return t.viewCache_.serverCache.getNode()}function lE(t){return Ko(t.viewCache_)}function cE(t,e){const n=li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(we(e)).isEmpty())?n.getChild(e):null}function Hd(t){return t.eventRegistrations_.length===0}function uE(t,e){t.eventRegistrations_.push(e)}function Vd(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wd(t,e,n,r){e.type===Tn.MERGE&&e.source.queryId!==null&&(O(li(t.viewCache_),"We should always have a full cache before handling merges"),O(Ko(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=eE(t.processor_,i,e,n,r);return Zy(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Kp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(Bi(s,o))}),n.isFullyInitialized()&&r.push(Up(n.getNode())),Kp(t,r,n.getNode(),e)}function Kp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Ny(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class Yp{constructor(){this.views=new Map}}function hE(t){O(!Xo,"__referenceConstructor has already been defined"),Xo=t}function fE(){return O(Xo,"Reference.ts has not been loaded"),Xo}function pE(t){return t.views.size===0}function Yc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),Wd(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wd(o,e,n,r));return s}}function Qp(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yo(n,i?r:null),l=!1;a?l=!0:r instanceof ae?(a=Wc(n,r),l=!1):(a=ae.EMPTY_NODE,l=!1);const c=_a(new Ur(a,l,!1),new Ur(r,i,!1));return new oE(e,c)}return o}function mE(t,e,n,r,i,s){const o=Qp(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uE(o,n),dE(o,n)}function vE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Vd(c,n,r)),Hd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Vd(l,n,r)),Hd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fr(t)&&s.push(new(fE())(e._repo,e._path)),{removed:s,events:o}}function Jp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lr(t,e){let n=null;for(const r of t.views.values())n=n||cE(r,e);return n}function Xp(t,e){if(e._queryParams.loadsAllData())return wa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Zp(t,e){return Xp(t,e)!=null}function Fr(t){return wa(t)!=null}function wa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;function gE(t){O(!Zo,"__referenceConstructor has already been defined"),Zo=t}function _E(){return O(Zo,"Reference.ts has not been loaded"),Zo}let bE=1;class Gd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=Ky(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function em(t,e,n,r,i){return My(t.pendingWriteTree_,e,n,r,i),i?Xi(t,new ai(Bc(),e,n)):[]}function wE(t,e,n,r){$y(t.pendingWriteTree_,e,n,r);const i=$e.fromObject(n);return Xi(t,new Hi(Bc(),e,i))}function kr(t,e,n=!1){const r=Uy(t.pendingWriteTree_,e);if(Fy(t.pendingWriteTree_,e)){let s=new $e(null);return r.snap!=null?s=s.set(Ae(),!0):yt(r.children,o=>{s=s.set(new Le(o),!0)}),Xi(t,new Go(r.path,s,n))}else return[]}function so(t,e,n){return Xi(t,new ai(Hc(),e,n))}function yE(t,e,n){const r=$e.fromObject(n);return Xi(t,new Hi(Hc(),e,r))}function EE(t,e){return Xi(t,new Fs(Hc(),e))}function IE(t,e,n){const r=Jc(t,n);if(r){const i=Xc(r),s=i.path,o=i.queryId,a=$t(s,e),l=new Fs(Vc(o),a);return Zc(t,s,l)}else return[]}function ea(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Zp(o,e))){const l=vE(o,e,n,r);pE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(u,v)=>Fr(v));if(d&&!p){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const v=TE(u);for(let g=0;g<v.length;++g){const w=v[g],E=w.query,T=im(t,w);t.listenProvider_.startListening(Ts(E),zs(t,E),T.hashFn,T.onComplete)}}}!p&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ts(e),null):c.forEach(u=>{const v=t.queryToTagMap.get(ya(u));t.listenProvider_.stopListening(Ts(u),v)}))}xE(t,c)}return a}function tm(t,e,n,r){const i=Jc(t,r);if(i!=null){const s=Xc(i),o=s.path,a=s.queryId,l=$t(o,e),c=new ai(Vc(a),l,n);return Zc(t,o,c)}else return[]}function CE(t,e,n,r){const i=Jc(t,r);if(i){const s=Xc(i),o=s.path,a=s.queryId,l=$t(o,e),c=$e.fromObject(n),d=new Hi(Vc(a),l,c);return Zc(t,o,d)}else return[]}function Ll(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,v)=>{const g=$t(u,i);s=s||Lr(v,g),o=o||Fr(v)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||Lr(a,Ae())):(a=new Yp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ae.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,g)=>{const w=Lr(g,Ae());w&&(s=s.updateImmediateChild(v,w))}));const c=Zp(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=ya(e);O(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const v=SE();t.queryToTagMap.set(u,v),t.tagToQueryMap.set(v,u)}const d=ba(t.pendingWriteTree_,i);let p=mE(a,e,n,d,s,l);if(!c&&!o&&!r){const u=Xp(a,e);p=p.concat(AE(t,e,u))}return p}function Qc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),c=Lr(a,l);if(c)return c});return Bp(i,e,s,n,!0)}function kE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const p=$t(c,n);r=r||Lr(d,p)});let i=t.syncPointTree_.get(n);i?r=r||Lr(i,Ae()):(i=new Yp,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ur(r,!0,!1):null,a=ba(t.pendingWriteTree_,e._path),l=Qp(i,e,a,s?o.getNode():ae.EMPTY_NODE,s);return lE(l)}function Xi(t,e){return nm(e,t.syncPointTree_,null,ba(t.pendingWriteTree_,Ae()))}function nm(t,e,n,r){if(ye(t.path))return rm(t,e,n,r);{const i=e.get(Ae());n==null&&i!=null&&(n=Lr(i,Ae()));let s=[];const o=we(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Hp(r,o);s=s.concat(nm(a,l,c,d))}return i&&(s=s.concat(Yc(i,t,r,n))),s}}function rm(t,e,n,r){const i=e.get(Ae());n==null&&i!=null&&(n=Lr(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Hp(r,o),d=t.operationForChild(o);d&&(s=s.concat(rm(d,a,l,c)))}),i&&(s=s.concat(Yc(i,t,r,n))),s}function im(t,e){const n=e.query,r=zs(t,n);return{hashFn:()=>(aE(e)||ae.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?IE(t,n._path,r):EE(t,n._path);{const s=w0(i,n);return ea(t,n,null,s)}}}}function zs(t,e){const n=ya(e);return t.queryToTagMap.get(n)}function ya(t){return t._path.toString()+"$"+t._queryIdentifier}function Jc(t,e){return t.tagToQueryMap.get(e)}function Xc(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function Zc(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=ba(t.pendingWriteTree_,e);return Yc(r,n,i,null)}function TE(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[wa(n)];{let i=[];return n&&(i=Jp(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_E())(t._repo,t._path):t}function xE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ya(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function SE(){return bE++}function AE(t,e,n){const r=e._path,i=zs(t,e),s=im(t,n),o=t.listenProvider_.startListening(Ts(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,p)=>{if(!ye(c)&&d&&Fr(d))return[wa(d).query];{let u=[];return d&&(u=u.concat(Jp(d).map(v=>v.query))),yt(p,(v,g)=>{u=u.concat(g)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Ts(d),zs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eu(n)}node(){return this.node_}}class tu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new tu(this.syncTree_,n)}node(){return Qc(this.syncTree_,this.path_)}}const RE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kd=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return PE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NE(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},PE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},NE=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},sm=function(t,e,n,r){return nu(e,new tu(n,t),r)},om=function(t,e,n){return nu(t,new eu(e),n)};function nu(t,e,n){const r=t.getPriority().val(),i=Kd(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Kd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new mt(a,dt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new mt(i))),o.forEachChild(We,(a,l)=>{const c=nu(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function iu(t,e){let n=e instanceof Le?e:new Le(e),r=t,i=we(n);for(;i!==null;){const s=zi(r.node.children,i)||{children:{},childCount:0};r=new ru(i,r,s),n=Ue(n),i=we(n)}return r}function Zi(t){return t.node.value}function am(t,e){t.node.value=e,Ol(t)}function lm(t){return t.node.childCount>0}function LE(t){return Zi(t)===void 0&&!lm(t)}function Ea(t,e){yt(t.node.children,(n,r)=>{e(new ru(n,t,r))})}function cm(t,e,n,r){n&&e(t),Ea(t,i=>{cm(i,e,!0)})}function OE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oo(t){return new Le(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Ol(t){t.parent!==null&&DE(t.parent,t.name,t)}function DE(t,e,n){const r=LE(n),i=jn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ol(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ol(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/[\[\].#$\/\u0000-\u001F\u007F]/,$E=/[\[\].#$\u0000-\u001F\u007F]/,Za=10*1024*1024,su=function(t){return typeof t=="string"&&t.length!==0&&!ME.test(t)},um=function(t){return typeof t=="string"&&t.length!==0&&!$E.test(t)},UE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),um(t)},Dl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pc(t)||t&&typeof t=="object"&&jn(t,".sv")},ou=function(t,e,n,r){r&&e===void 0||Ia(da(t,"value"),e,n)},Ia=function(t,e,n){const r=n instanceof Le?new ey(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(Pc(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>Za/3&&ha(e)>Za)throw new Error(t+"contains a string greater than "+Za+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!su(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ty(r,o),Ia(t,a,r),ny(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},FE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ds(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!su(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Z0);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&un(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},zE=function(t,e,n,r){const i=da(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];yt(e,(o,a)=>{const l=new Le(o);if(Ia(i,a,Qe(n,l)),Mc(l)===".priority"&&!Dl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FE(i,s)},au=function(t,e,n,r){if(!um(n))throw new Error(da(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),au(t,e,n)},lu=function(t,e){if(we(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!su(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UE(n))throw new Error(da(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ca(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!$c(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function dm(t,e,n){Ca(t,n),hm(t,r=>$c(r,e))}function mn(t,e,n){Ca(t,n),hm(t,r=>un(r,e)||un(e,r))}function hm(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Es&&bt("event: "+n.toString()),Ji(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="repo_interrupt",WE=25;class GE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wo(),this.transactionQueueTree_=new ru,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KE(t,e,n){if(t.stats_=Oc(t.repoInfo_),t.forceRestClient_||C0())t.server_=new Vo(t.repoInfo_,(r,i,s,o)=>{Yd(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nr(t.repoInfo_,e,(r,i,s,o)=>{Yd(t,r,i,s,o)},r=>{Qd(t,r)},r=>{YE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=A0(t.repoInfo_,()=>new Ry(t.stats_,t.server_)),t.infoData_=new ky,t.infoSyncTree_=new Gd({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=so(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cu(t,"connected",!1),t.serverSyncTree_=new Gd({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);mn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fm(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ka(t){return RE({timestamp:fm(t)})}function Yd(t,e,n,r,i){t.dataUpdateCount++;const s=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Oo(n,c=>dt(c));o=CE(t.serverSyncTree_,s,l,i)}else{const l=dt(n);o=tm(t.serverSyncTree_,s,l,i)}else if(r){const l=Oo(n,c=>dt(c));o=yE(t.serverSyncTree_,s,l)}else{const l=dt(n);o=so(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Wi(t,s)),mn(t.eventQueue_,a,o)}function Qd(t,e){cu(t,"connected",e),e===!1&&ZE(t)}function YE(t,e){yt(e,(n,r)=>{cu(t,n,r)})}function cu(t,e,n){const r=new Le("/.info/"+e),i=dt(n);t.infoData_.updateSnapshot(r,i);const s=so(t.infoSyncTree_,r,i);mn(t.eventQueue_,r,s)}function uu(t){return t.nextWriteId_++}function QE(t,e,n){const r=kE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=dt(i).withIndex(e._queryParams.getIndex());Ll(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=so(t.serverSyncTree_,e._path,s);else{const a=zs(t.serverSyncTree_,e);o=tm(t.serverSyncTree_,e._path,s,a)}return mn(t.eventQueue_,e._path,o),ea(t.serverSyncTree_,e,n,null,!0),s},i=>(ao(t,"get for query "+ht(e)+" failed: "+i),Promise.reject(new Error(i))))}function JE(t,e,n,r,i){ao(t,"set",{path:e.toString(),value:n,priority:r});const s=ka(t),o=dt(n,r),a=Qc(t.serverSyncTree_,e),l=om(o,a,s),c=uu(t),d=em(t.serverSyncTree_,e,l,c,!0);Ca(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,v)=>{const g=u==="ok";g||Ut("set at "+e+" failed: "+u);const w=kr(t.serverSyncTree_,c,!g);mn(t.eventQueue_,e,w),$l(t,i,u,v)});const p=hu(t,e);Wi(t,p),mn(t.eventQueue_,p,[])}function XE(t,e,n,r){ao(t,"update",{path:e.toString(),value:n});let i=!0;const s=ka(t),o={};if(yt(n,(a,l)=>{i=!1,o[a]=sm(Qe(e,a),dt(l),t.serverSyncTree_,s)}),i)bt("update() called with empty data.  Don't do anything."),$l(t,r,"ok",void 0);else{const a=uu(t),l=wE(t.serverSyncTree_,e,o,a);Ca(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const p=c==="ok";p||Ut("update at "+e+" failed: "+c);const u=kr(t.serverSyncTree_,a,!p),v=u.length>0?Wi(t,e):e;mn(t.eventQueue_,v,u),$l(t,r,c,d)}),yt(n,c=>{const d=hu(t,Qe(e,c));Wi(t,d)}),mn(t.eventQueue_,e,[])}}function ZE(t){ao(t,"onDisconnectEvents");const e=ka(t),n=Wo();xl(t.onDisconnect_,Ae(),(i,s)=>{const o=sm(i,s,t.serverSyncTree_,e);Fp(n,i,o)});let r=[];xl(n,Ae(),(i,s)=>{r=r.concat(so(t.serverSyncTree_,i,s));const o=hu(t,i);Wi(t,o)}),t.onDisconnect_=Wo(),mn(t.eventQueue_,Ae(),r)}function eI(t,e,n){let r;we(e._path)===".info"?r=Ll(t.infoSyncTree_,e,n):r=Ll(t.serverSyncTree_,e,n),dm(t.eventQueue_,e._path,r)}function Ml(t,e,n){let r;we(e._path)===".info"?r=ea(t.infoSyncTree_,e,n):r=ea(t.serverSyncTree_,e,n),dm(t.eventQueue_,e._path,r)}function tI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(VE)}function ao(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function $l(t,e,n,r){e&&Ji(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pm(t,e,n){return Qc(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function du(t,e=t.transactionQueueTree_){if(e||Ta(t,e),Zi(e)){const n=vm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nI(t,oo(e),n)}else lm(e)&&Ea(e,n=>{du(t,n)})}function nI(t,e,n){const r=n.map(c=>c.currentWriteId),i=pm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];O(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=$t(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ao(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(kr(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&p.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();Ta(t,iu(t.transactionQueueTree_,e)),du(t,t.transactionQueueTree_),mn(t.eventQueue_,e,d);for(let u=0;u<p.length;u++)Ji(p[u])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ut("transaction at "+l.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Wi(t,e)}},o)}function Wi(t,e){const n=mm(t,e),r=oo(n),i=vm(t,n);return rI(t,i,r),r}function rI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$t(n,l.path);let d=!1,p;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,p=l.abortReason,i=i.concat(kr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WE)d=!0,p="maxretry",i=i.concat(kr(t.serverSyncTree_,l.currentWriteId,!0));else{const u=pm(t,l.path,o);l.currentInputSnapshot=u;const v=e[a].update(u.val());if(v!==void 0){Ia("transaction failed: Data returned ",v,l.path);let g=dt(v);typeof v=="object"&&v!=null&&jn(v,".priority")||(g=g.updatePriority(u.getPriority()));const E=l.currentWriteId,T=ka(t),C=om(g,u,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=uu(t),o.splice(o.indexOf(E),1),i=i.concat(em(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(kr(t.serverSyncTree_,E,!0))}else d=!0,p="nodata",i=i.concat(kr(t.serverSyncTree_,l.currentWriteId,!0))}mn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Ta(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ji(r[a]);du(t,t.transactionQueueTree_)}function mm(t,e){let n,r=t.transactionQueueTree_;for(n=we(e);n!==null&&Zi(r)===void 0;)r=iu(r,n),e=Ue(e),n=we(e);return r}function vm(t,e){const n=[];return gm(t,e,n),n.sort((r,i)=>r.order-i.order),n}function gm(t,e,n){const r=Zi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ea(e,i=>{gm(t,i,n)})}function Ta(t,e){const n=Zi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,am(e,n.length>0?n:void 0)}Ea(e,r=>{Ta(t,r)})}function hu(t,e){const n=oo(mm(t,e)),r=iu(t.transactionQueueTree_,e);return OE(r,i=>{el(t,i)}),el(t,r),cm(r,i=>{el(t,i)}),n}function el(t,e){const n=Zi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?am(e,void 0):n.length=s+1,mn(t.eventQueue_,oo(e),i);for(let o=0;o<r.length;o++)Ji(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jd=function(t,e){const n=oI(t),r=n.namespace;n.domain==="firebase.com"&&or(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||m0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yp(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Le(n.pathString)}},oI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=iI(t.substring(d,p)));const u=sI(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",aI=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Xd.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Xd.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ht(this.snapshot.exportVal())}}class cI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:Mc(this._path)}get ref(){return new hr(this._repo,this._path)}get _queryIdentifier(){const e=$d(this._queryParams),n=Nc(e);return n==="{}"?"default":n}get _queryObject(){return $d(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof _i))return!1;const n=this._repo===e._repo,r=$c(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+X0(this._path)}}function uI(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function bm(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Pr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==oi)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==ar)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===We){if(e!=null&&!Dl(e)||n!=null&&!Dl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof zc||t.getIndex()===$p,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function dI(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class hr extends _i{constructor(e,n){super(e,n,new jc,!1)}get parent(){const e=Rp(this._path);return e===null?null:new hr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Le(e),r=js(this.ref,e);return new qs(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new qs(i,js(this.ref,r),We)))}hasChild(e){const n=new Le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fn(t,e){return t=tt(t),t._checkNotDeleted("ref"),e!==void 0?js(t._root,e):t._root}function js(t,e){return t=tt(t),we(t._path)===null?qE("child","path",e):au("child","path",e),new hr(t._repo,Qe(t._path,e))}function fu(t,e){t=tt(t),lu("push",t._path),ou("push",e,t._path,!0);const n=fm(t._repo),r=aI(n),i=js(t,r),s=js(t,r);let o;return e!=null?o=ta(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hI(t){return lu("remove",t._path),ta(t,null)}function ta(t,e){t=tt(t),lu("set",t._path),ou("set",e,t._path,!1);const n=new Qs;return JE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wm(t,e){zE("update",e,t._path);const n=new Qs;return XE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Zd(t){t=tt(t);const e=new _m(()=>{}),n=new xa(e);return QE(t._repo,t,n).then(r=>new qs(r,new hr(t._repo,t._path),t._queryParams.getIndex()))}class xa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lI("value",this,new qs(e.snapshotNode,new hr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cI(this,e,n):null}matches(e){return e instanceof xa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,p)=>{Ml(t._repo,t,a),l(d,p)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new _m(n,s||void 0),a=new xa(o);return eI(t._repo,t,a),()=>Ml(t._repo,t,a)}function lo(t,e,n,r){return fI(t,"value",e,n,r)}function ym(t,e,n){Ml(t._repo,t,null)}class Sa{}class pI extends Sa{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){ou("startAfter",this._value,e._path,!1);const n=Iy(e._queryParams,this._value,this._key);if(dI(n),bm(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new _i(e._repo,e._path,n,e._orderByCalled)}}function mI(t,e){return new pI(t,e)}class vI extends Sa{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new _i(e._repo,e._path,yy(e._queryParams,this._limit),e._orderByCalled)}}function eh(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new vI(t)}class gI extends Sa{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new _i(e._repo,e._path,Ey(e._queryParams,this._limit),e._orderByCalled)}}function _I(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new gI(t)}class bI extends Sa{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){uI(e,"orderByChild");const n=new Le(this._path);if(ye(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new zc(n),i=Cy(e._queryParams,r);return bm(i),new _i(e._repo,e._path,i,!0)}}function Ul(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return au("orderByChild","path",t),new bI(t)}function Fl(t,...e){let n=tt(t);for(const r of e)n=r._apply(n);return n}hE(hr);gE(hr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FIREBASE_DATABASE_EMULATOR_HOST",zl={};let yI=!1;function EI(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=jr(s);t.repoInfo_=new yp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function II(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jd(s,i),a=o.repoInfo,l;typeof process<"u"&&_d&&(l=_d[wI]),l?(s=`http://${l}?ns=${a.namespace}`,o=Jd(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new T0(t.name,t.options,e);jE("Invalid Firebase Database URL",o),ye(o.path)||or("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kI(a,t,c,new k0(t,n));return new TI(d,t)}function CI(t,e){const n=zl[e];(!n||n[t.key]!==t)&&or(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tI(t),delete n[t.key]}function kI(t,e,n,r){let i=zl[e.name];i||(i={},zl[e.name]=i);let s=i[t.toURLString()];return s&&or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GE(t,yI,n,r),i[t.toURLString()]=s,s}class TI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hr(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&or("Cannot call "+e+" on a deleted database.")}}function xI(t=yc(),e){const n=fa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=pf("database");r&&SI(n,...r)}return n}function SI(t,e,n,r={}){t=tt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ri(r,s.repoInfo_.emulatorOptions))return;or("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&or('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Io(Io.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:gf(r.mockUserToken,t.app.options.projectId);o=new Io(a)}jr(e)&&(vc(e),gc("Database",!0)),EI(s,i,r,o)}/**
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
 */function AI(t){c0(mi),ii(new Mr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return II(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Un(bd,wd,t),Un(bd,wd,"esm2020")}nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AI();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="firebasestorage.googleapis.com",Im="storageBucket",RI=120*1e3,PI=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends dr{constructor(e,n,r=0){super(tl(e),`Firebase Storage: ${n} (${tl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function tl(t){return"storage/"+t}function pu(){const t="An unknown error occurred, please check the error payload for server response.";return new nt(Ze.UNKNOWN,t)}function NI(t){return new nt(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function LI(t){return new nt(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OI(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(Ze.UNAUTHENTICATED,t)}function DI(){return new nt(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MI(t){return new nt(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $I(){return new nt(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UI(){return new nt(Ze.CANCELED,"User canceled the upload/download.")}function FI(t){return new nt(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function zI(t){return new nt(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qI(){return new nt(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Im+"' property when initializing the app?")}function jI(){return new nt(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BI(){return new nt(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HI(t){return new nt(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ql(t){return new nt(Ze.INVALID_ARGUMENT,t)}function Cm(){return new nt(Ze.APP_DELETED,"The Firebase app was deleted.")}function VI(t){return new nt(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xs(t,e){return new nt(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ls(t){throw new nt(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw zI(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${u}`,"i"),g={bucket:1,path:3},w=n===Em?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",T=new RegExp(`^https?://${w}/${i}/${E}`,"i"),A=[{regex:a,indices:l,postModify:s},{regex:v,indices:g,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<A.length;L++){const N=A[L],R=N.regex.exec(e);if(R){const x=R[N.indices.bucket];let I=R[N.indices.path];I||(I=""),r=new Xt(x,I),N.postModify(r);break}}if(r==null)throw FI(e);return r}}class WI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...E){c||(c=!0,e.apply(null,E))}function p(E){i=setTimeout(()=>{i=null,t(v,l())},E)}function u(){s&&clearTimeout(s)}function v(E,...T){if(c){u();return}if(E){u(),d.call(null,E,...T);return}if(l()||o){u(),d.call(null,E,...T);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,p(A)}let g=!1;function w(E){g||(g=!0,u(),!c&&(i!==null?(E||(a=2),clearTimeout(i),p(0)):E||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function KI(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){return t!==void 0}function QI(t){return typeof t=="object"&&!Array.isArray(t)}function mu(t){return typeof t=="string"||t instanceof String}function th(t){return vu()&&t instanceof Blob}function vu(){return typeof Blob<"u"}function nh(t,e,n,r){if(r<e)throw ql(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ql(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function km(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Xr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xr||(Xr={}));/**
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
 */function JI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i,s,o,a,l,c,d,p,u=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=u,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xr.NO_ERROR,l=s.getStatus();if(!a||JI(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Xr.ABORT;r(!1,new vo(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new vo(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YI(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=pu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Cm():UI();o(l)}else{const l=$I();o(l)}};this.canceled_?n(!1,new vo(!1,null,!0)):this.backoffId_=GI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rC(t,e,n,r,i,s,o=!0,a=!1){const l=km(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return tC(d,e),ZI(d,n),eC(d,s),nC(d,r),new XI(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sC(...t){const e=iC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vu())return new Blob(t);throw new nt(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aC(t){if(typeof atob>"u")throw HI("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nl{constructor(e,n){this.data=e,this.contentType=n||null}}function lC(t,e){switch(t){case On.RAW:return new nl(Tm(e));case On.BASE64:case On.BASE64URL:return new nl(xm(t,e));case On.DATA_URL:return new nl(uC(e),dC(e))}throw pu()}function Tm(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cC(t){let e;try{e=decodeURIComponent(t)}catch{throw xs(On.DATA_URL,"Malformed data URL.")}return Tm(e)}function xm(t,e){switch(t){case On.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case On.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aC(e)}catch(i){throw i.message.includes("polyfill")?i:xs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Sm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xs(On.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uC(t){const e=new Sm(t);return e.base64?xm(On.BASE64,e.rest):cC(e.rest)}function dC(t){return new Sm(t).contentType}function hC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){let r=0,i="";th(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(th(this.data_)){const r=this.data_,i=oC(r,e,n);return i===null?null:new Er(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Er(r,!0)}}static getBlob(...e){if(vu()){const n=e.map(r=>r instanceof Er?r.data_:r);return new Er(sC.apply(null,n))}else{const n=e.map(o=>mu(o)?lC(On.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Er(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){let e;try{e=JSON.parse(t)}catch{return null}return QI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Rm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){return e}class Dt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mC}}let go=null;function vC(t){return!mu(t)||t.length<2?t:Rm(t)}function Pm(){if(go)return go;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(s,o){return vC(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Dt("size");return i.xform=r,t.push(i),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),go=t,go}function gC(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _C(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return gC(r,t),r}function Nm(t,e,n){const r=Am(e);return r===null?null:_C(t,r,n)}function bC(t,e,n,r){const i=Am(e);if(i===null||!mu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,u="/b/"+o(d)+"/o/"+o(p),v=gu(u,n,r),g=km({alt:"media",token:c});return v+g})[0]}function wC(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Lm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){if(!t)throw pu()}function yC(t,e){function n(r,i){const s=Nm(t,i,e);return Om(s!==null),s}return n}function EC(t,e){function n(r,i){const s=Nm(t,i,e);return Om(s!==null),bC(s,i,t.host,t._protocol)}return n}function Dm(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DI():i=OI():n.getStatus()===402?i=LI(t.bucket):n.getStatus()===403?i=MI(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IC(t){const e=Dm(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=NI(t.path)),s.serverResponse=i.serverResponse,s}return n}function CC(t,e,n){const r=e.fullServerUrl(),i=gu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Lm(i,s,EC(t,n),o);return a.errorHandler=IC(e),a}function kC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kC(null,e)),r}function xC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let L=0;L<2;L++)A=A+Math.random().toString().slice(2);return A}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=TC(e,r,i),d=wC(c,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,u=`\r
--`+l+"--",v=Er.getBlob(p,r,u);if(v===null)throw jI();const g={name:c.fullPath},w=gu(s,t.host,t._protocol),E="POST",T=t.maxUploadRetryTime,C=new Lm(w,E,yC(t,n),T);return C.urlParams=g,C.headers=o,C.body=v.uploadData(),C.errorHandler=Dm(e),C}class SC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw ls("cannot .send() more than once");if(jr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AC extends SC{initXhr(){this.xhr_.responseType="text"}}function Mm(){return new AC}/**
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
 */class ci{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ci(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rm(this._location.path)}get storage(){return this._service}get parent(){const e=fC(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VI(e)}}function RC(t,e,n){t._throwIfRoot("uploadBytes");const r=xC(t.storage,t._location,Pm(),new Er(e,!0),n);return t.storage.makeRequestWithTokens(r,Mm).then(i=>({metadata:i,ref:t}))}function PC(t){t._throwIfRoot("getDownloadURL");const e=CC(t.storage,t._location,Pm());return t.storage.makeRequestWithTokens(e,Mm).then(n=>{if(n===null)throw BI();return n})}function NC(t,e){const n=pC(t._location.path,e),r=new Xt(t._location.bucket,n);return new ci(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return/^[A-Za-z]+:\/\//.test(t)}function OC(t,e){return new ci(t,e)}function $m(t,e){if(t instanceof _u){const n=t;if(n._bucket==null)throw qI();const r=new ci(n,n._bucket);return e!=null?$m(r,e):r}else return e!==void 0?NC(t,e):t}function DC(t,e){if(e&&LC(e)){if(t instanceof _u)return OC(t,e);throw ql("To use ref(service, url), the first argument must be a Storage instance.")}else return $m(t,e)}function rh(t,e){const n=e?.[Im];return n==null?null:Xt.makeFromBucketSpec(n,t)}function MC(t,e,n,r={}){t.host=`${e}:${n}`;const i=jr(e);i&&(vc(`https://${t.host}/b`),gc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:gf(s,t.app.options.projectId))}class _u{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=Em,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RI,this._maxUploadRetryTime=PI,this._requests=new Set,i!=null?this._bucket=Xt.makeFromBucketSpec(i,this._host):this._bucket=rh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=rh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ci(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WI(Cm());{const o=rC(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ih="@firebase/storage",sh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="storage";function $C(t,e,n){return t=tt(t),RC(t,e,n)}function UC(t){return t=tt(t),PC(t)}function FC(t,e){return t=tt(t),DC(t,e)}function zC(t=yc(),e){t=tt(t);const r=fa(t,Um).getImmediate({identifier:e}),i=pf("storage");return i&&qC(r,...i),r}function qC(t,e,n,r={}){MC(t,e,n,r)}function jC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _u(n,r,i,e,mi)}function BC(){ii(new Mr(Um,jC,"PUBLIC").setMultipleInstances(!0)),Un(ih,sh,""),Un(ih,sh,"esm2020")}BC();const HC={apiKey:void 0,authDomain:void 0,databaseURL:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},bu=Ef(HC),ui=a0(bu),dn=xI(bu),VC=zC(bu);var WC=P('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),GC=P('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),KC=P('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),YC=P('<h3 class="post-title svelte-1t1odzy"> </h3>'),QC=P('<p class="post-text svelte-1t1odzy"> </p>'),JC=P('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),XC=P('<div class="posts svelte-1t1odzy"></div>'),ZC=P('<div class="post-list-container svelte-1t1odzy"><!></div>');const ek={hash:"svelte-1t1odzy",code:`
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
  }`};function tk(t,e){je(e,!0),He(t,ek);let n=Ve(e,"path",7,"posts"),r=Ve(e,"limit",7,"10"),i=Q(xt([])),s=Q(!0),o=Q(""),a=null;Et(()=>{l()}),lf(()=>{c()});function l(){try{a=Fn(dn,n()),lo(a,C=>{const A=C.val();A?y(i,Object.entries(A).map(([L,N])=>({id:L,...N})).sort((L,N)=>(N.timestamp||0)-(L.timestamp||0)).slice(0,parseInt(r())),!0):y(i,[],!0),y(s,!1),y(o,"")},C=>{console.error("데이터 읽기 오류:",C),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(s,!1)})}catch(C){console.error("구독 설정 오류:",C),y(o,"데이터베이스 연결에 실패했습니다."),y(s,!1)}}function c(){a&&ym(a)}function d(C){const A=new CustomEvent("post-click",{detail:{post:C},bubbles:!0,composed:!0});dispatchEvent(A)}function p(C,A){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),d(A))}function u(C){if(!C)return"";const A=typeof C=="string"?Number(C):C,L=new Date(A),R=new Date().getTime()-L.getTime(),x=Math.floor(R/6e4),I=Math.floor(R/36e5),M=Math.floor(R/864e5);return x<1?"방금 전":x<60?`${x}분 전`:I<24?`${I}시간 전`:M<7?`${M}일 전`:L.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var v={get path(){return n()},set path(C="posts"){n(C),qe()},get limit(){return r()},set limit(C="10"){r(C),qe()}},g=ZC(),w=f(g);{var E=C=>{var A=WC();b(C,A)},T=C=>{var A=ue(),L=re(A);{var N=x=>{var I=GC(),M=f(I),B=f(M,!0);h(M),h(I),Z(()=>k(B,m(o))),b(x,I)},R=x=>{var I=ue(),M=re(I);{var B=$=>{var K=KC();b($,K)},V=$=>{var K=XC();jt(K,21,()=>m(i),oe=>oe.id,(oe,te)=>{var H=JC();H.__click=()=>d(m(te)),H.__keydown=ve=>p(ve,m(te));var J=f(H),X=f(J),F=f(X),S=f(F,!0);h(F);var z=_(F,2),G=f(z,!0);h(z),h(X),h(J);var W=_(J,2),he=f(W);{var D=ve=>{var de=YC(),xe=f(de,!0);h(de),Z(()=>k(xe,m(te).title)),b(ve,de)};j(he,ve=>{m(te).title&&ve(D)})}var q=_(he,2);{var ie=ve=>{var de=QC(),xe=f(de,!0);h(de),Z(()=>k(xe,m(te).content)),b(ve,de)};j(q,ve=>{m(te).content&&ve(ie)})}h(W);var ne=_(W,2),me=f(ne),se=f(me);h(me);var le=_(me,2),ge=f(le);h(le),h(ne),h(H),Z(ve=>{Fe(H,"aria-label",`게시물: ${(m(te).title||m(te).content||"제목 없음")??""}`),k(S,m(te).author||"익명"),k(G,ve),k(se,`👍 ${(m(te).likes||0)??""}`),k(ge,`💬 ${(m(te).comments?.length||0)??""}`)},[()=>u(m(te).timestamp)]),b(oe,H)}),h(K),b($,K)};j(M,$=>{m(i).length===0?$(B):$(V,!1)},!0)}b(x,I)};j(L,x=>{m(o)?x(N):x(R,!1)},!0)}b(C,A)};j(w,C=>{m(s)?C(E):C(T,!1)})}return h(g),b(t,g),Be(v)}at(["click","keydown"]);customElements.define("post-list",pe(tk,{path:{},limit:{}},[],[],!0));Qv();/**
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
 */const nk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var rk=Ng("<svg><!><!></svg>");function rt(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]),r=Xe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);je(e,!1);let i=Ve(e,"name",12,void 0),s=Ve(e,"color",12,"currentColor"),o=Ve(e,"size",12,24),a=Ve(e,"strokeWidth",12,2),l=Ve(e,"absoluteStrokeWidth",12,!1),c=Ve(e,"iconNode",28,()=>[]);const d=(...w)=>w.filter((E,T,C)=>!!E&&C.indexOf(E)===T).join(" ");var p={get name(){return i()},set name(w){i(w),qe()},get color(){return s()},set color(w){s(w),qe()},get size(){return o()},set size(w){o(w),qe()},get strokeWidth(){return a()},set strokeWidth(w){a(w),qe()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),qe()},get iconNode(){return c()},set iconNode(w){c(w),qe()}};tn();var u=rk();Du(u,(w,E)=>({...nk,...r,width:o(),height:o(),stroke:s(),"stroke-width":w,class:E}),[()=>(Ci(l()),Ci(a()),Ci(o()),zn(()=>l()?Number(a())*24/Number(o()):a())),()=>(Ci(i()),Ci(n),zn(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var v=f(u);jt(v,1,c,Cr,(w,E)=>{var T=ol(()=>yv(m(E),2));let C=()=>m(T)[0],A=()=>m(T)[1];var L=ue(),N=re(L);$g(N,C,!0,(R,x)=>{Du(R,()=>({...A()}))}),b(w,L)});var g=_(v);return et(g,e,"default",{}),h(u),b(t,u),Be(p)}pe(rt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Fm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];rt(t,lt({name:"book-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Fm,{},["default"],[],!0);function zm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];rt(t,lt({name:"camera"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(zm,{},["default"],[],!0);function jl(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];rt(t,lt({name:"check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(jl,{},["default"],[],!0);function wu(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];rt(t,lt({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(wu,{},["default"],[],!0);function Bl(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];rt(t,lt({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Bl,{},["default"],[],!0);function Hl(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];rt(t,lt({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Hl,{},["default"],[],!0);function Vl(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];rt(t,lt({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Vl,{},["default"],[],!0);function yu(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];rt(t,lt({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(yu,{},["default"],[],!0);function qm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];rt(t,lt({name:"house"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(qm,{},["default"],[],!0);function ds(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];rt(t,lt({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(ds,{},["default"],[],!0);function jm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];rt(t,lt({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(jm,{},["default"],[],!0);function Bm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];rt(t,lt({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Bm,{},["default"],[],!0);function hs(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];rt(t,lt({name:"menu"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(hs,{},["default"],[],!0);function Tr(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];rt(t,lt({name:"message-circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Tr,{},["default"],[],!0);function Hm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];rt(t,lt({name:"phone"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Hm,{},["default"],[],!0);function Vm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];rt(t,lt({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Vm,{},["default"],[],!0);function Wm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];rt(t,lt({name:"trending-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Wm,{},["default"],[],!0);function Zr(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];rt(t,lt({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Zr,{},["default"],[],!0);function Bs(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];rt(t,lt({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Bs,{},["default"],[],!0);function Gm(t,e){const n=Xe(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];rt(t,lt({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=ue(),a=re(o);et(a,e,"default",{}),b(i,o)},$$slots:{default:!0}}))}pe(Gm,{},["default"],[],!0);var ik=P("<option> </option>"),sk=P('<div class="error-message svelte-1e01td3"> </div>'),ok=P('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),ak=P("<!> 인증 코드 전송",1),lk=P('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),ck=P('<div class="error-message svelte-1e01td3"> </div>'),uk=P('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),dk=P("<!> 로그인",1),hk=P('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),fk=P('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const pk={hash:"svelte-1e01td3",code:`\r
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
  }`};function mk(t,e){je(e,!0),He(t,pk);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=Q("+82"),i=Q(""),s=Q(""),o=Q("phone"),a=Q(!1),l=Q(""),c=Q(null),d=Q(null),p=Q(void 0),u=Q(null);function v(){return new Promise((I,M)=>{try{if(!m(u)){const B=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B);return}if(m(c)){if(m(p)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(p)),console.log("reCAPTCHA reset completed"),I(m(p));return}catch(B){console.warn("Failed to reset reCAPTCHA:",B)}try{m(c).clear(),y(c,null),y(p,void 0)}catch(B){console.warn("Failed to clear reCAPTCHA:",B)}}y(c,new aw(ui,m(u).id,{size:"invisible",callback:B=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(p)!==void 0?window.grecaptcha.reset(m(p)):v()}}),!0),m(c).render().then(B=>{y(p,B,!0),console.log("reCAPTCHA rendered with widgetId:",B),I(B)}).catch(B=>{console.error("Failed to render reCAPTCHA:",B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B)})}catch(B){console.error("reCAPTCHA 초기화 실패:",B),y(l,"reCAPTCHA 초기화에 실패했습니다."),M(B)}})}Et(()=>{const I=document.createElement("div");return I.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),I.className="recaptcha-container-light-dom",I.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(I),y(u,I,!0),v(),()=>{I&&I.parentNode&&I.parentNode.removeChild(I)}});function g(I){return/^[0-9]{6,15}$/.test(I)}async function w(){if(y(l,""),!g(m(i))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const I=`${m(r)}${m(i)}`;console.log("Sending verification code to:",I),y(d,await uw(ui,I,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(I){console.error("SMS 전송 실패:",I),I.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):I.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${I.message}`)}finally{y(a,!1)}}async function E(){if(y(l,""),m(s).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const I=await m(d).confirm(m(s));console.log("Login successful:",I.user);const M=new CustomEvent("login-success",{detail:{user:I.user,phoneNumber:I.user.phoneNumber}});dispatchEvent(M),y(i,""),y(s,""),y(o,"phone")}catch(I){console.error("인증 코드 확인 실패:",I),I.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):I.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${I.message}`);const M=new CustomEvent("login-error",{detail:{error:I.message}});dispatchEvent(M)}finally{y(a,!1)}}function T(){y(o,"phone"),y(s,""),y(l,"")}var C=fk(),A=f(C),L=f(A);{var N=I=>{var M=lk(),B=f(M),V=f(B);Hm(V,{class:"icon-large"}),Qt(4),h(B);var $=_(B,2),K=_(f($),2);jt(K,21,()=>n,Cr,(D,q)=>{var ie=ik(),ne=f(ie);h(ie);var me={};Z(()=>{k(ne,`${m(q).flag??""} ${m(q).name??""} (${m(q).code??""})`),me!==(me=m(q).code)&&(ie.value=(ie.__value=m(q).code)??"")}),b(D,ie)}),h(K),h($);var oe=_($,2),te=_(f(oe),2),H=f(te),J=f(H,!0);h(H);var X=_(H,2);Ui(X),h(te),Qt(2),h(oe);var F=_(oe,2);{var S=D=>{var q=sk(),ie=f(q,!0);h(q),Z(()=>k(ie,m(l))),b(D,q)};j(F,D=>{m(l)&&D(S)})}var z=_(F,2);z.__click=w;var G=f(z);{var W=D=>{var q=ok();Qt(),b(D,q)},he=D=>{var q=ak(),ie=re(q);Vm(ie,{class:"btn-icon"}),Qt(),b(D,q)};j(G,D=>{m(a)?D(W):D(he,!1)})}h(z),h(M),Z(()=>{K.disabled=m(a),k(J,m(r)),X.disabled=m(a),z.disabled=m(a)||!m(i)}),dc(K,()=>m(r),D=>y(r,D)),Ps("keypress",X,D=>{D.key==="Enter"&&(D.preventDefault(),w())}),Fi(X,()=>m(i),D=>y(i,D)),b(I,M)},R=I=>{var M=ue(),B=re(M);{var V=$=>{var K=hk(),oe=f(K),te=f(oe);jl(te,{class:"icon-large"});var H=_(te,4),J=f(H);Qt(2),h(H),h(oe);var X=_(oe,2),F=_(f(X),2);Ui(F),Qt(2),h(X);var S=_(X,2);{var z=se=>{var le=ck(),ge=f(le,!0);h(le),Z(()=>k(ge,m(l))),b(se,le)};j(S,se=>{m(l)&&se(z)})}var G=_(S,2),W=f(G);W.__click=T;var he=_(W,2);he.__click=E;var D=f(he);{var q=se=>{var le=uk();Qt(),b(se,le)},ie=se=>{var le=dk(),ge=re(le);jl(ge,{class:"btn-icon"}),Qt(),b(se,le)};j(D,se=>{m(a)?se(q):se(ie,!1)})}h(he),h(G);var ne=_(G,2),me=_(f(ne));me.__click=T,h(ne),h(K),Z(()=>{k(J,`${m(r)??""}${m(i)??""}로 전송된`),F.disabled=m(a),W.disabled=m(a),he.disabled=m(a)||m(s).length!==6}),Ps("keypress",F,se=>{se.key==="Enter"&&(se.preventDefault(),E())}),Fi(F,()=>m(s),se=>y(s,se)),b($,K)};j(B,$=>{m(o)==="code"&&$(V)},!0)}b(I,M)};j(L,I=>{m(o)==="phone"?I(N):I(R,!1)})}var x=_(L,2);hc(x,I=>y(u,I),()=>m(u)),h(A),h(C),b(t,C),Be()}at(["click"]);customElements.define("phone-login",pe(mk,{},[],[],!0));const Aa=Ys(null),vk=Ys(!0);Jf(ui,t=>{Aa.set(t),vk.set(!1)});async function gk(){try{return await z1(ui),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}class Gr{static#t=null;#e=Q(!0);get loading(){return m(this.#e)}set loading(e){y(this.#e,e,!0)}#i=Q(!1);get isAuthenticated(){return m(this.#i)}set isAuthenticated(e){y(this.#i,e,!0)}uid=null;email=null;phoneNumber=null;#n=Q(null);get data(){return m(this.#n)}set data(e){y(this.#n,e,!0)}#o=Q(null);get error(){return m(this.#o)}set error(e){y(this.#o,e,!0)}#s=null;#a=null;#r=null;constructor(){typeof window<"u"&&this.#l()}static getInstance(){return Gr.#t||(Gr.#t=new Gr),Gr.#t}#l(){try{if(!ui)throw new Error("Auth instance not available");console.log("FirebaseLoginUser: Initializing auth state listener..."),this.#a=Jf(ui,e=>{if(console.log("FirebaseLoginUser: Auth state changed",e?.uid||"null"),this.#s=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#r&&(this.#r(),this.#r=null),console.log(`FirebaseLoginUser: Loading user data from users/${e.uid}`);const n=Fn(dn,`users/${e.uid}`);this.#r=lo(n,r=>{this.data=r.val(),console.log("FirebaseLoginUser: User data updated",this.data)},r=>{console.error("FirebaseLoginUser: Database error",r),this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#r&&(this.#r(),this.#r=null);this.loading=!1},e=>{console.error("FirebaseLoginUser: Auth state change error",e),this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){console.error("FirebaseLoginUser: Initialization error",e),this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#s)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),(e.photoUrl!==void 0||e.photoUrl!==void 0)&&(n.photoUrl=e.photoUrl),Object.keys(n).length>0&&(await $1(this.#s,n),console.log("FirebaseLoginUser: Auth profile updated",n));const r={...e};r.photoUrl!==void 0&&(r.photoUrl===void 0&&(r.photoUrl=r.photoUrl),delete r.photoUrl);const i=Fn(dn,`users/${this.uid}`);await wm(i,r),console.log("FirebaseLoginUser: RTDB profile updated",r)}catch(n){throw console.error("FirebaseLoginUser: Profile update error",n),this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){console.log("FirebaseLoginUser: Disposing..."),this.#a&&(this.#a(),this.#a=null),this.#r&&(this.#r(),this.#r=null),Gr.#t=null}}const fe=Gr.getInstance(),_k={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace"},bk={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터"},wk={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス"},yk={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城"},rl={en:_k,ko:bk,ja:wk,zh:yk};function Wl(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Km(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Wl(e);if(n!=="en")return n}return"en"}function Ek(t){let e=Wl(t)||Km();function n(s){e=Wl(s)}function r(){return e}function i(s,o={}){return((rl[e]??rl.en)[s]??rl.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:n,getLocale:r}}const Ym=Km(),Ik=Ek(Ym),Ck=Ys(Ym),es=Wg(Ck,t=>(e,n={})=>Ik.t(e,n)),Qm=Ys("");function nn(t){Qm.set(t)}var kk=P('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),Tk=P('<img alt="프로필" class="avatar-image svelte-38psow"/>'),xk=P('<div class="avatar-fallback svelte-38psow"> </div>'),Sk=P('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),Ak=P('<img class="avatar-image svelte-38psow"/>'),Rk=P('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),Pk=P('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),Nk=P('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),Lk=P('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const Ok={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function Dk(t,e){je(e,!0),He(t,Ok);const n=()=>$n(Qm,"$pageTitle",s),r=()=>$n(Aa,"$user",s),i=()=>$n(es,"$t",s),[s,o]=Yi();let a=Q(!1);async function l(){if((await gk()).success){const R=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(R)}y(a,!1)}function c(){return fe.data?.displayName?fe.data.displayName.charAt(0).toUpperCase():fe.email?fe.email.charAt(0).toUpperCase():"U"}function d(){y(a,!m(a))}function p(N){const R=document.querySelector(".dropdown-menu"),x=document.querySelector(".dropdown-trigger");R&&!R.contains(N.target)&&!x?.contains(N.target)&&y(a,!1)}Et(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}));var u=Lk(),v=f(u),g=f(v),w=_(f(g),2);{var E=N=>{var R=kk(),x=f(R),I=f(x,!0);h(x),h(R),Z(()=>k(I,n())),b(N,R)};j(w,N=>{n()&&N(E)})}h(g);var T=_(g,2),C=f(T);{var A=N=>{var R=Pk(),x=re(R),I=f(x),M=f(I);ds(M,{size:16});var B=_(M,2),V=f(B,!0);h(B),h(I);var $=_(I,2),K=f($);Tr(K,{size:16});var oe=_(K,2),te=f(oe,!0);h(oe),h($);var H=_($,2),J=f(H);Bs(J,{size:16});var X=_(J,2),F=f(X,!0);h(X),h(H);var S=_(H,2),z=f(S);z.__click=d;var G=f(z),W=f(G);{var he=Se=>{var Te=Tk();Z(()=>Fe(Te,"src",fe.data.photoUrl)),b(Se,Te)},D=Se=>{var Te=xk(),it=f(Te,!0);h(Te),Z(Rt=>k(it,Rt),[c]),b(Se,Te)};j(W,Se=>{fe.data?.photoUrl?Se(he):Se(D,!1)})}h(G);var q=_(G,2),ie=f(q,!0);h(q),h(z);var ne=_(z,2);{var me=Se=>{var Te=Sk(),it=f(Te),Rt=f(it,!0);h(it);var rn=_(it,4),Vt=f(rn);Zr(Vt,{size:16});var It=_(Vt,2),sn=f(It,!0);h(It),h(rn);var Wt=_(rn,4);Wt.__click=l;var Pt=f(Wt);Bm(Pt,{size:16});var gt=_(Pt,2),st=f(gt,!0);h(gt),h(Wt),h(Te),Z((Gt,Rn,Hn)=>{k(Rt,Gt),k(sn,Rn),k(st,Hn)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),b(Se,Te)};j(ne,Se=>{m(a)&&Se(me)})}h(S);var se=_(S,2),le=f(se);hs(le,{size:24}),h(se),h(x);var ge=_(x,2),ve=f(ge),de=f(ve);ds(de,{size:20}),h(ve);var xe=_(ve,2),Pe=f(xe);Bs(Pe,{size:20}),h(xe);var U=_(xe,2),ee=f(U);Tr(ee,{size:20}),h(U);var be=_(U,2),Me=f(be),Ge=f(Me);{var ke=Se=>{var Te=Ak();Z(it=>{Fe(Te,"src",fe.data.photoUrl),Fe(Te,"alt",it)},[()=>i()("프로필")]),b(Se,Te)},Ne=Se=>{var Te=Rk(),it=f(Te,!0);h(Te),Z(Rt=>k(it,Rt),[c]),b(Se,Te)};j(Ge,Se=>{fe.data?.photoUrl?Se(ke):Se(Ne,!1)})}h(Me),h(be);var ze=_(be,2),pt=f(ze);hs(pt,{size:24}),h(ze),h(ge),Z((Se,Te,it,Rt,rn,Vt,It,sn,Wt)=>{k(V,Se),k(te,Te),k(F,it),k(ie,fe.data?.displayName||fe.email),Fe(se,"title",Rt),Fe(ve,"title",rn),Fe(xe,"title",Vt),Fe(U,"title",It),Fe(be,"title",sn),Fe(ze,"title",Wt)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),b(N,R)},L=N=>{var R=Nk(),x=re(R),I=f(x),M=f(I);ds(M,{size:16});var B=_(M,2),V=f(B,!0);h(B),h(I);var $=_(I,2),K=f($);Tr(K,{size:16});var oe=_(K,2),te=f(oe,!0);h(oe),h($);var H=_($,2),J=f(H,!0);h(H);var X=_(H,2),F=f(X);hs(F,{size:20}),h(X),h(x);var S=_(x,2),z=f(S),G=f(z);ds(G,{size:20}),h(z);var W=_(z,2),he=f(W);Tr(he,{size:20}),h(W);var D=_(W,2),q=f(D);Zr(q,{size:20}),h(D);var ie=_(D,2),ne=f(ie);hs(ne,{size:24}),h(ie),h(S),Z((me,se,le,ge,ve,de,xe,Pe)=>{k(V,me),k(te,se),k(J,le),Fe(X,"title",ge),Fe(z,"title",ve),Fe(W,"title",de),Fe(D,"title",xe),Fe(ie,"title",Pe)},[()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴"),()=>i()("게시판"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),b(N,R)};j(C,N=>{r()?N(A):N(L,!1)})}h(T),h(v),h(u),b(t,u),Be(),o()}at(["click"]);customElements.define("sns-topbar",pe(Dk,{},[],[],!0));var Mk=P('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),$k=P('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),Uk=P('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const Fk={hash:"svelte-najsij",code:`\r
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
  }`};function zk(t,e){je(e,!1),He(t,Fk);const n=()=>$n(es,"$t",i),r=()=>$n(Aa,"$user",i),[i,s]=Yi();tn();var o=Uk(),a=f(o),l=f(a),c=f(l,!0);h(l);var d=_(l,2),p=f(d),u=f(p);qm(u,{size:20});var v=_(u,2),g=f(v,!0);h(v),h(p);var w=_(p,2),E=f(w);Tr(E,{size:20});var T=_(E,2),C=f(T,!0);h(T),h(w);var A=_(w,2),L=f(A);Bs(L,{size:20});var N=_(L,2),R=f(N,!0);h(N),h(A);var x=_(A,2),I=f(x);Zr(I,{size:20});var M=_(I,2),B=f(M,!0);h(M),h(x);var V=_(x,2),$=f(V);yu($,{size:20});var K=_($,2),oe=f(K,!0);h(K),h(V),h(d);var te=_(d,4),H=f(te),J=f(H,!0);h(H);var X=_(H,2),F=f(X);{var S=Pt=>{var gt=Mk(),st=f(gt);Zr(st,{size:16});var Gt=_(st,2),Rn=f(Gt,!0);h(Gt),h(gt),Z(Hn=>k(Rn,Hn),[()=>n()("회원정보수정")]),b(Pt,gt)},z=Pt=>{var gt=$k(),st=re(gt),Gt=f(st);jm(Gt,{size:16});var Rn=_(Gt,2),Hn=f(Rn,!0);h(Rn),h(st);var Hr=_(st,2),bi=f(Hr);Zr(bi,{size:16});var Ke=_(bi,2),Re=f(Ke,!0);h(Ke),h(Hr),Z((ct,ut)=>{k(Hn,ct),k(Re,ut)},[()=>n()("로그인"),()=>n()("회원가입")]),b(Pt,gt)};j(F,Pt=>{r()?Pt(S):Pt(z,!1)})}h(X),h(te);var G=_(te,4),W=f(G),he=f(W);Bs(he,{size:16});var D=_(he,2),q=f(D,!0);h(D),h(W);var ie=_(W,2),ne=_(f(ie),2),me=f(ne,!0);h(ne);var se=_(ne,2);Vl(se,{size:12,class:"external-icon"}),h(ie);var le=_(ie,2),ge=f(le);Tr(ge,{size:16});var ve=_(ge,2),de=f(ve,!0);h(ve);var xe=_(ve,2);Vl(xe,{size:12,class:"external-icon"}),h(le);var Pe=_(le,2),U=f(Pe);Fm(U,{size:16});var ee=_(U,2),be=f(ee,!0);h(ee),h(Pe),h(G);var Me=_(G,2),Ge=f(Me),ke=f(Ge,!0);h(Ge);var Ne=_(Ge,2),ze=f(Ne,!0);h(Ne),h(Me);var pt=_(Me,2),Se=f(pt),Te=f(Se),it=f(Te,!0);h(Te);var Rt=_(Te,2),rn=f(Rt,!0);h(Rt),h(Se),h(pt);var Vt=_(pt,2),It=f(Vt),sn=f(It,!0),Wt=_(sn,2);h(It),h(Vt),h(a),h(o),Z((Pt,gt,st,Gt,Rn,Hn,Hr,bi,Ke,Re,ct,ut,Ct,Nt,Lt,on,gn)=>{k(c,Pt),k(g,gt),k(C,st),k(R,Gt),k(B,Rn),k(oe,Hn),k(J,Hr),k(q,bi),k(me,Ke),k(de,Re),k(be,ct),k(ke,ut),k(ze,Ct),k(it,Nt),k(rn,Lt),k(sn,on),k(Wt,` ${gn??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어전환기능안내"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),b(t,o),Be(),s()}customElements.define("sns-left-sidebar",pe(zk,{},[],[],!0));var qk=P('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const jk={hash:"svelte-3epon2",code:`\r
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
  }`};function Bk(t,e){je(e,!0),He(t,jk);const n=()=>$n(es,"$t",r),[r,i]=Yi();let s=Q(xt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=qk(),a=f(o),l=f(a),c=f(l,!0);h(l);var d=_(l,2),p=f(d),u=f(p),v=f(u);Zr(v,{size:20}),h(u);var g=_(u,2),w=f(g),E=f(w,!0);h(w);var T=_(w,2),C=f(T,!0);h(T),h(g),h(p);var A=_(p,2),L=f(A),N=f(L);Wm(N,{size:20}),h(L);var R=_(L,2),x=f(R),I=f(x,!0);h(x);var M=_(x,2),B=f(M,!0);h(M),h(R),h(A);var V=_(A,2),$=f(V),K=f($);yu(K,{size:20}),h($);var oe=_($,2),te=f(oe),H=f(te,!0);h(te);var J=_(te,2),X=f(J,!0);h(J);var F=_(J,2),S=f(F,!0);h(F),h(oe),h(V);var z=_(V,2),G=f(z),W=f(G);Tr(W,{size:20}),h(G);var he=_(G,2),D=f(he),q=f(D,!0);h(D);var ie=_(D,2),ne=f(ie,!0);h(ie),h(he),h(z),h(d);var me=_(d,2),se=f(me,!0);h(me),h(a),h(o),Z((le,ge,ve,de,xe,Pe,U)=>{k(c,le),k(E,ge),k(C,m(s).totalUsers),k(I,ve),k(B,m(s).totalScore),k(H,de),k(X,m(s).totalPosts),k(S,xe),k(q,Pe),k(ne,m(s).totalMessages),k(se,U)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),b(t,o),Be(),i()}customElements.define("sns-right-sidebar",pe(Bk,{},[],[],!0));var Hk=P('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const Vk={hash:"svelte-um1xbq",code:`\r
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
  }`};function Wk(t,e){He(t,Vk);var n=Hk(),r=f(n),i=_(r,2),s=f(i);En(s,1,"left-sidebar svelte-um1xbq");var o=_(s,2),a=f(o);et(a,e,"default",{}),h(o);var l=_(o,2);En(l,1,"right-sidebar svelte-um1xbq"),h(i),h(n),b(t,n)}customElements.define("sns-layout",pe(Wk,{},["default"],[],!0));var Gk=P('<div class="icon-container svelte-m3h71q"> </div>'),Kk=P('<p class="hint-box svelte-m3h71q"> </p>'),Yk=P('<p class="gpl-box svelte-m3h71q"> </p>'),Qk=P('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),Jk=P('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),Xk=P('<div class="accordion svelte-m3h71q"></div>');const Zk={hash:"svelte-m3h71q",code:`\r
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
  }`};function eT(t,e){je(e,!0),He(t,Zk);let n=Ve(e,"items",7,"[]"),r=Ve(e,"type",7,"single"),i=Ve(e,"collapsible",7,!0),s=ol(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=ol(()=>()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=Q(xt(new Set));function l(u){const v=new Set(m(a));r()==="single"?v.has(u)?m(o)&&v.delete(u):(v.clear(),v.add(u)):v.has(u)?v.delete(u):v.add(u),y(a,v,!0)}function c(u){return m(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),qe()},get type(){return r()},set type(u="single"){r(u),qe()},get collapsible(){return i()},set collapsible(u=!0){i(u),qe()}},p=Xk();return jt(p,21,()=>m(s),Cr,(u,v,g)=>{var w=Jk(),E=f(w);E.__click=()=>l(g);var T=f(E),C=f(T);{var A=V=>{var $=Gk(),K=f($,!0);h($),Z(()=>k(K,m(v).icon)),b(V,$)};j(C,V=>{m(v).icon&&V(A)})}var L=_(C,2),N=f(L,!0);h(L),h(T);var R=_(T,2);let x;var I=f(R);wu(I,{size:20}),h(R),h(E);var M=_(E,2);{var B=V=>{var $=Qk(),K=f($),oe=f(K,!0);h(K);var te=_(K,2);{var H=F=>{var S=Kk(),z=f(S,!0);h(S),Z(()=>k(z,m(v).hint)),b(F,S)};j(te,F=>{m(v).hint&&F(H)})}var J=_(te,2);{var X=F=>{var S=Yk(),z=f(S,!0);h(S),Z(()=>k(z,m(v).gpl)),b(F,S)};j(J,F=>{m(v).gpl&&F(X)})}h($),Z(()=>k(oe,m(v).content)),b(V,$)};j(M,V=>{c(g)&&V(B)})}h(w),Z((V,$)=>{Fe(E,"aria-expanded",V),k(N,m(v).title),x=En(R,1,"chevron svelte-m3h71q",null,x,$)},[()=>c(g),()=>({"rotate-180":c(g)})]),b(u,w)}),h(p),b(t,p),Be(d)}at(["click"]);customElements.define("sns-accordion",pe(eT,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");class tT{#t=Q(null);get data(){return m(this.#t)}set data(e){y(this.#t,e,!0)}#e=Q(!0);get loading(){return m(this.#e)}set loading(e){y(this.#e,e,!0)}#i=Q(null);get error(){return m(this.#i)}set error(e){y(this.#i,e,!0)}#n=null;#o=null;constructor(e,n=null){this.data=n,typeof window<"u"&&this.#s(e)}#s(e){try{if(!dn)throw new Error("Database instance not available");this.#n=Fn(dn,e),this.#o=lo(this.#n,n=>{this.data=n.val(),console.log(`RTDB: Data loaded successfully from path "${this.#n.toString().substring(76)}"`,this.data),this.loading=!1,this.error=null},n=>{this.error=n,this.loading=!1})}catch(n){this.error=n,this.loading=!1}}async push(e){if(!this.#n)return null;try{const n=fu(this.#n);return await ta(n,e),n.key}catch(n){throw this.error=n,n}}async set(e){if(this.#n)try{await ta(this.#n,e)}catch(n){throw this.error=n,n}}async update(e){if(this.#n)try{await wm(this.#n,e)}catch(n){throw this.error=n,n}}async remove(){if(this.#n)try{await hI(this.#n)}catch(e){throw this.error=e,e}}get ref(){if(!this.#n)throw new Error("Database reference is not available");return this.#n}dispose(){this.#o&&(this.#o(),this.#o=null)}}function nT(t,e=null){return new tT(t,e)}var rT=P("<p>⏳ 로딩 중...</p>"),iT=P('<div class="user-info svelte-1ubq0t6"><h2 class="svelte-1ubq0t6">환영합니다!</h2> <div class="user-data-section svelte-1ubq0t6"><h3 class="svelte-1ubq0t6"> </h3> <pre class="svelte-1ubq0t6"> </pre></div> <p class="svelte-1ubq0t6"> </p> <p class="svelte-1ubq0t6"> </p> <p class="svelte-1ubq0t6"> </p></div>'),sT=P('<p>로그인이 필요합니다.</p> <a href="/user/login">로그인하기</a>',1),oT=P('<div class="gpl-badge svelte-1ubq0t6"> </div>'),aT=P('<div class="hint svelte-1ubq0t6"> </div>'),lT=P('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),cT=P('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),uT=P('<div class="todo-description svelte-1ubq0t6"> </div>'),dT=P('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),hT=P('<div class="todo-subitems svelte-1ubq0t6"></div>'),fT=P('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),pT=P('<span class="badge svelte-1ubq0t6"> </span>'),mT=P('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <!> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const vT={hash:"svelte-1ubq0t6",code:`\r
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
  /* 사용자 정보 섹션 */.user-info.svelte-1ubq0t6 {margin-bottom:2rem;padding:1.5rem;background:white;border-radius:0.75rem;border:1px solid #e5e7eb;box-shadow:0 2px 8px rgba(0, 0, 0, 0.06);}.user-info.svelte-1ubq0t6 h2:where(.svelte-1ubq0t6) {margin:0 0 1rem 0;color:#111827;font-size:1.5rem;}.user-info.svelte-1ubq0t6 h3:where(.svelte-1ubq0t6) {margin:0 0 0.75rem 0;color:#374151;font-size:1rem;font-weight:600;}.user-data-section.svelte-1ubq0t6 {margin-bottom:1.5rem;padding:1rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;}.user-data-section.svelte-1ubq0t6 pre:where(.svelte-1ubq0t6) {margin:0;padding:0.75rem;background:#1f2937;color:#10b981;border-radius:0.375rem;font-size:0.875rem;line-height:1.5;overflow-x:auto;font-family:"Courier New", monospace;}.user-info.svelte-1ubq0t6 p:where(.svelte-1ubq0t6) {margin:0.5rem 0;color:#4b5563;font-size:0.9375rem;}\r
\r
  /* 반응형 */\r
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}.techstack-grid.svelte-1ubq0t6 {justify-content:center;gap:0.5rem;}.techstack-item.svelte-1ubq0t6 {min-width:150px;padding:0.6rem 0.75rem;}.techstack-icon.svelte-1ubq0t6 {width:38px;height:38px;font-size:1.5rem;margin-bottom:0.25rem;}.techstack-name.svelte-1ubq0t6 {font-size:0.825rem;}.techstack-description.svelte-1ubq0t6 {font-size:0.65rem;}\r
  }\r
\r
  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}\r
  }`};function Jm(t,e){je(e,!0),He(t,vT);const n=()=>$n(es,"$t",r),[r,i]=Yi();let s=Q(null);function o(Ke){y(s,m(s)===Ke?null:Ke,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];nT("/users/apple");var d=mT(),p=f(d),u=f(p),v=f(u);h(u),h(p);var g=_(p,2),w=f(g),E=f(w,!0);h(w);var T=_(w,2),C=f(T),A=_(C),L=f(A,!0);h(A);var N=_(A);h(T),h(g);var R=_(g,2);{var x=Ke=>{var Re=rT();b(Ke,Re)},I=Ke=>{var Re=ue(),ct=re(Re);{var ut=Nt=>{var Lt=iT(),on=_(f(Lt),2),gn=f(on),fr=f(gn);h(gn);var _n=_(gn,2),an=f(_n,!0);h(_n),h(on);var bn=_(on,2),Vn=f(bn);h(bn);var Wn=_(bn,2),pr=f(Wn);h(Wn);var mr=_(Wn,2),Ye=f(mr);h(mr),h(Lt),Z(Kt=>{k(fr,`RTDB 사용자 데이터 (users/${fe.uid??""}):`),k(an,Kt),k(Vn,`UID: ${fe.uid??""}`),k(pr,`Email: ${fe.email??""}`),k(Ye,`전화번호: ${fe.phoneNumber??""}`)},[()=>JSON.stringify(fe.data,null,2)]),b(Nt,Lt)},Ct=Nt=>{var Lt=sT();Qt(2),b(Nt,Lt)};j(ct,Nt=>{fe.isAuthenticated?Nt(ut):Nt(Ct,!1)},!0)}b(Ke,Re)};j(R,Ke=>{fe.loading?Ke(x):Ke(I,!1)})}var M=_(R,2),B=f(M),V=f(B,!0);h(B);var $=_(B,2),K=f($),oe=_(f(K),2),te=f(oe,!0);h(oe);var H=_(oe,2),J=f(H,!0);h(H),h(K);var X=_(K,2),F=_(f(X),2),S=f(F,!0);h(F);var z=_(F,2),G=f(z,!0);h(z),h(X);var W=_(X,2),he=_(f(W),2),D=f(he,!0);h(he);var q=_(he,2),ie=f(q,!0);h(q),h(W);var ne=_(W,2),me=_(f(ne),2),se=f(me,!0);h(me);var le=_(me,2),ge=f(le,!0);h(le),h(ne),h($),h(M);var ve=_(M,2),de=f(ve),xe=f(de,!0);h(de);var Pe=_(de,2);jt(Pe,21,()=>a,Cr,(Ke,Re)=>{var ct=cT(),ut=f(ct);ut.__click=()=>o(m(Re).id);var Ct=f(ut),Nt=f(Ct,!0);h(Ct);var Lt=_(Ct,2);let on;var gn=f(Lt);wu(gn,{size:20}),h(Lt),h(ut);var fr=_(ut,2);{var _n=an=>{var bn=lT(),Vn=f(bn),Wn=f(Vn,!0);h(Vn);var pr=_(Vn,2);{var mr=Ot=>{var kt=oT(),Gn=f(kt,!0);h(kt),Z(Pn=>k(Gn,Pn),[()=>n()("home.aiTruth.item3.gpl")]),b(Ot,kt)};j(pr,Ot=>{m(Re).showGpl&&Ot(mr)})}var Ye=_(pr,2);{var Kt=Ot=>{var kt=aT(),Gn=f(kt,!0);h(kt),Z(Pn=>k(Gn,Pn),[()=>n()(m(Re).hintKey)]),b(Ot,kt)};j(Ye,Ot=>{m(Re).hintKey&&Ot(Kt)})}h(bn),Z(Ot=>k(Wn,Ot),[()=>n()(m(Re).contentKey)]),b(an,bn)};j(fr,an=>{m(s)===m(Re).id&&an(_n)})}h(ct),Z(an=>{Fe(ut,"aria-expanded",m(s)===m(Re).id),k(Nt,an),on=En(Lt,1,"accordion-icon svelte-1ubq0t6",null,on,{open:m(s)===m(Re).id})},[()=>n()(m(Re).titleKey)]),b(Ke,ct)}),h(Pe),h(ve);var U=_(ve,2),ee=f(U),be=f(ee,!0);h(ee);var Me=_(ee,2);jt(Me,21,()=>l,Cr,(Ke,Re)=>{var ct=fT(),ut=f(ct),Ct=f(ut);let Nt;var Lt=f(Ct);{var on=Ye=>{Bl(Ye,{size:20})},gn=Ye=>{Hl(Ye,{size:20})};j(Lt,Ye=>{m(Re).completed?Ye(on):Ye(gn,!1)})}h(Ct);var fr=_(Ct,2),_n=f(fr);let an;var bn=f(_n,!0);h(_n);var Vn=_(_n,2);{var Wn=Ye=>{var Kt=uT(),Ot=f(Kt,!0);h(Kt),Z(kt=>k(Ot,kt),[()=>n()(m(Re).descriptionKey)]),b(Ye,Kt)};j(Vn,Ye=>{m(Re).descriptionKey&&Ye(Wn)})}h(fr),h(ut);var pr=_(ut,2);{var mr=Ye=>{var Kt=hT();jt(Kt,21,()=>m(Re).subitems,Cr,(Ot,kt)=>{var Gn=dT(),Pn=f(Gn);let co;var Ra=f(Pn);{var pv=vr=>{Bl(vr,{size:16})},mv=vr=>{Hl(vr,{size:16})};j(Ra,vr=>{m(kt).completed?vr(pv):vr(mv,!1)})}h(Pn);var Pa=_(Pn,2);let Eu;var vv=f(Pa,!0);h(Pa),h(Gn),Z(vr=>{co=En(Pn,1,"todo-subicon svelte-1ubq0t6",null,co,{completed:m(kt).completed}),Eu=En(Pa,1,"todo-subtext svelte-1ubq0t6",null,Eu,{completed:m(kt).completed}),k(vv,vr)},[()=>n()(m(kt).key)]),b(Ot,Gn)}),h(Kt),b(Ye,Kt)};j(pr,Ye=>{m(Re).subitems.length>0&&Ye(mr)})}h(ct),Z(Ye=>{Nt=En(Ct,1,"todo-icon svelte-1ubq0t6",null,Nt,{completed:m(Re).completed}),an=En(_n,1,"todo-label svelte-1ubq0t6",null,an,{completed:m(Re).completed}),k(bn,Ye)},[()=>n()(m(Re).labelKey)]),b(Ke,ct)}),h(Me),h(U);var Ge=_(U,2),ke=f(Ge),Ne=f(ke,!0);h(ke);var ze=_(ke,2),pt=f(ze),Se=f(pt),Te=f(Se,!0);h(Se);var it=_(Se,1,!0);h(pt);var Rt=_(pt,2);jt(Rt,21,()=>c,Cr,(Ke,Re)=>{var ct=pT(),ut=f(ct,!0);h(ct),Z(Ct=>k(ut,Ct),[()=>n()(m(Re))]),b(Ke,ct)}),h(Rt),h(ze),h(Ge);var rn=_(Ge,2),Vt=f(rn),It=f(Vt,!0);h(Vt);var sn=_(Vt,2),Wt=f(sn),Pt=f(Wt,!0);h(Wt);var gt=_(Wt,2),st=f(gt),Gt=_(st),Rn=f(Gt,!0);h(Gt);var Hn=_(Gt,1,!0);h(gt);var Hr=_(gt,2),bi=f(Hr,!0);h(Hr),h(sn),h(rn),h(d),Z((Ke,Re,ct,ut,Ct,Nt,Lt,on,gn,fr,_n,an,bn,Vn,Wn,pr,mr,Ye,Kt,Ot,kt,Gn,Pn,co,Ra)=>{k(v,`✨ ${Ke??""}`),k(E,Re),k(C,`${ct??""} `),k(L,ut),k(N,` ${Ct??""}`),k(V,Nt),k(te,Lt),k(J,on),k(S,gn),k(G,fr),k(D,_n),k(ie,an),k(se,bn),k(ge,Vn),k(xe,Wn),k(be,pr),k(Ne,mr),k(Te,Ye),k(it,Kt),k(It,Ot),k(Pt,kt),k(st,`${Gn??""} `),k(Rn,Pn),k(Hn,co),k(bi,Ra)},[()=>n()("home.vibeBanner"),()=>n()("home.title"),()=>n()("home.description.part1"),()=>n()("home.description.linkText"),()=>n()("home.description.part2"),()=>n()("home.techStack.title"),()=>n()("home.techStack.svelte"),()=>n()("home.techStack.svelteDesc"),()=>n()("home.techStack.flutter"),()=>n()("home.techStack.flutterDesc"),()=>n()("home.techStack.firebase"),()=>n()("home.techStack.firebaseDesc"),()=>n()("home.techStack.dokplay"),()=>n()("home.techStack.dokplayDesc"),()=>n()("home.aiTruth.title"),()=>n()("home.todo.title"),()=>n()("home.overview.title"),()=>n()("home.overview.brand"),()=>n()("home.overview.description"),()=>n()("home.aiChange.title"),()=>n()("home.aiChange.description"),()=>n()("home.aiChange.emphasis"),()=>n()("home.aiChange.highlight"),()=>n()("home.aiChange.conclusion"),()=>n()("home.aiChange.hint")]),b(t,d),Be(),i()}at(["click"]);pe(Jm,{},[],[],!0);var gT=P('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx">전화번호로 간편하게 로그인하세요.</p> <phone-login></phone-login></div>',2),_T=P('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx">환영합니다!</h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx">홈으로 이동</a></div>'),bT=P('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const wT={hash:"svelte-1mz53xx",code:`\r
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
  }`};function Xm(t,e){je(e,!1),He(t,wT);const n=()=>$n(Aa,"$user",i),r=()=>$n(es,"$t",i),[i,s]=Yi();function o(v){console.log("Login successful:",v.detail),alert(`로그인 성공!
전화번호: ${v.detail.phoneNumber}`),window.location.href="/"}function a(v){console.error("Login error:",v.detail),alert(`로그인 실패: ${v.detail.error}`)}tn();var l=bT(),c=f(l),d=f(c);{var p=v=>{var g=gT(),w=f(g),E=f(w,!0);h(w);var T=_(w,4);h(g),Z(C=>k(E,C),[()=>r()("로그인")]),Ps("login-success",T,o),Ps("login-error",T,a),b(v,g)},u=v=>{var g=_T(),w=_(f(g),2),E=f(w);h(w),Qt(2),h(g),Z(()=>k(E,`${n().phoneNumber??""}로 로그인하셨습니다.`)),b(v,g)};j(d,v=>{n()?v(u,!1):v(p)})}h(c),h(l),b(t,l),Be(),s()}pe(Xm,{},[],[],!0);var yT=P('<button class="menu-item svelte-163o8b2"> </button>'),ET=P('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2">아래에서 이동할 페이지를 선택하세요</p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const IT={hash:"svelte-163o8b2",code:`\r
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
  }`};function Zm(t,e){je(e,!1),He(t,IT),Et(()=>{nn("메뉴")});function n(a){window.history.pushState({},"",a),window.dispatchEvent(new PopStateEvent("popstate"))}const r=[{label:"홈",path:"/"},{label:"로그인",path:"/user/login"},{label:"사용자 프로필",path:"/user/profile"},{label:"게시물 목록",path:"/post/list"},{label:"게시물 상세 (예: ID:123)",path:"/post/detail/123"},{label:"채팅 목록",path:"/chat/list"},{label:"설정",path:"/settings"},{label:"앱 정보",path:"/about"},{label:"도움말",path:"/help"},{label:"이용 약관",path:"/terms"},{label:"개인정보 처리방침",path:"/privacy"},{label:"문의하기",path:"/contact"},{label:"[개발] 테스트 게시글 생성",path:"/dev/generate-posts"}];tn();var i=ET(),s=f(i),o=_(f(s),2);jt(o,5,()=>r,a=>a.path,(a,l)=>{var c=yT();c.__click=()=>n(m(l).path);var d=f(c,!0);h(c),Z(()=>k(d,m(l).label)),b(a,c)}),h(o),h(s),h(i),b(t,i),Be()}at(["click"]);pe(Zm,{},[],[],!0);var CT=P('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),kT=P('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3">사진 없음</span></div>'),TT=P('<button type="button" class="photo-remove-button svelte-17u94r3" aria-label="프로필 사진 제거"><!></button>'),xT=P('<p class="upload-status svelte-17u94r3">사진을 저장하는 중입니다...</p>'),ST=P('<div class="message-box success-message svelte-17u94r3"> </div>'),AT=P('<div class="message-box error-message svelte-17u94r3"> </div>'),RT=P('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3">프로필 사진</label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;" aria-label="프로필 사진 선택"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3">프로필 사진을 클릭하여 변경</p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName">닉네임</label> <input type="text" id="displayName" class="form-input svelte-17u94r3" placeholder="닉네임을 입력하세요" maxlength="50" required/> <p class="form-helper svelte-17u94r3">최대 50자까지 입력할 수 있습니다</p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender">성별</label> <select id="gender" class="form-select svelte-17u94r3"><option>선택하지 않음</option><option>남자</option><option>여자</option><option>기타</option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth">생년월일</label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3">YYYY-MM-DD 형식으로 선택해주세요</p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3">취소</button></div></form></div>');const PT={hash:"svelte-17u94r3",code:`
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
  }`};function ev(t,e){je(e,!0),He(t,PT);let n=Q(xt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),r=Q(null),i=Q(null),s=Q(!1),o=Q(!1),a=Q(null),l=Q(null),c=null,d=null;function p(U){y(a,U,!0),c&&clearTimeout(c),c=setTimeout(()=>{y(a,null),c=null},3e3)}function u(U){y(l,U,!0),d&&clearTimeout(d),d=setTimeout(()=>{y(l,null),d=null},5e3)}lf(()=>{c&&clearTimeout(c),d&&clearTimeout(d)}),Et(()=>{nn("프로필 수정")}),ni(()=>{if(fe.data){m(n).displayName=fe.data.displayName||"",m(n).gender=fe.data.gender||"",m(n).dateOfBirth=fe.data.dateOfBirth||"";const U=fe.data.photoUrl??fe.data.photoURL??"";m(n).photoUrl=U,y(r,U||null,!0)}});function v(){m(o)||m(i)?.click()}async function g(U){const be=U.currentTarget?.files?.[0];if(!be)return;if(m(o)){u("다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.");return}if(!fe.isAuthenticated||!fe.uid){u("로그인 후 이용해주세요.");return}if(!be.type.startsWith("image/")){u("이미지 파일만 선택 가능합니다.");return}if(be.size>5*1024*1024){u("파일 크기는 5MB 이하여야 합니다.");return}const Me=m(r),Ge=m(n).photoUrl,ke=new FileReader;ke.onload=Ne=>{const ze=Ne.target?.result;typeof ze=="string"&&y(r,ze,!0)},ke.readAsDataURL(be);try{await E(be)}catch{y(r,Me,!0),m(n).photoUrl=Ge,m(i)&&(m(i).value="")}}async function w(){if(m(o))return;if(!fe.isAuthenticated||!fe.uid){u("로그인 후 이용해주세요.");return}const U=m(r),ee=m(n).photoUrl;y(r,null),m(n).photoUrl="",m(i)&&(m(i).value="");try{y(o,!0),await fe.updateProfile({photoUrl:null}),p("프로필 사진이 제거되었습니다.")}catch(be){console.error("프로필 사진 제거 오류:",be),u(`사진 제거 실패: ${be.message||"알 수 없는 오류가 발생했습니다."}`),y(r,U,!0),m(n).photoUrl=ee}finally{y(o,!1)}}async function E(U,{showSuccess:ee=!0}={}){if(!fe.isAuthenticated||!fe.uid)throw u("로그인 후 이용해주세요."),new Error("User is not authenticated");try{y(o,!0);const be=U.name.split(".").pop()?.toLowerCase()||"jpg",Me=`profile_${fe.uid}_${Date.now()}.${be}`,Ge=FC(VC,`users/${fe.uid}/profile/${Me}`),ke=await $C(Ge,U),Ne=await UC(ke.ref);return m(n).photoUrl=Ne,y(r,Ne,!0),await fe.updateProfile({photoUrl:Ne}),ee&&p("프로필 사진이 저장되었습니다."),Ne}catch(be){throw console.error("프로필 사진 업로드 오류:",be),u(`사진 저장 실패: ${be.message||"알 수 없는 오류가 발생했습니다."}`),be}finally{y(o,!1),m(i)&&(m(i).value="")}}async function T(U){U.preventDefault(),y(s,!0),y(l,null),y(a,null);try{let ee=m(n).photoUrl;const be=m(i)?.files?.[0];if(be)try{ee=await E(be,{showSuccess:!1})}catch{y(s,!1);return}const Me={displayName:m(n).displayName,gender:m(n).gender,dateOfBirth:m(n).dateOfBirth,photoUrl:ee||null};await fe.updateProfile(Me),p("프로필이 성공적으로 업데이트되었습니다!"),console.log("프로필 업데이트 완료:",Me)}catch(ee){console.error("프로필 업데이트 오류:",ee),u(`오류: ${ee.message||"알 수 없는 오류가 발생했습니다."}`)}finally{y(s,!1)}}function C(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var A=RT(),L=f(A),N=f(L),R=_(f(N),2),x=f(R);x.__change=g,hc(x,U=>y(i,U),()=>m(i));var I=_(x,2),M=f(I);M.__click=v;var B=f(M);{var V=U=>{var ee=CT();Z(()=>uc(ee,`background-image: url("${m(r)}")`)),b(U,ee)},$=U=>{var ee=kT();b(U,ee)};j(B,U=>{m(r)?U(V):U($,!1)})}h(M);var K=_(M,2);{var oe=U=>{var ee=TT();ee.__click=w;var be=f(ee);Gm(be,{size:18,"stroke-width":3}),h(ee),Z(()=>ee.disabled=m(s)||m(o)),b(U,ee)};j(K,U=>{m(r)&&U(oe)})}var te=_(K,2),H=f(te);zm(H,{size:20,"stroke-width":2}),h(te),h(I);var J=_(I,4);{var X=U=>{var ee=xT();b(U,ee)};j(J,U=>{m(o)&&U(X)})}h(R),h(N);var F=_(N,2),S=_(f(F),2);Ui(S),Qt(2),h(F);var z=_(F,2),G=_(f(z),2),W=f(G);W.value=W.__value="";var he=_(W);he.value=he.__value="male";var D=_(he);D.value=D.__value="female";var q=_(D);q.value=q.__value="other",h(G),h(z);var ie=_(z,2),ne=_(f(ie),2);Ui(ne),Qt(2),h(ie);var me=_(ie,2);{var se=U=>{var ee=ST(),be=f(ee);h(ee),Z(()=>k(be,`✅ ${m(a)??""}`)),b(U,ee)};j(me,U=>{m(a)&&U(se)})}var le=_(me,2);{var ge=U=>{var ee=AT(),be=f(ee);h(ee),Z(()=>k(be,`⚠️ ${m(l)??""}`)),b(U,ee)};j(le,U=>{m(l)&&U(ge)})}var ve=_(le,2),de=f(ve),xe=f(de,!0);h(de);var Pe=_(de,2);Pe.__click=C,h(ve),h(L),h(A),Z(()=>{M.disabled=m(s)||m(o),Fe(M,"aria-label",m(r)?"프로필 사진 변경":"프로필 사진 추가"),S.disabled=m(s),G.disabled=m(s),ne.disabled=m(s),de.disabled=m(s)||m(o)||!fe.isAuthenticated,k(xe,m(s)?"저장 중...":"저장"),Pe.disabled=m(s)}),Ps("submit",L,T),Fi(S,()=>m(n).displayName,U=>m(n).displayName=U),dc(G,()=>m(n).gender,U=>m(n).gender=U),Fi(ne,()=>m(n).dateOfBirth,U=>m(n).dateOfBirth=U),b(t,A),Be()}at(["change","click"]);pe(ev,{},[],[],!0);var NT=P('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),LT=P('<div class="loading-container svelte-a4suww"><!></div>'),OT=P('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),DT=P('<div class="error-container svelte-a4suww"><!></div>'),MT=P('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),$T=P('<div class="empty-container svelte-a4suww"><!></div>'),UT=P('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),FT=P('<div class="item-wrapper svelte-a4suww"><!></div>'),zT=P('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),qT=P('<div class="loading-more svelte-a4suww"><!></div>'),jT=P('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),BT=P('<div class="no-more svelte-a4suww"><!></div>'),HT=P('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),VT=P('<div class="database-list-view svelte-a4suww"><!></div>');const WT={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function tv(t,e){je(e,!0),He(t,WT);let n=Ve(e,"path",7,""),r=Ve(e,"pageSize",7,10),i=Ve(e,"orderBy",7,"createdAt"),s=Ve(e,"threshold",7,300),o=Ve(e,"reverse",7,!1),a=Ve(e,"item",7),l=Ve(e,"loading",7),c=Ve(e,"empty",7),d=Ve(e,"error",7),p=Ve(e,"loadingMore",7),u=Ve(e,"noMore",7),v=Q(xt([])),g=Q(!1),w=Q(!0),E=Q(!0),T=Q(null),C=Q(null),A=Q(0),L=Q(null),N=Q(null),R=new Map,x=new Map;ni(()=>{n()&&dn&&B()}),ni(()=>{if(m(N))return m(N).addEventListener("scroll",$),window.addEventListener("scroll",K),()=>{m(N)?.removeEventListener("scroll",$),window.removeEventListener("scroll",K)}});function I(S,z){if(S.length===0)return null;const G=S[S.length-1],W=G.data[z];return W!=null&&W!==""?(console.log(`DatabaseListView: Using cursor from '${z}':`,{value:W,key:G.key}),{value:W,key:G.key}):(console.warn(`DatabaseListView: Field '${z}' not found in last item, using key as fallback:`,G.key),{value:G.key,key:G.key})}function M(S,z){const G=`${S}`;if(R.has(G))return;const W=Fn(dn,`${n()}/${S}`),he=lo(W,D=>{if(D.exists()){const q=D.val();m(v)[z]={key:S,data:q},y(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${S}`,q)}},D=>{console.error(`DatabaseListView: Error listening to item ${S}`,D)});R.set(G,he)}async function B(){console.log("DatabaseListView: Loading initial data from",n()),y(w,!0),y(L,null),y(v,[],!0),x.clear(),R.clear(),y(T,null),y(C,null),y(E,!0),y(A,0);try{const S=Fn(dn,n()),z=Fl(S,Ul(i()),eh(r()+1)),G=await Zd(z);if(G.exists()){const W=[],he=G.val();if(Object.entries(he).forEach(([D,q])=>{W.push({key:D,data:q})}),console.log(`DatabaseListView: Initial query returned ${W.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",W.map(D=>({key:D.key,[i()]:D.data[i()]}))),o()&&W.reverse(),W.length>r()){y(E,!0),y(v,W.slice(0,r()),!0);const D=I(m(v),i());D?(y(T,D.value,!0),y(C,D.key,!0)):y(E,!1)}else if(y(E,!1),y(v,W,!0),m(v).length>0){const D=I(m(v),i());D&&(y(T,D.value,!0),y(C,D.key,!0))}x.set(0,m(v)),m(v).forEach((D,q)=>{M(D.key,q)}),console.log(`DatabaseListView: Page ${m(A)} - Loaded ${m(v).length} items, hasMore: ${m(E)}`)}else console.log("DatabaseListView: No data found"),y(v,[],!0),y(E,!1)}catch(S){console.error("DatabaseListView: Load error",S),y(L,S.message,!0)}finally{y(w,!1)}}async function V(){if(!(m(g)||!m(E))){ll(A),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(A)}`),y(g,!0),y(L,null);try{if(m(T)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(E,!1),y(g,!1);return}const S=Fn(dn,n()),z=Fl(S,Ul(i()),mI(m(T)),eh(r()+1)),G=await Zd(z);if(G.exists()){const W=[],he=G.val();Object.entries(he).forEach(([ne,me])=>{W.push({key:ne,data:me})}),console.log(`DatabaseListView: Page ${m(A)} - startAfter query returned ${W.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(A)} - Items orderBy values:`,W.map(ne=>({key:ne.key,[i()]:ne.data[i()]}))),o()&&W.reverse();const D=new Set(m(v).map(ne=>ne.key)),q=W.filter(ne=>!D.has(ne.key));if(console.log(`DatabaseListView: Page ${m(A)} - After filtering duplicates: ${q.length} items`),q.length===0){console.log("DatabaseListView: No more data"),y(E,!1),y(g,!1);return}if(q.length>r()){y(E,!0);const ne=q.slice(0,r());y(v,[...m(v),...ne],!0);const me=I(ne,i());me?(y(T,me.value,!0),y(C,me.key,!0)):y(E,!1)}else if(y(E,!1),y(v,[...m(v),...q],!0),q.length>0){const ne=I(q,i());ne&&(y(T,ne.value,!0),y(C,ne.key,!0))}const ie=m(v).length-(q.length>r()?r():q.length);m(v).slice(ie).forEach((ne,me)=>{M(ne.key,ie+me)}),console.log(`DatabaseListView: Page ${m(A)} - Loaded ${q.length} more items, total: ${m(v).length}, hasMore: ${m(E)}`)}else console.log("DatabaseListView: No more data"),y(E,!1)}catch(S){console.error("DatabaseListView: Load more error",{name:S.name,message:S.message,code:S.code,toString:S.toString()}),y(L,S.message||S.code||"Unknown error",!0)}finally{y(g,!1)}}}function $(){if(!m(N)||m(g)||!m(E))return;const{scrollTop:S,scrollHeight:z,clientHeight:G}=m(N);z-(S+G)<s()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),V())}function K(){if(m(g)||!m(E))return;const S=window.pageYOffset||document.documentElement.scrollTop,z=document.documentElement.scrollHeight,G=window.innerHeight;z-(S+G)<s()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),V())}function oe(){console.log("DatabaseListView: Refreshing..."),B()}var te={refresh:oe,get path(){return n()},set path(S=""){n(S),qe()},get pageSize(){return r()},set pageSize(S=10){r(S),qe()},get orderBy(){return i()},set orderBy(S="createdAt"){i(S),qe()},get threshold(){return s()},set threshold(S=300){s(S),qe()},get reverse(){return o()},set reverse(S=!1){o(S),qe()},get item(){return a()},set item(S){a(S),qe()},get loading(){return l()},set loading(S){l(S),qe()},get empty(){return c()},set empty(S){c(S),qe()},get error(){return d()},set error(S){d(S),qe()},get loadingMore(){return p()},set loadingMore(S){p(S),qe()},get noMore(){return u()},set noMore(S){u(S),qe()}},H=VT(),J=f(H);{var X=S=>{var z=LT(),G=f(z);{var W=D=>{var q=ue(),ie=re(q);yi(ie,l),b(D,q)},he=D=>{var q=NT();b(D,q)};j(G,D=>{l()?D(W):D(he,!1)})}h(z),b(S,z)},F=S=>{var z=ue(),G=re(z);{var W=D=>{var q=DT(),ie=f(q);{var ne=se=>{var le=ue(),ge=re(le);yi(ge,d,()=>m(L)),b(se,le)},me=se=>{var le=OT(),ge=_(f(le),2),ve=f(ge,!0);h(ge);var de=_(ge,2);de.__click=oe,h(le),Z(()=>k(ve,m(L))),b(se,le)};j(ie,se=>{d()?se(ne):se(me,!1)})}h(q),b(D,q)},he=D=>{var q=ue(),ie=re(q);{var ne=se=>{var le=$T(),ge=f(le);{var ve=xe=>{var Pe=ue(),U=re(Pe);yi(U,c),b(xe,Pe)},de=xe=>{var Pe=MT();b(xe,Pe)};j(ge,xe=>{c()?xe(ve):xe(de,!1)})}h(le),b(se,le)},me=se=>{var le=HT(),ge=f(le);jt(ge,19,()=>m(v),U=>U.key,(U,ee,be)=>{var Me=FT(),Ge=f(Me);{var ke=ze=>{var pt=ue(),Se=re(pt);yi(Se,a,()=>m(ee),()=>m(be)),b(ze,pt)},Ne=ze=>{var pt=UT(),Se=f(pt),Te=f(Se,!0);h(Se),h(pt),Z(it=>k(Te,it),[()=>JSON.stringify(m(ee).data,null,2)]),b(ze,pt)};j(Ge,ze=>{a()?ze(ke):ze(Ne,!1)})}h(Me),Z(()=>Fe(Me,"data-key",m(ee).key)),b(U,Me)});var ve=_(ge,2);{var de=U=>{var ee=qT(),be=f(ee);{var Me=ke=>{var Ne=ue(),ze=re(Ne);yi(ze,p),b(ke,Ne)},Ge=ke=>{var Ne=zT();b(ke,Ne)};j(be,ke=>{p()?ke(Me):ke(Ge,!1)})}h(ee),b(U,ee)};j(ve,U=>{m(g)&&U(de)})}var xe=_(ve,2);{var Pe=U=>{var ee=BT(),be=f(ee);{var Me=ke=>{var Ne=ue(),ze=re(Ne);yi(ze,u),b(ke,Ne)},Ge=ke=>{var Ne=jT();b(ke,Ne)};j(be,ke=>{u()?ke(Me):ke(Ge,!1)})}h(ee),b(U,ee)};j(xe,U=>{!m(E)&&!m(g)&&U(Pe)})}h(le),b(se,le)};j(ie,se=>{m(v).length===0?se(ne):se(me,!1)},!0)}b(D,q)};j(G,D=>{m(L)?D(W):D(he,!1)},!0)}b(S,z)};j(J,S=>{m(w)?S(X):S(F,!1)})}return h(H),hc(H,S=>y(N,S),()=>m(N)),b(t,H),Be(te)}at(["click"]);pe(tv,{path:{},pageSize:{},orderBy:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var GT=P('<img class="svelte-r48pmi"/>'),KT=P('<div class="avatar-placeholder svelte-r48pmi"> </div>'),YT=P('<span class="badge-me svelte-r48pmi">나</span>'),QT=P('<p class="user-email svelte-r48pmi"> </p>'),JT=P('<p class="user-bio svelte-r48pmi"> </p>'),XT=P('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi">프로필 보기</button></div></div>'),ZT=P('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p>사용자 목록을 불러오는 중...</p></div>'),ex=P('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi">등록된 사용자가 없습니다.</p></div>'),tx=P('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi">사용자 목록을 불러오는데 실패했습니다.</p> <p class="error-detail svelte-r48pmi"> </p></div>'),nx=P('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi">더 많은 사용자를 불러오는 중...</p></div>'),rx=P('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi">모든 사용자를 불러왔습니다.</p></div>');const ix={hash:"svelte-r48pmi",code:`\r
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
  }`};function nv(t,e){je(e,!1),He(t,ix);const n=()=>$n(es,"$t",r),[r,i]=Yi();function s(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):"정보 없음"}Et(()=>{nn(n()("사용자찾기"))});function o(a){a===fe.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}tn(),tv(t,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(v,g=Dn)=>{var w=XT();w.__click=()=>o(g().key),w.__keydown=F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),o(g().key))};var E=f(w),T=f(E);{var C=F=>{var S=GT();Z(()=>{Fe(S,"src",g().data?.photoUrl??g().data?.photoURL),Fe(S,"alt",g().data?.displayName||"사용자")}),b(F,S)},A=F=>{var S=KT(),z=f(S,!0);h(S),Z(G=>k(z,G),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),b(F,S)};j(T,F=>{g().data?.photoUrl||g().data?.photoURL?F(C):F(A,!1)})}h(E);var L=_(E,2),N=f(L),R=f(N),x=_(R);{var I=F=>{var S=YT();b(F,S)};j(x,F=>{g().key===fe.uid&&F(I)})}h(N);var M=_(N,2),B=f(M,!0);h(M);var V=_(M,2);{var $=F=>{var S=QT(),z=f(S,!0);h(S),Z(()=>k(z,g().data.email)),b(F,S)};j(V,F=>{g().data?.email&&F($)})}var K=_(V,2);{var oe=F=>{var S=JT(),z=f(S,!0);h(S),Z(()=>k(z,g().data.bio)),b(F,S)};j(K,F=>{g().data?.bio&&F(oe)})}var te=_(K,2),H=f(te);h(te),h(L);var J=_(L,2),X=f(J);X.__click=F=>{F.stopPropagation(),o(g().key)},h(J),h(w),Z(F=>{k(R,`${(g().data?.displayName||"이름 없음")??""} `),k(B,g().key),k(H,`가입일: ${F??""}`)},[()=>s(g().data?.createdAt)]),b(v,w)},loading:v=>{var g=ZT();b(v,g)},empty:v=>{var g=ex();b(v,g)},error:(v,g=Dn)=>{var w=tx(),E=_(f(w),4),T=f(E,!0);h(E),h(w),Z(()=>k(T,g())),b(v,w)},loadingMore:v=>{var g=nx();b(v,g)},noMore:v=>{var g=rx();b(v,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),Be(),i()}at(["click","keydown"]);pe(nv,{},[],[],!0);async function sx(t,e,n,r,i){try{const s=Date.now(),o={uid:e,title:r,content:i,author:n,category:t,createdAt:s,updatedAt:s},a=Fn(dn,`posts/${t}`);return{success:!0,postId:(await fu(a,o)).key}}catch(s){return console.error("게시글 생성 실패:",s),{success:!1,error:s.message}}}function ox(t,e=10,n){try{const r=Fn(dn,`posts/${t}`),i=Fl(r,Ul("createdAt"),_I(e)),s=lo(i,o=>{if(o.exists()){const a=[];o.forEach(l=>{a.push({postId:l.key,...l.val()})}),a.reverse(),n(a)}else n([])});return()=>{ym(r)}}catch(r){return console.error("게시글 조회 실패:",r),n([]),()=>{}}}const oh=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];var ax=P('<div class="loading-screen svelte-1r1wwfo"><p>로딩 중...</p></div>'),lx=P("<button> </button>"),cx=P('<div class="empty-state svelte-1r1wwfo"><div class="empty-icon svelte-1r1wwfo">📝</div> <p class="empty-message svelte-1r1wwfo">게시글이 없습니다</p> <p class="empty-hint svelte-1r1wwfo">첫 번째 게시글을 작성해보세요!</p></div>'),ux=P('<div class="post-item svelte-1r1wwfo"><h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><span class="post-author svelte-1r1wwfo"> </span> <span class="post-date svelte-1r1wwfo"> </span></div></div>'),dx=P('<div class="posts-list svelte-1r1wwfo"></div>'),hx=P("<option> </option>"),fx=P('<div class="modal-backdrop svelte-1r1wwfo" role="presentation"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo">새 게시글 작성</h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo">카테고리</label> <select id="category" class="form-control svelte-1r1wwfo"><option>카테고리 선택</option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo">제목</label> <input id="title" type="text" placeholder="제목을 입력하세요" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo">내용</label> <textarea id="content" placeholder="내용을 입력하세요" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo">취소</button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),px=P('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div> <button class="btn-create-post svelte-1r1wwfo">✏️ 글쓰기</button></div> <!></div> <!>',1);const mx={hash:"svelte-1r1wwfo",code:`\r
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
  }`};function rv(t,e){je(e,!0),He(t,mx);let n=Q(null),r=Q(""),i=Q(!0);const s=new URLSearchParams(typeof window<"u"?window.location.search:"");let o=Q(xt(s.get("category")||"community")),a=Q(!1),l=Q(""),c=Q(""),d=Q(""),p=Q(!1),u=Q(xt([]));Et(()=>{nn("게시판");const N=ui.onAuthStateChanged(async R=>{if(R){y(n,R.uid,!0);const x=R.displayName||R.email||"익명";y(r,x,!0)}else y(n,null),y(r,"");y(i,!1)});return()=>N()}),ni(()=>{if(!m(i)){const N=ox(m(o),10,R=>{y(u,R,!0)});return()=>N()}});function v(){if(!m(n)){window.location.href="/user/login";return}y(a,!0)}function g(){y(a,!1),y(l,""),y(c,""),y(d,"")}async function w(){if(!m(l)){alert("카테고리를 선택해주세요.");return}if(!m(c).trim()){alert("제목을 입력해주세요.");return}if(!m(d).trim()){alert("내용을 입력해주세요.");return}if(!m(n)||!m(r)){alert("로그인 정보를 확인할 수 없습니다.");return}y(p,!0);try{const N=await sx(m(l),m(n),m(r),m(c),m(d));if(N.success){const R=m(l);y(a,!1),y(l,""),y(c,""),y(d,""),alert("게시글이 작성되었습니다.")}else alert(`게시글 저장 실패: ${N.error||"Unknown error"}`)}catch(N){console.error("게시글 저장 오류:",N),alert("게시글 저장 중 오류가 발생했습니다.")}finally{y(p,!1)}}function E(N){y(o,N,!0),window.history.pushState({},"",`/post/list?category=${N}`)}var T=ue(),C=re(T);{var A=N=>{var R=ax();b(N,R)},L=N=>{var R=px(),x=re(R),I=f(x),M=f(I);jt(M,21,()=>oh,H=>H.value,(H,J)=>{var X=lx();X.__click=()=>E(m(J).value);var F=f(X,!0);h(X),Z(()=>{En(X,1,`tab ${m(o)===m(J).value?"active":""}`,"svelte-1r1wwfo"),k(F,m(J).label)}),b(H,X)}),h(M);var B=_(M,2);B.__click=v,h(I);var V=_(I,2);{var $=H=>{var J=cx();b(H,J)},K=H=>{var J=dx();jt(J,21,()=>m(u),X=>X.postId,(X,F)=>{var S=ux(),z=f(S),G=f(z,!0);h(z);var W=_(z,2),he=f(W,!0);h(W);var D=_(W,2),q=f(D),ie=f(q);h(q);var ne=_(q,2),me=f(ne,!0);h(ne),h(D),h(S),Z(se=>{k(G,m(F).title),k(he,m(F).content),k(ie,`작성자: ${m(F).author??""}`),k(me,se)},[()=>new Date(m(F).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),b(X,S)}),h(J),b(H,J)};j(V,H=>{m(u).length===0?H($):H(K,!1)})}h(x);var oe=_(x,2);{var te=H=>{var J=fx();J.__click=()=>y(a,!1),J.__keydown=de=>de.key==="Escape"&&y(a,!1);var X=f(J);X.__click=de=>de.stopPropagation();var F=f(X),S=_(f(F),2);S.__click=()=>y(a,!1),h(F);var z=_(F,2),G=f(z),W=_(f(G),2),he=f(W);he.value=he.__value="";var D=_(he);jt(D,17,()=>oh,de=>de.value,(de,xe)=>{var Pe=hx(),U=f(Pe,!0);h(Pe);var ee={};Z(()=>{k(U,m(xe).label),ee!==(ee=m(xe).value)&&(Pe.value=(Pe.__value=m(xe).value)??"")}),b(de,Pe)}),h(W),h(G);var q=_(G,2),ie=_(f(q),2);Ui(ie),h(q);var ne=_(q,2),me=_(f(ne),2);cg(me),h(ne),h(z);var se=_(z,2),le=f(se);le.__click=g;var ge=_(le,2);ge.__click=w;var ve=f(ge,!0);h(ge),h(se),h(X),h(J),Z(()=>{le.disabled=m(p),ge.disabled=m(p),k(ve,m(p)?"전송 중...":"전송")}),dc(W,()=>m(l),de=>y(l,de)),Fi(ie,()=>m(c),de=>y(c,de)),Fi(me,()=>m(d),de=>y(d,de)),b(H,J)};j(oe,H=>{m(a)&&H(te)})}b(N,R)};j(C,N=>{m(i)?N(A):N(L,!1)})}b(t,T),Be()}at(["click","keydown"]);pe(rv,{},[],[],!0);var vx=P('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1sszjx6">게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1sszjx6">메뉴로 돌아가기</button></div></div>');const gx={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function iv(t,e){je(e,!1),He(t,gx),Et(()=>{nn("게시물 상세")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=vx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(iv,{},[],[],!0);var _x=P('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1xfn8v9">채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1xfn8v9">메뉴로 돌아가기</button></div></div>');const bx={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function sv(t,e){je(e,!1),He(t,bx),Et(()=>{nn("채팅")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=_x(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(sv,{},[],[],!0);var wx=P('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08">이 페이지는 공사중입니다</p> <p class="construction-description svelte-177ja08">설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-177ja08">메뉴로 돌아가기</button></div></div>');const yx={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function ov(t,e){je(e,!1),He(t,yx),Et(()=>{nn("설정")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=wx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(ov,{},[],[],!0);var Ex=P('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe">이 페이지는 공사중입니다</p> <p class="construction-description svelte-65loqe">앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-65loqe">메뉴로 돌아가기</button></div></div>');const Ix={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function av(t,e){je(e,!1),He(t,Ix),Et(()=>{nn("앱 정보")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=Ex(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(av,{},[],[],!0);var Cx=P('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna">이 페이지는 공사중입니다</p> <p class="construction-description svelte-19u7yna">도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-19u7yna">메뉴로 돌아가기</button></div></div>');const kx={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function lv(t,e){je(e,!1),He(t,kx),Et(()=>{nn("도움말")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=Cx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(lv,{},[],[],!0);var Tx=P('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w">이 페이지는 공사중입니다</p> <p class="construction-description svelte-134dw7w">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-134dw7w">메뉴로 돌아가기</button></div></div>');const xx={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function cv(t,e){je(e,!1),He(t,xx),Et(()=>{nn("이용약관")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=Tx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(cv,{},[],[],!0);var Sx=P('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj">이 페이지는 공사중입니다</p> <p class="construction-description svelte-8iwrwj">개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-8iwrwj">메뉴로 돌아가기</button></div></div>');const Ax={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function uv(t,e){je(e,!1),He(t,Ax),Et(()=>{nn("개인정보처리방침")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=Sx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(uv,{},[],[],!0);var Rx=P('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1f7uyy3">문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1f7uyy3">메뉴로 돌아가기</button></div></div>');const Px={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function dv(t,e){je(e,!1),He(t,Px),Et(()=>{nn("문의하기")});function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}tn();var r=Rx(),i=f(r),s=_(f(i),2);s.__click=n,h(i),h(r),b(t,r),Be()}at(["click"]);pe(dv,{},[],[],!0);var Nx=P('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp">⚠️ 로그인이 필요합니다.</p> <a href="/user/login" class="svelte-uqnmwp">로그인하러 가기</a></div>'),Lx=P('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),Ox=P('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),Dx=P('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp">실행 로그</h3> <div class="logs svelte-uqnmwp"></div></div>'),Mx=P('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp">✅ 완료! 게시판 페이지에서 확인해보세요.</p> <a href="/post/list" class="btn-view svelte-uqnmwp">게시판 보기</a></div>'),$x=P('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <!></div> <!> <!>',1),Ux=P('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp">📝 테스트 게시글 생성</h1> <p class="svelte-uqnmwp">각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.</p></div> <!></div></div>');const Fx={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0;color:#6b7280;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function hv(t,e){je(e,!0),He(t,Fx);let n=Q(!1),r=Q(xt({current:0,total:0,category:""})),i=Q(xt([])),s=Q(!1);Et(()=>{nn("테스트 데이터 생성")});function o(T,C="info"){y(i,[...m(i),{message:T,type:C,time:new Date().toLocaleTimeString()}],!0)}const a={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},qna:{titles:["근처 좋은 병원 추천해주세요","택배 수령 어디서 하나요?","버스 노선 문의드립니다","주차장 이용 방법 알려주세요","쓰레기 배출 시간이 언제인가요?","세탁소 추천 부탁드려요","동네 도서관 이용 방법","반려동물 병원 어디가 좋나요?","자전거 보관소 위치 알려주세요"],contents:["{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?","{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.","{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?","{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]},market:{titles:["중고 자전거 판매합니다","안쓰는 가전제품 나눔해요","아이 장난감 저렴하게 팔아요","책장 정리 - 책 나눔","운동기구 판매합니다","여행 캐리어 팔아요","화분과 식물 나눔","게임기 판매합니다","옷장 정리 - 의류 판매"],contents:["{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!","집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!","{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!"]}},l={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function c(T){return T[Math.floor(Math.random()*T.length)]}function d(T){let C=T;for(const[A,L]of Object.entries(l)){const N=new RegExp(`\\{${A}\\}`,"g");C=C.replace(N,c(L))}return C}async function p(){if(!fe.isAuthenticated||!fe.uid){o("❌ 로그인이 필요합니다.","error");return}y(n,!0),y(s,!1),y(i,[],!0),o("✅ 테스트 데이터 생성 시작","success"),o(`사용자: ${fe.data?.displayName||fe.email}`,"info");const T=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];for(const C of T){y(r,{current:0,total:100,category:C.label},!0),o(`
📂 [${C.label}] 생성 중...`,"info");const A=a[C.value];let L=0;for(let N=0;N<100;N++)try{const R=d(c(A.titles)),x=d(c(A.contents)),I=Date.now(),M={uid:fe.uid,title:R,content:x,author:fe.data?.displayName||fe.email||"익명",category:C.value,createdAt:I-Math.floor(Math.random()*30*24*60*60*1e3),updatedAt:I},B=Fn(dn,`posts/${C.value}`);await fu(B,M),L++,y(r,{...m(r),current:N+1},!0),(N+1)%20===0&&o(`  ✓ ${N+1}/100 완료`,"success"),await new Promise(V=>setTimeout(V,50))}catch(R){o(`  ✗ 실패: ${R.message}`,"error")}o(`✅ [${C.label}] 완료: ${L}개 생성`,"success")}o(`
🎉 모든 테스트 데이터 생성 완료!`,"success"),o("총 400개의 게시글이 생성되었습니다.","success"),y(n,!1),y(s,!0)}var u=Ux(),v=f(u),g=_(f(v),2);{var w=T=>{var C=Nx();b(T,C)},E=T=>{var C=$x(),A=re(C),L=f(A);L.__click=p;var N=f(L,!0);h(L);var R=_(L,2);{var x=$=>{var K=Lx(),oe=f(K),te=f(oe,!0);h(oe);var H=_(oe,2),J=f(H);h(H);var X=_(H,2),F=f(X);h(X),h(K),Z(()=>{k(te,m(r).category),uc(J,`width: ${m(r).current/m(r).total*100}%`),k(F,`${m(r).current??""} / ${m(r).total??""}`)}),b($,K)};j(R,$=>{m(n)&&$(x)})}h(A);var I=_(A,2);{var M=$=>{var K=Dx(),oe=_(f(K),2);jt(oe,21,()=>m(i),Cr,(te,H)=>{var J=Ox(),X=f(J),F=f(X,!0);h(X);var S=_(X,2),z=f(S,!0);h(S),h(J),Z(()=>{En(J,1,`log-item log-${m(H).type??""}`,"svelte-uqnmwp"),k(F,m(H).time),k(z,m(H).message)}),b(te,J)}),h(oe),h(K),b($,K)};j(I,$=>{m(i).length>0&&$(M)})}var B=_(I,2);{var V=$=>{var K=Mx();b($,K)};j(B,$=>{m(s)&&$(V)})}Z(()=>{L.disabled=m(n),k(N,m(n)?"생성 중...":"게시글 생성 시작")}),b(T,C)};j(g,T=>{fe.isAuthenticated?T(E,!1):T(w)})}h(v),h(u),b(t,u),Be()}at(["click"]);pe(hv,{},[],[],!0);var zx=P('<sns-layout><main class="content svelte-1hwhcgc"><!></main></sns-layout>',2);const qx={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 반응형 */`};function fv(t){He(t,qx);let e=Q(xt(window.location.pathname));function n(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",n);var r=zx(),i=f(r),s=f(i);{var o=l=>{Xm(l,{})},a=l=>{var c=ue(),d=re(c);{var p=v=>{Zm(v,{})},u=v=>{var g=ue(),w=re(g);{var E=C=>{ev(C,{})},T=C=>{var A=ue(),L=re(A);{var N=x=>{nv(x,{})},R=x=>{var I=ue(),M=re(I);{var B=$=>{rv($,{})},V=$=>{var K=ue(),oe=re(K);{var te=J=>{iv(J,{})},H=J=>{var X=ue(),F=re(X);{var S=G=>{sv(G,{})},z=G=>{var W=ue(),he=re(W);{var D=ie=>{ov(ie,{})},q=ie=>{var ne=ue(),me=re(ne);{var se=ge=>{av(ge,{})},le=ge=>{var ve=ue(),de=re(ve);{var xe=U=>{lv(U,{})},Pe=U=>{var ee=ue(),be=re(ee);{var Me=ke=>{cv(ke,{})},Ge=ke=>{var Ne=ue(),ze=re(Ne);{var pt=Te=>{uv(Te,{})},Se=Te=>{var it=ue(),Rt=re(it);{var rn=It=>{dv(It,{})},Vt=It=>{var sn=ue(),Wt=re(sn);{var Pt=st=>{hv(st,{})},gt=st=>{Jm(st,{})};j(Wt,st=>{m(e)==="/dev/generate-posts"?st(Pt):st(gt,!1)},!0)}b(It,sn)};j(Rt,It=>{m(e)==="/contact"?It(rn):It(Vt,!1)},!0)}b(Te,it)};j(ze,Te=>{m(e)==="/privacy"?Te(pt):Te(Se,!1)},!0)}b(ke,Ne)};j(be,ke=>{m(e)==="/terms"?ke(Me):ke(Ge,!1)},!0)}b(U,ee)};j(de,U=>{m(e)==="/help"?U(xe):U(Pe,!1)},!0)}b(ge,ve)};j(me,ge=>{m(e)==="/about"?ge(se):ge(le,!1)},!0)}b(ie,ne)};j(he,ie=>{m(e)==="/settings"?ie(D):ie(q,!1)},!0)}b(G,W)};j(F,G=>{m(e)==="/chat/list"?G(S):G(z,!1)},!0)}b(J,X)};j(oe,J=>{m(e).startsWith("/post/detail/")?J(te):J(H,!1)},!0)}b($,K)};j(M,$=>{m(e)==="/post/list"?$(B):$(V,!1)},!0)}b(x,I)};j(L,x=>{m(e)==="/user/list"?x(N):x(R,!1)},!0)}b(C,A)};j(w,C=>{m(e)==="/user/profile"?C(E):C(T,!1)},!0)}b(v,g)};j(d,v=>{m(e)==="/menu"?v(p):v(u,!1)},!0)}b(l,c)};j(s,l=>{m(e)==="/user/login"?l(o):l(a,!1)})}h(i),h(r),b(t,r)}pe(fv,{},[],[],!0);lc(fv,{target:document.getElementById("app")});
