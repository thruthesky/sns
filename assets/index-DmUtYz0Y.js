(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const fh=!1;var Gl=Array.isArray,Sv=Array.prototype.indexOf,Kl=Array.from,So=Object.keys,$i=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,ph=Object.getOwnPropertyDescriptors,Av=Object.prototype,Rv=Array.prototype,Yl=Object.getPrototypeOf,Su=Object.isExtensible;function ii(n){return typeof n=="function"}const pn=()=>{};function Pv(n){return n()}function Ao(n){for(var e=0;e<n.length;e++)n[e]()}function mh(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function Nv(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Kt=2,Ql=4,ia=8,mr=16,vr=32,jr=64,oa=128,Wt=1024,an=2048,gr=4096,mn=8192,ir=16384,Jl=32768,Dr=65536,Au=1<<17,Lv=1<<18,hs=1<<19,vh=1<<20,Cn=256,Ro=512,Po=32768,al=1<<21,Xl=1<<22,Xr=1<<23,Hn=Symbol("$state"),Zl=Symbol("legacy props"),Ov=Symbol(""),Cs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Dv=1,ec=3,Js=8;function gh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function $v(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Mv(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Uv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Fv(n){throw new Error("https://svelte.dev/e/effect_orphan")}function zv(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qv(){throw new Error("https://svelte.dev/e/hydration_failed")}function jv(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Hv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Wv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const aa=1,la=2,_h=4,Gv=8,Kv=16,Yv=1,Qv=2,bh=4,Jv=8,Xv=16,Zv=1,eg=2,wh="[",ca="[!",tc="]",Os={},Ft=Symbol(),tg="http://www.w3.org/1999/xhtml",ng="http://www.w3.org/2000/svg",rg="@attach";function ua(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function sg(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ig(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let _e=!1;function hn(n){_e=n}let Ue;function qt(n){if(n===null)throw ua(),Os;return Ue=n}function rs(){return qt(Kn(Ue))}function u(n){if(_e){if(Kn(Ue)!==null)throw ua(),Os;Ue=n}}function Xn(n=1){if(_e){for(var e=n,t=Ue;e--;)t=Kn(t);Ue=t}}function No(n=!0){for(var e=0,t=Ue;;){if(t.nodeType===Js){var r=t.data;if(r===tc){if(e===0)return t;e-=1}else(r===wh||r===ca)&&(e+=1)}var s=Kn(t);n&&t.remove(),t=s}}function yh(n){if(!n||n.nodeType!==Js)throw ua(),Os;return n.data}function Eh(n){return n===this.v}function xh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function kh(n){return!xh(n,this.v)}let Xs=!1,og=!1;function ag(){Xs=!0}let dt=null;function Ds(n){dt=n}function et(n,e=!1,t){dt={p:dt,i:!1,c:null,e:null,s:n,x:null,l:Xs&&!e?{s:null,u:null,$:[]}:null}}function tt(n){var e=dt,t=e.e;if(t!==null){e.e=null;for(var r of t)jh(r)}return n!==void 0&&(e.x=n),e.i=!0,dt=e.p,n??{}}function Qi(){return!Xs||dt!==null&&dt.l===null}let Qr=[];function Ch(){var n=Qr;Qr=[],Ao(n)}function Br(n){if(Qr.length===0&&!Ei){var e=Qr;queueMicrotask(()=>{e===Qr&&Ch()})}Qr.push(n)}function lg(){for(;Qr.length>0;)Ch()}function Ih(n){var e=Ie;if(e===null)return Me.f|=Xr,n;if((e.f&Jl)===0){if((e.f&oa)===0)throw n;e.b.error(n)}else $s(n,e)}function $s(n,e){for(;e!==null;){if((e.f&oa)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const mo=new Set;let Ke=null,yi=null,Pn=null,jn=[],da=null,ll=!1,Ei=!1;class Dn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){jn=[],yi=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(yi=this,Ke=null,Ru(t.render_effects),Ru(t.effects),yi=null,this.#l?.resolve()),Pn=null}#n(e,t){e.f^=Wt;for(var r=e.first;r!==null;){var s=r.f,i=(s&(vr|jr))!==0,o=i&&(s&Wt)!==0,a=o||(s&mn)!==0||this.skipped_effects.has(r);if((r.f&oa)!==0&&r.b?.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=Wt:(s&Ql)!==0?t.effects.push(r):eo(r)&&((r.f&mr)!==0&&t.block_effects.push(r),Ui(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),r=c.next,c=c.parent}}#a(e){for(const t of e)((t.f&an)!==0?this.#o:this.#i).push(t),Gt(t,Wt)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Pn?.set(e,e.v)}activate(){Ke=this}deactivate(){Ke=null,Pn=null}flush(){if(this.activate(),jn.length>0){if(Th(),Ke!==null&&Ke!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(mo.size>1){this.previous.clear();var e=Pn,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of mo){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of i)Sh(c,o,a,l);if(jn.length>0){Ke=s,s.apply();for(const c of jn)s.#n(c,r);jn=[],s.deactivate()}}}Ke=null,Pn=e}this.committed=!0,mo.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)Gt(e,an),ss(e);for(const e of this.#i)Gt(e,gr),ss(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=mh()).promise}static ensure(){if(Ke===null){const e=Ke=new Dn;mo.add(Ke),Ei||Dn.enqueue(()=>{Ke===e&&e.flush()})}return Ke}static enqueue(e){Br(e)}apply(){}}function it(n){var e=Ei;Ei=!0;try{for(var t;;){if(lg(),jn.length===0&&(Ke?.flush(),jn.length===0))return da=null,t;Th()}}finally{Ei=e}}function Th(){var n=As;ll=!0;try{var e=0;for(Ou(!0);jn.length>0;){var t=Dn.ensure();if(e++>1e3){var r,s;cg()}t.process(jn),Ar.clear()}}finally{ll=!1,Ou(n),da=null}}function cg(){try{zv()}catch(n){$s(n,da)}}let Zn=null;function Ru(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(ir|mn))===0&&eo(r)&&(Zn=new Set,Ui(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Hh(r):r.fn=null),Zn?.size>0)){Ar.clear();for(const s of Zn){if((s.f&(ir|mn))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Zn.has(o)&&(Zn.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(ir|mn))===0&&Ui(l)}}Zn.clear()}}Zn=null}}function Sh(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Kt)!==0?Sh(s,e,t,r):(i&(Xl|mr))!==0&&(i&an)===0&&Ah(s,e,r)&&(Gt(s,an),ss(s))}}function Ah(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(e.includes(s))return!0;if((s.f&Kt)!==0&&Ah(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function ss(n){for(var e=da=n;e.parent!==null;){e=e.parent;var t=e.f;if(ll&&e===Ie&&(t&mr)!==0)return;if((t&(jr|vr))!==0){if((t&Wt)===0)return;e.f^=Wt}}jn.push(e)}function ug(n){let e=0,t=$r(0),r;return()=>{Eg()&&(m(t),fa(()=>(e===0&&(r=Gn(()=>n(()=>xi(t)))),e+=1,()=>{Br(()=>{e-=1,e===0&&(r?.(),r=void 0,xi(t))})})))}}var dg=Dr|hs|oa;function hg(n,e,t){new fg(n,e,t)}class fg{parent;#t=!1;#e;#r=_e?Ue:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=ug(()=>(this.#h=$r(this.#f),()=>{this.#h=null}));constructor(e,t,r){this.#e=e,this.#s=t,this.#l=r,this.parent=Ie.b,this.#t=!!this.#s.pending,this.#o=fs(()=>{if(Ie.b=this,_e){const i=this.#r;rs(),i.nodeType===Js&&i.data===ca?this.#y():this.#w()}else{var s=this.#g();try{this.#i=rn(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},dg),_e&&(this.#e=Ue)}#w(){try{this.#i=rn(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=rn(()=>e(this.#e)),Dn.enqueue(()=>{var t=this.#g();this.#i=this.#m(()=>(Dn.ensure(),rn(()=>this.#l(t)))),this.#d>0?this.#v():(Ss(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=In(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#m(e){var t=Ie,r=Me,s=dt;Tn(this.#o),sn(this.#o),Ds(this.#o.ctx);try{return e()}catch(i){return Ih(i),null}finally{Tn(t),sn(r),Ds(s)}}#v(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Kh(this.#i,this.#c)),this.#n===null&&(this.#n=rn(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&Ss(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Ms(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var t=this.#s.onerror;let r=this.#s.failed;if(this.#p||!t&&!r)throw e;this.#i&&(St(this.#i),this.#i=null),this.#n&&(St(this.#n),this.#n=null),this.#a&&(St(this.#a),this.#a=null),_e&&(qt(this.#r),Xn(),qt(No()));var s=!1,i=!1;const o=()=>{if(s){ig();return}s=!0,i&&Wv(),Dn.ensure(),this.#f=0,this.#a!==null&&Ss(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#m(()=>(this.#p=!1,rn(()=>this.#l(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=Me;try{sn(null),i=!0,t?.(e,o),i=!1}catch(l){$s(l,this.#o&&this.#o.parent)}finally{sn(a)}r&&Br(()=>{this.#a=this.#m(()=>{Dn.ensure(),this.#p=!0;try{return rn(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return $s(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Rh(n,e,t,r){const s=Qi()?Ji:nc;if(t.length===0&&n.length===0){r(e.map(s));return}var i=Ke,o=Ie,a=pg();function l(){Promise.all(t.map(c=>mg(c))).then(c=>{a();try{r([...e.map(s),...c])}catch(f){(o.f&ir)===0&&$s(f,o)}i?.deactivate(),Lo()}).catch(c=>{$s(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{i?.deactivate(),Lo()}}):l()}function pg(){var n=Ie,e=Me,t=dt,r=Ke;return function(i=!0){Tn(n),sn(e),Ds(t),i&&r?.activate()}}function Lo(){Tn(null),sn(null),Ds(null)}function Ji(n){var e=Kt|an,t=Me!==null&&(Me.f&Kt)!==0?Me:null;return Ie===null||t!==null&&(t.f&Cn)!==0?e|=Cn:Ie.f|=hs,{ctx:dt,deps:null,effects:null,equals:Eh,f:e,fn:n,reactions:null,rv:0,v:Ft,wv:0,parent:t??Ie,ac:null}}function mg(n,e){let t=Ie;t===null&&$v();var r=t.b,s=void 0,i=$r(Ft),o=!Me,a=new Map;return Ig(()=>{var l=mh();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===Ke&&c.committed&&c.deactivate(),Lo()})}catch(h){l.reject(h),Lo()}var c=Ke;if(o){var f=!r.is_pending();r.update_pending_count(1),c.increment(f),a.get(c)?.reject(Cs),a.delete(c),a.set(c,l)}const p=(h,v=void 0)=>{if(c.activate(),v)v!==Cs&&(i.f|=Xr,Ms(i,v));else{(i.f&Xr)!==0&&(i.f^=Xr),Ms(i,h);for(const[g,b]of a){if(a.delete(g),g===c)break;b.reject(Cs)}}o&&(r.update_pending_count(-1),c.decrement(f))};l.promise.then(p,h=>p(null,h||"unknown"))}),Xi(()=>{for(const l of a.values())l.reject(Cs)}),new Promise(l=>{function c(f){function p(){f===s?l(i):c(s)}f.then(p,p)}c(s)})}function Zr(n){const e=Ji(n);return Yh(e),e}function nc(n){const e=Ji(n);return e.equals=kh,e}function Ph(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)St(e[t])}}function vg(n){for(var e=n.parent;e!==null;){if((e.f&Kt)===0)return e;e=e.parent}return null}function rc(n){var e,t=Ie;Tn(vg(n));try{n.f&=~Po,Ph(n),e=Zh(n)}finally{Tn(t)}return e}function Nh(n){var e=rc(n);if(n.equals(e)||(n.v=e,n.wv=Jh()),!ps)if(Pn!==null)Pn.set(n,n.v);else{var t=(Ir||(n.f&Cn)!==0)&&n.deps!==null?gr:Wt;Gt(n,t)}}let cl=new Set;const Ar=new Map;let Lh=!1;function $r(n,e){var t={f:0,v:n,reactions:null,equals:Eh,rv:0,wv:0};return t}function re(n,e){const t=$r(n);return Yh(t),t}function sc(n,e=!1,t=!0){const r=$r(n);return e||(r.equals=kh),Xs&&t&&dt!==null&&dt.l!==null&&(dt.l.s??=[]).push(r),r}function x(n,e,t=!1){Me!==null&&(!Nn||(Me.f&Au)!==0)&&Qi()&&(Me.f&(Kt|mr|Xl|Au))!==0&&!or?.includes(n)&&Hv();let r=t?Xt(e):e;return Ms(n,r)}function Ms(n,e){if(!n.equals(e)){var t=n.v;ps?Ar.set(n,e):Ar.set(n,t),n.v=e;var r=Dn.ensure();r.capture(n,t),(n.f&Kt)!==0&&((n.f&an)!==0&&rc(n),Gt(n,(n.f&Cn)===0?Wt:gr)),n.wv=Jh(),Oh(n,an),Qi()&&Ie!==null&&(Ie.f&Wt)!==0&&(Ie.f&(vr|jr))===0&&(yn===null?Ag([n]):yn.push(n)),!r.is_fork&&cl.size>0&&!Lh&&gg()}return e}function gg(){Lh=!1;const n=Array.from(cl);for(const e of n)(e.f&Wt)!==0&&Gt(e,gr),eo(e)&&Ui(e);cl.clear()}function ul(n,e=1){var t=m(n),r=e===1?t++:t--;return x(n,t),r}function xi(n){x(n,n.v+1)}function Oh(n,e){var t=n.reactions;if(t!==null)for(var r=Qi(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!r&&o===Ie)){var l=(a&an)===0;l&&Gt(o,e),(a&Kt)!==0?(a&Po)===0&&(o.f|=Po,Oh(o,gr)):l&&((a&mr)!==0&&Zn!==null&&Zn.add(o),ss(o))}}}function Xt(n){if(typeof n!="object"||n===null||Hn in n)return n;const e=Yl(n);if(e!==Av&&e!==Rv)return n;var t=new Map,r=Gl(n),s=re(0),i=es,o=a=>{if(es===i)return a();var l=Me,c=es;sn(null),$u(i);var f=a();return sn(l),$u(c),f};return r&&t.set("length",re(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Bv();var f=t.get(l);return f===void 0?f=o(()=>{var p=re(c.value);return t.set(l,p),p}):x(f,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const f=o(()=>re(Ft));t.set(l,f),xi(s)}}else x(c,Ft),xi(s);return!0},get(a,l,c){if(l===Hn)return n;var f=t.get(l),p=l in a;if(f===void 0&&(!p||sr(a,l)?.writable)&&(f=o(()=>{var v=Xt(p?a[l]:Ft),g=re(v);return g}),t.set(l,f)),f!==void 0){var h=m(f);return h===Ft?void 0:h}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var f=t.get(l);f&&(c.value=m(f))}else if(c===void 0){var p=t.get(l),h=p?.v;if(p!==void 0&&h!==Ft)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(a,l){if(l===Hn)return!0;var c=t.get(l),f=c!==void 0&&c.v!==Ft||Reflect.has(a,l);if(c!==void 0||Ie!==null&&(!f||sr(a,l)?.writable)){c===void 0&&(c=o(()=>{var h=f?Xt(a[l]):Ft,v=re(h);return v}),t.set(l,c));var p=m(c);if(p===Ft)return!1}return f},set(a,l,c,f){var p=t.get(l),h=l in a;if(r&&l==="length")for(var v=c;v<p.v;v+=1){var g=t.get(v+"");g!==void 0?x(g,Ft):v in a&&(g=o(()=>re(Ft)),t.set(v+"",g))}if(p===void 0)(!h||sr(a,l)?.writable)&&(p=o(()=>re(void 0)),x(p,Xt(c)),t.set(l,p));else{h=p.v!==Ft;var b=o(()=>Xt(c));x(p,b)}var y=Reflect.getOwnPropertyDescriptor(a,l);if(y?.set&&y.set.call(f,c),!h){if(r&&typeof l=="string"){var k=t.get("length"),I=Number(l);Number.isInteger(I)&&I>=k.v&&x(k,I+1)}xi(s)}return!0},ownKeys(a){m(s);var l=Reflect.ownKeys(a).filter(p=>{var h=t.get(p);return h===void 0||h.v!==Ft});for(var[c,f]of t)f.v!==Ft&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Vv()}})}function Pu(n){try{if(n!==null&&typeof n=="object"&&Hn in n)return n[Hn]}catch{}return n}function _g(n,e){return Object.is(Pu(n),Pu(e))}var Nu,Dh,$h,Mh;function dl(){if(Nu===void 0){Nu=window,Dh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;$h=sr(e,"firstChild").get,Mh=sr(e,"nextSibling").get,Su(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Su(t)&&(t.__t=void 0)}}function In(n=""){return document.createTextNode(n)}function Fn(n){return $h.call(n)}function Kn(n){return Mh.call(n)}function d(n,e){if(!_e)return Fn(n);var t=Fn(Ue);if(t===null)t=Ue.appendChild(In());else if(e&&t.nodeType!==ec){var r=In();return t?.before(r),qt(r),r}return qt(t),t}function ue(n,e=!1){if(!_e){var t=Fn(n);return t instanceof Comment&&t.data===""?Kn(t):t}if(e&&Ue?.nodeType!==ec){var r=In();return Ue?.before(r),qt(r),r}return Ue}function _(n,e=1,t=!1){let r=_e?Ue:n;for(var s;e--;)s=r,r=Kn(r);if(!_e)return r;if(t&&r?.nodeType!==ec){var i=In();return r===null?s?.after(i):r.before(i),qt(i),i}return qt(r),r}function ic(n){n.textContent=""}function Uh(){return!1}function bg(n,e){if(e){const t=document.body;n.autofocus=!0,Br(()=>{document.activeElement===t&&n.focus()})}}function wg(n){_e&&Fn(n)!==null&&ic(n)}let Lu=!1;function Fh(){Lu||(Lu=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function ha(n){var e=Me,t=Ie;sn(null),Tn(null);try{return n()}finally{sn(e),Tn(t)}}function zh(n,e,t,r=t){n.addEventListener(e,()=>ha(t));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),Fh()}function qh(n){Ie===null&&Me===null&&Fv(),Me!==null&&(Me.f&Cn)!==0&&Ie===null&&Uv(),ps&&Mv()}function yg(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function zn(n,e,t,r=!0){var s=Ie;s!==null&&(s.f&mn)!==0&&(n|=mn);var i={ctx:dt,deps:null,nodes_start:null,nodes_end:null,f:n|an,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Ui(i),i.f|=Jl}catch(l){throw St(i),l}else e!==null&&ss(i);if(r){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&hs)===0&&(o=o.first,(n&mr)!==0&&(n&Dr)!==0&&o!==null&&(o.f|=Dr)),o!==null&&(o.parent=s,s!==null&&yg(o,s),Me!==null&&(Me.f&Kt)!==0&&(n&jr)===0)){var a=Me;(a.effects??=[]).push(o)}}return i}function Eg(){return Me!==null&&!Nn}function Xi(n){const e=zn(ia,null,!1);return Gt(e,Wt),e.teardown=n,e}function Us(n){qh();var e=Ie.f,t=!Me&&(e&vr)!==0&&(e&Jl)===0;if(t){var r=dt;(r.e??=[]).push(n)}else return jh(n)}function jh(n){return zn(Ql|vh,n,!1)}function xg(n){return qh(),zn(ia|vh,n,!0)}function kg(n){Dn.ensure();const e=zn(jr|hs,n,!0);return()=>{St(e)}}function Cg(n){Dn.ensure();const e=zn(jr|hs,n,!0);return(t={})=>new Promise(r=>{t.outro?Ss(e,()=>{St(e),r(void 0)}):(St(e),r(void 0))})}function Zi(n){return zn(Ql,n,!1)}function Ig(n){return zn(Xl|hs,n,!0)}function fa(n,e=0){return zn(ia|e,n,!0)}function $(n,e=[],t=[],r=[]){Rh(r,e,t,s=>{zn(ia,()=>n(...s.map(m)),!0)})}function fs(n,e=0){var t=zn(mr|e,n,!0);return t}function rn(n,e=!0){return zn(vr|hs,n,!0,e)}function Bh(n){var e=n.teardown;if(e!==null){const t=ps,r=Me;Du(!0),sn(null);try{e.call(null)}finally{Du(t),sn(r)}}}function Vh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&ha(()=>{s.abort(Cs)});var r=t.next;(t.f&jr)!==0?t.parent=null:St(t,e),t=r}}function Tg(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&vr)===0&&St(e),e=t}}function St(n,e=!0){var t=!1;(e||(n.f&Lv)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Sg(n.nodes_start,n.nodes_end),t=!0),Vh(n,e&&!t),Oo(n,0),Gt(n,ir);var r=n.transitions;if(r!==null)for(const i of r)i.stop();Bh(n);var s=n.parent;s!==null&&s.first!==null&&Hh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Sg(n,e){for(;n!==null;){var t=n===e?null:Kn(n);n.remove(),n=t}}function Hh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Ss(n,e,t=!0){var r=[];oc(n,r,!0),Wh(r,()=>{t&&St(n),e&&e()})}function Wh(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var s of n)s.out(r)}else e()}function oc(n,e,t){if((n.f&mn)===0){if(n.f^=mn,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,i=(r.f&Dr)!==0||(r.f&vr)!==0&&(n.f&mr)!==0;oc(r,e,i?t:!1),r=s}}}function ac(n){Gh(n,!0)}function Gh(n,e){if((n.f&mn)!==0){n.f^=mn,(n.f&Wt)===0&&(Gt(n,an),ss(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&Dr)!==0||(t.f&vr)!==0;Gh(t,s?e:!1),t=r}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}function Kh(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var s=t===r?null:Kn(t);e.append(t),t=s}}let As=!1;function Ou(n){As=n}let ps=!1;function Du(n){ps=n}let Me=null,Nn=!1;function sn(n){Me=n}let Ie=null;function Tn(n){Ie=n}let or=null;function Yh(n){Me!==null&&(or===null?or=[n]:or.push(n))}let Jt=null,dn=0,yn=null;function Ag(n){yn=n}let Qh=1,Mi=0,es=Mi;function $u(n){es=n}let Ir=!1;function Jh(){return++Qh}function eo(n){var e=n.f;if((e&an)!==0)return!0;if((e&gr)!==0){var t=n.deps,r=(e&Cn)!==0;if(e&Kt&&(n.f&=~Po),t!==null){var s,i,o=(e&Ro)!==0,a=r&&Ie!==null&&!Ir,l=t.length;if((o||a)&&(Ie===null||(Ie.f&ir)===0)){var c=n,f=c.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(c))&&(i.reactions??=[]).push(c);o&&(c.f^=Ro),a&&f!==null&&(f.f&Cn)===0&&(c.f^=Cn)}for(s=0;s<l;s++)if(i=t[s],eo(i)&&Nh(i),i.wv>n.wv)return!0}(!r||Ie!==null&&!Ir)&&Gt(n,Wt)}return!1}function Xh(n,e,t=!0){var r=n.reactions;if(r!==null&&!or?.includes(n))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Kt)!==0?Xh(i,e,!1):e===i&&(t?Gt(i,an):(i.f&Wt)!==0&&Gt(i,gr),ss(i))}}function Zh(n){var e=Jt,t=dn,r=yn,s=Me,i=Ir,o=or,a=dt,l=Nn,c=es,f=n.f;Jt=null,dn=0,yn=null,Ir=(f&Cn)!==0&&(Nn||!As||Me===null),Me=(f&(vr|jr))===0?n:null,or=null,Ds(n.ctx),Nn=!1,es=++Mi,n.ac!==null&&(ha(()=>{n.ac.abort(Cs)}),n.ac=null);try{n.f|=al;var p=n.fn,h=p(),v=n.deps;if(Jt!==null){var g;if(Oo(n,dn),v!==null&&dn>0)for(v.length=dn+Jt.length,g=0;g<Jt.length;g++)v[dn+g]=Jt[g];else n.deps=v=Jt;if(!Ir||(f&Kt)!==0&&n.reactions!==null)for(g=dn;g<v.length;g++)(v[g].reactions??=[]).push(n)}else v!==null&&dn<v.length&&(Oo(n,dn),v.length=dn);if(Qi()&&yn!==null&&!Nn&&v!==null&&(n.f&(Kt|gr|an))===0)for(g=0;g<yn.length;g++)Xh(yn[g],n);return s!==null&&s!==n&&(Mi++,yn!==null&&(r===null?r=yn:r.push(...yn))),(n.f&Xr)!==0&&(n.f^=Xr),h}catch(b){return Ih(b)}finally{n.f^=al,Jt=e,dn=t,yn=r,Me=s,Ir=i,or=o,Ds(a),Nn=l,es=c}}function Rg(n,e){let t=e.reactions;if(t!==null){var r=Sv.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(e.f&Kt)!==0&&(Jt===null||!Jt.includes(e))&&(Gt(e,gr),(e.f&(Cn|Ro))===0&&(e.f^=Ro),Ph(e),Oo(e,0))}function Oo(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)Rg(n,t[r])}function Ui(n){var e=n.f;if((e&ir)===0){Gt(n,Wt);var t=Ie,r=As;Ie=n,As=!0;try{(e&mr)!==0?Tg(n):Vh(n),Bh(n);var s=Zh(n);n.teardown=typeof s=="function"?s:null,n.wv=Qh;var i;fh&&og&&(n.f&an)!==0&&n.deps}finally{As=r,Ie=t}}}async function Pg(){await Promise.resolve(),it()}function m(n){var e=n.f,t=(e&Kt)!==0;if(Me!==null&&!Nn){var r=Ie!==null&&(Ie.f&ir)!==0;if(!r&&!or?.includes(n)){var s=Me.deps;if((Me.f&al)!==0)n.rv<Mi&&(n.rv=Mi,Jt===null&&s!==null&&s[dn]===n?dn++:Jt===null?Jt=[n]:(!Ir||!Jt.includes(n))&&Jt.push(n));else{(Me.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Me]:i.includes(Me)||i.push(Me)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&Cn)===0&&(o.f^=Cn)}if(ps){if(Ar.has(n))return Ar.get(n);if(t){o=n;var l=o.v;return((o.f&Wt)===0&&o.reactions!==null||ef(o))&&(l=rc(o)),Ar.set(o,l),l}}else if(t){if(o=n,Pn?.has(o))return Pn.get(o);eo(o)&&Nh(o)}if(Pn?.has(n))return Pn.get(n);if((n.f&Xr)!==0)throw n.v;return n.v}function ef(n){if(n.v===Ft)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Ar.has(e)||(e.f&Kt)!==0&&ef(e))return!0;return!1}function Gn(n){var e=Nn;try{return Nn=!0,n()}finally{Nn=e}}const Ng=-7169;function Gt(n,e){n.f=n.f&Ng|e}function ks(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Hn in n)hl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Hn in t&&hl(t)}}}function hl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{hl(n[r],e)}catch{}const t=Yl(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=ph(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}function Lg(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Og=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Dg(n){return Og.includes(n)}const $g={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Mg(n){return n=n.toLowerCase(),$g[n]??n}const Ug=["touchstart","touchmove"];function Fg(n){return Ug.includes(n)}const zg=["textarea","script","style","title"];function qg(n){return zg.includes(n)}const tf=new Set,fl=new Set;function nf(n,e,t,r={}){function s(i){if(r.capture||gi.call(e,i),!i.cancelBubble)return ha(()=>t?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Br(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function Fs(n,e,t,r,s){var i={capture:r,passive:s},o=nf(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Xi(()=>{e.removeEventListener(n,o,i)})}function yt(n){for(var e=0;e<n.length;e++)tf.add(n[e]);for(var t of fl)t(n)}let Mu=null;function gi(n){var e=this,t=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;Mu=n;var o=0,a=Mu===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=s[o]||n.target,i!==e){$i(n,"currentTarget",{configurable:!0,get(){return i||t}});var f=Me,p=Ie;sn(null),Tn(null);try{for(var h,v=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var b=i["__"+r];b!=null&&(!i.disabled||n.target===i)&&b.call(i,n)}catch(y){h?v.push(y):h=y}if(n.cancelBubble||g===e||g===null)break;i=g}if(h){for(let y of v)queueMicrotask(()=>{throw y});throw h}}finally{n.__root=e,delete n.currentTarget,sn(f),Tn(p)}}}function rf(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function ar(n,e){var t=Ie;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function S(n,e){var t=(e&Zv)!==0,r=(e&eg)!==0,s,i=!n.startsWith("<!>");return()=>{if(_e)return ar(Ue,null),Ue;s===void 0&&(s=rf(i?n:"<!>"+n),t||(s=Fn(s)));var o=r||Dh?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=Fn(o),l=o.lastChild;ar(a,l)}else ar(o,o);return o}}function jg(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(_e)return ar(Ue,null),Ue;if(!i){var o=rf(s),a=Fn(o);i=Fn(a)}var l=i.cloneNode(!0);return ar(l,l),l}}function Bg(n,e){return jg(n,e,"svg")}function be(){if(_e)return ar(Ue,null),Ue;var n=document.createDocumentFragment(),e=document.createComment(""),t=In();return n.append(e,t),ar(e,t),n}function E(n,e){if(_e){Ie.nodes_end=Ue,rs();return}n!==null&&n.before(e)}function w(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function lc(n,e){return sf(n,e)}function Vg(n,e){dl(),e.intro=e.intro??!1;const t=e.target,r=_e,s=Ue;try{for(var i=Fn(t);i&&(i.nodeType!==Js||i.data!==wh);)i=Kn(i);if(!i)throw Os;hn(!0),qt(i);const o=sf(n,{...e,anchor:i});return hn(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Os&&console.warn("Failed to hydrate: ",o),e.recover===!1&&qv(),dl(),ic(t),hn(!1),lc(n,e)}finally{hn(r),qt(s)}}const ws=new Map;function sf(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:o=!0}){dl();var a=new Set,l=p=>{for(var h=0;h<p.length;h++){var v=p[h];if(!a.has(v)){a.add(v);var g=Fg(v);e.addEventListener(v,gi,{passive:g});var b=ws.get(v);b===void 0?(document.addEventListener(v,gi,{passive:g}),ws.set(v,1)):ws.set(v,b+1)}}};l(Kl(tf)),fl.add(l);var c=void 0,f=Cg(()=>{var p=t??e.appendChild(In());return hg(p,{pending:()=>{}},h=>{if(i){et({});var v=dt;v.c=i}if(s&&(r.$$events=s),_e&&ar(h,null),c=n(h,r)||{},_e&&(Ie.nodes_end=Ue,Ue===null||Ue.nodeType!==Js||Ue.data!==tc))throw ua(),Os;i&&tt()}),()=>{for(var h of a){e.removeEventListener(h,gi);var v=ws.get(h);--v===0?(document.removeEventListener(h,gi),ws.delete(h)):ws.set(h,v)}fl.delete(l),p!==t&&p.parentNode?.removeChild(p)}});return pl.set(c,f),c}let pl=new WeakMap;function Hg(n,e){const t=pl.get(n);return t?(pl.delete(n),t(e)):Promise.resolve()}class cc{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=Ke;if(this.#t.has(e)){var t=this.#t.get(e),r=this.#e.get(t);if(r)ac(r);else{var s=this.#r.get(t);s&&(this.#e.set(t,s.effect),this.#r.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(St(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var c=document.createDocumentFragment();Kh(o,c),c.append(In()),this.#r.set(i,{effect:o,fragment:c})}else St(o);this.#e.delete(i)};this.#s||!r?Ss(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[r,s]of this.#r)t.includes(r)||(St(s.effect),this.#r.delete(r))};ensure(e,t){var r=Ke,s=Uh();if(t&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=In();i.append(o),this.#r.set(e,{effect:rn(()=>t(o)),fragment:i})}else this.#e.set(e,rn(()=>t(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else _e&&(this.anchor=Ue),this.#l()}}function Y(n,e,t=!1){_e&&rs();var r=new cc(n),s=t?Dr:0;function i(o,a){if(_e){const c=yh(n)===ca;if(o===c){var l=No();qt(l),r.anchor=l,hn(!1),r.ensure(o,a),hn(!0);return}}r.ensure(o,a)}fs(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function er(n,e){return e}function Wg(n,e,t){for(var r=n.items,s=[],i=e.length,o=0;o<i;o++)oc(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;ic(l),l.append(t),r.clear(),qn(n,e[0].prev,e[i-1].next)}Wh(s,()=>{for(var c=0;c<i;c++){var f=e[c];a||(r.delete(f.k),qn(n,f.prev,f.next)),St(f.e,!a)}})}function Zt(n,e,t,r,s,i=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&_h)!==0;if(l){var c=n;o=_e?qt(Fn(c)):c.appendChild(In())}_e&&rs();var f=null,p=!1,h=new Map,v=nc(()=>{var k=t();return Gl(k)?k:k==null?[]:Kl(k)}),g,b;function y(){Gg(b,g,a,h,o,s,e,r,t),i!==null&&(g.length===0?f?ac(f):f=rn(()=>i(o)):f!==null&&Ss(f,()=>{f=null}))}fs(()=>{b??=Ie,g=m(v);var k=g.length;if(p&&k===0)return;p=k===0;let I=!1;if(_e){var R=yh(o)===ca;R!==(k===0)&&(o=No(),qt(o),hn(!1),I=!0)}if(_e){for(var P=null,M,L=0;L<k;L++){if(Ue.nodeType===Js&&Ue.data===tc){o=Ue,I=!0,hn(!1);break}var A=g[L],C=r(A,L);M=ml(Ue,a,P,null,A,C,L,s,e,t),a.items.set(C,M),P=M}k>0&&qt(No())}if(_e)k===0&&i&&(f=rn(()=>i(o)));else if(Uh()){var T=new Set,O=Ke;for(L=0;L<k;L+=1){A=g[L],C=r(A,L);var D=a.items.get(C)??h.get(C);D?(e&(aa|la))!==0&&of(D,A,L,e):(M=ml(null,a,null,null,A,C,L,s,e,t,!0),h.set(C,M)),T.add(C)}for(const[q,G]of a.items)T.has(q)||O.skipped_effects.add(G.e);O.oncommit(y)}else y();I&&hn(!0),m(v)}),_e&&(o=Ue)}function Gg(n,e,t,r,s,i,o,a,l){var c=(o&Gv)!==0,f=(o&(aa|la))!==0,p=e.length,h=t.items,v=t.first,g=v,b,y=null,k,I=[],R=[],P,M,L,A;if(c)for(A=0;A<p;A+=1)P=e[A],M=a(P,A),L=h.get(M),L!==void 0&&(L.a?.measure(),(k??=new Set).add(L));for(A=0;A<p;A+=1){if(P=e[A],M=a(P,A),L=h.get(M),L===void 0){var C=r.get(M);if(C!==void 0){r.delete(M),h.set(M,C);var T=y?y.next:g;qn(t,y,C),qn(t,C,T),Da(C,T,s),y=C}else{var O=g?g.e.nodes_start:s;y=ml(O,t,y,y===null?t.first:y.next,P,M,A,i,o,l)}h.set(M,y),I=[],R=[],g=y.next;continue}if(f&&of(L,P,A,o),(L.e.f&mn)!==0&&(ac(L.e),c&&(L.a?.unfix(),(k??=new Set).delete(L))),L!==g){if(b!==void 0&&b.has(L)){if(I.length<R.length){var D=R[0],q;y=D.prev;var G=I[0],te=I[I.length-1];for(q=0;q<I.length;q+=1)Da(I[q],D,s);for(q=0;q<R.length;q+=1)b.delete(R[q]);qn(t,G.prev,te.next),qn(t,y,G),qn(t,te,D),g=D,y=te,A-=1,I=[],R=[]}else b.delete(L),Da(L,g,s),qn(t,L.prev,L.next),qn(t,L,y===null?t.first:y.next),qn(t,y,L),y=L;continue}for(I=[],R=[];g!==null&&g.k!==M;)(g.e.f&mn)===0&&(b??=new Set).add(g),R.push(g),g=g.next;if(g===null)continue;L=g}I.push(L),y=L,g=L.next}if(g!==null||b!==void 0){for(var ne=b===void 0?[]:Kl(b);g!==null;)(g.e.f&mn)===0&&ne.push(g),g=g.next;var le=ne.length;if(le>0){var Ce=(o&_h)!==0&&p===0?s:null;if(c){for(A=0;A<le;A+=1)ne[A].a?.measure();for(A=0;A<le;A+=1)ne[A].a?.fix()}Wg(t,ne,Ce)}}c&&Br(()=>{if(k!==void 0)for(L of k)L.a?.apply()}),n.first=t.first&&t.first.e,n.last=y&&y.e;for(var pe of r.values())St(pe.e);r.clear()}function of(n,e,t,r){(r&aa)!==0&&Ms(n.v,e),(r&la)!==0?Ms(n.i,t):n.i=t}function ml(n,e,t,r,s,i,o,a,l,c,f){var p=(l&aa)!==0,h=(l&Kv)===0,v=p?h?sc(s,!1,!1):$r(s):s,g=(l&la)===0?o:$r(o),b={i:g,v,k:i,a:null,e:null,prev:t,next:r};try{if(n===null){var y=document.createDocumentFragment();y.append(n=In())}return b.e=rn(()=>a(n,v,g,c),_e),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?f||(e.first=b):(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Da(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==null&&i!==r;){var o=Kn(i);s.before(i),i=o}}function qn(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function pt(n,e,t,r,s){_e&&rs();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(n,o?()=>r:r)}function ys(n,e,...t){var r=new cc(n);fs(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...t)))},Dr)}function Kg(n,e,t,r,s,i){let o=_e;_e&&rs();var a=null;_e&&Ue.nodeType===Dv&&(a=Ue,rs());var l=_e?Ue:n,c=new cc(l,!1);fs(()=>{const f=e()||null;var p=ng;if(f===null){c.ensure(null,null);return}return c.ensure(f,h=>{if(f){if(a=_e?a:document.createElementNS(p,f),ar(a,a),r){_e&&qg(f)&&a.append(document.createComment(""));var v=_e?Fn(a):a.appendChild(In());_e&&(v===null?hn(!1):qt(v)),r(a,v)}Ie.nodes_end=a,h.before(a)}_e&&qt(h)}),()=>{}},Dr),Xi(()=>{}),o&&(hn(!0),qt(l))}function nt(n,e){Zi(()=>{var t=n.getRootNode(),r=t.host?t:t.head??t.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function Yg(n,e){var t=void 0,r;fs(()=>{t!==(t=e())&&(r&&(St(r),r=null),t&&(r=rn(()=>{Zi(()=>t(n))})))})}function af(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=af(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Qg(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=af(n))&&(r&&(r+=" "),r+=e);return r}function Jg(n){return typeof n=="object"?Qg(n):n??""}const Uu=[...` 	
\r\f \v\uFEFF`];function Xg(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||Uu.includes(r[o-1]))&&(a===r.length||Uu.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Fu(n,e=!1){var t=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+t)}return r}function $a(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Zg(n,e){if(e){var t="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map($a)),s&&l.push(...Object.keys(s).map($a));var c=0,f=-1;const b=n.length;for(var p=0;p<b;p++){var h=n[p];if(a?h==="/"&&n[p-1]==="*"&&(a=!1):i?i===h&&(i=!1):h==="/"&&n[p+1]==="*"?a=!0:h==='"'||h==="'"?i=h:h==="("?o++:h===")"&&o--,!a&&i===!1&&o===0){if(h===":"&&f===-1)f=p;else if(h===";"||p===b-1){if(f!==-1){var v=$a(n.substring(c,f).trim());if(!l.includes(v)){h!==";"&&p++;var g=n.substring(c,p).trim();t+=" "+g+";"}}c=p+1,f=-1}}}}return r&&(t+=Fu(r)),s&&(t+=Fu(s,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function En(n,e,t,r,s,i){var o=n.__className;if(_e||o!==t||o===void 0){var a=Xg(t,r,i);(!_e||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(i&&s!==i)for(var l in i){var c=!!i[l];(s==null||c!==!!s[l])&&n.classList.toggle(l,c)}return i}function Ma(n,e={},t,r){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function uc(n,e,t,r){var s=n.__style;if(_e||s!==e){var i=Zg(e,r);(!_e||i!==n.getAttribute("style"))&&(i==null?n.removeAttribute("style"):n.style.cssText=i),n.__style=e}else r&&(Array.isArray(r)?(Ma(n,t?.[0],r[0]),Ma(n,t?.[1],r[1],"important")):Ma(n,t,r));return r}function Fi(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Gl(e))return sg();for(var r of n.options)r.selected=e.includes(ki(r));return}for(r of n.options){var s=ki(r);if(_g(s,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function dc(n){var e=new MutationObserver(()=>{Fi(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xi(()=>{e.disconnect()})}function hc(n,e,t=e){var r=new WeakSet,s=!0;zh(n,"change",i=>{var o=i?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),ki);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&ki(l)}t(a),Ke!==null&&r.add(Ke)}),Zi(()=>{var i=e();if(n===document.activeElement){var o=yi??Ke;if(r.has(o))return}if(Fi(n,i,s),s&&i===void 0){var a=n.querySelector(":checked");a!==null&&(i=ki(a),t(i))}n.__value=i,s=!1}),dc(n)}function ki(n){return"__value"in n?n.__value:n.value}const oi=Symbol("class"),ai=Symbol("style"),lf=Symbol("is custom element"),cf=Symbol("is html");function zs(n){if(_e){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Oe(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var s=n.checked;Oe(n,"checked",null),n.checked=s}}};n.__on_r=t,Br(t),Fh()}}function e_(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Oe(n,e,t,r){var s=uf(n);_e&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(n[Ov]=t),t==null?n.removeAttribute(e):typeof t!="string"&&df(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function t_(n,e,t,r,s=!1,i=!1){if(_e&&s&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||zs(o)}var l=uf(n),c=l[lf],f=!l[cf];let p=_e&&c;p&&hn(!1);var h=e||{},v=n.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);t.class?t.class=Jg(t.class):t[oi]&&(t.class=null),t[ai]&&(t.style??=null);var b=df(n);for(const A in t){let C=t[A];if(v&&A==="value"&&C==null){n.value=n.__value="",h[A]=C;continue}if(A==="class"){var y=n.namespaceURI==="http://www.w3.org/1999/xhtml";En(n,y,C,r,e?.[oi],t[oi]),h[A]=C,h[oi]=t[oi];continue}if(A==="style"){uc(n,C,e?.[ai],t[ai]),h[A]=C,h[ai]=t[ai];continue}var k=h[A];if(!(C===k&&!(C===void 0&&n.hasAttribute(A)))){h[A]=C;var I=A[0]+A[1];if(I!=="$$")if(I==="on"){const T={},O="$$"+A;let D=A.slice(2);var R=Dg(D);if(Lg(D)&&(D=D.slice(0,-7),T.capture=!0),!R&&k){if(C!=null)continue;n.removeEventListener(D,h[O],T),h[O]=null}if(C!=null)if(R)n[`__${D}`]=C,yt([D]);else{let q=function(G){h[A].call(this,G)};var L=q;h[O]=nf(D,n,q,T)}else R&&(n[`__${D}`]=void 0)}else if(A==="style")Oe(n,A,C);else if(A==="autofocus")bg(n,!!C);else if(!c&&(A==="__value"||A==="value"&&C!=null))n.value=n.__value=C;else if(A==="selected"&&v)e_(n,C);else{var P=A;f||(P=Mg(P));var M=P==="defaultValue"||P==="defaultChecked";if(C==null&&!c&&!M)if(l[A]=null,P==="value"||P==="checked"){let T=n;const O=e===void 0;if(P==="value"){let D=T.defaultValue;T.removeAttribute(P),T.defaultValue=D,T.value=T.__value=O?D:null}else{let D=T.defaultChecked;T.removeAttribute(P),T.defaultChecked=D,T.checked=O?D:!1}}else n.removeAttribute(A);else M||b.includes(P)&&(c||typeof C!="string")?(n[P]=C,P in l&&(l[P]=Ft)):typeof C!="function"&&Oe(n,P,C)}}}return p&&hn(!0),h}function zu(n,e,t=[],r=[],s=[],i,o=!1,a=!1){Rh(s,t,r,l=>{var c=void 0,f={},p=n.nodeName==="SELECT",h=!1;if(fs(()=>{var g=e(...l.map(m)),b=t_(n,c,g,i,o,a);h&&p&&"value"in g&&Fi(n,g.value);for(let k of Object.getOwnPropertySymbols(f))g[k]||St(f[k]);for(let k of Object.getOwnPropertySymbols(g)){var y=g[k];k.description===rg&&(!c||y!==c[k])&&(f[k]&&St(f[k]),f[k]=rn(()=>Yg(n,()=>y))),b[k]=y}c=b}),p){var v=n;Zi(()=>{Fi(v,c.value,!0),dc(v)})}h=!0})}function uf(n){return n.__attributes??={[lf]:n.nodeName.includes("-"),[cf]:n.namespaceURI===tg}}var qu=new Map;function df(n){var e=n.getAttribute("is")||n.nodeName,t=qu.get(e);if(t)return t;qu.set(e,t=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=ph(s);for(var o in r)r[o].set&&t.push(o);s=Yl(s)}return t}function qs(n,e,t=e){var r=new WeakSet;zh(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Ua(n)?Fa(i):i,t(i),Ke!==null&&r.add(Ke),await Pg(),i!==(i=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=i??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(_e&&n.defaultValue!==n.value||Gn(e)==null&&n.value)&&(t(Ua(n)?Fa(n.value):n.value),Ke!==null&&r.add(Ke)),fa(()=>{var s=e();if(n===document.activeElement){var i=yi??Ke;if(r.has(i))return}Ua(n)&&s===Fa(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Ua(n){var e=n.type;return e==="number"||e==="range"}function Fa(n){return n===""?null:+n}function ju(n,e){return n===e||n?.[Hn]===e}function fc(n={},e,t,r){return Zi(()=>{var s,i;return fa(()=>{s=i,i=[],Gn(()=>{n!==t(...i)&&(e(n,...i),s&&ju(t(...s),n)&&e(null,...s))})}),()=>{Br(()=>{i&&ju(t(...i),n)&&e(null,...i)})}}),n}function gn(n=!1){const e=dt,t=e.l.u;if(!t)return;let r=()=>ks(e.s);if(n){let s=0,i={};const o=Ji(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],a=!0);return a&&s++,s});r=()=>m(o)}t.b.length&&xg(()=>{Bu(e,r),Ao(t.b)}),Us(()=>{const s=Gn(()=>t.m.map(Pv));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&Us(()=>{Bu(e,r),Ao(t.a)})}function Bu(n,e){if(n.l.s)for(const t of n.l.s)m(t);e()}function pc(n,e,t){if(n==null)return e(void 0),t&&t(void 0),pn;const r=Gn(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const Es=[];function n_(n,e){return{subscribe:Zs(n,e).subscribe}}function Zs(n,e=pn){let t=null;const r=new Set;function s(a){if(xh(n,a)&&(n=a,t)){const l=!Es.length;for(const c of r)c[1](),Es.push(c,n);if(l){for(let c=0;c<Es.length;c+=2)Es[c][0](Es[c+1]);Es.length=0}}}function i(a){s(a(n))}function o(a,l=pn){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||pn),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function r_(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return n_(t,(o,a)=>{let l=!1;const c=[];let f=0,p=pn;const h=()=>{if(f)return;p();const g=e(r?c[0]:c,o,a);i?o(g):p=typeof g=="function"?g:pn},v=s.map((g,b)=>pc(g,y=>{c[b]=y,f&=~(1<<b),l&&h()},()=>{f|=1<<b}));return l=!0,h(),function(){Ao(v),p(),l=!1}})}function s_(n){let e;return pc(n,t=>e=t)(),e}let vo=!1,vl=Symbol();function ot(n,e,t){const r=t[e]??={store:null,source:sc(void 0),unsubscribe:pn};if(r.store!==n&&!(vl in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=pn;else{var s=!0;r.unsubscribe=pc(n,i=>{s?r.source.v=i:x(r.source,i)}),s=!1}return n&&vl in t?s_(n):m(r.source)}function At(){const n={};function e(){Xi(()=>{for(var t in n)n[t].unsubscribe();$i(n,vl,{enumerable:!1,value:!0})})}return[n,e]}function i_(n){var e=vo;try{return vo=!1,[n(),vo]}finally{vo=e}}const o_={get(n,e){if(!n.exclude.includes(e))return m(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var r=Ie;try{Tn(n.parent_effect),n.special[e]=at({get[e](){return n.props[e]}},e,bh)}finally{Tn(r)}}return n.special[e](t),ul(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),ul(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function ht(n,e){return new Proxy({props:n,exclude:e,special:{},version:$r(0),parent_effect:Ie},o_)}const a_={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ii(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let s=n.props[r];ii(s)&&(s=s());const i=sr(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(ii(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=sr(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(n,e){if(e===Hn||e===Zl)return!1;for(let t of n.props)if(ii(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(ii(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function kt(...n){return new Proxy({props:n},a_)}function at(n,e,t,r){var s=!Xs||(t&Qv)!==0,i=(t&Jv)!==0,o=(t&Xv)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Gn(r):r),a),f;if(i){var p=Hn in n||Zl in n;f=sr(n,e)?.set??(p&&e in n?R=>n[e]=R:void 0)}var h,v=!1;i?[h,v]=i_(()=>n[e]):h=n[e],h===void 0&&r!==void 0&&(h=c(),f&&(s&&jv(),f(h)));var g;if(s?g=()=>{var R=n[e];return R===void 0?c():(l=!0,R)}:g=()=>{var R=n[e];return R!==void 0&&(a=void 0),R===void 0?a:R},s&&(t&bh)===0)return g;if(f){var b=n.$$legacy;return(function(R,P){return arguments.length>0?((!s||!P||b||v)&&f(P?g():R),R):g()})}var y=!1,k=((t&Yv)!==0?Ji:nc)(()=>(y=!1,g()));i&&m(k);var I=Ie;return(function(R,P){if(arguments.length>0){const M=P?m(k):s&&i?Xt(R):R;return x(k,M),y=!0,a!==void 0&&(a=M),R}return ps&&y||(I.f&ir)!==0?k.v:m(k)})}function l_(n){return new c_(n)}class c_{#t;#e;constructor(e){var t=new Map,r=(i,o)=>{var a=sc(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return m(t.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Zl?!0:(m(t.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return x(t.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?Vg:lc)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&it(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||$i(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{Hg(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const r=(...s)=>t.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let hf;typeof HTMLElement=="function"&&(hf=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const r=this.$$c.$on(n,e);this.$$l_u.set(e,r)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),E(i,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=u_(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=Eo(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=l_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=kg(()=>{fa(()=>{this.$$r=!0;for(const s of So(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=Eo(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=Eo(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return So(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function Eo(n,e,t,r){const s=t[n]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function u_(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function we(n,e,t,r,s,i){let o=class extends hf{constructor(){super(n,t,s),this.$$p_d=e}static get observedAttributes(){return So(e).map(a=>(e[a].attribute||a).toLowerCase())}};return So(e).forEach(a=>{$i(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Eo(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var f=sr(c,a)?.get;f?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{$i(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Bt(n){dt===null&&gh(),Xs&&dt.l!==null?d_(dt).m.push(n):Us(()=>{const e=Gn(n);if(typeof e=="function")return e})}function ff(n){dt===null&&gh(),Bt(()=>()=>Gn(n))}function d_(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const h_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(h_);const f_=()=>{};var Vu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(n,e){if(!n)throw ei(e)},ei=function(n){return new Error("Firebase Database ("+pf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},p_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(h=64)),r.push(t[f],t[p],t[h],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):p_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||p==null)throw new m_;const h=i<<2|a>>4;if(r.push(h),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const g=c<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class m_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(n){const e=mf(n);return mc.encodeByteArray(e,!0)},Do=function(n){return vf(n).replace(/\./g,"")},$o=function(n){try{return mc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){return gf(void 0,n)}function gf(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!g_(t)||(n[t]=gf(n[t],e[t]));return n}function g_(n){return n!=="__proto__"}/**
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
 */function __(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b_=()=>__().__FIREBASE_DEFAULTS__,w_=()=>{if(typeof process>"u"||typeof Vu>"u")return;const n=Vu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},y_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$o(n[1]);return e&&JSON.parse(e)},vc=()=>{try{return f_()||b_()||w_()||y_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_f=n=>vc()?.emulatorHosts?.[n],bf=n=>{const e=_f(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wf=()=>vc()?.config,yf=n=>vc()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ef(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Do(JSON.stringify(t)),Do(JSON.stringify(o)),""].join(".")}const Ci={};function E_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ci))Ci[e]?n.emulator.push(e):n.prod.push(e);return n}function x_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hu=!1;function _c(n,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Ci[n]===e||Ci[n]||Hu)return;Ci[n]=e;function t(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=E_().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,v){h.setAttribute("width","24"),h.setAttribute("id",v),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Hu=!0,o()},h}function f(h,v){h.setAttribute("id",v),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function p(){const h=x_(r),v=t("text"),g=document.getElementById(v)||document.createElement("span"),b=t("learnmore"),y=document.getElementById(b)||document.createElement("a"),k=t("preprendIcon"),I=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const R=h.element;a(R),f(y,b);const P=c();l(I,k),R.append(I,g,y,P),document.body.appendChild(R)}i?(g.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function k_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const n=nn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function T_(){return pf.NODE_ADMIN===!0}function S_(){try{return typeof indexedDB=="object"}catch{return!1}}function A_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="FirebaseError";class _r extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=R_,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?P_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _r(s,a,r)}}function P_(n,e){return n.replace(N_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const N_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return JSON.parse(n)}function Tt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=zi($o(i[0])||""),t=zi($o(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},L_=function(n){const e=kf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},O_=function(n){const e=kf(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function js(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mo(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function is(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Wu(i)&&Wu(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Wu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const h=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let p=0;p<80;p++){p<40?p<20?(c=a^i&(o^a),f=1518500249):(c=i^o^a,f=1859775393):p<60?(c=i&o|a&(i|o),f=2400959708):(c=i^o^a,f=3395469782);const h=(s<<5|s>>>27)+c+l+f+r[p]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function $_(n,e){const t=new M_(n,e);return t.subscribe.bind(t)}class M_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");U_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=za),s.error===void 0&&(s.error=za),s.complete===void 0&&(s.complete=za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function za(){}function pa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,U(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ma=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Mr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class z_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new to;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j_(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(n){return n===Gr?void 0:n}function j_(n){return n.instantiationMode==="EAGER"}/**
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
 */class B_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new z_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ye||(Ye={}));const V_={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},H_=Ye.INFO,W_={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},G_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=W_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=H_,this._logHandler=G_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const K_=(n,e)=>e.some(t=>n instanceof t);let Gu,Ku;function Y_(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q_(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cf=new WeakMap,_l=new WeakMap,If=new WeakMap,qa=new WeakMap,yc=new WeakMap;function J_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Rr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cf.set(t,n)}).catch(()=>{}),yc.set(e,n),e}function X_(n){if(_l.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});_l.set(n,e)}let bl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _l.get(n);if(e==="objectStoreNames")return n.objectStoreNames||If.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Z_(n){bl=n(bl)}function eb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ja(this),e,...t);return If.set(r,e.sort?e.sort():[e]),Rr(r)}:Q_().includes(n)?function(...e){return n.apply(ja(this),e),Rr(Cf.get(this))}:function(...e){return Rr(n.apply(ja(this),e))}}function tb(n){return typeof n=="function"?eb(n):(n instanceof IDBTransaction&&X_(n),K_(n,Y_())?new Proxy(n,bl):n)}function Rr(n){if(n instanceof IDBRequest)return J_(n);if(qa.has(n))return qa.get(n);const e=tb(n);return e!==n&&(qa.set(n,e),yc.set(e,n)),e}const ja=n=>yc.get(n);function nb(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rb=["get","getKey","getAll","getAllKeys","count"],sb=["put","add","delete","clear"],Ba=new Map;function Yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rb.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ba.set(e,i),i}Z_(n=>({...n,get:(e,t,r)=>Yu(e,t)||n.get(e,t,r),has:(e,t)=>!!Yu(e,t)||n.has(e,t)}));/**
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
 */class ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ob(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ob(n){return n.getComponent()?.type==="VERSION"}const wl="@firebase/app",Qu="0.14.5";/**
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
 */const ur=new wc("@firebase/app"),ab="@firebase/app-compat",lb="@firebase/analytics-compat",cb="@firebase/analytics",ub="@firebase/app-check-compat",db="@firebase/app-check",hb="@firebase/auth",fb="@firebase/auth-compat",pb="@firebase/database",mb="@firebase/data-connect",vb="@firebase/database-compat",gb="@firebase/functions",_b="@firebase/functions-compat",bb="@firebase/installations",wb="@firebase/installations-compat",yb="@firebase/messaging",Eb="@firebase/messaging-compat",xb="@firebase/performance",kb="@firebase/performance-compat",Cb="@firebase/remote-config",Ib="@firebase/remote-config-compat",Tb="@firebase/storage",Sb="@firebase/storage-compat",Ab="@firebase/firestore",Rb="@firebase/ai",Pb="@firebase/firestore-compat",Nb="firebase",Lb="12.5.0";/**
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
 */const yl="[DEFAULT]",Ob={[wl]:"fire-core",[ab]:"fire-core-compat",[cb]:"fire-analytics",[lb]:"fire-analytics-compat",[db]:"fire-app-check",[ub]:"fire-app-check-compat",[hb]:"fire-auth",[fb]:"fire-auth-compat",[pb]:"fire-rtdb",[mb]:"fire-data-connect",[vb]:"fire-rtdb-compat",[gb]:"fire-fn",[_b]:"fire-fn-compat",[bb]:"fire-iid",[wb]:"fire-iid-compat",[yb]:"fire-fcm",[Eb]:"fire-fcm-compat",[xb]:"fire-perf",[kb]:"fire-perf-compat",[Cb]:"fire-rc",[Ib]:"fire-rc-compat",[Tb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Ab]:"fire-fst",[Pb]:"fire-fst-compat",[Rb]:"fire-vertex","fire-js":"fire-js",[Nb]:"fire-js-all"};/**
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
 */const Uo=new Map,Db=new Map,El=new Map;function Ju(n,e){try{n.container.addComponent(e)}catch(t){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function os(n){const e=n.name;if(El.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,n);for(const t of Uo.values())Ju(t,n);for(const t of Db.values())Ju(t,n);return!0}function va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new no("app","Firebase",$b);/**
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
 */class Mb{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=Lb;function Tf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:yl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pr.create("bad-app-name",{appName:String(s)});if(t||(t=wf()),!t)throw Pr.create("no-options");const i=Uo.get(s);if(i){if(is(t,i.options)&&is(r,i.config))return i;throw Pr.create("duplicate-app",{appName:s})}const o=new B_(s);for(const l of El.values())o.addComponent(l);const a=new Mb(t,r,o);return Uo.set(s,a),a}function Ec(n=yl){const e=Uo.get(n);if(!e&&n===yl&&wf())return Tf();if(!e)throw Pr.create("no-app",{appName:n});return e}function Wn(n,e,t){let r=Ob[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(o.join(" "));return}os(new Mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ub="firebase-heartbeat-database",Fb=1,qi="firebase-heartbeat-store";let Va=null;function Sf(){return Va||(Va=nb(Ub,Fb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pr.create("idb-open",{originalErrorMessage:n.message})})),Va}async function zb(n){try{const t=(await Sf()).transaction(qi),r=await t.objectStore(qi).get(Af(n));return await t.done,r}catch(e){if(e instanceof _r)ur.warn(e.message);else{const t=Pr.create("idb-get",{originalErrorMessage:e?.message});ur.warn(t.message)}}}async function Xu(n,e){try{const r=(await Sf()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Af(n)),await r.done}catch(t){if(t instanceof _r)ur.warn(t.message);else{const r=Pr.create("idb-set",{originalErrorMessage:t?.message});ur.warn(r.message)}}}function Af(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qb=1024,jb=30;class Bb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>jb){const s=Wb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zu(),{heartbeatsToSend:t,unsentEntries:r}=Vb(this._heartbeatsCache.heartbeats),s=Do(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ur.warn(e),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function Vb(n,e=qb){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ed(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ed(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S_()?A_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zb(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}function Wb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Gb(n){os(new Mr("platform-logger",e=>new ib(e),"PRIVATE")),os(new Mr("heartbeat",e=>new Bb(e),"PRIVATE")),Wn(wl,Qu,n),Wn(wl,Qu,"esm2020"),Wn("fire-js","")}Gb("");var Kb="firebase",Yb="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(Kb,Yb,"app");function Rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qb=Rf,Pf=new no("auth","Firebase",Rf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new wc("@firebase/auth");function Jb(n,...e){Fo.logLevel<=Ye.WARN&&Fo.warn(`Auth (${vs}): ${n}`,...e)}function xo(n,...e){Fo.logLevel<=Ye.ERROR&&Fo.error(`Auth (${vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,...e){throw xc(n,...e)}function vn(n,...e){return xc(n,...e)}function Nf(n,e,t){const r={...Qb(),[e]:t};return new no("auth","Firebase",r).create(e,{appName:n.name})}function Nr(n){return Nf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pf.create(n,...e)}function X(n,e,...t){if(!n)throw xc(e,...t)}function tr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xo(e),new Error(e)}function hr(n,e){n||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){return typeof self<"u"&&self.location?.href||""}function Lf(){return td()==="http:"||td()==="https:"}function td(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lf()||C_()||"connection"in navigator)?navigator.onLine:!0}function Zb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.shortDelay=e,this.longDelay=t,hr(t>e,"Short delay should be less than long delay!"),this.isMobile=bc()||xf()}get(){return Xb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n,e){hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],n1=new ro(3e4,6e4);function Qn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function An(n,e,t,r,s={}){return Df(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ms({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...i};return k_()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(c.credentials="include"),Of.fetch()(await $f(n,n.config.apiHost,t,a),c)})}async function Df(n,e,t){n._canInitEmulator=!1;const r={...e1,...e};try{const s=new s1(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _i(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _i(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw _i(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Nf(n,f,c);dr(n,f)}}catch(s){if(s instanceof _r)throw s;dr(n,"network-request-failed",{message:String(s)})}}async function ga(n,e,t,r,s={}){const i=await An(n,e,t,r,s);return"mfaPendingCredential"in i&&dr(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function $f(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?kc(n.config,s):`${n.config.apiScheme}://${s}`;return t1.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function r1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),n1.get())})}}function _i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=vn(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return n!==void 0&&n.getResponse!==void 0}function rd(n){return n!==void 0&&n.enterprise!==void 0}class Mf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return r1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(n){return(await An(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Uf(n,e){return An(n,"GET","/v2/recaptchaConfig",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(n,e){return An(n,"POST","/v1/accounts:delete",e)}async function zo(n,e){return An(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a1(n,e=!1){const t=mt(n),r=await t.getIdToken(e),s=Cc(r);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ii(Ha(s.auth_time)),issuedAtTime:Ii(Ha(s.iat)),expirationTime:Ii(Ha(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ha(n){return Number(n)*1e3}function Cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=$o(t);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function sd(n){const e=Cc(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _r&&l1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function l1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qo(n){const e=n.auth,t=await n.getIdToken(),r=await Bs(n,zo(e,{idToken:t}));X(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ff(s.providerUserInfo):[],o=d1(n.providerData,i),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,c=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,f)}async function u1(n){const e=mt(n);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ff(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(n,e){const t=await Df(n,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await $f(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(l.credentials="include"),Of.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function f1(n,e){return An(n,"POST","/v2/accounts:revokeToken",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=sd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await h1(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Rs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new c1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return a1(this,e)}reload(){return u1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await Bs(this,o1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:h,isAnonymous:v,providerData:g,stsTokenManager:b}=t;X(p&&b,e,"internal-error");const y=Rs.fromJSON(this.name,b);X(typeof p=="string",e,"internal-error"),wr(r,e.name),wr(s,e.name),X(typeof h=="boolean",e,"internal-error"),X(typeof v=="boolean",e,"internal-error"),wr(i,e.name),wr(o,e.name),wr(a,e.name),wr(l,e.name),wr(c,e.name),wr(f,e.name);const k=new $n({uid:p,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:f});return g&&Array.isArray(g)&&(k.providerData=g.map(I=>({...I}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new Rs;s.updateFromServerResponse(t);const i=new $n({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ff(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Rs;a.updateFromIdToken(r);const l=new $n({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;function nr(n){hr(n instanceof Function,"Expected a class definition");let e=id.get(n);return e?(hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,id.set(n,e),e)}/**
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
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zf.type="NONE";const od=zf;/**
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
 */function ko(n,e,t){return`firebase:${n}:${e}:${t}`}class Ps{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zo(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ps(nr(od),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||nr(od);const o=ko(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const h=await zo(e,{idToken:f}).catch(()=>{});if(!h)break;p=await $n._fromGetAccountInfoResponse(e,h,f)}else p=$n._fromJSON(e,f);c!==i&&(a=p),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ps(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wf(e))return"Blackberry";if(Gf(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||Bf(e))&&!e.includes("edge/"))return"Chrome";if(Hf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function qf(n=nn()){return/firefox\//i.test(n)}function jf(n=nn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bf(n=nn()){return/crios\//i.test(n)}function Vf(n=nn()){return/iemobile/i.test(n)}function Hf(n=nn()){return/android/i.test(n)}function Wf(n=nn()){return/blackberry/i.test(n)}function Gf(n=nn()){return/webos/i.test(n)}function Ic(n=nn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function p1(n=nn()){return Ic(n)&&!!window.navigator?.standalone}function m1(){return I_()&&document.documentMode===10}function Kf(n=nn()){return Ic(n)||Hf(n)||Gf(n)||Wf(n)||/windows phone/i.test(n)||Vf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e=[]){let t;switch(n){case"Browser":t=ad(nn());break;case"Worker":t=`${ad(nn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vs}/${r}`}/**
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
 */class v1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function g1(n,e={}){return An(n,"GET","/v2/passwordPolicy",Qn(n,e))}/**
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
 */const _1=6;class b1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new v1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zo(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Nr(this));const t=e?mt(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g1(this),t=new b1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await f1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nr(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Jb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hr(n){return mt(n)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=$_(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(n){so=n}function Tc(n){return so.loadJS(n)}function E1(){return so.recaptchaV2Script}function x1(){return so.recaptchaEnterpriseScript}function k1(){return so.gapiScript}function Qf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=500,I1=6e4,go=1e12;class T1{constructor(e){this.auth=e,this.counter=go,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new R1(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||go;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||go;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||go;return this._widgets.get(t)?.execute(),""}}class S1{constructor(){this.enterprise=new A1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class A1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class R1{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;X(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=P1(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},I1)},C1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function P1(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const N1="recaptcha-enterprise",Ti="NO_RECAPTCHA";class Jf{constructor(e){this.type=N1,this.auth=Hr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Uf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Mf(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;rd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ti)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&rd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=x1();l.length!==0&&(l+=a),Tc(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wa(n,e,t,r=!1,s=!1){const i=new Jf(n);let o;if(s)o=Ti;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ga(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Wa(n,e,t);return r(n,i).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await Wa(n,e,t,!1,!0);return r(n,a)}return Promise.reject(o)})}else{const i=await Wa(n,e,t,!1,!0);return r(n,i)}}async function L1(n){const e=Hr(n),t=await Uf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Mf(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Jf(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n,e){const t=va(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(is(i,e??{}))return s;dr(s,"already-initialized")}return t.initialize({options:e})}function D1(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(nr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function $1(n,e,t){const r=Hr(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xf(e),{host:o,port:a}=M1(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(is(c,r.config.emulator)&&is(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vr(o)?(gc(`${i}//${o}${l}`),_c("Auth",!0)):U1()}function Xf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function M1(n){const e=Xf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cd(o)}}}function cd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function U1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,t){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,e){return ga(n,"POST","/v1/accounts:signInWithIdp",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="http://localhost";class as extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ns(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ns(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ns(e,t)}buildRequest(){const e={requestUri:F1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(n,e){return An(n,"POST","/v1/accounts:sendVerificationCode",Qn(n,e))}async function z1(n,e){return ga(n,"POST","/v1/accounts:signInWithPhoneNumber",Qn(n,e))}async function q1(n,e){const t=await ga(n,"POST","/v1/accounts:signInWithPhoneNumber",Qn(n,e));if(t.temporaryProof)throw _i(n,"account-exists-with-different-credential",t);return t}const j1={USER_NOT_FOUND:"user-not-found"};async function B1(n,e){const t={...e,operation:"REAUTH"};return ga(n,"POST","/v1/accounts:signInWithPhoneNumber",Qn(n,t),j1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Sc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Si({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Si({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return z1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return q1(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return B1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Si({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class io extends Zf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends io{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Er.credential(t,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends io{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends io{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kr.credential(t,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await $n._fromIdTokenResponse(e,r,s),o=dd(r);return new Vs({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=dd(r);return new Vs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function dd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends _r{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new jo(e,t,r,s)}}function ep(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(n,i,e,r):i})}async function V1(n,e,t=!1){const r=await Bs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vs._forOperation(n,"link",r)}/**
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
 */async function H1(n,e,t=!1){const{auth:r}=n;if(xn(r.app))return Promise.reject(Nr(r));const s="reauthenticate";try{const i=await Bs(n,ep(r,s,e,n),t);X(i.idToken,r,"internal-error");const o=Cc(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(n.uid===a,r,"user-mismatch"),Vs._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&dr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(n,e,t=!1){if(xn(n.app))return Promise.reject(Nr(n));const r="signIn",s=await ep(n,r,e),i=await Vs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function W1(n,e){return tp(Hr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(n,e){return An(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=mt(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Bs(r,G1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Y1(n,e,t,r){return mt(n).onIdTokenChanged(e,t,r)}function Q1(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function np(n,e,t,r){return mt(n).onAuthStateChanged(e,t,r)}function J1(n){return mt(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n,e){return An(n,"POST","/v2/accounts/mfaEnrollment:start",Qn(n,e))}const Bo="__sak";/**
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
 */class rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=1e3,Z1=10;class sp extends rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);m1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const ew=sp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ip.type="SESSION";const op=ip;/**
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
 */function tw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,i)),l=await tw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ac("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function rw(n){xt().location.href=n}/**
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
 */function Rc(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function sw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iw(){return navigator?.serviceWorker?.controller||null}function ow(){return Rc()?self:null}/**
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
 */const ap="firebaseLocalStorageDb",aw=1,Vo="firebaseLocalStorage",lp="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ba(n,e){return n.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function lw(){const n=indexedDB.deleteDatabase(ap);return new oo(n).toPromise()}function Cl(){const n=indexedDB.open(ap,aw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vo,{keyPath:lp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await lw(),e(await Cl()))})})}async function fd(n,e,t){const r=ba(n,!0).put({[lp]:e,value:t});return new oo(r).toPromise()}async function cw(n,e){const t=ba(n,!1).get(e),r=await new oo(t).toPromise();return r===void 0?null:r.value}function pd(n,e){const t=ba(n,!0).delete(e);return new oo(t).toPromise()}const uw=800,dw=3;class cp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(ow()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await sw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await fd(e,Bo,"1"),await pd(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ba(s,!1).getAll();return new oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cp.type="LOCAL";const hw=cp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e){return An(n,"POST","/v2/accounts/mfaSignIn:start",Qn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=Qf("rcb"),fw=new ro(3e4,6e4);class pw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!xt().grecaptcha?.render}load(e,t=""){return X(mw(t),e,"argument-error"),this.shouldResolveImmediately(t)&&nd(xt().grecaptcha)?Promise.resolve(xt().grecaptcha):new Promise((r,s)=>{const i=xt().setTimeout(()=>{s(vn(e,"network-request-failed"))},fw.get());xt()[Ka]=()=>{xt().clearTimeout(i),delete xt()[Ka];const a=xt().grecaptcha;if(!a||!nd(a)){s(vn(e,"internal-error"));return}const l=a.render;a.render=(c,f)=>{const p=l(c,f);return this.counter++,p},this.hostLanguage=t,r(a)};const o=`${E1()}?${ms({onload:Ka,render:"explicit",hl:t})}`;Tc(o).catch(()=>{clearTimeout(i),s(vn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!xt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class vw{async load(e){return new T1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="recaptcha",gw={theme:"light",type:"image"};class _w{constructor(e,t,r={...gw}){this.parameters=r,this.type=Ai,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Hr(e),this.isInvisible=this.parameters.size==="invisible",X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;X(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vw:new pw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){X(!this.parameters.sitekey,this.auth,"argument-error"),X(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=xt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){X(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){X(Lf()&&!Rc(),this.auth,"internal-error"),await bw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await i1(this.auth);X(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return X(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function bw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Si._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function yw(n,e,t){if(xn(n.app))return Promise.reject(Nr(n));const r=Hr(n),s=await Ew(r,e,mt(t));return new ww(s,i=>W1(r,i))}async function Ew(n,e,t){if(!n._getRecaptchaConfig())try{await L1(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){X(s.type==="enroll",n,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ga(n,i,"mfaSmsEnrollment",async(c,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Ti){X(t?.type===Ai,c,"argument-error");const p=await Ya(c,f,t);return hd(c,p)}return hd(c,f)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{X(s.type==="signin",n,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;X(i,n,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ga(n,o,"mfaSmsSignIn",async(f,p)=>{if(p.phoneSignInInfo.captchaResponse===Ti){X(t?.type===Ai,f,"argument-error");const h=await Ya(f,p,t);return md(f,h)}return md(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ga(n,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===Ti){X(t?.type===Ai,l,"argument-error");const f=await Ya(l,c,t);return ud(l,f)}return ud(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function Ya(n,e,t){X(t.type===Ai,n,"argument-error");const r=await t.verify();X(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function xw(n,e){return e?nr(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pc extends Sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kw(n){return tp(n.auth,new Pc(n),n.bypassAuthState)}function Cw(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),H1(t,new Pc(n),n.bypassAuthState)}async function Iw(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),V1(t,new Pc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kw;case"linkViaPopup":case"linkViaRedirect":return Iw;case"reauthViaPopup":case"reauthViaRedirect":return Cw;default:dr(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new ro(2e3,1e4);class Is extends up{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tw.get())};e()}}Is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="pendingRedirect",Co=new Map;class Aw extends up{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await Rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rw(n,e){const t=Lw(e),r=Nw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Pw(n,e){Co.set(n._key(),e)}function Nw(n){return nr(n._redirectPersistence)}function Lw(n){return ko(Sw,n.config.apiKey,n.name)}async function Ow(n,e,t=!1){if(xn(n.app))return Promise.reject(Nr(n));const r=Hr(n),s=xw(r,e),o=await new Aw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=600*1e3;class $w{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!dp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(vn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Mw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(n,e={}){return An(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zw=/^https?/;async function qw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Uw(n);for(const t of e)try{if(jw(t))return}catch{}dr(n,"unauthorized-domain")}function jw(n){const e=xl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!zw.test(t))return!1;if(Fw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Bw=new ro(3e4,6e4);function gd(){const n=xt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vw(n){return new Promise((e,t)=>{function r(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),t(vn(n,"network-request-failed"))},timeout:Bw.get()})}if(xt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xt().gapi?.load)r();else{const s=Qf("iframefcb");return xt()[s]=()=>{gapi.load?r():t(vn(n,"network-request-failed"))},Tc(`${k1()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Io=null,e})}let Io=null;function Hw(n){return Io=Io||Vw(n),Io}/**
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
 */const Ww=new ro(5e3,15e3),Gw="__/auth/iframe",Kw="emulator/auth/iframe",Yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kc(e,Kw):`https://${n.config.authDomain}/${Gw}`,r={apiKey:e.apiKey,appName:n.name,v:vs},s=Qw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ms(r).slice(1)}`}async function Xw(n){const e=await Hw(n),t=xt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:Jw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(n,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},Ww.get());function l(){xt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e0=500,t0=600,n0="_blank",r0="http://localhost";class _d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s0(n,e,t,r=e0,s=t0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Zw,width:r.toString(),height:s.toString(),top:i,left:o},c=nn().toLowerCase();t&&(a=Bf(c)?n0:t),qf(c)&&(e=e||r0,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(p1(c)&&a!=="_self")return i0(e||"",a),new _d(null);const p=window.open(e||"",a,f);X(p,n,"popup-blocked");try{p.focus()}catch{}return new _d(p)}function i0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const o0="__/auth/handler",a0="emulator/auth/handler",l0=encodeURIComponent("fac");async function bd(n,e,t,r,s,i){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vs,eventId:s};if(e instanceof Zf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",gl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof io){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),c=l?`#${l0}=${encodeURIComponent(l)}`:"";return`${c0(n)}?${ms(a).slice(1)}${c}`}function c0({config:n}){return n.emulator?kc(n,a0):`https://${n.authDomain}/${o0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="webStorageSupport";class u0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=Ow,this._overrideRedirectResult=Pw}async _openPopup(e,t,r,s){hr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await bd(e,t,r,xl(),s);return s0(e,i,Ac())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bd(e,t,r,xl(),s);return rw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(hr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xw(e),r=new $w(e);return t.register("authEvent",s=>(X(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qa,{type:Qa},s=>{const i=s?.[0]?.[Qa];i!==void 0&&t(!!i),dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kf()||jf()||Ic()}}const d0=u0;var wd="@firebase/auth",yd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p0(n){os(new Mr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yf(n)},c=new w1(r,s,i,l);return D1(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),os(new Mr("auth-internal",e=>{const t=Hr(e.getProvider("auth").getImmediate());return(r=>new h0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(wd,yd,f0(n)),Wn(wd,yd,"esm2020")}/**
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
 */const m0=300,v0=yf("authIdTokenMaxAge")||m0;let Ed=null;const g0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>v0)return;const s=t?.token;Ed!==s&&(Ed=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _0(n=Ec()){const e=va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=O1(n,{popupRedirectResolver:d0,persistence:[hw,ew,op]}),r=yf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=g0(i.toString());Q1(t,o,()=>o(t.currentUser)),Y1(t,a=>o(a))}}const s=_f("auth");return s&&$1(t,`http://${s}`),t}function b0(){return document.getElementsByTagName("head")?.[0]??document}y1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",b0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p0("Browser");var xd={};const kd="@firebase/database",Cd="1.1.0";/**
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
 */let hp="";function w0(n){hp=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:zi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new y0(e)}}catch{}return new E0},Jr=fp("localStorage"),x0=fp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new wc("@firebase/database"),k0=(function(){let n=1;return function(){return n++}})(),pp=function(n){const e=F_(n),t=new D_;t.update(e);const r=t.digest();return mc.encodeByteArray(r)},ao=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ao.apply(null,r):typeof r=="object"?e+=Tt(r):e+=r,e+=" "}return e};let Ri=null,Id=!0;const C0=function(n,e){U(!0,"Can't turn on custom loggers persistently."),Ls.logLevel=Ye.VERBOSE,Ri=Ls.log.bind(Ls)},zt=function(...n){if(Id===!0&&(Id=!1,Ri===null&&x0.get("logging_enabled")===!0&&C0()),Ri){const e=ao.apply(null,n);Ri(e)}},lo=function(n){return function(...e){zt(n,...e)}},Il=function(...n){const e="FIREBASE INTERNAL ERROR: "+ao(...n);Ls.error(e)},fr=function(...n){const e=`FIREBASE FATAL ERROR: ${ao(...n)}`;throw Ls.error(e),new Error(e)},tn=function(...n){const e="FIREBASE WARNING: "+ao(...n);Ls.warn(e)},I0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},T0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ur="[MIN_NAME]",pr="[MAX_NAME]",gs=function(n,e){if(n===e)return 0;if(n===Ur||e===pr)return-1;if(e===Ur||n===pr)return 1;{const t=Td(n),r=Td(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},S0=function(n,e){return n===e?0:n<e?-1:1},li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Tt(e))},Lc=function(n){if(typeof n!="object"||n===null)return Tt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Tt(e[r]),t+=":",t+=Lc(n[e[r]]);return t+="}",t},mp=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function jt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const vp=function(n){U(!Nc(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const f=c.join("");let p="";for(l=0;l<64;l+=8){let h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),p=p+h}return p.toLowerCase()},A0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},R0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P0(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const N0=new RegExp("^-?(0*)\\d{1,10}$"),L0=-2147483648,O0=2147483647,Td=function(n){if(N0.test(n)){const e=Number(n);if(e>=L0&&e<=O0)return e}return null},ti=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw tn("Exception was thrown by user callback.",t),e},Math.floor(0))}},D0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $0{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="5",gp="v",_p="s",bp="r",wp="f",yp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ep="ls",xp="p",Tl="ac",kp="websocket",Cp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function U0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Tp(n,e,t){U(typeof e=="string","typeof type must == string"),U(typeof t=="object","typeof params must == object");let r;if(e===kp)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Cp)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);U0(n)&&(t.ns=n.namespace);const s=[];return jt(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.counters_={}}incrementCounter(e,t=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return v_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={},Xa={};function Dc(n){const e=n.toString();return Ja[e]||(Ja[e]=new F0),Ja[e]}function z0(n,e){const t=n.toString();return Xa[t]||(Xa[t]=e()),Xa[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ti(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="start",j0="close",B0="pLPCommand",V0="pRTLPCB",Sp="id",Ap="pw",Rp="ser",H0="cb",W0="seg",G0="ts",K0="d",Y0="dframe",Pp=1870,Np=30,Q0=Pp-Np,J0=25e3,X0=3e4;class Ts{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lo(e),this.stats_=Dc(t),this.urlFn=l=>(this.appCheckToken&&(l[Tl]=this.appCheckToken),Tp(t,Cp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new q0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(X0)),T0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $c((...i)=>{const[o,a,l,c,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sd)this.id=a,this.password=l;else if(o===j0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sd]="t",r[Rp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[H0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gp]=Oc,this.transportSessionId&&(r[_p]=this.transportSessionId),this.lastSessionId&&(r[Ep]=this.lastSessionId),this.applicationId&&(r[xp]=this.applicationId),this.appCheckToken&&(r[Tl]=this.appCheckToken),typeof location<"u"&&location.hostname&&yp.test(location.hostname)&&(r[bp]=wp);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!A0()&&!R0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vf(t),s=mp(r,Q0);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Y0]="t",r[Sp]=e,r[Ap]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Tt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $c{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k0(),window[B0+this.uniqueCallbackIdentifier]=e,window[V0+this.uniqueCallbackIdentifier]=t,this.myIFrame=$c.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){zt("frame writing exception"),a.stack&&zt(a.stack),zt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sp]=this.myID,e[Ap]=this.myPW,e[Rp]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Np+r.length<=Pp;){const o=this.pendingSegs.shift();r=r+"&"+W0+s+"="+o.seg+"&"+G0+s+"="+o.ts+"&"+K0+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(J0)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=16384,ey=45e3;let Ho=null;typeof MozWebSocket<"u"?Ho=MozWebSocket:typeof WebSocket<"u"&&(Ho=WebSocket);class Ln{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lo(this.connId),this.stats_=Dc(t),this.connURL=Ln.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[gp]=Oc,typeof location<"u"&&location.hostname&&yp.test(location.hostname)&&(o[bp]=wp),t&&(o[_p]=t),r&&(o[Ep]=r),s&&(o[Tl]=s),i&&(o[xp]=i),Tp(e,kp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jr.set("previous_websocket_failure",!0);try{let r;T_(),this.mySock=new Ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ho!==null&&!Ln.forceDisallow_}static previouslyFailed(){return Jr.isInMemoryStorage||Jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=zi(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=mp(t,Z0);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ey))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ln.responsesRequiredToBeHealthy=2;Ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static get ALL_TRANSPORTS(){return[Ts,Ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ln&&Ln.isAvailable();let r=t&&!Ln.previouslyFailed();if(e.webSocketOnly&&(t||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ln];else{const s=this.transports_=[];for(const i of ji.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ji.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ji.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=6e4,ny=5e3,ry=10*1024,sy=100*1024,Za="t",Ad="d",iy="s",Rd="r",oy="e",Pd="o",Nd="a",Ld="n",Od="p",ay="h";class ly{constructor(e,t,r,s,i,o,a,l,c,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lo("c:"+this.id+":"),this.transportManager_=new ji(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ry?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const t=e[Za];t===Nd?this.upgradeIfSecondaryHealthy_():t===Rd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=li("t",e),r=li("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Od,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ld,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=li("t",e),r=li("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=li(Za,e);if(Ad in e){const r=e[Ad];if(t===ay){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Ld){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===iy?this.onConnectionShutdown_(r):t===Rd?this.onReset_(r):t===oy?Il("Server Error: "+r):t===Pd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Il("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Oc!==r&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ty))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ny))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Od,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){U(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Op{static getInstance(){return new Wo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=32,$d=768;class Ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function je(){return new Ve("")}function Re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function Je(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ve(n.pieces_,e)}function Mc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function cy(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Dp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ve(e,0)}function ut(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ve(t,0)}function Pe(n){return n.pieceNum_>=n.pieces_.length}function en(n,e){const t=Re(n),r=Re(e);if(t===null)return e;if(t===r)return en(Je(n),Je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function uy(n,e){const t=Bi(n,0),r=Bi(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=gs(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function Uc(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function kn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class dy{constructor(e,t){this.errorPrefix_=t,this.parts_=Bi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ma(this.parts_[r]);$p(this)}}function hy(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ma(e),$p(n)}function fy(n){const e=n.parts_.pop();n.byteLength_-=ma(e),n.parts_.length>0&&(n.byteLength_-=1)}function $p(n){if(n.byteLength_>$d)throw new Error(n.errorPrefix_+"has a key path longer than "+$d+" bytes ("+n.byteLength_+").");if(n.parts_.length>Dd)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dd+") or object contains a cycle "+Kr(n))}function Kr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Op{static getInstance(){return new Fc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,py=300*1e3,Md=30*1e3,my=1.3,vy=3e4,gy="server_kill",Ud=3;class lr extends Lp{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=lr.nextPersistentConnectionId_++,this.log_=lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=py,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Tt(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new to,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;lr.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Yn(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Md)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=L_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Il("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vy&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*my)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+lr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(p){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?zt("getToken() completed but was canceled"):(zt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=h&&h.token,a=new ly(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,v=>{tn(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(gy)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&tn(p),l())}}}interrupt(e){zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gl(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Lc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){zt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ud&&(this.reconnectDelay_=Md,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){zt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ud&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hp.replace(/\./g,"-")]=1,bc()?e["framework.cordova"]=1:xf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wo.getInstance().currentlyOnline();return gl(this.interruptReasons_)&&e}}lr.nextPersistentConnectionId_=0;lr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ne(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ne(Ur,e),s=new Ne(Ur,t);return this.compare(r,s)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class Mp extends wa{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(e){_o=e}compare(e,t){return gs(e.name,t.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(pr,_o)}makePost(e,t){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,_o)}toString(){return".key"}}const cr=new Mp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Dt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Dt.RED,this.left=s??on.EMPTY_NODE,this.right=i??on.EMPTY_NODE}copy(e,t,r,s,i){return new Dt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return on.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return on.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Dt.RED=!0;Dt.BLACK=!1;class _y{copy(e,t,r,s,i){return this}insert(e,t,r){return new Dt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class on{constructor(e,t=on.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new on(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new on(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}on.EMPTY_NODE=new _y;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e){return gs(n.name,e.name)}function zc(n,e){return gs(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function wy(n){Sl=n}const Up=function(n){return typeof n=="number"?"number:"+vp(n):"string:"+n},Fp=function(n){if(n.isLeafNode()){const e=n.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else U(n===Sl||n.isEmpty(),"priority of unexpected type.");U(n===Sl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;class Ot{static set __childrenNodeConstructor(e){Fd=e}static get __childrenNodeConstructor(){return Fd}constructor(e,t=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Re(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Re(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Je(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Up(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=vp(this.value_):e+=this.value_,this.lazyHash_=pp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ot.VALUE_TYPE_ORDER.indexOf(t),i=Ot.VALUE_TYPE_ORDER.indexOf(r);return U(s>=0,"Unknown leaf type: "+t),U(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp,qp;function yy(n){zp=n}function Ey(n){qp=n}class xy extends wa{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?gs(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(pr,new Ot("[PRIORITY-POST]",qp))}makePost(e,t){const r=zp(e);return new Ne(t,new Ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const lt=new xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=Math.log(2);class Cy{constructor(e){const t=i=>parseInt(Math.log(i)/ky,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Go=function(n,e,t,r){n.sort(e);const s=function(l,c){const f=c-l;let p,h;if(f===0)return null;if(f===1)return p=n[l],h=t?t(p):p,new Dt(h,p.node,Dt.BLACK,null,null);{const v=parseInt(f/2,10)+l,g=s(l,v),b=s(v+1,c);return p=n[v],h=t?t(p):p,new Dt(h,p.node,Dt.BLACK,g,b)}},i=function(l){let c=null,f=null,p=n.length;const h=function(g,b){const y=p-g,k=p;p-=g;const I=s(y+1,k),R=n[y],P=t?t(R):R;v(new Dt(P,R.node,b,null,I))},v=function(g){c?(c.left=g,c=g):(f=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));b?h(y,Dt.BLACK):(h(y,Dt.BLACK),h(y,Dt.RED))}return f},o=new Cy(n.length),a=i(o);return new on(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;const xs={};class rr{static get Default(){return U(xs&&lt,"ChildrenNode.ts has not been loaded"),el=el||new rr({".priority":xs},{".priority":lt}),el}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=js(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof on?t:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,t){U(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Ne.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Go(r,e.getCompare()):a=xs;const l=e.toString(),c={...this.indexSet_};c[l]=e;const f={...this.indexes_};return f[l]=a,new rr(f,c)}addToIndexes(e,t){const r=Mo(this.indexes_,(s,i)=>{const o=js(this.indexSet_,i);if(U(o,"Missing index implementation for "+i),s===xs)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Go(a,o.getCompare())}else return xs;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Ne(e.name,a))),l.insert(e,e.node)}});return new rr(r,this.indexSet_)}removeFromIndexes(e,t){const r=Mo(this.indexes_,s=>{if(s===xs)return s;{const i=t.get(e.name);return i?s.remove(new Ne(e.name,i)):s}});return new rr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class ve{static get EMPTY_NODE(){return ui||(ui=new ve(new on(zc),null,rr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Fp(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ui:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(Je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(U(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ne(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ui:this.priorityNode_;return new ve(s,o,i)}}updateChild(e,t){const r=Re(e);if(r===null)return t;{U(Re(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Je(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(lt,(o,a)=>{t[o]=a.val(e),r++,i&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Up(this.getPriority().val())+":"),this.forEachChild(lt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":pp(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ne(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ne(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ne(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ne.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===co?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(lt),s=t.getIterator(lt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Iy extends ve{constructor(){super(new on(zc),ve.EMPTY_NODE,rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const co=new Iy;Object.defineProperties(Ne,{MIN:{value:new Ne(Ur,ve.EMPTY_NODE)},MAX:{value:new Ne(pr,co)}});Mp.__EMPTY_NODE=ve.EMPTY_NODE;Ot.__childrenNodeConstructor=ve;wy(co);Ey(co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=!0;function It(n,e=null){if(n===null)return ve.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ot(t,It(e))}if(!(n instanceof Array)&&Ty){const t=[];let r=!1;if(jt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=It(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new Ne(o,l)))}}),t.length===0)return ve.EMPTY_NODE;const i=Go(t,by,o=>o.name,zc);if(r){const o=Go(t,lt.getCompare());return new ve(i,It(e),new rr({".priority":o},{".priority":lt}))}else return new ve(i,It(e),rr.Default)}else{let t=ve.EMPTY_NODE;return jt(n,(r,s)=>{if(Yn(n,r)&&r.substring(0,1)!=="."){const i=It(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(It(e))}}yy(It);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends wa{constructor(e){super(),this.indexPath_=e,U(!Pe(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?gs(e.name,t.name):i}makePost(e,t){const r=It(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ne(t,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,co);return new Ne(pr,e)}toString(){return Bi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends wa{compare(e,t){const r=e.node.compareTo(t.node);return r===0?gs(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,t){const r=It(e);return new Ne(t,r)}toString(){return".value"}}const jp=new Sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){return{type:"value",snapshotNode:n}}function Hs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ay(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Vi(t,a)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hs(t,r)):o.trackChildChange(Hi(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(lt,(s,i)=>{t.hasChild(s)||r.trackChildChange(Vi(s,i))}),t.isLeafNode()||t.forEachChild(lt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Hi(s,i,o))}else r.trackChildChange(Hs(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ve.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new jc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new Ne(t,r))||(r=ve.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ve.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ve.EMPTY_NODE);const i=this;return t.forEachChild(lt,(o,a)=>{i.matches(new Ne(o,a))||(s=s.updateImmediateChild(o,ve.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new Ne(t,r))||(r=ve.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ve.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ve.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ve.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,ve.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(h,v)=>p(v,h)}else o=this.index_.getCompare();const a=e;U(a.numChildren()===this.limit_,"");const l=new Ne(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const p=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,l);if(f&&!r.isEmpty()&&v>=0)return i?.trackChildChange(Hi(t,r,p)),a.updateImmediateChild(t,r);{i?.trackChildChange(Vi(t,p));const b=a.updateImmediateChild(t,ve.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i?.trackChildChange(Hs(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return r.isEmpty()?e:f&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Vi(c.name,c.node)),i.trackChildChange(Hs(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,ve.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ur}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new Bc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Py(n){return n.loadsAllData()?new jc(n.getIndex()):n.hasLimit()?new Ry(n):new Wi(n)}function Ny(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function Ly(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function zd(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function Oy(n,e,t){let r;return n.index_===cr||t?r=zd(n,e,t):r=zd(n,e,pr),r.startAfterSet_=!0,r}function qd(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function Dy(n,e,t){let r;return n.index_===cr||t?r=qd(n,e,t):r=qd(n,e,Ur),r.endBeforeSet_=!0,r}function $y(n,e){const t=n.copy();return t.index_=e,t}function jd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===lt?t="$priority":n.index_===jp?t="$value":n.index_===cr?t="$key":(U(n.index_ instanceof qc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Tt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Tt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Tt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Tt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Tt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Bd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==lt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Lp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=lo("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ko.getListenId_(e,r),a={};this.listens_[o]=a;const l=jd(e._queryParams);this.restRequest_(i+".json",l,(c,f)=>{let p=f;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(i,p,!1,r),js(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const r=Ko.getListenId_(e,t);delete this.listens_[r]}get(e){const t=jd(e._queryParams),r=e._path.toString(),s=new to;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ms(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zi(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){return{value:null,children:new Map}}function Vp(n,e,t){if(Pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Re(e);n.children.has(r)||n.children.set(r,Yo());const s=n.children.get(r);e=Je(e),Vp(s,e,t)}}function Al(n,e,t){n.value!==null?t(e,n.value):Uy(n,(r,s)=>{const i=new Ve(e.toString()+"/"+r);Al(s,i,t)})}function Uy(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&jt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=10*1e3,zy=30*1e3,qy=300*1e3;class jy{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fy(e);const r=Vd+(zy-Vd)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;jt(e,(s,i)=>{i>0&&Yn(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*qy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mn||(Mn={}));function Vc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Mn.ACK_USER_WRITE,this.source=Vc()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ve(e));return new Qo(je(),t,this.revert)}}else return U(Re(this.path)===e,"operationForChild called for unrelated child."),new Qo(Je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.source=e,this.path=t,this.type=Mn.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new Gi(this.source,je()):new Gi(this.source,Je(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Mn.OVERWRITE}operationForChild(e){return Pe(this.path)?new ls(this.source,je(),this.snap.getImmediateChild(e)):new ls(this.source,Je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Mn.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new Ve(e));return t.isEmpty()?null:t.value?new ls(this.source,je(),t.value):new Ws(this.source,je(),t)}else return U(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,Je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vy(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Ay(o.childName,o.snapshotNode))}),di(n,s,"child_removed",e,r,t),di(n,s,"child_added",e,r,t),di(n,s,"child_moved",i,r,t),di(n,s,"child_changed",e,r,t),di(n,s,"value",e,r,t),s}function di(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>Wy(n,a,l)),o.forEach(a=>{const l=Hy(n,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Hy(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Wy(n,e,t){if(e.childName==null||t.childName==null)throw ei("Should only compare child_ events.");const r=new Ne(e.childName,e.snapshotNode),s=new Ne(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n,e){return{eventCache:n,serverCache:e}}function Ni(n,e,t,r){return ya(new zr(e,t,r),n.serverCache)}function Hp(n,e,t,r){return ya(n.eventCache,new zr(e,t,r))}function Jo(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function cs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;const Gy=()=>(tl||(tl=new on(S0)),tl);class Qe{static fromObject(e){let t=new Qe(null);return jt(e,(r,s)=>{t=t.set(new Ve(r),s)}),t}constructor(e,t=Gy()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:je(),value:this.value};if(Pe(e))return null;{const r=Re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Je(e),t);return i!=null?{path:ut(new Ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=Re(e),r=this.children.get(t);return r!==null?r.subtree(Je(e)):new Qe(null)}}set(e,t){if(Pe(e))return new Qe(t,this.children);{const r=Re(e),i=(this.children.get(r)||new Qe(null)).set(Je(e),t),o=this.children.insert(r,i);return new Qe(this.value,o)}}remove(e){if(Pe(e))return this.children.isEmpty()?new Qe(null):new Qe(null,this.children);{const t=Re(e),r=this.children.get(t);if(r){const s=r.remove(Je(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Qe(null):new Qe(this.value,i)}else return this}}get(e){if(Pe(e))return this.value;{const t=Re(e),r=this.children.get(t);return r?r.get(Je(e)):null}}setTree(e,t){if(Pe(e))return t;{const r=Re(e),i=(this.children.get(r)||new Qe(null)).setTree(Je(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Qe(this.value,o)}}fold(e){return this.fold_(je(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ut(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,je(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Pe(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(Je(e),ut(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,je(),t)}foreachOnPath_(e,t,r){if(Pe(e))return this;{this.value&&r(t,this.value);const s=Re(e),i=this.children.get(s);return i?i.foreachOnPath_(Je(e),ut(t,s),r):new Qe(null)}}foreach(e){this.foreach_(je(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(ut(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.writeTree_=e}static empty(){return new Un(new Qe(null))}}function Li(n,e,t){if(Pe(e))return new Un(new Qe(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=en(s,e);return i=i.updateChild(o,t),new Un(n.writeTree_.set(s,i))}else{const s=new Qe(t),i=n.writeTree_.setTree(e,s);return new Un(i)}}}function Rl(n,e,t){let r=n;return jt(t,(s,i)=>{r=Li(r,ut(e,s),i)}),r}function Hd(n,e){if(Pe(e))return Un.empty();{const t=n.writeTree_.setTree(e,new Qe(null));return new Un(t)}}function Pl(n,e){return _s(n,e)!=null}function _s(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(en(t.path,e)):null}function Wd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(lt,(r,s)=>{e.push(new Ne(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ne(r,s.value))}),e}function Lr(n,e){if(Pe(e))return n;{const t=_s(n,e);return t!=null?new Un(new Qe(t)):new Un(n.writeTree_.subtree(e))}}function Nl(n){return n.writeTree_.isEmpty()}function Gs(n,e){return Wp(je(),n.writeTree_,e)}function Wp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(U(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Wp(ut(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(ut(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n,e){return Qp(e,n)}function Ky(n,e,t,r,s){U(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Li(n.visibleWrites,e,t)),n.lastWriteId=r}function Yy(n,e,t,r){U(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Rl(n.visibleWrites,e,t),n.lastWriteId=r}function Qy(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Jy(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);U(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Xy(a,r.path)?s=!1:kn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Zy(n),!0;if(r.snap)n.visibleWrites=Hd(n.visibleWrites,r.path);else{const a=r.children;jt(a,l=>{n.visibleWrites=Hd(n.visibleWrites,ut(r.path,l))})}return!0}else return!1}function Xy(n,e){if(n.snap)return kn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&kn(ut(n.path,t),e))return!0;return!1}function Zy(n){n.visibleWrites=Gp(n.allWrites,eE,je()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function eE(n){return n.visible}function Gp(n,e,t){let r=Un.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)kn(t,o)?(a=en(t,o),r=Li(r,a,i.snap)):kn(o,t)&&(a=en(o,t),r=Li(r,je(),i.snap.getChild(a)));else if(i.children){if(kn(t,o))a=en(t,o),r=Rl(r,a,i.children);else if(kn(o,t))if(a=en(o,t),Pe(a))r=Rl(r,je(),i.children);else{const l=js(i.children,Re(a));if(l){const c=l.getChild(Je(a));r=Li(r,je(),c)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function Kp(n,e,t,r,s){if(!r&&!s){const i=_s(n.visibleWrites,e);if(i!=null)return i;{const o=Lr(n.visibleWrites,e);if(Nl(o))return t;if(t==null&&!Pl(o,je()))return null;{const a=t||ve.EMPTY_NODE;return Gs(o,a)}}}else{const i=Lr(n.visibleWrites,e);if(!s&&Nl(i))return t;if(!s&&t==null&&!Pl(i,je()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(kn(c.path,e)||kn(e,c.path))},a=Gp(n.allWrites,o,e),l=t||ve.EMPTY_NODE;return Gs(a,l)}}}function tE(n,e,t){let r=ve.EMPTY_NODE;const s=_s(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(lt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Lr(n.visibleWrites,e);return t.forEachChild(lt,(o,a)=>{const l=Gs(Lr(i,new Ve(o)),a);r=r.updateImmediateChild(o,l)}),Wd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Lr(n.visibleWrites,e);return Wd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nE(n,e,t,r,s){U(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ut(e,t);if(Pl(n.visibleWrites,i))return null;{const o=Lr(n.visibleWrites,i);return Nl(o)?s.getChild(t):Gs(o,s.getChild(t))}}function rE(n,e,t,r){const s=ut(e,t),i=_s(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Lr(n.visibleWrites,s);return Gs(o,r.getNode().getImmediateChild(t))}else return null}function sE(n,e){return _s(n.visibleWrites,e)}function iE(n,e,t,r,s,i,o){let a;const l=Lr(n.visibleWrites,e),c=_s(l,je());if(c!=null)a=c;else if(t!=null)a=Gs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],p=o.getCompare(),h=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=h.getNext();for(;v&&f.length<s;)p(v,r)!==0&&f.push(v),v=h.getNext();return f}else return[]}function oE(){return{visibleWrites:Un.empty(),allWrites:[],lastWriteId:-1}}function Xo(n,e,t,r){return Kp(n.writeTree,n.treePath,e,t,r)}function Gc(n,e){return tE(n.writeTree,n.treePath,e)}function Gd(n,e,t,r){return nE(n.writeTree,n.treePath,e,t,r)}function Zo(n,e){return sE(n.writeTree,ut(n.treePath,e))}function aE(n,e,t,r,s,i){return iE(n.writeTree,n.treePath,e,t,r,s,i)}function Kc(n,e,t){return rE(n.writeTree,n.treePath,e,t)}function Yp(n,e){return Qp(ut(n.treePath,e),n.writeTree)}function Qp(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;U(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,Hi(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,Vi(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,Hs(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,Hi(r,e.snapshotNode,s.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Jp=new cE;class Yc{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kc(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cs(this.viewCache_),i=aE(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){return{filter:n}}function dE(n,e){U(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function hE(n,e,t,r,s){const i=new lE;let o,a;if(t.type===Mn.OVERWRITE){const c=t;c.source.fromUser?o=Ll(n,e,c.path,c.snap,r,s,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Pe(c.path),o=ea(n,e,c.path,c.snap,r,s,a,i))}else if(t.type===Mn.MERGE){const c=t;c.source.fromUser?o=pE(n,e,c.path,c.children,r,s,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ol(n,e,c.path,c.children,r,s,a,i))}else if(t.type===Mn.ACK_USER_WRITE){const c=t;c.revert?o=gE(n,e,c.path,r,s,i):o=mE(n,e,c.path,c.affectedTree,r,s,i)}else if(t.type===Mn.LISTEN_COMPLETE)o=vE(n,e,t.path,r,i);else throw ei("Unknown operation type: "+t.type);const l=i.getChanges();return fE(e,o,l),{viewCache:o,changes:l}}function fE(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Jo(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(Bp(Jo(e)))}}function Xp(n,e,t,r,s,i){const o=e.eventCache;if(Zo(r,t)!=null)return e;{let a,l;if(Pe(t))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cs(e),f=c instanceof ve?c:ve.EMPTY_NODE,p=Gc(r,f);a=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const c=Xo(r,cs(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Re(t);if(c===".priority"){U(Fr(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=Gd(r,t,f,l);p!=null?a=n.filter.updatePriority(f,p):a=o.getNode()}else{const f=Je(t);let p;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Gd(r,t,o.getNode(),l);h!=null?p=o.getNode().getImmediateChild(c).updateChild(f,h):p=o.getNode().getImmediateChild(c)}else p=Kc(r,c,e.serverCache);p!=null?a=n.filter.updateChild(o.getNode(),c,p,f,s,i):a=o.getNode()}}return Ni(e,a,o.isFullyInitialized()||Pe(t),n.filter.filtersNodes())}}function ea(n,e,t,r,s,i,o,a){const l=e.serverCache;let c;const f=o?n.filter:n.filter.getIndexedFilter();if(Pe(t))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(t,r);c=f.updateFullNode(l.getNode(),v,null)}else{const v=Re(t);if(!l.isCompleteForPath(t)&&Fr(t)>1)return e;const g=Je(t),y=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?c=f.updatePriority(l.getNode(),y):c=f.updateChild(l.getNode(),v,y,g,Jp,null)}const p=Hp(e,c,l.isFullyInitialized()||Pe(t),f.filtersNodes()),h=new Yc(s,p,i);return Xp(n,p,t,s,h,a)}function Ll(n,e,t,r,s,i,o){const a=e.eventCache;let l,c;const f=new Yc(s,e,i);if(Pe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ni(e,c,!0,n.filter.filtersNodes());else{const p=Re(t);if(p===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=Ni(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Je(t),v=a.getNode().getImmediateChild(p);let g;if(Pe(h))g=r;else{const b=f.getCompleteChild(p);b!=null?Mc(h)===".priority"&&b.getChild(Dp(h)).isEmpty()?g=b:g=b.updateChild(h,r):g=ve.EMPTY_NODE}if(v.equals(g))l=e;else{const b=n.filter.updateChild(a.getNode(),p,g,h,f,o);l=Ni(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Kd(n,e){return n.eventCache.isCompleteForChild(e)}function pE(n,e,t,r,s,i,o){let a=e;return r.foreach((l,c)=>{const f=ut(t,l);Kd(e,Re(f))&&(a=Ll(n,a,f,c,s,i,o))}),r.foreach((l,c)=>{const f=ut(t,l);Kd(e,Re(f))||(a=Ll(n,a,f,c,s,i,o))}),a}function Yd(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ol(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Pe(t)?c=r:c=new Qe(null).setTree(t,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((p,h)=>{if(f.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),g=Yd(n,v,h);l=ea(n,l,new Ve(p),g,s,i,o,a)}}),c.children.inorderTraversal((p,h)=>{const v=!e.serverCache.isCompleteForChild(p)&&h.value===null;if(!f.hasChild(p)&&!v){const g=e.serverCache.getNode().getImmediateChild(p),b=Yd(n,g,h);l=ea(n,l,new Ve(p),b,s,i,o,a)}}),l}function mE(n,e,t,r,s,i,o){if(Zo(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Pe(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ea(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Pe(t)){let c=new Qe(null);return l.getNode().forEachChild(cr,(f,p)=>{c=c.set(new Ve(f),p)}),Ol(n,e,t,c,s,i,a,o)}else return e}else{let c=new Qe(null);return r.foreach((f,p)=>{const h=ut(t,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),Ol(n,e,t,c,s,i,a,o)}}function vE(n,e,t,r,s){const i=e.serverCache,o=Hp(e,i.getNode(),i.isFullyInitialized()||Pe(t),i.isFiltered());return Xp(n,o,t,r,Jp,s)}function gE(n,e,t,r,s,i){let o;if(Zo(r,t)!=null)return e;{const a=new Yc(r,e,s),l=e.eventCache.getNode();let c;if(Pe(t)||Re(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Xo(r,cs(e));else{const p=e.serverCache.getNode();U(p instanceof ve,"serverChildren would be complete if leaf node"),f=Gc(r,p)}f=f,c=n.filter.updateFullNode(l,f,i)}else{const f=Re(t);let p=Kc(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?c=n.filter.updateChild(l,f,p,Je(t),a,i):e.eventCache.getNode().hasChild(f)?c=n.filter.updateChild(l,f,ve.EMPTY_NODE,Je(t),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xo(r,cs(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Zo(r,je())!=null,Ni(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new jc(r.getIndex()),i=Py(r);this.processor_=uE(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(ve.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ve.EMPTY_NODE,a.getNode(),null),f=new zr(l,o.isFullyInitialized(),s.filtersNodes()),p=new zr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ya(p,f),this.eventGenerator_=new By(this.query_)}get query(){return this.query_}}function bE(n){return n.viewCache_.serverCache.getNode()}function wE(n){return Jo(n.viewCache_)}function yE(n,e){const t=cs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function Qd(n){return n.eventRegistrations_.length===0}function EE(n,e){n.eventRegistrations_.push(e)}function Jd(n,e,t){const r=[];if(t){U(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function Xd(n,e,t,r){e.type===Mn.MERGE&&e.source.queryId!==null&&(U(cs(n.viewCache_),"We should always have a full cache before handling merges"),U(Jo(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=hE(n.processor_,s,e,t,r);return dE(n.processor_,i.viewCache),U(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,Zp(n,i.changes,i.viewCache.eventCache.getNode(),null)}function xE(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(lt,(i,o)=>{r.push(Hs(i,o))}),t.isFullyInitialized()&&r.push(Bp(t.getNode())),Zp(n,r,t.getNode(),e)}function Zp(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return Vy(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class em{constructor(){this.views=new Map}}function kE(n){U(!ta,"__referenceConstructor has already been defined"),ta=n}function CE(){return U(ta,"Reference.ts has not been loaded"),ta}function IE(n){return n.views.size===0}function Qc(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return U(i!=null,"SyncTree gave us an op for an invalid query."),Xd(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(Xd(o,e,t,r));return i}}function tm(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=Xo(t,s?r:null),l=!1;a?l=!0:r instanceof ve?(a=Gc(t,r),l=!1):(a=ve.EMPTY_NODE,l=!1);const c=ya(new zr(a,l,!1),new zr(r,s,!1));return new _E(e,c)}return o}function TE(n,e,t,r,s,i){const o=tm(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),EE(o,t),xE(o,t)}function SE(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=qr(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Jd(c,t,r)),Qd(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Jd(l,t,r)),Qd(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!qr(n)&&i.push(new(CE())(e._repo,e._path)),{removed:i,events:o}}function nm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Or(n,e){let t=null;for(const r of n.views.values())t=t||yE(r,e);return t}function rm(n,e){if(e._queryParams.loadsAllData())return xa(n);{const r=e._queryIdentifier;return n.views.get(r)}}function sm(n,e){return rm(n,e)!=null}function qr(n){return xa(n)!=null}function xa(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;function AE(n){U(!na,"__referenceConstructor has already been defined"),na=n}function RE(){return U(na,"Reference.ts has not been loaded"),na}let PE=1;class Zd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Qe(null),this.pendingWriteTree_=oE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function im(n,e,t,r,s){return Ky(n.pendingWriteTree_,e,t,r,s),s?ni(n,new ls(Vc(),e,t)):[]}function NE(n,e,t,r){Yy(n.pendingWriteTree_,e,t,r);const s=Qe.fromObject(t);return ni(n,new Ws(Vc(),e,s))}function Tr(n,e,t=!1){const r=Qy(n.pendingWriteTree_,e);if(Jy(n.pendingWriteTree_,e)){let i=new Qe(null);return r.snap!=null?i=i.set(je(),!0):jt(r.children,o=>{i=i.set(new Ve(o),!0)}),ni(n,new Qo(r.path,i,t))}else return[]}function uo(n,e,t){return ni(n,new ls(Hc(),e,t))}function LE(n,e,t){const r=Qe.fromObject(t);return ni(n,new Ws(Hc(),e,r))}function OE(n,e){return ni(n,new Gi(Hc(),e))}function DE(n,e,t){const r=Xc(n,t);if(r){const s=Zc(r),i=s.path,o=s.queryId,a=en(i,e),l=new Gi(Wc(o),a);return eu(n,i,l)}else return[]}function ra(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||sm(o,e))){const l=SE(o,e,t,r);IE(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(i,(h,v)=>qr(v));if(f&&!p){const h=n.syncPointTree_.subtree(i);if(!h.isEmpty()){const v=UE(h);for(let g=0;g<v.length;++g){const b=v[g],y=b.query,k=cm(n,b);n.listenProvider_.startListening(Oi(y),Ki(n,y),k.hashFn,k.onComplete)}}}!p&&c.length>0&&!r&&(f?n.listenProvider_.stopListening(Oi(e),null):c.forEach(h=>{const v=n.queryToTagMap.get(ka(h));n.listenProvider_.stopListening(Oi(h),v)}))}FE(n,c)}return a}function om(n,e,t,r){const s=Xc(n,r);if(s!=null){const i=Zc(s),o=i.path,a=i.queryId,l=en(o,e),c=new ls(Wc(a),l,t);return eu(n,o,c)}else return[]}function $E(n,e,t,r){const s=Xc(n,r);if(s){const i=Zc(s),o=i.path,a=i.queryId,l=en(o,e),c=Qe.fromObject(t),f=new Ws(Wc(a),l,c);return eu(n,o,f)}else return[]}function Dl(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,v)=>{const g=en(h,s);i=i||Or(v,g),o=o||qr(v)});let a=n.syncPointTree_.get(s);a?(o=o||qr(a),i=i||Or(a,je())):(a=new em,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=ve.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,g)=>{const b=Or(g,je());b&&(i=i.updateImmediateChild(v,b))}));const c=sm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ka(e);U(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=zE();n.queryToTagMap.set(h,v),n.tagToQueryMap.set(v,h)}const f=Ea(n.pendingWriteTree_,s);let p=TE(a,e,t,f,i,l);if(!c&&!o&&!r){const h=rm(a,e);p=p.concat(qE(n,e,h))}return p}function Jc(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=en(o,e),c=Or(a,l);if(c)return c});return Kp(s,e,i,t,!0)}function ME(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(c,f)=>{const p=en(c,t);r=r||Or(f,p)});let s=n.syncPointTree_.get(t);s?r=r||Or(s,je()):(s=new em,n.syncPointTree_=n.syncPointTree_.set(t,s));const i=r!=null,o=i?new zr(r,!0,!1):null,a=Ea(n.pendingWriteTree_,e._path),l=tm(s,e,a,i?o.getNode():ve.EMPTY_NODE,i);return wE(l)}function ni(n,e){return am(e,n.syncPointTree_,null,Ea(n.pendingWriteTree_,je()))}function am(n,e,t,r){if(Pe(n.path))return lm(n,e,t,r);{const s=e.get(je());t==null&&s!=null&&(t=Or(s,je()));let i=[];const o=Re(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,f=Yp(r,o);i=i.concat(am(a,l,c,f))}return s&&(i=i.concat(Qc(s,n,r,t))),i}}function lm(n,e,t,r){const s=e.get(je());t==null&&s!=null&&(t=Or(s,je()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Yp(r,o),f=n.operationForChild(o);f&&(i=i.concat(lm(f,a,l,c)))}),s&&(i=i.concat(Qc(s,n,r,t))),i}function cm(n,e){const t=e.query,r=Ki(n,t);return{hashFn:()=>(bE(e)||ve.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?DE(n,t._path,r):OE(n,t._path);{const i=P0(s,t);return ra(n,t,null,i)}}}}function Ki(n,e){const t=ka(e);return n.queryToTagMap.get(t)}function ka(n){return n._path.toString()+"$"+n._queryIdentifier}function Xc(n,e){return n.tagToQueryMap.get(e)}function Zc(n){const e=n.indexOf("$");return U(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ve(n.substr(0,e))}}function eu(n,e,t){const r=n.syncPointTree_.get(e);U(r,"Missing sync point for query tag that we're tracking");const s=Ea(n.pendingWriteTree_,e);return Qc(r,t,s,null)}function UE(n){return n.fold((e,t,r)=>{if(t&&qr(t))return[xa(t)];{let s=[];return t&&(s=nm(t)),jt(r,(i,o)=>{s=s.concat(o)}),s}})}function Oi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(RE())(n._repo,n._path):n}function FE(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=ka(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function zE(){return PE++}function qE(n,e,t){const r=e._path,s=Ki(n,e),i=cm(n,t),o=n.listenProvider_.startListening(Oi(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)U(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,p)=>{if(!Pe(c)&&f&&qr(f))return[xa(f).query];{let h=[];return f&&(h=h.concat(nm(f).map(v=>v.query))),jt(p,(v,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const f=l[c];n.listenProvider_.stopListening(Oi(f),Ki(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new tu(t)}node(){return this.node_}}class nu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ut(this.path_,e);return new nu(this.syncTree_,t)}node(){return Jc(this.syncTree_,this.path_)}}const jE=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eh=function(n,e,t){if(!n||typeof n!="object")return n;if(U(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return BE(n[".sv"],e,t);if(typeof n[".sv"]=="object")return VE(n[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},BE=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:U(!1,"Unexpected server value: "+n)}},VE=function(n,e,t){n.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const s=e.node();if(U(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},um=function(n,e,t,r){return ru(e,new nu(t,n),r)},dm=function(n,e,t){return ru(n,new tu(e),t)};function ru(n,e,t){const r=n.getPriority().val(),s=eh(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=eh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ot(a,It(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ot(s))),o.forEachChild(lt,(a,l)=>{const c=ru(l,e.getImmediateChild(a),t);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function iu(n,e){let t=e instanceof Ve?e:new Ve(e),r=n,s=Re(t);for(;s!==null;){const i=js(r.node.children,s)||{children:{},childCount:0};r=new su(s,r,i),t=Je(t),s=Re(t)}return r}function ri(n){return n.node.value}function hm(n,e){n.node.value=e,$l(n)}function fm(n){return n.node.childCount>0}function HE(n){return ri(n)===void 0&&!fm(n)}function Ca(n,e){jt(n.node.children,(t,r)=>{e(new su(t,n,r))})}function pm(n,e,t,r){t&&e(n),Ca(n,s=>{pm(s,e,!0)})}function WE(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ho(n){return new Ve(n.parent===null?n.name:ho(n.parent)+"/"+n.name)}function $l(n){n.parent!==null&&GE(n.parent,n.name,n)}function GE(n,e,t){const r=HE(t),s=Yn(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,$l(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,$l(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=/[\[\].#$\/\u0000-\u001F\u007F]/,YE=/[\[\].#$\u0000-\u001F\u007F]/,nl=10*1024*1024,ou=function(n){return typeof n=="string"&&n.length!==0&&!KE.test(n)},mm=function(n){return typeof n=="string"&&n.length!==0&&!YE.test(n)},QE=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mm(n)},Ml=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Nc(n)||n&&typeof n=="object"&&Yn(n,".sv")},Ia=function(n,e,t,r){r&&e===void 0||Ta(pa(n,"value"),e,t)},Ta=function(n,e,t){const r=t instanceof Ve?new dy(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Kr(r));if(typeof e=="function")throw new Error(n+"contains a function "+Kr(r)+" with contents = "+e.toString());if(Nc(e))throw new Error(n+"contains "+e.toString()+" "+Kr(r));if(typeof e=="string"&&e.length>nl/3&&ma(e)>nl)throw new Error(n+"contains a string greater than "+nl+" utf8 bytes "+Kr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(jt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ou(o)))throw new Error(n+" contains an invalid key ("+o+") "+Kr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hy(r,o),Ta(n,a,r),fy(r)}),s&&i)throw new Error(n+' contains ".value" child '+Kr(r)+" in addition to actual children.")}},JE=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=Bi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ou(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uy);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&kn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},XE=function(n,e,t,r){const s=pa(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];jt(e,(o,a)=>{const l=new Ve(o);if(Ta(s,a,ut(t,l)),Mc(l)===".priority"&&!Ml(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),JE(s,i)},au=function(n,e,t,r){if(!mm(t))throw new Error(pa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZE=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),au(n,e,t)},vm=function(n,e){if(Re(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ex=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!QE(t))throw new Error(pa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sa(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Uc(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function gm(n,e,t){Sa(n,t),_m(n,r=>Uc(r,e))}function Sn(n,e,t){Sa(n,t),_m(n,r=>kn(r,e)||kn(e,r))}function _m(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(nx(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function nx(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Ri&&zt("event: "+t.toString()),ti(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="repo_interrupt",sx=25;class ix{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new su,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ox(n,e,t){if(n.stats_=Dc(n.repoInfo_),n.forceRestClient_||D0())n.server_=new Ko(n.repoInfo_,(r,s,i,o)=>{th(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>nh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new lr(n.repoInfo_,e,(r,s,i,o)=>{th(n,r,s,i,o)},r=>{nh(n,r)},r=>{ax(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=z0(n.repoInfo_,()=>new jy(n.stats_,n.server_)),n.infoData_=new My,n.infoSyncTree_=new Zd({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=uo(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lu(n,"connected",!1),n.serverSyncTree_=new Zd({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Sn(n.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function bm(n){const t=n.infoData_.getNode(new Ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Aa(n){return jE({timestamp:bm(n)})}function th(n,e,t,r,s){n.dataUpdateCount++;const i=new Ve(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=Mo(t,c=>It(c));o=$E(n.serverSyncTree_,i,l,s)}else{const l=It(t);o=om(n.serverSyncTree_,i,l,s)}else if(r){const l=Mo(t,c=>It(c));o=LE(n.serverSyncTree_,i,l)}else{const l=It(t);o=uo(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ks(n,i)),Sn(n.eventQueue_,a,o)}function nh(n,e){lu(n,"connected",e),e===!1&&dx(n)}function ax(n,e){jt(e,(t,r)=>{lu(n,t,r)})}function lu(n,e,t){const r=new Ve("/.info/"+e),s=It(t);n.infoData_.updateSnapshot(r,s);const i=uo(n.infoSyncTree_,r,s);Sn(n.eventQueue_,r,i)}function cu(n){return n.nextWriteId_++}function lx(n,e,t){const r=ME(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const i=It(s).withIndex(e._queryParams.getIndex());Dl(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=uo(n.serverSyncTree_,e._path,i);else{const a=Ki(n.serverSyncTree_,e);o=om(n.serverSyncTree_,e._path,i,a)}return Sn(n.eventQueue_,e._path,o),ra(n.serverSyncTree_,e,t,null,!0),i},s=>(fo(n,"get for query "+Tt(e)+" failed: "+s),Promise.reject(new Error(s))))}function cx(n,e,t,r,s){fo(n,"set",{path:e.toString(),value:t,priority:r});const i=Aa(n),o=It(t,r),a=Jc(n.serverSyncTree_,e),l=dm(o,a,i),c=cu(n),f=im(n.serverSyncTree_,e,l,c,!0);Sa(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(h,v)=>{const g=h==="ok";g||tn("set at "+e+" failed: "+h);const b=Tr(n.serverSyncTree_,c,!g);Sn(n.eventQueue_,e,b),Fl(n,s,h,v)});const p=du(n,e);Ks(n,p),Sn(n.eventQueue_,p,[])}function ux(n,e,t,r){fo(n,"update",{path:e.toString(),value:t});let s=!0;const i=Aa(n),o={};if(jt(t,(a,l)=>{s=!1,o[a]=um(ut(e,a),It(l),n.serverSyncTree_,i)}),s)zt("update() called with empty data.  Don't do anything."),Fl(n,r,"ok",void 0);else{const a=cu(n),l=NE(n.serverSyncTree_,e,o,a);Sa(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,f)=>{const p=c==="ok";p||tn("update at "+e+" failed: "+c);const h=Tr(n.serverSyncTree_,a,!p),v=h.length>0?Ks(n,e):e;Sn(n.eventQueue_,v,h),Fl(n,r,c,f)}),jt(t,c=>{const f=du(n,ut(e,c));Ks(n,f)}),Sn(n.eventQueue_,e,[])}}function dx(n){fo(n,"onDisconnectEvents");const e=Aa(n),t=Yo();Al(n.onDisconnect_,je(),(s,i)=>{const o=um(s,i,n.serverSyncTree_,e);Vp(t,s,o)});let r=[];Al(t,je(),(s,i)=>{r=r.concat(uo(n.serverSyncTree_,s,i));const o=du(n,s);Ks(n,o)}),n.onDisconnect_=Yo(),Sn(n.eventQueue_,je(),r)}function hx(n,e,t){let r;Re(e._path)===".info"?r=Dl(n.infoSyncTree_,e,t):r=Dl(n.serverSyncTree_,e,t),gm(n.eventQueue_,e._path,r)}function Ul(n,e,t){let r;Re(e._path)===".info"?r=ra(n.infoSyncTree_,e,t):r=ra(n.serverSyncTree_,e,t),gm(n.eventQueue_,e._path,r)}function fx(n){n.persistentConnection_&&n.persistentConnection_.interrupt(rx)}function fo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),zt(t,...e)}function Fl(n,e,t,r){e&&ti(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function wm(n,e,t){return Jc(n.serverSyncTree_,e,t)||ve.EMPTY_NODE}function uu(n,e=n.transactionQueueTree_){if(e||Ra(n,e),ri(e)){const t=Em(n,e);U(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&px(n,ho(e),t)}else fm(e)&&Ca(e,t=>{uu(n,t)})}function px(n,e,t){const r=t.map(c=>c.currentWriteId),s=wm(n,e,r);let i=s;const o=s.hash();for(let c=0;c<t.length;c++){const f=t[c];U(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=en(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,c=>{fo(n,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const p=[];for(let h=0;h<t.length;h++)t[h].status=2,f=f.concat(Tr(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&p.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Ra(n,iu(n.transactionQueueTree_,e)),uu(n,n.transactionQueueTree_),Sn(n.eventQueue_,e,f);for(let h=0;h<p.length;h++)ti(p[h])}else{if(c==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{tn("transaction at "+l.toString()+" failed: "+c);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=c}Ks(n,e)}},o)}function Ks(n,e){const t=ym(n,e),r=ho(t),s=Em(n,t);return mx(n,s,r),r}function mx(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=en(t,l.path);let f=!1,p;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,s=s.concat(Tr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sx)f=!0,p="maxretry",s=s.concat(Tr(n.serverSyncTree_,l.currentWriteId,!0));else{const h=wm(n,l.path,o);l.currentInputSnapshot=h;const v=e[a].update(h.val());if(v!==void 0){Ta("transaction failed: Data returned ",v,l.path);let g=It(v);typeof v=="object"&&v!=null&&Yn(v,".priority")||(g=g.updatePriority(h.getPriority()));const y=l.currentWriteId,k=Aa(n),I=dm(g,h,k);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=cu(n),o.splice(o.indexOf(y),1),s=s.concat(im(n.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(Tr(n.serverSyncTree_,y,!0))}else f=!0,p="nodata",s=s.concat(Tr(n.serverSyncTree_,l.currentWriteId,!0))}Sn(n.eventQueue_,t,s),s=[],f&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Ra(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ti(r[a]);uu(n,n.transactionQueueTree_)}function ym(n,e){let t,r=n.transactionQueueTree_;for(t=Re(e);t!==null&&ri(r)===void 0;)r=iu(r,t),e=Je(e),t=Re(e);return r}function Em(n,e){const t=[];return xm(n,e,t),t.sort((r,s)=>r.order-s.order),t}function xm(n,e,t){const r=ri(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Ca(e,s=>{xm(n,s,t)})}function Ra(n,e){const t=ri(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,hm(e,t.length>0?t:void 0)}Ca(e,r=>{Ra(n,r)})}function du(n,e){const t=ho(ym(n,e)),r=iu(n.transactionQueueTree_,e);return WE(r,s=>{rl(n,s)}),rl(n,r),pm(r,s=>{rl(n,s)}),t}function rl(n,e){const t=ri(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(U(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(U(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Tr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?hm(e,void 0):t.length=i+1,Sn(n.eventQueue_,ho(e),s);for(let o=0;o<r.length;o++)ti(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function gx(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tn(`Invalid query segment '${t}' in query '${n}'`)}return e}const rh=function(n,e){const t=_x(n),r=t.namespace;t.domain==="firebase.com"&&fr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||I0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ip(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ve(t.pathString)}},_x=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=vx(n.substring(f,p)));const h=gx(n.substring(Math.min(n.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),t=e.substring(g+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bx=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=sh.charAt(t%64),t=Math.floor(t/64);U(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=sh.charAt(e[s]);return U(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Tt(this.snapshot.exportVal())}}class Cm{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Pe(this._path)?null:Mc(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=Bd(this._queryParams),t=Lc(e);return t==="{}"?"default":t}get _queryObject(){return Bd(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Wr))return!1;const t=this._repo===e._repo,r=Uc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cy(this._path)}}function wx(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function hu(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===cr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Ur)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==pr)throw new Error(r);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===lt){if(e!=null&&!Ml(e)||t!=null&&!Ml(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(U(n.getIndex()instanceof qc||n.getIndex()===jp,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Tm(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Jn extends Wr{constructor(e,t){super(e,t,new Bc,!1)}get parent(){const e=Dp(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ys{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ve(e),r=Qs(this.ref,e);return new Ys(this._node.getChild(t),r,lt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ys(s,Qs(this.ref,r),lt)))}hasChild(e){const t=new Ve(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bn(n,e){return n=mt(n),n._checkNotDeleted("ref"),e!==void 0?Qs(n._root,e):n._root}function Qs(n,e){return n=mt(n),Re(n._path)===null?ZE("child","path",e):au("child","path",e),new Jn(n._repo,ut(n._path,e))}function Sm(n,e){n=mt(n),vm("push",n._path),Ia("push",e,n._path,!0);const t=bm(n._repo),r=bx(t),s=Qs(n,r),i=Qs(n,r);let o;return e!=null?o=yx(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function yx(n,e){n=mt(n),vm("set",n._path),Ia("set",e,n._path,!1);const t=new to;return cx(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Am(n,e){XE("update",e,n._path);const t=new to;return ux(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ih(n){n=mt(n);const e=new Im(()=>{}),t=new Pa(e);return lx(n._repo,n,t).then(r=>new Ys(r,new Jn(n._repo,n._path),n._queryParams.getIndex()))}class Pa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new km("value",this,new Ys(e.snapshotNode,new Jn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cm(this,e,t):null}matches(e){return e instanceof Pa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cm(this,e,t):null}createEvent(e,t){U(e.childName!=null,"Child events should have a childName.");const r=Qs(new Jn(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new km(e.type,this,new Ys(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Rm(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=t,c=(f,p)=>{Ul(n._repo,n,a),l(f,p)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Im(t,i||void 0),a=e==="value"?new Pa(o):new fu(e,o);return hx(n._repo,n,a),()=>Ul(n._repo,n,a)}function pu(n,e,t,r){return Rm(n,"value",e,t,r)}function Ex(n,e,t,r){return Rm(n,"child_added",e,t,r)}function xx(n,e,t){Ul(n._repo,n,null)}class po{}class kx extends po{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Ia("endBefore",this._value,e._path,!1);const t=Dy(e._queryParams,this._value,this._key);if(Tm(t),hu(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Wr(e._repo,e._path,t,e._orderByCalled)}}function Cx(n,e){return new kx(n,e)}class Ix extends po{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Ia("startAfter",this._value,e._path,!1);const t=Oy(e._queryParams,this._value,this._key);if(Tm(t),hu(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Wr(e._repo,e._path,t,e._orderByCalled)}}function Tx(n,e){return new Ix(n,e)}class Sx extends po{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Wr(e._repo,e._path,Ny(e._queryParams,this._limit),e._orderByCalled)}}function oh(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Sx(n)}class Ax extends po{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Wr(e._repo,e._path,Ly(e._queryParams,this._limit),e._orderByCalled)}}function ah(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ax(n)}class Rx extends po{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){wx(e,"orderByChild");const t=new Ve(this._path);if(Pe(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new qc(t),s=$y(e._queryParams,r);return hu(s),new Wr(e._repo,e._path,s,!0)}}function hi(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return au("orderByChild","path",n),new Rx(n)}function fi(n,...e){let t=mt(n);for(const r of e)t=r._apply(t);return t}kE(Jn);AE(Jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="FIREBASE_DATABASE_EMULATOR_HOST",zl={};let Nx=!1;function Lx(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Vr(i);n.repoInfo_=new Ip(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function Ox(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=rh(i,s),a=o.repoInfo,l;typeof process<"u"&&xd&&(l=xd[Px]),l?(i=`http://${l}?ns=${a.namespace}`,o=rh(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new M0(n.name,n.options,e);ex("Invalid Firebase Database URL",o),Pe(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=$x(a,n,c,new $0(n,t));return new Mx(f,n)}function Dx(n,e){const t=zl[e];(!t||t[n.key]!==n)&&fr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),fx(n),delete t[n.key]}function $x(n,e,t,r){let s=zl[e.name];s||(s={},zl[e.name]=s);let i=s[n.toURLString()];return i&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ix(n,Nx,t,r),s[n.toURLString()]=i,i}class Mx{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ox(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function Ux(n=Ec(),e){const t=va(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=bf("database");r&&Fx(t,...r)}return t}function Fx(n,e,t,r={}){n=mt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&is(r,i.repoInfo_.emulatorOptions))return;fr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new To(To.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Ef(r.mockUserToken,n.app.options.projectId);o=new To(a)}Vr(e)&&(gc(e),_c("Database",!0)),Lx(i,s,r,o)}/**
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
 */function zx(n){w0(vs),os(new Mr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ox(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Wn(kd,Cd,n),Wn(kd,Cd,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={".sv":"timestamp"};function jx(){return qx}function Bx(n){return{".sv":{increment:n}}}lr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};lr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebasestorage.googleapis.com",Nm="storageBucket",Vx=120*1e3,Hx=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends _r{constructor(e,t,r=0){super(sl(e),`Firebase Storage: ${t} (${sl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function sl(n){return"storage/"+n}function mu(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(ft.UNKNOWN,n)}function Wx(n){return new vt(ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Gx(n){return new vt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kx(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(ft.UNAUTHENTICATED,n)}function Yx(){return new vt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Qx(n){return new vt(ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Jx(){return new vt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xx(){return new vt(ft.CANCELED,"User canceled the upload/download.")}function Zx(n){return new vt(ft.INVALID_URL,"Invalid URL '"+n+"'.")}function ek(n){return new vt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tk(){return new vt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nm+"' property when initializing the app?")}function nk(){return new vt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rk(){return new vt(ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sk(n){return new vt(ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ql(n){return new vt(ft.INVALID_ARGUMENT,n)}function Lm(){return new vt(ft.APP_DELETED,"The Firebase app was deleted.")}function ik(n){return new vt(ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Di(n,e){return new vt(ft.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pi(n){throw new vt(ft.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=fn.makeFromUrl(e,t)}catch{return new fn(e,"")}if(r.path==="")return r;throw ek(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${h}`,"i"),g={bucket:1,path:3},b=t===Pm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",k=new RegExp(`^https?://${b}/${s}/${y}`,"i"),R=[{regex:a,indices:l,postModify:i},{regex:v,indices:g,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<R.length;P++){const M=R[P],L=M.regex.exec(e);if(L){const A=L[M.indices.bucket];let C=L[M.indices.path];C||(C=""),r=new fn(A,C),M.postModify(r);break}}if(r==null)throw Zx(e);return r}}class ok{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function f(...y){c||(c=!0,e.apply(null,y))}function p(y){s=setTimeout(()=>{s=null,n(v,l())},y)}function h(){i&&clearTimeout(i)}function v(y,...k){if(c){h();return}if(y){h(),f.call(null,y,...k);return}if(l()||o){h(),f.call(null,y,...k);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,p(R)}let g=!1;function b(y){g||(g=!0,h(),!c&&(s!==null?(y||(a=2),clearTimeout(s),p(0)):y||(a=1)))}return p(0),i=setTimeout(()=>{o=!0,b(!0)},t),b}function lk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(n){return n!==void 0}function uk(n){return typeof n=="object"&&!Array.isArray(n)}function vu(n){return typeof n=="string"||n instanceof String}function lh(n){return gu()&&n instanceof Blob}function gu(){return typeof Blob<"u"}function ch(n,e,t,r){if(r<e)throw ql(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ql(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Om(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ts;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ts||(ts={}));/**
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
 */function dk(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t,r,s,i,o,a,l,c,f,p,h=!0,v=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=h,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ts.NO_ERROR,l=i.getStatus();if(!a||dk(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ts.ABORT;r(!1,new wo(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new wo(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ck(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=mu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Lm():Xx();o(l)}else{const l=Jx();o(l)}};this.canceled_?t(!1,new wo(!1,null,!0)):this.backoffId_=ak(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function fk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function vk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function gk(n,e,t,r,s,i,o=!0,a=!1){const l=Om(n.urlParams),c=n.url+l,f=Object.assign({},n.headers);return mk(f,e),fk(f,t),pk(f,i),vk(f,r),new hk(c,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bk(...n){const e=_k();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(gu())return new Blob(n);throw new vt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function yk(n){if(typeof atob>"u")throw sk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class il{constructor(e,t){this.data=e,this.contentType=t||null}}function Ek(n,e){switch(n){case Vn.RAW:return new il(Dm(e));case Vn.BASE64:case Vn.BASE64URL:return new il($m(n,e));case Vn.DATA_URL:return new il(kk(e),Ck(e))}throw mu()}function Dm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function xk(n){let e;try{e=decodeURIComponent(n)}catch{throw Di(Vn.DATA_URL,"Malformed data URL.")}return Dm(e)}function $m(n,e){switch(n){case Vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Di(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Di(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=yk(e)}catch(s){throw s.message.includes("polyfill")?s:Di(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Mm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Di(Vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Ik(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kk(n){const e=new Mm(n);return e.base64?$m(Vn.BASE64,e.rest):xk(e.rest)}function Ck(n){return new Mm(n).contentType}function Ik(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){let r=0,s="";lh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(lh(this.data_)){const r=this.data_,s=wk(r,e,t);return s===null?null:new Cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Cr(r,!0)}}static getBlob(...e){if(gu()){const t=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(bk.apply(null,t))}else{const t=e.map(o=>vu(o)?Ek(Vn.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Cr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n){let e;try{e=JSON.parse(n)}catch{return null}return uk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Sk(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Fm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(n,e){return e}class Qt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Ak}}let yo=null;function Rk(n){return!vu(n)||n.length<2?n:Fm(n)}function zm(){if(yo)return yo;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(i,o){return Rk(o)}const t=new Qt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Qt("size");return s.xform=r,n.push(s),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),yo=n,yo}function Pk(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new fn(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Nk(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return Pk(r,n),r}function qm(n,e,t){const r=Um(e);return r===null?null:Nk(n,r,t)}function Lk(n,e,t,r){const s=Um(e);if(s===null||!vu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=n.bucket,p=n.fullPath,h="/b/"+o(f)+"/o/"+o(p),v=_u(h,t,r),g=Om({alt:"media",token:c});return v+g})[0]}function Ok(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class jm{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){if(!n)throw mu()}function Dk(n,e){function t(r,s){const i=qm(n,s,e);return Bm(i!==null),i}return t}function $k(n,e){function t(r,s){const i=qm(n,s,e);return Bm(i!==null),Lk(i,s,n.host,n._protocol)}return t}function Vm(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Yx():s=Kx():t.getStatus()===402?s=Gx(n.bucket):t.getStatus()===403?s=Qx(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Mk(n){const e=Vm(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Wx(n.path)),i.serverResponse=s.serverResponse,i}return t}function Uk(n,e,t){const r=e.fullServerUrl(),s=_u(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new jm(s,i,$k(n,t),o);return a.errorHandler=Mk(e),a}function Fk(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function zk(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Fk(null,e)),r}function qk(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let P=0;P<2;P++)R=R+Math.random().toString().slice(2);return R}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=zk(e,r,s),f=Ok(c,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",v=Cr.getBlob(p,r,h);if(v===null)throw nk();const g={name:c.fullPath},b=_u(i,n.host,n._protocol),y="POST",k=n.maxUploadRetryTime,I=new jm(b,y,Dk(n,t),k);return I.urlParams=g,I.headers=o,I.body=v.uploadData(),I.errorHandler=Vm(e),I}class jk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw pi("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Bk extends jk{initXhr(){this.xhr_.responseType="text"}}function Hm(){return new Bk}/**
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
 */class us{constructor(e,t){this._service=e,t instanceof fn?this._location=t:this._location=fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new us(e,t)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fm(this._location.path)}get storage(){return this._service}get parent(){const e=Tk(this._location.path);if(e===null)return null;const t=new fn(this._location.bucket,e);return new us(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ik(e)}}function Vk(n,e,t){n._throwIfRoot("uploadBytes");const r=qk(n.storage,n._location,zm(),new Cr(e,!0),t);return n.storage.makeRequestWithTokens(r,Hm).then(s=>({metadata:s,ref:n}))}function Hk(n){n._throwIfRoot("getDownloadURL");const e=Uk(n.storage,n._location,zm());return n.storage.makeRequestWithTokens(e,Hm).then(t=>{if(t===null)throw rk();return t})}function Wk(n,e){const t=Sk(n._location.path,e),r=new fn(n._location.bucket,t);return new us(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(n){return/^[A-Za-z]+:\/\//.test(n)}function Kk(n,e){return new us(n,e)}function Wm(n,e){if(n instanceof bu){const t=n;if(t._bucket==null)throw tk();const r=new us(t,t._bucket);return e!=null?Wm(r,e):r}else return e!==void 0?Wk(n,e):n}function Yk(n,e){if(e&&Gk(e)){if(n instanceof bu)return Kk(n,e);throw ql("To use ref(service, url), the first argument must be a Storage instance.")}else return Wm(n,e)}function uh(n,e){const t=e?.[Nm];return t==null?null:fn.makeFromBucketSpec(t,n)}function Qk(n,e,t,r={}){n.host=`${e}:${t}`;const s=Vr(e);s&&(gc(`https://${n.host}/b`),_c("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ef(i,n.app.options.projectId))}class bu{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Pm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vx,this._maxUploadRetryTime=Hx,this._requests=new Set,s!=null?this._bucket=fn.makeFromBucketSpec(s,this._host):this._bucket=uh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=uh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ch("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ch("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new us(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new ok(Lm());{const o=gk(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const dh="@firebase/storage",hh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="storage";function Jk(n,e,t){return n=mt(n),Vk(n,e,t)}function Xk(n){return n=mt(n),Hk(n)}function Zk(n,e){return n=mt(n),Yk(n,e)}function eC(n=Ec(),e){n=mt(n);const r=va(n,Gm).getImmediate({identifier:e}),s=bf("storage");return s&&tC(r,...s),r}function tC(n,e,t,r={}){Qk(n,e,t,r)}function nC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new bu(t,r,s,e,vs)}function rC(){os(new Mr(Gm,nC,"PUBLIC").setMultipleInstances(!0)),Wn(dh,hh,""),Wn(dh,hh,"esm2020")}rC();const Km={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",Km);const wu=Tf(Km),ds=_0(wu),On=Ux(wu),sC=eC(wu);var iC=S('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),oC=S('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),aC=S('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),lC=S('<h3 class="post-title svelte-1t1odzy"> </h3>'),cC=S('<p class="post-text svelte-1t1odzy"> </p>'),uC=S('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),dC=S('<div class="posts svelte-1t1odzy"></div>'),hC=S('<div class="post-list-container svelte-1t1odzy"><!></div>');const fC={hash:"svelte-1t1odzy",code:`
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
  }`};function pC(n,e){et(e,!0),nt(n,fC);let t=at(e,"path",7,"posts"),r=at(e,"limit",7,"10"),s=re(Xt([])),i=re(!0),o=re(""),a=null;Bt(()=>{l()}),ff(()=>{c()});function l(){try{a=Bn(On,t()),pu(a,I=>{const R=I.val();R?x(s,Object.entries(R).map(([P,M])=>({id:P,...M})).sort((P,M)=>(M.timestamp||0)-(P.timestamp||0)).slice(0,parseInt(r())),!0):x(s,[],!0),x(i,!1),x(o,"")},I=>{console.error("데이터 읽기 오류:",I),x(o,"데이터를 불러오는 중 오류가 발생했습니다."),x(i,!1)})}catch(I){console.error("구독 설정 오류:",I),x(o,"데이터베이스 연결에 실패했습니다."),x(i,!1)}}function c(){a&&xx(a)}function f(I){const R=new CustomEvent("post-click",{detail:{post:I},bubbles:!0,composed:!0});dispatchEvent(R)}function p(I,R){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),f(R))}function h(I){if(!I)return"";const R=typeof I=="string"?Number(I):I,P=new Date(R),L=new Date().getTime()-P.getTime(),A=Math.floor(L/6e4),C=Math.floor(L/36e5),T=Math.floor(L/864e5);return A<1?"방금 전":A<60?`${A}분 전`:C<24?`${C}시간 전`:T<7?`${T}일 전`:P.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var v={get path(){return t()},set path(I="posts"){t(I),it()},get limit(){return r()},set limit(I="10"){r(I),it()}},g=hC(),b=d(g);{var y=I=>{var R=iC();E(I,R)},k=I=>{var R=be(),P=ue(R);{var M=A=>{var C=oC(),T=d(C),O=d(T,!0);u(T),u(C),$(()=>w(O,m(o))),E(A,C)},L=A=>{var C=be(),T=ue(C);{var O=q=>{var G=aC();E(q,G)},D=q=>{var G=dC();Zt(G,21,()=>m(s),te=>te.id,(te,ne)=>{var le=uC();le.__click=()=>f(m(ne)),le.__keydown=ce=>p(ce,m(ne));var Ce=d(le),pe=d(Ce),de=d(pe),j=d(de,!0);u(de);var H=_(de,2),ie=d(H,!0);u(H),u(pe),u(Ce);var N=_(Ce,2),K=d(N);{var F=ce=>{var he=lC(),ke=d(he,!0);u(he),$(()=>w(ke,m(ne).title)),E(ce,he)};Y(K,ce=>{m(ne).title&&ce(F)})}var z=_(K,2);{var oe=ce=>{var he=cC(),ke=d(he,!0);u(he),$(()=>w(ke,m(ne).content)),E(ce,he)};Y(z,ce=>{m(ne).content&&ce(oe)})}u(N);var Z=_(N,2),Q=d(Z),J=d(Q);u(Q);var ee=_(Q,2),ge=d(ee);u(ee),u(Z),u(le),$(ce=>{Oe(le,"aria-label",`게시물: ${(m(ne).title||m(ne).content||"제목 없음")??""}`),w(j,m(ne).author||"익명"),w(ie,ce),w(J,`👍 ${(m(ne).likes||0)??""}`),w(ge,`💬 ${(m(ne).comments?.length||0)??""}`)},[()=>h(m(ne).timestamp)]),E(te,le)}),u(G),E(q,G)};Y(T,q=>{m(s).length===0?q(O):q(D,!1)},!0)}E(A,C)};Y(P,A=>{m(o)?A(M):A(L,!1)},!0)}E(I,R)};Y(b,I=>{m(i)?I(y):I(k,!1)})}return u(g),E(n,g),tt(v)}yt(["click","keydown"]);customElements.define("post-list",we(pC,{path:{},limit:{}},[],[],!0));ag();/**
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
 */const mC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var vC=Bg("<svg><!><!></svg>");function Et(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]),r=ht(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);et(e,!1);let s=at(e,"name",12,void 0),i=at(e,"color",12,"currentColor"),o=at(e,"size",12,24),a=at(e,"strokeWidth",12,2),l=at(e,"absoluteStrokeWidth",12,!1),c=at(e,"iconNode",28,()=>[]);const f=(...b)=>b.filter((y,k,I)=>!!y&&I.indexOf(y)===k).join(" ");var p={get name(){return s()},set name(b){s(b),it()},get color(){return i()},set color(b){i(b),it()},get size(){return o()},set size(b){o(b),it()},get strokeWidth(){return a()},set strokeWidth(b){a(b),it()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),it()},get iconNode(){return c()},set iconNode(b){c(b),it()}};gn();var h=vC();zu(h,(b,y)=>({...mC,...r,width:o(),height:o(),stroke:i(),"stroke-width":b,class:y}),[()=>(ks(l()),ks(a()),ks(o()),Gn(()=>l()?Number(a())*24/Number(o()):a())),()=>(ks(s()),ks(t),Gn(()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var v=d(h);Zt(v,1,c,er,(b,y)=>{var k=Zr(()=>Nv(m(y),2));let I=()=>m(k)[0],R=()=>m(k)[1];var P=be(),M=ue(P);Kg(M,I,!0,(L,A)=>{zu(L,()=>({...R()}))}),E(b,P)});var g=_(v);return pt(g,e,"default",{}),u(h),E(n,h),tt(p)}we(Et,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Ym(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];Et(n,kt({name:"book-open"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Ym,{},["default"],[],!0);function Qm(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];Et(n,kt({name:"camera"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Qm,{},["default"],[],!0);function jl(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];Et(n,kt({name:"check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(jl,{},["default"],[],!0);function yu(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];Et(n,kt({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(yu,{},["default"],[],!0);function Bl(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Et(n,kt({name:"circle-check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Bl,{},["default"],[],!0);function Vl(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];Et(n,kt({name:"circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Vl,{},["default"],[],!0);function Hl(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Et(n,kt({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Hl,{},["default"],[],!0);function Eu(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];Et(n,kt({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Eu,{},["default"],[],!0);function Jm(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];Et(n,kt({name:"house"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Jm,{},["default"],[],!0);function bi(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];Et(n,kt({name:"layout-grid"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(bi,{},["default"],[],!0);function Xm(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Et(n,kt({name:"log-in"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Xm,{},["default"],[],!0);function Zm(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];Et(n,kt({name:"log-out"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Zm,{},["default"],[],!0);function wi(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Et(n,kt({name:"menu"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(wi,{},["default"],[],!0);function Sr(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Et(n,kt({name:"message-circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Sr,{},["default"],[],!0);function ev(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];Et(n,kt({name:"phone"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(ev,{},["default"],[],!0);function tv(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];Et(n,kt({name:"send"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(tv,{},["default"],[],!0);function nv(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Et(n,kt({name:"trending-up"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(nv,{},["default"],[],!0);function ns(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Et(n,kt({name:"user"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(ns,{},["default"],[],!0);function Yi(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Et(n,kt({name:"users"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Yi,{},["default"],[],!0);function rv(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Et(n,kt({name:"x"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ue(o);pt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(rv,{},["default"],[],!0);var gC=S("<option> </option>"),_C=S('<div class="error-message svelte-1e01td3"> </div>'),bC=S('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),wC=S("<!> 인증 코드 전송",1),yC=S('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),EC=S('<div class="error-message svelte-1e01td3"> </div>'),xC=S('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),kC=S("<!> 로그인",1),CC=S('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),IC=S('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const TC={hash:"svelte-1e01td3",code:`\r
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
  }`};function SC(n,e){et(e,!0),nt(n,TC);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=re("+82"),s=re(""),i=re(""),o=re("phone"),a=re(!1),l=re(""),c=re(null),f=re(null),p=re(void 0),h=re(null);function v(){return new Promise((C,T)=>{try{if(!m(h)){const O=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(O),x(l,"reCAPTCHA 초기화에 실패했습니다."),T(O);return}if(m(c)){if(m(p)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(p)),console.log("reCAPTCHA reset completed"),C(m(p));return}catch(O){console.warn("Failed to reset reCAPTCHA:",O)}try{m(c).clear(),x(c,null),x(p,void 0)}catch(O){console.warn("Failed to clear reCAPTCHA:",O)}}x(c,new _w(ds,m(h).id,{size:"invisible",callback:O=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(p)!==void 0?window.grecaptcha.reset(m(p)):v()}}),!0),m(c).render().then(O=>{x(p,O,!0),console.log("reCAPTCHA rendered with widgetId:",O),C(O)}).catch(O=>{console.error("Failed to render reCAPTCHA:",O),x(l,"reCAPTCHA 초기화에 실패했습니다."),T(O)})}catch(O){console.error("reCAPTCHA 초기화 실패:",O),x(l,"reCAPTCHA 초기화에 실패했습니다."),T(O)}})}Bt(()=>{const C=document.createElement("div");return C.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),C.className="recaptcha-container-light-dom",C.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(C),x(h,C,!0),v(),()=>{C&&C.parentNode&&C.parentNode.removeChild(C)}});function g(C){return/^[0-9]{6,15}$/.test(C)}async function b(){if(x(l,""),!g(m(s))){x(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}x(a,!0);try{const C=`${m(r)}${m(s)}`;console.log("Sending verification code to:",C),x(f,await yw(ds,C,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),x(o,"code")}catch(C){console.error("SMS 전송 실패:",C),C.code==="auth/invalid-phone-number"?x(l,"잘못된 전화번호 형식입니다."):C.code==="auth/too-many-requests"?x(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):x(l,`SMS 전송 실패: ${C.message}`)}finally{x(a,!1)}}async function y(){if(x(l,""),m(i).length!==6){x(l,"6자리 인증 코드를 입력해주세요.");return}x(a,!0);try{const C=await m(f).confirm(m(i));console.log("Login successful:",C.user);const T=new CustomEvent("login-success",{detail:{user:C.user,phoneNumber:C.user.phoneNumber}});dispatchEvent(T),x(s,""),x(i,""),x(o,"phone")}catch(C){console.error("인증 코드 확인 실패:",C),C.code==="auth/invalid-verification-code"?x(l,"잘못된 인증 코드입니다."):C.code==="auth/code-expired"?x(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):x(l,`인증 실패: ${C.message}`);const T=new CustomEvent("login-error",{detail:{error:C.message}});dispatchEvent(T)}finally{x(a,!1)}}function k(){x(o,"phone"),x(i,""),x(l,"")}var I=IC(),R=d(I),P=d(R);{var M=C=>{var T=yC(),O=d(T),D=d(O);ev(D,{class:"icon-large"}),Xn(4),u(O);var q=_(O,2),G=_(d(q),2);Zt(G,21,()=>t,er,(F,z)=>{var oe=gC(),Z=d(oe);u(oe);var Q={};$(()=>{w(Z,`${m(z).flag??""} ${m(z).name??""} (${m(z).code??""})`),Q!==(Q=m(z).code)&&(oe.value=(oe.__value=m(z).code)??"")}),E(F,oe)}),u(G),u(q);var te=_(q,2),ne=_(d(te),2),le=d(ne),Ce=d(le,!0);u(le);var pe=_(le,2);zs(pe),u(ne),Xn(2),u(te);var de=_(te,2);{var j=F=>{var z=_C(),oe=d(z,!0);u(z),$(()=>w(oe,m(l))),E(F,z)};Y(de,F=>{m(l)&&F(j)})}var H=_(de,2);H.__click=b;var ie=d(H);{var N=F=>{var z=bC();Xn(),E(F,z)},K=F=>{var z=wC(),oe=ue(z);tv(oe,{class:"btn-icon"}),Xn(),E(F,z)};Y(ie,F=>{m(a)?F(N):F(K,!1)})}u(H),u(T),$(()=>{G.disabled=m(a),w(Ce,m(r)),pe.disabled=m(a),H.disabled=m(a)||!m(s)}),hc(G,()=>m(r),F=>x(r,F)),Fs("keypress",pe,F=>{F.key==="Enter"&&(F.preventDefault(),b())}),qs(pe,()=>m(s),F=>x(s,F)),E(C,T)},L=C=>{var T=be(),O=ue(T);{var D=q=>{var G=CC(),te=d(G),ne=d(te);jl(ne,{class:"icon-large"});var le=_(ne,4),Ce=d(le);Xn(2),u(le),u(te);var pe=_(te,2),de=_(d(pe),2);zs(de),Xn(2),u(pe);var j=_(pe,2);{var H=J=>{var ee=EC(),ge=d(ee,!0);u(ee),$(()=>w(ge,m(l))),E(J,ee)};Y(j,J=>{m(l)&&J(H)})}var ie=_(j,2),N=d(ie);N.__click=k;var K=_(N,2);K.__click=y;var F=d(K);{var z=J=>{var ee=xC();Xn(),E(J,ee)},oe=J=>{var ee=kC(),ge=ue(ee);jl(ge,{class:"btn-icon"}),Xn(),E(J,ee)};Y(F,J=>{m(a)?J(z):J(oe,!1)})}u(K),u(ie);var Z=_(ie,2),Q=_(d(Z));Q.__click=k,u(Z),u(G),$(()=>{w(Ce,`${m(r)??""}${m(s)??""}로 전송된`),de.disabled=m(a),N.disabled=m(a),K.disabled=m(a)||m(i).length!==6}),Fs("keypress",de,J=>{J.key==="Enter"&&(J.preventDefault(),y())}),qs(de,()=>m(i),J=>x(i,J)),E(q,G)};Y(O,q=>{m(o)==="code"&&q(D)},!0)}E(C,T)};Y(P,C=>{m(o)==="phone"?C(M):C(L,!1)})}var A=_(P,2);fc(A,C=>x(h,C),()=>m(h)),u(R),u(I),E(n,I),tt()}yt(["click"]);customElements.define("phone-login",we(SC,{},[],[],!0));const Na=Zs(null),AC=Zs(!0);np(ds,n=>{Na.set(n),AC.set(!1)});async function RC(){try{return await J1(ds),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}class Yr{static#t=null;#e=re(!0);get loading(){return m(this.#e)}set loading(e){x(this.#e,e,!0)}#r=re(!1);get isAuthenticated(){return m(this.#r)}set isAuthenticated(e){x(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=re(null);get data(){return m(this.#s)}set data(e){x(this.#s,e,!0)}#l=re(null);get error(){return m(this.#l)}set error(e){x(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Yr.#t||(Yr.#t=new Yr),Yr.#t}#a(){try{if(!ds)throw new Error("Auth instance not available");this.#i=np(ds,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const t=Bn(On,`users/${e.uid}`);this.#n=pu(t,r=>{this.data=r.val()},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),(e.photoUrl!==void 0||e.photoUrl!==void 0)&&(t.photoUrl=e.photoUrl),Object.keys(t).length>0&&await K1(this.#o,t);const r={...e};r.photoUrl!==void 0&&(r.photoUrl===void 0&&(r.photoUrl=r.photoUrl),delete r.photoUrl);const s=Bn(On,`users/${this.uid}`);await Am(s,r)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),Yr.#t=null}}const Ae=Yr.getInstance(),PC="GitHub",NC={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:PC,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like."},LC={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다."},OC="GitHub",DC={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:OC,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。"},$C="GitHub",MC={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:$C,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。"},ol={en:NC,ko:LC,ja:DC,zh:MC};function Wl(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function sv(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=Wl(e);if(t!=="en")return t}return"en"}function UC(n){let e=Wl(n)||sv();function t(i){e=Wl(i)}function r(){return e}function s(i,o={}){return((ol[e]??ol.en)[i]??ol.en[i]??i).replace(/\{(\w+)\}/g,(c,f)=>o[f]??"")}return{t:s,setLocale:t,getLocale:r}}const xu="sns-web-locale",iv=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function FC(){if(typeof localStorage>"u")return null;const n=localStorage.getItem(xu);if(!n)return null;const e=iv.find(t=>t.code===n);return e?e.code:null}const ov=FC()??sv(),sa=UC(ov);typeof localStorage<"u"&&localStorage.setItem(xu,sa.getLocale());const ku=Zs(ov);function zC(n){sa.setLocale(n);const e=sa.getLocale();ku.set(e),typeof localStorage<"u"&&localStorage.setItem(xu,e)}const $t=r_(ku,n=>(e,t={})=>sa.t(e,t)),av=Zs("");function _n(n){av.set(n)}var qC=S('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),jC=S('<img alt="프로필" class="avatar-image svelte-38psow"/>'),BC=S('<div class="avatar-fallback svelte-38psow"> </div>'),VC=S('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),HC=S('<img class="avatar-image svelte-38psow"/>'),WC=S('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),GC=S('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),KC=S('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),YC=S('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const QC={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function JC(n,e){et(e,!0),nt(n,QC);const t=()=>ot(av,"$pageTitle",i),r=()=>ot(Na,"$user",i),s=()=>ot($t,"$t",i),[i,o]=At();let a=re(!1);async function l(){if((await RC()).success){const L=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(L)}x(a,!1)}function c(){return Ae.data?.displayName?Ae.data.displayName.charAt(0).toUpperCase():Ae.email?Ae.email.charAt(0).toUpperCase():"U"}function f(){x(a,!m(a))}function p(M){const L=document.querySelector(".dropdown-menu"),A=document.querySelector(".dropdown-trigger");L&&!L.contains(M.target)&&!A?.contains(M.target)&&x(a,!1)}Bt(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}));var h=YC(),v=d(h),g=d(v),b=_(d(g),2);{var y=M=>{var L=qC(),A=d(L),C=d(A,!0);u(A),u(L),$(()=>w(C,t())),E(M,L)};Y(b,M=>{t()&&M(y)})}u(g);var k=_(g,2),I=d(k);{var R=M=>{var L=GC(),A=ue(L),C=d(A),T=d(C);bi(T,{size:16});var O=_(T,2),D=d(O,!0);u(O),u(C);var q=_(C,2),G=d(q);Sr(G,{size:16});var te=_(G,2),ne=d(te,!0);u(te),u(q);var le=_(q,2),Ce=d(le);Yi(Ce,{size:16});var pe=_(Ce,2),de=d(pe,!0);u(pe),u(le);var j=_(le,2),H=d(j);H.__click=f;var ie=d(H),N=d(ie);{var K=me=>{var ae=jC();$(()=>Oe(ae,"src",Ae.data.photoUrl)),E(me,ae)},F=me=>{var ae=BC(),$e=d(ae,!0);u(ae),$(ze=>w($e,ze),[c]),E(me,ae)};Y(N,me=>{Ae.data?.photoUrl?me(K):me(F,!1)})}u(ie);var z=_(ie,2),oe=d(z,!0);u(z),u(H);var Z=_(H,2);{var Q=me=>{var ae=VC(),$e=d(ae),ze=d($e,!0);u($e);var Xe=_($e,4),rt=d(Xe);ns(rt,{size:16});var gt=_(rt,2),_t=d(gt,!0);u(gt),u(Xe);var We=_(Xe,4);We.__click=l;var ct=d(We);Zm(ct,{size:16});var Rt=_(ct,2),Pt=d(Rt,!0);u(Rt),u(We),u(ae),$((Ge,B,W)=>{w(ze,Ge),w(_t,B),w(Pt,W)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),E(me,ae)};Y(Z,me=>{m(a)&&me(Q)})}u(j);var J=_(j,2),ee=d(J);wi(ee,{size:24}),u(J),u(A);var ge=_(A,2),ce=d(ge),he=d(ce);bi(he,{size:20}),u(ce);var ke=_(ce,2),He=d(ke);Yi(He,{size:20}),u(ke);var Le=_(ke,2),se=d(Le);Sr(se,{size:20}),u(Le);var fe=_(Le,2),ye=d(fe),xe=d(ye);{var De=me=>{var ae=HC();$($e=>{Oe(ae,"src",Ae.data.photoUrl),Oe(ae,"alt",$e)},[()=>s()("프로필")]),E(me,ae)},Fe=me=>{var ae=WC(),$e=d(ae,!0);u(ae),$(ze=>w($e,ze),[c]),E(me,ae)};Y(xe,me=>{Ae.data?.photoUrl?me(De):me(Fe,!1)})}u(ye),u(fe);var qe=_(fe,2),Te=d(qe);wi(Te,{size:24}),u(qe),u(ge),$((me,ae,$e,ze,Xe,rt,gt,_t,We)=>{w(D,me),w(ne,ae),w(de,$e),w(oe,Ae.data?.displayName||Ae.email),Oe(J,"title",ze),Oe(ce,"title",Xe),Oe(ke,"title",rt),Oe(Le,"title",gt),Oe(fe,"title",_t),Oe(qe,"title",We)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),E(M,L)},P=M=>{var L=KC(),A=ue(L),C=d(A),T=d(C);bi(T,{size:16});var O=_(T,2),D=d(O,!0);u(O),u(C);var q=_(C,2),G=d(q);Sr(G,{size:16});var te=_(G,2),ne=d(te,!0);u(te),u(q);var le=_(q,2),Ce=d(le,!0);u(le);var pe=_(le,2),de=d(pe);wi(de,{size:20}),u(pe),u(A);var j=_(A,2),H=d(j),ie=d(H);bi(ie,{size:20}),u(H);var N=_(H,2),K=d(N);Sr(K,{size:20}),u(N);var F=_(N,2),z=d(F);ns(z,{size:20}),u(F);var oe=_(F,2),Z=d(oe);wi(Z,{size:24}),u(oe),u(j),$((Q,J,ee,ge,ce,he,ke,He)=>{w(D,Q),w(ne,J),w(Ce,ee),Oe(pe,"title",ge),Oe(H,"title",ce),Oe(N,"title",he),Oe(F,"title",ke),Oe(oe,"title",He)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),E(M,L)};Y(I,M=>{r()?M(R):M(P,!1)})}u(k),u(v),u(h),E(n,h),tt(),o()}yt(["click"]);customElements.define("sns-topbar",we(JC,{},[],[],!0));var XC=S('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),ZC=S('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),eI=S("<option> </option>"),tI=S('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const nI={hash:"svelte-najsij",code:`
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}

  /* 사이드바 콘텐츠 */.sidebar-content.svelte-najsij {position:sticky;top:5rem;}

  /* 섹션 제목 */.section-title.svelte-najsij {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}

  /* 섹션 부제목 */.section-subtitle.svelte-najsij {font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;color:#6b7280;}

  /* 메뉴 */.menu.svelte-najsij {display:flex;flex-direction:column;gap:0.5rem;}

  /* 메뉴 아이템 */.menu-item.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;cursor:pointer;}.menu-item.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 작은 메뉴 아이템 */.menu-item-small.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;font-size:0.875rem;font-weight:500;cursor:pointer;}.menu-item-small.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 외부 링크 아이콘 */

  /* 아이콘 */.icon.svelte-najsij {flex-shrink:0;}

  /* 구분선 */.divider.svelte-najsij {height:1px;background-color:#e5e7eb;margin:1.5rem 0;}

  /* 섹션 */.section.svelte-najsij {margin-bottom:1.5rem;}

  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-compact.svelte-najsij {display:flex;align-items:center;gap:0.75rem;}.language-label.svelte-najsij {font-size:0.85rem;font-weight:600;color:#374151;white-space:nowrap;}.language-select.svelte-najsij {flex:1;padding:0.45rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#111827;font-size:0.85rem;font-weight:500;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 0.75rem center;background-size:12px 8px;cursor:pointer;}.language-select.svelte-najsij:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.15);}

  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}

  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}
  }`};function rI(n,e){et(e,!1),nt(n,nI);const t=()=>ot($t,"$t",i),r=()=>ot(Na,"$user",i),s=()=>ot(ku,"$locale",i),[i,o]=At(),a=iv;gn();var l=tI(),c=d(l),f=d(c),p=d(f,!0);u(f);var h=_(f,2),v=d(h),g=d(v);Jm(g,{size:20});var b=_(g,2),y=d(b,!0);u(b),u(v);var k=_(v,2),I=d(k);Sr(I,{size:20});var R=_(I,2),P=d(R,!0);u(R),u(k);var M=_(k,2),L=d(M);Yi(L,{size:20});var A=_(L,2),C=d(A,!0);u(A),u(M);var T=_(M,2),O=d(T);ns(O,{size:20});var D=_(O,2),q=d(D,!0);u(D),u(T);var G=_(T,2),te=d(G);Eu(te,{size:20});var ne=_(te,2),le=d(ne,!0);u(ne),u(G),u(h);var Ce=_(h,4),pe=d(Ce),de=d(pe,!0);u(pe);var j=_(pe,2),H=d(j);{var ie=B=>{var W=XC(),V=d(W);ns(V,{size:16});var Ee=_(V,2),Se=d(Ee,!0);u(Ee),u(W),$(Be=>w(Se,Be),[()=>t()("회원정보수정")]),E(B,W)},N=B=>{var W=ZC(),V=ue(W),Ee=d(V);Xm(Ee,{size:16});var Se=_(Ee,2),Be=d(Se,!0);u(Se),u(V);var Ze=_(V,2),bt=d(Ze);ns(bt,{size:16});var Nt=_(bt,2),ln=d(Nt,!0);u(Nt),u(Ze),$((Vt,Ht)=>{w(Be,Vt),w(ln,Ht)},[()=>t()("로그인"),()=>t()("회원가입")]),E(B,W)};Y(H,B=>{r()?B(ie):B(N,!1)})}u(j),u(Ce);var K=_(Ce,4),F=d(K),z=d(F);Yi(z,{size:16});var oe=_(z,2),Z=d(oe,!0);u(oe),u(F);var Q=_(F,2),J=_(d(Q),2),ee=d(J,!0);u(J);var ge=_(J,2);Hl(ge,{size:12,class:"external-icon"}),u(Q);var ce=_(Q,2),he=d(ce);Sr(he,{size:16});var ke=_(he,2),He=d(ke,!0);u(ke);var Le=_(ke,2);Hl(Le,{size:12,class:"external-icon"}),u(ce);var se=_(ce,2),fe=d(se);Ym(fe,{size:16});var ye=_(fe,2),xe=d(ye,!0);u(ye),u(se),u(K);var De=_(K,2),Fe=d(De),qe=d(Fe,!0);u(Fe);var Te=_(Fe,2),me=d(Te),ae=_(me,2);Zt(ae,5,()=>a,er,(B,W)=>{var V=eI(),Ee=d(V,!0);u(V);var Se={};$(()=>{w(Ee,m(W).label),Se!==(Se=m(W).code)&&(V.value=(V.__value=m(W).code)??"")}),E(B,V)}),u(ae);var $e;dc(ae),u(Te),u(De);var ze=_(De,2),Xe=d(ze),rt=d(Xe),gt=d(rt,!0);u(rt);var _t=_(rt,2),We=d(_t,!0);u(_t),u(Xe),u(ze);var ct=_(ze,2),Rt=d(ct),Pt=d(Rt,!0),Ge=_(Pt,2);u(Rt),u(ct),u(c),u(l),$((B,W,V,Ee,Se,Be,Ze,bt,Nt,ln,Vt,Ht,Mt,cn,un,wt,Ut)=>{w(p,B),w(y,W),w(P,V),w(C,Ee),w(q,Se),w(le,Be),w(de,Ze),w(Z,bt),w(ee,Nt),w(He,ln),w(xe,Vt),w(qe,Ht),Oe(me,"aria-label",Mt),$e!==($e=s())&&(ae.value=(ae.__value=s())??"",Fi(ae,s())),w(gt,cn),w(We,un),w(Pt,wt),w(Ge,` ${Ut??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),Fs("change",ae,B=>zC(B.currentTarget.value)),E(n,l),tt(),o()}customElements.define("sns-left-sidebar",we(rI,{},[],[],!0));var sI=S('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const iI={hash:"svelte-3epon2",code:`\r
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
  }`};function oI(n,e){et(e,!0),nt(n,iI);const t=()=>ot($t,"$t",r),[r,s]=At();let i=re(Xt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=sI(),a=d(o),l=d(a),c=d(l,!0);u(l);var f=_(l,2),p=d(f),h=d(p),v=d(h);ns(v,{size:20}),u(h);var g=_(h,2),b=d(g),y=d(b,!0);u(b);var k=_(b,2),I=d(k,!0);u(k),u(g),u(p);var R=_(p,2),P=d(R),M=d(P);nv(M,{size:20}),u(P);var L=_(P,2),A=d(L),C=d(A,!0);u(A);var T=_(A,2),O=d(T,!0);u(T),u(L),u(R);var D=_(R,2),q=d(D),G=d(q);Eu(G,{size:20}),u(q);var te=_(q,2),ne=d(te),le=d(ne,!0);u(ne);var Ce=_(ne,2),pe=d(Ce,!0);u(Ce);var de=_(Ce,2),j=d(de,!0);u(de),u(te),u(D);var H=_(D,2),ie=d(H),N=d(ie);Sr(N,{size:20}),u(ie);var K=_(ie,2),F=d(K),z=d(F,!0);u(F);var oe=_(F,2),Z=d(oe,!0);u(oe),u(K),u(H),u(f);var Q=_(f,2),J=d(Q,!0);u(Q),u(a),u(o),$((ee,ge,ce,he,ke,He,Le)=>{w(c,ee),w(y,ge),w(I,m(i).totalUsers),w(C,ce),w(O,m(i).totalScore),w(le,he),w(pe,m(i).totalPosts),w(j,ke),w(z,He),w(Z,m(i).totalMessages),w(J,Le)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),E(n,o),tt(),s()}customElements.define("sns-right-sidebar",we(oI,{},[],[],!0));var aI=S('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const lI={hash:"svelte-um1xbq",code:`\r
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
  }`};function cI(n,e){nt(n,lI);var t=aI(),r=d(t),s=_(r,2),i=d(s);En(i,1,"left-sidebar svelte-um1xbq");var o=_(i,2),a=d(o);pt(a,e,"default",{}),u(o);var l=_(o,2);En(l,1,"right-sidebar svelte-um1xbq"),u(s),u(t),E(n,t)}customElements.define("sns-layout",we(cI,{},["default"],[],!0));var uI=S('<div class="icon-container svelte-m3h71q"> </div>'),dI=S('<p class="hint-box svelte-m3h71q"> </p>'),hI=S('<p class="gpl-box svelte-m3h71q"> </p>'),fI=S('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),pI=S('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),mI=S('<div class="accordion svelte-m3h71q"></div>');const vI={hash:"svelte-m3h71q",code:`\r
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
  }`};function gI(n,e){et(e,!0),nt(n,vI);let t=at(e,"items",7,"[]"),r=at(e,"type",7,"single"),s=at(e,"collapsible",7,!0),i=Zr(()=>{try{const h=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(h)?h:[]}catch(h){return console.error("Failed to parse accordion items:",h),[]}}),o=Zr(()=>()=>{const h=s();return typeof h=="boolean"?h:typeof h=="string"?h!=="false":!0}),a=re(Xt(new Set));function l(h){const v=new Set(m(a));r()==="single"?v.has(h)?m(o)&&v.delete(h):(v.clear(),v.add(h)):v.has(h)?v.delete(h):v.add(h),x(a,v,!0)}function c(h){return m(a).has(h)}var f={get items(){return t()},set items(h="[]"){t(h),it()},get type(){return r()},set type(h="single"){r(h),it()},get collapsible(){return s()},set collapsible(h=!0){s(h),it()}},p=mI();return Zt(p,21,()=>m(i),er,(h,v,g)=>{var b=pI(),y=d(b);y.__click=()=>l(g);var k=d(y),I=d(k);{var R=D=>{var q=uI(),G=d(q,!0);u(q),$(()=>w(G,m(v).icon)),E(D,q)};Y(I,D=>{m(v).icon&&D(R)})}var P=_(I,2),M=d(P,!0);u(P),u(k);var L=_(k,2);let A;var C=d(L);yu(C,{size:20}),u(L),u(y);var T=_(y,2);{var O=D=>{var q=fI(),G=d(q),te=d(G,!0);u(G);var ne=_(G,2);{var le=de=>{var j=dI(),H=d(j,!0);u(j),$(()=>w(H,m(v).hint)),E(de,j)};Y(ne,de=>{m(v).hint&&de(le)})}var Ce=_(ne,2);{var pe=de=>{var j=hI(),H=d(j,!0);u(j),$(()=>w(H,m(v).gpl)),E(de,j)};Y(Ce,de=>{m(v).gpl&&de(pe)})}u(q),$(()=>w(te,m(v).content)),E(D,q)};Y(T,D=>{c(g)&&D(O)})}u(b),$((D,q)=>{Oe(y,"aria-expanded",D),w(M,m(v).title),A=En(L,1,"chevron svelte-m3h71q",null,A,q)},[()=>c(g),()=>({"rotate-180":c(g)})]),E(h,b)}),u(p),E(n,p),tt(f)}yt(["click"]);customElements.define("sns-accordion",we(gI,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var _I=S('<div class="gpl-badge svelte-1ubq0t6"> </div>'),bI=S('<div class="hint svelte-1ubq0t6"> </div>'),wI=S('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),yI=S('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),EI=S('<div class="todo-description svelte-1ubq0t6"> </div>'),xI=S('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),kI=S('<div class="todo-subitems svelte-1ubq0t6"></div>'),CI=S('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),II=S('<span class="badge svelte-1ubq0t6"> </span>'),TI=S('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const SI={hash:"svelte-1ubq0t6",code:`\r
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
  }`};function lv(n,e){et(e,!0),nt(n,SI);const t=()=>ot($t,"$t",r),[r,s]=At();let i=re(null);function o(W){x(i,m(i)===W?null:W,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var f=TI(),p=d(f),h=d(p),v=d(h);u(h),u(p);var g=_(p,2),b=d(g),y=d(b,!0);u(b);var k=_(b,2),I=d(k),R=_(I),P=d(R,!0);u(R);var M=_(R);u(k),u(g);var L=_(g,2),A=d(L),C=d(A,!0);u(A);var T=_(A,2),O=d(T),D=_(d(O),2),q=d(D,!0);u(D);var G=_(D,2),te=d(G,!0);u(G),u(O);var ne=_(O,2),le=_(d(ne),2),Ce=d(le,!0);u(le);var pe=_(le,2),de=d(pe,!0);u(pe),u(ne);var j=_(ne,2),H=_(d(j),2),ie=d(H,!0);u(H);var N=_(H,2),K=d(N,!0);u(N),u(j);var F=_(j,2),z=_(d(F),2),oe=d(z,!0);u(z);var Z=_(z,2),Q=d(Z,!0);u(Z),u(F),u(T),u(L);var J=_(L,2),ee=d(J),ge=d(ee,!0);u(ee);var ce=_(ee,2);Zt(ce,21,()=>a,er,(W,V)=>{var Ee=yI(),Se=d(Ee);Se.__click=()=>o(m(V).id);var Be=d(Se),Ze=d(Be,!0);u(Be);var bt=_(Be,2);let Nt;var ln=d(bt);yu(ln,{size:20}),u(bt),u(Se);var Vt=_(Se,2);{var Ht=Mt=>{var cn=wI(),un=d(cn),wt=d(un,!0);u(un);var Ut=_(un,2);{var bn=Ct=>{var Lt=_I(),Rn=d(Lt,!0);u(Lt),$(wn=>w(Rn,wn),[()=>t()("home.aiTruth.item3.gpl")]),E(Ct,Lt)};Y(Ut,Ct=>{m(V).showGpl&&Ct(bn)})}var st=_(Ut,2);{var Yt=Ct=>{var Lt=bI(),Rn=d(Lt,!0);u(Lt),$(wn=>w(Rn,wn),[()=>t()(m(V).hintKey)]),E(Ct,Lt)};Y(st,Ct=>{m(V).hintKey&&Ct(Yt)})}u(cn),$(Ct=>w(wt,Ct),[()=>t()(m(V).contentKey)]),E(Mt,cn)};Y(Vt,Mt=>{m(i)===m(V).id&&Mt(Ht)})}u(Ee),$(Mt=>{Oe(Se,"aria-expanded",m(i)===m(V).id),w(Ze,Mt),Nt=En(bt,1,"accordion-icon svelte-1ubq0t6",null,Nt,{open:m(i)===m(V).id})},[()=>t()(m(V).titleKey)]),E(W,Ee)}),u(ce),u(J);var he=_(J,2),ke=d(he),He=d(ke,!0);u(ke);var Le=_(ke,2);Zt(Le,21,()=>l,er,(W,V)=>{var Ee=CI(),Se=d(Ee),Be=d(Se);let Ze;var bt=d(Be);{var Nt=st=>{Bl(st,{size:20})},ln=st=>{Vl(st,{size:20})};Y(bt,st=>{m(V).completed?st(Nt):st(ln,!1)})}u(Be);var Vt=_(Be,2),Ht=d(Vt);let Mt;var cn=d(Ht,!0);u(Ht);var un=_(Ht,2);{var wt=st=>{var Yt=EI(),Ct=d(Yt,!0);u(Yt),$(Lt=>w(Ct,Lt),[()=>t()(m(V).descriptionKey)]),E(st,Yt)};Y(un,st=>{m(V).descriptionKey&&st(wt)})}u(Vt),u(Se);var Ut=_(Se,2);{var bn=st=>{var Yt=kI();Zt(Yt,21,()=>m(V).subitems,er,(Ct,Lt)=>{var Rn=xI(),wn=d(Rn);let bs;var si=d(wn);{var La=br=>{Bl(br,{size:16})},Iv=br=>{Vl(br,{size:16})};Y(si,br=>{m(Lt).completed?br(La):br(Iv,!1)})}u(wn);var Oa=_(wn,2);let Tu;var Tv=d(Oa,!0);u(Oa),u(Rn),$(br=>{bs=En(wn,1,"todo-subicon svelte-1ubq0t6",null,bs,{completed:m(Lt).completed}),Tu=En(Oa,1,"todo-subtext svelte-1ubq0t6",null,Tu,{completed:m(Lt).completed}),w(Tv,br)},[()=>t()(m(Lt).key)]),E(Ct,Rn)}),u(Yt),E(st,Yt)};Y(Ut,st=>{m(V).subitems.length>0&&st(bn)})}u(Ee),$(st=>{Ze=En(Be,1,"todo-icon svelte-1ubq0t6",null,Ze,{completed:m(V).completed}),Mt=En(Ht,1,"todo-label svelte-1ubq0t6",null,Mt,{completed:m(V).completed}),w(cn,st)},[()=>t()(m(V).labelKey)]),E(W,Ee)}),u(Le),u(he);var se=_(he,2),fe=d(se),ye=d(fe,!0);u(fe);var xe=_(fe,2),De=d(xe),Fe=d(De),qe=d(Fe,!0);u(Fe);var Te=_(Fe,1,!0);u(De);var me=_(De,2);Zt(me,21,()=>c,er,(W,V)=>{var Ee=II(),Se=d(Ee,!0);u(Ee),$(Be=>w(Se,Be),[()=>t()(m(V))]),E(W,Ee)}),u(me),u(xe),u(se);var ae=_(se,2),$e=d(ae),ze=d($e,!0);u($e);var Xe=_($e,2),rt=d(Xe),gt=d(rt,!0);u(rt);var _t=_(rt,2),We=d(_t),ct=_(We),Rt=d(ct,!0);u(ct);var Pt=_(ct,1,!0);u(_t);var Ge=_(_t,2),B=d(Ge,!0);u(Ge),u(Xe),u(ae),u(f),$((W,V,Ee,Se,Be,Ze,bt,Nt,ln,Vt,Ht,Mt,cn,un,wt,Ut,bn,st,Yt,Ct,Lt,Rn,wn,bs,si)=>{w(v,`✨ ${W??""}`),w(y,V),w(I,`${Ee??""} `),w(P,Se),w(M,` ${Be??""}`),w(C,Ze),w(q,bt),w(te,Nt),w(Ce,ln),w(de,Vt),w(ie,Ht),w(K,Mt),w(oe,cn),w(Q,un),w(ge,wt),w(He,Ut),w(ye,bn),w(qe,st),w(Te,Yt),w(ze,Ct),w(gt,Lt),w(We,`${Rn??""} `),w(Rt,wn),w(Pt,bs),w(B,si)},[()=>t()("home.vibeBanner"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.title"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),E(n,f),tt(),s()}yt(["click"]);we(lv,{},[],[],!0);var AI=S('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),RI=S('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),PI=S('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const NI={hash:"svelte-1mz53xx",code:`\r
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
  }`};function cv(n,e){et(e,!1),nt(n,NI);const t=()=>ot($t,"$t",s),r=()=>ot(Na,"$user",s),[s,i]=At();function o(v){console.log("Login successful:",v.detail),alert(t()("로그인성공알림",{phone:v.detail.phoneNumber})),window.location.href="/"}function a(v){console.error("Login error:",v.detail),alert(t()("로그인실패",{error:v.detail.error}))}gn();var l=PI(),c=d(l),f=d(c);{var p=v=>{var g=AI(),b=d(g),y=d(b,!0);u(b);var k=_(b,2),I=d(k,!0);u(k);var R=_(k,2);u(g),$((P,M)=>{w(y,P),w(I,M)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),Fs("login-success",R,o),Fs("login-error",R,a),E(v,g)},h=v=>{var g=RI(),b=d(g),y=d(b,!0);u(b);var k=_(b,2),I=d(k,!0);u(k);var R=_(k,2),P=d(R,!0);u(R),u(g),$((M,L,A)=>{w(y,M),w(I,L),w(P,A)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:r().phoneNumber}),()=>t()("홈으로이동")]),E(v,g)};Y(f,v=>{r()?v(h,!1):v(p)})}u(c),u(l),E(n,l),tt(),i()}we(cv,{},[],[],!0);var LI=S('<button class="menu-item svelte-163o8b2"> </button>'),OI=S('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const DI={hash:"svelte-163o8b2",code:`\r
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
  }`};function uv(n,e){et(e,!0),nt(n,DI);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("메뉴"))});function i(h){window.history.pushState({},"",h),window.dispatchEvent(new PopStateEvent("popstate"))}let o=Zr(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var a=OI(),l=d(a),c=d(l),f=d(c,!0);u(c);var p=_(c,2);Zt(p,21,()=>m(o),h=>h.path,(h,v)=>{var g=LI();g.__click=()=>i(m(v).path);var b=d(g,!0);u(g),$(()=>w(b,m(v).label)),E(h,g)}),u(p),u(l),u(a),$(h=>w(f,h),[()=>t()("페이지선택")]),E(n,a),tt(),s()}yt(["click"]);we(uv,{},[],[],!0);var $I=S('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),MI=S('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),UI=S('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),FI=S('<p class="upload-status svelte-17u94r3"> </p>'),zI=S('<div class="message-box success-message svelte-17u94r3"> </div>'),qI=S('<div class="message-box error-message svelte-17u94r3"> </div>'),jI=S('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const BI={hash:"svelte-17u94r3",code:`
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
  }`};function dv(n,e){et(e,!0),nt(n,BI);const t=()=>ot($t,"$t",r),[r,s]=At();let i=re(Xt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=re(null),a=re(null),l=re(!1),c=re(!1),f=re(null),p=re(null),h=null,v=null;function g(B){x(f,B,!0),h&&clearTimeout(h),h=setTimeout(()=>{x(f,null),h=null},3e3)}function b(B){x(p,B,!0),v&&clearTimeout(v),v=setTimeout(()=>{x(p,null),v=null},5e3)}ff(()=>{h&&clearTimeout(h),v&&clearTimeout(v)}),Bt(()=>{_n(t()("프로필수정"))}),Us(()=>{if(Ae.data){m(i).displayName=Ae.data.displayName||"",m(i).gender=Ae.data.gender||"",m(i).dateOfBirth=Ae.data.dateOfBirth||"";const B=Ae.data.photoUrl??Ae.data.photoURL??"";m(i).photoUrl=B,x(o,B||null,!0)}});function y(){m(c)||m(a)?.click()}async function k(B){const V=B.currentTarget?.files?.[0];if(!V)return;if(m(c)){b(t()("사진작업진행중"));return}if(!Ae.isAuthenticated||!Ae.uid){b(t()("로그인필요"));return}if(!V.type.startsWith("image/")){b(t()("이미지파일만가능"));return}if(V.size>5*1024*1024){b(t()("파일크기5MB제한"));return}const Ee=m(o),Se=m(i).photoUrl,Be=new FileReader;Be.onload=Ze=>{const bt=Ze.target?.result;typeof bt=="string"&&x(o,bt,!0)},Be.readAsDataURL(V);try{await R(V)}catch{x(o,Ee,!0),m(i).photoUrl=Se,m(a)&&(m(a).value="")}}async function I(){if(m(c))return;if(!Ae.isAuthenticated||!Ae.uid){b(t()("로그인필요"));return}const B=m(o),W=m(i).photoUrl;x(o,null),m(i).photoUrl="",m(a)&&(m(a).value="");try{x(c,!0),await Ae.updateProfile({photoUrl:null}),g(t()("프로필사진제거완료"))}catch(V){console.error("프로필 사진 제거 오류:",V),b(t()("사진제거실패",{error:V.message||t()("알수없는오류")})),x(o,B,!0),m(i).photoUrl=W}finally{x(c,!1)}}async function R(B,{showSuccess:W=!0}={}){if(!Ae.isAuthenticated||!Ae.uid)throw b(t()("로그인필요")),new Error("User is not authenticated");try{x(c,!0);const V=B.name.split(".").pop()?.toLowerCase()||"jpg",Ee=`profile_${Ae.uid}_${Date.now()}.${V}`,Se=Zk(sC,`users/${Ae.uid}/profile/${Ee}`),Be=await Jk(Se,B),Ze=await Xk(Be.ref);return m(i).photoUrl=Ze,x(o,Ze,!0),await Ae.updateProfile({photoUrl:Ze}),W&&g(t()("프로필사진저장완료")),Ze}catch(V){throw console.error("프로필 사진 업로드 오류:",V),b(t()("사진저장실패",{error:V.message||t()("알수없는오류")})),V}finally{x(c,!1),m(a)&&(m(a).value="")}}async function P(B){B.preventDefault(),x(l,!0),x(p,null),x(f,null);try{let W=m(i).photoUrl;const V=m(a)?.files?.[0];if(V)try{W=await R(V,{showSuccess:!1})}catch{x(l,!1);return}const Ee={displayName:m(i).displayName,gender:m(i).gender,dateOfBirth:m(i).dateOfBirth,photoUrl:W||null};await Ae.updateProfile(Ee),g(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",Ee)}catch(W){console.error("프로필 업데이트 오류:",W),b(t()("프로필업데이트실패",{error:W.message||t()("알수없는오류")}))}finally{x(l,!1)}}function M(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var L=jI(),A=d(L),C=d(A),T=d(C),O=d(T,!0);u(T);var D=_(T,2),q=d(D);q.__change=k,fc(q,B=>x(a,B),()=>m(a));var G=_(q,2),te=d(G);te.__click=y;var ne=d(te);{var le=B=>{var W=$I();$(()=>uc(W,`background-image: url("${m(o)}")`)),E(B,W)},Ce=B=>{var W=MI(),V=_(d(W),2),Ee=d(V,!0);u(V),u(W),$(Se=>w(Ee,Se),[()=>t()("사진없음")]),E(B,W)};Y(ne,B=>{m(o)?B(le):B(Ce,!1)})}u(te);var pe=_(te,2);{var de=B=>{var W=UI();W.__click=I;var V=d(W);rv(V,{size:18,"stroke-width":3}),u(W),$(Ee=>{W.disabled=m(l)||m(c),Oe(W,"aria-label",Ee)},[()=>t()("프로필사진제거")]),E(B,W)};Y(pe,B=>{m(o)&&B(de)})}var j=_(pe,2),H=d(j);Qm(H,{size:20,"stroke-width":2}),u(j),u(G);var ie=_(G,2),N=d(ie,!0);u(ie);var K=_(ie,2);{var F=B=>{var W=FI(),V=d(W,!0);u(W),$(Ee=>w(V,Ee),[()=>t()("사진저장중")]),E(B,W)};Y(K,B=>{m(c)&&B(F)})}u(D),u(C);var z=_(C,2),oe=d(z),Z=d(oe,!0);u(oe);var Q=_(oe,2);zs(Q);var J=_(Q,2),ee=d(J,!0);u(J),u(z);var ge=_(z,2),ce=d(ge),he=d(ce,!0);u(ce);var ke=_(ce,2),He=d(ke),Le=d(He,!0);u(He),He.value=He.__value="";var se=_(He),fe=d(se,!0);u(se),se.value=se.__value="male";var ye=_(se),xe=d(ye,!0);u(ye),ye.value=ye.__value="female";var De=_(ye),Fe=d(De,!0);u(De),De.value=De.__value="other",u(ke),u(ge);var qe=_(ge,2),Te=d(qe),me=d(Te,!0);u(Te);var ae=_(Te,2);zs(ae);var $e=_(ae,2),ze=d($e,!0);u($e),u(qe);var Xe=_(qe,2);{var rt=B=>{var W=zI(),V=d(W);u(W),$(()=>w(V,`✅ ${m(f)??""}`)),E(B,W)};Y(Xe,B=>{m(f)&&B(rt)})}var gt=_(Xe,2);{var _t=B=>{var W=qI(),V=d(W);u(W),$(()=>w(V,`⚠️ ${m(p)??""}`)),E(B,W)};Y(gt,B=>{m(p)&&B(_t)})}var We=_(gt,2),ct=d(We),Rt=d(ct,!0);u(ct);var Pt=_(ct,2);Pt.__click=M;var Ge=d(Pt,!0);u(Pt),u(We),u(A),u(L),$((B,W,V,Ee,Se,Be,Ze,bt,Nt,ln,Vt,Ht,Mt,cn,un,wt)=>{w(O,B),Oe(q,"aria-label",W),te.disabled=m(l)||m(c),Oe(te,"aria-label",V),w(N,Ee),w(Z,Se),Oe(Q,"placeholder",Be),Q.disabled=m(l),w(ee,Ze),w(he,bt),ke.disabled=m(l),w(Le,Nt),w(fe,ln),w(xe,Vt),w(Fe,Ht),w(me,Mt),ae.disabled=m(l),w(ze,cn),ct.disabled=m(l)||m(c)||!Ae.isAuthenticated,w(Rt,un),Pt.disabled=m(l),w(Ge,wt)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>m(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>m(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),Fs("submit",A,P),qs(Q,()=>m(i).displayName,B=>m(i).displayName=B),hc(ke,()=>m(i).gender,B=>m(i).gender=B),qs(ae,()=>m(i).dateOfBirth,B=>m(i).dateOfBirth=B),E(n,L),tt(),s()}yt(["change","click"]);we(dv,{},[],[],!0);var VI=S('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),HI=S('<div class="loading-container svelte-a4suww"><!></div>'),WI=S('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),GI=S('<div class="error-container svelte-a4suww"><!></div>'),KI=S('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),YI=S('<div class="empty-container svelte-a4suww"><!></div>'),QI=S('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),JI=S('<div class="item-wrapper svelte-a4suww"><!></div>'),XI=S('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),ZI=S('<div class="loading-more svelte-a4suww"><!></div>'),eT=S('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),tT=S('<div class="no-more svelte-a4suww"><!></div>'),nT=S('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),rT=S('<div class="database-list-view svelte-a4suww"><!></div>');const sT={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function Cu(n,e){et(e,!0),nt(n,sT);let t=at(e,"path",7,""),r=at(e,"pageSize",7,10),s=at(e,"orderBy",7,"createdAt"),i=at(e,"threshold",7,300),o=at(e,"reverse",7,!1),a=at(e,"item",7),l=at(e,"loading",7),c=at(e,"empty",7),f=at(e,"error",7),p=at(e,"loadingMore",7),h=at(e,"noMore",7),v=re(Xt([])),g=re(!1),b=re(!0),y=re(!0),k=re(null),I=re(null),R=re(0),P=re(null),M=re(null),L=new Map,A=new Map,C=null,T=re(!1);Us(()=>(t()&&On&&G(),()=>{console.log("DatabaseListView: Cleaning up listeners"),C&&(C(),C=null),L.forEach(N=>{N()}),L.clear(),console.log("DatabaseListView: All listeners cleaned up")})),Us(()=>{if(m(M))return m(M).addEventListener("scroll",ne),window.addEventListener("scroll",le),()=>{m(M)?.removeEventListener("scroll",ne),window.removeEventListener("scroll",le)}});function O(N,K){if(N.length===0)return null;const F=N[N.length-1],z=F.data[K];return z!=null&&z!==""?(console.log(`DatabaseListView: Using cursor from '${K}':`,{value:z,key:F.key}),{value:z,key:F.key}):(console.warn(`DatabaseListView: Field '${K}' not found in last item, using key as fallback:`,F.key),{value:F.key,key:F.key})}function D(N,K){const F=`${N}`;if(L.has(F))return;const z=Bn(On,`${t()}/${N}`),oe=pu(z,Z=>{if(Z.exists()){const Q=Z.val();m(v)[K]={key:N,data:Q},x(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${N}`,Q)}},Z=>{console.error(`DatabaseListView: Error listening to item ${N}`,Z)});L.set(F,oe)}function q(){C&&(C(),C=null),console.log("DatabaseListView: Setting up child_added listener for",t()),x(T,!1);const N=Bn(On,t()),K=fi(N,hi(s()));C=Ex(K,F=>{if(!m(T))return;const z=F.key,oe=F.val();if(m(v).some(J=>J.key===z)){console.log("DatabaseListView: Child already exists, skipping:",z);return}console.log("DatabaseListView: New child added:",z,oe);const Q={key:z,data:oe};if(o())x(v,[Q,...m(v)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),D(z,0);else{const J=m(v).length;x(v,[...m(v),Q],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),D(z,J)}},F=>{console.error("DatabaseListView: Error in child_added listener",F)}),setTimeout(()=>{x(T,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}async function G(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",o(),")"),x(b,!0),x(P,null),x(v,[],!0),A.clear(),L.forEach(N=>N()),L.clear(),C&&(C(),C=null),x(T,!1),x(k,null),x(I,null),x(y,!0),x(R,0);try{const N=Bn(On,t());let K;o()?(K=fi(N,hi(s()),ah(r()+1)),console.log("DatabaseListView: Using limitToLast for reverse order")):(K=fi(N,hi(s()),oh(r()+1)),console.log("DatabaseListView: Using limitToFirst for normal order"));const F=await ih(K);if(F.exists()){const z=[],oe=F.val();if(Object.entries(oe).forEach(([Z,Q])=>{z.push({key:Z,data:Q})}),console.log(`DatabaseListView: Initial query returned ${z.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",z.map(Z=>({key:Z.key,[s()]:Z.data[s()]}))),o()&&(z.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),z.length>r()){x(y,!0),x(v,z.slice(0,r()),!0);const Z=O(m(v),s());Z?(x(k,Z.value,!0),x(I,Z.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:m(k),lastLoadedKey:m(I)})):x(y,!1)}else if(x(y,!1),x(v,z,!0),m(v).length>0){const Z=O(m(v),s());Z&&(x(k,Z.value,!0),x(I,Z.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:m(k),lastLoadedKey:m(I)}))}A.set(0,m(v)),m(v).forEach((Z,Q)=>{D(Z.key,Q)}),console.log(`DatabaseListView: Page ${m(R)} - Loaded ${m(v).length} items, hasMore: ${m(y)}`)}else console.log("DatabaseListView: No data found"),x(v,[],!0),x(y,!1)}catch(N){console.error("DatabaseListView: Load error",N),x(P,N.message,!0)}finally{x(b,!1),q()}}async function te(){if(m(g)||!m(y)){console.log("DatabaseListView: Cannot load more - loading:",m(g),"hasMore:",m(y));return}ul(R),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(R)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",m(k),"lastLoadedKey:",m(I)),x(g,!0),x(P,null);try{if(m(k)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),x(y,!1),x(g,!1);return}const N=Bn(On,t());let K;o()?(K=fi(N,hi(s()),Cx(m(k)),ah(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination")):(K=fi(N,hi(s()),Tx(m(k)),oh(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination"));const F=await ih(K);if(F.exists()){const z=[],oe=F.val();Object.entries(oe).forEach(([ee,ge])=>{z.push({key:ee,data:ge})}),console.log(`DatabaseListView: Page ${m(R)} - Query returned ${z.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(R)} - Items orderBy values:`,z.map(ee=>({key:ee.key,[s()]:ee.data[s()]}))),o()&&(z.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const Z=new Set(m(v).map(ee=>ee.key)),Q=z.filter(ee=>!Z.has(ee.key));if(console.log(`DatabaseListView: Page ${m(R)} - After filtering duplicates: ${Q.length} items`),Q.length===0){console.log("DatabaseListView: No more unique items after filtering"),x(y,!1),x(g,!1);return}if(z.length>r()){x(y,!0);const ee=Q.slice(0,r());x(v,[...m(v),...ee],!0);const ge=O(ee,s());ge?(x(k,ge.value,!0),x(I,ge.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:m(k),lastLoadedKey:m(I)})):(x(y,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(x(y,!1),x(v,[...m(v),...Q],!0),Q.length>0){const ee=O(Q,s());ee&&(x(k,ee.value,!0),x(I,ee.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:m(k),lastLoadedKey:m(I)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const J=m(v).length-(Q.length>r()?r():Q.length);m(v).slice(J).forEach((ee,ge)=>{D(ee.key,J+ge)}),console.log(`DatabaseListView: Page ${m(R)} - Loaded ${Q.length} more items, total: ${m(v).length}, hasMore: ${m(y)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),x(y,!1)}catch(N){console.error("DatabaseListView: Load more error",{name:N.name,message:N.message,code:N.code,toString:N.toString()}),x(P,N.message||N.code||"Unknown error",!0)}finally{x(g,!1)}}function ne(){if(!m(M)||m(g)||!m(y))return;const{scrollTop:N,scrollHeight:K,clientHeight:F}=m(M);K-(N+F)<i()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),te())}function le(){if(m(g)||!m(y))return;const N=window.pageYOffset||document.documentElement.scrollTop,K=document.documentElement.scrollHeight,F=window.innerHeight;K-(N+F)<i()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),te())}function Ce(){console.log("DatabaseListView: Refreshing..."),G()}var pe={refresh:Ce,get path(){return t()},set path(N=""){t(N),it()},get pageSize(){return r()},set pageSize(N=10){r(N),it()},get orderBy(){return s()},set orderBy(N="createdAt"){s(N),it()},get threshold(){return i()},set threshold(N=300){i(N),it()},get reverse(){return o()},set reverse(N=!1){o(N),it()},get item(){return a()},set item(N){a(N),it()},get loading(){return l()},set loading(N){l(N),it()},get empty(){return c()},set empty(N){c(N),it()},get error(){return f()},set error(N){f(N),it()},get loadingMore(){return p()},set loadingMore(N){p(N),it()},get noMore(){return h()},set noMore(N){h(N),it()}},de=rT(),j=d(de);{var H=N=>{var K=HI(),F=d(K);{var z=Z=>{var Q=be(),J=ue(Q);ys(J,l),E(Z,Q)},oe=Z=>{var Q=VI();E(Z,Q)};Y(F,Z=>{l()?Z(z):Z(oe,!1)})}u(K),E(N,K)},ie=N=>{var K=be(),F=ue(K);{var z=Z=>{var Q=GI(),J=d(Q);{var ee=ce=>{var he=be(),ke=ue(he);ys(ke,f,()=>m(P)),E(ce,he)},ge=ce=>{var he=WI(),ke=_(d(he),2),He=d(ke,!0);u(ke);var Le=_(ke,2);Le.__click=Ce,u(he),$(()=>w(He,m(P))),E(ce,he)};Y(J,ce=>{f()?ce(ee):ce(ge,!1)})}u(Q),E(Z,Q)},oe=Z=>{var Q=be(),J=ue(Q);{var ee=ce=>{var he=YI(),ke=d(he);{var He=se=>{var fe=be(),ye=ue(fe);ys(ye,c),E(se,fe)},Le=se=>{var fe=KI();E(se,fe)};Y(ke,se=>{c()?se(He):se(Le,!1)})}u(he),E(ce,he)},ge=ce=>{var he=nT(),ke=d(he);Zt(ke,19,()=>m(v),ye=>ye.key,(ye,xe,De)=>{var Fe=JI(),qe=d(Fe);{var Te=ae=>{var $e=be(),ze=ue($e);ys(ze,a,()=>m(xe),()=>m(De)),E(ae,$e)},me=ae=>{var $e=QI(),ze=d($e),Xe=d(ze,!0);u(ze),u($e),$(rt=>w(Xe,rt),[()=>JSON.stringify(m(xe).data,null,2)]),E(ae,$e)};Y(qe,ae=>{a()?ae(Te):ae(me,!1)})}u(Fe),$(()=>Oe(Fe,"data-key",m(xe).key)),E(ye,Fe)});var He=_(ke,2);{var Le=ye=>{var xe=ZI(),De=d(xe);{var Fe=Te=>{var me=be(),ae=ue(me);ys(ae,p),E(Te,me)},qe=Te=>{var me=XI();E(Te,me)};Y(De,Te=>{p()?Te(Fe):Te(qe,!1)})}u(xe),E(ye,xe)};Y(He,ye=>{m(g)&&ye(Le)})}var se=_(He,2);{var fe=ye=>{var xe=tT(),De=d(xe);{var Fe=Te=>{var me=be(),ae=ue(me);ys(ae,h),E(Te,me)},qe=Te=>{var me=eT();E(Te,me)};Y(De,Te=>{h()?Te(Fe):Te(qe,!1)})}u(xe),E(ye,xe)};Y(se,ye=>{!m(y)&&!m(g)&&ye(fe)})}u(he),E(ce,he)};Y(J,ce=>{m(v).length===0?ce(ee):ce(ge,!1)},!0)}E(Z,Q)};Y(F,Z=>{m(P)?Z(z):Z(oe,!1)},!0)}E(N,K)};Y(j,N=>{m(b)?N(H):N(ie,!1)})}return u(de),fc(de,N=>x(M,N),()=>m(M)),E(n,de),tt(pe)}yt(["click"]);we(Cu,{path:{},pageSize:{},orderBy:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var iT=S('<img class="svelte-r48pmi"/>'),oT=S('<div class="avatar-placeholder svelte-r48pmi"> </div>'),aT=S('<span class="badge-me svelte-r48pmi"> </span>'),lT=S('<p class="user-email svelte-r48pmi"> </p>'),cT=S('<p class="user-bio svelte-r48pmi"> </p>'),uT=S('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),dT=S('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),hT=S('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),fT=S('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),pT=S('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),mT=S('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const vT={hash:"svelte-r48pmi",code:`\r
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
  }`};function hv(n,e){et(e,!1),nt(n,vT);const t=()=>ot($t,"$t",r),[r,s]=At();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}Bt(()=>{_n(t()("사용자찾기"))});function o(a){a===Ae.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}gn(),Cu(n,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(v,g=pn)=>{var b=uT();b.__click=()=>o(g().key),b.__keydown=j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),o(g().key))};var y=d(b),k=d(y);{var I=j=>{var H=iT();$(ie=>{Oe(H,"src",g().data?.photoUrl??g().data?.photoURL),Oe(H,"alt",ie)},[()=>g().data?.displayName||t()("사용자")]),E(j,H)},R=j=>{var H=oT(),ie=d(H,!0);u(H),$(N=>w(ie,N),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),E(j,H)};Y(k,j=>{g().data?.photoUrl||g().data?.photoURL?j(I):j(R,!1)})}u(y);var P=_(y,2),M=d(P),L=d(M),A=_(L);{var C=j=>{var H=aT(),ie=d(H,!0);u(H),$(N=>w(ie,N),[()=>t()("나뱃지")]),E(j,H)};Y(A,j=>{g().key===Ae.uid&&j(C)})}u(M);var T=_(M,2),O=d(T,!0);u(T);var D=_(T,2);{var q=j=>{var H=lT(),ie=d(H,!0);u(H),$(()=>w(ie,g().data.email)),E(j,H)};Y(D,j=>{g().data?.email&&j(q)})}var G=_(D,2);{var te=j=>{var H=cT(),ie=d(H,!0);u(H),$(()=>w(ie,g().data.bio)),E(j,H)};Y(G,j=>{g().data?.bio&&j(te)})}var ne=_(G,2),le=d(ne);u(ne),u(P);var Ce=_(P,2),pe=d(Ce);pe.__click=j=>{j.stopPropagation(),o(g().key)};var de=d(pe,!0);u(pe),u(Ce),u(b),$((j,H,ie,N)=>{w(L,`${j??""} `),w(O,g().key),w(le,`${H??""} ${ie??""}`),w(de,N)},[()=>g().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(g().data?.createdAt),()=>t()("프로필보기")]),E(v,b)},loading:v=>{var g=dT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),$(k=>w(y,k),[()=>t()("사용자목록로딩")]),E(v,g)},empty:v=>{var g=hT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),$(k=>w(y,k),[()=>t()("등록된사용자없음")]),E(v,g)},error:(v,g=pn)=>{var b=fT(),y=_(d(b),2),k=d(y,!0);u(y);var I=_(y,2),R=d(I,!0);u(I),u(b),$(P=>{w(k,P),w(R,g())},[()=>t()("사용자목록로드실패")]),E(v,b)},loadingMore:v=>{var g=pT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),$(k=>w(y,k),[()=>t()("더많은사용자로딩")]),E(v,g)},noMore:v=>{var g=mT(),b=d(g),y=d(b,!0);u(b),u(g),$(k=>w(y,k),[()=>t()("모든사용자로드완료")]),E(v,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),tt(),s()}yt(["click","keydown"]);we(hv,{},[],[],!0);async function gT(n,e,t,r,s){try{const i=Date.now(),o={uid:e,title:r,content:s,author:t,category:n,createdAt:i,updatedAt:i},a=Bn(On,`posts/${n}`);return{success:!0,postId:(await Sm(a,o)).key}}catch(i){return console.error("게시글 생성 실패:",i),{success:!1,error:i.message}}}const mi=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}],Iu=Zs([]);function vi(n,e="success",t=3e3){const r=Date.now();Iu.update(s=>[...s,{id:r,message:n,type:e}]),setTimeout(()=>{fv(r)},t)}function fv(n){Iu.update(e=>e.filter(t=>t.id!==n))}var _T=S('<div class="loading-screen svelte-1r1wwfo"><p> </p></div>'),bT=S("<button> </button>"),wT=S('<span class="count svelte-1r1wwfo"> </span>'),yT=S('<button class="action-btn edit icon-only svelte-1r1wwfo">✏️</button> <button class="action-btn delete icon-only svelte-1r1wwfo">🗑️</button>',1),ET=S('<div class="post-item svelte-1r1wwfo"><div class="post-item-top svelte-1r1wwfo"><span class="post-category-pill svelte-1r1wwfo"> </span> <span class="post-number svelte-1r1wwfo"> </span></div> <h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><div class="author-chip svelte-1r1wwfo"><span class="author-avatar svelte-1r1wwfo"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1r1wwfo"> </span></div> <div class="post-actions svelte-1r1wwfo"><div class="post-actions-left svelte-1r1wwfo"><button class="action-btn svelte-1r1wwfo"> </button> <button class="action-btn svelte-1r1wwfo"> <!></button> <button class="action-btn svelte-1r1wwfo"> </button> <button class="action-btn svelte-1r1wwfo"> </button></div> <div class="post-actions-right svelte-1r1wwfo"><!></div></div></div>'),xT=S('<div class="empty-state svelte-1r1wwfo"><div class="empty-illustration svelte-1r1wwfo">🗂️</div> <h3 class="empty-title svelte-1r1wwfo"> </h3> <p class="empty-message svelte-1r1wwfo"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),kT=S('<div class="loading-state svelte-1r1wwfo"><div class="spinner svelte-1r1wwfo"></div> <p> </p></div>'),CT=S('<div class="error-state svelte-1r1wwfo"><div class="error-icon svelte-1r1wwfo">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),IT=S('<div class="loading-more svelte-1r1wwfo"><div class="spinner small svelte-1r1wwfo"></div> <p class="svelte-1r1wwfo"> </p></div>'),TT=S('<div class="no-more svelte-1r1wwfo"><p> </p></div>'),ST=S("<option> </option>"),AT=S('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <select id="category" class="form-control svelte-1r1wwfo"><option> </option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),RT=S('<div class="post-list-container svelte-1r1wwfo"><div class="page-header svelte-1r1wwfo"><div><h1 class="page-title svelte-1r1wwfo"> </h1> <p class="page-subtitle svelte-1r1wwfo"> </p></div> <div class="page-header-action svelte-1r1wwfo"><span class="category-chip svelte-1r1wwfo"> </span></div></div> <div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const PT={hash:"svelte-1r1wwfo",code:`\r
  /* 레이아웃 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:72rem;margin:0 auto;\r
    /* 여백 최소화: 상/하 1.5rem, 좌/우 1rem */padding:1.5rem 1rem 2rem;display:flex;flex-direction:column;\r
    /* 섹션 간 여백 줄임 */gap:1.25rem;}.page-header.svelte-1r1wwfo {display:flex;align-items:flex-start;justify-content:space-between;gap:1.5rem;}.page-header-action.svelte-1r1wwfo {display:flex;align-items:center;gap:0.75rem;}.page-title.svelte-1r1wwfo {margin:0;font-size:2rem;font-weight:700;color:#111827;}.page-subtitle.svelte-1r1wwfo {margin:0.5rem 0 0 0;color:#6b7280;font-size:0.95rem;max-width:36rem;}.category-chip.svelte-1r1wwfo {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.875rem;border-radius:9999px;background:linear-gradient(135deg, #dbeafe, #c7d2fe);color:#1d4ed8;font-weight:600;font-size:0.875rem;white-space:nowrap;}\r
\r
  /* 상단 도구 모음 */.toolbar.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1rem 1.5rem;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.75rem;box-shadow:0 12px 30px rgba(15, 23, 42, 0.06);}.toolbar-left.svelte-1r1wwfo {display:flex;align-items:center;gap:0.75rem;flex:1;}.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;}.category-tabs.svelte-1r1wwfo::-webkit-scrollbar {display:none;}.tab.svelte-1r1wwfo {padding:0.55rem 0.9rem;border-radius:9999px;border:1px solid transparent;background-color:transparent;color:#4b5563;font-size:0.85rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#111827;border-color:#111827;color:#ffffff;box-shadow:0 8px 18px rgba(17, 24, 39, 0.2);}\r
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.65rem 1.25rem;background:linear-gradient(135deg, #3b82f6, #2563eb);color:#ffffff;border:none;border-radius:0.75rem;font-size:0.875rem;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:0.4rem;transition:transform 0.2s ease, box-shadow 0.2s ease;flex-shrink:0;}.btn-create-post.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 12px 24px rgba(37, 99, 235, 0.25);}.btn-create-post.ghost.svelte-1r1wwfo {background:#ffffff;color:#1d4ed8;border:1px solid #bfdbfe;box-shadow:none;}.btn-create-post.ghost.svelte-1r1wwfo:hover {background:#eff6ff;}\r
\r
  /* 게시글 목록 배경 */.post-list-surface.svelte-1r1wwfo {background:transparent;\r
    /* 테두리 제거 - 각 글 카드의 보더가 있으므로 불필요 */border:none;border-radius:1rem;\r
    /* 여백 최소화 */padding:0.5rem 0 1rem 0;box-shadow:none;\r
    /* 게시글 카드 사이 여백 추가: gap 사용 */\r
    /* DatabaseListView의 내부 구조와 무관하게 reliable하게 작동 */display:flex;flex-direction:column;gap:0.75rem;}.post-item.svelte-1r1wwfo {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease, box-shadow 0.2s ease;\r
    /* 각 게시글 카드의 상하 여백을 확실히 추가 */margin:1rem 0;}.post-item.svelte-1r1wwfo:hover {transform:translateY(-2px);box-shadow:0 16px 28px rgba(17, 24, 39, 0.12);}.post-item-top.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;}.post-category-pill.svelte-1r1wwfo {display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#1d4ed8;background-color:#eff6ff;}.post-number.svelte-1r1wwfo {font-weight:700;color:#9ca3af;font-size:0.9rem;}.post-title.svelte-1r1wwfo {margin:0;font-size:1.2rem;font-weight:700;color:#111827;line-height:1.5;}.post-content.svelte-1r1wwfo {margin:0;font-size:0.925rem;color:#4b5563;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:#6b7280;}.author-chip.svelte-1r1wwfo {display:inline-flex;align-items:center;gap:0.5rem;}.author-avatar.svelte-1r1wwfo {width:2rem;height:2rem;border-radius:9999px;background:#1d4ed8;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;}.post-date.svelte-1r1wwfo {color:#9ca3af;font-variant-numeric:tabular-nums;}\r
\r
  /* 게시글 액션 버튼 영역 */.post-actions.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.5rem;\r
    /* 보더 제거하여 더 깔끔하게 */border-top:none;}.post-actions-left.svelte-1r1wwfo,\r
  .post-actions-right.svelte-1r1wwfo {display:flex;align-items:center;gap:0.25rem;flex-wrap:wrap;}.action-btn.svelte-1r1wwfo {display:inline-flex;align-items:center;gap:0.3rem;\r
    /* 더 콤팩트한 패딩 */padding:0.4rem 0.65rem;\r
    /* 보더 제거 */border:none;border-radius:0.5rem;\r
    /* 배경색 투명하게 */background-color:transparent;color:#6b7280;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.action-btn.svelte-1r1wwfo:hover {background-color:#f3f4f6;color:#111827;}.action-btn.svelte-1r1wwfo:active {transform:scale(0.95);}\r
\r
  /* 액션 버튼 내 카운트 표시 (좋아요 개수 등) */.action-btn.svelte-1r1wwfo .count:where(.svelte-1r1wwfo) {display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;height:1.25rem;padding:0 0.35rem;border-radius:9999px;background-color:#ef4444;color:#ffffff;font-size:0.7rem;font-weight:600;line-height:1;}\r
\r
  /* 아이콘만 있는 버튼 스타일 */.action-btn.icon-only.svelte-1r1wwfo {padding:0.4rem;font-size:1.1rem;}\r
\r
  /* 수정 버튼 스타일 */.action-btn.edit.svelte-1r1wwfo {color:#3b82f6;}.action-btn.edit.svelte-1r1wwfo:hover {background-color:#eff6ff;color:#1d4ed8;}\r
\r
  /* 삭제 버튼 스타일 */.action-btn.delete.svelte-1r1wwfo {color:#ef4444;}.action-btn.delete.svelte-1r1wwfo:hover {background-color:#fef2f2;color:#dc2626;}\r
\r
  /* 빈 상태 */.empty-state.svelte-1r1wwfo {padding:4rem 2rem;text-align:center;display:flex;flex-direction:column;gap:1rem;align-items:center;background:linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);border-radius:1rem;border:1px dashed #dbeafe;}.empty-illustration.svelte-1r1wwfo {font-size:3rem;}.empty-title.svelte-1r1wwfo {margin:0;font-size:1.2rem;font-weight:700;color:#0f172a;}.empty-message.svelte-1r1wwfo {margin:0 0 1rem 0;font-size:0.95rem;color:#475569;}\r
\r
  /* 로딩 / 에러 */.loading-state.svelte-1r1wwfo,\r
  .loading-more.svelte-1r1wwfo,\r
  .error-state.svelte-1r1wwfo,\r
  .no-more.svelte-1r1wwfo {padding:2rem 1rem;text-align:center;color:#6b7280;display:flex;flex-direction:column;gap:0.5rem;align-items:center;}.spinner.svelte-1r1wwfo {width:32px;height:32px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:9999px;\r
    animation: svelte-1r1wwfo-spin 0.8s linear infinite;}.spinner.small.svelte-1r1wwfo {width:20px;height:20px;border-width:2px;}\r
\r
  @keyframes svelte-1r1wwfo-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }.error-state.svelte-1r1wwfo {flex-direction:row;justify-content:center;gap:1rem;background:#fef2f2;border-radius:0.75rem;border:1px solid #fecaca;color:#b91c1c;}.error-icon.svelte-1r1wwfo {font-size:1.5rem;}\r
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
  @media (max-width: 768px) {.post-list-container.svelte-1r1wwfo {padding:2rem 1rem 3rem;}.page-header.svelte-1r1wwfo {flex-direction:column;align-items:flex-start;gap:1rem;}.category-chip.svelte-1r1wwfo {font-size:0.8rem;}.toolbar.svelte-1r1wwfo {flex-direction:column;align-items:stretch;gap:1rem;}.toolbar-left.svelte-1r1wwfo {width:100%;}.btn-create-post.svelte-1r1wwfo {justify-content:center;width:100%;}.post-item.svelte-1r1wwfo {padding:1.25rem 1.35rem;}\r
\r
    /* 모바일에서 액션 버튼 크기 조정 */.action-btn.svelte-1r1wwfo {padding:0.35rem 0.55rem;font-size:0.75rem;}.action-btn.icon-only.svelte-1r1wwfo {padding:0.35rem;font-size:1rem;}\r
  }\r
\r
  @media (max-width: 480px) {.post-title.svelte-1r1wwfo {font-size:1.05rem;}.post-content.svelte-1r1wwfo {font-size:0.85rem;}.post-meta.svelte-1r1wwfo {flex-direction:column;align-items:flex-start;gap:0.6rem;}\r
\r
    /* 작은 화면에서 액션 버튼 영역을 세로로 배치 */.post-actions.svelte-1r1wwfo {flex-direction:column;align-items:stretch;gap:0.5rem;}.post-actions-left.svelte-1r1wwfo,\r
    .post-actions-right.svelte-1r1wwfo {justify-content:flex-start;width:100%;gap:0.25rem;}\r
  }`};function pv(n,e){et(e,!0),nt(n,PT);const t=()=>ot($t,"$t",r),[r,s]=At();let i=re(null),o=re(""),a=re(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let c=re(Xt(l.get("category")||"community")),f=re(!1),p=re(""),h=re(""),v=re(""),g=re(!1);Bt(()=>{_n(t()("게시판"));const T=ds.onAuthStateChanged(async O=>{if(O){x(i,O.uid,!0);const D=O.displayName||O.email||t()("익명");x(o,D,!0)}else x(i,null),x(o,"");x(a,!1)});return()=>T()});function b(){if(!m(i)){window.location.href="/user/login";return}x(f,!0)}function y(){x(f,!1),x(p,""),x(h,""),x(v,"")}async function k(){if(!m(p)){alert(t()("카테고리선택필요"));return}if(!m(h).trim()){alert(t()("제목입력필요"));return}if(!m(v).trim()){alert(t()("내용입력필요"));return}if(!m(i)||!m(o)){alert(t()("로그인정보확인불가"));return}x(g,!0);try{const T=await gT(m(p),m(i),m(o),m(h),m(v));if(T.success){const O=m(p);x(f,!1),x(p,""),x(h,""),x(v,""),vi(t()("게시글작성완료"),"success")}else vi(t()("게시글저장실패",{error:T.error||"Unknown error"}),"error")}catch(T){console.error("게시글 저장 오류:",T),vi(t()("게시글저장중오류"),"error")}finally{x(g,!1)}}async function I(T,O){if(!m(i)){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const D={};D[`posts/${O}/${T}/likeCount`]=Bx(1),D[`post-props/likes/${T}/${m(i)}`]=jx(),await Am(Bn(On),D),vi(t()("좋아요"),"success")}catch(D){console.error("좋아요 추가 오류:",D),vi(t()("좋아요실패"),"error")}}function R(T){x(c,T,!0),window.history.pushState({},"",`/post/list?category=${T}`)}let P=Zr(()=>mi.find(T=>T.value===m(c))??mi[0]);var M=be(),L=ue(M);{var A=T=>{var O=_T(),D=d(O),q=d(D,!0);u(D),u(O),$(G=>w(q,G),[()=>t()("로딩중")]),E(T,O)},C=T=>{var O=RT(),D=ue(O),q=d(D),G=d(q),te=d(G),ne=d(te,!0);u(te);var le=_(te,2),Ce=d(le);u(le),u(G);var pe=_(G,2),de=d(pe),j=d(de,!0);u(de),u(pe),u(q);var H=_(q,2),ie=d(H),N=d(ie);Zt(N,21,()=>mi,J=>J.value,(J,ee)=>{var ge=bT();ge.__click=()=>R(m(ee).value);var ce=d(ge,!0);u(ge),$(()=>{En(ge,1,`tab ${m(c)===m(ee).value?"active":""}`,"svelte-1r1wwfo"),w(ce,m(ee).label)}),E(J,ge)}),u(N),u(ie);var K=_(ie,2);K.__click=b;var F=d(K);u(K),u(H);var z=_(H,2),oe=d(z);{const J=(Le,se=pn,fe=pn)=>{const ye=Zr(()=>mi.find(wt=>wt.value===se().data?.category)??m(P));var xe=ET(),De=d(xe),Fe=d(De),qe=d(Fe,!0);u(Fe);var Te=_(Fe,2),me=d(Te);u(Te),u(De);var ae=_(De,2),$e=d(ae,!0);u(ae);var ze=_(ae,2),Xe=d(ze,!0);u(ze);var rt=_(ze,2),gt=d(rt),_t=d(gt),We=d(_t,!0);u(_t);var ct=_(_t,2),Rt=d(ct,!0);u(ct),u(gt);var Pt=_(gt,2),Ge=d(Pt,!0);u(Pt),u(rt);var B=_(rt,2),W=d(B),V=d(W),Ee=d(V);u(V);var Se=_(V,2);Se.__click=()=>I(se().key,m(c));var Be=d(Se),Ze=_(Be);{var bt=wt=>{var Ut=wT(),bn=d(Ut,!0);u(Ut),$(()=>w(bn,se().data.likeCount)),E(wt,Ut)};Y(Ze,wt=>{se().data.likeCount>0&&wt(bt)})}u(Se);var Nt=_(Se,2),ln=d(Nt);u(Nt);var Vt=_(Nt,2),Ht=d(Vt);u(Vt),u(W);var Mt=_(W,2),cn=d(Mt);{var un=wt=>{var Ut=yT(),bn=ue(Ut),st=_(bn,2);$((Yt,Ct)=>{Oe(bn,"title",Yt),Oe(st,"title",Ct)},[()=>t()("수정"),()=>t()("삭제")]),E(wt,Ut)};Y(cn,wt=>{m(i)===se().data.uid&&wt(un)})}u(Mt),u(B),u(xe),$((wt,Ut,bn,st,Yt,Ct,Lt,Rn,wn,bs,si,La)=>{w(qe,m(ye).label),w(me,`#${wt??""}`),w($e,se().data.title),w(Xe,se().data.content),w(We,Ut),w(Rt,bn),w(Ge,st),Oe(V,"title",Yt),w(Ee,`💬 ${Ct??""}`),Oe(Se,"title",Lt),w(Be,`❤️ ${Rn??""} `),Oe(Nt,"title",wn),w(ln,`💬 ${bs??""}`),Oe(Vt,"title",si),w(Ht,`🚨 ${La??""}`)},[()=>String(fe()+1).padStart(2,"0"),()=>(se().data.author||t()("익명")).charAt(0).toUpperCase(),()=>se().data.author||t()("익명"),()=>new Date(se().data.createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),E(Le,xe)},ee=Le=>{var se=xT(),fe=_(d(se),2),ye=d(fe,!0);u(fe);var xe=_(fe,2),De=d(xe,!0);u(xe);var Fe=_(xe,2);Fe.__click=b;var qe=d(Fe);u(Fe),u(se),$((Te,me,ae)=>{w(ye,Te),w(De,me),w(qe,`✏️ ${ae??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),E(Le,se)},ge=Le=>{var se=kT(),fe=_(d(se),2),ye=d(fe,!0);u(fe),u(se),$(xe=>w(ye,xe),[()=>t()("게시글로딩중")]),E(Le,se)},ce=(Le,se=pn)=>{var fe=CT(),ye=_(d(fe),2),xe=d(ye),De=d(xe,!0);u(xe);var Fe=_(xe,2),qe=d(Fe,!0);u(Fe),u(ye),u(fe),$(Te=>{w(De,Te),w(qe,se())},[()=>t()("게시글로드실패")]),E(Le,fe)},he=Le=>{var se=IT(),fe=_(d(se),2),ye=d(fe,!0);u(fe),u(se),$(xe=>w(ye,xe),[()=>t()("더많은게시글로딩")]),E(Le,se)},ke=Le=>{var se=TT(),fe=d(se),ye=d(fe,!0);u(fe),u(se),$(xe=>w(ye,xe),[()=>t()("모든게시글확인")]),E(Le,se)};let He=Zr(()=>`posts/${m(c)}`);Cu(oe,{get path(){return m(He)},orderBy:"createdAt",reverse:!0,pageSize:20,item:J,empty:ee,loading:ge,error:ce,loadingMore:he,noMore:ke,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}u(z),u(D);var Z=_(D,2);{var Q=J=>{var ee=AT();ee.__click=()=>x(f,!1),ee.__keydown=Ge=>Ge.key==="Escape"&&x(f,!1);var ge=d(ee);ge.__click=Ge=>Ge.stopPropagation();var ce=d(ge),he=d(ce),ke=d(he,!0);u(he);var He=_(he,2);He.__click=()=>x(f,!1),u(ce);var Le=_(ce,2),se=d(Le),fe=d(se),ye=d(fe,!0);u(fe);var xe=_(fe,2),De=d(xe),Fe=d(De,!0);u(De),De.value=De.__value="";var qe=_(De);Zt(qe,17,()=>mi,Ge=>Ge.value,(Ge,B)=>{var W=ST(),V=d(W,!0);u(W);var Ee={};$(()=>{w(V,m(B).label),Ee!==(Ee=m(B).value)&&(W.value=(W.__value=m(B).value)??"")}),E(Ge,W)}),u(xe),u(se);var Te=_(se,2),me=d(Te),ae=d(me,!0);u(me);var $e=_(me,2);zs($e),u(Te);var ze=_(Te,2),Xe=d(ze),rt=d(Xe,!0);u(Xe);var gt=_(Xe,2);wg(gt),u(ze),u(Le);var _t=_(Le,2),We=d(_t);We.__click=y;var ct=d(We,!0);u(We);var Rt=_(We,2);Rt.__click=k;var Pt=d(Rt,!0);u(Rt),u(_t),u(ge),u(ee),$((Ge,B,W,V,Ee,Se,Be,Ze,bt)=>{w(ke,Ge),w(ye,B),w(Fe,W),w(ae,V),Oe($e,"placeholder",Ee),w(rt,Se),Oe(gt,"placeholder",Be),We.disabled=m(g),w(ct,Ze),Rt.disabled=m(g),w(Pt,bt)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("카테고리선택"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>m(g)?t()("전송중"):t()("전송")]),hc(xe,()=>m(p),Ge=>x(p,Ge)),qs($e,()=>m(h),Ge=>x(h,Ge)),qs(gt,()=>m(v),Ge=>x(v,Ge)),E(J,ee)};Y(Z,J=>{m(f)&&J(Q)})}$((J,ee,ge)=>{w(ne,J),w(Ce,`${m(P).label??""}${ee??""}`),w(j,m(P).label),w(F,`✏️ ${ge??""}`)},[()=>t()("게시판"),()=>t()("게시판설명"),()=>t()("글쓰기")]),E(T,O)};Y(L,T=>{m(a)?T(A):T(C,!1)})}E(n,M),tt(),s()}yt(["click","keydown"]);we(pv,{},[],[],!0);var NT=S('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const LT={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function mv(n,e){et(e,!1),nt(n,LT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=NT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(mv,{},[],[],!0);var OT=S('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const DT={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function vv(n,e){et(e,!1),nt(n,DT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=OT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(vv,{},[],[],!0);var $T=S('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const MT={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function gv(n,e){et(e,!1),nt(n,MT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=$T(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(gv,{},[],[],!0);var UT=S('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const FT={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function _v(n,e){et(e,!1),nt(n,FT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=UT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(_v,{},[],[],!0);var zT=S('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const qT={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function bv(n,e){et(e,!1),nt(n,qT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=zT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(bv,{},[],[],!0);var jT=S('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const BT={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function wv(n,e){et(e,!1),nt(n,BT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=jT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(wv,{},[],[],!0);var VT=S('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const HT={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function yv(n,e){et(e,!1),nt(n,HT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=VT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(yv,{},[],[],!0);var WT=S('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const GT={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function Ev(n,e){et(e,!1),nt(n,GT);const t=()=>ot($t,"$t",r),[r,s]=At();Bt(()=>{_n(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}gn();var o=WT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),$((b,y,k)=>{w(f,b),w(h,y),w(g,k)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),E(n,o),tt(),s()}yt(["click"]);we(Ev,{},[],[],!0);var KT=S('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),YT=S('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),QT=S('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),JT=S('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),XT=S('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),ZT=S('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <!></div> <!> <!>',1),e2=S('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp"> </p></div> <!></div></div>');const t2={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0;color:#6b7280;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function xv(n,e){et(e,!0),nt(n,t2);const t=()=>ot($t,"$t",r),[r,s]=At();let i=re(!1),o=re(Xt({current:0,total:0,category:""})),a=re(Xt([])),l=re(!1);Bt(()=>{_n(t()("테스트게시글생성타이틀"))});function c(T,O="info"){x(a,[...m(a),{message:T,type:O,time:new Date().toLocaleTimeString()}],!0)}const f={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},qna:{titles:["근처 좋은 병원 추천해주세요","택배 수령 어디서 하나요?","버스 노선 문의드립니다","주차장 이용 방법 알려주세요","쓰레기 배출 시간이 언제인가요?","세탁소 추천 부탁드려요","동네 도서관 이용 방법","반려동물 병원 어디가 좋나요?","자전거 보관소 위치 알려주세요"],contents:["{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?","{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.","{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?","{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]},market:{titles:["중고 자전거 판매합니다","안쓰는 가전제품 나눔해요","아이 장난감 저렴하게 팔아요","책장 정리 - 책 나눔","운동기구 판매합니다","여행 캐리어 팔아요","화분과 식물 나눔","게임기 판매합니다","옷장 정리 - 의류 판매"],contents:["{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!","집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!","{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!"]}},p={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function h(T){return T[Math.floor(Math.random()*T.length)]}function v(T){let O=T;for(const[D,q]of Object.entries(p)){const G=new RegExp(`\\{${D}\\}`,"g");O=O.replace(G,h(q))}return O}async function g(){if(!Ae.isAuthenticated||!Ae.uid){c(t()("로그인필요"),"error");return}x(i,!0),x(l,!1),x(a,[],!0),c(t()("테스트데이터생성시작"),"success"),c(t()("사용자정보",{user:Ae.data?.displayName||Ae.email}),"info");const T=[{value:"community",label:t()("커뮤니티")},{value:"qna",label:t()("질문과답변")},{value:"news",label:t()("뉴스")},{value:"market",label:t()("회원장터")}];for(const O of T){x(o,{current:0,total:100,category:O.label},!0),c(t()("카테고리생성중",{category:O.label}),"info");const D=f[O.value];let q=0;for(let G=0;G<100;G++)try{const te=v(h(D.titles)),ne=v(h(D.contents)),le=Date.now(),Ce={uid:Ae.uid,title:te,content:ne,author:Ae.data?.displayName||Ae.email||t()("익명"),category:O.value,createdAt:le-Math.floor(Math.random()*30*24*60*60*1e3),updatedAt:le},pe=Bn(On,`posts/${O.value}`);await Sm(pe,Ce),q++,x(o,{...m(o),current:G+1},!0),(G+1)%20===0&&c(t()("생성진행",{current:G+1,total:100}),"success"),await new Promise(de=>setTimeout(de,50))}catch(te){c(t()("생성실패",{error:te.message}),"error")}c(t()("카테고리생성완료",{category:O.label,count:q}),"success")}c(t()("모든데이터생성완료"),"success"),c(t()("총400개생성"),"success"),x(i,!1),x(l,!0)}var b=e2(),y=d(b),k=d(y),I=d(k),R=d(I,!0);u(I);var P=_(I,2),M=d(P,!0);u(P),u(k);var L=_(k,2);{var A=T=>{var O=KT(),D=d(O),q=d(D,!0);u(D);var G=_(D,2),te=d(G,!0);u(G),u(O),$((ne,le)=>{w(q,ne),w(te,le)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),E(T,O)},C=T=>{var O=ZT(),D=ue(O),q=d(D);q.__click=g;var G=d(q,!0);u(q);var te=_(q,2);{var ne=j=>{var H=YT(),ie=d(H),N=d(ie,!0);u(ie);var K=_(ie,2),F=d(K);u(K);var z=_(K,2),oe=d(z);u(z),u(H),$(()=>{w(N,m(o).category),uc(F,`width: ${m(o).current/m(o).total*100}%`),w(oe,`${m(o).current??""} / ${m(o).total??""}`)}),E(j,H)};Y(te,j=>{m(i)&&j(ne)})}u(D);var le=_(D,2);{var Ce=j=>{var H=JT(),ie=d(H),N=d(ie,!0);u(ie);var K=_(ie,2);Zt(K,21,()=>m(a),er,(F,z)=>{var oe=QT(),Z=d(oe),Q=d(Z,!0);u(Z);var J=_(Z,2),ee=d(J,!0);u(J),u(oe),$(()=>{En(oe,1,`log-item log-${m(z).type??""}`,"svelte-uqnmwp"),w(Q,m(z).time),w(ee,m(z).message)}),E(F,oe)}),u(K),u(H),$(F=>w(N,F),[()=>t()("실행로그")]),E(j,H)};Y(le,j=>{m(a).length>0&&j(Ce)})}var pe=_(le,2);{var de=j=>{var H=XT(),ie=d(H),N=d(ie,!0);u(ie);var K=_(ie,2),F=d(K,!0);u(K),u(H),$((z,oe)=>{w(N,z),w(F,oe)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),E(j,H)};Y(pe,j=>{m(l)&&j(de)})}$(j=>{q.disabled=m(i),w(G,j)},[()=>m(i)?t()("생성중"):t()("게시글생성시작")]),E(T,O)};Y(L,T=>{Ae.isAuthenticated?T(C,!1):T(A)})}u(y),u(b),$((T,O)=>{w(R,T),w(M,O)},[()=>t()("테스트게시글생성타이틀"),()=>t()("테스트게시글생성설명")]),E(n,b),tt(),s()}yt(["click"]);we(xv,{},[],[],!0);var n2=S('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),r2=S('<div class="toast-container svelte-1cpok13"></div>');const s2={hash:"svelte-1cpok13",code:`\r
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
  }`};function kv(n,e){et(e,!1),nt(n,s2);const t=()=>ot(Iu,"$toasts",r),[r,s]=At();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}gn();var o=r2();Zt(o,5,t,a=>a.id,(a,l)=>{var c=n2(),f=d(c),p=d(f,!0);u(f);var h=_(f,2),v=d(h,!0);u(h);var g=_(h,2);g.__click=()=>fv(m(l).id),u(c),$(b=>{En(c,1,`toast toast-${m(l).type??""}`,"svelte-1cpok13"),w(p,b),w(v,m(l).message)},[()=>i(m(l).type)]),E(a,c)}),u(o),E(n,o),tt(),s()}yt(["click"]);we(kv,{},[],[],!0);var i2=S('<sns-layout><main class="content svelte-1hwhcgc"><!></main></sns-layout> <!>',3);const o2={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 반응형 */`};function Cv(n){nt(n,o2);let e=re(Xt(window.location.pathname));function t(){x(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var r=i2(),s=ue(r),i=d(s),o=d(i);{var a=f=>{cv(f,{})},l=f=>{var p=be(),h=ue(p);{var v=b=>{uv(b,{})},g=b=>{var y=be(),k=ue(y);{var I=P=>{dv(P,{})},R=P=>{var M=be(),L=ue(M);{var A=T=>{hv(T,{})},C=T=>{var O=be(),D=ue(O);{var q=te=>{pv(te,{})},G=te=>{var ne=be(),le=ue(ne);{var Ce=de=>{mv(de,{})},pe=de=>{var j=be(),H=ue(j);{var ie=K=>{vv(K,{})},N=K=>{var F=be(),z=ue(F);{var oe=Q=>{gv(Q,{})},Z=Q=>{var J=be(),ee=ue(J);{var ge=he=>{_v(he,{})},ce=he=>{var ke=be(),He=ue(ke);{var Le=fe=>{bv(fe,{})},se=fe=>{var ye=be(),xe=ue(ye);{var De=qe=>{wv(qe,{})},Fe=qe=>{var Te=be(),me=ue(Te);{var ae=ze=>{yv(ze,{})},$e=ze=>{var Xe=be(),rt=ue(Xe);{var gt=We=>{Ev(We,{})},_t=We=>{var ct=be(),Rt=ue(ct);{var Pt=B=>{xv(B,{})},Ge=B=>{lv(B,{})};Y(Rt,B=>{m(e)==="/dev/generate-posts"?B(Pt):B(Ge,!1)},!0)}E(We,ct)};Y(rt,We=>{m(e)==="/contact"?We(gt):We(_t,!1)},!0)}E(ze,Xe)};Y(me,ze=>{m(e)==="/privacy"?ze(ae):ze($e,!1)},!0)}E(qe,Te)};Y(xe,qe=>{m(e)==="/terms"?qe(De):qe(Fe,!1)},!0)}E(fe,ye)};Y(He,fe=>{m(e)==="/help"?fe(Le):fe(se,!1)},!0)}E(he,ke)};Y(ee,he=>{m(e)==="/about"?he(ge):he(ce,!1)},!0)}E(Q,J)};Y(z,Q=>{m(e)==="/settings"?Q(oe):Q(Z,!1)},!0)}E(K,F)};Y(H,K=>{m(e)==="/chat/list"?K(ie):K(N,!1)},!0)}E(de,j)};Y(le,de=>{m(e).startsWith("/post/detail/")?de(Ce):de(pe,!1)},!0)}E(te,ne)};Y(D,te=>{m(e)==="/post/list"?te(q):te(G,!1)},!0)}E(T,O)};Y(L,T=>{m(e)==="/user/list"?T(A):T(C,!1)},!0)}E(P,M)};Y(k,P=>{m(e)==="/user/profile"?P(I):P(R,!1)},!0)}E(b,y)};Y(h,b=>{m(e)==="/menu"?b(v):b(g,!1)},!0)}E(f,p)};Y(o,f=>{m(e)==="/user/login"?f(a):f(l,!1)})}u(i),u(s);var c=_(s,2);kv(c,{}),E(n,r)}we(Cv,{},[],[],!0);lc(Cv,{target:document.getElementById("app")});
