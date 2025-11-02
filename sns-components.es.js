typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const fo = 1, po = 2, ju = 4, Ep = 8, Ip = 16, Cp = 1, Tp = 2, Hu = 4, Sp = 8, kp = 16, Ap = 1, Rp = 2, Vu = "[", mo = "[!", Xa = "]", Lr = {}, Me = Symbol(), Pp = "http://www.w3.org/1999/xhtml", Np = "http://www.w3.org/2000/svg", xp = "@attach", zu = !1;
var Za = Array.isArray, Lp = Array.prototype.indexOf, el = Array.from, Os = Object.keys, Di = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Bu = Object.getOwnPropertyDescriptors, Op = Object.prototype, Dp = Array.prototype, tl = Object.getPrototypeOf, fc = Object.isExtensible;
function oi(t) {
  return typeof t == "function";
}
const Tn = () => {
};
function Mp(t) {
  return t();
}
function Ds(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function qu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function $p(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const ze = 2, nl = 4, _o = 8, cn = 16, un = 32, Mn = 64, go = 128, He = 1024, tt = 2048, dn = 4096, lt = 8192, tn = 16384, rl = 32768, Zn = 65536, pc = 1 << 17, Fp = 1 << 18, cr = 1 << 19, Gu = 1 << 20, _t = 256, Ms = 512, $s = 32768, fa = 1 << 21, il = 1 << 22, Qn = 1 << 23, $t = Symbol("$state"), sl = Symbol("legacy props"), Up = Symbol(""), wr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Wp = 1, ol = 3, qr = 8;
function Ku(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function jp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hp(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zp(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gp(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Kp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Jp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vo(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Zp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function at(t) {
  F = t;
}
let Y;
function Fe(t) {
  if (t === null)
    throw vo(), Lr;
  return Y = t;
}
function er() {
  return Fe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Vt(Y)
  );
}
function m(t) {
  if (F) {
    if (/* @__PURE__ */ Vt(Y) !== null)
      throw vo(), Lr;
    Y = t;
  }
}
function Kt(t = 1) {
  if (F) {
    for (var e = t, n = Y; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(n);
    Y = n;
  }
}
function Fs(t = !0) {
  for (var e = 0, n = Y; ; ) {
    if (n.nodeType === qr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Xa) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Vu || r === mo) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(n)
    );
    t && n.remove(), n = i;
  }
}
function Yu(t) {
  if (!t || t.nodeType !== qr)
    throw vo(), Lr;
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
let Gr = !1, em = !1;
function tm() {
  Gr = !0;
}
let Ee = null;
function Or(t) {
  Ee = t;
}
function hn(t, e = !1, n) {
  Ee = {
    p: Ee,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Gr && !e ? { s: null, u: null, $: [] } : null
  };
}
function fn(t) {
  var e = (
    /** @type {ComponentContext} */
    Ee
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      gd(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ee = e.p, t ?? /** @type {T} */
  {};
}
function Zi() {
  return !Gr || Ee !== null && Ee.l === null;
}
let Kn = [];
function Zu() {
  var t = Kn;
  Kn = [], Ds(t);
}
function $n(t) {
  if (Kn.length === 0 && !wi) {
    var e = Kn;
    queueMicrotask(() => {
      e === Kn && Zu();
    });
  }
  Kn.push(t);
}
function nm() {
  for (; Kn.length > 0; )
    Zu();
}
function ed(t) {
  var e = V;
  if (e === null)
    return K.f |= Qn, t;
  if ((e.f & rl) === 0) {
    if ((e.f & go) === 0)
      throw t;
    e.b.error(t);
  } else
    Dr(t, e);
}
function Dr(t, e) {
  for (; e !== null; ) {
    if ((e.f & go) !== 0)
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
const Is = /* @__PURE__ */ new Set();
let re = null, bi = null, Ct = null, Mt = [], yo = null, pa = !1, wi = !1;
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
  #r = 0;
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
    Mt = [], bi = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#i(r, n);
    this.is_fork || this.#c(), this.#r > 0 || this.is_fork ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (bi = this, re = null, mc(n.render_effects), mc(n.effects), bi = null, this.#l?.resolve()), Ct = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(e, n) {
    e.f ^= He;
    for (var r = e.first; r !== null; ) {
      var i = r.f, s = (i & (un | Mn)) !== 0, o = s && (i & He) !== 0, a = o || (i & lt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & go) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= He : (i & nl) !== 0 ? n.effects.push(r) : rs(r) && ((r.f & cn) !== 0 && n.block_effects.push(r), $i(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const n of e)
      ((n.f & tt) !== 0 ? this.#o : this.#a).push(n), Ve(n, He);
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
    re = this;
  }
  deactivate() {
    re = null, Ct = null;
  }
  flush() {
    if (this.activate(), Mt.length > 0) {
      if (td(), re !== null && re !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#e) e(this);
    this.#e.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const e of this.#t) e();
      this.#t.clear();
    }
    this.#n === 0 && this.#u();
  }
  #u() {
    if (Is.size > 1) {
      this.previous.clear();
      var e = Ct, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Is) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [a, l] of this.current) {
          if (i.current.has(a))
            if (n && l !== i.current.get(a))
              i.current.set(a, l);
            else
              continue;
          s.push(a);
        }
        if (s.length === 0)
          continue;
        const o = [...i.current.keys()].filter((a) => !this.current.has(a));
        if (o.length > 0) {
          const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const c of s)
            nd(c, o, a, l);
          if (Mt.length > 0) {
            re = i, i.apply();
            for (const c of Mt)
              i.#i(c, r);
            Mt = [], i.deactivate();
          }
        }
      }
      re = null, Ct = e;
    }
    this.committed = !0, Is.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const e of this.#o)
      Ve(e, tt), tr(e);
    for (const e of this.#a)
      Ve(e, dn), tr(e);
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
    if (re === null) {
      const e = re = new kt();
      Is.add(re), wi || kt.enqueue(() => {
        re === e && e.flush();
      });
    }
    return re;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    $n(e);
  }
  apply() {
  }
}
function st(t) {
  var e = wi;
  wi = !0;
  try {
    for (var n; ; ) {
      if (nm(), Mt.length === 0 && (re?.flush(), Mt.length === 0))
        return yo = null, /** @type {T} */
        n;
      td();
    }
  } finally {
    wi = e;
  }
}
function td() {
  var t = Tr;
  pa = !0;
  try {
    var e = 0;
    for (bc(!0); Mt.length > 0; ) {
      var n = kt.ensure();
      if (e++ > 1e3) {
        var r, i;
        rm();
      }
      n.process(Mt), Sn.clear();
    }
  } finally {
    pa = !1, bc(t), yo = null;
  }
}
function rm() {
  try {
    Bp();
  } catch (t) {
    Dr(t, yo);
  }
}
let Yt = null;
function mc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (tn | lt)) === 0 && rs(r) && (Yt = /* @__PURE__ */ new Set(), $i(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? bd(r) : r.fn = null), Yt?.size > 0)) {
        Sn.clear();
        for (const i of Yt) {
          if ((i.f & (tn | lt)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Yt.has(o) && (Yt.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (tn | lt)) === 0 && $i(l);
          }
        }
        Yt.clear();
      }
    }
    Yt = null;
  }
}
function nd(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & ze) !== 0 ? nd(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (il | cn)) !== 0 && (s & tt) === 0 && // we may have scheduled this one already
      rd(i, e, r) && (Ve(i, tt), tr(
        /** @type {Effect} */
        i
      ));
    }
}
function rd(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (e.includes(i))
        return !0;
      if ((i.f & ze) !== 0 && rd(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function tr(t) {
  for (var e = yo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (pa && e === V && (n & cn) !== 0)
      return;
    if ((n & (Mn | un)) !== 0) {
      if ((n & He) === 0) return;
      e.f ^= He;
    }
  }
  Mt.push(e);
}
function im(t) {
  let e = 0, n = xn(0), r;
  return () => {
    mm() && (v(n), wo(() => (e === 0 && (r = Ht(() => t(() => Ei(n)))), e += 1, () => {
      $n(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Ei(n));
      });
    })));
  };
}
var sm = Zn | cr | go;
function om(t, e, n) {
  new am(t, e, n);
}
class am {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = F ? Y : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #i = null;
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
  #y = im(() => (this.#h = xn(this.#f), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#e = e, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    V.b, this.#t = !!this.#r.pending, this.#o = Kr(() => {
      if (V.b = this, F) {
        const s = this.#n;
        er(), /** @type {Comment} */
        s.nodeType === qr && /** @type {Comment} */
        s.data === mo ? this.#w() : this.#b();
      } else {
        var i = this.#g();
        try {
          this.#a = Xe(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#d > 0 ? this.#_() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, sm), F && (this.#e = Y);
  }
  #b() {
    try {
      this.#a = Xe(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#i = Xe(() => e(this.#e)), kt.enqueue(() => {
      var n = this.#g();
      this.#a = this.#m(() => (kt.ensure(), Xe(() => this.#l(n)))), this.#d > 0 ? this.#_() : (Cr(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#t = !1);
    }));
  }
  #g() {
    var e = this.#e;
    return this.#t && (this.#u = gt(), this.#e.before(this.#u), e = this.#u), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #m(e) {
    var n = V, r = K, i = Ee;
    vt(this.#o), Ze(this.#o), Or(this.#o.ctx);
    try {
      return e();
    } catch (s) {
      return ed(s), null;
    } finally {
      vt(n), Ze(r), Or(i);
    }
  }
  #_() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#a !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), Id(this.#a, this.#c)), this.#i === null && (this.#i = Xe(() => e(this.#e)));
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
    this.#d += e, this.#d === 0 && (this.#t = !1, this.#i && Cr(this.#i, () => {
      this.#i = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#v(e), this.#f += e, this.#h && Mr(this.#h, this.#f);
  }
  get_effect_pending() {
    return this.#y(), v(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#p || !n && !r)
      throw e;
    this.#a && (Re(this.#a), this.#a = null), this.#i && (Re(this.#i), this.#i = null), this.#s && (Re(this.#s), this.#s = null), F && (Fe(
      /** @type {TemplateNode} */
      this.#n
    ), Kt(), Fe(Fs()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        Zp();
        return;
      }
      i = !0, s && Jp(), kt.ensure(), this.#f = 0, this.#s !== null && Cr(this.#s, () => {
        this.#s = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#m(() => (this.#p = !1, Xe(() => this.#l(this.#e)))), this.#d > 0 ? this.#_() : this.#t = !1;
    };
    var a = K;
    try {
      Ze(null), s = !0, n?.(e, o), s = !1;
    } catch (l) {
      Dr(l, this.#o && this.#o.parent);
    } finally {
      Ze(a);
    }
    r && $n(() => {
      this.#s = this.#m(() => {
        kt.ensure(), this.#p = !0;
        try {
          return Xe(() => {
            r(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Dr(
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
function id(t, e, n, r) {
  const i = Zi() ? es : al;
  if (n.length === 0 && t.length === 0) {
    r(e.map(i));
    return;
  }
  var s = re, o = (
    /** @type {Effect} */
    V
  ), a = lm();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ cm(c))).then((c) => {
      a();
      try {
        r([...e.map(i), ...c]);
      } catch (d) {
        (o.f & tn) === 0 && Dr(d, o);
      }
      s?.deactivate(), Us();
    }).catch((c) => {
      Dr(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), Us();
    }
  }) : l();
}
function lm() {
  var t = V, e = K, n = Ee, r = re;
  return function(s = !0) {
    vt(t), Ze(e), Or(n), s && r?.activate();
  };
}
function Us() {
  vt(null), Ze(null), Or(null);
}
// @__NO_SIDE_EFFECTS__
function es(t) {
  var e = ze | tt, n = K !== null && (K.f & ze) !== 0 ? (
    /** @type {Derived} */
    K
  ) : null;
  return V === null || n !== null && (n.f & _t) !== 0 ? e |= _t : V.f |= cr, {
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
      Me
    ),
    wv: 0,
    parent: n ?? V,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function cm(t, e) {
  let n = (
    /** @type {Effect | null} */
    V
  );
  n === null && jp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = xn(
    /** @type {V} */
    Me
  ), o = !K, a = /* @__PURE__ */ new Map();
  return ym(() => {
    var l = qu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === re && c.committed && c.deactivate(), Us();
      });
    } catch (u) {
      l.reject(u), Us();
    }
    var c = (
      /** @type {Batch} */
      re
    );
    if (o) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(wr), a.delete(c), a.set(c, l);
    }
    const h = (u, f = void 0) => {
      if (c.activate(), f)
        f !== wr && (s.f |= Qn, Mr(s, f));
      else {
        (s.f & Qn) !== 0 && (s.f ^= Qn), Mr(s, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(wr);
        }
      }
      o && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (u) => h(null, u || "unknown"));
  }), ts(() => {
    for (const l of a.values())
      l.reject(wr);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === i ? l(s) : c(i);
      }
      d.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ma(t) {
  const e = /* @__PURE__ */ es(t);
  return Cd(e), e;
}
// @__NO_SIDE_EFFECTS__
function al(t) {
  const e = /* @__PURE__ */ es(t);
  return e.equals = Xu, e;
}
function sd(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Re(
        /** @type {Effect} */
        e[n]
      );
  }
}
function um(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & ze) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ll(t) {
  var e, n = V;
  vt(um(t));
  try {
    t.f &= ~$s, sd(t), e = Ad(t);
  } finally {
    vt(n);
  }
  return e;
}
function od(t) {
  var e = ll(t);
  if (t.equals(e) || (t.v = e, t.wv = Sd()), !ur)
    if (Ct !== null)
      Ct.set(t, t.v);
    else {
      var n = (En || (t.f & _t) !== 0) && t.deps !== null ? dn : He;
      Ve(t, n);
    }
}
let _a = /* @__PURE__ */ new Set();
const Sn = /* @__PURE__ */ new Map();
let ad = !1;
function xn(t, e) {
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
function ee(t, e) {
  const n = xn(t);
  return Cd(n), n;
}
// @__NO_SIDE_EFFECTS__
function cl(t, e = !1, n = !0) {
  const r = xn(t);
  return e || (r.equals = Xu), Gr && n && Ee !== null && Ee.l !== null && (Ee.l.s ??= []).push(r), r;
}
function L(t, e, n = !1) {
  K !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Tt || (K.f & pc) !== 0) && Zi() && (K.f & (ze | cn | il | pc)) !== 0 && !nn?.includes(t) && Qp();
  let r = n ? Qt(e) : e;
  return Mr(t, r);
}
function Mr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ur ? Sn.set(t, e) : Sn.set(t, n), t.v = e;
    var r = kt.ensure();
    r.capture(t, n), (t.f & ze) !== 0 && ((t.f & tt) !== 0 && ll(
      /** @type {Derived} */
      t
    ), Ve(t, (t.f & _t) === 0 ? He : dn)), t.wv = Sd(), ld(t, tt), Zi() && V !== null && (V.f & He) !== 0 && (V.f & (un | Mn)) === 0 && (ft === null ? Em([t]) : ft.push(t)), !r.is_fork && _a.size > 0 && !ad && dm();
  }
  return e;
}
function dm() {
  ad = !1;
  const t = Array.from(_a);
  for (const e of t)
    (e.f & He) !== 0 && Ve(e, dn), rs(e) && $i(e);
  _a.clear();
}
function _c(t, e = 1) {
  var n = v(t), r = e === 1 ? n++ : n--;
  return L(t, n), r;
}
function Ei(t) {
  L(t, t.v + 1);
}
function ld(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Zi(), i = n.length, s = 0; s < i; s++) {
      var o = n[s], a = o.f;
      if (!(!r && o === V)) {
        var l = (a & tt) === 0;
        l && Ve(o, e), (a & ze) !== 0 ? (a & $s) === 0 && (o.f |= $s, ld(
          /** @type {Derived} */
          o,
          dn
        )) : l && ((a & cn) !== 0 && Yt !== null && Yt.add(
          /** @type {Effect} */
          o
        ), tr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Qt(t) {
  if (typeof t != "object" || t === null || $t in t)
    return t;
  const e = tl(t);
  if (e !== Op && e !== Dp)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Za(t), i = /* @__PURE__ */ ee(0), s = Jn, o = (a) => {
    if (Jn === s)
      return a();
    var l = K, c = Jn;
    Ze(null), Ec(s);
    var d = a();
    return Ze(l), Ec(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Kp();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ ee(c.value);
          return n.set(l, h), h;
        }) : L(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = o(() => /* @__PURE__ */ ee(Me));
            n.set(l, d), Ei(i);
          }
        } else
          L(c, Me), Ei(i);
        return !0;
      },
      get(a, l, c) {
        if (l === $t)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || en(a, l)?.writable) && (d = o(() => {
          var f = Qt(h ? a[l] : Me), p = /* @__PURE__ */ ee(f);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var u = v(d);
          return u === Me ? void 0 : u;
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
          if (h !== void 0 && u !== Me)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Me || Reflect.has(a, l);
        if (c !== void 0 || V !== null && (!d || en(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = d ? Qt(a[l]) : Me, f = /* @__PURE__ */ ee(u);
            return f;
          }), n.set(l, c));
          var h = v(c);
          if (h === Me)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), u = l in a;
        if (r && l === "length")
          for (var f = c; f < /** @type {Source<number>} */
          h.v; f += 1) {
            var p = n.get(f + "");
            p !== void 0 ? L(p, Me) : f in a && (p = o(() => /* @__PURE__ */ ee(Me)), n.set(f + "", p));
          }
        if (h === void 0)
          (!u || en(a, l)?.writable) && (h = o(() => /* @__PURE__ */ ee(void 0)), L(h, Qt(c)), n.set(l, h));
        else {
          u = h.v !== Me;
          var g = o(() => Qt(c));
          L(h, g);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, c), !u) {
          if (r && typeof l == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= S.v && L(S, T + 1);
          }
          Ei(i);
        }
        return !0;
      },
      ownKeys(a) {
        v(i);
        var l = Reflect.ownKeys(a).filter((h) => {
          var u = n.get(h);
          return u === void 0 || u.v !== Me;
        });
        for (var [c, d] of n)
          d.v !== Me && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Yp();
      }
    }
  );
}
function gc(t) {
  try {
    if (t !== null && typeof t == "object" && $t in t)
      return t[$t];
  } catch {
  }
  return t;
}
function hm(t, e) {
  return Object.is(gc(t), gc(e));
}
var vc, cd, ud, dd;
function ga() {
  if (vc === void 0) {
    vc = window, cd = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ud = en(e, "firstChild").get, dd = en(e, "nextSibling").get, fc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), fc(n) && (n.__t = void 0);
  }
}
function gt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function jt(t) {
  return ud.call(t);
}
// @__NO_SIDE_EFFECTS__
function Vt(t) {
  return dd.call(t);
}
function _(t, e) {
  if (!F)
    return /* @__PURE__ */ jt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ jt(Y)
  );
  if (n === null)
    n = Y.appendChild(gt());
  else if (e && n.nodeType !== ol) {
    var r = gt();
    return n?.before(r), Fe(r), r;
  }
  return Fe(n), n;
}
function he(t, e = !1) {
  if (!F) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ jt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Vt(n) : n;
  }
  if (e && Y?.nodeType !== ol) {
    var r = gt();
    return Y?.before(r), Fe(r), r;
  }
  return Y;
}
function y(t, e = 1, n = !1) {
  let r = F ? Y : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Vt(r);
  if (!F)
    return r;
  if (n && r?.nodeType !== ol) {
    var s = gt();
    return r === null ? i?.after(s) : r.before(s), Fe(s), s;
  }
  return Fe(r), /** @type {TemplateNode} */
  r;
}
function hd(t) {
  t.textContent = "";
}
function fd() {
  return !1;
}
function fm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, $n(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let yc = !1;
function pd() {
  yc || (yc = !0, document.addEventListener(
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
function bo(t) {
  var e = K, n = V;
  Ze(null), vt(null);
  try {
    return t();
  } finally {
    Ze(e), vt(n);
  }
}
function md(t, e, n, r = n) {
  t.addEventListener(e, () => bo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), pd();
}
function _d(t) {
  V === null && K === null && zp(), K !== null && (K.f & _t) !== 0 && V === null && Vp(), ur && Hp();
}
function pm(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function xt(t, e, n, r = !0) {
  var i = V;
  i !== null && (i.f & lt) !== 0 && (t |= lt);
  var s = {
    ctx: Ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | tt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      $i(s), s.f |= rl;
    } catch (l) {
      throw Re(s), l;
    }
  else e !== null && tr(s);
  if (r) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & cr) === 0 && (o = o.first, (t & cn) !== 0 && (t & Zn) !== 0 && o !== null && (o.f |= Zn)), o !== null && (o.parent = i, i !== null && pm(o, i), K !== null && (K.f & ze) !== 0 && (t & Mn) === 0)) {
      var a = (
        /** @type {Derived} */
        K
      );
      (a.effects ??= []).push(o);
    }
  }
  return s;
}
function mm() {
  return K !== null && !Tt;
}
function ts(t) {
  const e = xt(_o, null, !1);
  return Ve(e, He), e.teardown = t, e;
}
function va(t) {
  _d();
  var e = (
    /** @type {Effect} */
    V.f
  ), n = !K && (e & un) !== 0 && (e & rl) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ee
    );
    (r.e ??= []).push(t);
  } else
    return gd(t);
}
function gd(t) {
  return xt(nl | Gu, t, !1);
}
function _m(t) {
  return _d(), xt(_o | Gu, t, !0);
}
function gm(t) {
  kt.ensure();
  const e = xt(Mn | cr, t, !0);
  return () => {
    Re(e);
  };
}
function vm(t) {
  kt.ensure();
  const e = xt(Mn | cr, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Cr(e, () => {
      Re(e), r(void 0);
    }) : (Re(e), r(void 0));
  });
}
function ns(t) {
  return xt(nl, t, !1);
}
function ym(t) {
  return xt(il | cr, t, !0);
}
function wo(t, e = 0) {
  return xt(_o | e, t, !0);
}
function te(t, e = [], n = [], r = []) {
  id(r, e, n, (i) => {
    xt(_o, () => t(...i.map(v)), !0);
  });
}
function Kr(t, e = 0) {
  var n = xt(cn | e, t, !0);
  return n;
}
function Xe(t, e = !0) {
  return xt(un | cr, t, !0, e);
}
function vd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ur, r = K;
    wc(!0), Ze(null);
    try {
      e.call(null);
    } finally {
      wc(n), Ze(r);
    }
  }
}
function yd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && bo(() => {
      i.abort(wr);
    });
    var r = n.next;
    (n.f & Mn) !== 0 ? n.parent = null : Re(n, e), n = r;
  }
}
function bm(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & un) === 0 && Re(e), e = n;
  }
}
function Re(t, e = !0) {
  var n = !1;
  (e || (t.f & Fp) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (wm(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), yd(t, e && !n), Ws(t, 0), Ve(t, tn);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  vd(t);
  var i = t.parent;
  i !== null && i.first !== null && bd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function wm(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(t)
    );
    t.remove(), t = n;
  }
}
function bd(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Cr(t, e, n = !0) {
  var r = [];
  ul(t, r, !0), wd(r, () => {
    n && Re(t), e && e();
  });
}
function wd(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function ul(t, e, n) {
  if ((t.f & lt) === 0) {
    if (t.f ^= lt, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & Zn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & un) !== 0 && (t.f & cn) !== 0;
      ul(r, e, s ? n : !1), r = i;
    }
  }
}
function dl(t) {
  Ed(t, !0);
}
function Ed(t, e) {
  if ((t.f & lt) !== 0) {
    t.f ^= lt, (t.f & He) === 0 && (Ve(t, tt), tr(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Zn) !== 0 || (n.f & un) !== 0;
      Ed(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function Id(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(n)
    );
    e.append(n), n = i;
  }
}
let Tr = !1;
function bc(t) {
  Tr = t;
}
let ur = !1;
function wc(t) {
  ur = t;
}
let K = null, Tt = !1;
function Ze(t) {
  K = t;
}
let V = null;
function vt(t) {
  V = t;
}
let nn = null;
function Cd(t) {
  K !== null && (nn === null ? nn = [t] : nn.push(t));
}
let Ge = null, it = 0, ft = null;
function Em(t) {
  ft = t;
}
let Td = 1, Mi = 0, Jn = Mi;
function Ec(t) {
  Jn = t;
}
let En = !1;
function Sd() {
  return ++Td;
}
function rs(t) {
  var e = t.f;
  if ((e & tt) !== 0)
    return !0;
  if ((e & dn) !== 0) {
    var n = t.deps, r = (e & _t) !== 0;
    if (e & ze && (t.f &= ~$s), n !== null) {
      var i, s, o = (e & Ms) !== 0, a = r && V !== null && !En, l = n.length;
      if ((o || a) && (V === null || (V.f & tn) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          s = n[i], (o || !s?.reactions?.includes(c)) && (s.reactions ??= []).push(c);
        o && (c.f ^= Ms), a && d !== null && (d.f & _t) === 0 && (c.f ^= _t);
      }
      for (i = 0; i < l; i++)
        if (s = n[i], rs(
          /** @type {Derived} */
          s
        ) && od(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || V !== null && !En) && Ve(t, He);
  }
  return !1;
}
function kd(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !nn?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & ze) !== 0 ? kd(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? Ve(s, tt) : (s.f & He) !== 0 && Ve(s, dn), tr(
        /** @type {Effect} */
        s
      ));
    }
}
function Ad(t) {
  var e = Ge, n = it, r = ft, i = K, s = En, o = nn, a = Ee, l = Tt, c = Jn, d = t.f;
  Ge = /** @type {null | Value[]} */
  null, it = 0, ft = null, En = (d & _t) !== 0 && (Tt || !Tr || K === null), K = (d & (un | Mn)) === 0 ? t : null, nn = null, Or(t.ctx), Tt = !1, Jn = ++Mi, t.ac !== null && (bo(() => {
    t.ac.abort(wr);
  }), t.ac = null);
  try {
    t.f |= fa;
    var h = (
      /** @type {Function} */
      t.fn
    ), u = h(), f = t.deps;
    if (Ge !== null) {
      var p;
      if (Ws(t, it), f !== null && it > 0)
        for (f.length = it + Ge.length, p = 0; p < Ge.length; p++)
          f[it + p] = Ge[p];
      else
        t.deps = f = Ge;
      if (!En || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & ze) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = it; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && it < f.length && (Ws(t, it), f.length = it);
    if (Zi() && ft !== null && !Tt && f !== null && (t.f & (ze | dn | tt)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      ft.length; p++)
        kd(
          ft[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Mi++, ft !== null && (r === null ? r = ft : r.push(.../** @type {Source[]} */
    ft))), (t.f & Qn) !== 0 && (t.f ^= Qn), u;
  } catch (g) {
    return ed(g);
  } finally {
    t.f ^= fa, Ge = e, it = n, ft = r, K = i, En = s, nn = o, Or(a), Tt = l, Jn = c;
  }
}
function Im(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Lp.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & ze) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ge === null || !Ge.includes(e)) && (Ve(e, dn), (e.f & (_t | Ms)) === 0 && (e.f ^= Ms), sd(
    /** @type {Derived} **/
    e
  ), Ws(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ws(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Im(t, n[r]);
}
function $i(t) {
  var e = t.f;
  if ((e & tn) === 0) {
    Ve(t, He);
    var n = V, r = Tr;
    V = t, Tr = !0;
    try {
      (e & cn) !== 0 ? bm(t) : yd(t), vd(t);
      var i = Ad(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Td;
      var s;
      zu && em && (t.f & tt) !== 0 && t.deps;
    } finally {
      Tr = r, V = n;
    }
  }
}
async function Cm() {
  await Promise.resolve(), st();
}
function v(t) {
  var e = t.f, n = (e & ze) !== 0;
  if (K !== null && !Tt) {
    var r = V !== null && (V.f & tn) !== 0;
    if (!r && !nn?.includes(t)) {
      var i = K.deps;
      if ((K.f & fa) !== 0)
        t.rv < Mi && (t.rv = Mi, Ge === null && i !== null && i[it] === t ? it++ : Ge === null ? Ge = [t] : (!En || !Ge.includes(t)) && Ge.push(t));
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
    a !== null && (a.f & _t) === 0 && (o.f ^= _t);
  }
  if (ur) {
    if (Sn.has(t))
      return Sn.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & He) === 0 && o.reactions !== null || Rd(o)) && (l = ll(o)), Sn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ct?.has(o))
      return Ct.get(o);
    rs(o) && od(o);
  }
  if (Ct?.has(t))
    return Ct.get(t);
  if ((t.f & Qn) !== 0)
    throw t.v;
  return t.v;
}
function Rd(t) {
  if (t.v === Me) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Sn.has(e) || (e.f & ze) !== 0 && Rd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ht(t) {
  var e = Tt;
  try {
    return Tt = !0, t();
  } finally {
    Tt = e;
  }
}
const Tm = -7169;
function Ve(t, e) {
  t.f = t.f & Tm | e;
}
function br(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($t in t)
      ya(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $t in n && ya(n);
      }
  }
}
function ya(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ya(t[r], e);
      } catch {
      }
    const n = tl(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bu(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const Pd = /* @__PURE__ */ new Set(), ba = /* @__PURE__ */ new Set();
function Nd(t, e, n, r = {}) {
  function i(s) {
    if (r.capture || pi.call(e, s), !s.cancelBubble)
      return bo(() => n?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? $n(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function wa(t, e, n, r, i) {
  var s = { capture: r, passive: i }, o = Nd(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ts(() => {
    e.removeEventListener(t, o, s);
  });
}
function Yr(t) {
  for (var e = 0; e < t.length; e++)
    Pd.add(t[e]);
  for (var n of ba)
    n(t);
}
let Ic = null;
function pi(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Ic = t;
  var o = 0, a = Ic === t && t.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || t.target, s !== e) {
    Di(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = K, h = V;
    Ze(null), vt(null);
    try {
      for (var u, f = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s["__" + r];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && g.call(s, t);
        } catch (w) {
          u ? f.push(w) : u = w;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (u) {
        for (let w of f)
          queueMicrotask(() => {
            throw w;
          });
        throw u;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Ze(d), vt(h);
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
    V
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function z(t, e) {
  var n = (e & Ap) !== 0, r = (e & Rp) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (F)
      return rn(Y, null), Y;
    i === void 0 && (i = xd(s ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ jt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || cd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jt(o)
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
function Sm(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (F)
      return rn(Y, null), Y;
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        xd(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ jt(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ jt(a);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return rn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function km(t, e) {
  return /* @__PURE__ */ Sm(t, e, "svg");
}
function Se() {
  if (F)
    return rn(Y, null), Y;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = gt();
  return t.append(e, n), rn(e, n), t;
}
function O(t, e) {
  if (F) {
    V.nodes_end = Y, er();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Am(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Rm = [
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
function Pm(t) {
  return Rm.includes(t);
}
const Nm = {
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
function xm(t) {
  return t = t.toLowerCase(), Nm[t] ?? t;
}
const Lm = ["touchstart", "touchmove"];
function Om(t) {
  return Lm.includes(t);
}
const Dm = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Mm(t) {
  return Dm.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function x(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ld(t, e) {
  return Od(t, e);
}
function $m(t, e) {
  ga(), e.intro = e.intro ?? !1;
  const n = e.target, r = F, i = Y;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    ); s && (s.nodeType !== qr || /** @type {Comment} */
    s.data !== Vu); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(s);
    if (!s)
      throw Lr;
    at(!0), Fe(
      /** @type {Comment} */
      s
    );
    const o = Od(t, { ...e, anchor: s });
    return at(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Lr && console.warn("Failed to hydrate: ", o), e.recover === !1 && qp(), ga(), hd(n), at(!1), Ld(t, e);
  } finally {
    at(r), Fe(i);
  }
}
const gr = /* @__PURE__ */ new Map();
function Od(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: o = !0 }) {
  ga();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var u = 0; u < h.length; u++) {
      var f = h[u];
      if (!a.has(f)) {
        a.add(f);
        var p = Om(f);
        e.addEventListener(f, pi, { passive: p });
        var g = gr.get(f);
        g === void 0 ? (document.addEventListener(f, pi, { passive: p }), gr.set(f, 1)) : gr.set(f, g + 1);
      }
    }
  };
  l(el(Pd)), ba.add(l);
  var c = void 0, d = vm(() => {
    var h = n ?? e.appendChild(gt());
    return om(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (u) => {
        if (s) {
          hn({});
          var f = (
            /** @type {ComponentContext} */
            Ee
          );
          f.c = s;
        }
        if (i && (r.$$events = i), F && rn(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, r) || {}, F && (V.nodes_end = Y, Y === null || Y.nodeType !== qr || /** @type {Comment} */
        Y.data !== Xa))
          throw vo(), Lr;
        s && fn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, pi);
        var f = (
          /** @type {number} */
          gr.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, pi), gr.delete(u)) : gr.set(u, f);
      }
      ba.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Ea.set(c, d), c;
}
let Ea = /* @__PURE__ */ new WeakMap();
function Fm(t, e) {
  const n = Ea.get(t);
  return n ? (Ea.delete(t), n(e)) : Promise.resolve();
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
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#r = n;
  }
  #l = () => {
    var e = (
      /** @type {Batch} */
      re
    );
    if (this.#t.has(e)) {
      var n = (
        /** @type {Key} */
        this.#t.get(e)
      ), r = this.#e.get(n);
      if (r)
        dl(r);
      else {
        var i = this.#n.get(n);
        i && (this.#e.set(n, i.effect), this.#n.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const a = this.#n.get(o);
        a && (Re(a.effect), this.#n.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            Id(o, c), c.append(gt()), this.#n.set(s, { effect: o, fragment: c });
          } else
            Re(o);
          this.#e.delete(s);
        };
        this.#r || !r ? Cr(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const n = Array.from(this.#t.values());
    for (const [r, i] of this.#n)
      n.includes(r) || (Re(i.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      re
    ), i = fd();
    if (n && !this.#e.has(e) && !this.#n.has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = gt();
        s.append(o), this.#n.set(e, {
          effect: Xe(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          e,
          Xe(() => n(this.anchor))
        );
    if (this.#t.set(r, e), i) {
      for (const [a, l] of this.#e)
        a === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#l), r.ondiscard(this.#o);
    } else
      F && (this.anchor = Y), this.#l();
  }
}
function Eo(t) {
  Ee === null && Ku(), Gr && Ee.l !== null ? Wm(Ee).m.push(t) : va(() => {
    const e = Ht(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Um(t) {
  Ee === null && Ku(), Eo(() => () => Ht(t));
}
function Wm(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function ye(t, e, n = !1) {
  F && er();
  var r = new Dd(t), i = n ? Zn : 0;
  function s(o, a) {
    if (F) {
      const c = Yu(t) === mo;
      if (o === c) {
        var l = Fs();
        Fe(l), r.anchor = l, at(!1), r.ensure(o, a), at(!0);
        return;
      }
    }
    r.ensure(o, a);
  }
  Kr(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, i);
}
function Io(t, e) {
  return e;
}
function jm(t, e, n) {
  for (var r = t.items, i = [], s = e.length, o = 0; o < s; o++)
    ul(e[o].e, i, !0);
  var a = s > 0 && i.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    hd(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Dt(t, e[0].prev, e[s - 1].next);
  }
  wd(i, () => {
    for (var c = 0; c < s; c++) {
      var d = e[c];
      a || (r.delete(d.k), Dt(t, d.prev, d.next)), Re(d.e, !a);
    }
  });
}
function is(t, e, n, r, i, s = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & ju) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = F ? Fe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ jt(c)
    ) : c.appendChild(gt());
  }
  F && er();
  var d = null, h = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ al(() => {
    var S = n();
    return Za(S) ? S : S == null ? [] : el(S);
  }), p, g;
  function w() {
    Hm(
      g,
      p,
      a,
      u,
      o,
      i,
      e,
      r,
      n
    ), s !== null && (p.length === 0 ? d ? dl(d) : d = Xe(() => s(o)) : d !== null && Cr(d, () => {
      d = null;
    }));
  }
  Kr(() => {
    g ??= /** @type {Effect} */
    V, p = /** @type {V[]} */
    v(f);
    var S = p.length;
    if (h && S === 0)
      return;
    h = S === 0;
    let T = !1;
    if (F) {
      var k = Yu(o) === mo;
      k !== (S === 0) && (o = Fs(), Fe(o), at(!1), T = !0);
    }
    if (F) {
      for (var I = null, A, b = 0; b < S; b++) {
        if (Y.nodeType === qr && /** @type {Comment} */
        Y.data === Xa) {
          o = /** @type {Comment} */
          Y, T = !0, at(!1);
          break;
        }
        var E = p[b], R = r(E, b);
        A = Ia(
          Y,
          a,
          I,
          null,
          E,
          R,
          b,
          i,
          e,
          n
        ), a.items.set(R, A), I = A;
      }
      S > 0 && Fe(Fs());
    }
    if (F)
      S === 0 && s && (d = Xe(() => s(o)));
    else if (fd()) {
      var M = /* @__PURE__ */ new Set(), U = (
        /** @type {Batch} */
        re
      );
      for (b = 0; b < S; b += 1) {
        E = p[b], R = r(E, b);
        var D = a.items.get(R) ?? u.get(R);
        D ? (e & (fo | po)) !== 0 && Md(D, E, b, e) : (A = Ia(
          null,
          a,
          null,
          null,
          E,
          R,
          b,
          i,
          e,
          n,
          !0
        ), u.set(R, A)), M.add(R);
      }
      for (const [N, j] of a.items)
        M.has(N) || U.skipped_effects.add(j.e);
      U.oncommit(w);
    } else
      w();
    T && at(!0), v(f);
  }), F && (o = Y);
}
function Hm(t, e, n, r, i, s, o, a, l) {
  var c = (o & Ep) !== 0, d = (o & (fo | po)) !== 0, h = e.length, u = n.items, f = n.first, p = f, g, w = null, S, T = [], k = [], I, A, b, E;
  if (c)
    for (E = 0; E < h; E += 1)
      I = e[E], A = a(I, E), b = u.get(A), b !== void 0 && (b.a?.measure(), (S ??= /* @__PURE__ */ new Set()).add(b));
  for (E = 0; E < h; E += 1) {
    if (I = e[E], A = a(I, E), b = u.get(A), b === void 0) {
      var R = r.get(A);
      if (R !== void 0) {
        r.delete(A), u.set(A, R);
        var M = w ? w.next : p;
        Dt(n, w, R), Dt(n, R, M), Bo(R, M, i), w = R;
      } else {
        var U = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        w = Ia(
          U,
          n,
          w,
          w === null ? n.first : w.next,
          I,
          A,
          E,
          s,
          o,
          l
        );
      }
      u.set(A, w), T = [], k = [], p = w.next;
      continue;
    }
    if (d && Md(b, I, E, o), (b.e.f & lt) !== 0 && (dl(b.e), c && (b.a?.unfix(), (S ??= /* @__PURE__ */ new Set()).delete(b))), b !== p) {
      if (g !== void 0 && g.has(b)) {
        if (T.length < k.length) {
          var D = k[0], N;
          w = D.prev;
          var j = T[0], X = T[T.length - 1];
          for (N = 0; N < T.length; N += 1)
            Bo(T[N], D, i);
          for (N = 0; N < k.length; N += 1)
            g.delete(k[N]);
          Dt(n, j.prev, X.next), Dt(n, w, j), Dt(n, X, D), p = D, w = X, E -= 1, T = [], k = [];
        } else
          g.delete(b), Bo(b, p, i), Dt(n, b.prev, b.next), Dt(n, b, w === null ? n.first : w.next), Dt(n, w, b), w = b;
        continue;
      }
      for (T = [], k = []; p !== null && p.k !== A; )
        (p.e.f & lt) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
      b = p;
    }
    T.push(b), w = b, p = b.next;
  }
  if (p !== null || g !== void 0) {
    for (var H = g === void 0 ? [] : el(g); p !== null; )
      (p.e.f & lt) === 0 && H.push(p), p = p.next;
    var Z = H.length;
    if (Z > 0) {
      var de = (o & ju) !== 0 && h === 0 ? i : null;
      if (c) {
        for (E = 0; E < Z; E += 1)
          H[E].a?.measure();
        for (E = 0; E < Z; E += 1)
          H[E].a?.fix();
      }
      jm(n, H, de);
    }
  }
  c && $n(() => {
    if (S !== void 0)
      for (b of S)
        b.a?.apply();
  }), t.first = n.first && n.first.e, t.last = w && w.e;
  for (var pe of r.values())
    Re(pe.e);
  r.clear();
}
function Md(t, e, n, r) {
  (r & fo) !== 0 && Mr(t.v, e), (r & po) !== 0 ? Mr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Ia(t, e, n, r, i, s, o, a, l, c, d) {
  var h = (l & fo) !== 0, u = (l & Ip) === 0, f = h ? u ? /* @__PURE__ */ cl(i, !1, !1) : xn(i) : i, p = (l & po) === 0 ? o : xn(o), g = {
    i: p,
    v: f,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var w = document.createDocumentFragment();
      w.append(t = gt());
    }
    return g.e = Xe(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), F), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Bo(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); s !== null && s !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(s)
    );
    i.before(s), s = o;
  }
}
function Dt(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Le(t, e, n, r, i) {
  F && er();
  var s = e.$$slots?.[n], o = !1;
  s === !0 && (s = e.children, o = !0), s === void 0 || s(t, o ? () => r : r);
}
function Vm(t, e, n, r, i, s) {
  let o = F;
  F && er();
  var a = null;
  F && Y.nodeType === Wp && (a = /** @type {Element} */
  Y, er());
  var l = (
    /** @type {TemplateNode} */
    F ? Y : t
  ), c = new Dd(l, !1);
  Kr(() => {
    const d = e() || null;
    var h = Np;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (u) => {
      if (d) {
        if (a = F ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(h, d), rn(a, a), r) {
          F && Mm(d) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            F ? /* @__PURE__ */ jt(a) : a.appendChild(gt())
          );
          F && (f === null ? at(!1) : Fe(f)), r(a, f);
        }
        V.nodes_end = a, u.before(a);
      }
      F && Fe(u);
    }), () => {
    };
  }, Zn), ts(() => {
  }), o && (at(!0), Fe(l));
}
function Fn(t, e) {
  ns(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function zm(t, e) {
  var n = void 0, r;
  Kr(() => {
    n !== (n = e()) && (r && (Re(r), r = null), n && (r = Xe(() => {
      ns(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function $d(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = $d(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Bm() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = $d(t)) && (r && (r += " "), r += e);
  return r;
}
function qm(t) {
  return typeof t == "object" ? Bm(t) : t ?? "";
}
const Cc = [...` 	
\r\f \v\uFEFF`];
function Gm(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || Cc.includes(r[o - 1])) && (a === r.length || Cc.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function Tc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function qo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Km(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(qo)), i && l.push(...Object.keys(i).map(qo));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var u = t[h];
        if (a ? u === "/" && t[h - 1] === "*" && (a = !1) : s ? s === u && (s = !1) : u === "/" && t[h + 1] === "*" ? a = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !a && s === !1 && o === 0) {
          if (u === ":" && d === -1)
            d = h;
          else if (u === ";" || h === g - 1) {
            if (d !== -1) {
              var f = qo(t.substring(c, d).trim());
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
    return r && (n += Tc(r)), i && (n += Tc(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Fi(t, e, n, r, i, s) {
  var o = t.__className;
  if (F || o !== n || o === void 0) {
    var a = Gm(n, r, s);
    (!F || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var c = !!s[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function Go(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function Ym(t, e, n, r) {
  var i = t.__style;
  if (F || i !== e) {
    var s = Km(e, r);
    (!F || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Go(t, n?.[0], r[0]), Go(t, n?.[1], r[1], "important")) : Go(t, n, r));
  return r;
}
function js(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Za(e))
      return Xp();
    for (var r of t.options)
      r.selected = e.includes(Ii(r));
    return;
  }
  for (r of t.options) {
    var i = Ii(r);
    if (hm(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Fd(t) {
  var e = new MutationObserver(() => {
    js(t, t.__value);
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
  }), ts(() => {
    e.disconnect();
  });
}
function Qm(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet(), i = !0;
  md(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", a;
    if (t.multiple)
      a = [].map.call(t.querySelectorAll(o), Ii);
    else {
      var l = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      a = l && Ii(l);
    }
    n(a), re !== null && r.add(re);
  }), ns(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        bi ?? re
      );
      if (r.has(o))
        return;
    }
    if (js(t, s, i), i && s === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (s = Ii(a), n(s));
    }
    t.__value = s, i = !1;
  }), Fd(t);
}
function Ii(t) {
  return "__value" in t ? t.__value : t.value;
}
const ai = Symbol("class"), li = Symbol("style"), Ud = Symbol("is custom element"), Wd = Symbol("is html");
function Sr(t) {
  if (F) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Ce(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          Ce(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = n, $n(n), pd();
  }
}
function Jm(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ce(t, e, n, r) {
  var i = jd(t);
  F && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "loading" && (t[Up] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Hd(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Xm(t, e, n, r, i = !1, s = !1) {
  if (F && i && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Sr(o);
  }
  var l = jd(t), c = l[Ud], d = !l[Wd];
  let h = F && c;
  h && at(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = qm(n.class) : n[ai] && (n.class = null), n[li] && (n.style ??= null);
  var g = Hd(t);
  for (const b in n) {
    let E = n[b];
    if (f && b === "value" && E == null) {
      t.value = t.__value = "", u[b] = E;
      continue;
    }
    if (b === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Fi(t, w, E, r, e?.[ai], n[ai]), u[b] = E, u[ai] = n[ai];
      continue;
    }
    if (b === "style") {
      Ym(t, E, e?.[li], n[li]), u[b] = E, u[li] = n[li];
      continue;
    }
    var S = u[b];
    if (!(E === S && !(E === void 0 && t.hasAttribute(b)))) {
      u[b] = E;
      var T = b[0] + b[1];
      if (T !== "$$")
        if (T === "on") {
          const R = {}, M = "$$" + b;
          let U = b.slice(2);
          var k = Pm(U);
          if (Am(U) && (U = U.slice(0, -7), R.capture = !0), !k && S) {
            if (E != null) continue;
            t.removeEventListener(U, u[M], R), u[M] = null;
          }
          if (E != null)
            if (k)
              t[`__${U}`] = E, Yr([U]);
            else {
              let D = function(N) {
                u[b].call(this, N);
              };
              u[M] = Nd(U, t, D, R);
            }
          else k && (t[`__${U}`] = void 0);
        } else if (b === "style")
          Ce(t, b, E);
        else if (b === "autofocus")
          fm(
            /** @type {HTMLElement} */
            t,
            !!E
          );
        else if (!c && (b === "__value" || b === "value" && E != null))
          t.value = t.__value = E;
        else if (b === "selected" && f)
          Jm(
            /** @type {HTMLOptionElement} */
            t,
            E
          );
        else {
          var I = b;
          d || (I = xm(I));
          var A = I === "defaultValue" || I === "defaultChecked";
          if (E == null && !c && !A)
            if (l[b] = null, I === "value" || I === "checked") {
              let R = (
                /** @type {HTMLInputElement} */
                t
              );
              const M = e === void 0;
              if (I === "value") {
                let U = R.defaultValue;
                R.removeAttribute(I), R.defaultValue = U, R.value = R.__value = M ? U : null;
              } else {
                let U = R.defaultChecked;
                R.removeAttribute(I), R.defaultChecked = U, R.checked = M ? U : !1;
              }
            } else
              t.removeAttribute(b);
          else A || g.includes(I) && (c || typeof E != "string") ? (t[I] = E, I in l && (l[I] = Me)) : typeof E != "function" && Ce(t, I, E);
        }
    }
  }
  return h && at(!0), u;
}
function Sc(t, e, n = [], r = [], i = [], s, o = !1, a = !1) {
  id(i, n, r, (l) => {
    var c = void 0, d = {}, h = t.nodeName === "SELECT", u = !1;
    if (Kr(() => {
      var p = e(...l.map(v)), g = Xm(
        t,
        c,
        p,
        s,
        o,
        a
      );
      u && h && "value" in p && js(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let S of Object.getOwnPropertySymbols(d))
        p[S] || Re(d[S]);
      for (let S of Object.getOwnPropertySymbols(p)) {
        var w = p[S];
        S.description === xp && (!c || w !== c[S]) && (d[S] && Re(d[S]), d[S] = Xe(() => zm(t, () => w))), g[S] = w;
      }
      c = g;
    }), h) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ns(() => {
        js(
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
function jd(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Ud]: t.nodeName.includes("-"),
      [Wd]: t.namespaceURI === Pp
    }
  );
}
var kc = /* @__PURE__ */ new Map();
function Hd(t) {
  var e = t.getAttribute("is") || t.nodeName, n = kc.get(e);
  if (n) return n;
  kc.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Bu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = tl(i);
  }
  return n;
}
function Ci(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  md(t, "input", async (i) => {
    var s = i ? t.defaultValue : t.value;
    if (s = Ko(t) ? Yo(s) : s, n(s), re !== null && r.add(re), await Cm(), s !== (s = e())) {
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
  Ht(e) == null && t.value) && (n(Ko(t) ? Yo(t.value) : t.value), re !== null && r.add(re)), wo(() => {
    var i = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        bi ?? re
      );
      if (r.has(s))
        return;
    }
    Ko(t) && i === Yo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Ko(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Yo(t) {
  return t === "" ? null : +t;
}
function Ac(t, e) {
  return t === e || t?.[$t] === e;
}
function Zm(t = {}, e, n, r) {
  return ns(() => {
    var i, s;
    return wo(() => {
      i = s, s = [], Ht(() => {
        t !== n(...s) && (e(t, ...s), i && Ac(n(...i), t) && e(null, ...i));
      });
    }), () => {
      $n(() => {
        s && Ac(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function Vd(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Ee
  ), n = e.l.u;
  if (!n) return;
  let r = () => br(e.s);
  if (t) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ es(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== s[c] && (s[c] = l[c], a = !0);
      return a && i++, i;
    });
    r = () => v(o);
  }
  n.b.length && _m(() => {
    Rc(e, r), Ds(n.b);
  }), va(() => {
    const i = Ht(() => n.m.map(Mp));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && va(() => {
    Rc(e, r), Ds(n.a);
  });
}
function Rc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) v(n);
  e();
}
function hl(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), Tn;
  const r = Ht(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const vr = [];
function e_(t, e) {
  return {
    subscribe: ss(t, e).subscribe
  };
}
function ss(t, e = Tn) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Ju(t, a) && (t = a, n)) {
      const l = !vr.length;
      for (const c of r)
        c[1](), vr.push(c, t);
      if (l) {
        for (let c = 0; c < vr.length; c += 2)
          vr[c][0](vr[c + 1]);
        vr.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      t
    ));
  }
  function o(a, l = Tn) {
    const c = [a, l];
    return r.add(c), r.size === 1 && (n = e(i, s) || Tn), a(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function t_(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return e_(n, (o, a) => {
    let l = !1;
    const c = [];
    let d = 0, h = Tn;
    const u = () => {
      if (d)
        return;
      h();
      const p = e(r ? c[0] : c, o, a);
      s ? o(p) : h = typeof p == "function" ? p : Tn;
    }, f = i.map(
      (p, g) => hl(
        p,
        (w) => {
          c[g] = w, d &= ~(1 << g), l && u();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, u(), function() {
      Ds(f), h(), l = !1;
    };
  });
}
function n_(t) {
  let e;
  return hl(t, (n) => e = n)(), e;
}
let Cs = !1, Ca = Symbol();
function Ui(t, e, n) {
  const r = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ cl(void 0),
    unsubscribe: Tn
  };
  if (r.store !== t && !(Ca in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = Tn;
    else {
      var i = !0;
      r.unsubscribe = hl(t, (s) => {
        i ? r.source.v = s : L(r.source, s);
      }), i = !1;
    }
  return t && Ca in n ? n_(t) : v(r.source);
}
function fl() {
  const t = {};
  function e() {
    ts(() => {
      for (var n in t)
        t[n].unsubscribe();
      Di(t, Ca, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function r_(t) {
  var e = Cs;
  try {
    return Cs = !1, [t(), Cs];
  } finally {
    Cs = e;
  }
}
const i_ = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return v(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = V;
      try {
        vt(t.parent_effect), t.special[e] = pt(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Hu
        );
      } finally {
        vt(r);
      }
    }
    return t.special[e](n), _c(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), _c(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function xe(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: xn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        V
      )
    },
    i_
  );
}
const s_ = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (oi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      oi(i) && (i = i());
      const s = en(i, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (oi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = en(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === $t || e === sl) return !1;
    for (let n of t.props)
      if (oi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (oi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Be(...t) {
  return new Proxy({ props: t }, s_);
}
function pt(t, e, n, r) {
  var i = !Gr || (n & Tp) !== 0, s = (n & Sp) !== 0, o = (n & kp) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = o ? Ht(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (s) {
    var h = $t in t || sl in t;
    d = en(t, e)?.set ?? (h && e in t ? (k) => t[e] = k : void 0);
  }
  var u, f = !1;
  s ? [u, f] = r_(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && r !== void 0 && (u = c(), d && (i && Gp(), d(u)));
  var p;
  if (i ? p = () => {
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
  }, i && (n & Hu) === 0)
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, I) {
        return arguments.length > 0 ? ((!i || !I || g || f) && d(I ? p() : k), k) : p();
      })
    );
  }
  var w = !1, S = ((n & Cp) !== 0 ? es : al)(() => (w = !1, p()));
  s && v(S);
  var T = (
    /** @type {Effect} */
    V
  );
  return (
    /** @type {() => V} */
    (function(k, I) {
      if (arguments.length > 0) {
        const A = I ? v(S) : i && s ? Qt(k) : k;
        return L(S, A), w = !0, a !== void 0 && (a = A), k;
      }
      return ur && w || (T.f & tn) !== 0 ? S.v : v(S);
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
    var n = /* @__PURE__ */ new Map(), r = (s, o) => {
      var a = /* @__PURE__ */ cl(o, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return v(n.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === sl ? !0 : (v(n.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return L(n.get(o) ?? r(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? $m : Ld)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && st(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || Di(this, s, {
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
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Fm(this.#e);
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
    const r = (...i) => n.call(this, ...i);
    return this.#t[e].push(r), () => {
      this.#t[e] = this.#t[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let zd;
typeof HTMLElement == "function" && (zd = class extends HTMLElement {
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
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
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
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (i) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), O(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = l_(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = As(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = o_({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = gm(() => {
        wo(() => {
          this.$$r = !0;
          for (const r of Os(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = As(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const s = this.$$c.$on(r, i);
          this.$$l_u.set(i, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = As(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Os(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function As(t, e, n, r) {
  const i = n[t]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function fe(t, e, n, r, i, s) {
  let o = class extends zd {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Os(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Os(e).forEach((a) => {
    Di(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = As(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = en(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Di(o.prototype, a, {
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
const Bd = {
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
    throw Qr(e);
}, Qr = function(t) {
  return new Error("Firebase Database (" + Bd.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
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
const qd = function(t) {
  const e = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, u_ = function(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const i = t[n++];
    if (i < 128)
      e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = t[n++];
      e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = t[n++], o = t[n++], a = t[n++], l = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (l >> 10)), e[r++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const s = t[n++], o = t[n++];
      e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, pl = {
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
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < t.length; i += 3) {
      const s = t[i], o = i + 1 < t.length, a = o ? t[i + 1] : 0, l = i + 2 < t.length, c = l ? t[i + 2] : 0, d = s >> 2, h = (s & 3) << 4 | a >> 4;
      let u = (a & 15) << 2 | c >> 6, f = c & 63;
      l || (f = 64, o || (u = 64)), r.push(n[d], n[h], n[u], n[f]);
    }
    return r.join("");
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(qd(t), e);
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
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < t.length; ) {
      const s = n[t.charAt(i++)], a = i < t.length ? n[t.charAt(i)] : 0;
      ++i;
      const c = i < t.length ? n[t.charAt(i)] : 64;
      ++i;
      const h = i < t.length ? n[t.charAt(i)] : 64;
      if (++i, s == null || a == null || c == null || h == null)
        throw new d_();
      const u = s << 2 | a >> 4;
      if (r.push(u), c !== 64) {
        const f = a << 4 & 240 | c >> 2;
        if (r.push(f), h !== 64) {
          const p = c << 6 & 192 | h;
          r.push(p);
        }
      }
    }
    return r;
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
const Gd = function(t) {
  const e = qd(t);
  return pl.encodeByteArray(e, !0);
}, Hs = function(t) {
  return Gd(t).replace(/\./g, "");
}, Vs = function(t) {
  try {
    return pl.decodeString(t, !0);
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
  return Kd(void 0, t);
}
function Kd(t, e) {
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
    !e.hasOwnProperty(n) || !f_(n) || (t[n] = Kd(t[n], e[n]));
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
  const e = t && Vs(t[1]);
  return e && JSON.parse(e);
}, ml = () => {
  try {
    return c_() || m_() || __() || g_();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, Yd = (t) => ml()?.emulatorHosts?.[t], v_ = (t) => {
  const e = Yd(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const r = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
}, Qd = () => ml()?.config, Jd = (t) => ml()?.[`_${t}`];
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
class os {
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
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, r));
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
function Jr(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Xd(t) {
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
  }, r = e || "demo-project", i = t.iat || 0, s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = {
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
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
    Hs(JSON.stringify(n)),
    Hs(JSON.stringify(o)),
    ""
  ].join(".");
}
const Ti = {};
function b_() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Ti))
    Ti[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function w_(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let Pc = !1;
function Zd(t, e) {
  if (typeof window > "u" || typeof document > "u" || !Jr(window.location.host) || Ti[t] === e || Ti[t] || // If already set to use emulator, can't go back to prod.
  Pc)
    return;
  Ti[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const r = "__firebase__banner", s = b_().prod.length > 0;
  function o() {
    const u = document.getElementById(r);
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
    const u = w_(r), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), w = document.getElementById(g) || document.createElement("a"), S = n("preprendIcon"), T = document.getElementById(S) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const k = u.element;
      a(k), d(w, g);
      const I = c();
      l(T, S), k.append(T, p, w, I), document.body.appendChild(k);
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
function Qe() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function _l() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe());
}
function E_() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function I_() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function eh() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function C_() {
  const t = Qe();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function T_() {
  return Bd.NODE_ADMIN === !0;
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
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }, i.onupgradeneeded = () => {
        n = !1;
      }, i.onerror = () => {
        e(i.error?.message || "");
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
class Un extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = A_, Object.setPrototypeOf(this, Un.prototype), Error.captureStackTrace && Error.captureStackTrace(this, as.prototype.create);
  }
}
class as {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r;
  }
  create(e, ...n) {
    const r = n[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? R_(s, r) : "Error", a = `${this.serviceName}: ${o} (${i}).`;
    return new Un(i, a, r);
  }
}
function R_(t, e) {
  return t.replace(P_, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
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
function Wi(t) {
  return JSON.parse(t);
}
function Ae(t) {
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
const th = function(t) {
  let e = {}, n = {}, r = {}, i = "";
  try {
    const s = t.split(".");
    e = Wi(Vs(s[0]) || ""), n = Wi(Vs(s[1]) || ""), i = s[2], r = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: r,
    signature: i
  };
}, N_ = function(t) {
  const e = th(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, x_ = function(t) {
  const e = th(t).claims;
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
function $r(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function Ta(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function zs(t, e, n) {
  const r = {};
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e.call(n, t[i], i, t));
  return r;
}
function nr(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i))
      return !1;
    const s = t[i], o = e[i];
    if (Nc(s) && Nc(o)) {
      if (!nr(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const i of r)
    if (!n.includes(i))
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
function dr(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function mi(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((r) => {
    if (r) {
      const [i, s] = r.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(s);
    }
  }), e;
}
function _i(t) {
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
    const r = this.W_;
    if (typeof e == "string")
      for (let h = 0; h < 16; h++)
        r[h] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
    else
      for (let h = 0; h < 16; h++)
        r[h] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
    for (let h = 16; h < 80; h++) {
      const u = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
      r[h] = (u << 1 | u >>> 31) & 4294967295;
    }
    let i = this.chain_[0], s = this.chain_[1], o = this.chain_[2], a = this.chain_[3], l = this.chain_[4], c, d;
    for (let h = 0; h < 80; h++) {
      h < 40 ? h < 20 ? (c = a ^ s & (o ^ a), d = 1518500249) : (c = s ^ o ^ a, d = 1859775393) : h < 60 ? (c = s & o | a & (s | o), d = 2400959708) : (c = s ^ o ^ a, d = 3395469782);
      const u = (i << 5 | i >>> 27) + c + l + d + r[h] & 4294967295;
      l = a, a = o, o = (s << 30 | s >>> 2) & 4294967295, s = i, i = u;
    }
    this.chain_[0] = this.chain_[0] + i & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + o & 4294967295, this.chain_[3] = this.chain_[3] + a & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295;
  }
  update(e, n) {
    if (e == null)
      return;
    n === void 0 && (n = e.length);
    const r = n - this.blockSize;
    let i = 0;
    const s = this.buf_;
    let o = this.inbuf_;
    for (; i < n; ) {
      if (o === 0)
        for (; i <= r; )
          this.compress_(e, i), i += this.blockSize;
      if (typeof e == "string") {
        for (; i < n; )
          if (s[o] = e.charCodeAt(i), ++o, ++i, o === this.blockSize) {
            this.compress_(s), o = 0;
            break;
          }
      } else
        for (; i < n; )
          if (s[o] = e[i], ++o, ++i, o === this.blockSize) {
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
    for (let i = this.blockSize - 1; i >= 56; i--)
      this.buf_[i] = n & 255, n /= 256;
    this.compress_(this.buf_);
    let r = 0;
    for (let i = 0; i < 5; i++)
      for (let s = 24; s >= 0; s -= 8)
        e[r] = this.chain_[i] >> s & 255, ++r;
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
    }).catch((r) => {
      this.error(r);
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
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    M_(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: n,
      complete: r
    }, i.next === void 0 && (i.next = Qo), i.error === void 0 && (i.error = Qo), i.complete === void 0 && (i.complete = Qo);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), s;
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
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
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
function Qo() {
}
function Co(t, e) {
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
  for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    if (i >= 55296 && i <= 56319) {
      const s = i - 55296;
      r++, C(r < t.length, "Surrogate pair missing trail surrogate.");
      const o = t.charCodeAt(r) - 56320;
      i = 65536 + (s << 10) + o;
    }
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : i < 65536 ? (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, To = function(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const r = t.charCodeAt(n);
    r < 128 ? e++ : r < 2048 ? e += 2 : r >= 55296 && r <= 56319 ? (e += 4, n++) : e += 3;
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
function Oe(t) {
  return t && t._delegate ? t._delegate : t;
}
class rr {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, r) {
    this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
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
const qn = "[DEFAULT]";
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
      const r = new os();
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: n
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    const n = this.normalizeInstanceIdentifier(e?.identifier), r = e?.optional ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (i) {
        if (r)
          return null;
        throw i;
      }
    else {
      if (r)
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
          this.getOrInitializeService({ instanceIdentifier: qn });
        } catch {
        }
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(e = qn) {
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
  isInitialized(e = qn) {
    return this.instances.has(e);
  }
  getOptions(e = qn) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
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
    const r = this.normalizeInstanceIdentifier(n), i = this.onInitCallbacks.get(r) ?? /* @__PURE__ */ new Set();
    i.add(e), this.onInitCallbacks.set(r, i);
    const s = this.instances.get(r);
    return s && e(s, r), () => {
      i.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: U_(e),
      options: n
    }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = qn) {
    return this.component ? this.component.multipleInstances ? e : qn : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function U_(t) {
  return t === qn ? void 0 : t;
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
class j_ {
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
var ie;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(ie || (ie = {}));
const H_ = {
  debug: ie.DEBUG,
  verbose: ie.VERBOSE,
  info: ie.INFO,
  warn: ie.WARN,
  error: ie.ERROR,
  silent: ie.SILENT
}, V_ = ie.INFO, z_ = {
  [ie.DEBUG]: "log",
  [ie.VERBOSE]: "log",
  [ie.INFO]: "info",
  [ie.WARN]: "warn",
  [ie.ERROR]: "error"
}, B_ = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = z_[e];
  if (i)
    console[i](`[${r}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class gl {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = V_, this._logHandler = B_, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ie))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? H_[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, ie.DEBUG, ...e), this._logHandler(this, ie.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ie.VERBOSE, ...e), this._logHandler(this, ie.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ie.INFO, ...e), this._logHandler(this, ie.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ie.WARN, ...e), this._logHandler(this, ie.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ie.ERROR, ...e), this._logHandler(this, ie.ERROR, ...e);
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
const nh = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), vl = /* @__PURE__ */ new WeakMap();
function Y_(t) {
  const e = new Promise((n, r) => {
    const i = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n(kn(t.result)), i();
    }, o = () => {
      r(t.error), i();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && nh.set(n, t);
  }).catch(() => {
  }), vl.set(e, t), e;
}
function Q_(t) {
  if (Sa.has(t))
    return;
  const e = new Promise((n, r) => {
    const i = () => {
      t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o);
    }, s = () => {
      n(), i();
    }, o = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), i();
    };
    t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o);
  });
  Sa.set(t, e);
}
let ka = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Sa.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || rh.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return kn(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function J_(t) {
  ka = t(ka);
}
function X_(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(Xo(this), e, ...n);
    return rh.set(r, e.sort ? e.sort() : [e]), kn(r);
  } : K_().includes(t) ? function(...e) {
    return t.apply(Xo(this), e), kn(nh.get(this));
  } : function(...e) {
    return kn(t.apply(Xo(this), e));
  };
}
function Z_(t) {
  return typeof t == "function" ? X_(t) : (t instanceof IDBTransaction && Q_(t), q_(t, G_()) ? new Proxy(t, ka) : t);
}
function kn(t) {
  if (t instanceof IDBRequest)
    return Y_(t);
  if (Jo.has(t))
    return Jo.get(t);
  const e = Z_(t);
  return e !== t && (Jo.set(t, e), vl.set(e, t)), e;
}
const Xo = (t) => vl.get(t);
function eg(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e), a = kn(o);
  return r && o.addEventListener("upgradeneeded", (l) => {
    r(kn(o.result), l.oldVersion, l.newVersion, kn(o.transaction), l);
  }), n && o.addEventListener("blocked", (l) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), a.then((l) => {
    s && l.addEventListener("close", () => s()), i && l.addEventListener("versionchange", (c) => i(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), a;
}
const tg = ["get", "getKey", "getAll", "getAllKeys", "count"], ng = ["put", "add", "delete", "clear"], Zo = /* @__PURE__ */ new Map();
function Oc(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Zo.get(e))
    return Zo.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, i = ng.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || tg.includes(n))
  )
    return;
  const s = async function(o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let c = l.store;
    return r && (c = c.index(a.shift())), (await Promise.all([
      c[n](...a),
      i && l.done
    ]))[0];
  };
  return Zo.set(e, s), s;
}
J_((t) => ({
  ...t,
  get: (e, n, r) => Oc(e, n) || t.get(e, n, r),
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
class rg {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (ig(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function ig(t) {
  return t.getComponent()?.type === "VERSION";
}
const Aa = "@firebase/app", Dc = "0.14.5";
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
const on = new gl("@firebase/app"), sg = "@firebase/app-compat", og = "@firebase/analytics-compat", ag = "@firebase/analytics", lg = "@firebase/app-check-compat", cg = "@firebase/app-check", ug = "@firebase/auth", dg = "@firebase/auth-compat", hg = "@firebase/database", fg = "@firebase/data-connect", pg = "@firebase/database-compat", mg = "@firebase/functions", _g = "@firebase/functions-compat", gg = "@firebase/installations", vg = "@firebase/installations-compat", yg = "@firebase/messaging", bg = "@firebase/messaging-compat", wg = "@firebase/performance", Eg = "@firebase/performance-compat", Ig = "@firebase/remote-config", Cg = "@firebase/remote-config-compat", Tg = "@firebase/storage", Sg = "@firebase/storage-compat", kg = "@firebase/firestore", Ag = "@firebase/ai", Rg = "@firebase/firestore-compat", Pg = "firebase", Ng = "12.5.0";
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
const Ra = "[DEFAULT]", xg = {
  [Aa]: "fire-core",
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
const Bs = /* @__PURE__ */ new Map(), Lg = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map();
function Mc(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function Fr(t) {
  const e = t.name;
  if (Pa.has(e))
    return on.debug(`There were multiple attempts to register component ${e}.`), !1;
  Pa.set(e, t);
  for (const n of Bs.values())
    Mc(n, t);
  for (const n of Lg.values())
    Mc(n, t);
  return !0;
}
function yl(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function ot(t) {
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
}, An = new as("app", "Firebase", Og);
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
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new rr(
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
      throw An.create("app-deleted", { appName: this._name });
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
const Xr = Ng;
function ih(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = {
    name: Ra,
    automaticDataCollectionEnabled: !0,
    ...e
  }, i = r.name;
  if (typeof i != "string" || !i)
    throw An.create("bad-app-name", {
      appName: String(i)
    });
  if (n || (n = Qd()), !n)
    throw An.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = Bs.get(i);
  if (s) {
    if (nr(n, s.options) && nr(r, s.config))
      return s;
    throw An.create("duplicate-app", { appName: i });
  }
  const o = new j_(i);
  for (const l of Pa.values())
    o.addComponent(l);
  const a = new Dg(n, r, o);
  return Bs.set(i, a), a;
}
function sh(t = Ra) {
  const e = Bs.get(t);
  if (!e && t === Ra && Qd())
    return ih();
  if (!e)
    throw An.create("no-app", { appName: t });
  return e;
}
function Rn(t, e, n) {
  let r = xg[t] ?? t;
  n && (r += `-${n}`);
  const i = r.match(/\s|\//), s = e.match(/\s|\//);
  if (i || s) {
    const o = [
      `Unable to register library "${r}" with version "${e}":`
    ];
    i && o.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), on.warn(o.join(" "));
    return;
  }
  Fr(new rr(
    `${r}-version`,
    () => ({ library: r, version: e }),
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
const Mg = "firebase-heartbeat-database", $g = 1, ji = "firebase-heartbeat-store";
let ea = null;
function oh() {
  return ea || (ea = eg(Mg, $g, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(ji);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw An.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), ea;
}
async function Fg(t) {
  try {
    const n = (await oh()).transaction(ji), r = await n.objectStore(ji).get(ah(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof Un)
      on.warn(e.message);
    else {
      const n = An.create("idb-get", {
        originalErrorMessage: e?.message
      });
      on.warn(n.message);
    }
  }
}
async function $c(t, e) {
  try {
    const r = (await oh()).transaction(ji, "readwrite");
    await r.objectStore(ji).put(e, ah(t)), await r.done;
  } catch (n) {
    if (n instanceof Un)
      on.warn(n.message);
    else {
      const r = An.create("idb-set", {
        originalErrorMessage: n?.message
      });
      on.warn(r.message);
    }
  }
}
function ah(t) {
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
class jg {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Vg(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
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
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = Fc();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((i) => i.date === r))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats.length > Wg) {
        const i = zg(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(i, 1);
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
      const e = Fc(), { heartbeatsToSend: n, unsentEntries: r } = Hg(this._heartbeatsCache.heartbeats), i = Hs(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
    } catch (e) {
      return on.warn(e), "";
    }
  }
}
function Fc() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Hg(t, e = Ug) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), Uc(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: i.agent,
      dates: [i.date]
    }), Uc(n) > e) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  };
}
class Vg {
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
      const r = await this.read();
      return $c(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return $c(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [
          ...r.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Uc(t) {
  return Hs(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function zg(t) {
  if (t.length === 0)
    return -1;
  let e = 0, n = t[0].date;
  for (let r = 1; r < t.length; r++)
    t[r].date < n && (n = t[r].date, e = r);
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
  Fr(new rr(
    "platform-logger",
    (e) => new rg(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Fr(new rr(
    "heartbeat",
    (e) => new jg(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Rn(Aa, Dc, t), Rn(Aa, Dc, "esm2020"), Rn("fire-js", "");
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
Rn(qg, Gg, "app");
function lh() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Kg = lh, ch = new as("auth", "Firebase", lh());
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
const qs = new gl("@firebase/auth");
function Yg(t, ...e) {
  qs.logLevel <= ie.WARN && qs.warn(`Auth (${Xr}): ${t}`, ...e);
}
function Rs(t, ...e) {
  qs.logLevel <= ie.ERROR && qs.error(`Auth (${Xr}): ${t}`, ...e);
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
  throw bl(t, ...e);
}
function ct(t, ...e) {
  return bl(t, ...e);
}
function uh(t, e, n) {
  const r = {
    ...Kg(),
    [e]: n
  };
  return new as("auth", "Firebase", r).create(e, {
    appName: t.name
  });
}
function Ft(t) {
  return uh(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function bl(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return ch.create(t, ...e);
}
function P(t, e, ...n) {
  if (!t)
    throw bl(e, ...n);
}
function Jt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw Rs(e), new Error(e);
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
function Na() {
  return typeof self < "u" && self.location?.href || "";
}
function dh() {
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
  (dh() || I_() || "connection" in navigator) ? navigator.onLine : !0;
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
class ls {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, an(n > e, "Short delay should be less than long delay!"), this.isMobile = _l() || eh();
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
function wl(t, e) {
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
class hh {
  static initialize(e, n, r) {
    this.fetchImpl = e, n && (this.headersImpl = n), r && (this.responseImpl = r);
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
], ev = new ls(3e4, 6e4);
function nt(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function ut(t, e, n, r, i = {}) {
  return fh(t, i, async () => {
    let s = {}, o = {};
    r && (e === "GET" ? o = r : s = {
      body: JSON.stringify(r)
    });
    const a = dr({
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
    return E_() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && Jr(t.emulatorConfig.host) && (c.credentials = "include"), hh.fetch()(await ph(t, t.config.apiHost, n, a), c);
  });
}
async function fh(t, e, n) {
  t._canInitEmulator = !1;
  const r = { ...Xg, ...e };
  try {
    const i = new nv(t), s = await Promise.race([
      n(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw gi(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw gi(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw gi(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw gi(t, "user-disabled", o);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw uh(t, d, c);
      Nt(t, d);
    }
  } catch (i) {
    if (i instanceof Un)
      throw i;
    Nt(t, "network-request-failed", { message: String(i) });
  }
}
async function Wn(t, e, n, r, i = {}) {
  const s = await ut(t, e, n, r, i);
  return "mfaPendingCredential" in s && Nt(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
async function ph(t, e, n, r) {
  const i = `${e}${n}?${r}`, s = t, o = s.config.emulator ? wl(t.config, i) : `${t.config.apiScheme}://${i}`;
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
    this.auth = e, this.timer = null, this.promise = new Promise((n, r) => {
      this.timer = setTimeout(() => r(ct(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), ev.get());
    });
  }
}
function gi(t, e, n) {
  const r = {
    appName: t.name
  };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = ct(t, e, r);
  return i.customData._tokenResponse = n, i;
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
function jc(t) {
  return t !== void 0 && t.getResponse !== void 0;
}
function Hc(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class mh {
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
async function rv(t) {
  return (await ut(
    t,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function _h(t, e) {
  return ut(t, "GET", "/v2/recaptchaConfig", nt(t, e));
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
async function iv(t, e) {
  return ut(t, "POST", "/v1/accounts:delete", e);
}
async function Gs(t, e) {
  return ut(t, "POST", "/v1/accounts:lookup", e);
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
function Si(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function sv(t, e = !1) {
  const n = Oe(t), r = await n.getIdToken(e), i = El(r);
  P(
    i && i.exp && i.auth_time && i.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, o = s?.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Si(ta(i.auth_time)),
    issuedAtTime: Si(ta(i.iat)),
    expirationTime: Si(ta(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: s?.sign_in_second_factor || null
  };
}
function ta(t) {
  return Number(t) * 1e3;
}
function El(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return Rs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Vs(n);
    return i ? JSON.parse(i) : (Rs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return Rs("Caught error parsing JWT payload as JSON", i?.toString()), null;
  }
}
function Vc(t) {
  const e = El(t);
  return P(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), P(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), P(
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
async function Ur(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof Un && ov(r) && t.auth.currentUser === t && await t.auth.signOut(), r;
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
      const r = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, r);
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
class xa {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Si(this.lastLoginAt), this.creationTime = Si(this.createdAt);
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
async function Ks(t) {
  const e = t.auth, n = await t.getIdToken(), r = await Ur(t, Gs(e, { idToken: n }));
  P(
    r?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = r.users[0];
  t._notifyReloadListener(i);
  const s = i.providerUserInfo?.length ? gh(i.providerUserInfo) : [], o = cv(t.providerData, s), a = t.isAnonymous, l = !(t.email && i.passwordHash) && !o?.length, c = a ? l : !1, d = {
    uid: i.localId,
    displayName: i.displayName || null,
    photoURL: i.photoUrl || null,
    email: i.email || null,
    emailVerified: i.emailVerified || !1,
    phoneNumber: i.phoneNumber || null,
    tenantId: i.tenantId || null,
    providerData: o,
    metadata: new xa(i.createdAt, i.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, d);
}
async function lv(t) {
  const e = Oe(t);
  await Ks(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function cv(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function gh(t) {
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
  const n = await fh(t, {}, async () => {
    const r = dr({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = t.config, o = await ph(t, i, "/v1/token", `key=${s}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: r
    };
    return t.emulatorConfig && Jr(t.emulatorConfig.host) && (l.credentials = "include"), hh.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function dv(t, e) {
  return ut(t, "POST", "/v2/accounts:revokeToken", nt(t, e));
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
class kr {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    P(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), P(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), P(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Vc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    P(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = Vc(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired ? this.accessToken : (P(
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await uv(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n, o = new kr();
    return r && (P(typeof r == "string", "internal-error", {
      appName: e
    }), o.refreshToken = r), i && (P(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), s && (P(typeof s == "number", "internal-error", {
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
    return Object.assign(new kr(), this.toJSON());
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
function gn(t, e) {
  P(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class At {
  constructor({ uid: e, auth: n, stsTokenManager: r, ...i }) {
    this.providerId = "firebase", this.proactiveRefresh = new av(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new xa(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Ur(this, this.stsTokenManager.getToken(this.auth, e));
    return P(
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
    this !== e && (P(
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
    P(
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
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), n && await Ks(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ot(this.auth.app))
      return Promise.reject(Ft(this.auth));
    const e = await this.getIdToken();
    return await Ur(this, iv(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    const r = n.displayName ?? void 0, i = n.email ?? void 0, s = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, a = n.tenantId ?? void 0, l = n._redirectEventId ?? void 0, c = n.createdAt ?? void 0, d = n.lastLoginAt ?? void 0, { uid: h, emailVerified: u, isAnonymous: f, providerData: p, stsTokenManager: g } = n;
    P(
      h && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const w = kr.fromJSON(this.name, g);
    P(
      typeof h == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), gn(r, e.name), gn(i, e.name), P(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), P(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), gn(s, e.name), gn(o, e.name), gn(a, e.name), gn(l, e.name), gn(c, e.name), gn(d, e.name);
    const S = new At({
      uid: h,
      auth: e,
      email: i,
      emailVerified: u,
      displayName: r,
      isAnonymous: f,
      photoURL: o,
      phoneNumber: s,
      tenantId: a,
      stsTokenManager: w,
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
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new kr();
    i.updateFromServerResponse(n);
    const s = new At({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await Ks(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, r) {
    const i = n.users[0];
    P(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = i.providerUserInfo !== void 0 ? gh(i.providerUserInfo) : [], o = !(i.email && i.passwordHash) && !s?.length, a = new kr();
    a.updateFromIdToken(r);
    const l = new At({
      uid: i.localId,
      auth: e,
      stsTokenManager: a,
      isAnonymous: o
    }), c = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: s,
      metadata: new xa(i.createdAt, i.lastLoginAt),
      isAnonymous: !(i.email && i.passwordHash) && !s?.length
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
class vh {
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
vh.type = "NONE";
const Bc = vh;
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
function Ps(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Ar {
  constructor(e, n, r) {
    this.persistence = e, this.auth = n, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = Ps(this.userKey, i.apiKey, s), this.fullPersistenceKey = Ps("persistence", i.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await Gs(this.auth, { idToken: e }).catch(() => {
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
  static async create(e, n, r = "authUser") {
    if (!n.length)
      return new Ar(Xt(Bc), e, r);
    const i = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let s = i[0] || Xt(Bc);
    const o = Ps(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const d = await c._get(o);
        if (d) {
          let h;
          if (typeof d == "string") {
            const u = await Gs(e, {
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
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new Ar(s, e, r) : (s = l[0], a && await s._set(o, a.toJSON()), await Promise.all(n.map(async (c) => {
      if (c !== s)
        try {
          await c._remove(o);
        } catch {
        }
    })), new Ar(s, e, r));
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
  if (Eh(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (yh(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Ch(e))
    return "Blackberry";
  if (Th(e))
    return "Webos";
  if (bh(e))
    return "Safari";
  if ((e.includes("chrome/") || wh(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Ih(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = t.match(n);
    if (r?.length === 2)
      return r[1];
  }
  return "Other";
}
function yh(t = Qe()) {
  return /firefox\//i.test(t);
}
function bh(t = Qe()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function wh(t = Qe()) {
  return /crios\//i.test(t);
}
function Eh(t = Qe()) {
  return /iemobile/i.test(t);
}
function Ih(t = Qe()) {
  return /android/i.test(t);
}
function Ch(t = Qe()) {
  return /blackberry/i.test(t);
}
function Th(t = Qe()) {
  return /webos/i.test(t);
}
function Il(t = Qe()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function hv(t = Qe()) {
  return Il(t) && !!window.navigator?.standalone;
}
function fv() {
  return C_() && document.documentMode === 10;
}
function Sh(t = Qe()) {
  return Il(t) || Ih(t) || Th(t) || Ch(t) || /windows phone/i.test(t) || Eh(t);
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
function kh(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = qc(Qe());
      break;
    case "Worker":
      n = `${qc(Qe())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Xr}/${r}`;
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
    const r = (s) => new Promise((o, a) => {
      try {
        const l = e(s);
        o(l);
      } catch (l) {
        a(l);
      }
    });
    r.onAbort = n, this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const n = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r?.message
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
  return ut(t, "GET", "/v2/passwordPolicy", nt(t, e));
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
    const r = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = e.length >= r), i && (n.meetsMaxPasswordLength = e.length <= i);
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
    let r;
    for (let i = 0; i < e.length; i++)
      r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        n,
        /* containsLowercaseCharacter= */
        r >= "a" && r <= "z",
        /* containsUppercaseCharacter= */
        r >= "A" && r <= "Z",
        /* containsNumericCharacter= */
        r >= "0" && r <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(r)
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
  updatePasswordCharacterOptionsStatuses(e, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s));
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
  constructor(e, n, r, i) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Gc(this), this.idTokenSubscription = new Gc(this), this.beforeStateQueue = new pv(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ch, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion, this._persistenceManagerAvailable = new Promise((s) => this._resolvePersistenceManagerAvailable = s);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = Xt(n)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await Ar.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
      const n = await Gs(this, { idToken: e }), r = await At._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (ot(this.app)) {
      const s = this.app.settings.authIdToken;
      return s ? new Promise((o) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(s).then(o, o));
      }) : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let r = n, i = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s = this.redirectUser?._redirectEventId, o = r?._redirectEventId, a = await this.tryRedirectSignIn(e);
      (!s || s === o) && a?.user && (r = a.user, i = !0);
    }
    if (!r)
      return this.directlySetCurrentUser(null);
    if (!r._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(r);
        } catch (s) {
          r = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s));
        }
      return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null);
    }
    return P(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r);
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
      await Ks(e);
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
    if (ot(this.app))
      return Promise.reject(Ft(this));
    const n = e ? Oe(e) : null;
    return n && P(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && P(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return ot(this.app) ? Promise.reject(Ft(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return ot(this.app) ? Promise.reject(Ft(this)) : this.queue(async () => {
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
    this._errorFactory = new as("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser)
        e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, n);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(), r = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: n
      };
      this.tenantId != null && (r.tenantId = this.tenantId), await dv(this, r);
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
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = e && Xt(e) || this._popupRedirectResolver;
      P(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Ar.create(
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
  registerStateListener(e, n, r, i) {
    if (this._deleted)
      return () => {
      };
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (P(
      a,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), a.then(() => {
      o || s(this.currentUser);
    }), typeof n == "function") {
      const l = e.addObserver(n, r, i);
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
    return P(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = kh(this.config.clientPlatform, this._getFrameworks()));
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
    const r = await this._getAppCheckToken();
    return r && (e[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = r), e;
  }
  async _getAppCheckToken() {
    if (ot(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && Yg(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function Bt(t) {
  return Oe(t);
}
class Gc {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = O_((n) => this.observer = n);
  }
  get next() {
    return P(
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
let cs = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function yv(t) {
  cs = t;
}
function Cl(t) {
  return cs.loadJS(t);
}
function bv() {
  return cs.recaptchaV2Script;
}
function wv() {
  return cs.recaptchaEnterpriseScript;
}
function Ev() {
  return cs.gapiScript;
}
function Ah(t) {
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
const Iv = 500, Cv = 6e4, Ts = 1e12;
class Tv {
  constructor(e) {
    this.auth = e, this.counter = Ts, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, n) {
    const r = this.counter;
    return this._widgets.set(r, new Av(e, this.auth.name, n || {})), this.counter++, r;
  }
  reset(e) {
    const n = e || Ts;
    this._widgets.get(n)?.delete(), this._widgets.delete(n);
  }
  getResponse(e) {
    const n = e || Ts;
    return this._widgets.get(n)?.getResponse() || "";
  }
  async execute(e) {
    const n = e || Ts;
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
  constructor(e, n, r) {
    this.params = r, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const i = typeof e == "string" ? document.getElementById(e) : e;
    P(i, "argument-error", { appName: n }), this.container = i, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
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
  for (let r = 0; r < t; r++)
    e.push(n.charAt(Math.floor(Math.random() * n.length)));
  return e.join("");
}
const Pv = "recaptcha-enterprise", ki = "NO_RECAPTCHA";
class Rh {
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
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        _h(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new mh(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = c : s._tenantRecaptchaConfigs[s.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function i(s, o, a) {
      const l = window.grecaptcha;
      Hc(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(ki);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new Sv().execute("siteKey", { action: "verify" }) : new Promise((s, o) => {
      r(this.auth).then((a) => {
        if (!n && Hc(window.grecaptcha))
          i(a, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = wv();
          l.length !== 0 && (l += a), Cl(l).then(() => {
            i(a, s, o);
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
async function ci(t, e, n, r = !1, i = !1) {
  const s = new Rh(t);
  let o;
  if (i)
    o = ki;
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
  return r ? Object.assign(a, { captchaResp: o }) : Object.assign(a, { captchaResponse: o }), Object.assign(a, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(a, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), a;
}
async function Rr(t, e, n, r, i) {
  if (i === "EMAIL_PASSWORD_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const s = await ci(
        t,
        e,
        n,
        n === "getOobCode"
        /* RecaptchaActionName.GET_OOB_CODE */
      );
      return r(t, s);
    } else
      return r(t, e).catch(async (s) => {
        if (s.code === "auth/missing-recaptcha-token") {
          console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const o = await ci(
            t,
            e,
            n,
            n === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return r(t, o);
        } else
          return Promise.reject(s);
      });
  else if (i === "PHONE_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */
    )) {
      const s = await ci(t, e, n);
      return r(t, s).catch(async (o) => {
        if (t._getRecaptchaConfig()?.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ) === "AUDIT" && (o.code === "auth/missing-recaptcha-token" || o.code === "auth/invalid-app-credential")) {
          console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
          const a = await ci(
            t,
            e,
            n,
            !1,
            // isCaptchaResp
            !0
            // isFakeToken
          );
          return r(t, a);
        }
        return Promise.reject(o);
      });
    } else {
      const s = await ci(
        t,
        e,
        n,
        !1,
        // isCaptchaResp
        !0
        // isFakeToken
      );
      return r(t, s);
    }
  else
    return Promise.reject(i + " provider is not supported.");
}
async function Nv(t) {
  const e = Bt(t), n = await _h(e, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), r = new mh(n);
  e.tenantId == null ? e._agentRecaptchaConfig = r : e._tenantRecaptchaConfigs[e.tenantId] = r, r.isAnyProviderEnabled() && new Rh(e).verify();
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
  const n = yl(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(), s = n.getOptions();
    if (nr(s, e ?? {}))
      return i;
    Nt(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function Lv(t, e) {
  const n = e?.persistence || [], r = (Array.isArray(n) ? n : [n]).map(Xt);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(r, e?.popupRedirectResolver);
}
function Ov(t, e, n) {
  const r = Bt(t);
  P(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !1, s = Ph(e), { host: o, port: a } = Dv(e), l = a === null ? "" : `:${a}`, c = { url: `${s}//${o}${l}/` }, d = Object.freeze({
    host: o,
    port: a,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  });
  if (!r._canInitEmulator) {
    P(
      r.config.emulator && r.emulatorConfig,
      r,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), P(
      nr(c, r.config.emulator) && nr(d, r.emulatorConfig),
      r,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  r.config.emulator = c, r.emulatorConfig = d, r.settings.appVerificationDisabledForTesting = !0, Jr(o) ? (Xd(`${s}//${o}${l}`), Zd("Auth", !0)) : Mv();
}
function Ph(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Dv(t) {
  const e = Ph(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: Kc(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
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
class So {
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
  return ut(t, "POST", "/v1/accounts:signUp", e);
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
  return Wn(t, "POST", "/v1/accounts:signInWithPassword", nt(t, e));
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
  return Wn(t, "POST", "/v1/accounts:signInWithEmailLink", nt(t, e));
}
async function Wv(t, e) {
  return Wn(t, "POST", "/v1/accounts:signInWithEmailLink", nt(t, e));
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
class Hi extends So {
  /** @internal */
  constructor(e, n, r, i = null) {
    super("password", r), this._email = e, this._password = n, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Hi(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, r = null) {
    return new Hi(e, n, "emailLink", r);
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
        return Rr(
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
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Rr(
          e,
          r,
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
async function Pr(t, e) {
  return Wn(t, "POST", "/v1/accounts:signInWithIdp", nt(t, e));
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
const jv = "http://localhost";
class ir extends So {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new ir(e.providerId, e.signInMethod);
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
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i, ...s } = n;
    if (!r || !i)
      return null;
    const o = new ir(r, i);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Pr(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return r.idToken = n, Pr(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, Pr(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: jv,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = dr(n);
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
  return ut(t, "POST", "/v1/accounts:sendVerificationCode", nt(t, e));
}
async function Hv(t, e) {
  return Wn(t, "POST", "/v1/accounts:signInWithPhoneNumber", nt(t, e));
}
async function Vv(t, e) {
  const n = await Wn(t, "POST", "/v1/accounts:signInWithPhoneNumber", nt(t, e));
  if (n.temporaryProof)
    throw gi(t, "account-exists-with-different-credential", n);
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
  return Wn(t, "POST", "/v1/accounts:signInWithPhoneNumber", nt(t, n), zv);
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
class Ai extends So {
  constructor(e) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    ), this.params = e;
  }
  /** @internal */
  static _fromVerification(e, n) {
    return new Ai({ verificationId: e, verificationCode: n });
  }
  /** @internal */
  static _fromTokenResponse(e, n) {
    return new Ai({ phoneNumber: e, temporaryProof: n });
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Hv(e, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return Vv(e, {
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
    const { temporaryProof: e, phoneNumber: n, verificationId: r, verificationCode: i } = this.params;
    return e && n ? { temporaryProof: e, phoneNumber: n } : {
      sessionInfo: r,
      code: i
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
    const { verificationId: n, verificationCode: r, phoneNumber: i, temporaryProof: s } = e;
    return !r && !n && !i && !s ? null : new Ai({
      verificationId: n,
      verificationCode: r,
      phoneNumber: i,
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
  const e = mi(_i(t)).link, n = e ? mi(_i(e)).deep_link_id : null, r = mi(_i(t)).deep_link_id;
  return (r ? mi(_i(r)).link : null) || r || n || e || t;
}
class Tl {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = mi(_i(e)), r = n.apiKey ?? null, i = n.oobCode ?? null, s = qv(n.mode ?? null);
    P(
      r && i && s,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = r, this.operation = s, this.code = i, this.continueUrl = n.continueUrl ?? null, this.languageCode = n.lang ?? null, this.tenantId = n.tenantId ?? null;
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
      return new Tl(n);
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
class Zr {
  constructor() {
    this.providerId = Zr.PROVIDER_ID;
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
    return Hi._fromEmailAndPassword(e, n);
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
    const r = Tl.parseLink(n);
    return P(
      r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Hi._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
Zr.PROVIDER_ID = "password";
Zr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Zr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
class Nh {
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
class us extends Nh {
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
class vn extends us {
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
    return ir._fromParams({
      providerId: vn.PROVIDER_ID,
      signInMethod: vn.FACEBOOK_SIGN_IN_METHOD,
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
vn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
vn.PROVIDER_ID = "facebook.com";
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
class yn extends us {
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
    return ir._fromParams({
      providerId: yn.PROVIDER_ID,
      signInMethod: yn.GOOGLE_SIGN_IN_METHOD,
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
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r)
      return null;
    try {
      return yn.credential(n, r);
    } catch {
      return null;
    }
  }
}
yn.GOOGLE_SIGN_IN_METHOD = "google.com";
yn.PROVIDER_ID = "google.com";
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
class bn extends us {
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
    return ir._fromParams({
      providerId: bn.PROVIDER_ID,
      signInMethod: bn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return bn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return bn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return bn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
bn.GITHUB_SIGN_IN_METHOD = "github.com";
bn.PROVIDER_ID = "github.com";
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
class wn extends us {
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
    return ir._fromParams({
      providerId: wn.PROVIDER_ID,
      signInMethod: wn.TWITTER_SIGN_IN_METHOD,
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
    return wn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return wn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r)
      return null;
    try {
      return wn.credential(n, r);
    } catch {
      return null;
    }
  }
}
wn.TWITTER_SIGN_IN_METHOD = "twitter.com";
wn.PROVIDER_ID = "twitter.com";
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
  return Wn(t, "POST", "/v1/accounts:signUp", nt(t, e));
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
class sr {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await At._fromIdTokenResponse(e, r, i), o = Qc(r);
    return new sr({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const i = Qc(r);
    return new sr({
      user: e,
      providerId: i,
      _tokenResponse: r,
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
class Ys extends Un {
  constructor(e, n, r, i) {
    super(n.code, n.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, Ys.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Ys(e, n, r, i);
  }
}
function xh(t, e, n, r) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? Ys._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function Yv(t, e, n = !1) {
  const r = await Ur(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return sr._forOperation(t, "link", r);
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
  const { auth: r } = t;
  if (ot(r.app))
    return Promise.reject(Ft(r));
  const i = "reauthenticate";
  try {
    const s = await Ur(t, xh(r, i, e, t), n);
    P(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = El(s.idToken);
    P(
      o,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return P(
      t.uid === a,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), sr._forOperation(t, i, s);
  } catch (s) {
    throw s?.code === "auth/user-not-found" && Nt(
      r,
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
async function Lh(t, e, n = !1) {
  if (ot(t.app))
    return Promise.reject(Ft(t));
  const r = "signIn", i = await xh(t, r, e), s = await sr._fromIdTokenResponse(t, r, i);
  return n || await t._updateCurrentUser(s.user), s;
}
async function Oh(t, e) {
  return Lh(Bt(t), e);
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
async function Dh(t) {
  const e = Bt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function Jv(t, e, n) {
  if (ot(t.app))
    return Promise.reject(Ft(t));
  const r = Bt(t), o = await Rr(
    r,
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
    throw l.code === "auth/password-does-not-meet-requirements" && Dh(t), l;
  }), a = await sr._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(a.user), a;
}
function Xv(t, e, n) {
  return ot(t.app) ? Promise.reject(Ft(t)) : Oh(Oe(t), Zr.credential(e, n)).catch(async (r) => {
    throw r.code === "auth/password-does-not-meet-requirements" && Dh(t), r;
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
  return ut(t, "POST", "/v1/accounts:update", e);
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
  const r = Oe(t), s = {
    idToken: await r.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Ur(r, Zv(r.auth, s));
  r.displayName = o.displayName || null, r.photoURL = o.photoUrl || null;
  const a = r.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = r.displayName, a.photoURL = r.photoURL), await r._updateTokensIfNecessary(o);
}
function ty(t, e, n, r) {
  return Oe(t).onIdTokenChanged(e, n, r);
}
function ny(t, e, n) {
  return Oe(t).beforeAuthStateChanged(e, n);
}
function ry(t, e, n, r) {
  return Oe(t).onAuthStateChanged(e, n, r);
}
function iy(t) {
  return Oe(t).signOut();
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
  return ut(t, "POST", "/v2/accounts/mfaEnrollment:start", nt(t, e));
}
const Qs = "__sak";
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
class Mh {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Qs, "1"), this.storage.removeItem(Qs), Promise.resolve(!0)) : Promise.resolve(!1);
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
class $h extends Mh {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Sh(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n), i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    n ? this.detachListener() : this.stopPolling();
    const i = () => {
      const o = this.storage.getItem(r);
      !n && this.localCache[r] === o || this.notifyListeners(r, o);
    }, s = this.storage.getItem(r);
    fv() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, oy) : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, n, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: n,
            newValue: r
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
$h.type = "LOCAL";
const ay = $h;
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
class Fh extends Mh {
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
Fh.type = "SESSION";
const Uh = Fh;
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
class ko {
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
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n)
      return n;
    const r = new ko(e);
    return this.receivers.push(r), r;
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
    const n = e, { eventId: r, eventType: i, data: s } = n.data, o = this.handlersMap[i];
    if (!o?.size)
      return;
    n.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: i
    });
    const a = Array.from(o).map(async (c) => c(n.origin, s)), l = await ly(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
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
ko.receivers = [];
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
function Sl(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++)
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
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, o;
    return new Promise((a, l) => {
      const c = Sl("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      o = {
        messageChannel: i,
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
      }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
        eventType: e,
        eventId: c,
        data: n
      }, [i.port2]);
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
function Te() {
  return window;
}
function uy(t) {
  Te().location.href = t;
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
function kl() {
  return typeof Te().WorkerGlobalScope < "u" && typeof Te().importScripts == "function";
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
  return kl() ? self : null;
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
const Wh = "firebaseLocalStorageDb", py = 1, Js = "firebaseLocalStorage", jh = "fbase_key";
class ds {
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
function Ao(t, e) {
  return t.transaction([Js], e ? "readwrite" : "readonly").objectStore(Js);
}
function my() {
  const t = indexedDB.deleteDatabase(Wh);
  return new ds(t).toPromise();
}
function La() {
  const t = indexedDB.open(Wh, py);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const r = t.result;
      try {
        r.createObjectStore(Js, { keyPath: jh });
      } catch (i) {
        n(i);
      }
    }), t.addEventListener("success", async () => {
      const r = t.result;
      r.objectStoreNames.contains(Js) ? e(r) : (r.close(), await my(), e(await La()));
    });
  });
}
async function Xc(t, e, n) {
  const r = Ao(t, !0).put({
    [jh]: e,
    value: n
  });
  return new ds(r).toPromise();
}
async function _y(t, e) {
  const n = Ao(t, !1).get(e), r = await new ds(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Zc(t, e) {
  const n = Ao(t, !0).delete(e);
  return new ds(n).toPromise();
}
const gy = 800, vy = 3;
class Hh {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await La(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > vy)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return kl() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = ko._getInstance(fy()), this.receiver._subscribe("keyChanged", async (e, n) => ({
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
      const e = await La();
      return await Xc(e, Qs, "1"), await Zc(e, Qs), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((r) => Xc(r, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((r) => _y(r, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Zc(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Ao(i, !1).getAll();
      return new ds(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const n = [], r = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(n);
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
Hh.type = "LOCAL";
const yy = Hh;
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
  return ut(t, "POST", "/v2/accounts/mfaSignIn:start", nt(t, e));
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
const na = Ah("rcb"), by = new ls(3e4, 6e4);
class wy {
  constructor() {
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!Te().grecaptcha?.render;
  }
  load(e, n = "") {
    return P(
      Ey(n),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(n) && jc(Te().grecaptcha) ? Promise.resolve(Te().grecaptcha) : new Promise((r, i) => {
      const s = Te().setTimeout(() => {
        i(ct(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, by.get());
      Te()[na] = () => {
        Te().clearTimeout(s), delete Te()[na];
        const a = Te().grecaptcha;
        if (!a || !jc(a)) {
          i(ct(
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
        }, this.hostLanguage = n, r(a);
      };
      const o = `${bv()}?${dr({
        onload: na,
        render: "explicit",
        hl: n
      })}`;
      Cl(o).catch(() => {
        clearTimeout(s), i(ct(
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
    return !!Te().grecaptcha?.render && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
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
const Ri = "recaptcha", Cy = {
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
  constructor(e, n, r = {
    ...Cy
  }) {
    this.parameters = r, this.type = Ri, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = Bt(e), this.isInvisible = this.parameters.size === "invisible", P(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const i = typeof n == "string" ? document.getElementById(n) : n;
    P(
      i,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Iy() : new wy(), this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
  async verify() {
    this.assertNotDestroyed();
    const e = await this.render(), n = this.getAssertedRecaptcha(), r = n.getResponse(e);
    return r || new Promise((i) => {
      const s = (o) => {
        o && (this.tokenChangeListeners.delete(s), i(o));
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
    P(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), P(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), P(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }
  makeTokenCallback(e) {
    return (n) => {
      if (this.tokenChangeListeners.forEach((r) => r(n)), typeof e == "function")
        e(n);
      else if (typeof e == "string") {
        const r = Te()[e];
        typeof r == "function" && r(n);
      }
    };
  }
  assertNotDestroyed() {
    P(
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
    P(
      dh() && !kl(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await Sy(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await rv(this.auth);
    P(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return P(
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
    const n = Ai._fromVerification(this.verificationId, e);
    return this.onConfirmation(n);
  }
}
async function Ay(t, e, n) {
  if (ot(t.app))
    return Promise.reject(Ft(t));
  const r = Bt(t), i = await Ry(r, e, Oe(n));
  return new ky(i, (s) => Oh(r, s));
}
async function Ry(t, e, n) {
  if (!t._getRecaptchaConfig())
    try {
      await Nv(t);
    } catch {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  try {
    let r;
    if (typeof e == "string" ? r = {
      phoneNumber: e
    } : r = e, "session" in r) {
      const i = r.session;
      if ("phoneNumber" in r) {
        P(
          i.type === "enroll",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = {
          idToken: i.credential,
          phoneEnrollmentInfo: {
            phoneNumber: r.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        return (await Rr(
          t,
          s,
          "mfaSmsEnrollment",
          async (c, d) => {
            if (d.phoneEnrollmentInfo.captchaResponse === ki) {
              P(
                n?.type === Ri,
                c,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const h = await ra(c, d, n);
              return Jc(c, h);
            }
            return Jc(c, d);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((c) => Promise.reject(c))).phoneSessionInfo.sessionInfo;
      } else {
        P(
          i.type === "signin",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = r.multiFactorHint?.uid || r.multiFactorUid;
        P(
          s,
          t,
          "missing-multi-factor-info"
          /* AuthErrorCode.MISSING_MFA_INFO */
        );
        const o = {
          mfaPendingCredential: i.credential,
          mfaEnrollmentId: s,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        return (await Rr(
          t,
          o,
          "mfaSmsSignIn",
          async (d, h) => {
            if (h.phoneSignInInfo.captchaResponse === ki) {
              P(
                n?.type === Ri,
                d,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const u = await ra(d, h, n);
              return eu(d, u);
            }
            return eu(d, h);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((d) => Promise.reject(d))).phoneResponseInfo.sessionInfo;
      }
    } else {
      const i = {
        phoneNumber: r.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
      };
      return (await Rr(
        t,
        i,
        "sendVerificationCode",
        async (l, c) => {
          if (c.captchaResponse === ki) {
            P(
              n?.type === Ri,
              l,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const d = await ra(l, c, n);
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
async function ra(t, e, n) {
  P(
    n.type === Ri,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const r = await n.verify();
  P(
    typeof r == "string",
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const i = { ...e };
  if ("phoneEnrollmentInfo" in i) {
    const s = i.phoneEnrollmentInfo.phoneNumber, o = i.phoneEnrollmentInfo.captchaResponse, a = i.phoneEnrollmentInfo.clientType, l = i.phoneEnrollmentInfo.recaptchaVersion;
    return Object.assign(i, {
      phoneEnrollmentInfo: {
        phoneNumber: s,
        recaptchaToken: r,
        captchaResponse: o,
        clientType: a,
        recaptchaVersion: l
      }
    }), i;
  } else if ("phoneSignInInfo" in i) {
    const s = i.phoneSignInInfo.captchaResponse, o = i.phoneSignInInfo.clientType, a = i.phoneSignInInfo.recaptchaVersion;
    return Object.assign(i, {
      phoneSignInInfo: {
        recaptchaToken: r,
        captchaResponse: s,
        clientType: o,
        recaptchaVersion: a
      }
    }), i;
  } else
    return Object.assign(i, { recaptchaToken: r }), i;
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
  return e ? Xt(e) : (P(
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
class Al extends So {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return Pr(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Pr(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Pr(e, this._buildIdpRequest());
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
  return Lh(t.auth, new Al(t), t.bypassAuthState);
}
function xy(t) {
  const { auth: e, user: n } = t;
  return P(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Qv(n, new Al(t), t.bypassAuthState);
}
async function Ly(t) {
  const { auth: e, user: n } = t;
  return P(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Yv(n, new Al(t), t.bypassAuthState);
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
class Vh {
  constructor(e, n, r, i, s = !1) {
    this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n];
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: a } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
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
const Oy = new ls(2e3, 1e4);
class Er extends Vh {
  constructor(e, n, r, i, s) {
    super(e, n, i, s), this.provider = r, this.authWindow = null, this.pollId = null, Er.currentPopupAction && Er.currentPopupAction.cancel(), Er.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return P(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    an(this.filter.length === 1, "Popup operations only handle one event");
    const e = Sl();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(ct(
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
    this.reject(ct(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Er.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(ct(
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
Er.currentPopupAction = null;
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
const Dy = "pendingRedirect", Ns = /* @__PURE__ */ new Map();
class My extends Vh {
  constructor(e, n, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], n, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = Ns.get(this.auth._key());
    if (!e) {
      try {
        const r = await $y(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Ns.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Ns.set(this.auth._key(), () => Promise.resolve(null)), e();
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
  const n = Wy(e), r = Uy(t);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(n) === "true";
  return await r._remove(n), i;
}
function Fy(t, e) {
  Ns.set(t._key(), e);
}
function Uy(t) {
  return Xt(t._redirectPersistence);
}
function Wy(t) {
  return Ps(Dy, t.config.apiKey, t.name);
}
async function jy(t, e, n = !1) {
  if (ot(t.app))
    return Promise.reject(Ft(t));
  const r = Bt(t), i = Py(r, e), o = await new My(r, i, n).execute();
  return o && !n && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o;
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
const Hy = 600 * 1e3;
class Vy {
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
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (n = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !zy(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !zh(e)) {
      const r = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(ct(this.auth, r));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Hy && this.cachedEventUids.clear(), this.cachedEventUids.has(tu(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(tu(e)), this.lastProcessedEventTime = Date.now();
  }
}
function tu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function zh({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function zy(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return zh(t);
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
  return ut(t, "GET", "/v1/projects", e);
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
  const e = Na(), { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === r;
  }
  if (!Gy.test(n))
    return !1;
  if (qy.test(t))
    return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
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
const Qy = new ls(3e4, 6e4);
function nu() {
  const t = Te().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function Jy(t) {
  return new Promise((e, n) => {
    function r() {
      nu(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          nu(), n(ct(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Qy.get()
      });
    }
    if (Te().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Te().gapi?.load)
      r();
    else {
      const i = Ah("iframefcb");
      return Te()[i] = () => {
        gapi.load ? r() : n(ct(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Cl(`${Ev()}?onload=${i}`).catch((s) => n(s));
    }
  }).catch((e) => {
    throw xs = null, e;
  });
}
let xs = null;
function Xy(t) {
  return xs = xs || Jy(t), xs;
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
const Zy = new ls(5e3, 15e3), eb = "__/auth/iframe", tb = "emulator/auth/iframe", nb = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, rb = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function ib(t) {
  const e = t.config;
  P(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? wl(e, tb) : `https://${t.config.authDomain}/${eb}`, r = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Xr
  }, i = rb.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${dr(r).slice(1)}`;
}
async function sb(t) {
  const e = await Xy(t), n = Te().gapi;
  return P(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: ib(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: nb,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = ct(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Te().setTimeout(() => {
      s(o);
    }, Zy.get());
    function l() {
      Te().clearTimeout(a), i(r);
    }
    r.ping(l).then(l, () => {
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
class ru {
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
function db(t, e, n, r = ab, i = lb) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = {
    ...ob,
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: o
  }, c = Qe().toLowerCase();
  n && (a = wh(c) ? cb : n), yh(c) && (e = e || ub, l.scrollbars = "yes");
  const d = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (hv(c) && a !== "_self")
    return hb(e || "", a), new ru(null);
  const h = window.open(e || "", a, d);
  P(
    h,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    h.focus();
  } catch {
  }
  return new ru(h);
}
function hb(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
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
async function iu(t, e, n, r, i, s) {
  P(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), P(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Xr,
    eventId: i
  };
  if (e instanceof Nh) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Ta(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({}))
      o[d] = h;
  }
  if (e instanceof us) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(), c = l ? `#${mb}=${encodeURIComponent(l)}` : "";
  return `${_b(t)}?${dr(a).slice(1)}${c}`;
}
function _b({ config: t }) {
  return t.emulator ? wl(t, pb) : `https://${t.authDomain}/${fb}`;
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
const ia = "webStorageSupport";
class gb {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Uh, this._completeRedirectFn = jy, this._overrideRedirectResult = Fy;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, r, i) {
    an(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const s = await iu(e, n, r, Na(), i);
    return db(e, s, Sl());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await iu(e, n, r, Na(), i);
    return uy(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (an(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: r }, r.catch(() => {
      delete this.eventManagers[n];
    }), r;
  }
  async initAndGetManager(e) {
    const n = await sb(e), r = new Vy(e);
    return n.register("authEvent", (i) => (P(
      i?.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = n, r;
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(ia, { type: ia }, (i) => {
      const s = i?.[0]?.[ia];
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
    return Sh() || bh() || Il();
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
    const n = this.auth.onIdTokenChanged((r) => {
      e(r?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    P(
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
  Fr(new rr(
    "auth",
    (e, { options: n }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = r.options;
      P(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: kh(t)
      }, c = new vv(r, i, s, l);
      return Lv(c, n), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, n, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Fr(new rr(
    "auth-internal",
    (e) => {
      const n = Bt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new yb(r))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Rn(su, ou, bb(t)), Rn(su, ou, "esm2020");
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
const Eb = 300, Ib = Jd("authIdTokenMaxAge") || Eb;
let au = null;
const Cb = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), r = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > Ib)
    return;
  const i = n?.token;
  au !== i && (au = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Tb(t = sh()) {
  const e = yl(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = xv(t, {
    popupRedirectResolver: vb,
    persistence: [
      yy,
      ay,
      Uh
    ]
  }), r = Jd("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = Cb(s.toString());
      ny(n, o, () => o(n.currentUser)), ty(n, (a) => o(a));
    }
  }
  const i = Yd("auth");
  return i && Ov(n, `http://${i}`), n;
}
function Sb() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
yv({
  loadJS(t) {
    return new Promise((e, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", t), r.onload = e, r.onerror = (i) => {
        const s = ct(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = i, n(s);
      }, r.type = "text/javascript", r.charset = "UTF-8", Sb().appendChild(r);
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
let Bh = "";
function kb(t) {
  Bh = t;
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
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Ae(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : Wi(n);
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
const qh = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Ab(e);
    }
  } catch {
  }
  return new Rb();
}, Yn = qh("localStorage"), Pb = qh("sessionStorage");
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
const Nr = new gl("@firebase/database"), Nb = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), Gh = function(t) {
  const e = $_(t), n = new L_();
  n.update(e);
  const r = n.digest();
  return pl.encodeByteArray(r);
}, hs = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) || r && typeof r == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof r.length == "number" ? e += hs.apply(null, r) : typeof r == "object" ? e += Ae(r) : e += r, e += " ";
  }
  return e;
};
let Pi = null, uu = !0;
const xb = function(t, e) {
  C(!0, "Can't turn on custom loggers persistently."), Nr.logLevel = ie.VERBOSE, Pi = Nr.log.bind(Nr);
}, $e = function(...t) {
  if (uu === !0 && (uu = !1, Pi === null && Pb.get("logging_enabled") === !0 && xb()), Pi) {
    const e = hs.apply(null, t);
    Pi(e);
  }
}, fs = function(t) {
  return function(...e) {
    $e(t, ...e);
  };
}, Oa = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + hs(...t);
  Nr.error(e);
}, ln = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${hs(...t)}`;
  throw Nr.error(e), new Error(e);
}, Ye = function(...t) {
  const e = "FIREBASE WARNING: " + hs(...t);
  Nr.warn(e);
}, Lb = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, Rl = function(t) {
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
}, Wr = "[MIN_NAME]", or = "[MAX_NAME]", hr = function(t, e) {
  if (t === e)
    return 0;
  if (t === Wr || e === or)
    return -1;
  if (e === Wr || t === or)
    return 1;
  {
    const n = du(t), r = du(e);
    return n !== null ? r !== null ? n - r === 0 ? t.length - e.length : n - r : -1 : r !== null ? 1 : t < e ? -1 : 1;
  }
}, Db = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, ui = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + Ae(e));
}, Pl = function(t) {
  if (typeof t != "object" || t === null)
    return Ae(t);
  const e = [];
  for (const r in t)
    e.push(r);
  e.sort();
  let n = "{";
  for (let r = 0; r < e.length; r++)
    r !== 0 && (n += ","), n += Ae(e[r]), n += ":", n += Pl(t[e[r]]);
  return n += "}", n;
}, Kh = function(t, e) {
  const n = t.length;
  if (n <= e)
    return [t];
  const r = [];
  for (let i = 0; i < n; i += e)
    i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
  return r;
};
function Ue(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}
const Yh = function(t) {
  C(!Rl(t), "Invalid JSON number");
  const e = 11, n = 52, r = (1 << e - 1) - 1;
  let i, s, o, a, l;
  t === 0 ? (s = 0, o = 0, i = 1 / t === -1 / 0 ? 1 : 0) : (i = t < 0, t = Math.abs(t), t >= Math.pow(2, 1 - r) ? (a = Math.min(Math.floor(Math.log(t) / Math.LN2), r), s = a + r, o = Math.round(t * Math.pow(2, n - a) - Math.pow(2, n))) : (s = 0, o = Math.round(t / Math.pow(2, 1 - r - n))));
  const c = [];
  for (l = n; l; l -= 1)
    c.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
  for (l = e; l; l -= 1)
    c.push(s % 2 ? 1 : 0), s = Math.floor(s / 2);
  c.push(i ? 1 : 0), c.reverse();
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
  const r = new Error(t + " at " + e._path.toString() + ": " + n);
  return r.code = t.toUpperCase(), r;
}
const Ub = new RegExp("^-?(0*)\\d{1,10}$"), Wb = -2147483648, jb = 2147483647, du = function(t) {
  if (Ub.test(t)) {
    const e = Number(t);
    if (e >= Wb && e <= jb)
      return e;
  }
  return null;
}, ei = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw Ye("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, Hb = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, Ni = function(t, e) {
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
class Vb {
  constructor(e, n) {
    this.appCheckProvider = n, this.appName = e.name, ot(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = n?.getImmediate({ optional: !0 }), this.appCheck || n?.get().then((r) => this.appCheck = r);
  }
  getToken(e) {
    if (this.serverAppAppCheckToken) {
      if (e)
        throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
      return Promise.resolve({ token: this.serverAppAppCheckToken });
    }
    return this.appCheck ? this.appCheck.getToken(e) : new Promise((n, r) => {
      setTimeout(() => {
        this.appCheck ? this.getToken(e).then(n, r) : n(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.appCheckProvider?.get().then((n) => n.addTokenListener(e));
  }
  notifyForInvalidToken() {
    Ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
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
  constructor(e, n, r) {
    this.appName_ = e, this.firebaseOptions_ = n, this.authProvider_ = r, this.auth_ = null, this.auth_ = r.getImmediate({ optional: !0 }), this.auth_ || r.onInit((i) => this.auth_ = i);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((n) => n && n.code === "auth/token-not-initialized" ? ($e("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(n)) : new Promise((n, r) => {
      setTimeout(() => {
        this.auth_ ? this.getToken(e).then(n, r) : n(null);
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
    "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Ye(e);
  }
}
class Ls {
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
Ls.OWNER = "owner";
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
const Nl = "5", Qh = "v", Jh = "s", Xh = "r", Zh = "f", ef = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, tf = "ls", nf = "p", Da = "ac", rf = "websocket", sf = "long_polling";
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
class of {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, r, i, s = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = r, this.webSocketOnly = i, this.nodeAdmin = s, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = Yn.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && Yn.set("host:" + this._host, this.internalHost));
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
function af(t, e, n) {
  C(typeof e == "string", "typeof type must == string"), C(typeof n == "object", "typeof params must == object");
  let r;
  if (e === rf)
    r = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === sf)
    r = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  Bb(t) && (n.ns = t.namespace);
  const i = [];
  return Ue(n, (s, o) => {
    i.push(s + "=" + o);
  }), r + i.join("&");
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
const sa = {}, oa = {};
function xl(t) {
  const e = t.toString();
  return sa[e] || (sa[e] = new qb()), sa[e];
}
function Gb(t, e) {
  const n = t.toString();
  return oa[n] || (oa[n] = e()), oa[n];
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
      const r = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < r.length; ++i)
        r[i] && ei(() => {
          this.onMessage_(r[i]);
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
const hu = "start", Yb = "close", Qb = "pLPCommand", Jb = "pRTLPCB", lf = "id", cf = "pw", uf = "ser", Xb = "cb", Zb = "seg", ew = "ts", tw = "d", nw = "dframe", df = 1870, hf = 30, rw = df - hf, iw = 25e3, sw = 3e4;
class Ir {
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
  constructor(e, n, r, i, s, o, a) {
    this.connId = e, this.repoInfo = n, this.applicationId = r, this.appCheckToken = i, this.authToken = s, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = fs(e), this.stats_ = xl(n), this.urlFn = (l) => (this.appCheckToken && (l[Da] = this.appCheckToken), af(n, sf, l));
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
      this.scriptTagHolder = new Ll((...s) => {
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
      const r = {};
      r[hu] = "t", r[uf] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (r[Xb] = this.scriptTagHolder.uniqueCallbackIdentifier), r[Qh] = Nl, this.transportSessionId && (r[Jh] = this.transportSessionId), this.lastSessionId && (r[tf] = this.lastSessionId), this.applicationId && (r[nf] = this.applicationId), this.appCheckToken && (r[Da] = this.appCheckToken), typeof location < "u" && location.hostname && ef.test(location.hostname) && (r[Xh] = Zh);
      const i = this.urlFn(r);
      this.log_("Connecting via long-poll to " + i), this.scriptTagHolder.addTag(i, () => {
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
    Ir.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    Ir.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return Ir.forceAllow_ ? !0 : !Ir.forceDisallow_ && typeof document < "u" && document.createElement != null && !Mb() && !$b();
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
    const n = Ae(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const r = Gd(n), i = Kh(r, rw);
    for (let s = 0; s < i.length; s++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[s]), this.curSegmentNum++;
  }
  /**
   * This is how we notify the server that we're leaving.
   * We aren't able to send requests with DHTML on a window close event, but we can
   * trigger XHR requests in some browsers (everything but Opera basically).
   */
  addDisconnectPingFrame(e, n) {
    this.myDisconnFrame = document.createElement("iframe");
    const r = {};
    r[nw] = "t", r[lf] = e, r[cf] = n, this.myDisconnFrame.src = this.urlFn(r), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = Ae(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class Ll {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, r, i) {
    this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = Nb(), window[Qb + this.uniqueCallbackIdentifier] = e, window[Jb + this.uniqueCallbackIdentifier] = n, this.myIFrame = Ll.createIFrame_();
      let s = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (s = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        $e("frame writing exception"), a.stack && $e(a.stack), $e(a);
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
        e.contentWindow.document || $e("No IE domain setting required");
      } catch {
        const r = document.domain;
        e.src = "javascript:void((function(){document.open();document.domain='" + r + "';document.close();})())";
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
      e[lf] = this.myID, e[cf] = this.myPW, e[uf] = this.currentSerial;
      let n = this.urlFn(e), r = "", i = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + hf + r.length <= df; ) {
        const o = this.pendingSegs.shift();
        r = r + "&" + Zb + i + "=" + o.seg + "&" + ew + i + "=" + o.ts + "&" + tw + i + "=" + o.d, i++;
      }
      return n = n + r, this.addLongPollTag_(n, this.currentSerial), !0;
    } else
      return !1;
  }
  /**
   * Queue a packet for transmission to the server.
   * @param segnum - A sequential id for this packet segment used for reassembly
   * @param totalsegs - The total number of segments in this packet
   * @param data - The data for this segment.
   */
  enqueueSegment(e, n, r) {
    this.pendingSegs.push({ seg: e, ts: n, d: r }), this.alive && this.newRequest_();
  }
  /**
   * Add a script tag for a regular long-poll request.
   * @param url - The URL of the script tag.
   * @param serial - The serial number of the request.
   */
  addLongPollTag_(e, n) {
    this.outstandingRequests.add(n);
    const r = () => {
      this.outstandingRequests.delete(n), this.newRequest_();
    }, i = setTimeout(r, Math.floor(iw)), s = () => {
      clearTimeout(i), r();
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
        const r = this.myIFrame.doc.createElement("script");
        r.type = "text/javascript", r.async = !0, r.src = e, r.onload = r.onreadystatechange = function() {
          const i = r.readyState;
          (!i || i === "loaded" || i === "complete") && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), n());
        }, r.onerror = () => {
          $e("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
        }, this.myIFrame.doc.body.appendChild(r);
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
let Xs = null;
typeof MozWebSocket < "u" ? Xs = MozWebSocket : typeof WebSocket < "u" && (Xs = WebSocket);
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
  constructor(e, n, r, i, s, o, a) {
    this.connId = e, this.applicationId = r, this.appCheckToken = i, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = fs(this.connId), this.stats_ = xl(n), this.connURL = St.connectionURL_(n, o, a, i, r), this.nodeAdmin = n.nodeAdmin;
  }
  /**
   * @param repoInfo - The info for the websocket endpoint.
   * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId - Optional lastSessionId if there was a previous connection
   * @returns connection url
   */
  static connectionURL_(e, n, r, i, s) {
    const o = {};
    return o[Qh] = Nl, typeof location < "u" && location.hostname && ef.test(location.hostname) && (o[Xh] = Zh), n && (o[Jh] = n), r && (o[tf] = r), i && (o[Da] = i), s && (o[nf] = s), af(e, rf, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, Yn.set("previous_websocket_failure", !0);
    try {
      let r;
      T_(), this.mySock = new Xs(this.connURL, [], r);
    } catch (r) {
      this.log_("Error instantiating WebSocket.");
      const i = r.message || r.data;
      i && this.log_(i), this.onClosed_();
      return;
    }
    this.mySock.onopen = () => {
      this.log_("Websocket connected."), this.everConnected_ = !0;
    }, this.mySock.onclose = () => {
      this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_();
    }, this.mySock.onmessage = (r) => {
      this.handleIncomingFrame(r);
    }, this.mySock.onerror = (r) => {
      this.log_("WebSocket error.  Closing connection.");
      const i = r.message || r.data;
      i && this.log_(i), this.onClosed_();
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
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, r = navigator.userAgent.match(n);
      r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0);
    }
    return !e && Xs !== null && !St.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return Yn.isInMemoryStorage || Yn.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    Yn.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const r = Wi(n);
      this.onMessage(r);
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
      const r = this.extractFrameCount_(n);
      r !== null && this.appendFrame_(r);
    }
  }
  /**
   * Send a message to the server
   * @param data - The JSON object to transmit
   */
  send(e) {
    this.resetKeepAlive();
    const n = Ae(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const r = Kh(n, ow);
    r.length > 1 && this.sendString_(String(r.length));
    for (let i = 0; i < r.length; i++)
      this.sendString_(r[i]);
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
class Vi {
  static get ALL_TRANSPORTS() {
    return [Ir, St];
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
    let r = n && !St.previouslyFailed();
    if (e.webSocketOnly && (n || Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r)
      this.transports_ = [St];
    else {
      const i = this.transports_ = [];
      for (const s of Vi.ALL_TRANSPORTS)
        s && s.isAvailable() && i.push(s);
      Vi.globalTransportInitialized_ = !0;
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
Vi.globalTransportInitialized_ = !1;
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
const lw = 6e4, cw = 5e3, uw = 10 * 1024, dw = 100 * 1024, aa = "t", fu = "d", hw = "s", pu = "r", fw = "e", mu = "o", _u = "a", gu = "n", vu = "p", pw = "h";
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
  constructor(e, n, r, i, s, o, a, l, c, d) {
    this.id = e, this.repoInfo_ = n, this.applicationId_ = r, this.appCheckToken_ = i, this.authToken_ = s, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = d, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = fs("c:" + this.id + ":"), this.transportManager_ = new Vi(n), this.log_("Connection created"), this.start_();
  }
  /**
   * Starts a connection attempt
   */
  start_() {
    const e = this.transportManager_.initialTransport();
    this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.conn_), r = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(() => {
      this.conn_ && this.conn_.open(n, r);
    }, Math.floor(0));
    const i = e.healthyTimeout || 0;
    i > 0 && (this.healthyTimeout_ = Ni(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > dw ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > uw ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
    }, Math.floor(i)));
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
    if (aa in e) {
      const n = e[aa];
      n === _u ? this.upgradeIfSecondaryHealthy_() : n === pu ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === mu && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = ui("t", e), r = ui("d", e);
    if (n === "c")
      this.onSecondaryControl_(r);
    else if (n === "d")
      this.pendingDataMessages.push(r);
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
    const n = ui("t", e), r = ui("d", e);
    n === "c" ? this.onControl_(r) : n === "d" && this.onDataMessage_(r);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = ui(aa, e);
    if (fu in e) {
      const r = e[fu];
      if (n === pw) {
        const i = {
          ...r
        };
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host), this.onHandshake_(i);
      } else if (n === gu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === hw ? this.onConnectionShutdown_(r) : n === pu ? this.onReset_(r) : n === fw ? Oa("Server Error: " + r) : n === mu ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Oa("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, r = e.v, i = e.h;
    this.sessionId = e.s, this.repoInfo_.host = i, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), Nl !== r && Ye("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), r = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, r), Ni(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(lw));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Ni(() => {
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (Yn.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class ff {
  put(e, n, r, i) {
  }
  merge(e, n, r, i) {
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
  onDisconnectPut(e, n, r) {
  }
  onDisconnectMerge(e, n, r) {
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
class pf {
  constructor(e) {
    this.allowedEvents_ = e, this.listeners_ = {}, C(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  /**
   * To be called by derived classes to trigger events.
   */
  trigger(e, ...n) {
    if (Array.isArray(this.listeners_[e])) {
      const r = [...this.listeners_[e]];
      for (let i = 0; i < r.length; i++)
        r[i].callback.apply(r[i].context, n);
    }
  }
  on(e, n, r) {
    this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({ callback: n, context: r });
    const i = this.getInitialEvent(e);
    i && n.apply(r, i);
  }
  off(e, n, r) {
    this.validateEventType_(e);
    const i = this.listeners_[e] || [];
    for (let s = 0; s < i.length; s++)
      if (i[s].callback === n && (!r || r === i[s].context)) {
        i.splice(s, 1);
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
class Zs extends pf {
  static getInstance() {
    return new Zs();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !_l() && (window.addEventListener("online", () => {
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
class se {
  /**
   * @param pathOrString - Path string to parse, or another path, or the raw
   * tokens array
   */
  constructor(e, n) {
    if (n === void 0) {
      this.pieces_ = e.split("/");
      let r = 0;
      for (let i = 0; i < this.pieces_.length; i++)
        this.pieces_[i].length > 0 && (this.pieces_[r] = this.pieces_[i], r++);
      this.pieces_.length = r, this.pieceNum_ = 0;
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
  return new se("");
}
function B(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function Ln(t) {
  return t.pieces_.length - t.pieceNum_;
}
function ue(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new se(t.pieces_, e);
}
function Ol(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function _w(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function zi(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function mf(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new se(e, 0);
}
function be(t, e) {
  const n = [];
  for (let r = t.pieceNum_; r < t.pieces_.length; r++)
    n.push(t.pieces_[r]);
  if (e instanceof se)
    for (let r = e.pieceNum_; r < e.pieces_.length; r++)
      n.push(e.pieces_[r]);
  else {
    const r = e.split("/");
    for (let i = 0; i < r.length; i++)
      r[i].length > 0 && n.push(r[i]);
  }
  return new se(n, 0);
}
function G(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Ke(t, e) {
  const n = B(t), r = B(e);
  if (n === null)
    return e;
  if (n === r)
    return Ke(ue(t), ue(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function gw(t, e) {
  const n = zi(t, 0), r = zi(e, 0);
  for (let i = 0; i < n.length && i < r.length; i++) {
    const s = hr(n[i], r[i]);
    if (s !== 0)
      return s;
  }
  return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
}
function Dl(t, e) {
  if (Ln(t) !== Ln(e))
    return !1;
  for (let n = t.pieceNum_, r = e.pieceNum_; n <= t.pieces_.length; n++, r++)
    if (t.pieces_[n] !== e.pieces_[r])
      return !1;
  return !0;
}
function mt(t, e) {
  let n = t.pieceNum_, r = e.pieceNum_;
  if (Ln(t) > Ln(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[r])
      return !1;
    ++n, ++r;
  }
  return !0;
}
class vw {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = zi(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let r = 0; r < this.parts_.length; r++)
      this.byteLength_ += To(this.parts_[r]);
    _f(this);
  }
}
function yw(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += To(e), _f(t);
}
function bw(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= To(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function _f(t) {
  if (t.byteLength_ > bu)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + bu + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > yu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + yu + ") or object contains a cycle " + Gn(t));
}
function Gn(t) {
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
class Ml extends pf {
  static getInstance() {
    return new Ml();
  }
  constructor() {
    super(["visible"]);
    let e, n;
    typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (n = "visibilitychange", e = "hidden") : typeof document.mozHidden < "u" ? (n = "mozvisibilitychange", e = "mozHidden") : typeof document.msHidden < "u" ? (n = "msvisibilitychange", e = "msHidden") : typeof document.webkitHidden < "u" && (n = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, n && document.addEventListener(n, () => {
      const r = !document[e];
      r !== this.visible_ && (this.visible_ = r, this.trigger("visible", r));
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
const di = 1e3, ww = 300 * 1e3, wu = 30 * 1e3, Ew = 1.3, Iw = 3e4, Cw = "server_kill", Eu = 3;
class sn extends ff {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, r, i, s, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = r, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = sn.nextPersistentConnectionId_++, this.log_ = fs("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = di, this.maxReconnectDelay_ = ww, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    Ml.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && Zs.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, r) {
    const i = ++this.requestNumber_, s = { r: i, a: e, b: n };
    this.log_(Ae(s)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), r && (this.requestCBHash_[i] = r);
  }
  get(e) {
    this.initConnection_();
    const n = new os(), i = {
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
    this.outstandingGets_.push(i), this.outstandingGetCount_++;
    const s = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(s), n.promise;
  }
  listen(e, n, r, i) {
    this.initConnection_();
    const s = e._queryIdentifier, o = e._path.toString();
    this.log_("Listen called for " + o + " " + s), this.listens.has(o) || this.listens.set(o, /* @__PURE__ */ new Map()), C(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), C(!this.listens.get(o).has(s), "listen() called twice for same path/queryId.");
    const a = {
      onComplete: i,
      hashFn: n,
      query: e,
      tag: r
    };
    this.listens.get(o).set(s, a), this.connected_ && this.sendListen_(a);
  }
  sendGet_(e) {
    const n = this.outstandingGets_[e];
    this.sendRequest("g", n.request, (r) => {
      delete this.outstandingGets_[e], this.outstandingGetCount_--, this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []), n.onComplete && n.onComplete(r);
    });
  }
  sendListen_(e) {
    const n = e.query, r = n._path.toString(), i = n._queryIdentifier;
    this.log_("Listen on " + r + " for " + i);
    const s = {
      /*path*/
      p: r
    }, o = "q";
    e.tag && (s.q = n._queryObject, s.t = e.tag), s.h = e.hashFn(), this.sendRequest(o, s, (a) => {
      const l = a.d, c = a.s;
      sn.warnOnListenWarnings_(l, n), (this.listens.get(r) && this.listens.get(r).get(i)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(r, i), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && zt(e, "w")) {
      const r = $r(e, "w");
      if (Array.isArray(r) && ~r.indexOf("no_index")) {
        const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"', s = n._path.toString();
        Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`);
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
      const e = this.authToken_, n = N_(e) ? "auth" : "gauth", r = { cred: e };
      this.authOverride_ === null ? r.noauth = !0 : typeof this.authOverride_ == "object" && (r.authvar = this.authOverride_), this.sendRequest(n, r, (i) => {
        const s = i.s, o = i.d || "error";
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
      const n = e.s, r = e.d || "error";
      n === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(n, r);
    });
  }
  /**
   * @inheritDoc
   */
  unlisten(e, n) {
    const r = e._path.toString(), i = e._queryIdentifier;
    this.log_("Unlisten called for " + r + " " + i), C(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(r, i) && this.connected_ && this.sendUnlisten_(r, i, e._queryObject, n);
  }
  sendUnlisten_(e, n, r, i) {
    this.log_("Unlisten on " + e + " for " + n);
    const s = {
      /*path*/
      p: e
    }, o = "n";
    i && (s.q = r, s.t = i), this.sendRequest(o, s);
  }
  onDisconnectPut(e, n, r) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, n, r) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "o",
      data: n,
      onComplete: r
    });
  }
  onDisconnectMerge(e, n, r) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, n, r) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "om",
      data: n,
      onComplete: r
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
  sendOnDisconnect_(e, n, r, i) {
    const s = {
      /*path*/
      p: n,
      /*data*/
      d: r
    };
    this.log_("onDisconnect " + e, s), this.sendRequest(e, s, (o) => {
      i && setTimeout(() => {
        i(o.s, o.d);
      }, Math.floor(0));
    });
  }
  put(e, n, r, i) {
    this.putInternal("p", e, n, r, i);
  }
  merge(e, n, r, i) {
    this.putInternal("m", e, n, r, i);
  }
  putInternal(e, n, r, i, s) {
    this.initConnection_();
    const o = {
      /*path*/
      p: n,
      /*data*/
      d: r
    };
    s !== void 0 && (o.h = s), this.outstandingPuts_.push({
      action: e,
      request: o,
      onComplete: i
    }), this.outstandingPutCount_++;
    const a = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + n);
  }
  sendPut_(e) {
    const n = this.outstandingPuts_[e].action, r = this.outstandingPuts_[e].request, i = this.outstandingPuts_[e].onComplete;
    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, r, (s) => {
      this.log_(n + " response", s), delete this.outstandingPuts_[e], this.outstandingPutCount_--, this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []), i && i(s.s, s.d);
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
        (r) => {
          if (r.s !== "ok") {
            const s = r.d;
            this.log_("reportStats", "Error sending stats: " + s);
          }
        }
      );
    }
  }
  onDataMessage_(e) {
    if ("r" in e) {
      this.log_("from server: " + Ae(e));
      const n = e.r, r = this.requestCBHash_[n];
      r && (delete this.requestCBHash_[n], r(e.b));
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
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : Oa("Unrecognized action received from server: " + Ae(e) + `
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
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = di, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = di, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > Iw && (this.reconnectDelay_ = di), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Ew);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + sn.nextConnectionId_++, s = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, r());
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
        o ? $e("getToken() completed but was canceled") : ($e("getToken() completed. Creating connection."), this.authToken_ = h && h.accessToken, this.appCheckToken_ = u && u.token, a = new mw(
          i,
          this.repoInfo_,
          this.applicationId_,
          this.appCheckToken_,
          this.authToken_,
          e,
          n,
          r,
          /* onKill= */
          (f) => {
            Ye(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(Cw);
          },
          s
        ));
      } catch (h) {
        this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && Ye(h), l());
      }
    }
  }
  interrupt(e) {
    $e("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    $e("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Ta(this.interruptReasons_) && (this.reconnectDelay_ = di, this.realtime_ || this.scheduleConnect_(0));
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
    let r;
    n ? r = n.map((s) => Pl(s)).join("$") : r = "default";
    const i = this.removeListen_(e, r);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const r = new se(e).toString();
    let i;
    if (this.listens.has(r)) {
      const s = this.listens.get(r);
      i = s.get(n), s.delete(n), s.size === 0 && this.listens.delete(r);
    } else
      i = void 0;
    return i;
  }
  onAuthRevoked_(e, n) {
    $e("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= Eu && (this.reconnectDelay_ = wu, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    $e("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= Eu && this.appCheckTokenProvider_.notifyForInvalidToken());
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
    e["sdk." + n + "." + Bh.replace(/\./g, "-")] = 1, _l() ? e["framework.cordova"] = 1 : eh() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = Zs.getInstance().currentlyOnline();
    return Ta(this.interruptReasons_) && e;
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
class q {
  constructor(e, n) {
    this.name = e, this.node = n;
  }
  static Wrap(e, n) {
    return new q(e, n);
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
class Ro {
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
    const r = new q(Wr, e), i = new q(Wr, n);
    return this.compare(r, i) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return q.MIN;
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
let Ss;
class gf extends Ro {
  static get __EMPTY_NODE() {
    return Ss;
  }
  static set __EMPTY_NODE(e) {
    Ss = e;
  }
  compare(e, n) {
    return hr(e.name, n.name);
  }
  isDefinedOn(e) {
    throw Qr("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return q.MIN;
  }
  maxPost() {
    return new q(or, Ss);
  }
  makePost(e, n) {
    return C(typeof e == "string", "KeyIndex indexValue must always be a string."), new q(e, Ss);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const xr = new gf();
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
class ks {
  /**
   * @param node - Node to iterate.
   * @param isReverse_ - Whether or not to iterate in reverse
   */
  constructor(e, n, r, i, s = null) {
    this.isReverse_ = i, this.resultGenerator_ = s, this.nodeStack_ = [];
    let o = 1;
    for (; !e.isEmpty(); )
      if (e = e, o = n ? r(e.key, n) : 1, i && (o *= -1), o < 0)
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
class Ne {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, r, i, s) {
    this.key = e, this.value = n, this.color = r ?? Ne.RED, this.left = i ?? et.EMPTY_NODE, this.right = s ?? et.EMPTY_NODE;
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
  copy(e, n, r, i, s) {
    return new Ne(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
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
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return s < 0 ? i = i.copy(null, null, null, i.left.insert(e, n, r), null) : s === 0 ? i = i.copy(null, n, null, null, null) : i = i.copy(null, null, null, null, i.right.insert(e, n, r)), i.fixUp_();
  }
  /**
   * @returns New tree, with the minimum key removed.
   */
  removeMin_() {
    if (this.left.isEmpty())
      return et.EMPTY_NODE;
    let e = this;
    return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_();
  }
  /**
   * @param key - The key of the item to remove.
   * @param comparator - Comparator.
   * @returns New tree, with the specified item removed.
   */
  remove(e, n) {
    let r, i;
    if (r = this, n(e, r.key) < 0)
      !r.left.isEmpty() && !r.left.isRed_() && !r.left.left.isRed_() && (r = r.moveRedLeft_()), r = r.copy(null, null, null, r.left.remove(e, n), null);
    else {
      if (r.left.isRed_() && (r = r.rotateRight_()), !r.right.isEmpty() && !r.right.isRed_() && !r.right.left.isRed_() && (r = r.moveRedRight_()), n(e, r.key) === 0) {
        if (r.right.isEmpty())
          return et.EMPTY_NODE;
        i = r.right.min_(), r = r.copy(i.key, i.value, null, null, r.right.removeMin_());
      }
      r = r.copy(null, null, null, null, r.right.remove(e, n));
    }
    return r.fixUp_();
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
    const e = this.copy(null, null, Ne.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, Ne.RED, this.left.right, null);
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
Ne.RED = !0;
Ne.BLACK = !1;
class Tw {
  /**
   * Returns a copy of the current node.
   *
   * @returns The node copy.
   */
  copy(e, n, r, i, s) {
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
  insert(e, n, r) {
    return new Ne(e, n, null);
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
class et {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, n = et.EMPTY_NODE) {
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
    return new et(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Ne.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new et(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Ne.BLACK, null, null));
  }
  /**
   * Returns the value of the node with the given key, or null.
   *
   * @param key - The key to look up.
   * @returns The value of the node with the given key, or null if the
   * key doesn't exist.
   */
  get(e) {
    let n, r = this.root_;
    for (; !r.isEmpty(); ) {
      if (n = this.comparator_(e, r.key), n === 0)
        return r.value;
      n < 0 ? r = r.left : n > 0 && (r = r.right);
    }
    return null;
  }
  /**
   * Returns the key of the item *before* the specified key, or null if key is the first item.
   * @param key - The key to find the predecessor of
   * @returns The predecessor key.
   */
  getPredecessorKey(e) {
    let n, r = this.root_, i = null;
    for (; !r.isEmpty(); )
      if (n = this.comparator_(e, r.key), n === 0) {
        if (r.left.isEmpty())
          return i ? i.key : null;
        for (r = r.left; !r.right.isEmpty(); )
          r = r.right;
        return r.key;
      } else n < 0 ? r = r.left : n > 0 && (i = r, r = r.right);
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
    return new ks(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new ks(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new ks(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new ks(this.root_, null, this.comparator_, !0, e);
  }
}
et.EMPTY_NODE = new Tw();
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
  return hr(t.name, e.name);
}
function $l(t, e) {
  return hr(t, e);
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
let Ma;
function kw(t) {
  Ma = t;
}
const vf = function(t) {
  return typeof t == "number" ? "number:" + Yh(t) : "string:" + t;
}, yf = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    C(typeof e == "string" || typeof e == "number" || typeof e == "object" && zt(e, ".sv"), "Priority must be a string or number.");
  } else
    C(t === Ma || t.isEmpty(), "priority of unexpected type.");
  C(t === Ma || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
class Pe {
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
  constructor(e, n = Pe.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, C(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), yf(this.priorityNode_);
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
    return new Pe(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : Pe.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return G(e) ? this : B(e) === ".priority" ? this.priorityNode_ : Pe.__childrenNodeConstructor.EMPTY_NODE;
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
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const r = B(e);
    return r === null ? n : n.isEmpty() && r !== ".priority" ? this : (C(r !== ".priority" || Ln(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(r, Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e), n)));
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
      this.priorityNode_.isEmpty() || (e += "priority:" + vf(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Yh(this.value_) : e += this.value_, this.lazyHash_ = Gh(e);
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
    return e === Pe.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof Pe.__childrenNodeConstructor ? -1 : (C(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, r = typeof this.value_, i = Pe.VALUE_TYPE_ORDER.indexOf(n), s = Pe.VALUE_TYPE_ORDER.indexOf(r);
    return C(i >= 0, "Unknown leaf type: " + n), C(s >= 0, "Unknown leaf type: " + r), i === s ? r === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : s - i;
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
Pe.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
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
let bf, wf;
function Aw(t) {
  bf = t;
}
function Rw(t) {
  wf = t;
}
class Pw extends Ro {
  compare(e, n) {
    const r = e.node.getPriority(), i = n.node.getPriority(), s = r.compareTo(i);
    return s === 0 ? hr(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return q.MIN;
  }
  maxPost() {
    return new q(or, new Pe("[PRIORITY-POST]", wf));
  }
  makePost(e, n) {
    const r = bf(e);
    return new q(n, new Pe("[PRIORITY-POST]", r));
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
    ), r = (s) => parseInt(Array(s + 1).join("1"), 2);
    this.count = n(e + 1), this.current_ = this.count - 1;
    const i = r(this.count);
    this.bits_ = e + 1 & i;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & 1 << this.current_);
    return this.current_--, e;
  }
}
const eo = function(t, e, n, r) {
  t.sort(e);
  const i = function(l, c) {
    const d = c - l;
    let h, u;
    if (d === 0)
      return null;
    if (d === 1)
      return h = t[l], u = n ? n(h) : h, new Ne(u, h.node, Ne.BLACK, null, null);
    {
      const f = parseInt(d / 2, 10) + l, p = i(l, f), g = i(f + 1, c);
      return h = t[f], u = n ? n(h) : h, new Ne(u, h.node, Ne.BLACK, p, g);
    }
  }, s = function(l) {
    let c = null, d = null, h = t.length;
    const u = function(p, g) {
      const w = h - p, S = h;
      h -= p;
      const T = i(w + 1, S), k = t[w], I = n ? n(k) : k;
      f(new Ne(I, k.node, g, null, T));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (d = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), w = Math.pow(2, l.count - (p + 1));
      g ? u(w, Ne.BLACK) : (u(w, Ne.BLACK), u(w, Ne.RED));
    }
    return d;
  }, o = new xw(t.length), a = s(o);
  return new et(r || e, a);
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
let la;
const yr = {};
class Zt {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return C(yr && we, "ChildrenNode.ts has not been loaded"), la = la || new Zt({ ".priority": yr }, { ".priority": we }), la;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = $r(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof et ? n : null;
  }
  hasIndex(e) {
    return zt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    C(e !== xr, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const r = [];
    let i = !1;
    const s = n.getIterator(q.Wrap);
    let o = s.getNext();
    for (; o; )
      i = i || e.isDefinedOn(o.node), r.push(o), o = s.getNext();
    let a;
    i ? a = eo(r, e.getCompare()) : a = yr;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const d = { ...this.indexes_ };
    return d[l] = a, new Zt(d, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const r = zs(this.indexes_, (i, s) => {
      const o = $r(this.indexSet_, s);
      if (C(o, "Missing index implementation for " + s), i === yr)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(q.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), eo(a, o.getCompare());
        } else
          return yr;
      else {
        const a = n.get(e.name);
        let l = i;
        return a && (l = l.remove(new q(e.name, a))), l.insert(e, e.node);
      }
    });
    return new Zt(r, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const r = zs(this.indexes_, (i) => {
      if (i === yr)
        return i;
      {
        const s = n.get(e.name);
        return s ? i.remove(new q(e.name, s)) : i;
      }
    });
    return new Zt(r, this.indexSet_);
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
let hi;
class $ {
  static get EMPTY_NODE() {
    return hi || (hi = new $(new et($l), null, Zt.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, r) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = r, this.lazyHash_ = null, this.priorityNode_ && yf(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || hi;
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
      return n === null ? hi : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = B(e);
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
      const r = new q(e, n);
      let i, s;
      n.isEmpty() ? (i = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(r, this.children_)) : (i = this.children_.insert(e, n), s = this.indexMap_.addToIndexes(r, this.children_));
      const o = i.isEmpty() ? hi : this.priorityNode_;
      return new $(i, o, s);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const r = B(e);
    if (r === null)
      return n;
    {
      C(B(e) !== ".priority" || Ln(e) === 1, ".priority must be the last token in a path");
      const i = this.getImmediateChild(r).updateChild(ue(e), n);
      return this.updateImmediateChild(r, i);
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
    let r = 0, i = 0, s = !0;
    if (this.forEachChild(we, (o, a) => {
      n[o] = a.val(e), r++, s && $.INTEGER_REGEXP_.test(o) ? i = Math.max(i, Number(o)) : s = !1;
    }), !e && s && i < 2 * r) {
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
      this.getPriority().isEmpty() || (e += "priority:" + vf(this.getPriority().val()) + ":"), this.forEachChild(we, (n, r) => {
        const i = r.hash();
        i !== "" && (e += ":" + n + ":" + i);
      }), this.lazyHash_ = e === "" ? "" : Gh(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, r) {
    const i = this.resolveIndex_(r);
    if (i) {
      const s = i.getPredecessorKey(new q(e, n));
      return s ? s.name : null;
    } else
      return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.minKey();
      return r && r.name;
    } else
      return this.children_.minKey();
  }
  getFirstChild(e) {
    const n = this.getFirstChildName(e);
    return n ? new q(n, this.children_.get(n)) : null;
  }
  /**
   * Given an index, return the key name of the largest value we have, according to that index
   */
  getLastChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.maxKey();
      return r && r.name;
    } else
      return this.children_.maxKey();
  }
  getLastChild(e) {
    const n = this.getLastChildName(e);
    return n ? new q(n, this.children_.get(n)) : null;
  }
  forEachChild(e, n) {
    const r = this.resolveIndex_(e);
    return r ? r.inorderTraversal((i) => n(i.name, i.node)) : this.children_.inorderTraversal(n);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r)
      return r.getIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getIteratorFrom(e.name, q.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) < 0; )
        i.getNext(), s = i.peek();
      return i;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r)
      return r.getReverseIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getReverseIteratorFrom(e.name, q.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) > 0; )
        i.getNext(), s = i.peek();
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === ps ? -1 : 0;
  }
  withIndex(e) {
    if (e === xr || this.indexMap_.hasIndex(e))
      return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new $(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === xr || this.indexMap_.hasIndex(e);
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
          const r = this.getIterator(we), i = n.getIterator(we);
          let s = r.getNext(), o = i.getNext();
          for (; s && o; ) {
            if (s.name !== o.name || !s.node.equals(o.node))
              return !1;
            s = r.getNext(), o = i.getNext();
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
    return e === xr ? null : this.indexMap_.get(e.toString());
  }
}
$.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class Lw extends $ {
  constructor() {
    super(new et($l), $.EMPTY_NODE, Zt.Default);
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
const ps = new Lw();
Object.defineProperties(q, {
  MIN: {
    value: new q(Wr, $.EMPTY_NODE)
  },
  MAX: {
    value: new q(or, ps)
  }
});
gf.__EMPTY_NODE = $.EMPTY_NODE;
Pe.__childrenNodeConstructor = $;
kw(ps);
Rw(ps);
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
function ke(t, e = null) {
  if (t === null)
    return $.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), C(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new Pe(n, ke(e));
  }
  if (!(t instanceof Array) && Ow) {
    const n = [];
    let r = !1;
    if (Ue(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = ke(a);
        l.isEmpty() || (r = r || !l.getPriority().isEmpty(), n.push(new q(o, l)));
      }
    }), n.length === 0)
      return $.EMPTY_NODE;
    const s = eo(n, Sw, (o) => o.name, $l);
    if (r) {
      const o = eo(n, we.getCompare());
      return new $(s, ke(e), new Zt({ ".priority": o }, { ".priority": we }));
    } else
      return new $(s, ke(e), Zt.Default);
  } else {
    let n = $.EMPTY_NODE;
    return Ue(t, (r, i) => {
      if (zt(t, r) && r.substring(0, 1) !== ".") {
        const s = ke(i);
        (s.isLeafNode() || !s.isEmpty()) && (n = n.updateImmediateChild(r, s));
      }
    }), n.updatePriority(ke(e));
  }
}
Aw(ke);
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
class Dw extends Ro {
  constructor(e) {
    super(), this.indexPath_ = e, C(!G(e) && B(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const r = this.extractChild(e.node), i = this.extractChild(n.node), s = r.compareTo(i);
    return s === 0 ? hr(e.name, n.name) : s;
  }
  makePost(e, n) {
    const r = ke(e), i = $.EMPTY_NODE.updateChild(this.indexPath_, r);
    return new q(n, i);
  }
  maxPost() {
    const e = $.EMPTY_NODE.updateChild(this.indexPath_, ps);
    return new q(or, e);
  }
  toString() {
    return zi(this.indexPath_, 0).join("/");
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
class Mw extends Ro {
  compare(e, n) {
    const r = e.node.compareTo(n.node);
    return r === 0 ? hr(e.name, n.name) : r;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return q.MIN;
  }
  maxPost() {
    return q.MAX;
  }
  makePost(e, n) {
    const r = ke(e);
    return new q(n, r);
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
function Ef(t) {
  return { type: "value", snapshotNode: t };
}
function jr(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function Bi(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function qi(t, e, n) {
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
class Fl {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, r, i, s, o) {
    C(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(i).equals(r.getChild(i)) && a.isEmpty() === r.isEmpty() || (o != null && (r.isEmpty() ? e.hasChild(n) ? o.trackChildChange(Bi(n, a)) : C(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(jr(n, r)) : o.trackChildChange(qi(n, r, a))), e.isLeafNode() && r.isEmpty()) ? e : e.updateImmediateChild(n, r).withIndex(this.index_);
  }
  updateFullNode(e, n, r) {
    return r != null && (e.isLeafNode() || e.forEachChild(we, (i, s) => {
      n.hasChild(i) || r.trackChildChange(Bi(i, s));
    }), n.isLeafNode() || n.forEachChild(we, (i, s) => {
      if (e.hasChild(i)) {
        const o = e.getImmediateChild(i);
        o.equals(s) || r.trackChildChange(qi(i, s, o));
      } else
        r.trackChildChange(jr(i, s));
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
class Gi {
  constructor(e) {
    this.indexedFilter_ = new Fl(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Gi.getStartPost_(e), this.endPost_ = Gi.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const n = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0, r = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
    return n && r;
  }
  updateChild(e, n, r, i, s, o) {
    return this.matches(new q(n, r)) || (r = $.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, r, i, s, o);
  }
  updateFullNode(e, n, r) {
    n.isLeafNode() && (n = $.EMPTY_NODE);
    let i = n.withIndex(this.index_);
    i = i.updatePriority($.EMPTY_NODE);
    const s = this;
    return n.forEachChild(we, (o, a) => {
      s.matches(new q(o, a)) || (i = i.updateImmediateChild(o, $.EMPTY_NODE));
    }), this.indexedFilter_.updateFullNode(e, i, r);
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
      const r = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? r <= 0 : r < 0;
    }, this.withinEndPost = (n) => {
      const r = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? r <= 0 : r < 0;
    }, this.rangedFilter_ = new Gi(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, r, i, s, o) {
    return this.rangedFilter_.matches(new q(n, r)) || (r = $.EMPTY_NODE), e.getImmediateChild(n).equals(r) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, r, i, s, o) : this.fullLimitUpdateChild_(e, n, r, s, o);
  }
  updateFullNode(e, n, r) {
    let i;
    if (n.isLeafNode() || n.isEmpty())
      i = $.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
      i = $.EMPTY_NODE.withIndex(this.index_);
      let s;
      this.reverse_ ? s = n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : s = n.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
      let o = 0;
      for (; s.hasNext() && o < this.limit_; ) {
        const a = s.getNext();
        if (this.withinDirectionalStart(a))
          if (this.withinDirectionalEnd(a))
            i = i.updateImmediateChild(a.name, a.node), o++;
          else
            break;
        else continue;
      }
    } else {
      i = n.withIndex(this.index_), i = i.updatePriority($.EMPTY_NODE);
      let s;
      this.reverse_ ? s = i.getReverseIterator(this.index_) : s = i.getIterator(this.index_);
      let o = 0;
      for (; s.hasNext(); ) {
        const a = s.getNext();
        o < this.limit_ && this.withinDirectionalStart(a) && this.withinDirectionalEnd(a) ? o++ : i = i.updateImmediateChild(a.name, $.EMPTY_NODE);
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, r);
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
  fullLimitUpdateChild_(e, n, r, i, s) {
    let o;
    if (this.reverse_) {
      const h = this.index_.getCompare();
      o = (u, f) => h(f, u);
    } else
      o = this.index_.getCompare();
    const a = e;
    C(a.numChildren() === this.limit_, "");
    const l = new q(n, r), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), d = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const h = a.getImmediateChild(n);
      let u = i.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = i.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (d && !r.isEmpty() && f >= 0)
        return s?.trackChildChange(qi(n, r, h)), a.updateImmediateChild(n, r);
      {
        s?.trackChildChange(Bi(n, h));
        const g = a.updateImmediateChild(n, $.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (s?.trackChildChange(jr(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return r.isEmpty() ? e : d && o(c, l) >= 0 ? (s != null && (s.trackChildChange(Bi(c.name, c.node)), s.trackChildChange(jr(n, r))), a.updateImmediateChild(n, r).updateImmediateChild(c.name, $.EMPTY_NODE)) : e;
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
class Ul {
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
    return C(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Wr;
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
    return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : or;
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
    const e = new Ul();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function Ww(t) {
  return t.loadsAllData() ? new Fl(t.getIndex()) : t.hasLimit() ? new Uw(t) : new Gi(t);
}
function Cu(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === we ? n = "$priority" : t.index_ === $w ? n = "$value" : t.index_ === xr ? n = "$key" : (C(t.index_ instanceof Dw, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = Ae(n), t.startSet_) {
    const r = t.startAfterSet_ ? "startAfter" : "startAt";
    e[r] = Ae(t.indexStartValue_), t.startNameSet_ && (e[r] += "," + Ae(t.indexStartName_));
  }
  if (t.endSet_) {
    const r = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[r] = Ae(t.indexEndValue_), t.endNameSet_ && (e[r] += "," + Ae(t.indexEndName_));
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
class to extends ff {
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
  constructor(e, n, r, i) {
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = r, this.appCheckTokenProvider_ = i, this.log_ = fs("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, r, i) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = to.getListenId_(e, r), a = {};
    this.listens_[o] = a;
    const l = Cu(e._queryParams);
    this.restRequest_(s + ".json", l, (c, d) => {
      let h = d;
      if (c === 404 && (h = null, c = null), c === null && this.onDataUpdate_(
        s,
        h,
        /*isMerge=*/
        !1,
        r
      ), $r(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", i(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const r = to.getListenId_(e, n);
    delete this.listens_[r];
  }
  get(e) {
    const n = Cu(e._queryParams), r = e._path.toString(), i = new os();
    return this.restRequest_(r + ".json", n, (s, o) => {
      let a = o;
      s === 404 && (a = null, s = null), s === null ? (this.onDataUpdate_(
        r,
        a,
        /*isMerge=*/
        !1,
        /*tag=*/
        null
      ), i.resolve(a)) : i.reject(new Error(a));
    }), i.promise;
  }
  /** @inheritDoc */
  refreshAuthToken(e) {
  }
  /**
   * Performs a REST request to the given path, with the provided query string parameters,
   * and any auth credentials we have.
   */
  restRequest_(e, n = {}, r) {
    return n.format = "export", Promise.all([
      this.authTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      ),
      this.appCheckTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      )
    ]).then(([i, s]) => {
      i && i.accessToken && (n.auth = i.accessToken), s && s.token && (n.ac = s.token);
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + dr(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (r && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = Wi(a.responseText);
            } catch {
              Ye("Failed to parse JSON response for " + o + ": " + a.responseText);
            }
            r(null, l);
          } else
            a.status !== 401 && a.status !== 404 && Ye("Got unsuccessful REST response for " + o + " Status: " + a.status), r(a.status);
          r = null;
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
class jw {
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
function no() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function If(t, e, n) {
  if (G(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const r = B(e);
    t.children.has(r) || t.children.set(r, no());
    const i = t.children.get(r);
    e = ue(e), If(i, e, n);
  }
}
function $a(t, e, n) {
  t.value !== null ? n(e, t.value) : Hw(t, (r, i) => {
    const s = new se(e.toString() + "/" + r);
    $a(i, s, n);
  });
}
function Hw(t, e) {
  t.children.forEach((n, r) => {
    e(r, n);
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
class Vw {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), n = { ...e };
    return this.last_ && Ue(this.last_, (r, i) => {
      n[r] = n[r] - i;
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
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new Vw(e);
    const r = Su + (zw - Su) * Math.random();
    Ni(this.reportStats_.bind(this), Math.floor(r));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let r = !1;
    Ue(e, (i, s) => {
      s > 0 && zt(this.statsToReport_, i) && (n[i] = s, r = !0);
    }), r && this.server_.reportStats(n), Ni(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * Bw));
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
function Wl() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function jl() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function Hl(t) {
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
class ro {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, r) {
    this.path = e, this.affectedTree = n, this.revert = r, this.type = Rt.ACK_USER_WRITE, this.source = Wl();
  }
  operationForChild(e) {
    if (G(this.path)) {
      if (this.affectedTree.value != null)
        return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new se(e));
        return new ro(J(), n, this.revert);
      }
    } else return C(B(this.path) === e, "operationForChild called for unrelated child."), new ro(ue(this.path), this.affectedTree, this.revert);
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
class Ki {
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Rt.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return G(this.path) ? new Ki(this.source, J()) : new Ki(this.source, ue(this.path));
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
class ar {
  constructor(e, n, r) {
    this.source = e, this.path = n, this.snap = r, this.type = Rt.OVERWRITE;
  }
  operationForChild(e) {
    return G(this.path) ? new ar(this.source, J(), this.snap.getImmediateChild(e)) : new ar(this.source, ue(this.path), this.snap);
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
class Hr {
  constructor(e, n, r) {
    this.source = e, this.path = n, this.children = r, this.type = Rt.MERGE;
  }
  operationForChild(e) {
    if (G(this.path)) {
      const n = this.children.subtree(new se(e));
      return n.isEmpty() ? null : n.value ? new ar(this.source, J(), n.value) : new Hr(this.source, J(), n);
    } else
      return C(B(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Hr(this.source, ue(this.path), this.children);
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
class On {
  constructor(e, n, r) {
    this.node_ = e, this.fullyInitialized_ = n, this.filtered_ = r;
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
    if (G(e))
      return this.isFullyInitialized() && !this.filtered_;
    const n = B(e);
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
function Kw(t, e, n, r) {
  const i = [], s = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && s.push(Fw(o.childName, o.snapshotNode));
  }), fi(t, i, "child_removed", e, r, n), fi(t, i, "child_added", e, r, n), fi(t, i, "child_moved", s, r, n), fi(t, i, "child_changed", e, r, n), fi(t, i, "value", e, r, n), i;
}
function fi(t, e, n, r, i, s) {
  const o = r.filter((a) => a.type === n);
  o.sort((a, l) => Qw(t, a, l)), o.forEach((a) => {
    const l = Yw(t, a, s);
    i.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function Yw(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function Qw(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw Qr("Should only compare child_ events.");
  const r = new q(e.childName, e.snapshotNode), i = new q(n.childName, n.snapshotNode);
  return t.index_.compare(r, i);
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
function Po(t, e) {
  return { eventCache: t, serverCache: e };
}
function xi(t, e, n, r) {
  return Po(new On(e, n, r), t.serverCache);
}
function Cf(t, e, n, r) {
  return Po(t.eventCache, new On(e, n, r));
}
function io(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function lr(t) {
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
let ca;
const Jw = () => (ca || (ca = new et(Db)), ca);
class ce {
  static fromObject(e) {
    let n = new ce(null);
    return Ue(e, (r, i) => {
      n = n.set(new se(r), i);
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
    if (G(e))
      return null;
    {
      const r = B(e), i = this.children.get(r);
      if (i !== null) {
        const s = i.findRootMostMatchingPathAndValue(ue(e), n);
        return s != null ? { path: be(new se(r), s.path), value: s.value } : null;
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
    if (G(e))
      return this;
    {
      const n = B(e), r = this.children.get(n);
      return r !== null ? r.subtree(ue(e)) : new ce(null);
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
    if (G(e))
      return new ce(n, this.children);
    {
      const r = B(e), s = (this.children.get(r) || new ce(null)).set(ue(e), n), o = this.children.insert(r, s);
      return new ce(this.value, o);
    }
  }
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath - Path to value to remove.
   * @returns Resulting tree.
   */
  remove(e) {
    if (G(e))
      return this.children.isEmpty() ? new ce(null) : new ce(null, this.children);
    {
      const n = B(e), r = this.children.get(n);
      if (r) {
        const i = r.remove(ue(e));
        let s;
        return i.isEmpty() ? s = this.children.remove(n) : s = this.children.insert(n, i), this.value === null && s.isEmpty() ? new ce(null) : new ce(this.value, s);
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
    if (G(e))
      return this.value;
    {
      const n = B(e), r = this.children.get(n);
      return r ? r.get(ue(e)) : null;
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
    if (G(e))
      return n;
    {
      const r = B(e), s = (this.children.get(r) || new ce(null)).setTree(ue(e), n);
      let o;
      return s.isEmpty() ? o = this.children.remove(r) : o = this.children.insert(r, s), new ce(this.value, o);
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
    const r = {};
    return this.children.inorderTraversal((i, s) => {
      r[i] = s.fold_(be(e, i), n);
    }), n(e, this.value, r);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, J(), n);
  }
  findOnPath_(e, n, r) {
    const i = this.value ? r(n, this.value) : !1;
    if (i)
      return i;
    if (G(e))
      return null;
    {
      const s = B(e), o = this.children.get(s);
      return o ? o.findOnPath_(ue(e), be(n, s), r) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, J(), n);
  }
  foreachOnPath_(e, n, r) {
    if (G(e))
      return this;
    {
      this.value && r(n, this.value);
      const i = B(e), s = this.children.get(i);
      return s ? s.foreachOnPath_(ue(e), be(n, i), r) : new ce(null);
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
    this.children.inorderTraversal((r, i) => {
      i.foreach_(be(e, r), n);
    }), this.value && n(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((n, r) => {
      r.value && e(n, r.value);
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
    return new Pt(new ce(null));
  }
}
function Li(t, e, n) {
  if (G(e))
    return new Pt(new ce(n));
  {
    const r = t.writeTree_.findRootMostValueAndPath(e);
    if (r != null) {
      const i = r.path;
      let s = r.value;
      const o = Ke(i, e);
      return s = s.updateChild(o, n), new Pt(t.writeTree_.set(i, s));
    } else {
      const i = new ce(n), s = t.writeTree_.setTree(e, i);
      return new Pt(s);
    }
  }
}
function Fa(t, e, n) {
  let r = t;
  return Ue(n, (i, s) => {
    r = Li(r, be(e, i), s);
  }), r;
}
function ku(t, e) {
  if (G(e))
    return Pt.empty();
  {
    const n = t.writeTree_.setTree(e, new ce(null));
    return new Pt(n);
  }
}
function Ua(t, e) {
  return fr(t, e) != null;
}
function fr(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Ke(n.path, e)) : null;
}
function Au(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(we, (r, i) => {
    e.push(new q(r, i));
  }) : t.writeTree_.children.inorderTraversal((r, i) => {
    i.value != null && e.push(new q(r, i.value));
  }), e;
}
function Pn(t, e) {
  if (G(e))
    return t;
  {
    const n = fr(t, e);
    return n != null ? new Pt(new ce(n)) : new Pt(t.writeTree_.subtree(e));
  }
}
function Wa(t) {
  return t.writeTree_.isEmpty();
}
function Vr(t, e) {
  return Tf(J(), t.writeTree_, e);
}
function Tf(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let r = null;
    return e.children.inorderTraversal((i, s) => {
      i === ".priority" ? (C(s.value !== null, "Priority writes must always be leaf nodes"), r = s.value) : n = Tf(be(t, i), s, n);
    }), !n.getChild(t).isEmpty() && r !== null && (n = n.updateChild(be(t, ".priority"), r)), n;
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
function No(t, e) {
  return Rf(e, t);
}
function Xw(t, e, n, r, i) {
  C(r > t.lastWriteId, "Stacking an older write on top of newer ones"), i === void 0 && (i = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: r,
    visible: i
  }), i && (t.visibleWrites = Li(t.visibleWrites, e, n)), t.lastWriteId = r;
}
function Zw(t, e, n, r) {
  C(r > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: r,
    visible: !0
  }), t.visibleWrites = Fa(t.visibleWrites, e, n), t.lastWriteId = r;
}
function e1(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const r = t.allWrites[n];
    if (r.writeId === e)
      return r;
  }
  return null;
}
function t1(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  C(n >= 0, "removeWrite called with nonexistent writeId.");
  const r = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let i = r.visible, s = !1, o = t.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && n1(a, r.path) ? i = !1 : mt(r.path, a.path) && (s = !0)), o--;
  }
  if (i) {
    if (s)
      return r1(t), !0;
    if (r.snap)
      t.visibleWrites = ku(t.visibleWrites, r.path);
    else {
      const a = r.children;
      Ue(a, (l) => {
        t.visibleWrites = ku(t.visibleWrites, be(r.path, l));
      });
    }
    return !0;
  } else return !1;
}
function n1(t, e) {
  if (t.snap)
    return mt(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && mt(be(t.path, n), e))
      return !0;
  return !1;
}
function r1(t) {
  t.visibleWrites = Sf(t.allWrites, i1, J()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function i1(t) {
  return t.visible;
}
function Sf(t, e, n) {
  let r = Pt.empty();
  for (let i = 0; i < t.length; ++i) {
    const s = t[i];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        mt(n, o) ? (a = Ke(n, o), r = Li(r, a, s.snap)) : mt(o, n) && (a = Ke(o, n), r = Li(r, J(), s.snap.getChild(a)));
      else if (s.children) {
        if (mt(n, o))
          a = Ke(n, o), r = Fa(r, a, s.children);
        else if (mt(o, n))
          if (a = Ke(o, n), G(a))
            r = Fa(r, J(), s.children);
          else {
            const l = $r(s.children, B(a));
            if (l) {
              const c = l.getChild(ue(a));
              r = Li(r, J(), c);
            }
          }
      } else
        throw Qr("WriteRecord should have .snap or .children");
    }
  }
  return r;
}
function kf(t, e, n, r, i) {
  if (!r && !i) {
    const s = fr(t.visibleWrites, e);
    if (s != null)
      return s;
    {
      const o = Pn(t.visibleWrites, e);
      if (Wa(o))
        return n;
      if (n == null && !Ua(o, J()))
        return null;
      {
        const a = n || $.EMPTY_NODE;
        return Vr(o, a);
      }
    }
  } else {
    const s = Pn(t.visibleWrites, e);
    if (!i && Wa(s))
      return n;
    if (!i && n == null && !Ua(s, J()))
      return null;
    {
      const o = function(c) {
        return (c.visible || i) && (!r || !~r.indexOf(c.writeId)) && (mt(c.path, e) || mt(e, c.path));
      }, a = Sf(t.allWrites, o, e), l = n || $.EMPTY_NODE;
      return Vr(a, l);
    }
  }
}
function s1(t, e, n) {
  let r = $.EMPTY_NODE;
  const i = fr(t.visibleWrites, e);
  if (i)
    return i.isLeafNode() || i.forEachChild(we, (s, o) => {
      r = r.updateImmediateChild(s, o);
    }), r;
  if (n) {
    const s = Pn(t.visibleWrites, e);
    return n.forEachChild(we, (o, a) => {
      const l = Vr(Pn(s, new se(o)), a);
      r = r.updateImmediateChild(o, l);
    }), Au(s).forEach((o) => {
      r = r.updateImmediateChild(o.name, o.node);
    }), r;
  } else {
    const s = Pn(t.visibleWrites, e);
    return Au(s).forEach((o) => {
      r = r.updateImmediateChild(o.name, o.node);
    }), r;
  }
}
function o1(t, e, n, r, i) {
  C(r || i, "Either existingEventSnap or existingServerSnap must exist");
  const s = be(e, n);
  if (Ua(t.visibleWrites, s))
    return null;
  {
    const o = Pn(t.visibleWrites, s);
    return Wa(o) ? i.getChild(n) : Vr(o, i.getChild(n));
  }
}
function a1(t, e, n, r) {
  const i = be(e, n), s = fr(t.visibleWrites, i);
  if (s != null)
    return s;
  if (r.isCompleteForChild(n)) {
    const o = Pn(t.visibleWrites, i);
    return Vr(o, r.getNode().getImmediateChild(n));
  } else
    return null;
}
function l1(t, e) {
  return fr(t.visibleWrites, e);
}
function c1(t, e, n, r, i, s, o) {
  let a;
  const l = Pn(t.visibleWrites, e), c = fr(l, J());
  if (c != null)
    a = c;
  else if (n != null)
    a = Vr(l, n);
  else
    return [];
  if (a = a.withIndex(o), !a.isEmpty() && !a.isLeafNode()) {
    const d = [], h = o.getCompare(), u = s ? a.getReverseIteratorFrom(r, o) : a.getIteratorFrom(r, o);
    let f = u.getNext();
    for (; f && d.length < i; )
      h(f, r) !== 0 && d.push(f), f = u.getNext();
    return d;
  } else
    return [];
}
function u1() {
  return {
    visibleWrites: Pt.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function so(t, e, n, r) {
  return kf(t.writeTree, t.treePath, e, n, r);
}
function Vl(t, e) {
  return s1(t.writeTree, t.treePath, e);
}
function Ru(t, e, n, r) {
  return o1(t.writeTree, t.treePath, e, n, r);
}
function oo(t, e) {
  return l1(t.writeTree, be(t.treePath, e));
}
function d1(t, e, n, r, i, s) {
  return c1(t.writeTree, t.treePath, e, n, r, i, s);
}
function zl(t, e, n) {
  return a1(t.writeTree, t.treePath, e, n);
}
function Af(t, e) {
  return Rf(be(t.treePath, e), t.writeTree);
}
function Rf(t, e) {
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
class h1 {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(e) {
    const n = e.type, r = e.childName;
    C(n === "child_added" || n === "child_changed" || n === "child_removed", "Only child changes supported for tracking"), C(r !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(r);
    if (i) {
      const s = i.type;
      if (n === "child_added" && s === "child_removed")
        this.changeMap.set(r, qi(r, e.snapshotNode, i.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(r);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(r, Bi(r, i.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(r, jr(r, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(r, qi(r, e.snapshotNode, i.oldSnap));
      else
        throw Qr("Illegal combination of changes: " + e + " occurred after " + i);
    } else
      this.changeMap.set(r, e);
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
class f1 {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, r) {
    return null;
  }
}
const Pf = new f1();
class Bl {
  constructor(e, n, r = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = r;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const r = this.optCompleteServerCache_ != null ? new On(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return zl(this.writes_, e, r);
    }
  }
  getChildAfterChild(e, n, r) {
    const i = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : lr(this.viewCache_), s = d1(this.writes_, i, n, 1, r, e);
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
function p1(t) {
  return { filter: t };
}
function m1(t, e) {
  C(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), C(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function _1(t, e, n, r, i) {
  const s = new h1();
  let o, a;
  if (n.type === Rt.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = ja(t, e, c.path, c.snap, r, i, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !G(c.path), o = ao(t, e, c.path, c.snap, r, i, a, s));
  } else if (n.type === Rt.MERGE) {
    const c = n;
    c.source.fromUser ? o = v1(t, e, c.path, c.children, r, i, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = Ha(t, e, c.path, c.children, r, i, a, s));
  } else if (n.type === Rt.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = w1(t, e, c.path, r, i, s) : o = y1(t, e, c.path, c.affectedTree, r, i, s);
  } else if (n.type === Rt.LISTEN_COMPLETE)
    o = b1(t, e, n.path, r, s);
  else
    throw Qr("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return g1(e, o, l), { viewCache: o, changes: l };
}
function g1(t, e, n) {
  const r = e.eventCache;
  if (r.isFullyInitialized()) {
    const i = r.getNode().isLeafNode() || r.getNode().isEmpty(), s = io(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || i && !r.getNode().equals(s) || !r.getNode().getPriority().equals(s.getPriority())) && n.push(Ef(io(e)));
  }
}
function Nf(t, e, n, r, i, s) {
  const o = e.eventCache;
  if (oo(r, n) != null)
    return e;
  {
    let a, l;
    if (G(n))
      if (C(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = lr(e), d = c instanceof $ ? c : $.EMPTY_NODE, h = Vl(r, d);
        a = t.filter.updateFullNode(e.eventCache.getNode(), h, s);
      } else {
        const c = so(r, lr(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      }
    else {
      const c = B(n);
      if (c === ".priority") {
        C(Ln(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        l = e.serverCache.getNode();
        const h = Ru(r, n, d, l);
        h != null ? a = t.filter.updatePriority(d, h) : a = o.getNode();
      } else {
        const d = ue(n);
        let h;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = Ru(r, n, o.getNode(), l);
          u != null ? h = o.getNode().getImmediateChild(c).updateChild(d, u) : h = o.getNode().getImmediateChild(c);
        } else
          h = zl(r, c, e.serverCache);
        h != null ? a = t.filter.updateChild(o.getNode(), c, h, d, i, s) : a = o.getNode();
      }
    }
    return xi(e, a, o.isFullyInitialized() || G(n), t.filter.filtersNodes());
  }
}
function ao(t, e, n, r, i, s, o, a) {
  const l = e.serverCache;
  let c;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (G(n))
    c = d.updateFullNode(l.getNode(), r, null);
  else if (d.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, r);
    c = d.updateFullNode(l.getNode(), f, null);
  } else {
    const f = B(n);
    if (!l.isCompleteForPath(n) && Ln(n) > 1)
      return e;
    const p = ue(n), w = l.getNode().getImmediateChild(f).updateChild(p, r);
    f === ".priority" ? c = d.updatePriority(l.getNode(), w) : c = d.updateChild(l.getNode(), f, w, p, Pf, null);
  }
  const h = Cf(e, c, l.isFullyInitialized() || G(n), d.filtersNodes()), u = new Bl(i, h, s);
  return Nf(t, h, n, i, u, a);
}
function ja(t, e, n, r, i, s, o) {
  const a = e.eventCache;
  let l, c;
  const d = new Bl(i, e, s);
  if (G(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), r, o), l = xi(e, c, !0, t.filter.filtersNodes());
  else {
    const h = B(n);
    if (h === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), r), l = xi(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = ue(n), f = a.getNode().getImmediateChild(h);
      let p;
      if (G(u))
        p = r;
      else {
        const g = d.getCompleteChild(h);
        g != null ? Ol(u) === ".priority" && g.getChild(mf(u)).isEmpty() ? p = g : p = g.updateChild(u, r) : p = $.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), h, p, u, d, o);
        l = xi(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function Pu(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function v1(t, e, n, r, i, s, o) {
  let a = e;
  return r.foreach((l, c) => {
    const d = be(n, l);
    Pu(e, B(d)) && (a = ja(t, a, d, c, i, s, o));
  }), r.foreach((l, c) => {
    const d = be(n, l);
    Pu(e, B(d)) || (a = ja(t, a, d, c, i, s, o));
  }), a;
}
function Nu(t, e, n) {
  return n.foreach((r, i) => {
    e = e.updateChild(r, i);
  }), e;
}
function Ha(t, e, n, r, i, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  G(n) ? c = r : c = new ce(null).setTree(n, r);
  const d = e.serverCache.getNode();
  return c.children.inorderTraversal((h, u) => {
    if (d.hasChild(h)) {
      const f = e.serverCache.getNode().getImmediateChild(h), p = Nu(t, f, u);
      l = ao(t, l, new se(h), p, i, s, o, a);
    }
  }), c.children.inorderTraversal((h, u) => {
    const f = !e.serverCache.isCompleteForChild(h) && u.value === null;
    if (!d.hasChild(h) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(h), g = Nu(t, p, u);
      l = ao(t, l, new se(h), g, i, s, o, a);
    }
  }), l;
}
function y1(t, e, n, r, i, s, o) {
  if (oo(i, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (r.value != null) {
    if (G(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return ao(t, e, n, l.getNode().getChild(n), i, s, a, o);
    if (G(n)) {
      let c = new ce(null);
      return l.getNode().forEachChild(xr, (d, h) => {
        c = c.set(new se(d), h);
      }), Ha(t, e, n, c, i, s, a, o);
    } else
      return e;
  } else {
    let c = new ce(null);
    return r.foreach((d, h) => {
      const u = be(n, d);
      l.isCompleteForPath(u) && (c = c.set(d, l.getNode().getChild(u)));
    }), Ha(t, e, n, c, i, s, a, o);
  }
}
function b1(t, e, n, r, i) {
  const s = e.serverCache, o = Cf(e, s.getNode(), s.isFullyInitialized() || G(n), s.isFiltered());
  return Nf(t, o, n, r, Pf, i);
}
function w1(t, e, n, r, i, s) {
  let o;
  if (oo(r, n) != null)
    return e;
  {
    const a = new Bl(r, e, i), l = e.eventCache.getNode();
    let c;
    if (G(n) || B(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized())
        d = so(r, lr(e));
      else {
        const h = e.serverCache.getNode();
        C(h instanceof $, "serverChildren would be complete if leaf node"), d = Vl(r, h);
      }
      d = d, c = t.filter.updateFullNode(l, d, s);
    } else {
      const d = B(n);
      let h = zl(r, d, e.serverCache);
      h == null && e.serverCache.isCompleteForChild(d) && (h = l.getImmediateChild(d)), h != null ? c = t.filter.updateChild(l, d, h, ue(n), a, s) : e.eventCache.getNode().hasChild(d) ? c = t.filter.updateChild(l, d, $.EMPTY_NODE, ue(n), a, s) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = so(r, lr(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, s)));
    }
    return o = e.serverCache.isFullyInitialized() || oo(r, J()) != null, xi(e, c, o, t.filter.filtersNodes());
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
class E1 {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const r = this.query_._queryParams, i = new Fl(r.getIndex()), s = Ww(r);
    this.processor_ = p1(s);
    const o = n.serverCache, a = n.eventCache, l = i.updateFullNode($.EMPTY_NODE, o.getNode(), null), c = s.updateFullNode($.EMPTY_NODE, a.getNode(), null), d = new On(l, o.isFullyInitialized(), i.filtersNodes()), h = new On(c, a.isFullyInitialized(), s.filtersNodes());
    this.viewCache_ = Po(h, d), this.eventGenerator_ = new Gw(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function I1(t) {
  return t.viewCache_.serverCache.getNode();
}
function C1(t) {
  return io(t.viewCache_);
}
function T1(t, e) {
  const n = lr(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !G(e) && !n.getImmediateChild(B(e)).isEmpty()) ? n.getChild(e) : null;
}
function xu(t) {
  return t.eventRegistrations_.length === 0;
}
function S1(t, e) {
  t.eventRegistrations_.push(e);
}
function Lu(t, e, n) {
  const r = [];
  if (n) {
    C(e == null, "A cancel should cancel all event registrations.");
    const i = t.query._path;
    t.eventRegistrations_.forEach((s) => {
      const o = s.createCancelEvent(n, i);
      o && r.push(o);
    });
  }
  if (e) {
    let i = [];
    for (let s = 0; s < t.eventRegistrations_.length; ++s) {
      const o = t.eventRegistrations_[s];
      if (!o.matches(e))
        i.push(o);
      else if (e.hasAnyCallback()) {
        i = i.concat(t.eventRegistrations_.slice(s + 1));
        break;
      }
    }
    t.eventRegistrations_ = i;
  } else
    t.eventRegistrations_ = [];
  return r;
}
function Ou(t, e, n, r) {
  e.type === Rt.MERGE && e.source.queryId !== null && (C(lr(t.viewCache_), "We should always have a full cache before handling merges"), C(io(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const i = t.viewCache_, s = _1(t.processor_, i, e, n, r);
  return m1(t.processor_, s.viewCache), C(s.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = s.viewCache, xf(t, s.changes, s.viewCache.eventCache.getNode(), null);
}
function k1(t, e) {
  const n = t.viewCache_.eventCache, r = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(we, (s, o) => {
    r.push(jr(s, o));
  }), n.isFullyInitialized() && r.push(Ef(n.getNode())), xf(t, r, n.getNode(), e);
}
function xf(t, e, n, r) {
  const i = r ? [r] : t.eventRegistrations_;
  return Kw(t.eventGenerator_, e, n, i);
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
let lo;
class Lf {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function A1(t) {
  C(!lo, "__referenceConstructor has already been defined"), lo = t;
}
function R1() {
  return C(lo, "Reference.ts has not been loaded"), lo;
}
function P1(t) {
  return t.views.size === 0;
}
function ql(t, e, n, r) {
  const i = e.source.queryId;
  if (i !== null) {
    const s = t.views.get(i);
    return C(s != null, "SyncTree gave us an op for an invalid query."), Ou(s, e, n, r);
  } else {
    let s = [];
    for (const o of t.views.values())
      s = s.concat(Ou(o, e, n, r));
    return s;
  }
}
function Of(t, e, n, r, i) {
  const s = e._queryIdentifier, o = t.views.get(s);
  if (!o) {
    let a = so(n, i ? r : null), l = !1;
    a ? l = !0 : r instanceof $ ? (a = Vl(n, r), l = !1) : (a = $.EMPTY_NODE, l = !1);
    const c = Po(new On(a, l, !1), new On(r, i, !1));
    return new E1(e, c);
  }
  return o;
}
function N1(t, e, n, r, i, s) {
  const o = Of(t, e, r, i, s);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), S1(o, n), k1(o, n);
}
function x1(t, e, n, r) {
  const i = e._queryIdentifier, s = [];
  let o = [];
  const a = Dn(t);
  if (i === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(Lu(c, n, r)), xu(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || s.push(c.query));
  else {
    const l = t.views.get(i);
    l && (o = o.concat(Lu(l, n, r)), xu(l) && (t.views.delete(i), l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return a && !Dn(t) && s.push(new (R1())(e._repo, e._path)), { removed: s, events: o };
}
function Df(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Nn(t, e) {
  let n = null;
  for (const r of t.views.values())
    n = n || T1(r, e);
  return n;
}
function Mf(t, e) {
  if (e._queryParams.loadsAllData())
    return xo(t);
  {
    const r = e._queryIdentifier;
    return t.views.get(r);
  }
}
function $f(t, e) {
  return Mf(t, e) != null;
}
function Dn(t) {
  return xo(t) != null;
}
function xo(t) {
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
let co;
function L1(t) {
  C(!co, "__referenceConstructor has already been defined"), co = t;
}
function O1() {
  return C(co, "Reference.ts has not been loaded"), co;
}
let D1 = 1;
class Du {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new ce(null), this.pendingWriteTree_ = u1(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function Ff(t, e, n, r, i) {
  return Xw(t.pendingWriteTree_, e, n, r, i), i ? ti(t, new ar(Wl(), e, n)) : [];
}
function M1(t, e, n, r) {
  Zw(t.pendingWriteTree_, e, n, r);
  const i = ce.fromObject(n);
  return ti(t, new Hr(Wl(), e, i));
}
function In(t, e, n = !1) {
  const r = e1(t.pendingWriteTree_, e);
  if (t1(t.pendingWriteTree_, e)) {
    let s = new ce(null);
    return r.snap != null ? s = s.set(J(), !0) : Ue(r.children, (o) => {
      s = s.set(new se(o), !0);
    }), ti(t, new ro(r.path, s, n));
  } else
    return [];
}
function ms(t, e, n) {
  return ti(t, new ar(jl(), e, n));
}
function $1(t, e, n) {
  const r = ce.fromObject(n);
  return ti(t, new Hr(jl(), e, r));
}
function F1(t, e) {
  return ti(t, new Ki(jl(), e));
}
function U1(t, e, n) {
  const r = Kl(t, n);
  if (r) {
    const i = Yl(r), s = i.path, o = i.queryId, a = Ke(s, e), l = new Ki(Hl(o), a);
    return Ql(t, s, l);
  } else
    return [];
}
function uo(t, e, n, r, i = !1) {
  const s = e._path, o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || $f(o, e))) {
    const l = x1(o, e, n, r);
    P1(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const c = l.removed;
    if (a = l.events, !i) {
      const d = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, h = t.syncPointTree_.findOnPath(s, (u, f) => Dn(f));
      if (d && !h) {
        const u = t.syncPointTree_.subtree(s);
        if (!u.isEmpty()) {
          const f = H1(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], w = g.query, S = Hf(t, g);
            t.listenProvider_.startListening(Oi(w), Yi(t, w), S.hashFn, S.onComplete);
          }
        }
      }
      !h && c.length > 0 && !r && (d ? t.listenProvider_.stopListening(Oi(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(Lo(u));
        t.listenProvider_.stopListening(Oi(u), f);
      }));
    }
    V1(t, c);
  }
  return a;
}
function Uf(t, e, n, r) {
  const i = Kl(t, r);
  if (i != null) {
    const s = Yl(i), o = s.path, a = s.queryId, l = Ke(o, e), c = new ar(Hl(a), l, n);
    return Ql(t, o, c);
  } else
    return [];
}
function W1(t, e, n, r) {
  const i = Kl(t, r);
  if (i) {
    const s = Yl(i), o = s.path, a = s.queryId, l = Ke(o, e), c = ce.fromObject(n), d = new Hr(Hl(a), l, c);
    return Ql(t, o, d);
  } else
    return [];
}
function Va(t, e, n, r = !1) {
  const i = e._path;
  let s = null, o = !1;
  t.syncPointTree_.foreachOnPath(i, (u, f) => {
    const p = Ke(u, i);
    s = s || Nn(f, p), o = o || Dn(f);
  });
  let a = t.syncPointTree_.get(i);
  a ? (o = o || Dn(a), s = s || Nn(a, J())) : (a = new Lf(), t.syncPointTree_ = t.syncPointTree_.set(i, a));
  let l;
  s != null ? l = !0 : (l = !1, s = $.EMPTY_NODE, t.syncPointTree_.subtree(i).foreachChild((f, p) => {
    const g = Nn(p, J());
    g && (s = s.updateImmediateChild(f, g));
  }));
  const c = $f(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = Lo(e);
    C(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = z1();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const d = No(t.pendingWriteTree_, i);
  let h = N1(a, e, n, d, s, l);
  if (!c && !o && !r) {
    const u = Mf(a, e);
    h = h.concat(B1(t, e, u));
  }
  return h;
}
function Gl(t, e, n) {
  const i = t.pendingWriteTree_, s = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = Ke(o, e), c = Nn(a, l);
    if (c)
      return c;
  });
  return kf(i, e, s, n, !0);
}
function j1(t, e) {
  const n = e._path;
  let r = null;
  t.syncPointTree_.foreachOnPath(n, (c, d) => {
    const h = Ke(c, n);
    r = r || Nn(d, h);
  });
  let i = t.syncPointTree_.get(n);
  i ? r = r || Nn(i, J()) : (i = new Lf(), t.syncPointTree_ = t.syncPointTree_.set(n, i));
  const s = r != null, o = s ? new On(r, !0, !1) : null, a = No(t.pendingWriteTree_, e._path), l = Of(i, e, a, s ? o.getNode() : $.EMPTY_NODE, s);
  return C1(l);
}
function ti(t, e) {
  return Wf(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    No(t.pendingWriteTree_, J())
  );
}
function Wf(t, e, n, r) {
  if (G(t.path))
    return jf(t, e, n, r);
  {
    const i = e.get(J());
    n == null && i != null && (n = Nn(i, J()));
    let s = [];
    const o = B(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, d = Af(r, o);
      s = s.concat(Wf(a, l, c, d));
    }
    return i && (s = s.concat(ql(i, t, r, n))), s;
  }
}
function jf(t, e, n, r) {
  const i = e.get(J());
  n == null && i != null && (n = Nn(i, J()));
  let s = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = Af(r, o), d = t.operationForChild(o);
    d && (s = s.concat(jf(d, a, l, c)));
  }), i && (s = s.concat(ql(i, t, r, n))), s;
}
function Hf(t, e) {
  const n = e.query, r = Yi(t, n);
  return {
    hashFn: () => (I1(e) || $.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok")
        return r ? U1(t, n._path, r) : F1(t, n._path);
      {
        const s = Fb(i, n);
        return uo(
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
function Yi(t, e) {
  const n = Lo(e);
  return t.queryToTagMap.get(n);
}
function Lo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function Kl(t, e) {
  return t.tagToQueryMap.get(e);
}
function Yl(t) {
  const e = t.indexOf("$");
  return C(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new se(t.substr(0, e))
  };
}
function Ql(t, e, n) {
  const r = t.syncPointTree_.get(e);
  C(r, "Missing sync point for query tag that we're tracking");
  const i = No(t.pendingWriteTree_, e);
  return ql(r, n, i, null);
}
function H1(t) {
  return t.fold((e, n, r) => {
    if (n && Dn(n))
      return [xo(n)];
    {
      let i = [];
      return n && (i = Df(n)), Ue(r, (s, o) => {
        i = i.concat(o);
      }), i;
    }
  });
}
function Oi(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (O1())(t._repo, t._path) : t;
}
function V1(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const r = e[n];
    if (!r._queryParams.loadsAllData()) {
      const i = Lo(r), s = t.queryToTagMap.get(i);
      t.queryToTagMap.delete(i), t.tagToQueryMap.delete(s);
    }
  }
}
function z1() {
  return D1++;
}
function B1(t, e, n) {
  const r = e._path, i = Yi(t, e), s = Hf(t, n), o = t.listenProvider_.startListening(Oi(e), i, s.hashFn, s.onComplete), a = t.syncPointTree_.subtree(r);
  if (i)
    C(!Dn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, d, h) => {
      if (!G(c) && d && Dn(d))
        return [xo(d).query];
      {
        let u = [];
        return d && (u = u.concat(Df(d).map((f) => f.query))), Ue(h, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const d = l[c];
      t.listenProvider_.stopListening(Oi(d), Yi(t, d));
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
class Jl {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new Jl(n);
  }
  node() {
    return this.node_;
  }
}
class Xl {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = be(this.path_, e);
    return new Xl(this.syncTree_, n);
  }
  node() {
    return Gl(this.syncTree_, this.path_);
  }
}
const q1 = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, Mu = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (C(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return G1(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return K1(t[".sv"], e);
  C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, G1 = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      C(!1, "Unexpected server value: " + t);
  }
}, K1 = function(t, e, n) {
  t.hasOwnProperty("increment") || C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const r = t.increment;
  typeof r != "number" && C(!1, "Unexpected increment value: " + r);
  const i = e.node();
  if (C(i !== null && typeof i < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode())
    return r;
  const o = i.getValue();
  return typeof o != "number" ? r : o + r;
}, Vf = function(t, e, n, r) {
  return Zl(e, new Xl(n, t), r);
}, zf = function(t, e, n) {
  return Zl(t, new Jl(e), n);
};
function Zl(t, e, n) {
  const r = t.getPriority().val(), i = Mu(r, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t, a = Mu(o.getValue(), e, n);
    return a !== o.getValue() || i !== o.getPriority().val() ? new Pe(a, ke(i)) : t;
  } else {
    const o = t;
    return s = o, i !== o.getPriority().val() && (s = s.updatePriority(new Pe(i))), o.forEachChild(we, (a, l) => {
      const c = Zl(l, e.getImmediateChild(a), n);
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
class ec {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, r = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = r;
  }
}
function tc(t, e) {
  let n = e instanceof se ? e : new se(e), r = t, i = B(n);
  for (; i !== null; ) {
    const s = $r(r.node.children, i) || {
      children: {},
      childCount: 0
    };
    r = new ec(i, r, s), n = ue(n), i = B(n);
  }
  return r;
}
function ni(t) {
  return t.node.value;
}
function Bf(t, e) {
  t.node.value = e, za(t);
}
function qf(t) {
  return t.node.childCount > 0;
}
function Y1(t) {
  return ni(t) === void 0 && !qf(t);
}
function Oo(t, e) {
  Ue(t.node.children, (n, r) => {
    e(new ec(n, t, r));
  });
}
function Gf(t, e, n, r) {
  n && e(t), Oo(t, (i) => {
    Gf(i, e, !0);
  });
}
function Q1(t, e, n) {
  let r = t.parent;
  for (; r !== null; ) {
    if (e(r))
      return !0;
    r = r.parent;
  }
  return !1;
}
function _s(t) {
  return new se(t.parent === null ? t.name : _s(t.parent) + "/" + t.name);
}
function za(t) {
  t.parent !== null && J1(t.parent, t.name, t);
}
function J1(t, e, n) {
  const r = Y1(n), i = zt(t.node.children, e);
  r && i ? (delete t.node.children[e], t.node.childCount--, za(t)) : !r && !i && (t.node.children[e] = n.node, t.node.childCount++, za(t));
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
const X1 = /[\[\].#$\/\u0000-\u001F\u007F]/, Z1 = /[\[\].#$\u0000-\u001F\u007F]/, ua = 10 * 1024 * 1024, nc = function(t) {
  return typeof t == "string" && t.length !== 0 && !X1.test(t);
}, Kf = function(t) {
  return typeof t == "string" && t.length !== 0 && !Z1.test(t);
}, e0 = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Kf(t);
}, t0 = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !Rl(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zt(t, ".sv");
}, Yf = function(t, e, n, r) {
  r && e === void 0 || Do(Co(t, "value"), e, n);
}, Do = function(t, e, n) {
  const r = n instanceof se ? new vw(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + Gn(r));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + Gn(r) + " with contents = " + e.toString());
  if (Rl(e))
    throw new Error(t + "contains " + e.toString() + " " + Gn(r));
  if (typeof e == "string" && e.length > ua / 3 && To(e) > ua)
    throw new Error(t + "contains a string greater than " + ua + " utf8 bytes " + Gn(r) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let i = !1, s = !1;
    if (Ue(e, (o, a) => {
      if (o === ".value")
        i = !0;
      else if (o !== ".priority" && o !== ".sv" && (s = !0, !nc(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + Gn(r) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      yw(r, o), Do(t, a, r), bw(r);
    }), i && s)
      throw new Error(t + ' contains ".value" child ' + Gn(r) + " in addition to actual children.");
  }
}, n0 = function(t, e) {
  let n, r;
  for (n = 0; n < e.length; n++) {
    r = e[n];
    const s = zi(r);
    for (let o = 0; o < s.length; o++)
      if (!(s[o] === ".priority" && o === s.length - 1)) {
        if (!nc(s[o]))
          throw new Error(t + "contains an invalid key (" + s[o] + ") in path " + r.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(gw);
  let i = null;
  for (n = 0; n < e.length; n++) {
    if (r = e[n], i !== null && mt(i, r))
      throw new Error(t + "contains a path " + i.toString() + " that is ancestor of another path " + r.toString());
    i = r;
  }
}, r0 = function(t, e, n, r) {
  const i = Co(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(i + " must be an object containing the children to replace.");
  const s = [];
  Ue(e, (o, a) => {
    const l = new se(o);
    if (Do(i, a, be(n, l)), Ol(l) === ".priority" && !t0(a))
      throw new Error(i + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    s.push(l);
  }), n0(i, s);
}, Qf = function(t, e, n, r) {
  if (!Kf(n))
    throw new Error(Co(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, i0 = function(t, e, n, r) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Qf(t, e, n);
}, rc = function(t, e) {
  if (B(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, s0 = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !nc(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !e0(n))
    throw new Error(Co(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class o0 {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function Mo(t, e) {
  let n = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r], s = i.getPath();
    n !== null && !Dl(s, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: s }), n.events.push(i);
  }
  n && t.eventLists_.push(n);
}
function Jf(t, e, n) {
  Mo(t, n), Xf(t, (r) => Dl(r, e));
}
function yt(t, e, n) {
  Mo(t, n), Xf(t, (r) => mt(r, e) || mt(e, r));
}
function Xf(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let r = 0; r < t.eventLists_.length; r++) {
    const i = t.eventLists_[r];
    if (i) {
      const s = i.path;
      e(s) ? (a0(t.eventLists_[r]), t.eventLists_[r] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function a0(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const r = n.getEventRunner();
      Pi && $e("event: " + n.toString()), ei(r);
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
const l0 = "repo_interrupt", c0 = 25;
class u0 {
  constructor(e, n, r, i) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = r, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new o0(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = no(), this.transactionQueueTree_ = new ec(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function d0(t, e, n) {
  if (t.stats_ = xl(t.repoInfo_), t.forceRestClient_ || Hb())
    t.server_ = new to(t.repoInfo_, (r, i, s, o) => {
      $u(t, r, i, s, o);
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
        Ae(n);
      } catch (r) {
        throw new Error("Invalid authOverride provided: " + r);
      }
    }
    t.persistentConnection_ = new sn(t.repoInfo_, e, (r, i, s, o) => {
      $u(t, r, i, s, o);
    }, (r) => {
      Fu(t, r);
    }, (r) => {
      h0(t, r);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAuthToken(r);
  }), t.appCheckProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAppCheckToken(r.token);
  }), t.statsReporter_ = Gb(t.repoInfo_, () => new qw(t.stats_, t.server_)), t.infoData_ = new jw(), t.infoSyncTree_ = new Du({
    startListening: (r, i, s, o) => {
      let a = [];
      const l = t.infoData_.getNode(r._path);
      return l.isEmpty() || (a = ms(t.infoSyncTree_, r._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), ic(t, "connected", !1), t.serverSyncTree_ = new Du({
    startListening: (r, i, s, o) => (t.server_.listen(r, s, i, (a, l) => {
      const c = o(a, l);
      yt(t.eventQueue_, r._path, c);
    }), []),
    stopListening: (r, i) => {
      t.server_.unlisten(r, i);
    }
  });
}
function Zf(t) {
  const n = t.infoData_.getNode(new se(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function $o(t) {
  return q1({
    timestamp: Zf(t)
  });
}
function $u(t, e, n, r, i) {
  t.dataUpdateCount++;
  const s = new se(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (i)
    if (r) {
      const l = zs(n, (c) => ke(c));
      o = W1(t.serverSyncTree_, s, l, i);
    } else {
      const l = ke(n);
      o = Uf(t.serverSyncTree_, s, l, i);
    }
  else if (r) {
    const l = zs(n, (c) => ke(c));
    o = $1(t.serverSyncTree_, s, l);
  } else {
    const l = ke(n);
    o = ms(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = zr(t, s)), yt(t.eventQueue_, a, o);
}
function Fu(t, e) {
  ic(t, "connected", e), e === !1 && _0(t);
}
function h0(t, e) {
  Ue(e, (n, r) => {
    ic(t, n, r);
  });
}
function ic(t, e, n) {
  const r = new se("/.info/" + e), i = ke(n);
  t.infoData_.updateSnapshot(r, i);
  const s = ms(t.infoSyncTree_, r, i);
  yt(t.eventQueue_, r, s);
}
function sc(t) {
  return t.nextWriteId_++;
}
function f0(t, e, n) {
  const r = j1(t.serverSyncTree_, e);
  return r != null ? Promise.resolve(r) : t.server_.get(e).then((i) => {
    const s = ke(i).withIndex(e._queryParams.getIndex());
    Va(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = ms(t.serverSyncTree_, e._path, s);
    else {
      const a = Yi(t.serverSyncTree_, e);
      o = Uf(t.serverSyncTree_, e._path, s, a);
    }
    return yt(t.eventQueue_, e._path, o), uo(t.serverSyncTree_, e, n, null, !0), s;
  }, (i) => (gs(t, "get for query " + Ae(e) + " failed: " + i), Promise.reject(new Error(i))));
}
function p0(t, e, n, r, i) {
  gs(t, "set", {
    path: e.toString(),
    value: n,
    priority: r
  });
  const s = $o(t), o = ke(n, r), a = Gl(t.serverSyncTree_, e), l = zf(o, a, s), c = sc(t), d = Ff(t.serverSyncTree_, e, l, c, !0);
  Mo(t.eventQueue_, d), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || Ye("set at " + e + " failed: " + u);
    const g = In(t.serverSyncTree_, c, !p);
    yt(t.eventQueue_, e, g), qa(t, i, u, f);
  });
  const h = ac(t, e);
  zr(t, h), yt(t.eventQueue_, h, []);
}
function m0(t, e, n, r) {
  gs(t, "update", { path: e.toString(), value: n });
  let i = !0;
  const s = $o(t), o = {};
  if (Ue(n, (a, l) => {
    i = !1, o[a] = Vf(be(e, a), ke(l), t.serverSyncTree_, s);
  }), i)
    $e("update() called with empty data.  Don't do anything."), qa(t, r, "ok", void 0);
  else {
    const a = sc(t), l = M1(t.serverSyncTree_, e, o, a);
    Mo(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, d) => {
      const h = c === "ok";
      h || Ye("update at " + e + " failed: " + c);
      const u = In(t.serverSyncTree_, a, !h), f = u.length > 0 ? zr(t, e) : e;
      yt(t.eventQueue_, f, u), qa(t, r, c, d);
    }), Ue(n, (c) => {
      const d = ac(t, be(e, c));
      zr(t, d);
    }), yt(t.eventQueue_, e, []);
  }
}
function _0(t) {
  gs(t, "onDisconnectEvents");
  const e = $o(t), n = no();
  $a(t.onDisconnect_, J(), (i, s) => {
    const o = Vf(i, s, t.serverSyncTree_, e);
    If(n, i, o);
  });
  let r = [];
  $a(n, J(), (i, s) => {
    r = r.concat(ms(t.serverSyncTree_, i, s));
    const o = ac(t, i);
    zr(t, o);
  }), t.onDisconnect_ = no(), yt(t.eventQueue_, J(), r);
}
function g0(t, e, n) {
  let r;
  B(e._path) === ".info" ? r = Va(t.infoSyncTree_, e, n) : r = Va(t.serverSyncTree_, e, n), Jf(t.eventQueue_, e._path, r);
}
function Ba(t, e, n) {
  let r;
  B(e._path) === ".info" ? r = uo(t.infoSyncTree_, e, n) : r = uo(t.serverSyncTree_, e, n), Jf(t.eventQueue_, e._path, r);
}
function v0(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(l0);
}
function gs(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), $e(n, ...e);
}
function qa(t, e, n, r) {
  e && ei(() => {
    if (n === "ok")
      e(null);
    else {
      const i = (n || "error").toUpperCase();
      let s = i;
      r && (s += ": " + r);
      const o = new Error(s);
      o.code = i, e(o);
    }
  });
}
function ep(t, e, n) {
  return Gl(t.serverSyncTree_, e, n) || $.EMPTY_NODE;
}
function oc(t, e = t.transactionQueueTree_) {
  if (e || Fo(t, e), ni(e)) {
    const n = np(t, e);
    C(n.length > 0, "Sending zero length transaction queue"), n.every(
      (i) => i.status === 0
      /* TransactionStatus.RUN */
    ) && y0(t, _s(e), n);
  } else qf(e) && Oo(e, (n) => {
    oc(t, n);
  });
}
function y0(t, e, n) {
  const r = n.map((c) => c.currentWriteId), i = ep(t, e, r);
  let s = i;
  const o = i.hash();
  for (let c = 0; c < n.length; c++) {
    const d = n[c];
    C(d.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), d.status = 1, d.retryCount++;
    const h = Ke(e, d.path);
    s = s.updateChild(h, d.currentOutputSnapshotRaw);
  }
  const a = s.val(!0), l = e;
  t.server_.put(l.toString(), a, (c) => {
    gs(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let d = [];
    if (c === "ok") {
      const h = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, d = d.concat(In(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && h.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      Fo(t, tc(t.transactionQueueTree_, e)), oc(t, t.transactionQueueTree_), yt(t.eventQueue_, e, d);
      for (let u = 0; u < h.length; u++)
        ei(h[u]);
    } else {
      if (c === "datastale")
        for (let h = 0; h < n.length; h++)
          n[h].status === 3 ? n[h].status = 4 : n[h].status = 0;
      else {
        Ye("transaction at " + l.toString() + " failed: " + c);
        for (let h = 0; h < n.length; h++)
          n[h].status = 4, n[h].abortReason = c;
      }
      zr(t, e);
    }
  }, o);
}
function zr(t, e) {
  const n = tp(t, e), r = _s(n), i = np(t, n);
  return b0(t, i, r), r;
}
function b0(t, e, n) {
  if (e.length === 0)
    return;
  const r = [];
  let i = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = Ke(n, l.path);
    let d = !1, h;
    if (C(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      d = !0, h = l.abortReason, i = i.concat(In(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= c0)
        d = !0, h = "maxretry", i = i.concat(In(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = ep(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          Do("transaction failed: Data returned ", f, l.path);
          let p = ke(f);
          typeof f == "object" && f != null && zt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const w = l.currentWriteId, S = $o(t), T = zf(p, u, S);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = T, l.currentWriteId = sc(t), o.splice(o.indexOf(w), 1), i = i.concat(Ff(t.serverSyncTree_, l.path, T, l.currentWriteId, l.applyLocally)), i = i.concat(In(t.serverSyncTree_, w, !0));
        } else
          d = !0, h = "nodata", i = i.concat(In(t.serverSyncTree_, l.currentWriteId, !0));
      }
    yt(t.eventQueue_, n, i), i = [], d && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (h === "nodata" ? r.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : r.push(() => e[a].onComplete(new Error(h), !1, null))));
  }
  Fo(t, t.transactionQueueTree_);
  for (let a = 0; a < r.length; a++)
    ei(r[a]);
  oc(t, t.transactionQueueTree_);
}
function tp(t, e) {
  let n, r = t.transactionQueueTree_;
  for (n = B(e); n !== null && ni(r) === void 0; )
    r = tc(r, n), e = ue(e), n = B(e);
  return r;
}
function np(t, e) {
  const n = [];
  return rp(t, e, n), n.sort((r, i) => r.order - i.order), n;
}
function rp(t, e, n) {
  const r = ni(e);
  if (r)
    for (let i = 0; i < r.length; i++)
      n.push(r[i]);
  Oo(e, (i) => {
    rp(t, i, n);
  });
}
function Fo(t, e) {
  const n = ni(e);
  if (n) {
    let r = 0;
    for (let i = 0; i < n.length; i++)
      n[i].status !== 2 && (n[r] = n[i], r++);
    n.length = r, Bf(e, n.length > 0 ? n : void 0);
  }
  Oo(e, (r) => {
    Fo(t, r);
  });
}
function ac(t, e) {
  const n = _s(tp(t, e)), r = tc(t.transactionQueueTree_, e);
  return Q1(r, (i) => {
    da(t, i);
  }), da(t, r), Gf(r, (i) => {
    da(t, i);
  }), n;
}
function da(t, e) {
  const n = ni(e);
  if (n) {
    const r = [];
    let i = [], s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (C(s === o - 1, "All SENT items should be at beginning of queue."), s = o, n[o].status = 3, n[o].abortReason = "set") : (C(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), i = i.concat(In(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && r.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? Bf(e, void 0) : n.length = s + 1, yt(t.eventQueue_, _s(e), i);
    for (let o = 0; o < r.length; o++)
      ei(r[o]);
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
function w0(t) {
  let e = "";
  const n = t.split("/");
  for (let r = 0; r < n.length; r++)
    if (n[r].length > 0) {
      let i = n[r];
      try {
        i = decodeURIComponent(i.replace(/\+/g, " "));
      } catch {
      }
      e += "/" + i;
    }
  return e;
}
function E0(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0)
      continue;
    const r = n.split("=");
    r.length === 2 ? e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]) : Ye(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const Uu = function(t, e) {
  const n = I0(t), r = n.namespace;
  n.domain === "firebase.com" && ln(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!r || r === "undefined") && n.domain !== "localhost" && ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || Lb();
  const i = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new of(
      n.host,
      n.secure,
      r,
      i,
      e,
      /*persistenceKey=*/
      "",
      /*includeNamespaceInQueryParams=*/
      r !== n.subdomain
    ),
    path: new se(n.pathString)
  };
}, I0 = function(t) {
  let e = "", n = "", r = "", i = "", s = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let d = t.indexOf("/");
    d === -1 && (d = t.length);
    let h = t.indexOf("?");
    h === -1 && (h = t.length), e = t.substring(0, Math.min(d, h)), d < h && (i = w0(t.substring(d, h)));
    const u = E0(t.substring(Math.min(t.length, h)));
    c = e.indexOf(":"), c >= 0 ? (o = a === "https" || a === "wss", l = parseInt(e.substring(c + 1), 10)) : c = e.length;
    const f = e.slice(0, c);
    if (f.toLowerCase() === "localhost")
      n = "localhost";
    else if (f.split(".").length <= 2)
      n = f;
    else {
      const p = e.indexOf(".");
      r = e.substring(0, p).toLowerCase(), n = e.substring(p + 1), s = r;
    }
    "ns" in u && (s = u.ns);
  }
  return {
    host: e,
    port: l,
    domain: n,
    subdomain: r,
    secure: o,
    scheme: a,
    pathString: i,
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
const Wu = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", C0 = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const r = n === t;
    t = n;
    let i;
    const s = new Array(8);
    for (i = 7; i >= 0; i--)
      s[i] = Wu.charAt(n % 64), n = Math.floor(n / 64);
    C(n === 0, "Cannot push at time == 0");
    let o = s.join("");
    if (r) {
      for (i = 11; i >= 0 && e[i] === 63; i--)
        e[i] = 0;
      e[i]++;
    } else
      for (i = 0; i < 12; i++)
        e[i] = Math.floor(Math.random() * 64);
    for (i = 0; i < 12; i++)
      o += Wu.charAt(e[i]);
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
class T0 {
  /**
   * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
   * @param eventRegistration - The function to call to with the event data. User provided
   * @param snapshot - The data backing the event
   * @param prevName - Optional, the name of the previous child for child_* events.
   */
  constructor(e, n, r, i) {
    this.eventType = e, this.eventRegistration = n, this.snapshot = r, this.prevName = i;
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
    return this.getPath().toString() + ":" + this.eventType + ":" + Ae(this.snapshot.exportVal());
  }
}
class S0 {
  constructor(e, n, r) {
    this.eventRegistration = e, this.error = n, this.path = r;
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
class ip {
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
class lc {
  /**
   * @hideconstructor
   */
  constructor(e, n, r, i) {
    this._repo = e, this._path = n, this._queryParams = r, this._orderByCalled = i;
  }
  get key() {
    return G(this._path) ? null : Ol(this._path);
  }
  get ref() {
    return new pn(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = Tu(this._queryParams), n = Pl(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return Tu(this._queryParams);
  }
  isEqual(e) {
    if (e = Oe(e), !(e instanceof lc))
      return !1;
    const n = this._repo === e._repo, r = Dl(this._path, e._path), i = this._queryIdentifier === e._queryIdentifier;
    return n && r && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + _w(this._path);
  }
}
class pn extends lc {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new Ul(), !1);
  }
  get parent() {
    const e = mf(this._path);
    return e === null ? null : new pn(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class Qi {
  /**
   * @param _node - A SnapshotNode to wrap.
   * @param ref - The location this snapshot came from.
   * @param _index - The iteration order for this snapshot
   * @hideconstructor
   */
  constructor(e, n, r) {
    this._node = e, this.ref = n, this._index = r;
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
    const n = new se(e), r = Ji(this.ref, e);
    return new Qi(this._node.getChild(n), r, we);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (r, i) => e(new Qi(i, Ji(this.ref, r), we)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new se(e);
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
  return t = Oe(t), t._checkNotDeleted("ref"), e !== void 0 ? Ji(t._root, e) : t._root;
}
function Ji(t, e) {
  return t = Oe(t), B(t._path) === null ? i0("child", "path", e) : Qf("child", "path", e), new pn(t._repo, be(t._path, e));
}
function k0(t, e) {
  t = Oe(t), rc("push", t._path), Yf("push", e, t._path, !0);
  const n = Zf(t._repo), r = C0(n), i = Ji(t, r), s = Ji(t, r);
  let o;
  return o = Promise.resolve(s), i.then = o.then.bind(o), i.catch = o.then.bind(o, void 0), i;
}
function A0(t) {
  return rc("remove", t._path), Uo(t, null);
}
function Uo(t, e) {
  t = Oe(t), rc("set", t._path), Yf("set", e, t._path, !1);
  const n = new os();
  return p0(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function Ga(t, e) {
  r0("update", e, t._path);
  const n = new os();
  return m0(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function R0(t) {
  t = Oe(t);
  const e = new ip(() => {
  }), n = new Wo(e);
  return f0(t._repo, t, n).then((r) => new Qi(r, new pn(t._repo, t._path), t._queryParams.getIndex()));
}
class Wo {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const r = n._queryParams.getIndex();
    return new T0("value", this, new Qi(e.snapshotNode, new pn(n._repo, n._path), r));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new S0(this, e, n) : null;
  }
  matches(e) {
    return e instanceof Wo ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function P0(t, e, n, r, i) {
  let s;
  if (typeof r == "object" && (s = void 0, i = r), typeof r == "function" && (s = r), i && i.onlyOnce) {
    const l = n, c = (d, h) => {
      Ba(t._repo, t, a), l(d, h);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new ip(n, s || void 0), a = new Wo(o);
  return g0(t._repo, t, a), () => Ba(t._repo, t, a);
}
function ho(t, e, n, r) {
  return P0(t, "value", e, n, r);
}
function cc(t, e, n) {
  Ba(t._repo, t, null);
}
A1(pn);
L1(pn);
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
const N0 = "FIREBASE_DATABASE_EMULATOR_HOST", Ka = {};
let x0 = !1;
function L0(t, e, n, r) {
  const i = e.lastIndexOf(":"), s = e.substring(0, i), o = Jr(s);
  t.repoInfo_ = new of(
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
  ), r && (t.authTokenProvider_ = r);
}
function O0(t, e, n, r, i) {
  let s = r || t.options.databaseURL;
  s === void 0 && (t.options.projectId || ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), $e("Using default host for project ", t.options.projectId), s = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = Uu(s, i), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[N0]), l ? (s = `http://${l}?ns=${a.namespace}`, o = Uu(s, i), a = o.repoInfo) : o.repoInfo.secure;
  const c = new zb(t.name, t.options, e);
  s0("Invalid Firebase Database URL", o), G(o.path) || ln("Database URL must point to the root of a Firebase Database (not including a child path).");
  const d = M0(a, t, c, new Vb(t, n));
  return new $0(d, t);
}
function D0(t, e) {
  const n = Ka[e];
  (!n || n[t.key] !== t) && ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`), v0(t), delete n[t.key];
}
function M0(t, e, n, r) {
  let i = Ka[e.name];
  i || (i = {}, Ka[e.name] = i);
  let s = i[t.toURLString()];
  return s && ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), s = new u0(t, x0, n, r), i[t.toURLString()] = s, s;
}
class $0 {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (d0(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new pn(this._repo, J())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (D0(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && ln("Cannot call " + e + " on a deleted database.");
  }
}
function F0(t = sh(), e) {
  const n = yl(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const r = v_("database");
    r && U0(n, ...r);
  }
  return n;
}
function U0(t, e, n, r = {}) {
  t = Oe(t), t._checkNotDeleted("useEmulator");
  const i = `${e}:${n}`, s = t._repoInternal;
  if (t._instanceStarted) {
    if (i === t._repoInternal.repoInfo_.host && nr(r, s.repoInfo_.emulatorOptions))
      return;
    ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (s.repoInfo_.nodeAdmin)
    r.mockUserToken && ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Ls(Ls.OWNER);
  else if (r.mockUserToken) {
    const a = typeof r.mockUserToken == "string" ? r.mockUserToken : y_(r.mockUserToken, t.app.options.projectId);
    o = new Ls(a);
  }
  Jr(e) && (Xd(e), Zd("Database", !0)), L0(s, i, r, o);
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
function W0(t) {
  kb(Xr), Fr(new rr(
    "database",
    (e, { instanceIdentifier: n }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("auth-internal"), s = e.getProvider("app-check-internal");
      return O0(r, i, s, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), Rn(lu, cu, t), Rn(lu, cu, "esm2020");
}
sn.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
sn.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
W0();
const j0 = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
}, sp = ih(j0), Br = Tb(sp), Wt = F0(sp), uc = ss(null), H0 = ss(!0);
ry(Br, (t) => {
  uc.set(t), H0.set(!1);
});
async function V0(t, e) {
  try {
    return await Xv(Br, t, e), { success: !0 };
  } catch (n) {
    return console.error("로그인 오류:", n), { success: !1, error: op(n.code) };
  }
}
async function z0(t, e, n = "") {
  try {
    const r = await Jv(Br, t, e);
    return n && await ey(r.user, {
      displayName: n
    }), { success: !0 };
  } catch (r) {
    return console.error("회원가입 오류:", r), { success: !1, error: op(r.code) };
  }
}
async function B0() {
  try {
    return await iy(Br), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function op(t) {
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
var q0 = /* @__PURE__ */ z('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'), G0 = /* @__PURE__ */ z('<div class="error-message svelte-16585sj"> </div>'), K0 = /* @__PURE__ */ z('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');
const Y0 = {
  hash: "svelte-16585sj",
  code: `
  /* 컨테이너 */.login-container.svelte-16585sj {display:flex;justify-content:center;align-items:center;min-height:400px;padding:1rem;}

  /* 로그인 카드 */.login-card.svelte-16585sj {width:100%;max-width:400px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);}

  /* 제목 */.title.svelte-16585sj {margin:0 0 1.5rem 0;font-size:1.5rem;font-weight:bold;text-align:center;color:#333;}

  /* 폼 */.form.svelte-16585sj {display:flex;flex-direction:column;gap:1rem;}

  /* 폼 그룹 */.form-group.svelte-16585sj {display:flex;flex-direction:column;gap:0.5rem;}

  /* 라벨 */.label.svelte-16585sj {font-weight:500;color:#555;font-size:0.9rem;}

  /* 입력 필드 */.input.svelte-16585sj {padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;transition:border-color 0.2s;}.input.svelte-16585sj:focus {outline:none;border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);}.input.svelte-16585sj:disabled {background-color:#f5f5f5;cursor:not-allowed;}

  /* 오류 메시지 */.error-message.svelte-16585sj {padding:0.75rem;background-color:#fee;color:#c33;border-radius:4px;font-size:0.9rem;}

  /* 제출 버튼 */.submit-button.svelte-16585sj {padding:0.75rem;background-color:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color 0.2s;}.submit-button.svelte-16585sj:hover:not(:disabled) {background-color:#0056b3;}.submit-button.svelte-16585sj:disabled {background-color:#ccc;cursor:not-allowed;}

  /* 모드 전환 버튼 */.toggle-button.svelte-16585sj {padding:0.5rem;background:transparent;color:#007bff;border:none;font-size:0.9rem;cursor:pointer;text-decoration:underline;}.toggle-button.svelte-16585sj:hover:not(:disabled) {color:#0056b3;}.toggle-button.svelte-16585sj:disabled {color:#ccc;cursor:not-allowed;}`
};
function Q0(t, e) {
  hn(e, !0), Fn(t, Y0);
  let n = /* @__PURE__ */ ee(""), r = /* @__PURE__ */ ee(""), i = /* @__PURE__ */ ee(""), s = /* @__PURE__ */ ee(""), o = /* @__PURE__ */ ee(!1), a = /* @__PURE__ */ ee(
    !1
    // 회원가입 모드 토글
  );
  async function l(D) {
    D.preventDefault(), L(o, !0), L(s, "");
    let N;
    if (v(a) ? N = await z0(v(n), v(r), v(i)) : N = await V0(v(n), v(r)), N.success) {
      const j = new CustomEvent("login-success", {
        detail: { email: v(n) },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(j), L(n, ""), L(r, ""), L(i, "");
    } else {
      L(s, N.error, !0);
      const j = new CustomEvent("login-error", {
        detail: { error: N.error },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(j);
    }
    L(o, !1);
  }
  function c() {
    L(a, !v(a)), L(s, "");
  }
  var d = K0(), h = _(d), u = _(h), f = _(u, !0);
  m(u);
  var p = y(u, 2), g = _(p);
  {
    var w = (D) => {
      var N = q0(), j = y(_(N), 2);
      Sr(j), m(N), te(() => j.disabled = v(o)), Ci(j, () => v(i), (X) => L(i, X)), O(D, N);
    };
    ye(g, (D) => {
      v(a) && D(w);
    });
  }
  var S = y(g, 2), T = y(_(S), 2);
  Sr(T), m(S);
  var k = y(S, 2), I = y(_(k), 2);
  Sr(I), m(k);
  var A = y(k, 2);
  {
    var b = (D) => {
      var N = G0(), j = _(N, !0);
      m(N), te(() => x(j, v(s))), O(D, N);
    };
    ye(A, (D) => {
      v(s) && D(b);
    });
  }
  var E = y(A, 2), R = _(E, !0);
  m(E);
  var M = y(E, 2);
  M.__click = c;
  var U = _(M, !0);
  m(M), m(p), m(h), m(d), te(() => {
    x(f, v(a) ? "회원가입" : "로그인"), T.disabled = v(o), I.disabled = v(o), E.disabled = v(o), x(R, v(o) ? "처리 중..." : v(a) ? "회원가입" : "로그인"), M.disabled = v(o), x(U, v(a) ? "이미 계정이 있으신가요? 로그인" : "계정이 없으신가요? 회원가입");
  }), wa("submit", p, l), Ci(T, () => v(n), (D) => L(n, D)), Ci(I, () => v(r), (D) => L(r, D)), O(t, d), fn();
}
Yr(["click"]);
customElements.define("login-form", fe(Q0, {}, [], [], !0));
var J0 = /* @__PURE__ */ z('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), X0 = /* @__PURE__ */ z('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), Z0 = /* @__PURE__ */ z('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), eE = /* @__PURE__ */ z('<h3 class="post-title svelte-1t1odzy"> </h3>'), tE = /* @__PURE__ */ z('<p class="post-text svelte-1t1odzy"> </p>'), nE = /* @__PURE__ */ z('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), rE = /* @__PURE__ */ z('<div class="posts svelte-1t1odzy"></div>'), iE = /* @__PURE__ */ z('<div class="post-list-container svelte-1t1odzy"><!></div>');
const sE = {
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
function oE(t, e) {
  hn(e, !0), Fn(t, sE);
  let n = pt(e, "path", 7, "posts"), r = pt(e, "limit", 7, "10"), i = /* @__PURE__ */ ee(Qt([])), s = /* @__PURE__ */ ee(!0), o = /* @__PURE__ */ ee(""), a = null;
  Eo(() => {
    l();
  }), Um(() => {
    c();
  });
  function l() {
    try {
      a = Ut(Wt, n()), ho(
        a,
        (T) => {
          const k = T.val();
          k ? L(i, Object.entries(k).map(([I, A]) => ({ id: I, ...A })).sort((I, A) => (A.timestamp || 0) - (I.timestamp || 0)).slice(0, parseInt(r())), !0) : L(i, [], !0), L(s, !1), L(o, "");
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
    a && cc(a);
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
    const k = typeof T == "string" ? Number(T) : T, I = new Date(k), b = (/* @__PURE__ */ new Date()).getTime() - I.getTime(), E = Math.floor(b / 6e4), R = Math.floor(b / 36e5), M = Math.floor(b / 864e5);
    return E < 1 ? "방금 전" : E < 60 ? `${E}분 전` : R < 24 ? `${R}시간 전` : M < 7 ? `${M}일 전` : I.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return n();
    },
    set path(T = "posts") {
      n(T), st();
    },
    get limit() {
      return r();
    },
    set limit(T = "10") {
      r(T), st();
    }
  }, p = iE(), g = _(p);
  {
    var w = (T) => {
      var k = J0();
      O(T, k);
    }, S = (T) => {
      var k = Se(), I = he(k);
      {
        var A = (E) => {
          var R = X0(), M = _(R), U = _(M, !0);
          m(M), m(R), te(() => x(U, v(o))), O(E, R);
        }, b = (E) => {
          var R = Se(), M = he(R);
          {
            var U = (N) => {
              var j = Z0();
              O(N, j);
            }, D = (N) => {
              var j = rE();
              is(j, 21, () => v(i), (X) => X.id, (X, H) => {
                var Z = nE();
                Z.__click = () => d(v(H)), Z.__keydown = (me) => h(me, v(H));
                var de = _(Z), pe = _(de), ae = _(pe), oe = _(ae, !0);
                m(ae);
                var W = y(ae, 2), Q = _(W, !0);
                m(W), m(pe), m(de);
                var ne = y(de, 2), De = _(ne);
                {
                  var Ie = (me) => {
                    var qe = eE(), Je = _(qe, !0);
                    m(qe), te(() => x(Je, v(H).title)), O(me, qe);
                  };
                  ye(De, (me) => {
                    v(H).title && me(Ie);
                  });
                }
                var le = y(De, 2);
                {
                  var ge = (me) => {
                    var qe = tE(), Je = _(qe, !0);
                    m(qe), te(() => x(Je, v(H).content)), O(me, qe);
                  };
                  ye(le, (me) => {
                    v(H).content && me(ge);
                  });
                }
                m(ne);
                var je = y(ne, 2), dt = _(je), bt = _(dt);
                m(dt);
                var ht = y(dt, 2), wt = _(ht);
                m(ht), m(je), m(Z), te(
                  (me) => {
                    Ce(Z, "aria-label", `게시물: ${(v(H).title || v(H).content || "제목 없음") ?? ""}`), x(oe, v(H).author || "익명"), x(Q, me), x(bt, `👍 ${(v(H).likes || 0) ?? ""}`), x(wt, `💬 ${(v(H).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(v(H).timestamp)]
                ), O(X, Z);
              }), m(j), O(N, j);
            };
            ye(
              M,
              (N) => {
                v(i).length === 0 ? N(U) : N(D, !1);
              },
              !0
            );
          }
          O(E, R);
        };
        ye(
          I,
          (E) => {
            v(o) ? E(A) : E(b, !1);
          },
          !0
        );
      }
      O(T, k);
    };
    ye(g, (T) => {
      v(s) ? T(w) : T(S, !1);
    });
  }
  return m(p), O(t, p), fn(f);
}
Yr(["click", "keydown"]);
customElements.define("post-list", fe(oE, { path: {}, limit: {} }, [], [], !0));
tm();
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
const aE = {
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
var lE = /* @__PURE__ */ km("<svg><!><!></svg>");
function We(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = xe(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  hn(e, !1);
  let i = pt(e, "name", 12, void 0), s = pt(e, "color", 12, "currentColor"), o = pt(e, "size", 12, 24), a = pt(e, "strokeWidth", 12, 2), l = pt(e, "absoluteStrokeWidth", 12, !1), c = pt(e, "iconNode", 28, () => []);
  const d = (...g) => g.filter((w, S, T) => !!w && T.indexOf(w) === S).join(" ");
  var h = {
    get name() {
      return i();
    },
    set name(g) {
      i(g), st();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), st();
    },
    get size() {
      return o();
    },
    set size(g) {
      o(g), st();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(g) {
      a(g), st();
    },
    get absoluteStrokeWidth() {
      return l();
    },
    set absoluteStrokeWidth(g) {
      l(g), st();
    },
    get iconNode() {
      return c();
    },
    set iconNode(g) {
      c(g), st();
    }
  };
  Vd();
  var u = lE();
  Sc(
    u,
    (g, w) => ({
      ...aE,
      ...r,
      width: o(),
      height: o(),
      stroke: s(),
      "stroke-width": g,
      class: w
    }),
    [
      () => (br(l()), br(a()), br(o()), Ht(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (br(i()), br(n), Ht(() => d("lucide-icon", "lucide", i() ? `lucide-${i()}` : "", n.class)))
    ]
  );
  var f = _(u);
  is(f, 1, c, Io, (g, w) => {
    var S = /* @__PURE__ */ ma(() => $p(v(w), 2));
    let T = () => v(S)[0], k = () => v(S)[1];
    var I = Se(), A = he(I);
    Vm(A, T, !0, (b, E) => {
      Sc(b, () => ({ ...k() }));
    }), O(g, I);
  });
  var p = y(f);
  return Le(p, e, "default", {}), m(u), O(t, u), fn(h);
}
fe(
  We,
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
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M12 7v14" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  We(t, Be({ name: "book-open" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(ap, {}, ["default"], [], !0);
function Ya(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  We(t, Be({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Ya, {}, ["default"], [], !0);
function lp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  We(t, Be({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(lp, {}, ["default"], [], !0);
function Qa(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M15 3h6v6" }],
    ["path", { d: "M10 14 21 3" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ]
  ];
  We(t, Be({ name: "external-link" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Qa, {}, ["default"], [], !0);
function dc(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
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
  We(t, Be({ name: "file-text" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(dc, {}, ["default"], [], !0);
function cp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
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
  We(t, Be({ name: "house" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(cp, {}, ["default"], [], !0);
function vi(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
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
  We(t, Be({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(vi, {}, ["default"], [], !0);
function up(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "m10 17 5-5-5-5" }],
    ["path", { d: "M15 12H3" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
  ];
  We(t, Be({ name: "log-in" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(up, {}, ["default"], [], !0);
function dp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "m16 17 5-5-5-5" }],
    ["path", { d: "M21 12H9" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  We(t, Be({ name: "log-out" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(dp, {}, ["default"], [], !0);
function yi(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M4 5h16" }],
    ["path", { d: "M4 12h16" }],
    ["path", { d: "M4 19h16" }]
  ];
  We(t, Be({ name: "menu" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(yi, {}, ["default"], [], !0);
function Cn(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ]
  ];
  We(t, Be({ name: "message-circle" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Cn, {}, ["default"], [], !0);
function hp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ];
  We(t, Be({ name: "phone" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(hp, {}, ["default"], [], !0);
function fp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939" }]
  ];
  We(t, Be({ name: "send" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(fp, {}, ["default"], [], !0);
function pp(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M16 7h6v6" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  We(t, Be({ name: "trending-up" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(pp, {}, ["default"], [], !0);
function Xn(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ];
  We(t, Be({ name: "user" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Xn, {}, ["default"], [], !0);
function Xi(t, e) {
  const n = xe(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const r = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { cx: "9", cy: "7", r: "4" }]
  ];
  We(t, Be({ name: "users" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (i, s) => {
      var o = Se(), a = he(o);
      Le(a, e, "default", {}), O(i, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Xi, {}, ["default"], [], !0);
var cE = /* @__PURE__ */ z("<option> </option>"), uE = /* @__PURE__ */ z('<div class="error-message svelte-1e01td3"> </div>'), dE = /* @__PURE__ */ z('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...', 1), hE = /* @__PURE__ */ z("<!> 인증 코드 전송", 1), fE = /* @__PURE__ */ z('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'), pE = /* @__PURE__ */ z('<div class="error-message svelte-1e01td3"> </div>'), mE = /* @__PURE__ */ z('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...', 1), _E = /* @__PURE__ */ z("<!> 로그인", 1), gE = /* @__PURE__ */ z('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'), vE = /* @__PURE__ */ z('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!></div></div>');
const yE = {
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
  /* reCAPTCHA 컨테이너 */.recaptcha-container.svelte-1e01td3 {margin-bottom:1.5rem;display:flex;justify-content:center;}\r
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
function bE(t, e) {
  hn(e, !0), Fn(t, yE);
  const n = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" }
  ];
  let r = /* @__PURE__ */ ee(
    "+82"
    // 기본값: 한국
  ), i = /* @__PURE__ */ ee(
    ""
    // 전화번호 (국가 코드 제외)
  ), s = /* @__PURE__ */ ee(
    ""
    // SMS 인증 코드
  ), o = /* @__PURE__ */ ee(
    "phone"
    // 'phone' | 'code'
  ), a = /* @__PURE__ */ ee(!1), l = /* @__PURE__ */ ee(""), c = /* @__PURE__ */ ee(null), d = /* @__PURE__ */ ee(null);
  Eo(() => {
    try {
      L(
        c,
        new Ty(Br, "recaptcha-container", {
          size: "normal",
          callback: (I) => {
            console.log("reCAPTCHA verified");
          },
          "expired-callback": () => {
            L(l, "reCAPTCHA가 만료되었습니다. 페이지를 새로고침해주세요.");
          }
        }),
        !0
      ), v(c).render();
    } catch (I) {
      console.error("reCAPTCHA 초기화 실패:", I), L(l, "reCAPTCHA 초기화에 실패했습니다.");
    }
  });
  function h(I) {
    return /^[0-9]{6,15}$/.test(I);
  }
  async function u() {
    if (L(l, ""), !h(v(i))) {
      L(l, "올바른 전화번호를 입력해주세요 (6-15자리 숫자)");
      return;
    }
    L(a, !0);
    try {
      const I = `${v(r)}${v(i)}`;
      console.log("Sending verification code to:", I), L(d, await Ay(Br, I, v(c)), !0), console.log("Verification code sent successfully"), L(o, "code");
    } catch (I) {
      console.error("SMS 전송 실패:", I), I.code === "auth/invalid-phone-number" ? L(l, "잘못된 전화번호 형식입니다.") : I.code === "auth/too-many-requests" ? L(l, "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.") : L(l, `SMS 전송 실패: ${I.message}`);
    } finally {
      L(a, !1);
    }
  }
  async function f() {
    if (L(l, ""), v(s).length !== 6) {
      L(l, "6자리 인증 코드를 입력해주세요.");
      return;
    }
    L(a, !0);
    try {
      const I = await v(d).confirm(v(s));
      console.log("Login successful:", I.user);
      const A = new CustomEvent("login-success", {
        detail: { user: I.user, phoneNumber: I.user.phoneNumber }
      });
      dispatchEvent(A), L(i, ""), L(s, ""), L(o, "phone");
    } catch (I) {
      console.error("인증 코드 확인 실패:", I), I.code === "auth/invalid-verification-code" ? L(l, "잘못된 인증 코드입니다.") : I.code === "auth/code-expired" ? L(l, "인증 코드가 만료되었습니다. 다시 시도해주세요.") : L(l, `인증 실패: ${I.message}`);
      const A = new CustomEvent("login-error", { detail: { error: I.message } });
      dispatchEvent(A);
    } finally {
      L(a, !1);
    }
  }
  function p() {
    L(o, "phone"), L(s, ""), L(l, "");
  }
  var g = vE(), w = _(g), S = _(w);
  {
    var T = (I) => {
      var A = fE(), b = _(A), E = _(b);
      hp(E, { class: "icon-large" }), Kt(4), m(b);
      var R = y(b, 2), M = y(_(R), 2);
      is(M, 21, () => n, Io, (W, Q) => {
        var ne = cE(), De = _(ne);
        m(ne);
        var Ie = {};
        te(() => {
          x(De, `${v(Q).flag ?? ""} ${v(Q).name ?? ""} (${v(Q).code ?? ""})`), Ie !== (Ie = v(Q).code) && (ne.value = (ne.__value = v(Q).code) ?? "");
        }), O(W, ne);
      }), m(M), m(R);
      var U = y(R, 2), D = y(_(U), 2), N = _(D), j = _(N, !0);
      m(N);
      var X = y(N, 2);
      Sr(X), m(D), Kt(2), m(U);
      var H = y(U, 4);
      {
        var Z = (W) => {
          var Q = uE(), ne = _(Q, !0);
          m(Q), te(() => x(ne, v(l))), O(W, Q);
        };
        ye(H, (W) => {
          v(l) && W(Z);
        });
      }
      var de = y(H, 2);
      de.__click = u;
      var pe = _(de);
      {
        var ae = (W) => {
          var Q = dE();
          Kt(), O(W, Q);
        }, oe = (W) => {
          var Q = hE(), ne = he(Q);
          fp(ne, { class: "btn-icon" }), Kt(), O(W, Q);
        };
        ye(pe, (W) => {
          v(a) ? W(ae) : W(oe, !1);
        });
      }
      m(de), m(A), te(() => {
        M.disabled = v(a), x(j, v(r)), X.disabled = v(a), de.disabled = v(a) || !v(i);
      }), Qm(M, () => v(r), (W) => L(r, W)), wa("keypress", X, (W) => {
        W.key === "Enter" && (W.preventDefault(), u());
      }), Ci(X, () => v(i), (W) => L(i, W)), O(I, A);
    }, k = (I) => {
      var A = Se(), b = he(A);
      {
        var E = (R) => {
          var M = gE(), U = _(M), D = _(U);
          Ya(D, { class: "icon-large" });
          var N = y(D, 4), j = _(N);
          Kt(2), m(N), m(U);
          var X = y(U, 2), H = y(_(X), 2);
          Sr(H), Kt(2), m(X);
          var Z = y(X, 2);
          {
            var de = (le) => {
              var ge = pE(), je = _(ge, !0);
              m(ge), te(() => x(je, v(l))), O(le, ge);
            };
            ye(Z, (le) => {
              v(l) && le(de);
            });
          }
          var pe = y(Z, 2), ae = _(pe);
          ae.__click = p;
          var oe = y(ae, 2);
          oe.__click = f;
          var W = _(oe);
          {
            var Q = (le) => {
              var ge = mE();
              Kt(), O(le, ge);
            }, ne = (le) => {
              var ge = _E(), je = he(ge);
              Ya(je, { class: "btn-icon" }), Kt(), O(le, ge);
            };
            ye(W, (le) => {
              v(a) ? le(Q) : le(ne, !1);
            });
          }
          m(oe), m(pe);
          var De = y(pe, 2), Ie = y(_(De));
          Ie.__click = p, m(De), m(M), te(() => {
            x(j, `${v(r) ?? ""}${v(i) ?? ""}로 전송된`), H.disabled = v(a), ae.disabled = v(a), oe.disabled = v(a) || v(s).length !== 6;
          }), wa("keypress", H, (le) => {
            le.key === "Enter" && (le.preventDefault(), f());
          }), Ci(H, () => v(s), (le) => L(s, le)), O(R, M);
        };
        ye(
          b,
          (R) => {
            v(o) === "code" && R(E);
          },
          !0
        );
      }
      O(I, A);
    };
    ye(S, (I) => {
      v(o) === "phone" ? I(T) : I(k, !1);
    });
  }
  m(w), m(g), O(t, g), fn();
}
Yr(["click"]);
customElements.define("phone-login", fe(bE, {}, [], [], !0));
const wE = {
  프로젝트_명칭: "Hanbabo v0.2",
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
  데모제목: "SNS Web Components Demo",
  데모부제: "Svelte 5 Custom Elements + Firebase + lucide-svelte",
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
  "home.vibeBanner": "Built with Vibe Coding",
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
}, EE = {
  프로젝트_명칭: "한바보 v0.2",
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
  데모제목: "SNS Web Components 데모",
  데모부제: "Svelte 5 Custom Elements + Firebase + lucide-svelte",
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
  "home.vibeBanner": "바이브 코딩으로 만들어진 프로젝트입니다",
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
}, IE = {
  프로젝트_명칭: "ハンバボ v0.2",
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
  데모제목: "SNS Web Components デモ",
  데모부제: "Svelte 5 Custom Elements + Firebase + lucide-svelte",
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
  "home.vibeBanner": "バイブコーディングで作られたプロジェクトです",
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
}, CE = {
  프로젝트_명칭: "韩芭芭 v0.2",
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
  데모제목: "SNS Web Components 演示",
  데모부제: "Svelte 5 Custom Elements + Firebase + lucide-svelte",
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
  "home.vibeBanner": "使用Vibe编码制作的项目",
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
}, ha = { en: wE, ko: EE, ja: IE, zh: CE };
function Ja(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function mp() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = Ja(e);
    if (n !== "en") return n;
  }
  return "en";
}
function TE(t) {
  let e = Ja(t) || mp();
  function n(s) {
    e = Ja(s);
  }
  function r() {
    return e;
  }
  function i(s, o = {}) {
    return ((ha[e] ?? ha.en)[s] ?? ha.en[s] ?? s).replace(/\{(\w+)\}/g, (c, d) => o[d] ?? "");
  }
  return { t: i, setLocale: n, getLocale: r };
}
const _p = mp(), SE = TE(_p), kE = ss(_p), hc = t_(
  kE,
  (t) => (e, n = {}) => SE.t(e, n)
);
var AE = /* @__PURE__ */ z("<span> </span>"), RE = /* @__PURE__ */ z('<img alt="프로필" class="avatar-image svelte-38psow"/>'), PE = /* @__PURE__ */ z('<div class="avatar-fallback svelte-38psow"> </div>'), NE = /* @__PURE__ */ z('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'), xE = /* @__PURE__ */ z('<img class="avatar-image svelte-38psow"/>'), LE = /* @__PURE__ */ z('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), OE = /* @__PURE__ */ z('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), DE = /* @__PURE__ */ z('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), ME = /* @__PURE__ */ z('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');
const $E = {
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
function FE(t, e) {
  hn(e, !0), Fn(t, $E);
  const n = () => Ui(uc, "$user", i), r = () => Ui(hc, "$t", i), [i, s] = fl();
  let o = /* @__PURE__ */ ee(!1), a = /* @__PURE__ */ ee(null);
  function l() {
    v(a) && (v(a).classList.remove("logo-animate-active"), v(a).offsetWidth, v(a).classList.add("logo-animate-active"), setTimeout(
      () => {
        v(a)?.classList.remove("logo-animate-active");
      },
      600
    ));
  }
  async function c() {
    if ((await B0()).success) {
      const b = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(b);
    }
    L(o, !1);
  }
  function d() {
    return n()?.displayName ? n().displayName.charAt(0).toUpperCase() : n()?.email ? n().email.charAt(0).toUpperCase() : "U";
  }
  function h() {
    L(o, !v(o));
  }
  function u(A) {
    const b = document.querySelector(".dropdown-menu"), E = document.querySelector(".dropdown-trigger");
    b && !b.contains(A.target) && !E?.contains(A.target) && L(o, !1);
  }
  Eo(() => {
    const A = setTimeout(
      () => {
        l();
      },
      500
    ), b = setInterval(
      () => {
        l();
      },
      1e4
    );
    return document.addEventListener("click", u), () => {
      clearTimeout(A), clearInterval(b), document.removeEventListener("click", u);
    };
  });
  var f = ME(), p = _(f), g = _(p), w = _(g);
  is(w, 5, () => r()("프로젝트_명칭").split(""), Io, (A, b, E) => {
    var R = AE();
    Fi(R, 1, `logo-char logo-char-${E + 1}`, "svelte-38psow");
    var M = _(R, !0);
    m(R), te(() => x(M, v(b))), O(A, R);
  }), m(w), m(g), Zm(g, (A) => L(a, A), () => v(a));
  var S = y(g, 2), T = _(S);
  {
    var k = (A) => {
      var b = OE(), E = he(b), R = _(E), M = _(R);
      vi(M, { size: 16 });
      var U = y(M, 2), D = _(U, !0);
      m(U), m(R);
      var N = y(R, 2), j = _(N);
      Cn(j, { size: 16 });
      var X = y(j, 2), H = _(X, !0);
      m(X), m(N);
      var Z = y(N, 2), de = _(Z);
      Xi(de, { size: 16 });
      var pe = y(de, 2), ae = _(pe, !0);
      m(pe), m(Z);
      var oe = y(Z, 2), W = _(oe);
      W.__click = h;
      var Q = _(W), ne = _(Q);
      {
        var De = (ve) => {
          var _e = RE();
          te(() => Ce(_e, "src", n().photoURL)), O(ve, _e);
        }, Ie = (ve) => {
          var _e = PE(), rt = _(_e, !0);
          m(_e), te((Lt) => x(rt, Lt), [d]), O(ve, _e);
        };
        ye(ne, (ve) => {
          n()?.photoURL ? ve(De) : ve(Ie, !1);
        });
      }
      m(Q);
      var le = y(Q, 2), ge = _(le, !0);
      m(le), m(W);
      var je = y(W, 2);
      {
        var dt = (ve) => {
          var _e = NE(), rt = _(_e), Lt = _(rt, !0);
          m(rt);
          var jn = y(rt, 4), Hn = _(jn);
          Xn(Hn, { size: 16 });
          var Vn = y(Hn, 2), _r = _(Vn, !0);
          m(Vn), m(jn);
          var zn = y(jn, 4);
          zn.__click = c;
          var Et = _(zn);
          dp(Et, { size: 16 });
          var It = y(Et, 2), Ot = _(It, !0);
          m(It), m(zn), m(_e), te(
            (Gt, _n, Bn) => {
              x(Lt, Gt), x(_r, _n), x(Ot, Bn);
            },
            [() => r()("내계정"), () => r()("프로필수정"), () => r()("로그아웃")]
          ), O(ve, _e);
        };
        ye(je, (ve) => {
          v(o) && ve(dt);
        });
      }
      m(oe);
      var bt = y(oe, 2), ht = _(bt);
      yi(ht, { size: 24 }), m(bt), m(E);
      var wt = y(E, 2), me = _(wt), qe = _(me);
      vi(qe, { size: 20 }), m(me);
      var Je = y(me, 2), mn = _(Je);
      Xi(mn, { size: 20 }), m(Je);
      var qt = y(Je, 2), vs = _(qt);
      Cn(vs, { size: 20 }), m(qt);
      var pr = y(qt, 2), mr = _(pr), ri = _(mr);
      {
        var jo = (ve) => {
          var _e = xE();
          te(
            (rt) => {
              Ce(_e, "src", n().photoURL), Ce(_e, "alt", rt);
            },
            [() => r()("프로필")]
          ), O(ve, _e);
        }, ys = (ve) => {
          var _e = LE(), rt = _(_e, !0);
          m(_e), te((Lt) => x(rt, Lt), [d]), O(ve, _e);
        };
        ye(ri, (ve) => {
          n()?.photoURL ? ve(jo) : ve(ys, !1);
        });
      }
      m(mr), m(pr);
      var ii = y(pr, 2), si = _(ii);
      yi(si, { size: 24 }), m(ii), m(wt), te(
        (ve, _e, rt, Lt, jn, Hn, Vn, _r, zn) => {
          x(D, ve), x(H, _e), x(ae, rt), x(ge, n()?.displayName || n()?.email), Ce(bt, "title", Lt), Ce(me, "title", jn), Ce(Je, "title", Hn), Ce(qt, "title", Vn), Ce(pr, "title", _r), Ce(ii, "title", zn);
        },
        [
          () => r()("포럼"),
          () => r()("채팅"),
          () => r()("사용자찾기"),
          () => r()("메뉴"),
          () => r()("포럼"),
          () => r()("사용자찾기"),
          () => r()("채팅"),
          () => r()("프로필"),
          () => r()("메뉴")
        ]
      ), O(A, b);
    }, I = (A) => {
      var b = DE(), E = he(b), R = _(E), M = _(R);
      vi(M, { size: 16 });
      var U = y(M, 2), D = _(U, !0);
      m(U), m(R);
      var N = y(R, 2), j = _(N);
      Cn(j, { size: 16 });
      var X = y(j, 2), H = _(X, !0);
      m(X), m(N);
      var Z = y(N, 2), de = _(Z, !0);
      m(Z);
      var pe = y(Z, 2), ae = _(pe);
      yi(ae, { size: 20 }), m(pe), m(E);
      var oe = y(E, 2), W = _(oe), Q = _(W);
      vi(Q, { size: 20 }), m(W);
      var ne = y(W, 2), De = _(ne);
      Cn(De, { size: 20 }), m(ne);
      var Ie = y(ne, 2), le = _(Ie);
      Xn(le, { size: 20 }), m(Ie);
      var ge = y(Ie, 2), je = _(ge);
      yi(je, { size: 24 }), m(ge), m(oe), te(
        (dt, bt, ht, wt, me, qe, Je, mn) => {
          x(D, dt), x(H, bt), x(de, ht), Ce(pe, "title", wt), Ce(W, "title", me), Ce(ne, "title", qe), Ce(Ie, "title", Je), Ce(ge, "title", mn);
        },
        [
          () => r()("포럼"),
          () => r()("채팅"),
          () => r()("로그인"),
          () => r()("메뉴"),
          () => r()("포럼"),
          () => r()("채팅"),
          () => r()("로그인"),
          () => r()("메뉴")
        ]
      ), O(A, b);
    };
    ye(T, (A) => {
      n() ? A(k) : A(I, !1);
    });
  }
  m(S), m(p), m(f), O(t, f), fn(), s();
}
Yr(["click"]);
customElements.define("sns-topbar", fe(FE, {}, [], [], !0));
var UE = /* @__PURE__ */ z('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), WE = /* @__PURE__ */ z('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), jE = /* @__PURE__ */ z('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const HE = {
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
function VE(t, e) {
  hn(e, !1), Fn(t, HE);
  const n = () => Ui(hc, "$t", i), r = () => Ui(uc, "$user", i), [i, s] = fl();
  Vd();
  var o = jE(), a = _(o), l = _(a), c = _(l, !0);
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
  var g = y(h, 2), w = _(g);
  Cn(w, { size: 20 });
  var S = y(w, 2), T = _(S, !0);
  m(S), m(g);
  var k = y(g, 2), I = _(k);
  Xi(I, { size: 20 });
  var A = y(I, 2), b = _(A, !0);
  m(A), m(k);
  var E = y(k, 2), R = _(E);
  Xn(R, { size: 20 });
  var M = y(R, 2), U = _(M, !0);
  m(M), m(E);
  var D = y(E, 2), N = _(D);
  dc(N, { size: 20 });
  var j = y(N, 2), X = _(j, !0);
  m(j), m(D), m(d);
  var H = y(d, 4), Z = _(H), de = _(Z, !0);
  m(Z);
  var pe = y(Z, 2), ae = _(pe);
  {
    var oe = (Et) => {
      var It = UE(), Ot = _(It);
      Xn(Ot, { size: 16 });
      var Gt = y(Ot, 2), _n = _(Gt, !0);
      m(Gt), m(It), te((Bn) => x(_n, Bn), [() => n()("회원정보수정")]), O(Et, It);
    }, W = (Et) => {
      var It = WE(), Ot = he(It), Gt = _(Ot);
      up(Gt, { size: 16 });
      var _n = y(Gt, 2), Bn = _(_n, !0);
      m(_n), m(Ot);
      var bs = y(Ot, 2), ws = _(bs);
      Xn(ws, { size: 16 });
      var Es = y(ws, 2), Ho = _(Es, !0);
      m(Es), m(bs), te(
        (Vo, zo) => {
          x(Bn, Vo), x(Ho, zo);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), O(Et, It);
    };
    ye(ae, (Et) => {
      r() ? Et(oe) : Et(W, !1);
    });
  }
  m(pe), m(H);
  var Q = y(H, 4), ne = _(Q), De = _(ne);
  Xi(De, { size: 16 });
  var Ie = y(De, 2), le = _(Ie, !0);
  m(Ie), m(ne);
  var ge = y(ne, 2), je = y(_(ge), 2), dt = _(je, !0);
  m(je);
  var bt = y(je, 2);
  Qa(bt, { size: 12, class: "external-icon" }), m(ge);
  var ht = y(ge, 2), wt = _(ht);
  Cn(wt, { size: 16 });
  var me = y(wt, 2), qe = _(me, !0);
  m(me);
  var Je = y(me, 2);
  Qa(Je, { size: 12, class: "external-icon" }), m(ht);
  var mn = y(ht, 2), qt = _(mn);
  ap(qt, { size: 16 });
  var vs = y(qt, 2), pr = _(vs, !0);
  m(vs), m(mn), m(Q);
  var mr = y(Q, 2), ri = _(mr), jo = _(ri, !0);
  m(ri);
  var ys = y(ri, 2), ii = _(ys, !0);
  m(ys), m(mr);
  var si = y(mr, 2), ve = _(si), _e = _(ve), rt = _(_e, !0);
  m(_e);
  var Lt = y(_e, 2), jn = _(Lt, !0);
  m(Lt), m(ve), m(si);
  var Hn = y(si, 2), Vn = _(Hn), _r = _(Vn, !0), zn = y(_r, 2);
  m(Vn), m(Hn), m(a), m(o), te(
    (Et, It, Ot, Gt, _n, Bn, bs, ws, Es, Ho, Vo, zo, gp, vp, yp, bp, wp) => {
      x(c, Et), x(p, It), x(T, Ot), x(b, Gt), x(U, _n), x(X, Bn), x(de, bs), x(le, ws), x(dt, Es), x(qe, Ho), x(pr, Vo), x(jo, zo), x(ii, gp), x(rt, vp), x(jn, yp), x(_r, bp), x(zn, ` ${wp ?? ""}`);
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
  ), O(t, o), fn(), s();
}
customElements.define("sns-left-sidebar", fe(VE, {}, [], [], !0));
var zE = /* @__PURE__ */ z('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const BE = {
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
function qE(t, e) {
  hn(e, !0), Fn(t, BE);
  const n = () => Ui(hc, "$t", r), [r, i] = fl();
  let s = /* @__PURE__ */ ee(Qt({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = zE(), a = _(o), l = _(a), c = _(l, !0);
  m(l);
  var d = y(l, 2), h = _(d), u = _(h), f = _(u);
  Xn(f, { size: 20 }), m(u);
  var p = y(u, 2), g = _(p), w = _(g, !0);
  m(g);
  var S = y(g, 2), T = _(S, !0);
  m(S), m(p), m(h);
  var k = y(h, 2), I = _(k), A = _(I);
  pp(A, { size: 20 }), m(I);
  var b = y(I, 2), E = _(b), R = _(E, !0);
  m(E);
  var M = y(E, 2), U = _(M, !0);
  m(M), m(b), m(k);
  var D = y(k, 2), N = _(D), j = _(N);
  dc(j, { size: 20 }), m(N);
  var X = y(N, 2), H = _(X), Z = _(H, !0);
  m(H);
  var de = y(H, 2), pe = _(de, !0);
  m(de);
  var ae = y(de, 2), oe = _(ae, !0);
  m(ae), m(X), m(D);
  var W = y(D, 2), Q = _(W), ne = _(Q);
  Cn(ne, { size: 20 }), m(Q);
  var De = y(Q, 2), Ie = _(De), le = _(Ie, !0);
  m(Ie);
  var ge = y(Ie, 2), je = _(ge, !0);
  m(ge), m(De), m(W), m(d);
  var dt = y(d, 2), bt = _(dt, !0);
  m(dt), m(a), m(o), te(
    (ht, wt, me, qe, Je, mn, qt) => {
      x(c, ht), x(w, wt), x(T, v(s).totalUsers), x(R, me), x(U, v(s).totalScore), x(Z, qe), x(pe, v(s).totalPosts), x(oe, Je), x(le, mn), x(je, v(s).totalMessages), x(bt, qt);
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
  ), O(t, o), fn(), i();
}
customElements.define("sns-right-sidebar", fe(qE, {}, [], [], !0));
var GE = /* @__PURE__ */ z('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const KE = {
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
function YE(t, e) {
  Fn(t, KE);
  var n = GE(), r = _(n), i = y(r, 2), s = _(i);
  Fi(s, 1, "left-sidebar svelte-um1xbq");
  var o = y(s, 2), a = _(o);
  Le(a, e, "default", {}), m(o);
  var l = y(o, 2);
  Fi(l, 1, "right-sidebar svelte-um1xbq"), m(i), m(n), O(t, n);
}
customElements.define("sns-layout", fe(YE, {}, ["default"], [], !0));
var QE = /* @__PURE__ */ z('<div class="icon-container svelte-m3h71q"> </div>'), JE = /* @__PURE__ */ z('<p class="hint-box svelte-m3h71q"> </p>'), XE = /* @__PURE__ */ z('<p class="gpl-box svelte-m3h71q"> </p>'), ZE = /* @__PURE__ */ z('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'), eI = /* @__PURE__ */ z('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'), tI = /* @__PURE__ */ z('<div class="accordion svelte-m3h71q"></div>');
const nI = {
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
function rI(t, e) {
  hn(e, !0), Fn(t, nI);
  let n = pt(e, "items", 7, "[]"), r = pt(e, "type", 7, "single"), i = pt(e, "collapsible", 7, !0), s = /* @__PURE__ */ ma(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ ma(() => () => {
    const u = i();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ ee(Qt(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(v(a));
    r() === "single" ? f.has(u) ? v(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), L(a, f, !0);
  }
  function c(u) {
    return v(a).has(u);
  }
  var d = {
    get items() {
      return n();
    },
    set items(u = "[]") {
      n(u), st();
    },
    get type() {
      return r();
    },
    set type(u = "single") {
      r(u), st();
    },
    get collapsible() {
      return i();
    },
    set collapsible(u = !0) {
      i(u), st();
    }
  }, h = tI();
  return is(h, 21, () => v(s), Io, (u, f, p) => {
    var g = eI(), w = _(g);
    w.__click = () => l(p);
    var S = _(w), T = _(S);
    {
      var k = (D) => {
        var N = QE(), j = _(N, !0);
        m(N), te(() => x(j, v(f).icon)), O(D, N);
      };
      ye(T, (D) => {
        v(f).icon && D(k);
      });
    }
    var I = y(T, 2), A = _(I, !0);
    m(I), m(S);
    var b = y(S, 2);
    let E;
    var R = _(b);
    lp(R, { size: 20 }), m(b), m(w);
    var M = y(w, 2);
    {
      var U = (D) => {
        var N = ZE(), j = _(N), X = _(j, !0);
        m(j);
        var H = y(j, 2);
        {
          var Z = (ae) => {
            var oe = JE(), W = _(oe, !0);
            m(oe), te(() => x(W, v(f).hint)), O(ae, oe);
          };
          ye(H, (ae) => {
            v(f).hint && ae(Z);
          });
        }
        var de = y(H, 2);
        {
          var pe = (ae) => {
            var oe = XE(), W = _(oe, !0);
            m(oe), te(() => x(W, v(f).gpl)), O(ae, oe);
          };
          ye(de, (ae) => {
            v(f).gpl && ae(pe);
          });
        }
        m(N), te(() => x(X, v(f).content)), O(D, N);
      };
      ye(M, (D) => {
        c(p) && D(U);
      });
    }
    m(g), te(
      (D, N) => {
        Ce(w, "aria-expanded", D), x(A, v(f).title), E = Fi(b, 1, "chevron svelte-m3h71q", null, E, N);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), O(u, g);
  }), m(h), O(t, h), fn(d);
}
Yr(["click"]);
customElements.define("sns-accordion", fe(rI, { items: {}, type: {}, collapsible: {} }, [], [], !0));
function sI(t) {
  const { subscribe: e, set: n } = ss(null), r = Ut(Wt, t);
  return ho(r, (i) => {
    const s = i.val();
    n(s);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => cc(r)
  };
}
async function oI(t, e) {
  try {
    const n = Ut(Wt, t);
    return await Uo(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function aI(t, e) {
  try {
    const n = Ut(Wt, t);
    return await Ga(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function lI(t) {
  try {
    const e = Ut(Wt, t);
    return await A0(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function cI(t, e) {
  try {
    const n = Ut(Wt, t), r = k0(n);
    return await Uo(r, e), { success: !0, key: r.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function uI(t) {
  try {
    const e = Ut(Wt, t), n = await R0(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function dI(t) {
  const e = Ut(Wt, `status/${t}`), n = Ut(Wt, ".info/connected");
  return ho(n, (r) => {
    r.val() === !0 && (Uo(e, {
      online: !0,
      lastSeen: Date.now()
    }), ho(Ut(Wt, ".info/connected"), (i) => {
      i.val() || Ga(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    Ga(e, {
      online: !1,
      lastSeen: Date.now()
    }), cc(n);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  Br as auth,
  sI as createRealtimeStore,
  Wt as database,
  lI as deleteData,
  H0 as loading,
  cI as pushData,
  uI as readData,
  dI as setupPresence,
  V0 as signIn,
  B0 as signOut,
  z0 as signUp,
  aI as updateData,
  uc as user,
  oI as writeData
};
