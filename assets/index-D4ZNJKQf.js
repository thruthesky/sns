(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Ph=!1;var pc=Array.isArray,eg=Array.prototype.indexOf,mc=Array.from,jo=Object.keys,Vi=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,Rh=Object.getOwnPropertyDescriptors,tg=Object.prototype,ng=Array.prototype,vc=Object.getPrototypeOf,Kd=Object.isExtensible;function pi(n){return typeof n=="function"}const pn=()=>{};function rg(n){return n()}function Bo(n){for(var e=0;e<n.length;e++)n[e]()}function Nh(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function sg(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Ht=2,gc=4,wa=8,wr=16,yr=32,Qr=64,ya=128,jt=1024,an=2048,xr=4096,mn=8192,dr=16384,_c=32768,qr=65536,Yd=1<<17,ig=1<<18,bs=1<<19,Lh=1<<20,kn=256,Vo=512,Ho=32768,Il=1<<21,bc=1<<22,as=1<<23,Gn=Symbol("$state"),wc=Symbol("legacy props"),og=Symbol(""),Ls=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ag=1,yc=3,si=8;function Dh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function lg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cg(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ug(n){throw new Error("https://svelte.dev/e/effect_orphan")}function hg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fg(){throw new Error("https://svelte.dev/e/hydration_failed")}function pg(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function mg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vg(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function _g(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const xa=1,ka=2,$h=4,bg=8,wg=16,yg=1,xg=2,Oh=4,kg=8,Eg=16,Ig=1,Cg=2,Mh="[",Ea="[!",xc="]",Bs={},$t=Symbol(),Tg="http://www.w3.org/1999/xhtml",Sg="http://www.w3.org/2000/svg",Ag="@attach";function Ia(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function Pg(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Rg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let ye=!1;function hn(n){ye=n}let Le;function Ut(n){if(n===null)throw Ia(),Bs;return Le=n}function jr(){return Ut(Jn(Le))}function d(n){if(ye){if(Jn(Le)!==null)throw Ia(),Bs;Le=n}}function yn(n=1){if(ye){for(var e=n,t=Le;e--;)t=Jn(t);Le=t}}function Wo(n=!0){for(var e=0,t=Le;;){if(t.nodeType===si){var r=t.data;if(r===xc){if(e===0)return t;e-=1}else(r===Mh||r===Ea)&&(e+=1)}var s=Jn(t);n&&t.remove(),t=s}}function Uh(n){if(!n||n.nodeType!==si)throw Ia(),Bs;return n.data}function zh(n){return n===this.v}function Fh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function qh(n){return!Fh(n,this.v)}let ii=!1,Ng=!1;function Lg(){ii=!0}let mt=null;function Vs(n){mt=n}function Ye(n,e=!1,t){mt={p:mt,i:!1,c:null,e:null,s:n,x:null,l:ii&&!e?{s:null,u:null,$:[]}:null}}function Qe(n){var e=mt,t=e.e;if(t!==null){e.e=null;for(var r of t)of(r)}return n!==void 0&&(e.x=n),e.i=!0,mt=e.p,n??{}}function oi(){return!ii||mt!==null&&mt.l===null}let is=[];function jh(){var n=is;is=[],Bo(n)}function Jr(n){if(is.length===0&&!Pi){var e=is;queueMicrotask(()=>{e===is&&jh()})}is.push(n)}function Dg(){for(;is.length>0;)jh()}function Bh(n){var e=Ie;if(e===null)return Ne.f|=as,n;if((e.f&_c)===0){if((e.f&ya)===0)throw n;e.b.error(n)}else Hs(n,e)}function Hs(n,e){for(;e!==null;){if((e.f&ya)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const To=new Set;let Xe=null,Ai=null,Ln=null,Hn=[],Ca=null,Cl=!1,Pi=!1;class On{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){Hn=[],Ai=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(Ai=this,Xe=null,Qd(t.render_effects),Qd(t.effects),Ai=null,this.#l?.resolve()),Ln=null}#n(e,t){e.f^=jt;for(var r=e.first;r!==null;){var s=r.f,i=(s&(yr|Qr))!==0,o=i&&(s&jt)!==0,a=o||(s&mn)!==0||this.skipped_effects.has(r);if((r.f&ya)!==0&&r.b?.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=jt:(s&gc)!==0?t.effects.push(r):co(r)&&((r.f&wr)!==0&&t.block_effects.push(r),Wi(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),r=c.next,c=c.parent}}#a(e){for(const t of e)((t.f&an)!==0?this.#o:this.#i).push(t),Vt(t,jt)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),Ln?.set(e,e.v)}activate(){Xe=this}deactivate(){Xe=null,Ln=null}flush(){if(this.activate(),Hn.length>0){if(Vh(),Xe!==null&&Xe!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#d()}#d(){if(To.size>1){this.previous.clear();var e=Ln,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of To){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const c of i)Hh(c,o,a,l);if(Hn.length>0){Xe=s,s.apply();for(const c of Hn)s.#n(c,r);Hn=[],s.deactivate()}}}Xe=null,Ln=e}this.committed=!0,To.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)Vt(e,an),ds(e);for(const e of this.#i)Vt(e,xr),ds(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=Nh()).promise}static ensure(){if(Xe===null){const e=Xe=new On;To.add(Xe),Pi||On.enqueue(()=>{Xe===e&&e.flush()})}return Xe}static enqueue(e){Jr(e)}apply(){}}function je(n){var e=Pi;Pi=!0;try{for(var t;;){if(Dg(),Hn.length===0&&(Xe?.flush(),Hn.length===0))return Ca=null,t;Vh()}}finally{Pi=e}}function Vh(){var n=Ms;Cl=!0;try{var e=0;for(Zd(!0);Hn.length>0;){var t=On.ensure();if(e++>1e3){var r,s;$g()}t.process(Hn),$r.clear()}}finally{Cl=!1,Zd(n),Ca=null}}function $g(){try{hg()}catch(n){Hs(n,Ca)}}let sr=null;function Qd(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(dr|mn))===0&&co(r)&&(sr=new Set,Wi(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?cf(r):r.fn=null),sr?.size>0)){$r.clear();for(const s of sr){if((s.f&(dr|mn))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)sr.has(o)&&(sr.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(dr|mn))===0&&Wi(l)}}sr.clear()}}sr=null}}function Hh(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&Ht)!==0?Hh(s,e,t,r):(i&(bc|wr))!==0&&(i&an)===0&&Wh(s,e,r)&&(Vt(s,an),ds(s))}}function Wh(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(e.includes(s))return!0;if((s.f&Ht)!==0&&Wh(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function ds(n){for(var e=Ca=n;e.parent!==null;){e=e.parent;var t=e.f;if(Cl&&e===Ie&&(t&wr)!==0)return;if((t&(Qr|yr))!==0){if((t&jt)===0)return;e.f^=jt}}Hn.push(e)}function Og(n){let e=0,t=Br(0),r;return()=>{Wg()&&(m(t),Aa(()=>(e===0&&(r=Qn(()=>n(()=>Ri(t)))),e+=1,()=>{Jr(()=>{e-=1,e===0&&(r?.(),r=void 0,Ri(t))})})))}}var Mg=qr|bs|ya;function Ug(n,e,t){new zg(n,e,t)}class zg{parent;#t=!1;#e;#r=ye?Le:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#d=null;#f=0;#u=0;#p=!1;#h=null;#b=Og(()=>(this.#h=Br(this.#f),()=>{this.#h=null}));constructor(e,t,r){this.#e=e,this.#s=t,this.#l=r,this.parent=Ie.b,this.#t=!!this.#s.pending,this.#o=Xr(()=>{if(Ie.b=this,ye){const i=this.#r;jr(),i.nodeType===si&&i.data===Ea?this.#y():this.#w()}else{var s=this.#g();try{this.#i=tn(()=>r(s))}catch(i){this.error(i)}this.#u>0?this.#v():this.#t=!1}return()=>{this.#d?.remove()}},Mg),ye&&(this.#e=Le)}#w(){try{this.#i=tn(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=tn(()=>e(this.#e)),On.enqueue(()=>{var t=this.#g();this.#i=this.#m(()=>(On.ensure(),tn(()=>this.#l(t)))),this.#u>0?this.#v():(Os(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#d=En(),this.#e.before(this.#d),e=this.#d),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#m(e){var t=Ie,r=Ne,s=mt;In(this.#o),sn(this.#o),Vs(this.#o.ctx);try{return e()}catch(i){return Bh(i),null}finally{In(t),sn(r),Vs(s)}}#v(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#d),hf(this.#i,this.#c)),this.#n===null&&(this.#n=tn(()=>e(this.#e)))}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#u+=e,this.#u===0&&(this.#t=!1,this.#n&&Os(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#f+=e,this.#h&&Gs(this.#h,this.#f)}get_effect_pending(){return this.#b(),m(this.#h)}error(e){var t=this.#s.onerror;let r=this.#s.failed;if(this.#p||!t&&!r)throw e;this.#i&&(Pt(this.#i),this.#i=null),this.#n&&(Pt(this.#n),this.#n=null),this.#a&&(Pt(this.#a),this.#a=null),ye&&(Ut(this.#r),yn(),Ut(Wo()));var s=!1,i=!1;const o=()=>{if(s){Rg();return}s=!0,i&&_g(),On.ensure(),this.#f=0,this.#a!==null&&Os(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#m(()=>(this.#p=!1,tn(()=>this.#l(this.#e)))),this.#u>0?this.#v():this.#t=!1};var a=Ne;try{sn(null),i=!0,t?.(e,o),i=!1}catch(l){Hs(l,this.#o&&this.#o.parent)}finally{sn(a)}r&&Jr(()=>{this.#a=this.#m(()=>{On.ensure(),this.#p=!0;try{return tn(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return Hs(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Gh(n,e,t,r){const s=oi()?oo:Ta;if(t.length===0&&n.length===0){r(e.map(s));return}var i=Xe,o=Ie,a=Fg();function l(){Promise.all(t.map(c=>qg(c))).then(c=>{a();try{r([...e.map(s),...c])}catch(h){(o.f&dr)===0&&Hs(h,o)}i?.deactivate(),Go()}).catch(c=>{Hs(c,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{i?.deactivate(),Go()}}):l()}function Fg(){var n=Ie,e=Ne,t=mt,r=Xe;return function(i=!0){In(n),sn(e),Vs(t),i&&r?.activate()}}function Go(){In(null),sn(null),Vs(null)}function oo(n){var e=Ht|an,t=Ne!==null&&(Ne.f&Ht)!==0?Ne:null;return Ie===null||t!==null&&(t.f&kn)!==0?e|=kn:Ie.f|=bs,{ctx:mt,deps:null,effects:null,equals:zh,f:e,fn:n,reactions:null,rv:0,v:$t,wv:0,parent:t??Ie,ac:null}}function qg(n,e){let t=Ie;t===null&&lg();var r=t.b,s=void 0,i=Br($t),o=!Ne,a=new Map;return Qg(()=>{var l=Nh();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{c===Xe&&c.committed&&c.deactivate(),Go()})}catch(f){l.reject(f),Go()}var c=Xe;if(o){var h=!r.is_pending();r.update_pending_count(1),c.increment(h),a.get(c)?.reject(Ls),a.delete(c),a.set(c,l)}const p=(f,_=void 0)=>{if(c.activate(),_)_!==Ls&&(i.f|=as,Gs(i,_));else{(i.f&as)!==0&&(i.f^=as),Gs(i,f);for(const[v,w]of a){if(a.delete(v),v===c)break;w.reject(Ls)}}o&&(r.update_pending_count(-1),c.decrement(h))};l.promise.then(p,f=>p(null,f||"unknown"))}),ao(()=>{for(const l of a.values())l.reject(Ls)}),new Promise(l=>{function c(h){function p(){h===s?l(i):c(s)}h.then(p,p)}c(s)})}function Ws(n){const e=oo(n);return ff(e),e}function Ta(n){const e=oo(n);return e.equals=qh,e}function Kh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Pt(e[t])}}function jg(n){for(var e=n.parent;e!==null;){if((e.f&Ht)===0)return e;e=e.parent}return null}function kc(n){var e,t=Ie;In(jg(n));try{n.f&=~Ho,Kh(n),e=gf(n)}finally{In(t)}return e}function Yh(n){var e=kc(n);if(n.equals(e)||(n.v=e,n.wv=mf()),!ws)if(Ln!==null)Ln.set(n,n.v);else{var t=(Nr||(n.f&kn)!==0)&&n.deps!==null?xr:jt;Vt(n,t)}}let Tl=new Set;const $r=new Map;let Qh=!1;function Br(n,e){var t={f:0,v:n,reactions:null,equals:zh,rv:0,wv:0};return t}function ae(n,e){const t=Br(n);return ff(t),t}function Ec(n,e=!1,t=!0){const r=Br(n);return e||(r.equals=qh),ii&&t&&mt!==null&&mt.l!==null&&(mt.l.s??=[]).push(r),r}function y(n,e,t=!1){Ne!==null&&(!Dn||(Ne.f&Yd)!==0)&&oi()&&(Ne.f&(Ht|wr|bc|Yd))!==0&&!ur?.includes(n)&&gg();let r=t?Bt(e):e;return Gs(n,r)}function Gs(n,e){if(!n.equals(e)){var t=n.v;ws?$r.set(n,e):$r.set(n,t),n.v=e;var r=On.ensure();r.capture(n,t),(n.f&Ht)!==0&&((n.f&an)!==0&&kc(n),Vt(n,(n.f&kn)===0?jt:xr)),n.wv=mf(),Jh(n,an),oi()&&Ie!==null&&(Ie.f&jt)!==0&&(Ie.f&(yr|Qr))===0&&(wn===null?Zg([n]):wn.push(n)),!r.is_fork&&Tl.size>0&&!Qh&&Bg()}return e}function Bg(){Qh=!1;const n=Array.from(Tl);for(const e of n)(e.f&jt)!==0&&Vt(e,xr),co(e)&&Wi(e);Tl.clear()}function Sl(n,e=1){var t=m(n),r=e===1?t++:t--;return y(n,t),r}function Ri(n){y(n,n.v+1)}function Jh(n,e){var t=n.reactions;if(t!==null)for(var r=oi(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!r&&o===Ie)){var l=(a&an)===0;l&&Vt(o,e),(a&Ht)!==0?(a&Ho)===0&&(o.f|=Ho,Jh(o,xr)):l&&((a&wr)!==0&&sr!==null&&sr.add(o),ds(o))}}}function Bt(n){if(typeof n!="object"||n===null||Gn in n)return n;const e=vc(n);if(e!==tg&&e!==ng)return n;var t=new Map,r=pc(n),s=ae(0),i=ls,o=a=>{if(ls===i)return a();var l=Ne,c=ls;sn(null),tu(i);var h=a();return sn(l),tu(c),h};return r&&t.set("length",ae(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&mg();var h=t.get(l);return h===void 0?h=o(()=>{var p=ae(c.value);return t.set(l,p),p}):y(h,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const h=o(()=>ae($t));t.set(l,h),Ri(s)}}else y(c,$t),Ri(s);return!0},get(a,l,c){if(l===Gn)return n;var h=t.get(l),p=l in a;if(h===void 0&&(!p||cr(a,l)?.writable)&&(h=o(()=>{var _=Bt(p?a[l]:$t),v=ae(_);return v}),t.set(l,h)),h!==void 0){var f=m(h);return f===$t?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=m(h))}else if(c===void 0){var p=t.get(l),f=p?.v;if(p!==void 0&&f!==$t)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){if(l===Gn)return!0;var c=t.get(l),h=c!==void 0&&c.v!==$t||Reflect.has(a,l);if(c!==void 0||Ie!==null&&(!h||cr(a,l)?.writable)){c===void 0&&(c=o(()=>{var f=h?Bt(a[l]):$t,_=ae(f);return _}),t.set(l,c));var p=m(c);if(p===$t)return!1}return h},set(a,l,c,h){var p=t.get(l),f=l in a;if(r&&l==="length")for(var _=c;_<p.v;_+=1){var v=t.get(_+"");v!==void 0?y(v,$t):_ in a&&(v=o(()=>ae($t)),t.set(_+"",v))}if(p===void 0)(!f||cr(a,l)?.writable)&&(p=o(()=>ae(void 0)),y(p,Bt(c)),t.set(l,p));else{f=p.v!==$t;var w=o(()=>Bt(c));y(p,w)}var k=Reflect.getOwnPropertyDescriptor(a,l);if(k?.set&&k.set.call(h,c),!f){if(r&&typeof l=="string"){var I=t.get("length"),S=Number(l);Number.isInteger(S)&&S>=I.v&&y(I,S+1)}Ri(s)}return!0},ownKeys(a){m(s);var l=Reflect.ownKeys(a).filter(p=>{var f=t.get(p);return f===void 0||f.v!==$t});for(var[c,h]of t)h.v!==$t&&!(c in a)&&l.push(c);return l},setPrototypeOf(){vg()}})}function Jd(n){try{if(n!==null&&typeof n=="object"&&Gn in n)return n[Gn]}catch{}return n}function Vg(n,e){return Object.is(Jd(n),Jd(e))}var Al,Xh,Zh,ef;function Pl(){if(Al===void 0){Al=window,Xh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Zh=cr(e,"firstChild").get,ef=cr(e,"nextSibling").get,Kd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Kd(t)&&(t.__t=void 0)}}function En(n=""){return document.createTextNode(n)}function Fn(n){return Zh.call(n)}function Jn(n){return ef.call(n)}function u(n,e){if(!ye)return Fn(n);var t=Fn(Le);if(t===null)t=Le.appendChild(En());else if(e&&t.nodeType!==yc){var r=En();return t?.before(r),Ut(r),r}return Ut(t),t}function pe(n,e=!1){if(!ye){var t=Fn(n);return t instanceof Comment&&t.data===""?Jn(t):t}if(e&&Le?.nodeType!==yc){var r=En();return Le?.before(r),Ut(r),r}return Le}function g(n,e=1,t=!1){let r=ye?Le:n;for(var s;e--;)s=r,r=Jn(r);if(!ye)return r;if(t&&r?.nodeType!==yc){var i=En();return r===null?s?.after(i):r.before(i),Ut(i),i}return Ut(r),r}function Ic(n){n.textContent=""}function tf(){return!1}function Cc(n,e){if(e){const t=document.body;n.autofocus=!0,Jr(()=>{document.activeElement===t&&n.focus()})}}function Tc(n){ye&&Fn(n)!==null&&Ic(n)}let Xd=!1;function nf(){Xd||(Xd=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function Sa(n){var e=Ne,t=Ie;sn(null),In(null);try{return n()}finally{sn(e),In(t)}}function rf(n,e,t,r=t){n.addEventListener(e,()=>Sa(t));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),nf()}function sf(n){Ie===null&&Ne===null&&ug(),Ne!==null&&(Ne.f&kn)!==0&&Ie===null&&dg(),ws&&cg()}function Hg(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function jn(n,e,t,r=!0){var s=Ie;s!==null&&(s.f&mn)!==0&&(n|=mn);var i={ctx:mt,deps:null,nodes_start:null,nodes_end:null,f:n|an,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{Wi(i),i.f|=_c}catch(l){throw Pt(i),l}else e!==null&&ds(i);if(r){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&bs)===0&&(o=o.first,(n&wr)!==0&&(n&qr)!==0&&o!==null&&(o.f|=qr)),o!==null&&(o.parent=s,s!==null&&Hg(o,s),Ne!==null&&(Ne.f&Ht)!==0&&(n&Qr)===0)){var a=Ne;(a.effects??=[]).push(o)}}return i}function Wg(){return Ne!==null&&!Dn}function ao(n){const e=jn(wa,null,!1);return Vt(e,jt),e.teardown=n,e}function Ks(n){sf();var e=Ie.f,t=!Ne&&(e&yr)!==0&&(e&_c)===0;if(t){var r=mt;(r.e??=[]).push(n)}else return of(n)}function of(n){return jn(gc|Lh,n,!1)}function Gg(n){return sf(),jn(wa|Lh,n,!0)}function Kg(n){On.ensure();const e=jn(Qr|bs,n,!0);return()=>{Pt(e)}}function Yg(n){On.ensure();const e=jn(Qr|bs,n,!0);return(t={})=>new Promise(r=>{t.outro?Os(e,()=>{Pt(e),r(void 0)}):(Pt(e),r(void 0))})}function lo(n){return jn(gc,n,!1)}function Qg(n){return jn(bc|bs,n,!0)}function Aa(n,e=0){return jn(wa|e,n,!0)}function F(n,e=[],t=[],r=[]){Gh(r,e,t,s=>{jn(wa,()=>n(...s.map(m)),!0)})}function Xr(n,e=0){var t=jn(wr|e,n,!0);return t}function tn(n,e=!0){return jn(yr|bs,n,!0,e)}function af(n){var e=n.teardown;if(e!==null){const t=ws,r=Ne;eu(!0),sn(null);try{e.call(null)}finally{eu(t),sn(r)}}}function lf(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&Sa(()=>{s.abort(Ls)});var r=t.next;(t.f&Qr)!==0?t.parent=null:Pt(t,e),t=r}}function Jg(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&yr)===0&&Pt(e),e=t}}function Pt(n,e=!0){var t=!1;(e||(n.f&ig)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Xg(n.nodes_start,n.nodes_end),t=!0),lf(n,e&&!t),Ko(n,0),Vt(n,dr);var r=n.transitions;if(r!==null)for(const i of r)i.stop();af(n);var s=n.parent;s!==null&&s.first!==null&&cf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Xg(n,e){for(;n!==null;){var t=n===e?null:Jn(n);n.remove(),n=t}}function cf(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Os(n,e,t=!0){var r=[];Sc(n,r,!0),df(r,()=>{t&&Pt(n),e&&e()})}function df(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var s of n)s.out(r)}else e()}function Sc(n,e,t){if((n.f&mn)===0){if(n.f^=mn,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,i=(r.f&qr)!==0||(r.f&yr)!==0&&(n.f&wr)!==0;Sc(r,e,i?t:!1),r=s}}}function Ac(n){uf(n,!0)}function uf(n,e){if((n.f&mn)!==0){n.f^=mn,(n.f&jt)===0&&(Vt(n,an),ds(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&qr)!==0||(t.f&yr)!==0;uf(t,s?e:!1),t=r}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}function hf(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var s=t===r?null:Jn(t);e.append(t),t=s}}let Ms=!1;function Zd(n){Ms=n}let ws=!1;function eu(n){ws=n}let Ne=null,Dn=!1;function sn(n){Ne=n}let Ie=null;function In(n){Ie=n}let ur=null;function ff(n){Ne!==null&&(ur===null?ur=[n]:ur.push(n))}let Kt=null,un=0,wn=null;function Zg(n){wn=n}let pf=1,Hi=0,ls=Hi;function tu(n){ls=n}let Nr=!1;function mf(){return++pf}function co(n){var e=n.f;if((e&an)!==0)return!0;if((e&xr)!==0){var t=n.deps,r=(e&kn)!==0;if(e&Ht&&(n.f&=~Ho),t!==null){var s,i,o=(e&Vo)!==0,a=r&&Ie!==null&&!Nr,l=t.length;if((o||a)&&(Ie===null||(Ie.f&dr)===0)){var c=n,h=c.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(c))&&(i.reactions??=[]).push(c);o&&(c.f^=Vo),a&&h!==null&&(h.f&kn)===0&&(c.f^=kn)}for(s=0;s<l;s++)if(i=t[s],co(i)&&Yh(i),i.wv>n.wv)return!0}(!r||Ie!==null&&!Nr)&&Vt(n,jt)}return!1}function vf(n,e,t=!0){var r=n.reactions;if(r!==null&&!ur?.includes(n))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Ht)!==0?vf(i,e,!1):e===i&&(t?Vt(i,an):(i.f&jt)!==0&&Vt(i,xr),ds(i))}}function gf(n){var e=Kt,t=un,r=wn,s=Ne,i=Nr,o=ur,a=mt,l=Dn,c=ls,h=n.f;Kt=null,un=0,wn=null,Nr=(h&kn)!==0&&(Dn||!Ms||Ne===null),Ne=(h&(yr|Qr))===0?n:null,ur=null,Vs(n.ctx),Dn=!1,ls=++Hi,n.ac!==null&&(Sa(()=>{n.ac.abort(Ls)}),n.ac=null);try{n.f|=Il;var p=n.fn,f=p(),_=n.deps;if(Kt!==null){var v;if(Ko(n,un),_!==null&&un>0)for(_.length=un+Kt.length,v=0;v<Kt.length;v++)_[un+v]=Kt[v];else n.deps=_=Kt;if(!Nr||(h&Ht)!==0&&n.reactions!==null)for(v=un;v<_.length;v++)(_[v].reactions??=[]).push(n)}else _!==null&&un<_.length&&(Ko(n,un),_.length=un);if(oi()&&wn!==null&&!Dn&&_!==null&&(n.f&(Ht|xr|an))===0)for(v=0;v<wn.length;v++)vf(wn[v],n);return s!==null&&s!==n&&(Hi++,wn!==null&&(r===null?r=wn:r.push(...wn))),(n.f&as)!==0&&(n.f^=as),f}catch(w){return Bh(w)}finally{n.f^=Il,Kt=e,un=t,wn=r,Ne=s,Nr=i,ur=o,Vs(a),Dn=l,ls=c}}function e_(n,e){let t=e.reactions;if(t!==null){var r=eg.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(e.f&Ht)!==0&&(Kt===null||!Kt.includes(e))&&(Vt(e,xr),(e.f&(kn|Vo))===0&&(e.f^=Vo),Kh(e),Ko(e,0))}function Ko(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)e_(n,t[r])}function Wi(n){var e=n.f;if((e&dr)===0){Vt(n,jt);var t=Ie,r=Ms;Ie=n,Ms=!0;try{(e&wr)!==0?Jg(n):lf(n),af(n);var s=gf(n);n.teardown=typeof s=="function"?s:null,n.wv=pf;var i;Ph&&Ng&&(n.f&an)!==0&&n.deps}finally{Ms=r,Ie=t}}}async function t_(){await Promise.resolve(),je()}function m(n){var e=n.f,t=(e&Ht)!==0;if(Ne!==null&&!Dn){var r=Ie!==null&&(Ie.f&dr)!==0;if(!r&&!ur?.includes(n)){var s=Ne.deps;if((Ne.f&Il)!==0)n.rv<Hi&&(n.rv=Hi,Kt===null&&s!==null&&s[un]===n?un++:Kt===null?Kt=[n]:(!Nr||!Kt.includes(n))&&Kt.push(n));else{(Ne.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Ne]:i.includes(Ne)||i.push(Ne)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&kn)===0&&(o.f^=kn)}if(ws){if($r.has(n))return $r.get(n);if(t){o=n;var l=o.v;return((o.f&jt)===0&&o.reactions!==null||_f(o))&&(l=kc(o)),$r.set(o,l),l}}else if(t){if(o=n,Ln?.has(o))return Ln.get(o);co(o)&&Yh(o)}if(Ln?.has(n))return Ln.get(n);if((n.f&as)!==0)throw n.v;return n.v}function _f(n){if(n.v===$t)return!0;if(n.deps===null)return!1;for(const e of n.deps)if($r.has(e)||(e.f&Ht)!==0&&_f(e))return!0;return!1}function Qn(n){var e=Dn;try{return Dn=!0,n()}finally{Dn=e}}const n_=-7169;function Vt(n,e){n.f=n.f&n_|e}function Ns(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Gn in n)Rl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Gn in t&&Rl(t)}}}function Rl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{Rl(n[r],e)}catch{}const t=vc(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Rh(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}function r_(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const s_=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function i_(n){return s_.includes(n)}const o_={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function a_(n){return n=n.toLowerCase(),o_[n]??n}const l_=["touchstart","touchmove"];function c_(n){return l_.includes(n)}const d_=["textarea","script","style","title"];function u_(n){return d_.includes(n)}const bf=new Set,Nl=new Set;function wf(n,e,t,r={}){function s(i){if(r.capture||ki.call(e,i),!i.cancelBubble)return Sa(()=>t?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Jr(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function us(n,e,t,r,s){var i={capture:r,passive:s},o=wf(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ao(()=>{e.removeEventListener(n,o,i)})}function ct(n){for(var e=0;e<n.length;e++)bf.add(n[e]);for(var t of Nl)t(n)}let nu=null;function ki(n){var e=this,t=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;nu=n;var o=0,a=nu===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=s[o]||n.target,i!==e){Vi(n,"currentTarget",{configurable:!0,get(){return i||t}});var h=Ne,p=Ie;sn(null),In(null);try{for(var f,_=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(k){f?_.push(k):f=k}if(n.cancelBubble||v===e||v===null)break;i=v}if(f){for(let k of _)queueMicrotask(()=>{throw k});throw f}}finally{n.__root=e,delete n.currentTarget,sn(h),In(p)}}}function yf(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function hr(n,e){var t=Ie;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function A(n,e){var t=(e&Ig)!==0,r=(e&Cg)!==0,s,i=!n.startsWith("<!>");return()=>{if(ye)return hr(Le,null),Le;s===void 0&&(s=yf(i?n:"<!>"+n),t||(s=Fn(s)));var o=r||Xh?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=Fn(o),l=o.lastChild;hr(a,l)}else hr(o,o);return o}}function h_(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(ye)return hr(Le,null),Le;if(!i){var o=yf(s),a=Fn(o);i=Fn(a)}var l=i.cloneNode(!0);return hr(l,l),l}}function f_(n,e){return h_(n,e,"svg")}function be(){if(ye)return hr(Le,null),Le;var n=document.createDocumentFragment(),e=document.createComment(""),t=En();return n.append(e,t),hr(e,t),n}function x(n,e){if(ye){Ie.nodes_end=Le,jr();return}n!==null&&n.before(e)}function b(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function Pc(n,e){return xf(n,e)}function p_(n,e){Pl(),e.intro=e.intro??!1;const t=e.target,r=ye,s=Le;try{for(var i=Fn(t);i&&(i.nodeType!==si||i.data!==Mh);)i=Jn(i);if(!i)throw Bs;hn(!0),Ut(i);const o=xf(n,{...e,anchor:i});return hn(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Bs&&console.warn("Failed to hydrate: ",o),e.recover===!1&&fg(),Pl(),Ic(t),hn(!1),Pc(n,e)}finally{hn(r),Ut(s)}}const Ts=new Map;function xf(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:o=!0}){Pl();var a=new Set,l=p=>{for(var f=0;f<p.length;f++){var _=p[f];if(!a.has(_)){a.add(_);var v=c_(_);e.addEventListener(_,ki,{passive:v});var w=Ts.get(_);w===void 0?(document.addEventListener(_,ki,{passive:v}),Ts.set(_,1)):Ts.set(_,w+1)}}};l(mc(bf)),Nl.add(l);var c=void 0,h=Yg(()=>{var p=t??e.appendChild(En());return Ug(p,{pending:()=>{}},f=>{if(i){Ye({});var _=mt;_.c=i}if(s&&(r.$$events=s),ye&&hr(f,null),c=n(f,r)||{},ye&&(Ie.nodes_end=Le,Le===null||Le.nodeType!==si||Le.data!==xc))throw Ia(),Bs;i&&Qe()}),()=>{for(var f of a){e.removeEventListener(f,ki);var _=Ts.get(f);--_===0?(document.removeEventListener(f,ki),Ts.delete(f)):Ts.set(f,_)}Nl.delete(l),p!==t&&p.parentNode?.removeChild(p)}});return Ll.set(c,h),c}let Ll=new WeakMap;function m_(n,e){const t=Ll.get(n);return t?(Ll.delete(n),t(e)):Promise.resolve()}class Pa{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=Xe;if(this.#t.has(e)){var t=this.#t.get(e),r=this.#e.get(t);if(r)Ac(r);else{var s=this.#r.get(t);s&&(this.#e.set(t,s.effect),this.#r.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(Pt(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var c=document.createDocumentFragment();hf(o,c),c.append(En()),this.#r.set(i,{effect:o,fragment:c})}else Pt(o);this.#e.delete(i)};this.#s||!r?Os(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[r,s]of this.#r)t.includes(r)||(Pt(s.effect),this.#r.delete(r))};ensure(e,t){var r=Xe,s=tf();if(t&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=En();i.append(o),this.#r.set(e,{effect:tn(()=>t(o)),fragment:i})}else this.#e.set(e,tn(()=>t(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else ye&&(this.anchor=Le),this.#l()}}function Z(n,e,t=!1){ye&&jr();var r=new Pa(n),s=t?qr:0;function i(o,a){if(ye){const c=Uh(n)===Ea;if(o===c){var l=Wo();Ut(l),r.anchor=l,hn(!1),r.ensure(o,a),hn(!0);return}}r.ensure(o,a)}Xr(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function v_(n,e,t){ye&&jr();var r=new Pa(n),s=!oi();Xr(()=>{var i=e();s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,t)})}function ir(n,e){return e}function g_(n,e,t){for(var r=n.items,s=[],i=e.length,o=0;o<i;o++)Sc(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;Ic(l),l.append(t),r.clear(),Vn(n,e[0].prev,e[i-1].next)}df(s,()=>{for(var c=0;c<i;c++){var h=e[c];a||(r.delete(h.k),Vn(n,h.prev,h.next)),Pt(h.e,!a)}})}function Mt(n,e,t,r,s,i=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&$h)!==0;if(l){var c=n;o=ye?Ut(Fn(c)):c.appendChild(En())}ye&&jr();var h=null,p=!1,f=new Map,_=Ta(()=>{var I=t();return pc(I)?I:I==null?[]:mc(I)}),v,w;function k(){__(w,v,a,f,o,s,e,r,t),i!==null&&(v.length===0?h?Ac(h):h=tn(()=>i(o)):h!==null&&Os(h,()=>{h=null}))}Xr(()=>{w??=Ie,v=m(_);var I=v.length;if(p&&I===0)return;p=I===0;let S=!1;if(ye){var P=Uh(o)===Ea;P!==(I===0)&&(o=Wo(),Ut(o),hn(!1),S=!0)}if(ye){for(var N=null,j,L=0;L<I;L++){if(Le.nodeType===si&&Le.data===xc){o=Le,S=!0,hn(!1);break}var C=v[L],E=r(C,L);j=Dl(Le,a,N,null,C,E,L,s,e,t),a.items.set(E,j),N=j}I>0&&Ut(Wo())}if(ye)I===0&&i&&(h=tn(()=>i(o)));else if(tf()){var T=new Set,D=Xe;for(L=0;L<I;L+=1){C=v[L],E=r(C,L);var $=a.items.get(E)??f.get(E);$?(e&(xa|ka))!==0&&kf($,C,L,e):(j=Dl(null,a,null,null,C,E,L,s,e,t,!0),f.set(E,j)),T.add(E)}for(const[B,J]of a.items)T.has(B)||D.skipped_effects.add(J.e);D.oncommit(k)}else k();S&&hn(!0),m(_)}),ye&&(o=Le)}function __(n,e,t,r,s,i,o,a,l){var c=(o&bg)!==0,h=(o&(xa|ka))!==0,p=e.length,f=t.items,_=t.first,v=_,w,k=null,I,S=[],P=[],N,j,L,C;if(c)for(C=0;C<p;C+=1)N=e[C],j=a(N,C),L=f.get(j),L!==void 0&&(L.a?.measure(),(I??=new Set).add(L));for(C=0;C<p;C+=1){if(N=e[C],j=a(N,C),L=f.get(j),L===void 0){var E=r.get(j);if(E!==void 0){r.delete(j),f.set(j,E);var T=k?k.next:v;Vn(t,k,E),Vn(t,E,T),el(E,T,s),k=E}else{var D=v?v.e.nodes_start:s;k=Dl(D,t,k,k===null?t.first:k.next,N,j,C,i,o,l)}f.set(j,k),S=[],P=[],v=k.next;continue}if(h&&kf(L,N,C,o),(L.e.f&mn)!==0&&(Ac(L.e),c&&(L.a?.unfix(),(I??=new Set).delete(L))),L!==v){if(w!==void 0&&w.has(L)){if(S.length<P.length){var $=P[0],B;k=$.prev;var J=S[0],te=S[S.length-1];for(B=0;B<S.length;B+=1)el(S[B],$,s);for(B=0;B<P.length;B+=1)w.delete(P[B]);Vn(t,J.prev,te.next),Vn(t,k,J),Vn(t,te,$),v=$,k=te,C-=1,S=[],P=[]}else w.delete(L),el(L,v,s),Vn(t,L.prev,L.next),Vn(t,L,k===null?t.first:k.next),Vn(t,k,L),k=L;continue}for(S=[],P=[];v!==null&&v.k!==j;)(v.e.f&mn)===0&&(w??=new Set).add(v),P.push(v),v=v.next;if(v===null)continue;L=v}S.push(L),k=L,v=L.next}if(v!==null||w!==void 0){for(var K=w===void 0?[]:mc(w);v!==null;)(v.e.f&mn)===0&&K.push(v),v=v.next;var le=K.length;if(le>0){var me=(o&$h)!==0&&p===0?s:null;if(c){for(C=0;C<le;C+=1)K[C].a?.measure();for(C=0;C<le;C+=1)K[C].a?.fix()}g_(t,K,me)}}c&&Jr(()=>{if(I!==void 0)for(L of I)L.a?.apply()}),n.first=t.first&&t.first.e,n.last=k&&k.e;for(var G of r.values())Pt(G.e);r.clear()}function kf(n,e,t,r){(r&xa)!==0&&Gs(n.v,e),(r&ka)!==0?Gs(n.i,t):n.i=t}function Dl(n,e,t,r,s,i,o,a,l,c,h){var p=(l&xa)!==0,f=(l&wg)===0,_=p?f?Ec(s,!1,!1):Br(s):s,v=(l&ka)===0?o:Br(o),w={i:v,v:_,k:i,a:null,e:null,prev:t,next:r};try{if(n===null){var k=document.createDocumentFragment();k.append(n=En())}return w.e=tn(()=>a(n,_,v,c),ye),w.e.prev=t&&t.e,w.e.next=r&&r.e,t===null?h||(e.first=w):(t.next=w,t.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{}}function el(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==null&&i!==r;){var o=Jn(i);s.before(i),i=o}}function Vn(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function dt(n,e,t,r,s){ye&&jr();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(n,o?()=>r:r)}function Ss(n,e,...t){var r=new Pa(n);Xr(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...t)))},qr)}function b_(n,e,t,r,s,i){let o=ye;ye&&jr();var a=null;ye&&Le.nodeType===ag&&(a=Le,jr());var l=ye?Le:n,c=new Pa(l,!1);Xr(()=>{const h=e()||null;var p=Sg;if(h===null){c.ensure(null,null);return}return c.ensure(h,f=>{if(h){if(a=ye?a:document.createElementNS(p,h),hr(a,a),r){ye&&u_(h)&&a.append(document.createComment(""));var _=ye?Fn(a):a.appendChild(En());ye&&(_===null?hn(!1):Ut(_)),r(a,_)}Ie.nodes_end=a,f.before(a)}ye&&Ut(f)}),()=>{}},qr),ao(()=>{}),o&&(hn(!0),Ut(l))}function Je(n,e){lo(()=>{var t=n.getRootNode(),r=t.host?t:t.head??t.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function w_(n,e){var t=void 0,r;Xr(()=>{t!==(t=e())&&(r&&(Pt(r),r=null),t&&(r=tn(()=>{lo(()=>t(n))})))})}function Ef(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Ef(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function y_(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Ef(n))&&(r&&(r+=" "),r+=e);return r}function x_(n){return typeof n=="object"?y_(n):n??""}const ru=[...` 	
\r\f \v\uFEFF`];function k_(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||ru.includes(r[o-1]))&&(a===r.length||ru.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function su(n,e=!1){var t=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+t)}return r}function tl(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function E_(n,e){if(e){var t="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(tl)),s&&l.push(...Object.keys(s).map(tl));var c=0,h=-1;const w=n.length;for(var p=0;p<w;p++){var f=n[p];if(a?f==="/"&&n[p-1]==="*"&&(a=!1):i?i===f&&(i=!1):f==="/"&&n[p+1]==="*"?a=!0:f==='"'||f==="'"?i=f:f==="("?o++:f===")"&&o--,!a&&i===!1&&o===0){if(f===":"&&h===-1)h=p;else if(f===";"||p===w-1){if(h!==-1){var _=tl(n.substring(c,h).trim());if(!l.includes(_)){f!==";"&&p++;var v=n.substring(c,p).trim();t+=" "+v+";"}}c=p+1,h=-1}}}}return r&&(t+=su(r)),s&&(t+=su(s,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function nn(n,e,t,r,s,i){var o=n.__className;if(ye||o!==t||o===void 0){var a=k_(t,r,i);(!ye||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(i&&s!==i)for(var l in i){var c=!!i[l];(s==null||c!==!!s[l])&&n.classList.toggle(l,c)}return i}function nl(n,e={},t,r){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function Ra(n,e,t,r){var s=n.__style;if(ye||s!==e){var i=E_(e,r);(!ye||i!==n.getAttribute("style"))&&(i==null?n.removeAttribute("style"):n.style.cssText=i),n.__style=e}else r&&(Array.isArray(r)?(nl(n,t?.[0],r[0]),nl(n,t?.[1],r[1],"important")):nl(n,t,r));return r}function Gi(n,e,t=!1){if(n.multiple){if(e==null)return;if(!pc(e))return Pg();for(var r of n.options)r.selected=e.includes(Ni(r));return}for(r of n.options){var s=Ni(r);if(Vg(s,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Rc(n){var e=new MutationObserver(()=>{Gi(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ao(()=>{e.disconnect()})}function Nc(n,e,t=e){var r=new WeakSet,s=!0;rf(n,"change",i=>{var o=i?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),Ni);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&Ni(l)}t(a),Xe!==null&&r.add(Xe)}),lo(()=>{var i=e();if(n===document.activeElement){var o=Ai??Xe;if(r.has(o))return}if(Gi(n,i,s),s&&i===void 0){var a=n.querySelector(":checked");a!==null&&(i=Ni(a),t(i))}n.__value=i,s=!1}),Rc(n)}function Ni(n){return"__value"in n?n.__value:n.value}const mi=Symbol("class"),vi=Symbol("style"),If=Symbol("is custom element"),Cf=Symbol("is html");function Ys(n){if(ye){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Ee(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var s=n.checked;Ee(n,"checked",null),n.checked=s}}};n.__on_r=t,Jr(t),nf()}}function I_(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ee(n,e,t,r){var s=Tf(n);ye&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(n[og]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Sf(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function C_(n,e,t,r,s=!1,i=!1){if(ye&&s&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||Ys(o)}var l=Tf(n),c=l[If],h=!l[Cf];let p=ye&&c;p&&hn(!1);var f=e||{},_=n.tagName==="OPTION";for(var v in e)v in t||(t[v]=null);t.class?t.class=x_(t.class):t[mi]&&(t.class=null),t[vi]&&(t.style??=null);var w=Sf(n);for(const C in t){let E=t[C];if(_&&C==="value"&&E==null){n.value=n.__value="",f[C]=E;continue}if(C==="class"){var k=n.namespaceURI==="http://www.w3.org/1999/xhtml";nn(n,k,E,r,e?.[mi],t[mi]),f[C]=E,f[mi]=t[mi];continue}if(C==="style"){Ra(n,E,e?.[vi],t[vi]),f[C]=E,f[vi]=t[vi];continue}var I=f[C];if(!(E===I&&!(E===void 0&&n.hasAttribute(C)))){f[C]=E;var S=C[0]+C[1];if(S!=="$$")if(S==="on"){const T={},D="$$"+C;let $=C.slice(2);var P=i_($);if(r_($)&&($=$.slice(0,-7),T.capture=!0),!P&&I){if(E!=null)continue;n.removeEventListener($,f[D],T),f[D]=null}if(E!=null)if(P)n[`__${$}`]=E,ct([$]);else{let B=function(J){f[C].call(this,J)};var L=B;f[D]=wf($,n,B,T)}else P&&(n[`__${$}`]=void 0)}else if(C==="style")Ee(n,C,E);else if(C==="autofocus")Cc(n,!!E);else if(!c&&(C==="__value"||C==="value"&&E!=null))n.value=n.__value=E;else if(C==="selected"&&_)I_(n,E);else{var N=C;h||(N=a_(N));var j=N==="defaultValue"||N==="defaultChecked";if(E==null&&!c&&!j)if(l[C]=null,N==="value"||N==="checked"){let T=n;const D=e===void 0;if(N==="value"){let $=T.defaultValue;T.removeAttribute(N),T.defaultValue=$,T.value=T.__value=D?$:null}else{let $=T.defaultChecked;T.removeAttribute(N),T.defaultChecked=$,T.checked=D?$:!1}}else n.removeAttribute(C);else j||w.includes(N)&&(c||typeof E!="string")?(n[N]=E,N in l&&(l[N]=$t)):typeof E!="function"&&Ee(n,N,E)}}}return p&&hn(!0),f}function iu(n,e,t=[],r=[],s=[],i,o=!1,a=!1){Gh(s,t,r,l=>{var c=void 0,h={},p=n.nodeName==="SELECT",f=!1;if(Xr(()=>{var v=e(...l.map(m)),w=C_(n,c,v,i,o,a);f&&p&&"value"in v&&Gi(n,v.value);for(let I of Object.getOwnPropertySymbols(h))v[I]||Pt(h[I]);for(let I of Object.getOwnPropertySymbols(v)){var k=v[I];I.description===Ag&&(!c||k!==c[I])&&(h[I]&&Pt(h[I]),h[I]=tn(()=>w_(n,()=>k))),w[I]=k}c=w}),p){var _=n;lo(()=>{Gi(_,c.value,!0),Rc(_)})}f=!0})}function Tf(n){return n.__attributes??={[If]:n.nodeName.includes("-"),[Cf]:n.namespaceURI===Tg}}var ou=new Map;function Sf(n){var e=n.getAttribute("is")||n.nodeName,t=ou.get(e);if(t)return t;ou.set(e,t=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=Rh(s);for(var o in r)r[o].set&&t.push(o);s=vc(s)}return t}function Vr(n,e,t=e){var r=new WeakSet;rf(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=rl(n)?sl(i):i,t(i),Xe!==null&&r.add(Xe),await t_(),i!==(i=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=i??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),(ye&&n.defaultValue!==n.value||Qn(e)==null&&n.value)&&(t(rl(n)?sl(n.value):n.value),Xe!==null&&r.add(Xe)),Aa(()=>{var s=e();if(n===document.activeElement){var i=Ai??Xe;if(r.has(i))return}rl(n)&&s===sl(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function rl(n){var e=n.type;return e==="number"||e==="range"}function sl(n){return n===""?null:+n}function au(n,e){return n===e||n?.[Gn]===e}function Lc(n={},e,t,r){return lo(()=>{var s,i;return Aa(()=>{s=i,i=[],Qn(()=>{n!==t(...i)&&(e(n,...i),s&&au(t(...s),n)&&e(null,...s))})}),()=>{Jr(()=>{i&&au(t(...i),n)&&e(null,...i)})}}),n}function ln(n=!1){const e=mt,t=e.l.u;if(!t)return;let r=()=>Ns(e.s);if(n){let s=0,i={};const o=oo(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],a=!0);return a&&s++,s});r=()=>m(o)}t.b.length&&Gg(()=>{lu(e,r),Bo(t.b)}),Ks(()=>{const s=Qn(()=>t.m.map(rg));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&Ks(()=>{lu(e,r),Bo(t.a)})}function lu(n,e){if(n.l.s)for(const t of n.l.s)m(t);e()}function Dc(n,e,t){if(n==null)return e(void 0),t&&t(void 0),pn;const r=Qn(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const As=[];function T_(n,e){return{subscribe:ys(n,e).subscribe}}function ys(n,e=pn){let t=null;const r=new Set;function s(a){if(Fh(n,a)&&(n=a,t)){const l=!As.length;for(const c of r)c[1](),As.push(c,n);if(l){for(let c=0;c<As.length;c+=2)As[c][0](As[c+1]);As.length=0}}}function i(a){s(a(n))}function o(a,l=pn){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||pn),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function S_(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return T_(t,(o,a)=>{let l=!1;const c=[];let h=0,p=pn;const f=()=>{if(h)return;p();const v=e(r?c[0]:c,o,a);i?o(v):p=typeof v=="function"?v:pn},_=s.map((v,w)=>Dc(v,k=>{c[w]=k,h&=~(1<<w),l&&f()},()=>{h|=1<<w}));return l=!0,f(),function(){Bo(_),p(),l=!1}})}function A_(n){let e;return Dc(n,t=>e=t)(),e}let So=!1,$l=Symbol();function We(n,e,t){const r=t[e]??={store:null,source:Ec(void 0),unsubscribe:pn};if(r.store!==n&&!($l in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=pn;else{var s=!0;r.unsubscribe=Dc(n,i=>{s?r.source.v=i:y(r.source,i)}),s=!1}return n&&$l in t?A_(n):m(r.source)}function gt(){const n={};function e(){ao(()=>{for(var t in n)n[t].unsubscribe();Vi(n,$l,{enumerable:!1,value:!0})})}return[n,e]}function P_(n){var e=So;try{return So=!1,[n(),So]}finally{So=e}}const R_={get(n,e){if(!n.exclude.includes(e))return m(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var r=Ie;try{In(n.parent_effect),n.special[e]=Ve({get[e](){return n.props[e]}},e,Oh)}finally{In(r)}}return n.special[e](t),Sl(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),Sl(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function lt(n,e){return new Proxy({props:n,exclude:e,special:{},version:Br(0),parent_effect:Ie},R_)}const N_={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(pi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let s=n.props[r];pi(s)&&(s=s());const i=cr(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(pi(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=cr(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(n,e){if(e===Gn||e===wc)return!1;for(let t of n.props)if(pi(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(pi(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function _t(...n){return new Proxy({props:n},N_)}function Ve(n,e,t,r){var s=!ii||(t&xg)!==0,i=(t&kg)!==0,o=(t&Eg)!==0,a=r,l=!0,c=()=>(l&&(l=!1,a=o?Qn(r):r),a),h;if(i){var p=Gn in n||wc in n;h=cr(n,e)?.set??(p&&e in n?P=>n[e]=P:void 0)}var f,_=!1;i?[f,_]=P_(()=>n[e]):f=n[e],f===void 0&&r!==void 0&&(f=c(),h&&(s&&pg(),h(f)));var v;if(s?v=()=>{var P=n[e];return P===void 0?c():(l=!0,P)}:v=()=>{var P=n[e];return P!==void 0&&(a=void 0),P===void 0?a:P},s&&(t&Oh)===0)return v;if(h){var w=n.$$legacy;return(function(P,N){return arguments.length>0?((!s||!N||w||_)&&h(N?v():P),P):v()})}var k=!1,I=((t&yg)!==0?oo:Ta)(()=>(k=!1,v()));i&&m(I);var S=Ie;return(function(P,N){if(arguments.length>0){const j=N?m(I):s&&i?Bt(P):P;return y(I,j),k=!0,a!==void 0&&(a=j),P}return ws&&k||(S.f&dr)!==0?I.v:m(I)})}function L_(n){return new D_(n)}class D_{#t;#e;constructor(e){var t=new Map,r=(i,o)=>{var a=Ec(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return m(t.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===wc?!0:(m(t.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return y(t.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?p_:Pc)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&je(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||Vi(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{m_(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const r=(...s)=>t.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let Af;typeof HTMLElement=="function"&&(Af=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const r=this.$$c.$on(n,e);this.$$l_u.set(e,r)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),x(i,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=$_(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=Oo(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=L_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=Kg(()=>{Aa(()=>{this.$$r=!0;for(const s of jo(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=Oo(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=Oo(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return jo(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function Oo(n,e,t,r){const s=t[n]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function $_(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function ve(n,e,t,r,s,i){let o=class extends Af{constructor(){super(n,t,s),this.$$p_d=e}static get observedAttributes(){return jo(e).map(a=>(e[a].attribute||a).toLowerCase())}};return jo(e).forEach(a=>{Vi(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Oo(a,l,e),this.$$d[a]=l;var c=this.$$c;if(c){var h=cr(c,a)?.get;h?c[a]=l:c.$set({[a]:l})}}})}),r.forEach(a=>{Vi(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Rt(n){mt===null&&Dh(),ii&&mt.l!==null?O_(mt).m.push(n):Ks(()=>{const e=Qn(n);if(typeof e=="function")return e})}function Pf(n){mt===null&&Dh(),Rt(()=>()=>Qn(n))}function O_(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const M_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(M_);const U_=()=>{};var cu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(n,e){if(!n)throw ai(e)},ai=function(n){return new Error("Firebase Database ("+Rf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},z_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=i>>2,p=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(t[h],t[p],t[f],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):z_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||p==null)throw new F_;const f=i<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),p!==64){const v=c<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lf=function(n){const e=Nf(n);return $c.encodeByteArray(e,!0)},Yo=function(n){return Lf(n).replace(/\./g,"")},Qo=function(n){try{return $c.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n){return Df(void 0,n)}function Df(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!j_(t)||(n[t]=Df(n[t],e[t]));return n}function j_(n){return n!=="__proto__"}/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V_=()=>B_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof cu>"u")return;const n=cu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},W_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qo(n[1]);return e&&JSON.parse(e)},Oc=()=>{try{return U_()||V_()||H_()||W_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$f=n=>Oc()?.emulatorHosts?.[n],Of=n=>{const e=$f(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mf=()=>Oc()?.config,Uf=n=>Oc()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function zf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yo(JSON.stringify(t)),Yo(JSON.stringify(o)),""].join(".")}const Li={};function G_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?n.emulator.push(e):n.prod.push(e);return n}function K_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let du=!1;function Uc(n,e){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||Li[n]===e||Li[n]||du)return;Li[n]=e;function t(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=G_().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,_){f.setAttribute("width","24"),f.setAttribute("id",_),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{du=!0,o()},f}function h(f,_){f.setAttribute("id",_),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=K_(r),_=t("text"),v=document.getElementById(_)||document.createElement("span"),w=t("learnmore"),k=document.getElementById(w)||document.createElement("a"),I=t("preprendIcon"),S=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const P=f.element;a(P),h(k,w);const N=c();l(S,I),P.append(S,v,k,N),document.body.appendChild(P)}i?(v.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function Y_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ff(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const n=Jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function X_(){return Rf.NODE_ADMIN===!0}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function eb(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="FirebaseError";class kr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tb,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kr(s,a,r)}}function nb(n,e){return n.replace(rb,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){return JSON.parse(n)}function At(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=Ki(Qo(i[0])||""),t=Ki(Qo(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},sb=function(n){const e=qf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ib=function(n){const e=qf(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qs(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ol(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jo(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function hs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(uu(i)&&uu(o)){if(!hs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function uu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const f=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let p=0;p<80;p++){p<40?p<20?(c=a^i&(o^a),h=1518500249):(c=i^o^a,h=1859775393):p<60?(c=i&o|a&(i|o),h=2400959708):(c=i^o^a,h=3395469782);const f=(s<<5|s>>>27)+c+l+h+r[p]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function ab(n,e){const t=new lb(n,e);return t.subscribe.bind(t)}class lb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cb(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function il(){}function Na(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,Q(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},La=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ht(n){return n&&n._delegate?n._delegate:n}class Hr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class ub{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new uo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(n){return n===ns?void 0:n}function fb(n){return n.instantiationMode==="EAGER"}/**
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
 */class pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ub(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ze||(Ze={}));const mb={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},vb=Ze.INFO,gb={[Ze.DEBUG]:"log",[Ze.VERBOSE]:"log",[Ze.INFO]:"info",[Ze.WARN]:"warn",[Ze.ERROR]:"error"},_b=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=gb[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=vb,this._logHandler=_b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ze.DEBUG,...e),this._logHandler(this,Ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ze.VERBOSE,...e),this._logHandler(this,Ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ze.INFO,...e),this._logHandler(this,Ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ze.WARN,...e),this._logHandler(this,Ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ze.ERROR,...e),this._logHandler(this,Ze.ERROR,...e)}}const bb=(n,e)=>e.some(t=>n instanceof t);let hu,fu;function wb(){return hu||(hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yb(){return fu||(fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jf=new WeakMap,Ml=new WeakMap,Bf=new WeakMap,ol=new WeakMap,qc=new WeakMap;function xb(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Or(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jf.set(t,n)}).catch(()=>{}),qc.set(e,n),e}function kb(n){if(Ml.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ml.set(n,e)}let Ul={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ml.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Or(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Eb(n){Ul=n(Ul)}function Ib(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(al(this),e,...t);return Bf.set(r,e.sort?e.sort():[e]),Or(r)}:yb().includes(n)?function(...e){return n.apply(al(this),e),Or(jf.get(this))}:function(...e){return Or(n.apply(al(this),e))}}function Cb(n){return typeof n=="function"?Ib(n):(n instanceof IDBTransaction&&kb(n),bb(n,wb())?new Proxy(n,Ul):n)}function Or(n){if(n instanceof IDBRequest)return xb(n);if(ol.has(n))return ol.get(n);const e=Cb(n);return e!==n&&(ol.set(n,e),qc.set(e,n)),e}const al=n=>qc.get(n);function Tb(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sb=["get","getKey","getAll","getAllKeys","count"],Ab=["put","add","delete","clear"],ll=new Map;function pu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ab.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sb.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ll.set(e,i),i}Eb(n=>({...n,get:(e,t,r)=>pu(e,t)||n.get(e,t,r),has:(e,t)=>!!pu(e,t)||n.has(e,t)}));/**
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
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rb(n){return n.getComponent()?.type==="VERSION"}const zl="@firebase/app",mu="0.14.5";/**
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
 */const mr=new Fc("@firebase/app"),Nb="@firebase/app-compat",Lb="@firebase/analytics-compat",Db="@firebase/analytics",$b="@firebase/app-check-compat",Ob="@firebase/app-check",Mb="@firebase/auth",Ub="@firebase/auth-compat",zb="@firebase/database",Fb="@firebase/data-connect",qb="@firebase/database-compat",jb="@firebase/functions",Bb="@firebase/functions-compat",Vb="@firebase/installations",Hb="@firebase/installations-compat",Wb="@firebase/messaging",Gb="@firebase/messaging-compat",Kb="@firebase/performance",Yb="@firebase/performance-compat",Qb="@firebase/remote-config",Jb="@firebase/remote-config-compat",Xb="@firebase/storage",Zb="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/ai",n1="@firebase/firestore-compat",r1="firebase",s1="12.5.0";/**
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
 */const Fl="[DEFAULT]",i1={[zl]:"fire-core",[Nb]:"fire-core-compat",[Db]:"fire-analytics",[Lb]:"fire-analytics-compat",[Ob]:"fire-app-check",[$b]:"fire-app-check-compat",[Mb]:"fire-auth",[Ub]:"fire-auth-compat",[zb]:"fire-rtdb",[Fb]:"fire-data-connect",[qb]:"fire-rtdb-compat",[jb]:"fire-fn",[Bb]:"fire-fn-compat",[Vb]:"fire-iid",[Hb]:"fire-iid-compat",[Wb]:"fire-fcm",[Gb]:"fire-fcm-compat",[Kb]:"fire-perf",[Yb]:"fire-perf-compat",[Qb]:"fire-rc",[Jb]:"fire-rc-compat",[Xb]:"fire-gcs",[Zb]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
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
 */const Xo=new Map,o1=new Map,ql=new Map;function vu(n,e){try{n.container.addComponent(e)}catch(t){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fs(n){const e=n.name;if(ql.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,n);for(const t of Xo.values())vu(t,n);for(const t of o1.values())vu(t,n);return!0}function Da(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const a1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new ho("app","Firebase",a1);/**
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
 */class l1{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=s1;function Vf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Fl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Mr.create("bad-app-name",{appName:String(s)});if(t||(t=Mf()),!t)throw Mr.create("no-options");const i=Xo.get(s);if(i){if(hs(t,i.options)&&hs(r,i.config))return i;throw Mr.create("duplicate-app",{appName:s})}const o=new pb(s);for(const l of ql.values())o.addComponent(l);const a=new l1(t,r,o);return Xo.set(s,a),a}function jc(n=Fl){const e=Xo.get(n);if(!e&&n===Fl&&Mf())return Vf();if(!e)throw Mr.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=i1[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(o.join(" "));return}fs(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const c1="firebase-heartbeat-database",d1=1,Yi="firebase-heartbeat-store";let cl=null;function Hf(){return cl||(cl=Tb(c1,d1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mr.create("idb-open",{originalErrorMessage:n.message})})),cl}async function u1(n){try{const t=(await Hf()).transaction(Yi),r=await t.objectStore(Yi).get(Wf(n));return await t.done,r}catch(e){if(e instanceof kr)mr.warn(e.message);else{const t=Mr.create("idb-get",{originalErrorMessage:e?.message});mr.warn(t.message)}}}async function gu(n,e){try{const r=(await Hf()).transaction(Yi,"readwrite");await r.objectStore(Yi).put(e,Wf(n)),await r.done}catch(t){if(t instanceof kr)mr.warn(t.message);else{const r=Mr.create("idb-set",{originalErrorMessage:t?.message});mr.warn(r.message)}}}function Wf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const h1=1024,f1=30;class p1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_u();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>f1){const s=g1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){mr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_u(),{heartbeatsToSend:t,unsentEntries:r}=m1(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return mr.warn(e),""}}}function _u(){return new Date().toISOString().substring(0,10)}function m1(n,e=h1){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?eb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await u1(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bu(n){return Yo(JSON.stringify({version:2,heartbeats:n})).length}function g1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _1(n){fs(new Hr("platform-logger",e=>new Pb(e),"PRIVATE")),fs(new Hr("heartbeat",e=>new p1(e),"PRIVATE")),Kn(zl,mu,n),Kn(zl,mu,"esm2020"),Kn("fire-js","")}_1("");var b1="firebase",w1="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(b1,w1,"app");function Gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=Gf,Kf=new ho("auth","Firebase",Gf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Fc("@firebase/auth");function x1(n,...e){Zo.logLevel<=Ze.WARN&&Zo.warn(`Auth (${ks}): ${n}`,...e)}function Mo(n,...e){Zo.logLevel<=Ze.ERROR&&Zo.error(`Auth (${ks}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,...e){throw Bc(n,...e)}function vn(n,...e){return Bc(n,...e)}function Yf(n,e,t){const r={...y1(),[e]:t};return new ho("auth","Firebase",r).create(e,{appName:n.name})}function Yn(n){return Yf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kf.create(n,...e)}function ce(n,e,...t){if(!n)throw Bc(e,...t)}function or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mo(e),new Error(e)}function vr(n,e){n||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){return typeof self<"u"&&self.location?.href||""}function Qf(){return wu()==="http:"||wu()==="https:"}function wu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qf()||Q_()||"connection"in navigator)?navigator.onLine:!0}function E1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.shortDelay=e,this.longDelay=t,vr(t>e,"Short delay should be less than long delay!"),this.isMobile=zc()||Ff()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e){vr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T1=new fo(3e4,6e4);function cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gn(n,e,t,r,s={}){return Xf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...i};return Y_()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(c.credentials="include"),Jf.fetch()(await Zf(n,n.config.apiHost,t,a),c)})}async function Xf(n,e,t){n._canInitEmulator=!1;const r={...I1,...e};try{const s=new A1(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ci(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ci(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ci(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yf(n,h,c);qn(n,h)}}catch(s){if(s instanceof kr)throw s;qn(n,"network-request-failed",{message:String(s)})}}async function es(n,e,t,r,s={}){const i=await gn(n,e,t,r,s);return"mfaPendingCredential"in i&&qn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Vc(n.config,s):`${n.config.apiScheme}://${s}`;return C1.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function S1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),T1.get())})}}function Ci(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=vn(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){return n!==void 0&&n.getResponse!==void 0}function xu(n){return n!==void 0&&n.enterprise!==void 0}class ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return S1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(n){return(await gn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tp(n,e){return gn(n,"GET","/v2/recaptchaConfig",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return gn(n,"POST","/v1/accounts:delete",e)}async function ea(n,e){return gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N1(n,e=!1){const t=ht(n),r=await t.getIdToken(e),s=Hc(r);ce(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Di(dl(s.auth_time)),issuedAtTime:Di(dl(s.iat)),expirationTime:Di(dl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function dl(n){return Number(n)*1e3}function Hc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qo(t);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ku(n){const e=Hc(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kr&&L1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function L1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(n){const e=n.auth,t=await n.getIdToken(),r=await Js(n,ea(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?np(s.providerUserInfo):[],o=O1(n.providerData,i),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,c=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Bl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function $1(n){const e=ht(n);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function np(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(n,e){const t=await Xf(n,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Zf(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(l.credentials="include"),Jf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function U1(n,e){return gn(n,"POST","/v2/accounts:revokeToken",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ku(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=ku(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await M1(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Us;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mn{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new D1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Js(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return N1(this,e)}reload(){return $1(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Js(this,R1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:_,providerData:v,stsTokenManager:w}=t;ce(p&&w,e,"internal-error");const k=Us.fromJSON(this.name,w);ce(typeof p=="string",e,"internal-error"),Cr(r,e.name),Cr(s,e.name),ce(typeof f=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),Cr(i,e.name),Cr(o,e.name),Cr(a,e.name),Cr(l,e.name),Cr(c,e.name),Cr(h,e.name);const I=new Mn({uid:p,auth:e,email:s,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:c,lastLoginAt:h});return v&&Array.isArray(v)&&(I.providerData=v.map(S=>({...S}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new Us;s.updateFromServerResponse(t);const i=new Mn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?np(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Us;a.updateFromIdToken(r);const l=new Mn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map;function ar(n){vr(n instanceof Function,"Expected a class definition");let e=Eu.get(n);return e?(vr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Eu.set(n,e),e)}/**
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const Iu=rp;/**
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
 */function Uo(n,e,t){return`firebase:${n}:${e}:${t}`}class zs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ea(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zs(ar(Iu),e,r);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||ar(Iu);const o=Uo(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let p;if(typeof h=="string"){const f=await ea(e,{idToken:h}).catch(()=>{});if(!f)break;p=await Mn._fromGetAccountInfoResponse(e,f,h)}else p=Mn._fromJSON(e,h);c!==i&&(a=p),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cp(e))return"Blackberry";if(dp(e))return"Webos";if(ip(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(lp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function sp(n=Jt()){return/firefox\//i.test(n)}function ip(n=Jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(n=Jt()){return/crios\//i.test(n)}function ap(n=Jt()){return/iemobile/i.test(n)}function lp(n=Jt()){return/android/i.test(n)}function cp(n=Jt()){return/blackberry/i.test(n)}function dp(n=Jt()){return/webos/i.test(n)}function Wc(n=Jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function z1(n=Jt()){return Wc(n)&&!!window.navigator?.standalone}function F1(){return J_()&&document.documentMode===10}function up(n=Jt()){return Wc(n)||lp(n)||dp(n)||cp(n)||/windows phone/i.test(n)||ap(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e=[]){let t;switch(n){case"Browser":t=Cu(Jt());break;case"Worker":t=`${Cu(Jt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ks}/${r}`}/**
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
 */class q1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function j1(n,e={}){return gn(n,"GET","/v2/passwordPolicy",cn(n,e))}/**
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
 */const B1=6;class V1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??B1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tu(this),this.idTokenSubscription=new Tu(this),this.beforeStateQueue=new q1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ar(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ea(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(rn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Yn(this));const t=e?ht(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j1(this),t=new V1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ho("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await U1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ar(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&x1(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Zn(n){return ht(n)}class Tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(n){po=n}function Gc(n){return po.loadJS(n)}function G1(){return po.recaptchaV2Script}function K1(){return po.recaptchaEnterpriseScript}function Y1(){return po.gapiScript}function fp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=500,J1=6e4,Ao=1e12;class X1{constructor(e){this.auth=e,this.counter=Ao,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new t0(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Ao;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Ao;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Ao;return this._widgets.get(t)?.execute(),""}}class Z1{constructor(){this.enterprise=new e0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class e0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class t0{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;ce(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=n0(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},J1)},Q1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function n0(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const r0="recaptcha-enterprise",$i="NO_RECAPTCHA";class pp{constructor(e){this.type=r0,this.auth=Zn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{tp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ep(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;xu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o($i)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Z1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&xu(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=K1();l.length!==0&&(l+=a),Gc(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function gi(n,e,t,r=!1,s=!1){const i=new pp(n);let o;if(s)o=$i;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Fs(n,e,t,r,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gi(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gi(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await gi(n,e,t);return r(n,i).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await gi(n,e,t,!1,!0);return r(n,a)}return Promise.reject(o)})}else{const i=await gi(n,e,t,!1,!0);return r(n,i)}else return Promise.reject(s+" provider is not supported.")}async function s0(n){const e=Zn(n),t=await tp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new ep(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new pp(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n,e){const t=Da(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(hs(i,e??{}))return s;qn(s,"already-initialized")}return t.initialize({options:e})}function o0(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ar);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function a0(n,e,t){const r=Zn(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mp(e),{host:o,port:a}=l0(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(hs(c,r.config.emulator)&&hs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Zr(o)?(Mc(`${i}//${o}${l}`),Uc("Auth",!0)):c0()}function mp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function l0(n){const e=mp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Su(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Su(o)}}}function Su(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function c0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,t){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}async function d0(n,e){return gn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",cn(n,e))}async function f0(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends $a{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,t,"signInWithPassword",u0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return h0(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,r,"signUpPassword",d0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return f0(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="http://localhost";class ps extends $a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qs(e,t)}buildRequest(){const e={requestUri:p0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(n,e){return gn(n,"POST","/v1/accounts:sendVerificationCode",cn(n,e))}async function m0(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",cn(n,e))}async function v0(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",cn(n,e));if(t.temporaryProof)throw Ci(n,"account-exists-with-different-credential",t);return t}const g0={USER_NOT_FOUND:"user-not-found"};async function _0(n,e){const t={...e,operation:"REAUTH"};return es(n,"POST","/v1/accounts:signInWithPhoneNumber",cn(n,t),g0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends $a{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Oi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Oi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return m0(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return v0(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return _0(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Oi({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w0(n){const e=Ei(Ii(n)).link,t=e?Ei(Ii(e)).deep_link_id:null,r=Ei(Ii(n)).deep_link_id;return(r?Ei(Ii(r)).link:null)||r||t||e||n}class Kc{constructor(e){const t=Ei(Ii(e)),r=t.apiKey??null,s=t.oobCode??null,i=b0(t.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=w0(e);try{return new Kc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.providerId=li.PROVIDER_ID}static credential(e,t){return Qi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Kc.parseLink(t);return ce(r,"argument-error"),Qi._fromEmailAndCode(e,r.code,r.tenantId)}}li.PROVIDER_ID="password";li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends mo{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ps._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Sr.credential(t,r)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends mo{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends mo{constructor(){super("twitter.com")}static credential(e,t){return ps._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pr.credential(t,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(n,e){return es(n,"POST","/v1/accounts:signUp",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=Pu(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends kr{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new na(e,t,r,s)}}function gp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(n,i,e,r):i})}async function x0(n,e,t=!1){const r=await Js(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ms._forOperation(n,"link",r)}/**
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
 */async function k0(n,e,t=!1){const{auth:r}=n;if(rn(r.app))return Promise.reject(Yn(r));const s="reauthenticate";try{const i=await Js(n,gp(r,s,e,n),t);ce(i.idToken,r,"internal-error");const o=Hc(i.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(n.uid===a,r,"user-mismatch"),ms._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e,t=!1){if(rn(n.app))return Promise.reject(Yn(n));const r="signIn",s=await gp(n,r,e),i=await ms._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function bp(n,e){return _p(Zn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n){const e=Zn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function E0(n,e,t){if(rn(n.app))return Promise.reject(Yn(n));const r=Zn(n),o=await Fs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y0,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wp(n),l}),a=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function I0(n,e,t){return rn(n.app)?Promise.reject(Yn(n)):bp(ht(n),li.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wp(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(n,e){return gn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ht(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Js(r,C0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function T0(n,e,t,r){return ht(n).onIdTokenChanged(e,t,r)}function S0(n,e,t){return ht(n).beforeAuthStateChanged(e,t)}function xp(n,e,t,r){return ht(n).onAuthStateChanged(e,t,r)}function A0(n){return ht(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n,e){return gn(n,"POST","/v2/accounts/mfaEnrollment:start",cn(n,e))}const ra="__sak";/**
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
 */class kp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=1e3,R0=10;class Ep extends kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);F1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,R0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},P0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ep.type="LOCAL";const N0=Ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ip.type="SESSION";const Cp=Ip;/**
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
 */function L0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,i)),l=await L0(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class D0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Yc("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const f=p;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function $0(n){It().location.href=n}/**
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
 */function Qc(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function O0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M0(){return navigator?.serviceWorker?.controller||null}function U0(){return Qc()?self:null}/**
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
 */const Tp="firebaseLocalStorageDb",z0=1,sa="firebaseLocalStorage",Sp="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ma(n,e){return n.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function F0(){const n=indexedDB.deleteDatabase(Tp);return new vo(n).toPromise()}function Vl(){const n=indexedDB.open(Tp,z0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(sa,{keyPath:Sp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await F0(),e(await Vl()))})})}async function Nu(n,e,t){const r=Ma(n,!0).put({[Sp]:e,value:t});return new vo(r).toPromise()}async function q0(n,e){const t=Ma(n,!1).get(e),r=await new vo(t).toPromise();return r===void 0?null:r.value}function Lu(n,e){const t=Ma(n,!0).delete(e);return new vo(t).toPromise()}const j0=800,B0=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new D0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await Nu(e,ra,"1"),await Lu(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>q0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const V0=Ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,e){return gn(n,"POST","/v2/accounts/mfaSignIn:start",cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=fp("rcb"),H0=new fo(3e4,6e4);class W0{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!It().grecaptcha?.render}load(e,t=""){return ce(G0(t),e,"argument-error"),this.shouldResolveImmediately(t)&&yu(It().grecaptcha)?Promise.resolve(It().grecaptcha):new Promise((r,s)=>{const i=It().setTimeout(()=>{s(vn(e,"network-request-failed"))},H0.get());It()[ul]=()=>{It().clearTimeout(i),delete It()[ul];const a=It().grecaptcha;if(!a||!yu(a)){s(vn(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const p=l(c,h);return this.counter++,p},this.hostLanguage=t,r(a)};const o=`${G1()}?${xs({onload:ul,render:"explicit",hl:t})}`;Gc(o).catch(()=>{clearTimeout(i),s(vn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!It().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function G0(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class K0{async load(e){return new X1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="recaptcha",Y0={theme:"light",type:"image"};class Q0{constructor(e,t,r={...Y0}){this.parameters=r,this.type=Mi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Zn(e),this.isInvisible=this.parameters.size==="invisible",ce(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;ce(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new K0:new W0,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ce(!this.parameters.sitekey,this.auth,"argument-error"),ce(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ce(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=It()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ce(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ce(Qf()&&!Qc(),this.auth,"internal-error"),await J0(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await P1(this.auth);ce(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ce(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function J0(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Oi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Z0(n,e,t){if(rn(n.app))return Promise.reject(Yn(n));const r=Zn(n),s=await ew(r,e,ht(t));return new X0(s,i=>bp(r,i))}async function ew(n,e,t){if(!n._getRecaptchaConfig())try{await s0(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){ce(s.type==="enroll",n,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Fs(n,i,"mfaSmsEnrollment",async(c,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===$i){ce(t?.type===Mi,c,"argument-error");const p=await hl(c,h,t);return Ru(c,p)}return Ru(c,h)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).phoneSessionInfo.sessionInfo}else{ce(s.type==="signin",n,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;ce(i,n,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Fs(n,o,"mfaSmsSignIn",async(h,p)=>{if(p.phoneSignInInfo.captchaResponse===$i){ce(t?.type===Mi,h,"argument-error");const f=await hl(h,p,t);return Du(h,f)}return Du(h,p)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Fs(n,s,"sendVerificationCode",async(l,c)=>{if(c.captchaResponse===$i){ce(t?.type===Mi,l,"argument-error");const h=await hl(l,c,t);return Au(l,h)}return Au(l,c)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function hl(n,e,t){ce(t.type===Mi,n,"argument-error");const r=await t.verify();ce(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function tw(n,e){return e?ar(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jc extends $a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nw(n){return _p(n.auth,new Jc(n),n.bypassAuthState)}function rw(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),k0(t,new Jc(n),n.bypassAuthState)}async function sw(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),x0(t,new Jc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nw;case"linkViaPopup":case"linkViaRedirect":return sw;case"reauthViaPopup":case"reauthViaRedirect":return rw;default:qn(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new fo(2e3,1e4);class Ds extends Pp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iw.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="pendingRedirect",zo=new Map;class aw extends Pp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const r=await lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lw(n,e){const t=uw(e),r=dw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cw(n,e){zo.set(n._key(),e)}function dw(n){return ar(n._redirectPersistence)}function uw(n){return Uo(ow,n.config.apiKey,n.name)}async function hw(n,e,t=!1){if(rn(n.app))return Promise.reject(Yn(n));const r=Zn(n),s=tw(r,e),o=await new aw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=600*1e3;class pw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Rp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(vn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fw&&this.cachedEventUids.clear(),this.cachedEventUids.has($u(e))}saveEventToCache(e){this.cachedEventUids.add($u(e)),this.lastProcessedEventTime=Date.now()}}function $u(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n,e={}){return gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;async function bw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vw(n);for(const t of e)try{if(ww(t))return}catch{}qn(n,"unauthorized-domain")}function ww(n){const e=jl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!_w.test(t))return!1;if(gw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yw=new fo(3e4,6e4);function Ou(){const n=It().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xw(n){return new Promise((e,t)=>{function r(){Ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ou(),t(vn(n,"network-request-failed"))},timeout:yw.get()})}if(It().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(It().gapi?.load)r();else{const s=fp("iframefcb");return It()[s]=()=>{gapi.load?r():t(vn(n,"network-request-failed"))},Gc(`${Y1()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function kw(n){return Fo=Fo||xw(n),Fo}/**
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
 */const Ew=new fo(5e3,15e3),Iw="__/auth/iframe",Cw="emulator/auth/iframe",Tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Aw(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vc(e,Cw):`https://${n.config.authDomain}/${Iw}`,r={apiKey:e.apiKey,appName:n.name,v:ks},s=Sw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${xs(r).slice(1)}`}async function Pw(n){const e=await kw(n),t=It().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:Aw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(n,"network-request-failed"),a=It().setTimeout(()=>{i(o)},Ew.get());function l(){It().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Rw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nw=500,Lw=600,Dw="_blank",$w="http://localhost";class Mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ow(n,e,t,r=Nw,s=Lw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Rw,width:r.toString(),height:s.toString(),top:i,left:o},c=Jt().toLowerCase();t&&(a=op(c)?Dw:t),sp(c)&&(e=e||$w,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(z1(c)&&a!=="_self")return Mw(e||"",a),new Mu(null);const p=window.open(e||"",a,h);ce(p,n,"popup-blocked");try{p.focus()}catch{}return new Mu(p)}function Mw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Uw="__/auth/handler",zw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function Uu(n,e,t,r,s,i){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ks,eventId:s};if(e instanceof vp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof mo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${Fw}=${encodeURIComponent(l)}`:"";return`${qw(n)}?${xs(a).slice(1)}${c}`}function qw({config:n}){return n.emulator?Vc(n,zw):`https://${n.authDomain}/${Uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="webStorageSupport";class jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=hw,this._overrideRedirectResult=cw}async _openPopup(e,t,r,s){vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Uu(e,t,r,jl(),s);return Ow(e,i,Yc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Uu(e,t,r,jl(),s);return $0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pw(e),r=new pw(e);return t.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fl,{type:fl},s=>{const i=s?.[0]?.[fl];i!==void 0&&t(!!i),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return up()||ip()||Wc()}}const Bw=jw;var zu="@firebase/auth",Fu="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ww(n){fs(new Hr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hp(n)},c=new H1(r,s,i,l);return o0(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Hr("auth-internal",e=>{const t=Zn(e.getProvider("auth").getImmediate());return(r=>new Vw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(zu,Fu,Hw(n)),Kn(zu,Fu,"esm2020")}/**
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
 */const Gw=300,Kw=Uf("authIdTokenMaxAge")||Gw;let qu=null;const Yw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kw)return;const s=t?.token;qu!==s&&(qu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qw(n=jc()){const e=Da(n,"auth");if(e.isInitialized())return e.getImmediate();const t=i0(n,{popupRedirectResolver:Bw,persistence:[V0,N0,Cp]}),r=Uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Yw(i.toString());S0(t,o,()=>o(t.currentUser)),T0(t,a=>o(a))}}const s=$f("auth");return s&&a0(t,`http://${s}`),t}function Jw(){return document.getElementsByTagName("head")?.[0]??document}W1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Jw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ww("Browser");var ju={};const Bu="@firebase/database",Vu="1.1.0";/**
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
 */let Np="";function Xw(n){Np=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),At(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ki(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zw(e)}}catch{}return new ey},os=Lp("localStorage"),ty=Lp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Fc("@firebase/database"),ny=(function(){let n=1;return function(){return n++}})(),Dp=function(n){const e=db(n),t=new ob;t.update(e);const r=t.digest();return $c.encodeByteArray(r)},go=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=go.apply(null,r):typeof r=="object"?e+=At(r):e+=r,e+=" "}return e};let Ui=null,Hu=!0;const ry=function(n,e){Q(!0,"Can't turn on custom loggers persistently."),js.logLevel=Ze.VERBOSE,Ui=js.log.bind(js)},Ot=function(...n){if(Hu===!0&&(Hu=!1,Ui===null&&ty.get("logging_enabled")===!0&&ry()),Ui){const e=go.apply(null,n);Ui(e)}},_o=function(n){return function(...e){Ot(n,...e)}},Hl=function(...n){const e="FIREBASE INTERNAL ERROR: "+go(...n);js.error(e)},gr=function(...n){const e=`FIREBASE FATAL ERROR: ${go(...n)}`;throw js.error(e),new Error(e)},Qt=function(...n){const e="FIREBASE WARNING: "+go(...n);js.warn(e)},sy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},iy=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Wr="[MIN_NAME]",_r="[MAX_NAME]",Es=function(n,e){if(n===e)return 0;if(n===Wr||e===_r)return-1;if(e===Wr||n===_r)return 1;{const t=Wu(n),r=Wu(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},oy=function(n,e){return n===e?0:n<e?-1:1},_i=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+At(e))},Zc=function(n){if(typeof n!="object"||n===null)return At(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=At(e[r]),t+=":",t+=Zc(n[e[r]]);return t+="}",t},$p=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function zt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Op=function(n){Q(!Xc(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const h=c.join("");let p="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),p=p+f}return p.toLowerCase()},ay=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ly=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cy(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const dy=new RegExp("^-?(0*)\\d{1,10}$"),uy=-2147483648,hy=2147483647,Wu=function(n){if(dy.test(n)){const e=Number(n);if(e>=uy&&e<=hy)return e}return null},ci=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Qt("Exception was thrown by user callback.",t),e},Math.floor(0))}},fy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class py{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,rn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}class qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="5",Mp="v",Up="s",zp="r",Fp="f",qp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jp="ls",Bp="p",Wl="ac",Vp="websocket",Hp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vy(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Gp(n,e,t){Q(typeof e=="string","typeof type must == string"),Q(typeof t=="object","typeof params must == object");let r;if(e===Vp)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hp)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vy(n)&&(t.ns=n.namespace);const s=[];return zt(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.counters_={}}incrementCounter(e,t=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return q_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={},ml={};function td(n){const e=n.toString();return pl[e]||(pl[e]=new gy),pl[e]}function _y(n,e){const t=n.toString();return ml[t]||(ml[t]=e()),ml[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ci(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="start",wy="close",yy="pLPCommand",xy="pRTLPCB",Kp="id",Yp="pw",Qp="ser",ky="cb",Ey="seg",Iy="ts",Cy="d",Ty="dframe",Jp=1870,Xp=30,Sy=Jp-Xp,Ay=25e3,Py=3e4;class $s{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=td(t),this.urlFn=l=>(this.appCheckToken&&(l[Wl]=this.appCheckToken),Gp(t,Hp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new by(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Py)),iy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...i)=>{const[o,a,l,c,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gu)this.id=a,this.password=l;else if(o===wy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gu]="t",r[Qp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ky]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mp]=ed,this.transportSessionId&&(r[Up]=this.transportSessionId),this.lastSessionId&&(r[jp]=this.lastSessionId),this.applicationId&&(r[Bp]=this.applicationId),this.appCheckToken&&(r[Wl]=this.appCheckToken),typeof location<"u"&&location.hostname&&qp.test(location.hostname)&&(r[zp]=Fp);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$s.forceAllow_=!0}static forceDisallow(){$s.forceDisallow_=!0}static isAvailable(){return $s.forceAllow_?!0:!$s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ay()&&!ly()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=At(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Lf(t),s=$p(r,Sy);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ty]="t",r[Kp]=e,r[Yp]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=At(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nd{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ny(),window[yy+this.uniqueCallbackIdentifier]=e,window[xy+this.uniqueCallbackIdentifier]=t,this.myIFrame=nd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kp]=this.myID,e[Yp]=this.myPW,e[Qp]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xp+r.length<=Jp;){const o=this.pendingSegs.shift();r=r+"&"+Ey+s+"="+o.seg+"&"+Iy+s+"="+o.ts+"&"+Cy+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(Ay)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=16384,Ny=45e3;let ia=null;typeof MozWebSocket<"u"?ia=MozWebSocket:typeof WebSocket<"u"&&(ia=WebSocket);class $n{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=td(t),this.connURL=$n.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[Mp]=ed,typeof location<"u"&&location.hostname&&qp.test(location.hostname)&&(o[zp]=Fp),t&&(o[Up]=t),r&&(o[jp]=r),s&&(o[Wl]=s),i&&(o[Bp]=i),Gp(e,Vp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,os.set("previous_websocket_failure",!0);try{let r;X_(),this.mySock=new ia(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ia!==null&&!$n.forceDisallow_}static previouslyFailed(){return os.isInMemoryStorage||os.get("previous_websocket_failure")===!0}markConnectionHealthy(){os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ki(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=At(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=$p(t,Ry);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ny))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$n.responsesRequiredToBeHealthy=2;$n.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static get ALL_TRANSPORTS(){return[$s,$n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=$n&&$n.isAvailable();let r=t&&!$n.previouslyFailed();if(e.webSocketOnly&&(t||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$n];else{const s=this.transports_=[];for(const i of Ji.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ji.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ji.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=6e4,Dy=5e3,$y=10*1024,Oy=100*1024,vl="t",Ku="d",My="s",Yu="r",Uy="e",Qu="o",Ju="a",Xu="n",Zu="p",zy="h";class Fy{constructor(e,t,r,s,i,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new Ji(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Oy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$y?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vl in e){const t=e[vl];t===Ju?this.upgradeIfSecondaryHealthy_():t===Yu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_i("t",e),r=_i("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ju,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_i("t",e),r=_i("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_i(vl,e);if(Ku in e){const r=e[Ku];if(t===zy){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Xu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===My?this.onConnectionShutdown_(r):t===Yu?this.onReset_(r):t===Uy?Hl("Server Error: "+r):t===Qu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ed!==r&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ly))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends em{static getInstance(){return new oa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=32,th=768;class Ke{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Be(){return new Ke("")}function Se(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Gr(n){return n.pieces_.length-n.pieceNum_}function at(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ke(n.pieces_,e)}function rd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function qy(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function tm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ke(e,0)}function pt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ke(t,0)}function Ae(n){return n.pieceNum_>=n.pieces_.length}function Yt(n,e){const t=Se(n),r=Se(e);if(t===null)return e;if(t===r)return Yt(at(n),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function jy(n,e){const t=Xi(n,0),r=Xi(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=Es(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function sd(n,e){if(Gr(n)!==Gr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function xn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Gr(n)>Gr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class By{constructor(e,t){this.errorPrefix_=t,this.parts_=Xi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=La(this.parts_[r]);nm(this)}}function Vy(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=La(e),nm(n)}function Hy(n){const e=n.parts_.pop();n.byteLength_-=La(e),n.parts_.length>0&&(n.byteLength_-=1)}function nm(n){if(n.byteLength_>th)throw new Error(n.errorPrefix_+"has a key path longer than "+th+" bytes ("+n.byteLength_+").");if(n.parts_.length>eh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eh+") or object contains a cycle "+rs(n))}function rs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends em{static getInstance(){return new id}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=1e3,Wy=300*1e3,nh=30*1e3,Gy=1.3,Ky=3e4,Yy="server_kill",rh=3;class fr extends Zp{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=fr.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bi,this.maxReconnectDelay_=Wy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(At(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new uo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;fr.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Xn(e,"w")){const r=Qs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ib(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=sb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+At(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hl("Unrecognized action received from server: "+At(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ky&&(this.reconnectDelay_=bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+fr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(p){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=f&&f.token,a=new Fy(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,_=>{Qt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yy)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Qt(p),l())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ol(this.interruptReasons_)&&(this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Zc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ke(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Ot("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rh&&(this.reconnectDelay_=nh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ot("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Np.replace(/\./g,"-")]=1,zc()?e["framework.cordova"]=1:Ff()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oa.getInstance().currentlyOnline();return Ol(this.interruptReasons_)&&e}}fr.nextPersistentConnectionId_=0;fr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Pe(Wr,e),s=new Pe(Wr,t);return this.compare(r,s)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class rm extends Ua{static get __EMPTY_NODE(){return Po}static set __EMPTY_NODE(e){Po=e}compare(e,t){return Es(e.name,t.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(_r,Po)}makePost(e,t){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Po)}toString(){return".key"}}const pr=new rm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Lt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Lt.RED,this.left=s??on.EMPTY_NODE,this.right=i??on.EMPTY_NODE}copy(e,t,r,s,i){return new Lt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return on.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return on.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Lt.RED=!0;Lt.BLACK=!1;class Qy{copy(e,t,r,s,i){return this}insert(e,t,r){return new Lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class on{constructor(e,t=on.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new on(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Lt.BLACK,null,null))}remove(e){return new on(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Lt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ro(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ro(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ro(this.root_,null,this.comparator_,!0,e)}}on.EMPTY_NODE=new Qy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n,e){return Es(n.name,e.name)}function od(n,e){return Es(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;function Xy(n){Gl=n}const sm=function(n){return typeof n=="number"?"number:"+Op(n):"string:"+n},im=function(n){if(n.isLeafNode()){const e=n.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else Q(n===Gl||n.isEmpty(),"priority of unexpected type.");Q(n===Gl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class Nt{static set __childrenNodeConstructor(e){sh=e}static get __childrenNodeConstructor(){return sh}constructor(e,t=Nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),im(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ae(e)?this:Se(e)===".priority"?this.priorityNode_:Nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Se(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(Q(r!==".priority"||Gr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Op(this.value_):e+=this.value_,this.lazyHash_=Dp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Nt.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Nt.VALUE_TYPE_ORDER.indexOf(t),i=Nt.VALUE_TYPE_ORDER.indexOf(r);return Q(s>=0,"Unknown leaf type: "+t),Q(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om,am;function Zy(n){om=n}function ex(n){am=n}class tx extends Ua{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Es(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(_r,new Nt("[PRIORITY-POST]",am))}makePost(e,t){const r=om(e);return new Pe(t,new Nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ut=new tx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=Math.log(2);class rx{constructor(e){const t=i=>parseInt(Math.log(i)/nx,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const aa=function(n,e,t,r){n.sort(e);const s=function(l,c){const h=c-l;let p,f;if(h===0)return null;if(h===1)return p=n[l],f=t?t(p):p,new Lt(f,p.node,Lt.BLACK,null,null);{const _=parseInt(h/2,10)+l,v=s(l,_),w=s(_+1,c);return p=n[_],f=t?t(p):p,new Lt(f,p.node,Lt.BLACK,v,w)}},i=function(l){let c=null,h=null,p=n.length;const f=function(v,w){const k=p-v,I=p;p-=v;const S=s(k+1,I),P=n[k],N=t?t(P):P;_(new Lt(N,P.node,w,null,S))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));w?f(k,Lt.BLACK):(f(k,Lt.BLACK),f(k,Lt.RED))}return h},o=new rx(n.length),a=i(o);return new on(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;const Ps={};class lr{static get Default(){return Q(Ps&&ut,"ChildrenNode.ts has not been loaded"),gl=gl||new lr({".priority":Ps},{".priority":ut}),gl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof on?t:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,t){Q(e!==pr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=aa(r,e.getCompare()):a=Ps;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new lr(h,c)}addToIndexes(e,t){const r=Jo(this.indexes_,(s,i)=>{const o=Qs(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),s===Ps)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),aa(a,o.getCompare())}else return Ps;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new lr(r,this.indexSet_)}removeFromIndexes(e,t){const r=Jo(this.indexes_,s=>{if(s===Ps)return s;{const i=t.get(e.name);return i?s.remove(new Pe(e.name,i)):s}});return new lr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class xe{static get EMPTY_NODE(){return wi||(wi=new xe(new on(od),null,lr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&im(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wi:t}}getChild(e){const t=Se(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Pe(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?wi:this.priorityNode_;return new xe(s,o,i)}}updateChild(e,t){const r=Se(e);if(r===null)return t;{Q(Se(e)!==".priority"||Gr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(at(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(ut,(o,a)=>{t[o]=a.val(e),r++,i&&xe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sm(this.getPriority().val())+":"),this.forEachChild(ut,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Dp(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Pe(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bo?-1:0}withIndex(e){if(e===pr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ut),s=t.getIterator(ut);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pr?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sx extends xe{constructor(){super(new on(od),xe.EMPTY_NODE,lr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const bo=new sx;Object.defineProperties(Pe,{MIN:{value:new Pe(Wr,xe.EMPTY_NODE)},MAX:{value:new Pe(_r,bo)}});rm.__EMPTY_NODE=xe.EMPTY_NODE;Nt.__childrenNodeConstructor=xe;Xy(bo);ex(bo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=!0;function St(n,e=null){if(n===null)return xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Nt(t,St(e))}if(!(n instanceof Array)&&ix){const t=[];let r=!1;if(zt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=St(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new Pe(o,l)))}}),t.length===0)return xe.EMPTY_NODE;const i=aa(t,Jy,o=>o.name,od);if(r){const o=aa(t,ut.getCompare());return new xe(i,St(e),new lr({".priority":o},{".priority":ut}))}else return new xe(i,St(e),lr.Default)}else{let t=xe.EMPTY_NODE;return zt(n,(r,s)=>{if(Xn(n,r)&&r.substring(0,1)!=="."){const i=St(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(St(e))}}Zy(St);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends Ua{constructor(e){super(),this.indexPath_=e,Q(!Ae(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Es(e.name,t.name):i}makePost(e,t){const r=St(e),s=xe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Pe(t,s)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,bo);return new Pe(_r,e)}toString(){return Xi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox extends Ua{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Es(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,t){const r=St(e);return new Pe(t,r)}toString(){return".value"}}const lm=new ox;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n){return{type:"value",snapshotNode:n}}function Xs(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Zi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function eo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ax(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){Q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Zi(t,a)):Q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xs(t,r)):o.trackChildChange(eo(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ut,(s,i)=>{t.hasChild(s)||r.trackChildChange(Zi(s,i))}),t.isLeafNode()||t.forEachChild(ut,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(eo(s,i,o))}else r.trackChildChange(Xs(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.indexedFilter_=new ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=to.getStartPost_(e),this.endPost_=to.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new Pe(t,r))||(r=xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=xe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(xe.EMPTY_NODE);const i=this;return t.forEachChild(ut,(o,a)=>{i.matches(new Pe(o,a))||(s=s.updateImmediateChild(o,xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new to(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new Pe(t,r))||(r=xe.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=xe.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(xe.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(f,_)=>p(_,f)}else o=this.index_.getCompare();const a=e;Q(a.numChildren()===this.limit_,"");const l=new Pe(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const p=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(h&&!r.isEmpty()&&_>=0)return i?.trackChildChange(eo(t,r,p)),a.updateImmediateChild(t,r);{i?.trackChildChange(Zi(t,p));const w=a.updateImmediateChild(t,xe.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i?.trackChildChange(Xs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Zi(c.name,c.node)),i.trackChildChange(Xs(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,xe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ut}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ut}copy(){const e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cx(n){return n.loadsAllData()?new ld(n.getIndex()):n.hasLimit()?new lx(n):new to(n)}function dx(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function ux(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Kl(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function hx(n,e,t){let r;return n.index_===pr||t?r=Kl(n,e,t):r=Kl(n,e,_r),r.startAfterSet_=!0,r}function Yl(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function fx(n,e,t){let r;return n.index_===pr||t?r=Yl(n,e,t):r=Yl(n,e,Wr),r.endBeforeSet_=!0,r}function px(n,e){const t=n.copy();return t.index_=e,t}function ih(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ut?t="$priority":n.index_===lm?t="$value":n.index_===pr?t="$key":(Q(n.index_ instanceof ad,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=At(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=At(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+At(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=At(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+At(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ut&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Zp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=_o("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=la.getListenId_(e,r),a={};this.listens_[o]=a;const l=ih(e._queryParams);this.restRequest_(i+".json",l,(c,h)=>{let p=h;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(i,p,!1,r),Qs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const r=la.getListenId_(e,t);delete this.listens_[r]}get(e){const t=ih(e._queryParams),r=e._path.toString(),s=new uo;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ki(a.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){return{value:null,children:new Map}}function dm(n,e,t){if(Ae(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Se(e);n.children.has(r)||n.children.set(r,ca());const s=n.children.get(r);e=at(e),dm(s,e,t)}}function Ql(n,e,t){n.value!==null?t(e,n.value):vx(n,(r,s)=>{const i=new Ke(e.toString()+"/"+r);Ql(s,i,t)})}function vx(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&zt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=10*1e3,_x=30*1e3,bx=300*1e3;class wx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gx(e);const r=ah+(_x-ah)*Math.random();zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;zt(e,(s,i)=>{i>0&&Xn(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*bx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Un||(Un={}));function dd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ud(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hd(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Un.ACK_USER_WRITE,this.source=dd()}operationForChild(e){if(Ae(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ke(e));return new da(Be(),t,this.revert)}}else return Q(Se(this.path)===e,"operationForChild called for unrelated child."),new da(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.source=e,this.path=t,this.type=Un.LISTEN_COMPLETE}operationForChild(e){return Ae(this.path)?new no(this.source,Be()):new no(this.source,at(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Un.OVERWRITE}operationForChild(e){return Ae(this.path)?new vs(this.source,Be(),this.snap.getImmediateChild(e)):new vs(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Un.MERGE}operationForChild(e){if(Ae(this.path)){const t=this.children.subtree(new Ke(e));return t.isEmpty()?null:t.value?new vs(this.source,Be(),t.value):new Zs(this.source,Be(),t)}else return Q(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ae(e))return this.isFullyInitialized()&&!this.filtered_;const t=Se(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xx(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ax(o.childName,o.snapshotNode))}),yi(n,s,"child_removed",e,r,t),yi(n,s,"child_added",e,r,t),yi(n,s,"child_moved",i,r,t),yi(n,s,"child_changed",e,r,t),yi(n,s,"value",e,r,t),s}function yi(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>Ex(n,a,l)),o.forEach(a=>{const l=kx(n,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function kx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ex(n,e,t){if(e.childName==null||t.childName==null)throw ai("Should only compare child_ events.");const r=new Pe(e.childName,e.snapshotNode),s=new Pe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){return{eventCache:n,serverCache:e}}function Fi(n,e,t,r){return za(new Kr(e,t,r),n.serverCache)}function um(n,e,t,r){return za(n.eventCache,new Kr(e,t,r))}function ua(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function gs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;const Ix=()=>(_l||(_l=new on(oy)),_l);class ot{static fromObject(e){let t=new ot(null);return zt(e,(r,s)=>{t=t.set(new Ke(r),s)}),t}constructor(e,t=Ix()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Be(),value:this.value};if(Ae(e))return null;{const r=Se(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(at(e),t);return i!=null?{path:pt(new Ke(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ae(e))return this;{const t=Se(e),r=this.children.get(t);return r!==null?r.subtree(at(e)):new ot(null)}}set(e,t){if(Ae(e))return new ot(t,this.children);{const r=Se(e),i=(this.children.get(r)||new ot(null)).set(at(e),t),o=this.children.insert(r,i);return new ot(this.value,o)}}remove(e){if(Ae(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=Se(e),r=this.children.get(t);if(r){const s=r.remove(at(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ot(null):new ot(this.value,i)}else return this}}get(e){if(Ae(e))return this.value;{const t=Se(e),r=this.children.get(t);return r?r.get(at(e)):null}}setTree(e,t){if(Ae(e))return t;{const r=Se(e),i=(this.children.get(r)||new ot(null)).setTree(at(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ot(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(pt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Be(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ae(e))return null;{const i=Se(e),o=this.children.get(i);return o?o.findOnPath_(at(e),pt(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Be(),t)}foreachOnPath_(e,t,r){if(Ae(e))return this;{this.value&&r(t,this.value);const s=Se(e),i=this.children.get(s);return i?i.foreachOnPath_(at(e),pt(t,s),r):new ot(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(pt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.writeTree_=e}static empty(){return new zn(new ot(null))}}function qi(n,e,t){if(Ae(e))return new zn(new ot(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Yt(s,e);return i=i.updateChild(o,t),new zn(n.writeTree_.set(s,i))}else{const s=new ot(t),i=n.writeTree_.setTree(e,s);return new zn(i)}}}function Jl(n,e,t){let r=n;return zt(t,(s,i)=>{r=qi(r,pt(e,s),i)}),r}function lh(n,e){if(Ae(e))return zn.empty();{const t=n.writeTree_.setTree(e,new ot(null));return new zn(t)}}function Xl(n,e){return Is(n,e)!=null}function Is(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Yt(t.path,e)):null}function ch(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ut,(r,s)=>{e.push(new Pe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Pe(r,s.value))}),e}function Ur(n,e){if(Ae(e))return n;{const t=Is(n,e);return t!=null?new zn(new ot(t)):new zn(n.writeTree_.subtree(e))}}function Zl(n){return n.writeTree_.isEmpty()}function ei(n,e){return hm(Be(),n.writeTree_,e)}function hm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=hm(pt(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(pt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n,e){return vm(e,n)}function Cx(n,e,t,r,s){Q(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=qi(n.visibleWrites,e,t)),n.lastWriteId=r}function Tx(n,e,t,r){Q(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Jl(n.visibleWrites,e,t),n.lastWriteId=r}function Sx(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Ax(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);Q(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Px(a,r.path)?s=!1:xn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Rx(n),!0;if(r.snap)n.visibleWrites=lh(n.visibleWrites,r.path);else{const a=r.children;zt(a,l=>{n.visibleWrites=lh(n.visibleWrites,pt(r.path,l))})}return!0}else return!1}function Px(n,e){if(n.snap)return xn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&xn(pt(n.path,t),e))return!0;return!1}function Rx(n){n.visibleWrites=fm(n.allWrites,Nx,Be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Nx(n){return n.visible}function fm(n,e,t){let r=zn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)xn(t,o)?(a=Yt(t,o),r=qi(r,a,i.snap)):xn(o,t)&&(a=Yt(o,t),r=qi(r,Be(),i.snap.getChild(a)));else if(i.children){if(xn(t,o))a=Yt(t,o),r=Jl(r,a,i.children);else if(xn(o,t))if(a=Yt(o,t),Ae(a))r=Jl(r,Be(),i.children);else{const l=Qs(i.children,Se(a));if(l){const c=l.getChild(at(a));r=qi(r,Be(),c)}}}else throw ai("WriteRecord should have .snap or .children")}}return r}function pm(n,e,t,r,s){if(!r&&!s){const i=Is(n.visibleWrites,e);if(i!=null)return i;{const o=Ur(n.visibleWrites,e);if(Zl(o))return t;if(t==null&&!Xl(o,Be()))return null;{const a=t||xe.EMPTY_NODE;return ei(o,a)}}}else{const i=Ur(n.visibleWrites,e);if(!s&&Zl(i))return t;if(!s&&t==null&&!Xl(i,Be()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(xn(c.path,e)||xn(e,c.path))},a=fm(n.allWrites,o,e),l=t||xe.EMPTY_NODE;return ei(a,l)}}}function Lx(n,e,t){let r=xe.EMPTY_NODE;const s=Is(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ut,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Ur(n.visibleWrites,e);return t.forEachChild(ut,(o,a)=>{const l=ei(Ur(i,new Ke(o)),a);r=r.updateImmediateChild(o,l)}),ch(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Ur(n.visibleWrites,e);return ch(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Dx(n,e,t,r,s){Q(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=pt(e,t);if(Xl(n.visibleWrites,i))return null;{const o=Ur(n.visibleWrites,i);return Zl(o)?s.getChild(t):ei(o,s.getChild(t))}}function $x(n,e,t,r){const s=pt(e,t),i=Is(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Ur(n.visibleWrites,s);return ei(o,r.getNode().getImmediateChild(t))}else return null}function Ox(n,e){return Is(n.visibleWrites,e)}function Mx(n,e,t,r,s,i,o){let a;const l=Ur(n.visibleWrites,e),c=Is(l,Be());if(c!=null)a=c;else if(t!=null)a=ei(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],p=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&h.length<s;)p(_,r)!==0&&h.push(_),_=f.getNext();return h}else return[]}function Ux(){return{visibleWrites:zn.empty(),allWrites:[],lastWriteId:-1}}function ha(n,e,t,r){return pm(n.writeTree,n.treePath,e,t,r)}function fd(n,e){return Lx(n.writeTree,n.treePath,e)}function dh(n,e,t,r){return Dx(n.writeTree,n.treePath,e,t,r)}function fa(n,e){return Ox(n.writeTree,pt(n.treePath,e))}function zx(n,e,t,r,s,i){return Mx(n.writeTree,n.treePath,e,t,r,s,i)}function pd(n,e,t){return $x(n.writeTree,n.treePath,e,t)}function mm(n,e){return vm(pt(n.treePath,e),n.writeTree)}function vm(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;Q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Q(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,eo(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,Zi(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,Xs(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,eo(r,e.snapshotNode,s.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const gm=new qx;class md{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gs(this.viewCache_),i=zx(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){return{filter:n}}function Bx(n,e){Q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vx(n,e,t,r,s){const i=new Fx;let o,a;if(t.type===Un.OVERWRITE){const c=t;c.source.fromUser?o=ec(n,e,c.path,c.snap,r,s,i):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ae(c.path),o=pa(n,e,c.path,c.snap,r,s,a,i))}else if(t.type===Un.MERGE){const c=t;c.source.fromUser?o=Wx(n,e,c.path,c.children,r,s,i):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=tc(n,e,c.path,c.children,r,s,a,i))}else if(t.type===Un.ACK_USER_WRITE){const c=t;c.revert?o=Yx(n,e,c.path,r,s,i):o=Gx(n,e,c.path,c.affectedTree,r,s,i)}else if(t.type===Un.LISTEN_COMPLETE)o=Kx(n,e,t.path,r,i);else throw ai("Unknown operation type: "+t.type);const l=i.getChanges();return Hx(e,o,l),{viewCache:o,changes:l}}function Hx(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ua(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(cm(ua(e)))}}function _m(n,e,t,r,s,i){const o=e.eventCache;if(fa(r,t)!=null)return e;{let a,l;if(Ae(t))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gs(e),h=c instanceof xe?c:xe.EMPTY_NODE,p=fd(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const c=ha(r,gs(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Se(t);if(c===".priority"){Q(Gr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const p=dh(r,t,h,l);p!=null?a=n.filter.updatePriority(h,p):a=o.getNode()}else{const h=at(t);let p;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=dh(r,t,o.getNode(),l);f!=null?p=o.getNode().getImmediateChild(c).updateChild(h,f):p=o.getNode().getImmediateChild(c)}else p=pd(r,c,e.serverCache);p!=null?a=n.filter.updateChild(o.getNode(),c,p,h,s,i):a=o.getNode()}}return Fi(e,a,o.isFullyInitialized()||Ae(t),n.filter.filtersNodes())}}function pa(n,e,t,r,s,i,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(Ae(t))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=Se(t);if(!l.isCompleteForPath(t)&&Gr(t)>1)return e;const v=at(t),k=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(l.getNode(),k):c=h.updateChild(l.getNode(),_,k,v,gm,null)}const p=um(e,c,l.isFullyInitialized()||Ae(t),h.filtersNodes()),f=new md(s,p,i);return _m(n,p,t,s,f,a)}function ec(n,e,t,r,s,i,o){const a=e.eventCache;let l,c;const h=new md(s,e,i);if(Ae(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fi(e,c,!0,n.filter.filtersNodes());else{const p=Se(t);if(p===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=Fi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=at(t),_=a.getNode().getImmediateChild(p);let v;if(Ae(f))v=r;else{const w=h.getCompleteChild(p);w!=null?rd(f)===".priority"&&w.getChild(tm(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=xe.EMPTY_NODE}if(_.equals(v))l=e;else{const w=n.filter.updateChild(a.getNode(),p,v,f,h,o);l=Fi(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function uh(n,e){return n.eventCache.isCompleteForChild(e)}function Wx(n,e,t,r,s,i,o){let a=e;return r.foreach((l,c)=>{const h=pt(t,l);uh(e,Se(h))&&(a=ec(n,a,h,c,s,i,o))}),r.foreach((l,c)=>{const h=pt(t,l);uh(e,Se(h))||(a=ec(n,a,h,c,s,i,o))}),a}function hh(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function tc(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ae(t)?c=r:c=new ot(null).setTree(t,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((p,f)=>{if(h.hasChild(p)){const _=e.serverCache.getNode().getImmediateChild(p),v=hh(n,_,f);l=pa(n,l,new Ke(p),v,s,i,o,a)}}),c.children.inorderTraversal((p,f)=>{const _=!e.serverCache.isCompleteForChild(p)&&f.value===null;if(!h.hasChild(p)&&!_){const v=e.serverCache.getNode().getImmediateChild(p),w=hh(n,v,f);l=pa(n,l,new Ke(p),w,s,i,o,a)}}),l}function Gx(n,e,t,r,s,i,o){if(fa(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ae(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return pa(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Ae(t)){let c=new ot(null);return l.getNode().forEachChild(pr,(h,p)=>{c=c.set(new Ke(h),p)}),tc(n,e,t,c,s,i,a,o)}else return e}else{let c=new ot(null);return r.foreach((h,p)=>{const f=pt(t,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),tc(n,e,t,c,s,i,a,o)}}function Kx(n,e,t,r,s){const i=e.serverCache,o=um(e,i.getNode(),i.isFullyInitialized()||Ae(t),i.isFiltered());return _m(n,o,t,r,gm,s)}function Yx(n,e,t,r,s,i){let o;if(fa(r,t)!=null)return e;{const a=new md(r,e,s),l=e.eventCache.getNode();let c;if(Ae(t)||Se(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ha(r,gs(e));else{const p=e.serverCache.getNode();Q(p instanceof xe,"serverChildren would be complete if leaf node"),h=fd(r,p)}h=h,c=n.filter.updateFullNode(l,h,i)}else{const h=Se(t);let p=pd(r,h,e.serverCache);p==null&&e.serverCache.isCompleteForChild(h)&&(p=l.getImmediateChild(h)),p!=null?c=n.filter.updateChild(l,h,p,at(t),a,i):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,xe.EMPTY_NODE,at(t),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ha(r,gs(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||fa(r,Be())!=null,Fi(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ld(r.getIndex()),i=cx(r);this.processor_=jx(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(xe.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(xe.EMPTY_NODE,a.getNode(),null),h=new Kr(l,o.isFullyInitialized(),s.filtersNodes()),p=new Kr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=za(p,h),this.eventGenerator_=new yx(this.query_)}get query(){return this.query_}}function Jx(n){return n.viewCache_.serverCache.getNode()}function Xx(n){return ua(n.viewCache_)}function Zx(n,e){const t=gs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ae(e)&&!t.getImmediateChild(Se(e)).isEmpty())?t.getChild(e):null}function fh(n){return n.eventRegistrations_.length===0}function ek(n,e){n.eventRegistrations_.push(e)}function ph(n,e,t){const r=[];if(t){Q(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function mh(n,e,t,r){e.type===Un.MERGE&&e.source.queryId!==null&&(Q(gs(n.viewCache_),"We should always have a full cache before handling merges"),Q(ua(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=Vx(n.processor_,s,e,t,r);return Bx(n.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,bm(n,i.changes,i.viewCache.eventCache.getNode(),null)}function tk(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ut,(i,o)=>{r.push(Xs(i,o))}),t.isFullyInitialized()&&r.push(cm(t.getNode())),bm(n,r,t.getNode(),e)}function bm(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return xx(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class wm{constructor(){this.views=new Map}}function nk(n){Q(!ma,"__referenceConstructor has already been defined"),ma=n}function rk(){return Q(ma,"Reference.ts has not been loaded"),ma}function sk(n){return n.views.size===0}function vd(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return Q(i!=null,"SyncTree gave us an op for an invalid query."),mh(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(mh(o,e,t,r));return i}}function ym(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=ha(t,s?r:null),l=!1;a?l=!0:r instanceof xe?(a=fd(t,r),l=!1):(a=xe.EMPTY_NODE,l=!1);const c=za(new Kr(a,l,!1),new Kr(r,s,!1));return new Qx(e,c)}return o}function ik(n,e,t,r,s,i){const o=ym(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ek(o,t),tk(o,t)}function ok(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=Yr(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ph(c,t,r)),fh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ph(l,t,r)),fh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Yr(n)&&i.push(new(rk())(e._repo,e._path)),{removed:i,events:o}}function xm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function zr(n,e){let t=null;for(const r of n.views.values())t=t||Zx(r,e);return t}function km(n,e){if(e._queryParams.loadsAllData())return qa(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Em(n,e){return km(n,e)!=null}function Yr(n){return qa(n)!=null}function qa(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;function ak(n){Q(!va,"__referenceConstructor has already been defined"),va=n}function lk(){return Q(va,"Reference.ts has not been loaded"),va}let ck=1;class vh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=Ux(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Im(n,e,t,r,s){return Cx(n.pendingWriteTree_,e,t,r,s),s?di(n,new vs(dd(),e,t)):[]}function dk(n,e,t,r){Tx(n.pendingWriteTree_,e,t,r);const s=ot.fromObject(t);return di(n,new Zs(dd(),e,s))}function Lr(n,e,t=!1){const r=Sx(n.pendingWriteTree_,e);if(Ax(n.pendingWriteTree_,e)){let i=new ot(null);return r.snap!=null?i=i.set(Be(),!0):zt(r.children,o=>{i=i.set(new Ke(o),!0)}),di(n,new da(r.path,i,t))}else return[]}function wo(n,e,t){return di(n,new vs(ud(),e,t))}function uk(n,e,t){const r=ot.fromObject(t);return di(n,new Zs(ud(),e,r))}function hk(n,e){return di(n,new no(ud(),e))}function fk(n,e,t){const r=_d(n,t);if(r){const s=bd(r),i=s.path,o=s.queryId,a=Yt(i,e),l=new no(hd(o),a);return wd(n,i,l)}else return[]}function ga(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Em(o,e))){const l=ok(o,e,t,r);sk(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(i,(f,_)=>Yr(_));if(h&&!p){const f=n.syncPointTree_.subtree(i);if(!f.isEmpty()){const _=vk(f);for(let v=0;v<_.length;++v){const w=_[v],k=w.query,I=Am(n,w);n.listenProvider_.startListening(ji(k),ro(n,k),I.hashFn,I.onComplete)}}}!p&&c.length>0&&!r&&(h?n.listenProvider_.stopListening(ji(e),null):c.forEach(f=>{const _=n.queryToTagMap.get(ja(f));n.listenProvider_.stopListening(ji(f),_)}))}gk(n,c)}return a}function Cm(n,e,t,r){const s=_d(n,r);if(s!=null){const i=bd(s),o=i.path,a=i.queryId,l=Yt(o,e),c=new vs(hd(a),l,t);return wd(n,o,c)}else return[]}function pk(n,e,t,r){const s=_d(n,r);if(s){const i=bd(s),o=i.path,a=i.queryId,l=Yt(o,e),c=ot.fromObject(t),h=new Zs(hd(a),l,c);return wd(n,o,h)}else return[]}function nc(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,_)=>{const v=Yt(f,s);i=i||zr(_,v),o=o||Yr(_)});let a=n.syncPointTree_.get(s);a?(o=o||Yr(a),i=i||zr(a,Be())):(a=new wm,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=xe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((_,v)=>{const w=zr(v,Be());w&&(i=i.updateImmediateChild(_,w))}));const c=Em(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=ja(e);Q(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=_k();n.queryToTagMap.set(f,_),n.tagToQueryMap.set(_,f)}const h=Fa(n.pendingWriteTree_,s);let p=ik(a,e,t,h,i,l);if(!c&&!o&&!r){const f=km(a,e);p=p.concat(bk(n,e,f))}return p}function gd(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Yt(o,e),c=zr(a,l);if(c)return c});return pm(s,e,i,t,!0)}function mk(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const p=Yt(c,t);r=r||zr(h,p)});let s=n.syncPointTree_.get(t);s?r=r||zr(s,Be()):(s=new wm,n.syncPointTree_=n.syncPointTree_.set(t,s));const i=r!=null,o=i?new Kr(r,!0,!1):null,a=Fa(n.pendingWriteTree_,e._path),l=ym(s,e,a,i?o.getNode():xe.EMPTY_NODE,i);return Xx(l)}function di(n,e){return Tm(e,n.syncPointTree_,null,Fa(n.pendingWriteTree_,Be()))}function Tm(n,e,t,r){if(Ae(n.path))return Sm(n,e,t,r);{const s=e.get(Be());t==null&&s!=null&&(t=zr(s,Be()));let i=[];const o=Se(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=mm(r,o);i=i.concat(Tm(a,l,c,h))}return s&&(i=i.concat(vd(s,n,r,t))),i}}function Sm(n,e,t,r){const s=e.get(Be());t==null&&s!=null&&(t=zr(s,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=mm(r,o),h=n.operationForChild(o);h&&(i=i.concat(Sm(h,a,l,c)))}),s&&(i=i.concat(vd(s,n,r,t))),i}function Am(n,e){const t=e.query,r=ro(n,t);return{hashFn:()=>(Jx(e)||xe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?fk(n,t._path,r):hk(n,t._path);{const i=cy(s,t);return ga(n,t,null,i)}}}}function ro(n,e){const t=ja(e);return n.queryToTagMap.get(t)}function ja(n){return n._path.toString()+"$"+n._queryIdentifier}function _d(n,e){return n.tagToQueryMap.get(e)}function bd(n){const e=n.indexOf("$");return Q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ke(n.substr(0,e))}}function wd(n,e,t){const r=n.syncPointTree_.get(e);Q(r,"Missing sync point for query tag that we're tracking");const s=Fa(n.pendingWriteTree_,e);return vd(r,t,s,null)}function vk(n){return n.fold((e,t,r)=>{if(t&&Yr(t))return[qa(t)];{let s=[];return t&&(s=xm(t)),zt(r,(i,o)=>{s=s.concat(o)}),s}})}function ji(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(lk())(n._repo,n._path):n}function gk(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=ja(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function _k(){return ck++}function bk(n,e,t){const r=e._path,s=ro(n,e),i=Am(n,t),o=n.listenProvider_.startListening(ji(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)Q(!Yr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,p)=>{if(!Ae(c)&&h&&Yr(h))return[qa(h).query];{let f=[];return h&&(f=f.concat(xm(h).map(_=>_.query))),zt(p,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(ji(h),ro(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yd(t)}node(){return this.node_}}class xd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pt(this.path_,e);return new xd(this.syncTree_,t)}node(){return gd(this.syncTree_,this.path_)}}const wk=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gh=function(n,e,t){if(!n||typeof n!="object")return n;if(Q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xk(n[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Q(!1,"Unexpected server value: "+n)}},xk=function(n,e,t){n.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&Q(!1,"Unexpected increment value: "+r);const s=e.node();if(Q(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Pm=function(n,e,t,r){return kd(e,new xd(t,n),r)},Rm=function(n,e,t){return kd(n,new yd(e),t)};function kd(n,e,t){const r=n.getPriority().val(),s=gh(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=gh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Nt(a,St(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Nt(s))),o.forEachChild(ut,(a,l)=>{const c=kd(l,e.getImmediateChild(a),t);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Id(n,e){let t=e instanceof Ke?e:new Ke(e),r=n,s=Se(t);for(;s!==null;){const i=Qs(r.node.children,s)||{children:{},childCount:0};r=new Ed(s,r,i),t=at(t),s=Se(t)}return r}function ui(n){return n.node.value}function Nm(n,e){n.node.value=e,rc(n)}function Lm(n){return n.node.childCount>0}function kk(n){return ui(n)===void 0&&!Lm(n)}function Ba(n,e){zt(n.node.children,(t,r)=>{e(new Ed(t,n,r))})}function Dm(n,e,t,r){t&&e(n),Ba(n,s=>{Dm(s,e,!0)})}function Ek(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yo(n){return new Ke(n.parent===null?n.name:yo(n.parent)+"/"+n.name)}function rc(n){n.parent!==null&&Ik(n.parent,n.name,n)}function Ik(n,e,t){const r=kk(t),s=Xn(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,rc(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,rc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=/[\[\].#$\/\u0000-\u001F\u007F]/,Tk=/[\[\].#$\u0000-\u001F\u007F]/,bl=10*1024*1024,Cd=function(n){return typeof n=="string"&&n.length!==0&&!Ck.test(n)},$m=function(n){return typeof n=="string"&&n.length!==0&&!Tk.test(n)},Sk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$m(n)},sc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xc(n)||n&&typeof n=="object"&&Xn(n,".sv")},Cs=function(n,e,t,r){r&&e===void 0||Va(Na(n,"value"),e,t)},Va=function(n,e,t){const r=t instanceof Ke?new By(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+rs(r));if(typeof e=="function")throw new Error(n+"contains a function "+rs(r)+" with contents = "+e.toString());if(Xc(e))throw new Error(n+"contains "+e.toString()+" "+rs(r));if(typeof e=="string"&&e.length>bl/3&&La(e)>bl)throw new Error(n+"contains a string greater than "+bl+" utf8 bytes "+rs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(zt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Cd(o)))throw new Error(n+" contains an invalid key ("+o+") "+rs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vy(r,o),Va(n,a,r),Hy(r)}),s&&i)throw new Error(n+' contains ".value" child '+rs(r)+" in addition to actual children.")}},Ak=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=Xi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Cd(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jy);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&xn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Pk=function(n,e,t,r){const s=Na(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];zt(e,(o,a)=>{const l=new Ke(o);if(Va(s,a,pt(t,l)),rd(l)===".priority"&&!sc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),Ak(s,i)},Td=function(n,e,t,r){if(!$m(t))throw new Error(Na(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rk=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Td(n,e,t)},Om=function(n,e){if(Se(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Nk=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sk(t))throw new Error(Na(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ha(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!sd(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function Mm(n,e,t){Ha(n,t),Um(n,r=>sd(r,e))}function Cn(n,e,t){Ha(n,t),Um(n,r=>xn(r,e)||xn(e,r))}function Um(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(Dk(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dk(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Ui&&Ot("event: "+t.toString()),ci(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="repo_interrupt",Ok=25;class Mk{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ca(),this.transactionQueueTree_=new Ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uk(n,e,t){if(n.stats_=td(n.repoInfo_),n.forceRestClient_||fy())n.server_=new la(n.repoInfo_,(r,s,i,o)=>{_h(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>bh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{At(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new fr(n.repoInfo_,e,(r,s,i,o)=>{_h(n,r,s,i,o)},r=>{bh(n,r)},r=>{zk(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=_y(n.repoInfo_,()=>new wx(n.stats_,n.server_)),n.infoData_=new mx,n.infoSyncTree_=new vh({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=wo(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sd(n,"connected",!1),n.serverSyncTree_=new vh({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Cn(n.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function zm(n){const t=n.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wa(n){return wk({timestamp:zm(n)})}function _h(n,e,t,r,s){n.dataUpdateCount++;const i=new Ke(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=Jo(t,c=>St(c));o=pk(n.serverSyncTree_,i,l,s)}else{const l=St(t);o=Cm(n.serverSyncTree_,i,l,s)}else if(r){const l=Jo(t,c=>St(c));o=uk(n.serverSyncTree_,i,l)}else{const l=St(t);o=wo(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ti(n,i)),Cn(n.eventQueue_,a,o)}function bh(n,e){Sd(n,"connected",e),e===!1&&Bk(n)}function zk(n,e){zt(e,(t,r)=>{Sd(n,t,r)})}function Sd(n,e,t){const r=new Ke("/.info/"+e),s=St(t);n.infoData_.updateSnapshot(r,s);const i=wo(n.infoSyncTree_,r,s);Cn(n.eventQueue_,r,i)}function Ad(n){return n.nextWriteId_++}function Fk(n,e,t){const r=mk(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const i=St(s).withIndex(e._queryParams.getIndex());nc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=wo(n.serverSyncTree_,e._path,i);else{const a=ro(n.serverSyncTree_,e);o=Cm(n.serverSyncTree_,e._path,i,a)}return Cn(n.eventQueue_,e._path,o),ga(n.serverSyncTree_,e,t,null,!0),i},s=>(xo(n,"get for query "+At(e)+" failed: "+s),Promise.reject(new Error(s))))}function qk(n,e,t,r,s){xo(n,"set",{path:e.toString(),value:t,priority:r});const i=Wa(n),o=St(t,r),a=gd(n.serverSyncTree_,e),l=Rm(o,a,i),c=Ad(n),h=Im(n.serverSyncTree_,e,l,c,!0);Ha(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Qt("set at "+e+" failed: "+f);const w=Lr(n.serverSyncTree_,c,!v);Cn(n.eventQueue_,e,w),oc(n,s,f,_)});const p=Rd(n,e);ti(n,p),Cn(n.eventQueue_,p,[])}function jk(n,e,t,r){xo(n,"update",{path:e.toString(),value:t});let s=!0;const i=Wa(n),o={};if(zt(t,(a,l)=>{s=!1,o[a]=Pm(pt(e,a),St(l),n.serverSyncTree_,i)}),s)Ot("update() called with empty data.  Don't do anything."),oc(n,r,"ok",void 0);else{const a=Ad(n),l=dk(n.serverSyncTree_,e,o,a);Ha(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const p=c==="ok";p||Qt("update at "+e+" failed: "+c);const f=Lr(n.serverSyncTree_,a,!p),_=f.length>0?ti(n,e):e;Cn(n.eventQueue_,_,f),oc(n,r,c,h)}),zt(t,c=>{const h=Rd(n,pt(e,c));ti(n,h)}),Cn(n.eventQueue_,e,[])}}function Bk(n){xo(n,"onDisconnectEvents");const e=Wa(n),t=ca();Ql(n.onDisconnect_,Be(),(s,i)=>{const o=Pm(s,i,n.serverSyncTree_,e);dm(t,s,o)});let r=[];Ql(t,Be(),(s,i)=>{r=r.concat(wo(n.serverSyncTree_,s,i));const o=Rd(n,s);ti(n,o)}),n.onDisconnect_=ca(),Cn(n.eventQueue_,Be(),r)}function Vk(n,e,t){let r;Se(e._path)===".info"?r=nc(n.infoSyncTree_,e,t):r=nc(n.serverSyncTree_,e,t),Mm(n.eventQueue_,e._path,r)}function ic(n,e,t){let r;Se(e._path)===".info"?r=ga(n.infoSyncTree_,e,t):r=ga(n.serverSyncTree_,e,t),Mm(n.eventQueue_,e._path,r)}function Hk(n){n.persistentConnection_&&n.persistentConnection_.interrupt($k)}function xo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ot(t,...e)}function oc(n,e,t,r){e&&ci(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Fm(n,e,t){return gd(n.serverSyncTree_,e,t)||xe.EMPTY_NODE}function Pd(n,e=n.transactionQueueTree_){if(e||Ga(n,e),ui(e)){const t=jm(n,e);Q(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Wk(n,yo(e),t)}else Lm(e)&&Ba(e,t=>{Pd(n,t)})}function Wk(n,e,t){const r=t.map(c=>c.currentWriteId),s=Fm(n,e,r);let i=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const p=Yt(e,h.path);i=i.updateChild(p,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,c=>{xo(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const p=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Lr(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&p.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ga(n,Id(n.transactionQueueTree_,e)),Pd(n,n.transactionQueueTree_),Cn(n.eventQueue_,e,h);for(let f=0;f<p.length;f++)ci(p[f])}else{if(c==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Qt("transaction at "+l.toString()+" failed: "+c);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=c}ti(n,e)}},o)}function ti(n,e){const t=qm(n,e),r=yo(t),s=jm(n,t);return Gk(n,s,r),r}function Gk(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Yt(t,l.path);let h=!1,p;if(Q(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,p=l.abortReason,s=s.concat(Lr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ok)h=!0,p="maxretry",s=s.concat(Lr(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Fm(n,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Va("transaction failed: Data returned ",_,l.path);let v=St(_);typeof _=="object"&&_!=null&&Xn(_,".priority")||(v=v.updatePriority(f.getPriority()));const k=l.currentWriteId,I=Wa(n),S=Rm(v,f,I);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=S,l.currentWriteId=Ad(n),o.splice(o.indexOf(k),1),s=s.concat(Im(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Lr(n.serverSyncTree_,k,!0))}else h=!0,p="nodata",s=s.concat(Lr(n.serverSyncTree_,l.currentWriteId,!0))}Cn(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Ga(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ci(r[a]);Pd(n,n.transactionQueueTree_)}function qm(n,e){let t,r=n.transactionQueueTree_;for(t=Se(e);t!==null&&ui(r)===void 0;)r=Id(r,t),e=at(e),t=Se(e);return r}function jm(n,e){const t=[];return Bm(n,e,t),t.sort((r,s)=>r.order-s.order),t}function Bm(n,e,t){const r=ui(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Ba(e,s=>{Bm(n,s,t)})}function Ga(n,e){const t=ui(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,Nm(e,t.length>0?t:void 0)}Ba(e,r=>{Ga(n,r)})}function Rd(n,e){const t=yo(qm(n,e)),r=Id(n.transactionQueueTree_,e);return Ek(r,s=>{wl(n,s)}),wl(n,r),Dm(r,s=>{wl(n,s)}),t}function wl(n,e){const t=ui(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(Q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Lr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Nm(e,void 0):t.length=i+1,Cn(n.eventQueue_,yo(e),s);for(let o=0;o<r.length;o++)ci(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Yk(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qt(`Invalid query segment '${t}' in query '${n}'`)}return e}const wh=function(n,e){const t=Qk(n),r=t.namespace;t.domain==="firebase.com"&&gr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||sy();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Wp(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ke(t.pathString)}},Qk=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(h,p)),h<p&&(s=Kk(n.substring(h,p)));const f=Yk(n.substring(Math.min(n.length,p)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),t=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Jk=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=yh.charAt(t%64),t=Math.floor(t/64);Q(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=yh.charAt(e[s]);return Q(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+At(this.snapshot.exportVal())}}class Hm{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ae(this._path)?null:rd(this._path)}get ref(){return new tr(this._repo,this._path)}get _queryIdentifier(){const e=oh(this._queryParams),t=Zc(e);return t==="{}"?"default":t}get _queryObject(){return oh(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof er))return!1;const t=this._repo===e._repo,r=sd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+qy(this._path)}}function Xk(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ko(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===pr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Wr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==_r)throw new Error(r);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===ut){if(e!=null&&!sc(e)||t!=null&&!sc(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Q(n.getIndex()instanceof ad||n.getIndex()===lm,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ka(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class tr extends er{constructor(e,t){super(e,t,new cd,!1)}get parent(){const e=tm(this._path);return e===null?null:new tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ni{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ke(e),r=ri(this.ref,e);return new ni(this._node.getChild(t),r,ut)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ni(s,ri(this.ref,r),ut)))}hasChild(e){const t=new Ke(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ct(n,e){return n=ht(n),n._checkNotDeleted("ref"),e!==void 0?ri(n._root,e):n._root}function ri(n,e){return n=ht(n),Se(n._path)===null?Rk("child","path",e):Td("child","path",e),new tr(n._repo,pt(n._path,e))}function so(n,e){n=ht(n),Om("push",n._path),Cs("push",e,n._path,!0);const t=zm(n._repo),r=Jk(t),s=ri(n,r),i=ri(n,r);let o;return e!=null?o=Zk(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Zk(n,e){n=ht(n),Om("set",n._path),Cs("set",e,n._path,!1);const t=new uo;return qk(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Eo(n,e){Pk("update",e,n._path);const t=new uo;return jk(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function _a(n){n=ht(n);const e=new Wm(()=>{}),t=new Ya(e);return Fk(n._repo,n,t).then(r=>new ni(r,new tr(n._repo,n._path),n._queryParams.getIndex()))}class Ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new Vm("value",this,new ni(e.snapshotNode,new tr(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hm(this,e,t):null}matches(e){return e instanceof Ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Nd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hm(this,e,t):null}createEvent(e,t){Q(e.childName!=null,"Child events should have a childName.");const r=ri(new tr(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Vm(e.type,this,new ni(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Nd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Gm(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=t,c=(h,p)=>{ic(n._repo,n,a),l(h,p)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Wm(t,i||void 0),a=e==="value"?new Ya(o):new Nd(e,o);return Vk(n._repo,n,a),()=>ic(n._repo,n,a)}function Io(n,e,t,r){return Gm(n,"value",e,t,r)}function eE(n,e,t,r){return Gm(n,"child_added",e,t,r)}function Ld(n,e,t){ic(n._repo,n,null)}class ts{}class Km extends ts{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Cs("endAt",this._value,e._path,!0);const t=Yl(e._queryParams,this._value,this._key);if(Ka(t),ko(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new er(e._repo,e._path,t,e._orderByCalled)}}function yl(n,e){return new Km(n,e)}class tE extends ts{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Cs("endBefore",this._value,e._path,!1);const t=fx(e._queryParams,this._value,this._key);if(Ka(t),ko(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new er(e._repo,e._path,t,e._orderByCalled)}}function xh(n,e){return new tE(n,e)}class Ym extends ts{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Cs("startAt",this._value,e._path,!0);const t=Kl(e._queryParams,this._value,this._key);if(Ka(t),ko(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new er(e._repo,e._path,t,e._orderByCalled)}}function Rs(n=null,e){return new Ym(n,e)}class nE extends ts{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Cs("startAfter",this._value,e._path,!1);const t=hx(e._queryParams,this._value,this._key);if(Ka(t),ko(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new er(e._repo,e._path,t,e._orderByCalled)}}function kh(n,e){return new nE(n,e)}class rE extends ts{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new er(e._repo,e._path,dx(e._queryParams,this._limit),e._orderByCalled)}}function No(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new rE(n)}class sE extends ts{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new er(e._repo,e._path,ux(e._queryParams,this._limit),e._orderByCalled)}}function Lo(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new sE(n)}class iE extends ts{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Xk(e,"orderByChild");const t=new Ke(this._path);if(Ae(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new ad(t),s=px(e._queryParams,r);return ko(s),new er(e._repo,e._path,s,!0)}}function Rn(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Td("orderByChild","path",n),new iE(n)}class oE extends ts{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Cs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Km(this._value,this._key)._apply(new Ym(this._value,this._key)._apply(e))}}function aE(n,e){return new oE(n,e)}function Nn(n,...e){let t=ht(n);for(const r of e)t=r._apply(t);return t}nk(tr);ak(tr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="FIREBASE_DATABASE_EMULATOR_HOST",ac={};let cE=!1;function dE(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Zr(i);n.repoInfo_=new Wp(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function uE(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=wh(i,s),a=o.repoInfo,l;typeof process<"u"&&ju&&(l=ju[lE]),l?(i=`http://${l}?ns=${a.namespace}`,o=wh(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new my(n.name,n.options,e);Nk("Invalid Firebase Database URL",o),Ae(o.path)||gr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=fE(a,n,c,new py(n,t));return new pE(h,n)}function hE(n,e){const t=ac[e];(!t||t[n.key]!==n)&&gr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Hk(n),delete t[n.key]}function fE(n,e,t,r){let s=ac[e.name];s||(s={},ac[e.name]=s);let i=s[n.toURLString()];return i&&gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Mk(n,cE,t,r),s[n.toURLString()]=i,i}class pE{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tr(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gr("Cannot call "+e+" on a deleted database.")}}function mE(n=jc(),e){const t=Da(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Of("database");r&&vE(t,...r)}return t}function vE(n,e,t,r={}){n=ht(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&hs(r,i.repoInfo_.emulatorOptions))return;gr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&gr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new qo(qo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:zf(r.mockUserToken,n.app.options.projectId);o=new qo(a)}Zr(e)&&(Mc(e),Uc("Database",!0)),dE(i,s,r,o)}/**
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
 */function gE(n){Xw(ks),fs(new Hr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return uE(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Kn(Bu,Vu,n),Kn(Bu,Vu,"esm2020")}function Qa(n){return{".sv":{increment:n}}}fr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};fr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gE();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebasestorage.googleapis.com",Jm="storageBucket",_E=120*1e3,bE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends kr{constructor(e,t,r=0){super(xl(e),`Firebase Storage: ${t} (${xl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function xl(n){return"storage/"+n}function Dd(){const n="An unknown error occurred, please check the error payload for server response.";return new bt(vt.UNKNOWN,n)}function wE(n){return new bt(vt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function yE(n){return new bt(vt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new bt(vt.UNAUTHENTICATED,n)}function kE(){return new bt(vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EE(n){return new bt(vt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function IE(){return new bt(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CE(){return new bt(vt.CANCELED,"User canceled the upload/download.")}function TE(n){return new bt(vt.INVALID_URL,"Invalid URL '"+n+"'.")}function SE(n){return new bt(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function AE(){return new bt(vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Jm+"' property when initializing the app?")}function PE(){return new bt(vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function RE(){return new bt(vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NE(n){return new bt(vt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lc(n){return new bt(vt.INVALID_ARGUMENT,n)}function Xm(){return new bt(vt.APP_DELETED,"The Firebase app was deleted.")}function LE(n){return new bt(vt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bi(n,e){return new bt(vt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function xi(n){throw new bt(vt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=fn.makeFromUrl(e,t)}catch{return new fn(e,"")}if(r.path==="")return r;throw SE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=t===Qm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",I=new RegExp(`^https?://${w}/${s}/${k}`,"i"),P=[{regex:a,indices:l,postModify:i},{regex:_,indices:v,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<P.length;N++){const j=P[N],L=j.regex.exec(e);if(L){const C=L[j.indices.bucket];let E=L[j.indices.path];E||(E=""),r=new fn(C,E),j.postModify(r);break}}if(r==null)throw TE(e);return r}}class DE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,n(_,l())},k)}function f(){i&&clearTimeout(i)}function _(k,...I){if(c){f();return}if(k){f(),h.call(null,k,...I);return}if(l()||o){f(),h.call(null,k,...I);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,p(P)}let v=!1;function w(k){v||(v=!0,f(),!c&&(s!==null?(k||(a=2),clearTimeout(s),p(0)):k||(a=1)))}return p(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function OE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){return n!==void 0}function UE(n){return typeof n=="object"&&!Array.isArray(n)}function $d(n){return typeof n=="string"||n instanceof String}function Eh(n){return Od()&&n instanceof Blob}function Od(){return typeof Blob<"u"}function Ih(n,e,t,r){if(r<e)throw lc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw lc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Zm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var cs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(cs||(cs={}));/**
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
 */function zE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,r,s,i,o,a,l,c,h,p,f=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=f,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,w)=>{this.resolve_=v,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Do(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===cs.NO_ERROR,l=i.getStatus();if(!a||zE(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===cs.ABORT;r(!1,new Do(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Do(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ME(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Dd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Xm():CE();o(l)}else{const l=IE();o(l)}};this.canceled_?t(!1,new Do(!1,null,!0)):this.backoffId_=$E(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Do{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function jE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function VE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function HE(n,e,t,r,s,i,o=!0,a=!1){const l=Zm(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return BE(h,e),qE(h,t),jE(h,i),VE(h,r),new FE(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GE(...n){const e=WE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Od())return new Blob(n);throw new bt(vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function YE(n){if(typeof atob>"u")throw NE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kl{constructor(e,t){this.data=e,this.contentType=t||null}}function QE(n,e){switch(n){case Wn.RAW:return new kl(ev(e));case Wn.BASE64:case Wn.BASE64URL:return new kl(tv(n,e));case Wn.DATA_URL:return new kl(XE(e),ZE(e))}throw Dd()}function ev(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JE(n){let e;try{e=decodeURIComponent(n)}catch{throw Bi(Wn.DATA_URL,"Malformed data URL.")}return ev(e)}function tv(n,e){switch(n){case Wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Bi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Bi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=YE(e)}catch(s){throw s.message.includes("polyfill")?s:Bi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class nv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Bi(Wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=eI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XE(n){const e=new nv(n);return e.base64?tv(Wn.BASE64,e.rest):JE(e.rest)}function ZE(n){return new nv(n).contentType}function eI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){let r=0,s="";Eh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Eh(this.data_)){const r=this.data_,s=KE(r,e,t);return s===null?null:new Rr(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Rr(r,!0)}}static getBlob(...e){if(Od()){const t=e.map(r=>r instanceof Rr?r.data_:r);return new Rr(GE.apply(null,t))}else{const t=e.map(o=>$d(o)?QE(Wn.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Rr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){let e;try{e=JSON.parse(n)}catch{return null}return UE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function nI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function sv(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n,e){return e}class Gt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||rI}}let $o=null;function sI(n){return!$d(n)||n.length<2?n:sv(n)}function iv(){if($o)return $o;const n=[];n.push(new Gt("bucket")),n.push(new Gt("generation")),n.push(new Gt("metageneration")),n.push(new Gt("name","fullPath",!0));function e(i,o){return sI(o)}const t=new Gt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Gt("size");return s.xform=r,n.push(s),n.push(new Gt("timeCreated")),n.push(new Gt("updated")),n.push(new Gt("md5Hash",null,!0)),n.push(new Gt("cacheControl",null,!0)),n.push(new Gt("contentDisposition",null,!0)),n.push(new Gt("contentEncoding",null,!0)),n.push(new Gt("contentLanguage",null,!0)),n.push(new Gt("contentType",null,!0)),n.push(new Gt("metadata","customMetadata",!0)),$o=n,$o}function iI(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new fn(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function oI(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return iI(r,n),r}function ov(n,e,t){const r=rv(e);return r===null?null:oI(n,r,t)}function aI(n,e,t,r){const s=rv(e);if(s===null||!$d(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,p=n.fullPath,f="/b/"+o(h)+"/o/"+o(p),_=Md(f,t,r),v=Zm({alt:"media",token:c});return _+v})[0]}function lI(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class av{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){if(!n)throw Dd()}function cI(n,e){function t(r,s){const i=ov(n,s,e);return lv(i!==null),i}return t}function dI(n,e){function t(r,s){const i=ov(n,s,e);return lv(i!==null),aI(i,s,n.host,n._protocol)}return t}function cv(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=kE():s=xE():t.getStatus()===402?s=yE(n.bucket):t.getStatus()===403?s=EE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function uI(n){const e=cv(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=wE(n.path)),i.serverResponse=s.serverResponse,i}return t}function hI(n,e,t){const r=e.fullServerUrl(),s=Md(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new av(s,i,dI(n,t),o);return a.errorHandler=uI(e),a}function fI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function pI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=fI(null,e)),r}function mI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let N=0;N<2;N++)P=P+Math.random().toString().slice(2);return P}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=pI(e,r,s),h=lI(c,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",_=Rr.getBlob(p,r,f);if(_===null)throw PE();const v={name:c.fullPath},w=Md(i,n.host,n._protocol),k="POST",I=n.maxUploadRetryTime,S=new av(w,k,cI(n,t),I);return S.urlParams=v,S.headers=o,S.body=_.uploadData(),S.errorHandler=cv(e),S}class vI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw xi("cannot .send() more than once");if(Zr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gI extends vI{initXhr(){this.xhr_.responseType="text"}}function dv(){return new gI}/**
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
 */class _s{constructor(e,t){this._service=e,t instanceof fn?this._location=t:this._location=fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _s(e,t)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sv(this._location.path)}get storage(){return this._service}get parent(){const e=tI(this._location.path);if(e===null)return null;const t=new fn(this._location.bucket,e);return new _s(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LE(e)}}function _I(n,e,t){n._throwIfRoot("uploadBytes");const r=mI(n.storage,n._location,iv(),new Rr(e,!0),t);return n.storage.makeRequestWithTokens(r,dv).then(s=>({metadata:s,ref:n}))}function bI(n){n._throwIfRoot("getDownloadURL");const e=hI(n.storage,n._location,iv());return n.storage.makeRequestWithTokens(e,dv).then(t=>{if(t===null)throw RE();return t})}function wI(n,e){const t=nI(n._location.path,e),r=new fn(n._location.bucket,t);return new _s(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){return/^[A-Za-z]+:\/\//.test(n)}function xI(n,e){return new _s(n,e)}function uv(n,e){if(n instanceof Ud){const t=n;if(t._bucket==null)throw AE();const r=new _s(t,t._bucket);return e!=null?uv(r,e):r}else return e!==void 0?wI(n,e):n}function kI(n,e){if(e&&yI(e)){if(n instanceof Ud)return xI(n,e);throw lc("To use ref(service, url), the first argument must be a Storage instance.")}else return uv(n,e)}function Ch(n,e){const t=e?.[Jm];return t==null?null:fn.makeFromBucketSpec(t,n)}function EI(n,e,t,r={}){n.host=`${e}:${t}`;const s=Zr(e);s&&(Mc(`https://${n.host}/b`),Uc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:zf(i,n.app.options.projectId))}class Ud{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Qm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_E,this._maxUploadRetryTime=bE,this._requests=new Set,s!=null?this._bucket=fn.makeFromBucketSpec(s,this._host):this._bucket=Ch(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=Ch(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ih("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ih("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DE(Xm());{const o=HE(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Th="@firebase/storage",Sh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="storage";function II(n,e,t){return n=ht(n),_I(n,e,t)}function CI(n){return n=ht(n),bI(n)}function TI(n,e){return n=ht(n),kI(n,e)}function SI(n=jc(),e){n=ht(n);const r=Da(n,hv).getImmediate({identifier:e}),s=Of("storage");return s&&AI(r,...s),r}function AI(n,e,t,r={}){EI(n,e,t,r)}function PI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Ud(t,r,s,e,ks)}function RI(){fs(new Hr(hv,PI,"PUBLIC").setMultipleInstances(!0)),Kn(Th,Sh,""),Kn(Th,Sh,"esm2020")}RI();const fv={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",fv);const zd=Vf(fv),br=Qw(zd),yt=mE(zd),NI=SI(zd);var LI=A('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),DI=A('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),$I=A('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),OI=A('<h3 class="post-title svelte-1t1odzy"> </h3>'),MI=A('<p class="post-text svelte-1t1odzy"> </p>'),UI=A('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),zI=A('<div class="posts svelte-1t1odzy"></div>'),FI=A('<div class="post-list-container svelte-1t1odzy"><!></div>');const qI={hash:"svelte-1t1odzy",code:`
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
  }`};function jI(n,e){Ye(e,!0),Je(n,qI);let t=Ve(e,"path",7,"posts"),r=Ve(e,"limit",7,"10"),s=ae(Bt([])),i=ae(!0),o=ae(""),a=null;Rt(()=>{l()}),Pf(()=>{c()});function l(){try{a=Ct(yt,t()),Io(a,S=>{const P=S.val();P?y(s,Object.entries(P).map(([N,j])=>({id:N,...j})).sort((N,j)=>(j.timestamp||0)-(N.timestamp||0)).slice(0,parseInt(r())),!0):y(s,[],!0),y(i,!1),y(o,"")},S=>{console.error("데이터 읽기 오류:",S),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(i,!1)})}catch(S){console.error("구독 설정 오류:",S),y(o,"데이터베이스 연결에 실패했습니다."),y(i,!1)}}function c(){a&&Ld(a)}function h(S){const P=new CustomEvent("post-click",{detail:{post:S},bubbles:!0,composed:!0});dispatchEvent(P)}function p(S,P){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),h(P))}function f(S){if(!S)return"";const P=typeof S=="string"?Number(S):S,N=new Date(P),L=new Date().getTime()-N.getTime(),C=Math.floor(L/6e4),E=Math.floor(L/36e5),T=Math.floor(L/864e5);return C<1?"방금 전":C<60?`${C}분 전`:E<24?`${E}시간 전`:T<7?`${T}일 전`:N.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var _={get path(){return t()},set path(S="posts"){t(S),je()},get limit(){return r()},set limit(S="10"){r(S),je()}},v=FI(),w=u(v);{var k=S=>{var P=LI();x(S,P)},I=S=>{var P=be(),N=pe(P);{var j=C=>{var E=DI(),T=u(E),D=u(T,!0);d(T),d(E),F(()=>b(D,m(o))),x(C,E)},L=C=>{var E=be(),T=pe(E);{var D=B=>{var J=$I();x(B,J)},$=B=>{var J=zI();Mt(J,21,()=>m(s),te=>te.id,(te,K)=>{var le=UI();le.__click=()=>h(m(K)),le.__keydown=re=>p(re,m(K));var me=u(le),G=u(me),Y=u(G),M=u(Y,!0);d(Y);var H=g(Y,2),ne=u(H,!0);d(H),d(G),d(me);var de=g(me,2),R=u(de);{var z=re=>{var fe=OI(),ue=u(fe,!0);d(fe),F(()=>b(ue,m(K).title)),x(re,fe)};Z(R,re=>{m(K).title&&re(z)})}var W=g(R,2);{var q=re=>{var fe=MI(),ue=u(fe,!0);d(fe),F(()=>b(ue,m(K).content)),x(re,fe)};Z(W,re=>{m(K).content&&re(q)})}d(de);var ee=g(de,2),U=u(ee),V=u(U);d(U);var X=g(U,2),we=u(X);d(X),d(ee),d(le),F(re=>{Ee(le,"aria-label",`게시물: ${(m(K).title||m(K).content||"제목 없음")??""}`),b(M,m(K).author||"익명"),b(ne,re),b(V,`👍 ${(m(K).likes||0)??""}`),b(we,`💬 ${(m(K).comments?.length||0)??""}`)},[()=>f(m(K).timestamp)]),x(te,le)}),d(J),x(B,J)};Z(T,B=>{m(s).length===0?B(D):B($,!1)},!0)}x(C,E)};Z(N,C=>{m(o)?C(j):C(L,!1)},!0)}x(S,P)};Z(w,S=>{m(i)?S(k):S(I,!1)})}return d(v),x(n,v),Qe(_)}ct(["click","keydown"]);customElements.define("post-list",ve(jI,{path:{},limit:{}},[],[],!0));Lg();/**
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
 */const BI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var VI=f_("<svg><!><!></svg>");function ft(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]),r=lt(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ye(e,!1);let s=Ve(e,"name",12,void 0),i=Ve(e,"color",12,"currentColor"),o=Ve(e,"size",12,24),a=Ve(e,"strokeWidth",12,2),l=Ve(e,"absoluteStrokeWidth",12,!1),c=Ve(e,"iconNode",28,()=>[]);const h=(...w)=>w.filter((k,I,S)=>!!k&&S.indexOf(k)===I).join(" ");var p={get name(){return s()},set name(w){s(w),je()},get color(){return i()},set color(w){i(w),je()},get size(){return o()},set size(w){o(w),je()},get strokeWidth(){return a()},set strokeWidth(w){a(w),je()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),je()},get iconNode(){return c()},set iconNode(w){c(w),je()}};ln();var f=VI();iu(f,(w,k)=>({...BI,...r,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>(Ns(l()),Ns(a()),Ns(o()),Qn(()=>l()?Number(a())*24/Number(o()):a())),()=>(Ns(s()),Ns(t),Qn(()=>h("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var _=u(f);Mt(_,1,c,ir,(w,k)=>{var I=Ws(()=>sg(m(k),2));let S=()=>m(I)[0],P=()=>m(I)[1];var N=be(),j=pe(N);b_(j,S,!0,(L,C)=>{iu(L,()=>({...P()}))}),x(w,N)});var v=g(_);return dt(v,e,"default",{}),d(f),x(n,f),Qe(p)}ve(ft,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function pv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];ft(n,_t({name:"book-open"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(pv,{},["default"],[],!0);function mv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ft(n,_t({name:"camera"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(mv,{},["default"],[],!0);function cc(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ft(n,_t({name:"check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(cc,{},["default"],[],!0);function Fd(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ft(n,_t({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Fd,{},["default"],[],!0);function dc(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ft(n,_t({name:"circle-check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(dc,{},["default"],[],!0);function uc(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ft(n,_t({name:"circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(uc,{},["default"],[],!0);function hc(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ft(n,_t({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(hc,{},["default"],[],!0);function qd(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ft(n,_t({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(qd,{},["default"],[],!0);function vv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];ft(n,_t({name:"house"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(vv,{},["default"],[],!0);function Ti(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];ft(n,_t({name:"layout-grid"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Ti,{},["default"],[],!0);function gv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ft(n,_t({name:"log-in"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(gv,{},["default"],[],!0);function _v(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];ft(n,_t({name:"log-out"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(_v,{},["default"],[],!0);function Si(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ft(n,_t({name:"menu"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Si,{},["default"],[],!0);function Dr(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ft(n,_t({name:"message-circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Dr,{},["default"],[],!0);function bv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];ft(n,_t({name:"phone"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(bv,{},["default"],[],!0);function wv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];ft(n,_t({name:"send"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(wv,{},["default"],[],!0);function yv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ft(n,_t({name:"server"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(yv,{},["default"],[],!0);function xv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ft(n,_t({name:"settings"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(xv,{},["default"],[],!0);function kv(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ft(n,_t({name:"trending-up"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(kv,{},["default"],[],!0);function Fr(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ft(n,_t({name:"user"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Fr,{},["default"],[],!0);function io(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ft(n,_t({name:"users"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(io,{},["default"],[],!0);function Ev(n,e){const t=lt(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ft(n,_t({name:"x"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=be(),a=pe(o);dt(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}ve(Ev,{},["default"],[],!0);var HI=A("<option> </option>"),WI=A('<div class="error-message svelte-1e01td3"> </div>'),GI=A('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),KI=A("<!> 인증 코드 전송",1),YI=A('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),QI=A('<div class="error-message svelte-1e01td3"> </div>'),JI=A('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),XI=A("<!> 로그인",1),ZI=A('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),eC=A('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const tC={hash:"svelte-1e01td3",code:`\r
  /* 전체 컨테이너 */.phone-login.svelte-1e01td3 {width:100%;max-width:28rem; /* max-w-md */margin:0 auto;}\r
\r
  /* 로그인 카드 */.login-card.svelte-1e01td3 {background-color:#ffffff; /* bg-white */border-radius:0.5rem; /* rounded-lg */box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),\r
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */padding:2rem; /* p-8 */border:1px solid #e5e7eb; /* border-gray-200 */}\r
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
    to {\r
      transform: rotate(360deg);\r
    }\r
  }\r
\r
  /* 버튼 그룹 */.button-group.svelte-1e01td3 {display:flex;gap:0.75rem;margin-bottom:1rem;}.button-group.svelte-1e01td3 .btn:where(.svelte-1e01td3) {width:auto;flex:1;}\r
\r
  /* 재전송 힌트 */.resend-hint.svelte-1e01td3 {text-align:center;font-size:0.875rem; /* text-sm */color:#6b7280; /* text-gray-500 */}.link-button.svelte-1e01td3 {background:none;border:none;color:#3b82f6; /* text-blue-500 */font-weight:500; /* font-medium */cursor:pointer;text-decoration:underline;padding:0;}.link-button.svelte-1e01td3:hover {color:#2563eb; /* hover:text-blue-600 */}\r
\r
  /* 반응형 */\r
  @media (max-width: 640px) {.login-card.svelte-1e01td3 {padding:1.5rem; /* p-6 */}.step-title.svelte-1e01td3 {font-size:1.25rem; /* text-xl */}\r
  }`};function nC(n,e){Ye(e,!0),Je(n,tC);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=ae("+82"),s=ae(""),i=ae(""),o=ae("phone"),a=ae(!1),l=ae(""),c=ae(null),h=ae(null),p=ae(void 0),f=ae(null);function _(){return new Promise((E,T)=>{try{if(!m(f)){const D=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(D),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(D);return}if(m(c)){if(m(p)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(m(p)),console.log("reCAPTCHA reset completed"),E(m(p));return}catch(D){console.warn("Failed to reset reCAPTCHA:",D)}try{m(c).clear(),y(c,null),y(p,void 0)}catch(D){console.warn("Failed to clear reCAPTCHA:",D)}}y(c,new Q0(br,m(f).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&m(p)!==void 0?window.grecaptcha.reset(m(p)):_()}}),!0),m(c).render().then(D=>{y(p,D,!0),console.log("reCAPTCHA rendered with widgetId:",D),E(D)}).catch(D=>{console.error("Failed to render reCAPTCHA:",D),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(D)})}catch(D){console.error("reCAPTCHA 초기화 실패:",D),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(D)}})}Rt(()=>{const E=document.createElement("div");return E.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),E.className="recaptcha-container-light-dom",E.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(E),y(f,E,!0),_(),()=>{E&&E.parentNode&&E.parentNode.removeChild(E)}});function v(E){return/^[0-9]{6,15}$/.test(E)}async function w(){if(y(l,""),!v(m(s))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const E=`${m(r)}${m(s)}`;console.log("Sending verification code to:",E),y(h,await Z0(br,E,m(c)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(E){console.error("SMS 전송 실패:",E),E.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):E.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${E.message}`)}finally{y(a,!1)}}async function k(){if(y(l,""),m(i).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const E=await m(h).confirm(m(i));console.log("Login successful:",E.user);const T=new CustomEvent("login-success",{detail:{user:E.user,phoneNumber:E.user.phoneNumber}});dispatchEvent(T),y(s,""),y(i,""),y(o,"phone")}catch(E){console.error("인증 코드 확인 실패:",E),E.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):E.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${E.message}`);const T=new CustomEvent("login-error",{detail:{error:E.message}});dispatchEvent(T)}finally{y(a,!1)}}function I(){y(o,"phone"),y(i,""),y(l,"")}var S=eC(),P=u(S),N=u(P);{var j=E=>{var T=YI(),D=u(T),$=u(D);bv($,{class:"icon-large"}),yn(4),d(D);var B=g(D,2),J=g(u(B),2);Mt(J,21,()=>t,ir,(z,W)=>{var q=HI(),ee=u(q);d(q);var U={};F(()=>{b(ee,`${m(W).flag??""}
                ${m(W).name??""} (${m(W).code??""})`),U!==(U=m(W).code)&&(q.value=(q.__value=m(W).code)??"")}),x(z,q)}),d(J),d(B);var te=g(B,2),K=g(u(te),2),le=u(K),me=u(le,!0);d(le);var G=g(le,2);Ys(G),d(K),yn(2),d(te);var Y=g(te,2);{var M=z=>{var W=WI(),q=u(W,!0);d(W),F(()=>b(q,m(l))),x(z,W)};Z(Y,z=>{m(l)&&z(M)})}var H=g(Y,2);H.__click=w;var ne=u(H);{var de=z=>{var W=GI();yn(),x(z,W)},R=z=>{var W=KI(),q=pe(W);wv(q,{class:"btn-icon"}),yn(),x(z,W)};Z(ne,z=>{m(a)?z(de):z(R,!1)})}d(H),d(T),F(()=>{J.disabled=m(a),b(me,m(r)),G.disabled=m(a),H.disabled=m(a)||!m(s)}),Nc(J,()=>m(r),z=>y(r,z)),us("keypress",G,z=>{z.key==="Enter"&&(z.preventDefault(),w())}),Vr(G,()=>m(s),z=>y(s,z)),x(E,T)},L=E=>{var T=be(),D=pe(T);{var $=B=>{var J=ZI(),te=u(J),K=u(te);cc(K,{class:"icon-large"});var le=g(K,4),me=u(le);yn(2),d(le),d(te);var G=g(te,2),Y=g(u(G),2);Ys(Y),yn(2),d(G);var M=g(G,2);{var H=V=>{var X=QI(),we=u(X,!0);d(X),F(()=>b(we,m(l))),x(V,X)};Z(M,V=>{m(l)&&V(H)})}var ne=g(M,2),de=u(ne);de.__click=I;var R=g(de,2);R.__click=k;var z=u(R);{var W=V=>{var X=JI();yn(),x(V,X)},q=V=>{var X=XI(),we=pe(X);cc(we,{class:"btn-icon"}),yn(),x(V,X)};Z(z,V=>{m(a)?V(W):V(q,!1)})}d(R),d(ne);var ee=g(ne,2),U=g(u(ee));U.__click=I,d(ee),d(J),F(()=>{b(me,`${m(r)??""}${m(s)??""}로 전송된`),Y.disabled=m(a),de.disabled=m(a),R.disabled=m(a)||m(i).length!==6}),us("keypress",Y,V=>{V.key==="Enter"&&(V.preventDefault(),k())}),Vr(Y,()=>m(i),V=>y(i,V)),x(B,J)};Z(D,B=>{m(o)==="code"&&B($)},!0)}x(E,T)};Z(N,E=>{m(o)==="phone"?E(j):E(L,!1)})}var C=g(N,2);Lc(C,E=>y(f,E),()=>m(f)),d(P),d(S),x(n,S),Qe()}ct(["click"]);customElements.define("phone-login",ve(nC,{},[],[],!0));const Ja=ys(null),rC=ys(!0);xp(br,n=>{Ja.set(n),rC.set(!1)});async function sC(){try{return await A0(br),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}class ss{static#t=null;#e=ae(!0);get loading(){return m(this.#e)}set loading(e){y(this.#e,e,!0)}#r=ae(!1);get isAuthenticated(){return m(this.#r)}set isAuthenticated(e){y(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=ae(null);get data(){return m(this.#s)}set data(e){y(this.#s,e,!0)}#l=ae(null);get error(){return m(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return ss.#t||(ss.#t=new ss),ss.#t}#a(){try{if(!br)throw new Error("Auth instance not available");this.#i=xp(br,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const t=Ct(yt,`users/${e.uid}`);this.#n=Io(t,async r=>{this.data=r.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),e.photoUrl!==void 0&&(t.photoURL=e.photoUrl),Object.keys(t).length>0&&await yp(this.#o,t);const r={...e},s=Ct(yt,`users/${this.uid}`);await Eo(s,r)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),ss.#t=null}}const ke=ss.getInstance(),iC="GitHub",oC={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:iC,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled."},aC={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"실시간 데이터베이스로서 선택","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 - AI 시대의 소셜 네트워크","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다."},lC="GitHub",cC={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:lC,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},dC="GitHub",uC={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:dC,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"},El={en:oC,ko:aC,ja:cC,zh:uC};function fc(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Iv(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=fc(e);if(t!=="en")return t}return"en"}function hC(n){let e=fc(n)||Iv();function t(i){e=fc(i)}function r(){return e}function s(i,o={}){return((El[e]??El.en)[i]??El.en[i]??i).replace(/\{(\w+)\}/g,(c,h)=>o[h]??"")}return{t:s,setLocale:t,getLocale:r}}const jd="sns-web-locale",Cv=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function fC(){if(typeof localStorage>"u")return null;const n=localStorage.getItem(jd);if(!n)return null;const e=Cv.find(t=>t.code===n);return e?e.code:null}const Tv=fC()??Iv(),ba=hC(Tv);typeof localStorage<"u"&&localStorage.setItem(jd,ba.getLocale());const Bd=ys(Tv);function pC(n){ba.setLocale(n);const e=ba.getLocale();Bd.set(e),typeof localStorage<"u"&&localStorage.setItem(jd,e)}const xt=S_(Bd,n=>(e,t={})=>ba.t(e,t)),Sv=ys("");function _n(n){Sv.set(n)}var mC=A('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),vC=A('<img alt="프로필" class="avatar-image svelte-38psow"/>'),gC=A('<div class="avatar-fallback svelte-38psow"> </div>'),_C=A('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),bC=A('<img class="avatar-image svelte-38psow"/>'),wC=A('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),yC=A('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),xC=A('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>',1),kC=A('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const EC={hash:"svelte-38psow",code:`\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function IC(n,e){Ye(e,!0),Je(n,EC);const t=()=>We(Sv,"$pageTitle",i),r=()=>We(Ja,"$user",i),s=()=>We(xt,"$t",i),[i,o]=gt();let a=ae(!1);async function l(){if((await sC()).success){const L=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(L)}y(a,!1)}function c(){return ke.data?.displayName?ke.data.displayName.charAt(0).toUpperCase():ke.email?ke.email.charAt(0).toUpperCase():"U"}function h(){y(a,!m(a))}function p(j){const L=document.querySelector(".dropdown-menu"),C=document.querySelector(".dropdown-trigger"),E=j.target;L&&!L.contains(E)&&!C?.contains(E)&&y(a,!1)}Rt(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}));var f=kC(),_=u(f),v=u(_),w=g(u(v),2);{var k=j=>{var L=mC(),C=u(L),E=u(C,!0);d(C),d(L),F(()=>b(E,t())),x(j,L)};Z(w,j=>{t()&&j(k)})}d(v);var I=g(v,2),S=u(I);{var P=j=>{var L=yC(),C=pe(L),E=u(C),T=u(E);Ti(T,{size:16});var D=g(T,2),$=u(D,!0);d(D),d(E);var B=g(E,2),J=u(B);Dr(J,{size:16});var te=g(J,2),K=u(te,!0);d(te),d(B);var le=g(B,2),me=u(le);io(me,{size:16});var G=g(me,2),Y=u(G,!0);d(G),d(le);var M=g(le,2),H=u(M);H.__click=h;var ne=u(H),de=u(ne);{var R=ge=>{var O=vC();F(()=>Ee(O,"src",ke.data.photoUrl)),x(ge,O)},z=ge=>{var O=gC(),he=u(O,!0);d(O),F(_e=>b(he,_e),[c]),x(ge,O)};Z(de,ge=>{ke.data?.photoUrl?ge(R):ge(z,!1)})}d(ne);var W=g(ne,2),q=u(W,!0);d(W),d(H);var ee=g(H,2);{var U=ge=>{var O=_C(),he=u(O),_e=u(he,!0);d(he);var Ce=g(he,4),Oe=u(Ce);Fr(Oe,{size:16});var tt=g(Oe,2),it=u(tt,!0);d(tt),d(Ce);var nt=g(Ce,4);nt.__click=l;var Me=u(nt);_v(Me,{size:16});var Tt=g(Me,2),kt=u(Tt,!0);d(Tt),d(nt),d(O),F((Xt,oe,ie)=>{b(_e,Xt),b(it,oe),b(kt,ie)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),x(ge,O)};Z(ee,ge=>{m(a)&&ge(U)})}d(M);var V=g(M,2),X=u(V);Si(X,{size:24}),d(V),d(C);var we=g(C,2),re=u(we),fe=u(re);Ti(fe,{size:20}),d(re);var ue=g(re,2),Re=u(ue);io(Re,{size:20}),d(ue);var $e=g(ue,2),Ge=u($e);Dr(Ge,{size:20}),d($e);var ze=g($e,2),Fe=u(ze),qe=u(Fe);{var De=ge=>{var O=bC();F(he=>{Ee(O,"src",ke.data.photoUrl),Ee(O,"alt",he)},[()=>s()("프로필")]),x(ge,O)},et=ge=>{var O=wC(),he=u(O,!0);d(O),F(_e=>b(he,_e),[c]),x(ge,O)};Z(qe,ge=>{ke.data?.photoUrl?ge(De):ge(et,!1)})}d(Fe),d(ze);var st=g(ze,2),He=u(st);Si(He,{size:24}),d(st),d(we),F((ge,O,he,_e,Ce,Oe,tt,it,nt)=>{b($,ge),b(K,O),b(Y,he),b(q,ke.data?.displayName||ke.email),Ee(V,"title",_e),Ee(re,"title",Ce),Ee(ue,"title",Oe),Ee($e,"title",tt),Ee(ze,"title",it),Ee(st,"title",nt)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),x(j,L)},N=j=>{var L=xC(),C=pe(L),E=u(C),T=u(E);Ti(T,{size:16});var D=g(T,2),$=u(D,!0);d(D),d(E);var B=g(E,2),J=u(B);Dr(J,{size:16});var te=g(J,2),K=u(te,!0);d(te),d(B);var le=g(B,2),me=u(le,!0);d(le);var G=g(le,2),Y=u(G);Si(Y,{size:20}),d(G),d(C);var M=g(C,2),H=u(M),ne=u(H);Ti(ne,{size:20}),d(H);var de=g(H,2),R=u(de);Dr(R,{size:20}),d(de);var z=g(de,2),W=u(z);Fr(W,{size:20}),d(z);var q=g(z,2),ee=u(q);Si(ee,{size:24}),d(q),d(M),F((U,V,X,we,re,fe,ue,Re)=>{b($,U),b(K,V),b(me,X),Ee(G,"title",we),Ee(H,"title",re),Ee(de,"title",fe),Ee(z,"title",ue),Ee(q,"title",Re)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),x(j,L)};Z(S,j=>{r()?j(P):j(N,!1)})}d(I),d(_),d(f),x(n,f),Qe(),o()}ct(["click"]);customElements.define("sns-topbar",ve(IC,{},[],[],!0));var CC=A('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'),TC=A('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>',1),SC=A("<option> </option>"),AC=A('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const PC={hash:"svelte-najsij",code:`
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
  }`};function RC(n,e){Ye(e,!1),Je(n,PC);const t=()=>We(xt,"$t",i),r=()=>We(Ja,"$user",i),s=()=>We(Bd,"$locale",i),[i,o]=gt(),a=Cv;ln();var l=AC(),c=u(l),h=u(c),p=u(h,!0);d(h);var f=g(h,2),_=u(f),v=u(_);vv(v,{size:20});var w=g(v,2),k=u(w,!0);d(w),d(_);var I=g(_,2),S=u(I);Dr(S,{size:20});var P=g(S,2),N=u(P,!0);d(P),d(I);var j=g(I,2),L=u(j);io(L,{size:20});var C=g(L,2),E=u(C,!0);d(C),d(j);var T=g(j,2),D=u(T);Fr(D,{size:20});var $=g(D,2),B=u($,!0);d($),d(T);var J=g(T,2),te=u(J);qd(te,{size:20});var K=g(te,2),le=u(K,!0);d(K),d(J),d(f);var me=g(f,4),G=u(me),Y=u(G,!0);d(G);var M=g(G,2),H=u(M);{var ne=oe=>{var ie=CC(),se=u(ie);Fr(se,{size:16});var Te=g(se,2),Ue=u(Te,!0);d(Te),d(ie),F(rt=>b(Ue,rt),[()=>t()("회원정보수정")]),x(oe,ie)},de=oe=>{var ie=TC(),se=pe(ie),Te=u(se);gv(Te,{size:16});var Ue=g(Te,2),rt=u(Ue,!0);d(Ue),d(se);var wt=g(se,2),Dt=u(wt);Fr(Dt,{size:16});var dn=g(Dt,2),Tn=u(dn,!0);d(dn),d(wt),F((bn,Zt)=>{b(rt,bn),b(Tn,Zt)},[()=>t()("로그인"),()=>t()("회원가입")]),x(oe,ie)};Z(H,oe=>{r()?oe(ne):oe(de,!1)})}d(M),d(me);var R=g(me,4),z=u(R),W=u(z);io(W,{size:16});var q=g(W,2),ee=u(q,!0);d(q),d(z);var U=g(z,2),V=g(u(U),2),X=u(V,!0);d(V);var we=g(V,2);hc(we,{size:12,class:"external-icon"}),d(U);var re=g(U,2),fe=u(re);Dr(fe,{size:16});var ue=g(fe,2),Re=u(ue,!0);d(ue);var $e=g(ue,2);hc($e,{size:12,class:"external-icon"}),d(re);var Ge=g(re,2),ze=u(Ge);pv(ze,{size:16});var Fe=g(ze,2),qe=u(Fe,!0);d(Fe),d(Ge),d(R);var De=g(R,2),et=u(De),st=u(et,!0);d(et);var He=g(et,2),ge=u(He),O=g(ge,2);Mt(O,5,()=>a,ir,(oe,ie)=>{var se=SC(),Te=u(se,!0);d(se);var Ue={};F(()=>{b(Te,m(ie).label),Ue!==(Ue=m(ie).code)&&(se.value=(se.__value=m(ie).code)??"")}),x(oe,se)}),d(O);var he;Rc(O),d(He),d(De);var _e=g(De,2),Ce=u(_e),Oe=u(Ce),tt=u(Oe,!0);d(Oe);var it=g(Oe,2),nt=u(it,!0);d(it),d(Ce),d(_e);var Me=g(_e,2),Tt=u(Me),kt=u(Tt,!0),Xt=g(kt,2);d(Tt),d(Me),d(c),d(l),F((oe,ie,se,Te,Ue,rt,wt,Dt,dn,Tn,bn,Zt,en,Sn,An,nr,Er)=>{b(p,oe),b(k,ie),b(N,se),b(E,Te),b(B,Ue),b(le,rt),b(Y,wt),b(ee,Dt),b(X,dn),b(Re,Tn),b(qe,bn),b(st,Zt),Ee(ge,"aria-label",en),he!==(he=s())&&(O.value=(O.__value=s())??"",Gi(O,s())),b(tt,Sn),b(nt,An),b(kt,nr),b(Xt,` ${Er??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),us("change",O,oe=>pC(oe.currentTarget.value)),x(n,l),Qe(),o()}customElements.define("sns-left-sidebar",ve(RC,{},[],[],!0));var NC=A('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const LC={hash:"svelte-3epon2",code:`\r
  /* 사이드바 */.sidebar.svelte-3epon2 {width:16rem;border-left:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}\r
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
  }`};function DC(n,e){Ye(e,!0),Je(n,LC);const t=()=>We(xt,"$t",r),[r,s]=gt();let i=ae(Bt({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=NC(),a=u(o),l=u(a),c=u(l,!0);d(l);var h=g(l,2),p=u(h),f=u(p),_=u(f);Fr(_,{size:20}),d(f);var v=g(f,2),w=u(v),k=u(w,!0);d(w);var I=g(w,2),S=u(I,!0);d(I),d(v),d(p);var P=g(p,2),N=u(P),j=u(N);kv(j,{size:20}),d(N);var L=g(N,2),C=u(L),E=u(C,!0);d(C);var T=g(C,2),D=u(T,!0);d(T),d(L),d(P);var $=g(P,2),B=u($),J=u(B);qd(J,{size:20}),d(B);var te=g(B,2),K=u(te),le=u(K,!0);d(K);var me=g(K,2),G=u(me,!0);d(me);var Y=g(me,2),M=u(Y,!0);d(Y),d(te),d($);var H=g($,2),ne=u(H),de=u(ne);Dr(de,{size:20}),d(ne);var R=g(ne,2),z=u(R),W=u(z,!0);d(z);var q=g(z,2),ee=u(q,!0);d(q),d(R),d(H),d(h);var U=g(h,2),V=u(U,!0);d(U),d(a),d(o),F((X,we,re,fe,ue,Re,$e)=>{b(c,X),b(k,we),b(S,m(i).totalUsers),b(E,re),b(D,m(i).totalScore),b(le,fe),b(G,m(i).totalPosts),b(M,ue),b(W,Re),b(ee,m(i).totalMessages),b(V,$e)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),x(n,o),Qe(),s()}customElements.define("sns-right-sidebar",ve(DC,{},[],[],!0));var $C=A('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const OC={hash:"svelte-um1xbq",code:`\r
  /* 전체 레이아웃 */.layout.svelte-um1xbq {min-height:100vh;background-color:#f9fafb;}\r
\r
  /* 메인 컨테이너 */.main-container.svelte-um1xbq {display:flex;margin-top:4rem; /* Topbar 높이만큼 여백 */min-height:calc(100vh - 4rem);}\r
\r
  /* 왼쪽 사이드바 */.left-sidebar.svelte-um1xbq {display:none;}\r
\r
  @media (min-width: 768px) {.left-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}\r
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
  @media (min-width: 1024px) {.right-sidebar.svelte-um1xbq {display:block;position:sticky;top:4rem;height:calc(100vh - 4rem);overflow:hidden;}\r
  }`};function MC(n,e){Je(n,OC);var t=$C(),r=u(t),s=g(r,2),i=u(s);nn(i,1,"left-sidebar svelte-um1xbq");var o=g(i,2),a=u(o);dt(a,e,"default",{}),d(o);var l=g(o,2);nn(l,1,"right-sidebar svelte-um1xbq"),d(s),d(t),x(n,t)}customElements.define("sns-layout",ve(MC,{},["default"],[],!0));var UC=A('<div class="icon-container svelte-m3h71q"> </div>'),zC=A('<p class="hint-box svelte-m3h71q"> </p>'),FC=A('<p class="gpl-box svelte-m3h71q"> </p>'),qC=A('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),jC=A('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),BC=A('<div class="accordion svelte-m3h71q"></div>');const VC={hash:"svelte-m3h71q",code:`\r
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
  }`};function HC(n,e){Ye(e,!0),Je(n,VC);let t=Ve(e,"items",7,"[]"),r=Ve(e,"type",7,"single"),s=Ve(e,"collapsible",7,!0),i=Ws(()=>{try{const f=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(f)?f:[]}catch(f){return console.error("Failed to parse accordion items:",f),[]}}),o=Ws(()=>{const f=s();return typeof f=="boolean"?f:typeof f=="string"?f!=="false":!0}),a=ae(Bt(new Set));function l(f){const _=new Set(m(a));r()==="single"?_.has(f)?m(o)&&_.delete(f):(_.clear(),_.add(f)):_.has(f)?_.delete(f):_.add(f),y(a,_,!0)}function c(f){return m(a).has(f)}var h={get items(){return t()},set items(f="[]"){t(f),je()},get type(){return r()},set type(f="single"){r(f),je()},get collapsible(){return s()},set collapsible(f=!0){s(f),je()}},p=BC();return Mt(p,21,()=>m(i),ir,(f,_,v)=>{var w=jC(),k=u(w);k.__click=()=>l(v);var I=u(k),S=u(I);{var P=$=>{var B=UC(),J=u(B,!0);d(B),F(()=>b(J,m(_).icon)),x($,B)};Z(S,$=>{m(_).icon&&$(P)})}var N=g(S,2),j=u(N,!0);d(N),d(I);var L=g(I,2);let C;var E=u(L);Fd(E,{size:20}),d(L),d(k);var T=g(k,2);{var D=$=>{var B=qC(),J=u(B),te=u(J,!0);d(J);var K=g(J,2);{var le=Y=>{var M=zC(),H=u(M,!0);d(M),F(()=>b(H,m(_).hint)),x(Y,M)};Z(K,Y=>{m(_).hint&&Y(le)})}var me=g(K,2);{var G=Y=>{var M=FC(),H=u(M,!0);d(M),F(()=>b(H,m(_).gpl)),x(Y,M)};Z(me,Y=>{m(_).gpl&&Y(G)})}d(B),F(()=>b(te,m(_).content)),x($,B)};Z(T,$=>{c(v)&&$(D)})}d(w),F(($,B)=>{Ee(k,"aria-expanded",$),b(j,m(_).title),C=nn(L,1,"chevron svelte-m3h71q",null,C,B)},[()=>c(v),()=>({"rotate-180":c(v)})]),x(f,w)}),d(p),x(n,p),Qe(h)}ct(["click"]);customElements.define("sns-accordion",ve(HC,{items:{},type:{},collapsible:{}},[],[],!0));var WC=A('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),GC=A('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),KC=A('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),YC=A('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const QC={hash:"svelte-1uta475",code:`
  /* FAB 컨테이너 - 오른쪽 하단 고정 */.test-fab-container.svelte-1uta475 {position:fixed;z-index:50;bottom:1rem;right:1rem;}

  /* FAB 버튼 */.test-fab-button.svelte-1uta475 {height:3.5rem;width:3.5rem;border-radius:9999px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);background-color:rgba(180, 83, 9, 0.7);color:white;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;padding:0;}.test-fab-button.svelte-1uta475:hover {background-color:rgba(146, 64, 14, 0.8);}.test-fab-button.svelte-1uta475:disabled {opacity:0.5;cursor:not-allowed;}.test-fab-button.loading.svelte-1uta475 {
    animation: svelte-1uta475-spin 1s linear infinite;}

  @keyframes svelte-1uta475-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 드롭다운 메뉴 */.test-fab-menu.svelte-1uta475 {position:absolute;right:0;bottom:4rem;width:14rem;background-color:white;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1);border:1px solid #e5e7eb;overflow:hidden;
    animation: svelte-1uta475-slideUp 0.2s ease-out;}

  @keyframes svelte-1uta475-slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 메뉴 헤더 */.menu-header.svelte-1uta475 {padding:0.75rem 1rem;background-color:#f9fafb;}.menu-title.svelte-1uta475 {font-weight:600;color:#1f2937;}

  /* 메뉴 구분선 */.menu-divider.svelte-1uta475 {border-top:1px solid #e5e7eb;}

  /* 메뉴 섹션 */.menu-section.svelte-1uta475 {padding:0.75rem 1rem;}.section-title.svelte-1uta475 {display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;font-size:0.875rem;font-weight:500;color:#374151;}

  /* 테스트 계정 목록 */.account-list.svelte-1uta475 {display:flex;flex-direction:column;gap:0.25rem;}.account-button.svelte-1uta475 {width:100%;padding:0.5rem 0.75rem;border-radius:0.25rem;display:flex;align-items:center;gap:0.5rem;background-color:#f3f4f6;border:none;transition:background-color 0.15s ease;cursor:pointer;}.account-button.svelte-1uta475:hover {background-color:#e5e7eb;}.account-button.svelte-1uta475:disabled {opacity:0.5;cursor:not-allowed;}.account-label.svelte-1uta475 {font-family:monospace;font-weight:700;color:#1f2937;}.account-phone.svelte-1uta475 {font-size:0.875rem;color:#6b7280;}

  /* 메뉴 버튼 */.menu-button.svelte-1uta475 {width:100%;padding:0.75rem 1rem;display:flex;align-items:center;gap:0.5rem;background-color:transparent;border:none;transition:background-color 0.15s ease;cursor:pointer;}.menu-button.svelte-1uta475:hover {background-color:#f9fafb;}

  /* 버전 정보 */.version-info.svelte-1uta475 {padding:0.75rem 1rem;}.version-label.svelte-1uta475 {font-size:0.75rem;color:#6b7280;margin-bottom:0.25rem;}.version-value.svelte-1uta475 {font-family:monospace;font-weight:700;color:#1f2937;background-color:#f1f5f9;border:1px solid #cbd5e1;border-radius:0.25rem;padding:0.25rem 0.5rem;font-size:0.875rem;}

  /* 모달 오버레이 */.modal-overlay.svelte-1uta475 {position:fixed;top:0;right:0;bottom:0;left:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;padding:1rem;
    animation: svelte-1uta475-fadeIn 0.2s ease-out;}

  @keyframes svelte-1uta475-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 모달 컨텐츠 */.modal-content.svelte-1uta475 {background-color:white;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1.5rem;max-width:28rem;width:100%;
    animation: svelte-1uta475-slideIn 0.2s ease-out;}

  @keyframes svelte-1uta475-slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }.modal-title.svelte-1uta475 {font-size:1.25rem;font-weight:700;margin-bottom:1rem;color:#1f2937;}

  /* 정보 목록 */.info-list.svelte-1uta475 {display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;}.info-item.svelte-1uta475 {display:flex;justify-content:space-between;font-size:0.875rem;}.info-label.svelte-1uta475 {color:#6b7280;}.info-value.svelte-1uta475 {font-family:monospace;color:#1f2937;}.info-value-small.svelte-1uta475 {font-size:0.75rem;}

  /* 모달 닫기 버튼 */.modal-close-button.svelte-1uta475 {width:100%;padding:0.5rem 1rem;border:1px solid #d1d5db;border-radius:0.25rem;background-color:white;transition:background-color 0.15s ease;cursor:pointer;}.modal-close-button.svelte-1uta475:hover {background-color:#f9fafb;}

  /* reCAPTCHA 컨테이너 숨김 */`};function JC(n,e){Ye(e,!0),Je(n,QC);const t=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],r="12345a,*";let s=ae(!1),i=ae(!1),o=ae(!1);const a=Date.now(),l=new Date(a).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),c="withcenter-test-5";Rt(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.")});async function h(C){if(!m(o)){y(o,!0),console.log(`${C.name} (${C.label}) 계정으로 로그인을 시도합니다...`);try{let E;try{E=await I0(br,C.email,r),console.log(`${C.name} 계정으로 로그인 성공!`)}catch(T){if(T.code==="auth/user-not-found"||T.code==="auth/invalid-credential")console.log(`${C.name} 계정이 없습니다. 회원가입을 진행합니다...`),E=await E0(br,C.email,r),await yp(E.user,{displayName:C.name}),console.log(`${C.name} 계정 회원가입 및 로그인 성공!`);else throw T}alert(`${C.name} (${C.label}) 계정으로 로그인되었습니다.`),y(s,!1),window.location.href="/"}catch(E){console.error("로그인 오류:",E);let T="로그인에 실패했습니다.";E.code==="auth/invalid-email"?T="잘못된 이메일 형식입니다.":E.code==="auth/wrong-password"?T="비밀번호가 일치하지 않습니다.":E.code==="auth/too-many-requests"?T="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":E.code==="auth/weak-password"?T="비밀번호가 너무 약합니다.":E.code==="auth/email-already-in-use"&&(T="이미 사용 중인 이메일입니다."),alert(T+`
오류 코드: `+E.code)}finally{y(o,!1)}}}function p(){y(s,!m(s))}function f(){y(i,!m(i)),y(s,!1)}function _(C){const E=C.target;!E.closest(".test-fab-menu")&&!E.closest(".test-fab-button")&&y(s,!1)}var v=YC();us("click",Al,_);var w=pe(v),k=u(w);let I;k.__click=p;var S=u(k);xv(S,{size:24}),d(k);var P=g(k,2);{var N=C=>{var E=GC(),T=g(u(E),4),D=u(T),$=u(D);Fr($,{size:16}),yn(2),d(D);var B=g(D,2);Mt(B,21,()=>t,G=>G.label,(G,Y)=>{var M=WC();M.__click=()=>h(m(Y));var H=u(M),ne=u(H,!0);d(H);var de=g(H,2),R=u(de,!0);d(de),d(M),F(()=>{M.disabled=m(o),b(ne,m(Y).label),b(R,m(Y).name)}),x(G,M)}),d(B),d(T);var J=g(T,4);J.__click=f;var te=u(J);yv(te,{size:16}),yn(2),d(J);var K=g(J,4),le=g(u(K),2),me=u(le,!0);d(le),d(K),d(E),F(()=>b(me,l)),x(C,E)};Z(P,C=>{m(s)&&C(N)})}d(w);var j=g(w,2);{var L=C=>{var E=KC();E.__click=f;var T=u(E);T.__click=G=>G.stopPropagation();var D=g(u(T),2),$=u(D),B=g(u($),2),J=u(B,!0);d(B),d($);var te=g($,8),K=g(u(te),2),le=u(K,!0);d(K),d(te),d(D);var me=g(D,2);me.__click=f,d(T),d(E),F(()=>{b(J,"production"),b(le,c)}),x(C,E)};Z(j,C=>{m(i)&&C(L)})}F(()=>{I=nn(k,1,"test-fab-button svelte-1uta475",null,I,{loading:m(o)}),k.disabled=m(o)}),x(n,v),Qe()}ct(["click"]);customElements.define("test-fab",ve(JC,{},[],[],!1));function Vd(n,e){const{subscribe:t,set:r}=ys({data:e??null,loading:!0,error:null}),s=Ct(yt,n);return Io(s,i=>{const o=i.val();r({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${n}`,o!==null?o:e??null)},i=>{console.error(`❌ 실시간 데이터 로드 실패: ${n}`,i),r({data:e??null,loading:!1,error:i})}),{subscribe:t,set:r,update:i=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>Ld(s)}}const XC=Vd;function ZC(n){if(!n)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},t={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},r={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[n]?e[n]:t[n]?t[n]:r[n]?r[n]:n.includes("network")||n.includes("offline")?"error.network":n.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function hi(n,e="unknown"){if(!n)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const t=n;let r=t.code??null;if(!r&&t.message){const i=t.message.match(/\(([^)]+)\)/);i&&i[1]&&(r=i[1])}return console.error(`[${e}] Firebase 에러:`,{code:r,message:t.message,stack:t.stack,originalError:n}),{key:ZC(r),code:r,message:t.message||"Unknown error",context:e}}async function e2(n,e,t,r,s){try{const i=Date.now(),o=`${n}-${i}`,a={uid:e,title:r,content:s,author:t,category:n,order:o,createdAt:i,updatedAt:i,likeCount:0,commentCount:0},l=Ct(yt,"posts");return{success:!0,postId:(await so(l,a)).key||void 0}}catch(i){const o=hi(i,"createPost");return{success:!1,error:o.key,errorMessage:o.message}}}const Ah=["community","qna","news","market"];function Av(){const n="abcdefghijklmnopqrstuvwxyz";let e="";for(let t=0;t<3;t++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}async function t2(n){const{postId:e,userId:t,content:r}=n;try{const s=Date.now(),i=Av(),o={postId:e,uid:t,content:r,depth:1,order:i,parentId:null,createdAt:s,updatedAt:s},a=Ct(yt,"comments"),c=so(a).key;if(!c)throw new Error("Failed to generate comment ID");const h={};return h[`comments/${c}`]=o,h[`posts/${e}/commentCount`]=Qa(1),await Eo(Ct(yt),h),{success:!0,commentId:c}}catch(s){const i=hi(s,"createTopLevelComment");return{success:!1,error:i.key,errorMessage:i.message}}}async function n2(n){const{parentCommentId:e,userId:t,content:r}=n;try{const s=Ct(yt,`comments/${e}`),i=await _a(s);if(!i.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const o=i.val(),a=o.depth||1,l=o.order||"",c=o.postId,h=a+1;if(h>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const p=Date.now(),f=Av(),_=`${l}-${f}`,v={postId:c,uid:t,content:r,depth:h,order:_,parentId:e,createdAt:p,updatedAt:p},w=Ct(yt,"comments"),I=so(w).key;if(!I)throw new Error("Failed to generate comment ID");const S={};return S[`comments/${I}`]=v,S[`posts/${c}/commentCount`]=Qa(1),await Eo(Ct(yt),S),{success:!0,commentId:I}}catch(s){const i=hi(s,"createChildComment");return{success:!1,error:i.key,errorMessage:i.message}}}function r2(n,e){try{const t=Ct(yt,"comments"),r=Nn(t,Rn("postId"),aE(n));return Io(r,s=>{if(s.exists()){const i=[];s.forEach(o=>{i.push({commentId:o.key,...o.val()})}),i.sort((o,a)=>{const l=o.order||"",c=a.order||"";return l.localeCompare(c)}),e(i)}else e([])}),()=>{Ld(t)}}catch(t){return console.error("댓글 조회 실패:",t),e([]),()=>{}}}async function s2(n,e){try{const t={};return t[`post-likes/${n}-${e}`]=1,t[`posts/${n}/likeCount`]=Qa(1),await Eo(Ct(yt),t),{success:!0}}catch(t){const r=hi(t,"addLike");return{success:!1,error:r.key,errorMessage:r.message}}}async function i2(n,e){try{const t={};return t[`post-likes/${n}-${e}`]=null,t[`posts/${n}/likeCount`]=Qa(-1),await Eo(Ct(yt),t),{success:!0}}catch(t){const r=hi(t,"removeLike");return{success:!1,error:r.key,errorMessage:r.message}}}async function o2(n,e){try{const t=Ct(yt,`post-likes/${n}-${e}`);return(await _a(t)).exists()}catch(t){return console.error("좋아요 상태 확인 실패:",t),!1}}async function a2(n,e){try{const t=await o2(n,e);let r;return t?r=await i2(n,e):r=await s2(n,e),r.success?{success:!0,isLiked:!t}:{success:!1,isLiked:t,error:r.error,errorMessage:r.errorMessage}}catch(t){const r=hi(t,"toggleLike");return{success:!1,isLiked:!1,error:r.key,errorMessage:r.message}}}console.log("SNS Web Components 로드됨 ✅");var l2=A('<div class="gpl-badge svelte-1ubq0t6"> </div>'),c2=A('<div class="hint svelte-1ubq0t6"> </div>'),d2=A('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),u2=A('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),h2=A('<div class="todo-description svelte-1ubq0t6"> </div>'),f2=A('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),p2=A('<div class="todo-subitems svelte-1ubq0t6"></div>'),m2=A('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),v2=A('<span class="badge svelte-1ubq0t6"> </span>'),g2=A('<div class="home svelte-1ubq0t6"><div class="vibe-banner svelte-1ubq0t6"><span class="vibe-text svelte-1ubq0t6"> </span></div> <div class="hero-section svelte-1ubq0t6"><h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p></div> <section class="section techstack-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const _2={hash:"svelte-1ubq0t6",code:`\r
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
  }`};function Pv(n,e){Ye(e,!0),Je(n,_2);const t=()=>We(xt,"$t",r),[r,s]=gt();let i=ae(null);function o(ie){y(i,m(i)===ie?null:ie,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],c=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var h=g2(),p=u(h),f=u(p),_=u(f);d(f),d(p);var v=g(p,2),w=u(v),k=u(w,!0);d(w);var I=g(w,2),S=u(I),P=g(S),N=u(P,!0);d(P);var j=g(P);d(I),d(v);var L=g(v,2),C=u(L),E=u(C,!0);d(C);var T=g(C,2),D=u(T),$=g(u(D),2),B=u($,!0);d($);var J=g($,2),te=u(J,!0);d(J),d(D);var K=g(D,2),le=g(u(K),2),me=u(le,!0);d(le);var G=g(le,2),Y=u(G,!0);d(G),d(K);var M=g(K,2),H=g(u(M),2),ne=u(H,!0);d(H);var de=g(H,2),R=u(de,!0);d(de),d(M);var z=g(M,2),W=g(u(z),2),q=u(W,!0);d(W);var ee=g(W,2),U=u(ee,!0);d(ee),d(z),d(T),d(L);var V=g(L,2),X=u(V),we=u(X,!0);d(X);var re=g(X,2);Mt(re,21,()=>a,ir,(ie,se)=>{var Te=u2(),Ue=u(Te);Ue.__click=()=>o(m(se).id);var rt=u(Ue),wt=u(rt,!0);d(rt);var Dt=g(rt,2);let dn;var Tn=u(Dt);Fd(Tn,{size:20}),d(Dt),d(Ue);var bn=g(Ue,2);{var Zt=en=>{var Sn=d2(),An=u(Sn),nr=u(An,!0);d(An);var Er=g(An,2);{var fi=Wt=>{var Ft=l2(),rr=u(Ft,!0);d(Ft),F(Bn=>b(rr,Bn),[()=>t()("home.aiTruth.item3.gpl")]),x(Wt,Ft)};Z(Er,Wt=>{m(se).showGpl&&Wt(fi)})}var Et=g(Er,2);{var Pn=Wt=>{var Ft=c2(),rr=u(Ft,!0);d(Ft),F(Bn=>b(rr,Bn),[()=>t()(m(se).hintKey)]),x(Wt,Ft)};Z(Et,Wt=>{m(se).hintKey&&Wt(Pn)})}d(Sn),F(Wt=>b(nr,Wt),[()=>t()(m(se).contentKey)]),x(en,Sn)};Z(bn,en=>{m(i)===m(se).id&&en(Zt)})}d(Te),F(en=>{Ee(Ue,"aria-expanded",m(i)===m(se).id),b(wt,en),dn=nn(Dt,1,"accordion-icon svelte-1ubq0t6",null,dn,{open:m(i)===m(se).id})},[()=>t()(m(se).titleKey)]),x(ie,Te)}),d(re),d(V);var fe=g(V,2),ue=u(fe),Re=u(ue,!0);d(ue);var $e=g(ue,2);Mt($e,21,()=>l,ir,(ie,se)=>{var Te=m2(),Ue=u(Te),rt=u(Ue);let wt;var Dt=u(rt);{var dn=Et=>{dc(Et,{size:20})},Tn=Et=>{uc(Et,{size:20})};Z(Dt,Et=>{m(se).completed?Et(dn):Et(Tn,!1)})}d(rt);var bn=g(rt,2),Zt=u(bn);let en;var Sn=u(Zt,!0);d(Zt);var An=g(Zt,2);{var nr=Et=>{var Pn=h2(),Wt=u(Pn,!0);d(Pn),F(Ft=>b(Wt,Ft),[()=>t()(m(se).descriptionKey)]),x(Et,Pn)};Z(An,Et=>{m(se).descriptionKey&&Et(nr)})}d(bn),d(Ue);var Er=g(Ue,2);{var fi=Et=>{var Pn=p2();Mt(Pn,21,()=>m(se).subitems,ir,(Wt,Ft)=>{var rr=f2(),Bn=u(rr);let Co;var Xa=u(Bn);{var Jv=Ir=>{dc(Ir,{size:16})},Xv=Ir=>{uc(Ir,{size:16})};Z(Xa,Ir=>{m(Ft).completed?Ir(Jv):Ir(Xv,!1)})}d(Bn);var Za=g(Bn,2);let Gd;var Zv=u(Za,!0);d(Za),d(rr),F(Ir=>{Co=nn(Bn,1,"todo-subicon svelte-1ubq0t6",null,Co,{completed:m(Ft).completed}),Gd=nn(Za,1,"todo-subtext svelte-1ubq0t6",null,Gd,{completed:m(Ft).completed}),b(Zv,Ir)},[()=>t()(m(Ft).key)]),x(Wt,rr)}),d(Pn),x(Et,Pn)};Z(Er,Et=>{m(se).subitems.length>0&&Et(fi)})}d(Te),F(Et=>{wt=nn(rt,1,"todo-icon svelte-1ubq0t6",null,wt,{completed:m(se).completed}),en=nn(Zt,1,"todo-label svelte-1ubq0t6",null,en,{completed:m(se).completed}),b(Sn,Et)},[()=>t()(m(se).labelKey)]),x(ie,Te)}),d($e),d(fe);var Ge=g(fe,2),ze=u(Ge),Fe=u(ze,!0);d(ze);var qe=g(ze,2),De=u(qe),et=u(De),st=u(et,!0);d(et);var He=g(et,1,!0);d(De);var ge=g(De,2);Mt(ge,21,()=>c,ir,(ie,se)=>{var Te=v2(),Ue=u(Te,!0);d(Te),F(rt=>b(Ue,rt),[()=>t()(m(se))]),x(ie,Te)}),d(ge),d(qe),d(Ge);var O=g(Ge,2),he=u(O),_e=u(he,!0);d(he);var Ce=g(he,2),Oe=u(Ce),tt=u(Oe,!0);d(Oe);var it=g(Oe,2),nt=u(it),Me=g(nt),Tt=u(Me,!0);d(Me);var kt=g(Me,1,!0);d(it);var Xt=g(it,2),oe=u(Xt,!0);d(Xt),d(Ce),d(O),d(h),F((ie,se,Te,Ue,rt,wt,Dt,dn,Tn,bn,Zt,en,Sn,An,nr,Er,fi,Et,Pn,Wt,Ft,rr,Bn,Co,Xa)=>{b(_,`✨ ${ie??""}`),b(k,se),b(S,`${Te??""} `),b(N,Ue),b(j,` ${rt??""}`),b(E,wt),b(B,Dt),b(te,dn),b(me,Tn),b(Y,bn),b(ne,Zt),b(R,en),b(q,Sn),b(U,An),b(we,nr),b(Re,Er),b(Fe,fi),b(st,Et),b(He,Pn),b(_e,Wt),b(tt,Ft),b(nt,`${rr??""} `),b(Tt,Bn),b(kt,Co),b(oe,Xa)},[()=>t()("home.vibeBanner"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.title"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),x(n,h),Qe(),s()}ct(["click"]);ve(Pv,{},[],[],!0);var b2=A('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),w2=A('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),y2=A('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const x2={hash:"svelte-1mz53xx",code:`\r
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
  }`};function Rv(n,e){Ye(e,!1),Je(n,x2);const t=()=>We(xt,"$t",s),r=()=>We(Ja,"$user",s),[s,i]=gt();function o(_){console.log("Login successful:",_.detail),alert(t()("로그인성공알림",{phone:_.detail.phoneNumber})),window.location.href="/"}function a(_){console.error("Login error:",_.detail),alert(t()("로그인실패",{error:_.detail.error}))}ln();var l=y2(),c=u(l),h=u(c);{var p=_=>{var v=b2(),w=u(v),k=u(w,!0);d(w);var I=g(w,2),S=u(I,!0);d(I);var P=g(I,2);d(v),F((N,j)=>{b(k,N),b(S,j)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),us("login-success",P,o),us("login-error",P,a),x(_,v)},f=_=>{var v=w2(),w=u(v),k=u(w,!0);d(w);var I=g(w,2),S=u(I,!0);d(I);var P=g(I,2),N=u(P,!0);d(P),d(v),F((j,L,C)=>{b(k,j),b(S,L),b(N,C)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:r().phoneNumber}),()=>t()("홈으로이동")]),x(_,v)};Z(h,_=>{r()?_(f,!1):_(p)})}d(c),d(l),x(n,l),Qe(),i()}ve(Rv,{},[],[],!0);var k2=A('<button class="menu-item svelte-163o8b2"> </button>'),E2=A('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const I2={hash:"svelte-163o8b2",code:`\r
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
  }`};function Nv(n,e){Ye(e,!0),Je(n,I2);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("메뉴"))});function i(f){window.history.pushState({},"",f),window.dispatchEvent(new PopStateEvent("popstate"))}let o=Ws(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var a=E2(),l=u(a),c=u(l),h=u(c,!0);d(c);var p=g(c,2);Mt(p,21,()=>m(o),f=>f.path,(f,_)=>{var v=k2();v.__click=()=>i(m(_).path);var w=u(v,!0);d(v),F(()=>b(w,m(_).label)),x(f,v)}),d(p),d(l),d(a),F(f=>b(h,f),[()=>t()("페이지선택")]),x(n,a),Qe(),s()}ct(["click"]);ve(Nv,{},[],[],!0);var C2=A('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),T2=A('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),S2=A('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),A2=A('<p class="upload-status svelte-17u94r3"> </p>'),P2=A('<div class="message-box success-message svelte-17u94r3"> </div>'),R2=A('<div class="message-box error-message svelte-17u94r3"> </div>'),N2=A('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const L2={hash:"svelte-17u94r3",code:`
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
  }`};function Lv(n,e){Ye(e,!0),Je(n,L2);const t=()=>We(xt,"$t",r),[r,s]=gt();let i=ae(Bt({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=ae(null),a=ae(null),l=ae(!1),c=ae(!1),h=ae(null),p=ae(null),f=null,_=null;function v(oe){y(h,oe,!0),f&&clearTimeout(f),f=setTimeout(()=>{y(h,null),f=null},3e3)}function w(oe){y(p,oe,!0),_&&clearTimeout(_),_=setTimeout(()=>{y(p,null),_=null},5e3)}Pf(()=>{f&&clearTimeout(f),_&&clearTimeout(_)}),Rt(()=>{_n(t()("프로필수정"))}),Ks(()=>{if(ke.data){m(i).displayName=ke.data.displayName||"",m(i).gender=ke.data.gender||"",m(i).dateOfBirth=ke.data.dateOfBirth||"";const oe=ke.data.photoUrl??ke.data.photoURL??"";m(i).photoUrl=oe,y(o,oe||null,!0)}});function k(){m(c)||m(a)?.click()}async function I(oe){const se=oe.currentTarget?.files?.[0];if(!se)return;if(m(c)){w(t()("사진작업진행중"));return}if(!ke.isAuthenticated||!ke.uid){w(t()("로그인필요"));return}if(!se.type.startsWith("image/")){w(t()("이미지파일만가능"));return}if(se.size>5*1024*1024){w(t()("파일크기5MB제한"));return}const Te=m(o),Ue=m(i).photoUrl,rt=new FileReader;rt.onload=wt=>{const Dt=wt.target?.result;typeof Dt=="string"&&y(o,Dt,!0)},rt.readAsDataURL(se);try{await P(se)}catch{y(o,Te,!0),m(i).photoUrl=Ue,m(a)&&(m(a).value="")}}async function S(){if(m(c))return;if(!ke.isAuthenticated||!ke.uid){w(t()("로그인필요"));return}const oe=m(o),ie=m(i).photoUrl;y(o,null),m(i).photoUrl="",m(a)&&(m(a).value="");try{y(c,!0),await ke.updateProfile({photoUrl:null}),v(t()("프로필사진제거완료"))}catch(se){console.error("프로필 사진 제거 오류:",se),w(t()("사진제거실패",{error:se.message||t()("알수없는오류")})),y(o,oe,!0),m(i).photoUrl=ie}finally{y(c,!1)}}async function P(oe,{showSuccess:ie=!0}={}){if(!ke.isAuthenticated||!ke.uid)throw w(t()("로그인필요")),new Error("User is not authenticated");try{y(c,!0);const se=oe.name.split(".").pop()?.toLowerCase()||"jpg",Te=`profile_${ke.uid}_${Date.now()}.${se}`,Ue=TI(NI,`users/${ke.uid}/profile/${Te}`),rt=await II(Ue,oe),wt=await CI(rt.ref);return m(i).photoUrl=wt,y(o,wt,!0),await ke.updateProfile({photoUrl:wt}),ie&&v(t()("프로필사진저장완료")),wt}catch(se){throw console.error("프로필 사진 업로드 오류:",se),w(t()("사진저장실패",{error:se.message||t()("알수없는오류")})),se}finally{y(c,!1),m(a)&&(m(a).value="")}}async function N(oe){oe.preventDefault(),y(l,!0),y(p,null),y(h,null);try{let ie=m(i).photoUrl;const se=m(a)?.files?.[0];if(se)try{ie=await P(se,{showSuccess:!1})}catch{y(l,!1);return}const Te={displayName:m(i).displayName,gender:m(i).gender,dateOfBirth:m(i).dateOfBirth,photoUrl:ie||null};await ke.updateProfile(Te),v(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",Te)}catch(ie){console.error("프로필 업데이트 오류:",ie),w(t()("프로필업데이트실패",{error:ie.message||t()("알수없는오류")}))}finally{y(l,!1)}}function j(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var L=N2(),C=u(L),E=u(C),T=u(E),D=u(T,!0);d(T);var $=g(T,2),B=u($);B.__change=I,Lc(B,oe=>y(a,oe),()=>m(a));var J=g(B,2),te=u(J);te.__click=k;var K=u(te);{var le=oe=>{var ie=C2();F(()=>Ra(ie,`background-image: url("${m(o)}")`)),x(oe,ie)},me=oe=>{var ie=T2(),se=g(u(ie),2),Te=u(se,!0);d(se),d(ie),F(Ue=>b(Te,Ue),[()=>t()("사진없음")]),x(oe,ie)};Z(K,oe=>{m(o)?oe(le):oe(me,!1)})}d(te);var G=g(te,2);{var Y=oe=>{var ie=S2();ie.__click=S;var se=u(ie);Ev(se,{size:18,"stroke-width":3}),d(ie),F(Te=>{ie.disabled=m(l)||m(c),Ee(ie,"aria-label",Te)},[()=>t()("프로필사진제거")]),x(oe,ie)};Z(G,oe=>{m(o)&&oe(Y)})}var M=g(G,2),H=u(M);mv(H,{size:20,"stroke-width":2}),d(M),d(J);var ne=g(J,2),de=u(ne,!0);d(ne);var R=g(ne,2);{var z=oe=>{var ie=A2(),se=u(ie,!0);d(ie),F(Te=>b(se,Te),[()=>t()("사진저장중")]),x(oe,ie)};Z(R,oe=>{m(c)&&oe(z)})}d($),d(E);var W=g(E,2),q=u(W),ee=u(q,!0);d(q);var U=g(q,2);Ys(U);var V=g(U,2),X=u(V,!0);d(V),d(W);var we=g(W,2),re=u(we),fe=u(re,!0);d(re);var ue=g(re,2),Re=u(ue),$e=u(Re,!0);d(Re),Re.value=Re.__value="";var Ge=g(Re),ze=u(Ge,!0);d(Ge),Ge.value=Ge.__value="male";var Fe=g(Ge),qe=u(Fe,!0);d(Fe),Fe.value=Fe.__value="female";var De=g(Fe),et=u(De,!0);d(De),De.value=De.__value="other",d(ue),d(we);var st=g(we,2),He=u(st),ge=u(He,!0);d(He);var O=g(He,2);Ys(O);var he=g(O,2),_e=u(he,!0);d(he),d(st);var Ce=g(st,2);{var Oe=oe=>{var ie=P2(),se=u(ie);d(ie),F(()=>b(se,`✅ ${m(h)??""}`)),x(oe,ie)};Z(Ce,oe=>{m(h)&&oe(Oe)})}var tt=g(Ce,2);{var it=oe=>{var ie=R2(),se=u(ie);d(ie),F(()=>b(se,`⚠️ ${m(p)??""}`)),x(oe,ie)};Z(tt,oe=>{m(p)&&oe(it)})}var nt=g(tt,2),Me=u(nt),Tt=u(Me,!0);d(Me);var kt=g(Me,2);kt.__click=j;var Xt=u(kt,!0);d(kt),d(nt),d(C),d(L),F((oe,ie,se,Te,Ue,rt,wt,Dt,dn,Tn,bn,Zt,en,Sn,An,nr)=>{b(D,oe),Ee(B,"aria-label",ie),te.disabled=m(l)||m(c),Ee(te,"aria-label",se),b(de,Te),b(ee,Ue),Ee(U,"placeholder",rt),U.disabled=m(l),b(X,wt),b(fe,Dt),ue.disabled=m(l),b($e,dn),b(ze,Tn),b(qe,bn),b(et,Zt),b(ge,en),O.disabled=m(l),b(_e,Sn),Me.disabled=m(l)||m(c)||!ke.isAuthenticated,b(Tt,An),kt.disabled=m(l),b(Xt,nr)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>m(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>m(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),us("submit",C,N),Vr(U,()=>m(i).displayName,oe=>m(i).displayName=oe),Nc(ue,()=>m(i).gender,oe=>m(i).gender=oe),Vr(O,()=>m(i).dateOfBirth,oe=>m(i).dateOfBirth=oe),x(n,L),Qe(),s()}ct(["change","click"]);ve(Lv,{},[],[],!0);var D2=A('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),$2=A('<div class="loading-container svelte-a4suww"><!></div>'),O2=A('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),M2=A('<div class="error-container svelte-a4suww"><!></div>'),U2=A('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),z2=A('<div class="empty-container svelte-a4suww"><!></div>'),F2=A('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),q2=A('<div class="item-wrapper svelte-a4suww"><!></div>'),j2=A('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),B2=A('<div class="loading-more svelte-a4suww"><!></div>'),V2=A('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),H2=A('<div class="no-more svelte-a4suww"><!></div>'),W2=A('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),G2=A('<div class="database-list-view svelte-a4suww"><!></div>');const K2={hash:"svelte-a4suww",code:`\r
  /* 컨테이너 */.database-list-view.svelte-a4suww {width:100%;\r
    /* height와 overflow는 부모에서 제어하도록 제거 */\r
    /* 이렇게 하면 body 스크롤(window scroll)이 제대로 동작합니다 */\r
    /* 만약 컨테이너 스크롤이 필요하면 부모에서 height와 overflow-y: auto를 설정하세요 */display:flex;flex-direction:column;}\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function Hd(n,e){Ye(e,!0),Je(n,K2);let t=Ve(e,"path",7,""),r=Ve(e,"pageSize",7,10),s=Ve(e,"orderBy",7,"createdAt"),i=Ve(e,"sortPrefix",7,""),o=Ve(e,"threshold",7,300),a=Ve(e,"reverse",7,!1),l=Ve(e,"item",7),c=Ve(e,"loading",7),h=Ve(e,"empty",7),p=Ve(e,"error",7),f=Ve(e,"loadingMore",7),_=Ve(e,"noMore",7),v=ae(Bt([])),w=ae(!1),k=ae(!0),I=ae(!0),S=ae(null),P=ae(null),N=ae(0),j=ae(null),L=ae(null),C=new Map,E=new Map,T=null,D=ae(!1);Ks(()=>(t()&&yt&&te(),()=>{console.log("DatabaseListView: Cleaning up listeners"),T&&(T(),T=null),C.forEach(R=>{R()}),C.clear(),console.log("DatabaseListView: All listeners cleaned up")})),Ks(()=>{if(m(L))return m(L).addEventListener("scroll",le),window.addEventListener("scroll",me),()=>{m(L)?.removeEventListener("scroll",le),window.removeEventListener("scroll",me)}});function $(R,z){if(R.length===0)return null;const W=R[R.length-1];if(!W)return null;const q=W.data[z];return q!=null&&q!==""?(console.log(`DatabaseListView: Using cursor from '${z}':`,{value:q,key:W.key}),{value:q,key:W.key}):(console.error(`DatabaseListView: CRITICAL ERROR - Field '${z}' not found in last item (key: ${W.key}).`,"This will prevent pagination from working correctly.",`Please ensure all items in '${t()}' have the '${z}' field.`,"Item data:",W.data),y(j,`데이터 정렬 필드 '${z}'가 누락되었습니다. 데이터베이스 구조를 확인해주세요.`),null)}function B(R,z){const W=`${R}`;if(C.has(W))return;const q=Ct(yt,`${t()}/${R}`),ee=Io(q,U=>{if(U.exists()){const V=U.val();m(v)[z]={key:R,data:V},y(v,[...m(v)],!0),console.log(`DatabaseListView: Item updated ${R}`,V)}},U=>{console.error(`DatabaseListView: Error listening to item ${R}`,U)});C.set(W,ee)}function J(){T&&(T(),T=null),console.log("DatabaseListView: Setting up child_added listener for",t()),y(D,!1);const R=Ct(yt,t());let z;i()?(z=Nn(R,Rn(s()),Rs(i()),yl(i()+"")),console.log("DatabaseListView: child_added listener with sortPrefix:",i())):(z=Nn(R,Rn(s()),Rs(!1)),console.log("DatabaseListView: child_added listener with startAt(false) to filter null/undefined")),T=eE(z,W=>{if(!m(D))return;const q=W.key,ee=W.val();if(!q){console.warn("DatabaseListView: Snapshot key is null, skipping");return}if(m(v).some(X=>X.key===q)){console.log("DatabaseListView: Child already exists, skipping:",q);return}console.log("DatabaseListView: New child added:",q,ee);const V={key:q,data:ee};if(a())y(v,[V,...m(v)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),B(q,0);else{const X=m(v).length;y(v,[...m(v),V],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),B(q,X)}},W=>{console.error("DatabaseListView: Error in child_added listener",W)}),setTimeout(()=>{y(D,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}async function te(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",a(),")"),y(k,!0),y(j,null),y(v,[],!0),E.clear(),C.forEach(R=>R()),C.clear(),T&&(T(),T=null),y(D,!1),y(S,null),y(P,null),y(I,!0),y(N,0);try{const R=Ct(yt,t());let z;a()?i()?(z=Nn(R,Rn(s()),Rs(i()),yl(i()+""),Lo(r()+1)),console.log("DatabaseListView: Using limitToLast with sortPrefix:",i())):(z=Nn(R,Rn(s()),Rs(!1),Lo(r()+1)),console.log("DatabaseListView: Using limitToLast with startAt(false) to filter null/undefined")):i()?(z=Nn(R,Rn(s()),Rs(i()),yl(i()+""),No(r()+1)),console.log("DatabaseListView: Using limitToFirst with sortPrefix:",i())):(z=Nn(R,Rn(s()),Rs(!1),No(r()+1)),console.log("DatabaseListView: Using limitToFirst with startAt(false) to filter null/undefined"));const W=await _a(z);if(W.exists()){const q=[],ee=W.val();if(Object.entries(ee).forEach(([U,V])=>{q.push({key:U,data:V})}),console.log(`DatabaseListView: Initial query returned ${q.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",q.map(U=>({key:U.key,[s()]:U.data[s()]}))),a()&&(q.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),q.length>r()){y(I,!0),y(v,q.slice(0,r()),!0);const U=$(m(v),s());U?(y(S,U.value,!0),y(P,U.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:m(S),lastLoadedKey:m(P)})):y(I,!1)}else if(y(I,!1),y(v,q,!0),m(v).length>0){const U=$(m(v),s());U&&(y(S,U.value,!0),y(P,U.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:m(S),lastLoadedKey:m(P)}))}E.set(0,m(v)),m(v).forEach((U,V)=>{B(U.key,V)}),console.log(`DatabaseListView: Page ${m(N)} - Loaded ${m(v).length} items, hasMore: ${m(I)}`)}else console.log("DatabaseListView: No data found"),y(v,[],!0),y(I,!1)}catch(R){console.error("DatabaseListView: Load error",R),y(j,R instanceof Error?R.message:String(R),!0)}finally{y(k,!1),J()}}async function K(){if(m(w)||!m(I)){console.log("DatabaseListView: Cannot load more - loading:",m(w),"hasMore:",m(I));return}Sl(N),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${m(N)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",m(S),"lastLoadedKey:",m(P)),y(w,!0),y(j,null);try{if(m(S)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(I,!1),y(w,!1);return}const R=Ct(yt,t());let z;a()?i()?(z=Nn(R,Rn(s()),xh(m(S)),Lo(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination with sortPrefix (client-side filtering)")):(z=Nn(R,Rn(s()),xh(m(S)),Lo(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination (no startAt needed)")):i()?(z=Nn(R,Rn(s()),kh(m(S)),No(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination with sortPrefix (client-side filtering)")):(z=Nn(R,Rn(s()),kh(m(S)),No(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination (no startAt needed)"));const W=await _a(z);if(W.exists()){const q=[],ee=W.val();Object.entries(ee).forEach(([re,fe])=>{q.push({key:re,data:fe})}),console.log(`DatabaseListView: Page ${m(N)} - Query returned ${q.length} items from Firebase`),console.log(`DatabaseListView: Page ${m(N)} - Items orderBy values:`,q.map(re=>({key:re.key,[s()]:re.data[s()]})));let U=q;i()&&(U=q.filter(re=>{const fe=re.data[s()];return typeof fe=="string"?fe.startsWith(i()):!1}),console.log(`DatabaseListView: Filtered ${q.length} items to ${U.length} items with sortPrefix "${i()}"`),U.length<q.length&&(console.log("DatabaseListView: Reached end of sortPrefix range, no more items"),y(I,!1))),a()&&(U.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const V=new Set(m(v).map(re=>re.key)),X=U.filter(re=>!V.has(re.key));if(console.log(`DatabaseListView: Page ${m(N)} - After filtering duplicates: ${X.length} items`),X.length===0){console.log("DatabaseListView: No more unique items after filtering"),y(I,!1),y(w,!1);return}if(U.length>r()){y(I,!0);const re=X.slice(0,r());y(v,[...m(v),...re],!0);const fe=$(re,s());fe?(y(S,fe.value,!0),y(P,fe.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:m(S),lastLoadedKey:m(P)})):(y(I,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(y(I,!1),y(v,[...m(v),...X],!0),X.length>0){const re=$(X,s());re&&(y(S,re.value,!0),y(P,re.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:m(S),lastLoadedKey:m(P)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const we=m(v).length-(X.length>r()?r():X.length);m(v).slice(we).forEach((re,fe)=>{B(re.key,we+fe)}),console.log(`DatabaseListView: Page ${m(N)} - Loaded ${X.length} more items, total: ${m(v).length}, hasMore: ${m(I)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),y(I,!1)}catch(R){R instanceof Error?(console.error("DatabaseListView: Load more error",{name:R.name,message:R.message,toString:R.toString()}),y(j,R.message||"Unknown error",!0)):(console.error("DatabaseListView: Load more error",R),y(j,String(R),!0))}finally{y(w,!1)}}function le(){if(!m(L)||m(w)||!m(I))return;const{scrollTop:R,scrollHeight:z,clientHeight:W}=m(L);z-(R+W)<o()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),K())}function me(){if(m(w)||!m(I))return;const R=window.pageYOffset||document.documentElement.scrollTop,z=document.documentElement.scrollHeight,W=window.innerHeight;z-(R+W)<o()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),K())}function G(){console.log("DatabaseListView: Refreshing..."),te()}var Y={refresh:G,get path(){return t()},set path(R=""){t(R),je()},get pageSize(){return r()},set pageSize(R=10){r(R),je()},get orderBy(){return s()},set orderBy(R="createdAt"){s(R),je()},get sortPrefix(){return i()},set sortPrefix(R=""){i(R),je()},get threshold(){return o()},set threshold(R=300){o(R),je()},get reverse(){return a()},set reverse(R=!1){a(R),je()},get item(){return l()},set item(R){l(R),je()},get loading(){return c()},set loading(R){c(R),je()},get empty(){return h()},set empty(R){h(R),je()},get error(){return p()},set error(R){p(R),je()},get loadingMore(){return f()},set loadingMore(R){f(R),je()},get noMore(){return _()},set noMore(R){_(R),je()}},M=G2(),H=u(M);{var ne=R=>{var z=$2(),W=u(z);{var q=U=>{var V=be(),X=pe(V);Ss(X,c),x(U,V)},ee=U=>{var V=D2();x(U,V)};Z(W,U=>{c()?U(q):U(ee,!1)})}d(z),x(R,z)},de=R=>{var z=be(),W=pe(z);{var q=U=>{var V=M2(),X=u(V);{var we=fe=>{var ue=be(),Re=pe(ue);Ss(Re,p,()=>m(j)),x(fe,ue)},re=fe=>{var ue=O2(),Re=g(u(ue),2),$e=u(Re,!0);d(Re);var Ge=g(Re,2);Ge.__click=G,d(ue),F(()=>b($e,m(j))),x(fe,ue)};Z(X,fe=>{p()?fe(we):fe(re,!1)})}d(V),x(U,V)},ee=U=>{var V=be(),X=pe(V);{var we=fe=>{var ue=z2(),Re=u(ue);{var $e=ze=>{var Fe=be(),qe=pe(Fe);Ss(qe,h),x(ze,Fe)},Ge=ze=>{var Fe=U2();x(ze,Fe)};Z(Re,ze=>{h()?ze($e):ze(Ge,!1)})}d(ue),x(fe,ue)},re=fe=>{var ue=W2(),Re=u(ue);Mt(Re,19,()=>m(v),qe=>qe.key,(qe,De,et)=>{var st=q2(),He=u(st);{var ge=he=>{var _e=be(),Ce=pe(_e);Ss(Ce,l,()=>m(De),()=>m(et)),x(he,_e)},O=he=>{var _e=F2(),Ce=u(_e),Oe=u(Ce,!0);d(Ce),d(_e),F(tt=>b(Oe,tt),[()=>JSON.stringify(m(De).data,null,2)]),x(he,_e)};Z(He,he=>{l()?he(ge):he(O,!1)})}d(st),F(()=>Ee(st,"data-key",m(De).key)),x(qe,st)});var $e=g(Re,2);{var Ge=qe=>{var De=B2(),et=u(De);{var st=ge=>{var O=be(),he=pe(O);Ss(he,f),x(ge,O)},He=ge=>{var O=j2();x(ge,O)};Z(et,ge=>{f()?ge(st):ge(He,!1)})}d(De),x(qe,De)};Z($e,qe=>{m(w)&&qe(Ge)})}var ze=g($e,2);{var Fe=qe=>{var De=H2(),et=u(De);{var st=ge=>{var O=be(),he=pe(O);Ss(he,_),x(ge,O)},He=ge=>{var O=V2();x(ge,O)};Z(et,ge=>{_()?ge(st):ge(He,!1)})}d(De),x(qe,De)};Z(ze,qe=>{!m(I)&&!m(w)&&qe(Fe)})}d(ue),x(fe,ue)};Z(X,fe=>{m(v).length===0?fe(we):fe(re,!1)},!0)}x(U,V)};Z(W,U=>{m(j)?U(q):U(ee,!1)},!0)}x(R,z)};Z(H,R=>{m(k)?R(ne):R(de,!1)})}return d(M),Lc(M,R=>y(L,R),()=>m(L)),x(n,M),Qe(Y)}ct(["click"]);ve(Hd,{path:{},pageSize:{},orderBy:{},sortPrefix:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var Y2=A('<img class="svelte-r48pmi"/>'),Q2=A('<div class="avatar-placeholder svelte-r48pmi"> </div>'),J2=A('<span class="badge-me svelte-r48pmi"> </span>'),X2=A('<p class="user-email svelte-r48pmi"> </p>'),Z2=A('<p class="user-bio svelte-r48pmi"> </p>'),eT=A('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),tT=A('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),nT=A('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),rT=A('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),sT=A('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),iT=A('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const oT={hash:"svelte-r48pmi",code:`\r
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
  }`};function Dv(n,e){Ye(e,!1),Je(n,oT);const t=()=>We(xt,"$t",r),[r,s]=gt();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}Rt(()=>{_n(t()("사용자찾기"))});function o(a){a===ke.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}ln(),Hd(n,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(_,v=pn)=>{var w=eT();w.__click=()=>o(v().key),w.__keydown=M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),o(v().key))};var k=u(w),I=u(k);{var S=M=>{var H=Y2();F(ne=>{Ee(H,"src",v().data?.photoUrl??v().data?.photoURL),Ee(H,"alt",ne)},[()=>v().data?.displayName||t()("사용자")]),x(M,H)},P=M=>{var H=Q2(),ne=u(H,!0);d(H),F(de=>b(ne,de),[()=>v().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),x(M,H)};Z(I,M=>{v().data?.photoUrl||v().data?.photoURL?M(S):M(P,!1)})}d(k);var N=g(k,2),j=u(N),L=u(j),C=g(L);{var E=M=>{var H=J2(),ne=u(H,!0);d(H),F(de=>b(ne,de),[()=>t()("나뱃지")]),x(M,H)};Z(C,M=>{v().key===ke.uid&&M(E)})}d(j);var T=g(j,2),D=u(T,!0);d(T);var $=g(T,2);{var B=M=>{var H=X2(),ne=u(H,!0);d(H),F(()=>b(ne,v().data.email)),x(M,H)};Z($,M=>{v().data?.email&&M(B)})}var J=g($,2);{var te=M=>{var H=Z2(),ne=u(H,!0);d(H),F(()=>b(ne,v().data.bio)),x(M,H)};Z(J,M=>{v().data?.bio&&M(te)})}var K=g(J,2),le=u(K);d(K),d(N);var me=g(N,2),G=u(me);G.__click=M=>{M.stopPropagation(),o(v().key)};var Y=u(G,!0);d(G),d(me),d(w),F((M,H,ne,de)=>{b(L,`${M??""} `),b(D,v().key),b(le,`${H??""} ${ne??""}`),b(Y,de)},[()=>v().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(v().data?.createdAt),()=>t()("프로필보기")]),x(_,w)},loading:_=>{var v=tT(),w=g(u(v),2),k=u(w,!0);d(w),d(v),F(I=>b(k,I),[()=>t()("사용자목록로딩")]),x(_,v)},empty:_=>{var v=nT(),w=g(u(v),2),k=u(w,!0);d(w),d(v),F(I=>b(k,I),[()=>t()("등록된사용자없음")]),x(_,v)},error:(_,v=pn)=>{var w=rT(),k=g(u(w),2),I=u(k,!0);d(k);var S=g(k,2),P=u(S,!0);d(S),d(w),F(N=>{b(I,N),b(P,v())},[()=>t()("사용자목록로드실패")]),x(_,w)},loadingMore:_=>{var v=sT(),w=g(u(v),2),k=u(w,!0);d(w),d(v),F(I=>b(k,I),[()=>t()("더많은사용자로딩")]),x(_,v)},noMore:_=>{var v=iT(),w=u(v),k=u(w,!0);d(w),d(v),F(I=>b(k,I),[()=>t()("모든사용자로드완료")]),x(_,v)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),Qe(),s()}ct(["click","keydown"]);ve(Dv,{},[],[],!0);const Wd=ys([]);function qt(n,e="success",t=3e3){const r=Date.now();Wd.update(s=>[...s,{id:r,message:n,type:e}]),setTimeout(()=>{$v(r)},t)}function $v(n){Wd.update(e=>e.filter(t=>t.id!==n))}var aT=A('<img class="comment-avatar svelte-110g7vh"/>'),lT=A('<span class="comment-avatar-placeholder svelte-110g7vh"> </span>'),cT=A('<button class="reply-button svelte-110g7vh"> </button>'),dT=A('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div></div>'),uT=A('<div class="comment-item svelte-110g7vh"><div class="comment-header svelte-110g7vh"><div class="comment-author svelte-110g7vh"><!> <span class="comment-author-name svelte-110g7vh"> </span></div> <span class="comment-date svelte-110g7vh"> </span></div> <p class="comment-content svelte-110g7vh"> </p> <!></div> <!>',1);const hT={hash:"svelte-110g7vh",code:`\r
  /* 댓글 아이템 */.comment-item.svelte-110g7vh {padding:0.75rem;background-color:#f9fafb;border-radius:0.5rem;border-left:3px solid #e5e7eb;transition:all 0.2s ease;}.comment-item.svelte-110g7vh:hover {background-color:#f3f4f6;border-left-color:#3b82f6;}\r
\r
  /* 댓글 헤더 */.comment-header.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;}\r
\r
  /* 댓글 작성자 */.comment-author.svelte-110g7vh {display:flex;align-items:center;gap:0.5rem;}\r
\r
  /* 댓글 아바타 (이미지) */.comment-avatar.svelte-110g7vh {width:1.75rem;height:1.75rem;border-radius:9999px;object-fit:cover;}\r
\r
  /* 댓글 아바타 (플레이스홀더) */.comment-avatar-placeholder.svelte-110g7vh {width:1.75rem;height:1.75rem;border-radius:9999px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;}\r
\r
  /* 댓글 작성자 이름 */.comment-author-name.svelte-110g7vh {font-size:0.85rem;font-weight:600;color:#374151;}\r
\r
  /* 댓글 날짜 */.comment-date.svelte-110g7vh {font-size:0.75rem;color:#9ca3af;}\r
\r
  /* 댓글 내용 */.comment-content.svelte-110g7vh {margin:0;font-size:0.85rem;color:#4b5563;line-height:1.6;white-space:pre-wrap;word-break:break-word;}\r
\r
  /* 답글 버튼 */.reply-button.svelte-110g7vh {margin-top:0.5rem;padding:0.375rem 0.75rem;font-size:0.75rem;color:#3b82f6;background-color:transparent;border:1px solid #3b82f6;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.reply-button.svelte-110g7vh:hover {background-color:#3b82f6;color:#ffffff;}\r
\r
  /* 모달 배경 (backdrop) */.modal-backdrop.svelte-110g7vh {position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:1000;}\r
\r
  /* 모달 컨테이너 */.modal.svelte-110g7vh {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);max-width:500px;width:90%;max-height:90vh;overflow-y:auto;}\r
\r
  /* 모달 헤더 */.modal-header.svelte-110g7vh {display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-110g7vh h2:where(.svelte-110g7vh) {margin:0;font-size:1.25rem;font-weight:600;color:#111827;}\r
\r
  /* 모달 닫기 버튼 */.btn-close.svelte-110g7vh {background:none;border:none;font-size:1.5rem;color:#6b7280;cursor:pointer;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.25rem;transition:all 0.2s ease;}.btn-close.svelte-110g7vh:hover {background-color:#f3f4f6;color:#111827;}\r
\r
  /* 모달 내용 */.modal-content.svelte-110g7vh {padding:1.5rem;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.875rem;font-family:inherit;resize:vertical;transition:border-color 0.2s ease;}.modal-content.svelte-110g7vh textarea:where(.svelte-110g7vh):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}\r
\r
  /* 모달 푸터 */.modal-footer.svelte-110g7vh {display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding:1rem 1.5rem;border-top:1px solid #e5e7eb;}\r
\r
  /* 취소 버튼 */.btn-cancel.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#374151;background-color:#ffffff;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-cancel.svelte-110g7vh:hover {background-color:#f9fafb;border-color:#9ca3af;}\r
\r
  /* 전송 버튼 */.btn-submit.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#ffffff;background-color:#3b82f6;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-submit.svelte-110g7vh:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-110g7vh:disabled {opacity:0.6;cursor:not-allowed;}`};function Ov(n,e){Ye(e,!0),Je(n,hT);const t=()=>We(xt,"$t",s),r=()=>We(l,"$userStore",s),[s,i]=gt();let o=Ve(e,"comment",7),a=Ve(e,"userId",7,null);const l=Vd(`users/${o().uid}`);let c=ae(!1),h=ae(""),p=ae(!1);function f(){if(!a()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(c,!0)}async function _(){if(!m(h).trim()){qt(t()("댓글내용입력필요"),"error");return}y(p,!0);try{const G=await n2({parentCommentId:o().commentId,userId:a(),content:m(h)});G.success?(qt(t()("댓글이작성되었습니다"),"success"),y(c,!1),y(h,"")):qt(t()(G.error),"error")}catch(G){console.error("답글 생성 오류:",G),qt(t()("error.unknown"),"error")}finally{y(p,!1)}}function v(){y(c,!1),y(h,"")}var w={get comment(){return o()},set comment(G){o(G),je()},get userId(){return a()},set userId(G=null){a(G),je()}},k=uT(),I=pe(k),S=u(I),P=u(S),N=u(P);{var j=G=>{var Y=aT();F(M=>{Ee(Y,"src",r().data.photoUrl),Ee(Y,"alt",M)},[()=>r().data.displayName||t()("익명")]),x(G,Y)},L=G=>{var Y=lT(),M=u(Y,!0);d(Y),F(H=>b(M,H),[()=>(r().data?.displayName||t()("익명")).charAt(0).toUpperCase()]),x(G,Y)};Z(N,G=>{r().data?.photoUrl?G(j):G(L,!1)})}var C=g(N,2),E=u(C,!0);d(C),d(P);var T=g(P,2),D=u(T,!0);d(T),d(S);var $=g(S,2),B=u($,!0);d($);var J=g($,2);{var te=G=>{var Y=cT();Y.__click=f;var M=u(Y);d(Y),F(H=>b(M,`💬 ${H??""}`),[()=>t()("답글")]),x(G,Y)};Z(J,G=>{a()&&o().depth<12&&G(te)})}d(I);var K=g(I,2);{var le=G=>{var Y=dT();Y.__click=v;var M=u(Y);M.__click=we=>we.stopPropagation();var H=u(M),ne=u(H),de=u(ne,!0);d(ne);var R=g(ne,2);R.__click=v,d(H);var z=g(H,2),W=u(z);Tc(W),Cc(W,!0),d(z);var q=g(z,2),ee=u(q);ee.__click=v;var U=u(ee,!0);d(ee);var V=g(ee,2);V.__click=_;var X=u(V,!0);d(V),d(q),d(M),d(Y),F((we,re,fe,ue)=>{b(de,we),Ee(W,"placeholder",re),b(U,fe),V.disabled=m(p),b(X,ue)},[()=>t()("답글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>m(p)?t()("전송중"):t()("전송")]),Vr(W,()=>m(h),we=>y(h,we)),x(G,Y)};Z(K,G=>{m(c)&&G(le)})}F((G,Y)=>{Ra(I,`padding-left: ${(o().depth-1)*2}rem;`),b(E,G),b(D,Y),b(B,o().content)},[()=>r().data?.displayName||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),x(n,k);var me=Qe(w);return i(),me}ct(["click"]);ve(Ov,{comment:{},userId:{}},[],[],!0);var fT=A('<span class="count svelte-1fsdsc8"> </span>'),pT=A('<span class="count svelte-1fsdsc8"> </span>'),mT=A('<button class="action-btn edit icon-only svelte-1fsdsc8">✏️</button> <button class="action-btn delete icon-only svelte-1fsdsc8">🗑️</button>',1),vT=A('<div class="comments-list svelte-1fsdsc8"></div>'),gT=A('<div class="comments-section svelte-1fsdsc8"><button class="comments-toggle svelte-1fsdsc8"> </button> <!></div>'),_T=A('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content svelte-1fsdsc8"><textarea rows="5" class="svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div></div>'),bT=A('<div class="post-item svelte-1fsdsc8"><div class="post-item-top svelte-1fsdsc8"><span class="post-category-pill svelte-1fsdsc8"> </span> <span class="post-number svelte-1fsdsc8"> </span></div> <h3 class="post-title svelte-1fsdsc8"> </h3> <p class="post-content svelte-1fsdsc8"> </p> <div class="post-meta svelte-1fsdsc8"><div class="author-chip svelte-1fsdsc8"><span class="author-avatar svelte-1fsdsc8"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1fsdsc8"> </span></div> <div class="post-actions svelte-1fsdsc8"><div class="post-actions-left svelte-1fsdsc8"><button class="action-btn svelte-1fsdsc8"> <!></button> <button> <!></button> <button class="action-btn svelte-1fsdsc8"> </button> <button class="action-btn svelte-1fsdsc8"> </button></div> <div class="post-actions-right svelte-1fsdsc8"><!></div></div> <!></div> <!>',1);const wT={hash:"svelte-1fsdsc8",code:`.post-item.svelte-1fsdsc8 {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease,
      box-shadow 0.2s ease;margin:1rem 0;}.post-item.svelte-1fsdsc8:hover {transform:translateY(-2px);box-shadow:0 16px 28px rgba(17, 24, 39, 0.12);}.post-item-top.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;}.post-category-pill.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.35rem;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:600;color:#1d4ed8;background-color:#eff6ff;}.post-number.svelte-1fsdsc8 {font-weight:700;color:#9ca3af;font-size:0.9rem;}.post-title.svelte-1fsdsc8 {margin:0;font-size:1.2rem;font-weight:700;color:#111827;line-height:1.5;}.post-content.svelte-1fsdsc8 {margin:0;font-size:0.925rem;color:#4b5563;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}.post-meta.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:#6b7280;}.author-chip.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.5rem;}.author-avatar.svelte-1fsdsc8 {width:2rem;height:2rem;border-radius:9999px;background:#1d4ed8;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;}.post-date.svelte-1fsdsc8 {color:#9ca3af;font-variant-numeric:tabular-nums;}.post-actions.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.5rem;}.post-actions-left.svelte-1fsdsc8,
  .post-actions-right.svelte-1fsdsc8 {display:flex;align-items:center;gap:0.25rem;flex-wrap:wrap;}.action-btn.svelte-1fsdsc8 {display:inline-flex;align-items:center;gap:0.3rem;padding:0.4rem 0.65rem;border:none;border-radius:0.5rem;background-color:transparent;color:#6b7280;font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.action-btn.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}.action-btn.svelte-1fsdsc8:active {transform:scale(0.95);}

  /* 좋아요 한 버튼 강조 표시 */.action-btn.liked.svelte-1fsdsc8 {background-color:#fee2e2;color:#dc2626;font-weight:600;}.action-btn.liked.svelte-1fsdsc8:hover {background-color:#fecaca;color:#b91c1c;}.count.svelte-1fsdsc8 {font-weight:600;font-size:0.75rem;}

  /* === 모달 다이얼로그 스타일 === */

  /* 모달 배경 (반투명 오버레이) */.modal-backdrop.svelte-1fsdsc8 {position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;}

  /* 모달 컨테이너 */.modal.svelte-1fsdsc8 {background-color:#ffffff;border-radius:1rem;box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);max-width:500px;width:100%;max-height:90vh;overflow-y:auto;}

  /* 모달 헤더 */.modal-header.svelte-1fsdsc8 {display:flex;align-items:center;justify-content:space-between;padding:1.5rem;border-bottom:1px solid #e5e7eb;}.modal-header.svelte-1fsdsc8 h2:where(.svelte-1fsdsc8) {margin:0;font-size:1.25rem;font-weight:700;color:#111827;}.btn-close.svelte-1fsdsc8 {background:none;border:none;font-size:2rem;color:#6b7280;cursor:pointer;line-height:1;padding:0;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:0.5rem;transition:all 0.2s ease;}.btn-close.svelte-1fsdsc8:hover {background-color:#f3f4f6;color:#111827;}

  /* 모달 내용 */.modal-content.svelte-1fsdsc8 {padding:1.5rem;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8) {width:100%;padding:0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.95rem;font-family:inherit;resize:vertical;min-height:120px;transition:border-color 0.2s ease;}.modal-content.svelte-1fsdsc8 textarea:where(.svelte-1fsdsc8):focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}

  /* 모달 푸터 */.modal-footer.svelte-1fsdsc8 {display:flex;gap:0.75rem;padding:1.5rem;border-top:1px solid #e5e7eb;justify-content:flex-end;}.btn-cancel.svelte-1fsdsc8,
  .btn-submit.svelte-1fsdsc8 {padding:0.65rem 1.25rem;border-radius:0.5rem;font-size:0.95rem;font-weight:600;cursor:pointer;border:none;transition:all 0.2s ease;}.btn-cancel.svelte-1fsdsc8 {background-color:#f3f4f6;color:#374151;}.btn-cancel.svelte-1fsdsc8:hover {background-color:#e5e7eb;}.btn-submit.svelte-1fsdsc8 {background-color:#3b82f6;color:#ffffff;}.btn-submit.svelte-1fsdsc8:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-1fsdsc8:disabled {opacity:0.6;cursor:not-allowed;}.btn-submit.svelte-1fsdsc8:active:not(:disabled) {transform:scale(0.98);}

  /* === 댓글 목록 스타일 === */

  /* 댓글 섹션 */.comments-section.svelte-1fsdsc8 {margin-top:1rem;padding-top:1rem;border-top:1px solid #e5e7eb;}

  /* 댓글 토글 버튼 */.comments-toggle.svelte-1fsdsc8 {width:100%;padding:0.5rem 0.75rem;background:none;border:none;text-align:left;font-size:0.9rem;font-weight:600;color:#374151;cursor:pointer;display:flex;align-items:center;gap:0.5rem;transition:all 0.2s ease;}.comments-toggle.svelte-1fsdsc8:hover {color:#111827;background-color:#f9fafb;}

  /* 댓글 목록 */.comments-list.svelte-1fsdsc8 {margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;}`};function Mv(n,e){Ye(e,!0),Je(n,wT);const t=()=>We(xt,"$t",s),r=()=>We(p,"$myLikeStore",s),[s,i]=gt();let o=Ve(e,"itemData",7),a=Ve(e,"index",7),l=Ve(e,"category",7),c=Ve(e,"userId",7),h=Ve(e,"onLike",7,()=>{});const p=c()?XC(`post-likes/${o().postId}-${c()}`,0):null;let f=ae(!1),_=ae(""),v=ae(!1),w=ae(Bt([])),k=ae(!1);Rt(()=>{const O=r2(o().postId,he=>{y(w,he,!0)});return()=>{O()}});async function I(){if(!c()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const O=await a2(o().postId,c());O.success?(O.isLiked?qt(t()("좋아요를하였습니다"),"success"):qt(t()("좋아요를취소했습니다"),"info"),h()(o().postId)):qt(t()(O.error),"error")}catch(O){console.error("좋아요 오류:",O),qt(t()("error.unknown"),"error")}}function S(){if(!c()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(f,!0)}async function P(){if(!c()){qt(t()("로그인필요"),"error");return}if(!m(_).trim()){qt(t()("댓글내용입력필요"),"error");return}y(v,!0);try{const O=await t2({postId:o().postId,userId:c(),content:m(_)});O.success?(qt(t()("댓글이작성되었습니다"),"success"),y(f,!1),y(_,""),y(k,!0)):qt(t()(O.error),"error")}catch(O){console.error("댓글 생성 오류:",O),qt(t()("error.unknown"),"error")}finally{y(v,!1)}}function N(){y(f,!1),y(_,"")}var j={get itemData(){return o()},set itemData(O){o(O),je()},get index(){return a()},set index(O){a(O),je()},get category(){return l()},set category(O){l(O),je()},get userId(){return c()},set userId(O){c(O),je()},get onLike(){return h()},set onLike(O=()=>{}){h(O),je()}},L=bT(),C=pe(L),E=u(C),T=u(E),D=u(T,!0);d(T);var $=g(T,2),B=u($);d($),d(E);var J=g(E,2),te=u(J,!0);d(J);var K=g(J,2),le=u(K,!0);d(K);var me=g(K,2),G=u(me),Y=u(G),M=u(Y,!0);d(Y);var H=g(Y,2),ne=u(H,!0);d(H),d(G);var de=g(G,2),R=u(de,!0);d(de),d(me);var z=g(me,2),W=u(z),q=u(W);q.__click=S;var ee=u(q),U=g(ee);{var V=O=>{var he=fT(),_e=u(he,!0);d(he),F(()=>b(_e,m(w).length)),x(O,he)};Z(U,O=>{m(w).length>0&&O(V)})}d(q);var X=g(q,2);X.__click=I;var we=u(X),re=g(we);{var fe=O=>{var he=pT(),_e=u(he,!0);d(he),F(()=>b(_e,o().likeCount)),x(O,he)};Z(re,O=>{o().likeCount>0&&O(fe)})}d(X);var ue=g(X,2),Re=u(ue);d(ue);var $e=g(ue,2),Ge=u($e);d($e),d(W);var ze=g(W,2),Fe=u(ze);{var qe=O=>{var he=mT(),_e=pe(he),Ce=g(_e,2);F((Oe,tt)=>{Ee(_e,"title",Oe),Ee(Ce,"title",tt)},[()=>t()("수정"),()=>t()("삭제")]),x(O,he)};Z(Fe,O=>{c()===o().uid&&O(qe)})}d(ze),d(z);var De=g(z,2);{var et=O=>{var he=gT(),_e=u(he);_e.__click=()=>y(k,!m(k));var Ce=u(_e);d(_e);var Oe=g(_e,2);{var tt=it=>{var nt=vT();Mt(nt,21,()=>m(w),Me=>Me.commentId,(Me,Tt)=>{Ov(Me,{get comment(){return m(Tt)},get userId(){return c()}})}),d(nt),x(it,nt)};Z(Oe,it=>{m(k)&&it(tt)})}d(he),F(it=>b(Ce,`${m(k)?"▼":"▶"}
        ${it??""} (${m(w).length??""})`),[()=>t()("댓글")]),x(O,he)};Z(De,O=>{m(w).length>0&&O(et)})}d(C);var st=g(C,2);{var He=O=>{var he=_T();he.__click=N;var _e=u(he);_e.__click=se=>se.stopPropagation();var Ce=u(_e),Oe=u(Ce),tt=u(Oe,!0);d(Oe);var it=g(Oe,2);it.__click=N,d(Ce);var nt=g(Ce,2),Me=u(nt);Tc(Me),Cc(Me,!0),d(nt);var Tt=g(nt,2),kt=u(Tt);kt.__click=N;var Xt=u(kt,!0);d(kt);var oe=g(kt,2);oe.__click=P;var ie=u(oe,!0);d(oe),d(Tt),d(_e),d(he),F((se,Te,Ue,rt)=>{b(tt,se),Ee(Me,"placeholder",Te),b(Xt,Ue),oe.disabled=m(v),b(ie,rt)},[()=>t()("댓글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>m(v)?t()("전송중"):t()("전송")]),Vr(Me,()=>m(_),se=>y(_,se)),x(O,he)};Z(st,O=>{m(f)&&O(He)})}F((O,he,_e,Ce,Oe,tt,it,nt,Me,Tt,kt,Xt)=>{b(D,l()),b(B,`#${O??""}`),b(te,o().title),b(le,o().content),b(M,he),b(ne,_e),b(R,Ce),Ee(q,"title",Oe),b(ee,`💬 ${tt??""} `),nn(X,1,`action-btn ${(r()?.data??0)>=1?"liked":""}`,"svelte-1fsdsc8"),Ee(X,"title",it),b(we,`${(r()?.data??0)>=1?"❤️":"🤍"}
        ${nt??""} `),Ee(ue,"title",Me),b(Re,`💬 ${Tt??""}`),Ee($e,"title",kt),b(Ge,`🚨 ${Xt??""}`)},[()=>String(a()+1).padStart(2,"0"),()=>(o().author||t()("익명")).charAt(0).toUpperCase(),()=>o().author||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),x(n,L);var ge=Qe(j);return i(),ge}ct(["click"]);ve(Mv,{itemData:{},index:{},category:{},userId:{},onLike:{}},[],[],!0);var yT=A('<div class="loading-screen"><p> </p></div>'),xT=A("<button> </button>"),kT=A('<div class="empty-state"><div class="empty-illustration">🗂️</div> <h3 class="empty-title"> </h3> <p class="empty-message"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),ET=A('<div class="loading-state"><div class="spinner"></div> <p> </p></div>'),IT=A('<div class="error-state"><div class="error-icon">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),CT=A('<div class="loading-more"><div class="spinner small"></div> <p> </p></div>'),TT=A('<div class="no-more"><p> </p></div>'),ST=A("<option> </option>"),AT=A('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <select id="category" class="form-control svelte-1r1wwfo"><option> </option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),PT=A('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const RT={hash:"svelte-1r1wwfo",code:`\r
  /* 레이아웃 컨테이너 */.post-list-container.svelte-1r1wwfo {width:100%;max-width:72rem;margin:0 auto;\r
    /* 여백 최소화: 상/하 1.5rem, 좌/우 1rem */padding:1.5rem 1rem 2rem;display:flex;flex-direction:column;\r
    /* 섹션 간 여백 줄임 */gap:1.25rem;}\r
\r
  /* 상단 도구 모음 */.toolbar.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1rem 1.5rem;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:0.75rem;box-shadow:0 12px 30px rgba(15, 23, 42, 0.06);}.toolbar-left.svelte-1r1wwfo {display:flex;align-items:center;gap:0.75rem;flex:1;min-width:0;}.category-tabs.svelte-1r1wwfo {display:flex;gap:0.5rem;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;}.category-tabs.svelte-1r1wwfo::-webkit-scrollbar {display:none;}.tab.svelte-1r1wwfo {padding:0.55rem 0.9rem;border-radius:9999px;border:1px solid transparent;background-color:transparent;color:#4b5563;font-size:0.85rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}.tab.svelte-1r1wwfo:hover {background-color:#f3f4f6;}.tab.active.svelte-1r1wwfo {background-color:#111827;border-color:#111827;color:#ffffff;box-shadow:0 8px 18px rgba(17, 24, 39, 0.2);}\r
\r
  /* 글쓰기 버튼 */.btn-create-post.svelte-1r1wwfo {padding:0.65rem 1.25rem;background:linear-gradient(135deg, #3b82f6, #2563eb);color:#ffffff;border:none;border-radius:0.75rem;font-size:0.875rem;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:0.4rem;transition:transform 0.2s ease,\r
      box-shadow 0.2s ease;flex-shrink:0;}.btn-create-post.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 12px 24px rgba(37, 99, 235, 0.25);}.btn-create-post.ghost.svelte-1r1wwfo {background:#ffffff;color:#1d4ed8;border:1px solid #bfdbfe;box-shadow:none;}.btn-create-post.ghost.svelte-1r1wwfo:hover {background:#eff6ff;}\r
\r
  /* 게시글 목록 배경 */.post-list-surface.svelte-1r1wwfo {background:transparent;\r
    /* 테두리 제거 - 각 글 카드의 보더가 있으므로 불필요 */border:none;border-radius:1rem;\r
    /* 여백 최소화 */padding:0.5rem 0 1rem 0;box-shadow:none;\r
    /* 게시글 카드 사이 여백 추가: gap 사용 */\r
    /* DatabaseListView의 내부 구조와 무관하게 reliable하게 작동 */display:flex;flex-direction:column;gap:0.75rem;}\r
\r
  /* === Modal Dialog === */.modal-backdrop.svelte-1r1wwfo {position:fixed;inset:0;background:rgba(15, 23, 42, 0.45);display:flex;align-items:center;justify-content:center;padding:1.5rem;z-index:2000;backdrop-filter:blur(2px);}.modal.svelte-1r1wwfo {width:min(90vw, 480px);background:#ffffff;border-radius:1rem;box-shadow:0 25px 60px rgba(15, 23, 42, 0.22);display:flex;flex-direction:column;overflow:hidden;}.modal-header.svelte-1r1wwfo {display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:1.25rem 1.5rem 1rem;border-bottom:1px solid rgba(148, 163, 184, 0.25);}.modal-header.svelte-1r1wwfo h2:where(.svelte-1r1wwfo) {margin:0;font-size:1.1rem;font-weight:600;color:#0f172a;}.btn-close.svelte-1r1wwfo {border:none;background:transparent;font-size:1.5rem;line-height:1;cursor:pointer;color:#475569;transition:color 0.2s ease;}.btn-close.svelte-1r1wwfo:hover {color:#1e293b;}.modal-content.svelte-1r1wwfo {display:flex;flex-direction:column;gap:1rem;padding:1.25rem 1.5rem;}.form-group.svelte-1r1wwfo {display:flex;flex-direction:column;gap:0.5rem;}.form-group.svelte-1r1wwfo label:where(.svelte-1r1wwfo) {font-size:0.85rem;font-weight:600;color:#1f2937;}.form-control.svelte-1r1wwfo {width:100%;padding:0.75rem 0.9rem;font-size:0.9rem;border-radius:0.75rem;border:1px solid #d1d5db;background:#f9fafb;transition:border-color 0.2s ease,\r
      background-color 0.2s ease,\r
      box-shadow 0.2s ease;}.form-control.svelte-1r1wwfo:focus {outline:none;border-color:#2563eb;background:#ffffff;box-shadow:0 0 0 4px rgba(37, 99, 235, 0.15);}.form-control.textarea.svelte-1r1wwfo {resize:vertical;min-height:160px;}.modal-footer.svelte-1r1wwfo {display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding:1.25rem 1.5rem 1.5rem;background:rgba(248, 250, 252, 0.85);border-top:1px solid rgba(148, 163, 184, 0.25);}.btn-cancel.svelte-1r1wwfo,\r
  .btn-submit.svelte-1r1wwfo {padding:0.65rem 1.25rem;border-radius:0.75rem;font-size:0.9rem;font-weight:600;cursor:pointer;border:none;transition:transform 0.2s ease,\r
      box-shadow 0.2s ease,\r
      opacity 0.2s ease;}.btn-cancel.svelte-1r1wwfo {background:#e2e8f0;color:#1f2937;}.btn-cancel.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 10px 18px rgba(15, 23, 42, 0.12);}.btn-submit.svelte-1r1wwfo {background:linear-gradient(135deg, #2563eb, #1d4ed8);color:#ffffff;}.btn-submit.svelte-1r1wwfo:hover {transform:translateY(-1px);box-shadow:0 14px 24px rgba(37, 99, 235, 0.25);}.btn-cancel.svelte-1r1wwfo:disabled,\r
  .btn-submit.svelte-1r1wwfo:disabled {cursor:not-allowed;opacity:0.65;transform:none;box-shadow:none;}\r
\r
  @media (max-width: 640px) {.modal-backdrop.svelte-1r1wwfo {padding:1rem;}.modal.svelte-1r1wwfo {width:100%;}.modal-content.svelte-1r1wwfo {padding:1.1rem 1.25rem;}.modal-footer.svelte-1r1wwfo {padding:1rem 1.25rem 1.25rem;}\r
  }\r
\r
  /* 모바일 최적화: 화면 너비 640px 이하 */\r
  @media (max-width: 640px) {\r
    /* 컨테이너 패딩 최소화 */.post-list-container.svelte-1r1wwfo {padding:1rem 0.75rem 1.5rem;gap:0.875rem;}\r
\r
    /* 도구 모음 압축: 카테고리 탭과 글쓰기 버튼이 같은 줄에 표시 */.toolbar.svelte-1r1wwfo {padding:0.75rem 0.75rem;gap:0.5rem;align-items:stretch;}\r
\r
    /* 왼쪽 도구 모음 영역: 남은 공간을 모두 차지하여 카테고리 탭 확장 */.toolbar-left.svelte-1r1wwfo {gap:0.5rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}\r
\r
    /* 카테고리 탭 최소화 */.tab.svelte-1r1wwfo {padding:0.45rem 0.7rem;font-size:0.75rem;}\r
\r
    /* 글쓰기 버튼 모바일 최적화: 이모지만 표시하는 아이콘 모드 */.btn-create-post.svelte-1r1wwfo {padding:0.55rem 0.75rem;font-size:0.8rem;gap:0.25rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 매우 작은 화면: 480px 이하 */\r
  @media (max-width: 480px) {.post-list-container.svelte-1r1wwfo {padding:0.875rem 0.5rem 1.25rem;gap:0.75rem;}\r
\r
    /* 도구 모음: 최소 패딩 유지 */.toolbar.svelte-1r1wwfo {padding:0.625rem 0.5rem;gap:0.4rem;align-items:stretch;}\r
\r
    /* 왼쪽 도구 모음: flex 1로 확장하여 글쓰기 버튼 우측 배치 */.toolbar-left.svelte-1r1wwfo {gap:0.25rem;flex:1;min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch;}.tab.svelte-1r1wwfo {padding:0.4rem 0.6rem;font-size:0.7rem;}\r
\r
    /* 글쓰기 버튼: 최소 크기로 축소 */.btn-create-post.svelte-1r1wwfo {padding:0.5rem 0.65rem;font-size:0.75rem;gap:0.2rem;flex-shrink:0;min-width:fit-content;}\r
  }\r
\r
  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */`};function Uv(n,e){Ye(e,!0),Je(n,RT);const t=()=>We(xt,"$t",r),[r,s]=gt();let i=ae(null),o=ae(""),a=ae(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let c=ae(Bt(l.get("category")||"community")),h=ae(!1),p=ae(""),f=ae(""),_=ae(""),v=ae(!1);Rt(()=>{_n(t()("게시판"));const C=br.onAuthStateChanged(async E=>{if(E){y(i,E.uid,!0);const T=E.displayName||E.email||t()("익명");y(o,T,!0)}else y(i,null),y(o,"");y(a,!1)});return()=>C()});function w(){if(!m(i)){window.location.href="/user/login";return}y(h,!0)}function k(){y(h,!1),y(p,""),y(f,""),y(_,"")}async function I(){if(!m(p)){alert(t()("카테고리선택필요"));return}if(!m(f).trim()){alert(t()("제목입력필요"));return}if(!m(_).trim()){alert(t()("내용입력필요"));return}if(!m(i)||!m(o)){alert(t()("로그인정보확인불가"));return}y(v,!0);try{const C=await e2(m(p),m(i),m(o),m(f),m(_));C.success?(y(h,!1),y(p,""),y(f,""),y(_,""),qt(t()("게시글작성완료"),"success")):qt(t()("게시글저장실패",{error:C.error||"Unknown error"}),"error")}catch(C){console.error("게시글 저장 오류:",C),qt(t()("게시글저장중오류"),"error")}finally{y(v,!1)}}function S(C){y(c,C,!0),window.history.pushState({},"",`/post/list?category=${C}`)}var P=be(),N=pe(P);{var j=C=>{var E=yT(),T=u(E),D=u(T,!0);d(T),d(E),F($=>b(D,$),[()=>t()("로딩중")]),x(C,E)},L=C=>{var E=PT(),T=pe(E),D=u(T),$=u(D),B=u($);Mt(B,20,()=>Ah,Y=>Y,(Y,M)=>{var H=xT();H.__click=()=>S(M);var ne=u(H,!0);d(H),F(de=>{nn(H,1,`tab ${m(c)===M?"active":""}`,"svelte-1r1wwfo"),b(ne,de)},[()=>t()(`label.category.${M}`)]),x(Y,H)}),d(B),d($);var J=g($,2);J.__click=w;var te=u(J);d(J),d(D);var K=g(D,2),le=u(K);v_(le,()=>m(c),Y=>{{const M=(q,ee=pn,U=pn)=>{{let V=Ws(()=>({postId:ee().key,...ee().data}));Mv(q,{get itemData(){return m(V)},get index(){return U()},get category(){return ee().data.category},get userId(){return m(i)}})}},H=q=>{var ee=kT(),U=g(u(ee),2),V=u(U,!0);d(U);var X=g(U,2),we=u(X,!0);d(X);var re=g(X,2);re.__click=w;var fe=u(re);d(re),d(ee),F((ue,Re,$e)=>{b(V,ue),b(we,Re),b(fe,`✏️ ${$e??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),x(q,ee)},ne=q=>{var ee=ET(),U=g(u(ee),2),V=u(U,!0);d(U),d(ee),F(X=>b(V,X),[()=>t()("게시글로딩중")]),x(q,ee)},de=(q,ee=pn)=>{var U=IT(),V=g(u(U),2),X=u(V),we=u(X,!0);d(X);var re=g(X,2),fe=u(re,!0);d(re),d(V),d(U),F(ue=>{b(we,ue),b(fe,ee())},[()=>t()("게시글로드실패")]),x(q,U)},R=q=>{var ee=CT(),U=g(u(ee),2),V=u(U,!0);d(U),d(ee),F(X=>b(V,X),[()=>t()("더많은게시글로딩")]),x(q,ee)},z=q=>{var ee=TT(),U=u(ee),V=u(U,!0);d(U),d(ee),F(X=>b(V,X),[()=>t()("모든게시글확인")]),x(q,ee)};let W=Ws(()=>`${m(c)}-`);Hd(Y,{path:"posts",orderBy:"order",get sortPrefix(){return m(W)},reverse:!0,pageSize:20,item:M,empty:H,loading:ne,error:de,loadingMore:R,noMore:z,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}}),d(K),d(T);var me=g(T,2);{var G=Y=>{var M=AT();M.__click=()=>y(h,!1),M.__keydown=O=>O.key==="Escape"&&y(h,!1);var H=u(M);H.__click=O=>O.stopPropagation();var ne=u(H),de=u(ne),R=u(de,!0);d(de);var z=g(de,2);z.__click=()=>y(h,!1),d(ne);var W=g(ne,2),q=u(W),ee=u(q),U=u(ee,!0);d(ee);var V=g(ee,2),X=u(V),we=u(X,!0);d(X),X.value=X.__value="";var re=g(X);Mt(re,16,()=>Ah,O=>O,(O,he)=>{var _e=ST(),Ce=u(_e,!0);d(_e);var Oe={};F(tt=>{b(Ce,tt),Oe!==(Oe=he)&&(_e.value=(_e.__value=he)??"")},[()=>t()(`label.category.${he}`)]),x(O,_e)}),d(V),d(q);var fe=g(q,2),ue=u(fe),Re=u(ue,!0);d(ue);var $e=g(ue,2);Ys($e),d(fe);var Ge=g(fe,2),ze=u(Ge),Fe=u(ze,!0);d(ze);var qe=g(ze,2);Tc(qe),d(Ge),d(W);var De=g(W,2),et=u(De);et.__click=k;var st=u(et,!0);d(et);var He=g(et,2);He.__click=I;var ge=u(He,!0);d(He),d(De),d(H),d(M),F((O,he,_e,Ce,Oe,tt,it,nt,Me)=>{b(R,O),b(U,he),b(we,_e),b(Re,Ce),Ee($e,"placeholder",Oe),b(Fe,tt),Ee(qe,"placeholder",it),et.disabled=m(v),b(st,nt),He.disabled=m(v),b(ge,Me)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("카테고리선택"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>m(v)?t()("전송중"):t()("전송")]),Nc(V,()=>m(p),O=>y(p,O)),Vr($e,()=>m(f),O=>y(f,O)),Vr(qe,()=>m(_),O=>y(_,O)),x(Y,M)};Z(me,Y=>{m(h)&&Y(G)})}F(Y=>b(te,`✏️ ${Y??""}`),[()=>t()("글쓰기")]),x(C,E)};Z(N,C=>{m(a)?C(j):C(L,!1)})}x(n,P),Qe(),s()}ct(["click","keydown"]);ve(Uv,{},[],[],!0);var NT=A('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const LT={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function zv(n,e){Ye(e,!1),Je(n,LT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=NT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(zv,{},[],[],!0);var DT=A('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const $T={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function Fv(n,e){Ye(e,!1),Je(n,$T);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=DT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(Fv,{},[],[],!0);var OT=A('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const MT={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function qv(n,e){Ye(e,!1),Je(n,MT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=OT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(qv,{},[],[],!0);var UT=A('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const zT={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function jv(n,e){Ye(e,!1),Je(n,zT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=UT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(jv,{},[],[],!0);var FT=A('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const qT={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function Bv(n,e){Ye(e,!1),Je(n,qT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=FT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(Bv,{},[],[],!0);var jT=A('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const BT={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function Vv(n,e){Ye(e,!1),Je(n,BT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=jT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(Vv,{},[],[],!0);var VT=A('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const HT={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function Hv(n,e){Ye(e,!1),Je(n,HT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=VT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(Hv,{},[],[],!0);var WT=A('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const GT={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function Wv(n,e){Ye(e,!1),Je(n,GT);const t=()=>We(xt,"$t",r),[r,s]=gt();Rt(()=>{_n(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}ln();var o=WT(),a=u(o),l=u(a),c=g(u(l),2),h=u(c,!0);d(c);var p=g(c,2),f=u(p,!0);d(p),d(l);var _=g(l,2);_.__click=i;var v=u(_,!0);d(_),d(a),d(o),F((w,k,I)=>{b(h,w),b(f,k),b(v,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),x(n,o),Qe(),s()}ct(["click"]);ve(Wv,{},[],[],!0);var KT=A('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),YT=A('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),QT=A('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),JT=A('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),XT=A('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),ZT=A('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <button class="btn-generate btn-news svelte-uqnmwp"> </button> <!></div> <!> <!>',1),eS=A('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp">커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p> <p class="header-detail svelte-uqnmwp">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p></div> <!></div></div>');const tS={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 0.25rem 0;color:#6b7280;}.header-detail.svelte-uqnmwp {font-size:0.875rem;color:#9ca3af;margin-top:0.5rem;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;display:flex;flex-direction:column;gap:1rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 뉴스 버튼 스타일 (초록색) */.btn-news.svelte-uqnmwp {background-color:#10b981;}.btn-news.svelte-uqnmwp:hover:not(:disabled) {background-color:#059669;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function Gv(n,e){Ye(e,!0),Je(n,tS);const t=()=>We(xt,"$t",r),[r,s]=gt();let i=ae(!1),o=ae(!1),a=ae(Bt({current:0,total:0,category:""})),l=ae(Bt([])),c=ae(!1);Rt(()=>{_n(t()("테스트게시글생성타이틀"))});function h(T,D="info"){y(l,[...m(l),{message:T,type:D,time:new Date().toLocaleTimeString()}],!0)}const p={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]}},f={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function _(T){return T[Math.floor(Math.random()*T.length)]}function v(T){let D=T;for(const[$,B]of Object.entries(f)){const J=new RegExp(`\\{${$}\\}`,"g");D=D.replace(J,_(B))}return D}async function w(){if(!ke.isAuthenticated||!ke.uid){h(t()("로그인필요"),"error");return}y(i,!0),y(c,!1),y(l,[],!0),h(t()("테스트데이터생성시작"),"success"),h(t()("사용자정보",{user:ke.data?.displayName||ke.email}),"info");const T="community",D=t()("커뮤니티");y(a,{current:0,total:100,category:D},!0),h(t()("카테고리생성중",{category:D}),"info");const $=p.community;let B=0;const J=Date.now();for(let te=0;te<100;te++)try{const K=v(_($.titles)),le=`${te+1}. ${K}`,me=v(_($.contents)),G=J-Math.floor(Math.random()*30*24*60*60*1e3),Y={uid:ke.uid,title:le,content:me,author:ke.data?.displayName||ke.email||t()("익명"),category:T,order:`${T}-${G}`,createdAt:G,updatedAt:J,likeCount:0,commentCount:0},M=Ct(yt,"posts");await so(M,Y),B++,y(a,{...m(a),current:te+1},!0),(te+1)%20===0&&h(t()("생성진행",{current:te+1,total:100}),"success"),await new Promise(H=>setTimeout(H,50))}catch(K){h(t()("생성실패",{error:K.message}),"error")}h(t()("카테고리생성완료",{category:D,count:B}),"success"),h(t()("모든데이터생성완료"),"success"),h(t()("총100개생성"),"success"),y(i,!1),y(c,!0)}async function k(){if(!ke.isAuthenticated||!ke.uid){h(t()("로그인필요"),"error");return}y(o,!0),y(c,!1),y(l,[],!0),h("뉴스 게시판 글 생성 시작","success"),h(t()("사용자정보",{user:ke.data?.displayName||ke.email}),"info");const T="news",D="뉴스",$=200;y(a,{current:0,total:$,category:D},!0),h(`${D} 카테고리에 ${$}개 글 생성 중...`,"info");const B=p.news;let J=0;const te=Date.now();for(let K=0;K<$;K++)try{const le=v(_(B.titles)),me=`${K+1}. ${le}`,G=v(_(B.contents)),Y=te-($-1-K)*1e3,M={uid:ke.uid,title:me,content:G,author:ke.data?.displayName||ke.email||t()("익명"),category:T,order:`${T}-${Y}`,createdAt:Y,updatedAt:te,likeCount:0,commentCount:0},H=Ct(yt,"posts");await so(H,M),J++,y(a,{...m(a),current:K+1},!0),(K+1)%50===0&&h(`${K+1}/${$} 글 생성 완료`,"success"),await new Promise(ne=>setTimeout(ne,50))}catch(le){h(`글 생성 실패: ${le.message}`,"error")}h(`${D} 카테고리 생성 완료: ${J}개`,"success"),h("모든 뉴스 게시글 생성 완료!","success"),h(`총 ${J}/${$}개 생성됨`,"success"),y(o,!1),y(c,!0)}var I=eS(),S=u(I),P=u(S),N=u(P),j=u(N,!0);d(N),yn(4),d(P);var L=g(P,2);{var C=T=>{var D=KT(),$=u(D),B=u($,!0);d($);var J=g($,2),te=u(J,!0);d(J),d(D),F((K,le)=>{b(B,K),b(te,le)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),x(T,D)},E=T=>{var D=ZT(),$=pe(D),B=u($);B.__click=w;var J=u(B,!0);d(B);var te=g(B,2);te.__click=k;var K=u(te,!0);d(te);var le=g(te,2);{var me=ne=>{var de=YT(),R=u(de),z=u(R,!0);d(R);var W=g(R,2),q=u(W);d(W);var ee=g(W,2),U=u(ee);d(ee),d(de),F(()=>{b(z,m(a).category),Ra(q,`width: ${m(a).current/m(a).total*100}%`),b(U,`${m(a).current??""} / ${m(a).total??""}`)}),x(ne,de)};Z(le,ne=>{(m(i)||m(o))&&ne(me)})}d($);var G=g($,2);{var Y=ne=>{var de=JT(),R=u(de),z=u(R,!0);d(R);var W=g(R,2);Mt(W,21,()=>m(l),ir,(q,ee)=>{var U=QT(),V=u(U),X=u(V,!0);d(V);var we=g(V,2),re=u(we,!0);d(we),d(U),F(()=>{nn(U,1,`log-item log-${m(ee).type??""}`,"svelte-uqnmwp"),b(X,m(ee).time),b(re,m(ee).message)}),x(q,U)}),d(W),d(de),F(q=>b(z,q),[()=>t()("실행로그")]),x(ne,de)};Z(G,ne=>{m(l).length>0&&ne(Y)})}var M=g(G,2);{var H=ne=>{var de=XT(),R=u(de),z=u(R,!0);d(R);var W=g(R,2),q=u(W,!0);d(W),d(de),F((ee,U)=>{b(z,ee),b(q,U)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),x(ne,de)};Z(M,ne=>{m(c)&&ne(H)})}F(ne=>{B.disabled=m(i)||m(o),b(J,ne),te.disabled=m(i)||m(o),b(K,m(o)?"생성 중...":"뉴스 글 200개 생성 (1초 간격)")},[()=>m(i)?t()("생성중"):"커뮤니티 글 100개 생성"]),x(T,D)};Z(L,T=>{ke.isAuthenticated?T(E,!1):T(C)})}d(S),d(I),F(T=>b(j,T),[()=>t()("테스트게시글생성타이틀")]),x(n,I),Qe(),s()}ct(["click"]);ve(Gv,{},[],[],!0);var nS=A('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),rS=A('<div class="toast-container svelte-1cpok13"></div>');const sS={hash:"svelte-1cpok13",code:`\r
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
  }`};function Kv(n,e){Ye(e,!1),Je(n,sS);const t=()=>We(Wd,"$toasts",r),[r,s]=gt();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}ln();var o=rS();Mt(o,5,t,a=>a.id,(a,l)=>{var c=nS(),h=u(c),p=u(h,!0);d(h);var f=g(h,2),_=u(f,!0);d(f);var v=g(f,2);v.__click=()=>$v(m(l).id),d(c),F(w=>{nn(c,1,`toast toast-${m(l).type??""}`,"svelte-1cpok13"),b(p,w),b(_,m(l).message)},[()=>i(m(l).type)]),x(a,c)}),d(o),x(n,o),Qe(),s()}ct(["click"]);ve(Kv,{},[],[],!0);var iS=A('<div class="loading-state svelte-z18b0h"><div class="spinner svelte-z18b0h"></div> <p class="svelte-z18b0h"> </p></div>'),oS=A('<div class="error-state svelte-z18b0h"><p class="error-icon svelte-z18b0h">⚠️</p> <p class="error-text svelte-z18b0h"> </p> <p class="error-detail svelte-z18b0h"> </p></div>'),aS=A('<div class="stats-container svelte-z18b0h"><div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">👥</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">📝</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">💬</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">❤️</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div></div>'),lS=A('<div class="empty-state svelte-z18b0h"><p class="empty-icon svelte-z18b0h">📊</p> <p class="empty-text svelte-z18b0h"> </p></div>'),cS=A('<aside class="right-sidebar svelte-z18b0h"><h2 class="sidebar-title svelte-z18b0h"> </h2> <!></aside>');const dS={hash:"svelte-z18b0h",code:`\r
  /* ============================================================================\r
     오른쪽 사이드바\r
     ============================================================================ */.right-sidebar.svelte-z18b0h {position:fixed;top:4rem; /* topbar 높이만큼 아래 */right:0;width:280px;height:calc(100vh - 4rem);padding:1.5rem;background-color:#ffffff;border-left:1px solid #e5e7eb;overflow-y:auto;z-index:10;}\r
\r
  /* ============================================================================\r
     섹션 제목\r
     ============================================================================ */.sidebar-title.svelte-z18b0h {font-size:1.125rem;font-weight:700;color:#111827;margin:0 0 1rem 0;padding-bottom:0.75rem;border-bottom:2px solid #3b82f6;}\r
\r
  /* ============================================================================\r
     통계 컨테이너\r
     ============================================================================ */.stats-container.svelte-z18b0h {display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* ============================================================================\r
     통계 카드\r
     ============================================================================ */.stat-card.svelte-z18b0h {display:flex;align-items:center;gap:1rem;padding:1rem;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;transition:transform 0.2s, box-shadow 0.2s;}.stat-card.svelte-z18b0h:hover {transform:translateY(-2px);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);}\r
\r
  /* 아이콘 */.stat-icon.svelte-z18b0h {font-size:2rem;flex-shrink:0;}\r
\r
  /* 컨텐츠 */.stat-content.svelte-z18b0h {flex:1;min-width:0;}.stat-label.svelte-z18b0h {font-size:0.875rem;font-weight:600;color:#6b7280;margin:0 0 0.25rem 0;}.stat-value.svelte-z18b0h {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}\r
\r
  /* ============================================================================\r
     로딩 상태\r
     ============================================================================ */.loading-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.spinner.svelte-z18b0h {width:32px;height:32px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;\r
    animation: svelte-z18b0h-spin 0.8s linear infinite;margin-bottom:0.75rem;}\r
\r
  @keyframes svelte-z18b0h-spin {\r
    to {\r
      transform: rotate(360deg);\r
    }\r
  }.loading-state.svelte-z18b0h p:where(.svelte-z18b0h) {color:#6b7280;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     에러 상태\r
     ============================================================================ */.error-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.error-icon.svelte-z18b0h {font-size:2.5rem;margin-bottom:0.75rem;}.error-text.svelte-z18b0h {color:#dc2626;font-size:0.875rem;font-weight:600;margin:0 0 0.5rem 0;}.error-detail.svelte-z18b0h {color:#9ca3af;font-size:0.75rem;margin:0;word-break:break-word;}\r
\r
  /* ============================================================================\r
     빈 상태\r
     ============================================================================ */.empty-state.svelte-z18b0h {display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;text-align:center;}.empty-icon.svelte-z18b0h {font-size:2.5rem;margin-bottom:0.75rem;}.empty-text.svelte-z18b0h {color:#6b7280;font-size:0.875rem;margin:0;}\r
\r
  /* ============================================================================\r
     반응형 (모바일)\r
     ============================================================================ */\r
  @media (max-width: 1024px) {.right-sidebar.svelte-z18b0h {display:none; /* 태블릿/모바일에서는 사이드바 숨김 */}\r
  }`};function Yv(n,e){Ye(e,!1),Je(n,dS);const t=()=>We(xt,"$t",s),r=()=>We(o,"$statsStore",s),[s,i]=gt(),o=Vd("stats/counters");function a(v){return v==null?"0":v.toLocaleString()}ln();var l=cS(),c=u(l),h=u(c,!0);d(c);var p=g(c,2);{var f=v=>{var w=iS(),k=g(u(w),2),I=u(k,!0);d(k),d(w),F(S=>b(I,S),[()=>t()("통계로딩중")]),x(v,w)},_=v=>{var w=be(),k=pe(w);{var I=P=>{var N=oS(),j=g(u(N),2),L=u(j,!0);d(j);var C=g(j,2),E=u(C,!0);d(C),d(N),F(T=>{b(L,T),b(E,r().error.message)},[()=>t()("통계로드실패")]),x(P,N)},S=P=>{var N=be(),j=pe(N);{var L=E=>{const T=Ta(()=>r().data);var D=aS(),$=u(D),B=g(u($),2),J=u(B),te=u(J,!0);d(J);var K=g(J,2),le=u(K,!0);d(K),d(B),d($);var me=g($,2),G=g(u(me),2),Y=u(G),M=u(Y,!0);d(Y);var H=g(Y,2),ne=u(H,!0);d(H),d(G),d(me);var de=g(me,2),R=g(u(de),2),z=u(R),W=u(z,!0);d(z);var q=g(z,2),ee=u(q,!0);d(q),d(R),d(de);var U=g(de,2),V=g(u(U),2),X=u(V),we=u(X,!0);d(X);var re=g(X,2),fe=u(re,!0);d(re),d(V),d(U),d(D),F((ue,Re,$e,Ge,ze,Fe,qe,De)=>{b(te,ue),b(le,Re),b(M,$e),b(ne,Ge),b(W,ze),b(ee,Fe),b(we,qe),b(fe,De)},[()=>t()("전체사용자"),()=>a(m(T).user),()=>t()("전체글"),()=>a(m(T).post),()=>t()("전체댓글"),()=>a(m(T).comment),()=>t()("전체좋아요"),()=>a(m(T).like)]),x(E,D)},C=E=>{var T=lS(),D=g(u(T),2),$=u(D,!0);d(D),d(T),F(B=>b($,B),[()=>t()("통계데이터없음")]),x(E,T)};Z(j,E=>{r().data?E(L):E(C,!1)},!0)}x(P,N)};Z(k,P=>{r().error?P(I):P(S,!1)},!0)}x(v,w)};Z(p,v=>{r().loading?v(f):v(_,!1)})}d(l),F(v=>b(h,v),[()=>t()("전체통계")]),x(n,l),Qe(),i()}ve(Yv,{},[],[],!0);var uS=A('<sns-layout><main class="content-with-sidebar svelte-1hwhcgc"><!></main> <!></sns-layout> <!> <test-fab></test-fab>',3);const hS={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 (사이드바와 함께) */.content-with-sidebar.svelte-1hwhcgc {width:100%;padding:0 20px;box-sizing:border-box;}

  /* 반응형 */
  @media (max-width: 1024px) {.content-with-sidebar.svelte-1hwhcgc {padding-right:20px;}
  }`};function Qv(n){Je(n,hS);let e=ae(Bt(window.location.pathname));function t(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var r=uS(),s=pe(r),i=u(s),o=u(i);{var a=p=>{Rv(p,{})},l=p=>{var f=be(),_=pe(f);{var v=k=>{Nv(k,{})},w=k=>{var I=be(),S=pe(I);{var P=j=>{Lv(j,{})},N=j=>{var L=be(),C=pe(L);{var E=D=>{Dv(D,{})},T=D=>{var $=be(),B=pe($);{var J=K=>{Uv(K,{})},te=K=>{var le=be(),me=pe(le);{var G=M=>{zv(M,{})},Y=M=>{var H=be(),ne=pe(H);{var de=z=>{Fv(z,{})},R=z=>{var W=be(),q=pe(W);{var ee=V=>{qv(V,{})},U=V=>{var X=be(),we=pe(X);{var re=ue=>{jv(ue,{})},fe=ue=>{var Re=be(),$e=pe(Re);{var Ge=Fe=>{Bv(Fe,{})},ze=Fe=>{var qe=be(),De=pe(qe);{var et=He=>{Vv(He,{})},st=He=>{var ge=be(),O=pe(ge);{var he=Ce=>{Hv(Ce,{})},_e=Ce=>{var Oe=be(),tt=pe(Oe);{var it=Me=>{Wv(Me,{})},nt=Me=>{var Tt=be(),kt=pe(Tt);{var Xt=ie=>{Gv(ie,{})},oe=ie=>{Pv(ie,{})};Z(kt,ie=>{m(e)==="/dev/generate-posts"?ie(Xt):ie(oe,!1)},!0)}x(Me,Tt)};Z(tt,Me=>{m(e)==="/contact"?Me(it):Me(nt,!1)},!0)}x(Ce,Oe)};Z(O,Ce=>{m(e)==="/privacy"?Ce(he):Ce(_e,!1)},!0)}x(He,ge)};Z(De,He=>{m(e)==="/terms"?He(et):He(st,!1)},!0)}x(Fe,qe)};Z($e,Fe=>{m(e)==="/help"?Fe(Ge):Fe(ze,!1)},!0)}x(ue,Re)};Z(we,ue=>{m(e)==="/about"?ue(re):ue(fe,!1)},!0)}x(V,X)};Z(q,V=>{m(e)==="/settings"?V(ee):V(U,!1)},!0)}x(z,W)};Z(ne,z=>{m(e)==="/chat/list"?z(de):z(R,!1)},!0)}x(M,H)};Z(me,M=>{m(e).startsWith("/post/detail/")?M(G):M(Y,!1)},!0)}x(K,le)};Z(B,K=>{m(e)==="/post/list"?K(J):K(te,!1)},!0)}x(D,$)};Z(C,D=>{m(e)==="/user/list"?D(E):D(T,!1)},!0)}x(j,L)};Z(S,j=>{m(e)==="/user/profile"?j(P):j(N,!1)},!0)}x(k,I)};Z(_,k=>{m(e)==="/menu"?k(v):k(w,!1)},!0)}x(p,f)};Z(o,p=>{m(e)==="/user/login"?p(a):p(l,!1)})}d(i);var c=g(i,2);Yv(c,{}),d(s);var h=g(s,2);Kv(h,{}),g(h,2),x(n,r)}ve(Qv,{},[],[],!0);Pc(Qv,{target:document.getElementById("app")});
