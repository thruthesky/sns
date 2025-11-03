(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ju=!1;var Ja=Array.isArray,Vp=Array.prototype.indexOf,Xa=Array.from,$s=Object.keys,Ki=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Xu=Object.getOwnPropertyDescriptors,Bp=Object.prototype,Gp=Array.prototype,Za=Object.getPrototypeOf,gc=Object.isExtensible;function Ci(t){return typeof t=="function"}const nr=()=>{};function Kp(t){return t()}function Fs(t){for(var e=0;e<t.length;e++)t[e]()}function Zu(){var t,e,n=new Promise((r,i)=>{t=r,e=i});return{promise:n,resolve:t,reject:e}}function Yp(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const dt=2,el=4,bo=8,jn=16,Hn=32,fr=64,wo=128,ct=1024,St=2048,Wn=4096,Lt=8192,Ln=16384,tl=32768,Ar=65536,_c=1<<17,Qp=1<<18,zr=1<<19,ed=1<<20,qt=256,zs=512,Us=32768,pa=1<<21,nl=1<<22,Tr=1<<23,bn=Symbol("$state"),rl=Symbol("legacy props"),Jp=Symbol(""),Yr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Xp=1,il=3,pi=8;function td(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Zp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function em(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tm(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nm(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rm(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function im(){throw new Error("https://svelte.dev/e/hydration_failed")}function sm(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function om(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function am(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function lm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function cm(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const yo=1,Eo=2,nd=4,um=8,dm=16,hm=1,fm=2,rd=4,pm=8,mm=16,vm=1,gm=2,id="[",Co="[!",sl="]",si={},nt=Symbol(),_m="http://www.w3.org/1999/xhtml",bm="http://www.w3.org/2000/svg",wm="@attach";function Io(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function ym(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Em(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let H=!1;function Rt(t){H=t}let ue;function it(t){if(t===null)throw Io(),si;return ue=t}function Pr(){return it(En(ue))}function f(t){if(H){if(En(ue)!==null)throw Io(),si;ue=t}}function vn(t=1){if(H){for(var e=t,n=ue;e--;)n=En(n);ue=n}}function qs(t=!0){for(var e=0,n=ue;;){if(n.nodeType===pi){var r=n.data;if(r===sl){if(e===0)return n;e-=1}else(r===id||r===Co)&&(e+=1)}var i=En(n);t&&n.remove(),n=i}}function sd(t){if(!t||t.nodeType!==pi)throw Io(),si;return t.data}function od(t){return t===this.v}function ad(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ld(t){return!ad(t,this.v)}let mi=!1,Cm=!1;function Im(){mi=!0}let De=null;function oi(t){De=t}function Me(t,e=!1,n){De={p:De,i:!1,c:null,e:null,s:t,x:null,l:mi&&!e?{s:null,u:null,$:[]}:null}}function $e(t){var e=De,n=e.e;if(n!==null){e.e=null;for(var r of n)Sd(r)}return t!==void 0&&(e.x=t),e.i=!0,De=e.p,t??{}}function cs(){return!mi||De!==null&&De.l===null}let Er=[];function cd(){var t=Er;Er=[],Fs(t)}function pr(t){if(Er.length===0&&!Di){var e=Er;queueMicrotask(()=>{e===Er&&cd()})}Er.push(t)}function Tm(){for(;Er.length>0;)cd()}function ud(t){var e=X;if(e===null)return ce.f|=Tr,t;if((e.f&tl)===0){if((e.f&wo)===0)throw t;e.b.error(t)}else ai(t,e)}function ai(t,e){for(;e!==null;){if((e.f&wo)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const Ss=new Set;let Ie=null,Oi=null,Jt=null,_n=[],To=null,ma=!1,Di=!1;class nn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#r=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){_n=[],Oi=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#i(r,n);this.is_fork||this.#c(),this.#r>0||this.is_fork?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(Oi=this,Ie=null,bc(n.render_effects),bc(n.effects),Oi=null,this.#l?.resolve()),Jt=null}#i(e,n){e.f^=ct;for(var r=e.first;r!==null;){var i=r.f,s=(i&(Hn|fr))!==0,o=s&&(i&ct)!==0,a=o||(i&Lt)!==0||this.skipped_effects.has(r);if((r.f&wo)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){s?r.f^=ct:(i&el)!==0?n.effects.push(r):fs(r)&&((r.f&jn)!==0&&n.block_effects.push(r),Qi(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#s(e){for(const n of e)((n.f&St)!==0?this.#o:this.#a).push(n),ut(n,ct)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),Jt?.set(e,e.v)}activate(){Ie=this}deactivate(){Ie=null,Jt=null}flush(){if(this.activate(),_n.length>0){if(dd(),Ie!==null&&Ie!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#r===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(Ss.size>1){this.previous.clear();var e=Jt,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ss){if(i===this){n=!1;continue}const s=[];for(const[a,l]of this.current){if(i.current.has(a))if(n&&l!==i.current.get(a))i.current.set(a,l);else continue;s.push(a)}if(s.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of s)hd(c,o,a,l);if(_n.length>0){Ie=i,i.apply();for(const c of _n)i.#i(c,r);_n=[],i.deactivate()}}}Ie=null,Jt=e}this.committed=!0,Ss.delete(this)}increment(e){this.#n+=1,e&&(this.#r+=1)}decrement(e){this.#n-=1,e&&(this.#r-=1),this.revive()}revive(){for(const e of this.#o)ut(e,St),Rr(e);for(const e of this.#a)ut(e,Wn),Rr(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=Zu()).promise}static ensure(){if(Ie===null){const e=Ie=new nn;Ss.add(Ie),Di||nn.enqueue(()=>{Ie===e&&e.flush()})}return Ie}static enqueue(e){pr(e)}apply(){}}function Pt(t){var e=Di;Di=!0;try{for(var n;;){if(Tm(),_n.length===0&&(Ie?.flush(),_n.length===0))return To=null,n;dd()}}finally{Di=e}}function dd(){var t=Zr;ma=!0;try{var e=0;for(Ic(!0);_n.length>0;){var n=nn.ensure();if(e++>1e3){var r,i;Sm()}n.process(_n),rr.clear()}}finally{ma=!1,Ic(t),To=null}}function Sm(){try{rm()}catch(t){ai(t,To)}}let xn=null;function bc(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Ln|Lt))===0&&fs(r)&&(xn=new Set,Qi(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Ad(r):r.fn=null),xn?.size>0)){rr.clear();for(const i of xn){if((i.f&(Ln|Lt))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)xn.has(o)&&(xn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Ln|Lt))===0&&Qi(l)}}xn.clear()}}xn=null}}function hd(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const i of t.reactions){const s=i.f;(s&dt)!==0?hd(i,e,n,r):(s&(nl|jn))!==0&&(s&St)===0&&fd(i,e,r)&&(ut(i,St),Rr(i))}}function fd(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const i of t.deps){if(e.includes(i))return!0;if((i.f&dt)!==0&&fd(i,e,n))return n.set(i,!0),!0}return n.set(t,!1),!1}function Rr(t){for(var e=To=t;e.parent!==null;){e=e.parent;var n=e.f;if(ma&&e===X&&(n&jn)!==0)return;if((n&(fr|Hn))!==0){if((n&ct)===0)return;e.f^=ct}}_n.push(e)}function km(t){let e=0,n=cr(0),r;return()=>{zm()&&(g(n),ko(()=>(e===0&&(r=wn(()=>t(()=>Mi(n)))),e+=1,()=>{pr(()=>{e-=1,e===0&&(r?.(),r=void 0,Mi(n))})})))}}var xm=Ar|zr|wo;function Am(t,e,n){new Pm(t,e,n)}class Pm{parent;#t=!1;#e;#n=H?ue:null;#r;#l;#o;#a=null;#i=null;#s=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=km(()=>(this.#h=cr(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#r=n,this.#l=r,this.parent=X.b,this.#t=!!this.#r.pending,this.#o=vi(()=>{if(X.b=this,H){const s=this.#n;Pr(),s.nodeType===pi&&s.data===Co?this.#y():this.#w()}else{var i=this.#g();try{this.#a=yt(()=>r(i))}catch(s){this.error(s)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},xm),H&&(this.#e=ue)}#w(){try{this.#a=yt(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#r.pending;e&&(this.#i=yt(()=>e(this.#e)),nn.enqueue(()=>{var n=this.#g();this.#a=this.#m(()=>(nn.ensure(),yt(()=>this.#l(n)))),this.#d>0?this.#v():(Xr(this.#i,()=>{this.#i=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=jt(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#r.pending}#m(e){var n=X,r=ce,i=De;Ht(this.#o),Et(this.#o),oi(this.#o.ctx);try{return e()}catch(s){return ud(s),null}finally{Ht(n),Et(r),oi(i)}}#v(){const e=this.#r.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Nd(this.#a,this.#c)),this.#i===null&&(this.#i=yt(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#i&&Xr(this.#i,()=>{this.#i=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&li(this.#h,this.#f)}get_effect_pending(){return this.#b(),g(this.#h)}error(e){var n=this.#r.onerror;let r=this.#r.failed;if(this.#p||!n&&!r)throw e;this.#a&&(Ye(this.#a),this.#a=null),this.#i&&(Ye(this.#i),this.#i=null),this.#s&&(Ye(this.#s),this.#s=null),H&&(it(this.#n),vn(),it(qs()));var i=!1,s=!1;const o=()=>{if(i){Em();return}i=!0,s&&cm(),nn.ensure(),this.#f=0,this.#s!==null&&Xr(this.#s,()=>{this.#s=null}),this.#t=this.has_pending_snippet(),this.#a=this.#m(()=>(this.#p=!1,yt(()=>this.#l(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=ce;try{Et(null),s=!0,n?.(e,o),s=!1}catch(l){ai(l,this.#o&&this.#o.parent)}finally{Et(a)}r&&pr(()=>{this.#s=this.#m(()=>{nn.ensure(),this.#p=!0;try{return yt(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return ai(l,this.#o.parent),null}finally{this.#p=!1}})})}}function pd(t,e,n,r){const i=cs()?us:ol;if(n.length===0&&t.length===0){r(e.map(i));return}var s=Ie,o=X,a=Rm();function l(){Promise.all(n.map(c=>Nm(c))).then(c=>{a();try{r([...e.map(i),...c])}catch(d){(o.f&Ln)===0&&ai(d,o)}s?.deactivate(),js()}).catch(c=>{ai(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{s?.deactivate(),js()}}):l()}function Rm(){var t=X,e=ce,n=De,r=Ie;return function(s=!0){Ht(t),Et(e),oi(n),s&&r?.activate()}}function js(){Ht(null),Et(null),oi(null)}function us(t){var e=dt|St,n=ce!==null&&(ce.f&dt)!==0?ce:null;return X===null||n!==null&&(n.f&qt)!==0?e|=qt:X.f|=zr,{ctx:De,deps:null,effects:null,equals:od,f:e,fn:t,reactions:null,rv:0,v:nt,wv:0,parent:n??X,ac:null}}function Nm(t,e){let n=X;n===null&&Zp();var r=n.b,i=void 0,s=cr(nt),o=!ce,a=new Map;return Hm(()=>{var l=Zu();i=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===Ie&&c.committed&&c.deactivate(),js()})}catch(u){l.reject(u),js()}var c=Ie;if(o){var d=!r.is_pending();r.update_pending_count(1),c.increment(d),a.get(c)?.reject(Yr),a.delete(c),a.set(c,l)}const h=(u,m=void 0)=>{if(c.activate(),m)m!==Yr&&(s.f|=Tr,li(s,m));else{(s.f&Tr)!==0&&(s.f^=Tr),li(s,u);for(const[v,b]of a){if(a.delete(v),v===c)break;b.reject(Yr)}}o&&(r.update_pending_count(-1),c.decrement(d))};l.promise.then(h,u=>h(null,u||"unknown"))}),ds(()=>{for(const l of a.values())l.reject(Yr)}),new Promise(l=>{function c(d){function h(){d===i?l(s):c(i)}d.then(h,h)}c(i)})}function va(t){const e=us(t);return Ld(e),e}function ol(t){const e=us(t);return e.equals=ld,e}function md(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)Ye(e[n])}}function Lm(t){for(var e=t.parent;e!==null;){if((e.f&dt)===0)return e;e=e.parent}return null}function al(t){var e,n=X;Ht(Lm(t));try{t.f&=~Us,md(t),e=$d(t)}finally{Ht(n)}return e}function vd(t){var e=al(t);if(t.equals(e)||(t.v=e,t.wv=Dd()),!Ur)if(Jt!==null)Jt.set(t,t.v);else{var n=(Zn||(t.f&qt)!==0)&&t.deps!==null?Wn:ct;ut(t,n)}}let ga=new Set;const rr=new Map;let gd=!1;function cr(t,e){var n={f:0,v:t,reactions:null,equals:od,rv:0,wv:0};return n}function le(t,e){const n=cr(t);return Ld(n),n}function ll(t,e=!1,n=!0){const r=cr(t);return e||(r.equals=ld),mi&&n&&De!==null&&De.l!==null&&(De.l.s??=[]).push(r),r}function A(t,e,n=!1){ce!==null&&(!Xt||(ce.f&_c)!==0)&&cs()&&(ce.f&(dt|jn|nl|_c))!==0&&!On?.includes(t)&&lm();let r=n?Ut(e):e;return li(t,r)}function li(t,e){if(!t.equals(e)){var n=t.v;Ur?rr.set(t,e):rr.set(t,n),t.v=e;var r=nn.ensure();r.capture(t,n),(t.f&dt)!==0&&((t.f&St)!==0&&al(t),ut(t,(t.f&qt)===0?ct:Wn)),t.wv=Dd(),_d(t,St),cs()&&X!==null&&(X.f&ct)!==0&&(X.f&(Hn|fr))===0&&(Ft===null?Bm([t]):Ft.push(t)),!r.is_fork&&ga.size>0&&!gd&&Om()}return e}function Om(){gd=!1;const t=Array.from(ga);for(const e of t)(e.f&ct)!==0&&ut(e,Wn),fs(e)&&Qi(e);ga.clear()}function wc(t,e=1){var n=g(t),r=e===1?n++:n--;return A(t,n),r}function Mi(t){A(t,t.v+1)}function _d(t,e){var n=t.reactions;if(n!==null)for(var r=cs(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f;if(!(!r&&o===X)){var l=(a&St)===0;l&&ut(o,e),(a&dt)!==0?(a&Us)===0&&(o.f|=Us,_d(o,Wn)):l&&((a&jn)!==0&&xn!==null&&xn.add(o),Rr(o))}}}function Ut(t){if(typeof t!="object"||t===null||bn in t)return t;const e=Za(t);if(e!==Bp&&e!==Gp)return t;var n=new Map,r=Ja(t),i=le(0),s=Sr,o=a=>{if(Sr===s)return a();var l=ce,c=Sr;Et(null),Sc(s);var d=a();return Et(l),Sc(c),d};return r&&n.set("length",le(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&om();var d=n.get(l);return d===void 0?d=o(()=>{var h=le(c.value);return n.set(l,h),h}):A(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>le(nt));n.set(l,d),Mi(i)}}else A(c,nt),Mi(i);return!0},get(a,l,c){if(l===bn)return t;var d=n.get(l),h=l in a;if(d===void 0&&(!h||Nn(a,l)?.writable)&&(d=o(()=>{var m=Ut(h?a[l]:nt),v=le(m);return v}),n.set(l,d)),d!==void 0){var u=g(d);return u===nt?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=g(d))}else if(c===void 0){var h=n.get(l),u=h?.v;if(h!==void 0&&u!==nt)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===bn)return!0;var c=n.get(l),d=c!==void 0&&c.v!==nt||Reflect.has(a,l);if(c!==void 0||X!==null&&(!d||Nn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=d?Ut(a[l]):nt,m=le(u);return m}),n.set(l,c));var h=g(c);if(h===nt)return!1}return d},set(a,l,c,d){var h=n.get(l),u=l in a;if(r&&l==="length")for(var m=c;m<h.v;m+=1){var v=n.get(m+"");v!==void 0?A(v,nt):m in a&&(v=o(()=>le(nt)),n.set(m+"",v))}if(h===void 0)(!u||Nn(a,l)?.writable)&&(h=o(()=>le(void 0)),A(h,Ut(c)),n.set(l,h));else{u=h.v!==nt;var b=o(()=>Ut(c));A(h,b)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(d,c),!u){if(r&&typeof l=="string"){var k=n.get("length"),S=Number(l);Number.isInteger(S)&&S>=k.v&&A(k,S+1)}Mi(i)}return!0},ownKeys(a){g(i);var l=Reflect.ownKeys(a).filter(h=>{var u=n.get(h);return u===void 0||u.v!==nt});for(var[c,d]of n)d.v!==nt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){am()}})}function yc(t){try{if(t!==null&&typeof t=="object"&&bn in t)return t[bn]}catch{}return t}function Dm(t,e){return Object.is(yc(t),yc(e))}var Ec,bd,wd,yd;function _a(){if(Ec===void 0){Ec=window,bd=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;wd=Nn(e,"firstChild").get,yd=Nn(e,"nextSibling").get,gc(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),gc(n)&&(n.__t=void 0)}}function jt(t=""){return document.createTextNode(t)}function ln(t){return wd.call(t)}function En(t){return yd.call(t)}function p(t,e){if(!H)return ln(t);var n=ln(ue);if(n===null)n=ue.appendChild(jt());else if(e&&n.nodeType!==il){var r=jt();return n?.before(r),it(r),r}return it(n),n}function ee(t,e=!1){if(!H){var n=ln(t);return n instanceof Comment&&n.data===""?En(n):n}if(e&&ue?.nodeType!==il){var r=jt();return ue?.before(r),it(r),r}return ue}function _(t,e=1,n=!1){let r=H?ue:t;for(var i;e--;)i=r,r=En(r);if(!H)return r;if(n&&r?.nodeType!==il){var s=jt();return r===null?i?.after(s):r.before(s),it(s),s}return it(r),r}function cl(t){t.textContent=""}function Ed(){return!1}function Mm(t,e){if(e){const n=document.body;t.autofocus=!0,pr(()=>{document.activeElement===n&&t.focus()})}}function $m(t){H&&ln(t)!==null&&cl(t)}let Cc=!1;function Cd(){Cc||(Cc=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function So(t){var e=ce,n=X;Et(null),Ht(null);try{return t()}finally{Et(e),Ht(n)}}function Id(t,e,n,r=n){t.addEventListener(e,()=>So(n));const i=t.__on_r;i?t.__on_r=()=>{i(),r(!0)}:t.__on_r=()=>r(!0),Cd()}function Td(t){X===null&&ce===null&&nm(),ce!==null&&(ce.f&qt)!==0&&X===null&&tm(),Ur&&em()}function Fm(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function cn(t,e,n,r=!0){var i=X;i!==null&&(i.f&Lt)!==0&&(t|=Lt);var s={ctx:De,deps:null,nodes_start:null,nodes_end:null,f:t|St,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Qi(s),s.f|=tl}catch(l){throw Ye(s),l}else e!==null&&Rr(s);if(r){var o=s;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&zr)===0&&(o=o.first,(t&jn)!==0&&(t&Ar)!==0&&o!==null&&(o.f|=Ar)),o!==null&&(o.parent=i,i!==null&&Fm(o,i),ce!==null&&(ce.f&dt)!==0&&(t&fr)===0)){var a=ce;(a.effects??=[]).push(o)}}return s}function zm(){return ce!==null&&!Xt}function ds(t){const e=cn(bo,null,!1);return ut(e,ct),e.teardown=t,e}function Hs(t){Td();var e=X.f,n=!ce&&(e&Hn)!==0&&(e&tl)===0;if(n){var r=De;(r.e??=[]).push(t)}else return Sd(t)}function Sd(t){return cn(el|ed,t,!1)}function Um(t){return Td(),cn(bo|ed,t,!0)}function qm(t){nn.ensure();const e=cn(fr|zr,t,!0);return()=>{Ye(e)}}function jm(t){nn.ensure();const e=cn(fr|zr,t,!0);return(n={})=>new Promise(r=>{n.outro?Xr(e,()=>{Ye(e),r(void 0)}):(Ye(e),r(void 0))})}function hs(t){return cn(el,t,!1)}function Hm(t){return cn(nl|zr,t,!0)}function ko(t,e=0){return cn(bo|e,t,!0)}function G(t,e=[],n=[],r=[]){pd(r,e,n,i=>{cn(bo,()=>t(...i.map(g)),!0)})}function vi(t,e=0){var n=cn(jn|e,t,!0);return n}function yt(t,e=!0){return cn(Hn|zr,t,!0,e)}function kd(t){var e=t.teardown;if(e!==null){const n=Ur,r=ce;Tc(!0),Et(null);try{e.call(null)}finally{Tc(n),Et(r)}}}function xd(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const i=n.ac;i!==null&&So(()=>{i.abort(Yr)});var r=n.next;(n.f&fr)!==0?n.parent=null:Ye(n,e),n=r}}function Wm(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&Hn)===0&&Ye(e),e=n}}function Ye(t,e=!0){var n=!1;(e||(t.f&Qp)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Vm(t.nodes_start,t.nodes_end),n=!0),xd(t,e&&!n),Ws(t,0),ut(t,Ln);var r=t.transitions;if(r!==null)for(const s of r)s.stop();kd(t);var i=t.parent;i!==null&&i.first!==null&&Ad(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Vm(t,e){for(;t!==null;){var n=t===e?null:En(t);t.remove(),t=n}}function Ad(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Xr(t,e,n=!0){var r=[];ul(t,r,!0),Pd(r,()=>{n&&Ye(t),e&&e()})}function Pd(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var i of t)i.out(r)}else e()}function ul(t,e,n){if((t.f&Lt)===0){if(t.f^=Lt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var i=r.next,s=(r.f&Ar)!==0||(r.f&Hn)!==0&&(t.f&jn)!==0;ul(r,e,s?n:!1),r=i}}}function dl(t){Rd(t,!0)}function Rd(t,e){if((t.f&Lt)!==0){t.f^=Lt,(t.f&ct)===0&&(ut(t,St),Rr(t));for(var n=t.first;n!==null;){var r=n.next,i=(n.f&Ar)!==0||(n.f&Hn)!==0;Rd(n,i?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}function Nd(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var i=n===r?null:En(n);e.append(n),n=i}}let Zr=!1;function Ic(t){Zr=t}let Ur=!1;function Tc(t){Ur=t}let ce=null,Xt=!1;function Et(t){ce=t}let X=null;function Ht(t){X=t}let On=null;function Ld(t){ce!==null&&(On===null?On=[t]:On.push(t))}let mt=null,At=0,Ft=null;function Bm(t){Ft=t}let Od=1,Yi=0,Sr=Yi;function Sc(t){Sr=t}let Zn=!1;function Dd(){return++Od}function fs(t){var e=t.f;if((e&St)!==0)return!0;if((e&Wn)!==0){var n=t.deps,r=(e&qt)!==0;if(e&dt&&(t.f&=~Us),n!==null){var i,s,o=(e&zs)!==0,a=r&&X!==null&&!Zn,l=n.length;if((o||a)&&(X===null||(X.f&Ln)===0)){var c=t,d=c.parent;for(i=0;i<l;i++)s=n[i],(o||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);o&&(c.f^=zs),a&&d!==null&&(d.f&qt)===0&&(c.f^=qt)}for(i=0;i<l;i++)if(s=n[i],fs(s)&&vd(s),s.wv>t.wv)return!0}(!r||X!==null&&!Zn)&&ut(t,ct)}return!1}function Md(t,e,n=!0){var r=t.reactions;if(r!==null&&!On?.includes(t))for(var i=0;i<r.length;i++){var s=r[i];(s.f&dt)!==0?Md(s,e,!1):e===s&&(n?ut(s,St):(s.f&ct)!==0&&ut(s,Wn),Rr(s))}}function $d(t){var e=mt,n=At,r=Ft,i=ce,s=Zn,o=On,a=De,l=Xt,c=Sr,d=t.f;mt=null,At=0,Ft=null,Zn=(d&qt)!==0&&(Xt||!Zr||ce===null),ce=(d&(Hn|fr))===0?t:null,On=null,oi(t.ctx),Xt=!1,Sr=++Yi,t.ac!==null&&(So(()=>{t.ac.abort(Yr)}),t.ac=null);try{t.f|=pa;var h=t.fn,u=h(),m=t.deps;if(mt!==null){var v;if(Ws(t,At),m!==null&&At>0)for(m.length=At+mt.length,v=0;v<mt.length;v++)m[At+v]=mt[v];else t.deps=m=mt;if(!Zn||(d&dt)!==0&&t.reactions!==null)for(v=At;v<m.length;v++)(m[v].reactions??=[]).push(t)}else m!==null&&At<m.length&&(Ws(t,At),m.length=At);if(cs()&&Ft!==null&&!Xt&&m!==null&&(t.f&(dt|Wn|St))===0)for(v=0;v<Ft.length;v++)Md(Ft[v],t);return i!==null&&i!==t&&(Yi++,Ft!==null&&(r===null?r=Ft:r.push(...Ft))),(t.f&Tr)!==0&&(t.f^=Tr),u}catch(b){return ud(b)}finally{t.f^=pa,mt=e,At=n,Ft=r,ce=i,Zn=s,On=o,oi(a),Xt=l,Sr=c}}function Gm(t,e){let n=e.reactions;if(n!==null){var r=Vp.call(n,t);if(r!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(e.f&dt)!==0&&(mt===null||!mt.includes(e))&&(ut(e,Wn),(e.f&(qt|zs))===0&&(e.f^=zs),md(e),Ws(e,0))}function Ws(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Gm(t,n[r])}function Qi(t){var e=t.f;if((e&Ln)===0){ut(t,ct);var n=X,r=Zr;X=t,Zr=!0;try{(e&jn)!==0?Wm(t):xd(t),kd(t);var i=$d(t);t.teardown=typeof i=="function"?i:null,t.wv=Od;var s;Ju&&Cm&&(t.f&St)!==0&&t.deps}finally{Zr=r,X=n}}}async function Km(){await Promise.resolve(),Pt()}function g(t){var e=t.f,n=(e&dt)!==0;if(ce!==null&&!Xt){var r=X!==null&&(X.f&Ln)!==0;if(!r&&!On?.includes(t)){var i=ce.deps;if((ce.f&pa)!==0)t.rv<Yi&&(t.rv=Yi,mt===null&&i!==null&&i[At]===t?At++:mt===null?mt=[t]:(!Zn||!mt.includes(t))&&mt.push(t));else{(ce.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[ce]:s.includes(ce)||s.push(ce)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&qt)===0&&(o.f^=qt)}if(Ur){if(rr.has(t))return rr.get(t);if(n){o=t;var l=o.v;return((o.f&ct)===0&&o.reactions!==null||Fd(o))&&(l=al(o)),rr.set(o,l),l}}else if(n){if(o=t,Jt?.has(o))return Jt.get(o);fs(o)&&vd(o)}if(Jt?.has(t))return Jt.get(t);if((t.f&Tr)!==0)throw t.v;return t.v}function Fd(t){if(t.v===nt)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(rr.has(e)||(e.f&dt)!==0&&Fd(e))return!0;return!1}function wn(t){var e=Xt;try{return Xt=!0,t()}finally{Xt=e}}const Ym=-7169;function ut(t,e){t.f=t.f&Ym|e}function Kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(bn in t)ba(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&bn in n&&ba(n)}}}function ba(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ba(t[r],e)}catch{}const n=Za(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Xu(n);for(let i in r){const s=r[i].get;if(s)try{s.call(t)}catch{}}}}}function Qm(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Jm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Xm(t){return Jm.includes(t)}const Zm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ev(t){return t=t.toLowerCase(),Zm[t]??t}const tv=["touchstart","touchmove"];function nv(t){return tv.includes(t)}const rv=["textarea","script","style","title"];function iv(t){return rv.includes(t)}const zd=new Set,wa=new Set;function Ud(t,e,n,r={}){function i(s){if(r.capture||Pi.call(e,s),!s.cancelBubble)return So(()=>n?.call(this,s))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?pr(()=>{e.addEventListener(t,i,r)}):e.addEventListener(t,i,r),i}function Vs(t,e,n,r,i){var s={capture:r,passive:i},o=Ud(t,e,n,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ds(()=>{e.removeEventListener(t,o,s)})}function st(t){for(var e=0;e<t.length;e++)zd.add(t[e]);for(var n of wa)n(t)}let kc=null;function Pi(t){var e=this,n=e.ownerDocument,r=t.type,i=t.composedPath?.()||[],s=i[0]||t.target;kc=t;var o=0,a=kc===t&&t.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||t.target,s!==e){Ki(t,"currentTarget",{configurable:!0,get(){return s||n}});var d=ce,h=X;Et(null),Ht(null);try{for(var u,m=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var b=s["__"+r];b!=null&&(!s.disabled||t.target===s)&&b.call(s,t)}catch(E){u?m.push(E):u=E}if(t.cancelBubble||v===e||v===null)break;s=v}if(u){for(let E of m)queueMicrotask(()=>{throw E});throw u}}finally{t.__root=e,delete t.currentTarget,Et(d),Ht(h)}}}function qd(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Dn(t,e){var n=X;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function O(t,e){var n=(e&vm)!==0,r=(e&gm)!==0,i,s=!t.startsWith("<!>");return()=>{if(H)return Dn(ue,null),ue;i===void 0&&(i=qd(s?t:"<!>"+t),n||(i=ln(i)));var o=r||bd?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=ln(o),l=o.lastChild;Dn(a,l)}else Dn(o,o);return o}}function sv(t,e,n="svg"){var r=!t.startsWith("<!>"),i=`<${n}>${r?t:"<!>"+t}</${n}>`,s;return()=>{if(H)return Dn(ue,null),ue;if(!s){var o=qd(i),a=ln(o);s=ln(a)}var l=s.cloneNode(!0);return Dn(l,l),l}}function ov(t,e){return sv(t,e,"svg")}function me(){if(H)return Dn(ue,null),ue;var t=document.createDocumentFragment(),e=document.createComment(""),n=jt();return t.append(e,n),Dn(e,n),t}function y(t,e){if(H){X.nodes_end=ue,Pr();return}t!==null&&t.before(e)}function C(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function hl(t,e){return jd(t,e)}function av(t,e){_a(),e.intro=e.intro??!1;const n=e.target,r=H,i=ue;try{for(var s=ln(n);s&&(s.nodeType!==pi||s.data!==id);)s=En(s);if(!s)throw si;Rt(!0),it(s);const o=jd(t,{...e,anchor:s});return Rt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==si&&console.warn("Failed to hydrate: ",o),e.recover===!1&&im(),_a(),cl(n),Rt(!1),hl(t,e)}finally{Rt(r),it(i)}}const Vr=new Map;function jd(t,{target:e,anchor:n,props:r={},events:i,context:s,intro:o=!0}){_a();var a=new Set,l=h=>{for(var u=0;u<h.length;u++){var m=h[u];if(!a.has(m)){a.add(m);var v=nv(m);e.addEventListener(m,Pi,{passive:v});var b=Vr.get(m);b===void 0?(document.addEventListener(m,Pi,{passive:v}),Vr.set(m,1)):Vr.set(m,b+1)}}};l(Xa(zd)),wa.add(l);var c=void 0,d=jm(()=>{var h=n??e.appendChild(jt());return Am(h,{pending:()=>{}},u=>{if(s){Me({});var m=De;m.c=s}if(i&&(r.$$events=i),H&&Dn(u,null),c=t(u,r)||{},H&&(X.nodes_end=ue,ue===null||ue.nodeType!==pi||ue.data!==sl))throw Io(),si;s&&$e()}),()=>{for(var u of a){e.removeEventListener(u,Pi);var m=Vr.get(u);--m===0?(document.removeEventListener(u,Pi),Vr.delete(u)):Vr.set(u,m)}wa.delete(l),h!==n&&h.parentNode?.removeChild(h)}});return ya.set(c,d),c}let ya=new WeakMap;function lv(t,e){const n=ya.get(t);return n?(ya.delete(t),n(e)):Promise.resolve()}class Hd{anchor;#t=new Map;#e=new Map;#n=new Map;#r=!0;constructor(e,n=!0){this.anchor=e,this.#r=n}#l=()=>{var e=Ie;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)dl(r);else{var i=this.#n.get(n);i&&(this.#e.set(n,i.effect),this.#n.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of this.#t){if(this.#t.delete(s),s===e)break;const a=this.#n.get(o);a&&(Ye(a.effect),this.#n.delete(o))}for(const[s,o]of this.#e){if(s===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(s)){var c=document.createDocumentFragment();Nd(o,c),c.append(jt()),this.#n.set(s,{effect:o,fragment:c})}else Ye(o);this.#e.delete(s)};this.#r||!r?Xr(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,i]of this.#n)n.includes(r)||(Ye(i.effect),this.#n.delete(r))};ensure(e,n){var r=Ie,i=Ed();if(n&&!this.#e.has(e)&&!this.#n.has(e))if(i){var s=document.createDocumentFragment(),o=jt();s.append(o),this.#n.set(e,{effect:yt(()=>n(o)),fragment:s})}else this.#e.set(e,yt(()=>n(this.anchor)));if(this.#t.set(r,e),i){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else H&&(this.anchor=ue),this.#l()}}function K(t,e,n=!1){H&&Pr();var r=new Hd(t),i=n?Ar:0;function s(o,a){if(H){const c=sd(t)===Co;if(o===c){var l=qs();it(l),r.anchor=l,Rt(!1),r.ensure(o,a),Rt(!0);return}}r.ensure(o,a)}vi(()=>{var o=!1;e((a,l=!0)=>{o=!0,s(l,a)}),o||s(!1,null)},i)}function er(t,e){return e}function cv(t,e,n){for(var r=t.items,i=[],s=e.length,o=0;o<s;o++)ul(e[o].e,i,!0);var a=s>0&&i.length===0&&n!==null;if(a){var l=n.parentNode;cl(l),l.append(n),r.clear(),gn(t,e[0].prev,e[s-1].next)}Pd(i,()=>{for(var c=0;c<s;c++){var d=e[c];a||(r.delete(d.k),gn(t,d.prev,d.next)),Ye(d.e,!a)}})}function Nt(t,e,n,r,i,s=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&nd)!==0;if(l){var c=t;o=H?it(ln(c)):c.appendChild(jt())}H&&Pr();var d=null,h=!1,u=new Map,m=ol(()=>{var k=n();return Ja(k)?k:k==null?[]:Xa(k)}),v,b;function E(){uv(b,v,a,u,o,i,e,r,n),s!==null&&(v.length===0?d?dl(d):d=yt(()=>s(o)):d!==null&&Xr(d,()=>{d=null}))}vi(()=>{b??=X,v=g(m);var k=v.length;if(h&&k===0)return;h=k===0;let S=!1;if(H){var R=sd(o)===Co;R!==(k===0)&&(o=qs(),it(o),Rt(!1),S=!0)}if(H){for(var N=null,P,T=0;T<k;T++){if(ue.nodeType===pi&&ue.data===sl){o=ue,S=!0,Rt(!1);break}var I=v[T],w=r(I,T);P=Ea(ue,a,N,null,I,w,T,i,e,n),a.items.set(w,P),N=P}k>0&&it(qs())}if(H)k===0&&s&&(d=yt(()=>s(o)));else if(Ed()){var L=new Set,M=Ie;for(T=0;T<k;T+=1){I=v[T],w=r(I,T);var F=a.items.get(w)??u.get(w);F?(e&(yo|Eo))!==0&&Wd(F,I,T,e):(P=Ea(null,a,null,null,I,w,T,i,e,n,!0),u.set(w,P)),L.add(w)}for(const[$,B]of a.items)L.has($)||M.skipped_effects.add(B.e);M.oncommit(E)}else E();S&&Rt(!0),g(m)}),H&&(o=ue)}function uv(t,e,n,r,i,s,o,a,l){var c=(o&um)!==0,d=(o&(yo|Eo))!==0,h=e.length,u=n.items,m=n.first,v=m,b,E=null,k,S=[],R=[],N,P,T,I;if(c)for(I=0;I<h;I+=1)N=e[I],P=a(N,I),T=u.get(P),T!==void 0&&(T.a?.measure(),(k??=new Set).add(T));for(I=0;I<h;I+=1){if(N=e[I],P=a(N,I),T=u.get(P),T===void 0){var w=r.get(P);if(w!==void 0){r.delete(P),u.set(P,w);var L=E?E.next:v;gn(n,E,w),gn(n,w,L),Wo(w,L,i),E=w}else{var M=v?v.e.nodes_start:i;E=Ea(M,n,E,E===null?n.first:E.next,N,P,I,s,o,l)}u.set(P,E),S=[],R=[],v=E.next;continue}if(d&&Wd(T,N,I,o),(T.e.f&Lt)!==0&&(dl(T.e),c&&(T.a?.unfix(),(k??=new Set).delete(T))),T!==v){if(b!==void 0&&b.has(T)){if(S.length<R.length){var F=R[0],$;E=F.prev;var B=S[0],ne=S[S.length-1];for($=0;$<S.length;$+=1)Wo(S[$],F,i);for($=0;$<R.length;$+=1)b.delete(R[$]);gn(n,B.prev,ne.next),gn(n,E,B),gn(n,ne,F),v=F,E=ne,I-=1,S=[],R=[]}else b.delete(T),Wo(T,v,i),gn(n,T.prev,T.next),gn(n,T,E===null?n.first:E.next),gn(n,E,T),E=T;continue}for(S=[],R=[];v!==null&&v.k!==P;)(v.e.f&Lt)===0&&(b??=new Set).add(v),R.push(v),v=v.next;if(v===null)continue;T=v}S.push(T),E=T,v=T.next}if(v!==null||b!==void 0){for(var q=b===void 0?[]:Xa(b);v!==null;)(v.e.f&Lt)===0&&q.push(v),v=v.next;var z=q.length;if(z>0){var Y=(o&nd)!==0&&h===0?i:null;if(c){for(I=0;I<z;I+=1)q[I].a?.measure();for(I=0;I<z;I+=1)q[I].a?.fix()}cv(n,q,Y)}}c&&pr(()=>{if(k!==void 0)for(T of k)T.a?.apply()}),t.first=n.first&&n.first.e,t.last=E&&E.e;for(var V of r.values())Ye(V.e);r.clear()}function Wd(t,e,n,r){(r&yo)!==0&&li(t.v,e),(r&Eo)!==0?li(t.i,n):t.i=n}function Ea(t,e,n,r,i,s,o,a,l,c,d){var h=(l&yo)!==0,u=(l&dm)===0,m=h?u?ll(i,!1,!1):cr(i):i,v=(l&Eo)===0?o:cr(o),b={i:v,v:m,k:s,a:null,e:null,prev:n,next:r};try{if(t===null){var E=document.createDocumentFragment();E.append(t=jt())}return b.e=yt(()=>a(t,m,v,c),H),b.e.prev=n&&n.e,b.e.next=r&&r.e,n===null?d||(e.first=b):(n.next=b,n.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Wo(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==null&&s!==r;){var o=En(s);i.before(s),s=o}}function gn(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ve(t,e,n,r,i){H&&Pr();var s=e.$$slots?.[n],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(t,o?()=>r:r)}function dv(t,e,n,r,i,s){let o=H;H&&Pr();var a=null;H&&ue.nodeType===Xp&&(a=ue,Pr());var l=H?ue:t,c=new Hd(l,!1);vi(()=>{const d=e()||null;var h=bm;if(d===null){c.ensure(null,null);return}return c.ensure(d,u=>{if(d){if(a=H?a:document.createElementNS(h,d),Dn(a,a),r){H&&iv(d)&&a.append(document.createComment(""));var m=H?ln(a):a.appendChild(jt());H&&(m===null?Rt(!1):it(m)),r(a,m)}X.nodes_end=a,u.before(a)}H&&it(u)}),()=>{}},Ar),ds(()=>{}),o&&(Rt(!0),it(l))}function Ue(t,e){hs(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,r.appendChild(i)}})}function hv(t,e){var n=void 0,r;vi(()=>{n!==(n=e())&&(r&&(Ye(r),r=null),n&&(r=yt(()=>{hs(()=>n(t))})))})}function Vd(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Vd(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function fv(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Vd(t))&&(r&&(r+=" "),r+=e);return r}function pv(t){return typeof t=="object"?fv(t):t??""}const xc=[...` 	
\r\f \v\uFEFF`];function mv(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||xc.includes(r[o-1]))&&(a===r.length||xc.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Ac(t,e=!1){var n=e?" !important;":";",r="";for(var i in t){var s=t[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Vo(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function vv(t,e){if(e){var n="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Vo)),i&&l.push(...Object.keys(i).map(Vo));var c=0,d=-1;const b=t.length;for(var h=0;h<b;h++){var u=t[h];if(a?u==="/"&&t[h-1]==="*"&&(a=!1):s?s===u&&(s=!1):u==="/"&&t[h+1]==="*"?a=!0:u==='"'||u==="'"?s=u:u==="("?o++:u===")"&&o--,!a&&s===!1&&o===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===b-1){if(d!==-1){var m=Vo(t.substring(c,d).trim());if(!l.includes(m)){u!==";"&&h++;var v=t.substring(c,h).trim();n+=" "+v+";"}}c=h+1,d=-1}}}}return r&&(n+=Ac(r)),i&&(n+=Ac(i,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Zt(t,e,n,r,i,s){var o=t.__className;if(H||o!==n||o===void 0){var a=mv(n,r,s);(!H||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&t.classList.toggle(l,c)}return s}function Bo(t,e={},n,r){for(var i in n){var s=n[i];e[i]!==s&&(n[i]==null?t.style.removeProperty(i):t.style.setProperty(i,s,r))}}function gv(t,e,n,r){var i=t.__style;if(H||i!==e){var s=vv(e,r);(!H||s!==t.getAttribute("style"))&&(s==null?t.removeAttribute("style"):t.style.cssText=s),t.__style=e}else r&&(Array.isArray(r)?(Bo(t,n?.[0],r[0]),Bo(t,n?.[1],r[1],"important")):Bo(t,n,r));return r}function Bs(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Ja(e))return ym();for(var r of t.options)r.selected=e.includes($i(r));return}for(r of t.options){var i=$i(r);if(Dm(i,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Bd(t){var e=new MutationObserver(()=>{Bs(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ds(()=>{e.disconnect()})}function Gd(t,e,n=e){var r=new WeakSet,i=!0;Id(t,"change",s=>{var o=s?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),$i);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&$i(l)}n(a),Ie!==null&&r.add(Ie)}),hs(()=>{var s=e();if(t===document.activeElement){var o=Oi??Ie;if(r.has(o))return}if(Bs(t,s,i),i&&s===void 0){var a=t.querySelector(":checked");a!==null&&(s=$i(a),n(s))}t.__value=s,i=!1}),Bd(t)}function $i(t){return"__value"in t?t.__value:t.value}const Ii=Symbol("class"),Ti=Symbol("style"),Kd=Symbol("is custom element"),Yd=Symbol("is html");function Gs(t){if(H){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;ze(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;ze(t,"checked",null),t.checked=i}}};t.__on_r=n,pr(n),Cd()}}function _v(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ze(t,e,n,r){var i=Qd(t);H&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="loading"&&(t[Jp]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Jd(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function bv(t,e,n,r,i=!1,s=!1){if(H&&i&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Gs(o)}var l=Qd(t),c=l[Kd],d=!l[Yd];let h=H&&c;h&&Rt(!1);var u=e||{},m=t.tagName==="OPTION";for(var v in e)v in n||(n[v]=null);n.class?n.class=pv(n.class):n[Ii]&&(n.class=null),n[Ti]&&(n.style??=null);var b=Jd(t);for(const I in n){let w=n[I];if(m&&I==="value"&&w==null){t.value=t.__value="",u[I]=w;continue}if(I==="class"){var E=t.namespaceURI==="http://www.w3.org/1999/xhtml";Zt(t,E,w,r,e?.[Ii],n[Ii]),u[I]=w,u[Ii]=n[Ii];continue}if(I==="style"){gv(t,w,e?.[Ti],n[Ti]),u[I]=w,u[Ti]=n[Ti];continue}var k=u[I];if(!(w===k&&!(w===void 0&&t.hasAttribute(I)))){u[I]=w;var S=I[0]+I[1];if(S!=="$$")if(S==="on"){const L={},M="$$"+I;let F=I.slice(2);var R=Xm(F);if(Qm(F)&&(F=F.slice(0,-7),L.capture=!0),!R&&k){if(w!=null)continue;t.removeEventListener(F,u[M],L),u[M]=null}if(w!=null)if(R)t[`__${F}`]=w,st([F]);else{let $=function(B){u[I].call(this,B)};var T=$;u[M]=Ud(F,t,$,L)}else R&&(t[`__${F}`]=void 0)}else if(I==="style")ze(t,I,w);else if(I==="autofocus")Mm(t,!!w);else if(!c&&(I==="__value"||I==="value"&&w!=null))t.value=t.__value=w;else if(I==="selected"&&m)_v(t,w);else{var N=I;d||(N=ev(N));var P=N==="defaultValue"||N==="defaultChecked";if(w==null&&!c&&!P)if(l[I]=null,N==="value"||N==="checked"){let L=t;const M=e===void 0;if(N==="value"){let F=L.defaultValue;L.removeAttribute(N),L.defaultValue=F,L.value=L.__value=M?F:null}else{let F=L.defaultChecked;L.removeAttribute(N),L.defaultChecked=F,L.checked=M?F:!1}}else t.removeAttribute(I);else P||b.includes(N)&&(c||typeof w!="string")?(t[N]=w,N in l&&(l[N]=nt)):typeof w!="function"&&ze(t,N,w)}}}return h&&Rt(!0),u}function Pc(t,e,n=[],r=[],i=[],s,o=!1,a=!1){pd(i,n,r,l=>{var c=void 0,d={},h=t.nodeName==="SELECT",u=!1;if(vi(()=>{var v=e(...l.map(g)),b=bv(t,c,v,s,o,a);u&&h&&"value"in v&&Bs(t,v.value);for(let k of Object.getOwnPropertySymbols(d))v[k]||Ye(d[k]);for(let k of Object.getOwnPropertySymbols(v)){var E=v[k];k.description===wm&&(!c||E!==c[k])&&(d[k]&&Ye(d[k]),d[k]=yt(()=>hv(t,()=>E))),b[k]=E}c=b}),h){var m=t;hs(()=>{Bs(m,c.value,!0),Bd(m)})}u=!0})}function Qd(t){return t.__attributes??={[Kd]:t.nodeName.includes("-"),[Yd]:t.namespaceURI===_m}}var Rc=new Map;function Jd(t){var e=t.getAttribute("is")||t.nodeName,n=Rc.get(e);if(n)return n;Rc.set(e,n=[]);for(var r,i=t,s=Element.prototype;s!==i;){r=Xu(i);for(var o in r)r[o].set&&n.push(o);i=Za(i)}return n}function Ks(t,e,n=e){var r=new WeakSet;Id(t,"input",async i=>{var s=i?t.defaultValue:t.value;if(s=Go(t)?Ko(s):s,n(s),Ie!==null&&r.add(Ie),await Km(),s!==(s=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=s??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(H&&t.defaultValue!==t.value||wn(e)==null&&t.value)&&(n(Go(t)?Ko(t.value):t.value),Ie!==null&&r.add(Ie)),ko(()=>{var i=e();if(t===document.activeElement){var s=Oi??Ie;if(r.has(s))return}Go(t)&&i===Ko(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Go(t){var e=t.type;return e==="number"||e==="range"}function Ko(t){return t===""?null:+t}function Nc(t,e){return t===e||t?.[bn]===e}function Xd(t={},e,n,r){return hs(()=>{var i,s;return ko(()=>{i=s,s=[],wn(()=>{t!==n(...s)&&(e(t,...s),i&&Nc(n(...i),t)&&e(null,...i))})}),()=>{pr(()=>{s&&Nc(n(...s),t)&&e(null,...s)})}}),t}function Dt(t=!1){const e=De,n=e.l.u;if(!n)return;let r=()=>Kr(e.s);if(t){let i=0,s={};const o=us(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>g(o)}n.b.length&&Um(()=>{Lc(e,r),Fs(n.b)}),Hs(()=>{const i=wn(()=>n.m.map(Kp));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Hs(()=>{Lc(e,r),Fs(n.a)})}function Lc(t,e){if(t.l.s)for(const n of t.l.s)g(n);e()}function fl(t,e,n){if(t==null)return e(void 0),n&&n(void 0),nr;const r=wn(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const Br=[];function wv(t,e){return{subscribe:xo(t,e).subscribe}}function xo(t,e=nr){let n=null;const r=new Set;function i(a){if(ad(t,a)&&(t=a,n)){const l=!Br.length;for(const c of r)c[1](),Br.push(c,t);if(l){for(let c=0;c<Br.length;c+=2)Br[c][0](Br[c+1]);Br.length=0}}}function s(a){i(a(t))}function o(a,l=nr){const c=[a,l];return r.add(c),r.size===1&&(n=e(i,s)||nr),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function yv(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return wv(n,(o,a)=>{let l=!1;const c=[];let d=0,h=nr;const u=()=>{if(d)return;h();const v=e(r?c[0]:c,o,a);s?o(v):h=typeof v=="function"?v:nr},m=i.map((v,b)=>fl(v,E=>{c[b]=E,d&=~(1<<b),l&&u()},()=>{d|=1<<b}));return l=!0,u(),function(){Fs(m),h(),l=!1}})}function Ev(t){let e;return fl(t,n=>e=n)(),e}let ks=!1,Ca=Symbol();function yn(t,e,n){const r=n[e]??={store:null,source:ll(void 0),unsubscribe:nr};if(r.store!==t&&!(Ca in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=nr;else{var i=!0;r.unsubscribe=fl(t,s=>{i?r.source.v=s:A(r.source,s)}),i=!1}return t&&Ca in n?Ev(t):g(r.source)}function qr(){const t={};function e(){ds(()=>{for(var n in t)t[n].unsubscribe();Ki(t,Ca,{enumerable:!1,value:!0})})}return[t,e]}function Cv(t){var e=ks;try{return ks=!1,[t(),ks]}finally{ks=e}}const Iv={get(t,e){if(!t.exclude.includes(e))return g(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=X;try{Ht(t.parent_effect),t.special[e]=zt({get[e](){return t.props[e]}},e,rd)}finally{Ht(r)}}return t.special[e](n),wc(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),wc(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function We(t,e){return new Proxy({props:t,exclude:e,special:{},version:cr(0),parent_effect:X},Iv)}const Tv={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Ci(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let i=t.props[r];Ci(i)&&(i=i());const s=Nn(i,e);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(Ci(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Nn(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===bn||e===rl)return!1;for(let n of t.props)if(Ci(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(Ci(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function et(...t){return new Proxy({props:t},Tv)}function zt(t,e,n,r){var i=!mi||(n&fm)!==0,s=(n&pm)!==0,o=(n&mm)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?wn(r):r),a),d;if(s){var h=bn in t||rl in t;d=Nn(t,e)?.set??(h&&e in t?R=>t[e]=R:void 0)}var u,m=!1;s?[u,m]=Cv(()=>t[e]):u=t[e],u===void 0&&r!==void 0&&(u=c(),d&&(i&&sm(),d(u)));var v;if(i?v=()=>{var R=t[e];return R===void 0?c():(l=!0,R)}:v=()=>{var R=t[e];return R!==void 0&&(a=void 0),R===void 0?a:R},i&&(n&rd)===0)return v;if(d){var b=t.$$legacy;return(function(R,N){return arguments.length>0?((!i||!N||b||m)&&d(N?v():R),R):v()})}var E=!1,k=((n&hm)!==0?us:ol)(()=>(E=!1,v()));s&&g(k);var S=X;return(function(R,N){if(arguments.length>0){const P=N?g(k):i&&s?Ut(R):R;return A(k,P),E=!0,a!==void 0&&(a=P),R}return Ur&&E||(S.f&Ln)!==0?k.v:g(k)})}function Sv(t){return new kv(t)}class kv{#t;#e;constructor(e){var n=new Map,r=(s,o)=>{var a=ll(o,!1,!1);return n.set(s,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(s,o){return g(n.get(o)??r(o,Reflect.get(s,o)))},has(s,o){return o===rl?!0:(g(n.get(o)??r(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return A(n.get(o)??r(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?av:hl)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Pt(),this.#t=i.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||Ki(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(i,s)},this.#e.$destroy=()=>{lv(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...i)=>n.call(this,...i);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(i=>i!==r)}}$destroy(){this.#e.$destroy()}}let Zd;typeof HTMLElement=="function"&&(Zd=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return s=>{const o=document.createElement("slot");i!=="default"&&(o.name=i),y(s,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=xv(this);for(const i of this.$$s)i in r&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),n.default=!0):n[i]=e(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=Rs(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Sv({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=qm(()=>{ko(()=>{this.$$r=!0;for(const i of $s(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const s=Rs(i,this.$$d[i],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,s)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const o=this.$$c.$on(i,s);this.$$l_u.set(s,o)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Rs(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return $s(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Rs(t,e,n,r){const i=n[t]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function xv(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function te(t,e,n,r,i,s){let o=class extends Zd{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return $s(e).map(a=>(e[a].attribute||a).toLowerCase())}};return $s(e).forEach(a=>{Ki(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Rs(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var d=Nn(c,a)?.get;d?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Ki(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}function ps(t){De===null&&td(),mi&&De.l!==null?Pv(De).m.push(t):Hs(()=>{const e=wn(t);if(typeof e=="function")return e})}function Av(t){De===null&&td(),ps(()=>()=>wn(t))}function Pv(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const Rv="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Rv);const Nv=()=>{};var Oc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+eh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(u=64)),r.push(n[d],n[h],n[u],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(th(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Ov;const u=s<<2|a>>4;if(r.push(u),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ov extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(t){const e=th(t);return pl.encodeByteArray(e,!0)},Ys=function(t){return nh(t).replace(/\./g,"")},Qs=function(t){try{return pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){return rh(void 0,t)}function rh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mv(n)||(t[n]=rh(t[n],e[n]));return t}function Mv(t){return t!=="__proto__"}/**
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
 */function $v(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fv=()=>$v().__FIREBASE_DEFAULTS__,zv=()=>{if(typeof process>"u"||typeof Oc>"u")return;const t=Oc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qs(t[1]);return e&&JSON.parse(e)},ml=()=>{try{return Nv()||Fv()||zv()||Uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ih=t=>ml()?.emulatorHosts?.[t],qv=t=>{const e=ih(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sh=()=>ml()?.config,oh=t=>ml()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _i(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ah(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function jv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),""].join(".")}const Fi={};function Hv(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fi))Fi[e]?t.emulator.push(e):t.prod.push(e);return t}function Wv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Dc=!1;function lh(t,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||Fi[t]===e||Fi[t]||Dc)return;Fi[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=Hv().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,m){u.setAttribute("width","24"),u.setAttribute("id",m),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Dc=!0,o()},u}function d(u,m){u.setAttribute("id",m),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Wv(r),m=n("text"),v=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),E=document.getElementById(b)||document.createElement("a"),k=n("preprendIcon"),S=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const R=u.element;a(R),d(E,b);const N=c();l(S,k),R.append(S,v,E,N),document.body.appendChild(R)}s?(v.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Vv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gv(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kv(){return eh.NODE_ADMIN===!0}function Yv(){try{return typeof indexedDB=="object"}catch{return!1}}function Qv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="FirebaseError";class mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jv,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Xv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mr(i,a,r)}}function Xv(t,e){return t.replace(Zv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ji(Qs(s[0])||""),n=Ji(Qs(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},eg=function(t){const e=uh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tg=function(t){const e=uh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ia(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mc(s)&&Mc(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):h<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function rg(t,e){const n=new ig(t,e);return n.subscribe.bind(n)}class ig{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yo),i.error===void 0&&(i.error=Yo),i.complete===void 0&&(i.complete=Yo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yo(){}function gl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Po=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class ag{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ao;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cg(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lg(t){return t===wr?void 0:t}function cg(t){return t.instantiationMode==="EAGER"}/**
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
 */class ug{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ag(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const dg={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},hg=Te.INFO,fg={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},pg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=hg,this._logHandler=pg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const mg=(t,e)=>e.some(n=>t instanceof n);let $c,Fc;function vg(){return $c||($c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gg(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dh=new WeakMap,Ta=new WeakMap,hh=new WeakMap,Qo=new WeakMap,bl=new WeakMap;function _g(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dh.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function bg(t){if(Ta.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ta.set(t,e)}let Sa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ta.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wg(t){Sa=t(Sa)}function yg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jo(this),e,...n);return hh.set(r,e.sort?e.sort():[e]),ir(r)}:gg().includes(t)?function(...e){return t.apply(Jo(this),e),ir(dh.get(this))}:function(...e){return ir(t.apply(Jo(this),e))}}function Eg(t){return typeof t=="function"?yg(t):(t instanceof IDBTransaction&&bg(t),mg(t,vg())?new Proxy(t,Sa):t)}function ir(t){if(t instanceof IDBRequest)return _g(t);if(Qo.has(t))return Qo.get(t);const e=Eg(t);return e!==t&&(Qo.set(t,e),bl.set(e,t)),e}const Jo=t=>bl.get(t);function Cg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ig=["get","getKey","getAll","getAllKeys","count"],Tg=["put","add","delete","clear"],Xo=new Map;function zc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xo.get(e))return Xo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Tg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ig.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xo.set(e,s),s}wg(t=>({...t,get:(e,n,r)=>zc(e,n)||t.get(e,n,r),has:(e,n)=>!!zc(e,n)||t.has(e,n)}));/**
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
 */class Sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kg(t){return t.getComponent()?.type==="VERSION"}const ka="@firebase/app",Uc="0.14.5";/**
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
 */const $n=new _l("@firebase/app"),xg="@firebase/app-compat",Ag="@firebase/analytics-compat",Pg="@firebase/analytics",Rg="@firebase/app-check-compat",Ng="@firebase/app-check",Lg="@firebase/auth",Og="@firebase/auth-compat",Dg="@firebase/database",Mg="@firebase/data-connect",$g="@firebase/database-compat",Fg="@firebase/functions",zg="@firebase/functions-compat",Ug="@firebase/installations",qg="@firebase/installations-compat",jg="@firebase/messaging",Hg="@firebase/messaging-compat",Wg="@firebase/performance",Vg="@firebase/performance-compat",Bg="@firebase/remote-config",Gg="@firebase/remote-config-compat",Kg="@firebase/storage",Yg="@firebase/storage-compat",Qg="@firebase/firestore",Jg="@firebase/ai",Xg="@firebase/firestore-compat",Zg="firebase",e_="12.5.0";/**
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
 */const xa="[DEFAULT]",t_={[ka]:"fire-core",[xg]:"fire-core-compat",[Pg]:"fire-analytics",[Ag]:"fire-analytics-compat",[Ng]:"fire-app-check",[Rg]:"fire-app-check-compat",[Lg]:"fire-auth",[Og]:"fire-auth-compat",[Dg]:"fire-rtdb",[Mg]:"fire-data-connect",[$g]:"fire-rtdb-compat",[Fg]:"fire-fn",[zg]:"fire-fn-compat",[Ug]:"fire-iid",[qg]:"fire-iid-compat",[jg]:"fire-fcm",[Hg]:"fire-fcm-compat",[Wg]:"fire-perf",[Vg]:"fire-perf-compat",[Bg]:"fire-rc",[Gg]:"fire-rc-compat",[Kg]:"fire-gcs",[Yg]:"fire-gcs-compat",[Qg]:"fire-fst",[Xg]:"fire-fst-compat",[Jg]:"fire-vertex","fire-js":"fire-js",[Zg]:"fire-js-all"};/**
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
 */const Xs=new Map,n_=new Map,Aa=new Map;function qc(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Aa.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,t);for(const n of Xs.values())qc(n,t);for(const n of n_.values())qc(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
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
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new ms("app","Firebase",r_);/**
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
 */class i_{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=e_;function fh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:xa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=sh()),!n)throw sr.create("no-options");const s=Xs.get(i);if(s){if(Nr(n,s.options)&&Nr(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new ug(i);for(const l of Aa.values())o.addComponent(l);const a=new i_(n,r,o);return Xs.set(i,a),a}function ph(t=xa){const e=Xs.get(t);if(!e&&t===xa&&sh())return fh();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){let r=t_[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(o.join(" "));return}ui(new Lr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const s_="firebase-heartbeat-database",o_=1,Xi="firebase-heartbeat-store";let Zo=null;function mh(){return Zo||(Zo=Cg(s_,o_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Zo}async function a_(t){try{const n=(await mh()).transaction(Xi),r=await n.objectStore(Xi).get(vh(t));return await n.done,r}catch(e){if(e instanceof mr)$n.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e?.message});$n.warn(n.message)}}}async function jc(t,e){try{const r=(await mh()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(e,vh(t)),await r.done}catch(n){if(n instanceof mr)$n.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n?.message});$n.warn(r.message)}}}function vh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const l_=1024,c_=30;class u_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>c_){const i=f_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){$n.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hc(),{heartbeatsToSend:n,unsentEntries:r}=d_(this._heartbeatsCache.heartbeats),i=Ys(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return $n.warn(e),""}}}function Hc(){return new Date().toISOString().substring(0,10)}function d_(t,e=l_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class h_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yv()?Qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wc(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}function f_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function p_(t){ui(new Lr("platform-logger",e=>new Sg(e),"PRIVATE")),ui(new Lr("heartbeat",e=>new u_(e),"PRIVATE")),or(ka,Uc,t),or(ka,Uc,"esm2020"),or("fire-js","")}p_("");var m_="firebase",v_="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(m_,v_,"app");function gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g_=gh,_h=new ms("auth","Firebase",gh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new _l("@firebase/auth");function __(t,...e){Zs.logLevel<=Te.WARN&&Zs.warn(`Auth (${bi}): ${t}`,...e)}function Ns(t,...e){Zs.logLevel<=Te.ERROR&&Zs.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,...e){throw yl(t,...e)}function Ot(t,...e){return yl(t,...e)}function bh(t,e,n){const r={...g_(),[e]:n};return new ms("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return bh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _h.create(t,...e)}function D(t,e,...n){if(!t)throw yl(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ns(e),new Error(e)}function zn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return typeof self<"u"&&self.location?.href||""}function wh(){return Vc()==="http:"||Vc()==="https:"}function Vc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wh()||Bv()||"connection"in navigator)?navigator.onLine:!0}function w_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=vl()||ch()}get(){return b_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C_=new vs(3e4,6e4);function In(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function un(t,e,n,r,i={}){return Eh(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return Vv()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&_i(t.emulatorConfig.host)&&(c.credentials="include"),yh.fetch()(await Ch(t,t.config.apiHost,n,a),c)})}async function Eh(t,e,n){t._canInitEmulator=!1;const r={...y_,...e};try{const i=new T_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ri(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ri(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ri(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bh(t,d,c);Fn(t,d)}}catch(i){if(i instanceof mr)throw i;Fn(t,"network-request-failed",{message:String(i)})}}async function Ro(t,e,n,r,i={}){const s=await un(t,e,n,r,i);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ch(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?El(t.config,i):`${t.config.apiScheme}://${i}`;return E_.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function I_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class T_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),C_.get())})}}function Ri(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return t!==void 0&&t.getResponse!==void 0}function Gc(t){return t!==void 0&&t.enterprise!==void 0}class Ih{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return I_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t){return(await un(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Th(t,e){return un(t,"GET","/v2/recaptchaConfig",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t,e){return un(t,"POST","/v1/accounts:delete",e)}async function eo(t,e){return un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x_(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=Cl(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:zi(ea(i.auth_time)),issuedAtTime:zi(ea(i.iat)),expirationTime:zi(ea(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ea(t){return Number(t)*1e3}function Cl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qs(n);return i?JSON.parse(i):(Ns("Failed to decode base64 JWT payload"),null)}catch(i){return Ns("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Kc(t){const e=Cl(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mr&&A_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function to(t){const e=t.auth,n=await t.getIdToken(),r=await Zi(t,eo(e,{idToken:n}));D(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?Sh(i.providerUserInfo):[],o=N_(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ra(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function R_(t){const e=ht(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e){const n=await Eh(t,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ch(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&_i(t.emulatorConfig.host)&&(l.credentials="include"),yh.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function O_(t,e){return un(t,"POST","/v2/accounts:revokeToken",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=Kc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await L_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ei;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new P_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ra(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x_(this,e)}reload(){return R_(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Zi(this,k_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:m,providerData:v,stsTokenManager:b}=n;D(h&&b,e,"internal-error");const E=ei.fromJSON(this.name,b);D(typeof h=="string",e,"internal-error"),Kn(r,e.name),Kn(i,e.name),D(typeof u=="boolean",e,"internal-error"),D(typeof m=="boolean",e,"internal-error"),Kn(s,e.name),Kn(o,e.name),Kn(a,e.name),Kn(l,e.name),Kn(c,e.name),Kn(d,e.name);const k=new rn({uid:h,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(k.providerData=v.map(S=>({...S}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new ei;i.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await to(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new ei;a.updateFromIdToken(r);const l=new rn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ra(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map;function Pn(t){zn(t instanceof Function,"Expected a class definition");let e=Yc.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yc.set(t,e),e)}/**
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
 */class kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kh.type="NONE";const Qc=kh;/**
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
 */function Ls(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ls(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ls("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await eo(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Pn(Qc),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Pn(Qc);const o=Ls(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await eo(e,{idToken:d}).catch(()=>{});if(!u)break;h=await rn._fromGetAccountInfoResponse(e,u,d)}else h=rn._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lh(e))return"Blackberry";if(Oh(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(Nh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function xh(t=vt()){return/firefox\//i.test(t)}function Ah(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(t=vt()){return/crios\//i.test(t)}function Rh(t=vt()){return/iemobile/i.test(t)}function Nh(t=vt()){return/android/i.test(t)}function Lh(t=vt()){return/blackberry/i.test(t)}function Oh(t=vt()){return/webos/i.test(t)}function Il(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function D_(t=vt()){return Il(t)&&!!window.navigator?.standalone}function M_(){return Gv()&&document.documentMode===10}function Dh(t=vt()){return Il(t)||Nh(t)||Oh(t)||Lh(t)||/windows phone/i.test(t)||Rh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t,e=[]){let n;switch(t){case"Browser":n=Jc(vt());break;case"Worker":n=`${Jc(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class $_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function F_(t,e={}){return un(t,"GET","/v2/passwordPolicy",In(t,e))}/**
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
 */const z_=6;class U_{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??z_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xc(this),this.idTokenSubscription=new Xc(this),this.beforeStateQueue=new $_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eo(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(en(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(ar(this));const n=e?ht(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F_(this),n=new U_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await O_(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&__(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vr(t){return ht(t)}class Xc{constructor(e){this.auth=e,this.observer=null,this.addObserver=rg(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j_(t){gs=t}function Tl(t){return gs.loadJS(t)}function H_(){return gs.recaptchaV2Script}function W_(){return gs.recaptchaEnterpriseScript}function V_(){return gs.gapiScript}function $h(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=500,G_=6e4,xs=1e12;class K_{constructor(e){this.auth=e,this.counter=xs,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new J_(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||xs;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||xs;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||xs;return this._widgets.get(n)?.execute(),""}}class Y_{constructor(){this.enterprise=new Q_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Q_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class J_{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=X_(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},G_)},B_))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function X_(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const Z_="recaptcha-enterprise",Ui="NO_RECAPTCHA";class Fh{constructor(e){this.type=Z_,this.auth=vr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Th(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ih(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Gc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ui)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y_().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Gc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=W_();l.length!==0&&(l+=a),Tl(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ta(t,e,n,r=!1,i=!1){const s=new Fh(t);let o;if(i)o=Ui;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function na(t,e,n,r,i){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await ta(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await ta(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const s=await ta(t,e,n,!1,!0);return r(t,s)}}async function eb(t){const e=vr(t),n=await Th(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ih(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Fh(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){const n=wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nr(s,e??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:e})}function nb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Pn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function rb(t,e,n){const r=vr(t);D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zh(e),{host:o,port:a}=ib(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){D(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),D(Nr(c,r.config.emulator)&&Nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,_i(o)?(ah(`${s}//${o}${l}`),lh("Auth",!0)):sb()}function zh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ib(t){const e=zh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zc(o)}}}function Zc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="http://localhost";class Or extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:ob,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t,e){return un(t,"POST","/v1/accounts:sendVerificationCode",In(t,e))}async function ab(t,e){return Ro(t,"POST","/v1/accounts:signInWithPhoneNumber",In(t,e))}async function lb(t,e){const n=await Ro(t,"POST","/v1/accounts:signInWithPhoneNumber",In(t,e));if(n.temporaryProof)throw Ri(t,"account-exists-with-different-credential",n);return n}const cb={USER_NOT_FOUND:"user-not-found"};async function ub(t,e){const n={...e,operation:"REAUTH"};return Ro(t,"POST","/v1/accounts:signInWithPhoneNumber",In(t,n),cb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Sl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new qi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new qi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ab(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lb(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ub(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new qi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends Uh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends _s{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends _s{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends _s{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rn._fromIdTokenResponse(e,r,i),o=tu(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tu(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends mr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new no(e,n,r,i)}}function qh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,s,e,r):s})}async function db(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function hb(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(ar(r));const i="reauthenticate";try{const s=await Zi(t,qh(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Cl(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(t,e,n=!1){if(en(t.app))return Promise.reject(ar(t));const r="signIn",i=await qh(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fb(t,e){return jh(vr(t),e)}function pb(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function mb(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function vb(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function gb(t){return ht(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){return un(t,"POST","/v2/accounts/mfaEnrollment:start",In(t,e))}const ro="__sak";/**
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
 */class Hh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=1e3,bb=10;class Wh extends Hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);M_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wh.type="LOCAL";const wb=Wh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends Hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vh.type="SESSION";const Bh=Vh;/**
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
 */function yb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await yb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=kl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function Cb(t){He().location.href=t}/**
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
 */function xl(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Ib(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tb(){return navigator?.serviceWorker?.controller||null}function Sb(){return xl()?self:null}/**
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
 */const Gh="firebaseLocalStorageDb",kb=1,io="firebaseLocalStorage",Kh="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function xb(){const t=indexedDB.deleteDatabase(Gh);return new bs(t).toPromise()}function Na(){const t=indexedDB.open(Gh,kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(io,{keyPath:Kh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(io)?e(r):(r.close(),await xb(),e(await Na()))})})}async function ru(t,e,n){const r=Lo(t,!0).put({[Kh]:e,value:n});return new bs(r).toPromise()}async function Ab(t,e){const n=Lo(t,!1).get(e),r=await new bs(n).toPromise();return r===void 0?null:r.value}function iu(t,e){const n=Lo(t,!0).delete(e);return new bs(n).toPromise()}const Pb=800,Rb=3;class Yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(Sb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ib(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await ru(e,ro,"1"),await iu(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ru(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lo(i,!1).getAll();return new bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yh.type="LOCAL";const Nb=Yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){return un(t,"POST","/v2/accounts/mfaSignIn:start",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=$h("rcb"),Lb=new vs(3e4,6e4);class Ob{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!He().grecaptcha?.render}load(e,n=""){return D(Db(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Bc(He().grecaptcha)?Promise.resolve(He().grecaptcha):new Promise((r,i)=>{const s=He().setTimeout(()=>{i(Ot(e,"network-request-failed"))},Lb.get());He()[ra]=()=>{He().clearTimeout(s),delete He()[ra];const a=He().grecaptcha;if(!a||!Bc(a)){i(Ot(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${H_()}?${jr({onload:ra,render:"explicit",hl:n})}`;Tl(o).catch(()=>{clearTimeout(s),i(Ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!He().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Db(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Mb{async load(e){return new K_(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="recaptcha",$b={theme:"light",type:"image"};class Fb{constructor(e,n,r={...$b}){this.parameters=r,this.type=ji,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=vr(e),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mb:new Ob,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=He()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(wh()&&!xl(),this.auth,"internal-error"),await zb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await S_(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function zb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=qi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function qb(t,e,n){if(en(t.app))return Promise.reject(ar(t));const r=vr(t),i=await jb(r,e,ht(n));return new Ub(i,s=>fb(r,s))}async function jb(t,e,n){if(!t._getRecaptchaConfig())try{await eb(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){D(i.type==="enroll",t,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await na(t,s,"mfaSmsEnrollment",async(c,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Ui){D(n?.type===ji,c,"argument-error");const h=await ia(c,d,n);return nu(c,h)}return nu(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{D(i.type==="signin",t,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;D(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await na(t,o,"mfaSmsSignIn",async(d,h)=>{if(h.phoneSignInInfo.captchaResponse===Ui){D(n?.type===ji,d,"argument-error");const u=await ia(d,h,n);return su(d,u)}return su(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await na(t,i,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Ui){D(n?.type===ji,l,"argument-error");const d=await ia(l,c,n);return eu(l,d)}return eu(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function ia(t,e,n){D(n.type===ji,t,"argument-error");const r=await n.verify();D(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Hb(t,e){return e?Pn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Al extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wb(t){return jh(t.auth,new Al(t),t.bypassAuthState)}function Vb(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),hb(n,new Al(t),t.bypassAuthState)}async function Bb(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),db(n,new Al(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wb;case"linkViaPopup":case"linkViaRedirect":return Bb;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:Fn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new vs(2e3,1e4);class Qr extends Qh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="pendingRedirect",Os=new Map;class Yb extends Qh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const r=await Qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qb(t,e){const n=Zb(e),r=Xb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jb(t,e){Os.set(t._key(),e)}function Xb(t){return Pn(t._redirectPersistence)}function Zb(t){return Ls(Kb,t.config.apiKey,t.name)}async function e1(t,e,n=!1){if(en(t.app))return Promise.reject(ar(t));const r=vr(t),i=Hb(r,e),o=await new Yb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=600*1e3;class n1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Jh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ou(e))}saveEventToCache(e){this.cachedEventUids.add(ou(e)),this.lastProcessedEventTime=Date.now()}}function ou(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jh({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function r1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e={}){return un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o1=/^https?/;async function a1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i1(t);for(const n of e)try{if(l1(n))return}catch{}Fn(t,"unauthorized-domain")}function l1(t){const e=Pa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!o1.test(n))return!1;if(s1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const c1=new vs(3e4,6e4);function au(){const t=He().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u1(t){return new Promise((e,n)=>{function r(){au(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{au(),n(Ot(t,"network-request-failed"))},timeout:c1.get()})}if(He().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(He().gapi?.load)r();else{const i=$h("iframefcb");return He()[i]=()=>{gapi.load?r():n(Ot(t,"network-request-failed"))},Tl(`${V_()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw Ds=null,e})}let Ds=null;function d1(t){return Ds=Ds||u1(t),Ds}/**
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
 */const h1=new vs(5e3,15e3),f1="__/auth/iframe",p1="emulator/auth/iframe",m1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g1(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?El(e,p1):`https://${t.config.authDomain}/${f1}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=v1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jr(r).slice(1)}`}async function _1(t){const e=await d1(t),n=He().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:g1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=He().setTimeout(()=>{s(o)},h1.get());function l(){He().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const b1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w1=500,y1=600,E1="_blank",C1="http://localhost";class lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I1(t,e,n,r=w1,i=y1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...b1,width:r.toString(),height:i.toString(),top:s,left:o},c=vt().toLowerCase();n&&(a=Ph(c)?E1:n),xh(c)&&(e=e||C1,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[m,v])=>`${u}${m}=${v},`,"");if(D_(c)&&a!=="_self")return T1(e||"",a),new lu(null);const h=window.open(e||"",a,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new lu(h)}function T1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S1="__/auth/handler",k1="emulator/auth/handler",x1=encodeURIComponent("fac");async function cu(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof Uh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ia(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof _s){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${x1}=${encodeURIComponent(l)}`:"";return`${A1(t)}?${jr(a).slice(1)}${c}`}function A1({config:t}){return t.emulator?El(t,k1):`https://${t.authDomain}/${S1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="webStorageSupport";class P1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bh,this._completeRedirectFn=e1,this._overrideRedirectResult=Jb}async _openPopup(e,n,r,i){zn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await cu(e,n,r,Pa(),i);return I1(e,s,kl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cu(e,n,r,Pa(),i);return Cb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _1(e),r=new n1(e);return n.register("authEvent",i=>(D(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sa,{type:sa},i=>{const s=i?.[0]?.[sa];s!==void 0&&n(!!s),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dh()||Ah()||Il()}}const R1=P1;var uu="@firebase/auth",du="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O1(t){ui(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mh(t)},c=new q_(r,i,s,l);return nb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Lr("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(r=>new N1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(uu,du,L1(t)),or(uu,du,"esm2020")}/**
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
 */const D1=300,M1=oh("authIdTokenMaxAge")||D1;let hu=null;const $1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M1)return;const i=n?.token;hu!==i&&(hu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function F1(t=ph()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tb(t,{popupRedirectResolver:R1,persistence:[Nb,wb,Bh]}),r=oh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$1(s.toString());mb(n,o,()=>o(n.currentUser)),pb(n,a=>o(a))}}const i=ih("auth");return i&&rb(n,`http://${i}`),n}function z1(){return document.getElementsByTagName("head")?.[0]??document}j_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O1("Browser");var fu={};const pu="@firebase/database",mu="1.1.0";/**
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
 */let Xh="";function U1(t){Xh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new q1(e)}}catch{}return new j1},Cr=Zh("localStorage"),H1=Zh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new _l("@firebase/database"),W1=(function(){let t=1;return function(){return t++}})(),ef=function(t){const e=og(t),n=new ng;n.update(e);const r=n.digest();return pl.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let Hi=null,vu=!0;const V1=function(t,e){x(!0,"Can't turn on custom loggers persistently."),ri.logLevel=Te.VERBOSE,Hi=ri.log.bind(ri)},lt=function(...t){if(vu===!0&&(vu=!1,Hi===null&&H1.get("logging_enabled")===!0&&V1()),Hi){const e=ws.apply(null,t);Hi(e)}},ys=function(t){return function(...e){lt(t,...e)}},La=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);ri.error(e)},Un=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw ri.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+ws(...t);ri.warn(e)},B1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dr="[MIN_NAME]",ur="[MAX_NAME]",wi=function(t,e){if(t===e)return 0;if(t===Dr||e===ur)return-1;if(e===Dr||t===ur)return 1;{const n=gu(t),r=gu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},K1=function(t,e){return t===e?0:t<e?-1:1},Si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},Rl=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=Rl(t[e[r]]);return n+="}",n},tf=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nf=function(t){x(!Pl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},Y1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Q1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function J1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const X1=new RegExp("^-?(0*)\\d{1,10}$"),Z1=-2147483648,e0=2147483647,gu=function(t){if(X1.test(t)){const e=Number(t);if(e>=Z1&&e<=e0)return e}return null},yi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},t0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class n0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,en(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class Ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ms.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="5",rf="v",sf="s",of="r",af="f",lf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cf="ls",uf="p",Oa="ac",df="websocket",hf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function i0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pf(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===df)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hf)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);i0(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={},aa={};function Ll(t){const e=t.toString();return oa[e]||(oa[e]=new s0),oa[e]}function o0(t,e){const n=t.toString();return aa[n]||(aa[n]=e()),aa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&yi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="start",l0="close",c0="pLPCommand",u0="pRTLPCB",mf="id",vf="pw",gf="ser",d0="cb",h0="seg",f0="ts",p0="d",m0="dframe",_f=1870,bf=30,v0=_f-bf,g0=25e3,_0=3e4;class Jr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=Ll(n),this.urlFn=l=>(this.appCheckToken&&(l[Oa]=this.appCheckToken),pf(n,hf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new a0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_0)),G1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ol((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_u)this.id=a,this.password=l;else if(o===l0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[_u]="t",r[gf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[d0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rf]=Nl,this.transportSessionId&&(r[sf]=this.transportSessionId),this.lastSessionId&&(r[cf]=this.lastSessionId),this.applicationId&&(r[uf]=this.applicationId),this.appCheckToken&&(r[Oa]=this.appCheckToken),typeof location<"u"&&location.hostname&&lf.test(location.hostname)&&(r[of]=af);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Y1()&&!Q1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nh(n),i=tf(r,v0);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[m0]="t",r[mf]=e,r[vf]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ol{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=W1(),window[c0+this.uniqueCallbackIdentifier]=e,window[u0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ol.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mf]=this.myID,e[vf]=this.myPW,e[gf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bf+r.length<=_f;){const o=this.pendingSegs.shift();r=r+"&"+h0+i+"="+o.seg+"&"+f0+i+"="+o.ts+"&"+p0+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(g0)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=16384,w0=45e3;let so=null;typeof MozWebSocket<"u"?so=MozWebSocket:typeof WebSocket<"u"&&(so=WebSocket);class tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=Ll(n),this.connURL=tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[rf]=Nl,typeof location<"u"&&location.hostname&&lf.test(location.hostname)&&(o[of]=af),n&&(o[sf]=n),r&&(o[cf]=r),i&&(o[Oa]=i),s&&(o[uf]=s),pf(e,df,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{let r;Kv(),this.mySock=new so(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&so!==null&&!tn.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tf(n,b0);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(w0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static get ALL_TRANSPORTS(){return[Jr,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=6e4,E0=5e3,C0=10*1024,I0=100*1024,la="t",bu="d",T0="s",wu="r",S0="e",yu="o",Eu="a",Cu="n",Iu="p",k0="h";class x0{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>I0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>C0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(la in e){const n=e[la];n===Eu?this.upgradeIfSecondaryHealthy_():n===wu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Si("t",e),r=Si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Iu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Si("t",e),r=Si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Si(la,e);if(bu in e){const r=e[bu];if(n===k0){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===T0?this.onConnectionShutdown_(r):n===wu?this.onReset_(r):n===S0?La("Server Error: "+r):n===yu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):La("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nl!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(y0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(E0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Iu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends yf{static getInstance(){return new oo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=32,Su=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Se("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dr(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function Ef(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function A0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function If(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Se(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Ct(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Ct(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dl(t,e){if(dr(t)!==dr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dr(t)>dr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class P0{constructor(e,n){this.errorPrefix_=n,this.parts_=Cf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Po(this.parts_[r]);Tf(this)}}function R0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Po(e),Tf(t)}function N0(t){const e=t.parts_.pop();t.byteLength_-=Po(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tf(t){if(t.byteLength_>Su)throw new Error(t.errorPrefix_+"has a key path longer than "+Su+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tu+") or object contains a cycle "+yr(t))}function yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends yf{static getInstance(){return new Ml}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,L0=300*1e3,ku=30*1e3,O0=1.3,D0=3e4,M0="server_kill",xu=3;class Mn extends wf{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mn.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=L0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ml.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ao,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Mn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const r=ci(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ku)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=eg(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):La("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>D0&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new x0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Tt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(M0)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Tt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ia(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xu&&(this.reconnectDelay_=ku,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xh.replace(/\./g,"-")]=1,vl()?e["framework.cordova"]=1:ch()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oo.getInstance().currentlyOnline();return Ia(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Dr,e),i=new oe(Dr,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class Sf extends Oo{static get __EMPTY_NODE(){return As}static set __EMPTY_NODE(e){As=e}compare(e,n){return wi(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ur,As)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,As)}toString(){return".key"}}const kr=new Sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return It.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class $0{copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ps(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ps(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ps(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ps(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new $0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){return wi(t.name,e.name)}function $l(t,e){return wi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;function z0(t){Da=t}const kf=function(t){return typeof t=="number"?"number:"+nf(t):"string:"+t},xf=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else x(t===Da||t.isEmpty(),"priority of unexpected type.");x(t===Da||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au;class Je{static set __childrenNodeConstructor(e){Au=e}static get __childrenNodeConstructor(){return Au}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nf(this.value_):e+=this.value_,this.lazyHash_=ef(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af,Pf;function U0(t){Af=t}function q0(t){Pf=t}class j0 extends Oo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ur,new Je("[PRIORITY-POST]",Pf))}makePost(e,n){const r=Af(e);return new oe(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new j0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=Math.log(2);class W0{constructor(e){const n=s=>parseInt(Math.log(s)/H0,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ao=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=t[l],u=n?n(h):h,new Xe(u,h.node,Xe.BLACK,null,null);{const m=parseInt(d/2,10)+l,v=i(l,m),b=i(m+1,c);return h=t[m],u=n?n(h):h,new Xe(u,h.node,Xe.BLACK,v,b)}},s=function(l){let c=null,d=null,h=t.length;const u=function(v,b){const E=h-v,k=h;h-=v;const S=i(E+1,k),R=t[E],N=n?n(R):R;m(new Xe(N,R.node,b,null,S))},m=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));b?u(E,Xe.BLACK):(u(E,Xe.BLACK),u(E,Xe.RED))}return d},o=new W0(t.length),a=s(o);return new It(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;const Gr={};class Rn{static get Default(){return x(Gr&&Le,"ChildrenNode.ts has not been loaded"),ca=ca||new Rn({".priority":Gr},{".priority":Le}),ca}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ao(r,e.getCompare()):a=Gr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new Rn(d,c)}addToIndexes(e,n){const r=Js(this.indexes_,(i,s)=>{const o=ci(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Gr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ao(a,o.getCompare())}else return Gr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Js(this.indexes_,i=>{if(i===Gr)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Rn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class W{static get EMPTY_NODE(){return xi||(xi=new W(new It($l),null,Rn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xf(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xi}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xi:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?xi:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{x(ie(e)!==".priority"||dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kf(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ef(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),i=n.getIterator(Le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kr?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class V0 extends W{constructor(){super(new It($l),W.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Es=new V0;Object.defineProperties(oe,{MIN:{value:new oe(Dr,W.EMPTY_NODE)},MAX:{value:new oe(ur,Es)}});Sf.__EMPTY_NODE=W.EMPTY_NODE;Je.__childrenNodeConstructor=W;z0(Es);q0(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=!0;function rt(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,rt(e))}if(!(t instanceof Array)&&B0){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=rt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return W.EMPTY_NODE;const s=ao(n,F0,o=>o.name,$l);if(r){const o=ao(n,Le.getCompare());return new W(s,rt(e),new Rn({".priority":o},{".priority":Le}))}else return new W(s,rt(e),Rn.Default)}else{let n=W.EMPTY_NODE;return kt(t,(r,i)=>{if(Cn(t,r)&&r.substring(0,1)!=="."){const s=rt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(rt(e))}}U0(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Oo{constructor(e){super(),this.indexPath_=e,x(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wi(e.name,n.name):s}makePost(e,n){const r=rt(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Es);return new oe(ur,e)}toString(){return Cf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends Oo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=rt(e);return new oe(n,r)}toString(){return".value"}}const Rf=new G0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){return{type:"value",snapshotNode:t}}function hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function K0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hi(n,r)):o.trackChildChange(ns(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,s)=>{n.hasChild(i)||r.trackChildChange(ts(i,s))}),n.isLeafNode()||n.forEachChild(Le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ns(i,s,o))}else r.trackChildChange(hi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.indexedFilter_=new zl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rs.getStartPost_(e),this.endPost_=rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Le,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,m)=>h(m,u)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new oe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:o(u,l);if(d&&!r.isEmpty()&&m>=0)return s?.trackChildChange(ns(n,r,h)),a.updateImmediateChild(n,r);{s?.trackChildChange(ts(n,h));const b=a.updateImmediateChild(n,W.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s?.trackChildChange(hi(u.name,u.node)),b.updateImmediateChild(u.name,u.node)):b}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ts(c.name,c.node)),s.trackChildChange(hi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ur}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new Ul;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Q0(t){return t.loadsAllData()?new zl(t.getIndex()):t.hasLimit()?new Y0(t):new rs(t)}function J0(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function X0(t,e){const n=t.copy();return n.index_=e,n}function Pu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===Rf?n="$value":t.index_===kr?n="$key":(x(t.index_ instanceof Fl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ru(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends wf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=lo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Pu(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ci(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=lo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Pu(e._queryParams),r=e._path.toString(),i=new Ao;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ji(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){return{value:null,children:new Map}}function Lf(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,co());const i=t.children.get(r);e=ke(e),Lf(i,e,n)}}function Ma(t,e,n){t.value!==null?n(e,t.value):ew(t,(r,i)=>{const s=new Se(e.toString()+"/"+r);Ma(i,s,n)})}function ew(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=10*1e3,nw=30*1e3,rw=300*1e3;class iw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tw(e);const r=Nu+(nw-Nu)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*rw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function Of(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ql(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=Of()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new uo(be(),n,this.revert)}}else return x(ie(this.path)===e,"operationForChild called for unrelated child."),new uo(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.source=e,this.path=n,this.type=on.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new is(this.source,be()):new is(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=on.OVERWRITE}operationForChild(e){return se(this.path)?new Mr(this.source,be(),this.snap.getImmediateChild(e)):new Mr(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=on.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Mr(this.source,be(),n.value):new ss(this.source,be(),n)}else return x(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ss(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ow(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(K0(o.childName,o.snapshotNode))}),Ai(t,i,"child_removed",e,r,n),Ai(t,i,"child_added",e,r,n),Ai(t,i,"child_moved",s,r,n),Ai(t,i,"child_changed",e,r,n),Ai(t,i,"value",e,r,n),i}function Ai(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>lw(t,a,l)),o.forEach(a=>{const l=aw(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function aw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lw(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e){return{eventCache:t,serverCache:e}}function Vi(t,e,n,r){return Do(new $r(e,n,r),t.serverCache)}function Df(t,e,n,r){return Do(t.eventCache,new $r(e,n,r))}function $a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;const cw=()=>(ua||(ua=new It(K1)),ua);class Ae{static fromObject(e){let n=new Ae(null);return kt(e,(r,i)=>{n=n.set(new Se(r),i)}),n}constructor(e,n=cw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(se(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),n);return s!=null?{path:Ke(new Se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new Ae(null)}}set(e,n){if(se(e))return new Ae(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Ae(null)).set(ke(e),n),o=this.children.insert(r,s);return new Ae(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ae(null):new Ae(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(se(e))return n;{const r=ie(e),s=(this.children.get(r)||new Ae(null)).setTree(ke(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ae(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),Ke(n,i),r):new Ae(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ae(null))}}function Bi(t,e,n){if(se(e))return new an(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ct(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new Ae(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function Lu(t,e,n){let r=t;return kt(n,(i,s)=>{r=Bi(r,Ke(e,i),s)}),r}function Ou(t,e){if(se(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new an(n)}}function Fa(t,e){return Hr(t,e)!=null}function Hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Du(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function lr(t,e){if(se(e))return t;{const n=Hr(t,e);return n!=null?new an(new Ae(n)):new an(t.writeTree_.subtree(e))}}function za(t){return t.writeTree_.isEmpty()}function fi(t,e){return Mf(be(),t.writeTree_,e)}function Mf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Mf(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return Uf(e,t)}function uw(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function dw(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fw(a,r.path)?i=!1:sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return pw(t),!0;if(r.snap)t.visibleWrites=Ou(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=Ou(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function fw(t,e){if(t.snap)return sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&sn(Ke(t.path,n),e))return!0;return!1}function pw(t){t.visibleWrites=$f(t.allWrites,mw,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mw(t){return t.visible}function $f(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)sn(n,o)?(a=Ct(n,o),r=Bi(r,a,s.snap)):sn(o,n)&&(a=Ct(o,n),r=Bi(r,be(),s.snap.getChild(a)));else if(s.children){if(sn(n,o))a=Ct(n,o),r=Lu(r,a,s.children);else if(sn(o,n))if(a=Ct(o,n),se(a))r=Lu(r,be(),s.children);else{const l=ci(s.children,ie(a));if(l){const c=l.getChild(ke(a));r=Bi(r,be(),c)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function Ff(t,e,n,r,i){if(!r&&!i){const s=Hr(t.visibleWrites,e);if(s!=null)return s;{const o=lr(t.visibleWrites,e);if(za(o))return n;if(n==null&&!Fa(o,be()))return null;{const a=n||W.EMPTY_NODE;return fi(o,a)}}}else{const s=lr(t.visibleWrites,e);if(!i&&za(s))return n;if(!i&&n==null&&!Fa(s,be()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(sn(c.path,e)||sn(e,c.path))},a=$f(t.allWrites,o,e),l=n||W.EMPTY_NODE;return fi(a,l)}}}function vw(t,e,n){let r=W.EMPTY_NODE;const i=Hr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=lr(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=fi(lr(s,new Se(o)),a);r=r.updateImmediateChild(o,l)}),Du(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=lr(t.visibleWrites,e);return Du(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gw(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(Fa(t.visibleWrites,s))return null;{const o=lr(t.visibleWrites,s);return za(o)?i.getChild(n):fi(o,i.getChild(n))}}function _w(t,e,n,r){const i=Ke(e,n),s=Hr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=lr(t.visibleWrites,i);return fi(o,r.getNode().getImmediateChild(n))}else return null}function bw(t,e){return Hr(t.visibleWrites,e)}function ww(t,e,n,r,i,s,o){let a;const l=lr(t.visibleWrites,e),c=Hr(l,be());if(c!=null)a=c;else if(n!=null)a=fi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=u.getNext();for(;m&&d.length<i;)h(m,r)!==0&&d.push(m),m=u.getNext();return d}else return[]}function yw(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function ho(t,e,n,r){return Ff(t.writeTree,t.treePath,e,n,r)}function Wl(t,e){return vw(t.writeTree,t.treePath,e)}function Mu(t,e,n,r){return gw(t.writeTree,t.treePath,e,n,r)}function fo(t,e){return bw(t.writeTree,Ke(t.treePath,e))}function Ew(t,e,n,r,i,s){return ww(t.writeTree,t.treePath,e,n,r,i,s)}function Vl(t,e,n){return _w(t.writeTree,t.treePath,e,n)}function zf(t,e){return Uf(Ke(t.treePath,e),t.writeTree)}function Uf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ns(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,hi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ns(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const qf=new Iw;class Bl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vl(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fr(this.viewCache_),s=Ew(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){return{filter:t}}function Sw(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kw(t,e,n,r,i){const s=new Cw;let o,a;if(n.type===on.OVERWRITE){const c=n;c.source.fromUser?o=Ua(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=po(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===on.MERGE){const c=n;c.source.fromUser?o=Aw(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=qa(t,e,c.path,c.children,r,i,a,s))}else if(n.type===on.ACK_USER_WRITE){const c=n;c.revert?o=Nw(t,e,c.path,r,i,s):o=Pw(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===on.LISTEN_COMPLETE)o=Rw(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const l=s.getChanges();return xw(e,o,l),{viewCache:o,changes:l}}function xw(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$a(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Nf($a(e)))}}function jf(t,e,n,r,i,s){const o=e.eventCache;if(fo(r,n)!=null)return e;{let a,l;if(se(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fr(e),d=c instanceof W?c:W.EMPTY_NODE,h=Wl(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=ho(r,Fr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ie(n);if(c===".priority"){x(dr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Mu(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=ke(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Mu(r,n,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=Vl(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,i,s):a=o.getNode()}}return Vi(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function po(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=ie(n);if(!l.isCompleteForPath(n)&&dr(n)>1)return e;const v=ke(n),E=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),m,E,v,qf,null)}const h=Df(e,c,l.isFullyInitialized()||se(n),d.filtersNodes()),u=new Bl(i,h,s);return jf(t,h,n,i,u,a)}function Ua(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Bl(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vi(e,c,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vi(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=ke(n),m=a.getNode().getImmediateChild(h);let v;if(se(u))v=r;else{const b=d.getCompleteChild(h);b!=null?Ef(u)===".priority"&&b.getChild(If(u)).isEmpty()?v=b:v=b.updateChild(u,r):v=W.EMPTY_NODE}if(m.equals(v))l=e;else{const b=t.filter.updateChild(a.getNode(),h,v,u,d,o);l=Vi(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $u(t,e){return t.eventCache.isCompleteForChild(e)}function Aw(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=Ke(n,l);$u(e,ie(d))&&(a=Ua(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=Ke(n,l);$u(e,ie(d))||(a=Ua(t,a,d,c,i,s,o))}),a}function Fu(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function qa(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=r:c=new Ae(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=Fu(t,m,u);l=po(t,l,new Se(h),v,i,s,o,a)}}),c.children.inorderTraversal((h,u)=>{const m=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),b=Fu(t,v,u);l=po(t,l,new Se(h),b,i,s,o,a)}}),l}function Pw(t,e,n,r,i,s,o){if(fo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return po(t,e,n,l.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new Ae(null);return l.getNode().forEachChild(kr,(d,h)=>{c=c.set(new Se(d),h)}),qa(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ae(null);return r.foreach((d,h)=>{const u=Ke(n,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),qa(t,e,n,c,i,s,a,o)}}function Rw(t,e,n,r,i){const s=e.serverCache,o=Df(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return jf(t,o,n,r,qf,i)}function Nw(t,e,n,r,i,s){let o;if(fo(r,n)!=null)return e;{const a=new Bl(r,e,i),l=e.eventCache.getNode();let c;if(se(n)||ie(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ho(r,Fr(e));else{const h=e.serverCache.getNode();x(h instanceof W,"serverChildren would be complete if leaf node"),d=Wl(r,h)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=ie(n);let h=Vl(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,ke(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,W.EMPTY_NODE,ke(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ho(r,Fr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||fo(r,be())!=null,Vi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zl(r.getIndex()),s=Q0(r);this.processor_=Tw(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),d=new $r(l,o.isFullyInitialized(),i.filtersNodes()),h=new $r(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Do(h,d),this.eventGenerator_=new sw(this.query_)}get query(){return this.query_}}function Ow(t){return t.viewCache_.serverCache.getNode()}function Dw(t,e){const n=Fr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function zu(t){return t.eventRegistrations_.length===0}function Mw(t,e){t.eventRegistrations_.push(e)}function Uu(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qu(t,e,n,r){e.type===on.MERGE&&e.source.queryId!==null&&(x(Fr(t.viewCache_),"We should always have a full cache before handling merges"),x($a(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=kw(t.processor_,i,e,n,r);return Sw(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Hf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $w(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(s,o)=>{r.push(hi(s,o))}),n.isFullyInitialized()&&r.push(Nf(n.getNode())),Hf(t,r,n.getNode(),e)}function Hf(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ow(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class Fw{constructor(){this.views=new Map}}function zw(t){x(!mo,"__referenceConstructor has already been defined"),mo=t}function Uw(){return x(mo,"Reference.ts has not been loaded"),mo}function qw(t){return t.views.size===0}function Gl(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),qu(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qu(o,e,n,r));return s}}function jw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ho(n,i?r:null),l=!1;a?l=!0:r instanceof W?(a=Wl(n,r),l=!1):(a=W.EMPTY_NODE,l=!1);const c=Do(new $r(a,l,!1),new $r(r,i,!1));return new Lw(e,c)}return o}function Hw(t,e,n,r,i,s){const o=jw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mw(o,n),$w(o,n)}function Ww(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=hr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Uu(c,n,r)),zu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Uu(l,n,r)),zu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!hr(t)&&s.push(new(Uw())(e._repo,e._path)),{removed:s,events:o}}function Wf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ii(t,e){let n=null;for(const r of t.views.values())n=n||Dw(r,e);return n}function Vf(t,e){if(e._queryParams.loadsAllData())return Mo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Bf(t,e){return Vf(t,e)!=null}function hr(t){return Mo(t)!=null}function Mo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;function Vw(t){x(!vo,"__referenceConstructor has already been defined"),vo=t}function Bw(){return x(vo,"Reference.ts has not been loaded"),vo}let Gw=1;class ju{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=yw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gf(t,e,n,r,i){return uw(t.pendingWriteTree_,e,n,r,i),i?Cs(t,new Mr(Of(),e,n)):[]}function Ir(t,e,n=!1){const r=dw(t.pendingWriteTree_,e);if(hw(t.pendingWriteTree_,e)){let s=new Ae(null);return r.snap!=null?s=s.set(be(),!0):kt(r.children,o=>{s=s.set(new Se(o),!0)}),Cs(t,new uo(r.path,s,n))}else return[]}function $o(t,e,n){return Cs(t,new Mr(ql(),e,n))}function Kw(t,e,n){const r=Ae.fromObject(n);return Cs(t,new ss(ql(),e,r))}function Yw(t,e){return Cs(t,new is(ql(),e))}function Qw(t,e,n){const r=Yl(t,n);if(r){const i=Ql(r),s=i.path,o=i.queryId,a=Ct(s,e),l=new is(jl(o),a);return Jl(t,s,l)}else return[]}function ja(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Bf(o,e))){const l=Ww(o,e,n,r);qw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,m)=>hr(m));if(d&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const m=Zw(u);for(let v=0;v<m.length;++v){const b=m[v],E=b.query,k=Qf(t,b);t.listenProvider_.startListening(Gi(E),go(t,E),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Gi(e),null):c.forEach(u=>{const m=t.queryToTagMap.get(Fo(u));t.listenProvider_.stopListening(Gi(u),m)}))}ey(t,c)}return a}function Jw(t,e,n,r){const i=Yl(t,r);if(i!=null){const s=Ql(i),o=s.path,a=s.queryId,l=Ct(o,e),c=new Mr(jl(a),l,n);return Jl(t,o,c)}else return[]}function Xw(t,e,n,r){const i=Yl(t,r);if(i){const s=Ql(i),o=s.path,a=s.queryId,l=Ct(o,e),c=Ae.fromObject(n),d=new ss(jl(a),l,c);return Jl(t,o,d)}else return[]}function Hu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,m)=>{const v=Ct(u,i);s=s||ii(m,v),o=o||hr(m)});let a=t.syncPointTree_.get(i);a?(o=o||hr(a),s=s||ii(a,be())):(a=new Fw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const b=ii(v,be());b&&(s=s.updateImmediateChild(m,b))}));const c=Bf(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Fo(e);x(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=ty();t.queryToTagMap.set(u,m),t.tagToQueryMap.set(m,u)}const d=Hl(t.pendingWriteTree_,i);let h=Hw(a,e,n,d,s,l);if(!c&&!o&&!r){const u=Vf(a,e);h=h.concat(ny(t,e,u))}return h}function Kl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ct(o,e),c=ii(a,l);if(c)return c});return Ff(i,e,s,n,!0)}function Cs(t,e){return Kf(e,t.syncPointTree_,null,Hl(t.pendingWriteTree_,be()))}function Kf(t,e,n,r){if(se(t.path))return Yf(t,e,n,r);{const i=e.get(be());n==null&&i!=null&&(n=ii(i,be()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=zf(r,o);s=s.concat(Kf(a,l,c,d))}return i&&(s=s.concat(Gl(i,t,r,n))),s}}function Yf(t,e,n,r){const i=e.get(be());n==null&&i!=null&&(n=ii(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zf(r,o),d=t.operationForChild(o);d&&(s=s.concat(Yf(d,a,l,c)))}),i&&(s=s.concat(Gl(i,t,r,n))),s}function Qf(t,e){const n=e.query,r=go(t,n);return{hashFn:()=>(Ow(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Qw(t,n._path,r):Yw(t,n._path);{const s=J1(i,n);return ja(t,n,null,s)}}}}function go(t,e){const n=Fo(e);return t.queryToTagMap.get(n)}function Fo(t){return t._path.toString()+"$"+t._queryIdentifier}function Yl(t,e){return t.tagToQueryMap.get(e)}function Ql(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function Jl(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=Hl(t.pendingWriteTree_,e);return Gl(r,n,i,null)}function Zw(t){return t.fold((e,n,r)=>{if(n&&hr(n))return[Mo(n)];{let i=[];return n&&(i=Wf(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function Gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bw())(t._repo,t._path):t}function ey(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fo(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ty(){return Gw++}function ny(t,e,n){const r=e._path,i=go(t,e),s=Qf(t,n),o=t.listenProvider_.startListening(Gi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!hr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!se(c)&&d&&hr(d))return[Mo(d).query];{let u=[];return d&&(u=u.concat(Wf(d).map(m=>m.query))),kt(h,(m,v)=>{u=u.concat(v)}),u}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Gi(d),go(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xl(n)}node(){return this.node_}}class Zl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Zl(this.syncTree_,n)}node(){return Kl(this.syncTree_,this.path_)}}const ry=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wu=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return iy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sy(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},iy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},sy=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},oy=function(t,e,n,r){return ec(e,new Zl(n,t),r)},Jf=function(t,e,n){return ec(t,new Xl(e),n)};function ec(t,e,n){const r=t.getPriority().val(),i=Wu(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Wu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,rt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Le,(a,l)=>{const c=ec(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nc(t,e){let n=e instanceof Se?e:new Se(e),r=t,i=ie(n);for(;i!==null;){const s=ci(r.node.children,i)||{children:{},childCount:0};r=new tc(i,r,s),n=ke(n),i=ie(n)}return r}function Ei(t){return t.node.value}function Xf(t,e){t.node.value=e,Ha(t)}function Zf(t){return t.node.childCount>0}function ay(t){return Ei(t)===void 0&&!Zf(t)}function zo(t,e){kt(t.node.children,(n,r)=>{e(new tc(n,t,r))})}function ep(t,e,n,r){n&&e(t),zo(t,i=>{ep(i,e,!0)})}function ly(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Is(t){return new Se(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function Ha(t){t.parent!==null&&cy(t.parent,t.name,t)}function cy(t,e,n){const r=ay(n),i=Cn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ha(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ha(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=/[\[\].#$\/\u0000-\u001F\u007F]/,dy=/[\[\].#$\u0000-\u001F\u007F]/,da=10*1024*1024,tp=function(t){return typeof t=="string"&&t.length!==0&&!uy.test(t)},np=function(t){return typeof t=="string"&&t.length!==0&&!dy.test(t)},hy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),np(t)},Vu=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pl(t)||t&&typeof t=="object"&&Cn(t,".sv")},rp=function(t,e,n,r){r&&e===void 0||rc(gl(t,"value"),e,n)},rc=function(t,e,n){const r=n instanceof Se?new P0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+yr(r)+" with contents = "+e.toString());if(Pl(e))throw new Error(t+"contains "+e.toString()+" "+yr(r));if(typeof e=="string"&&e.length>da/3&&Po(e)>da)throw new Error(t+"contains a string greater than "+da+" utf8 bytes "+yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tp(o)))throw new Error(t+" contains an invalid key ("+o+") "+yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);R0(r,o),rc(t,a,r),N0(r)}),i&&s)throw new Error(t+' contains ".value" child '+yr(r)+" in addition to actual children.")}},ic=function(t,e,n,r){if(!np(n))throw new Error(gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fy=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ic(t,e,n)},ip=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},py=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hy(n))throw new Error(gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Dl(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sp(t,e,n){sc(t,n),op(t,r=>Dl(r,e))}function qn(t,e,n){sc(t,n),op(t,r=>sn(r,e)||sn(e,r))}function op(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(vy(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hi&&lt("event: "+n.toString()),yi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="repo_interrupt",_y=25;class by{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new my,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=co(),this.transactionQueueTree_=new tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wy(t,e,n){if(t.stats_=Ll(t.repoInfo_),t.forceRestClient_||t0())t.server_=new lo(t.repoInfo_,(r,i,s,o)=>{Bu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,i,s,o)=>{Bu(t,r,i,s,o)},r=>{Gu(t,r)},r=>{yy(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=o0(t.repoInfo_,()=>new iw(t.stats_,t.server_)),t.infoData_=new Z0,t.infoSyncTree_=new ju({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$o(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ac(t,"connected",!1),t.serverSyncTree_=new ju({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);qn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ap(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oc(t){return ry({timestamp:ap(t)})}function Bu(t,e,n,r,i){t.dataUpdateCount++;const s=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Js(n,c=>rt(c));o=Xw(t.serverSyncTree_,s,l,i)}else{const l=rt(n);o=Jw(t.serverSyncTree_,s,l,i)}else if(r){const l=Js(n,c=>rt(c));o=Kw(t.serverSyncTree_,s,l)}else{const l=rt(n);o=$o(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Uo(t,s)),qn(t.eventQueue_,a,o)}function Gu(t,e){ac(t,"connected",e),e===!1&&Cy(t)}function yy(t,e){kt(e,(n,r)=>{ac(t,n,r)})}function ac(t,e,n){const r=new Se("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(r,i);const s=$o(t.infoSyncTree_,r,i);qn(t.eventQueue_,r,s)}function lp(t){return t.nextWriteId_++}function Ey(t,e,n,r,i){lc(t,"set",{path:e.toString(),value:n,priority:r});const s=oc(t),o=rt(n,r),a=Kl(t.serverSyncTree_,e),l=Jf(o,a,s),c=lp(t),d=Gf(t.serverSyncTree_,e,l,c,!0);sc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,m)=>{const v=u==="ok";v||Tt("set at "+e+" failed: "+u);const b=Ir(t.serverSyncTree_,c,!v);qn(t.eventQueue_,e,b),Sy(t,i,u,m)});const h=fp(t,e);Uo(t,h),qn(t.eventQueue_,h,[])}function Cy(t){lc(t,"onDisconnectEvents");const e=oc(t),n=co();Ma(t.onDisconnect_,be(),(i,s)=>{const o=oy(i,s,t.serverSyncTree_,e);Lf(n,i,o)});let r=[];Ma(n,be(),(i,s)=>{r=r.concat($o(t.serverSyncTree_,i,s));const o=fp(t,i);Uo(t,o)}),t.onDisconnect_=co(),qn(t.eventQueue_,be(),r)}function Iy(t,e,n){let r;ie(e._path)===".info"?r=Hu(t.infoSyncTree_,e,n):r=Hu(t.serverSyncTree_,e,n),sp(t.eventQueue_,e._path,r)}function Wa(t,e,n){let r;ie(e._path)===".info"?r=ja(t.infoSyncTree_,e,n):r=ja(t.serverSyncTree_,e,n),sp(t.eventQueue_,e._path,r)}function Ty(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gy)}function lc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function Sy(t,e,n,r){e&&yi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function cp(t,e,n){return Kl(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function cc(t,e=t.transactionQueueTree_){if(e||qo(t,e),Ei(e)){const n=dp(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ky(t,Is(e),n)}else Zf(e)&&zo(e,n=>{cc(t,n)})}function ky(t,e,n){const r=n.map(c=>c.currentWriteId),i=cp(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ct(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{lc(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(Ir(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&h.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();qo(t,nc(t.transactionQueueTree_,e)),cc(t,t.transactionQueueTree_),qn(t.eventQueue_,e,d);for(let u=0;u<h.length;u++)yi(h[u])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Tt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Uo(t,e)}},o)}function Uo(t,e){const n=up(t,e),r=Is(n),i=dp(t,n);return xy(t,i,r),r}function xy(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ct(n,l.path);let d=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_y)d=!0,h="maxretry",i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0));else{const u=cp(t,l.path,o);l.currentInputSnapshot=u;const m=e[a].update(u.val());if(m!==void 0){rc("transaction failed: Data returned ",m,l.path);let v=rt(m);typeof m=="object"&&m!=null&&Cn(m,".priority")||(v=v.updatePriority(u.getPriority()));const E=l.currentWriteId,k=oc(t),S=Jf(v,u,k);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=S,l.currentWriteId=lp(t),o.splice(o.indexOf(E),1),i=i.concat(Gf(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(Ir(t.serverSyncTree_,E,!0))}else d=!0,h="nodata",i=i.concat(Ir(t.serverSyncTree_,l.currentWriteId,!0))}qn(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}qo(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)yi(r[a]);cc(t,t.transactionQueueTree_)}function up(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ei(r)===void 0;)r=nc(r,n),e=ke(e),n=ie(e);return r}function dp(t,e){const n=[];return hp(t,e,n),n.sort((r,i)=>r.order-i.order),n}function hp(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);zo(e,i=>{hp(t,i,n)})}function qo(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Xf(e,n.length>0?n:void 0)}zo(e,r=>{qo(t,r)})}function fp(t,e){const n=Is(up(t,e)),r=nc(t.transactionQueueTree_,e);return ly(r,i=>{ha(t,i)}),ha(t,r),ep(r,i=>{ha(t,i)}),n}function ha(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Xf(e,void 0):n.length=s+1,qn(t.eventQueue_,Is(e),i);for(let o=0;o<r.length;o++)yi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Py(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ku=function(t,e){const n=Ry(t),r=n.namespace;n.domain==="firebase.com"&&Un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||B1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ff(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Se(n.pathString)}},Ry=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=Ay(t.substring(d,h)));const u=Py(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ny=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Yu.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Yu.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class Oy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:Ef(this._path)}get ref(){return new gr(this._repo,this._path)}get _queryIdentifier(){const e=Ru(this._queryParams),n=Rl(e);return n==="{}"?"default":n}get _queryObject(){return Ru(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof Ts))return!1;const n=this._repo===e._repo,r=Dl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+A0(this._path)}}function My(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function $y(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===kr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Dr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==ur)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Le){if(e!=null&&!Vu(e)||n!=null&&!Vu(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(x(t.getIndex()instanceof Fl||t.getIndex()===Rf,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class gr extends Ts{constructor(e,n){super(e,n,new Ul,!1)}get parent(){const e=If(this._path);return e===null?null:new gr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _o{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),r=os(this.ref,e);return new _o(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new _o(i,os(this.ref,r),Le)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uc(t,e){return t=ht(t),t._checkNotDeleted("ref"),e!==void 0?os(t._root,e):t._root}function os(t,e){return t=ht(t),ie(t._path)===null?fy("child","path",e):ic("child","path",e),new gr(t._repo,Ke(t._path,e))}function Fy(t,e){t=ht(t),ip("push",t._path),rp("push",e,t._path,!0);const n=ap(t._repo),r=Ny(n),i=os(t,r),s=os(t,r);let o;return e!=null?o=zy(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function zy(t,e){t=ht(t),ip("set",t._path),rp("set",e,t._path,!1);const n=new Ao;return Ey(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class dc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ly("value",this,new _o(e.snapshotNode,new gr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Oy(this,e,n):null}matches(e){return e instanceof dc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Uy(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,h)=>{Wa(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Dy(n,s||void 0),a=new dc(o);return Iy(t._repo,t,a),()=>Wa(t._repo,t,a)}function pp(t,e,n,r){return Uy(t,"value",e,n,r)}function mp(t,e,n){Wa(t._repo,t,null)}class vp{}class qy extends vp{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ts(e._repo,e._path,J0(e._queryParams,this._limit),e._orderByCalled)}}function jy(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new qy(t)}class Hy extends vp{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){My(e,"orderByChild");const n=new Se(this._path);if(se(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Fl(n),i=X0(e._queryParams,r);return $y(i),new Ts(e._repo,e._path,i,!0)}}function Wy(t){return ic("orderByChild","path",t),new Hy(t)}function Vy(t,...e){let n=ht(t);for(const r of e)n=r._apply(n);return n}zw(gr);Vw(gr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="FIREBASE_DATABASE_EMULATOR_HOST",Va={};let Gy=!1;function Ky(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=_i(s);t.repoInfo_=new ff(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Yy(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ku(s,i),a=o.repoInfo,l;typeof process<"u"&&fu&&(l=fu[By]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ku(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new r0(t.name,t.options,e);py("Invalid Firebase Database URL",o),se(o.path)||Un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Jy(a,t,c,new n0(t,n));return new Xy(d,t)}function Qy(t,e){const n=Va[e];(!n||n[t.key]!==t)&&Un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ty(t),delete n[t.key]}function Jy(t,e,n,r){let i=Va[e.name];i||(i={},Va[e.name]=i);let s=i[t.toURLString()];return s&&Un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new by(t,Gy,n,r),i[t.toURLString()]=s,s}class Xy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gr(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Un("Cannot call "+e+" on a deleted database.")}}function Zy(t=ph(),e){const n=wl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=qv("database");r&&eE(n,...r)}return n}function eE(t,e,n,r={}){t=ht(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Nr(r,s.repoInfo_.emulatorOptions))return;Un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ms(Ms.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:jv(r.mockUserToken,t.app.options.projectId);o=new Ms(a)}_i(e)&&(ah(e),lh("Database",!0)),Ky(s,i,r,o)}/**
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
 */function tE(t){U1(bi),ui(new Lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Yy(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),or(pu,mu,t),or(pu,mu,"esm2020")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tE();const nE={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"},gp=fh(nE),as=F1(gp),hc=Zy(gp);var rE=O('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),iE=O('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),sE=O('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),oE=O('<h3 class="post-title svelte-1t1odzy"> </h3>'),aE=O('<p class="post-text svelte-1t1odzy"> </p>'),lE=O('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),cE=O('<div class="posts svelte-1t1odzy"></div>'),uE=O('<div class="post-list-container svelte-1t1odzy"><!></div>');const dE={hash:"svelte-1t1odzy",code:`
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
  }`};function hE(t,e){Me(e,!0),Ue(t,dE);let n=zt(e,"path",7,"posts"),r=zt(e,"limit",7,"10"),i=le(Ut([])),s=le(!0),o=le(""),a=null;ps(()=>{l()}),Av(()=>{c()});function l(){try{a=uc(hc,n()),pp(a,S=>{const R=S.val();R?A(i,Object.entries(R).map(([N,P])=>({id:N,...P})).sort((N,P)=>(P.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(r())),!0):A(i,[],!0),A(s,!1),A(o,"")},S=>{console.error("데이터 읽기 오류:",S),A(o,"데이터를 불러오는 중 오류가 발생했습니다."),A(s,!1)})}catch(S){console.error("구독 설정 오류:",S),A(o,"데이터베이스 연결에 실패했습니다."),A(s,!1)}}function c(){a&&mp(a)}function d(S){const R=new CustomEvent("post-click",{detail:{post:S},bubbles:!0,composed:!0});dispatchEvent(R)}function h(S,R){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),d(R))}function u(S){if(!S)return"";const R=typeof S=="string"?Number(S):S,N=new Date(R),T=new Date().getTime()-N.getTime(),I=Math.floor(T/6e4),w=Math.floor(T/36e5),L=Math.floor(T/864e5);return I<1?"방금 전":I<60?`${I}분 전`:w<24?`${w}시간 전`:L<7?`${L}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var m={get path(){return n()},set path(S="posts"){n(S),Pt()},get limit(){return r()},set limit(S="10"){r(S),Pt()}},v=uE(),b=p(v);{var E=S=>{var R=rE();y(S,R)},k=S=>{var R=me(),N=ee(R);{var P=I=>{var w=iE(),L=p(w),M=p(L,!0);f(L),f(w),G(()=>C(M,g(o))),y(I,w)},T=I=>{var w=me(),L=ee(w);{var M=$=>{var B=sE();y($,B)},F=$=>{var B=cE();Nt(B,21,()=>g(i),ne=>ne.id,(ne,q)=>{var z=lE();z.__click=()=>d(g(q)),z.__keydown=ge=>h(ge,g(q));var Y=p(z),V=p(Y),j=p(V),ae=p(j,!0);f(j);var Q=_(j,2),_e=p(Q,!0);f(Q),f(V),f(Y);var de=_(Y,2),fe=p(de);{var U=ge=>{var Z=oE(),Re=p(Z,!0);f(Z),G(()=>C(Re,g(q).title)),y(ge,Z)};K(fe,ge=>{g(q).title&&ge(U)})}var J=_(fe,2);{var he=ge=>{var Z=aE(),Re=p(Z,!0);f(Z),G(()=>C(Re,g(q).content)),y(ge,Z)};K(J,ge=>{g(q).content&&ge(he)})}f(de);var ye=_(de,2),ve=p(ye),re=p(ve);f(ve);var we=_(ve,2),xe=p(we);f(we),f(ye),f(z),G(ge=>{ze(z,"aria-label",`게시물: ${(g(q).title||g(q).content||"제목 없음")??""}`),C(ae,g(q).author||"익명"),C(_e,ge),C(re,`👍 ${(g(q).likes||0)??""}`),C(xe,`💬 ${(g(q).comments?.length||0)??""}`)},[()=>u(g(q).timestamp)]),y(ne,z)}),f(B),y($,B)};K(L,$=>{g(i).length===0?$(M):$(F,!1)},!0)}y(I,w)};K(N,I=>{g(o)?I(P):I(T,!1)},!0)}y(S,R)};K(b,S=>{g(s)?S(E):S(k,!1)})}return f(v),y(t,v),$e(m)}st(["click","keydown"]);customElements.define("post-list",te(hE,{path:{},limit:{}},[],[],!0));Im();/**
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
 */const fE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var pE=ov("<svg><!><!></svg>");function Qe(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]),r=We(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Me(e,!1);let i=zt(e,"name",12,void 0),s=zt(e,"color",12,"currentColor"),o=zt(e,"size",12,24),a=zt(e,"strokeWidth",12,2),l=zt(e,"absoluteStrokeWidth",12,!1),c=zt(e,"iconNode",28,()=>[]);const d=(...b)=>b.filter((E,k,S)=>!!E&&S.indexOf(E)===k).join(" ");var h={get name(){return i()},set name(b){i(b),Pt()},get color(){return s()},set color(b){s(b),Pt()},get size(){return o()},set size(b){o(b),Pt()},get strokeWidth(){return a()},set strokeWidth(b){a(b),Pt()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),Pt()},get iconNode(){return c()},set iconNode(b){c(b),Pt()}};Dt();var u=pE();Pc(u,(b,E)=>({...fE,...r,width:o(),height:o(),stroke:s(),"stroke-width":b,class:E}),[()=>(Kr(l()),Kr(a()),Kr(o()),wn(()=>l()?Number(a())*24/Number(o()):a())),()=>(Kr(i()),Kr(n),wn(()=>d("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var m=p(u);Nt(m,1,c,er,(b,E)=>{var k=va(()=>Yp(g(E),2));let S=()=>g(k)[0],R=()=>g(k)[1];var N=me(),P=ee(N);dv(P,S,!0,(T,I)=>{Pc(T,()=>({...R()}))}),y(b,N)});var v=_(m);return Ve(v,e,"default",{}),f(u),y(t,u),$e(h)}te(Qe,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function _p(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Qe(t,et({name:"book-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(_p,{},["default"],[],!0);function Ba(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Qe(t,et({name:"check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ba,{},["default"],[],!0);function fc(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Qe(t,et({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(fc,{},["default"],[],!0);function Ga(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Qe(t,et({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ga,{},["default"],[],!0);function Ka(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Qe(t,et({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ka,{},["default"],[],!0);function Ya(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Qe(t,et({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ya,{},["default"],[],!0);function pc(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Qe(t,et({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(pc,{},["default"],[],!0);function bp(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Qe(t,et({name:"house"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(bp,{},["default"],[],!0);function Ni(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Qe(t,et({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ni,{},["default"],[],!0);function wp(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Qe(t,et({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(wp,{},["default"],[],!0);function yp(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Qe(t,et({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(yp,{},["default"],[],!0);function Li(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Qe(t,et({name:"menu"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Li,{},["default"],[],!0);function tr(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Qe(t,et({name:"message-circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(tr,{},["default"],[],!0);function Ep(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];Qe(t,et({name:"phone"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ep,{},["default"],[],!0);function Cp(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];Qe(t,et({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Cp,{},["default"],[],!0);function Ip(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Qe(t,et({name:"trending-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(Ip,{},["default"],[],!0);function xr(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Qe(t,et({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(xr,{},["default"],[],!0);function ls(t,e){const n=We(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Qe(t,et({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=me(),a=ee(o);Ve(a,e,"default",{}),y(i,o)},$$slots:{default:!0}}))}te(ls,{},["default"],[],!0);var mE=O("<option> </option>"),vE=O('<div class="error-message svelte-1e01td3"> </div>'),gE=O('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),_E=O("<!> 인증 코드 전송",1),bE=O('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),wE=O('<div class="error-message svelte-1e01td3"> </div>'),yE=O('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),EE=O("<!> 로그인",1),CE=O('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),IE=O('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const TE={hash:"svelte-1e01td3",code:`\r
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
  }`};function SE(t,e){Me(e,!0),Ue(t,TE);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=le("+82"),i=le(""),s=le(""),o=le("phone"),a=le(!1),l=le(""),c=le(null),d=le(null),h=le(void 0),u=le(null);function m(){return new Promise((w,L)=>{try{if(!g(u)){const M=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M);return}if(g(c)){if(g(h)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(g(h)),console.log("reCAPTCHA reset completed"),w(g(h));return}catch(M){console.warn("Failed to reset reCAPTCHA:",M)}try{g(c).clear(),A(c,null),A(h,void 0)}catch(M){console.warn("Failed to clear reCAPTCHA:",M)}}A(c,new Fb(as,g(u).id,{size:"invisible",callback:M=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&g(h)!==void 0?window.grecaptcha.reset(g(h)):m()}}),!0),g(c).render().then(M=>{A(h,M,!0),console.log("reCAPTCHA rendered with widgetId:",M),w(M)}).catch(M=>{console.error("Failed to render reCAPTCHA:",M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M)})}catch(M){console.error("reCAPTCHA 초기화 실패:",M),A(l,"reCAPTCHA 초기화에 실패했습니다."),L(M)}})}ps(()=>{const w=document.createElement("div");return w.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),w.className="recaptcha-container-light-dom",w.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(w),A(u,w,!0),m(),()=>{w&&w.parentNode&&w.parentNode.removeChild(w)}});function v(w){return/^[0-9]{6,15}$/.test(w)}async function b(){if(A(l,""),!v(g(i))){A(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}A(a,!0);try{const w=`${g(r)}${g(i)}`;console.log("Sending verification code to:",w),A(d,await qb(as,w,g(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),A(o,"code")}catch(w){console.error("SMS 전송 실패:",w),w.code==="auth/invalid-phone-number"?A(l,"잘못된 전화번호 형식입니다."):w.code==="auth/too-many-requests"?A(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):A(l,`SMS 전송 실패: ${w.message}`)}finally{A(a,!1)}}async function E(){if(A(l,""),g(s).length!==6){A(l,"6자리 인증 코드를 입력해주세요.");return}A(a,!0);try{const w=await g(d).confirm(g(s));console.log("Login successful:",w.user);const L=new CustomEvent("login-success",{detail:{user:w.user,phoneNumber:w.user.phoneNumber}});dispatchEvent(L),A(i,""),A(s,""),A(o,"phone")}catch(w){console.error("인증 코드 확인 실패:",w),w.code==="auth/invalid-verification-code"?A(l,"잘못된 인증 코드입니다."):w.code==="auth/code-expired"?A(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):A(l,`인증 실패: ${w.message}`);const L=new CustomEvent("login-error",{detail:{error:w.message}});dispatchEvent(L)}finally{A(a,!1)}}function k(){A(o,"phone"),A(s,""),A(l,"")}var S=IE(),R=p(S),N=p(R);{var P=w=>{var L=bE(),M=p(L),F=p(M);Ep(F,{class:"icon-large"}),vn(4),f(M);var $=_(M,2),B=_(p($),2);Nt(B,21,()=>n,er,(U,J)=>{var he=mE(),ye=p(he);f(he);var ve={};G(()=>{C(ye,`${g(J).flag??""} ${g(J).name??""} (${g(J).code??""})`),ve!==(ve=g(J).code)&&(he.value=(he.__value=g(J).code)??"")}),y(U,he)}),f(B),f($);var ne=_($,2),q=_(p(ne),2),z=p(q),Y=p(z,!0);f(z);var V=_(z,2);Gs(V),f(q),vn(2),f(ne);var j=_(ne,2);{var ae=U=>{var J=vE(),he=p(J,!0);f(J),G(()=>C(he,g(l))),y(U,J)};K(j,U=>{g(l)&&U(ae)})}var Q=_(j,2);Q.__click=b;var _e=p(Q);{var de=U=>{var J=gE();vn(),y(U,J)},fe=U=>{var J=_E(),he=ee(J);Cp(he,{class:"btn-icon"}),vn(),y(U,J)};K(_e,U=>{g(a)?U(de):U(fe,!1)})}f(Q),f(L),G(()=>{B.disabled=g(a),C(Y,g(r)),V.disabled=g(a),Q.disabled=g(a)||!g(i)}),Gd(B,()=>g(r),U=>A(r,U)),Vs("keypress",V,U=>{U.key==="Enter"&&(U.preventDefault(),b())}),Ks(V,()=>g(i),U=>A(i,U)),y(w,L)},T=w=>{var L=me(),M=ee(L);{var F=$=>{var B=CE(),ne=p(B),q=p(ne);Ba(q,{class:"icon-large"});var z=_(q,4),Y=p(z);vn(2),f(z),f(ne);var V=_(ne,2),j=_(p(V),2);Gs(j),vn(2),f(V);var ae=_(V,2);{var Q=re=>{var we=wE(),xe=p(we,!0);f(we),G(()=>C(xe,g(l))),y(re,we)};K(ae,re=>{g(l)&&re(Q)})}var _e=_(ae,2),de=p(_e);de.__click=k;var fe=_(de,2);fe.__click=E;var U=p(fe);{var J=re=>{var we=yE();vn(),y(re,we)},he=re=>{var we=EE(),xe=ee(we);Ba(xe,{class:"btn-icon"}),vn(),y(re,we)};K(U,re=>{g(a)?re(J):re(he,!1)})}f(fe),f(_e);var ye=_(_e,2),ve=_(p(ye));ve.__click=k,f(ye),f(B),G(()=>{C(Y,`${g(r)??""}${g(i)??""}로 전송된`),j.disabled=g(a),de.disabled=g(a),fe.disabled=g(a)||g(s).length!==6}),Vs("keypress",j,re=>{re.key==="Enter"&&(re.preventDefault(),E())}),Ks(j,()=>g(s),re=>A(s,re)),y($,B)};K(M,$=>{g(o)==="code"&&$(F)},!0)}y(w,L)};K(N,w=>{g(o)==="phone"?w(P):w(T,!1)})}var I=_(N,2);Xd(I,w=>A(u,w),()=>g(u)),f(R),f(S),y(t,S),$e()}st(["click"]);customElements.define("phone-login",te(SE,{},[],[],!0));const jo=xo(null),kE=xo(!0);vb(as,t=>{jo.set(t),kE.set(!1)});async function xE(){try{return await gb(as),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}const AE={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}"},PE={프로젝트_명칭:"한바보 0.2",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}"},RE={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}"},NE={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}"},fa={en:AE,ko:PE,ja:RE,zh:NE};function Qa(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Tp(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Qa(e);if(n!=="en")return n}return"en"}function LE(t){let e=Qa(t)||Tp();function n(s){e=Qa(s)}function r(){return e}function i(s,o={}){return((fa[e]??fa.en)[s]??fa.en[s]??s).replace(/\{(\w+)\}/g,(c,d)=>o[d]??"")}return{t:i,setLocale:n,getLocale:r}}const Sp=Tp(),OE=LE(Sp),DE=xo(Sp),Wr=yv(DE,t=>(e,n={})=>OE.t(e,n));var ME=O("<span> </span>"),$E=O('<img alt="프로필" class="avatar-image svelte-38psow"/>'),FE=O('<div class="avatar-fallback svelte-38psow"> </div>'),zE=O('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'),UE=O('<img class="avatar-image svelte-38psow"/>'),qE=O('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),jE=O('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),HE=O('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),WE=O('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');const VE={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function BE(t,e){Me(e,!0),Ue(t,VE);const n=()=>yn(jo,"$user",i),r=()=>yn(Wr,"$t",i),[i,s]=qr();let o=le(!1),a=le(null);function l(){g(a)&&(g(a).classList.remove("logo-animate-active"),g(a).offsetWidth,g(a).classList.add("logo-animate-active"),setTimeout(()=>{g(a)?.classList.remove("logo-animate-active")},600))}async function c(){if((await xE()).success){const T=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(T)}A(o,!1)}function d(){return n()?.displayName?n().displayName.charAt(0).toUpperCase():n()?.email?n().email.charAt(0).toUpperCase():"U"}function h(){A(o,!g(o))}function u(P){const T=document.querySelector(".dropdown-menu"),I=document.querySelector(".dropdown-trigger");T&&!T.contains(P.target)&&!I?.contains(P.target)&&A(o,!1)}ps(()=>{const P=setTimeout(()=>{l()},500),T=setInterval(()=>{l()},1e4);return document.addEventListener("click",u),()=>{clearTimeout(P),clearInterval(T),document.removeEventListener("click",u)}});var m=WE(),v=p(m),b=p(v),E=p(b);Nt(E,5,()=>r()("프로젝트_명칭").split(""),er,(P,T,I)=>{var w=ME();Zt(w,1,`logo-char logo-char-${I+1}`,"svelte-38psow");var L=p(w,!0);f(w),G(()=>C(L,g(T))),y(P,w)}),f(E),f(b),Xd(b,P=>A(a,P),()=>g(a));var k=_(b,2),S=p(k);{var R=P=>{var T=jE(),I=ee(T),w=p(I),L=p(w);Ni(L,{size:16});var M=_(L,2),F=p(M,!0);f(M),f(w);var $=_(w,2),B=p($);tr(B,{size:16});var ne=_(B,2),q=p(ne,!0);f(ne),f($);var z=_($,2),Y=p(z);ls(Y,{size:16});var V=_(Y,2),j=p(V,!0);f(V),f(z);var ae=_(z,2),Q=p(ae);Q.__click=h;var _e=p(Q),de=p(_e);{var fe=Ee=>{var Ce=$E();G(()=>ze(Ce,"src",n().photoURL)),y(Ee,Ce)},U=Ee=>{var Ce=FE(),Ge=p(Ce,!0);f(Ce),G(qe=>C(Ge,qe),[d]),y(Ee,Ce)};K(de,Ee=>{n()?.photoURL?Ee(fe):Ee(U,!1)})}f(_e);var J=_(_e,2),he=p(J,!0);f(J),f(Q);var ye=_(Q,2);{var ve=Ee=>{var Ce=zE(),Ge=p(Ce),qe=p(Ge,!0);f(Ge);var _t=_(Ge,4),Bt=p(_t);xr(Bt,{size:16});var Gt=_(Bt,2),Kt=p(Gt,!0);f(Gt),f(_t);var ot=_(_t,4);ot.__click=c;var Oe=p(ot);yp(Oe,{size:16});var pe=_(Oe,2),Pe=p(pe,!0);f(pe),f(ot),f(Ce),G((Ne,Fe,bt)=>{C(qe,Ne),C(Kt,Fe),C(Pe,bt)},[()=>r()("내계정"),()=>r()("프로필수정"),()=>r()("로그아웃")]),y(Ee,Ce)};K(ye,Ee=>{g(o)&&Ee(ve)})}f(ae);var re=_(ae,2),we=p(re);Li(we,{size:24}),f(re),f(I);var xe=_(I,2),ge=p(xe),Z=p(ge);Ni(Z,{size:20}),f(ge);var Re=_(ge,2),Be=p(Re);ls(Be,{size:20}),f(Re);var tt=_(Re,2),xt=p(tt);tr(xt,{size:20}),f(tt);var ft=_(tt,2),Wt=p(ft),dn=p(Wt);{var Vn=Ee=>{var Ce=UE();G(Ge=>{ze(Ce,"src",n().photoURL),ze(Ce,"alt",Ge)},[()=>r()("프로필")]),y(Ee,Ce)},hn=Ee=>{var Ce=qE(),Ge=p(Ce,!0);f(Ce),G(qe=>C(Ge,qe),[d]),y(Ee,Ce)};K(dn,Ee=>{n()?.photoURL?Ee(Vn):Ee(hn,!1)})}f(Wt),f(ft);var gt=_(ft,2),Vt=p(gt);Li(Vt,{size:24}),f(gt),f(xe),G((Ee,Ce,Ge,qe,_t,Bt,Gt,Kt,ot)=>{C(F,Ee),C(q,Ce),C(j,Ge),C(he,n()?.displayName||n()?.email),ze(re,"title",qe),ze(ge,"title",_t),ze(Re,"title",Bt),ze(tt,"title",Gt),ze(ft,"title",Kt),ze(gt,"title",ot)},[()=>r()("포럼"),()=>r()("채팅"),()=>r()("사용자찾기"),()=>r()("메뉴"),()=>r()("포럼"),()=>r()("사용자찾기"),()=>r()("채팅"),()=>r()("프로필"),()=>r()("메뉴")]),y(P,T)},N=P=>{var T=HE(),I=ee(T),w=p(I),L=p(w);Ni(L,{size:16});var M=_(L,2),F=p(M,!0);f(M),f(w);var $=_(w,2),B=p($);tr(B,{size:16});var ne=_(B,2),q=p(ne,!0);f(ne),f($);var z=_($,2),Y=p(z,!0);f(z);var V=_(z,2),j=p(V);Li(j,{size:20}),f(V),f(I);var ae=_(I,2),Q=p(ae),_e=p(Q);Ni(_e,{size:20}),f(Q);var de=_(Q,2),fe=p(de);tr(fe,{size:20}),f(de);var U=_(de,2),J=p(U);xr(J,{size:20}),f(U);var he=_(U,2),ye=p(he);Li(ye,{size:24}),f(he),f(ae),G((ve,re,we,xe,ge,Z,Re,Be)=>{C(F,ve),C(q,re),C(Y,we),ze(V,"title",xe),ze(Q,"title",ge),ze(de,"title",Z),ze(U,"title",Re),ze(he,"title",Be)},[()=>r()("포럼"),()=>r()("채팅"),()=>r()("로그인"),()=>r()("메뉴"),()=>r()("포럼"),()=>r()("채팅"),()=>r()("로그인"),()=>r()("메뉴")]),y(P,T)};K(S,P=>{n()?P(R):P(N,!1)})}f(k),f(v),f(m),y(t,m),$e(),s()}st(["click"]);customElements.define("sns-topbar",te(BE,{},[],[],!0));var GE=O('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),KE=O('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),YE=O('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const QE={hash:"svelte-najsij",code:`\r
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
  }`};function JE(t,e){Me(e,!1),Ue(t,QE);const n=()=>yn(Wr,"$t",i),r=()=>yn(jo,"$user",i),[i,s]=qr();Dt();var o=YE(),a=p(o),l=p(a),c=p(l,!0);f(l);var d=_(l,2),h=p(d),u=p(h);bp(u,{size:20});var m=_(u,2),v=p(m,!0);f(m),f(h);var b=_(h,2),E=p(b);tr(E,{size:20});var k=_(E,2),S=p(k,!0);f(k),f(b);var R=_(b,2),N=p(R);ls(N,{size:20});var P=_(N,2),T=p(P,!0);f(P),f(R);var I=_(R,2),w=p(I);xr(w,{size:20});var L=_(w,2),M=p(L,!0);f(L),f(I);var F=_(I,2),$=p(F);pc($,{size:20});var B=_($,2),ne=p(B,!0);f(B),f(F),f(d);var q=_(d,4),z=p(q),Y=p(z,!0);f(z);var V=_(z,2),j=p(V);{var ae=Oe=>{var pe=GE(),Pe=p(pe);xr(Pe,{size:16});var Ne=_(Pe,2),Fe=p(Ne,!0);f(Ne),f(pe),G(bt=>C(Fe,bt),[()=>n()("회원정보수정")]),y(Oe,pe)},Q=Oe=>{var pe=KE(),Pe=ee(pe),Ne=p(Pe);wp(Ne,{size:16});var Fe=_(Ne,2),bt=p(Fe,!0);f(Fe),f(Pe);var Mt=_(Pe,2),Yt=p(Mt);xr(Yt,{size:16});var fn=_(Yt,2),pn=p(fn,!0);f(fn),f(Mt),G(($t,wt)=>{C(bt,$t),C(pn,wt)},[()=>n()("로그인"),()=>n()("회원가입")]),y(Oe,pe)};K(j,Oe=>{r()?Oe(ae):Oe(Q,!1)})}f(V),f(q);var _e=_(q,4),de=p(_e),fe=p(de);ls(fe,{size:16});var U=_(fe,2),J=p(U,!0);f(U),f(de);var he=_(de,2),ye=_(p(he),2),ve=p(ye,!0);f(ye);var re=_(ye,2);Ya(re,{size:12,class:"external-icon"}),f(he);var we=_(he,2),xe=p(we);tr(xe,{size:16});var ge=_(xe,2),Z=p(ge,!0);f(ge);var Re=_(ge,2);Ya(Re,{size:12,class:"external-icon"}),f(we);var Be=_(we,2),tt=p(Be);_p(tt,{size:16});var xt=_(tt,2),ft=p(xt,!0);f(xt),f(Be),f(_e);var Wt=_(_e,2),dn=p(Wt),Vn=p(dn,!0);f(dn);var hn=_(dn,2),gt=p(hn,!0);f(hn),f(Wt);var Vt=_(Wt,2),Ee=p(Vt),Ce=p(Ee),Ge=p(Ce,!0);f(Ce);var qe=_(Ce,2),_t=p(qe,!0);f(qe),f(Ee),f(Vt);var Bt=_(Vt,2),Gt=p(Bt),Kt=p(Gt,!0),ot=_(Kt,2);f(Gt),f(Bt),f(a),f(o),G((Oe,pe,Pe,Ne,Fe,bt,Mt,Yt,fn,pn,$t,wt,Tn,Sn,_r,Bn,br)=>{C(c,Oe),C(v,pe),C(S,Pe),C(T,Ne),C(M,Fe),C(ne,bt),C(Y,Mt),C(J,Yt),C(ve,fn),C(Z,pn),C(ft,$t),C(Vn,wt),C(gt,Tn),C(Ge,Sn),C(_t,_r),C(Kt,Bn),C(ot,` ${br??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어전환기능안내"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),y(t,o),$e(),s()}customElements.define("sns-left-sidebar",te(JE,{},[],[],!0));var XE=O('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const ZE={hash:"svelte-3epon2",code:`\r
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
  }`};function eC(t,e){Me(e,!0),Ue(t,ZE);const n=()=>yn(Wr,"$t",r),[r,i]=qr();let s=le(Ut({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=XE(),a=p(o),l=p(a),c=p(l,!0);f(l);var d=_(l,2),h=p(d),u=p(h),m=p(u);xr(m,{size:20}),f(u);var v=_(u,2),b=p(v),E=p(b,!0);f(b);var k=_(b,2),S=p(k,!0);f(k),f(v),f(h);var R=_(h,2),N=p(R),P=p(N);Ip(P,{size:20}),f(N);var T=_(N,2),I=p(T),w=p(I,!0);f(I);var L=_(I,2),M=p(L,!0);f(L),f(T),f(R);var F=_(R,2),$=p(F),B=p($);pc(B,{size:20}),f($);var ne=_($,2),q=p(ne),z=p(q,!0);f(q);var Y=_(q,2),V=p(Y,!0);f(Y);var j=_(Y,2),ae=p(j,!0);f(j),f(ne),f(F);var Q=_(F,2),_e=p(Q),de=p(_e);tr(de,{size:20}),f(_e);var fe=_(_e,2),U=p(fe),J=p(U,!0);f(U);var he=_(U,2),ye=p(he,!0);f(he),f(fe),f(Q),f(d);var ve=_(d,2),re=p(ve,!0);f(ve),f(a),f(o),G((we,xe,ge,Z,Re,Be,tt)=>{C(c,we),C(E,xe),C(S,g(s).totalUsers),C(w,ge),C(M,g(s).totalScore),C(z,Z),C(V,g(s).totalPosts),C(ae,Re),C(J,Be),C(ye,g(s).totalMessages),C(re,tt)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),y(t,o),$e(),i()}customElements.define("sns-right-sidebar",te(eC,{},[],[],!0));var tC=O('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const nC={hash:"svelte-um1xbq",code:`\r
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
  }`};function rC(t,e){Ue(t,nC);var n=tC(),r=p(n),i=_(r,2),s=p(i);Zt(s,1,"left-sidebar svelte-um1xbq");var o=_(s,2),a=p(o);Ve(a,e,"default",{}),f(o);var l=_(o,2);Zt(l,1,"right-sidebar svelte-um1xbq"),f(i),f(n),y(t,n)}customElements.define("sns-layout",te(rC,{},["default"],[],!0));var iC=O('<div class="icon-container svelte-m3h71q"> </div>'),sC=O('<p class="hint-box svelte-m3h71q"> </p>'),oC=O('<p class="gpl-box svelte-m3h71q"> </p>'),aC=O('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),lC=O('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),cC=O('<div class="accordion svelte-m3h71q"></div>');const uC={hash:"svelte-m3h71q",code:`\r
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
  }`};function dC(t,e){Me(e,!0),Ue(t,uC);let n=zt(e,"items",7,"[]"),r=zt(e,"type",7,"single"),i=zt(e,"collapsible",7,!0),s=va(()=>{try{const u=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=va(()=>()=>{const u=i();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=le(Ut(new Set));function l(u){const m=new Set(g(a));r()==="single"?m.has(u)?g(o)&&m.delete(u):(m.clear(),m.add(u)):m.has(u)?m.delete(u):m.add(u),A(a,m,!0)}function c(u){return g(a).has(u)}var d={get items(){return n()},set items(u="[]"){n(u),Pt()},get type(){return r()},set type(u="single"){r(u),Pt()},get collapsible(){return i()},set collapsible(u=!0){i(u),Pt()}},h=cC();return Nt(h,21,()=>g(s),er,(u,m,v)=>{var b=lC(),E=p(b);E.__click=()=>l(v);var k=p(E),S=p(k);{var R=F=>{var $=iC(),B=p($,!0);f($),G(()=>C(B,g(m).icon)),y(F,$)};K(S,F=>{g(m).icon&&F(R)})}var N=_(S,2),P=p(N,!0);f(N),f(k);var T=_(k,2);let I;var w=p(T);fc(w,{size:20}),f(T),f(E);var L=_(E,2);{var M=F=>{var $=aC(),B=p($),ne=p(B,!0);f(B);var q=_(B,2);{var z=j=>{var ae=sC(),Q=p(ae,!0);f(ae),G(()=>C(Q,g(m).hint)),y(j,ae)};K(q,j=>{g(m).hint&&j(z)})}var Y=_(q,2);{var V=j=>{var ae=oC(),Q=p(ae,!0);f(ae),G(()=>C(Q,g(m).gpl)),y(j,ae)};K(Y,j=>{g(m).gpl&&j(V)})}f($),G(()=>C(ne,g(m).content)),y(F,$)};K(L,F=>{c(v)&&F(M)})}f(b),G((F,$)=>{ze(E,"aria-expanded",F),C(P,g(m).title),I=Zt(T,1,"chevron svelte-m3h71q",null,I,$)},[()=>c(v),()=>({"rotate-180":c(v)})]),y(u,b)}),f(h),y(t,h),$e(d)}st(["click"]);customElements.define("sns-accordion",te(dC,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var hC=O('<div class="gpl-badge svelte-1ubq0t6"> </div>'),fC=O('<div class="hint svelte-1ubq0t6"> </div>'),pC=O('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),mC=O('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),vC=O('<div class="todo-description svelte-1ubq0t6"> </div>'),gC=O('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),_C=O('<div class="todo-subitems svelte-1ubq0t6"></div>'),bC=O('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),wC=O('<span class="badge svelte-1ubq0t6"> </span>'),yC=O('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const EC={hash:"svelte-1ubq0t6",code:`\r
  /* 홈 컨테이너 */.home.svelte-1ubq0t6 {max-width:100%;padding:0;}\r
\r
  /* Vibe 배너 */.vibe-banner.svelte-1ubq0t6 {display:inline-block;margin-bottom:1.5rem;padding:0.5rem 1rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:9999px;box-shadow:0 4px 6px rgba(102, 126, 234, 0.3);}.vibe-text.svelte-1ubq0t6 {color:white;font-size:0.875rem;font-weight:500;}\r
\r
  /* 히어로 섹션 */.hero-section.svelte-1ubq0t6 {margin-bottom:3rem;}\r
\r
  /* 기술 스택 섹션 */.techstack-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);border:1px solid #d1d5db;}.techstack-grid.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:flex-start;}.techstack-item.svelte-1ubq0t6 {display:flex;flex-direction:column;align-items:center;text-align:center;padding:0.75rem 0.875rem;background:white;border-radius:0.5rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;border:1px solid #f0f0f0;flex:0 1 auto;min-width:170px;}.techstack-item.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 3px 6px rgba(0, 0, 0, 0.08);border-color:#e5e7eb;}.techstack-icon.svelte-1ubq0t6 {font-size:1.75rem;margin-bottom:0.375rem;display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);}.techstack-icon.svelte-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);}.techstack-icon.flutter-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);}.techstack-icon.firebase-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);}.techstack-name.svelte-1ubq0t6 {font-size:0.9rem;font-weight:700;color:#111827;margin:0 0 0.125rem 0;}.techstack-description.svelte-1ubq0t6 {font-size:0.7rem;color:#6b7280;line-height:1.35;margin:0;}.hero-title.svelte-1ubq0t6 {font-size:2.5rem;font-weight:800;margin:0 0 1rem 0;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2;}.hero-description.svelte-1ubq0t6 {font-size:1.125rem;color:#6b7280;line-height:1.7;margin:0;}.hero-link.svelte-1ubq0t6 {color:#3b82f6;text-decoration:underline;font-weight:500;}.hero-link.svelte-1ubq0t6:hover {color:#2563eb;}\r
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
  }`};function kp(t,e){Me(e,!0),Ue(t,EC);const n=()=>yn(Wr,"$t",r),[r,i]=qr();let s=le(null);function o(Oe){A(s,g(s)===Oe?null:Oe,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var d=yC(),h=p(d),u=p(h),m=p(u);f(u),f(h);var v=_(h,2),b=p(v),E=p(b,!0);f(b);var k=_(b,2),S=p(k),R=_(S),N=p(R,!0);f(R);var P=_(R);f(k),f(v);var T=_(v,2),I=p(T),w=p(I,!0);f(I);var L=_(I,2),M=p(L),F=_(p(M),2),$=p(F,!0);f(F);var B=_(F,2),ne=p(B,!0);f(B),f(M);var q=_(M,2),z=_(p(q),2),Y=p(z,!0);f(z);var V=_(z,2),j=p(V,!0);f(V),f(q);var ae=_(q,2),Q=_(p(ae),2),_e=p(Q,!0);f(Q);var de=_(Q,2),fe=p(de,!0);f(de),f(ae),f(L),f(T);var U=_(T,2),J=p(U),he=p(J,!0);f(J);var ye=_(J,2);Nt(ye,21,()=>a,er,(Oe,pe)=>{var Pe=mC(),Ne=p(Pe);Ne.__click=()=>o(g(pe).id);var Fe=p(Ne),bt=p(Fe,!0);f(Fe);var Mt=_(Fe,2);let Yt;var fn=p(Mt);fc(fn,{size:20}),f(Mt),f(Ne);var pn=_(Ne,2);{var $t=wt=>{var Tn=pC(),Sn=p(Tn),_r=p(Sn,!0);f(Sn);var Bn=_(Sn,2);{var br=pt=>{var at=hC(),kn=p(at,!0);f(at),G(mn=>C(kn,mn),[()=>n()("home.aiTruth.item3.gpl")]),y(pt,at)};K(Bn,pt=>{g(pe).showGpl&&pt(br)})}var je=_(Bn,2);{var Qt=pt=>{var at=fC(),kn=p(at,!0);f(at),G(mn=>C(kn,mn),[()=>n()(g(pe).hintKey)]),y(pt,at)};K(je,pt=>{g(pe).hintKey&&pt(Qt)})}f(Tn),G(pt=>C(_r,pt),[()=>n()(g(pe).contentKey)]),y(wt,Tn)};K(pn,wt=>{g(s)===g(pe).id&&wt($t)})}f(Pe),G(wt=>{ze(Ne,"aria-expanded",g(s)===g(pe).id),C(bt,wt),Yt=Zt(Mt,1,"accordion-icon svelte-1ubq0t6",null,Yt,{open:g(s)===g(pe).id})},[()=>n()(g(pe).titleKey)]),y(Oe,Pe)}),f(ye),f(U);var ve=_(U,2),re=p(ve),we=p(re,!0);f(re);var xe=_(re,2);Nt(xe,21,()=>l,er,(Oe,pe)=>{var Pe=bC(),Ne=p(Pe),Fe=p(Ne);let bt;var Mt=p(Fe);{var Yt=je=>{Ga(je,{size:20})},fn=je=>{Ka(je,{size:20})};K(Mt,je=>{g(pe).completed?je(Yt):je(fn,!1)})}f(Fe);var pn=_(Fe,2),$t=p(pn);let wt;var Tn=p($t,!0);f($t);var Sn=_($t,2);{var _r=je=>{var Qt=vC(),pt=p(Qt,!0);f(Qt),G(at=>C(pt,at),[()=>n()(g(pe).descriptionKey)]),y(je,Qt)};K(Sn,je=>{g(pe).descriptionKey&&je(_r)})}f(pn),f(Ne);var Bn=_(Ne,2);{var br=je=>{var Qt=_C();Nt(Qt,21,()=>g(pe).subitems,er,(pt,at)=>{var kn=gC(),mn=p(kn);let mc;var qp=p(mn);{var jp=Gn=>{Ga(Gn,{size:16})},Hp=Gn=>{Ka(Gn,{size:16})};K(qp,Gn=>{g(at).completed?Gn(jp):Gn(Hp,!1)})}f(mn);var Ho=_(mn,2);let vc;var Wp=p(Ho,!0);f(Ho),f(kn),G(Gn=>{mc=Zt(mn,1,"todo-subicon svelte-1ubq0t6",null,mc,{completed:g(at).completed}),vc=Zt(Ho,1,"todo-subtext svelte-1ubq0t6",null,vc,{completed:g(at).completed}),C(Wp,Gn)},[()=>n()(g(at).key)]),y(pt,kn)}),f(Qt),y(je,Qt)};K(Bn,je=>{g(pe).subitems.length>0&&je(br)})}f(Pe),G(je=>{bt=Zt(Fe,1,"todo-icon svelte-1ubq0t6",null,bt,{completed:g(pe).completed}),wt=Zt($t,1,"todo-label svelte-1ubq0t6",null,wt,{completed:g(pe).completed}),C(Tn,je)},[()=>n()(g(pe).labelKey)]),y(Oe,Pe)}),f(xe),f(ve);var ge=_(ve,2),Z=p(ge),Re=p(Z,!0);f(Z);var Be=_(Z,2),tt=p(Be),xt=p(tt),ft=p(xt,!0);f(xt);var Wt=_(xt,1,!0);f(tt);var dn=_(tt,2);Nt(dn,21,()=>c,er,(Oe,pe)=>{var Pe=wC(),Ne=p(Pe,!0);f(Pe),G(Fe=>C(Ne,Fe),[()=>n()(g(pe))]),y(Oe,Pe)}),f(dn),f(Be),f(ge);var Vn=_(ge,2),hn=p(Vn),gt=p(hn,!0);f(hn);var Vt=_(hn,2),Ee=p(Vt),Ce=p(Ee,!0);f(Ee);var Ge=_(Ee,2),qe=p(Ge),_t=_(qe),Bt=p(_t,!0);f(_t);var Gt=_(_t,1,!0);f(Ge);var Kt=_(Ge,2),ot=p(Kt,!0);f(Kt),f(Vt),f(Vn),f(d),G((Oe,pe,Pe,Ne,Fe,bt,Mt,Yt,fn,pn,$t,wt,Tn,Sn,_r,Bn,br,je,Qt,pt,at,kn,mn)=>{C(m,`✨ ${Oe??""}`),C(E,pe),C(S,`${Pe??""} `),C(N,Ne),C(P,` ${Fe??""}`),C(w,bt),C($,Mt),C(ne,Yt),C(Y,fn),C(j,pn),C(_e,$t),C(fe,wt),C(he,Tn),C(we,Sn),C(Re,_r),C(ft,Bn),C(Wt,br),C(gt,je),C(Ce,Qt),C(qe,`${pt??""} `),C(Bt,at),C(Gt,kn),C(ot,mn)},[()=>n()("home.vibeBanner"),()=>n()("home.title"),()=>n()("home.description.part1"),()=>n()("home.description.linkText"),()=>n()("home.description.part2"),()=>n()("home.techStack.title"),()=>n()("home.techStack.svelte"),()=>n()("home.techStack.svelteDesc"),()=>n()("home.techStack.flutter"),()=>n()("home.techStack.flutterDesc"),()=>n()("home.techStack.firebase"),()=>n()("home.techStack.firebaseDesc"),()=>n()("home.aiTruth.title"),()=>n()("home.todo.title"),()=>n()("home.overview.title"),()=>n()("home.overview.brand"),()=>n()("home.overview.description"),()=>n()("home.aiChange.title"),()=>n()("home.aiChange.description"),()=>n()("home.aiChange.emphasis"),()=>n()("home.aiChange.highlight"),()=>n()("home.aiChange.conclusion"),()=>n()("home.aiChange.hint")]),y(t,d),$e(),i()}st(["click"]);te(kp,{},[],[],!0);var CC=O('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx">전화번호로 간편하게 로그인하세요.</p> <phone-login></phone-login></div>',2),IC=O('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx">환영합니다!</h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx">홈으로 이동</a></div>'),TC=O('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const SC={hash:"svelte-1mz53xx",code:`\r
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
  }`};function xp(t,e){Me(e,!1),Ue(t,SC);const n=()=>yn(jo,"$user",i),r=()=>yn(Wr,"$t",i),[i,s]=qr();function o(m){console.log("Login successful:",m.detail),alert(`로그인 성공!
전화번호: ${m.detail.phoneNumber}`),window.location.href="/"}function a(m){console.error("Login error:",m.detail),alert(`로그인 실패: ${m.detail.error}`)}Dt();var l=TC(),c=p(l),d=p(c);{var h=m=>{var v=CC(),b=p(v),E=p(b,!0);f(b);var k=_(b,4);f(v),G(S=>C(E,S),[()=>r()("로그인")]),Vs("login-success",k,o),Vs("login-error",k,a),y(m,v)},u=m=>{var v=IC(),b=_(p(v),2),E=p(b);f(b),vn(2),f(v),G(()=>C(E,`${n().phoneNumber??""}로 로그인하셨습니다.`)),y(m,v)};K(d,m=>{n()?m(u,!1):m(h)})}f(c),f(l),y(t,l),$e(),s()}te(xp,{},[],[],!0);var kC=O('<button class="menu-item svelte-163o8b2"> </button>'),xC=O('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><h2 class="menu-title svelte-163o8b2"> </h2> <p class="menu-description svelte-163o8b2">아래에서 이동할 페이지를 선택하세요</p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const AC={hash:"svelte-163o8b2",code:`\r
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
  }`};function Ap(t,e){Me(e,!1),Ue(t,AC);const n=()=>yn(Wr,"$t",r),[r,i]=qr();function s(u){window.history.pushState({},"",u),window.dispatchEvent(new PopStateEvent("popstate"))}const o=[{label:"홈",path:"/"},{label:"로그인",path:"/user/login"},{label:"사용자 프로필",path:"/user/profile"},{label:"게시물 목록",path:"/post/list"},{label:"게시물 상세 (예: ID:123)",path:"/post/detail/123"},{label:"채팅 목록",path:"/chat/list"},{label:"설정",path:"/settings"},{label:"앱 정보",path:"/about"},{label:"도움말",path:"/help"},{label:"이용 약관",path:"/terms"},{label:"개인정보 처리방침",path:"/privacy"},{label:"문의하기",path:"/contact"}];Dt();var a=xC(),l=p(a),c=p(l),d=p(c);f(c);var h=_(c,4);Nt(h,5,()=>o,u=>u.path,(u,m)=>{var v=kC();v.__click=()=>s(g(m).path);var b=p(v,!0);f(v),G(()=>C(b,g(m).label)),y(u,v)}),f(h),f(l),f(a),G(u=>C(d,`${u??""} - 메뉴`),[()=>n()("데모제목")]),y(t,a),$e(),i()}st(["click"]);te(Ap,{},[],[],!0);var PC=O('<div class="user-profile-container svelte-17u94r3"><div class="profile-card svelte-17u94r3"><h2 class="page-title svelte-17u94r3">사용자 프로필</h2> <div class="construction-content svelte-17u94r3"><div class="construction-icon svelte-17u94r3">🚧</div> <p class="construction-message svelte-17u94r3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-17u94r3">사용자 프로필 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-17u94r3">메뉴로 돌아가기</button></div></div>');const RC={hash:"svelte-17u94r3",code:`.user-profile-container.svelte-17u94r3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.profile-card.svelte-17u94r3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-17u94r3 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-17u94r3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-17u94r3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-17u94r3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-17u94r3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-17u94r3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-17u94r3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.profile-card.svelte-17u94r3 {padding:1.5rem;}.page-title.svelte-17u94r3 {font-size:1.25rem;}\r
  }`};function Pp(t,e){Me(e,!1),Ue(t,RC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=PC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Pp,{},[],[],!0);async function NC(t,e,n,r,i){try{const s=Date.now(),o={uid:e,title:r,content:i,author:n,category:t,createdAt:s,updatedAt:s},a=uc(hc,`forum/${t}/posts`);return{success:!0,postId:(await Fy(a,o)).key}}catch(s){return console.error("게시글 생성 실패:",s),{success:!1,error:s.message}}}function LC(t,e=10,n){try{const r=uc(hc,`forum/${t}/posts`),i=Vy(r,Wy("createdAt"),jy(e)),s=pp(i,o=>{if(o.exists()){const a=[];o.forEach(l=>{a.push({postId:l.key,...l.val()})}),a.reverse(),n(a)}else n([])});return()=>{mp(r)}}catch(r){return console.error("게시글 조회 실패:",r),n([]),()=>{}}}const Qu=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}];var OC=O('<div class="loading-screen svelte-1r1wwfo"><p>로딩 중...</p></div>'),DC=O("<button> </button>"),MC=O('<div class="empty-state svelte-1r1wwfo"><div class="empty-icon svelte-1r1wwfo">📝</div> <p class="empty-message svelte-1r1wwfo">게시글이 없습니다</p> <p class="empty-hint svelte-1r1wwfo">첫 번째 게시글을 작성해보세요!</p></div>'),$C=O('<div class="post-item svelte-1r1wwfo"><h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><span class="post-author svelte-1r1wwfo"> </span> <span class="post-date svelte-1r1wwfo"> </span></div></div>'),FC=O('<div class="posts-list svelte-1r1wwfo"></div>'),zC=O("<option> </option>"),UC=O('<div class="modal-backdrop svelte-1r1wwfo" role="presentation"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo">새 게시글 작성</h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo">카테고리</label> <select id="category" class="form-control svelte-1r1wwfo"><option>카테고리 선택</option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo">제목</label> <input id="title" type="text" placeholder="제목을 입력하세요" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo">내용</label> <textarea id="content" placeholder="내용을 입력하세요" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo">취소</button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),qC=O('<div class="post-list-container svelte-1r1wwfo"><div class="header svelte-1r1wwfo"><div class="header-content svelte-1r1wwfo"><h1 class="page-title svelte-1r1wwfo">게시판</h1> <p class="page-subtitle svelte-1r1wwfo">커뮤니티와 정보를 공유하세요</p></div> <button class="btn-create-post svelte-1r1wwfo">✏️ 글쓰기</button></div> <div class="category-tabs svelte-1r1wwfo"></div> <!></div> <!>',1);const jC={hash:"svelte-1r1wwfo",code:`\r
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
  }`};function Rp(t,e){Me(e,!0),Ue(t,jC);let n=le(null),r=le(""),i=le(!0);const s=new URLSearchParams(typeof window<"u"?window.location.search:"");let o=le(Ut(s.get("category")||"community")),a=le(!1),l=le(""),c=le(""),d=le(""),h=le(!1),u=le(Ut([]));ps(()=>{const P=as.onAuthStateChanged(async T=>{if(T){A(n,T.uid,!0);const I=T.displayName||T.email||"익명";A(r,I,!0)}else A(n,null),A(r,"");A(i,!1)});return()=>P()}),Hs(()=>{if(!g(i)){const P=LC(g(o),10,T=>{A(u,T,!0)});return()=>P()}});function m(){if(!g(n)){window.location.href="/user/login";return}A(a,!0)}function v(){A(a,!1),A(l,""),A(c,""),A(d,"")}async function b(){if(!g(l)){alert("카테고리를 선택해주세요.");return}if(!g(c).trim()){alert("제목을 입력해주세요.");return}if(!g(d).trim()){alert("내용을 입력해주세요.");return}if(!g(n)||!g(r)){alert("로그인 정보를 확인할 수 없습니다.");return}A(h,!0);try{const P=await NC(g(l),g(n),g(r),g(c),g(d));if(P.success){const T=g(l);A(a,!1),A(l,""),A(c,""),A(d,""),alert("게시글이 작성되었습니다.")}else alert(`게시글 저장 실패: ${P.error||"Unknown error"}`)}catch(P){console.error("게시글 저장 오류:",P),alert("게시글 저장 중 오류가 발생했습니다.")}finally{A(h,!1)}}function E(P){A(o,P,!0),window.history.pushState({},"",`/post/list?category=${P}`)}var k=me(),S=ee(k);{var R=P=>{var T=OC();y(P,T)},N=P=>{var T=qC(),I=ee(T),w=p(I),L=_(p(w),2);L.__click=m,f(w);var M=_(w,2);Nt(M,21,()=>Qu,z=>z.value,(z,Y)=>{var V=DC();V.__click=()=>E(g(Y).value);var j=p(V,!0);f(V),G(()=>{Zt(V,1,`tab ${g(o)===g(Y).value?"active":""}`,"svelte-1r1wwfo"),C(j,g(Y).label)}),y(z,V)}),f(M);var F=_(M,2);{var $=z=>{var Y=MC();y(z,Y)},B=z=>{var Y=FC();Nt(Y,21,()=>g(u),V=>V.postId,(V,j)=>{var ae=$C(),Q=p(ae),_e=p(Q,!0);f(Q);var de=_(Q,2),fe=p(de,!0);f(de);var U=_(de,2),J=p(U),he=p(J);f(J);var ye=_(J,2),ve=p(ye,!0);f(ye),f(U),f(ae),G(re=>{C(_e,g(j).title),C(fe,g(j).content),C(he,`작성자: ${g(j).author??""}`),C(ve,re)},[()=>new Date(g(j).createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),y(V,ae)}),f(Y),y(z,Y)};K(F,z=>{g(u).length===0?z($):z(B,!1)})}f(I);var ne=_(I,2);{var q=z=>{var Y=UC();Y.__click=()=>A(a,!1),Y.__keydown=Z=>Z.key==="Escape"&&A(a,!1);var V=p(Y);V.__click=Z=>Z.stopPropagation();var j=p(V),ae=_(p(j),2);ae.__click=()=>A(a,!1),f(j);var Q=_(j,2),_e=p(Q),de=_(p(_e),2),fe=p(de);fe.value=fe.__value="";var U=_(fe);Nt(U,17,()=>Qu,Z=>Z.value,(Z,Re)=>{var Be=zC(),tt=p(Be,!0);f(Be);var xt={};G(()=>{C(tt,g(Re).label),xt!==(xt=g(Re).value)&&(Be.value=(Be.__value=g(Re).value)??"")}),y(Z,Be)}),f(de),f(_e);var J=_(_e,2),he=_(p(J),2);Gs(he),f(J);var ye=_(J,2),ve=_(p(ye),2);$m(ve),f(ye),f(Q);var re=_(Q,2),we=p(re);we.__click=v;var xe=_(we,2);xe.__click=b;var ge=p(xe,!0);f(xe),f(re),f(V),f(Y),G(()=>{we.disabled=g(h),xe.disabled=g(h),C(ge,g(h)?"전송 중...":"전송")}),Gd(de,()=>g(l),Z=>A(l,Z)),Ks(he,()=>g(c),Z=>A(c,Z)),Ks(ve,()=>g(d),Z=>A(d,Z)),y(z,Y)};K(ne,z=>{g(a)&&z(q)})}y(P,T)};K(S,P=>{g(i)?P(R):P(N,!1)})}y(t,k),$e()}st(["click","keydown"]);te(Rp,{},[],[],!0);var HC=O('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><h2 class="page-title svelte-1sszjx6">게시물 상세</h2> <div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1sszjx6">게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1sszjx6">메뉴로 돌아가기</button></div></div>');const WC={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1sszjx6 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}.page-title.svelte-1sszjx6 {font-size:1.25rem;}\r
  }`};function Np(t,e){Me(e,!1),Ue(t,WC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=HC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Np,{},[],[],!0);var VC=O('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><h2 class="page-title svelte-1xfn8v9">채팅 목록</h2> <div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1xfn8v9">채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1xfn8v9">메뉴로 돌아가기</button></div></div>');const BC={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1xfn8v9 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}.page-title.svelte-1xfn8v9 {font-size:1.25rem;}\r
  }`};function Lp(t,e){Me(e,!1),Ue(t,BC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=VC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Lp,{},[],[],!0);var GC=O('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><h2 class="page-title svelte-177ja08">설정</h2> <div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08">이 페이지는 공사중입니다</p> <p class="construction-description svelte-177ja08">설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-177ja08">메뉴로 돌아가기</button></div></div>');const KC={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-177ja08 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}.page-title.svelte-177ja08 {font-size:1.25rem;}\r
  }`};function Op(t,e){Me(e,!1),Ue(t,KC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=GC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Op,{},[],[],!0);var YC=O('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><h2 class="page-title svelte-65loqe">앱 정보</h2> <div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe">이 페이지는 공사중입니다</p> <p class="construction-description svelte-65loqe">앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-65loqe">메뉴로 돌아가기</button></div></div>');const QC={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-65loqe {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}.page-title.svelte-65loqe {font-size:1.25rem;}\r
  }`};function Dp(t,e){Me(e,!1),Ue(t,QC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=YC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Dp,{},[],[],!0);var JC=O('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><h2 class="page-title svelte-19u7yna">도움말</h2> <div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna">이 페이지는 공사중입니다</p> <p class="construction-description svelte-19u7yna">도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-19u7yna">메뉴로 돌아가기</button></div></div>');const XC={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-19u7yna {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}.page-title.svelte-19u7yna {font-size:1.25rem;}\r
  }`};function Mp(t,e){Me(e,!1),Ue(t,XC);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=JC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Mp,{},[],[],!0);var ZC=O('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><h2 class="page-title svelte-134dw7w">이용 약관</h2> <div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w">이 페이지는 공사중입니다</p> <p class="construction-description svelte-134dw7w">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-134dw7w">메뉴로 돌아가기</button></div></div>');const eI={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-134dw7w {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}.page-title.svelte-134dw7w {font-size:1.25rem;}\r
  }`};function $p(t,e){Me(e,!1),Ue(t,eI);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=ZC(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te($p,{},[],[],!0);var tI=O('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><h2 class="page-title svelte-8iwrwj">개인정보 처리방침</h2> <div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj">이 페이지는 공사중입니다</p> <p class="construction-description svelte-8iwrwj">개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-8iwrwj">메뉴로 돌아가기</button></div></div>');const nI={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-8iwrwj {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}.page-title.svelte-8iwrwj {font-size:1.25rem;}\r
  }`};function Fp(t,e){Me(e,!1),Ue(t,nI);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=tI(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(Fp,{},[],[],!0);var rI=O('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><h2 class="page-title svelte-1f7uyy3">문의하기</h2> <div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3">이 페이지는 공사중입니다</p> <p class="construction-description svelte-1f7uyy3">문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p></div> <button class="back-button svelte-1f7uyy3">메뉴로 돌아가기</button></div></div>');const iI={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.page-title.svelte-1f7uyy3 {margin:0 0 2rem 0;font-size:1.5rem;font-weight:bold;color:#111827;text-align:center;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}.page-title.svelte-1f7uyy3 {font-size:1.25rem;}\r
  }`};function zp(t,e){Me(e,!1),Ue(t,iI);function n(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}Dt();var r=rI(),i=p(r),s=_(p(i),4);s.__click=n,f(i),f(r),y(t,r),$e()}st(["click"]);te(zp,{},[],[],!0);var sI=O('<sns-layout><main class="content svelte-1hwhcgc"><!></main> <footer class="footer svelte-1hwhcgc"><p class="svelte-1hwhcgc"> </p></footer></sns-layout>',2);const oI={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 푸터 */.footer.svelte-1hwhcgc {max-width:800px;margin:2rem auto 0;padding-top:2rem;border-top:1px solid #e5e7eb;text-align:center;color:#6b7280;}.footer.svelte-1hwhcgc p:where(.svelte-1hwhcgc) {margin:0;font-size:0.875rem;}

  /* 반응형 */`};function Up(t,e){Me(e,!0),Ue(t,oI);const n=()=>yn(Wr,"$t",r),[r,i]=qr();let s=le(Ut(window.location.pathname));function o(){A(s,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",o);var a=sI(),l=p(a),c=p(l);{var d=b=>{xp(b,{})},h=b=>{var E=me(),k=ee(E);{var S=N=>{Ap(N,{})},R=N=>{var P=me(),T=ee(P);{var I=L=>{Pp(L,{})},w=L=>{var M=me(),F=ee(M);{var $=ne=>{Rp(ne,{})},B=ne=>{var q=me(),z=ee(q);{var Y=j=>{Np(j,{})},V=j=>{var ae=me(),Q=ee(ae);{var _e=fe=>{Lp(fe,{})},de=fe=>{var U=me(),J=ee(U);{var he=ve=>{Op(ve,{})},ye=ve=>{var re=me(),we=ee(re);{var xe=Z=>{Dp(Z,{})},ge=Z=>{var Re=me(),Be=ee(Re);{var tt=ft=>{Mp(ft,{})},xt=ft=>{var Wt=me(),dn=ee(Wt);{var Vn=gt=>{$p(gt,{})},hn=gt=>{var Vt=me(),Ee=ee(Vt);{var Ce=qe=>{Fp(qe,{})},Ge=qe=>{var _t=me(),Bt=ee(_t);{var Gt=ot=>{zp(ot,{})},Kt=ot=>{kp(ot,{})};K(Bt,ot=>{g(s)==="/contact"?ot(Gt):ot(Kt,!1)},!0)}y(qe,_t)};K(Ee,qe=>{g(s)==="/privacy"?qe(Ce):qe(Ge,!1)},!0)}y(gt,Vt)};K(dn,gt=>{g(s)==="/terms"?gt(Vn):gt(hn,!1)},!0)}y(ft,Wt)};K(Be,ft=>{g(s)==="/help"?ft(tt):ft(xt,!1)},!0)}y(Z,Re)};K(we,Z=>{g(s)==="/about"?Z(xe):Z(ge,!1)},!0)}y(ve,re)};K(J,ve=>{g(s)==="/settings"?ve(he):ve(ye,!1)},!0)}y(fe,U)};K(Q,fe=>{g(s)==="/chat/list"?fe(_e):fe(de,!1)},!0)}y(j,ae)};K(z,j=>{g(s).startsWith("/post/detail/")?j(Y):j(V,!1)},!0)}y(ne,q)};K(F,ne=>{g(s)==="/post/list"?ne($):ne(B,!1)},!0)}y(L,M)};K(T,L=>{g(s)==="/user/profile"?L(I):L(w,!1)},!0)}y(N,P)};K(k,N=>{g(s)==="/menu"?N(S):N(R,!1)},!0)}y(b,E)};K(c,b=>{g(s)==="/user/login"?b(d):b(h,!1)})}f(l);var u=_(l,2),m=p(u),v=p(m,!0);f(m),f(u),f(a),G(b=>C(v,b),[()=>n()("푸터")]),y(t,a),$e(),i()}te(Up,{},[],[],!0);hl(Up,{target:document.getElementById("app")});
