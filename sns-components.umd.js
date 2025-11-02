(function(K,Us){typeof exports=="object"&&typeof module<"u"?Us(exports):typeof define=="function"&&define.amd?define(["exports"],Us):(K=typeof globalThis<"u"?globalThis:K||self,Us(K.SNSComponents={}))})(this,(function(K){"use strict";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");const Xh=1,Zh=2,ed=16,td=2,_a="[",$s="[!",Xi="]",an={},oe=Symbol(),nd="http://www.w3.org/1999/xhtml",ga=!1;var ma=Array.isArray,sd=Array.prototype.indexOf,Zi=Array.from,Ws=Object.keys,Bs=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,id=Object.getOwnPropertyDescriptors,rd=Object.prototype,od=Array.prototype,va=Object.getPrototypeOf,ya=Object.isExtensible;const er=()=>{};function ad(n){for(var e=0;e<n.length;e++)n[e]()}function Ea(){var n,e,t=new Promise((s,i)=>{n=s,e=i});return{promise:t,resolve:n,reject:e}}const ae=2,tr=4,nr=8,et=16,tt=32,mt=64,Hs=128,le=1024,_e=2048,nt=4096,Ce=8192,st=16384,sr=32768,cn=65536,wa=1<<17,ld=1<<18,Lt=1<<19,cd=1<<20,Te=256,Vs=512,zs=32768,ir=1<<21,rr=1<<22,Ft=1<<23,or=Symbol("$state"),ud=Symbol("legacy props"),hd=Symbol(""),un=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ar=3,hn=8;function Ia(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function dd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function fd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function pd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _d(n){throw new Error("https://svelte.dev/e/effect_orphan")}function gd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function md(){throw new Error("https://svelte.dev/e/hydration_failed")}function vd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ed(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function wd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function js(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function Id(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let O=!1;function it(n){O=n}let A;function ge(n){if(n===null)throw js(),an;return A=n}function Gs(){return ge(Ge(A))}function B(n){if(O){if(Ge(A)!==null)throw js(),an;A=n}}function Cd(n=1){if(O){for(var e=n,t=A;e--;)t=Ge(t);A=t}}function qs(n=!0){for(var e=0,t=A;;){if(t.nodeType===hn){var s=t.data;if(s===Xi){if(e===0)return t;e-=1}else(s===_a||s===$s)&&(e+=1)}var i=Ge(t);n&&t.remove(),t=i}}function Ca(n){if(!n||n.nodeType!==hn)throw js(),an;return n.data}function ba(n){return n===this.v}function Ta(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Sa(n){return!Ta(n,this.v)}let bd=!1,me=null;function dn(n){me=n}function lr(n,e=!1,t){me={p:me,i:!1,c:null,e:null,s:n,x:null,l:null}}function cr(n){var e=me,t=e.e;if(t!==null){e.e=null;for(var s of t)Ya(s)}return n!==void 0&&(e.x=n),e.i=!0,me=e.p,n??{}}function Ra(){return!0}let Ut=[];function ka(){var n=Ut;Ut=[],ad(n)}function jn(n){if(Ut.length===0&&!Gn){var e=Ut;queueMicrotask(()=>{e===Ut&&ka()})}Ut.push(n)}function Td(){for(;Ut.length>0;)ka()}function Aa(n){var e=T;if(e===null)return R.f|=Ft,n;if((e.f&sr)===0){if((e.f&Hs)===0)throw n;e.b.error(n)}else fn(n,e)}function fn(n,e){for(;e!==null;){if((e.f&Hs)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Ks=new Set;let H=null,Ys=null,Pe=null,je=[],Qs=null,ur=!1,Gn=!1;class Oe{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#s=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){je=[],Ys=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of e)this.#i(s,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects)):(Ys=this,H=null,Pa(t.render_effects),Pa(t.effects),Ys=null,this.#l?.resolve()),Pe=null}#i(e,t){e.f^=le;for(var s=e.first;s!==null;){var i=s.f,r=(i&(tt|mt))!==0,o=r&&(i&le)!==0,a=o||(i&Ce)!==0||this.skipped_effects.has(s);if((s.f&Hs)!==0&&s.b?.is_pending()&&(t={parent:t,effect:s,effects:[],render_effects:[],block_effects:[]}),!a&&s.fn!==null){r?s.f^=le:(i&tr)!==0?t.effects.push(s):Qn(s)&&((s.f&et)!==0&&t.block_effects.push(s),Jn(s));var l=s.first;if(l!==null){s=l;continue}}var c=s.parent;for(s=s.next;s===null&&c!==null;)c===t.effect&&(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects),t=t.parent),s=c.next,c=c.parent}}#r(e){for(const t of e)((t.f&_e)!==0?this.#o:this.#a).push(t),ue(t,le)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Pe?.set(e,e.v)}activate(){H=this}deactivate(){H=null,Pe=null}flush(){if(this.activate(),je.length>0){if(Na(),H!==null&&H!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(Ks.size>1){this.previous.clear();var e=Pe,t=!0,s={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ks){if(i===this){t=!1;continue}const r=[];for(const[a,l]of this.current){if(i.current.has(a))if(t&&l!==i.current.get(a))i.current.set(a,l);else continue;r.push(a)}if(r.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of r)Oa(c,o,a,l);if(je.length>0){H=i,i.apply();for(const c of je)i.#i(c,s);je=[],i.deactivate()}}}H=null,Pe=e}this.committed=!0,Ks.delete(this)}increment(e){this.#n+=1,e&&(this.#s+=1)}decrement(e){this.#n-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)ue(e,_e),$t(e);for(const e of this.#a)ue(e,nt),$t(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=Ea()).promise}static ensure(){if(H===null){const e=H=new Oe;Ks.add(H),Gn||Oe.enqueue(()=>{H===e&&e.flush()})}return H}static enqueue(e){jn(e)}apply(){}}function Js(n){var e=Gn;Gn=!0;try{for(var t;;){if(Td(),je.length===0&&(H?.flush(),je.length===0))return Qs=null,t;Na()}}finally{Gn=e}}function Na(){var n=mn;ur=!0;try{var e=0;for(nl(!0);je.length>0;){var t=Oe.ensure();if(e++>1e3){var s,i;Sd()}t.process(je),vt.clear()}}finally{ur=!1,nl(n),Qs=null}}function Sd(){try{gd()}catch(n){fn(n,Qs)}}let rt=null;function Pa(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var s=n[t++];if((s.f&(st|Ce))===0&&Qn(s)&&(rt=new Set,Jn(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null&&s.ac===null?Xa(s):s.fn=null),rt?.size>0)){vt.clear();for(const i of rt){if((i.f&(st|Ce))!==0)continue;const r=[i];let o=i.parent;for(;o!==null;)rt.has(o)&&(rt.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];(l.f&(st|Ce))===0&&Jn(l)}}rt.clear()}}rt=null}}function Oa(n,e,t,s){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const r=i.f;(r&ae)!==0?Oa(i,e,t,s):(r&(rr|et))!==0&&(r&_e)===0&&Da(i,e,s)&&(ue(i,_e),$t(i))}}function Da(n,e,t){const s=t.get(n);if(s!==void 0)return s;if(n.deps!==null)for(const i of n.deps){if(e.includes(i))return!0;if((i.f&ae)!==0&&Da(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function $t(n){for(var e=Qs=n;e.parent!==null;){e=e.parent;var t=e.f;if(ur&&e===T&&(t&et)!==0)return;if((t&(mt|tt))!==0){if((t&le)===0)return;e.f^=le}}je.push(e)}function Rd(n){let e=0,t=Wt(0),s;return()=>{Wd()&&(y(t),_r(()=>(e===0&&(s=ti(()=>n(()=>Kn(t)))),e+=1,()=>{jn(()=>{e-=1,e===0&&(s?.(),s=void 0,Kn(t))})})))}}var kd=cn|Lt|Hs;function Ad(n,e,t){new Nd(n,e,t)}class Nd{parent;#t=!1;#e;#n=O?A:null;#s;#l;#o;#a=null;#i=null;#r=null;#c=null;#u=null;#f=0;#h=0;#p=!1;#d=null;#y=Rd(()=>(this.#d=Wt(this.#f),()=>{this.#d=null}));constructor(e,t,s){this.#e=e,this.#s=t,this.#l=s,this.parent=T.b,this.#t=!!this.#s.pending,this.#o=gr(()=>{if(T.b=this,O){const r=this.#n;Gs(),r.nodeType===hn&&r.data===$s?this.#w():this.#E()}else{var i=this.#m();try{this.#a=Se(()=>s(i))}catch(r){this.error(r)}this.#h>0?this.#g():this.#t=!1}return()=>{this.#u?.remove()}},kd),O&&(this.#e=A)}#E(){try{this.#a=Se(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#w(){const e=this.#s.pending;e&&(this.#i=Se(()=>e(this.#e)),Oe.enqueue(()=>{var t=this.#m();this.#a=this.#_(()=>(Oe.ensure(),Se(()=>this.#l(t)))),this.#h>0?this.#g():(gn(this.#i,()=>{this.#i=null}),this.#t=!1)}))}#m(){var e=this.#e;return this.#t&&(this.#u=De(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#_(e){var t=T,s=R,i=me;Ke(this.#o),ye(this.#o),dn(this.#o.ctx);try{return e()}catch(r){return Aa(r),null}finally{Ke(t),ye(s),dn(i)}}#g(){const e=this.#s.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),tl(this.#a,this.#c)),this.#i===null&&(this.#i=Se(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#h+=e,this.#h===0&&(this.#t=!1,this.#i&&gn(this.#i,()=>{this.#i=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#d&&qn(this.#d,this.#f)}get_effect_pending(){return this.#y(),y(this.#d)}error(e){var t=this.#s.onerror;let s=this.#s.failed;if(this.#p||!t&&!s)throw e;this.#a&&(ce(this.#a),this.#a=null),this.#i&&(ce(this.#i),this.#i=null),this.#r&&(ce(this.#r),this.#r=null),O&&(ge(this.#n),Cd(),ge(qs()));var i=!1,r=!1;const o=()=>{if(i){Id();return}i=!0,r&&wd(),Oe.ensure(),this.#f=0,this.#r!==null&&gn(this.#r,()=>{this.#r=null}),this.#t=this.has_pending_snippet(),this.#a=this.#_(()=>(this.#p=!1,Se(()=>this.#l(this.#e)))),this.#h>0?this.#g():this.#t=!1};var a=R;try{ye(null),r=!0,t?.(e,o),r=!1}catch(l){fn(l,this.#o&&this.#o.parent)}finally{ye(a)}s&&jn(()=>{this.#r=this.#_(()=>{Oe.ensure(),this.#p=!0;try{return Se(()=>{s(this.#e,()=>e,()=>o)})}catch(l){return fn(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Pd(n,e,t,s){const i=hr;if(t.length===0&&n.length===0){s(e.map(i));return}var r=H,o=T,a=Od();function l(){Promise.all(t.map(c=>Dd(c))).then(c=>{a();try{s([...e.map(i),...c])}catch(h){(o.f&st)===0&&fn(h,o)}r?.deactivate(),Xs()}).catch(c=>{fn(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{r?.deactivate(),Xs()}}):l()}function Od(){var n=T,e=R,t=me,s=H;return function(r=!0){Ke(n),ye(e),dn(t),r&&s?.activate()}}function Xs(){Ke(null),ye(null),dn(null)}function hr(n){var e=ae|_e,t=R!==null&&(R.f&ae)!==0?R:null;return T===null||t!==null&&(t.f&Te)!==0?e|=Te:T.f|=Lt,{ctx:me,deps:null,effects:null,equals:ba,f:e,fn:n,reactions:null,rv:0,v:oe,wv:0,parent:t??T,ac:null}}function Dd(n,e){let t=T;t===null&&dd();var s=t.b,i=void 0,r=Wt(oe),o=!R,a=new Map;return jd(()=>{var l=Ea();i=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===H&&c.committed&&c.deactivate(),Xs()})}catch(u){l.reject(u),Xs()}var c=H;if(o){var h=!s.is_pending();s.update_pending_count(1),c.increment(h),a.get(c)?.reject(un),a.delete(c),a.set(c,l)}const d=(u,f=void 0)=>{if(c.activate(),f)f!==un&&(r.f|=Ft,qn(r,f));else{(r.f&Ft)!==0&&(r.f^=Ft),qn(r,u);for(const[p,g]of a){if(a.delete(p),p===c)break;g.reject(un)}}o&&(s.update_pending_count(-1),c.decrement(h))};l.promise.then(d,u=>d(null,u||"unknown"))}),Ka(()=>{for(const l of a.values())l.reject(un)}),new Promise(l=>{function c(h){function d(){h===i?l(r):c(i)}h.then(d,d)}c(i)})}function xd(n){const e=hr(n);return e.equals=Sa,e}function xa(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)ce(e[t])}}function Md(n){for(var e=n.parent;e!==null;){if((e.f&ae)===0)return e;e=e.parent}return null}function dr(n){var e,t=T;Ke(Md(n));try{n.f&=~zs,xa(n),e=ll(n)}finally{Ke(t)}return e}function Ma(n){var e=dr(n);if(n.equals(e)||(n.v=e,n.wv=ol()),!Ht)if(Pe!==null)Pe.set(n,n.v);else{var t=(yt||(n.f&Te)!==0)&&n.deps!==null?nt:le;ue(n,t)}}let fr=new Set;const vt=new Map;let La=!1;function Wt(n,e){var t={f:0,v:n,reactions:null,equals:ba,rv:0,wv:0};return t}function ee(n,e){const t=Wt(n);return Kd(t),t}function Fa(n,e=!1,t=!0){const s=Wt(n);return e||(s.equals=Sa),s}function D(n,e,t=!1){R!==null&&(!xe||(R.f&wa)!==0)&&Ra()&&(R.f&(ae|et|rr|wa))!==0&&!ot?.includes(n)&&Ed();let s=t?pn(e):e;return qn(n,s)}function qn(n,e){if(!n.equals(e)){var t=n.v;Ht?vt.set(n,e):vt.set(n,t),n.v=e;var s=Oe.ensure();s.capture(n,t),(n.f&ae)!==0&&((n.f&_e)!==0&&dr(n),ue(n,(n.f&Te)===0?le:nt)),n.wv=ol(),Ua(n,_e),T!==null&&(T.f&le)!==0&&(T.f&(tt|mt))===0&&(Re===null?Yd([n]):Re.push(n)),!s.is_fork&&fr.size>0&&!La&&Ld()}return e}function Ld(){La=!1;const n=Array.from(fr);for(const e of n)(e.f&le)!==0&&ue(e,nt),Qn(e)&&Jn(e);fr.clear()}function Kn(n){D(n,n.v+1)}function Ua(n,e){var t=n.reactions;if(t!==null)for(var s=t.length,i=0;i<s;i++){var r=t[i],o=r.f,a=(o&_e)===0;a&&ue(r,e),(o&ae)!==0?(o&zs)===0&&(r.f|=zs,Ua(r,nt)):a&&((o&et)!==0&&rt!==null&&rt.add(r),$t(r))}}function pn(n){if(typeof n!="object"||n===null||or in n)return n;const e=va(n);if(e!==rd&&e!==od)return n;var t=new Map,s=ma(n),i=ee(0),r=Vt,o=a=>{if(Vt===r)return a();var l=R,c=Vt;ye(null),rl(r);var h=a();return ye(l),rl(c),h};return s&&t.set("length",ee(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&vd();var h=t.get(l);return h===void 0?h=o(()=>{var d=ee(c.value);return t.set(l,d),d}):D(h,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const h=o(()=>ee(oe));t.set(l,h),Kn(i)}}else D(c,oe),Kn(i);return!0},get(a,l,c){if(l===or)return n;var h=t.get(l),d=l in a;if(h===void 0&&(!d||ln(a,l)?.writable)&&(h=o(()=>{var f=pn(d?a[l]:oe),p=ee(f);return p}),t.set(l,h)),h!==void 0){var u=y(h);return u===oe?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=y(h))}else if(c===void 0){var d=t.get(l),u=d?.v;if(d!==void 0&&u!==oe)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===or)return!0;var c=t.get(l),h=c!==void 0&&c.v!==oe||Reflect.has(a,l);if(c!==void 0||T!==null&&(!h||ln(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=h?pn(a[l]):oe,f=ee(u);return f}),t.set(l,c));var d=y(c);if(d===oe)return!1}return h},set(a,l,c,h){var d=t.get(l),u=l in a;if(s&&l==="length")for(var f=c;f<d.v;f+=1){var p=t.get(f+"");p!==void 0?D(p,oe):f in a&&(p=o(()=>ee(oe)),t.set(f+"",p))}if(d===void 0)(!u||ln(a,l)?.writable)&&(d=o(()=>ee(void 0)),D(d,pn(c)),t.set(l,d));else{u=d.v!==oe;var g=o(()=>pn(c));D(d,g)}var v=Reflect.getOwnPropertyDescriptor(a,l);if(v?.set&&v.set.call(h,c),!u){if(s&&typeof l=="string"){var N=t.get("length"),m=Number(l);Number.isInteger(m)&&m>=N.v&&D(N,m+1)}Kn(i)}return!0},ownKeys(a){y(i);var l=Reflect.ownKeys(a).filter(d=>{var u=t.get(d);return u===void 0||u.v!==oe});for(var[c,h]of t)h.v!==oe&&!(c in a)&&l.push(c);return l},setPrototypeOf(){yd()}})}var $a,Wa,Ba,Ha;function pr(){if($a===void 0){$a=window,Wa=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ba=ln(e,"firstChild").get,Ha=ln(e,"nextSibling").get,ya(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),ya(t)&&(t.__t=void 0)}}function De(n=""){return document.createTextNode(n)}function _n(n){return Ba.call(n)}function Ge(n){return Ha.call(n)}function V(n,e){if(!O)return _n(n);var t=_n(A);if(t===null)t=A.appendChild(De());else if(e&&t.nodeType!==ar){var s=De();return t?.before(s),ge(s),s}return ge(t),t}function Va(n,e=!1){if(!O){var t=_n(n);return t instanceof Comment&&t.data===""?Ge(t):t}if(e&&A?.nodeType!==ar){var s=De();return A?.before(s),ge(s),s}return A}function ve(n,e=1,t=!1){let s=O?A:n;for(var i;e--;)i=s,s=Ge(s);if(!O)return s;if(t&&s?.nodeType!==ar){var r=De();return s===null?i?.after(r):s.before(r),ge(r),r}return ge(s),s}function za(n){n.textContent=""}function ja(){return!1}let Ga=!1;function qa(){Ga||(Ga=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Zs(n){var e=R,t=T;ye(null),Ke(null);try{return n()}finally{ye(e),Ke(t)}}function Fd(n,e,t,s=t){n.addEventListener(e,()=>Zs(t));const i=n.__on_r;i?n.__on_r=()=>{i(),s(!0)}:n.__on_r=()=>s(!0),qa()}function Ud(n){T===null&&R===null&&_d(),R!==null&&(R.f&Te)!==0&&T===null&&pd(),Ht&&fd()}function $d(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function qe(n,e,t,s=!0){var i=T;i!==null&&(i.f&Ce)!==0&&(n|=Ce);var r={ctx:me,deps:null,nodes_start:null,nodes_end:null,f:n|_e,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Jn(r),r.f|=sr}catch(l){throw ce(r),l}else e!==null&&$t(r);if(s){var o=r;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Lt)===0&&(o=o.first,(n&et)!==0&&(n&cn)!==0&&o!==null&&(o.f|=cn)),o!==null&&(o.parent=i,i!==null&&$d(o,i),R!==null&&(R.f&ae)!==0&&(n&mt)===0)){var a=R;(a.effects??=[]).push(o)}}return r}function Wd(){return R!==null&&!xe}function Ka(n){const e=qe(nr,null,!1);return ue(e,le),e.teardown=n,e}function Bd(n){Ud();var e=T.f,t=!R&&(e&tt)!==0&&(e&sr)===0;if(t){var s=me;(s.e??=[]).push(n)}else return Ya(n)}function Ya(n){return qe(tr|cd,n,!1)}function Hd(n){Oe.ensure();const e=qe(mt|Lt,n,!0);return()=>{ce(e)}}function Vd(n){Oe.ensure();const e=qe(mt|Lt,n,!0);return(t={})=>new Promise(s=>{t.outro?gn(e,()=>{ce(e),s(void 0)}):(ce(e),s(void 0))})}function zd(n){return qe(tr,n,!1)}function jd(n){return qe(rr|Lt,n,!0)}function _r(n,e=0){return qe(nr|e,n,!0)}function Bt(n,e=[],t=[],s=[]){Pd(s,e,t,i=>{qe(nr,()=>n(...i.map(y)),!0)})}function gr(n,e=0){var t=qe(et|e,n,!0);return t}function Se(n,e=!0){return qe(tt|Lt,n,!0,e)}function Qa(n){var e=n.teardown;if(e!==null){const t=Ht,s=R;sl(!0),ye(null);try{e.call(null)}finally{sl(t),ye(s)}}}function Ja(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&Zs(()=>{i.abort(un)});var s=t.next;(t.f&mt)!==0?t.parent=null:ce(t,e),t=s}}function Gd(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&tt)===0&&ce(e),e=t}}function ce(n,e=!0){var t=!1;(e||(n.f&ld)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(qd(n.nodes_start,n.nodes_end),t=!0),Ja(n,e&&!t),ei(n,0),ue(n,st);var s=n.transitions;if(s!==null)for(const r of s)r.stop();Qa(n);var i=n.parent;i!==null&&i.first!==null&&Xa(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function qd(n,e){for(;n!==null;){var t=n===e?null:Ge(n);n.remove(),n=t}}function Xa(n){var e=n.parent,t=n.prev,s=n.next;t!==null&&(t.next=s),s!==null&&(s.prev=t),e!==null&&(e.first===n&&(e.first=s),e.last===n&&(e.last=t))}function gn(n,e,t=!0){var s=[];mr(n,s,!0),Za(s,()=>{t&&ce(n),e&&e()})}function Za(n,e){var t=n.length;if(t>0){var s=()=>--t||e();for(var i of n)i.out(s)}else e()}function mr(n,e,t){if((n.f&Ce)===0){if(n.f^=Ce,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var s=n.first;s!==null;){var i=s.next,r=(s.f&cn)!==0||(s.f&tt)!==0&&(n.f&et)!==0;mr(s,e,r?t:!1),s=i}}}function vr(n){el(n,!0)}function el(n,e){if((n.f&Ce)!==0){n.f^=Ce,(n.f&le)===0&&(ue(n,_e),$t(n));for(var t=n.first;t!==null;){var s=t.next,i=(t.f&cn)!==0||(t.f&tt)!==0;el(t,i?e:!1),t=s}if(n.transitions!==null)for(const r of n.transitions)(r.is_global||e)&&r.in()}}function tl(n,e){for(var t=n.nodes_start,s=n.nodes_end;t!==null;){var i=t===s?null:Ge(t);e.append(t),t=i}}let mn=!1;function nl(n){mn=n}let Ht=!1;function sl(n){Ht=n}let R=null,xe=!1;function ye(n){R=n}let T=null;function Ke(n){T=n}let ot=null;function Kd(n){R!==null&&(ot===null?ot=[n]:ot.push(n))}let he=null,be=0,Re=null;function Yd(n){Re=n}let il=1,Yn=0,Vt=Yn;function rl(n){Vt=n}let yt=!1;function ol(){return++il}function Qn(n){var e=n.f;if((e&_e)!==0)return!0;if((e&nt)!==0){var t=n.deps,s=(e&Te)!==0;if(e&ae&&(n.f&=~zs),t!==null){var i,r,o=(e&Vs)!==0,a=s&&T!==null&&!yt,l=t.length;if((o||a)&&(T===null||(T.f&st)===0)){var c=n,h=c.parent;for(i=0;i<l;i++)r=t[i],(o||!r?.reactions?.includes(c))&&(r.reactions??=[]).push(c);o&&(c.f^=Vs),a&&h!==null&&(h.f&Te)===0&&(c.f^=Te)}for(i=0;i<l;i++)if(r=t[i],Qn(r)&&Ma(r),r.wv>n.wv)return!0}(!s||T!==null&&!yt)&&ue(n,le)}return!1}function al(n,e,t=!0){var s=n.reactions;if(s!==null&&!ot?.includes(n))for(var i=0;i<s.length;i++){var r=s[i];(r.f&ae)!==0?al(r,e,!1):e===r&&(t?ue(r,_e):(r.f&le)!==0&&ue(r,nt),$t(r))}}function ll(n){var e=he,t=be,s=Re,i=R,r=yt,o=ot,a=me,l=xe,c=Vt,h=n.f;he=null,be=0,Re=null,yt=(h&Te)!==0&&(xe||!mn||R===null),R=(h&(tt|mt))===0?n:null,ot=null,dn(n.ctx),xe=!1,Vt=++Yn,n.ac!==null&&(Zs(()=>{n.ac.abort(un)}),n.ac=null);try{n.f|=ir;var d=n.fn,u=d(),f=n.deps;if(he!==null){var p;if(ei(n,be),f!==null&&be>0)for(f.length=be+he.length,p=0;p<he.length;p++)f[be+p]=he[p];else n.deps=f=he;if(!yt||(h&ae)!==0&&n.reactions!==null)for(p=be;p<f.length;p++)(f[p].reactions??=[]).push(n)}else f!==null&&be<f.length&&(ei(n,be),f.length=be);if(Ra()&&Re!==null&&!xe&&f!==null&&(n.f&(ae|nt|_e))===0)for(p=0;p<Re.length;p++)al(Re[p],n);return i!==null&&i!==n&&(Yn++,Re!==null&&(s===null?s=Re:s.push(...Re))),(n.f&Ft)!==0&&(n.f^=Ft),u}catch(g){return Aa(g)}finally{n.f^=ir,he=e,be=t,Re=s,R=i,yt=r,ot=o,dn(a),xe=l,Vt=c}}function Qd(n,e){let t=e.reactions;if(t!==null){var s=sd.call(t,n);if(s!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[s]=t[i],t.pop())}}t===null&&(e.f&ae)!==0&&(he===null||!he.includes(e))&&(ue(e,nt),(e.f&(Te|Vs))===0&&(e.f^=Vs),xa(e),ei(e,0))}function ei(n,e){var t=n.deps;if(t!==null)for(var s=e;s<t.length;s++)Qd(n,t[s])}function Jn(n){var e=n.f;if((e&st)===0){ue(n,le);var t=T,s=mn;T=n,mn=!0;try{(e&et)!==0?Gd(n):Ja(n),Qa(n);var i=ll(n);n.teardown=typeof i=="function"?i:null,n.wv=il;var r;ga&&bd&&(n.f&_e)!==0&&n.deps}finally{mn=s,T=t}}}async function Jd(){await Promise.resolve(),Js()}function y(n){var e=n.f,t=(e&ae)!==0;if(R!==null&&!xe){var s=T!==null&&(T.f&st)!==0;if(!s&&!ot?.includes(n)){var i=R.deps;if((R.f&ir)!==0)n.rv<Yn&&(n.rv=Yn,he===null&&i!==null&&i[be]===n?be++:he===null?he=[n]:(!yt||!he.includes(n))&&he.push(n));else{(R.deps??=[]).push(n);var r=n.reactions;r===null?n.reactions=[R]:r.includes(R)||r.push(R)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&Te)===0&&(o.f^=Te)}if(Ht){if(vt.has(n))return vt.get(n);if(t){o=n;var l=o.v;return((o.f&le)===0&&o.reactions!==null||cl(o))&&(l=dr(o)),vt.set(o,l),l}}else if(t){if(o=n,Pe?.has(o))return Pe.get(o);Qn(o)&&Ma(o)}if(Pe?.has(n))return Pe.get(n);if((n.f&Ft)!==0)throw n.v;return n.v}function cl(n){if(n.v===oe)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(vt.has(e)||(e.f&ae)!==0&&cl(e))return!0;return!1}function ti(n){var e=xe;try{return xe=!0,n()}finally{xe=e}}const Xd=-7169;function ue(n,e){n.f=n.f&Xd|e}const ul=new Set,yr=new Set;function Zd(n,e,t,s={}){function i(r){if(s.capture||Xn.call(e,r),!r.cancelBubble)return Zs(()=>t?.call(this,r))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?jn(()=>{e.addEventListener(n,i,s)}):e.addEventListener(n,i,s),i}function ef(n,e,t,s,i){var r={capture:s,passive:i},o=Zd(n,e,t,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Ka(()=>{e.removeEventListener(n,o,r)})}function hl(n){for(var e=0;e<n.length;e++)ul.add(n[e]);for(var t of yr)t(n)}let dl=null;function Xn(n){var e=this,t=e.ownerDocument,s=n.type,i=n.composedPath?.()||[],r=i[0]||n.target;dl=n;var o=0,a=dl===n&&n.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(r=i[o]||n.target,r!==e){Bs(n,"currentTarget",{configurable:!0,get(){return r||t}});var h=R,d=T;ye(null),Ke(null);try{for(var u,f=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+s];g!=null&&(!r.disabled||n.target===r)&&g.call(r,n)}catch(v){u?f.push(v):u=v}if(n.cancelBubble||p===e||p===null)break;r=p}if(u){for(let v of f)queueMicrotask(()=>{throw v});throw u}}finally{n.__root=e,delete n.currentTarget,ye(h),Ke(d)}}}function tf(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function Zn(n,e){var t=T;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function Me(n,e){var t=(e&td)!==0,s,i=!n.startsWith("<!>");return()=>{if(O)return Zn(A,null),A;s===void 0&&(s=tf(i?n:"<!>"+n),s=_n(s));var r=t||Wa?document.importNode(s,!0):s.cloneNode(!0);return Zn(r,r),r}}function fl(){if(O)return Zn(A,null),A;var n=document.createDocumentFragment(),e=document.createComment(""),t=De();return n.append(e,t),Zn(e,t),n}function Ee(n,e){if(O){T.nodes_end=A,Gs();return}n!==null&&n.before(e)}const nf=["touchstart","touchmove"];function sf(n){return nf.includes(n)}function Le(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function pl(n,e){return _l(n,e)}function rf(n,e){pr(),e.intro=e.intro??!1;const t=e.target,s=O,i=A;try{for(var r=_n(t);r&&(r.nodeType!==hn||r.data!==_a);)r=Ge(r);if(!r)throw an;it(!0),ge(r);const o=_l(n,{...e,anchor:r});return it(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==an&&console.warn("Failed to hydrate: ",o),e.recover===!1&&md(),pr(),za(t),it(!1),pl(n,e)}finally{it(s),ge(i)}}const vn=new Map;function _l(n,{target:e,anchor:t,props:s={},events:i,context:r,intro:o=!0}){pr();var a=new Set,l=d=>{for(var u=0;u<d.length;u++){var f=d[u];if(!a.has(f)){a.add(f);var p=sf(f);e.addEventListener(f,Xn,{passive:p});var g=vn.get(f);g===void 0?(document.addEventListener(f,Xn,{passive:p}),vn.set(f,1)):vn.set(f,g+1)}}};l(Zi(ul)),yr.add(l);var c=void 0,h=Vd(()=>{var d=t??e.appendChild(De());return Ad(d,{pending:()=>{}},u=>{if(r){lr({});var f=me;f.c=r}if(i&&(s.$$events=i),O&&Zn(u,null),c=n(u,s)||{},O&&(T.nodes_end=A,A===null||A.nodeType!==hn||A.data!==Xi))throw js(),an;r&&cr()}),()=>{for(var u of a){e.removeEventListener(u,Xn);var f=vn.get(u);--f===0?(document.removeEventListener(u,Xn),vn.delete(u)):vn.set(u,f)}yr.delete(l),d!==t&&d.parentNode?.removeChild(d)}});return Er.set(c,h),c}let Er=new WeakMap;function of(n,e){const t=Er.get(n);return t?(Er.delete(n),t(e)):Promise.resolve()}class af{anchor;#t=new Map;#e=new Map;#n=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=H;if(this.#t.has(e)){var t=this.#t.get(e),s=this.#e.get(t);if(s)vr(s);else{var i=this.#n.get(t);i&&(this.#e.set(t,i.effect),this.#n.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),s=i.effect)}for(const[r,o]of this.#t){if(this.#t.delete(r),r===e)break;const a=this.#n.get(o);a&&(ce(a.effect),this.#n.delete(o))}for(const[r,o]of this.#e){if(r===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(r)){var c=document.createDocumentFragment();tl(o,c),c.append(De()),this.#n.set(r,{effect:o,fragment:c})}else ce(o);this.#e.delete(r)};this.#s||!s?gn(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[s,i]of this.#n)t.includes(s)||(ce(i.effect),this.#n.delete(s))};ensure(e,t){var s=H,i=ja();if(t&&!this.#e.has(e)&&!this.#n.has(e))if(i){var r=document.createDocumentFragment(),o=De();r.append(o),this.#n.set(e,{effect:Se(()=>t(o)),fragment:r})}else this.#e.set(e,Se(()=>t(this.anchor)));if(this.#t.set(s,e),i){for(const[a,l]of this.#e)a===e?s.skipped_effects.delete(l):s.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?s.skipped_effects.delete(l.effect):s.skipped_effects.add(l.effect);s.oncommit(this.#l),s.ondiscard(this.#o)}else O&&(this.anchor=A),this.#l()}}function gl(n){me===null&&Ia(),Bd(()=>{const e=ti(n);if(typeof e=="function")return e})}function lf(n){me===null&&Ia(),gl(()=>()=>ti(n))}function zt(n,e,t=!1){O&&Gs();var s=new af(n),i=t?cn:0;function r(o,a){if(O){const c=Ca(n)===$s;if(o===c){var l=qs();ge(l),s.anchor=l,it(!1),s.ensure(o,a),it(!0);return}}s.ensure(o,a)}gr(()=>{var o=!1;e((a,l=!0)=>{o=!0,r(l,a)}),o||r(!1,null)},i)}function cf(n,e,t){for(var s=n.items,i=[],r=e.length,o=0;o<r;o++)mr(e[o].e,i,!0);var a=r>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;za(l),l.append(t),s.clear(),Ye(n,e[0].prev,e[r-1].next)}Za(i,()=>{for(var c=0;c<r;c++){var h=e[c];a||(s.delete(h.k),Ye(n,h.prev,h.next)),ce(h.e,!a)}})}function uf(n,e,t,s,i,r=null){var o=n,a={flags:e,items:new Map,first:null};{var l=n;o=O?ge(_n(l)):l.appendChild(De())}O&&Gs();var c=null,h=!1,d=new Map,u=xd(()=>{var v=t();return ma(v)?v:v==null?[]:Zi(v)}),f,p;function g(){hf(p,f,a,d,o,i,e,s,t),r!==null&&(f.length===0?c?vr(c):c=Se(()=>r(o)):c!==null&&gn(c,()=>{c=null}))}gr(()=>{p??=T,f=y(u);var v=f.length;if(h&&v===0)return;h=v===0;let N=!1;if(O){var m=Ca(o)===$s;m!==(v===0)&&(o=qs(),ge(o),it(!1),N=!0)}if(O){for(var I=null,P,x=0;x<v;x++){if(A.nodeType===hn&&A.data===Xi){o=A,N=!0,it(!1);break}var ie=f[x],$=s(ie,x);P=wr(A,a,I,null,ie,$,x,i,e,t),a.items.set($,P),I=P}v>0&&ge(qs())}if(O)v===0&&r&&(c=Se(()=>r(o)));else if(ja()){var J=new Set,z=H;for(x=0;x<v;x+=1){ie=f[x],$=s(ie,x);var Ve=a.items.get($)??d.get($);Ve?ml(Ve,ie,x):(P=wr(null,a,null,null,ie,$,x,i,e,t,!0),d.set($,P)),J.add($)}for(const[q,W]of a.items)J.has(q)||z.skipped_effects.add(W.e);z.oncommit(g)}else g();N&&it(!0),y(u)}),O&&(o=A)}function hf(n,e,t,s,i,r,o,a,l){var c=e.length,h=t.items,d=t.first,u=d,f,p=null,g=[],v=[],N,m,I,P;for(P=0;P<c;P+=1){if(N=e[P],m=a(N,P),I=h.get(m),I===void 0){var x=s.get(m);if(x!==void 0){s.delete(m),h.set(m,x);var ie=p?p.next:u;Ye(t,p,x),Ye(t,x,ie),Ir(x,ie,i),p=x}else{var $=u?u.e.nodes_start:i;p=wr($,t,p,p===null?t.first:p.next,N,m,P,r,o,l)}h.set(m,p),g=[],v=[],u=p.next;continue}if(ml(I,N,P),(I.e.f&Ce)!==0&&vr(I.e),I!==u){if(f!==void 0&&f.has(I)){if(g.length<v.length){var J=v[0],z;p=J.prev;var Ve=g[0],q=g[g.length-1];for(z=0;z<g.length;z+=1)Ir(g[z],J,i);for(z=0;z<v.length;z+=1)f.delete(v[z]);Ye(t,Ve.prev,q.next),Ye(t,p,Ve),Ye(t,q,J),u=J,p=q,P-=1,g=[],v=[]}else f.delete(I),Ir(I,u,i),Ye(t,I.prev,I.next),Ye(t,I,p===null?t.first:p.next),Ye(t,p,I),p=I;continue}for(g=[],v=[];u!==null&&u.k!==m;)(u.e.f&Ce)===0&&(f??=new Set).add(u),v.push(u),u=u.next;if(u===null)continue;I=u}g.push(I),p=I,u=I.next}if(u!==null||f!==void 0){for(var W=f===void 0?[]:Zi(f);u!==null;)(u.e.f&Ce)===0&&W.push(u),u=u.next;var re=W.length;if(re>0){var rn=c===0?i:null;cf(t,W,rn)}}n.first=t.first&&t.first.e,n.last=p&&p.e;for(var Ie of s.values())ce(Ie.e);s.clear()}function ml(n,e,t,s){qn(n.v,e),n.i=t}function wr(n,e,t,s,i,r,o,a,l,c,h){var d=(l&Xh)!==0,u=(l&ed)===0,f=d?u?Fa(i,!1,!1):Wt(i):i,p=(l&Zh)===0?o:Wt(o),g={i:p,v:f,k:r,a:null,e:null,prev:t,next:s};try{if(n===null){var v=document.createDocumentFragment();v.append(n=De())}return g.e=Se(()=>a(n,f,p,c),O),g.e.prev=t&&t.e,g.e.next=s&&s.e,t===null?h||(e.first=g):(t.next=g,t.e.next=g.e),s!==null&&(s.prev=g,s.e.prev=g.e),g}finally{}}function Ir(n,e,t){for(var s=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,r=n.e.nodes_start;r!==null&&r!==s;){var o=Ge(r);i.before(r),r=o}}function Ye(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function vl(n,e){zd(()=>{var t=n.getRootNode(),s=t.host?t:t.head??t.ownerDocument.head;if(!s.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,s.appendChild(i)}})}const df=Symbol("is custom element"),ff=Symbol("is html");function Cr(n){if(O){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;br(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;br(n,"checked",null),n.checked=i}}};n.__on_r=t,jn(t),qa()}}function br(n,e,t,s){var i=pf(n);O&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(n[hd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&_f(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function pf(n){return n.__attributes??={[df]:n.nodeName.includes("-"),[ff]:n.namespaceURI===nd}}var yl=new Map;function _f(n){var e=n.getAttribute("is")||n.nodeName,t=yl.get(e);if(t)return t;yl.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=id(i);for(var o in s)s[o].set&&t.push(o);i=va(i)}return t}function Tr(n,e,t=e){var s=new WeakSet;Fd(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=Sr(n)?Rr(r):r,t(r),H!==null&&s.add(H),await Jd(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=r??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(O&&n.defaultValue!==n.value||ti(e)==null&&n.value)&&(t(Sr(n)?Rr(n.value):n.value),H!==null&&s.add(H)),_r(()=>{var i=e();if(n===document.activeElement){var r=Ys??H;if(s.has(r))return}Sr(n)&&i===Rr(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Sr(n){var e=n.type;return e==="number"||e==="range"}function Rr(n){return n===""?null:+n}const yn=[];function kr(n,e=er){let t=null;const s=new Set;function i(a){if(Ta(n,a)&&(n=a,t)){const l=!yn.length;for(const c of s)c[1](),yn.push(c,n);if(l){for(let c=0;c<yn.length;c+=2)yn[c][0](yn[c+1]);yn.length=0}}}function r(a){i(a(n))}function o(a,l=er){const c=[a,l];return s.add(c),s.size===1&&(t=e(i,r)||er),a(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}function El(n,e,t,s){var i=s,r=!0,o=()=>(r&&(r=!1,i=s),i),a;a=n[e],a===void 0&&s!==void 0&&(a=o());var l;l=()=>{var u=n[e];return u===void 0?o():(r=!0,u)};var c=!1,h=hr(()=>(c=!1,l())),d=T;return(function(u,f){if(arguments.length>0){const p=f?y(h):u;return D(h,p),c=!0,i!==void 0&&(i=p),u}return Ht&&c||(d.f&st)!==0?h.v:y(h)})}function gf(n){return new mf(n)}class mf{#t;#e;constructor(e){var t=new Map,s=(r,o)=>{var a=Fa(o,!1,!1);return t.set(r,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(r,o){return y(t.get(o)??s(o,Reflect.get(r,o)))},has(r,o){return o===ud?!0:(y(t.get(o)??s(o,Reflect.get(r,o))),Reflect.has(r,o))},set(r,o,a){return D(t.get(o)??s(o,a),a),Reflect.set(r,o,a)}});this.#e=(e.hydrate?rf:pl)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Js(),this.#t=i.$$events;for(const r of Object.keys(this.#e))r==="$set"||r==="$destroy"||r==="$on"||Bs(this,r,{get(){return this.#e[r]},set(o){this.#e[r]=o},enumerable:!0});this.#e.$set=r=>{Object.assign(i,r)},this.#e.$destroy=()=>{of(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const s=(...i)=>t.call(this,...i);return this.#t[e].push(s),()=>{this.#t[e]=this.#t[e].filter(i=>i!==s)}}$destroy(){this.#e.$destroy()}}let wl;typeof HTMLElement=="function"&&(wl=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const s=this.$$c.$on(n,e);this.$$l_u.set(e,s)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const s=this.$$l_u.get(e);s&&(s(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let n=function(s){return i=>{const r=document.createElement("slot");s!=="default"&&(r.name=s),Ee(i,r)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},t=vf(this);for(const s of this.$$s)s in t&&(s==="default"&&!this.$$d.children?(this.$$d.children=n(s),e.default=!0):e[s]=n(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=ni(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=gf({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$host:this}}),this.$$me=Hd(()=>{_r(()=>{this.$$r=!0;for(const s of Ws(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=ni(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const r=this.$$c.$on(s,i);this.$$l_u.set(i,r)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=ni(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return Ws(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function ni(n,e,t,s){const i=t[n]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!t[n])return e;if(s==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function vf(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function Il(n,e,t,s,i,r){let o=class extends wl{constructor(){super(n,t,i),this.$$p_d=e}static get observedAttributes(){return Ws(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Ws(e).forEach(a=>{Bs(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=ni(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=ln(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),s.forEach(a=>{Bs(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}const yf=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw En(e)},En=function(n){return new Error("Firebase Database ("+Cl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ef=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),s.push(t[h],t[d],t[u],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ef(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new wf;const u=r<<2|a>>4;if(s.push(u),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const p=c<<6&192|d;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tl=function(n){const e=bl(n);return Ar.encodeByteArray(e,!0)},si=function(n){return Tl(n).replace(/\./g,"")},ii=function(n){try{return Ar.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n){return Sl(void 0,n)}function Sl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Cf(t)||(n[t]=Sl(n[t],e[t]));return n}function Cf(n){return n!=="__proto__"}/**
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
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tf=()=>bf().__FIREBASE_DEFAULTS__,Sf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ii(n[1]);return e&&JSON.parse(e)},Nr=()=>{try{return yf()||Tf()||Sf()||Rf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rl=n=>Nr()?.emulatorHosts?.[n],kf=n=>{const e=Rl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},kl=()=>Nr()?.config,Al=n=>Nr()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function wn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Af(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[si(JSON.stringify(t)),si(JSON.stringify(o)),""].join(".")}const ts={};function Nf(){const n={prod:[],emulator:[]};for(const e of Object.keys(ts))ts[e]?n.emulator.push(e):n.prod.push(e);return n}function Pf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Pl=!1;function Ol(n,e){if(typeof window>"u"||typeof document>"u"||!wn(window.location.host)||ts[n]===e||ts[n]||Pl)return;ts[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",r=Nf().prod.length>0;function o(){const u=document.getElementById(s);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Pl=!0,o()},u}function h(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=Pf(s),f=t("text"),p=document.getElementById(f)||document.createElement("span"),g=t("learnmore"),v=document.getElementById(g)||document.createElement("a"),N=t("preprendIcon"),m=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const I=u.element;a(I),h(v,g);const P=c();l(m,N),I.append(m,p,v,P),document.body.appendChild(I)}r?(p.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(m.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Of(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xf(){const n=de();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mf(){return Cl.NODE_ADMIN===!0}function Lf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="FirebaseError";class Et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uf,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?$f(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,s)}}function $f(n,e){return n.replace(Wf,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){return JSON.parse(n)}function Y(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=ss(ii(r[0])||""),t=ss(ii(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Bf=function(n){const e=xl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Hf=function(n){const e=xl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function In(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Or(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ri(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ml(r)&&Ml(o)){if(!jt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ml(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function rs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(i<<5|i>>>27)+c+l+h+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function zf(n,e){const t=new jf(n,e);return t.subscribe.bind(t)}class jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Gf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Dr),i.error===void 0&&(i.error=Dr),i.complete===void 0&&(i.complete=Dr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dr(){}function oi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ai=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Kf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new es;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qf(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yf(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yf(n){return n===qt?void 0:n}function Qf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const Xf={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Zf=M.INFO,ep={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},tp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=ep[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xr{constructor(e){this.name=e,this._logLevel=Zf,this._logHandler=tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const np=(n,e)=>e.some(t=>n instanceof t);let Ll,Fl;function sp(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ip(){return Fl||(Fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,Mr=new WeakMap,$l=new WeakMap,Lr=new WeakMap,Fr=new WeakMap;function rp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(wt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ul.set(t,n)}).catch(()=>{}),Fr.set(e,n),e}function op(n){if(Mr.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Mr.set(n,e)}let Ur={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$l.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ap(n){Ur=n(Ur)}function lp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($r(this),e,...t);return $l.set(s,e.sort?e.sort():[e]),wt(s)}:ip().includes(n)?function(...e){return n.apply($r(this),e),wt(Ul.get(this))}:function(...e){return wt(n.apply($r(this),e))}}function cp(n){return typeof n=="function"?lp(n):(n instanceof IDBTransaction&&op(n),np(n,sp())?new Proxy(n,Ur):n)}function wt(n){if(n instanceof IDBRequest)return rp(n);if(Lr.has(n))return Lr.get(n);const e=cp(n);return e!==n&&(Lr.set(n,e),Fr.set(e,n)),e}const $r=n=>Fr.get(n);function up(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=wt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(wt(o.result),l.oldVersion,l.newVersion,wt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hp=["get","getKey","getAll","getAllKeys","count"],dp=["put","add","delete","clear"],Wr=new Map;function Wl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=dp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hp.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Wr.set(e,r),r}ap(n=>({...n,get:(e,t,s)=>Wl(e,t)||n.get(e,t,s),has:(e,t)=>!!Wl(e,t)||n.has(e,t)}));/**
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
 */class fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pp(n){return n.getComponent()?.type==="VERSION"}const Br="@firebase/app",Bl="0.14.5";/**
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
 */const at=new xr("@firebase/app"),_p="@firebase/app-compat",gp="@firebase/analytics-compat",mp="@firebase/analytics",vp="@firebase/app-check-compat",yp="@firebase/app-check",Ep="@firebase/auth",wp="@firebase/auth-compat",Ip="@firebase/database",Cp="@firebase/data-connect",bp="@firebase/database-compat",Tp="@firebase/functions",Sp="@firebase/functions-compat",Rp="@firebase/installations",kp="@firebase/installations-compat",Ap="@firebase/messaging",Np="@firebase/messaging-compat",Pp="@firebase/performance",Op="@firebase/performance-compat",Dp="@firebase/remote-config",xp="@firebase/remote-config-compat",Mp="@firebase/storage",Lp="@firebase/storage-compat",Fp="@firebase/firestore",Up="@firebase/ai",$p="@firebase/firestore-compat",Wp="firebase",Bp="12.5.0";/**
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
 */const Hr="[DEFAULT]",Hp={[Br]:"fire-core",[_p]:"fire-core-compat",[mp]:"fire-analytics",[gp]:"fire-analytics-compat",[yp]:"fire-app-check",[vp]:"fire-app-check-compat",[Ep]:"fire-auth",[wp]:"fire-auth-compat",[Ip]:"fire-rtdb",[Cp]:"fire-data-connect",[bp]:"fire-rtdb-compat",[Tp]:"fire-fn",[Sp]:"fire-fn-compat",[Rp]:"fire-iid",[kp]:"fire-iid-compat",[Ap]:"fire-fcm",[Np]:"fire-fcm-compat",[Pp]:"fire-perf",[Op]:"fire-perf-compat",[Dp]:"fire-rc",[xp]:"fire-rc-compat",[Mp]:"fire-gcs",[Lp]:"fire-gcs-compat",[Fp]:"fire-fst",[$p]:"fire-fst-compat",[Up]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const li=new Map,Vp=new Map,Vr=new Map;function Hl(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(Vr.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,n);for(const t of li.values())Hl(t,n);for(const t of Vp.values())Hl(t,n);return!0}function zr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ke(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},It=new ns("app","Firebase",zp);/**
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
 */class jp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Bp;function Vl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Hr,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(t||(t=kl()),!t)throw It.create("no-options");const r=li.get(i);if(r){if(jt(t,r.options)&&jt(s,r.config))return r;throw It.create("duplicate-app",{appName:i})}const o=new Jf(i);for(const l of Vr.values())o.addComponent(l);const a=new jp(t,s,o);return li.set(i,a),a}function zl(n=Hr){const e=li.get(n);if(!e&&n===Hr&&kl())return Vl();if(!e)throw It.create("no-app",{appName:n});return e}function Ct(n,e,t){let s=Hp[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(o.join(" "));return}bn(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gp="firebase-heartbeat-database",qp=1,os="firebase-heartbeat-store";let jr=null;function jl(){return jr||(jr=up(Gp,qp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw It.create("idb-open",{originalErrorMessage:n.message})})),jr}async function Kp(n){try{const t=(await jl()).transaction(os),s=await t.objectStore(os).get(ql(n));return await t.done,s}catch(e){if(e instanceof Et)at.warn(e.message);else{const t=It.create("idb-get",{originalErrorMessage:e?.message});at.warn(t.message)}}}async function Gl(n,e){try{const s=(await jl()).transaction(os,"readwrite");await s.objectStore(os).put(e,ql(n)),await s.done}catch(t){if(t instanceof Et)at.warn(t.message);else{const s=It.create("idb-set",{originalErrorMessage:t?.message});at.warn(s.message)}}}function ql(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yp=1024,Qp=30;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Qp){const i=e_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){at.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kl(),{heartbeatsToSend:t,unsentEntries:s}=Xp(this._heartbeatsCache.heartbeats),i=si(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return at.warn(e),""}}}function Kl(){return new Date().toISOString().substring(0,10)}function Xp(n,e=Yp){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yl(n){return si(JSON.stringify({version:2,heartbeats:n})).length}function e_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function t_(n){bn(new Gt("platform-logger",e=>new fp(e),"PRIVATE")),bn(new Gt("heartbeat",e=>new Jp(e),"PRIVATE")),Ct(Br,Bl,n),Ct(Br,Bl,"esm2020"),Ct("fire-js","")}t_("");var n_="firebase",s_="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(n_,s_,"app");function Ql(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=Ql,Jl=new ns("auth","Firebase",Ql());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new xr("@firebase/auth");function r_(n,...e){ci.logLevel<=M.WARN&&ci.warn(`Auth (${Tn}): ${n}`,...e)}function ui(n,...e){ci.logLevel<=M.ERROR&&ci.error(`Auth (${Tn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw Gr(n,...e)}function Je(n,...e){return Gr(n,...e)}function Xl(n,e,t){const s={...i_(),[e]:t};return new ns("auth","Firebase",s).create(e,{appName:n.name})}function lt(n){return Xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Jl.create(n,...e)}function E(n,e,...t){if(!n)throw Gr(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ui(e),new Error(e)}function ut(n,e){n||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return typeof self<"u"&&self.location?.href||""}function o_(){return Zl()==="http:"||Zl()==="https:"}function Zl(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o_()||Df()||"connection"in navigator)?navigator.onLine:!0}function l_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=Pr()||Dl()}get(){return a_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],h_=new as(3e4,6e4);function bt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ht(n,e,t,s,i={}){return tc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Cn({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...r};return Of()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&wn(n.emulatorConfig.host)&&(c.credentials="include"),ec.fetch()(await nc(n,n.config.apiHost,t,a),c)})}async function tc(n,e,t){n._canInitEmulator=!1;const s={...c_,...e};try{const i=new f_(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hi(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xl(n,h,c);Fe(n,h)}}catch(i){if(i instanceof Et)throw i;Fe(n,"network-request-failed",{message:String(i)})}}async function ls(n,e,t,s,i={}){const r=await ht(n,e,t,s,i);return"mfaPendingCredential"in r&&Fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function nc(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Kr(n.config,i):`${n.config.apiScheme}://${i}`;return u_.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function d_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class f_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),h_.get())})}}function hi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Je(n,e,s);return i.customData._tokenResponse=t,i}function sc(n){return n!==void 0&&n.enterprise!==void 0}class p_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return d_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function __(n,e){return ht(n,"GET","/v2/recaptchaConfig",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e){return ht(n,"POST","/v1/accounts:delete",e)}async function di(n,e){return ht(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m_(n,e=!1){const t=te(n),s=await t.getIdToken(e),i=Qr(s);E(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:cs(Yr(i.auth_time)),issuedAtTime:cs(Yr(i.iat)),expirationTime:cs(Yr(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Yr(n){return Number(n)*1e3}function Qr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=ii(t);return i?JSON.parse(i):(ui("Failed to decode base64 JWT payload"),null)}catch(i){return ui("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ic(n){const e=Qr(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Et&&v_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function v_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fi(n){const e=n.auth,t=await n.getIdToken(),s=await Sn(n,di(e,{idToken:t}));E(s?.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=i.providerUserInfo?.length?rc(i.providerUserInfo):[],o=w_(n.providerData,r),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!o?.length,c=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Jr(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function E_(n){const e=te(n);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w_(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,e){const t=await tc(n,{},async()=>{const s=Cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await nc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&wn(n.emulatorConfig.host)&&(l.credentials="include"),ec.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function C_(n,e){return ht(n,"POST","/v2/accounts:revokeToken",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ic(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){E(e.length!==0,"internal-error");const t=ic(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await I_(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Rn;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return m_(this,e)}reload(){return E_(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await Sn(this,g_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:f,providerData:p,stsTokenManager:g}=t;E(d&&g,e,"internal-error");const v=Rn.fromJSON(this.name,g);E(typeof d=="string",e,"internal-error"),Tt(s,e.name),Tt(i,e.name),E(typeof u=="boolean",e,"internal-error"),E(typeof f=="boolean",e,"internal-error"),Tt(r,e.name),Tt(o,e.name),Tt(a,e.name),Tt(l,e.name),Tt(c,e.name),Tt(h,e.name);const N=new Ue({uid:d,auth:e,email:i,emailVerified:u,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:v,createdAt:c,lastLoginAt:h});return p&&Array.isArray(p)&&(N.providerData=p.map(m=>({...m}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,t,s=!1){const i=new Rn;i.updateFromServerResponse(t);const r=new Ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await fi(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];E(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?rc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,a=new Rn;a.updateFromIdToken(s);const l=new Ue({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Jr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map;function dt(n){ut(n instanceof Function,"Expected a class definition");let e=oc.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oc.set(n,e),e)}/**
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
 */class ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ac.type="NONE";const lc=ac;/**
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
 */function pi(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,r),this.fullPersistenceKey=pi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await di(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new kn(dt(lc),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||dt(lc);const o=pi(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const u=await di(e,{idToken:h}).catch(()=>{});if(!u)break;d=await Ue._fromGetAccountInfoResponse(e,u,h)}else d=Ue._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new kn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new kn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_c(e))return"Blackberry";if(gc(e))return"Webos";if(hc(e))return"Safari";if((e.includes("chrome/")||dc(e))&&!e.includes("edge/"))return"Chrome";if(pc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function uc(n=de()){return/firefox\//i.test(n)}function hc(n=de()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dc(n=de()){return/crios\//i.test(n)}function fc(n=de()){return/iemobile/i.test(n)}function pc(n=de()){return/android/i.test(n)}function _c(n=de()){return/blackberry/i.test(n)}function gc(n=de()){return/webos/i.test(n)}function Xr(n=de()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function b_(n=de()){return Xr(n)&&!!window.navigator?.standalone}function T_(){return xf()&&document.documentMode===10}function mc(n=de()){return Xr(n)||pc(n)||gc(n)||_c(n)||/windows phone/i.test(n)||fc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,e=[]){let t;switch(n){case"Browser":t=cc(de());break;case"Worker":t=`${cc(de())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${s}`}/**
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
 */class S_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function R_(n,e={}){return ht(n,"GET","/v2/passwordPolicy",bt(n,e))}/**
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
 */const k_=6;class A_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??k_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yc(this),this.idTokenSubscription=new yc(this),this.beforeStateQueue=new S_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await di(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ke(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(lt(this));const t=e?te(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R_(this),t=new A_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await C_(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&r_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Kt(n){return te(n)}class yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=zf(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P_(n){_i=n}function Ec(n){return _i.loadJS(n)}function O_(){return _i.recaptchaEnterpriseScript}function D_(){return _i.gapiScript}function x_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class M_{constructor(){this.enterprise=new L_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class L_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const F_="recaptcha-enterprise",wc="NO_RECAPTCHA";class U_{constructor(e){this.type=F_,this.auth=Kt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{__(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new p_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;sc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(wc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new M_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&sc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=O_();l.length!==0&&(l+=a),Ec(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ic(n,e,t,s=!1,i=!1){const r=new U_(n);let o;if(i)o=wc;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zr(n,e,t,s,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ic(n,e,t,t==="getOobCode");return s(n,r)}else return s(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ic(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e){const t=zr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(jt(r,e??{}))return i;Fe(i,"already-initialized")}return t.initialize({options:e})}function W_(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(dt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function B_(n,e,t){const s=Kt(n);E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Cc(e),{host:o,port:a}=H_(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){E(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),E(jt(c,s.config.emulator)&&jt(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,wn(o)?(Nl(`${r}//${o}${l}`),Ol("Auth",!0)):V_()}function Cc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function H_(n){const e=Cc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bc(o)}}}function bc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function V_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function z_(n,e){return ht(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){return ls(n,"POST","/v1/accounts:signInWithPassword",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return ls(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}async function q_(n,e){return ls(n,"POST","/v1/accounts:signInWithEmailLink",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends eo{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new us(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new us(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zr(e,t,"signInWithPassword",j_);case"emailLink":return G_(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zr(e,s,"signUpPassword",z_);case"emailLink":return q_(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,e){return ls(n,"POST","/v1/accounts:signInWithIdp",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="http://localhost";class Yt extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Yt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return An(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,An(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,An(e,t)}buildRequest(){const e={requestUri:K_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q_(n){const e=is(rs(n)).link,t=e?is(rs(e)).deep_link_id:null,s=is(rs(n)).deep_link_id;return(s?is(rs(s)).link:null)||s||t||e||n}class to{constructor(e){const t=is(rs(e)),s=t.apiKey??null,i=t.oobCode??null,r=Y_(t.mode??null);E(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Q_(e);try{return new to(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=to.parseLink(t);return E(s,"argument-error"),us._fromEmailAndCode(e,s.code,s.tenantId)}}Nn.PROVIDER_ID="password",Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends hs{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rt.credential(t,s)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com",Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends hs{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends hs{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return At.credential(t,s)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com",At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(n,e){return ls(n,"POST","/v1/accounts:signUp",bt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ue._fromIdTokenResponse(e,s,i),o=Sc(s);return new Qt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Sc(s);return new Qt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Sc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Et{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new gi(e,t,s,i)}}function Rc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(n,r,e,s):r})}async function X_(n,e,t=!1){const s=await Sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",s)}/**
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
 */async function Z_(n,e,t=!1){const{auth:s}=n;if(ke(s.app))return Promise.reject(lt(s));const i="reauthenticate";try{const r=await Sn(n,Rc(s,i,e,n),t);E(r.idToken,s,"internal-error");const o=Qr(r.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Qt._forOperation(n,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&Fe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(n,e,t=!1){if(ke(n.app))return Promise.reject(lt(n));const s="signIn",i=await Rc(n,s,e),r=await Qt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function eg(n,e){return kc(Kt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(n){const e=Kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tg(n,e,t){if(ke(n.app))return Promise.reject(lt(n));const s=Kt(n),o=await Zr(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ac(n),l}),a=await Qt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function ng(n,e,t){return ke(n.app)?Promise.reject(lt(n)):eg(te(n),Nn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ac(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){return ht(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=te(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Sn(s,sg(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function rg(n,e,t,s){return te(n).onIdTokenChanged(e,t,s)}function og(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function ag(n,e,t,s){return te(n).onAuthStateChanged(e,t,s)}function lg(n){return te(n).signOut()}const mi="__sak";/**
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
 */class Nc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1e3,ug=10;class Pc extends Nc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);T_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ug):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pc.type="LOCAL";const hg=Pc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Nc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oc.type="SESSION";const Dc=Oc;/**
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
 */function dg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new vi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await dg(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=no("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function pg(n){Xe().location.href=n}/**
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
 */function xc(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function _g(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gg(){return navigator?.serviceWorker?.controller||null}function mg(){return xc()?self:null}/**
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
 */const Mc="firebaseLocalStorageDb",vg=1,yi="firebaseLocalStorage",Lc="fbase_key";class ds{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ei(n,e){return n.transaction([yi],e?"readwrite":"readonly").objectStore(yi)}function yg(){const n=indexedDB.deleteDatabase(Mc);return new ds(n).toPromise()}function so(){const n=indexedDB.open(Mc,vg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(yi,{keyPath:Lc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(yi)?e(s):(s.close(),await yg(),e(await so()))})})}async function Fc(n,e,t){const s=Ei(n,!0).put({[Lc]:e,value:t});return new ds(s).toPromise()}async function Eg(n,e){const t=Ei(n,!1).get(e),s=await new ds(t).toPromise();return s===void 0?null:s.value}function Uc(n,e){const t=Ei(n,!0).delete(e);return new ds(t).toPromise()}const wg=800,Ig=3;class $c{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Ig)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vi._getInstance(mg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await _g(),!this.activeServiceWorker)return;this.sender=new fg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await Fc(e,mi,"1"),await Uc(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Eg(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ei(i,!1).getAll();return new ds(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$c.type="LOCAL";const Cg=$c;new as(3e4,6e4);/**
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
 */function bg(n,e){return e?dt(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class io extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,t){return An(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tg(n){return kc(n.auth,new io(n),n.bypassAuthState)}function Sg(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Z_(t,new io(n),n.bypassAuthState)}async function Rg(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),X_(t,new io(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tg;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return Sg;default:Fe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new as(2e3,1e4);class Pn extends Wc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kg.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="pendingRedirect",wi=new Map;class Ng extends Wc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const s=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(n,e){const t=xg(e),s=Dg(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Og(n,e){wi.set(n._key(),e)}function Dg(n){return dt(n._redirectPersistence)}function xg(n){return pi(Ag,n.config.apiKey,n.name)}async function Mg(n,e,t=!1){if(ke(n.app))return Promise.reject(lt(n));const s=Kt(n),i=bg(s,e),o=await new Ng(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=600*1e3;class Fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ug(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Hc(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bc(e))}saveEventToCache(e){this.cachedEventUids.add(Bc(e)),this.lastProcessedEventTime=Date.now()}}function Bc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ug(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e={}){return ht(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bg=/^https?/;async function Hg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $g(n);for(const t of e)try{if(Vg(t))return}catch{}Fe(n,"unauthorized-domain")}function Vg(n){const e=qr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Bg.test(t))return!1;if(Wg.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const zg=new as(3e4,6e4);function Vc(){const n=Xe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jg(n){return new Promise((e,t)=>{function s(){Vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vc(),t(Je(n,"network-request-failed"))},timeout:zg.get()})}if(Xe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Xe().gapi?.load)s();else{const i=x_("iframefcb");return Xe()[i]=()=>{gapi.load?s():t(Je(n,"network-request-failed"))},Ec(`${D_()}?onload=${i}`).catch(r=>t(r))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function Gg(n){return Ii=Ii||jg(n),Ii}/**
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
 */const qg=new as(5e3,15e3),Kg="__/auth/iframe",Yg="emulator/auth/iframe",Qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xg(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kr(e,Yg):`https://${n.config.authDomain}/${Kg}`,s={apiKey:e.apiKey,appName:n.name,v:Tn},i=Jg.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Cn(s).slice(1)}`}async function Zg(n){const e=await Gg(n),t=Xe().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:Xg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),a=Xe().setTimeout(()=>{r(o)},qg.get());function l(){Xe().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const em={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tm=500,nm=600,sm="_blank",im="http://localhost";class zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rm(n,e,t,s=tm,i=nm){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...em,width:s.toString(),height:i.toString(),top:r,left:o},c=de().toLowerCase();t&&(a=dc(c)?sm:t),uc(c)&&(e=e||im,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[f,p])=>`${u}${f}=${p},`,"");if(b_(c)&&a!=="_self")return om(e||"",a),new zc(null);const d=window.open(e||"",a,h);E(d,n,"popup-blocked");try{d.focus()}catch{}return new zc(d)}function om(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const am="__/auth/handler",lm="emulator/auth/handler",cm=encodeURIComponent("fac");async function jc(n,e,t,s,i,r){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Tn,eventId:i};if(e instanceof Tc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Or(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof hs){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${cm}=${encodeURIComponent(l)}`:"";return`${um(n)}?${Cn(a).slice(1)}${c}`}function um({config:n}){return n.emulator?Kr(n,lm):`https://${n.authDomain}/${am}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="webStorageSupport";class hm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dc,this._completeRedirectFn=Mg,this._overrideRedirectResult=Og}async _openPopup(e,t,s,i){ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await jc(e,t,s,qr(),i);return rm(e,r,no())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await jc(e,t,s,qr(),i);return pg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Zg(e),s=new Fg(e);return t.register("authEvent",i=>(E(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ro,{type:ro},i=>{const r=i?.[0]?.[ro];r!==void 0&&t(!!r),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mc()||hc()||Xr()}}const dm=hm;var Gc="@firebase/auth",qc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _m(n){bn(new Gt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vc(n)},c=new N_(s,i,r,l);return W_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bn(new Gt("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(s=>new fm(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Gc,qc,pm(n)),Ct(Gc,qc,"esm2020")}/**
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
 */const gm=Al("authIdTokenMaxAge")||300;let Kc=null;const mm=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>gm)return;const i=t?.token;Kc!==i&&(Kc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vm(n=zl()){const e=zr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$_(n,{popupRedirectResolver:dm,persistence:[Cg,hg,Dc]}),s=Al("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=mm(r.toString());og(t,o,()=>o(t.currentUser)),rg(t,a=>o(a))}}const i=Rl("auth");return i&&B_(t,`http://${i}`),t}function ym(){return document.getElementsByTagName("head")?.[0]??document}P_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Je("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",ym().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),_m("Browser");const Yc="@firebase/database",Qc="1.1.0";/**
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
 */let Jc="";function Em(n){Jc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ss(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wm(e)}}catch{}return new Im},Jt=Xc("localStorage"),Cm=Xc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new xr("@firebase/database"),bm=(function(){let n=1;return function(){return n++}})(),Zc=function(n){const e=qf(n),t=new Vf;t.update(e);const s=t.digest();return Ar.encodeByteArray(s)},fs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fs.apply(null,s):typeof s=="object"?e+=Y(s):e+=s,e+=" "}return e};let ps=null,eu=!0;const Tm=function(n,e){_(!0,"Can't turn on custom loggers persistently."),On.logLevel=M.VERBOSE,ps=On.log.bind(On)},ne=function(...n){if(eu===!0&&(eu=!1,ps===null&&Cm.get("logging_enabled")===!0&&Tm()),ps){const e=fs.apply(null,n);ps(e)}},_s=function(n){return function(...e){ne(n,...e)}},oo=function(...n){const e="FIREBASE INTERNAL ERROR: "+fs(...n);On.error(e)},ft=function(...n){const e=`FIREBASE FATAL ERROR: ${fs(...n)}`;throw On.error(e),new Error(e)},fe=function(...n){const e="FIREBASE WARNING: "+fs(...n);On.warn(e)},Sm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ao=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Rm=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dn="[MIN_NAME]",Xt="[MAX_NAME]",Zt=function(n,e){if(n===e)return 0;if(n===Dn||e===Xt)return-1;if(e===Dn||n===Xt)return 1;{const t=su(n),s=su(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},km=function(n,e){return n===e?0:n<e?-1:1},gs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Y(e))},lo=function(n){if(typeof n!="object"||n===null)return Y(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Y(e[s]),t+=":",t+=lo(n[e[s]]);return t+="}",t},tu=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const nu=function(n){_(!ao(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Am=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pm(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Om=new RegExp("^-?(0*)\\d{1,10}$"),Dm=-2147483648,xm=2147483647,su=function(n){if(Om.test(n)){const e=Number(n);if(e>=Dm&&e<=xm)return e}return null},xn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Lm{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ke(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fe(e)}}class Ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="5",iu="v",ru="s",ou="r",au="f",lu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cu="ls",uu="p",uo="ac",hu="websocket",du="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Um(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pu(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===hu)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===du)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Um(n)&&(t.ns=n.namespace);const i=[];return se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.counters_={}}incrementCounter(e,t=1){Qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return If(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={},fo={};function po(n){const e=n.toString();return ho[e]||(ho[e]=new $m),ho[e]}function Wm(n,e){const t=n.toString();return fo[t]||(fo[t]=e()),fo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="start",Hm="close",Vm="pLPCommand",zm="pRTLPCB",gu="id",mu="pw",vu="ser",jm="cb",Gm="seg",qm="ts",Km="d",Ym="dframe",yu=1870,Eu=30,Qm=yu-Eu,Jm=25e3,Xm=3e4;class Mn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=po(t),this.urlFn=l=>(this.appCheckToken&&(l[uo]=this.appCheckToken),pu(t,du,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xm)),Rm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _o((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_u)this.id=a,this.password=l;else if(o===Hm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_u]="t",s[vu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[iu]=co,this.transportSessionId&&(s[ru]=this.transportSessionId),this.lastSessionId&&(s[cu]=this.lastSessionId),this.applicationId&&(s[uu]=this.applicationId),this.appCheckToken&&(s[uo]=this.appCheckToken),typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(s[ou]=au);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mn.forceAllow_=!0}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){return Mn.forceAllow_?!0:!Mn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Am()&&!Nm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Tl(t),i=tu(s,Qm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ym]="t",s[gu]=e,s[mu]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Y(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _o{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bm(),window[Vm+this.uniqueCallbackIdentifier]=e,window[zm+this.uniqueCallbackIdentifier]=t,this.myIFrame=_o.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ne("frame writing exception"),a.stack&&ne(a.stack),ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gu]=this.myID,e[mu]=this.myPW,e[vu]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Eu+s.length<=yu;){const o=this.pendingSegs.shift();s=s+"&"+Gm+i+"="+o.seg+"&"+qm+i+"="+o.ts+"&"+Km+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Jm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=16384,ev=45e3;let bi=null;typeof MozWebSocket<"u"?bi=MozWebSocket:typeof WebSocket<"u"&&(bi=WebSocket);class $e{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=po(t),this.connURL=$e.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[iu]=co,typeof location<"u"&&location.hostname&&lu.test(location.hostname)&&(o[ou]=au),t&&(o[ru]=t),s&&(o[cu]=s),i&&(o[uo]=i),r&&(o[uu]=r),pu(e,hu,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let s;Mf(),this.mySock=new bi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bi!==null&&!$e.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ss(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=tu(t,Zm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ev))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2,$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static get ALL_TRANSPORTS(){return[Mn,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=$e&&$e.isAvailable();let s=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of vs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=6e4,nv=5e3,sv=10*1024,iv=100*1024,go="t",wu="d",rv="s",Iu="r",ov="e",Cu="o",bu="a",Tu="n",Su="p",av="h";class lv{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new vs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(go in e){const t=e[go];t===bu?this.upgradeIfSecondaryHealthy_():t===Iu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Cu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gs("t",e),s=gs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Su,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gs("t",e),s=gs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gs(go,e);if(wu in e){const s=e[wu];if(t===av){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rv?this.onConnectionShutdown_(s):t===Iu?this.onReset_(s):t===ov?oo("Server Error: "+s):t===Cu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oo("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),co!==s&&fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Su,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends ku{static getInstance(){return new Ti}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=32,Nu=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new L("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Nt(n){return n.pieces_.length-n.pieceNum_}function F(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function mo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function cv(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ys(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pu(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function j(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof L)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new L(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function pe(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return pe(F(n),F(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function uv(n,e){const t=ys(n,0),s=ys(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Zt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function vo(n,e){if(Nt(n)!==Nt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ae(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Nt(n)>Nt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class hv{constructor(e,t){this.errorPrefix_=t,this.parts_=ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ai(this.parts_[s]);Ou(this)}}function dv(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ai(e),Ou(n)}function fv(n){const e=n.parts_.pop();n.byteLength_-=ai(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ou(n){if(n.byteLength_>Nu)throw new Error(n.errorPrefix_+"has a key path longer than "+Nu+" bytes ("+n.byteLength_+").");if(n.parts_.length>Au)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Au+") or object contains a cycle "+en(n))}function en(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends ku{static getInstance(){return new yo}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=1e3,pv=300*1e3,Du=30*1e3,_v=1.3,gv=3e4,mv="server_kill",xu=3;class pt extends Ru{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pt.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Es,this.maxReconnectDelay_=pv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Y(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new es,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;pt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Qe(e,"w")){const s=In(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Du)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bf(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):oo("Unrecognized action received from server: "+Y(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gv&&(this.reconnectDelay_=Es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_v)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new lv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{fe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(mv)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&fe(d),l())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Or(this.interruptReasons_)&&(this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>lo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new L(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xu&&(this.reconnectDelay_=Du,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Jc.replace(/\./g,"-")]=1,Pr()?e["framework.cordova"]=1:Dl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ti.getInstance().currentlyOnline();return Or(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0,pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(Dn,e),i=new b(Dn,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class Mu extends Si{static get __EMPTY_NODE(){return Ri}static set __EMPTY_NODE(e){Ri=e}compare(e,t){return Zt(e.name,t.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(Xt,Ri)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Ri)}toString(){return".key"}}const Ln=new Mu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??X.RED,this.left=i??we.EMPTY_NODE,this.right=r??we.EMPTY_NODE}copy(e,t,s,i,r){return new X(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return we.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0,X.BLACK=!1;class vv{copy(e,t,s,i,r){return this}insert(e,t,s){return new X(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class we{constructor(e,t=we.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new we(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new we(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ki(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ki(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ki(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ki(this.root_,null,this.comparator_,!0,e)}}we.EMPTY_NODE=new vv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n,e){return Zt(n.name,e.name)}function Eo(n,e){return Zt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;function Ev(n){wo=n}const Lu=function(n){return typeof n=="number"?"number:"+nu(n):"string:"+n},Fu=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qe(e,".sv"),"Priority must be a string or number.")}else _(n===wo||n.isEmpty(),"priority of unexpected type.");_(n===wo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;class Z{static set __childrenNodeConstructor(e){Uu=e}static get __childrenNodeConstructor(){return Uu}constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:C(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||Nt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(F(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=nu(this.value_):e+=this.value_,this.lazyHash_=Zc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Z.VALUE_TYPE_ORDER.indexOf(t),r=Z.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u,Wu;function wv(n){$u=n}function Iv(n){Wu=n}class Cv extends Si{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Zt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Xt,new Z("[PRIORITY-POST]",Wu))}makePost(e,t){const s=$u(e);return new b(t,new Z("[PRIORITY-POST]",s))}toString(){return".priority"}}const G=new Cv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=Math.log(2);class Tv{constructor(e){const t=r=>parseInt(Math.log(r)/bv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ai=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new X(u,d.node,X.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),g=i(f+1,c);return d=n[f],u=t?t(d):d,new X(u,d.node,X.BLACK,p,g)}},r=function(l){let c=null,h=null,d=n.length;const u=function(p,g){const v=d-p,N=d;d-=p;const m=i(v+1,N),I=n[v],P=t?t(I):I;f(new X(P,I.node,g,null,m))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?u(v,X.BLACK):(u(v,X.BLACK),u(v,X.RED))}return h},o=new Tv(n.length),a=r(o);return new we(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;const Fn={};class _t{static get Default(){return _(Fn&&G,"ChildrenNode.ts has not been loaded"),Io=Io||new _t({".priority":Fn},{".priority":G}),Io}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=In(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof we?t:null}hasIndex(e){return Qe(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ai(s,e.getCompare()):a=Fn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new _t(h,c)}addToIndexes(e,t){const s=ri(this.indexes_,(i,r)=>{const o=In(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===Fn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(b.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ai(a,o.getCompare())}else return Fn;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new b(e.name,a))),l.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,t){const s=ri(this.indexes_,i=>{if(i===Fn)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class w{static get EMPTY_NODE(){return ws||(ws=new w(new we(Eo),null,_t.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fu(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ws:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(F(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ws:this.priorityNode_;return new w(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{_(C(e)!==".priority"||Nt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(F(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(G,(o,a)=>{t[o]=a.val(e),s++,r&&w.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lu(this.getPriority().val())+":"),this.forEachChild(G,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Zc(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===Ln||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(G),i=t.getIterator(G);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ln?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sv extends w{constructor(){super(new we(Eo),w.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const Is=new Sv;Object.defineProperties(b,{MIN:{value:new b(Dn,w.EMPTY_NODE)},MAX:{value:new b(Xt,Is)}}),Mu.__EMPTY_NODE=w.EMPTY_NODE,Z.__childrenNodeConstructor=w,Ev(Is),Iv(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=!0;function Q(n,e=null){if(n===null)return w.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,Q(e))}if(!(n instanceof Array)&&Rv){const t=[];let s=!1;if(se(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Q(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new b(o,l)))}}),t.length===0)return w.EMPTY_NODE;const r=Ai(t,yv,o=>o.name,Eo);if(s){const o=Ai(t,G.getCompare());return new w(r,Q(e),new _t({".priority":o},{".priority":G}))}else return new w(r,Q(e),_t.Default)}else{let t=w.EMPTY_NODE;return se(n,(s,i)=>{if(Qe(n,s)&&s.substring(0,1)!=="."){const r=Q(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Q(e))}}wv(Q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Si{constructor(e){super(),this.indexPath_=e,_(!S(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Zt(e.name,t.name):r}makePost(e,t){const s=Q(e),i=w.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,Is);return new b(Xt,e)}toString(){return ys(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Si{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Zt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=Q(e);return new b(t,s)}toString(){return".value"}}const Nv=new Av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){return{type:"value",snapshotNode:n}}function Un(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Pv(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Cs(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Un(t,s)):o.trackChildChange(bs(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(G,(i,r)=>{t.hasChild(i)||s.trackChildChange(Cs(i,r))}),t.isLeafNode()||t.forEachChild(G,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(bs(i,r,o))}else s.trackChildChange(Un(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=w.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(w.EMPTY_NODE);const r=this;return t.forEachChild(G,(o,a)=>{r.matches(new b(o,a))||(i=i.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=w.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new b(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(h&&!s.isEmpty()&&f>=0)return r?.trackChildChange(bs(t,s,d)),a.updateImmediateChild(t,s);{r?.trackChildChange(Cs(t,d));const g=a.updateImmediateChild(t,w.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(Un(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Cs(c.name,c.node)),r.trackChildChange(Un(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=G}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===G}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dv(n){return n.loadsAllData()?new Co(n.getIndex()):n.hasLimit()?new Ov(n):new Ts(n)}function Hu(n){const e={};if(n.isDefault())return e;let t;if(n.index_===G?t="$priority":n.index_===Nv?t="$value":n.index_===Ln?t="$key":(_(n.index_ instanceof kv,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Y(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Y(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Y(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Y(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Y(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Vu(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==G&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ru{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=_s("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ni.getListenId_(e,s),a={};this.listens_[o]=a;const l=Hu(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),In(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const s=Ni.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Hu(e._queryParams),s=e._path.toString(),i=new es;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ss(a.responseText)}catch{fe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&fe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return{value:null,children:new Map}}function zu(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,Pi());const i=n.children.get(s);e=F(e),zu(i,e,t)}}function To(n,e,t){n.value!==null?t(e,n.value):Mv(n,(s,i)=>{const r=new L(e.toString()+"/"+s);To(i,r,t)})}function Mv(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=10*1e3,Fv=30*1e3,Uv=300*1e3;class $v{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lv(e);const s=ju+(Fv-ju)*Math.random();ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;se(e,(i,r)=>{r>0&&Qe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(We||(We={}));function So(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ro(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ko(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=We.ACK_USER_WRITE,this.source=So()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new Oi(k(),t,this.revert)}}else return _(C(this.path)===e,"operationForChild called for unrelated child."),new Oi(F(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.source=e,this.path=t,this.type=We.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new Ss(this.source,k()):new Ss(this.source,F(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=We.OVERWRITE}operationForChild(e){return S(this.path)?new tn(this.source,k(),this.snap.getImmediateChild(e)):new tn(this.source,F(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=We.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new tn(this.source,k(),t.value):new $n(this.source,k(),t)}else return _(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $n(this.source,F(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bv(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pv(o.childName,o.snapshotNode))}),Rs(n,i,"child_removed",e,s,t),Rs(n,i,"child_added",e,s,t),Rs(n,i,"child_moved",r,s,t),Rs(n,i,"child_changed",e,s,t),Rs(n,i,"value",e,s,t),i}function Rs(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Vv(n,a,l)),o.forEach(a=>{const l=Hv(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Hv(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Vv(n,e,t){if(e.childName==null||t.childName==null)throw En("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n,e){return{eventCache:n,serverCache:e}}function ks(n,e,t,s){return Di(new Pt(e,t,s),n.serverCache)}function Gu(n,e,t,s){return Di(n.eventCache,new Pt(e,t,s))}function xi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function nn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;const zv=()=>(Ao||(Ao=new we(km)),Ao);class U{static fromObject(e){let t=new U(null);return se(e,(s,i)=>{t=t.set(new L(s),i)}),t}constructor(e,t=zv()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(S(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(F(e),t);return r!=null?{path:j(new L(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(F(e)):new U(null)}}set(e,t){if(S(e))return new U(t,this.children);{const s=C(e),r=(this.children.get(s)||new U(null)).set(F(e),t),o=this.children.insert(s,r);return new U(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(F(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(F(e)):null}}setTree(e,t){if(S(e))return t;{const s=C(e),r=(this.children.get(s)||new U(null)).setTree(F(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new U(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(j(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(S(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(F(e),j(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,s){if(S(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(F(e),j(t,i),s):new U(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(j(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.writeTree_=e}static empty(){return new Be(new U(null))}}function As(n,e,t){if(S(e))return new Be(new U(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=pe(i,e);return r=r.updateChild(o,t),new Be(n.writeTree_.set(i,r))}else{const i=new U(t),r=n.writeTree_.setTree(e,i);return new Be(r)}}}function No(n,e,t){let s=n;return se(t,(i,r)=>{s=As(s,j(e,i),r)}),s}function qu(n,e){if(S(e))return Be.empty();{const t=n.writeTree_.setTree(e,new U(null));return new Be(t)}}function Po(n,e){return sn(n,e)!=null}function sn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(pe(t.path,e)):null}function Ku(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(G,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function Ot(n,e){if(S(e))return n;{const t=sn(n,e);return t!=null?new Be(new U(t)):new Be(n.writeTree_.subtree(e))}}function Oo(n){return n.writeTree_.isEmpty()}function Wn(n,e){return Yu(k(),n.writeTree_,e)}function Yu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Yu(j(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(j(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,e){return eh(e,n)}function jv(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=As(n.visibleWrites,e,t)),n.lastWriteId=s}function Gv(n,e,t,s){_(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=No(n.visibleWrites,e,t),n.lastWriteId=s}function qv(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Kv(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Yv(a,s.path)?i=!1:Ae(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Qv(n),!0;if(s.snap)n.visibleWrites=qu(n.visibleWrites,s.path);else{const a=s.children;se(a,l=>{n.visibleWrites=qu(n.visibleWrites,j(s.path,l))})}return!0}else return!1}function Yv(n,e){if(n.snap)return Ae(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ae(j(n.path,t),e))return!0;return!1}function Qv(n){n.visibleWrites=Qu(n.allWrites,Jv,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jv(n){return n.visible}function Qu(n,e,t){let s=Be.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Ae(t,o)?(a=pe(t,o),s=As(s,a,r.snap)):Ae(o,t)&&(a=pe(o,t),s=As(s,k(),r.snap.getChild(a)));else if(r.children){if(Ae(t,o))a=pe(t,o),s=No(s,a,r.children);else if(Ae(o,t))if(a=pe(o,t),S(a))s=No(s,k(),r.children);else{const l=In(r.children,C(a));if(l){const c=l.getChild(F(a));s=As(s,k(),c)}}}else throw En("WriteRecord should have .snap or .children")}}return s}function Ju(n,e,t,s,i){if(!s&&!i){const r=sn(n.visibleWrites,e);if(r!=null)return r;{const o=Ot(n.visibleWrites,e);if(Oo(o))return t;if(t==null&&!Po(o,k()))return null;{const a=t||w.EMPTY_NODE;return Wn(o,a)}}}else{const r=Ot(n.visibleWrites,e);if(!i&&Oo(r))return t;if(!i&&t==null&&!Po(r,k()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ae(c.path,e)||Ae(e,c.path))},a=Qu(n.allWrites,o,e),l=t||w.EMPTY_NODE;return Wn(a,l)}}}function Xv(n,e,t){let s=w.EMPTY_NODE;const i=sn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(G,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ot(n.visibleWrites,e);return t.forEachChild(G,(o,a)=>{const l=Wn(Ot(r,new L(o)),a);s=s.updateImmediateChild(o,l)}),Ku(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(n.visibleWrites,e);return Ku(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Zv(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(Po(n.visibleWrites,r))return null;{const o=Ot(n.visibleWrites,r);return Oo(o)?i.getChild(t):Wn(o,i.getChild(t))}}function ey(n,e,t,s){const i=j(e,t),r=sn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ot(n.visibleWrites,i);return Wn(o,s.getNode().getImmediateChild(t))}else return null}function ty(n,e){return sn(n.visibleWrites,e)}function ny(n,e,t,s,i,r,o){let a;const l=Ot(n.visibleWrites,e),c=sn(l,k());if(c!=null)a=c;else if(t!=null)a=Wn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=u.getNext();for(;f&&h.length<i;)d(f,s)!==0&&h.push(f),f=u.getNext();return h}else return[]}function sy(){return{visibleWrites:Be.empty(),allWrites:[],lastWriteId:-1}}function Li(n,e,t,s){return Ju(n.writeTree,n.treePath,e,t,s)}function Do(n,e){return Xv(n.writeTree,n.treePath,e)}function Xu(n,e,t,s){return Zv(n.writeTree,n.treePath,e,t,s)}function Fi(n,e){return ty(n.writeTree,j(n.treePath,e))}function iy(n,e,t,s,i,r){return ny(n.writeTree,n.treePath,e,t,s,i,r)}function xo(n,e,t){return ey(n.writeTree,n.treePath,e,t)}function Zu(n,e){return eh(j(n.treePath,e),n.writeTree)}function eh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,bs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cs(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Un(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,bs(s,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const th=new oy;class Mo{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xo(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=iy(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){return{filter:n}}function ly(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cy(n,e,t,s,i){const r=new ry;let o,a;if(t.type===We.OVERWRITE){const c=t;c.source.fromUser?o=Lo(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!S(c.path),o=Ui(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===We.MERGE){const c=t;c.source.fromUser?o=hy(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Fo(n,e,c.path,c.children,s,i,a,r))}else if(t.type===We.ACK_USER_WRITE){const c=t;c.revert?o=py(n,e,c.path,s,i,r):o=dy(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===We.LISTEN_COMPLETE)o=fy(n,e,t.path,s,r);else throw En("Unknown operation type: "+t.type);const l=r.getChanges();return uy(e,o,l),{viewCache:o,changes:l}}function uy(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xi(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Bu(xi(e)))}}function nh(n,e,t,s,i,r){const o=e.eventCache;if(Fi(s,t)!=null)return e;{let a,l;if(S(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),h=c instanceof w?c:w.EMPTY_NODE,d=Do(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Li(s,nn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){_(Nt(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Xu(s,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=F(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Xu(s,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=xo(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,i,r):a=o.getNode()}}return ks(e,a,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function Ui(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(S(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=C(t);if(!l.isCompleteForPath(t)&&Nt(t)>1)return e;const p=F(t),v=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),v):c=h.updateChild(l.getNode(),f,v,p,th,null)}const d=Gu(e,c,l.isFullyInitialized()||S(t),h.filtersNodes()),u=new Mo(i,d,r);return nh(n,d,t,i,u,a)}function Lo(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Mo(i,e,r);if(S(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ks(e,c,!0,n.filter.filtersNodes());else{const d=C(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=ks(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=F(t),f=a.getNode().getImmediateChild(d);let p;if(S(u))p=s;else{const g=h.getCompleteChild(d);g!=null?mo(u)===".priority"&&g.getChild(Pu(u)).isEmpty()?p=g:p=g.updateChild(u,s):p=w.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),d,p,u,h,o);l=ks(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function sh(n,e){return n.eventCache.isCompleteForChild(e)}function hy(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=j(t,l);sh(e,C(h))&&(a=Lo(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=j(t,l);sh(e,C(h))||(a=Lo(n,a,h,c,i,r,o))}),a}function ih(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Fo(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;S(t)?c=s:c=new U(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=ih(n,f,u);l=Ui(n,l,new L(d),p,i,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=ih(n,p,u);l=Ui(n,l,new L(d),g,i,r,o,a)}}),l}function dy(n,e,t,s,i,r,o){if(Fi(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(S(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ui(n,e,t,l.getNode().getChild(t),i,r,a,o);if(S(t)){let c=new U(null);return l.getNode().forEachChild(Ln,(h,d)=>{c=c.set(new L(h),d)}),Fo(n,e,t,c,i,r,a,o)}else return e}else{let c=new U(null);return s.foreach((h,d)=>{const u=j(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),Fo(n,e,t,c,i,r,a,o)}}function fy(n,e,t,s,i){const r=e.serverCache,o=Gu(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return nh(n,o,t,s,th,i)}function py(n,e,t,s,i,r){let o;if(Fi(s,t)!=null)return e;{const a=new Mo(s,e,i),l=e.eventCache.getNode();let c;if(S(t)||C(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Li(s,nn(e));else{const d=e.serverCache.getNode();_(d instanceof w,"serverChildren would be complete if leaf node"),h=Do(s,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=C(t);let d=xo(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,F(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,w.EMPTY_NODE,F(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Li(s,nn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fi(s,k())!=null,ks(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=Dv(s);this.processor_=ay(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(w.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(w.EMPTY_NODE,a.getNode(),null),h=new Pt(l,o.isFullyInitialized(),i.filtersNodes()),d=new Pt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Di(d,h),this.eventGenerator_=new Wv(this.query_)}get query(){return this.query_}}function gy(n){return n.viewCache_.serverCache.getNode()}function my(n){return xi(n.viewCache_)}function vy(n,e){const t=nn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function rh(n){return n.eventRegistrations_.length===0}function yy(n,e){n.eventRegistrations_.push(e)}function oh(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ah(n,e,t,s){e.type===We.MERGE&&e.source.queryId!==null&&(_(nn(n.viewCache_),"We should always have a full cache before handling merges"),_(xi(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=cy(n.processor_,i,e,t,s);return ly(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,lh(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ey(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(G,(r,o)=>{s.push(Un(r,o))}),t.isFullyInitialized()&&s.push(Bu(t.getNode())),lh(n,s,t.getNode(),e)}function lh(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Bv(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class ch{constructor(){this.views=new Map}}function wy(n){_(!$i,"__referenceConstructor has already been defined"),$i=n}function Iy(){return _($i,"Reference.ts has not been loaded"),$i}function Cy(n){return n.views.size===0}function Uo(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),ah(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ah(o,e,t,s));return r}}function uh(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Li(t,i?s:null),l=!1;a?l=!0:s instanceof w?(a=Do(t,s),l=!1):(a=w.EMPTY_NODE,l=!1);const c=Di(new Pt(a,l,!1),new Pt(s,i,!1));return new _y(e,c)}return o}function by(n,e,t,s,i,r){const o=uh(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),yy(o,t),Ey(o,t)}function Ty(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=xt(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(oh(c,t,s)),rh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(oh(l,t,s)),rh(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!xt(n)&&r.push(new(Iy())(e._repo,e._path)),{removed:r,events:o}}function hh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Dt(n,e){let t=null;for(const s of n.views.values())t=t||vy(s,e);return t}function dh(n,e){if(e._queryParams.loadsAllData())return Wi(n);{const s=e._queryIdentifier;return n.views.get(s)}}function fh(n,e){return dh(n,e)!=null}function xt(n){return Wi(n)!=null}function Wi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;function Sy(n){_(!Bi,"__referenceConstructor has already been defined"),Bi=n}function Ry(){return _(Bi,"Reference.ts has not been loaded"),Bi}let ky=1;class ph{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=sy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _h(n,e,t,s,i){return jv(n.pendingWriteTree_,e,t,s,i),i?Bn(n,new tn(So(),e,t)):[]}function Ay(n,e,t,s){Gv(n.pendingWriteTree_,e,t,s);const i=U.fromObject(t);return Bn(n,new $n(So(),e,i))}function Mt(n,e,t=!1){const s=qv(n.pendingWriteTree_,e);if(Kv(n.pendingWriteTree_,e)){let r=new U(null);return s.snap!=null?r=r.set(k(),!0):se(s.children,o=>{r=r.set(new L(o),!0)}),Bn(n,new Oi(s.path,r,t))}else return[]}function Ns(n,e,t){return Bn(n,new tn(Ro(),e,t))}function Ny(n,e,t){const s=U.fromObject(t);return Bn(n,new $n(Ro(),e,s))}function Py(n,e){return Bn(n,new Ss(Ro(),e))}function Oy(n,e,t){const s=Bo(n,t);if(s){const i=Ho(s),r=i.path,o=i.queryId,a=pe(r,e),l=new Ss(ko(o),a);return Vo(n,r,l)}else return[]}function Hi(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||fh(o,e))){const l=Ty(o,e,t,s);Cy(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,f)=>xt(f));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=My(u);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,N=yh(n,g);n.listenProvider_.startListening(Os(v),Ps(n,v),N.hashFn,N.onComplete)}}}!d&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Os(e),null):c.forEach(u=>{const f=n.queryToTagMap.get(Vi(u));n.listenProvider_.stopListening(Os(u),f)}))}Ly(n,c)}return a}function gh(n,e,t,s){const i=Bo(n,s);if(i!=null){const r=Ho(i),o=r.path,a=r.queryId,l=pe(o,e),c=new tn(ko(a),l,t);return Vo(n,o,c)}else return[]}function Dy(n,e,t,s){const i=Bo(n,s);if(i){const r=Ho(i),o=r.path,a=r.queryId,l=pe(o,e),c=U.fromObject(t),h=new $n(ko(a),l,c);return Vo(n,o,h)}else return[]}function $o(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,f)=>{const p=pe(u,i);r=r||Dt(f,p),o=o||xt(f)});let a=n.syncPointTree_.get(i);a?(o=o||xt(a),r=r||Dt(a,k())):(a=new ch,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=w.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Dt(p,k());g&&(r=r.updateImmediateChild(f,g))}));const c=fh(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Vi(e);_(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=Fy();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const h=Mi(n.pendingWriteTree_,i);let d=by(a,e,t,h,r,l);if(!c&&!o&&!s){const u=dh(a,e);d=d.concat(Uy(n,e,u))}return d}function Wo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=pe(o,e),c=Dt(a,l);if(c)return c});return Ju(i,e,r,t,!0)}function xy(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const d=pe(c,t);s=s||Dt(h,d)});let i=n.syncPointTree_.get(t);i?s=s||Dt(i,k()):(i=new ch,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Pt(s,!0,!1):null,a=Mi(n.pendingWriteTree_,e._path),l=uh(i,e,a,r?o.getNode():w.EMPTY_NODE,r);return my(l)}function Bn(n,e){return mh(e,n.syncPointTree_,null,Mi(n.pendingWriteTree_,k()))}function mh(n,e,t,s){if(S(n.path))return vh(n,e,t,s);{const i=e.get(k());t==null&&i!=null&&(t=Dt(i,k()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Zu(s,o);r=r.concat(mh(a,l,c,h))}return i&&(r=r.concat(Uo(i,n,s,t))),r}}function vh(n,e,t,s){const i=e.get(k());t==null&&i!=null&&(t=Dt(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Zu(s,o),h=n.operationForChild(o);h&&(r=r.concat(vh(h,a,l,c)))}),i&&(r=r.concat(Uo(i,n,s,t))),r}function yh(n,e){const t=e.query,s=Ps(n,t);return{hashFn:()=>(gy(e)||w.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Oy(n,t._path,s):Py(n,t._path);{const r=Pm(i,t);return Hi(n,t,null,r)}}}}function Ps(n,e){const t=Vi(e);return n.queryToTagMap.get(t)}function Vi(n){return n._path.toString()+"$"+n._queryIdentifier}function Bo(n,e){return n.tagToQueryMap.get(e)}function Ho(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function Vo(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=Mi(n.pendingWriteTree_,e);return Uo(s,t,i,null)}function My(n){return n.fold((e,t,s)=>{if(t&&xt(t))return[Wi(t)];{let i=[];return t&&(i=hh(t)),se(s,(r,o)=>{i=i.concat(o)}),i}})}function Os(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Ry())(n._repo,n._path):n}function Ly(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Vi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Fy(){return ky++}function Uy(n,e,t){const s=e._path,i=Ps(n,e),r=yh(n,t),o=n.listenProvider_.startListening(Os(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!S(c)&&h&&xt(h))return[Wi(h).query];{let u=[];return h&&(u=u.concat(hh(h).map(f=>f.query))),se(d,(f,p)=>{u=u.concat(p)}),u}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Os(h),Ps(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new zo(t)}node(){return this.node_}}class jo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new jo(this.syncTree_,t)}node(){return Wo(this.syncTree_,this.path_)}}const $y=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Eh=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Wy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return By(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Wy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},By=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wh=function(n,e,t,s){return Go(e,new jo(t,n),s)},Ih=function(n,e,t){return Go(n,new zo(e),t)};function Go(n,e,t){const s=n.getPriority().val(),i=Eh(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Eh(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Z(a,Q(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Z(i))),o.forEachChild(G,(a,l)=>{const c=Go(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ko(n,e){let t=e instanceof L?e:new L(e),s=n,i=C(t);for(;i!==null;){const r=In(s.node.children,i)||{children:{},childCount:0};s=new qo(i,s,r),t=F(t),i=C(t)}return s}function Hn(n){return n.node.value}function Ch(n,e){n.node.value=e,Yo(n)}function bh(n){return n.node.childCount>0}function Hy(n){return Hn(n)===void 0&&!bh(n)}function zi(n,e){se(n.node.children,(t,s)=>{e(new qo(t,n,s))})}function Th(n,e,t,s){t&&e(n),zi(n,i=>{Th(i,e,!0)})}function Vy(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ds(n){return new L(n.parent===null?n.name:Ds(n.parent)+"/"+n.name)}function Yo(n){n.parent!==null&&zy(n.parent,n.name,n)}function zy(n,e,t){const s=Hy(t),i=Qe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Yo(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Yo(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/[\[\].#$\/\u0000-\u001F\u007F]/,Gy=/[\[\].#$\u0000-\u001F\u007F]/,Qo=10*1024*1024,Jo=function(n){return typeof n=="string"&&n.length!==0&&!jy.test(n)},Sh=function(n){return typeof n=="string"&&n.length!==0&&!Gy.test(n)},qy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sh(n)},Ky=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ao(n)||n&&typeof n=="object"&&Qe(n,".sv")},Rh=function(n,e,t,s){s&&e===void 0||ji(oi(n,"value"),e,t)},ji=function(n,e,t){const s=t instanceof L?new hv(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+en(s));if(typeof e=="function")throw new Error(n+"contains a function "+en(s)+" with contents = "+e.toString());if(ao(e))throw new Error(n+"contains "+e.toString()+" "+en(s));if(typeof e=="string"&&e.length>Qo/3&&ai(e)>Qo)throw new Error(n+"contains a string greater than "+Qo+" utf8 bytes "+en(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jo(o)))throw new Error(n+" contains an invalid key ("+o+") "+en(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dv(s,o),ji(n,a,s),fv(s)}),i&&r)throw new Error(n+' contains ".value" child '+en(s)+" in addition to actual children.")}},Yy=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=ys(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Jo(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uv);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Ae(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Qy=function(n,e,t,s){const i=oi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];se(e,(o,a)=>{const l=new L(o);if(ji(i,a,j(t,l)),mo(l)===".priority"&&!Ky(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Yy(i,r)},kh=function(n,e,t,s){if(!Sh(t))throw new Error(oi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jy=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kh(n,e,t)},Xo=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Xy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!qy(t))throw new Error(oi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gi(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!vo(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ah(n,e,t){Gi(n,t),Nh(n,s=>vo(s,e))}function Ne(n,e,t){Gi(n,t),Nh(n,s=>Ae(s,e)||Ae(e,s))}function Nh(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(eE(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eE(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ps&&ne("event: "+t.toString()),xn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="repo_interrupt",nE=25;class sE{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pi(),this.transactionQueueTree_=new qo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iE(n,e,t){if(n.stats_=po(n.repoInfo_),n.forceRestClient_||Mm())n.server_=new Ni(n.repoInfo_,(s,i,r,o)=>{Oh(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Dh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new pt(n.repoInfo_,e,(s,i,r,o)=>{Oh(n,s,i,r,o)},s=>{Dh(n,s)},s=>{rE(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Wm(n.repoInfo_,()=>new $v(n.stats_,n.server_)),n.infoData_=new xv,n.infoSyncTree_=new ph({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ns(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zo(n,"connected",!1),n.serverSyncTree_=new ph({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ne(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ph(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qi(n){return $y({timestamp:Ph(n)})}function Oh(n,e,t,s,i){n.dataUpdateCount++;const r=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=ri(t,c=>Q(c));o=Dy(n.serverSyncTree_,r,l,i)}else{const l=Q(t);o=gh(n.serverSyncTree_,r,l,i)}else if(s){const l=ri(t,c=>Q(c));o=Ny(n.serverSyncTree_,r,l)}else{const l=Q(t);o=Ns(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Vn(n,r)),Ne(n.eventQueue_,a,o)}function Dh(n,e){Zo(n,"connected",e),e===!1&&cE(n)}function rE(n,e){se(e,(t,s)=>{Zo(n,t,s)})}function Zo(n,e,t){const s=new L("/.info/"+e),i=Q(t);n.infoData_.updateSnapshot(s,i);const r=Ns(n.infoSyncTree_,s,i);Ne(n.eventQueue_,s,r)}function ea(n){return n.nextWriteId_++}function oE(n,e,t){const s=xy(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Q(i).withIndex(e._queryParams.getIndex());$o(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ns(n.serverSyncTree_,e._path,r);else{const a=Ps(n.serverSyncTree_,e);o=gh(n.serverSyncTree_,e._path,r,a)}return Ne(n.eventQueue_,e._path,o),Hi(n.serverSyncTree_,e,t,null,!0),r},i=>(xs(n,"get for query "+Y(e)+" failed: "+i),Promise.reject(new Error(i))))}function aE(n,e,t,s,i){xs(n,"set",{path:e.toString(),value:t,priority:s});const r=qi(n),o=Q(t,s),a=Wo(n.serverSyncTree_,e),l=Ih(o,a,r),c=ea(n),h=_h(n.serverSyncTree_,e,l,c,!0);Gi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,f)=>{const p=u==="ok";p||fe("set at "+e+" failed: "+u);const g=Mt(n.serverSyncTree_,c,!p);Ne(n.eventQueue_,e,g),na(n,i,u,f)});const d=ia(n,e);Vn(n,d),Ne(n.eventQueue_,d,[])}function lE(n,e,t,s){xs(n,"update",{path:e.toString(),value:t});let i=!0;const r=qi(n),o={};if(se(t,(a,l)=>{i=!1,o[a]=wh(j(e,a),Q(l),n.serverSyncTree_,r)}),i)ne("update() called with empty data.  Don't do anything."),na(n,s,"ok",void 0);else{const a=ea(n),l=Ay(n.serverSyncTree_,e,o,a);Gi(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const d=c==="ok";d||fe("update at "+e+" failed: "+c);const u=Mt(n.serverSyncTree_,a,!d),f=u.length>0?Vn(n,e):e;Ne(n.eventQueue_,f,u),na(n,s,c,h)}),se(t,c=>{const h=ia(n,j(e,c));Vn(n,h)}),Ne(n.eventQueue_,e,[])}}function cE(n){xs(n,"onDisconnectEvents");const e=qi(n),t=Pi();To(n.onDisconnect_,k(),(i,r)=>{const o=wh(i,r,n.serverSyncTree_,e);zu(t,i,o)});let s=[];To(t,k(),(i,r)=>{s=s.concat(Ns(n.serverSyncTree_,i,r));const o=ia(n,i);Vn(n,o)}),n.onDisconnect_=Pi(),Ne(n.eventQueue_,k(),s)}function uE(n,e,t){let s;C(e._path)===".info"?s=$o(n.infoSyncTree_,e,t):s=$o(n.serverSyncTree_,e,t),Ah(n.eventQueue_,e._path,s)}function ta(n,e,t){let s;C(e._path)===".info"?s=Hi(n.infoSyncTree_,e,t):s=Hi(n.serverSyncTree_,e,t),Ah(n.eventQueue_,e._path,s)}function hE(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tE)}function xs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ne(t,...e)}function na(n,e,t,s){e&&xn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xh(n,e,t){return Wo(n.serverSyncTree_,e,t)||w.EMPTY_NODE}function sa(n,e=n.transactionQueueTree_){if(e||Ki(n,e),Hn(e)){const t=Lh(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&dE(n,Ds(e),t)}else bh(e)&&zi(e,t=>{sa(n,t)})}function dE(n,e,t){const s=t.map(c=>c.currentWriteId),i=xh(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=pe(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{xs(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(Mt(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Ki(n,Ko(n.transactionQueueTree_,e)),sa(n,n.transactionQueueTree_),Ne(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)xn(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{fe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Vn(n,e)}},o)}function Vn(n,e){const t=Mh(n,e),s=Ds(t),i=Lh(n,t);return fE(n,i,s),s}function fE(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=pe(t,l.path);let h=!1,d;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nE)h=!0,d="maxretry",i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0));else{const u=xh(n,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){ji("transaction failed: Data returned ",f,l.path);let p=Q(f);typeof f=="object"&&f!=null&&Qe(f,".priority")||(p=p.updatePriority(u.getPriority()));const v=l.currentWriteId,N=qi(n),m=Ih(p,u,N);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=ea(n),o.splice(o.indexOf(v),1),i=i.concat(_h(n.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Mt(n.serverSyncTree_,v,!0))}else h=!0,d="nodata",i=i.concat(Mt(n.serverSyncTree_,l.currentWriteId,!0))}Ne(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ki(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)xn(s[a]);sa(n,n.transactionQueueTree_)}function Mh(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&Hn(s)===void 0;)s=Ko(s,t),e=F(e),t=C(e);return s}function Lh(n,e){const t=[];return Fh(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Fh(n,e,t){const s=Hn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);zi(e,i=>{Fh(n,i,t)})}function Ki(n,e){const t=Hn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ch(e,t.length>0?t:void 0)}zi(e,s=>{Ki(n,s)})}function ia(n,e){const t=Ds(Mh(n,e)),s=Ko(n.transactionQueueTree_,e);return Vy(s,i=>{ra(n,i)}),ra(n,s),Th(s,i=>{ra(n,i)}),t}function ra(n,e){const t=Hn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Mt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ch(e,void 0):t.length=r+1,Ne(n.eventQueue_,Ds(e),i);for(let o=0;o<s.length;o++)xn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _E(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Uh=function(n,e){const t=gE(n),s=t.namespace;t.domain==="firebase.com"&&ft(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sm();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fu(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new L(t.pathString)}},gE=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(i=pE(n.substring(h,d)));const u=_E(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",mE=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$h.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$h.charAt(e[i]);return _(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Y(this.snapshot.exportVal())}}class yE{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return S(this._path)?null:mo(this._path)}get ref(){return new gt(this._repo,this._path)}get _queryIdentifier(){const e=Vu(this._queryParams),t=lo(e);return t==="{}"?"default":t}get _queryObject(){return Vu(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof oa))return!1;const t=this._repo===e._repo,s=vo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cv(this._path)}}class gt extends oa{constructor(e,t){super(e,t,new bo,!1)}get parent(){const e=Pu(this._path);return e===null?null:new gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ms{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),s=Ls(this.ref,e);return new Ms(this._node.getChild(t),s,G)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ms(i,Ls(this.ref,s),G)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ze(n,e){return n=te(n),n._checkNotDeleted("ref"),e!==void 0?Ls(n._root,e):n._root}function Ls(n,e){return n=te(n),C(n._path)===null?Jy("child","path",e):kh("child","path",e),new gt(n._repo,j(n._path,e))}function EE(n,e){n=te(n),Xo("push",n._path),Rh("push",e,n._path,!0);const t=Ph(n._repo),s=mE(t),i=Ls(n,s),r=Ls(n,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function wE(n){return Xo("remove",n._path),Yi(n,null)}function Yi(n,e){n=te(n),Xo("set",n._path),Rh("set",e,n._path,!1);const t=new es;return aE(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function aa(n,e){Qy("update",e,n._path);const t=new es;return lE(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function IE(n){n=te(n);const e=new Wh(()=>{}),t=new Qi(e);return oE(n._repo,n,t).then(s=>new Ms(s,new gt(n._repo,n._path),n._queryParams.getIndex()))}class Qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new vE("value",this,new Ms(e.snapshotNode,new gt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new yE(this,e,t):null}matches(e){return e instanceof Qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CE(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,d)=>{ta(n._repo,n,a),l(h,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Wh(t,r||void 0),a=new Qi(o);return uE(n._repo,n,a),()=>ta(n._repo,n,a)}function Ji(n,e,t,s){return CE(n,"value",e,t,s)}function la(n,e,t){ta(n._repo,n,null)}wy(gt),Sy(gt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="FIREBASE_DATABASE_EMULATOR_HOST",ca={};let TE=!1;function SE(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=wn(r);n.repoInfo_=new fu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function RE(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Uh(r,i),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[bE]),l?(r=`http://${l}?ns=${a.namespace}`,o=Uh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Fm(n.name,n.options,e);Xy("Invalid Firebase Database URL",o),S(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const h=AE(a,n,c,new Lm(n,t));return new NE(h,n)}function kE(n,e){const t=ca[e];(!t||t[n.key]!==n)&&ft(`Database ${e}(${n.repoInfo_}) has already been deleted.`),hE(n),delete t[n.key]}function AE(n,e,t,s){let i=ca[e.name];i||(i={},ca[e.name]=i);let r=i[n.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sE(n,TE,t,s),i[n.toURLString()]=r,r}class NE{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gt(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function PE(n=zl(),e){const t=zr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=kf("database");s&&OE(t,...s)}return t}function OE(n,e,t,s={}){n=te(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&jt(s,r.repoInfo_.emulatorOptions))return;ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ci(Ci.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Af(s.mockUserToken,n.app.options.projectId);o=new Ci(a)}wn(e)&&(Nl(e),Ol("Database",!0)),SE(r,i,s,o)}/**
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
 */function DE(n){Em(Tn),bn(new Gt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return RE(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ct(Yc,Qc,n),Ct(Yc,Qc,"esm2020")}pt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)},pt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)},DE();const Bh=Vl({apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",databaseURL:"YOUR_DATABASE_URL",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"}),Fs=vm(Bh),He=PE(Bh),Hh=kr(null),Vh=kr(!0);ag(Fs,n=>{Hh.set(n),Vh.set(!1)});async function zh(n,e){try{return await ng(Fs,n,e),{success:!0}}catch(t){return console.error("로그인 오류:",t),{success:!1,error:Gh(t.code)}}}async function jh(n,e,t=""){try{const s=await tg(Fs,n,e);return t&&await ig(s.user,{displayName:t}),{success:!0}}catch(s){return console.error("회원가입 오류:",s),{success:!1,error:Gh(s.code)}}}async function xE(){try{return await lg(Fs),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}function Gh(n){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[n]||"알 수 없는 오류가 발생했습니다."}var ME=Me('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'),LE=Me('<div class="error-message svelte-16585sj"> </div>'),FE=Me('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');const UE={hash:"svelte-16585sj",code:`
  /* 컨테이너 */.login-container.svelte-16585sj {display:flex;justify-content:center;align-items:center;min-height:400px;padding:1rem;}

  /* 로그인 카드 */.login-card.svelte-16585sj {width:100%;max-width:400px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);}

  /* 제목 */.title.svelte-16585sj {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:bold;text-align:center;color:#333;}

  /* 폼 */.form.svelte-16585sj {display:flex;flex-direction:column;gap:1rem;}

  /* 폼 그룹 */.form-group.svelte-16585sj {display:flex;flex-direction:column;gap:0.5rem;}

  /* 라벨 */.label.svelte-16585sj {font-weight:500;color:#555;font-size:0.9rem;}

  /* 입력 필드 */.input.svelte-16585sj {padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;transition:border-color 0.2s;}.input.svelte-16585sj:focus {outline:none;border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);}.input.svelte-16585sj:disabled {background-color:#f5f5f5;cursor:not-allowed;}

  /* 오류 메시지 */.error-message.svelte-16585sj {padding:0.75rem;background-color:#fee;color:#c33;border-radius:4px;font-size:0.9rem;}

  /* 제출 버튼 */.submit-button.svelte-16585sj {padding:0.75rem;background-color:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.submit-button.svelte-16585sj:hover:not(:disabled) {background-color:#0056b3;}.submit-button.svelte-16585sj:disabled {background-color:#ccc;cursor:not-allowed;}

  /* 모드 전환 버튼 */.toggle-button.svelte-16585sj {padding:0.5rem;background:transparent;color:#007bff;border:none;font-size:0.9rem;cursor:pointer;text-decoration:underline;}.toggle-button.svelte-16585sj:hover:not(:disabled) {color:#0056b3;}.toggle-button.svelte-16585sj:disabled {color:#ccc;cursor:not-allowed;}`};function $E(n,e){lr(e,!0),vl(n,UE);let t=ee(""),s=ee(""),i=ee(""),r=ee(""),o=ee(!1),a=ee(!1);async function l(q){q.preventDefault(),D(o,!0),D(r,"");let W;if(y(a)?W=await jh(y(t),y(s),y(i)):W=await zh(y(t),y(s)),W.success){const re=new CustomEvent("login-success",{detail:{email:y(t)},bubbles:!0,composed:!0});dispatchEvent(re),D(t,""),D(s,""),D(i,"")}else{D(r,W.error,!0);const re=new CustomEvent("login-error",{detail:{error:W.error},bubbles:!0,composed:!0});dispatchEvent(re)}D(o,!1)}function c(){D(a,!y(a)),D(r,"")}var h=FE(),d=V(h),u=V(d),f=V(u,!0);B(u);var p=ve(u,2),g=V(p);{var v=q=>{var W=ME(),re=ve(V(W),2);Cr(re),B(W),Bt(()=>re.disabled=y(o)),Tr(re,()=>y(i),rn=>D(i,rn)),Ee(q,W)};zt(g,q=>{y(a)&&q(v)})}var N=ve(g,2),m=ve(V(N),2);Cr(m),B(N);var I=ve(N,2),P=ve(V(I),2);Cr(P),B(I);var x=ve(I,2);{var ie=q=>{var W=LE(),re=V(W,!0);B(W),Bt(()=>Le(re,y(r))),Ee(q,W)};zt(x,q=>{y(r)&&q(ie)})}var $=ve(x,2),J=V($,!0);B($);var z=ve($,2);z.__click=c;var Ve=V(z,!0);B(z),B(p),B(d),B(h),Bt(()=>{Le(f,y(a)?"회원가입":"로그인"),m.disabled=y(o),P.disabled=y(o),$.disabled=y(o),Le(J,y(o)?"처리 중...":y(a)?"회원가입":"로그인"),z.disabled=y(o),Le(Ve,y(a)?"이미 계정이 있으신가요? 로그인":"계정이 없으신가요? 회원가입")}),ef("submit",p,l),Tr(m,()=>y(t),q=>D(t,q)),Tr(P,()=>y(s),q=>D(s,q)),Ee(n,h),cr()}hl(["click"]),customElements.define("login-form",Il($E,{},[],[],!0));var WE=Me('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),BE=Me('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),HE=Me('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),VE=Me('<h3 class="post-title svelte-1t1odzy"> </h3>'),zE=Me('<p class="post-text svelte-1t1odzy"> </p>'),jE=Me('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),GE=Me('<div class="posts svelte-1t1odzy"></div>'),qE=Me('<div class="post-list-container svelte-1t1odzy"><!></div>');const KE={hash:"svelte-1t1odzy",code:`
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
  }`};function YE(n,e){lr(e,!0),vl(n,KE);let t=El(e,"path",7,"posts"),s=El(e,"limit",7,"10"),i=ee(pn([])),r=ee(!0),o=ee(""),a=null;gl(()=>{l()}),lf(()=>{c()});function l(){try{a=Ze(He,t()),Ji(a,m=>{const I=m.val();I?D(i,Object.entries(I).map(([P,x])=>({id:P,...x})).sort((P,x)=>(x.timestamp||0)-(P.timestamp||0)).slice(0,parseInt(s())),!0):D(i,[],!0),D(r,!1),D(o,"")},m=>{console.error("데이터 읽기 오류:",m),D(o,"데이터를 불러오는 중 오류가 발생했습니다."),D(r,!1)})}catch(m){console.error("구독 설정 오류:",m),D(o,"데이터베이스 연결에 실패했습니다."),D(r,!1)}}function c(){a&&la(a)}function h(m){const I=new CustomEvent("post-click",{detail:{post:m},bubbles:!0,composed:!0});dispatchEvent(I)}function d(m,I){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),h(I))}function u(m){if(!m)return"";const I=typeof m=="string"?Number(m):m,P=new Date(I),ie=new Date().getTime()-P.getTime(),$=Math.floor(ie/6e4),J=Math.floor(ie/36e5),z=Math.floor(ie/864e5);return $<1?"방금 전":$<60?`${$}분 전`:J<24?`${J}시간 전`:z<7?`${z}일 전`:P.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return t()},set path(m="posts"){t(m),Js()},get limit(){return s()},set limit(m="10"){s(m),Js()}},p=qE(),g=V(p);{var v=m=>{var I=WE();Ee(m,I)},N=m=>{var I=fl(),P=Va(I);{var x=$=>{var J=BE(),z=V(J),Ve=V(z,!0);B(z),B(J),Bt(()=>Le(Ve,y(o))),Ee($,J)},ie=$=>{var J=fl(),z=Va(J);{var Ve=W=>{var re=HE();Ee(W,re)},q=W=>{var re=GE();uf(re,21,()=>y(i),rn=>rn.id,(rn,Ie)=>{var zn=jE();zn.__click=()=>h(y(Ie)),zn.__keydown=ze=>d(ze,y(Ie));var ua=V(zn),qh=V(ua),ha=V(qh),sw=V(ha,!0);B(ha);var Kh=ve(ha,2),iw=V(Kh,!0);B(Kh),B(qh),B(ua);var da=ve(ua,2),Yh=V(da);{var rw=ze=>{var on=VE(),pa=V(on,!0);B(on),Bt(()=>Le(pa,y(Ie).title)),Ee(ze,on)};zt(Yh,ze=>{y(Ie).title&&ze(rw)})}var ow=ve(Yh,2);{var aw=ze=>{var on=zE(),pa=V(on,!0);B(on),Bt(()=>Le(pa,y(Ie).content)),Ee(ze,on)};zt(ow,ze=>{y(Ie).content&&ze(aw)})}B(da);var Qh=ve(da,2),fa=V(Qh),lw=V(fa);B(fa);var Jh=ve(fa,2),cw=V(Jh);B(Jh),B(Qh),B(zn),Bt(ze=>{br(zn,"aria-label",`게시물: ${(y(Ie).title||y(Ie).content||"제목 없음")??""}`),Le(sw,y(Ie).author||"익명"),Le(iw,ze),Le(lw,`👍 ${(y(Ie).likes||0)??""}`),Le(cw,`💬 ${(y(Ie).comments?.length||0)??""}`)},[()=>u(y(Ie).timestamp)]),Ee(rn,zn)}),B(re),Ee(W,re)};zt(z,W=>{y(i).length===0?W(Ve):W(q,!1)},!0)}Ee($,J)};zt(P,$=>{y(o)?$(x):$(ie,!1)},!0)}Ee(m,I)};zt(g,m=>{y(r)?m(v):m(N,!1)})}return B(p),Ee(n,p),cr(f)}hl(["click","keydown"]),customElements.define("post-list",Il(YE,{path:{},limit:{}},[],[],!0));function QE(n){const{subscribe:e,set:t}=kr(null),s=Ze(He,n);return Ji(s,i=>{const r=i.val();t(r)}),{subscribe:e,unsubscribe:()=>la(s)}}async function JE(n,e){try{const t=Ze(He,n);return await Yi(t,e),{success:!0}}catch(t){return console.error("데이터 쓰기 오류:",t),{success:!1,error:t.message}}}async function XE(n,e){try{const t=Ze(He,n);return await aa(t,e),{success:!0}}catch(t){return console.error("데이터 업데이트 오류:",t),{success:!1,error:t.message}}}async function ZE(n){try{const e=Ze(He,n);return await wE(e),{success:!0}}catch(e){return console.error("데이터 삭제 오류:",e),{success:!1,error:e.message}}}async function ew(n,e){try{const t=Ze(He,n),s=EE(t);return await Yi(s,e),{success:!0,key:s.key}}catch(t){return console.error("데이터 추가 오류:",t),{success:!1,error:t.message}}}async function tw(n){try{const e=Ze(He,n),t=await IE(e);return t.exists()?{success:!0,data:t.val()}:{success:!0,data:null}}catch(e){return console.error("데이터 읽기 오류:",e),{success:!1,error:e.message}}}function nw(n){const e=Ze(He,`status/${n}`),t=Ze(He,".info/connected");return Ji(t,s=>{s.val()===!0&&(Yi(e,{online:!0,lastSeen:Date.now()}),Ji(Ze(He,".info/connected"),i=>{i.val()||aa(e,{online:!1,lastSeen:Date.now()})}))}),()=>{aa(e,{online:!1,lastSeen:Date.now()}),la(t)}}console.log("SNS Web Components 로드됨 ✅"),K.auth=Fs,K.createRealtimeStore=QE,K.database=He,K.deleteData=ZE,K.loading=Vh,K.pushData=ew,K.readData=tw,K.setupPresence=nw,K.signIn=zh,K.signOut=xE,K.signUp=jh,K.updateData=XE,K.user=Hh,K.writeData=JE,Object.defineProperty(K,Symbol.toStringTag,{value:"Module"})}));
