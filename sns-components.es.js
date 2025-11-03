typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const uo = 1, ho = 2, Hu = 4, Ip = 8, Cp = 16, Tp = 1, Sp = 2, Vu = 4, kp = 8, Ap = 16, Rp = 1, Pp = 2, ju = "[", fo = "[!", Qa = "]", xi = {}, We = Symbol(), Np = "http://www.w3.org/1999/xhtml", xp = "http://www.w3.org/2000/svg", Lp = "@attach", zu = !1;
var Ja = Array.isArray, Op = Array.prototype.indexOf, Xa = Array.from, xs = Object.keys, xr = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Bu = Object.getOwnPropertyDescriptors, Dp = Object.prototype, Mp = Array.prototype, Za = Object.getPrototypeOf, dc = Object.isExtensible;
function rr(t) {
  return typeof t == "function";
}
const In = () => {
};
function $p(t) {
  return t();
}
function Ls(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function qu() {
  var t, e, n = new Promise((i, r) => {
    t = i, e = r;
  });
  return { promise: n, resolve: t, reject: e };
}
function Fp(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const i of t)
    if (n.push(i), n.length === e) break;
  return n;
}
const Ge = 2, el = 4, po = 8, cn = 16, un = 32, On = 64, mo = 128, Be = 1024, st = 2048, dn = 4096, ht = 8192, tn = 16384, tl = 32768, Xn = 65536, hc = 1 << 17, Up = 1 << 18, li = 1 << 19, Gu = 1 << 20, vt = 256, Os = 512, Ds = 32768, da = 1 << 21, nl = 1 << 22, Yn = 1 << 23, $t = Symbol("$state"), il = Symbol("legacy props"), Wp = Symbol(""), wi = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Hp = 1, rl = 3, Bi = 8;
function Ku(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Vp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jp(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bp(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Kp(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Yp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function _o(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function em() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function dt(t) {
  F = t;
}
let Y;
function Ve(t) {
  if (t === null)
    throw _o(), xi;
  return Y = t;
}
function Zn() {
  return Ve(
    /** @type {TemplateNode} */
    /* @__PURE__ */ jt(Y)
  );
}
function m(t) {
  if (F) {
    if (/* @__PURE__ */ jt(Y) !== null)
      throw _o(), xi;
    Y = t;
  }
}
function Kt(t = 1) {
  if (F) {
    for (var e = t, n = Y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n);
    Y = n;
  }
}
function Ms(t = !0) {
  for (var e = 0, n = Y; ; ) {
    if (n.nodeType === Bi) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === Qa) {
        if (e === 0) return n;
        e -= 1;
      } else (i === ju || i === fo) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    );
    t && n.remove(), n = r;
  }
}
function Yu(t) {
  if (!t || t.nodeType !== Bi)
    throw _o(), xi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Qu(t) {
  return t === this.v;
}
function Ju(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Xu(t) {
  return !Ju(t, this.v);
}
let qi = !1, tm = !1;
function nm() {
  qi = !0;
}
let Ee = null;
function Li(t) {
  Ee = t;
}
function Dn(t, e = !1, n) {
  Ee = {
    p: Ee,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Mn(t) {
  var e = (
    /** @type {ComponentContext} */
    Ee
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var i of n)
      gd(i);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ee = e.p, t ?? /** @type {T} */
  {};
}
function Qr() {
  return !qi || Ee !== null && Ee.l === null;
}
let Gn = [];
function Zu() {
  var t = Gn;
  Gn = [], Ls(t);
}
function $n(t) {
  if (Gn.length === 0 && !yr) {
    var e = Gn;
    queueMicrotask(() => {
      e === Gn && Zu();
    });
  }
  Gn.push(t);
}
function im() {
  for (; Gn.length > 0; )
    Zu();
}
function ed(t) {
  var e = U;
  if (e === null)
    return K.f |= Yn, t;
  if ((e.f & tl) === 0) {
    if ((e.f & mo) === 0)
      throw t;
    e.b.error(t);
  } else
    Oi(t, e);
}
function Oi(t, e) {
  for (; e !== null; ) {
    if ((e.f & mo) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const ws = /* @__PURE__ */ new Set();
let te = null, vr = null, Ct = null, Mt = [], go = null, ha = !1, yr = !1;
class kt {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #i = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #a = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    Mt = [], vr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of e)
      this.#r(i, n);
    this.is_fork || this.#c(), this.#i > 0 || this.is_fork ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (vr = this, te = null, fc(n.render_effects), fc(n.effects), vr = null, this.#l?.resolve()), Ct = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #r(e, n) {
    e.f ^= Be;
    for (var i = e.first; i !== null; ) {
      var r = i.f, s = (r & (un | On)) !== 0, o = s && (r & Be) !== 0, a = o || (r & ht) !== 0 || this.skipped_effects.has(i);
      if ((i.f & mo) !== 0 && i.b?.is_pending() && (n = {
        parent: n,
        effect: i,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && i.fn !== null) {
        s ? i.f ^= Be : (r & el) !== 0 ? n.effects.push(i) : es(i) && ((i.f & cn) !== 0 && n.block_effects.push(i), Or(i));
        var l = i.first;
        if (l !== null) {
          i = l;
          continue;
        }
      }
      var c = i.parent;
      for (i = i.next; i === null && c !== null; )
        c === n.effect && (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), i = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const n of e)
      ((n.f & st) !== 0 ? this.#o : this.#a).push(n), qe(n, Be);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), this.current.set(e, e.v), Ct?.set(e, e.v);
  }
  activate() {
    te = this;
  }
  deactivate() {
    te = null, Ct = null;
  }
  flush() {
    if (this.activate(), Mt.length > 0) {
      if (td(), te !== null && te !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#e) e(this);
    this.#e.clear();
  }
  #c() {
    if (this.#i === 0) {
      for (const e of this.#t) e();
      this.#t.clear();
    }
    this.#n === 0 && this.#u();
  }
  #u() {
    if (ws.size > 1) {
      this.previous.clear();
      var e = Ct, n = !0, i = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const r of ws) {
        if (r === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [a, l] of this.current) {
          if (r.current.has(a))
            if (n && l !== r.current.get(a))
              r.current.set(a, l);
            else
              continue;
          s.push(a);
        }
        if (s.length === 0)
          continue;
        const o = [...r.current.keys()].filter((a) => !this.current.has(a));
        if (o.length > 0) {
          const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const c of s)
            nd(c, o, a, l);
          if (Mt.length > 0) {
            te = r, r.apply();
            for (const c of Mt)
              r.#r(c, i);
            Mt = [], r.deactivate();
          }
        }
      }
      te = null, Ct = e;
    }
    this.committed = !0, ws.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#i += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#i -= 1), this.revive();
  }
  revive() {
    for (const e of this.#o)
      qe(e, st), ei(e);
    for (const e of this.#a)
      qe(e, dn), ei(e);
    this.#o = [], this.#a = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#t.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#e.add(e);
  }
  settled() {
    return (this.#l ??= qu()).promise;
  }
  static ensure() {
    if (te === null) {
      const e = te = new kt();
      ws.add(te), yr || kt.enqueue(() => {
        te === e && e.flush();
      });
    }
    return te;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    $n(e);
  }
  apply() {
  }
}
function ct(t) {
  var e = yr;
  yr = !0;
  try {
    for (var n; ; ) {
      if (im(), Mt.length === 0 && (te?.flush(), Mt.length === 0))
        return go = null, /** @type {T} */
        n;
      td();
    }
  } finally {
    yr = e;
  }
}
function td() {
  var t = Ti;
  ha = !0;
  try {
    var e = 0;
    for (vc(!0); Mt.length > 0; ) {
      var n = kt.ensure();
      if (e++ > 1e3) {
        var i, r;
        rm();
      }
      n.process(Mt), Cn.clear();
    }
  } finally {
    ha = !1, vc(t), go = null;
  }
}
function rm() {
  try {
    qp();
  } catch (t) {
    Oi(t, go);
  }
}
let Yt = null;
function fc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var i = t[n++];
      if ((i.f & (tn | ht)) === 0 && es(i) && (Yt = /* @__PURE__ */ new Set(), Or(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? bd(i) : i.fn = null), Yt?.size > 0)) {
        Cn.clear();
        for (const r of Yt) {
          if ((r.f & (tn | ht)) !== 0) continue;
          const s = [r];
          let o = r.parent;
          for (; o !== null; )
            Yt.has(o) && (Yt.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (tn | ht)) === 0 && Or(l);
          }
        }
        Yt.clear();
      }
    }
    Yt = null;
  }
}
function nd(t, e, n, i) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const s = r.f;
      (s & Ge) !== 0 ? nd(
        /** @type {Derived} */
        r,
        e,
        n,
        i
      ) : (s & (nl | cn)) !== 0 && (s & st) === 0 && // we may have scheduled this one already
      id(r, e, i) && (qe(r, st), ei(
        /** @type {Effect} */
        r
      ));
    }
}
function id(t, e, n) {
  const i = n.get(t);
  if (i !== void 0) return i;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if ((r.f & Ge) !== 0 && id(
        /** @type {Derived} */
        r,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function ei(t) {
  for (var e = go = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ha && e === U && (n & cn) !== 0)
      return;
    if ((n & (On | un)) !== 0) {
      if ((n & Be) === 0) return;
      e.f ^= Be;
    }
  }
  Mt.push(e);
}
function sm(t) {
  let e = 0, n = Pn(0), i;
  return () => {
    _m() && (v(n), yo(() => (e === 0 && (i = Vt(() => t(() => br(n)))), e += 1, () => {
      $n(() => {
        e -= 1, e === 0 && (i?.(), i = void 0, br(n));
      });
    })));
  };
}
var om = Xn | li | mo;
function am(t, e, n) {
  new lm(t, e, n);
}
class lm {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = F ? Y : null;
  /** @type {BoundaryProps} */
  #i;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #f = 0;
  #d = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #y = sm(() => (this.#h = Pn(this.#f), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, i) {
    this.#e = e, this.#i = n, this.#l = i, this.parent = /** @type {Effect} */
    U.b, this.#t = !!this.#i.pending, this.#o = Gi(() => {
      if (U.b = this, F) {
        const s = this.#n;
        Zn(), /** @type {Comment} */
        s.nodeType === Bi && /** @type {Comment} */
        s.data === fo ? this.#w() : this.#b();
      } else {
        var r = this.#g();
        try {
          this.#a = nt(() => i(r));
        } catch (s) {
          this.error(s);
        }
        this.#d > 0 ? this.#_() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, om), F && (this.#e = Y);
  }
  #b() {
    try {
      this.#a = nt(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#i.pending;
    e && (this.#r = nt(() => e(this.#e)), kt.enqueue(() => {
      var n = this.#g();
      this.#a = this.#m(() => (kt.ensure(), nt(() => this.#l(n)))), this.#d > 0 ? this.#_() : (Ci(
        /** @type {Effect} */
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#t = !1);
    }));
  }
  #g() {
    var e = this.#e;
    return this.#t && (this.#u = yt(), this.#e.before(this.#u), e = this.#u), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #m(e) {
    var n = U, i = K, r = Ee;
    bt(this.#o), it(this.#o), Li(this.#o.ctx);
    try {
      return e();
    } catch (s) {
      return ed(s), null;
    } finally {
      bt(n), it(i), Li(r);
    }
  }
  #_() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#a !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), Id(this.#a, this.#c)), this.#r === null && (this.#r = nt(() => e(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #v(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#v(e);
      return;
    }
    this.#d += e, this.#d === 0 && (this.#t = !1, this.#r && Ci(this.#r, () => {
      this.#r = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#v(e), this.#f += e, this.#h && Di(this.#h, this.#f);
  }
  get_effect_pending() {
    return this.#y(), v(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#i.onerror;
    let i = this.#i.failed;
    if (this.#p || !n && !i)
      throw e;
    this.#a && (xe(this.#a), this.#a = null), this.#r && (xe(this.#r), this.#r = null), this.#s && (xe(this.#s), this.#s = null), F && (Ve(
      /** @type {TemplateNode} */
      this.#n
    ), Kt(), Ve(Ms()));
    var r = !1, s = !1;
    const o = () => {
      if (r) {
        em();
        return;
      }
      r = !0, s && Xp(), kt.ensure(), this.#f = 0, this.#s !== null && Ci(this.#s, () => {
        this.#s = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#m(() => (this.#p = !1, nt(() => this.#l(this.#e)))), this.#d > 0 ? this.#_() : this.#t = !1;
    };
    var a = K;
    try {
      it(null), s = !0, n?.(e, o), s = !1;
    } catch (l) {
      Oi(l, this.#o && this.#o.parent);
    } finally {
      it(a);
    }
    i && $n(() => {
      this.#s = this.#m(() => {
        kt.ensure(), this.#p = !0;
        try {
          return nt(() => {
            i(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Oi(
            l,
            /** @type {Effect} */
            this.#o.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function rd(t, e, n, i) {
  const r = Qr() ? Jr : sl;
  if (n.length === 0 && t.length === 0) {
    i(e.map(r));
    return;
  }
  var s = te, o = (
    /** @type {Effect} */
    U
  ), a = cm();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ um(c))).then((c) => {
      a();
      try {
        i([...e.map(r), ...c]);
      } catch (d) {
        (o.f & tn) === 0 && Oi(d, o);
      }
      s?.deactivate(), $s();
    }).catch((c) => {
      Oi(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), $s();
    }
  }) : l();
}
function cm() {
  var t = U, e = K, n = Ee, i = te;
  return function(s = !0) {
    bt(t), it(e), Li(n), s && i?.activate();
  };
}
function $s() {
  bt(null), it(null), Li(null);
}
// @__NO_SIDE_EFFECTS__
function Jr(t) {
  var e = Ge | st, n = K !== null && (K.f & Ge) !== 0 ? (
    /** @type {Derived} */
    K
  ) : null;
  return U === null || n !== null && (n.f & vt) !== 0 ? e |= vt : U.f |= li, {
    ctx: Ee,
    deps: null,
    effects: null,
    equals: Qu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      We
    ),
    wv: 0,
    parent: n ?? U,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function um(t, e) {
  let n = (
    /** @type {Effect | null} */
    U
  );
  n === null && Vp();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Pn(
    /** @type {V} */
    We
  ), o = !K, a = /* @__PURE__ */ new Map();
  return bm(() => {
    var l = qu();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === te && c.committed && c.deactivate(), $s();
      });
    } catch (u) {
      l.reject(u), $s();
    }
    var c = (
      /** @type {Batch} */
      te
    );
    if (o) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), a.get(c)?.reject(wi), a.delete(c), a.set(c, l);
    }
    const h = (u, f = void 0) => {
      if (c.activate(), f)
        f !== wi && (s.f |= Yn, Di(s, f));
      else {
        (s.f & Yn) !== 0 && (s.f ^= Yn), Di(s, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(wi);
        }
      }
      o && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (u) => h(null, u || "unknown"));
  }), Xr(() => {
    for (const l of a.values())
      l.reject(wi);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === r ? l(s) : c(r);
      }
      d.then(h, h);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function fa(t) {
  const e = /* @__PURE__ */ Jr(t);
  return Cd(e), e;
}
// @__NO_SIDE_EFFECTS__
function sl(t) {
  const e = /* @__PURE__ */ Jr(t);
  return e.equals = Xu, e;
}
function sd(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      xe(
        /** @type {Effect} */
        e[n]
      );
  }
}
function dm(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Ge) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ol(t) {
  var e, n = U;
  bt(dm(t));
  try {
    t.f &= ~Ds, sd(t), e = Ad(t);
  } finally {
    bt(n);
  }
  return e;
}
function od(t) {
  var e = ol(t);
  if (t.equals(e) || (t.v = e, t.wv = Sd()), !ci)
    if (Ct !== null)
      Ct.set(t, t.v);
    else {
      var n = (bn || (t.f & vt) !== 0) && t.deps !== null ? dn : Be;
      qe(t, n);
    }
}
let pa = /* @__PURE__ */ new Set();
const Cn = /* @__PURE__ */ new Map();
let ad = !1;
function Pn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Qu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  const n = Pn(t);
  return Cd(n), n;
}
// @__NO_SIDE_EFFECTS__
function al(t, e = !1, n = !0) {
  const i = Pn(t);
  return e || (i.equals = Xu), qi && n && Ee !== null && Ee.l !== null && (Ee.l.s ??= []).push(i), i;
}
function L(t, e, n = !1) {
  K !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tt || (K.f & hc) !== 0) && Qr() && (K.f & (Ge | cn | nl | hc)) !== 0 && !nn?.includes(t) && Jp();
  let i = n ? Qt(e) : e;
  return Di(t, i);
}
function Di(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ci ? Cn.set(t, e) : Cn.set(t, n), t.v = e;
    var i = kt.ensure();
    i.capture(t, n), (t.f & Ge) !== 0 && ((t.f & st) !== 0 && ol(
      /** @type {Derived} */
      t
    ), qe(t, (t.f & vt) === 0 ? Be : dn)), t.wv = Sd(), ld(t, st), Qr() && U !== null && (U.f & Be) !== 0 && (U.f & (un | On)) === 0 && (mt === null ? Im([t]) : mt.push(t)), !i.is_fork && pa.size > 0 && !ad && hm();
  }
  return e;
}
function hm() {
  ad = !1;
  const t = Array.from(pa);
  for (const e of t)
    (e.f & Be) !== 0 && qe(e, dn), es(e) && Or(e);
  pa.clear();
}
function pc(t, e = 1) {
  var n = v(t), i = e === 1 ? n++ : n--;
  return L(t, n), i;
}
function br(t) {
  L(t, t.v + 1);
}
function ld(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var i = Qr(), r = n.length, s = 0; s < r; s++) {
      var o = n[s], a = o.f;
      if (!(!i && o === U)) {
        var l = (a & st) === 0;
        l && qe(o, e), (a & Ge) !== 0 ? (a & Ds) === 0 && (o.f |= Ds, ld(
          /** @type {Derived} */
          o,
          dn
        )) : l && ((a & cn) !== 0 && Yt !== null && Yt.add(
          /** @type {Effect} */
          o
        ), ei(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Qt(t) {
  if (typeof t != "object" || t === null || $t in t)
    return t;
  const e = Za(t);
  if (e !== Dp && e !== Mp)
    return t;
  var n = /* @__PURE__ */ new Map(), i = Ja(t), r = /* @__PURE__ */ he(0), s = Qn, o = (a) => {
    if (Qn === s)
      return a();
    var l = K, c = Qn;
    it(null), bc(s);
    var d = a();
    return it(l), bc(c), d;
  };
  return i && n.set("length", /* @__PURE__ */ he(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Yp();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ he(c.value);
          return n.set(l, h), h;
        }) : L(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = o(() => /* @__PURE__ */ he(We));
            n.set(l, d), br(r);
          }
        } else
          L(c, We), br(r);
        return !0;
      },
      get(a, l, c) {
        if (l === $t)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || en(a, l)?.writable) && (d = o(() => {
          var f = Qt(h ? a[l] : We), p = /* @__PURE__ */ he(f);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var u = v(d);
          return u === We ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = v(d));
        } else if (c === void 0) {
          var h = n.get(l), u = h?.v;
          if (h !== void 0 && u !== We)
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === $t)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== We || Reflect.has(a, l);
        if (c !== void 0 || U !== null && (!d || en(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = d ? Qt(a[l]) : We, f = /* @__PURE__ */ he(u);
            return f;
          }), n.set(l, c));
          var h = v(c);
          if (h === We)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), u = l in a;
        if (i && l === "length")
          for (var f = c; f < /** @type {Source<number>} */
          h.v; f += 1) {
            var p = n.get(f + "");
            p !== void 0 ? L(p, We) : f in a && (p = o(() => /* @__PURE__ */ he(We)), n.set(f + "", p));
          }
        if (h === void 0)
          (!u || en(a, l)?.writable) && (h = o(() => /* @__PURE__ */ he(void 0)), L(h, Qt(c)), n.set(l, h));
        else {
          u = h.v !== We;
          var g = o(() => Qt(c));
          L(h, g);
        }
        var E = Reflect.getOwnPropertyDescriptor(a, l);
        if (E?.set && E.set.call(d, c), !u) {
          if (i && typeof l == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= S.v && L(S, T + 1);
          }
          br(r);
        }
        return !0;
      },
      ownKeys(a) {
        v(r);
        var l = Reflect.ownKeys(a).filter((h) => {
          var u = n.get(h);
          return u === void 0 || u.v !== We;
        });
        for (var [c, d] of n)
          d.v !== We && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Qp();
      }
    }
  );
}
function mc(t) {
  try {
    if (t !== null && typeof t == "object" && $t in t)
      return t[$t];
  } catch {
  }
  return t;
}
function fm(t, e) {
  return Object.is(mc(t), mc(e));
}
var _c, cd, ud, dd;
function ma() {
  if (_c === void 0) {
    _c = window, cd = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ud = en(e, "firstChild").get, dd = en(e, "nextSibling").get, dc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), dc(n) && (n.__t = void 0);
  }
}
function yt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ht(t) {
  return ud.call(t);
}
// @__NO_SIDE_EFFECTS__
function jt(t) {
  return dd.call(t);
}
function _(t, e) {
  if (!F)
    return /* @__PURE__ */ Ht(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(Y)
  );
  if (n === null)
    n = Y.appendChild(yt());
  else if (e && n.nodeType !== rl) {
    var i = yt();
    return n?.before(i), Ve(i), i;
  }
  return Ve(n), n;
}
function fe(t, e = !1) {
  if (!F) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ht(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ jt(n) : n;
  }
  if (e && Y?.nodeType !== rl) {
    var i = yt();
    return Y?.before(i), Ve(i), i;
  }
  return Y;
}
function y(t, e = 1, n = !1) {
  let i = F ? Y : t;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ jt(i);
  if (!F)
    return i;
  if (n && i?.nodeType !== rl) {
    var s = yt();
    return i === null ? r?.after(s) : i.before(s), Ve(s), s;
  }
  return Ve(i), /** @type {TemplateNode} */
  i;
}
function hd(t) {
  t.textContent = "";
}
function fd() {
  return !1;
}
function pm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, $n(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let gc = !1;
function pd() {
  gc || (gc = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function vo(t) {
  var e = K, n = U;
  it(null), bt(null);
  try {
    return t();
  } finally {
    it(e), bt(n);
  }
}
function md(t, e, n, i = n) {
  t.addEventListener(e, () => vo(n));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), i(!0);
  } : t.__on_r = () => i(!0), pd();
}
function _d(t) {
  U === null && K === null && Bp(), K !== null && (K.f & vt) !== 0 && U === null && zp(), ci && jp();
}
function mm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function xt(t, e, n, i = !0) {
  var r = U;
  r !== null && (r.f & ht) !== 0 && (t |= ht);
  var s = {
    ctx: Ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | st,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Or(s), s.f |= tl;
    } catch (l) {
      throw xe(s), l;
    }
  else e !== null && ei(s);
  if (i) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & li) === 0 && (o = o.first, (t & cn) !== 0 && (t & Xn) !== 0 && o !== null && (o.f |= Xn)), o !== null && (o.parent = r, r !== null && mm(o, r), K !== null && (K.f & Ge) !== 0 && (t & On) === 0)) {
      var a = (
        /** @type {Derived} */
        K
      );
      (a.effects ??= []).push(o);
    }
  }
  return s;
}
function _m() {
  return K !== null && !Tt;
}
function Xr(t) {
  const e = xt(po, null, !1);
  return qe(e, Be), e.teardown = t, e;
}
function _a(t) {
  _d();
  var e = (
    /** @type {Effect} */
    U.f
  ), n = !K && (e & un) !== 0 && (e & tl) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      Ee
    );
    (i.e ??= []).push(t);
  } else
    return gd(t);
}
function gd(t) {
  return xt(el | Gu, t, !1);
}
function gm(t) {
  return _d(), xt(po | Gu, t, !0);
}
function vm(t) {
  kt.ensure();
  const e = xt(On | li, t, !0);
  return () => {
    xe(e);
  };
}
function ym(t) {
  kt.ensure();
  const e = xt(On | li, t, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ci(e, () => {
      xe(e), i(void 0);
    }) : (xe(e), i(void 0));
  });
}
function Zr(t) {
  return xt(el, t, !1);
}
function bm(t) {
  return xt(nl | li, t, !0);
}
function yo(t, e = 0) {
  return xt(po | e, t, !0);
}
function ce(t, e = [], n = [], i = []) {
  rd(i, e, n, (r) => {
    xt(po, () => t(...r.map(v)), !0);
  });
}
function Gi(t, e = 0) {
  var n = xt(cn | e, t, !0);
  return n;
}
function nt(t, e = !0) {
  return xt(un | li, t, !0, e);
}
function vd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ci, i = K;
    yc(!0), it(null);
    try {
      e.call(null);
    } finally {
      yc(n), it(i);
    }
  }
}
function yd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && vo(() => {
      r.abort(wi);
    });
    var i = n.next;
    (n.f & On) !== 0 ? n.parent = null : xe(n, e), n = i;
  }
}
function wm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & un) === 0 && xe(e), e = n;
  }
}
function xe(t, e = !0) {
  var n = !1;
  (e || (t.f & Up) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Em(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), yd(t, e && !n), Fs(t, 0), qe(t, tn);
  var i = t.transitions;
  if (i !== null)
    for (const s of i)
      s.stop();
  vd(t);
  var r = t.parent;
  r !== null && r.first !== null && bd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Em(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(t)
    );
    t.remove(), t = n;
  }
}
function bd(t) {
  var e = t.parent, n = t.prev, i = t.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = n));
}
function Ci(t, e, n = !0) {
  var i = [];
  ll(t, i, !0), wd(i, () => {
    n && xe(t), e && e();
  });
}
function wd(t, e) {
  var n = t.length;
  if (n > 0) {
    var i = () => --n || e();
    for (var r of t)
      r.out(i);
  } else
    e();
}
function ll(t, e, n) {
  if ((t.f & ht) === 0) {
    if (t.f ^= ht, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var r = i.next, s = (i.f & Xn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & un) !== 0 && (t.f & cn) !== 0;
      ll(i, e, s ? n : !1), i = r;
    }
  }
}
function cl(t) {
  Ed(t, !0);
}
function Ed(t, e) {
  if ((t.f & ht) !== 0) {
    t.f ^= ht, (t.f & Be) === 0 && (qe(t, st), ei(t));
    for (var n = t.first; n !== null; ) {
      var i = n.next, r = (n.f & Xn) !== 0 || (n.f & un) !== 0;
      Ed(n, r ? e : !1), n = i;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function Id(t, e) {
  for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
    var r = n === i ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    );
    e.append(n), n = r;
  }
}
let Ti = !1;
function vc(t) {
  Ti = t;
}
let ci = !1;
function yc(t) {
  ci = t;
}
let K = null, Tt = !1;
function it(t) {
  K = t;
}
let U = null;
function bt(t) {
  U = t;
}
let nn = null;
function Cd(t) {
  K !== null && (nn === null ? nn = [t] : nn.push(t));
}
let Je = null, lt = 0, mt = null;
function Im(t) {
  mt = t;
}
let Td = 1, Lr = 0, Qn = Lr;
function bc(t) {
  Qn = t;
}
let bn = !1;
function Sd() {
  return ++Td;
}
function es(t) {
  var e = t.f;
  if ((e & st) !== 0)
    return !0;
  if ((e & dn) !== 0) {
    var n = t.deps, i = (e & vt) !== 0;
    if (e & Ge && (t.f &= ~Ds), n !== null) {
      var r, s, o = (e & Os) !== 0, a = i && U !== null && !bn, l = n.length;
      if ((o || a) && (U === null || (U.f & tn) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (r = 0; r < l; r++)
          s = n[r], (o || !s?.reactions?.includes(c)) && (s.reactions ??= []).push(c);
        o && (c.f ^= Os), a && d !== null && (d.f & vt) === 0 && (c.f ^= vt);
      }
      for (r = 0; r < l; r++)
        if (s = n[r], es(
          /** @type {Derived} */
          s
        ) && od(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!i || U !== null && !bn) && qe(t, Be);
  }
  return !1;
}
function kd(t, e, n = !0) {
  var i = t.reactions;
  if (i !== null && !nn?.includes(t))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & Ge) !== 0 ? kd(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? qe(s, st) : (s.f & Be) !== 0 && qe(s, dn), ei(
        /** @type {Effect} */
        s
      ));
    }
}
function Ad(t) {
  var e = Je, n = lt, i = mt, r = K, s = bn, o = nn, a = Ee, l = Tt, c = Qn, d = t.f;
  Je = /** @type {null | Value[]} */
  null, lt = 0, mt = null, bn = (d & vt) !== 0 && (Tt || !Ti || K === null), K = (d & (un | On)) === 0 ? t : null, nn = null, Li(t.ctx), Tt = !1, Qn = ++Lr, t.ac !== null && (vo(() => {
    t.ac.abort(wi);
  }), t.ac = null);
  try {
    t.f |= da;
    var h = (
      /** @type {Function} */
      t.fn
    ), u = h(), f = t.deps;
    if (Je !== null) {
      var p;
      if (Fs(t, lt), f !== null && lt > 0)
        for (f.length = lt + Je.length, p = 0; p < Je.length; p++)
          f[lt + p] = Je[p];
      else
        t.deps = f = Je;
      if (!bn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ge) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = lt; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && lt < f.length && (Fs(t, lt), f.length = lt);
    if (Qr() && mt !== null && !Tt && f !== null && (t.f & (Ge | dn | st)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      mt.length; p++)
        kd(
          mt[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (Lr++, mt !== null && (i === null ? i = mt : i.push(.../** @type {Source[]} */
    mt))), (t.f & Yn) !== 0 && (t.f ^= Yn), u;
  } catch (g) {
    return ed(g);
  } finally {
    t.f ^= da, Je = e, lt = n, mt = i, K = r, bn = s, nn = o, Li(a), Tt = l, Qn = c;
  }
}
function Cm(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var i = Op.call(n, t);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = e.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (e.f & Ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Je === null || !Je.includes(e)) && (qe(e, dn), (e.f & (vt | Os)) === 0 && (e.f ^= Os), sd(
    /** @type {Derived} **/
    e
  ), Fs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Fs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var i = e; i < n.length; i++)
      Cm(t, n[i]);
}
function Or(t) {
  var e = t.f;
  if ((e & tn) === 0) {
    qe(t, Be);
    var n = U, i = Ti;
    U = t, Ti = !0;
    try {
      (e & cn) !== 0 ? wm(t) : yd(t), vd(t);
      var r = Ad(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Td;
      var s;
      zu && tm && (t.f & st) !== 0 && t.deps;
    } finally {
      Ti = i, U = n;
    }
  }
}
async function Tm() {
  await Promise.resolve(), ct();
}
function v(t) {
  var e = t.f, n = (e & Ge) !== 0;
  if (K !== null && !Tt) {
    var i = U !== null && (U.f & tn) !== 0;
    if (!i && !nn?.includes(t)) {
      var r = K.deps;
      if ((K.f & da) !== 0)
        t.rv < Lr && (t.rv = Lr, Je === null && r !== null && r[lt] === t ? lt++ : Je === null ? Je = [t] : (!bn || !Je.includes(t)) && Je.push(t));
      else {
        (K.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [K] : s.includes(K) || s.push(K);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), a = o.parent;
    a !== null && (a.f & vt) === 0 && (o.f ^= vt);
  }
  if (ci) {
    if (Cn.has(t))
      return Cn.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & Be) === 0 && o.reactions !== null || Rd(o)) && (l = ol(o)), Cn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ct?.has(o))
      return Ct.get(o);
    es(o) && od(o);
  }
  if (Ct?.has(t))
    return Ct.get(t);
  if ((t.f & Yn) !== 0)
    throw t.v;
  return t.v;
}
function Rd(t) {
  if (t.v === We) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Cn.has(e) || (e.f & Ge) !== 0 && Rd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Vt(t) {
  var e = Tt;
  try {
    return Tt = !0, t();
  } finally {
    Tt = e;
  }
}
const Sm = -7169;
function qe(t, e) {
  t.f = t.f & Sm | e;
}
function bi(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($t in t)
      ga(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $t in n && ga(n);
      }
  }
}
function ga(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let i in t)
      try {
        ga(t[i], e);
      } catch {
      }
    const n = Za(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const i = Bu(n);
      for (let r in i) {
        const s = i[r].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const Pd = /* @__PURE__ */ new Set(), va = /* @__PURE__ */ new Set();
function Nd(t, e, n, i = {}) {
  function r(s) {
    if (i.capture || hr.call(e, s), !s.cancelBubble)
      return vo(() => n?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? $n(() => {
    e.addEventListener(t, r, i);
  }) : e.addEventListener(t, r, i), r;
}
function wc(t, e, n, i, r) {
  var s = { capture: i, passive: r }, o = Nd(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Xr(() => {
    e.removeEventListener(t, o, s);
  });
}
function ts(t) {
  for (var e = 0; e < t.length; e++)
    Pd.add(t[e]);
  for (var n of va)
    n(t);
}
let Ec = null;
function hr(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, r = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  Ec = t;
  var o = 0, a = Ec === t && t.__root;
  if (a) {
    var l = r.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = r.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (s = /** @type {Element} */
  r[o] || t.target, s !== e) {
    xr(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = K, h = U;
    it(null), bt(null);
    try {
      for (var u, f = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s["__" + i];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && g.call(s, t);
        } catch (E) {
          u ? f.push(E) : u = E;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (u) {
        for (let E of f)
          queueMicrotask(() => {
            throw E;
          });
        throw u;
      }
    } finally {
      t.__root = e, delete t.currentTarget, it(d), bt(h);
    }
  }
}
function xd(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function rn(t, e) {
  var n = (
    /** @type {Effect} */
    U
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function j(t, e) {
  var n = (e & Rp) !== 0, i = (e & Pp) !== 0, r, s = !t.startsWith("<!>");
  return () => {
    if (F)
      return rn(Y, null), Y;
    r === void 0 && (r = xd(s ? t : "<!>" + t), n || (r = /** @type {Node} */
    /* @__PURE__ */ Ht(r)));
    var o = (
      /** @type {TemplateNode} */
      i || cd ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      rn(a, l);
    } else
      rn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function km(t, e, n = "svg") {
  var i = !t.startsWith("<!>"), r = `<${n}>${i ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (F)
      return rn(Y, null), Y;
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        xd(r)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ Ht(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Ht(a);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return rn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Am(t, e) {
  return /* @__PURE__ */ km(t, e, "svg");
}
function Ae() {
  if (F)
    return rn(Y, null), Y;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = yt();
  return t.append(e, n), rn(e, n), t;
}
function x(t, e) {
  if (F) {
    U.nodes_end = Y, Zn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Rm(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Pm = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Nm(t) {
  return Pm.includes(t);
}
const xm = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Lm(t) {
  return t = t.toLowerCase(), xm[t] ?? t;
}
const Om = ["touchstart", "touchmove"];
function Dm(t) {
  return Om.includes(t);
}
const Mm = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function $m(t) {
  return Mm.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function R(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ld(t, e) {
  return Od(t, e);
}
function Fm(t, e) {
  ma(), e.intro = e.intro ?? !1;
  const n = e.target, i = F, r = Y;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n)
    ); s && (s.nodeType !== Bi || /** @type {Comment} */
    s.data !== ju); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ jt(s);
    if (!s)
      throw xi;
    dt(!0), Ve(
      /** @type {Comment} */
      s
    );
    const o = Od(t, { ...e, anchor: s });
    return dt(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== xi && console.warn("Failed to hydrate: ", o), e.recover === !1 && Gp(), ma(), hd(n), dt(!1), Ld(t, e);
  } finally {
    dt(i), Ve(r);
  }
}
const gi = /* @__PURE__ */ new Map();
function Od(t, { target: e, anchor: n, props: i = {}, events: r, context: s, intro: o = !0 }) {
  ma();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var u = 0; u < h.length; u++) {
      var f = h[u];
      if (!a.has(f)) {
        a.add(f);
        var p = Dm(f);
        e.addEventListener(f, hr, { passive: p });
        var g = gi.get(f);
        g === void 0 ? (document.addEventListener(f, hr, { passive: p }), gi.set(f, 1)) : gi.set(f, g + 1);
      }
    }
  };
  l(Xa(Pd)), va.add(l);
  var c = void 0, d = ym(() => {
    var h = n ?? e.appendChild(yt());
    return am(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (u) => {
        if (s) {
          Dn({});
          var f = (
            /** @type {ComponentContext} */
            Ee
          );
          f.c = s;
        }
        if (r && (i.$$events = r), F && rn(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, i) || {}, F && (U.nodes_end = Y, Y === null || Y.nodeType !== Bi || /** @type {Comment} */
        Y.data !== Qa))
          throw _o(), xi;
        s && Mn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, hr);
        var f = (
          /** @type {number} */
          gi.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, hr), gi.delete(u)) : gi.set(u, f);
      }
      va.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return ya.set(c, d), c;
}
let ya = /* @__PURE__ */ new WeakMap();
function Um(t, e) {
  const n = ya.get(t);
  return n ? (ya.delete(t), n(e)) : Promise.resolve();
}
class Dd {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #n = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #i = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#i = n;
  }
  #l = () => {
    var e = (
      /** @type {Batch} */
      te
    );
    if (this.#t.has(e)) {
      var n = (
        /** @type {Key} */
        this.#t.get(e)
      ), i = this.#e.get(n);
      if (i)
        cl(i);
      else {
        var r = this.#n.get(n);
        r && (this.#e.set(n, r.effect), this.#n.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const a = this.#n.get(o);
        a && (xe(a.effect), this.#n.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            Id(o, c), c.append(yt()), this.#n.set(s, { effect: o, fragment: c });
          } else
            xe(o);
          this.#e.delete(s);
        };
        this.#i || !i ? Ci(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const n = Array.from(this.#t.values());
    for (const [i, r] of this.#n)
      n.includes(i) || (xe(r.effect), this.#n.delete(i));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var i = (
      /** @type {Batch} */
      te
    ), r = fd();
    if (n && !this.#e.has(e) && !this.#n.has(e))
      if (r) {
        var s = document.createDocumentFragment(), o = yt();
        s.append(o), this.#n.set(e, {
          effect: nt(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          e,
          nt(() => n(this.anchor))
        );
    if (this.#t.set(i, e), r) {
      for (const [a, l] of this.#e)
        a === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(this.#l), i.ondiscard(this.#o);
    } else
      F && (this.anchor = Y), this.#l();
  }
}
function bo(t) {
  Ee === null && Ku(), qi && Ee.l !== null ? Hm(Ee).m.push(t) : _a(() => {
    const e = Vt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Wm(t) {
  Ee === null && Ku(), bo(() => () => Vt(t));
}
function Hm(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function ke(t, e, n = !1) {
  F && Zn();
  var i = new Dd(t), r = n ? Xn : 0;
  function s(o, a) {
    if (F) {
      const c = Yu(t) === fo;
      if (o === c) {
        var l = Ms();
        Ve(l), i.anchor = l, dt(!1), i.ensure(o, a), dt(!0);
        return;
      }
    }
    i.ensure(o, a);
  }
  Gi(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, r);
}
function wo(t, e) {
  return e;
}
function Vm(t, e, n) {
  for (var i = t.items, r = [], s = e.length, o = 0; o < s; o++)
    ll(e[o].e, r, !0);
  var a = s > 0 && r.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    hd(l), l.append(
      /** @type {Element} */
      n
    ), i.clear(), Dt(t, e[0].prev, e[s - 1].next);
  }
  wd(r, () => {
    for (var c = 0; c < s; c++) {
      var d = e[c];
      a || (i.delete(d.k), Dt(t, d.prev, d.next)), xe(d.e, !a);
    }
  });
}
function ns(t, e, n, i, r, s = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & Hu) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = F ? Ve(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ht(c)
    ) : c.appendChild(yt());
  }
  F && Zn();
  var d = null, h = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ sl(() => {
    var S = n();
    return Ja(S) ? S : S == null ? [] : Xa(S);
  }), p, g;
  function E() {
    jm(
      g,
      p,
      a,
      u,
      o,
      r,
      e,
      i,
      n
    ), s !== null && (p.length === 0 ? d ? cl(d) : d = nt(() => s(o)) : d !== null && Ci(d, () => {
      d = null;
    }));
  }
  Gi(() => {
    g ??= /** @type {Effect} */
    U, p = /** @type {V[]} */
    v(f);
    var S = p.length;
    if (h && S === 0)
      return;
    h = S === 0;
    let T = !1;
    if (F) {
      var k = Yu(o) === fo;
      k !== (S === 0) && (o = Ms(), Ve(o), dt(!1), T = !0);
    }
    if (F) {
      for (var P = null, O, w = 0; w < S; w++) {
        if (Y.nodeType === Bi && /** @type {Comment} */
        Y.data === Qa) {
          o = /** @type {Comment} */
          Y, T = !0, dt(!1);
          break;
        }
        var I = p[w], b = i(I, w);
        O = ba(
          Y,
          a,
          P,
          null,
          I,
          b,
          w,
          r,
          e,
          n
        ), a.items.set(b, O), P = O;
      }
      S > 0 && Ve(Ms());
    }
    if (F)
      S === 0 && s && (d = nt(() => s(o)));
    else if (fd()) {
      var D = /* @__PURE__ */ new Set(), N = (
        /** @type {Batch} */
        te
      );
      for (w = 0; w < S; w += 1) {
        I = p[w], b = i(I, w);
        var q = a.items.get(b) ?? u.get(b);
        q ? (e & (uo | ho)) !== 0 && Md(q, I, w, e) : (O = ba(
          null,
          a,
          null,
          null,
          I,
          b,
          w,
          r,
          e,
          n,
          !0
        ), u.set(b, O)), D.add(b);
      }
      for (const [M, G] of a.items)
        D.has(M) || N.skipped_effects.add(G.e);
      N.oncommit(E);
    } else
      E();
    T && dt(!0), v(f);
  }), F && (o = Y);
}
function jm(t, e, n, i, r, s, o, a, l) {
  var c = (o & Ip) !== 0, d = (o & (uo | ho)) !== 0, h = e.length, u = n.items, f = n.first, p = f, g, E = null, S, T = [], k = [], P, O, w, I;
  if (c)
    for (I = 0; I < h; I += 1)
      P = e[I], O = a(P, I), w = u.get(O), w !== void 0 && (w.a?.measure(), (S ??= /* @__PURE__ */ new Set()).add(w));
  for (I = 0; I < h; I += 1) {
    if (P = e[I], O = a(P, I), w = u.get(O), w === void 0) {
      var b = i.get(O);
      if (b !== void 0) {
        i.delete(O), u.set(O, b);
        var D = E ? E.next : p;
        Dt(n, E, b), Dt(n, b, D), jo(b, D, r), E = b;
      } else {
        var N = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : r;
        E = ba(
          N,
          n,
          E,
          E === null ? n.first : E.next,
          P,
          O,
          I,
          s,
          o,
          l
        );
      }
      u.set(O, E), T = [], k = [], p = E.next;
      continue;
    }
    if (d && Md(w, P, I, o), (w.e.f & ht) !== 0 && (cl(w.e), c && (w.a?.unfix(), (S ??= /* @__PURE__ */ new Set()).delete(w))), w !== p) {
      if (g !== void 0 && g.has(w)) {
        if (T.length < k.length) {
          var q = k[0], M;
          E = q.prev;
          var G = T[0], X = T[T.length - 1];
          for (M = 0; M < T.length; M += 1)
            jo(T[M], q, r);
          for (M = 0; M < k.length; M += 1)
            g.delete(k[M]);
          Dt(n, G.prev, X.next), Dt(n, E, G), Dt(n, X, q), p = q, E = X, I -= 1, T = [], k = [];
        } else
          g.delete(w), jo(w, p, r), Dt(n, w.prev, w.next), Dt(n, w, E === null ? n.first : E.next), Dt(n, E, w), E = w;
        continue;
      }
      for (T = [], k = []; p !== null && p.k !== O; )
        (p.e.f & ht) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
      w = p;
    }
    T.push(w), E = w, p = w.next;
  }
  if (p !== null || g !== void 0) {
    for (var W = g === void 0 ? [] : Xa(g); p !== null; )
      (p.e.f & ht) === 0 && W.push(p), p = p.next;
    var Q = W.length;
    if (Q > 0) {
      var ge = (o & Hu) !== 0 && h === 0 ? r : null;
      if (c) {
        for (I = 0; I < Q; I += 1)
          W[I].a?.measure();
        for (I = 0; I < Q; I += 1)
          W[I].a?.fix();
      }
      Vm(n, W, ge);
    }
  }
  c && $n(() => {
    if (S !== void 0)
      for (w of S)
        w.a?.apply();
  }), t.first = n.first && n.first.e, t.last = E && E.e;
  for (var re of i.values())
    xe(re.e);
  i.clear();
}
function Md(t, e, n, i) {
  (i & uo) !== 0 && Di(t.v, e), (i & ho) !== 0 ? Di(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ba(t, e, n, i, r, s, o, a, l, c, d) {
  var h = (l & uo) !== 0, u = (l & Cp) === 0, f = h ? u ? /* @__PURE__ */ al(r, !1, !1) : Pn(r) : r, p = (l & ho) === 0 ? o : Pn(o), g = {
    i: p,
    v: f,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: i
  };
  try {
    if (t === null) {
      var E = document.createDocumentFragment();
      E.append(t = yt());
    }
    return g.e = nt(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), F), g.e.prev = n && n.e, g.e.next = i && i.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), i !== null && (i.prev = g, i.e.prev = g.e), g;
  } finally {
  }
}
function jo(t, e, n) {
  for (var i = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, r = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); s !== null && s !== i; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(s)
    );
    r.before(s), s = o;
  }
}
function Dt(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Me(t, e, n, i, r) {
  F && Zn();
  var s = e.$$slots?.[n], o = !1;
  s === !0 && (s = e.children, o = !0), s === void 0 || s(t, o ? () => i : i);
}
function zm(t, e, n, i, r, s) {
  let o = F;
  F && Zn();
  var a = null;
  F && Y.nodeType === Hp && (a = /** @type {Element} */
  Y, Zn());
  var l = (
    /** @type {TemplateNode} */
    F ? Y : t
  ), c = new Dd(l, !1);
  Gi(() => {
    const d = e() || null;
    var h = xp;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (u) => {
      if (d) {
        if (a = F ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(h, d), rn(a, a), i) {
          F && $m(d) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            F ? /* @__PURE__ */ Ht(a) : a.appendChild(yt())
          );
          F && (f === null ? dt(!1) : Ve(f)), i(a, f);
        }
        U.nodes_end = a, u.before(a);
      }
      F && Ve(u);
    }), () => {
    };
  }, Xn), Xr(() => {
  }), o && (dt(!0), Ve(l));
}
function ui(t, e) {
  Zr(() => {
    var n = t.getRootNode(), i = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + e.hash)) {
      const r = document.createElement("style");
      r.id = e.hash, r.textContent = e.code, i.appendChild(r);
    }
  });
}
function Bm(t, e) {
  var n = void 0, i;
  Gi(() => {
    n !== (n = e()) && (i && (xe(i), i = null), n && (i = nt(() => {
      Zr(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function $d(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (n = $d(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function qm() {
  for (var t, e, n = 0, i = "", r = arguments.length; n < r; n++) (t = arguments[n]) && (e = $d(t)) && (i && (i += " "), i += e);
  return i;
}
function Gm(t) {
  return typeof t == "object" ? qm(t) : t ?? "";
}
const Ic = [...` 	
\r\f \v\uFEFF`];
function Km(t, e, n) {
  var i = t == null ? "" : "" + t;
  if (e && (i = i ? i + " " + e : e), n) {
    for (var r in n)
      if (n[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, o = 0; (o = i.indexOf(r, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || Ic.includes(i[o - 1])) && (a === i.length || Ic.includes(i[a])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(a + 1) : o = a;
        }
  }
  return i === "" ? null : i;
}
function Cc(t, e = !1) {
  var n = e ? " !important;" : ";", i = "";
  for (var r in t) {
    var s = t[r];
    s != null && s !== "" && (i += " " + r + ": " + s + n);
  }
  return i;
}
function zo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Ym(t, e) {
  if (e) {
    var n = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      i && l.push(...Object.keys(i).map(zo)), r && l.push(...Object.keys(r).map(zo));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var u = t[h];
        if (a ? u === "/" && t[h - 1] === "*" && (a = !1) : s ? s === u && (s = !1) : u === "/" && t[h + 1] === "*" ? a = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !a && s === !1 && o === 0) {
          if (u === ":" && d === -1)
            d = h;
          else if (u === ";" || h === g - 1) {
            if (d !== -1) {
              var f = zo(t.substring(c, d).trim());
              if (!l.includes(f)) {
                u !== ";" && h++;
                var p = t.substring(c, h).trim();
                n += " " + p + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return i && (n += Cc(i)), r && (n += Cc(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Dr(t, e, n, i, r, s) {
  var o = t.__className;
  if (F || o !== n || o === void 0) {
    var a = Km(n, i, s);
    (!F || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function Bo(t, e = {}, n, i) {
  for (var r in n) {
    var s = n[r];
    e[r] !== s && (n[r] == null ? t.style.removeProperty(r) : t.style.setProperty(r, s, i));
  }
}
function Qm(t, e, n, i) {
  var r = t.__style;
  if (F || r !== e) {
    var s = Ym(e, i);
    (!F || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else i && (Array.isArray(i) ? (Bo(t, n?.[0], i[0]), Bo(t, n?.[1], i[1], "important")) : Bo(t, n, i));
  return i;
}
function Us(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ja(e))
      return Zp();
    for (var i of t.options)
      i.selected = e.includes(wr(i));
    return;
  }
  for (i of t.options) {
    var r = wr(i);
    if (fm(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Fd(t) {
  var e = new MutationObserver(() => {
    Us(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Xr(() => {
    e.disconnect();
  });
}
function Jm(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet(), r = !0;
  md(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", a;
    if (t.multiple)
      a = [].map.call(t.querySelectorAll(o), wr);
    else {
      var l = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      a = l && wr(l);
    }
    n(a), te !== null && i.add(te);
  }), Zr(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        vr ?? te
      );
      if (i.has(o))
        return;
    }
    if (Us(t, s, r), r && s === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (s = wr(a), n(s));
    }
    t.__value = s, r = !1;
  }), Fd(t);
}
function wr(t) {
  return "__value" in t ? t.__value : t.value;
}
const sr = Symbol("class"), or = Symbol("style"), Ud = Symbol("is custom element"), Wd = Symbol("is html");
function wa(t) {
  if (F) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var i = t.value;
          Te(t, "value", null), t.value = i;
        }
        if (t.hasAttribute("checked")) {
          var r = t.checked;
          Te(t, "checked", null), t.checked = r;
        }
      }
    };
    t.__on_r = n, $n(n), pd();
  }
}
function Xm(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Te(t, e, n, i) {
  var r = Hd(t);
  F && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = n) && (e === "loading" && (t[Wp] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Vd(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Zm(t, e, n, i, r = !1, s = !1) {
  if (F && r && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || wa(o);
  }
  var l = Hd(t), c = l[Ud], d = !l[Wd];
  let h = F && c;
  h && dt(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = Gm(n.class) : n[sr] && (n.class = null), n[or] && (n.style ??= null);
  var g = Vd(t);
  for (const w in n) {
    let I = n[w];
    if (f && w === "value" && I == null) {
      t.value = t.__value = "", u[w] = I;
      continue;
    }
    if (w === "class") {
      var E = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Dr(t, E, I, i, e?.[sr], n[sr]), u[w] = I, u[sr] = n[sr];
      continue;
    }
    if (w === "style") {
      Qm(t, I, e?.[or], n[or]), u[w] = I, u[or] = n[or];
      continue;
    }
    var S = u[w];
    if (!(I === S && !(I === void 0 && t.hasAttribute(w)))) {
      u[w] = I;
      var T = w[0] + w[1];
      if (T !== "$$")
        if (T === "on") {
          const b = {}, D = "$$" + w;
          let N = w.slice(2);
          var k = Nm(N);
          if (Rm(N) && (N = N.slice(0, -7), b.capture = !0), !k && S) {
            if (I != null) continue;
            t.removeEventListener(N, u[D], b), u[D] = null;
          }
          if (I != null)
            if (k)
              t[`__${N}`] = I, ts([N]);
            else {
              let q = function(M) {
                u[w].call(this, M);
              };
              u[D] = Nd(N, t, q, b);
            }
          else k && (t[`__${N}`] = void 0);
        } else if (w === "style")
          Te(t, w, I);
        else if (w === "autofocus")
          pm(
            /** @type {HTMLElement} */
            t,
            !!I
          );
        else if (!c && (w === "__value" || w === "value" && I != null))
          t.value = t.__value = I;
        else if (w === "selected" && f)
          Xm(
            /** @type {HTMLOptionElement} */
            t,
            I
          );
        else {
          var P = w;
          d || (P = Lm(P));
          var O = P === "defaultValue" || P === "defaultChecked";
          if (I == null && !c && !O)
            if (l[w] = null, P === "value" || P === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                t
              );
              const D = e === void 0;
              if (P === "value") {
                let N = b.defaultValue;
                b.removeAttribute(P), b.defaultValue = N, b.value = b.__value = D ? N : null;
              } else {
                let N = b.defaultChecked;
                b.removeAttribute(P), b.defaultChecked = N, b.checked = D ? N : !1;
              }
            } else
              t.removeAttribute(w);
          else O || g.includes(P) && (c || typeof I != "string") ? (t[P] = I, P in l && (l[P] = We)) : typeof I != "function" && Te(t, P, I);
        }
    }
  }
  return h && dt(!0), u;
}
function Tc(t, e, n = [], i = [], r = [], s, o = !1, a = !1) {
  rd(r, n, i, (l) => {
    var c = void 0, d = {}, h = t.nodeName === "SELECT", u = !1;
    if (Gi(() => {
      var p = e(...l.map(v)), g = Zm(
        t,
        c,
        p,
        s,
        o,
        a
      );
      u && h && "value" in p && Us(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let S of Object.getOwnPropertySymbols(d))
        p[S] || xe(d[S]);
      for (let S of Object.getOwnPropertySymbols(p)) {
        var E = p[S];
        S.description === Lp && (!c || E !== c[S]) && (d[S] && xe(d[S]), d[S] = nt(() => Bm(t, () => E))), g[S] = E;
      }
      c = g;
    }), h) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Zr(() => {
        Us(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Fd(f);
      });
    }
    u = !0;
  });
}
function Hd(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Ud]: t.nodeName.includes("-"),
      [Wd]: t.namespaceURI === Np
    }
  );
}
var Sc = /* @__PURE__ */ new Map();
function Vd(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Sc.get(e);
  if (n) return n;
  Sc.set(e, n = []);
  for (var i, r = t, s = Element.prototype; s !== r; ) {
    i = Bu(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = Za(r);
  }
  return n;
}
function kc(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet();
  md(t, "input", async (r) => {
    var s = r ? t.defaultValue : t.value;
    if (s = qo(t) ? Go(s) : s, n(s), te !== null && i.add(te), await Tm(), s !== (s = e())) {
      var o = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = s ?? "", a !== null) {
        var c = t.value.length;
        o === a && a === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (F && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Vt(e) == null && t.value) && (n(qo(t) ? Go(t.value) : t.value), te !== null && i.add(te)), yo(() => {
    var r = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        vr ?? te
      );
      if (i.has(s))
        return;
    }
    qo(t) && r === Go(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function qo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Go(t) {
  return t === "" ? null : +t;
}
function Ac(t, e) {
  return t === e || t?.[$t] === e;
}
function jd(t = {}, e, n, i) {
  return Zr(() => {
    var r, s;
    return yo(() => {
      r = s, s = [], Vt(() => {
        t !== n(...s) && (e(t, ...s), r && Ac(n(...r), t) && e(null, ...r));
      });
    }), () => {
      $n(() => {
        s && Ac(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function zd(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Ee
  ), n = e.l.u;
  if (!n) return;
  let i = () => bi(e.s);
  if (t) {
    let r = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Jr(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== s[c] && (s[c] = l[c], a = !0);
      return a && r++, r;
    });
    i = () => v(o);
  }
  n.b.length && gm(() => {
    Rc(e, i), Ls(n.b);
  }), _a(() => {
    const r = Vt(() => n.m.map($p));
    return () => {
      for (const s of r)
        typeof s == "function" && s();
    };
  }), n.a.length && _a(() => {
    Rc(e, i), Ls(n.a);
  });
}
function Rc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) v(n);
  e();
}
function ul(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), In;
  const i = Vt(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const vi = [];
function e_(t, e) {
  return {
    subscribe: is(t, e).subscribe
  };
}
function is(t, e = In) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Ju(t, a) && (t = a, n)) {
      const l = !vi.length;
      for (const c of i)
        c[1](), vi.push(c, t);
      if (l) {
        for (let c = 0; c < vi.length; c += 2)
          vi[c][0](vi[c + 1]);
        vi.length = 0;
      }
    }
  }
  function s(a) {
    r(a(
      /** @type {T} */
      t
    ));
  }
  function o(a, l = In) {
    const c = [a, l];
    return i.add(c), i.size === 1 && (n = e(r, s) || In), a(
      /** @type {T} */
      t
    ), () => {
      i.delete(c), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
function t_(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return e_(n, (o, a) => {
    let l = !1;
    const c = [];
    let d = 0, h = In;
    const u = () => {
      if (d)
        return;
      h();
      const p = e(i ? c[0] : c, o, a);
      s ? o(p) : h = typeof p == "function" ? p : In;
    }, f = r.map(
      (p, g) => ul(
        p,
        (E) => {
          c[g] = E, d &= ~(1 << g), l && u();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, u(), function() {
      Ls(f), h(), l = !1;
    };
  });
}
function n_(t) {
  let e;
  return ul(t, (n) => e = n)(), e;
}
let Es = !1, Ea = Symbol();
function Mr(t, e, n) {
  const i = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ al(void 0),
    unsubscribe: In
  };
  if (i.store !== t && !(Ea in n))
    if (i.unsubscribe(), i.store = t ?? null, t == null)
      i.source.v = void 0, i.unsubscribe = In;
    else {
      var r = !0;
      i.unsubscribe = ul(t, (s) => {
        r ? i.source.v = s : L(i.source, s);
      }), r = !1;
    }
  return t && Ea in n ? n_(t) : v(i.source);
}
function dl() {
  const t = {};
  function e() {
    Xr(() => {
      for (var n in t)
        t[n].unsubscribe();
      xr(t, Ea, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function i_(t) {
  var e = Es;
  try {
    return Es = !1, [t(), Es];
  } finally {
    Es = e;
  }
}
const r_ = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return v(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var i = U;
      try {
        bt(t.parent_effect), t.special[e] = _t(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Vu
        );
      } finally {
        bt(i);
      }
    }
    return t.special[e](n), pc(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  deleteProperty(t, e) {
    return t.exclude.includes(e) || (t.exclude.push(e), pc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function De(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Pn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        U
      )
    },
    r_
  );
}
const s_ = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (rr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(t, e, n) {
    let i = t.props.length;
    for (; i--; ) {
      let r = t.props[i];
      rr(r) && (r = r());
      const s = en(r, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (rr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = en(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(t, e) {
    if (e === $t || e === il) return !1;
    for (let n of t.props)
      if (rr(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (rr(n) && (n = n()), !!n) {
        for (const i in n)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(n))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function Ke(...t) {
  return new Proxy({ props: t }, s_);
}
function _t(t, e, n, i) {
  var r = !qi || (n & Sp) !== 0, s = (n & kp) !== 0, o = (n & Ap) !== 0, a = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, a = o ? Vt(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), d;
  if (s) {
    var h = $t in t || il in t;
    d = en(t, e)?.set ?? (h && e in t ? (k) => t[e] = k : void 0);
  }
  var u, f = !1;
  s ? [u, f] = i_(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && i !== void 0 && (u = c(), d && (r && Kp(), d(u)));
  var p;
  if (r ? p = () => {
    var k = (
      /** @type {V} */
      t[e]
    );
    return k === void 0 ? c() : (l = !0, k);
  } : p = () => {
    var k = (
      /** @type {V} */
      t[e]
    );
    return k !== void 0 && (a = /** @type {V} */
    void 0), k === void 0 ? a : k;
  }, r && (n & Vu) === 0)
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, P) {
        return arguments.length > 0 ? ((!r || !P || g || f) && d(P ? p() : k), k) : p();
      })
    );
  }
  var E = !1, S = ((n & Tp) !== 0 ? Jr : sl)(() => (E = !1, p()));
  s && v(S);
  var T = (
    /** @type {Effect} */
    U
  );
  return (
    /** @type {() => V} */
    (function(k, P) {
      if (arguments.length > 0) {
        const O = P ? v(S) : r && s ? Qt(k) : k;
        return L(S, O), E = !0, a !== void 0 && (a = O), k;
      }
      return ci && E || (T.f & tn) !== 0 ? S.v : v(S);
    })
  );
}
function o_(t) {
  return new a_(t);
}
class a_ {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), i = (s, o) => {
      var a = /* @__PURE__ */ al(o, !1, !1);
      return n.set(s, a), a;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return v(n.get(o) ?? i(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === il ? !0 : (v(n.get(o) ?? i(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return L(n.get(o) ?? i(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? Fm : Ld)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && ct(), this.#t = r.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || xr(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(o) {
          this.#e[s] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, this.#e.$destroy = () => {
      Um(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#e.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#t[e] = this.#t[e] || [];
    const i = (...r) => n.call(this, ...r);
    return this.#t[e].push(i), () => {
      this.#t[e] = this.#t[e].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Bd;
typeof HTMLElement == "function" && (Bd = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const i = this.$$c.$on(t, e);
      this.$$l_u.set(e, i);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const i = this.$$l_u.get(e);
      i && (i(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (r) => {
          const s = document.createElement("slot");
          i !== "default" && (s.name = i), x(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = l_(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), e.default = !0) : e[i] = t(i));
      for (const i of this.attributes) {
        const r = this.$$g_p(i.name);
        r in this.$$d || (this.$$d[r] = Ss(r, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = o_({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = vm(() => {
        yo(() => {
          this.$$r = !0;
          for (const i of xs(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const r = Ss(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, r);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const r of this.$$l[i]) {
          const s = this.$$c.$on(i, r);
          this.$$l_u.set(r, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ss(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return xs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Ss(t, e, n, i) {
  const r = n[t]?.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function l_(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function _e(t, e, n, i, r, s) {
  let o = class extends Bd {
    constructor() {
      super(t, n, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return xs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return xs(e).forEach((a) => {
    xr(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Ss(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = en(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), i.forEach((a) => {
    xr(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
const c_ = () => {
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qd = {
  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: !1,
  /**
   * Firebase SDK Version
   */
  SDK_VERSION: "${JSCORE_VERSION}"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C = function(t, e) {
  if (!t)
    throw Ki(e);
}, Ki = function(t) {
  return new Error("Firebase Database (" + qd.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gd = function(t) {
  const e = [];
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t.charCodeAt(i);
    r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && i + 1 < t.length && (t.charCodeAt(i + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++i) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
  }
  return e;
}, u_ = function(t) {
  const e = [];
  let n = 0, i = 0;
  for (; n < t.length; ) {
    const r = t[n++];
    if (r < 128)
      e[i++] = String.fromCharCode(r);
    else if (r > 191 && r < 224) {
      const s = t[n++];
      e[i++] = String.fromCharCode((r & 31) << 6 | s & 63);
    } else if (r > 239 && r < 365) {
      const s = t[n++], o = t[n++], a = t[n++], l = ((r & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
      e[i++] = String.fromCharCode(55296 + (l >> 10)), e[i++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const s = t[n++], o = t[n++];
      e[i++] = String.fromCharCode((r & 15) << 12 | (s & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, hl = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, i = [];
    for (let r = 0; r < t.length; r += 3) {
      const s = t[r], o = r + 1 < t.length, a = o ? t[r + 1] : 0, l = r + 2 < t.length, c = l ? t[r + 2] : 0, d = s >> 2, h = (s & 3) << 4 | a >> 4;
      let u = (a & 15) << 2 | c >> 6, f = c & 63;
      l || (f = 64, o || (u = 64)), i.push(n[d], n[h], n[u], n[f]);
    }
    return i.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Gd(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : u_(this.decodeStringToByteArray(t, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(t, e) {
    this.init_();
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, i = [];
    for (let r = 0; r < t.length; ) {
      const s = n[t.charAt(r++)], a = r < t.length ? n[t.charAt(r)] : 0;
      ++r;
      const c = r < t.length ? n[t.charAt(r)] : 64;
      ++r;
      const h = r < t.length ? n[t.charAt(r)] : 64;
      if (++r, s == null || a == null || c == null || h == null)
        throw new d_();
      const u = s << 2 | a >> 4;
      if (i.push(u), c !== 64) {
        const f = a << 4 & 240 | c >> 2;
        if (i.push(f), h !== 64) {
          const p = c << 6 & 192 | h;
          i.push(p);
        }
      }
    }
    return i;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
};
class d_ extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Kd = function(t) {
  const e = Gd(t);
  return hl.encodeByteArray(e, !0);
}, Ws = function(t) {
  return Kd(t).replace(/\./g, "");
}, Hs = function(t) {
  try {
    return hl.decodeString(t, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h_(t) {
  return Yd(void 0, t);
}
function Yd(t, e) {
  if (!(e instanceof Object))
    return e;
  switch (e.constructor) {
    case Date:
      const n = e;
      return new Date(n.getTime());
    case Object:
      t === void 0 && (t = {});
      break;
    case Array:
      t = [];
      break;
    default:
      return e;
  }
  for (const n in e)
    !e.hasOwnProperty(n) || !f_(n) || (t[n] = Yd(t[n], e[n]));
  return t;
}
function f_(t) {
  return t !== "__proto__";
}
/**
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
 */
function p_() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
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
 */
const m_ = () => p_().__FIREBASE_DEFAULTS__, __ = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, g_ = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && Hs(t[1]);
  return e && JSON.parse(e);
}, fl = () => {
  try {
    return c_() || m_() || __() || g_();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, Qd = (t) => fl()?.emulatorHosts?.[t], v_ = (t) => {
  const e = Qd(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const i = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), i] : [e.substring(0, n), i];
}, Jd = () => fl()?.config, Xd = (t) => fl()?.[`_${t}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (n, i) => {
      n ? this.reject(n) : this.resolve(i), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, i));
    };
  }
}
/**
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
 */
function Yi(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Zd(t) {
  return (await fetch(t, {
    credentials: "include"
  })).ok;
}
/**
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
 */
function y_(t, e) {
  if (t.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
    alg: "none",
    type: "JWT"
  }, i = e || "demo-project", r = t.iat || 0, s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = {
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${i}`,
    aud: i,
    iat: r,
    exp: r + 3600,
    auth_time: r,
    sub: s,
    user_id: s,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    },
    // Override with user options
    ...t
  };
  return [
    Ws(JSON.stringify(n)),
    Ws(JSON.stringify(o)),
    ""
  ].join(".");
}
const Er = {};
function b_() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Er))
    Er[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function w_(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let Pc = !1;
function eh(t, e) {
  if (typeof window > "u" || typeof document > "u" || !Yi(window.location.host) || Er[t] === e || Er[t] || // If already set to use emulator, can't go back to prod.
  Pc)
    return;
  Er[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const i = "__firebase__banner", s = b_().prod.length > 0;
  function o() {
    const u = document.getElementById(i);
    u && u.remove();
  }
  function a(u) {
    u.style.display = "flex", u.style.background = "#7faaf0", u.style.position = "fixed", u.style.bottom = "5px", u.style.left = "5px", u.style.padding = ".5em", u.style.borderRadius = "5px", u.style.alignItems = "center";
  }
  function l(u, f) {
    u.setAttribute("width", "24"), u.setAttribute("id", f), u.setAttribute("height", "24"), u.setAttribute("viewBox", "0 0 24 24"), u.setAttribute("fill", "none"), u.style.marginLeft = "-6px";
  }
  function c() {
    const u = document.createElement("span");
    return u.style.cursor = "pointer", u.style.marginLeft = "16px", u.style.fontSize = "24px", u.innerHTML = " &times;", u.onclick = () => {
      Pc = !0, o();
    }, u;
  }
  function d(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function h() {
    const u = w_(i), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), E = document.getElementById(g) || document.createElement("a"), S = n("preprendIcon"), T = document.getElementById(S) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const k = u.element;
      a(k), d(E, g);
      const P = c();
      l(T, S), k.append(T, p, E, P), document.body.appendChild(k);
    }
    s ? (p.innerText = "Preview backend disconnected.", T.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (T.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`, p.innerText = "Preview backend running in this workspace."), p.setAttribute("id", f);
  }
  document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", h) : h();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function pl() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et());
}
function E_() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function I_() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function th() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function C_() {
  const t = et();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function T_() {
  return qd.NODE_ADMIN === !0;
}
function S_() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function k_() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const i = "validate-browser-context-for-indexeddb-analytics-module", r = self.indexedDB.open(i);
      r.onsuccess = () => {
        r.result.close(), n || self.indexedDB.deleteDatabase(i), t(!0);
      }, r.onupgradeneeded = () => {
        n = !1;
      }, r.onerror = () => {
        e(r.error?.message || "");
      };
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A_ = "FirebaseError";
class Fn extends Error {
  constructor(e, n, i) {
    super(n), this.code = e, this.customData = i, this.name = A_, Object.setPrototypeOf(this, Fn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ss.prototype.create);
  }
}
class ss {
  constructor(e, n, i) {
    this.service = e, this.serviceName = n, this.errors = i;
  }
  create(e, ...n) {
    const i = n[0] || {}, r = `${this.service}/${e}`, s = this.errors[e], o = s ? R_(s, i) : "Error", a = `${this.serviceName}: ${o} (${r}).`;
    return new Fn(r, a, i);
  }
}
function R_(t, e) {
  return t.replace(P_, (n, i) => {
    const r = e[i];
    return r != null ? String(r) : `<${i}?>`;
  });
}
const P_ = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(t) {
  return JSON.parse(t);
}
function Ne(t) {
  return JSON.stringify(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nh = function(t) {
  let e = {}, n = {}, i = {}, r = "";
  try {
    const s = t.split(".");
    e = $r(Hs(s[0]) || ""), n = $r(Hs(s[1]) || ""), r = s[2], i = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: i,
    signature: r
  };
}, N_ = function(t) {
  const e = nh(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, x_ = function(t) {
  const e = nh(t).claims;
  return typeof e == "object" && e.admin === !0;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Mi(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function Ia(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function Vs(t, e, n) {
  const i = {};
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (i[r] = e.call(n, t[r], r, t));
  return i;
}
function ti(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), i = Object.keys(e);
  for (const r of n) {
    if (!i.includes(r))
      return !1;
    const s = t[r], o = e[r];
    if (Nc(s) && Nc(o)) {
      if (!ti(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const r of i)
    if (!n.includes(r))
      return !1;
  return !0;
}
function Nc(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(t) {
  const e = [];
  for (const [n, i] of Object.entries(t))
    Array.isArray(i) ? i.forEach((r) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
  return e.length ? "&" + e.join("&") : "";
}
function fr(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((i) => {
    if (i) {
      const [r, s] = i.split("=");
      e[decodeURIComponent(r)] = decodeURIComponent(s);
    }
  }), e;
}
function pr(t) {
  const e = t.indexOf("?");
  if (!e)
    return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L_ {
  constructor() {
    this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 512 / 8, this.pad_[0] = 128;
    for (let e = 1; e < this.blockSize; ++e)
      this.pad_[e] = 0;
    this.reset();
  }
  reset() {
    this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0;
  }
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */
  compress_(e, n) {
    n || (n = 0);
    const i = this.W_;
    if (typeof e == "string")
      for (let h = 0; h < 16; h++)
        i[h] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
    else
      for (let h = 0; h < 16; h++)
        i[h] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
    for (let h = 16; h < 80; h++) {
      const u = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
      i[h] = (u << 1 | u >>> 31) & 4294967295;
    }
    let r = this.chain_[0], s = this.chain_[1], o = this.chain_[2], a = this.chain_[3], l = this.chain_[4], c, d;
    for (let h = 0; h < 80; h++) {
      h < 40 ? h < 20 ? (c = a ^ s & (o ^ a), d = 1518500249) : (c = s ^ o ^ a, d = 1859775393) : h < 60 ? (c = s & o | a & (s | o), d = 2400959708) : (c = s ^ o ^ a, d = 3395469782);
      const u = (r << 5 | r >>> 27) + c + l + d + i[h] & 4294967295;
      l = a, a = o, o = (s << 30 | s >>> 2) & 4294967295, s = r, r = u;
    }
    this.chain_[0] = this.chain_[0] + r & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + o & 4294967295, this.chain_[3] = this.chain_[3] + a & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295;
  }
  update(e, n) {
    if (e == null)
      return;
    n === void 0 && (n = e.length);
    const i = n - this.blockSize;
    let r = 0;
    const s = this.buf_;
    let o = this.inbuf_;
    for (; r < n; ) {
      if (o === 0)
        for (; r <= i; )
          this.compress_(e, r), r += this.blockSize;
      if (typeof e == "string") {
        for (; r < n; )
          if (s[o] = e.charCodeAt(r), ++o, ++r, o === this.blockSize) {
            this.compress_(s), o = 0;
            break;
          }
      } else
        for (; r < n; )
          if (s[o] = e[r], ++o, ++r, o === this.blockSize) {
            this.compress_(s), o = 0;
            break;
          }
    }
    this.inbuf_ = o, this.total_ += n;
  }
  /** @override */
  digest() {
    const e = [];
    let n = this.total_ * 8;
    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    for (let r = this.blockSize - 1; r >= 56; r--)
      this.buf_[r] = n & 255, n /= 256;
    this.compress_(this.buf_);
    let i = 0;
    for (let r = 0; r < 5; r++)
      for (let s = 24; s >= 0; s -= 8)
        e[i] = this.chain_[r] >> s & 255, ++i;
    return e;
  }
}
function O_(t, e) {
  const n = new D_(t, e);
  return n.subscribe.bind(n);
}
class D_ {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, n) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
      e(this);
    }).catch((i) => {
      this.error(i);
    });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber synchronously to their
   *   call to subscribe().
   */
  subscribe(e, n, i) {
    let r;
    if (e === void 0 && n === void 0 && i === void 0)
      throw new Error("Missing Observer.");
    M_(e, [
      "next",
      "error",
      "complete"
    ]) ? r = e : r = {
      next: e,
      error: n,
      complete: i
    }, r.next === void 0 && (r.next = Ko), r.error === void 0 && (r.error = Ko), r.complete === void 0 && (r.complete = Ko);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? r.error(this.finalError) : r.complete();
      } catch {
      }
    }), this.observers.push(r), s;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++)
        this.sendOne(n, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (i) {
          typeof console < "u" && console.error && console.error(i);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function M_(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function Ko() {
}
function Eo(t, e) {
  return `${t} failed: ${e} argument `;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $_ = function(t) {
  const e = [];
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t.charCodeAt(i);
    if (r >= 55296 && r <= 56319) {
      const s = r - 55296;
      i++, C(i < t.length, "Surrogate pair missing trail surrogate.");
      const o = t.charCodeAt(i) - 56320;
      r = 65536 + (s << 10) + o;
    }
    r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : r < 65536 ? (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
  }
  return e;
}, Io = function(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t.charCodeAt(n);
    i < 128 ? e++ : i < 2048 ? e += 2 : i >= 55296 && i <= 56319 ? (e += 4, n++) : e += 3;
  }
  return e;
};
/**
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
 */
function $e(t) {
  return t && t._delegate ? t._delegate : t;
}
class ni {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, i) {
    this.name = e, this.instanceFactory = n, this.type = i, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
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
 */
const Bn = "[DEFAULT]";
/**
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
 */
class F_ {
  constructor(e, n) {
    this.name = e, this.container = n, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const i = new rs();
      if (this.instancesDeferred.set(n, i), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const r = this.getOrInitializeService({
            instanceIdentifier: n
          });
          r && i.resolve(r);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    const n = this.normalizeInstanceIdentifier(e?.identifier), i = e?.optional ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (r) {
        if (i)
          return null;
        throw r;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (W_(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Bn });
        } catch {
        }
      for (const [n, i] of this.instancesDeferred.entries()) {
        const r = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: r
          });
          i.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(e = Bn) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Bn) {
    return this.instances.has(e);
  }
  getOptions(e = Bn) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const r = this.getOrInitializeService({
      instanceIdentifier: i,
      options: n
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      i === a && o.resolve(r);
    }
    return r;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, n) {
    const i = this.normalizeInstanceIdentifier(n), r = this.onInitCallbacks.get(i) ?? /* @__PURE__ */ new Set();
    r.add(e), this.onInitCallbacks.set(i, r);
    const s = this.instances.get(i);
    return s && e(s, i), () => {
      r.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, n) {
    const i = this.onInitCallbacks.get(n);
    if (i)
      for (const r of i)
        try {
          r(e, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let i = this.instances.get(e);
    if (!i && this.component && (i = this.component.instanceFactory(this.container, {
      instanceIdentifier: U_(e),
      options: n
    }), this.instances.set(e, i), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(i, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, i);
      } catch {
      }
    return i || null;
  }
  normalizeInstanceIdentifier(e = Bn) {
    return this.component ? this.component.multipleInstances ? e : Bn : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function U_(t) {
  return t === Bn ? void 0 : t;
}
function W_(t) {
  return t.instantiationMode === "EAGER";
}
/**
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
 */
class H_ {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const n = new F_(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ne;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(ne || (ne = {}));
const V_ = {
  debug: ne.DEBUG,
  verbose: ne.VERBOSE,
  info: ne.INFO,
  warn: ne.WARN,
  error: ne.ERROR,
  silent: ne.SILENT
}, j_ = ne.INFO, z_ = {
  [ne.DEBUG]: "log",
  [ne.VERBOSE]: "log",
  [ne.INFO]: "info",
  [ne.WARN]: "warn",
  [ne.ERROR]: "error"
}, B_ = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const i = (/* @__PURE__ */ new Date()).toISOString(), r = z_[e];
  if (r)
    console[r](`[${i}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class ml {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = j_, this._logHandler = B_, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ne))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? V_[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, ne.DEBUG, ...e), this._logHandler(this, ne.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ne.VERBOSE, ...e), this._logHandler(this, ne.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ne.INFO, ...e), this._logHandler(this, ne.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ne.WARN, ...e), this._logHandler(this, ne.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ne.ERROR, ...e), this._logHandler(this, ne.ERROR, ...e);
  }
}
const q_ = (t, e) => e.some((n) => t instanceof n);
let xc, Lc;
function G_() {
  return xc || (xc = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function K_() {
  return Lc || (Lc = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ih = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap();
function Y_(t) {
  const e = new Promise((n, i) => {
    const r = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n(Tn(t.result)), r();
    }, o = () => {
      i(t.error), r();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && ih.set(n, t);
  }).catch(() => {
  }), _l.set(e, t), e;
}
function Q_(t) {
  if (Ca.has(t))
    return;
  const e = new Promise((n, i) => {
    const r = () => {
      t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o);
    }, s = () => {
      n(), r();
    }, o = () => {
      i(t.error || new DOMException("AbortError", "AbortError")), r();
    };
    t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o);
  });
  Ca.set(t, e);
}
let Ta = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Ca.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || rh.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Tn(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function J_(t) {
  Ta = t(Ta);
}
function X_(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const i = t.call(Qo(this), e, ...n);
    return rh.set(i, e.sort ? e.sort() : [e]), Tn(i);
  } : K_().includes(t) ? function(...e) {
    return t.apply(Qo(this), e), Tn(ih.get(this));
  } : function(...e) {
    return Tn(t.apply(Qo(this), e));
  };
}
function Z_(t) {
  return typeof t == "function" ? X_(t) : (t instanceof IDBTransaction && Q_(t), q_(t, G_()) ? new Proxy(t, Ta) : t);
}
function Tn(t) {
  if (t instanceof IDBRequest)
    return Y_(t);
  if (Yo.has(t))
    return Yo.get(t);
  const e = Z_(t);
  return e !== t && (Yo.set(t, e), _l.set(e, t)), e;
}
const Qo = (t) => _l.get(t);
function eg(t, e, { blocked: n, upgrade: i, blocking: r, terminated: s } = {}) {
  const o = indexedDB.open(t, e), a = Tn(o);
  return i && o.addEventListener("upgradeneeded", (l) => {
    i(Tn(o.result), l.oldVersion, l.newVersion, Tn(o.transaction), l);
  }), n && o.addEventListener("blocked", (l) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), a.then((l) => {
    s && l.addEventListener("close", () => s()), r && l.addEventListener("versionchange", (c) => r(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), a;
}
const tg = ["get", "getKey", "getAll", "getAllKeys", "count"], ng = ["put", "add", "delete", "clear"], Jo = /* @__PURE__ */ new Map();
function Oc(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Jo.get(e))
    return Jo.get(e);
  const n = e.replace(/FromIndex$/, ""), i = e !== n, r = ng.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(r || tg.includes(n))
  )
    return;
  const s = async function(o, ...a) {
    const l = this.transaction(o, r ? "readwrite" : "readonly");
    let c = l.store;
    return i && (c = c.index(a.shift())), (await Promise.all([
      c[n](...a),
      r && l.done
    ]))[0];
  };
  return Jo.set(e, s), s;
}
J_((t) => ({
  ...t,
  get: (e, n, i) => Oc(e, n) || t.get(e, n, i),
  has: (e, n) => !!Oc(e, n) || t.has(e, n)
}));
/**
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
 */
class ig {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (rg(n)) {
        const i = n.getImmediate();
        return `${i.library}/${i.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function rg(t) {
  return t.getComponent()?.type === "VERSION";
}
const Sa = "@firebase/app", Dc = "0.14.5";
/**
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
 */
const on = new ml("@firebase/app"), sg = "@firebase/app-compat", og = "@firebase/analytics-compat", ag = "@firebase/analytics", lg = "@firebase/app-check-compat", cg = "@firebase/app-check", ug = "@firebase/auth", dg = "@firebase/auth-compat", hg = "@firebase/database", fg = "@firebase/data-connect", pg = "@firebase/database-compat", mg = "@firebase/functions", _g = "@firebase/functions-compat", gg = "@firebase/installations", vg = "@firebase/installations-compat", yg = "@firebase/messaging", bg = "@firebase/messaging-compat", wg = "@firebase/performance", Eg = "@firebase/performance-compat", Ig = "@firebase/remote-config", Cg = "@firebase/remote-config-compat", Tg = "@firebase/storage", Sg = "@firebase/storage-compat", kg = "@firebase/firestore", Ag = "@firebase/ai", Rg = "@firebase/firestore-compat", Pg = "firebase", Ng = "12.5.0";
/**
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
 */
const ka = "[DEFAULT]", xg = {
  [Sa]: "fire-core",
  [sg]: "fire-core-compat",
  [ag]: "fire-analytics",
  [og]: "fire-analytics-compat",
  [cg]: "fire-app-check",
  [lg]: "fire-app-check-compat",
  [ug]: "fire-auth",
  [dg]: "fire-auth-compat",
  [hg]: "fire-rtdb",
  [fg]: "fire-data-connect",
  [pg]: "fire-rtdb-compat",
  [mg]: "fire-fn",
  [_g]: "fire-fn-compat",
  [gg]: "fire-iid",
  [vg]: "fire-iid-compat",
  [yg]: "fire-fcm",
  [bg]: "fire-fcm-compat",
  [wg]: "fire-perf",
  [Eg]: "fire-perf-compat",
  [Ig]: "fire-rc",
  [Cg]: "fire-rc-compat",
  [Tg]: "fire-gcs",
  [Sg]: "fire-gcs-compat",
  [kg]: "fire-fst",
  [Rg]: "fire-fst-compat",
  [Ag]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [Pg]: "fire-js-all"
};
/**
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
 */
const js = /* @__PURE__ */ new Map(), Lg = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map();
function Mc(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function $i(t) {
  const e = t.name;
  if (Aa.has(e))
    return on.debug(`There were multiple attempts to register component ${e}.`), !1;
  Aa.set(e, t);
  for (const n of js.values())
    Mc(n, t);
  for (const n of Lg.values())
    Mc(n, t);
  return !0;
}
function gl(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function ut(t) {
  return t == null ? !1 : t.settings !== void 0;
}
/**
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
 */
const Og = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, Sn = new ss("app", "Firebase", Og);
/**
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
 */
class Dg {
  constructor(e, n, i) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = i, this.container.addComponent(new ni(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw Sn.create("app-deleted", { appName: this._name });
  }
}
/**
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
 */
const Qi = Ng;
function sh(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const i = {
    name: ka,
    automaticDataCollectionEnabled: !0,
    ...e
  }, r = i.name;
  if (typeof r != "string" || !r)
    throw Sn.create("bad-app-name", {
      appName: String(r)
    });
  if (n || (n = Jd()), !n)
    throw Sn.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = js.get(r);
  if (s) {
    if (ti(n, s.options) && ti(i, s.config))
      return s;
    throw Sn.create("duplicate-app", { appName: r });
  }
  const o = new H_(r);
  for (const l of Aa.values())
    o.addComponent(l);
  const a = new Dg(n, i, o);
  return js.set(r, a), a;
}
function oh(t = ka) {
  const e = js.get(t);
  if (!e && t === ka && Jd())
    return sh();
  if (!e)
    throw Sn.create("no-app", { appName: t });
  return e;
}
function kn(t, e, n) {
  let i = xg[t] ?? t;
  n && (i += `-${n}`);
  const r = i.match(/\s|\//), s = e.match(/\s|\//);
  if (r || s) {
    const o = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    r && o.push(`library name "${i}" contains illegal characters (whitespace or "/")`), r && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), on.warn(o.join(" "));
    return;
  }
  $i(new ni(
    `${i}-version`,
    () => ({ library: i, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
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
 */
const Mg = "firebase-heartbeat-database", $g = 1, Fr = "firebase-heartbeat-store";
let Xo = null;
function ah() {
  return Xo || (Xo = eg(Mg, $g, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(Fr);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw Sn.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Xo;
}
async function Fg(t) {
  try {
    const n = (await ah()).transaction(Fr), i = await n.objectStore(Fr).get(lh(t));
    return await n.done, i;
  } catch (e) {
    if (e instanceof Fn)
      on.warn(e.message);
    else {
      const n = Sn.create("idb-get", {
        originalErrorMessage: e?.message
      });
      on.warn(n.message);
    }
  }
}
async function $c(t, e) {
  try {
    const i = (await ah()).transaction(Fr, "readwrite");
    await i.objectStore(Fr).put(e, lh(t)), await i.done;
  } catch (n) {
    if (n instanceof Fn)
      on.warn(n.message);
    else {
      const i = Sn.create("idb-set", {
        originalErrorMessage: n?.message
      });
      on.warn(i.message);
    }
  }
}
function lh(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
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
 */
const Ug = 1024, Wg = 30;
class Hg {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new jg(n), this._heartbeatsCachePromise = this._storage.read().then((i) => (this._heartbeatsCache = i, i));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    try {
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), i = Fc();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((r) => r.date === i))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: i, agent: n }), this._heartbeatsCache.heartbeats.length > Wg) {
        const r = zg(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(r, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      on.warn(e);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    try {
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0)
        return "";
      const e = Fc(), { heartbeatsToSend: n, unsentEntries: i } = Vg(this._heartbeatsCache.heartbeats), r = Ws(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
    } catch (e) {
      return on.warn(e), "";
    }
  }
}
function Fc() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Vg(t, e = Ug) {
  const n = [];
  let i = t.slice();
  for (const r of t) {
    const s = n.find((o) => o.agent === r.agent);
    if (s) {
      if (s.dates.push(r.date), Uc(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: r.agent,
      dates: [r.date]
    }), Uc(n) > e) {
      n.pop();
      break;
    }
    i = i.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: i
  };
}
class jg {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return S_() ? k_().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Fg(this.app);
      return n?.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $c(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $c(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Uc(t) {
  return Ws(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function zg(t) {
  if (t.length === 0)
    return -1;
  let e = 0, n = t[0].date;
  for (let i = 1; i < t.length; i++)
    t[i].date < n && (n = t[i].date, e = i);
  return e;
}
/**
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
 */
function Bg(t) {
  $i(new ni(
    "platform-logger",
    (e) => new ig(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), $i(new ni(
    "heartbeat",
    (e) => new Hg(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), kn(Sa, Dc, t), kn(Sa, Dc, "esm2020"), kn("fire-js", "");
}
Bg("");
var qg = "firebase", Gg = "12.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kn(qg, Gg, "app");
function ch() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Kg = ch, uh = new ss("auth", "Firebase", ch());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zs = new ml("@firebase/auth");
function Yg(t, ...e) {
  zs.logLevel <= ne.WARN && zs.warn(`Auth (${Qi}): ${t}`, ...e);
}
function ks(t, ...e) {
  zs.logLevel <= ne.ERROR && zs.error(`Auth (${Qi}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(t, ...e) {
  throw vl(t, ...e);
}
function ft(t, ...e) {
  return vl(t, ...e);
}
function dh(t, e, n) {
  const i = {
    ...Kg(),
    [e]: n
  };
  return new ss("auth", "Firebase", i).create(e, {
    appName: t.name
  });
}
function Ft(t) {
  return dh(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function vl(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], i = [...e.slice(1)];
    return i[0] && (i[0].appName = t.name), t._errorFactory.create(n, ...i);
  }
  return uh.create(t, ...e);
}
function A(t, e, ...n) {
  if (!t)
    throw vl(e, ...n);
}
function Jt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw ks(e), new Error(e);
}
function an(t, e) {
  t || Jt(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ra() {
  return typeof self < "u" && self.location?.href || "";
}
function hh() {
  return Wc() === "http:" || Wc() === "https:";
}
function Wc() {
  return typeof self < "u" && self.location?.protocol || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qg() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (hh() || I_() || "connection" in navigator) ? navigator.onLine : !0;
}
function Jg() {
  if (typeof navigator > "u")
    return null;
  const t = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    t.languages && t.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    t.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, an(n > e, "Short delay should be less than long delay!"), this.isMobile = pl() || th();
  }
  get() {
    return Qg() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yl(t, e) {
  an(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh {
  static initialize(e, n, i) {
    this.fetchImpl = e, n && (this.headersImpl = n), i && (this.responseImpl = i);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xg = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zg = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], ev = new os(3e4, 6e4);
function ot(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function pt(t, e, n, i, r = {}) {
  return ph(t, r, async () => {
    let s = {}, o = {};
    i && (e === "GET" ? o = i : s = {
      body: JSON.stringify(i)
    });
    const a = di({
      key: t.config.apiKey,
      ...o
    }).slice(1), l = await t._getAdditionalHeaders();
    l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (l[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode);
    const c = {
      method: e,
      headers: l,
      ...s
    };
    return E_() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && Yi(t.emulatorConfig.host) && (c.credentials = "include"), fh.fetch()(await mh(t, t.config.apiHost, n, a), c);
  });
}
async function ph(t, e, n) {
  t._canInitEmulator = !1;
  const i = { ...Xg, ...e };
  try {
    const r = new nv(t), s = await Promise.race([
      n(),
      r.promise
    ]);
    r.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw mr(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw mr(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw mr(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw mr(t, "user-disabled", o);
      const d = i[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw dh(t, d, c);
      Nt(t, d);
    }
  } catch (r) {
    if (r instanceof Fn)
      throw r;
    Nt(t, "network-request-failed", { message: String(r) });
  }
}
async function Un(t, e, n, i, r = {}) {
  const s = await pt(t, e, n, i, r);
  return "mfaPendingCredential" in s && Nt(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
async function mh(t, e, n, i) {
  const r = `${e}${n}?${i}`, s = t, o = s.config.emulator ? yl(t.config, r) : `${t.config.apiScheme}://${r}`;
  return Zg.includes(n) && (await s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(o).toString() : o;
}
function tv(t) {
  switch (t) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class nv {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, i) => {
      this.timer = setTimeout(() => i(ft(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), ev.get());
    });
  }
}
function mr(t, e, n) {
  const i = {
    appName: t.name
  };
  n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
  const r = ft(t, e, i);
  return r.customData._tokenResponse = n, r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hc(t) {
  return t !== void 0 && t.getResponse !== void 0;
}
function Vc(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class _h {
  constructor(e) {
    if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(e) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === e)
        return tv(n.enforcementState);
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(e) {
    return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
  }
  /**
   * Returns true if reCAPTCHA Enterprise protection is enabled in at least one provider, otherwise
   * returns false.
   *
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for at least one provider.
   */
  isAnyProviderEnabled() {
    return this.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    ) || this.isProviderEnabled(
      "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function iv(t) {
  return (await pt(
    t,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function gh(t, e) {
  return pt(t, "GET", "/v2/recaptchaConfig", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rv(t, e) {
  return pt(t, "POST", "/v1/accounts:delete", e);
}
async function Bs(t, e) {
  return pt(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ir(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function sv(t, e = !1) {
  const n = $e(t), i = await n.getIdToken(e), r = bl(i);
  A(
    r && r.exp && r.auth_time && r.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof r.firebase == "object" ? r.firebase : void 0, o = s?.sign_in_provider;
  return {
    claims: r,
    token: i,
    authTime: Ir(Zo(r.auth_time)),
    issuedAtTime: Ir(Zo(r.iat)),
    expirationTime: Ir(Zo(r.exp)),
    signInProvider: o || null,
    signInSecondFactor: s?.sign_in_second_factor || null
  };
}
function Zo(t) {
  return Number(t) * 1e3;
}
function bl(t) {
  const [e, n, i] = t.split(".");
  if (e === void 0 || n === void 0 || i === void 0)
    return ks("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const r = Hs(n);
    return r ? JSON.parse(r) : (ks("Failed to decode base64 JWT payload"), null);
  } catch (r) {
    return ks("Caught error parsing JWT payload as JSON", r?.toString()), null;
  }
}
function jc(t) {
  const e = bl(t);
  return A(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), A(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), A(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fi(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (i) {
    throw i instanceof Fn && ov(i) && t.auth.currentUser === t && await t.auth.signOut(), i;
  }
}
function ov({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class av {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    if (e) {
      const n = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), n;
    } else {
      this.errorBackoff = 3e4;
      const i = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      e?.code === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Ir(this.lastLoginAt), this.creationTime = Ir(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
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
 */
async function qs(t) {
  const e = t.auth, n = await t.getIdToken(), i = await Fi(t, Bs(e, { idToken: n }));
  A(
    i?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const r = i.users[0];
  t._notifyReloadListener(r);
  const s = r.providerUserInfo?.length ? vh(r.providerUserInfo) : [], o = cv(t.providerData, s), a = t.isAnonymous, l = !(t.email && r.passwordHash) && !o?.length, c = a ? l : !1, d = {
    uid: r.localId,
    displayName: r.displayName || null,
    photoURL: r.photoUrl || null,
    email: r.email || null,
    emailVerified: r.emailVerified || !1,
    phoneNumber: r.phoneNumber || null,
    tenantId: r.tenantId || null,
    providerData: o,
    metadata: new Pa(r.createdAt, r.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, d);
}
async function lv(t) {
  const e = $e(t);
  await qs(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function cv(t, e) {
  return [...t.filter((i) => !e.some((r) => r.providerId === i.providerId)), ...e];
}
function vh(t) {
  return t.map(({ providerId: e, ...n }) => ({
    providerId: e,
    uid: n.rawId || "",
    displayName: n.displayName || null,
    email: n.email || null,
    phoneNumber: n.phoneNumber || null,
    photoURL: n.photoUrl || null
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function uv(t, e) {
  const n = await ph(t, {}, async () => {
    const i = di({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: r, apiKey: s } = t.config, o = await mh(t, r, "/v1/token", `key=${s}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: i
    };
    return t.emulatorConfig && Yi(t.emulatorConfig.host) && (l.credentials = "include"), fh.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function dv(t, e) {
  return pt(t, "POST", "/v2/accounts:revokeToken", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    A(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), A(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), A(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : jc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    A(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = jc(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired ? this.accessToken : (A(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: i, refreshToken: r, expiresIn: s } = await uv(e, n);
    this.updateTokensAndExpiration(i, r, Number(s));
  }
  updateTokensAndExpiration(e, n, i) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + i * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: i, accessToken: r, expirationTime: s } = n, o = new Si();
    return i && (A(typeof i == "string", "internal-error", {
      appName: e
    }), o.refreshToken = i), r && (A(typeof r == "string", "internal-error", {
      appName: e
    }), o.accessToken = r), s && (A(typeof s == "number", "internal-error", {
      appName: e
    }), o.expirationTime = s), o;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new Si(), this.toJSON());
  }
  _performRefresh() {
    return Jt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(t, e) {
  A(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class At {
  constructor({ uid: e, auth: n, stsTokenManager: i, ...r }) {
    this.providerId = "firebase", this.proactiveRefresh = new av(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new Pa(r.createdAt || void 0, r.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Fi(this, this.stsTokenManager.getToken(this.auth, e));
    return A(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return sv(this, e);
  }
  reload() {
    return lv(this);
  }
  _assign(e) {
    this !== e && (A(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => ({ ...n })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new At({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone()
    });
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    A(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let i = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), i = !0), n && await qs(this), await this.auth._persistUserIfCurrent(this), i && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ut(this.auth.app))
      return Promise.reject(Ft(this.auth));
    const e = await this.getIdToken();
    return await Fi(this, rv(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return {
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => ({ ...e })),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId,
      ...this.metadata.toJSON(),
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
      // Missing authDomain will be tolerated by the legacy SDK.
      // stsTokenManager.apiKey isn't actually required (despite the legacy SDK persisting it).
    };
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    const i = n.displayName ?? void 0, r = n.email ?? void 0, s = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, a = n.tenantId ?? void 0, l = n._redirectEventId ?? void 0, c = n.createdAt ?? void 0, d = n.lastLoginAt ?? void 0, { uid: h, emailVerified: u, isAnonymous: f, providerData: p, stsTokenManager: g } = n;
    A(
      h && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const E = Si.fromJSON(this.name, g);
    A(
      typeof h == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), mn(i, e.name), mn(r, e.name), A(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), A(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), mn(s, e.name), mn(o, e.name), mn(a, e.name), mn(l, e.name), mn(c, e.name), mn(d, e.name);
    const S = new At({
      uid: h,
      auth: e,
      email: r,
      emailVerified: u,
      displayName: i,
      isAnonymous: f,
      photoURL: o,
      phoneNumber: s,
      tenantId: a,
      stsTokenManager: E,
      createdAt: c,
      lastLoginAt: d
    });
    return p && Array.isArray(p) && (S.providerData = p.map((T) => ({ ...T }))), l && (S._redirectEventId = l), S;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, n, i = !1) {
    const r = new Si();
    r.updateFromServerResponse(n);
    const s = new At({
      uid: n.localId,
      auth: e,
      stsTokenManager: r,
      isAnonymous: i
    });
    return await qs(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, i) {
    const r = n.users[0];
    A(
      r.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = r.providerUserInfo !== void 0 ? vh(r.providerUserInfo) : [], o = !(r.email && r.passwordHash) && !s?.length, a = new Si();
    a.updateFromIdToken(i);
    const l = new At({
      uid: r.localId,
      auth: e,
      stsTokenManager: a,
      isAnonymous: o
    }), c = {
      uid: r.localId,
      displayName: r.displayName || null,
      photoURL: r.photoUrl || null,
      email: r.email || null,
      emailVerified: r.emailVerified || !1,
      phoneNumber: r.phoneNumber || null,
      tenantId: r.tenantId || null,
      providerData: s,
      metadata: new Pa(r.createdAt, r.lastLoginAt),
      isAnonymous: !(r.email && r.passwordHash) && !s?.length
    };
    return Object.assign(l, c), l;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zc = /* @__PURE__ */ new Map();
function Xt(t) {
  an(t instanceof Function, "Expected a class definition");
  let e = zc.get(t);
  return e ? (an(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), zc.set(t, e), e);
}
/**
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
 */
class yh {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
yh.type = "NONE";
const Bc = yh;
/**
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
 */
function As(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class ki {
  constructor(e, n, i) {
    this.persistence = e, this.auth = n, this.userKey = i;
    const { config: r, name: s } = this.auth;
    this.fullUserKey = As(this.userKey, r.apiKey, s), this.fullPersistenceKey = As("persistence", r.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await Bs(this.auth, { idToken: e }).catch(() => {
      });
      return n ? At._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return At._fromJSON(this.auth, e);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const n = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, n)
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, i = "authUser") {
    if (!n.length)
      return new ki(Xt(Bc), e, i);
    const r = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let s = r[0] || Xt(Bc);
    const o = As(i, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const d = await c._get(o);
        if (d) {
          let h;
          if (typeof d == "string") {
            const u = await Bs(e, {
              idToken: d
            }).catch(() => {
            });
            if (!u)
              break;
            h = await At._fromGetAccountInfoResponse(e, u, d);
          } else
            h = At._fromJSON(e, d);
          c !== s && (a = h), s = c;
          break;
        }
      } catch {
      }
    const l = r.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new ki(s, e, i) : (s = l[0], a && await s._set(o, a.toJSON()), await Promise.all(n.map(async (c) => {
      if (c !== s)
        try {
          await c._remove(o);
        } catch {
        }
    })), new ki(s, e, i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qc(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Ih(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (bh(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Th(e))
    return "Blackberry";
  if (Sh(e))
    return "Webos";
  if (wh(e))
    return "Safari";
  if ((e.includes("chrome/") || Eh(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Ch(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, i = t.match(n);
    if (i?.length === 2)
      return i[1];
  }
  return "Other";
}
function bh(t = et()) {
  return /firefox\//i.test(t);
}
function wh(t = et()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function Eh(t = et()) {
  return /crios\//i.test(t);
}
function Ih(t = et()) {
  return /iemobile/i.test(t);
}
function Ch(t = et()) {
  return /android/i.test(t);
}
function Th(t = et()) {
  return /blackberry/i.test(t);
}
function Sh(t = et()) {
  return /webos/i.test(t);
}
function wl(t = et()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function hv(t = et()) {
  return wl(t) && !!window.navigator?.standalone;
}
function fv() {
  return C_() && document.documentMode === 10;
}
function kh(t = et()) {
  return wl(t) || Ch(t) || Sh(t) || Th(t) || /windows phone/i.test(t) || Ih(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ah(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = qc(et());
      break;
    case "Worker":
      n = `${qc(et())}-${t}`;
      break;
    default:
      n = t;
  }
  const i = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Qi}/${i}`;
}
/**
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
 */
class pv {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, n) {
    const i = (s) => new Promise((o, a) => {
      try {
        const l = e(s);
        o(l);
      } catch (l) {
        a(l);
      }
    });
    i.onAbort = n, this.queue.push(i);
    const r = this.queue.length - 1;
    return () => {
      this.queue[r] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const n = [];
    try {
      for (const i of this.queue)
        await i(e), i.onAbort && n.push(i.onAbort);
    } catch (i) {
      n.reverse();
      for (const r of n)
        try {
          r();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: i?.message
      });
    }
  }
}
/**
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
 */
async function mv(t, e = {}) {
  return pt(t, "GET", "/v2/passwordPolicy", ot(t, e));
}
/**
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
 */
const _v = 6;
class gv {
  constructor(e) {
    const n = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = n.minPasswordLength ?? _v, n.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength), n.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = n.containsLowercaseCharacter), n.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = n.containsUppercaseCharacter), n.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = n.containsNumericCharacter), n.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = n.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    const n = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, n), this.validatePasswordCharacterOptions(e, n), n.isValid && (n.isValid = n.meetsMinPasswordLength ?? !0), n.isValid && (n.isValid = n.meetsMaxPasswordLength ?? !0), n.isValid && (n.isValid = n.containsLowercaseLetter ?? !0), n.isValid && (n.isValid = n.containsUppercaseLetter ?? !0), n.isValid && (n.isValid = n.containsNumericCharacter ?? !0), n.isValid && (n.isValid = n.containsNonAlphanumericCharacter ?? !0), n;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, n) {
    const i = this.customStrengthOptions.minPasswordLength, r = this.customStrengthOptions.maxPasswordLength;
    i && (n.meetsMinPasswordLength = e.length >= i), r && (n.meetsMaxPasswordLength = e.length <= r);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, n) {
    this.updatePasswordCharacterOptionsStatuses(
      n,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let i;
    for (let r = 0; r < e.length; r++)
      i = e.charAt(r), this.updatePasswordCharacterOptionsStatuses(
        n,
        /* containsLowercaseCharacter= */
        i >= "a" && i <= "z",
        /* containsUppercaseCharacter= */
        i >= "A" && i <= "Z",
        /* containsNumericCharacter= */
        i >= "0" && i <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(i)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, n, i, r, s) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = i)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vv {
  constructor(e, n, i, r) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = i, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Gc(this), this.idTokenSubscription = new Gc(this), this.beforeStateQueue = new pv(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = uh, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((s) => this._resolvePersistenceManagerAvailable = s);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = Xt(n)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await ki.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
        if (this._popupRedirectResolver?._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(n), this.lastNotifiedUid = this.currentUser?.uid || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const n = await Bs(this, { idToken: e }), i = await At._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(i);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (ut(this.app)) {
      const s = this.app.settings.authIdToken;
      return s ? new Promise((o) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(s).then(o, o));
      }) : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let i = n, r = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s = this.redirectUser?._redirectEventId, o = i?._redirectEventId, a = await this.tryRedirectSignIn(e);
      (!s || s === o) && a?.user && (i = a.user, r = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (r)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (s) {
          i = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return A(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await qs(e);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Jg();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (ut(this.app))
      return Promise.reject(Ft(this));
    const n = e ? $e(e) : null;
    return n && A(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && A(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return ut(this.app) ? Promise.reject(Ft(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return ut(this.app) ? Promise.reject(Ft(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(Xt(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : n.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await mv(this), n = new gv(e);
    this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new ss("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, i) {
    return this.registerStateListener(this.authStateSubscription, e, n, i);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, i) {
    return this.registerStateListener(this.idTokenSubscription, e, n, i);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser)
        e();
      else {
        const i = this.onAuthStateChanged(() => {
          i(), e();
        }, n);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(), i = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: n
      };
      this.tenantId != null && (i.tenantId = this.tenantId), await dv(this, i);
    }
  }
  toJSON() {
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: this._currentUser?.toJSON()
    };
  }
  async _setRedirectUser(e, n) {
    const i = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? i.removeCurrentUser() : i.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = e && Xt(e) || this._popupRedirectResolver;
      A(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await ki.create(
        this,
        [Xt(n._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    return this._isInitialized && await this.queue(async () => {
    }), this._currentUser?._redirectEventId === e ? this._currentUser : this.redirectUser?._redirectEventId === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const e = this.currentUser?.uid ?? null;
    this.lastNotifiedUid !== e && (this.lastNotifiedUid = e, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, i, r) {
    if (this._deleted)
      return () => {
      };
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (A(
      a,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), a.then(() => {
      o || s(this.currentUser);
    }), typeof n == "function") {
      const l = e.addObserver(n, i, r);
      return () => {
        o = !0, l();
      };
    } else {
      const l = e.addObserver(n);
      return () => {
        o = !0, l();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return A(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Ah(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    const e = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (e[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const n = await this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })?.getHeartbeatsHeader();
    n && (e[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = n);
    const i = await this._getAppCheckToken();
    return i && (e[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), e;
  }
  async _getAppCheckToken() {
    if (ut(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && Yg(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function Bt(t) {
  return $e(t);
}
class Gc {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = O_((n) => this.observer = n);
  }
  get next() {
    return A(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let as = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function yv(t) {
  as = t;
}
function El(t) {
  return as.loadJS(t);
}
function bv() {
  return as.recaptchaV2Script;
}
function wv() {
  return as.recaptchaEnterpriseScript;
}
function Ev() {
  return as.gapiScript;
}
function Rh(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Iv = 500, Cv = 6e4, Is = 1e12;
class Tv {
  constructor(e) {
    this.auth = e, this.counter = Is, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, n) {
    const i = this.counter;
    return this._widgets.set(i, new Av(e, this.auth.name, n || {})), this.counter++, i;
  }
  reset(e) {
    const n = e || Is;
    this._widgets.get(n)?.delete(), this._widgets.delete(n);
  }
  getResponse(e) {
    const n = e || Is;
    return this._widgets.get(n)?.getResponse() || "";
  }
  async execute(e) {
    const n = e || Is;
    return this._widgets.get(n)?.execute(), "";
  }
}
class Sv {
  constructor() {
    this.enterprise = new kv();
  }
  ready(e) {
    e();
  }
  execute(e, n) {
    return Promise.resolve("token");
  }
  render(e, n) {
    return "";
  }
}
class kv {
  ready(e) {
    e();
  }
  execute(e, n) {
    return Promise.resolve("token");
  }
  render(e, n) {
    return "";
  }
}
class Av {
  constructor(e, n, i) {
    this.params = i, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const r = typeof e == "string" ? document.getElementById(e) : e;
    A(r, "argument-error", { appName: n }), this.container = r, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = Rv(50);
      const { callback: e, "expired-callback": n } = this.params;
      if (e)
        try {
          e(this.responseToken);
        } catch {
        }
      this.timerId = window.setTimeout(() => {
        if (this.timerId = null, this.responseToken = null, n)
          try {
            n();
          } catch {
          }
        this.isVisible && this.execute();
      }, Cv);
    }, Iv));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function Rv(t) {
  const e = [], n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < t; i++)
    e.push(n.charAt(Math.floor(Math.random() * n.length)));
  return e.join("");
}
const Pv = "recaptcha-enterprise", Cr = "NO_RECAPTCHA";
class Ph {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Pv, this.auth = Bt(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", n = !1) {
    async function i(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        gh(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new _h(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = c : s._tenantRecaptchaConfigs[s.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function r(s, o, a) {
      const l = window.grecaptcha;
      Vc(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(Cr);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new Sv().execute("siteKey", { action: "verify" }) : new Promise((s, o) => {
      i(this.auth).then((a) => {
        if (!n && Vc(window.grecaptcha))
          r(a, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = wv();
          l.length !== 0 && (l += a), El(l).then(() => {
            r(a, s, o);
          }).catch((c) => {
            o(c);
          });
        }
      }).catch((a) => {
        o(a);
      });
    });
  }
}
async function ar(t, e, n, i = !1, r = !1) {
  const s = new Ph(t);
  let o;
  if (r)
    o = Cr;
  else
    try {
      o = await s.verify(n);
    } catch {
      o = await s.verify(n, !0);
    }
  const a = { ...e };
  if (n === "mfaSmsEnrollment" || n === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in a) {
      const l = a.phoneEnrollmentInfo.phoneNumber, c = a.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(a, {
        phoneEnrollmentInfo: {
          phoneNumber: l,
          recaptchaToken: c,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    } else if ("phoneSignInInfo" in a) {
      const l = a.phoneSignInInfo.recaptchaToken;
      Object.assign(a, {
        phoneSignInInfo: {
          recaptchaToken: l,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    }
    return a;
  }
  return i ? Object.assign(a, { captchaResp: o }) : Object.assign(a, { captchaResponse: o }), Object.assign(a, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(a, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), a;
}
async function Ai(t, e, n, i, r) {
  if (r === "EMAIL_PASSWORD_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const s = await ar(
        t,
        e,
        n,
        n === "getOobCode"
        /* RecaptchaActionName.GET_OOB_CODE */
      );
      return i(t, s);
    } else
      return i(t, e).catch(async (s) => {
        if (s.code === "auth/missing-recaptcha-token") {
          console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const o = await ar(
            t,
            e,
            n,
            n === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return i(t, o);
        } else
          return Promise.reject(s);
      });
  else if (r === "PHONE_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */
    )) {
      const s = await ar(t, e, n);
      return i(t, s).catch(async (o) => {
        if (t._getRecaptchaConfig()?.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ) === "AUDIT" && (o.code === "auth/missing-recaptcha-token" || o.code === "auth/invalid-app-credential")) {
          console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
          const a = await ar(
            t,
            e,
            n,
            !1,
            // isCaptchaResp
            !0
            // isFakeToken
          );
          return i(t, a);
        }
        return Promise.reject(o);
      });
    } else {
      const s = await ar(
        t,
        e,
        n,
        !1,
        // isCaptchaResp
        !0
        // isFakeToken
      );
      return i(t, s);
    }
  else
    return Promise.reject(r + " provider is not supported.");
}
async function Nv(t) {
  const e = Bt(t), n = await gh(e, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), i = new _h(n);
  e.tenantId == null ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i, i.isAnyProviderEnabled() && new Ph(e).verify();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xv(t, e) {
  const n = gl(t, "auth");
  if (n.isInitialized()) {
    const r = n.getImmediate(), s = n.getOptions();
    if (ti(s, e ?? {}))
      return r;
    Nt(
      r,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function Lv(t, e) {
  const n = e?.persistence || [], i = (Array.isArray(n) ? n : [n]).map(Xt);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(i, e?.popupRedirectResolver);
}
function Ov(t, e, n) {
  const i = Bt(t);
  A(
    /^https?:\/\//.test(e),
    i,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const r = !1, s = Nh(e), { host: o, port: a } = Dv(e), l = a === null ? "" : `:${a}`, c = { url: `${s}//${o}${l}/` }, d = Object.freeze({
    host: o,
    port: a,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: r })
  });
  if (!i._canInitEmulator) {
    A(
      i.config.emulator && i.emulatorConfig,
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), A(
      ti(c, i.config.emulator) && ti(d, i.emulatorConfig),
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  i.config.emulator = c, i.emulatorConfig = d, i.settings.appVerificationDisabledForTesting = !0, Yi(o) ? (Zd(`${s}//${o}${l}`), eh("Auth", !0)) : Mv();
}
function Nh(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Dv(t) {
  const e = Nh(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const i = n[2].split("@").pop() || "", r = /^(\[[^\]]+\])(:|$)/.exec(i);
  if (r) {
    const s = r[1];
    return { host: s, port: Kc(i.substr(s.length + 1)) };
  } else {
    const [s, o] = i.split(":");
    return { host: s, port: Kc(o) };
  }
}
function Kc(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function Mv() {
  function t() {
    const e = document.createElement("p"), n = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", n.position = "fixed", n.width = "100%", n.backgroundColor = "#ffffff", n.border = ".1em solid #000000", n.color = "#b50000", n.bottom = "0px", n.left = "0px", n.margin = "0px", n.zIndex = "10000", n.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co {
  /** @internal */
  constructor(e, n) {
    this.providerId = e, this.signInMethod = n;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return Jt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Jt("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return Jt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Jt("not implemented");
  }
}
async function $v(t, e) {
  return pt(t, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fv(t, e) {
  return Un(t, "POST", "/v1/accounts:signInWithPassword", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Uv(t, e) {
  return Un(t, "POST", "/v1/accounts:signInWithEmailLink", ot(t, e));
}
async function Wv(t, e) {
  return Un(t, "POST", "/v1/accounts:signInWithEmailLink", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur extends Co {
  /** @internal */
  constructor(e, n, i, r = null) {
    super("password", i), this._email = e, this._password = n, this._tenantId = r;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Ur(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, i = null) {
    return new Ur(e, n, "emailLink", i);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    if (n?.email && n?.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Ai(
          e,
          n,
          "signInWithPassword",
          Fv,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return Uv(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        Nt(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case "password":
        const i = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Ai(
          e,
          i,
          "signUpPassword",
          $v,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return Wv(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password
        });
      default:
        Nt(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ri(t, e) {
  return Un(t, "POST", "/v1/accounts:signInWithIdp", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hv = "http://localhost";
class ii extends Co {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new ii(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : Nt(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), n;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: i, signInMethod: r, ...s } = n;
    if (!i || !r)
      return null;
    const o = new ii(i, r);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Ri(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const i = this.buildRequest();
    return i.idToken = n, Ri(e, i);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, Ri(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: Hv,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = di(n);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yc(t, e) {
  return pt(t, "POST", "/v1/accounts:sendVerificationCode", ot(t, e));
}
async function Vv(t, e) {
  return Un(t, "POST", "/v1/accounts:signInWithPhoneNumber", ot(t, e));
}
async function jv(t, e) {
  const n = await Un(t, "POST", "/v1/accounts:signInWithPhoneNumber", ot(t, e));
  if (n.temporaryProof)
    throw mr(t, "account-exists-with-different-credential", n);
  return n;
}
const zv = {
  USER_NOT_FOUND: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function Bv(t, e) {
  const n = {
    ...e,
    operation: "REAUTH"
  };
  return Un(t, "POST", "/v1/accounts:signInWithPhoneNumber", ot(t, n), zv);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr extends Co {
  constructor(e) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    ), this.params = e;
  }
  /** @internal */
  static _fromVerification(e, n) {
    return new Tr({ verificationId: e, verificationCode: n });
  }
  /** @internal */
  static _fromTokenResponse(e, n) {
    return new Tr({ phoneNumber: e, temporaryProof: n });
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Vv(e, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return jv(e, {
      idToken: n,
      ...this._makeVerificationRequest()
    });
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Bv(e, this._makeVerificationRequest());
  }
  /** @internal */
  _makeVerificationRequest() {
    const { temporaryProof: e, phoneNumber: n, verificationId: i, verificationCode: r } = this.params;
    return e && n ? { temporaryProof: e, phoneNumber: n } : {
      sessionInfo: i,
      code: r
    };
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    const e = {
      providerId: this.providerId
    };
    return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e;
  }
  /** Generates a phone credential based on a plain object or a JSON string. */
  static fromJSON(e) {
    typeof e == "string" && (e = JSON.parse(e));
    const { verificationId: n, verificationCode: i, phoneNumber: r, temporaryProof: s } = e;
    return !i && !n && !r && !s ? null : new Tr({
      verificationId: n,
      verificationCode: i,
      phoneNumber: r,
      temporaryProof: s
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qv(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function Gv(t) {
  const e = fr(pr(t)).link, n = e ? fr(pr(e)).deep_link_id : null, i = fr(pr(t)).deep_link_id;
  return (i ? fr(pr(i)).link : null) || i || n || e || t;
}
class Il {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = fr(pr(e)), i = n.apiKey ?? null, r = n.oobCode ?? null, s = qv(n.mode ?? null);
    A(
      i && r && s,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = i, this.operation = s, this.code = r, this.continueUrl = n.continueUrl ?? null, this.languageCode = n.lang ?? null, this.tenantId = n.tenantId ?? null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const n = Gv(e);
    try {
      return new Il(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji {
  constructor() {
    this.providerId = Ji.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, n) {
    return Ur._fromEmailAndPassword(e, n);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, n) {
    const i = Il.parseLink(n);
    return A(
      i,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ur._fromEmailAndCode(e, i.code, i.tenantId);
  }
}
Ji.PROVIDER_ID = "password";
Ji.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Ji.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
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
 */
class ls extends xh {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends ls {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return ii._fromParams({
      providerId: _n.PROVIDER_ID,
      signInMethod: _n.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return _n.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return _n.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return _n.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
_n.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
_n.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends ls {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, n) {
    return ii._fromParams({
      providerId: gn.PROVIDER_ID,
      signInMethod: gn.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return gn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return gn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: i } = e;
    if (!n && !i)
      return null;
    try {
      return gn.credential(n, i);
    } catch {
      return null;
    }
  }
}
gn.GOOGLE_SIGN_IN_METHOD = "google.com";
gn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends ls {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(e) {
    return ii._fromParams({
      providerId: vn.PROVIDER_ID,
      signInMethod: vn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return vn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return vn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return vn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
vn.GITHUB_SIGN_IN_METHOD = "github.com";
vn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends ls {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, n) {
    return ii._fromParams({
      providerId: yn.PROVIDER_ID,
      signInMethod: yn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return yn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return yn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: i } = e;
    if (!n || !i)
      return null;
    try {
      return yn.credential(n, i);
    } catch {
      return null;
    }
  }
}
yn.TWITTER_SIGN_IN_METHOD = "twitter.com";
yn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kv(t, e) {
  return Un(t, "POST", "/v1/accounts:signUp", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, i, r = !1) {
    const s = await At._fromIdTokenResponse(e, i, r), o = Qc(i);
    return new ri({
      user: s,
      providerId: o,
      _tokenResponse: i,
      operationType: n
    });
  }
  static async _forOperation(e, n, i) {
    await e._updateTokensIfNecessary(
      i,
      /* reload */
      !0
    );
    const r = Qc(i);
    return new ri({
      user: e,
      providerId: r,
      _tokenResponse: i,
      operationType: n
    });
  }
}
function Qc(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs extends Fn {
  constructor(e, n, i, r) {
    super(n.code, n.message), this.operationType = i, this.user = r, Object.setPrototypeOf(this, Gs.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: i
    };
  }
  static _fromErrorAndOperation(e, n, i, r) {
    return new Gs(e, n, i, r);
  }
}
function Lh(t, e, n, i) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? Gs._fromErrorAndOperation(t, s, e, i) : s;
  });
}
async function Yv(t, e, n = !1) {
  const i = await Fi(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return ri._forOperation(t, "link", i);
}
/**
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
 */
async function Qv(t, e, n = !1) {
  const { auth: i } = t;
  if (ut(i.app))
    return Promise.reject(Ft(i));
  const r = "reauthenticate";
  try {
    const s = await Fi(t, Lh(i, r, e, t), n);
    A(
      s.idToken,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = bl(s.idToken);
    A(
      o,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return A(
      t.uid === a,
      i,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), ri._forOperation(t, r, s);
  } catch (s) {
    throw s?.code === "auth/user-not-found" && Nt(
      i,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oh(t, e, n = !1) {
  if (ut(t.app))
    return Promise.reject(Ft(t));
  const i = "signIn", r = await Lh(t, i, e), s = await ri._fromIdTokenResponse(t, i, r);
  return n || await t._updateCurrentUser(s.user), s;
}
async function Dh(t, e) {
  return Oh(Bt(t), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mh(t) {
  const e = Bt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function Jv(t, e, n) {
  if (ut(t.app))
    return Promise.reject(Ft(t));
  const i = Bt(t), o = await Ai(
    i,
    {
      returnSecureToken: !0,
      email: e,
      password: n,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    },
    "signUpPassword",
    Kv,
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  ).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && Mh(t), l;
  }), a = await ri._fromIdTokenResponse(i, "signIn", o);
  return await i._updateCurrentUser(a.user), a;
}
function Xv(t, e, n) {
  return ut(t.app) ? Promise.reject(Ft(t)) : Dh($e(t), Ji.credential(e, n)).catch(async (i) => {
    throw i.code === "auth/password-does-not-meet-requirements" && Mh(t), i;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zv(t, e) {
  return pt(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ey(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0)
    return;
  const i = $e(t), s = {
    idToken: await i.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Fi(i, Zv(i.auth, s));
  i.displayName = o.displayName || null, i.photoURL = o.photoUrl || null;
  const a = i.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = i.displayName, a.photoURL = i.photoURL), await i._updateTokensIfNecessary(o);
}
function ty(t, e, n, i) {
  return $e(t).onIdTokenChanged(e, n, i);
}
function ny(t, e, n) {
  return $e(t).beforeAuthStateChanged(e, n);
}
function iy(t, e, n, i) {
  return $e(t).onAuthStateChanged(e, n, i);
}
function ry(t) {
  return $e(t).signOut();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jc(t, e) {
  return pt(t, "POST", "/v2/accounts/mfaEnrollment:start", ot(t, e));
}
const Ks = "__sak";
/**
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
 */
class $h {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Ks, "1"), this.storage.removeItem(Ks), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sy = 1e3, oy = 10;
class Fh extends $h {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = kh(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const i = this.storage.getItem(n), r = this.localCache[n];
      i !== r && e(n, r, i);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const i = e.key;
    n ? this.detachListener() : this.stopPolling();
    const r = () => {
      const o = this.storage.getItem(i);
      !n && this.localCache[i] === o || this.notifyListeners(i, o);
    }, s = this.storage.getItem(i);
    fv() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, oy) : r();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const i = this.listeners[e];
    if (i)
      for (const r of Array.from(i))
        r(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, n, i) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: n,
            newValue: i
          }),
          /* poll */
          !0
        );
      });
    }, sy);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, n) {
    await super._set(e, n), this.localCache[e] = JSON.stringify(n);
  }
  async _get(e) {
    const n = await super._get(e);
    return this.localCache[e] = JSON.stringify(n), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Fh.type = "LOCAL";
const ay = Fh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh extends $h {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
Uh.type = "SESSION";
const Wh = Uh;
/**
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
 */
function ly(t) {
  return Promise.all(t.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (n) {
      return {
        fulfilled: !1,
        reason: n
      };
    }
  }));
}
/**
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
 */
class To {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const n = this.receivers.find((r) => r.isListeningto(e));
    if (n)
      return n;
    const i = new To(e);
    return this.receivers.push(i), i;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const n = e, { eventId: i, eventType: r, data: s } = n.data, o = this.handlersMap[r];
    if (!o?.size)
      return;
    n.ports[0].postMessage({
      status: "ack",
      eventId: i,
      eventType: r
    });
    const a = Array.from(o).map(async (c) => c(n.origin, s)), l = await ly(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: i,
      eventType: r,
      response: l
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(n);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n), (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
To.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cl(t = "", e = 10) {
  let n = "";
  for (let i = 0; i < e; i++)
    n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
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
 */
class cy {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, n, i = 50) {
    const r = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!r)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, o;
    return new Promise((a, l) => {
      const c = Cl("", 20);
      r.port1.start();
      const d = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, i);
      o = {
        messageChannel: r,
        onMessage(h) {
          const u = h;
          if (u.data.eventId === c)
            switch (u.data.status) {
              case "ack":
                clearTimeout(d), s = setTimeout(
                  () => {
                    l(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(s), a(u.data.response);
                break;
              default:
                clearTimeout(d), clearTimeout(s), l(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(o), r.port1.addEventListener("message", o.onMessage), this.target.postMessage({
        eventType: e,
        eventId: c,
        data: n
      }, [r.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Se() {
  return window;
}
function uy(t) {
  Se().location.href = t;
}
/**
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
 */
function Tl() {
  return typeof Se().WorkerGlobalScope < "u" && typeof Se().importScripts == "function";
}
async function dy() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function hy() {
  return navigator?.serviceWorker?.controller || null;
}
function fy() {
  return Tl() ? self : null;
}
/**
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
 */
const Hh = "firebaseLocalStorageDb", py = 1, Ys = "firebaseLocalStorage", Vh = "fbase_key";
class cs {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        n(this.request.error);
      });
    });
  }
}
function So(t, e) {
  return t.transaction([Ys], e ? "readwrite" : "readonly").objectStore(Ys);
}
function my() {
  const t = indexedDB.deleteDatabase(Hh);
  return new cs(t).toPromise();
}
function Na() {
  const t = indexedDB.open(Hh, py);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const i = t.result;
      try {
        i.createObjectStore(Ys, { keyPath: Vh });
      } catch (r) {
        n(r);
      }
    }), t.addEventListener("success", async () => {
      const i = t.result;
      i.objectStoreNames.contains(Ys) ? e(i) : (i.close(), await my(), e(await Na()));
    });
  });
}
async function Xc(t, e, n) {
  const i = So(t, !0).put({
    [Vh]: e,
    value: n
  });
  return new cs(i).toPromise();
}
async function _y(t, e) {
  const n = So(t, !1).get(e), i = await new cs(n).toPromise();
  return i === void 0 ? null : i.value;
}
function Zc(t, e) {
  const n = So(t, !0).delete(e);
  return new cs(n).toPromise();
}
const gy = 800, vy = 3;
class jh {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Na(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const i = await this._openDb();
        return await e(i);
      } catch (i) {
        if (n++ > vy)
          throw i;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Tl() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = To._getInstance(fy()), this.receiver._subscribe("keyChanged", async (e, n) => ({
      keyProcessed: (await this._poll()).includes(n.key)
    })), this.receiver._subscribe("ping", async (e, n) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    if (this.activeServiceWorker = await dy(), !this.activeServiceWorker)
      return;
    this.sender = new cy(this.activeServiceWorker);
    const e = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    e && e[0]?.fulfilled && e[0]?.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || hy() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await Na();
      return await Xc(e, Ks, "1"), await Zc(e, Ks), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(async () => (await this._withRetries((i) => Xc(i, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((i) => _y(i, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Zc(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((r) => {
      const s = So(r, !1).getAll();
      return new cs(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const n = [], i = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: r, value: s } of e)
        i.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(s) && (this.notifyListeners(r, s), n.push(r));
    for (const r of Object.keys(this.localCache))
      this.localCache[r] && !i.has(r) && (this.notifyListeners(r, null), n.push(r));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const i = this.listeners[e];
    if (i)
      for (const r of Array.from(i))
        r(n);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), gy);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
jh.type = "LOCAL";
const yy = jh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eu(t, e) {
  return pt(t, "POST", "/v2/accounts/mfaSignIn:start", ot(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ea = Rh("rcb"), by = new os(3e4, 6e4);
class wy {
  constructor() {
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!Se().grecaptcha?.render;
  }
  load(e, n = "") {
    return A(
      Ey(n),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(n) && Hc(Se().grecaptcha) ? Promise.resolve(Se().grecaptcha) : new Promise((i, r) => {
      const s = Se().setTimeout(() => {
        r(ft(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, by.get());
      Se()[ea] = () => {
        Se().clearTimeout(s), delete Se()[ea];
        const a = Se().grecaptcha;
        if (!a || !Hc(a)) {
          r(ft(
            e,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ));
          return;
        }
        const l = a.render;
        a.render = (c, d) => {
          const h = l(c, d);
          return this.counter++, h;
        }, this.hostLanguage = n, i(a);
      };
      const o = `${bv()}?${di({
        onload: ea,
        render: "explicit",
        hl: n
      })}`;
      El(o).catch(() => {
        clearTimeout(s), r(ft(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        ));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(e) {
    return !!Se().grecaptcha?.render && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
}
function Ey(t) {
  return t.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(t);
}
class Iy {
  async load(e) {
    return new Tv(e);
  }
  clearedOneInstance() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sr = "recaptcha", Cy = {
  theme: "light",
  type: "image"
};
class Ty {
  /**
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   */
  constructor(e, n, i = {
    ...Cy
  }) {
    this.parameters = i, this.type = Sr, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = Bt(e), this.isInvisible = this.parameters.size === "invisible", A(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const r = typeof n == "string" ? document.getElementById(n) : n;
    A(
      r,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = r, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Iy() : new wy(), this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
  async verify() {
    this.assertNotDestroyed();
    const e = await this.render(), n = this.getAssertedRecaptcha(), i = n.getResponse(e);
    return i || new Promise((r) => {
      const s = (o) => {
        o && (this.tokenChangeListeners.delete(s), r(o));
      };
      this.tokenChangeListeners.add(s), this.isInvisible && n.execute(e);
    });
  }
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    return this.renderPromise ? this.renderPromise : (this.renderPromise = this.makeRenderPromise().catch((e) => {
      throw this.renderPromise = null, e;
    }), this.renderPromise);
  }
  /** @internal */
  _reset() {
    this.assertNotDestroyed(), this.widgetId !== null && this.getAssertedRecaptcha().reset(this.widgetId);
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
  clear() {
    this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((e) => {
      this.container.removeChild(e);
    });
  }
  validateStartingState() {
    A(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), A(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), A(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }
  makeTokenCallback(e) {
    return (n) => {
      if (this.tokenChangeListeners.forEach((i) => i(n)), typeof e == "function")
        e(n);
      else if (typeof e == "string") {
        const i = Se()[e];
        typeof i == "function" && i(n);
      }
    };
  }
  assertNotDestroyed() {
    A(
      !this.destroyed,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
  }
  async makeRenderPromise() {
    if (await this.init(), !this.widgetId) {
      let e = this.container;
      if (!this.isInvisible) {
        const n = document.createElement("div");
        e.appendChild(n), e = n;
      }
      this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    A(
      hh() && !Tl(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await Sy(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await iv(this.auth);
    A(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return A(
      this.recaptcha,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.recaptcha;
  }
}
function Sy() {
  let t = null;
  return new Promise((e) => {
    if (document.readyState === "complete") {
      e();
      return;
    }
    t = () => e(), window.addEventListener("load", t);
  }).catch((e) => {
    throw t && window.removeEventListener("load", t), e;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ky {
  constructor(e, n) {
    this.verificationId = e, this.onConfirmation = n;
  }
  confirm(e) {
    const n = Tr._fromVerification(this.verificationId, e);
    return this.onConfirmation(n);
  }
}
async function Ay(t, e, n) {
  if (ut(t.app))
    return Promise.reject(Ft(t));
  const i = Bt(t), r = await Ry(i, e, $e(n));
  return new ky(r, (s) => Dh(i, s));
}
async function Ry(t, e, n) {
  if (!t._getRecaptchaConfig())
    try {
      await Nv(t);
    } catch {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  try {
    let i;
    if (typeof e == "string" ? i = {
      phoneNumber: e
    } : i = e, "session" in i) {
      const r = i.session;
      if ("phoneNumber" in i) {
        A(
          r.type === "enroll",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = {
          idToken: r.credential,
          phoneEnrollmentInfo: {
            phoneNumber: i.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        return (await Ai(
          t,
          s,
          "mfaSmsEnrollment",
          async (c, d) => {
            if (d.phoneEnrollmentInfo.captchaResponse === Cr) {
              A(
                n?.type === Sr,
                c,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const h = await ta(c, d, n);
              return Jc(c, h);
            }
            return Jc(c, d);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((c) => Promise.reject(c))).phoneSessionInfo.sessionInfo;
      } else {
        A(
          r.type === "signin",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = i.multiFactorHint?.uid || i.multiFactorUid;
        A(
          s,
          t,
          "missing-multi-factor-info"
          /* AuthErrorCode.MISSING_MFA_INFO */
        );
        const o = {
          mfaPendingCredential: r.credential,
          mfaEnrollmentId: s,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        return (await Ai(
          t,
          o,
          "mfaSmsSignIn",
          async (d, h) => {
            if (h.phoneSignInInfo.captchaResponse === Cr) {
              A(
                n?.type === Sr,
                d,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const u = await ta(d, h, n);
              return eu(d, u);
            }
            return eu(d, h);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((d) => Promise.reject(d))).phoneResponseInfo.sessionInfo;
      }
    } else {
      const r = {
        phoneNumber: i.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
      };
      return (await Ai(
        t,
        r,
        "sendVerificationCode",
        async (l, c) => {
          if (c.captchaResponse === Cr) {
            A(
              n?.type === Sr,
              l,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const d = await ta(l, c, n);
            return Yc(l, d);
          }
          return Yc(l, c);
        },
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      ).catch((l) => Promise.reject(l))).sessionInfo;
    }
  } finally {
    n?._reset();
  }
}
async function ta(t, e, n) {
  A(
    n.type === Sr,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const i = await n.verify();
  A(
    typeof i == "string",
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const r = { ...e };
  if ("phoneEnrollmentInfo" in r) {
    const s = r.phoneEnrollmentInfo.phoneNumber, o = r.phoneEnrollmentInfo.captchaResponse, a = r.phoneEnrollmentInfo.clientType, l = r.phoneEnrollmentInfo.recaptchaVersion;
    return Object.assign(r, {
      phoneEnrollmentInfo: {
        phoneNumber: s,
        recaptchaToken: i,
        captchaResponse: o,
        clientType: a,
        recaptchaVersion: l
      }
    }), r;
  } else if ("phoneSignInInfo" in r) {
    const s = r.phoneSignInInfo.captchaResponse, o = r.phoneSignInInfo.clientType, a = r.phoneSignInInfo.recaptchaVersion;
    return Object.assign(r, {
      phoneSignInInfo: {
        recaptchaToken: i,
        captchaResponse: s,
        clientType: o,
        recaptchaVersion: a
      }
    }), r;
  } else
    return Object.assign(r, { recaptchaToken: i }), r;
}
/**
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
 */
function Py(t, e) {
  return e ? Xt(e) : (A(
    t._popupRedirectResolver,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), t._popupRedirectResolver);
}
/**
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
 */
class Sl extends Co {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return Ri(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Ri(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Ri(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (n.idToken = e), n;
  }
}
function Ny(t) {
  return Oh(t.auth, new Sl(t), t.bypassAuthState);
}
function xy(t) {
  const { auth: e, user: n } = t;
  return A(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Qv(n, new Sl(t), t.bypassAuthState);
}
async function Ly(t) {
  const { auth: e, user: n } = t;
  return A(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Yv(n, new Sl(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh {
  constructor(e, n, i, r, s = !1) {
    this.auth = e, this.resolver = i, this.user = r, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n];
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (i) {
        this.reject(i);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: n, sessionId: i, postBody: r, tenantId: s, error: o, type: a } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: i,
      tenantId: s || void 0,
      postBody: r || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Ny;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ly;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return xy;
      default:
        Nt(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    an(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    an(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oy = new os(2e3, 1e4);
class Ei extends zh {
  constructor(e, n, i, r, s) {
    super(e, n, r, s), this.provider = i, this.authWindow = null, this.pollId = null, Ei.currentPopupAction && Ei.currentPopupAction.cancel(), Ei.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return A(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    an(this.filter.length === 1, "Popup operations only handle one event");
    const e = Cl();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(ft(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    return this.authWindow?.associatedEvent || null;
  }
  cancel() {
    this.reject(ft(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Ei.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(ft(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Oy.get());
    };
    e();
  }
}
Ei.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dy = "pendingRedirect", Rs = /* @__PURE__ */ new Map();
class My extends zh {
  constructor(e, n, i = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], n, void 0, i), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = Rs.get(this.auth._key());
    if (!e) {
      try {
        const i = await $y(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(i);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Rs.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Rs.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n)
        return this.user = n, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function $y(t, e) {
  const n = Wy(e), i = Uy(t);
  if (!await i._isAvailable())
    return !1;
  const r = await i._get(n) === "true";
  return await i._remove(n), r;
}
function Fy(t, e) {
  Rs.set(t._key(), e);
}
function Uy(t) {
  return Xt(t._redirectPersistence);
}
function Wy(t) {
  return As(Dy, t.config.apiKey, t.name);
}
async function Hy(t, e, n = !1) {
  if (ut(t.app))
    return Promise.reject(Ft(t));
  const i = Bt(t), r = Py(i, e), o = await new My(i, r, n).execute();
  return o && !n && (delete o.user._redirectEventId, await i._persistUserIfCurrent(o.user), await i._setRedirectUser(null, e)), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vy = 600 * 1e3;
class jy {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let n = !1;
    return this.consumers.forEach((i) => {
      this.isEventForConsumer(e, i) && (n = !0, this.sendToConsumer(e, i), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !zy(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !Bh(e)) {
      const i = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(ft(this.auth, i));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const i = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && i;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Vy && this.cachedEventUids.clear(), this.cachedEventUids.has(tu(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(tu(e)), this.lastProcessedEventTime = Date.now();
  }
}
function tu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Bh({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function zy(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Bh(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function By(t, e = {}) {
  return pt(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Gy = /^https?/;
async function Ky(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await By(t);
  for (const n of e)
    try {
      if (Yy(n))
        return;
    } catch {
    }
  Nt(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Yy(t) {
  const e = Ra(), { protocol: n, hostname: i } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && i === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === i;
  }
  if (!Gy.test(n))
    return !1;
  if (qy.test(t))
    return i === t;
  const r = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(i);
}
/**
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
 */
const Qy = new os(3e4, 6e4);
function nu() {
  const t = Se().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function Jy(t) {
  return new Promise((e, n) => {
    function i() {
      nu(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          nu(), n(ft(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Qy.get()
      });
    }
    if (Se().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Se().gapi?.load)
      i();
    else {
      const r = Rh("iframefcb");
      return Se()[r] = () => {
        gapi.load ? i() : n(ft(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, El(`${Ev()}?onload=${r}`).catch((s) => n(s));
    }
  }).catch((e) => {
    throw Ps = null, e;
  });
}
let Ps = null;
function Xy(t) {
  return Ps = Ps || Jy(t), Ps;
}
/**
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
 */
const Zy = new os(5e3, 15e3), eb = "__/auth/iframe", tb = "emulator/auth/iframe", nb = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, ib = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function rb(t) {
  const e = t.config;
  A(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? yl(e, tb) : `https://${t.config.authDomain}/${eb}`, i = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Qi
  }, r = ib.get(t.config.apiHost);
  r && (i.eid = r);
  const s = t._getFrameworks();
  return s.length && (i.fw = s.join(",")), `${n}?${di(i).slice(1)}`;
}
async function sb(t) {
  const e = await Xy(t), n = Se().gapi;
  return A(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: rb(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: nb,
    dontclear: !0
  }, (i) => new Promise(async (r, s) => {
    await i.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = ft(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Se().setTimeout(() => {
      s(o);
    }, Zy.get());
    function l() {
      Se().clearTimeout(a), r(i);
    }
    i.ping(l).then(l, () => {
      s(o);
    });
  }));
}
/**
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
 */
const ob = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, ab = 500, lb = 600, cb = "_blank", ub = "http://localhost";
class iu {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function db(t, e, n, i = ab, r = lb) {
  const s = Math.max((window.screen.availHeight - r) / 2, 0).toString(), o = Math.max((window.screen.availWidth - i) / 2, 0).toString();
  let a = "";
  const l = {
    ...ob,
    width: i.toString(),
    height: r.toString(),
    top: s,
    left: o
  }, c = et().toLowerCase();
  n && (a = Eh(c) ? cb : n), bh(c) && (e = e || ub, l.scrollbars = "yes");
  const d = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (hv(c) && a !== "_self")
    return hb(e || "", a), new iu(null);
  const h = window.open(e || "", a, d);
  A(
    h,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    h.focus();
  } catch {
  }
  return new iu(h);
}
function hb(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const i = document.createEvent("MouseEvent");
  i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(i);
}
/**
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
 */
const fb = "__/auth/handler", pb = "emulator/auth/handler", mb = encodeURIComponent("fac");
async function ru(t, e, n, i, r, s) {
  A(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), A(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: i,
    v: Qi,
    eventId: r
  };
  if (e instanceof xh) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Ia(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({}))
      o[d] = h;
  }
  if (e instanceof ls) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(), c = l ? `#${mb}=${encodeURIComponent(l)}` : "";
  return `${_b(t)}?${di(a).slice(1)}${c}`;
}
function _b({ config: t }) {
  return t.emulator ? yl(t, pb) : `https://${t.authDomain}/${fb}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const na = "webStorageSupport";
class gb {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Wh, this._completeRedirectFn = Hy, this._overrideRedirectResult = Fy;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, i, r) {
    an(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const s = await ru(e, n, i, Ra(), r);
    return db(e, s, Cl());
  }
  async _openRedirect(e, n, i, r) {
    await this._originValidation(e);
    const s = await ru(e, n, i, Ra(), r);
    return uy(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: r, promise: s } = this.eventManagers[n];
      return r ? Promise.resolve(r) : (an(s, "If manager is not set, promise should be"), s);
    }
    const i = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: i }, i.catch(() => {
      delete this.eventManagers[n];
    }), i;
  }
  async initAndGetManager(e) {
    const n = await sb(e), i = new jy(e);
    return n.register("authEvent", (r) => (A(
      r?.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: i.onEvent(r.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: i }, this.iframes[e._key()] = n, i;
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(na, { type: na }, (r) => {
      const s = r?.[0]?.[na];
      s !== void 0 && n(!!s), Nt(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = Ky(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return kh() || wh() || wl();
  }
}
const vb = gb;
var su = "@firebase/auth", ou = "1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yb {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    return this.assertAuthConfigured(), this.auth.currentUser?.uid || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const n = this.auth.onIdTokenChanged((i) => {
      e(i?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    A(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bb(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function wb(t) {
  $i(new ni(
    "auth",
    (e, { options: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = i.options;
      A(o && !o.includes(":"), "invalid-api-key", { appName: i.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Ah(t)
      }, c = new vv(i, r, s, l);
      return Lv(c, n), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, n, i) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), $i(new ni(
    "auth-internal",
    (e) => {
      const n = Bt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((i) => new yb(i))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), kn(su, ou, bb(t)), kn(su, ou, "esm2020");
}
/**
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
 */
const Eb = 300, Ib = Xd("authIdTokenMaxAge") || Eb;
let au = null;
const Cb = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), i = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (i && i > Ib)
    return;
  const r = n?.token;
  au !== r && (au = r, await fetch(t, {
    method: r ? "POST" : "DELETE",
    headers: r ? {
      Authorization: `Bearer ${r}`
    } : {}
  }));
};
function Tb(t = oh()) {
  const e = gl(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = xv(t, {
    popupRedirectResolver: vb,
    persistence: [
      yy,
      ay,
      Wh
    ]
  }), i = Xd("authTokenSyncURL");
  if (i && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(i, location.origin);
    if (location.origin === s.origin) {
      const o = Cb(s.toString());
      ny(n, o, () => o(n.currentUser)), ty(n, (a) => o(a));
    }
  }
  const r = Qd("auth");
  return r && Ov(n, `http://${r}`), n;
}
function Sb() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
yv({
  loadJS(t) {
    return new Promise((e, n) => {
      const i = document.createElement("script");
      i.setAttribute("src", t), i.onload = e, i.onerror = (r) => {
        const s = ft(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = r, n(s);
      }, i.type = "text/javascript", i.charset = "UTF-8", Sb().appendChild(i);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
wb(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const lu = "@firebase/database", cu = "1.1.0";
/**
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
 */
let qh = "";
function kb(t) {
  qh = t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ab {
  /**
   * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
   */
  constructor(e) {
    this.domStorage_ = e, this.prefix_ = "firebase:";
  }
  /**
   * @param key - The key to save the value under
   * @param value - The value being stored, or null to remove the key.
   */
  set(e, n) {
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Ne(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : $r(n);
  }
  remove(e) {
    this.domStorage_.removeItem(this.prefixedName_(e));
  }
  prefixedName_(e) {
    return this.prefix_ + e;
  }
  toString() {
    return this.domStorage_.toString();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rb {
  constructor() {
    this.cache_ = {}, this.isInMemoryStorage = !0;
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : this.cache_[e] = n;
  }
  get(e) {
    return zt(this.cache_, e) ? this.cache_[e] : null;
  }
  remove(e) {
    delete this.cache_[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gh = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Ab(e);
    }
  } catch {
  }
  return new Rb();
}, Kn = Gh("localStorage"), Pb = Gh("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pi = new ml("@firebase/database"), Nb = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), Kh = function(t) {
  const e = $_(t), n = new L_();
  n.update(e);
  const i = n.digest();
  return hl.encodeByteArray(i);
}, us = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Array.isArray(i) || i && typeof i == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof i.length == "number" ? e += us.apply(null, i) : typeof i == "object" ? e += Ne(i) : e += i, e += " ";
  }
  return e;
};
let kr = null, uu = !0;
const xb = function(t, e) {
  C(!0, "Can't turn on custom loggers persistently."), Pi.logLevel = ne.VERBOSE, kr = Pi.log.bind(Pi);
}, He = function(...t) {
  if (uu === !0 && (uu = !1, kr === null && Pb.get("logging_enabled") === !0 && xb()), kr) {
    const e = us.apply(null, t);
    kr(e);
  }
}, ds = function(t) {
  return function(...e) {
    He(t, ...e);
  };
}, xa = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + us(...t);
  Pi.error(e);
}, ln = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${us(...t)}`;
  throw Pi.error(e), new Error(e);
}, Ze = function(...t) {
  const e = "FIREBASE WARNING: " + us(...t);
  Pi.warn(e);
}, Lb = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, kl = function(t) {
  return typeof t == "number" && (t !== t || // NaN
  t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY);
}, Ob = function(t) {
  if (document.readyState === "complete")
    t();
  else {
    let e = !1;
    const n = function() {
      if (!document.body) {
        setTimeout(n, Math.floor(10));
        return;
      }
      e || (e = !0, t());
    };
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
      document.readyState === "complete" && n();
    }), window.attachEvent("onload", n));
  }
}, Ui = "[MIN_NAME]", si = "[MAX_NAME]", hi = function(t, e) {
  if (t === e)
    return 0;
  if (t === Ui || e === si)
    return -1;
  if (e === Ui || t === si)
    return 1;
  {
    const n = du(t), i = du(e);
    return n !== null ? i !== null ? n - i === 0 ? t.length - e.length : n - i : -1 : i !== null ? 1 : t < e ? -1 : 1;
  }
}, Db = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, lr = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + Ne(e));
}, Al = function(t) {
  if (typeof t != "object" || t === null)
    return Ne(t);
  const e = [];
  for (const i in t)
    e.push(i);
  e.sort();
  let n = "{";
  for (let i = 0; i < e.length; i++)
    i !== 0 && (n += ","), n += Ne(e[i]), n += ":", n += Al(t[e[i]]);
  return n += "}", n;
}, Yh = function(t, e) {
  const n = t.length;
  if (n <= e)
    return [t];
  const i = [];
  for (let r = 0; r < n; r += e)
    r + e > n ? i.push(t.substring(r, n)) : i.push(t.substring(r, r + e));
  return i;
};
function je(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}
const Qh = function(t) {
  C(!kl(t), "Invalid JSON number");
  const e = 11, n = 52, i = (1 << e - 1) - 1;
  let r, s, o, a, l;
  t === 0 ? (s = 0, o = 0, r = 1 / t === -1 / 0 ? 1 : 0) : (r = t < 0, t = Math.abs(t), t >= Math.pow(2, 1 - i) ? (a = Math.min(Math.floor(Math.log(t) / Math.LN2), i), s = a + i, o = Math.round(t * Math.pow(2, n - a) - Math.pow(2, n))) : (s = 0, o = Math.round(t / Math.pow(2, 1 - i - n))));
  const c = [];
  for (l = n; l; l -= 1)
    c.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
  for (l = e; l; l -= 1)
    c.push(s % 2 ? 1 : 0), s = Math.floor(s / 2);
  c.push(r ? 1 : 0), c.reverse();
  const d = c.join("");
  let h = "";
  for (l = 0; l < 64; l += 8) {
    let u = parseInt(d.substr(l, 8), 2).toString(16);
    u.length === 1 && (u = "0" + u), h = h + u;
  }
  return h.toLowerCase();
}, Mb = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, $b = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function Fb(t, e) {
  let n = "Unknown Error";
  t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
  const i = new Error(t + " at " + e._path.toString() + ": " + n);
  return i.code = t.toUpperCase(), i;
}
const Ub = new RegExp("^-?(0*)\\d{1,10}$"), Wb = -2147483648, Hb = 2147483647, du = function(t) {
  if (Ub.test(t)) {
    const e = Number(t);
    if (e >= Wb && e <= Hb)
      return e;
  }
  return null;
}, Xi = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw Ze("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, Vb = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, Ar = function(t, e) {
  const n = setTimeout(t, e);
  return typeof n == "number" && // @ts-ignore Is only defined in Deno environments.
  typeof Deno < "u" && // @ts-ignore Deno and unrefTimer are only defined in Deno environments.
  Deno.unrefTimer ? Deno.unrefTimer(n) : typeof n == "object" && n.unref && n.unref(), n;
};
/**
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
 */
class jb {
  constructor(e, n) {
    this.appCheckProvider = n, this.appName = e.name, ut(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = n?.getImmediate({ optional: !0 }), this.appCheck || n?.get().then((i) => this.appCheck = i);
  }
  getToken(e) {
    if (this.serverAppAppCheckToken) {
      if (e)
        throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
      return Promise.resolve({ token: this.serverAppAppCheckToken });
    }
    return this.appCheck ? this.appCheck.getToken(e) : new Promise((n, i) => {
      setTimeout(() => {
        this.appCheck ? this.getToken(e).then(n, i) : n(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.appCheckProvider?.get().then((n) => n.addTokenListener(e));
  }
  notifyForInvalidToken() {
    Ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zb {
  constructor(e, n, i) {
    this.appName_ = e, this.firebaseOptions_ = n, this.authProvider_ = i, this.auth_ = null, this.auth_ = i.getImmediate({ optional: !0 }), this.auth_ || i.onInit((r) => this.auth_ = r);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((n) => n && n.code === "auth/token-not-initialized" ? (He("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(n)) : new Promise((n, i) => {
      setTimeout(() => {
        this.auth_ ? this.getToken(e).then(n, i) : n(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((n) => n.addAuthTokenListener(e));
  }
  removeTokenChangeListener(e) {
    this.authProvider_.get().then((n) => n.removeAuthTokenListener(e));
  }
  notifyForInvalidToken() {
    let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
    "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Ze(e);
  }
}
class Ns {
  constructor(e) {
    this.accessToken = e;
  }
  getToken(e) {
    return Promise.resolve({
      accessToken: this.accessToken
    });
  }
  addTokenChangeListener(e) {
    e(this.accessToken);
  }
  removeTokenChangeListener(e) {
  }
  notifyForInvalidToken() {
  }
}
Ns.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rl = "5", Jh = "v", Xh = "s", Zh = "r", ef = "f", tf = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, nf = "ls", rf = "p", La = "ac", sf = "websocket", of = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class af {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, i, r, s = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = i, this.webSocketOnly = r, this.nodeAdmin = s, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = Kn.get("host:" + e) || this._host;
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === "s-";
  }
  isCustomHost() {
    return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
  }
  get host() {
    return this._host;
  }
  set host(e) {
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && Kn.set("host:" + this._host, this.internalHost));
  }
  toString() {
    let e = this.toURLString();
    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
  }
  toURLString() {
    const e = this.secure ? "https://" : "http://", n = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${e}${this.host}/${n}`;
  }
}
function Bb(t) {
  return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams;
}
function lf(t, e, n) {
  C(typeof e == "string", "typeof type must == string"), C(typeof n == "object", "typeof params must == object");
  let i;
  if (e === sf)
    i = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === of)
    i = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  Bb(t) && (n.ns = t.namespace);
  const r = [];
  return je(n, (s, o) => {
    r.push(s + "=" + o);
  }), i + r.join("&");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qb {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    zt(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += n;
  }
  get() {
    return h_(this.counters_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ia = {}, ra = {};
function Pl(t) {
  const e = t.toString();
  return ia[e] || (ia[e] = new qb()), ia[e];
}
function Gb(t, e) {
  const n = t.toString();
  return ra[n] || (ra[n] = e()), ra[n];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kb {
  /**
   * @param onMessage_
   */
  constructor(e) {
    this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
  }
  closeAfter(e, n) {
    this.closeAfterResponse = e, this.onClose = n, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
  }
  /**
   * Each message from the server comes with a response number, and an array of data. The responseNumber
   * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
   * browsers will respond in the same order as the requests we sent
   */
  handleResponse(e, n) {
    for (this.pendingResponses[e] = n; this.pendingResponses[this.currentResponseNum]; ) {
      const i = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let r = 0; r < i.length; ++r)
        i[r] && Xi(() => {
          this.onMessage_(i[r]);
        });
      if (this.currentResponseNum === this.closeAfterResponse) {
        this.onClose && (this.onClose(), this.onClose = null);
        break;
      }
      this.currentResponseNum++;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hu = "start", Yb = "close", Qb = "pLPCommand", Jb = "pRTLPCB", cf = "id", uf = "pw", df = "ser", Xb = "cb", Zb = "seg", ew = "ts", tw = "d", nw = "dframe", hf = 1870, ff = 30, iw = hf - ff, rw = 25e3, sw = 3e4;
class Ii {
  /**
   * @param connId An identifier for this connection, used for logging
   * @param repoInfo The info for the endpoint to send data to.
   * @param applicationId The Firebase App ID for this project.
   * @param appCheckToken The AppCheck token for this client.
   * @param authToken The AuthToken to use for this connection.
   * @param transportSessionId Optional transportSessionid if we are
   * reconnecting for an existing transport session
   * @param lastSessionId Optional lastSessionId if the PersistentConnection has
   * already created a connection previously
   */
  constructor(e, n, i, r, s, o, a) {
    this.connId = e, this.repoInfo = n, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = ds(e), this.stats_ = Pl(n), this.urlFn = (l) => (this.appCheckToken && (l[La] = this.appCheckToken), lf(n, of, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new Kb(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(sw)), Ob(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new Nl((...s) => {
        const [o, a, l, c, d] = s;
        if (this.incrementIncomingBytes_(s), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === hu)
            this.id = a, this.password = l;
          else if (o === Yb)
            a ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(a, () => {
              this.onClosed_();
            })) : this.onClosed_();
          else
            throw new Error("Unrecognized command received: " + o);
      }, (...s) => {
        const [o, a] = s;
        this.incrementIncomingBytes_(s), this.myPacketOrderer.handleResponse(o, a);
      }, () => {
        this.onClosed_();
      }, this.urlFn);
      const i = {};
      i[hu] = "t", i[df] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (i[Xb] = this.scriptTagHolder.uniqueCallbackIdentifier), i[Jh] = Rl, this.transportSessionId && (i[Xh] = this.transportSessionId), this.lastSessionId && (i[nf] = this.lastSessionId), this.applicationId && (i[rf] = this.applicationId), this.appCheckToken && (i[La] = this.appCheckToken), typeof location < "u" && location.hostname && tf.test(location.hostname) && (i[Zh] = ef);
      const r = this.urlFn(i);
      this.log_("Connecting via long-poll to " + r), this.scriptTagHolder.addTag(r, () => {
      });
    });
  }
  /**
   * Call this when a handshake has completed successfully and we want to consider the connection established
   */
  start() {
    this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password);
  }
  /**
   * Forces long polling to be considered as a potential transport
   */
  static forceAllow() {
    Ii.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    Ii.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return Ii.forceAllow_ ? !0 : !Ii.forceDisallow_ && typeof document < "u" && document.createElement != null && !Mb() && !$b();
  }
  /**
   * No-op for polling
   */
  markConnectionHealthy() {
  }
  /**
   * Stops polling and cleans up the iframe
   */
  shutdown_() {
    this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null);
  }
  /**
   * Triggered when this transport is closed
   */
  onClosed_() {
    this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null));
  }
  /**
   * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
   * that we've left.
   */
  close() {
    this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_());
  }
  /**
   * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
   * broken into chunks (since URLs have a small maximum length).
   * @param data - The JSON data to transmit.
   */
  send(e) {
    const n = Ne(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = Kd(n), r = Yh(i, iw);
    for (let s = 0; s < r.length; s++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[s]), this.curSegmentNum++;
  }
  /**
   * This is how we notify the server that we're leaving.
   * We aren't able to send requests with DHTML on a window close event, but we can
   * trigger XHR requests in some browsers (everything but Opera basically).
   */
  addDisconnectPingFrame(e, n) {
    this.myDisconnFrame = document.createElement("iframe");
    const i = {};
    i[nw] = "t", i[cf] = e, i[uf] = n, this.myDisconnFrame.src = this.urlFn(i), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = Ne(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class Nl {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, i, r) {
    this.onDisconnect = i, this.urlFn = r, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = Nb(), window[Qb + this.uniqueCallbackIdentifier] = e, window[Jb + this.uniqueCallbackIdentifier] = n, this.myIFrame = Nl.createIFrame_();
      let s = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (s = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        He("frame writing exception"), a.stack && He(a.stack), He(a);
      }
    }
  }
  /**
   * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
   * actually use.
   */
  static createIFrame_() {
    const e = document.createElement("iframe");
    if (e.style.display = "none", document.body) {
      document.body.appendChild(e);
      try {
        e.contentWindow.document || He("No IE domain setting required");
      } catch {
        const i = document.domain;
        e.src = "javascript:void((function(){document.open();document.domain='" + i + "';document.close();})())";
      }
    } else
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e;
  }
  /**
   * Cancel all outstanding queries and remove the frame.
   */
  close() {
    this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.textContent = "", setTimeout(() => {
      this.myIFrame !== null && (document.body.removeChild(this.myIFrame), this.myIFrame = null);
    }, Math.floor(0)));
    const e = this.onDisconnect;
    e && (this.onDisconnect = null, e());
  }
  /**
   * Actually start the long-polling session by adding the first script tag(s) to the iframe.
   * @param id - The ID of this connection
   * @param pw - The password for this connection
   */
  startLongPoll(e, n) {
    for (this.myID = e, this.myPW = n, this.alive = !0; this.newRequest_(); )
      ;
  }
  /**
   * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
   * too many outstanding requests and we are still alive.
   *
   * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
   * needed.
   */
  newRequest_() {
    if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
      this.currentSerial++;
      const e = {};
      e[cf] = this.myID, e[uf] = this.myPW, e[df] = this.currentSerial;
      let n = this.urlFn(e), i = "", r = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + ff + i.length <= hf; ) {
        const o = this.pendingSegs.shift();
        i = i + "&" + Zb + r + "=" + o.seg + "&" + ew + r + "=" + o.ts + "&" + tw + r + "=" + o.d, r++;
      }
      return n = n + i, this.addLongPollTag_(n, this.currentSerial), !0;
    } else
      return !1;
  }
  /**
   * Queue a packet for transmission to the server.
   * @param segnum - A sequential id for this packet segment used for reassembly
   * @param totalsegs - The total number of segments in this packet
   * @param data - The data for this segment.
   */
  enqueueSegment(e, n, i) {
    this.pendingSegs.push({ seg: e, ts: n, d: i }), this.alive && this.newRequest_();
  }
  /**
   * Add a script tag for a regular long-poll request.
   * @param url - The URL of the script tag.
   * @param serial - The serial number of the request.
   */
  addLongPollTag_(e, n) {
    this.outstandingRequests.add(n);
    const i = () => {
      this.outstandingRequests.delete(n), this.newRequest_();
    }, r = setTimeout(i, Math.floor(rw)), s = () => {
      clearTimeout(r), i();
    };
    this.addTag(e, s);
  }
  /**
   * Add an arbitrary script tag to the iframe.
   * @param url - The URL for the script tag source.
   * @param loadCB - A callback to be triggered once the script has loaded.
   */
  addTag(e, n) {
    setTimeout(() => {
      try {
        if (!this.sendNewPolls)
          return;
        const i = this.myIFrame.doc.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function() {
          const r = i.readyState;
          (!r || r === "loaded" || r === "complete") && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), n());
        }, i.onerror = () => {
          He("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
        }, this.myIFrame.doc.body.appendChild(i);
      } catch {
      }
    }, Math.floor(1));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ow = 16384, aw = 45e3;
let Qs = null;
typeof MozWebSocket < "u" ? Qs = MozWebSocket : typeof WebSocket < "u" && (Qs = WebSocket);
class St {
  /**
   * @param connId identifier for this transport
   * @param repoInfo The info for the websocket endpoint.
   * @param applicationId The Firebase App ID for this project.
   * @param appCheckToken The App Check Token for this client.
   * @param authToken The Auth Token for this client.
   * @param transportSessionId Optional transportSessionId if this is connecting
   * to an existing transport session
   * @param lastSessionId Optional lastSessionId if there was a previous
   * connection
   */
  constructor(e, n, i, r, s, o, a) {
    this.connId = e, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = ds(this.connId), this.stats_ = Pl(n), this.connURL = St.connectionURL_(n, o, a, r, i), this.nodeAdmin = n.nodeAdmin;
  }
  /**
   * @param repoInfo - The info for the websocket endpoint.
   * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId - Optional lastSessionId if there was a previous connection
   * @returns connection url
   */
  static connectionURL_(e, n, i, r, s) {
    const o = {};
    return o[Jh] = Rl, typeof location < "u" && location.hostname && tf.test(location.hostname) && (o[Zh] = ef), n && (o[Xh] = n), i && (o[nf] = i), r && (o[La] = r), s && (o[rf] = s), lf(e, sf, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, Kn.set("previous_websocket_failure", !0);
    try {
      let i;
      T_(), this.mySock = new Qs(this.connURL, [], i);
    } catch (i) {
      this.log_("Error instantiating WebSocket.");
      const r = i.message || i.data;
      r && this.log_(r), this.onClosed_();
      return;
    }
    this.mySock.onopen = () => {
      this.log_("Websocket connected."), this.everConnected_ = !0;
    }, this.mySock.onclose = () => {
      this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_();
    }, this.mySock.onmessage = (i) => {
      this.handleIncomingFrame(i);
    }, this.mySock.onerror = (i) => {
      this.log_("WebSocket error.  Closing connection.");
      const r = i.message || i.data;
      r && this.log_(r), this.onClosed_();
    };
  }
  /**
   * No-op for websockets, we don't need to do anything once the connection is confirmed as open
   */
  start() {
  }
  static forceDisallow() {
    St.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, i = navigator.userAgent.match(n);
      i && i.length > 1 && parseFloat(i[1]) < 4.4 && (e = !0);
    }
    return !e && Qs !== null && !St.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return Kn.isInMemoryStorage || Kn.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    Kn.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const i = $r(n);
      this.onMessage(i);
    }
  }
  /**
   * @param frameCount - The number of frames we are expecting from the server
   */
  handleNewFrameCount_(e) {
    this.totalFrames = e, this.frames = [];
  }
  /**
   * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
   * @returns Any remaining data to be process, or null if there is none
   */
  extractFrameCount_(e) {
    if (C(this.frames === null, "We already have a frame buffer"), e.length <= 6) {
      const n = Number(e);
      if (!isNaN(n))
        return this.handleNewFrameCount_(n), null;
    }
    return this.handleNewFrameCount_(1), e;
  }
  /**
   * Process a websocket frame that has arrived from the server.
   * @param mess - The frame data
   */
  handleIncomingFrame(e) {
    if (this.mySock === null)
      return;
    const n = e.data;
    if (this.bytesReceived += n.length, this.stats_.incrementCounter("bytes_received", n.length), this.resetKeepAlive(), this.frames !== null)
      this.appendFrame_(n);
    else {
      const i = this.extractFrameCount_(n);
      i !== null && this.appendFrame_(i);
    }
  }
  /**
   * Send a message to the server
   * @param data - The JSON object to transmit
   */
  send(e) {
    this.resetKeepAlive();
    const n = Ne(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = Yh(n, ow);
    i.length > 1 && this.sendString_(String(i.length));
    for (let r = 0; r < i.length; r++)
      this.sendString_(i[r]);
  }
  shutdown_() {
    this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null);
  }
  onClosed_() {
    this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null));
  }
  /**
   * External-facing close handler.
   * Close the websocket and kill the connection.
   */
  close() {
    this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_());
  }
  /**
   * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
   * the last activity.
   */
  resetKeepAlive() {
    clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(() => {
      this.mySock && this.sendString_("0"), this.resetKeepAlive();
    }, Math.floor(aw));
  }
  /**
   * Send a string over the websocket.
   *
   * @param str - String to send.
   */
  sendString_(e) {
    try {
      this.mySock.send(e);
    } catch (n) {
      this.log_("Exception thrown from WebSocket.send():", n.message || n.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0);
    }
  }
}
St.responsesRequiredToBeHealthy = 2;
St.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr {
  static get ALL_TRANSPORTS() {
    return [Ii, St];
  }
  /**
   * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
   * TransportManager has already set up transports_
   */
  static get IS_TRANSPORT_INITIALIZED() {
    return this.globalTransportInitialized_;
  }
  /**
   * @param repoInfo - Metadata around the namespace we're connecting to
   */
  constructor(e) {
    this.initTransports_(e);
  }
  initTransports_(e) {
    const n = St && St.isAvailable();
    let i = n && !St.previouslyFailed();
    if (e.webSocketOnly && (n || Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i)
      this.transports_ = [St];
    else {
      const r = this.transports_ = [];
      for (const s of Wr.ALL_TRANSPORTS)
        s && s.isAvailable() && r.push(s);
      Wr.globalTransportInitialized_ = !0;
    }
  }
  /**
   * @returns The constructor for the initial transport to use
   */
  initialTransport() {
    if (this.transports_.length > 0)
      return this.transports_[0];
    throw new Error("No transports available");
  }
  /**
   * @returns The constructor for the next transport, or null
   */
  upgradeTransport() {
    return this.transports_.length > 1 ? this.transports_[1] : null;
  }
}
Wr.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lw = 6e4, cw = 5e3, uw = 10 * 1024, dw = 100 * 1024, sa = "t", fu = "d", hw = "s", pu = "r", fw = "e", mu = "o", _u = "a", gu = "n", vu = "p", pw = "h";
class mw {
  /**
   * @param id - an id for this connection
   * @param repoInfo_ - the info for the endpoint to connect to
   * @param applicationId_ - the Firebase App ID for this project
   * @param appCheckToken_ - The App Check Token for this device.
   * @param authToken_ - The auth token for this session.
   * @param onMessage_ - the callback to be triggered when a server-push message arrives
   * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
   * @param onDisconnect_ - the callback to be triggered when a connection was lost
   * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
   * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
   */
  constructor(e, n, i, r, s, o, a, l, c, d) {
    this.id = e, this.repoInfo_ = n, this.applicationId_ = i, this.appCheckToken_ = r, this.authToken_ = s, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = d, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = ds("c:" + this.id + ":"), this.transportManager_ = new Wr(n), this.log_("Connection created"), this.start_();
  }
  /**
   * Starts a connection attempt
   */
  start_() {
    const e = this.transportManager_.initialTransport();
    this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.conn_), i = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(() => {
      this.conn_ && this.conn_.open(n, i);
    }, Math.floor(0));
    const r = e.healthyTimeout || 0;
    r > 0 && (this.healthyTimeout_ = Ar(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > dw ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > uw ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
    }, Math.floor(r)));
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(e) {
    return (n) => {
      e === this.conn_ ? this.onConnectionLost_(n) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection");
    };
  }
  connReceiver_(e) {
    return (n) => {
      this.state_ !== 2 && (e === this.rx_ ? this.onPrimaryMessageReceived_(n) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(n) : this.log_("message on old connection"));
    };
  }
  /**
   * @param dataMsg - An arbitrary data message to be sent to the server
   */
  sendRequest(e) {
    const n = { t: "d", d: e };
    this.sendData_(n);
  }
  tryCleanupConnection() {
    this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null);
  }
  onSecondaryControl_(e) {
    if (sa in e) {
      const n = e[sa];
      n === _u ? this.upgradeIfSecondaryHealthy_() : n === pu ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === mu && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = lr("t", e), i = lr("d", e);
    if (n === "c")
      this.onSecondaryControl_(i);
    else if (n === "d")
      this.pendingDataMessages.push(i);
    else
      throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: vu, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: _u, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: gu, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = lr("t", e), i = lr("d", e);
    n === "c" ? this.onControl_(i) : n === "d" && this.onDataMessage_(i);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = lr(sa, e);
    if (fu in e) {
      const i = e[fu];
      if (n === pw) {
        const r = {
          ...i
        };
        this.repoInfo_.isUsingEmulator && (r.h = this.repoInfo_.host), this.onHandshake_(r);
      } else if (n === gu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let r = 0; r < this.pendingDataMessages.length; ++r)
          this.onDataMessage_(this.pendingDataMessages[r]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === hw ? this.onConnectionShutdown_(i) : n === pu ? this.onReset_(i) : n === fw ? xa("Server Error: " + i) : n === mu ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : xa("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, i = e.v, r = e.h;
    this.sessionId = e.s, this.repoInfo_.host = r, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), Rl !== i && Ze("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), i = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, i), Ar(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(lw));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Ar(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(cw));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: vu, d: {} } }));
  }
  onSecondaryConnectionLost_() {
    const e = this.secondaryConn_;
    this.secondaryConn_ = null, (this.tx_ === e || this.rx_ === e) && this.close();
  }
  /**
   * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
   * we should flush the host cache
   */
  onConnectionLost_(e) {
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (Kn.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
  }
  onConnectionShutdown_(e) {
    this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close();
  }
  sendData_(e) {
    if (this.state_ !== 1)
      throw "Connection is not connected";
    this.tx_.send(e);
  }
  /**
   * Cleans up this connection, calling the appropriate callbacks
   */
  close() {
    this.state_ !== 2 && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null));
  }
  closeConnections_() {
    this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pf {
  put(e, n, i, r) {
  }
  merge(e, n, i, r) {
  }
  /**
   * Refreshes the auth token for the current connection.
   * @param token - The authentication token
   */
  refreshAuthToken(e) {
  }
  /**
   * Refreshes the app check token for the current connection.
   * @param token The app check token
   */
  refreshAppCheckToken(e) {
  }
  onDisconnectPut(e, n, i) {
  }
  onDisconnectMerge(e, n, i) {
  }
  onDisconnectCancel(e, n) {
  }
  reportStats(e) {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mf {
  constructor(e) {
    this.allowedEvents_ = e, this.listeners_ = {}, C(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  /**
   * To be called by derived classes to trigger events.
   */
  trigger(e, ...n) {
    if (Array.isArray(this.listeners_[e])) {
      const i = [...this.listeners_[e]];
      for (let r = 0; r < i.length; r++)
        i[r].callback.apply(i[r].context, n);
    }
  }
  on(e, n, i) {
    this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({ callback: n, context: i });
    const r = this.getInitialEvent(e);
    r && n.apply(i, r);
  }
  off(e, n, i) {
    this.validateEventType_(e);
    const r = this.listeners_[e] || [];
    for (let s = 0; s < r.length; s++)
      if (r[s].callback === n && (!i || i === r[s].context)) {
        r.splice(s, 1);
        return;
      }
  }
  validateEventType_(e) {
    C(this.allowedEvents_.find((n) => n === e), "Unknown event: " + e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js extends mf {
  static getInstance() {
    return new Js();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !pl() && (window.addEventListener("online", () => {
      this.online_ || (this.online_ = !0, this.trigger("online", !0));
    }, !1), window.addEventListener("offline", () => {
      this.online_ && (this.online_ = !1, this.trigger("online", !1));
    }, !1));
  }
  getInitialEvent(e) {
    return C(e === "online", "Unknown event type: " + e), [this.online_];
  }
  currentlyOnline() {
    return this.online_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yu = 32, bu = 768;
class ie {
  /**
   * @param pathOrString - Path string to parse, or another path, or the raw
   * tokens array
   */
  constructor(e, n) {
    if (n === void 0) {
      this.pieces_ = e.split("/");
      let i = 0;
      for (let r = 0; r < this.pieces_.length; r++)
        this.pieces_[r].length > 0 && (this.pieces_[i] = this.pieces_[r], i++);
      this.pieces_.length = i, this.pieceNum_ = 0;
    } else
      this.pieces_ = e, this.pieceNum_ = n;
  }
  toString() {
    let e = "";
    for (let n = this.pieceNum_; n < this.pieces_.length; n++)
      this.pieces_[n] !== "" && (e += "/" + this.pieces_[n]);
    return e || "/";
  }
}
function J() {
  return new ie("");
}
function H(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function Nn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function ue(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new ie(t.pieces_, e);
}
function xl(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function _w(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Hr(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function _f(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new ie(e, 0);
}
function be(t, e) {
  const n = [];
  for (let i = t.pieceNum_; i < t.pieces_.length; i++)
    n.push(t.pieces_[i]);
  if (e instanceof ie)
    for (let i = e.pieceNum_; i < e.pieces_.length; i++)
      n.push(e.pieces_[i]);
  else {
    const i = e.split("/");
    for (let r = 0; r < i.length; r++)
      i[r].length > 0 && n.push(i[r]);
  }
  return new ie(n, 0);
}
function B(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Xe(t, e) {
  const n = H(t), i = H(e);
  if (n === null)
    return e;
  if (n === i)
    return Xe(ue(t), ue(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function gw(t, e) {
  const n = Hr(t, 0), i = Hr(e, 0);
  for (let r = 0; r < n.length && r < i.length; r++) {
    const s = hi(n[r], i[r]);
    if (s !== 0)
      return s;
  }
  return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
}
function Ll(t, e) {
  if (Nn(t) !== Nn(e))
    return !1;
  for (let n = t.pieceNum_, i = e.pieceNum_; n <= t.pieces_.length; n++, i++)
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
  return !0;
}
function gt(t, e) {
  let n = t.pieceNum_, i = e.pieceNum_;
  if (Nn(t) > Nn(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
    ++n, ++i;
  }
  return !0;
}
class vw {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = Hr(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let i = 0; i < this.parts_.length; i++)
      this.byteLength_ += Io(this.parts_[i]);
    gf(this);
  }
}
function yw(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += Io(e), gf(t);
}
function bw(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= Io(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function gf(t) {
  if (t.byteLength_ > bu)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + bu + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > yu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + yu + ") or object contains a cycle " + qn(t));
}
function qn(t) {
  return t.parts_.length === 0 ? "" : "in property '" + t.parts_.join(".") + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol extends mf {
  static getInstance() {
    return new Ol();
  }
  constructor() {
    super(["visible"]);
    let e, n;
    typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (n = "visibilitychange", e = "hidden") : typeof document.mozHidden < "u" ? (n = "mozvisibilitychange", e = "mozHidden") : typeof document.msHidden < "u" ? (n = "msvisibilitychange", e = "msHidden") : typeof document.webkitHidden < "u" && (n = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, n && document.addEventListener(n, () => {
      const i = !document[e];
      i !== this.visible_ && (this.visible_ = i, this.trigger("visible", i));
    }, !1);
  }
  getInitialEvent(e) {
    return C(e === "visible", "Unknown event type: " + e), [this.visible_];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr = 1e3, ww = 300 * 1e3, wu = 30 * 1e3, Ew = 1.3, Iw = 3e4, Cw = "server_kill", Eu = 3;
class sn extends pf {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, i, r, s, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = i, this.onConnectStatus_ = r, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = sn.nextPersistentConnectionId_++, this.log_ = ds("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = cr, this.maxReconnectDelay_ = ww, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    Ol.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && Js.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, i) {
    const r = ++this.requestNumber_, s = { r, a: e, b: n };
    this.log_(Ne(s)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), i && (this.requestCBHash_[r] = i);
  }
  get(e) {
    this.initConnection_();
    const n = new rs(), r = {
      action: "g",
      request: {
        p: e._path.toString(),
        q: e._queryObject
      },
      onComplete: (o) => {
        const a = o.d;
        o.s === "ok" ? n.resolve(a) : n.reject(a);
      }
    };
    this.outstandingGets_.push(r), this.outstandingGetCount_++;
    const s = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(s), n.promise;
  }
  listen(e, n, i, r) {
    this.initConnection_();
    const s = e._queryIdentifier, o = e._path.toString();
    this.log_("Listen called for " + o + " " + s), this.listens.has(o) || this.listens.set(o, /* @__PURE__ */ new Map()), C(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), C(!this.listens.get(o).has(s), "listen() called twice for same path/queryId.");
    const a = {
      onComplete: r,
      hashFn: n,
      query: e,
      tag: i
    };
    this.listens.get(o).set(s, a), this.connected_ && this.sendListen_(a);
  }
  sendGet_(e) {
    const n = this.outstandingGets_[e];
    this.sendRequest("g", n.request, (i) => {
      delete this.outstandingGets_[e], this.outstandingGetCount_--, this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []), n.onComplete && n.onComplete(i);
    });
  }
  sendListen_(e) {
    const n = e.query, i = n._path.toString(), r = n._queryIdentifier;
    this.log_("Listen on " + i + " for " + r);
    const s = {
      /*path*/
      p: i
    }, o = "q";
    e.tag && (s.q = n._queryObject, s.t = e.tag), s.h = e.hashFn(), this.sendRequest(o, s, (a) => {
      const l = a.d, c = a.s;
      sn.warnOnListenWarnings_(l, n), (this.listens.get(i) && this.listens.get(i).get(r)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(i, r), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && zt(e, "w")) {
      const i = Mi(e, "w");
      if (Array.isArray(i) && ~i.indexOf("no_index")) {
        const r = '".indexOn": "' + n._queryParams.getIndex().toString() + '"', s = n._path.toString();
        Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(e) {
    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {
    }), this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    (e && e.length === 40 || x_(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = wu);
  }
  refreshAppCheckToken(e) {
    this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, () => {
    });
  }
  /**
   * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
   * a auth revoked (the connection is closed).
   */
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const e = this.authToken_, n = N_(e) ? "auth" : "gauth", i = { cred: e };
      this.authOverride_ === null ? i.noauth = !0 : typeof this.authOverride_ == "object" && (i.authvar = this.authOverride_), this.sendRequest(n, i, (r) => {
        const s = r.s, o = r.d || "error";
        this.authToken_ === e && (s === "ok" ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(s, o));
      });
    }
  }
  /**
   * Attempts to authenticate with the given token. If the authentication
   * attempt fails, it's triggered like the token was revoked (the connection is
   * closed).
   */
  tryAppCheck() {
    this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", { token: this.appCheckToken_ }, (e) => {
      const n = e.s, i = e.d || "error";
      n === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(n, i);
    });
  }
  /**
   * @inheritDoc
   */
  unlisten(e, n) {
    const i = e._path.toString(), r = e._queryIdentifier;
    this.log_("Unlisten called for " + i + " " + r), C(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(i, r) && this.connected_ && this.sendUnlisten_(i, r, e._queryObject, n);
  }
  sendUnlisten_(e, n, i, r) {
    this.log_("Unlisten on " + e + " for " + n);
    const s = {
      /*path*/
      p: e
    }, o = "n";
    r && (s.q = i, s.t = r), this.sendRequest(o, s);
  }
  onDisconnectPut(e, n, i) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, n, i) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "o",
      data: n,
      onComplete: i
    });
  }
  onDisconnectMerge(e, n, i) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, n, i) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "om",
      data: n,
      onComplete: i
    });
  }
  onDisconnectCancel(e, n) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, n) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "oc",
      data: null,
      onComplete: n
    });
  }
  sendOnDisconnect_(e, n, i, r) {
    const s = {
      /*path*/
      p: n,
      /*data*/
      d: i
    };
    this.log_("onDisconnect " + e, s), this.sendRequest(e, s, (o) => {
      r && setTimeout(() => {
        r(o.s, o.d);
      }, Math.floor(0));
    });
  }
  put(e, n, i, r) {
    this.putInternal("p", e, n, i, r);
  }
  merge(e, n, i, r) {
    this.putInternal("m", e, n, i, r);
  }
  putInternal(e, n, i, r, s) {
    this.initConnection_();
    const o = {
      /*path*/
      p: n,
      /*data*/
      d: i
    };
    s !== void 0 && (o.h = s), this.outstandingPuts_.push({
      action: e,
      request: o,
      onComplete: r
    }), this.outstandingPutCount_++;
    const a = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + n);
  }
  sendPut_(e) {
    const n = this.outstandingPuts_[e].action, i = this.outstandingPuts_[e].request, r = this.outstandingPuts_[e].onComplete;
    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, i, (s) => {
      this.log_(n + " response", s), delete this.outstandingPuts_[e], this.outstandingPutCount_--, this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []), r && r(s.s, s.d);
    });
  }
  reportStats(e) {
    if (this.connected_) {
      const n = {
        /*counters*/
        c: e
      };
      this.log_("reportStats", n), this.sendRequest(
        /*stats*/
        "s",
        n,
        (i) => {
          if (i.s !== "ok") {
            const s = i.d;
            this.log_("reportStats", "Error sending stats: " + s);
          }
        }
      );
    }
  }
  onDataMessage_(e) {
    if ("r" in e) {
      this.log_("from server: " + Ne(e));
      const n = e.r, i = this.requestCBHash_[n];
      i && (delete this.requestCBHash_[n], i(e.b));
    } else {
      if ("error" in e)
        throw "A server-side error has occurred: " + e.error;
      "a" in e && this.onDataPush_(e.a, e.b);
    }
  }
  onDataPush_(e, n) {
    this.log_("handleServerMessage", e, n), e === "d" ? this.onDataUpdate_(
      n.p,
      n.d,
      /*isMerge*/
      !1,
      n.t
    ) : e === "m" ? this.onDataUpdate_(
      n.p,
      n.d,
      /*isMerge=*/
      !0,
      n.t
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : xa("Unrecognized action received from server: " + Ne(e) + `
Are you using the latest client?`);
  }
  onReady_(e, n) {
    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (/* @__PURE__ */ new Date()).getTime(), this.handleTimestamp_(e), this.lastSessionId = n, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    C(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null, this.establishConnection_();
    }, Math.floor(e));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = cr, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = cr, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > Iw && (this.reconnectDelay_ = cr), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Ew);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), i = this.onRealtimeDisconnect_.bind(this), r = this.id + ":" + sn.nextConnectionId_++, s = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, i());
      }, c = function(h) {
        C(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(h);
      };
      this.realtime_ = {
        close: l,
        sendRequest: c
      };
      const d = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = !1;
      try {
        const [h, u] = await Promise.all([
          this.authTokenProvider_.getToken(d),
          this.appCheckTokenProvider_.getToken(d)
        ]);
        o ? He("getToken() completed but was canceled") : (He("getToken() completed. Creating connection."), this.authToken_ = h && h.accessToken, this.appCheckToken_ = u && u.token, a = new mw(
          r,
          this.repoInfo_,
          this.applicationId_,
          this.appCheckToken_,
          this.authToken_,
          e,
          n,
          i,
          /* onKill= */
          (f) => {
            Ze(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(Cw);
          },
          s
        ));
      } catch (h) {
        this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && Ze(h), l());
      }
    }
  }
  interrupt(e) {
    He("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    He("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Ia(this.interruptReasons_) && (this.reconnectDelay_ = cr, this.realtime_ || this.scheduleConnect_(0));
  }
  handleTimestamp_(e) {
    const n = e - (/* @__PURE__ */ new Date()).getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: n });
  }
  cancelSentTransactions_() {
    for (let e = 0; e < this.outstandingPuts_.length; e++) {
      const n = this.outstandingPuts_[e];
      n && /*hash*/
      "h" in n.request && n.queued && (n.onComplete && n.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--);
    }
    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []);
  }
  onListenRevoked_(e, n) {
    let i;
    n ? i = n.map((s) => Al(s)).join("$") : i = "default";
    const r = this.removeListen_(e, i);
    r && r.onComplete && r.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const i = new ie(e).toString();
    let r;
    if (this.listens.has(i)) {
      const s = this.listens.get(i);
      r = s.get(n), s.delete(n), s.size === 0 && this.listens.delete(i);
    } else
      r = void 0;
    return r;
  }
  onAuthRevoked_(e, n) {
    He("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= Eu && (this.reconnectDelay_ = wu, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    He("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= Eu && this.appCheckTokenProvider_.notifyForInvalidToken());
  }
  onSecurityDebugPacket_(e) {
    this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace(`
`, `
FIREBASE: `));
  }
  restoreState_() {
    this.tryAuth(), this.tryAppCheck();
    for (const e of this.listens.values())
      for (const n of e.values())
        this.sendListen_(n);
    for (let e = 0; e < this.outstandingPuts_.length; e++)
      this.outstandingPuts_[e] && this.sendPut_(e);
    for (; this.onDisconnectRequestQueue_.length; ) {
      const e = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete);
    }
    for (let e = 0; e < this.outstandingGets_.length; e++)
      this.outstandingGets_[e] && this.sendGet_(e);
  }
  /**
   * Sends client stats for first connection
   */
  sendConnectStats_() {
    const e = {};
    let n = "js";
    e["sdk." + n + "." + qh.replace(/\./g, "-")] = 1, pl() ? e["framework.cordova"] = 1 : th() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = Js.getInstance().currentlyOnline();
    return Ia(this.interruptReasons_) && e;
  }
}
sn.nextPersistentConnectionId_ = 0;
sn.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V {
  constructor(e, n) {
    this.name = e, this.node = n;
  }
  static Wrap(e, n) {
    return new V(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko {
  /**
   * @returns A standalone comparison function for
   * this index
   */
  getCompare() {
    return this.compare.bind(this);
  }
  /**
   * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
   * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
   *
   *
   * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
   */
  indexedValueChanged(e, n) {
    const i = new V(Ui, e), r = new V(Ui, n);
    return this.compare(i, r) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return V.MIN;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Cs;
class vf extends ko {
  static get __EMPTY_NODE() {
    return Cs;
  }
  static set __EMPTY_NODE(e) {
    Cs = e;
  }
  compare(e, n) {
    return hi(e.name, n.name);
  }
  isDefinedOn(e) {
    throw Ki("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return V.MIN;
  }
  maxPost() {
    return new V(si, Cs);
  }
  makePost(e, n) {
    return C(typeof e == "string", "KeyIndex indexValue must always be a string."), new V(e, Cs);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const Ni = new vf();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts {
  /**
   * @param node - Node to iterate.
   * @param isReverse_ - Whether or not to iterate in reverse
   */
  constructor(e, n, i, r, s = null) {
    this.isReverse_ = r, this.resultGenerator_ = s, this.nodeStack_ = [];
    let o = 1;
    for (; !e.isEmpty(); )
      if (e = e, o = n ? i(e.key, n) : 1, r && (o *= -1), o < 0)
        this.isReverse_ ? e = e.left : e = e.right;
      else if (o === 0) {
        this.nodeStack_.push(e);
        break;
      } else
        this.nodeStack_.push(e), this.isReverse_ ? e = e.right : e = e.left;
  }
  getNext() {
    if (this.nodeStack_.length === 0)
      return null;
    let e = this.nodeStack_.pop(), n;
    if (this.resultGenerator_ ? n = this.resultGenerator_(e.key, e.value) : n = { key: e.key, value: e.value }, this.isReverse_)
      for (e = e.left; !e.isEmpty(); )
        this.nodeStack_.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty(); )
        this.nodeStack_.push(e), e = e.left;
    return n;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0)
      return null;
    const e = this.nodeStack_[this.nodeStack_.length - 1];
    return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : { key: e.key, value: e.value };
  }
}
class Oe {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, i, r, s) {
    this.key = e, this.value = n, this.color = i ?? Oe.RED, this.left = r ?? rt.EMPTY_NODE, this.right = s ?? rt.EMPTY_NODE;
  }
  /**
   * Returns a copy of the current node, optionally replacing pieces of it.
   *
   * @param key - New key for the node, or null.
   * @param value - New value for the node, or null.
   * @param color - New color for the node, or null.
   * @param left - New left child for the node, or null.
   * @param right - New right child for the node, or null.
   * @returns The node copy.
   */
  copy(e, n, i, r, s) {
    return new Oe(e ?? this.key, n ?? this.value, i ?? this.color, r ?? this.left, s ?? this.right);
  }
  /**
   * @returns The total number of nodes in the tree.
   */
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  /**
   * @returns True if the tree is empty.
   */
  isEmpty() {
    return !1;
  }
  /**
   * Traverses the tree in key order and calls the specified action function
   * for each node.
   *
   * @param action - Callback function to be called for each
   *   node.  If it returns true, traversal is aborted.
   * @returns The first truthy value returned by action, or the last falsey
   *   value returned by action
   */
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  /**
   * Traverses the tree in reverse key order and calls the specified action function
   * for each node.
   *
   * @param action - Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @returns True if traversal was aborted.
   */
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  /**
   * @returns The minimum node in the tree.
   */
  min_() {
    return this.left.isEmpty() ? this : this.left.min_();
  }
  /**
   * @returns The maximum key in the tree.
   */
  minKey() {
    return this.min_().key;
  }
  /**
   * @returns The maximum key in the tree.
   */
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  /**
   * @param key - Key to insert.
   * @param value - Value to insert.
   * @param comparator - Comparator.
   * @returns New tree, with the key/value added.
   */
  insert(e, n, i) {
    let r = this;
    const s = i(e, r.key);
    return s < 0 ? r = r.copy(null, null, null, r.left.insert(e, n, i), null) : s === 0 ? r = r.copy(null, n, null, null, null) : r = r.copy(null, null, null, null, r.right.insert(e, n, i)), r.fixUp_();
  }
  /**
   * @returns New tree, with the minimum key removed.
   */
  removeMin_() {
    if (this.left.isEmpty())
      return rt.EMPTY_NODE;
    let e = this;
    return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_();
  }
  /**
   * @param key - The key of the item to remove.
   * @param comparator - Comparator.
   * @returns New tree, with the specified item removed.
   */
  remove(e, n) {
    let i, r;
    if (i = this, n(e, i.key) < 0)
      !i.left.isEmpty() && !i.left.isRed_() && !i.left.left.isRed_() && (i = i.moveRedLeft_()), i = i.copy(null, null, null, i.left.remove(e, n), null);
    else {
      if (i.left.isRed_() && (i = i.rotateRight_()), !i.right.isEmpty() && !i.right.isRed_() && !i.right.left.isRed_() && (i = i.moveRedRight_()), n(e, i.key) === 0) {
        if (i.right.isEmpty())
          return rt.EMPTY_NODE;
        r = i.right.min_(), i = i.copy(r.key, r.value, null, null, i.right.removeMin_());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp_();
  }
  /**
   * @returns Whether this is a RED node.
   */
  isRed_() {
    return this.color;
  }
  /**
   * @returns New tree after performing any needed rotations.
   */
  fixUp_() {
    let e = this;
    return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e;
  }
  /**
   * @returns New tree, after moveRedLeft.
   */
  moveRedLeft_() {
    let e = this.colorFlip_();
    return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e;
  }
  /**
   * @returns New tree, after moveRedRight.
   */
  moveRedRight_() {
    let e = this.colorFlip_();
    return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e;
  }
  /**
   * @returns New tree, after rotateLeft.
   */
  rotateLeft_() {
    const e = this.copy(null, null, Oe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, Oe.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  /**
   * @returns Newt ree, after colorFlip.
   */
  colorFlip_() {
    const e = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  /**
   * For testing.
   *
   * @returns True if all is well.
   */
  checkMaxDepth_() {
    const e = this.check_();
    return Math.pow(2, e) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_())
      throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
    if (this.right.isRed_())
      throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
    const e = this.left.check_();
    if (e !== this.right.check_())
      throw new Error("Black depths differ");
    return e + (this.isRed_() ? 0 : 1);
  }
}
Oe.RED = !0;
Oe.BLACK = !1;
class Tw {
  /**
   * Returns a copy of the current node.
   *
   * @returns The node copy.
   */
  copy(e, n, i, r, s) {
    return this;
  }
  /**
   * Returns a copy of the tree, with the specified key/value added.
   *
   * @param key - Key to be added.
   * @param value - Value to be added.
   * @param comparator - Comparator.
   * @returns New tree, with item added.
   */
  insert(e, n, i) {
    return new Oe(e, n, null);
  }
  /**
   * Returns a copy of the tree, with the specified key removed.
   *
   * @param key - The key to remove.
   * @param comparator - Comparator.
   * @returns New tree, with item removed.
   */
  remove(e, n) {
    return this;
  }
  /**
   * @returns The total number of nodes in the tree.
   */
  count() {
    return 0;
  }
  /**
   * @returns True if the tree is empty.
   */
  isEmpty() {
    return !0;
  }
  /**
   * Traverses the tree in key order and calls the specified action function
   * for each node.
   *
   * @param action - Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @returns True if traversal was aborted.
   */
  inorderTraversal(e) {
    return !1;
  }
  /**
   * Traverses the tree in reverse key order and calls the specified action function
   * for each node.
   *
   * @param action - Callback function to be called for each
   * node.  If it returns true, traversal is aborted.
   * @returns True if traversal was aborted.
   */
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  /**
   * @returns Whether this node is red.
   */
  isRed_() {
    return !1;
  }
}
class rt {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, n = rt.EMPTY_NODE) {
    this.comparator_ = e, this.root_ = n;
  }
  /**
   * Returns a copy of the map, with the specified key/value added or replaced.
   * (TODO: We should perhaps rename this method to 'put')
   *
   * @param key - Key to be added.
   * @param value - Value to be added.
   * @returns New map, with item added.
   */
  insert(e, n) {
    return new rt(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Oe.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new rt(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Oe.BLACK, null, null));
  }
  /**
   * Returns the value of the node with the given key, or null.
   *
   * @param key - The key to look up.
   * @returns The value of the node with the given key, or null if the
   * key doesn't exist.
   */
  get(e) {
    let n, i = this.root_;
    for (; !i.isEmpty(); ) {
      if (n = this.comparator_(e, i.key), n === 0)
        return i.value;
      n < 0 ? i = i.left : n > 0 && (i = i.right);
    }
    return null;
  }
  /**
   * Returns the key of the item *before* the specified key, or null if key is the first item.
   * @param key - The key to find the predecessor of
   * @returns The predecessor key.
   */
  getPredecessorKey(e) {
    let n, i = this.root_, r = null;
    for (; !i.isEmpty(); )
      if (n = this.comparator_(e, i.key), n === 0) {
        if (i.left.isEmpty())
          return r ? r.key : null;
        for (i = i.left; !i.right.isEmpty(); )
          i = i.right;
        return i.key;
      } else n < 0 ? i = i.left : n > 0 && (r = i, i = i.right);
    throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  /**
   * @returns True if the map is empty.
   */
  isEmpty() {
    return this.root_.isEmpty();
  }
  /**
   * @returns The total number of nodes in the map.
   */
  count() {
    return this.root_.count();
  }
  /**
   * @returns The minimum key in the map.
   */
  minKey() {
    return this.root_.minKey();
  }
  /**
   * @returns The maximum key in the map.
   */
  maxKey() {
    return this.root_.maxKey();
  }
  /**
   * Traverses the map in key order and calls the specified action function
   * for each key/value pair.
   *
   * @param action - Callback function to be called
   * for each key/value pair.  If action returns true, traversal is aborted.
   * @returns The first truthy value returned by action, or the last falsey
   *   value returned by action
   */
  inorderTraversal(e) {
    return this.root_.inorderTraversal(e);
  }
  /**
   * Traverses the map in reverse key order and calls the specified action function
   * for each key/value pair.
   *
   * @param action - Callback function to be called
   * for each key/value pair.  If action returns true, traversal is aborted.
   * @returns True if the traversal was aborted.
   */
  reverseTraversal(e) {
    return this.root_.reverseTraversal(e);
  }
  /**
   * Returns an iterator over the SortedMap.
   * @returns The iterator.
   */
  getIterator(e) {
    return new Ts(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new Ts(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new Ts(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new Ts(this.root_, null, this.comparator_, !0, e);
  }
}
rt.EMPTY_NODE = new Tw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sw(t, e) {
  return hi(t.name, e.name);
}
function Dl(t, e) {
  return hi(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Oa;
function kw(t) {
  Oa = t;
}
const yf = function(t) {
  return typeof t == "number" ? "number:" + Qh(t) : "string:" + t;
}, bf = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    C(typeof e == "string" || typeof e == "number" || typeof e == "object" && zt(e, ".sv"), "Priority must be a string or number.");
  } else
    C(t === Oa || t.isEmpty(), "priority of unexpected type.");
  C(t === Oa || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Iu;
class Le {
  static set __childrenNodeConstructor(e) {
    Iu = e;
  }
  static get __childrenNodeConstructor() {
    return Iu;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, n = Le.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, C(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), bf(this.priorityNode_);
  }
  /** @inheritDoc */
  isLeafNode() {
    return !0;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_;
  }
  /** @inheritDoc */
  updatePriority(e) {
    return new Le(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : Le.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return B(e) ? this : H(e) === ".priority" ? this.priorityNode_ : Le.__childrenNodeConstructor.EMPTY_NODE;
  }
  hasChild() {
    return !1;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n) {
    return null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, n) {
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = H(e);
    return i === null ? n : n.isEmpty() && i !== ".priority" ? this : (C(i !== ".priority" || Nn(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(i, Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e), n)));
  }
  /** @inheritDoc */
  isEmpty() {
    return !1;
  }
  /** @inheritDoc */
  numChildren() {
    return 0;
  }
  /** @inheritDoc */
  forEachChild(e, n) {
    return !1;
  }
  val(e) {
    return e && !this.getPriority().isEmpty() ? {
      ".value": this.getValue(),
      ".priority": this.getPriority().val()
    } : this.getValue();
  }
  /** @inheritDoc */
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.priorityNode_.isEmpty() || (e += "priority:" + yf(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Qh(this.value_) : e += this.value_, this.lazyHash_ = Kh(e);
    }
    return this.lazyHash_;
  }
  /**
   * Returns the value of the leaf node.
   * @returns The value of the node.
   */
  getValue() {
    return this.value_;
  }
  compareTo(e) {
    return e === Le.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof Le.__childrenNodeConstructor ? -1 : (C(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, i = typeof this.value_, r = Le.VALUE_TYPE_ORDER.indexOf(n), s = Le.VALUE_TYPE_ORDER.indexOf(i);
    return C(r >= 0, "Unknown leaf type: " + n), C(s >= 0, "Unknown leaf type: " + i), r === s ? i === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : s - r;
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return !0;
  }
  equals(e) {
    if (e === this)
      return !0;
    if (e.isLeafNode()) {
      const n = e;
      return this.value_ === n.value_ && this.priorityNode_.equals(n.priorityNode_);
    } else
      return !1;
  }
}
Le.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let wf, Ef;
function Aw(t) {
  wf = t;
}
function Rw(t) {
  Ef = t;
}
class Pw extends ko {
  compare(e, n) {
    const i = e.node.getPriority(), r = n.node.getPriority(), s = i.compareTo(r);
    return s === 0 ? hi(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return V.MIN;
  }
  maxPost() {
    return new V(si, new Le("[PRIORITY-POST]", Ef));
  }
  makePost(e, n) {
    const i = wf(e);
    return new V(n, new Le("[PRIORITY-POST]", i));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const we = new Pw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nw = Math.log(2);
class xw {
  constructor(e) {
    const n = (s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(s) / Nw, 10)
    ), i = (s) => parseInt(Array(s + 1).join("1"), 2);
    this.count = n(e + 1), this.current_ = this.count - 1;
    const r = i(this.count);
    this.bits_ = e + 1 & r;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & 1 << this.current_);
    return this.current_--, e;
  }
}
const Xs = function(t, e, n, i) {
  t.sort(e);
  const r = function(l, c) {
    const d = c - l;
    let h, u;
    if (d === 0)
      return null;
    if (d === 1)
      return h = t[l], u = n ? n(h) : h, new Oe(u, h.node, Oe.BLACK, null, null);
    {
      const f = parseInt(d / 2, 10) + l, p = r(l, f), g = r(f + 1, c);
      return h = t[f], u = n ? n(h) : h, new Oe(u, h.node, Oe.BLACK, p, g);
    }
  }, s = function(l) {
    let c = null, d = null, h = t.length;
    const u = function(p, g) {
      const E = h - p, S = h;
      h -= p;
      const T = r(E + 1, S), k = t[E], P = n ? n(k) : k;
      f(new Oe(P, k.node, g, null, T));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (d = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), E = Math.pow(2, l.count - (p + 1));
      g ? u(E, Oe.BLACK) : (u(E, Oe.BLACK), u(E, Oe.RED));
    }
    return d;
  }, o = new xw(t.length), a = s(o);
  return new rt(i || e, a);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let oa;
const yi = {};
class Zt {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return C(yi && we, "ChildrenNode.ts has not been loaded"), oa = oa || new Zt({ ".priority": yi }, { ".priority": we }), oa;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = Mi(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof rt ? n : null;
  }
  hasIndex(e) {
    return zt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    C(e !== Ni, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const i = [];
    let r = !1;
    const s = n.getIterator(V.Wrap);
    let o = s.getNext();
    for (; o; )
      r = r || e.isDefinedOn(o.node), i.push(o), o = s.getNext();
    let a;
    r ? a = Xs(i, e.getCompare()) : a = yi;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const d = { ...this.indexes_ };
    return d[l] = a, new Zt(d, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const i = Vs(this.indexes_, (r, s) => {
      const o = Mi(this.indexSet_, s);
      if (C(o, "Missing index implementation for " + s), r === yi)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(V.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), Xs(a, o.getCompare());
        } else
          return yi;
      else {
        const a = n.get(e.name);
        let l = r;
        return a && (l = l.remove(new V(e.name, a))), l.insert(e, e.node);
      }
    });
    return new Zt(i, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const i = Vs(this.indexes_, (r) => {
      if (r === yi)
        return r;
      {
        const s = n.get(e.name);
        return s ? r.remove(new V(e.name, s)) : r;
      }
    });
    return new Zt(i, this.indexSet_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ur;
class $ {
  static get EMPTY_NODE() {
    return ur || (ur = new $(new rt(Dl), null, Zt.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, i) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = i, this.lazyHash_ = null, this.priorityNode_ && bf(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || ur;
  }
  /** @inheritDoc */
  updatePriority(e) {
    return this.children_.isEmpty() ? this : new $(this.children_, e, this.indexMap_);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    if (e === ".priority")
      return this.getPriority();
    {
      const n = this.children_.get(e);
      return n === null ? ur : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = H(e);
    return n === null ? this : this.getImmediateChild(n).getChild(ue(e));
  }
  /** @inheritDoc */
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, n) {
    if (C(n, "We should always be passing snapshot nodes"), e === ".priority")
      return this.updatePriority(n);
    {
      const i = new V(e, n);
      let r, s;
      n.isEmpty() ? (r = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(i, this.children_)) : (r = this.children_.insert(e, n), s = this.indexMap_.addToIndexes(i, this.children_));
      const o = r.isEmpty() ? ur : this.priorityNode_;
      return new $(r, o, s);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = H(e);
    if (i === null)
      return n;
    {
      C(H(e) !== ".priority" || Nn(e) === 1, ".priority must be the last token in a path");
      const r = this.getImmediateChild(i).updateChild(ue(e), n);
      return this.updateImmediateChild(i, r);
    }
  }
  /** @inheritDoc */
  isEmpty() {
    return this.children_.isEmpty();
  }
  /** @inheritDoc */
  numChildren() {
    return this.children_.count();
  }
  /** @inheritDoc */
  val(e) {
    if (this.isEmpty())
      return null;
    const n = {};
    let i = 0, r = 0, s = !0;
    if (this.forEachChild(we, (o, a) => {
      n[o] = a.val(e), i++, s && $.INTEGER_REGEXP_.test(o) ? r = Math.max(r, Number(o)) : s = !1;
    }), !e && s && r < 2 * i) {
      const o = [];
      for (const a in n)
        o[a] = n[a];
      return o;
    } else
      return e && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n;
  }
  /** @inheritDoc */
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.getPriority().isEmpty() || (e += "priority:" + yf(this.getPriority().val()) + ":"), this.forEachChild(we, (n, i) => {
        const r = i.hash();
        r !== "" && (e += ":" + n + ":" + r);
      }), this.lazyHash_ = e === "" ? "" : Kh(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, i) {
    const r = this.resolveIndex_(i);
    if (r) {
      const s = r.getPredecessorKey(new V(e, n));
      return s ? s.name : null;
    } else
      return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const i = n.minKey();
      return i && i.name;
    } else
      return this.children_.minKey();
  }
  getFirstChild(e) {
    const n = this.getFirstChildName(e);
    return n ? new V(n, this.children_.get(n)) : null;
  }
  /**
   * Given an index, return the key name of the largest value we have, according to that index
   */
  getLastChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const i = n.maxKey();
      return i && i.name;
    } else
      return this.children_.maxKey();
  }
  getLastChild(e) {
    const n = this.getLastChildName(e);
    return n ? new V(n, this.children_.get(n)) : null;
  }
  forEachChild(e, n) {
    const i = this.resolveIndex_(e);
    return i ? i.inorderTraversal((r) => n(r.name, r.node)) : this.children_.inorderTraversal(n);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, n) {
    const i = this.resolveIndex_(n);
    if (i)
      return i.getIteratorFrom(e, (r) => r);
    {
      const r = this.children_.getIteratorFrom(e.name, V.Wrap);
      let s = r.peek();
      for (; s != null && n.compare(s, e) < 0; )
        r.getNext(), s = r.peek();
      return r;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, n) {
    const i = this.resolveIndex_(n);
    if (i)
      return i.getReverseIteratorFrom(e, (r) => r);
    {
      const r = this.children_.getReverseIteratorFrom(e.name, V.Wrap);
      let s = r.peek();
      for (; s != null && n.compare(s, e) > 0; )
        r.getNext(), s = r.peek();
      return r;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === hs ? -1 : 0;
  }
  withIndex(e) {
    if (e === Ni || this.indexMap_.hasIndex(e))
      return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new $(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === Ni || this.indexMap_.hasIndex(e);
  }
  equals(e) {
    if (e === this)
      return !0;
    if (e.isLeafNode())
      return !1;
    {
      const n = e;
      if (this.getPriority().equals(n.getPriority()))
        if (this.children_.count() === n.children_.count()) {
          const i = this.getIterator(we), r = n.getIterator(we);
          let s = i.getNext(), o = r.getNext();
          for (; s && o; ) {
            if (s.name !== o.name || !s.node.equals(o.node))
              return !1;
            s = i.getNext(), o = r.getNext();
          }
          return s === null && o === null;
        } else
          return !1;
      else return !1;
    }
  }
  /**
   * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
   * instead.
   *
   */
  resolveIndex_(e) {
    return e === Ni ? null : this.indexMap_.get(e.toString());
  }
}
$.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class Lw extends $ {
  constructor() {
    super(new rt(Dl), $.EMPTY_NODE, Zt.Default);
  }
  compareTo(e) {
    return e === this ? 0 : 1;
  }
  equals(e) {
    return e === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(e) {
    return $.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const hs = new Lw();
Object.defineProperties(V, {
  MIN: {
    value: new V(Ui, $.EMPTY_NODE)
  },
  MAX: {
    value: new V(si, hs)
  }
});
vf.__EMPTY_NODE = $.EMPTY_NODE;
Le.__childrenNodeConstructor = $;
kw(hs);
Rw(hs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ow = !0;
function Pe(t, e = null) {
  if (t === null)
    return $.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), C(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new Le(n, Pe(e));
  }
  if (!(t instanceof Array) && Ow) {
    const n = [];
    let i = !1;
    if (je(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = Pe(a);
        l.isEmpty() || (i = i || !l.getPriority().isEmpty(), n.push(new V(o, l)));
      }
    }), n.length === 0)
      return $.EMPTY_NODE;
    const s = Xs(n, Sw, (o) => o.name, Dl);
    if (i) {
      const o = Xs(n, we.getCompare());
      return new $(s, Pe(e), new Zt({ ".priority": o }, { ".priority": we }));
    } else
      return new $(s, Pe(e), Zt.Default);
  } else {
    let n = $.EMPTY_NODE;
    return je(t, (i, r) => {
      if (zt(t, i) && i.substring(0, 1) !== ".") {
        const s = Pe(r);
        (s.isLeafNode() || !s.isEmpty()) && (n = n.updateImmediateChild(i, s));
      }
    }), n.updatePriority(Pe(e));
  }
}
Aw(Pe);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dw extends ko {
  constructor(e) {
    super(), this.indexPath_ = e, C(!B(e) && H(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const i = this.extractChild(e.node), r = this.extractChild(n.node), s = i.compareTo(r);
    return s === 0 ? hi(e.name, n.name) : s;
  }
  makePost(e, n) {
    const i = Pe(e), r = $.EMPTY_NODE.updateChild(this.indexPath_, i);
    return new V(n, r);
  }
  maxPost() {
    const e = $.EMPTY_NODE.updateChild(this.indexPath_, hs);
    return new V(si, e);
  }
  toString() {
    return Hr(this.indexPath_, 0).join("/");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mw extends ko {
  compare(e, n) {
    const i = e.node.compareTo(n.node);
    return i === 0 ? hi(e.name, n.name) : i;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return V.MIN;
  }
  maxPost() {
    return V.MAX;
  }
  makePost(e, n) {
    const i = Pe(e);
    return new V(n, i);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const $w = new Mw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function If(t) {
  return { type: "value", snapshotNode: t };
}
function Wi(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function Vr(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function jr(t, e, n) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: t,
    oldSnap: n
  };
}
function Fw(t, e) {
  return { type: "child_moved", snapshotNode: e, childName: t };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, i, r, s, o) {
    C(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(r).equals(i.getChild(r)) && a.isEmpty() === i.isEmpty() || (o != null && (i.isEmpty() ? e.hasChild(n) ? o.trackChildChange(Vr(n, a)) : C(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Wi(n, i)) : o.trackChildChange(jr(n, i, a))), e.isLeafNode() && i.isEmpty()) ? e : e.updateImmediateChild(n, i).withIndex(this.index_);
  }
  updateFullNode(e, n, i) {
    return i != null && (e.isLeafNode() || e.forEachChild(we, (r, s) => {
      n.hasChild(r) || i.trackChildChange(Vr(r, s));
    }), n.isLeafNode() || n.forEachChild(we, (r, s) => {
      if (e.hasChild(r)) {
        const o = e.getImmediateChild(r);
        o.equals(s) || i.trackChildChange(jr(r, s, o));
      } else
        i.trackChildChange(Wi(r, s));
    })), n.withIndex(this.index_);
  }
  updatePriority(e, n) {
    return e.isEmpty() ? $.EMPTY_NODE : e.updatePriority(n);
  }
  filtersNodes() {
    return !1;
  }
  getIndexedFilter() {
    return this;
  }
  getIndex() {
    return this.index_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr {
  constructor(e) {
    this.indexedFilter_ = new Ml(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = zr.getStartPost_(e), this.endPost_ = zr.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const n = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0, i = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
    return n && i;
  }
  updateChild(e, n, i, r, s, o) {
    return this.matches(new V(n, i)) || (i = $.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, i, r, s, o);
  }
  updateFullNode(e, n, i) {
    n.isLeafNode() && (n = $.EMPTY_NODE);
    let r = n.withIndex(this.index_);
    r = r.updatePriority($.EMPTY_NODE);
    const s = this;
    return n.forEachChild(we, (o, a) => {
      s.matches(new V(o, a)) || (r = r.updateImmediateChild(o, $.EMPTY_NODE));
    }), this.indexedFilter_.updateFullNode(e, r, i);
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.indexedFilter_;
  }
  getIndex() {
    return this.index_;
  }
  static getStartPost_(e) {
    if (e.hasStart()) {
      const n = e.getIndexStartName();
      return e.getIndex().makePost(e.getIndexStartValue(), n);
    } else
      return e.getIndex().minPost();
  }
  static getEndPost_(e) {
    if (e.hasEnd()) {
      const n = e.getIndexEndName();
      return e.getIndex().makePost(e.getIndexEndValue(), n);
    } else
      return e.getIndex().maxPost();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uw {
  constructor(e) {
    this.withinDirectionalStart = (n) => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n), this.withinDirectionalEnd = (n) => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n), this.withinStartPost = (n) => {
      const i = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? i <= 0 : i < 0;
    }, this.withinEndPost = (n) => {
      const i = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? i <= 0 : i < 0;
    }, this.rangedFilter_ = new zr(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, i, r, s, o) {
    return this.rangedFilter_.matches(new V(n, i)) || (i = $.EMPTY_NODE), e.getImmediateChild(n).equals(i) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, i, r, s, o) : this.fullLimitUpdateChild_(e, n, i, s, o);
  }
  updateFullNode(e, n, i) {
    let r;
    if (n.isLeafNode() || n.isEmpty())
      r = $.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
      r = $.EMPTY_NODE.withIndex(this.index_);
      let s;
      this.reverse_ ? s = n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : s = n.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
      let o = 0;
      for (; s.hasNext() && o < this.limit_; ) {
        const a = s.getNext();
        if (this.withinDirectionalStart(a))
          if (this.withinDirectionalEnd(a))
            r = r.updateImmediateChild(a.name, a.node), o++;
          else
            break;
        else continue;
      }
    } else {
      r = n.withIndex(this.index_), r = r.updatePriority($.EMPTY_NODE);
      let s;
      this.reverse_ ? s = r.getReverseIterator(this.index_) : s = r.getIterator(this.index_);
      let o = 0;
      for (; s.hasNext(); ) {
        const a = s.getNext();
        o < this.limit_ && this.withinDirectionalStart(a) && this.withinDirectionalEnd(a) ? o++ : r = r.updateImmediateChild(a.name, $.EMPTY_NODE);
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, i);
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.rangedFilter_.getIndexedFilter();
  }
  getIndex() {
    return this.index_;
  }
  fullLimitUpdateChild_(e, n, i, r, s) {
    let o;
    if (this.reverse_) {
      const h = this.index_.getCompare();
      o = (u, f) => h(f, u);
    } else
      o = this.index_.getCompare();
    const a = e;
    C(a.numChildren() === this.limit_, "");
    const l = new V(n, i), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), d = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const h = a.getImmediateChild(n);
      let u = r.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = r.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (d && !i.isEmpty() && f >= 0)
        return s?.trackChildChange(jr(n, i, h)), a.updateImmediateChild(n, i);
      {
        s?.trackChildChange(Vr(n, h));
        const g = a.updateImmediateChild(n, $.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (s?.trackChildChange(Wi(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return i.isEmpty() ? e : d && o(c, l) >= 0 ? (s != null && (s.trackChildChange(Vr(c.name, c.node)), s.trackChildChange(Wi(n, i))), a.updateImmediateChild(n, i).updateImmediateChild(c.name, $.EMPTY_NODE)) : e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = we;
  }
  hasStart() {
    return this.startSet_;
  }
  /**
   * @returns True if it would return from left.
   */
  isViewFromLeft() {
    return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l";
  }
  /**
   * Only valid to call if hasStart() returns true
   */
  getIndexStartValue() {
    return C(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
  }
  /**
   * Only valid to call if hasStart() returns true.
   * Returns the starting key name for the range defined by these query parameters
   */
  getIndexStartName() {
    return C(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Ui;
  }
  hasEnd() {
    return this.endSet_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   */
  getIndexEndValue() {
    return C(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   * Returns the end key name for the range defined by these query parameters
   */
  getIndexEndName() {
    return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : si;
  }
  hasLimit() {
    return this.limitSet_;
  }
  /**
   * @returns True if a limit has been set and it has been explicitly anchored
   */
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== "";
  }
  /**
   * Only valid to call if hasLimit() returns true
   */
  getLimit() {
    return C(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === we;
  }
  copy() {
    const e = new $l();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function Ww(t) {
  return t.loadsAllData() ? new Ml(t.getIndex()) : t.hasLimit() ? new Uw(t) : new zr(t);
}
function Cu(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === we ? n = "$priority" : t.index_ === $w ? n = "$value" : t.index_ === Ni ? n = "$key" : (C(t.index_ instanceof Dw, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = Ne(n), t.startSet_) {
    const i = t.startAfterSet_ ? "startAfter" : "startAt";
    e[i] = Ne(t.indexStartValue_), t.startNameSet_ && (e[i] += "," + Ne(t.indexStartName_));
  }
  if (t.endSet_) {
    const i = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[i] = Ne(t.indexEndValue_), t.endNameSet_ && (e[i] += "," + Ne(t.indexEndName_));
  }
  return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_), e;
}
function Tu(t) {
  const e = {};
  if (t.startSet_ && (e.sp = t.indexStartValue_, t.startNameSet_ && (e.sn = t.indexStartName_), e.sin = !t.startAfterSet_), t.endSet_ && (e.ep = t.indexEndValue_, t.endNameSet_ && (e.en = t.indexEndName_), e.ein = !t.endBeforeSet_), t.limitSet_) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"), e.vf = n;
  }
  return t.index_ !== we && (e.i = t.index_.toString()), e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs extends pf {
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, n) {
    return n !== void 0 ? "tag$" + n : (C(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString());
  }
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, i, r) {
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = i, this.appCheckTokenProvider_ = r, this.log_ = ds("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, i, r) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = Zs.getListenId_(e, i), a = {};
    this.listens_[o] = a;
    const l = Cu(e._queryParams);
    this.restRequest_(s + ".json", l, (c, d) => {
      let h = d;
      if (c === 404 && (h = null, c = null), c === null && this.onDataUpdate_(
        s,
        h,
        /*isMerge=*/
        !1,
        i
      ), Mi(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", r(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const i = Zs.getListenId_(e, n);
    delete this.listens_[i];
  }
  get(e) {
    const n = Cu(e._queryParams), i = e._path.toString(), r = new rs();
    return this.restRequest_(i + ".json", n, (s, o) => {
      let a = o;
      s === 404 && (a = null, s = null), s === null ? (this.onDataUpdate_(
        i,
        a,
        /*isMerge=*/
        !1,
        /*tag=*/
        null
      ), r.resolve(a)) : r.reject(new Error(a));
    }), r.promise;
  }
  /** @inheritDoc */
  refreshAuthToken(e) {
  }
  /**
   * Performs a REST request to the given path, with the provided query string parameters,
   * and any auth credentials we have.
   */
  restRequest_(e, n = {}, i) {
    return n.format = "export", Promise.all([
      this.authTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      ),
      this.appCheckTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      )
    ]).then(([r, s]) => {
      r && r.accessToken && (n.auth = r.accessToken), s && s.token && (n.ac = s.token);
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + di(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (i && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = $r(a.responseText);
            } catch {
              Ze("Failed to parse JSON response for " + o + ": " + a.responseText);
            }
            i(null, l);
          } else
            a.status !== 401 && a.status !== 404 && Ze("Got unsuccessful REST response for " + o + " Status: " + a.status), i(a.status);
          i = null;
        }
      }, a.open(
        "GET",
        o,
        /*asynchronous=*/
        !0
      ), a.send();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hw {
  constructor() {
    this.rootNode_ = $.EMPTY_NODE;
  }
  getNode(e) {
    return this.rootNode_.getChild(e);
  }
  updateSnapshot(e, n) {
    this.rootNode_ = this.rootNode_.updateChild(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function Cf(t, e, n) {
  if (B(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const i = H(e);
    t.children.has(i) || t.children.set(i, eo());
    const r = t.children.get(i);
    e = ue(e), Cf(r, e, n);
  }
}
function Da(t, e, n) {
  t.value !== null ? n(e, t.value) : Vw(t, (i, r) => {
    const s = new ie(e.toString() + "/" + i);
    Da(r, s, n);
  });
}
function Vw(t, e) {
  t.children.forEach((n, i) => {
    e(i, n);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jw {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), n = { ...e };
    return this.last_ && je(this.last_, (i, r) => {
      n[i] = n[i] - r;
    }), this.last_ = e, n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Su = 10 * 1e3, zw = 30 * 1e3, Bw = 300 * 1e3;
class qw {
  constructor(e, n) {
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new jw(e);
    const i = Su + (zw - Su) * Math.random();
    Ar(this.reportStats_.bind(this), Math.floor(i));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let i = !1;
    je(e, (r, s) => {
      s > 0 && zt(this.statsToReport_, r) && (n[r] = s, i = !0);
    }), i && this.server_.reportStats(n), Ar(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * Bw));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt;
(function(t) {
  t[t.OVERWRITE = 0] = "OVERWRITE", t[t.MERGE = 1] = "MERGE", t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
})(Rt || (Rt = {}));
function Fl() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function Ul() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function Wl(t) {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: t,
    tagged: !0
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, i) {
    this.path = e, this.affectedTree = n, this.revert = i, this.type = Rt.ACK_USER_WRITE, this.source = Fl();
  }
  operationForChild(e) {
    if (B(this.path)) {
      if (this.affectedTree.value != null)
        return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new ie(e));
        return new to(J(), n, this.revert);
      }
    } else return C(H(this.path) === e, "operationForChild called for unrelated child."), new to(ue(this.path), this.affectedTree, this.revert);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br {
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Rt.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return B(this.path) ? new Br(this.source, J()) : new Br(this.source, ue(this.path));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi {
  constructor(e, n, i) {
    this.source = e, this.path = n, this.snap = i, this.type = Rt.OVERWRITE;
  }
  operationForChild(e) {
    return B(this.path) ? new oi(this.source, J(), this.snap.getImmediateChild(e)) : new oi(this.source, ue(this.path), this.snap);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi {
  constructor(e, n, i) {
    this.source = e, this.path = n, this.children = i, this.type = Rt.MERGE;
  }
  operationForChild(e) {
    if (B(this.path)) {
      const n = this.children.subtree(new ie(e));
      return n.isEmpty() ? null : n.value ? new oi(this.source, J(), n.value) : new Hi(this.source, J(), n);
    } else
      return C(H(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Hi(this.source, ue(this.path), this.children);
  }
  toString() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn {
  constructor(e, n, i) {
    this.node_ = e, this.fullyInitialized_ = n, this.filtered_ = i;
  }
  /**
   * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
   */
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  /**
   * Returns whether this node is potentially missing children due to a filter applied to the node
   */
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(e) {
    if (B(e))
      return this.isFullyInitialized() && !this.filtered_;
    const n = H(e);
    return this.isCompleteForChild(n);
  }
  isCompleteForChild(e) {
    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e);
  }
  getNode() {
    return this.node_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gw {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function Kw(t, e, n, i) {
  const r = [], s = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && s.push(Fw(o.childName, o.snapshotNode));
  }), dr(t, r, "child_removed", e, i, n), dr(t, r, "child_added", e, i, n), dr(t, r, "child_moved", s, i, n), dr(t, r, "child_changed", e, i, n), dr(t, r, "value", e, i, n), r;
}
function dr(t, e, n, i, r, s) {
  const o = i.filter((a) => a.type === n);
  o.sort((a, l) => Qw(t, a, l)), o.forEach((a) => {
    const l = Yw(t, a, s);
    r.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function Yw(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function Qw(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw Ki("Should only compare child_ events.");
  const i = new V(e.childName, e.snapshotNode), r = new V(n.childName, n.snapshotNode);
  return t.index_.compare(i, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(t, e) {
  return { eventCache: t, serverCache: e };
}
function Rr(t, e, n, i) {
  return Ao(new xn(e, n, i), t.serverCache);
}
function Tf(t, e, n, i) {
  return Ao(t.eventCache, new xn(e, n, i));
}
function no(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function ai(t) {
  return t.serverCache.isFullyInitialized() ? t.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let aa;
const Jw = () => (aa || (aa = new rt(Db)), aa);
class le {
  static fromObject(e) {
    let n = new le(null);
    return je(e, (i, r) => {
      n = n.set(new ie(i), r);
    }), n;
  }
  constructor(e, n = Jw()) {
    this.value = e, this.children = n;
  }
  /**
   * True if the value is empty and there are no children
   */
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  /**
   * Given a path and predicate, return the first node and the path to that node
   * where the predicate returns true.
   *
   * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
   * objects on the way back out, it may be better to pass down a pathSoFar obj.
   *
   * @param relativePath - The remainder of the path
   * @param predicate - The predicate to satisfy to return a node
   */
  findRootMostMatchingPathAndValue(e, n) {
    if (this.value != null && n(this.value))
      return { path: J(), value: this.value };
    if (B(e))
      return null;
    {
      const i = H(e), r = this.children.get(i);
      if (r !== null) {
        const s = r.findRootMostMatchingPathAndValue(ue(e), n);
        return s != null ? { path: be(new ie(i), s.path), value: s.value } : null;
      } else
        return null;
    }
  }
  /**
   * Find, if it exists, the shortest subpath of the given path that points a defined
   * value in the tree
   */
  findRootMostValueAndPath(e) {
    return this.findRootMostMatchingPathAndValue(e, () => !0);
  }
  /**
   * @returns The subtree at the given path
   */
  subtree(e) {
    if (B(e))
      return this;
    {
      const n = H(e), i = this.children.get(n);
      return i !== null ? i.subtree(ue(e)) : new le(null);
    }
  }
  /**
   * Sets a value at the specified path.
   *
   * @param relativePath - Path to set value at.
   * @param toSet - Value to set.
   * @returns Resulting tree.
   */
  set(e, n) {
    if (B(e))
      return new le(n, this.children);
    {
      const i = H(e), s = (this.children.get(i) || new le(null)).set(ue(e), n), o = this.children.insert(i, s);
      return new le(this.value, o);
    }
  }
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath - Path to value to remove.
   * @returns Resulting tree.
   */
  remove(e) {
    if (B(e))
      return this.children.isEmpty() ? new le(null) : new le(null, this.children);
    {
      const n = H(e), i = this.children.get(n);
      if (i) {
        const r = i.remove(ue(e));
        let s;
        return r.isEmpty() ? s = this.children.remove(n) : s = this.children.insert(n, r), this.value === null && s.isEmpty() ? new le(null) : new le(this.value, s);
      } else
        return this;
    }
  }
  /**
   * Gets a value from the tree.
   *
   * @param relativePath - Path to get value for.
   * @returns Value at path, or null.
   */
  get(e) {
    if (B(e))
      return this.value;
    {
      const n = H(e), i = this.children.get(n);
      return i ? i.get(ue(e)) : null;
    }
  }
  /**
   * Replace the subtree at the specified path with the given new tree.
   *
   * @param relativePath - Path to replace subtree for.
   * @param newTree - New tree.
   * @returns Resulting tree.
   */
  setTree(e, n) {
    if (B(e))
      return n;
    {
      const i = H(e), s = (this.children.get(i) || new le(null)).setTree(ue(e), n);
      let o;
      return s.isEmpty() ? o = this.children.remove(i) : o = this.children.insert(i, s), new le(this.value, o);
    }
  }
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */
  fold(e) {
    return this.fold_(J(), e);
  }
  /**
   * Recursive helper for public-facing fold() method
   */
  fold_(e, n) {
    const i = {};
    return this.children.inorderTraversal((r, s) => {
      i[r] = s.fold_(be(e, r), n);
    }), n(e, this.value, i);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, J(), n);
  }
  findOnPath_(e, n, i) {
    const r = this.value ? i(n, this.value) : !1;
    if (r)
      return r;
    if (B(e))
      return null;
    {
      const s = H(e), o = this.children.get(s);
      return o ? o.findOnPath_(ue(e), be(n, s), i) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, J(), n);
  }
  foreachOnPath_(e, n, i) {
    if (B(e))
      return this;
    {
      this.value && i(n, this.value);
      const r = H(e), s = this.children.get(r);
      return s ? s.foreachOnPath_(ue(e), be(n, r), i) : new le(null);
    }
  }
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f - A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */
  foreach(e) {
    this.foreach_(J(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((i, r) => {
      r.foreach_(be(e, i), n);
    }), this.value && n(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((n, i) => {
      i.value && e(n, i.value);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new Pt(new le(null));
  }
}
function Pr(t, e, n) {
  if (B(e))
    return new Pt(new le(n));
  {
    const i = t.writeTree_.findRootMostValueAndPath(e);
    if (i != null) {
      const r = i.path;
      let s = i.value;
      const o = Xe(r, e);
      return s = s.updateChild(o, n), new Pt(t.writeTree_.set(r, s));
    } else {
      const r = new le(n), s = t.writeTree_.setTree(e, r);
      return new Pt(s);
    }
  }
}
function Ma(t, e, n) {
  let i = t;
  return je(n, (r, s) => {
    i = Pr(i, be(e, r), s);
  }), i;
}
function ku(t, e) {
  if (B(e))
    return Pt.empty();
  {
    const n = t.writeTree_.setTree(e, new le(null));
    return new Pt(n);
  }
}
function $a(t, e) {
  return fi(t, e) != null;
}
function fi(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Xe(n.path, e)) : null;
}
function Au(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(we, (i, r) => {
    e.push(new V(i, r));
  }) : t.writeTree_.children.inorderTraversal((i, r) => {
    r.value != null && e.push(new V(i, r.value));
  }), e;
}
function An(t, e) {
  if (B(e))
    return t;
  {
    const n = fi(t, e);
    return n != null ? new Pt(new le(n)) : new Pt(t.writeTree_.subtree(e));
  }
}
function Fa(t) {
  return t.writeTree_.isEmpty();
}
function Vi(t, e) {
  return Sf(J(), t.writeTree_, e);
}
function Sf(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let i = null;
    return e.children.inorderTraversal((r, s) => {
      r === ".priority" ? (C(s.value !== null, "Priority writes must always be leaf nodes"), i = s.value) : n = Sf(be(t, r), s, n);
    }), !n.getChild(t).isEmpty() && i !== null && (n = n.updateChild(be(t, ".priority"), i)), n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(t, e) {
  return Pf(e, t);
}
function Xw(t, e, n, i, r) {
  C(i > t.lastWriteId, "Stacking an older write on top of newer ones"), r === void 0 && (r = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: i,
    visible: r
  }), r && (t.visibleWrites = Pr(t.visibleWrites, e, n)), t.lastWriteId = i;
}
function Zw(t, e, n, i) {
  C(i > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: i,
    visible: !0
  }), t.visibleWrites = Ma(t.visibleWrites, e, n), t.lastWriteId = i;
}
function e0(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const i = t.allWrites[n];
    if (i.writeId === e)
      return i;
  }
  return null;
}
function t0(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  C(n >= 0, "removeWrite called with nonexistent writeId.");
  const i = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let r = i.visible, s = !1, o = t.allWrites.length - 1;
  for (; r && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && n0(a, i.path) ? r = !1 : gt(i.path, a.path) && (s = !0)), o--;
  }
  if (r) {
    if (s)
      return i0(t), !0;
    if (i.snap)
      t.visibleWrites = ku(t.visibleWrites, i.path);
    else {
      const a = i.children;
      je(a, (l) => {
        t.visibleWrites = ku(t.visibleWrites, be(i.path, l));
      });
    }
    return !0;
  } else return !1;
}
function n0(t, e) {
  if (t.snap)
    return gt(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && gt(be(t.path, n), e))
      return !0;
  return !1;
}
function i0(t) {
  t.visibleWrites = kf(t.allWrites, r0, J()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function r0(t) {
  return t.visible;
}
function kf(t, e, n) {
  let i = Pt.empty();
  for (let r = 0; r < t.length; ++r) {
    const s = t[r];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        gt(n, o) ? (a = Xe(n, o), i = Pr(i, a, s.snap)) : gt(o, n) && (a = Xe(o, n), i = Pr(i, J(), s.snap.getChild(a)));
      else if (s.children) {
        if (gt(n, o))
          a = Xe(n, o), i = Ma(i, a, s.children);
        else if (gt(o, n))
          if (a = Xe(o, n), B(a))
            i = Ma(i, J(), s.children);
          else {
            const l = Mi(s.children, H(a));
            if (l) {
              const c = l.getChild(ue(a));
              i = Pr(i, J(), c);
            }
          }
      } else
        throw Ki("WriteRecord should have .snap or .children");
    }
  }
  return i;
}
function Af(t, e, n, i, r) {
  if (!i && !r) {
    const s = fi(t.visibleWrites, e);
    if (s != null)
      return s;
    {
      const o = An(t.visibleWrites, e);
      if (Fa(o))
        return n;
      if (n == null && !$a(o, J()))
        return null;
      {
        const a = n || $.EMPTY_NODE;
        return Vi(o, a);
      }
    }
  } else {
    const s = An(t.visibleWrites, e);
    if (!r && Fa(s))
      return n;
    if (!r && n == null && !$a(s, J()))
      return null;
    {
      const o = function(c) {
        return (c.visible || r) && (!i || !~i.indexOf(c.writeId)) && (gt(c.path, e) || gt(e, c.path));
      }, a = kf(t.allWrites, o, e), l = n || $.EMPTY_NODE;
      return Vi(a, l);
    }
  }
}
function s0(t, e, n) {
  let i = $.EMPTY_NODE;
  const r = fi(t.visibleWrites, e);
  if (r)
    return r.isLeafNode() || r.forEachChild(we, (s, o) => {
      i = i.updateImmediateChild(s, o);
    }), i;
  if (n) {
    const s = An(t.visibleWrites, e);
    return n.forEachChild(we, (o, a) => {
      const l = Vi(An(s, new ie(o)), a);
      i = i.updateImmediateChild(o, l);
    }), Au(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  } else {
    const s = An(t.visibleWrites, e);
    return Au(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  }
}
function o0(t, e, n, i, r) {
  C(i || r, "Either existingEventSnap or existingServerSnap must exist");
  const s = be(e, n);
  if ($a(t.visibleWrites, s))
    return null;
  {
    const o = An(t.visibleWrites, s);
    return Fa(o) ? r.getChild(n) : Vi(o, r.getChild(n));
  }
}
function a0(t, e, n, i) {
  const r = be(e, n), s = fi(t.visibleWrites, r);
  if (s != null)
    return s;
  if (i.isCompleteForChild(n)) {
    const o = An(t.visibleWrites, r);
    return Vi(o, i.getNode().getImmediateChild(n));
  } else
    return null;
}
function l0(t, e) {
  return fi(t.visibleWrites, e);
}
function c0(t, e, n, i, r, s, o) {
  let a;
  const l = An(t.visibleWrites, e), c = fi(l, J());
  if (c != null)
    a = c;
  else if (n != null)
    a = Vi(l, n);
  else
    return [];
  if (a = a.withIndex(o), !a.isEmpty() && !a.isLeafNode()) {
    const d = [], h = o.getCompare(), u = s ? a.getReverseIteratorFrom(i, o) : a.getIteratorFrom(i, o);
    let f = u.getNext();
    for (; f && d.length < r; )
      h(f, i) !== 0 && d.push(f), f = u.getNext();
    return d;
  } else
    return [];
}
function u0() {
  return {
    visibleWrites: Pt.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function io(t, e, n, i) {
  return Af(t.writeTree, t.treePath, e, n, i);
}
function Hl(t, e) {
  return s0(t.writeTree, t.treePath, e);
}
function Ru(t, e, n, i) {
  return o0(t.writeTree, t.treePath, e, n, i);
}
function ro(t, e) {
  return l0(t.writeTree, be(t.treePath, e));
}
function d0(t, e, n, i, r, s) {
  return c0(t.writeTree, t.treePath, e, n, i, r, s);
}
function Vl(t, e, n) {
  return a0(t.writeTree, t.treePath, e, n);
}
function Rf(t, e) {
  return Pf(be(t.treePath, e), t.writeTree);
}
function Pf(t, e) {
  return {
    treePath: t,
    writeTree: e
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h0 {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(e) {
    const n = e.type, i = e.childName;
    C(n === "child_added" || n === "child_changed" || n === "child_removed", "Only child changes supported for tracking"), C(i !== ".priority", "Only non-priority child changes can be tracked.");
    const r = this.changeMap.get(i);
    if (r) {
      const s = r.type;
      if (n === "child_added" && s === "child_removed")
        this.changeMap.set(i, jr(i, e.snapshotNode, r.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(i);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(i, Vr(i, r.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(i, Wi(i, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(i, jr(i, e.snapshotNode, r.oldSnap));
      else
        throw Ki("Illegal combination of changes: " + e + " occurred after " + r);
    } else
      this.changeMap.set(i, e);
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f0 {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, i) {
    return null;
  }
}
const Nf = new f0();
class jl {
  constructor(e, n, i = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = i;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const i = this.optCompleteServerCache_ != null ? new xn(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return Vl(this.writes_, e, i);
    }
  }
  getChildAfterChild(e, n, i) {
    const r = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : ai(this.viewCache_), s = d0(this.writes_, r, n, 1, i, e);
    return s.length === 0 ? null : s[0];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p0(t) {
  return { filter: t };
}
function m0(t, e) {
  C(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), C(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function _0(t, e, n, i, r) {
  const s = new h0();
  let o, a;
  if (n.type === Rt.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = Ua(t, e, c.path, c.snap, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !B(c.path), o = so(t, e, c.path, c.snap, i, r, a, s));
  } else if (n.type === Rt.MERGE) {
    const c = n;
    c.source.fromUser ? o = v0(t, e, c.path, c.children, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = Wa(t, e, c.path, c.children, i, r, a, s));
  } else if (n.type === Rt.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = w0(t, e, c.path, i, r, s) : o = y0(t, e, c.path, c.affectedTree, i, r, s);
  } else if (n.type === Rt.LISTEN_COMPLETE)
    o = b0(t, e, n.path, i, s);
  else
    throw Ki("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return g0(e, o, l), { viewCache: o, changes: l };
}
function g0(t, e, n) {
  const i = e.eventCache;
  if (i.isFullyInitialized()) {
    const r = i.getNode().isLeafNode() || i.getNode().isEmpty(), s = no(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || r && !i.getNode().equals(s) || !i.getNode().getPriority().equals(s.getPriority())) && n.push(If(no(e)));
  }
}
function xf(t, e, n, i, r, s) {
  const o = e.eventCache;
  if (ro(i, n) != null)
    return e;
  {
    let a, l;
    if (B(n))
      if (C(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = ai(e), d = c instanceof $ ? c : $.EMPTY_NODE, h = Hl(i, d);
        a = t.filter.updateFullNode(e.eventCache.getNode(), h, s);
      } else {
        const c = io(i, ai(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      }
    else {
      const c = H(n);
      if (c === ".priority") {
        C(Nn(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        l = e.serverCache.getNode();
        const h = Ru(i, n, d, l);
        h != null ? a = t.filter.updatePriority(d, h) : a = o.getNode();
      } else {
        const d = ue(n);
        let h;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = Ru(i, n, o.getNode(), l);
          u != null ? h = o.getNode().getImmediateChild(c).updateChild(d, u) : h = o.getNode().getImmediateChild(c);
        } else
          h = Vl(i, c, e.serverCache);
        h != null ? a = t.filter.updateChild(o.getNode(), c, h, d, r, s) : a = o.getNode();
      }
    }
    return Rr(e, a, o.isFullyInitialized() || B(n), t.filter.filtersNodes());
  }
}
function so(t, e, n, i, r, s, o, a) {
  const l = e.serverCache;
  let c;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (B(n))
    c = d.updateFullNode(l.getNode(), i, null);
  else if (d.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, i);
    c = d.updateFullNode(l.getNode(), f, null);
  } else {
    const f = H(n);
    if (!l.isCompleteForPath(n) && Nn(n) > 1)
      return e;
    const p = ue(n), E = l.getNode().getImmediateChild(f).updateChild(p, i);
    f === ".priority" ? c = d.updatePriority(l.getNode(), E) : c = d.updateChild(l.getNode(), f, E, p, Nf, null);
  }
  const h = Tf(e, c, l.isFullyInitialized() || B(n), d.filtersNodes()), u = new jl(r, h, s);
  return xf(t, h, n, r, u, a);
}
function Ua(t, e, n, i, r, s, o) {
  const a = e.eventCache;
  let l, c;
  const d = new jl(r, e, s);
  if (B(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), i, o), l = Rr(e, c, !0, t.filter.filtersNodes());
  else {
    const h = H(n);
    if (h === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), i), l = Rr(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = ue(n), f = a.getNode().getImmediateChild(h);
      let p;
      if (B(u))
        p = i;
      else {
        const g = d.getCompleteChild(h);
        g != null ? xl(u) === ".priority" && g.getChild(_f(u)).isEmpty() ? p = g : p = g.updateChild(u, i) : p = $.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), h, p, u, d, o);
        l = Rr(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function Pu(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function v0(t, e, n, i, r, s, o) {
  let a = e;
  return i.foreach((l, c) => {
    const d = be(n, l);
    Pu(e, H(d)) && (a = Ua(t, a, d, c, r, s, o));
  }), i.foreach((l, c) => {
    const d = be(n, l);
    Pu(e, H(d)) || (a = Ua(t, a, d, c, r, s, o));
  }), a;
}
function Nu(t, e, n) {
  return n.foreach((i, r) => {
    e = e.updateChild(i, r);
  }), e;
}
function Wa(t, e, n, i, r, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  B(n) ? c = i : c = new le(null).setTree(n, i);
  const d = e.serverCache.getNode();
  return c.children.inorderTraversal((h, u) => {
    if (d.hasChild(h)) {
      const f = e.serverCache.getNode().getImmediateChild(h), p = Nu(t, f, u);
      l = so(t, l, new ie(h), p, r, s, o, a);
    }
  }), c.children.inorderTraversal((h, u) => {
    const f = !e.serverCache.isCompleteForChild(h) && u.value === null;
    if (!d.hasChild(h) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(h), g = Nu(t, p, u);
      l = so(t, l, new ie(h), g, r, s, o, a);
    }
  }), l;
}
function y0(t, e, n, i, r, s, o) {
  if (ro(r, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (i.value != null) {
    if (B(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return so(t, e, n, l.getNode().getChild(n), r, s, a, o);
    if (B(n)) {
      let c = new le(null);
      return l.getNode().forEachChild(Ni, (d, h) => {
        c = c.set(new ie(d), h);
      }), Wa(t, e, n, c, r, s, a, o);
    } else
      return e;
  } else {
    let c = new le(null);
    return i.foreach((d, h) => {
      const u = be(n, d);
      l.isCompleteForPath(u) && (c = c.set(d, l.getNode().getChild(u)));
    }), Wa(t, e, n, c, r, s, a, o);
  }
}
function b0(t, e, n, i, r) {
  const s = e.serverCache, o = Tf(e, s.getNode(), s.isFullyInitialized() || B(n), s.isFiltered());
  return xf(t, o, n, i, Nf, r);
}
function w0(t, e, n, i, r, s) {
  let o;
  if (ro(i, n) != null)
    return e;
  {
    const a = new jl(i, e, r), l = e.eventCache.getNode();
    let c;
    if (B(n) || H(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized())
        d = io(i, ai(e));
      else {
        const h = e.serverCache.getNode();
        C(h instanceof $, "serverChildren would be complete if leaf node"), d = Hl(i, h);
      }
      d = d, c = t.filter.updateFullNode(l, d, s);
    } else {
      const d = H(n);
      let h = Vl(i, d, e.serverCache);
      h == null && e.serverCache.isCompleteForChild(d) && (h = l.getImmediateChild(d)), h != null ? c = t.filter.updateChild(l, d, h, ue(n), a, s) : e.eventCache.getNode().hasChild(d) ? c = t.filter.updateChild(l, d, $.EMPTY_NODE, ue(n), a, s) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = io(i, ai(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, s)));
    }
    return o = e.serverCache.isFullyInitialized() || ro(i, J()) != null, Rr(e, c, o, t.filter.filtersNodes());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E0 {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const i = this.query_._queryParams, r = new Ml(i.getIndex()), s = Ww(i);
    this.processor_ = p0(s);
    const o = n.serverCache, a = n.eventCache, l = r.updateFullNode($.EMPTY_NODE, o.getNode(), null), c = s.updateFullNode($.EMPTY_NODE, a.getNode(), null), d = new xn(l, o.isFullyInitialized(), r.filtersNodes()), h = new xn(c, a.isFullyInitialized(), s.filtersNodes());
    this.viewCache_ = Ao(h, d), this.eventGenerator_ = new Gw(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function I0(t) {
  return t.viewCache_.serverCache.getNode();
}
function C0(t) {
  return no(t.viewCache_);
}
function T0(t, e) {
  const n = ai(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !B(e) && !n.getImmediateChild(H(e)).isEmpty()) ? n.getChild(e) : null;
}
function xu(t) {
  return t.eventRegistrations_.length === 0;
}
function S0(t, e) {
  t.eventRegistrations_.push(e);
}
function Lu(t, e, n) {
  const i = [];
  if (n) {
    C(e == null, "A cancel should cancel all event registrations.");
    const r = t.query._path;
    t.eventRegistrations_.forEach((s) => {
      const o = s.createCancelEvent(n, r);
      o && i.push(o);
    });
  }
  if (e) {
    let r = [];
    for (let s = 0; s < t.eventRegistrations_.length; ++s) {
      const o = t.eventRegistrations_[s];
      if (!o.matches(e))
        r.push(o);
      else if (e.hasAnyCallback()) {
        r = r.concat(t.eventRegistrations_.slice(s + 1));
        break;
      }
    }
    t.eventRegistrations_ = r;
  } else
    t.eventRegistrations_ = [];
  return i;
}
function Ou(t, e, n, i) {
  e.type === Rt.MERGE && e.source.queryId !== null && (C(ai(t.viewCache_), "We should always have a full cache before handling merges"), C(no(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const r = t.viewCache_, s = _0(t.processor_, r, e, n, i);
  return m0(t.processor_, s.viewCache), C(s.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = s.viewCache, Lf(t, s.changes, s.viewCache.eventCache.getNode(), null);
}
function k0(t, e) {
  const n = t.viewCache_.eventCache, i = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(we, (s, o) => {
    i.push(Wi(s, o));
  }), n.isFullyInitialized() && i.push(If(n.getNode())), Lf(t, i, n.getNode(), e);
}
function Lf(t, e, n, i) {
  const r = i ? [i] : t.eventRegistrations_;
  return Kw(t.eventGenerator_, e, n, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let oo;
class Of {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function A0(t) {
  C(!oo, "__referenceConstructor has already been defined"), oo = t;
}
function R0() {
  return C(oo, "Reference.ts has not been loaded"), oo;
}
function P0(t) {
  return t.views.size === 0;
}
function zl(t, e, n, i) {
  const r = e.source.queryId;
  if (r !== null) {
    const s = t.views.get(r);
    return C(s != null, "SyncTree gave us an op for an invalid query."), Ou(s, e, n, i);
  } else {
    let s = [];
    for (const o of t.views.values())
      s = s.concat(Ou(o, e, n, i));
    return s;
  }
}
function Df(t, e, n, i, r) {
  const s = e._queryIdentifier, o = t.views.get(s);
  if (!o) {
    let a = io(n, r ? i : null), l = !1;
    a ? l = !0 : i instanceof $ ? (a = Hl(n, i), l = !1) : (a = $.EMPTY_NODE, l = !1);
    const c = Ao(new xn(a, l, !1), new xn(i, r, !1));
    return new E0(e, c);
  }
  return o;
}
function N0(t, e, n, i, r, s) {
  const o = Df(t, e, i, r, s);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), S0(o, n), k0(o, n);
}
function x0(t, e, n, i) {
  const r = e._queryIdentifier, s = [];
  let o = [];
  const a = Ln(t);
  if (r === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(Lu(c, n, i)), xu(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || s.push(c.query));
  else {
    const l = t.views.get(r);
    l && (o = o.concat(Lu(l, n, i)), xu(l) && (t.views.delete(r), l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return a && !Ln(t) && s.push(new (R0())(e._repo, e._path)), { removed: s, events: o };
}
function Mf(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Rn(t, e) {
  let n = null;
  for (const i of t.views.values())
    n = n || T0(i, e);
  return n;
}
function $f(t, e) {
  if (e._queryParams.loadsAllData())
    return Po(t);
  {
    const i = e._queryIdentifier;
    return t.views.get(i);
  }
}
function Ff(t, e) {
  return $f(t, e) != null;
}
function Ln(t) {
  return Po(t) != null;
}
function Po(t) {
  for (const e of t.views.values())
    if (e.query._queryParams.loadsAllData())
      return e;
  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ao;
function L0(t) {
  C(!ao, "__referenceConstructor has already been defined"), ao = t;
}
function O0() {
  return C(ao, "Reference.ts has not been loaded"), ao;
}
let D0 = 1;
class Du {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new le(null), this.pendingWriteTree_ = u0(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function Uf(t, e, n, i, r) {
  return Xw(t.pendingWriteTree_, e, n, i, r), r ? Zi(t, new oi(Fl(), e, n)) : [];
}
function M0(t, e, n, i) {
  Zw(t.pendingWriteTree_, e, n, i);
  const r = le.fromObject(n);
  return Zi(t, new Hi(Fl(), e, r));
}
function wn(t, e, n = !1) {
  const i = e0(t.pendingWriteTree_, e);
  if (t0(t.pendingWriteTree_, e)) {
    let s = new le(null);
    return i.snap != null ? s = s.set(J(), !0) : je(i.children, (o) => {
      s = s.set(new ie(o), !0);
    }), Zi(t, new to(i.path, s, n));
  } else
    return [];
}
function fs(t, e, n) {
  return Zi(t, new oi(Ul(), e, n));
}
function $0(t, e, n) {
  const i = le.fromObject(n);
  return Zi(t, new Hi(Ul(), e, i));
}
function F0(t, e) {
  return Zi(t, new Br(Ul(), e));
}
function U0(t, e, n) {
  const i = ql(t, n);
  if (i) {
    const r = Gl(i), s = r.path, o = r.queryId, a = Xe(s, e), l = new Br(Wl(o), a);
    return Kl(t, s, l);
  } else
    return [];
}
function lo(t, e, n, i, r = !1) {
  const s = e._path, o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || Ff(o, e))) {
    const l = x0(o, e, n, i);
    P0(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const c = l.removed;
    if (a = l.events, !r) {
      const d = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, h = t.syncPointTree_.findOnPath(s, (u, f) => Ln(f));
      if (d && !h) {
        const u = t.syncPointTree_.subtree(s);
        if (!u.isEmpty()) {
          const f = V0(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], E = g.query, S = jf(t, g);
            t.listenProvider_.startListening(Nr(E), qr(t, E), S.hashFn, S.onComplete);
          }
        }
      }
      !h && c.length > 0 && !i && (d ? t.listenProvider_.stopListening(Nr(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(No(u));
        t.listenProvider_.stopListening(Nr(u), f);
      }));
    }
    j0(t, c);
  }
  return a;
}
function Wf(t, e, n, i) {
  const r = ql(t, i);
  if (r != null) {
    const s = Gl(r), o = s.path, a = s.queryId, l = Xe(o, e), c = new oi(Wl(a), l, n);
    return Kl(t, o, c);
  } else
    return [];
}
function W0(t, e, n, i) {
  const r = ql(t, i);
  if (r) {
    const s = Gl(r), o = s.path, a = s.queryId, l = Xe(o, e), c = le.fromObject(n), d = new Hi(Wl(a), l, c);
    return Kl(t, o, d);
  } else
    return [];
}
function Ha(t, e, n, i = !1) {
  const r = e._path;
  let s = null, o = !1;
  t.syncPointTree_.foreachOnPath(r, (u, f) => {
    const p = Xe(u, r);
    s = s || Rn(f, p), o = o || Ln(f);
  });
  let a = t.syncPointTree_.get(r);
  a ? (o = o || Ln(a), s = s || Rn(a, J())) : (a = new Of(), t.syncPointTree_ = t.syncPointTree_.set(r, a));
  let l;
  s != null ? l = !0 : (l = !1, s = $.EMPTY_NODE, t.syncPointTree_.subtree(r).foreachChild((f, p) => {
    const g = Rn(p, J());
    g && (s = s.updateImmediateChild(f, g));
  }));
  const c = Ff(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = No(e);
    C(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = z0();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const d = Ro(t.pendingWriteTree_, r);
  let h = N0(a, e, n, d, s, l);
  if (!c && !o && !i) {
    const u = $f(a, e);
    h = h.concat(B0(t, e, u));
  }
  return h;
}
function Bl(t, e, n) {
  const r = t.pendingWriteTree_, s = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = Xe(o, e), c = Rn(a, l);
    if (c)
      return c;
  });
  return Af(r, e, s, n, !0);
}
function H0(t, e) {
  const n = e._path;
  let i = null;
  t.syncPointTree_.foreachOnPath(n, (c, d) => {
    const h = Xe(c, n);
    i = i || Rn(d, h);
  });
  let r = t.syncPointTree_.get(n);
  r ? i = i || Rn(r, J()) : (r = new Of(), t.syncPointTree_ = t.syncPointTree_.set(n, r));
  const s = i != null, o = s ? new xn(i, !0, !1) : null, a = Ro(t.pendingWriteTree_, e._path), l = Df(r, e, a, s ? o.getNode() : $.EMPTY_NODE, s);
  return C0(l);
}
function Zi(t, e) {
  return Hf(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    Ro(t.pendingWriteTree_, J())
  );
}
function Hf(t, e, n, i) {
  if (B(t.path))
    return Vf(t, e, n, i);
  {
    const r = e.get(J());
    n == null && r != null && (n = Rn(r, J()));
    let s = [];
    const o = H(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, d = Rf(i, o);
      s = s.concat(Hf(a, l, c, d));
    }
    return r && (s = s.concat(zl(r, t, i, n))), s;
  }
}
function Vf(t, e, n, i) {
  const r = e.get(J());
  n == null && r != null && (n = Rn(r, J()));
  let s = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = Rf(i, o), d = t.operationForChild(o);
    d && (s = s.concat(Vf(d, a, l, c)));
  }), r && (s = s.concat(zl(r, t, i, n))), s;
}
function jf(t, e) {
  const n = e.query, i = qr(t, n);
  return {
    hashFn: () => (I0(e) || $.EMPTY_NODE).hash(),
    onComplete: (r) => {
      if (r === "ok")
        return i ? U0(t, n._path, i) : F0(t, n._path);
      {
        const s = Fb(r, n);
        return lo(
          t,
          n,
          /*eventRegistration*/
          null,
          s
        );
      }
    }
  };
}
function qr(t, e) {
  const n = No(e);
  return t.queryToTagMap.get(n);
}
function No(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function ql(t, e) {
  return t.tagToQueryMap.get(e);
}
function Gl(t) {
  const e = t.indexOf("$");
  return C(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new ie(t.substr(0, e))
  };
}
function Kl(t, e, n) {
  const i = t.syncPointTree_.get(e);
  C(i, "Missing sync point for query tag that we're tracking");
  const r = Ro(t.pendingWriteTree_, e);
  return zl(i, n, r, null);
}
function V0(t) {
  return t.fold((e, n, i) => {
    if (n && Ln(n))
      return [Po(n)];
    {
      let r = [];
      return n && (r = Mf(n)), je(i, (s, o) => {
        r = r.concat(o);
      }), r;
    }
  });
}
function Nr(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (O0())(t._repo, t._path) : t;
}
function j0(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const i = e[n];
    if (!i._queryParams.loadsAllData()) {
      const r = No(i), s = t.queryToTagMap.get(r);
      t.queryToTagMap.delete(r), t.tagToQueryMap.delete(s);
    }
  }
}
function z0() {
  return D0++;
}
function B0(t, e, n) {
  const i = e._path, r = qr(t, e), s = jf(t, n), o = t.listenProvider_.startListening(Nr(e), r, s.hashFn, s.onComplete), a = t.syncPointTree_.subtree(i);
  if (r)
    C(!Ln(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, d, h) => {
      if (!B(c) && d && Ln(d))
        return [Po(d).query];
      {
        let u = [];
        return d && (u = u.concat(Mf(d).map((f) => f.query))), je(h, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const d = l[c];
      t.listenProvider_.stopListening(Nr(d), qr(t, d));
    }
  }
  return o;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yl {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new Yl(n);
  }
  node() {
    return this.node_;
  }
}
class Ql {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = be(this.path_, e);
    return new Ql(this.syncTree_, n);
  }
  node() {
    return Bl(this.syncTree_, this.path_);
  }
}
const q0 = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, Mu = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (C(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return G0(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return K0(t[".sv"], e);
  C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, G0 = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      C(!1, "Unexpected server value: " + t);
  }
}, K0 = function(t, e, n) {
  t.hasOwnProperty("increment") || C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const i = t.increment;
  typeof i != "number" && C(!1, "Unexpected increment value: " + i);
  const r = e.node();
  if (C(r !== null && typeof r < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !r.isLeafNode())
    return i;
  const o = r.getValue();
  return typeof o != "number" ? i : o + i;
}, zf = function(t, e, n, i) {
  return Jl(e, new Ql(n, t), i);
}, Bf = function(t, e, n) {
  return Jl(t, new Yl(e), n);
};
function Jl(t, e, n) {
  const i = t.getPriority().val(), r = Mu(i, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t, a = Mu(o.getValue(), e, n);
    return a !== o.getValue() || r !== o.getPriority().val() ? new Le(a, Pe(r)) : t;
  } else {
    const o = t;
    return s = o, r !== o.getPriority().val() && (s = s.updatePriority(new Le(r))), o.forEachChild(we, (a, l) => {
      const c = Jl(l, e.getImmediateChild(a), n);
      c !== l && (s = s.updateImmediateChild(a, c));
    }), s;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xl {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, i = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = i;
  }
}
function Zl(t, e) {
  let n = e instanceof ie ? e : new ie(e), i = t, r = H(n);
  for (; r !== null; ) {
    const s = Mi(i.node.children, r) || {
      children: {},
      childCount: 0
    };
    i = new Xl(r, i, s), n = ue(n), r = H(n);
  }
  return i;
}
function er(t) {
  return t.node.value;
}
function qf(t, e) {
  t.node.value = e, Va(t);
}
function Gf(t) {
  return t.node.childCount > 0;
}
function Y0(t) {
  return er(t) === void 0 && !Gf(t);
}
function xo(t, e) {
  je(t.node.children, (n, i) => {
    e(new Xl(n, t, i));
  });
}
function Kf(t, e, n, i) {
  n && e(t), xo(t, (r) => {
    Kf(r, e, !0);
  });
}
function Q0(t, e, n) {
  let i = t.parent;
  for (; i !== null; ) {
    if (e(i))
      return !0;
    i = i.parent;
  }
  return !1;
}
function ps(t) {
  return new ie(t.parent === null ? t.name : ps(t.parent) + "/" + t.name);
}
function Va(t) {
  t.parent !== null && J0(t.parent, t.name, t);
}
function J0(t, e, n) {
  const i = Y0(n), r = zt(t.node.children, e);
  i && r ? (delete t.node.children[e], t.node.childCount--, Va(t)) : !i && !r && (t.node.children[e] = n.node, t.node.childCount++, Va(t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X0 = /[\[\].#$\/\u0000-\u001F\u007F]/, Z0 = /[\[\].#$\u0000-\u001F\u007F]/, la = 10 * 1024 * 1024, ec = function(t) {
  return typeof t == "string" && t.length !== 0 && !X0.test(t);
}, Yf = function(t) {
  return typeof t == "string" && t.length !== 0 && !Z0.test(t);
}, e1 = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Yf(t);
}, t1 = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !kl(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zt(t, ".sv");
}, Qf = function(t, e, n, i) {
  i && e === void 0 || Lo(Eo(t, "value"), e, n);
}, Lo = function(t, e, n) {
  const i = n instanceof ie ? new vw(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + qn(i));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + qn(i) + " with contents = " + e.toString());
  if (kl(e))
    throw new Error(t + "contains " + e.toString() + " " + qn(i));
  if (typeof e == "string" && e.length > la / 3 && Io(e) > la)
    throw new Error(t + "contains a string greater than " + la + " utf8 bytes " + qn(i) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let r = !1, s = !1;
    if (je(e, (o, a) => {
      if (o === ".value")
        r = !0;
      else if (o !== ".priority" && o !== ".sv" && (s = !0, !ec(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + qn(i) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      yw(i, o), Lo(t, a, i), bw(i);
    }), r && s)
      throw new Error(t + ' contains ".value" child ' + qn(i) + " in addition to actual children.");
  }
}, n1 = function(t, e) {
  let n, i;
  for (n = 0; n < e.length; n++) {
    i = e[n];
    const s = Hr(i);
    for (let o = 0; o < s.length; o++)
      if (!(s[o] === ".priority" && o === s.length - 1)) {
        if (!ec(s[o]))
          throw new Error(t + "contains an invalid key (" + s[o] + ") in path " + i.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(gw);
  let r = null;
  for (n = 0; n < e.length; n++) {
    if (i = e[n], r !== null && gt(r, i))
      throw new Error(t + "contains a path " + r.toString() + " that is ancestor of another path " + i.toString());
    r = i;
  }
}, i1 = function(t, e, n, i) {
  const r = Eo(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(r + " must be an object containing the children to replace.");
  const s = [];
  je(e, (o, a) => {
    const l = new ie(o);
    if (Lo(r, a, be(n, l)), xl(l) === ".priority" && !t1(a))
      throw new Error(r + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    s.push(l);
  }), n1(r, s);
}, Jf = function(t, e, n, i) {
  if (!Yf(n))
    throw new Error(Eo(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, r1 = function(t, e, n, i) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Jf(t, e, n);
}, tc = function(t, e) {
  if (H(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, s1 = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !ec(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !e1(n))
    throw new Error(Eo(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o1 {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function Oo(t, e) {
  let n = null;
  for (let i = 0; i < e.length; i++) {
    const r = e[i], s = r.getPath();
    n !== null && !Ll(s, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: s }), n.events.push(r);
  }
  n && t.eventLists_.push(n);
}
function Xf(t, e, n) {
  Oo(t, n), Zf(t, (i) => Ll(i, e));
}
function wt(t, e, n) {
  Oo(t, n), Zf(t, (i) => gt(i, e) || gt(e, i));
}
function Zf(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let i = 0; i < t.eventLists_.length; i++) {
    const r = t.eventLists_[i];
    if (r) {
      const s = r.path;
      e(s) ? (a1(t.eventLists_[i]), t.eventLists_[i] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function a1(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const i = n.getEventRunner();
      kr && He("event: " + n.toString()), Xi(i);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l1 = "repo_interrupt", c1 = 25;
class u1 {
  constructor(e, n, i, r) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = i, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new o1(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = eo(), this.transactionQueueTree_ = new Xl(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function d1(t, e, n) {
  if (t.stats_ = Pl(t.repoInfo_), t.forceRestClient_ || Vb())
    t.server_ = new Zs(t.repoInfo_, (i, r, s, o) => {
      $u(t, i, r, s, o);
    }, t.authTokenProvider_, t.appCheckProvider_), setTimeout(() => Fu(
      t,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        Ne(n);
      } catch (i) {
        throw new Error("Invalid authOverride provided: " + i);
      }
    }
    t.persistentConnection_ = new sn(t.repoInfo_, e, (i, r, s, o) => {
      $u(t, i, r, s, o);
    }, (i) => {
      Fu(t, i);
    }, (i) => {
      h1(t, i);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAuthToken(i);
  }), t.appCheckProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAppCheckToken(i.token);
  }), t.statsReporter_ = Gb(t.repoInfo_, () => new qw(t.stats_, t.server_)), t.infoData_ = new Hw(), t.infoSyncTree_ = new Du({
    startListening: (i, r, s, o) => {
      let a = [];
      const l = t.infoData_.getNode(i._path);
      return l.isEmpty() || (a = fs(t.infoSyncTree_, i._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), nc(t, "connected", !1), t.serverSyncTree_ = new Du({
    startListening: (i, r, s, o) => (t.server_.listen(i, s, r, (a, l) => {
      const c = o(a, l);
      wt(t.eventQueue_, i._path, c);
    }), []),
    stopListening: (i, r) => {
      t.server_.unlisten(i, r);
    }
  });
}
function ep(t) {
  const n = t.infoData_.getNode(new ie(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function Do(t) {
  return q0({
    timestamp: ep(t)
  });
}
function $u(t, e, n, i, r) {
  t.dataUpdateCount++;
  const s = new ie(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (r)
    if (i) {
      const l = Vs(n, (c) => Pe(c));
      o = W0(t.serverSyncTree_, s, l, r);
    } else {
      const l = Pe(n);
      o = Wf(t.serverSyncTree_, s, l, r);
    }
  else if (i) {
    const l = Vs(n, (c) => Pe(c));
    o = $0(t.serverSyncTree_, s, l);
  } else {
    const l = Pe(n);
    o = fs(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = ji(t, s)), wt(t.eventQueue_, a, o);
}
function Fu(t, e) {
  nc(t, "connected", e), e === !1 && _1(t);
}
function h1(t, e) {
  je(e, (n, i) => {
    nc(t, n, i);
  });
}
function nc(t, e, n) {
  const i = new ie("/.info/" + e), r = Pe(n);
  t.infoData_.updateSnapshot(i, r);
  const s = fs(t.infoSyncTree_, i, r);
  wt(t.eventQueue_, i, s);
}
function ic(t) {
  return t.nextWriteId_++;
}
function f1(t, e, n) {
  const i = H0(t.serverSyncTree_, e);
  return i != null ? Promise.resolve(i) : t.server_.get(e).then((r) => {
    const s = Pe(r).withIndex(e._queryParams.getIndex());
    Ha(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = fs(t.serverSyncTree_, e._path, s);
    else {
      const a = qr(t.serverSyncTree_, e);
      o = Wf(t.serverSyncTree_, e._path, s, a);
    }
    return wt(t.eventQueue_, e._path, o), lo(t.serverSyncTree_, e, n, null, !0), s;
  }, (r) => (ms(t, "get for query " + Ne(e) + " failed: " + r), Promise.reject(new Error(r))));
}
function p1(t, e, n, i, r) {
  ms(t, "set", {
    path: e.toString(),
    value: n,
    priority: i
  });
  const s = Do(t), o = Pe(n, i), a = Bl(t.serverSyncTree_, e), l = Bf(o, a, s), c = ic(t), d = Uf(t.serverSyncTree_, e, l, c, !0);
  Oo(t.eventQueue_, d), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || Ze("set at " + e + " failed: " + u);
    const g = wn(t.serverSyncTree_, c, !p);
    wt(t.eventQueue_, e, g), za(t, r, u, f);
  });
  const h = sc(t, e);
  ji(t, h), wt(t.eventQueue_, h, []);
}
function m1(t, e, n, i) {
  ms(t, "update", { path: e.toString(), value: n });
  let r = !0;
  const s = Do(t), o = {};
  if (je(n, (a, l) => {
    r = !1, o[a] = zf(be(e, a), Pe(l), t.serverSyncTree_, s);
  }), r)
    He("update() called with empty data.  Don't do anything."), za(t, i, "ok", void 0);
  else {
    const a = ic(t), l = M0(t.serverSyncTree_, e, o, a);
    Oo(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, d) => {
      const h = c === "ok";
      h || Ze("update at " + e + " failed: " + c);
      const u = wn(t.serverSyncTree_, a, !h), f = u.length > 0 ? ji(t, e) : e;
      wt(t.eventQueue_, f, u), za(t, i, c, d);
    }), je(n, (c) => {
      const d = sc(t, be(e, c));
      ji(t, d);
    }), wt(t.eventQueue_, e, []);
  }
}
function _1(t) {
  ms(t, "onDisconnectEvents");
  const e = Do(t), n = eo();
  Da(t.onDisconnect_, J(), (r, s) => {
    const o = zf(r, s, t.serverSyncTree_, e);
    Cf(n, r, o);
  });
  let i = [];
  Da(n, J(), (r, s) => {
    i = i.concat(fs(t.serverSyncTree_, r, s));
    const o = sc(t, r);
    ji(t, o);
  }), t.onDisconnect_ = eo(), wt(t.eventQueue_, J(), i);
}
function g1(t, e, n) {
  let i;
  H(e._path) === ".info" ? i = Ha(t.infoSyncTree_, e, n) : i = Ha(t.serverSyncTree_, e, n), Xf(t.eventQueue_, e._path, i);
}
function ja(t, e, n) {
  let i;
  H(e._path) === ".info" ? i = lo(t.infoSyncTree_, e, n) : i = lo(t.serverSyncTree_, e, n), Xf(t.eventQueue_, e._path, i);
}
function v1(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(l1);
}
function ms(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), He(n, ...e);
}
function za(t, e, n, i) {
  e && Xi(() => {
    if (n === "ok")
      e(null);
    else {
      const r = (n || "error").toUpperCase();
      let s = r;
      i && (s += ": " + i);
      const o = new Error(s);
      o.code = r, e(o);
    }
  });
}
function tp(t, e, n) {
  return Bl(t.serverSyncTree_, e, n) || $.EMPTY_NODE;
}
function rc(t, e = t.transactionQueueTree_) {
  if (e || Mo(t, e), er(e)) {
    const n = ip(t, e);
    C(n.length > 0, "Sending zero length transaction queue"), n.every(
      (r) => r.status === 0
      /* TransactionStatus.RUN */
    ) && y1(t, ps(e), n);
  } else Gf(e) && xo(e, (n) => {
    rc(t, n);
  });
}
function y1(t, e, n) {
  const i = n.map((c) => c.currentWriteId), r = tp(t, e, i);
  let s = r;
  const o = r.hash();
  for (let c = 0; c < n.length; c++) {
    const d = n[c];
    C(d.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), d.status = 1, d.retryCount++;
    const h = Xe(e, d.path);
    s = s.updateChild(h, d.currentOutputSnapshotRaw);
  }
  const a = s.val(!0), l = e;
  t.server_.put(l.toString(), a, (c) => {
    ms(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let d = [];
    if (c === "ok") {
      const h = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, d = d.concat(wn(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && h.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      Mo(t, Zl(t.transactionQueueTree_, e)), rc(t, t.transactionQueueTree_), wt(t.eventQueue_, e, d);
      for (let u = 0; u < h.length; u++)
        Xi(h[u]);
    } else {
      if (c === "datastale")
        for (let h = 0; h < n.length; h++)
          n[h].status === 3 ? n[h].status = 4 : n[h].status = 0;
      else {
        Ze("transaction at " + l.toString() + " failed: " + c);
        for (let h = 0; h < n.length; h++)
          n[h].status = 4, n[h].abortReason = c;
      }
      ji(t, e);
    }
  }, o);
}
function ji(t, e) {
  const n = np(t, e), i = ps(n), r = ip(t, n);
  return b1(t, r, i), i;
}
function b1(t, e, n) {
  if (e.length === 0)
    return;
  const i = [];
  let r = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = Xe(n, l.path);
    let d = !1, h;
    if (C(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      d = !0, h = l.abortReason, r = r.concat(wn(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= c1)
        d = !0, h = "maxretry", r = r.concat(wn(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = tp(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          Lo("transaction failed: Data returned ", f, l.path);
          let p = Pe(f);
          typeof f == "object" && f != null && zt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const E = l.currentWriteId, S = Do(t), T = Bf(p, u, S);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = T, l.currentWriteId = ic(t), o.splice(o.indexOf(E), 1), r = r.concat(Uf(t.serverSyncTree_, l.path, T, l.currentWriteId, l.applyLocally)), r = r.concat(wn(t.serverSyncTree_, E, !0));
        } else
          d = !0, h = "nodata", r = r.concat(wn(t.serverSyncTree_, l.currentWriteId, !0));
      }
    wt(t.eventQueue_, n, r), r = [], d && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (h === "nodata" ? i.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : i.push(() => e[a].onComplete(new Error(h), !1, null))));
  }
  Mo(t, t.transactionQueueTree_);
  for (let a = 0; a < i.length; a++)
    Xi(i[a]);
  rc(t, t.transactionQueueTree_);
}
function np(t, e) {
  let n, i = t.transactionQueueTree_;
  for (n = H(e); n !== null && er(i) === void 0; )
    i = Zl(i, n), e = ue(e), n = H(e);
  return i;
}
function ip(t, e) {
  const n = [];
  return rp(t, e, n), n.sort((i, r) => i.order - r.order), n;
}
function rp(t, e, n) {
  const i = er(e);
  if (i)
    for (let r = 0; r < i.length; r++)
      n.push(i[r]);
  xo(e, (r) => {
    rp(t, r, n);
  });
}
function Mo(t, e) {
  const n = er(e);
  if (n) {
    let i = 0;
    for (let r = 0; r < n.length; r++)
      n[r].status !== 2 && (n[i] = n[r], i++);
    n.length = i, qf(e, n.length > 0 ? n : void 0);
  }
  xo(e, (i) => {
    Mo(t, i);
  });
}
function sc(t, e) {
  const n = ps(np(t, e)), i = Zl(t.transactionQueueTree_, e);
  return Q0(i, (r) => {
    ca(t, r);
  }), ca(t, i), Kf(i, (r) => {
    ca(t, r);
  }), n;
}
function ca(t, e) {
  const n = er(e);
  if (n) {
    const i = [];
    let r = [], s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (C(s === o - 1, "All SENT items should be at beginning of queue."), s = o, n[o].status = 3, n[o].abortReason = "set") : (C(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), r = r.concat(wn(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && i.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? qf(e, void 0) : n.length = s + 1, wt(t.eventQueue_, ps(e), r);
    for (let o = 0; o < i.length; o++)
      Xi(i[o]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w1(t) {
  let e = "";
  const n = t.split("/");
  for (let i = 0; i < n.length; i++)
    if (n[i].length > 0) {
      let r = n[i];
      try {
        r = decodeURIComponent(r.replace(/\+/g, " "));
      } catch {
      }
      e += "/" + r;
    }
  return e;
}
function E1(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0)
      continue;
    const i = n.split("=");
    i.length === 2 ? e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]) : Ze(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const Uu = function(t, e) {
  const n = I1(t), i = n.namespace;
  n.domain === "firebase.com" && ln(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!i || i === "undefined") && n.domain !== "localhost" && ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || Lb();
  const r = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new af(
      n.host,
      n.secure,
      i,
      r,
      e,
      /*persistenceKey=*/
      "",
      /*includeNamespaceInQueryParams=*/
      i !== n.subdomain
    ),
    path: new ie(n.pathString)
  };
}, I1 = function(t) {
  let e = "", n = "", i = "", r = "", s = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let d = t.indexOf("/");
    d === -1 && (d = t.length);
    let h = t.indexOf("?");
    h === -1 && (h = t.length), e = t.substring(0, Math.min(d, h)), d < h && (r = w1(t.substring(d, h)));
    const u = E1(t.substring(Math.min(t.length, h)));
    c = e.indexOf(":"), c >= 0 ? (o = a === "https" || a === "wss", l = parseInt(e.substring(c + 1), 10)) : c = e.length;
    const f = e.slice(0, c);
    if (f.toLowerCase() === "localhost")
      n = "localhost";
    else if (f.split(".").length <= 2)
      n = f;
    else {
      const p = e.indexOf(".");
      i = e.substring(0, p).toLowerCase(), n = e.substring(p + 1), s = i;
    }
    "ns" in u && (s = u.ns);
  }
  return {
    host: e,
    port: l,
    domain: n,
    subdomain: i,
    secure: o,
    scheme: a,
    pathString: r,
    namespace: s
  };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wu = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", C1 = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const i = n === t;
    t = n;
    let r;
    const s = new Array(8);
    for (r = 7; r >= 0; r--)
      s[r] = Wu.charAt(n % 64), n = Math.floor(n / 64);
    C(n === 0, "Cannot push at time == 0");
    let o = s.join("");
    if (i) {
      for (r = 11; r >= 0 && e[r] === 63; r--)
        e[r] = 0;
      e[r]++;
    } else
      for (r = 0; r < 12; r++)
        e[r] = Math.floor(Math.random() * 64);
    for (r = 0; r < 12; r++)
      o += Wu.charAt(e[r]);
    return C(o.length === 20, "nextPushId: Length should be 20."), o;
  };
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T1 {
  /**
   * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
   * @param eventRegistration - The function to call to with the event data. User provided
   * @param snapshot - The data backing the event
   * @param prevName - Optional, the name of the previous child for child_* events.
   */
  constructor(e, n, i, r) {
    this.eventType = e, this.eventRegistration = n, this.snapshot = i, this.prevName = r;
  }
  getPath() {
    const e = this.snapshot.ref;
    return this.eventType === "value" ? e._path : e.parent._path;
  }
  getEventType() {
    return this.eventType;
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.getPath().toString() + ":" + this.eventType + ":" + Ne(this.snapshot.exportVal());
  }
}
class S1 {
  constructor(e, n, i) {
    this.eventRegistration = e, this.error = n, this.path = i;
  }
  getPath() {
    return this.path;
  }
  getEventType() {
    return "cancel";
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.path.toString() + ":cancel";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sp {
  constructor(e, n) {
    this.snapshotCallback = e, this.cancelCallback = n;
  }
  onValue(e, n) {
    this.snapshotCallback.call(null, e, n);
  }
  onCancel(e) {
    return C(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e);
  }
  get hasCancelCallback() {
    return !!this.cancelCallback;
  }
  matches(e) {
    return this.snapshotCallback === e.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc {
  /**
   * @hideconstructor
   */
  constructor(e, n, i, r) {
    this._repo = e, this._path = n, this._queryParams = i, this._orderByCalled = r;
  }
  get key() {
    return B(this._path) ? null : xl(this._path);
  }
  get ref() {
    return new hn(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = Tu(this._queryParams), n = Al(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return Tu(this._queryParams);
  }
  isEqual(e) {
    if (e = $e(e), !(e instanceof oc))
      return !1;
    const n = this._repo === e._repo, i = Ll(this._path, e._path), r = this._queryIdentifier === e._queryIdentifier;
    return n && i && r;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + _w(this._path);
  }
}
class hn extends oc {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new $l(), !1);
  }
  get parent() {
    const e = _f(this._path);
    return e === null ? null : new hn(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class Gr {
  /**
   * @param _node - A SnapshotNode to wrap.
   * @param ref - The location this snapshot came from.
   * @param _index - The iteration order for this snapshot
   * @hideconstructor
   */
  constructor(e, n, i) {
    this._node = e, this.ref = n, this._index = i;
  }
  /**
   * Gets the priority value of the data in this `DataSnapshot`.
   *
   * Applications need not use priority but can order collections by
   * ordinary properties (see
   * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
   * ).
   */
  get priority() {
    return this._node.getPriority().val();
  }
  /**
   * The key (last part of the path) of the location of this `DataSnapshot`.
   *
   * The last token in a Database location is considered its key. For example,
   * "ada" is the key for the /users/ada/ node. Accessing the key on any
   * `DataSnapshot` will return the key for the location that generated it.
   * However, accessing the key on the root URL of a Database will return
   * `null`.
   */
  get key() {
    return this.ref.key;
  }
  /** Returns the number of child properties of this `DataSnapshot`. */
  get size() {
    return this._node.numChildren();
  }
  /**
   * Gets another `DataSnapshot` for the location at the specified relative path.
   *
   * Passing a relative path to the `child()` method of a DataSnapshot returns
   * another `DataSnapshot` for the location at the specified relative path. The
   * relative path can either be a simple child name (for example, "ada") or a
   * deeper, slash-separated path (for example, "ada/name/first"). If the child
   * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
   * whose value is `null`) is returned.
   *
   * @param path - A relative path to the location of child data.
   */
  child(e) {
    const n = new ie(e), i = Kr(this.ref, e);
    return new Gr(this._node.getChild(n), i, we);
  }
  /**
   * Returns true if this `DataSnapshot` contains any data. It is slightly more
   * efficient than using `snapshot.val() !== null`.
   */
  exists() {
    return !this._node.isEmpty();
  }
  /**
   * Exports the entire contents of the DataSnapshot as a JavaScript object.
   *
   * The `exportVal()` method is similar to `val()`, except priority information
   * is included (if available), making it suitable for backing up your data.
   *
   * @returns The DataSnapshot's contents as a JavaScript value (Object,
   *   Array, string, number, boolean, or `null`).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exportVal() {
    return this._node.val(!0);
  }
  /**
   * Enumerates the top-level children in the `IteratedDataSnapshot`.
   *
   * Because of the way JavaScript objects work, the ordering of data in the
   * JavaScript object returned by `val()` is not guaranteed to match the
   * ordering on the server nor the ordering of `onChildAdded()` events. That is
   * where `forEach()` comes in handy. It guarantees the children of a
   * `DataSnapshot` will be iterated in their query order.
   *
   * If no explicit `orderBy*()` method is used, results are returned
   * ordered by key (unless priorities are used, in which case, results are
   * returned by priority).
   *
   * @param action - A function that will be called for each child DataSnapshot.
   * The callback can return true to cancel further enumeration.
   * @returns true if enumeration was canceled due to your callback returning
   * true.
   */
  forEach(e) {
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (i, r) => e(new Gr(r, Kr(this.ref, i), we)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new ie(e);
    return !this._node.getChild(n).isEmpty();
  }
  /**
   * Returns whether or not the `DataSnapshot` has any non-`null` child
   * properties.
   *
   * You can use `hasChildren()` to determine if a `DataSnapshot` has any
   * children. If it does, you can enumerate them using `forEach()`. If it
   * doesn't, then either this snapshot contains a primitive value (which can be
   * retrieved with `val()`) or it is empty (in which case, `val()` will return
   * `null`).
   *
   * @returns true if this snapshot has any children; else false.
   */
  hasChildren() {
    return this._node.isLeafNode() ? !1 : !this._node.isEmpty();
  }
  /**
   * Returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return this.exportVal();
  }
  /**
   * Extracts a JavaScript value from a `DataSnapshot`.
   *
   * Depending on the data in a `DataSnapshot`, the `val()` method may return a
   * scalar type (string, number, or boolean), an array, or an object. It may
   * also return null, indicating that the `DataSnapshot` is empty (contains no
   * data).
   *
   * @returns The DataSnapshot's contents as a JavaScript value (Object,
   *   Array, string, number, boolean, or `null`).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  val() {
    return this._node.val();
  }
}
function Ut(t, e) {
  return t = $e(t), t._checkNotDeleted("ref"), e !== void 0 ? Kr(t._root, e) : t._root;
}
function Kr(t, e) {
  return t = $e(t), H(t._path) === null ? r1("child", "path", e) : Jf("child", "path", e), new hn(t._repo, be(t._path, e));
}
function k1(t, e) {
  t = $e(t), tc("push", t._path), Qf("push", e, t._path, !0);
  const n = ep(t._repo), i = C1(n), r = Kr(t, i), s = Kr(t, i);
  let o;
  return o = Promise.resolve(s), r.then = o.then.bind(o), r.catch = o.then.bind(o, void 0), r;
}
function A1(t) {
  return tc("remove", t._path), $o(t, null);
}
function $o(t, e) {
  t = $e(t), tc("set", t._path), Qf("set", e, t._path, !1);
  const n = new rs();
  return p1(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function Ba(t, e) {
  i1("update", e, t._path);
  const n = new rs();
  return m1(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function R1(t) {
  t = $e(t);
  const e = new sp(() => {
  }), n = new Fo(e);
  return f1(t._repo, t, n).then((i) => new Gr(i, new hn(t._repo, t._path), t._queryParams.getIndex()));
}
class Fo {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const i = n._queryParams.getIndex();
    return new T1("value", this, new Gr(e.snapshotNode, new hn(n._repo, n._path), i));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new S1(this, e, n) : null;
  }
  matches(e) {
    return e instanceof Fo ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function P1(t, e, n, i, r) {
  let s;
  if (typeof i == "object" && (s = void 0, r = i), typeof i == "function" && (s = i), r && r.onlyOnce) {
    const l = n, c = (d, h) => {
      ja(t._repo, t, a), l(d, h);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new sp(n, s || void 0), a = new Fo(o);
  return g1(t._repo, t, a), () => ja(t._repo, t, a);
}
function co(t, e, n, i) {
  return P1(t, "value", e, n, i);
}
function ac(t, e, n) {
  ja(t._repo, t, null);
}
A0(hn);
L0(hn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N1 = "FIREBASE_DATABASE_EMULATOR_HOST", qa = {};
let x1 = !1;
function L1(t, e, n, i) {
  const r = e.lastIndexOf(":"), s = e.substring(0, r), o = Yi(s);
  t.repoInfo_ = new af(
    e,
    /* secure= */
    o,
    t.repoInfo_.namespace,
    t.repoInfo_.webSocketOnly,
    t.repoInfo_.nodeAdmin,
    t.repoInfo_.persistenceKey,
    t.repoInfo_.includeNamespaceInQueryParams,
    /*isUsingEmulator=*/
    !0,
    n
  ), i && (t.authTokenProvider_ = i);
}
function O1(t, e, n, i, r) {
  let s = i || t.options.databaseURL;
  s === void 0 && (t.options.projectId || ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), He("Using default host for project ", t.options.projectId), s = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = Uu(s, r), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[N1]), l ? (s = `http://${l}?ns=${a.namespace}`, o = Uu(s, r), a = o.repoInfo) : o.repoInfo.secure;
  const c = new zb(t.name, t.options, e);
  s1("Invalid Firebase Database URL", o), B(o.path) || ln("Database URL must point to the root of a Firebase Database (not including a child path).");
  const d = M1(a, t, c, new jb(t, n));
  return new $1(d, t);
}
function D1(t, e) {
  const n = qa[e];
  (!n || n[t.key] !== t) && ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`), v1(t), delete n[t.key];
}
function M1(t, e, n, i) {
  let r = qa[e.name];
  r || (r = {}, qa[e.name] = r);
  let s = r[t.toURLString()];
  return s && ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), s = new u1(t, x1, n, i), r[t.toURLString()] = s, s;
}
class $1 {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (d1(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new hn(this._repo, J())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (D1(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && ln("Cannot call " + e + " on a deleted database.");
  }
}
function F1(t = oh(), e) {
  const n = gl(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const i = v_("database");
    i && U1(n, ...i);
  }
  return n;
}
function U1(t, e, n, i = {}) {
  t = $e(t), t._checkNotDeleted("useEmulator");
  const r = `${e}:${n}`, s = t._repoInternal;
  if (t._instanceStarted) {
    if (r === t._repoInternal.repoInfo_.host && ti(i, s.repoInfo_.emulatorOptions))
      return;
    ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (s.repoInfo_.nodeAdmin)
    i.mockUserToken && ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Ns(Ns.OWNER);
  else if (i.mockUserToken) {
    const a = typeof i.mockUserToken == "string" ? i.mockUserToken : y_(i.mockUserToken, t.app.options.projectId);
    o = new Ns(a);
  }
  Yi(e) && (Zd(e), eh("Database", !0)), L1(s, r, i, o);
}
/**
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
 */
function W1(t) {
  kb(Qi), $i(new ni(
    "database",
    (e, { instanceIdentifier: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("auth-internal"), s = e.getProvider("app-check-internal");
      return O1(i, r, s, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), kn(lu, cu, t), kn(lu, cu, "esm2020");
}
sn.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
sn.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
W1();
const H1 = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
}, op = sh(H1), zi = Tb(op), Wt = F1(op);
var V1 = /* @__PURE__ */ j('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), j1 = /* @__PURE__ */ j('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), z1 = /* @__PURE__ */ j('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), B1 = /* @__PURE__ */ j('<h3 class="post-title svelte-1t1odzy"> </h3>'), q1 = /* @__PURE__ */ j('<p class="post-text svelte-1t1odzy"> </p>'), G1 = /* @__PURE__ */ j('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), K1 = /* @__PURE__ */ j('<div class="posts svelte-1t1odzy"></div>'), Y1 = /* @__PURE__ */ j('<div class="post-list-container svelte-1t1odzy"><!></div>');
const Q1 = {
  hash: "svelte-1t1odzy",
  code: `
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
  }`
};
function J1(t, e) {
  Dn(e, !0), ui(t, Q1);
  let n = _t(e, "path", 7, "posts"), i = _t(e, "limit", 7, "10"), r = /* @__PURE__ */ he(Qt([])), s = /* @__PURE__ */ he(!0), o = /* @__PURE__ */ he(""), a = null;
  bo(() => {
    l();
  }), Wm(() => {
    c();
  });
  function l() {
    try {
      a = Ut(Wt, n()), co(
        a,
        (T) => {
          const k = T.val();
          k ? L(r, Object.entries(k).map(([P, O]) => ({ id: P, ...O })).sort((P, O) => (O.timestamp || 0) - (P.timestamp || 0)).slice(0, parseInt(i())), !0) : L(r, [], !0), L(s, !1), L(o, "");
        },
        (T) => {
          console.error("데이터 읽기 오류:", T), L(o, "데이터를 불러오는 중 오류가 발생했습니다."), L(s, !1);
        }
      );
    } catch (T) {
      console.error("구독 설정 오류:", T), L(o, "데이터베이스 연결에 실패했습니다."), L(s, !1);
    }
  }
  function c() {
    a && ac(a);
  }
  function d(T) {
    const k = new CustomEvent("post-click", { detail: { post: T }, bubbles: !0, composed: !0 });
    dispatchEvent(k);
  }
  function h(T, k) {
    (T.key === "Enter" || T.key === " ") && (T.preventDefault(), d(k));
  }
  function u(T) {
    if (!T) return "";
    const k = typeof T == "string" ? Number(T) : T, P = new Date(k), w = (/* @__PURE__ */ new Date()).getTime() - P.getTime(), I = Math.floor(w / 6e4), b = Math.floor(w / 36e5), D = Math.floor(w / 864e5);
    return I < 1 ? "방금 전" : I < 60 ? `${I}분 전` : b < 24 ? `${b}시간 전` : D < 7 ? `${D}일 전` : P.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return n();
    },
    set path(T = "posts") {
      n(T), ct();
    },
    get limit() {
      return i();
    },
    set limit(T = "10") {
      i(T), ct();
    }
  }, p = Y1(), g = _(p);
  {
    var E = (T) => {
      var k = V1();
      x(T, k);
    }, S = (T) => {
      var k = Ae(), P = fe(k);
      {
        var O = (I) => {
          var b = j1(), D = _(b), N = _(D, !0);
          m(D), m(b), ce(() => R(N, v(o))), x(I, b);
        }, w = (I) => {
          var b = Ae(), D = fe(b);
          {
            var N = (M) => {
              var G = z1();
              x(M, G);
            }, q = (M) => {
              var G = K1();
              ns(G, 21, () => v(r), (X) => X.id, (X, W) => {
                var Q = G1();
                Q.__click = () => d(v(W)), Q.__keydown = (pe) => h(pe, v(W));
                var ge = _(Q), re = _(ge), Z = _(re), de = _(Z, !0);
                m(Z);
                var ee = y(Z, 2), Ie = _(ee, !0);
                m(ee), m(re), m(ge);
                var ve = y(ge, 2), Re = _(ve);
                {
                  var z = (pe) => {
                    var Qe = B1(), tt = _(Qe, !0);
                    m(Qe), ce(() => R(tt, v(W).title)), x(pe, Qe);
                  };
                  ke(Re, (pe) => {
                    v(W).title && pe(z);
                  });
                }
                var se = y(Re, 2);
                {
                  var ae = (pe) => {
                    var Qe = q1(), tt = _(Qe, !0);
                    m(Qe), ce(() => R(tt, v(W).content)), x(pe, Qe);
                  };
                  ke(se, (pe) => {
                    v(W).content && pe(ae);
                  });
                }
                m(ve);
                var Fe = y(ve, 2), Ue = _(Fe), oe = _(Ue);
                m(Ue);
                var Ce = y(Ue, 2), Ye = _(Ce);
                m(Ce), m(Fe), m(Q), ce(
                  (pe) => {
                    Te(Q, "aria-label", `게시물: ${(v(W).title || v(W).content || "제목 없음") ?? ""}`), R(de, v(W).author || "익명"), R(Ie, pe), R(oe, `👍 ${(v(W).likes || 0) ?? ""}`), R(Ye, `💬 ${(v(W).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(v(W).timestamp)]
                ), x(X, Q);
              }), m(G), x(M, G);
            };
            ke(
              D,
              (M) => {
                v(r).length === 0 ? M(N) : M(q, !1);
              },
              !0
            );
          }
          x(I, b);
        };
        ke(
          P,
          (I) => {
            v(o) ? I(O) : I(w, !1);
          },
          !0
        );
      }
      x(T, k);
    };
    ke(g, (T) => {
      v(s) ? T(E) : T(S, !1);
    });
  }
  return m(p), x(t, p), Mn(f);
}
ts(["click", "keydown"]);
customElements.define("post-list", _e(J1, { path: {}, limit: {} }, [], [], !0));
nm();
/**
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
 */
const X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var Z1 = /* @__PURE__ */ Am("<svg><!><!></svg>");
function ze(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), i = De(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  Dn(e, !1);
  let r = _t(e, "name", 12, void 0), s = _t(e, "color", 12, "currentColor"), o = _t(e, "size", 12, 24), a = _t(e, "strokeWidth", 12, 2), l = _t(e, "absoluteStrokeWidth", 12, !1), c = _t(e, "iconNode", 28, () => []);
  const d = (...g) => g.filter((E, S, T) => !!E && T.indexOf(E) === S).join(" ");
  var h = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), ct();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), ct();
    },
    get size() {
      return o();
    },
    set size(g) {
      o(g), ct();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(g) {
      a(g), ct();
    },
    get absoluteStrokeWidth() {
      return l();
    },
    set absoluteStrokeWidth(g) {
      l(g), ct();
    },
    get iconNode() {
      return c();
    },
    set iconNode(g) {
      c(g), ct();
    }
  };
  zd();
  var u = Z1();
  Tc(
    u,
    (g, E) => ({
      ...X1,
      ...i,
      width: o(),
      height: o(),
      stroke: s(),
      "stroke-width": g,
      class: E
    }),
    [
      () => (bi(l()), bi(a()), bi(o()), Vt(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (bi(r()), bi(n), Vt(() => d("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", n.class)))
    ]
  );
  var f = _(u);
  ns(f, 1, c, wo, (g, E) => {
    var S = /* @__PURE__ */ fa(() => Fp(v(E), 2));
    let T = () => v(S)[0], k = () => v(S)[1];
    var P = Ae(), O = fe(P);
    zm(O, T, !0, (w, I) => {
      Tc(w, () => ({ ...k() }));
    }), x(g, P);
  });
  var p = y(f);
  return Me(p, e, "default", {}), m(u), x(t, u), Mn(h);
}
_e(
  ze,
  {
    name: {},
    color: {},
    size: {},
    strokeWidth: {},
    absoluteStrokeWidth: {},
    iconNode: {}
  },
  ["default"],
  [],
  !0
);
function ap(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M12 7v14" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  ze(t, Ke({ name: "book-open" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(ap, {}, ["default"], [], !0);
function Ga(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [["path", { d: "M20 6 9 17l-5-5" }]];
  ze(t, Ke({ name: "check" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(Ga, {}, ["default"], [], !0);
function lp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [["path", { d: "m6 9 6 6 6-6" }]];
  ze(t, Ke({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(lp, {}, ["default"], [], !0);
function Ka(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M15 3h6v6" }],
    ["path", { d: "M10 14 21 3" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ]
  ];
  ze(t, Ke({ name: "external-link" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(Ka, {}, ["default"], [], !0);
function lc(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
    ["path", { d: "M10 9H8" }],
    ["path", { d: "M16 13H8" }],
    ["path", { d: "M16 17H8" }]
  ];
  ze(t, Ke({ name: "file-text" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(lc, {}, ["default"], [], !0);
function cp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  ze(t, Ke({ name: "house" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(cp, {}, ["default"], [], !0);
function _r(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "rect",
      { width: "7", height: "7", x: "3", y: "3", rx: "1" }
    ],
    [
      "rect",
      { width: "7", height: "7", x: "14", y: "3", rx: "1" }
    ],
    [
      "rect",
      { width: "7", height: "7", x: "14", y: "14", rx: "1" }
    ],
    [
      "rect",
      { width: "7", height: "7", x: "3", y: "14", rx: "1" }
    ]
  ];
  ze(t, Ke({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(_r, {}, ["default"], [], !0);
function up(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "m10 17 5-5-5-5" }],
    ["path", { d: "M15 12H3" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
  ];
  ze(t, Ke({ name: "log-in" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(up, {}, ["default"], [], !0);
function dp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "m16 17 5-5-5-5" }],
    ["path", { d: "M21 12H9" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  ze(t, Ke({ name: "log-out" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(dp, {}, ["default"], [], !0);
function gr(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M4 5h16" }],
    ["path", { d: "M4 12h16" }],
    ["path", { d: "M4 19h16" }]
  ];
  ze(t, Ke({ name: "menu" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(gr, {}, ["default"], [], !0);
function En(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ]
  ];
  ze(t, Ke({ name: "message-circle" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(En, {}, ["default"], [], !0);
function hp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ];
  ze(t, Ke({ name: "phone" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(hp, {}, ["default"], [], !0);
function fp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939" }]
  ];
  ze(t, Ke({ name: "send" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(fp, {}, ["default"], [], !0);
function pp(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M16 7h6v6" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  ze(t, Ke({ name: "trending-up" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(pp, {}, ["default"], [], !0);
function Jn(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ];
  ze(t, Ke({ name: "user" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(Jn, {}, ["default"], [], !0);
function Yr(t, e) {
  const n = De(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
  /**
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
   */
  const i = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { cx: "9", cy: "7", r: "4" }]
  ];
  ze(t, Ke({ name: "users" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Ae(), a = fe(o);
      Me(a, e, "default", {}), x(r, o);
    },
    $$slots: { default: !0 }
  }));
}
_e(Yr, {}, ["default"], [], !0);
var eE = /* @__PURE__ */ j("<option> </option>"), tE = /* @__PURE__ */ j('<div class="error-message svelte-1e01td3"> </div>'), nE = /* @__PURE__ */ j('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...', 1), iE = /* @__PURE__ */ j("<!> 인증 코드 전송", 1), rE = /* @__PURE__ */ j('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'), sE = /* @__PURE__ */ j('<div class="error-message svelte-1e01td3"> </div>'), oE = /* @__PURE__ */ j('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...', 1), aE = /* @__PURE__ */ j("<!> 로그인", 1), lE = /* @__PURE__ */ j('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'), cE = /* @__PURE__ */ j('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');
const uE = {
  hash: "svelte-1e01td3",
  code: `\r
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
  }`
};
function dE(t, e) {
  Dn(e, !0), ui(t, uE);
  const n = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" }
  ];
  let i = /* @__PURE__ */ he(
    "+82"
    // 기본값: 한국
  ), r = /* @__PURE__ */ he(
    ""
    // 전화번호 (국가 코드 제외)
  ), s = /* @__PURE__ */ he(
    ""
    // SMS 인증 코드
  ), o = /* @__PURE__ */ he(
    "phone"
    // 'phone' | 'code'
  ), a = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he(""), c = /* @__PURE__ */ he(null), d = /* @__PURE__ */ he(null), h = /* @__PURE__ */ he(
    void 0
    // reCAPTCHA 위젯 ID 저장
  ), u = /* @__PURE__ */ he(
    null
    // reCAPTCHA 컨테이너 DOM 요소 참조
  );
  function f() {
    return new Promise((b, D) => {
      try {
        if (!v(u)) {
          const N = new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");
          console.error(N), L(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
          return;
        }
        if (v(c)) {
          if (v(h) !== void 0 && typeof window.grecaptcha < "u")
            try {
              window.grecaptcha.reset(v(h)), console.log("reCAPTCHA reset completed"), b(v(h));
              return;
            } catch (N) {
              console.warn("Failed to reset reCAPTCHA:", N);
            }
          try {
            v(c).clear(), L(c, null), L(h, void 0);
          } catch (N) {
            console.warn("Failed to clear reCAPTCHA:", N);
          }
        }
        L(
          c,
          new Ty(zi, v(u).id, {
            size: "invisible",
            // invisible 모드 활성화 - 사용자 상호작용 없이 자동 검증
            callback: (N) => {
              console.log("reCAPTCHA verified (invisible mode)");
            },
            "expired-callback": () => {
              console.warn("reCAPTCHA expired. Resetting..."), typeof window.grecaptcha < "u" && v(h) !== void 0 ? window.grecaptcha.reset(v(h)) : f();
            }
          }),
          !0
        ), v(c).render().then((N) => {
          L(h, N, !0), console.log("reCAPTCHA rendered with widgetId:", N), b(N);
        }).catch((N) => {
          console.error("Failed to render reCAPTCHA:", N), L(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
        });
      } catch (N) {
        console.error("reCAPTCHA 초기화 실패:", N), L(l, "reCAPTCHA 초기화에 실패했습니다."), D(N);
      }
    });
  }
  bo(() => {
    const b = document.createElement("div");
    return b.id = "recaptcha-container-" + Math.random().toString(36).substr(2, 9), b.className = "recaptcha-container-light-dom", b.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `, document.body.appendChild(b), L(u, b, !0), f(), () => {
      b && b.parentNode && b.parentNode.removeChild(b);
    };
  });
  function p(b) {
    return /^[0-9]{6,15}$/.test(b);
  }
  async function g() {
    if (L(l, ""), !p(v(r))) {
      L(l, "올바른 전화번호를 입력해주세요 (6-15자리 숫자)");
      return;
    }
    L(a, !0);
    try {
      const b = `${v(i)}${v(r)}`;
      console.log("Sending verification code to:", b), L(d, await Ay(zi, b, v(c)), !0), console.log("Verification code sent successfully (invisible reCAPTCHA verified)"), L(o, "code");
    } catch (b) {
      console.error("SMS 전송 실패:", b), b.code === "auth/invalid-phone-number" ? L(l, "잘못된 전화번호 형식입니다.") : b.code === "auth/too-many-requests" ? L(l, "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.") : L(l, `SMS 전송 실패: ${b.message}`);
    } finally {
      L(a, !1);
    }
  }
  async function E() {
    if (L(l, ""), v(s).length !== 6) {
      L(l, "6자리 인증 코드를 입력해주세요.");
      return;
    }
    L(a, !0);
    try {
      const b = await v(d).confirm(v(s));
      console.log("Login successful:", b.user);
      const D = new CustomEvent("login-success", {
        detail: { user: b.user, phoneNumber: b.user.phoneNumber }
      });
      dispatchEvent(D), L(r, ""), L(s, ""), L(o, "phone");
    } catch (b) {
      console.error("인증 코드 확인 실패:", b), b.code === "auth/invalid-verification-code" ? L(l, "잘못된 인증 코드입니다.") : b.code === "auth/code-expired" ? L(l, "인증 코드가 만료되었습니다. 다시 시도해주세요.") : L(l, `인증 실패: ${b.message}`);
      const D = new CustomEvent("login-error", { detail: { error: b.message } });
      dispatchEvent(D);
    } finally {
      L(a, !1);
    }
  }
  function S() {
    L(o, "phone"), L(s, ""), L(l, "");
  }
  var T = cE(), k = _(T), P = _(k);
  {
    var O = (b) => {
      var D = rE(), N = _(D), q = _(N);
      hp(q, { class: "icon-large" }), Kt(4), m(N);
      var M = y(N, 2), G = y(_(M), 2);
      ns(G, 21, () => n, wo, (z, se) => {
        var ae = eE(), Fe = _(ae);
        m(ae);
        var Ue = {};
        ce(() => {
          R(Fe, `${v(se).flag ?? ""} ${v(se).name ?? ""} (${v(se).code ?? ""})`), Ue !== (Ue = v(se).code) && (ae.value = (ae.__value = v(se).code) ?? "");
        }), x(z, ae);
      }), m(G), m(M);
      var X = y(M, 2), W = y(_(X), 2), Q = _(W), ge = _(Q, !0);
      m(Q);
      var re = y(Q, 2);
      wa(re), m(W), Kt(2), m(X);
      var Z = y(X, 2);
      {
        var de = (z) => {
          var se = tE(), ae = _(se, !0);
          m(se), ce(() => R(ae, v(l))), x(z, se);
        };
        ke(Z, (z) => {
          v(l) && z(de);
        });
      }
      var ee = y(Z, 2);
      ee.__click = g;
      var Ie = _(ee);
      {
        var ve = (z) => {
          var se = nE();
          Kt(), x(z, se);
        }, Re = (z) => {
          var se = iE(), ae = fe(se);
          fp(ae, { class: "btn-icon" }), Kt(), x(z, se);
        };
        ke(Ie, (z) => {
          v(a) ? z(ve) : z(Re, !1);
        });
      }
      m(ee), m(D), ce(() => {
        G.disabled = v(a), R(ge, v(i)), re.disabled = v(a), ee.disabled = v(a) || !v(r);
      }), Jm(G, () => v(i), (z) => L(i, z)), wc("keypress", re, (z) => {
        z.key === "Enter" && (z.preventDefault(), g());
      }), kc(re, () => v(r), (z) => L(r, z)), x(b, D);
    }, w = (b) => {
      var D = Ae(), N = fe(D);
      {
        var q = (M) => {
          var G = lE(), X = _(G), W = _(X);
          Ga(W, { class: "icon-large" });
          var Q = y(W, 4), ge = _(Q);
          Kt(2), m(Q), m(X);
          var re = y(X, 2), Z = y(_(re), 2);
          wa(Z), Kt(2), m(re);
          var de = y(re, 2);
          {
            var ee = (oe) => {
              var Ce = sE(), Ye = _(Ce, !0);
              m(Ce), ce(() => R(Ye, v(l))), x(oe, Ce);
            };
            ke(de, (oe) => {
              v(l) && oe(ee);
            });
          }
          var Ie = y(de, 2), ve = _(Ie);
          ve.__click = S;
          var Re = y(ve, 2);
          Re.__click = E;
          var z = _(Re);
          {
            var se = (oe) => {
              var Ce = oE();
              Kt(), x(oe, Ce);
            }, ae = (oe) => {
              var Ce = aE(), Ye = fe(Ce);
              Ga(Ye, { class: "btn-icon" }), Kt(), x(oe, Ce);
            };
            ke(z, (oe) => {
              v(a) ? oe(se) : oe(ae, !1);
            });
          }
          m(Re), m(Ie);
          var Fe = y(Ie, 2), Ue = y(_(Fe));
          Ue.__click = S, m(Fe), m(G), ce(() => {
            R(ge, `${v(i) ?? ""}${v(r) ?? ""}로 전송된`), Z.disabled = v(a), ve.disabled = v(a), Re.disabled = v(a) || v(s).length !== 6;
          }), wc("keypress", Z, (oe) => {
            oe.key === "Enter" && (oe.preventDefault(), E());
          }), kc(Z, () => v(s), (oe) => L(s, oe)), x(M, G);
        };
        ke(
          N,
          (M) => {
            v(o) === "code" && M(q);
          },
          !0
        );
      }
      x(b, D);
    };
    ke(P, (b) => {
      v(o) === "phone" ? b(O) : b(w, !1);
    });
  }
  var I = y(P, 2);
  jd(I, (b) => L(u, b), () => v(u)), m(k), m(T), x(t, T), Mn();
}
ts(["click"]);
customElements.define("phone-login", _e(dE, {}, [], [], !0));
const cc = is(null), hE = is(!0);
iy(zi, (t) => {
  cc.set(t), hE.set(!1);
});
async function XE(t, e) {
  try {
    return await Xv(zi, t, e), { success: !0 };
  } catch (n) {
    return console.error("로그인 오류:", n), { success: !1, error: mp(n.code) };
  }
}
async function ZE(t, e, n = "") {
  try {
    const i = await Jv(zi, t, e);
    return n && await ey(i.user, {
      displayName: n
    }), { success: !0 };
  } catch (i) {
    return console.error("회원가입 오류:", i), { success: !1, error: mp(i.code) };
  }
}
async function fE() {
  try {
    return await ry(zi), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function mp(t) {
  return {
    "auth/invalid-email": "유효하지 않은 이메일 주소입니다.",
    "auth/user-disabled": "비활성화된 계정입니다.",
    "auth/user-not-found": "등록되지 않은 이메일입니다.",
    "auth/wrong-password": "잘못된 비밀번호입니다.",
    "auth/email-already-in-use": "이미 사용 중인 이메일입니다.",
    "auth/weak-password": "비밀번호는 최소 6자 이상이어야 합니다.",
    "auth/too-many-requests": "너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.",
    "auth/network-request-failed": "네트워크 연결을 확인해주세요.",
    "auth/invalid-credential": "인증 정보가 올바르지 않습니다."
  }[t] || "알 수 없는 오류가 발생했습니다.";
}
const pE = {
  프로젝트_명칭: "Hanbabo 0.2",
  웰컴: "Welcome to SNS!",
  로그인: "Login",
  회원가입: "Sign Up",
  인사: "Hello, {name}!",
  언어선택: "Language Selection",
  홈: "Home",
  프로필: "Profile",
  친구: "Friends",
  채팅: "Chat",
  설정: "Settings",
  로그아웃: "Logout",
  이메일: "Email",
  비밀번호: "Password",
  비밀번호확인: "Confirm Password",
  이름: "Name",
  닉네임: "Nickname",
  저장: "Save",
  취소: "Cancel",
  확인: "OK",
  삭제: "Delete",
  수정: "Edit",
  검색: "Search",
  알림: "Notifications",
  새글작성: "New Post",
  댓글: "Comments",
  좋아요: "Like",
  공유: "Share",
  포럼: "Forum",
  사용자찾기: "Find Users",
  내계정: "My Account",
  프로필수정: "Edit Profile",
  메뉴: "Menu",
  퀵메뉴: "Quick Menu",
  사용자목록: "User List",
  내프로필: "My Profile",
  게시판: "Forum",
  시작하기: "Get Started",
  회원정보수정: "Edit My Info",
  회원목록: "Member List",
  프로젝트GitHub: "Project GitHub",
  한바보참여단톡방: "Join Hanbabo Chat",
  개발일지: "Dev Diary",
  언어설정: "Language Settings",
  언어전환기능안내: "Language switching feature coming soon.",
  빌드버전: "Build Version",
  카피레프트: "© Copyleft",
  AI소개: "AI can build features like this.",
  통계: "Statistics",
  전체사용자: "Total Users",
  전체점수: "Total Score",
  전체글: "Total Posts",
  채팅메시지: "Chat Messages",
  준비중: "Coming Soon",
  통계실시간업데이트: "Statistics are updated in real-time.",
  로그인성공: "✅ Login successful: {email}",
  오류: "❌ Error: {error}",
  게시물클릭알림: `Post clicked:

Title: {title}
Author: {author}`,
  제목없음: "No Title",
  익명: "Anonymous",
  게시물목록: "Post List",
  정보: "About",
  로그인회원가입: "Login / Sign Up",
  Firebase설명: "Login form using Firebase Authentication.",
  게시물목록설명: "Display posts from Firebase Realtime Database in real-time.",
  로그인필요: "⚠️ Please login first to view posts.",
  프로젝트정보: "Project Information",
  프로젝트개요: "🎯 Project Overview",
  프로젝트개요설명: "A project that develops Custom Elements (Web Components) using Svelte 5 library mode.",
  기술스택: "🛠️ Tech Stack",
  포함컴포넌트: "📦 Included Components",
  사용방법: "🚀 Usage",
  특징: "💡 Features",
  푸터: "© 2024 SNS Web Components | Powered by Svelte 5 & Firebase",
  "home.vibeBanner": "100% Built with Vibe Coding",
  "home.techStack.title": "🛠️ Tech Stack",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "Custom Elements",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android and iOS app development",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "Chosen as real-time database",
  "home.aiTruth.title": "The Truth About AI Era",
  "home.aiTruth.item1.title": "What Doesn't Change in the AI Era is You",
  "home.aiTruth.item1.content": "No matter how advanced AI becomes, it's still you who wants to create something and solve problems. AI is just a tool; you remain the protagonist.",
  "home.aiTruth.item2.title": "AI Alone Can't Do Everything",
  "home.aiTruth.item2.content": "AI is a powerful tool, but you can't complete a project with AI alone. Planning, design, testing, deployment, and maintenance all require human judgment and intervention.",
  "home.aiTruth.item2.hint": "💡 AI can write code, but it's you who decides what code to write.",
  "home.aiTruth.item3.title": "Copyright Issues",
  "home.aiTruth.item3.content": "Copyright of AI-generated code is a complex issue. Licenses must be carefully reviewed when used commercially.",
  "home.aiTruth.item3.gpl": "This project follows the GPL license.",
  "home.aiTruth.item3.hint": "Sharing as open source helps avoid legal issues and contributes to the community.",
  "home.title": "Hanbabo - Social Network for AI Era",
  "home.description.part1": "Hanbabo is a modern social network platform built with AI.",
  "home.description.linkText": "Join our chat",
  "home.description.part2": "to develop together and share ideas!",
  "home.todo.title": "Development Roadmap",
  "home.todo.item1.label": "Initial Setup",
  "home.todo.item1.description": "Svelte 5, Vite, Firebase configuration completed",
  "home.todo.item2.label": "Authentication System",
  "home.todo.item2.description": "Firebase Authentication integration completed",
  "home.todo.item3.label": "UI Components",
  "home.todo.item3.description": "Build reusable UI based on Web Components",
  "home.todo.item3.subitem1": "Topbar, Sidebar, Layout components",
  "home.todo.item3.subitem2": "Responsive design applied",
  "home.todo.item4.label": "Forum Features",
  "home.todo.item5.label": "Chat Features",
  "home.todo.item5.subitem1": "Real-time 1:1 chat",
  "home.todo.item5.subitem2": "Group chat rooms",
  "home.todo.item5.subitem3": "File sharing",
  "home.todo.item5.subitem4": "Read receipts",
  "home.todo.item6.label": "Friend Management",
  "home.todo.item6.subitem1": "Add/remove friends",
  "home.todo.item6.subitem2": "Manage friend list",
  "home.todo.item7.label": "Notification System",
  "home.todo.item7.subitem1": "Real-time push notifications",
  "home.overview.title": "Project Overview",
  "home.overview.brand": "Hanbabo",
  "home.overview.description": " is a platform for local social gatherings. Easily connect with people in your area, create meetups, and engage together.",
  "home.overview.badge1": "Real-time Chat",
  "home.overview.badge2": "Local Meetups",
  "home.overview.badge3": "Friend Management",
  "home.overview.badge4": "Community Forum",
  "home.aiChange.title": "Change and Growth in the AI Era",
  "home.aiChange.description": "AI is changing the paradigm of development. Now anyone with an idea can create actual services with AI's help.",
  "home.aiChange.emphasis": "The important thing is not how to use AI, but",
  "home.aiChange.highlight": "what you will create",
  "home.aiChange.conclusion": " - having a clear vision.",
  "home.aiChange.hint": "This project was created in collaboration with AI. All code was written together with Claude.",
  "phoneLogin.title": "Login with Phone Number",
  "phoneLogin.description": "Enter your phone number and we'll send you a verification code via SMS.",
  "phoneLogin.countryLabel": "Select Country",
  "phoneLogin.phoneLabel": "Phone Number",
  "phoneLogin.phonePlaceholder": "1012345678",
  "phoneLogin.phoneHint": "Enter numbers only (without country code)",
  "phoneLogin.sendCode": "Send Verification Code",
  "phoneLogin.sending": "Sending...",
  "phoneLogin.codeTitle": "Enter Verification Code",
  "phoneLogin.codeDescription": "Please enter the 6-digit verification code sent to {phone}.",
  "phoneLogin.codeLabel": "Verification Code",
  "phoneLogin.codePlaceholder": "123456",
  "phoneLogin.codeHint": "Enter 6 digits",
  "phoneLogin.verifying": "Verifying...",
  "phoneLogin.verify": "Login",
  "phoneLogin.back": "Back",
  "phoneLogin.resendHint": "Didn't receive the code?",
  "phoneLogin.resendLink": "Resend",
  "phoneLogin.error.invalidPhone": "Please enter a valid phone number (6-15 digits)",
  "phoneLogin.error.invalidCode": "Please enter a 6-digit verification code.",
  "phoneLogin.error.wrongCode": "Invalid verification code.",
  "phoneLogin.error.expiredCode": "Verification code has expired. Please try again.",
  "phoneLogin.error.tooManyRequests": "Too many requests. Please try again later.",
  "phoneLogin.error.recaptchaExpired": "reCAPTCHA has expired. Please refresh the page.",
  "phoneLogin.error.recaptchaInit": "Failed to initialize reCAPTCHA.",
  "phoneLogin.error.smsFailed": "SMS sending failed: {error}"
}, mE = {
  프로젝트_명칭: "한바보 0.2",
  웰컴: "SNS에 오신 것을 환영합니다!",
  로그인: "로그인",
  회원가입: "회원가입",
  인사: "{name}님, 안녕하세요!",
  언어선택: "언어 선택",
  홈: "홈",
  프로필: "프로필",
  친구: "친구",
  채팅: "채팅",
  설정: "설정",
  로그아웃: "로그아웃",
  이메일: "이메일",
  비밀번호: "비밀번호",
  비밀번호확인: "비밀번호 확인",
  이름: "이름",
  닉네임: "닉네임",
  저장: "저장",
  취소: "취소",
  확인: "확인",
  삭제: "삭제",
  수정: "수정",
  검색: "검색",
  알림: "알림",
  새글작성: "새 글 작성",
  댓글: "댓글",
  좋아요: "좋아요",
  공유: "공유",
  포럼: "포럼",
  사용자찾기: "사용자 찾기",
  내계정: "내 계정",
  프로필수정: "프로필 수정",
  메뉴: "메뉴",
  퀵메뉴: "퀵메뉴",
  사용자목록: "사용자 목록",
  내프로필: "내 프로필",
  게시판: "게시판",
  시작하기: "시작하기",
  회원정보수정: "회원 정보 수정",
  회원목록: "회원 목록",
  프로젝트GitHub: "프로젝트 GitHub",
  한바보참여단톡방: "한바보 참여 단톡방",
  개발일지: "개발일지",
  언어설정: "언어 설정",
  언어전환기능안내: "언어 전환 기능은 곧 추가됩니다.",
  빌드버전: "빌드 버전",
  카피레프트: "© Copyleft",
  AI소개: "AI가 이런 기능까지 만들 수 있습니다.",
  통계: "통계",
  전체사용자: "전체 사용자",
  전체점수: "전체 점수",
  전체글: "전체 글",
  채팅메시지: "채팅 메시지",
  준비중: "준비 중",
  통계실시간업데이트: "통계는 실시간으로 업데이트됩니다.",
  로그인성공: "✅ 로그인 성공: {email}",
  오류: "❌ 오류: {error}",
  게시물클릭알림: `게시물 클릭:

제목: {title}
작성자: {author}`,
  제목없음: "제목 없음",
  익명: "익명",
  게시물목록: "게시물 목록",
  정보: "정보",
  로그인회원가입: "로그인 / 회원가입",
  Firebase설명: "Firebase Authentication을 사용한 로그인 폼입니다.",
  게시물목록설명: "Firebase Realtime Database의 게시물을 실시간으로 표시합니다.",
  로그인필요: "⚠️ 게시물을 보려면 먼저 로그인해주세요.",
  프로젝트정보: "프로젝트 정보",
  프로젝트개요: "🎯 프로젝트 개요",
  프로젝트개요설명: "Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.",
  기술스택: "🛠️ 기술 스택",
  포함컴포넌트: "📦 포함된 컴포넌트",
  사용방법: "🚀 사용 방법",
  특징: "💡 특징",
  푸터: "© 2024 SNS Web Components | Powered by Svelte 5 & Firebase",
  "home.vibeBanner": "100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다",
  "home.techStack.title": "🛠️ 기술 스택",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "커스텀 엘리먼트",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android 및 iOS 앱 제작",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "실시간 데이터베이스로서 선택",
  "home.aiTruth.title": "AI 시대의 진실",
  "home.aiTruth.item1.title": "AI 시대에 변하지 않는 것은 당신",
  "home.aiTruth.item1.content": "AI가 아무리 발전해도, 결국 무언가를 만들고 싶은 사람, 문제를 해결하고 싶은 사람은 당신입니다. AI는 도구일 뿐, 주인공은 여전히 당신입니다.",
  "home.aiTruth.item2.title": "AI 만으로 할 수 있는 것은 없다",
  "home.aiTruth.item2.content": "AI는 강력한 도구이지만, AI만으로는 완성된 프로젝트를 만들 수 없습니다. 기획, 설계, 테스트, 배포, 유지보수 등 모든 과정에서 사람의 판단과 개입이 필요합니다.",
  "home.aiTruth.item2.hint": "💡 AI는 코드를 작성할 수 있지만, 어떤 코드를 작성해야 하는지는 당신이 결정해야 합니다.",
  "home.aiTruth.item3.title": "저작권 문제",
  "home.aiTruth.item3.content": "AI가 생성한 코드의 저작권은 복잡한 문제입니다. 상업적으로 사용할 때는 라이선스를 신중하게 검토해야 합니다.",
  "home.aiTruth.item3.gpl": "이 프로젝트는 GPL 라이선스를 따릅니다.",
  "home.aiTruth.item3.hint": "오픈소스로 공유하면 법적 문제를 피하고 커뮤니티에 기여할 수 있습니다.",
  "home.title": "한바보 - AI 시대의 소셜 네트워크",
  "home.description.part1": "한바보는 AI와 함께 만드는 현대적인 소셜 네트워크 플랫폼입니다.",
  "home.description.linkText": "단톡방에 참여",
  "home.description.part2": "하여 함께 개발하고 아이디어를 나눠보세요!",
  "home.todo.title": "개발 로드맵",
  "home.todo.item1.label": "프로젝트 초기 설정",
  "home.todo.item1.description": "Svelte 5, Vite, Firebase 설정 완료",
  "home.todo.item2.label": "인증 시스템",
  "home.todo.item2.description": "Firebase Authentication 연동 완료",
  "home.todo.item3.label": "UI 컴포넌트",
  "home.todo.item3.description": "Web Components 기반 재사용 가능한 UI 구축",
  "home.todo.item3.subitem1": "Topbar, Sidebar, Layout 컴포넌트",
  "home.todo.item3.subitem2": "반응형 디자인 적용",
  "home.todo.item4.label": "게시판 기능 구현",
  "home.todo.item5.label": "채팅 기능",
  "home.todo.item5.subitem1": "실시간 1:1 채팅",
  "home.todo.item5.subitem2": "그룹 채팅방",
  "home.todo.item5.subitem3": "파일 공유",
  "home.todo.item5.subitem4": "읽음 표시",
  "home.todo.item6.label": "친구 관리",
  "home.todo.item6.subitem1": "친구 추가/삭제",
  "home.todo.item6.subitem2": "친구 목록 관리",
  "home.todo.item7.label": "알림 시스템",
  "home.todo.item7.subitem1": "실시간 푸시 알림",
  "home.overview.title": "프로젝트 개요",
  "home.overview.brand": "한바보",
  "home.overview.description": "는 지역 기반 소셜 모임을 위한 플랫폼입니다. 같은 지역의 사람들과 쉽게 연결되고, 모임을 만들고, 함께 활동할 수 있습니다.",
  "home.overview.badge1": "실시간 채팅",
  "home.overview.badge2": "지역 모임",
  "home.overview.badge3": "친구 관리",
  "home.overview.badge4": "커뮤니티 게시판",
  "home.aiChange.title": "AI 시대의 변화와 성장",
  "home.aiChange.description": "AI는 개발의 패러다임을 바꾸고 있습니다. 이제 누구나 아이디어만 있다면 AI의 도움을 받아 실제 서비스를 만들 수 있습니다.",
  "home.aiChange.emphasis": "중요한 것은 AI를 사용하는 방법이 아니라,",
  "home.aiChange.highlight": "무엇을 만들 것인가",
  "home.aiChange.conclusio": "에 대한 명확한 비전입니다.",
  "home.aiChange.hint": "이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다.",
  "phoneLogin.title": "전화번호로 로그인",
  "phoneLogin.description": "전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.",
  "phoneLogin.countryLabel": "국가 선택",
  "phoneLogin.phoneLabel": "전화번호",
  "phoneLogin.phonePlaceholder": "1012345678",
  "phoneLogin.phoneHint": "숫자만 입력해주세요 (국가 코드 제외)",
  "phoneLogin.sendCode": "인증 코드 전송",
  "phoneLogin.sending": "전송 중...",
  "phoneLogin.codeTitle": "인증 코드 입력",
  "phoneLogin.codeDescription": "{phone}로 전송된 6자리 인증 코드를 입력해주세요.",
  "phoneLogin.codeLabel": "인증 코드",
  "phoneLogin.codePlaceholder": "123456",
  "phoneLogin.codeHint": "6자리 숫자를 입력해주세요",
  "phoneLogin.verifying": "확인 중...",
  "phoneLogin.verify": "로그인",
  "phoneLogin.back": "이전으로",
  "phoneLogin.resendHint": "인증 코드를 받지 못하셨나요?",
  "phoneLogin.resendLink": "다시 전송하기",
  "phoneLogin.error.invalidPhone": "올바른 전화번호를 입력해주세요 (6-15자리 숫자)",
  "phoneLogin.error.invalidCode": "6자리 인증 코드를 입력해주세요.",
  "phoneLogin.error.wrongCode": "잘못된 인증 코드입니다.",
  "phoneLogin.error.expiredCode": "인증 코드가 만료되었습니다. 다시 시도해주세요.",
  "phoneLogin.error.tooManyRequests": "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.",
  "phoneLogin.error.recaptchaExpired": "reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.",
  "phoneLogin.error.recaptchaInit": "reCAPTCHA 초기화에 실패했습니다.",
  "phoneLogin.error.smsFailed": "SMS 전송 실패: {error}"
}, _E = {
  프로젝트_명칭: "ハンバボ 0.2",
  웰컴: "SNSへようこそ!",
  로그인: "ログイン",
  회원가입: "登録",
  인사: "{name}さん、こんにちは!",
  언어선택: "言語選択",
  홈: "ホーム",
  프로필: "プロフィール",
  친구: "友達",
  채팅: "チャット",
  설정: "設定",
  로그아웃: "ログアウト",
  이메일: "メール",
  비밀번호: "パスワード",
  비밀번호확인: "パスワード確認",
  이름: "名前",
  닉네임: "ニックネーム",
  저장: "保存",
  취소: "キャンセル",
  확認: "確認",
  삭제: "削除",
  수정: "編集",
  검색: "検索",
  알림: "通知",
  새글작성: "新規投稿",
  댓글: "コメント",
  좋아요: "いいね",
  공유: "シェア",
  포럼: "フォーラム",
  사용자찾기: "ユーザー検索",
  내계정: "マイアカウント",
  프로필수정: "プロフィール編集",
  메뉴: "メニュー",
  퀵메뉴: "クイックメニュー",
  사용자목록: "ユーザーリスト",
  내프로필: "マイプロフィール",
  게시판: "掲示板",
  시작하기: "始める",
  회원정보수정: "会員情報修正",
  회원목록: "会員リスト",
  프로젝트GitHub: "プロジェクトGitHub",
  한바보참여단톡방: "ハンバボ参加チャット",
  개발일지: "開発日誌",
  언어설정: "言語設定",
  언어전환기능안내: "言語切替機能は近日追加されます。",
  빌드버전: "ビルドバージョン",
  카피레프트: "© コピーレフト",
  AI소개: "AIはこのような機能まで作ることができます。",
  통계: "統計",
  전체사용자: "総ユーザー数",
  전체점수: "総スコア",
  전체글: "総投稿数",
  채팅메시지: "チャットメッセージ",
  준비중: "準備中",
  통계실시간업데이트: "統計はリアルタイムで更新されます。",
  로그인성공: "✅ ログイン成功: {email}",
  오류: "❌ エラー: {error}",
  게시물클릭알림: `投稿クリック:

タイトル: {title}
作成者: {author}`,
  제목없음: "タイトルなし",
  익명: "匿名",
  게시물목록: "投稿リスト",
  정보: "情報",
  로그인회원가입: "ログイン / 登録",
  Firebase설명: "Firebase Authenticationを使用したログインフォームです。",
  게시물목록설명: "Firebase Realtime Databaseの投稿をリアルタイムで表示します。",
  로그인필요: "⚠️ 投稿を表示するには、まずログインしてください。",
  프로젝트정보: "プロジェクト情報",
  프로젝트개요: "🎯 プロジェクト概要",
  프로젝트개요설명: "Svelte 5ライブラリモードを使用してCustom Elements (Web Components)を開発するプロジェクトです。",
  기술스택: "🛠️ 技術スタック",
  포함컴포넌트: "📦 含まれるコンポーネント",
  사용방법: "🚀 使い方",
  특징: "💡 特徴",
  푸터: "© 2024 SNS Web Components | Powered by Svelte 5 & Firebase",
  "home.vibeBanner": "100% ✨ バイブコーディングで作られたプロジェクトです",
  "home.techStack.title": "🛠️ 技術スタック",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "カスタムエレメント",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "AndroidおよびiOSアプリ開発",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "リアルタイムデータベースとして選択",
  "home.aiTruth.title": "AI時代の真実",
  "home.aiTruth.item1.title": "AI時代に変わらないものはあなた",
  "home.aiTruth.item1.content": "AIがどれだけ発展しても、結局何かを作りたい人、問題を解決したい人はあなたです。AIはツールに過ぎず、主人公は依然としてあなたです。",
  "home.aiTruth.item2.title": "AIだけでできることはない",
  "home.aiTruth.item2.content": "AIは強力なツールですが、AIだけでは完成したプロジェクトを作ることはできません。企画、設計、テスト、デプロイ、メンテナンスなど、すべての過程で人間の判断と介入が必要です。",
  "home.aiTruth.item2.hint": "💡 AIはコードを書くことができますが、どんなコードを書くべきかはあなたが決めなければなりません。",
  "home.aiTruth.item3.title": "著作権問題",
  "home.aiTruth.item3.content": "AIが生成したコードの著作権は複雑な問題です。商業的に使用する際はライセンスを慎重に検討する必要があります。",
  "home.aiTruth.item3.gpl": "このプロジェクトはGPLライセンスに従います。",
  "home.aiTruth.item3.hint": "オープンソースとして共有すれば、法的問題を回避し、コミュニティに貢献できます。",
  "home.title": "ハンバボ - AI時代のソーシャルネットワーク",
  "home.description.part1": "ハンバボはAIと共に作る現代的なソーシャルネットワークプラットフォームです。",
  "home.description.linkText": "グループチャットに参加",
  "home.description.part2": "して一緒に開発しアイデアを共有しましょう！",
  "home.todo.title": "開発ロードマップ",
  "home.todo.item1.label": "プロジェクト初期設定",
  "home.todo.item1.description": "Svelte 5、Vite、Firebase設定完了",
  "home.todo.item2.label": "認証システム",
  "home.todo.item2.description": "Firebase Authentication連携完了",
  "home.todo.item3.label": "UIコンポーネント",
  "home.todo.item3.description": "Web Componentsベースの再利用可能なUI構築",
  "home.todo.item3.subitem1": "Topbar、Sidebar、Layoutコンポーネント",
  "home.todo.item3.subitem2": "レスポンシブデザイン適用",
  "home.todo.item4.label": "掲示板機能実装",
  "home.todo.item5.label": "チャット機能",
  "home.todo.item5.subitem1": "リアルタイム1:1チャット",
  "home.todo.item5.subitem2": "グループチャットルーム",
  "home.todo.item5.subitem3": "ファイル共有",
  "home.todo.item5.subitem4": "既読表示",
  "home.todo.item6.label": "友達管理",
  "home.todo.item6.subitem1": "友達追加/削除",
  "home.todo.item6.subitem2": "友達リスト管理",
  "home.todo.item7.label": "通知システム",
  "home.todo.item7.subitem1": "リアルタイムプッシュ通知",
  "home.overview.title": "プロジェクト概要",
  "home.overview.brand": "ハンバボ",
  "home.overview.description": "は地域ベースのソーシャル集会のためのプラットフォームです。同じ地域の人々と簡単に繋がり、集まりを作り、一緒に活動できます。",
  "home.overview.badge1": "リアルタイムチャット",
  "home.overview.badge2": "地域集会",
  "home.overview.badge3": "友達管理",
  "home.overview.badge4": "コミュニティ掲示板",
  "home.aiChange.title": "AI時代の変化と成長",
  "home.aiChange.description": "AIは開発のパラダイムを変えています。今や誰でもアイデアさえあればAIの助けを借りて実際のサービスを作ることができます。",
  "home.aiChange.emphasis": "重要なのはAIを使う方法ではなく、",
  "home.aiChange.highlight": "何を作るか",
  "home.aiChange.conclusion": "についての明確なビジョンです。",
  "home.aiChange.hint": "このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。",
  "phoneLogin.title": "電話番号でログイン",
  "phoneLogin.description": "電話番号を入力すると、SMSで認証コードを送信します。",
  "phoneLogin.countryLabel": "国を選択",
  "phoneLogin.phoneLabel": "電話番号",
  "phoneLogin.phonePlaceholder": "1012345678",
  "phoneLogin.phoneHint": "数字のみを入力してください（国コード除く）",
  "phoneLogin.sendCode": "認証コードを送信",
  "phoneLogin.sending": "送信中...",
  "phoneLogin.codeTitle": "認証コード入力",
  "phoneLogin.codeDescription": "{phone}に送信された6桁の認証コードを入力してください。",
  "phoneLogin.codeLabel": "認証コード",
  "phoneLogin.codePlaceholder": "123456",
  "phoneLogin.codeHint": "6桁の数字を入力してください",
  "phoneLogin.verifying": "確認中...",
  "phoneLogin.verify": "ログイン",
  "phoneLogin.back": "戻る",
  "phoneLogin.resendHint": "認証コードが届きませんでしたか？",
  "phoneLogin.resendLink": "再送信",
  "phoneLogin.error.invalidPhone": "有効な電話番号を入力してください（6-15桁の数字）",
  "phoneLogin.error.invalidCode": "6桁の認証コードを入力してください。",
  "phoneLogin.error.wrongCode": "無効な認証コードです。",
  "phoneLogin.error.expiredCode": "認証コードの有効期限が切れました。もう一度お試しください。",
  "phoneLogin.error.tooManyRequests": "リクエストが多すぎます。後でもう一度お試しください。",
  "phoneLogin.error.recaptchaExpired": "reCAPTCHAの有効期限が切れました。ページを更新してください。",
  "phoneLogin.error.recaptchaInit": "reCAPTCHAの初期化に失敗しました。",
  "phoneLogin.error.smsFailed": "SMS送信失敗: {error}"
}, gE = {
  프로젝트_명칭: "韩芭芭 0.2",
  웰컴: "欢迎来到SNS!",
  로그인: "登录",
  회원가입: "注册",
  인사: "{name}，你好!",
  언어선택: "语言选择",
  홈: "首页",
  프로필: "个人资料",
  친구: "朋友",
  채팅: "聊天",
  설정: "设置",
  로그아웃: "退出",
  이메일: "邮箱",
  비밀번호: "密码",
  비밀번호확인: "确认密码",
  이름: "姓名",
  닉네임: "昵称",
  저장: "保存",
  취소: "取消",
  확认: "确认",
  삭제: "删除",
  수정: "编辑",
  검색: "搜索",
  알림: "通知",
  새글作成: "新帖子",
  댓글: "评论",
  좋아요: "点赞",
  공유: "分享",
  포럼: "论坛",
  사용자찾기: "查找用户",
  내계정: "我的账户",
  프로필수정: "编辑资料",
  메뉴: "菜单",
  퀵메뉴: "快捷菜单",
  사용자목록: "用户列表",
  내프로필: "我的资料",
  게시판: "论坛",
  시작하기: "开始",
  회원정보수정: "修改会员信息",
  회원목록: "会员列表",
  프로젝트GitHub: "项目GitHub",
  한바보참여단톡방: "加入韩芭芭聊天",
  개발일지: "开发日志",
  언어설정: "语言设置",
  언어전환기능안내: "语言切换功能即将推出。",
  빌드버전: "构建版本",
  카피레프트: "© Copyleft",
  AI소개: "AI可以制作这样的功能。",
  통계: "统计",
  전체사용자: "总用户数",
  전체점수: "总分数",
  전체글: "总帖子",
  채팅메시지: "聊天消息",
  준비중: "即将推出",
  통계실시간업데이트: "统计数据实时更新。",
  로그인성공: "✅ 登录成功: {email}",
  오류: "❌ 错误: {error}",
  게시물클릭알림: `点击帖子:

标题: {title}
作者: {author}`,
  제목없음: "无标题",
  익명: "匿名",
  게시물목록: "帖子列表",
  정보: "信息",
  로그인회원가입: "登录 / 注册",
  Firebase설명: "使用Firebase Authentication的登录表单。",
  게시물목록설명: "实时显示Firebase Realtime Database的帖子。",
  로그인필요: "⚠️ 请先登录以查看帖子。",
  프로젝트정보: "项目信息",
  프로젝트개요: "🎯 项目概述",
  프로젝트개요설명: "使用Svelte 5库模式开发Custom Elements (Web Components)的项目。",
  기술스택: "🛠️ 技术栈",
  포함컴포넌트: "📦 包含的组件",
  사용방법: "🚀 使用方法",
  특징: "💡 特点",
  푸터: "© 2024 SNS Web Components | Powered by Svelte 5 & Firebase",
  "home.vibeBanner": "100% ✨ 使用Vibe编码制作的项目",
  "home.techStack.title": "🛠️ 技术栈",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "自定义元素",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android和iOS应用开发",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "选择作为实时数据库",
  "home.aiTruth.title": "AI时代的真相",
  "home.aiTruth.item1.title": "AI时代不变的是你",
  "home.aiTruth.item1.content": "无论AI如何发展，最终想要创造某物、解决问题的人是你。AI只是工具，主角仍然是你。",
  "home.aiTruth.item2.title": "仅靠AI无法做成任何事",
  "home.aiTruth.item2.content": "AI是强大的工具，但仅凭AI无法创建完整的项目。规划、设计、测试、部署、维护等所有过程都需要人的判断和干预。",
  "home.aiTruth.item2.hint": "💡 AI可以编写代码，但应该编写什么代码需要你来决定。",
  "home.aiTruth.item3.title": "版权问题",
  "home.aiTruth.item3.content": "AI生成代码的版权是一个复杂的问题。商业使用时必须仔细审查许可证。",
  "home.aiTruth.item3.gpl": "本项目遵循GPL许可证。",
  "home.aiTruth.item3.hint": "以开源方式分享可以避免法律问题并为社区做出贡献。",
  "home.title": "韩芭芭 - AI时代的社交网络",
  "home.description.part1": "韩芭芭是与AI一起创建的现代社交网络平台。",
  "home.description.linkText": "加入群聊",
  "home.description.part2": "一起开发和分享想法！",
  "home.todo.title": "开发路线图",
  "home.todo.item1.label": "项目初始设置",
  "home.todo.item1.description": "Svelte 5、Vite、Firebase设置完成",
  "home.todo.item2.label": "认证系统",
  "home.todo.item2.description": "Firebase Authentication集成完成",
  "home.todo.item3.label": "UI组件",
  "home.todo.item3.description": "构建基于Web Components的可重用UI",
  "home.todo.item3.subitem1": "Topbar、Sidebar、Layout组件",
  "home.todo.item3.subitem2": "应用响应式设计",
  "home.todo.item4.label": "实现论坛功能",
  "home.todo.item5.label": "聊天功能",
  "home.todo.item5.subitem1": "实时1:1聊天",
  "home.todo.item5.subitem2": "群聊室",
  "home.todo.item5.subitem3": "文件共享",
  "home.todo.item5.subitem4": "已读标记",
  "home.todo.item6.label": "好友管理",
  "home.todo.item6.subitem1": "添加/删除好友",
  "home.todo.item6.subitem2": "好友列表管理",
  "home.todo.item7.label": "通知系统",
  "home.todo.item7.subitem1": "实时推送通知",
  "home.overview.title": "项目概述",
  "home.overview.brand": "韩芭芭",
  "home.overview.description": "是基于地区的社交聚会平台。轻松连接同一地区的人们，创建聚会，一起活动。",
  "home.overview.badge1": "实时聊天",
  "home.overview.badge2": "地区聚会",
  "home.overview.badge3": "好友管理",
  "home.overview.badge4": "社区论坛",
  "home.aiChange.title": "AI时代的变化与成长",
  "home.aiChange.description": "AI正在改变开发的范式。现在任何有想法的人都可以借助AI的帮助创建实际服务。",
  "home.aiChange.emphasis": "重要的不是如何使用AI，而是",
  "home.aiChange.highlight": "要构建什么",
  "home.aiChange.conclusion": "- 拥有明确的愿景。",
  "home.aiChange.hint": "本项目与AI合作创建。所有代码都与Claude一起编写。",
  "phoneLogin.title": "手机号码登录",
  "phoneLogin.description": "输入手机号码，我们将通过短信发送验证码。",
  "phoneLogin.countryLabel": "选择国家",
  "phoneLogin.phoneLabel": "手机号码",
  "phoneLogin.phonePlaceholder": "1012345678",
  "phoneLogin.phoneHint": "仅输入数字（不含国家代码）",
  "phoneLogin.sendCode": "发送验证码",
  "phoneLogin.sending": "发送中...",
  "phoneLogin.codeTitle": "输入验证码",
  "phoneLogin.codeDescription": "请输入发送到{phone}的6位验证码。",
  "phoneLogin.codeLabel": "验证码",
  "phoneLogin.codePlaceholder": "123456",
  "phoneLogin.codeHint": "请输入6位数字",
  "phoneLogin.verifying": "验证中...",
  "phoneLogin.verify": "登录",
  "phoneLogin.back": "返回",
  "phoneLogin.resendHint": "没有收到验证码？",
  "phoneLogin.resendLink": "重新发送",
  "phoneLogin.error.invalidPhone": "请输入有效的手机号码（6-15位数字）",
  "phoneLogin.error.invalidCode": "请输入6位验证码。",
  "phoneLogin.error.wrongCode": "无效的验证码。",
  "phoneLogin.error.expiredCode": "验证码已过期。请重试。",
  "phoneLogin.error.tooManyRequests": "请求过多。请稍后再试。",
  "phoneLogin.error.recaptchaExpired": "reCAPTCHA已过期。请刷新页面。",
  "phoneLogin.error.recaptchaInit": "reCAPTCHA初始化失败。",
  "phoneLogin.error.smsFailed": "短信发送失败: {error}"
}, ua = { en: pE, ko: mE, ja: _E, zh: gE };
function Ya(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function _p() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = Ya(e);
    if (n !== "en") return n;
  }
  return "en";
}
function vE(t) {
  let e = Ya(t) || _p();
  function n(s) {
    e = Ya(s);
  }
  function i() {
    return e;
  }
  function r(s, o = {}) {
    return ((ua[e] ?? ua.en)[s] ?? ua.en[s] ?? s).replace(/\{(\w+)\}/g, (c, d) => o[d] ?? "");
  }
  return { t: r, setLocale: n, getLocale: i };
}
const gp = _p(), yE = vE(gp), bE = is(gp), uc = t_(
  bE,
  (t) => (e, n = {}) => yE.t(e, n)
);
var wE = /* @__PURE__ */ j("<span> </span>"), EE = /* @__PURE__ */ j('<img alt="프로필" class="avatar-image svelte-38psow"/>'), IE = /* @__PURE__ */ j('<div class="avatar-fallback svelte-38psow"> </div>'), CE = /* @__PURE__ */ j('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'), TE = /* @__PURE__ */ j('<img class="avatar-image svelte-38psow"/>'), SE = /* @__PURE__ */ j('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), kE = /* @__PURE__ */ j('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), AE = /* @__PURE__ */ j('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), RE = /* @__PURE__ */ j('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');
const PE = {
  hash: "svelte-38psow",
  code: `\r
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
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`
};
function NE(t, e) {
  Dn(e, !0), ui(t, PE);
  const n = () => Mr(cc, "$user", r), i = () => Mr(uc, "$t", r), [r, s] = dl();
  let o = /* @__PURE__ */ he(!1), a = /* @__PURE__ */ he(null);
  function l() {
    v(a) && (v(a).classList.remove("logo-animate-active"), v(a).offsetWidth, v(a).classList.add("logo-animate-active"), setTimeout(
      () => {
        v(a)?.classList.remove("logo-animate-active");
      },
      600
    ));
  }
  async function c() {
    if ((await fE()).success) {
      const w = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(w);
    }
    L(o, !1);
  }
  function d() {
    return n()?.displayName ? n().displayName.charAt(0).toUpperCase() : n()?.email ? n().email.charAt(0).toUpperCase() : "U";
  }
  function h() {
    L(o, !v(o));
  }
  function u(O) {
    const w = document.querySelector(".dropdown-menu"), I = document.querySelector(".dropdown-trigger");
    w && !w.contains(O.target) && !I?.contains(O.target) && L(o, !1);
  }
  bo(() => {
    const O = setTimeout(
      () => {
        l();
      },
      500
    ), w = setInterval(
      () => {
        l();
      },
      1e4
    );
    return document.addEventListener("click", u), () => {
      clearTimeout(O), clearInterval(w), document.removeEventListener("click", u);
    };
  });
  var f = RE(), p = _(f), g = _(p), E = _(g);
  ns(E, 5, () => i()("프로젝트_명칭").split(""), wo, (O, w, I) => {
    var b = wE();
    Dr(b, 1, `logo-char logo-char-${I + 1}`, "svelte-38psow");
    var D = _(b, !0);
    m(b), ce(() => R(D, v(w))), x(O, b);
  }), m(E), m(g), jd(g, (O) => L(a, O), () => v(a));
  var S = y(g, 2), T = _(S);
  {
    var k = (O) => {
      var w = kE(), I = fe(w), b = _(I), D = _(b);
      _r(D, { size: 16 });
      var N = y(D, 2), q = _(N, !0);
      m(N), m(b);
      var M = y(b, 2), G = _(M);
      En(G, { size: 16 });
      var X = y(G, 2), W = _(X, !0);
      m(X), m(M);
      var Q = y(M, 2), ge = _(Q);
      Yr(ge, { size: 16 });
      var re = y(ge, 2), Z = _(re, !0);
      m(re), m(Q);
      var de = y(Q, 2), ee = _(de);
      ee.__click = h;
      var Ie = _(ee), ve = _(Ie);
      {
        var Re = (ye) => {
          var me = EE();
          ce(() => Te(me, "src", n().photoURL)), x(ye, me);
        }, z = (ye) => {
          var me = IE(), at = _(me, !0);
          m(me), ce((Lt) => R(at, Lt), [d]), x(ye, me);
        };
        ke(ve, (ye) => {
          n()?.photoURL ? ye(Re) : ye(z, !1);
        });
      }
      m(Ie);
      var se = y(Ie, 2), ae = _(se, !0);
      m(se), m(ee);
      var Fe = y(ee, 2);
      {
        var Ue = (ye) => {
          var me = CE(), at = _(me), Lt = _(at, !0);
          m(at);
          var Wn = y(at, 4), Hn = _(Wn);
          Jn(Hn, { size: 16 });
          var Vn = y(Hn, 2), _i = _(Vn, !0);
          m(Vn), m(Wn);
          var jn = y(Wn, 4);
          jn.__click = c;
          var Et = _(jn);
          dp(Et, { size: 16 });
          var It = y(Et, 2), Ot = _(It, !0);
          m(It), m(jn), m(me), ce(
            (Gt, pn, zn) => {
              R(Lt, Gt), R(_i, pn), R(Ot, zn);
            },
            [() => i()("내계정"), () => i()("프로필수정"), () => i()("로그아웃")]
          ), x(ye, me);
        };
        ke(Fe, (ye) => {
          v(o) && ye(Ue);
        });
      }
      m(de);
      var oe = y(de, 2), Ce = _(oe);
      gr(Ce, { size: 24 }), m(oe), m(I);
      var Ye = y(I, 2), pe = _(Ye), Qe = _(pe);
      _r(Qe, { size: 20 }), m(pe);
      var tt = y(pe, 2), fn = _(tt);
      Yr(fn, { size: 20 }), m(tt);
      var qt = y(tt, 2), _s = _(qt);
      En(_s, { size: 20 }), m(qt);
      var pi = y(qt, 2), mi = _(pi), tr = _(mi);
      {
        var Uo = (ye) => {
          var me = TE();
          ce(
            (at) => {
              Te(me, "src", n().photoURL), Te(me, "alt", at);
            },
            [() => i()("프로필")]
          ), x(ye, me);
        }, gs = (ye) => {
          var me = SE(), at = _(me, !0);
          m(me), ce((Lt) => R(at, Lt), [d]), x(ye, me);
        };
        ke(tr, (ye) => {
          n()?.photoURL ? ye(Uo) : ye(gs, !1);
        });
      }
      m(mi), m(pi);
      var nr = y(pi, 2), ir = _(nr);
      gr(ir, { size: 24 }), m(nr), m(Ye), ce(
        (ye, me, at, Lt, Wn, Hn, Vn, _i, jn) => {
          R(q, ye), R(W, me), R(Z, at), R(ae, n()?.displayName || n()?.email), Te(oe, "title", Lt), Te(pe, "title", Wn), Te(tt, "title", Hn), Te(qt, "title", Vn), Te(pi, "title", _i), Te(nr, "title", jn);
        },
        [
          () => i()("포럼"),
          () => i()("채팅"),
          () => i()("사용자찾기"),
          () => i()("메뉴"),
          () => i()("포럼"),
          () => i()("사용자찾기"),
          () => i()("채팅"),
          () => i()("프로필"),
          () => i()("메뉴")
        ]
      ), x(O, w);
    }, P = (O) => {
      var w = AE(), I = fe(w), b = _(I), D = _(b);
      _r(D, { size: 16 });
      var N = y(D, 2), q = _(N, !0);
      m(N), m(b);
      var M = y(b, 2), G = _(M);
      En(G, { size: 16 });
      var X = y(G, 2), W = _(X, !0);
      m(X), m(M);
      var Q = y(M, 2), ge = _(Q, !0);
      m(Q);
      var re = y(Q, 2), Z = _(re);
      gr(Z, { size: 20 }), m(re), m(I);
      var de = y(I, 2), ee = _(de), Ie = _(ee);
      _r(Ie, { size: 20 }), m(ee);
      var ve = y(ee, 2), Re = _(ve);
      En(Re, { size: 20 }), m(ve);
      var z = y(ve, 2), se = _(z);
      Jn(se, { size: 20 }), m(z);
      var ae = y(z, 2), Fe = _(ae);
      gr(Fe, { size: 24 }), m(ae), m(de), ce(
        (Ue, oe, Ce, Ye, pe, Qe, tt, fn) => {
          R(q, Ue), R(W, oe), R(ge, Ce), Te(re, "title", Ye), Te(ee, "title", pe), Te(ve, "title", Qe), Te(z, "title", tt), Te(ae, "title", fn);
        },
        [
          () => i()("포럼"),
          () => i()("채팅"),
          () => i()("로그인"),
          () => i()("메뉴"),
          () => i()("포럼"),
          () => i()("채팅"),
          () => i()("로그인"),
          () => i()("메뉴")
        ]
      ), x(O, w);
    };
    ke(T, (O) => {
      n() ? O(k) : O(P, !1);
    });
  }
  m(S), m(p), m(f), x(t, f), Mn(), s();
}
ts(["click"]);
customElements.define("sns-topbar", _e(NE, {}, [], [], !0));
var xE = /* @__PURE__ */ j('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), LE = /* @__PURE__ */ j('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), OE = /* @__PURE__ */ j('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const DE = {
  hash: "svelte-najsij",
  code: `\r
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
  }`
};
function ME(t, e) {
  Dn(e, !1), ui(t, DE);
  const n = () => Mr(uc, "$t", r), i = () => Mr(cc, "$user", r), [r, s] = dl();
  zd();
  var o = OE(), a = _(o), l = _(a), c = _(l, !0);
  m(l);
  var d = y(l, 2), h = _(d), u = _(h);
  cp(u, {
    size: (
      /**
      * 왼쪽 사이드바 컴포넌트 (Web Component)
      *
      * 퀵메뉴 링크와 인증 상태에 따른 빠른 접근 링크를 제공합니다.
      *
      * 사용법:
      * <sns-left-sidebar></sns-left-sidebar>
      */
      20
    )
  });
  var f = y(u, 2), p = _(f, !0);
  m(f), m(h);
  var g = y(h, 2), E = _(g);
  En(E, { size: 20 });
  var S = y(E, 2), T = _(S, !0);
  m(S), m(g);
  var k = y(g, 2), P = _(k);
  Yr(P, { size: 20 });
  var O = y(P, 2), w = _(O, !0);
  m(O), m(k);
  var I = y(k, 2), b = _(I);
  Jn(b, { size: 20 });
  var D = y(b, 2), N = _(D, !0);
  m(D), m(I);
  var q = y(I, 2), M = _(q);
  lc(M, { size: 20 });
  var G = y(M, 2), X = _(G, !0);
  m(G), m(q), m(d);
  var W = y(d, 4), Q = _(W), ge = _(Q, !0);
  m(Q);
  var re = y(Q, 2), Z = _(re);
  {
    var de = (Et) => {
      var It = xE(), Ot = _(It);
      Jn(Ot, { size: 16 });
      var Gt = y(Ot, 2), pn = _(Gt, !0);
      m(Gt), m(It), ce((zn) => R(pn, zn), [() => n()("회원정보수정")]), x(Et, It);
    }, ee = (Et) => {
      var It = LE(), Ot = fe(It), Gt = _(Ot);
      up(Gt, { size: 16 });
      var pn = y(Gt, 2), zn = _(pn, !0);
      m(pn), m(Ot);
      var vs = y(Ot, 2), ys = _(vs);
      Jn(ys, { size: 16 });
      var bs = y(ys, 2), Wo = _(bs, !0);
      m(bs), m(vs), ce(
        (Ho, Vo) => {
          R(zn, Ho), R(Wo, Vo);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), x(Et, It);
    };
    ke(Z, (Et) => {
      i() ? Et(de) : Et(ee, !1);
    });
  }
  m(re), m(W);
  var Ie = y(W, 4), ve = _(Ie), Re = _(ve);
  Yr(Re, { size: 16 });
  var z = y(Re, 2), se = _(z, !0);
  m(z), m(ve);
  var ae = y(ve, 2), Fe = y(_(ae), 2), Ue = _(Fe, !0);
  m(Fe);
  var oe = y(Fe, 2);
  Ka(oe, { size: 12, class: "external-icon" }), m(ae);
  var Ce = y(ae, 2), Ye = _(Ce);
  En(Ye, { size: 16 });
  var pe = y(Ye, 2), Qe = _(pe, !0);
  m(pe);
  var tt = y(pe, 2);
  Ka(tt, { size: 12, class: "external-icon" }), m(Ce);
  var fn = y(Ce, 2), qt = _(fn);
  ap(qt, { size: 16 });
  var _s = y(qt, 2), pi = _(_s, !0);
  m(_s), m(fn), m(Ie);
  var mi = y(Ie, 2), tr = _(mi), Uo = _(tr, !0);
  m(tr);
  var gs = y(tr, 2), nr = _(gs, !0);
  m(gs), m(mi);
  var ir = y(mi, 2), ye = _(ir), me = _(ye), at = _(me, !0);
  m(me);
  var Lt = y(me, 2), Wn = _(Lt, !0);
  m(Lt), m(ye), m(ir);
  var Hn = y(ir, 2), Vn = _(Hn), _i = _(Vn, !0), jn = y(_i, 2);
  m(Vn), m(Hn), m(a), m(o), ce(
    (Et, It, Ot, Gt, pn, zn, vs, ys, bs, Wo, Ho, Vo, vp, yp, bp, wp, Ep) => {
      R(c, Et), R(p, It), R(T, Ot), R(w, Gt), R(N, pn), R(X, zn), R(ge, vs), R(se, ys), R(Ue, bs), R(Qe, Wo), R(pi, Ho), R(Uo, Vo), R(nr, vp), R(at, yp), R(Wn, bp), R(_i, wp), R(jn, ` ${Ep ?? ""}`);
    },
    [
      () => n()("퀵메뉴"),
      () => n()("홈"),
      () => n()("채팅"),
      () => n()("사용자목록"),
      () => n()("내프로필"),
      () => n()("게시판"),
      () => n()("시작하기"),
      () => n()("회원목록"),
      () => n()("프로젝트GitHub"),
      () => n()("한바보참여단톡방"),
      () => n()("개발일지"),
      () => n()("언어설정"),
      () => n()("언어전환기능안내"),
      () => n()("빌드버전"),
      () => (/* @__PURE__ */ new Date()).toLocaleString("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !0
      }),
      () => n()("카피레프트"),
      () => n()("AI소개")
    ]
  ), x(t, o), Mn(), s();
}
customElements.define("sns-left-sidebar", _e(ME, {}, [], [], !0));
var $E = /* @__PURE__ */ j('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const FE = {
  hash: "svelte-3epon2",
  code: `\r
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
  }`
};
function UE(t, e) {
  Dn(e, !0), ui(t, FE);
  const n = () => Mr(uc, "$t", i), [i, r] = dl();
  let s = /* @__PURE__ */ he(Qt({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = $E(), a = _(o), l = _(a), c = _(l, !0);
  m(l);
  var d = y(l, 2), h = _(d), u = _(h), f = _(u);
  Jn(f, { size: 20 }), m(u);
  var p = y(u, 2), g = _(p), E = _(g, !0);
  m(g);
  var S = y(g, 2), T = _(S, !0);
  m(S), m(p), m(h);
  var k = y(h, 2), P = _(k), O = _(P);
  pp(O, { size: 20 }), m(P);
  var w = y(P, 2), I = _(w), b = _(I, !0);
  m(I);
  var D = y(I, 2), N = _(D, !0);
  m(D), m(w), m(k);
  var q = y(k, 2), M = _(q), G = _(M);
  lc(G, { size: 20 }), m(M);
  var X = y(M, 2), W = _(X), Q = _(W, !0);
  m(W);
  var ge = y(W, 2), re = _(ge, !0);
  m(ge);
  var Z = y(ge, 2), de = _(Z, !0);
  m(Z), m(X), m(q);
  var ee = y(q, 2), Ie = _(ee), ve = _(Ie);
  En(ve, { size: 20 }), m(Ie);
  var Re = y(Ie, 2), z = _(Re), se = _(z, !0);
  m(z);
  var ae = y(z, 2), Fe = _(ae, !0);
  m(ae), m(Re), m(ee), m(d);
  var Ue = y(d, 2), oe = _(Ue, !0);
  m(Ue), m(a), m(o), ce(
    (Ce, Ye, pe, Qe, tt, fn, qt) => {
      R(c, Ce), R(E, Ye), R(T, v(s).totalUsers), R(b, pe), R(N, v(s).totalScore), R(Q, Qe), R(re, v(s).totalPosts), R(de, tt), R(se, fn), R(Fe, v(s).totalMessages), R(oe, qt);
    },
    [
      () => n()("통계"),
      () => n()("전체사용자"),
      () => n()("전체점수"),
      () => n()("전체글"),
      () => n()("준비중"),
      () => n()("채팅메시지"),
      () => n()("통계실시간업데이트")
    ]
  ), x(t, o), Mn(), r();
}
customElements.define("sns-right-sidebar", _e(UE, {}, [], [], !0));
var WE = /* @__PURE__ */ j('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const HE = {
  hash: "svelte-um1xbq",
  code: `\r
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
  }`
};
function VE(t, e) {
  ui(t, HE);
  var n = WE(), i = _(n), r = y(i, 2), s = _(r);
  Dr(s, 1, "left-sidebar svelte-um1xbq");
  var o = y(s, 2), a = _(o);
  Me(a, e, "default", {}), m(o);
  var l = y(o, 2);
  Dr(l, 1, "right-sidebar svelte-um1xbq"), m(r), m(n), x(t, n);
}
customElements.define("sns-layout", _e(VE, {}, ["default"], [], !0));
var jE = /* @__PURE__ */ j('<div class="icon-container svelte-m3h71q"> </div>'), zE = /* @__PURE__ */ j('<p class="hint-box svelte-m3h71q"> </p>'), BE = /* @__PURE__ */ j('<p class="gpl-box svelte-m3h71q"> </p>'), qE = /* @__PURE__ */ j('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'), GE = /* @__PURE__ */ j('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'), KE = /* @__PURE__ */ j('<div class="accordion svelte-m3h71q"></div>');
const YE = {
  hash: "svelte-m3h71q",
  code: `\r
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
  }`
};
function QE(t, e) {
  Dn(e, !0), ui(t, YE);
  let n = _t(e, "items", 7, "[]"), i = _t(e, "type", 7, "single"), r = _t(e, "collapsible", 7, !0), s = /* @__PURE__ */ fa(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ fa(() => () => {
    const u = r();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ he(Qt(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(v(a));
    i() === "single" ? f.has(u) ? v(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), L(a, f, !0);
  }
  function c(u) {
    return v(a).has(u);
  }
  var d = {
    get items() {
      return n();
    },
    set items(u = "[]") {
      n(u), ct();
    },
    get type() {
      return i();
    },
    set type(u = "single") {
      i(u), ct();
    },
    get collapsible() {
      return r();
    },
    set collapsible(u = !0) {
      r(u), ct();
    }
  }, h = KE();
  return ns(h, 21, () => v(s), wo, (u, f, p) => {
    var g = GE(), E = _(g);
    E.__click = () => l(p);
    var S = _(E), T = _(S);
    {
      var k = (q) => {
        var M = jE(), G = _(M, !0);
        m(M), ce(() => R(G, v(f).icon)), x(q, M);
      };
      ke(T, (q) => {
        v(f).icon && q(k);
      });
    }
    var P = y(T, 2), O = _(P, !0);
    m(P), m(S);
    var w = y(S, 2);
    let I;
    var b = _(w);
    lp(b, { size: 20 }), m(w), m(E);
    var D = y(E, 2);
    {
      var N = (q) => {
        var M = qE(), G = _(M), X = _(G, !0);
        m(G);
        var W = y(G, 2);
        {
          var Q = (Z) => {
            var de = zE(), ee = _(de, !0);
            m(de), ce(() => R(ee, v(f).hint)), x(Z, de);
          };
          ke(W, (Z) => {
            v(f).hint && Z(Q);
          });
        }
        var ge = y(W, 2);
        {
          var re = (Z) => {
            var de = BE(), ee = _(de, !0);
            m(de), ce(() => R(ee, v(f).gpl)), x(Z, de);
          };
          ke(ge, (Z) => {
            v(f).gpl && Z(re);
          });
        }
        m(M), ce(() => R(X, v(f).content)), x(q, M);
      };
      ke(D, (q) => {
        c(p) && q(N);
      });
    }
    m(g), ce(
      (q, M) => {
        Te(E, "aria-expanded", q), R(O, v(f).title), I = Dr(w, 1, "chevron svelte-m3h71q", null, I, M);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), x(u, g);
  }), m(h), x(t, h), Mn(d);
}
ts(["click"]);
customElements.define("sns-accordion", _e(QE, { items: {}, type: {}, collapsible: {} }, [], [], !0));
function eI(t) {
  const { subscribe: e, set: n } = is(null), i = Ut(Wt, t);
  return co(i, (r) => {
    const s = r.val();
    n(s);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => ac(i)
  };
}
async function tI(t, e) {
  try {
    const n = Ut(Wt, t);
    return await $o(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function nI(t, e) {
  try {
    const n = Ut(Wt, t);
    return await Ba(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function iI(t) {
  try {
    const e = Ut(Wt, t);
    return await A1(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function rI(t, e) {
  try {
    const n = Ut(Wt, t), i = k1(n);
    return await $o(i, e), { success: !0, key: i.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function sI(t) {
  try {
    const e = Ut(Wt, t), n = await R1(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function oI(t) {
  const e = Ut(Wt, `status/${t}`), n = Ut(Wt, ".info/connected");
  return co(n, (i) => {
    i.val() === !0 && ($o(e, {
      online: !0,
      lastSeen: Date.now()
    }), co(Ut(Wt, ".info/connected"), (r) => {
      r.val() || Ba(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    Ba(e, {
      online: !1,
      lastSeen: Date.now()
    }), ac(n);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  zi as auth,
  eI as createRealtimeStore,
  Wt as database,
  iI as deleteData,
  hE as loading,
  rI as pushData,
  sI as readData,
  oI as setupPresence,
  XE as signIn,
  fE as signOut,
  ZE as signUp,
  nI as updateData,
  cc as user,
  tI as writeData
};
