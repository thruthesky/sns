(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Nl=!1;var Pl=Array.isArray,qh=Array.prototype.indexOf,Kr=Array.from,js=Object.keys,os=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Gh=Object.getOwnPropertyDescriptors,Kh=Object.prototype,Yh=Array.prototype,Ol=Object.getPrototypeOf,la=Object.isExtensible;const gn=()=>{};function Qh(n){for(var e=0;e<n.length;e++)n[e]()}function Dl(){var n,e,t=new Promise((s,i)=>{n=s,e=i});return{promise:t,resolve:n,reject:e}}const fe=2,Yr=4,Qr=8,dt=16,ft=32,Ot=64,Ci=128,ce=1024,we=2048,pt=4096,ke=8192,rt=16384,Jr=32768,Sn=65536,ca=1<<17,Jh=1<<18,tn=1<<19,Xh=1<<20,De=256,qs=512,Gs=32768,_r=1<<21,Xr=1<<22,Ht=1<<23,Gi=Symbol("$state"),Zh=Symbol("legacy props"),ed=Symbol(""),un=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Zr=3,Ln=8;function xl(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function td(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function nd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function id(n){throw new Error("https://svelte.dev/e/effect_orphan")}function rd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function od(){throw new Error("https://svelte.dev/e/hydration_failed")}function ad(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ld(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ud(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const hd=1,dd=2,fd=16,pd=1,_d=2,Ml="[",Ti="[!",eo="]",kn={},oe=Symbol(),gd="http://www.w3.org/1999/xhtml";function Si(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function md(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let O=!1;function $e(n){O=n}let F;function ye(n){if(n===null)throw Si(),kn;return F=n}function ki(){return ye(Ze(F))}function D(n){if(O){if(Ze(F)!==null)throw Si(),kn;F=n}}function Ll(n=1){if(O){for(var e=n,t=F;e--;)t=Ze(t);F=t}}function Ks(n=!0){for(var e=0,t=F;;){if(t.nodeType===Ln){var s=t.data;if(s===eo){if(e===0)return t;e-=1}else(s===Ml||s===Ti)&&(e+=1)}var i=Ze(t);n&&t.remove(),t=i}}function Fl(n){if(!n||n.nodeType!==Ln)throw Si(),kn;return n.data}function Ul(n){return n===this.v}function $l(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Wl(n){return!$l(n,this.v)}let vd=!1,Ee=null;function Rn(n){Ee=n}function Ri(n,e=!1,t){Ee={p:Ee,i:!1,c:null,e:null,s:n,x:null,l:null}}function Ai(n){var e=Ee,t=e.e;if(t!==null){e.e=null;for(var s of t)sc(s)}return n!==void 0&&(e.x=n),e.i=!0,Ee=e.p,n??{}}function Bl(){return!0}let Wt=[];function Hl(){var n=Wt;Wt=[],Qh(n)}function ys(n){if(Wt.length===0&&!Jn){var e=Wt;queueMicrotask(()=>{e===Wt&&Hl()})}Wt.push(n)}function yd(){for(;Wt.length>0;)Hl()}function Vl(n){var e=S;if(e===null)return A.f|=Ht,n;if((e.f&Jr)===0){if((e.f&Ci)===0)throw n;e.b.error(n)}else An(n,e)}function An(n,e){for(;e!==null;){if((e.f&Ci)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Ds=new Set;let j=null,Fs=null,Le=null,Ye=[],Ni=null,gr=!1,Jn=!1;class We{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#n=0;#s=0;#l=null;#o=[];#a=[];skipped_effects=new Set;is_fork=!1;process(e){Ye=[],Fs=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of e)this.#i(s,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects)):(Fs=this,j=null,ua(t.render_effects),ua(t.effects),Fs=null,this.#l?.resolve()),Le=null}#i(e,t){e.f^=ce;for(var s=e.first;s!==null;){var i=s.f,r=(i&(ft|Ot))!==0,o=r&&(i&ce)!==0,a=o||(i&ke)!==0||this.skipped_effects.has(s);if((s.f&Ci)!==0&&s.b?.is_pending()&&(t={parent:t,effect:s,effects:[],render_effects:[],block_effects:[]}),!a&&s.fn!==null){r?s.f^=ce:(i&Yr)!==0?t.effects.push(s):ws(s)&&((s.f&dt)!==0&&t.block_effects.push(s),cs(s));var l=s.first;if(l!==null){s=l;continue}}var c=s.parent;for(s=s.next;s===null&&c!==null;)c===t.effect&&(this.#r(t.effects),this.#r(t.render_effects),this.#r(t.block_effects),t=t.parent),s=c.next,c=c.parent}}#r(e){for(const t of e)((t.f&we)!==0?this.#o:this.#a).push(t),de(t,ce)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Le?.set(e,e.v)}activate(){j=this}deactivate(){j=null,Le=null}flush(){if(this.activate(),Ye.length>0){if(zl(),j!==null&&j!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#n===0&&this.#u()}#u(){if(Ds.size>1){this.previous.clear();var e=Le,t=!0,s={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ds){if(i===this){t=!1;continue}const r=[];for(const[a,l]of this.current){if(i.current.has(a))if(t&&l!==i.current.get(a))i.current.set(a,l);else continue;r.push(a)}if(r.length===0)continue;const o=[...i.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of r)jl(c,o,a,l);if(Ye.length>0){j=i,i.apply();for(const c of Ye)i.#i(c,s);Ye=[],i.deactivate()}}}j=null,Le=e}this.committed=!0,Ds.delete(this)}increment(e){this.#n+=1,e&&(this.#s+=1)}decrement(e){this.#n-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)de(e,we),zt(e);for(const e of this.#a)de(e,pt),zt(e);this.#o=[],this.#a=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=Dl()).promise}static ensure(){if(j===null){const e=j=new We;Ds.add(j),Jn||We.enqueue(()=>{j===e&&e.flush()})}return j}static enqueue(e){ys(e)}apply(){}}function Ys(n){var e=Jn;Jn=!0;try{for(var t;;){if(yd(),Ye.length===0&&(j?.flush(),Ye.length===0))return Ni=null,t;zl()}}finally{Jn=e}}function zl(){var n=vn;gr=!0;try{var e=0;for(fa(!0);Ye.length>0;){var t=We.ensure();if(e++>1e3){var s,i;wd()}t.process(Ye),Tt.clear()}}finally{gr=!1,fa(n),Ni=null}}function wd(){try{rd()}catch(n){An(n,Ni)}}let tt=null;function ua(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var s=n[t++];if((s.f&(rt|ke))===0&&ws(s)&&(tt=new Set,cs(s),s.deps===null&&s.first===null&&s.nodes_start===null&&(s.teardown===null&&s.ac===null?oc(s):s.fn=null),tt?.size>0)){Tt.clear();for(const i of tt){if((i.f&(rt|ke))!==0)continue;const r=[i];let o=i.parent;for(;o!==null;)tt.has(o)&&(tt.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];(l.f&(rt|ke))===0&&cs(l)}}tt.clear()}}tt=null}}function jl(n,e,t,s){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const r=i.f;(r&fe)!==0?jl(i,e,t,s):(r&(Xr|dt))!==0&&(r&we)===0&&ql(i,e,s)&&(de(i,we),zt(i))}}function ql(n,e,t){const s=t.get(n);if(s!==void 0)return s;if(n.deps!==null)for(const i of n.deps){if(e.includes(i))return!0;if((i.f&fe)!==0&&ql(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function zt(n){for(var e=Ni=n;e.parent!==null;){e=e.parent;var t=e.f;if(gr&&e===S&&(t&dt)!==0)return;if((t&(Ot|ft))!==0){if((t&ce)===0)return;e.f^=ce}}Ye.push(e)}function Ed(n){let e=0,t=jt(0),s;return()=>{xd()&&(v(t),ro(()=>(e===0&&(s=Es(()=>n(()=>Xn(t)))),e+=1,()=>{ys(()=>{e-=1,e===0&&(s?.(),s=void 0,Xn(t))})})))}}var bd=Sn|tn|Ci;function Id(n,e,t){new Cd(n,e,t)}class Cd{parent;#t=!1;#e;#n=O?F:null;#s;#l;#o;#a=null;#i=null;#r=null;#c=null;#u=null;#f=0;#h=0;#p=!1;#d=null;#y=Ed(()=>(this.#d=jt(this.#f),()=>{this.#d=null}));constructor(e,t,s){this.#e=e,this.#s=t,this.#l=s,this.parent=S.b,this.#t=!!this.#s.pending,this.#o=oo(()=>{if(S.b=this,O){const r=this.#n;ki(),r.nodeType===Ln&&r.data===Ti?this.#E():this.#w()}else{var i=this.#m();try{this.#a=Pe(()=>s(i))}catch(r){this.error(r)}this.#h>0?this.#g():this.#t=!1}return()=>{this.#u?.remove()}},bd),O&&(this.#e=F)}#w(){try{this.#a=Pe(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#E(){const e=this.#s.pending;e&&(this.#i=Pe(()=>e(this.#e)),We.enqueue(()=>{var t=this.#m();this.#a=this.#_(()=>(We.ensure(),Pe(()=>this.#l(t)))),this.#h>0?this.#g():(mn(this.#i,()=>{this.#i=null}),this.#t=!1)}))}#m(){var e=this.#e;return this.#t&&(this.#u=je(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#_(e){var t=S,s=A,i=Ee;xe(this.#o),ue(this.#o),Rn(this.#o.ctx);try{return e()}catch(r){return Vl(r),null}finally{xe(t),ue(s),Rn(i)}}#g(){const e=this.#s.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),cc(this.#a,this.#c)),this.#i===null&&(this.#i=Pe(()=>e(this.#e)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#h+=e,this.#h===0&&(this.#t=!1,this.#i&&mn(this.#i,()=>{this.#i=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#d&&as(this.#d,this.#f)}get_effect_pending(){return this.#y(),v(this.#d)}error(e){var t=this.#s.onerror;let s=this.#s.failed;if(this.#p||!t&&!s)throw e;this.#a&&(he(this.#a),this.#a=null),this.#i&&(he(this.#i),this.#i=null),this.#r&&(he(this.#r),this.#r=null),O&&(ye(this.#n),Ll(),ye(Ks()));var i=!1,r=!1;const o=()=>{if(i){md();return}i=!0,r&&ud(),We.ensure(),this.#f=0,this.#r!==null&&mn(this.#r,()=>{this.#r=null}),this.#t=this.has_pending_snippet(),this.#a=this.#_(()=>(this.#p=!1,Pe(()=>this.#l(this.#e)))),this.#h>0?this.#g():this.#t=!1};var a=A;try{ue(null),r=!0,t?.(e,o),r=!1}catch(l){An(l,this.#o&&this.#o.parent)}finally{ue(a)}s&&ys(()=>{this.#r=this.#_(()=>{We.ensure(),this.#p=!0;try{return Pe(()=>{s(this.#e,()=>e,()=>o)})}catch(l){return An(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Td(n,e,t,s){const i=to;if(t.length===0&&n.length===0){s(e.map(i));return}var r=j,o=S,a=Sd();function l(){Promise.all(t.map(c=>kd(c))).then(c=>{a();try{s([...e.map(i),...c])}catch(h){(o.f&rt)===0&&An(h,o)}r?.deactivate(),Qs()}).catch(c=>{An(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{r?.deactivate(),Qs()}}):l()}function Sd(){var n=S,e=A,t=Ee,s=j;return function(r=!0){xe(n),ue(e),Rn(t),r&&s?.activate()}}function Qs(){xe(null),ue(null),Rn(null)}function to(n){var e=fe|we,t=A!==null&&(A.f&fe)!==0?A:null;return S===null||t!==null&&(t.f&De)!==0?e|=De:S.f|=tn,{ctx:Ee,deps:null,effects:null,equals:Ul,f:e,fn:n,reactions:null,rv:0,v:oe,wv:0,parent:t??S,ac:null}}function kd(n,e){let t=S;t===null&&td();var s=t.b,i=void 0,r=jt(oe),o=!A,a=new Map;return $d(()=>{var l=Dl();i=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===j&&c.committed&&c.deactivate(),Qs()})}catch(u){l.reject(u),Qs()}var c=j;if(o){var h=!s.is_pending();s.update_pending_count(1),c.increment(h),a.get(c)?.reject(un),a.delete(c),a.set(c,l)}const d=(u,f=void 0)=>{if(c.activate(),f)f!==un&&(r.f|=Ht,as(r,f));else{(r.f&Ht)!==0&&(r.f^=Ht),as(r,u);for(const[p,g]of a){if(a.delete(p),p===c)break;g.reject(un)}}o&&(s.update_pending_count(-1),c.decrement(h))};l.promise.then(d,u=>d(null,u||"unknown"))}),io(()=>{for(const l of a.values())l.reject(un)}),new Promise(l=>{function c(h){function d(){h===i?l(r):c(i)}h.then(d,d)}c(i)})}function Rd(n){const e=to(n);return e.equals=Wl,e}function Gl(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)he(e[t])}}function Ad(n){for(var e=n.parent;e!==null;){if((e.f&fe)===0)return e;e=e.parent}return null}function no(n){var e,t=S;xe(Ad(n));try{n.f&=~Gs,Gl(n),e=fc(n)}finally{xe(t)}return e}function Kl(n){var e=no(n);if(n.equals(e)||(n.v=e,n.wv=hc()),!nn)if(Le!==null)Le.set(n,n.v);else{var t=(Ct||(n.f&De)!==0)&&n.deps!==null?pt:ce;de(n,t)}}let mr=new Set;const Tt=new Map;let Yl=!1;function jt(n,e){var t={f:0,v:n,reactions:null,equals:Ul,rv:0,wv:0};return t}function ee(n,e){const t=jt(n);return Hd(t),t}function so(n,e=!1,t=!0){const s=jt(n);return e||(s.equals=Wl),s}function C(n,e,t=!1){A!==null&&(!Fe||(A.f&ca)!==0)&&Bl()&&(A.f&(fe|dt|Xr|ca))!==0&&!ot?.includes(n)&&cd();let s=t?hn(e):e;return as(n,s)}function as(n,e){if(!n.equals(e)){var t=n.v;nn?Tt.set(n,e):Tt.set(n,t),n.v=e;var s=We.ensure();s.capture(n,t),(n.f&fe)!==0&&((n.f&we)!==0&&no(n),de(n,(n.f&De)===0?ce:pt)),n.wv=hc(),Ql(n,we),S!==null&&(S.f&ce)!==0&&(S.f&(ft|Ot))===0&&(Ne===null?Vd([n]):Ne.push(n)),!s.is_fork&&mr.size>0&&!Yl&&Nd()}return e}function Nd(){Yl=!1;const n=Array.from(mr);for(const e of n)(e.f&ce)!==0&&de(e,pt),ws(e)&&cs(e);mr.clear()}function Xn(n){C(n,n.v+1)}function Ql(n,e){var t=n.reactions;if(t!==null)for(var s=t.length,i=0;i<s;i++){var r=t[i],o=r.f,a=(o&we)===0;a&&de(r,e),(o&fe)!==0?(o&Gs)===0&&(r.f|=Gs,Ql(r,pt)):a&&((o&dt)!==0&&tt!==null&&tt.add(r),zt(r))}}function hn(n){if(typeof n!="object"||n===null||Gi in n)return n;const e=Ol(n);if(e!==Kh&&e!==Yh)return n;var t=new Map,s=Pl(n),i=ee(0),r=Vt,o=a=>{if(Vt===r)return a();var l=A,c=Vt;ue(null),_a(r);var h=a();return ue(l),_a(c),h};return s&&t.set("length",ee(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ad();var h=t.get(l);return h===void 0?h=o(()=>{var d=ee(c.value);return t.set(l,d),d}):C(h,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const h=o(()=>ee(oe));t.set(l,h),Xn(i)}}else C(c,oe),Xn(i);return!0},get(a,l,c){if(l===Gi)return n;var h=t.get(l),d=l in a;if(h===void 0&&(!d||_n(a,l)?.writable)&&(h=o(()=>{var f=hn(d?a[l]:oe),p=ee(f);return p}),t.set(l,h)),h!==void 0){var u=v(h);return u===oe?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=v(h))}else if(c===void 0){var d=t.get(l),u=d?.v;if(d!==void 0&&u!==oe)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){if(l===Gi)return!0;var c=t.get(l),h=c!==void 0&&c.v!==oe||Reflect.has(a,l);if(c!==void 0||S!==null&&(!h||_n(a,l)?.writable)){c===void 0&&(c=o(()=>{var u=h?hn(a[l]):oe,f=ee(u);return f}),t.set(l,c));var d=v(c);if(d===oe)return!1}return h},set(a,l,c,h){var d=t.get(l),u=l in a;if(s&&l==="length")for(var f=c;f<d.v;f+=1){var p=t.get(f+"");p!==void 0?C(p,oe):f in a&&(p=o(()=>ee(oe)),t.set(f+"",p))}if(d===void 0)(!u||_n(a,l)?.writable)&&(d=o(()=>ee(void 0)),C(d,hn(c)),t.set(l,d));else{u=d.v!==oe;var g=o(()=>hn(c));C(d,g)}var y=Reflect.getOwnPropertyDescriptor(a,l);if(y?.set&&y.set.call(h,c),!u){if(s&&typeof l=="string"){var N=t.get("length"),m=Number(l);Number.isInteger(m)&&m>=N.v&&C(N,m+1)}Xn(i)}return!0},ownKeys(a){v(i);var l=Reflect.ownKeys(a).filter(d=>{var u=t.get(d);return u===void 0||u.v!==oe});for(var[c,h]of t)h.v!==oe&&!(c in a)&&l.push(c);return l},setPrototypeOf(){ld()}})}var ha,Jl,Xl,Zl;function vr(){if(ha===void 0){ha=window,Jl=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Xl=_n(e,"firstChild").get,Zl=_n(e,"nextSibling").get,la(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),la(t)&&(t.__t=void 0)}}function je(n=""){return document.createTextNode(n)}function qt(n){return Xl.call(n)}function Ze(n){return Zl.call(n)}function L(n,e){if(!O)return qt(n);var t=qt(F);if(t===null)t=F.appendChild(je());else if(e&&t.nodeType!==Zr){var s=je();return t?.before(s),ye(s),s}return ye(t),t}function Js(n,e=!1){if(!O){var t=qt(n);return t instanceof Comment&&t.data===""?Ze(t):t}if(e&&F?.nodeType!==Zr){var s=je();return F?.before(s),ye(s),s}return F}function K(n,e=1,t=!1){let s=O?F:n;for(var i;e--;)i=s,s=Ze(s);if(!O)return s;if(t&&s?.nodeType!==Zr){var r=je();return s===null?i?.after(r):s.before(r),ye(r),r}return ye(s),s}function ec(n){n.textContent=""}function tc(){return!1}let da=!1;function nc(){da||(da=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Pi(n){var e=A,t=S;ue(null),xe(null);try{return n()}finally{ue(e),xe(t)}}function Pd(n,e,t,s=t){n.addEventListener(e,()=>Pi(t));const i=n.__on_r;i?n.__on_r=()=>{i(),s(!0)}:n.__on_r=()=>s(!0),nc()}function Od(n){S===null&&A===null&&id(),A!==null&&(A.f&De)!==0&&S===null&&sd(),nn&&nd()}function Dd(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function et(n,e,t,s=!0){var i=S;i!==null&&(i.f&ke)!==0&&(n|=ke);var r={ctx:Ee,deps:null,nodes_start:null,nodes_end:null,f:n|we,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{cs(r),r.f|=Jr}catch(l){throw he(r),l}else e!==null&&zt(r);if(s){var o=r;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&tn)===0&&(o=o.first,(n&dt)!==0&&(n&Sn)!==0&&o!==null&&(o.f|=Sn)),o!==null&&(o.parent=i,i!==null&&Dd(o,i),A!==null&&(A.f&fe)!==0&&(n&Ot)===0)){var a=A;(a.effects??=[]).push(o)}}return r}function xd(){return A!==null&&!Fe}function io(n){const e=et(Qr,null,!1);return de(e,ce),e.teardown=n,e}function Md(n){Od();var e=S.f,t=!A&&(e&ft)!==0&&(e&Jr)===0;if(t){var s=Ee;(s.e??=[]).push(n)}else return sc(n)}function sc(n){return et(Yr|Xh,n,!1)}function Ld(n){We.ensure();const e=et(Ot|tn,n,!0);return()=>{he(e)}}function Fd(n){We.ensure();const e=et(Ot|tn,n,!0);return(t={})=>new Promise(s=>{t.outro?mn(e,()=>{he(e),s(void 0)}):(he(e),s(void 0))})}function Ud(n){return et(Yr,n,!1)}function $d(n){return et(Xr|tn,n,!0)}function ro(n,e=0){return et(Qr|e,n,!0)}function Qe(n,e=[],t=[],s=[]){Td(s,e,t,i=>{et(Qr,()=>n(...i.map(v)),!0)})}function oo(n,e=0){var t=et(dt|e,n,!0);return t}function Pe(n,e=!0){return et(ft|tn,n,!0,e)}function ic(n){var e=n.teardown;if(e!==null){const t=nn,s=A;pa(!0),ue(null);try{e.call(null)}finally{pa(t),ue(s)}}}function rc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&Pi(()=>{i.abort(un)});var s=t.next;(t.f&Ot)!==0?t.parent=null:he(t,e),t=s}}function Wd(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&ft)===0&&he(e),e=t}}function he(n,e=!0){var t=!1;(e||(n.f&Jh)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Bd(n.nodes_start,n.nodes_end),t=!0),rc(n,e&&!t),Xs(n,0),de(n,rt);var s=n.transitions;if(s!==null)for(const r of s)r.stop();ic(n);var i=n.parent;i!==null&&i.first!==null&&oc(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Bd(n,e){for(;n!==null;){var t=n===e?null:Ze(n);n.remove(),n=t}}function oc(n){var e=n.parent,t=n.prev,s=n.next;t!==null&&(t.next=s),s!==null&&(s.prev=t),e!==null&&(e.first===n&&(e.first=s),e.last===n&&(e.last=t))}function mn(n,e,t=!0){var s=[];ao(n,s,!0),ac(s,()=>{t&&he(n),e&&e()})}function ac(n,e){var t=n.length;if(t>0){var s=()=>--t||e();for(var i of n)i.out(s)}else e()}function ao(n,e,t){if((n.f&ke)===0){if(n.f^=ke,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var s=n.first;s!==null;){var i=s.next,r=(s.f&Sn)!==0||(s.f&ft)!==0&&(n.f&dt)!==0;ao(s,e,r?t:!1),s=i}}}function lo(n){lc(n,!0)}function lc(n,e){if((n.f&ke)!==0){n.f^=ke,(n.f&ce)===0&&(de(n,we),zt(n));for(var t=n.first;t!==null;){var s=t.next,i=(t.f&Sn)!==0||(t.f&ft)!==0;lc(t,i?e:!1),t=s}if(n.transitions!==null)for(const r of n.transitions)(r.is_global||e)&&r.in()}}function cc(n,e){for(var t=n.nodes_start,s=n.nodes_end;t!==null;){var i=t===s?null:Ze(t);e.append(t),t=i}}let vn=!1;function fa(n){vn=n}let nn=!1;function pa(n){nn=n}let A=null,Fe=!1;function ue(n){A=n}let S=null;function xe(n){S=n}let ot=null;function Hd(n){A!==null&&(ot===null?ot=[n]:ot.push(n))}let pe=null,Ce=0,Ne=null;function Vd(n){Ne=n}let uc=1,ls=0,Vt=ls;function _a(n){Vt=n}let Ct=!1;function hc(){return++uc}function ws(n){var e=n.f;if((e&we)!==0)return!0;if((e&pt)!==0){var t=n.deps,s=(e&De)!==0;if(e&fe&&(n.f&=~Gs),t!==null){var i,r,o=(e&qs)!==0,a=s&&S!==null&&!Ct,l=t.length;if((o||a)&&(S===null||(S.f&rt)===0)){var c=n,h=c.parent;for(i=0;i<l;i++)r=t[i],(o||!r?.reactions?.includes(c))&&(r.reactions??=[]).push(c);o&&(c.f^=qs),a&&h!==null&&(h.f&De)===0&&(c.f^=De)}for(i=0;i<l;i++)if(r=t[i],ws(r)&&Kl(r),r.wv>n.wv)return!0}(!s||S!==null&&!Ct)&&de(n,ce)}return!1}function dc(n,e,t=!0){var s=n.reactions;if(s!==null&&!ot?.includes(n))for(var i=0;i<s.length;i++){var r=s[i];(r.f&fe)!==0?dc(r,e,!1):e===r&&(t?de(r,we):(r.f&ce)!==0&&de(r,pt),zt(r))}}function fc(n){var e=pe,t=Ce,s=Ne,i=A,r=Ct,o=ot,a=Ee,l=Fe,c=Vt,h=n.f;pe=null,Ce=0,Ne=null,Ct=(h&De)!==0&&(Fe||!vn||A===null),A=(h&(ft|Ot))===0?n:null,ot=null,Rn(n.ctx),Fe=!1,Vt=++ls,n.ac!==null&&(Pi(()=>{n.ac.abort(un)}),n.ac=null);try{n.f|=_r;var d=n.fn,u=d(),f=n.deps;if(pe!==null){var p;if(Xs(n,Ce),f!==null&&Ce>0)for(f.length=Ce+pe.length,p=0;p<pe.length;p++)f[Ce+p]=pe[p];else n.deps=f=pe;if(!Ct||(h&fe)!==0&&n.reactions!==null)for(p=Ce;p<f.length;p++)(f[p].reactions??=[]).push(n)}else f!==null&&Ce<f.length&&(Xs(n,Ce),f.length=Ce);if(Bl()&&Ne!==null&&!Fe&&f!==null&&(n.f&(fe|pt|we))===0)for(p=0;p<Ne.length;p++)dc(Ne[p],n);return i!==null&&i!==n&&(ls++,Ne!==null&&(s===null?s=Ne:s.push(...Ne))),(n.f&Ht)!==0&&(n.f^=Ht),u}catch(g){return Vl(g)}finally{n.f^=_r,pe=e,Ce=t,Ne=s,A=i,Ct=r,ot=o,Rn(a),Fe=l,Vt=c}}function zd(n,e){let t=e.reactions;if(t!==null){var s=qh.call(t,n);if(s!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[s]=t[i],t.pop())}}t===null&&(e.f&fe)!==0&&(pe===null||!pe.includes(e))&&(de(e,pt),(e.f&(De|qs))===0&&(e.f^=qs),Gl(e),Xs(e,0))}function Xs(n,e){var t=n.deps;if(t!==null)for(var s=e;s<t.length;s++)zd(n,t[s])}function cs(n){var e=n.f;if((e&rt)===0){de(n,ce);var t=S,s=vn;S=n,vn=!0;try{(e&dt)!==0?Wd(n):rc(n),ic(n);var i=fc(n);n.teardown=typeof i=="function"?i:null,n.wv=uc;var r;Nl&&vd&&(n.f&we)!==0&&n.deps}finally{vn=s,S=t}}}async function jd(){await Promise.resolve(),Ys()}function v(n){var e=n.f,t=(e&fe)!==0;if(A!==null&&!Fe){var s=S!==null&&(S.f&rt)!==0;if(!s&&!ot?.includes(n)){var i=A.deps;if((A.f&_r)!==0)n.rv<ls&&(n.rv=ls,pe===null&&i!==null&&i[Ce]===n?Ce++:pe===null?pe=[n]:(!Ct||!pe.includes(n))&&pe.push(n));else{(A.deps??=[]).push(n);var r=n.reactions;r===null?n.reactions=[A]:r.includes(A)||r.push(A)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&De)===0&&(o.f^=De)}if(nn){if(Tt.has(n))return Tt.get(n);if(t){o=n;var l=o.v;return((o.f&ce)===0&&o.reactions!==null||pc(o))&&(l=no(o)),Tt.set(o,l),l}}else if(t){if(o=n,Le?.has(o))return Le.get(o);ws(o)&&Kl(o)}if(Le?.has(n))return Le.get(n);if((n.f&Ht)!==0)throw n.v;return n.v}function pc(n){if(n.v===oe)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Tt.has(e)||(e.f&fe)!==0&&pc(e))return!0;return!1}function Es(n){var e=Fe;try{return Fe=!0,n()}finally{Fe=e}}const qd=-7169;function de(n,e){n.f=n.f&qd|e}const Gd=["touchstart","touchmove"];function Kd(n){return Gd.includes(n)}const _c=new Set,yr=new Set;function Yd(n,e,t,s={}){function i(r){if(s.capture||Kn.call(e,r),!r.cancelBubble)return Pi(()=>t?.call(this,r))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ys(()=>{e.addEventListener(n,i,s)}):e.addEventListener(n,i,s),i}function Us(n,e,t,s,i){var r={capture:s,passive:i},o=Yd(n,e,t,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&io(()=>{e.removeEventListener(n,o,r)})}function co(n){for(var e=0;e<n.length;e++)_c.add(n[e]);for(var t of yr)t(n)}let ga=null;function Kn(n){var e=this,t=e.ownerDocument,s=n.type,i=n.composedPath?.()||[],r=i[0]||n.target;ga=n;var o=0,a=ga===n&&n.__root;if(a){var l=i.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(r=i[o]||n.target,r!==e){os(n,"currentTarget",{configurable:!0,get(){return r||t}});var h=A,d=S;ue(null),xe(null);try{for(var u,f=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var g=r["__"+s];g!=null&&(!r.disabled||n.target===r)&&g.call(r,n)}catch(y){u?f.push(y):u=y}if(n.cancelBubble||p===e||p===null)break;r=p}if(u){for(let y of f)queueMicrotask(()=>{throw y});throw u}}finally{n.__root=e,delete n.currentTarget,ue(h),xe(d)}}}function Qd(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function yn(n,e){var t=S;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function ne(n,e){var t=(e&pd)!==0,s=(e&_d)!==0,i,r=!n.startsWith("<!>");return()=>{if(O)return yn(F,null),F;i===void 0&&(i=Qd(r?n:"<!>"+n),t||(i=qt(i)));var o=s||Jl?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=qt(o),l=o.lastChild;yn(a,l)}else yn(o,o);return o}}function Zs(){if(O)return yn(F,null),F;var n=document.createDocumentFragment(),e=document.createComment(""),t=je();return n.append(e,t),yn(e,t),n}function G(n,e){if(O){S.nodes_end=F,ki();return}n!==null&&n.before(e)}function Te(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function uo(n,e){return gc(n,e)}function Jd(n,e){vr(),e.intro=e.intro??!1;const t=e.target,s=O,i=F;try{for(var r=qt(t);r&&(r.nodeType!==Ln||r.data!==Ml);)r=Ze(r);if(!r)throw kn;$e(!0),ye(r);const o=gc(n,{...e,anchor:r});return $e(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==kn&&console.warn("Failed to hydrate: ",o),e.recover===!1&&od(),vr(),ec(t),$e(!1),uo(n,e)}finally{$e(s),ye(i)}}const an=new Map;function gc(n,{target:e,anchor:t,props:s={},events:i,context:r,intro:o=!0}){vr();var a=new Set,l=d=>{for(var u=0;u<d.length;u++){var f=d[u];if(!a.has(f)){a.add(f);var p=Kd(f);e.addEventListener(f,Kn,{passive:p});var g=an.get(f);g===void 0?(document.addEventListener(f,Kn,{passive:p}),an.set(f,1)):an.set(f,g+1)}}};l(Kr(_c)),yr.add(l);var c=void 0,h=Fd(()=>{var d=t??e.appendChild(je());return Id(d,{pending:()=>{}},u=>{if(r){Ri({});var f=Ee;f.c=r}if(i&&(s.$$events=i),O&&yn(u,null),c=n(u,s)||{},O&&(S.nodes_end=F,F===null||F.nodeType!==Ln||F.data!==eo))throw Si(),kn;r&&Ai()}),()=>{for(var u of a){e.removeEventListener(u,Kn);var f=an.get(u);--f===0?(document.removeEventListener(u,Kn),an.delete(u)):an.set(u,f)}yr.delete(l),d!==t&&d.parentNode?.removeChild(d)}});return wr.set(c,h),c}let wr=new WeakMap;function Xd(n,e){const t=wr.get(n);return t?(wr.delete(n),t(e)):Promise.resolve()}class Zd{anchor;#t=new Map;#e=new Map;#n=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=j;if(this.#t.has(e)){var t=this.#t.get(e),s=this.#e.get(t);if(s)lo(s);else{var i=this.#n.get(t);i&&(this.#e.set(t,i.effect),this.#n.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),s=i.effect)}for(const[r,o]of this.#t){if(this.#t.delete(r),r===e)break;const a=this.#n.get(o);a&&(he(a.effect),this.#n.delete(o))}for(const[r,o]of this.#e){if(r===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(r)){var c=document.createDocumentFragment();cc(o,c),c.append(je()),this.#n.set(r,{effect:o,fragment:c})}else he(o);this.#e.delete(r)};this.#s||!s?mn(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[s,i]of this.#n)t.includes(s)||(he(i.effect),this.#n.delete(s))};ensure(e,t){var s=j,i=tc();if(t&&!this.#e.has(e)&&!this.#n.has(e))if(i){var r=document.createDocumentFragment(),o=je();r.append(o),this.#n.set(e,{effect:Pe(()=>t(o)),fragment:r})}else this.#e.set(e,Pe(()=>t(this.anchor)));if(this.#t.set(s,e),i){for(const[a,l]of this.#e)a===e?s.skipped_effects.delete(l):s.skipped_effects.add(l);for(const[a,l]of this.#n)a===e?s.skipped_effects.delete(l.effect):s.skipped_effects.add(l.effect);s.oncommit(this.#l),s.ondiscard(this.#o)}else O&&(this.anchor=F),this.#l()}}function Se(n,e,t=!1){O&&ki();var s=new Zd(n),i=t?Sn:0;function r(o,a){if(O){const c=Fl(n)===Ti;if(o===c){var l=Ks();ye(l),s.anchor=l,$e(!1),s.ensure(o,a),$e(!0);return}}s.ensure(o,a)}oo(()=>{var o=!1;e((a,l=!0)=>{o=!0,r(l,a)}),o||r(!1,null)},i)}function ef(n,e,t){for(var s=n.items,i=[],r=e.length,o=0;o<r;o++)ao(e[o].e,i,!0);var a=r>0&&i.length===0&&t!==null;if(a){var l=t.parentNode;ec(l),l.append(t),s.clear(),Ke(n,e[0].prev,e[r-1].next)}ac(i,()=>{for(var c=0;c<r;c++){var h=e[c];a||(s.delete(h.k),Ke(n,h.prev,h.next)),he(h.e,!a)}})}function tf(n,e,t,s,i,r=null){var o=n,a={flags:e,items:new Map,first:null};{var l=n;o=O?ye(qt(l)):l.appendChild(je())}O&&ki();var c=null,h=!1,d=new Map,u=Rd(()=>{var y=t();return Pl(y)?y:y==null?[]:Kr(y)}),f,p;function g(){nf(p,f,a,d,o,i,e,s,t),r!==null&&(f.length===0?c?lo(c):c=Pe(()=>r(o)):c!==null&&mn(c,()=>{c=null}))}oo(()=>{p??=S,f=v(u);var y=f.length;if(h&&y===0)return;h=y===0;let N=!1;if(O){var m=Fl(o)===Ti;m!==(y===0)&&(o=Ks(),ye(o),$e(!1),N=!0)}if(O){for(var w=null,P,x=0;x<y;x++){if(F.nodeType===Ln&&F.data===eo){o=F,N=!0,$e(!1);break}var Z=f[x],B=s(Z,x);P=Er(F,a,w,null,Z,B,x,i,e,t),a.items.set(B,P),w=P}y>0&&ye(Ks())}if(O)y===0&&r&&(c=Pe(()=>r(o)));else if(tc()){var Q=new Set,b=j;for(x=0;x<y;x+=1){Z=f[x],B=s(Z,x);var W=a.items.get(B)??d.get(B);W?mc(W,Z,x):(P=Er(null,a,null,null,Z,B,x,i,e,t,!0),d.set(B,P)),Q.add(B)}for(const[M,$]of a.items)Q.has(M)||b.skipped_effects.add($.e);b.oncommit(g)}else g();N&&$e(!0),v(u)}),O&&(o=F)}function nf(n,e,t,s,i,r,o,a,l){var c=e.length,h=t.items,d=t.first,u=d,f,p=null,g=[],y=[],N,m,w,P;for(P=0;P<c;P+=1){if(N=e[P],m=a(N,P),w=h.get(m),w===void 0){var x=s.get(m);if(x!==void 0){s.delete(m),h.set(m,x);var Z=p?p.next:u;Ke(t,p,x),Ke(t,x,Z),Ki(x,Z,i),p=x}else{var B=u?u.e.nodes_start:i;p=Er(B,t,p,p===null?t.first:p.next,N,m,P,r,o,l)}h.set(m,p),g=[],y=[],u=p.next;continue}if(mc(w,N,P),(w.e.f&ke)!==0&&lo(w.e),w!==u){if(f!==void 0&&f.has(w)){if(g.length<y.length){var Q=y[0],b;p=Q.prev;var W=g[0],M=g[g.length-1];for(b=0;b<g.length;b+=1)Ki(g[b],Q,i);for(b=0;b<y.length;b+=1)f.delete(y[b]);Ke(t,W.prev,M.next),Ke(t,p,W),Ke(t,M,Q),u=Q,p=M,P-=1,g=[],y=[]}else f.delete(w),Ki(w,u,i),Ke(t,w.prev,w.next),Ke(t,w,p===null?t.first:p.next),Ke(t,p,w),p=w;continue}for(g=[],y=[];u!==null&&u.k!==m;)(u.e.f&ke)===0&&(f??=new Set).add(u),y.push(u),u=u.next;if(u===null)continue;w=u}g.push(w),p=w,u=w.next}if(u!==null||f!==void 0){for(var $=f===void 0?[]:Kr(f);u!==null;)(u.e.f&ke)===0&&$.push(u),u=u.next;var J=$.length;if(J>0){var ge=c===0?i:null;ef(t,$,ge)}}n.first=t.first&&t.first.e,n.last=p&&p.e;for(var X of s.values())he(X.e);s.clear()}function mc(n,e,t,s){as(n.v,e),n.i=t}function Er(n,e,t,s,i,r,o,a,l,c,h){var d=(l&hd)!==0,u=(l&fd)===0,f=d?u?so(i,!1,!1):jt(i):i,p=(l&dd)===0?o:jt(o),g={i:p,v:f,k:r,a:null,e:null,prev:t,next:s};try{if(n===null){var y=document.createDocumentFragment();y.append(n=je())}return g.e=Pe(()=>a(n,f,p,c),O),g.e.prev=t&&t.e,g.e.next=s&&s.e,t===null?h||(e.first=g):(t.next=g,t.e.next=g.e),s!==null&&(s.prev=g,s.e.prev=g.e),g}finally{}}function Ki(n,e,t){for(var s=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,r=n.e.nodes_start;r!==null&&r!==s;){var o=Ze(r);i.before(r),r=o}}function Ke(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ho(n,e){Ud(()=>{var t=n.getRootNode(),s=t.host?t:t.head??t.ownerDocument.head;if(!s.querySelector("#"+e.hash)){const i=document.createElement("style");i.id=e.hash,i.textContent=e.code,s.appendChild(i)}})}function vc(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=vc(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function sf(){for(var n,e,t=0,s="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=vc(n))&&(s&&(s+=" "),s+=e);return s}function Yi(n){return typeof n=="object"?sf(n):n??""}function rf(n,e,t){var s=n==null?"":""+n;return s=s?s+" "+e:e,s===""?null:s}function Qi(n,e,t,s,i,r){var o=n.__className;if(O||o!==t||o===void 0){var a=rf(t,s);(!O||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):n.className=a),n.__className=t}return r}const of=Symbol("is custom element"),af=Symbol("is html");function Ji(n){if(O){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var s=n.value;ei(n,"value",null),n.value=s}if(n.hasAttribute("checked")){var i=n.checked;ei(n,"checked",null),n.checked=i}}};n.__on_r=t,ys(t),nc()}}function ei(n,e,t,s){var i=lf(n);O&&(i[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(n[ed]=t),t==null?n.removeAttribute(e):typeof t!="string"&&yc(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function ma(n,e,t){var s=A,i=S;let r=O;O&&$e(!1),ue(null),xe(null);try{e!=="style"&&(br.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?yc(n).includes(e):t&&typeof t=="object")?n[e]=t:ei(n,e,t==null?t:String(t))}finally{ue(s),xe(i),r&&$e(!0)}}function lf(n){return n.__attributes??={[of]:n.nodeName.includes("-"),[af]:n.namespaceURI===gd}}var br=new Map;function yc(n){var e=n.getAttribute("is")||n.nodeName,t=br.get(e);if(t)return t;br.set(e,t=[]);for(var s,i=n,r=Element.prototype;r!==i;){s=Gh(i);for(var o in s)s[o].set&&t.push(o);i=Ol(i)}return t}function Xi(n,e,t=e){var s=new WeakSet;Pd(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=Zi(n)?er(r):r,t(r),j!==null&&s.add(j),await jd(),r!==(r=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=r??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(O&&n.defaultValue!==n.value||Es(e)==null&&n.value)&&(t(Zi(n)?er(n.value):n.value),j!==null&&s.add(j)),ro(()=>{var i=e();if(n===document.activeElement){var r=Fs??j;if(s.has(r))return}Zi(n)&&i===er(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Zi(n){var e=n.type;return e==="number"||e==="range"}function er(n){return n===""?null:+n}function wc(n,e,t){if(n==null)return e(void 0),gn;const s=Es(()=>n.subscribe(e,t));return s.unsubscribe?()=>s.unsubscribe():s}const ln=[];function Ec(n,e=gn){let t=null;const s=new Set;function i(a){if($l(n,a)&&(n=a,t)){const l=!ln.length;for(const c of s)c[1](),ln.push(c,n);if(l){for(let c=0;c<ln.length;c+=2)ln[c][0](ln[c+1]);ln.length=0}}}function r(a){i(a(n))}function o(a,l=gn){const c=[a,l];return s.add(c),s.size===1&&(t=e(i,r)||gn),a(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}function cf(n){let e;return wc(n,t=>e=t)(),e}let Ir=Symbol();function uf(n,e,t){const s=t[e]??={store:null,source:so(void 0),unsubscribe:gn};if(s.store!==n&&!(Ir in t))if(s.unsubscribe(),s.store=n??null,n==null)s.source.v=void 0,s.unsubscribe=gn;else{var i=!0;s.unsubscribe=wc(n,r=>{i?s.source.v=r:C(s.source,r)}),i=!1}return n&&Ir in t?cf(n):v(s.source)}function hf(){const n={};function e(){io(()=>{for(var t in n)n[t].unsubscribe();os(n,Ir,{enumerable:!1,value:!0})})}return[n,e]}function va(n,e,t,s){var i=s,r=!0,o=()=>(r&&(r=!1,i=s),i),a;a=n[e],a===void 0&&s!==void 0&&(a=o());var l;l=()=>{var u=n[e];return u===void 0?o():(r=!0,u)};var c=!1,h=to(()=>(c=!1,l())),d=S;return(function(u,f){if(arguments.length>0){const p=f?v(h):u;return C(h,p),c=!0,i!==void 0&&(i=p),u}return nn&&c||(d.f&rt)!==0?h.v:v(h)})}function df(n){return new ff(n)}class ff{#t;#e;constructor(e){var t=new Map,s=(r,o)=>{var a=so(o,!1,!1);return t.set(r,a),a};const i=new Proxy({...e.props||{},$$events:{}},{get(r,o){return v(t.get(o)??s(o,Reflect.get(r,o)))},has(r,o){return o===Zh?!0:(v(t.get(o)??s(o,Reflect.get(r,o))),Reflect.has(r,o))},set(r,o,a){return C(t.get(o)??s(o,a),a),Reflect.set(r,o,a)}});this.#e=(e.hydrate?Jd:uo)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Ys(),this.#t=i.$$events;for(const r of Object.keys(this.#e))r==="$set"||r==="$destroy"||r==="$on"||os(this,r,{get(){return this.#e[r]},set(o){this.#e[r]=o},enumerable:!0});this.#e.$set=r=>{Object.assign(i,r)},this.#e.$destroy=()=>{Xd(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const s=(...i)=>t.call(this,...i);return this.#t[e].push(s),()=>{this.#t[e]=this.#t[e].filter(i=>i!==s)}}$destroy(){this.#e.$destroy()}}let bc;typeof HTMLElement=="function"&&(bc=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const s=this.$$c.$on(n,e);this.$$l_u.set(e,s)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const s=this.$$l_u.get(e);s&&(s(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return r=>{const o=document.createElement("slot");i!=="default"&&(o.name=i),G(r,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},s=pf(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=e(i),t.default=!0):t[i]=e(i));for(const i of this.attributes){const r=this.$$g_p(i.name);r in this.$$d||(this.$$d[r]=$s(r,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=df({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=Ld(()=>{ro(()=>{this.$$r=!0;for(const i of js(this.$$c)){if(!this.$$p_d[i]?.reflect)continue;this.$$d[i]=this.$$c[i];const r=$s(i,this.$$d[i],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,r)}this.$$r=!1})});for(const i in this.$$l)for(const r of this.$$l[i]){const o=this.$$c.$on(i,r);this.$$l_u.set(r,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=$s(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return js(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function $s(n,e,t,s){const i=t[n]?.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!t[n])return e;if(s==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function pf(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function fo(n,e,t,s,i,r){let o=class extends bc{constructor(){super(n,t,i),this.$$p_d=e}static get observedAttributes(){return js(e).map(a=>(e[a].attribute||a).toLowerCase())}};return js(e).forEach(a=>{os(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=$s(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=_n(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),s.forEach(a=>{os(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Ic(n){Ee===null&&xl(),Md(()=>{const e=Es(n);if(typeof e=="function")return e})}function _f(n){Ee===null&&xl(),Ic(()=>()=>Es(n))}const gf="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(gf);const mf=()=>{};var ya={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+Cc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),s.push(t[h],t[d],t[u],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Tc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new yf;const u=r<<2|a>>4;if(s.push(u),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const p=c<<6&192|d;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sc=function(n){const e=Tc(n);return po.encodeByteArray(e,!0)},ti=function(n){return Sc(n).replace(/\./g,"")},ni=function(n){try{return po.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){return kc(void 0,n)}function kc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ef(t)||(n[t]=kc(n[t],e[t]));return n}function Ef(n){return n!=="__proto__"}/**
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
 */const If=()=>bf().__FIREBASE_DEFAULTS__,Cf=()=>{if(typeof process>"u"||typeof ya>"u")return;const n=ya.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ni(n[1]);return e&&JSON.parse(e)},_o=()=>{try{return mf()||If()||Cf()||Tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rc=n=>_o()?.emulatorHosts?.[n],Sf=n=>{const e=Rc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ac=()=>_o()?.config,Nc=n=>_o()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Un(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function kf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ti(JSON.stringify(t)),ti(JSON.stringify(o)),""].join(".")}const Zn={};function Rf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zn))Zn[e]?n.emulator.push(e):n.prod.push(e);return n}function Af(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wa=!1;function Oc(n,e){if(typeof window>"u"||typeof document>"u"||!Un(window.location.host)||Zn[n]===e||Zn[n]||wa)return;Zn[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",r=Rf().prod.length>0;function o(){const u=document.getElementById(s);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{wa=!0,o()},u}function h(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=Af(s),f=t("text"),p=document.getElementById(f)||document.createElement("span"),g=t("learnmore"),y=document.getElementById(g)||document.createElement("a"),N=t("preprendIcon"),m=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const w=u.element;a(w),h(y,g);const P=c();l(m,N),w.append(m,p,y,P),document.body.appendChild(w)}r?(p.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Nf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Of(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Df(){return Cc.NODE_ADMIN===!0}function xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Mf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="FirebaseError";class Dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lf,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ff(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,s)}}function Ff(n,e){return n.replace(Uf,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Uf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=us(ni(r[0])||""),t=us(ni(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},$f=function(n){const e=xc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Wf=function(n){const e=xc(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Cr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function si(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Gt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ea(r)&&Ea(o)){if(!Gt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ea(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Qn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(i<<5|i>>>27)+c+l+h+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hf(n,e){const t=new Vf(n,e);return t.subscribe.bind(t)}class Vf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");zf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=tr),i.error===void 0&&(i.error=tr),i.complete===void 0&&(i.complete=tr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function tr(){}function Mc(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Oi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class qf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new go;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kf(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gf(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gf(n){return n===Ut?void 0:n}function Kf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Qf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Jf=H.INFO,Xf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Zf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Xf[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=Jf,this._logHandler=Zf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const ep=(n,e)=>e.some(t=>n instanceof t);let ba,Ia;function tp(){return ba||(ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function np(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lc=new WeakMap,Tr=new WeakMap,Fc=new WeakMap,nr=new WeakMap,yo=new WeakMap;function sp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(St(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Lc.set(t,n)}).catch(()=>{}),yo.set(e,n),e}function ip(n){if(Tr.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Tr.set(n,e)}let Sr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rp(n){Sr=n(Sr)}function op(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(sr(this),e,...t);return Fc.set(s,e.sort?e.sort():[e]),St(s)}:np().includes(n)?function(...e){return n.apply(sr(this),e),St(Lc.get(this))}:function(...e){return St(n.apply(sr(this),e))}}function ap(n){return typeof n=="function"?op(n):(n instanceof IDBTransaction&&ip(n),ep(n,tp())?new Proxy(n,Sr):n)}function St(n){if(n instanceof IDBRequest)return sp(n);if(nr.has(n))return nr.get(n);const e=ap(n);return e!==n&&(nr.set(n,e),yo.set(e,n)),e}const sr=n=>yo.get(n);function lp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=St(o);return s&&o.addEventListener("upgradeneeded",l=>{s(St(o.result),l.oldVersion,l.newVersion,St(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cp=["get","getKey","getAll","getAllKeys","count"],up=["put","add","delete","clear"],ir=new Map;function Ca(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ir.get(e))return ir.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=up.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cp.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ir.set(e,r),r}rp(n=>({...n,get:(e,t,s)=>Ca(e,t)||n.get(e,t,s),has:(e,t)=>!!Ca(e,t)||n.has(e,t)}));/**
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
 */class hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dp(n){return n.getComponent()?.type==="VERSION"}const kr="@firebase/app",Ta="0.14.5";/**
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
 */const ct=new vo("@firebase/app"),fp="@firebase/app-compat",pp="@firebase/analytics-compat",_p="@firebase/analytics",gp="@firebase/app-check-compat",mp="@firebase/app-check",vp="@firebase/auth",yp="@firebase/auth-compat",wp="@firebase/database",Ep="@firebase/data-connect",bp="@firebase/database-compat",Ip="@firebase/functions",Cp="@firebase/functions-compat",Tp="@firebase/installations",Sp="@firebase/installations-compat",kp="@firebase/messaging",Rp="@firebase/messaging-compat",Ap="@firebase/performance",Np="@firebase/performance-compat",Pp="@firebase/remote-config",Op="@firebase/remote-config-compat",Dp="@firebase/storage",xp="@firebase/storage-compat",Mp="@firebase/firestore",Lp="@firebase/ai",Fp="@firebase/firestore-compat",Up="firebase",$p="12.5.0";/**
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
 */const Rr="[DEFAULT]",Wp={[kr]:"fire-core",[fp]:"fire-core-compat",[_p]:"fire-analytics",[pp]:"fire-analytics-compat",[mp]:"fire-app-check",[gp]:"fire-app-check-compat",[vp]:"fire-auth",[yp]:"fire-auth-compat",[wp]:"fire-rtdb",[Ep]:"fire-data-connect",[bp]:"fire-rtdb-compat",[Ip]:"fire-fn",[Cp]:"fire-fn-compat",[Tp]:"fire-iid",[Sp]:"fire-iid-compat",[kp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Ap]:"fire-perf",[Np]:"fire-perf-compat",[Pp]:"fire-rc",[Op]:"fire-rc-compat",[Dp]:"fire-gcs",[xp]:"fire-gcs-compat",[Mp]:"fire-fst",[Fp]:"fire-fst-compat",[Lp]:"fire-vertex","fire-js":"fire-js",[Up]:"fire-js-all"};/**
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
 */const ii=new Map,Bp=new Map,Ar=new Map;function Sa(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(Ar.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Ar.set(e,n);for(const t of ii.values())Sa(t,n);for(const t of Bp.values())Sa(t,n);return!0}function wo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Hp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new bs("app","Firebase",Hp);/**
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
 */class Vp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Wn=$p;function Uc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Rr,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=Ac()),!t)throw kt.create("no-options");const r=ii.get(i);if(r){if(Gt(t,r.options)&&Gt(s,r.config))return r;throw kt.create("duplicate-app",{appName:i})}const o=new Yf(i);for(const l of Ar.values())o.addComponent(l);const a=new Vp(t,s,o);return ii.set(i,a),a}function $c(n=Rr){const e=ii.get(n);if(!e&&n===Rr&&Ac())return Uc();if(!e)throw kt.create("no-app",{appName:n});return e}function Rt(n,e,t){let s=Wp[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(o.join(" "));return}Pn(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zp="firebase-heartbeat-database",jp=1,hs="firebase-heartbeat-store";let rr=null;function Wc(){return rr||(rr=lp(zp,jp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),rr}async function qp(n){try{const t=(await Wc()).transaction(hs),s=await t.objectStore(hs).get(Bc(n));return await t.done,s}catch(e){if(e instanceof Dt)ct.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e?.message});ct.warn(t.message)}}}async function ka(n,e){try{const s=(await Wc()).transaction(hs,"readwrite");await s.objectStore(hs).put(e,Bc(n)),await s.done}catch(t){if(t instanceof Dt)ct.warn(t.message);else{const s=kt.create("idb-set",{originalErrorMessage:t?.message});ct.warn(s.message)}}}function Bc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gp=1024,Kp=30;class Yp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ra();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Kp){const i=Xp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ct.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ra(),{heartbeatsToSend:t,unsentEntries:s}=Qp(this._heartbeatsCache.heartbeats),i=ti(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ct.warn(e),""}}}function Ra(){return new Date().toISOString().substring(0,10)}function Qp(n,e=Gp){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Aa(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Aa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?Mf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Aa(n){return ti(JSON.stringify({version:2,heartbeats:n})).length}function Xp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Zp(n){Pn(new Kt("platform-logger",e=>new hp(e),"PRIVATE")),Pn(new Kt("heartbeat",e=>new Yp(e),"PRIVATE")),Rt(kr,Ta,n),Rt(kr,Ta,"esm2020"),Rt("fire-js","")}Zp("");var e_="firebase",t_="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(e_,t_,"app");function Hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n_=Hc,Vc=new bs("auth","Firebase",Hc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new vo("@firebase/auth");function s_(n,...e){ri.logLevel<=H.WARN&&ri.warn(`Auth (${Wn}): ${n}`,...e)}function Ws(n,...e){ri.logLevel<=H.ERROR&&ri.error(`Auth (${Wn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,...e){throw Eo(n,...e)}function Je(n,...e){return Eo(n,...e)}function zc(n,e,t){const s={...n_(),[e]:t};return new bs("auth","Firebase",s).create(e,{appName:n.name})}function at(n){return zc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eo(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Vc.create(n,...e)}function E(n,e,...t){if(!n)throw Eo(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ws(e),new Error(e)}function ut(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return typeof self<"u"&&self.location?.href||""}function i_(){return Na()==="http:"||Na()==="https:"}function Na(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i_()||Pf()||"connection"in navigator)?navigator.onLine:!0}function o_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=mo()||Dc()}get(){return r_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c_=new Is(3e4,6e4);function xt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gt(n,e,t,s,i={}){return qc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$n({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...r};return Nf()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&Un(n.emulatorConfig.host)&&(c.credentials="include"),jc.fetch()(await Gc(n,n.config.apiHost,t,a),c)})}async function qc(n,e,t){n._canInitEmulator=!1;const s={...a_,...e};try{const i=new h_(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw xs(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zc(n,h,c);qe(n,h)}}catch(i){if(i instanceof Dt)throw i;qe(n,"network-request-failed",{message:String(i)})}}async function Cs(n,e,t,s,i={}){const r=await gt(n,e,t,s,i);return"mfaPendingCredential"in r&&qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Gc(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?bo(n.config,i):`${n.config.apiScheme}://${i}`;return l_.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function u_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),c_.get())})}}function xs(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Je(n,e,s);return i.customData._tokenResponse=t,i}function Pa(n){return n!==void 0&&n.enterprise!==void 0}class d_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return u_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function f_(n,e){return gt(n,"GET","/v2/recaptchaConfig",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function oi(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function __(n,e=!1){const t=Ie(n),s=await t.getIdToken(e),i=Io(s);E(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:es(or(i.auth_time)),issuedAtTime:es(or(i.iat)),expirationTime:es(or(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function or(n){return Number(n)*1e3}function Io(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const i=ni(t);return i?JSON.parse(i):(Ws("Failed to decode base64 JWT payload"),null)}catch(i){return Ws("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Oa(n){const e=Io(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dt&&g_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function g_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ai(n){const e=n.auth,t=await n.getIdToken(),s=await On(n,oi(e,{idToken:t}));E(s?.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=i.providerUserInfo?.length?Kc(i.providerUserInfo):[],o=y_(n.providerData,r),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!o?.length,c=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pr(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function v_(n){const e=Ie(n);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y_(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Kc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(n,e){const t=await qc(n,{},async()=>{const s=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Gc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&Un(n.emulatorConfig.host)&&(l.credentials="include"),jc.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function E_(n,e){return gt(n,"POST","/v2/accounts:revokeToken",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){E(e.length!==0,"internal-error");const t=Oa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await w_(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new wn;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(E(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Be{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new m_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return __(this,e)}reload(){return v_(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await On(this,p_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:f,providerData:p,stsTokenManager:g}=t;E(d&&g,e,"internal-error");const y=wn.fromJSON(this.name,g);E(typeof d=="string",e,"internal-error"),yt(s,e.name),yt(i,e.name),E(typeof u=="boolean",e,"internal-error"),E(typeof f=="boolean",e,"internal-error"),yt(r,e.name),yt(o,e.name),yt(a,e.name),yt(l,e.name),yt(c,e.name),yt(h,e.name);const N=new Be({uid:d,auth:e,email:i,emailVerified:u,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:h});return p&&Array.isArray(p)&&(N.providerData=p.map(m=>({...m}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,t,s=!1){const i=new wn;i.updateFromServerResponse(t);const r=new Be({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ai(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];E(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Kc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,a=new wn;a.updateFromIdToken(s);const l=new Be({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Pr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Map;function st(n){ut(n instanceof Function,"Expected a class definition");let e=Da.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Da.set(n,e),e)}/**
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
 */class Yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yc.type="NONE";const xa=Yc;/**
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
 */function Bs(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Bs(this.userKey,i.apiKey,r),this.fullPersistenceKey=Bs("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oi(this.auth,{idToken:e}).catch(()=>{});return t?Be._fromGetAccountInfoResponse(this.auth,t,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new En(st(xa),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||st(xa);const o=Bs(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const u=await oi(e,{idToken:h}).catch(()=>{});if(!u)break;d=await Be._fromGetAccountInfoResponse(e,u,h)}else d=Be._fromJSON(e,h);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new En(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new En(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tu(e))return"Blackberry";if(nu(e))return"Webos";if(Jc(e))return"Safari";if((e.includes("chrome/")||Xc(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Qc(n=_e()){return/firefox\//i.test(n)}function Jc(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xc(n=_e()){return/crios\//i.test(n)}function Zc(n=_e()){return/iemobile/i.test(n)}function eu(n=_e()){return/android/i.test(n)}function tu(n=_e()){return/blackberry/i.test(n)}function nu(n=_e()){return/webos/i.test(n)}function Co(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function b_(n=_e()){return Co(n)&&!!window.navigator?.standalone}function I_(){return Of()&&document.documentMode===10}function su(n=_e()){return Co(n)||eu(n)||nu(n)||tu(n)||/windows phone/i.test(n)||Zc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,e=[]){let t;switch(n){case"Browser":t=Ma(_e());break;case"Worker":t=`${Ma(_e())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wn}/${s}`}/**
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
 */class C_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function T_(n,e={}){return gt(n,"GET","/v2/passwordPolicy",xt(n,e))}/**
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
 */const S_=6;class k_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??S_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new La(this),this.idTokenSubscription=new La(this),this.beforeStateQueue=new C_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await En.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oi(this,{idToken:e}),s=await Be._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Oe(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(at(this));const t=e?Ie(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T_(this),t=new k_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await E_(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&s_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function sn(n){return Ie(n)}class La{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hf(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A_(n){Di=n}function ru(n){return Di.loadJS(n)}function N_(){return Di.recaptchaEnterpriseScript}function P_(){return Di.gapiScript}function O_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class D_{constructor(){this.enterprise=new x_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const M_="recaptcha-enterprise",ou="NO_RECAPTCHA";class L_{constructor(e){this.type=M_,this.auth=sn(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{f_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new d_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Pa(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(ou)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new D_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Pa(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=N_();l.length!==0&&(l+=a),ru(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fa(n,e,t,s=!1,i=!1){const r=new L_(n);let o;if(i)o=ou;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Or(n,e,t,s,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Fa(n,e,t,t==="getOobCode");return s(n,r)}else return s(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fa(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,e){const t=wo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Gt(r,e??{}))return i;qe(i,"already-initialized")}return t.initialize({options:e})}function U_(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(st);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function $_(n,e,t){const s=sn(n);E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=au(e),{host:o,port:a}=W_(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){E(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),E(Gt(c,s.config.emulator)&&Gt(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Un(o)?(Pc(`${r}//${o}${l}`),Oc("Auth",!0)):B_()}function au(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function W_(n){const e=au(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ua(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ua(o)}}}function Ua(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function B_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function H_(n,e){return gt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(n,e){return Cs(n,"POST","/v1/accounts:signInWithPassword",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}async function j_(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends To{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ds(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ds(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Or(e,t,"signInWithPassword",V_);case"emailLink":return z_(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Or(e,s,"signUpPassword",H_);case"emailLink":return j_(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n,e){return Cs(n,"POST","/v1/accounts:signInWithIdp",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="http://localhost";class Yt extends To{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Yt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$n(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function K_(n){const e=Yn(Qn(n)).link,t=e?Yn(Qn(e)).deep_link_id:null,s=Yn(Qn(n)).deep_link_id;return(s?Yn(Qn(s)).link:null)||s||t||e||n}class So{constructor(e){const t=Yn(Qn(e)),s=t.apiKey??null,i=t.oobCode??null,r=G_(t.mode??null);E(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=K_(e);try{return new So(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(e,t){return ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=So.parseLink(t);return E(s,"argument-error"),ds._fromEmailAndCode(e,s.code,s.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ts extends lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ts{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Et.credential(t,s)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ts{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Ts{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return It.credential(t,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e){return Cs(n,"POST","/v1/accounts:signUp",xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Be._fromIdTokenResponse(e,s,i),o=$a(s);return new Qt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=$a(s);return new Qt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function $a(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Dt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,li.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new li(e,t,s,i)}}function cu(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(n,r,e,s):r})}async function Q_(n,e,t=!1){const s=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",s)}/**
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
 */async function J_(n,e,t=!1){const{auth:s}=n;if(Oe(s.app))return Promise.reject(at(s));const i="reauthenticate";try{const r=await On(n,cu(s,i,e,n),t);E(r.idToken,s,"internal-error");const o=Io(r.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Qt._forOperation(n,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&qe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const s="signIn",i=await cu(n,s,e),r=await Qt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function X_(n,e){return uu(sn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(n){const e=sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Z_(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const s=sn(n),o=await Or(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hu(n),l}),a=await Qt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function eg(n,e,t){return Oe(n.app)?Promise.reject(at(n)):X_(Ie(n),Bn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hu(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(n,e){return gt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ie(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await On(s,tg(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function sg(n,e,t,s){return Ie(n).onIdTokenChanged(e,t,s)}function ig(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function rg(n,e,t,s){return Ie(n).onAuthStateChanged(e,t,s)}function og(n){return Ie(n).signOut()}const ci="__sak";/**
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
 */class du{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ci,"1"),this.storage.removeItem(ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=1e3,lg=10;class fu extends du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=su(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);I_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fu.type="LOCAL";const cg=fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pu.type="SESSION";const _u=pu;/**
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
 */function ug(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new xi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await ug(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ko("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function dg(n){Xe().location.href=n}/**
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
 */function gu(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function fg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pg(){return navigator?.serviceWorker?.controller||null}function _g(){return gu()?self:null}/**
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
 */const mu="firebaseLocalStorageDb",gg=1,ui="firebaseLocalStorage",vu="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mi(n,e){return n.transaction([ui],e?"readwrite":"readonly").objectStore(ui)}function mg(){const n=indexedDB.deleteDatabase(mu);return new Ss(n).toPromise()}function Dr(){const n=indexedDB.open(mu,gg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ui,{keyPath:vu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ui)?e(s):(s.close(),await mg(),e(await Dr()))})})}async function Wa(n,e,t){const s=Mi(n,!0).put({[vu]:e,value:t});return new Ss(s).toPromise()}async function vg(n,e){const t=Mi(n,!1).get(e),s=await new Ss(t).toPromise();return s===void 0?null:s.value}function Ba(n,e){const t=Mi(n,!0).delete(e);return new Ss(t).toPromise()}const yg=800,wg=3;class yu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xi._getInstance(_g()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new hg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dr();return await Wa(e,ci,"1"),await Ba(e,ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wa(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>vg(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ba(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Mi(i,!1).getAll();return new Ss(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yu.type="LOCAL";const Eg=yu;new Is(3e4,6e4);/**
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
 */function bg(n,e){return e?st(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ro extends To{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ig(n){return uu(n.auth,new Ro(n),n.bypassAuthState)}function Cg(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),J_(t,new Ro(n),n.bypassAuthState)}async function Tg(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Q_(t,new Ro(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ig;case"linkViaPopup":case"linkViaRedirect":return Tg;case"reauthViaPopup":case"reauthViaRedirect":return Cg;default:qe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Is(2e3,1e4);class dn extends wu{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sg.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="pendingRedirect",Hs=new Map;class Rg extends wu{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const s=await Ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ag(n,e){const t=Og(e),s=Pg(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Ng(n,e){Hs.set(n._key(),e)}function Pg(n){return st(n._redirectPersistence)}function Og(n){return Bs(kg,n.config.apiKey,n.name)}async function Dg(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const s=sn(n),i=bg(s,e),o=await new Rg(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=600*1e3;class Mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Eu(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ha(e))}saveEventToCache(e){this.cachedEventUids.add(Ha(e)),this.lastProcessedEventTime=Date.now()}}function Ha(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Eu({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Lg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Eu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$g=/^https?/;async function Wg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fg(n);for(const t of e)try{if(Bg(t))return}catch{}qe(n,"unauthorized-domain")}function Bg(n){const e=Nr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!$g.test(t))return!1;if(Ug.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Hg=new Is(3e4,6e4);function Va(){const n=Xe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vg(n){return new Promise((e,t)=>{function s(){Va(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Va(),t(Je(n,"network-request-failed"))},timeout:Hg.get()})}if(Xe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Xe().gapi?.load)s();else{const i=O_("iframefcb");return Xe()[i]=()=>{gapi.load?s():t(Je(n,"network-request-failed"))},ru(`${P_()}?onload=${i}`).catch(r=>t(r))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function zg(n){return Vs=Vs||Vg(n),Vs}/**
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
 */const jg=new Is(5e3,15e3),qg="__/auth/iframe",Gg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qg(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bo(e,Gg):`https://${n.config.authDomain}/${qg}`,s={apiKey:e.apiKey,appName:n.name,v:Wn},i=Yg.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${$n(s).slice(1)}`}async function Jg(n){const e=await zg(n),t=Xe().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:Qg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),a=Xe().setTimeout(()=>{r(o)},jg.get());function l(){Xe().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zg=500,em=600,tm="_blank",nm="http://localhost";class za{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sm(n,e,t,s=Zg,i=em){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...Xg,width:s.toString(),height:i.toString(),top:r,left:o},c=_e().toLowerCase();t&&(a=Xc(c)?tm:t),Qc(c)&&(e=e||nm,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[f,p])=>`${u}${f}=${p},`,"");if(b_(c)&&a!=="_self")return im(e||"",a),new za(null);const d=window.open(e||"",a,h);E(d,n,"popup-blocked");try{d.focus()}catch{}return new za(d)}function im(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const rm="__/auth/handler",om="emulator/auth/handler",am=encodeURIComponent("fac");async function ja(n,e,t,s,i,r){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Wn,eventId:i};if(e instanceof lu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Cr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ts){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${am}=${encodeURIComponent(l)}`:"";return`${lm(n)}?${$n(a).slice(1)}${c}`}function lm({config:n}){return n.emulator?bo(n,om):`https://${n.authDomain}/${rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="webStorageSupport";class cm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Dg,this._overrideRedirectResult=Ng}async _openPopup(e,t,s,i){ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await ja(e,t,s,Nr(),i);return sm(e,r,ko())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await ja(e,t,s,Nr(),i);return dg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Jg(e),s=new Mg(e);return t.register("authEvent",i=>(E(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ar,{type:ar},i=>{const r=i?.[0]?.[ar];r!==void 0&&t(!!r),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return su()||Jc()||Co()}}const um=cm;var qa="@firebase/auth",Ga="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fm(n){Pn(new Kt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(n)},c=new R_(s,i,r,l);return U_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Pn(new Kt("auth-internal",e=>{const t=sn(e.getProvider("auth").getImmediate());return(s=>new hm(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(qa,Ga,dm(n)),Rt(qa,Ga,"esm2020")}/**
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
 */const pm=300,_m=Nc("authIdTokenMaxAge")||pm;let Ka=null;const gm=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>_m)return;const i=t?.token;Ka!==i&&(Ka=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mm(n=$c()){const e=wo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=F_(n,{popupRedirectResolver:um,persistence:[Eg,cg,_u]}),s=Nc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=gm(r.toString());ig(t,o,()=>o(t.currentUser)),sg(t,a=>o(a))}}const i=Rc("auth");return i&&$_(t,`http://${i}`),t}function vm(){return document.getElementsByTagName("head")?.[0]??document}A_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Je("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",vm().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fm("Browser");var Ya={};const Qa="@firebase/database",Ja="1.1.0";/**
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
 */let bu="";function ym(n){bu=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:us(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wm(e)}}catch{}return new Em},Bt=Iu("localStorage"),bm=Iu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new vo("@firebase/database"),Im=(function(){let n=1;return function(){return n++}})(),Cu=function(n){const e=jf(n),t=new Bf;t.update(e);const s=t.digest();return po.encodeByteArray(s)},ks=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ks.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let ts=null,Xa=!0;const Cm=function(n,e){_(!0,"Can't turn on custom loggers persistently."),In.logLevel=H.VERBOSE,ts=In.log.bind(In)},ae=function(...n){if(Xa===!0&&(Xa=!1,ts===null&&bm.get("logging_enabled")===!0&&Cm()),ts){const e=ks.apply(null,n);ts(e)}},Rs=function(n){return function(...e){ae(n,...e)}},xr=function(...n){const e="FIREBASE INTERNAL ERROR: "+ks(...n);In.error(e)},ht=function(...n){const e=`FIREBASE FATAL ERROR: ${ks(...n)}`;throw In.error(e),new Error(e)},Re=function(...n){const e="FIREBASE WARNING: "+ks(...n);In.warn(e)},Tm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tu=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sm=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dn="[MIN_NAME]",Jt="[MAX_NAME]",Hn=function(n,e){if(n===e)return 0;if(n===Dn||e===Jt)return-1;if(e===Dn||n===Jt)return 1;{const t=Za(n),s=Za(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},km=function(n,e){return n===e?0:n<e?-1:1},zn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},Ao=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=re(e[s]),t+=":",t+=Ao(n[e[s]]);return t+="}",t},Su=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function be(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ku=function(n){_(!Tu(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Rm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Am=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Nm(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Pm=new RegExp("^-?(0*)\\d{1,10}$"),Om=-2147483648,Dm=2147483647,Za=function(n){if(Pm.test(n)){const e=Number(n);if(e>=Om&&e<=Dm)return e}return null},As=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Re("Exception was thrown by user callback.",t),e},Math.floor(0))}},xm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Mm{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Oe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="5",Ru="v",Au="s",Nu="r",Pu="f",Ou=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Du="ls",xu="p",Mr="ac",Mu="websocket",Lu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Uu(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Mu)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Lu)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fm(n)&&(t.ns=n.namespace);const i=[];return be(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.counters_={}}incrementCounter(e,t=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return wf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={},cr={};function Po(n){const e=n.toString();return lr[e]||(lr[e]=new Um),lr[e]}function $m(n,e){const t=n.toString();return cr[t]||(cr[t]=e()),cr[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&As(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="start",Bm="close",Hm="pLPCommand",Vm="pRTLPCB",$u="id",Wu="pw",Bu="ser",zm="cb",jm="seg",qm="ts",Gm="d",Km="dframe",Hu=1870,Vu=30,Ym=Hu-Vu,Qm=25e3,Jm=3e4;class fn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=Po(t),this.urlFn=l=>(this.appCheckToken&&(l[Mr]=this.appCheckToken),Uu(t,Lu,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jm)),Sm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oo((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===el)this.id=a,this.password=l;else if(o===Bm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[el]="t",s[Bu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ru]=No,this.transportSessionId&&(s[Au]=this.transportSessionId),this.lastSessionId&&(s[Du]=this.lastSessionId),this.applicationId&&(s[xu]=this.applicationId),this.appCheckToken&&(s[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ou.test(location.hostname)&&(s[Nu]=Pu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Rm()&&!Am()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Sc(t),i=Su(s,Ym);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Km]="t",s[$u]=e,s[Wu]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Oo{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Im(),window[Hm+this.uniqueCallbackIdentifier]=e,window[Vm+this.uniqueCallbackIdentifier]=t,this.myIFrame=Oo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ae("frame writing exception"),a.stack&&ae(a.stack),ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$u]=this.myID,e[Wu]=this.myPW,e[Bu]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vu+s.length<=Hu;){const o=this.pendingSegs.shift();s=s+"&"+jm+i+"="+o.seg+"&"+qm+i+"="+o.ts+"&"+Gm+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Qm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=16384,Zm=45e3;let hi=null;typeof MozWebSocket<"u"?hi=MozWebSocket:typeof WebSocket<"u"&&(hi=WebSocket);class Ue{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=Po(t),this.connURL=Ue.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ru]=No,typeof location<"u"&&location.hostname&&Ou.test(location.hostname)&&(o[Nu]=Pu),t&&(o[Au]=t),s&&(o[Du]=s),i&&(o[Mr]=i),r&&(o[xu]=r),Uu(e,Mu,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{let s;Df(),this.mySock=new hi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hi!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=us(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Su(t,Xm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zm))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static get ALL_TRANSPORTS(){return[fn,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ue&&Ue.isAvailable();let s=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of fs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=6e4,tv=5e3,nv=10*1024,sv=100*1024,ur="t",tl="d",iv="s",nl="r",rv="e",sl="o",il="a",rl="n",ol="p",ov="h";class av{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new fs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ur in e){const t=e[ur];t===il?this.upgradeIfSecondaryHealthy_():t===nl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zn("t",e),s=zn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ol,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:il,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zn("t",e),s=zn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zn(ur,e);if(tl in e){const s=e[tl];if(t===ov){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===rl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===iv?this.onConnectionShutdown_(s):t===nl?this.onReset_(s):t===rv?xr("Server Error: "+s):t===sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),No!==s&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ev))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ol,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ju{static getInstance(){return new di}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=32,ll=768;class V{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function U(){return new V("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Nt(n){return n.pieces_.length-n.pieceNum_}function z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new V(n.pieces_,e)}function qu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function lv(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ku(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new V(e,0)}function te(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof V)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new V(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function me(n,e){const t=k(n),s=k(e);if(t===null)return e;if(t===s)return me(z(n),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Do(n,e){if(Nt(n)!==Nt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function He(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Nt(n)>Nt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class cv{constructor(e,t){this.errorPrefix_=t,this.parts_=Gu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oi(this.parts_[s]);Yu(this)}}function uv(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Oi(e),Yu(n)}function hv(n){const e=n.parts_.pop();n.byteLength_-=Oi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yu(n){if(n.byteLength_>ll)throw new Error(n.errorPrefix_+"has a key path longer than "+ll+" bytes ("+n.byteLength_+").");if(n.parts_.length>al)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+al+") or object contains a cycle "+$t(n))}function $t(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends ju{static getInstance(){return new xo}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=1e3,dv=300*1e3,cl=30*1e3,fv=1.3,pv=3e4,_v="server_kill",ul=3;class lt extends zu{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=lt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jn,this.maxReconnectDelay_=dv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(re(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new go,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;lt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_t(e,"w")){const s=Nn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$f(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xr("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pv&&(this.reconnectDelay_=jn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ae("getToken() completed but was canceled"):(ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new av(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Re(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_v)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Re(d),l())}}}interrupt(e){ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cr(this.interruptReasons_)&&(this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ao(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new V(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ae("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ul&&(this.reconnectDelay_=cl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ae("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ul&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+bu.replace(/\./g,"-")]=1,mo()?e["framework.cordova"]=1:Dc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=di.getInstance().currentlyOnline();return Cr(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(Dn,e),i=new T(Dn,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Qu extends Li{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,t){return Hn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(Jt,Ms)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,Ms)}toString(){return".key"}}const Cn=new Qu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ie.RED,this.left=i??ve.EMPTY_NODE,this.right=r??ve.EMPTY_NODE}copy(e,t,s,i,r){return new ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class gv{copy(e,t,s,i,r){return this}insert(e,t,s){return new ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,t=ve.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ve(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ls(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ls(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ls(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new gv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){return Hn(n.name,e.name)}function Mo(n,e){return Hn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;function vv(n){Lr=n}const Ju=function(n){return typeof n=="number"?"number:"+ku(n):"string:"+n},Xu=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else _(n===Lr||n.isEmpty(),"priority of unexpected type.");_(n===Lr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class se{static set __childrenNodeConstructor(e){hl=e}static get __childrenNodeConstructor(){return hl}constructor(e,t=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:k(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=k(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||Nt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ju(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ku(this.value_):e+=this.value_,this.lazyHash_=Cu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(t),r=se.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu,eh;function yv(n){Zu=n}function wv(n){eh=n}class Ev extends Li{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Jt,new se("[PRIORITY-POST]",eh))}makePost(e,t){const s=Zu(e);return new T(t,new se("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new Ev;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=Math.log(2);class Iv{constructor(e){const t=r=>parseInt(Math.log(r)/bv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fi=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new ie(u,d.node,ie.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),g=i(f+1,c);return d=n[f],u=t?t(d):d,new ie(u,d.node,ie.BLACK,p,g)}},r=function(l){let c=null,h=null,d=n.length;const u=function(p,g){const y=d-p,N=d;d-=p;const m=i(y+1,N),w=n[y],P=t?t(w):w;f(new ie(P,w.node,g,null,m))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));g?u(y,ie.BLACK):(u(y,ie.BLACK),u(y,ie.RED))}return h},o=new Iv(n.length),a=r(o);return new ve(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const cn={};class it{static get Default(){return _(cn&&Y,"ChildrenNode.ts has not been loaded"),hr=hr||new it({".priority":cn},{".priority":Y}),hr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ve?t:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fi(s,e.getCompare()):a=cn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new it(h,c)}addToIndexes(e,t){const s=si(this.indexes_,(i,r)=>{const o=Nn(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(T.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fi(a,o.getCompare())}else return cn;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new T(e.name,a))),l.insert(e,e.node)}});return new it(s,this.indexSet_)}removeFromIndexes(e,t){const s=si(this.indexes_,i=>{if(i===cn)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new it(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class I{static get EMPTY_NODE(){return qn||(qn=new I(new ve(Mo),null,it.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xu(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qn}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qn:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?qn:this.priorityNode_;return new I(i,o,r)}}updateChild(e,t){const s=k(e);if(s===null)return t;{_(k(e)!==".priority"||Nt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),s++,r&&I.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ju(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Cu(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cv extends I{constructor(){super(new ve(Mo),I.EMPTY_NODE,it.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const Ns=new Cv;Object.defineProperties(T,{MIN:{value:new T(Dn,I.EMPTY_NODE)},MAX:{value:new T(Jt,Ns)}});Qu.__EMPTY_NODE=I.EMPTY_NODE;se.__childrenNodeConstructor=I;vv(Ns);wv(Ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=!0;function le(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new se(t,le(e))}if(!(n instanceof Array)&&Tv){const t=[];let s=!1;if(be(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=le(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new T(o,l)))}}),t.length===0)return I.EMPTY_NODE;const r=fi(t,mv,o=>o.name,Mo);if(s){const o=fi(t,Y.getCompare());return new I(r,le(e),new it({".priority":o},{".priority":Y}))}else return new I(r,le(e),it.Default)}else{let t=I.EMPTY_NODE;return be(n,(s,i)=>{if(_t(n,s)&&s.substring(0,1)!=="."){const r=le(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(le(e))}}yv(le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends Li{constructor(e){super(),this.indexPath_=e,_(!R(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Hn(e.name,t.name):r}makePost(e,t){const s=le(e),i=I.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new T(Jt,e)}toString(){return Gu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Li{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Hn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=le(e);return new T(t,s)}toString(){return".value"}}const Rv=new kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){return{type:"value",snapshotNode:n}}function xn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ps(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _s(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Av(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ps(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(xn(t,s)):o.trackChildChange(_s(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(ps(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(_s(i,r,o))}else s.trackChildChange(xn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.indexedFilter_=new Lo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new T(t,s))||(s=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=I.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,a)=>{r.matches(new T(o,a))||(i=i.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new T(t,s))||(s=I.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new T(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(h&&!s.isEmpty()&&f>=0)return r?.trackChildChange(_s(t,s,d)),a.updateImmediateChild(t,s);{r?.trackChildChange(ps(t,d));const g=a.updateImmediateChild(t,I.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(xn(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ps(c.name,c.node)),r.trackChildChange(xn(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Fo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pv(n){return n.loadsAllData()?new Lo(n.getIndex()):n.hasLimit()?new Nv(n):new gs(n)}function dl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===Rv?t="$value":n.index_===Cn?t="$key":(_(n.index_ instanceof Sv,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function fl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends zu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pi.getListenId_(e,s),a={};this.listens_[o]=a;const l=dl(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Nn(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const s=pi.getListenId_(e,t);delete this.listens_[s]}get(e){const t=dl(e._queryParams),s=e._path.toString(),i=new go;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$n(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=us(a.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return{value:null,children:new Map}}function nh(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=k(e);n.children.has(s)||n.children.set(s,_i());const i=n.children.get(s);e=z(e),nh(i,e,t)}}function Fr(n,e,t){n.value!==null?t(e,n.value):Dv(n,(s,i)=>{const r=new V(e.toString()+"/"+s);Fr(i,r,t)})}function Dv(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&be(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=10*1e3,Mv=30*1e3,Lv=300*1e3;class Fv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xv(e);const s=pl+(Mv-pl)*Math.random();ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;be(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function sh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $o(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=sh()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new V(e));return new gi(U(),t,this.revert)}}else return _(k(this.path)===e,"operationForChild called for unrelated child."),new gi(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.source=e,this.path=t,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return R(this.path)?new ms(this.source,U()):new ms(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return R(this.path)?new Xt(this.source,U(),this.snap.getImmediateChild(e)):new Xt(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new Xt(this.source,U(),t.value):new vs(this.source,U(),t)}else return _(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $v(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Av(o.childName,o.snapshotNode))}),Gn(n,i,"child_removed",e,s,t),Gn(n,i,"child_added",e,s,t),Gn(n,i,"child_moved",r,s,t),Gn(n,i,"child_changed",e,s,t),Gn(n,i,"value",e,s,t),i}function Gn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Bv(n,a,l)),o.forEach(a=>{const l=Wv(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Wv(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bv(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,e){return{eventCache:n,serverCache:e}}function ss(n,e,t,s){return Fi(new Zt(e,t,s),n.serverCache)}function ih(n,e,t,s){return Fi(n.eventCache,new Zt(e,t,s))}function Ur(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function en(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const Hv=()=>(dr||(dr=new ve(km)),dr);class q{static fromObject(e){let t=new q(null);return be(e,(s,i)=>{t=t.set(new V(s),i)}),t}constructor(e,t=Hv()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:U(),value:this.value};if(R(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),t);return r!=null?{path:te(new V(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=k(e),s=this.children.get(t);return s!==null?s.subtree(z(e)):new q(null)}}set(e,t){if(R(e))return new q(t,this.children);{const s=k(e),r=(this.children.get(s)||new q(null)).set(z(e),t),o=this.children.insert(s,r);return new q(this.value,o)}}remove(e){if(R(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const t=k(e),s=this.children.get(t);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new q(null):new q(this.value,r)}else return this}}get(e){if(R(e))return this.value;{const t=k(e),s=this.children.get(t);return s?s.get(z(e)):null}}setTree(e,t){if(R(e))return t;{const s=k(e),r=(this.children.get(s)||new q(null)).setTree(z(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new q(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(te(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,U(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(R(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(z(e),te(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,U(),t)}foreachOnPath_(e,t,s){if(R(e))return this;{this.value&&s(t,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),te(t,i),s):new q(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(te(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new q(null))}}function is(n,e,t){if(R(e))return new ze(new q(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=me(i,e);return r=r.updateChild(o,t),new ze(n.writeTree_.set(i,r))}else{const i=new q(t),r=n.writeTree_.setTree(e,i);return new ze(r)}}}function _l(n,e,t){let s=n;return be(t,(i,r)=>{s=is(s,te(e,i),r)}),s}function gl(n,e){if(R(e))return ze.empty();{const t=n.writeTree_.setTree(e,new q(null));return new ze(t)}}function $r(n,e){return rn(n,e)!=null}function rn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(me(t.path,e)):null}function ml(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function At(n,e){if(R(e))return n;{const t=rn(n,e);return t!=null?new ze(new q(t)):new ze(n.writeTree_.subtree(e))}}function Wr(n){return n.writeTree_.isEmpty()}function Mn(n,e){return rh(U(),n.writeTree_,e)}function rh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=rh(te(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(te(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,e){return ch(e,n)}function Vv(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=is(n.visibleWrites,e,t)),n.lastWriteId=s}function zv(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function jv(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qv(a,s.path)?i=!1:He(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Gv(n),!0;if(s.snap)n.visibleWrites=gl(n.visibleWrites,s.path);else{const a=s.children;be(a,l=>{n.visibleWrites=gl(n.visibleWrites,te(s.path,l))})}return!0}else return!1}function qv(n,e){if(n.snap)return He(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&He(te(n.path,t),e))return!0;return!1}function Gv(n){n.visibleWrites=oh(n.allWrites,Kv,U()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Kv(n){return n.visible}function oh(n,e,t){let s=ze.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)He(t,o)?(a=me(t,o),s=is(s,a,r.snap)):He(o,t)&&(a=me(o,t),s=is(s,U(),r.snap.getChild(a)));else if(r.children){if(He(t,o))a=me(t,o),s=_l(s,a,r.children);else if(He(o,t))if(a=me(o,t),R(a))s=_l(s,U(),r.children);else{const l=Nn(r.children,k(a));if(l){const c=l.getChild(z(a));s=is(s,U(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return s}function ah(n,e,t,s,i){if(!s&&!i){const r=rn(n.visibleWrites,e);if(r!=null)return r;{const o=At(n.visibleWrites,e);if(Wr(o))return t;if(t==null&&!$r(o,U()))return null;{const a=t||I.EMPTY_NODE;return Mn(o,a)}}}else{const r=At(n.visibleWrites,e);if(!i&&Wr(r))return t;if(!i&&t==null&&!$r(r,U()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(He(c.path,e)||He(e,c.path))},a=oh(n.allWrites,o,e),l=t||I.EMPTY_NODE;return Mn(a,l)}}}function Yv(n,e,t){let s=I.EMPTY_NODE;const i=rn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=At(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const l=Mn(At(r,new V(o)),a);s=s.updateImmediateChild(o,l)}),ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(n.visibleWrites,e);return ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Qv(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=te(e,t);if($r(n.visibleWrites,r))return null;{const o=At(n.visibleWrites,r);return Wr(o)?i.getChild(t):Mn(o,i.getChild(t))}}function Jv(n,e,t,s){const i=te(e,t),r=rn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=At(n.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(t))}else return null}function Xv(n,e){return rn(n.visibleWrites,e)}function Zv(n,e,t,s,i,r,o){let a;const l=At(n.visibleWrites,e),c=rn(l,U());if(c!=null)a=c;else if(t!=null)a=Mn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=u.getNext();for(;f&&h.length<i;)d(f,s)!==0&&h.push(f),f=u.getNext();return h}else return[]}function ey(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function mi(n,e,t,s){return ah(n.writeTree,n.treePath,e,t,s)}function Bo(n,e){return Yv(n.writeTree,n.treePath,e)}function vl(n,e,t,s){return Qv(n.writeTree,n.treePath,e,t,s)}function vi(n,e){return Xv(n.writeTree,te(n.treePath,e))}function ty(n,e,t,s,i,r){return Zv(n.writeTree,n.treePath,e,t,s,i,r)}function Ho(n,e,t){return Jv(n.writeTree,n.treePath,e,t)}function lh(n,e){return ch(te(n.treePath,e),n.writeTree)}function ch(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,_s(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ps(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,xn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,_s(s,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const uh=new sy;class Vo{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ho(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=ty(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(n){return{filter:n}}function ry(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function oy(n,e,t,s,i){const r=new ny;let o,a;if(t.type===Ve.OVERWRITE){const c=t;c.source.fromUser?o=Br(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!R(c.path),o=yi(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ve.MERGE){const c=t;c.source.fromUser?o=ly(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hr(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ve.ACK_USER_WRITE){const c=t;c.revert?o=hy(n,e,c.path,s,i,r):o=cy(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ve.LISTEN_COMPLETE)o=uy(n,e,t.path,s,r);else throw Fn("Unknown operation type: "+t.type);const l=r.getChanges();return ay(e,o,l),{viewCache:o,changes:l}}function ay(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ur(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(th(Ur(e)))}}function hh(n,e,t,s,i,r){const o=e.eventCache;if(vi(s,t)!=null)return e;{let a,l;if(R(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=en(e),h=c instanceof I?c:I.EMPTY_NODE,d=Bo(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=mi(s,en(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=k(t);if(c===".priority"){_(Nt(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=vl(s,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=z(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=vl(s,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=Ho(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,i,r):a=o.getNode()}}return ss(e,a,o.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function yi(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(R(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=k(t);if(!l.isCompleteForPath(t)&&Nt(t)>1)return e;const p=z(t),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),y):c=h.updateChild(l.getNode(),f,y,p,uh,null)}const d=ih(e,c,l.isFullyInitialized()||R(t),h.filtersNodes()),u=new Vo(i,d,r);return hh(n,d,t,i,u,a)}function Br(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Vo(i,e,r);if(R(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ss(e,c,!0,n.filter.filtersNodes());else{const d=k(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=ss(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=z(t),f=a.getNode().getImmediateChild(d);let p;if(R(u))p=s;else{const g=h.getCompleteChild(d);g!=null?qu(u)===".priority"&&g.getChild(Ku(u)).isEmpty()?p=g:p=g.updateChild(u,s):p=I.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),d,p,u,h,o);l=ss(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function yl(n,e){return n.eventCache.isCompleteForChild(e)}function ly(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=te(t,l);yl(e,k(h))&&(a=Br(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=te(t,l);yl(e,k(h))||(a=Br(n,a,h,c,i,r,o))}),a}function wl(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hr(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;R(t)?c=s:c=new q(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=wl(n,f,u);l=yi(n,l,new V(d),p,i,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=wl(n,p,u);l=yi(n,l,new V(d),g,i,r,o,a)}}),l}function cy(n,e,t,s,i,r,o){if(vi(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(R(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return yi(n,e,t,l.getNode().getChild(t),i,r,a,o);if(R(t)){let c=new q(null);return l.getNode().forEachChild(Cn,(h,d)=>{c=c.set(new V(h),d)}),Hr(n,e,t,c,i,r,a,o)}else return e}else{let c=new q(null);return s.foreach((h,d)=>{const u=te(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),Hr(n,e,t,c,i,r,a,o)}}function uy(n,e,t,s,i){const r=e.serverCache,o=ih(e,r.getNode(),r.isFullyInitialized()||R(t),r.isFiltered());return hh(n,o,t,s,uh,i)}function hy(n,e,t,s,i,r){let o;if(vi(s,t)!=null)return e;{const a=new Vo(s,e,i),l=e.eventCache.getNode();let c;if(R(t)||k(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=mi(s,en(e));else{const d=e.serverCache.getNode();_(d instanceof I,"serverChildren would be complete if leaf node"),h=Bo(s,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=k(t);let d=Ho(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,z(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,I.EMPTY_NODE,z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mi(s,en(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vi(s,U())!=null,ss(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Lo(s.getIndex()),r=Pv(s);this.processor_=iy(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),h=new Zt(l,o.isFullyInitialized(),i.filtersNodes()),d=new Zt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fi(d,h),this.eventGenerator_=new Uv(this.query_)}get query(){return this.query_}}function fy(n){return n.viewCache_.serverCache.getNode()}function py(n,e){const t=en(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function El(n){return n.eventRegistrations_.length===0}function _y(n,e){n.eventRegistrations_.push(e)}function bl(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Il(n,e,t,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(_(en(n.viewCache_),"We should always have a full cache before handling merges"),_(Ur(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=oy(n.processor_,i,e,t,s);return ry(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,dh(n,r.changes,r.viewCache.eventCache.getNode(),null)}function gy(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(xn(r,o))}),t.isFullyInitialized()&&s.push(th(t.getNode())),dh(n,s,t.getNode(),e)}function dh(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return $v(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class my{constructor(){this.views=new Map}}function vy(n){_(!wi,"__referenceConstructor has already been defined"),wi=n}function yy(){return _(wi,"Reference.ts has not been loaded"),wi}function wy(n){return n.views.size===0}function zo(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),Il(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Il(o,e,t,s));return r}}function Ey(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=mi(t,i?s:null),l=!1;a?l=!0:s instanceof I?(a=Bo(t,s),l=!1):(a=I.EMPTY_NODE,l=!1);const c=Fi(new Zt(a,l,!1),new Zt(s,i,!1));return new dy(e,c)}return o}function by(n,e,t,s,i,r){const o=Ey(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),_y(o,t),gy(o,t)}function Iy(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Pt(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(bl(c,t,s)),El(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(bl(l,t,s)),El(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Pt(n)&&r.push(new(yy())(e._repo,e._path)),{removed:r,events:o}}function fh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Tn(n,e){let t=null;for(const s of n.views.values())t=t||py(s,e);return t}function ph(n,e){if(e._queryParams.loadsAllData())return Ui(n);{const s=e._queryIdentifier;return n.views.get(s)}}function _h(n,e){return ph(n,e)!=null}function Pt(n){return Ui(n)!=null}function Ui(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;function Cy(n){_(!Ei,"__referenceConstructor has already been defined"),Ei=n}function Ty(){return _(Ei,"Reference.ts has not been loaded"),Ei}let Sy=1;class Cl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=ey(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ky(n,e,t,s,i){return Vv(n.pendingWriteTree_,e,t,s,i),i?Ps(n,new Xt(sh(),e,t)):[]}function pn(n,e,t=!1){const s=zv(n.pendingWriteTree_,e);if(jv(n.pendingWriteTree_,e)){let r=new q(null);return s.snap!=null?r=r.set(U(),!0):be(s.children,o=>{r=r.set(new V(o),!0)}),Ps(n,new gi(s.path,r,t))}else return[]}function $i(n,e,t){return Ps(n,new Xt(Uo(),e,t))}function Ry(n,e,t){const s=q.fromObject(t);return Ps(n,new vs(Uo(),e,s))}function Ay(n,e){return Ps(n,new ms(Uo(),e))}function Ny(n,e,t){const s=jo(n,t);if(s){const i=qo(s),r=i.path,o=i.queryId,a=me(r,e),l=new ms($o(o),a);return Go(n,r,l)}else return[]}function Vr(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||_h(o,e))){const l=Iy(o,e,t,s);wy(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,f)=>Pt(f));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=Dy(u);for(let p=0;p<f.length;++p){const g=f[p],y=g.query,N=yh(n,g);n.listenProvider_.startListening(rs(y),bi(n,y),N.hashFn,N.onComplete)}}}!d&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(rs(e),null):c.forEach(u=>{const f=n.queryToTagMap.get(Wi(u));n.listenProvider_.stopListening(rs(u),f)}))}xy(n,c)}return a}function Py(n,e,t,s){const i=jo(n,s);if(i!=null){const r=qo(i),o=r.path,a=r.queryId,l=me(o,e),c=new Xt($o(a),l,t);return Go(n,o,c)}else return[]}function Oy(n,e,t,s){const i=jo(n,s);if(i){const r=qo(i),o=r.path,a=r.queryId,l=me(o,e),c=q.fromObject(t),h=new vs($o(a),l,c);return Go(n,o,h)}else return[]}function Tl(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,f)=>{const p=me(u,i);r=r||Tn(f,p),o=o||Pt(f)});let a=n.syncPointTree_.get(i);a?(o=o||Pt(a),r=r||Tn(a,U())):(a=new my,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Tn(p,U());g&&(r=r.updateImmediateChild(f,g))}));const c=_h(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Wi(e);_(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=My();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const h=Wo(n.pendingWriteTree_,i);let d=by(a,e,t,h,r,l);if(!c&&!o&&!s){const u=ph(a,e);d=d.concat(Ly(n,e,u))}return d}function gh(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=Tn(a,l);if(c)return c});return ah(i,e,r,t,!0)}function Ps(n,e){return mh(e,n.syncPointTree_,null,Wo(n.pendingWriteTree_,U()))}function mh(n,e,t,s){if(R(n.path))return vh(n,e,t,s);{const i=e.get(U());t==null&&i!=null&&(t=Tn(i,U()));let r=[];const o=k(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=lh(s,o);r=r.concat(mh(a,l,c,h))}return i&&(r=r.concat(zo(i,n,s,t))),r}}function vh(n,e,t,s){const i=e.get(U());t==null&&i!=null&&(t=Tn(i,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=lh(s,o),h=n.operationForChild(o);h&&(r=r.concat(vh(h,a,l,c)))}),i&&(r=r.concat(zo(i,n,s,t))),r}function yh(n,e){const t=e.query,s=bi(n,t);return{hashFn:()=>(fy(e)||I.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ny(n,t._path,s):Ay(n,t._path);{const r=Nm(i,t);return Vr(n,t,null,r)}}}}function bi(n,e){const t=Wi(e);return n.queryToTagMap.get(t)}function Wi(n){return n._path.toString()+"$"+n._queryIdentifier}function jo(n,e){return n.tagToQueryMap.get(e)}function qo(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new V(n.substr(0,e))}}function Go(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=Wo(n.pendingWriteTree_,e);return zo(s,t,i,null)}function Dy(n){return n.fold((e,t,s)=>{if(t&&Pt(t))return[Ui(t)];{let i=[];return t&&(i=fh(t)),be(s,(r,o)=>{i=i.concat(o)}),i}})}function rs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Ty())(n._repo,n._path):n}function xy(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Wi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function My(){return Sy++}function Ly(n,e,t){const s=e._path,i=bi(n,e),r=yh(n,t),o=n.listenProvider_.startListening(rs(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!Pt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!R(c)&&h&&Pt(h))return[Ui(h).query];{let u=[];return h&&(u=u.concat(fh(h).map(f=>f.query))),be(d,(f,p)=>{u=u.concat(p)}),u}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(rs(h),bi(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ko(t)}node(){return this.node_}}class Yo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=te(this.path_,e);return new Yo(this.syncTree_,t)}node(){return gh(this.syncTree_,this.path_)}}const Fy=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Sl=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Uy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return $y(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Uy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},$y=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Wy=function(n,e,t,s){return Qo(e,new Yo(t,n),s)},By=function(n,e,t){return Qo(n,new Ko(e),t)};function Qo(n,e,t){const s=n.getPriority().val(),i=Sl(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Sl(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new se(a,le(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new se(i))),o.forEachChild(Y,(a,l)=>{const c=Qo(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xo(n,e){let t=e instanceof V?e:new V(e),s=n,i=k(t);for(;i!==null;){const r=Nn(s.node.children,i)||{children:{},childCount:0};s=new Jo(i,s,r),t=z(t),i=k(t)}return s}function Vn(n){return n.node.value}function wh(n,e){n.node.value=e,zr(n)}function Eh(n){return n.node.childCount>0}function Hy(n){return Vn(n)===void 0&&!Eh(n)}function Bi(n,e){be(n.node.children,(t,s)=>{e(new Jo(t,n,s))})}function bh(n,e,t,s){t&&e(n),Bi(n,i=>{bh(i,e,!0)})}function Vy(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Os(n){return new V(n.parent===null?n.name:Os(n.parent)+"/"+n.name)}function zr(n){n.parent!==null&&zy(n.parent,n.name,n)}function zy(n,e,t){const s=Hy(t),i=_t(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,zr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/[\[\].#$\/\u0000-\u001F\u007F]/,qy=/[\[\].#$\u0000-\u001F\u007F]/,fr=10*1024*1024,Ih=function(n){return typeof n=="string"&&n.length!==0&&!jy.test(n)},Ch=function(n){return typeof n=="string"&&n.length!==0&&!qy.test(n)},Gy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ch(n)},Th=function(n,e,t){const s=t instanceof V?new cv(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(n+"contains a function "+$t(s)+" with contents = "+e.toString());if(Tu(e))throw new Error(n+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>fr/3&&Oi(e)>fr)throw new Error(n+"contains a string greater than "+fr+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ih(o)))throw new Error(n+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uv(s,o),Th(n,a,s),hv(s)}),i&&r)throw new Error(n+' contains ".value" child '+$t(s)+" in addition to actual children.")}},Sh=function(n,e,t,s){if(!Ch(t))throw new Error(Mc(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ky=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sh(n,e,t)},Yy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Gy(t))throw new Error(Mc(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kh(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Do(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Rh(n,e,t){kh(n,t),Ah(n,s=>Do(s,e))}function on(n,e,t){kh(n,t),Ah(n,s=>He(s,e)||He(e,s))}function Ah(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Jy(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Jy(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ts&&ae("event: "+t.toString()),As(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="repo_interrupt",Zy=25;class ew{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_i(),this.transactionQueueTree_=new Jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tw(n,e,t){if(n.stats_=Po(n.repoInfo_),n.forceRestClient_||xm())n.server_=new pi(n.repoInfo_,(s,i,r,o)=>{kl(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Rl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new lt(n.repoInfo_,e,(s,i,r,o)=>{kl(n,s,i,r,o)},s=>{Rl(n,s)},s=>{sw(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=$m(n.repoInfo_,()=>new Fv(n.stats_,n.server_)),n.infoData_=new Ov,n.infoSyncTree_=new Cl({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=$i(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zo(n,"connected",!1),n.serverSyncTree_=new Cl({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);on(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function nw(n){const t=n.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Nh(n){return Fy({timestamp:nw(n)})}function kl(n,e,t,s,i){n.dataUpdateCount++;const r=new V(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=si(t,c=>le(c));o=Oy(n.serverSyncTree_,r,l,i)}else{const l=le(t);o=Py(n.serverSyncTree_,r,l,i)}else if(s){const l=si(t,c=>le(c));o=Ry(n.serverSyncTree_,r,l)}else{const l=le(t);o=$i(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ta(n,r)),on(n.eventQueue_,a,o)}function Rl(n,e){Zo(n,"connected",e),e===!1&&rw(n)}function sw(n,e){be(e,(t,s)=>{Zo(n,t,s)})}function Zo(n,e,t){const s=new V("/.info/"+e),i=le(t);n.infoData_.updateSnapshot(s,i);const r=$i(n.infoSyncTree_,s,i);on(n.eventQueue_,s,r)}function iw(n){return n.nextWriteId_++}function rw(n){Ph(n,"onDisconnectEvents");const e=Nh(n),t=_i();Fr(n.onDisconnect_,U(),(i,r)=>{const o=Wy(i,r,n.serverSyncTree_,e);nh(t,i,o)});let s=[];Fr(t,U(),(i,r)=>{s=s.concat($i(n.serverSyncTree_,i,r));const o=uw(n,i);ta(n,o)}),n.onDisconnect_=_i(),on(n.eventQueue_,U(),s)}function ow(n,e,t){let s;k(e._path)===".info"?s=Tl(n.infoSyncTree_,e,t):s=Tl(n.serverSyncTree_,e,t),Rh(n.eventQueue_,e._path,s)}function jr(n,e,t){let s;k(e._path)===".info"?s=Vr(n.infoSyncTree_,e,t):s=Vr(n.serverSyncTree_,e,t),Rh(n.eventQueue_,e._path,s)}function aw(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Xy)}function Ph(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ae(t,...e)}function Oh(n,e,t){return gh(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function ea(n,e=n.transactionQueueTree_){if(e||Hi(n,e),Vn(e)){const t=xh(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&lw(n,Os(e),t)}else Eh(e)&&Bi(e,t=>{ea(n,t)})}function lw(n,e,t){const s=t.map(c=>c.currentWriteId),i=Oh(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=me(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Ph(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(pn(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Hi(n,Xo(n.transactionQueueTree_,e)),ea(n,n.transactionQueueTree_),on(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)As(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Re("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}ta(n,e)}},o)}function ta(n,e){const t=Dh(n,e),s=Os(t),i=xh(n,t);return cw(n,i,s),s}function cw(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(t,l.path);let h=!1,d;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(pn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zy)h=!0,d="maxretry",i=i.concat(pn(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Oh(n,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Th("transaction failed: Data returned ",f,l.path);let p=le(f);typeof f=="object"&&f!=null&&_t(f,".priority")||(p=p.updatePriority(u.getPriority()));const y=l.currentWriteId,N=Nh(n),m=By(p,u,N);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=iw(n),o.splice(o.indexOf(y),1),i=i.concat(ky(n.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(pn(n.serverSyncTree_,y,!0))}else h=!0,d="nodata",i=i.concat(pn(n.serverSyncTree_,l.currentWriteId,!0))}on(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Hi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)As(s[a]);ea(n,n.transactionQueueTree_)}function Dh(n,e){let t,s=n.transactionQueueTree_;for(t=k(e);t!==null&&Vn(s)===void 0;)s=Xo(s,t),e=z(e),t=k(e);return s}function xh(n,e){const t=[];return Mh(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Mh(n,e,t){const s=Vn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Bi(e,i=>{Mh(n,i,t)})}function Hi(n,e){const t=Vn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,wh(e,t.length>0?t:void 0)}Bi(e,s=>{Hi(n,s)})}function uw(n,e){const t=Os(Dh(n,e)),s=Xo(n.transactionQueueTree_,e);return Vy(s,i=>{pr(n,i)}),pr(n,s),bh(s,i=>{pr(n,i)}),t}function pr(n,e){const t=Vn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(pn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wh(e,void 0):t.length=r+1,on(n.eventQueue_,Os(e),i);for(let o=0;o<s.length;o++)As(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dw(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Re(`Invalid query segment '${t}' in query '${n}'`)}return e}const Al=function(n,e){const t=fw(n),s=t.namespace;t.domain==="firebase.com"&&ht(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tm();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fu(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new V(t.pathString)}},fw=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(i=hw(n.substring(h,d)));const u=dw(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class _w{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return R(this._path)?null:qu(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=fl(this._queryParams),t=Ao(e);return t==="{}"?"default":t}get _queryObject(){return fl(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof na))return!1;const t=this._repo===e._repo,s=Do(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lv(this._path)}}class Mt extends na{constructor(e,t){super(e,t,new Fo,!1)}get parent(){const e=Ku(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new V(e),s=qr(this.ref,e);return new Ii(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ii(i,qr(this.ref,s),Y)))}hasChild(e){const t=new V(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mw(n,e){return n=Ie(n),n._checkNotDeleted("ref"),e!==void 0?qr(n._root,e):n._root}function qr(n,e){return n=Ie(n),k(n._path)===null?Ky("child","path",e):Sh("child","path",e),new Mt(n._repo,te(n._path,e))}class sa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new pw("value",this,new Ii(e.snapshotNode,new Mt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new _w(this,e,t):null}matches(e){return e instanceof sa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vw(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,d)=>{jr(n._repo,n,a),l(h,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new gw(t,r||void 0),a=new sa(o);return ow(n._repo,n,a),()=>jr(n._repo,n,a)}function yw(n,e,t,s){return vw(n,"value",e,t,s)}function ww(n,e,t){jr(n._repo,n,null)}vy(Mt);Cy(Mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="FIREBASE_DATABASE_EMULATOR_HOST",Gr={};let bw=!1;function Iw(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Un(r);n.repoInfo_=new Fu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Cw(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ae("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Al(r,i),a=o.repoInfo,l;typeof process<"u"&&Ya&&(l=Ya[Ew]),l?(r=`http://${l}?ns=${a.namespace}`,o=Al(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Lm(n.name,n.options,e);Yy("Invalid Firebase Database URL",o),R(o.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Sw(a,n,c,new Mm(n,t));return new kw(h,n)}function Tw(n,e){const t=Gr[e];(!t||t[n.key]!==n)&&ht(`Database ${e}(${n.repoInfo_}) has already been deleted.`),aw(n),delete t[n.key]}function Sw(n,e,t,s){let i=Gr[e.name];i||(i={},Gr[e.name]=i);let r=i[n.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ew(n,bw,t,s),i[n.toURLString()]=r,r}class kw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function Rw(n=$c(),e){const t=wo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Sf("database");s&&Aw(t,...s)}return t}function Aw(n,e,t,s={}){n=Ie(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Gt(s,r.repoInfo_.emulatorOptions))return;ht("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zs(zs.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:kf(s.mockUserToken,n.app.options.projectId);o=new zs(a)}Un(e)&&(Pc(e),Oc("Database",!0)),Iw(r,i,s,o)}/**
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
 */function Nw(n){ym(Wn),Pn(new Kt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Cw(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Rt(Qa,Ja,n),Rt(Qa,Ja,"esm2020")}lt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};lt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Nw();const Pw={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",databaseURL:"YOUR_DATABASE_URL",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},Lh=Uc(Pw),Vi=mm(Lh),Ow=Rw(Lh),Fh=Ec(null),Dw=Ec(!0);rg(Vi,n=>{Fh.set(n),Dw.set(!1)});async function xw(n,e){try{return await eg(Vi,n,e),{success:!0}}catch(t){return console.error("로그인 오류:",t),{success:!1,error:Uh(t.code)}}}async function Mw(n,e,t=""){try{const s=await Z_(Vi,n,e);return t&&await ng(s.user,{displayName:t}),{success:!0}}catch(s){return console.error("회원가입 오류:",s),{success:!1,error:Uh(s.code)}}}async function Lw(){try{return await og(Vi),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}function Uh(n){return{"auth/invalid-email":"유효하지 않은 이메일 주소입니다.","auth/user-disabled":"비활성화된 계정입니다.","auth/user-not-found":"등록되지 않은 이메일입니다.","auth/wrong-password":"잘못된 비밀번호입니다.","auth/email-already-in-use":"이미 사용 중인 이메일입니다.","auth/weak-password":"비밀번호는 최소 6자 이상이어야 합니다.","auth/too-many-requests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","auth/network-request-failed":"네트워크 연결을 확인해주세요.","auth/invalid-credential":"인증 정보가 올바르지 않습니다."}[n]||"알 수 없는 오류가 발생했습니다."}var Fw=ne('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'),Uw=ne('<div class="error-message svelte-16585sj"> </div>'),$w=ne('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');const Ww={hash:"svelte-16585sj",code:`
  /* 컨테이너 */.login-container.svelte-16585sj {display:flex;justify-content:center;align-items:center;min-height:400px;padding:1rem;}

  /* 로그인 카드 */.login-card.svelte-16585sj {width:100%;max-width:400px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);}

  /* 제목 */.title.svelte-16585sj {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:bold;text-align:center;color:#333;}

  /* 폼 */.form.svelte-16585sj {display:flex;flex-direction:column;gap:1rem;}

  /* 폼 그룹 */.form-group.svelte-16585sj {display:flex;flex-direction:column;gap:0.5rem;}

  /* 라벨 */.label.svelte-16585sj {font-weight:500;color:#555;font-size:0.9rem;}

  /* 입력 필드 */.input.svelte-16585sj {padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;transition:border-color 0.2s;}.input.svelte-16585sj:focus {outline:none;border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);}.input.svelte-16585sj:disabled {background-color:#f5f5f5;cursor:not-allowed;}

  /* 오류 메시지 */.error-message.svelte-16585sj {padding:0.75rem;background-color:#fee;color:#c33;border-radius:4px;font-size:0.9rem;}

  /* 제출 버튼 */.submit-button.svelte-16585sj {padding:0.75rem;background-color:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.submit-button.svelte-16585sj:hover:not(:disabled) {background-color:#0056b3;}.submit-button.svelte-16585sj:disabled {background-color:#ccc;cursor:not-allowed;}

  /* 모드 전환 버튼 */.toggle-button.svelte-16585sj {padding:0.5rem;background:transparent;color:#007bff;border:none;font-size:0.9rem;cursor:pointer;text-decoration:underline;}.toggle-button.svelte-16585sj:hover:not(:disabled) {color:#0056b3;}.toggle-button.svelte-16585sj:disabled {color:#ccc;cursor:not-allowed;}`};function Bw(n,e){Ri(e,!0),ho(n,Ww);let t=ee(""),s=ee(""),i=ee(""),r=ee(""),o=ee(!1),a=ee(!1);async function l(M){M.preventDefault(),C(o,!0),C(r,"");let $;if(v(a)?$=await Mw(v(t),v(s),v(i)):$=await xw(v(t),v(s)),$.success){const J=new CustomEvent("login-success",{detail:{email:v(t)},bubbles:!0,composed:!0});dispatchEvent(J),C(t,""),C(s,""),C(i,"")}else{C(r,$.error,!0);const J=new CustomEvent("login-error",{detail:{error:$.error},bubbles:!0,composed:!0});dispatchEvent(J)}C(o,!1)}function c(){C(a,!v(a)),C(r,"")}var h=$w(),d=L(h),u=L(d),f=L(u,!0);D(u);var p=K(u,2),g=L(p);{var y=M=>{var $=Fw(),J=K(L($),2);Ji(J),D($),Qe(()=>J.disabled=v(o)),Xi(J,()=>v(i),ge=>C(i,ge)),G(M,$)};Se(g,M=>{v(a)&&M(y)})}var N=K(g,2),m=K(L(N),2);Ji(m),D(N);var w=K(N,2),P=K(L(w),2);Ji(P),D(w);var x=K(w,2);{var Z=M=>{var $=Uw(),J=L($,!0);D($),Qe(()=>Te(J,v(r))),G(M,$)};Se(x,M=>{v(r)&&M(Z)})}var B=K(x,2),Q=L(B,!0);D(B);var b=K(B,2);b.__click=c;var W=L(b,!0);D(b),D(p),D(d),D(h),Qe(()=>{Te(f,v(a)?"회원가입":"로그인"),m.disabled=v(o),P.disabled=v(o),B.disabled=v(o),Te(Q,v(o)?"처리 중...":v(a)?"회원가입":"로그인"),b.disabled=v(o),Te(W,v(a)?"이미 계정이 있으신가요? 로그인":"계정이 없으신가요? 회원가입")}),Us("submit",p,l),Xi(m,()=>v(t),M=>C(t,M)),Xi(P,()=>v(s),M=>C(s,M)),G(n,h),Ai()}co(["click"]);customElements.define("login-form",fo(Bw,{},[],[],!0));var Hw=ne('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),Vw=ne('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),zw=ne('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),jw=ne('<h3 class="post-title svelte-1t1odzy"> </h3>'),qw=ne('<p class="post-text svelte-1t1odzy"> </p>'),Gw=ne('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),Kw=ne('<div class="posts svelte-1t1odzy"></div>'),Yw=ne('<div class="post-list-container svelte-1t1odzy"><!></div>');const Qw={hash:"svelte-1t1odzy",code:`
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
  }`};function Jw(n,e){Ri(e,!0),ho(n,Qw);let t=va(e,"path",7,"posts"),s=va(e,"limit",7,"10"),i=ee(hn([])),r=ee(!0),o=ee(""),a=null;Ic(()=>{l()}),_f(()=>{c()});function l(){try{a=mw(Ow,t()),yw(a,m=>{const w=m.val();w?C(i,Object.entries(w).map(([P,x])=>({id:P,...x})).sort((P,x)=>(x.timestamp||0)-(P.timestamp||0)).slice(0,parseInt(s())),!0):C(i,[],!0),C(r,!1),C(o,"")},m=>{console.error("데이터 읽기 오류:",m),C(o,"데이터를 불러오는 중 오류가 발생했습니다."),C(r,!1)})}catch(m){console.error("구독 설정 오류:",m),C(o,"데이터베이스 연결에 실패했습니다."),C(r,!1)}}function c(){a&&ww(a)}function h(m){const w=new CustomEvent("post-click",{detail:{post:m},bubbles:!0,composed:!0});dispatchEvent(w)}function d(m,w){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),h(w))}function u(m){if(!m)return"";const w=typeof m=="string"?Number(m):m,P=new Date(w),Z=new Date().getTime()-P.getTime(),B=Math.floor(Z/6e4),Q=Math.floor(Z/36e5),b=Math.floor(Z/864e5);return B<1?"방금 전":B<60?`${B}분 전`:Q<24?`${Q}시간 전`:b<7?`${b}일 전`:P.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var f={get path(){return t()},set path(m="posts"){t(m),Ys()},get limit(){return s()},set limit(m="10"){s(m),Ys()}},p=Yw(),g=L(p);{var y=m=>{var w=Hw();G(m,w)},N=m=>{var w=Zs(),P=Js(w);{var x=B=>{var Q=Vw(),b=L(Q),W=L(b,!0);D(b),D(Q),Qe(()=>Te(W,v(o))),G(B,Q)},Z=B=>{var Q=Zs(),b=Js(Q);{var W=$=>{var J=zw();G($,J)},M=$=>{var J=Kw();tf(J,21,()=>v(i),ge=>ge.id,(ge,X)=>{var Ge=Gw();Ge.__click=()=>h(v(X)),Ge.__keydown=Me=>d(Me,v(X));var Lt=L(Ge),mt=L(Lt),Ae=L(mt),vt=L(Ae,!0);D(Ae);var ia=K(Ae,2),Wh=L(ia,!0);D(ia),D(mt),D(Lt);var zi=K(Lt,2),ra=L(zi);{var Bh=Me=>{var Ft=jw(),qi=L(Ft,!0);D(Ft),Qe(()=>Te(qi,v(X).title)),G(Me,Ft)};Se(ra,Me=>{v(X).title&&Me(Bh)})}var Hh=K(ra,2);{var Vh=Me=>{var Ft=qw(),qi=L(Ft,!0);D(Ft),Qe(()=>Te(qi,v(X).content)),G(Me,Ft)};Se(Hh,Me=>{v(X).content&&Me(Vh)})}D(zi);var oa=K(zi,2),ji=L(oa),zh=L(ji);D(ji);var aa=K(ji,2),jh=L(aa);D(aa),D(oa),D(Ge),Qe(Me=>{ei(Ge,"aria-label",`게시물: ${(v(X).title||v(X).content||"제목 없음")??""}`),Te(vt,v(X).author||"익명"),Te(Wh,Me),Te(zh,`👍 ${(v(X).likes||0)??""}`),Te(jh,`💬 ${(v(X).comments?.length||0)??""}`)},[()=>u(v(X).timestamp)]),G(ge,Ge)}),D(J),G($,J)};Se(b,$=>{v(i).length===0?$(W):$(M,!1)},!0)}G(B,Q)};Se(P,B=>{v(o)?B(x):B(Z,!1)},!0)}G(m,w)};Se(g,m=>{v(r)?m(y):m(N,!1)})}return D(p),G(n,p),Ai(f)}co(["click","keydown"]);customElements.define("post-list",fo(Jw,{path:{},limit:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var Xw=ne('<div class="notification svelte-1hwhcgc"> </div>'),Zw=ne('<div class="user-info svelte-1hwhcgc"><span> </span> <button class="logout-btn svelte-1hwhcgc">로그아웃</button></div>'),eE=ne('<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc">로그인 / 회원가입</h2> <p class="description svelte-1hwhcgc">Firebase Authentication을 사용한 로그인 폼입니다.</p> <login-form></login-form></section>',2),tE=ne('<div class="warning svelte-1hwhcgc">⚠️ 게시물을 보려면 먼저 로그인해주세요.</div>'),nE=ne("<post-list></post-list>",2),sE=ne('<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc">게시물 목록</h2> <p class="description svelte-1hwhcgc">Firebase Realtime Database의 게시물을 실시간으로 표시합니다.</p> <!></section>'),iE=ne(`<section class="tab-content svelte-1hwhcgc"><h2 class="svelte-1hwhcgc">프로젝트 정보</h2> <div class="info-card svelte-1hwhcgc"><h3 class="svelte-1hwhcgc">🎯 프로젝트 개요</h3> <p>Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.</p> <h3 class="svelte-1hwhcgc">🛠️ 기술 스택</h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc"><strong>Svelte 5</strong>: Runes를 활용한 반응형 컴포넌트</li> <li class="svelte-1hwhcgc"><strong>Vite</strong>: 라이브러리 모드로 빌드</li> <li class="svelte-1hwhcgc"><strong>Firebase</strong>: Authentication + Realtime Database</li> <li class="svelte-1hwhcgc"><strong>Tailwind CSS</strong>: 스타일링 (선택)</li></ul> <h3 class="svelte-1hwhcgc">📦 포함된 컴포넌트</h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;login-form&gt;</code> - 로그인/회원가입 폼</li> <li class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;post-list&gt;</code> - 게시물 목록</li></ul> <h3 class="svelte-1hwhcgc">🚀 사용 방법</h3> <pre class="svelte-1hwhcgc"><code class="svelte-1hwhcgc">&lt;!-- HTML에서 사용 --&gt;
&lt;script type="module" src="./dist/sns-components.es.js"&gt;&lt;/script&gt;

&lt;login-form&gt;&lt;/login-form&gt;
&lt;post-list path="posts" limit="10"&gt;&lt;/post-list&gt;</code></pre> <h3 class="svelte-1hwhcgc">💡 특징</h3> <ul class="svelte-1hwhcgc"><li class="svelte-1hwhcgc">SvelteKit 없이 순수 Svelte + Vite 라이브러리 모드</li> <li class="svelte-1hwhcgc">프레임워크 독립적인 Web Components</li> <li class="svelte-1hwhcgc">다양한 플랫폼에서 재사용 가능</li> <li class="svelte-1hwhcgc">실시간 데이터 동기화</li> <li class="svelte-1hwhcgc">한글 주석으로 상세한 설명</li></ul></div></section>`),rE=ne('<div class="demo-app svelte-1hwhcgc"><header class="header svelte-1hwhcgc"><h1 class="title svelte-1hwhcgc">SNS Web Components 데모</h1> <p class="subtitle svelte-1hwhcgc">Svelte 5 Custom Elements + Firebase</p></header> <!> <!> <nav class="tabs svelte-1hwhcgc"><button>로그인</button> <button>게시물 목록</button> <button>정보</button></nav> <main class="content svelte-1hwhcgc"><!></main> <footer class="footer svelte-1hwhcgc"><p class="svelte-1hwhcgc">© 2024 SNS Web Components | Powered by Svelte 5 & Firebase</p></footer></div>');const oE={hash:"svelte-1hwhcgc",code:`
  /* 앱 컨테이너 */.demo-app.svelte-1hwhcgc {min-height:100vh;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);padding:2rem;}

  /* 헤더 */.header.svelte-1hwhcgc {text-align:center;color:white;margin-bottom:2rem;}.title.svelte-1hwhcgc {font-size:2.5rem;font-weight:bold;margin:0 0 0.5rem 0;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.2);}.subtitle.svelte-1hwhcgc {font-size:1.2rem;opacity:0.9;margin:0;}

  /* 알림 메시지 */.notification.svelte-1hwhcgc {max-width:800px;margin:0 auto 1rem;padding:1rem;background:white;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);text-align:center;font-weight:500;}

  /* 사용자 정보 */.user-info.svelte-1hwhcgc {max-width:800px;margin:0 auto 1rem;padding:1rem;background:rgba(255, 255, 255, 0.9);border-radius:8px;display:flex;justify-content:space-between;align-items:center;}.logout-btn.svelte-1hwhcgc {padding:0.5rem 1rem;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:500;}.logout-btn.svelte-1hwhcgc:hover {background:#c82333;}

  /* 탭 네비게이션 */.tabs.svelte-1hwhcgc {max-width:800px;margin:0 auto 2rem;display:flex;gap:0.5rem;background:rgba(255, 255, 255, 0.1);padding:0.5rem;border-radius:8px;}.tab.svelte-1hwhcgc {flex:1;padding:0.75rem;background:transparent;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:500;transition:background-color 0.2s;}.tab.svelte-1hwhcgc:hover {background:rgba(255, 255, 255, 0.2);}.tab.active.svelte-1hwhcgc {background:white;color:#667eea;}

  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}.tab-content.svelte-1hwhcgc {background:white;padding:2rem;border-radius:8px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.tab-content.svelte-1hwhcgc h2:where(.svelte-1hwhcgc) {margin:0 0 0.5rem 0;color:#333;}.description.svelte-1hwhcgc {color:#666;margin-bottom:1.5rem;}.warning.svelte-1hwhcgc {padding:1rem;background:#fff3cd;border:1px solid #ffc107;border-radius:4px;color:#856404;text-align:center;}

  /* 정보 카드 */.info-card.svelte-1hwhcgc {color:#333;}.info-card.svelte-1hwhcgc h3:where(.svelte-1hwhcgc) {margin:1.5rem 0 0.5rem 0;color:#667eea;}.info-card.svelte-1hwhcgc h3:where(.svelte-1hwhcgc):first-child {margin-top:0;}.info-card.svelte-1hwhcgc ul:where(.svelte-1hwhcgc) {margin:0.5rem 0;padding-left:1.5rem;}.info-card.svelte-1hwhcgc li:where(.svelte-1hwhcgc) {margin:0.5rem 0;line-height:1.6;}.info-card.svelte-1hwhcgc code:where(.svelte-1hwhcgc) {background:#f5f5f5;padding:0.2rem 0.4rem;border-radius:3px;font-family:'Courier New', monospace;}.info-card.svelte-1hwhcgc pre:where(.svelte-1hwhcgc) {background:#f5f5f5;padding:1rem;border-radius:4px;overflow-x:auto;margin:0.5rem 0;}.info-card.svelte-1hwhcgc pre:where(.svelte-1hwhcgc) code:where(.svelte-1hwhcgc) {background:none;padding:0;}

  /* 푸터 */.footer.svelte-1hwhcgc {max-width:800px;margin:2rem auto 0;text-align:center;color:rgba(255, 255, 255, 0.8);}.footer.svelte-1hwhcgc p:where(.svelte-1hwhcgc) {margin:0;}

  /* 반응형 */
  @media (max-width: 640px) {.demo-app.svelte-1hwhcgc {padding:1rem;}.title.svelte-1hwhcgc {font-size:1.8rem;}.subtitle.svelte-1hwhcgc {font-size:1rem;}.tab-content.svelte-1hwhcgc {padding:1rem;}
  }`};function $h(n,e){Ri(e,!0),ho(n,oE);const t=()=>uf(Fh,"$user",s),[s,i]=hf();let r=ee("login"),o=ee("");function a(b){C(o,`✅ 로그인 성공: ${b.detail.email}`),C(r,"posts"),setTimeout(()=>{C(o,"")},3e3)}function l(b){C(o,`❌ 오류: ${b.detail.error}`),setTimeout(()=>{C(o,"")},5e3)}function c(b){const W=b.detail.post;alert(`게시물 클릭:

제목: ${W.title||"제목 없음"}
작성자: ${W.author||"익명"}`)}async function h(){(await Lw()).success&&(C(o,"✅ 로그아웃되었습니다."),C(r,"login"),setTimeout(()=>{C(o,"")},3e3))}function d(b){C(r,b,!0)}var u=rE(),f=K(L(u),2);{var p=b=>{var W=Xw(),M=L(W,!0);D(W),Qe(()=>Te(M,v(o))),G(b,W)};Se(f,b=>{v(o)&&b(p)})}var g=K(f,2);{var y=b=>{var W=Zw(),M=L(W),$=L(M);D(M);var J=K(M,2);J.__click=h,D(W),Qe(()=>Te($,`👤 ${(t().displayName||t().email)??""}`)),G(b,W)};Se(g,b=>{t()&&b(y)})}var N=K(g,2),m=L(N);m.__click=()=>d("login");var w=K(m,2);w.__click=()=>d("posts");var P=K(w,2);P.__click=()=>d("about"),D(N);var x=K(N,2),Z=L(x);{var B=b=>{var W=eE(),M=K(L(W),4);D(W),Us("login-success",M,a),Us("login-error",M,l),G(b,W)},Q=b=>{var W=Zs(),M=Js(W);{var $=ge=>{var X=sE(),Ge=K(L(X),4);{var Lt=Ae=>{var vt=tE();G(Ae,vt)},mt=Ae=>{var vt=nE();ma(vt,"path","posts"),ma(vt,"limit","10"),Us("post-click",vt,c),G(Ae,vt)};Se(Ge,Ae=>{t()?Ae(mt,!1):Ae(Lt)})}D(X),G(ge,X)},J=ge=>{var X=Zs(),Ge=Js(X);{var Lt=mt=>{var Ae=iE();G(mt,Ae)};Se(Ge,mt=>{v(r)==="about"&&mt(Lt)},!0)}G(ge,X)};Se(M,ge=>{v(r)==="posts"?ge($):ge(J,!1)},!0)}G(b,W)};Se(Z,b=>{v(r)==="login"?b(B):b(Q,!1)})}D(x),Ll(2),D(u),Qe(()=>{Qi(m,1,Yi(v(r)==="login"?"tab active":"tab"),"svelte-1hwhcgc"),Qi(w,1,Yi(v(r)==="posts"?"tab active":"tab"),"svelte-1hwhcgc"),Qi(P,1,Yi(v(r)==="about"?"tab active":"tab"),"svelte-1hwhcgc")}),G(n,u),Ai(),i()}co(["click"]);fo($h,{},[],[],!0);uo($h,{target:document.getElementById("app")});
