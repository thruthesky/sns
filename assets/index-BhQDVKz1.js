(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const hh=!1;var Wl=Array.isArray,Tv=Array.prototype.indexOf,Gl=Array.from,Io=Object.keys,Li=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,fh=Object.getOwnPropertyDescriptors,Sv=Object.prototype,Av=Array.prototype,Kl=Object.getPrototypeOf,Tu=Object.isExtensible;function ri(t){return typeof t=="function"}const fn=()=>{};function Rv(t){return t()}function To(t){for(var e=0;e<t.length;e++)t[e]()}function ph(){var t,e,n=new Promise((r,s)=>{t=r,e=s});return{promise:n,resolve:t,reject:e}}function Pv(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Wt=2,Yl=4,ra=8,mr=16,vr=32,jr=64,sa=128,Vt=1024,an=2048,gr=4096,pn=8192,ir=16384,Ql=32768,Dr=65536,Su=1<<17,Nv=1<<18,hs=1<<19,mh=1<<20,kn=256,So=512,Ao=32768,ol=1<<21,Jl=1<<22,Xr=1<<23,Bn=Symbol("$state"),Xl=Symbol("legacy props"),Lv=Symbol(""),ks=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Ov=1,Zl=3,Qs=8;function vh(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Dv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function $v(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Mv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Uv(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Fv(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zv(){throw new Error("https://svelte.dev/e/hydration_failed")}function qv(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Vv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Hv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ia=1,oa=2,gh=4,Wv=8,Gv=16,Kv=1,Yv=2,_h=4,Qv=8,Jv=16,Xv=1,Zv=2,bh="[",aa="[!",ec="]",Ls={},Dt=Symbol(),eg="http://www.w3.org/1999/xhtml",tg="http://www.w3.org/2000/svg",ng="@attach";function la(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function rg(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function sg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let _e=!1;function dn(t){_e=t}let Ue;function Mt(t){if(t===null)throw la(),Ls;return Ue=t}function rs(){return Mt(Wn(Ue))}function u(t){if(_e){if(Wn(Ue)!==null)throw la(),Ls;Ue=t}}function Jn(t=1){if(_e){for(var e=t,n=Ue;e--;)n=Wn(n);Ue=n}}function Ro(t=!0){for(var e=0,n=Ue;;){if(n.nodeType===Qs){var r=n.data;if(r===ec){if(e===0)return n;e-=1}else(r===bh||r===aa)&&(e+=1)}var s=Wn(n);t&&n.remove(),n=s}}function wh(t){if(!t||t.nodeType!==Qs)throw la(),Ls;return t.data}function yh(t){return t===this.v}function Eh(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function xh(t){return!Eh(t,this.v)}let Js=!1,ig=!1;function og(){Js=!0}let ft=null;function Os(t){ft=t}function tt(t,e=!1,n){ft={p:ft,i:!1,c:null,e:null,s:t,x:null,l:Js&&!e?{s:null,u:null,$:[]}:null}}function nt(t){var e=ft,n=e.e;if(n!==null){e.e=null;for(var r of n)qh(r)}return t!==void 0&&(e.x=t),e.i=!0,ft=e.p,t??{}}function Gi(){return!Js||ft!==null&&ft.l===null}let Qr=[];function kh(){var t=Qr;Qr=[],To(t)}function Br(t){if(Qr.length===0&&!bi){var e=Qr;queueMicrotask(()=>{e===Qr&&kh()})}Qr.push(t)}function ag(){for(;Qr.length>0;)kh()}function Ch(t){var e=Ie;if(e===null)return Me.f|=Xr,t;if((e.f&Ql)===0){if((e.f&sa)===0)throw t;e.b.error(t)}else Ds(t,e)}function Ds(t,e){for(;e!==null;){if((e.f&sa)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const fo=new Set;let Ge=null,_i=null,Rn=null,zn=[],ca=null,al=!1,bi=!1;class Ln{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){zn=[],_i=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,n);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects)):(_i=this,Ge=null,Au(n.render_effects),Au(n.effects),_i=null,this.#l?.resolve()),Rn=null}#n(e,n){e.f^=Vt;for(var r=e.first;r!==null;){var s=r.f,i=(s&(vr|jr))!==0,o=i&&(s&Vt)!==0,a=o||(s&pn)!==0||this.skipped_effects.has(r);if((r.f&sa)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=Vt:(s&Yl)!==0?n.effects.push(r):Ji(r)&&((r.f&mr)!==0&&n.block_effects.push(r),Di(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#a(n.effects),this.#a(n.render_effects),this.#a(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#a(e){for(const n of e)((n.f&an)!==0?this.#o:this.#i).push(n),Ht(n,Vt)}capture(e,n){this.previous.has(e)||this.previous.set(e,n),this.current.set(e,e.v),Rn?.set(e,e.v)}activate(){Ge=this}deactivate(){Ge=null,Rn=null}flush(){if(this.activate(),zn.length>0){if(Ih(),Ge!==null&&Ge!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#u()}#u(){if(fo.size>1){this.previous.clear();var e=Rn,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of fo){if(s===this){n=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(n&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of i)Th(c,o,a,l);if(zn.length>0){Ge=s,s.apply();for(const c of zn)s.#n(c,r);zn=[],s.deactivate()}}}Ge=null,Rn=e}this.committed=!0,fo.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)Ht(e,an),ss(e);for(const e of this.#i)Ht(e,gr),ss(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=ph()).promise}static ensure(){if(Ge===null){const e=Ge=new Ln;fo.add(Ge),bi||Ln.enqueue(()=>{Ge===e&&e.flush()})}return Ge}static enqueue(e){Br(e)}apply(){}}function it(t){var e=bi;bi=!0;try{for(var n;;){if(ag(),zn.length===0&&(Ge?.flush(),zn.length===0))return ca=null,n;Ih()}}finally{bi=e}}function Ih(){var t=Ss;al=!0;try{var e=0;for(Lu(!0);zn.length>0;){var n=Ln.ensure();if(e++>1e3){var r,s;lg()}n.process(zn),Ar.clear()}}finally{al=!1,Lu(t),ca=null}}function lg(){try{Fv()}catch(t){Ds(t,ca)}}let Xn=null;function Au(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(ir|pn))===0&&Ji(r)&&(Xn=new Set,Di(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Vh(r):r.fn=null),Xn?.size>0)){Ar.clear();for(const s of Xn){if((s.f&(ir|pn))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Xn.has(o)&&(Xn.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(ir|pn))===0&&Di(l)}}Xn.clear()}}Xn=null}}function Th(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const s of t.reactions){const i=s.f;(i&Wt)!==0?Th(s,e,n,r):(i&(Jl|mr))!==0&&(i&an)===0&&Sh(s,e,r)&&(Ht(s,an),ss(s))}}function Sh(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const s of t.deps){if(e.includes(s))return!0;if((s.f&Wt)!==0&&Sh(s,e,n))return n.set(s,!0),!0}return n.set(t,!1),!1}function ss(t){for(var e=ca=t;e.parent!==null;){e=e.parent;var n=e.f;if(al&&e===Ie&&(n&mr)!==0)return;if((n&(jr|vr))!==0){if((n&Vt)===0)return;e.f^=Vt}}zn.push(e)}function cg(t){let e=0,n=$r(0),r;return()=>{yg()&&(m(n),da(()=>(e===0&&(r=Hn(()=>t(()=>wi(n)))),e+=1,()=>{Br(()=>{e-=1,e===0&&(r?.(),r=void 0,wi(n))})})))}}var ug=Dr|hs|sa;function dg(t,e,n){new hg(t,e,n)}class hg{parent;#t=!1;#e;#r=_e?Ue:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#u=null;#f=0;#d=0;#p=!1;#h=null;#b=cg(()=>(this.#h=$r(this.#f),()=>{this.#h=null}));constructor(e,n,r){this.#e=e,this.#s=n,this.#l=r,this.parent=Ie.b,this.#t=!!this.#s.pending,this.#o=fs(()=>{if(Ie.b=this,_e){const i=this.#r;rs(),i.nodeType===Qs&&i.data===aa?this.#y():this.#w()}else{var s=this.#g();try{this.#i=rn(()=>r(s))}catch(i){this.error(i)}this.#d>0?this.#v():this.#t=!1}return()=>{this.#u?.remove()}},ug),_e&&(this.#e=Ue)}#w(){try{this.#i=rn(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=rn(()=>e(this.#e)),Ln.enqueue(()=>{var n=this.#g();this.#i=this.#m(()=>(Ln.ensure(),rn(()=>this.#l(n)))),this.#d>0?this.#v():(Ts(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#u=Cn(),this.#e.before(this.#u),e=this.#u),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#m(e){var n=Ie,r=Me,s=ft;In(this.#o),sn(this.#o),Os(this.#o.ctx);try{return e()}catch(i){return Ch(i),null}finally{In(n),sn(r),Os(s)}}#v(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),Gh(this.#i,this.#c)),this.#n===null&&(this.#n=rn(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#d+=e,this.#d===0&&(this.#t=!1,this.#n&&Ts(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&$s(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var n=this.#s.onerror;let r=this.#s.failed;if(this.#p||!n&&!r)throw e;this.#i&&(St(this.#i),this.#i=null),this.#n&&(St(this.#n),this.#n=null),this.#a&&(St(this.#a),this.#a=null),_e&&(Mt(this.#r),Jn(),Mt(Ro()));var s=!1,i=!1;const o=()=>{if(s){sg();return}s=!0,i&&Hv(),Ln.ensure(),this.#f=0,this.#a!==null&&Ts(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#m(()=>(this.#p=!1,rn(()=>this.#l(this.#e)))),this.#d>0?this.#v():this.#t=!1};var a=Me;try{sn(null),i=!0,n?.(e,o),i=!1}catch(l){Ds(l,this.#o&&this.#o.parent)}finally{sn(a)}r&&Br(()=>{this.#a=this.#m(()=>{Ln.ensure(),this.#p=!0;try{return rn(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Ds(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Ah(t,e,n,r){const s=Gi()?Ki:tc;if(n.length===0&&t.length===0){r(e.map(s));return}var i=Ge,o=Ie,a=fg();function l(){Promise.all(n.map(c=>pg(c))).then(c=>{a();try{r([...e.map(s),...c])}catch(f){(o.f&ir)===0&&Ds(f,o)}i?.deactivate(),Po()}).catch(c=>{Ds(c,o)})}t.length>0?Promise.all(t).then(()=>{a();try{return l()}finally{i?.deactivate(),Po()}}):l()}function fg(){var t=Ie,e=Me,n=ft,r=Ge;return function(i=!0){In(t),sn(e),Os(n),i&&r?.activate()}}function Po(){In(null),sn(null),Os(null)}function Ki(t){var e=Wt|an,n=Me!==null&&(Me.f&Wt)!==0?Me:null;return Ie===null||n!==null&&(n.f&kn)!==0?e|=kn:Ie.f|=hs,{ctx:ft,deps:null,effects:null,equals:yh,f:e,fn:t,reactions:null,rv:0,v:Dt,wv:0,parent:n??Ie,ac:null}}function pg(t,e){let n=Ie;n===null&&Dv();var r=n.b,s=void 0,i=$r(Dt),o=!Me,a=new Map;return Cg(()=>{var l=ph();s=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===Ge&&c.committed&&c.deactivate(),Po()})}catch(h){l.reject(h),Po()}var c=Ge;if(o){var f=!r.is_pending();r.update_pending_count(1),c.increment(f),a.get(c)?.reject(ks),a.delete(c),a.set(c,l)}const p=(h,v=void 0)=>{if(c.activate(),v)v!==ks&&(i.f|=Xr,$s(i,v));else{(i.f&Xr)!==0&&(i.f^=Xr),$s(i,h);for(const[g,b]of a){if(a.delete(g),g===c)break;b.reject(ks)}}o&&(r.update_pending_count(-1),c.decrement(f))};l.promise.then(p,h=>p(null,h||"unknown"))}),Yi(()=>{for(const l of a.values())l.reject(ks)}),new Promise(l=>{function c(f){function p(){f===s?l(i):c(s)}f.then(p,p)}c(s)})}function Zr(t){const e=Ki(t);return Kh(e),e}function tc(t){const e=Ki(t);return e.equals=xh,e}function Rh(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)St(e[n])}}function mg(t){for(var e=t.parent;e!==null;){if((e.f&Wt)===0)return e;e=e.parent}return null}function nc(t){var e,n=Ie;In(mg(t));try{t.f&=~Ao,Rh(t),e=Xh(t)}finally{In(n)}return e}function Ph(t){var e=nc(t);if(t.equals(e)||(t.v=e,t.wv=Qh()),!ps)if(Rn!==null)Rn.set(t,t.v);else{var n=(Ir||(t.f&kn)!==0)&&t.deps!==null?gr:Vt;Ht(t,n)}}let ll=new Set;const Ar=new Map;let Nh=!1;function $r(t,e){var n={f:0,v:t,reactions:null,equals:yh,rv:0,wv:0};return n}function re(t,e){const n=$r(t);return Kh(n),n}function rc(t,e=!1,n=!0){const r=$r(t);return e||(r.equals=xh),Js&&n&&ft!==null&&ft.l!==null&&(ft.l.s??=[]).push(r),r}function x(t,e,n=!1){Me!==null&&(!Pn||(Me.f&Su)!==0)&&Gi()&&(Me.f&(Wt|mr|Jl|Su))!==0&&!or?.includes(t)&&Vv();let r=n?Qt(e):e;return $s(t,r)}function $s(t,e){if(!t.equals(e)){var n=t.v;ps?Ar.set(t,e):Ar.set(t,n),t.v=e;var r=Ln.ensure();r.capture(t,n),(t.f&Wt)!==0&&((t.f&an)!==0&&nc(t),Ht(t,(t.f&kn)===0?Vt:gr)),t.wv=Qh(),Lh(t,an),Gi()&&Ie!==null&&(Ie.f&Vt)!==0&&(Ie.f&(vr|jr))===0&&(wn===null?Sg([t]):wn.push(t)),!r.is_fork&&ll.size>0&&!Nh&&vg()}return e}function vg(){Nh=!1;const t=Array.from(ll);for(const e of t)(e.f&Vt)!==0&&Ht(e,gr),Ji(e)&&Di(e);ll.clear()}function cl(t,e=1){var n=m(t),r=e===1?n++:n--;return x(t,n),r}function wi(t){x(t,t.v+1)}function Lh(t,e){var n=t.reactions;if(n!==null)for(var r=Gi(),s=n.length,i=0;i<s;i++){var o=n[i],a=o.f;if(!(!r&&o===Ie)){var l=(a&an)===0;l&&Ht(o,e),(a&Wt)!==0?(a&Ao)===0&&(o.f|=Ao,Lh(o,gr)):l&&((a&mr)!==0&&Xn!==null&&Xn.add(o),ss(o))}}}function Qt(t){if(typeof t!="object"||t===null||Bn in t)return t;const e=Kl(t);if(e!==Sv&&e!==Av)return t;var n=new Map,r=Wl(t),s=re(0),i=es,o=a=>{if(es===i)return a();var l=Me,c=es;sn(null),Du(i);var f=a();return sn(l),Du(c),f};return r&&n.set("length",re(t.length)),new Proxy(t,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&jv();var f=n.get(l);return f===void 0?f=o(()=>{var p=re(c.value);return n.set(l,p),p}):x(f,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const f=o(()=>re(Dt));n.set(l,f),wi(s)}}else x(c,Dt),wi(s);return!0},get(a,l,c){if(l===Bn)return t;var f=n.get(l),p=l in a;if(f===void 0&&(!p||sr(a,l)?.writable)&&(f=o(()=>{var v=Qt(p?a[l]:Dt),g=re(v);return g}),n.set(l,f)),f!==void 0){var h=m(f);return h===Dt?void 0:h}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var f=n.get(l);f&&(c.value=m(f))}else if(c===void 0){var p=n.get(l),h=p?.v;if(p!==void 0&&h!==Dt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(a,l){if(l===Bn)return!0;var c=n.get(l),f=c!==void 0&&c.v!==Dt||Reflect.has(a,l);if(c!==void 0||Ie!==null&&(!f||sr(a,l)?.writable)){c===void 0&&(c=o(()=>{var h=f?Qt(a[l]):Dt,v=re(h);return v}),n.set(l,c));var p=m(c);if(p===Dt)return!1}return f},set(a,l,c,f){var p=n.get(l),h=l in a;if(r&&l==="length")for(var v=c;v<p.v;v+=1){var g=n.get(v+"");g!==void 0?x(g,Dt):v in a&&(g=o(()=>re(Dt)),n.set(v+"",g))}if(p===void 0)(!h||sr(a,l)?.writable)&&(p=o(()=>re(void 0)),x(p,Qt(c)),n.set(l,p));else{h=p.v!==Dt;var b=o(()=>Qt(c));x(p,b)}var y=Reflect.getOwnPropertyDescriptor(a,l);if(y?.set&&y.set.call(f,c),!h){if(r&&typeof l=="string"){var C=n.get("length"),I=Number(l);Number.isInteger(I)&&I>=C.v&&x(C,I+1)}wi(s)}return!0},ownKeys(a){m(s);var l=Reflect.ownKeys(a).filter(p=>{var h=n.get(p);return h===void 0||h.v!==Dt});for(var[c,f]of n)f.v!==Dt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Bv()}})}function Ru(t){try{if(t!==null&&typeof t=="object"&&Bn in t)return t[Bn]}catch{}return t}function gg(t,e){return Object.is(Ru(t),Ru(e))}var Pu,Oh,Dh,$h;function ul(){if(Pu===void 0){Pu=window,Oh=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Dh=sr(e,"firstChild").get,$h=sr(e,"nextSibling").get,Tu(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tu(n)&&(n.__t=void 0)}}function Cn(t=""){return document.createTextNode(t)}function Mn(t){return Dh.call(t)}function Wn(t){return $h.call(t)}function d(t,e){if(!_e)return Mn(t);var n=Mn(Ue);if(n===null)n=Ue.appendChild(Cn());else if(e&&n.nodeType!==Zl){var r=Cn();return n?.before(r),Mt(r),r}return Mt(n),n}function ae(t,e=!1){if(!_e){var n=Mn(t);return n instanceof Comment&&n.data===""?Wn(n):n}if(e&&Ue?.nodeType!==Zl){var r=Cn();return Ue?.before(r),Mt(r),r}return Ue}function _(t,e=1,n=!1){let r=_e?Ue:t;for(var s;e--;)s=r,r=Wn(r);if(!_e)return r;if(n&&r?.nodeType!==Zl){var i=Cn();return r===null?s?.after(i):r.before(i),Mt(i),i}return Mt(r),r}function sc(t){t.textContent=""}function Mh(){return!1}function _g(t,e){if(e){const n=document.body;t.autofocus=!0,Br(()=>{document.activeElement===n&&t.focus()})}}function bg(t){_e&&Mn(t)!==null&&sc(t)}let Nu=!1;function Uh(){Nu||(Nu=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function ua(t){var e=Me,n=Ie;sn(null),In(null);try{return t()}finally{sn(e),In(n)}}function Fh(t,e,n,r=n){t.addEventListener(e,()=>ua(n));const s=t.__on_r;s?t.__on_r=()=>{s(),r(!0)}:t.__on_r=()=>r(!0),Uh()}function zh(t){Ie===null&&Me===null&&Uv(),Me!==null&&(Me.f&kn)!==0&&Ie===null&&Mv(),ps&&$v()}function wg(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Un(t,e,n,r=!0){var s=Ie;s!==null&&(s.f&pn)!==0&&(t|=pn);var i={ctx:ft,deps:null,nodes_start:null,nodes_end:null,f:t|an,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Di(i),i.f|=Ql}catch(l){throw St(i),l}else e!==null&&ss(i);if(r){var o=i;if(n&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&hs)===0&&(o=o.first,(t&mr)!==0&&(t&Dr)!==0&&o!==null&&(o.f|=Dr)),o!==null&&(o.parent=s,s!==null&&wg(o,s),Me!==null&&(Me.f&Wt)!==0&&(t&jr)===0)){var a=Me;(a.effects??=[]).push(o)}}return i}function yg(){return Me!==null&&!Pn}function Yi(t){const e=Un(ra,null,!1);return Ht(e,Vt),e.teardown=t,e}function Ms(t){zh();var e=Ie.f,n=!Me&&(e&vr)!==0&&(e&Ql)===0;if(n){var r=ft;(r.e??=[]).push(t)}else return qh(t)}function qh(t){return Un(Yl|mh,t,!1)}function Eg(t){return zh(),Un(ra|mh,t,!0)}function xg(t){Ln.ensure();const e=Un(jr|hs,t,!0);return()=>{St(e)}}function kg(t){Ln.ensure();const e=Un(jr|hs,t,!0);return(n={})=>new Promise(r=>{n.outro?Ts(e,()=>{St(e),r(void 0)}):(St(e),r(void 0))})}function Qi(t){return Un(Yl,t,!1)}function Cg(t){return Un(Jl|hs,t,!0)}function da(t,e=0){return Un(ra|e,t,!0)}function D(t,e=[],n=[],r=[]){Ah(r,e,n,s=>{Un(ra,()=>t(...s.map(m)),!0)})}function fs(t,e=0){var n=Un(mr|e,t,!0);return n}function rn(t,e=!0){return Un(vr|hs,t,!0,e)}function jh(t){var e=t.teardown;if(e!==null){const n=ps,r=Me;Ou(!0),sn(null);try{e.call(null)}finally{Ou(n),sn(r)}}}function Bh(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const s=n.ac;s!==null&&ua(()=>{s.abort(ks)});var r=n.next;(n.f&jr)!==0?n.parent=null:St(n,e),n=r}}function Ig(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&vr)===0&&St(e),e=n}}function St(t,e=!0){var n=!1;(e||(t.f&Nv)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Tg(t.nodes_start,t.nodes_end),n=!0),Bh(t,e&&!n),No(t,0),Ht(t,ir);var r=t.transitions;if(r!==null)for(const i of r)i.stop();jh(t);var s=t.parent;s!==null&&s.first!==null&&Vh(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Tg(t,e){for(;t!==null;){var n=t===e?null:Wn(t);t.remove(),t=n}}function Vh(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Ts(t,e,n=!0){var r=[];ic(t,r,!0),Hh(r,()=>{n&&St(t),e&&e()})}function Hh(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var s of t)s.out(r)}else e()}function ic(t,e,n){if((t.f&pn)===0){if(t.f^=pn,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var s=r.next,i=(r.f&Dr)!==0||(r.f&vr)!==0&&(t.f&mr)!==0;ic(r,e,i?n:!1),r=s}}}function oc(t){Wh(t,!0)}function Wh(t,e){if((t.f&pn)!==0){t.f^=pn,(t.f&Vt)===0&&(Ht(t,an),ss(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&Dr)!==0||(n.f&vr)!==0;Wh(n,s?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}function Gh(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var s=n===r?null:Wn(n);e.append(n),n=s}}let Ss=!1;function Lu(t){Ss=t}let ps=!1;function Ou(t){ps=t}let Me=null,Pn=!1;function sn(t){Me=t}let Ie=null;function In(t){Ie=t}let or=null;function Kh(t){Me!==null&&(or===null?or=[t]:or.push(t))}let Yt=null,un=0,wn=null;function Sg(t){wn=t}let Yh=1,Oi=0,es=Oi;function Du(t){es=t}let Ir=!1;function Qh(){return++Yh}function Ji(t){var e=t.f;if((e&an)!==0)return!0;if((e&gr)!==0){var n=t.deps,r=(e&kn)!==0;if(e&Wt&&(t.f&=~Ao),n!==null){var s,i,o=(e&So)!==0,a=r&&Ie!==null&&!Ir,l=n.length;if((o||a)&&(Ie===null||(Ie.f&ir)===0)){var c=t,f=c.parent;for(s=0;s<l;s++)i=n[s],(o||!i?.reactions?.includes(c))&&(i.reactions??=[]).push(c);o&&(c.f^=So),a&&f!==null&&(f.f&kn)===0&&(c.f^=kn)}for(s=0;s<l;s++)if(i=n[s],Ji(i)&&Ph(i),i.wv>t.wv)return!0}(!r||Ie!==null&&!Ir)&&Ht(t,Vt)}return!1}function Jh(t,e,n=!0){var r=t.reactions;if(r!==null&&!or?.includes(t))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Wt)!==0?Jh(i,e,!1):e===i&&(n?Ht(i,an):(i.f&Vt)!==0&&Ht(i,gr),ss(i))}}function Xh(t){var e=Yt,n=un,r=wn,s=Me,i=Ir,o=or,a=ft,l=Pn,c=es,f=t.f;Yt=null,un=0,wn=null,Ir=(f&kn)!==0&&(Pn||!Ss||Me===null),Me=(f&(vr|jr))===0?t:null,or=null,Os(t.ctx),Pn=!1,es=++Oi,t.ac!==null&&(ua(()=>{t.ac.abort(ks)}),t.ac=null);try{t.f|=ol;var p=t.fn,h=p(),v=t.deps;if(Yt!==null){var g;if(No(t,un),v!==null&&un>0)for(v.length=un+Yt.length,g=0;g<Yt.length;g++)v[un+g]=Yt[g];else t.deps=v=Yt;if(!Ir||(f&Wt)!==0&&t.reactions!==null)for(g=un;g<v.length;g++)(v[g].reactions??=[]).push(t)}else v!==null&&un<v.length&&(No(t,un),v.length=un);if(Gi()&&wn!==null&&!Pn&&v!==null&&(t.f&(Wt|gr|an))===0)for(g=0;g<wn.length;g++)Jh(wn[g],t);return s!==null&&s!==t&&(Oi++,wn!==null&&(r===null?r=wn:r.push(...wn))),(t.f&Xr)!==0&&(t.f^=Xr),h}catch(b){return Ch(b)}finally{t.f^=ol,Yt=e,un=n,wn=r,Me=s,Ir=i,or=o,Os(a),Pn=l,es=c}}function Ag(t,e){let n=e.reactions;if(n!==null){var r=Tv.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}n===null&&(e.f&Wt)!==0&&(Yt===null||!Yt.includes(e))&&(Ht(e,gr),(e.f&(kn|So))===0&&(e.f^=So),Rh(e),No(e,0))}function No(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Ag(t,n[r])}function Di(t){var e=t.f;if((e&ir)===0){Ht(t,Vt);var n=Ie,r=Ss;Ie=t,Ss=!0;try{(e&mr)!==0?Ig(t):Bh(t),jh(t);var s=Xh(t);t.teardown=typeof s=="function"?s:null,t.wv=Yh;var i;hh&&ig&&(t.f&an)!==0&&t.deps}finally{Ss=r,Ie=n}}}async function Rg(){await Promise.resolve(),it()}function m(t){var e=t.f,n=(e&Wt)!==0;if(Me!==null&&!Pn){var r=Ie!==null&&(Ie.f&ir)!==0;if(!r&&!or?.includes(t)){var s=Me.deps;if((Me.f&ol)!==0)t.rv<Oi&&(t.rv=Oi,Yt===null&&s!==null&&s[un]===t?un++:Yt===null?Yt=[t]:(!Ir||!Yt.includes(t))&&Yt.push(t));else{(Me.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Me]:i.includes(Me)||i.push(Me)}}}else if(n&&t.deps===null&&t.effects===null){var o=t,a=o.parent;a!==null&&(a.f&kn)===0&&(o.f^=kn)}if(ps){if(Ar.has(t))return Ar.get(t);if(n){o=t;var l=o.v;return((o.f&Vt)===0&&o.reactions!==null||Zh(o))&&(l=nc(o)),Ar.set(o,l),l}}else if(n){if(o=t,Rn?.has(o))return Rn.get(o);Ji(o)&&Ph(o)}if(Rn?.has(t))return Rn.get(t);if((t.f&Xr)!==0)throw t.v;return t.v}function Zh(t){if(t.v===Dt)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Ar.has(e)||(e.f&Wt)!==0&&Zh(e))return!0;return!1}function Hn(t){var e=Pn;try{return Pn=!0,t()}finally{Pn=e}}const Pg=-7169;function Ht(t,e){t.f=t.f&Pg|e}function xs(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Bn in t)dl(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Bn in n&&dl(n)}}}function dl(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{dl(t[r],e)}catch{}const n=Kl(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=fh(n);for(let s in r){const i=r[s].get;if(i)try{i.call(t)}catch{}}}}}function Ng(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Lg=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Og(t){return Lg.includes(t)}const Dg={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function $g(t){return t=t.toLowerCase(),Dg[t]??t}const Mg=["touchstart","touchmove"];function Ug(t){return Mg.includes(t)}const Fg=["textarea","script","style","title"];function zg(t){return Fg.includes(t)}const ef=new Set,hl=new Set;function tf(t,e,n,r={}){function s(i){if(r.capture||pi.call(e,i),!i.cancelBubble)return ua(()=>n?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Br(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Us(t,e,n,r,s){var i={capture:r,passive:s},o=tf(t,e,n,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Yi(()=>{e.removeEventListener(t,o,i)})}function wt(t){for(var e=0;e<t.length;e++)ef.add(t[e]);for(var n of hl)n(t)}let $u=null;function pi(t){var e=this,n=e.ownerDocument,r=t.type,s=t.composedPath?.()||[],i=s[0]||t.target;$u=t;var o=0,a=$u===t&&t.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=s[o]||t.target,i!==e){Li(t,"currentTarget",{configurable:!0,get(){return i||n}});var f=Me,p=Ie;sn(null),In(null);try{for(var h,v=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var b=i["__"+r];b!=null&&(!i.disabled||t.target===i)&&b.call(i,t)}catch(y){h?v.push(y):h=y}if(t.cancelBubble||g===e||g===null)break;i=g}if(h){for(let y of v)queueMicrotask(()=>{throw y});throw h}}finally{t.__root=e,delete t.currentTarget,sn(f),In(p)}}}function nf(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function ar(t,e){var n=Ie;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function T(t,e){var n=(e&Xv)!==0,r=(e&Zv)!==0,s,i=!t.startsWith("<!>");return()=>{if(_e)return ar(Ue,null),Ue;s===void 0&&(s=nf(i?t:"<!>"+t),n||(s=Mn(s)));var o=r||Oh?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Mn(o),l=o.lastChild;ar(a,l)}else ar(o,o);return o}}function qg(t,e,n="svg"){var r=!t.startsWith("<!>"),s=`<${n}>${r?t:"<!>"+t}</${n}>`,i;return()=>{if(_e)return ar(Ue,null),Ue;if(!i){var o=nf(s),a=Mn(o);i=Mn(a)}var l=i.cloneNode(!0);return ar(l,l),l}}function jg(t,e){return qg(t,e,"svg")}function be(){if(_e)return ar(Ue,null),Ue;var t=document.createDocumentFragment(),e=document.createComment(""),n=Cn();return t.append(e,n),ar(e,n),t}function E(t,e){if(_e){Ie.nodes_end=Ue,rs();return}t!==null&&t.before(e)}function w(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function ac(t,e){return rf(t,e)}function Bg(t,e){ul(),e.intro=e.intro??!1;const n=e.target,r=_e,s=Ue;try{for(var i=Mn(n);i&&(i.nodeType!==Qs||i.data!==bh);)i=Wn(i);if(!i)throw Ls;dn(!0),Mt(i);const o=rf(t,{...e,anchor:i});return dn(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Ls&&console.warn("Failed to hydrate: ",o),e.recover===!1&&zv(),ul(),sc(n),dn(!1),ac(t,e)}finally{dn(r),Mt(s)}}const bs=new Map;function rf(t,{target:e,anchor:n,props:r={},events:s,context:i,intro:o=!0}){ul();var a=new Set,l=p=>{for(var h=0;h<p.length;h++){var v=p[h];if(!a.has(v)){a.add(v);var g=Ug(v);e.addEventListener(v,pi,{passive:g});var b=bs.get(v);b===void 0?(document.addEventListener(v,pi,{passive:g}),bs.set(v,1)):bs.set(v,b+1)}}};l(Gl(ef)),hl.add(l);var c=void 0,f=kg(()=>{var p=n??e.appendChild(Cn());return dg(p,{pending:()=>{}},h=>{if(i){tt({});var v=ft;v.c=i}if(s&&(r.$$events=s),_e&&ar(h,null),c=t(h,r)||{},_e&&(Ie.nodes_end=Ue,Ue===null||Ue.nodeType!==Qs||Ue.data!==ec))throw la(),Ls;i&&nt()}),()=>{for(var h of a){e.removeEventListener(h,pi);var v=bs.get(h);--v===0?(document.removeEventListener(h,pi),bs.delete(h)):bs.set(h,v)}hl.delete(l),p!==n&&p.parentNode?.removeChild(p)}});return fl.set(c,f),c}let fl=new WeakMap;function Vg(t,e){const n=fl.get(t);return n?(fl.delete(t),n(e)):Promise.resolve()}class lc{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,n=!0){this.anchor=e,this.#s=n}#l=()=>{var e=Ge;if(this.#t.has(e)){var n=this.#t.get(e),r=this.#e.get(n);if(r)oc(r);else{var s=this.#r.get(n);s&&(this.#e.set(n,s.effect),this.#r.delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(St(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===n)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var c=document.createDocumentFragment();Gh(o,c),c.append(Cn()),this.#r.set(i,{effect:o,fragment:c})}else St(o);this.#e.delete(i)};this.#s||!r?Ts(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const n=Array.from(this.#t.values());for(const[r,s]of this.#r)n.includes(r)||(St(s.effect),this.#r.delete(r))};ensure(e,n){var r=Ge,s=Mh();if(n&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=Cn();i.append(o),this.#r.set(e,{effect:rn(()=>n(o)),fragment:i})}else this.#e.set(e,rn(()=>n(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else _e&&(this.anchor=Ue),this.#l()}}function Q(t,e,n=!1){_e&&rs();var r=new lc(t),s=n?Dr:0;function i(o,a){if(_e){const c=wh(t)===aa;if(o===c){var l=Ro();Mt(l),r.anchor=l,dn(!1),r.ensure(o,a),dn(!0);return}}r.ensure(o,a)}fs(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function Zn(t,e){return e}function Hg(t,e,n){for(var r=t.items,s=[],i=e.length,o=0;o<i;o++)ic(e[o].e,s,!0);var a=i>0&&s.length===0&&n!==null;if(a){var l=n.parentNode;sc(l),l.append(n),r.clear(),Fn(t,e[0].prev,e[i-1].next)}Hh(s,()=>{for(var c=0;c<i;c++){var f=e[c];a||(r.delete(f.k),Fn(t,f.prev,f.next)),St(f.e,!a)}})}function Jt(t,e,n,r,s,i=null){var o=t,a={flags:e,items:new Map,first:null},l=(e&gh)!==0;if(l){var c=t;o=_e?Mt(Mn(c)):c.appendChild(Cn())}_e&&rs();var f=null,p=!1,h=new Map,v=tc(()=>{var C=n();return Wl(C)?C:C==null?[]:Gl(C)}),g,b;function y(){Wg(b,g,a,h,o,s,e,r,n),i!==null&&(g.length===0?f?oc(f):f=rn(()=>i(o)):f!==null&&Ts(f,()=>{f=null}))}fs(()=>{b??=Ie,g=m(v);var C=g.length;if(p&&C===0)return;p=C===0;let I=!1;if(_e){var S=wh(o)===aa;S!==(C===0)&&(o=Ro(),Mt(o),dn(!1),I=!0)}if(_e){for(var N=null,M,L=0;L<C;L++){if(Ue.nodeType===Qs&&Ue.data===ec){o=Ue,I=!0,dn(!1);break}var A=g[L],k=r(A,L);M=pl(Ue,a,N,null,A,k,L,s,e,n),a.items.set(k,M),N=M}C>0&&Mt(Ro())}if(_e)C===0&&i&&(f=rn(()=>i(o)));else if(Mh()){var R=new Set,O=Ge;for(L=0;L<C;L+=1){A=g[L],k=r(A,L);var U=a.items.get(k)??h.get(k);U?(e&(ia|oa))!==0&&sf(U,A,L,e):(M=pl(null,a,null,null,A,k,L,s,e,n,!0),h.set(k,M)),R.add(k)}for(const[z,K]of a.items)R.has(z)||O.skipped_effects.add(K.e);O.oncommit(y)}else y();I&&dn(!0),m(v)}),_e&&(o=Ue)}function Wg(t,e,n,r,s,i,o,a,l){var c=(o&Wv)!==0,f=(o&(ia|oa))!==0,p=e.length,h=n.items,v=n.first,g=v,b,y=null,C,I=[],S=[],N,M,L,A;if(c)for(A=0;A<p;A+=1)N=e[A],M=a(N,A),L=h.get(M),L!==void 0&&(L.a?.measure(),(C??=new Set).add(L));for(A=0;A<p;A+=1){if(N=e[A],M=a(N,A),L=h.get(M),L===void 0){var k=r.get(M);if(k!==void 0){r.delete(M),h.set(M,k);var R=y?y.next:g;Fn(n,y,k),Fn(n,k,R),La(k,R,s),y=k}else{var O=g?g.e.nodes_start:s;y=pl(O,n,y,y===null?n.first:y.next,N,M,A,i,o,l)}h.set(M,y),I=[],S=[],g=y.next;continue}if(f&&sf(L,N,A,o),(L.e.f&pn)!==0&&(oc(L.e),c&&(L.a?.unfix(),(C??=new Set).delete(L))),L!==g){if(b!==void 0&&b.has(L)){if(I.length<S.length){var U=S[0],z;y=U.prev;var K=I[0],ne=I[I.length-1];for(z=0;z<I.length;z+=1)La(I[z],U,s);for(z=0;z<S.length;z+=1)b.delete(S[z]);Fn(n,K.prev,ne.next),Fn(n,y,K),Fn(n,ne,U),g=U,y=ne,A-=1,I=[],S=[]}else b.delete(L),La(L,g,s),Fn(n,L.prev,L.next),Fn(n,L,y===null?n.first:y.next),Fn(n,y,L),y=L;continue}for(I=[],S=[];g!==null&&g.k!==M;)(g.e.f&pn)===0&&(b??=new Set).add(g),S.push(g),g=g.next;if(g===null)continue;L=g}I.push(L),y=L,g=L.next}if(g!==null||b!==void 0){for(var te=b===void 0?[]:Gl(b);g!==null;)(g.e.f&pn)===0&&te.push(g),g=g.next;var le=te.length;if(le>0){var Ee=(o&gh)!==0&&p===0?s:null;if(c){for(A=0;A<le;A+=1)te[A].a?.measure();for(A=0;A<le;A+=1)te[A].a?.fix()}Hg(n,te,Ee)}}c&&Br(()=>{if(C!==void 0)for(L of C)L.a?.apply()}),t.first=n.first&&n.first.e,t.last=y&&y.e;for(var fe of r.values())St(fe.e);r.clear()}function sf(t,e,n,r){(r&ia)!==0&&$s(t.v,e),(r&oa)!==0?$s(t.i,n):t.i=n}function pl(t,e,n,r,s,i,o,a,l,c,f){var p=(l&ia)!==0,h=(l&Gv)===0,v=p?h?rc(s,!1,!1):$r(s):s,g=(l&oa)===0?o:$r(o),b={i:g,v,k:i,a:null,e:null,prev:n,next:r};try{if(t===null){var y=document.createDocumentFragment();y.append(t=Cn())}return b.e=rn(()=>a(t,v,g,c),_e),b.e.prev=n&&n.e,b.e.next=r&&r.e,n===null?f||(e.first=b):(n.next=b,n.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function La(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,s=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==null&&i!==r;){var o=Wn(i);s.before(i),i=o}}function Fn(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function vt(t,e,n,r,s){_e&&rs();var i=e.$$slots?.[n],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(t,o?()=>r:r)}function ws(t,e,...n){var r=new lc(t);fs(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...n)))},Dr)}function Gg(t,e,n,r,s,i){let o=_e;_e&&rs();var a=null;_e&&Ue.nodeType===Ov&&(a=Ue,rs());var l=_e?Ue:t,c=new lc(l,!1);fs(()=>{const f=e()||null;var p=tg;if(f===null){c.ensure(null,null);return}return c.ensure(f,h=>{if(f){if(a=_e?a:document.createElementNS(p,f),ar(a,a),r){_e&&zg(f)&&a.append(document.createComment(""));var v=_e?Mn(a):a.appendChild(Cn());_e&&(v===null?dn(!1):Mt(v)),r(a,v)}Ie.nodes_end=a,h.before(a)}_e&&Mt(h)}),()=>{}},Dr),Yi(()=>{}),o&&(dn(!0),Mt(l))}function rt(t,e){Qi(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function Kg(t,e){var n=void 0,r;fs(()=>{n!==(n=e())&&(r&&(St(r),r=null),n&&(r=rn(()=>{Qi(()=>n(t))})))})}function of(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=of(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Yg(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=of(t))&&(r&&(r+=" "),r+=e);return r}function Qg(t){return typeof t=="object"?Yg(t):t??""}const Mu=[...` 	
\r\f \v\uFEFF`];function Jg(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var s in n)if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||Mu.includes(r[o-1]))&&(a===r.length||Mu.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Uu(t,e=!1){var n=e?" !important;":";",r="";for(var s in t){var i=t[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Oa(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Xg(t,e){if(e){var n="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Oa)),s&&l.push(...Object.keys(s).map(Oa));var c=0,f=-1;const b=t.length;for(var p=0;p<b;p++){var h=t[p];if(a?h==="/"&&t[p-1]==="*"&&(a=!1):i?i===h&&(i=!1):h==="/"&&t[p+1]==="*"?a=!0:h==='"'||h==="'"?i=h:h==="("?o++:h===")"&&o--,!a&&i===!1&&o===0){if(h===":"&&f===-1)f=p;else if(h===";"||p===b-1){if(f!==-1){var v=Oa(t.substring(c,f).trim());if(!l.includes(v)){h!==";"&&p++;var g=t.substring(c,p).trim();n+=" "+g+";"}}c=p+1,f=-1}}}}return r&&(n+=Uu(r)),s&&(n+=Uu(s,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function yn(t,e,n,r,s,i){var o=t.__className;if(_e||o!==n||o===void 0){var a=Jg(n,r,i);(!_e||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):e?t.className=a:t.setAttribute("class",a)),t.__className=n}else if(i&&s!==i)for(var l in i){var c=!!i[l];(s==null||c!==!!s[l])&&t.classList.toggle(l,c)}return i}function Da(t,e={},n,r){for(var s in n){var i=n[s];e[s]!==i&&(n[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,r))}}function cc(t,e,n,r){var s=t.__style;if(_e||s!==e){var i=Xg(e,r);(!_e||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=e}else r&&(Array.isArray(r)?(Da(t,n?.[0],r[0]),Da(t,n?.[1],r[1],"important")):Da(t,n,r));return r}function $i(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Wl(e))return rg();for(var r of t.options)r.selected=e.includes(yi(r));return}for(r of t.options){var s=yi(r);if(gg(s,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function uc(t){var e=new MutationObserver(()=>{$i(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Yi(()=>{e.disconnect()})}function dc(t,e,n=e){var r=new WeakSet,s=!0;Fh(t,"change",i=>{var o=i?"[selected]":":checked",a;if(t.multiple)a=[].map.call(t.querySelectorAll(o),yi);else{var l=t.querySelector(o)??t.querySelector("option:not([disabled])");a=l&&yi(l)}n(a),Ge!==null&&r.add(Ge)}),Qi(()=>{var i=e();if(t===document.activeElement){var o=_i??Ge;if(r.has(o))return}if($i(t,i,s),s&&i===void 0){var a=t.querySelector(":checked");a!==null&&(i=yi(a),n(i))}t.__value=i,s=!1}),uc(t)}function yi(t){return"__value"in t?t.__value:t.value}const si=Symbol("class"),ii=Symbol("style"),af=Symbol("is custom element"),lf=Symbol("is html");function Fs(t){if(_e){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;Oe(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var s=t.checked;Oe(t,"checked",null),t.checked=s}}};t.__on_r=n,Br(n),Uh()}}function Zg(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Oe(t,e,n,r){var s=cf(t);_e&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=n)&&(e==="loading"&&(t[Lv]=n),n==null?t.removeAttribute(e):typeof n!="string"&&uf(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function e_(t,e,n,r,s=!1,i=!1){if(_e&&s&&t.tagName==="INPUT"){var o=t,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in n||Fs(o)}var l=cf(t),c=l[af],f=!l[lf];let p=_e&&c;p&&dn(!1);var h=e||{},v=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class?n.class=Qg(n.class):n[si]&&(n.class=null),n[ii]&&(n.style??=null);var b=uf(t);for(const A in n){let k=n[A];if(v&&A==="value"&&k==null){t.value=t.__value="",h[A]=k;continue}if(A==="class"){var y=t.namespaceURI==="http://www.w3.org/1999/xhtml";yn(t,y,k,r,e?.[si],n[si]),h[A]=k,h[si]=n[si];continue}if(A==="style"){cc(t,k,e?.[ii],n[ii]),h[A]=k,h[ii]=n[ii];continue}var C=h[A];if(!(k===C&&!(k===void 0&&t.hasAttribute(A)))){h[A]=k;var I=A[0]+A[1];if(I!=="$$")if(I==="on"){const R={},O="$$"+A;let U=A.slice(2);var S=Og(U);if(Ng(U)&&(U=U.slice(0,-7),R.capture=!0),!S&&C){if(k!=null)continue;t.removeEventListener(U,h[O],R),h[O]=null}if(k!=null)if(S)t[`__${U}`]=k,wt([U]);else{let z=function(K){h[A].call(this,K)};var L=z;h[O]=tf(U,t,z,R)}else S&&(t[`__${U}`]=void 0)}else if(A==="style")Oe(t,A,k);else if(A==="autofocus")_g(t,!!k);else if(!c&&(A==="__value"||A==="value"&&k!=null))t.value=t.__value=k;else if(A==="selected"&&v)Zg(t,k);else{var N=A;f||(N=$g(N));var M=N==="defaultValue"||N==="defaultChecked";if(k==null&&!c&&!M)if(l[A]=null,N==="value"||N==="checked"){let R=t;const O=e===void 0;if(N==="value"){let U=R.defaultValue;R.removeAttribute(N),R.defaultValue=U,R.value=R.__value=O?U:null}else{let U=R.defaultChecked;R.removeAttribute(N),R.defaultChecked=U,R.checked=O?U:!1}}else t.removeAttribute(A);else M||b.includes(N)&&(c||typeof k!="string")?(t[N]=k,N in l&&(l[N]=Dt)):typeof k!="function"&&Oe(t,N,k)}}}return p&&dn(!0),h}function Fu(t,e,n=[],r=[],s=[],i,o=!1,a=!1){Ah(s,n,r,l=>{var c=void 0,f={},p=t.nodeName==="SELECT",h=!1;if(fs(()=>{var g=e(...l.map(m)),b=e_(t,c,g,i,o,a);h&&p&&"value"in g&&$i(t,g.value);for(let C of Object.getOwnPropertySymbols(f))g[C]||St(f[C]);for(let C of Object.getOwnPropertySymbols(g)){var y=g[C];C.description===ng&&(!c||y!==c[C])&&(f[C]&&St(f[C]),f[C]=rn(()=>Kg(t,()=>y))),b[C]=y}c=b}),p){var v=t;Qi(()=>{$i(v,c.value,!0),uc(v)})}h=!0})}function cf(t){return t.__attributes??={[af]:t.nodeName.includes("-"),[lf]:t.namespaceURI===eg}}var zu=new Map;function uf(t){var e=t.getAttribute("is")||t.nodeName,n=zu.get(e);if(n)return n;zu.set(e,n=[]);for(var r,s=t,i=Element.prototype;i!==s;){r=fh(s);for(var o in r)r[o].set&&n.push(o);s=Kl(s)}return n}function zs(t,e,n=e){var r=new WeakSet;Fh(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=$a(t)?Ma(i):i,n(i),Ge!==null&&r.add(Ge),await Rg(),i!==(i=e())){var o=t.selectionStart,a=t.selectionEnd,l=t.value.length;if(t.value=i??"",a!==null){var c=t.value.length;o===a&&a===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(a,c))}}}),(_e&&t.defaultValue!==t.value||Hn(e)==null&&t.value)&&(n($a(t)?Ma(t.value):t.value),Ge!==null&&r.add(Ge)),da(()=>{var s=e();if(t===document.activeElement){var i=_i??Ge;if(r.has(i))return}$a(t)&&s===Ma(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function $a(t){var e=t.type;return e==="number"||e==="range"}function Ma(t){return t===""?null:+t}function qu(t,e){return t===e||t?.[Bn]===e}function hc(t={},e,n,r){return Qi(()=>{var s,i;return da(()=>{s=i,i=[],Hn(()=>{t!==n(...i)&&(e(t,...i),s&&qu(n(...s),t)&&e(null,...s))})}),()=>{Br(()=>{i&&qu(n(...i),t)&&e(null,...i)})}}),t}function vn(t=!1){const e=ft,n=e.l.u;if(!n)return;let r=()=>xs(e.s);if(t){let s=0,i={};const o=Ki(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],a=!0);return a&&s++,s});r=()=>m(o)}n.b.length&&Eg(()=>{ju(e,r),To(n.b)}),Ms(()=>{const s=Hn(()=>n.m.map(Rv));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Ms(()=>{ju(e,r),To(n.a)})}function ju(t,e){if(t.l.s)for(const n of t.l.s)m(n);e()}function fc(t,e,n){if(t==null)return e(void 0),n&&n(void 0),fn;const r=Hn(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const ys=[];function t_(t,e){return{subscribe:Xs(t,e).subscribe}}function Xs(t,e=fn){let n=null;const r=new Set;function s(a){if(Eh(t,a)&&(t=a,n)){const l=!ys.length;for(const c of r)c[1](),ys.push(c,t);if(l){for(let c=0;c<ys.length;c+=2)ys[c][0](ys[c+1]);ys.length=0}}}function i(a){s(a(t))}function o(a,l=fn){const c=[a,l];return r.add(c),r.size===1&&(n=e(s,i)||fn),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function n_(t,e,n){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return t_(n,(o,a)=>{let l=!1;const c=[];let f=0,p=fn;const h=()=>{if(f)return;p();const g=e(r?c[0]:c,o,a);i?o(g):p=typeof g=="function"?g:fn},v=s.map((g,b)=>fc(g,y=>{c[b]=y,f&=~(1<<b),l&&h()},()=>{f|=1<<b}));return l=!0,h(),function(){To(v),p(),l=!1}})}function r_(t){let e;return fc(t,n=>e=n)(),e}let po=!1,ml=Symbol();function ot(t,e,n){const r=n[e]??={store:null,source:rc(void 0),unsubscribe:fn};if(r.store!==t&&!(ml in n))if(r.unsubscribe(),r.store=t??null,t==null)r.source.v=void 0,r.unsubscribe=fn;else{var s=!0;r.unsubscribe=fc(t,i=>{s?r.source.v=i:x(r.source,i)}),s=!1}return t&&ml in n?r_(t):m(r.source)}function At(){const t={};function e(){Yi(()=>{for(var n in t)t[n].unsubscribe();Li(t,ml,{enumerable:!1,value:!0})})}return[t,e]}function s_(t){var e=po;try{return po=!1,[t(),po]}finally{po=e}}const i_={get(t,e){if(!t.exclude.includes(e))return m(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){if(!(e in t.special)){var r=Ie;try{In(t.parent_effect),t.special[e]=at({get[e](){return t.props[e]}},e,_h)}finally{In(r)}}return t.special[e](n),cl(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),cl(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function pt(t,e){return new Proxy({props:t,exclude:e,special:{},version:$r(0),parent_effect:Ie},i_)}const o_={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ri(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let s=t.props[r];ri(s)&&(s=s());const i=sr(s,e);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(ri(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=sr(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===Bn||e===Xl)return!1;for(let n of t.props)if(ri(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(ri(n)&&(n=n()),!!n){for(const r in n)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(n))e.includes(r)||e.push(r)}return e}};function kt(...t){return new Proxy({props:t},o_)}function at(t,e,n,r){var s=!Js||(n&Yv)!==0,i=(n&Qv)!==0,o=(n&Jv)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Hn(r):r),a),f;if(i){var p=Bn in t||Xl in t;f=sr(t,e)?.set??(p&&e in t?S=>t[e]=S:void 0)}var h,v=!1;i?[h,v]=s_(()=>t[e]):h=t[e],h===void 0&&r!==void 0&&(h=c(),f&&(s&&qv(),f(h)));var g;if(s?g=()=>{var S=t[e];return S===void 0?c():(l=!0,S)}:g=()=>{var S=t[e];return S!==void 0&&(a=void 0),S===void 0?a:S},s&&(n&_h)===0)return g;if(f){var b=t.$$legacy;return(function(S,N){return arguments.length>0?((!s||!N||b||v)&&f(N?g():S),S):g()})}var y=!1,C=((n&Kv)!==0?Ki:tc)(()=>(y=!1,g()));i&&m(C);var I=Ie;return(function(S,N){if(arguments.length>0){const M=N?m(C):s&&i?Qt(S):S;return x(C,M),y=!0,a!==void 0&&(a=M),S}return ps&&y||(I.f&ir)!==0?C.v:m(C)})}function a_(t){return new l_(t)}class l_{#t;#e;constructor(e){var n=new Map,r=(i,o)=>{var a=rc(o,!1,!1);return n.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return m(n.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Xl?!0:(m(n.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return x(n.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?Bg:ac)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&it(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||Li(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{Vg(this.#e)}}$set(e){this.#e.$set(e)}$on(e,n){this.#t[e]=this.#t[e]||[];const r=(...s)=>n.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let df;typeof HTMLElement=="function"&&(df=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),E(i,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=c_(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),n.default=!0):n[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=wo(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=a_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=xg(()=>{da(()=>{this.$$r=!0;for(const s of Io(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=wo(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=wo(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Io(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function wo(t,e,n,r){const s=n[t]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function c_(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function we(t,e,n,r,s,i){let o=class extends df{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Io(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Io(e).forEach(a=>{Li(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=wo(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var f=sr(c,a)?.get;f?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Li(o.prototype,a,{get(){return this.$$c?.[a]}})}),t.element=o,o}function Ft(t){ft===null&&vh(),Js&&ft.l!==null?u_(ft).m.push(t):Ms(()=>{const e=Hn(t);if(typeof e=="function")return e})}function hf(t){ft===null&&vh(),Ft(()=>()=>Hn(t))}function u_(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const d_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(d_);const h_=()=>{};var Bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Zs(e)},Zs=function(t){return new Error("Firebase Database ("+ff.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},f_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(h=64)),r.push(n[f],n[p],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||p==null)throw new p_;const h=i<<2|a>>4;if(r.push(h),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const g=c<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(t){const e=pf(t);return pc.encodeByteArray(e,!0)},Lo=function(t){return mf(t).replace(/\./g,"")},Oo=function(t){try{return pc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){return vf(void 0,t)}function vf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v_(n)||(t[n]=vf(t[n],e[n]));return t}function v_(t){return t!=="__proto__"}/**
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
 */function g_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const __=()=>g_().__FIREBASE_DEFAULTS__,b_=()=>{if(typeof process>"u"||typeof Bu>"u")return;const t=Bu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},w_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return h_()||__()||b_()||w_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gf=t=>mc()?.emulatorHosts?.[t],_f=t=>{const e=gf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bf=()=>mc()?.config,wf=t=>mc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function yf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}const Ei={};function y_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ei))Ei[e]?t.emulator.push(e):t.prod.push(e);return t}function E_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vu=!1;function gc(t,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Ei[t]===e||Ei[t]||Vu)return;Ei[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=y_().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,v){h.setAttribute("width","24"),h.setAttribute("id",v),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Vu=!0,o()},h}function f(h,v){h.setAttribute("id",v),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function p(){const h=E_(r),v=n("text"),g=document.getElementById(v)||document.createElement("span"),b=n("learnmore"),y=document.getElementById(b)||document.createElement("a"),C=n("preprendIcon"),I=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const S=h.element;a(S),f(y,b);const N=c();l(I,C),S.append(I,g,y,N),document.body.appendChild(S)}i?(g.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function x_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C_(){const t=en();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I_(){return ff.NODE_ADMIN===!0}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function S_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="FirebaseError";class _r extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=A_,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?R_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _r(s,a,r)}}function R_(t,e){return t.replace(P_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const P_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return JSON.parse(t)}function Tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Mi(Oo(i[0])||""),n=Mi(Oo(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},N_=function(t){const e=xf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},L_=function(t){const e=xf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hu(i)&&Hu(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const h=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let p=0;p<80;p++){p<40?p<20?(c=a^i&(o^a),f=1518500249):(c=i^o^a,f=1859775393):p<60?(c=i&o|a&(i|o),f=2400959708):(c=i^o^a,f=3395469782);const h=(s<<5|s>>>27)+c+l+f+r[p]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function D_(t,e){const n=new $_(t,e);return n.subscribe.bind(n)}class $_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");M_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}function ha(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class F_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q_(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:z_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z_(t){return t===Gr?void 0:t}function q_(t){return t.instantiationMode==="EAGER"}/**
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
 */class j_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ke||(Ke={}));const B_={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},V_=Ke.INFO,H_={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},W_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=H_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=V_,this._logHandler=W_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const G_=(t,e)=>e.some(n=>t instanceof n);let Wu,Gu;function K_(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y_(){return Gu||(Gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kf=new WeakMap,gl=new WeakMap,Cf=new WeakMap,Fa=new WeakMap,wc=new WeakMap;function Q_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kf.set(n,t)}).catch(()=>{}),wc.set(e,t),e}function J_(t){if(gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X_(t){_l=t(_l)}function Z_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return Cf.set(r,e.sort?e.sort():[e]),Rr(r)}:Y_().includes(t)?function(...e){return t.apply(za(this),e),Rr(kf.get(this))}:function(...e){return Rr(t.apply(za(this),e))}}function eb(t){return typeof t=="function"?Z_(t):(t instanceof IDBTransaction&&J_(t),G_(t,K_())?new Proxy(t,_l):t)}function Rr(t){if(t instanceof IDBRequest)return Q_(t);if(Fa.has(t))return Fa.get(t);const e=eb(t);return e!==t&&(Fa.set(t,e),wc.set(e,t)),e}const za=t=>wc.get(t);function tb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nb=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],qa=new Map;function Ku(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nb.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return qa.set(e,i),i}X_(t=>({...t,get:(e,n,r)=>Ku(e,n)||t.get(e,n,r),has:(e,n)=>!!Ku(e,n)||t.has(e,n)}));/**
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
 */class sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ib(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ib(t){return t.getComponent()?.type==="VERSION"}const bl="@firebase/app",Yu="0.14.5";/**
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
 */const ur=new bc("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",cb="@firebase/app-check-compat",ub="@firebase/app-check",db="@firebase/auth",hb="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",mb="@firebase/database-compat",vb="@firebase/functions",gb="@firebase/functions-compat",_b="@firebase/installations",bb="@firebase/installations-compat",wb="@firebase/messaging",yb="@firebase/messaging-compat",Eb="@firebase/performance",xb="@firebase/performance-compat",kb="@firebase/remote-config",Cb="@firebase/remote-config-compat",Ib="@firebase/storage",Tb="@firebase/storage-compat",Sb="@firebase/firestore",Ab="@firebase/ai",Rb="@firebase/firestore-compat",Pb="firebase",Nb="12.5.0";/**
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
 */const wl="[DEFAULT]",Lb={[bl]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[ub]:"fire-app-check",[cb]:"fire-app-check-compat",[db]:"fire-auth",[hb]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[mb]:"fire-rtdb-compat",[vb]:"fire-fn",[gb]:"fire-fn-compat",[_b]:"fire-iid",[bb]:"fire-iid-compat",[wb]:"fire-fcm",[yb]:"fire-fcm-compat",[Eb]:"fire-perf",[xb]:"fire-perf-compat",[kb]:"fire-rc",[Cb]:"fire-rc-compat",[Ib]:"fire-gcs",[Tb]:"fire-gcs-compat",[Sb]:"fire-fst",[Rb]:"fire-fst-compat",[Ab]:"fire-vertex","fire-js":"fire-js",[Pb]:"fire-js-all"};/**
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
 */const $o=new Map,Ob=new Map,yl=new Map;function Qu(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(yl.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of $o.values())Qu(n,t);for(const n of Ob.values())Qu(n,t);return!0}function pa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Db={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Zi("app","Firebase",Db);/**
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
 */class $b{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=Nb;function If(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pr.create("bad-app-name",{appName:String(s)});if(n||(n=bf()),!n)throw Pr.create("no-options");const i=$o.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw Pr.create("duplicate-app",{appName:s})}const o=new j_(s);for(const l of yl.values())o.addComponent(l);const a=new $b(n,r,o);return $o.set(s,a),a}function yc(t=wl){const e=$o.get(t);if(!e&&t===wl&&bf())return If();if(!e)throw Pr.create("no-app",{appName:t});return e}function Vn(t,e,n){let r=Lb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(o.join(" "));return}os(new Mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Mb="firebase-heartbeat-database",Ub=1,Ui="firebase-heartbeat-store";let ja=null;function Tf(){return ja||(ja=tb(Mb,Ub,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),ja}async function Fb(t){try{const n=(await Tf()).transaction(Ui),r=await n.objectStore(Ui).get(Sf(t));return await n.done,r}catch(e){if(e instanceof _r)ur.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e?.message});ur.warn(n.message)}}}async function Ju(t,e){try{const r=(await Tf()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,Sf(t)),await r.done}catch(n){if(n instanceof _r)ur.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n?.message});ur.warn(r.message)}}}function Sf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zb=1024,qb=30;class jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>qb){const s=Hb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xu(),{heartbeatsToSend:n,unsentEntries:r}=Bb(this._heartbeatsCache.heartbeats),s=Lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ur.warn(e),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function Bb(t,e=zb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?S_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zu(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function Hb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Wb(t){os(new Mr("platform-logger",e=>new sb(e),"PRIVATE")),os(new Mr("heartbeat",e=>new jb(e),"PRIVATE")),Vn(bl,Yu,t),Vn(bl,Yu,"esm2020"),Vn("fire-js","")}Wb("");var Gb="firebase",Kb="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(Gb,Kb,"app");function Af(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yb=Af,Rf=new Zi("auth","Firebase",Af());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new bc("@firebase/auth");function Qb(t,...e){Mo.logLevel<=Ke.WARN&&Mo.warn(`Auth (${vs}): ${t}`,...e)}function yo(t,...e){Mo.logLevel<=Ke.ERROR&&Mo.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,...e){throw Ec(t,...e)}function mn(t,...e){return Ec(t,...e)}function Pf(t,e,n){const r={...Yb(),[e]:n};return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return Pf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ec(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rf.create(t,...e)}function X(t,e,...n){if(!t)throw Ec(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function hr(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return typeof self<"u"&&self.location?.href||""}function Nf(){return ed()==="http:"||ed()==="https:"}function ed(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nf()||k_()||"connection"in navigator)?navigator.onLine:!0}function Xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=_c()||Ef()}get(){return Jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],t1=new eo(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Sn(t,e,n,r,s={}){return Of(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ms({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...i};return x_()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Vr(t.emulatorConfig.host)&&(c.credentials="include"),Lf.fetch()(await Df(t,t.config.apiHost,n,a),c)})}async function Of(t,e,n){t._canInitEmulator=!1;const r={...Zb,...e};try{const s=new r1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mi(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pf(t,f,c);dr(t,f)}}catch(s){if(s instanceof _r)throw s;dr(t,"network-request-failed",{message:String(s)})}}async function ma(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&dr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Df(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xc(t.config,s):`${t.config.apiScheme}://${s}`;return e1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function n1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class r1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),t1.get())})}}function mi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){return t!==void 0&&t.getResponse!==void 0}function nd(t){return t!==void 0&&t.enterprise!==void 0}class $f{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return n1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(t){return(await Sn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Mf(t,e){return Sn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o1(t,e=!1){const n=gt(t),r=await n.getIdToken(e),s=kc(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:xi(Ba(s.auth_time)),issuedAtTime:xi(Ba(s.iat)),expirationTime:xi(Ba(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ba(t){return Number(t)*1e3}function kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oo(n);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function rd(t){const e=kc(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _r&&a1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function a1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(t){const e=t.auth,n=await t.getIdToken(),r=await js(t,Uo(e,{idToken:n}));X(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Uf(s.providerUserInfo):[],o=u1(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,c=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function c1(t){const e=gt(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Uf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){const n=await Of(t,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Df(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Vr(t.emulatorConfig.host)&&(l.credentials="include"),Lf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h1(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await d1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new As;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new l1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o1(this,e)}reload(){return c1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await js(this,i1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:h,isAnonymous:v,providerData:g,stsTokenManager:b}=n;X(p&&b,e,"internal-error");const y=As.fromJSON(this.name,b);X(typeof p=="string",e,"internal-error"),wr(r,e.name),wr(s,e.name),X(typeof h=="boolean",e,"internal-error"),X(typeof v=="boolean",e,"internal-error"),wr(i,e.name),wr(o,e.name),wr(a,e.name),wr(l,e.name),wr(c,e.name),wr(f,e.name);const C=new On({uid:p,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:f});return g&&Array.isArray(g)&&(C.providerData=g.map(I=>({...I}))),l&&(C._redirectEventId=l),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new As;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Uf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new As;a.updateFromIdToken(r);const l=new On({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map;function tr(t){hr(t instanceof Function,"Expected a class definition");let e=sd.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sd.set(t,e),e)}/**
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
 */class Ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ff.type="NONE";const id=Ff;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uo(this.auth,{idToken:e}).catch(()=>{});return n?On._fromGetAccountInfoResponse(this.auth,n,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(tr(id),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||tr(id);const o=Eo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const h=await Uo(e,{idToken:f}).catch(()=>{});if(!h)break;p=await On._fromGetAccountInfoResponse(e,h,f)}else p=On._fromJSON(e,f);c!==i&&(a=p),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Rs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hf(e))return"Blackberry";if(Wf(e))return"Webos";if(qf(e))return"Safari";if((e.includes("chrome/")||jf(e))&&!e.includes("edge/"))return"Chrome";if(Vf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function zf(t=en()){return/firefox\//i.test(t)}function qf(t=en()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jf(t=en()){return/crios\//i.test(t)}function Bf(t=en()){return/iemobile/i.test(t)}function Vf(t=en()){return/android/i.test(t)}function Hf(t=en()){return/blackberry/i.test(t)}function Wf(t=en()){return/webos/i.test(t)}function Cc(t=en()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function f1(t=en()){return Cc(t)&&!!window.navigator?.standalone}function p1(){return C_()&&document.documentMode===10}function Gf(t=en()){return Cc(t)||Vf(t)||Wf(t)||Hf(t)||/windows phone/i.test(t)||Bf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e=[]){let n;switch(t){case"Browser":n=od(en());break;case"Worker":n=`${od(en())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class m1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function v1(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const g1=6;class _1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??g1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uo(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(En(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Nr(this));const n=e?gt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v1(this),n=new _1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await h1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Qb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hr(t){return gt(t)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=D_(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w1(t){to=t}function Ic(t){return to.loadJS(t)}function y1(){return to.recaptchaV2Script}function E1(){return to.recaptchaEnterpriseScript}function x1(){return to.gapiScript}function Yf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=500,C1=6e4,mo=1e12;class I1{constructor(e){this.auth=e,this.counter=mo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new A1(e,this.auth.name,n||{})),this.counter++,r}reset(e){const n=e||mo;this._widgets.get(n)?.delete(),this._widgets.delete(n)}getResponse(e){const n=e||mo;return this._widgets.get(n)?.getResponse()||""}async execute(e){const n=e||mo;return this._widgets.get(n)?.execute(),""}}class T1{constructor(){this.enterprise=new S1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class S1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class A1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;X(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=R1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},C1)},k1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function R1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const P1="recaptcha-enterprise",ki="NO_RECAPTCHA";class Qf{constructor(e){this.type=P1,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Mf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $f(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(ki)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&nd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=E1();l.length!==0&&(l+=a),Ic(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Va(t,e,n,r=!1,s=!1){const i=new Qf(t);let o;if(s)o=ki;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ha(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Va(t,e,n);return r(t,i).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await Va(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{const i=await Va(t,e,n,!1,!0);return r(t,i)}}async function N1(t){const e=Hr(t),n=await Mf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $f(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Qf(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e){const n=pa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e??{}))return s;dr(s,"already-initialized")}return n.initialize({options:e})}function O1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(tr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function D1(t,e,n){const r=Hr(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jf(e),{host:o,port:a}=$1(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(is(c,r.config.emulator)&&is(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vr(o)?(vc(`${i}//${o}${l}`),gc("Auth",!0)):M1()}function Jf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $1(t){const e=Jf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ld(o)}}}function ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function M1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="http://localhost";class as extends Tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:U1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t,e){return Sn(t,"POST","/v1/accounts:sendVerificationCode",Kn(t,e))}async function F1(t,e){return ma(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,e))}async function z1(t,e){const n=await ma(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,e));if(n.temporaryProof)throw mi(t,"account-exists-with-different-credential",n);return n}const q1={USER_NOT_FOUND:"user-not-found"};async function j1(t,e){const n={...e,operation:"REAUTH"};return ma(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,n),q1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Tc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ci({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ci({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return F1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return z1(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return j1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new Ci({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class no extends Xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends no{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends no{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends no{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=ud(r);return new Bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ud(r);return new Bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends _r{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function Zf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function B1(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",r)}/**
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
 */async function V1(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(Nr(r));const s="reauthenticate";try{const i=await js(t,Zf(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=kc(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Bs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&dr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e,n=!1){if(En(t.app))return Promise.reject(Nr(t));const r="signIn",s=await Zf(t,r,e),i=await Bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function H1(t,e){return ep(Hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=gt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await js(r,W1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function K1(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function Y1(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function tp(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function Q1(t){return gt(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){return Sn(t,"POST","/v2/accounts/mfaEnrollment:start",Kn(t,e))}const qo="__sak";/**
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
 */class np{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=1e3,X1=10;class rp extends np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);p1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rp.type="LOCAL";const Z1=rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sp.type="SESSION";const ip=sp;/**
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
 */function ew(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ew(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Sc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function nw(t){xt().location.href=t}/**
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
 */function Ac(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function rw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sw(){return navigator?.serviceWorker?.controller||null}function iw(){return Ac()?self:null}/**
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
 */const op="firebaseLocalStorageDb",ow=1,jo="firebaseLocalStorage",ap="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function aw(){const t=indexedDB.deleteDatabase(op);return new ro(t).toPromise()}function kl(){const t=indexedDB.open(op,ow);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:ap})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await aw(),e(await kl()))})})}async function hd(t,e,n){const r=ga(t,!0).put({[ap]:e,value:n});return new ro(r).toPromise()}async function lw(t,e){const n=ga(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function fd(t,e){const n=ga(t,!0).delete(e);return new ro(n).toPromise()}const cw=800,uw=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(iw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await rw(),!this.activeServiceWorker)return;this.sender=new tw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kl();return await hd(e,qo,"1"),await fd(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ga(s,!1).getAll();return new ro(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const dw=lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e){return Sn(t,"POST","/v2/accounts/mfaSignIn:start",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=Yf("rcb"),hw=new eo(3e4,6e4);class fw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!xt().grecaptcha?.render}load(e,n=""){return X(pw(n),e,"argument-error"),this.shouldResolveImmediately(n)&&td(xt().grecaptcha)?Promise.resolve(xt().grecaptcha):new Promise((r,s)=>{const i=xt().setTimeout(()=>{s(mn(e,"network-request-failed"))},hw.get());xt()[Wa]=()=>{xt().clearTimeout(i),delete xt()[Wa];const a=xt().grecaptcha;if(!a||!td(a)){s(mn(e,"internal-error"));return}const l=a.render;a.render=(c,f)=>{const p=l(c,f);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${y1()}?${ms({onload:Wa,render:"explicit",hl:n})}`;Ic(o).catch(()=>{clearTimeout(i),s(mn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!xt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function pw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class mw{async load(e){return new I1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="recaptcha",vw={theme:"light",type:"image"};class gw{constructor(e,n,r={...vw}){this.parameters=r,this.type=Ii,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Hr(e),this.isInvisible=this.parameters.size==="invisible",X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;X(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mw:new fw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){X(!this.parameters.sitekey,this.auth,"argument-error"),X(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){X(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){X(Nf()&&!Ac(),this.auth,"internal-error"),await _w(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await s1(this.auth);X(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return X(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function _w(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ci._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ww(t,e,n){if(En(t.app))return Promise.reject(Nr(t));const r=Hr(t),s=await yw(r,e,gt(n));return new bw(s,i=>H1(r,i))}async function yw(t,e,n){if(!t._getRecaptchaConfig())try{await N1(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){X(s.type==="enroll",t,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,i,"mfaSmsEnrollment",async(c,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===ki){X(n?.type===Ii,c,"argument-error");const p=await Ga(c,f,n);return dd(c,p)}return dd(c,f)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{X(s.type==="signin",t,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;X(i,t,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ha(t,o,"mfaSmsSignIn",async(f,p)=>{if(p.phoneSignInInfo.captchaResponse===ki){X(n?.type===Ii,f,"argument-error");const h=await Ga(f,p,n);return pd(f,h)}return pd(f,p)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ha(t,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===ki){X(n?.type===Ii,l,"argument-error");const f=await Ga(l,c,n);return cd(l,f)}return cd(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{n?._reset()}}async function Ga(t,e,n){X(n.type===Ii,t,"argument-error");const r=await n.verify();X(typeof r=="string",t,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function Ew(t,e){return e?tr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rc extends Tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xw(t){return ep(t.auth,new Rc(t),t.bypassAuthState)}function kw(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),V1(n,new Rc(t),t.bypassAuthState)}async function Cw(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),B1(n,new Rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Cw;case"reauthViaPopup":case"reauthViaRedirect":return kw;default:dr(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new eo(2e3,1e4);class Cs extends cp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Iw.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="pendingRedirect",xo=new Map;class Sw extends cp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await Aw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Aw(t,e){const n=Nw(e),r=Pw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Rw(t,e){xo.set(t._key(),e)}function Pw(t){return tr(t._redirectPersistence)}function Nw(t){return Eo(Tw,t.config.apiKey,t.name)}async function Lw(t,e,n=!1){if(En(t.app))return Promise.reject(Nr(t));const r=Hr(t),s=Ew(r,e),o=await new Sw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=600*1e3;class Dw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$w(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!up(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(mn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ow&&this.cachedEventUids.clear(),this.cachedEventUids.has(md(e))}saveEventToCache(e){this.cachedEventUids.add(md(e)),this.lastProcessedEventTime=Date.now()}}function md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function up({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function $w(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fw=/^https?/;async function zw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mw(t);for(const n of e)try{if(qw(n))return}catch{}dr(t,"unauthorized-domain")}function qw(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fw.test(n))return!1;if(Uw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jw=new eo(3e4,6e4);function vd(){const t=xt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bw(t){return new Promise((e,n)=>{function r(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),n(mn(t,"network-request-failed"))},timeout:jw.get()})}if(xt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xt().gapi?.load)r();else{const s=Yf("iframefcb");return xt()[s]=()=>{gapi.load?r():n(mn(t,"network-request-failed"))},Ic(`${x1()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ko=null,e})}let ko=null;function Vw(t){return ko=ko||Bw(t),ko}/**
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
 */const Hw=new eo(5e3,15e3),Ww="__/auth/iframe",Gw="emulator/auth/iframe",Kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qw(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xc(e,Gw):`https://${t.config.authDomain}/${Ww}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=Yw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ms(r).slice(1)}`}async function Jw(t){const e=await Vw(t),n=xt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Qw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},Hw.get());function l(){xt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Xw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zw=500,e0=600,t0="_blank",n0="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r0(t,e,n,r=Zw,s=e0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Xw,width:r.toString(),height:s.toString(),top:i,left:o},c=en().toLowerCase();n&&(a=jf(c)?t0:n),zf(c)&&(e=e||n0,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[v,g])=>`${h}${v}=${g},`,"");if(f1(c)&&a!=="_self")return s0(e||"",a),new gd(null);const p=window.open(e||"",a,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new gd(p)}function s0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const i0="__/auth/handler",o0="emulator/auth/handler",a0=encodeURIComponent("fac");async function _d(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof Xf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof no){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${a0}=${encodeURIComponent(l)}`:"";return`${l0(t)}?${ms(a).slice(1)}${c}`}function l0({config:t}){return t.emulator?xc(t,o0):`https://${t.authDomain}/${i0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class c0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ip,this._completeRedirectFn=Lw,this._overrideRedirectResult=Rw}async _openPopup(e,n,r,s){hr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await _d(e,n,r,El(),s);return r0(e,i,Sc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _d(e,n,r,El(),s);return nw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jw(e),r=new Dw(e);return n.register("authEvent",s=>(X(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},s=>{const i=s?.[0]?.[Ka];i!==void 0&&n(!!i),dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gf()||qf()||Cc()}}const u0=c0;var bd="@firebase/auth",wd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f0(t){os(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kf(t)},c=new b1(r,s,i,l);return O1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Mr("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new d0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(bd,wd,h0(t)),Vn(bd,wd,"esm2020")}/**
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
 */const p0=300,m0=wf("authIdTokenMaxAge")||p0;let yd=null;const v0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m0)return;const s=n?.token;yd!==s&&(yd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function g0(t=yc()){const e=pa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=L1(t,{popupRedirectResolver:u0,persistence:[dw,Z1,ip]}),r=wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=v0(i.toString());Y1(n,o,()=>o(n.currentUser)),K1(n,a=>o(a))}}const s=gf("auth");return s&&D1(n,`http://${s}`),n}function _0(){return document.getElementsByTagName("head")?.[0]??document}w1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f0("Browser");var Ed={};const xd="@firebase/database",kd="1.1.0";/**
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
 */let dp="";function b0(t){dp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w0(e)}}catch{}return new y0},Jr=hp("localStorage"),E0=hp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new bc("@firebase/database"),x0=(function(){let t=1;return function(){return t++}})(),fp=function(t){const e=U_(t),n=new O_;n.update(e);const r=n.digest();return pc.encodeByteArray(r)},so=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=so.apply(null,r):typeof r=="object"?e+=Tt(r):e+=r,e+=" "}return e};let Ti=null,Cd=!0;const k0=function(t,e){$(!0,"Can't turn on custom loggers persistently."),Ns.logLevel=Ke.VERBOSE,Ti=Ns.log.bind(Ns)},$t=function(...t){if(Cd===!0&&(Cd=!1,Ti===null&&E0.get("logging_enabled")===!0&&k0()),Ti){const e=so.apply(null,t);Ti(e)}},io=function(t){return function(...e){$t(t,...e)}},Cl=function(...t){const e="FIREBASE INTERNAL ERROR: "+so(...t);Ns.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${so(...t)}`;throw Ns.error(e),new Error(e)},Zt=function(...t){const e="FIREBASE WARNING: "+so(...t);Ns.warn(e)},C0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},I0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ur="[MIN_NAME]",pr="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===Ur||e===pr)return-1;if(e===Ur||t===pr)return 1;{const n=Id(t),r=Id(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},T0=function(t,e){return t===e?0:t<e?-1:1},oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tt(e))},Nc=function(t){if(typeof t!="object"||t===null)return Tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Tt(e[r]),n+=":",n+=Nc(t[e[r]]);return n+="}",n},pp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ut(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mp=function(t){$(!Pc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const f=c.join("");let p="";for(l=0;l<64;l+=8){let h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),p=p+h}return p.toLowerCase()},S0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function R0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const P0=new RegExp("^-?(0*)\\d{1,10}$"),N0=-2147483648,L0=2147483647,Id=function(t){if(P0.test(t)){const e=Number(t);if(e>=N0&&e<=L0)return e}return null},ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},O0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class D0{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,En(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Zt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zt(e)}}class Co{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Co.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",vp="v",gp="s",_p="r",bp="f",wp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yp="ls",Ep="p",Il="ac",xp="websocket",kp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function M0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ip(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===xp)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M0(t)&&(n.ns=t.namespace);const s=[];return Ut(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.counters_={}}incrementCounter(e,n=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={},Qa={};function Oc(t){const e=t.toString();return Ya[e]||(Ya[e]=new U0),Ya[e]}function F0(t,e){const n=t.toString();return Qa[n]||(Qa[n]=e()),Qa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ei(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="start",q0="close",j0="pLPCommand",B0="pRTLPCB",Tp="id",Sp="pw",Ap="ser",V0="cb",H0="seg",W0="ts",G0="d",K0="dframe",Rp=1870,Pp=30,Y0=Rp-Pp,Q0=25e3,J0=3e4;class Is{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=Oc(n),this.urlFn=l=>(this.appCheckToken&&(l[Il]=this.appCheckToken),Ip(n,kp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new z0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J0)),I0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dc((...i)=>{const[o,a,l,c,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Td)this.id=a,this.password=l;else if(o===q0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Td]="t",r[Ap]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[V0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vp]=Lc,this.transportSessionId&&(r[gp]=this.transportSessionId),this.lastSessionId&&(r[yp]=this.lastSessionId),this.applicationId&&(r[Ep]=this.applicationId),this.appCheckToken&&(r[Il]=this.appCheckToken),typeof location<"u"&&location.hostname&&wp.test(location.hostname)&&(r[_p]=bp);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Is.forceAllow_=!0}static forceDisallow(){Is.forceDisallow_=!0}static isAvailable(){return Is.forceAllow_?!0:!Is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S0()&&!A0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mf(n),s=pp(r,Y0);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[K0]="t",r[Tp]=e,r[Sp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dc{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x0(),window[j0+this.uniqueCallbackIdentifier]=e,window[B0+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$t("frame writing exception"),a.stack&&$t(a.stack),$t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tp]=this.myID,e[Sp]=this.myPW,e[Ap]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pp+r.length<=Rp;){const o=this.pendingSegs.shift();r=r+"&"+H0+s+"="+o.seg+"&"+W0+s+"="+o.ts+"&"+G0+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(Q0)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{$t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=16384,Z0=45e3;let Bo=null;typeof MozWebSocket<"u"?Bo=MozWebSocket:typeof WebSocket<"u"&&(Bo=WebSocket);class Nn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=Oc(n),this.connURL=Nn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[vp]=Lc,typeof location<"u"&&location.hostname&&wp.test(location.hostname)&&(o[_p]=bp),n&&(o[gp]=n),r&&(o[yp]=r),s&&(o[Il]=s),i&&(o[Ep]=i),Ip(e,xp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jr.set("previous_websocket_failure",!0);try{let r;I_(),this.mySock=new Bo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Bo!==null&&!Nn.forceDisallow_}static previouslyFailed(){return Jr.isInMemoryStorage||Jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Mi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pp(n,X0);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{static get ALL_TRANSPORTS(){return[Is,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Nn&&Nn.isAvailable();let r=n&&!Nn.previouslyFailed();if(e.webSocketOnly&&(n||Zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nn];else{const s=this.transports_=[];for(const i of Fi.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=6e4,ty=5e3,ny=10*1024,ry=100*1024,Ja="t",Sd="d",sy="s",Ad="r",iy="e",Rd="o",Pd="a",Nd="n",Ld="p",oy="h";class ay{constructor(e,n,r,s,i,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ry?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ny?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===Pd?this.upgradeIfSecondaryHealthy_():n===Ad?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oi("t",e),r=oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ld,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oi("t",e),r=oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oi(Ja,e);if(Sd in e){const r=e[Sd];if(n===oy){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Nd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sy?this.onConnectionShutdown_(r):n===Ad?this.onReset_(r):n===iy?Cl("Server Error: "+r):n===Rd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lc!==r&&Zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ey))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ty))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ld,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends Lp{static getInstance(){return new Vo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_c()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=32,Dd=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Be(){return new We("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function Je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function $c(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ly(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Op(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function ht(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof We)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new We(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=Ae(t),r=Ae(e);if(n===null)return e;if(n===r)return Xt(Je(t),Je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cy(t,e){const n=zi(t,0),r=zi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=gs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Mc(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function xn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uy{constructor(e,n){this.errorPrefix_=n,this.parts_=zi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fa(this.parts_[r]);Dp(this)}}function dy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fa(e),Dp(t)}function hy(t){const e=t.parts_.pop();t.byteLength_-=fa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dp(t){if(t.byteLength_>Dd)throw new Error(t.errorPrefix_+"has a key path longer than "+Dd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Od)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Od+") or object contains a cycle "+Kr(t))}function Kr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Lp{static getInstance(){return new Uc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1e3,fy=300*1e3,$d=30*1e3,py=1.3,my=3e4,vy="server_kill",Md=3;class lr extends Np{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=lr.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=fy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Tt(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Xi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;lr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gn(e,"w")){const r=qs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||L_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$d)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=N_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cl("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>my&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*py)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+lr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(p){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?$t("getToken() completed but was canceled"):($t("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=h&&h.token,a=new ay(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Zt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(vy)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Zt(p),l())}}}interrupt(e){$t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vl(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Nc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new We(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){$t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Md&&(this.reconnectDelay_=$d,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Md&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dp.replace(/\./g,"-")]=1,_c()?e["framework.cordova"]=1:Ef()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vo.getInstance().currentlyOnline();return vl(this.interruptReasons_)&&e}}lr.nextPersistentConnectionId_=0;lr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Pe(Ur,e),s=new Pe(Ur,n);return this.compare(r,s)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class $p extends _a{static get __EMPTY_NODE(){return vo}static set __EMPTY_NODE(e){vo=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw Zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(pr,vo)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,vo)}toString(){return".key"}}const cr=new $p;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=s??on.EMPTY_NODE,this.right=i??on.EMPTY_NODE}copy(e,n,r,s,i){return new Nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return on.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return on.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Nt.RED=!0;Nt.BLACK=!1;class gy{copy(e,n,r,s,i){return this}insert(e,n,r){return new Nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class on{constructor(e,n=on.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new on(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Nt.BLACK,null,null))}remove(e){return new on(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new go(this.root_,null,this.comparator_,!0,e)}}on.EMPTY_NODE=new gy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e){return gs(t.name,e.name)}function Fc(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function by(t){Tl=t}const Mp=function(t){return typeof t=="number"?"number:"+mp(t):"string:"+t},Up=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else $(t===Tl||t.isEmpty(),"priority of unexpected type.");$(t===Tl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;class Pt{static set __childrenNodeConstructor(e){Ud=e}static get __childrenNodeConstructor(){return Ud}constructor(e,n=Pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Up(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:Ae(e)===".priority"?this.priorityNode_:Pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mp(this.value_):e+=this.value_,this.lazyHash_=fp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Pt.VALUE_TYPE_ORDER.indexOf(n),i=Pt.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fp,zp;function wy(t){Fp=t}function yy(t){zp=t}class Ey extends _a{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?gs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(pr,new Pt("[PRIORITY-POST]",zp))}makePost(e,n){const r=Fp(e);return new Pe(n,new Pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const lt=new Ey;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=Math.log(2);class ky{constructor(e){const n=i=>parseInt(Math.log(i)/xy,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ho=function(t,e,n,r){t.sort(e);const s=function(l,c){const f=c-l;let p,h;if(f===0)return null;if(f===1)return p=t[l],h=n?n(p):p,new Nt(h,p.node,Nt.BLACK,null,null);{const v=parseInt(f/2,10)+l,g=s(l,v),b=s(v+1,c);return p=t[v],h=n?n(p):p,new Nt(h,p.node,Nt.BLACK,g,b)}},i=function(l){let c=null,f=null,p=t.length;const h=function(g,b){const y=p-g,C=p;p-=g;const I=s(y+1,C),S=t[y],N=n?n(S):S;v(new Nt(N,S.node,b,null,I))},v=function(g){c?(c.left=g,c=g):(f=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));b?h(y,Nt.BLACK):(h(y,Nt.BLACK),h(y,Nt.RED))}return f},o=new ky(t.length),a=i(o);return new on(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;const Es={};class nr{static get Default(){return $(Es&&lt,"ChildrenNode.ts has not been loaded"),Xa=Xa||new nr({".priority":Es},{".priority":lt}),Xa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof on?n:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ho(r,e.getCompare()):a=Es;const l=e.toString(),c={...this.indexSet_};c[l]=e;const f={...this.indexes_};return f[l]=a,new nr(f,c)}addToIndexes(e,n){const r=Do(this.indexes_,(s,i)=>{const o=qs(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===Es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ho(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Do(this.indexes_,s=>{if(s===Es)return s;{const i=n.get(e.name);return i?s.remove(new Pe(e.name,i)):s}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class me{static get EMPTY_NODE(){return li||(li=new me(new on(Fc),null,nr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Up(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(Je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Pe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?li:this.priorityNode_;return new me(s,o,i)}}updateChild(e,n){const r=Ae(e);if(r===null)return n;{$(Ae(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Je(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(lt,(o,a)=>{n[o]=a.val(e),r++,i&&me.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mp(this.getPriority().val())+":"),this.forEachChild(lt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":fp(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(lt),s=n.getIterator(lt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cy extends me{constructor(){super(new on(Fc),me.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return me.EMPTY_NODE}isEmpty(){return!1}}const oo=new Cy;Object.defineProperties(Pe,{MIN:{value:new Pe(Ur,me.EMPTY_NODE)},MAX:{value:new Pe(pr,oo)}});$p.__EMPTY_NODE=me.EMPTY_NODE;Pt.__childrenNodeConstructor=me;by(oo);yy(oo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=!0;function It(t,e=null){if(t===null)return me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pt(n,It(e))}if(!(t instanceof Array)&&Iy){const n=[];let r=!1;if(Ut(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=It(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Pe(o,l)))}}),n.length===0)return me.EMPTY_NODE;const i=Ho(n,_y,o=>o.name,Fc);if(r){const o=Ho(n,lt.getCompare());return new me(i,It(e),new nr({".priority":o},{".priority":lt}))}else return new me(i,It(e),nr.Default)}else{let n=me.EMPTY_NODE;return Ut(t,(r,s)=>{if(Gn(t,r)&&r.substring(0,1)!=="."){const i=It(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(It(e))}}wy(It);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends _a{constructor(e){super(),this.indexPath_=e,$(!Re(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?gs(e.name,n.name):i}makePost(e,n){const r=It(e),s=me.EMPTY_NODE.updateChild(this.indexPath_,r);return new Pe(n,s)}maxPost(){const e=me.EMPTY_NODE.updateChild(this.indexPath_,oo);return new Pe(pr,e)}toString(){return zi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty extends _a{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const r=It(e);return new Pe(n,r)}toString(){return".value"}}const qp=new Ty;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){return{type:"value",snapshotNode:t}}function Vs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ji(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qi(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vs(n,r)):o.trackChildChange(ji(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(lt,(s,i)=>{n.hasChild(s)||r.trackChildChange(qi(s,i))}),n.isLeafNode()||n.forEachChild(lt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ji(s,i,o))}else r.trackChildChange(Vs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?me.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.indexedFilter_=new qc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bi.getStartPost_(e),this.endPost_=Bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new Pe(n,r))||(r=me.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=me.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(me.EMPTY_NODE);const i=this;return n.forEachChild(lt,(o,a)=>{i.matches(new Pe(o,a))||(s=s.updateImmediateChild(o,me.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new Pe(n,r))||(r=me.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=me.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=me.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(me.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,me.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(h,v)=>p(v,h)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new Pe(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const p=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,l);if(f&&!r.isEmpty()&&v>=0)return i?.trackChildChange(ji(n,r,p)),a.updateImmediateChild(n,r);{i?.trackChildChange(qi(n,p));const b=a.updateImmediateChild(n,me.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i?.trackChildChange(Vs(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return r.isEmpty()?e:f&&o(c,l)>=0?(i!=null&&(i.trackChildChange(qi(c.name,c.node)),i.trackChildChange(Vs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,me.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ur}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ry(t){return t.loadsAllData()?new qc(t.getIndex()):t.hasLimit()?new Ay(t):new Bi(t)}function Py(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Ny(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Fd(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Ly(t,e,n){let r;return t.index_===cr||n?r=Fd(t,e,n):r=Fd(t,e,pr),r.startAfterSet_=!0,r}function zd(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Oy(t,e,n){let r;return t.index_===cr||n?r=zd(t,e,n):r=zd(t,e,Ur),r.endBeforeSet_=!0,r}function Dy(t,e){const n=t.copy();return n.index_=e,n}function qd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===lt?n="$priority":t.index_===qp?n="$value":t.index_===cr?n="$key":($(t.index_ instanceof zc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Np{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=io("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Wo.getListenId_(e,r),a={};this.listens_[o]=a;const l=qd(e._queryParams);this.restRequest_(i+".json",l,(c,f)=>{let p=f;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(i,p,!1,r),qs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const r=Wo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qd(e._queryParams),r=e._path.toString(),s=new Xi;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ms(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mi(a.responseText)}catch{Zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.rootNode_=me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){return{value:null,children:new Map}}function Bp(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ae(e);t.children.has(r)||t.children.set(r,Go());const s=t.children.get(r);e=Je(e),Bp(s,e,n)}}function Sl(t,e,n){t.value!==null?n(e,t.value):My(t,(r,s)=>{const i=new We(e.toString()+"/"+r);Sl(s,i,n)})}function My(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ut(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=10*1e3,Fy=30*1e3,zy=300*1e3;class qy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Uy(e);const r=Bd+(Fy-Bd)*Math.random();Si(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ut(e,(s,i)=>{i>0&&Gn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*zy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function Bc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dn.ACK_USER_WRITE,this.source=Bc()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new Ko(Be(),n,this.revert)}}else return $(Ae(this.path)===e,"operationForChild called for unrelated child."),new Ko(Je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.source=e,this.path=n,this.type=Dn.LISTEN_COMPLETE}operationForChild(e){return Re(this.path)?new Vi(this.source,Be()):new Vi(this.source,Je(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dn.OVERWRITE}operationForChild(e){return Re(this.path)?new ls(this.source,Be(),this.snap.getImmediateChild(e)):new ls(this.source,Je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dn.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new ls(this.source,Be(),n.value):new Hs(this.source,Be(),n)}else return $(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hs(this.source,Je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function By(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Sy(o.childName,o.snapshotNode))}),ci(t,s,"child_removed",e,r,n),ci(t,s,"child_added",e,r,n),ci(t,s,"child_moved",i,r,n),ci(t,s,"child_changed",e,r,n),ci(t,s,"value",e,r,n),s}function ci(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Hy(t,a,l)),o.forEach(a=>{const l=Vy(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hy(t,e,n){if(e.childName==null||n.childName==null)throw Zs("Should only compare child_ events.");const r=new Pe(e.childName,e.snapshotNode),s=new Pe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return{eventCache:t,serverCache:e}}function Ai(t,e,n,r){return ba(new zr(e,n,r),t.serverCache)}function Vp(t,e,n,r){return ba(t.eventCache,new zr(e,n,r))}function Yo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const Wy=()=>(Za||(Za=new on(T0)),Za);class Qe{static fromObject(e){let n=new Qe(null);return Ut(e,(r,s)=>{n=n.set(new We(r),s)}),n}constructor(e,n=Wy()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Be(),value:this.value};if(Re(e))return null;{const r=Ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Je(e),n);return i!=null?{path:ht(new We(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=Ae(e),r=this.children.get(n);return r!==null?r.subtree(Je(e)):new Qe(null)}}set(e,n){if(Re(e))return new Qe(n,this.children);{const r=Ae(e),i=(this.children.get(r)||new Qe(null)).set(Je(e),n),o=this.children.insert(r,i);return new Qe(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Qe(null):new Qe(null,this.children);{const n=Ae(e),r=this.children.get(n);if(r){const s=r.remove(Je(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Qe(null):new Qe(this.value,i)}else return this}}get(e){if(Re(e))return this.value;{const n=Ae(e),r=this.children.get(n);return r?r.get(Je(e)):null}}setTree(e,n){if(Re(e))return n;{const r=Ae(e),i=(this.children.get(r)||new Qe(null)).setTree(Je(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Qe(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ht(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Be(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Re(e))return null;{const i=Ae(e),o=this.children.get(i);return o?o.findOnPath_(Je(e),ht(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Be(),n)}foreachOnPath_(e,n,r){if(Re(e))return this;{this.value&&r(n,this.value);const s=Ae(e),i=this.children.get(s);return i?i.foreachOnPath_(Je(e),ht(n,s),r):new Qe(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ht(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.writeTree_=e}static empty(){return new $n(new Qe(null))}}function Ri(t,e,n){if(Re(e))return new $n(new Qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Xt(s,e);return i=i.updateChild(o,n),new $n(t.writeTree_.set(s,i))}else{const s=new Qe(n),i=t.writeTree_.setTree(e,s);return new $n(i)}}}function Al(t,e,n){let r=t;return Ut(n,(s,i)=>{r=Ri(r,ht(e,s),i)}),r}function Vd(t,e){if(Re(e))return $n.empty();{const n=t.writeTree_.setTree(e,new Qe(null));return new $n(n)}}function Rl(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function Hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(lt,(r,s)=>{e.push(new Pe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Pe(r,s.value))}),e}function Lr(t,e){if(Re(e))return t;{const n=_s(t,e);return n!=null?new $n(new Qe(n)):new $n(t.writeTree_.subtree(e))}}function Pl(t){return t.writeTree_.isEmpty()}function Ws(t,e){return Hp(Be(),t.writeTree_,e)}function Hp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Hp(ht(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ht(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e){return Yp(e,t)}function Gy(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ri(t.visibleWrites,e,n)),t.lastWriteId=r}function Ky(t,e,n,r){$(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Al(t.visibleWrites,e,n),t.lastWriteId=r}function Yy(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Qy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Jy(a,r.path)?s=!1:xn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Xy(t),!0;if(r.snap)t.visibleWrites=Vd(t.visibleWrites,r.path);else{const a=r.children;Ut(a,l=>{t.visibleWrites=Vd(t.visibleWrites,ht(r.path,l))})}return!0}else return!1}function Jy(t,e){if(t.snap)return xn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xn(ht(t.path,n),e))return!0;return!1}function Xy(t){t.visibleWrites=Wp(t.allWrites,Zy,Be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Zy(t){return t.visible}function Wp(t,e,n){let r=$n.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)xn(n,o)?(a=Xt(n,o),r=Ri(r,a,i.snap)):xn(o,n)&&(a=Xt(o,n),r=Ri(r,Be(),i.snap.getChild(a)));else if(i.children){if(xn(n,o))a=Xt(n,o),r=Al(r,a,i.children);else if(xn(o,n))if(a=Xt(o,n),Re(a))r=Al(r,Be(),i.children);else{const l=qs(i.children,Ae(a));if(l){const c=l.getChild(Je(a));r=Ri(r,Be(),c)}}}else throw Zs("WriteRecord should have .snap or .children")}}return r}function Gp(t,e,n,r,s){if(!r&&!s){const i=_s(t.visibleWrites,e);if(i!=null)return i;{const o=Lr(t.visibleWrites,e);if(Pl(o))return n;if(n==null&&!Rl(o,Be()))return null;{const a=n||me.EMPTY_NODE;return Ws(o,a)}}}else{const i=Lr(t.visibleWrites,e);if(!s&&Pl(i))return n;if(!s&&n==null&&!Rl(i,Be()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(xn(c.path,e)||xn(e,c.path))},a=Wp(t.allWrites,o,e),l=n||me.EMPTY_NODE;return Ws(a,l)}}}function eE(t,e,n){let r=me.EMPTY_NODE;const s=_s(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(lt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Lr(t.visibleWrites,e);return n.forEachChild(lt,(o,a)=>{const l=Ws(Lr(i,new We(o)),a);r=r.updateImmediateChild(o,l)}),Hd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Lr(t.visibleWrites,e);return Hd(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tE(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ht(e,n);if(Rl(t.visibleWrites,i))return null;{const o=Lr(t.visibleWrites,i);return Pl(o)?s.getChild(n):Ws(o,s.getChild(n))}}function nE(t,e,n,r){const s=ht(e,n),i=_s(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Lr(t.visibleWrites,s);return Ws(o,r.getNode().getImmediateChild(n))}else return null}function rE(t,e){return _s(t.visibleWrites,e)}function sE(t,e,n,r,s,i,o){let a;const l=Lr(t.visibleWrites,e),c=_s(l,Be());if(c!=null)a=c;else if(n!=null)a=Ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],p=o.getCompare(),h=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=h.getNext();for(;v&&f.length<s;)p(v,r)!==0&&f.push(v),v=h.getNext();return f}else return[]}function iE(){return{visibleWrites:$n.empty(),allWrites:[],lastWriteId:-1}}function Qo(t,e,n,r){return Gp(t.writeTree,t.treePath,e,n,r)}function Wc(t,e){return eE(t.writeTree,t.treePath,e)}function Wd(t,e,n,r){return tE(t.writeTree,t.treePath,e,n,r)}function Jo(t,e){return rE(t.writeTree,ht(t.treePath,e))}function oE(t,e,n,r,s,i){return sE(t.writeTree,t.treePath,e,n,r,s,i)}function Gc(t,e,n){return nE(t.writeTree,t.treePath,e,n)}function Kp(t,e){return Yp(ht(t.treePath,e),t.writeTree)}function Yp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ji(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,qi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Vs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ji(r,e.snapshotNode,s.oldSnap));else throw Zs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Qp=new lE;class Kc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cs(this.viewCache_),i=oE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){return{filter:t}}function uE(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dE(t,e,n,r,s){const i=new aE;let o,a;if(n.type===Dn.OVERWRITE){const c=n;c.source.fromUser?o=Nl(t,e,c.path,c.snap,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Re(c.path),o=Xo(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Dn.MERGE){const c=n;c.source.fromUser?o=fE(t,e,c.path,c.children,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ll(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Dn.ACK_USER_WRITE){const c=n;c.revert?o=vE(t,e,c.path,r,s,i):o=pE(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Dn.LISTEN_COMPLETE)o=mE(t,e,n.path,r,i);else throw Zs("Unknown operation type: "+n.type);const l=i.getChanges();return hE(e,o,l),{viewCache:o,changes:l}}function hE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Yo(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(jp(Yo(e)))}}function Jp(t,e,n,r,s,i){const o=e.eventCache;if(Jo(r,n)!=null)return e;{let a,l;if(Re(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cs(e),f=c instanceof me?c:me.EMPTY_NODE,p=Wc(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const c=Qo(r,cs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Ae(n);if(c===".priority"){$(Fr(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=Wd(r,n,f,l);p!=null?a=t.filter.updatePriority(f,p):a=o.getNode()}else{const f=Je(n);let p;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Wd(r,n,o.getNode(),l);h!=null?p=o.getNode().getImmediateChild(c).updateChild(f,h):p=o.getNode().getImmediateChild(c)}else p=Gc(r,c,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),c,p,f,s,i):a=o.getNode()}}return Ai(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function Xo(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(Re(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),v,null)}else{const v=Ae(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const g=Je(n),y=l.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?c=f.updatePriority(l.getNode(),y):c=f.updateChild(l.getNode(),v,y,g,Qp,null)}const p=Vp(e,c,l.isFullyInitialized()||Re(n),f.filtersNodes()),h=new Kc(s,p,i);return Jp(t,p,n,s,h,a)}function Nl(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const f=new Kc(s,e,i);if(Re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ai(e,c,!0,t.filter.filtersNodes());else{const p=Ae(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ai(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Je(n),v=a.getNode().getImmediateChild(p);let g;if(Re(h))g=r;else{const b=f.getCompleteChild(p);b!=null?$c(h)===".priority"&&b.getChild(Op(h)).isEmpty()?g=b:g=b.updateChild(h,r):g=me.EMPTY_NODE}if(v.equals(g))l=e;else{const b=t.filter.updateChild(a.getNode(),p,g,h,f,o);l=Ai(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Gd(t,e){return t.eventCache.isCompleteForChild(e)}function fE(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const f=ht(n,l);Gd(e,Ae(f))&&(a=Nl(t,a,f,c,s,i,o))}),r.foreach((l,c)=>{const f=ht(n,l);Gd(e,Ae(f))||(a=Nl(t,a,f,c,s,i,o))}),a}function Kd(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ll(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Re(n)?c=r:c=new Qe(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((p,h)=>{if(f.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),g=Kd(t,v,h);l=Xo(t,l,new We(p),g,s,i,o,a)}}),c.children.inorderTraversal((p,h)=>{const v=!e.serverCache.isCompleteForChild(p)&&h.value===null;if(!f.hasChild(p)&&!v){const g=e.serverCache.getNode().getImmediateChild(p),b=Kd(t,g,h);l=Xo(t,l,new We(p),b,s,i,o,a)}}),l}function pE(t,e,n,r,s,i,o){if(Jo(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xo(t,e,n,l.getNode().getChild(n),s,i,a,o);if(Re(n)){let c=new Qe(null);return l.getNode().forEachChild(cr,(f,p)=>{c=c.set(new We(f),p)}),Ll(t,e,n,c,s,i,a,o)}else return e}else{let c=new Qe(null);return r.foreach((f,p)=>{const h=ht(n,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),Ll(t,e,n,c,s,i,a,o)}}function mE(t,e,n,r,s){const i=e.serverCache,o=Vp(e,i.getNode(),i.isFullyInitialized()||Re(n),i.isFiltered());return Jp(t,o,n,r,Qp,s)}function vE(t,e,n,r,s,i){let o;if(Jo(r,n)!=null)return e;{const a=new Kc(r,e,s),l=e.eventCache.getNode();let c;if(Re(n)||Ae(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Qo(r,cs(e));else{const p=e.serverCache.getNode();$(p instanceof me,"serverChildren would be complete if leaf node"),f=Wc(r,p)}f=f,c=t.filter.updateFullNode(l,f,i)}else{const f=Ae(n);let p=Gc(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?c=t.filter.updateChild(l,f,p,Je(n),a,i):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,me.EMPTY_NODE,Je(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qo(r,cs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Jo(r,Be())!=null,Ai(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new qc(r.getIndex()),i=Ry(r);this.processor_=cE(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(me.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(me.EMPTY_NODE,a.getNode(),null),f=new zr(l,o.isFullyInitialized(),s.filtersNodes()),p=new zr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ba(p,f),this.eventGenerator_=new jy(this.query_)}get query(){return this.query_}}function _E(t){return t.viewCache_.serverCache.getNode()}function bE(t){return Yo(t.viewCache_)}function wE(t,e){const n=cs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function Yd(t){return t.eventRegistrations_.length===0}function yE(t,e){t.eventRegistrations_.push(e)}function Qd(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Jd(t,e,n,r){e.type===Dn.MERGE&&e.source.queryId!==null&&($(cs(t.viewCache_),"We should always have a full cache before handling merges"),$(Yo(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=dE(t.processor_,s,e,n,r);return uE(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Xp(t,i.changes,i.viewCache.eventCache.getNode(),null)}function EE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(lt,(i,o)=>{r.push(Vs(i,o))}),n.isFullyInitialized()&&r.push(jp(n.getNode())),Xp(t,r,n.getNode(),e)}function Xp(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return By(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class Zp{constructor(){this.views=new Map}}function xE(t){$(!Zo,"__referenceConstructor has already been defined"),Zo=t}function kE(){return $(Zo,"Reference.ts has not been loaded"),Zo}function CE(t){return t.views.size===0}function Yc(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),Jd(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Jd(o,e,n,r));return i}}function em(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Qo(n,s?r:null),l=!1;a?l=!0:r instanceof me?(a=Wc(n,r),l=!1):(a=me.EMPTY_NODE,l=!1);const c=ba(new zr(a,l,!1),new zr(r,s,!1));return new gE(e,c)}return o}function IE(t,e,n,r,s,i){const o=em(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yE(o,n),EE(o,n)}function TE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=qr(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Qd(c,n,r)),Yd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Qd(l,n,r)),Yd(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!qr(t)&&i.push(new(kE())(e._repo,e._path)),{removed:i,events:o}}function tm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||wE(r,e);return n}function nm(t,e){if(e._queryParams.loadsAllData())return ya(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rm(t,e){return nm(t,e)!=null}function qr(t){return ya(t)!=null}function ya(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;function SE(t){$(!ea,"__referenceConstructor has already been defined"),ea=t}function AE(){return $(ea,"Reference.ts has not been loaded"),ea}let RE=1;class Xd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Qe(null),this.pendingWriteTree_=iE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sm(t,e,n,r,s){return Gy(t.pendingWriteTree_,e,n,r,s),s?ti(t,new ls(Bc(),e,n)):[]}function PE(t,e,n,r){Ky(t.pendingWriteTree_,e,n,r);const s=Qe.fromObject(n);return ti(t,new Hs(Bc(),e,s))}function Tr(t,e,n=!1){const r=Yy(t.pendingWriteTree_,e);if(Qy(t.pendingWriteTree_,e)){let i=new Qe(null);return r.snap!=null?i=i.set(Be(),!0):Ut(r.children,o=>{i=i.set(new We(o),!0)}),ti(t,new Ko(r.path,i,n))}else return[]}function ao(t,e,n){return ti(t,new ls(Vc(),e,n))}function NE(t,e,n){const r=Qe.fromObject(n);return ti(t,new Hs(Vc(),e,r))}function LE(t,e){return ti(t,new Vi(Vc(),e))}function OE(t,e,n){const r=Jc(t,n);if(r){const s=Xc(r),i=s.path,o=s.queryId,a=Xt(i,e),l=new Vi(Hc(o),a);return Zc(t,i,l)}else return[]}function ta(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||rm(o,e))){const l=TE(o,e,n,r);CE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(i,(h,v)=>qr(v));if(f&&!p){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const v=ME(h);for(let g=0;g<v.length;++g){const b=v[g],y=b.query,C=lm(t,b);t.listenProvider_.startListening(Pi(y),Hi(t,y),C.hashFn,C.onComplete)}}}!p&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(Pi(e),null):c.forEach(h=>{const v=t.queryToTagMap.get(Ea(h));t.listenProvider_.stopListening(Pi(h),v)}))}UE(t,c)}return a}function im(t,e,n,r){const s=Jc(t,r);if(s!=null){const i=Xc(s),o=i.path,a=i.queryId,l=Xt(o,e),c=new ls(Hc(a),l,n);return Zc(t,o,c)}else return[]}function DE(t,e,n,r){const s=Jc(t,r);if(s){const i=Xc(s),o=i.path,a=i.queryId,l=Xt(o,e),c=Qe.fromObject(n),f=new Hs(Hc(a),l,c);return Zc(t,o,f)}else return[]}function Ol(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,v)=>{const g=Xt(h,s);i=i||Or(v,g),o=o||qr(v)});let a=t.syncPointTree_.get(s);a?(o=o||qr(a),i=i||Or(a,Be())):(a=new Zp,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=me.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((v,g)=>{const b=Or(g,Be());b&&(i=i.updateImmediateChild(v,b))}));const c=rm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ea(e);$(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=FE();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const f=wa(t.pendingWriteTree_,s);let p=IE(a,e,n,f,i,l);if(!c&&!o&&!r){const h=nm(a,e);p=p.concat(zE(t,e,h))}return p}function Qc(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xt(o,e),c=Or(a,l);if(c)return c});return Gp(s,e,i,n,!0)}function $E(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const p=Xt(c,n);r=r||Or(f,p)});let s=t.syncPointTree_.get(n);s?r=r||Or(s,Be()):(s=new Zp,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new zr(r,!0,!1):null,a=wa(t.pendingWriteTree_,e._path),l=em(s,e,a,i?o.getNode():me.EMPTY_NODE,i);return bE(l)}function ti(t,e){return om(e,t.syncPointTree_,null,wa(t.pendingWriteTree_,Be()))}function om(t,e,n,r){if(Re(t.path))return am(t,e,n,r);{const s=e.get(Be());n==null&&s!=null&&(n=Or(s,Be()));let i=[];const o=Ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=Kp(r,o);i=i.concat(om(a,l,c,f))}return s&&(i=i.concat(Yc(s,t,r,n))),i}}function am(t,e,n,r){const s=e.get(Be());n==null&&s!=null&&(n=Or(s,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Kp(r,o),f=t.operationForChild(o);f&&(i=i.concat(am(f,a,l,c)))}),s&&(i=i.concat(Yc(s,t,r,n))),i}function lm(t,e){const n=e.query,r=Hi(t,n);return{hashFn:()=>(_E(e)||me.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?OE(t,n._path,r):LE(t,n._path);{const i=R0(s,n);return ta(t,n,null,i)}}}}function Hi(t,e){const n=Ea(e);return t.queryToTagMap.get(n)}function Ea(t){return t._path.toString()+"$"+t._queryIdentifier}function Jc(t,e){return t.tagToQueryMap.get(e)}function Xc(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function Zc(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=wa(t.pendingWriteTree_,e);return Yc(r,n,s,null)}function ME(t){return t.fold((e,n,r)=>{if(n&&qr(n))return[ya(n)];{let s=[];return n&&(s=tm(n)),Ut(r,(i,o)=>{s=s.concat(o)}),s}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(AE())(t._repo,t._path):t}function UE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ea(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function FE(){return RE++}function zE(t,e,n){const r=e._path,s=Hi(t,e),i=lm(t,n),o=t.listenProvider_.startListening(Pi(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,p)=>{if(!Re(c)&&f&&qr(f))return[ya(f).query];{let h=[];return f&&(h=h.concat(tm(f).map(v=>v.query))),Ut(p,(v,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(Pi(f),Hi(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eu(n)}node(){return this.node_}}class tu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ht(this.path_,e);return new tu(this.syncTree_,n)}node(){return Qc(this.syncTree_,this.path_)}}const qE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zd=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BE(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},BE=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},cm=function(t,e,n,r){return nu(e,new tu(n,t),r)},um=function(t,e,n){return nu(t,new eu(e),n)};function nu(t,e,n){const r=t.getPriority().val(),s=Zd(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Zd(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Pt(a,It(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Pt(s))),o.forEachChild(lt,(a,l)=>{const c=nu(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function su(t,e){let n=e instanceof We?e:new We(e),r=t,s=Ae(n);for(;s!==null;){const i=qs(r.node.children,s)||{children:{},childCount:0};r=new ru(s,r,i),n=Je(n),s=Ae(n)}return r}function ni(t){return t.node.value}function dm(t,e){t.node.value=e,Dl(t)}function hm(t){return t.node.childCount>0}function VE(t){return ni(t)===void 0&&!hm(t)}function xa(t,e){Ut(t.node.children,(n,r)=>{e(new ru(n,t,r))})}function fm(t,e,n,r){n&&e(t),xa(t,s=>{fm(s,e,!0)})}function HE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lo(t){return new We(t.parent===null?t.name:lo(t.parent)+"/"+t.name)}function Dl(t){t.parent!==null&&WE(t.parent,t.name,t)}function WE(t,e,n){const r=VE(n),s=Gn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Dl(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Dl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=/[\[\].#$\/\u0000-\u001F\u007F]/,KE=/[\[\].#$\u0000-\u001F\u007F]/,el=10*1024*1024,iu=function(t){return typeof t=="string"&&t.length!==0&&!GE.test(t)},pm=function(t){return typeof t=="string"&&t.length!==0&&!KE.test(t)},YE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pm(t)},$l=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pc(t)||t&&typeof t=="object"&&Gn(t,".sv")},ka=function(t,e,n,r){r&&e===void 0||Ca(ha(t,"value"),e,n)},Ca=function(t,e,n){const r=n instanceof We?new uy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kr(r)+" with contents = "+e.toString());if(Pc(e))throw new Error(t+"contains "+e.toString()+" "+Kr(r));if(typeof e=="string"&&e.length>el/3&&fa(e)>el)throw new Error(t+"contains a string greater than "+el+" utf8 bytes "+Kr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ut(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!iu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dy(r,o),Ca(t,a,r),hy(r)}),s&&i)throw new Error(t+' contains ".value" child '+Kr(r)+" in addition to actual children.")}},QE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=zi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!iu(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cy);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&xn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},JE=function(t,e,n,r){const s=ha(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ut(e,(o,a)=>{const l=new We(o);if(Ca(s,a,ht(n,l)),$c(l)===".priority"&&!$l(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),QE(s,i)},ou=function(t,e,n,r){if(!pm(n))throw new Error(ha(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ou(t,e,n)},mm=function(t,e){if(Ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YE(n))throw new Error(ha(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ia(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Mc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function vm(t,e,n){Ia(t,n),gm(t,r=>Mc(r,e))}function Tn(t,e,n){Ia(t,n),gm(t,r=>xn(r,e)||xn(e,r))}function gm(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(tx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ti&&$t("event: "+n.toString()),ei(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="repo_interrupt",rx=25;class sx{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ex,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Go(),this.transactionQueueTree_=new ru,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ix(t,e,n){if(t.stats_=Oc(t.repoInfo_),t.forceRestClient_||O0())t.server_=new Wo(t.repoInfo_,(r,s,i,o)=>{eh(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>th(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new lr(t.repoInfo_,e,(r,s,i,o)=>{eh(t,r,s,i,o)},r=>{th(t,r)},r=>{ox(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=F0(t.repoInfo_,()=>new qy(t.stats_,t.server_)),t.infoData_=new $y,t.infoSyncTree_=new Xd({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ao(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),au(t,"connected",!1),t.serverSyncTree_=new Xd({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Tn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function _m(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ta(t){return qE({timestamp:_m(t)})}function eh(t,e,n,r,s){t.dataUpdateCount++;const i=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Do(n,c=>It(c));o=DE(t.serverSyncTree_,i,l,s)}else{const l=It(n);o=im(t.serverSyncTree_,i,l,s)}else if(r){const l=Do(n,c=>It(c));o=NE(t.serverSyncTree_,i,l)}else{const l=It(n);o=ao(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Gs(t,i)),Tn(t.eventQueue_,a,o)}function th(t,e){au(t,"connected",e),e===!1&&ux(t)}function ox(t,e){Ut(e,(n,r)=>{au(t,n,r)})}function au(t,e,n){const r=new We("/.info/"+e),s=It(n);t.infoData_.updateSnapshot(r,s);const i=ao(t.infoSyncTree_,r,s);Tn(t.eventQueue_,r,i)}function lu(t){return t.nextWriteId_++}function ax(t,e,n){const r=$E(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=It(s).withIndex(e._queryParams.getIndex());Ol(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ao(t.serverSyncTree_,e._path,i);else{const a=Hi(t.serverSyncTree_,e);o=im(t.serverSyncTree_,e._path,i,a)}return Tn(t.eventQueue_,e._path,o),ta(t.serverSyncTree_,e,n,null,!0),i},s=>(co(t,"get for query "+Tt(e)+" failed: "+s),Promise.reject(new Error(s))))}function lx(t,e,n,r,s){co(t,"set",{path:e.toString(),value:n,priority:r});const i=Ta(t),o=It(n,r),a=Qc(t.serverSyncTree_,e),l=um(o,a,i),c=lu(t),f=sm(t.serverSyncTree_,e,l,c,!0);Ia(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const g=h==="ok";g||Zt("set at "+e+" failed: "+h);const b=Tr(t.serverSyncTree_,c,!g);Tn(t.eventQueue_,e,b),Ul(t,s,h,v)});const p=uu(t,e);Gs(t,p),Tn(t.eventQueue_,p,[])}function cx(t,e,n,r){co(t,"update",{path:e.toString(),value:n});let s=!0;const i=Ta(t),o={};if(Ut(n,(a,l)=>{s=!1,o[a]=cm(ht(e,a),It(l),t.serverSyncTree_,i)}),s)$t("update() called with empty data.  Don't do anything."),Ul(t,r,"ok",void 0);else{const a=lu(t),l=PE(t.serverSyncTree_,e,o,a);Ia(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,f)=>{const p=c==="ok";p||Zt("update at "+e+" failed: "+c);const h=Tr(t.serverSyncTree_,a,!p),v=h.length>0?Gs(t,e):e;Tn(t.eventQueue_,v,h),Ul(t,r,c,f)}),Ut(n,c=>{const f=uu(t,ht(e,c));Gs(t,f)}),Tn(t.eventQueue_,e,[])}}function ux(t){co(t,"onDisconnectEvents");const e=Ta(t),n=Go();Sl(t.onDisconnect_,Be(),(s,i)=>{const o=cm(s,i,t.serverSyncTree_,e);Bp(n,s,o)});let r=[];Sl(n,Be(),(s,i)=>{r=r.concat(ao(t.serverSyncTree_,s,i));const o=uu(t,s);Gs(t,o)}),t.onDisconnect_=Go(),Tn(t.eventQueue_,Be(),r)}function dx(t,e,n){let r;Ae(e._path)===".info"?r=Ol(t.infoSyncTree_,e,n):r=Ol(t.serverSyncTree_,e,n),vm(t.eventQueue_,e._path,r)}function Ml(t,e,n){let r;Ae(e._path)===".info"?r=ta(t.infoSyncTree_,e,n):r=ta(t.serverSyncTree_,e,n),vm(t.eventQueue_,e._path,r)}function hx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nx)}function co(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$t(n,...e)}function Ul(t,e,n,r){e&&ei(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function bm(t,e,n){return Qc(t.serverSyncTree_,e,n)||me.EMPTY_NODE}function cu(t,e=t.transactionQueueTree_){if(e||Sa(t,e),ni(e)){const n=ym(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&fx(t,lo(e),n)}else hm(e)&&xa(e,n=>{cu(t,n)})}function fx(t,e,n){const r=n.map(c=>c.currentWriteId),s=bm(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const f=n[c];$(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Xt(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{co(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const p=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(Tr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&p.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Sa(t,su(t.transactionQueueTree_,e)),cu(t,t.transactionQueueTree_),Tn(t.eventQueue_,e,f);for(let h=0;h<p.length;h++)ei(p[h])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Zt("transaction at "+l.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Gs(t,e)}},o)}function Gs(t,e){const n=wm(t,e),r=lo(n),s=ym(t,n);return px(t,s,r),r}function px(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Xt(n,l.path);let f=!1,p;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,s=s.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rx)f=!0,p="maxretry",s=s.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=bm(t,l.path,o);l.currentInputSnapshot=h;const v=e[a].update(h.val());if(v!==void 0){Ca("transaction failed: Data returned ",v,l.path);let g=It(v);typeof v=="object"&&v!=null&&Gn(v,".priority")||(g=g.updatePriority(h.getPriority()));const y=l.currentWriteId,C=Ta(t),I=um(g,h,C);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=lu(t),o.splice(o.indexOf(y),1),s=s.concat(sm(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(Tr(t.serverSyncTree_,y,!0))}else f=!0,p="nodata",s=s.concat(Tr(t.serverSyncTree_,l.currentWriteId,!0))}Tn(t.eventQueue_,n,s),s=[],f&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Sa(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ei(r[a]);cu(t,t.transactionQueueTree_)}function wm(t,e){let n,r=t.transactionQueueTree_;for(n=Ae(e);n!==null&&ni(r)===void 0;)r=su(r,n),e=Je(e),n=Ae(e);return r}function ym(t,e){const n=[];return Em(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Em(t,e,n){const r=ni(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xa(e,s=>{Em(t,s,n)})}function Sa(t,e){const n=ni(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,dm(e,n.length>0?n:void 0)}xa(e,r=>{Sa(t,r)})}function uu(t,e){const n=lo(wm(t,e)),r=su(t.transactionQueueTree_,e);return HE(r,s=>{tl(t,s)}),tl(t,r),fm(r,s=>{tl(t,s)}),n}function tl(t,e){const n=ni(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?dm(e,void 0):n.length=i+1,Tn(t.eventQueue_,lo(e),s);for(let o=0;o<r.length;o++)ei(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function vx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const nh=function(t,e){const n=gx(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||C0();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cp(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new We(n.pathString)}},gx=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(s=mx(t.substring(f,p)));const h=vx(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_x=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=rh.charAt(n%64),n=Math.floor(n/64);$(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=rh.charAt(e[s]);return $(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Tt(this.snapshot.exportVal())}}class km{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Re(this._path)?null:$c(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=jd(this._queryParams),n=Nc(e);return n==="{}"?"default":n}get _queryObject(){return jd(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof Wr))return!1;const n=this._repo===e._repo,r=Mc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ly(this._path)}}function bx(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function du(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===cr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Ur)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==pr)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===lt){if(e!=null&&!$l(e)||n!=null&&!$l(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if($(t.getIndex()instanceof zc||t.getIndex()===qp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Im(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Yn extends Wr{constructor(e,n){super(e,n,new jc,!1)}get parent(){const e=Op(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new We(e),r=Ys(this.ref,e);return new Ks(this._node.getChild(n),r,lt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ks(s,Ys(this.ref,r),lt)))}hasChild(e){const n=new We(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rr(t,e){return t=gt(t),t._checkNotDeleted("ref"),e!==void 0?Ys(t._root,e):t._root}function Ys(t,e){return t=gt(t),Ae(t._path)===null?XE("child","path",e):ou("child","path",e),new Yn(t._repo,ht(t._path,e))}function Tm(t,e){t=gt(t),mm("push",t._path),ka("push",e,t._path,!0);const n=_m(t._repo),r=_x(n),s=Ys(t,r),i=Ys(t,r);let o;return e!=null?o=wx(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function wx(t,e){t=gt(t),mm("set",t._path),ka("set",e,t._path,!1);const n=new Xi;return lx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yx(t,e){JE("update",e,t._path);const n=new Xi;return cx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function sh(t){t=gt(t);const e=new Cm(()=>{}),n=new Aa(e);return ax(t._repo,t,n).then(r=>new Ks(r,new Yn(t._repo,t._path),t._queryParams.getIndex()))}class Aa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xm("value",this,new Ks(e.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new km(this,e,n):null}matches(e){return e instanceof Aa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new km(this,e,n):null}createEvent(e,n){$(e.childName!=null,"Child events should have a childName.");const r=Ys(new Yn(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new xm(e.type,this,new Ks(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Sm(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(f,p)=>{Ml(t._repo,t,a),l(f,p)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Cm(n,i||void 0),a=e==="value"?new Aa(o):new hu(e,o);return dx(t._repo,t,a),()=>Ml(t._repo,t,a)}function fu(t,e,n,r){return Sm(t,"value",e,n,r)}function Ex(t,e,n,r){return Sm(t,"child_added",e,n,r)}function xx(t,e,n){Ml(t._repo,t,null)}class uo{}class kx extends uo{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){ka("endBefore",this._value,e._path,!1);const n=Oy(e._queryParams,this._value,this._key);if(Im(n),du(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Wr(e._repo,e._path,n,e._orderByCalled)}}function Cx(t,e){return new kx(t,e)}class Ix extends uo{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){ka("startAfter",this._value,e._path,!1);const n=Ly(e._queryParams,this._value,this._key);if(Im(n),du(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Wr(e._repo,e._path,n,e._orderByCalled)}}function Tx(t,e){return new Ix(t,e)}class Sx extends uo{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Wr(e._repo,e._path,Py(e._queryParams,this._limit),e._orderByCalled)}}function ih(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Sx(t)}class Ax extends uo{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Wr(e._repo,e._path,Ny(e._queryParams,this._limit),e._orderByCalled)}}function oh(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Ax(t)}class Rx extends uo{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){bx(e,"orderByChild");const n=new We(this._path);if(Re(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new zc(n),s=Dy(e._queryParams,r);return du(s),new Wr(e._repo,e._path,s,!0)}}function ui(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ou("orderByChild","path",t),new Rx(t)}function di(t,...e){let n=gt(t);for(const r of e)n=r._apply(n);return n}xE(Yn);SE(Yn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="FIREBASE_DATABASE_EMULATOR_HOST",Fl={};let Nx=!1;function Lx(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Vr(i);t.repoInfo_=new Cp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Ox(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nh(i,s),a=o.repoInfo,l;typeof process<"u"&&Ed&&(l=Ed[Px]),l?(i=`http://${l}?ns=${a.namespace}`,o=nh(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new $0(t.name,t.options,e);ZE("Invalid Firebase Database URL",o),Re(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=$x(a,t,c,new D0(t,n));return new Mx(f,t)}function Dx(t,e){const n=Fl[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hx(t),delete n[t.key]}function $x(t,e,n,r){let s=Fl[e.name];s||(s={},Fl[e.name]=s);let i=s[t.toURLString()];return i&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new sx(t,Nx,n,r),s[t.toURLString()]=i,i}class Mx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ix(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function Ux(t=yc(),e){const n=pa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=_f("database");r&&Fx(n,...r)}return n}function Fx(t,e,n,r={}){t=gt(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&is(r,i.repoInfo_.emulatorOptions))return;fr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Co(Co.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:yf(r.mockUserToken,t.app.options.projectId);o=new Co(a)}Vr(e)&&(vc(e),gc("Database",!0)),Lx(i,s,r,o)}/**
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
 */function zx(t){b0(vs),os(new Mr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ox(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Vn(xd,kd,t),Vn(xd,kd,"esm2020")}lr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="firebasestorage.googleapis.com",Rm="storageBucket",qx=120*1e3,jx=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends _r{constructor(e,n,r=0){super(nl(e),`Firebase Storage: ${n} (${nl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mt||(mt={}));function nl(t){return"storage/"+t}function pu(){const t="An unknown error occurred, please check the error payload for server response.";return new _t(mt.UNKNOWN,t)}function Bx(t){return new _t(mt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Vx(t){return new _t(mt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _t(mt.UNAUTHENTICATED,t)}function Wx(){return new _t(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gx(t){return new _t(mt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Kx(){return new _t(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yx(){return new _t(mt.CANCELED,"User canceled the upload/download.")}function Qx(t){return new _t(mt.INVALID_URL,"Invalid URL '"+t+"'.")}function Jx(t){return new _t(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xx(){return new _t(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rm+"' property when initializing the app?")}function Zx(){return new _t(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ek(){return new _t(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tk(t){return new _t(mt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zl(t){return new _t(mt.INVALID_ARGUMENT,t)}function Pm(){return new _t(mt.APP_DELETED,"The Firebase app was deleted.")}function nk(t){return new _t(mt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ni(t,e){return new _t(mt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function hi(t){throw new _t(mt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw Jx(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${h}`,"i"),g={bucket:1,path:3},b=n===Am?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",C=new RegExp(`^https?://${b}/${s}/${y}`,"i"),S=[{regex:a,indices:l,postModify:i},{regex:v,indices:g,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<S.length;N++){const M=S[N],L=M.regex.exec(e);if(L){const A=L[M.indices.bucket];let k=L[M.indices.path];k||(k=""),r=new hn(A,k),M.postModify(r);break}}if(r==null)throw Qx(e);return r}}class rk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function f(...y){c||(c=!0,e.apply(null,y))}function p(y){s=setTimeout(()=>{s=null,t(v,l())},y)}function h(){i&&clearTimeout(i)}function v(y,...C){if(c){h();return}if(y){h(),f.call(null,y,...C);return}if(l()||o){h(),f.call(null,y,...C);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,p(S)}let g=!1;function b(y){g||(g=!0,h(),!c&&(s!==null?(y||(a=2),clearTimeout(s),p(0)):y||(a=1)))}return p(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function ik(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){return t!==void 0}function ak(t){return typeof t=="object"&&!Array.isArray(t)}function mu(t){return typeof t=="string"||t instanceof String}function ah(t){return vu()&&t instanceof Blob}function vu(){return typeof Blob<"u"}function lh(t,e,n,r){if(r<e)throw zl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Nm(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
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
 */function lk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n,r,s,i,o,a,l,c,f,p,h=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=h,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ts.NO_ERROR,l=i.getStatus();if(!a||lk(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ts.ABORT;r(!1,new _o(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new _o(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ok(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=pu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Pm():Yx();o(l)}else{const l=Kx();o(l)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=sk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ik(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pk(t,e,n,r,s,i,o=!0,a=!1){const l=Nm(t.urlParams),c=t.url+l,f=Object.assign({},t.headers);return hk(f,e),uk(f,n),dk(f,i),fk(f,r),new ck(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vk(...t){const e=mk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vu())return new Blob(t);throw new _t(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _k(t){if(typeof atob>"u")throw tk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rl{constructor(e,n){this.data=e,this.contentType=n||null}}function bk(t,e){switch(t){case jn.RAW:return new rl(Lm(e));case jn.BASE64:case jn.BASE64URL:return new rl(Om(t,e));case jn.DATA_URL:return new rl(yk(e),Ek(e))}throw pu()}function Lm(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wk(t){let e;try{e=decodeURIComponent(t)}catch{throw Ni(jn.DATA_URL,"Malformed data URL.")}return Lm(e)}function Om(t,e){switch(t){case jn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_k(e)}catch(s){throw s.message.includes("polyfill")?s:Ni(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ni(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yk(t){const e=new Dm(t);return e.base64?Om(jn.BASE64,e.rest):wk(e.rest)}function Ek(t){return new Dm(t).contentType}function xk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){let r=0,s="";ah(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ah(this.data_)){const r=this.data_,s=gk(r,e,n);return s===null?null:new Cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(vu()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(vk.apply(null,n))}else{const n=e.map(o=>mu(o)?bk(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Cr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){let e;try{e=JSON.parse(t)}catch{return null}return ak(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ck(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Mm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e){return e}class Kt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Ik}}let bo=null;function Tk(t){return!mu(t)||t.length<2?t:Mm(t)}function Um(){if(bo)return bo;const t=[];t.push(new Kt("bucket")),t.push(new Kt("generation")),t.push(new Kt("metageneration")),t.push(new Kt("name","fullPath",!0));function e(i,o){return Tk(o)}const n=new Kt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Kt("size");return s.xform=r,t.push(s),t.push(new Kt("timeCreated")),t.push(new Kt("updated")),t.push(new Kt("md5Hash",null,!0)),t.push(new Kt("cacheControl",null,!0)),t.push(new Kt("contentDisposition",null,!0)),t.push(new Kt("contentEncoding",null,!0)),t.push(new Kt("contentLanguage",null,!0)),t.push(new Kt("contentType",null,!0)),t.push(new Kt("metadata","customMetadata",!0)),bo=t,bo}function Sk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new hn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Ak(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Sk(r,t),r}function Fm(t,e,n){const r=$m(e);return r===null?null:Ak(t,r,n)}function Rk(t,e,n,r){const s=$m(e);if(s===null||!mu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,p=t.fullPath,h="/b/"+o(f)+"/o/"+o(p),v=gu(h,n,r),g=Nm({alt:"media",token:c});return v+g})[0]}function Pk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zm{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){if(!t)throw pu()}function Nk(t,e){function n(r,s){const i=Fm(t,s,e);return qm(i!==null),i}return n}function Lk(t,e){function n(r,s){const i=Fm(t,s,e);return qm(i!==null),Rk(i,s,t.host,t._protocol)}return n}function jm(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Wx():s=Hx():n.getStatus()===402?s=Vx(t.bucket):n.getStatus()===403?s=Gx(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ok(t){const e=jm(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Bx(t.path)),i.serverResponse=s.serverResponse,i}return n}function Dk(t,e,n){const r=e.fullServerUrl(),s=gu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zm(s,i,Lk(t,n),o);return a.errorHandler=Ok(e),a}function $k(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Mk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$k(null,e)),r}function Uk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let N=0;N<2;N++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Mk(e,r,s),f=Pk(c,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",v=Cr.getBlob(p,r,h);if(v===null)throw Zx();const g={name:c.fullPath},b=gu(i,t.host,t._protocol),y="POST",C=t.maxUploadRetryTime,I=new zm(b,y,Nk(t,n),C);return I.urlParams=g,I.headers=o,I.body=v.uploadData(),I.errorHandler=jm(e),I}class Fk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw hi("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zk extends Fk{initXhr(){this.xhr_.responseType="text"}}function Bm(){return new zk}/**
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
 */class us{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new us(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Mm(this._location.path)}get storage(){return this._service}get parent(){const e=kk(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nk(e)}}function qk(t,e,n){t._throwIfRoot("uploadBytes");const r=Uk(t.storage,t._location,Um(),new Cr(e,!0),n);return t.storage.makeRequestWithTokens(r,Bm).then(s=>({metadata:s,ref:t}))}function jk(t){t._throwIfRoot("getDownloadURL");const e=Dk(t.storage,t._location,Um());return t.storage.makeRequestWithTokens(e,Bm).then(n=>{if(n===null)throw ek();return n})}function Bk(t,e){const n=Ck(t._location.path,e),r=new hn(t._location.bucket,n);return new us(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){return/^[A-Za-z]+:\/\//.test(t)}function Hk(t,e){return new us(t,e)}function Vm(t,e){if(t instanceof _u){const n=t;if(n._bucket==null)throw Xx();const r=new us(n,n._bucket);return e!=null?Vm(r,e):r}else return e!==void 0?Bk(t,e):t}function Wk(t,e){if(e&&Vk(e)){if(t instanceof _u)return Hk(t,e);throw zl("To use ref(service, url), the first argument must be a Storage instance.")}else return Vm(t,e)}function ch(t,e){const n=e?.[Rm];return n==null?null:hn.makeFromBucketSpec(n,t)}function Gk(t,e,n,r={}){t.host=`${e}:${n}`;const s=Vr(e);s&&(vc(`https://${t.host}/b`),gc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:yf(i,t.app.options.projectId))}class _u{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Am,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qx,this._maxUploadRetryTime=jx,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=ch(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=ch(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new us(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new rk(Pm());{const o=pk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const uh="@firebase/storage",dh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="storage";function Kk(t,e,n){return t=gt(t),qk(t,e,n)}function Yk(t){return t=gt(t),jk(t)}function Qk(t,e){return t=gt(t),Wk(t,e)}function Jk(t=yc(),e){t=gt(t);const r=pa(t,Hm).getImmediate({identifier:e}),s=_f("storage");return s&&Xk(r,...s),r}function Xk(t,e,n,r={}){Gk(t,e,n,r)}function Zk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new _u(n,r,s,e,vs)}function eC(){os(new Mr(Hm,Zk,"PUBLIC").setMultipleInstances(!0)),Vn(uh,dh,""),Vn(uh,dh,"esm2020")}eC();const Wm={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",Wm);const bu=If(Wm),ds=g0(bu),qn=Ux(bu),tC=Jk(bu);var nC=T('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),rC=T('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),sC=T('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),iC=T('<h3 class="post-title svelte-1t1odzy"> </h3>'),oC=T('<p class="post-text svelte-1t1odzy"> </p>'),aC=T('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),lC=T('<div class="posts svelte-1t1odzy"></div>'),cC=T('<div class="post-list-container svelte-1t1odzy"><!></div>');const uC={hash:"svelte-1t1odzy",code:`
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
  }`};function dC(t,e){tt(e,!0),rt(t,uC);let n=at(e,"path",7,"posts"),r=at(e,"limit",7,"10"),s=re(Qt([])),i=re(!0),o=re(""),a=null;Ft(()=>{l()}),hf(()=>{c()});function l(){try{a=rr(qn,n()),fu(a,I=>{const S=I.val();S?x(s,Object.entries(S).map(([N,M])=>({id:N,...M})).sort((N,M)=>(M.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(r())),!0):x(s,[],!0),x(i,!1),x(o,"")},I=>{console.error("데이터 읽기 오류:",I),x(o,"데이터를 불러오는 중 오류가 발생했습니다."),x(i,!1)})}catch(I){console.error("구독 설정 오류:",I),x(o,"데이터베이스 연결에 실패했습니다."),x(i,!1)}}function c(){a&&xx(a)}function f(I){const S=new CustomEvent("post-click",{detail:{post:I},bubbles:!0,composed:!0});dispatchEvent(S)}function p(I,S){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),f(S))}function h(I){if(!I)return"";const S=typeof I=="string"?Number(I):I,N=new Date(S),L=new Date().getTime()-N.getTime(),A=Math.floor(L/6e4),k=Math.floor(L/36e5),R=Math.floor(L/864e5);return A<1?"방금 전":A<60?`${A}분 전`:k<24?`${k}시간 전`:R<7?`${R}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var v={get path(){return n()},set path(I="posts"){n(I),it()},get limit(){return r()},set limit(I="10"){r(I),it()}},g=cC(),b=d(g);{var y=I=>{var S=nC();E(I,S)},C=I=>{var S=be(),N=ae(S);{var M=A=>{var k=rC(),R=d(k),O=d(R,!0);u(R),u(k),D(()=>w(O,m(o))),E(A,k)},L=A=>{var k=be(),R=ae(k);{var O=z=>{var K=sC();E(z,K)},U=z=>{var K=lC();Jt(K,21,()=>m(s),ne=>ne.id,(ne,te)=>{var le=aC();le.__click=()=>f(m(te)),le.__keydown=ce=>p(ce,m(te));var Ee=d(le),fe=d(Ee),ue=d(fe),B=d(ue,!0);u(ue);var H=_(ue,2),ie=d(H,!0);u(H),u(fe),u(Ee);var P=_(Ee,2),Y=d(P);{var F=ce=>{var ve=iC(),xe=d(ve,!0);u(ve),D(()=>w(xe,m(te).title)),E(ce,ve)};Q(Y,ce=>{m(te).title&&ce(F)})}var q=_(Y,2);{var se=ce=>{var ve=oC(),xe=d(ve,!0);u(ve),D(()=>w(xe,m(te).content)),E(ce,ve)};Q(q,ce=>{m(te).content&&ce(se)})}u(P);var Z=_(P,2),V=d(Z),J=d(V);u(V);var ee=_(V,2),ke=d(ee);u(ee),u(Z),u(le),D(ce=>{Oe(le,"aria-label",`게시물: ${(m(te).title||m(te).content||"제목 없음")??""}`),w(B,m(te).author||"익명"),w(ie,ce),w(J,`👍 ${(m(te).likes||0)??""}`),w(ke,`💬 ${(m(te).comments?.length||0)??""}`)},[()=>h(m(te).timestamp)]),E(ne,le)}),u(K),E(z,K)};Q(R,z=>{m(s).length===0?z(O):z(U,!1)},!0)}E(A,k)};Q(N,A=>{m(o)?A(M):A(L,!1)},!0)}E(I,S)};Q(b,I=>{m(i)?I(y):I(C,!1)})}return u(g),E(t,g),nt(v)}wt(["click","keydown"]);customElements.define("post-list",we(dC,{path:{},limit:{}},[],[],!0));og();/**
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
 */const hC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var fC=jg("<svg><!><!></svg>");function yt(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]),r=pt(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);tt(e,!1);let s=at(e,"name",12,void 0),i=at(e,"color",12,"currentColor"),o=at(e,"size",12,24),a=at(e,"strokeWidth",12,2),l=at(e,"absoluteStrokeWidth",12,!1),c=at(e,"iconNode",28,()=>[]);const f=(...b)=>b.filter((y,C,I)=>!!y&&I.indexOf(y)===C).join(" ");var p={get name(){return s()},set name(b){s(b),it()},get color(){return i()},set color(b){i(b),it()},get size(){return o()},set size(b){o(b),it()},get strokeWidth(){return a()},set strokeWidth(b){a(b),it()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(b){l(b),it()},get iconNode(){return c()},set iconNode(b){c(b),it()}};vn();var h=fC();Fu(h,(b,y)=>({...hC,...r,width:o(),height:o(),stroke:i(),"stroke-width":b,class:y}),[()=>(xs(l()),xs(a()),xs(o()),Hn(()=>l()?Number(a())*24/Number(o()):a())),()=>(xs(s()),xs(n),Hn(()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var v=d(h);Jt(v,1,c,Zn,(b,y)=>{var C=Zr(()=>Pv(m(y),2));let I=()=>m(C)[0],S=()=>m(C)[1];var N=be(),M=ae(N);Gg(M,I,!0,(L,A)=>{Fu(L,()=>({...S()}))}),E(b,N)});var g=_(v);return vt(g,e,"default",{}),u(h),E(t,h),nt(p)}we(yt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function Gm(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];yt(t,kt({name:"book-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Gm,{},["default"],[],!0);function Km(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];yt(t,kt({name:"camera"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Km,{},["default"],[],!0);function ql(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];yt(t,kt({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(ql,{},["default"],[],!0);function wu(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];yt(t,kt({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(wu,{},["default"],[],!0);function jl(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];yt(t,kt({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(jl,{},["default"],[],!0);function Bl(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];yt(t,kt({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Bl,{},["default"],[],!0);function Vl(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];yt(t,kt({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Vl,{},["default"],[],!0);function yu(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];yt(t,kt({name:"file-text"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(yu,{},["default"],[],!0);function Ym(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];yt(t,kt({name:"house"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Ym,{},["default"],[],!0);function vi(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];yt(t,kt({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(vi,{},["default"],[],!0);function Qm(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];yt(t,kt({name:"log-in"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Qm,{},["default"],[],!0);function Jm(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];yt(t,kt({name:"log-out"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Jm,{},["default"],[],!0);function gi(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];yt(t,kt({name:"menu"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(gi,{},["default"],[],!0);function Sr(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];yt(t,kt({name:"message-circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Sr,{},["default"],[],!0);function Xm(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];yt(t,kt({name:"phone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Xm,{},["default"],[],!0);function Zm(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];yt(t,kt({name:"send"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Zm,{},["default"],[],!0);function ev(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];yt(t,kt({name:"trending-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(ev,{},["default"],[],!0);function ns(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];yt(t,kt({name:"user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(ns,{},["default"],[],!0);function Wi(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];yt(t,kt({name:"users"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(Wi,{},["default"],[],!0);function tv(t,e){const n=pt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];yt(t,kt({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=ae(o);vt(a,e,"default",{}),E(s,o)},$$slots:{default:!0}}))}we(tv,{},["default"],[],!0);var pC=T("<option> </option>"),mC=T('<div class="error-message svelte-1e01td3"> </div>'),vC=T('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),gC=T("<!> 인증 코드 전송",1),_C=T('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),bC=T('<div class="error-message svelte-1e01td3"> </div>'),wC=T('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),yC=T("<!> 로그인",1),EC=T('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),xC=T('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const kC={hash:"svelte-1e01td3",code:`\r
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
  }`};function CC(t,e){tt(e,!0),rt(t,kC);const n=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=re("+82"),s=re(""),i=re(""),o=re("phone"),a=re(!1),l=re(""),c=re(null),f=re(null),p=re(void 0),h=re(null);function v(){return new Promise((k,R)=>{try{if(!m(h)){const O=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(O),x(l,"reCAPTCHA 초기화에 실패했습니다."),R(O);return}if(m(c)){if(m(p)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(p)),console.log("reCAPTCHA reset completed"),k(m(p));return}catch(O){console.warn("Failed to reset reCAPTCHA:",O)}try{m(c).clear(),x(c,null),x(p,void 0)}catch(O){console.warn("Failed to clear reCAPTCHA:",O)}}x(c,new gw(ds,m(h).id,{size:"invisible",callback:O=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(p)!==void 0?window.grecaptcha.reset(m(p)):v()}}),!0),m(c).render().then(O=>{x(p,O,!0),console.log("reCAPTCHA rendered with widgetId:",O),k(O)}).catch(O=>{console.error("Failed to render reCAPTCHA:",O),x(l,"reCAPTCHA 초기화에 실패했습니다."),R(O)})}catch(O){console.error("reCAPTCHA 초기화 실패:",O),x(l,"reCAPTCHA 초기화에 실패했습니다."),R(O)}})}Ft(()=>{const k=document.createElement("div");return k.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),k.className="recaptcha-container-light-dom",k.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(k),x(h,k,!0),v(),()=>{k&&k.parentNode&&k.parentNode.removeChild(k)}});function g(k){return/^[0-9]{6,15}$/.test(k)}async function b(){if(x(l,""),!g(m(s))){x(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}x(a,!0);try{const k=`${m(r)}${m(s)}`;console.log("Sending verification code to:",k),x(f,await ww(ds,k,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),x(o,"code")}catch(k){console.error("SMS 전송 실패:",k),k.code==="auth/invalid-phone-number"?x(l,"잘못된 전화번호 형식입니다."):k.code==="auth/too-many-requests"?x(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):x(l,`SMS 전송 실패: ${k.message}`)}finally{x(a,!1)}}async function y(){if(x(l,""),m(i).length!==6){x(l,"6자리 인증 코드를 입력해주세요.");return}x(a,!0);try{const k=await m(f).confirm(m(i));console.log("Login successful:",k.user);const R=new CustomEvent("login-success",{detail:{user:k.user,phoneNumber:k.user.phoneNumber}});dispatchEvent(R),x(s,""),x(i,""),x(o,"phone")}catch(k){console.error("인증 코드 확인 실패:",k),k.code==="auth/invalid-verification-code"?x(l,"잘못된 인증 코드입니다."):k.code==="auth/code-expired"?x(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):x(l,`인증 실패: ${k.message}`);const R=new CustomEvent("login-error",{detail:{error:k.message}});dispatchEvent(R)}finally{x(a,!1)}}function C(){x(o,"phone"),x(i,""),x(l,"")}var I=xC(),S=d(I),N=d(S);{var M=k=>{var R=_C(),O=d(R),U=d(O);Xm(U,{class:"icon-large"}),Jn(4),u(O);var z=_(O,2),K=_(d(z),2);Jt(K,21,()=>n,Zn,(F,q)=>{var se=pC(),Z=d(se);u(se);var V={};D(()=>{w(Z,`${m(q).flag??""} ${m(q).name??""} (${m(q).code??""})`),V!==(V=m(q).code)&&(se.value=(se.__value=m(q).code)??"")}),E(F,se)}),u(K),u(z);var ne=_(z,2),te=_(d(ne),2),le=d(te),Ee=d(le,!0);u(le);var fe=_(le,2);Fs(fe),u(te),Jn(2),u(ne);var ue=_(ne,2);{var B=F=>{var q=mC(),se=d(q,!0);u(q),D(()=>w(se,m(l))),E(F,q)};Q(ue,F=>{m(l)&&F(B)})}var H=_(ue,2);H.__click=b;var ie=d(H);{var P=F=>{var q=vC();Jn(),E(F,q)},Y=F=>{var q=gC(),se=ae(q);Zm(se,{class:"btn-icon"}),Jn(),E(F,q)};Q(ie,F=>{m(a)?F(P):F(Y,!1)})}u(H),u(R),D(()=>{K.disabled=m(a),w(Ee,m(r)),fe.disabled=m(a),H.disabled=m(a)||!m(s)}),dc(K,()=>m(r),F=>x(r,F)),Us("keypress",fe,F=>{F.key==="Enter"&&(F.preventDefault(),b())}),zs(fe,()=>m(s),F=>x(s,F)),E(k,R)},L=k=>{var R=be(),O=ae(R);{var U=z=>{var K=EC(),ne=d(K),te=d(ne);ql(te,{class:"icon-large"});var le=_(te,4),Ee=d(le);Jn(2),u(le),u(ne);var fe=_(ne,2),ue=_(d(fe),2);Fs(ue),Jn(2),u(fe);var B=_(fe,2);{var H=J=>{var ee=bC(),ke=d(ee,!0);u(ee),D(()=>w(ke,m(l))),E(J,ee)};Q(B,J=>{m(l)&&J(H)})}var ie=_(B,2),P=d(ie);P.__click=C;var Y=_(P,2);Y.__click=y;var F=d(Y);{var q=J=>{var ee=wC();Jn(),E(J,ee)},se=J=>{var ee=yC(),ke=ae(ee);ql(ke,{class:"btn-icon"}),Jn(),E(J,ee)};Q(F,J=>{m(a)?J(q):J(se,!1)})}u(Y),u(ie);var Z=_(ie,2),V=_(d(Z));V.__click=C,u(Z),u(K),D(()=>{w(Ee,`${m(r)??""}${m(s)??""}로 전송된`),ue.disabled=m(a),P.disabled=m(a),Y.disabled=m(a)||m(i).length!==6}),Us("keypress",ue,J=>{J.key==="Enter"&&(J.preventDefault(),y())}),zs(ue,()=>m(i),J=>x(i,J)),E(z,K)};Q(O,z=>{m(o)==="code"&&z(U)},!0)}E(k,R)};Q(N,k=>{m(o)==="phone"?k(M):k(L,!1)})}var A=_(N,2);hc(A,k=>x(h,k),()=>m(h)),u(S),u(I),E(t,I),nt()}wt(["click"]);customElements.define("phone-login",we(CC,{},[],[],!0));const Ra=Xs(null),IC=Xs(!0);tp(ds,t=>{Ra.set(t),IC.set(!1)});async function TC(){try{return await Q1(ds),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}}class Yr{static#t=null;#e=re(!0);get loading(){return m(this.#e)}set loading(e){x(this.#e,e,!0)}#r=re(!1);get isAuthenticated(){return m(this.#r)}set isAuthenticated(e){x(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=re(null);get data(){return m(this.#s)}set data(e){x(this.#s,e,!0)}#l=re(null);get error(){return m(this.#l)}set error(e){x(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return Yr.#t||(Yr.#t=new Yr),Yr.#t}#a(){try{if(!ds)throw new Error("Auth instance not available");this.#i=tp(ds,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const n=rr(qn,`users/${e.uid}`);this.#n=fu(n,r=>{this.data=r.val()},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const n={};e.displayName!==void 0&&(n.displayName=e.displayName),(e.photoUrl!==void 0||e.photoUrl!==void 0)&&(n.photoUrl=e.photoUrl),Object.keys(n).length>0&&await G1(this.#o,n);const r={...e};r.photoUrl!==void 0&&(r.photoUrl===void 0&&(r.photoUrl=r.photoUrl),delete r.photoUrl);const s=rr(qn,`users/${this.uid}`);await yx(s,r)}catch(n){throw this.error=n,n}}async updateField(e,n){return this.updateProfile({[e]:n})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),Yr.#t=null}}const Se=Yr.getInstance(),SC="GitHub",AC={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:SC,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information."},RC={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다."},PC="GitHub",NC={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:PC,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。"},LC="GitHub",OC={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:LC,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。"},sl={en:AC,ko:RC,ja:NC,zh:OC};function Hl(t){const e=(t??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function nv(){if(typeof navigator>"u")return"en";const t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of t){const n=Hl(e);if(n!=="en")return n}return"en"}function DC(t){let e=Hl(t)||nv();function n(i){e=Hl(i)}function r(){return e}function s(i,o={}){return((sl[e]??sl.en)[i]??sl.en[i]??i).replace(/\{(\w+)\}/g,(c,f)=>o[f]??"")}return{t:s,setLocale:n,getLocale:r}}const Eu="sns-web-locale",rv=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function $C(){if(typeof localStorage>"u")return null;const t=localStorage.getItem(Eu);if(!t)return null;const e=rv.find(n=>n.code===t);return e?e.code:null}const sv=$C()??nv(),na=DC(sv);typeof localStorage<"u"&&localStorage.setItem(Eu,na.getLocale());const xu=Xs(sv);function MC(t){na.setLocale(t);const e=na.getLocale();xu.set(e),typeof localStorage<"u"&&localStorage.setItem(Eu,e)}const Lt=n_(xu,t=>(e,n={})=>na.t(e,n)),iv=Xs("");function gn(t){iv.set(t)}var UC=T('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),FC=T('<img alt="프로필" class="avatar-image svelte-38psow"/>'),zC=T('<div class="avatar-fallback svelte-38psow"> </div>'),qC=T('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),jC=T('<img class="avatar-image svelte-38psow"/>'),BC=T('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),VC=T('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),HC=T('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),WC=T('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const GC={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function KC(t,e){tt(e,!0),rt(t,GC);const n=()=>ot(iv,"$pageTitle",i),r=()=>ot(Ra,"$user",i),s=()=>ot(Lt,"$t",i),[i,o]=At();let a=re(!1);async function l(){if((await TC()).success){const L=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(L)}x(a,!1)}function c(){return Se.data?.displayName?Se.data.displayName.charAt(0).toUpperCase():Se.email?Se.email.charAt(0).toUpperCase():"U"}function f(){x(a,!m(a))}function p(M){const L=document.querySelector(".dropdown-menu"),A=document.querySelector(".dropdown-trigger");L&&!L.contains(M.target)&&!A?.contains(M.target)&&x(a,!1)}Ft(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}));var h=WC(),v=d(h),g=d(v),b=_(d(g),2);{var y=M=>{var L=UC(),A=d(L),k=d(A,!0);u(A),u(L),D(()=>w(k,n())),E(M,L)};Q(b,M=>{n()&&M(y)})}u(g);var C=_(g,2),I=d(C);{var S=M=>{var L=VC(),A=ae(L),k=d(A),R=d(k);vi(R,{size:16});var O=_(R,2),U=d(O,!0);u(O),u(k);var z=_(k,2),K=d(z);Sr(K,{size:16});var ne=_(K,2),te=d(ne,!0);u(ne),u(z);var le=_(z,2),Ee=d(le);Wi(Ee,{size:16});var fe=_(Ee,2),ue=d(fe,!0);u(fe),u(le);var B=_(le,2),H=d(B);H.__click=f;var ie=d(H),P=d(ie);{var Y=pe=>{var oe=FC();D(()=>Oe(oe,"src",Se.data.photoUrl)),E(pe,oe)},F=pe=>{var oe=zC(),Le=d(oe,!0);u(oe),D(qe=>w(Le,qe),[c]),E(pe,oe)};Q(P,pe=>{Se.data?.photoUrl?pe(Y):pe(F,!1)})}u(ie);var q=_(ie,2),se=d(q,!0);u(q),u(H);var Z=_(H,2);{var V=pe=>{var oe=qC(),Le=d(oe),qe=d(Le,!0);u(Le);var Xe=_(Le,4),Ye=d(Xe);ns(Ye,{size:16});var Et=_(Ye,2),ct=d(Et,!0);u(Et),u(Xe);var Ze=_(Xe,4);Ze.__click=l;var st=d(Ze);Jm(st,{size:16});var zt=_(st,2),Ve=d(zt,!0);u(zt),u(Ze),u(oe),D((Ct,j,G)=>{w(qe,Ct),w(ct,j),w(Ve,G)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),E(pe,oe)};Q(Z,pe=>{m(a)&&pe(V)})}u(B);var J=_(B,2),ee=d(J);gi(ee,{size:24}),u(J),u(A);var ke=_(A,2),ce=d(ke),ve=d(ce);vi(ve,{size:20}),u(ce);var xe=_(ce,2),Te=d(xe);Wi(Te,{size:20}),u(xe);var he=_(xe,2),ge=d(he);Sr(ge,{size:20}),u(he);var Ce=_(he,2),de=d(Ce),De=d(de);{var Fe=pe=>{var oe=jC();D(Le=>{Oe(oe,"src",Se.data.photoUrl),Oe(oe,"alt",Le)},[()=>s()("프로필")]),E(pe,oe)},He=pe=>{var oe=BC(),Le=d(oe,!0);u(oe),D(qe=>w(Le,qe),[c]),E(pe,oe)};Q(De,pe=>{Se.data?.photoUrl?pe(Fe):pe(He,!1)})}u(de),u(Ce);var ze=_(Ce,2),Ne=d(ze);gi(Ne,{size:24}),u(ze),u(ke),D((pe,oe,Le,qe,Xe,Ye,Et,ct,Ze)=>{w(U,pe),w(te,oe),w(ue,Le),w(se,Se.data?.displayName||Se.email),Oe(J,"title",qe),Oe(ce,"title",Xe),Oe(xe,"title",Ye),Oe(he,"title",Et),Oe(Ce,"title",ct),Oe(ze,"title",Ze)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),E(M,L)},N=M=>{var L=HC(),A=ae(L),k=d(A),R=d(k);vi(R,{size:16});var O=_(R,2),U=d(O,!0);u(O),u(k);var z=_(k,2),K=d(z);Sr(K,{size:16});var ne=_(K,2),te=d(ne,!0);u(ne),u(z);var le=_(z,2),Ee=d(le,!0);u(le);var fe=_(le,2),ue=d(fe);gi(ue,{size:20}),u(fe),u(A);var B=_(A,2),H=d(B),ie=d(H);vi(ie,{size:20}),u(H);var P=_(H,2),Y=d(P);Sr(Y,{size:20}),u(P);var F=_(P,2),q=d(F);ns(q,{size:20}),u(F);var se=_(F,2),Z=d(se);gi(Z,{size:24}),u(se),u(B),D((V,J,ee,ke,ce,ve,xe,Te)=>{w(U,V),w(te,J),w(Ee,ee),Oe(fe,"title",ke),Oe(H,"title",ce),Oe(P,"title",ve),Oe(F,"title",xe),Oe(se,"title",Te)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),E(M,L)};Q(I,M=>{r()?M(S):M(N,!1)})}u(C),u(v),u(h),E(t,h),nt(),o()}wt(["click"]);customElements.define("sns-topbar",we(KC,{},[],[],!0));var YC=T('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),QC=T('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),JC=T("<option> </option>"),XC=T('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const ZC={hash:"svelte-najsij",code:`
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
  }`};function eI(t,e){tt(e,!1),rt(t,ZC);const n=()=>ot(Lt,"$t",i),r=()=>ot(Ra,"$user",i),s=()=>ot(xu,"$locale",i),[i,o]=At(),a=rv;vn();var l=XC(),c=d(l),f=d(c),p=d(f,!0);u(f);var h=_(f,2),v=d(h),g=d(v);Ym(g,{size:20});var b=_(g,2),y=d(b,!0);u(b),u(v);var C=_(v,2),I=d(C);Sr(I,{size:20});var S=_(I,2),N=d(S,!0);u(S),u(C);var M=_(C,2),L=d(M);Wi(L,{size:20});var A=_(L,2),k=d(A,!0);u(A),u(M);var R=_(M,2),O=d(R);ns(O,{size:20});var U=_(O,2),z=d(U,!0);u(U),u(R);var K=_(R,2),ne=d(K);yu(ne,{size:20});var te=_(ne,2),le=d(te,!0);u(te),u(K),u(h);var Ee=_(h,4),fe=d(Ee),ue=d(fe,!0);u(fe);var B=_(fe,2),H=d(B);{var ie=j=>{var G=YC(),W=d(G);ns(W,{size:16});var ye=_(W,2),$e=d(ye,!0);u(ye),u(G),D(je=>w($e,je),[()=>n()("회원정보수정")]),E(j,G)},P=j=>{var G=QC(),W=ae(G),ye=d(W);Qm(ye,{size:16});var $e=_(ye,2),je=d($e,!0);u($e),u(W);var et=_(W,2),bt=d(et);ns(bt,{size:16});var Gt=_(bt,2),tn=d(Gt,!0);u(Gt),u(et),D((nn,qt)=>{w(je,nn),w(tn,qt)},[()=>n()("로그인"),()=>n()("회원가입")]),E(j,G)};Q(H,j=>{r()?j(ie):j(P,!1)})}u(B),u(Ee);var Y=_(Ee,4),F=d(Y),q=d(F);Wi(q,{size:16});var se=_(q,2),Z=d(se,!0);u(se),u(F);var V=_(F,2),J=_(d(V),2),ee=d(J,!0);u(J);var ke=_(J,2);Vl(ke,{size:12,class:"external-icon"}),u(V);var ce=_(V,2),ve=d(ce);Sr(ve,{size:16});var xe=_(ve,2),Te=d(xe,!0);u(xe);var he=_(xe,2);Vl(he,{size:12,class:"external-icon"}),u(ce);var ge=_(ce,2),Ce=d(ge);Gm(Ce,{size:16});var de=_(Ce,2),De=d(de,!0);u(de),u(ge),u(Y);var Fe=_(Y,2),He=d(Fe),ze=d(He,!0);u(He);var Ne=_(He,2),pe=d(Ne),oe=_(pe,2);Jt(oe,5,()=>a,Zn,(j,G)=>{var W=JC(),ye=d(W,!0);u(W);var $e={};D(()=>{w(ye,m(G).label),$e!==($e=m(G).code)&&(W.value=(W.__value=m(G).code)??"")}),E(j,W)}),u(oe);var Le;uc(oe),u(Ne),u(Fe);var qe=_(Fe,2),Xe=d(qe),Ye=d(Xe),Et=d(Ye,!0);u(Ye);var ct=_(Ye,2),Ze=d(ct,!0);u(ct),u(Xe),u(qe);var st=_(qe,2),zt=d(st),Ve=d(zt,!0),Ct=_(Ve,2);u(zt),u(st),u(c),u(l),D((j,G,W,ye,$e,je,et,bt,Gt,tn,nn,qt,ut,jt,Bt,ln,_n)=>{w(p,j),w(y,G),w(N,W),w(k,ye),w(z,$e),w(le,je),w(ue,et),w(Z,bt),w(ee,Gt),w(Te,tn),w(De,nn),w(ze,qt),Oe(pe,"aria-label",ut),Le!==(Le=s())&&(oe.value=(oe.__value=s())??"",$i(oe,s())),w(Et,jt),w(Ze,Bt),w(Ve,ln),w(Ct,` ${_n??""}`)},[()=>n()("퀵메뉴"),()=>n()("홈"),()=>n()("채팅"),()=>n()("사용자목록"),()=>n()("내프로필"),()=>n()("게시판"),()=>n()("시작하기"),()=>n()("회원목록"),()=>n()("프로젝트GitHub"),()=>n()("한바보참여단톡방"),()=>n()("개발일지"),()=>n()("언어설정"),()=>n()("언어설정"),()=>n()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>n()("카피레프트"),()=>n()("AI소개")]),Us("change",oe,j=>MC(j.currentTarget.value)),E(t,l),nt(),o()}customElements.define("sns-left-sidebar",we(eI,{},[],[],!0));var tI=T('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const nI={hash:"svelte-3epon2",code:`\r
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
  }`};function rI(t,e){tt(e,!0),rt(t,nI);const n=()=>ot(Lt,"$t",r),[r,s]=At();let i=re(Qt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=tI(),a=d(o),l=d(a),c=d(l,!0);u(l);var f=_(l,2),p=d(f),h=d(p),v=d(h);ns(v,{size:20}),u(h);var g=_(h,2),b=d(g),y=d(b,!0);u(b);var C=_(b,2),I=d(C,!0);u(C),u(g),u(p);var S=_(p,2),N=d(S),M=d(N);ev(M,{size:20}),u(N);var L=_(N,2),A=d(L),k=d(A,!0);u(A);var R=_(A,2),O=d(R,!0);u(R),u(L),u(S);var U=_(S,2),z=d(U),K=d(z);yu(K,{size:20}),u(z);var ne=_(z,2),te=d(ne),le=d(te,!0);u(te);var Ee=_(te,2),fe=d(Ee,!0);u(Ee);var ue=_(Ee,2),B=d(ue,!0);u(ue),u(ne),u(U);var H=_(U,2),ie=d(H),P=d(ie);Sr(P,{size:20}),u(ie);var Y=_(ie,2),F=d(Y),q=d(F,!0);u(F);var se=_(F,2),Z=d(se,!0);u(se),u(Y),u(H),u(f);var V=_(f,2),J=d(V,!0);u(V),u(a),u(o),D((ee,ke,ce,ve,xe,Te,he)=>{w(c,ee),w(y,ke),w(I,m(i).totalUsers),w(k,ce),w(O,m(i).totalScore),w(le,ve),w(fe,m(i).totalPosts),w(B,xe),w(q,Te),w(Z,m(i).totalMessages),w(J,he)},[()=>n()("통계"),()=>n()("전체사용자"),()=>n()("전체점수"),()=>n()("전체글"),()=>n()("준비중"),()=>n()("채팅메시지"),()=>n()("통계실시간업데이트")]),E(t,o),nt(),s()}customElements.define("sns-right-sidebar",we(rI,{},[],[],!0));var sI=T('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const iI={hash:"svelte-um1xbq",code:`\r
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
  }`};function oI(t,e){rt(t,iI);var n=sI(),r=d(n),s=_(r,2),i=d(s);yn(i,1,"left-sidebar svelte-um1xbq");var o=_(i,2),a=d(o);vt(a,e,"default",{}),u(o);var l=_(o,2);yn(l,1,"right-sidebar svelte-um1xbq"),u(s),u(n),E(t,n)}customElements.define("sns-layout",we(oI,{},["default"],[],!0));var aI=T('<div class="icon-container svelte-m3h71q"> </div>'),lI=T('<p class="hint-box svelte-m3h71q"> </p>'),cI=T('<p class="gpl-box svelte-m3h71q"> </p>'),uI=T('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),dI=T('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),hI=T('<div class="accordion svelte-m3h71q"></div>');const fI={hash:"svelte-m3h71q",code:`\r
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
  }`};function pI(t,e){tt(e,!0),rt(t,fI);let n=at(e,"items",7,"[]"),r=at(e,"type",7,"single"),s=at(e,"collapsible",7,!0),i=Zr(()=>{try{const h=typeof n()=="string"?JSON.parse(n()):n();return Array.isArray(h)?h:[]}catch(h){return console.error("Failed to parse accordion items:",h),[]}}),o=Zr(()=>()=>{const h=s();return typeof h=="boolean"?h:typeof h=="string"?h!=="false":!0}),a=re(Qt(new Set));function l(h){const v=new Set(m(a));r()==="single"?v.has(h)?m(o)&&v.delete(h):(v.clear(),v.add(h)):v.has(h)?v.delete(h):v.add(h),x(a,v,!0)}function c(h){return m(a).has(h)}var f={get items(){return n()},set items(h="[]"){n(h),it()},get type(){return r()},set type(h="single"){r(h),it()},get collapsible(){return s()},set collapsible(h=!0){s(h),it()}},p=hI();return Jt(p,21,()=>m(i),Zn,(h,v,g)=>{var b=dI(),y=d(b);y.__click=()=>l(g);var C=d(y),I=d(C);{var S=U=>{var z=aI(),K=d(z,!0);u(z),D(()=>w(K,m(v).icon)),E(U,z)};Q(I,U=>{m(v).icon&&U(S)})}var N=_(I,2),M=d(N,!0);u(N),u(C);var L=_(C,2);let A;var k=d(L);wu(k,{size:20}),u(L),u(y);var R=_(y,2);{var O=U=>{var z=uI(),K=d(z),ne=d(K,!0);u(K);var te=_(K,2);{var le=ue=>{var B=lI(),H=d(B,!0);u(B),D(()=>w(H,m(v).hint)),E(ue,B)};Q(te,ue=>{m(v).hint&&ue(le)})}var Ee=_(te,2);{var fe=ue=>{var B=cI(),H=d(B,!0);u(B),D(()=>w(H,m(v).gpl)),E(ue,B)};Q(Ee,ue=>{m(v).gpl&&ue(fe)})}u(z),D(()=>w(ne,m(v).content)),E(U,z)};Q(R,U=>{c(g)&&U(O)})}u(b),D((U,z)=>{Oe(y,"aria-expanded",U),w(M,m(v).title),A=yn(L,1,"chevron svelte-m3h71q",null,A,z)},[()=>c(g),()=>({"rotate-180":c(g)})]),E(h,b)}),u(p),E(t,p),nt(f)}wt(["click"]);customElements.define("sns-accordion",we(pI,{items:{},type:{},collapsible:{}},[],[],!0));console.log("SNS Web Components 로드됨 ✅");var mI=T('<div class="gpl-badge svelte-1ubq0t6"> </div>'),vI=T('<div class="hint svelte-1ubq0t6"> </div>'),gI=T('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),_I=T('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),bI=T('<div class="todo-description svelte-1ubq0t6"> </div>'),wI=T('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),yI=T('<div class="todo-subitems svelte-1ubq0t6"></div>'),EI=T('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),xI=T('<span class="badge svelte-1ubq0t6"> </span>'),kI=T('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const CI={hash:"svelte-1ubq0t6",code:`\r
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
  }`};function ov(t,e){tt(e,!0),rt(t,CI);const n=()=>ot(Lt,"$t",r),[r,s]=At();let i=re(null);function o(G){x(i,m(i)===G?null:G,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var f=kI(),p=d(f),h=d(p),v=d(h);u(h),u(p);var g=_(p,2),b=d(g),y=d(b,!0);u(b);var C=_(b,2),I=d(C),S=_(I),N=d(S,!0);u(S);var M=_(S);u(C),u(g);var L=_(g,2),A=d(L),k=d(A,!0);u(A);var R=_(A,2),O=d(R),U=_(d(O),2),z=d(U,!0);u(U);var K=_(U,2),ne=d(K,!0);u(K),u(O);var te=_(O,2),le=_(d(te),2),Ee=d(le,!0);u(le);var fe=_(le,2),ue=d(fe,!0);u(fe),u(te);var B=_(te,2),H=_(d(B),2),ie=d(H,!0);u(H);var P=_(H,2),Y=d(P,!0);u(P),u(B);var F=_(B,2),q=_(d(F),2),se=d(q,!0);u(q);var Z=_(q,2),V=d(Z,!0);u(Z),u(F),u(R),u(L);var J=_(L,2),ee=d(J),ke=d(ee,!0);u(ee);var ce=_(ee,2);Jt(ce,21,()=>a,Zn,(G,W)=>{var ye=_I(),$e=d(ye);$e.__click=()=>o(m(W).id);var je=d($e),et=d(je,!0);u(je);var bt=_(je,2);let Gt;var tn=d(bt);wu(tn,{size:20}),u(bt),u($e);var nn=_($e,2);{var qt=ut=>{var jt=gI(),Bt=d(jt),ln=d(Bt,!0);u(Bt);var _n=_(Bt,2);{var Qn=Ot=>{var Rt=mI(),An=d(Rt,!0);u(Rt),D(bn=>w(An,bn),[()=>n()("home.aiTruth.item3.gpl")]),E(Ot,Rt)};Q(_n,Ot=>{m(W).showGpl&&Ot(Qn)})}var dt=_(_n,2);{var cn=Ot=>{var Rt=vI(),An=d(Rt,!0);u(Rt),D(bn=>w(An,bn),[()=>n()(m(W).hintKey)]),E(Ot,Rt)};Q(dt,Ot=>{m(W).hintKey&&Ot(cn)})}u(jt),D(Ot=>w(ln,Ot),[()=>n()(m(W).contentKey)]),E(ut,jt)};Q(nn,ut=>{m(i)===m(W).id&&ut(qt)})}u(ye),D(ut=>{Oe($e,"aria-expanded",m(i)===m(W).id),w(et,ut),Gt=yn(bt,1,"accordion-icon svelte-1ubq0t6",null,Gt,{open:m(i)===m(W).id})},[()=>n()(m(W).titleKey)]),E(G,ye)}),u(ce),u(J);var ve=_(J,2),xe=d(ve),Te=d(xe,!0);u(xe);var he=_(xe,2);Jt(he,21,()=>l,Zn,(G,W)=>{var ye=EI(),$e=d(ye),je=d($e);let et;var bt=d(je);{var Gt=dt=>{jl(dt,{size:20})},tn=dt=>{Bl(dt,{size:20})};Q(bt,dt=>{m(W).completed?dt(Gt):dt(tn,!1)})}u(je);var nn=_(je,2),qt=d(nn);let ut;var jt=d(qt,!0);u(qt);var Bt=_(qt,2);{var ln=dt=>{var cn=bI(),Ot=d(cn,!0);u(cn),D(Rt=>w(Ot,Rt),[()=>n()(m(W).descriptionKey)]),E(dt,cn)};Q(Bt,dt=>{m(W).descriptionKey&&dt(ln)})}u(nn),u($e);var _n=_($e,2);{var Qn=dt=>{var cn=yI();Jt(cn,21,()=>m(W).subitems,Zn,(Ot,Rt)=>{var An=wI(),bn=d(An);let ho;var Pa=d(bn);{var kv=br=>{jl(br,{size:16})},Cv=br=>{Bl(br,{size:16})};Q(Pa,br=>{m(Rt).completed?br(kv):br(Cv,!1)})}u(bn);var Na=_(bn,2);let Iu;var Iv=d(Na,!0);u(Na),u(An),D(br=>{ho=yn(bn,1,"todo-subicon svelte-1ubq0t6",null,ho,{completed:m(Rt).completed}),Iu=yn(Na,1,"todo-subtext svelte-1ubq0t6",null,Iu,{completed:m(Rt).completed}),w(Iv,br)},[()=>n()(m(Rt).key)]),E(Ot,An)}),u(cn),E(dt,cn)};Q(_n,dt=>{m(W).subitems.length>0&&dt(Qn)})}u(ye),D(dt=>{et=yn(je,1,"todo-icon svelte-1ubq0t6",null,et,{completed:m(W).completed}),ut=yn(qt,1,"todo-label svelte-1ubq0t6",null,ut,{completed:m(W).completed}),w(jt,dt)},[()=>n()(m(W).labelKey)]),E(G,ye)}),u(he),u(ve);var ge=_(ve,2),Ce=d(ge),de=d(Ce,!0);u(Ce);var De=_(Ce,2),Fe=d(De),He=d(Fe),ze=d(He,!0);u(He);var Ne=_(He,1,!0);u(Fe);var pe=_(Fe,2);Jt(pe,21,()=>c,Zn,(G,W)=>{var ye=xI(),$e=d(ye,!0);u(ye),D(je=>w($e,je),[()=>n()(m(W))]),E(G,ye)}),u(pe),u(De),u(ge);var oe=_(ge,2),Le=d(oe),qe=d(Le,!0);u(Le);var Xe=_(Le,2),Ye=d(Xe),Et=d(Ye,!0);u(Ye);var ct=_(Ye,2),Ze=d(ct),st=_(Ze),zt=d(st,!0);u(st);var Ve=_(st,1,!0);u(ct);var Ct=_(ct,2),j=d(Ct,!0);u(Ct),u(Xe),u(oe),u(f),D((G,W,ye,$e,je,et,bt,Gt,tn,nn,qt,ut,jt,Bt,ln,_n,Qn,dt,cn,Ot,Rt,An,bn,ho,Pa)=>{w(v,`✨ ${G??""}`),w(y,W),w(I,`${ye??""} `),w(N,$e),w(M,` ${je??""}`),w(k,et),w(z,bt),w(ne,Gt),w(Ee,tn),w(ue,nn),w(ie,qt),w(Y,ut),w(se,jt),w(V,Bt),w(ke,ln),w(Te,_n),w(de,Qn),w(ze,dt),w(Ne,cn),w(qe,Ot),w(Et,Rt),w(Ze,`${An??""} `),w(zt,bn),w(Ve,ho),w(j,Pa)},[()=>n()("home.vibeBanner"),()=>n()("home.title"),()=>n()("home.description.part1"),()=>n()("home.description.linkText"),()=>n()("home.description.part2"),()=>n()("home.techStack.title"),()=>n()("home.techStack.svelte"),()=>n()("home.techStack.svelteDesc"),()=>n()("home.techStack.flutter"),()=>n()("home.techStack.flutterDesc"),()=>n()("home.techStack.firebase"),()=>n()("home.techStack.firebaseDesc"),()=>n()("home.techStack.dokplay"),()=>n()("home.techStack.dokplayDesc"),()=>n()("home.aiTruth.title"),()=>n()("home.todo.title"),()=>n()("home.overview.title"),()=>n()("home.overview.brand"),()=>n()("home.overview.description"),()=>n()("home.aiChange.title"),()=>n()("home.aiChange.description"),()=>n()("home.aiChange.emphasis"),()=>n()("home.aiChange.highlight"),()=>n()("home.aiChange.conclusion"),()=>n()("home.aiChange.hint")]),E(t,f),nt(),s()}wt(["click"]);we(ov,{},[],[],!0);var II=T('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),TI=T('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),SI=T('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const AI={hash:"svelte-1mz53xx",code:`\r
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
  }`};function av(t,e){tt(e,!1),rt(t,AI);const n=()=>ot(Lt,"$t",s),r=()=>ot(Ra,"$user",s),[s,i]=At();function o(v){console.log("Login successful:",v.detail),alert(n()("로그인성공알림",{phone:v.detail.phoneNumber})),window.location.href="/"}function a(v){console.error("Login error:",v.detail),alert(n()("로그인실패",{error:v.detail.error}))}vn();var l=SI(),c=d(l),f=d(c);{var p=v=>{var g=II(),b=d(g),y=d(b,!0);u(b);var C=_(b,2),I=d(C,!0);u(C);var S=_(C,2);u(g),D((N,M)=>{w(y,N),w(I,M)},[()=>n()("로그인"),()=>n()("전화번호로로그인")]),Us("login-success",S,o),Us("login-error",S,a),E(v,g)},h=v=>{var g=TI(),b=d(g),y=d(b,!0);u(b);var C=_(b,2),I=d(C,!0);u(C);var S=_(C,2),N=d(S,!0);u(S),u(g),D((M,L,A)=>{w(y,M),w(I,L),w(N,A)},[()=>n()("웰컴"),()=>n()("로그인하셨습니다",{phone:r().phoneNumber}),()=>n()("홈으로이동")]),E(v,g)};Q(f,v=>{r()?v(h,!1):v(p)})}u(c),u(l),E(t,l),nt(),i()}we(av,{},[],[],!0);var RI=T('<button class="menu-item svelte-163o8b2"> </button>'),PI=T('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const NI={hash:"svelte-163o8b2",code:`\r
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
  }`};function lv(t,e){tt(e,!0),rt(t,NI);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("메뉴"))});function i(h){window.history.pushState({},"",h),window.dispatchEvent(new PopStateEvent("popstate"))}let o=Zr(()=>[{label:n()("홈"),path:"/"},{label:n()("로그인"),path:"/user/login"},{label:n()("사용자프로필"),path:"/user/profile"},{label:n()("게시물목록"),path:"/post/list"},{label:n()("게시물상세예시"),path:"/post/detail/123"},{label:n()("채팅목록"),path:"/chat/list"},{label:n()("설정"),path:"/settings"},{label:n()("정보"),path:"/about"},{label:n()("도움말"),path:"/help"},{label:n()("이용약관"),path:"/terms"},{label:n()("개인정보"),path:"/privacy"},{label:n()("문의하기"),path:"/contact"},{label:n()("테스트게시글생성"),path:"/dev/generate-posts"}]);var a=PI(),l=d(a),c=d(l),f=d(c,!0);u(c);var p=_(c,2);Jt(p,21,()=>m(o),h=>h.path,(h,v)=>{var g=RI();g.__click=()=>i(m(v).path);var b=d(g,!0);u(g),D(()=>w(b,m(v).label)),E(h,g)}),u(p),u(l),u(a),D(h=>w(f,h),[()=>n()("페이지선택")]),E(t,a),nt(),s()}wt(["click"]);we(lv,{},[],[],!0);var LI=T('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),OI=T('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),DI=T('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),$I=T('<p class="upload-status svelte-17u94r3"> </p>'),MI=T('<div class="message-box success-message svelte-17u94r3"> </div>'),UI=T('<div class="message-box error-message svelte-17u94r3"> </div>'),FI=T('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const zI={hash:"svelte-17u94r3",code:`
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
  }`};function cv(t,e){tt(e,!0),rt(t,zI);const n=()=>ot(Lt,"$t",r),[r,s]=At();let i=re(Qt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=re(null),a=re(null),l=re(!1),c=re(!1),f=re(null),p=re(null),h=null,v=null;function g(j){x(f,j,!0),h&&clearTimeout(h),h=setTimeout(()=>{x(f,null),h=null},3e3)}function b(j){x(p,j,!0),v&&clearTimeout(v),v=setTimeout(()=>{x(p,null),v=null},5e3)}hf(()=>{h&&clearTimeout(h),v&&clearTimeout(v)}),Ft(()=>{gn(n()("프로필수정"))}),Ms(()=>{if(Se.data){m(i).displayName=Se.data.displayName||"",m(i).gender=Se.data.gender||"",m(i).dateOfBirth=Se.data.dateOfBirth||"";const j=Se.data.photoUrl??Se.data.photoURL??"";m(i).photoUrl=j,x(o,j||null,!0)}});function y(){m(c)||m(a)?.click()}async function C(j){const W=j.currentTarget?.files?.[0];if(!W)return;if(m(c)){b(n()("사진작업진행중"));return}if(!Se.isAuthenticated||!Se.uid){b(n()("로그인필요"));return}if(!W.type.startsWith("image/")){b(n()("이미지파일만가능"));return}if(W.size>5*1024*1024){b(n()("파일크기5MB제한"));return}const ye=m(o),$e=m(i).photoUrl,je=new FileReader;je.onload=et=>{const bt=et.target?.result;typeof bt=="string"&&x(o,bt,!0)},je.readAsDataURL(W);try{await S(W)}catch{x(o,ye,!0),m(i).photoUrl=$e,m(a)&&(m(a).value="")}}async function I(){if(m(c))return;if(!Se.isAuthenticated||!Se.uid){b(n()("로그인필요"));return}const j=m(o),G=m(i).photoUrl;x(o,null),m(i).photoUrl="",m(a)&&(m(a).value="");try{x(c,!0),await Se.updateProfile({photoUrl:null}),g(n()("프로필사진제거완료"))}catch(W){console.error("프로필 사진 제거 오류:",W),b(n()("사진제거실패",{error:W.message||n()("알수없는오류")})),x(o,j,!0),m(i).photoUrl=G}finally{x(c,!1)}}async function S(j,{showSuccess:G=!0}={}){if(!Se.isAuthenticated||!Se.uid)throw b(n()("로그인필요")),new Error("User is not authenticated");try{x(c,!0);const W=j.name.split(".").pop()?.toLowerCase()||"jpg",ye=`profile_${Se.uid}_${Date.now()}.${W}`,$e=Qk(tC,`users/${Se.uid}/profile/${ye}`),je=await Kk($e,j),et=await Yk(je.ref);return m(i).photoUrl=et,x(o,et,!0),await Se.updateProfile({photoUrl:et}),G&&g(n()("프로필사진저장완료")),et}catch(W){throw console.error("프로필 사진 업로드 오류:",W),b(n()("사진저장실패",{error:W.message||n()("알수없는오류")})),W}finally{x(c,!1),m(a)&&(m(a).value="")}}async function N(j){j.preventDefault(),x(l,!0),x(p,null),x(f,null);try{let G=m(i).photoUrl;const W=m(a)?.files?.[0];if(W)try{G=await S(W,{showSuccess:!1})}catch{x(l,!1);return}const ye={displayName:m(i).displayName,gender:m(i).gender,dateOfBirth:m(i).dateOfBirth,photoUrl:G||null};await Se.updateProfile(ye),g(n()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",ye)}catch(G){console.error("프로필 업데이트 오류:",G),b(n()("프로필업데이트실패",{error:G.message||n()("알수없는오류")}))}finally{x(l,!1)}}function M(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var L=FI(),A=d(L),k=d(A),R=d(k),O=d(R,!0);u(R);var U=_(R,2),z=d(U);z.__change=C,hc(z,j=>x(a,j),()=>m(a));var K=_(z,2),ne=d(K);ne.__click=y;var te=d(ne);{var le=j=>{var G=LI();D(()=>cc(G,`background-image: url("${m(o)}")`)),E(j,G)},Ee=j=>{var G=OI(),W=_(d(G),2),ye=d(W,!0);u(W),u(G),D($e=>w(ye,$e),[()=>n()("사진없음")]),E(j,G)};Q(te,j=>{m(o)?j(le):j(Ee,!1)})}u(ne);var fe=_(ne,2);{var ue=j=>{var G=DI();G.__click=I;var W=d(G);tv(W,{size:18,"stroke-width":3}),u(G),D(ye=>{G.disabled=m(l)||m(c),Oe(G,"aria-label",ye)},[()=>n()("프로필사진제거")]),E(j,G)};Q(fe,j=>{m(o)&&j(ue)})}var B=_(fe,2),H=d(B);Km(H,{size:20,"stroke-width":2}),u(B),u(K);var ie=_(K,2),P=d(ie,!0);u(ie);var Y=_(ie,2);{var F=j=>{var G=$I(),W=d(G,!0);u(G),D(ye=>w(W,ye),[()=>n()("사진저장중")]),E(j,G)};Q(Y,j=>{m(c)&&j(F)})}u(U),u(k);var q=_(k,2),se=d(q),Z=d(se,!0);u(se);var V=_(se,2);Fs(V);var J=_(V,2),ee=d(J,!0);u(J),u(q);var ke=_(q,2),ce=d(ke),ve=d(ce,!0);u(ce);var xe=_(ce,2),Te=d(xe),he=d(Te,!0);u(Te),Te.value=Te.__value="";var ge=_(Te),Ce=d(ge,!0);u(ge),ge.value=ge.__value="male";var de=_(ge),De=d(de,!0);u(de),de.value=de.__value="female";var Fe=_(de),He=d(Fe,!0);u(Fe),Fe.value=Fe.__value="other",u(xe),u(ke);var ze=_(ke,2),Ne=d(ze),pe=d(Ne,!0);u(Ne);var oe=_(Ne,2);Fs(oe);var Le=_(oe,2),qe=d(Le,!0);u(Le),u(ze);var Xe=_(ze,2);{var Ye=j=>{var G=MI(),W=d(G);u(G),D(()=>w(W,`✅ ${m(f)??""}`)),E(j,G)};Q(Xe,j=>{m(f)&&j(Ye)})}var Et=_(Xe,2);{var ct=j=>{var G=UI(),W=d(G);u(G),D(()=>w(W,`⚠️ ${m(p)??""}`)),E(j,G)};Q(Et,j=>{m(p)&&j(ct)})}var Ze=_(Et,2),st=d(Ze),zt=d(st,!0);u(st);var Ve=_(st,2);Ve.__click=M;var Ct=d(Ve,!0);u(Ve),u(Ze),u(A),u(L),D((j,G,W,ye,$e,je,et,bt,Gt,tn,nn,qt,ut,jt,Bt,ln)=>{w(O,j),Oe(z,"aria-label",G),ne.disabled=m(l)||m(c),Oe(ne,"aria-label",W),w(P,ye),w(Z,$e),Oe(V,"placeholder",je),V.disabled=m(l),w(ee,et),w(ve,bt),xe.disabled=m(l),w(he,Gt),w(Ce,tn),w(De,nn),w(He,qt),w(pe,ut),oe.disabled=m(l),w(qe,jt),st.disabled=m(l)||m(c)||!Se.isAuthenticated,w(zt,Bt),Ve.disabled=m(l),w(Ct,ln)},[()=>n()("프로필사진"),()=>n()("프로필사진선택"),()=>m(o)?n()("프로필사진변경"):n()("프로필사진추가"),()=>n()("프로필사진클릭변경"),()=>n()("닉네임"),()=>n()("닉네임입력"),()=>n()("닉네임최대50자"),()=>n()("성별"),()=>n()("선택하지않음"),()=>n()("남자"),()=>n()("여자"),()=>n()("기타"),()=>n()("생년월일"),()=>n()("생년월일형식"),()=>m(l)?n()("저장중"):n()("저장"),()=>n()("취소")]),Us("submit",A,N),zs(V,()=>m(i).displayName,j=>m(i).displayName=j),dc(xe,()=>m(i).gender,j=>m(i).gender=j),zs(oe,()=>m(i).dateOfBirth,j=>m(i).dateOfBirth=j),E(t,L),nt(),s()}wt(["change","click"]);we(cv,{},[],[],!0);var qI=T('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),jI=T('<div class="loading-container svelte-a4suww"><!></div>'),BI=T('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),VI=T('<div class="error-container svelte-a4suww"><!></div>'),HI=T('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),WI=T('<div class="empty-container svelte-a4suww"><!></div>'),GI=T('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),KI=T('<div class="item-wrapper svelte-a4suww"><!></div>'),YI=T('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),QI=T('<div class="loading-more svelte-a4suww"><!></div>'),JI=T('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),XI=T('<div class="no-more svelte-a4suww"><!></div>'),ZI=T('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),eT=T('<div class="database-list-view svelte-a4suww"><!></div>');const tT={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function ku(t,e){tt(e,!0),rt(t,tT);let n=at(e,"path",7,""),r=at(e,"pageSize",7,10),s=at(e,"orderBy",7,"createdAt"),i=at(e,"threshold",7,300),o=at(e,"reverse",7,!1),a=at(e,"item",7),l=at(e,"loading",7),c=at(e,"empty",7),f=at(e,"error",7),p=at(e,"loadingMore",7),h=at(e,"noMore",7),v=re(Qt([])),g=re(!1),b=re(!0),y=re(!0),C=re(null),I=re(null),S=re(0),N=re(null),M=re(null),L=new Map,A=new Map,k=null,R=re(!1);Ms(()=>(n()&&qn&&K(),()=>{console.log("DatabaseListView: Cleaning up listeners"),k&&(k(),k=null),L.forEach(P=>{P()}),L.clear(),console.log("DatabaseListView: All listeners cleaned up")})),Ms(()=>{if(m(M))return m(M).addEventListener("scroll",te),window.addEventListener("scroll",le),()=>{m(M)?.removeEventListener("scroll",te),window.removeEventListener("scroll",le)}});function O(P,Y){if(P.length===0)return null;const F=P[P.length-1],q=F.data[Y];return q!=null&&q!==""?(console.log(`DatabaseListView: Using cursor from '${Y}':`,{value:q,key:F.key}),{value:q,key:F.key}):(console.warn(`DatabaseListView: Field '${Y}' not found in last item, using key as fallback:`,F.key),{value:F.key,key:F.key})}function U(P,Y){const F=`${P}`;if(L.has(F))return;const q=rr(qn,`${n()}/${P}`),se=fu(q,Z=>{if(Z.exists()){const V=Z.val();m(v)[Y]={key:P,data:V},x(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${P}`,V)}},Z=>{console.error(`DatabaseListView: Error listening to item ${P}`,Z)});L.set(F,se)}function z(){k&&(k(),k=null),console.log("DatabaseListView: Setting up child_added listener for",n()),x(R,!1);const P=rr(qn,n()),Y=di(P,ui(s()));k=Ex(Y,F=>{if(!m(R))return;const q=F.key,se=F.val();if(m(v).some(J=>J.key===q)){console.log("DatabaseListView: Child already exists, skipping:",q);return}console.log("DatabaseListView: New child added:",q,se);const V={key:q,data:se};if(o())x(v,[V,...m(v)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),U(q,0);else{const J=m(v).length;x(v,[...m(v),V],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),U(q,J)}},F=>{console.error("DatabaseListView: Error in child_added listener",F)}),setTimeout(()=>{x(R,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}async function K(){console.log("DatabaseListView: Loading initial data from",n(),"(reverse:",o(),")"),x(b,!0),x(N,null),x(v,[],!0),A.clear(),L.forEach(P=>P()),L.clear(),k&&(k(),k=null),x(R,!1),x(C,null),x(I,null),x(y,!0),x(S,0);try{const P=rr(qn,n());let Y;o()?(Y=di(P,ui(s()),oh(r()+1)),console.log("DatabaseListView: Using limitToLast for reverse order")):(Y=di(P,ui(s()),ih(r()+1)),console.log("DatabaseListView: Using limitToFirst for normal order"));const F=await sh(Y);if(F.exists()){const q=[],se=F.val();if(Object.entries(se).forEach(([Z,V])=>{q.push({key:Z,data:V})}),console.log(`DatabaseListView: Initial query returned ${q.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",q.map(Z=>({key:Z.key,[s()]:Z.data[s()]}))),o()&&(q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),q.length>r()){x(y,!0),x(v,q.slice(0,r()),!0);const Z=O(m(v),s());Z?(x(C,Z.value,!0),x(I,Z.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:m(C),lastLoadedKey:m(I)})):x(y,!1)}else if(x(y,!1),x(v,q,!0),m(v).length>0){const Z=O(m(v),s());Z&&(x(C,Z.value,!0),x(I,Z.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:m(C),lastLoadedKey:m(I)}))}A.set(0,m(v)),m(v).forEach((Z,V)=>{U(Z.key,V)}),console.log(`DatabaseListView: Page ${m(S)} - Loaded ${m(v).length} items, hasMore: ${m(y)}`)}else console.log("DatabaseListView: No data found"),x(v,[],!0),x(y,!1)}catch(P){console.error("DatabaseListView: Load error",P),x(N,P.message,!0)}finally{x(b,!1),z()}}async function ne(){if(m(g)||!m(y)){console.log("DatabaseListView: Cannot load more - loading:",m(g),"hasMore:",m(y));return}cl(S),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(S)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",m(C),"lastLoadedKey:",m(I)),x(g,!0),x(N,null);try{if(m(C)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),x(y,!1),x(g,!1);return}const P=rr(qn,n());let Y;o()?(Y=di(P,ui(s()),Cx(m(C)),oh(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination")):(Y=di(P,ui(s()),Tx(m(C)),ih(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination"));const F=await sh(Y);if(F.exists()){const q=[],se=F.val();Object.entries(se).forEach(([ee,ke])=>{q.push({key:ee,data:ke})}),console.log(`DatabaseListView: Page ${m(S)} - Query returned ${q.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(S)} - Items orderBy values:`,q.map(ee=>({key:ee.key,[s()]:ee.data[s()]}))),o()&&(q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const Z=new Set(m(v).map(ee=>ee.key)),V=q.filter(ee=>!Z.has(ee.key));if(console.log(`DatabaseListView: Page ${m(S)} - After filtering duplicates: ${V.length} items`),V.length===0){console.log("DatabaseListView: No more unique items after filtering"),x(y,!1),x(g,!1);return}if(q.length>r()){x(y,!0);const ee=V.slice(0,r());x(v,[...m(v),...ee],!0);const ke=O(ee,s());ke?(x(C,ke.value,!0),x(I,ke.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:m(C),lastLoadedKey:m(I)})):(x(y,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(x(y,!1),x(v,[...m(v),...V],!0),V.length>0){const ee=O(V,s());ee&&(x(C,ee.value,!0),x(I,ee.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:m(C),lastLoadedKey:m(I)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const J=m(v).length-(V.length>r()?r():V.length);m(v).slice(J).forEach((ee,ke)=>{U(ee.key,J+ke)}),console.log(`DatabaseListView: Page ${m(S)} - Loaded ${V.length} more items, total: ${m(v).length}, hasMore: ${m(y)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),x(y,!1)}catch(P){console.error("DatabaseListView: Load more error",{name:P.name,message:P.message,code:P.code,toString:P.toString()}),x(N,P.message||P.code||"Unknown error",!0)}finally{x(g,!1)}}function te(){if(!m(M)||m(g)||!m(y))return;const{scrollTop:P,scrollHeight:Y,clientHeight:F}=m(M);Y-(P+F)<i()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),ne())}function le(){if(m(g)||!m(y))return;const P=window.pageYOffset||document.documentElement.scrollTop,Y=document.documentElement.scrollHeight,F=window.innerHeight;Y-(P+F)<i()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),ne())}function Ee(){console.log("DatabaseListView: Refreshing..."),K()}var fe={refresh:Ee,get path(){return n()},set path(P=""){n(P),it()},get pageSize(){return r()},set pageSize(P=10){r(P),it()},get orderBy(){return s()},set orderBy(P="createdAt"){s(P),it()},get threshold(){return i()},set threshold(P=300){i(P),it()},get reverse(){return o()},set reverse(P=!1){o(P),it()},get item(){return a()},set item(P){a(P),it()},get loading(){return l()},set loading(P){l(P),it()},get empty(){return c()},set empty(P){c(P),it()},get error(){return f()},set error(P){f(P),it()},get loadingMore(){return p()},set loadingMore(P){p(P),it()},get noMore(){return h()},set noMore(P){h(P),it()}},ue=eT(),B=d(ue);{var H=P=>{var Y=jI(),F=d(Y);{var q=Z=>{var V=be(),J=ae(V);ws(J,l),E(Z,V)},se=Z=>{var V=qI();E(Z,V)};Q(F,Z=>{l()?Z(q):Z(se,!1)})}u(Y),E(P,Y)},ie=P=>{var Y=be(),F=ae(Y);{var q=Z=>{var V=VI(),J=d(V);{var ee=ce=>{var ve=be(),xe=ae(ve);ws(xe,f,()=>m(N)),E(ce,ve)},ke=ce=>{var ve=BI(),xe=_(d(ve),2),Te=d(xe,!0);u(xe);var he=_(xe,2);he.__click=Ee,u(ve),D(()=>w(Te,m(N))),E(ce,ve)};Q(J,ce=>{f()?ce(ee):ce(ke,!1)})}u(V),E(Z,V)},se=Z=>{var V=be(),J=ae(V);{var ee=ce=>{var ve=WI(),xe=d(ve);{var Te=ge=>{var Ce=be(),de=ae(Ce);ws(de,c),E(ge,Ce)},he=ge=>{var Ce=HI();E(ge,Ce)};Q(xe,ge=>{c()?ge(Te):ge(he,!1)})}u(ve),E(ce,ve)},ke=ce=>{var ve=ZI(),xe=d(ve);Jt(xe,19,()=>m(v),de=>de.key,(de,De,Fe)=>{var He=KI(),ze=d(He);{var Ne=oe=>{var Le=be(),qe=ae(Le);ws(qe,a,()=>m(De),()=>m(Fe)),E(oe,Le)},pe=oe=>{var Le=GI(),qe=d(Le),Xe=d(qe,!0);u(qe),u(Le),D(Ye=>w(Xe,Ye),[()=>JSON.stringify(m(De).data,null,2)]),E(oe,Le)};Q(ze,oe=>{a()?oe(Ne):oe(pe,!1)})}u(He),D(()=>Oe(He,"data-key",m(De).key)),E(de,He)});var Te=_(xe,2);{var he=de=>{var De=QI(),Fe=d(De);{var He=Ne=>{var pe=be(),oe=ae(pe);ws(oe,p),E(Ne,pe)},ze=Ne=>{var pe=YI();E(Ne,pe)};Q(Fe,Ne=>{p()?Ne(He):Ne(ze,!1)})}u(De),E(de,De)};Q(Te,de=>{m(g)&&de(he)})}var ge=_(Te,2);{var Ce=de=>{var De=XI(),Fe=d(De);{var He=Ne=>{var pe=be(),oe=ae(pe);ws(oe,h),E(Ne,pe)},ze=Ne=>{var pe=JI();E(Ne,pe)};Q(Fe,Ne=>{h()?Ne(He):Ne(ze,!1)})}u(De),E(de,De)};Q(ge,de=>{!m(y)&&!m(g)&&de(Ce)})}u(ve),E(ce,ve)};Q(J,ce=>{m(v).length===0?ce(ee):ce(ke,!1)},!0)}E(Z,V)};Q(F,Z=>{m(N)?Z(q):Z(se,!1)},!0)}E(P,Y)};Q(B,P=>{m(b)?P(H):P(ie,!1)})}return u(ue),hc(ue,P=>x(M,P),()=>m(M)),E(t,ue),nt(fe)}wt(["click"]);we(ku,{path:{},pageSize:{},orderBy:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var nT=T('<img class="svelte-r48pmi"/>'),rT=T('<div class="avatar-placeholder svelte-r48pmi"> </div>'),sT=T('<span class="badge-me svelte-r48pmi"> </span>'),iT=T('<p class="user-email svelte-r48pmi"> </p>'),oT=T('<p class="user-bio svelte-r48pmi"> </p>'),aT=T('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),lT=T('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),cT=T('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),uT=T('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),dT=T('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),hT=T('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const fT={hash:"svelte-r48pmi",code:`\r
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
  }`};function uv(t,e){tt(e,!1),rt(t,fT);const n=()=>ot(Lt,"$t",r),[r,s]=At();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):n()("정보없음")}Ft(()=>{gn(n()("사용자찾기"))});function o(a){a===Se.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}vn(),ku(t,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(v,g=fn)=>{var b=aT();b.__click=()=>o(g().key),b.__keydown=B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),o(g().key))};var y=d(b),C=d(y);{var I=B=>{var H=nT();D(ie=>{Oe(H,"src",g().data?.photoUrl??g().data?.photoURL),Oe(H,"alt",ie)},[()=>g().data?.displayName||n()("사용자")]),E(B,H)},S=B=>{var H=rT(),ie=d(H,!0);u(H),D(P=>w(ie,P),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),E(B,H)};Q(C,B=>{g().data?.photoUrl||g().data?.photoURL?B(I):B(S,!1)})}u(y);var N=_(y,2),M=d(N),L=d(M),A=_(L);{var k=B=>{var H=sT(),ie=d(H,!0);u(H),D(P=>w(ie,P),[()=>n()("나뱃지")]),E(B,H)};Q(A,B=>{g().key===Se.uid&&B(k)})}u(M);var R=_(M,2),O=d(R,!0);u(R);var U=_(R,2);{var z=B=>{var H=iT(),ie=d(H,!0);u(H),D(()=>w(ie,g().data.email)),E(B,H)};Q(U,B=>{g().data?.email&&B(z)})}var K=_(U,2);{var ne=B=>{var H=oT(),ie=d(H,!0);u(H),D(()=>w(ie,g().data.bio)),E(B,H)};Q(K,B=>{g().data?.bio&&B(ne)})}var te=_(K,2),le=d(te);u(te),u(N);var Ee=_(N,2),fe=d(Ee);fe.__click=B=>{B.stopPropagation(),o(g().key)};var ue=d(fe,!0);u(fe),u(Ee),u(b),D((B,H,ie,P)=>{w(L,`${B??""} `),w(O,g().key),w(le,`${H??""} ${ie??""}`),w(ue,P)},[()=>g().data?.displayName||n()("이름없음"),()=>n()("가입일"),()=>i(g().data?.createdAt),()=>n()("프로필보기")]),E(v,b)},loading:v=>{var g=lT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),D(C=>w(y,C),[()=>n()("사용자목록로딩")]),E(v,g)},empty:v=>{var g=cT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),D(C=>w(y,C),[()=>n()("등록된사용자없음")]),E(v,g)},error:(v,g=fn)=>{var b=uT(),y=_(d(b),2),C=d(y,!0);u(y);var I=_(y,2),S=d(I,!0);u(I),u(b),D(N=>{w(C,N),w(S,g())},[()=>n()("사용자목록로드실패")]),E(v,b)},loadingMore:v=>{var g=dT(),b=_(d(g),2),y=d(b,!0);u(b),u(g),D(C=>w(y,C),[()=>n()("더많은사용자로딩")]),E(v,g)},noMore:v=>{var g=hT(),b=d(g),y=d(b,!0);u(b),u(g),D(C=>w(y,C),[()=>n()("모든사용자로드완료")]),E(v,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),nt(),s()}wt(["click","keydown"]);we(uv,{},[],[],!0);async function pT(t,e,n,r,s){try{const i=Date.now(),o={uid:e,title:r,content:s,author:n,category:t,createdAt:i,updatedAt:i},a=rr(qn,`posts/${t}`);return{success:!0,postId:(await Tm(a,o)).key}}catch(i){return console.error("게시글 생성 실패:",i),{success:!1,error:i.message}}}const fi=[{value:"community",label:"커뮤니티"},{value:"qna",label:"질문과답변"},{value:"news",label:"뉴스"},{value:"market",label:"회원장터"}],Cu=Xs([]);function il(t,e="success",n=3e3){const r=Date.now();Cu.update(s=>[...s,{id:r,message:t,type:e}]),setTimeout(()=>{dv(r)},n)}function dv(t){Cu.update(e=>e.filter(n=>n.id!==t))}var mT=T('<div class="loading-screen svelte-1r1wwfo"><p> </p></div>'),vT=T("<button> </button>"),gT=T('<button class="action-btn edit icon-only svelte-1r1wwfo">✏️</button> <button class="action-btn delete icon-only svelte-1r1wwfo">🗑️</button>',1),_T=T('<div class="post-item svelte-1r1wwfo"><div class="post-item-top svelte-1r1wwfo"><span class="post-category-pill svelte-1r1wwfo"> </span> <span class="post-number svelte-1r1wwfo"> </span></div> <h3 class="post-title svelte-1r1wwfo"> </h3> <p class="post-content svelte-1r1wwfo"> </p> <div class="post-meta svelte-1r1wwfo"><div class="author-chip svelte-1r1wwfo"><span class="author-avatar svelte-1r1wwfo"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1r1wwfo"> </span></div> <div class="post-actions svelte-1r1wwfo"><div class="post-actions-left svelte-1r1wwfo"><button class="action-btn svelte-1r1wwfo"> </button> <button class="action-btn svelte-1r1wwfo"> </button> <button class="action-btn svelte-1r1wwfo"> </button> <button class="action-btn svelte-1r1wwfo"> </button></div> <div class="post-actions-right svelte-1r1wwfo"><!></div></div></div>'),bT=T('<div class="empty-state svelte-1r1wwfo"><div class="empty-illustration svelte-1r1wwfo">🗂️</div> <h3 class="empty-title svelte-1r1wwfo"> </h3> <p class="empty-message svelte-1r1wwfo"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),wT=T('<div class="loading-state svelte-1r1wwfo"><div class="spinner svelte-1r1wwfo"></div> <p> </p></div>'),yT=T('<div class="error-state svelte-1r1wwfo"><div class="error-icon svelte-1r1wwfo">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),ET=T('<div class="loading-more svelte-1r1wwfo"><div class="spinner small svelte-1r1wwfo"></div> <p class="svelte-1r1wwfo"> </p></div>'),xT=T('<div class="no-more svelte-1r1wwfo"><p> </p></div>'),kT=T("<option> </option>"),CT=T('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <select id="category" class="form-control svelte-1r1wwfo"><option> </option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),IT=T('<div class="post-list-container svelte-1r1wwfo"><div class="page-header svelte-1r1wwfo"><div><h1 class="page-title svelte-1r1wwfo"> </h1> <p class="page-subtitle svelte-1r1wwfo"> </p></div> <div class="page-header-action svelte-1r1wwfo"><span class="category-chip svelte-1r1wwfo"> </span></div></div> <div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const TT={hash:"svelte-1r1wwfo",code:`\r
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
  }`};function hv(t,e){tt(e,!0),rt(t,TT);const n=()=>ot(Lt,"$t",r),[r,s]=At();let i=re(null),o=re(""),a=re(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let c=re(Qt(l.get("category")||"community")),f=re(!1),p=re(""),h=re(""),v=re(""),g=re(!1);Ft(()=>{gn(n()("게시판"));const k=ds.onAuthStateChanged(async R=>{if(R){x(i,R.uid,!0);const O=R.displayName||R.email||n()("익명");x(o,O,!0)}else x(i,null),x(o,"");x(a,!1)});return()=>k()});function b(){if(!m(i)){window.location.href="/user/login";return}x(f,!0)}function y(){x(f,!1),x(p,""),x(h,""),x(v,"")}async function C(){if(!m(p)){alert(n()("카테고리선택필요"));return}if(!m(h).trim()){alert(n()("제목입력필요"));return}if(!m(v).trim()){alert(n()("내용입력필요"));return}if(!m(i)||!m(o)){alert(n()("로그인정보확인불가"));return}x(g,!0);try{const k=await pT(m(p),m(i),m(o),m(h),m(v));if(k.success){const R=m(p);x(f,!1),x(p,""),x(h,""),x(v,""),il(n()("게시글작성완료"),"success")}else il(n()("게시글저장실패",{error:k.error||"Unknown error"}),"error")}catch(k){console.error("게시글 저장 오류:",k),il(n()("게시글저장중오류"),"error")}finally{x(g,!1)}}function I(k){x(c,k,!0),window.history.pushState({},"",`/post/list?category=${k}`)}let S=Zr(()=>fi.find(k=>k.value===m(c))??fi[0]);var N=be(),M=ae(N);{var L=k=>{var R=mT(),O=d(R),U=d(O,!0);u(O),u(R),D(z=>w(U,z),[()=>n()("로딩중")]),E(k,R)},A=k=>{var R=IT(),O=ae(R),U=d(O),z=d(U),K=d(z),ne=d(K,!0);u(K);var te=_(K,2),le=d(te);u(te),u(z);var Ee=_(z,2),fe=d(Ee),ue=d(fe,!0);u(fe),u(Ee),u(U);var B=_(U,2),H=d(B),ie=d(H);Jt(ie,21,()=>fi,V=>V.value,(V,J)=>{var ee=vT();ee.__click=()=>I(m(J).value);var ke=d(ee,!0);u(ee),D(()=>{yn(ee,1,`tab ${m(c)===m(J).value?"active":""}`,"svelte-1r1wwfo"),w(ke,m(J).label)}),E(V,ee)}),u(ie),u(H);var P=_(H,2);P.__click=b;var Y=d(P);u(P),u(B);var F=_(B,2),q=d(F);{const V=(Te,he=fn,ge=fn)=>{const Ce=Zr(()=>fi.find(ut=>ut.value===he().data?.category)??m(S));var de=_T(),De=d(de),Fe=d(De),He=d(Fe,!0);u(Fe);var ze=_(Fe,2),Ne=d(ze);u(ze),u(De);var pe=_(De,2),oe=d(pe,!0);u(pe);var Le=_(pe,2),qe=d(Le,!0);u(Le);var Xe=_(Le,2),Ye=d(Xe),Et=d(Ye),ct=d(Et,!0);u(Et);var Ze=_(Et,2),st=d(Ze,!0);u(Ze),u(Ye);var zt=_(Ye,2),Ve=d(zt,!0);u(zt),u(Xe);var Ct=_(Xe,2),j=d(Ct),G=d(j),W=d(G);u(G);var ye=_(G,2),$e=d(ye);u(ye);var je=_(ye,2),et=d(je);u(je);var bt=_(je,2),Gt=d(bt);u(bt),u(j);var tn=_(j,2),nn=d(tn);{var qt=ut=>{var jt=gT(),Bt=ae(jt),ln=_(Bt,2);D((_n,Qn)=>{Oe(Bt,"title",_n),Oe(ln,"title",Qn)},[()=>n()("수정"),()=>n()("삭제")]),E(ut,jt)};Q(nn,ut=>{m(i)===he().data.uid&&ut(qt)})}u(tn),u(Ct),u(de),D((ut,jt,Bt,ln,_n,Qn,dt,cn,Ot,Rt,An,bn)=>{w(He,m(Ce).label),w(Ne,`#${ut??""}`),w(oe,he().data.title),w(qe,he().data.content),w(ct,jt),w(st,Bt),w(Ve,ln),Oe(G,"title",_n),w(W,`💬 ${Qn??""}`),Oe(ye,"title",dt),w($e,`❤️ ${cn??""}`),Oe(je,"title",Ot),w(et,`💬 ${Rt??""}`),Oe(bt,"title",An),w(Gt,`🚨 ${bn??""}`)},[()=>String(ge()+1).padStart(2,"0"),()=>(he().data.author||n()("익명")).charAt(0).toUpperCase(),()=>he().data.author||n()("익명"),()=>new Date(he().data.createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>n()("댓글"),()=>n()("댓글"),()=>n()("좋아요"),()=>n()("좋아요"),()=>n()("채팅"),()=>n()("채팅"),()=>n()("신고"),()=>n()("신고")]),E(Te,de)},J=Te=>{var he=bT(),ge=_(d(he),2),Ce=d(ge,!0);u(ge);var de=_(ge,2),De=d(de,!0);u(de);var Fe=_(de,2);Fe.__click=b;var He=d(Fe);u(Fe),u(he),D((ze,Ne,pe)=>{w(Ce,ze),w(De,Ne),w(He,`✏️ ${pe??""}`)},[()=>n()("게시글없음"),()=>n()("첫게시글공유"),()=>n()("새글작성")]),E(Te,he)},ee=Te=>{var he=wT(),ge=_(d(he),2),Ce=d(ge,!0);u(ge),u(he),D(de=>w(Ce,de),[()=>n()("게시글로딩중")]),E(Te,he)},ke=(Te,he=fn)=>{var ge=yT(),Ce=_(d(ge),2),de=d(Ce),De=d(de,!0);u(de);var Fe=_(de,2),He=d(Fe,!0);u(Fe),u(Ce),u(ge),D(ze=>{w(De,ze),w(He,he())},[()=>n()("게시글로드실패")]),E(Te,ge)},ce=Te=>{var he=ET(),ge=_(d(he),2),Ce=d(ge,!0);u(ge),u(he),D(de=>w(Ce,de),[()=>n()("더많은게시글로딩")]),E(Te,he)},ve=Te=>{var he=xT(),ge=d(he),Ce=d(ge,!0);u(ge),u(he),D(de=>w(Ce,de),[()=>n()("모든게시글확인")]),E(Te,he)};let xe=Zr(()=>`posts/${m(c)}`);ku(q,{get path(){return m(xe)},orderBy:"createdAt",reverse:!0,pageSize:20,item:V,empty:J,loading:ee,error:ke,loadingMore:ce,noMore:ve,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}u(F),u(O);var se=_(O,2);{var Z=V=>{var J=CT();J.__click=()=>x(f,!1),J.__keydown=Ve=>Ve.key==="Escape"&&x(f,!1);var ee=d(J);ee.__click=Ve=>Ve.stopPropagation();var ke=d(ee),ce=d(ke),ve=d(ce,!0);u(ce);var xe=_(ce,2);xe.__click=()=>x(f,!1),u(ke);var Te=_(ke,2),he=d(Te),ge=d(he),Ce=d(ge,!0);u(ge);var de=_(ge,2),De=d(de),Fe=d(De,!0);u(De),De.value=De.__value="";var He=_(De);Jt(He,17,()=>fi,Ve=>Ve.value,(Ve,Ct)=>{var j=kT(),G=d(j,!0);u(j);var W={};D(()=>{w(G,m(Ct).label),W!==(W=m(Ct).value)&&(j.value=(j.__value=m(Ct).value)??"")}),E(Ve,j)}),u(de),u(he);var ze=_(he,2),Ne=d(ze),pe=d(Ne,!0);u(Ne);var oe=_(Ne,2);Fs(oe),u(ze);var Le=_(ze,2),qe=d(Le),Xe=d(qe,!0);u(qe);var Ye=_(qe,2);bg(Ye),u(Le),u(Te);var Et=_(Te,2),ct=d(Et);ct.__click=y;var Ze=d(ct,!0);u(ct);var st=_(ct,2);st.__click=C;var zt=d(st,!0);u(st),u(Et),u(ee),u(J),D((Ve,Ct,j,G,W,ye,$e,je,et)=>{w(ve,Ve),w(Ce,Ct),w(Fe,j),w(pe,G),Oe(oe,"placeholder",W),w(Xe,ye),Oe(Ye,"placeholder",$e),ct.disabled=m(g),w(Ze,je),st.disabled=m(g),w(zt,et)},[()=>n()("새게시글작성"),()=>n()("카테고리"),()=>n()("카테고리선택"),()=>n()("제목"),()=>n()("제목입력"),()=>n()("내용"),()=>n()("내용입력"),()=>n()("취소"),()=>m(g)?n()("전송중"):n()("전송")]),dc(de,()=>m(p),Ve=>x(p,Ve)),zs(oe,()=>m(h),Ve=>x(h,Ve)),zs(Ye,()=>m(v),Ve=>x(v,Ve)),E(V,J)};Q(se,V=>{m(f)&&V(Z)})}D((V,J,ee)=>{w(ne,V),w(le,`${m(S).label??""}${J??""}`),w(ue,m(S).label),w(Y,`✏️ ${ee??""}`)},[()=>n()("게시판"),()=>n()("게시판설명"),()=>n()("글쓰기")]),E(k,R)};Q(M,k=>{m(a)?k(L):k(A,!1)})}E(t,N),nt(),s()}wt(["click","keydown"]);we(hv,{},[],[],!0);var ST=T('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const AT={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function fv(t,e){tt(e,!1),rt(t,AT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=ST(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_게시물상세"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(fv,{},[],[],!0);var RT=T('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const PT={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function pv(t,e){tt(e,!1),rt(t,PT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=RT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_채팅목록"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(pv,{},[],[],!0);var NT=T('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const LT={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function mv(t,e){tt(e,!1),rt(t,LT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=NT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_설정"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(mv,{},[],[],!0);var OT=T('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const DT={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function vv(t,e){tt(e,!1),rt(t,DT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=OT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_앱정보"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(vv,{},[],[],!0);var $T=T('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const MT={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function gv(t,e){tt(e,!1),rt(t,MT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=$T(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_도움말"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(gv,{},[],[],!0);var UT=T('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const FT={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function _v(t,e){tt(e,!1),rt(t,FT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=UT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_이용약관"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(_v,{},[],[],!0);var zT=T('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const qT={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function bv(t,e){tt(e,!1),rt(t,qT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=zT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_개인정보"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(bv,{},[],[],!0);var jT=T('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const BT={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function wv(t,e){tt(e,!1),rt(t,BT);const n=()=>ot(Lt,"$t",r),[r,s]=At();Ft(()=>{gn(n()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}vn();var o=jT(),a=d(o),l=d(a),c=_(d(l),2),f=d(c,!0);u(c);var p=_(c,2),h=d(p,!0);u(p),u(l);var v=_(l,2);v.__click=i;var g=d(v,!0);u(v),u(a),u(o),D((b,y,C)=>{w(f,b),w(h,y),w(g,C)},[()=>n()("공사중메시지"),()=>n()("공사중설명_문의하기"),()=>n()("메뉴로돌아가기")]),E(t,o),nt(),s()}wt(["click"]);we(wv,{},[],[],!0);var VT=T('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),HT=T('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),WT=T('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),GT=T('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),KT=T('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),YT=T('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <!></div> <!> <!>',1),QT=T('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp"> </p></div> <!></div></div>');const JT={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0;color:#6b7280;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function yv(t,e){tt(e,!0),rt(t,JT);const n=()=>ot(Lt,"$t",r),[r,s]=At();let i=re(!1),o=re(Qt({current:0,total:0,category:""})),a=re(Qt([])),l=re(!1);Ft(()=>{gn(n()("테스트게시글생성타이틀"))});function c(R,O="info"){x(a,[...m(a),{message:R,type:O,time:new Date().toLocaleTimeString()}],!0)}const f={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},qna:{titles:["근처 좋은 병원 추천해주세요","택배 수령 어디서 하나요?","버스 노선 문의드립니다","주차장 이용 방법 알려주세요","쓰레기 배출 시간이 언제인가요?","세탁소 추천 부탁드려요","동네 도서관 이용 방법","반려동물 병원 어디가 좋나요?","자전거 보관소 위치 알려주세요"],contents:["{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?","{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.","{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?","{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]},market:{titles:["중고 자전거 판매합니다","안쓰는 가전제품 나눔해요","아이 장난감 저렴하게 팔아요","책장 정리 - 책 나눔","운동기구 판매합니다","여행 캐리어 팔아요","화분과 식물 나눔","게임기 판매합니다","옷장 정리 - 의류 판매"],contents:["{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!","집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!","{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!"]}},p={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function h(R){return R[Math.floor(Math.random()*R.length)]}function v(R){let O=R;for(const[U,z]of Object.entries(p)){const K=new RegExp(`\\{${U}\\}`,"g");O=O.replace(K,h(z))}return O}async function g(){if(!Se.isAuthenticated||!Se.uid){c(n()("로그인필요"),"error");return}x(i,!0),x(l,!1),x(a,[],!0),c(n()("테스트데이터생성시작"),"success"),c(n()("사용자정보",{user:Se.data?.displayName||Se.email}),"info");const R=[{value:"community",label:n()("커뮤니티")},{value:"qna",label:n()("질문과답변")},{value:"news",label:n()("뉴스")},{value:"market",label:n()("회원장터")}];for(const O of R){x(o,{current:0,total:100,category:O.label},!0),c(n()("카테고리생성중",{category:O.label}),"info");const U=f[O.value];let z=0;for(let K=0;K<100;K++)try{const ne=v(h(U.titles)),te=v(h(U.contents)),le=Date.now(),Ee={uid:Se.uid,title:ne,content:te,author:Se.data?.displayName||Se.email||n()("익명"),category:O.value,createdAt:le-Math.floor(Math.random()*30*24*60*60*1e3),updatedAt:le},fe=rr(qn,`posts/${O.value}`);await Tm(fe,Ee),z++,x(o,{...m(o),current:K+1},!0),(K+1)%20===0&&c(n()("생성진행",{current:K+1,total:100}),"success"),await new Promise(ue=>setTimeout(ue,50))}catch(ne){c(n()("생성실패",{error:ne.message}),"error")}c(n()("카테고리생성완료",{category:O.label,count:z}),"success")}c(n()("모든데이터생성완료"),"success"),c(n()("총400개생성"),"success"),x(i,!1),x(l,!0)}var b=QT(),y=d(b),C=d(y),I=d(C),S=d(I,!0);u(I);var N=_(I,2),M=d(N,!0);u(N),u(C);var L=_(C,2);{var A=R=>{var O=VT(),U=d(O),z=d(U,!0);u(U);var K=_(U,2),ne=d(K,!0);u(K),u(O),D((te,le)=>{w(z,te),w(ne,le)},[()=>n()("로그인필요"),()=>n()("로그인하러가기")]),E(R,O)},k=R=>{var O=YT(),U=ae(O),z=d(U);z.__click=g;var K=d(z,!0);u(z);var ne=_(z,2);{var te=B=>{var H=HT(),ie=d(H),P=d(ie,!0);u(ie);var Y=_(ie,2),F=d(Y);u(Y);var q=_(Y,2),se=d(q);u(q),u(H),D(()=>{w(P,m(o).category),cc(F,`width: ${m(o).current/m(o).total*100}%`),w(se,`${m(o).current??""} / ${m(o).total??""}`)}),E(B,H)};Q(ne,B=>{m(i)&&B(te)})}u(U);var le=_(U,2);{var Ee=B=>{var H=GT(),ie=d(H),P=d(ie,!0);u(ie);var Y=_(ie,2);Jt(Y,21,()=>m(a),Zn,(F,q)=>{var se=WT(),Z=d(se),V=d(Z,!0);u(Z);var J=_(Z,2),ee=d(J,!0);u(J),u(se),D(()=>{yn(se,1,`log-item log-${m(q).type??""}`,"svelte-uqnmwp"),w(V,m(q).time),w(ee,m(q).message)}),E(F,se)}),u(Y),u(H),D(F=>w(P,F),[()=>n()("실행로그")]),E(B,H)};Q(le,B=>{m(a).length>0&&B(Ee)})}var fe=_(le,2);{var ue=B=>{var H=KT(),ie=d(H),P=d(ie,!0);u(ie);var Y=_(ie,2),F=d(Y,!0);u(Y),u(H),D((q,se)=>{w(P,q),w(F,se)},[()=>n()("생성완료확인메시지"),()=>n()("게시판보기")]),E(B,H)};Q(fe,B=>{m(l)&&B(ue)})}D(B=>{z.disabled=m(i),w(K,B)},[()=>m(i)?n()("생성중"):n()("게시글생성시작")]),E(R,O)};Q(L,R=>{Se.isAuthenticated?R(k,!1):R(A)})}u(y),u(b),D((R,O)=>{w(S,R),w(M,O)},[()=>n()("테스트게시글생성타이틀"),()=>n()("테스트게시글생성설명")]),E(t,b),nt(),s()}wt(["click"]);we(yv,{},[],[],!0);var XT=T('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),ZT=T('<div class="toast-container svelte-1cpok13"></div>');const e2={hash:"svelte-1cpok13",code:`\r
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
  }`};function Ev(t,e){tt(e,!1),rt(t,e2);const n=()=>ot(Cu,"$toasts",r),[r,s]=At();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}vn();var o=ZT();Jt(o,5,n,a=>a.id,(a,l)=>{var c=XT(),f=d(c),p=d(f,!0);u(f);var h=_(f,2),v=d(h,!0);u(h);var g=_(h,2);g.__click=()=>dv(m(l).id),u(c),D(b=>{yn(c,1,`toast toast-${m(l).type??""}`,"svelte-1cpok13"),w(p,b),w(v,m(l).message)},[()=>i(m(l).type)]),E(a,c)}),u(o),E(t,o),nt(),s()}wt(["click"]);we(Ev,{},[],[],!0);var t2=T('<sns-layout><main class="content svelte-1hwhcgc"><!></main></sns-layout> <!>',3);const n2={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 */.content.svelte-1hwhcgc {max-width:800px;margin:0 auto;}

  /* 반응형 */`};function xv(t){rt(t,n2);let e=re(Qt(window.location.pathname));function n(){x(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",n);var r=t2(),s=ae(r),i=d(s),o=d(i);{var a=f=>{av(f,{})},l=f=>{var p=be(),h=ae(p);{var v=b=>{lv(b,{})},g=b=>{var y=be(),C=ae(y);{var I=N=>{cv(N,{})},S=N=>{var M=be(),L=ae(M);{var A=R=>{uv(R,{})},k=R=>{var O=be(),U=ae(O);{var z=ne=>{hv(ne,{})},K=ne=>{var te=be(),le=ae(te);{var Ee=ue=>{fv(ue,{})},fe=ue=>{var B=be(),H=ae(B);{var ie=Y=>{pv(Y,{})},P=Y=>{var F=be(),q=ae(F);{var se=V=>{mv(V,{})},Z=V=>{var J=be(),ee=ae(J);{var ke=ve=>{vv(ve,{})},ce=ve=>{var xe=be(),Te=ae(xe);{var he=Ce=>{gv(Ce,{})},ge=Ce=>{var de=be(),De=ae(de);{var Fe=ze=>{_v(ze,{})},He=ze=>{var Ne=be(),pe=ae(Ne);{var oe=qe=>{bv(qe,{})},Le=qe=>{var Xe=be(),Ye=ae(Xe);{var Et=Ze=>{wv(Ze,{})},ct=Ze=>{var st=be(),zt=ae(st);{var Ve=j=>{yv(j,{})},Ct=j=>{ov(j,{})};Q(zt,j=>{m(e)==="/dev/generate-posts"?j(Ve):j(Ct,!1)},!0)}E(Ze,st)};Q(Ye,Ze=>{m(e)==="/contact"?Ze(Et):Ze(ct,!1)},!0)}E(qe,Xe)};Q(pe,qe=>{m(e)==="/privacy"?qe(oe):qe(Le,!1)},!0)}E(ze,Ne)};Q(De,ze=>{m(e)==="/terms"?ze(Fe):ze(He,!1)},!0)}E(Ce,de)};Q(Te,Ce=>{m(e)==="/help"?Ce(he):Ce(ge,!1)},!0)}E(ve,xe)};Q(ee,ve=>{m(e)==="/about"?ve(ke):ve(ce,!1)},!0)}E(V,J)};Q(q,V=>{m(e)==="/settings"?V(se):V(Z,!1)},!0)}E(Y,F)};Q(H,Y=>{m(e)==="/chat/list"?Y(ie):Y(P,!1)},!0)}E(ue,B)};Q(le,ue=>{m(e).startsWith("/post/detail/")?ue(Ee):ue(fe,!1)},!0)}E(ne,te)};Q(U,ne=>{m(e)==="/post/list"?ne(z):ne(K,!1)},!0)}E(R,O)};Q(L,R=>{m(e)==="/user/list"?R(A):R(k,!1)},!0)}E(N,M)};Q(C,N=>{m(e)==="/user/profile"?N(I):N(S,!1)},!0)}E(b,y)};Q(h,b=>{m(e)==="/menu"?b(v):b(g,!1)},!0)}E(f,p)};Q(o,f=>{m(e)==="/user/login"?f(a):f(l,!1)})}u(i),u(s);var c=_(s,2);Ev(c,{}),E(t,r)}we(xv,{},[],[],!0);ac(xv,{target:document.getElementById("app")});
