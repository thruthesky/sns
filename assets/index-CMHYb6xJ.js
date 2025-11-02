(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pu=!1;var Ra=Array.isArray,Hf=Array.prototype.indexOf,Na=Array.from,yr=Object.keys,xs=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,mu=Object.getOwnPropertyDescriptors,Bf=Object.prototype,Vf=Array.prototype,xa=Object.getPrototypeOf,Ul=Object.isExtensible;function cs(n){return typeof n=="function"}const Mn=()=>{};function Gf(n){return n()}function wr(n){for(var e=0;e<n.length;e++)n[e]()}function _u(){var n,e,t=new Promise((i,s)=>{n=i,e=s});return{promise:t,resolve:n,reject:e}}function Kf(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const ct=2,Pa=4,Qr=8,wn=16,En=32,Bn=64,Jr=128,ot=1024,Et=2048,In=4096,Nt=8192,fn=16384,Oa=32768,si=65536,jl=1<<17,Yf=1<<18,mi=1<<19,vu=1<<20,Lt=256,Er=512,Ir=32768,Wo=1<<21,Da=1<<22,ti=1<<23,Jt=Symbol("$state"),Ma=Symbol("legacy props"),Qf=Symbol(""),Ai=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Jf=1,La=3,Xi=8;function gu(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Xf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Zf(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ep(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function np(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ip(){throw new Error("https://svelte.dev/e/hydration_failed")}function sp(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function rp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function op(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ap(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Xr=1,Zr=2,bu=4,cp=8,up=16,hp=1,dp=2,yu=4,fp=8,pp=16,mp=1,_p=2,wu="[",eo="[!",$a="]",Wi={},Xe=Symbol(),vp="http://www.w3.org/1999/xhtml",gp="http://www.w3.org/2000/svg",bp="@attach";function to(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function yp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function wp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let M=!1;function mt(n){M=n}let X;function Ze(n){if(n===null)throw to(),Wi;return X=n}function ri(){return Ze(rn(X))}function f(n){if(M){if(rn(X)!==null)throw to(),Wi;X=n}}function Eu(n=1){if(M){for(var e=n,t=X;e--;)t=rn(t);X=t}}function Cr(n=!0){for(var e=0,t=X;;){if(t.nodeType===Xi){var i=t.data;if(i===$a){if(e===0)return t;e-=1}else(i===wu||i===eo)&&(e+=1)}var s=rn(t);n&&t.remove(),t=s}}function Iu(n){if(!n||n.nodeType!==Xi)throw to(),Wi;return n.data}function Cu(n){return n===this.v}function Tu(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Su(n){return!Tu(n,this.v)}let Zi=!1,Ep=!1;function Ip(){Zi=!0}let $e=null;function qi(n){$e=n}function nn(n,e=!1,t){$e={p:$e,i:!1,c:null,e:null,s:n,x:null,l:Zi&&!e?{s:null,u:null,$:[]}:null}}function sn(n){var e=$e,t=e.e;if(t!==null){e.e=null;for(var i of t)Hu(i)}return n!==void 0&&(e.x=n),e.i=!0,$e=e.p,n??{}}function qs(){return!Zi||$e!==null&&$e.l===null}let Xn=[];function ku(){var n=Xn;Xn=[],wr(n)}function Vn(n){if(Xn.length===0&&!Es){var e=Xn;queueMicrotask(()=>{e===Xn&&ku()})}Xn.push(n)}function Cp(){for(;Xn.length>0;)ku()}function Au(n){var e=W;if(e===null)return Q.f|=ti,n;if((e.f&Oa)===0){if((e.f&Jr)===0)throw n;e.b.error(n)}else Hi(n,e)}function Hi(n,e){for(;e!==null;){if((e.f&Jr)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const or=new Set;let be=null,hr=null,Ut=null,Qt=[],no=null,qo=!1,Es=!1;class Wt{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#i=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){Qt=[],hr=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of e)this.#s(i,t);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects)):(hr=this,be=null,zl(t.render_effects),zl(t.effects),hr=null,this.#l?.resolve()),Ut=null}#s(e,t){e.f^=ot;for(var i=e.first;i!==null;){var s=i.f,r=(s&(En|Bn))!==0,o=r&&(s&ot)!==0,a=o||(s&Nt)!==0||this.skipped_effects.has(i);if((i.f&Jr)!==0&&i.b?.is_pending()&&(t={parent:t,effect:i,effects:[],render_effects:[],block_effects:[]}),!a&&i.fn!==null){r?i.f^=ot:(s&Pa)!==0?t.effects.push(i):Vs(i)&&((i.f&wn)!==0&&t.block_effects.push(i),Os(i));var l=i.first;if(l!==null){i=l;continue}}var c=i.parent;for(i=i.next;i===null&&c!==null;)c===t.effect&&(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects),t=t.parent),i=c.next,c=c.parent}}#r(e){for(const t of e)((t.f&Et)!==0?this.#o:this.#a).push(t),lt(t,ot)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Ut?.set(e,e.v)}activate(){be=this}deactivate(){be=null,Ut=null}flush(){if(this.activate(),Qt.length>0){if(Ru(),be!==null&&be!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#i===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(or.size>1){this.previous.clear();var e=Ut,t=!0,i={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of or){if(s===this){t=!1;continue}const r=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;r.push(a)}if(r.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of r)Nu(c,o,a,l);if(Qt.length>0){be=s,s.apply();for(const c of Qt)s.#s(c,i);Qt=[],s.deactivate()}}}be=null,Ut=e}this.committed=!0,or.delete(this)}increment(e){this.#n+=1,e&&(this.#i+=1)}decrement(e){this.#n-=1,e&&(this.#i-=1),this.revive()}revive(){for(const e of this.#o)lt(e,Et),oi(e);for(const e of this.#a)lt(e,In),oi(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=_u()).promise}static ensure(){if(be===null){const e=be=new Wt;or.add(be),Es||Wt.enqueue(()=>{be===e&&e.flush()})}return be}static enqueue(e){Vn(e)}apply(){}}function Rt(n){var e=Es;Es=!0;try{for(var t;;){if(Cp(),Qt.length===0&&(be?.flush(),Qt.length===0))return no=null,t;Ru()}}finally{Es=e}}function Ru(){var n=Oi;qo=!0;try{var e=0;for(Vl(!0);Qt.length>0;){var t=Wt.ensure();if(e++>1e3){var i,s;Tp()}t.process(Qt),Ln.clear()}}finally{qo=!1,Vl(n),no=null}}function Tp(){try{np()}catch(n){Hi(n,no)}}let an=null;function zl(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(fn|Nt))===0&&Vs(i)&&(an=new Set,Os(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?Gu(i):i.fn=null),an?.size>0)){Ln.clear();for(const s of an){if((s.f&(fn|Nt))!==0)continue;const r=[s];let o=s.parent;for(;o!==null;)an.has(o)&&(an.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];(l.f&(fn|Nt))===0&&Os(l)}}an.clear()}}an=null}}function Nu(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const r=s.f;(r&ct)!==0?Nu(s,e,t,i):(r&(Da|wn))!==0&&(r&Et)===0&&xu(s,e,i)&&(lt(s,Et),oi(s))}}function xu(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const s of n.deps){if(e.includes(s))return!0;if((s.f&ct)!==0&&xu(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function oi(n){for(var e=no=n;e.parent!==null;){e=e.parent;var t=e.f;if(qo&&e===W&&(t&wn)!==0)return;if((t&(Bn|En))!==0){if((t&ot)===0)return;e.f^=ot}}Qt.push(e)}function Sp(n){let e=0,t=zn(0),i;return()=>{Fp()&&(b(t),ro(()=>(e===0&&(i=tn(()=>n(()=>Is(t)))),e+=1,()=>{Vn(()=>{e-=1,e===0&&(i?.(),i=void 0,Is(t))})})))}}var kp=si|mi|Jr;function Ap(n,e,t){new Rp(n,e,t)}class Rp{parent;#t=!1;#e;#n=M?X:null;#i;#l;#o;#a=null;#s=null;#r=null;#c=null;#u=null;#f=0;#h=0;#p=!1;#d=null;#b=Sp(()=>(this.#d=zn(this.#f),()=>{this.#d=null}));constructor(e,t,i){this.#e=e,this.#i=t,this.#l=i,this.parent=W.b,this.#t=!!this.#i.pending,this.#o=es(()=>{if(W.b=this,M){const r=this.#n;ri(),r.nodeType===Xi&&r.data===eo?this.#w():this.#y()}else{var s=this.#v();try{this.#a=gt(()=>i(s))}catch(r){this.error(r)}this.#h>0?this.#_():this.#t=!1}return()=>{this.#u?.remove()}},kp),M&&(this.#e=X)}#y(){try{this.#a=gt(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#i.pending;e&&(this.#s=gt(()=>e(this.#e)),Wt.enqueue(()=>{var t=this.#v();this.#a=this.#m(()=>(Wt.ensure(),gt(()=>this.#l(t)))),this.#h>0?this.#_():(Pi(this.#s,()=>{this.#s=null}),this.#t=!1)}))}#v(){var e=this.#e;return this.#t&&(this.#u=$t(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#m(e){var t=W,i=Q,s=$e;It(this.#o),at(this.#o),qi(this.#o.ctx);try{return e()}catch(r){return Au(r),null}finally{It(t),at(i),qi(s)}}#_(){const e=this.#i.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Qu(this.#a,this.#c)),this.#s===null&&(this.#s=gt(()=>e(this.#e)))}#g(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(e);return}this.#h+=e,this.#h===0&&(this.#t=!1,this.#s&&Pi(this.#s,()=>{this.#s=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#g(e),this.#f+=e,this.#d&&Bi(this.#d,this.#f)}get_effect_pending(){return this.#b(),b(this.#d)}error(e){var t=this.#i.onerror;let i=this.#i.failed;if(this.#p||!t&&!i)throw e;this.#a&&(Be(this.#a),this.#a=null),this.#s&&(Be(this.#s),this.#s=null),this.#r&&(Be(this.#r),this.#r=null),M&&(Ze(this.#n),Eu(),Ze(Cr()));var s=!1,r=!1;const o=()=>{if(s){wp();return}s=!0,r&&lp(),Wt.ensure(),this.#f=0,this.#r!==null&&Pi(this.#r,()=>{this.#r=null}),this.#t=this.has_pending_snippet(),this.#a=this.#m(()=>(this.#p=!1,gt(()=>this.#l(this.#e)))),this.#h>0?this.#_():this.#t=!1};var a=Q;try{at(null),r=!0,t?.(e,o),r=!1}catch(l){Hi(l,this.#o&&this.#o.parent)}finally{at(a)}i&&Vn(()=>{this.#r=this.#m(()=>{Wt.ensure(),this.#p=!0;try{return gt(()=>{i(this.#e,()=>e,()=>o)})}catch(l){return Hi(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Pu(n,e,t,i){const s=qs()?Hs:Fa;if(t.length===0&&n.length===0){i(e.map(s));return}var r=be,o=W,a=Np();function l(){Promise.all(t.map(c=>xp(c))).then(c=>{a();try{i([...e.map(s),...c])}catch(h){(o.f&fn)===0&&Hi(h,o)}r?.deactivate(),Tr()}).catch(c=>{Hi(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{r?.deactivate(),Tr()}}):l()}function Np(){var n=W,e=Q,t=$e,i=be;return function(r=!0){It(n),at(e),qi(t),r&&i?.activate()}}function Tr(){It(null),at(null),qi(null)}function Hs(n){var e=ct|Et,t=Q!==null&&(Q.f&ct)!==0?Q:null;return W===null||t!==null&&(t.f&Lt)!==0?e|=Lt:W.f|=mi,{ctx:$e,deps:null,effects:null,equals:Cu,f:e,fn:n,reactions:null,rv:0,v:Xe,wv:0,parent:t??W,ac:null}}function xp(n,e){let t=W;t===null&&Xf();var i=t.b,s=void 0,r=zn(Xe),o=!Q,a=new Map;return Wp(()=>{var l=_u();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===be&&c.committed&&c.deactivate(),Tr()})}catch(u){l.reject(u),Tr()}var c=be;if(o){var h=!i.is_pending();i.update_pending_count(1),c.increment(h),a.get(c)?.reject(Ai),a.delete(c),a.set(c,l)}const d=(u,m=void 0)=>{if(c.activate(),m)m!==Ai&&(r.f|=ti,Bi(r,m));else{(r.f&ti)!==0&&(r.f^=ti),Bi(r,u);for(const[_,g]of a){if(a.delete(_),_===c)break;g.reject(Ai)}}o&&(i.update_pending_count(-1),c.decrement(h))};l.promise.then(d,u=>d(null,u||"unknown"))}),Bs(()=>{for(const l of a.values())l.reject(Ai)}),new Promise(l=>{function c(h){function d(){h===s?l(r):c(s)}h.then(d,d)}c(s)})}function Ho(n){const e=Hs(n);return Ju(e),e}function Fa(n){const e=Hs(n);return e.equals=Su,e}function Ou(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Be(e[t])}}function Pp(n){for(var e=n.parent;e!==null;){if((e.f&ct)===0)return e;e=e.parent}return null}function Ua(n){var e,t=W;It(Pp(n));try{n.f&=~Ir,Ou(n),e=th(n)}finally{It(t)}return e}function Du(n){var e=Ua(n);if(n.equals(e)||(n.v=e,n.wv=Zu()),!_i)if(Ut!==null)Ut.set(n,n.v);else{var t=(On||(n.f&Lt)!==0)&&n.deps!==null?In:ot;lt(n,t)}}let Bo=new Set;const Ln=new Map;let Mu=!1;function zn(n,e){var t={f:0,v:n,reactions:null,equals:Cu,rv:0,wv:0};return t}function Se(n,e){const t=zn(n);return Ju(t),t}function ja(n,e=!1,t=!0){const i=zn(n);return e||(i.equals=Su),Zi&&t&&$e!==null&&$e.l!==null&&($e.l.s??=[]).push(i),i}function j(n,e,t=!1){Q!==null&&(!jt||(Q.f&jl)!==0)&&qs()&&(Q.f&(ct|wn|Da|jl))!==0&&!pn?.includes(n)&&ap();let i=t?ln(e):e;return Bi(n,i)}function Bi(n,e){if(!n.equals(e)){var t=n.v;_i?Ln.set(n,e):Ln.set(n,t),n.v=e;var i=Wt.ensure();i.capture(n,t),(n.f&ct)!==0&&((n.f&Et)!==0&&Ua(n),lt(n,(n.f&Lt)===0?ot:In)),n.wv=Zu(),Lu(n,Et),qs()&&W!==null&&(W.f&ot)!==0&&(W.f&(En|Bn))===0&&(Ot===null?Bp([n]):Ot.push(n)),!i.is_fork&&Bo.size>0&&!Mu&&Op()}return e}function Op(){Mu=!1;const n=Array.from(Bo);for(const e of n)(e.f&ot)!==0&&lt(e,In),Vs(e)&&Os(e);Bo.clear()}function Wl(n,e=1){var t=b(n),i=e===1?t++:t--;return j(n,t),i}function Is(n){j(n,n.v+1)}function Lu(n,e){var t=n.reactions;if(t!==null)for(var i=qs(),s=t.length,r=0;r<s;r++){var o=t[r],a=o.f;if(!(!i&&o===W)){var l=(a&Et)===0;l&&lt(o,e),(a&ct)!==0?(a&Ir)===0&&(o.f|=Ir,Lu(o,In)):l&&((a&wn)!==0&&an!==null&&an.add(o),oi(o))}}}function ln(n){if(typeof n!="object"||n===null||Jt in n)return n;const e=xa(n);if(e!==Bf&&e!==Vf)return n;var t=new Map,i=Ra(n),s=Se(0),r=ni,o=a=>{if(ni===r)return a();var l=Q,c=ni;at(null),Kl(r);var h=a();return at(l),Kl(c),h};return i&&t.set("length",Se(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&rp();var h=t.get(l);return h===void 0?h=o(()=>{var d=Se(c.value);return t.set(l,d),d}):j(h,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const h=o(()=>Se(Xe));t.set(l,h),Is(s)}}else j(c,Xe),Is(s);return!0},get(a,l,c){if(l===Jt)return n;var h=t.get(l),d=l in a;if(h===void 0&&(!d||dn(a,l)?.writable)&&(h=o(()=>{var m=ln(d?a[l]:Xe),_=Se(m);return _}),t.set(l,h)),h!==void 0){var u=b(h);return u===Xe?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=b(h))}else if(c===void 0){var d=t.get(l),u=d?.v;if(d!==void 0&&u!==Xe)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Jt)return!0;var c=t.get(l),h=c!==void 0&&c.v!==Xe||Reflect.has(a,l);if(c!==void 0||W!==null&&(!h||dn(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=h?ln(a[l]):Xe,m=Se(u);return m}),t.set(l,c));var d=b(c);if(d===Xe)return!1}return h},set(a,l,c,h){var d=t.get(l),u=l in a;if(i&&l==="length")for(var m=c;m<d.v;m+=1){var _=t.get(m+"");_!==void 0?j(_,Xe):m in a&&(_=o(()=>Se(Xe)),t.set(m+"",_))}if(d===void 0)(!u||dn(a,l)?.writable)&&(d=o(()=>Se(void 0)),j(d,ln(c)),t.set(l,d));else{u=d.v!==Xe;var g=o(()=>ln(c));j(d,g)}var E=Reflect.getOwnPropertyDescriptor(a,l);if(E?.set&&E.set.call(h,c),!u){if(i&&typeof l=="string"){var T=t.get("length"),I=Number(l);Number.isInteger(I)&&I>=T.v&&j(T,I+1)}Is(s)}return!0},ownKeys(a){b(s);var l=Reflect.ownKeys(a).filter(d=>{var u=t.get(d);return u===void 0||u.v!==Xe});for(var[c,h]of t)h.v!==Xe&&!(c in a)&&l.push(c);return l},setPrototypeOf(){op()}})}function ql(n){try{if(n!==null&&typeof n=="object"&&Jt in n)return n[Jt]}catch{}return n}function Dp(n,e){return Object.is(ql(n),ql(e))}var Hl,$u,Fu,Uu;function Vo(){if(Hl===void 0){Hl=window,$u=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Fu=dn(e,"firstChild").get,Uu=dn(e,"nextSibling").get,Ul(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Ul(t)&&(t.__t=void 0)}}function $t(n=""){return document.createTextNode(n)}function en(n){return Fu.call(n)}function rn(n){return Uu.call(n)}function p(n,e){if(!M)return en(n);var t=en(X);if(t===null)t=X.appendChild($t());else if(e&&t.nodeType!==La){var i=$t();return t?.before(i),Ze(i),i}return Ze(t),t}function ke(n,e=!1){if(!M){var t=en(n);return t instanceof Comment&&t.data===""?rn(t):t}if(e&&X?.nodeType!==La){var i=$t();return X?.before(i),Ze(i),i}return X}function v(n,e=1,t=!1){let i=M?X:n;for(var s;e--;)s=i,i=rn(i);if(!M)return i;if(t&&i?.nodeType!==La){var r=$t();return i===null?s?.after(r):i.before(r),Ze(r),r}return Ze(i),i}function ju(n){n.textContent=""}function zu(){return!1}function Mp(n,e){if(e){const t=document.body;n.autofocus=!0,Vn(()=>{document.activeElement===t&&n.focus()})}}let Bl=!1;function Wu(){Bl||(Bl=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function io(n){var e=Q,t=W;at(null),It(null);try{return n()}finally{at(e),It(t)}}function Lp(n,e,t,i=t){n.addEventListener(e,()=>io(t));const s=n.__on_r;s?n.__on_r=()=>{s(),i(!0)}:n.__on_r=()=>i(!0),Wu()}function qu(n){W===null&&Q===null&&tp(),Q!==null&&(Q.f&Lt)!==0&&W===null&&ep(),_i&&Zf()}function $p(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Kt(n,e,t,i=!0){var s=W;s!==null&&(s.f&Nt)!==0&&(n|=Nt);var r={ctx:$e,deps:null,nodes_start:null,nodes_end:null,f:n|Et,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Os(r),r.f|=Oa}catch(l){throw Be(r),l}else e!==null&&oi(r);if(i){var o=r;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&mi)===0&&(o=o.first,(n&wn)!==0&&(n&si)!==0&&o!==null&&(o.f|=si)),o!==null&&(o.parent=s,s!==null&&$p(o,s),Q!==null&&(Q.f&ct)!==0&&(n&Bn)===0)){var a=Q;(a.effects??=[]).push(o)}}return r}function Fp(){return Q!==null&&!jt}function Bs(n){const e=Kt(Qr,null,!1);return lt(e,ot),e.teardown=n,e}function Go(n){qu();var e=W.f,t=!Q&&(e&En)!==0&&(e&Oa)===0;if(t){var i=$e;(i.e??=[]).push(n)}else return Hu(n)}function Hu(n){return Kt(Pa|vu,n,!1)}function Up(n){return qu(),Kt(Qr|vu,n,!0)}function jp(n){Wt.ensure();const e=Kt(Bn|mi,n,!0);return()=>{Be(e)}}function zp(n){Wt.ensure();const e=Kt(Bn|mi,n,!0);return(t={})=>new Promise(i=>{t.outro?Pi(e,()=>{Be(e),i(void 0)}):(Be(e),i(void 0))})}function so(n){return Kt(Pa,n,!1)}function Wp(n){return Kt(Da|mi,n,!0)}function ro(n,e=0){return Kt(Qr|e,n,!0)}function V(n,e=[],t=[],i=[]){Pu(i,e,t,s=>{Kt(Qr,()=>n(...s.map(b)),!0)})}function es(n,e=0){var t=Kt(wn|e,n,!0);return t}function gt(n,e=!0){return Kt(En|mi,n,!0,e)}function Bu(n){var e=n.teardown;if(e!==null){const t=_i,i=Q;Gl(!0),at(null);try{e.call(null)}finally{Gl(t),at(i)}}}function Vu(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&io(()=>{s.abort(Ai)});var i=t.next;(t.f&Bn)!==0?t.parent=null:Be(t,e),t=i}}function qp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&En)===0&&Be(e),e=t}}function Be(n,e=!0){var t=!1;(e||(n.f&Yf)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Hp(n.nodes_start,n.nodes_end),t=!0),Vu(n,e&&!t),Sr(n,0),lt(n,fn);var i=n.transitions;if(i!==null)for(const r of i)r.stop();Bu(n);var s=n.parent;s!==null&&s.first!==null&&Gu(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Hp(n,e){for(;n!==null;){var t=n===e?null:rn(n);n.remove(),n=t}}function Gu(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Pi(n,e,t=!0){var i=[];za(n,i,!0),Ku(i,()=>{t&&Be(n),e&&e()})}function Ku(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var s of n)s.out(i)}else e()}function za(n,e,t){if((n.f&Nt)===0){if(n.f^=Nt,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var i=n.first;i!==null;){var s=i.next,r=(i.f&si)!==0||(i.f&En)!==0&&(n.f&wn)!==0;za(i,e,r?t:!1),i=s}}}function Wa(n){Yu(n,!0)}function Yu(n,e){if((n.f&Nt)!==0){n.f^=Nt,(n.f&ot)===0&&(lt(n,Et),oi(n));for(var t=n.first;t!==null;){var i=t.next,s=(t.f&si)!==0||(t.f&En)!==0;Yu(t,s?e:!1),t=i}if(n.transitions!==null)for(const r of n.transitions)(r.is_global||e)&&r.in()}}function Qu(n,e){for(var t=n.nodes_start,i=n.nodes_end;t!==null;){var s=t===i?null:rn(t);e.append(t),t=s}}let Oi=!1;function Vl(n){Oi=n}let _i=!1;function Gl(n){_i=n}let Q=null,jt=!1;function at(n){Q=n}let W=null;function It(n){W=n}let pn=null;function Ju(n){Q!==null&&(pn===null?pn=[n]:pn.push(n))}let pt=null,At=0,Ot=null;function Bp(n){Ot=n}let Xu=1,Ps=0,ni=Ps;function Kl(n){ni=n}let On=!1;function Zu(){return++Xu}function Vs(n){var e=n.f;if((e&Et)!==0)return!0;if((e&In)!==0){var t=n.deps,i=(e&Lt)!==0;if(e&ct&&(n.f&=~Ir),t!==null){var s,r,o=(e&Er)!==0,a=i&&W!==null&&!On,l=t.length;if((o||a)&&(W===null||(W.f&fn)===0)){var c=n,h=c.parent;for(s=0;s<l;s++)r=t[s],(o||!r?.reactions?.includes(c))&&(r.reactions??=[]).push(c);o&&(c.f^=Er),a&&h!==null&&(h.f&Lt)===0&&(c.f^=Lt)}for(s=0;s<l;s++)if(r=t[s],Vs(r)&&Du(r),r.wv>n.wv)return!0}(!i||W!==null&&!On)&&lt(n,ot)}return!1}function eh(n,e,t=!0){var i=n.reactions;if(i!==null&&!pn?.includes(n))for(var s=0;s<i.length;s++){var r=i[s];(r.f&ct)!==0?eh(r,e,!1):e===r&&(t?lt(r,Et):(r.f&ot)!==0&&lt(r,In),oi(r))}}function th(n){var e=pt,t=At,i=Ot,s=Q,r=On,o=pn,a=$e,l=jt,c=ni,h=n.f;pt=null,At=0,Ot=null,On=(h&Lt)!==0&&(jt||!Oi||Q===null),Q=(h&(En|Bn))===0?n:null,pn=null,qi(n.ctx),jt=!1,ni=++Ps,n.ac!==null&&(io(()=>{n.ac.abort(Ai)}),n.ac=null);try{n.f|=Wo;var d=n.fn,u=d(),m=n.deps;if(pt!==null){var _;if(Sr(n,At),m!==null&&At>0)for(m.length=At+pt.length,_=0;_<pt.length;_++)m[At+_]=pt[_];else n.deps=m=pt;if(!On||(h&ct)!==0&&n.reactions!==null)for(_=At;_<m.length;_++)(m[_].reactions??=[]).push(n)}else m!==null&&At<m.length&&(Sr(n,At),m.length=At);if(qs()&&Ot!==null&&!jt&&m!==null&&(n.f&(ct|In|Et))===0)for(_=0;_<Ot.length;_++)eh(Ot[_],n);return s!==null&&s!==n&&(Ps++,Ot!==null&&(i===null?i=Ot:i.push(...Ot))),(n.f&ti)!==0&&(n.f^=ti),u}catch(g){return Au(g)}finally{n.f^=Wo,pt=e,At=t,Ot=i,Q=s,On=r,pn=o,qi(a),jt=l,ni=c}}function Vp(n,e){let t=e.reactions;if(t!==null){var i=Hf.call(t,n);if(i!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[i]=t[s],t.pop())}}t===null&&(e.f&ct)!==0&&(pt===null||!pt.includes(e))&&(lt(e,In),(e.f&(Lt|Er))===0&&(e.f^=Er),Ou(e),Sr(e,0))}function Sr(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Vp(n,t[i])}function Os(n){var e=n.f;if((e&fn)===0){lt(n,ot);var t=W,i=Oi;W=n,Oi=!0;try{(e&wn)!==0?qp(n):Vu(n),Bu(n);var s=th(n);n.teardown=typeof s=="function"?s:null,n.wv=Xu;var r;pu&&Ep&&(n.f&Et)!==0&&n.deps}finally{Oi=i,W=t}}}async function Gp(){await Promise.resolve(),Rt()}function b(n){var e=n.f,t=(e&ct)!==0;if(Q!==null&&!jt){var i=W!==null&&(W.f&fn)!==0;if(!i&&!pn?.includes(n)){var s=Q.deps;if((Q.f&Wo)!==0)n.rv<Ps&&(n.rv=Ps,pt===null&&s!==null&&s[At]===n?At++:pt===null?pt=[n]:(!On||!pt.includes(n))&&pt.push(n));else{(Q.deps??=[]).push(n);var r=n.reactions;r===null?n.reactions=[Q]:r.includes(Q)||r.push(Q)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&Lt)===0&&(o.f^=Lt)}if(_i){if(Ln.has(n))return Ln.get(n);if(t){o=n;var l=o.v;return((o.f&ot)===0&&o.reactions!==null||nh(o))&&(l=Ua(o)),Ln.set(o,l),l}}else if(t){if(o=n,Ut?.has(o))return Ut.get(o);Vs(o)&&Du(o)}if(Ut?.has(n))return Ut.get(n);if((n.f&ti)!==0)throw n.v;return n.v}function nh(n){if(n.v===Xe)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Ln.has(e)||(e.f&ct)!==0&&nh(e))return!0;return!1}function tn(n){var e=jt;try{return jt=!0,n()}finally{jt=e}}const Kp=-7169;function lt(n,e){n.f=n.f&Kp|e}function ki(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Jt in n)Ko(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Jt in t&&Ko(t)}}}function Ko(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Ko(n[i],e)}catch{}const t=xa(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=mu(t);for(let s in i){const r=i[s].get;if(r)try{r.call(n)}catch{}}}}}function Yp(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Qp=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Jp(n){return Qp.includes(n)}const Xp={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Zp(n){return n=n.toLowerCase(),Xp[n]??n}const em=["touchstart","touchmove"];function tm(n){return em.includes(n)}const nm=["textarea","script","style","title"];function im(n){return nm.includes(n)}const ih=new Set,Yo=new Set;function sh(n,e,t,i={}){function s(r){if(i.capture||_s.call(e,r),!r.cancelBubble)return io(()=>t?.call(this,r))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Vn(()=>{e.addEventListener(n,s,i)}):e.addEventListener(n,s,i),s}function dr(n,e,t,i,s){var r={capture:i,passive:s},o=sh(n,e,t,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Bs(()=>{e.removeEventListener(n,o,r)})}function vi(n){for(var e=0;e<n.length;e++)ih.add(n[e]);for(var t of Yo)t(n)}let Yl=null;function _s(n){var e=this,t=e.ownerDocument,i=n.type,s=n.composedPath?.()||[],r=s[0]||n.target;Yl=n;var o=0,a=Yl===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(r=s[o]||n.target,r!==e){xs(n,"currentTarget",{configurable:!0,get(){return r||t}});var h=Q,d=W;at(null),It(null);try{for(var u,m=[];r!==null;){var _=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+i];g!=null&&(!r.disabled||n.target===r)&&g.call(r,n)}catch(E){u?m.push(E):u=E}if(n.cancelBubble||_===e||_===null)break;r=_}if(u){for(let E of m)queueMicrotask(()=>{throw E});throw u}}finally{n.__root=e,delete n.currentTarget,at(h),It(d)}}}function rh(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function mn(n,e){var t=W;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function $(n,e){var t=(e&mp)!==0,i=(e&_p)!==0,s,r=!n.startsWith("<!>");return()=>{if(M)return mn(X,null),X;s===void 0&&(s=rh(r?n:"<!>"+n),t||(s=en(s)));var o=i||$u?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=en(o),l=o.lastChild;mn(a,l)}else mn(o,o);return o}}function sm(n,e,t="svg"){var i=!n.startsWith("<!>"),s=`<${t}>${i?n:"<!>"+n}</${t}>`,r;return()=>{if(M)return mn(X,null),X;if(!r){var o=rh(s),a=en(o);r=en(a)}var l=r.cloneNode(!0);return mn(l,l),l}}function rm(n,e){return sm(n,e,"svg")}function je(){if(M)return mn(X,null),X;var n=document.createDocumentFragment(),e=document.createComment(""),t=$t();return n.append(e,t),mn(e,t),n}function R(n,e){if(M){W.nodes_end=X,ri();return}n!==null&&n.before(e)}function y(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function qa(n,e){return oh(n,e)}function om(n,e){Vo(),e.intro=e.intro??!1;const t=e.target,i=M,s=X;try{for(var r=en(t);r&&(r.nodeType!==Xi||r.data!==wu);)r=rn(r);if(!r)throw Wi;mt(!0),Ze(r);const o=oh(n,{...e,anchor:r});return mt(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Wi&&console.warn("Failed to hydrate: ",o),e.recover===!1&&ip(),Vo(),ju(t),mt(!1),qa(n,e)}finally{mt(i),Ze(s)}}const Ci=new Map;function oh(n,{target:e,anchor:t,props:i={},events:s,context:r,intro:o=!0}){Vo();var a=new Set,l=d=>{for(var u=0;u<d.length;u++){var m=d[u];if(!a.has(m)){a.add(m);var _=tm(m);e.addEventListener(m,_s,{passive:_});var g=Ci.get(m);g===void 0?(document.addEventListener(m,_s,{passive:_}),Ci.set(m,1)):Ci.set(m,g+1)}}};l(Na(ih)),Yo.add(l);var c=void 0,h=zp(()=>{var d=t??e.appendChild($t());return Ap(d,{pending:()=>{}},u=>{if(r){nn({});var m=$e;m.c=r}if(s&&(i.$$events=s),M&&mn(u,null),c=n(u,i)||{},M&&(W.nodes_end=X,X===null||X.nodeType!==Xi||X.data!==$a))throw to(),Wi;r&&sn()}),()=>{for(var u of a){e.removeEventListener(u,_s);var m=Ci.get(u);--m===0?(document.removeEventListener(u,_s),Ci.delete(u)):Ci.set(u,m)}Yo.delete(l),d!==t&&d.parentNode?.removeChild(d)}});return Qo.set(c,h),c}let Qo=new WeakMap;function am(n,e){const t=Qo.get(n);return t?(Qo.delete(n),t(e)):Promise.resolve()}class ah{anchor;#t=new Map;#e=new Map;#n=new Map;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#l=()=>{var e=be;if(this.#t.has(e)){var t=this.#t.get(e),i=this.#e.get(t);if(i)Wa(i);else{var s=this.#n.get(t);s&&(this.#e.set(t,s.effect),this.#n.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),i=s.effect)}for(const[r,o]of this.#t){if(this.#t.delete(r),r===e)break;const a=this.#n.get(o);a&&(Be(a.effect),this.#n.delete(o))}for(const[r,o]of this.#e){if(r===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(r)){var c=document.createDocumentFragment();Qu(o,c),c.append($t()),this.#n.set(r,{effect:o,fragment:c})}else Be(o);this.#e.delete(r)};this.#i||!i?Pi(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,s]of this.#n)t.includes(i)||(Be(s.effect),this.#n.delete(i))};ensure(e,t){var i=be,s=zu();if(t&&!this.#e.has(e)&&!this.#n.has(e))if(s){var r=document.createDocumentFragment(),o=$t();r.append(o),this.#n.set(e,{effect:gt(()=>t(o)),fragment:r})}else this.#e.set(e,gt(()=>t(this.anchor)));if(this.#t.set(i,e),s){for(const[a,l]of this.#e)a===e?i.skipped_effects.delete(l):i.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?i.skipped_effects.delete(l.effect):i.skipped_effects.add(l.effect);i.oncommit(this.#l),i.ondiscard(this.#o)}else M&&(this.anchor=X),this.#l()}}function le(n,e,t=!1){M&&ri();var i=new ah(n),s=t?si:0;function r(o,a){if(M){const c=Iu(n)===eo;if(o===c){var l=Cr();Ze(l),i.anchor=l,mt(!1),i.ensure(o,a),mt(!0);return}}i.ensure(o,a)}es(()=>{var o=!1;e((a,l=!0)=>{o=!0,r(l,a)}),o||r(!1,null)},s)}function Zn(n,e){return e}function lm(n,e,t){for(var i=n.items,s=[],r=e.length,o=0;o<r;o++)za(e[o].e,s,!0);var a=r>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;ju(l),l.append(t),i.clear(),Yt(n,e[0].prev,e[r-1].next)}Ku(s,()=>{for(var c=0;c<r;c++){var h=e[c];a||(i.delete(h.k),Yt(n,h.prev,h.next)),Be(h.e,!a)}})}function Dn(n,e,t,i,s,r=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&bu)!==0;if(l){var c=n;o=M?Ze(en(c)):c.appendChild($t())}M&&ri();var h=null,d=!1,u=new Map,m=Fa(()=>{var T=t();return Ra(T)?T:T==null?[]:Na(T)}),_,g;function E(){cm(g,_,a,u,o,s,e,i,t),r!==null&&(_.length===0?h?Wa(h):h=gt(()=>r(o)):h!==null&&Pi(h,()=>{h=null}))}es(()=>{g??=W,_=b(m);var T=_.length;if(d&&T===0)return;d=T===0;let I=!1;if(M){var k=Iu(o)===eo;k!==(T===0)&&(o=Cr(),Ze(o),mt(!1),I=!0)}if(M){for(var x=null,P,S=0;S<T;S++){if(X.nodeType===Xi&&X.data===$a){o=X,I=!0,mt(!1);break}var w=_[S],A=i(w,S);P=Jo(X,a,x,null,w,A,S,s,e,t),a.items.set(A,P),x=P}T>0&&Ze(Cr())}if(M)T===0&&r&&(h=gt(()=>r(o)));else if(zu()){var D=new Set,Z=be;for(S=0;S<T;S+=1){w=_[S],A=i(w,S);var N=a.items.get(A)??u.get(A);N?(e&(Xr|Zr))!==0&&lh(N,w,S,e):(P=Jo(null,a,null,null,w,A,S,s,e,t,!0),u.set(A,P)),D.add(A)}for(const[O,U]of a.items)D.has(O)||Z.skipped_effects.add(U.e);Z.oncommit(E)}else E();I&&mt(!0),b(m)}),M&&(o=X)}function cm(n,e,t,i,s,r,o,a,l){var c=(o&cp)!==0,h=(o&(Xr|Zr))!==0,d=e.length,u=t.items,m=t.first,_=m,g,E=null,T,I=[],k=[],x,P,S,w;if(c)for(w=0;w<d;w+=1)x=e[w],P=a(x,w),S=u.get(P),S!==void 0&&(S.a?.measure(),(T??=new Set).add(S));for(w=0;w<d;w+=1){if(x=e[w],P=a(x,w),S=u.get(P),S===void 0){var A=i.get(P);if(A!==void 0){i.delete(P),u.set(P,A);var D=E?E.next:_;Yt(t,E,A),Yt(t,A,D),wo(A,D,s),E=A}else{var Z=_?_.e.nodes_start:s;E=Jo(Z,t,E,E===null?t.first:E.next,x,P,w,r,o,l)}u.set(P,E),I=[],k=[],_=E.next;continue}if(h&&lh(S,x,w,o),(S.e.f&Nt)!==0&&(Wa(S.e),c&&(S.a?.unfix(),(T??=new Set).delete(S))),S!==_){if(g!==void 0&&g.has(S)){if(I.length<k.length){var N=k[0],O;E=N.prev;var U=I[0],oe=I[I.length-1];for(O=0;O<I.length;O+=1)wo(I[O],N,s);for(O=0;O<k.length;O+=1)g.delete(k[O]);Yt(t,U.prev,oe.next),Yt(t,E,U),Yt(t,oe,N),_=N,E=oe,w-=1,I=[],k=[]}else g.delete(S),wo(S,_,s),Yt(t,S.prev,S.next),Yt(t,S,E===null?t.first:E.next),Yt(t,E,S),E=S;continue}for(I=[],k=[];_!==null&&_.k!==P;)(_.e.f&Nt)===0&&(g??=new Set).add(_),k.push(_),_=_.next;if(_===null)continue;S=_}I.push(S),E=S,_=S.next}if(_!==null||g!==void 0){for(var q=g===void 0?[]:Na(g);_!==null;)(_.e.f&Nt)===0&&q.push(_),_=_.next;var re=q.length;if(re>0){var Ee=(o&bu)!==0&&d===0?s:null;if(c){for(w=0;w<re;w+=1)q[w].a?.measure();for(w=0;w<re;w+=1)q[w].a?.fix()}lm(t,q,Ee)}}c&&Vn(()=>{if(T!==void 0)for(S of T)S.a?.apply()}),n.first=t.first&&t.first.e,n.last=E&&E.e;for(var Ie of i.values())Be(Ie.e);i.clear()}function lh(n,e,t,i){(i&Xr)!==0&&Bi(n.v,e),(i&Zr)!==0?Bi(n.i,t):n.i=t}function Jo(n,e,t,i,s,r,o,a,l,c,h){var d=(l&Xr)!==0,u=(l&up)===0,m=d?u?ja(s,!1,!1):zn(s):s,_=(l&Zr)===0?o:zn(o),g={i:_,v:m,k:r,a:null,e:null,prev:t,next:i};try{if(n===null){var E=document.createDocumentFragment();E.append(n=$t())}return g.e=gt(()=>a(n,m,_,c),M),g.e.prev=t&&t.e,g.e.next=i&&i.e,t===null?h||(e.first=g):(t.next=g,t.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{}}function wo(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,r=n.e.nodes_start;r!==null&&r!==i;){var o=rn(r);s.before(r),r=o}}function Yt(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function tt(n,e,t,i,s){M&&ri();var r=e.$$slots?.[t],o=!1;r===!0&&(r=e.children,o=!0),r===void 0||r(n,o?()=>i:i)}function um(n,e,t,i,s,r){let o=M;M&&ri();var a=null;M&&X.nodeType===Jf&&(a=X,ri());var l=M?X:n,c=new ah(l,!1);es(()=>{const h=e()||null;var d=gp;if(h===null){c.ensure(null,null);return}return c.ensure(h,u=>{if(h){if(a=M?a:document.createElementNS(d,h),mn(a,a),i){M&&im(h)&&a.append(document.createComment(""));var m=M?en(a):a.appendChild($t());M&&(m===null?mt(!1):Ze(m)),i(a,m)}W.nodes_end=a,u.before(a)}M&&Ze(u)}),()=>{}},si),Bs(()=>{}),o&&(mt(!0),Ze(l))}function Cn(n,e){so(()=>{var t=n.getRootNode(),i=t.host?t:t.head??t.ownerDocument.head;if(!i.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,i.appendChild(s)}})}function hm(n,e){var t=void 0,i;es(()=>{t!==(t=e())&&(i&&(Be(i),i=null),t&&(i=gt(()=>{so(()=>t(n))})))})}function ch(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=ch(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function dm(){for(var n,e,t=0,i="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=ch(n))&&(i&&(i+=" "),i+=e);return i}function vs(n){return typeof n=="object"?dm(n):n??""}const Ql=[...` 	
\r\f \v\uFEFF`];function fm(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var s in t)if(t[s])i=i?i+" "+s:s;else if(i.length)for(var r=s.length,o=0;(o=i.indexOf(s,o))>=0;){var a=o+r;(o===0||Ql.includes(i[o-1]))&&(a===i.length||Ql.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function Jl(n,e=!1){var t=e?" !important;":";",i="";for(var s in n){var r=n[s];r!=null&&r!==""&&(i+=" "+s+": "+r+t)}return i}function Eo(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function pm(n,e){if(e){var t="",i,s;if(Array.isArray(e)?(i=e[0],s=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,o=0,a=!1,l=[];i&&l.push(...Object.keys(i).map(Eo)),s&&l.push(...Object.keys(s).map(Eo));var c=0,h=-1;const g=n.length;for(var d=0;d<g;d++){var u=n[d];if(a?u==="/"&&n[d-1]==="*"&&(a=!1):r?r===u&&(r=!1):u==="/"&&n[d+1]==="*"?a=!0:u==='"'||u==="'"?r=u:u==="("?o++:u===")"&&o--,!a&&r===!1&&o===0){if(u===":"&&h===-1)h=d;else if(u===";"||d===g-1){if(h!==-1){var m=Eo(n.substring(c,h).trim());if(!l.includes(m)){u!==";"&&d++;var _=n.substring(c,d).trim();t+=" "+_+";"}}c=d+1,h=-1}}}}return i&&(t+=Jl(i)),s&&(t+=Jl(s,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function bt(n,e,t,i,s,r){var o=n.__className;if(M||o!==t||o===void 0){var a=fm(t,i,r);(!M||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&n.classList.toggle(l,c)}return r}function Io(n,e={},t,i){for(var s in t){var r=t[s];e[s]!==r&&(t[s]==null?n.style.removeProperty(s):n.style.setProperty(s,r,i))}}function mm(n,e,t,i){var s=n.__style;if(M||s!==e){var r=pm(e,i);(!M||r!==n.getAttribute("style"))&&(r==null?n.removeAttribute("style"):n.style.cssText=r),n.__style=e}else i&&(Array.isArray(i)?(Io(n,t?.[0],i[0]),Io(n,t?.[1],i[1],"important")):Io(n,t,i));return i}function Xo(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Ra(e))return yp();for(var i of n.options)i.selected=e.includes(Xl(i));return}for(i of n.options){var s=Xl(i);if(Dp(s,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function _m(n){var e=new MutationObserver(()=>{Xo(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Bs(()=>{e.disconnect()})}function Xl(n){return"__value"in n?n.__value:n.value}const us=Symbol("class"),hs=Symbol("style"),uh=Symbol("is custom element"),hh=Symbol("is html");function fr(n){if(M){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var i=n.value;Pe(n,"value",null),n.value=i}if(n.hasAttribute("checked")){var s=n.checked;Pe(n,"checked",null),n.checked=s}}};n.__on_r=t,Vn(t),Wu()}}function vm(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Pe(n,e,t,i){var s=dh(n);M&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(n[Qf]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Ha(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Zl(n,e,t){var i=Q,s=W;let r=M;M&&mt(!1),at(null),It(null);try{e!=="style"&&(Zo.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?Ha(n).includes(e):t&&typeof t=="object")?n[e]=t:Pe(n,e,t==null?t:String(t))}finally{at(i),It(s),r&&mt(!0)}}function gm(n,e,t,i,s=!1,r=!1){if(M&&s&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||fr(o)}var l=dh(n),c=l[uh],h=!l[hh];let d=M&&c;d&&mt(!1);var u=e||{},m=n.tagName==="OPTION";for(var _ in e)_ in t||(t[_]=null);t.class?t.class=vs(t.class):t[us]&&(t.class=null),t[hs]&&(t.style??=null);var g=Ha(n);for(const w in t){let A=t[w];if(m&&w==="value"&&A==null){n.value=n.__value="",u[w]=A;continue}if(w==="class"){var E=n.namespaceURI==="http://www.w3.org/1999/xhtml";bt(n,E,A,i,e?.[us],t[us]),u[w]=A,u[us]=t[us];continue}if(w==="style"){mm(n,A,e?.[hs],t[hs]),u[w]=A,u[hs]=t[hs];continue}var T=u[w];if(!(A===T&&!(A===void 0&&n.hasAttribute(w)))){u[w]=A;var I=w[0]+w[1];if(I!=="$$")if(I==="on"){const D={},Z="$$"+w;let N=w.slice(2);var k=Jp(N);if(Yp(N)&&(N=N.slice(0,-7),D.capture=!0),!k&&T){if(A!=null)continue;n.removeEventListener(N,u[Z],D),u[Z]=null}if(A!=null)if(k)n[`__${N}`]=A,vi([N]);else{let O=function(U){u[w].call(this,U)};var S=O;u[Z]=sh(N,n,O,D)}else k&&(n[`__${N}`]=void 0)}else if(w==="style")Pe(n,w,A);else if(w==="autofocus")Mp(n,!!A);else if(!c&&(w==="__value"||w==="value"&&A!=null))n.value=n.__value=A;else if(w==="selected"&&m)vm(n,A);else{var x=w;h||(x=Zp(x));var P=x==="defaultValue"||x==="defaultChecked";if(A==null&&!c&&!P)if(l[w]=null,x==="value"||x==="checked"){let D=n;const Z=e===void 0;if(x==="value"){let N=D.defaultValue;D.removeAttribute(x),D.defaultValue=N,D.value=D.__value=Z?N:null}else{let N=D.defaultChecked;D.removeAttribute(x),D.defaultChecked=N,D.checked=Z?N:!1}}else n.removeAttribute(w);else P||g.includes(x)&&(c||typeof A!="string")?(n[x]=A,x in l&&(l[x]=Xe)):typeof A!="function"&&Pe(n,x,A)}}}return d&&mt(!0),u}function ec(n,e,t=[],i=[],s=[],r,o=!1,a=!1){Pu(s,t,i,l=>{var c=void 0,h={},d=n.nodeName==="SELECT",u=!1;if(es(()=>{var _=e(...l.map(b)),g=gm(n,c,_,r,o,a);u&&d&&"value"in _&&Xo(n,_.value);for(let T of Object.getOwnPropertySymbols(h))_[T]||Be(h[T]);for(let T of Object.getOwnPropertySymbols(_)){var E=_[T];T.description===bp&&(!c||E!==c[T])&&(h[T]&&Be(h[T]),h[T]=gt(()=>hm(n,()=>E))),g[T]=E}c=g}),d){var m=n;so(()=>{Xo(m,c.value,!0),_m(m)})}u=!0})}function dh(n){return n.__attributes??={[uh]:n.nodeName.includes("-"),[hh]:n.namespaceURI===vp}}var Zo=new Map;function Ha(n){var e=n.getAttribute("is")||n.nodeName,t=Zo.get(e);if(t)return t;Zo.set(e,t=[]);for(var i,s=n,r=Element.prototype;r!==s;){i=mu(s);for(var o in i)i[o].set&&t.push(o);s=xa(s)}return t}function Co(n,e,t=e){var i=new WeakSet;Lp(n,"input",async s=>{var r=s?n.defaultValue:n.value;if(r=To(n)?So(r):r,t(r),be!==null&&i.add(be),await Gp(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=r??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(M&&n.defaultValue!==n.value||tn(e)==null&&n.value)&&(t(To(n)?So(n.value):n.value),be!==null&&i.add(be)),ro(()=>{var s=e();if(n===document.activeElement){var r=hr??be;if(i.has(r))return}To(n)&&s===So(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function To(n){var e=n.type;return e==="number"||e==="range"}function So(n){return n===""?null:+n}function tc(n,e){return n===e||n?.[Jt]===e}function bm(n={},e,t,i){return so(()=>{var s,r;return ro(()=>{s=r,r=[],tn(()=>{n!==t(...r)&&(e(n,...r),s&&tc(t(...s),n)&&e(null,...s))})}),()=>{Vn(()=>{r&&tc(t(...r),n)&&e(null,...r)})}}),n}function fh(n=!1){const e=$e,t=e.l.u;if(!t)return;let i=()=>ki(e.s);if(n){let s=0,r={};const o=Hs(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],a=!0);return a&&s++,s});i=()=>b(o)}t.b.length&&Up(()=>{nc(e,i),wr(t.b)}),Go(()=>{const s=tn(()=>t.m.map(Gf));return()=>{for(const r of s)typeof r=="function"&&r()}}),t.a.length&&Go(()=>{nc(e,i),wr(t.a)})}function nc(n,e){if(n.l.s)for(const t of n.l.s)b(t);e()}function Ba(n,e,t){if(n==null)return e(void 0),t&&t(void 0),Mn;const i=tn(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const Ti=[];function ym(n,e){return{subscribe:oo(n,e).subscribe}}function oo(n,e=Mn){let t=null;const i=new Set;function s(a){if(Tu(n,a)&&(n=a,t)){const l=!Ti.length;for(const c of i)c[1](),Ti.push(c,n);if(l){for(let c=0;c<Ti.length;c+=2)Ti[c][0](Ti[c+1]);Ti.length=0}}}function r(a){s(a(n))}function o(a,l=Mn){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,r)||Mn),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function wm(n,e,t){const i=!Array.isArray(n),s=i?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return ym(t,(o,a)=>{let l=!1;const c=[];let h=0,d=Mn;const u=()=>{if(h)return;d();const _=e(i?c[0]:c,o,a);r?o(_):d=typeof _=="function"?_:Mn},m=s.map((_,g)=>Ba(_,E=>{c[g]=E,h&=~(1<<g),l&&u()},()=>{h|=1<<g}));return l=!0,u(),function(){wr(m),d(),l=!1}})}function Em(n){let e;return Ba(n,t=>e=t)(),e}let ar=!1,ea=Symbol();function Wn(n,e,t){const i=t[e]??={store:null,source:ja(void 0),unsubscribe:Mn};if(i.store!==n&&!(ea in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=Mn;else{var s=!0;i.unsubscribe=Ba(n,r=>{s?i.source.v=r:j(i.source,r)}),s=!1}return n&&ea in t?Em(n):b(i.source)}function Gs(){const n={};function e(){Bs(()=>{for(var t in n)n[t].unsubscribe();xs(n,ea,{enumerable:!1,value:!0})})}return[n,e]}function Im(n){var e=ar;try{return ar=!1,[n(),ar]}finally{ar=e}}const Cm={get(n,e){if(!n.exclude.includes(e))return b(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var i=W;try{It(n.parent_effect),n.special[e]=Dt({get[e](){return n.props[e]}},e,yu)}finally{It(i)}}return n.special[e](t),Wl(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),Wl(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function et(n,e){return new Proxy({props:n,exclude:e,special:{},version:zn(0),parent_effect:W},Cm)}const Tm={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(cs(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let s=n.props[i];cs(s)&&(s=s());const r=dn(s,e);if(r&&r.set)return r.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(cs(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const s=dn(i,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(n,e){if(e===Jt||e===Ma)return!1;for(let t of n.props)if(cs(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(cs(t)&&(t=t()),!!t){for(const i in t)e.includes(i)||e.push(i);for(const i of Object.getOwnPropertySymbols(t))e.includes(i)||e.push(i)}return e}};function vt(...n){return new Proxy({props:n},Tm)}function Dt(n,e,t,i){var s=!Zi||(t&dp)!==0,r=(t&fp)!==0,o=(t&pp)!==0,a=i,l=!0,c=()=>(l&&(l=!1,a=o?tn(i):i),a),h;if(r){var d=Jt in n||Ma in n;h=dn(n,e)?.set??(d&&e in n?k=>n[e]=k:void 0)}var u,m=!1;r?[u,m]=Im(()=>n[e]):u=n[e],u===void 0&&i!==void 0&&(u=c(),h&&(s&&sp(),h(u)));var _;if(s?_=()=>{var k=n[e];return k===void 0?c():(l=!0,k)}:_=()=>{var k=n[e];return k!==void 0&&(a=void 0),k===void 0?a:k},s&&(t&yu)===0)return _;if(h){var g=n.$$legacy;return(function(k,x){return arguments.length>0?((!s||!x||g||m)&&h(x?_():k),k):_()})}var E=!1,T=((t&hp)!==0?Hs:Fa)(()=>(E=!1,_()));r&&b(T);var I=W;return(function(k,x){if(arguments.length>0){const P=x?b(T):s&&r?ln(k):k;return j(T,P),E=!0,a!==void 0&&(a=P),k}return _i&&E||(I.f&fn)!==0?T.v:b(T)})}function Sm(n){return new km(n)}class km{#t;#e;constructor(e){var t=new Map,i=(r,o)=>{var a=ja(o,!1,!1);return t.set(r,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(r,o){return b(t.get(o)??i(o,Reflect.get(r,o)))},has(r,o){return o===Ma?!0:(b(t.get(o)??i(o,Reflect.get(r,o))),Reflect.has(r,o))},set(r,o,a){return j(t.get(o)??i(o,a),a),Reflect.set(r,o,a)}});this.#e=(e.hydrate?om:qa)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Rt(),this.#t=s.$$events;for(const r of Object.keys(this.#e))r==="$set"||r==="$destroy"||r==="$on"||xs(this,r,{get(){return this.#e[r]},set(o){this.#e[r]=o},enumerable:!0});this.#e.$set=r=>{Object.assign(s,r)},this.#e.$destroy=()=>{am(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const i=(...s)=>t.call(this,...s);return this.#t[e].push(i),()=>{this.#t[e]=this.#t[e].filter(s=>s!==i)}}$destroy(){this.#e.$destroy()}}let ph;typeof HTMLElement=="function"&&(ph=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const i=this.$$c.$on(n,e);this.$$l_u.set(e,i)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return r=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),R(r,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=Am(this);for(const s of this.$$s)s in i&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const r=this.$$g_p(s.name);r in this.$$d||(this.$$d[r]=pr(r,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=Sm({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=jp(()=>{ro(()=>{this.$$r=!0;for(const s of yr(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const r=pr(s,this.$$d[s],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,r)}this.$$r=!1})});for(const s in this.$$l)for(const r of this.$$l[s]){const o=this.$$c.$on(s,r);this.$$l_u.set(r,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=pr(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return yr(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function pr(n,e,t,i){const s=t[n]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[n])return e;if(i==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Am(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function we(n,e,t,i,s,r){let o=class extends ph{constructor(){super(n,t,s),this.$$p_d=e}static get observedAttributes(){return yr(e).map(a=>(e[a].attribute||a).toLowerCase())}};return yr(e).forEach(a=>{xs(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=pr(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=dn(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),i.forEach(a=>{xs(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Va(n){$e===null&&gu(),Zi&&$e.l!==null?Nm($e).m.push(n):Go(()=>{const e=tn(n);if(typeof e=="function")return e})}function Rm(n){$e===null&&gu(),Va(()=>()=>tn(n))}function Nm(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const xm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(xm);const Pm=()=>{};var ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(n,e){if(!n)throw ts(e)},ts=function(n){return new Error("Firebase Database ("+mh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Om=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(u=64)),i.push(t[h],t[d],t[u],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_h(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Om(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Dm;const u=r<<2|a>>4;if(i.push(u),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vh=function(n){const e=_h(n);return Ga.encodeByteArray(e,!0)},kr=function(n){return vh(n).replace(/\./g,"")},Ar=function(n){try{return Ga.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n){return gh(void 0,n)}function gh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Lm(t)||(n[t]=gh(n[t],e[t]));return n}function Lm(n){return n!=="__proto__"}/**
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
 */function $m(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fm=()=>$m().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof ic>"u")return;const n=ic.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ar(n[1]);return e&&JSON.parse(e)},Ka=()=>{try{return Pm()||Fm()||Um()||jm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bh=n=>Ka()?.emulatorHosts?.[n],zm=n=>{const e=bh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},yh=()=>Ka()?.config,wh=n=>Ka()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ns(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Eh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Wm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[kr(JSON.stringify(t)),kr(JSON.stringify(o)),""].join(".")}const Cs={};function qm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Cs))Cs[e]?n.emulator.push(e):n.prod.push(e);return n}function Hm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sc=!1;function Ih(n,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||Cs[n]===e||Cs[n]||sc)return;Cs[n]=e;function t(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=qm().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,m){u.setAttribute("width","24"),u.setAttribute("id",m),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{sc=!0,o()},u}function h(u,m){u.setAttribute("id",m),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=Hm(i),m=t("text"),_=document.getElementById(m)||document.createElement("span"),g=t("learnmore"),E=document.getElementById(g)||document.createElement("a"),T=t("preprendIcon"),I=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const k=u.element;a(k),h(E,g);const x=c();l(I,T),k.append(I,_,E,x),document.body.appendChild(k)}r?(_.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Bm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){const n=_t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Km(){return mh.NODE_ADMIN===!0}function Ym(){try{return typeof indexedDB=="object"}catch{return!1}}function Qm(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Jm,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Xm(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,a,i)}}function Xm(n,e){return n.replace(Zm,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Zm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){return JSON.parse(n)}function Je(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ds(Ar(r[0])||""),t=Ds(Ar(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},e_=function(n){const e=Th(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},t_=function(n){const e=Th(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Vi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ta(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ai(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(rc(r)&&rc(o)){if(!ai(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function rc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function gs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function bs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function i_(n,e){const t=new s_(n,e);return t.subscribe.bind(t)}class s_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");r_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ko),s.error===void 0&&(s.error=ko),s.complete===void 0&&(s.complete=ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ko(){}function Sh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,C(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ao=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Tt(n){return n&&n._delegate?n._delegate:n}class li{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class a_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ya;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:l_(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(n){return n===Qn?void 0:n}function c_(n){return n.instantiationMode==="EAGER"}/**
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
 */class u_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const h_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},d_=ue.INFO,f_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},p_=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=f_[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const m_=(n,e)=>e.some(t=>n instanceof t);let oc,ac;function __(){return oc||(oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v_(){return ac||(ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kh=new WeakMap,na=new WeakMap,Ah=new WeakMap,Ao=new WeakMap,Xa=new WeakMap;function g_(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t($n(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kh.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function b_(n){if(na.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});na.set(n,e)}let ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ah.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function y_(n){ia=n(ia)}function w_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ro(this),e,...t);return Ah.set(i,e.sort?e.sort():[e]),$n(i)}:v_().includes(n)?function(...e){return n.apply(Ro(this),e),$n(kh.get(this))}:function(...e){return $n(n.apply(Ro(this),e))}}function E_(n){return typeof n=="function"?w_(n):(n instanceof IDBTransaction&&b_(n),m_(n,__())?new Proxy(n,ia):n)}function $n(n){if(n instanceof IDBRequest)return g_(n);if(Ao.has(n))return Ao.get(n);const e=E_(n);return e!==n&&(Ao.set(n,e),Xa.set(e,n)),e}const Ro=n=>Xa.get(n);function I_(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=$n(o);return i&&o.addEventListener("upgradeneeded",l=>{i($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const C_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],No=new Map;function lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=T_.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||C_.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return No.set(e,r),r}y_(n=>({...n,get:(e,t,i)=>lc(e,t)||n.get(e,t,i),has:(e,t)=>!!lc(e,t)||n.has(e,t)}));/**
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
 */class S_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(k_(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function k_(n){return n.getComponent()?.type==="VERSION"}const sa="@firebase/app",cc="0.14.5";/**
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
 */const gn=new Ja("@firebase/app"),A_="@firebase/app-compat",R_="@firebase/analytics-compat",N_="@firebase/analytics",x_="@firebase/app-check-compat",P_="@firebase/app-check",O_="@firebase/auth",D_="@firebase/auth-compat",M_="@firebase/database",L_="@firebase/data-connect",$_="@firebase/database-compat",F_="@firebase/functions",U_="@firebase/functions-compat",j_="@firebase/installations",z_="@firebase/installations-compat",W_="@firebase/messaging",q_="@firebase/messaging-compat",H_="@firebase/performance",B_="@firebase/performance-compat",V_="@firebase/remote-config",G_="@firebase/remote-config-compat",K_="@firebase/storage",Y_="@firebase/storage-compat",Q_="@firebase/firestore",J_="@firebase/ai",X_="@firebase/firestore-compat",Z_="firebase",ev="12.5.0";/**
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
 */const ra="[DEFAULT]",tv={[sa]:"fire-core",[A_]:"fire-core-compat",[N_]:"fire-analytics",[R_]:"fire-analytics-compat",[P_]:"fire-app-check",[x_]:"fire-app-check-compat",[O_]:"fire-auth",[D_]:"fire-auth-compat",[M_]:"fire-rtdb",[L_]:"fire-data-connect",[$_]:"fire-rtdb-compat",[F_]:"fire-fn",[U_]:"fire-fn-compat",[j_]:"fire-iid",[z_]:"fire-iid-compat",[W_]:"fire-fcm",[q_]:"fire-fcm-compat",[H_]:"fire-perf",[B_]:"fire-perf-compat",[V_]:"fire-rc",[G_]:"fire-rc-compat",[K_]:"fire-gcs",[Y_]:"fire-gcs-compat",[Q_]:"fire-fst",[X_]:"fire-fst-compat",[J_]:"fire-vertex","fire-js":"fire-js",[Z_]:"fire-js-all"};/**
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
 */const Nr=new Map,nv=new Map,oa=new Map;function uc(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gi(n){const e=n.name;if(oa.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,n);for(const t of Nr.values())uc(t,n);for(const t of nv.values())uc(t,n);return!0}function Za(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Mt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ks("app","Firebase",iv);/**
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
 */class sv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=ev;function Rh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ra,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(t||(t=yh()),!t)throw Fn.create("no-options");const r=Nr.get(s);if(r){if(ai(t,r.options)&&ai(i,r.config))return r;throw Fn.create("duplicate-app",{appName:s})}const o=new u_(s);for(const l of oa.values())o.addComponent(l);const a=new sv(t,i,o);return Nr.set(s,a),a}function Nh(n=ra){const e=Nr.get(n);if(!e&&n===ra&&yh())return Rh();if(!e)throw Fn.create("no-app",{appName:n});return e}function Un(n,e,t){let i=tv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(o.join(" "));return}Gi(new li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rv="firebase-heartbeat-database",ov=1,Ms="firebase-heartbeat-store";let xo=null;function xh(){return xo||(xo=I_(rv,ov,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fn.create("idb-open",{originalErrorMessage:n.message})})),xo}async function av(n){try{const t=(await xh()).transaction(Ms),i=await t.objectStore(Ms).get(Ph(n));return await t.done,i}catch(e){if(e instanceof Gn)gn.warn(e.message);else{const t=Fn.create("idb-get",{originalErrorMessage:e?.message});gn.warn(t.message)}}}async function hc(n,e){try{const i=(await xh()).transaction(Ms,"readwrite");await i.objectStore(Ms).put(e,Ph(n)),await i.done}catch(t){if(t instanceof Gn)gn.warn(t.message);else{const i=Fn.create("idb-set",{originalErrorMessage:t?.message});gn.warn(i.message)}}}function Ph(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lv=1024,cv=30;class uv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>cv){const s=fv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dc(),{heartbeatsToSend:t,unsentEntries:i}=hv(this._heartbeatsCache.heartbeats),s=kr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gn.warn(e),""}}}function dc(){return new Date().toISOString().substring(0,10)}function hv(n,e=lv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),fc(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),fc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ym()?Qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await av(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fc(n){return kr(JSON.stringify({version:2,heartbeats:n})).length}function fv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function pv(n){Gi(new li("platform-logger",e=>new S_(e),"PRIVATE")),Gi(new li("heartbeat",e=>new uv(e),"PRIVATE")),Un(sa,cc,n),Un(sa,cc,"esm2020"),Un("fire-js","")}pv("");var mv="firebase",_v="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(mv,_v,"app");function Oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vv=Oh,Dh=new Ks("auth","Firebase",Oh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Ja("@firebase/auth");function gv(n,...e){xr.logLevel<=ue.WARN&&xr.warn(`Auth (${ss}): ${n}`,...e)}function mr(n,...e){xr.logLevel<=ue.ERROR&&xr.error(`Auth (${ss}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,...e){throw el(n,...e)}function Xt(n,...e){return el(n,...e)}function Mh(n,e,t){const i={...vv(),[e]:t};return new Ks("auth","Firebase",i).create(e,{appName:n.name})}function _n(n){return Mh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function el(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Dh.create(n,...e)}function L(n,e,...t){if(!n)throw el(e,...t)}function cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mr(e),new Error(e)}function bn(n,e){n||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){return typeof self<"u"&&self.location?.href||""}function bv(){return pc()==="http:"||pc()==="https:"}function pc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bv()||Vm()||"connection"in navigator)?navigator.onLine:!0}function wv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,bn(t>e,"Short delay should be less than long delay!"),this.isMobile=Qa()||Ch()}get(){return yv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n,e){bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cv=new Ys(3e4,6e4);function Kn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Sn(n,e,t,i,s={}){return $h(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=is({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...r};return Bm()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&ns(n.emulatorConfig.host)&&(c.credentials="include"),Lh.fetch()(await Fh(n,n.config.apiHost,t,a),c)})}async function $h(n,e,t){n._canInitEmulator=!1;const i={...Ev,...e};try{const s=new Sv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw lr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw lr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw lr(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mh(n,h,c);Gt(n,h)}}catch(s){if(s instanceof Gn)throw s;Gt(n,"network-request-failed",{message:String(s)})}}async function Qs(n,e,t,i,s={}){const r=await Sn(n,e,t,i,s);return"mfaPendingCredential"in r&&Gt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Fh(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?tl(n.config,s):`${n.config.apiScheme}://${s}`;return Iv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Tv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xt(this.auth,"network-request-failed")),Cv.get())})}}function lr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xt(n,e,i);return s.customData._tokenResponse=t,s}function mc(n){return n!==void 0&&n.enterprise!==void 0}class kv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Tv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Av(n,e){return Sn(n,"GET","/v2/recaptchaConfig",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(n,e){return Sn(n,"POST","/v1/accounts:delete",e)}async function Pr(n,e){return Sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nv(n,e=!1){const t=Tt(n),i=await t.getIdToken(e),s=nl(i);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:Ts(Po(s.auth_time)),issuedAtTime:Ts(Po(s.iat)),expirationTime:Ts(Po(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Po(n){return Number(n)*1e3}function nl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return mr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ar(t);return s?JSON.parse(s):(mr("Failed to decode base64 JWT payload"),null)}catch(s){return mr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function _c(n){const e=nl(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&xv(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(n){const e=n.auth,t=await n.getIdToken(),i=await Ki(n,Pr(e,{idToken:t}));L(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=s.providerUserInfo?.length?Uh(s.providerUserInfo):[],o=Dv(n.providerData,r),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,c=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new la(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function Ov(n){const e=Tt(n);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Uh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e){const t=await $h(n,{},async()=>{const i=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Fh(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return n.emulatorConfig&&ns(n.emulatorConfig.host)&&(l.credentials="include"),Lh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lv(n,e){return Sn(n,"POST","/v2/accounts:revokeToken",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=_c(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Mv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Di;return i&&(L(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(L(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new la(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nv(this,e)}reload(){return Ov(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Or(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await Ki(this,Rv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:m,providerData:_,stsTokenManager:g}=t;L(d&&g,e,"internal-error");const E=Di.fromJSON(this.name,g);L(typeof d=="string",e,"internal-error"),An(i,e.name),An(s,e.name),L(typeof u=="boolean",e,"internal-error"),L(typeof m=="boolean",e,"internal-error"),An(r,e.name),An(o,e.name),An(a,e.name),An(l,e.name),An(c,e.name),An(h,e.name);const T=new qt({uid:d,auth:e,email:s,emailVerified:u,displayName:i,isAnonymous:m,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:E,createdAt:c,lastLoginAt:h});return _&&Array.isArray(_)&&(T.providerData=_.map(I=>({...I}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,t,i=!1){const s=new Di;s.updateFromServerResponse(t);const r=new qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Or(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];L(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Uh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,a=new Di;a.updateFromIdToken(i);const l=new qt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new la(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map;function un(n){bn(n instanceof Function,"Expected a class definition");let e=vc.get(n);return e?(bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vc.set(n,e),e)}/**
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
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jh.type="NONE";const gc=jh;/**
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
 */function _r(n,e,t){return`firebase:${n}:${e}:${t}`}class Mi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=_r(this.userKey,s.apiKey,r),this.fullPersistenceKey=_r("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pr(this.auth,{idToken:e}).catch(()=>{});return t?qt._fromGetAccountInfoResponse(this.auth,t,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mi(un(gc),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||un(gc);const o=_r(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const u=await Pr(e,{idToken:h}).catch(()=>{});if(!u)break;d=await qt._fromGetAccountInfoResponse(e,u,h)}else d=qt._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Gh(e))return"Webos";if(Wh(e))return"Safari";if((e.includes("chrome/")||qh(e))&&!e.includes("edge/"))return"Chrome";if(Bh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function zh(n=_t()){return/firefox\//i.test(n)}function Wh(n=_t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qh(n=_t()){return/crios\//i.test(n)}function Hh(n=_t()){return/iemobile/i.test(n)}function Bh(n=_t()){return/android/i.test(n)}function Vh(n=_t()){return/blackberry/i.test(n)}function Gh(n=_t()){return/webos/i.test(n)}function il(n=_t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $v(n=_t()){return il(n)&&!!window.navigator?.standalone}function Fv(){return Gm()&&document.documentMode===10}function Kh(n=_t()){return il(n)||Bh(n)||Gh(n)||Vh(n)||/windows phone/i.test(n)||Hh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e=[]){let t;switch(n){case"Browser":t=bc(_t());break;case"Worker":t=`${bc(_t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ss}/${i}`}/**
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
 */class Uv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function jv(n,e={}){return Sn(n,"GET","/v2/passwordPolicy",Kn(n,e))}/**
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
 */const zv=6;class Wv{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??zv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yc(this),this.idTokenSubscription=new yc(this),this.beforeStateQueue=new Uv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=un(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pr(this,{idToken:e}),i=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(_n(this));const t=e?Tt(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jv(this),t=new Wv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Lv(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&un(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function gi(n){return Tt(n)}class yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=i_(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hv(n){lo=n}function Qh(n){return lo.loadJS(n)}function Bv(){return lo.recaptchaEnterpriseScript}function Vv(){return lo.gapiScript}function Gv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Kv{constructor(){this.enterprise=new Yv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Qv="recaptcha-enterprise",Jh="NO_RECAPTCHA";class Jv{constructor(e){this.type=Qv,this.auth=gi(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Av(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;mc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Jh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Kv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&mc(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Bv();l.length!==0&&(l+=a),Qh(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function wc(n,e,t,i=!1,s=!1){const r=new Jv(n);let o;if(s)o=Jh;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ca(n,e,t,i,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await wc(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wc(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n,e){const t=Za(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ai(r,e??{}))return s;Gt(s,"already-initialized")}return t.initialize({options:e})}function Zv(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(un);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function eg(n,e,t){const i=gi(n);L(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Xh(e),{host:o,port:a}=tg(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){L(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),L(ai(c,i.config.emulator)&&ai(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,ns(o)?(Eh(`${r}//${o}${l}`),Ih("Auth",!0)):ng()}function Xh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tg(n){const e=Xh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ec(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ec(o)}}}function Ec(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ng(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function ig(n,e){return Sn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){return Qs(n,"POST","/v1/accounts:signInWithPassword",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",Kn(n,e))}async function og(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends sl{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ls(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(e,t,"signInWithPassword",sg);case"emailLink":return rg(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(e,i,"signUpPassword",ig);case"emailLink":return og(e,{idToken:t,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(n,e){return Qs(n,"POST","/v1/accounts:signInWithIdp",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="http://localhost";class ci extends sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new ci(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Li(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Li(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Li(e,t)}buildRequest(){const e={requestUri:ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cg(n){const e=gs(bs(n)).link,t=e?gs(bs(e)).deep_link_id:null,i=gs(bs(n)).deep_link_id;return(i?gs(bs(i)).link:null)||i||t||e||n}class rl{constructor(e){const t=gs(bs(e)),i=t.apiKey??null,s=t.oobCode??null,r=lg(t.mode??null);L(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=cg(e);try{return new rl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=rl.parseLink(t);return L(i,"argument-error"),Ls._fromEmailAndCode(e,i.code,i.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Js extends Zh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Js{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ci._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Nn.credential(t,i)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Js{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Js{constructor(){super("twitter.com")}static credential(e,t){return ci._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pn.credential(t,i)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(n,e){return Qs(n,"POST","/v1/accounts:signUp",Kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await qt._fromIdTokenResponse(e,i,s),o=Ic(i);return new ui({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ic(i);return new ui({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ic(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Gn{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Dr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Dr(e,t,i,s)}}function ed(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Dr._fromErrorAndOperation(n,r,e,i):r})}async function hg(n,e,t=!1){const i=await Ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ui._forOperation(n,"link",i)}/**
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
 */async function dg(n,e,t=!1){const{auth:i}=n;if(Mt(i.app))return Promise.reject(_n(i));const s="reauthenticate";try{const r=await Ki(n,ed(i,s,e,n),t);L(r.idToken,i,"internal-error");const o=nl(r.idToken);L(o,i,"internal-error");const{sub:a}=o;return L(n.uid===a,i,"user-mismatch"),ui._forOperation(n,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&Gt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n,e,t=!1){if(Mt(n.app))return Promise.reject(_n(n));const i="signIn",s=await ed(n,i,e),r=await ui._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function fg(n,e){return td(gi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(n){const e=gi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pg(n,e,t){if(Mt(n.app))return Promise.reject(_n(n));const i=gi(n),o=await ca(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ug).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&nd(n),l}),a=await ui._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function mg(n,e,t){return Mt(n.app)?Promise.reject(_n(n)):fg(Tt(n),rs.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nd(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,e){return Sn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Tt(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ki(i,_g(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function gg(n,e,t,i){return Tt(n).onIdTokenChanged(e,t,i)}function bg(n,e,t){return Tt(n).beforeAuthStateChanged(e,t)}function yg(n,e,t,i){return Tt(n).onAuthStateChanged(e,t,i)}function wg(n){return Tt(n).signOut()}const Mr="__sak";/**
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
 */class id{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mr,"1"),this.storage.removeItem(Mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=1e3,Ig=10;class sd extends id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Fv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ig):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sd.type="LOCAL";const Cg=sd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rd.type="SESSION";const od=rd;/**
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
 */function Tg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new co(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Tg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ol("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function kg(n){Zt().location.href=n}/**
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
 */function ad(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function Ag(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rg(){return navigator?.serviceWorker?.controller||null}function Ng(){return ad()?self:null}/**
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
 */const ld="firebaseLocalStorageDb",xg=1,Lr="firebaseLocalStorage",cd="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uo(n,e){return n.transaction([Lr],e?"readwrite":"readonly").objectStore(Lr)}function Pg(){const n=indexedDB.deleteDatabase(ld);return new Xs(n).toPromise()}function ua(){const n=indexedDB.open(ld,xg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lr,{keyPath:cd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lr)?e(i):(i.close(),await Pg(),e(await ua()))})})}async function Cc(n,e,t){const i=uo(n,!0).put({[cd]:e,value:t});return new Xs(i).toPromise()}async function Og(n,e){const t=uo(n,!1).get(e),i=await new Xs(t).toPromise();return i===void 0?null:i.value}function Tc(n,e){const t=uo(n,!0).delete(e);return new Xs(t).toPromise()}const Dg=800,Mg=3;class ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Mg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ad()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(Ng()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ag(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await Cc(e,Mr,"1"),await Tc(e,Mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Cc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Og(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=uo(s,!1).getAll();return new Xs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ud.type="LOCAL";const Lg=ud;new Ys(3e4,6e4);/**
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
 */function $g(n,e){return e?un(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class al extends sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fg(n){return td(n.auth,new al(n),n.bypassAuthState)}function Ug(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),dg(t,new al(n),n.bypassAuthState)}async function jg(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),hg(t,new al(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fg;case"linkViaPopup":case"linkViaRedirect":return jg;case"reauthViaPopup":case"reauthViaRedirect":return Ug;default:Gt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Ys(2e3,1e4);class Ri extends hd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zg.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="pendingRedirect",vr=new Map;class qg extends hd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const i=await Hg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hg(n,e){const t=Gg(e),i=Vg(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Bg(n,e){vr.set(n._key(),e)}function Vg(n){return un(n._redirectPersistence)}function Gg(n){return _r(Wg,n.config.apiKey,n.name)}async function Kg(n,e,t=!1){if(Mt(n.app))return Promise.reject(_n(n));const i=gi(n),s=$g(i,e),o=await new qg(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=600*1e3;class Qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!dd(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Xt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sc(e))}saveEventToCache(e){this.cachedEventUids.add(Sc(e)),this.lastProcessedEventTime=Date.now()}}function Sc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Jg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e={}){return Sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xg(n);for(const t of e)try{if(nb(t))return}catch{}Gt(n,"unauthorized-domain")}function nb(n){const e=aa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!eb.test(t))return!1;if(Zg.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ib=new Ys(3e4,6e4);function kc(){const n=Zt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sb(n){return new Promise((e,t)=>{function i(){kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kc(),t(Xt(n,"network-request-failed"))},timeout:ib.get()})}if(Zt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Zt().gapi?.load)i();else{const s=Gv("iframefcb");return Zt()[s]=()=>{gapi.load?i():t(Xt(n,"network-request-failed"))},Qh(`${Vv()}?onload=${s}`).catch(r=>t(r))}}).catch(e=>{throw gr=null,e})}let gr=null;function rb(n){return gr=gr||sb(n),gr}/**
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
 */const ob=new Ys(5e3,15e3),ab="__/auth/iframe",lb="emulator/auth/iframe",cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tl(e,lb):`https://${n.config.authDomain}/${ab}`,i={apiKey:e.apiKey,appName:n.name,v:ss},s=ub.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${is(i).slice(1)}`}async function db(n){const e=await rb(n),t=Zt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:hb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cb,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xt(n,"network-request-failed"),a=Zt().setTimeout(()=>{r(o)},ob.get());function l(){Zt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,mb=600,_b="_blank",vb="http://localhost";class Ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(n,e,t,i=pb,s=mb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...fb,width:i.toString(),height:s.toString(),top:r,left:o},c=_t().toLowerCase();t&&(a=qh(c)?_b:t),zh(c)&&(e=e||vb,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[m,_])=>`${u}${m}=${_},`,"");if($v(c)&&a!=="_self")return bb(e||"",a),new Ac(null);const d=window.open(e||"",a,h);L(d,n,"popup-blocked");try{d.focus()}catch{}return new Ac(d)}function bb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const yb="__/auth/handler",wb="emulator/auth/handler",Eb=encodeURIComponent("fac");async function Rc(n,e,t,i,s,r){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ss,eventId:s};if(e instanceof Zh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Js){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${Eb}=${encodeURIComponent(l)}`:"";return`${Ib(n)}?${is(a).slice(1)}${c}`}function Ib({config:n}){return n.emulator?tl(n,wb):`https://${n.authDomain}/${yb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=od,this._completeRedirectFn=Kg,this._overrideRedirectResult=Bg}async _openPopup(e,t,i,s){bn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Rc(e,t,i,aa(),s);return gb(e,r,ol())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Rc(e,t,i,aa(),s);return kg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(bn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await db(e),i=new Qg(e);return t.register("authEvent",s=>(L(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oo,{type:Oo},s=>{const r=s?.[0]?.[Oo];r!==void 0&&t(!!r),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kh()||Wh()||il()}}const Tb=Cb;var Nc="@firebase/auth",xc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ab(n){Gi(new li("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yh(n)},c=new qv(i,s,r,l);return Zv(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Gi(new li("auth-internal",e=>{const t=gi(e.getProvider("auth").getImmediate());return(i=>new Sb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Nc,xc,kb(n)),Un(Nc,xc,"esm2020")}/**
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
 */const Rb=300,Nb=wh("authIdTokenMaxAge")||Rb;let Pc=null;const xb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Nb)return;const s=t?.token;Pc!==s&&(Pc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pb(n=Nh()){const e=Za(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xv(n,{popupRedirectResolver:Tb,persistence:[Lg,Cg,od]}),i=wh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=xb(r.toString());bg(t,o,()=>o(t.currentUser)),gg(t,a=>o(a))}}const s=bh("auth");return s&&eg(t,`http://${s}`),t}function Ob(){return document.getElementsByTagName("head")?.[0]??document}Hv({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Xt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Ob().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ab("Browser");var Oc={};const Dc="@firebase/database",Mc="1.1.0";/**
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
 */let fd="";function Db(n){fd=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ds(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mb(e)}}catch{}return new Lb},ei=pd("localStorage"),$b=pd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Ja("@firebase/database"),Fb=(function(){let n=1;return function(){return n++}})(),md=function(n){const e=o_(n),t=new n_;t.update(e);const i=t.digest();return Ga.encodeByteArray(i)},Zs=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Zs.apply(null,i):typeof i=="object"?e+=Je(i):e+=i,e+=" "}return e};let Ss=null,Lc=!0;const Ub=function(n,e){C(!0,"Can't turn on custom loggers persistently."),$i.logLevel=ue.VERBOSE,Ss=$i.log.bind($i)},st=function(...n){if(Lc===!0&&(Lc=!1,Ss===null&&$b.get("logging_enabled")===!0&&Ub()),Ss){const e=Zs.apply(null,n);Ss(e)}},er=function(n){return function(...e){st(n,...e)}},ha=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zs(...n);$i.error(e)},yn=function(...n){const e=`FIREBASE FATAL ERROR: ${Zs(...n)}`;throw $i.error(e),new Error(e)},xt=function(...n){const e="FIREBASE WARNING: "+Zs(...n);$i.warn(e)},jb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_d=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zb=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Yi="[MIN_NAME]",hi="[MAX_NAME]",os=function(n,e){if(n===e)return 0;if(n===Yi||e===hi)return-1;if(e===Yi||n===hi)return 1;{const t=$c(n),i=$c(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Wb=function(n,e){return n===e?0:n<e?-1:1},ds=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Je(e))},ll=function(n){if(typeof n!="object"||n===null)return Je(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Je(e[i]),t+=":",t+=ll(n[e[i]]);return t+="}",t},vd=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ct(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gd=function(n){C(!_d(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Bb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Vb=new RegExp("^-?(0*)\\d{1,10}$"),Gb=-2147483648,Kb=2147483647,$c=function(n){if(Vb.test(n)){const e=Number(n);if(e>=Gb&&e<=Kb)return e}return null},tr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Yb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Qb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class br{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}br.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="5",bd="v",yd="s",wd="r",Ed="f",Id=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cd="ls",Td="p",da="ac",Sd="websocket",kd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Rd(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let i;if(e===Sd)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kd)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xb(n)&&(t.ns=n.namespace);const s=[];return Ct(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.counters_={}}incrementCounter(e,t=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Mm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={},Mo={};function ul(n){const e=n.toString();return Do[e]||(Do[e]=new Zb),Do[e]}function ey(n,e){const t=n.toString();return Mo[t]||(Mo[t]=e()),Mo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&tr(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="start",ny="close",iy="pLPCommand",sy="pRTLPCB",Nd="id",xd="pw",Pd="ser",ry="cb",oy="seg",ay="ts",ly="d",cy="dframe",Od=1870,Dd=30,uy=Od-Dd,hy=25e3,dy=3e4;class Ni{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=er(e),this.stats_=ul(t),this.urlFn=l=>(this.appCheckToken&&(l[da]=this.appCheckToken),Rd(t,kd,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ty(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dy)),zb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hl((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fc)this.id=a,this.password=l;else if(o===ny)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fc]="t",i[Pd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ry]=this.scriptTagHolder.uniqueCallbackIdentifier),i[bd]=cl,this.transportSessionId&&(i[yd]=this.transportSessionId),this.lastSessionId&&(i[Cd]=this.lastSessionId),this.applicationId&&(i[Td]=this.applicationId),this.appCheckToken&&(i[da]=this.appCheckToken),typeof location<"u"&&location.hostname&&Id.test(location.hostname)&&(i[wd]=Ed);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qb()&&!Hb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=vh(t),s=vd(i,uy);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[cy]="t",i[Nd]=e,i[xd]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Je(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hl{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fb(),window[iy+this.uniqueCallbackIdentifier]=e,window[sy+this.uniqueCallbackIdentifier]=t,this.myIFrame=hl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nd]=this.myID,e[xd]=this.myPW,e[Pd]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dd+i.length<=Od;){const o=this.pendingSegs.shift();i=i+"&"+oy+s+"="+o.seg+"&"+ay+s+"="+o.ts+"&"+ly+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(hy)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=16384,py=45e3;let $r=null;typeof MozWebSocket<"u"?$r=MozWebSocket:typeof WebSocket<"u"&&($r=WebSocket);class zt{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=er(this.connId),this.stats_=ul(t),this.connURL=zt.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[bd]=cl,typeof location<"u"&&location.hostname&&Id.test(location.hostname)&&(o[wd]=Ed),t&&(o[yd]=t),i&&(o[Cd]=i),s&&(o[da]=s),r&&(o[Td]=r),Rd(e,Sd,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let i;Km(),this.mySock=new $r(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&$r!==null&&!zt.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ds(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=vd(t,fy);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(py))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static get ALL_TRANSPORTS(){return[Ni,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=zt&&zt.isAvailable();let i=t&&!zt.previouslyFailed();if(e.webSocketOnly&&(t||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[zt];else{const s=this.transports_=[];for(const r of $s.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);$s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$s.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=6e4,_y=5e3,vy=10*1024,gy=100*1024,Lo="t",Uc="d",by="s",jc="r",yy="e",zc="o",Wc="a",qc="n",Hc="p",wy="h";class Ey{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=er("c:"+this.id+":"),this.transportManager_=new $s(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lo in e){const t=e[Lo];t===Wc?this.upgradeIfSecondaryHealthy_():t===jc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ds("t",e),i=ds("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ds("t",e),i=ds("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ds(Lo,e);if(Uc in e){const i=e[Uc];if(t===wy){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===qc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===by?this.onConnectionShutdown_(i):t===jc?this.onReset_(i):t===yy?ha("Server Error: "+i):t===zc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ha("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),cl!==i&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(my))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_y))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Ld{static getInstance(){return new Fr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=32,Vc=768;class fe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function se(){return new fe("")}function K(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qn(n){return n.pieces_.length-n.pieceNum_}function ve(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new fe(n.pieces_,e)}function $d(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Iy(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fd(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ud(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new fe(e,0)}function He(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof fe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new fe(t,0)}function Y(n){return n.pieceNum_>=n.pieces_.length}function yt(n,e){const t=K(n),i=K(e);if(t===null)return e;if(t===i)return yt(ve(n),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function dl(n,e){if(qn(n)!==qn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Ht(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(qn(n)>qn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Cy{constructor(e,t){this.errorPrefix_=t,this.parts_=Fd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ao(this.parts_[i]);jd(this)}}function Ty(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ao(e),jd(n)}function Sy(n){const e=n.parts_.pop();n.byteLength_-=ao(e),n.parts_.length>0&&(n.byteLength_-=1)}function jd(n){if(n.byteLength_>Vc)throw new Error(n.errorPrefix_+"has a key path longer than "+Vc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bc+") or object contains a cycle "+Jn(n))}function Jn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Ld{static getInstance(){return new fl}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,ky=300*1e3,Gc=30*1e3,Ay=1.3,Ry=3e4,Ny="server_kill",Kc=3;class vn extends Md{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vn.nextPersistentConnectionId_++,this.log_=er("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=ky,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Je(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ya,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;vn.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tn(e,"w")){const i=Vi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||t_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=e_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ha("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ry&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ay)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+vn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Ey(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{xt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ny)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xt(d),l())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ta(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ll(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new fe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){st("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kc&&(this.reconnectDelay_=Gc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){st("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fd.replace(/\./g,"-")]=1,Qa()?e["framework.cordova"]=1:Ch()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fr.getInstance().currentlyOnline();return ta(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new G(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new G(Yi,e),s=new G(Yi,t);return this.compare(i,s)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class zd extends ho{static get __EMPTY_NODE(){return cr}static set __EMPTY_NODE(e){cr=e}compare(e,t){return os(e.name,t.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return G.MIN}maxPost(){return new G(hi,cr)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,cr)}toString(){return".key"}}const Fi=new zd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Qe.RED,this.left=s??wt.EMPTY_NODE,this.right=r??wt.EMPTY_NODE}copy(e,t,i,s,r){return new Qe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class xy{copy(e,t,i,s,r){return this}insert(e,t,i){return new Qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,t=wt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new wt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ur(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ur(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ur(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ur(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,e){return os(n.name,e.name)}function pl(n,e){return os(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;function Oy(n){fa=n}const Wd=function(n){return typeof n=="number"?"number:"+gd(n):"string:"+n},qd=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else C(n===fa||n.isEmpty(),"priority of unexpected type.");C(n===fa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;class Ye{static set __childrenNodeConstructor(e){Yc=e}static get __childrenNodeConstructor(){return Yc}constructor(e,t=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qd(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=K(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gd(this.value_):e+=this.value_,this.lazyHash_=md(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Ye.VALUE_TYPE_ORDER.indexOf(t),r=Ye.VALUE_TYPE_ORDER.indexOf(i);return C(s>=0,"Unknown leaf type: "+t),C(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd,Bd;function Dy(n){Hd=n}function My(n){Bd=n}class Ly extends ho{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?os(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return G.MIN}maxPost(){return new G(hi,new Ye("[PRIORITY-POST]",Bd))}makePost(e,t){const i=Hd(e);return new G(t,new Ye("[PRIORITY-POST]",i))}toString(){return".priority"}}const Le=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=Math.log(2);class Fy{constructor(e){const t=r=>parseInt(Math.log(r)/$y,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ur=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new Qe(u,d.node,Qe.BLACK,null,null);{const m=parseInt(h/2,10)+l,_=s(l,m),g=s(m+1,c);return d=n[m],u=t?t(d):d,new Qe(u,d.node,Qe.BLACK,_,g)}},r=function(l){let c=null,h=null,d=n.length;const u=function(_,g){const E=d-_,T=d;d-=_;const I=s(E+1,T),k=n[E],x=t?t(k):k;m(new Qe(x,k.node,g,null,I))},m=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));g?u(E,Qe.BLACK):(u(E,Qe.BLACK),u(E,Qe.RED))}return h},o=new Fy(n.length),a=r(o);return new wt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;const Si={};class hn{static get Default(){return C(Si&&Le,"ChildrenNode.ts has not been loaded"),$o=$o||new hn({".priority":Si},{".priority":Le}),$o}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Vi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wt?t:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,t){C(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(G.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ur(i,e.getCompare()):a=Si;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new hn(h,c)}addToIndexes(e,t){const i=Rr(this.indexes_,(s,r)=>{const o=Vi(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),s===Si)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ur(a,o.getCompare())}else return Si;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new hn(i,this.indexSet_)}removeFromIndexes(e,t){const i=Rr(this.indexes_,s=>{if(s===Si)return s;{const r=t.get(e.name);return r?s.remove(new G(e.name,r)):s}});return new hn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class F{static get EMPTY_NODE(){return ps||(ps=new F(new wt(pl),null,hn.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&qd(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ps:t}}getChild(e){const t=K(e);return t===null?this:this.getImmediateChild(t).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new G(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ps:this.priorityNode_;return new F(s,o,r)}}updateChild(e,t){const i=K(e);if(i===null)return t;{C(K(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ve(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Le,(o,a)=>{t[o]=a.val(e),i++,r&&F.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wd(this.getPriority().val())+":"),this.forEachChild(Le,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":md(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new G(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new G(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new G(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nr?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Le),s=t.getIterator(Le);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uy extends F{constructor(){super(new wt(pl),F.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const nr=new Uy;Object.defineProperties(G,{MIN:{value:new G(Yi,F.EMPTY_NODE)},MAX:{value:new G(hi,nr)}});zd.__EMPTY_NODE=F.EMPTY_NODE;Ye.__childrenNodeConstructor=F;Oy(nr);My(nr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=!0;function rt(n,e=null){if(n===null)return F.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ye(t,rt(e))}if(!(n instanceof Array)&&jy){const t=[];let i=!1;if(Ct(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=rt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new G(o,l)))}}),t.length===0)return F.EMPTY_NODE;const r=Ur(t,Py,o=>o.name,pl);if(i){const o=Ur(t,Le.getCompare());return new F(r,rt(e),new hn({".priority":o},{".priority":Le}))}else return new F(r,rt(e),hn.Default)}else{let t=F.EMPTY_NODE;return Ct(n,(i,s)=>{if(Tn(n,i)&&i.substring(0,1)!=="."){const r=rt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(rt(e))}}Dy(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends ho{constructor(e){super(),this.indexPath_=e,C(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?os(e.name,t.name):r}makePost(e,t){const i=rt(e),s=F.EMPTY_NODE.updateChild(this.indexPath_,i);return new G(t,s)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,nr);return new G(hi,e)}toString(){return Fd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends ho{compare(e,t){const i=e.node.compareTo(t.node);return i===0?os(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,t){const i=rt(e);return new G(t,i)}toString(){return".value"}}const qy=new Wy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){return{type:"value",snapshotNode:n}}function Qi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Fs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Us(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Hy(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Fs(t,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qi(t,i)):o.trackChildChange(Us(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Le,(s,r)=>{t.hasChild(s)||i.trackChildChange(Fs(s,r))}),t.isLeafNode()||t.forEachChild(Le,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Us(s,r,o))}else i.trackChildChange(Qi(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.indexedFilter_=new ml(e.getIndex()),this.index_=e.getIndex(),this.startPost_=js.getStartPost_(e),this.endPost_=js.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new G(t,i))||(i=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=F.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(F.EMPTY_NODE);const r=this;return t.forEachChild(Le,(o,a)=>{r.matches(new G(o,a))||(s=s.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new G(t,i))||(i=F.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,m)=>d(m,u)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new G(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:o(u,l);if(h&&!i.isEmpty()&&m>=0)return r?.trackChildChange(Us(t,i,d)),a.updateImmediateChild(t,i);{r?.trackChildChange(Fs(t,d));const g=a.updateImmediateChild(t,F.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(Qi(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Fs(c.name,c.node)),r.trackChildChange(Qi(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new _l;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vy(n){return n.loadsAllData()?new ml(n.getIndex()):n.hasLimit()?new By(n):new js(n)}function Qc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Le?t="$priority":n.index_===qy?t="$value":n.index_===Fi?t="$key":(C(n.index_ instanceof zy,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Je(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Je(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Je(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Je(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Je(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Jc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Le&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Md{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=er("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Qc(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Vi(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=jr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Qc(e._queryParams),i=e._path.toString(),s=new Ya;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+is(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ds(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return{value:null,children:new Map}}function Gd(n,e,t){if(Y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=K(e);n.children.has(i)||n.children.set(i,zr());const s=n.children.get(i);e=ve(e),Gd(s,e,t)}}function pa(n,e,t){n.value!==null?t(e,n.value):Ky(n,(i,s)=>{const r=new fe(e.toString()+"/"+i);pa(s,r,t)})}function Ky(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Ct(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=10*1e3,Qy=30*1e3,Jy=300*1e3;class Xy{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yy(e);const i=Xc+(Qy-Xc)*Math.random();ks(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ct(e,(s,r)=>{r>0&&Tn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function Kd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Bt.ACK_USER_WRITE,this.source=Kd()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fe(e));return new Wr(se(),t,this.revert)}}else return C(K(this.path)===e,"operationForChild called for unrelated child."),new Wr(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.source=e,this.path=t,this.type=Bt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new zs(this.source,se()):new zs(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Bt.OVERWRITE}operationForChild(e){return Y(this.path)?new di(this.source,se(),this.snap.getImmediateChild(e)):new di(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Bt.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new fe(e));return t.isEmpty()?null:t.value?new di(this.source,se(),t.value):new Ws(this.source,se(),t)}else return C(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=K(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ew(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Hy(o.childName,o.snapshotNode))}),ms(n,s,"child_removed",e,i,t),ms(n,s,"child_added",e,i,t),ms(n,s,"child_moved",r,i,t),ms(n,s,"child_changed",e,i,t),ms(n,s,"value",e,i,t),s}function ms(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>nw(n,a,l)),o.forEach(a=>{const l=tw(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function tw(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nw(n,e,t){if(e.childName==null||t.childName==null)throw ts("Should only compare child_ events.");const i=new G(e.childName,e.snapshotNode),s=new G(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e){return{eventCache:n,serverCache:e}}function As(n,e,t,i){return fo(new fi(e,t,i),n.serverCache)}function Yd(n,e,t,i){return fo(n.eventCache,new fi(e,t,i))}function ma(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;const iw=()=>(Fo||(Fo=new wt(Wb)),Fo);class ye{static fromObject(e){let t=new ye(null);return Ct(e,(i,s)=>{t=t.set(new fe(i),s)}),t}constructor(e,t=iw()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:se(),value:this.value};if(Y(e))return null;{const i=K(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ve(e),t);return r!=null?{path:He(new fe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=K(e),i=this.children.get(t);return i!==null?i.subtree(ve(e)):new ye(null)}}set(e,t){if(Y(e))return new ye(t,this.children);{const i=K(e),r=(this.children.get(i)||new ye(null)).set(ve(e),t),o=this.children.insert(i,r);return new ye(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const t=K(e),i=this.children.get(t);if(i){const s=i.remove(ve(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ye(null):new ye(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const t=K(e),i=this.children.get(t);return i?i.get(ve(e)):null}}setTree(e,t){if(Y(e))return t;{const i=K(e),r=(this.children.get(i)||new ye(null)).setTree(ve(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ye(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(He(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,se(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Y(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),He(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,se(),t)}foreachOnPath_(e,t,i){if(Y(e))return this;{this.value&&i(t,this.value);const s=K(e),r=this.children.get(s);return r?r.foreachOnPath_(ve(e),He(t,s),i):new ye(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(He(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new ye(null))}}function Rs(n,e,t){if(Y(e))return new Vt(new ye(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=yt(s,e);return r=r.updateChild(o,t),new Vt(n.writeTree_.set(s,r))}else{const s=new ye(t),r=n.writeTree_.setTree(e,s);return new Vt(r)}}}function Zc(n,e,t){let i=n;return Ct(t,(s,r)=>{i=Rs(i,He(e,s),r)}),i}function eu(n,e){if(Y(e))return Vt.empty();{const t=n.writeTree_.setTree(e,new ye(null));return new Vt(t)}}function _a(n,e){return bi(n,e)!=null}function bi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(yt(t.path,e)):null}function tu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Le,(i,s)=>{e.push(new G(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new G(i,s.value))}),e}function jn(n,e){if(Y(e))return n;{const t=bi(n,e);return t!=null?new Vt(new ye(t)):new Vt(n.writeTree_.subtree(e))}}function va(n){return n.writeTree_.isEmpty()}function Ji(n,e){return Qd(se(),n.writeTree_,e)}function Qd(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Qd(He(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(He(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,e){return ef(e,n)}function sw(n,e,t,i,s){C(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Rs(n.visibleWrites,e,t)),n.lastWriteId=i}function rw(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function ow(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&aw(a,i.path)?s=!1:Ht(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return lw(n),!0;if(i.snap)n.visibleWrites=eu(n.visibleWrites,i.path);else{const a=i.children;Ct(a,l=>{n.visibleWrites=eu(n.visibleWrites,He(i.path,l))})}return!0}else return!1}function aw(n,e){if(n.snap)return Ht(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ht(He(n.path,t),e))return!0;return!1}function lw(n){n.visibleWrites=Jd(n.allWrites,cw,se()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cw(n){return n.visible}function Jd(n,e,t){let i=Vt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Ht(t,o)?(a=yt(t,o),i=Rs(i,a,r.snap)):Ht(o,t)&&(a=yt(o,t),i=Rs(i,se(),r.snap.getChild(a)));else if(r.children){if(Ht(t,o))a=yt(t,o),i=Zc(i,a,r.children);else if(Ht(o,t))if(a=yt(o,t),Y(a))i=Zc(i,se(),r.children);else{const l=Vi(r.children,K(a));if(l){const c=l.getChild(ve(a));i=Rs(i,se(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return i}function Xd(n,e,t,i,s){if(!i&&!s){const r=bi(n.visibleWrites,e);if(r!=null)return r;{const o=jn(n.visibleWrites,e);if(va(o))return t;if(t==null&&!_a(o,se()))return null;{const a=t||F.EMPTY_NODE;return Ji(o,a)}}}else{const r=jn(n.visibleWrites,e);if(!s&&va(r))return t;if(!s&&t==null&&!_a(r,se()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ht(c.path,e)||Ht(e,c.path))},a=Jd(n.allWrites,o,e),l=t||F.EMPTY_NODE;return Ji(a,l)}}}function uw(n,e,t){let i=F.EMPTY_NODE;const s=bi(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Le,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=jn(n.visibleWrites,e);return t.forEachChild(Le,(o,a)=>{const l=Ji(jn(r,new fe(o)),a);i=i.updateImmediateChild(o,l)}),tu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=jn(n.visibleWrites,e);return tu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function hw(n,e,t,i,s){C(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,t);if(_a(n.visibleWrites,r))return null;{const o=jn(n.visibleWrites,r);return va(o)?s.getChild(t):Ji(o,s.getChild(t))}}function dw(n,e,t,i){const s=He(e,t),r=bi(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=jn(n.visibleWrites,s);return Ji(o,i.getNode().getImmediateChild(t))}else return null}function fw(n,e){return bi(n.visibleWrites,e)}function pw(n,e,t,i,s,r,o){let a;const l=jn(n.visibleWrites,e),c=bi(l,se());if(c!=null)a=c;else if(t!=null)a=Ji(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=u.getNext();for(;m&&h.length<s;)d(m,i)!==0&&h.push(m),m=u.getNext();return h}else return[]}function mw(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function qr(n,e,t,i){return Xd(n.writeTree,n.treePath,e,t,i)}function yl(n,e){return uw(n.writeTree,n.treePath,e)}function nu(n,e,t,i){return hw(n.writeTree,n.treePath,e,t,i)}function Hr(n,e){return fw(n.writeTree,He(n.treePath,e))}function _w(n,e,t,i,s,r){return pw(n.writeTree,n.treePath,e,t,i,s,r)}function wl(n,e,t){return dw(n.writeTree,n.treePath,e,t)}function Zd(n,e){return ef(He(n.treePath,e),n.writeTree)}function ef(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Us(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Fs(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Qi(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Us(i,e.snapshotNode,s.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const tf=new gw;class El{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wl(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),r=_w(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n){return{filter:n}}function yw(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ww(n,e,t,i,s){const r=new vw;let o,a;if(t.type===Bt.OVERWRITE){const c=t;c.source.fromUser?o=ga(n,e,c.path,c.snap,i,s,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=Br(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Bt.MERGE){const c=t;c.source.fromUser?o=Iw(n,e,c.path,c.children,i,s,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ba(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Bt.ACK_USER_WRITE){const c=t;c.revert?o=Sw(n,e,c.path,i,s,r):o=Cw(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Bt.LISTEN_COMPLETE)o=Tw(n,e,t.path,i,r);else throw ts("Unknown operation type: "+t.type);const l=r.getChanges();return Ew(e,o,l),{viewCache:o,changes:l}}function Ew(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ma(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Vd(ma(e)))}}function nf(n,e,t,i,s,r){const o=e.eventCache;if(Hr(i,t)!=null)return e;{let a,l;if(Y(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pi(e),h=c instanceof F?c:F.EMPTY_NODE,d=yl(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=qr(i,pi(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(t);if(c===".priority"){C(qn(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=nu(i,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=ve(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=nu(i,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=wl(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,s,r):a=o.getNode()}}return As(e,a,o.isFullyInitialized()||Y(t),n.filter.filtersNodes())}}function Br(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(Y(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),m,null)}else{const m=K(t);if(!l.isCompleteForPath(t)&&qn(t)>1)return e;const _=ve(t),E=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=h.updatePriority(l.getNode(),E):c=h.updateChild(l.getNode(),m,E,_,tf,null)}const d=Yd(e,c,l.isFullyInitialized()||Y(t),h.filtersNodes()),u=new El(s,d,r);return nf(n,d,t,s,u,a)}function ga(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new El(s,e,r);if(Y(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=As(e,c,!0,n.filter.filtersNodes());else{const d=K(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=As(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=ve(t),m=a.getNode().getImmediateChild(d);let _;if(Y(u))_=i;else{const g=h.getCompleteChild(d);g!=null?$d(u)===".priority"&&g.getChild(Ud(u)).isEmpty()?_=g:_=g.updateChild(u,i):_=F.EMPTY_NODE}if(m.equals(_))l=e;else{const g=n.filter.updateChild(a.getNode(),d,_,u,h,o);l=As(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function iu(n,e){return n.eventCache.isCompleteForChild(e)}function Iw(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=He(t,l);iu(e,K(h))&&(a=ga(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=He(t,l);iu(e,K(h))||(a=ga(n,a,h,c,s,r,o))}),a}function su(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ba(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(t)?c=i:c=new ye(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=su(n,m,u);l=Br(n,l,new fe(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const m=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),g=su(n,_,u);l=Br(n,l,new fe(d),g,s,r,o,a)}}),l}function Cw(n,e,t,i,s,r,o){if(Hr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Br(n,e,t,l.getNode().getChild(t),s,r,a,o);if(Y(t)){let c=new ye(null);return l.getNode().forEachChild(Fi,(h,d)=>{c=c.set(new fe(h),d)}),ba(n,e,t,c,s,r,a,o)}else return e}else{let c=new ye(null);return i.foreach((h,d)=>{const u=He(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),ba(n,e,t,c,s,r,a,o)}}function Tw(n,e,t,i,s){const r=e.serverCache,o=Yd(e,r.getNode(),r.isFullyInitialized()||Y(t),r.isFiltered());return nf(n,o,t,i,tf,s)}function Sw(n,e,t,i,s,r){let o;if(Hr(i,t)!=null)return e;{const a=new El(i,e,s),l=e.eventCache.getNode();let c;if(Y(t)||K(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qr(i,pi(e));else{const d=e.serverCache.getNode();C(d instanceof F,"serverChildren would be complete if leaf node"),h=yl(i,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=K(t);let d=wl(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,ve(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,F.EMPTY_NODE,ve(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qr(i,pi(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Hr(i,se())!=null,As(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ml(i.getIndex()),r=Vy(i);this.processor_=bw(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,a.getNode(),null),h=new fi(l,o.isFullyInitialized(),s.filtersNodes()),d=new fi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fo(d,h),this.eventGenerator_=new Zy(this.query_)}get query(){return this.query_}}function Aw(n){return n.viewCache_.serverCache.getNode()}function Rw(n,e){const t=pi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(K(e)).isEmpty())?t.getChild(e):null}function ru(n){return n.eventRegistrations_.length===0}function Nw(n,e){n.eventRegistrations_.push(e)}function ou(n,e,t){const i=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function au(n,e,t,i){e.type===Bt.MERGE&&e.source.queryId!==null&&(C(pi(n.viewCache_),"We should always have a full cache before handling merges"),C(ma(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ww(n.processor_,s,e,t,i);return yw(n.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,sf(n,r.changes,r.viewCache.eventCache.getNode(),null)}function xw(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Le,(r,o)=>{i.push(Qi(r,o))}),t.isFullyInitialized()&&i.push(Vd(t.getNode())),sf(n,i,t.getNode(),e)}function sf(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return ew(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class Pw{constructor(){this.views=new Map}}function Ow(n){C(!Vr,"__referenceConstructor has already been defined"),Vr=n}function Dw(){return C(Vr,"Reference.ts has not been loaded"),Vr}function Mw(n){return n.views.size===0}function Il(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return C(r!=null,"SyncTree gave us an op for an invalid query."),au(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(au(o,e,t,i));return r}}function Lw(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=qr(t,s?i:null),l=!1;a?l=!0:i instanceof F?(a=yl(t,i),l=!1):(a=F.EMPTY_NODE,l=!1);const c=fo(new fi(a,l,!1),new fi(i,s,!1));return new kw(e,c)}return o}function $w(n,e,t,i,s,r){const o=Lw(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Nw(o,t),xw(o,t)}function Fw(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Hn(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ou(c,t,i)),ru(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ou(l,t,i)),ru(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Hn(n)&&r.push(new(Dw())(e._repo,e._path)),{removed:r,events:o}}function rf(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ui(n,e){let t=null;for(const i of n.views.values())t=t||Rw(i,e);return t}function of(n,e){if(e._queryParams.loadsAllData())return po(n);{const i=e._queryIdentifier;return n.views.get(i)}}function af(n,e){return of(n,e)!=null}function Hn(n){return po(n)!=null}function po(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function Uw(n){C(!Gr,"__referenceConstructor has already been defined"),Gr=n}function jw(){return C(Gr,"Reference.ts has not been loaded"),Gr}let zw=1;class lu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=mw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ww(n,e,t,i,s){return sw(n.pendingWriteTree_,e,t,i,s),s?ir(n,new di(Kd(),e,t)):[]}function xi(n,e,t=!1){const i=rw(n.pendingWriteTree_,e);if(ow(n.pendingWriteTree_,e)){let r=new ye(null);return i.snap!=null?r=r.set(se(),!0):Ct(i.children,o=>{r=r.set(new fe(o),!0)}),ir(n,new Wr(i.path,r,t))}else return[]}function mo(n,e,t){return ir(n,new di(vl(),e,t))}function qw(n,e,t){const i=ye.fromObject(t);return ir(n,new Ws(vl(),e,i))}function Hw(n,e){return ir(n,new zs(vl(),e))}function Bw(n,e,t){const i=Cl(n,t);if(i){const s=Tl(i),r=s.path,o=s.queryId,a=yt(r,e),l=new zs(gl(o),a);return Sl(n,r,l)}else return[]}function ya(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||af(o,e))){const l=Fw(o,e,t,i);Mw(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,m)=>Hn(m));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=Kw(u);for(let _=0;_<m.length;++_){const g=m[_],E=g.query,T=hf(n,g);n.listenProvider_.startListening(Ns(E),Kr(n,E),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(Ns(e),null):c.forEach(u=>{const m=n.queryToTagMap.get(_o(u));n.listenProvider_.stopListening(Ns(u),m)}))}Yw(n,c)}return a}function Vw(n,e,t,i){const s=Cl(n,i);if(s!=null){const r=Tl(s),o=r.path,a=r.queryId,l=yt(o,e),c=new di(gl(a),l,t);return Sl(n,o,c)}else return[]}function Gw(n,e,t,i){const s=Cl(n,i);if(s){const r=Tl(s),o=r.path,a=r.queryId,l=yt(o,e),c=ye.fromObject(t),h=new Ws(gl(a),l,c);return Sl(n,o,h)}else return[]}function cu(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,m)=>{const _=yt(u,s);r=r||Ui(m,_),o=o||Hn(m)});let a=n.syncPointTree_.get(s);a?(o=o||Hn(a),r=r||Ui(a,se())):(a=new Pw,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=F.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((m,_)=>{const g=Ui(_,se());g&&(r=r.updateImmediateChild(m,g))}));const c=af(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=_o(e);C(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=Qw();n.queryToTagMap.set(u,m),n.tagToQueryMap.set(m,u)}const h=bl(n.pendingWriteTree_,s);let d=$w(a,e,t,h,r,l);if(!c&&!o&&!i){const u=of(a,e);d=d.concat(Jw(n,e,u))}return d}function lf(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=yt(o,e),c=Ui(a,l);if(c)return c});return Xd(s,e,r,t,!0)}function ir(n,e){return cf(e,n.syncPointTree_,null,bl(n.pendingWriteTree_,se()))}function cf(n,e,t,i){if(Y(n.path))return uf(n,e,t,i);{const s=e.get(se());t==null&&s!=null&&(t=Ui(s,se()));let r=[];const o=K(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Zd(i,o);r=r.concat(cf(a,l,c,h))}return s&&(r=r.concat(Il(s,n,i,t))),r}}function uf(n,e,t,i){const s=e.get(se());t==null&&s!=null&&(t=Ui(s,se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Zd(i,o),h=n.operationForChild(o);h&&(r=r.concat(uf(h,a,l,c)))}),s&&(r=r.concat(Il(s,n,i,t))),r}function hf(n,e){const t=e.query,i=Kr(n,t);return{hashFn:()=>(Aw(e)||F.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Bw(n,t._path,i):Hw(n,t._path);{const r=Bb(s,t);return ya(n,t,null,r)}}}}function Kr(n,e){const t=_o(e);return n.queryToTagMap.get(t)}function _o(n){return n._path.toString()+"$"+n._queryIdentifier}function Cl(n,e){return n.tagToQueryMap.get(e)}function Tl(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new fe(n.substr(0,e))}}function Sl(n,e,t){const i=n.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const s=bl(n.pendingWriteTree_,e);return Il(i,t,s,null)}function Kw(n){return n.fold((e,t,i)=>{if(t&&Hn(t))return[po(t)];{let s=[];return t&&(s=rf(t)),Ct(i,(r,o)=>{s=s.concat(o)}),s}})}function Ns(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(jw())(n._repo,n._path):n}function Yw(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=_o(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Qw(){return zw++}function Jw(n,e,t){const i=e._path,s=Kr(n,e),r=hf(n,t),o=n.listenProvider_.startListening(Ns(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)C(!Hn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!Y(c)&&h&&Hn(h))return[po(h).query];{let u=[];return h&&(u=u.concat(rf(h).map(m=>m.query))),Ct(d,(m,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Ns(h),Kr(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kl(t)}node(){return this.node_}}class Al{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=He(this.path_,e);return new Al(this.syncTree_,t)}node(){return lf(this.syncTree_,this.path_)}}const Xw=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},uu=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Zw(n[".sv"],e,t);if(typeof n[".sv"]=="object")return e1(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Zw=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},e1=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const s=e.node();if(C(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},t1=function(n,e,t,i){return Rl(e,new Al(t,n),i)},n1=function(n,e,t){return Rl(n,new kl(e),t)};function Rl(n,e,t){const i=n.getPriority().val(),s=uu(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=uu(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ye(a,rt(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ye(s))),o.forEachChild(Le,(a,l)=>{const c=Rl(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function xl(n,e){let t=e instanceof fe?e:new fe(e),i=n,s=K(t);for(;s!==null;){const r=Vi(i.node.children,s)||{children:{},childCount:0};i=new Nl(s,i,r),t=ve(t),s=K(t)}return i}function as(n){return n.node.value}function df(n,e){n.node.value=e,wa(n)}function ff(n){return n.node.childCount>0}function i1(n){return as(n)===void 0&&!ff(n)}function vo(n,e){Ct(n.node.children,(t,i)=>{e(new Nl(t,n,i))})}function pf(n,e,t,i){t&&e(n),vo(n,s=>{pf(s,e,!0)})}function s1(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function sr(n){return new fe(n.parent===null?n.name:sr(n.parent)+"/"+n.name)}function wa(n){n.parent!==null&&r1(n.parent,n.name,n)}function r1(n,e,t){const i=i1(t),s=Tn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,wa(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,wa(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=/[\[\].#$\/\u0000-\u001F\u007F]/,a1=/[\[\].#$\u0000-\u001F\u007F]/,Uo=10*1024*1024,mf=function(n){return typeof n=="string"&&n.length!==0&&!o1.test(n)},_f=function(n){return typeof n=="string"&&n.length!==0&&!a1.test(n)},l1=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_f(n)},vf=function(n,e,t){const i=t instanceof fe?new Cy(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Jn(i));if(typeof e=="function")throw new Error(n+"contains a function "+Jn(i)+" with contents = "+e.toString());if(_d(e))throw new Error(n+"contains "+e.toString()+" "+Jn(i));if(typeof e=="string"&&e.length>Uo/3&&ao(e)>Uo)throw new Error(n+"contains a string greater than "+Uo+" utf8 bytes "+Jn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ct(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mf(o)))throw new Error(n+" contains an invalid key ("+o+") "+Jn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ty(i,o),vf(n,a,i),Sy(i)}),s&&r)throw new Error(n+' contains ".value" child '+Jn(i)+" in addition to actual children.")}},gf=function(n,e,t,i){if(!_f(t))throw new Error(Sh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},c1=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gf(n,e,t)},u1=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!l1(t))throw new Error(Sh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bf(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!dl(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function yf(n,e,t){bf(n,t),wf(n,i=>dl(i,e))}function yi(n,e,t){bf(n,t),wf(n,i=>Ht(i,e)||Ht(e,i))}function wf(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(d1(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function d1(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ss&&st("event: "+t.toString()),tr(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="repo_interrupt",p1=25;class m1{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new h1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zr(),this.transactionQueueTree_=new Nl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _1(n,e,t){if(n.stats_=ul(n.repoInfo_),n.forceRestClient_||Yb())n.server_=new jr(n.repoInfo_,(i,s,r,o)=>{hu(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>du(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new vn(n.repoInfo_,e,(i,s,r,o)=>{hu(n,i,s,r,o)},i=>{du(n,i)},i=>{g1(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ey(n.repoInfo_,()=>new Xy(n.stats_,n.server_)),n.infoData_=new Gy,n.infoSyncTree_=new lu({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=mo(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pl(n,"connected",!1),n.serverSyncTree_=new lu({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);yi(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function v1(n){const t=n.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ef(n){return Xw({timestamp:v1(n)})}function hu(n,e,t,i,s){n.dataUpdateCount++;const r=new fe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Rr(t,c=>rt(c));o=Gw(n.serverSyncTree_,r,l,s)}else{const l=rt(t);o=Vw(n.serverSyncTree_,r,l,s)}else if(i){const l=Rr(t,c=>rt(c));o=qw(n.serverSyncTree_,r,l)}else{const l=rt(t);o=mo(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Dl(n,r)),yi(n.eventQueue_,a,o)}function du(n,e){Pl(n,"connected",e),e===!1&&y1(n)}function g1(n,e){Ct(e,(t,i)=>{Pl(n,t,i)})}function Pl(n,e,t){const i=new fe("/.info/"+e),s=rt(t);n.infoData_.updateSnapshot(i,s);const r=mo(n.infoSyncTree_,i,s);yi(n.eventQueue_,i,r)}function b1(n){return n.nextWriteId_++}function y1(n){If(n,"onDisconnectEvents");const e=Ef(n),t=zr();pa(n.onDisconnect_,se(),(s,r)=>{const o=t1(s,r,n.serverSyncTree_,e);Gd(t,s,o)});let i=[];pa(t,se(),(s,r)=>{i=i.concat(mo(n.serverSyncTree_,s,r));const o=T1(n,s);Dl(n,o)}),n.onDisconnect_=zr(),yi(n.eventQueue_,se(),i)}function w1(n,e,t){let i;K(e._path)===".info"?i=cu(n.infoSyncTree_,e,t):i=cu(n.serverSyncTree_,e,t),yf(n.eventQueue_,e._path,i)}function Ea(n,e,t){let i;K(e._path)===".info"?i=ya(n.infoSyncTree_,e,t):i=ya(n.serverSyncTree_,e,t),yf(n.eventQueue_,e._path,i)}function E1(n){n.persistentConnection_&&n.persistentConnection_.interrupt(f1)}function If(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),st(t,...e)}function Cf(n,e,t){return lf(n.serverSyncTree_,e,t)||F.EMPTY_NODE}function Ol(n,e=n.transactionQueueTree_){if(e||go(n,e),as(e)){const t=Sf(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&I1(n,sr(e),t)}else ff(e)&&vo(e,t=>{Ol(n,t)})}function I1(n,e,t){const i=t.map(c=>c.currentWriteId),s=Cf(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];C(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=yt(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{If(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(xi(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();go(n,xl(n.transactionQueueTree_,e)),Ol(n,n.transactionQueueTree_),yi(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)tr(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{xt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Dl(n,e)}},o)}function Dl(n,e){const t=Tf(n,e),i=sr(t),s=Sf(n,t);return C1(n,s,i),i}function C1(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=yt(t,l.path);let h=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(xi(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=p1)h=!0,d="maxretry",s=s.concat(xi(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Cf(n,l.path,o);l.currentInputSnapshot=u;const m=e[a].update(u.val());if(m!==void 0){vf("transaction failed: Data returned ",m,l.path);let _=rt(m);typeof m=="object"&&m!=null&&Tn(m,".priority")||(_=_.updatePriority(u.getPriority()));const E=l.currentWriteId,T=Ef(n),I=n1(_,u,T);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=I,l.currentWriteId=b1(n),o.splice(o.indexOf(E),1),s=s.concat(Ww(n.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(xi(n.serverSyncTree_,E,!0))}else h=!0,d="nodata",s=s.concat(xi(n.serverSyncTree_,l.currentWriteId,!0))}yi(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}go(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)tr(i[a]);Ol(n,n.transactionQueueTree_)}function Tf(n,e){let t,i=n.transactionQueueTree_;for(t=K(e);t!==null&&as(i)===void 0;)i=xl(i,t),e=ve(e),t=K(e);return i}function Sf(n,e){const t=[];return kf(n,e,t),t.sort((i,s)=>i.order-s.order),t}function kf(n,e,t){const i=as(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);vo(e,s=>{kf(n,s,t)})}function go(n,e){const t=as(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,df(e,t.length>0?t:void 0)}vo(e,i=>{go(n,i)})}function T1(n,e){const t=sr(Tf(n,e)),i=xl(n.transactionQueueTree_,e);return s1(i,s=>{jo(n,s)}),jo(n,i),pf(i,s=>{jo(n,s)}),t}function jo(n,e){const t=as(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(xi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?df(e,void 0):t.length=r+1,yi(n.eventQueue_,sr(e),s);for(let o=0;o<i.length;o++)tr(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function k1(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xt(`Invalid query segment '${t}' in query '${n}'`)}return e}const fu=function(n,e){const t=A1(n),i=t.namespace;t.domain==="firebase.com"&&yn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jb();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ad(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new fe(t.pathString)}},A1=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(s=S1(n.substring(h,d)));const u=k1(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class N1{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Y(this._path)?null:$d(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=Jc(this._queryParams),t=ll(e);return t==="{}"?"default":t}get _queryObject(){return Jc(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof Ml))return!1;const t=this._repo===e._repo,i=dl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Iy(this._path)}}class Yn extends Ml{constructor(e,t){super(e,t,new _l,!1)}get parent(){const e=Ud(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yr{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new fe(e),i=Ia(this.ref,e);return new Yr(this._node.getChild(t),i,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Yr(s,Ia(this.ref,i),Le)))}hasChild(e){const t=new fe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function P1(n,e){return n=Tt(n),n._checkNotDeleted("ref"),e!==void 0?Ia(n._root,e):n._root}function Ia(n,e){return n=Tt(n),K(n._path)===null?c1("child","path",e):gf("child","path",e),new Yn(n._repo,He(n._path,e))}class Ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new R1("value",this,new Yr(e.snapshotNode,new Yn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new N1(this,e,t):null}matches(e){return e instanceof Ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function O1(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,d)=>{Ea(n._repo,n,a),l(h,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new x1(t,r||void 0),a=new Ll(o);return w1(n._repo,n,a),()=>Ea(n._repo,n,a)}function D1(n,e,t,i){return O1(n,"value",e,t,i)}function M1(n,e,t){Ea(n._repo,n,null)}Ow(Yn);Uw(Yn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="FIREBASE_DATABASE_EMULATOR_HOST",Ca={};let $1=!1;function F1(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=ns(r);n.repoInfo_=new Ad(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function U1(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=fu(r,s),a=o.repoInfo,l;typeof process<"u"&&Oc&&(l=Oc[L1]),l?(r=`http://${l}?ns=${a.namespace}`,o=fu(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Jb(n.name,n.options,e);u1("Invalid Firebase Database URL",o),Y(o.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=z1(a,n,c,new Qb(n,t));return new W1(h,n)}function j1(n,e){const t=Ca[e];(!t||t[n.key]!==n)&&yn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),E1(n),delete t[n.key]}function z1(n,e,t,i){let s=Ca[e.name];s||(s={},Ca[e.name]=s);let r=s[n.toURLString()];return r&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new m1(n,$1,t,i),s[n.toURLString()]=r,r}class W1{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(j1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function q1(n=Nh(),e){const t=Za(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=zm("database");i&&H1(t,...i)}return t}function H1(n,e,t,i={}){n=Tt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&ai(i,r.repoInfo_.emulatorOptions))return;yn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new br(br.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Wm(i.mockUserToken,n.app.options.projectId);o=new br(a)}ns(e)&&(Eh(e),Ih("Database",!0)),F1(r,s,i,o)}/**
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
 */function B1(n){Db(ss),Gi(new li("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return U1(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Un(Dc,Mc,n),Un(Dc,Mc,"esm2020")}vn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};B1();const V1={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"},Af=Rh(V1),bo=Pb(Af),G1=q1(Af),yo=oo(null),K1=oo(!0);yg(bo,n=>{yo.set(n),K1.set(!1)});async function Y1(n,e){try{return await mg(bo,n,e),{success:!0}}catch(t){return console.error("로그인 오류:",t),{success:!1,error:Rf(t.code)}}}async function Q1(n,e,t=""){try{const i=await pg(bo,n,e);return t&&await vg(i.user,{displayName:t}),{success:!0}}catch(i){return console.error("회원가입 오류:",i),{success:!1,error:Rf(i.code)}}}async function J1(){try{return await wg(bo),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}function Rf(n){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[n]||"알 수 없는 오류가 발생했습니다."}var X1=$('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'),Z1=$('<div class="error-message svelte-16585sj"> </div>'),e0=$('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');const t0={hash:"svelte-16585sj",code:`
  /* 컨테이너 */.login-container.svelte-16585sj {display:flex;justify-content:center;align-items:center;min-height:400px;padding:1rem;}

  /* 로그인 카드 */.login-card.svelte-16585sj {width:100%;max-width:400px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);}

  /* 제목 */.title.svelte-16585sj {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:bold;text-align:center;color:#333;}

  /* 폼 */.form.svelte-16585sj {display:flex;flex-direction:column;gap:1rem;}

  /* 폼 그룹 */.form-group.svelte-16585sj {display:flex;flex-direction:column;gap:0.5rem;}

  /* 라벨 */.label.svelte-16585sj {font-weight:500;color:#555;font-size:0.9rem;}

  /* 입력 필드 */.input.svelte-16585sj {padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;transition:border-color 0.2s;}.input.svelte-16585sj:focus {outline:none;border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);}.input.svelte-16585sj:disabled {background-color:#f5f5f5;cursor:not-allowed;}

  /* 오류 메시지 */.error-message.svelte-16585sj {padding:0.75rem;background-color:#fee;color:#c33;border-radius:4px;font-size:0.9rem;}

  /* 제출 버튼 */.submit-button.svelte-16585sj {padding:0.75rem;background-color:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.submit-button.svelte-16585sj:hover:not(:disabled) {background-color:#0056b3;}.submit-button.svelte-16585sj:disabled {background-color:#ccc;cursor:not-allowed;}

  /* 모드 전환 버튼 */.toggle-button.svelte-16585sj {padding:0.5rem;background:transparent;color:#007bff;border:none;font-size:0.9rem;cursor:pointer;text-decoration:underline;}.toggle-button.svelte-16585sj:hover:not(:disabled) {color:#0056b3;}.toggle-button.svelte-16585sj:disabled {color:#ccc;cursor:not-allowed;}`};function n0(n,e){nn(e,!0),Cn(n,t0);let t=Se(""),i=Se(""),s=Se(""),r=Se(""),o=Se(!1),a=Se(!1);async function l(N){N.preventDefault(),j(o,!0),j(r,"");let O;if(b(a)?O=await Q1(b(t),b(i),b(s)):O=await Y1(b(t),b(i)),O.success){const U=new CustomEvent("login-success",{detail:{email:b(t)},bubbles:!0,composed:!0});dispatchEvent(U),j(t,""),j(i,""),j(s,"")}else{j(r,O.error,!0);const U=new CustomEvent("login-error",{detail:{error:O.error},bubbles:!0,composed:!0});dispatchEvent(U)}j(o,!1)}function c(){j(a,!b(a)),j(r,"")}var h=e0(),d=p(h),u=p(d),m=p(u,!0);f(u);var _=v(u,2),g=p(_);{var E=N=>{var O=X1(),U=v(p(O),2);fr(U),f(O),V(()=>U.disabled=b(o)),Co(U,()=>b(s),oe=>j(s,oe)),R(N,O)};le(g,N=>{b(a)&&N(E)})}var T=v(g,2),I=v(p(T),2);fr(I),f(T);var k=v(T,2),x=v(p(k),2);fr(x),f(k);var P=v(k,2);{var S=N=>{var O=Z1(),U=p(O,!0);f(O),V(()=>y(U,b(r))),R(N,O)};le(P,N=>{b(r)&&N(S)})}var w=v(P,2),A=p(w,!0);f(w);var D=v(w,2);D.__click=c;var Z=p(D,!0);f(D),f(_),f(d),f(h),V(()=>{y(m,b(a)?"회원가입":"로그인"),I.disabled=b(o),x.disabled=b(o),w.disabled=b(o),y(A,b(o)?"처리 중...":b(a)?"회원가입":"로그인"),D.disabled=b(o),y(Z,b(a)?"이미 계정이 있으신가요? 로그인":"계정이 없으신가요? 회원가입")}),dr("submit",_,l),Co(I,()=>b(t),N=>j(t,N)),Co(x,()=>b(i),N=>j(i,N)),R(n,h),sn()}vi(["click"]);customElements.define("login-form",we(n0,{},[],[],!0));var i0=$('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),s0=$('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),r0=$('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),o0=$('<h3 class="post-title svelte-1t1odzy"> </h3>'),a0=$('<p class="post-text svelte-1t1odzy"> </p>'),l0=$('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),c0=$('<div class="posts svelte-1t1odzy"></div>'),u0=$('<div class="post-list-container svelte-1t1odzy"><!></div>');const h0={hash:"svelte-1t1odzy",code:`
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
  }`};function d0(n,e){nn(e,!0),Cn(n,h0);let t=Dt(e,"path",7,"posts"),i=Dt(e,"limit",7,"10"),s=Se(ln([])),r=Se(!0),o=Se(""),a=null;Va(()=>{l()}),Rm(()=>{c()});function l(){try{a=P1(G1,t()),D1(a,I=>{const k=I.val();k?j(s,Object.entries(k).map(([x,P])=>({id:x,...P})).sort((x,P)=>(P.timestamp||0)-(x.timestamp||0)).slice(0,parseInt(i())),!0):j(s,[],!0),j(r,!1),j(o,"")},I=>{console.error("데이터 읽기 오류:",I),j(o,"데이터를 불러오는 중 오류가 발생했습니다."),j(r,!1)})}catch(I){console.error("구독 설정 오류:",I),j(o,"데이터베이스 연결에 실패했습니다."),j(r,!1)}}function c(){a&&M1(a)}function h(I){const k=new CustomEvent("post-click",{detail:{post:I},bubbles:!0,composed:!0});dispatchEvent(k)}function d(I,k){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),h(k))}function u(I){if(!I)return"";const k=typeof I=="string"?Number(I):I,x=new Date(k),S=new Date().getTime()-x.getTime(),w=Math.floor(S/6e4),A=Math.floor(S/36e5),D=Math.floor(S/864e5);return w<1?"방금 전":w<60?`${w}분 전`:A<24?`${A}시간 전`:D<7?`${D}일 전`:x.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var m={get path(){return t()},set path(I="posts"){t(I),Rt()},get limit(){return i()},set limit(I="10"){i(I),Rt()}},_=u0(),g=p(_);{var E=I=>{var k=i0();R(I,k)},T=I=>{var k=je(),x=ke(k);{var P=w=>{var A=s0(),D=p(A),Z=p(D,!0);f(D),f(A),V(()=>y(Z,b(o))),R(w,A)},S=w=>{var A=je(),D=ke(A);{var Z=O=>{var U=r0();R(O,U)},N=O=>{var U=c0();Dn(U,21,()=>b(s),oe=>oe.id,(oe,q)=>{var re=l0();re.__click=()=>h(b(q)),re.__keydown=ne=>d(ne,b(q));var Ee=p(re),Ie=p(Ee),ae=p(Ie),z=p(ae,!0);f(ae);var H=v(ae,2),pe=p(H,!0);f(H),f(Ie),f(Ee);var Ae=v(Ee,2),ze=p(Ae);{var Ce=ne=>{var _e=o0(),Me=p(_e,!0);f(_e),V(()=>y(Me,b(q).title)),R(ne,_e)};le(ze,ne=>{b(q).title&&ne(Ce)})}var Te=v(ze,2);{var Oe=ne=>{var _e=a0(),Me=p(_e,!0);f(_e),V(()=>y(Me,b(q).content)),R(ne,_e)};le(Te,ne=>{b(q).content&&ne(Oe)})}f(Ae);var Ve=v(Ae,2),De=p(Ve),Re=p(De);f(De);var me=v(De,2),Fe=p(me);f(me),f(Ve),f(re),V(ne=>{Pe(re,"aria-label",`게시물: ${(b(q).title||b(q).content||"제목 없음")??""}`),y(z,b(q).author||"익명"),y(pe,ne),y(Re,`👍 ${(b(q).likes||0)??""}`),y(Fe,`💬 ${(b(q).comments?.length||0)??""}`)},[()=>u(b(q).timestamp)]),R(oe,re)}),f(U),R(O,U)};le(D,O=>{b(s).length===0?O(Z):O(N,!1)},!0)}R(w,A)};le(x,w=>{b(o)?w(P):w(S,!1)},!0)}R(I,k)};le(g,I=>{b(r)?I(E):I(T,!1)})}return f(_),R(n,_),sn(m)}vi(["click","keydown"]);customElements.define("post-list",we(d0,{path:{},limit:{}},[],[],!0));Ip();/**
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
 */const f0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var p0=rm("<svg><!><!></svg>");function ut(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]),i=et(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);nn(e,!1);let s=Dt(e,"name",12,void 0),r=Dt(e,"color",12,"currentColor"),o=Dt(e,"size",12,24),a=Dt(e,"strokeWidth",12,2),l=Dt(e,"absoluteStrokeWidth",12,!1),c=Dt(e,"iconNode",28,()=>[]);const h=(...g)=>g.filter((E,T,I)=>!!E&&I.indexOf(E)===T).join(" ");var d={get name(){return s()},set name(g){s(g),Rt()},get color(){return r()},set color(g){r(g),Rt()},get size(){return o()},set size(g){o(g),Rt()},get strokeWidth(){return a()},set strokeWidth(g){a(g),Rt()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(g){l(g),Rt()},get iconNode(){return c()},set iconNode(g){c(g),Rt()}};fh();var u=p0();ec(u,(g,E)=>({...f0,...i,width:o(),height:o(),stroke:r(),"stroke-width":g,class:E}),[()=>(ki(l()),ki(a()),ki(o()),tn(()=>l()?Number(a())*24/Number(o()):a())),()=>(ki(s()),ki(t),tn(()=>h("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var m=p(u);Dn(m,1,c,Zn,(g,E)=>{var T=Ho(()=>Kf(b(E),2));let I=()=>b(T)[0],k=()=>b(T)[1];var x=je(),P=ke(x);um(P,I,!0,(S,w)=>{ec(S,()=>({...k()}))}),R(g,x)});var _=v(m);return tt(_,e,"default",{}),f(u),R(n,u),sn(d)}we(ut,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Nf(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];ut(n,vt({name:"book-open"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Nf,{},["default"],[],!0);function $l(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m6 9 6 6 6-6"}]];ut(n,vt({name:"chevron-down"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we($l,{},["default"],[],!0);function Ta(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ut(n,vt({name:"circle-check"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Ta,{},["default"],[],!0);function Sa(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["circle",{cx:"12",cy:"12",r:"10"}]];ut(n,vt({name:"circle"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Sa,{},["default"],[],!0);function ka(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ut(n,vt({name:"external-link"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(ka,{},["default"],[],!0);function Fl(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ut(n,vt({name:"file-text"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Fl,{},["default"],[],!0);function xf(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];ut(n,vt({name:"house"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(xf,{},["default"],[],!0);function ys(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];ut(n,vt({name:"layout-grid"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(ys,{},["default"],[],!0);function Pf(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ut(n,vt({name:"log-in"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Pf,{},["default"],[],!0);function Of(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];ut(n,vt({name:"log-out"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Of,{},["default"],[],!0);function ws(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ut(n,vt({name:"menu"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(ws,{},["default"],[],!0);function ii(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ut(n,vt({name:"message-circle"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(ii,{},["default"],[],!0);function Df(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ut(n,vt({name:"trending-up"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(Df,{},["default"],[],!0);function ji(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ut(n,vt({name:"user"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(ji,{},["default"],[],!0);function zi(n,e){const t=et(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ut(n,vt({name:"users"},()=>t,{get iconNode(){return i},children:(s,r)=>{var o=je(),a=ke(o);tt(a,e,"default",{}),R(s,o)},$$slots:{default:!0}}))}we(zi,{},["default"],[],!0);const m0={프로젝트_명칭:"Hanbabo v0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",데모제목:"SNS Web Components Demo",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"Built with Vibe Coding","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude."},_0={프로젝트_명칭:"한바보 v0.2",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",데모제목:"SNS Web Components 데모",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"바이브 코딩으로 만들어진 프로젝트입니다","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다."},v0={프로젝트_명칭:"ハンバボ v0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",데모제목:"SNS Web Components デモ",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"バイブコーディングで作られたプロジェクトです","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。"},g0={프로젝트_명칭:"韩芭芭 v0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",데모제목:"SNS Web Components 演示",데모부제:"Svelte 5 Custom Elements + Firebase + lucide-svelte",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点",푸터:"© 2024 SNS Web Components | Powered by Svelte 5 & Firebase","home.vibeBanner":"使用Vibe编码制作的项目","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。"},zo={en:m0,ko:_0,ja:v0,zh:g0};function Aa(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Mf(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=Aa(e);if(t!=="en")return t}return"en"}function b0(n){let e=Aa(n)||Mf();function t(r){e=Aa(r)}function i(){return e}function s(r,o={}){return((zo[e]??zo.en)[r]??zo.en[r]??r).replace(/\{(\w+)\}/g,(c,h)=>o[h]??"")}return{t:s,setLocale:t,getLocale:i}}const Lf=Mf(),y0=b0(Lf),w0=oo(Lf),rr=wm(w0,n=>(e,t={})=>y0.t(e,t));var E0=$("<span> </span>"),I0=$('<img alt="프로필" class="avatar-image svelte-38psow"/>'),C0=$('<div class="avatar-fallback svelte-38psow"> </div>'),T0=$('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'),S0=$('<img class="avatar-image svelte-38psow"/>'),k0=$('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),A0=$('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),R0=$('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/auth/login" class="nav-button svelte-38psow"> </a> <a href="/auth/signup" class="primary-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><div class="avatar-fallback avatar-fallback-small svelte-38psow">?</div></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),N0=$('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');const x0={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function P0(n,e){nn(e,!0),Cn(n,x0);const t=()=>Wn(yo,"$user",s),i=()=>Wn(rr,"$t",s),[s,r]=Gs();let o=Se(!1),a=Se(null);function l(){b(a)&&(b(a).classList.remove("logo-animate-active"),b(a).offsetWidth,b(a).classList.add("logo-animate-active"),setTimeout(()=>{b(a)?.classList.remove("logo-animate-active")},600))}async function c(){if((await J1()).success){const S=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(S)}j(o,!1)}function h(){return t()?.displayName?t().displayName.charAt(0).toUpperCase():t()?.email?t().email.charAt(0).toUpperCase():"U"}function d(){j(o,!b(o))}function u(P){const S=document.querySelector(".dropdown-menu"),w=document.querySelector(".dropdown-trigger");S&&!S.contains(P.target)&&!w?.contains(P.target)&&j(o,!1)}Va(()=>{const P=setTimeout(()=>{l()},500),S=setInterval(()=>{l()},1e4);return document.addEventListener("click",u),()=>{clearTimeout(P),clearInterval(S),document.removeEventListener("click",u)}});var m=N0(),_=p(m),g=p(_),E=p(g);Dn(E,5,()=>i()("프로젝트_명칭").split(""),Zn,(P,S,w)=>{var A=E0();bt(A,1,`logo-char logo-char-${w+1}`,"svelte-38psow");var D=p(A,!0);f(A),V(()=>y(D,b(S))),R(P,A)}),f(E),f(g),bm(g,P=>j(a,P),()=>b(a));var T=v(g,2),I=p(T);{var k=P=>{var S=A0(),w=ke(S),A=p(w),D=p(A);ys(D,{size:16});var Z=v(D,2),N=p(Z,!0);f(Z),f(A);var O=v(A,2),U=p(O);ii(U,{size:16});var oe=v(U,2),q=p(oe,!0);f(oe),f(O);var re=v(O,2),Ee=p(re);zi(Ee,{size:16});var Ie=v(Ee,2),ae=p(Ie,!0);f(Ie),f(re);var z=v(re,2),H=p(z);H.__click=d;var pe=p(H),Ae=p(pe);{var ze=te=>{var B=I0();V(()=>Pe(B,"src",t().photoURL)),R(te,B)},Ce=te=>{var B=C0(),xe=p(B,!0);f(B),V(Ue=>y(xe,Ue),[h]),R(te,B)};le(Ae,te=>{t()?.photoURL?te(ze):te(Ce,!1)})}f(pe);var Te=v(pe,2),Oe=p(Te,!0);f(Te),f(H);var Ve=v(H,2);{var De=te=>{var B=T0(),xe=p(B),Ue=p(xe,!0);f(xe);var ft=v(xe,4),it=p(ft);ji(it,{size:16});var kt=v(it,2),he=p(kt,!0);f(kt),f(ft);var qe=v(ft,4);qe.__click=c;var de=p(qe);Of(de,{size:16});var ce=v(de,2),We=p(ce,!0);f(ce),f(qe),f(B),V((Ke,Ft,on)=>{y(Ue,Ke),y(he,Ft),y(We,on)},[()=>i()("내계정"),()=>i()("프로필수정"),()=>i()("로그아웃")]),R(te,B)};le(Ve,te=>{b(o)&&te(De)})}f(z);var Re=v(z,2),me=p(Re);ws(me,{size:24}),f(Re),f(w);var Fe=v(w,2),ne=p(Fe),_e=p(ne);ys(_e,{size:20}),f(ne);var Me=v(ne,2),ge=p(Me);zi(ge,{size:20}),f(Me);var J=v(Me,2),Ne=p(J);ii(Ne,{size:20}),f(J);var ee=v(J,2),ie=p(ee),Ge=p(ie);{var ht=te=>{var B=S0();V(xe=>{Pe(B,"src",t().photoURL),Pe(B,"alt",xe)},[()=>i()("프로필")]),R(te,B)},dt=te=>{var B=k0(),xe=p(B,!0);f(B),V(Ue=>y(xe,Ue),[h]),R(te,B)};le(Ge,te=>{t()?.photoURL?te(ht):te(dt,!1)})}f(ie),f(ee);var St=v(ee,2),nt=p(St);ws(nt,{size:24}),f(St),f(Fe),V((te,B,xe,Ue,ft,it,kt,he,qe)=>{y(N,te),y(q,B),y(ae,xe),y(Oe,t()?.displayName||t()?.email),Pe(Re,"title",Ue),Pe(ne,"title",ft),Pe(Me,"title",it),Pe(J,"title",kt),Pe(ee,"title",he),Pe(St,"title",qe)},[()=>i()("포럼"),()=>i()("채팅"),()=>i()("사용자찾기"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("프로필"),()=>i()("메뉴")]),R(P,S)},x=P=>{var S=R0(),w=ke(S),A=p(w),D=p(A);ys(D,{size:16});var Z=v(D,2),N=p(Z,!0);f(Z),f(A);var O=v(A,2),U=p(O,!0);f(O);var oe=v(O,2),q=p(oe,!0);f(oe);var re=v(oe,2),Ee=p(re);ws(Ee,{size:20}),f(re),f(w);var Ie=v(w,2),ae=p(Ie),z=p(ae);ys(z,{size:20}),f(ae);var H=v(ae,2),pe=p(H);zi(pe,{size:20}),f(H);var Ae=v(H,2),ze=p(Ae);ii(ze,{size:20}),f(Ae);var Ce=v(Ae,2),Te=v(Ce,2),Oe=p(Te);ws(Oe,{size:24}),f(Te),f(Ie),V((Ve,De,Re,me,Fe,ne,_e,Me,ge)=>{y(N,Ve),y(U,De),y(q,Re),Pe(re,"title",me),Pe(ae,"title",Fe),Pe(H,"title",ne),Pe(Ae,"title",_e),Pe(Ce,"title",Me),Pe(Te,"title",ge)},[()=>i()("포럼"),()=>i()("로그인"),()=>i()("회원가입"),()=>i()("메뉴"),()=>i()("포럼"),()=>i()("사용자찾기"),()=>i()("채팅"),()=>i()("로그인"),()=>i()("메뉴")]),R(P,S)};le(I,P=>{t()?P(k):P(x,!1)})}f(T),f(_),f(m),R(n,m),sn(),r()}vi(["click"]);customElements.define("sns-topbar",we(P0,{},[],[],!0));var O0=$('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),D0=$('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),M0=$('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const L0={hash:"svelte-najsij",code:`\r
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
  }`};function $0(n,e){nn(e,!1),Cn(n,L0);const t=()=>Wn(rr,"$t",s),i=()=>Wn(yo,"$user",s),[s,r]=Gs();fh();var o=M0(),a=p(o),l=p(a),c=p(l,!0);f(l);var h=v(l,2),d=p(h),u=p(d);xf(u,{size:20});var m=v(u,2),_=p(m,!0);f(m),f(d);var g=v(d,2),E=p(g);ii(E,{size:20});var T=v(E,2),I=p(T,!0);f(T),f(g);var k=v(g,2),x=p(k);zi(x,{size:20});var P=v(x,2),S=p(P,!0);f(P),f(k);var w=v(k,2),A=p(w);ji(A,{size:20});var D=v(A,2),Z=p(D,!0);f(D),f(w);var N=v(w,2),O=p(N);Fl(O,{size:20});var U=v(O,2),oe=p(U,!0);f(U),f(N),f(h);var q=v(h,4),re=p(q),Ee=p(re,!0);f(re);var Ie=v(re,2),ae=p(Ie);{var z=de=>{var ce=O0(),We=p(ce);ji(We,{size:16});var Ke=v(We,2),Ft=p(Ke,!0);f(Ke),f(ce),V(on=>y(Ft,on),[()=>t()("회원정보수정")]),R(de,ce)},H=de=>{var ce=D0(),We=ke(ce),Ke=p(We);Pf(Ke,{size:16});var Ft=v(Ke,2),on=p(Ft,!0);f(Ft),f(We);var wi=v(We,2),Ei=p(wi);ji(Ei,{size:16});var kn=v(Ei,2),Ii=p(kn,!0);f(kn),f(wi),V((ls,Pt)=>{y(on,ls),y(Ii,Pt)},[()=>t()("로그인"),()=>t()("회원가입")]),R(de,ce)};le(ae,de=>{i()?de(z):de(H,!1)})}f(Ie),f(q);var pe=v(q,4),Ae=p(pe),ze=p(Ae);zi(ze,{size:16});var Ce=v(ze,2),Te=p(Ce,!0);f(Ce),f(Ae);var Oe=v(Ae,2),Ve=v(p(Oe),2),De=p(Ve,!0);f(Ve);var Re=v(Ve,2);ka(Re,{size:12,class:"external-icon"}),f(Oe);var me=v(Oe,2),Fe=p(me);ii(Fe,{size:16});var ne=v(Fe,2),_e=p(ne,!0);f(ne);var Me=v(ne,2);ka(Me,{size:12,class:"external-icon"}),f(me);var ge=v(me,2),J=p(ge);Nf(J,{size:16});var Ne=v(J,2),ee=p(Ne,!0);f(Ne),f(ge),f(pe);var ie=v(pe,2),Ge=p(ie),ht=p(Ge,!0);f(Ge);var dt=v(Ge,2),St=p(dt,!0);f(dt),f(ie);var nt=v(ie,2),te=p(nt),B=p(te),xe=p(B,!0);f(B);var Ue=v(B,2),ft=p(Ue,!0);f(Ue),f(te),f(nt);var it=v(nt,2),kt=p(it),he=p(kt,!0),qe=v(he,2);f(kt),f(it),f(a),f(o),V((de,ce,We,Ke,Ft,on,wi,Ei,kn,Ii,ls,Pt,Uf,jf,zf,Wf,qf)=>{y(c,de),y(_,ce),y(I,We),y(S,Ke),y(Z,Ft),y(oe,on),y(Ee,wi),y(Te,Ei),y(De,kn),y(_e,Ii),y(ee,ls),y(ht,Pt),y(St,Uf),y(xe,jf),y(ft,zf),y(he,Wf),y(qe,` ${qf??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("언어설정"),()=>t()("언어전환기능안내"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),R(n,o),sn(),r()}customElements.define("sns-left-sidebar",we($0,{},[],[],!0));var F0=$('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const U0={hash:"svelte-3epon2",code:`\r
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
  }`};function j0(n,e){nn(e,!0),Cn(n,U0);const t=()=>Wn(rr,"$t",i),[i,s]=Gs();let r=Se(ln({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=F0(),a=p(o),l=p(a),c=p(l,!0);f(l);var h=v(l,2),d=p(h),u=p(d),m=p(u);ji(m,{size:20}),f(u);var _=v(u,2),g=p(_),E=p(g,!0);f(g);var T=v(g,2),I=p(T,!0);f(T),f(_),f(d);var k=v(d,2),x=p(k),P=p(x);Df(P,{size:20}),f(x);var S=v(x,2),w=p(S),A=p(w,!0);f(w);var D=v(w,2),Z=p(D,!0);f(D),f(S),f(k);var N=v(k,2),O=p(N),U=p(O);Fl(U,{size:20}),f(O);var oe=v(O,2),q=p(oe),re=p(q,!0);f(q);var Ee=v(q,2),Ie=p(Ee,!0);f(Ee);var ae=v(Ee,2),z=p(ae,!0);f(ae),f(oe),f(N);var H=v(N,2),pe=p(H),Ae=p(pe);ii(Ae,{size:20}),f(pe);var ze=v(pe,2),Ce=p(ze),Te=p(Ce,!0);f(Ce);var Oe=v(Ce,2),Ve=p(Oe,!0);f(Oe),f(ze),f(H),f(h);var De=v(h,2),Re=p(De,!0);f(De),f(a),f(o),V((me,Fe,ne,_e,Me,ge,J)=>{y(c,me),y(E,Fe),y(I,b(r).totalUsers),y(A,ne),y(Z,b(r).totalScore),y(re,_e),y(Ie,b(r).totalPosts),y(z,Me),y(Te,ge),y(Ve,b(r).totalMessages),y(Re,J)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),R(n,o),sn(),s()}customElements.define("sns-right-sidebar",we(j0,{},[],[],!0));var z0=$('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const W0={hash:"svelte-um1xbq",code:`\r
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
  }`};function q0(n,e){Cn(n,W0);var t=z0(),i=p(t),s=v(i,2),r=p(s);bt(r,1,"left-sidebar svelte-um1xbq");var o=v(r,2),a=p(o);tt(a,e,"default",{}),f(o);var l=v(o,2);bt(l,1,"right-sidebar svelte-um1xbq"),f(s),f(t),R(n,t)}customElements.define("sns-layout",we(q0,{},["default"],[],!0));var H0=$('<div class="text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm"> </div>'),B0=$('<p class="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md border border-blue-200"> </p>'),V0=$('<p class="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-md border border-green-200 mt-2"> </p>'),G0=$('<div class="accordion-content px-6 py-4 bg-white border-t border-gray-100 svelte-m3h71q"><p class="text-gray-700 leading-relaxed mb-3"> </p> <!> <!></div>'),K0=$('<div class="accordion-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"><button class="accordion-trigger w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all svelte-m3h71q"><div class="flex items-center gap-3 flex-1"><!> <span class="text-lg font-semibold text-gray-800"> </span></div> <div><!></div></button> <!></div>'),Y0=$('<div class="accordion w-full space-y-4"></div>');const Q0={hash:"svelte-m3h71q",code:`\r
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
  }`};function J0(n,e){nn(e,!0),Cn(n,Q0);let t=Dt(e,"items",7,"[]"),i=Dt(e,"type",7,"single"),s=Dt(e,"collapsible",7,!0),r=Ho(()=>{try{const u=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(u)?u:[]}catch(u){return console.error("Failed to parse accordion items:",u),[]}}),o=Ho(()=>()=>{const u=s();return typeof u=="boolean"?u:typeof u=="string"?u!=="false":!0}),a=Se(ln(new Set));function l(u){const m=new Set(b(a));i()==="single"?m.has(u)?b(o)&&m.delete(u):(m.clear(),m.add(u)):m.has(u)?m.delete(u):m.add(u),j(a,m,!0)}function c(u){return b(a).has(u)}var h={get items(){return t()},set items(u="[]"){t(u),Rt()},get type(){return i()},set type(u="single"){i(u),Rt()},get collapsible(){return s()},set collapsible(u=!0){s(u),Rt()}},d=Y0();return Dn(d,21,()=>b(r),Zn,(u,m,_)=>{var g=K0(),E=p(g);E.__click=()=>l(_);var T=p(E),I=p(T);{var k=N=>{var O=H0(),U=p(O,!0);f(O),V(()=>y(U,b(m).icon)),R(N,O)};le(I,N=>{b(m).icon&&N(k)})}var x=v(I,2),P=p(x,!0);f(x),f(T);var S=v(T,2);let w;var A=p(S);$l(A,{size:20,class:"text-gray-600"}),f(S),f(E);var D=v(E,2);{var Z=N=>{var O=G0(),U=p(O),oe=p(U,!0);f(U);var q=v(U,2);{var re=ae=>{var z=B0(),H=p(z,!0);f(z),V(()=>y(H,b(m).hint)),R(ae,z)};le(q,ae=>{b(m).hint&&ae(re)})}var Ee=v(q,2);{var Ie=ae=>{var z=V0(),H=p(z,!0);f(z),V(()=>y(H,b(m).gpl)),R(ae,z)};le(Ee,ae=>{b(m).gpl&&ae(Ie)})}f(O),V(()=>y(oe,b(m).content)),R(N,O)};le(D,N=>{c(_)&&N(Z)})}f(g),V((N,O)=>{Pe(E,"aria-expanded",N),y(P,b(m).title),w=bt(S,1,"chevron transition-transform duration-200 svelte-m3h71q",null,w,O)},[()=>c(_),()=>({"rotate-180":c(_)})]),R(u,g)}),f(d),R(n,d),sn(h)}vi(["click"]);customElements.define("sns-accordion",we(J0,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var X0=$('<div class="gpl-badge svelte-1ubq0t6"> </div>'),Z0=$('<div class="hint svelte-1ubq0t6"> </div>'),eE=$('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),tE=$('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),nE=$('<div class="todo-description svelte-1ubq0t6"> </div>'),iE=$('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),sE=$('<div class="todo-subitems svelte-1ubq0t6"></div>'),rE=$('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),oE=$('<span class="badge svelte-1ubq0t6"> </span>'),aE=$('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const lE={hash:"svelte-1ubq0t6",code:`\r
  /* 홈 컨테이너 */.home.svelte-1ubq0t6 {max-width:100%;padding:0;}\r
\r
  /* Vibe 배너 */.vibe-banner.svelte-1ubq0t6 {display:inline-block;margin-bottom:1.5rem;padding:0.5rem 1rem;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:9999px;box-shadow:0 4px 6px rgba(102, 126, 234, 0.3);}.vibe-text.svelte-1ubq0t6 {color:white;font-size:0.875rem;font-weight:500;}\r
\r
  /* 히어로 섹션 */.hero-section.svelte-1ubq0t6 {margin-bottom:3rem;}.hero-title.svelte-1ubq0t6 {font-size:2.5rem;font-weight:800;margin:0 0 1rem 0;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2;}.hero-description.svelte-1ubq0t6 {font-size:1.125rem;color:#6b7280;line-height:1.7;margin:0;}.hero-link.svelte-1ubq0t6 {color:#3b82f6;text-decoration:underline;font-weight:500;}.hero-link.svelte-1ubq0t6:hover {color:#2563eb;}\r
\r
  /* 섹션 */.section.svelte-1ubq0t6 {margin-bottom:3rem;padding:2rem;background:white;border-radius:1rem;box-shadow:0 4px 6px rgba(0, 0, 0, 0.05);border:1px solid #e5e7eb;}.section-title.svelte-1ubq0t6 {font-size:1.875rem;font-weight:700;margin:0 0 1.5rem 0;color:#111827;}\r
\r
  /* 아코디언 */.accordion.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.75rem;}.accordion-item.svelte-1ubq0t6 {border:1px solid #e5e7eb;border-radius:0.5rem;overflow:hidden;transition:all 0.2s;}.accordion-item.svelte-1ubq0t6:hover {border-color:#d1d5db;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);}.accordion-trigger.svelte-1ubq0t6 {width:100%;display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;background:transparent;border:none;cursor:pointer;font-size:1rem;font-weight:600;color:#111827;text-align:left;transition:background-color 0.2s;}.accordion-trigger.svelte-1ubq0t6:hover {background:#f9fafb;}.accordion-trigger[aria-expanded="true"].svelte-1ubq0t6 {background:#f3f4f6;}.accordion-title.svelte-1ubq0t6 {flex:1;}.accordion-icon.svelte-1ubq0t6 {display:flex;color:#6b7280;transition:transform 0.3s ease;}.accordion-icon.open.svelte-1ubq0t6 {transform:rotate(180deg);}.accordion-content.svelte-1ubq0t6 {padding:0 1.25rem 1.25rem 1.25rem;color:#374151;line-height:1.7;\r
    animation: svelte-1ubq0t6-slideDown 0.3s ease-out;}\r
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
  }.accordion-content.svelte-1ubq0t6 p:where(.svelte-1ubq0t6) {margin:0 0 0.75rem 0;}.gpl-badge.svelte-1ubq0t6 {display:inline-block;margin-top:0.75rem;padding:0.5rem 1rem;background:linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);border-radius:0.5rem;font-size:0.875rem;font-weight:600;color:#065f46;}.hint.svelte-1ubq0t6 {margin-top:0.75rem;padding:0.75rem 1rem;background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);border-left:3px solid #3b82f6;border-radius:0.5rem;font-size:0.875rem;color:#1e40af;}\r
\r
  /* TODO 리스트 */.todo-list.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:1rem;}.todo-item.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.5rem;}.todo-main.svelte-1ubq0t6 {display:flex;align-items:flex-start;gap:0.75rem;}.todo-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;margin-top:0.125rem;flex-shrink:0;}.todo-icon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-content.svelte-1ubq0t6 {flex:1;}.todo-label.svelte-1ubq0t6 {font-size:1rem;font-weight:600;color:#111827;line-height:1.5;}.todo-label.completed.svelte-1ubq0t6 {color:#6b7280;text-decoration:line-through;}.todo-description.svelte-1ubq0t6 {font-size:0.875rem;color:#6b7280;margin-top:0.25rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:2rem;display:flex;flex-direction:column;gap:0.5rem;}.todo-subitem.svelte-1ubq0t6 {display:flex;align-items:center;gap:0.5rem;}.todo-subicon.svelte-1ubq0t6 {display:flex;color:#9ca3af;flex-shrink:0;}.todo-subicon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-subtext.svelte-1ubq0t6 {font-size:0.875rem;color:#374151;}.todo-subtext.completed.svelte-1ubq0t6 {color:#9ca3af;text-decoration:line-through;}\r
\r
  /* 프로젝트 개요 */.overview-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;}.overview-text.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1.5rem 0;}.overview-text.svelte-1ubq0t6 strong:where(.svelte-1ubq0t6) {color:#3b82f6;font-weight:700;}.badges.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;}.badge.svelte-1ubq0t6 {display:inline-block;padding:0.5rem 1rem;background:white;border:1px solid #93c5fd;border-radius:9999px;font-size:0.875rem;font-weight:500;color:#1e40af;box-shadow:0 2px 4px rgba(59, 130, 246, 0.1);}\r
\r
  /* AI 변화 섹션 */.change-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:1px solid #fcd34d;}.change-description.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1rem 0;}.change-emphasis.svelte-1ubq0t6 {font-size:1.125rem;color:#78350f;line-height:1.7;margin:0 0 1rem 0;}.change-highlight.svelte-1ubq0t6 {color:#b45309;font-weight:700;text-decoration:underline;}\r
\r
  /* 반응형 */\r
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}\r
  }\r
\r
  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}\r
  }`};function $f(n,e){nn(e,!0),Cn(n,lE);const t=()=>Wn(rr,"$t",i),[i,s]=Gs();let r=Se(null);function o(ge){j(r,b(r)===ge?null:ge,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var h=aE(),d=p(h),u=p(d),m=p(u);f(u),f(d);var _=v(d,2),g=p(_),E=p(g,!0);f(g);var T=v(g,2),I=p(T),k=v(I),x=p(k,!0);f(k);var P=v(k);f(T),f(_);var S=v(_,2),w=p(S),A=p(w,!0);f(w);var D=v(w,2);Dn(D,21,()=>a,Zn,(ge,J)=>{var Ne=tE(),ee=p(Ne);ee.__click=()=>o(b(J).id);var ie=p(ee),Ge=p(ie,!0);f(ie);var ht=v(ie,2);let dt;var St=p(ht);$l(St,{size:20}),f(ht),f(ee);var nt=v(ee,2);{var te=B=>{var xe=eE(),Ue=p(xe),ft=p(Ue,!0);f(Ue);var it=v(Ue,2);{var kt=de=>{var ce=X0(),We=p(ce,!0);f(ce),V(Ke=>y(We,Ke),[()=>t()("home.aiTruth.item3.gpl")]),R(de,ce)};le(it,de=>{b(J).showGpl&&de(kt)})}var he=v(it,2);{var qe=de=>{var ce=Z0(),We=p(ce,!0);f(ce),V(Ke=>y(We,Ke),[()=>t()(b(J).hintKey)]),R(de,ce)};le(he,de=>{b(J).hintKey&&de(qe)})}f(xe),V(de=>y(ft,de),[()=>t()(b(J).contentKey)]),R(B,xe)};le(nt,B=>{b(r)===b(J).id&&B(te)})}f(Ne),V(B=>{Pe(ee,"aria-expanded",b(r)===b(J).id),y(Ge,B),dt=bt(ht,1,"accordion-icon svelte-1ubq0t6",null,dt,{open:b(r)===b(J).id})},[()=>t()(b(J).titleKey)]),R(ge,Ne)}),f(D),f(S);var Z=v(S,2),N=p(Z),O=p(N,!0);f(N);var U=v(N,2);Dn(U,21,()=>l,Zn,(ge,J)=>{var Ne=rE(),ee=p(Ne),ie=p(ee);let Ge;var ht=p(ie);{var dt=he=>{Ta(he,{size:20})},St=he=>{Sa(he,{size:20})};le(ht,he=>{b(J).completed?he(dt):he(St,!1)})}f(ie);var nt=v(ie,2),te=p(nt);let B;var xe=p(te,!0);f(te);var Ue=v(te,2);{var ft=he=>{var qe=nE(),de=p(qe,!0);f(qe),V(ce=>y(de,ce),[()=>t()(b(J).descriptionKey)]),R(he,qe)};le(Ue,he=>{b(J).descriptionKey&&he(ft)})}f(nt),f(ee);var it=v(ee,2);{var kt=he=>{var qe=sE();Dn(qe,21,()=>b(J).subitems,Zn,(de,ce)=>{var We=iE(),Ke=p(We);let Ft;var on=p(Ke);{var wi=Pt=>{Ta(Pt,{size:16})},Ei=Pt=>{Sa(Pt,{size:16})};le(on,Pt=>{b(ce).completed?Pt(wi):Pt(Ei,!1)})}f(Ke);var kn=v(Ke,2);let Ii;var ls=p(kn,!0);f(kn),f(We),V(Pt=>{Ft=bt(Ke,1,"todo-subicon svelte-1ubq0t6",null,Ft,{completed:b(ce).completed}),Ii=bt(kn,1,"todo-subtext svelte-1ubq0t6",null,Ii,{completed:b(ce).completed}),y(ls,Pt)},[()=>t()(b(ce).key)]),R(de,We)}),f(qe),R(he,qe)};le(it,he=>{b(J).subitems.length>0&&he(kt)})}f(Ne),V(he=>{Ge=bt(ie,1,"todo-icon svelte-1ubq0t6",null,Ge,{completed:b(J).completed}),B=bt(te,1,"todo-label svelte-1ubq0t6",null,B,{completed:b(J).completed}),y(xe,he)},[()=>t()(b(J).labelKey)]),R(ge,Ne)}),f(U),f(Z);var oe=v(Z,2),q=p(oe),re=p(q,!0);f(q);var Ee=v(q,2),Ie=p(Ee),ae=p(Ie),z=p(ae,!0);f(ae);var H=v(ae,1,!0);f(Ie);var pe=v(Ie,2);Dn(pe,21,()=>c,Zn,(ge,J)=>{var Ne=oE(),ee=p(Ne,!0);f(Ne),V(ie=>y(ee,ie),[()=>t()(b(J))]),R(ge,Ne)}),f(pe),f(Ee),f(oe);var Ae=v(oe,2),ze=p(Ae),Ce=p(ze,!0);f(ze);var Te=v(ze,2),Oe=p(Te),Ve=p(Oe,!0);f(Oe);var De=v(Oe,2),Re=p(De),me=v(Re),Fe=p(me,!0);f(me);var ne=v(me,1,!0);f(De);var _e=v(De,2),Me=p(_e,!0);f(_e),f(Te),f(Ae),f(h),V((ge,J,Ne,ee,ie,Ge,ht,dt,St,nt,te,B,xe,Ue,ft,it)=>{y(m,`✨ ${ge??""}`),y(E,J),y(I,`${Ne??""} `),y(x,ee),y(P,` ${ie??""}`),y(A,Ge),y(O,ht),y(re,dt),y(z,St),y(H,nt),y(Ce,te),y(Ve,B),y(Re,`${xe??""} `),y(Fe,Ue),y(ne,ft),y(Me,it)},[()=>t()("home.vibeBanner"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),R(n,h),sn(),s()}vi(["click"]);we($f,{},[],[],!0);var cE=$('<div class="notification svelte-1hwhcgc"> </div>'),uE=$('<section class="tab-content svelte-1hwhcgc"><!></section>'),hE=$('<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc"> </h2> <p class="description svelte-1hwhcgc"> </p> <login-form></login-form></section>',2),dE=$('<div class="warning svelte-1hwhcgc"> </div>'),fE=$("<post-list></post-list>",2),pE=$('<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc"> </h2> <p class="description svelte-1hwhcgc"> </p> <!></section>'),mE=$(`<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc"> </h2> <div class="info-card svelte-1hwhcgc"><h3 class="svelte-1hwhcgc"> </h3> <p> </p> <h3 class="svelte-1hwhcgc"> </h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc"><strong>Svelte 5</strong>: Runes를 활용한 반응형 컴포넌트</li> <li class="svelte-1hwhcgc"><strong>Vite</strong>: 라이브러리 모드로 빌드</li> <li class="svelte-1hwhcgc"><strong>Firebase</strong>: Authentication + Realtime Database</li> <li class="svelte-1hwhcgc"><strong>lucide-svelte</strong>: 아이콘 라이브러리</li> <li class="svelte-1hwhcgc"><strong>Tailwind CSS</strong>: 스타일링 (선택)</li></ul> <h3 class="svelte-1hwhcgc"> </h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;login-form&gt;</code> - 로그인/회원가입 폼</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;post-list&gt;</code> - 게시물 목록</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;sns-topbar&gt;</code> - 탑바 네비게이션</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;sns-left-sidebar&gt;</code> - 왼쪽 사이드바</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;sns-right-sidebar&gt;</code> - 오른쪽 사이드바</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;sns-layout&gt;</code> - 3단 레이아웃</li></ul> <h3 class="svelte-1hwhcgc"> </h3> <pre class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;!-- HTML에서 사용 --&gt;
&lt;script type="module" src="./dist/sns-components.es.js"&gt;&lt;/script&gt;

&lt;sns-layout&gt;
  &lt;!-- 콘텐츠 --&gt;
&lt;/sns-layout&gt;</code></pre> <h3 class="svelte-1hwhcgc"> </h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc">SvelteKit 없이 순수 Svelte + Vite 라이브러리 모드</li> <li class="svelte-1hwhcgc">프레임워크 독립적인 Web Components</li> <li class="svelte-1hwhcgc">다양한 플랫폼에서 재사용 가능</li> <li class="svelte-1hwhcgc">실시간 데이터 동기화</li> <li class="svelte-1hwhcgc">lucide-svelte 아이콘 적용</li> <li class="svelte-1hwhcgc">반응형 3단 레이아웃</li> <li class="svelte-1hwhcgc">한글 주석으로 상세한 설명</li></ul></div></section>`),_E=$('<sns-layout><!> <header class="header svelte-1hwhcgc"><h1 class="title svelte-1hwhcgc"> </h1> <p class="subtitle svelte-1hwhcgc"> </p></header> <nav class="tabs svelte-1hwhcgc"><button> </button> <button> </button> <button> </button> <button> </button></nav> <main class="content svelte-1hwhcgc"><!></main> <footer class="footer svelte-1hwhcgc"><p class="svelte-1hwhcgc"> </p></footer></sns-layout>',2);const vE={hash:"svelte-1hwhcgc",code:`
  /* 헤더 */.header.svelte-1hwhcgc {text-align:center;margin-bottom:2rem;}.title.svelte-1hwhcgc {font-size:2rem;font-weight:bold;margin:0 0 0.5rem 0;color:#111827;}.subtitle.svelte-1hwhcgc {font-size:1rem;color:#6b7280;margin:0;}

  /* 알림 메시지 */.notification.svelte-1hwhcgc {max-width:800px;margin:0 auto 1rem;padding:1rem;background:white;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);text-align:center;font-weight:500;border:1px solid #e5e7eb;}

  /* 탭 네비게이션 */.tabs.svelte-1hwhcgc {max-width:800px;margin:0 auto 2rem;display:flex;gap:0.5rem;background:white;padding:0.5rem;border-radius:8px;border:1px solid #e5e7eb;}.tab.svelte-1hwhcgc {flex:1;padding:0.75rem;background:transparent;color:#374151;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:all 0.2s;}.tab.svelte-1hwhcgc:hover {background:#f3f4f6;}.tab.active.svelte-1hwhcgc {background:#3b82f6;color:white;}

  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}.tab-content.svelte-1hwhcgc {background:white;padding:2rem;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);border:1px solid #e5e7eb;}.tab-content.svelte-1hwhcgc h2:where(.svelte-1hwhcgc) {margin:0 0 0.5rem 0;color:#111827;}.description.svelte-1hwhcgc {color:#6b7280;margin-bottom:1.5rem;}.warning.svelte-1hwhcgc {padding:1rem;background:#fef3c7;border:1px solid #fbbf24;border-radius:4px;color:#92400e;text-align:center;}

  /* 정보 카드 */.info-card.svelte-1hwhcgc {color:#374151;}.info-card.svelte-1hwhcgc h3:where(.svelte-1hwhcgc) {margin:1.5rem 0 0.5rem 0;color:#3b82f6;}.info-card.svelte-1hwhcgc h3:where(.svelte-1hwhcgc):first-child {margin-top:0;}.info-card.svelte-1hwhcgc ul:where(.svelte-1hwhcgc) {margin:0.5rem 0;padding-left:1.5rem;}.info-card.svelte-1hwhcgc li:where(.svelte-1hwhcgc) {margin:0.5rem 0;line-height:1.6;}.info-card.svelte-1hwhcgc code:where(.svelte-1hwhcgc) {background:#f3f4f6;padding:0.2rem 0.4rem;border-radius:3px;font-family:'Courier New', monospace;color:#dc2626;}.info-card.svelte-1hwhcgc pre:where(.svelte-1hwhcgc) {background:#f3f4f6;padding:1rem;border-radius:4px;overflow-x:auto;margin:0.5rem 0;border:1px solid #e5e7eb;}.info-card.svelte-1hwhcgc pre:where(.svelte-1hwhcgc) code:where(.svelte-1hwhcgc) {background:none;padding:0;color:#374151;}

  /* 푸터 */.footer.svelte-1hwhcgc {max-width:800px;margin:2rem auto 0;padding-top:2rem;border-top:1px solid #e5e7eb;text-align:center;color:#6b7280;}.footer.svelte-1hwhcgc p:where(.svelte-1hwhcgc) {margin:0;font-size:0.875rem;}

  /* 반응형 */
  @media (max-width: 640px) {.title.svelte-1hwhcgc {font-size:1.5rem;}.subtitle.svelte-1hwhcgc {font-size:0.875rem;}.tab-content.svelte-1hwhcgc {padding:1rem;}
  }`};function Ff(n,e){nn(e,!0),Cn(n,vE);const t=()=>Wn(rr,"$t",s),i=()=>Wn(yo,"$user",s),[s,r]=Gs();let o=Se("home"),a=Se("");function l(z){j(a,t()("로그인성공",{email:z.detail.email}),!0),j(o,"posts"),setTimeout(()=>{j(a,"")},3e3)}function c(z){j(a,t()("오류",{error:z.detail.error}),!0),setTimeout(()=>{j(a,"")},5e3)}function h(z){const H=z.detail.post;alert(t()("게시물클릭알림",{title:H.title||t()("제목없음"),author:H.author||t()("익명")}))}function d(z){j(o,z,!0)}var u=_E(),m=p(u);{var _=z=>{var H=cE(),pe=p(H,!0);f(H),V(()=>y(pe,b(a))),R(z,H)};le(m,z=>{b(a)&&z(_)})}var g=v(m,2),E=p(g),T=p(E,!0);f(E);var I=v(E,2),k=p(I,!0);f(I),f(g);var x=v(g,2),P=p(x);P.__click=()=>d("home");var S=p(P,!0);f(P);var w=v(P,2);w.__click=()=>d("login");var A=p(w,!0);f(w);var D=v(w,2);D.__click=()=>d("posts");var Z=p(D,!0);f(D);var N=v(D,2);N.__click=()=>d("about");var O=p(N,!0);f(N),f(x);var U=v(x,2),oe=p(U);{var q=z=>{var H=uE(),pe=p(H);$f(pe,{}),f(H),R(z,H)},re=z=>{var H=je(),pe=ke(H);{var Ae=Ce=>{var Te=hE(),Oe=p(Te),Ve=p(Oe,!0);f(Oe);var De=v(Oe,2),Re=p(De,!0);f(De);var me=v(De,2);f(Te),V((Fe,ne)=>{y(Ve,Fe),y(Re,ne)},[()=>t()("로그인회원가입"),()=>t()("Firebase설명")]),dr("login-success",me,l),dr("login-error",me,c),R(Ce,Te)},ze=Ce=>{var Te=je(),Oe=ke(Te);{var Ve=Re=>{var me=pE(),Fe=p(me),ne=p(Fe,!0);f(Fe);var _e=v(Fe,2),Me=p(_e,!0);f(_e);var ge=v(_e,2);{var J=ee=>{var ie=dE(),Ge=p(ie,!0);f(ie),V(ht=>y(Ge,ht),[()=>t()("로그인필요")]),R(ee,ie)},Ne=ee=>{var ie=fE();Zl(ie,"path","posts"),Zl(ie,"limit","10"),dr("post-click",ie,h),R(ee,ie)};le(ge,ee=>{i()?ee(Ne,!1):ee(J)})}f(me),V((ee,ie)=>{y(ne,ee),y(Me,ie)},[()=>t()("게시물목록"),()=>t()("게시물목록설명")]),R(Re,me)},De=Re=>{var me=je(),Fe=ke(me);{var ne=_e=>{var Me=mE(),ge=p(Me),J=p(ge,!0);f(ge);var Ne=v(ge,2),ee=p(Ne),ie=p(ee,!0);f(ee);var Ge=v(ee,2),ht=p(Ge,!0);f(Ge);var dt=v(Ge,2),St=p(dt,!0);f(dt);var nt=v(dt,4),te=p(nt,!0);f(nt);var B=v(nt,4),xe=p(B,!0);f(B);var Ue=v(B,4),ft=p(Ue,!0);f(Ue),Eu(2),f(Ne),f(Me),V((it,kt,he,qe,de,ce,We)=>{y(J,it),y(ie,kt),y(ht,he),y(St,qe),y(te,de),y(xe,ce),y(ft,We)},[()=>t()("프로젝트정보"),()=>t()("프로젝트개요"),()=>t()("프로젝트개요설명"),()=>t()("기술스택"),()=>t()("포함컴포넌트"),()=>t()("사용방법"),()=>t()("특징")]),R(_e,Me)};le(Fe,_e=>{b(o)==="about"&&_e(ne)},!0)}R(Re,me)};le(Oe,Re=>{b(o)==="posts"?Re(Ve):Re(De,!1)},!0)}R(Ce,Te)};le(pe,Ce=>{b(o)==="login"?Ce(Ae):Ce(ze,!1)},!0)}R(z,H)};le(oe,z=>{b(o)==="home"?z(q):z(re,!1)})}f(U);var Ee=v(U,2),Ie=p(Ee),ae=p(Ie,!0);f(Ie),f(Ee),f(u),V((z,H,pe,Ae,ze,Ce,Te)=>{y(T,z),y(k,H),bt(P,1,vs(b(o)==="home"?"tab active":"tab"),"svelte-1hwhcgc"),y(S,pe),bt(w,1,vs(b(o)==="login"?"tab active":"tab"),"svelte-1hwhcgc"),y(A,Ae),bt(D,1,vs(b(o)==="posts"?"tab active":"tab"),"svelte-1hwhcgc"),y(Z,ze),bt(N,1,vs(b(o)==="about"?"tab active":"tab"),"svelte-1hwhcgc"),y(O,Ce),y(ae,Te)},[()=>t()("데모제목"),()=>t()("데모부제"),()=>t()("홈"),()=>t()("로그인"),()=>t()("게시물목록"),()=>t()("정보"),()=>t()("푸터")]),R(n,u),sn(),r()}vi(["click"]);we(Ff,{},[],[],!0);qa(Ff,{target:document.getElementById("app")});
