(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Df=!1;var Vc=Array.isArray,E_=Array.prototype.indexOf,Bc=Array.from,ea=Object.keys,to=Object.defineProperty,br=Object.getOwnPropertyDescriptor,$f=Object.getOwnPropertyDescriptors,I_=Object.prototype,C_=Array.prototype,Hc=Object.getPrototypeOf,Xu=Object.isExtensible;function Ei(n){return typeof n=="function"}const Pn=()=>{};function T_(n){return n()}function ta(n){for(var e=0;e<n.length;e++)n[e]()}function qf(){var n,e,t=new Promise((r,s)=>{n=r,e=s});return{promise:t,resolve:n,reject:e}}function S_(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const dn=2,Wc=4,Da=8,Pr=16,Rr=32,ss=64,$a=128,on=1024,En=2048,Nr=4096,Rn=8192,_r=16384,Gc=32768,Er=65536,Zu=1<<17,A_=1<<18,Ss=1<<19,Of=1<<20,On=256,na=512,ra=32768,Xl=1<<21,Kc=1<<22,vs=1<<23,nr=Symbol("$state"),Yc=Symbol("legacy props"),P_=Symbol(""),js=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},R_=1,Qc=3,ui=8;function Mf(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function N_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function L_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function D_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $_(n){throw new Error("https://svelte.dev/e/effect_orphan")}function q_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function O_(){throw new Error("https://svelte.dev/e/hydration_failed")}function M_(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function z_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function F_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function U_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function j_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qa=1,Oa=2,zf=4,V_=8,B_=16,H_=1,W_=2,Ff=4,G_=8,K_=16,Y_=1,Q_=2,Uf="[",Ma="[!",Jc="]",Xs={},Jt=Symbol(),J_="http://www.w3.org/1999/xhtml",X_="http://www.w3.org/2000/svg",Z_="@attach";function za(n){console.warn("https://svelte.dev/e/hydration_mismatch")}function e1(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function t1(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let xe=!1;function mn(n){xe=n}let Qe;function en(n){if(n===null)throw za(),Xs;return Qe=n}function Ir(){return en(lr(Qe))}function c(n){if(xe){if(lr(Qe)!==null)throw za(),Xs;Qe=n}}function At(n=1){if(xe){for(var e=n,t=Qe;e--;)t=lr(t);Qe=t}}function sa(n=!0){for(var e=0,t=Qe;;){if(t.nodeType===ui){var r=t.data;if(r===Jc){if(e===0)return t;e-=1}else(r===Uf||r===Ma)&&(e+=1)}var s=lr(t);n&&t.remove(),t=s}}function jf(n){if(!n||n.nodeType!==ui)throw za(),Xs;return n.data}function Vf(n){return n===this.v}function Bf(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Hf(n){return!Bf(n,this.v)}let hi=!1,n1=!1;function r1(){hi=!0}let qt=null;function Zs(n){qt=n}function dt(n,e=!1,t){qt={p:qt,i:!1,c:null,e:null,s:n,x:null,l:hi&&!e?{s:null,u:null,$:[]}:null}}function ut(n){var e=qt,t=e.e;if(t!==null){e.e=null;for(var r of t)cp(r)}return n!==void 0&&(e.x=n),e.i=!0,qt=e.p,n??{}}function fi(){return!hi||qt!==null&&qt.l===null}let hs=[];function Wf(){var n=hs;hs=[],ta(n)}function is(n){if(hs.length===0&&!Ui){var e=hs;queueMicrotask(()=>{e===hs&&Wf()})}hs.push(n)}function s1(){for(;hs.length>0;)Wf()}function Gf(n){var e=qe;if(e===null)return Ke.f|=vs,n;if((e.f&Gc)===0){if((e.f&$a)===0)throw n;e.b.error(n)}else ei(n,e)}function ei(n,e){for(;e!==null;){if((e.f&$a)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const zo=new Set;let _t=null,Fi=null,jn=null,er=[],Fa=null,Zl=!1,Ui=!1;class Hn{committed=!1;current=new Map;previous=new Map;#t=new Set;#e=new Set;#r=0;#s=0;#l=null;#o=[];#i=[];skipped_effects=new Set;is_fork=!1;process(e){er=[],Fi=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#n(r,t);this.is_fork||this.#c(),this.#s>0||this.is_fork?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(Fi=this,_t=null,eh(t.render_effects),eh(t.effects),Fi=null,this.#l?.resolve()),jn=null}#n(e,t){e.f^=on;for(var r=e.first;r!==null;){var s=r.f,i=(s&(Rr|ss))!==0,o=i&&(s&on)!==0,a=o||(s&Rn)!==0||this.skipped_effects.has(r);if((r.f&$a)!==0&&r.b?.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!a&&r.fn!==null){i?r.f^=on:(s&Wc)!==0?t.effects.push(r):yo(r)&&((r.f&Pr)!==0&&t.block_effects.push(r),ro(r));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)u===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),r=u.next,u=u.parent}}#a(e){for(const t of e)((t.f&En)!==0?this.#o:this.#i).push(t),cn(t,on)}capture(e,t){this.previous.has(e)||this.previous.set(e,t),this.current.set(e,e.v),jn?.set(e,e.v)}activate(){_t=this}deactivate(){_t=null,jn=null}flush(){if(this.activate(),er.length>0){if(Kf(),_t!==null&&_t!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#e)e(this);this.#e.clear()}#c(){if(this.#s===0){for(const e of this.#t)e();this.#t.clear()}this.#r===0&&this.#d()}#d(){if(zo.size>1){this.previous.clear();var e=jn,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of zo){if(s===this){t=!1;continue}const i=[];for(const[a,l]of this.current){if(s.current.has(a))if(t&&l!==s.current.get(a))s.current.set(a,l);else continue;i.push(a)}if(i.length===0)continue;const o=[...s.current.keys()].filter(a=>!this.current.has(a));if(o.length>0){const a=new Set,l=new Map;for(const u of i)Yf(u,o,a,l);if(er.length>0){_t=s,s.apply();for(const u of er)s.#n(u,r);er=[],s.deactivate()}}}_t=null,jn=e}this.committed=!0,zo.delete(this)}increment(e){this.#r+=1,e&&(this.#s+=1)}decrement(e){this.#r-=1,e&&(this.#s-=1),this.revive()}revive(){for(const e of this.#o)cn(e,En),bs(e);for(const e of this.#i)cn(e,Nr),bs(e);this.#o=[],this.#i=[],this.flush()}oncommit(e){this.#t.add(e)}ondiscard(e){this.#e.add(e)}settled(){return(this.#l??=qf()).promise}static ensure(){if(_t===null){const e=_t=new Hn;zo.add(_t),Ui||Hn.enqueue(()=>{_t===e&&e.flush()})}return _t}static enqueue(e){is(e)}apply(){}}function Fe(n){var e=Ui;Ui=!0;try{for(var t;;){if(s1(),er.length===0&&(_t?.flush(),er.length===0))return Fa=null,t;Kf()}}finally{Ui=e}}function Kf(){var n=Ws;Zl=!0;try{var e=0;for(rh(!0);er.length>0;){var t=Hn.ensure();if(e++>1e3){var r,s;i1()}t.process(er),Br.clear()}}finally{Zl=!1,rh(n),Fa=null}}function i1(){try{q_()}catch(n){ei(n,Fa)}}let fr=null;function eh(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(_r|Rn))===0&&yo(r)&&(fr=new Set,ro(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?hp(r):r.fn=null),fr?.size>0)){Br.clear();for(const s of fr){if((s.f&(_r|Rn))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)fr.has(o)&&(fr.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(_r|Rn))===0&&ro(l)}}fr.clear()}}fr=null}}function Yf(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const s of n.reactions){const i=s.f;(i&dn)!==0?Yf(s,e,t,r):(i&(Kc|Pr))!==0&&(i&En)===0&&Qf(s,e,r)&&(cn(s,En),bs(s))}}function Qf(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const s of n.deps){if(e.includes(s))return!0;if((s.f&dn)!==0&&Qf(s,e,t))return t.set(s,!0),!0}return t.set(n,!1),!1}function bs(n){for(var e=Fa=n;e.parent!==null;){e=e.parent;var t=e.f;if(Zl&&e===qe&&(t&Pr)!==0)return;if((t&(ss|Rr))!==0){if((t&on)===0)return;e.f^=on}}er.push(e)}function o1(n){let e=0,t=Qr(0),r;return()=>{m1()&&(v(t),Va(()=>(e===0&&(r=ar(()=>n(()=>ji(t)))),e+=1,()=>{is(()=>{e-=1,e===0&&(r?.(),r=void 0,ji(t))})})))}}var a1=Er|Ss|$a;function l1(n,e,t){new c1(n,e,t)}class c1{parent;#t=!1;#e;#r=xe?Qe:null;#s;#l;#o;#i=null;#n=null;#a=null;#c=null;#d=null;#f=0;#u=0;#p=!1;#h=null;#_=o1(()=>(this.#h=Qr(this.#f),()=>{this.#h=null}));constructor(e,t,r){this.#e=e,this.#s=t,this.#l=r,this.parent=qe.b,this.#t=!!this.#s.pending,this.#o=Lr(()=>{if(qe.b=this,xe){const i=this.#r;Ir(),i.nodeType===ui&&i.data===Ma?this.#y():this.#w()}else{var s=this.#g();try{this.#i=yn(()=>r(s))}catch(i){this.error(i)}this.#u>0?this.#m():this.#t=!1}return()=>{this.#d?.remove()}},a1),xe&&(this.#e=Qe)}#w(){try{this.#i=yn(()=>this.#l(this.#e))}catch(e){this.error(e)}this.#t=!1}#y(){const e=this.#s.pending;e&&(this.#n=yn(()=>e(this.#e)),Hn.enqueue(()=>{var t=this.#g();this.#i=this.#v(()=>(Hn.ensure(),yn(()=>this.#l(t)))),this.#u>0?this.#m():(Hs(this.#n,()=>{this.#n=null}),this.#t=!1)}))}#g(){var e=this.#e;return this.#t&&(this.#d=Mn(),this.#e.before(this.#d),e=this.#d),e}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#v(e){var t=qe,r=Ke,s=qt;In(this.#o),ln(this.#o),Zs(this.#o.ctx);try{return e()}catch(i){return Gf(i),null}finally{In(t),ln(r),Zs(s)}}#m(){const e=this.#s.pending;this.#i!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#d),vp(this.#i,this.#c)),this.#n===null&&(this.#n=yn(()=>e(this.#e)))}#b(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(e);return}this.#u+=e,this.#u===0&&(this.#t=!1,this.#n&&Hs(this.#n,()=>{this.#n=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#b(e),this.#f+=e,this.#h&&ti(this.#h,this.#f)}get_effect_pending(){return this.#_(),v(this.#h)}error(e){var t=this.#s.onerror;let r=this.#s.failed;if(this.#p||!t&&!r)throw e;this.#i&&(Gt(this.#i),this.#i=null),this.#n&&(Gt(this.#n),this.#n=null),this.#a&&(Gt(this.#a),this.#a=null),xe&&(en(this.#r),At(),en(sa()));var s=!1,i=!1;const o=()=>{if(s){t1();return}s=!0,i&&j_(),Hn.ensure(),this.#f=0,this.#a!==null&&Hs(this.#a,()=>{this.#a=null}),this.#t=this.has_pending_snippet(),this.#i=this.#v(()=>(this.#p=!1,yn(()=>this.#l(this.#e)))),this.#u>0?this.#m():this.#t=!1};var a=Ke;try{ln(null),i=!0,t?.(e,o),i=!1}catch(l){ei(l,this.#o&&this.#o.parent)}finally{ln(a)}r&&is(()=>{this.#a=this.#v(()=>{Hn.ensure(),this.#p=!0;try{return yn(()=>{r(this.#e,()=>e,()=>o)})}catch(l){return ei(l,this.#o.parent),null}finally{this.#p=!1}})})}}function Jf(n,e,t,r){const s=fi()?bo:Ua;if(t.length===0&&n.length===0){r(e.map(s));return}var i=_t,o=qe,a=d1();function l(){Promise.all(t.map(u=>u1(u))).then(u=>{a();try{r([...e.map(s),...u])}catch(f){(o.f&_r)===0&&ei(f,o)}i?.deactivate(),ia()}).catch(u=>{ei(u,o)})}n.length>0?Promise.all(n).then(()=>{a();try{return l()}finally{i?.deactivate(),ia()}}):l()}function d1(){var n=qe,e=Ke,t=qt,r=_t;return function(i=!0){In(n),ln(e),Zs(t),i&&r?.activate()}}function ia(){In(null),ln(null),Zs(null)}function bo(n){var e=dn|En,t=Ke!==null&&(Ke.f&dn)!==0?Ke:null;return qe===null||t!==null&&(t.f&On)!==0?e|=On:qe.f|=Ss,{ctx:qt,deps:null,effects:null,equals:Vf,f:e,fn:n,reactions:null,rv:0,v:Jt,wv:0,parent:t??qe,ac:null}}function u1(n,e){let t=qe;t===null&&N_();var r=t.b,s=void 0,i=Qr(Jt),o=!Ke,a=new Map;return w1(()=>{var l=qf();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{u===_t&&u.committed&&u.deactivate(),ia()})}catch(p){l.reject(p),ia()}var u=_t;if(o){var f=!r.is_pending();r.update_pending_count(1),u.increment(f),a.get(u)?.reject(js),a.delete(u),a.set(u,l)}const m=(p,b=void 0)=>{if(u.activate(),b)b!==js&&(i.f|=vs,ti(i,b));else{(i.f&vs)!==0&&(i.f^=vs),ti(i,p);for(const[g,w]of a){if(a.delete(g),g===u)break;w.reject(js)}}o&&(r.update_pending_count(-1),u.decrement(f))};l.promise.then(m,p=>m(null,p||"unknown"))}),_o(()=>{for(const l of a.values())l.reject(js)}),new Promise(l=>{function u(f){function m(){f===s?l(i):u(s)}f.then(m,m)}u(s)})}function _s(n){const e=bo(n);return mp(e),e}function Ua(n){const e=bo(n);return e.equals=Hf,e}function Xf(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Gt(e[t])}}function h1(n){for(var e=n.parent;e!==null;){if((e.f&dn)===0)return e;e=e.parent}return null}function Xc(n){var e,t=qe;In(h1(n));try{n.f&=~ra,Xf(n),e=wp(n)}finally{In(t)}return e}function Zf(n){var e=Xc(n);if(n.equals(e)||(n.v=e,n.wv=bp()),!As)if(jn!==null)jn.set(n,n.v);else{var t=(Ur||(n.f&On)!==0)&&n.deps!==null?Nr:on;cn(n,t)}}let ec=new Set;const Br=new Map;let ep=!1;function Qr(n,e){var t={f:0,v:n,reactions:null,equals:Vf,rv:0,wv:0};return t}function ne(n,e){const t=Qr(n);return mp(t),t}function Zc(n,e=!1,t=!0){const r=Qr(n);return e||(r.equals=Hf),hi&&t&&qt!==null&&qt.l!==null&&(qt.l.s??=[]).push(r),r}function y(n,e,t=!1){Ke!==null&&(!Vn||(Ke.f&Zu)!==0)&&fi()&&(Ke.f&(dn|Pr|Kc|Zu))!==0&&!wr?.includes(n)&&U_();let r=t?an(e):e;return ti(n,r)}function ti(n,e){if(!n.equals(e)){var t=n.v;As?Br.set(n,e):Br.set(n,t),n.v=e;var r=Hn.ensure();r.capture(n,t),(n.f&dn)!==0&&((n.f&En)!==0&&Xc(n),cn(n,(n.f&On)===0?on:Nr)),n.wv=bp(),tp(n,En),fi()&&qe!==null&&(qe.f&on)!==0&&(qe.f&(Rr|ss))===0&&($n===null?k1([n]):$n.push(n)),!r.is_fork&&ec.size>0&&!ep&&f1()}return e}function f1(){ep=!1;const n=Array.from(ec);for(const e of n)(e.f&on)!==0&&cn(e,Nr),yo(e)&&ro(e);ec.clear()}function tc(n,e=1){var t=v(n),r=e===1?t++:t--;return y(n,t),r}function ji(n){y(n,n.v+1)}function tp(n,e){var t=n.reactions;if(t!==null)for(var r=fi(),s=t.length,i=0;i<s;i++){var o=t[i],a=o.f;if(!(!r&&o===qe)){var l=(a&En)===0;l&&cn(o,e),(a&dn)!==0?(a&ra)===0&&(o.f|=ra,tp(o,Nr)):l&&((a&Pr)!==0&&fr!==null&&fr.add(o),bs(o))}}}function an(n){if(typeof n!="object"||n===null||nr in n)return n;const e=Hc(n);if(e!==I_&&e!==C_)return n;var t=new Map,r=Vc(n),s=ne(0),i=ms,o=a=>{if(ms===i)return a();var l=Ke,u=ms;ln(null),ih(i);var f=a();return ln(l),ih(u),f};return r&&t.set("length",ne(n.length)),new Proxy(n,{defineProperty(a,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&z_();var f=t.get(l);return f===void 0?f=o(()=>{var m=ne(u.value);return t.set(l,m),m}):y(f,u.value,!0),!0},deleteProperty(a,l){var u=t.get(l);if(u===void 0){if(l in a){const f=o(()=>ne(Jt));t.set(l,f),ji(s)}}else y(u,Jt),ji(s);return!0},get(a,l,u){if(l===nr)return n;var f=t.get(l),m=l in a;if(f===void 0&&(!m||br(a,l)?.writable)&&(f=o(()=>{var b=an(m?a[l]:Jt),g=ne(b);return g}),t.set(l,f)),f!==void 0){var p=v(f);return p===Jt?void 0:p}return Reflect.get(a,l,u)},getOwnPropertyDescriptor(a,l){var u=Reflect.getOwnPropertyDescriptor(a,l);if(u&&"value"in u){var f=t.get(l);f&&(u.value=v(f))}else if(u===void 0){var m=t.get(l),p=m?.v;if(m!==void 0&&p!==Jt)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(a,l){if(l===nr)return!0;var u=t.get(l),f=u!==void 0&&u.v!==Jt||Reflect.has(a,l);if(u!==void 0||qe!==null&&(!f||br(a,l)?.writable)){u===void 0&&(u=o(()=>{var p=f?an(a[l]):Jt,b=ne(p);return b}),t.set(l,u));var m=v(u);if(m===Jt)return!1}return f},set(a,l,u,f){var m=t.get(l),p=l in a;if(r&&l==="length")for(var b=u;b<m.v;b+=1){var g=t.get(b+"");g!==void 0?y(g,Jt):b in a&&(g=o(()=>ne(Jt)),t.set(b+"",g))}if(m===void 0)(!p||br(a,l)?.writable)&&(m=o(()=>ne(void 0)),y(m,an(u)),t.set(l,m));else{p=m.v!==Jt;var w=o(()=>an(u));y(m,w)}var k=Reflect.getOwnPropertyDescriptor(a,l);if(k?.set&&k.set.call(f,u),!p){if(r&&typeof l=="string"){var I=t.get("length"),P=Number(l);Number.isInteger(P)&&P>=I.v&&y(I,P+1)}ji(s)}return!0},ownKeys(a){v(s);var l=Reflect.ownKeys(a).filter(m=>{var p=t.get(m);return p===void 0||p.v!==Jt});for(var[u,f]of t)f.v!==Jt&&!(u in a)&&l.push(u);return l},setPrototypeOf(){F_()}})}function th(n){try{if(n!==null&&typeof n=="object"&&nr in n)return n[nr]}catch{}return n}function p1(n,e){return Object.is(th(n),th(e))}var nc,np,rp,sp;function rc(){if(nc===void 0){nc=window,np=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;rp=br(e,"firstChild").get,sp=br(e,"nextSibling").get,Xu(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Xu(t)&&(t.__t=void 0)}}function Mn(n=""){return document.createTextNode(n)}function Yn(n){return rp.call(n)}function lr(n){return sp.call(n)}function d(n,e){if(!xe)return Yn(n);var t=Yn(Qe);if(t===null)t=Qe.appendChild(Mn());else if(e&&t.nodeType!==Qc){var r=Mn();return t?.before(r),en(r),r}return en(t),t}function le(n,e=!1){if(!xe){var t=Yn(n);return t instanceof Comment&&t.data===""?lr(t):t}if(e&&Qe?.nodeType!==Qc){var r=Mn();return Qe?.before(r),en(r),r}return Qe}function h(n,e=1,t=!1){let r=xe?Qe:n;for(var s;e--;)s=r,r=lr(r);if(!xe)return r;if(t&&r?.nodeType!==Qc){var i=Mn();return r===null?s?.after(i):r.before(i),en(i),i}return en(r),r}function ed(n){n.textContent=""}function ip(){return!1}function oa(n,e){if(e){const t=document.body;n.autofocus=!0,is(()=>{document.activeElement===t&&n.focus()})}}function aa(n){xe&&Yn(n)!==null&&ed(n)}let nh=!1;function op(){nh||(nh=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function ja(n){var e=Ke,t=qe;ln(null),In(null);try{return n()}finally{ln(e),In(t)}}function ap(n,e,t,r=t){n.addEventListener(e,()=>ja(t));const s=n.__on_r;s?n.__on_r=()=>{s(),r(!0)}:n.__on_r=()=>r(!0),op()}function lp(n){qe===null&&Ke===null&&$_(),Ke!==null&&(Ke.f&On)!==0&&qe===null&&D_(),As&&L_()}function v1(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Jn(n,e,t,r=!0){var s=qe;s!==null&&(s.f&Rn)!==0&&(n|=Rn);var i={ctx:qt,deps:null,nodes_start:null,nodes_end:null,f:n|En,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{ro(i),i.f|=Gc}catch(l){throw Gt(i),l}else e!==null&&bs(i);if(r){var o=i;if(t&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Ss)===0&&(o=o.first,(n&Pr)!==0&&(n&Er)!==0&&o!==null&&(o.f|=Er)),o!==null&&(o.parent=s,s!==null&&v1(o,s),Ke!==null&&(Ke.f&dn)!==0&&(n&ss)===0)){var a=Ke;(a.effects??=[]).push(o)}}return i}function m1(){return Ke!==null&&!Vn}function _o(n){const e=Jn(Da,null,!1);return cn(e,on),e.teardown=n,e}function ni(n){lp();var e=qe.f,t=!Ke&&(e&Rr)!==0&&(e&Gc)===0;if(t){var r=qt;(r.e??=[]).push(n)}else return cp(n)}function cp(n){return Jn(Wc|Of,n,!1)}function g1(n){return lp(),Jn(Da|Of,n,!0)}function b1(n){Hn.ensure();const e=Jn(ss|Ss,n,!0);return()=>{Gt(e)}}function _1(n){Hn.ensure();const e=Jn(ss|Ss,n,!0);return(t={})=>new Promise(r=>{t.outro?Hs(e,()=>{Gt(e),r(void 0)}):(Gt(e),r(void 0))})}function wo(n){return Jn(Wc,n,!1)}function w1(n){return Jn(Kc|Ss,n,!0)}function Va(n,e=0){return Jn(Da|e,n,!0)}function z(n,e=[],t=[],r=[]){Jf(r,e,t,s=>{Jn(Da,()=>n(...s.map(v)),!0)})}function Lr(n,e=0){var t=Jn(Pr|e,n,!0);return t}function yn(n,e=!0){return Jn(Rr|Ss,n,!0,e)}function dp(n){var e=n.teardown;if(e!==null){const t=As,r=Ke;sh(!0),ln(null);try{e.call(null)}finally{sh(t),ln(r)}}}function up(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const s=t.ac;s!==null&&ja(()=>{s.abort(js)});var r=t.next;(t.f&ss)!==0?t.parent=null:Gt(t,e),t=r}}function y1(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Rr)===0&&Gt(e),e=t}}function Gt(n,e=!0){var t=!1;(e||(n.f&A_)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(x1(n.nodes_start,n.nodes_end),t=!0),up(n,e&&!t),la(n,0),cn(n,_r);var r=n.transitions;if(r!==null)for(const i of r)i.stop();dp(n);var s=n.parent;s!==null&&s.first!==null&&hp(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function x1(n,e){for(;n!==null;){var t=n===e?null:lr(n);n.remove(),n=t}}function hp(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function Hs(n,e,t=!0){var r=[];td(n,r,!0),fp(r,()=>{t&&Gt(n),e&&e()})}function fp(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var s of n)s.out(r)}else e()}function td(n,e,t){if((n.f&Rn)===0){if(n.f^=Rn,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,i=(r.f&Er)!==0||(r.f&Rr)!==0&&(n.f&Pr)!==0;td(r,e,i?t:!1),r=s}}}function nd(n){pp(n,!0)}function pp(n,e){if((n.f&Rn)!==0){n.f^=Rn,(n.f&on)===0&&(cn(n,En),bs(n));for(var t=n.first;t!==null;){var r=t.next,s=(t.f&Er)!==0||(t.f&Rr)!==0;pp(t,s?e:!1),t=r}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&i.in()}}function vp(n,e){for(var t=n.nodes_start,r=n.nodes_end;t!==null;){var s=t===r?null:lr(t);e.append(t),t=s}}let Ws=!1;function rh(n){Ws=n}let As=!1;function sh(n){As=n}let Ke=null,Vn=!1;function ln(n){Ke=n}let qe=null;function In(n){qe=n}let wr=null;function mp(n){Ke!==null&&(wr===null?wr=[n]:wr.push(n))}let vn=null,Tn=0,$n=null;function k1(n){$n=n}let gp=1,no=0,ms=no;function ih(n){ms=n}let Ur=!1;function bp(){return++gp}function yo(n){var e=n.f;if((e&En)!==0)return!0;if((e&Nr)!==0){var t=n.deps,r=(e&On)!==0;if(e&dn&&(n.f&=~ra),t!==null){var s,i,o=(e&na)!==0,a=r&&qe!==null&&!Ur,l=t.length;if((o||a)&&(qe===null||(qe.f&_r)===0)){var u=n,f=u.parent;for(s=0;s<l;s++)i=t[s],(o||!i?.reactions?.includes(u))&&(i.reactions??=[]).push(u);o&&(u.f^=na),a&&f!==null&&(f.f&On)===0&&(u.f^=On)}for(s=0;s<l;s++)if(i=t[s],yo(i)&&Zf(i),i.wv>n.wv)return!0}(!r||qe!==null&&!Ur)&&cn(n,on)}return!1}function _p(n,e,t=!0){var r=n.reactions;if(r!==null&&!wr?.includes(n))for(var s=0;s<r.length;s++){var i=r[s];(i.f&dn)!==0?_p(i,e,!1):e===i&&(t?cn(i,En):(i.f&on)!==0&&cn(i,Nr),bs(i))}}function wp(n){var e=vn,t=Tn,r=$n,s=Ke,i=Ur,o=wr,a=qt,l=Vn,u=ms,f=n.f;vn=null,Tn=0,$n=null,Ur=(f&On)!==0&&(Vn||!Ws||Ke===null),Ke=(f&(Rr|ss))===0?n:null,wr=null,Zs(n.ctx),Vn=!1,ms=++no,n.ac!==null&&(ja(()=>{n.ac.abort(js)}),n.ac=null);try{n.f|=Xl;var m=n.fn,p=m(),b=n.deps;if(vn!==null){var g;if(la(n,Tn),b!==null&&Tn>0)for(b.length=Tn+vn.length,g=0;g<vn.length;g++)b[Tn+g]=vn[g];else n.deps=b=vn;if(!Ur||(f&dn)!==0&&n.reactions!==null)for(g=Tn;g<b.length;g++)(b[g].reactions??=[]).push(n)}else b!==null&&Tn<b.length&&(la(n,Tn),b.length=Tn);if(fi()&&$n!==null&&!Vn&&b!==null&&(n.f&(dn|Nr|En))===0)for(g=0;g<$n.length;g++)_p($n[g],n);return s!==null&&s!==n&&(no++,$n!==null&&(r===null?r=$n:r.push(...$n))),(n.f&vs)!==0&&(n.f^=vs),p}catch(w){return Gf(w)}finally{n.f^=Xl,vn=e,Tn=t,$n=r,Ke=s,Ur=i,wr=o,Zs(a),Vn=l,ms=u}}function E1(n,e){let t=e.reactions;if(t!==null){var r=E_.call(t,n);if(r!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(e.f&dn)!==0&&(vn===null||!vn.includes(e))&&(cn(e,Nr),(e.f&(On|na))===0&&(e.f^=na),Xf(e),la(e,0))}function la(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)E1(n,t[r])}function ro(n){var e=n.f;if((e&_r)===0){cn(n,on);var t=qe,r=Ws;qe=n,Ws=!0;try{(e&Pr)!==0?y1(n):up(n),dp(n);var s=wp(n);n.teardown=typeof s=="function"?s:null,n.wv=gp;var i;Df&&n1&&(n.f&En)!==0&&n.deps}finally{Ws=r,qe=t}}}async function I1(){await Promise.resolve(),Fe()}function v(n){var e=n.f,t=(e&dn)!==0;if(Ke!==null&&!Vn){var r=qe!==null&&(qe.f&_r)!==0;if(!r&&!wr?.includes(n)){var s=Ke.deps;if((Ke.f&Xl)!==0)n.rv<no&&(n.rv=no,vn===null&&s!==null&&s[Tn]===n?Tn++:vn===null?vn=[n]:(!Ur||!vn.includes(n))&&vn.push(n));else{(Ke.deps??=[]).push(n);var i=n.reactions;i===null?n.reactions=[Ke]:i.includes(Ke)||i.push(Ke)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&On)===0&&(o.f^=On)}if(As){if(Br.has(n))return Br.get(n);if(t){o=n;var l=o.v;return((o.f&on)===0&&o.reactions!==null||yp(o))&&(l=Xc(o)),Br.set(o,l),l}}else if(t){if(o=n,jn?.has(o))return jn.get(o);yo(o)&&Zf(o)}if(jn?.has(n))return jn.get(n);if((n.f&vs)!==0)throw n.v;return n.v}function yp(n){if(n.v===Jt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Br.has(e)||(e.f&dn)!==0&&yp(e))return!0;return!1}function ar(n){var e=Vn;try{return Vn=!0,n()}finally{Vn=e}}const C1=-7169;function cn(n,e){n.f=n.f&C1|e}function Us(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(nr in n)sc(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&nr in t&&sc(t)}}}function sc(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{sc(n[r],e)}catch{}const t=Hc(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=$f(t);for(let s in r){const i=r[s].get;if(i)try{i.call(n)}catch{}}}}}function T1(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const S1=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function A1(n){return S1.includes(n)}const P1={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function R1(n){return n=n.toLowerCase(),P1[n]??n}const N1=["touchstart","touchmove"];function L1(n){return N1.includes(n)}const D1=["textarea","script","style","title"];function $1(n){return D1.includes(n)}const xp=new Set,ic=new Set;function kp(n,e,t,r={}){function s(i){if(r.capture||Di.call(e,i),!i.cancelBubble)return ja(()=>t?.call(this,i))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?is(()=>{e.addEventListener(n,s,r)}):e.addEventListener(n,s,r),s}function Jr(n,e,t,r,s){var i={capture:r,passive:s},o=kp(n,e,t,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&_o(()=>{e.removeEventListener(n,o,i)})}function Ct(n){for(var e=0;e<n.length;e++)xp.add(n[e]);for(var t of ic)t(n)}let oh=null;function Di(n){var e=this,t=e.ownerDocument,r=n.type,s=n.composedPath?.()||[],i=s[0]||n.target;oh=n;var o=0,a=oh===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var u=s.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(i=s[o]||n.target,i!==e){to(n,"currentTarget",{configurable:!0,get(){return i||t}});var f=Ke,m=qe;ln(null),In(null);try{for(var p,b=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+r];w!=null&&(!i.disabled||n.target===i)&&w.call(i,n)}catch(k){p?b.push(k):p=k}if(n.cancelBubble||g===e||g===null)break;i=g}if(p){for(let k of b)queueMicrotask(()=>{throw k});throw p}}finally{n.__root=e,delete n.currentTarget,ln(f),In(m)}}}function Ep(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function yr(n,e){var t=qe;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function R(n,e){var t=(e&Y_)!==0,r=(e&Q_)!==0,s,i=!n.startsWith("<!>");return()=>{if(xe)return yr(Qe,null),Qe;s===void 0&&(s=Ep(i?n:"<!>"+n),t||(s=Yn(s)));var o=r||np?document.importNode(s,!0):s.cloneNode(!0);if(t){var a=Yn(o),l=o.lastChild;yr(a,l)}else yr(o,o);return o}}function q1(n,e,t="svg"){var r=!n.startsWith("<!>"),s=`<${t}>${r?n:"<!>"+n}</${t}>`,i;return()=>{if(xe)return yr(Qe,null),Qe;if(!i){var o=Ep(s),a=Yn(o);i=Yn(a)}var l=i.cloneNode(!0);return yr(l,l),l}}function O1(n,e){return q1(n,e,"svg")}function me(){if(xe)return yr(Qe,null),Qe;var n=document.createDocumentFragment(),e=document.createComment(""),t=Mn();return n.append(e,t),yr(e,t),n}function x(n,e){if(xe){qe.nodes_end=Qe,Ir();return}n!==null&&n.before(e)}function _(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function rd(n,e){return Ip(n,e)}function M1(n,e){rc(),e.intro=e.intro??!1;const t=e.target,r=xe,s=Qe;try{for(var i=Yn(t);i&&(i.nodeType!==ui||i.data!==Uf);)i=lr(i);if(!i)throw Xs;mn(!0),en(i);const o=Ip(n,{...e,anchor:i});return mn(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(a=>a.startsWith("https://svelte.dev/e/")))throw o;return o!==Xs&&console.warn("Failed to hydrate: ",o),e.recover===!1&&O_(),rc(),ed(t),mn(!1),rd(n,e)}finally{mn(r),en(s)}}const Os=new Map;function Ip(n,{target:e,anchor:t,props:r={},events:s,context:i,intro:o=!0}){rc();var a=new Set,l=m=>{for(var p=0;p<m.length;p++){var b=m[p];if(!a.has(b)){a.add(b);var g=L1(b);e.addEventListener(b,Di,{passive:g});var w=Os.get(b);w===void 0?(document.addEventListener(b,Di,{passive:g}),Os.set(b,1)):Os.set(b,w+1)}}};l(Bc(xp)),ic.add(l);var u=void 0,f=_1(()=>{var m=t??e.appendChild(Mn());return l1(m,{pending:()=>{}},p=>{if(i){dt({});var b=qt;b.c=i}if(s&&(r.$$events=s),xe&&yr(p,null),u=n(p,r)||{},xe&&(qe.nodes_end=Qe,Qe===null||Qe.nodeType!==ui||Qe.data!==Jc))throw za(),Xs;i&&ut()}),()=>{for(var p of a){e.removeEventListener(p,Di);var b=Os.get(p);--b===0?(document.removeEventListener(p,Di),Os.delete(p)):Os.set(p,b)}ic.delete(l),m!==t&&m.parentNode?.removeChild(m)}});return oc.set(u,f),u}let oc=new WeakMap;function z1(n,e){const t=oc.get(n);return t?(oc.delete(n),t(e)):Promise.resolve()}class xo{anchor;#t=new Map;#e=new Map;#r=new Map;#s=!0;constructor(e,t=!0){this.anchor=e,this.#s=t}#l=()=>{var e=_t;if(this.#t.has(e)){var t=this.#t.get(e),r=this.#e.get(t);if(r)nd(r);else{var s=this.#r.get(t);s&&(this.#e.set(t,s.effect),this.#r.delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of this.#t){if(this.#t.delete(i),i===e)break;const a=this.#r.get(o);a&&(Gt(a.effect),this.#r.delete(o))}for(const[i,o]of this.#e){if(i===t)continue;const a=()=>{if(Array.from(this.#t.values()).includes(i)){var u=document.createDocumentFragment();vp(o,u),u.append(Mn()),this.#r.set(i,{effect:o,fragment:u})}else Gt(o);this.#e.delete(i)};this.#s||!r?Hs(o,a,!1):a()}}};#o=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[r,s]of this.#r)t.includes(r)||(Gt(s.effect),this.#r.delete(r))};ensure(e,t){var r=_t,s=ip();if(t&&!this.#e.has(e)&&!this.#r.has(e))if(s){var i=document.createDocumentFragment(),o=Mn();i.append(o),this.#r.set(e,{effect:yn(()=>t(o)),fragment:i})}else this.#e.set(e,yn(()=>t(this.anchor)));if(this.#t.set(r,e),s){for(const[a,l]of this.#e)a===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[a,l]of this.#r)a===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#l),r.ondiscard(this.#o)}else xe&&(this.anchor=Qe),this.#l()}}function G(n,e,t=!1){xe&&Ir();var r=new xo(n),s=t?Er:0;function i(o,a){if(xe){const u=jf(n)===Ma;if(o===u){var l=sa();en(l),r.anchor=l,mn(!1),r.ensure(o,a),mn(!0);return}}r.ensure(o,a)}Lr(()=>{var o=!1;e((a,l=!0)=>{o=!0,i(l,a)}),o||i(!1,null)},s)}function F1(n,e,t){xe&&Ir();var r=new xo(n),s=!fi();Lr(()=>{var i=e();s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,t)})}function pr(n,e){return e}function U1(n,e,t){for(var r=n.items,s=[],i=e.length,o=0;o<i;o++)td(e[o].e,s,!0);var a=i>0&&s.length===0&&t!==null;if(a){var l=t.parentNode;ed(l),l.append(t),r.clear(),Zn(n,e[0].prev,e[i-1].next)}fp(s,()=>{for(var u=0;u<i;u++){var f=e[u];a||(r.delete(f.k),Zn(n,f.prev,f.next)),Gt(f.e,!a)}})}function Zt(n,e,t,r,s,i=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&zf)!==0;if(l){var u=n;o=xe?en(Yn(u)):u.appendChild(Mn())}xe&&Ir();var f=null,m=!1,p=new Map,b=Ua(()=>{var I=t();return Vc(I)?I:I==null?[]:Bc(I)}),g,w;function k(){j1(w,g,a,p,o,s,e,r,t),i!==null&&(g.length===0?f?nd(f):f=yn(()=>i(o)):f!==null&&Hs(f,()=>{f=null}))}Lr(()=>{w??=qe,g=v(b);var I=g.length;if(m&&I===0)return;m=I===0;let P=!1;if(xe){var C=jf(o)===Ma;C!==(I===0)&&(o=sa(),en(o),mn(!1),P=!0)}if(xe){for(var L=null,D,q=0;q<I;q++){if(Qe.nodeType===ui&&Qe.data===Jc){o=Qe,P=!0,mn(!1);break}var A=g[q],E=r(A,q);D=ac(Qe,a,L,null,A,E,q,s,e,t),a.items.set(E,D),L=D}I>0&&en(sa())}if(xe)I===0&&i&&(f=yn(()=>i(o)));else if(ip()){var T=new Set,N=_t;for(q=0;q<I;q+=1){A=g[q],E=r(A,q);var $=a.items.get(E)??p.get(E);$?(e&(qa|Oa))!==0&&Cp($,A,q,e):(D=ac(null,a,null,null,A,E,q,s,e,t,!0),p.set(E,D)),T.add(E)}for(const[j,K]of a.items)T.has(j)||N.skipped_effects.add(K.e);N.oncommit(k)}else k();P&&mn(!0),v(b)}),xe&&(o=Qe)}function j1(n,e,t,r,s,i,o,a,l){var u=(o&V_)!==0,f=(o&(qa|Oa))!==0,m=e.length,p=t.items,b=t.first,g=b,w,k=null,I,P=[],C=[],L,D,q,A;if(u)for(A=0;A<m;A+=1)L=e[A],D=a(L,A),q=p.get(D),q!==void 0&&(q.a?.measure(),(I??=new Set).add(q));for(A=0;A<m;A+=1){if(L=e[A],D=a(L,A),q=p.get(D),q===void 0){var E=r.get(D);if(E!==void 0){r.delete(D),p.set(D,E);var T=k?k.next:g;Zn(t,k,E),Zn(t,E,T),Sl(E,T,s),k=E}else{var N=g?g.e.nodes_start:s;k=ac(N,t,k,k===null?t.first:k.next,L,D,A,i,o,l)}p.set(D,k),P=[],C=[],g=k.next;continue}if(f&&Cp(q,L,A,o),(q.e.f&Rn)!==0&&(nd(q.e),u&&(q.a?.unfix(),(I??=new Set).delete(q))),q!==g){if(w!==void 0&&w.has(q)){if(P.length<C.length){var $=C[0],j;k=$.prev;var K=P[0],ee=P[P.length-1];for(j=0;j<P.length;j+=1)Sl(P[j],$,s);for(j=0;j<C.length;j+=1)w.delete(C[j]);Zn(t,K.prev,ee.next),Zn(t,k,K),Zn(t,ee,$),g=$,k=ee,A-=1,P=[],C=[]}else w.delete(q),Sl(q,g,s),Zn(t,q.prev,q.next),Zn(t,q,k===null?t.first:k.next),Zn(t,k,q),k=q;continue}for(P=[],C=[];g!==null&&g.k!==D;)(g.e.f&Rn)===0&&(w??=new Set).add(g),C.push(g),g=g.next;if(g===null)continue;q=g}P.push(q),k=q,g=q.next}if(g!==null||w!==void 0){for(var W=w===void 0?[]:Bc(w);g!==null;)(g.e.f&Rn)===0&&W.push(g),g=g.next;var Z=W.length;if(Z>0){var ce=(o&zf)!==0&&m===0?s:null;if(u){for(A=0;A<Z;A+=1)W[A].a?.measure();for(A=0;A<Z;A+=1)W[A].a?.fix()}U1(t,W,ce)}}u&&is(()=>{if(I!==void 0)for(q of I)q.a?.apply()}),n.first=t.first&&t.first.e,n.last=k&&k.e;for(var ae of r.values())Gt(ae.e);r.clear()}function Cp(n,e,t,r){(r&qa)!==0&&ti(n.v,e),(r&Oa)!==0?ti(n.i,t):n.i=t}function ac(n,e,t,r,s,i,o,a,l,u,f){var m=(l&qa)!==0,p=(l&B_)===0,b=m?p?Zc(s,!1,!1):Qr(s):s,g=(l&Oa)===0?o:Qr(o),w={i:g,v:b,k:i,a:null,e:null,prev:t,next:r};try{if(n===null){var k=document.createDocumentFragment();k.append(n=Mn())}return w.e=yn(()=>a(n,b,g,u),xe),w.e.prev=t&&t.e,w.e.next=r&&r.e,t===null?f||(e.first=w):(t.next=w,t.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{}}function Sl(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,s=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==null&&i!==r;){var o=lr(i);s.before(i),i=o}}function Zn(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ft(n,e,t,r,s){xe&&Ir();var i=e.$$slots?.[t],o=!1;i===!0&&(i=e.children,o=!0),i===void 0||i(n,o?()=>r:r)}function Ms(n,e,...t){var r=new xo(n);Lr(()=>{const s=e()??null;r.ensure(s,s&&(i=>s(i,...t)))},Er)}function V1(n,e,t){xe&&Ir();var r=new xo(n);Lr(()=>{var s=e()??null;r.ensure(s,s&&(i=>t(i,s)))},Er)}function B1(n,e,t,r,s,i){let o=xe;xe&&Ir();var a=null;xe&&Qe.nodeType===R_&&(a=Qe,Ir());var l=xe?Qe:n,u=new xo(l,!1);Lr(()=>{const f=e()||null;var m=X_;if(f===null){u.ensure(null,null);return}return u.ensure(f,p=>{if(f){if(a=xe?a:document.createElementNS(m,f),yr(a,a),r){xe&&$1(f)&&a.append(document.createComment(""));var b=xe?Yn(a):a.appendChild(Mn());xe&&(b===null?mn(!1):en(b)),r(a,b)}qe.nodes_end=a,p.before(a)}xe&&en(p)}),()=>{}},Er),_o(()=>{}),o&&(mn(!0),en(l))}function ct(n,e){wo(()=>{var t=n.getRootNode(),r=t.host?t:t.head??t.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const s=document.createElement("style");s.id=e.hash,s.textContent=e.code,r.appendChild(s)}})}function H1(n,e){var t=void 0,r;Lr(()=>{t!==(t=e())&&(r&&(Gt(r),r=null),t&&(r=yn(()=>{wo(()=>t(n))})))})}function Tp(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Tp(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function W1(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Tp(n))&&(r&&(r+=" "),r+=e);return r}function G1(n){return typeof n=="object"?W1(n):n??""}const ah=[...` 	
\r\f \v\uFEFF`];function K1(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||ah.includes(r[o-1]))&&(a===r.length||ah.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function lh(n,e=!1){var t=e?" !important;":";",r="";for(var s in n){var i=n[s];i!=null&&i!==""&&(r+=" "+s+": "+i+t)}return r}function Al(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function Y1(n,e){if(e){var t="",r,s;if(Array.isArray(e)?(r=e[0],s=e[1]):r=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Al)),s&&l.push(...Object.keys(s).map(Al));var u=0,f=-1;const w=n.length;for(var m=0;m<w;m++){var p=n[m];if(a?p==="/"&&n[m-1]==="*"&&(a=!1):i?i===p&&(i=!1):p==="/"&&n[m+1]==="*"?a=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!a&&i===!1&&o===0){if(p===":"&&f===-1)f=m;else if(p===";"||m===w-1){if(f!==-1){var b=Al(n.substring(u,f).trim());if(!l.includes(b)){p!==";"&&m++;var g=n.substring(u,m).trim();t+=" "+g+";"}}u=m+1,f=-1}}}}return r&&(t+=lh(r)),s&&(t+=lh(s,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function sn(n,e,t,r,s,i){var o=n.__className;if(xe||o!==t||o===void 0){var a=K1(t,r,i);(!xe||a!==n.getAttribute("class"))&&(a==null?n.removeAttribute("class"):e?n.className=a:n.setAttribute("class",a)),n.__className=t}else if(i&&s!==i)for(var l in i){var u=!!i[l];(s==null||u!==!!s[l])&&n.classList.toggle(l,u)}return i}function Pl(n,e={},t,r){for(var s in t){var i=t[s];e[s]!==i&&(t[s]==null?n.style.removeProperty(s):n.style.setProperty(s,i,r))}}function Ba(n,e,t,r){var s=n.__style;if(xe||s!==e){var i=Y1(e,r);(!xe||i!==n.getAttribute("style"))&&(i==null?n.removeAttribute("style"):n.style.cssText=i),n.__style=e}else r&&(Array.isArray(r)?(Pl(n,t?.[0],r[0]),Pl(n,t?.[1],r[1],"important")):Pl(n,t,r));return r}function so(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Vc(e))return e1();for(var r of n.options)r.selected=e.includes(Vi(r));return}for(r of n.options){var s=Vi(r);if(p1(s,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function sd(n){var e=new MutationObserver(()=>{so(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),_o(()=>{e.disconnect()})}function id(n,e,t=e){var r=new WeakSet,s=!0;ap(n,"change",i=>{var o=i?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),Vi);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&Vi(l)}t(a),_t!==null&&r.add(_t)}),wo(()=>{var i=e();if(n===document.activeElement){var o=Fi??_t;if(r.has(o))return}if(so(n,i,s),s&&i===void 0){var a=n.querySelector(":checked");a!==null&&(i=Vi(a),t(i))}n.__value=i,s=!1}),sd(n)}function Vi(n){return"__value"in n?n.__value:n.value}const Ii=Symbol("class"),Ci=Symbol("style"),Sp=Symbol("is custom element"),Ap=Symbol("is html");function ws(n){if(xe){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var r=n.value;Ae(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var s=n.checked;Ae(n,"checked",null),n.checked=s}}};n.__on_r=t,is(t),op()}}function Q1(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ae(n,e,t,r){var s=Pp(n);xe&&(s[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(n[P_]=t),t==null?n.removeAttribute(e):typeof t!="string"&&od(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Ti(n,e,t){var r=Ke,s=qe;let i=xe;xe&&mn(!1),ln(null),In(null);try{e!=="style"&&(lc.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?od(n).includes(e):t&&typeof t=="object")?n[e]=t:Ae(n,e,t==null?t:String(t))}finally{ln(r),In(s),i&&mn(!0)}}function J1(n,e,t,r,s=!1,i=!1){if(xe&&s&&n.tagName==="INPUT"){var o=n,a=o.type==="checkbox"?"defaultChecked":"defaultValue";a in t||ws(o)}var l=Pp(n),u=l[Sp],f=!l[Ap];let m=xe&&u;m&&mn(!1);var p=e||{},b=n.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);t.class?t.class=G1(t.class):t[Ii]&&(t.class=null),t[Ci]&&(t.style??=null);var w=od(n);for(const A in t){let E=t[A];if(b&&A==="value"&&E==null){n.value=n.__value="",p[A]=E;continue}if(A==="class"){var k=n.namespaceURI==="http://www.w3.org/1999/xhtml";sn(n,k,E,r,e?.[Ii],t[Ii]),p[A]=E,p[Ii]=t[Ii];continue}if(A==="style"){Ba(n,E,e?.[Ci],t[Ci]),p[A]=E,p[Ci]=t[Ci];continue}var I=p[A];if(!(E===I&&!(E===void 0&&n.hasAttribute(A)))){p[A]=E;var P=A[0]+A[1];if(P!=="$$")if(P==="on"){const T={},N="$$"+A;let $=A.slice(2);var C=A1($);if(T1($)&&($=$.slice(0,-7),T.capture=!0),!C&&I){if(E!=null)continue;n.removeEventListener($,p[N],T),p[N]=null}if(E!=null)if(C)n[`__${$}`]=E,Ct([$]);else{let j=function(K){p[A].call(this,K)};var q=j;p[N]=kp($,n,j,T)}else C&&(n[`__${$}`]=void 0)}else if(A==="style")Ae(n,A,E);else if(A==="autofocus")oa(n,!!E);else if(!u&&(A==="__value"||A==="value"&&E!=null))n.value=n.__value=E;else if(A==="selected"&&b)Q1(n,E);else{var L=A;f||(L=R1(L));var D=L==="defaultValue"||L==="defaultChecked";if(E==null&&!u&&!D)if(l[A]=null,L==="value"||L==="checked"){let T=n;const N=e===void 0;if(L==="value"){let $=T.defaultValue;T.removeAttribute(L),T.defaultValue=$,T.value=T.__value=N?$:null}else{let $=T.defaultChecked;T.removeAttribute(L),T.defaultChecked=$,T.checked=N?$:!1}}else n.removeAttribute(A);else D||w.includes(L)&&(u||typeof E!="string")?(n[L]=E,L in l&&(l[L]=Jt)):typeof E!="function"&&Ae(n,L,E)}}}return m&&mn(!0),p}function ch(n,e,t=[],r=[],s=[],i,o=!1,a=!1){Jf(s,t,r,l=>{var u=void 0,f={},m=n.nodeName==="SELECT",p=!1;if(Lr(()=>{var g=e(...l.map(v)),w=J1(n,u,g,i,o,a);p&&m&&"value"in g&&so(n,g.value);for(let I of Object.getOwnPropertySymbols(f))g[I]||Gt(f[I]);for(let I of Object.getOwnPropertySymbols(g)){var k=g[I];I.description===Z_&&(!u||k!==u[I])&&(f[I]&&Gt(f[I]),f[I]=yn(()=>H1(n,()=>k))),w[I]=k}u=w}),m){var b=n;wo(()=>{so(b,u.value,!0),sd(b)})}p=!0})}function Pp(n){return n.__attributes??={[Sp]:n.nodeName.includes("-"),[Ap]:n.namespaceURI===J_}}var lc=new Map;function od(n){var e=n.getAttribute("is")||n.nodeName,t=lc.get(e);if(t)return t;lc.set(e,t=[]);for(var r,s=n,i=Element.prototype;i!==s;){r=$f(s);for(var o in r)r[o].set&&t.push(o);s=Hc(s)}return t}function rr(n,e,t=e){var r=new WeakSet;ap(n,"input",async s=>{var i=s?n.defaultValue:n.value;if(i=Rl(n)?Nl(i):i,t(i),_t!==null&&r.add(_t),await I1(),i!==(i=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=i??"",a!==null){var u=n.value.length;o===a&&a===l&&u>l?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=o,n.selectionEnd=Math.min(a,u))}}}),(xe&&n.defaultValue!==n.value||ar(e)==null&&n.value)&&(t(Rl(n)?Nl(n.value):n.value),_t!==null&&r.add(_t)),Va(()=>{var s=e();if(n===document.activeElement){var i=Fi??_t;if(r.has(i))return}Rl(n)&&s===Nl(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Rl(n){var e=n.type;return e==="number"||e==="range"}function Nl(n){return n===""?null:+n}function dh(n,e){return n===e||n?.[nr]===e}function ad(n={},e,t,r){return wo(()=>{var s,i;return Va(()=>{s=i,i=[],ar(()=>{n!==t(...i)&&(e(n,...i),s&&dh(t(...s),n)&&e(null,...s))})}),()=>{is(()=>{i&&dh(t(...i),n)&&e(null,...i)})}}),n}function wn(n=!1){const e=qt,t=e.l.u;if(!t)return;let r=()=>Us(e.s);if(n){let s=0,i={};const o=bo(()=>{let a=!1;const l=e.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],a=!0);return a&&s++,s});r=()=>v(o)}t.b.length&&g1(()=>{uh(e,r),ta(t.b)}),ni(()=>{const s=ar(()=>t.m.map(T_));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&ni(()=>{uh(e,r),ta(t.a)})}function uh(n,e){if(n.l.s)for(const t of n.l.s)v(t);e()}function ld(n,e,t){if(n==null)return e(void 0),t&&t(void 0),Pn;const r=ar(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}const zs=[];function X1(n,e){return{subscribe:Ps(n,e).subscribe}}function Ps(n,e=Pn){let t=null;const r=new Set;function s(a){if(Bf(n,a)&&(n=a,t)){const l=!zs.length;for(const u of r)u[1](),zs.push(u,n);if(l){for(let u=0;u<zs.length;u+=2)zs[u][0](zs[u+1]);zs.length=0}}}function i(a){s(a(n))}function o(a,l=Pn){const u=[a,l];return r.add(u),r.size===1&&(t=e(s,i)||Pn),a(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Z1(n,e,t){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return X1(t,(o,a)=>{let l=!1;const u=[];let f=0,m=Pn;const p=()=>{if(f)return;m();const g=e(r?u[0]:u,o,a);i?o(g):m=typeof g=="function"?g:Pn},b=s.map((g,w)=>ld(g,k=>{u[w]=k,f&=~(1<<w),l&&p()},()=>{f|=1<<w}));return l=!0,p(),function(){ta(b),m(),l=!1}})}function e0(n){let e;return ld(n,t=>e=t)(),e}let Fo=!1,cc=Symbol();function lt(n,e,t){const r=t[e]??={store:null,source:Zc(void 0),unsubscribe:Pn};if(r.store!==n&&!(cc in t))if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=Pn;else{var s=!0;r.unsubscribe=ld(n,i=>{s?r.source.v=i:y(r.source,i)}),s=!1}return n&&cc in t?e0(n):v(r.source)}function Nt(){const n={};function e(){_o(()=>{for(var t in n)n[t].unsubscribe();to(n,cc,{enumerable:!1,value:!0})})}return[n,e]}function t0(n){var e=Fo;try{return Fo=!1,[n(),Fo]}finally{Fo=e}}const n0={get(n,e){if(!n.exclude.includes(e))return v(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var r=qe;try{In(n.parent_effect),n.special[e]=je({get[e](){return n.props[e]}},e,Ff)}finally{In(r)}}return n.special[e](t),tc(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),tc(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function ht(n,e){return new Proxy({props:n,exclude:e,special:{},version:Qr(0),parent_effect:qe},n0)}const r0={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Ei(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let s=n.props[r];Ei(s)&&(s=s());const i=br(s,e);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(Ei(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const s=br(r,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(n,e){if(e===nr||e===Yc)return!1;for(let t of n.props)if(Ei(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(Ei(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function yt(...n){return new Proxy({props:n},r0)}function je(n,e,t,r){var s=!hi||(t&W_)!==0,i=(t&G_)!==0,o=(t&K_)!==0,a=r,l=!0,u=()=>(l&&(l=!1,a=o?ar(r):r),a),f;if(i){var m=nr in n||Yc in n;f=br(n,e)?.set??(m&&e in n?C=>n[e]=C:void 0)}var p,b=!1;i?[p,b]=t0(()=>n[e]):p=n[e],p===void 0&&r!==void 0&&(p=u(),f&&(s&&M_(),f(p)));var g;if(s?g=()=>{var C=n[e];return C===void 0?u():(l=!0,C)}:g=()=>{var C=n[e];return C!==void 0&&(a=void 0),C===void 0?a:C},s&&(t&Ff)===0)return g;if(f){var w=n.$$legacy;return(function(C,L){return arguments.length>0?((!s||!L||w||b)&&f(L?g():C),C):g()})}var k=!1,I=((t&H_)!==0?bo:Ua)(()=>(k=!1,g()));i&&v(I);var P=qe;return(function(C,L){if(arguments.length>0){const D=L?v(I):s&&i?an(C):C;return y(I,D),k=!0,a!==void 0&&(a=D),C}return As&&k||(P.f&_r)!==0?I.v:v(I)})}function s0(n){return new i0(n)}class i0{#t;#e;constructor(e){var t=new Map,r=(i,o)=>{var a=Zc(o,!1,!1);return t.set(i,a),a};const s=new Proxy({...e.props||{},$$events:{}},{get(i,o){return v(t.get(o)??r(o,Reflect.get(i,o)))},has(i,o){return o===Yc?!0:(v(t.get(o)??r(o,Reflect.get(i,o))),Reflect.has(i,o))},set(i,o,a){return y(t.get(o)??r(o,a),a),Reflect.set(i,o,a)}});this.#e=(e.hydrate?M1:rd)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Fe(),this.#t=s.$$events;for(const i of Object.keys(this.#e))i==="$set"||i==="$destroy"||i==="$on"||to(this,i,{get(){return this.#e[i]},set(o){this.#e[i]=o},enumerable:!0});this.#e.$set=i=>{Object.assign(s,i)},this.#e.$destroy=()=>{z1(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const r=(...s)=>t.call(this,...s);return this.#t[e].push(r),()=>{this.#t[e]=this.#t[e].filter(s=>s!==r)}}$destroy(){this.#e.$destroy()}}let Rp;typeof HTMLElement=="function"&&(Rp=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const r=this.$$c.$on(n,e);this.$$l_u.set(e,r)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),x(i,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=o0(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),t.default=!0):t[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=Ko(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=s0({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=b1(()=>{Va(()=>{this.$$r=!0;for(const s of ea(this.$$c)){if(!this.$$p_d[s]?.reflect)continue;this.$$d[s]=this.$$c[s];const i=Ko(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const o=this.$$c.$on(s,i);this.$$l_u.set(i,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=Ko(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return ea(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function Ko(n,e,t,r){const s=t[n]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function o0(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function pe(n,e,t,r,s,i){let o=class extends Rp{constructor(){super(n,t,s),this.$$p_d=e}static get observedAttributes(){return ea(e).map(a=>(e[a].attribute||a).toLowerCase())}};return ea(e).forEach(a=>{to(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){l=Ko(a,l,e),this.$$d[a]=l;var u=this.$$c;if(u){var f=br(u,a)?.get;f?u[a]=l:u.$set({[a]:l})}}})}),r.forEach(a=>{to(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}function Kt(n){qt===null&&Mf(),hi&&qt.l!==null?a0(qt).m.push(n):ni(()=>{const e=ar(n);if(typeof e=="function")return e})}function Np(n){qt===null&&Mf(),Kt(()=>()=>ar(n))}function a0(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const l0="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(l0);const c0=()=>{};var hh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(n,e){if(!n)throw pi(e)},pi=function(n){return new Error("Firebase Database ("+Lp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},d0=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,b=u&63;l||(b=64,o||(p=64)),r.push(t[f],t[m],t[p],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):d0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||m==null)throw new u0;const p=i<<2|a>>4;if(r.push(p),u!==64){const b=a<<4&240|u>>2;if(r.push(b),m!==64){const g=u<<6&192|m;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class u0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $p=function(n){const e=Dp(n);return cd.encodeByteArray(e,!0)},ca=function(n){return $p(n).replace(/\./g,"")},da=function(n){try{return cd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(n){return qp(void 0,n)}function qp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!f0(t)||(n[t]=qp(n[t],e[t]));return n}function f0(n){return n!=="__proto__"}/**
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
 */function p0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v0=()=>p0().__FIREBASE_DEFAULTS__,m0=()=>{if(typeof process>"u"||typeof hh>"u")return;const n=hh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},g0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&da(n[1]);return e&&JSON.parse(e)},dd=()=>{try{return c0()||v0()||m0()||g0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Op=n=>dd()?.emulatorHosts?.[n],Mp=n=>{const e=Op(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zp=()=>dd()?.config,Fp=n=>dd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ud(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Up(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ca(JSON.stringify(t)),ca(JSON.stringify(o)),""].join(".")}const Bi={};function b0(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bi))Bi[e]?n.emulator.push(e):n.prod.push(e);return n}function _0(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let fh=!1;function hd(n,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||Bi[n]===e||Bi[n]||fh)return;Bi[n]=e;function t(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=b0().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,b){p.setAttribute("width","24"),p.setAttribute("id",b),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{fh=!0,o()},p}function f(p,b){p.setAttribute("id",b),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=_0(r),b=t("text"),g=document.getElementById(b)||document.createElement("span"),w=t("learnmore"),k=document.getElementById(w)||document.createElement("a"),I=t("preprendIcon"),P=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const C=p.element;a(C),f(k,w);const L=u();l(P,I),C.append(P,g,k,L),document.body.appendChild(C)}i?(g.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function w0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function y0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x0(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function k0(){return Lp.NODE_ADMIN===!0}function E0(){try{return typeof indexedDB=="object"}catch{return!1}}function I0(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class Dr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=C0,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?T0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dr(s,a,r)}}function T0(n,e){return n.replace(S0,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const S0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return JSON.parse(n)}function Wt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=io(da(i[0])||""),t=io(da(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},A0=function(n){const e=Vp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},P0=function(n){const e=Vp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ri(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function dc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ua(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function ys(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ph(i)&&ph(o)){if(!ys(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ph(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $i(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)r[m]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let m=0;m<16;m++)r[m]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let m=16;m<80;m++){const p=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let m=0;m<80;m++){m<40?m<20?(u=a^i&(o^a),f=1518500249):(u=i^o^a,f=1859775393):m<60?(u=i&o|a&(i|o),f=2400959708):(u=i^o^a,f=3395469782);const p=(s<<5|s>>>27)+u+l+f+r[m]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function N0(n,e){const t=new L0(n,e);return t.subscribe.bind(t)}class L0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");D0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ll),s.error===void 0&&(s.error=Ll),s.complete===void 0&&(s.complete=Ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ll(){}function Ha(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,X(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wa=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Lt(n){return n&&n._delegate?n._delegate:n}class Xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cs="[DEFAULT]";/**
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
 */class q0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ko;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M0(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:O0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function O0(n){return n===cs?void 0:n}function M0(n){return n.instantiationMode==="EAGER"}/**
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
 */class z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new q0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(wt||(wt={}));const F0={debug:wt.DEBUG,verbose:wt.VERBOSE,info:wt.INFO,warn:wt.WARN,error:wt.ERROR,silent:wt.SILENT},U0=wt.INFO,j0={[wt.DEBUG]:"log",[wt.VERBOSE]:"log",[wt.INFO]:"info",[wt.WARN]:"warn",[wt.ERROR]:"error"},V0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=j0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=U0,this._logHandler=V0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in wt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,wt.DEBUG,...e),this._logHandler(this,wt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,wt.VERBOSE,...e),this._logHandler(this,wt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,wt.INFO,...e),this._logHandler(this,wt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,wt.WARN,...e),this._logHandler(this,wt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,wt.ERROR,...e),this._logHandler(this,wt.ERROR,...e)}}const B0=(n,e)=>e.some(t=>n instanceof t);let vh,mh;function H0(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return mh||(mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,uc=new WeakMap,Hp=new WeakMap,Dl=new WeakMap,vd=new WeakMap;function G0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Hr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bp.set(t,n)}).catch(()=>{}),vd.set(e,n),e}function K0(n){if(uc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});uc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Y0(n){hc=n(hc)}function Q0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($l(this),e,...t);return Hp.set(r,e.sort?e.sort():[e]),Hr(r)}:W0().includes(n)?function(...e){return n.apply($l(this),e),Hr(Bp.get(this))}:function(...e){return Hr(n.apply($l(this),e))}}function J0(n){return typeof n=="function"?Q0(n):(n instanceof IDBTransaction&&K0(n),B0(n,H0())?new Proxy(n,hc):n)}function Hr(n){if(n instanceof IDBRequest)return G0(n);if(Dl.has(n))return Dl.get(n);const e=J0(n);return e!==n&&(Dl.set(n,e),vd.set(e,n)),e}const $l=n=>vd.get(n);function X0(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Z0=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],ql=new Map;function gh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ew.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Z0.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return ql.set(e,i),i}Y0(n=>({...n,get:(e,t,r)=>gh(e,t)||n.get(e,t,r),has:(e,t)=>!!gh(e,t)||n.has(e,t)}));/**
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
 */class tw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nw(n){return n.getComponent()?.type==="VERSION"}const fc="@firebase/app",bh="0.14.5";/**
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
 */const Cr=new pd("@firebase/app"),rw="@firebase/app-compat",sw="@firebase/analytics-compat",iw="@firebase/analytics",ow="@firebase/app-check-compat",aw="@firebase/app-check",lw="@firebase/auth",cw="@firebase/auth-compat",dw="@firebase/database",uw="@firebase/data-connect",hw="@firebase/database-compat",fw="@firebase/functions",pw="@firebase/functions-compat",vw="@firebase/installations",mw="@firebase/installations-compat",gw="@firebase/messaging",bw="@firebase/messaging-compat",_w="@firebase/performance",ww="@firebase/performance-compat",yw="@firebase/remote-config",xw="@firebase/remote-config-compat",kw="@firebase/storage",Ew="@firebase/storage-compat",Iw="@firebase/firestore",Cw="@firebase/ai",Tw="@firebase/firestore-compat",Sw="firebase",Aw="12.5.0";/**
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
 */const pc="[DEFAULT]",Pw={[fc]:"fire-core",[rw]:"fire-core-compat",[iw]:"fire-analytics",[sw]:"fire-analytics-compat",[aw]:"fire-app-check",[ow]:"fire-app-check-compat",[lw]:"fire-auth",[cw]:"fire-auth-compat",[dw]:"fire-rtdb",[uw]:"fire-data-connect",[hw]:"fire-rtdb-compat",[fw]:"fire-fn",[pw]:"fire-fn-compat",[vw]:"fire-iid",[mw]:"fire-iid-compat",[gw]:"fire-fcm",[bw]:"fire-fcm-compat",[_w]:"fire-perf",[ww]:"fire-perf-compat",[yw]:"fire-rc",[xw]:"fire-rc-compat",[kw]:"fire-gcs",[Ew]:"fire-gcs-compat",[Iw]:"fire-fst",[Tw]:"fire-fst-compat",[Cw]:"fire-vertex","fire-js":"fire-js",[Sw]:"fire-js-all"};/**
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
 */const ha=new Map,Rw=new Map,vc=new Map;function _h(n,e){try{n.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xs(n){const e=n.name;if(vc.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,n);for(const t of ha.values())_h(t,n);for(const t of Rw.values())_h(t,n);return!0}function Ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Eo("app","Firebase",Nw);/**
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
 */class Lw{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=Aw;function Wp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:pc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wr.create("bad-app-name",{appName:String(s)});if(t||(t=zp()),!t)throw Wr.create("no-options");const i=ha.get(s);if(i){if(ys(t,i.options)&&ys(r,i.config))return i;throw Wr.create("duplicate-app",{appName:s})}const o=new z0(s);for(const l of vc.values())o.addComponent(l);const a=new Lw(t,r,o);return ha.set(s,a),a}function md(n=pc){const e=ha.get(n);if(!e&&n===pc&&zp())return Wp();if(!e)throw Wr.create("no-app",{appName:n});return e}function sr(n,e,t){let r=Pw[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(o.join(" "));return}xs(new Xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Dw="firebase-heartbeat-database",$w=1,oo="firebase-heartbeat-store";let Ol=null;function Gp(){return Ol||(Ol=X0(Dw,$w,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(oo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wr.create("idb-open",{originalErrorMessage:n.message})})),Ol}async function qw(n){try{const t=(await Gp()).transaction(oo),r=await t.objectStore(oo).get(Kp(n));return await t.done,r}catch(e){if(e instanceof Dr)Cr.warn(e.message);else{const t=Wr.create("idb-get",{originalErrorMessage:e?.message});Cr.warn(t.message)}}}async function wh(n,e){try{const r=(await Gp()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,Kp(n)),await r.done}catch(t){if(t instanceof Dr)Cr.warn(t.message);else{const r=Wr.create("idb-set",{originalErrorMessage:t?.message});Cr.warn(r.message)}}}function Kp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ow=1024,Mw=30;class zw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Mw){const s=jw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yh(),{heartbeatsToSend:t,unsentEntries:r}=Fw(this._heartbeatsCache.heartbeats),s=ca(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Cr.warn(e),""}}}function yh(){return new Date().toISOString().substring(0,10)}function Fw(n,e=Ow){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return E0()?I0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qw(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xh(n){return ca(JSON.stringify({version:2,heartbeats:n})).length}function jw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Vw(n){xs(new Xr("platform-logger",e=>new tw(e),"PRIVATE")),xs(new Xr("heartbeat",e=>new zw(e),"PRIVATE")),sr(fc,bh,n),sr(fc,bh,"esm2020"),sr("fire-js","")}Vw("");var Bw="firebase",Hw="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(Bw,Hw,"app");function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ww=Yp,Qp=new Eo("auth","Firebase",Yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new pd("@firebase/auth");function Gw(n,...e){fa.logLevel<=wt.WARN&&fa.warn(`Auth (${Ns}): ${n}`,...e)}function Yo(n,...e){fa.logLevel<=wt.ERROR&&fa.error(`Auth (${Ns}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,...e){throw gd(n,...e)}function Nn(n,...e){return gd(n,...e)}function Jp(n,e,t){const r={...Ww(),[e]:t};return new Eo("auth","Firebase",r).create(e,{appName:n.name})}function ir(n){return Jp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qp.create(n,...e)}function de(n,e,...t){if(!n)throw gd(e,...t)}function vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yo(e),new Error(e)}function Tr(n,e){n||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return typeof self<"u"&&self.location?.href||""}function Xp(){return kh()==="http:"||kh()==="https:"}function kh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||y0()||"connection"in navigator)?navigator.onLine:!0}function Yw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tr(t>e,"Short delay should be less than long delay!"),this.isMobile=fd()||jp()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,e){Tr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xw=new Io(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ln(n,e,t,r,s={}){return ev(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Rs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return w0()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&os(n.emulatorConfig.host)&&(u.credentials="include"),Zp.fetch()(await tv(n,n.config.apiHost,t,a),u)})}async function ev(n,e,t){n._canInitEmulator=!1;const r={...Qw,...e};try{const s=new ey(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jp(n,f,u);Qn(n,f)}}catch(s){if(s instanceof Dr)throw s;Qn(n,"network-request-failed",{message:String(s)})}}async function as(n,e,t,r,s={}){const i=await Ln(n,e,t,r,s);return"mfaPendingCredential"in i&&Qn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function tv(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?bd(n.config,s):`${n.config.apiScheme}://${s}`;return Jw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Zw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ey{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),Xw.get())})}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nn(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){return n!==void 0&&n.getResponse!==void 0}function Ih(n){return n!==void 0&&n.enterprise!==void 0}class nv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(n){return(await Ln(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function rv(n,e){return Ln(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(n,e){return Ln(n,"POST","/v1/accounts:delete",e)}async function pa(n,e){return Ln(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ry(n,e=!1){const t=Lt(n),r=await t.getIdToken(e),s=_d(r);de(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Hi(Ml(s.auth_time)),issuedAtTime:Hi(Ml(s.iat)),expirationTime:Hi(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ml(n){return Number(n)*1e3}function _d(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=da(t);return s?JSON.parse(s):(Yo("Failed to decode base64 JWT payload"),null)}catch(s){return Yo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ch(n){const e=_d(n);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dr&&sy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(n){const e=n.auth,t=await n.getIdToken(),r=await si(n,pa(e,{idToken:t}));de(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?sv(s.providerUserInfo):[],o=ay(n.providerData,i),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,u=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new gc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function oy(n){const e=Lt(n);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ay(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e){const t=await ev(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await tv(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&os(n.emulatorConfig.host)&&(l.credentials="include"),Zp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cy(n,e){return Ln(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=Ch(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ly(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Gs;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n,e){de(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new iy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ry(this,e)}reload(){return oy(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await si(this,ny(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:b,providerData:g,stsTokenManager:w}=t;de(m&&w,e,"internal-error");const k=Gs.fromJSON(this.name,w);de(typeof m=="string",e,"internal-error"),$r(r,e.name),$r(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof b=="boolean",e,"internal-error"),$r(i,e.name),$r(o,e.name),$r(a,e.name),$r(l,e.name),$r(u,e.name),$r(f,e.name);const I=new Wn({uid:m,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:f});return g&&Array.isArray(g)&&(I.providerData=g.map(P=>({...P}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new Gs;s.updateFromServerResponse(t);const i=new Wn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await va(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Gs;a.updateFromIdToken(r);const l=new Wn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function mr(n){Tr(n instanceof Function,"Expected a class definition");let e=Th.get(n);return e?(Tr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Th.set(n,e),e)}/**
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
 */class iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}iv.type="NONE";const Sh=iv;/**
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
 */function Qo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ks{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pa(this.auth,{idToken:e}).catch(()=>{});return t?Wn._fromGetAccountInfoResponse(this.auth,t,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ks(mr(Sh),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||mr(Sh);const o=Qo(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const p=await pa(e,{idToken:f}).catch(()=>{});if(!p)break;m=await Wn._fromGetAccountInfoResponse(e,p,f)}else m=Wn._fromJSON(e,f);u!==i&&(a=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ks(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ks(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(hv(e))return"Webos";if(av(e))return"Safari";if((e.includes("chrome/")||lv(e))&&!e.includes("edge/"))return"Chrome";if(dv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ov(n=_n()){return/firefox\//i.test(n)}function av(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lv(n=_n()){return/crios\//i.test(n)}function cv(n=_n()){return/iemobile/i.test(n)}function dv(n=_n()){return/android/i.test(n)}function uv(n=_n()){return/blackberry/i.test(n)}function hv(n=_n()){return/webos/i.test(n)}function wd(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dy(n=_n()){return wd(n)&&!!window.navigator?.standalone}function uy(){return x0()&&document.documentMode===10}function fv(n=_n()){return wd(n)||dv(n)||hv(n)||uv(n)||/windows phone/i.test(n)||cv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,e=[]){let t;switch(n){case"Browser":t=Ah(_n());break;case"Worker":t=`${Ah(_n())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${r}`}/**
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
 */class hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function fy(n,e={}){return Ln(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
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
 */const py=6;class vy{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??py,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pa(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(ir(this));const t=e?Lt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fy(this),t=new vy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await cy(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Gw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function dr(n){return Lt(n)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=N0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gy(n){Co=n}function yd(n){return Co.loadJS(n)}function by(){return Co.recaptchaV2Script}function _y(){return Co.recaptchaEnterpriseScript}function wy(){return Co.gapiScript}function vv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=500,xy=6e4,Uo=1e12;class ky{constructor(e){this.auth=e,this.counter=Uo,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Cy(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Uo;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Uo;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Uo;return this._widgets.get(t)?.execute(),""}}class Ey{constructor(){this.enterprise=new Iy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Iy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Cy{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;de(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Ty(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},xy)},yy))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ty(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Sy="recaptcha-enterprise",Wi="NO_RECAPTCHA";class mv{constructor(e){this.type=Sy,this.auth=dr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nv(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ih(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Wi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ey().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Ih(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_y();l.length!==0&&(l+=a),yd(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Si(n,e,t,r=!1,s=!1){const i=new mv(n);let o;if(s)o=Wi;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ys(n,e,t,r,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Si(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Si(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Si(n,e,t);return r(n,i).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const a=await Si(n,e,t,!1,!0);return r(n,a)}return Promise.reject(o)})}else{const i=await Si(n,e,t,!1,!0);return r(n,i)}else return Promise.reject(s+" provider is not supported.")}async function Ay(n){const e=dr(n),t=await rv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new nv(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new mv(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,e){const t=Ga(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ys(i,e??{}))return s;Qn(s,"already-initialized")}return t.initialize({options:e})}function Ry(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(mr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ny(n,e,t){const r=dr(n);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gv(e),{host:o,port:a}=Ly(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(ys(u,r.config.emulator)&&ys(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,os(o)?(ud(`${i}//${o}${l}`),hd("Auth",!0)):Dy()}function gv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ly(n){const e=gv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rh(o)}}}function Rh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Dy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function $y(n,e){return Ln(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n,e){return as(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function My(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Ka{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ao(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ao(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,t,"signInWithPassword",qy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Oy(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,r,"signUpPassword",$y,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return My(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n,e){return as(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="http://localhost";class ks extends Ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new ks(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qs(e,t)}buildRequest(){const e={requestUri:zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(n,e){return Ln(n,"POST","/v1/accounts:sendVerificationCode",Cn(n,e))}async function Fy(n,e){return as(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,e))}async function Uy(n,e){const t=await as(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,e));if(t.temporaryProof)throw Oi(n,"account-exists-with-different-credential",t);return t}const jy={USER_NOT_FOUND:"user-not-found"};async function Vy(n,e){const t={...e,operation:"REAUTH"};return as(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,t),jy)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ka{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Gi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Gi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Uy(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Vy(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Gi({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hy(n){const e=$i(qi(n)).link,t=e?$i(qi(e)).deep_link_id:null,r=$i(qi(n)).deep_link_id;return(r?$i(qi(r)).link:null)||r||t||e||n}class xd{constructor(e){const t=$i(qi(e)),r=t.apiKey??null,s=t.oobCode??null,i=By(t.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Hy(e);try{return new xd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,t){return ao._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=xd.parseLink(t);return de(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class To extends bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends To{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ks._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Or.credential(t,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends To{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends To{constructor(){super("twitter.com")}static credential(e,t){return ks._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zr.credential(t,r)}catch{return null}}}zr.TWITTER_SIGN_IN_METHOD="twitter.com";zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(n,e){return as(n,"POST","/v1/accounts:signUp",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Wn._fromIdTokenResponse(e,r,s),o=Lh(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Lh(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Lh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Dr{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ma(e,t,r,s)}}function _v(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(n,i,e,r):i})}async function Gy(n,e,t=!1){const r=await si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Es._forOperation(n,"link",r)}/**
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
 */async function Ky(n,e,t=!1){const{auth:r}=n;if(xn(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await si(n,_v(r,s,e,n),t);de(i.idToken,r,"internal-error");const o=_d(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(n.uid===a,r,"user-mismatch"),Es._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Qn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(n,e,t=!1){if(xn(n.app))return Promise.reject(ir(n));const r="signIn",s=await _v(n,r,e),i=await Es._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function yv(n,e){return wv(dr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n){const e=dr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yy(n,e,t){if(xn(n.app))return Promise.reject(ir(n));const r=dr(n),o=await Ys(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wy,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xv(n),l}),a=await Es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Qy(n,e,t){return xn(n.app)?Promise.reject(ir(n)):yv(Lt(n),vi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xv(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e){return Ln(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Lt(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await si(r,Jy(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Xy(n,e,t,r){return Lt(n).onIdTokenChanged(e,t,r)}function Zy(n,e,t){return Lt(n).beforeAuthStateChanged(e,t)}function kd(n,e,t,r){return Lt(n).onAuthStateChanged(e,t,r)}function e2(n){return Lt(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n,e){return Ln(n,"POST","/v2/accounts/mfaEnrollment:start",Cn(n,e))}const ga="__sak";/**
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
 */class Ev{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=1e3,n2=10;class Iv extends Ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,n2):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iv.type="LOCAL";const r2=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cv.type="SESSION";const Tv=Cv;/**
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
 */function s2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await s2(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class i2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ed("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function o2(n){jt().location.href=n}/**
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
 */function Id(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function a2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l2(){return navigator?.serviceWorker?.controller||null}function c2(){return Id()?self:null}/**
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
 */const Sv="firebaseLocalStorageDb",d2=1,ba="firebaseLocalStorage",Av="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qa(n,e){return n.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function u2(){const n=indexedDB.deleteDatabase(Sv);return new So(n).toPromise()}function bc(){const n=indexedDB.open(Sv,d2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ba,{keyPath:Av})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await u2(),e(await bc()))})})}async function $h(n,e,t){const r=Qa(n,!0).put({[Av]:e,value:t});return new So(r).toPromise()}async function h2(n,e){const t=Qa(n,!1).get(e),r=await new So(t).toPromise();return r===void 0?null:r.value}function qh(n,e){const t=Qa(n,!0).delete(e);return new So(t).toPromise()}const f2=800,p2=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>p2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(c2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await a2(),!this.activeServiceWorker)return;this.sender=new i2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await $h(e,ga,"1"),await qh(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$h(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>h2(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qa(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const v2=Pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e){return Ln(n,"POST","/v2/accounts/mfaSignIn:start",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=vv("rcb"),m2=new Io(3e4,6e4);class g2{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!jt().grecaptcha?.render}load(e,t=""){return de(b2(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Eh(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((r,s)=>{const i=jt().setTimeout(()=>{s(Nn(e,"network-request-failed"))},m2.get());jt()[zl]=()=>{jt().clearTimeout(i),delete jt()[zl];const a=jt().grecaptcha;if(!a||!Eh(a)){s(Nn(e,"internal-error"));return}const l=a.render;a.render=(u,f)=>{const m=l(u,f);return this.counter++,m},this.hostLanguage=t,r(a)};const o=`${by()}?${Rs({onload:zl,render:"explicit",hl:t})}`;yd(o).catch(()=>{clearTimeout(i),s(Nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!jt().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function b2(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _2{async load(e){return new ky(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="recaptcha",w2={theme:"light",type:"image"};class y2{constructor(e,t,r={...w2}){this.parameters=r,this.type=Ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dr(e),this.isInvisible=this.parameters.size==="invisible",de(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;de(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _2:new g2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){de(!this.parameters.sitekey,this.auth,"argument-error"),de(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),de(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=jt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){de(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){de(Xp()&&!Id(),this.auth,"internal-error"),await x2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ty(this.auth);de(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return de(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function x2(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function E2(n,e,t){if(xn(n.app))return Promise.reject(ir(n));const r=dr(n),s=await I2(r,e,Lt(t));return new k2(s,i=>yv(r,i))}async function I2(n,e,t){if(!n._getRecaptchaConfig())try{await Ay(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){de(s.type==="enroll",n,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ys(n,i,"mfaSmsEnrollment",async(u,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Wi){de(t?.type===Ki,u,"argument-error");const m=await Fl(u,f,t);return Dh(u,m)}return Dh(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{de(s.type==="signin",n,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;de(i,n,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ys(n,o,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===Wi){de(t?.type===Ki,f,"argument-error");const p=await Fl(f,m,t);return Oh(f,p)}return Oh(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ys(n,s,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===Wi){de(t?.type===Ki,l,"argument-error");const f=await Fl(l,u,t);return Nh(l,f)}return Nh(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function Fl(n,e,t){de(t.type===Ki,n,"argument-error");const r=await t.verify();de(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
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
 */function C2(n,e){return e?mr(e):(de(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cd extends Ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T2(n){return wv(n.auth,new Cd(n),n.bypassAuthState)}function S2(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),Ky(t,new Cd(n),n.bypassAuthState)}async function A2(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),Gy(t,new Cd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T2;case"linkViaPopup":case"linkViaRedirect":return A2;case"reauthViaPopup":case"reauthViaRedirect":return S2;default:Qn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new Io(2e3,1e4);class Vs extends Rv{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,P2.get())};e()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="pendingRedirect",Jo=new Map;class N2 extends Rv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await L2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L2(n,e){const t=q2(e),r=$2(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function D2(n,e){Jo.set(n._key(),e)}function $2(n){return mr(n._redirectPersistence)}function q2(n){return Qo(R2,n.config.apiKey,n.name)}async function O2(n,e,t=!1){if(xn(n.app))return Promise.reject(ir(n));const r=dr(n),s=C2(r,e),o=await new N2(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=600*1e3;class z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Nv(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Nn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}}function Mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nv({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function F2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(n,e={}){return Ln(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V2=/^https?/;async function B2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await U2(n);for(const t of e)try{if(H2(t))return}catch{}Qn(n,"unauthorized-domain")}function H2(n){const e=mc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!V2.test(t))return!1;if(j2.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const W2=new Io(3e4,6e4);function zh(){const n=jt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G2(n){return new Promise((e,t)=>{function r(){zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zh(),t(Nn(n,"network-request-failed"))},timeout:W2.get()})}if(jt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(jt().gapi?.load)r();else{const s=vv("iframefcb");return jt()[s]=()=>{gapi.load?r():t(Nn(n,"network-request-failed"))},yd(`${wy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function K2(n){return Xo=Xo||G2(n),Xo}/**
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
 */const Y2=new Io(5e3,15e3),Q2="__/auth/iframe",J2="emulator/auth/iframe",X2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ex(n){const e=n.config;de(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bd(e,J2):`https://${n.config.authDomain}/${Q2}`,r={apiKey:e.apiKey,appName:n.name,v:Ns},s=Z2.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rs(r).slice(1)}`}async function tx(n){const e=await K2(n),t=jt().gapi;return de(t,n,"internal-error"),e.open({where:document.body,url:ex(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(n,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},Y2.get());function l(){jt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rx=500,sx=600,ix="_blank",ox="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(n,e,t,r=rx,s=sx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...nx,width:r.toString(),height:s.toString(),top:i,left:o},u=_n().toLowerCase();t&&(a=lv(u)?ix:t),ov(u)&&(e=e||ox,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[b,g])=>`${p}${b}=${g},`,"");if(dy(u)&&a!=="_self")return lx(e||"",a),new Fh(null);const m=window.open(e||"",a,f);de(m,n,"popup-blocked");try{m.focus()}catch{}return new Fh(m)}function lx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const cx="__/auth/handler",dx="emulator/auth/handler",ux=encodeURIComponent("fac");async function Uh(n,e,t,r,s,i){de(n.config.authDomain,n,"auth-domain-config-required"),de(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ns,eventId:s};if(e instanceof bv){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",dc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof To){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),u=l?`#${ux}=${encodeURIComponent(l)}`:"";return`${hx(n)}?${Rs(a).slice(1)}${u}`}function hx({config:n}){return n.emulator?bd(n,dx):`https://${n.authDomain}/${cx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tv,this._completeRedirectFn=O2,this._overrideRedirectResult=D2}async _openPopup(e,t,r,s){Tr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Uh(e,t,r,mc(),s);return ax(e,i,Ed())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Uh(e,t,r,mc(),s);return o2(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tx(e),r=new z2(e);return t.register("authEvent",s=>(de(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ul,{type:Ul},s=>{const i=s?.[0]?.[Ul];i!==void 0&&t(!!i),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=B2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fv()||av()||wd()}}const px=fx;var jh="@firebase/auth",Vh="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gx(n){xs(new Xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pv(n)},u=new my(r,s,i,l);return Ry(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xs(new Xr("auth-internal",e=>{const t=dr(e.getProvider("auth").getImmediate());return(r=>new vx(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(jh,Vh,mx(n)),sr(jh,Vh,"esm2020")}/**
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
 */const bx=300,_x=Fp("authIdTokenMaxAge")||bx;let Bh=null;const wx=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_x)return;const s=t?.token;Bh!==s&&(Bh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yx(n=md()){const e=Ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Py(n,{popupRedirectResolver:px,persistence:[v2,r2,Tv]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wx(i.toString());Zy(t,o,()=>o(t.currentUser)),Xy(t,a=>o(a))}}const s=Op("auth");return s&&Ny(t,`http://${s}`),t}function xx(){return document.getElementsByTagName("head")?.[0]??document}gy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gx("Browser");var Hh={};const Wh="@firebase/database",Gh="1.1.0";/**
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
 */let Lv="";function kx(n){Lv=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:io(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return cr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ex(e)}}catch{}return new Ix},fs=Dv("localStorage"),Cx=Dv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new pd("@firebase/database"),Tx=(function(){let n=1;return function(){return n++}})(),$v=function(n){const e=$0(n),t=new R0;t.update(e);const r=t.digest();return cd.encodeByteArray(r)},Ao=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ao.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let Yi=null,Kh=!0;const Sx=function(n,e){X(!0,"Can't turn on custom loggers persistently."),Js.logLevel=wt.VERBOSE,Yi=Js.log.bind(Js)},Xt=function(...n){if(Kh===!0&&(Kh=!1,Yi===null&&Cx.get("logging_enabled")===!0&&Sx()),Yi){const e=Ao.apply(null,n);Yi(e)}},Po=function(n){return function(...e){Xt(n,...e)}},_c=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ao(...n);Js.error(e)},Sr=function(...n){const e=`FIREBASE FATAL ERROR: ${Ao(...n)}`;throw Js.error(e),new Error(e)},bn=function(...n){const e="FIREBASE WARNING: "+Ao(...n);Js.warn(e)},Ax=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Td=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Px=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Zr="[MIN_NAME]",Ar="[MAX_NAME]",Ls=function(n,e){if(n===e)return 0;if(n===Zr||e===Ar)return-1;if(e===Zr||n===Ar)return 1;{const t=Yh(n),r=Yh(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Rx=function(n,e){return n===e?0:n<e?-1:1},Ai=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Wt(e))},Sd=function(n){if(typeof n!="object"||n===null)return Wt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Wt(e[r]),t+=":",t+=Sd(n[e[r]]);return t+="}",t},qv=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function tn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ov=function(n){X(!Td(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const f=u.join("");let m="";for(l=0;l<64;l+=8){let p=parseInt(f.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),m=m+p}return m.toLowerCase()},Nx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dx(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const $x=new RegExp("^-?(0*)\\d{1,10}$"),qx=-2147483648,Ox=2147483647,Yh=function(n){if($x.test(n)){const e=Number(n);if(e>=qx&&e<=Ox)return e}return null},mi=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class zx{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bn(e)}}class Zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="5",Mv="v",zv="s",Fv="r",Uv="f",jv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vv="ls",Bv="p",wc="ac",Hv="websocket",Wv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ux(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kv(n,e,t){X(typeof e=="string","typeof type must == string"),X(typeof t=="object","typeof params must == object");let r;if(e===Hv)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Wv)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ux(n)&&(t.ns=n.namespace);const s=[];return tn(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.counters_={}}incrementCounter(e,t=1){cr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return h0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={},Vl={};function Pd(n){const e=n.toString();return jl[e]||(jl[e]=new jx),jl[e]}function Vx(n,e){const t=n.toString();return Vl[t]||(Vl[t]=e()),Vl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&mi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="start",Hx="close",Wx="pLPCommand",Gx="pRTLPCB",Yv="id",Qv="pw",Jv="ser",Kx="cb",Yx="seg",Qx="ts",Jx="d",Xx="dframe",Xv=1870,Zv=30,Zx=Xv-Zv,e3=25e3,t3=3e4;class Bs{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Po(e),this.stats_=Pd(t),this.urlFn=l=>(this.appCheckToken&&(l[wc]=this.appCheckToken),Kv(t,Wv,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(t3)),Px(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rd((...i)=>{const[o,a,l,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qh)this.id=a,this.password=l;else if(o===Hx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qh]="t",r[Jv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Kx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mv]=Ad,this.transportSessionId&&(r[zv]=this.transportSessionId),this.lastSessionId&&(r[Vv]=this.lastSessionId),this.applicationId&&(r[Bv]=this.applicationId),this.appCheckToken&&(r[wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&jv.test(location.hostname)&&(r[Fv]=Uv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bs.forceAllow_=!0}static forceDisallow(){Bs.forceDisallow_=!0}static isAvailable(){return Bs.forceAllow_?!0:!Bs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nx()&&!Lx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=$p(t),s=qv(r,Zx);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Xx]="t",r[Yv]=e,r[Qv]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Rd{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tx(),window[Wx+this.uniqueCallbackIdentifier]=e,window[Gx+this.uniqueCallbackIdentifier]=t,this.myIFrame=Rd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xt("frame writing exception"),a.stack&&Xt(a.stack),Xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yv]=this.myID,e[Qv]=this.myPW,e[Jv]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zv+r.length<=Xv;){const o=this.pendingSegs.shift();r=r+"&"+Yx+s+"="+o.seg+"&"+Qx+s+"="+o.ts+"&"+Jx+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(e3)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3=16384,r3=45e3;let _a=null;typeof MozWebSocket<"u"?_a=MozWebSocket:typeof WebSocket<"u"&&(_a=WebSocket);class Bn{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Po(this.connId),this.stats_=Pd(t),this.connURL=Bn.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[Mv]=Ad,typeof location<"u"&&location.hostname&&jv.test(location.hostname)&&(o[Fv]=Uv),t&&(o[zv]=t),r&&(o[Vv]=r),s&&(o[wc]=s),i&&(o[Bv]=i),Kv(e,Hv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fs.set("previous_websocket_failure",!0);try{let r;k0(),this.mySock=new _a(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_a!==null&&!Bn.forceDisallow_}static previouslyFailed(){return fs.isInMemoryStorage||fs.get("previous_websocket_failure")===!0}markConnectionHealthy(){fs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=io(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=qv(t,n3);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(r3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bn.responsesRequiredToBeHealthy=2;Bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static get ALL_TRANSPORTS(){return[Bs,Bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Bn&&Bn.isAvailable();let r=t&&!Bn.previouslyFailed();if(e.webSocketOnly&&(t||bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Bn];else{const s=this.transports_=[];for(const i of lo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=6e4,i3=5e3,o3=10*1024,a3=100*1024,Bl="t",Jh="d",l3="s",Xh="r",c3="e",Zh="o",ef="a",tf="n",nf="p",d3="h";class u3{constructor(e,t,r,s,i,o,a,l,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Po("c:"+this.id+":"),this.transportManager_=new lo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>a3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>o3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bl in e){const t=e[Bl];t===ef?this.upgradeIfSecondaryHealthy_():t===Xh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ai("t",e),r=Ai("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ef,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ai("t",e),r=Ai("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ai(Bl,e);if(Jh in e){const r=e[Jh];if(t===d3){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===tf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===l3?this.onConnectionShutdown_(r):t===Xh?this.onReset_(r):t===c3?_c("Server Error: "+r):t===Zh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_c("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ad!==r&&bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends tm{static getInstance(){return new wa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=32,sf=768;class vt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function at(){return new vt("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function es(n){return n.pieces_.length-n.pieceNum_}function It(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new vt(n.pieces_,e)}function Nd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function h3(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function co(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function nm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new vt(e,0)}function $t(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof vt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new vt(t,0)}function Be(n){return n.pieceNum_>=n.pieces_.length}function gn(n,e){const t=Ve(n),r=Ve(e);if(t===null)return e;if(t===r)return gn(It(n),It(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function f3(n,e){const t=co(n,0),r=co(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=Ls(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function Ld(n,e){if(es(n)!==es(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function qn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(es(n)>es(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class p3{constructor(e,t){this.errorPrefix_=t,this.parts_=co(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wa(this.parts_[r]);rm(this)}}function v3(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wa(e),rm(n)}function m3(n){const e=n.parts_.pop();n.byteLength_-=Wa(e),n.parts_.length>0&&(n.byteLength_-=1)}function rm(n){if(n.byteLength_>sf)throw new Error(n.errorPrefix_+"has a key path longer than "+sf+" bytes ("+n.byteLength_+").");if(n.parts_.length>rf)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rf+") or object contains a cycle "+ds(n))}function ds(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends tm{static getInstance(){return new Dd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=1e3,g3=300*1e3,of=30*1e3,b3=1.3,_3=3e4,w3="server_kill",af=3;class xr extends em{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xr.nextPersistentConnectionId_++,this.log_=Po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=g3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Wt(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new ko,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;xr.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&cr(e,"w")){const r=ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||P0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=of)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=A0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_c("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_3&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(m){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(m)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=p&&p.token,a=new u3(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,b=>{bn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(w3)},i))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&bn(m),l())}}}interrupt(e){Xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dc(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Sd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new vt(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=af&&(this.reconnectDelay_=of,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=af&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Lv.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:jp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wa.getInstance().currentlyOnline();return dc(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new He(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new He(Zr,e),s=new He(Zr,t);return this.compare(r,s)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class sm extends Ja{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,t){return Ls(e.name,t.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(Ar,jo)}makePost(e,t){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,jo)}toString(){return".key"}}const kr=new sm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=s??kn.EMPTY_NODE,this.right=i??kn.EMPTY_NODE}copy(e,t,r,s,i){return new Qt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qt.RED=!0;Qt.BLACK=!1;class y3{copy(e,t,r,s,i){return this}insert(e,t,r){return new Qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kn{constructor(e,t=kn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new kn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new kn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vo(this.root_,null,this.comparator_,!0,e)}}kn.EMPTY_NODE=new y3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(n,e){return Ls(n.name,e.name)}function $d(n,e){return Ls(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;function k3(n){yc=n}const im=function(n){return typeof n=="number"?"number:"+Ov(n):"string:"+n},om=function(n){if(n.isLeafNode()){const e=n.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cr(e,".sv"),"Priority must be a string or number.")}else X(n===yc||n.isEmpty(),"priority of unexpected type.");X(n===yc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf;class Yt{static set __childrenNodeConstructor(e){lf=e}static get __childrenNodeConstructor(){return lf}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),om(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Be(e)?this:Ve(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ve(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(It(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+im(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ov(this.value_):e+=this.value_,this.lazyHash_=$v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Yt.VALUE_TYPE_ORDER.indexOf(t),i=Yt.VALUE_TYPE_ORDER.indexOf(r);return X(s>=0,"Unknown leaf type: "+t),X(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am,lm;function E3(n){am=n}function I3(n){lm=n}class C3 extends Ja{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Ls(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(Ar,new Yt("[PRIORITY-POST]",lm))}makePost(e,t){const r=am(e);return new He(t,new Yt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Rt=new C3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=Math.log(2);class S3{constructor(e){const t=i=>parseInt(Math.log(i)/T3,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(n,e,t,r){n.sort(e);const s=function(l,u){const f=u-l;let m,p;if(f===0)return null;if(f===1)return m=n[l],p=t?t(m):m,new Qt(p,m.node,Qt.BLACK,null,null);{const b=parseInt(f/2,10)+l,g=s(l,b),w=s(b+1,u);return m=n[b],p=t?t(m):m,new Qt(p,m.node,Qt.BLACK,g,w)}},i=function(l){let u=null,f=null,m=n.length;const p=function(g,w){const k=m-g,I=m;m-=g;const P=s(k+1,I),C=n[k],L=t?t(C):C;b(new Qt(L,C.node,w,null,P))},b=function(g){u?(u.left=g,u=g):(f=g,u=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(g+1));w?p(k,Qt.BLACK):(p(k,Qt.BLACK),p(k,Qt.RED))}return f},o=new S3(n.length),a=i(o);return new kn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;const Fs={};class gr{static get Default(){return X(Fs&&Rt,"ChildrenNode.ts has not been loaded"),Hl=Hl||new gr({".priority":Fs},{".priority":Rt}),Hl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ri(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kn?t:null}hasIndex(e){return cr(this.indexSet_,e.toString())}addIndex(e,t){X(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(He.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ya(r,e.getCompare()):a=Fs;const l=e.toString(),u={...this.indexSet_};u[l]=e;const f={...this.indexes_};return f[l]=a,new gr(f,u)}addToIndexes(e,t){const r=ua(this.indexes_,(s,i)=>{const o=ri(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),s===Fs)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(He.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ya(a,o.getCompare())}else return Fs;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new He(e.name,a))),l.insert(e,e.node)}});return new gr(r,this.indexSet_)}removeFromIndexes(e,t){const r=ua(this.indexes_,s=>{if(s===Fs)return s;{const i=t.get(e.name);return i?s.remove(new He(e.name,i)):s}});return new gr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class Ie{static get EMPTY_NODE(){return Ri||(Ri=new Ie(new kn($d),null,gr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&om(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new Ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ri:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(It(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(X(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new He(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ri:this.priorityNode_;return new Ie(s,o,i)}}updateChild(e,t){const r=Ve(e);if(r===null)return t;{X(Ve(e)!==".priority"||es(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(It(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(Rt,(o,a)=>{t[o]=a.val(e),r++,i&&Ie.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+im(this.getPriority().val())+":"),this.forEachChild(Rt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":$v(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new He(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,He.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ro?-1:0}withIndex(e){if(e===kr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Rt),s=t.getIterator(Rt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kr?null:this.indexMap_.get(e.toString())}}Ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class A3 extends Ie{constructor(){super(new kn($d),Ie.EMPTY_NODE,gr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ie.EMPTY_NODE}isEmpty(){return!1}}const Ro=new A3;Object.defineProperties(He,{MIN:{value:new He(Zr,Ie.EMPTY_NODE)},MAX:{value:new He(Ar,Ro)}});sm.__EMPTY_NODE=Ie.EMPTY_NODE;Yt.__childrenNodeConstructor=Ie;k3(Ro);I3(Ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3=!0;function Ht(n,e=null){if(n===null)return Ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Yt(t,Ht(e))}if(!(n instanceof Array)&&P3){const t=[];let r=!1;if(tn(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ht(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new He(o,l)))}}),t.length===0)return Ie.EMPTY_NODE;const i=ya(t,x3,o=>o.name,$d);if(r){const o=ya(t,Rt.getCompare());return new Ie(i,Ht(e),new gr({".priority":o},{".priority":Rt}))}else return new Ie(i,Ht(e),gr.Default)}else{let t=Ie.EMPTY_NODE;return tn(n,(r,s)=>{if(cr(n,r)&&r.substring(0,1)!=="."){const i=Ht(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Ht(e))}}E3(Ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Ja{constructor(e){super(),this.indexPath_=e,X(!Be(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Ls(e.name,t.name):i}makePost(e,t){const r=Ht(e),s=Ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new He(t,s)}maxPost(){const e=Ie.EMPTY_NODE.updateChild(this.indexPath_,Ro);return new He(Ar,e)}toString(){return co(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3 extends Ja{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ls(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const r=Ht(e);return new He(t,r)}toString(){return".value"}}const cm=new R3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){return{type:"value",snapshotNode:n}}function ii(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function uo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ho(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function N3(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){X(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(uo(t,a)):X(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(t,r)):o.trackChildChange(ho(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Rt,(s,i)=>{t.hasChild(s)||r.trackChildChange(uo(s,i))}),t.isLeafNode()||t.forEachChild(Rt,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ho(s,i,o))}else r.trackChildChange(ii(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.indexedFilter_=new Od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fo.getStartPost_(e),this.endPost_=fo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new He(t,r))||(r=Ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ie.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ie.EMPTY_NODE);const i=this;return t.forEachChild(Rt,(o,a)=>{i.matches(new He(o,a))||(s=s.updateImmediateChild(o,Ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new He(t,r))||(r=Ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ie.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ie.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const m=this.index_.getCompare();o=(p,b)=>m(b,p)}else o=this.index_.getCompare();const a=e;X(a.numChildren()===this.limit_,"");const l=new He(t,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const m=a.getImmediateChild(t);let p=s.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const b=p==null?1:o(p,l);if(f&&!r.isEmpty()&&b>=0)return i?.trackChildChange(ho(t,r,m)),a.updateImmediateChild(t,r);{i?.trackChildChange(uo(t,m));const w=a.updateImmediateChild(t,Ie.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i?.trackChildChange(ii(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return r.isEmpty()?e:f&&o(u,l)>=0?(i!=null&&(i.trackChildChange(uo(u.name,u.node)),i.trackChildChange(ii(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(u.name,Ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zr}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rt}copy(){const e=new Md;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function D3(n){return n.loadsAllData()?new Od(n.getIndex()):n.hasLimit()?new L3(n):new fo(n)}function $3(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function q3(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function xc(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function O3(n,e,t){let r;return n.index_===kr||t?r=xc(n,e,t):r=xc(n,e,Ar),r.startAfterSet_=!0,r}function kc(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function M3(n,e,t){let r;return n.index_===kr||t?r=kc(n,e,t):r=kc(n,e,Zr),r.endBeforeSet_=!0,r}function z3(n,e){const t=n.copy();return t.index_=e,t}function cf(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Rt?t="$priority":n.index_===cm?t="$value":n.index_===kr?t="$key":(X(n.index_ instanceof qd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Wt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Wt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Wt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function df(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Rt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends em{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Po("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=xa.getListenId_(e,r),a={};this.listens_[o]=a;const l=cf(e._queryParams);this.restRequest_(i+".json",l,(u,f)=>{let m=f;if(u===404&&(m=null,u=null),u===null&&this.onDataUpdate_(i,m,!1,r),ri(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,t){const r=xa.getListenId_(e,t);delete this.listens_[r]}get(e){const t=cf(e._queryParams),r=e._path.toString(),s=new ko;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=io(a.responseText)}catch{bn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&bn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(){this.rootNode_=Ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return{value:null,children:new Map}}function um(n,e,t){if(Be(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ve(e);n.children.has(r)||n.children.set(r,ka());const s=n.children.get(r);e=It(e),um(s,e,t)}}function Ec(n,e,t){n.value!==null?t(e,n.value):U3(n,(r,s)=>{const i=new vt(e.toString()+"/"+r);Ec(s,i,t)})}function U3(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&tn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=10*1e3,V3=30*1e3,B3=300*1e3;class H3{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new j3(e);const r=uf+(V3-uf)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;tn(e,(s,i)=>{i>0&&cr(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*B3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));function zd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ud(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Gn.ACK_USER_WRITE,this.source=zd()}operationForChild(e){if(Be(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new vt(e));return new Ea(at(),t,this.revert)}}else return X(Ve(this.path)===e,"operationForChild called for unrelated child."),new Ea(It(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return Be(this.path)?new po(this.source,at()):new po(this.source,It(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Gn.OVERWRITE}operationForChild(e){return Be(this.path)?new Is(this.source,at(),this.snap.getImmediateChild(e)):new Is(this.source,It(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Gn.MERGE}operationForChild(e){if(Be(this.path)){const t=this.children.subtree(new vt(e));return t.isEmpty()?null:t.value?new Is(this.source,at(),t.value):new oi(this.source,at(),t)}else return X(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oi(this.source,It(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Be(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function G3(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(N3(o.childName,o.snapshotNode))}),Ni(n,s,"child_removed",e,r,t),Ni(n,s,"child_added",e,r,t),Ni(n,s,"child_moved",i,r,t),Ni(n,s,"child_changed",e,r,t),Ni(n,s,"value",e,r,t),s}function Ni(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>Y3(n,a,l)),o.forEach(a=>{const l=K3(n,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function K3(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Y3(n,e,t){if(e.childName==null||t.childName==null)throw pi("Should only compare child_ events.");const r=new He(e.childName,e.snapshotNode),s=new He(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){return{eventCache:n,serverCache:e}}function Ji(n,e,t,r){return Xa(new ts(e,t,r),n.serverCache)}function hm(n,e,t,r){return Xa(n.eventCache,new ts(e,t,r))}function Ia(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Cs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;const Q3=()=>(Wl||(Wl=new kn(Rx)),Wl);class Et{static fromObject(e){let t=new Et(null);return tn(e,(r,s)=>{t=t.set(new vt(r),s)}),t}constructor(e,t=Q3()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:at(),value:this.value};if(Be(e))return null;{const r=Ve(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(It(e),t);return i!=null?{path:$t(new vt(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Be(e))return this;{const t=Ve(e),r=this.children.get(t);return r!==null?r.subtree(It(e)):new Et(null)}}set(e,t){if(Be(e))return new Et(t,this.children);{const r=Ve(e),i=(this.children.get(r)||new Et(null)).set(It(e),t),o=this.children.insert(r,i);return new Et(this.value,o)}}remove(e){if(Be(e))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const t=Ve(e),r=this.children.get(t);if(r){const s=r.remove(It(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Et(null):new Et(this.value,i)}else return this}}get(e){if(Be(e))return this.value;{const t=Ve(e),r=this.children.get(t);return r?r.get(It(e)):null}}setTree(e,t){if(Be(e))return t;{const r=Ve(e),i=(this.children.get(r)||new Et(null)).setTree(It(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Et(this.value,o)}}fold(e){return this.fold_(at(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_($t(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,at(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Be(e))return null;{const i=Ve(e),o=this.children.get(i);return o?o.findOnPath_(It(e),$t(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,at(),t)}foreachOnPath_(e,t,r){if(Be(e))return this;{this.value&&r(t,this.value);const s=Ve(e),i=this.children.get(s);return i?i.foreachOnPath_(It(e),$t(t,s),r):new Et(null)}}foreach(e){this.foreach_(at(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_($t(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.writeTree_=e}static empty(){return new Kn(new Et(null))}}function Xi(n,e,t){if(Be(e))return new Kn(new Et(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=gn(s,e);return i=i.updateChild(o,t),new Kn(n.writeTree_.set(s,i))}else{const s=new Et(t),i=n.writeTree_.setTree(e,s);return new Kn(i)}}}function Ic(n,e,t){let r=n;return tn(t,(s,i)=>{r=Xi(r,$t(e,s),i)}),r}function hf(n,e){if(Be(e))return Kn.empty();{const t=n.writeTree_.setTree(e,new Et(null));return new Kn(t)}}function Cc(n,e){return Ds(n,e)!=null}function Ds(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(gn(t.path,e)):null}function ff(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Rt,(r,s)=>{e.push(new He(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new He(r,s.value))}),e}function Gr(n,e){if(Be(e))return n;{const t=Ds(n,e);return t!=null?new Kn(new Et(t)):new Kn(n.writeTree_.subtree(e))}}function Tc(n){return n.writeTree_.isEmpty()}function ai(n,e){return fm(at(),n.writeTree_,e)}function fm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=fm($t(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild($t(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n,e){return gm(e,n)}function J3(n,e,t,r,s){X(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Xi(n.visibleWrites,e,t)),n.lastWriteId=r}function X3(n,e,t,r){X(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Ic(n.visibleWrites,e,t),n.lastWriteId=r}function Z3(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function ek(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);X(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tk(a,r.path)?s=!1:qn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return nk(n),!0;if(r.snap)n.visibleWrites=hf(n.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{n.visibleWrites=hf(n.visibleWrites,$t(r.path,l))})}return!0}else return!1}function tk(n,e){if(n.snap)return qn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&qn($t(n.path,t),e))return!0;return!1}function nk(n){n.visibleWrites=pm(n.allWrites,rk,at()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function rk(n){return n.visible}function pm(n,e,t){let r=Kn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)qn(t,o)?(a=gn(t,o),r=Xi(r,a,i.snap)):qn(o,t)&&(a=gn(o,t),r=Xi(r,at(),i.snap.getChild(a)));else if(i.children){if(qn(t,o))a=gn(t,o),r=Ic(r,a,i.children);else if(qn(o,t))if(a=gn(o,t),Be(a))r=Ic(r,at(),i.children);else{const l=ri(i.children,Ve(a));if(l){const u=l.getChild(It(a));r=Xi(r,at(),u)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function vm(n,e,t,r,s){if(!r&&!s){const i=Ds(n.visibleWrites,e);if(i!=null)return i;{const o=Gr(n.visibleWrites,e);if(Tc(o))return t;if(t==null&&!Cc(o,at()))return null;{const a=t||Ie.EMPTY_NODE;return ai(o,a)}}}else{const i=Gr(n.visibleWrites,e);if(!s&&Tc(i))return t;if(!s&&t==null&&!Cc(i,at()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(qn(u.path,e)||qn(e,u.path))},a=pm(n.allWrites,o,e),l=t||Ie.EMPTY_NODE;return ai(a,l)}}}function sk(n,e,t){let r=Ie.EMPTY_NODE;const s=Ds(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Rt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Gr(n.visibleWrites,e);return t.forEachChild(Rt,(o,a)=>{const l=ai(Gr(i,new vt(o)),a);r=r.updateImmediateChild(o,l)}),ff(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Gr(n.visibleWrites,e);return ff(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ik(n,e,t,r,s){X(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=$t(e,t);if(Cc(n.visibleWrites,i))return null;{const o=Gr(n.visibleWrites,i);return Tc(o)?s.getChild(t):ai(o,s.getChild(t))}}function ok(n,e,t,r){const s=$t(e,t),i=Ds(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Gr(n.visibleWrites,s);return ai(o,r.getNode().getImmediateChild(t))}else return null}function ak(n,e){return Ds(n.visibleWrites,e)}function lk(n,e,t,r,s,i,o){let a;const l=Gr(n.visibleWrites,e),u=Ds(l,at());if(u!=null)a=u;else if(t!=null)a=ai(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],m=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let b=p.getNext();for(;b&&f.length<s;)m(b,r)!==0&&f.push(b),b=p.getNext();return f}else return[]}function ck(){return{visibleWrites:Kn.empty(),allWrites:[],lastWriteId:-1}}function Ca(n,e,t,r){return vm(n.writeTree,n.treePath,e,t,r)}function jd(n,e){return sk(n.writeTree,n.treePath,e)}function pf(n,e,t,r){return ik(n.writeTree,n.treePath,e,t,r)}function Ta(n,e){return ak(n.writeTree,$t(n.treePath,e))}function dk(n,e,t,r,s,i){return lk(n.writeTree,n.treePath,e,t,r,s,i)}function Vd(n,e,t){return ok(n.writeTree,n.treePath,e,t)}function mm(n,e){return gm($t(n.treePath,e),n.writeTree)}function gm(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;X(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,ho(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,uo(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,ho(r,e.snapshotNode,s.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const bm=new hk;class Bd{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ts(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cs(this.viewCache_),i=dk(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n){return{filter:n}}function pk(n,e){X(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vk(n,e,t,r,s){const i=new uk;let o,a;if(t.type===Gn.OVERWRITE){const u=t;u.source.fromUser?o=Sc(n,e,u.path,u.snap,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Be(u.path),o=Sa(n,e,u.path,u.snap,r,s,a,i))}else if(t.type===Gn.MERGE){const u=t;u.source.fromUser?o=gk(n,e,u.path,u.children,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ac(n,e,u.path,u.children,r,s,a,i))}else if(t.type===Gn.ACK_USER_WRITE){const u=t;u.revert?o=wk(n,e,u.path,r,s,i):o=bk(n,e,u.path,u.affectedTree,r,s,i)}else if(t.type===Gn.LISTEN_COMPLETE)o=_k(n,e,t.path,r,i);else throw pi("Unknown operation type: "+t.type);const l=i.getChanges();return mk(e,o,l),{viewCache:o,changes:l}}function mk(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ia(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(dm(Ia(e)))}}function _m(n,e,t,r,s,i){const o=e.eventCache;if(Ta(r,t)!=null)return e;{let a,l;if(Be(t))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Cs(e),f=u instanceof Ie?u:Ie.EMPTY_NODE,m=jd(r,f);a=n.filter.updateFullNode(e.eventCache.getNode(),m,i)}else{const u=Ca(r,Cs(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ve(t);if(u===".priority"){X(es(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const m=pf(r,t,f,l);m!=null?a=n.filter.updatePriority(f,m):a=o.getNode()}else{const f=It(t);let m;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=pf(r,t,o.getNode(),l);p!=null?m=o.getNode().getImmediateChild(u).updateChild(f,p):m=o.getNode().getImmediateChild(u)}else m=Vd(r,u,e.serverCache);m!=null?a=n.filter.updateChild(o.getNode(),u,m,f,s,i):a=o.getNode()}}return Ji(e,a,o.isFullyInitialized()||Be(t),n.filter.filtersNodes())}}function Sa(n,e,t,r,s,i,o,a){const l=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(Be(t))u=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const b=l.getNode().updateChild(t,r);u=f.updateFullNode(l.getNode(),b,null)}else{const b=Ve(t);if(!l.isCompleteForPath(t)&&es(t)>1)return e;const g=It(t),k=l.getNode().getImmediateChild(b).updateChild(g,r);b===".priority"?u=f.updatePriority(l.getNode(),k):u=f.updateChild(l.getNode(),b,k,g,bm,null)}const m=hm(e,u,l.isFullyInitialized()||Be(t),f.filtersNodes()),p=new Bd(s,m,i);return _m(n,m,t,s,p,a)}function Sc(n,e,t,r,s,i,o){const a=e.eventCache;let l,u;const f=new Bd(s,e,i);if(Be(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ji(e,u,!0,n.filter.filtersNodes());else{const m=Ve(t);if(m===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=Ji(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=It(t),b=a.getNode().getImmediateChild(m);let g;if(Be(p))g=r;else{const w=f.getCompleteChild(m);w!=null?Nd(p)===".priority"&&w.getChild(nm(p)).isEmpty()?g=w:g=w.updateChild(p,r):g=Ie.EMPTY_NODE}if(b.equals(g))l=e;else{const w=n.filter.updateChild(a.getNode(),m,g,p,f,o);l=Ji(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function vf(n,e){return n.eventCache.isCompleteForChild(e)}function gk(n,e,t,r,s,i,o){let a=e;return r.foreach((l,u)=>{const f=$t(t,l);vf(e,Ve(f))&&(a=Sc(n,a,f,u,s,i,o))}),r.foreach((l,u)=>{const f=$t(t,l);vf(e,Ve(f))||(a=Sc(n,a,f,u,s,i,o))}),a}function mf(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ac(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Be(t)?u=r:u=new Et(null).setTree(t,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((m,p)=>{if(f.hasChild(m)){const b=e.serverCache.getNode().getImmediateChild(m),g=mf(n,b,p);l=Sa(n,l,new vt(m),g,s,i,o,a)}}),u.children.inorderTraversal((m,p)=>{const b=!e.serverCache.isCompleteForChild(m)&&p.value===null;if(!f.hasChild(m)&&!b){const g=e.serverCache.getNode().getImmediateChild(m),w=mf(n,g,p);l=Sa(n,l,new vt(m),w,s,i,o,a)}}),l}function bk(n,e,t,r,s,i,o){if(Ta(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Be(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Sa(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Be(t)){let u=new Et(null);return l.getNode().forEachChild(kr,(f,m)=>{u=u.set(new vt(f),m)}),Ac(n,e,t,u,s,i,a,o)}else return e}else{let u=new Et(null);return r.foreach((f,m)=>{const p=$t(t,f);l.isCompleteForPath(p)&&(u=u.set(f,l.getNode().getChild(p)))}),Ac(n,e,t,u,s,i,a,o)}}function _k(n,e,t,r,s){const i=e.serverCache,o=hm(e,i.getNode(),i.isFullyInitialized()||Be(t),i.isFiltered());return _m(n,o,t,r,bm,s)}function wk(n,e,t,r,s,i){let o;if(Ta(r,t)!=null)return e;{const a=new Bd(r,e,s),l=e.eventCache.getNode();let u;if(Be(t)||Ve(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ca(r,Cs(e));else{const m=e.serverCache.getNode();X(m instanceof Ie,"serverChildren would be complete if leaf node"),f=jd(r,m)}f=f,u=n.filter.updateFullNode(l,f,i)}else{const f=Ve(t);let m=Vd(r,f,e.serverCache);m==null&&e.serverCache.isCompleteForChild(f)&&(m=l.getImmediateChild(f)),m!=null?u=n.filter.updateChild(l,f,m,It(t),a,i):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(l,f,Ie.EMPTY_NODE,It(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ca(r,Cs(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Ta(r,at())!=null,Ji(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Od(r.getIndex()),i=D3(r);this.processor_=fk(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Ie.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Ie.EMPTY_NODE,a.getNode(),null),f=new ts(l,o.isFullyInitialized(),s.filtersNodes()),m=new ts(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Xa(m,f),this.eventGenerator_=new W3(this.query_)}get query(){return this.query_}}function xk(n){return n.viewCache_.serverCache.getNode()}function kk(n){return Ia(n.viewCache_)}function Ek(n,e){const t=Cs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Be(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function gf(n){return n.eventRegistrations_.length===0}function Ik(n,e){n.eventRegistrations_.push(e)}function bf(n,e,t){const r=[];if(t){X(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function _f(n,e,t,r){e.type===Gn.MERGE&&e.source.queryId!==null&&(X(Cs(n.viewCache_),"We should always have a full cache before handling merges"),X(Ia(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=vk(n.processor_,s,e,t,r);return pk(n.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,wm(n,i.changes,i.viewCache.eventCache.getNode(),null)}function Ck(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Rt,(i,o)=>{r.push(ii(i,o))}),t.isFullyInitialized()&&r.push(dm(t.getNode())),wm(n,r,t.getNode(),e)}function wm(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return G3(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class ym{constructor(){this.views=new Map}}function Tk(n){X(!Aa,"__referenceConstructor has already been defined"),Aa=n}function Sk(){return X(Aa,"Reference.ts has not been loaded"),Aa}function Ak(n){return n.views.size===0}function Hd(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return X(i!=null,"SyncTree gave us an op for an invalid query."),_f(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(_f(o,e,t,r));return i}}function xm(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=Ca(t,s?r:null),l=!1;a?l=!0:r instanceof Ie?(a=jd(t,r),l=!1):(a=Ie.EMPTY_NODE,l=!1);const u=Xa(new ts(a,l,!1),new ts(r,s,!1));return new yk(e,u)}return o}function Pk(n,e,t,r,s,i){const o=xm(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ik(o,t),Ck(o,t)}function Rk(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=ns(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(bf(u,t,r)),gf(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(bf(l,t,r)),gf(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!ns(n)&&i.push(new(Sk())(e._repo,e._path)),{removed:i,events:o}}function km(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Kr(n,e){let t=null;for(const r of n.views.values())t=t||Ek(r,e);return t}function Em(n,e){if(e._queryParams.loadsAllData())return el(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Im(n,e){return Em(n,e)!=null}function ns(n){return el(n)!=null}function el(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;function Nk(n){X(!Pa,"__referenceConstructor has already been defined"),Pa=n}function Lk(){return X(Pa,"Reference.ts has not been loaded"),Pa}let Dk=1;class wf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Et(null),this.pendingWriteTree_=ck(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cm(n,e,t,r,s){return J3(n.pendingWriteTree_,e,t,r,s),s?gi(n,new Is(zd(),e,t)):[]}function $k(n,e,t,r){X3(n.pendingWriteTree_,e,t,r);const s=Et.fromObject(t);return gi(n,new oi(zd(),e,s))}function jr(n,e,t=!1){const r=Z3(n.pendingWriteTree_,e);if(ek(n.pendingWriteTree_,e)){let i=new Et(null);return r.snap!=null?i=i.set(at(),!0):tn(r.children,o=>{i=i.set(new vt(o),!0)}),gi(n,new Ea(r.path,i,t))}else return[]}function No(n,e,t){return gi(n,new Is(Fd(),e,t))}function qk(n,e,t){const r=Et.fromObject(t);return gi(n,new oi(Fd(),e,r))}function Ok(n,e){return gi(n,new po(Fd(),e))}function Mk(n,e,t){const r=Gd(n,t);if(r){const s=Kd(r),i=s.path,o=s.queryId,a=gn(i,e),l=new po(Ud(o),a);return Yd(n,i,l)}else return[]}function Ra(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Im(o,e))){const l=Rk(o,e,t,r);Ak(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const f=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,m=n.syncPointTree_.findOnPath(i,(p,b)=>ns(b));if(f&&!m){const p=n.syncPointTree_.subtree(i);if(!p.isEmpty()){const b=Uk(p);for(let g=0;g<b.length;++g){const w=b[g],k=w.query,I=Pm(n,w);n.listenProvider_.startListening(Zi(k),vo(n,k),I.hashFn,I.onComplete)}}}!m&&u.length>0&&!r&&(f?n.listenProvider_.stopListening(Zi(e),null):u.forEach(p=>{const b=n.queryToTagMap.get(tl(p));n.listenProvider_.stopListening(Zi(p),b)}))}jk(n,u)}return a}function Tm(n,e,t,r){const s=Gd(n,r);if(s!=null){const i=Kd(s),o=i.path,a=i.queryId,l=gn(o,e),u=new Is(Ud(a),l,t);return Yd(n,o,u)}else return[]}function zk(n,e,t,r){const s=Gd(n,r);if(s){const i=Kd(s),o=i.path,a=i.queryId,l=gn(o,e),u=Et.fromObject(t),f=new oi(Ud(a),l,u);return Yd(n,o,f)}else return[]}function Pc(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(p,b)=>{const g=gn(p,s);i=i||Kr(b,g),o=o||ns(b)});let a=n.syncPointTree_.get(s);a?(o=o||ns(a),i=i||Kr(a,at())):(a=new ym,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Ie.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((b,g)=>{const w=Kr(g,at());w&&(i=i.updateImmediateChild(b,w))}));const u=Im(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=tl(e);X(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const b=Vk();n.queryToTagMap.set(p,b),n.tagToQueryMap.set(b,p)}const f=Za(n.pendingWriteTree_,s);let m=Pk(a,e,t,f,i,l);if(!u&&!o&&!r){const p=Em(a,e);m=m.concat(Bk(n,e,p))}return m}function Wd(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=gn(o,e),u=Kr(a,l);if(u)return u});return vm(s,e,i,t,!0)}function Fk(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(u,f)=>{const m=gn(u,t);r=r||Kr(f,m)});let s=n.syncPointTree_.get(t);s?r=r||Kr(s,at()):(s=new ym,n.syncPointTree_=n.syncPointTree_.set(t,s));const i=r!=null,o=i?new ts(r,!0,!1):null,a=Za(n.pendingWriteTree_,e._path),l=xm(s,e,a,i?o.getNode():Ie.EMPTY_NODE,i);return kk(l)}function gi(n,e){return Sm(e,n.syncPointTree_,null,Za(n.pendingWriteTree_,at()))}function Sm(n,e,t,r){if(Be(n.path))return Am(n,e,t,r);{const s=e.get(at());t==null&&s!=null&&(t=Kr(s,at()));let i=[];const o=Ve(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,f=mm(r,o);i=i.concat(Sm(a,l,u,f))}return s&&(i=i.concat(Hd(s,n,r,t))),i}}function Am(n,e,t,r){const s=e.get(at());t==null&&s!=null&&(t=Kr(s,at()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=mm(r,o),f=n.operationForChild(o);f&&(i=i.concat(Am(f,a,l,u)))}),s&&(i=i.concat(Hd(s,n,r,t))),i}function Pm(n,e){const t=e.query,r=vo(n,t);return{hashFn:()=>(xk(e)||Ie.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Mk(n,t._path,r):Ok(n,t._path);{const i=Dx(s,t);return Ra(n,t,null,i)}}}}function vo(n,e){const t=tl(e);return n.queryToTagMap.get(t)}function tl(n){return n._path.toString()+"$"+n._queryIdentifier}function Gd(n,e){return n.tagToQueryMap.get(e)}function Kd(n){const e=n.indexOf("$");return X(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new vt(n.substr(0,e))}}function Yd(n,e,t){const r=n.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const s=Za(n.pendingWriteTree_,e);return Hd(r,t,s,null)}function Uk(n){return n.fold((e,t,r)=>{if(t&&ns(t))return[el(t)];{let s=[];return t&&(s=km(t)),tn(r,(i,o)=>{s=s.concat(o)}),s}})}function Zi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lk())(n._repo,n._path):n}function jk(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=tl(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function Vk(){return Dk++}function Bk(n,e,t){const r=e._path,s=vo(n,e),i=Pm(n,t),o=n.listenProvider_.startListening(Zi(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)X(!ns(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,m)=>{if(!Be(u)&&f&&ns(f))return[el(f).query];{let p=[];return f&&(p=p.concat(km(f).map(b=>b.query))),tn(m,(b,g)=>{p=p.concat(g)}),p}});for(let u=0;u<l.length;++u){const f=l[u];n.listenProvider_.stopListening(Zi(f),vo(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qd(t)}node(){return this.node_}}class Jd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$t(this.path_,e);return new Jd(this.syncTree_,t)}node(){return Wd(this.syncTree_,this.path_)}}const Hk=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yf=function(n,e,t){if(!n||typeof n!="object")return n;if(X(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Wk(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Gk(n[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Wk=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:X(!1,"Unexpected server value: "+n)}},Gk=function(n,e,t){n.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const s=e.node();if(X(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Rm=function(n,e,t,r){return Xd(e,new Jd(t,n),r)},Nm=function(n,e,t){return Xd(n,new Qd(e),t)};function Xd(n,e,t){const r=n.getPriority().val(),s=yf(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=yf(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Yt(a,Ht(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Yt(s))),o.forEachChild(Rt,(a,l)=>{const u=Xd(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function eu(n,e){let t=e instanceof vt?e:new vt(e),r=n,s=Ve(t);for(;s!==null;){const i=ri(r.node.children,s)||{children:{},childCount:0};r=new Zd(s,r,i),t=It(t),s=Ve(t)}return r}function bi(n){return n.node.value}function Lm(n,e){n.node.value=e,Rc(n)}function Dm(n){return n.node.childCount>0}function Kk(n){return bi(n)===void 0&&!Dm(n)}function nl(n,e){tn(n.node.children,(t,r)=>{e(new Zd(t,n,r))})}function $m(n,e,t,r){t&&e(n),nl(n,s=>{$m(s,e,!0)})}function Yk(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Lo(n){return new vt(n.parent===null?n.name:Lo(n.parent)+"/"+n.name)}function Rc(n){n.parent!==null&&Qk(n.parent,n.name,n)}function Qk(n,e,t){const r=Kk(t),s=cr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Rc(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Rc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=/[\[\].#$\/\u0000-\u001F\u007F]/,Xk=/[\[\].#$\u0000-\u001F\u007F]/,Gl=10*1024*1024,tu=function(n){return typeof n=="string"&&n.length!==0&&!Jk.test(n)},qm=function(n){return typeof n=="string"&&n.length!==0&&!Xk.test(n)},Zk=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qm(n)},Nc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Td(n)||n&&typeof n=="object"&&cr(n,".sv")},_i=function(n,e,t,r){r&&e===void 0||rl(Ha(n,"value"),e,t)},rl=function(n,e,t){const r=t instanceof vt?new p3(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ds(r));if(typeof e=="function")throw new Error(n+"contains a function "+ds(r)+" with contents = "+e.toString());if(Td(e))throw new Error(n+"contains "+e.toString()+" "+ds(r));if(typeof e=="string"&&e.length>Gl/3&&Wa(e)>Gl)throw new Error(n+"contains a string greater than "+Gl+" utf8 bytes "+ds(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(tn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!tu(o)))throw new Error(n+" contains an invalid key ("+o+") "+ds(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);v3(r,o),rl(n,a,r),m3(r)}),s&&i)throw new Error(n+' contains ".value" child '+ds(r)+" in addition to actual children.")}},eE=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=co(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!tu(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(f3);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&qn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},tE=function(n,e,t,r){const s=Ha(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];tn(e,(o,a)=>{const l=new vt(o);if(rl(s,a,$t(t,l)),Nd(l)===".priority"&&!Nc(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),eE(s,i)},nu=function(n,e,t,r){if(!qm(t))throw new Error(Ha(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nE=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nu(n,e,t)},ru=function(n,e){if(Ve(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},rE=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zk(t))throw new Error(Ha(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sl(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Ld(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function Om(n,e,t){sl(n,t),Mm(n,r=>Ld(r,e))}function zn(n,e,t){sl(n,t),Mm(n,r=>qn(r,e)||qn(e,r))}function Mm(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(iE(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function iE(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Yi&&Xt("event: "+t.toString()),mi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="repo_interrupt",aE=25;class lE{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ka(),this.transactionQueueTree_=new Zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cE(n,e,t){if(n.stats_=Pd(n.repoInfo_),n.forceRestClient_||Mx())n.server_=new xa(n.repoInfo_,(r,s,i,o)=>{xf(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>kf(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new xr(n.repoInfo_,e,(r,s,i,o)=>{xf(n,r,s,i,o)},r=>{kf(n,r)},r=>{dE(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Vx(n.repoInfo_,()=>new H3(n.stats_,n.server_)),n.infoData_=new F3,n.infoSyncTree_=new wf({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=No(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),su(n,"connected",!1),n.serverSyncTree_=new wf({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);zn(n.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function zm(n){const t=n.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function il(n){return Hk({timestamp:zm(n)})}function xf(n,e,t,r,s){n.dataUpdateCount++;const i=new vt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=ua(t,u=>Ht(u));o=zk(n.serverSyncTree_,i,l,s)}else{const l=Ht(t);o=Tm(n.serverSyncTree_,i,l,s)}else if(r){const l=ua(t,u=>Ht(u));o=qk(n.serverSyncTree_,i,l)}else{const l=Ht(t);o=No(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=li(n,i)),zn(n.eventQueue_,a,o)}function kf(n,e){su(n,"connected",e),e===!1&&pE(n)}function dE(n,e){tn(e,(t,r)=>{su(n,t,r)})}function su(n,e,t){const r=new vt("/.info/"+e),s=Ht(t);n.infoData_.updateSnapshot(r,s);const i=No(n.infoSyncTree_,r,s);zn(n.eventQueue_,r,i)}function iu(n){return n.nextWriteId_++}function uE(n,e,t){const r=Fk(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const i=Ht(s).withIndex(e._queryParams.getIndex());Pc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=No(n.serverSyncTree_,e._path,i);else{const a=vo(n.serverSyncTree_,e);o=Tm(n.serverSyncTree_,e._path,i,a)}return zn(n.eventQueue_,e._path,o),Ra(n.serverSyncTree_,e,t,null,!0),i},s=>(Do(n,"get for query "+Wt(e)+" failed: "+s),Promise.reject(new Error(s))))}function hE(n,e,t,r,s){Do(n,"set",{path:e.toString(),value:t,priority:r});const i=il(n),o=Ht(t,r),a=Wd(n.serverSyncTree_,e),l=Nm(o,a,i),u=iu(n),f=Cm(n.serverSyncTree_,e,l,u,!0);sl(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(p,b)=>{const g=p==="ok";g||bn("set at "+e+" failed: "+p);const w=jr(n.serverSyncTree_,u,!g);zn(n.eventQueue_,e,w),Dc(n,s,p,b)});const m=au(n,e);li(n,m),zn(n.eventQueue_,m,[])}function fE(n,e,t,r){Do(n,"update",{path:e.toString(),value:t});let s=!0;const i=il(n),o={};if(tn(t,(a,l)=>{s=!1,o[a]=Rm($t(e,a),Ht(l),n.serverSyncTree_,i)}),s)Xt("update() called with empty data.  Don't do anything."),Dc(n,r,"ok",void 0);else{const a=iu(n),l=$k(n.serverSyncTree_,e,o,a);sl(n.eventQueue_,l),n.server_.merge(e.toString(),t,(u,f)=>{const m=u==="ok";m||bn("update at "+e+" failed: "+u);const p=jr(n.serverSyncTree_,a,!m),b=p.length>0?li(n,e):e;zn(n.eventQueue_,b,p),Dc(n,r,u,f)}),tn(t,u=>{const f=au(n,$t(e,u));li(n,f)}),zn(n.eventQueue_,e,[])}}function pE(n){Do(n,"onDisconnectEvents");const e=il(n),t=ka();Ec(n.onDisconnect_,at(),(s,i)=>{const o=Rm(s,i,n.serverSyncTree_,e);um(t,s,o)});let r=[];Ec(t,at(),(s,i)=>{r=r.concat(No(n.serverSyncTree_,s,i));const o=au(n,s);li(n,o)}),n.onDisconnect_=ka(),zn(n.eventQueue_,at(),r)}function vE(n,e,t){let r;Ve(e._path)===".info"?r=Pc(n.infoSyncTree_,e,t):r=Pc(n.serverSyncTree_,e,t),Om(n.eventQueue_,e._path,r)}function Lc(n,e,t){let r;Ve(e._path)===".info"?r=Ra(n.infoSyncTree_,e,t):r=Ra(n.serverSyncTree_,e,t),Om(n.eventQueue_,e._path,r)}function mE(n){n.persistentConnection_&&n.persistentConnection_.interrupt(oE)}function Do(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Xt(t,...e)}function Dc(n,e,t,r){e&&mi(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Fm(n,e,t){return Wd(n.serverSyncTree_,e,t)||Ie.EMPTY_NODE}function ou(n,e=n.transactionQueueTree_){if(e||ol(n,e),bi(e)){const t=jm(n,e);X(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&gE(n,Lo(e),t)}else Dm(e)&&nl(e,t=>{ou(n,t)})}function gE(n,e,t){const r=t.map(u=>u.currentWriteId),s=Fm(n,e,r);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const f=t[u];X(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const m=gn(e,f.path);i=i.updateChild(m,f.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,u=>{Do(n,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const m=[];for(let p=0;p<t.length;p++)t[p].status=2,f=f.concat(jr(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&m.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();ol(n,eu(n.transactionQueueTree_,e)),ou(n,n.transactionQueueTree_),zn(n.eventQueue_,e,f);for(let p=0;p<m.length;p++)mi(m[p])}else{if(u==="datastale")for(let m=0;m<t.length;m++)t[m].status===3?t[m].status=4:t[m].status=0;else{bn("transaction at "+l.toString()+" failed: "+u);for(let m=0;m<t.length;m++)t[m].status=4,t[m].abortReason=u}li(n,e)}},o)}function li(n,e){const t=Um(n,e),r=Lo(t),s=jm(n,t);return bE(n,s,r),r}function bE(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=gn(t,l.path);let f=!1,m;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,m=l.abortReason,s=s.concat(jr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=aE)f=!0,m="maxretry",s=s.concat(jr(n.serverSyncTree_,l.currentWriteId,!0));else{const p=Fm(n,l.path,o);l.currentInputSnapshot=p;const b=e[a].update(p.val());if(b!==void 0){rl("transaction failed: Data returned ",b,l.path);let g=Ht(b);typeof b=="object"&&b!=null&&cr(b,".priority")||(g=g.updatePriority(p.getPriority()));const k=l.currentWriteId,I=il(n),P=Nm(g,p,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=iu(n),o.splice(o.indexOf(k),1),s=s.concat(Cm(n.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),s=s.concat(jr(n.serverSyncTree_,k,!0))}else f=!0,m="nodata",s=s.concat(jr(n.serverSyncTree_,l.currentWriteId,!0))}zn(n.eventQueue_,t,s),s=[],f&&(e[a].status=2,(function(p){setTimeout(p,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(m==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(m),!1,null))))}ol(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)mi(r[a]);ou(n,n.transactionQueueTree_)}function Um(n,e){let t,r=n.transactionQueueTree_;for(t=Ve(e);t!==null&&bi(r)===void 0;)r=eu(r,t),e=It(e),t=Ve(e);return r}function jm(n,e){const t=[];return Vm(n,e,t),t.sort((r,s)=>r.order-s.order),t}function Vm(n,e,t){const r=bi(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);nl(e,s=>{Vm(n,s,t)})}function ol(n,e){const t=bi(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,Lm(e,t.length>0?t:void 0)}nl(e,r=>{ol(n,r)})}function au(n,e){const t=Lo(Um(n,e)),r=eu(n.transactionQueueTree_,e);return Yk(r,s=>{Kl(n,s)}),Kl(n,r),$m(r,s=>{Kl(n,s)}),t}function Kl(n,e){const t=bi(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(X(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(jr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Lm(e,void 0):t.length=i+1,zn(n.eventQueue_,Lo(e),s);for(let o=0;o<r.length;o++)mi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function wE(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ef=function(n,e){const t=yE(n),r=t.namespace;t.domain==="firebase.com"&&Sr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ax();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Gv(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new vt(t.pathString)}},yE=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let m=n.indexOf("?");m===-1&&(m=n.length),e=n.substring(0,Math.min(f,m)),f<m&&(s=_E(n.substring(f,m)));const p=wE(n.substring(Math.min(n.length,m)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const b=e.slice(0,u);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),t=e.substring(g+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xE=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=If.charAt(t%64),t=Math.floor(t/64);X(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=If.charAt(e[s]);return X(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wt(this.snapshot.exportVal())}}class Hm{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return X(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Be(this._path)?null:Nd(this._path)}get ref(){return new hr(this._repo,this._path)}get _queryIdentifier(){const e=df(this._queryParams),t=Sd(e);return t==="{}"?"default":t}get _queryObject(){return df(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof ur))return!1;const t=this._repo===e._repo,r=Ld(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+h3(this._path)}}function kE(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function $o(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===kr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Zr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Ar)throw new Error(r);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===Rt){if(e!=null&&!Nc(e)||t!=null&&!Nc(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(X(n.getIndex()instanceof qd||n.getIndex()===cm,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function al(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class hr extends ur{constructor(e,t){super(e,t,new Md,!1)}get parent(){const e=nm(this._path);return e===null?null:new hr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ci{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new vt(e),r=di(this.ref,e);return new ci(this._node.getChild(t),r,Rt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ci(s,di(this.ref,r),Rt)))}hasChild(e){const t=new vt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pt(n,e){return n=Lt(n),n._checkNotDeleted("ref"),e!==void 0?di(n._root,e):n._root}function di(n,e){return n=Lt(n),Ve(n._path)===null?nE("child","path",e):nu("child","path",e),new hr(n._repo,$t(n._path,e))}function mo(n,e){n=Lt(n),ru("push",n._path),_i("push",e,n._path,!0);const t=zm(n._repo),r=xE(t),s=di(n,r),i=di(n,r);let o;return e!=null?o=Gm(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function EE(n){return ru("remove",n._path),Gm(n,null)}function Gm(n,e){n=Lt(n),ru("set",n._path),_i("set",e,n._path,!1);const t=new ko;return hE(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function wi(n,e){tE("update",e,n._path);const t=new ko;return fE(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function rs(n){n=Lt(n);const e=new Wm(()=>{}),t=new ll(e);return uE(n._repo,n,t).then(r=>new ci(r,new hr(n._repo,n._path),n._queryParams.getIndex()))}class ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new Bm("value",this,new ci(e.snapshotNode,new hr(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hm(this,e,t):null}matches(e){return e instanceof ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class lu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hm(this,e,t):null}createEvent(e,t){X(e.childName!=null,"Child events should have a childName.");const r=di(new hr(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Bm(e.type,this,new ci(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof lu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function cu(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=t,u=(f,m)=>{Lc(n._repo,n,a),l(f,m)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new Wm(t,i||void 0),a=e==="value"?new ll(o):new lu(e,o);return vE(n._repo,n,a),()=>Lc(n._repo,n,a)}function qo(n,e,t,r){return cu(n,"value",e,t,r)}function IE(n,e,t,r){return cu(n,"child_added",e,t,r)}function CE(n,e,t,r){return cu(n,"child_removed",e,t,r)}function du(n,e,t){Lc(n._repo,n,null)}class $s{}class TE extends $s{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){_i("endAt",this._value,e._path,!0);const t=kc(e._queryParams,this._value,this._key);if(al(t),$o(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ur(e._repo,e._path,t,e._orderByCalled)}}function ps(n,e){return new TE(n,e)}class SE extends $s{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){_i("endBefore",this._value,e._path,!1);const t=M3(e._queryParams,this._value,this._key);if(al(t),$o(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ur(e._repo,e._path,t,e._orderByCalled)}}function Cf(n,e){return new SE(n,e)}class AE extends $s{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){_i("startAt",this._value,e._path,!0);const t=xc(e._queryParams,this._value,this._key);if(al(t),$o(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ur(e._repo,e._path,t,e._orderByCalled)}}function Un(n=null,e){return new AE(n,e)}class PE extends $s{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){_i("startAfter",this._value,e._path,!1);const t=O3(e._queryParams,this._value,this._key);if(al(t),$o(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ur(e._repo,e._path,t,e._orderByCalled)}}function Tf(n,e){return new PE(n,e)}class RE extends $s{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ur(e._repo,e._path,$3(e._queryParams,this._limit),e._orderByCalled)}}function Bo(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new RE(n)}class NE extends $s{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ur(e._repo,e._path,q3(e._queryParams,this._limit),e._orderByCalled)}}function Ho(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new NE(n)}class LE extends $s{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){kE(e,"orderByChild");const t=new vt(this._path);if(Be(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new qd(t),s=z3(e._queryParams,r);return $o(s),new ur(e._repo,e._path,s,!0)}}function fn(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return nu("orderByChild","path",n),new LE(n)}function pn(n,...e){let t=Lt(n);for(const r of e)t=r._apply(t);return t}Tk(hr);Nk(hr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="FIREBASE_DATABASE_EMULATOR_HOST",$c={};let $E=!1;function qE(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=os(i);n.repoInfo_=new Gv(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function OE(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ef(i,s),a=o.repoInfo,l;typeof process<"u"&&Hh&&(l=Hh[DE]),l?(i=`http://${l}?ns=${a.namespace}`,o=Ef(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new Fx(n.name,n.options,e);rE("Invalid Firebase Database URL",o),Be(o.path)||Sr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=zE(a,n,u,new zx(n,t));return new FE(f,n)}function ME(n,e){const t=$c[e];(!t||t[n.key]!==n)&&Sr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mE(n),delete t[n.key]}function zE(n,e,t,r){let s=$c[e.name];s||(s={},$c[e.name]=s);let i=s[n.toURLString()];return i&&Sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new lE(n,$E,t,r),s[n.toURLString()]=i,i}class FE{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hr(this._repo,at())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ME(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sr("Cannot call "+e+" on a deleted database.")}}function UE(n=md(),e){const t=Ga(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Mp("database");r&&jE(t,...r)}return t}function jE(n,e,t,r={}){n=Lt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&ys(r,i.repoInfo_.emulatorOptions))return;Sr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Zo(Zo.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Up(r.mockUserToken,n.app.options.projectId);o=new Zo(a)}os(e)&&(ud(e),hd("Database",!0)),qE(i,s,r,o)}/**
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
 */function VE(n){kx(Ns),xs(new Xr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return OE(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),sr(Wh,Gh,n),sr(Wh,Gh,"esm2020")}xr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};VE();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="firebasestorage.googleapis.com",Ym="storageBucket",BE=120*1e3,HE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Dr{constructor(e,t,r=0){super(Yl(e),`Firebase Storage: ${t} (${Yl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function Yl(n){return"storage/"+n}function uu(){const n="An unknown error occurred, please check the error payload for server response.";return new Mt(Ot.UNKNOWN,n)}function WE(n){return new Mt(Ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function GE(n){return new Mt(Ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Mt(Ot.UNAUTHENTICATED,n)}function YE(){return new Mt(Ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QE(n){return new Mt(Ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function JE(){return new Mt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XE(){return new Mt(Ot.CANCELED,"User canceled the upload/download.")}function ZE(n){return new Mt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function eI(n){return new Mt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tI(){return new Mt(Ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ym+"' property when initializing the app?")}function nI(){return new Mt(Ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rI(){return new Mt(Ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sI(n){return new Mt(Ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qc(n){return new Mt(Ot.INVALID_ARGUMENT,n)}function Qm(){return new Mt(Ot.APP_DELETED,"The Firebase app was deleted.")}function iI(n){return new Mt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function eo(n,e){return new Mt(Ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Li(n){throw new Mt(Ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=An.makeFromUrl(e,t)}catch{return new An(e,"")}if(r.path==="")return r;throw eI(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${s}/o${p}`,"i"),g={bucket:1,path:3},w=t===Km?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",I=new RegExp(`^https?://${w}/${s}/${k}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:b,indices:g,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<C.length;L++){const D=C[L],q=D.regex.exec(e);if(q){const A=q[D.indices.bucket];let E=q[D.indices.path];E||(E=""),r=new An(A,E),D.postModify(r);break}}if(r==null)throw ZE(e);return r}}class oI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function m(k){s=setTimeout(()=>{s=null,n(b,l())},k)}function p(){i&&clearTimeout(i)}function b(k,...I){if(u){p();return}if(k){p(),f.call(null,k,...I);return}if(l()||o){p(),f.call(null,k,...I);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,m(C)}let g=!1;function w(k){g||(g=!0,p(),!u&&(s!==null?(k||(a=2),clearTimeout(s),m(0)):k||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function lI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n){return n!==void 0}function dI(n){return typeof n=="object"&&!Array.isArray(n)}function hu(n){return typeof n=="string"||n instanceof String}function Sf(n){return fu()&&n instanceof Blob}function fu(){return typeof Blob<"u"}function Af(n,e,t,r){if(r<e)throw qc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Jm(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var gs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gs||(gs={}));/**
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
 */function uI(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,t,r,s,i,o,a,l,u,f,m,p=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=m,this.retry=p,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gs.NO_ERROR,l=i.getStatus();if(!a||uI(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===gs.ABORT;r(!1,new Wo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Wo(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cI(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=uu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Qm():XE();o(l)}else{const l=JE();o(l)}};this.canceled_?t(!1,new Wo(!1,null,!0)):this.backoffId_=aI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function fI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function mI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function gI(n,e,t,r,s,i,o=!0,a=!1){const l=Jm(n.urlParams),u=n.url+l,f=Object.assign({},n.headers);return vI(f,e),fI(f,t),pI(f,i),mI(f,r),new hI(u,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _I(...n){const e=bI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(fu())return new Blob(n);throw new Mt(Ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function yI(n){if(typeof atob>"u")throw sI("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ql{constructor(e,t){this.data=e,this.contentType=t||null}}function xI(n,e){switch(n){case tr.RAW:return new Ql(Xm(e));case tr.BASE64:case tr.BASE64URL:return new Ql(Zm(n,e));case tr.DATA_URL:return new Ql(EI(e),II(e))}throw uu()}function Xm(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function kI(n){let e;try{e=decodeURIComponent(n)}catch{throw eo(tr.DATA_URL,"Malformed data URL.")}return Xm(e)}function Zm(n,e){switch(n){case tr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw eo(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case tr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw eo(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=yI(e)}catch(s){throw s.message.includes("polyfill")?s:eo(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class eg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw eo(tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=CI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function EI(n){const e=new eg(n);return e.base64?Zm(tr.BASE64,e.rest):kI(e.rest)}function II(n){return new eg(n).contentType}function CI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){let r=0,s="";Sf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Sf(this.data_)){const r=this.data_,s=wI(r,e,t);return s===null?null:new Fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Fr(r,!0)}}static getBlob(...e){if(fu()){const t=e.map(r=>r instanceof Fr?r.data_:r);return new Fr(_I.apply(null,t))}else{const t=e.map(o=>hu(o)?xI(tr.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Fr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){let e;try{e=JSON.parse(n)}catch{return null}return dI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function SI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function ng(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n,e){return e}class hn{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||AI}}let Go=null;function PI(n){return!hu(n)||n.length<2?n:ng(n)}function rg(){if(Go)return Go;const n=[];n.push(new hn("bucket")),n.push(new hn("generation")),n.push(new hn("metageneration")),n.push(new hn("name","fullPath",!0));function e(i,o){return PI(o)}const t=new hn("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new hn("size");return s.xform=r,n.push(s),n.push(new hn("timeCreated")),n.push(new hn("updated")),n.push(new hn("md5Hash",null,!0)),n.push(new hn("cacheControl",null,!0)),n.push(new hn("contentDisposition",null,!0)),n.push(new hn("contentEncoding",null,!0)),n.push(new hn("contentLanguage",null,!0)),n.push(new hn("contentType",null,!0)),n.push(new hn("metadata","customMetadata",!0)),Go=n,Go}function RI(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new An(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function NI(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return RI(r,n),r}function sg(n,e,t){const r=tg(e);return r===null?null:NI(n,r,t)}function LI(n,e,t,r){const s=tg(e);if(s===null||!hu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=n.bucket,m=n.fullPath,p="/b/"+o(f)+"/o/"+o(m),b=pu(p,t,r),g=Jm({alt:"media",token:u});return b+g})[0]}function DI(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class ig{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){if(!n)throw uu()}function $I(n,e){function t(r,s){const i=sg(n,s,e);return og(i!==null),i}return t}function qI(n,e){function t(r,s){const i=sg(n,s,e);return og(i!==null),LI(i,s,n.host,n._protocol)}return t}function ag(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=YE():s=KE():t.getStatus()===402?s=GE(n.bucket):t.getStatus()===403?s=QE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function OI(n){const e=ag(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=WE(n.path)),i.serverResponse=s.serverResponse,i}return t}function MI(n,e,t){const r=e.fullServerUrl(),s=pu(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ig(s,i,qI(n,t),o);return a.errorHandler=OI(e),a}function zI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function FI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=zI(null,e)),r}function UI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let L=0;L<2;L++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=FI(e,r,s),f=DI(u,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",b=Fr.getBlob(m,r,p);if(b===null)throw nI();const g={name:u.fullPath},w=pu(i,n.host,n._protocol),k="POST",I=n.maxUploadRetryTime,P=new ig(w,k,$I(n,t),I);return P.urlParams=g,P.headers=o,P.body=b.uploadData(),P.errorHandler=ag(e),P}class jI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Li("cannot .send() more than once");if(os(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VI extends jI{initXhr(){this.xhr_.responseType="text"}}function lg(){return new VI}/**
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
 */class Ts{constructor(e,t){this._service=e,t instanceof An?this._location=t:this._location=An.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ts(e,t)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ng(this._location.path)}get storage(){return this._service}get parent(){const e=TI(this._location.path);if(e===null)return null;const t=new An(this._location.bucket,e);return new Ts(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw iI(e)}}function BI(n,e,t){n._throwIfRoot("uploadBytes");const r=UI(n.storage,n._location,rg(),new Fr(e,!0),t);return n.storage.makeRequestWithTokens(r,lg).then(s=>({metadata:s,ref:n}))}function HI(n){n._throwIfRoot("getDownloadURL");const e=MI(n.storage,n._location,rg());return n.storage.makeRequestWithTokens(e,lg).then(t=>{if(t===null)throw rI();return t})}function WI(n,e){const t=SI(n._location.path,e),r=new An(n._location.bucket,t);return new Ts(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){return/^[A-Za-z]+:\/\//.test(n)}function KI(n,e){return new Ts(n,e)}function cg(n,e){if(n instanceof vu){const t=n;if(t._bucket==null)throw tI();const r=new Ts(t,t._bucket);return e!=null?cg(r,e):r}else return e!==void 0?WI(n,e):n}function YI(n,e){if(e&&GI(e)){if(n instanceof vu)return KI(n,e);throw qc("To use ref(service, url), the first argument must be a Storage instance.")}else return cg(n,e)}function Pf(n,e){const t=e?.[Ym];return t==null?null:An.makeFromBucketSpec(t,n)}function QI(n,e,t,r={}){n.host=`${e}:${t}`;const s=os(e);s&&(ud(`https://${n.host}/b`),hd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Up(i,n.app.options.projectId))}class vu{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Km,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BE,this._maxUploadRetryTime=HE,this._requests=new Set,s!=null?this._bucket=An.makeFromBucketSpec(s,this._host):this._bucket=Pf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=Pf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Af("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Af("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ts(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new oI(Qm());{const o=gI(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Rf="@firebase/storage",Nf="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="storage";function JI(n,e,t){return n=Lt(n),BI(n,e,t)}function XI(n){return n=Lt(n),HI(n)}function ZI(n,e){return n=Lt(n),YI(n,e)}function e5(n=md(),e){n=Lt(n);const r=Ga(n,dg).getImmediate({identifier:e}),s=Mp("storage");return s&&t5(r,...s),r}function t5(n,e,t,r={}){QI(n,e,t,r)}function n5(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new vu(t,r,s,e,Ns)}function r5(){xs(new Xr(dg,n5,"PUBLIC").setMultipleInstances(!0)),sr(Rf,Nf,""),sr(Rf,Nf,"esm2020")}r5();const ug={apiKey:"AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",authDomain:"withcenter-test-5.firebaseapp.com",databaseURL:"https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"withcenter-test-5",storageBucket:"withcenter-test-5.appspot.com",messagingSenderId:"1064417466216",appId:"1:1064417466216:web:039565a60d9b0b74db28dd"};console.log("Firebase Config:",ug);const mu=Wp(ug),or=yx(mu),Tt=UE(mu),s5=e5(mu);var i5=R('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'),o5=R('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'),a5=R('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'),l5=R('<h3 class="post-title svelte-1t1odzy"> </h3>'),c5=R('<p class="post-text svelte-1t1odzy"> </p>'),d5=R('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'),u5=R('<div class="posts svelte-1t1odzy"></div>'),h5=R('<div class="post-list-container svelte-1t1odzy"><!></div>');const f5={hash:"svelte-1t1odzy",code:`
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
  }`};function p5(n,e){dt(e,!0),ct(n,f5);let t=je(e,"path",7,"posts"),r=je(e,"limit",7,"10"),s=ne(an([])),i=ne(!0),o=ne(""),a=null;Kt(()=>{l()}),Np(()=>{u()});function l(){try{a=Pt(Tt,t()),qo(a,P=>{const C=P.val();C?y(s,Object.entries(C).map(([L,D])=>({id:L,...D})).sort((L,D)=>(D.timestamp||0)-(L.timestamp||0)).slice(0,parseInt(r())),!0):y(s,[],!0),y(i,!1),y(o,"")},P=>{console.error("데이터 읽기 오류:",P),y(o,"데이터를 불러오는 중 오류가 발생했습니다."),y(i,!1)})}catch(P){console.error("구독 설정 오류:",P),y(o,"데이터베이스 연결에 실패했습니다."),y(i,!1)}}function u(){a&&du(a)}function f(P){const C=new CustomEvent("post-click",{detail:{post:P},bubbles:!0,composed:!0});dispatchEvent(C)}function m(P,C){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),f(C))}function p(P){if(!P)return"";const C=typeof P=="string"?Number(P):P,L=new Date(C),q=new Date().getTime()-L.getTime(),A=Math.floor(q/6e4),E=Math.floor(q/36e5),T=Math.floor(q/864e5);return A<1?"방금 전":A<60?`${A}분 전`:E<24?`${E}시간 전`:T<7?`${T}일 전`:L.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}var b={get path(){return t()},set path(P="posts"){t(P),Fe()},get limit(){return r()},set limit(P="10"){r(P),Fe()}},g=h5(),w=d(g);{var k=P=>{var C=i5();x(P,C)},I=P=>{var C=me(),L=le(C);{var D=A=>{var E=o5(),T=d(E),N=d(T,!0);c(T),c(E),z(()=>_(N,v(o))),x(A,E)},q=A=>{var E=me(),T=le(E);{var N=j=>{var K=a5();x(j,K)},$=j=>{var K=u5();Zt(K,21,()=>v(s),ee=>ee.id,(ee,W)=>{var Z=d5();Z.__click=()=>f(v(W)),Z.__keydown=oe=>m(oe,v(W));var ce=d(Z),ae=d(ce),ie=d(ae),H=d(ie,!0);c(ie);var Y=h(ie,2),J=d(Y,!0);c(Y),c(ae),c(ce);var te=h(ce,2),ue=d(te);{var U=oe=>{var Ee=l5(),re=d(Ee,!0);c(Ee),z(()=>_(re,v(W).title)),x(oe,Ee)};G(ue,oe=>{v(W).title&&oe(U)})}var S=h(ue,2);{var M=oe=>{var Ee=c5(),re=d(Ee,!0);c(Ee),z(()=>_(re,v(W).content)),x(oe,Ee)};G(S,oe=>{v(W).content&&oe(M)})}c(te);var B=h(te,2),O=d(B),Q=d(O);c(O);var F=h(O,2),se=d(F);c(F),c(B),c(Z),z(oe=>{Ae(Z,"aria-label",`게시물: ${(v(W).title||v(W).content||"제목 없음")??""}`),_(H,v(W).author||"익명"),_(J,oe),_(Q,`👍 ${(v(W).likes||0)??""}`),_(se,`💬 ${(v(W).comments?.length||0)??""}`)},[()=>p(v(W).timestamp)]),x(ee,Z)}),c(K),x(j,K)};G(T,j=>{v(s).length===0?j(N):j($,!1)},!0)}x(A,E)};G(L,A=>{v(o)?A(D):A(q,!1)},!0)}x(P,C)};G(w,P=>{v(i)?P(k):P(I,!1)})}return c(g),x(n,g),ut(b)}Ct(["click","keydown"]);customElements.define("post-list",pe(p5,{path:{},limit:{}},[],[],!0));r1();/**
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
 */const v5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var m5=O1("<svg><!><!></svg>");function mt(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]),r=ht(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);dt(e,!1);let s=je(e,"name",12,void 0),i=je(e,"color",12,"currentColor"),o=je(e,"size",12,24),a=je(e,"strokeWidth",12,2),l=je(e,"absoluteStrokeWidth",12,!1),u=je(e,"iconNode",28,()=>[]);const f=(...w)=>w.filter((k,I,P)=>!!k&&P.indexOf(k)===I).join(" ");var m={get name(){return s()},set name(w){s(w),Fe()},get color(){return i()},set color(w){i(w),Fe()},get size(){return o()},set size(w){o(w),Fe()},get strokeWidth(){return a()},set strokeWidth(w){a(w),Fe()},get absoluteStrokeWidth(){return l()},set absoluteStrokeWidth(w){l(w),Fe()},get iconNode(){return u()},set iconNode(w){u(w),Fe()}};wn();var p=m5();ch(p,(w,k)=>({...v5,...r,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>(Us(l()),Us(a()),Us(o()),ar(()=>l()?Number(a())*24/Number(o()):a())),()=>(Us(s()),Us(t),ar(()=>f("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var b=d(p);Zt(b,1,u,pr,(w,k)=>{var I=_s(()=>S_(v(k),2));let P=()=>v(I)[0],C=()=>v(I)[1];var L=me(),D=le(L);B1(D,P,!0,(q,A)=>{ch(q,()=>({...C()}))}),x(w,L)});var g=h(b);return ft(g,e,"default",{}),c(p),x(n,p),ut(m)}pe(mt,{name:{},color:{},size:{},strokeWidth:{},absoluteStrokeWidth:{},iconNode:{}},["default"],[],!0);function hg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];mt(n,yt({name:"book-open"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(hg,{},["default"],[],!0);function fg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];mt(n,yt({name:"camera"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(fg,{},["default"],[],!0);function Oc(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];mt(n,yt({name:"check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Oc,{},["default"],[],!0);function gu(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];mt(n,yt({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(gu,{},["default"],[],!0);function Na(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];mt(n,yt({name:"circle-check"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Na,{},["default"],[],!0);function pg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];mt(n,yt({name:"circle-x"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(pg,{},["default"],[],!0);function Mc(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];mt(n,yt({name:"circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Mc,{},["default"],[],!0);function zc(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];mt(n,yt({name:"external-link"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(zc,{},["default"],[],!0);function bu(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];mt(n,yt({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(bu,{},["default"],[],!0);function vg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];mt(n,yt({name:"house"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(vg,{},["default"],[],!0);function Fc(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];mt(n,yt({name:"info"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Fc,{},["default"],[],!0);function Mi(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];mt(n,yt({name:"layout-grid"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Mi,{},["default"],[],!0);function mg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];mt(n,yt({name:"log-in"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(mg,{},["default"],[],!0);function gg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];mt(n,yt({name:"log-out"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(gg,{},["default"],[],!0);function zi(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];mt(n,yt({name:"menu"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(zi,{},["default"],[],!0);function Vr(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];mt(n,yt({name:"message-circle"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Vr,{},["default"],[],!0);function bg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];mt(n,yt({name:"phone"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(bg,{},["default"],[],!0);function _g(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];mt(n,yt({name:"send"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(_g,{},["default"],[],!0);function wg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];mt(n,yt({name:"server"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(wg,{},["default"],[],!0);function yg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];mt(n,yt({name:"settings"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(yg,{},["default"],[],!0);function xg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];mt(n,yt({name:"square-pen"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(xg,{},["default"],[],!0);function kg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];mt(n,yt({name:"trash-2"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(kg,{},["default"],[],!0);function Eg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];mt(n,yt({name:"triangle-alert"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Eg,{},["default"],[],!0);function Ig(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];mt(n,yt({name:"trending-up"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Ig,{},["default"],[],!0);function Yr(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];mt(n,yt({name:"user"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Yr,{},["default"],[],!0);function go(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];mt(n,yt({name:"users"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(go,{},["default"],[],!0);function _u(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];mt(n,yt({name:"x"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(_u,{},["default"],[],!0);function Cg(n,e){const t=ht(e,["children","$$slots","$$events","$$legacy","$$host"]);/**
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
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];mt(n,yt({name:"zap"},()=>t,{get iconNode(){return r},children:(s,i)=>{var o=me(),a=le(o);ft(a,e,"default",{}),x(s,o)},$$slots:{default:!0}}))}pe(Cg,{},["default"],[],!0);var g5=R("<option> </option>"),b5=R('<div class="error-message svelte-1e01td3"> </div>'),_5=R('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...',1),w5=R("<!> 인증 코드 전송",1),y5=R('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'),x5=R('<div class="error-message svelte-1e01td3"> </div>'),k5=R('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...',1),E5=R("<!> 로그인",1),I5=R('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'),C5=R('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');const T5={hash:"svelte-1e01td3",code:`\r
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
  }`};function S5(n,e){dt(e,!0),ct(n,T5);const t=[{code:"+63",name:"필리핀 (Philippines)",flag:"🇵🇭"},{code:"+82",name:"한국 (Korea)",flag:"🇰🇷"},{code:"+86",name:"중국 (China)",flag:"🇨🇳"},{code:"+81",name:"일본 (Japan)",flag:"🇯🇵"},{code:"+1",name:"미국 (USA)",flag:"🇺🇸"}];let r=ne("+82"),s=ne(""),i=ne(""),o=ne("phone"),a=ne(!1),l=ne(""),u=ne(null),f=ne(null),m=ne(void 0),p=ne(null);function b(){return new Promise((E,T)=>{try{if(!v(p)){const N=new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");console.error(N),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(N);return}if(v(u)){if(v(m)!==void 0&&typeof window.grecaptcha<"u")try{window.grecaptcha.reset(v(m)),console.log("reCAPTCHA reset completed"),E(v(m));return}catch(N){console.warn("Failed to reset reCAPTCHA:",N)}try{v(u).clear(),y(u,null),y(m,void 0)}catch(N){console.warn("Failed to clear reCAPTCHA:",N)}}y(u,new y2(or,v(p).id,{size:"invisible",callback:()=>{console.log("reCAPTCHA verified (invisible mode)")},"expired-callback":()=>{console.warn("reCAPTCHA expired. Resetting..."),typeof window.grecaptcha<"u"&&v(m)!==void 0?window.grecaptcha.reset(v(m)):b()}}),!0),v(u).render().then(N=>{y(m,N,!0),console.log("reCAPTCHA rendered with widgetId:",N),E(N)}).catch(N=>{console.error("Failed to render reCAPTCHA:",N),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(N)})}catch(N){console.error("reCAPTCHA 초기화 실패:",N),y(l,"reCAPTCHA 초기화에 실패했습니다."),T(N)}})}Kt(()=>{const E=document.createElement("div");return E.id="recaptcha-container-"+Math.random().toString(36).substr(2,9),E.className="recaptcha-container-light-dom",E.style.cssText=`
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `,document.body.appendChild(E),y(p,E,!0),b(),()=>{E&&E.parentNode&&E.parentNode.removeChild(E)}});function g(E){return/^[0-9]{6,15}$/.test(E)}async function w(){if(y(l,""),!g(v(s))){y(l,"올바른 전화번호를 입력해주세요 (6-15자리 숫자)");return}y(a,!0);try{const E=`${v(r)}${v(s)}`;console.log("Sending verification code to:",E),y(f,await E2(or,E,v(u)),!0),console.log("Verification code sent successfully (invisible reCAPTCHA verified)"),y(o,"code")}catch(E){console.error("SMS 전송 실패:",E),E.code==="auth/invalid-phone-number"?y(l,"잘못된 전화번호 형식입니다."):E.code==="auth/too-many-requests"?y(l,"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요."):y(l,`SMS 전송 실패: ${E.message}`)}finally{y(a,!1)}}async function k(){if(y(l,""),v(i).length!==6){y(l,"6자리 인증 코드를 입력해주세요.");return}y(a,!0);try{const E=await v(f).confirm(v(i));console.log("Login successful:",E.user);const T=new CustomEvent("login-success",{detail:{user:E.user,phoneNumber:E.user.phoneNumber}});dispatchEvent(T),y(s,""),y(i,""),y(o,"phone")}catch(E){console.error("인증 코드 확인 실패:",E),E.code==="auth/invalid-verification-code"?y(l,"잘못된 인증 코드입니다."):E.code==="auth/code-expired"?y(l,"인증 코드가 만료되었습니다. 다시 시도해주세요."):y(l,`인증 실패: ${E.message}`);const T=new CustomEvent("login-error",{detail:{error:E.message}});dispatchEvent(T)}finally{y(a,!1)}}function I(){y(o,"phone"),y(i,""),y(l,"")}var P=C5(),C=d(P),L=d(C);{var D=E=>{var T=y5(),N=d(T),$=d(N);bg($,{class:"icon-large"}),At(4),c(N);var j=h(N,2),K=h(d(j),2);Zt(K,21,()=>t,pr,(U,S)=>{var M=g5(),B=d(M);c(M);var O={};z(()=>{_(B,`${v(S).flag??""}
                ${v(S).name??""} (${v(S).code??""})`),O!==(O=v(S).code)&&(M.value=(M.__value=v(S).code)??"")}),x(U,M)}),c(K),c(j);var ee=h(j,2),W=h(d(ee),2),Z=d(W),ce=d(Z,!0);c(Z);var ae=h(Z,2);ws(ae),c(W),At(2),c(ee);var ie=h(ee,2);{var H=U=>{var S=b5(),M=d(S,!0);c(S),z(()=>_(M,v(l))),x(U,S)};G(ie,U=>{v(l)&&U(H)})}var Y=h(ie,2);Y.__click=w;var J=d(Y);{var te=U=>{var S=_5();At(),x(U,S)},ue=U=>{var S=w5(),M=le(S);_g(M,{class:"btn-icon"}),At(),x(U,S)};G(J,U=>{v(a)?U(te):U(ue,!1)})}c(Y),c(T),z(()=>{K.disabled=v(a),_(ce,v(r)),ae.disabled=v(a),Y.disabled=v(a)||!v(s)}),id(K,()=>v(r),U=>y(r,U)),Jr("keypress",ae,U=>{U.key==="Enter"&&(U.preventDefault(),w())}),rr(ae,()=>v(s),U=>y(s,U)),x(E,T)},q=E=>{var T=me(),N=le(T);{var $=j=>{var K=I5(),ee=d(K),W=d(ee);Oc(W,{class:"icon-large"});var Z=h(W,4),ce=d(Z);At(2),c(Z),c(ee);var ae=h(ee,2),ie=h(d(ae),2);ws(ie),At(2),c(ae);var H=h(ae,2);{var Y=Q=>{var F=x5(),se=d(F,!0);c(F),z(()=>_(se,v(l))),x(Q,F)};G(H,Q=>{v(l)&&Q(Y)})}var J=h(H,2),te=d(J);te.__click=I;var ue=h(te,2);ue.__click=k;var U=d(ue);{var S=Q=>{var F=k5();At(),x(Q,F)},M=Q=>{var F=E5(),se=le(F);Oc(se,{class:"btn-icon"}),At(),x(Q,F)};G(U,Q=>{v(a)?Q(S):Q(M,!1)})}c(ue),c(J);var B=h(J,2),O=h(d(B));O.__click=I,c(B),c(K),z(()=>{_(ce,`${v(r)??""}${v(s)??""}로 전송된`),ie.disabled=v(a),te.disabled=v(a),ue.disabled=v(a)||v(i).length!==6}),Jr("keypress",ie,Q=>{Q.key==="Enter"&&(Q.preventDefault(),k())}),rr(ie,()=>v(i),Q=>y(i,Q)),x(j,K)};G(N,j=>{v(o)==="code"&&j($)},!0)}x(E,T)};G(L,E=>{v(o)==="phone"?E(D):E(q,!1)})}var A=h(L,2);ad(A,E=>y(p,E),()=>v(p)),c(C),c(P),x(n,P),ut()}Ct(["click"]);customElements.define("phone-login",pe(S5,{},[],[],!0));const cl=Ps(null),A5=Ps(!0);kd(or,n=>{cl.set(n),A5.set(!1)});async function P5(){try{return await e2(or),{success:!0}}catch(n){return console.error("로그아웃 오류:",n),{success:!1,error:n.message}}}class us{static#t=null;#e=ne(!0);get loading(){return v(this.#e)}set loading(e){y(this.#e,e,!0)}#r=ne(!1);get isAuthenticated(){return v(this.#r)}set isAuthenticated(e){y(this.#r,e,!0)}uid=null;email=null;phoneNumber=null;#s=ne(null);get data(){return v(this.#s)}set data(e){y(this.#s,e,!0)}#l=ne(null);get error(){return v(this.#l)}set error(e){y(this.#l,e,!0)}#o=null;#i=null;#n=null;constructor(){typeof window<"u"&&this.#a()}static getInstance(){return us.#t||(us.#t=new us),us.#t}#a(){try{if(!or)throw new Error("Auth instance not available");this.#i=kd(or,e=>{if(this.#o=e,e){this.isAuthenticated=!0,this.uid=e.uid,this.email=e.email,this.phoneNumber=e.phoneNumber,this.error=null,this.#n&&(this.#n(),this.#n=null);const t=Pt(Tt,`users/${e.uid}`);this.#n=qo(t,async r=>{this.data=r.val(),!this.data&&e&&console.log("FirebaseLoginUser: 사용자 데이터가 없습니다.")},r=>{this.error=r})}else this.isAuthenticated=!1,this.uid=null,this.email=null,this.phoneNumber=null,this.data=null,this.#n&&(this.#n(),this.#n=null);this.loading=!1},e=>{this.error=e,this.loading=!1,this.isAuthenticated=!1})}catch(e){this.error=e,this.loading=!1}}async updateProfile(e){if(!this.#o)throw new Error("User is not authenticated");try{const t={};e.displayName!==void 0&&(t.displayName=e.displayName),e.photoUrl!==void 0&&(t.photoURL=e.photoUrl),Object.keys(t).length>0&&await kv(this.#o,t);const r={...e},s=Pt(Tt,`users/${this.uid}`);await wi(s,r)}catch(t){throw this.error=t,t}}async updateField(e,t){return this.updateProfile({[e]:t})}async updateDisplayName(e){return this.updateProfile({displayName:e})}async updatePhotoUrl(e){return this.updateProfile({photoUrl:e})}dispose(){this.#i&&(this.#i(),this.#i=null),this.#n&&(this.#n(),this.#n=null),us.#t=null}}const Se=us.getInstance(),R5="GitHub",N5={프로젝트_명칭:"Hanbabo 0.2",웰컴:"Welcome to SNS!",로그인:"Login",회원가입:"Sign Up",인사:"Hello, {name}!",언어선택:"Language Selection",홈:"Home",프로필:"Profile",친구:"Friends",채팅:"Chat",설정:"Settings",로그아웃:"Logout",이메일:"Email",비밀번호:"Password",비밀번호확인:"Confirm Password",이름:"Name",닉네임:"Nickname",저장:"Save",취소:"Cancel",확인:"OK",삭제:"Delete",수정:"Edit",검색:"Search",알림:"Notifications",새글작성:"New Post",댓글:"Comments",좋아요:"Like",공유:"Share",신고:"Report",포럼:"Forum",사용자찾기:"Find Users",내계정:"My Account",프로필수정:"Edit Profile",메뉴:"Menu",퀵메뉴:"Quick Menu",사용자목록:"User List",내프로필:"My Profile",게시판:"Forum",시작하기:"Get Started",회원정보수정:"Edit My Info",회원목록:"Member List",프로젝트GitHub:"Project GitHub",한바보참여단톡방:"Join Hanbabo Chat",개발일지:"Dev Diary",언어설정:"Language Settings",언어전환기능안내:"Language switching feature coming soon.",빌드버전:"Build Version",카피레프트:"© Copyleft",AI소개:"AI can build features like this.",통계:"Statistics",전체사용자:"Total Users",전체점수:"Total Score",전체글:"Total Posts",전체댓글:"Total Comments",전체좋아요:"Total Likes",채팅메시지:"Chat Messages",준비중:"Coming Soon",통계실시간업데이트:"Statistics are updated in real-time.",로그인성공:"✅ Login successful: {email}",오류:"❌ Error: {error}",게시물클릭알림:`Post clicked:

Title: {title}
Author: {author}`,제목없음:"No Title",익명:"Anonymous",게시물목록:"Post List",정보:"About",로그인회원가입:"Login / Sign Up",Firebase설명:"Login form using Firebase Authentication.",게시물목록설명:"Display posts from Firebase Realtime Database in real-time.",로그인필요:"⚠️ Please login first to view posts.",프로젝트정보:"Project Information",프로젝트개요:"🎯 Project Overview",프로젝트개요설명:"A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",기술스택:"🛠️ Tech Stack",포함컴포넌트:"📦 Included Components",사용방법:"🚀 Usage",특징:"💡 Features","home.vibeBanner":"100% Built with Vibe Coding","home.techStack.title":"🛠️ Tech Stack","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"Custom Elements","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android and iOS app development","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"Chosen as real-time database","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"Self-hosting","home.aiTruth.title":"The Truth About AI Era","home.aiTruth.item1.title":"What Doesn't Change in the AI Era is You","home.aiTruth.item1.content":"No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.","home.aiTruth.item2.title":"AI Alone Can't Do Everything","home.aiTruth.item2.content":"AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.","home.aiTruth.item2.hint":"💡 AI can write code, but it's you who decides what code to write.","home.aiTruth.item3.title":"Copyright Issues","home.aiTruth.item3.content":"Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.","home.aiTruth.item3.gpl":"This project follows the GPL license.","home.aiTruth.item3.hint":"Sharing as open source helps avoid legal issues and contributes to the community.","home.title":"Hanbabo - Social Network for AI Era","home.description.part1":"Hanbabo is a modern social network platform built with AI.","home.description.linkText":"Join our chat","home.description.part2":"to develop together and share ideas!","home.todo.title":"Development Roadmap","home.todo.item1.label":"Initial Setup","home.todo.item1.description":"Svelte 5, Vite, Firebase configuration completed","home.todo.item2.label":"Authentication System","home.todo.item2.description":"Firebase Authentication integration completed","home.todo.item3.label":"UI Components","home.todo.item3.description":"Build reusable UI based on Web Components","home.todo.item3.subitem1":"Topbar, Sidebar, Layout components","home.todo.item3.subitem2":"Responsive design applied","home.todo.item4.label":"Forum Features","home.todo.item5.label":"Chat Features","home.todo.item5.subitem1":"Real-time 1:1 chat","home.todo.item5.subitem2":"Group chat rooms","home.todo.item5.subitem3":"File sharing","home.todo.item5.subitem4":"Read receipts","home.todo.item6.label":"Friend Management","home.todo.item6.subitem1":"Add/remove friends","home.todo.item6.subitem2":"Manage friend list","home.todo.item7.label":"Notification System","home.todo.item7.subitem1":"Real-time push notifications","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"Server-side logic and data consistency","home.todo.item8.subitem1":"User profile synchronization (onUserProfileUpdate)","home.todo.item8.subitem2":"Like/comment count synchronization","home.todo.item8.subitem3":"Cleanup associated data on post deletion","home.todo.item8.subitem4":"Notification triggers and delivery","home.overview.title":"Project Overview","home.overview.brand":"Hanbabo","home.overview.description":" is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.","home.overview.badge1":"Real-time Chat","home.overview.badge2":"Local Meetups","home.overview.badge3":"Friend Management","home.overview.badge4":"Community Forum","home.aiChange.title":"Change and Growth in the AI Era","home.aiChange.description":"AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.","home.aiChange.emphasis":"The important thing is not how to use AI, but","home.aiChange.highlight":"what you will create","home.aiChange.conclusion":" - having a clear vision.","home.aiChange.hint":"This project was created in collaboration with AI. All code was written together with Claude.","phoneLogin.title":"Login with Phone Number","phoneLogin.description":"Enter your phone number and we'll send you a verification code via SMS.","phoneLogin.countryLabel":"Select Country","phoneLogin.phoneLabel":"Phone Number","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"Enter numbers only (without country code)","phoneLogin.sendCode":"Send Verification Code","phoneLogin.sending":"Sending...","phoneLogin.codeTitle":"Enter Verification Code","phoneLogin.codeDescription":"Please enter the 6-digit verification code sent to {phone}.","phoneLogin.codeLabel":"Verification Code","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"Enter 6 digits","phoneLogin.verifying":"Verifying...","phoneLogin.verify":"Login","phoneLogin.back":"Back","phoneLogin.resendHint":"Didn't receive the code?","phoneLogin.resendLink":"Resend","phoneLogin.error.invalidPhone":"Please enter a valid phone number (6-15 digits)","phoneLogin.error.invalidCode":"Please enter a 6-digit verification code.","phoneLogin.error.wrongCode":"Invalid verification code.","phoneLogin.error.expiredCode":"Verification code has expired. Please try again.","phoneLogin.error.tooManyRequests":"Too many requests. Please try again later.","phoneLogin.error.recaptchaExpired":"reCAPTCHA has expired. Please refresh the page.","phoneLogin.error.recaptchaInit":"Failed to initialize reCAPTCHA.","phoneLogin.error.smsFailed":"SMS sending failed: {error}","label.category.community":"Community","label.category.qna":"Q&A","label.category.news":"News","label.category.market":"Marketplace",현재언어:"Current language",언어_한국어:"Korean",언어_영어:"English",언어_일본어:"Japanese",언어_중국어:"Chinese",공사중메시지:"This page is under construction",공사중설명_채팅목록:"The chat list feature is currently under development and will be updated soon.",공사중설명_설정:"The settings feature is currently under development and will be updated soon.",공사중설명_게시물상세:"The post detail view feature is currently under development and will be updated soon.",공사중설명_앱정보:"The about page is currently under development and will be updated soon.",공사중설명_도움말:"The help page is currently under development and will be updated soon.",공사중설명_이용약관:"The terms of service page is currently under development and will be updated soon.",공사중설명_개인정보:"The privacy policy page is currently under development and will be updated soon.",공사중설명_문의하기:"The contact page is currently under development and will be updated soon.",메뉴로돌아가기:"Back to Menu",페이지선택:"Select a page to navigate to below",사용자프로필:"User Profile",게시물상세예시:"Post Detail (e.g., ID:123)",채팅목록:"Chat List",테스트게시글생성:"[Dev] Generate Test Posts",로그인성공알림:`Login successful!
Phone: {phone}`,로그인실패:"Login failed: {error}",전화번호로로그인:"Sign in easily with your phone number.",로그인하셨습니다:"You are logged in as {phone}.",홈으로이동:"Go to Home",사용자목록로딩:"Loading user list...",등록된사용자없음:"No registered users yet.",사용자목록실패:"Failed to load user list.",더많은사용자로딩:"Loading more users...",모든사용자로딩완료:"All users have been loaded.",정보없음:"No information",사용자:"User",이름없음:"No name",나:"Me",가입일:"Joined on",프로필보기:"View Profile",프로필사진:"Profile Photo",사진업로드중:"Uploading photo...",사진업로드실패:"Failed to upload photo: {error}",다른사진작업중:"Another photo operation is in progress...",프로필사진제거중:"Removing profile photo...",프로필사진제거완료:"Profile photo has been removed.",프로필사진제거실패:"Failed to remove profile photo: {error}",프로필업데이트중:"Updating profile...",프로필업데이트완료:"Profile has been updated successfully.",프로필업데이트실패:"Failed to update profile: {error}",닉네임입력:"Enter your nickname",닉네임최대길이:"Maximum 50 characters",소개글:"Bio",소개글입력:"Tell us about yourself",소개글최대길이:"Maximum 200 characters",홈페이지:"Website",홈페이지입력:"Enter your website URL",GitHub:R5,GitHub입력:"Enter your GitHub profile URL",사진업로드:"Upload Photo",사진제거:"Remove Photo",저장하기:"Save Changes",저장중:"Saving...",테스트게시글생성타이틀:"📝 Generate Test Posts",테스트게시글생성설명:"Generate 100 fun test posts for each category, totaling 400 posts.",로그인필요메시지:"⚠️ Login required to use this feature.",로그인하러가기:"Go to Login",게시글생성시작:"Start Generating Posts",생성중:"Generating...",생성성공:"✅ Successfully generated {count} posts!",생성실패:"❌ Failed to generate posts: {error}",경고:"⚠️ Warning",경고메시지:"This will create {count} test posts. Only use for testing purposes.",진행상황:"Progress",생성된게시글수:"{count} of {total} posts created",로딩중:"Loading...",게시판설명:" for the latest news and share your opinions.",글쓰기:"Write",게시글없음:"No posts yet",첫게시글공유:"Share your first story and start the community.",새글작성2:"Write New Post",게시글로딩중:"Loading posts...",게시글로드실패:"Failed to load posts.",더많은게시글로딩:"Loading more posts...",모든게시글확인:"All posts have been loaded.",새게시글작성:"Write New Post",카테고리:"Category",카테고리선택:"Select Category",카테고리선택필요:"Please select a category.",제목:"Title",제목입력:"Enter title",제목입력필요:"Please enter a title.",내용:"Content",내용입력:"Enter content",내용입력필요:"Please enter content.",전송:"Send",전송중:"Sending...",게시글작성완료:"Post has been created.",게시글저장실패:"Failed to save post: {error}",게시글저장중오류:"An error occurred while saving the post.",로그인정보확인불가:"Could not verify login information.",좋아요실패:"An error occurred while processing like.",이미좋아요:"You already liked this post.",댓글작성:"Write Comment",댓글내용입력:"Enter comment content",댓글이작성되었습니다:"Comment has been created.",댓글작성실패:"Failed to create comment: {error}",댓글내용입력필요:"Please enter comment content.","error.unknown":"An unknown error occurred.","error.network":"Please check your network connection.","error.offline":"No internet connection.","error.auth.invalidEmail":"Invalid email format.","error.auth.userDisabled":"This account has been disabled.","error.auth.userNotFound":"User not found.","error.auth.wrongPassword":"Incorrect password.","error.auth.emailAlreadyInUse":"This email is already in use.","error.auth.weakPassword":"Password is too weak. (Minimum 6 characters)","error.auth.operationNotAllowed":"This operation is not allowed.","error.auth.tooManyRequests":"Too many requests. Please try again later.","error.auth.invalidVerificationCode":"Invalid verification code.","error.auth.invalidPhoneNumber":"Invalid phone number.","error.auth.missingVerificationCode":"Please enter verification code.","error.auth.sessionExpired":"Session expired. Please log in again.","error.auth.requiresRecentLogin":"Please log in again for security.","error.auth.credentialAlreadyInUse":"This credential is already in use by another account.","error.db.permissionDenied":"You don't have permission to perform this action.","error.db.authenticationRequired":"Please log in first.","error.db.networkError":"Database connection error.","error.storage.unauthorized":"No permission to access file.","error.storage.bucketNotFound":"Storage bucket not found.","error.storage.invalidArgument":"Invalid argument.","error.storage.objectNotFound":"File not found.","error.storage.retryLimitExceeded":"File upload error. Please try again.","error.storage.quotaExceeded":"Storage quota exceeded.","error.storage.canceled":"File upload canceled.",게시글수정:"Edit Post",게시글수정완료:"Post has been updated.",게시글삭제확인:"Are you sure you want to delete this post?",게시글삭제완료:"Post has been deleted.",댓글이달려있어수정불가:"Cannot edit post with comments.",댓글이달려있어삭제불가:"Cannot delete post with comments.",제목과내용을입력하세요:"Please enter title and content.",수정불가:"Cannot Edit",댓글이달려있어수정불가메시지:`Cannot edit the post because there are comments.
Please delete the comments first before editing.`},L5={프로젝트_명칭:"한",웰컴:"SNS에 오신 것을 환영합니다!",로그인:"로그인",회원가입:"회원가입",인사:"{name}님, 안녕하세요!",언어선택:"언어 선택",홈:"홈",프로필:"프로필",친구:"친구",채팅:"채팅",설정:"설정",로그아웃:"로그아웃",이메일:"이메일",비밀번호:"비밀번호",비밀번호확인:"비밀번호 확인",이름:"이름",닉네임:"닉네임",저장:"저장",취소:"취소",확인:"확인",삭제:"삭제",수정:"수정",검색:"검색",알림:"알림",새글작성:"새 글 작성",댓글:"댓글",좋아요:"좋아요",공유:"공유",신고:"신고",포럼:"포럼",사용자찾기:"사용자 찾기",내계정:"내 계정",프로필수정:"프로필 수정",메뉴:"메뉴",퀵메뉴:"퀵메뉴",사용자목록:"사용자 목록",내프로필:"내 프로필",게시판:"게시판",시작하기:"시작하기",회원정보수정:"회원 정보 수정",회원목록:"회원 목록",프로젝트GitHub:"프로젝트 GitHub",한바보참여단톡방:"한바보 참여 단톡방",개발일지:"개발일지",바이브코딩SED:"바이브 코딩 - SED",언어설정:"언어 설정",언어전환기능안내:"언어 전환 기능은 곧 추가됩니다.",빌드버전:"빌드 버전",카피레프트:"© Copyleft",AI소개:"AI가 이런 기능까지 만들 수 있습니다.",통계:"통계",전체사용자:"전체 사용자",전체점수:"전체 점수",전체글:"전체 글",전체댓글:"전체 댓글",전체좋아요:"전체 좋아요",채팅메시지:"채팅 메시지",준비중:"준비 중",통계실시간업데이트:"통계는 실시간으로 업데이트됩니다.",로그인성공:"✅ 로그인 성공: {email}",오류:"❌ 오류: {error}",게시물클릭알림:`게시물 클릭:

제목: {title}
작성자: {author}`,제목없음:"제목 없음",익명:"익명",게시물목록:"게시물 목록",정보:"정보",로그인회원가입:"로그인 / 회원가입",Firebase설명:"Firebase Authentication을 사용한 로그인 폼입니다.",게시물목록설명:"Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",로그인필요:"⚠️ 게시물을 보려면 먼저 로그인해주세요.",프로젝트정보:"프로젝트 정보",프로젝트개요:"🎯 프로젝트 개요",프로젝트개요설명:"Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",기술스택:"🛠️ 기술 스택",포함컴포넌트:"📦 포함된 컴포넌트",사용방법:"🚀 사용 방법",특징:"💡 특징","home.vibeBanner":"100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다. 자세히보기...","home.techStack.title":"🛠️ 기술 스택","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"커스텀 엘리먼트","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android 및 iOS 앱 제작","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"모든 것을 실시간 업데이트","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"셀프 호스팅","home.aiTruth.title":"AI 시대의 진실","home.aiTruth.item1.title":"AI 시대에 변하지 않는 것은 당신","home.aiTruth.item1.content":"AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.","home.aiTruth.item2.title":"AI 만으로 할 수 있는 것은 없다","home.aiTruth.item2.content":"AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.","home.aiTruth.item2.hint":"💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.","home.aiTruth.item3.title":"저작권 문제","home.aiTruth.item3.content":"AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.","home.aiTruth.item3.gpl":"이 프로젝트는 GPL 라이선스를 따릅니다.","home.aiTruth.item3.hint":"오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.","home.title":"한바보 (한국 바이브 보스) - 소셜 네트워크 서비스 웹/앱 개발","home.description.part1":"한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.","home.description.linkText":"단톡방에 참여","home.description.part2":"하여 함께 개발하고 아이디어를 나눠보세요!","home.todo.title":"개발 로드맵","home.todo.item1.label":"프로젝트 초기 설정","home.todo.item1.description":"Svelte 5, Vite, Firebase 설정 완료","home.todo.item2.label":"인증 시스템","home.todo.item2.description":"Firebase Authentication 연동 완료","home.todo.item3.label":"UI 컴포넌트","home.todo.item3.description":"Web Components 기반 재사용 가능한 UI 구축","home.todo.item3.subitem1":"Topbar, Sidebar, Layout 컴포넌트","home.todo.item3.subitem2":"반응형 디자인 적용","home.todo.item4.label":"게시판 기능 구현","home.todo.item5.label":"채팅 기능","home.todo.item5.subitem1":"실시간 1:1 채팅","home.todo.item5.subitem2":"그룹 채팅방","home.todo.item5.subitem3":"파일 공유","home.todo.item5.subitem4":"읽음 표시","home.todo.item6.label":"친구 관리","home.todo.item6.subitem1":"친구 추가/삭제","home.todo.item6.subitem2":"친구 목록 관리","home.todo.item7.label":"알림 시스템","home.todo.item7.subitem1":"실시간 푸시 알림","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"서버 측 로직 및 데이터 일관성 보장","home.todo.item8.subitem1":"사용자 프로필 동기화 (onUserProfileUpdate)","home.todo.item8.subitem2":"좋아요/댓글 개수 동기화","home.todo.item8.subitem3":"게시글 삭제 시 연관 데이터 정리","home.todo.item8.subitem4":"알림 트리거 및 전송","home.overview.title":"프로젝트 개요","home.overview.brand":"한바보","home.overview.description":"는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.","home.overview.badge1":"실시간 채팅","home.overview.badge2":"지역 모임","home.overview.badge3":"친구 관리","home.overview.badge4":"커뮤니티 게시판","home.aiChange.title":"AI 시대의 변화와 성장","home.aiChange.description":"AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.","home.aiChange.emphasis":"중요한 것은 AI를 사용하는 방법이 아니라,","home.aiChange.highlight":"무엇을 만들 것인가","home.aiChange.conclusio":"에 대한 명확한 비전입니다.","home.aiChange.hint":"이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.","phoneLogin.title":"전화번호로 로그인","phoneLogin.description":"전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.","phoneLogin.countryLabel":"국가 선택","phoneLogin.phoneLabel":"전화번호","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"숫자만 입력해주세요 (국가 코드 제외)","phoneLogin.sendCode":"인증 코드 전송","phoneLogin.sending":"전송 중...","phoneLogin.codeTitle":"인증 코드 입력","phoneLogin.codeDescription":"{phone}로 전송된 6자리 인증 코드를 입력해주세요.","phoneLogin.codeLabel":"인증 코드","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6자리 숫자를 입력해주세요","phoneLogin.verifying":"확인 중...","phoneLogin.verify":"로그인","phoneLogin.back":"이전으로","phoneLogin.resendHint":"인증 코드를 받지 못하셨나요?","phoneLogin.resendLink":"다시 전송하기","phoneLogin.error.invalidPhone":"올바른 전화번호를 입력해주세요 (6-15자리 숫자)","phoneLogin.error.invalidCode":"6자리 인증 코드를 입력해주세요.","phoneLogin.error.wrongCode":"잘못된 인증 코드입니다.","phoneLogin.error.expiredCode":"인증 코드가 만료되었습니다. 다시 시도해주세요.","phoneLogin.error.tooManyRequests":"너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.","phoneLogin.error.recaptchaExpired":"reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.","phoneLogin.error.recaptchaInit":"reCAPTCHA 초기화에 실패했습니다.","phoneLogin.error.smsFailed":"SMS 전송 실패: {error}","label.category.community":"커뮤니티","label.category.qna":"질문답변","label.category.news":"뉴스","label.category.market":"회원장터",공사중메시지:"이 페이지는 공사중입니다",공사중설명_채팅목록:"채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_설정:"설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_게시물상세:"게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_앱정보:"앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_도움말:"도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_이용약관:"이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_개인정보:"개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",공사중설명_문의하기:"문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",메뉴로돌아가기:"메뉴로 돌아가기",페이지선택:"아래에서 이동할 페이지를 선택하세요",사용자프로필:"사용자 프로필",게시물상세예시:"게시물 상세 (예: ID:123)",채팅목록:"채팅 목록",테스트게시글생성:"[개발] 테스트 게시글 생성",로그인성공알림:`로그인 성공!
전화번호: {phone}`,로그인실패:"로그인 실패: {error}",전화번호로로그인:"전화번호로 간편하게 로그인하세요.",로그인하셨습니다:"{phone}로 로그인하셨습니다.",홈으로이동:"홈으로 이동",게시물상세:"게시물 상세",정보없음:"정보 없음",이름없음:"이름 없음",가입일:"가입일",프로필보기:"프로필 보기",사용자목록로딩:"사용자 목록을 불러오는 중...",등록된사용자없음:"등록된 사용자가 없습니다.",사용자목록실패:"사용자 목록을 불러오는데 실패했습니다.",더많은사용자로딩:"더 많은 사용자를 불러오는 중...",모든사용자로딩완료:"모든 사용자를 불러왔습니다.",다른사용자프로필:"다른 사용자 프로필:",프로필사진:"프로필 사진",프로필사진변경:"프로필 사진 변경",프로필사진추가:"프로필 사진 추가",프로필사진제거:"프로필 사진 제거",프로필사진클릭변경:"프로필 사진을 클릭하여 변경",사진저장중:"사진을 저장하는 중입니다...",닉네임입력:"닉네임을 입력하세요",닉네임헬퍼:"최대 50자까지 입력할 수 있습니다",선택하지않음:"선택하지 않음",남자:"남자",여자:"여자",생년월일헬퍼:"YYYY-MM-DD 형식으로 선택해주세요",저장중:"저장 중...",다른사진작업중:"다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",로그인후이용:"로그인 후 이용해주세요.",이미지파일만:"이미지 파일만 선택 가능합니다.",파일크기제한:"파일 크기는 5MB 이하여야 합니다.",프로필사진제거됨:"프로필 사진이 제거되었습니다.",사진제거실패:"사진 제거 실패: {error}",프로필사진저장됨:"프로필 사진이 저장되었습니다.",사진저장실패:"사진 저장 실패: {error}",프로필업데이트성공:"프로필이 성공적으로 업데이트되었습니다!",프로필업데이트오류:"오류: {error}",테스트데이터생성:"테스트 데이터 생성",테스트게시글생성타이틀:"📝 테스트 게시글 생성",테스트게시글설명:"각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",로그인하러가기:"로그인하러 가기",게시글생성시작:"게시글 생성 시작",실행로그:"실행 로그",완료게시판확인:"✅ 완료! 게시판 페이지에서 확인해보세요.",사용자:"사용자",로딩중:"로딩 중...",게시판설명:"에서 최신 소식을 확인하고 의견을 나눠보세요.",글쓰기:"글쓰기",게시글없음:"아직 등록된 게시글이 없어요",첫게시글공유:"첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",새글작성2:"새 글 작성하기",게시글로딩중:"게시글을 불러오는 중입니다...",게시글로드실패:"게시글을 불러오는 중 문제가 발생했습니다.",더많은게시글로딩:"더 많은 게시글을 불러오는 중...",모든게시글확인:"모든 게시글을 확인했습니다.",새게시글작성:"새 게시글 작성",카테고리:"카테고리",카테고리선택:"카테고리 선택",카테고리선택필요:"카테고리를 선택해주세요.",제목:"제목",제목입력:"제목을 입력하세요",제목입력필요:"제목을 입력해주세요.",내용:"내용",내용입력:"내용을 입력하세요",내용입력필요:"내용을 입력해주세요.",전송:"전송",전송중:"전송 중...",게시글작성완료:"게시글이 작성되었습니다.",게시글저장실패:"게시글 저장 실패: {error}",게시글저장중오류:"게시글 저장 중 오류가 발생했습니다.",로그인정보확인불가:"로그인 정보를 확인할 수 없습니다.",좋아요실패:"좋아요 처리 중 오류가 발생했습니다.",이미좋아요:"이미 좋아요를 눌렀습니다.",댓글작성:"댓글 작성",댓글내용입력:"댓글 내용을 입력하세요",댓글이작성되었습니다:"댓글이 작성되었습니다.",댓글작성실패:"댓글 작성 실패: {error}",댓글내용입력필요:"댓글 내용을 입력해주세요.",댓글더보기:"더 보기 (총 {count}개)",모든댓글보기:"모든 댓글 보기",댓글숨기기:"댓글 숨기기",답글:"답글",좋아요를하였습니다:"좋아요를 하였습니다.",좋아요를취소했습니다:"좋아요를 취소했습니다.","error.unknown":"알 수 없는 오류가 발생했습니다.","error.network":"네트워크 연결을 확인해주세요.","error.offline":"인터넷 연결이 없습니다.","error.auth.invalidEmail":"올바른 이메일 형식이 아닙니다.","error.auth.userDisabled":"비활성화된 계정입니다.","error.auth.userNotFound":"사용자를 찾을 수 없습니다.","error.auth.wrongPassword":"비밀번호가 올바르지 않습니다.","error.auth.emailAlreadyInUse":"이미 사용 중인 이메일입니다.","error.auth.weakPassword":"비밀번호가 너무 약합니다. (최소 6자 이상)","error.auth.operationNotAllowed":"이 작업은 허용되지 않습니다.","error.auth.tooManyRequests":"너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.","error.auth.invalidVerificationCode":"잘못된 인증 코드입니다.","error.auth.invalidPhoneNumber":"올바른 전화번호가 아닙니다.","error.auth.missingVerificationCode":"인증 코드를 입력해주세요.","error.auth.sessionExpired":"세션이 만료되었습니다. 다시 로그인해주세요.","error.auth.requiresRecentLogin":"보안을 위해 다시 로그인해주세요.","error.auth.credentialAlreadyInUse":"이미 다른 계정에서 사용 중인 인증 정보입니다.","error.db.permissionDenied":"이 작업을 수행할 권한이 없습니다.","error.db.authenticationRequired":"먼저 로그인해주세요.","error.db.networkError":"데이터베이스 연결 중 오류가 발생했습니다.","error.storage.unauthorized":"파일 접근 권한이 없습니다.","error.storage.bucketNotFound":"저장소를 찾을 수 없습니다.","error.storage.invalidArgument":"올바르지 않은 인자입니다.","error.storage.objectNotFound":"파일을 찾을 수 없습니다.","error.storage.retryLimitExceeded":"파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.","error.storage.quotaExceeded":"저장 공간이 부족합니다.","error.storage.canceled":"파일 업로드가 취소되었습니다.","dev.history.title":"📝 스터디 로그","dev.history.subtitle":"한바보 프로젝트의 개발 진행 현황을 기록합니다.","dev.history.updateIndicator":"최신 업데이트 자동 동기화","dev.history.seminar1.date":"2025-10-27 (첫 번째 세미나)","dev.history.seminar1.completed":"✅ 구현 완료","dev.history.seminar1.item1":"기본 프로젝트 셋업 (Next.js 16, React 19, TypeScript)","dev.history.seminar1.item2":"Firebase 설정 및 인증 구현","dev.history.seminar1.item3":"이메일/비밀번호 회원가입 & 로그인","dev.history.seminar1.item4":"회원 정보 수정 (프로필 업데이트)","dev.history.seminar1.item5":"1:1 채팅 기능 (실시간 메시지 동기화)","dev.history.seminar1.learned":"💡 배운 것들","dev.history.seminar1.learned1":"Next.js App Router 구조 이해","dev.history.seminar1.learned2":"Firebase Authentication 사용법","dev.history.seminar1.learned3":"Firebase Realtime Database 실시간 동기화","dev.history.seminar1.learned4":"Git PR을 통한 협업 방식","dev.history.seminar2.date":"2025-11-03 (두 번째 세미나)","dev.history.seminar2.completed":"✅ 기술 스택 전환 완료","dev.history.seminar2.item1":"React.js + Next.js + Firebase + Supabase → Svelte + Firebase로 전환","dev.history.seminar2.item2":"Svelte 5 Custom Elements 기반 아키텍처 구축","dev.history.seminar2.item3":"Web Components로 프레임워크 독립적인 구조 구현","dev.history.seminar2.item4":"Firebase만으로 모든 기능 구현 (Supabase 제거)","dev.history.seminar2.item5":"전체 프로젝트 리팩토링 및 재구성","dev.history.seminar2.learned":"💡 배운 것들","dev.history.seminar2.learned1":"Svelte 5 Runes ($state, $derived, $effect) 활용법","dev.history.seminar2.learned2":"Web Components의 장점과 재사용성","dev.history.seminar2.learned3":"Firebase만으로 충분한 기능 구현 가능","dev.history.seminar2.learned4":"더 가볍고 빠른 개발 환경 구축","dev.history.seminar3.date":"2025-11-04","dev.history.seminar3.completed":"✅ 핵심 기능 구현 완료","dev.history.seminar3.item1":"Svelte 5를 JavaScript에서 TypeScript로 전환","dev.history.seminar3.item2":"게시판 좋아요 기능 구현","dev.history.seminar3.item3":"댓글 작성, 수정, 삭제 기능 구현","dev.history.seminar3.item4":"댓글 좋아요 기능 추가","dev.history.seminar3.item5":"통계 기능 추가 (사용자 수, 게시글 수, 댓글 수 등)","dev.history.seminar3.learned":"💡 배운 것들","dev.history.seminar3.learned1":"TypeScript의 타입 안정성이 주는 바이브코딩의 코드 생성 향상","dev.history.seminar3.learned2":"바이브코딩의 한계를 극복하기 위한 Spec-Exact Development (SED) 개념 창조: LLM이 충분히 이해할 수 있는 상세한 스펙(DB 구조, 인증 방식, 암호화, 비밀번호 확인란 등) 제공. LLM이 작업 전 스펙 점수를 매겨 90점 이상일 때만 개발 시작","dev.history.seminar3.learned3":"Firebase increment()로 동시성 안전한 카운터 구현","dev.history.seminar3.learned4":"실시간 데이터 동기화를 활용한 통계 기능","dev.history.seminar3.learned5":"사용자 경험을 고려한 좋아요 및 댓글 UX 설계","dev.history.seminar4.date":"2025-11-05","dev.history.seminar4.completed":"✅ 구현 완료","dev.history.seminar4.item1":"각종 통계 (사용자 수, 게시글 수, 댓글 수, 좋아요 수 등)","dev.history.seminar4.item2":"댓글 작성 기능 완성 (실시간 동기화)","dev.history.seminar4.item3":"코멘트 좋아요 버그 수정 (Firebase push 키 처리)","dev.history.seminar4.item4":"Firebase Cloud Functions 배포 자동화 (npm run deploy)","dev.history.seminar4.item5":"CLAUDE.md 문서 구조 개선 (요약/레퍼런스 분리)","dev.history.seminar4.learned":"💡 배운 것들","dev.history.seminar4.learned1":"본 프로젝트를 100% 바이브 코딩(노코딩)으로 개발 진행하면서, 아무리 잘 작성된 프롬프트라고 해도, 프롬프트 몇 번만에 완전한 소셜 서비스 웹/앱 개발이 불가능하다는 것을 깨달았다.","dev.history.seminar4.learned2":"그래서 SED (Spec-Exact Development)의 중요성을 다시 한번 깨닫게 되었다.","dev.history.seminar4.learned3":"Firebase Cloud Functions의 increment() 함수로 동시성 안전한 카운터 업데이트 구현","dev.history.seminar4.learned4":"문서화의 중요성: 요약은 CLAUDE.md에, 상세 예제는 docs/*.md에 분리하여 관리","dev.history.upcoming":"더 많은 스터디 로그가 추가될 예정입니다...",게시글수정:"게시글 수정",게시글수정완료:"게시글이 수정되었습니다.",게시글삭제확인:"정말로 이 게시글을 삭제하시겠습니까?",게시글삭제완료:"게시글이 삭제되었습니다.",댓글이달려있어수정불가:"댓글이 달려 있는 경우 수정을 할 수 없습니다.",댓글이달려있어삭제불가:"댓글이 달려 있는 경우 삭제를 할 수 없습니다.",제목과내용을입력하세요:"제목과 내용을 입력하세요.",수정불가:"수정할 수 없습니다",댓글이달려있어수정불가메시지:`댓글이 달려 있어서 게시글을 수정할 수 없습니다.
댓글을 먼저 삭제한 후 수정해주세요.`},D5="GitHub",$5={프로젝트_명칭:"ハンバボ 0.2",웰컴:"SNSへようこそ!",로그인:"ログイン",회원가입:"登録",인사:"{name}さん、こんにちは!",언어선택:"言語選択",홈:"ホーム",프로필:"プロフィール",친구:"友達",채팅:"チャット",설정:"設定",로그아웃:"ログアウト",이메일:"メール",비밀번호:"パスワード",비밀번호확인:"パスワード確認",이름:"名前",닉네임:"ニックネーム",저장:"保存",취소:"キャンセル",확認:"確認",삭제:"削除",수정:"編集",검색:"検索",알림:"通知",새글작성:"新規投稿",댓글:"コメント",좋아요:"いいね",공유:"シェア",신고:"通報",포럼:"フォーラム",사용자찾기:"ユーザー検索",내계정:"マイアカウント",프로필수정:"プロフィール編集",메뉴:"メニュー",퀵메뉴:"クイックメニュー",사용자목록:"ユーザーリスト",내프로필:"マイプロフィール",게시판:"掲示板",시작하기:"始める",회원정보수정:"会員情報修正",회원목록:"会員リスト",프로젝트GitHub:"プロジェクトGitHub",한바보참여단톡방:"ハンバボ参加チャット",개발일지:"開発日誌",언어설정:"言語設定",언어전환기능안내:"言語切替機能は近日追加されます。",빌드버전:"ビルドバージョン",카피레프트:"© コピーレフト",AI소개:"AIはこのような機能まで作ることができます。",통계:"統計",전체사용자:"総ユーザー数",전체점수:"総スコア",전체글:"総投稿数",전체댓글:"総コメント数",전체좋아요:"総いいね数",채팅메시지:"チャットメッセージ",준비중:"準備中",통계실시간업데이트:"統計はリアルタイムで更新されます。",로그인성공:"✅ ログイン成功: {email}",오류:"❌ エラー: {error}",게시물클릭알림:`投稿クリック:

タイトル: {title}
作成者: {author}`,제목없음:"タイトルなし",익명:"匿名",게시물목록:"投稿リスト",정보:"情報",로그인회원가입:"ログイン / 登録",Firebase설명:"Firebase Authenticationを使用したログインフォームです。",게시물목록설명:"Firebase Realtime Databaseの投稿をリアルタイムで表示します。",로그인필요:"⚠️ 投稿を表示するには、まずログインしてください。",프로젝트정보:"プロジェクト情報",프로젝트개요:"🎯 プロジェクト概要",프로젝트개요설명:"Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",기술스택:"🛠️ 技術スタック",포함컴포넌트:"📦 含まれるコンポーネント",사용방법:"🚀 使い方",특징:"💡 特徴","home.vibeBanner":"100% ✨ バイブコーディングで作られたプロジェクトです","home.techStack.title":"🛠️ 技術スタック","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"カスタムエレメント","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"AndroidおよびiOSアプリ開発","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"リアルタイムデータベースとして選択","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"セルフホスティング","home.aiTruth.title":"AI時代の真実","home.aiTruth.item1.title":"AI時代に変わらないものはあなた","home.aiTruth.item1.content":"AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。","home.aiTruth.item2.title":"AIだけでできることはない","home.aiTruth.item2.content":"AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。","home.aiTruth.item2.hint":"💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。","home.aiTruth.item3.title":"著作権問題","home.aiTruth.item3.content":"AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。","home.aiTruth.item3.gpl":"このプロジェクトはGPLライセンスに従います。","home.aiTruth.item3.hint":"オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。","home.title":"ハンバボ - AI時代のソーシャルネットワーク","home.description.part1":"ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。","home.description.linkText":"グループチャットに参加","home.description.part2":"して一緒に開発しアイデアを共有しましょう！","home.todo.title":"開発ロードマップ","home.todo.item1.label":"プロジェクト初期設定","home.todo.item1.description":"Svelte 5、Vite、Firebase設定完了","home.todo.item2.label":"認証システム","home.todo.item2.description":"Firebase Authentication連携完了","home.todo.item3.label":"UIコンポーネント","home.todo.item3.description":"Web Componentsベースの再利用可能なUI構築","home.todo.item3.subitem1":"Topbar、Sidebar、Layoutコンポーネント","home.todo.item3.subitem2":"レスポンシブデザイン適用","home.todo.item4.label":"掲示板機能実装","home.todo.item5.label":"チャット機能","home.todo.item5.subitem1":"リアルタイム1:1チャット","home.todo.item5.subitem2":"グループチャットルーム","home.todo.item5.subitem3":"ファイル共有","home.todo.item5.subitem4":"既読表示","home.todo.item6.label":"友達管理","home.todo.item6.subitem1":"友達追加/削除","home.todo.item6.subitem2":"友達リスト管理","home.todo.item7.label":"通知システム","home.todo.item7.subitem1":"リアルタイムプッシュ通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"サーバー側ロジックとデータ整合性の保証","home.todo.item8.subitem1":"ユーザープロフィール同期 (onUserProfileUpdate)","home.todo.item8.subitem2":"いいね/コメント数の同期","home.todo.item8.subitem3":"投稿削除時の関連データクリーンアップ","home.todo.item8.subitem4":"通知トリガーと配信","home.overview.title":"プロジェクト概要","home.overview.brand":"ハンバボ","home.overview.description":"は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。","home.overview.badge1":"リアルタイムチャット","home.overview.badge2":"地域集会","home.overview.badge3":"友達管理","home.overview.badge4":"コミュニティ掲示板","home.aiChange.title":"AI時代の変化と成長","home.aiChange.description":"AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。","home.aiChange.emphasis":"重要なのはAIを使う方法ではなく、","home.aiChange.highlight":"何を作るか","home.aiChange.conclusion":"についての明確なビジョンです。","home.aiChange.hint":"このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。","phoneLogin.title":"電話番号でログイン","phoneLogin.description":"電話番号を入力すると、SMSで認証コードを送信します。","phoneLogin.countryLabel":"国を選択","phoneLogin.phoneLabel":"電話番号","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"数字のみを入力してください（国コード除く）","phoneLogin.sendCode":"認証コードを送信","phoneLogin.sending":"送信中...","phoneLogin.codeTitle":"認証コード入力","phoneLogin.codeDescription":"{phone}に送信された6桁の認証コードを入力してください。","phoneLogin.codeLabel":"認証コード","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"6桁の数字を入力してください","phoneLogin.verifying":"確認中...","phoneLogin.verify":"ログイン","phoneLogin.back":"戻る","phoneLogin.resendHint":"認証コードが届きませんでしたか？","phoneLogin.resendLink":"再送信","phoneLogin.error.invalidPhone":"有効な電話番号を入力してください（6-15桁の数字）","phoneLogin.error.invalidCode":"6桁の認証コードを入力してください。","phoneLogin.error.wrongCode":"無効な認証コードです。","phoneLogin.error.expiredCode":"認証コードの有効期限が切れました。もう一度お試しください。","phoneLogin.error.tooManyRequests":"リクエストが多すぎます。後でもう一度お試しください。","phoneLogin.error.recaptchaExpired":"reCAPTCHAの有効期限が切れました。ページを更新してください。","phoneLogin.error.recaptchaInit":"reCAPTCHAの初期化に失敗しました。","phoneLogin.error.smsFailed":"SMS送信失敗: {error}","label.category.community":"コミュニティ","label.category.qna":"Q&A","label.category.news":"ニュース","label.category.market":"マーケットプレイス",현재언어:"現在の言語",언어_한국어:"韓国語",언어_영어:"英語",언어_일본어:"日本語",언어_중국어:"中国語",공사중메시지:"このページは工事中です",공사중설명_채팅목록:"チャットリスト機能は現在開発中で、まもなく更新される予定です。",공사중설명_설정:"設定機能は現在開発中で、まもなく更新される予定です。",공사중설명_게시물상세:"投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",공사중설명_앱정보:"アプリ情報ページは現在開発中で、まもなく更新される予定です。",공사중설명_도움말:"ヘルプページは現在開発中で、まもなく更新される予定です。",공사중설명_이용약관:"利用規約ページは現在開発中で、まもなく更新される予定です。",공사중설명_개인정보:"プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",공사중설명_문의하기:"お問い合わせページは現在開発中で、まもなく更新される予定です。",메뉴로돌아가기:"メニューに戻る",페이지선택:"移動するページを下から選択してください",사용자프로필:"ユーザープロフィール",게시물상세예시:"投稿詳細 (例: ID:123)",채팅목록:"チャットリスト",테스트게시글생성:"[開発] テスト投稿生成",로그인성공알림:`ログイン成功!
電話番号: {phone}`,로그인실패:"ログイン失敗: {error}",전화번호로로그인:"電話番号で簡単にログインしてください。",로그인하셨습니다:"{phone}でログインしています。",홈으로이동:"ホームへ移動",사용자목록로딩:"ユーザーリストを読み込み中...",등록된사용자없음:"登録されたユーザーがいません。",사용자목록실패:"ユーザーリストの読み込みに失敗しました。",더많은사용자로딩:"さらにユーザーを読み込み中...",모든사용자로딩완료:"すべてのユーザーを読み込みました。",정보없음:"情報なし",사용자:"ユーザー",이름없음:"名前なし",나:"私",가입일:"登録日",프로필보기:"プロフィール表示",프로필사진:"プロフィール写真",사진업로드중:"写真をアップロード中...",사진업로드실패:"写真のアップロードに失敗しました: {error}",다른사진작업중:"他の写真操作が進行中です...",프로필사진제거중:"プロフィール写真を削除中...",프로필사진제거완료:"プロフィール写真を削除しました。",프로필사진제거실패:"プロフィール写真の削除に失敗しました: {error}",프로필업데이트중:"プロフィールを更新中...",프로필업데이트완료:"プロフィールを正常に更新しました。",프로필업데이트실패:"プロフィールの更新に失敗しました: {error}",닉네임입력:"ニックネームを入力してください",닉네임최대길이:"最大50文字まで入力できます",소개글:"自己紹介",소개글입력:"自己紹介を入力してください",소개글최대길이:"最大200文字まで入力できます",홈페이지:"ウェブサイト",홈페이지입력:"ウェブサイトURLを入力してください",GitHub:D5,GitHub입력:"GitHubプロフィールURLを入力してください",사진업로드:"写真をアップロード",사진제거:"写真を削除",저장하기:"変更を保存",저장중:"保存中...",테스트게시글생성타이틀:"📝 テスト投稿生成",테스트게시글생성설명:"各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",로그인필요메시지:"⚠️ この機能を使用するにはログインが必要です。",로그인하러가기:"ログインへ",게시글생성시작:"投稿生成開始",생성중:"生成中...",생성성공:"✅ {count}件の投稿を正常に生成しました！",생성실패:"❌ 投稿の生成に失敗しました: {error}",경고:"⚠️ 警告",경고메시지:"{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",진행상황:"進行状況",생성된게시글수:"{total}件中{count}件の投稿を作成",로딩중:"読み込み中...",게시판설명:"の最新ニュースを確認し、意見を共有してください。",글쓰기:"書く",게시글없음:"まだ投稿がありません",첫게시글공유:"最初のストーリーを共有してコミュニティを始めましょう。",새글작성2:"新規投稿を書く",게시글로딩중:"投稿を読み込み中...",게시글로드실패:"投稿の読み込みに失敗しました。",더많은게시글로딩:"さらに多くの投稿を読み込み中...",모든게시글확인:"すべての投稿を読み込みました。",새게시글작성:"新規投稿を書く",카테고리:"カテゴリ",카테고리선택:"カテゴリを選択",카테고리선택필요:"カテゴリを選択してください。",제목:"タイトル",제목입력:"タイトルを入力してください",제목입력필요:"タイトルを入力してください。",내용:"コンテンツ",내용입력:"コンテンツを入力してください",내용입력필요:"コンテンツを入力してください。",전송:"送信",전송중:"送信中...",게시글작성완료:"投稿が作成されました。",게시글저장실패:"投稿の保存に失敗しました: {error}",게시글저장중오류:"投稿の保存中にエラーが発生しました。",로그인정보확인불가:"ログイン情報を確認できませんでした。",좋아요실패:"いいね処理中にエラーが発生しました。",이미좋아요:"すでにいいねしています。",댓글작성:"コメントを書く",댓글내용입력:"コメント内容を入力してください",댓글이작성되었습니다:"コメントが作成されました。",댓글작성실패:"コメント作成に失敗しました: {error}",댓글내용입력필요:"コメント内容を入力してください。","error.unknown":"不明なエラーが発生しました。","error.network":"ネットワーク接続を確認してください。","error.offline":"インターネット接続がありません。","error.auth.invalidEmail":"正しいメール形式ではありません。","error.auth.userDisabled":"無効なアカウントです。","error.auth.userNotFound":"ユーザーが見つかりません。","error.auth.wrongPassword":"パスワードが正しくありません。","error.auth.emailAlreadyInUse":"すでに使用されているメールアドレスです。","error.auth.weakPassword":"パスワードが弱すぎます。（最低6文字以上）","error.auth.operationNotAllowed":"この操作は許可されていません。","error.auth.tooManyRequests":"リクエストが多すぎます。しばらくしてから再試行してください。","error.auth.invalidVerificationCode":"無効な認証コードです。","error.auth.invalidPhoneNumber":"正しい電話番号ではありません。","error.auth.missingVerificationCode":"認証コードを入力してください。","error.auth.sessionExpired":"セッションが期限切れです。再度ログインしてください。","error.auth.requiresRecentLogin":"セキュリティのため、再度ログインしてください。","error.auth.credentialAlreadyInUse":"すでに他のアカウントで使用されている認証情報です。","error.db.permissionDenied":"この操作を実行する権限がありません。","error.db.authenticationRequired":"まずログインしてください。","error.db.networkError":"データベース接続中にエラーが発生しました。","error.storage.unauthorized":"ファイルへのアクセス権限がありません。","error.storage.bucketNotFound":"ストレージが見つかりません。","error.storage.invalidArgument":"無効な引数です。","error.storage.objectNotFound":"ファイルが見つかりません。","error.storage.retryLimitExceeded":"ファイルアップロード中にエラーが発生しました。再試行してください。","error.storage.quotaExceeded":"ストレージ容量が不足しています。","error.storage.canceled":"ファイルアップロードがキャンセルされました。"},q5="GitHub",O5={프로젝트_명칭:"韩芭芭 0.2",웰컴:"欢迎来到SNS!",로그인:"登录",회원가입:"注册",인사:"{name}，你好!",언어선택:"语言选择",홈:"首页",프로필:"个人资料",친구:"朋友",채팅:"聊天",설정:"设置",로그아웃:"退出",이메일:"邮箱",비밀번호:"密码",비밀번호확인:"确认密码",이름:"姓名",닉네임:"昵称",저장:"保存",취소:"取消",확认:"确认",삭제:"删除",수정:"编辑",검색:"搜索",알림:"通知",새글作成:"新帖子",댓글:"评论",좋아요:"点赞",공유:"分享",신고:"举报",포럼:"论坛",사용자찾기:"查找用户",내계정:"我的账户",프로필수정:"编辑资料",메뉴:"菜单",퀵메뉴:"快捷菜单",사용자목록:"用户列表",내프로필:"我的资料",게시판:"论坛",시작하기:"开始",회원정보수정:"修改会员信息",회원목록:"会员列表",프로젝트GitHub:"项目GitHub",한바보참여단톡방:"加入韩芭芭聊天",개발일지:"开发日志",언어설정:"语言设置",언어전환기능안내:"语言切换功能即将推出。",빌드버전:"构建版本",카피레프트:"© Copyleft",AI소개:"AI可以制作这样的功能。",통계:"统计",전체사용자:"总用户数",전체점수:"总分数",전체글:"总帖子",전체댓글:"总评论",전체좋아요:"总点赞",채팅메시지:"聊天消息",준비중:"即将推出",통계실시간업데이트:"统计数据实时更新。",로그인성공:"✅ 登录成功: {email}",오류:"❌ 错误: {error}",게시물클릭알림:`点击帖子:

标题: {title}
作者: {author}`,제목없음:"无标题",익명:"匿名",게시물목록:"帖子列表",정보:"信息",로그인회원가입:"登录 / 注册",Firebase설명:"使用Firebase Authentication的登录表单。",게시물목록설명:"实时显示Firebase Realtime Database的帖子。",로그인필요:"⚠️ 请先登录以查看帖子。",프로젝트정보:"项目信息",프로젝트개요:"🎯 项目概述",프로젝트개요설명:"使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",기술스택:"🛠️ 技术栈",포함컴포넌트:"📦 包含的组件",사용방법:"🚀 使用方法",특징:"💡 特点","home.vibeBanner":"100% ✨ 使用Vibe编码制作的项目","home.techStack.title":"🛠️ 技术栈","home.techStack.svelte":"Svelte","home.techStack.svelteDesc":"自定义元素","home.techStack.flutter":"Flutter","home.techStack.flutterDesc":"Android和iOS应用开发","home.techStack.firebase":"Firebase","home.techStack.firebaseDesc":"选择作为实时数据库","home.techStack.dokplay":"Dokplay","home.techStack.dokplayDesc":"自托管","home.aiTruth.title":"AI时代的真相","home.aiTruth.item1.title":"AI时代不变的是你","home.aiTruth.item1.content":"无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。","home.aiTruth.item2.title":"仅靠AI无法做成任何事","home.aiTruth.item2.content":"AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。","home.aiTruth.item2.hint":"💡 AI可以编写代码，但应该编写什么代码需要你来决定。","home.aiTruth.item3.title":"版权问题","home.aiTruth.item3.content":"AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。","home.aiTruth.item3.gpl":"本项目遵循GPL许可证。","home.aiTruth.item3.hint":"以开源方式分享可以避免法律问题并为社区做出贡献。","home.title":"韩芭芭 - AI时代的社交网络","home.description.part1":"韩芭芭是与AI一起创建的现代社交网络平台。","home.description.linkText":"加入群聊","home.description.part2":"一起开发和分享想法！","home.todo.title":"开发路线图","home.todo.item1.label":"项目初始设置","home.todo.item1.description":"Svelte 5、Vite、Firebase设置完成","home.todo.item2.label":"认证系统","home.todo.item2.description":"Firebase Authentication集成完成","home.todo.item3.label":"UI组件","home.todo.item3.description":"构建基于Web Components的可重用UI","home.todo.item3.subitem1":"Topbar、Sidebar、Layout组件","home.todo.item3.subitem2":"应用响应式设计","home.todo.item4.label":"实现论坛功能","home.todo.item5.label":"聊天功能","home.todo.item5.subitem1":"实时1:1聊天","home.todo.item5.subitem2":"群聊室","home.todo.item5.subitem3":"文件共享","home.todo.item5.subitem4":"已读标记","home.todo.item6.label":"好友管理","home.todo.item6.subitem1":"添加/删除好友","home.todo.item6.subitem2":"好友列表管理","home.todo.item7.label":"通知系统","home.todo.item7.subitem1":"实时推送通知","home.todo.item8.label":"Firebase Cloud Functions","home.todo.item8.description":"服务器端逻辑和数据一致性保障","home.todo.item8.subitem1":"用户资料同步 (onUserProfileUpdate)","home.todo.item8.subitem2":"点赞/评论数同步","home.todo.item8.subitem3":"帖子删除时清理关联数据","home.todo.item8.subitem4":"通知触发和发送","home.overview.title":"项目概述","home.overview.brand":"韩芭芭","home.overview.description":"是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。","home.overview.badge1":"实时聊天","home.overview.badge2":"地区聚会","home.overview.badge3":"好友管理","home.overview.badge4":"社区论坛","home.aiChange.title":"AI时代的变化与成长","home.aiChange.description":"AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。","home.aiChange.emphasis":"重要的不是如何使用AI，而是","home.aiChange.highlight":"要构建什么","home.aiChange.conclusion":"- 拥有明确的愿景。","home.aiChange.hint":"本项目与AI合作创建。所有代码都与Claude一起编写。","phoneLogin.title":"手机号码登录","phoneLogin.description":"输入手机号码，我们将通过短信发送验证码。","phoneLogin.countryLabel":"选择国家","phoneLogin.phoneLabel":"手机号码","phoneLogin.phonePlaceholder":"1012345678","phoneLogin.phoneHint":"仅输入数字（不含国家代码）","phoneLogin.sendCode":"发送验证码","phoneLogin.sending":"发送中...","phoneLogin.codeTitle":"输入验证码","phoneLogin.codeDescription":"请输入发送到{phone}的6位验证码。","phoneLogin.codeLabel":"验证码","phoneLogin.codePlaceholder":"123456","phoneLogin.codeHint":"请输入6位数字","phoneLogin.verifying":"验证中...","phoneLogin.verify":"登录","phoneLogin.back":"返回","phoneLogin.resendHint":"没有收到验证码？","phoneLogin.resendLink":"重新发送","phoneLogin.error.invalidPhone":"请输入有效的手机号码（6-15位数字）","phoneLogin.error.invalidCode":"请输入6位验证码。","phoneLogin.error.wrongCode":"无效的验证码。","phoneLogin.error.expiredCode":"验证码已过期。请重试。","phoneLogin.error.tooManyRequests":"请求过多。请稍后再试。","phoneLogin.error.recaptchaExpired":"reCAPTCHA已过期。请刷新页面。","phoneLogin.error.recaptchaInit":"reCAPTCHA初始化失败。","phoneLogin.error.smsFailed":"短信发送失败: {error}","label.category.community":"社区","label.category.qna":"问答","label.category.news":"新闻","label.category.market":"会员商城",현재언어:"当前语言",언어_한국어:"韩语",언어_영어:"英语",언어_일본어:"日语",언어_중국어:"中文",공사중메시지:"此页面正在建设中",공사중설명_채팅목록:"聊天列表功能正在开发中，即将更新。",공사중설명_설정:"设置功能正在开发中，即将更新。",공사중설명_게시물상세:"帖子详情查看功能正在开发中，即将更新。",공사중설명_앱정보:"应用信息页面正在开发中，即将更新。",공사중설명_도움말:"帮助页面正在开发中，即将更新。",공사중설명_이용약관:"使用条款页面正在开发中，即将更新。",공사중설명_개인정보:"隐私政策页面正在开发中，即将更新。",공사중설명_문의하기:"联系我们页面正在开发中，即将更新。",메뉴로돌아가기:"返回菜单",페이지선택:"从下方选择要导航的页面",사용자프로필:"用户资料",게시물상세예시:"帖子详情 (例: ID:123)",채팅목록:"聊天列表",테스트게시글생성:"[开发] 生成测试帖子",로그인성공알림:`登录成功！
手机号: {phone}`,로그인실패:"登录失败: {error}",전화번호로로그인:"使用手机号轻松登录。",로그인하셨습니다:"您已使用 {phone} 登录。",홈으로이동:"前往首页",사용자목록로딩:"正在加载用户列表...",등록된사용자없음:"尚无注册用户。",사용자목록실패:"加载用户列表失败。",더많은사용자로딩:"正在加载更多用户...",모든사용자로딩완료:"已加载所有用户。",정보없음:"无信息",사용자:"用户",이름없음:"无名称",나:"我",가입일:"注册日期",프로필보기:"查看资料",프로필사진:"头像",사진업로드중:"正在上传照片...",사진업로드실패:"照片上传失败: {error}",다른사진작업중:"另一个照片操作正在进行中...",프로필사진제거중:"正在删除头像...",프로필사진제거완료:"头像已删除。",프로필사진제거실패:"删除头像失败: {error}",프로필업데이트중:"正在更新资料...",프로필업데이트완료:"资料更新成功。",프로필업데이트실패:"资料更新失败: {error}",닉네임입력:"输入您的昵称",닉네임최대길이:"最多可输入50个字符",소개글:"个人简介",소개글입력:"请输入自我介绍",소개글최대길이:"最多可输入200个字符",홈페이지:"网站",홈페이지입력:"请输入您的网站URL",GitHub:q5,GitHub입력:"请输入您的GitHub个人资料URL",사진업로드:"上传照片",사진제거:"删除照片",저장하기:"保存更改",저장중:"保存中...",테스트게시글생성타이틀:"📝 生成测试帖子",테스트게시글생성설명:"每个类别生成100条有趣的测试帖子，共400条。",로그인필요메시지:"⚠️ 使用此功能需要登录。",로그인하러가기:"前往登录",게시글생성시작:"开始生成帖子",생성중:"生成中...",생성성공:"✅ 成功生成了 {count} 条帖子！",생성실패:"❌ 生成帖子失败: {error}",경고:"⚠️ 警告",경고메시지:"这将创建 {count} 条测试帖子。仅用于测试目的。",진행상황:"进度",생성된게시글수:"已创建 {count} / {total} 条帖子",로딩중:"加载中...",게시판설명:"的最新新闻，分享您的意见。",글쓰기:"写作",게시글없음:"还没有帖子",첫게시글공유:"分享您的第一个故事并开始社区。",새글작성2:"写新帖子",게시글로딩중:"正在加载帖子...",게시글로드실패:"加载帖子失败。",더많은게시글로딩:"正在加载更多帖子...",모든게시글확인:"已加载所有帖子。",새게시글작성:"写新帖子",카테고리:"类别",카테고리선택:"选择类别",카테고리선택필요:"请选择一个类别。",제목:"标题",제목입력:"输入标题",제목입력필요:"请输入标题。",내용:"内容",내용입력:"输入内容",내용입력필요:"请输入内容。",전송:"发送",전송중:"发送中...",게시글작성완료:"帖子已创建。",게시글저장실패:"帖子保存失败: {error}",게시글저장중오류:"保存帖子时出错。",로그인정보확인불가:"无法验证登录信息。",좋아요실패:"处理点赞时出错。",이미좋아요:"您已经点赞过了。",댓글작성:"写评论",댓글내용입력:"请输入评论内容",댓글이작성되었습니다:"评论已创建。",댓글작성실패:"评论创建失败: {error}",댓글내용입력필요:"请输入评论内容。","error.unknown":"发生未知错误。","error.network":"请检查网络连接。","error.offline":"没有互联网连接。","error.auth.invalidEmail":"邮箱格式不正确。","error.auth.userDisabled":"账户已被禁用。","error.auth.userNotFound":"找不到用户。","error.auth.wrongPassword":"密码不正确。","error.auth.emailAlreadyInUse":"该邮箱已被使用。","error.auth.weakPassword":"密码太弱。（至少6个字符）","error.auth.operationNotAllowed":"此操作不被允许。","error.auth.tooManyRequests":"请求过多。请稍后再试。","error.auth.invalidVerificationCode":"验证码无效。","error.auth.invalidPhoneNumber":"电话号码格式不正确。","error.auth.missingVerificationCode":"请输入验证码。","error.auth.sessionExpired":"会话已过期。请重新登录。","error.auth.requiresRecentLogin":"为了安全，请重新登录。","error.auth.credentialAlreadyInUse":"此凭证已被其他账户使用。","error.db.permissionDenied":"您没有执行此操作的权限。","error.db.authenticationRequired":"请先登录。","error.db.networkError":"数据库连接时出错。","error.storage.unauthorized":"没有文件访问权限。","error.storage.bucketNotFound":"找不到存储桶。","error.storage.invalidArgument":"参数无效。","error.storage.objectNotFound":"找不到文件。","error.storage.retryLimitExceeded":"文件上传出错。请重试。","error.storage.quotaExceeded":"存储空间不足。","error.storage.canceled":"文件上传已取消。"},Jl={en:N5,ko:L5,ja:$5,zh:O5};function Uc(n){const e=(n??"").toLowerCase();return e.startsWith("ko")?"ko":e.startsWith("ja")?"ja":e.startsWith("zh")?"zh":"en"}function Tg(){if(typeof navigator>"u")return"en";const n=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(const e of n){const t=Uc(e);if(t!=="en")return t}return"en"}function M5(n){let e=Uc(n)||Tg();function t(i){e=Uc(i)}function r(){return e}function s(i,o={}){return((Jl[e]??Jl.en)[i]??Jl.en[i]??i).replace(/\{(\w+)\}/g,(u,f)=>o[f]??"")}return{t:s,setLocale:t,getLocale:r}}const wu="sns-web-locale",Sg=[{code:"ko",label:"🇰🇷 한국어"},{code:"en",label:"🇺🇸 English"},{code:"ja",label:"🇯🇵 日本語"},{code:"zh",label:"🇨🇳 中文"}];function z5(){if(typeof localStorage>"u")return null;const n=localStorage.getItem(wu);if(!n)return null;const e=Sg.find(t=>t.code===n);return e?e.code:null}const Ag=z5()??Tg(),La=M5(Ag);typeof localStorage<"u"&&localStorage.setItem(wu,La.getLocale());const yu=Ps(Ag);function F5(n){La.setLocale(n);const e=La.getLocale();yu.set(e),typeof localStorage<"u"&&localStorage.setItem(wu,e)}const zt=Z1(yu,n=>(e,t={})=>La.t(e,t)),Pg=Ps("");function Dn(n){Pg.set(n)}function Sn(n){window.history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}var U5=R('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'),j5=R('<img alt="프로필" class="avatar-image svelte-38psow"/>'),V5=R('<div class="avatar-fallback svelte-38psow"> </div>'),B5=R('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <button type="button" class="dropdown-item svelte-38psow"><!> <span> </span></button> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'),H5=R('<img class="avatar-image svelte-38psow"/>'),W5=R('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'),G5=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),K5=R('<div class="desktop-menu svelte-38psow"><button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"><!> <span> </span></button> <button type="button" class="nav-button svelte-38psow"> </button> <button type="button" class="icon-button svelte-38psow"><!></button></div> <div class="mobile-menu svelte-38psow"><button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button> <button type="button" class="icon-button svelte-38psow"><!></button></div>',1),Y5=R('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><button type="button" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></button> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');const Q5={hash:"svelte-38psow",code:`\r
  /* 탑바 */.topbar.svelte-38psow {position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);background-color:white;}\r
\r
  /* 컨테이너 */.container.svelte-38psow {max-width:1280px;margin:0 auto;display:flex;height:4rem;align-items:center;padding:0 1rem;}\r
\r
  /* 로고 */.logo-link.svelte-38psow {display:flex;align-items:center;text-decoration:none;color:inherit;flex-shrink:0;\r
    /* button 기본 스타일 리셋 */border:none;background:none;padding:0;font-family:inherit;cursor:pointer;}\r
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
  /* 네비게이션 버튼 */.nav-button.svelte-38psow {display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;font-size:0.875rem;font-weight:500;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.nav-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
\r
  /* 주요 버튼 */\r
\r
  /* 아이콘 버튼 */.icon-button.svelte-38psow {display:inline-flex;align-items:center;justify-content:center;padding:0.5rem;background:transparent;color:inherit;border:none;border-radius:0.375rem;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.icon-button.svelte-38psow:hover {background-color:#f3f4f6;}\r
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
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;font-family:inherit;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`};function J5(n,e){dt(e,!0),ct(n,Q5);const t=()=>lt(Pg,"$pageTitle",i),r=()=>lt(cl,"$user",i),s=()=>lt(zt,"$t",i),[i,o]=Nt();let a=ne(!1);function l(A){Sn(A),y(a,!1)}async function u(){if((await P5()).success){const E=new CustomEvent("logout-success",{bubbles:!0,composed:!0});dispatchEvent(E)}y(a,!1)}function f(){return Se.data?.displayName?Se.data.displayName.charAt(0).toUpperCase():Se.email?Se.email.charAt(0).toUpperCase():"U"}function m(){y(a,!v(a))}function p(A){const E=document.querySelector(".dropdown-menu"),T=document.querySelector(".dropdown-trigger"),N=A.target;E&&!E.contains(N)&&!T?.contains(N)&&y(a,!1)}Kt(()=>(document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}));var b=Y5(),g=d(b),w=d(g),k=d(w);k.__click=()=>l("/");var I=h(k,2);{var P=A=>{var E=U5(),T=d(E),N=d(T,!0);c(T),c(E),z(()=>_(N,t())),x(A,E)};G(I,A=>{t()&&A(P)})}c(w);var C=h(w,2),L=d(C);{var D=A=>{var E=G5(),T=le(E),N=d(T);N.__click=()=>l("/post/list");var $=d(N);Mi($,{size:16});var j=h($,2),K=d(j,!0);c(j),c(N);var ee=h(N,2);ee.__click=()=>l("/chat/list");var W=d(ee);Vr(W,{size:16});var Z=h(W,2),ce=d(Z,!0);c(Z),c(ee);var ae=h(ee,2);ae.__click=()=>l("/user/list");var ie=d(ae);go(ie,{size:16});var H=h(ie,2),Y=d(H,!0);c(H),c(ae);var J=h(ae,2),te=d(J);te.__click=m;var ue=d(te),U=d(ue);{var S=_e=>{var ve=j5();z(()=>Ae(ve,"src",Se.data.photoUrl)),x(_e,ve)},M=_e=>{var ve=V5(),Te=d(ve,!0);c(ve),z(Re=>_(Te,Re),[f]),x(_e,ve)};G(U,_e=>{Se.data?.photoUrl?_e(S):_e(M,!1)})}c(ue);var B=h(ue,2),O=d(B,!0);c(B),c(te);var Q=h(te,2);{var F=_e=>{var ve=B5(),Te=d(ve),Re=d(Te,!0);c(Te);var it=h(Te,4);it.__click=()=>l("/user/profile");var St=d(it);Yr(St,{size:16});var kt=h(St,2),pt=d(kt,!0);c(kt),c(it);var Ut=h(it,4);Ut.__click=u;var Vt=d(Ut);gg(Vt,{size:16});var nn=h(Vt,2),fe=d(nn,!0);c(nn),c(Ut),c(ve),z((ge,we,Ce)=>{_(Re,ge),_(pt,we),_(fe,Ce)},[()=>s()("내계정"),()=>s()("프로필수정"),()=>s()("로그아웃")]),x(_e,ve)};G(Q,_e=>{v(a)&&_e(F)})}c(J);var se=h(J,2);se.__click=()=>l("/menu");var oe=d(se);zi(oe,{size:24}),c(se),c(T);var Ee=h(T,2),re=d(Ee);re.__click=()=>l("/post/list");var be=d(re);Mi(be,{size:20}),c(re);var ye=h(re,2);ye.__click=()=>l("/user/list");var Pe=d(ye);go(Pe,{size:20}),c(ye);var Le=h(ye,2);Le.__click=()=>l("/chat/list");var ze=d(Le);Vr(ze,{size:20}),c(Le);var Oe=h(Le,2);Oe.__click=()=>l("/user/profile");var We=d(Oe),Ye=d(We);{var tt=_e=>{var ve=H5();z(Te=>{Ae(ve,"src",Se.data.photoUrl),Ae(ve,"alt",Te)},[()=>s()("프로필")]),x(_e,ve)},Ue=_e=>{var ve=W5(),Te=d(ve,!0);c(ve),z(Re=>_(Te,Re),[f]),x(_e,ve)};G(Ye,_e=>{Se.data?.photoUrl?_e(tt):_e(Ue,!1)})}c(We),c(Oe);var st=h(Oe,2);st.__click=()=>l("/menu");var Me=d(st);zi(Me,{size:24}),c(st),c(Ee),z((_e,ve,Te,Re,it,St,kt,pt,Ut)=>{_(K,_e),_(ce,ve),_(Y,Te),_(O,Se.data?.displayName||Se.email),Ae(se,"title",Re),Ae(re,"title",it),Ae(ye,"title",St),Ae(Le,"title",kt),Ae(Oe,"title",pt),Ae(st,"title",Ut)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("사용자찾기"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("사용자찾기"),()=>s()("채팅"),()=>s()("프로필"),()=>s()("메뉴")]),x(A,E)},q=A=>{var E=K5(),T=le(E),N=d(T);N.__click=()=>l("/post/list");var $=d(N);Mi($,{size:16});var j=h($,2),K=d(j,!0);c(j),c(N);var ee=h(N,2);ee.__click=()=>l("/chat/list");var W=d(ee);Vr(W,{size:16});var Z=h(W,2),ce=d(Z,!0);c(Z),c(ee);var ae=h(ee,2);ae.__click=()=>l("/user/login");var ie=d(ae,!0);c(ae);var H=h(ae,2);H.__click=()=>l("/menu");var Y=d(H);zi(Y,{size:20}),c(H),c(T);var J=h(T,2),te=d(J);te.__click=()=>l("/post/list");var ue=d(te);Mi(ue,{size:20}),c(te);var U=h(te,2);U.__click=()=>l("/chat/list");var S=d(U);Vr(S,{size:20}),c(U);var M=h(U,2);M.__click=()=>l("/user/login");var B=d(M);Yr(B,{size:20}),c(M);var O=h(M,2);O.__click=()=>l("/menu");var Q=d(O);zi(Q,{size:24}),c(O),c(J),z((F,se,oe,Ee,re,be,ye,Pe)=>{_(K,F),_(ce,se),_(ie,oe),Ae(H,"title",Ee),Ae(te,"title",re),Ae(U,"title",be),Ae(M,"title",ye),Ae(O,"title",Pe)},[()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴"),()=>s()("게시판"),()=>s()("채팅"),()=>s()("로그인"),()=>s()("메뉴")]),x(A,E)};G(L,A=>{r()?A(D):A(q,!1)})}c(C),c(g),c(b),x(n,b),ut(),o()}Ct(["click"]);customElements.define("sns-topbar",pe(J5,{},[],[],!0));var X5=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>'),Z5=R('<button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button>',1),eC=R("<option> </option>"),tC=R('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item svelte-najsij"><!> <span> </span></button></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button> <button type="button" class="menu-item-small svelte-najsij"><!> <span> </span></button></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');const nC={hash:"svelte-najsij",code:`
  /* 사이드바 */.sidebar.svelte-najsij {width:16rem;border-right:1px solid #e5e7eb;background-color:white;padding:1rem;overflow-y:hidden;height:100vh;}

  /* 사이드바 콘텐츠 */.sidebar-content.svelte-najsij {position:sticky;top:5rem;}

  /* 섹션 제목 */.section-title.svelte-najsij {font-size:1.125rem;font-weight:bold;margin-bottom:1rem;color:#111827;}

  /* 섹션 부제목 */.section-subtitle.svelte-najsij {font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;color:#6b7280;}

  /* 메뉴 */.menu.svelte-najsij {display:flex;flex-direction:column;gap:0.5rem;}

  /* 메뉴 아이템 */.menu-item.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;cursor:pointer;
    /* button 기본 스타일 리셋 */border:none;background:none;font-family:inherit;font-size:inherit;text-align:left;width:100%;}.menu-item.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 작은 메뉴 아이템 */.menu-item-small.svelte-najsij {display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0.75rem;border-radius:0.5rem;color:#374151;text-decoration:none;transition:all 0.2s;font-size:0.875rem;font-weight:500;cursor:pointer;
    /* button 기본 스타일 리셋 */border:none;background:none;font-family:inherit;text-align:left;width:100%;}.menu-item-small.svelte-najsij:hover {background-color:#f3f4f6;color:#111827;}

  /* 외부 링크 아이콘 */

  /* 아이콘 */.icon.svelte-najsij {flex-shrink:0;}

  /* 구분선 */.divider.svelte-najsij {height:1px;background-color:#e5e7eb;margin:1.5rem 0;}

  /* 섹션 */.section.svelte-najsij {margin-bottom:1.5rem;}

  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-compact.svelte-najsij {display:flex;align-items:center;gap:0.75rem;}.language-label.svelte-najsij {font-size:0.85rem;font-weight:600;color:#374151;white-space:nowrap;}.language-select.svelte-najsij {flex:1;padding:0.45rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#111827;font-size:0.85rem;font-weight:500;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 0.75rem center;background-size:12px 8px;cursor:pointer;}.language-select.svelte-najsij:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.15);}

  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}

  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}
  }`};function rC(n,e){dt(e,!1),ct(n,nC);const t=()=>lt(zt,"$t",i),r=()=>lt(cl,"$user",i),s=()=>lt(yu,"$locale",i),[i,o]=Nt(),a=Sg;wn();var l=tC(),u=d(l),f=d(u),m=d(f,!0);c(f);var p=h(f,2),b=d(p);b.__click=()=>Sn("/");var g=d(b);vg(g,{size:20});var w=h(g,2),k=d(w,!0);c(w),c(b);var I=h(b,2);I.__click=()=>Sn("/chat/room");var P=d(I);Vr(P,{size:20});var C=h(P,2),L=d(C,!0);c(C),c(I);var D=h(I,2);D.__click=()=>Sn("/user/list");var q=d(D);go(q,{size:20});var A=h(q,2),E=d(A,!0);c(A),c(D);var T=h(D,2);T.__click=()=>Sn("/user/profile");var N=d(T);Yr(N,{size:20});var $=h(N,2),j=d($,!0);c($),c(T);var K=h(T,2);K.__click=()=>Sn("/post/list");var ee=d(K);bu(ee,{size:20});var W=h(ee,2),Z=d(W,!0);c(W),c(K),c(p);var ce=h(p,4),ae=d(ce),ie=d(ae,!0);c(ae);var H=h(ae,2),Y=d(H);{var J=De=>{var $e=X5();$e.__click=()=>Sn("/user/profile");var V=d($e);Yr(V,{size:16});var he=h(V,2),ke=d(he,!0);c(he),c($e),z(nt=>_(ke,nt),[()=>t()("회원정보수정")]),x(De,$e)},te=De=>{var $e=Z5(),V=le($e);V.__click=()=>Sn("/auth/login");var he=d(V);mg(he,{size:16});var ke=h(he,2),nt=d(ke,!0);c(ke),c(V);var Xe=h(V,2);Xe.__click=()=>Sn("/auth/signup");var Ze=d(Xe);Yr(Ze,{size:16});var ot=h(Ze,2),et=d(ot,!0);c(ot),c(Xe),z((rt,gt)=>{_(nt,rt),_(et,gt)},[()=>t()("로그인"),()=>t()("회원가입")]),x(De,$e)};G(Y,De=>{r()?De(J):De(te,!1)})}c(H),c(ce);var ue=h(ce,4),U=d(ue);U.__click=()=>Sn("/user/list");var S=d(U);go(S,{size:16});var M=h(S,2),B=d(M,!0);c(M),c(U);var O=h(U,2),Q=h(d(O),2),F=d(Q,!0);c(Q);var se=h(Q,2);zc(se,{size:12,class:"external-icon"}),c(O);var oe=h(O,2),Ee=d(oe);Vr(Ee,{size:16});var re=h(Ee,2),be=d(re,!0);c(re);var ye=h(re,2);zc(ye,{size:12,class:"external-icon"}),c(oe);var Pe=h(oe,2);Pe.__click=()=>Sn("/dev/history");var Le=d(Pe);hg(Le,{size:16});var ze=h(Le,2),Oe=d(ze,!0);c(ze),c(Pe);var We=h(Pe,2);We.__click=()=>Sn("/dev/sed");var Ye=d(We);Cg(Ye,{size:16});var tt=h(Ye,2),Ue=d(tt,!0);c(tt),c(We),c(ue);var st=h(ue,2),Me=d(st),_e=d(Me,!0);c(Me);var ve=h(Me,2),Te=d(ve),Re=h(Te,2);Re.__change=De=>F5(De.currentTarget.value),Zt(Re,5,()=>a,pr,(De,$e)=>{var V=eC(),he=d(V,!0);c(V);var ke={};z(()=>{_(he,v($e).label),ke!==(ke=v($e).code)&&(V.value=(V.__value=v($e).code)??"")}),x(De,V)}),c(Re);var it;sd(Re),c(ve),c(st);var St=h(st,2),kt=d(St),pt=d(kt),Ut=d(pt,!0);c(pt);var Vt=h(pt,2),nn=d(Vt,!0);c(Vt),c(kt),c(St);var fe=h(St,2),ge=d(fe),we=d(ge,!0),Ce=h(we,2);c(ge),c(fe),c(u),c(l),z((De,$e,V,he,ke,nt,Xe,Ze,ot,et,rt,gt,Ft,Dt,Bt,Ne,Ge,Je)=>{_(m,De),_(k,$e),_(L,V),_(E,he),_(j,ke),_(Z,nt),_(ie,Xe),_(B,Ze),_(F,ot),_(be,et),_(Oe,rt),_(Ue,gt),_(_e,Ft),Ae(Te,"aria-label",Dt),it!==(it=s())&&(Re.value=(Re.__value=s())??"",so(Re,s())),_(Ut,Bt),_(nn,Ne),_(we,Ge),_(Ce,` ${Je??""}`)},[()=>t()("퀵메뉴"),()=>t()("홈"),()=>t()("채팅"),()=>t()("사용자목록"),()=>t()("내프로필"),()=>t()("게시판"),()=>t()("시작하기"),()=>t()("회원목록"),()=>t()("프로젝트GitHub"),()=>t()("한바보참여단톡방"),()=>t()("개발일지"),()=>t()("바이브코딩SED"),()=>t()("언어설정"),()=>t()("언어설정"),()=>t()("빌드버전"),()=>new Date().toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),()=>t()("카피레프트"),()=>t()("AI소개")]),x(n,l),ut(),o()}Ct(["click","change"]);customElements.define("sns-left-sidebar",pe(rC,{},[],[],!0));var sC=R('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');const iC={hash:"svelte-3epon2",code:`\r
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
  }`};function oC(n,e){dt(e,!0),ct(n,iC);const t=()=>lt(zt,"$t",r),[r,s]=Nt();let i=ne(an({totalUsers:8,totalScore:1,totalPosts:0,totalMessages:0}));var o=sC(),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2),m=d(f),p=d(m),b=d(p);Yr(b,{size:20}),c(p);var g=h(p,2),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I),c(g),c(m);var C=h(m,2),L=d(C),D=d(L);Ig(D,{size:20}),c(L);var q=h(L,2),A=d(q),E=d(A,!0);c(A);var T=h(A,2),N=d(T,!0);c(T),c(q),c(C);var $=h(C,2),j=d($),K=d(j);bu(K,{size:20}),c(j);var ee=h(j,2),W=d(ee),Z=d(W,!0);c(W);var ce=h(W,2),ae=d(ce,!0);c(ce);var ie=h(ce,2),H=d(ie,!0);c(ie),c(ee),c($);var Y=h($,2),J=d(Y),te=d(J);Vr(te,{size:20}),c(J);var ue=h(J,2),U=d(ue),S=d(U,!0);c(U);var M=h(U,2),B=d(M,!0);c(M),c(ue),c(Y),c(f);var O=h(f,2),Q=d(O,!0);c(O),c(a),c(o),z((F,se,oe,Ee,re,be,ye)=>{_(u,F),_(k,se),_(P,v(i).totalUsers),_(E,oe),_(N,v(i).totalScore),_(Z,Ee),_(ae,v(i).totalPosts),_(H,re),_(S,be),_(B,v(i).totalMessages),_(Q,ye)},[()=>t()("통계"),()=>t()("전체사용자"),()=>t()("전체점수"),()=>t()("전체글"),()=>t()("준비중"),()=>t()("채팅메시지"),()=>t()("통계실시간업데이트")]),x(n,o),ut(),s()}customElements.define("sns-right-sidebar",pe(oC,{},[],[],!0));var aC=R('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>',2);const lC={hash:"svelte-um1xbq",code:`\r
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
  }`};function cC(n,e){ct(n,lC);var t=aC(),r=d(t),s=h(r,2),i=d(s);sn(i,1,"left-sidebar svelte-um1xbq");var o=h(i,2),a=d(o);ft(a,e,"default",{}),c(o);var l=h(o,2);sn(l,1,"right-sidebar svelte-um1xbq"),c(s),c(t),x(n,t)}customElements.define("sns-layout",pe(cC,{},["default"],[],!0));var dC=R('<div class="icon-container svelte-m3h71q"> </div>'),uC=R('<p class="hint-box svelte-m3h71q"> </p>'),hC=R('<p class="gpl-box svelte-m3h71q"> </p>'),fC=R('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'),pC=R('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'),vC=R('<div class="accordion svelte-m3h71q"></div>');const mC={hash:"svelte-m3h71q",code:`\r
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
  }`};function gC(n,e){dt(e,!0),ct(n,mC);let t=je(e,"items",7,"[]"),r=je(e,"type",7,"single"),s=je(e,"collapsible",7,!0),i=_s(()=>{try{const p=typeof t()=="string"?JSON.parse(t()):t();return Array.isArray(p)?p:[]}catch(p){return console.error("Failed to parse accordion items:",p),[]}}),o=_s(()=>{const p=s();return typeof p=="boolean"?p:typeof p=="string"?p!=="false":!0}),a=ne(an(new Set));function l(p){const b=new Set(v(a));r()==="single"?b.has(p)?v(o)&&b.delete(p):(b.clear(),b.add(p)):b.has(p)?b.delete(p):b.add(p),y(a,b,!0)}function u(p){return v(a).has(p)}var f={get items(){return t()},set items(p="[]"){t(p),Fe()},get type(){return r()},set type(p="single"){r(p),Fe()},get collapsible(){return s()},set collapsible(p=!0){s(p),Fe()}},m=vC();return Zt(m,21,()=>v(i),pr,(p,b,g)=>{var w=pC(),k=d(w);k.__click=()=>l(g);var I=d(k),P=d(I);{var C=$=>{var j=dC(),K=d(j,!0);c(j),z(()=>_(K,v(b).icon)),x($,j)};G(P,$=>{v(b).icon&&$(C)})}var L=h(P,2),D=d(L,!0);c(L),c(I);var q=h(I,2);let A;var E=d(q);gu(E,{size:20}),c(q),c(k);var T=h(k,2);{var N=$=>{var j=fC(),K=d(j),ee=d(K,!0);c(K);var W=h(K,2);{var Z=ie=>{var H=uC(),Y=d(H,!0);c(H),z(()=>_(Y,v(b).hint)),x(ie,H)};G(W,ie=>{v(b).hint&&ie(Z)})}var ce=h(W,2);{var ae=ie=>{var H=hC(),Y=d(H,!0);c(H),z(()=>_(Y,v(b).gpl)),x(ie,H)};G(ce,ie=>{v(b).gpl&&ie(ae)})}c(j),z(()=>_(ee,v(b).content)),x($,j)};G(T,$=>{u(g)&&$(N)})}c(w),z(($,j)=>{Ae(k,"aria-expanded",$),_(D,v(b).title),A=sn(q,1,"chevron svelte-m3h71q",null,A,j)},[()=>u(g),()=>({"rotate-180":u(g)})]),x(p,w)}),c(m),x(n,m),ut(f)}Ct(["click"]);customElements.define("sns-accordion",pe(gC,{items:{},type:{},collapsible:{}},[],[],!0));var bC=R('<h2 id="alert-title" class="alert-title svelte-1vwaezm"> </h2>'),_C=R('<p id="alert-message" class="alert-message svelte-1vwaezm"> </p>'),wC=R('<div class="alert-backdrop svelte-1vwaezm"><div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-message"><button class="alert-close-btn svelte-1vwaezm" aria-label="닫기" type="button"><!></button> <div class="alert-icon svelte-1vwaezm"><!></div> <!> <!> <button class="alert-confirm-btn svelte-1vwaezm" type="button"> </button></div></div>');const yC={hash:"svelte-1vwaezm",code:`\r
  /* Alert 배경 (반투명 오버레이) */.alert-backdrop.svelte-1vwaezm {position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;\r
    animation: svelte-1vwaezm-fadeIn 0.2s ease-out;}\r
\r
  @keyframes svelte-1vwaezm-fadeIn {\r
    from {\r
      opacity: 0;\r
    }\r
    to {\r
      opacity: 1;\r
    }\r
  }\r
\r
  /* Alert Dialog 컨테이너 */.alert-dialog.svelte-1vwaezm {background-color:#ffffff;border-radius:1rem;box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);max-width:400px;width:100%;padding:2rem;display:flex;flex-direction:column;align-items:center;gap:1rem;position:relative;\r
    animation: svelte-1vwaezm-slideUp 0.3s ease-out;}\r
\r
  @keyframes svelte-1vwaezm-slideUp {\r
    from {\r
      opacity: 0;\r
      transform: translateY(1rem);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  /* 닫기 버튼 (우측 상단) */.alert-close-btn.svelte-1vwaezm {position:absolute;top:1rem;right:1rem;background:none;border:none;color:#9ca3af;cursor:pointer;padding:0.25rem;display:flex;align-items:center;justify-content:center;border-radius:0.375rem;transition:all 0.2s ease;}.alert-close-btn.svelte-1vwaezm:hover {background-color:#f3f4f6;color:#6b7280;}\r
\r
  /* Alert 아이콘 영역 */.alert-icon.svelte-1vwaezm {display:flex;align-items:center;justify-content:center;width:4rem;height:4rem;border-radius:50%;margin-bottom:0.5rem;}\r
\r
  /* Success 타입 */.alert-success.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#dcfce7;color:#16a34a;}.alert-success.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #059669 0%, #10b981 100%);color:#ffffff;}.alert-success.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #047857 0%, #059669 100%);}\r
\r
  /* Error 타입 */.alert-error.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#fee2e2;color:#dc2626;}.alert-error.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #dc2626 0%, #ef4444 100%);color:#ffffff;}.alert-error.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);}\r
\r
  /* Info 타입 */.alert-info.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#dbeafe;color:#2563eb;}.alert-info.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);color:#ffffff;}.alert-info.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);}\r
\r
  /* Warning 타입 */.alert-warning.svelte-1vwaezm .alert-icon:where(.svelte-1vwaezm) {background-color:#fef3c7;color:#d97706;}.alert-warning.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm) {background:linear-gradient(135deg, #d97706 0%, #f59e0b 100%);color:#ffffff;}.alert-warning.svelte-1vwaezm .alert-confirm-btn:where(.svelte-1vwaezm):hover {background:linear-gradient(135deg, #b45309 0%, #d97706 100%);}\r
\r
  /* Alert 제목 */.alert-title.svelte-1vwaezm {margin:0;font-size:1.5rem;font-weight:700;color:#111827;text-align:center;line-height:1.4;}\r
\r
  /* Alert 메시지 */.alert-message.svelte-1vwaezm {margin:0;font-size:1rem;color:#4b5563;text-align:center;line-height:1.6;white-space:pre-wrap;}\r
\r
  /* 확인 버튼 */.alert-confirm-btn.svelte-1vwaezm {width:100%;padding:0.75rem 1.5rem;border:none;border-radius:0.5rem;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.2s ease;margin-top:0.5rem;}.alert-confirm-btn.svelte-1vwaezm:active {transform:scale(0.98);}\r
\r
  /* 반응형 - 모바일 */\r
  @media (max-width: 640px) {.alert-dialog.svelte-1vwaezm {max-width:90%;padding:1.5rem;}.alert-icon.svelte-1vwaezm {width:3.5rem;height:3.5rem;}.alert-title.svelte-1vwaezm {font-size:1.25rem;}.alert-message.svelte-1vwaezm {font-size:0.9375rem;}\r
  }`};function xC(n,e){dt(e,!0),ct(n,yC);let t=je(e,"open",7,"false"),r=je(e,"type",7,"info"),s=je(e,"title",7,""),i=je(e,"message",7,""),o=je(e,"confirmText",7,"확인"),a=je(e,"onconfirm",7),l=je(e,"onclose",7);const u=_s(()=>t()==="true"||t()==="");function f(C){switch(C){case"success":return Na;case"error":return pg;case"info":return Fc;case"warning":return Eg;default:return Fc}}function m(C){return`alert-${C}`}function p(C){a()&&a()();const L=new CustomEvent("confirm",{bubbles:!0,composed:!0}),D=C.target.closest("alert-dialog");D&&D.dispatchEvent(L)}function b(C){l()&&l()();const L=new CustomEvent("close",{bubbles:!0,composed:!0});let D=null;C?D=C.target.closest("alert-dialog"):D=document.querySelector('alert-dialog[open="true"]'),D&&D.dispatchEvent(L)}function g(C){C.target===C.currentTarget&&b(C)}var w={get open(){return t()},set open(C="false"){t(C),Fe()},get type(){return r()},set type(C="info"){r(C),Fe()},get title(){return s()},set title(C=""){s(C),Fe()},get message(){return i()},set message(C=""){i(C),Fe()},get confirmText(){return o()},set confirmText(C="확인"){o(C),Fe()},get onconfirm(){return a()},set onconfirm(C){a(C),Fe()},get onclose(){return l()},set onclose(C){l(C),Fe()}},k=me(),I=le(k);{var P=C=>{var L=wC();L.__click=g;var D=d(L),q=d(D);q.__click=b;var A=d(q);_u(A,{size:20}),c(q);var E=h(q,2),T=d(E);V1(T,()=>f(r()),(Z,ce)=>{ce(Z,{size:48,strokeWidth:2})}),c(E);var N=h(E,2);{var $=Z=>{var ce=bC(),ae=d(ce,!0);c(ce),z(()=>_(ae,s())),x(Z,ce)};G(N,Z=>{s()&&Z($)})}var j=h(N,2);{var K=Z=>{var ce=_C(),ae=d(ce,!0);c(ce),z(()=>_(ae,i())),x(Z,ce)};G(j,Z=>{i()&&Z(K)})}var ee=h(j,2);ee.__click=p;var W=d(ee,!0);c(ee),c(D),c(L),z(Z=>{sn(D,1,`alert-dialog ${Z??""}`,"svelte-1vwaezm"),_(W,o())},[()=>m(r())]),x(C,L)};G(I,C=>{v(u)&&C(P)})}return x(n,k),ut(w)}Ct(["click"]);customElements.define("alert-dialog",pe(xC,{open:{},type:{},title:{},message:{},confirmText:{},onconfirm:{},onclose:{}},[],[],!1));var kC=R('<div class="uid-section svelte-1uta475"><div class="uid-label svelte-1uta475">현재 사용자 UID</div> <div class="uid-value svelte-1uta475"> </div></div> <div class="menu-divider svelte-1uta475"></div>',1),EC=R('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'),IC=R('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <!> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'),CC=R('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'),TC=R('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>',1);const SC={hash:"svelte-1uta475",code:`
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

  /* UID 표시 섹션 */.uid-section.svelte-1uta475 {padding:0.75rem 1rem;background-color:#f0fdf4;}.uid-label.svelte-1uta475 {font-size:0.75rem;color:#059669;margin-bottom:0.25rem;font-weight:500;}.uid-value.svelte-1uta475 {font-family:monospace;font-size:0.75rem;color:#047857;background-color:#dcfce7;border:1px solid #86efac;border-radius:0.25rem;padding:0.375rem 0.5rem;word-break:break-all;line-height:1.4;}

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

  /* reCAPTCHA 컨테이너 숨김 */`};function AC(n,e){dt(e,!0),ct(n,SC);const t=[{label:"A",name:"apple",email:"apple@test.com"},{label:"B",name:"banana",email:"banana@test.com"},{label:"C",name:"cherry",email:"cherry@test.com"},{label:"D",name:"durian",email:"durian@test.com"},{label:"E",name:"elderberry",email:"elderberry@test.com"},{label:"F",name:"fig",email:"fig@test.com"},{label:"G",name:"grape",email:"grape@test.com"},{label:"H",name:"honeydew",email:"honeydew@test.com"}],r="12345a,*";let s=ne(!1),i=ne(!1),o=ne(!1),a=ne(null);const l=Date.now(),u=new Date(l).toLocaleString("ko-KR",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}),f="withcenter-test-5";Kt(()=>{console.log("TestFab 컴포넌트가 마운트되었습니다.");const E=kd(or,T=>{y(a,T,!0),console.log("Auth 상태 변경:",T?`로그인됨 (UID: ${T.uid})`:"로그아웃됨")});return()=>{E()}});async function m(E){if(!v(o)){y(o,!0),console.log(`${E.name} (${E.label}) 계정으로 로그인을 시도합니다...`);try{let T;try{T=await Qy(or,E.email,r),console.log(`${E.name} 계정으로 로그인 성공!`)}catch(N){if(N.code==="auth/user-not-found"||N.code==="auth/invalid-credential")console.log(`${E.name} 계정이 없습니다. 회원가입을 진행합니다...`),T=await Yy(or,E.email,r),await kv(T.user,{displayName:E.name}),console.log(`${E.name} 계정 회원가입 및 로그인 성공!`);else throw N}alert(`${E.name} (${E.label}) 계정으로 로그인되었습니다.`),y(s,!1),window.location.href="/"}catch(T){console.error("로그인 오류:",T);let N="로그인에 실패했습니다.";T.code==="auth/invalid-email"?N="잘못된 이메일 형식입니다.":T.code==="auth/wrong-password"?N="비밀번호가 일치하지 않습니다.":T.code==="auth/too-many-requests"?N="너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.":T.code==="auth/weak-password"?N="비밀번호가 너무 약합니다.":T.code==="auth/email-already-in-use"&&(N="이미 사용 중인 이메일입니다."),alert(N+`
오류 코드: `+T.code)}finally{y(o,!1)}}}function p(){y(s,!v(s))}function b(){y(i,!v(i)),y(s,!1)}function g(E){const T=E.target;!T.closest(".test-fab-menu")&&!T.closest(".test-fab-button")&&y(s,!1)}var w=TC();Jr("click",nc,g);var k=le(w),I=d(k);let P;I.__click=p;var C=d(I);yg(C,{size:24}),c(I);var L=h(I,2);{var D=E=>{var T=IC(),N=h(d(T),4);{var $=Y=>{var J=kC(),te=le(J),ue=h(d(te),2),U=d(ue,!0);c(ue),c(te),At(2),z(()=>_(U,v(a).uid)),x(Y,J)};G(N,Y=>{v(a)&&Y($)})}var j=h(N,2),K=d(j),ee=d(K);Yr(ee,{size:16}),At(2),c(K);var W=h(K,2);Zt(W,21,()=>t,Y=>Y.label,(Y,J)=>{var te=EC();te.__click=()=>m(v(J));var ue=d(te),U=d(ue,!0);c(ue);var S=h(ue,2),M=d(S,!0);c(S),c(te),z(()=>{te.disabled=v(o),_(U,v(J).label),_(M,v(J).name)}),x(Y,te)}),c(W),c(j);var Z=h(j,4);Z.__click=b;var ce=d(Z);wg(ce,{size:16}),At(2),c(Z);var ae=h(Z,4),ie=h(d(ae),2),H=d(ie,!0);c(ie),c(ae),c(T),z(()=>_(H,u)),x(E,T)};G(L,E=>{v(s)&&E(D)})}c(k);var q=h(k,2);{var A=E=>{var T=CC();T.__click=b;var N=d(T);N.__click=ie=>ie.stopPropagation();var $=h(d(N),2),j=d($),K=h(d(j),2),ee=d(K,!0);c(K),c(j);var W=h(j,8),Z=h(d(W),2),ce=d(Z,!0);c(Z),c(W),c($);var ae=h($,2);ae.__click=b,c(N),c(T),z(()=>{_(ee,"production"),_(ce,f)}),x(E,T)};G(q,E=>{v(i)&&E(A)})}z(()=>{P=sn(I,1,"test-fab-button svelte-1uta475",null,P,{loading:v(o)}),I.disabled=v(o)}),x(n,w),ut()}Ct(["click"]);customElements.define("test-fab",pe(AC,{},[],[],!1));function xu(n,e){const{subscribe:t,set:r}=Ps({data:e??null,loading:!0,error:null}),s=Pt(Tt,n);return qo(s,i=>{const o=i.val();r({data:o!==null?o:e??null,loading:!1,error:null}),console.log(`✅ 실시간 데이터 로드 성공: ${n}`,o!==null?o:e??null)},i=>{console.error(`❌ 실시간 데이터 로드 실패: ${n}`,i),r({data:e??null,loading:!1,error:i})}),{subscribe:t,set:r,update:i=>{throw new Error("직접 업데이트는 지원하지 않습니다. Firebase를 통해 데이터를 변경하세요.")},unsubscribe:()=>du(s)}}const Rg=xu;function PC(n){if(!n)return"error.unknown";const e={"auth/invalid-email":"error.auth.invalidEmail","auth/user-disabled":"error.auth.userDisabled","auth/user-not-found":"error.auth.userNotFound","auth/wrong-password":"error.auth.wrongPassword","auth/email-already-in-use":"error.auth.emailAlreadyInUse","auth/weak-password":"error.auth.weakPassword","auth/operation-not-allowed":"error.auth.operationNotAllowed","auth/too-many-requests":"error.auth.tooManyRequests","auth/invalid-verification-code":"error.auth.invalidVerificationCode","auth/invalid-phone-number":"error.auth.invalidPhoneNumber","auth/missing-verification-code":"error.auth.missingVerificationCode","auth/session-expired":"error.auth.sessionExpired","auth/requires-recent-login":"error.auth.requiresRecentLogin","auth/credential-already-in-use":"error.auth.credentialAlreadyInUse"},t={PERMISSION_DENIED:"error.db.permissionDenied","permission-denied":"error.db.permissionDenied","network-error":"error.db.networkError",offline:"error.offline","authentication-required":"error.db.authenticationRequired",disconnected:"error.offline",unavailable:"error.db.networkError"},r={"storage/unauthorized":"error.storage.unauthorized","storage/bucket-not-found":"error.storage.bucketNotFound","storage/invalid-argument":"error.storage.invalidArgument","storage/object-not-found":"error.storage.objectNotFound","storage/retry-limit-exceeded":"error.storage.retryLimitExceeded","storage/quota-exceeded":"error.storage.quotaExceeded","storage/canceled":"error.storage.canceled"};return e[n]?e[n]:t[n]?t[n]:r[n]?r[n]:n.includes("network")||n.includes("offline")?"error.network":n.toLowerCase().includes("permission")?"error.db.permissionDenied":"error.unknown"}function ls(n,e="unknown"){if(!n)return console.error(`[${e}] 에러 객체가 없습니다.`),{key:"error.unknown",code:null,message:"No error object provided",context:e};const t=n;let r=t.code??null;if(!r&&t.message){const i=t.message.match(/\(([^)]+)\)/);i&&i[1]&&(r=i[1])}return console.error(`[${e}] Firebase 에러:`,{code:r,message:t.message,stack:t.stack,originalError:n}),{key:PC(r),code:r,message:t.message||"Unknown error",context:e}}async function RC(n,e,t,r,s){try{const i=Date.now(),o=`${n}-${i}`,a={uid:e,title:r,content:s,author:t,category:n,order:o,createdAt:i,updatedAt:i,likeCount:0,commentCount:0},l=Pt(Tt,"posts");return{success:!0,postId:(await mo(l,a)).key||void 0}}catch(i){const o=ls(i,"createPost");return{success:!1,error:o.key,errorMessage:o.message}}}async function NC(n,e){try{const t=Pt(Tt,`posts/${n}`),r=await rs(t);if(!r.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const s=r.val();if(s.commentCount&&s.commentCount>0)return{success:!1,error:"댓글이달려있어수정불가",errorMessage:"Cannot edit post with comments"};const i={...e,updatedAt:Date.now()};return await wi(t,i),{success:!0}}catch(t){const r=ls(t,"updatePost");return{success:!1,error:r.key,errorMessage:r.message}}}async function LC(n){try{const e=Pt(Tt,`posts/${n}`),t=await rs(e);if(!t.exists())return{success:!1,error:"error.db.objectNotFound",errorMessage:"Post not found"};const r=t.val();return r.commentCount&&r.commentCount>0?{success:!1,error:"댓글이달려있어삭제불가",errorMessage:"Cannot delete post with comments"}:(await EE(e),{success:!0})}catch(e){const t=ls(e,"deletePost");return{success:!1,error:t.key,errorMessage:t.message}}}const Lf=["community","qna","news","market"];function jc(n){let e=n;const t=n.lastIndexOf("-");if(t!==-1&&t<n.length-1){const r=n.substring(t+1);/^\d/.test(r)&&(e=r)}return e.split(",").map(r=>parseInt(r,10))}function Ng(n,e){const t=e.map((r,s)=>s===0?String(r).padStart(5,"0"):s===1?String(r).padStart(4,"0"):String(r).padStart(3,"0")).join(",");return`${n}-${t}`}function DC(){return Array(12).fill(0)}async function $C(n){const{postId:e,userId:t,content:r}=n;try{const s=Date.now(),i=Pt(Tt,"comments"),o=pn(i,fn("order"),Un(`${e}-`),ps(`${e}-z`)),a=await rs(o);let l=0;a.exists()&&a.forEach(k=>{const I=k.val();if(I.depth===1&&I.order){const C=jc(I.order)[0];C!==void 0&&C>l&&(l=C)}});const u=l+1,f=DC();f[0]=u;const m=Ng(e,f),p={postId:e,uid:t,content:r,depth:1,order:m,parentId:null,createdAt:s,updatedAt:s},g=mo(i).key;if(!g)throw new Error("Failed to generate comment ID");const w={};return w[`comments/${g}`]=p,await wi(Pt(Tt),w),{success:!0,commentId:g}}catch(s){const i=ls(s,"createTopLevelComment");return{success:!1,error:i.key,errorMessage:i.message}}}async function qC(n){const{parentCommentId:e,userId:t,content:r}=n;try{const s=Pt(Tt,`comments/${e}`),i=await rs(s);if(!i.exists())return{success:!1,error:"error.comment.parentNotFound",errorMessage:"Parent comment not found"};const o=i.val(),a=o.depth||1,l=o.order||"",u=o.postId,f=a+1;if(f>12)return{success:!1,error:"error.comment.maxDepthExceeded",errorMessage:"Maximum comment depth exceeded (12)"};const m=jc(l),p=Pt(Tt,"comments"),b=pn(p,fn("order"),Un(`${u}-`),ps(`${u}-z`)),g=await rs(b);let w=0;g.exists()&&g.forEach(E=>{const T=E.val();if(T.parentId===e&&T.order){const $=jc(T.order)[f-1];$!==void 0&&$>w&&(w=$)}});const k=w+1,I=[...m];I[f-1]=k;const P=Ng(u,I),C=Date.now(),L={postId:u,uid:t,content:r,depth:f,order:P,parentId:e,createdAt:C,updatedAt:C},q=mo(p).key;if(!q)throw new Error("Failed to generate comment ID");const A={};return A[`comments/${q}`]=L,await wi(Pt(Tt),A),{success:!0,commentId:q}}catch(s){const i=ls(s,"createChildComment");return{success:!1,error:i.key,errorMessage:i.message}}}function OC(n,e){try{const t=Pt(Tt,"comments"),r=pn(t,fn("order"),Un(`${n}-`),ps(`${n}-z`));return qo(r,s=>{if(s.exists()){const i=[];s.forEach(o=>{i.push({commentId:o.key,...o.val()})}),e(i)}else e([])}),()=>{du(t)}}catch(t){return console.error("댓글 조회 실패:",t),e([]),()=>{}}}async function MC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${n}-${r}-${t}`]=1,await wi(Pt(Tt),s),{success:!0}}catch(r){const s=ls(r,"addLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function zC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s={};return s[`likes/${n}-${r}-${t}`]=null,await wi(Pt(Tt),s),{success:!0}}catch(r){const s=ls(r,"removeLike");return{success:!1,error:s.key,errorMessage:s.message}}}async function FC(n,e,t){try{const r=e.startsWith("-")?e.substring(1):e,s=Pt(Tt,`likes/${n}-${r}-${t}`);return(await rs(s)).exists()}catch(r){return console.error("좋아요 상태 확인 실패:",r),!1}}async function Lg(n,e,t){try{const r=await FC(n,e,t);let s;return r?s=await zC(n,e,t):s=await MC(n,e,t),s.success?{success:!0,isLiked:!r}:{success:!1,isLiked:r,error:s.error,errorMessage:s.errorMessage}}catch(r){const s=ls(r,"toggleLike");return{success:!1,isLiked:!1,error:s.key,errorMessage:s.message}}}console.log("SNS Web Components 로드됨 ✅");var UC=R('<div class="gpl-badge svelte-1ubq0t6"> </div>'),jC=R('<div class="hint svelte-1ubq0t6"> </div>'),VC=R('<div class="accordion-content svelte-1ubq0t6"><p class="svelte-1ubq0t6"> </p> <!> <!></div>'),BC=R('<div class="accordion-item svelte-1ubq0t6"><button class="accordion-trigger svelte-1ubq0t6"><span class="accordion-title svelte-1ubq0t6"> </span> <span><!></span></button> <!></div>'),HC=R('<div class="todo-description svelte-1ubq0t6"> </div>'),WC=R('<div class="todo-subitem svelte-1ubq0t6"><span><!></span> <span> </span></div>'),GC=R('<div class="todo-subitems svelte-1ubq0t6"></div>'),KC=R('<div class="todo-item svelte-1ubq0t6"><div class="todo-main svelte-1ubq0t6"><span><!></span> <div class="todo-content svelte-1ubq0t6"><div> </div> <!></div></div> <!></div>'),YC=R('<span class="badge svelte-1ubq0t6"> </span>'),QC=R('<div class="home svelte-1ubq0t6"><div class="hero-card svelte-1ubq0t6"><div class="hero-overlay svelte-1ubq0t6"></div> <div class="hero-content svelte-1ubq0t6"><a class="hero-badge-link svelte-1ubq0t6" href="/dev/history"><span class="hero-badge svelte-1ubq0t6"> </span> <span class="hero-badge-text svelte-1ubq0t6"> </span></a> <h1 class="hero-title svelte-1ubq0t6"> </h1> <p class="hero-description svelte-1ubq0t6"> <a href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer" class="hero-link svelte-1ubq0t6"> </a> </p> <div class="hero-actions svelte-1ubq0t6"><a class="hero-button primary svelte-1ubq0t6" href="https://open.kakao.com/o/gdj4M4Tg" target="_blank" rel="noopener noreferrer">🚀 단톡방 참여하기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/help">📚 프로젝트 가이드 보기</a> <a class="hero-button ghost svelte-1ubq0t6" href="/dev/sed">🧠 신개념 바이브코딩 - SED</a></div></div></div> <section class="techstack-section svelte-1ubq0t6"><div class="techstack-grid svelte-1ubq0t6"><div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon svelte-icon svelte-1ubq0t6">⚡</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon flutter-icon svelte-1ubq0t6">📱</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <div class="techstack-item svelte-1ubq0t6"><div class="techstack-icon firebase-icon svelte-1ubq0t6">🔥</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></div> <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" class="techstack-item svelte-1ubq0t6"><div class="techstack-icon dokplay-icon svelte-1ubq0t6">☁️</div> <h3 class="techstack-name svelte-1ubq0t6"> </h3> <p class="techstack-description svelte-1ubq0t6"> </p></a></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="accordion svelte-1ubq0t6"></div></section> <section class="section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="todo-list svelte-1ubq0t6"></div></section> <section class="section overview-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="overview-content"><p class="overview-text svelte-1ubq0t6"><strong class="svelte-1ubq0t6"> </strong> </p> <div class="badges svelte-1ubq0t6"></div></div></section> <section class="section change-section svelte-1ubq0t6"><h2 class="section-title svelte-1ubq0t6"> </h2> <div class="change-content"><p class="change-description svelte-1ubq0t6"> </p> <p class="change-emphasis svelte-1ubq0t6"> <strong class="change-highlight svelte-1ubq0t6"> </strong> </p> <div class="hint svelte-1ubq0t6"> </div></div></section></div>');const JC={hash:"svelte-1ubq0t6",code:`
  /* 홈 컨테이너 */.home.svelte-1ubq0t6 {max-width:100%;padding:0;}

  /* 히어로 카드 */.hero-card.svelte-1ubq0t6 {position:relative;overflow:hidden;display:grid;gap:1.75rem;max-width:54rem;margin:0 auto 2.5rem;padding:2.25rem 2.5rem;background:linear-gradient(135deg, #f5f3ff 0%, #e0f2fe 100%);border-radius:1.75rem;border:1px solid rgba(99, 102, 241, 0.15);box-shadow:0 25px 50px -12px rgba(59, 130, 246, 0.25);}.hero-card.svelte-1ubq0t6::before,
  .hero-card.svelte-1ubq0t6::after {content:"";position:absolute;border-radius:9999px;filter:blur(45px);opacity:0.45;z-index:0;}.hero-card.svelte-1ubq0t6::before {width:280px;height:280px;top:-120px;right:-80px;background:radial-gradient(
      circle,
      rgba(59, 130, 246, 0.5) 0%,
      rgba(59, 130, 246, 0) 70%
    );}.hero-card.svelte-1ubq0t6::after {width:220px;height:220px;bottom:-120px;left:-60px;background:radial-gradient(
      circle,
      rgba(14, 165, 233, 0.5) 0%,
      rgba(14, 165, 233, 0) 70%
    );}.hero-overlay.svelte-1ubq0t6 {position:absolute;inset:0;background:linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 45%
    );backdrop-filter:blur(6px);z-index:0;}.hero-content.svelte-1ubq0t6 {position:relative;z-index:1;display:grid;gap:0.9rem;}.hero-badge-link.svelte-1ubq0t6 {display:inline-flex;align-items:center;gap:0.5rem;width:fit-content;padding:0.35rem 0.85rem 0.35rem 0.45rem;border-radius:9999px;background:rgba(255, 255, 255, 0.72);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.45);border:1px solid rgba(99, 102, 241, 0.15);text-decoration:none;color:inherit;transition:all 0.25s ease;}.hero-badge-link.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 10px 20px rgba(59, 130, 246, 0.15);}.hero-badge.svelte-1ubq0t6 {display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;border-radius:9999px;background:linear-gradient(135deg, #4338ca 0%, #6366f1 100%);color:#ffffff;font-size:0.75rem;font-weight:700;}.hero-badge-text.svelte-1ubq0t6 {font-size:0.75rem;font-weight:600;color:#3730a3;letter-spacing:0.05em;text-transform:uppercase;}.hero-actions.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.6rem;}.hero-button.svelte-1ubq0t6 {display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.5rem;border-radius:9999px;font-size:0.95rem;font-weight:600;text-decoration:none;transition:transform 0.2s ease,
      box-shadow 0.2s ease;}.hero-button.primary.svelte-1ubq0t6 {color:#ffffff;background:linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);box-shadow:0 15px 30px -10px rgba(79, 70, 229, 0.45);}.hero-button.primary.svelte-1ubq0t6:hover {transform:translateY(-2px);box-shadow:0 18px 32px -12px rgba(99, 102, 241, 0.55);}.hero-button.ghost.svelte-1ubq0t6 {color:#4338ca;background:rgba(255, 255, 255, 0.75);border:1px solid rgba(99, 102, 241, 0.2);box-shadow:0 12px 25px -14px rgba(59, 130, 246, 0.45);}.hero-button.ghost.svelte-1ubq0t6:hover {transform:translateY(-2px);background:rgba(255, 255, 255, 0.92);}

  /* 기술 스택 섹션 */.techstack-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);border:1px solid #d1d5db;padding:1.25rem;margin-bottom:3rem;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);transition:all 0.3s ease;}.techstack-section.svelte-1ubq0t6:hover {box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.techstack-grid.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:flex-start;}.techstack-item.svelte-1ubq0t6 {display:flex;flex-direction:column;align-items:center;text-align:center;padding:0.625rem 0.75rem;background:white;border-radius:0.5rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;border:1px solid #f0f0f0;flex:0 1 auto;min-width:145px;text-decoration:none;color:inherit;}.techstack-item.svelte-1ubq0t6:hover {transform:translateY(-1px);box-shadow:0 3px 6px rgba(0, 0, 0, 0.08);border-color:#e5e7eb;}.techstack-icon.svelte-1ubq0t6 {font-size:1.5rem;margin-bottom:0.3rem;display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);}.techstack-icon.svelte-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);}.techstack-icon.flutter-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);}.techstack-icon.firebase-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);}.techstack-icon.dokplay-icon.svelte-1ubq0t6 {background:linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);}.techstack-name.svelte-1ubq0t6 {font-size:0.825rem;font-weight:700;color:#111827;margin:0 0 0.1rem 0;}.techstack-description.svelte-1ubq0t6 {font-size:0.65rem;color:#6b7280;line-height:1.3;margin:0;}.hero-title.svelte-1ubq0t6 {font-size:2rem;font-weight:800;margin:0;color:#1e1b4b;line-height:1.3;}.hero-description.svelte-1ubq0t6 {font-size:0.95rem;color:#475569;line-height:1.6;margin:0;}.hero-link.svelte-1ubq0t6 {color:#2563eb;text-decoration:none;font-weight:600;}.hero-link.svelte-1ubq0t6:hover {color:#1d4ed8;text-decoration:underline;}

  @media (max-width: 640px) {.hero-card.svelte-1ubq0t6 {max-width:100%;margin:0 0 2rem;padding:1.75rem 1.4rem;gap:1.5rem;}.hero-content.svelte-1ubq0t6 {gap:0.75rem;}.hero-badge-text.svelte-1ubq0t6 {display:none;}.hero-title.svelte-1ubq0t6 {font-size:1.7rem;line-height:1.35;}.hero-description.svelte-1ubq0t6 {font-size:0.95rem;}.hero-actions.svelte-1ubq0t6 {flex-direction:column;align-items:stretch;}.hero-button.svelte-1ubq0t6 {justify-content:center;width:100%;}

  }

  /* 섹션 */.section.svelte-1ubq0t6 {margin-bottom:3rem;padding:2rem;background:white;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);border:1px solid #e5e7eb;transition:all 0.3s ease;}.section.svelte-1ubq0t6:hover {box-shadow:0 8px 16px rgba(0, 0, 0, 0.1);}.section-title.svelte-1ubq0t6 {font-size:1.875rem;font-weight:700;margin:0 0 1.5rem 0;color:#111827;display:flex;align-items:center;gap:0.75rem;}

  /* 아코디언 */.accordion.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.625rem;}.accordion-item.svelte-1ubq0t6 {border:1px solid #e5e7eb;border-radius:0.625rem;overflow:hidden;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);background:white;}.accordion-item.svelte-1ubq0t6:hover {border-color:#d1d5db;box-shadow:0 4px 12px rgba(102, 126, 234, 0.08);transform:translateY(-1px);}.accordion-trigger.svelte-1ubq0t6 {width:100%;display:flex;justify-content:space-between;align-items:center;padding:0.95rem 1.25rem;background:linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);border:none;cursor:pointer;font-size:0.95rem;font-weight:600;color:#111827;text-align:left;transition:all 0.25s ease;}.accordion-trigger.svelte-1ubq0t6:hover {background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);}.accordion-trigger[aria-expanded="true"].svelte-1ubq0t6 {background:linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);}.accordion-title.svelte-1ubq0t6 {flex:1;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.accordion-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);margin-left:0.75rem;}.accordion-icon.open.svelte-1ubq0t6 {transform:rotate(180deg);color:#667eea;}.accordion-content.svelte-1ubq0t6 {padding:0 1.25rem 1.25rem 1.25rem;color:#374151;line-height:1.7;
    animation: svelte-1ubq0t6-slideDown 0.3s ease-out;background:#fafbfc;}

  @keyframes svelte-1ubq0t6-slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
    }
  }.accordion-content.svelte-1ubq0t6 p:where(.svelte-1ubq0t6) {margin:0 0 0.75rem 0;}.gpl-badge.svelte-1ubq0t6 {display:inline-block;margin-top:0.875rem;padding:0.5rem 0.875rem;background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:1px solid #86efac;border-radius:0.5rem;font-size:0.8125rem;font-weight:600;color:#166534;box-shadow:0 2px 4px rgba(34, 197, 94, 0.1);}.hint.svelte-1ubq0t6 {margin-top:0.875rem;padding:0.75rem 1rem;background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border-left:4px solid #667eea;border-radius:0.5rem;font-size:0.8125rem;color:#1e3a8a;line-height:1.6;box-shadow:0 2px 4px rgba(102, 126, 234, 0.08);}

  /* TODO 리스트 */.todo-list.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:1rem;}.todo-item.svelte-1ubq0t6 {display:flex;flex-direction:column;gap:0.5rem;}.todo-main.svelte-1ubq0t6 {display:flex;align-items:flex-start;gap:0.75rem;}.todo-icon.svelte-1ubq0t6 {display:flex;color:#9ca3af;margin-top:0.125rem;flex-shrink:0;}.todo-icon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-content.svelte-1ubq0t6 {flex:1;}.todo-label.svelte-1ubq0t6 {font-size:1rem;font-weight:600;color:#111827;line-height:1.5;}.todo-label.completed.svelte-1ubq0t6 {color:#6b7280;text-decoration:line-through;}.todo-description.svelte-1ubq0t6 {font-size:0.875rem;color:#6b7280;margin-top:0.25rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:2rem;display:flex;flex-direction:column;gap:0.5rem;}.todo-subitem.svelte-1ubq0t6 {display:flex;align-items:center;gap:0.5rem;}.todo-subicon.svelte-1ubq0t6 {display:flex;color:#9ca3af;flex-shrink:0;}.todo-subicon.completed.svelte-1ubq0t6 {color:#10b981;}.todo-subtext.svelte-1ubq0t6 {font-size:0.875rem;color:#374151;}.todo-subtext.completed.svelte-1ubq0t6 {color:#9ca3af;text-decoration:line-through;}

  /* 프로젝트 개요 */.overview-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;}.overview-text.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1.5rem 0;}.overview-text.svelte-1ubq0t6 strong:where(.svelte-1ubq0t6) {color:#3b82f6;font-weight:700;}.badges.svelte-1ubq0t6 {display:flex;flex-wrap:wrap;gap:0.75rem;}.badge.svelte-1ubq0t6 {display:inline-block;padding:0.5rem 1rem;background:white;border:1px solid #93c5fd;border-radius:9999px;font-size:0.875rem;font-weight:500;color:#1e40af;box-shadow:0 2px 4px rgba(59, 130, 246, 0.1);}

  /* AI 변화 섹션 */.change-section.svelte-1ubq0t6 {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:1px solid #fcd34d;}.change-description.svelte-1ubq0t6 {font-size:1.125rem;color:#374151;line-height:1.7;margin:0 0 1rem 0;}.change-emphasis.svelte-1ubq0t6 {font-size:1.125rem;color:#78350f;line-height:1.7;margin:0 0 1rem 0;}.change-highlight.svelte-1ubq0t6 {color:#b45309;font-weight:700;text-decoration:underline;}

  /* 사용자 정보 섹션 */

  /* 반응형 */
  @media (max-width: 768px) {.hero-title.svelte-1ubq0t6 {font-size:2rem;}.section.svelte-1ubq0t6 {padding:1.5rem;}.section-title.svelte-1ubq0t6 {font-size:1.5rem;}.todo-subitems.svelte-1ubq0t6 {margin-left:1.5rem;}.techstack-grid.svelte-1ubq0t6 {justify-content:center;gap:0.5rem;}.techstack-item.svelte-1ubq0t6 {min-width:130px;padding:0.5rem 0.625rem;}.techstack-icon.svelte-1ubq0t6 {width:32px;height:32px;font-size:1.35rem;margin-bottom:0.2rem;}.techstack-name.svelte-1ubq0t6 {font-size:0.75rem;}.techstack-description.svelte-1ubq0t6 {font-size:0.6rem;}
  }

  @media (max-width: 640px) {.hero-title.svelte-1ubq0t6 {font-size:1.75rem;}.hero-description.svelte-1ubq0t6 {font-size:1rem;}.section.svelte-1ubq0t6 {padding:1rem;}.section-title.svelte-1ubq0t6 {font-size:1.25rem;}.accordion-trigger.svelte-1ubq0t6 {padding:0.875rem 1rem;font-size:0.9375rem;}.accordion-content.svelte-1ubq0t6 {padding:0 1rem 1rem 1rem;font-size:0.9375rem;}.badges.svelte-1ubq0t6 {gap:0.5rem;}.badge.svelte-1ubq0t6 {font-size:0.8125rem;padding:0.375rem 0.75rem;}
  }`};function Dg(n,e){dt(e,!0),ct(n,JC);const t=()=>lt(zt,"$t",r),[r,s]=Nt();let i=ne(null);function o(we){y(i,v(i)===we?null:we,!0)}const a=[{id:"item1",titleKey:"home.aiTruth.item1.title",contentKey:"home.aiTruth.item1.content",hintKey:null},{id:"item2",titleKey:"home.aiTruth.item2.title",contentKey:"home.aiTruth.item2.content",hintKey:"home.aiTruth.item2.hint"},{id:"item3",titleKey:"home.aiTruth.item3.title",contentKey:"home.aiTruth.item3.content",hintKey:"home.aiTruth.item3.hint",showGpl:!0}],l=[{labelKey:"home.todo.item1.label",descriptionKey:"home.todo.item1.description",completed:!0,subitems:[]},{labelKey:"home.todo.item2.label",descriptionKey:"home.todo.item2.description",completed:!0,subitems:[]},{labelKey:"home.todo.item3.label",descriptionKey:"home.todo.item3.description",completed:!0,subitems:[{key:"home.todo.item3.subitem1",completed:!0},{key:"home.todo.item3.subitem2",completed:!0}]},{labelKey:"home.todo.item4.label",descriptionKey:null,completed:!1,subitems:[]},{labelKey:"home.todo.item5.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item5.subitem1",completed:!1},{key:"home.todo.item5.subitem2",completed:!1},{key:"home.todo.item5.subitem3",completed:!1},{key:"home.todo.item5.subitem4",completed:!1}]},{labelKey:"home.todo.item6.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item6.subitem1",completed:!1},{key:"home.todo.item6.subitem2",completed:!1}]},{labelKey:"home.todo.item7.label",descriptionKey:null,completed:!1,subitems:[{key:"home.todo.item7.subitem1",completed:!1}]},{labelKey:"home.todo.item8.label",descriptionKey:"home.todo.item8.description",completed:!1,subitems:[{key:"home.todo.item8.subitem1",completed:!1},{key:"home.todo.item8.subitem2",completed:!1},{key:"home.todo.item8.subitem3",completed:!1},{key:"home.todo.item8.subitem4",completed:!1}]}],u=["home.overview.badge1","home.overview.badge2","home.overview.badge3","home.overview.badge4"];var f=QC(),m=d(f),p=h(d(m),2),b=d(p),g=d(b),w=d(g);c(g);var k=h(g,2),I=d(k,!0);c(k),c(b);var P=h(b,2),C=d(P,!0);c(P);var L=h(P,2),D=d(L),q=h(D),A=d(q,!0);c(q);var E=h(q);c(L),At(2),c(p),c(m);var T=h(m,2),N=d(T),$=d(N),j=h(d($),2),K=d(j,!0);c(j);var ee=h(j,2),W=d(ee,!0);c(ee),c($);var Z=h($,2),ce=h(d(Z),2),ae=d(ce,!0);c(ce);var ie=h(ce,2),H=d(ie,!0);c(ie),c(Z);var Y=h(Z,2),J=h(d(Y),2),te=d(J,!0);c(J);var ue=h(J,2),U=d(ue,!0);c(ue),c(Y);var S=h(Y,2),M=h(d(S),2),B=d(M,!0);c(M);var O=h(M,2),Q=d(O,!0);c(O),c(S),c(N),c(T);var F=h(T,2),se=d(F),oe=d(se,!0);c(se);var Ee=h(se,2);Zt(Ee,21,()=>a,pr,(we,Ce)=>{var De=BC(),$e=d(De);$e.__click=()=>o(v(Ce).id);var V=d($e),he=d(V,!0);c(V);var ke=h(V,2);let nt;var Xe=d(ke);gu(Xe,{size:20}),c(ke),c($e);var Ze=h($e,2);{var ot=et=>{var rt=VC(),gt=d(rt),Ft=d(gt,!0);c(gt);var Dt=h(gt,2);{var Bt=Je=>{var xt=UC(),un=d(xt,!0);c(xt),z(rn=>_(un,rn),[()=>t()("home.aiTruth.item3.gpl")]),x(Je,xt)};G(Dt,Je=>{v(Ce).showGpl&&Je(Bt)})}var Ne=h(Dt,2);{var Ge=Je=>{var xt=jC(),un=d(xt,!0);c(xt),z(rn=>_(un,rn),[()=>t()(v(Ce).hintKey)]),x(Je,xt)};G(Ne,Je=>{v(Ce).hintKey&&Je(Ge)})}c(rt),z(Je=>_(Ft,Je),[()=>t()(v(Ce).contentKey)]),x(et,rt)};G(Ze,et=>{v(i)===v(Ce).id&&et(ot)})}c(De),z(et=>{Ae($e,"aria-expanded",v(i)===v(Ce).id),_(he,et),nt=sn(ke,1,"accordion-icon svelte-1ubq0t6",null,nt,{open:v(i)===v(Ce).id})},[()=>t()(v(Ce).titleKey)]),x(we,De)}),c(Ee),c(F);var re=h(F,2),be=d(re),ye=d(be,!0);c(be);var Pe=h(be,2);Zt(Pe,21,()=>l,pr,(we,Ce)=>{var De=KC(),$e=d(De),V=d($e);let he;var ke=d(V);{var nt=Ne=>{Na(Ne,{size:20})},Xe=Ne=>{Mc(Ne,{size:20})};G(ke,Ne=>{v(Ce).completed?Ne(nt):Ne(Xe,!1)})}c(V);var Ze=h(V,2),ot=d(Ze);let et;var rt=d(ot,!0);c(ot);var gt=h(ot,2);{var Ft=Ne=>{var Ge=HC(),Je=d(Ge,!0);c(Ge),z(xt=>_(Je,xt),[()=>t()(v(Ce).descriptionKey)]),x(Ne,Ge)};G(gt,Ne=>{v(Ce).descriptionKey&&Ne(Ft)})}c(Ze),c($e);var Dt=h($e,2);{var Bt=Ne=>{var Ge=GC();Zt(Ge,21,()=>v(Ce).subitems,pr,(Je,xt)=>{var un=WC(),rn=d(un);let Xn;var yi=d(rn);{var Oo=Fn=>{Na(Fn,{size:16})},xi=Fn=>{Mc(Fn,{size:16})};G(yi,Fn=>{v(xt).completed?Fn(Oo):Fn(xi,!1)})}c(rn);var qs=h(rn,2);let Mo;var ki=d(qs,!0);c(qs),c(un),z(Fn=>{Xn=sn(rn,1,"todo-subicon svelte-1ubq0t6",null,Xn,{completed:v(xt).completed}),Mo=sn(qs,1,"todo-subtext svelte-1ubq0t6",null,Mo,{completed:v(xt).completed}),_(ki,Fn)},[()=>t()(v(xt).key)]),x(Je,un)}),c(Ge),x(Ne,Ge)};G(Dt,Ne=>{v(Ce).subitems.length>0&&Ne(Bt)})}c(De),z(Ne=>{he=sn(V,1,"todo-icon svelte-1ubq0t6",null,he,{completed:v(Ce).completed}),et=sn(ot,1,"todo-label svelte-1ubq0t6",null,et,{completed:v(Ce).completed}),_(rt,Ne)},[()=>t()(v(Ce).labelKey)]),x(we,De)}),c(Pe),c(re);var Le=h(re,2),ze=d(Le),Oe=d(ze,!0);c(ze);var We=h(ze,2),Ye=d(We),tt=d(Ye),Ue=d(tt,!0);c(tt);var st=h(tt,1,!0);c(Ye);var Me=h(Ye,2);Zt(Me,21,()=>u,pr,(we,Ce)=>{var De=YC(),$e=d(De,!0);c(De),z(V=>_($e,V),[()=>t()(v(Ce))]),x(we,De)}),c(Me),c(We),c(Le);var _e=h(Le,2),ve=d(_e),Te=d(ve,!0);c(ve);var Re=h(ve,2),it=d(Re),St=d(it,!0);c(it);var kt=h(it,2),pt=d(kt),Ut=h(pt),Vt=d(Ut,!0);c(Ut);var nn=h(Ut,1,!0);c(kt);var fe=h(kt,2),ge=d(fe,!0);c(fe),c(Re),c(_e),c(f),z((we,Ce,De,$e,V,he,ke,nt,Xe,Ze,ot,et,rt,gt,Ft,Dt,Bt,Ne,Ge,Je,xt,un,rn,Xn,yi)=>{_(w,`✨ ${we??""}`),_(I,Ce),_(C,De),_(D,`${$e??""} `),_(A,V),_(E,` ${he??""}`),_(K,ke),_(W,nt),_(ae,Xe),_(H,Ze),_(te,ot),_(U,et),_(B,rt),_(Q,gt),_(oe,Ft),_(ye,Dt),_(Oe,Bt),_(Ue,Ne),_(st,Ge),_(Te,Je),_(St,xt),_(pt,`${un??""} `),_(Vt,rn),_(nn,Xn),_(ge,yi)},[()=>t()("home.vibeBanner"),()=>t()("home.overview.badge3"),()=>t()("home.title"),()=>t()("home.description.part1"),()=>t()("home.description.linkText"),()=>t()("home.description.part2"),()=>t()("home.techStack.svelte"),()=>t()("home.techStack.svelteDesc"),()=>t()("home.techStack.flutter"),()=>t()("home.techStack.flutterDesc"),()=>t()("home.techStack.firebase"),()=>t()("home.techStack.firebaseDesc"),()=>t()("home.techStack.dokplay"),()=>t()("home.techStack.dokplayDesc"),()=>t()("home.aiTruth.title"),()=>t()("home.todo.title"),()=>t()("home.overview.title"),()=>t()("home.overview.brand"),()=>t()("home.overview.description"),()=>t()("home.aiChange.title"),()=>t()("home.aiChange.description"),()=>t()("home.aiChange.emphasis"),()=>t()("home.aiChange.highlight"),()=>t()("home.aiChange.conclusion"),()=>t()("home.aiChange.hint")]),x(n,f),ut(),s()}Ct(["click"]);pe(Dg,{},[],[],!0);var XC=R('<div class="login-card svelte-1mz53xx"><h1 class="login-title svelte-1mz53xx"> </h1> <p class="login-description svelte-1mz53xx"> </p> <phone-login></phone-login></div>',2),ZC=R('<div class="welcome-card svelte-1mz53xx"><h2 class="welcome-title svelte-1mz53xx"> </h2> <p class="welcome-message svelte-1mz53xx"> </p> <a href="/" class="home-button svelte-1mz53xx"> </a></div>'),eT=R('<div class="login-page svelte-1mz53xx"><div class="login-container svelte-1mz53xx"><!></div></div>');const tT={hash:"svelte-1mz53xx",code:`\r
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
  }`};function $g(n,e){dt(e,!1),ct(n,tT);const t=()=>lt(zt,"$t",s),r=()=>lt(cl,"$user",s),[s,i]=Nt();function o(b){console.log("Login successful:",b.detail),alert(t()("로그인성공알림",{phone:b.detail.phoneNumber})),window.location.href="/"}function a(b){console.error("Login error:",b.detail),alert(t()("로그인실패",{error:b.detail.error}))}wn();var l=eT(),u=d(l),f=d(u);{var m=b=>{var g=XC(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var C=h(I,2);c(g),z((L,D)=>{_(k,L),_(P,D)},[()=>t()("로그인"),()=>t()("전화번호로로그인")]),Jr("login-success",C,o),Jr("login-error",C,a),x(b,g)},p=b=>{var g=ZC(),w=d(g),k=d(w,!0);c(w);var I=h(w,2),P=d(I,!0);c(I);var C=h(I,2),L=d(C,!0);c(C),c(g),z((D,q,A)=>{_(k,D),_(P,q),_(L,A)},[()=>t()("웰컴"),()=>t()("로그인하셨습니다",{phone:r().phoneNumber}),()=>t()("홈으로이동")]),x(b,g)};G(f,b=>{r()?b(p,!1):b(m)})}c(u),c(l),x(n,l),ut(),i()}pe($g,{},[],[],!0);var nT=R('<button class="menu-item svelte-163o8b2"> </button>'),rT=R('<div class="menu-container svelte-163o8b2"><div class="menu-card svelte-163o8b2"><p class="menu-description svelte-163o8b2"> </p> <nav class="menu-list svelte-163o8b2"></nav></div></div>');const sT={hash:"svelte-163o8b2",code:`\r
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
  }`};function qg(n,e){dt(e,!0),ct(n,sT);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("메뉴"))});let i=_s(()=>[{label:t()("홈"),path:"/"},{label:t()("로그인"),path:"/user/login"},{label:t()("사용자프로필"),path:"/user/profile"},{label:t()("게시물목록"),path:"/post/list"},{label:t()("게시물상세예시"),path:"/post/detail/123"},{label:t()("채팅목록"),path:"/chat/list"},{label:t()("설정"),path:"/settings"},{label:t()("정보"),path:"/about"},{label:t()("도움말"),path:"/help"},{label:t()("이용약관"),path:"/terms"},{label:t()("개인정보"),path:"/privacy"},{label:t()("문의하기"),path:"/contact"},{label:t()("개발일지"),path:"/dev/history"},{label:t()("바이브코딩SED"),path:"/dev/sed"},{label:t()("테스트게시글생성"),path:"/dev/generate-posts"}]);var o=rT(),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2);Zt(f,21,()=>v(i),m=>m.path,(m,p)=>{var b=nT();b.__click=()=>Sn(v(p).path);var g=d(b,!0);c(b),z(()=>_(g,v(p).label)),x(m,b)}),c(f),c(a),c(o),z(m=>_(u,m),[()=>t()("페이지선택")]),x(n,o),ut(),s()}Ct(["click"]);pe(qg,{},[],[],!0);var iT=R('<div class="photo-image svelte-17u94r3" aria-hidden="true"></div>'),oT=R('<div class="photo-placeholder svelte-17u94r3"><span class="placeholder-icon svelte-17u94r3">📷</span> <span class="placeholder-text svelte-17u94r3"> </span></div>'),aT=R('<button type="button" class="photo-remove-button svelte-17u94r3"><!></button>'),lT=R('<p class="upload-status svelte-17u94r3"> </p>'),cT=R('<div class="message-box success-message svelte-17u94r3"> </div>'),dT=R('<div class="message-box error-message svelte-17u94r3"> </div>'),uT=R('<div class="profile-container svelte-17u94r3"><form class="profile-form svelte-17u94r3"><div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3"> </label> <div class="photo-area svelte-17u94r3"><input type="file" accept="image/*" style="display: none;"/> <div class="photo-wrapper svelte-17u94r3"><button type="button" class="photo-trigger svelte-17u94r3"><!></button> <!> <span class="camera-badge svelte-17u94r3" aria-hidden="true"><!></span></div> <p class="photo-instruction svelte-17u94r3"> </p> <!></div></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="displayName"> </label> <input type="text" id="displayName" class="form-input svelte-17u94r3" maxlength="50" required/> <p class="form-helper svelte-17u94r3"> </p></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="gender"> </label> <select id="gender" class="form-select svelte-17u94r3"><option> </option><option> </option><option> </option><option> </option></select></div> <div class="form-section svelte-17u94r3"><label class="form-label svelte-17u94r3" for="dateOfBirth"> </label> <input type="date" id="dateOfBirth" class="form-input svelte-17u94r3"/> <p class="form-helper svelte-17u94r3"> </p></div> <!> <!> <div class="form-buttons svelte-17u94r3"><button type="submit" class="btn-primary btn-large svelte-17u94r3"> </button> <button type="button" class="btn-secondary btn-large svelte-17u94r3"> </button></div></form></div>');const hT={hash:"svelte-17u94r3",code:`
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
  }`};function Og(n,e){dt(e,!0),ct(n,hT);const t=()=>lt(zt,"$t",r),[r,s]=Nt();let i=ne(an({displayName:"",gender:"",dateOfBirth:"",photoUrl:""})),o=ne(null),a=ne(null),l=ne(!1),u=ne(!1),f=ne(null),m=ne(null),p=null,b=null;function g(fe){y(f,fe,!0),p&&clearTimeout(p),p=setTimeout(()=>{y(f,null),p=null},3e3)}function w(fe){y(m,fe,!0),b&&clearTimeout(b),b=setTimeout(()=>{y(m,null),b=null},5e3)}Np(()=>{p&&clearTimeout(p),b&&clearTimeout(b)}),Kt(()=>{Dn(t()("프로필수정"))}),ni(()=>{if(Se.data){v(i).displayName=Se.data.displayName||"",v(i).gender=Se.data.gender||"",v(i).dateOfBirth=Se.data.dateOfBirth||"";const fe=Se.data.photoUrl??Se.data.photoURL??"";v(i).photoUrl=fe,y(o,fe||null,!0)}});function k(){v(u)||v(a)?.click()}async function I(fe){const we=fe.currentTarget?.files?.[0];if(!we)return;if(v(u)){w(t()("사진작업진행중"));return}if(!Se.isAuthenticated||!Se.uid){w(t()("로그인필요"));return}if(!we.type.startsWith("image/")){w(t()("이미지파일만가능"));return}if(we.size>5*1024*1024){w(t()("파일크기5MB제한"));return}const Ce=v(o),De=v(i).photoUrl,$e=new FileReader;$e.onload=V=>{const he=V.target?.result;typeof he=="string"&&y(o,he,!0)},$e.readAsDataURL(we);try{await C(we)}catch{y(o,Ce,!0),v(i).photoUrl=De,v(a)&&(v(a).value="")}}async function P(){if(v(u))return;if(!Se.isAuthenticated||!Se.uid){w(t()("로그인필요"));return}const fe=v(o),ge=v(i).photoUrl;y(o,null),v(i).photoUrl="",v(a)&&(v(a).value="");try{y(u,!0),await Se.updateProfile({photoUrl:null}),g(t()("프로필사진제거완료"))}catch(we){console.error("프로필 사진 제거 오류:",we),w(t()("사진제거실패",{error:we.message||t()("알수없는오류")})),y(o,fe,!0),v(i).photoUrl=ge}finally{y(u,!1)}}async function C(fe,{showSuccess:ge=!0}={}){if(!Se.isAuthenticated||!Se.uid)throw w(t()("로그인필요")),new Error("User is not authenticated");try{y(u,!0);const we=fe.name.split(".").pop()?.toLowerCase()||"jpg",Ce=`profile_${Se.uid}_${Date.now()}.${we}`,De=ZI(s5,`users/${Se.uid}/profile/${Ce}`),$e=await JI(De,fe),V=await XI($e.ref);return v(i).photoUrl=V,y(o,V,!0),await Se.updateProfile({photoUrl:V}),ge&&g(t()("프로필사진저장완료")),V}catch(we){throw console.error("프로필 사진 업로드 오류:",we),w(t()("사진저장실패",{error:we.message||t()("알수없는오류")})),we}finally{y(u,!1),v(a)&&(v(a).value="")}}async function L(fe){fe.preventDefault(),y(l,!0),y(m,null),y(f,null);try{let ge=v(i).photoUrl;const we=v(a)?.files?.[0];if(we)try{ge=await C(we,{showSuccess:!1})}catch{y(l,!1);return}const Ce={displayName:v(i).displayName,gender:v(i).gender,dateOfBirth:v(i).dateOfBirth,photoUrl:ge||null};await Se.updateProfile(Ce),g(t()("프로필업데이트완료")),console.log("프로필 업데이트 완료:",Ce)}catch(ge){console.error("프로필 업데이트 오류:",ge),w(t()("프로필업데이트실패",{error:ge.message||t()("알수없는오류")}))}finally{y(l,!1)}}function D(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}var q=uT(),A=d(q),E=d(A),T=d(E),N=d(T,!0);c(T);var $=h(T,2),j=d($);j.__change=I,ad(j,fe=>y(a,fe),()=>v(a));var K=h(j,2),ee=d(K);ee.__click=k;var W=d(ee);{var Z=fe=>{var ge=iT();z(()=>Ba(ge,`background-image: url("${v(o)}")`)),x(fe,ge)},ce=fe=>{var ge=oT(),we=h(d(ge),2),Ce=d(we,!0);c(we),c(ge),z(De=>_(Ce,De),[()=>t()("사진없음")]),x(fe,ge)};G(W,fe=>{v(o)?fe(Z):fe(ce,!1)})}c(ee);var ae=h(ee,2);{var ie=fe=>{var ge=aT();ge.__click=P;var we=d(ge);_u(we,{size:18,"stroke-width":3}),c(ge),z(Ce=>{ge.disabled=v(l)||v(u),Ae(ge,"aria-label",Ce)},[()=>t()("프로필사진제거")]),x(fe,ge)};G(ae,fe=>{v(o)&&fe(ie)})}var H=h(ae,2),Y=d(H);fg(Y,{size:20,"stroke-width":2}),c(H),c(K);var J=h(K,2),te=d(J,!0);c(J);var ue=h(J,2);{var U=fe=>{var ge=lT(),we=d(ge,!0);c(ge),z(Ce=>_(we,Ce),[()=>t()("사진저장중")]),x(fe,ge)};G(ue,fe=>{v(u)&&fe(U)})}c($),c(E);var S=h(E,2),M=d(S),B=d(M,!0);c(M);var O=h(M,2);ws(O);var Q=h(O,2),F=d(Q,!0);c(Q),c(S);var se=h(S,2),oe=d(se),Ee=d(oe,!0);c(oe);var re=h(oe,2),be=d(re),ye=d(be,!0);c(be),be.value=be.__value="";var Pe=h(be),Le=d(Pe,!0);c(Pe),Pe.value=Pe.__value="male";var ze=h(Pe),Oe=d(ze,!0);c(ze),ze.value=ze.__value="female";var We=h(ze),Ye=d(We,!0);c(We),We.value=We.__value="other",c(re),c(se);var tt=h(se,2),Ue=d(tt),st=d(Ue,!0);c(Ue);var Me=h(Ue,2);ws(Me);var _e=h(Me,2),ve=d(_e,!0);c(_e),c(tt);var Te=h(tt,2);{var Re=fe=>{var ge=cT(),we=d(ge);c(ge),z(()=>_(we,`✅ ${v(f)??""}`)),x(fe,ge)};G(Te,fe=>{v(f)&&fe(Re)})}var it=h(Te,2);{var St=fe=>{var ge=dT(),we=d(ge);c(ge),z(()=>_(we,`⚠️ ${v(m)??""}`)),x(fe,ge)};G(it,fe=>{v(m)&&fe(St)})}var kt=h(it,2),pt=d(kt),Ut=d(pt,!0);c(pt);var Vt=h(pt,2);Vt.__click=D;var nn=d(Vt,!0);c(Vt),c(kt),c(A),c(q),z((fe,ge,we,Ce,De,$e,V,he,ke,nt,Xe,Ze,ot,et,rt,gt)=>{_(N,fe),Ae(j,"aria-label",ge),ee.disabled=v(l)||v(u),Ae(ee,"aria-label",we),_(te,Ce),_(B,De),Ae(O,"placeholder",$e),O.disabled=v(l),_(F,V),_(Ee,he),re.disabled=v(l),_(ye,ke),_(Le,nt),_(Oe,Xe),_(Ye,Ze),_(st,ot),Me.disabled=v(l),_(ve,et),pt.disabled=v(l)||v(u)||!Se.isAuthenticated,_(Ut,rt),Vt.disabled=v(l),_(nn,gt)},[()=>t()("프로필사진"),()=>t()("프로필사진선택"),()=>v(o)?t()("프로필사진변경"):t()("프로필사진추가"),()=>t()("프로필사진클릭변경"),()=>t()("닉네임"),()=>t()("닉네임입력"),()=>t()("닉네임최대50자"),()=>t()("성별"),()=>t()("선택하지않음"),()=>t()("남자"),()=>t()("여자"),()=>t()("기타"),()=>t()("생년월일"),()=>t()("생년월일형식"),()=>v(l)?t()("저장중"):t()("저장"),()=>t()("취소")]),Jr("submit",A,L),rr(O,()=>v(i).displayName,fe=>v(i).displayName=fe),id(re,()=>v(i).gender,fe=>v(i).gender=fe),rr(Me,()=>v(i).dateOfBirth,fe=>v(i).dateOfBirth=fe),x(n,q),ut(),s()}Ct(["change","click"]);pe(Og,{},[],[],!0);var fT=R('<div class="loading-spinner svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">로딩 중...</p></div>'),pT=R('<div class="loading-container svelte-a4suww"><!></div>'),vT=R('<div class="error-message svelte-a4suww"><p class="svelte-a4suww">⚠️ 에러가 발생했습니다</p> <p class="error-detail svelte-a4suww"> </p> <button class="retry-button svelte-a4suww">다시 시도</button></div>'),mT=R('<div class="error-container svelte-a4suww"><!></div>'),gT=R('<div class="empty-message svelte-a4suww"><p class="svelte-a4suww">📭 표시할 데이터가 없습니다</p></div>'),bT=R('<div class="empty-container svelte-a4suww"><!></div>'),_T=R('<div class="default-item svelte-a4suww"><pre class="svelte-a4suww"> </pre></div>'),wT=R('<div class="item-wrapper svelte-a4suww"><!></div>'),yT=R('<div class="loading-spinner small svelte-a4suww"><div class="spinner svelte-a4suww"></div> <p class="svelte-a4suww">더 불러오는 중...</p></div>'),xT=R('<div class="loading-more svelte-a4suww"><!></div>'),kT=R('<p class="no-more-text svelte-a4suww">더 이상 데이터가 없습니다</p>'),ET=R('<div class="no-more svelte-a4suww"><!></div>'),IT=R('<div class="items-container svelte-a4suww"><!> <!> <!></div>'),CT=R('<div class="database-list-view svelte-a4suww"><!></div>');const TT={hash:"svelte-a4suww",code:`\r
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
  /* 에러 메시지 */.error-message.svelte-a4suww {text-align:center;color:#dc2626;}.error-message.svelte-a4suww p:where(.svelte-a4suww) {margin:0 0 0.5rem 0;}.error-detail.svelte-a4suww {color:#6b7280;font-size:0.875rem;}.retry-button.svelte-a4suww {margin-top:1rem;padding:0.5rem 1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:0.875rem;cursor:pointer;transition:background-color 0.2s;}.retry-button.svelte-a4suww:hover {background-color:#2563eb;}.retry-button.svelte-a4suww:active {background-color:#1d4ed8;}`};function ku(n,e){dt(e,!0),ct(n,TT);let t=je(e,"path",7,""),r=je(e,"pageSize",7,10),s=je(e,"orderBy",7,"createdAt"),i=je(e,"sortPrefix",7,""),o=je(e,"threshold",7,300),a=je(e,"reverse",7,!1),l=je(e,"item",7),u=je(e,"loading",7),f=je(e,"empty",7),m=je(e,"error",7),p=je(e,"loadingMore",7),b=je(e,"noMore",7),g=ne(an([])),w=ne(!1),k=ne(!0),I=ne(!0),P=ne(null),C=ne(null),L=ne(0),D=ne(null),q=ne(null),A=new Map,E=new Map,T=null,N=ne(!1),$=null;ni(()=>(t()&&Tt&&Z(),()=>{console.log("DatabaseListView: Cleaning up listeners"),T&&(T(),T=null),$&&($(),$=null),A.forEach(S=>{S()}),A.clear(),console.log("DatabaseListView: All listeners cleaned up")})),ni(()=>{if(v(q))return v(q).addEventListener("scroll",ae),window.addEventListener("scroll",ie),()=>{v(q)?.removeEventListener("scroll",ae),window.removeEventListener("scroll",ie)}});function j(S,M){if(S.length===0)return null;const B=S[S.length-1];if(!B)return null;const O=B.data[M];return O!=null&&O!==""?(console.log(`DatabaseListView: Using cursor from '${M}':`,{value:O,key:B.key}),{value:O,key:B.key}):(console.error(`DatabaseListView: CRITICAL ERROR - Field '${M}' not found in last item (key: ${B.key}).`,"This will prevent pagination from working correctly.",`Please ensure all items in '${t()}' have the '${M}' field.`,"Item data:",B.data),y(D,`데이터 정렬 필드 '${M}'가 누락되었습니다. 데이터베이스 구조를 확인해주세요.`),null)}function K(S,M){const B=`${S}`;if(A.has(B))return;const O=Pt(Tt,`${t()}/${S}`),Q=qo(O,F=>{if(F.exists()){const se=F.val();v(g)[M]={key:S,data:se},y(g,[...v(g)],!0),console.log(`DatabaseListView: Item updated ${S}`,se)}},F=>{console.error(`DatabaseListView: Error listening to item ${S}`,F)});A.set(B,Q)}function ee(){T&&(T(),T=null),console.log("DatabaseListView: Setting up child_added listener for",t()),y(N,!1);const S=Pt(Tt,t());let M;i()?(M=pn(S,fn(s()),Un(i()),ps(i()+"")),console.log("DatabaseListView: child_added listener with sortPrefix:",i())):(M=pn(S,fn(s()),Un(!1)),console.log("DatabaseListView: child_added listener with startAt(false) to filter null/undefined")),T=IE(M,B=>{if(!v(N))return;const O=B.key,Q=B.val();if(!O){console.warn("DatabaseListView: Snapshot key is null, skipping");return}if(v(g).some(oe=>oe.key===O)){console.log("DatabaseListView: Child already exists, skipping:",O);return}console.log("DatabaseListView: New child added:",O,Q);const se={key:O,data:Q};if(a())y(g,[se,...v(g)],!0),console.log("DatabaseListView: Added new item to the beginning (reverse mode)"),K(O,0);else{const oe=v(g).length;y(g,[...v(g),se],!0),console.log("DatabaseListView: Added new item to the end (normal mode)"),K(O,oe)}},B=>{console.error("DatabaseListView: Error in child_added listener",B)}),setTimeout(()=>{y(N,!0),console.log("DatabaseListView: child_added listener is now ready to accept new children")},1e3)}function W(){$&&($(),$=null),console.log("DatabaseListView: Setting up child_removed listener for",t());const S=Pt(Tt,t());let M;i()?(M=pn(S,fn(s()),Un(i()),ps(i()+"")),console.log("DatabaseListView: child_removed listener with sortPrefix:",i())):(M=pn(S,fn(s()),Un(!1)),console.log("DatabaseListView: child_removed listener with startAt(false)")),$=CE(M,B=>{const O=B.key;if(!O){console.warn("DatabaseListView: Removed snapshot key is null, skipping");return}console.log("DatabaseListView: Child removed:",O);const Q=v(g).findIndex(F=>F.key===O);if(Q!==-1){y(g,v(g).filter(oe=>oe.key!==O),!0),console.log("DatabaseListView: Removed item from list:",O,"(was at index",Q,")");const F=`${O}`,se=A.get(F);se&&(se(),A.delete(F),console.log("DatabaseListView: Unsubscribed from removed item:",O))}else console.log("DatabaseListView: Removed item not found in current list:",O)},B=>{console.error("DatabaseListView: Error in child_removed listener",B)})}async function Z(){console.log("DatabaseListView: Loading initial data from",t(),"(reverse:",a(),")"),y(k,!0),y(D,null),y(g,[],!0),E.clear(),A.forEach(S=>S()),A.clear(),T&&(T(),T=null),y(N,!1),$&&($(),$=null),y(P,null),y(C,null),y(I,!0),y(L,0);try{const S=Pt(Tt,t());let M;a()?i()?(M=pn(S,fn(s()),Un(i()),ps(i()+""),Ho(r()+1)),console.log("DatabaseListView: Using limitToLast with sortPrefix:",i())):(M=pn(S,fn(s()),Un(!1),Ho(r()+1)),console.log("DatabaseListView: Using limitToLast with startAt(false) to filter null/undefined")):i()?(M=pn(S,fn(s()),Un(i()),ps(i()+""),Bo(r()+1)),console.log("DatabaseListView: Using limitToFirst with sortPrefix:",i())):(M=pn(S,fn(s()),Un(!1),Bo(r()+1)),console.log("DatabaseListView: Using limitToFirst with startAt(false) to filter null/undefined"));const B=await rs(M);if(B.exists()){const O=[],Q=B.val();if(Object.entries(Q).forEach(([F,se])=>{O.push({key:F,data:se})}),console.log(`DatabaseListView: Initial query returned ${O.length} items from Firebase`),console.log("DatabaseListView: Items orderBy values:",O.map(F=>({key:F.key,[s()]:F.data[s()]}))),a()&&(O.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)")),O.length>r()){y(I,!0),y(g,O.slice(0,r()),!0);const F=j(v(g),s());F?(y(P,F.value,!0),y(C,F.key,!0),console.log("DatabaseListView: Next page cursor set:",{lastLoadedValue:v(P),lastLoadedKey:v(C)})):y(I,!1)}else if(y(I,!1),y(g,O,!0),v(g).length>0){const F=j(v(g),s());F&&(y(P,F.value,!0),y(C,F.key,!0),console.log("DatabaseListView: Last cursor set:",{lastLoadedValue:v(P),lastLoadedKey:v(C)}))}E.set(0,v(g)),v(g).forEach((F,se)=>{K(F.key,se)}),console.log(`DatabaseListView: Page ${v(L)} - Loaded ${v(g).length} items, hasMore: ${v(I)}`)}else console.log("DatabaseListView: No data found"),y(g,[],!0),y(I,!1)}catch(S){console.error("DatabaseListView: Load error",S),y(D,S instanceof Error?S.message:String(S),!0)}finally{y(k,!1),ee(),W()}}async function ce(){if(v(w)||!v(I)){console.log("DatabaseListView: Cannot load more - loading:",v(w),"hasMore:",v(I));return}tc(L),console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${v(L)}`),console.log("DatabaseListView: Current cursor - lastLoadedValue:",v(P),"lastLoadedKey:",v(C)),y(w,!0),y(D,null);try{if(v(P)==null){console.log("DatabaseListView: No lastLoadedValue (null or undefined), cannot load more"),y(I,!1),y(w,!1);return}const S=Pt(Tt,t());let M;a()?i()?(M=pn(S,fn(s()),Cf(v(P)),Ho(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination with sortPrefix (client-side filtering)")):(M=pn(S,fn(s()),Cf(v(P)),Ho(r()+1)),console.log("DatabaseListView: Using endBefore + limitToLast for reverse pagination (no startAt needed)")):i()?(M=pn(S,fn(s()),Tf(v(P)),Bo(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination with sortPrefix (client-side filtering)")):(M=pn(S,fn(s()),Tf(v(P)),Bo(r()+1)),console.log("DatabaseListView: Using startAfter + limitToFirst for normal pagination (no startAt needed)"));const B=await rs(M);if(B.exists()){const O=[],Q=B.val();Object.entries(Q).forEach(([re,be])=>{O.push({key:re,data:be})}),console.log(`DatabaseListView: Page ${v(L)} - Query returned ${O.length} items from Firebase`),console.log(`DatabaseListView: Page ${v(L)} - Items orderBy values:`,O.map(re=>({key:re.key,[s()]:re.data[s()]})));let F=O;i()&&(F=O.filter(re=>{const be=re.data[s()];return typeof be=="string"?be.startsWith(i()):!1}),console.log(`DatabaseListView: Filtered ${O.length} items to ${F.length} items with sortPrefix "${i()}"`),F.length<O.length&&(console.log("DatabaseListView: Reached end of sortPrefix range, no more items"),y(I,!1))),a()&&(F.reverse(),console.log("DatabaseListView: Reversed items for display (newest first)"));const se=new Set(v(g).map(re=>re.key)),oe=F.filter(re=>!se.has(re.key));if(console.log(`DatabaseListView: Page ${v(L)} - After filtering duplicates: ${oe.length} items`),oe.length===0){console.log("DatabaseListView: No more unique items after filtering"),y(I,!1),y(w,!1);return}if(F.length>r()){y(I,!0);const re=oe.slice(0,r());y(g,[...v(g),...re],!0);const be=j(re,s());be?(y(P,be.value,!0),y(C,be.key,!0),console.log("DatabaseListView: Updated cursor for next page:",{lastLoadedValue:v(P),lastLoadedKey:v(C)})):(y(I,!1),console.log("DatabaseListView: No valid cursor, hasMore set to false"))}else{if(y(I,!1),y(g,[...v(g),...oe],!0),oe.length>0){const re=j(oe,s());re&&(y(P,re.value,!0),y(C,re.key,!0),console.log("DatabaseListView: Updated cursor (last page):",{lastLoadedValue:v(P),lastLoadedKey:v(C)}))}console.log("DatabaseListView: Loaded all remaining items, hasMore set to false")}const Ee=v(g).length-(oe.length>r()?r():oe.length);v(g).slice(Ee).forEach((re,be)=>{K(re.key,Ee+be)}),console.log(`DatabaseListView: Page ${v(L)} - Loaded ${oe.length} more items, total: ${v(g).length}, hasMore: ${v(I)}`)}else console.log("DatabaseListView: Query returned no data, hasMore set to false"),y(I,!1)}catch(S){S instanceof Error?(console.error("DatabaseListView: Load more error",{name:S.name,message:S.message,toString:S.toString()}),y(D,S.message||"Unknown error",!0)):(console.error("DatabaseListView: Load more error",S),y(D,String(S),!0))}finally{y(w,!1)}}function ae(){if(!v(q)||v(w)||!v(I))return;const{scrollTop:S,scrollHeight:M,clientHeight:B}=v(q);M-(S+B)<o()&&(console.log("DatabaseListView: Near bottom (container scroll), loading more..."),ce())}function ie(){if(v(w)||!v(I))return;const S=window.pageYOffset||document.documentElement.scrollTop,M=document.documentElement.scrollHeight,B=window.innerHeight;M-(S+B)<o()&&(console.log("DatabaseListView: Near bottom (window scroll), loading more..."),ce())}function H(){console.log("DatabaseListView: Refreshing..."),Z()}var Y={refresh:H,get path(){return t()},set path(S=""){t(S),Fe()},get pageSize(){return r()},set pageSize(S=10){r(S),Fe()},get orderBy(){return s()},set orderBy(S="createdAt"){s(S),Fe()},get sortPrefix(){return i()},set sortPrefix(S=""){i(S),Fe()},get threshold(){return o()},set threshold(S=300){o(S),Fe()},get reverse(){return a()},set reverse(S=!1){a(S),Fe()},get item(){return l()},set item(S){l(S),Fe()},get loading(){return u()},set loading(S){u(S),Fe()},get empty(){return f()},set empty(S){f(S),Fe()},get error(){return m()},set error(S){m(S),Fe()},get loadingMore(){return p()},set loadingMore(S){p(S),Fe()},get noMore(){return b()},set noMore(S){b(S),Fe()}},J=CT(),te=d(J);{var ue=S=>{var M=pT(),B=d(M);{var O=F=>{var se=me(),oe=le(se);Ms(oe,u),x(F,se)},Q=F=>{var se=fT();x(F,se)};G(B,F=>{u()?F(O):F(Q,!1)})}c(M),x(S,M)},U=S=>{var M=me(),B=le(M);{var O=F=>{var se=mT(),oe=d(se);{var Ee=be=>{var ye=me(),Pe=le(ye);Ms(Pe,m,()=>v(D)),x(be,ye)},re=be=>{var ye=vT(),Pe=h(d(ye),2),Le=d(Pe,!0);c(Pe);var ze=h(Pe,2);ze.__click=H,c(ye),z(()=>_(Le,v(D))),x(be,ye)};G(oe,be=>{m()?be(Ee):be(re,!1)})}c(se),x(F,se)},Q=F=>{var se=me(),oe=le(se);{var Ee=be=>{var ye=bT(),Pe=d(ye);{var Le=Oe=>{var We=me(),Ye=le(We);Ms(Ye,f),x(Oe,We)},ze=Oe=>{var We=gT();x(Oe,We)};G(Pe,Oe=>{f()?Oe(Le):Oe(ze,!1)})}c(ye),x(be,ye)},re=be=>{var ye=IT(),Pe=d(ye);Zt(Pe,19,()=>v(g),Ye=>Ye.key,(Ye,tt,Ue)=>{var st=wT(),Me=d(st);{var _e=Te=>{var Re=me(),it=le(Re);Ms(it,l,()=>v(tt),()=>v(Ue)),x(Te,Re)},ve=Te=>{var Re=_T(),it=d(Re),St=d(it,!0);c(it),c(Re),z(kt=>_(St,kt),[()=>JSON.stringify(v(tt).data,null,2)]),x(Te,Re)};G(Me,Te=>{l()?Te(_e):Te(ve,!1)})}c(st),z(()=>Ae(st,"data-key",v(tt).key)),x(Ye,st)});var Le=h(Pe,2);{var ze=Ye=>{var tt=xT(),Ue=d(tt);{var st=_e=>{var ve=me(),Te=le(ve);Ms(Te,p),x(_e,ve)},Me=_e=>{var ve=yT();x(_e,ve)};G(Ue,_e=>{p()?_e(st):_e(Me,!1)})}c(tt),x(Ye,tt)};G(Le,Ye=>{v(w)&&Ye(ze)})}var Oe=h(Le,2);{var We=Ye=>{var tt=ET(),Ue=d(tt);{var st=_e=>{var ve=me(),Te=le(ve);Ms(Te,b),x(_e,ve)},Me=_e=>{var ve=kT();x(_e,ve)};G(Ue,_e=>{b()?_e(st):_e(Me,!1)})}c(tt),x(Ye,tt)};G(Oe,Ye=>{!v(I)&&!v(w)&&Ye(We)})}c(ye),x(be,ye)};G(oe,be=>{v(g).length===0?be(Ee):be(re,!1)},!0)}x(F,se)};G(B,F=>{v(D)?F(O):F(Q,!1)},!0)}x(S,M)};G(te,S=>{v(k)?S(ue):S(U,!1)})}return c(J),ad(J,S=>y(q,S),()=>v(q)),x(n,J),ut(Y)}Ct(["click"]);pe(ku,{path:{},pageSize:{},orderBy:{},sortPrefix:{},threshold:{},reverse:{},item:{},loading:{},empty:{},error:{},loadingMore:{},noMore:{}},[],["refresh"],!0);var ST=R('<img class="svelte-r48pmi"/>'),AT=R('<div class="avatar-placeholder svelte-r48pmi"> </div>'),PT=R('<span class="badge-me svelte-r48pmi"> </span>'),RT=R('<p class="user-email svelte-r48pmi"> </p>'),NT=R('<p class="user-bio svelte-r48pmi"> </p>'),LT=R('<div class="user-card svelte-r48pmi" role="button" tabindex="0"><div class="user-avatar svelte-r48pmi"><!></div> <div class="user-info svelte-r48pmi"><h3 class="user-name svelte-r48pmi"> <!></h3> <h5> </h5> <!> <!> <p class="user-date svelte-r48pmi"> </p></div> <div class="user-actions svelte-r48pmi"><button class="btn-view-profile svelte-r48pmi"> </button></div></div>'),DT=R('<div class="loading-state svelte-r48pmi"><div class="spinner svelte-r48pmi"></div> <p> </p></div>'),$T=R('<div class="empty-state svelte-r48pmi"><p class="empty-icon svelte-r48pmi">👥</p> <p class="empty-text svelte-r48pmi"> </p></div>'),qT=R('<div class="error-state svelte-r48pmi"><p class="error-icon svelte-r48pmi">⚠️</p> <p class="error-text svelte-r48pmi"> </p> <p class="error-detail svelte-r48pmi"> </p></div>'),OT=R('<div class="loading-more-state svelte-r48pmi"><div class="spinner-small svelte-r48pmi"></div> <p class="svelte-r48pmi"> </p></div>'),MT=R('<div class="no-more-state svelte-r48pmi"><p class="svelte-r48pmi"> </p></div>');const zT={hash:"svelte-r48pmi",code:`\r
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
  }`};function Mg(n,e){dt(e,!1),ct(n,zT);const t=()=>lt(zt,"$t",r),[r,s]=Nt();function i(a){return a?new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}):t()("정보없음")}Kt(()=>{Dn(t()("사용자찾기"))});function o(a){a===Se.uid?(window.history.pushState({},"","/user/profile"),window.dispatchEvent(new PopStateEvent("popstate"))):console.log("다른 사용자 프로필:",a)}wn(),ku(n,{path:"users",pageSize:15,orderBy:"createdAt",threshold:300,reverse:!1,item:(b,g=Pn)=>{var w=LT();w.__click=()=>o(g().key),w.__keydown=H=>{(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),o(g().key))};var k=d(w),I=d(k);{var P=H=>{var Y=ST();z(J=>{Ae(Y,"src",g().data?.photoUrl??g().data?.photoURL),Ae(Y,"alt",J)},[()=>g().data?.displayName||t()("사용자")]),x(H,Y)},C=H=>{var Y=AT(),J=d(Y,!0);c(Y),z(te=>_(J,te),[()=>g().data?.displayName?.charAt(0)?.toUpperCase()||"?"]),x(H,Y)};G(I,H=>{g().data?.photoUrl||g().data?.photoURL?H(P):H(C,!1)})}c(k);var L=h(k,2),D=d(L),q=d(D),A=h(q);{var E=H=>{var Y=PT(),J=d(Y,!0);c(Y),z(te=>_(J,te),[()=>t()("나뱃지")]),x(H,Y)};G(A,H=>{g().key===Se.uid&&H(E)})}c(D);var T=h(D,2),N=d(T,!0);c(T);var $=h(T,2);{var j=H=>{var Y=RT(),J=d(Y,!0);c(Y),z(()=>_(J,g().data.email)),x(H,Y)};G($,H=>{g().data?.email&&H(j)})}var K=h($,2);{var ee=H=>{var Y=NT(),J=d(Y,!0);c(Y),z(()=>_(J,g().data.bio)),x(H,Y)};G(K,H=>{g().data?.bio&&H(ee)})}var W=h(K,2),Z=d(W);c(W),c(L);var ce=h(L,2),ae=d(ce);ae.__click=H=>{H.stopPropagation(),o(g().key)};var ie=d(ae,!0);c(ae),c(ce),c(w),z((H,Y,J,te)=>{_(q,`${H??""} `),_(N,g().key),_(Z,`${Y??""} ${J??""}`),_(ie,te)},[()=>g().data?.displayName||t()("이름없음"),()=>t()("가입일"),()=>i(g().data?.createdAt),()=>t()("프로필보기")]),x(b,w)},loading:b=>{var g=DT(),w=h(d(g),2),k=d(w,!0);c(w),c(g),z(I=>_(k,I),[()=>t()("사용자목록로딩")]),x(b,g)},empty:b=>{var g=$T(),w=h(d(g),2),k=d(w,!0);c(w),c(g),z(I=>_(k,I),[()=>t()("등록된사용자없음")]),x(b,g)},error:(b,g=Pn)=>{var w=qT(),k=h(d(w),2),I=d(k,!0);c(k);var P=h(k,2),C=d(P,!0);c(P),c(w),z(L=>{_(I,L),_(C,g())},[()=>t()("사용자목록로드실패")]),x(b,w)},loadingMore:b=>{var g=OT(),w=h(d(g),2),k=d(w,!0);c(w),c(g),z(I=>_(k,I),[()=>t()("더많은사용자로딩")]),x(b,g)},noMore:b=>{var g=MT(),w=d(g),k=d(w,!0);c(w),c(g),z(I=>_(k,I),[()=>t()("모든사용자로드완료")]),x(b,g)},$$slots:{item:!0,loading:!0,empty:!0,error:!0,loadingMore:!0,noMore:!0}}),ut(),s()}Ct(["click","keydown"]);pe(Mg,{},[],[],!0);const Eu=Ps([]);function bt(n,e="success",t=3e3){const r=Date.now();Eu.update(s=>[...s,{id:r,message:n,type:e}]),setTimeout(()=>{zg(r)},t)}function zg(n){Eu.update(e=>e.filter(t=>t.id!==n))}var FT=R('<img class="comment-avatar svelte-110g7vh"/>'),UT=R('<span class="comment-avatar-placeholder svelte-110g7vh"> </span>'),jT=R('<span class="count svelte-110g7vh"> </span>'),VT=R("<button> <!></button>"),BT=R('<button class="action-button reply-button svelte-110g7vh"> </button>'),HT=R('<div class="modal-backdrop svelte-110g7vh"><div class="modal svelte-110g7vh"><div class="modal-header svelte-110g7vh"><h2 class="svelte-110g7vh"> </h2> <button class="btn-close svelte-110g7vh">×</button></div> <div class="modal-content svelte-110g7vh"><textarea rows="5" class="svelte-110g7vh"></textarea></div> <div class="modal-footer svelte-110g7vh"><button class="btn-cancel svelte-110g7vh"> </button> <button class="btn-submit svelte-110g7vh"> </button></div></div></div>'),WT=R('<div class="comment-item svelte-110g7vh"><div class="comment-header svelte-110g7vh"><div class="comment-author svelte-110g7vh"><!> <span class="comment-author-name svelte-110g7vh"> </span></div> <span class="comment-date svelte-110g7vh"> </span></div> <p class="comment-content svelte-110g7vh"> </p> <div class="comment-actions svelte-110g7vh"><!> <!></div></div> <!>',1);const GT={hash:"svelte-110g7vh",code:`\r
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
  /* 댓글 액션 버튼 영역 */.comment-actions.svelte-110g7vh {display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;}\r
\r
  /* 액션 버튼 공통 스타일 */.action-button.svelte-110g7vh {display:inline-flex;align-items:center;gap:0.25rem;padding:0.375rem 0.75rem;font-size:0.75rem;background-color:transparent;border:1px solid;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;font-weight:500;}\r
\r
  /* 좋아요 버튼 */.like-button.svelte-110g7vh {color:#6b7280;border-color:#d1d5db;}.like-button.svelte-110g7vh:hover {background-color:#fee2e2;border-color:#fca5a5;color:#dc2626;}\r
\r
  /* 좋아요 한 버튼 강조 표시 */.like-button.liked.svelte-110g7vh {background-color:#fee2e2;border-color:#dc2626;color:#dc2626;font-weight:600;}.like-button.liked.svelte-110g7vh:hover {background-color:#fecaca;border-color:#b91c1c;color:#b91c1c;}\r
\r
  /* 답글 버튼 */.reply-button.svelte-110g7vh {color:#3b82f6;border-color:#93c5fd;}.reply-button.svelte-110g7vh:hover {background-color:#dbeafe;border-color:#3b82f6;color:#2563eb;}\r
\r
  /* 개수 표시 */.count.svelte-110g7vh {font-weight:600;font-size:0.7rem;}\r
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
  /* 전송 버튼 */.btn-submit.svelte-110g7vh {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#ffffff;background-color:#3b82f6;border:none;border-radius:0.375rem;cursor:pointer;transition:all 0.2s ease;}.btn-submit.svelte-110g7vh:hover:not(:disabled) {background-color:#2563eb;}.btn-submit.svelte-110g7vh:disabled {opacity:0.6;cursor:not-allowed;}`};function Fg(n,e){dt(e,!0),ct(n,GT);const t=()=>lt(zt,"$t",i),r=()=>lt(u,"$userStore",i),s=()=>lt(m,"$myLikeStore",i),[i,o]=Nt();let a=je(e,"comment",7),l=je(e,"userId",7,null);const u=xu(`users/${a().uid}`),f=a().commentId.startsWith("-")?a().commentId.substring(1):a().commentId,m=l()?Rg(`likes/comment-${f}-${l()}`,0):null;let p=ne(!1),b=ne(""),g=ne(!1);async function w(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const U=await Lg("comment",a().commentId,l());U.success?U.isLiked?bt(t()("좋아요를하였습니다"),"success"):bt(t()("좋아요를취소했습니다"),"info"):bt(t()(U.error),"error")}catch(U){console.error("좋아요 오류:",U),bt(t()("error.unknown"),"error")}}function k(){if(!l()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(p,!0)}async function I(){if(!v(b).trim()){bt(t()("댓글내용입력필요"),"error");return}y(g,!0);try{const U=await qC({parentCommentId:a().commentId,userId:l(),content:v(b)});U.success?(bt(t()("댓글이작성되었습니다"),"success"),y(p,!1),y(b,"")):bt(t()(U.error),"error")}catch(U){console.error("답글 생성 오류:",U),bt(t()("error.unknown"),"error")}finally{y(g,!1)}}function P(){y(p,!1),y(b,"")}var C={get comment(){return a()},set comment(U){a(U),Fe()},get userId(){return l()},set userId(U=null){l(U),Fe()}},L=WT(),D=le(L),q=d(D),A=d(q),E=d(A);{var T=U=>{var S=FT();z(M=>{Ae(S,"src",r().data.photoUrl),Ae(S,"alt",M)},[()=>r().data.displayName||t()("익명")]),x(U,S)},N=U=>{var S=UT(),M=d(S,!0);c(S),z(B=>_(M,B),[()=>(r().data?.displayName||t()("익명")).charAt(0).toUpperCase()]),x(U,S)};G(E,U=>{r().data?.photoUrl?U(T):U(N,!1)})}var $=h(E,2),j=d($,!0);c($),c(A);var K=h(A,2),ee=d(K,!0);c(K),c(q);var W=h(q,2),Z=d(W,!0);c(W);var ce=h(W,2),ae=d(ce);{var ie=U=>{var S=VT();S.__click=w;var M=d(S),B=h(M);{var O=Q=>{var F=jT(),se=d(F,!0);c(F),z(()=>_(se,a().likeCount)),x(Q,F)};G(B,Q=>{a().likeCount>0&&Q(O)})}c(S),z((Q,F)=>{sn(S,1,`action-button like-button ${(s()?.data??0)>=1?"liked":""}`,"svelte-110g7vh"),Ae(S,"title",Q),_(M,`${(s()?.data??0)>=1?"❤️":"🤍"}
        ${F??""} `)},[()=>t()("좋아요"),()=>t()("좋아요")]),x(U,S)};G(ae,U=>{l()&&U(ie)})}var H=h(ae,2);{var Y=U=>{var S=BT();S.__click=k;var M=d(S);c(S),z(B=>_(M,`💬 ${B??""}`),[()=>t()("답글")]),x(U,S)};G(H,U=>{l()&&a().depth<12&&U(Y)})}c(ce),c(D);var J=h(D,2);{var te=U=>{var S=HT();S.__click=P;var M=d(S);M.__click=Le=>Le.stopPropagation();var B=d(M),O=d(B),Q=d(O,!0);c(O);var F=h(O,2);F.__click=P,c(B);var se=h(B,2),oe=d(se);aa(oe),oa(oe,!0),c(se);var Ee=h(se,2),re=d(Ee);re.__click=P;var be=d(re,!0);c(re);var ye=h(re,2);ye.__click=I;var Pe=d(ye,!0);c(ye),c(Ee),c(M),c(S),z((Le,ze,Oe,We)=>{_(Q,Le),Ae(oe,"placeholder",ze),_(be,Oe),ye.disabled=v(g),_(Pe,We)},[()=>t()("답글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>v(g)?t()("전송중"):t()("전송")]),rr(oe,()=>v(b),Le=>y(b,Le)),x(U,S)};G(J,U=>{v(p)&&U(te)})}z((U,S)=>{Ba(D,`padding-left: ${1.5+(a().depth-1)*2}rem;`),_(j,U),_(ee,S),_(Z,a().content)},[()=>r().data?.displayName||t()("익명"),()=>new Date(a().createdAt).toLocaleDateString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]),x(n,L);var ue=ut(C);return o(),ue}Ct(["click"]);pe(Fg,{comment:{},userId:{}},[],[],!0);var KT=R('<span class="count svelte-1fsdsc8"> </span>'),YT=R('<span class="count svelte-1fsdsc8"> </span>'),QT=R('<button class="action-btn edit icon-only svelte-1fsdsc8"><!></button> <button class="action-btn delete icon-only svelte-1fsdsc8"><!></button>',1),JT=R('<button class="comments-show-more svelte-1fsdsc8"> </button>'),XT=R('<button class="comments-hide-extra svelte-1fsdsc8"> </button>'),ZT=R('<div class="comments-list svelte-1fsdsc8"><!> <!> <!></div>'),eS=R('<div class="comments-section svelte-1fsdsc8"><button class="comments-toggle svelte-1fsdsc8"> </button> <!></div>'),tS=R("<alert-dialog></alert-dialog>",2),nS=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content svelte-1fsdsc8"><textarea rows="5" class="svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div></div>'),rS=R('<div class="modal-backdrop svelte-1fsdsc8"><div class="modal svelte-1fsdsc8"><div class="modal-header svelte-1fsdsc8"><h2 class="svelte-1fsdsc8"> </h2> <button class="btn-close svelte-1fsdsc8">×</button></div> <div class="modal-content edit-form svelte-1fsdsc8"><input type="text" class="edit-title-input"/> <textarea rows="10" class="edit-content-textarea svelte-1fsdsc8"></textarea></div> <div class="modal-footer svelte-1fsdsc8"><button class="btn-cancel svelte-1fsdsc8"> </button> <button class="btn-submit svelte-1fsdsc8"> </button></div></div></div>'),sS=R('<div class="post-item svelte-1fsdsc8"><div class="post-item-top svelte-1fsdsc8"><span class="post-category-pill svelte-1fsdsc8"> </span> <span class="post-number svelte-1fsdsc8"> </span></div> <h3 class="post-title svelte-1fsdsc8"> </h3> <p class="post-content svelte-1fsdsc8"> </p> <div class="post-meta svelte-1fsdsc8"><div class="author-chip svelte-1fsdsc8"><span class="author-avatar svelte-1fsdsc8"> </span> <span class="post-author"> </span></div> <span class="post-date svelte-1fsdsc8"> </span></div> <div class="post-actions svelte-1fsdsc8"><div class="post-actions-left svelte-1fsdsc8"><button class="action-btn svelte-1fsdsc8"> <!></button> <button> <!></button> <button class="action-btn svelte-1fsdsc8"> </button> <button class="action-btn svelte-1fsdsc8"> </button></div> <div class="post-actions-right svelte-1fsdsc8"><!></div></div> <!></div> <!> <!> <!>',1);const iS={hash:"svelte-1fsdsc8",code:`.post-item.svelte-1fsdsc8 {padding:1.5rem 1.75rem;border-radius:0.85rem;background:linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:1rem;transition:transform 0.2s ease,
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

  /* 댓글 목록 */.comments-list.svelte-1fsdsc8 {margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;}

  /* 댓글 더 보기 버튼 */.comments-show-more.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f0f4ff;color:#3b82f6;border:1px solid #d1d5ff;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-show-more.svelte-1fsdsc8:hover {background-color:#e0eaff;border-color:#3b82f6;transform:translateY(-1px);}.comments-show-more.svelte-1fsdsc8:active {transform:translateY(0);}

  /* 댓글 숨기기 버튼 */.comments-hide-extra.svelte-1fsdsc8 {margin-top:0.75rem;padding:0.65rem 1rem;width:100%;background-color:#f9fafb;color:#6b7280;border:1px solid #e5e7eb;border-radius:0.5rem;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-align:center;}.comments-hide-extra.svelte-1fsdsc8:hover {background-color:#f3f4f6;border-color:#d1d5db;color:#374151;}.comments-hide-extra.svelte-1fsdsc8:active {transform:translateY(0);}`};function Ug(n,e){dt(e,!0),ct(n,iS);const t=()=>lt(zt,"$t",s),r=()=>lt(p,"$myLikeStore",s),[s,i]=Nt();let o=je(e,"itemData",7),a=je(e,"index",7),l=je(e,"category",7),u=je(e,"userId",7),f=je(e,"onLike",7,()=>{});const m=o().postId.startsWith("-")?o().postId.substring(1):o().postId,p=u()?Rg(`likes/post-${m}-${u()}`,0):null;let b=ne(!1),g=ne(""),w=ne(!1),k=ne(!1),I=ne(""),P=ne(""),C=ne(!1),L=ne(!1),D=ne(an([])),q=ne(!0),A=ne(!1);const E=5;function T(){return v(A)?v(D):v(D).length>E?v(D).slice(-E):v(D)}Kt(()=>{const V=OC(o().postId,he=>{y(D,he,!0)});return()=>{V()}});async function N(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}try{const V=await Lg("post",o().postId,u());V.success?(V.isLiked?bt(t()("좋아요를하였습니다"),"success"):bt(t()("좋아요를취소했습니다"),"info"),f()(o().postId)):bt(t()(V.error),"error")}catch(V){console.error("좋아요 오류:",V),bt(t()("error.unknown"),"error")}}function $(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}y(b,!0)}async function j(){if(!u()){bt(t()("로그인필요"),"error");return}if(!v(g).trim()){bt(t()("댓글내용입력필요"),"error");return}y(w,!0);try{const V=await $C({postId:o().postId,userId:u(),content:v(g)});V.success?(bt(t()("댓글이작성되었습니다"),"success"),y(b,!1),y(g,""),y(q,!0)):bt(t()(V.error),"error")}catch(V){console.error("댓글 생성 오류:",V),bt(t()("error.unknown"),"error")}finally{y(w,!1)}}function K(){y(b,!1),y(g,"")}function ee(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(v(D).length>0){y(L,!0);return}y(I,o().title,!0),y(P,o().content,!0),y(k,!0)}function W(){y(L,!1)}function Z(){y(k,!1),y(I,""),y(P,"")}async function ce(){if(!u()){bt(t()("로그인필요"),"error");return}if(!v(I).trim()||!v(P).trim()){bt(t()("제목과내용을입력하세요"),"error");return}y(C,!0);try{const V=await NC(o().postId,{title:v(I).trim(),content:v(P).trim()});V.success?(bt(t()("게시글수정완료"),"success"),y(k,!1),y(I,""),y(P,"")):bt(t()(V.error),"error")}catch(V){console.error("게시글 수정 오류:",V),bt(t()("error.unknown"),"error")}finally{y(C,!1)}}async function ae(){if(!u()){alert(t()("로그인필요")),window.location.href="/user/login";return}if(confirm(t()("게시글삭제확인")))try{const V=await LC(o().postId);V.success?bt(t()("게시글삭제완료"),"success"):bt(t()(V.error),"error")}catch(V){console.error("게시글 삭제 오류:",V),bt(t()("error.unknown"),"error")}}var ie={get itemData(){return o()},set itemData(V){o(V),Fe()},get index(){return a()},set index(V){a(V),Fe()},get category(){return l()},set category(V){l(V),Fe()},get userId(){return u()},set userId(V){u(V),Fe()},get onLike(){return f()},set onLike(V=()=>{}){f(V),Fe()}},H=sS(),Y=le(H),J=d(Y),te=d(J),ue=d(te,!0);c(te);var U=h(te,2),S=d(U);c(U),c(J);var M=h(J,2),B=d(M,!0);c(M);var O=h(M,2),Q=d(O,!0);c(O);var F=h(O,2),se=d(F),oe=d(se),Ee=d(oe,!0);c(oe);var re=h(oe,2),be=d(re,!0);c(re),c(se);var ye=h(se,2),Pe=d(ye,!0);c(ye),c(F);var Le=h(F,2),ze=d(Le),Oe=d(ze);Oe.__click=$;var We=d(Oe),Ye=h(We);{var tt=V=>{var he=KT(),ke=d(he,!0);c(he),z(()=>_(ke,v(D).length)),x(V,he)};G(Ye,V=>{v(D).length>0&&V(tt)})}c(Oe);var Ue=h(Oe,2);Ue.__click=N;var st=d(Ue),Me=h(st);{var _e=V=>{var he=YT(),ke=d(he,!0);c(he),z(()=>_(ke,o().likeCount)),x(V,he)};G(Me,V=>{o().likeCount>0&&V(_e)})}c(Ue);var ve=h(Ue,2),Te=d(ve);c(ve);var Re=h(ve,2),it=d(Re);c(Re),c(ze);var St=h(ze,2),kt=d(St);{var pt=V=>{var he=QT(),ke=le(he);ke.__click=ee;var nt=d(ke);xg(nt,{size:18}),c(ke);var Xe=h(ke,2);Xe.__click=ae;var Ze=d(Xe);kg(Ze,{size:18}),c(Xe),z((ot,et)=>{Ae(ke,"title",ot),Ae(Xe,"title",et)},[()=>t()("게시글수정"),()=>t()("삭제")]),x(V,he)};G(kt,V=>{u()===o().uid&&V(pt)})}c(St),c(Le);var Ut=h(Le,2);{var Vt=V=>{var he=eS(),ke=d(he);ke.__click=()=>y(q,!v(q));var nt=d(ke);c(ke);var Xe=h(ke,2);{var Ze=ot=>{var et=ZT(),rt=d(et);Zt(rt,17,T,Ne=>Ne.commentId,(Ne,Ge)=>{Fg(Ne,{get comment(){return v(Ge)},get userId(){return u()}})});var gt=h(rt,2);{var Ft=Ne=>{var Ge=JT();Ge.__click=()=>y(A,!0);var Je=d(Ge);c(Ge),z(xt=>_(Je,`📋 ${xt??""}`),[()=>t()("댓글더보기",{count:v(D).length-E})]),x(Ne,Ge)};G(gt,Ne=>{v(D).length>E&&!v(A)&&Ne(Ft)})}var Dt=h(gt,2);{var Bt=Ne=>{var Ge=XT();Ge.__click=()=>y(A,!1);var Je=d(Ge);c(Ge),z(xt=>_(Je,`▲ ${xt??""}`),[()=>t()("댓글숨기기")]),x(Ne,Ge)};G(Dt,Ne=>{v(A)&&Ne(Bt)})}c(et),x(ot,et)};G(Xe,ot=>{v(q)&&ot(Ze)})}c(he),z(ot=>_(nt,`${v(q)?"▼":"▶"}
        ${ot??""} (${v(D).length??""})`),[()=>t()("댓글")]),x(V,he)};G(Ut,V=>{v(D).length>0&&V(Vt)})}c(Y);var nn=h(Y,2);{var fe=V=>{var he=tS();Ti(he,"open","true"),Ti(he,"type","error"),z(()=>Ti(he,"title",t()("수정불가"))),z(()=>Ti(he,"message",t()("댓글이달려있어수정불가메시지"))),z(()=>Ti(he,"confirmText",t()("확인"))),Jr("confirm",he,W),Jr("close",he,W),x(V,he)};G(nn,V=>{v(L)&&V(fe)})}var ge=h(nn,2);{var we=V=>{var he=nS();he.__click=K;var ke=d(he);ke.__click=Ge=>Ge.stopPropagation();var nt=d(ke),Xe=d(nt),Ze=d(Xe,!0);c(Xe);var ot=h(Xe,2);ot.__click=K,c(nt);var et=h(nt,2),rt=d(et);aa(rt),oa(rt,!0),c(et);var gt=h(et,2),Ft=d(gt);Ft.__click=K;var Dt=d(Ft,!0);c(Ft);var Bt=h(Ft,2);Bt.__click=j;var Ne=d(Bt,!0);c(Bt),c(gt),c(ke),c(he),z((Ge,Je,xt,un)=>{_(Ze,Ge),Ae(rt,"placeholder",Je),_(Dt,xt),Bt.disabled=v(w),_(Ne,un)},[()=>t()("댓글작성"),()=>t()("댓글내용입력"),()=>t()("취소"),()=>v(w)?t()("전송중"):t()("전송")]),rr(rt,()=>v(g),Ge=>y(g,Ge)),x(V,he)};G(ge,V=>{v(b)&&V(we)})}var Ce=h(ge,2);{var De=V=>{var he=rS();he.__click=Z;var ke=d(he);ke.__click=Je=>Je.stopPropagation();var nt=d(ke),Xe=d(nt),Ze=d(Xe,!0);c(Xe);var ot=h(Xe,2);ot.__click=Z,c(nt);var et=h(nt,2),rt=d(et);ws(rt),oa(rt,!0);var gt=h(rt,2);aa(gt),c(et);var Ft=h(et,2),Dt=d(Ft);Dt.__click=Z;var Bt=d(Dt,!0);c(Dt);var Ne=h(Dt,2);Ne.__click=ce;var Ge=d(Ne,!0);c(Ne),c(Ft),c(ke),c(he),z((Je,xt,un,rn,Xn)=>{_(Ze,Je),Ae(rt,"placeholder",xt),Ae(gt,"placeholder",un),_(Bt,rn),Ne.disabled=v(C),_(Ge,Xn)},[()=>t()("게시글수정"),()=>t()("제목입력"),()=>t()("내용입력"),()=>t()("취소"),()=>v(C)?t()("저장중"):t()("저장")]),rr(rt,()=>v(I),Je=>y(I,Je)),rr(gt,()=>v(P),Je=>y(P,Je)),x(V,he)};G(Ce,V=>{v(k)&&V(De)})}z((V,he,ke,nt,Xe,Ze,ot,et,rt,gt,Ft,Dt)=>{_(ue,l()),_(S,`#${V??""}`),_(B,o().title),_(Q,o().content),_(Ee,he),_(be,ke),_(Pe,nt),Ae(Oe,"title",Xe),_(We,`💬 ${Ze??""} `),sn(Ue,1,`action-btn ${(r()?.data??0)>=1?"liked":""}`,"svelte-1fsdsc8"),Ae(Ue,"title",ot),_(st,`${(r()?.data??0)>=1?"❤️":"🤍"}
        ${et??""} `),Ae(ve,"title",rt),_(Te,`💬 ${gt??""}`),Ae(Re,"title",Ft),_(it,`🚨 ${Dt??""}`)},[()=>String(a()+1).padStart(2,"0"),()=>(o().author||t()("익명")).charAt(0).toUpperCase(),()=>o().author||t()("익명"),()=>new Date(o().createdAt).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),()=>t()("댓글"),()=>t()("댓글"),()=>t()("좋아요"),()=>t()("좋아요"),()=>t()("채팅"),()=>t()("채팅"),()=>t()("신고"),()=>t()("신고")]),x(n,H);var $e=ut(ie);return i(),$e}Ct(["click"]);pe(Ug,{itemData:{},index:{},category:{},userId:{},onLike:{}},[],[],!0);var oS=R('<div class="loading-screen"><p> </p></div>'),aS=R("<button> </button>"),lS=R('<div class="empty-state"><div class="empty-illustration">🗂️</div> <h3 class="empty-title"> </h3> <p class="empty-message"> </p> <button class="btn-create-post ghost svelte-1r1wwfo"> </button></div>'),cS=R('<div class="loading-state"><div class="spinner"></div> <p> </p></div>'),dS=R('<div class="error-state"><div class="error-icon">⚠️</div> <div><p class="error-message"> </p> <p class="error-detail"> </p></div></div>'),uS=R('<div class="loading-more"><div class="spinner small"></div> <p> </p></div>'),hS=R('<div class="no-more"><p> </p></div>'),fS=R("<option> </option>"),pS=R('<div class="modal-backdrop svelte-1r1wwfo" aria-hidden="true"><div class="modal svelte-1r1wwfo" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-1r1wwfo"><h2 class="svelte-1r1wwfo"> </h2> <button type="button" class="btn-close svelte-1r1wwfo">×</button></div> <div class="modal-content svelte-1r1wwfo"><div class="form-group svelte-1r1wwfo"><label for="category" class="svelte-1r1wwfo"> </label> <select id="category" class="form-control svelte-1r1wwfo"><option> </option><!></select></div> <div class="form-group svelte-1r1wwfo"><label for="title" class="svelte-1r1wwfo"> </label> <input id="title" type="text" class="form-control svelte-1r1wwfo"/></div> <div class="form-group svelte-1r1wwfo"><label for="content" class="svelte-1r1wwfo"> </label> <textarea id="content" class="form-control textarea svelte-1r1wwfo" rows="8"></textarea></div></div> <div class="modal-footer svelte-1r1wwfo"><button class="btn-cancel svelte-1r1wwfo"> </button> <button class="btn-submit svelte-1r1wwfo"> </button></div></div></div>'),vS=R('<div class="post-list-container svelte-1r1wwfo"><div class="toolbar svelte-1r1wwfo"><div class="toolbar-left svelte-1r1wwfo"><div class="category-tabs svelte-1r1wwfo"></div></div> <button class="btn-create-post svelte-1r1wwfo"> </button></div> <div class="post-list-surface svelte-1r1wwfo"><!></div></div> <!>',1);const mS={hash:"svelte-1r1wwfo",code:`\r
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
  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */`};function jg(n,e){dt(e,!0),ct(n,mS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();let i=ne(null),o=ne(""),a=ne(!0);const l=new URLSearchParams(typeof window<"u"?window.location.search:"");let u=ne(an(l.get("category")||"community")),f=ne(!1),m=ne(""),p=ne(""),b=ne(""),g=ne(!1);Kt(()=>{Dn(t()("게시판"));const A=or.onAuthStateChanged(async E=>{if(E){y(i,E.uid,!0);const T=E.displayName||E.email||t()("익명");y(o,T,!0)}else y(i,null),y(o,"");y(a,!1)});return()=>A()});function w(){if(!v(i)){window.location.href="/user/login";return}y(f,!0)}function k(){y(f,!1),y(m,""),y(p,""),y(b,"")}async function I(){if(!v(m)){alert(t()("카테고리선택필요"));return}if(!v(p).trim()){alert(t()("제목입력필요"));return}if(!v(b).trim()){alert(t()("내용입력필요"));return}if(!v(i)||!v(o)){alert(t()("로그인정보확인불가"));return}y(g,!0);try{const A=await RC(v(m),v(i),v(o),v(p),v(b));A.success?(y(f,!1),y(m,""),y(p,""),y(b,""),bt(t()("게시글작성완료"),"success")):bt(t()("게시글저장실패",{error:A.error||"Unknown error"}),"error")}catch(A){console.error("게시글 저장 오류:",A),bt(t()("게시글저장중오류"),"error")}finally{y(g,!1)}}function P(A){y(u,A,!0),window.history.pushState({},"",`/post/list?category=${A}`)}var C=me(),L=le(C);{var D=A=>{var E=oS(),T=d(E),N=d(T,!0);c(T),c(E),z($=>_(N,$),[()=>t()("로딩중")]),x(A,E)},q=A=>{var E=vS(),T=le(E),N=d(T),$=d(N),j=d($);Zt(j,20,()=>Lf,ie=>ie,(ie,H)=>{var Y=aS();Y.__click=()=>P(H);var J=d(Y,!0);c(Y),z(te=>{sn(Y,1,`tab ${v(u)===H?"active":""}`,"svelte-1r1wwfo"),_(J,te)},[()=>t()(`label.category.${H}`)]),x(ie,Y)}),c(j),c($);var K=h($,2);K.__click=w;var ee=d(K);c(K),c(N);var W=h(N,2),Z=d(W);F1(Z,()=>v(u),ie=>{{const H=(M,B=Pn,O=Pn)=>{{let Q=_s(()=>({...B().data,postId:B().key}));Ug(M,{get itemData(){return v(Q)},get index(){return O()},get category(){return B().data.category},get userId(){return v(i)}})}},Y=M=>{var B=lS(),O=h(d(B),2),Q=d(O,!0);c(O);var F=h(O,2),se=d(F,!0);c(F);var oe=h(F,2);oe.__click=w;var Ee=d(oe);c(oe),c(B),z((re,be,ye)=>{_(Q,re),_(se,be),_(Ee,`✏️ ${ye??""}`)},[()=>t()("게시글없음"),()=>t()("첫게시글공유"),()=>t()("새글작성")]),x(M,B)},J=M=>{var B=cS(),O=h(d(B),2),Q=d(O,!0);c(O),c(B),z(F=>_(Q,F),[()=>t()("게시글로딩중")]),x(M,B)},te=(M,B=Pn)=>{var O=dS(),Q=h(d(O),2),F=d(Q),se=d(F,!0);c(F);var oe=h(F,2),Ee=d(oe,!0);c(oe),c(Q),c(O),z(re=>{_(se,re),_(Ee,B())},[()=>t()("게시글로드실패")]),x(M,O)},ue=M=>{var B=uS(),O=h(d(B),2),Q=d(O,!0);c(O),c(B),z(F=>_(Q,F),[()=>t()("더많은게시글로딩")]),x(M,B)},U=M=>{var B=hS(),O=d(B),Q=d(O,!0);c(O),c(B),z(F=>_(Q,F),[()=>t()("모든게시글확인")]),x(M,B)};let S=_s(()=>`${v(u)}-`);ku(ie,{path:"posts",orderBy:"order",get sortPrefix(){return v(S)},reverse:!0,pageSize:20,item:H,empty:Y,loading:J,error:te,loadingMore:ue,noMore:U,$$slots:{item:!0,empty:!0,loading:!0,error:!0,loadingMore:!0,noMore:!0}})}}),c(W),c(T);var ce=h(T,2);{var ae=ie=>{var H=pS();H.__click=()=>y(f,!1),H.__keydown=Me=>Me.key==="Escape"&&y(f,!1);var Y=d(H);Y.__click=Me=>Me.stopPropagation();var J=d(Y),te=d(J),ue=d(te,!0);c(te);var U=h(te,2);U.__click=()=>y(f,!1),c(J);var S=h(J,2),M=d(S),B=d(M),O=d(B,!0);c(B);var Q=h(B,2),F=d(Q),se=d(F,!0);c(F),F.value=F.__value="";var oe=h(F);Zt(oe,16,()=>Lf,Me=>Me,(Me,_e)=>{var ve=fS(),Te=d(ve,!0);c(ve);var Re={};z(it=>{_(Te,it),Re!==(Re=_e)&&(ve.value=(ve.__value=_e)??"")},[()=>t()(`label.category.${_e}`)]),x(Me,ve)}),c(Q),c(M);var Ee=h(M,2),re=d(Ee),be=d(re,!0);c(re);var ye=h(re,2);ws(ye),c(Ee);var Pe=h(Ee,2),Le=d(Pe),ze=d(Le,!0);c(Le);var Oe=h(Le,2);aa(Oe),c(Pe),c(S);var We=h(S,2),Ye=d(We);Ye.__click=k;var tt=d(Ye,!0);c(Ye);var Ue=h(Ye,2);Ue.__click=I;var st=d(Ue,!0);c(Ue),c(We),c(Y),c(H),z((Me,_e,ve,Te,Re,it,St,kt,pt)=>{_(ue,Me),_(O,_e),_(se,ve),_(be,Te),Ae(ye,"placeholder",Re),_(ze,it),Ae(Oe,"placeholder",St),Ye.disabled=v(g),_(tt,kt),Ue.disabled=v(g),_(st,pt)},[()=>t()("새게시글작성"),()=>t()("카테고리"),()=>t()("카테고리선택"),()=>t()("제목"),()=>t()("제목입력"),()=>t()("내용"),()=>t()("내용입력"),()=>t()("취소"),()=>v(g)?t()("전송중"):t()("전송")]),id(Q,()=>v(m),Me=>y(m,Me)),rr(ye,()=>v(p),Me=>y(p,Me)),rr(Oe,()=>v(b),Me=>y(b,Me)),x(ie,H)};G(ce,ie=>{v(f)&&ie(ae)})}z(ie=>_(ee,`✏️ ${ie??""}`),[()=>t()("글쓰기")]),x(A,E)};G(L,A=>{v(a)?A(D):A(q,!1)})}x(n,C),ut(),s()}Ct(["click","keydown"]);pe(jg,{},[],[],!0);var gS=R('<div class="post-detail-container svelte-1sszjx6"><div class="detail-card svelte-1sszjx6"><div class="construction-content svelte-1sszjx6"><div class="construction-icon svelte-1sszjx6">🚧</div> <p class="construction-message svelte-1sszjx6"> </p> <p class="construction-description svelte-1sszjx6"> </p></div> <button class="back-button svelte-1sszjx6"> </button></div></div>');const bS={hash:"svelte-1sszjx6",code:`.post-detail-container.svelte-1sszjx6 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.detail-card.svelte-1sszjx6 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1sszjx6 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1sszjx6 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1sszjx6 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1sszjx6 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1sszjx6 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1sszjx6:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.detail-card.svelte-1sszjx6 {padding:1.5rem;}\r
  }`};function Vg(n,e){dt(e,!1),ct(n,bS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("게시물목록"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=gS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_게시물상세"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Vg,{},[],[],!0);var _S=R('<div class="chat-list-container svelte-1xfn8v9"><div class="chat-card svelte-1xfn8v9"><div class="construction-content svelte-1xfn8v9"><div class="construction-icon svelte-1xfn8v9">🚧</div> <p class="construction-message svelte-1xfn8v9"> </p> <p class="construction-description svelte-1xfn8v9"> </p></div> <button class="back-button svelte-1xfn8v9"> </button></div></div>');const wS={hash:"svelte-1xfn8v9",code:`.chat-list-container.svelte-1xfn8v9 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.chat-card.svelte-1xfn8v9 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1xfn8v9 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1xfn8v9 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1xfn8v9 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1xfn8v9 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1xfn8v9 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1xfn8v9:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.chat-card.svelte-1xfn8v9 {padding:1.5rem;}\r
  }`};function Bg(n,e){dt(e,!1),ct(n,wS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("채팅"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=_S(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_채팅목록"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Bg,{},[],[],!0);var yS=R('<div class="settings-container svelte-177ja08"><div class="settings-card svelte-177ja08"><div class="construction-content svelte-177ja08"><div class="construction-icon svelte-177ja08">🚧</div> <p class="construction-message svelte-177ja08"> </p> <p class="construction-description svelte-177ja08"> </p></div> <button class="back-button svelte-177ja08"> </button></div></div>');const xS={hash:"svelte-177ja08",code:`.settings-container.svelte-177ja08 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.settings-card.svelte-177ja08 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-177ja08 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-177ja08 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-177ja08 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-177ja08 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-177ja08 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-177ja08:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.settings-card.svelte-177ja08 {padding:1.5rem;}\r
  }`};function Hg(n,e){dt(e,!1),ct(n,xS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("설정"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=yS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_설정"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Hg,{},[],[],!0);var kS=R('<div class="about-container svelte-65loqe"><div class="about-card svelte-65loqe"><div class="construction-content svelte-65loqe"><div class="construction-icon svelte-65loqe">🚧</div> <p class="construction-message svelte-65loqe"> </p> <p class="construction-description svelte-65loqe"> </p></div> <button class="back-button svelte-65loqe"> </button></div></div>');const ES={hash:"svelte-65loqe",code:`.about-container.svelte-65loqe {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.about-card.svelte-65loqe {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-65loqe {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-65loqe {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-65loqe {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-65loqe {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-65loqe {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-65loqe:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.about-card.svelte-65loqe {padding:1.5rem;}\r
  }`};function Wg(n,e){dt(e,!1),ct(n,ES);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=kS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_앱정보"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Wg,{},[],[],!0);var IS=R('<div class="help-container svelte-19u7yna"><div class="help-card svelte-19u7yna"><div class="construction-content svelte-19u7yna"><div class="construction-icon svelte-19u7yna">🚧</div> <p class="construction-message svelte-19u7yna"> </p> <p class="construction-description svelte-19u7yna"> </p></div> <button class="back-button svelte-19u7yna"> </button></div></div>');const CS={hash:"svelte-19u7yna",code:`.help-container.svelte-19u7yna {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.help-card.svelte-19u7yna {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-19u7yna {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-19u7yna {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-19u7yna {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-19u7yna {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-19u7yna {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-19u7yna:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.help-card.svelte-19u7yna {padding:1.5rem;}\r
  }`};function Gg(n,e){dt(e,!1),ct(n,CS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("도움말"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=IS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_도움말"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Gg,{},[],[],!0);var TS=R('<div class="terms-container svelte-134dw7w"><div class="terms-card svelte-134dw7w"><div class="construction-content svelte-134dw7w"><div class="construction-icon svelte-134dw7w">🚧</div> <p class="construction-message svelte-134dw7w"> </p> <p class="construction-description svelte-134dw7w"> </p></div> <button class="back-button svelte-134dw7w"> </button></div></div>');const SS={hash:"svelte-134dw7w",code:`.terms-container.svelte-134dw7w {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.terms-card.svelte-134dw7w {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-134dw7w {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-134dw7w {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-134dw7w {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-134dw7w {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-134dw7w {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-134dw7w:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.terms-card.svelte-134dw7w {padding:1.5rem;}\r
  }`};function Kg(n,e){dt(e,!1),ct(n,SS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("이용약관"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=TS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_이용약관"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Kg,{},[],[],!0);var AS=R('<div class="privacy-container svelte-8iwrwj"><div class="privacy-card svelte-8iwrwj"><div class="construction-content svelte-8iwrwj"><div class="construction-icon svelte-8iwrwj">🚧</div> <p class="construction-message svelte-8iwrwj"> </p> <p class="construction-description svelte-8iwrwj"> </p></div> <button class="back-button svelte-8iwrwj"> </button></div></div>');const PS={hash:"svelte-8iwrwj",code:`.privacy-container.svelte-8iwrwj {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.privacy-card.svelte-8iwrwj {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-8iwrwj {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-8iwrwj {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-8iwrwj {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-8iwrwj {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-8iwrwj {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-8iwrwj:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.privacy-card.svelte-8iwrwj {padding:1.5rem;}\r
  }`};function Yg(n,e){dt(e,!1),ct(n,PS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("개인정보"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=AS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_개인정보"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Yg,{},[],[],!0);var RS=R('<div class="contact-container svelte-1f7uyy3"><div class="contact-card svelte-1f7uyy3"><div class="construction-content svelte-1f7uyy3"><div class="construction-icon svelte-1f7uyy3">🚧</div> <p class="construction-message svelte-1f7uyy3"> </p> <p class="construction-description svelte-1f7uyy3"> </p></div> <button class="back-button svelte-1f7uyy3"> </button></div></div>');const NS={hash:"svelte-1f7uyy3",code:`.contact-container.svelte-1f7uyy3 {width:100%;max-width:28rem;margin:0 auto;padding:0 1rem;}.contact-card.svelte-1f7uyy3 {background-color:#ffffff;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.construction-content.svelte-1f7uyy3 {text-align:center;margin-bottom:2rem;}.construction-icon.svelte-1f7uyy3 {font-size:3rem;margin-bottom:1rem;}.construction-message.svelte-1f7uyy3 {margin:0 0 0.5rem 0;font-size:1.25rem;font-weight:600;color:#111827;}.construction-description.svelte-1f7uyy3 {margin:0;font-size:0.95rem;color:#6b7280;}.back-button.svelte-1f7uyy3 {width:100%;padding:0.75rem;background-color:#3b82f6;color:#ffffff;border:none;border-radius:0.375rem;font-size:0.95rem;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.back-button.svelte-1f7uyy3:hover {background-color:#2563eb;}\r
\r
  @media (max-width: 640px) {.contact-card.svelte-1f7uyy3 {padding:1.5rem;}\r
  }`};function Qg(n,e){dt(e,!1),ct(n,NS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();Kt(()=>{Dn(t()("문의하기"))});function i(){window.history.pushState({},"","/menu"),window.dispatchEvent(new PopStateEvent("popstate"))}wn();var o=RS(),a=d(o),l=d(a),u=h(d(l),2),f=d(u,!0);c(u);var m=h(u,2),p=d(m,!0);c(m),c(l);var b=h(l,2);b.__click=i;var g=d(b,!0);c(b),c(a),c(o),z((w,k,I)=>{_(f,w),_(p,k),_(g,I)},[()=>t()("공사중메시지"),()=>t()("공사중설명_문의하기"),()=>t()("메뉴로돌아가기")]),x(n,o),ut(),s()}Ct(["click"]);pe(Qg,{},[],[],!0);var LS=R('<div class="warning-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/user/login" class="svelte-uqnmwp"> </a></div>'),DS=R('<div class="progress-info svelte-uqnmwp"><p class="progress-category svelte-uqnmwp"> </p> <div class="progress-bar svelte-uqnmwp"><div class="progress-fill svelte-uqnmwp"></div></div> <p class="progress-text svelte-uqnmwp"> </p></div>'),$S=R('<div><span class="log-time svelte-uqnmwp"> </span> <span class="log-message svelte-uqnmwp"> </span></div>'),qS=R('<div class="logs-container svelte-uqnmwp"><h3 class="svelte-uqnmwp"> </h3> <div class="logs svelte-uqnmwp"></div></div>'),OS=R('<div class="success-box svelte-uqnmwp"><p class="svelte-uqnmwp"> </p> <a href="/post/list" class="btn-view svelte-uqnmwp"> </a></div>'),MS=R('<div class="action-box svelte-uqnmwp"><button class="btn-generate svelte-uqnmwp"> </button> <button class="btn-generate btn-news svelte-uqnmwp"> </button> <!></div> <!> <!>',1),zS=R('<div class="generator-page svelte-uqnmwp"><div class="generator-container svelte-uqnmwp"><div class="header svelte-uqnmwp"><h1 class="svelte-uqnmwp"> </h1> <p class="svelte-uqnmwp">커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p> <p class="header-detail svelte-uqnmwp">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p></div> <!></div></div>');const FS={hash:"svelte-uqnmwp",code:`.generator-page.svelte-uqnmwp {width:100%;max-width:800px;margin:0 auto;padding:2rem 1rem;}.generator-container.svelte-uqnmwp {background:white;border-radius:0.5rem;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);padding:2rem;}.header.svelte-uqnmwp {margin-bottom:2rem;text-align:center;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {margin:0 0 0.5rem 0;font-size:1.75rem;color:#111827;}.header.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 0.25rem 0;color:#6b7280;}.header-detail.svelte-uqnmwp {font-size:0.875rem;color:#9ca3af;margin-top:0.5rem;}.warning-box.svelte-uqnmwp {padding:1.5rem;background-color:#fef2f2;border:1px solid #fca5a5;border-radius:0.375rem;text-align:center;}.warning-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#991b1b;font-weight:500;}.warning-box.svelte-uqnmwp a:where(.svelte-uqnmwp) {display:inline-block;padding:0.5rem 1rem;background-color:#3b82f6;color:white;text-decoration:none;border-radius:0.375rem;}.action-box.svelte-uqnmwp {margin-bottom:2rem;display:flex;flex-direction:column;gap:1rem;}.btn-generate.svelte-uqnmwp {width:100%;padding:1rem;background-color:#3b82f6;color:white;border:none;border-radius:0.375rem;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.btn-generate.svelte-uqnmwp:hover:not(:disabled) {background-color:#2563eb;}.btn-generate.svelte-uqnmwp:disabled {opacity:0.5;cursor:not-allowed;}\r
\r
  /* 뉴스 버튼 스타일 (초록색) */.btn-news.svelte-uqnmwp {background-color:#10b981;}.btn-news.svelte-uqnmwp:hover:not(:disabled) {background-color:#059669;}.progress-info.svelte-uqnmwp {margin-top:1.5rem;}.progress-category.svelte-uqnmwp {margin:0 0 0.5rem 0;font-weight:600;color:#111827;}.progress-bar.svelte-uqnmwp {width:100%;height:8px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;}.progress-fill.svelte-uqnmwp {height:100%;background-color:#3b82f6;transition:width 0.3s;}.progress-text.svelte-uqnmwp {margin:0;text-align:center;color:#6b7280;font-size:0.875rem;}.logs-container.svelte-uqnmwp {margin-top:2rem;}.logs-container.svelte-uqnmwp h3:where(.svelte-uqnmwp) {margin:0 0 1rem 0;font-size:1.125rem;color:#111827;}.logs.svelte-uqnmwp {max-height:400px;overflow-y:auto;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:0.375rem;padding:1rem;}.log-item.svelte-uqnmwp {display:flex;gap:0.75rem;margin-bottom:0.5rem;font-size:0.875rem;font-family:'Courier New', monospace;}.log-time.svelte-uqnmwp {color:#9ca3af;flex-shrink:0;}.log-message.svelte-uqnmwp {flex:1;}.log-info.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#374151;}.log-success.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#059669;font-weight:500;}.log-error.svelte-uqnmwp .log-message:where(.svelte-uqnmwp) {color:#dc2626;font-weight:500;}.success-box.svelte-uqnmwp {margin-top:2rem;padding:1.5rem;background-color:#d1fae5;border:1px solid #6ee7b7;border-radius:0.375rem;text-align:center;}.success-box.svelte-uqnmwp p:where(.svelte-uqnmwp) {margin:0 0 1rem 0;color:#065f46;font-weight:500;font-size:1.125rem;}.btn-view.svelte-uqnmwp {display:inline-block;padding:0.75rem 1.5rem;background-color:#10b981;color:white;text-decoration:none;border-radius:0.375rem;font-weight:500;}.btn-view.svelte-uqnmwp:hover {background-color:#059669;}\r
\r
  @media (max-width: 640px) {.generator-page.svelte-uqnmwp {padding:1rem 0.5rem;}.generator-container.svelte-uqnmwp {padding:1.5rem;}.header.svelte-uqnmwp h1:where(.svelte-uqnmwp) {font-size:1.5rem;}\r
  }`};function Jg(n,e){dt(e,!0),ct(n,FS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();let i=ne(!1),o=ne(!1),a=ne(an({current:0,total:0,category:""})),l=ne(an([])),u=ne(!1);Kt(()=>{Dn(t()("테스트게시글생성타이틀"))});function f(T,N="info"){y(l,[...v(l),{message:T,type:N,time:new Date().toLocaleTimeString()}],!0)}const m={community:{titles:["오늘 처음 가입했어요! 반갑습니다 🎉","주말에 뭐하고 노시나요?","요즘 핫한 맛집 추천 부탁드려요","이 동네 살기 어떤가요?","반려동물 키우시는 분 계세요?","동네 산책로 추천해주세요","오늘 날씨 너무 좋네요 ☀️","주변에 좋은 카페 있나요?","같이 운동하실 분 계실까요?","저녁 메뉴 추천 부탁드립니다","새로 이사왔는데 인사드려요!","동네 소식 공유해요","취미 생활 공유하실 분?","오늘 하루 어땠나요?","주말 모임 만들어볼까요?"],contents:["안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!","주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!","최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!","이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!","반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!"]},news:{titles:["이번 주말 동네 축제 소식","새로운 지하철 노선 개통 예정","지역 도서관 리모델링 완료","주민센터 새로운 서비스 시작","동네 공원 벚꽃 축제 안내","지역 체육센터 신규 프로그램","무료 건강검진 일정 안내","마을버스 노선 변경 공지"],contents:["{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.","{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.","{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!"]}},p={name:["김철수","이영희","박민수","정수연","최동현","강지은"],activity:["등산","자전거 타기","카페 투어","영화 보기","독서","요리"],place:["공원","카페","도서관","헬스장","산책로","맛집"],years:["1","2","3","5"],pet:["강아지","고양이"],time:["아침","저녁","주말"],service:["병원","약국","세탁소","미용실"],problem:["이사","청소","수리","배달"],item:["자전거","책","옷","악기","운동기구"],condition:["깨끗한","새것같은","사용감 적은"],price:["1만원","2만원","3만원"],period:["6개월","1년"],date:["이번 주말","다음 주"],event:["축제","행사","모임"],organization:["주민센터","구청"],facility:["도서관","체육센터"],action:["개장","리모델링"]};function b(T){return T[Math.floor(Math.random()*T.length)]}function g(T){let N=T;for(const[$,j]of Object.entries(p)){const K=new RegExp(`\\{${$}\\}`,"g");N=N.replace(K,b(j))}return N}async function w(){if(!Se.isAuthenticated||!Se.uid){f(t()("로그인필요"),"error");return}y(i,!0),y(u,!1),y(l,[],!0),f(t()("테스트데이터생성시작"),"success"),f(t()("사용자정보",{user:Se.data?.displayName||Se.email}),"info");const T="community",N=t()("커뮤니티");y(a,{current:0,total:100,category:N},!0),f(t()("카테고리생성중",{category:N}),"info");const $=m.community;let j=0;const K=Date.now();for(let ee=0;ee<100;ee++)try{const W=g(b($.titles)),Z=`${ee+1}. ${W}`,ce=g(b($.contents)),ae=K-Math.floor(Math.random()*30*24*60*60*1e3),ie={uid:Se.uid,title:Z,content:ce,author:Se.data?.displayName||Se.email||t()("익명"),category:T,order:`${T}-${ae}`,createdAt:ae,updatedAt:K,likeCount:0,commentCount:0},H=Pt(Tt,"posts");await mo(H,ie),j++,y(a,{...v(a),current:ee+1},!0),(ee+1)%20===0&&f(t()("생성진행",{current:ee+1,total:100}),"success"),await new Promise(Y=>setTimeout(Y,50))}catch(W){f(t()("생성실패",{error:W.message}),"error")}f(t()("카테고리생성완료",{category:N,count:j}),"success"),f(t()("모든데이터생성완료"),"success"),f(t()("총100개생성"),"success"),y(i,!1),y(u,!0)}async function k(){if(!Se.isAuthenticated||!Se.uid){f(t()("로그인필요"),"error");return}y(o,!0),y(u,!1),y(l,[],!0),f("뉴스 게시판 글 생성 시작","success"),f(t()("사용자정보",{user:Se.data?.displayName||Se.email}),"info");const T="news",N="뉴스",$=200;y(a,{current:0,total:$,category:N},!0),f(`${N} 카테고리에 ${$}개 글 생성 중...`,"info");const j=m.news;let K=0;const ee=Date.now();for(let W=0;W<$;W++)try{const Z=g(b(j.titles)),ce=`${W+1}. ${Z}`,ae=g(b(j.contents)),ie=ee-($-1-W)*1e3,H={uid:Se.uid,title:ce,content:ae,author:Se.data?.displayName||Se.email||t()("익명"),category:T,order:`${T}-${ie}`,createdAt:ie,updatedAt:ee,likeCount:0,commentCount:0},Y=Pt(Tt,"posts");await mo(Y,H),K++,y(a,{...v(a),current:W+1},!0),(W+1)%50===0&&f(`${W+1}/${$} 글 생성 완료`,"success"),await new Promise(J=>setTimeout(J,50))}catch(Z){f(`글 생성 실패: ${Z.message}`,"error")}f(`${N} 카테고리 생성 완료: ${K}개`,"success"),f("모든 뉴스 게시글 생성 완료!","success"),f(`총 ${K}/${$}개 생성됨`,"success"),y(o,!1),y(u,!0)}var I=zS(),P=d(I),C=d(P),L=d(C),D=d(L,!0);c(L),At(4),c(C);var q=h(C,2);{var A=T=>{var N=LS(),$=d(N),j=d($,!0);c($);var K=h($,2),ee=d(K,!0);c(K),c(N),z((W,Z)=>{_(j,W),_(ee,Z)},[()=>t()("로그인필요"),()=>t()("로그인하러가기")]),x(T,N)},E=T=>{var N=MS(),$=le(N),j=d($);j.__click=w;var K=d(j,!0);c(j);var ee=h(j,2);ee.__click=k;var W=d(ee,!0);c(ee);var Z=h(ee,2);{var ce=J=>{var te=DS(),ue=d(te),U=d(ue,!0);c(ue);var S=h(ue,2),M=d(S);c(S);var B=h(S,2),O=d(B);c(B),c(te),z(()=>{_(U,v(a).category),Ba(M,`width: ${v(a).current/v(a).total*100}%`),_(O,`${v(a).current??""} / ${v(a).total??""}`)}),x(J,te)};G(Z,J=>{(v(i)||v(o))&&J(ce)})}c($);var ae=h($,2);{var ie=J=>{var te=qS(),ue=d(te),U=d(ue,!0);c(ue);var S=h(ue,2);Zt(S,21,()=>v(l),pr,(M,B)=>{var O=$S(),Q=d(O),F=d(Q,!0);c(Q);var se=h(Q,2),oe=d(se,!0);c(se),c(O),z(()=>{sn(O,1,`log-item log-${v(B).type??""}`,"svelte-uqnmwp"),_(F,v(B).time),_(oe,v(B).message)}),x(M,O)}),c(S),c(te),z(M=>_(U,M),[()=>t()("실행로그")]),x(J,te)};G(ae,J=>{v(l).length>0&&J(ie)})}var H=h(ae,2);{var Y=J=>{var te=OS(),ue=d(te),U=d(ue,!0);c(ue);var S=h(ue,2),M=d(S,!0);c(S),c(te),z((B,O)=>{_(U,B),_(M,O)},[()=>t()("생성완료확인메시지"),()=>t()("게시판보기")]),x(J,te)};G(H,J=>{v(u)&&J(Y)})}z(J=>{j.disabled=v(i)||v(o),_(K,J),ee.disabled=v(i)||v(o),_(W,v(o)?"생성 중...":"뉴스 글 200개 생성 (1초 간격)")},[()=>v(i)?t()("생성중"):"커뮤니티 글 100개 생성"]),x(T,N)};G(q,T=>{Se.isAuthenticated?T(E,!1):T(A)})}c(P),c(I),z(T=>_(D,T),[()=>t()("테스트게시글생성타이틀")]),x(n,I),ut(),s()}Ct(["click"]);pe(Jg,{},[],[],!0);var US=R('<div class="dev-history svelte-1vras8s"><div class="background-gradient svelte-1vras8s"></div> <div class="container svelte-1vras8s"><div class="header svelte-1vras8s"><h1 class="title svelte-1vras8s"> </h1> <p class="subtitle svelte-1vras8s"> </p> <div class="update-indicator svelte-1vras8s"><span class="indicator-dot svelte-1vras8s"></span> </div></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="timeline-section svelte-1vras8s"><div class="date-header svelte-1vras8s"><h2 class="date-title svelte-1vras8s"> </h2></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div> <div class="card svelte-1vras8s"><h3 class="card-title svelte-1vras8s"> </h3> <ul class="item-list svelte-1vras8s"><li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li> <li class="item svelte-1vras8s"><span class="bullet svelte-1vras8s">•</span> <span> </span></li></ul></div></div> <div class="divider svelte-1vras8s"></div> <div class="upcoming-card svelte-1vras8s"> </div></div></div>');const jS={hash:"svelte-1vras8s",code:`\r
  /* 메인 컨테이너 */.dev-history.svelte-1vras8s {position:relative;min-height:100vh;background:#f0f2f5;padding:1.5rem;}\r
\r
  /* 배경 그라디언트 */.background-gradient.svelte-1vras8s {position:absolute;inset:0;background:radial-gradient(\r
        circle at top,\r
        rgba(198, 219, 255, 0.35),\r
        transparent 55%\r
      ),\r
      radial-gradient(\r
        circle at bottom,\r
        rgba(214, 233, 218, 0.3),\r
        transparent 60%\r
      );pointer-events:none;}\r
\r
  /* 컨테이너 */.container.svelte-1vras8s {position:relative;max-width:48rem;margin:0 auto;display:flex;flex-direction:column;gap:2rem;}\r
\r
  /* 헤더 섹션 */.header.svelte-1vras8s {display:flex;flex-direction:column;gap:0.5rem;}.title.svelte-1vras8s {font-size:2.25rem;font-weight:700;color:#050505;margin:0;letter-spacing:-0.025em;line-height:1.2;}.subtitle.svelte-1vras8s {font-size:0.875rem;color:#5d6472;margin:0;line-height:1.5;}\r
\r
  /* 업데이트 인디케이터 */.update-indicator.svelte-1vras8s {display:inline-flex;align-items:center;gap:0.5rem;width:fit-content;padding:0.25rem 0.75rem;background:rgba(255, 255, 255, 0.9);border:1px solid rgba(255, 255, 255, 0.7);border-radius:9999px;font-size:0.75rem;font-weight:500;color:#1877f2;box-shadow:0 1px 3px rgba(207, 219, 244, 0.5);backdrop-filter:blur(8px);}.indicator-dot.svelte-1vras8s {display:inline-block;width:0.5rem;height:0.5rem;background:#44c46f;border-radius:50%;box-shadow:0 0 6px rgba(68, 196, 111, 0.45);}\r
\r
  /* 타임라인 섹션 */.timeline-section.svelte-1vras8s {display:flex;flex-direction:column;gap:1rem;}\r
\r
  /* 날짜 헤더 */.date-header.svelte-1vras8s {background:rgba(255, 255, 255, 0.8);border-left:4px solid #1877f2;padding:1rem;box-shadow:0 1px 3px rgba(190, 212, 255, 0.4);}.date-title.svelte-1vras8s {font-size:1.5rem;font-weight:600;color:#050505;margin:0;}\r
\r
  /* 카드 */.card.svelte-1vras8s {background:rgba(255, 255, 255, 0.95);border:1px solid rgba(255, 255, 255, 0.6);border-radius:1.5rem;padding:1.5rem;box-shadow:0 10px 25px rgba(204, 217, 240, 0.45);backdrop-filter:blur(8px);display:flex;flex-direction:column;gap:0.75rem;}.card-title.svelte-1vras8s {font-size:1.125rem;font-weight:600;color:#050505;margin:0;display:flex;align-items:center;gap:0.5rem;}\r
\r
  /* 아이템 리스트 */.item-list.svelte-1vras8s {list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem;}.item.svelte-1vras8s {display:flex;align-items:flex-start;gap:0.75rem;font-size:0.875rem;color:#5d6472;line-height:1.6;}.bullet.svelte-1vras8s {color:#1877f2;margin-top:0.25rem;flex-shrink:0;}\r
\r
  /* 구분선 */.divider.svelte-1vras8s {border-top:1px solid #dfe1e6;margin:1rem 0;}\r
\r
  /* 향후 로그 카드 */.upcoming-card.svelte-1vras8s {background:rgba(255, 255, 255, 0.95);border:1px solid rgba(255, 255, 255, 0.6);border-radius:1.5rem;padding:2rem;text-align:center;font-size:0.875rem;color:#5d6472;box-shadow:0 10px 25px rgba(204, 217, 240, 0.45);backdrop-filter:blur(8px);}\r
\r
  /* 반응형 디자인 */\r
  @media (max-width: 768px) {.dev-history.svelte-1vras8s {padding:1rem;}.title.svelte-1vras8s {font-size:1.875rem;}.card.svelte-1vras8s {padding:1.25rem;}.date-title.svelte-1vras8s {font-size:1.25rem;}\r
  }\r
\r
  @media (max-width: 640px) {.title.svelte-1vras8s {font-size:1.5rem;}.subtitle.svelte-1vras8s {font-size:0.8125rem;}.card.svelte-1vras8s {padding:1rem;border-radius:1rem;}.card-title.svelte-1vras8s {font-size:1rem;}.item.svelte-1vras8s {font-size:0.8125rem;}.upcoming-card.svelte-1vras8s {padding:1.5rem;font-size:0.8125rem;}\r
  }`};function Xg(n,e){dt(e,!1),ct(n,jS);const t=()=>lt(zt,"$t",r),[r,s]=Nt();wn();var i=US(),o=h(d(i),2),a=d(o),l=d(a),u=d(l,!0);c(l);var f=h(l,2),m=d(f,!0);c(f);var p=h(f,2),b=h(d(p));c(p),c(a);var g=h(a,2),w=d(g),k=d(w),I=d(k,!0);c(k),c(w);var P=h(w,2),C=d(P),L=d(C,!0);c(C);var D=h(C,2),q=d(D),A=h(d(q),2),E=d(A,!0);c(A),c(q);var T=h(q,2),N=h(d(T),2),$=d(N,!0);c(N),c(T);var j=h(T,2),K=h(d(j),2),ee=d(K,!0);c(K),c(j);var W=h(j,2),Z=h(d(W),2),ce=d(Z,!0);c(Z),c(W);var ae=h(W,2),ie=h(d(ae),2),H=d(ie,!0);c(ie),c(ae),c(D),c(P);var Y=h(P,2),J=d(Y),te=d(J,!0);c(J);var ue=h(J,2),U=d(ue),S=h(d(U),2),M=d(S,!0);c(S),c(U);var B=h(U,2),O=h(d(B),2),Q=d(O,!0);c(O),c(B);var F=h(B,2),se=h(d(F),2),oe=d(se,!0);c(se),c(F);var Ee=h(F,2),re=h(d(Ee),2),be=d(re,!0);c(re),c(Ee),c(ue),c(Y),c(g);var ye=h(g,4),Pe=d(ye),Le=d(Pe),ze=d(Le,!0);c(Le),c(Pe);var Oe=h(Pe,2),We=d(Oe),Ye=d(We,!0);c(We);var tt=h(We,2),Ue=d(tt),st=h(d(Ue),2),Me=d(st,!0);c(st),c(Ue);var _e=h(Ue,2),ve=h(d(_e),2),Te=d(ve,!0);c(ve),c(_e);var Re=h(_e,2),it=h(d(Re),2),St=d(it,!0);c(it),c(Re);var kt=h(Re,2),pt=h(d(kt),2),Ut=d(pt,!0);c(pt),c(kt);var Vt=h(kt,2),nn=h(d(Vt),2),fe=d(nn,!0);c(nn),c(Vt),c(tt),c(Oe);var ge=h(Oe,2),we=d(ge),Ce=d(we,!0);c(we);var De=h(we,2),$e=d(De),V=h(d($e),2),he=d(V,!0);c(V),c($e);var ke=h($e,2),nt=h(d(ke),2),Xe=d(nt,!0);c(nt),c(ke);var Ze=h(ke,2),ot=h(d(Ze),2),et=d(ot,!0);c(ot),c(Ze);var rt=h(Ze,2),gt=h(d(rt),2),Ft=d(gt,!0);c(gt),c(rt);var Dt=h(rt,2),Bt=h(d(Dt),2),Ne=d(Bt,!0);c(Bt),c(Dt),c(De),c(ge),c(ye);var Ge=h(ye,4),Je=d(Ge),xt=d(Je),un=d(xt,!0);c(xt),c(Je);var rn=h(Je,2),Xn=d(rn),yi=d(Xn,!0);c(Xn);var Oo=h(Xn,2),xi=d(Oo),qs=h(d(xi),2),Mo=d(qs,!0);c(qs),c(xi);var ki=h(xi,2),Fn=h(d(ki),2),rb=d(Fn,!0);c(Fn),c(ki);var dl=h(ki,2),Iu=h(d(dl),2),sb=d(Iu,!0);c(Iu),c(dl);var ul=h(dl,2),Cu=h(d(ul),2),ib=d(Cu,!0);c(Cu),c(ul);var Tu=h(ul,2),Su=h(d(Tu),2),ob=d(Su,!0);c(Su),c(Tu),c(Oo),c(rn);var Au=h(rn,2),hl=d(Au),ab=d(hl,!0);c(hl);var Pu=h(hl,2),fl=d(Pu),Ru=h(d(fl),2),lb=d(Ru,!0);c(Ru),c(fl);var pl=h(fl,2),Nu=h(d(pl),2),cb=d(Nu,!0);c(Nu),c(pl);var vl=h(pl,2),Lu=h(d(vl),2),db=d(Lu,!0);c(Lu),c(vl);var Du=h(vl,2),$u=h(d(Du),2),ub=d($u,!0);c($u),c(Du),c(Pu),c(Au),c(Ge);var ml=h(Ge,4),gl=d(ml),qu=d(gl),hb=d(qu,!0);c(qu),c(gl);var bl=h(gl,2),_l=d(bl),fb=d(_l,!0);c(_l);var Ou=h(_l,2),wl=d(Ou),Mu=h(d(wl),2),pb=d(Mu,!0);c(Mu),c(wl);var yl=h(wl,2),zu=h(d(yl),2),vb=d(zu,!0);c(zu),c(yl);var xl=h(yl,2),Fu=h(d(xl),2),mb=d(Fu,!0);c(Fu),c(xl);var kl=h(xl,2),Uu=h(d(kl),2),gb=d(Uu,!0);c(Uu),c(kl);var ju=h(kl,2),Vu=h(d(ju),2),bb=d(Vu,!0);c(Vu),c(ju),c(Ou),c(bl);var Bu=h(bl,2),El=d(Bu),_b=d(El,!0);c(El);var Hu=h(El,2),Il=d(Hu),Wu=h(d(Il),2),wb=d(Wu,!0);c(Wu),c(Il);var Cl=h(Il,2),Gu=h(d(Cl),2),yb=d(Gu,!0);c(Gu),c(Cl);var Tl=h(Cl,2),Ku=h(d(Tl),2),xb=d(Ku,!0);c(Ku),c(Tl);var Yu=h(Tl,2),Qu=h(d(Yu),2),kb=d(Qu,!0);c(Qu),c(Yu),c(Hu),c(Bu),c(ml);var Ju=h(ml,4),Eb=d(Ju,!0);c(Ju),c(o),c(i),z((Ib,Cb,Tb,Sb,Ab,Pb,Rb,Nb,Lb,Db,$b,qb,Ob,Mb,zb,Fb,Ub,jb,Vb,Bb,Hb,Wb,Gb,Kb,Yb,Qb,Jb,Xb,Zb,e_,t_,n_,r_,s_,i_,o_,a_,l_,c_,d_,u_,h_,f_,p_,v_,m_,g_,b_,__,w_,y_,x_,k_)=>{_(u,Ib),_(m,Cb),_(b,` ${Tb??""}`),_(I,Sb),_(L,Ab),_(E,Pb),_($,Rb),_(ee,Nb),_(ce,Lb),_(H,Db),_(te,$b),_(M,qb),_(Q,Ob),_(oe,Mb),_(be,zb),_(ze,Fb),_(Ye,Ub),_(Me,jb),_(Te,Vb),_(St,Bb),_(Ut,Hb),_(fe,Wb),_(Ce,Gb),_(he,Kb),_(Xe,Yb),_(et,Qb),_(Ft,Jb),_(Ne,Xb),_(un,Zb),_(yi,e_),_(Mo,t_),_(rb,n_),_(sb,r_),_(ib,s_),_(ob,i_),_(ab,o_),_(lb,a_),_(cb,l_),_(db,c_),_(ub,d_),_(hb,u_),_(fb,h_),_(pb,f_),_(vb,p_),_(mb,v_),_(gb,m_),_(bb,g_),_(_b,b_),_(wb,__),_(yb,w_),_(xb,y_),_(kb,x_),_(Eb,k_)},[()=>t()("dev.history.title"),()=>t()("dev.history.subtitle"),()=>t()("dev.history.updateIndicator"),()=>t()("dev.history.seminar4.date"),()=>t()("dev.history.seminar4.completed"),()=>t()("dev.history.seminar4.item1"),()=>t()("dev.history.seminar4.item2"),()=>t()("dev.history.seminar4.item3"),()=>t()("dev.history.seminar4.item4"),()=>t()("dev.history.seminar4.item5"),()=>t()("dev.history.seminar4.learned"),()=>t()("dev.history.seminar4.learned1"),()=>t()("dev.history.seminar4.learned2"),()=>t()("dev.history.seminar4.learned3"),()=>t()("dev.history.seminar4.learned4"),()=>t()("dev.history.seminar3.date"),()=>t()("dev.history.seminar3.completed"),()=>t()("dev.history.seminar3.item1"),()=>t()("dev.history.seminar3.item2"),()=>t()("dev.history.seminar3.item3"),()=>t()("dev.history.seminar3.item4"),()=>t()("dev.history.seminar3.item5"),()=>t()("dev.history.seminar3.learned"),()=>t()("dev.history.seminar3.learned1"),()=>t()("dev.history.seminar3.learned2"),()=>t()("dev.history.seminar3.learned3"),()=>t()("dev.history.seminar3.learned4"),()=>t()("dev.history.seminar3.learned5"),()=>t()("dev.history.seminar2.date"),()=>t()("dev.history.seminar2.completed"),()=>t()("dev.history.seminar2.item1"),()=>t()("dev.history.seminar2.item2"),()=>t()("dev.history.seminar2.item3"),()=>t()("dev.history.seminar2.item4"),()=>t()("dev.history.seminar2.item5"),()=>t()("dev.history.seminar2.learned"),()=>t()("dev.history.seminar2.learned1"),()=>t()("dev.history.seminar2.learned2"),()=>t()("dev.history.seminar2.learned3"),()=>t()("dev.history.seminar2.learned4"),()=>t()("dev.history.seminar1.date"),()=>t()("dev.history.seminar1.completed"),()=>t()("dev.history.seminar1.item1"),()=>t()("dev.history.seminar1.item2"),()=>t()("dev.history.seminar1.item3"),()=>t()("dev.history.seminar1.item4"),()=>t()("dev.history.seminar1.item5"),()=>t()("dev.history.seminar1.learned"),()=>t()("dev.history.seminar1.learned1"),()=>t()("dev.history.seminar1.learned2"),()=>t()("dev.history.seminar1.learned3"),()=>t()("dev.history.seminar1.learned4"),()=>t()("dev.history.upcoming")]),x(n,i),ut(),s()}pe(Xg,{},[],[],!0);var VS=R(`<div class="sed-page svelte-bwqu3o"><div class="background-gradient svelte-bwqu3o"></div> <div class="container svelte-bwqu3o"><div class="header svelte-bwqu3o"><h1 class="title svelte-bwqu3o">🧩 Spec-Exact Development (SED)</h1> <p class="subtitle svelte-bwqu3o">"AI develops exactly as the spec defines — no interpretation, no
        assumption."</p></div> <div class="section origin-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">💡 탄생 배경</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">바이브코딩의 한계를 극복하기 위해 <strong class="svelte-bwqu3o">2025년 11월 4일 "송재호"</strong>가 만든 새로운 개발 방법론</p> <p class="highlight-text svelte-bwqu3o"><strong class="svelte-bwqu3o">이름하여 SED (Spec-Exact Development)</strong></p> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">기존 방식의 문제점:</strong></p> <ul class="problem-list svelte-bwqu3o"><li class="svelte-bwqu3o">spec, context, skill은 두리뭉실한 설명</li> <li class="svelte-bwqu3o">mcp는 단편적인 정보만 제공</li> <li class="svelte-bwqu3o">AI가 자유롭게 해석하여 예상치 못한 결과 발생</li></ul> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">SED의 해결책:</strong></p> <ul class="solution-list svelte-bwqu3o"><li class="svelte-bwqu3o">완전한 설계도를 AI에게 제공</li> <li class="svelte-bwqu3o">AI는 추론하지 않고 설계도를 정확히 따름</li> <li class="svelte-bwqu3o">명세를 절대적 기준으로 삼아 일관성 보장</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 1. 개념 정의</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">Spec-Exact Development (SED)</strong>는 인공지능 기반 개발
          패러다임으로,<br/> AI가 명세(specification)에 단 한 줄도 벗어나지 않고 개발을 수행하는 체계를
          말합니다.</p> <p class="svelte-bwqu3o">스펙은 절대적 기준이며,<br/> AI는 이를 해석하거나 추론하지 않고, 오직 명세된 대로 실행합니다.</p> <p class="svelte-bwqu3o"><strong class="svelte-bwqu3o">그만큼 스펙이 정밀하고, 완벽해야한다는 것입니다.</strong></p> <p class="svelte-bwqu3o">즉, <strong class="svelte-bwqu3o">완전한 설계도를 AI 에게 제공하며, AI 는 한치의 오차도 없이, 설계도
            대로 만드는 것입니다.</strong></p> <blockquote class="quote svelte-bwqu3o">"If the spec is wrong, the product is wrong — by design."<br/> <span class="quote-sub svelte-bwqu3o">(스펙이 틀리면, 제품도 틀리다. 하지만 그것이 의도다.)</span></blockquote></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 2. 기본 원칙</h2> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">1. Spec-Exactness Principle</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">개발은 오직 스펙에 정의된 내용만을 수행한다.</li> <li class="svelte-bwqu3o">스펙이 불완전하면, AI는 즉시 Spec Error를 반환하고 개발을 중단한다.</li></ul></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">2. Spec Completeness Scoring</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">개발 시작 전, AI는 주어진 스펙을 평가하여 <strong>점수(0~100점)</strong>를 매긴다.</li> <li class="svelte-bwqu3o"><strong>90점 이상</strong>이어야 개발이 시작된다.</li> <li class="svelte-bwqu3o">점수 기준은 다음 요소로 구성된다: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">데이터베이스 설계의 완전성</li> <li class="svelte-bwqu3o">비즈니스 로직의 명확성</li> <li class="svelte-bwqu3o">UI/UX 요구사항의 구체성</li> <li class="svelte-bwqu3o">테스트 계획의 상세도 (unit/widget/e2e)</li> <li class="svelte-bwqu3o">배포 및 운영 환경 정의</li></ul></li></ul> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">예시: 스펙 점수 부족 시 에러</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecError: Insufficient specification to execute.
Reason: Database schema, authentication flow, or encryption detail missing.
Required Spec Score: ≥90
Current Score: 42</code></pre></div></div> <div class="principle-card svelte-bwqu3o"><h3 class="principle-title svelte-bwqu3o">3. Spec is the Law</h3> <ul class="principle-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 인간의 의도를 추론하지 않는다.</li> <li class="svelte-bwqu3o">스펙에 모호한 문장이 있으면, 그 부분은 수행되지 않는다.</li> <li class="svelte-bwqu3o">"추측"은 금지이며, "기록된 것만" 실행한다.</li> <li class="svelte-bwqu3o"><strong>스펙은 절대 기준이지만, 스펙 자체에도 오류가 있을 수 있다.</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">스펙에 오류가 있어도 AI는 추론하지 않고 스펙을 반드시 따른다.</li> <li class="svelte-bwqu3o">스펙의 오류가 의심되면, AI는 개발자에게 확인(검수)이나 수정
                요청을 할 수 있다.</li> <li class="svelte-bwqu3o"><strong>AI는 인간에게 스펙 수정을 요청할 수 있지만, AI 스스로 스펙을
                  수정할 수 없다.</strong></li> <li class="svelte-bwqu3o">결론적으로 AI는 반드시 스펙을 따르는 것이 원칙이다.</li></ul></li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 3. 개발 프로세스 단계</h2> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🧱 준비 단계 (Preparation Phase)</h3> <p>AI는 개발자가 제공한 스펙을 분석하고 점수를 부여한다. SED에서는 준비
          단계부터 스펙을 입체적으로 설계해 두어야 이후 단계가 순조롭게
          진행된다.</p> <ol class="phase-steps svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>스펙 줄거리 작성</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 제품의 흐름을 설명하는 <strong>전체 줄거리</strong>와
                기능별·모듈별 <strong>세부 줄거리</strong>를 100 개 이상의
                항목으로 정해서 각각 작성한다.</li> <li class="svelte-bwqu3o">완전한 SNS 웹/앱 서비스라면 줄거리는 약 1만 토큰(약 14페이지)
                분량으로 정리한다.</li> <li class="svelte-bwqu3o">실제 상세 스펙은 이 줄거리 대비 최소 20배(약 2,800페이지) 이상이
                되어야 하며, 필요에 따라 더 많거나 적을 수 있다. 줄거리
                단계에서부터 이 규모를 염두에 두고 설계한다.</li> <li class="svelte-bwqu3o">각 줄거리는 핵심 목표, 주요 사용자 역할, 핵심 기능 흐름을 한눈에
                이해할 수 있도록 요약한다.</li></ul></li> <li class="svelte-bwqu3o"><strong>상세 스펙 작성</strong> <p class="phase-step-description svelte-bwqu3o">줄거리에서 파생된 모든 세부 항목을 설계도 수준으로 정리하되,
              중복되거나 잡다한 설명을 제거하고 꼭 필요한 정보만 남긴다.</p> <div class="highlight-box svelte-bwqu3o" style="margin-bottom: 1.5rem;">⚠️ <strong>스펙 소유권과 개인 철학</strong><br/> 다른 사람이 만든 스펙을 복사하거나, 인공지능에게 스펙을 만들라고 해서
              도움을 받을 수 있지만, 결국 무엇을 만들 지는 인간 스스로 결정하는 것이므로,
              스펙의 모든 내용을 숙지하고, 개인의 철학이 담길 수 있도록 수정해야
              합니다.</div> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DB 설계 (데이터베이스 명세)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DBMS 종류 및 버전:</strong> MySQL 8.0.35 Community Edition</li> <li class="svelte-bwqu3o"><strong>호스팅 환경:</strong> Self-hosted on AWS EC2 t3.medium
                    (2 vCPU, 4GB RAM)</li> <li class="svelte-bwqu3o"><strong>운영 체제:</strong> Ubuntu 22.04.3 LTS (Jammy Jellyfish)</li> <li class="svelte-bwqu3o"><strong>네트워크 정보:</strong> Private IP 10.0.1.50, Port 3306,
                    SSH Port 22</li> <li class="svelte-bwqu3o"><strong>접근 계정:</strong> dev@10.0.1.50 (SSH key: ~/.ssh/dev_rsa),
                    DB user: app_dev / password stored in .env</li> <li class="svelte-bwqu3o"><strong>SQL 버전 및 설정:</strong> SQL Mode = STRICT_TRANS_TABLES,
                    Character Set = utf8mb4, Collation = utf8mb4_unicode_ci</li> <li class="svelte-bwqu3o"><strong>테이블 구조:</strong> users (id, email, password_hash,
                    created_at), posts (id, user_id, title, content, created_at),
                    comments (id, post_id, user_id, content)</li> <li class="svelte-bwqu3o"><strong>인덱스:</strong> users.email (UNIQUE), posts.user_id
                    (INDEX), comments.post_id + created_at (COMPOSITE INDEX)</li> <li class="svelte-bwqu3o"><strong>외래 키:</strong> posts.user_id → users.id (ON DELETE
                    CASCADE), comments.post_id → posts.id (ON DELETE CASCADE)</li> <li class="svelte-bwqu3o"><strong>트랜잭션 격리 수준:</strong> READ COMMITTED (InnoDB 엔진
                    사용)</li> <li class="svelte-bwqu3o"><strong>백업 정책:</strong> Daily full backup at 03:00 UTC via
                    mysqldump, 7일간 보관</li> <li class="svelte-bwqu3o"><strong>유틸리티 버전:</strong> mysqldump 8.0.35, mysql-client
                    8.0.35, pt-online-schema-change 3.5.0</li></ul></li> <li class="svelte-bwqu3o"><strong>기능 명세 (Feature Specification)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>회원가입 (User Registration):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">이메일/비밀번호 회원가입: 이메일 형식 검증 (RFC 5322),
                        비밀번호 최소 8자 + 대소문자 + 숫자 + 특수문자 조합</li> <li class="svelte-bwqu3o">전화번호 인증: Twilio API v2022-05-01 사용, SMS 6자리
                        OTP, 유효시간 5분</li> <li class="svelte-bwqu3o">SNS 로그인: Google OAuth 2.0 (Client ID: xxx), Facebook
                        Login v18.0, Apple Sign-In (Team ID: xxx)</li> <li class="svelte-bwqu3o">비밀번호 암호화: bcrypt (cost factor 12), salt rounds 10</li> <li class="svelte-bwqu3o">이메일 인증: SendGrid API v3 사용, 인증 링크 유효시간
                        24시간</li> <li class="svelte-bwqu3o">중복 검사: 이메일 중복 검사 (DB UNIQUE 제약 +
                        애플리케이션 레벨 검증)</li> <li class="svelte-bwqu3o">에러 처리: 409 Conflict (이미 존재하는 이메일), 400 Bad
                        Request (잘못된 형식), 500 Internal Server Error (서버
                        오류)</li></ul></li> <li class="svelte-bwqu3o"><strong>게시판 (Forum):</strong> CRUD 작업, 페이지네이션 (한
                    페이지당 20개), 정렬 기준 (최신순/조회수/좋아요), 검색 (제목/내용/작성자),
                    파일 업로드 (이미지 최대 5MB, 형식: JPG/PNG/GIF)</li> <li class="svelte-bwqu3o"><strong>결제 (Payment):</strong> Stripe API v2023-10-16, PG사:
                    Stripe + Toss Payments, 결제 수단 (카드/계좌이체/간편결제), 결제
                    금액 범위 (최소 1,000원 ~ 최대 10,000,000원)</li> <li class="svelte-bwqu3o"><strong>알림 (Notification):</strong> Firebase Cloud Messaging
                    (FCM) v1 API, 푸시 알림 (댓글/좋아요/멘션), 이메일 알림 (일일
                    요약/주간 리포트), 알림 설정 (사용자별 ON/OFF)</li> <li class="svelte-bwqu3o"><strong>라우팅 (Routing Specification):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">SED 명세는 <strong>특징적으로 모든 라우트 경로를 직접 만들어주는 것이
                          원칙</strong>이므로, 예: <code>/auth/signup</code>, <code>/auth/verify</code>, <code>/dashboard</code>처럼
                        실제 경로를 스펙에 기록한다.</li> <li class="svelte-bwqu3o">회원가입은 어느 경로에서 시작되고 (<code>/auth/signup</code>), 완료 후 어느 경로로 이동하는지 (<code>/onboarding/profile</code> 등)까지 반드시 명시한다.</li> <li class="svelte-bwqu3o">가입 → 인증 → 온보딩 → 대시보드 등 전체 사용자 여정에
                        대한 경로 순서도를 스펙에 포함하여 흐름을 완전하게
                        기술한다.</li> <li class="svelte-bwqu3o">리다이렉트 조건, 예외 흐름(실패 시 이동 경로), 접근 제어
                        가드 등도 전부 스펙에 직접 작성한다.</li></ul></li> <li class="svelte-bwqu3o"><strong>함수 명세 (Function Specification):</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">SED 명세는 <strong>모든 함수의 이름, 역할, 파라미터, 사용 위치를 명확히
                          정의하는 것이 원칙</strong>이므로, AI가 임의로 함수명을 추론하거나 설계하지 않도록
                        스펙에 직접 작성한다.</li> <li class="svelte-bwqu3o"><strong>함수 이름:</strong> 정확한 함수명을 제공한다. 예: <code>handleLikeCreate()</code>, <code>parseLikeId()</code>, <code>updatePostLikeCount()</code></li> <li class="svelte-bwqu3o"><strong>함수 역할:</strong> 함수가 수행하는 작업과
                        책임을 명확히 기술한다. 예: "좋아요 추가 시 likeCount
                        증가 및 통계 업데이트", "likeId 파싱하여 type, nodeId,
                        uid 추출"</li> <li class="svelte-bwqu3o"><strong>함수 파라미터:</strong> 모든 매개변수의 이름,
                        타입, 필수 여부를 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate(likeId: string)</code> </li> <li class="svelte-bwqu3o"><code>updateProfile(userId: UserId, data:
                              Partial&lt;UserProfile&gt;)</code> - userId 필수, data는 부분 업데이트 객체</li></ul></li> <li class="svelte-bwqu3o"><strong>반환 값:</strong> 함수가 반환하는 값의 타입과
                        구조를 정의한다. 예: <code></code></li> <li class="svelte-bwqu3o"><strong>함수 위치:</strong> 함수가 작성되어야 할 파일
                        경로를 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate()</code> → <code>/firebase/functions/src/handlers/like.handler.ts</code></li> <li class="svelte-bwqu3o"><code>parseLikeId()</code> → <code>/firebase/functions/src/utils/like.utils.ts</code></li> <li class="svelte-bwqu3o"><code>toggleLike()</code> → <code>/web/src/lib/services/like.ts</code></li></ul></li> <li class="svelte-bwqu3o"><strong>함수 호출 위치:</strong> 함수가 어디서 언제
                        호출되어야 하는지 명시한다. 예: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><code>handleLikeCreate()</code>는 Firebase Cloud
                            Functions의 <code></code> onCreate
                            트리거에서 자동 실행</li> <li class="svelte-bwqu3o"><code>toggleLike()</code>는 클라이언트의 PostItem
                            컴포넌트에서 좋아요 버튼 클릭 시 호출</li> <li class="svelte-bwqu3o"><code>parseLikeId()</code>는 <code>handleLikeCreate()</code> 내부에서 likeId
                            검증 시 호출</li></ul></li> <li class="svelte-bwqu3o"><strong>함수 명세 예시:</strong> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;"></pre></li> <li class="svelte-bwqu3o"><strong>주의사항:</strong> 함수 명세는 개발자가 코드를
                        작성하지 않고도 AI가 정확히 구현할 수 있을 만큼 상세해야
                        한다. 함수명, 파라미터, 위치, 호출 시점 등 어느 하나도
                        모호하게 남겨서는 안 된다.</li></ul></li></ul></li> <li class="svelte-bwqu3o"><strong>UI/UX 요구사항 (Design Specification)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>디자인 시스템:</strong> Material Design 3.0, Primary
                    Color #6366F1, Secondary Color #8B5CF6, Font: Pretendard Variable
                    (한글), Inter (영문)</li> <li class="svelte-bwqu3o"><strong>반응형 규칙:</strong> Mobile (&lt;768px), Tablet (768px~1024px),
                    Desktop (&gt;1024px), Breakpoint 기준: Tailwind CSS v3.4</li> <li class="svelte-bwqu3o"><strong>위젯 구성:</strong> Header (고정, height 64px), Sidebar
                    (접이식, width 280px), Main Content (max-width 1280px, center
                    aligned), Footer (height 120px)</li> <li class="svelte-bwqu3o"><strong>사용자 흐름:</strong> 로그인 → 대시보드 → 게시글 목록
                    → 게시글 상세 → 댓글 작성 → 알림 수신 (Figma 링크: https://figma.com/file/xxx)</li> <li class="svelte-bwqu3o"><strong>접근성:</strong> WCAG 2.1 Level AA 준수, 키보드 네비게이션
                    지원, 스크린 리더 호환 (ARIA labels)</li> <li class="svelte-bwqu3o"><strong>애니메이션:</strong> Framer Motion v11, 페이지 전환 (fade-in
                    300ms), 버튼 호버 (scale 1.05 200ms), 모달 (slide-up 250ms)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 계획 (Testing Specification) — 가장 정밀해야 하는 섹션</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>테스트 언어 및 환경:</strong> TypeScript 5.3.3, Node.js
                    20.10.0 LTS, npm 10.2.3</li> <li class="svelte-bwqu3o"><strong>테스트 플랫폼:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">Unit 테스트: Vitest 1.0.4 (Jest-compatible, ESM 지원)</li> <li class="svelte-bwqu3o">Component 테스트: Testing Library
                        (@testing-library/svelte 4.0.5)</li> <li class="svelte-bwqu3o">E2E 테스트: Playwright 1.40.1 (Chromium 120.0, Firefox
                        121.0, WebKit 17.4)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 환경 셋업:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">로컬 개발: Docker Compose v2.23.0 (MySQL 8.0 + Redis 7.2
                        + Node.js 20)</li> <li class="svelte-bwqu3o">CI 환경: GitHub Actions (ubuntu-latest, Node.js 20.x
                        matrix)</li> <li class="svelte-bwqu3o">테스트 DB: MySQL 8.0 (Docker 컨테이너, 포트 3307, 초기화
                        스크립트: /docker/mysql/init.sql)</li> <li class="svelte-bwqu3o">Mock 데이터: Faker.js 8.3.1 (사용자 100명, 게시글 500개,
                        댓글 2000개 자동 생성)</li> <li class="svelte-bwqu3o">환경 변수: .env.test 파일 (DATABASE_URL, API_KEY,
                        JWT_SECRET 등)</li></ul></li> <li class="svelte-bwqu3o"><strong>Unit 테스트 시나리오:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">커버리지 목표: 최소 80% (Statement/Branch/Function/Line)</li> <li class="svelte-bwqu3o">테스트 케이스 수: 최소 200개 (utils: 50개, services:
                        80개, stores: 70개)</li> <li class="svelte-bwqu3o">실행 명령: <code>npm run test:unit</code> (병렬 실행, max
                        workers 4)</li> <li class="svelte-bwqu3o">예시: auth.service.test.ts - login() 함수
                        (성공/실패/네트워크 오류/토큰 만료 등 12개 케이스)</li></ul></li> <li class="svelte-bwqu3o"><strong>E2E 테스트 시나리오:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">주요 사용자 플로우: 회원가입 → 로그인 → 게시글 작성 →
                        댓글 작성 → 로그아웃 (총 15단계)</li> <li class="svelte-bwqu3o">브라우저: Chromium (Desktop 1920x1080), Mobile (iPhone
                        13, 390x844)</li> <li class="svelte-bwqu3o">실행 명령: <code>npx playwright test</code> (headless mode,
                        병렬 3개)</li> <li class="svelte-bwqu3o">스크린샷: 각 단계마다 자동 캡처, 실패 시 full page
                        screenshot + video recording</li> <li class="svelte-bwqu3o">예시: e2e/auth.spec.ts - 로그인 실패 후 재시도 시나리오
                        (잘못된 비밀번호 3회 → 계정 잠금 확인)</li></ul></li> <li class="svelte-bwqu3o"><strong>성능 테스트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">도구: Lighthouse CI 0.12.1, k6 0.48.0</li> <li class="svelte-bwqu3o">성능 기준: LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1,
                        TTI &lt; 3.8s</li> <li class="svelte-bwqu3o">부하 테스트: k6 (동시 사용자 1000명, 10분간 지속, RPS
                        목표 500)</li></ul></li> <li class="svelte-bwqu3o"><strong>보안 테스트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">도구: OWASP ZAP 2.14.0, npm audit, Snyk CLI 1.1266.0</li> <li class="svelte-bwqu3o">취약점 스캔: SQL Injection, XSS, CSRF, 패키지 취약점
                        (주간 1회 자동 실행)</li></ul></li> <li class="svelte-bwqu3o"><strong>CI/CD 파이프라인:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">트리거: Git push to main/develop, Pull Request 생성</li> <li class="svelte-bwqu3o">단계: Lint (ESLint 8.56) → Build → Unit Test → E2E Test
                        → Deploy to Staging</li> <li class="svelte-bwqu3o">실행 시간 제한: 전체 파이프라인 15분 이내 (초과 시 실패)</li> <li class="svelte-bwqu3o">자동 배포: Staging (develop 브랜치), Production (main
                        브랜치 + manual approval)</li> <li class="svelte-bwqu3o">배포 플랫폼: Vercel (프론트엔드), AWS ECS Fargate
                        (백엔드)</li> <li class="svelte-bwqu3o">알림: Slack #dev-alerts 채널 (빌드 성공/실패, 배포 완료)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 자동화:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">Husky 8.0.3 + lint-staged 15.2.0 (pre-commit hook: lint
                        + format + affected tests)</li> <li class="svelte-bwqu3o">변경 감지: git diff를 분석하여 영향받는 테스트만 실행
                        (예: auth.ts 변경 → auth.test.ts만 실행)</li> <li class="svelte-bwqu3o">캐싱: GitHub Actions cache (node_modules, Playwright
                        browsers, 빌드 결과물)</li></ul></li> <li class="svelte-bwqu3o"><strong>테스트 결과 리포트:</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">포맷: JUnit XML (Vitest), HTML Report (Playwright),
                        Coverage Report (Istanbul/NYC)</li> <li class="svelte-bwqu3o">저장 위치: /test-results (Git ignore), S3 버킷
                        s3://test-reports/YYYY-MM-DD/ (30일 보관)</li> <li class="svelte-bwqu3o">대시보드: Codecov (커버리지 트렌드), Allure Report (E2E
                        테스트 히스토리)</li> <li class="svelte-bwqu3o">실패 분석: 실패한 테스트 케이스별 스크린샷, 에러 스택
                        트레이스, 실행 시간, 재현 단계</li></ul></li> <li class="svelte-bwqu3o"><strong>Firebase Functions 테스트 스펙 (Unit + Handler E2E)</strong> <p><strong>SED에서는 테스트가 무엇보다 중요하며, 아래 항목은 최소
                        요구 사항일 뿐 실제 프로젝트에서는 이보다 훨씬 정밀한
                        스펙이 필요하다.</strong></p> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">구조 원칙: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">핸들러(이벤트 수신 함수)는 <code>firebase/functions/src/index.ts</code>에만 위치시킨다.</li> <li class="svelte-bwqu3o">실제 비즈니스 로직은 별도 모듈로 분리하여 순수 함수
                            형태로 작성한다.</li> <li class="svelte-bwqu3o">이 분리 덕분에 에뮬레이터 없이도 로직 단위(Unit
                            Test)를 직접 호출해 검증할 수 있다.</li></ul></li> <li class="svelte-bwqu3o">테스트 구성: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>Unit Test:</strong> 분리된 로직 함수를 직접 호출한다.
                            외부 의존(데이터베이스 등)은 최소화하거나 간단한 mock으로
                            대체한다.</li> <li class="svelte-bwqu3o"><strong>Handler E2E Test:</strong> <code>firebase-functions-test</code> 라이브러리를 사용해
                            핸들러를 wrap 한 뒤, 에뮬레이터 없이도 이벤트를 시뮬레이션한다.</li></ul></li> <li class="svelte-bwqu3o">Realtime Database 이벤트 테스트 시 <code>functionsTest.database.makeDataSnapshot</code>으로 <code>event.data</code>를 구성한다.</li> <li class="svelte-bwqu3o">테스트 환경 초기화: <pre><code>const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());</code></pre></li> <li class="svelte-bwqu3o">핸들러 테스트 예시: <pre><code>import * as functionsTest from 'firebase-functions-test';
    import &#123; onPostCreate &#125; from '../src/index';

    const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());

    it('새 글 생성 시 카테고리 통계를 증가시킨다', async () => &#123;
      const wrapped = testEnv.wrap(onPostCreate);
      const snapshot = testEnv.database.makeDataSnapshot(
        &#123; category: 'community' &#125;,
        '/posts/post123'
      );

      await wrapped(&#123; data: snapshot, params: &#123; postId: 'post123' &#125; &#125;);

      // admin.database().ref().update 호출 여부 검증
      ...
    &#125;);</code></pre></li> <li class="svelte-bwqu3o">핵심 원칙 요약: <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">핸들러와 로직을 명확히 분리하여 테스트 가능성을
                            극대화한다.</li> <li class="svelte-bwqu3o">Unit Test는 순수 함수 단위로, Handler E2E Test는
                            래핑된 핸들러로 수행한다.</li> <li class="svelte-bwqu3o">에뮬레이터 없이도 실환경에 가깝게 검증하기 위해 <code>firebase-functions-test</code>를 적극 활용한다.</li></ul></li></ul></li></ul></li> <li class="svelte-bwqu3o"><strong>개발 환경 (Development Environment)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>언어:</strong> TypeScript 5.3.3 (strict mode, ESNext
                    target)</li> <li class="svelte-bwqu3o"><strong>프레임워크:</strong> Svelte 5.0.0 (Runes API), SvelteKit
                    2.0.0 (adapter-vercel)</li> <li class="svelte-bwqu3o"><strong>빌드 도구:</strong> Vite 5.0.10 (esbuild, Rollup 4.9.4)</li> <li class="svelte-bwqu3o"><strong>패키지 매니저:</strong> npm 10.2.3 (lockfile version
                    3)</li> <li class="svelte-bwqu3o"><strong>OS:</strong> macOS 14.2 Sonoma (개발), Ubuntu 22.04 (프로덕션)</li> <li class="svelte-bwqu3o"><strong>컨테이너:</strong> Docker 24.0.7, Docker Compose 2.23.0</li> <li class="svelte-bwqu3o"><strong>에디터:</strong> VS Code 1.85 (Extensions: Svelte for
                    VS Code, ESLint, Prettier, Playwright Test)</li> <li class="svelte-bwqu3o"><strong>버전 관리:</strong> Git 2.43.0, GitHub (main/develop
                    브랜치 전략, Conventional Commits)</li></ul></li> <li class="svelte-bwqu3o"><strong>배포 및 운영 (Deployment & Operations)</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>호스팅:</strong> Vercel (프론트엔드, Edge Functions),
                    AWS ECS Fargate (백엔드 API)</li> <li class="svelte-bwqu3o"><strong>CDN:</strong> Cloudflare (캐싱, DDoS 방어, SSL/TLS 1.3)</li> <li class="svelte-bwqu3o"><strong>모니터링:</strong> Sentry (에러 추적, Release tracking),
                    Datadog (APM, Logs, Metrics)</li> <li class="svelte-bwqu3o"><strong>로그 수집:</strong> AWS CloudWatch Logs (retention 30일),
                    ELK Stack (Elasticsearch 8.11, Logstash 8.11, Kibana 8.11)</li> <li class="svelte-bwqu3o"><strong>알림:</strong> PagerDuty (Critical 에러), Slack (Warning/Info
                    로그)</li> <li class="svelte-bwqu3o"><strong>백업:</strong> 데이터베이스 (daily full + hourly incremental),
                    파일 스토리지 (S3 versioning + lifecycle policy)</li></ul></li></ul> <div class="highlight-box svelte-bwqu3o">✅ <strong>개발은 스펙 점수가 90점 이상일 때만 시작 가능하다.</strong><br/> 위와 같은 세밀하고 정밀한 명세가 모든 항목에 포함되어야 90점 이상을
              받을 수 있다.</div> <div class="code-block svelte-bwqu3o" style="margin-top: 1.5rem;"><div class="code-header svelte-bwqu3o">💡 왜 이렇게 세밀해야 하는가?</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">SED의 핵심 원칙은 "AI는 추론하지 않는다"입니다.

    만약 스펙에 "MySQL을 사용한다"라고만 적혀있다면:
    - 어떤 버전? (5.7 vs 8.0 - 문법 차이 존재)
    - 어떤 에디션? (Community vs Enterprise - 기능 차이)
    - 어떤 설정? (Character Set, SQL Mode - 동작 차이)
    - 어디서 실행? (로컬 vs AWS RDS - 접근 방법 차이)

    AI는 이를 추론할 수 없고, 추론해서도 안 됩니다.
    따라서 모든 정보가 명시적으로 스펙에 기록되어야 합니다.

    "완전한 스펙 = 개발자가 직접 개발할 때 알아야 할 모든 정보"

    이것이 SED가 요구하는 스펙의 수준입니다.</pre></div></li> <li class="svelte-bwqu3o"><strong>스펙 파일 구조 및 명명 규칙</strong> <p class="phase-step-description svelte-bwqu3o">스펙을 체계적으로 관리하고 AI가 효율적으로 참조할 수 있도록, 스펙 파일의 구조와 명명 규칙을 명확히 정의합니다.</p> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>스펙 파일 이름 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">스펙 파일 이름은 다음의 구조를 가집니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
&lt;project-name&gt;-&lt;module-name&gt;-&lt;function-name&gt;.md
                </pre> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">기본적으로 "프로젝트명칭-모듈(기능)-함수(세부 유닛)" 구조로 확장자는 Markdown 파일인 <code>.md</code>가 됩니다.</p></li> <li class="svelte-bwqu3o"><strong>스펙 파일 YAML 헤더 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">모든 스펙 파일 상단에는 다음과 같은 YAML 구조를 가집니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
---
name: 스펙(또는 프로젝트) 이름. 영문, 숫자, 하이픈만 지원. (255 글자 이내)
version: 스펙 버전. (SEM version 원칙)
description: 프로젝트 설명 (4096 글자 이내)
author: 작성자이름 (64글자 이내)
email: 작성자 메일 주소 (64글자 이내)
homepage: 참고 홈페이지 주소
funding: 스펙 관리자에게 금전적 지원을 할 수 있는 결제 경로
license: GPT, MIT 등
dependencies: thruthesky/forum-spec, *withcenter/chat-spec[chat-rooms-join.md#chat-overview], **https://doma.com/abc/def
---
                </pre></li> <li class="svelte-bwqu3o"><strong>Dependencies (의존성) 설명</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>기본 형식:</strong> 다른 스펙을 참고 또는 종속(반드시 사용)한다는 것으로 다른 사람의 스펙을 가져와 쓸 수 있습니다.</li> <li class="svelte-bwqu3o"><strong>GitHub 레포지토리:</strong> <code>계정/레포지토리</code> 형식으로 작성 (예: <code>thruthesky/forum-spec</code>)</li> <li class="svelte-bwqu3o"><strong>외부 URL:</strong> GitHub가 아닌 경우 전체 URL 경로를 지정 (예: <code>https://doma.com/abc/def</code>)</li> <li class="svelte-bwqu3o"><strong>우선 순위 지정:</strong> 별표(*)가 있는 것은 우선 권이 있다는 것입니다. 만약 동일한 내용의 여러 스펙이 있는 경우, 별 표시가 많을수록 해당 spec을 우선 참조합니다. <pre style="background: #f5f5f5; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 4px;">
*withcenter/chat-spec     (우선순위 1)
**another/spec            (우선순위 2, 가장 우선)
                    </pre></li> <li class="svelte-bwqu3o"><strong>특정 파일/섹션 참조:</strong> 스펙 끝에 <code>[xxx-yyy-zzz.md#section-name]</code>와 같은 내용이 있으면, 전체 스펙을 참고하지 말고 해당 스펙에서 특정 파일만 참고하거나, <code>#section-name</code>으로 해당 파일에서 해당 섹션만 참고합니다. <pre style="background: #f5f5f5; padding: 8px; border-radius: 4px; font-size: 12px; margin-top: 4px;">
withcenter/chat-spec[chat-rooms-join.md]           # 특정 파일만
withcenter/chat-spec[chat-rooms-join.md#overview]  # 특정 섹션만
                    </pre></li></ul></li> <li class="svelte-bwqu3o"><strong>스펙 인덱스 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">모든 프로젝트는 다음과 같은 인덱스 파일을 반드시 포함해야 합니다:</p> <pre style="background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 13px; margin-top: 8px;">
&lt;project-name&gt;-index.md
                </pre> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong>DTOC 형태:</strong> Detailed Table of Contents (DTOC) 형태로 작성합니다.</li> <li class="svelte-bwqu3o"><strong>목차와 요약:</strong> 목차와 함께 해당 파일(항목)이 가지는 스펙의 요약/줄거리를 포함합니다.</li> <li class="svelte-bwqu3o"><strong>LLM 활용:</strong> 스펙의 규모가 큰 경우, LLM이 index.md 파일을 참고하여 언제 어느 문서를 참고할지 결정할 수 있습니다.</li> <li class="svelte-bwqu3o"><strong>상단 YAML:</strong> 인덱스 파일도 상단에 YAML 헤더를 포함합니다.</li></ul></li> <li class="svelte-bwqu3o"><strong>스펙 파일 내용 구조</strong> <p style="margin: 0.5rem 0; color: #475569; font-size: 0.95rem;">개별 스펙 파일은 다음과 같은 구조를 따릅니다:</p> <ol style="margin: 0.5rem 0; padding-left: 1.5rem; color: #475569; font-size: 0.95rem;"><li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>YAML 헤더:</strong> 파일 상단에 위치하며, dependencies를 기록하여 어떤 문서를 참고할지 지시할 수 있습니다. 외부 문서뿐만 아니라 내부 문서도 참고 가능합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>Overview (개요):</strong> YAML 헤더 아래에는 짧은 요약 Overview 항목을 반드시 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>요구사항 (Requirements):</strong> 해당 스펙을 구현하기 위해 필요한 사전 조건들을 명시합니다. 명령어 실행, 라이브러리 설치, 환경 설정 등을 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>워크플로우:</strong> 요구사항 다음에는 반드시 워크플로우가 따라 나와야 합니다. 워크플로우는 인공지능이 반드시 따라야 하는 단계를 포함합니다.</li> <li style="margin-bottom: 0.5rem;" class="svelte-bwqu3o"><strong>세부 항목:</strong> 워크플로우 아래로 세부 항목에 대한 설명들이 나옵니다.</li></ol> <div class="code-block svelte-bwqu3o" style="margin-top: 1rem;"><div class="code-header svelte-bwqu3o">스펙 파일 구조 예시</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">---
name: sns-forum-post-create
version: 1.0.0
description: SNS 게시글 작성 기능 상세 스펙
author: 송재호
email: thruthesky@gmail.com
license: MIT
dependencies: sns-database[posts-schema.md], sns-auth[user-session.md#current-user]
---

## Overview
사용자가 새로운 게시글을 작성하는 기능입니다. 제목, 내용, 카테고리를 입력받아 Firebase Realtime Database에 저장합니다.

## 요구사항 (Requirements)

### 라이브러리
- Firebase SDK 10.7.1 이상
- Svelte 5.0.0 이상

### 설치 명령어
\`\`\`bash
npm install firebase@^10.7.1
\`\`\`

### 환경 설정
- \`.env\` 파일에 Firebase 설정 필수:
  - VITE_FIREBASE_API_KEY
  - VITE_FIREBASE_AUTH_DOMAIN
  - VITE_FIREBASE_DATABASE_URL
  - VITE_FIREBASE_PROJECT_ID

### 사전 조건
- Firebase 프로젝트가 생성되어 있어야 함
- Realtime Database가 활성화되어 있어야 함
- 사용자가 로그인된 상태여야 함

## 워크플로우
1. 사용자 인증 상태 확인
2. 입력 폼 유효성 검증
3. 게시글 데이터 구조 생성
4. Firebase에 저장
5. 성공/실패 처리

## 세부 항목
### 입력 필드
- title: 제목 (필수, 1~100자)
- content: 내용 (필수, 1~5000자)
- category: 카테고리 (필수, community|qna|news|market)

### 데이터베이스 경로
/posts/&#123;category&#125;/&#123;postId&#125;

...</pre></div></li></ul> <div class="highlight-box svelte-bwqu3o" style="margin-top: 1.5rem;">✅ <strong>스펙 파일 구조화의 장점</strong><br/> 명확한 파일 구조와 명명 규칙은 대규모 프로젝트에서 스펙을 체계적으로 관리하고, AI가 필요한 정보를 빠르게 찾아 참조할 수 있게 합니다. Dependencies를 통해 스펙 간 의존성을 명시함으로써 스펙의 재사용성과 일관성을 높일 수 있습니다.</div></li> <li class="svelte-bwqu3o"><strong>스펙 검증</strong> <ul class="sub-list svelte-bwqu3o"><li class="svelte-bwqu3o">작성된 스펙은 검증 툴을 통해 점수를 산출하고, <strong>90점 이상</strong>이어야만 개발을 진행할 수 있다.</li> <li class="svelte-bwqu3o">점수가 미달될 경우 보완이 필요한 항목을 식별하고 줄거리 및 상세
                스펙 단계로 되돌려 수정한다.</li> <li class="svelte-bwqu3o">검증 결과와 보완 이력을 모두 기록하여, 스펙과 구현 간 추적성을
                유지한다.</li></ul></li></ol></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">⚙️ 작업 단계 (Execution Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">AI는 스펙에 정의된 내용만 정확히 구현한다.</li> <li class="svelte-bwqu3o">스펙 외의 모든 내용은 무시한다.</li> <li class="svelte-bwqu3o">사람이 중간에 개입할 경우, 그 변경 사항도 스펙으로 재기록되어야
            한다.</li> <li class="svelte-bwqu3o">"코드 수정"은 곧 "스펙 업데이트"를 의미한다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔍 검수 단계 (Verification Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">검수 또한 스펙 기반으로 자율적으로 수행된다.</li> <li class="svelte-bwqu3o">테스트 케이스와 기대 결과는 스펙에서 추출된다.</li> <li class="svelte-bwqu3o">모든 기능은 "스펙과 일치하는가?"를 기준으로 평가된다.</li> <li class="svelte-bwqu3o">검수가 통과되지 않으면, AI는 다음 메시지를 반환한다:</li></ul> <div class="code-block svelte-bwqu3o"><pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">SpecDeviationError: Implementation diverged from specification on module 'auth'.
Suggested Action: Review and revise spec or code alignment.</code></pre></div></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🚀 배포 단계 (Deployment Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">배포는 사람의 개입이 필수이다.</li> <li class="svelte-bwqu3o">AI는 배포 스크립트, 환경 구성 파일, CI/CD 절차를 자동 생성하지만,<br/> 실제 배포 명령은 인간 검증 후 수행된다.</li></ul></div> <div class="phase-card svelte-bwqu3o"><h3 class="phase-title svelte-bwqu3o">🔁 운영 단계 (Operation Phase)</h3> <ul class="phase-list svelte-bwqu3o"><li class="svelte-bwqu3o">스펙에는 "운영 자동화" 내용이 반드시 포함되어야 한다.<br/> 예: 로그 수집, 에러 리포팅, 업데이트 시나리오 등.</li> <li class="svelte-bwqu3o">AI는 운영 단계에서 모니터링·리포팅·자동 수정 제안 역할을 수행한다.</li> <li class="svelte-bwqu3o">새로운 요구사항 발생 시, 스펙 업데이트 → 스코어 재평가 → 재개발의
            순서를 따른다.</li></ul></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 4. 철학 요약</h2> <div class="table-container svelte-bwqu3o"><table class="philosophy-table svelte-bwqu3o"><thead class="svelte-bwqu3o"><tr><th class="svelte-bwqu3o">구분</th><th class="svelte-bwqu3o">내용</th></tr></thead><tbody class="svelte-bwqu3o"><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>철학</strong></td><td class="svelte-bwqu3o">스펙이 곧 진리(Spec is the Truth). 개발은 진리를 집행하는 행위.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>AI 역할</strong></td><td class="svelte-bwqu3o">판단하지 않는다. 오직 스펙을 해석 없이 실행한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>개발자 역할</strong></td><td class="svelte-bwqu3o">완전하고 명확한 스펙을 만드는 일에 집중한다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>품질 보증</strong></td><td class="svelte-bwqu3o">테스트 및 검수는 모두 스펙 기반 자동화로 수행된다.</td></tr><tr class="svelte-bwqu3o"><td class="svelte-bwqu3o"><strong>결과물 특성</strong></td><td class="svelte-bwqu3o">일관성, 검증 가능성, 유지보수 용이성, 예측 가능한 품질.</td></tr></tbody></table></div></div> <div class="section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🔹 5. 표어 및 핵심 문장</h2> <div class="slogan-container svelte-bwqu3o"><div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">🧠</div> <div class="slogan-text svelte-bwqu3o">"AI does not imagine. It executes."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">📜</div> <div class="slogan-text svelte-bwqu3o">"Spec is the contract. Spec is the code."</div></div> <div class="slogan-card svelte-bwqu3o"><div class="slogan-icon svelte-bwqu3o">⚙️</div> <div class="slogan-text svelte-bwqu3o">"No assumption. No improvisation. Only implementation."</div></div></div></div> <div class="section challenge-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">⚠️ SED의 과제</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">SED의 가장 큰 과제는 스펙이 정밀하고 완전해야하므로, <strong class="svelte-bwqu3o">스펙의 크기 또한 커진다는 것</strong>이 문제입니다. 이는 곧 <strong class="svelte-bwqu3o">토큰량이 커진다</strong>는 것을
          의미합니다.</p> <p class="svelte-bwqu3o">완벽한 스펙을 만들기 위해서는 책 한 권 분량의 상세한 명세를 작성해야
          하며, 이를 LLM에 주입하기 위해서는 상당한 양의 토큰이 필요합니다.</p> <div class="challenge-box svelte-bwqu3o"><h3 class="challenge-title svelte-bwqu3o">💡 해결 방안</h3> <p class="svelte-bwqu3o">이 문제를 해결하기 위해서는 <strong class="svelte-bwqu3o">단계별로 스펙을 분리</strong>하여 LLM에게 작업을 시켜야 합니다.</p> <ul class="challenge-list svelte-bwqu3o"><li class="svelte-bwqu3o">전체 스펙을 논리적 단위로 분할 (모듈별, 기능별, 레이어별)</li> <li class="svelte-bwqu3o">각 단계마다 필요한 스펙만 LLM에게 전달</li> <li class="svelte-bwqu3o">단계별 결과물을 검증하고 다음 단계로 진행</li> <li class="svelte-bwqu3o">스펙 문서 자체를 계층적 구조로 설계</li> <li class="svelte-bwqu3o">재사용 가능한 공통 스펙 라이브러리 구축</li></ul></div> <p class="svelte-bwqu3o">이러한 접근을 통해 SED의 철학을 유지하면서도 실제 프로젝트에 적용
          가능한 형태로 발전시킬 수 있습니다.</p></div></div> <div class="conclusion svelte-bwqu3o"><p class="svelte-bwqu3o">이제 "Spec-Exact Development (SED)"는 단순한 프롬프트 개발을 넘어<br/> 명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한 <strong>AI 기반 개발 표준 철학</strong>으로 정의됩니다.</p></div> <div class="section utility-section svelte-bwqu3o"><h2 class="section-title svelte-bwqu3o">🛠️ SED Utility 다운로드 및 실행</h2> <div class="content svelte-bwqu3o"><p class="svelte-bwqu3o">SED 방법론을 실제로 적용하기 위해서는 작성한 스펙의 구조와 완성도를
          검증할 수 있는 도구가 필요합니다. <strong class="svelte-bwqu3o">SEDAI</strong>는 여러분이
          작성한 스펙을 분석하고 점수를 매겨주는 유틸리티입니다.</p> <div class="info-box svelte-bwqu3o" style="margin-top: 1rem; margin-bottom: 1.5rem;"><strong class="svelte-bwqu3o">📦 NPM 패키지:</strong> <a href="https://www.npmjs.com/package/sedai" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">https://www.npmjs.com/package/sedai</a></div> <div class="utility-box svelte-bwqu3o"><h3 class="utility-title svelte-bwqu3o">📦 설치 및 실행</h3> <p style="margin-bottom: 1rem; color: #475569;" class="svelte-bwqu3o">NPM을 통해 즉시 실행할 수 있습니다. 별도 설치 없이 npx를 사용하면
            됩니다:</p> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">스펙 검증 명령어</div> <pre class="svelte-bwqu3o"><code class="svelte-bwqu3o">npx sedai doctor</code></pre></div> <div style="margin-top: 1.5rem;"><h4 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.75rem;">🔍 SEDAI Doctor가 수행하는 작업</h4> <ul class="feature-list svelte-bwqu3o"><li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">스펙 파일 구조 검증:</strong> YAML 헤더, Overview, 요구사항,
                워크플로우, 세부 항목이 올바른 순서로 작성되었는지 확인합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">필수 항목 확인:</strong> 각 스펙 파일에 반드시 포함되어야
                할 필드(name, version, dependencies 등)가 누락되지 않았는지
                검사합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">의존성 분석:</strong> dependencies에 명시된 다른 스펙들이
                올바른 형식으로 참조되었는지 확인합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">완성도 점수 산출:</strong> 스펙의 정밀함과 완성도를
                분석하여 0~100점 사이의 점수를 부여합니다.</li> <li class="svelte-bwqu3o"><strong class="svelte-bwqu3o">개선 제안:</strong> 점수가 90점 미만인 경우, 어떤 부분을
                보완해야 하는지 구체적인 제안을 제공합니다.</li></ul></div> <div class="highlight-box svelte-bwqu3o" style="margin-top: 1.5rem;">💡 <strong class="svelte-bwqu3o">참고:</strong> SED 방법론에서는 스펙 점수가 <strong class="svelte-bwqu3o">90점 이상</strong>이어야 개발을 시작할 수 있습니다. 90점 미만인 경우, SEDAI Doctor의
            제안을 따라 스펙을 보완한 후 다시 검증하세요.</div></div> <div class="utility-box svelte-bwqu3o" style="margin-top: 1.5rem;"><h3 class="utility-title svelte-bwqu3o">📊 출력 예시</h3> <div class="code-block svelte-bwqu3o"><div class="code-header svelte-bwqu3o">SEDAI Doctor 실행 결과</div> <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;" class="svelte-bwqu3o">$ npx sedai doctor

🔍 Analyzing your SED specifications...

📁 Found 12 spec files in ./specs/

✅ sns-forum-post-create.md
   - Structure: Valid
   - Required Fields: Complete
   - Dependencies: Resolved
   - Score: 95/100

⚠️  sns-user-profile.md
   - Structure: Valid
   - Required Fields: Missing 'version'
   - Dependencies: Resolved
   - Score: 78/100

   💡 Suggestions:
   - Add version field to YAML header
   - Expand workflow section (currently 3 steps, recommend 5+ steps)
   - Add more detailed error handling scenarios

❌ sns-payment-integration.md
   - Structure: Invalid (missing workflow section)
   - Required Fields: Complete
   - Dependencies: Unresolved (payment-gateway-spec not found)
   - Score: 42/100

   💡 Suggestions:
   - Add workflow section after requirements
   - Resolve dependency: payment-gateway-spec
   - Add database schema details
   - Include API endpoint specifications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📈 Overall Project Score: 72/100

✅ Ready for development: 8 files
⚠️  Need improvement: 3 files
❌ Critical issues: 1 file

⚠️  Your project score is below 90.
   Please address the issues above before starting development.</pre></div></div> <div class="info-box svelte-bwqu3o" style="margin-top: 1.5rem;"><h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.75rem;">🚀 다음 단계</h3> <ol style="margin: 0; padding-left: 1.5rem; color: #475569; line-height: 1.8;"><li>SEDAI Doctor를 실행하여 현재 스펙의 상태를 확인합니다.</li> <li>점수가 90점 미만인 파일들을 우선적으로 보완합니다.</li> <li>제안된 개선 사항을 적용한 후 다시 검증을 실행합니다.</li> <li>모든 스펙이 90점 이상이 되면 AI 기반 개발을 시작합니다.</li></ol></div></div></div></div></div>`);const BS={hash:"svelte-bwqu3o",code:`
  /* 메인 컨테이너 */.sed-page.svelte-bwqu3o {position:relative;min-height:100vh;background:#f8f9fa;padding:2rem 1.5rem;}

  /* 배경 그라디언트 */.background-gradient.svelte-bwqu3o {position:absolute;inset:0;background:radial-gradient(
        circle at top right,
        rgba(99, 102, 241, 0.1),
        transparent 50%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(168, 85, 247, 0.08),
        transparent 50%
      );pointer-events:none;}

  /* 컨테이너 */.container.svelte-bwqu3o {position:relative;max-width:56rem;margin:0 auto;display:flex;flex-direction:column;gap:2.5rem;}

  /* 헤더 섹션 */.header.svelte-bwqu3o {text-align:center;margin-bottom:1rem;}.title.svelte-bwqu3o {font-size:2.5rem;font-weight:800;color:#1e293b;margin:0 0 1rem 0;letter-spacing:-0.03em;line-height:1.2;}.subtitle.svelte-bwqu3o {font-size:1.125rem;font-style:italic;color:#64748b;margin:0;font-weight:500;}

  /* 섹션 */.section.svelte-bwqu3o {background:white;border-radius:1rem;padding:2rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);border:1px solid #e2e8f0;}.section-title.svelte-bwqu3o {font-size:1.75rem;font-weight:700;color:#0f172a;margin:0 0 1.5rem 0;}

  /* 콘텐츠 */.content.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;color:#334155;line-height:1.8;margin-bottom:1rem;}.content.svelte-bwqu3o strong:where(.svelte-bwqu3o) {color:#1e293b;font-weight:600;}

  /* 인용구 */.quote.svelte-bwqu3o {background:linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);border-left:4px solid #6366f1;padding:1.5rem;margin:1.5rem 0;border-radius:0.5rem;font-size:1.125rem;font-weight:600;color:#4338ca;line-height:1.6;}.quote-sub.svelte-bwqu3o {display:block;margin-top:0.5rem;font-size:0.9rem;font-weight:500;color:#6366f1;}

  /* 원칙 카드 */.principle-card.svelte-bwqu3o {background:#f8fafc;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.principle-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.principle-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.principle-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"•";position:absolute;left:0;color:#6366f1;font-weight:bold;font-size:1.2rem;}.sub-list.svelte-bwqu3o {list-style:none;padding:0;margin-top:0.5rem;margin-left:1rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.5rem;position:relative;color:#64748b;font-size:0.95rem;}.sub-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"◦";position:absolute;left:0;color:#94a3b8;}

  /* 코드 블록 */.code-block.svelte-bwqu3o {background:#1e293b;border-radius:0.5rem;overflow:hidden;margin-top:1rem;}.code-header.svelte-bwqu3o {background:#334155;padding:0.5rem 1rem;font-size:0.875rem;color:#94a3b8;font-weight:500;}.code-block.svelte-bwqu3o pre:where(.svelte-bwqu3o) {margin:0;padding:1rem;overflow-x:auto;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-family:"Courier New", monospace;font-size:0.875rem;color:#e2e8f0;line-height:1.6;}

  /* 하이라이트 박스 */.highlight-box.svelte-bwqu3o {background:linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);border:2px solid #22c55e;border-radius:0.5rem;padding:1rem 1.25rem;margin-top:1rem;font-size:1rem;color:#15803d;font-weight:600;}

  /* 단계 카드 */.phase-card.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;}.phase-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.phase-list.svelte-bwqu3o {list-style:none;padding:0;margin:0;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.75rem;position:relative;color:#475569;line-height:1.7;}.phase-list.svelte-bwqu3o > li:where(.svelte-bwqu3o)::before {content:"▸";position:absolute;left:0;color:#6366f1;font-weight:bold;}.phase-steps.svelte-bwqu3o {list-style:decimal;margin:1rem 0 0 1.25rem;padding:0;color:#1f2937;}.phase-steps.svelte-bwqu3o > li:where(.svelte-bwqu3o) {margin-bottom:1.75rem;}.phase-steps.svelte-bwqu3o > li:where(.svelte-bwqu3o):last-child {margin-bottom:0;}.phase-step-description.svelte-bwqu3o {margin:0.75rem 0 0.5rem 0;color:#475569;line-height:1.6;}

  /* 테이블 */.table-container.svelte-bwqu3o {overflow-x:auto;margin-top:1rem;}.philosophy-table.svelte-bwqu3o {width:100%;border-collapse:collapse;font-size:0.95rem;}.philosophy-table.svelte-bwqu3o thead:where(.svelte-bwqu3o) {background:#f1f5f9;}.philosophy-table.svelte-bwqu3o th:where(.svelte-bwqu3o) {padding:0.875rem 1rem;text-align:left;font-weight:600;color:#0f172a;border-bottom:2px solid #e2e8f0;}.philosophy-table.svelte-bwqu3o td:where(.svelte-bwqu3o) {padding:0.875rem 1rem;color:#475569;line-height:1.6;border-bottom:1px solid #e2e8f0;}.philosophy-table.svelte-bwqu3o tbody:where(.svelte-bwqu3o) tr:where(.svelte-bwqu3o):hover {background:#f8fafc;}

  /* 슬로건 컨테이너 */.slogan-container.svelte-bwqu3o {display:flex;flex-direction:column;gap:1rem;margin-top:1rem;}.slogan-card.svelte-bwqu3o {display:flex;align-items:center;gap:1rem;background:linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);border:1px solid #e9d5ff;border-radius:0.75rem;padding:1.25rem 1.5rem;}.slogan-icon.svelte-bwqu3o {font-size:2rem;flex-shrink:0;}.slogan-text.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#6b21a8;font-style:italic;}

  /* 마무리 섹션 */.conclusion.svelte-bwqu3o {background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1px solid #bfdbfe;border-radius:1rem;padding:2rem;text-align:center;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1.125rem;color:#1e40af;line-height:1.8;margin:0;}

  /* 탄생 배경 섹션 */.origin-section.svelte-bwqu3o {background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);border:2px solid #fbbf24;}.highlight-text.svelte-bwqu3o {text-align:center;font-size:1.25rem;color:#b45309;margin:1.5rem 0;}.problem-list.svelte-bwqu3o,
  .solution-list.svelte-bwqu3o {list-style:none;padding:0;margin:1rem 0 1.5rem 0;}.problem-list.svelte-bwqu3o li:where(.svelte-bwqu3o),
  .solution-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding:0.5rem 0.75rem 0.5rem 2rem;margin-bottom:0.5rem;position:relative;color:#1f2937;line-height:1.6;background:rgba(255, 255, 255, 0.5);border-radius:0.5rem;}.problem-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"❌";position:absolute;left:0.5rem;font-size:1rem;}.solution-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"✅";position:absolute;left:0.5rem;font-size:1rem;}

  /* SED의 과제 섹션 */.challenge-section.svelte-bwqu3o {background:linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);border:2px solid #f87171;}.challenge-box.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin:1.5rem 0;}.challenge-title.svelte-bwqu3o {font-size:1.125rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.challenge-list.svelte-bwqu3o {list-style:none;padding:0;margin:0.75rem 0;}.challenge-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding-left:1.5rem;margin-bottom:0.5rem;position:relative;color:#475569;line-height:1.7;}.challenge-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"→";position:absolute;left:0;color:#f59e0b;font-weight:bold;}

  /* SED Utility 섹션 */.utility-section.svelte-bwqu3o {background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:2px solid #38bdf8;}.utility-box.svelte-bwqu3o {background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;margin-top:1.5rem;}.utility-title.svelte-bwqu3o {font-size:1.25rem;font-weight:600;color:#0f172a;margin:0 0 1rem 0;}.feature-list.svelte-bwqu3o {list-style:none;padding:0;margin:0.75rem 0;}.feature-list.svelte-bwqu3o li:where(.svelte-bwqu3o) {padding:0.75rem 0.75rem 0.75rem 2rem;margin-bottom:0.75rem;position:relative;color:#334155;line-height:1.7;background:#f8fafc;border-radius:0.5rem;border-left:3px solid #38bdf8;}.feature-list.svelte-bwqu3o li:where(.svelte-bwqu3o)::before {content:"✓";position:absolute;left:0.75rem;color:#38bdf8;font-weight:bold;font-size:1.125rem;}.info-box.svelte-bwqu3o {background:linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);border:1px solid #fbbf24;border-radius:0.75rem;padding:1.5rem;}

  /* 반응형 디자인 */
  @media (max-width: 768px) {.sed-page.svelte-bwqu3o {padding:1.5rem 1rem;}.title.svelte-bwqu3o {font-size:2rem;}.subtitle.svelte-bwqu3o {font-size:1rem;}.section.svelte-bwqu3o {padding:1.5rem;}.section-title.svelte-bwqu3o {font-size:1.5rem;}.slogan-card.svelte-bwqu3o {flex-direction:column;text-align:center;}.slogan-text.svelte-bwqu3o {font-size:1rem;}
  }

  @media (max-width: 640px) {.title.svelte-bwqu3o {font-size:1.75rem;}.section.svelte-bwqu3o {padding:1.25rem;}.quote.svelte-bwqu3o {font-size:1rem;padding:1rem;}.code-block.svelte-bwqu3o code:where(.svelte-bwqu3o) {font-size:0.8125rem;}.conclusion.svelte-bwqu3o p:where(.svelte-bwqu3o) {font-size:1rem;}
  }`};function Zg(n){ct(n,BS);var e=VS(),t=h(d(e),2),r=h(d(t),8),s=h(d(r),2),i=h(d(s),4),o=h(d(i),2),a=h(d(o),6),l=h(d(a),2),u=h(d(l),2),f=h(d(u),10),m=h(d(f),2),p=h(d(m),6),b=h(d(p),2),g=d(b),w=h(d(g));w.nodeValue=` -
                            likeId는 필수, 형식: "post-{postId}-{uid}"`,c(g),At(2),c(b),c(p);var k=h(p,2),I=h(d(k),2);I.textContent=`Promise<{success: boolean; type?: string;
                          error?: string}>`,c(k);var P=h(k,4),C=h(d(P),2),L=d(C),D=h(d(L),2);D.textContent="/likes/{likeId}",At(),c(L),At(4),c(C),c(P);var q=h(P,2),A=h(d(q),2);A.textContent=`
함수명: handleLikeCreate
역할: 좋아요 추가 시 likeCount 증가 및 통계 업데이트
파라미터:
  - likeId: string (필수)
    형식: "post-{postId}-{uid}" 또는 "comment-{commentId}-{uid}"
반환값: Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; error?: string}>
위치: /firebase/functions/src/handlers/like.handler.ts
호출: Firebase Cloud Functions onCreate 트리거 (/likes/{likeId})
수행 작업:
  1. likeId 파싱 (parseLikeId 함수 사용)
  2. type이 'post'인 경우 해당 게시글의 likeCount +1
  3. type이 'comment'인 경우 해당 댓글의 likeCount +1
  4. /stats/counters/like 전역 통계 +1
에러 처리:
  - likeId 파싱 실패 시 {success: false, error: "Invalid likeId format"}
  - 게시글/댓글을 찾을 수 없는 경우 {success: false, error: "Post/Comment not found"}
                        `,c(q),At(2),c(m),c(f),c(u),c(l),At(8),c(a),At(4),c(o),At(4),c(i),c(s),At(8),c(r),At(10),c(t),c(e),x(n,e)}pe(Zg,{},[],[],!0);var HS=R('<div role="alert"><span class="toast-icon svelte-1cpok13"> </span> <span class="toast-message svelte-1cpok13"> </span> <button class="toast-close svelte-1cpok13" aria-label="닫기" type="button">×</button></div>'),WS=R('<div class="toast-container svelte-1cpok13"></div>');const GS={hash:"svelte-1cpok13",code:`\r
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
  }`};function eb(n,e){dt(e,!1),ct(n,GS);const t=()=>lt(Eu,"$toasts",r),[r,s]=Nt();function i(a){switch(a){case"success":return"✓";case"error":return"✗";case"info":return"ℹ";case"warning":return"⚠";default:return"ℹ"}}wn();var o=WS();Zt(o,5,t,a=>a.id,(a,l)=>{var u=HS(),f=d(u),m=d(f,!0);c(f);var p=h(f,2),b=d(p,!0);c(p);var g=h(p,2);g.__click=()=>zg(v(l).id),c(u),z(w=>{sn(u,1,`toast toast-${v(l).type??""}`,"svelte-1cpok13"),_(m,w),_(b,v(l).message)},[()=>i(v(l).type)]),x(a,u)}),c(o),x(n,o),ut(),s()}Ct(["click"]);pe(eb,{},[],[],!0);var KS=R('<div class="loading-state svelte-z18b0h"><div class="spinner svelte-z18b0h"></div> <p class="svelte-z18b0h"> </p></div>'),YS=R('<div class="error-state svelte-z18b0h"><p class="error-icon svelte-z18b0h">⚠️</p> <p class="error-text svelte-z18b0h"> </p> <p class="error-detail svelte-z18b0h"> </p></div>'),QS=R('<div class="stats-container svelte-z18b0h"><div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">👥</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">📝</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">💬</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div> <div class="stat-card svelte-z18b0h"><div class="stat-icon svelte-z18b0h">❤️</div> <div class="stat-content svelte-z18b0h"><h3 class="stat-label svelte-z18b0h"> </h3> <p class="stat-value svelte-z18b0h"> </p></div></div></div>'),JS=R('<div class="empty-state svelte-z18b0h"><p class="empty-icon svelte-z18b0h">📊</p> <p class="empty-text svelte-z18b0h"> </p></div>'),XS=R('<aside class="right-sidebar svelte-z18b0h"><h2 class="sidebar-title svelte-z18b0h"> </h2> <!></aside>');const ZS={hash:"svelte-z18b0h",code:`\r
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
  }`};function tb(n,e){dt(e,!1),ct(n,ZS);const t=()=>lt(zt,"$t",s),r=()=>lt(o,"$statsStore",s),[s,i]=Nt(),o=xu("stats/counters");function a(g){return g==null?"0":g.toLocaleString()}wn();var l=XS(),u=d(l),f=d(u,!0);c(u);var m=h(u,2);{var p=g=>{var w=KS(),k=h(d(w),2),I=d(k,!0);c(k),c(w),z(P=>_(I,P),[()=>t()("통계로딩중")]),x(g,w)},b=g=>{var w=me(),k=le(w);{var I=C=>{var L=YS(),D=h(d(L),2),q=d(D,!0);c(D);var A=h(D,2),E=d(A,!0);c(A),c(L),z(T=>{_(q,T),_(E,r().error.message)},[()=>t()("통계로드실패")]),x(C,L)},P=C=>{var L=me(),D=le(L);{var q=E=>{const T=Ua(()=>r().data);var N=QS(),$=d(N),j=h(d($),2),K=d(j),ee=d(K,!0);c(K);var W=h(K,2),Z=d(W,!0);c(W),c(j),c($);var ce=h($,2),ae=h(d(ce),2),ie=d(ae),H=d(ie,!0);c(ie);var Y=h(ie,2),J=d(Y,!0);c(Y),c(ae),c(ce);var te=h(ce,2),ue=h(d(te),2),U=d(ue),S=d(U,!0);c(U);var M=h(U,2),B=d(M,!0);c(M),c(ue),c(te);var O=h(te,2),Q=h(d(O),2),F=d(Q),se=d(F,!0);c(F);var oe=h(F,2),Ee=d(oe,!0);c(oe),c(Q),c(O),c(N),z((re,be,ye,Pe,Le,ze,Oe,We)=>{_(ee,re),_(Z,be),_(H,ye),_(J,Pe),_(S,Le),_(B,ze),_(se,Oe),_(Ee,We)},[()=>t()("전체사용자"),()=>a(v(T).user),()=>t()("전체글"),()=>a(v(T).post),()=>t()("전체댓글"),()=>a(v(T).comment),()=>t()("전체좋아요"),()=>a(v(T).like)]),x(E,N)},A=E=>{var T=JS(),N=h(d(T),2),$=d(N,!0);c(N),c(T),z(j=>_($,j),[()=>t()("통계데이터없음")]),x(E,T)};G(D,E=>{r().data?E(q):E(A,!1)},!0)}x(C,L)};G(k,C=>{r().error?C(I):C(P,!1)},!0)}x(g,w)};G(m,g=>{r().loading?g(p):g(b,!1)})}c(l),z(g=>_(f,g),[()=>t()("전체통계")]),x(n,l),ut(),i()}pe(tb,{},[],[],!0);var eA=R('<sns-layout><main class="content-with-sidebar svelte-1hwhcgc"><!></main> <!></sns-layout> <!> <test-fab></test-fab>',3);const tA={hash:"svelte-1hwhcgc",code:`
  /* 콘텐츠 (사이드바와 함께) */.content-with-sidebar.svelte-1hwhcgc {width:100%;padding:0 20px;box-sizing:border-box;}

  /* 반응형 */
  @media (max-width: 1024px) {.content-with-sidebar.svelte-1hwhcgc {padding-right:20px;}
  }`};function nb(n){ct(n,tA);let e=ne(an(window.location.pathname));function t(){y(e,window.location.pathname,!0)}typeof window<"u"&&window.addEventListener("popstate",t);var r=eA(),s=le(r),i=d(s),o=d(i);{var a=m=>{$g(m,{})},l=m=>{var p=me(),b=le(p);{var g=k=>{qg(k,{})},w=k=>{var I=me(),P=le(I);{var C=D=>{Og(D,{})},L=D=>{var q=me(),A=le(q);{var E=N=>{Mg(N,{})},T=N=>{var $=me(),j=le($);{var K=W=>{jg(W,{})},ee=W=>{var Z=me(),ce=le(Z);{var ae=H=>{Vg(H,{})},ie=H=>{var Y=me(),J=le(Y);{var te=U=>{Bg(U,{})},ue=U=>{var S=me(),M=le(S);{var B=Q=>{Hg(Q,{})},O=Q=>{var F=me(),se=le(F);{var oe=re=>{Wg(re,{})},Ee=re=>{var be=me(),ye=le(be);{var Pe=ze=>{Gg(ze,{})},Le=ze=>{var Oe=me(),We=le(Oe);{var Ye=Ue=>{Kg(Ue,{})},tt=Ue=>{var st=me(),Me=le(st);{var _e=Te=>{Yg(Te,{})},ve=Te=>{var Re=me(),it=le(Re);{var St=pt=>{Qg(pt,{})},kt=pt=>{var Ut=me(),Vt=le(Ut);{var nn=ge=>{Jg(ge,{})},fe=ge=>{var we=me(),Ce=le(we);{var De=V=>{Xg(V,{})},$e=V=>{var he=me(),ke=le(he);{var nt=Ze=>{Zg(Ze)},Xe=Ze=>{Dg(Ze,{})};G(ke,Ze=>{v(e)==="/dev/sed"?Ze(nt):Ze(Xe,!1)},!0)}x(V,he)};G(Ce,V=>{v(e)==="/dev/history"?V(De):V($e,!1)},!0)}x(ge,we)};G(Vt,ge=>{v(e)==="/dev/generate-posts"?ge(nn):ge(fe,!1)},!0)}x(pt,Ut)};G(it,pt=>{v(e)==="/contact"?pt(St):pt(kt,!1)},!0)}x(Te,Re)};G(Me,Te=>{v(e)==="/privacy"?Te(_e):Te(ve,!1)},!0)}x(Ue,st)};G(We,Ue=>{v(e)==="/terms"?Ue(Ye):Ue(tt,!1)},!0)}x(ze,Oe)};G(ye,ze=>{v(e)==="/help"?ze(Pe):ze(Le,!1)},!0)}x(re,be)};G(se,re=>{v(e)==="/about"?re(oe):re(Ee,!1)},!0)}x(Q,F)};G(M,Q=>{v(e)==="/settings"?Q(B):Q(O,!1)},!0)}x(U,S)};G(J,U=>{v(e)==="/chat/list"?U(te):U(ue,!1)},!0)}x(H,Y)};G(ce,H=>{v(e).startsWith("/post/detail/")?H(ae):H(ie,!1)},!0)}x(W,Z)};G(j,W=>{v(e)==="/post/list"?W(K):W(ee,!1)},!0)}x(N,$)};G(A,N=>{v(e)==="/user/list"?N(E):N(T,!1)},!0)}x(D,q)};G(P,D=>{v(e)==="/user/profile"?D(C):D(L,!1)},!0)}x(k,I)};G(b,k=>{v(e)==="/menu"?k(g):k(w,!1)},!0)}x(m,p)};G(o,m=>{v(e)==="/user/login"?m(a):m(l,!1)})}c(i);var u=h(i,2);tb(u,{}),c(s);var f=h(s,2);eb(f,{}),h(f,2),x(n,r)}pe(nb,{},[],[],!0);rd(nb,{target:document.getElementById("app")});
