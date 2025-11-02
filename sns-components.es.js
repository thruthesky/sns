typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Xr = 1, Zr = 2, Su = 4, ep = 8, tp = 16, np = 1, sp = 2, ku = 4, ip = 8, rp = 16, op = 1, ap = 2, Au = "[", eo = "[!", Fa = "]", Rs = {}, Ce = Symbol(), lp = "http://www.w3.org/1999/xhtml", cp = "http://www.w3.org/2000/svg", up = "@attach", Ru = !1;
var Ua = Array.isArray, hp = Array.prototype.indexOf, ja = Array.from, wr = Object.keys, Ei = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Nu = Object.getOwnPropertyDescriptors, dp = Object.prototype, fp = Array.prototype, Wa = Object.getPrototypeOf, ec = Object.isExtensible;
function ti(t) {
  return typeof t == "function";
}
const yn = () => {
};
function pp(t) {
  return t();
}
function Er(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Pu() {
  var t, e, n = new Promise((s, i) => {
    t = s, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function _p(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const s of t)
    if (n.push(s), n.length === e) break;
  return n;
}
const Oe = 2, za = 4, to = 8, rn = 16, on = 32, Nn = 64, no = 128, Pe = 1024, Ge = 2048, an = 4096, et = 8192, Qt = 16384, Ha = 32768, Kn = 65536, tc = 1 << 17, mp = 1 << 18, is = 1 << 19, xu = 1 << 20, dt = 256, Ir = 512, Cr = 32768, Zo = 1 << 21, Ba = 1 << 22, Vn = 1 << 23, Ot = Symbol("$state"), Va = Symbol("legacy props"), gp = Symbol(""), gs = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), vp = 1, qa = 3, Ws = 8;
function Ou(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function yp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bp(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function wp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ep(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ip() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Cp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tp(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function kp() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ap() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function so(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Np() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Pp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let M = !1;
function Ze(t) {
  M = t;
}
let q;
function Se(t) {
  if (t === null)
    throw so(), Rs;
  return q = t;
}
function Yn() {
  return Se(
    /** @type {TemplateNode} */
    /* @__PURE__ */ jt(q)
  );
}
function _(t) {
  if (M) {
    if (/* @__PURE__ */ jt(q) !== null)
      throw so(), Rs;
    q = t;
  }
}
function xp(t = 1) {
  if (M) {
    for (var e = t, n = q; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n);
    q = n;
  }
}
function Tr(t = !0) {
  for (var e = 0, n = q; ; ) {
    if (n.nodeType === Ws) {
      var s = (
        /** @type {Comment} */
        n.data
      );
      if (s === Fa) {
        if (e === 0) return n;
        e -= 1;
      } else (s === Au || s === eo) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    );
    t && n.remove(), n = i;
  }
}
function Du(t) {
  if (!t || t.nodeType !== Ws)
    throw so(), Rs;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Mu(t) {
  return t === this.v;
}
function Lu(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $u(t) {
  return !Lu(t, this.v);
}
let zs = !1, Op = !1;
function Dp() {
  zs = !0;
}
let ue = null;
function Ns(t) {
  ue = t;
}
function Pn(t, e = !1, n) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: zs && !e ? { s: null, u: null, $: [] } : null
  };
}
function xn(t) {
  var e = (
    /** @type {ComponentContext} */
    ue
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var s of n)
      th(s);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ue = e.p, t ?? /** @type {T} */
  {};
}
function Ui() {
  return !zs || ue !== null && ue.l === null;
}
let Hn = [];
function Fu() {
  var t = Hn;
  Hn = [], Er(t);
}
function On(t) {
  if (Hn.length === 0 && !fi) {
    var e = Hn;
    queueMicrotask(() => {
      e === Hn && Fu();
    });
  }
  Hn.push(t);
}
function Mp() {
  for (; Hn.length > 0; )
    Fu();
}
function Uu(t) {
  var e = F;
  if (e === null)
    return V.f |= Vn, t;
  if ((e.f & Ha) === 0) {
    if ((e.f & no) === 0)
      throw t;
    e.b.error(t);
  } else
    Ps(t, e);
}
function Ps(t, e) {
  for (; e !== null; ) {
    if ((e.f & no) !== 0)
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
const lr = /* @__PURE__ */ new Set();
let te = null, fr = null, bt = null, xt = [], io = null, ea = !1, fi = !1;
class It {
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
  #s = 0;
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
    xt = [], fr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of e)
      this.#i(s, n);
    this.is_fork || this.#c(), this.#s > 0 || this.is_fork ? (this.#r(n.effects), this.#r(n.render_effects), this.#r(n.block_effects)) : (fr = this, te = null, nc(n.render_effects), nc(n.effects), fr = null, this.#l?.resolve()), bt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(e, n) {
    e.f ^= Pe;
    for (var s = e.first; s !== null; ) {
      var i = s.f, r = (i & (on | Nn)) !== 0, o = r && (i & Pe) !== 0, a = o || (i & et) !== 0 || this.skipped_effects.has(s);
      if ((s.f & no) !== 0 && s.b?.is_pending() && (n = {
        parent: n,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && s.fn !== null) {
        r ? s.f ^= Pe : (i & za) !== 0 ? n.effects.push(s) : zi(s) && ((s.f & rn) !== 0 && n.block_effects.push(s), Ci(s));
        var l = s.first;
        if (l !== null) {
          s = l;
          continue;
        }
      }
      var c = s.parent;
      for (s = s.next; s === null && c !== null; )
        c === n.effect && (this.#r(n.effects), this.#r(n.render_effects), this.#r(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), s = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #r(e) {
    for (const n of e)
      ((n.f & Ge) !== 0 ? this.#o : this.#a).push(n), xe(n, Pe);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), this.current.set(e, e.v), bt?.set(e, e.v);
  }
  activate() {
    te = this;
  }
  deactivate() {
    te = null, bt = null;
  }
  flush() {
    if (this.activate(), xt.length > 0) {
      if (ju(), te !== null && te !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#e) e(this);
    this.#e.clear();
  }
  #c() {
    if (this.#s === 0) {
      for (const e of this.#t) e();
      this.#t.clear();
    }
    this.#n === 0 && this.#u();
  }
  #u() {
    if (lr.size > 1) {
      this.previous.clear();
      var e = bt, n = !0, s = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of lr) {
        if (i === this) {
          n = !1;
          continue;
        }
        const r = [];
        for (const [a, l] of this.current) {
          if (i.current.has(a))
            if (n && l !== i.current.get(a))
              i.current.set(a, l);
            else
              continue;
          r.push(a);
        }
        if (r.length === 0)
          continue;
        const o = [...i.current.keys()].filter((a) => !this.current.has(a));
        if (o.length > 0) {
          const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const c of r)
            Wu(c, o, a, l);
          if (xt.length > 0) {
            te = i, i.apply();
            for (const c of xt)
              i.#i(c, s);
            xt = [], i.deactivate();
          }
        }
      }
      te = null, bt = e;
    }
    this.committed = !0, lr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#s += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#s -= 1), this.revive();
  }
  revive() {
    for (const e of this.#o)
      xe(e, Ge), Qn(e);
    for (const e of this.#a)
      xe(e, an), Qn(e);
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
    return (this.#l ??= Pu()).promise;
  }
  static ensure() {
    if (te === null) {
      const e = te = new It();
      lr.add(te), fi || It.enqueue(() => {
        te === e && e.flush();
      });
    }
    return te;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    On(e);
  }
  apply() {
  }
}
function Xe(t) {
  var e = fi;
  fi = !0;
  try {
    for (var n; ; ) {
      if (Mp(), xt.length === 0 && (te?.flush(), xt.length === 0))
        return io = null, /** @type {T} */
        n;
      ju();
    }
  } finally {
    fi = e;
  }
}
function ju() {
  var t = ws;
  ea = !0;
  try {
    var e = 0;
    for (ac(!0); xt.length > 0; ) {
      var n = It.ensure();
      if (e++ > 1e3) {
        var s, i;
        Lp();
      }
      n.process(xt), bn.clear();
    }
  } finally {
    ea = !1, ac(t), io = null;
  }
}
function Lp() {
  try {
    Ip();
  } catch (t) {
    Ps(t, io);
  }
}
let Bt = null;
function nc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var s = t[n++];
      if ((s.f & (Qt | et)) === 0 && zi(s) && (Bt = /* @__PURE__ */ new Set(), Ci(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null && s.ac === null ? ih(s) : s.fn = null), Bt?.size > 0)) {
        bn.clear();
        for (const i of Bt) {
          if ((i.f & (Qt | et)) !== 0) continue;
          const r = [i];
          let o = i.parent;
          for (; o !== null; )
            Bt.has(o) && (Bt.delete(o), r.push(o)), o = o.parent;
          for (let a = r.length - 1; a >= 0; a--) {
            const l = r[a];
            (l.f & (Qt | et)) === 0 && Ci(l);
          }
        }
        Bt.clear();
      }
    }
    Bt = null;
  }
}
function Wu(t, e, n, s) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const r = i.f;
      (r & Oe) !== 0 ? Wu(
        /** @type {Derived} */
        i,
        e,
        n,
        s
      ) : (r & (Ba | rn)) !== 0 && (r & Ge) === 0 && // we may have scheduled this one already
      zu(i, e, s) && (xe(i, Ge), Qn(
        /** @type {Effect} */
        i
      ));
    }
}
function zu(t, e, n) {
  const s = n.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (e.includes(i))
        return !0;
      if ((i.f & Oe) !== 0 && zu(
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
function Qn(t) {
  for (var e = io = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ea && e === F && (n & rn) !== 0)
      return;
    if ((n & (Nn | on)) !== 0) {
      if ((n & Pe) === 0) return;
      e.f ^= Pe;
    }
  }
  xt.push(e);
}
function $p(t) {
  let e = 0, n = Sn(0), s;
  return () => {
    Yp() && (E(n), ao(() => (e === 0 && (s = Ut(() => t(() => pi(n)))), e += 1, () => {
      On(() => {
        e -= 1, e === 0 && (s?.(), s = void 0, pi(n));
      });
    })));
  };
}
var Fp = Kn | is | no;
function Up(t, e, n) {
  new jp(t, e, n);
}
class jp {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = M ? q : null;
  /** @type {BoundaryProps} */
  #s;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {DocumentFragment | null} */
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #f = 0;
  #h = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #y = $p(() => (this.#d = Sn(this.#f), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, s) {
    this.#e = e, this.#s = n, this.#l = s, this.parent = /** @type {Effect} */
    F.b, this.#t = !!this.#s.pending, this.#o = Hs(() => {
      if (F.b = this, M) {
        const r = this.#n;
        Yn(), /** @type {Comment} */
        r.nodeType === Ws && /** @type {Comment} */
        r.data === eo ? this.#w() : this.#b();
      } else {
        var i = this.#g();
        try {
          this.#a = Be(() => s(i));
        } catch (r) {
          this.error(r);
        }
        this.#h > 0 ? this.#m() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Fp), M && (this.#e = q);
  }
  #b() {
    try {
      this.#a = Be(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#s.pending;
    e && (this.#i = Be(() => e(this.#e)), It.enqueue(() => {
      var n = this.#g();
      this.#a = this.#_(() => (It.ensure(), Be(() => this.#l(n)))), this.#h > 0 ? this.#m() : (bs(
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
    return this.#t && (this.#u = ft(), this.#e.before(this.#u), e = this.#u), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#s.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #_(e) {
    var n = F, s = V, i = ue;
    pt(this.#o), Ve(this.#o), Ns(this.#o.ctx);
    try {
      return e();
    } catch (r) {
      return Uu(r), null;
    } finally {
      pt(n), Ve(s), Ns(i);
    }
  }
  #m() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#s.pending
    );
    this.#a !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), ah(this.#a, this.#c)), this.#i === null && (this.#i = Be(() => e(this.#e)));
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
    this.#h += e, this.#h === 0 && (this.#t = !1, this.#i && bs(this.#i, () => {
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
    this.#v(e), this.#f += e, this.#d && xs(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#y(), E(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#s.onerror;
    let s = this.#s.failed;
    if (this.#p || !n && !s)
      throw e;
    this.#a && (ve(this.#a), this.#a = null), this.#i && (ve(this.#i), this.#i = null), this.#r && (ve(this.#r), this.#r = null), M && (Se(
      /** @type {TemplateNode} */
      this.#n
    ), xp(), Se(Tr()));
    var i = !1, r = !1;
    const o = () => {
      if (i) {
        Pp();
        return;
      }
      i = !0, r && Rp(), It.ensure(), this.#f = 0, this.#r !== null && bs(this.#r, () => {
        this.#r = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#_(() => (this.#p = !1, Be(() => this.#l(this.#e)))), this.#h > 0 ? this.#m() : this.#t = !1;
    };
    var a = V;
    try {
      Ve(null), r = !0, n?.(e, o), r = !1;
    } catch (l) {
      Ps(l, this.#o && this.#o.parent);
    } finally {
      Ve(a);
    }
    s && On(() => {
      this.#r = this.#_(() => {
        It.ensure(), this.#p = !0;
        try {
          return Be(() => {
            s(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Ps(
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
function Hu(t, e, n, s) {
  const i = Ui() ? ji : Ga;
  if (n.length === 0 && t.length === 0) {
    s(e.map(i));
    return;
  }
  var r = te, o = (
    /** @type {Effect} */
    F
  ), a = Wp();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ zp(c))).then((c) => {
      a();
      try {
        s([...e.map(i), ...c]);
      } catch (h) {
        (o.f & Qt) === 0 && Ps(h, o);
      }
      r?.deactivate(), Sr();
    }).catch((c) => {
      Ps(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      r?.deactivate(), Sr();
    }
  }) : l();
}
function Wp() {
  var t = F, e = V, n = ue, s = te;
  return function(r = !0) {
    pt(t), Ve(e), Ns(n), r && s?.activate();
  };
}
function Sr() {
  pt(null), Ve(null), Ns(null);
}
// @__NO_SIDE_EFFECTS__
function ji(t) {
  var e = Oe | Ge, n = V !== null && (V.f & Oe) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return F === null || n !== null && (n.f & dt) !== 0 ? e |= dt : F.f |= is, {
    ctx: ue,
    deps: null,
    effects: null,
    equals: Mu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ce
    ),
    wv: 0,
    parent: n ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function zp(t, e) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && yp();
  var s = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = Sn(
    /** @type {V} */
    Ce
  ), o = !V, a = /* @__PURE__ */ new Map();
  return Zp(() => {
    var l = Pu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === te && c.committed && c.deactivate(), Sr();
      });
    } catch (u) {
      l.reject(u), Sr();
    }
    var c = (
      /** @type {Batch} */
      te
    );
    if (o) {
      var h = !s.is_pending();
      s.update_pending_count(1), c.increment(h), a.get(c)?.reject(gs), a.delete(c), a.set(c, l);
    }
    const d = (u, f = void 0) => {
      if (c.activate(), f)
        f !== gs && (r.f |= Vn, xs(r, f));
      else {
        (r.f & Vn) !== 0 && (r.f ^= Vn), xs(r, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(gs);
        }
      }
      o && (s.update_pending_count(-1), c.decrement(h));
    };
    l.promise.then(d, (u) => d(null, u || "unknown"));
  }), Wi(() => {
    for (const l of a.values())
      l.reject(gs);
  }), new Promise((l) => {
    function c(h) {
      function d() {
        h === i ? l(r) : c(i);
      }
      h.then(d, d);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ta(t) {
  const e = /* @__PURE__ */ ji(t);
  return lh(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ga(t) {
  const e = /* @__PURE__ */ ji(t);
  return e.equals = $u, e;
}
function Bu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      ve(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Hp(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Oe) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ka(t) {
  var e, n = F;
  pt(Hp(t));
  try {
    t.f &= ~Cr, Bu(t), e = dh(t);
  } finally {
    pt(n);
  }
  return e;
}
function Vu(t) {
  var e = Ka(t);
  if (t.equals(e) || (t.v = e, t.wv = uh()), !rs)
    if (bt !== null)
      bt.set(t, t.v);
    else {
      var n = (gn || (t.f & dt) !== 0) && t.deps !== null ? an : Pe;
      xe(t, n);
    }
}
let na = /* @__PURE__ */ new Set();
const bn = /* @__PURE__ */ new Map();
let qu = !1;
function Sn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Mu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(t, e) {
  const n = Sn(t);
  return lh(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ya(t, e = !1, n = !0) {
  const s = Sn(t);
  return e || (s.equals = $u), zs && n && ue !== null && ue.l !== null && (ue.l.s ??= []).push(s), s;
}
function B(t, e, n = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!wt || (V.f & tc) !== 0) && Ui() && (V.f & (Oe | rn | Ba | tc)) !== 0 && !Jt?.includes(t) && Ap();
  let s = n ? Vt(e) : e;
  return xs(t, s);
}
function xs(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    rs ? bn.set(t, e) : bn.set(t, n), t.v = e;
    var s = It.ensure();
    s.capture(t, n), (t.f & Oe) !== 0 && ((t.f & Ge) !== 0 && Ka(
      /** @type {Derived} */
      t
    ), xe(t, (t.f & dt) === 0 ? Pe : an)), t.wv = uh(), Gu(t, Ge), Ui() && F !== null && (F.f & Pe) !== 0 && (F.f & (on | Nn)) === 0 && (lt === null ? n_([t]) : lt.push(t)), !s.is_fork && na.size > 0 && !qu && Bp();
  }
  return e;
}
function Bp() {
  qu = !1;
  const t = Array.from(na);
  for (const e of t)
    (e.f & Pe) !== 0 && xe(e, an), zi(e) && Ci(e);
  na.clear();
}
function sc(t, e = 1) {
  var n = E(t), s = e === 1 ? n++ : n--;
  return B(t, n), s;
}
function pi(t) {
  B(t, t.v + 1);
}
function Gu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var s = Ui(), i = n.length, r = 0; r < i; r++) {
      var o = n[r], a = o.f;
      if (!(!s && o === F)) {
        var l = (a & Ge) === 0;
        l && xe(o, e), (a & Oe) !== 0 ? (a & Cr) === 0 && (o.f |= Cr, Gu(
          /** @type {Derived} */
          o,
          an
        )) : l && ((a & rn) !== 0 && Bt !== null && Bt.add(
          /** @type {Effect} */
          o
        ), Qn(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Vt(t) {
  if (typeof t != "object" || t === null || Ot in t)
    return t;
  const e = Wa(t);
  if (e !== dp && e !== fp)
    return t;
  var n = /* @__PURE__ */ new Map(), s = Ua(t), i = /* @__PURE__ */ fe(0), r = qn, o = (a) => {
    if (qn === r)
      return a();
    var l = V, c = qn;
    Ve(null), cc(r);
    var h = a();
    return Ve(l), cc(c), h;
  };
  return s && n.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Sp();
        var h = n.get(l);
        return h === void 0 ? h = o(() => {
          var d = /* @__PURE__ */ fe(c.value);
          return n.set(l, d), d;
        }) : B(h, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const h = o(() => /* @__PURE__ */ fe(Ce));
            n.set(l, h), pi(i);
          }
        } else
          B(c, Ce), pi(i);
        return !0;
      },
      get(a, l, c) {
        if (l === Ot)
          return t;
        var h = n.get(l), d = l in a;
        if (h === void 0 && (!d || Yt(a, l)?.writable) && (h = o(() => {
          var f = Vt(d ? a[l] : Ce), p = /* @__PURE__ */ fe(f);
          return p;
        }), n.set(l, h)), h !== void 0) {
          var u = E(h);
          return u === Ce ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var h = n.get(l);
          h && (c.value = E(h));
        } else if (c === void 0) {
          var d = n.get(l), u = d?.v;
          if (d !== void 0 && u !== Ce)
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
        if (l === Ot)
          return !0;
        var c = n.get(l), h = c !== void 0 && c.v !== Ce || Reflect.has(a, l);
        if (c !== void 0 || F !== null && (!h || Yt(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = h ? Vt(a[l]) : Ce, f = /* @__PURE__ */ fe(u);
            return f;
          }), n.set(l, c));
          var d = E(c);
          if (d === Ce)
            return !1;
        }
        return h;
      },
      set(a, l, c, h) {
        var d = n.get(l), u = l in a;
        if (s && l === "length")
          for (var f = c; f < /** @type {Source<number>} */
          d.v; f += 1) {
            var p = n.get(f + "");
            p !== void 0 ? B(p, Ce) : f in a && (p = o(() => /* @__PURE__ */ fe(Ce)), n.set(f + "", p));
          }
        if (d === void 0)
          (!u || Yt(a, l)?.writable) && (d = o(() => /* @__PURE__ */ fe(void 0)), B(d, Vt(c)), n.set(l, d));
        else {
          u = d.v !== Ce;
          var g = o(() => Vt(c));
          B(d, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, l);
        if (b?.set && b.set.call(h, c), !u) {
          if (s && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= T.v && B(T, C + 1);
          }
          pi(i);
        }
        return !0;
      },
      ownKeys(a) {
        E(i);
        var l = Reflect.ownKeys(a).filter((d) => {
          var u = n.get(d);
          return u === void 0 || u.v !== Ce;
        });
        for (var [c, h] of n)
          h.v !== Ce && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        kp();
      }
    }
  );
}
function ic(t) {
  try {
    if (t !== null && typeof t == "object" && Ot in t)
      return t[Ot];
  } catch {
  }
  return t;
}
function Vp(t, e) {
  return Object.is(ic(t), ic(e));
}
var rc, Ku, Yu, Qu;
function sa() {
  if (rc === void 0) {
    rc = window, Ku = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Yu = Yt(e, "firstChild").get, Qu = Yt(e, "nextSibling").get, ec(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ec(n) && (n.__t = void 0);
  }
}
function ft(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ft(t) {
  return Yu.call(t);
}
// @__NO_SIDE_EFFECTS__
function jt(t) {
  return Qu.call(t);
}
function m(t, e) {
  if (!M)
    return /* @__PURE__ */ Ft(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ft(q)
  );
  if (n === null)
    n = q.appendChild(ft());
  else if (e && n.nodeType !== qa) {
    var s = ft();
    return n?.before(s), Se(s), s;
  }
  return Se(n), n;
}
function ye(t, e = !1) {
  if (!M) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ft(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ jt(n) : n;
  }
  if (e && q?.nodeType !== qa) {
    var s = ft();
    return q?.before(s), Se(s), s;
  }
  return q;
}
function y(t, e = 1, n = !1) {
  let s = M ? q : t;
  for (var i; e--; )
    i = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ jt(s);
  if (!M)
    return s;
  if (n && s?.nodeType !== qa) {
    var r = ft();
    return s === null ? i?.after(r) : s.before(r), Se(r), r;
  }
  return Se(s), /** @type {TemplateNode} */
  s;
}
function Ju(t) {
  t.textContent = "";
}
function Xu() {
  return !1;
}
function qp(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, On(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let oc = !1;
function Zu() {
  oc || (oc = !0, document.addEventListener(
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
function ro(t) {
  var e = V, n = F;
  Ve(null), pt(null);
  try {
    return t();
  } finally {
    Ve(e), pt(n);
  }
}
function Gp(t, e, n, s = n) {
  t.addEventListener(e, () => ro(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), s(!0);
  } : t.__on_r = () => s(!0), Zu();
}
function eh(t) {
  F === null && V === null && Ep(), V !== null && (V.f & dt) !== 0 && F === null && wp(), rs && bp();
}
function Kp(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function At(t, e, n, s = !0) {
  var i = F;
  i !== null && (i.f & et) !== 0 && (t |= et);
  var r = {
    ctx: ue,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ge,
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
      Ci(r), r.f |= Ha;
    } catch (l) {
      throw ve(r), l;
    }
  else e !== null && Qn(r);
  if (s) {
    var o = r;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & is) === 0 && (o = o.first, (t & rn) !== 0 && (t & Kn) !== 0 && o !== null && (o.f |= Kn)), o !== null && (o.parent = i, i !== null && Kp(o, i), V !== null && (V.f & Oe) !== 0 && (t & Nn) === 0)) {
      var a = (
        /** @type {Derived} */
        V
      );
      (a.effects ??= []).push(o);
    }
  }
  return r;
}
function Yp() {
  return V !== null && !wt;
}
function Wi(t) {
  const e = At(to, null, !1);
  return xe(e, Pe), e.teardown = t, e;
}
function ia(t) {
  eh();
  var e = (
    /** @type {Effect} */
    F.f
  ), n = !V && (e & on) !== 0 && (e & Ha) === 0;
  if (n) {
    var s = (
      /** @type {ComponentContext} */
      ue
    );
    (s.e ??= []).push(t);
  } else
    return th(t);
}
function th(t) {
  return At(za | xu, t, !1);
}
function Qp(t) {
  return eh(), At(to | xu, t, !0);
}
function Jp(t) {
  It.ensure();
  const e = At(Nn | is, t, !0);
  return () => {
    ve(e);
  };
}
function Xp(t) {
  It.ensure();
  const e = At(Nn | is, t, !0);
  return (n = {}) => new Promise((s) => {
    n.outro ? bs(e, () => {
      ve(e), s(void 0);
    }) : (ve(e), s(void 0));
  });
}
function oo(t) {
  return At(za, t, !1);
}
function Zp(t) {
  return At(Ba | is, t, !0);
}
function ao(t, e = 0) {
  return At(to | e, t, !0);
}
function ie(t, e = [], n = [], s = []) {
  Hu(s, e, n, (i) => {
    At(to, () => t(...i.map(E)), !0);
  });
}
function Hs(t, e = 0) {
  var n = At(rn | e, t, !0);
  return n;
}
function Be(t, e = !0) {
  return At(on | is, t, !0, e);
}
function nh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = rs, s = V;
    lc(!0), Ve(null);
    try {
      e.call(null);
    } finally {
      lc(n), Ve(s);
    }
  }
}
function sh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ro(() => {
      i.abort(gs);
    });
    var s = n.next;
    (n.f & Nn) !== 0 ? n.parent = null : ve(n, e), n = s;
  }
}
function e_(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & on) === 0 && ve(e), e = n;
  }
}
function ve(t, e = !0) {
  var n = !1;
  (e || (t.f & mp) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (t_(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), sh(t, e && !n), kr(t, 0), xe(t, Qt);
  var s = t.transitions;
  if (s !== null)
    for (const r of s)
      r.stop();
  nh(t);
  var i = t.parent;
  i !== null && i.first !== null && ih(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function t_(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(t)
    );
    t.remove(), t = n;
  }
}
function ih(t) {
  var e = t.parent, n = t.prev, s = t.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = n));
}
function bs(t, e, n = !0) {
  var s = [];
  Qa(t, s, !0), rh(s, () => {
    n && ve(t), e && e();
  });
}
function rh(t, e) {
  var n = t.length;
  if (n > 0) {
    var s = () => --n || e();
    for (var i of t)
      i.out(s);
  } else
    e();
}
function Qa(t, e, n) {
  if ((t.f & et) === 0) {
    if (t.f ^= et, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var s = t.first; s !== null; ) {
      var i = s.next, r = (s.f & Kn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & on) !== 0 && (t.f & rn) !== 0;
      Qa(s, e, r ? n : !1), s = i;
    }
  }
}
function Ja(t) {
  oh(t, !0);
}
function oh(t, e) {
  if ((t.f & et) !== 0) {
    t.f ^= et, (t.f & Pe) === 0 && (xe(t, Ge), Qn(t));
    for (var n = t.first; n !== null; ) {
      var s = n.next, i = (n.f & Kn) !== 0 || (n.f & on) !== 0;
      oh(n, i ? e : !1), n = s;
    }
    if (t.transitions !== null)
      for (const r of t.transitions)
        (r.is_global || e) && r.in();
  }
}
function ah(t, e) {
  for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
    var i = n === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    );
    e.append(n), n = i;
  }
}
let ws = !1;
function ac(t) {
  ws = t;
}
let rs = !1;
function lc(t) {
  rs = t;
}
let V = null, wt = !1;
function Ve(t) {
  V = t;
}
let F = null;
function pt(t) {
  F = t;
}
let Jt = null;
function lh(t) {
  V !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let $e = null, Je = 0, lt = null;
function n_(t) {
  lt = t;
}
let ch = 1, Ii = 0, qn = Ii;
function cc(t) {
  qn = t;
}
let gn = !1;
function uh() {
  return ++ch;
}
function zi(t) {
  var e = t.f;
  if ((e & Ge) !== 0)
    return !0;
  if ((e & an) !== 0) {
    var n = t.deps, s = (e & dt) !== 0;
    if (e & Oe && (t.f &= ~Cr), n !== null) {
      var i, r, o = (e & Ir) !== 0, a = s && F !== null && !gn, l = n.length;
      if ((o || a) && (F === null || (F.f & Qt) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), h = c.parent;
        for (i = 0; i < l; i++)
          r = n[i], (o || !r?.reactions?.includes(c)) && (r.reactions ??= []).push(c);
        o && (c.f ^= Ir), a && h !== null && (h.f & dt) === 0 && (c.f ^= dt);
      }
      for (i = 0; i < l; i++)
        if (r = n[i], zi(
          /** @type {Derived} */
          r
        ) && Vu(
          /** @type {Derived} */
          r
        ), r.wv > t.wv)
          return !0;
    }
    (!s || F !== null && !gn) && xe(t, Pe);
  }
  return !1;
}
function hh(t, e, n = !0) {
  var s = t.reactions;
  if (s !== null && !Jt?.includes(t))
    for (var i = 0; i < s.length; i++) {
      var r = s[i];
      (r.f & Oe) !== 0 ? hh(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (n ? xe(r, Ge) : (r.f & Pe) !== 0 && xe(r, an), Qn(
        /** @type {Effect} */
        r
      ));
    }
}
function dh(t) {
  var e = $e, n = Je, s = lt, i = V, r = gn, o = Jt, a = ue, l = wt, c = qn, h = t.f;
  $e = /** @type {null | Value[]} */
  null, Je = 0, lt = null, gn = (h & dt) !== 0 && (wt || !ws || V === null), V = (h & (on | Nn)) === 0 ? t : null, Jt = null, Ns(t.ctx), wt = !1, qn = ++Ii, t.ac !== null && (ro(() => {
    t.ac.abort(gs);
  }), t.ac = null);
  try {
    t.f |= Zo;
    var d = (
      /** @type {Function} */
      t.fn
    ), u = d(), f = t.deps;
    if ($e !== null) {
      var p;
      if (kr(t, Je), f !== null && Je > 0)
        for (f.length = Je + $e.length, p = 0; p < $e.length; p++)
          f[Je + p] = $e[p];
      else
        t.deps = f = $e;
      if (!gn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & Oe) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = Je; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && Je < f.length && (kr(t, Je), f.length = Je);
    if (Ui() && lt !== null && !wt && f !== null && (t.f & (Oe | an | Ge)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      lt.length; p++)
        hh(
          lt[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ii++, lt !== null && (s === null ? s = lt : s.push(.../** @type {Source[]} */
    lt))), (t.f & Vn) !== 0 && (t.f ^= Vn), u;
  } catch (g) {
    return Uu(g);
  } finally {
    t.f ^= Zo, $e = e, Je = n, lt = s, V = i, gn = r, Jt = o, Ns(a), wt = l, qn = c;
  }
}
function s_(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var s = hp.call(n, t);
    if (s !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[s] = n[i], n.pop());
    }
  }
  n === null && (e.f & Oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($e === null || !$e.includes(e)) && (xe(e, an), (e.f & (dt | Ir)) === 0 && (e.f ^= Ir), Bu(
    /** @type {Derived} **/
    e
  ), kr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function kr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var s = e; s < n.length; s++)
      s_(t, n[s]);
}
function Ci(t) {
  var e = t.f;
  if ((e & Qt) === 0) {
    xe(t, Pe);
    var n = F, s = ws;
    F = t, ws = !0;
    try {
      (e & rn) !== 0 ? e_(t) : sh(t), nh(t);
      var i = dh(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ch;
      var r;
      Ru && Op && (t.f & Ge) !== 0 && t.deps;
    } finally {
      ws = s, F = n;
    }
  }
}
async function i_() {
  await Promise.resolve(), Xe();
}
function E(t) {
  var e = t.f, n = (e & Oe) !== 0;
  if (V !== null && !wt) {
    var s = F !== null && (F.f & Qt) !== 0;
    if (!s && !Jt?.includes(t)) {
      var i = V.deps;
      if ((V.f & Zo) !== 0)
        t.rv < Ii && (t.rv = Ii, $e === null && i !== null && i[Je] === t ? Je++ : $e === null ? $e = [t] : (!gn || !$e.includes(t)) && $e.push(t));
      else {
        (V.deps ??= []).push(t);
        var r = t.reactions;
        r === null ? t.reactions = [V] : r.includes(V) || r.push(V);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), a = o.parent;
    a !== null && (a.f & dt) === 0 && (o.f ^= dt);
  }
  if (rs) {
    if (bn.has(t))
      return bn.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & Pe) === 0 && o.reactions !== null || fh(o)) && (l = Ka(o)), bn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, bt?.has(o))
      return bt.get(o);
    zi(o) && Vu(o);
  }
  if (bt?.has(t))
    return bt.get(t);
  if ((t.f & Vn) !== 0)
    throw t.v;
  return t.v;
}
function fh(t) {
  if (t.v === Ce) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (bn.has(e) || (e.f & Oe) !== 0 && fh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ut(t) {
  var e = wt;
  try {
    return wt = !0, t();
  } finally {
    wt = e;
  }
}
const r_ = -7169;
function xe(t, e) {
  t.f = t.f & r_ | e;
}
function ms(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Ot in t)
      ra(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Ot in n && ra(n);
      }
  }
}
function ra(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let s in t)
      try {
        ra(t[s], e);
      } catch {
      }
    const n = Wa(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const s = Nu(n);
      for (let i in s) {
        const r = s[i].get;
        if (r)
          try {
            r.call(t);
          } catch {
          }
      }
    }
  }
}
const ph = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set();
function _h(t, e, n, s = {}) {
  function i(r) {
    if (s.capture || li.call(e, r), !r.cancelBubble)
      return ro(() => n?.call(this, r));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? On(() => {
    e.addEventListener(t, i, s);
  }) : e.addEventListener(t, i, s), i;
}
function o_(t, e, n, s, i) {
  var r = { capture: s, passive: i }, o = _h(t, e, n, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Wi(() => {
    e.removeEventListener(t, o, r);
  });
}
function Hi(t) {
  for (var e = 0; e < t.length; e++)
    ph.add(t[e]);
  for (var n of oa)
    n(t);
}
let uc = null;
function li(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, i = t.composedPath?.() || [], r = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  uc = t;
  var o = 0, a = uc === t && t.__root;
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
  if (r = /** @type {Element} */
  i[o] || t.target, r !== e) {
    Ei(t, "currentTarget", {
      configurable: !0,
      get() {
        return r || n;
      }
    });
    var h = V, d = F;
    Ve(null), pt(null);
    try {
      for (var u, f = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var g = r["__" + s];
          g != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === r) && g.call(r, t);
        } catch (b) {
          u ? f.push(b) : u = b;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        r = p;
      }
      if (u) {
        for (let b of f)
          queueMicrotask(() => {
            throw b;
          });
        throw u;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Ve(h), pt(d);
    }
  }
}
function mh(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Xt(t, e) {
  var n = (
    /** @type {Effect} */
    F
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Y(t, e) {
  var n = (e & op) !== 0, s = (e & ap) !== 0, i, r = !t.startsWith("<!>");
  return () => {
    if (M)
      return Xt(q, null), q;
    i === void 0 && (i = mh(r ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ft(i)));
    var o = (
      /** @type {TemplateNode} */
      s || Ku ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ft(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Xt(a, l);
    } else
      Xt(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function a_(t, e, n = "svg") {
  var s = !t.startsWith("<!>"), i = `<${n}>${s ? t : "<!>" + t}</${n}>`, r;
  return () => {
    if (M)
      return Xt(q, null), q;
    if (!r) {
      var o = (
        /** @type {DocumentFragment} */
        mh(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ Ft(o)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Ft(a);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return Xt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function l_(t, e) {
  return /* @__PURE__ */ a_(t, e, "svg");
}
function De() {
  if (M)
    return Xt(q, null), q;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ft();
  return t.append(e, n), Xt(e, n), t;
}
function x(t, e) {
  if (M) {
    F.nodes_end = q, Yn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function c_(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const u_ = [
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
function h_(t) {
  return u_.includes(t);
}
const d_ = {
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
function f_(t) {
  return t = t.toLowerCase(), d_[t] ?? t;
}
const p_ = ["touchstart", "touchmove"];
function __(t) {
  return p_.includes(t);
}
const m_ = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function g_(t) {
  return m_.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function R(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function gh(t, e) {
  return vh(t, e);
}
function v_(t, e) {
  sa(), e.intro = e.intro ?? !1;
  const n = e.target, s = M, i = q;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ft(n)
    ); r && (r.nodeType !== Ws || /** @type {Comment} */
    r.data !== Au); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ jt(r);
    if (!r)
      throw Rs;
    Ze(!0), Se(
      /** @type {Comment} */
      r
    );
    const o = vh(t, { ...e, anchor: r });
    return Ze(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Rs && console.warn("Failed to hydrate: ", o), e.recover === !1 && Cp(), sa(), Ju(n), Ze(!1), gh(t, e);
  } finally {
    Ze(s), Se(i);
  }
}
const fs = /* @__PURE__ */ new Map();
function vh(t, { target: e, anchor: n, props: s = {}, events: i, context: r, intro: o = !0 }) {
  sa();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var u = 0; u < d.length; u++) {
      var f = d[u];
      if (!a.has(f)) {
        a.add(f);
        var p = __(f);
        e.addEventListener(f, li, { passive: p });
        var g = fs.get(f);
        g === void 0 ? (document.addEventListener(f, li, { passive: p }), fs.set(f, 1)) : fs.set(f, g + 1);
      }
    }
  };
  l(ja(ph)), oa.add(l);
  var c = void 0, h = Xp(() => {
    var d = n ?? e.appendChild(ft());
    return Up(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (u) => {
        if (r) {
          Pn({});
          var f = (
            /** @type {ComponentContext} */
            ue
          );
          f.c = r;
        }
        if (i && (s.$$events = i), M && Xt(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, s) || {}, M && (F.nodes_end = q, q === null || q.nodeType !== Ws || /** @type {Comment} */
        q.data !== Fa))
          throw so(), Rs;
        r && xn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, li);
        var f = (
          /** @type {number} */
          fs.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, li), fs.delete(u)) : fs.set(u, f);
      }
      oa.delete(l), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return aa.set(c, h), c;
}
let aa = /* @__PURE__ */ new WeakMap();
function y_(t, e) {
  const n = aa.get(t);
  return n ? (aa.delete(t), n(e)) : Promise.resolve();
}
class yh {
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
  #s = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#s = n;
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
      ), s = this.#e.get(n);
      if (s)
        Ja(s);
      else {
        var i = this.#n.get(n);
        i && (this.#e.set(n, i.effect), this.#n.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), s = i.effect);
      }
      for (const [r, o] of this.#t) {
        if (this.#t.delete(r), r === e)
          break;
        const a = this.#n.get(o);
        a && (ve(a.effect), this.#n.delete(o));
      }
      for (const [r, o] of this.#e) {
        if (r === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(r)) {
            var c = document.createDocumentFragment();
            ah(o, c), c.append(ft()), this.#n.set(r, { effect: o, fragment: c });
          } else
            ve(o);
          this.#e.delete(r);
        };
        this.#s || !s ? bs(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const n = Array.from(this.#t.values());
    for (const [s, i] of this.#n)
      n.includes(s) || (ve(i.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var s = (
      /** @type {Batch} */
      te
    ), i = Xu();
    if (n && !this.#e.has(e) && !this.#n.has(e))
      if (i) {
        var r = document.createDocumentFragment(), o = ft();
        r.append(o), this.#n.set(e, {
          effect: Be(() => n(o)),
          fragment: r
        });
      } else
        this.#e.set(
          e,
          Be(() => n(this.anchor))
        );
    if (this.#t.set(s, e), i) {
      for (const [a, l] of this.#e)
        a === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(this.#l), s.ondiscard(this.#o);
    } else
      M && (this.anchor = q), this.#l();
  }
}
function Xa(t) {
  ue === null && Ou(), zs && ue.l !== null ? w_(ue).m.push(t) : ia(() => {
    const e = Ut(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function b_(t) {
  ue === null && Ou(), Xa(() => () => Ut(t));
}
function w_(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function Ne(t, e, n = !1) {
  M && Yn();
  var s = new yh(t), i = n ? Kn : 0;
  function r(o, a) {
    if (M) {
      const c = Du(t) === eo;
      if (o === c) {
        var l = Tr();
        Se(l), s.anchor = l, Ze(!1), s.ensure(o, a), Ze(!0);
        return;
      }
    }
    s.ensure(o, a);
  }
  Hs(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, r(l, a);
    }), o || r(!1, null);
  }, i);
}
function Za(t, e) {
  return e;
}
function E_(t, e, n) {
  for (var s = t.items, i = [], r = e.length, o = 0; o < r; o++)
    Qa(e[o].e, i, !0);
  var a = r > 0 && i.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ju(l), l.append(
      /** @type {Element} */
      n
    ), s.clear(), Pt(t, e[0].prev, e[r - 1].next);
  }
  rh(i, () => {
    for (var c = 0; c < r; c++) {
      var h = e[c];
      a || (s.delete(h.k), Pt(t, h.prev, h.next)), ve(h.e, !a);
    }
  });
}
function lo(t, e, n, s, i, r = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & Su) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = M ? Se(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ft(c)
    ) : c.appendChild(ft());
  }
  M && Yn();
  var h = null, d = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ Ga(() => {
    var T = n();
    return Ua(T) ? T : T == null ? [] : ja(T);
  }), p, g;
  function b() {
    I_(
      g,
      p,
      a,
      u,
      o,
      i,
      e,
      s,
      n
    ), r !== null && (p.length === 0 ? h ? Ja(h) : h = Be(() => r(o)) : h !== null && bs(h, () => {
      h = null;
    }));
  }
  Hs(() => {
    g ??= /** @type {Effect} */
    F, p = /** @type {V[]} */
    E(f);
    var T = p.length;
    if (d && T === 0)
      return;
    d = T === 0;
    let C = !1;
    if (M) {
      var S = Du(o) === eo;
      S !== (T === 0) && (o = Tr(), Se(o), Ze(!1), C = !0);
    }
    if (M) {
      for (var k = null, N, v = 0; v < T; v++) {
        if (q.nodeType === Ws && /** @type {Comment} */
        q.data === Fa) {
          o = /** @type {Comment} */
          q, C = !0, Ze(!1);
          break;
        }
        var w = p[v], A = s(w, v);
        N = la(
          q,
          a,
          k,
          null,
          w,
          A,
          v,
          i,
          e,
          n
        ), a.items.set(A, N), k = N;
      }
      T > 0 && Se(Tr());
    }
    if (M)
      T === 0 && r && (h = Be(() => r(o)));
    else if (Xu()) {
      var $ = /* @__PURE__ */ new Set(), U = (
        /** @type {Batch} */
        te
      );
      for (v = 0; v < T; v += 1) {
        w = p[v], A = s(w, v);
        var L = a.items.get(A) ?? u.get(A);
        L ? (e & (Xr | Zr)) !== 0 && bh(L, w, v, e) : (N = la(
          null,
          a,
          null,
          null,
          w,
          A,
          v,
          i,
          e,
          n,
          !0
        ), u.set(A, N)), $.add(A);
      }
      for (const [P, H] of a.items)
        $.has(P) || U.skipped_effects.add(H.e);
      U.oncommit(b);
    } else
      b();
    C && Ze(!0), E(f);
  }), M && (o = q);
}
function I_(t, e, n, s, i, r, o, a, l) {
  var c = (o & ep) !== 0, h = (o & (Xr | Zr)) !== 0, d = e.length, u = n.items, f = n.first, p = f, g, b = null, T, C = [], S = [], k, N, v, w;
  if (c)
    for (w = 0; w < d; w += 1)
      k = e[w], N = a(k, w), v = u.get(N), v !== void 0 && (v.a?.measure(), (T ??= /* @__PURE__ */ new Set()).add(v));
  for (w = 0; w < d; w += 1) {
    if (k = e[w], N = a(k, w), v = u.get(N), v === void 0) {
      var A = s.get(N);
      if (A !== void 0) {
        s.delete(N), u.set(N, A);
        var $ = b ? b.next : p;
        Pt(n, b, A), Pt(n, A, $), xo(A, $, i), b = A;
      } else {
        var U = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        b = la(
          U,
          n,
          b,
          b === null ? n.first : b.next,
          k,
          N,
          w,
          r,
          o,
          l
        );
      }
      u.set(N, b), C = [], S = [], p = b.next;
      continue;
    }
    if (h && bh(v, k, w, o), (v.e.f & et) !== 0 && (Ja(v.e), c && (v.a?.unfix(), (T ??= /* @__PURE__ */ new Set()).delete(v))), v !== p) {
      if (g !== void 0 && g.has(v)) {
        if (C.length < S.length) {
          var L = S[0], P;
          b = L.prev;
          var H = C[0], re = C[C.length - 1];
          for (P = 0; P < C.length; P += 1)
            xo(C[P], L, i);
          for (P = 0; P < S.length; P += 1)
            g.delete(S[P]);
          Pt(n, H.prev, re.next), Pt(n, b, H), Pt(n, re, L), p = L, b = re, w -= 1, C = [], S = [];
        } else
          g.delete(v), xo(v, p, i), Pt(n, v.prev, v.next), Pt(n, v, b === null ? n.first : b.next), Pt(n, b, v), b = v;
        continue;
      }
      for (C = [], S = []; p !== null && p.k !== N; )
        (p.e.f & et) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), S.push(p), p = p.next;
      if (p === null)
        continue;
      v = p;
    }
    C.push(v), b = v, p = v.next;
  }
  if (p !== null || g !== void 0) {
    for (var G = g === void 0 ? [] : ja(g); p !== null; )
      (p.e.f & et) === 0 && G.push(p), p = p.next;
    var X = G.length;
    if (X > 0) {
      var be = (o & Su) !== 0 && d === 0 ? i : null;
      if (c) {
        for (w = 0; w < X; w += 1)
          G[w].a?.measure();
        for (w = 0; w < X; w += 1)
          G[w].a?.fix();
      }
      E_(n, G, be);
    }
  }
  c && On(() => {
    if (T !== void 0)
      for (v of T)
        v.a?.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var Ie of s.values())
    ve(Ie.e);
  s.clear();
}
function bh(t, e, n, s) {
  (s & Xr) !== 0 && xs(t.v, e), (s & Zr) !== 0 ? xs(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function la(t, e, n, s, i, r, o, a, l, c, h) {
  var d = (l & Xr) !== 0, u = (l & tp) === 0, f = d ? u ? /* @__PURE__ */ Ya(i, !1, !1) : Sn(i) : i, p = (l & Zr) === 0 ? o : Sn(o), g = {
    i: p,
    v: f,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: s
  };
  try {
    if (t === null) {
      var b = document.createDocumentFragment();
      b.append(t = ft());
    }
    return g.e = Be(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), M), g.e.prev = n && n.e, g.e.next = s && s.e, n === null ? h || (e.first = g) : (n.next = g, n.e.next = g.e), s !== null && (s.prev = g, s.e.prev = g.e), g;
  } finally {
  }
}
function xo(t, e, n) {
  for (var s = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, r = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); r !== null && r !== s; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(r)
    );
    i.before(r), r = o;
  }
}
function Pt(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ze(t, e, n, s, i) {
  M && Yn();
  var r = e.$$slots?.[n], o = !1;
  r === !0 && (r = e.children, o = !0), r === void 0 || r(t, o ? () => s : s);
}
function C_(t, e, n, s, i, r) {
  let o = M;
  M && Yn();
  var a = null;
  M && q.nodeType === vp && (a = /** @type {Element} */
  q, Yn());
  var l = (
    /** @type {TemplateNode} */
    M ? q : t
  ), c = new yh(l, !1);
  Hs(() => {
    const h = e() || null;
    var d = cp;
    if (h === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(h, (u) => {
      if (h) {
        if (a = M ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(d, h), Xt(a, a), s) {
          M && g_(h) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            M ? /* @__PURE__ */ Ft(a) : a.appendChild(ft())
          );
          M && (f === null ? Ze(!1) : Se(f)), s(a, f);
        }
        F.nodes_end = a, u.before(a);
      }
      M && Se(u);
    }), () => {
    };
  }, Kn), Wi(() => {
  }), o && (Ze(!0), Se(l));
}
function os(t, e) {
  oo(() => {
    var n = t.getRootNode(), s = (
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
    if (!s.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, s.appendChild(i);
    }
  });
}
function T_(t, e) {
  var n = void 0, s;
  Hs(() => {
    n !== (n = e()) && (s && (ve(s), s = null), n && (s = Be(() => {
      oo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function wh(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = wh(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function S_() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = wh(t)) && (s && (s += " "), s += e);
  return s;
}
function k_(t) {
  return typeof t == "object" ? S_(t) : t ?? "";
}
const hc = [...` 	
\r\f \v\uFEFF`];
function A_(t, e, n) {
  var s = t == null ? "" : "" + t;
  if (e && (s = s ? s + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        s = s ? s + " " + i : i;
      else if (s.length)
        for (var r = i.length, o = 0; (o = s.indexOf(i, o)) >= 0; ) {
          var a = o + r;
          (o === 0 || hc.includes(s[o - 1])) && (a === s.length || hc.includes(s[a])) ? s = (o === 0 ? "" : s.substring(0, o)) + s.substring(a + 1) : o = a;
        }
  }
  return s === "" ? null : s;
}
function dc(t, e = !1) {
  var n = e ? " !important;" : ";", s = "";
  for (var i in t) {
    var r = t[i];
    r != null && r !== "" && (s += " " + i + ": " + r + n);
  }
  return s;
}
function Oo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function R_(t, e) {
  if (e) {
    var n = "", s, i;
    if (Array.isArray(e) ? (s = e[0], i = e[1]) : s = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var r = !1, o = 0, a = !1, l = [];
      s && l.push(...Object.keys(s).map(Oo)), i && l.push(...Object.keys(i).map(Oo));
      var c = 0, h = -1;
      const g = t.length;
      for (var d = 0; d < g; d++) {
        var u = t[d];
        if (a ? u === "/" && t[d - 1] === "*" && (a = !1) : r ? r === u && (r = !1) : u === "/" && t[d + 1] === "*" ? a = !0 : u === '"' || u === "'" ? r = u : u === "(" ? o++ : u === ")" && o--, !a && r === !1 && o === 0) {
          if (u === ":" && h === -1)
            h = d;
          else if (u === ";" || d === g - 1) {
            if (h !== -1) {
              var f = Oo(t.substring(c, h).trim());
              if (!l.includes(f)) {
                u !== ";" && d++;
                var p = t.substring(c, d).trim();
                n += " " + p + ";";
              }
            }
            c = d + 1, h = -1;
          }
        }
      }
    }
    return s && (n += dc(s)), i && (n += dc(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Ti(t, e, n, s, i, r) {
  var o = t.__className;
  if (M || o !== n || o === void 0) {
    var a = A_(n, s, r);
    (!M || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (r && i !== r)
    for (var l in r) {
      var c = !!r[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return r;
}
function Do(t, e = {}, n, s) {
  for (var i in n) {
    var r = n[i];
    e[i] !== r && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, r, s));
  }
}
function N_(t, e, n, s) {
  var i = t.__style;
  if (M || i !== e) {
    var r = R_(e, s);
    (!M || r !== t.getAttribute("style")) && (r == null ? t.removeAttribute("style") : t.style.cssText = r), t.__style = e;
  } else s && (Array.isArray(s) ? (Do(t, n?.[0], s[0]), Do(t, n?.[1], s[1], "important")) : Do(t, n, s));
  return s;
}
function ca(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ua(e))
      return Np();
    for (var s of t.options)
      s.selected = e.includes(fc(s));
    return;
  }
  for (s of t.options) {
    var i = fc(s);
    if (Vp(i, e)) {
      s.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function P_(t) {
  var e = new MutationObserver(() => {
    ca(t, t.__value);
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
  }), Wi(() => {
    e.disconnect();
  });
}
function fc(t) {
  return "__value" in t ? t.__value : t.value;
}
const ni = Symbol("class"), si = Symbol("style"), Eh = Symbol("is custom element"), Ih = Symbol("is html");
function pr(t) {
  if (M) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var s = t.value;
          de(t, "value", null), t.value = s;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          de(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = n, On(n), Zu();
  }
}
function x_(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function de(t, e, n, s) {
  var i = Ch(t);
  M && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "loading" && (t[gp] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Th(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function O_(t, e, n, s, i = !1, r = !1) {
  if (M && i && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || pr(o);
  }
  var l = Ch(t), c = l[Eh], h = !l[Ih];
  let d = M && c;
  d && Ze(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = k_(n.class) : n[ni] && (n.class = null), n[si] && (n.style ??= null);
  var g = Th(t);
  for (const v in n) {
    let w = n[v];
    if (f && v === "value" && w == null) {
      t.value = t.__value = "", u[v] = w;
      continue;
    }
    if (v === "class") {
      var b = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ti(t, b, w, s, e?.[ni], n[ni]), u[v] = w, u[ni] = n[ni];
      continue;
    }
    if (v === "style") {
      N_(t, w, e?.[si], n[si]), u[v] = w, u[si] = n[si];
      continue;
    }
    var T = u[v];
    if (!(w === T && !(w === void 0 && t.hasAttribute(v)))) {
      u[v] = w;
      var C = v[0] + v[1];
      if (C !== "$$")
        if (C === "on") {
          const A = {}, $ = "$$" + v;
          let U = v.slice(2);
          var S = h_(U);
          if (c_(U) && (U = U.slice(0, -7), A.capture = !0), !S && T) {
            if (w != null) continue;
            t.removeEventListener(U, u[$], A), u[$] = null;
          }
          if (w != null)
            if (S)
              t[`__${U}`] = w, Hi([U]);
            else {
              let L = function(P) {
                u[v].call(this, P);
              };
              u[$] = _h(U, t, L, A);
            }
          else S && (t[`__${U}`] = void 0);
        } else if (v === "style")
          de(t, v, w);
        else if (v === "autofocus")
          qp(
            /** @type {HTMLElement} */
            t,
            !!w
          );
        else if (!c && (v === "__value" || v === "value" && w != null))
          t.value = t.__value = w;
        else if (v === "selected" && f)
          x_(
            /** @type {HTMLOptionElement} */
            t,
            w
          );
        else {
          var k = v;
          h || (k = f_(k));
          var N = k === "defaultValue" || k === "defaultChecked";
          if (w == null && !c && !N)
            if (l[v] = null, k === "value" || k === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const $ = e === void 0;
              if (k === "value") {
                let U = A.defaultValue;
                A.removeAttribute(k), A.defaultValue = U, A.value = A.__value = $ ? U : null;
              } else {
                let U = A.defaultChecked;
                A.removeAttribute(k), A.defaultChecked = U, A.checked = $ ? U : !1;
              }
            } else
              t.removeAttribute(v);
          else N || g.includes(k) && (c || typeof w != "string") ? (t[k] = w, k in l && (l[k] = Ce)) : typeof w != "function" && de(t, k, w);
        }
    }
  }
  return d && Ze(!0), u;
}
function pc(t, e, n = [], s = [], i = [], r, o = !1, a = !1) {
  Hu(i, n, s, (l) => {
    var c = void 0, h = {}, d = t.nodeName === "SELECT", u = !1;
    if (Hs(() => {
      var p = e(...l.map(E)), g = O_(
        t,
        c,
        p,
        r,
        o,
        a
      );
      u && d && "value" in p && ca(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let T of Object.getOwnPropertySymbols(h))
        p[T] || ve(h[T]);
      for (let T of Object.getOwnPropertySymbols(p)) {
        var b = p[T];
        T.description === up && (!c || b !== c[T]) && (h[T] && ve(h[T]), h[T] = Be(() => T_(t, () => b))), g[T] = b;
      }
      c = g;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      oo(() => {
        ca(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), P_(f);
      });
    }
    u = !0;
  });
}
function Ch(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Eh]: t.nodeName.includes("-"),
      [Ih]: t.namespaceURI === lp
    }
  );
}
var _c = /* @__PURE__ */ new Map();
function Th(t) {
  var e = t.getAttribute("is") || t.nodeName, n = _c.get(e);
  if (n) return n;
  _c.set(e, n = []);
  for (var s, i = t, r = Element.prototype; r !== i; ) {
    s = Nu(i);
    for (var o in s)
      s[o].set && n.push(o);
    i = Wa(i);
  }
  return n;
}
function Mo(t, e, n = e) {
  var s = /* @__PURE__ */ new WeakSet();
  Gp(t, "input", async (i) => {
    var r = i ? t.defaultValue : t.value;
    if (r = Lo(t) ? $o(r) : r, n(r), te !== null && s.add(te), await i_(), r !== (r = e())) {
      var o = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = r ?? "", a !== null) {
        var c = t.value.length;
        o === a && a === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (M && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ut(e) == null && t.value) && (n(Lo(t) ? $o(t.value) : t.value), te !== null && s.add(te)), ao(() => {
    var i = e();
    if (t === document.activeElement) {
      var r = (
        /** @type {Batch} */
        fr ?? te
      );
      if (s.has(r))
        return;
    }
    Lo(t) && i === $o(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Lo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function $o(t) {
  return t === "" ? null : +t;
}
function mc(t, e) {
  return t === e || t?.[Ot] === e;
}
function D_(t = {}, e, n, s) {
  return oo(() => {
    var i, r;
    return ao(() => {
      i = r, r = [], Ut(() => {
        t !== n(...r) && (e(t, ...r), i && mc(n(...i), t) && e(null, ...i));
      });
    }), () => {
      On(() => {
        r && mc(n(...r), t) && e(null, ...r);
      });
    };
  }), t;
}
function Sh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ue
  ), n = e.l.u;
  if (!n) return;
  let s = () => ms(e.s);
  if (t) {
    let i = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ ji(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], a = !0);
      return a && i++, i;
    });
    s = () => E(o);
  }
  n.b.length && Qp(() => {
    gc(e, s), Er(n.b);
  }), ia(() => {
    const i = Ut(() => n.m.map(pp));
    return () => {
      for (const r of i)
        typeof r == "function" && r();
    };
  }), n.a.length && ia(() => {
    gc(e, s), Er(n.a);
  });
}
function gc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) E(n);
  e();
}
function el(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), yn;
  const s = Ut(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
const ps = [];
function M_(t, e) {
  return {
    subscribe: Bi(t, e).subscribe
  };
}
function Bi(t, e = yn) {
  let n = null;
  const s = /* @__PURE__ */ new Set();
  function i(a) {
    if (Lu(t, a) && (t = a, n)) {
      const l = !ps.length;
      for (const c of s)
        c[1](), ps.push(c, t);
      if (l) {
        for (let c = 0; c < ps.length; c += 2)
          ps[c][0](ps[c + 1]);
        ps.length = 0;
      }
    }
  }
  function r(a) {
    i(a(
      /** @type {T} */
      t
    ));
  }
  function o(a, l = yn) {
    const c = [a, l];
    return s.add(c), s.size === 1 && (n = e(i, r) || yn), a(
      /** @type {T} */
      t
    ), () => {
      s.delete(c), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
function L_(t, e, n) {
  const s = !Array.isArray(t), i = s ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const r = e.length < 2;
  return M_(n, (o, a) => {
    let l = !1;
    const c = [];
    let h = 0, d = yn;
    const u = () => {
      if (h)
        return;
      d();
      const p = e(s ? c[0] : c, o, a);
      r ? o(p) : d = typeof p == "function" ? p : yn;
    }, f = i.map(
      (p, g) => el(
        p,
        (b) => {
          c[g] = b, h &= ~(1 << g), l && u();
        },
        () => {
          h |= 1 << g;
        }
      )
    );
    return l = !0, u(), function() {
      Er(f), d(), l = !1;
    };
  });
}
function $_(t) {
  let e;
  return el(t, (n) => e = n)(), e;
}
let cr = !1, ua = Symbol();
function Si(t, e, n) {
  const s = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ Ya(void 0),
    unsubscribe: yn
  };
  if (s.store !== t && !(ua in n))
    if (s.unsubscribe(), s.store = t ?? null, t == null)
      s.source.v = void 0, s.unsubscribe = yn;
    else {
      var i = !0;
      s.unsubscribe = el(t, (r) => {
        i ? s.source.v = r : B(s.source, r);
      }), i = !1;
    }
  return t && ua in n ? $_(t) : E(s.source);
}
function tl() {
  const t = {};
  function e() {
    Wi(() => {
      for (var n in t)
        t[n].unsubscribe();
      Ei(t, ua, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function F_(t) {
  var e = cr;
  try {
    return cr = !1, [t(), cr];
  } finally {
    cr = e;
  }
}
const U_ = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return E(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var s = F;
      try {
        pt(t.parent_effect), t.special[e] = ct(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          ku
        );
      } finally {
        pt(s);
      }
    }
    return t.special[e](n), sc(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), sc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function je(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Sn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        F
      )
    },
    U_
  );
}
const j_ = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let s = t.props[n];
      if (ti(s) && (s = s()), typeof s == "object" && s !== null && e in s) return s[e];
    }
  },
  set(t, e, n) {
    let s = t.props.length;
    for (; s--; ) {
      let i = t.props[s];
      ti(i) && (i = i());
      const r = Yt(i, e);
      if (r && r.set)
        return r.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let s = t.props[n];
      if (ti(s) && (s = s()), typeof s == "object" && s !== null && e in s) {
        const i = Yt(s, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Ot || e === Va) return !1;
    for (let n of t.props)
      if (ti(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ti(n) && (n = n()), !!n) {
        for (const s in n)
          e.includes(s) || e.push(s);
        for (const s of Object.getOwnPropertySymbols(n))
          e.includes(s) || e.push(s);
      }
    return e;
  }
};
function tt(...t) {
  return new Proxy({ props: t }, j_);
}
function ct(t, e, n, s) {
  var i = !zs || (n & sp) !== 0, r = (n & ip) !== 0, o = (n & rp) !== 0, a = (
    /** @type {V} */
    s
  ), l = !0, c = () => (l && (l = !1, a = o ? Ut(
    /** @type {() => V} */
    s
  ) : (
    /** @type {V} */
    s
  )), a), h;
  if (r) {
    var d = Ot in t || Va in t;
    h = Yt(t, e)?.set ?? (d && e in t ? (S) => t[e] = S : void 0);
  }
  var u, f = !1;
  r ? [u, f] = F_(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && s !== void 0 && (u = c(), h && (i && Tp(), h(u)));
  var p;
  if (i ? p = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S === void 0 ? c() : (l = !0, S);
  } : p = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S !== void 0 && (a = /** @type {V} */
    void 0), S === void 0 ? a : S;
  }, i && (n & ku) === 0)
    return p;
  if (h) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, k) {
        return arguments.length > 0 ? ((!i || !k || g || f) && h(k ? p() : S), S) : p();
      })
    );
  }
  var b = !1, T = ((n & np) !== 0 ? ji : Ga)(() => (b = !1, p()));
  r && E(T);
  var C = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(S, k) {
      if (arguments.length > 0) {
        const N = k ? E(T) : i && r ? Vt(S) : S;
        return B(T, N), b = !0, a !== void 0 && (a = N), S;
      }
      return rs && b || (C.f & Qt) !== 0 ? T.v : E(T);
    })
  );
}
function W_(t) {
  return new z_(t);
}
class z_ {
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
    var n = /* @__PURE__ */ new Map(), s = (r, o) => {
      var a = /* @__PURE__ */ Ya(o, !1, !1);
      return n.set(r, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(r, o) {
          return E(n.get(o) ?? s(o, Reflect.get(r, o)));
        },
        has(r, o) {
          return o === Va ? !0 : (E(n.get(o) ?? s(o, Reflect.get(r, o))), Reflect.has(r, o));
        },
        set(r, o, a) {
          return B(n.get(o) ?? s(o, a), a), Reflect.set(r, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? v_ : gh)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && Xe(), this.#t = i.$$events;
    for (const r of Object.keys(this.#e))
      r === "$set" || r === "$destroy" || r === "$on" || Ei(this, r, {
        get() {
          return this.#e[r];
        },
        /** @param {any} value */
        set(o) {
          this.#e[r] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (r) => {
      Object.assign(i, r);
    }, this.#e.$destroy = () => {
      y_(this.#e);
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
    const s = (...i) => n.call(this, ...i);
    return this.#t[e].push(s), () => {
      this.#t[e] = this.#t[e].filter(
        /** @param {any} fn */
        (i) => i !== s
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let kh;
typeof HTMLElement == "function" && (kh = class extends HTMLElement {
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
      const s = this.$$c.$on(t, e);
      this.$$l_u.set(e, s);
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
      const s = this.$$l_u.get(e);
      s && (s(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (i) => {
          const r = document.createElement("slot");
          s !== "default" && (r.name = s), x(i, r);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = H_(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), e.default = !0) : e[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = _r(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = W_({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Jp(() => {
        ao(() => {
          this.$$r = !0;
          for (const s of wr(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = _r(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const r = this.$$c.$on(s, i);
          this.$$l_u.set(i, r);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = _r(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return wr(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function _r(t, e, n, s) {
  const i = n[t]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !n[t])
    return e;
  if (s === "toAttribute")
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
function H_(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function pe(t, e, n, s, i, r) {
  let o = class extends kh {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return wr(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return wr(e).forEach((a) => {
    Ei(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = _r(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var h = Yt(c, a)?.get;
          h ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), s.forEach((a) => {
    Ei(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
const B_ = () => {
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
const Ah = {
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
const I = function(t, e) {
  if (!t)
    throw Bs(e);
}, Bs = function(t) {
  return new Error("Firebase Database (" + Ah.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
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
const Rh = function(t) {
  const e = [];
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    let i = t.charCodeAt(s);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && s + 1 < t.length && (t.charCodeAt(s + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++s) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, V_ = function(t) {
  const e = [];
  let n = 0, s = 0;
  for (; n < t.length; ) {
    const i = t[n++];
    if (i < 128)
      e[s++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const r = t[n++];
      e[s++] = String.fromCharCode((i & 31) << 6 | r & 63);
    } else if (i > 239 && i < 365) {
      const r = t[n++], o = t[n++], a = t[n++], l = ((i & 7) << 18 | (r & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
      e[s++] = String.fromCharCode(55296 + (l >> 10)), e[s++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const r = t[n++], o = t[n++];
      e[s++] = String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, nl = {
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
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, s = [];
    for (let i = 0; i < t.length; i += 3) {
      const r = t[i], o = i + 1 < t.length, a = o ? t[i + 1] : 0, l = i + 2 < t.length, c = l ? t[i + 2] : 0, h = r >> 2, d = (r & 3) << 4 | a >> 4;
      let u = (a & 15) << 2 | c >> 6, f = c & 63;
      l || (f = 64, o || (u = 64)), s.push(n[h], n[d], n[u], n[f]);
    }
    return s.join("");
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Rh(t), e);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : V_(this.decodeStringToByteArray(t, e));
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
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, s = [];
    for (let i = 0; i < t.length; ) {
      const r = n[t.charAt(i++)], a = i < t.length ? n[t.charAt(i)] : 0;
      ++i;
      const c = i < t.length ? n[t.charAt(i)] : 64;
      ++i;
      const d = i < t.length ? n[t.charAt(i)] : 64;
      if (++i, r == null || a == null || c == null || d == null)
        throw new q_();
      const u = r << 2 | a >> 4;
      if (s.push(u), c !== 64) {
        const f = a << 4 & 240 | c >> 2;
        if (s.push(f), d !== 64) {
          const p = c << 6 & 192 | d;
          s.push(p);
        }
      }
    }
    return s;
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
class q_ extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Nh = function(t) {
  const e = Rh(t);
  return nl.encodeByteArray(e, !0);
}, Ar = function(t) {
  return Nh(t).replace(/\./g, "");
}, Rr = function(t) {
  try {
    return nl.decodeString(t, !0);
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
function G_(t) {
  return Ph(void 0, t);
}
function Ph(t, e) {
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
    !e.hasOwnProperty(n) || !K_(n) || (t[n] = Ph(t[n], e[n]));
  return t;
}
function K_(t) {
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
function Y_() {
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
const Q_ = () => Y_().__FIREBASE_DEFAULTS__, J_ = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, X_ = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && Rr(t[1]);
  return e && JSON.parse(e);
}, sl = () => {
  try {
    return B_() || Q_() || J_() || X_();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, xh = (t) => sl()?.emulatorHosts?.[t], Z_ = (t) => {
  const e = xh(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const s = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), s] : [e.substring(0, n), s];
}, Oh = () => sl()?.config, Dh = (t) => sl()?.[`_${t}`];
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
    return (n, s) => {
      n ? this.reject(n) : this.resolve(s), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, s));
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
function Vs(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Mh(t) {
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
function em(t, e) {
  if (t.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
    alg: "none",
    type: "JWT"
  }, s = e || "demo-project", i = t.iat || 0, r = t.sub || t.user_id;
  if (!r)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = {
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${s}`,
    aud: s,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: r,
    user_id: r,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    },
    // Override with user options
    ...t
  };
  return [
    Ar(JSON.stringify(n)),
    Ar(JSON.stringify(o)),
    ""
  ].join(".");
}
const _i = {};
function tm() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(_i))
    _i[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function nm(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let vc = !1;
function Lh(t, e) {
  if (typeof window > "u" || typeof document > "u" || !Vs(window.location.host) || _i[t] === e || _i[t] || // If already set to use emulator, can't go back to prod.
  vc)
    return;
  _i[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const s = "__firebase__banner", r = tm().prod.length > 0;
  function o() {
    const u = document.getElementById(s);
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
      vc = !0, o();
    }, u;
  }
  function h(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function d() {
    const u = nm(s), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), b = document.getElementById(g) || document.createElement("a"), T = n("preprendIcon"), C = document.getElementById(T) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const S = u.element;
      a(S), h(b, g);
      const k = c();
      l(C, T), S.append(C, p, b, k), document.body.appendChild(S);
    }
    r ? (p.innerText = "Preview backend disconnected.", C.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (C.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`, p.innerText = "Preview backend running in this workspace."), p.setAttribute("id", f);
  }
  document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", d) : d();
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
function We() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function il() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We());
}
function sm() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function im() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function $h() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function rm() {
  const t = We();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function om() {
  return Ah.NODE_ADMIN === !0;
}
function am() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function lm() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const s = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(s);
      i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(s), t(!0);
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
const cm = "FirebaseError";
class Dn extends Error {
  constructor(e, n, s) {
    super(n), this.code = e, this.customData = s, this.name = cm, Object.setPrototypeOf(this, Dn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, qi.prototype.create);
  }
}
class qi {
  constructor(e, n, s) {
    this.service = e, this.serviceName = n, this.errors = s;
  }
  create(e, ...n) {
    const s = n[0] || {}, i = `${this.service}/${e}`, r = this.errors[e], o = r ? um(r, s) : "Error", a = `${this.serviceName}: ${o} (${i}).`;
    return new Dn(i, a, s);
  }
}
function um(t, e) {
  return t.replace(hm, (n, s) => {
    const i = e[s];
    return i != null ? String(i) : `<${s}?>`;
  });
}
const hm = /\{\$([^}]+)}/g;
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
function ki(t) {
  return JSON.parse(t);
}
function ge(t) {
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
const Fh = function(t) {
  let e = {}, n = {}, s = {}, i = "";
  try {
    const r = t.split(".");
    e = ki(Rr(r[0]) || ""), n = ki(Rr(r[1]) || ""), i = r[2], s = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: s,
    signature: i
  };
}, dm = function(t) {
  const e = Fh(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, fm = function(t) {
  const e = Fh(t).claims;
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
function Wt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Os(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function ha(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function Nr(t, e, n) {
  const s = {};
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (s[i] = e.call(n, t[i], i, t));
  return s;
}
function Jn(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), s = Object.keys(e);
  for (const i of n) {
    if (!s.includes(i))
      return !1;
    const r = t[i], o = e[i];
    if (yc(r) && yc(o)) {
      if (!Jn(r, o))
        return !1;
    } else if (r !== o)
      return !1;
  }
  for (const i of s)
    if (!n.includes(i))
      return !1;
  return !0;
}
function yc(t) {
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
function qs(t) {
  const e = [];
  for (const [n, s] of Object.entries(t))
    Array.isArray(s) ? s.forEach((i) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(s));
  return e.length ? "&" + e.join("&") : "";
}
function ci(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((s) => {
    if (s) {
      const [i, r] = s.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(r);
    }
  }), e;
}
function ui(t) {
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
class pm {
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
    const s = this.W_;
    if (typeof e == "string")
      for (let d = 0; d < 16; d++)
        s[d] = e.charCodeAt(n) << 24 | e.charCodeAt(n + 1) << 16 | e.charCodeAt(n + 2) << 8 | e.charCodeAt(n + 3), n += 4;
    else
      for (let d = 0; d < 16; d++)
        s[d] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3], n += 4;
    for (let d = 16; d < 80; d++) {
      const u = s[d - 3] ^ s[d - 8] ^ s[d - 14] ^ s[d - 16];
      s[d] = (u << 1 | u >>> 31) & 4294967295;
    }
    let i = this.chain_[0], r = this.chain_[1], o = this.chain_[2], a = this.chain_[3], l = this.chain_[4], c, h;
    for (let d = 0; d < 80; d++) {
      d < 40 ? d < 20 ? (c = a ^ r & (o ^ a), h = 1518500249) : (c = r ^ o ^ a, h = 1859775393) : d < 60 ? (c = r & o | a & (r | o), h = 2400959708) : (c = r ^ o ^ a, h = 3395469782);
      const u = (i << 5 | i >>> 27) + c + l + h + s[d] & 4294967295;
      l = a, a = o, o = (r << 30 | r >>> 2) & 4294967295, r = i, i = u;
    }
    this.chain_[0] = this.chain_[0] + i & 4294967295, this.chain_[1] = this.chain_[1] + r & 4294967295, this.chain_[2] = this.chain_[2] + o & 4294967295, this.chain_[3] = this.chain_[3] + a & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295;
  }
  update(e, n) {
    if (e == null)
      return;
    n === void 0 && (n = e.length);
    const s = n - this.blockSize;
    let i = 0;
    const r = this.buf_;
    let o = this.inbuf_;
    for (; i < n; ) {
      if (o === 0)
        for (; i <= s; )
          this.compress_(e, i), i += this.blockSize;
      if (typeof e == "string") {
        for (; i < n; )
          if (r[o] = e.charCodeAt(i), ++o, ++i, o === this.blockSize) {
            this.compress_(r), o = 0;
            break;
          }
      } else
        for (; i < n; )
          if (r[o] = e[i], ++o, ++i, o === this.blockSize) {
            this.compress_(r), o = 0;
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
    let s = 0;
    for (let i = 0; i < 5; i++)
      for (let r = 24; r >= 0; r -= 8)
        e[s] = this.chain_[i] >> r & 255, ++s;
    return e;
  }
}
function _m(t, e) {
  const n = new mm(t, e);
  return n.subscribe.bind(n);
}
class mm {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, n) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
      e(this);
    }).catch((s) => {
      this.error(s);
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
  subscribe(e, n, s) {
    let i;
    if (e === void 0 && n === void 0 && s === void 0)
      throw new Error("Missing Observer.");
    gm(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: n,
      complete: s
    }, i.next === void 0 && (i.next = Fo), i.error === void 0 && (i.error = Fo), i.complete === void 0 && (i.complete = Fo);
    const r = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), r;
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
        } catch (s) {
          typeof console < "u" && console.error && console.error(s);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function gm(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function Fo() {
}
function co(t, e) {
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
const vm = function(t) {
  const e = [];
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    let i = t.charCodeAt(s);
    if (i >= 55296 && i <= 56319) {
      const r = i - 55296;
      s++, I(s < t.length, "Surrogate pair missing trail surrogate.");
      const o = t.charCodeAt(s) - 56320;
      i = 65536 + (r << 10) + o;
    }
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : i < 65536 ? (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, uo = function(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const s = t.charCodeAt(n);
    s < 128 ? e++ : s < 2048 ? e += 2 : s >= 55296 && s <= 56319 ? (e += 4, n++) : e += 3;
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
function Ae(t) {
  return t && t._delegate ? t._delegate : t;
}
class Xn {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, s) {
    this.name = e, this.instanceFactory = n, this.type = s, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
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
const Wn = "[DEFAULT]";
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
class ym {
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
      const s = new Vi();
      if (this.instancesDeferred.set(n, s), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: n
          });
          i && s.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    const n = this.normalizeInstanceIdentifier(e?.identifier), s = e?.optional ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: n
        });
      } catch (i) {
        if (s)
          return null;
        throw i;
      }
    else {
      if (s)
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
      if (wm(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Wn });
        } catch {
        }
      for (const [n, s] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const r = this.getOrInitializeService({
            instanceIdentifier: i
          });
          s.resolve(r);
        } catch {
        }
      }
    }
  }
  clearInstance(e = Wn) {
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
  isInitialized(e = Wn) {
    return this.instances.has(e);
  }
  getOptions(e = Wn) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(s))
      throw Error(`${this.name}(${s}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: s,
      options: n
    });
    for (const [r, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(r);
      s === a && o.resolve(i);
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
    const s = this.normalizeInstanceIdentifier(n), i = this.onInitCallbacks.get(s) ?? /* @__PURE__ */ new Set();
    i.add(e), this.onInitCallbacks.set(s, i);
    const r = this.instances.get(s);
    return r && e(r, s), () => {
      i.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, n) {
    const s = this.onInitCallbacks.get(n);
    if (s)
      for (const i of s)
        try {
          i(e, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let s = this.instances.get(e);
    if (!s && this.component && (s = this.component.instanceFactory(this.container, {
      instanceIdentifier: bm(e),
      options: n
    }), this.instances.set(e, s), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(s, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, s);
      } catch {
      }
    return s || null;
  }
  normalizeInstanceIdentifier(e = Wn) {
    return this.component ? this.component.multipleInstances ? e : Wn : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function bm(t) {
  return t === Wn ? void 0 : t;
}
function wm(t) {
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
class Em {
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
    const n = new ym(e, this);
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
var Q;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(Q || (Q = {}));
const Im = {
  debug: Q.DEBUG,
  verbose: Q.VERBOSE,
  info: Q.INFO,
  warn: Q.WARN,
  error: Q.ERROR,
  silent: Q.SILENT
}, Cm = Q.INFO, Tm = {
  [Q.DEBUG]: "log",
  [Q.VERBOSE]: "log",
  [Q.INFO]: "info",
  [Q.WARN]: "warn",
  [Q.ERROR]: "error"
}, Sm = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const s = (/* @__PURE__ */ new Date()).toISOString(), i = Tm[e];
  if (i)
    console[i](`[${s}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class rl {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Cm, this._logHandler = Sm, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in Q))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Im[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, Q.DEBUG, ...e), this._logHandler(this, Q.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, Q.VERBOSE, ...e), this._logHandler(this, Q.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, Q.INFO, ...e), this._logHandler(this, Q.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, Q.WARN, ...e), this._logHandler(this, Q.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, Q.ERROR, ...e), this._logHandler(this, Q.ERROR, ...e);
  }
}
const km = (t, e) => e.some((n) => t instanceof n);
let bc, wc;
function Am() {
  return bc || (bc = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Rm() {
  return wc || (wc = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Uh = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), jh = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap();
function Nm(t) {
  const e = new Promise((n, s) => {
    const i = () => {
      t.removeEventListener("success", r), t.removeEventListener("error", o);
    }, r = () => {
      n(wn(t.result)), i();
    }, o = () => {
      s(t.error), i();
    };
    t.addEventListener("success", r), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && Uh.set(n, t);
  }).catch(() => {
  }), ol.set(e, t), e;
}
function Pm(t) {
  if (da.has(t))
    return;
  const e = new Promise((n, s) => {
    const i = () => {
      t.removeEventListener("complete", r), t.removeEventListener("error", o), t.removeEventListener("abort", o);
    }, r = () => {
      n(), i();
    }, o = () => {
      s(t.error || new DOMException("AbortError", "AbortError")), i();
    };
    t.addEventListener("complete", r), t.addEventListener("error", o), t.addEventListener("abort", o);
  });
  da.set(t, e);
}
let fa = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return da.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || jh.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return wn(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function xm(t) {
  fa = t(fa);
}
function Om(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const s = t.call(jo(this), e, ...n);
    return jh.set(s, e.sort ? e.sort() : [e]), wn(s);
  } : Rm().includes(t) ? function(...e) {
    return t.apply(jo(this), e), wn(Uh.get(this));
  } : function(...e) {
    return wn(t.apply(jo(this), e));
  };
}
function Dm(t) {
  return typeof t == "function" ? Om(t) : (t instanceof IDBTransaction && Pm(t), km(t, Am()) ? new Proxy(t, fa) : t);
}
function wn(t) {
  if (t instanceof IDBRequest)
    return Nm(t);
  if (Uo.has(t))
    return Uo.get(t);
  const e = Dm(t);
  return e !== t && (Uo.set(t, e), ol.set(e, t)), e;
}
const jo = (t) => ol.get(t);
function Mm(t, e, { blocked: n, upgrade: s, blocking: i, terminated: r } = {}) {
  const o = indexedDB.open(t, e), a = wn(o);
  return s && o.addEventListener("upgradeneeded", (l) => {
    s(wn(o.result), l.oldVersion, l.newVersion, wn(o.transaction), l);
  }), n && o.addEventListener("blocked", (l) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), a.then((l) => {
    r && l.addEventListener("close", () => r()), i && l.addEventListener("versionchange", (c) => i(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), a;
}
const Lm = ["get", "getKey", "getAll", "getAllKeys", "count"], $m = ["put", "add", "delete", "clear"], Wo = /* @__PURE__ */ new Map();
function Ec(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Wo.get(e))
    return Wo.get(e);
  const n = e.replace(/FromIndex$/, ""), s = e !== n, i = $m.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (s ? IDBIndex : IDBObjectStore).prototype) || !(i || Lm.includes(n))
  )
    return;
  const r = async function(o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let c = l.store;
    return s && (c = c.index(a.shift())), (await Promise.all([
      c[n](...a),
      i && l.done
    ]))[0];
  };
  return Wo.set(e, r), r;
}
xm((t) => ({
  ...t,
  get: (e, n, s) => Ec(e, n) || t.get(e, n, s),
  has: (e, n) => !!Ec(e, n) || t.has(e, n)
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
class Fm {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (Um(n)) {
        const s = n.getImmediate();
        return `${s.library}/${s.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function Um(t) {
  return t.getComponent()?.type === "VERSION";
}
const pa = "@firebase/app", Ic = "0.14.5";
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
const tn = new rl("@firebase/app"), jm = "@firebase/app-compat", Wm = "@firebase/analytics-compat", zm = "@firebase/analytics", Hm = "@firebase/app-check-compat", Bm = "@firebase/app-check", Vm = "@firebase/auth", qm = "@firebase/auth-compat", Gm = "@firebase/database", Km = "@firebase/data-connect", Ym = "@firebase/database-compat", Qm = "@firebase/functions", Jm = "@firebase/functions-compat", Xm = "@firebase/installations", Zm = "@firebase/installations-compat", eg = "@firebase/messaging", tg = "@firebase/messaging-compat", ng = "@firebase/performance", sg = "@firebase/performance-compat", ig = "@firebase/remote-config", rg = "@firebase/remote-config-compat", og = "@firebase/storage", ag = "@firebase/storage-compat", lg = "@firebase/firestore", cg = "@firebase/ai", ug = "@firebase/firestore-compat", hg = "firebase", dg = "12.5.0";
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
const _a = "[DEFAULT]", fg = {
  [pa]: "fire-core",
  [jm]: "fire-core-compat",
  [zm]: "fire-analytics",
  [Wm]: "fire-analytics-compat",
  [Bm]: "fire-app-check",
  [Hm]: "fire-app-check-compat",
  [Vm]: "fire-auth",
  [qm]: "fire-auth-compat",
  [Gm]: "fire-rtdb",
  [Km]: "fire-data-connect",
  [Ym]: "fire-rtdb-compat",
  [Qm]: "fire-fn",
  [Jm]: "fire-fn-compat",
  [Xm]: "fire-iid",
  [Zm]: "fire-iid-compat",
  [eg]: "fire-fcm",
  [tg]: "fire-fcm-compat",
  [ng]: "fire-perf",
  [sg]: "fire-perf-compat",
  [ig]: "fire-rc",
  [rg]: "fire-rc-compat",
  [og]: "fire-gcs",
  [ag]: "fire-gcs-compat",
  [lg]: "fire-fst",
  [ug]: "fire-fst-compat",
  [cg]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [hg]: "fire-js-all"
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
const Pr = /* @__PURE__ */ new Map(), pg = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map();
function Cc(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function Ds(t) {
  const e = t.name;
  if (ma.has(e))
    return tn.debug(`There were multiple attempts to register component ${e}.`), !1;
  ma.set(e, t);
  for (const n of Pr.values())
    Cc(n, t);
  for (const n of pg.values())
    Cc(n, t);
  return !0;
}
function al(t, e) {
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
const _g = {
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
}, En = new qi("app", "Firebase", _g);
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
class mg {
  constructor(e, n, s) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = s, this.container.addComponent(new Xn(
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
      throw En.create("app-deleted", { appName: this._name });
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
const Gs = dg;
function Wh(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const s = {
    name: _a,
    automaticDataCollectionEnabled: !0,
    ...e
  }, i = s.name;
  if (typeof i != "string" || !i)
    throw En.create("bad-app-name", {
      appName: String(i)
    });
  if (n || (n = Oh()), !n)
    throw En.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const r = Pr.get(i);
  if (r) {
    if (Jn(n, r.options) && Jn(s, r.config))
      return r;
    throw En.create("duplicate-app", { appName: i });
  }
  const o = new Em(i);
  for (const l of ma.values())
    o.addComponent(l);
  const a = new mg(n, s, o);
  return Pr.set(i, a), a;
}
function zh(t = _a) {
  const e = Pr.get(t);
  if (!e && t === _a && Oh())
    return Wh();
  if (!e)
    throw En.create("no-app", { appName: t });
  return e;
}
function In(t, e, n) {
  let s = fg[t] ?? t;
  n && (s += `-${n}`);
  const i = s.match(/\s|\//), r = e.match(/\s|\//);
  if (i || r) {
    const o = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    i && o.push(`library name "${s}" contains illegal characters (whitespace or "/")`), i && r && o.push("and"), r && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), tn.warn(o.join(" "));
    return;
  }
  Ds(new Xn(
    `${s}-version`,
    () => ({ library: s, version: e }),
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
const gg = "firebase-heartbeat-database", vg = 1, Ai = "firebase-heartbeat-store";
let zo = null;
function Hh() {
  return zo || (zo = Mm(gg, vg, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(Ai);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw En.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), zo;
}
async function yg(t) {
  try {
    const n = (await Hh()).transaction(Ai), s = await n.objectStore(Ai).get(Bh(t));
    return await n.done, s;
  } catch (e) {
    if (e instanceof Dn)
      tn.warn(e.message);
    else {
      const n = En.create("idb-get", {
        originalErrorMessage: e?.message
      });
      tn.warn(n.message);
    }
  }
}
async function Tc(t, e) {
  try {
    const s = (await Hh()).transaction(Ai, "readwrite");
    await s.objectStore(Ai).put(e, Bh(t)), await s.done;
  } catch (n) {
    if (n instanceof Dn)
      tn.warn(n.message);
    else {
      const s = En.create("idb-set", {
        originalErrorMessage: n?.message
      });
      tn.warn(s.message);
    }
  }
}
function Bh(t) {
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
const bg = 1024, wg = 30;
class Eg {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Cg(n), this._heartbeatsCachePromise = this._storage.read().then((s) => (this._heartbeatsCache = s, s));
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
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = Sc();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((i) => i.date === s))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: s, agent: n }), this._heartbeatsCache.heartbeats.length > wg) {
        const i = Tg(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(i, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      tn.warn(e);
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
      const e = Sc(), { heartbeatsToSend: n, unsentEntries: s } = Ig(this._heartbeatsCache.heartbeats), i = Ar(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
    } catch (e) {
      return tn.warn(e), "";
    }
  }
}
function Sc() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Ig(t, e = bg) {
  const n = [];
  let s = t.slice();
  for (const i of t) {
    const r = n.find((o) => o.agent === i.agent);
    if (r) {
      if (r.dates.push(i.date), kc(n) > e) {
        r.dates.pop();
        break;
      }
    } else if (n.push({
      agent: i.agent,
      dates: [i.date]
    }), kc(n) > e) {
      n.pop();
      break;
    }
    s = s.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: s
  };
}
class Cg {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return am() ? lm().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await yg(this.app);
      return n?.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Tc(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Tc(this.app, {
        lastSentHeartbeatDate: e.lastSentHeartbeatDate ?? s.lastSentHeartbeatDate,
        heartbeats: [
          ...s.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function kc(t) {
  return Ar(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function Tg(t) {
  if (t.length === 0)
    return -1;
  let e = 0, n = t[0].date;
  for (let s = 1; s < t.length; s++)
    t[s].date < n && (n = t[s].date, e = s);
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
function Sg(t) {
  Ds(new Xn(
    "platform-logger",
    (e) => new Fm(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Ds(new Xn(
    "heartbeat",
    (e) => new Eg(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), In(pa, Ic, t), In(pa, Ic, "esm2020"), In("fire-js", "");
}
Sg("");
var kg = "firebase", Ag = "12.5.0";
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
In(kg, Ag, "app");
function Vh() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Rg = Vh, qh = new qi("auth", "Firebase", Vh());
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
const xr = new rl("@firebase/auth");
function Ng(t, ...e) {
  xr.logLevel <= Q.WARN && xr.warn(`Auth (${Gs}): ${t}`, ...e);
}
function mr(t, ...e) {
  xr.logLevel <= Q.ERROR && xr.error(`Auth (${Gs}): ${t}`, ...e);
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
function kt(t, ...e) {
  throw ll(t, ...e);
}
function Dt(t, ...e) {
  return ll(t, ...e);
}
function Gh(t, e, n) {
  const s = {
    ...Rg(),
    [e]: n
  };
  return new qi("auth", "Firebase", s).create(e, {
    appName: t.name
  });
}
function Zt(t) {
  return Gh(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function ll(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], s = [...e.slice(1)];
    return s[0] && (s[0].appName = t.name), t._errorFactory.create(n, ...s);
  }
  return qh.create(t, ...e);
}
function O(t, e, ...n) {
  if (!t)
    throw ll(e, ...n);
}
function qt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw mr(e), new Error(e);
}
function nn(t, e) {
  t || qt(e);
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
function ga() {
  return typeof self < "u" && self.location?.href || "";
}
function Pg() {
  return Ac() === "http:" || Ac() === "https:";
}
function Ac() {
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
function xg() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Pg() || im() || "connection" in navigator) ? navigator.onLine : !0;
}
function Og() {
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
class Gi {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, nn(n > e, "Short delay should be less than long delay!"), this.isMobile = il() || $h();
  }
  get() {
    return xg() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function cl(t, e) {
  nn(t.emulator, "Emulator should always be set here");
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
class Kh {
  static initialize(e, n, s) {
    this.fetchImpl = e, n && (this.headersImpl = n), s && (this.responseImpl = s);
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
    qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Dg = {
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
const Mg = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], Lg = new Gi(3e4, 6e4);
function Mn(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function ln(t, e, n, s, i = {}) {
  return Yh(t, i, async () => {
    let r = {}, o = {};
    s && (e === "GET" ? o = s : r = {
      body: JSON.stringify(s)
    });
    const a = qs({
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
      ...r
    };
    return sm() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && Vs(t.emulatorConfig.host) && (c.credentials = "include"), Kh.fetch()(await Qh(t, t.config.apiHost, n, a), c);
  });
}
async function Yh(t, e, n) {
  t._canInitEmulator = !1;
  const s = { ...Dg, ...e };
  try {
    const i = new Fg(t), r = await Promise.race([
      n(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await r.json();
    if ("needConfirmation" in o)
      throw ur(t, "account-exists-with-different-credential", o);
    if (r.ok && !("errorMessage" in o))
      return o;
    {
      const a = r.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ur(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw ur(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw ur(t, "user-disabled", o);
      const h = s[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Gh(t, h, c);
      kt(t, h);
    }
  } catch (i) {
    if (i instanceof Dn)
      throw i;
    kt(t, "network-request-failed", { message: String(i) });
  }
}
async function Ki(t, e, n, s, i = {}) {
  const r = await ln(t, e, n, s, i);
  return "mfaPendingCredential" in r && kt(t, "multi-factor-auth-required", {
    _serverResponse: r
  }), r;
}
async function Qh(t, e, n, s) {
  const i = `${e}${n}?${s}`, r = t, o = r.config.emulator ? cl(t.config, i) : `${t.config.apiScheme}://${i}`;
  return Mg.includes(n) && (await r._persistenceManagerAvailable, r._getPersistenceType() === "COOKIE") ? r._getPersistence()._getFinalTarget(o).toString() : o;
}
function $g(t) {
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
class Fg {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, s) => {
      this.timer = setTimeout(() => s(Dt(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Lg.get());
    });
  }
}
function ur(t, e, n) {
  const s = {
    appName: t.name
  };
  n.email && (s.email = n.email), n.phoneNumber && (s.phoneNumber = n.phoneNumber);
  const i = Dt(t, e, s);
  return i.customData._tokenResponse = n, i;
}
function Rc(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Ug {
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
        return $g(n.enforcementState);
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
async function jg(t, e) {
  return ln(t, "GET", "/v2/recaptchaConfig", Mn(t, e));
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
async function Wg(t, e) {
  return ln(t, "POST", "/v1/accounts:delete", e);
}
async function Or(t, e) {
  return ln(t, "POST", "/v1/accounts:lookup", e);
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
function mi(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function zg(t, e = !1) {
  const n = Ae(t), s = await n.getIdToken(e), i = ul(s);
  O(
    i && i.exp && i.auth_time && i.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const r = typeof i.firebase == "object" ? i.firebase : void 0, o = r?.sign_in_provider;
  return {
    claims: i,
    token: s,
    authTime: mi(Ho(i.auth_time)),
    issuedAtTime: mi(Ho(i.iat)),
    expirationTime: mi(Ho(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: r?.sign_in_second_factor || null
  };
}
function Ho(t) {
  return Number(t) * 1e3;
}
function ul(t) {
  const [e, n, s] = t.split(".");
  if (e === void 0 || n === void 0 || s === void 0)
    return mr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Rr(n);
    return i ? JSON.parse(i) : (mr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return mr("Caught error parsing JWT payload as JSON", i?.toString()), null;
  }
}
function Nc(t) {
  const e = ul(t);
  return O(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), O(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), O(
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
async function Ms(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (s) {
    throw s instanceof Dn && Hg(s) && t.auth.currentUser === t && await t.auth.signOut(), s;
  }
}
function Hg({ code: t }) {
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
class Bg {
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
      const s = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, s);
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
class va {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = mi(this.lastLoginAt), this.creationTime = mi(this.createdAt);
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
async function Dr(t) {
  const e = t.auth, n = await t.getIdToken(), s = await Ms(t, Or(e, { idToken: n }));
  O(
    s?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = s.users[0];
  t._notifyReloadListener(i);
  const r = i.providerUserInfo?.length ? Jh(i.providerUserInfo) : [], o = qg(t.providerData, r), a = t.isAnonymous, l = !(t.email && i.passwordHash) && !o?.length, c = a ? l : !1, h = {
    uid: i.localId,
    displayName: i.displayName || null,
    photoURL: i.photoUrl || null,
    email: i.email || null,
    emailVerified: i.emailVerified || !1,
    phoneNumber: i.phoneNumber || null,
    tenantId: i.tenantId || null,
    providerData: o,
    metadata: new va(i.createdAt, i.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, h);
}
async function Vg(t) {
  const e = Ae(t);
  await Dr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function qg(t, e) {
  return [...t.filter((s) => !e.some((i) => i.providerId === s.providerId)), ...e];
}
function Jh(t) {
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
async function Gg(t, e) {
  const n = await Yh(t, {}, async () => {
    const s = qs({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: r } = t.config, o = await Qh(t, i, "/v1/token", `key=${r}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: s
    };
    return t.emulatorConfig && Vs(t.emulatorConfig.host) && (l.credentials = "include"), Kh.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function Kg(t, e) {
  return ln(t, "POST", "/v2/accounts:revokeToken", Mn(t, e));
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
class Es {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    O(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), O(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), O(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Nc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    O(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = Nc(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired ? this.accessToken : (O(
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
    const { accessToken: s, refreshToken: i, expiresIn: r } = await Gg(e, n);
    this.updateTokensAndExpiration(s, i, Number(r));
  }
  updateTokensAndExpiration(e, n, s) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + s * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: s, accessToken: i, expirationTime: r } = n, o = new Es();
    return s && (O(typeof s == "string", "internal-error", {
      appName: e
    }), o.refreshToken = s), i && (O(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), r && (O(typeof r == "number", "internal-error", {
      appName: e
    }), o.expirationTime = r), o;
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
    return Object.assign(new Es(), this.toJSON());
  }
  _performRefresh() {
    return qt("not implemented");
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
function dn(t, e) {
  O(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Ct {
  constructor({ uid: e, auth: n, stsTokenManager: s, ...i }) {
    this.providerId = "firebase", this.proactiveRefresh = new Bg(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = s, this.accessToken = s.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new va(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Ms(this, this.stsTokenManager.getToken(this.auth, e));
    return O(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return zg(this, e);
  }
  reload() {
    return Vg(this);
  }
  _assign(e) {
    this !== e && (O(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => ({ ...n })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new Ct({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone()
    });
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    O(
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
    let s = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), s = !0), n && await Dr(this), await this.auth._persistUserIfCurrent(this), s && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ut(this.auth.app))
      return Promise.reject(Zt(this.auth));
    const e = await this.getIdToken();
    return await Ms(this, Wg(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    const s = n.displayName ?? void 0, i = n.email ?? void 0, r = n.phoneNumber ?? void 0, o = n.photoURL ?? void 0, a = n.tenantId ?? void 0, l = n._redirectEventId ?? void 0, c = n.createdAt ?? void 0, h = n.lastLoginAt ?? void 0, { uid: d, emailVerified: u, isAnonymous: f, providerData: p, stsTokenManager: g } = n;
    O(
      d && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const b = Es.fromJSON(this.name, g);
    O(
      typeof d == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), dn(s, e.name), dn(i, e.name), O(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), O(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), dn(r, e.name), dn(o, e.name), dn(a, e.name), dn(l, e.name), dn(c, e.name), dn(h, e.name);
    const T = new Ct({
      uid: d,
      auth: e,
      email: i,
      emailVerified: u,
      displayName: s,
      isAnonymous: f,
      photoURL: o,
      phoneNumber: r,
      tenantId: a,
      stsTokenManager: b,
      createdAt: c,
      lastLoginAt: h
    });
    return p && Array.isArray(p) && (T.providerData = p.map((C) => ({ ...C }))), l && (T._redirectEventId = l), T;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, n, s = !1) {
    const i = new Es();
    i.updateFromServerResponse(n);
    const r = new Ct({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: s
    });
    return await Dr(r), r;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, s) {
    const i = n.users[0];
    O(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = i.providerUserInfo !== void 0 ? Jh(i.providerUserInfo) : [], o = !(i.email && i.passwordHash) && !r?.length, a = new Es();
    a.updateFromIdToken(s);
    const l = new Ct({
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
      providerData: r,
      metadata: new va(i.createdAt, i.lastLoginAt),
      isAnonymous: !(i.email && i.passwordHash) && !r?.length
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
const Pc = /* @__PURE__ */ new Map();
function Gt(t) {
  nn(t instanceof Function, "Expected a class definition");
  let e = Pc.get(t);
  return e ? (nn(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), Pc.set(t, e), e);
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
class Xh {
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
Xh.type = "NONE";
const xc = Xh;
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
function gr(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Is {
  constructor(e, n, s) {
    this.persistence = e, this.auth = n, this.userKey = s;
    const { config: i, name: r } = this.auth;
    this.fullUserKey = gr(this.userKey, i.apiKey, r), this.fullPersistenceKey = gr("persistence", i.apiKey, r), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await Or(this.auth, { idToken: e }).catch(() => {
      });
      return n ? Ct._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return Ct._fromJSON(this.auth, e);
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
  static async create(e, n, s = "authUser") {
    if (!n.length)
      return new Is(Gt(xc), e, s);
    const i = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let r = i[0] || Gt(xc);
    const o = gr(s, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const h = await c._get(o);
        if (h) {
          let d;
          if (typeof h == "string") {
            const u = await Or(e, {
              idToken: h
            }).catch(() => {
            });
            if (!u)
              break;
            d = await Ct._fromGetAccountInfoResponse(e, u, h);
          } else
            d = Ct._fromJSON(e, h);
          c !== r && (a = d), r = c;
          break;
        }
      } catch {
      }
    const l = i.filter((c) => c._shouldAllowMigration);
    return !r._shouldAllowMigration || !l.length ? new Is(r, e, s) : (r = l[0], a && await r._set(o, a.toJSON()), await Promise.all(n.map(async (c) => {
      if (c !== r)
        try {
          await c._remove(o);
        } catch {
        }
    })), new Is(r, e, s));
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
function Oc(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (nd(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Zh(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (id(e))
    return "Blackberry";
  if (rd(e))
    return "Webos";
  if (ed(e))
    return "Safari";
  if ((e.includes("chrome/") || td(e)) && !e.includes("edge/"))
    return "Chrome";
  if (sd(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, s = t.match(n);
    if (s?.length === 2)
      return s[1];
  }
  return "Other";
}
function Zh(t = We()) {
  return /firefox\//i.test(t);
}
function ed(t = We()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function td(t = We()) {
  return /crios\//i.test(t);
}
function nd(t = We()) {
  return /iemobile/i.test(t);
}
function sd(t = We()) {
  return /android/i.test(t);
}
function id(t = We()) {
  return /blackberry/i.test(t);
}
function rd(t = We()) {
  return /webos/i.test(t);
}
function hl(t = We()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function Yg(t = We()) {
  return hl(t) && !!window.navigator?.standalone;
}
function Qg() {
  return rm() && document.documentMode === 10;
}
function od(t = We()) {
  return hl(t) || sd(t) || rd(t) || id(t) || /windows phone/i.test(t) || nd(t);
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
function ad(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Oc(We());
      break;
    case "Worker":
      n = `${Oc(We())}-${t}`;
      break;
    default:
      n = t;
  }
  const s = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Gs}/${s}`;
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
class Jg {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, n) {
    const s = (r) => new Promise((o, a) => {
      try {
        const l = e(r);
        o(l);
      } catch (l) {
        a(l);
      }
    });
    s.onAbort = n, this.queue.push(s);
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
      for (const s of this.queue)
        await s(e), s.onAbort && n.push(s.onAbort);
    } catch (s) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: s?.message
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
async function Xg(t, e = {}) {
  return ln(t, "GET", "/v2/passwordPolicy", Mn(t, e));
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
const Zg = 6;
class ev {
  constructor(e) {
    const n = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = n.minPasswordLength ?? Zg, n.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength), n.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = n.containsLowercaseCharacter), n.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = n.containsUppercaseCharacter), n.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = n.containsNumericCharacter), n.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = n.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
    const s = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    s && (n.meetsMinPasswordLength = e.length >= s), i && (n.meetsMaxPasswordLength = e.length <= i);
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
    let s;
    for (let i = 0; i < e.length; i++)
      s = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        n,
        /* containsLowercaseCharacter= */
        s >= "a" && s <= "z",
        /* containsUppercaseCharacter= */
        s >= "A" && s <= "Z",
        /* containsNumericCharacter= */
        s >= "0" && s <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(s)
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
  updatePasswordCharacterOptionsStatuses(e, n, s, i, r) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = s)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = r));
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
class tv {
  constructor(e, n, s, i) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = s, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Dc(this), this.idTokenSubscription = new Dc(this), this.beforeStateQueue = new Jg(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = qh, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion, this._persistenceManagerAvailable = new Promise((r) => this._resolvePersistenceManagerAvailable = r);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = Gt(n)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await Is.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
      const n = await Or(this, { idToken: e }), s = await Ct._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(s);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (ut(this.app)) {
      const r = this.app.settings.authIdToken;
      return r ? new Promise((o) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(r).then(o, o));
      }) : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let s = n, i = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const r = this.redirectUser?._redirectEventId, o = s?._redirectEventId, a = await this.tryRedirectSignIn(e);
      (!r || r === o) && a?.user && (s = a.user, i = !0);
    }
    if (!s)
      return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (r) {
          s = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(r));
        }
      return s ? this.reloadAndSetCurrentUserOrClear(s) : this.directlySetCurrentUser(null);
    }
    return O(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === s._redirectEventId ? this.directlySetCurrentUser(s) : this.reloadAndSetCurrentUserOrClear(s);
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
      await Dr(e);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Og();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (ut(this.app))
      return Promise.reject(Zt(this));
    const n = e ? Ae(e) : null;
    return n && O(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && O(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return ut(this.app) ? Promise.reject(Zt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return ut(this.app) ? Promise.reject(Zt(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(Gt(e));
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
    const e = await Xg(this), n = new ev(e);
    this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new qi("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, s) {
    return this.registerStateListener(this.authStateSubscription, e, n, s);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, s) {
    return this.registerStateListener(this.idTokenSubscription, e, n, s);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser)
        e();
      else {
        const s = this.onAuthStateChanged(() => {
          s(), e();
        }, n);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(), s = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: n
      };
      this.tenantId != null && (s.tenantId = this.tenantId), await Kg(this, s);
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
    const s = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? s.removeCurrentUser() : s.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = e && Gt(e) || this._popupRedirectResolver;
      O(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Is.create(
        this,
        [Gt(n._redirectPersistence)],
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
  registerStateListener(e, n, s, i) {
    if (this._deleted)
      return () => {
      };
    const r = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (O(
      a,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), a.then(() => {
      o || r(this.currentUser);
    }), typeof n == "function") {
      const l = e.addObserver(n, s, i);
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
    return O(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = ad(this.config.clientPlatform, this._getFrameworks()));
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
    const s = await this._getAppCheckToken();
    return s && (e[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = s), e;
  }
  async _getAppCheckToken() {
    if (ut(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && Ng(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function as(t) {
  return Ae(t);
}
class Dc {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = _m((n) => this.observer = n);
  }
  get next() {
    return O(
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
let ho = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function nv(t) {
  ho = t;
}
function ld(t) {
  return ho.loadJS(t);
}
function sv() {
  return ho.recaptchaEnterpriseScript;
}
function iv() {
  return ho.gapiScript;
}
function rv(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
class ov {
  constructor() {
    this.enterprise = new av();
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
class av {
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
const lv = "recaptcha-enterprise", cd = "NO_RECAPTCHA";
class cv {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = lv, this.auth = as(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", n = !1) {
    async function s(r) {
      if (!n) {
        if (r.tenantId == null && r._agentRecaptchaConfig != null)
          return r._agentRecaptchaConfig.siteKey;
        if (r.tenantId != null && r._tenantRecaptchaConfigs[r.tenantId] !== void 0)
          return r._tenantRecaptchaConfigs[r.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        jg(r, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new Ug(l);
            return r.tenantId == null ? r._agentRecaptchaConfig = c : r._tenantRecaptchaConfigs[r.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function i(r, o, a) {
      const l = window.grecaptcha;
      Rc(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(r, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(cd);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new ov().execute("siteKey", { action: "verify" }) : new Promise((r, o) => {
      s(this.auth).then((a) => {
        if (!n && Rc(window.grecaptcha))
          i(a, r, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = sv();
          l.length !== 0 && (l += a), ld(l).then(() => {
            i(a, r, o);
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
async function Mc(t, e, n, s = !1, i = !1) {
  const r = new cv(t);
  let o;
  if (i)
    o = cd;
  else
    try {
      o = await r.verify(n);
    } catch {
      o = await r.verify(n, !0);
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
  return s ? Object.assign(a, { captchaResp: o }) : Object.assign(a, { captchaResponse: o }), Object.assign(a, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(a, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), a;
}
async function ya(t, e, n, s, i) {
  if (t._getRecaptchaConfig()?.isProviderEnabled(
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  )) {
    const r = await Mc(
      t,
      e,
      n,
      n === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
    );
    return s(t, r);
  } else
    return s(t, e).catch(async (r) => {
      if (r.code === "auth/missing-recaptcha-token") {
        console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const o = await Mc(
          t,
          e,
          n,
          n === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return s(t, o);
      } else
        return Promise.reject(r);
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
function uv(t, e) {
  const n = al(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(), r = n.getOptions();
    if (Jn(r, e ?? {}))
      return i;
    kt(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function hv(t, e) {
  const n = e?.persistence || [], s = (Array.isArray(n) ? n : [n]).map(Gt);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(s, e?.popupRedirectResolver);
}
function dv(t, e, n) {
  const s = as(t);
  O(
    /^https?:\/\//.test(e),
    s,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !1, r = ud(e), { host: o, port: a } = fv(e), l = a === null ? "" : `:${a}`, c = { url: `${r}//${o}${l}/` }, h = Object.freeze({
    host: o,
    port: a,
    protocol: r.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  });
  if (!s._canInitEmulator) {
    O(
      s.config.emulator && s.emulatorConfig,
      s,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), O(
      Jn(c, s.config.emulator) && Jn(h, s.emulatorConfig),
      s,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  s.config.emulator = c, s.emulatorConfig = h, s.settings.appVerificationDisabledForTesting = !0, Vs(o) ? (Mh(`${r}//${o}${l}`), Lh("Auth", !0)) : pv();
}
function ud(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function fv(t) {
  const e = ud(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const s = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(s);
  if (i) {
    const r = i[1];
    return { host: r, port: Lc(s.substr(r.length + 1)) };
  } else {
    const [r, o] = s.split(":");
    return { host: r, port: Lc(o) };
  }
}
function Lc(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function pv() {
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
class dl {
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
    return qt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return qt("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return qt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return qt("not implemented");
  }
}
async function _v(t, e) {
  return ln(t, "POST", "/v1/accounts:signUp", e);
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
async function mv(t, e) {
  return Ki(t, "POST", "/v1/accounts:signInWithPassword", Mn(t, e));
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
async function gv(t, e) {
  return Ki(t, "POST", "/v1/accounts:signInWithEmailLink", Mn(t, e));
}
async function vv(t, e) {
  return Ki(t, "POST", "/v1/accounts:signInWithEmailLink", Mn(t, e));
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
class Ri extends dl {
  /** @internal */
  constructor(e, n, s, i = null) {
    super("password", s), this._email = e, this._password = n, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Ri(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, s = null) {
    return new Ri(e, n, "emailLink", s);
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
        return ya(e, n, "signInWithPassword", mv);
      case "emailLink":
        return gv(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        kt(
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
        const s = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return ya(e, s, "signUpPassword", _v);
      case "emailLink":
        return vv(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password
        });
      default:
        kt(
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
async function Cs(t, e) {
  return Ki(t, "POST", "/v1/accounts:signInWithIdp", Mn(t, e));
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
const yv = "http://localhost";
class Zn extends dl {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new Zn(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : kt(
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
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: s, signInMethod: i, ...r } = n;
    if (!s || !i)
      return null;
    const o = new Zn(s, i);
    return o.idToken = r.idToken || void 0, o.accessToken = r.accessToken || void 0, o.secret = r.secret, o.nonce = r.nonce, o.pendingToken = r.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Cs(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const s = this.buildRequest();
    return s.idToken = n, Cs(e, s);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, Cs(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: yv,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = qs(n);
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
function bv(t) {
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
function wv(t) {
  const e = ci(ui(t)).link, n = e ? ci(ui(e)).deep_link_id : null, s = ci(ui(t)).deep_link_id;
  return (s ? ci(ui(s)).link : null) || s || n || e || t;
}
class fl {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = ci(ui(e)), s = n.apiKey ?? null, i = n.oobCode ?? null, r = bv(n.mode ?? null);
    O(
      s && i && r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = s, this.operation = r, this.code = i, this.continueUrl = n.continueUrl ?? null, this.languageCode = n.lang ?? null, this.tenantId = n.tenantId ?? null;
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
    const n = wv(e);
    try {
      return new fl(n);
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
class Ks {
  constructor() {
    this.providerId = Ks.PROVIDER_ID;
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
    return Ri._fromEmailAndPassword(e, n);
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
    const s = fl.parseLink(n);
    return O(
      s,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ri._fromEmailAndCode(e, s.code, s.tenantId);
  }
}
Ks.PROVIDER_ID = "password";
Ks.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Ks.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
class hd {
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
class Yi extends hd {
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
class fn extends Yi {
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
    return Zn._fromParams({
      providerId: fn.PROVIDER_ID,
      signInMethod: fn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return fn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return fn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return fn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
fn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
fn.PROVIDER_ID = "facebook.com";
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
class pn extends Yi {
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
    return Zn._fromParams({
      providerId: pn.PROVIDER_ID,
      signInMethod: pn.GOOGLE_SIGN_IN_METHOD,
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
    return pn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return pn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: s } = e;
    if (!n && !s)
      return null;
    try {
      return pn.credential(n, s);
    } catch {
      return null;
    }
  }
}
pn.GOOGLE_SIGN_IN_METHOD = "google.com";
pn.PROVIDER_ID = "google.com";
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
class _n extends Yi {
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
    return Zn._fromParams({
      providerId: _n.PROVIDER_ID,
      signInMethod: _n.GITHUB_SIGN_IN_METHOD,
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
_n.GITHUB_SIGN_IN_METHOD = "github.com";
_n.PROVIDER_ID = "github.com";
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
class mn extends Yi {
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
    return Zn._fromParams({
      providerId: mn.PROVIDER_ID,
      signInMethod: mn.TWITTER_SIGN_IN_METHOD,
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
    return mn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return mn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: s } = e;
    if (!n || !s)
      return null;
    try {
      return mn.credential(n, s);
    } catch {
      return null;
    }
  }
}
mn.TWITTER_SIGN_IN_METHOD = "twitter.com";
mn.PROVIDER_ID = "twitter.com";
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
async function Ev(t, e) {
  return Ki(t, "POST", "/v1/accounts:signUp", Mn(t, e));
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
class es {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, s, i = !1) {
    const r = await Ct._fromIdTokenResponse(e, s, i), o = $c(s);
    return new es({
      user: r,
      providerId: o,
      _tokenResponse: s,
      operationType: n
    });
  }
  static async _forOperation(e, n, s) {
    await e._updateTokensIfNecessary(
      s,
      /* reload */
      !0
    );
    const i = $c(s);
    return new es({
      user: e,
      providerId: i,
      _tokenResponse: s,
      operationType: n
    });
  }
}
function $c(t) {
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
class Mr extends Dn {
  constructor(e, n, s, i) {
    super(n.code, n.message), this.operationType = s, this.user = i, Object.setPrototypeOf(this, Mr.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: s
    };
  }
  static _fromErrorAndOperation(e, n, s, i) {
    return new Mr(e, n, s, i);
  }
}
function dd(t, e, n, s) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((r) => {
    throw r.code === "auth/multi-factor-auth-required" ? Mr._fromErrorAndOperation(t, r, e, s) : r;
  });
}
async function Iv(t, e, n = !1) {
  const s = await Ms(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return es._forOperation(t, "link", s);
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
async function Cv(t, e, n = !1) {
  const { auth: s } = t;
  if (ut(s.app))
    return Promise.reject(Zt(s));
  const i = "reauthenticate";
  try {
    const r = await Ms(t, dd(s, i, e, t), n);
    O(
      r.idToken,
      s,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = ul(r.idToken);
    O(
      o,
      s,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return O(
      t.uid === a,
      s,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), es._forOperation(t, i, r);
  } catch (r) {
    throw r?.code === "auth/user-not-found" && kt(
      s,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), r;
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
async function fd(t, e, n = !1) {
  if (ut(t.app))
    return Promise.reject(Zt(t));
  const s = "signIn", i = await dd(t, s, e), r = await es._fromIdTokenResponse(t, s, i);
  return n || await t._updateCurrentUser(r.user), r;
}
async function Tv(t, e) {
  return fd(as(t), e);
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
async function pd(t) {
  const e = as(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function Sv(t, e, n) {
  if (ut(t.app))
    return Promise.reject(Zt(t));
  const s = as(t), o = await ya(s, {
    returnSecureToken: !0,
    email: e,
    password: n,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }, "signUpPassword", Ev).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && pd(t), l;
  }), a = await es._fromIdTokenResponse(s, "signIn", o);
  return await s._updateCurrentUser(a.user), a;
}
function kv(t, e, n) {
  return ut(t.app) ? Promise.reject(Zt(t)) : Tv(Ae(t), Ks.credential(e, n)).catch(async (s) => {
    throw s.code === "auth/password-does-not-meet-requirements" && pd(t), s;
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
async function Av(t, e) {
  return ln(t, "POST", "/v1/accounts:update", e);
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
async function Rv(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0)
    return;
  const s = Ae(t), r = {
    idToken: await s.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Ms(s, Av(s.auth, r));
  s.displayName = o.displayName || null, s.photoURL = o.photoUrl || null;
  const a = s.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = s.displayName, a.photoURL = s.photoURL), await s._updateTokensIfNecessary(o);
}
function Nv(t, e, n, s) {
  return Ae(t).onIdTokenChanged(e, n, s);
}
function Pv(t, e, n) {
  return Ae(t).beforeAuthStateChanged(e, n);
}
function xv(t, e, n, s) {
  return Ae(t).onAuthStateChanged(e, n, s);
}
function Ov(t) {
  return Ae(t).signOut();
}
const Lr = "__sak";
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
class _d {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Lr, "1"), this.storage.removeItem(Lr), Promise.resolve(!0)) : Promise.resolve(!1);
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
const Dv = 1e3, Mv = 10;
class md extends _d {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = od(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const s = this.storage.getItem(n), i = this.localCache[n];
      s !== i && e(n, i, s);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const s = e.key;
    n ? this.detachListener() : this.stopPolling();
    const i = () => {
      const o = this.storage.getItem(s);
      !n && this.localCache[s] === o || this.notifyListeners(s, o);
    }, r = this.storage.getItem(s);
    Qg() && r !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, Mv) : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const s = this.listeners[e];
    if (s)
      for (const i of Array.from(s))
        i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, n, s) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: n,
            newValue: s
          }),
          /* poll */
          !0
        );
      });
    }, Dv);
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
md.type = "LOCAL";
const Lv = md;
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
class gd extends _d {
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
gd.type = "SESSION";
const vd = gd;
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
function $v(t) {
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
class fo {
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
    const s = new fo(e);
    return this.receivers.push(s), s;
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
    const n = e, { eventId: s, eventType: i, data: r } = n.data, o = this.handlersMap[i];
    if (!o?.size)
      return;
    n.ports[0].postMessage({
      status: "ack",
      eventId: s,
      eventType: i
    });
    const a = Array.from(o).map(async (c) => c(n.origin, r)), l = await $v(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: s,
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
fo.receivers = [];
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
function pl(t = "", e = 10) {
  let n = "";
  for (let s = 0; s < e; s++)
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
class Fv {
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
  async _send(e, n, s = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let r, o;
    return new Promise((a, l) => {
      const c = pl("", 20);
      i.port1.start();
      const h = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, s);
      o = {
        messageChannel: i,
        onMessage(d) {
          const u = d;
          if (u.data.eventId === c)
            switch (u.data.status) {
              case "ack":
                clearTimeout(h), r = setTimeout(
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
                clearTimeout(r), a(u.data.response);
                break;
              default:
                clearTimeout(h), clearTimeout(r), l(new Error(
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
function Mt() {
  return window;
}
function Uv(t) {
  Mt().location.href = t;
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
function yd() {
  return typeof Mt().WorkerGlobalScope < "u" && typeof Mt().importScripts == "function";
}
async function jv() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Wv() {
  return navigator?.serviceWorker?.controller || null;
}
function zv() {
  return yd() ? self : null;
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
const bd = "firebaseLocalStorageDb", Hv = 1, $r = "firebaseLocalStorage", wd = "fbase_key";
class Qi {
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
function po(t, e) {
  return t.transaction([$r], e ? "readwrite" : "readonly").objectStore($r);
}
function Bv() {
  const t = indexedDB.deleteDatabase(bd);
  return new Qi(t).toPromise();
}
function ba() {
  const t = indexedDB.open(bd, Hv);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const s = t.result;
      try {
        s.createObjectStore($r, { keyPath: wd });
      } catch (i) {
        n(i);
      }
    }), t.addEventListener("success", async () => {
      const s = t.result;
      s.objectStoreNames.contains($r) ? e(s) : (s.close(), await Bv(), e(await ba()));
    });
  });
}
async function Fc(t, e, n) {
  const s = po(t, !0).put({
    [wd]: e,
    value: n
  });
  return new Qi(s).toPromise();
}
async function Vv(t, e) {
  const n = po(t, !1).get(e), s = await new Qi(n).toPromise();
  return s === void 0 ? null : s.value;
}
function Uc(t, e) {
  const n = po(t, !0).delete(e);
  return new Qi(n).toPromise();
}
const qv = 800, Gv = 3;
class Ed {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await ba(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const s = await this._openDb();
        return await e(s);
      } catch (s) {
        if (n++ > Gv)
          throw s;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return yd() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = fo._getInstance(zv()), this.receiver._subscribe("keyChanged", async (e, n) => ({
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
    if (this.activeServiceWorker = await jv(), !this.activeServiceWorker)
      return;
    this.sender = new Fv(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || Wv() !== this.activeServiceWorker))
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
      const e = await ba();
      return await Fc(e, Lr, "1"), await Uc(e, Lr), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((s) => Fc(s, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((s) => Vv(s, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Uc(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const r = po(i, !1).getAll();
      return new Qi(r).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const n = [], s = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: r } of e)
        s.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(r) && (this.notifyListeners(i, r), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !s.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const s = this.listeners[e];
    if (s)
      for (const i of Array.from(s))
        i(n);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), qv);
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
Ed.type = "LOCAL";
const Kv = Ed;
new Gi(3e4, 6e4);
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
function Yv(t, e) {
  return e ? Gt(e) : (O(
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
class _l extends dl {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return Cs(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Cs(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Cs(e, this._buildIdpRequest());
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
function Qv(t) {
  return fd(t.auth, new _l(t), t.bypassAuthState);
}
function Jv(t) {
  const { auth: e, user: n } = t;
  return O(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Cv(n, new _l(t), t.bypassAuthState);
}
async function Xv(t) {
  const { auth: e, user: n } = t;
  return O(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Iv(n, new _l(t), t.bypassAuthState);
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
class Id {
  constructor(e, n, s, i, r = !1) {
    this.auth = e, this.resolver = s, this.user = i, this.bypassAuthState = r, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n];
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (s) {
        this.reject(s);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: n, sessionId: s, postBody: i, tenantId: r, error: o, type: a } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: s,
      tenantId: r || void 0,
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
        return Qv;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Xv;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Jv;
      default:
        kt(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    nn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    nn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const Zv = new Gi(2e3, 1e4);
class vs extends Id {
  constructor(e, n, s, i, r) {
    super(e, n, i, r), this.provider = s, this.authWindow = null, this.pollId = null, vs.currentPopupAction && vs.currentPopupAction.cancel(), vs.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return O(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    nn(this.filter.length === 1, "Popup operations only handle one event");
    const e = pl();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(Dt(
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
    this.reject(Dt(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, vs.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Dt(
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
      this.pollId = window.setTimeout(e, Zv.get());
    };
    e();
  }
}
vs.currentPopupAction = null;
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
const ey = "pendingRedirect", vr = /* @__PURE__ */ new Map();
class ty extends Id {
  constructor(e, n, s = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], n, void 0, s), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = vr.get(this.auth._key());
    if (!e) {
      try {
        const s = await ny(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(s);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      vr.set(this.auth._key(), e);
    }
    return this.bypassAuthState || vr.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function ny(t, e) {
  const n = ry(e), s = iy(t);
  if (!await s._isAvailable())
    return !1;
  const i = await s._get(n) === "true";
  return await s._remove(n), i;
}
function sy(t, e) {
  vr.set(t._key(), e);
}
function iy(t) {
  return Gt(t._redirectPersistence);
}
function ry(t) {
  return gr(ey, t.config.apiKey, t.name);
}
async function oy(t, e, n = !1) {
  if (ut(t.app))
    return Promise.reject(Zt(t));
  const s = as(t), i = Yv(s, e), o = await new ty(s, i, n).execute();
  return o && !n && (delete o.user._redirectEventId, await s._persistUserIfCurrent(o.user), await s._setRedirectUser(null, e)), o;
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
const ay = 600 * 1e3;
class ly {
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
    return this.consumers.forEach((s) => {
      this.isEventForConsumer(e, s) && (n = !0, this.sendToConsumer(e, s), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !cy(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !Cd(e)) {
      const s = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(Dt(this.auth, s));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const s = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && s;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= ay && this.cachedEventUids.clear(), this.cachedEventUids.has(jc(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(jc(e)), this.lastProcessedEventTime = Date.now();
  }
}
function jc(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Cd({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function cy(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Cd(t);
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
async function uy(t, e = {}) {
  return ln(t, "GET", "/v1/projects", e);
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
const hy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, dy = /^https?/;
async function fy(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await uy(t);
  for (const n of e)
    try {
      if (py(n))
        return;
    } catch {
    }
  kt(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function py(t) {
  const e = ga(), { protocol: n, hostname: s } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && s === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === s;
  }
  if (!dy.test(n))
    return !1;
  if (hy.test(t))
    return s === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(s);
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
const _y = new Gi(3e4, 6e4);
function Wc() {
  const t = Mt().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function my(t) {
  return new Promise((e, n) => {
    function s() {
      Wc(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Wc(), n(Dt(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: _y.get()
      });
    }
    if (Mt().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Mt().gapi?.load)
      s();
    else {
      const i = rv("iframefcb");
      return Mt()[i] = () => {
        gapi.load ? s() : n(Dt(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, ld(`${iv()}?onload=${i}`).catch((r) => n(r));
    }
  }).catch((e) => {
    throw yr = null, e;
  });
}
let yr = null;
function gy(t) {
  return yr = yr || my(t), yr;
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
const vy = new Gi(5e3, 15e3), yy = "__/auth/iframe", by = "emulator/auth/iframe", wy = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Ey = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Iy(t) {
  const e = t.config;
  O(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? cl(e, by) : `https://${t.config.authDomain}/${yy}`, s = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Gs
  }, i = Ey.get(t.config.apiHost);
  i && (s.eid = i);
  const r = t._getFrameworks();
  return r.length && (s.fw = r.join(",")), `${n}?${qs(s).slice(1)}`;
}
async function Cy(t) {
  const e = await gy(t), n = Mt().gapi;
  return O(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Iy(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: wy,
    dontclear: !0
  }, (s) => new Promise(async (i, r) => {
    await s.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = Dt(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Mt().setTimeout(() => {
      r(o);
    }, vy.get());
    function l() {
      Mt().clearTimeout(a), i(s);
    }
    s.ping(l).then(l, () => {
      r(o);
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
const Ty = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Sy = 500, ky = 600, Ay = "_blank", Ry = "http://localhost";
class zc {
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
function Ny(t, e, n, s = Sy, i = ky) {
  const r = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - s) / 2, 0).toString();
  let a = "";
  const l = {
    ...Ty,
    width: s.toString(),
    height: i.toString(),
    top: r,
    left: o
  }, c = We().toLowerCase();
  n && (a = td(c) ? Ay : n), Zh(c) && (e = e || Ry, l.scrollbars = "yes");
  const h = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (Yg(c) && a !== "_self")
    return Py(e || "", a), new zc(null);
  const d = window.open(e || "", a, h);
  O(
    d,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    d.focus();
  } catch {
  }
  return new zc(d);
}
function Py(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const s = document.createEvent("MouseEvent");
  s.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(s);
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
const xy = "__/auth/handler", Oy = "emulator/auth/handler", Dy = encodeURIComponent("fac");
async function Hc(t, e, n, s, i, r) {
  O(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), O(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: s,
    v: Gs,
    eventId: i
  };
  if (e instanceof hd) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", ha(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [h, d] of Object.entries({}))
      o[h] = d;
  }
  if (e instanceof Yi) {
    const h = e.getScopes().filter((d) => d !== "");
    h.length > 0 && (o.scopes = h.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const h of Object.keys(a))
    a[h] === void 0 && delete a[h];
  const l = await t._getAppCheckToken(), c = l ? `#${Dy}=${encodeURIComponent(l)}` : "";
  return `${My(t)}?${qs(a).slice(1)}${c}`;
}
function My({ config: t }) {
  return t.emulator ? cl(t, Oy) : `https://${t.authDomain}/${xy}`;
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
const Bo = "webStorageSupport";
class Ly {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = vd, this._completeRedirectFn = oy, this._overrideRedirectResult = sy;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, s, i) {
    nn(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const r = await Hc(e, n, s, ga(), i);
    return Ny(e, r, pl());
  }
  async _openRedirect(e, n, s, i) {
    await this._originValidation(e);
    const r = await Hc(e, n, s, ga(), i);
    return Uv(r), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: r } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (nn(r, "If manager is not set, promise should be"), r);
    }
    const s = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: s }, s.catch(() => {
      delete this.eventManagers[n];
    }), s;
  }
  async initAndGetManager(e) {
    const n = await Cy(e), s = new ly(e);
    return n.register("authEvent", (i) => (O(
      i?.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: s.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: s }, this.iframes[e._key()] = n, s;
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(Bo, { type: Bo }, (i) => {
      const r = i?.[0]?.[Bo];
      r !== void 0 && n(!!r), kt(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = fy(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return od() || ed() || hl();
  }
}
const $y = Ly;
var Bc = "@firebase/auth", Vc = "1.11.1";
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
class Fy {
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
    const n = this.auth.onIdTokenChanged((s) => {
      e(s?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    O(
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
function Uy(t) {
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
function jy(t) {
  Ds(new Xn(
    "auth",
    (e, { options: n }) => {
      const s = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), r = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = s.options;
      O(o && !o.includes(":"), "invalid-api-key", { appName: s.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: ad(t)
      }, c = new tv(s, i, r, l);
      return hv(c, n), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, n, s) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Ds(new Xn(
    "auth-internal",
    (e) => {
      const n = as(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((s) => new Fy(s))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), In(Bc, Vc, Uy(t)), In(Bc, Vc, "esm2020");
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
const Wy = 300, zy = Dh("authIdTokenMaxAge") || Wy;
let qc = null;
const Hy = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), s = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (s && s > zy)
    return;
  const i = n?.token;
  qc !== i && (qc = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function By(t = zh()) {
  const e = al(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = uv(t, {
    popupRedirectResolver: $y,
    persistence: [
      Kv,
      Lv,
      vd
    ]
  }), s = Dh("authTokenSyncURL");
  if (s && typeof isSecureContext == "boolean" && isSecureContext) {
    const r = new URL(s, location.origin);
    if (location.origin === r.origin) {
      const o = Hy(r.toString());
      Pv(n, o, () => o(n.currentUser)), Nv(n, (a) => o(a));
    }
  }
  const i = xh("auth");
  return i && dv(n, `http://${i}`), n;
}
function Vy() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
nv({
  loadJS(t) {
    return new Promise((e, n) => {
      const s = document.createElement("script");
      s.setAttribute("src", t), s.onload = e, s.onerror = (i) => {
        const r = Dt(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        r.customData = i, n(r);
      }, s.type = "text/javascript", s.charset = "UTF-8", Vy().appendChild(s);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
jy(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const Gc = "@firebase/database", Kc = "1.1.0";
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
let Td = "";
function qy(t) {
  Td = t;
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
class Gy {
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
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), ge(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : ki(n);
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
class Ky {
  constructor() {
    this.cache_ = {}, this.isInMemoryStorage = !0;
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : this.cache_[e] = n;
  }
  get(e) {
    return Wt(this.cache_, e) ? this.cache_[e] : null;
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
const Sd = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Gy(e);
    }
  } catch {
  }
  return new Ky();
}, Bn = Sd("localStorage"), Yy = Sd("sessionStorage");
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
const Ts = new rl("@firebase/database"), Qy = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), kd = function(t) {
  const e = vm(t), n = new pm();
  n.update(e);
  const s = n.digest();
  return nl.encodeByteArray(s);
}, Ji = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    Array.isArray(s) || s && typeof s == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof s.length == "number" ? e += Ji.apply(null, s) : typeof s == "object" ? e += ge(s) : e += s, e += " ";
  }
  return e;
};
let gi = null, Yc = !0;
const Jy = function(t, e) {
  I(!0, "Can't turn on custom loggers persistently."), Ts.logLevel = Q.VERBOSE, gi = Ts.log.bind(Ts);
}, Te = function(...t) {
  if (Yc === !0 && (Yc = !1, gi === null && Yy.get("logging_enabled") === !0 && Jy()), gi) {
    const e = Ji.apply(null, t);
    gi(e);
  }
}, Xi = function(t) {
  return function(...e) {
    Te(t, ...e);
  };
}, wa = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + Ji(...t);
  Ts.error(e);
}, sn = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${Ji(...t)}`;
  throw Ts.error(e), new Error(e);
}, Ue = function(...t) {
  const e = "FIREBASE WARNING: " + Ji(...t);
  Ts.warn(e);
}, Xy = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, ml = function(t) {
  return typeof t == "number" && (t !== t || // NaN
  t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY);
}, Zy = function(t) {
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
}, Ls = "[MIN_NAME]", ts = "[MAX_NAME]", ls = function(t, e) {
  if (t === e)
    return 0;
  if (t === Ls || e === ts)
    return -1;
  if (e === Ls || t === ts)
    return 1;
  {
    const n = Qc(t), s = Qc(e);
    return n !== null ? s !== null ? n - s === 0 ? t.length - e.length : n - s : -1 : s !== null ? 1 : t < e ? -1 : 1;
  }
}, eb = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, ii = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + ge(e));
}, gl = function(t) {
  if (typeof t != "object" || t === null)
    return ge(t);
  const e = [];
  for (const s in t)
    e.push(s);
  e.sort();
  let n = "{";
  for (let s = 0; s < e.length; s++)
    s !== 0 && (n += ","), n += ge(e[s]), n += ":", n += gl(t[e[s]]);
  return n += "}", n;
}, Ad = function(t, e) {
  const n = t.length;
  if (n <= e)
    return [t];
  const s = [];
  for (let i = 0; i < n; i += e)
    i + e > n ? s.push(t.substring(i, n)) : s.push(t.substring(i, i + e));
  return s;
};
function ke(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}
const Rd = function(t) {
  I(!ml(t), "Invalid JSON number");
  const e = 11, n = 52, s = (1 << e - 1) - 1;
  let i, r, o, a, l;
  t === 0 ? (r = 0, o = 0, i = 1 / t === -1 / 0 ? 1 : 0) : (i = t < 0, t = Math.abs(t), t >= Math.pow(2, 1 - s) ? (a = Math.min(Math.floor(Math.log(t) / Math.LN2), s), r = a + s, o = Math.round(t * Math.pow(2, n - a) - Math.pow(2, n))) : (r = 0, o = Math.round(t / Math.pow(2, 1 - s - n))));
  const c = [];
  for (l = n; l; l -= 1)
    c.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
  for (l = e; l; l -= 1)
    c.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
  c.push(i ? 1 : 0), c.reverse();
  const h = c.join("");
  let d = "";
  for (l = 0; l < 64; l += 8) {
    let u = parseInt(h.substr(l, 8), 2).toString(16);
    u.length === 1 && (u = "0" + u), d = d + u;
  }
  return d.toLowerCase();
}, tb = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, nb = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function sb(t, e) {
  let n = "Unknown Error";
  t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
  const s = new Error(t + " at " + e._path.toString() + ": " + n);
  return s.code = t.toUpperCase(), s;
}
const ib = new RegExp("^-?(0*)\\d{1,10}$"), rb = -2147483648, ob = 2147483647, Qc = function(t) {
  if (ib.test(t)) {
    const e = Number(t);
    if (e >= rb && e <= ob)
      return e;
  }
  return null;
}, Ys = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw Ue("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, ab = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, vi = function(t, e) {
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
class lb {
  constructor(e, n) {
    this.appCheckProvider = n, this.appName = e.name, ut(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = n?.getImmediate({ optional: !0 }), this.appCheck || n?.get().then((s) => this.appCheck = s);
  }
  getToken(e) {
    if (this.serverAppAppCheckToken) {
      if (e)
        throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
      return Promise.resolve({ token: this.serverAppAppCheckToken });
    }
    return this.appCheck ? this.appCheck.getToken(e) : new Promise((n, s) => {
      setTimeout(() => {
        this.appCheck ? this.getToken(e).then(n, s) : n(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.appCheckProvider?.get().then((n) => n.addTokenListener(e));
  }
  notifyForInvalidToken() {
    Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
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
class cb {
  constructor(e, n, s) {
    this.appName_ = e, this.firebaseOptions_ = n, this.authProvider_ = s, this.auth_ = null, this.auth_ = s.getImmediate({ optional: !0 }), this.auth_ || s.onInit((i) => this.auth_ = i);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((n) => n && n.code === "auth/token-not-initialized" ? (Te("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(n)) : new Promise((n, s) => {
      setTimeout(() => {
        this.auth_ ? this.getToken(e).then(n, s) : n(null);
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
    "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Ue(e);
  }
}
class br {
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
br.OWNER = "owner";
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
const vl = "5", Nd = "v", Pd = "s", xd = "r", Od = "f", Dd = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, Md = "ls", Ld = "p", Ea = "ac", $d = "websocket", Fd = "long_polling";
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
class Ud {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, s, i, r = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = s, this.webSocketOnly = i, this.nodeAdmin = r, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = Bn.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && Bn.set("host:" + this._host, this.internalHost));
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
function ub(t) {
  return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams;
}
function jd(t, e, n) {
  I(typeof e == "string", "typeof type must == string"), I(typeof n == "object", "typeof params must == object");
  let s;
  if (e === $d)
    s = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === Fd)
    s = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  ub(t) && (n.ns = t.namespace);
  const i = [];
  return ke(n, (r, o) => {
    i.push(r + "=" + o);
  }), s + i.join("&");
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
class hb {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Wt(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += n;
  }
  get() {
    return G_(this.counters_);
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
const Vo = {}, qo = {};
function yl(t) {
  const e = t.toString();
  return Vo[e] || (Vo[e] = new hb()), Vo[e];
}
function db(t, e) {
  const n = t.toString();
  return qo[n] || (qo[n] = e()), qo[n];
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
class fb {
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
      const s = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < s.length; ++i)
        s[i] && Ys(() => {
          this.onMessage_(s[i]);
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
const Jc = "start", pb = "close", _b = "pLPCommand", mb = "pRTLPCB", Wd = "id", zd = "pw", Hd = "ser", gb = "cb", vb = "seg", yb = "ts", bb = "d", wb = "dframe", Bd = 1870, Vd = 30, Eb = Bd - Vd, Ib = 25e3, Cb = 3e4;
class ys {
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
  constructor(e, n, s, i, r, o, a) {
    this.connId = e, this.repoInfo = n, this.applicationId = s, this.appCheckToken = i, this.authToken = r, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Xi(e), this.stats_ = yl(n), this.urlFn = (l) => (this.appCheckToken && (l[Ea] = this.appCheckToken), jd(n, Fd, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new fb(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(Cb)), Zy(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new bl((...r) => {
        const [o, a, l, c, h] = r;
        if (this.incrementIncomingBytes_(r), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === Jc)
            this.id = a, this.password = l;
          else if (o === pb)
            a ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(a, () => {
              this.onClosed_();
            })) : this.onClosed_();
          else
            throw new Error("Unrecognized command received: " + o);
      }, (...r) => {
        const [o, a] = r;
        this.incrementIncomingBytes_(r), this.myPacketOrderer.handleResponse(o, a);
      }, () => {
        this.onClosed_();
      }, this.urlFn);
      const s = {};
      s[Jc] = "t", s[Hd] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (s[gb] = this.scriptTagHolder.uniqueCallbackIdentifier), s[Nd] = vl, this.transportSessionId && (s[Pd] = this.transportSessionId), this.lastSessionId && (s[Md] = this.lastSessionId), this.applicationId && (s[Ld] = this.applicationId), this.appCheckToken && (s[Ea] = this.appCheckToken), typeof location < "u" && location.hostname && Dd.test(location.hostname) && (s[xd] = Od);
      const i = this.urlFn(s);
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
    ys.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    ys.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return ys.forceAllow_ ? !0 : !ys.forceDisallow_ && typeof document < "u" && document.createElement != null && !tb() && !nb();
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
    const n = ge(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const s = Nh(n), i = Ad(s, Eb);
    for (let r = 0; r < i.length; r++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[r]), this.curSegmentNum++;
  }
  /**
   * This is how we notify the server that we're leaving.
   * We aren't able to send requests with DHTML on a window close event, but we can
   * trigger XHR requests in some browsers (everything but Opera basically).
   */
  addDisconnectPingFrame(e, n) {
    this.myDisconnFrame = document.createElement("iframe");
    const s = {};
    s[wb] = "t", s[Wd] = e, s[zd] = n, this.myDisconnFrame.src = this.urlFn(s), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = ge(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class bl {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, s, i) {
    this.onDisconnect = s, this.urlFn = i, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = Qy(), window[_b + this.uniqueCallbackIdentifier] = e, window[mb + this.uniqueCallbackIdentifier] = n, this.myIFrame = bl.createIFrame_();
      let r = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (r = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + r + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        Te("frame writing exception"), a.stack && Te(a.stack), Te(a);
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
        e.contentWindow.document || Te("No IE domain setting required");
      } catch {
        const s = document.domain;
        e.src = "javascript:void((function(){document.open();document.domain='" + s + "';document.close();})())";
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
      e[Wd] = this.myID, e[zd] = this.myPW, e[Hd] = this.currentSerial;
      let n = this.urlFn(e), s = "", i = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + Vd + s.length <= Bd; ) {
        const o = this.pendingSegs.shift();
        s = s + "&" + vb + i + "=" + o.seg + "&" + yb + i + "=" + o.ts + "&" + bb + i + "=" + o.d, i++;
      }
      return n = n + s, this.addLongPollTag_(n, this.currentSerial), !0;
    } else
      return !1;
  }
  /**
   * Queue a packet for transmission to the server.
   * @param segnum - A sequential id for this packet segment used for reassembly
   * @param totalsegs - The total number of segments in this packet
   * @param data - The data for this segment.
   */
  enqueueSegment(e, n, s) {
    this.pendingSegs.push({ seg: e, ts: n, d: s }), this.alive && this.newRequest_();
  }
  /**
   * Add a script tag for a regular long-poll request.
   * @param url - The URL of the script tag.
   * @param serial - The serial number of the request.
   */
  addLongPollTag_(e, n) {
    this.outstandingRequests.add(n);
    const s = () => {
      this.outstandingRequests.delete(n), this.newRequest_();
    }, i = setTimeout(s, Math.floor(Ib)), r = () => {
      clearTimeout(i), s();
    };
    this.addTag(e, r);
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
        const s = this.myIFrame.doc.createElement("script");
        s.type = "text/javascript", s.async = !0, s.src = e, s.onload = s.onreadystatechange = function() {
          const i = s.readyState;
          (!i || i === "loaded" || i === "complete") && (s.onload = s.onreadystatechange = null, s.parentNode && s.parentNode.removeChild(s), n());
        }, s.onerror = () => {
          Te("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
        }, this.myIFrame.doc.body.appendChild(s);
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
const Tb = 16384, Sb = 45e3;
let Fr = null;
typeof MozWebSocket < "u" ? Fr = MozWebSocket : typeof WebSocket < "u" && (Fr = WebSocket);
class Et {
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
  constructor(e, n, s, i, r, o, a) {
    this.connId = e, this.applicationId = s, this.appCheckToken = i, this.authToken = r, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Xi(this.connId), this.stats_ = yl(n), this.connURL = Et.connectionURL_(n, o, a, i, s), this.nodeAdmin = n.nodeAdmin;
  }
  /**
   * @param repoInfo - The info for the websocket endpoint.
   * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId - Optional lastSessionId if there was a previous connection
   * @returns connection url
   */
  static connectionURL_(e, n, s, i, r) {
    const o = {};
    return o[Nd] = vl, typeof location < "u" && location.hostname && Dd.test(location.hostname) && (o[xd] = Od), n && (o[Pd] = n), s && (o[Md] = s), i && (o[Ea] = i), r && (o[Ld] = r), jd(e, $d, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, Bn.set("previous_websocket_failure", !0);
    try {
      let s;
      om(), this.mySock = new Fr(this.connURL, [], s);
    } catch (s) {
      this.log_("Error instantiating WebSocket.");
      const i = s.message || s.data;
      i && this.log_(i), this.onClosed_();
      return;
    }
    this.mySock.onopen = () => {
      this.log_("Websocket connected."), this.everConnected_ = !0;
    }, this.mySock.onclose = () => {
      this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_();
    }, this.mySock.onmessage = (s) => {
      this.handleIncomingFrame(s);
    }, this.mySock.onerror = (s) => {
      this.log_("WebSocket error.  Closing connection.");
      const i = s.message || s.data;
      i && this.log_(i), this.onClosed_();
    };
  }
  /**
   * No-op for websockets, we don't need to do anything once the connection is confirmed as open
   */
  start() {
  }
  static forceDisallow() {
    Et.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, s = navigator.userAgent.match(n);
      s && s.length > 1 && parseFloat(s[1]) < 4.4 && (e = !0);
    }
    return !e && Fr !== null && !Et.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return Bn.isInMemoryStorage || Bn.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    Bn.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const s = ki(n);
      this.onMessage(s);
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
    if (I(this.frames === null, "We already have a frame buffer"), e.length <= 6) {
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
      const s = this.extractFrameCount_(n);
      s !== null && this.appendFrame_(s);
    }
  }
  /**
   * Send a message to the server
   * @param data - The JSON object to transmit
   */
  send(e) {
    this.resetKeepAlive();
    const n = ge(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const s = Ad(n, Tb);
    s.length > 1 && this.sendString_(String(s.length));
    for (let i = 0; i < s.length; i++)
      this.sendString_(s[i]);
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
    }, Math.floor(Sb));
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
Et.responsesRequiredToBeHealthy = 2;
Et.healthyTimeout = 3e4;
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
class Ni {
  static get ALL_TRANSPORTS() {
    return [ys, Et];
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
    const n = Et && Et.isAvailable();
    let s = n && !Et.previouslyFailed();
    if (e.webSocketOnly && (n || Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), s = !0), s)
      this.transports_ = [Et];
    else {
      const i = this.transports_ = [];
      for (const r of Ni.ALL_TRANSPORTS)
        r && r.isAvailable() && i.push(r);
      Ni.globalTransportInitialized_ = !0;
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
Ni.globalTransportInitialized_ = !1;
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
const kb = 6e4, Ab = 5e3, Rb = 10 * 1024, Nb = 100 * 1024, Go = "t", Xc = "d", Pb = "s", Zc = "r", xb = "e", eu = "o", tu = "a", nu = "n", su = "p", Ob = "h";
class Db {
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
  constructor(e, n, s, i, r, o, a, l, c, h) {
    this.id = e, this.repoInfo_ = n, this.applicationId_ = s, this.appCheckToken_ = i, this.authToken_ = r, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = h, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Xi("c:" + this.id + ":"), this.transportManager_ = new Ni(n), this.log_("Connection created"), this.start_();
  }
  /**
   * Starts a connection attempt
   */
  start_() {
    const e = this.transportManager_.initialTransport();
    this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.conn_), s = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(() => {
      this.conn_ && this.conn_.open(n, s);
    }, Math.floor(0));
    const i = e.healthyTimeout || 0;
    i > 0 && (this.healthyTimeout_ = vi(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > Nb ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > Rb ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
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
    if (Go in e) {
      const n = e[Go];
      n === tu ? this.upgradeIfSecondaryHealthy_() : n === Zc ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === eu && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = ii("t", e), s = ii("d", e);
    if (n === "c")
      this.onSecondaryControl_(s);
    else if (n === "d")
      this.pendingDataMessages.push(s);
    else
      throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: su, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: tu, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: nu, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = ii("t", e), s = ii("d", e);
    n === "c" ? this.onControl_(s) : n === "d" && this.onDataMessage_(s);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = ii(Go, e);
    if (Xc in e) {
      const s = e[Xc];
      if (n === Ob) {
        const i = {
          ...s
        };
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host), this.onHandshake_(i);
      } else if (n === nu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === Pb ? this.onConnectionShutdown_(s) : n === Zc ? this.onReset_(s) : n === xb ? wa("Server Error: " + s) : n === eu ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : wa("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, s = e.v, i = e.h;
    this.sessionId = e.s, this.repoInfo_.host = i, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), vl !== s && Ue("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), s = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, s), vi(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(kb));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : vi(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(Ab));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: su, d: {} } }));
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (Bn.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class qd {
  put(e, n, s, i) {
  }
  merge(e, n, s, i) {
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
  onDisconnectPut(e, n, s) {
  }
  onDisconnectMerge(e, n, s) {
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
class Gd {
  constructor(e) {
    this.allowedEvents_ = e, this.listeners_ = {}, I(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  /**
   * To be called by derived classes to trigger events.
   */
  trigger(e, ...n) {
    if (Array.isArray(this.listeners_[e])) {
      const s = [...this.listeners_[e]];
      for (let i = 0; i < s.length; i++)
        s[i].callback.apply(s[i].context, n);
    }
  }
  on(e, n, s) {
    this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({ callback: n, context: s });
    const i = this.getInitialEvent(e);
    i && n.apply(s, i);
  }
  off(e, n, s) {
    this.validateEventType_(e);
    const i = this.listeners_[e] || [];
    for (let r = 0; r < i.length; r++)
      if (i[r].callback === n && (!s || s === i[r].context)) {
        i.splice(r, 1);
        return;
      }
  }
  validateEventType_(e) {
    I(this.allowedEvents_.find((n) => n === e), "Unknown event: " + e);
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
class Ur extends Gd {
  static getInstance() {
    return new Ur();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !il() && (window.addEventListener("online", () => {
      this.online_ || (this.online_ = !0, this.trigger("online", !0));
    }, !1), window.addEventListener("offline", () => {
      this.online_ && (this.online_ = !1, this.trigger("online", !1));
    }, !1));
  }
  getInitialEvent(e) {
    return I(e === "online", "Unknown event type: " + e), [this.online_];
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
const iu = 32, ru = 768;
class J {
  /**
   * @param pathOrString - Path string to parse, or another path, or the raw
   * tokens array
   */
  constructor(e, n) {
    if (n === void 0) {
      this.pieces_ = e.split("/");
      let s = 0;
      for (let i = 0; i < this.pieces_.length; i++)
        this.pieces_[i].length > 0 && (this.pieces_[s] = this.pieces_[i], s++);
      this.pieces_.length = s, this.pieceNum_ = 0;
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
function K() {
  return new J("");
}
function j(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function kn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function ee(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new J(t.pieces_, e);
}
function wl(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function Mb(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Pi(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function Kd(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new J(e, 0);
}
function le(t, e) {
  const n = [];
  for (let s = t.pieceNum_; s < t.pieces_.length; s++)
    n.push(t.pieces_[s]);
  if (e instanceof J)
    for (let s = e.pieceNum_; s < e.pieces_.length; s++)
      n.push(e.pieces_[s]);
  else {
    const s = e.split("/");
    for (let i = 0; i < s.length; i++)
      s[i].length > 0 && n.push(s[i]);
  }
  return new J(n, 0);
}
function z(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Fe(t, e) {
  const n = j(t), s = j(e);
  if (n === null)
    return e;
  if (n === s)
    return Fe(ee(t), ee(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function Lb(t, e) {
  const n = Pi(t, 0), s = Pi(e, 0);
  for (let i = 0; i < n.length && i < s.length; i++) {
    const r = ls(n[i], s[i]);
    if (r !== 0)
      return r;
  }
  return n.length === s.length ? 0 : n.length < s.length ? -1 : 1;
}
function El(t, e) {
  if (kn(t) !== kn(e))
    return !1;
  for (let n = t.pieceNum_, s = e.pieceNum_; n <= t.pieces_.length; n++, s++)
    if (t.pieces_[n] !== e.pieces_[s])
      return !1;
  return !0;
}
function ht(t, e) {
  let n = t.pieceNum_, s = e.pieceNum_;
  if (kn(t) > kn(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[s])
      return !1;
    ++n, ++s;
  }
  return !0;
}
class $b {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = Pi(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let s = 0; s < this.parts_.length; s++)
      this.byteLength_ += uo(this.parts_[s]);
    Yd(this);
  }
}
function Fb(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += uo(e), Yd(t);
}
function Ub(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= uo(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function Yd(t) {
  if (t.byteLength_ > ru)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + ru + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > iu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + iu + ") or object contains a cycle " + zn(t));
}
function zn(t) {
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
class Il extends Gd {
  static getInstance() {
    return new Il();
  }
  constructor() {
    super(["visible"]);
    let e, n;
    typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (n = "visibilitychange", e = "hidden") : typeof document.mozHidden < "u" ? (n = "mozvisibilitychange", e = "mozHidden") : typeof document.msHidden < "u" ? (n = "msvisibilitychange", e = "msHidden") : typeof document.webkitHidden < "u" && (n = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, n && document.addEventListener(n, () => {
      const s = !document[e];
      s !== this.visible_ && (this.visible_ = s, this.trigger("visible", s));
    }, !1);
  }
  getInitialEvent(e) {
    return I(e === "visible", "Unknown event type: " + e), [this.visible_];
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
const ri = 1e3, jb = 300 * 1e3, ou = 30 * 1e3, Wb = 1.3, zb = 3e4, Hb = "server_kill", au = 3;
class en extends qd {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, s, i, r, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = s, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = r, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = en.nextPersistentConnectionId_++, this.log_ = Xi("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = ri, this.maxReconnectDelay_ = jb, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    Il.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && Ur.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, s) {
    const i = ++this.requestNumber_, r = { r: i, a: e, b: n };
    this.log_(ge(r)), I(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), s && (this.requestCBHash_[i] = s);
  }
  get(e) {
    this.initConnection_();
    const n = new Vi(), i = {
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
    const r = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(r), n.promise;
  }
  listen(e, n, s, i) {
    this.initConnection_();
    const r = e._queryIdentifier, o = e._path.toString();
    this.log_("Listen called for " + o + " " + r), this.listens.has(o) || this.listens.set(o, /* @__PURE__ */ new Map()), I(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), I(!this.listens.get(o).has(r), "listen() called twice for same path/queryId.");
    const a = {
      onComplete: i,
      hashFn: n,
      query: e,
      tag: s
    };
    this.listens.get(o).set(r, a), this.connected_ && this.sendListen_(a);
  }
  sendGet_(e) {
    const n = this.outstandingGets_[e];
    this.sendRequest("g", n.request, (s) => {
      delete this.outstandingGets_[e], this.outstandingGetCount_--, this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []), n.onComplete && n.onComplete(s);
    });
  }
  sendListen_(e) {
    const n = e.query, s = n._path.toString(), i = n._queryIdentifier;
    this.log_("Listen on " + s + " for " + i);
    const r = {
      /*path*/
      p: s
    }, o = "q";
    e.tag && (r.q = n._queryObject, r.t = e.tag), r.h = e.hashFn(), this.sendRequest(o, r, (a) => {
      const l = a.d, c = a.s;
      en.warnOnListenWarnings_(l, n), (this.listens.get(s) && this.listens.get(s).get(i)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(s, i), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Wt(e, "w")) {
      const s = Os(e, "w");
      if (Array.isArray(s) && ~s.indexOf("no_index")) {
        const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"', r = n._path.toString();
        Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(e) {
    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {
    }), this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    (e && e.length === 40 || fm(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = ou);
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
      const e = this.authToken_, n = dm(e) ? "auth" : "gauth", s = { cred: e };
      this.authOverride_ === null ? s.noauth = !0 : typeof this.authOverride_ == "object" && (s.authvar = this.authOverride_), this.sendRequest(n, s, (i) => {
        const r = i.s, o = i.d || "error";
        this.authToken_ === e && (r === "ok" ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(r, o));
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
      const n = e.s, s = e.d || "error";
      n === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(n, s);
    });
  }
  /**
   * @inheritDoc
   */
  unlisten(e, n) {
    const s = e._path.toString(), i = e._queryIdentifier;
    this.log_("Unlisten called for " + s + " " + i), I(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(s, i) && this.connected_ && this.sendUnlisten_(s, i, e._queryObject, n);
  }
  sendUnlisten_(e, n, s, i) {
    this.log_("Unlisten on " + e + " for " + n);
    const r = {
      /*path*/
      p: e
    }, o = "n";
    i && (r.q = s, r.t = i), this.sendRequest(o, r);
  }
  onDisconnectPut(e, n, s) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, n, s) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "o",
      data: n,
      onComplete: s
    });
  }
  onDisconnectMerge(e, n, s) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, n, s) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "om",
      data: n,
      onComplete: s
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
  sendOnDisconnect_(e, n, s, i) {
    const r = {
      /*path*/
      p: n,
      /*data*/
      d: s
    };
    this.log_("onDisconnect " + e, r), this.sendRequest(e, r, (o) => {
      i && setTimeout(() => {
        i(o.s, o.d);
      }, Math.floor(0));
    });
  }
  put(e, n, s, i) {
    this.putInternal("p", e, n, s, i);
  }
  merge(e, n, s, i) {
    this.putInternal("m", e, n, s, i);
  }
  putInternal(e, n, s, i, r) {
    this.initConnection_();
    const o = {
      /*path*/
      p: n,
      /*data*/
      d: s
    };
    r !== void 0 && (o.h = r), this.outstandingPuts_.push({
      action: e,
      request: o,
      onComplete: i
    }), this.outstandingPutCount_++;
    const a = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + n);
  }
  sendPut_(e) {
    const n = this.outstandingPuts_[e].action, s = this.outstandingPuts_[e].request, i = this.outstandingPuts_[e].onComplete;
    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, s, (r) => {
      this.log_(n + " response", r), delete this.outstandingPuts_[e], this.outstandingPutCount_--, this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []), i && i(r.s, r.d);
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
        (s) => {
          if (s.s !== "ok") {
            const r = s.d;
            this.log_("reportStats", "Error sending stats: " + r);
          }
        }
      );
    }
  }
  onDataMessage_(e) {
    if ("r" in e) {
      this.log_("from server: " + ge(e));
      const n = e.r, s = this.requestCBHash_[n];
      s && (delete this.requestCBHash_[n], s(e.b));
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
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : wa("Unrecognized action received from server: " + ge(e) + `
Are you using the latest client?`);
  }
  onReady_(e, n) {
    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (/* @__PURE__ */ new Date()).getTime(), this.handleTimestamp_(e), this.lastSessionId = n, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    I(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null, this.establishConnection_();
    }, Math.floor(e));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = ri, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = ri, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > zb && (this.reconnectDelay_ = ri), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Wb);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), s = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + en.nextConnectionId_++, r = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, s());
      }, c = function(d) {
        I(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(d);
      };
      this.realtime_ = {
        close: l,
        sendRequest: c
      };
      const h = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = !1;
      try {
        const [d, u] = await Promise.all([
          this.authTokenProvider_.getToken(h),
          this.appCheckTokenProvider_.getToken(h)
        ]);
        o ? Te("getToken() completed but was canceled") : (Te("getToken() completed. Creating connection."), this.authToken_ = d && d.accessToken, this.appCheckToken_ = u && u.token, a = new Db(
          i,
          this.repoInfo_,
          this.applicationId_,
          this.appCheckToken_,
          this.authToken_,
          e,
          n,
          s,
          /* onKill= */
          (f) => {
            Ue(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(Hb);
          },
          r
        ));
      } catch (d) {
        this.log_("Failed to get token: " + d), o || (this.repoInfo_.nodeAdmin && Ue(d), l());
      }
    }
  }
  interrupt(e) {
    Te("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    Te("Resuming connection for reason: " + e), delete this.interruptReasons_[e], ha(this.interruptReasons_) && (this.reconnectDelay_ = ri, this.realtime_ || this.scheduleConnect_(0));
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
    let s;
    n ? s = n.map((r) => gl(r)).join("$") : s = "default";
    const i = this.removeListen_(e, s);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const s = new J(e).toString();
    let i;
    if (this.listens.has(s)) {
      const r = this.listens.get(s);
      i = r.get(n), r.delete(n), r.size === 0 && this.listens.delete(s);
    } else
      i = void 0;
    return i;
  }
  onAuthRevoked_(e, n) {
    Te("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= au && (this.reconnectDelay_ = ou, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    Te("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= au && this.appCheckTokenProvider_.notifyForInvalidToken());
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
    e["sdk." + n + "." + Td.replace(/\./g, "-")] = 1, il() ? e["framework.cordova"] = 1 : $h() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = Ur.getInstance().currentlyOnline();
    return ha(this.interruptReasons_) && e;
  }
}
en.nextPersistentConnectionId_ = 0;
en.nextConnectionId_ = 0;
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
class W {
  constructor(e, n) {
    this.name = e, this.node = n;
  }
  static Wrap(e, n) {
    return new W(e, n);
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
class _o {
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
    const s = new W(Ls, e), i = new W(Ls, n);
    return this.compare(s, i) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return W.MIN;
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
let hr;
class Qd extends _o {
  static get __EMPTY_NODE() {
    return hr;
  }
  static set __EMPTY_NODE(e) {
    hr = e;
  }
  compare(e, n) {
    return ls(e.name, n.name);
  }
  isDefinedOn(e) {
    throw Bs("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return W.MIN;
  }
  maxPost() {
    return new W(ts, hr);
  }
  makePost(e, n) {
    return I(typeof e == "string", "KeyIndex indexValue must always be a string."), new W(e, hr);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const Ss = new Qd();
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
class dr {
  /**
   * @param node - Node to iterate.
   * @param isReverse_ - Whether or not to iterate in reverse
   */
  constructor(e, n, s, i, r = null) {
    this.isReverse_ = i, this.resultGenerator_ = r, this.nodeStack_ = [];
    let o = 1;
    for (; !e.isEmpty(); )
      if (e = e, o = n ? s(e.key, n) : 1, i && (o *= -1), o < 0)
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
class Ee {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, s, i, r) {
    this.key = e, this.value = n, this.color = s ?? Ee.RED, this.left = i ?? qe.EMPTY_NODE, this.right = r ?? qe.EMPTY_NODE;
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
  copy(e, n, s, i, r) {
    return new Ee(e ?? this.key, n ?? this.value, s ?? this.color, i ?? this.left, r ?? this.right);
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
  insert(e, n, s) {
    let i = this;
    const r = s(e, i.key);
    return r < 0 ? i = i.copy(null, null, null, i.left.insert(e, n, s), null) : r === 0 ? i = i.copy(null, n, null, null, null) : i = i.copy(null, null, null, null, i.right.insert(e, n, s)), i.fixUp_();
  }
  /**
   * @returns New tree, with the minimum key removed.
   */
  removeMin_() {
    if (this.left.isEmpty())
      return qe.EMPTY_NODE;
    let e = this;
    return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_();
  }
  /**
   * @param key - The key of the item to remove.
   * @param comparator - Comparator.
   * @returns New tree, with the specified item removed.
   */
  remove(e, n) {
    let s, i;
    if (s = this, n(e, s.key) < 0)
      !s.left.isEmpty() && !s.left.isRed_() && !s.left.left.isRed_() && (s = s.moveRedLeft_()), s = s.copy(null, null, null, s.left.remove(e, n), null);
    else {
      if (s.left.isRed_() && (s = s.rotateRight_()), !s.right.isEmpty() && !s.right.isRed_() && !s.right.left.isRed_() && (s = s.moveRedRight_()), n(e, s.key) === 0) {
        if (s.right.isEmpty())
          return qe.EMPTY_NODE;
        i = s.right.min_(), s = s.copy(i.key, i.value, null, null, s.right.removeMin_());
      }
      s = s.copy(null, null, null, null, s.right.remove(e, n));
    }
    return s.fixUp_();
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
    const e = this.copy(null, null, Ee.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, Ee.RED, this.left.right, null);
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
Ee.RED = !0;
Ee.BLACK = !1;
class Bb {
  /**
   * Returns a copy of the current node.
   *
   * @returns The node copy.
   */
  copy(e, n, s, i, r) {
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
  insert(e, n, s) {
    return new Ee(e, n, null);
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
class qe {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, n = qe.EMPTY_NODE) {
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
    return new qe(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Ee.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new qe(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Ee.BLACK, null, null));
  }
  /**
   * Returns the value of the node with the given key, or null.
   *
   * @param key - The key to look up.
   * @returns The value of the node with the given key, or null if the
   * key doesn't exist.
   */
  get(e) {
    let n, s = this.root_;
    for (; !s.isEmpty(); ) {
      if (n = this.comparator_(e, s.key), n === 0)
        return s.value;
      n < 0 ? s = s.left : n > 0 && (s = s.right);
    }
    return null;
  }
  /**
   * Returns the key of the item *before* the specified key, or null if key is the first item.
   * @param key - The key to find the predecessor of
   * @returns The predecessor key.
   */
  getPredecessorKey(e) {
    let n, s = this.root_, i = null;
    for (; !s.isEmpty(); )
      if (n = this.comparator_(e, s.key), n === 0) {
        if (s.left.isEmpty())
          return i ? i.key : null;
        for (s = s.left; !s.right.isEmpty(); )
          s = s.right;
        return s.key;
      } else n < 0 ? s = s.left : n > 0 && (i = s, s = s.right);
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
    return new dr(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new dr(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new dr(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new dr(this.root_, null, this.comparator_, !0, e);
  }
}
qe.EMPTY_NODE = new Bb();
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
function Vb(t, e) {
  return ls(t.name, e.name);
}
function Cl(t, e) {
  return ls(t, e);
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
let Ia;
function qb(t) {
  Ia = t;
}
const Jd = function(t) {
  return typeof t == "number" ? "number:" + Rd(t) : "string:" + t;
}, Xd = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    I(typeof e == "string" || typeof e == "number" || typeof e == "object" && Wt(e, ".sv"), "Priority must be a string or number.");
  } else
    I(t === Ia || t.isEmpty(), "priority of unexpected type.");
  I(t === Ia || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
let lu;
class we {
  static set __childrenNodeConstructor(e) {
    lu = e;
  }
  static get __childrenNodeConstructor() {
    return lu;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, n = we.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, I(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), Xd(this.priorityNode_);
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
    return new we(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : we.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return z(e) ? this : j(e) === ".priority" ? this.priorityNode_ : we.__childrenNodeConstructor.EMPTY_NODE;
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
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const s = j(e);
    return s === null ? n : n.isEmpty() && s !== ".priority" ? this : (I(s !== ".priority" || kn(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(s, we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e), n)));
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
      this.priorityNode_.isEmpty() || (e += "priority:" + Jd(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Rd(this.value_) : e += this.value_, this.lazyHash_ = kd(e);
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
    return e === we.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof we.__childrenNodeConstructor ? -1 : (I(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, s = typeof this.value_, i = we.VALUE_TYPE_ORDER.indexOf(n), r = we.VALUE_TYPE_ORDER.indexOf(s);
    return I(i >= 0, "Unknown leaf type: " + n), I(r >= 0, "Unknown leaf type: " + s), i === r ? s === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : r - i;
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
we.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
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
let Zd, ef;
function Gb(t) {
  Zd = t;
}
function Kb(t) {
  ef = t;
}
class Yb extends _o {
  compare(e, n) {
    const s = e.node.getPriority(), i = n.node.getPriority(), r = s.compareTo(i);
    return r === 0 ? ls(e.name, n.name) : r;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return W.MIN;
  }
  maxPost() {
    return new W(ts, new we("[PRIORITY-POST]", ef));
  }
  makePost(e, n) {
    const s = Zd(e);
    return new W(n, new we("[PRIORITY-POST]", s));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const ce = new Yb();
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
const Qb = Math.log(2);
class Jb {
  constructor(e) {
    const n = (r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(r) / Qb, 10)
    ), s = (r) => parseInt(Array(r + 1).join("1"), 2);
    this.count = n(e + 1), this.current_ = this.count - 1;
    const i = s(this.count);
    this.bits_ = e + 1 & i;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & 1 << this.current_);
    return this.current_--, e;
  }
}
const jr = function(t, e, n, s) {
  t.sort(e);
  const i = function(l, c) {
    const h = c - l;
    let d, u;
    if (h === 0)
      return null;
    if (h === 1)
      return d = t[l], u = n ? n(d) : d, new Ee(u, d.node, Ee.BLACK, null, null);
    {
      const f = parseInt(h / 2, 10) + l, p = i(l, f), g = i(f + 1, c);
      return d = t[f], u = n ? n(d) : d, new Ee(u, d.node, Ee.BLACK, p, g);
    }
  }, r = function(l) {
    let c = null, h = null, d = t.length;
    const u = function(p, g) {
      const b = d - p, T = d;
      d -= p;
      const C = i(b + 1, T), S = t[b], k = n ? n(S) : S;
      f(new Ee(k, S.node, g, null, C));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (h = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), b = Math.pow(2, l.count - (p + 1));
      g ? u(b, Ee.BLACK) : (u(b, Ee.BLACK), u(b, Ee.RED));
    }
    return h;
  }, o = new Jb(t.length), a = r(o);
  return new qe(s || e, a);
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
let Ko;
const _s = {};
class Kt {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return I(_s && ce, "ChildrenNode.ts has not been loaded"), Ko = Ko || new Kt({ ".priority": _s }, { ".priority": ce }), Ko;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = Os(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof qe ? n : null;
  }
  hasIndex(e) {
    return Wt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    I(e !== Ss, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const s = [];
    let i = !1;
    const r = n.getIterator(W.Wrap);
    let o = r.getNext();
    for (; o; )
      i = i || e.isDefinedOn(o.node), s.push(o), o = r.getNext();
    let a;
    i ? a = jr(s, e.getCompare()) : a = _s;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const h = { ...this.indexes_ };
    return h[l] = a, new Kt(h, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const s = Nr(this.indexes_, (i, r) => {
      const o = Os(this.indexSet_, r);
      if (I(o, "Missing index implementation for " + r), i === _s)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(W.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), jr(a, o.getCompare());
        } else
          return _s;
      else {
        const a = n.get(e.name);
        let l = i;
        return a && (l = l.remove(new W(e.name, a))), l.insert(e, e.node);
      }
    });
    return new Kt(s, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const s = Nr(this.indexes_, (i) => {
      if (i === _s)
        return i;
      {
        const r = n.get(e.name);
        return r ? i.remove(new W(e.name, r)) : i;
      }
    });
    return new Kt(s, this.indexSet_);
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
let oi;
class D {
  static get EMPTY_NODE() {
    return oi || (oi = new D(new qe(Cl), null, Kt.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, s) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = s, this.lazyHash_ = null, this.priorityNode_ && Xd(this.priorityNode_), this.children_.isEmpty() && I(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || oi;
  }
  /** @inheritDoc */
  updatePriority(e) {
    return this.children_.isEmpty() ? this : new D(this.children_, e, this.indexMap_);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    if (e === ".priority")
      return this.getPriority();
    {
      const n = this.children_.get(e);
      return n === null ? oi : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = j(e);
    return n === null ? this : this.getImmediateChild(n).getChild(ee(e));
  }
  /** @inheritDoc */
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, n) {
    if (I(n, "We should always be passing snapshot nodes"), e === ".priority")
      return this.updatePriority(n);
    {
      const s = new W(e, n);
      let i, r;
      n.isEmpty() ? (i = this.children_.remove(e), r = this.indexMap_.removeFromIndexes(s, this.children_)) : (i = this.children_.insert(e, n), r = this.indexMap_.addToIndexes(s, this.children_));
      const o = i.isEmpty() ? oi : this.priorityNode_;
      return new D(i, o, r);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const s = j(e);
    if (s === null)
      return n;
    {
      I(j(e) !== ".priority" || kn(e) === 1, ".priority must be the last token in a path");
      const i = this.getImmediateChild(s).updateChild(ee(e), n);
      return this.updateImmediateChild(s, i);
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
    let s = 0, i = 0, r = !0;
    if (this.forEachChild(ce, (o, a) => {
      n[o] = a.val(e), s++, r && D.INTEGER_REGEXP_.test(o) ? i = Math.max(i, Number(o)) : r = !1;
    }), !e && r && i < 2 * s) {
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
      this.getPriority().isEmpty() || (e += "priority:" + Jd(this.getPriority().val()) + ":"), this.forEachChild(ce, (n, s) => {
        const i = s.hash();
        i !== "" && (e += ":" + n + ":" + i);
      }), this.lazyHash_ = e === "" ? "" : kd(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, s) {
    const i = this.resolveIndex_(s);
    if (i) {
      const r = i.getPredecessorKey(new W(e, n));
      return r ? r.name : null;
    } else
      return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const s = n.minKey();
      return s && s.name;
    } else
      return this.children_.minKey();
  }
  getFirstChild(e) {
    const n = this.getFirstChildName(e);
    return n ? new W(n, this.children_.get(n)) : null;
  }
  /**
   * Given an index, return the key name of the largest value we have, according to that index
   */
  getLastChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const s = n.maxKey();
      return s && s.name;
    } else
      return this.children_.maxKey();
  }
  getLastChild(e) {
    const n = this.getLastChildName(e);
    return n ? new W(n, this.children_.get(n)) : null;
  }
  forEachChild(e, n) {
    const s = this.resolveIndex_(e);
    return s ? s.inorderTraversal((i) => n(i.name, i.node)) : this.children_.inorderTraversal(n);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, n) {
    const s = this.resolveIndex_(n);
    if (s)
      return s.getIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getIteratorFrom(e.name, W.Wrap);
      let r = i.peek();
      for (; r != null && n.compare(r, e) < 0; )
        i.getNext(), r = i.peek();
      return i;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, n) {
    const s = this.resolveIndex_(n);
    if (s)
      return s.getReverseIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getReverseIteratorFrom(e.name, W.Wrap);
      let r = i.peek();
      for (; r != null && n.compare(r, e) > 0; )
        i.getNext(), r = i.peek();
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Zi ? -1 : 0;
  }
  withIndex(e) {
    if (e === Ss || this.indexMap_.hasIndex(e))
      return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new D(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === Ss || this.indexMap_.hasIndex(e);
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
          const s = this.getIterator(ce), i = n.getIterator(ce);
          let r = s.getNext(), o = i.getNext();
          for (; r && o; ) {
            if (r.name !== o.name || !r.node.equals(o.node))
              return !1;
            r = s.getNext(), o = i.getNext();
          }
          return r === null && o === null;
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
    return e === Ss ? null : this.indexMap_.get(e.toString());
  }
}
D.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class Xb extends D {
  constructor() {
    super(new qe(Cl), D.EMPTY_NODE, Kt.Default);
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
    return D.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const Zi = new Xb();
Object.defineProperties(W, {
  MIN: {
    value: new W(Ls, D.EMPTY_NODE)
  },
  MAX: {
    value: new W(ts, Zi)
  }
});
Qd.__EMPTY_NODE = D.EMPTY_NODE;
we.__childrenNodeConstructor = D;
qb(Zi);
Kb(Zi);
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
const Zb = !0;
function me(t, e = null) {
  if (t === null)
    return D.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), I(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new we(n, me(e));
  }
  if (!(t instanceof Array) && Zb) {
    const n = [];
    let s = !1;
    if (ke(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = me(a);
        l.isEmpty() || (s = s || !l.getPriority().isEmpty(), n.push(new W(o, l)));
      }
    }), n.length === 0)
      return D.EMPTY_NODE;
    const r = jr(n, Vb, (o) => o.name, Cl);
    if (s) {
      const o = jr(n, ce.getCompare());
      return new D(r, me(e), new Kt({ ".priority": o }, { ".priority": ce }));
    } else
      return new D(r, me(e), Kt.Default);
  } else {
    let n = D.EMPTY_NODE;
    return ke(t, (s, i) => {
      if (Wt(t, s) && s.substring(0, 1) !== ".") {
        const r = me(i);
        (r.isLeafNode() || !r.isEmpty()) && (n = n.updateImmediateChild(s, r));
      }
    }), n.updatePriority(me(e));
  }
}
Gb(me);
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
class ew extends _o {
  constructor(e) {
    super(), this.indexPath_ = e, I(!z(e) && j(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const s = this.extractChild(e.node), i = this.extractChild(n.node), r = s.compareTo(i);
    return r === 0 ? ls(e.name, n.name) : r;
  }
  makePost(e, n) {
    const s = me(e), i = D.EMPTY_NODE.updateChild(this.indexPath_, s);
    return new W(n, i);
  }
  maxPost() {
    const e = D.EMPTY_NODE.updateChild(this.indexPath_, Zi);
    return new W(ts, e);
  }
  toString() {
    return Pi(this.indexPath_, 0).join("/");
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
class tw extends _o {
  compare(e, n) {
    const s = e.node.compareTo(n.node);
    return s === 0 ? ls(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return W.MIN;
  }
  maxPost() {
    return W.MAX;
  }
  makePost(e, n) {
    const s = me(e);
    return new W(n, s);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const nw = new tw();
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
function tf(t) {
  return { type: "value", snapshotNode: t };
}
function $s(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function xi(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function Oi(t, e, n) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: t,
    oldSnap: n
  };
}
function sw(t, e) {
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
class Tl {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, s, i, r, o) {
    I(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(i).equals(s.getChild(i)) && a.isEmpty() === s.isEmpty() || (o != null && (s.isEmpty() ? e.hasChild(n) ? o.trackChildChange(xi(n, a)) : I(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange($s(n, s)) : o.trackChildChange(Oi(n, s, a))), e.isLeafNode() && s.isEmpty()) ? e : e.updateImmediateChild(n, s).withIndex(this.index_);
  }
  updateFullNode(e, n, s) {
    return s != null && (e.isLeafNode() || e.forEachChild(ce, (i, r) => {
      n.hasChild(i) || s.trackChildChange(xi(i, r));
    }), n.isLeafNode() || n.forEachChild(ce, (i, r) => {
      if (e.hasChild(i)) {
        const o = e.getImmediateChild(i);
        o.equals(r) || s.trackChildChange(Oi(i, r, o));
      } else
        s.trackChildChange($s(i, r));
    })), n.withIndex(this.index_);
  }
  updatePriority(e, n) {
    return e.isEmpty() ? D.EMPTY_NODE : e.updatePriority(n);
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
class Di {
  constructor(e) {
    this.indexedFilter_ = new Tl(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Di.getStartPost_(e), this.endPost_ = Di.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const n = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0, s = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
    return n && s;
  }
  updateChild(e, n, s, i, r, o) {
    return this.matches(new W(n, s)) || (s = D.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, s, i, r, o);
  }
  updateFullNode(e, n, s) {
    n.isLeafNode() && (n = D.EMPTY_NODE);
    let i = n.withIndex(this.index_);
    i = i.updatePriority(D.EMPTY_NODE);
    const r = this;
    return n.forEachChild(ce, (o, a) => {
      r.matches(new W(o, a)) || (i = i.updateImmediateChild(o, D.EMPTY_NODE));
    }), this.indexedFilter_.updateFullNode(e, i, s);
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
class iw {
  constructor(e) {
    this.withinDirectionalStart = (n) => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n), this.withinDirectionalEnd = (n) => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n), this.withinStartPost = (n) => {
      const s = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? s <= 0 : s < 0;
    }, this.withinEndPost = (n) => {
      const s = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? s <= 0 : s < 0;
    }, this.rangedFilter_ = new Di(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, s, i, r, o) {
    return this.rangedFilter_.matches(new W(n, s)) || (s = D.EMPTY_NODE), e.getImmediateChild(n).equals(s) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, s, i, r, o) : this.fullLimitUpdateChild_(e, n, s, r, o);
  }
  updateFullNode(e, n, s) {
    let i;
    if (n.isLeafNode() || n.isEmpty())
      i = D.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
      i = D.EMPTY_NODE.withIndex(this.index_);
      let r;
      this.reverse_ ? r = n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : r = n.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
      let o = 0;
      for (; r.hasNext() && o < this.limit_; ) {
        const a = r.getNext();
        if (this.withinDirectionalStart(a))
          if (this.withinDirectionalEnd(a))
            i = i.updateImmediateChild(a.name, a.node), o++;
          else
            break;
        else continue;
      }
    } else {
      i = n.withIndex(this.index_), i = i.updatePriority(D.EMPTY_NODE);
      let r;
      this.reverse_ ? r = i.getReverseIterator(this.index_) : r = i.getIterator(this.index_);
      let o = 0;
      for (; r.hasNext(); ) {
        const a = r.getNext();
        o < this.limit_ && this.withinDirectionalStart(a) && this.withinDirectionalEnd(a) ? o++ : i = i.updateImmediateChild(a.name, D.EMPTY_NODE);
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, s);
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
  fullLimitUpdateChild_(e, n, s, i, r) {
    let o;
    if (this.reverse_) {
      const d = this.index_.getCompare();
      o = (u, f) => d(f, u);
    } else
      o = this.index_.getCompare();
    const a = e;
    I(a.numChildren() === this.limit_, "");
    const l = new W(n, s), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), h = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const d = a.getImmediateChild(n);
      let u = i.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = i.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (h && !s.isEmpty() && f >= 0)
        return r?.trackChildChange(Oi(n, s, d)), a.updateImmediateChild(n, s);
      {
        r?.trackChildChange(xi(n, d));
        const g = a.updateImmediateChild(n, D.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (r?.trackChildChange($s(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return s.isEmpty() ? e : h && o(c, l) >= 0 ? (r != null && (r.trackChildChange(xi(c.name, c.node)), r.trackChildChange($s(n, s))), a.updateImmediateChild(n, s).updateImmediateChild(c.name, D.EMPTY_NODE)) : e;
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
class Sl {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ce;
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
    return I(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
  }
  /**
   * Only valid to call if hasStart() returns true.
   * Returns the starting key name for the range defined by these query parameters
   */
  getIndexStartName() {
    return I(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Ls;
  }
  hasEnd() {
    return this.endSet_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   */
  getIndexEndValue() {
    return I(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   * Returns the end key name for the range defined by these query parameters
   */
  getIndexEndName() {
    return I(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : ts;
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
    return I(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === ce;
  }
  copy() {
    const e = new Sl();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function rw(t) {
  return t.loadsAllData() ? new Tl(t.getIndex()) : t.hasLimit() ? new iw(t) : new Di(t);
}
function cu(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === ce ? n = "$priority" : t.index_ === nw ? n = "$value" : t.index_ === Ss ? n = "$key" : (I(t.index_ instanceof ew, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = ge(n), t.startSet_) {
    const s = t.startAfterSet_ ? "startAfter" : "startAt";
    e[s] = ge(t.indexStartValue_), t.startNameSet_ && (e[s] += "," + ge(t.indexStartName_));
  }
  if (t.endSet_) {
    const s = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[s] = ge(t.indexEndValue_), t.endNameSet_ && (e[s] += "," + ge(t.indexEndName_));
  }
  return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_), e;
}
function uu(t) {
  const e = {};
  if (t.startSet_ && (e.sp = t.indexStartValue_, t.startNameSet_ && (e.sn = t.indexStartName_), e.sin = !t.startAfterSet_), t.endSet_ && (e.ep = t.indexEndValue_, t.endNameSet_ && (e.en = t.indexEndName_), e.ein = !t.endBeforeSet_), t.limitSet_) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"), e.vf = n;
  }
  return t.index_ !== ce && (e.i = t.index_.toString()), e;
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
class Wr extends qd {
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, n) {
    return n !== void 0 ? "tag$" + n : (I(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString());
  }
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, s, i) {
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = s, this.appCheckTokenProvider_ = i, this.log_ = Xi("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, s, i) {
    const r = e._path.toString();
    this.log_("Listen called for " + r + " " + e._queryIdentifier);
    const o = Wr.getListenId_(e, s), a = {};
    this.listens_[o] = a;
    const l = cu(e._queryParams);
    this.restRequest_(r + ".json", l, (c, h) => {
      let d = h;
      if (c === 404 && (d = null, c = null), c === null && this.onDataUpdate_(
        r,
        d,
        /*isMerge=*/
        !1,
        s
      ), Os(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", i(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const s = Wr.getListenId_(e, n);
    delete this.listens_[s];
  }
  get(e) {
    const n = cu(e._queryParams), s = e._path.toString(), i = new Vi();
    return this.restRequest_(s + ".json", n, (r, o) => {
      let a = o;
      r === 404 && (a = null, r = null), r === null ? (this.onDataUpdate_(
        s,
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
  restRequest_(e, n = {}, s) {
    return n.format = "export", Promise.all([
      this.authTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      ),
      this.appCheckTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      )
    ]).then(([i, r]) => {
      i && i.accessToken && (n.auth = i.accessToken), r && r.token && (n.ac = r.token);
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + qs(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (s && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = ki(a.responseText);
            } catch {
              Ue("Failed to parse JSON response for " + o + ": " + a.responseText);
            }
            s(null, l);
          } else
            a.status !== 401 && a.status !== 404 && Ue("Got unsuccessful REST response for " + o + " Status: " + a.status), s(a.status);
          s = null;
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
class ow {
  constructor() {
    this.rootNode_ = D.EMPTY_NODE;
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
function zr() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function nf(t, e, n) {
  if (z(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const s = j(e);
    t.children.has(s) || t.children.set(s, zr());
    const i = t.children.get(s);
    e = ee(e), nf(i, e, n);
  }
}
function Ca(t, e, n) {
  t.value !== null ? n(e, t.value) : aw(t, (s, i) => {
    const r = new J(e.toString() + "/" + s);
    Ca(i, r, n);
  });
}
function aw(t, e) {
  t.children.forEach((n, s) => {
    e(s, n);
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
class lw {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), n = { ...e };
    return this.last_ && ke(this.last_, (s, i) => {
      n[s] = n[s] - i;
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
const hu = 10 * 1e3, cw = 30 * 1e3, uw = 300 * 1e3;
class hw {
  constructor(e, n) {
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new lw(e);
    const s = hu + (cw - hu) * Math.random();
    vi(this.reportStats_.bind(this), Math.floor(s));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let s = !1;
    ke(e, (i, r) => {
      r > 0 && Wt(this.statsToReport_, i) && (n[i] = r, s = !0);
    }), s && this.server_.reportStats(n), vi(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * uw));
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
var Tt;
(function(t) {
  t[t.OVERWRITE = 0] = "OVERWRITE", t[t.MERGE = 1] = "MERGE", t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
})(Tt || (Tt = {}));
function kl() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function Al() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function Rl(t) {
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
class Hr {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, s) {
    this.path = e, this.affectedTree = n, this.revert = s, this.type = Tt.ACK_USER_WRITE, this.source = kl();
  }
  operationForChild(e) {
    if (z(this.path)) {
      if (this.affectedTree.value != null)
        return I(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new J(e));
        return new Hr(K(), n, this.revert);
      }
    } else return I(j(this.path) === e, "operationForChild called for unrelated child."), new Hr(ee(this.path), this.affectedTree, this.revert);
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
class Mi {
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Tt.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return z(this.path) ? new Mi(this.source, K()) : new Mi(this.source, ee(this.path));
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
class ns {
  constructor(e, n, s) {
    this.source = e, this.path = n, this.snap = s, this.type = Tt.OVERWRITE;
  }
  operationForChild(e) {
    return z(this.path) ? new ns(this.source, K(), this.snap.getImmediateChild(e)) : new ns(this.source, ee(this.path), this.snap);
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
class Fs {
  constructor(e, n, s) {
    this.source = e, this.path = n, this.children = s, this.type = Tt.MERGE;
  }
  operationForChild(e) {
    if (z(this.path)) {
      const n = this.children.subtree(new J(e));
      return n.isEmpty() ? null : n.value ? new ns(this.source, K(), n.value) : new Fs(this.source, K(), n);
    } else
      return I(j(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Fs(this.source, ee(this.path), this.children);
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
class An {
  constructor(e, n, s) {
    this.node_ = e, this.fullyInitialized_ = n, this.filtered_ = s;
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
    if (z(e))
      return this.isFullyInitialized() && !this.filtered_;
    const n = j(e);
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
class dw {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function fw(t, e, n, s) {
  const i = [], r = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && r.push(sw(o.childName, o.snapshotNode));
  }), ai(t, i, "child_removed", e, s, n), ai(t, i, "child_added", e, s, n), ai(t, i, "child_moved", r, s, n), ai(t, i, "child_changed", e, s, n), ai(t, i, "value", e, s, n), i;
}
function ai(t, e, n, s, i, r) {
  const o = s.filter((a) => a.type === n);
  o.sort((a, l) => _w(t, a, l)), o.forEach((a) => {
    const l = pw(t, a, r);
    i.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function pw(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function _w(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw Bs("Should only compare child_ events.");
  const s = new W(e.childName, e.snapshotNode), i = new W(n.childName, n.snapshotNode);
  return t.index_.compare(s, i);
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
function mo(t, e) {
  return { eventCache: t, serverCache: e };
}
function yi(t, e, n, s) {
  return mo(new An(e, n, s), t.serverCache);
}
function sf(t, e, n, s) {
  return mo(t.eventCache, new An(e, n, s));
}
function Br(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function ss(t) {
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
let Yo;
const mw = () => (Yo || (Yo = new qe(eb)), Yo);
class Z {
  static fromObject(e) {
    let n = new Z(null);
    return ke(e, (s, i) => {
      n = n.set(new J(s), i);
    }), n;
  }
  constructor(e, n = mw()) {
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
      return { path: K(), value: this.value };
    if (z(e))
      return null;
    {
      const s = j(e), i = this.children.get(s);
      if (i !== null) {
        const r = i.findRootMostMatchingPathAndValue(ee(e), n);
        return r != null ? { path: le(new J(s), r.path), value: r.value } : null;
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
    if (z(e))
      return this;
    {
      const n = j(e), s = this.children.get(n);
      return s !== null ? s.subtree(ee(e)) : new Z(null);
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
    if (z(e))
      return new Z(n, this.children);
    {
      const s = j(e), r = (this.children.get(s) || new Z(null)).set(ee(e), n), o = this.children.insert(s, r);
      return new Z(this.value, o);
    }
  }
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath - Path to value to remove.
   * @returns Resulting tree.
   */
  remove(e) {
    if (z(e))
      return this.children.isEmpty() ? new Z(null) : new Z(null, this.children);
    {
      const n = j(e), s = this.children.get(n);
      if (s) {
        const i = s.remove(ee(e));
        let r;
        return i.isEmpty() ? r = this.children.remove(n) : r = this.children.insert(n, i), this.value === null && r.isEmpty() ? new Z(null) : new Z(this.value, r);
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
    if (z(e))
      return this.value;
    {
      const n = j(e), s = this.children.get(n);
      return s ? s.get(ee(e)) : null;
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
    if (z(e))
      return n;
    {
      const s = j(e), r = (this.children.get(s) || new Z(null)).setTree(ee(e), n);
      let o;
      return r.isEmpty() ? o = this.children.remove(s) : o = this.children.insert(s, r), new Z(this.value, o);
    }
  }
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */
  fold(e) {
    return this.fold_(K(), e);
  }
  /**
   * Recursive helper for public-facing fold() method
   */
  fold_(e, n) {
    const s = {};
    return this.children.inorderTraversal((i, r) => {
      s[i] = r.fold_(le(e, i), n);
    }), n(e, this.value, s);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, K(), n);
  }
  findOnPath_(e, n, s) {
    const i = this.value ? s(n, this.value) : !1;
    if (i)
      return i;
    if (z(e))
      return null;
    {
      const r = j(e), o = this.children.get(r);
      return o ? o.findOnPath_(ee(e), le(n, r), s) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, K(), n);
  }
  foreachOnPath_(e, n, s) {
    if (z(e))
      return this;
    {
      this.value && s(n, this.value);
      const i = j(e), r = this.children.get(i);
      return r ? r.foreachOnPath_(ee(e), le(n, i), s) : new Z(null);
    }
  }
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f - A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */
  foreach(e) {
    this.foreach_(K(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((s, i) => {
      i.foreach_(le(e, s), n);
    }), this.value && n(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((n, s) => {
      s.value && e(n, s.value);
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
class St {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new St(new Z(null));
  }
}
function bi(t, e, n) {
  if (z(e))
    return new St(new Z(n));
  {
    const s = t.writeTree_.findRootMostValueAndPath(e);
    if (s != null) {
      const i = s.path;
      let r = s.value;
      const o = Fe(i, e);
      return r = r.updateChild(o, n), new St(t.writeTree_.set(i, r));
    } else {
      const i = new Z(n), r = t.writeTree_.setTree(e, i);
      return new St(r);
    }
  }
}
function Ta(t, e, n) {
  let s = t;
  return ke(n, (i, r) => {
    s = bi(s, le(e, i), r);
  }), s;
}
function du(t, e) {
  if (z(e))
    return St.empty();
  {
    const n = t.writeTree_.setTree(e, new Z(null));
    return new St(n);
  }
}
function Sa(t, e) {
  return cs(t, e) != null;
}
function cs(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Fe(n.path, e)) : null;
}
function fu(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(ce, (s, i) => {
    e.push(new W(s, i));
  }) : t.writeTree_.children.inorderTraversal((s, i) => {
    i.value != null && e.push(new W(s, i.value));
  }), e;
}
function Cn(t, e) {
  if (z(e))
    return t;
  {
    const n = cs(t, e);
    return n != null ? new St(new Z(n)) : new St(t.writeTree_.subtree(e));
  }
}
function ka(t) {
  return t.writeTree_.isEmpty();
}
function Us(t, e) {
  return rf(K(), t.writeTree_, e);
}
function rf(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let s = null;
    return e.children.inorderTraversal((i, r) => {
      i === ".priority" ? (I(r.value !== null, "Priority writes must always be leaf nodes"), s = r.value) : n = rf(le(t, i), r, n);
    }), !n.getChild(t).isEmpty() && s !== null && (n = n.updateChild(le(t, ".priority"), s)), n;
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
function go(t, e) {
  return cf(e, t);
}
function gw(t, e, n, s, i) {
  I(s > t.lastWriteId, "Stacking an older write on top of newer ones"), i === void 0 && (i = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: s,
    visible: i
  }), i && (t.visibleWrites = bi(t.visibleWrites, e, n)), t.lastWriteId = s;
}
function vw(t, e, n, s) {
  I(s > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: s,
    visible: !0
  }), t.visibleWrites = Ta(t.visibleWrites, e, n), t.lastWriteId = s;
}
function yw(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const s = t.allWrites[n];
    if (s.writeId === e)
      return s;
  }
  return null;
}
function bw(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  I(n >= 0, "removeWrite called with nonexistent writeId.");
  const s = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let i = s.visible, r = !1, o = t.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && ww(a, s.path) ? i = !1 : ht(s.path, a.path) && (r = !0)), o--;
  }
  if (i) {
    if (r)
      return Ew(t), !0;
    if (s.snap)
      t.visibleWrites = du(t.visibleWrites, s.path);
    else {
      const a = s.children;
      ke(a, (l) => {
        t.visibleWrites = du(t.visibleWrites, le(s.path, l));
      });
    }
    return !0;
  } else return !1;
}
function ww(t, e) {
  if (t.snap)
    return ht(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && ht(le(t.path, n), e))
      return !0;
  return !1;
}
function Ew(t) {
  t.visibleWrites = of(t.allWrites, Iw, K()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function Iw(t) {
  return t.visible;
}
function of(t, e, n) {
  let s = St.empty();
  for (let i = 0; i < t.length; ++i) {
    const r = t[i];
    if (e(r)) {
      const o = r.path;
      let a;
      if (r.snap)
        ht(n, o) ? (a = Fe(n, o), s = bi(s, a, r.snap)) : ht(o, n) && (a = Fe(o, n), s = bi(s, K(), r.snap.getChild(a)));
      else if (r.children) {
        if (ht(n, o))
          a = Fe(n, o), s = Ta(s, a, r.children);
        else if (ht(o, n))
          if (a = Fe(o, n), z(a))
            s = Ta(s, K(), r.children);
          else {
            const l = Os(r.children, j(a));
            if (l) {
              const c = l.getChild(ee(a));
              s = bi(s, K(), c);
            }
          }
      } else
        throw Bs("WriteRecord should have .snap or .children");
    }
  }
  return s;
}
function af(t, e, n, s, i) {
  if (!s && !i) {
    const r = cs(t.visibleWrites, e);
    if (r != null)
      return r;
    {
      const o = Cn(t.visibleWrites, e);
      if (ka(o))
        return n;
      if (n == null && !Sa(o, K()))
        return null;
      {
        const a = n || D.EMPTY_NODE;
        return Us(o, a);
      }
    }
  } else {
    const r = Cn(t.visibleWrites, e);
    if (!i && ka(r))
      return n;
    if (!i && n == null && !Sa(r, K()))
      return null;
    {
      const o = function(c) {
        return (c.visible || i) && (!s || !~s.indexOf(c.writeId)) && (ht(c.path, e) || ht(e, c.path));
      }, a = of(t.allWrites, o, e), l = n || D.EMPTY_NODE;
      return Us(a, l);
    }
  }
}
function Cw(t, e, n) {
  let s = D.EMPTY_NODE;
  const i = cs(t.visibleWrites, e);
  if (i)
    return i.isLeafNode() || i.forEachChild(ce, (r, o) => {
      s = s.updateImmediateChild(r, o);
    }), s;
  if (n) {
    const r = Cn(t.visibleWrites, e);
    return n.forEachChild(ce, (o, a) => {
      const l = Us(Cn(r, new J(o)), a);
      s = s.updateImmediateChild(o, l);
    }), fu(r).forEach((o) => {
      s = s.updateImmediateChild(o.name, o.node);
    }), s;
  } else {
    const r = Cn(t.visibleWrites, e);
    return fu(r).forEach((o) => {
      s = s.updateImmediateChild(o.name, o.node);
    }), s;
  }
}
function Tw(t, e, n, s, i) {
  I(s || i, "Either existingEventSnap or existingServerSnap must exist");
  const r = le(e, n);
  if (Sa(t.visibleWrites, r))
    return null;
  {
    const o = Cn(t.visibleWrites, r);
    return ka(o) ? i.getChild(n) : Us(o, i.getChild(n));
  }
}
function Sw(t, e, n, s) {
  const i = le(e, n), r = cs(t.visibleWrites, i);
  if (r != null)
    return r;
  if (s.isCompleteForChild(n)) {
    const o = Cn(t.visibleWrites, i);
    return Us(o, s.getNode().getImmediateChild(n));
  } else
    return null;
}
function kw(t, e) {
  return cs(t.visibleWrites, e);
}
function Aw(t, e, n, s, i, r, o) {
  let a;
  const l = Cn(t.visibleWrites, e), c = cs(l, K());
  if (c != null)
    a = c;
  else if (n != null)
    a = Us(l, n);
  else
    return [];
  if (a = a.withIndex(o), !a.isEmpty() && !a.isLeafNode()) {
    const h = [], d = o.getCompare(), u = r ? a.getReverseIteratorFrom(s, o) : a.getIteratorFrom(s, o);
    let f = u.getNext();
    for (; f && h.length < i; )
      d(f, s) !== 0 && h.push(f), f = u.getNext();
    return h;
  } else
    return [];
}
function Rw() {
  return {
    visibleWrites: St.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function Vr(t, e, n, s) {
  return af(t.writeTree, t.treePath, e, n, s);
}
function Nl(t, e) {
  return Cw(t.writeTree, t.treePath, e);
}
function pu(t, e, n, s) {
  return Tw(t.writeTree, t.treePath, e, n, s);
}
function qr(t, e) {
  return kw(t.writeTree, le(t.treePath, e));
}
function Nw(t, e, n, s, i, r) {
  return Aw(t.writeTree, t.treePath, e, n, s, i, r);
}
function Pl(t, e, n) {
  return Sw(t.writeTree, t.treePath, e, n);
}
function lf(t, e) {
  return cf(le(t.treePath, e), t.writeTree);
}
function cf(t, e) {
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
class Pw {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(e) {
    const n = e.type, s = e.childName;
    I(n === "child_added" || n === "child_changed" || n === "child_removed", "Only child changes supported for tracking"), I(s !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(s);
    if (i) {
      const r = i.type;
      if (n === "child_added" && r === "child_removed")
        this.changeMap.set(s, Oi(s, e.snapshotNode, i.snapshotNode));
      else if (n === "child_removed" && r === "child_added")
        this.changeMap.delete(s);
      else if (n === "child_removed" && r === "child_changed")
        this.changeMap.set(s, xi(s, i.oldSnap));
      else if (n === "child_changed" && r === "child_added")
        this.changeMap.set(s, $s(s, e.snapshotNode));
      else if (n === "child_changed" && r === "child_changed")
        this.changeMap.set(s, Oi(s, e.snapshotNode, i.oldSnap));
      else
        throw Bs("Illegal combination of changes: " + e + " occurred after " + i);
    } else
      this.changeMap.set(s, e);
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
class xw {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, s) {
    return null;
  }
}
const uf = new xw();
class xl {
  constructor(e, n, s = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = s;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const s = this.optCompleteServerCache_ != null ? new An(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return Pl(this.writes_, e, s);
    }
  }
  getChildAfterChild(e, n, s) {
    const i = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : ss(this.viewCache_), r = Nw(this.writes_, i, n, 1, s, e);
    return r.length === 0 ? null : r[0];
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
function Ow(t) {
  return { filter: t };
}
function Dw(t, e) {
  I(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), I(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function Mw(t, e, n, s, i) {
  const r = new Pw();
  let o, a;
  if (n.type === Tt.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = Aa(t, e, c.path, c.snap, s, i, r) : (I(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !z(c.path), o = Gr(t, e, c.path, c.snap, s, i, a, r));
  } else if (n.type === Tt.MERGE) {
    const c = n;
    c.source.fromUser ? o = $w(t, e, c.path, c.children, s, i, r) : (I(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = Ra(t, e, c.path, c.children, s, i, a, r));
  } else if (n.type === Tt.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = jw(t, e, c.path, s, i, r) : o = Fw(t, e, c.path, c.affectedTree, s, i, r);
  } else if (n.type === Tt.LISTEN_COMPLETE)
    o = Uw(t, e, n.path, s, r);
  else
    throw Bs("Unknown operation type: " + n.type);
  const l = r.getChanges();
  return Lw(e, o, l), { viewCache: o, changes: l };
}
function Lw(t, e, n) {
  const s = e.eventCache;
  if (s.isFullyInitialized()) {
    const i = s.getNode().isLeafNode() || s.getNode().isEmpty(), r = Br(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || i && !s.getNode().equals(r) || !s.getNode().getPriority().equals(r.getPriority())) && n.push(tf(Br(e)));
  }
}
function hf(t, e, n, s, i, r) {
  const o = e.eventCache;
  if (qr(s, n) != null)
    return e;
  {
    let a, l;
    if (z(n))
      if (I(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = ss(e), h = c instanceof D ? c : D.EMPTY_NODE, d = Nl(s, h);
        a = t.filter.updateFullNode(e.eventCache.getNode(), d, r);
      } else {
        const c = Vr(s, ss(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, r);
      }
    else {
      const c = j(n);
      if (c === ".priority") {
        I(kn(n) === 1, "Can't have a priority with additional path components");
        const h = o.getNode();
        l = e.serverCache.getNode();
        const d = pu(s, n, h, l);
        d != null ? a = t.filter.updatePriority(h, d) : a = o.getNode();
      } else {
        const h = ee(n);
        let d;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = pu(s, n, o.getNode(), l);
          u != null ? d = o.getNode().getImmediateChild(c).updateChild(h, u) : d = o.getNode().getImmediateChild(c);
        } else
          d = Pl(s, c, e.serverCache);
        d != null ? a = t.filter.updateChild(o.getNode(), c, d, h, i, r) : a = o.getNode();
      }
    }
    return yi(e, a, o.isFullyInitialized() || z(n), t.filter.filtersNodes());
  }
}
function Gr(t, e, n, s, i, r, o, a) {
  const l = e.serverCache;
  let c;
  const h = o ? t.filter : t.filter.getIndexedFilter();
  if (z(n))
    c = h.updateFullNode(l.getNode(), s, null);
  else if (h.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, s);
    c = h.updateFullNode(l.getNode(), f, null);
  } else {
    const f = j(n);
    if (!l.isCompleteForPath(n) && kn(n) > 1)
      return e;
    const p = ee(n), b = l.getNode().getImmediateChild(f).updateChild(p, s);
    f === ".priority" ? c = h.updatePriority(l.getNode(), b) : c = h.updateChild(l.getNode(), f, b, p, uf, null);
  }
  const d = sf(e, c, l.isFullyInitialized() || z(n), h.filtersNodes()), u = new xl(i, d, r);
  return hf(t, d, n, i, u, a);
}
function Aa(t, e, n, s, i, r, o) {
  const a = e.eventCache;
  let l, c;
  const h = new xl(i, e, r);
  if (z(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), s, o), l = yi(e, c, !0, t.filter.filtersNodes());
  else {
    const d = j(n);
    if (d === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), s), l = yi(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = ee(n), f = a.getNode().getImmediateChild(d);
      let p;
      if (z(u))
        p = s;
      else {
        const g = h.getCompleteChild(d);
        g != null ? wl(u) === ".priority" && g.getChild(Kd(u)).isEmpty() ? p = g : p = g.updateChild(u, s) : p = D.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), d, p, u, h, o);
        l = yi(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function _u(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function $w(t, e, n, s, i, r, o) {
  let a = e;
  return s.foreach((l, c) => {
    const h = le(n, l);
    _u(e, j(h)) && (a = Aa(t, a, h, c, i, r, o));
  }), s.foreach((l, c) => {
    const h = le(n, l);
    _u(e, j(h)) || (a = Aa(t, a, h, c, i, r, o));
  }), a;
}
function mu(t, e, n) {
  return n.foreach((s, i) => {
    e = e.updateChild(s, i);
  }), e;
}
function Ra(t, e, n, s, i, r, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  z(n) ? c = s : c = new Z(null).setTree(n, s);
  const h = e.serverCache.getNode();
  return c.children.inorderTraversal((d, u) => {
    if (h.hasChild(d)) {
      const f = e.serverCache.getNode().getImmediateChild(d), p = mu(t, f, u);
      l = Gr(t, l, new J(d), p, i, r, o, a);
    }
  }), c.children.inorderTraversal((d, u) => {
    const f = !e.serverCache.isCompleteForChild(d) && u.value === null;
    if (!h.hasChild(d) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(d), g = mu(t, p, u);
      l = Gr(t, l, new J(d), g, i, r, o, a);
    }
  }), l;
}
function Fw(t, e, n, s, i, r, o) {
  if (qr(i, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (s.value != null) {
    if (z(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return Gr(t, e, n, l.getNode().getChild(n), i, r, a, o);
    if (z(n)) {
      let c = new Z(null);
      return l.getNode().forEachChild(Ss, (h, d) => {
        c = c.set(new J(h), d);
      }), Ra(t, e, n, c, i, r, a, o);
    } else
      return e;
  } else {
    let c = new Z(null);
    return s.foreach((h, d) => {
      const u = le(n, h);
      l.isCompleteForPath(u) && (c = c.set(h, l.getNode().getChild(u)));
    }), Ra(t, e, n, c, i, r, a, o);
  }
}
function Uw(t, e, n, s, i) {
  const r = e.serverCache, o = sf(e, r.getNode(), r.isFullyInitialized() || z(n), r.isFiltered());
  return hf(t, o, n, s, uf, i);
}
function jw(t, e, n, s, i, r) {
  let o;
  if (qr(s, n) != null)
    return e;
  {
    const a = new xl(s, e, i), l = e.eventCache.getNode();
    let c;
    if (z(n) || j(n) === ".priority") {
      let h;
      if (e.serverCache.isFullyInitialized())
        h = Vr(s, ss(e));
      else {
        const d = e.serverCache.getNode();
        I(d instanceof D, "serverChildren would be complete if leaf node"), h = Nl(s, d);
      }
      h = h, c = t.filter.updateFullNode(l, h, r);
    } else {
      const h = j(n);
      let d = Pl(s, h, e.serverCache);
      d == null && e.serverCache.isCompleteForChild(h) && (d = l.getImmediateChild(h)), d != null ? c = t.filter.updateChild(l, h, d, ee(n), a, r) : e.eventCache.getNode().hasChild(h) ? c = t.filter.updateChild(l, h, D.EMPTY_NODE, ee(n), a, r) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = Vr(s, ss(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, r)));
    }
    return o = e.serverCache.isFullyInitialized() || qr(s, K()) != null, yi(e, c, o, t.filter.filtersNodes());
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
class Ww {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const s = this.query_._queryParams, i = new Tl(s.getIndex()), r = rw(s);
    this.processor_ = Ow(r);
    const o = n.serverCache, a = n.eventCache, l = i.updateFullNode(D.EMPTY_NODE, o.getNode(), null), c = r.updateFullNode(D.EMPTY_NODE, a.getNode(), null), h = new An(l, o.isFullyInitialized(), i.filtersNodes()), d = new An(c, a.isFullyInitialized(), r.filtersNodes());
    this.viewCache_ = mo(d, h), this.eventGenerator_ = new dw(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function zw(t) {
  return t.viewCache_.serverCache.getNode();
}
function Hw(t) {
  return Br(t.viewCache_);
}
function Bw(t, e) {
  const n = ss(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !z(e) && !n.getImmediateChild(j(e)).isEmpty()) ? n.getChild(e) : null;
}
function gu(t) {
  return t.eventRegistrations_.length === 0;
}
function Vw(t, e) {
  t.eventRegistrations_.push(e);
}
function vu(t, e, n) {
  const s = [];
  if (n) {
    I(e == null, "A cancel should cancel all event registrations.");
    const i = t.query._path;
    t.eventRegistrations_.forEach((r) => {
      const o = r.createCancelEvent(n, i);
      o && s.push(o);
    });
  }
  if (e) {
    let i = [];
    for (let r = 0; r < t.eventRegistrations_.length; ++r) {
      const o = t.eventRegistrations_[r];
      if (!o.matches(e))
        i.push(o);
      else if (e.hasAnyCallback()) {
        i = i.concat(t.eventRegistrations_.slice(r + 1));
        break;
      }
    }
    t.eventRegistrations_ = i;
  } else
    t.eventRegistrations_ = [];
  return s;
}
function yu(t, e, n, s) {
  e.type === Tt.MERGE && e.source.queryId !== null && (I(ss(t.viewCache_), "We should always have a full cache before handling merges"), I(Br(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const i = t.viewCache_, r = Mw(t.processor_, i, e, n, s);
  return Dw(t.processor_, r.viewCache), I(r.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = r.viewCache, df(t, r.changes, r.viewCache.eventCache.getNode(), null);
}
function qw(t, e) {
  const n = t.viewCache_.eventCache, s = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(ce, (r, o) => {
    s.push($s(r, o));
  }), n.isFullyInitialized() && s.push(tf(n.getNode())), df(t, s, n.getNode(), e);
}
function df(t, e, n, s) {
  const i = s ? [s] : t.eventRegistrations_;
  return fw(t.eventGenerator_, e, n, i);
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
let Kr;
class ff {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function Gw(t) {
  I(!Kr, "__referenceConstructor has already been defined"), Kr = t;
}
function Kw() {
  return I(Kr, "Reference.ts has not been loaded"), Kr;
}
function Yw(t) {
  return t.views.size === 0;
}
function Ol(t, e, n, s) {
  const i = e.source.queryId;
  if (i !== null) {
    const r = t.views.get(i);
    return I(r != null, "SyncTree gave us an op for an invalid query."), yu(r, e, n, s);
  } else {
    let r = [];
    for (const o of t.views.values())
      r = r.concat(yu(o, e, n, s));
    return r;
  }
}
function pf(t, e, n, s, i) {
  const r = e._queryIdentifier, o = t.views.get(r);
  if (!o) {
    let a = Vr(n, i ? s : null), l = !1;
    a ? l = !0 : s instanceof D ? (a = Nl(n, s), l = !1) : (a = D.EMPTY_NODE, l = !1);
    const c = mo(new An(a, l, !1), new An(s, i, !1));
    return new Ww(e, c);
  }
  return o;
}
function Qw(t, e, n, s, i, r) {
  const o = pf(t, e, s, i, r);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), Vw(o, n), qw(o, n);
}
function Jw(t, e, n, s) {
  const i = e._queryIdentifier, r = [];
  let o = [];
  const a = Rn(t);
  if (i === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(vu(c, n, s)), gu(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || r.push(c.query));
  else {
    const l = t.views.get(i);
    l && (o = o.concat(vu(l, n, s)), gu(l) && (t.views.delete(i), l.query._queryParams.loadsAllData() || r.push(l.query)));
  }
  return a && !Rn(t) && r.push(new (Kw())(e._repo, e._path)), { removed: r, events: o };
}
function _f(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Tn(t, e) {
  let n = null;
  for (const s of t.views.values())
    n = n || Bw(s, e);
  return n;
}
function mf(t, e) {
  if (e._queryParams.loadsAllData())
    return vo(t);
  {
    const s = e._queryIdentifier;
    return t.views.get(s);
  }
}
function gf(t, e) {
  return mf(t, e) != null;
}
function Rn(t) {
  return vo(t) != null;
}
function vo(t) {
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
let Yr;
function Xw(t) {
  I(!Yr, "__referenceConstructor has already been defined"), Yr = t;
}
function Zw() {
  return I(Yr, "Reference.ts has not been loaded"), Yr;
}
let eE = 1;
class bu {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new Z(null), this.pendingWriteTree_ = Rw(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function vf(t, e, n, s, i) {
  return gw(t.pendingWriteTree_, e, n, s, i), i ? Qs(t, new ns(kl(), e, n)) : [];
}
function tE(t, e, n, s) {
  vw(t.pendingWriteTree_, e, n, s);
  const i = Z.fromObject(n);
  return Qs(t, new Fs(kl(), e, i));
}
function vn(t, e, n = !1) {
  const s = yw(t.pendingWriteTree_, e);
  if (bw(t.pendingWriteTree_, e)) {
    let r = new Z(null);
    return s.snap != null ? r = r.set(K(), !0) : ke(s.children, (o) => {
      r = r.set(new J(o), !0);
    }), Qs(t, new Hr(s.path, r, n));
  } else
    return [];
}
function er(t, e, n) {
  return Qs(t, new ns(Al(), e, n));
}
function nE(t, e, n) {
  const s = Z.fromObject(n);
  return Qs(t, new Fs(Al(), e, s));
}
function sE(t, e) {
  return Qs(t, new Mi(Al(), e));
}
function iE(t, e, n) {
  const s = Ml(t, n);
  if (s) {
    const i = Ll(s), r = i.path, o = i.queryId, a = Fe(r, e), l = new Mi(Rl(o), a);
    return $l(t, r, l);
  } else
    return [];
}
function Qr(t, e, n, s, i = !1) {
  const r = e._path, o = t.syncPointTree_.get(r);
  let a = [];
  if (o && (e._queryIdentifier === "default" || gf(o, e))) {
    const l = Jw(o, e, n, s);
    Yw(o) && (t.syncPointTree_ = t.syncPointTree_.remove(r));
    const c = l.removed;
    if (a = l.events, !i) {
      const h = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, d = t.syncPointTree_.findOnPath(r, (u, f) => Rn(f));
      if (h && !d) {
        const u = t.syncPointTree_.subtree(r);
        if (!u.isEmpty()) {
          const f = aE(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], b = g.query, T = Ef(t, g);
            t.listenProvider_.startListening(wi(b), Li(t, b), T.hashFn, T.onComplete);
          }
        }
      }
      !d && c.length > 0 && !s && (h ? t.listenProvider_.stopListening(wi(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(yo(u));
        t.listenProvider_.stopListening(wi(u), f);
      }));
    }
    lE(t, c);
  }
  return a;
}
function yf(t, e, n, s) {
  const i = Ml(t, s);
  if (i != null) {
    const r = Ll(i), o = r.path, a = r.queryId, l = Fe(o, e), c = new ns(Rl(a), l, n);
    return $l(t, o, c);
  } else
    return [];
}
function rE(t, e, n, s) {
  const i = Ml(t, s);
  if (i) {
    const r = Ll(i), o = r.path, a = r.queryId, l = Fe(o, e), c = Z.fromObject(n), h = new Fs(Rl(a), l, c);
    return $l(t, o, h);
  } else
    return [];
}
function Na(t, e, n, s = !1) {
  const i = e._path;
  let r = null, o = !1;
  t.syncPointTree_.foreachOnPath(i, (u, f) => {
    const p = Fe(u, i);
    r = r || Tn(f, p), o = o || Rn(f);
  });
  let a = t.syncPointTree_.get(i);
  a ? (o = o || Rn(a), r = r || Tn(a, K())) : (a = new ff(), t.syncPointTree_ = t.syncPointTree_.set(i, a));
  let l;
  r != null ? l = !0 : (l = !1, r = D.EMPTY_NODE, t.syncPointTree_.subtree(i).foreachChild((f, p) => {
    const g = Tn(p, K());
    g && (r = r.updateImmediateChild(f, g));
  }));
  const c = gf(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = yo(e);
    I(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = cE();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const h = go(t.pendingWriteTree_, i);
  let d = Qw(a, e, n, h, r, l);
  if (!c && !o && !s) {
    const u = mf(a, e);
    d = d.concat(uE(t, e, u));
  }
  return d;
}
function Dl(t, e, n) {
  const i = t.pendingWriteTree_, r = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = Fe(o, e), c = Tn(a, l);
    if (c)
      return c;
  });
  return af(i, e, r, n, !0);
}
function oE(t, e) {
  const n = e._path;
  let s = null;
  t.syncPointTree_.foreachOnPath(n, (c, h) => {
    const d = Fe(c, n);
    s = s || Tn(h, d);
  });
  let i = t.syncPointTree_.get(n);
  i ? s = s || Tn(i, K()) : (i = new ff(), t.syncPointTree_ = t.syncPointTree_.set(n, i));
  const r = s != null, o = r ? new An(s, !0, !1) : null, a = go(t.pendingWriteTree_, e._path), l = pf(i, e, a, r ? o.getNode() : D.EMPTY_NODE, r);
  return Hw(l);
}
function Qs(t, e) {
  return bf(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    go(t.pendingWriteTree_, K())
  );
}
function bf(t, e, n, s) {
  if (z(t.path))
    return wf(t, e, n, s);
  {
    const i = e.get(K());
    n == null && i != null && (n = Tn(i, K()));
    let r = [];
    const o = j(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, h = lf(s, o);
      r = r.concat(bf(a, l, c, h));
    }
    return i && (r = r.concat(Ol(i, t, s, n))), r;
  }
}
function wf(t, e, n, s) {
  const i = e.get(K());
  n == null && i != null && (n = Tn(i, K()));
  let r = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = lf(s, o), h = t.operationForChild(o);
    h && (r = r.concat(wf(h, a, l, c)));
  }), i && (r = r.concat(Ol(i, t, s, n))), r;
}
function Ef(t, e) {
  const n = e.query, s = Li(t, n);
  return {
    hashFn: () => (zw(e) || D.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok")
        return s ? iE(t, n._path, s) : sE(t, n._path);
      {
        const r = sb(i, n);
        return Qr(
          t,
          n,
          /*eventRegistration*/
          null,
          r
        );
      }
    }
  };
}
function Li(t, e) {
  const n = yo(e);
  return t.queryToTagMap.get(n);
}
function yo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function Ml(t, e) {
  return t.tagToQueryMap.get(e);
}
function Ll(t) {
  const e = t.indexOf("$");
  return I(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new J(t.substr(0, e))
  };
}
function $l(t, e, n) {
  const s = t.syncPointTree_.get(e);
  I(s, "Missing sync point for query tag that we're tracking");
  const i = go(t.pendingWriteTree_, e);
  return Ol(s, n, i, null);
}
function aE(t) {
  return t.fold((e, n, s) => {
    if (n && Rn(n))
      return [vo(n)];
    {
      let i = [];
      return n && (i = _f(n)), ke(s, (r, o) => {
        i = i.concat(o);
      }), i;
    }
  });
}
function wi(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (Zw())(t._repo, t._path) : t;
}
function lE(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const s = e[n];
    if (!s._queryParams.loadsAllData()) {
      const i = yo(s), r = t.queryToTagMap.get(i);
      t.queryToTagMap.delete(i), t.tagToQueryMap.delete(r);
    }
  }
}
function cE() {
  return eE++;
}
function uE(t, e, n) {
  const s = e._path, i = Li(t, e), r = Ef(t, n), o = t.listenProvider_.startListening(wi(e), i, r.hashFn, r.onComplete), a = t.syncPointTree_.subtree(s);
  if (i)
    I(!Rn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, h, d) => {
      if (!z(c) && h && Rn(h))
        return [vo(h).query];
      {
        let u = [];
        return h && (u = u.concat(_f(h).map((f) => f.query))), ke(d, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const h = l[c];
      t.listenProvider_.stopListening(wi(h), Li(t, h));
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
class Fl {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new Fl(n);
  }
  node() {
    return this.node_;
  }
}
class Ul {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = le(this.path_, e);
    return new Ul(this.syncTree_, n);
  }
  node() {
    return Dl(this.syncTree_, this.path_);
  }
}
const hE = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, wu = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (I(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return dE(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return fE(t[".sv"], e);
  I(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, dE = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      I(!1, "Unexpected server value: " + t);
  }
}, fE = function(t, e, n) {
  t.hasOwnProperty("increment") || I(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const s = t.increment;
  typeof s != "number" && I(!1, "Unexpected increment value: " + s);
  const i = e.node();
  if (I(i !== null && typeof i < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode())
    return s;
  const o = i.getValue();
  return typeof o != "number" ? s : o + s;
}, If = function(t, e, n, s) {
  return jl(e, new Ul(n, t), s);
}, Cf = function(t, e, n) {
  return jl(t, new Fl(e), n);
};
function jl(t, e, n) {
  const s = t.getPriority().val(), i = wu(s, e.getImmediateChild(".priority"), n);
  let r;
  if (t.isLeafNode()) {
    const o = t, a = wu(o.getValue(), e, n);
    return a !== o.getValue() || i !== o.getPriority().val() ? new we(a, me(i)) : t;
  } else {
    const o = t;
    return r = o, i !== o.getPriority().val() && (r = r.updatePriority(new we(i))), o.forEachChild(ce, (a, l) => {
      const c = jl(l, e.getImmediateChild(a), n);
      c !== l && (r = r.updateImmediateChild(a, c));
    }), r;
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
class Wl {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, s = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = s;
  }
}
function zl(t, e) {
  let n = e instanceof J ? e : new J(e), s = t, i = j(n);
  for (; i !== null; ) {
    const r = Os(s.node.children, i) || {
      children: {},
      childCount: 0
    };
    s = new Wl(i, s, r), n = ee(n), i = j(n);
  }
  return s;
}
function Js(t) {
  return t.node.value;
}
function Tf(t, e) {
  t.node.value = e, Pa(t);
}
function Sf(t) {
  return t.node.childCount > 0;
}
function pE(t) {
  return Js(t) === void 0 && !Sf(t);
}
function bo(t, e) {
  ke(t.node.children, (n, s) => {
    e(new Wl(n, t, s));
  });
}
function kf(t, e, n, s) {
  n && e(t), bo(t, (i) => {
    kf(i, e, !0);
  });
}
function _E(t, e, n) {
  let s = t.parent;
  for (; s !== null; ) {
    if (e(s))
      return !0;
    s = s.parent;
  }
  return !1;
}
function tr(t) {
  return new J(t.parent === null ? t.name : tr(t.parent) + "/" + t.name);
}
function Pa(t) {
  t.parent !== null && mE(t.parent, t.name, t);
}
function mE(t, e, n) {
  const s = pE(n), i = Wt(t.node.children, e);
  s && i ? (delete t.node.children[e], t.node.childCount--, Pa(t)) : !s && !i && (t.node.children[e] = n.node, t.node.childCount++, Pa(t));
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
const gE = /[\[\].#$\/\u0000-\u001F\u007F]/, vE = /[\[\].#$\u0000-\u001F\u007F]/, Qo = 10 * 1024 * 1024, Hl = function(t) {
  return typeof t == "string" && t.length !== 0 && !gE.test(t);
}, Af = function(t) {
  return typeof t == "string" && t.length !== 0 && !vE.test(t);
}, yE = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Af(t);
}, bE = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !ml(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Wt(t, ".sv");
}, Rf = function(t, e, n, s) {
  s && e === void 0 || wo(co(t, "value"), e, n);
}, wo = function(t, e, n) {
  const s = n instanceof J ? new $b(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + zn(s));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + zn(s) + " with contents = " + e.toString());
  if (ml(e))
    throw new Error(t + "contains " + e.toString() + " " + zn(s));
  if (typeof e == "string" && e.length > Qo / 3 && uo(e) > Qo)
    throw new Error(t + "contains a string greater than " + Qo + " utf8 bytes " + zn(s) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let i = !1, r = !1;
    if (ke(e, (o, a) => {
      if (o === ".value")
        i = !0;
      else if (o !== ".priority" && o !== ".sv" && (r = !0, !Hl(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + zn(s) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      Fb(s, o), wo(t, a, s), Ub(s);
    }), i && r)
      throw new Error(t + ' contains ".value" child ' + zn(s) + " in addition to actual children.");
  }
}, wE = function(t, e) {
  let n, s;
  for (n = 0; n < e.length; n++) {
    s = e[n];
    const r = Pi(s);
    for (let o = 0; o < r.length; o++)
      if (!(r[o] === ".priority" && o === r.length - 1)) {
        if (!Hl(r[o]))
          throw new Error(t + "contains an invalid key (" + r[o] + ") in path " + s.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(Lb);
  let i = null;
  for (n = 0; n < e.length; n++) {
    if (s = e[n], i !== null && ht(i, s))
      throw new Error(t + "contains a path " + i.toString() + " that is ancestor of another path " + s.toString());
    i = s;
  }
}, EE = function(t, e, n, s) {
  const i = co(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(i + " must be an object containing the children to replace.");
  const r = [];
  ke(e, (o, a) => {
    const l = new J(o);
    if (wo(i, a, le(n, l)), wl(l) === ".priority" && !bE(a))
      throw new Error(i + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    r.push(l);
  }), wE(i, r);
}, Nf = function(t, e, n, s) {
  if (!Af(n))
    throw new Error(co(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, IE = function(t, e, n, s) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Nf(t, e, n);
}, Bl = function(t, e) {
  if (j(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, CE = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !Hl(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !yE(n))
    throw new Error(co(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class TE {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function Eo(t, e) {
  let n = null;
  for (let s = 0; s < e.length; s++) {
    const i = e[s], r = i.getPath();
    n !== null && !El(r, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: r }), n.events.push(i);
  }
  n && t.eventLists_.push(n);
}
function Pf(t, e, n) {
  Eo(t, n), xf(t, (s) => El(s, e));
}
function _t(t, e, n) {
  Eo(t, n), xf(t, (s) => ht(s, e) || ht(e, s));
}
function xf(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let s = 0; s < t.eventLists_.length; s++) {
    const i = t.eventLists_[s];
    if (i) {
      const r = i.path;
      e(r) ? (SE(t.eventLists_[s]), t.eventLists_[s] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function SE(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const s = n.getEventRunner();
      gi && Te("event: " + n.toString()), Ys(s);
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
const kE = "repo_interrupt", AE = 25;
class RE {
  constructor(e, n, s, i) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = s, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new TE(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = zr(), this.transactionQueueTree_ = new Wl(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function NE(t, e, n) {
  if (t.stats_ = yl(t.repoInfo_), t.forceRestClient_ || ab())
    t.server_ = new Wr(t.repoInfo_, (s, i, r, o) => {
      Eu(t, s, i, r, o);
    }, t.authTokenProvider_, t.appCheckProvider_), setTimeout(() => Iu(
      t,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        ge(n);
      } catch (s) {
        throw new Error("Invalid authOverride provided: " + s);
      }
    }
    t.persistentConnection_ = new en(t.repoInfo_, e, (s, i, r, o) => {
      Eu(t, s, i, r, o);
    }, (s) => {
      Iu(t, s);
    }, (s) => {
      PE(t, s);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((s) => {
    t.server_.refreshAuthToken(s);
  }), t.appCheckProvider_.addTokenChangeListener((s) => {
    t.server_.refreshAppCheckToken(s.token);
  }), t.statsReporter_ = db(t.repoInfo_, () => new hw(t.stats_, t.server_)), t.infoData_ = new ow(), t.infoSyncTree_ = new bu({
    startListening: (s, i, r, o) => {
      let a = [];
      const l = t.infoData_.getNode(s._path);
      return l.isEmpty() || (a = er(t.infoSyncTree_, s._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), Vl(t, "connected", !1), t.serverSyncTree_ = new bu({
    startListening: (s, i, r, o) => (t.server_.listen(s, r, i, (a, l) => {
      const c = o(a, l);
      _t(t.eventQueue_, s._path, c);
    }), []),
    stopListening: (s, i) => {
      t.server_.unlisten(s, i);
    }
  });
}
function Of(t) {
  const n = t.infoData_.getNode(new J(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function Io(t) {
  return hE({
    timestamp: Of(t)
  });
}
function Eu(t, e, n, s, i) {
  t.dataUpdateCount++;
  const r = new J(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (i)
    if (s) {
      const l = Nr(n, (c) => me(c));
      o = rE(t.serverSyncTree_, r, l, i);
    } else {
      const l = me(n);
      o = yf(t.serverSyncTree_, r, l, i);
    }
  else if (s) {
    const l = Nr(n, (c) => me(c));
    o = nE(t.serverSyncTree_, r, l);
  } else {
    const l = me(n);
    o = er(t.serverSyncTree_, r, l);
  }
  let a = r;
  o.length > 0 && (a = js(t, r)), _t(t.eventQueue_, a, o);
}
function Iu(t, e) {
  Vl(t, "connected", e), e === !1 && ME(t);
}
function PE(t, e) {
  ke(e, (n, s) => {
    Vl(t, n, s);
  });
}
function Vl(t, e, n) {
  const s = new J("/.info/" + e), i = me(n);
  t.infoData_.updateSnapshot(s, i);
  const r = er(t.infoSyncTree_, s, i);
  _t(t.eventQueue_, s, r);
}
function ql(t) {
  return t.nextWriteId_++;
}
function xE(t, e, n) {
  const s = oE(t.serverSyncTree_, e);
  return s != null ? Promise.resolve(s) : t.server_.get(e).then((i) => {
    const r = me(i).withIndex(e._queryParams.getIndex());
    Na(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = er(t.serverSyncTree_, e._path, r);
    else {
      const a = Li(t.serverSyncTree_, e);
      o = yf(t.serverSyncTree_, e._path, r, a);
    }
    return _t(t.eventQueue_, e._path, o), Qr(t.serverSyncTree_, e, n, null, !0), r;
  }, (i) => (nr(t, "get for query " + ge(e) + " failed: " + i), Promise.reject(new Error(i))));
}
function OE(t, e, n, s, i) {
  nr(t, "set", {
    path: e.toString(),
    value: n,
    priority: s
  });
  const r = Io(t), o = me(n, s), a = Dl(t.serverSyncTree_, e), l = Cf(o, a, r), c = ql(t), h = vf(t.serverSyncTree_, e, l, c, !0);
  Eo(t.eventQueue_, h), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || Ue("set at " + e + " failed: " + u);
    const g = vn(t.serverSyncTree_, c, !p);
    _t(t.eventQueue_, e, g), Oa(t, i, u, f);
  });
  const d = Kl(t, e);
  js(t, d), _t(t.eventQueue_, d, []);
}
function DE(t, e, n, s) {
  nr(t, "update", { path: e.toString(), value: n });
  let i = !0;
  const r = Io(t), o = {};
  if (ke(n, (a, l) => {
    i = !1, o[a] = If(le(e, a), me(l), t.serverSyncTree_, r);
  }), i)
    Te("update() called with empty data.  Don't do anything."), Oa(t, s, "ok", void 0);
  else {
    const a = ql(t), l = tE(t.serverSyncTree_, e, o, a);
    Eo(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, h) => {
      const d = c === "ok";
      d || Ue("update at " + e + " failed: " + c);
      const u = vn(t.serverSyncTree_, a, !d), f = u.length > 0 ? js(t, e) : e;
      _t(t.eventQueue_, f, u), Oa(t, s, c, h);
    }), ke(n, (c) => {
      const h = Kl(t, le(e, c));
      js(t, h);
    }), _t(t.eventQueue_, e, []);
  }
}
function ME(t) {
  nr(t, "onDisconnectEvents");
  const e = Io(t), n = zr();
  Ca(t.onDisconnect_, K(), (i, r) => {
    const o = If(i, r, t.serverSyncTree_, e);
    nf(n, i, o);
  });
  let s = [];
  Ca(n, K(), (i, r) => {
    s = s.concat(er(t.serverSyncTree_, i, r));
    const o = Kl(t, i);
    js(t, o);
  }), t.onDisconnect_ = zr(), _t(t.eventQueue_, K(), s);
}
function LE(t, e, n) {
  let s;
  j(e._path) === ".info" ? s = Na(t.infoSyncTree_, e, n) : s = Na(t.serverSyncTree_, e, n), Pf(t.eventQueue_, e._path, s);
}
function xa(t, e, n) {
  let s;
  j(e._path) === ".info" ? s = Qr(t.infoSyncTree_, e, n) : s = Qr(t.serverSyncTree_, e, n), Pf(t.eventQueue_, e._path, s);
}
function $E(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(kE);
}
function nr(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), Te(n, ...e);
}
function Oa(t, e, n, s) {
  e && Ys(() => {
    if (n === "ok")
      e(null);
    else {
      const i = (n || "error").toUpperCase();
      let r = i;
      s && (r += ": " + s);
      const o = new Error(r);
      o.code = i, e(o);
    }
  });
}
function Df(t, e, n) {
  return Dl(t.serverSyncTree_, e, n) || D.EMPTY_NODE;
}
function Gl(t, e = t.transactionQueueTree_) {
  if (e || Co(t, e), Js(e)) {
    const n = Lf(t, e);
    I(n.length > 0, "Sending zero length transaction queue"), n.every(
      (i) => i.status === 0
      /* TransactionStatus.RUN */
    ) && FE(t, tr(e), n);
  } else Sf(e) && bo(e, (n) => {
    Gl(t, n);
  });
}
function FE(t, e, n) {
  const s = n.map((c) => c.currentWriteId), i = Df(t, e, s);
  let r = i;
  const o = i.hash();
  for (let c = 0; c < n.length; c++) {
    const h = n[c];
    I(h.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), h.status = 1, h.retryCount++;
    const d = Fe(e, h.path);
    r = r.updateChild(d, h.currentOutputSnapshotRaw);
  }
  const a = r.val(!0), l = e;
  t.server_.put(l.toString(), a, (c) => {
    nr(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let h = [];
    if (c === "ok") {
      const d = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, h = h.concat(vn(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && d.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      Co(t, zl(t.transactionQueueTree_, e)), Gl(t, t.transactionQueueTree_), _t(t.eventQueue_, e, h);
      for (let u = 0; u < d.length; u++)
        Ys(d[u]);
    } else {
      if (c === "datastale")
        for (let d = 0; d < n.length; d++)
          n[d].status === 3 ? n[d].status = 4 : n[d].status = 0;
      else {
        Ue("transaction at " + l.toString() + " failed: " + c);
        for (let d = 0; d < n.length; d++)
          n[d].status = 4, n[d].abortReason = c;
      }
      js(t, e);
    }
  }, o);
}
function js(t, e) {
  const n = Mf(t, e), s = tr(n), i = Lf(t, n);
  return UE(t, i, s), s;
}
function UE(t, e, n) {
  if (e.length === 0)
    return;
  const s = [];
  let i = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = Fe(n, l.path);
    let h = !1, d;
    if (I(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      h = !0, d = l.abortReason, i = i.concat(vn(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= AE)
        h = !0, d = "maxretry", i = i.concat(vn(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = Df(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          wo("transaction failed: Data returned ", f, l.path);
          let p = me(f);
          typeof f == "object" && f != null && Wt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const b = l.currentWriteId, T = Io(t), C = Cf(p, u, T);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = C, l.currentWriteId = ql(t), o.splice(o.indexOf(b), 1), i = i.concat(vf(t.serverSyncTree_, l.path, C, l.currentWriteId, l.applyLocally)), i = i.concat(vn(t.serverSyncTree_, b, !0));
        } else
          h = !0, d = "nodata", i = i.concat(vn(t.serverSyncTree_, l.currentWriteId, !0));
      }
    _t(t.eventQueue_, n, i), i = [], h && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (d === "nodata" ? s.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : s.push(() => e[a].onComplete(new Error(d), !1, null))));
  }
  Co(t, t.transactionQueueTree_);
  for (let a = 0; a < s.length; a++)
    Ys(s[a]);
  Gl(t, t.transactionQueueTree_);
}
function Mf(t, e) {
  let n, s = t.transactionQueueTree_;
  for (n = j(e); n !== null && Js(s) === void 0; )
    s = zl(s, n), e = ee(e), n = j(e);
  return s;
}
function Lf(t, e) {
  const n = [];
  return $f(t, e, n), n.sort((s, i) => s.order - i.order), n;
}
function $f(t, e, n) {
  const s = Js(e);
  if (s)
    for (let i = 0; i < s.length; i++)
      n.push(s[i]);
  bo(e, (i) => {
    $f(t, i, n);
  });
}
function Co(t, e) {
  const n = Js(e);
  if (n) {
    let s = 0;
    for (let i = 0; i < n.length; i++)
      n[i].status !== 2 && (n[s] = n[i], s++);
    n.length = s, Tf(e, n.length > 0 ? n : void 0);
  }
  bo(e, (s) => {
    Co(t, s);
  });
}
function Kl(t, e) {
  const n = tr(Mf(t, e)), s = zl(t.transactionQueueTree_, e);
  return _E(s, (i) => {
    Jo(t, i);
  }), Jo(t, s), kf(s, (i) => {
    Jo(t, i);
  }), n;
}
function Jo(t, e) {
  const n = Js(e);
  if (n) {
    const s = [];
    let i = [], r = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (I(r === o - 1, "All SENT items should be at beginning of queue."), r = o, n[o].status = 3, n[o].abortReason = "set") : (I(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), i = i.concat(vn(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && s.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    r === -1 ? Tf(e, void 0) : n.length = r + 1, _t(t.eventQueue_, tr(e), i);
    for (let o = 0; o < s.length; o++)
      Ys(s[o]);
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
function jE(t) {
  let e = "";
  const n = t.split("/");
  for (let s = 0; s < n.length; s++)
    if (n[s].length > 0) {
      let i = n[s];
      try {
        i = decodeURIComponent(i.replace(/\+/g, " "));
      } catch {
      }
      e += "/" + i;
    }
  return e;
}
function WE(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0)
      continue;
    const s = n.split("=");
    s.length === 2 ? e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]) : Ue(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const Cu = function(t, e) {
  const n = zE(t), s = n.namespace;
  n.domain === "firebase.com" && sn(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!s || s === "undefined") && n.domain !== "localhost" && sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || Xy();
  const i = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new Ud(
      n.host,
      n.secure,
      s,
      i,
      e,
      /*persistenceKey=*/
      "",
      /*includeNamespaceInQueryParams=*/
      s !== n.subdomain
    ),
    path: new J(n.pathString)
  };
}, zE = function(t) {
  let e = "", n = "", s = "", i = "", r = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let h = t.indexOf("/");
    h === -1 && (h = t.length);
    let d = t.indexOf("?");
    d === -1 && (d = t.length), e = t.substring(0, Math.min(h, d)), h < d && (i = jE(t.substring(h, d)));
    const u = WE(t.substring(Math.min(t.length, d)));
    c = e.indexOf(":"), c >= 0 ? (o = a === "https" || a === "wss", l = parseInt(e.substring(c + 1), 10)) : c = e.length;
    const f = e.slice(0, c);
    if (f.toLowerCase() === "localhost")
      n = "localhost";
    else if (f.split(".").length <= 2)
      n = f;
    else {
      const p = e.indexOf(".");
      s = e.substring(0, p).toLowerCase(), n = e.substring(p + 1), r = s;
    }
    "ns" in u && (r = u.ns);
  }
  return {
    host: e,
    port: l,
    domain: n,
    subdomain: s,
    secure: o,
    scheme: a,
    pathString: i,
    namespace: r
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
const Tu = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", HE = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const s = n === t;
    t = n;
    let i;
    const r = new Array(8);
    for (i = 7; i >= 0; i--)
      r[i] = Tu.charAt(n % 64), n = Math.floor(n / 64);
    I(n === 0, "Cannot push at time == 0");
    let o = r.join("");
    if (s) {
      for (i = 11; i >= 0 && e[i] === 63; i--)
        e[i] = 0;
      e[i]++;
    } else
      for (i = 0; i < 12; i++)
        e[i] = Math.floor(Math.random() * 64);
    for (i = 0; i < 12; i++)
      o += Tu.charAt(e[i]);
    return I(o.length === 20, "nextPushId: Length should be 20."), o;
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
class BE {
  /**
   * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
   * @param eventRegistration - The function to call to with the event data. User provided
   * @param snapshot - The data backing the event
   * @param prevName - Optional, the name of the previous child for child_* events.
   */
  constructor(e, n, s, i) {
    this.eventType = e, this.eventRegistration = n, this.snapshot = s, this.prevName = i;
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
    return this.getPath().toString() + ":" + this.eventType + ":" + ge(this.snapshot.exportVal());
  }
}
class VE {
  constructor(e, n, s) {
    this.eventRegistration = e, this.error = n, this.path = s;
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
class Ff {
  constructor(e, n) {
    this.snapshotCallback = e, this.cancelCallback = n;
  }
  onValue(e, n) {
    this.snapshotCallback.call(null, e, n);
  }
  onCancel(e) {
    return I(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e);
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
class Yl {
  /**
   * @hideconstructor
   */
  constructor(e, n, s, i) {
    this._repo = e, this._path = n, this._queryParams = s, this._orderByCalled = i;
  }
  get key() {
    return z(this._path) ? null : wl(this._path);
  }
  get ref() {
    return new cn(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = uu(this._queryParams), n = gl(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return uu(this._queryParams);
  }
  isEqual(e) {
    if (e = Ae(e), !(e instanceof Yl))
      return !1;
    const n = this._repo === e._repo, s = El(this._path, e._path), i = this._queryIdentifier === e._queryIdentifier;
    return n && s && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + Mb(this._path);
  }
}
class cn extends Yl {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new Sl(), !1);
  }
  get parent() {
    const e = Kd(this._path);
    return e === null ? null : new cn(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class $i {
  /**
   * @param _node - A SnapshotNode to wrap.
   * @param ref - The location this snapshot came from.
   * @param _index - The iteration order for this snapshot
   * @hideconstructor
   */
  constructor(e, n, s) {
    this._node = e, this.ref = n, this._index = s;
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
    const n = new J(e), s = Fi(this.ref, e);
    return new $i(this._node.getChild(n), s, ce);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (s, i) => e(new $i(i, Fi(this.ref, s), ce)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new J(e);
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
function Lt(t, e) {
  return t = Ae(t), t._checkNotDeleted("ref"), e !== void 0 ? Fi(t._root, e) : t._root;
}
function Fi(t, e) {
  return t = Ae(t), j(t._path) === null ? IE("child", "path", e) : Nf("child", "path", e), new cn(t._repo, le(t._path, e));
}
function qE(t, e) {
  t = Ae(t), Bl("push", t._path), Rf("push", e, t._path, !0);
  const n = Of(t._repo), s = HE(n), i = Fi(t, s), r = Fi(t, s);
  let o;
  return o = Promise.resolve(r), i.then = o.then.bind(o), i.catch = o.then.bind(o, void 0), i;
}
function GE(t) {
  return Bl("remove", t._path), To(t, null);
}
function To(t, e) {
  t = Ae(t), Bl("set", t._path), Rf("set", e, t._path, !1);
  const n = new Vi();
  return OE(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function Da(t, e) {
  EE("update", e, t._path);
  const n = new Vi();
  return DE(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function KE(t) {
  t = Ae(t);
  const e = new Ff(() => {
  }), n = new So(e);
  return xE(t._repo, t, n).then((s) => new $i(s, new cn(t._repo, t._path), t._queryParams.getIndex()));
}
class So {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const s = n._queryParams.getIndex();
    return new BE("value", this, new $i(e.snapshotNode, new cn(n._repo, n._path), s));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new VE(this, e, n) : null;
  }
  matches(e) {
    return e instanceof So ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function YE(t, e, n, s, i) {
  let r;
  if (typeof s == "object" && (r = void 0, i = s), typeof s == "function" && (r = s), i && i.onlyOnce) {
    const l = n, c = (h, d) => {
      xa(t._repo, t, a), l(h, d);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new Ff(n, r || void 0), a = new So(o);
  return LE(t._repo, t, a), () => xa(t._repo, t, a);
}
function Jr(t, e, n, s) {
  return YE(t, "value", e, n, s);
}
function Ql(t, e, n) {
  xa(t._repo, t, null);
}
Gw(cn);
Xw(cn);
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
const QE = "FIREBASE_DATABASE_EMULATOR_HOST", Ma = {};
let JE = !1;
function XE(t, e, n, s) {
  const i = e.lastIndexOf(":"), r = e.substring(0, i), o = Vs(r);
  t.repoInfo_ = new Ud(
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
  ), s && (t.authTokenProvider_ = s);
}
function ZE(t, e, n, s, i) {
  let r = s || t.options.databaseURL;
  r === void 0 && (t.options.projectId || sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), Te("Using default host for project ", t.options.projectId), r = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = Cu(r, i), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[QE]), l ? (r = `http://${l}?ns=${a.namespace}`, o = Cu(r, i), a = o.repoInfo) : o.repoInfo.secure;
  const c = new cb(t.name, t.options, e);
  CE("Invalid Firebase Database URL", o), z(o.path) || sn("Database URL must point to the root of a Firebase Database (not including a child path).");
  const h = tI(a, t, c, new lb(t, n));
  return new nI(h, t);
}
function eI(t, e) {
  const n = Ma[e];
  (!n || n[t.key] !== t) && sn(`Database ${e}(${t.repoInfo_}) has already been deleted.`), $E(t), delete n[t.key];
}
function tI(t, e, n, s) {
  let i = Ma[e.name];
  i || (i = {}, Ma[e.name] = i);
  let r = i[t.toURLString()];
  return r && sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new RE(t, JE, n, s), i[t.toURLString()] = r, r;
}
class nI {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (NE(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new cn(this._repo, K())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (eI(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && sn("Cannot call " + e + " on a deleted database.");
  }
}
function sI(t = zh(), e) {
  const n = al(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const s = Z_("database");
    s && iI(n, ...s);
  }
  return n;
}
function iI(t, e, n, s = {}) {
  t = Ae(t), t._checkNotDeleted("useEmulator");
  const i = `${e}:${n}`, r = t._repoInternal;
  if (t._instanceStarted) {
    if (i === t._repoInternal.repoInfo_.host && Jn(s, r.repoInfo_.emulatorOptions))
      return;
    sn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (r.repoInfo_.nodeAdmin)
    s.mockUserToken && sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new br(br.OWNER);
  else if (s.mockUserToken) {
    const a = typeof s.mockUserToken == "string" ? s.mockUserToken : em(s.mockUserToken, t.app.options.projectId);
    o = new br(a);
  }
  Vs(e) && (Mh(e), Lh("Database", !0)), XE(r, i, s, o);
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
function rI(t) {
  qy(Gs), Ds(new Xn(
    "database",
    (e, { instanceIdentifier: n }) => {
      const s = e.getProvider("app").getImmediate(), i = e.getProvider("auth-internal"), r = e.getProvider("app-check-internal");
      return ZE(s, i, r, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), In(Gc, Kc, t), In(Gc, Kc, "esm2020");
}
en.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
en.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
rI();
const oI = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
}, Uf = Wh(oI), ko = By(Uf), $t = sI(Uf), Jl = Bi(null), aI = Bi(!0);
xv(ko, (t) => {
  Jl.set(t), aI.set(!1);
});
async function lI(t, e) {
  try {
    return await kv(ko, t, e), { success: !0 };
  } catch (n) {
    return console.error("로그인 오류:", n), { success: !1, error: jf(n.code) };
  }
}
async function cI(t, e, n = "") {
  try {
    const s = await Sv(ko, t, e);
    return n && await Rv(s.user, {
      displayName: n
    }), { success: !0 };
  } catch (s) {
    return console.error("회원가입 오류:", s), { success: !1, error: jf(s.code) };
  }
}
async function uI() {
  try {
    return await Ov(ko), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function jf(t) {
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
var hI = /* @__PURE__ */ Y('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'), dI = /* @__PURE__ */ Y('<div class="error-message svelte-16585sj"> </div>'), fI = /* @__PURE__ */ Y('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');
const pI = {
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
function _I(t, e) {
  Pn(e, !0), os(t, pI);
  let n = /* @__PURE__ */ fe(""), s = /* @__PURE__ */ fe(""), i = /* @__PURE__ */ fe(""), r = /* @__PURE__ */ fe(""), o = /* @__PURE__ */ fe(!1), a = /* @__PURE__ */ fe(
    !1
    // 회원가입 모드 토글
  );
  async function l(L) {
    L.preventDefault(), B(o, !0), B(r, "");
    let P;
    if (E(a) ? P = await cI(E(n), E(s), E(i)) : P = await lI(E(n), E(s)), P.success) {
      const H = new CustomEvent("login-success", {
        detail: { email: E(n) },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(H), B(n, ""), B(s, ""), B(i, "");
    } else {
      B(r, P.error, !0);
      const H = new CustomEvent("login-error", {
        detail: { error: P.error },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(H);
    }
    B(o, !1);
  }
  function c() {
    B(a, !E(a)), B(r, "");
  }
  var h = fI(), d = m(h), u = m(d), f = m(u, !0);
  _(u);
  var p = y(u, 2), g = m(p);
  {
    var b = (L) => {
      var P = hI(), H = y(m(P), 2);
      pr(H), _(P), ie(() => H.disabled = E(o)), Mo(H, () => E(i), (re) => B(i, re)), x(L, P);
    };
    Ne(g, (L) => {
      E(a) && L(b);
    });
  }
  var T = y(g, 2), C = y(m(T), 2);
  pr(C), _(T);
  var S = y(T, 2), k = y(m(S), 2);
  pr(k), _(S);
  var N = y(S, 2);
  {
    var v = (L) => {
      var P = dI(), H = m(P, !0);
      _(P), ie(() => R(H, E(r))), x(L, P);
    };
    Ne(N, (L) => {
      E(r) && L(v);
    });
  }
  var w = y(N, 2), A = m(w, !0);
  _(w);
  var $ = y(w, 2);
  $.__click = c;
  var U = m($, !0);
  _($), _(p), _(d), _(h), ie(() => {
    R(f, E(a) ? "회원가입" : "로그인"), C.disabled = E(o), k.disabled = E(o), w.disabled = E(o), R(A, E(o) ? "처리 중..." : E(a) ? "회원가입" : "로그인"), $.disabled = E(o), R(U, E(a) ? "이미 계정이 있으신가요? 로그인" : "계정이 없으신가요? 회원가입");
  }), o_("submit", p, l), Mo(C, () => E(n), (L) => B(n, L)), Mo(k, () => E(s), (L) => B(s, L)), x(t, h), xn();
}
Hi(["click"]);
customElements.define("login-form", pe(_I, {}, [], [], !0));
var mI = /* @__PURE__ */ Y('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), gI = /* @__PURE__ */ Y('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), vI = /* @__PURE__ */ Y('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), yI = /* @__PURE__ */ Y('<h3 class="post-title svelte-1t1odzy"> </h3>'), bI = /* @__PURE__ */ Y('<p class="post-text svelte-1t1odzy"> </p>'), wI = /* @__PURE__ */ Y('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), EI = /* @__PURE__ */ Y('<div class="posts svelte-1t1odzy"></div>'), II = /* @__PURE__ */ Y('<div class="post-list-container svelte-1t1odzy"><!></div>');
const CI = {
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
function TI(t, e) {
  Pn(e, !0), os(t, CI);
  let n = ct(e, "path", 7, "posts"), s = ct(e, "limit", 7, "10"), i = /* @__PURE__ */ fe(Vt([])), r = /* @__PURE__ */ fe(!0), o = /* @__PURE__ */ fe(""), a = null;
  Xa(() => {
    l();
  }), b_(() => {
    c();
  });
  function l() {
    try {
      a = Lt($t, n()), Jr(
        a,
        (C) => {
          const S = C.val();
          S ? B(i, Object.entries(S).map(([k, N]) => ({ id: k, ...N })).sort((k, N) => (N.timestamp || 0) - (k.timestamp || 0)).slice(0, parseInt(s())), !0) : B(i, [], !0), B(r, !1), B(o, "");
        },
        (C) => {
          console.error("데이터 읽기 오류:", C), B(o, "데이터를 불러오는 중 오류가 발생했습니다."), B(r, !1);
        }
      );
    } catch (C) {
      console.error("구독 설정 오류:", C), B(o, "데이터베이스 연결에 실패했습니다."), B(r, !1);
    }
  }
  function c() {
    a && Ql(a);
  }
  function h(C) {
    const S = new CustomEvent("post-click", { detail: { post: C }, bubbles: !0, composed: !0 });
    dispatchEvent(S);
  }
  function d(C, S) {
    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), h(S));
  }
  function u(C) {
    if (!C) return "";
    const S = typeof C == "string" ? Number(C) : C, k = new Date(S), v = (/* @__PURE__ */ new Date()).getTime() - k.getTime(), w = Math.floor(v / 6e4), A = Math.floor(v / 36e5), $ = Math.floor(v / 864e5);
    return w < 1 ? "방금 전" : w < 60 ? `${w}분 전` : A < 24 ? `${A}시간 전` : $ < 7 ? `${$}일 전` : k.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return n();
    },
    set path(C = "posts") {
      n(C), Xe();
    },
    get limit() {
      return s();
    },
    set limit(C = "10") {
      s(C), Xe();
    }
  }, p = II(), g = m(p);
  {
    var b = (C) => {
      var S = mI();
      x(C, S);
    }, T = (C) => {
      var S = De(), k = ye(S);
      {
        var N = (w) => {
          var A = gI(), $ = m(A), U = m($, !0);
          _($), _(A), ie(() => R(U, E(o))), x(w, A);
        }, v = (w) => {
          var A = De(), $ = ye(A);
          {
            var U = (P) => {
              var H = vI();
              x(P, H);
            }, L = (P) => {
              var H = EI();
              lo(H, 21, () => E(i), (re) => re.id, (re, G) => {
                var X = wI();
                X.__click = () => h(E(G)), X.__keydown = (ne) => d(ne, E(G));
                var be = m(X), Ie = m(be), oe = m(Ie), _e = m(oe, !0);
                _(oe);
                var he = y(oe, 2), Me = m(he, !0);
                _(he), _(Ie), _(be);
                var Re = y(be, 2), nt = m(Re);
                {
                  var Ye = (ne) => {
                    var Le = yI(), He = m(Le, !0);
                    _(Le), ie(() => R(He, E(G).title)), x(ne, Le);
                  };
                  Ne(nt, (ne) => {
                    E(G).title && ne(Ye);
                  });
                }
                var st = y(nt, 2);
                {
                  var it = (ne) => {
                    var Le = bI(), He = m(Le, !0);
                    _(Le), ie(() => R(He, E(G).content)), x(ne, Le);
                  };
                  Ne(st, (ne) => {
                    E(G).content && ne(it);
                  });
                }
                _(Re);
                var rt = y(Re, 2), ot = m(rt), mt = m(ot);
                _(ot);
                var at = y(ot, 2), gt = m(at);
                _(at), _(rt), _(X), ie(
                  (ne) => {
                    de(X, "aria-label", `게시물: ${(E(G).title || E(G).content || "제목 없음") ?? ""}`), R(_e, E(G).author || "익명"), R(Me, ne), R(mt, `👍 ${(E(G).likes || 0) ?? ""}`), R(gt, `💬 ${(E(G).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(E(G).timestamp)]
                ), x(re, X);
              }), _(H), x(P, H);
            };
            Ne(
              $,
              (P) => {
                E(i).length === 0 ? P(U) : P(L, !1);
              },
              !0
            );
          }
          x(w, A);
        };
        Ne(
          k,
          (w) => {
            E(o) ? w(N) : w(v, !1);
          },
          !0
        );
      }
      x(C, S);
    };
    Ne(g, (C) => {
      E(r) ? C(b) : C(T, !1);
    });
  }
  return _(p), x(t, p), xn(f);
}
Hi(["click", "keydown"]);
customElements.define("post-list", pe(TI, { path: {}, limit: {} }, [], [], !0));
Dp();
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
const SI = {
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
var kI = /* @__PURE__ */ l_("<svg><!><!></svg>");
function Ke(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), s = je(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  Pn(e, !1);
  let i = ct(e, "name", 12, void 0), r = ct(e, "color", 12, "currentColor"), o = ct(e, "size", 12, 24), a = ct(e, "strokeWidth", 12, 2), l = ct(e, "absoluteStrokeWidth", 12, !1), c = ct(e, "iconNode", 28, () => []);
  const h = (...g) => g.filter((b, T, C) => !!b && C.indexOf(b) === T).join(" ");
  var d = {
    get name() {
      return i();
    },
    set name(g) {
      i(g), Xe();
    },
    get color() {
      return r();
    },
    set color(g) {
      r(g), Xe();
    },
    get size() {
      return o();
    },
    set size(g) {
      o(g), Xe();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(g) {
      a(g), Xe();
    },
    get absoluteStrokeWidth() {
      return l();
    },
    set absoluteStrokeWidth(g) {
      l(g), Xe();
    },
    get iconNode() {
      return c();
    },
    set iconNode(g) {
      c(g), Xe();
    }
  };
  Sh();
  var u = kI();
  pc(
    u,
    (g, b) => ({
      ...SI,
      ...s,
      width: o(),
      height: o(),
      stroke: r(),
      "stroke-width": g,
      class: b
    }),
    [
      () => (ms(l()), ms(a()), ms(o()), Ut(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (ms(i()), ms(n), Ut(() => h("lucide-icon", "lucide", i() ? `lucide-${i()}` : "", n.class)))
    ]
  );
  var f = m(u);
  lo(f, 1, c, Za, (g, b) => {
    var T = /* @__PURE__ */ ta(() => _p(E(b), 2));
    let C = () => E(T)[0], S = () => E(T)[1];
    var k = De(), N = ye(k);
    C_(N, C, !0, (v, w) => {
      pc(v, () => ({ ...S() }));
    }), x(g, k);
  });
  var p = y(f);
  return ze(p, e, "default", {}), _(u), x(t, u), xn(d);
}
pe(
  Ke,
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
function Wf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M12 7v14" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  Ke(t, tt({ name: "book-open" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Wf, {}, ["default"], [], !0);
function zf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [["path", { d: "m6 9 6 6 6-6" }]];
  Ke(t, tt({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(zf, {}, ["default"], [], !0);
function La(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M15 3h6v6" }],
    ["path", { d: "M10 14 21 3" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ]
  ];
  Ke(t, tt({ name: "external-link" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(La, {}, ["default"], [], !0);
function Xl(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
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
  Ke(t, tt({ name: "file-text" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Xl, {}, ["default"], [], !0);
function Hf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
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
  Ke(t, tt({ name: "house" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Hf, {}, ["default"], [], !0);
function hi(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
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
  Ke(t, tt({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(hi, {}, ["default"], [], !0);
function Bf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "m10 17 5-5-5-5" }],
    ["path", { d: "M15 12H3" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
  ];
  Ke(t, tt({ name: "log-in" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Bf, {}, ["default"], [], !0);
function Vf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "m16 17 5-5-5-5" }],
    ["path", { d: "M21 12H9" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  Ke(t, tt({ name: "log-out" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Vf, {}, ["default"], [], !0);
function di(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M4 5h16" }],
    ["path", { d: "M4 12h16" }],
    ["path", { d: "M4 19h16" }]
  ];
  Ke(t, tt({ name: "menu" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(di, {}, ["default"], [], !0);
function Gn(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ]
  ];
  Ke(t, tt({ name: "message-circle" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(Gn, {}, ["default"], [], !0);
function qf(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M16 7h6v6" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  Ke(t, tt({ name: "trending-up" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(qf, {}, ["default"], [], !0);
function ks(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ];
  Ke(t, tt({ name: "user" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(ks, {}, ["default"], [], !0);
function As(t, e) {
  const n = je(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  const s = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { cx: "9", cy: "7", r: "4" }]
  ];
  Ke(t, tt({ name: "users" }, () => n, {
    get iconNode() {
      return s;
    },
    children: (i, r) => {
      var o = De(), a = ye(o);
      ze(a, e, "default", {}), x(i, o);
    },
    $$slots: { default: !0 }
  }));
}
pe(As, {}, ["default"], [], !0);
const AI = {
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
  "home.aiChange.hint": "This project was created in collaboration with AI. All code was written together with Claude."
}, RI = {
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
  "home.aiChange.hint": "이 프로젝트는 AI와 협업하여 만들어졌습니다. 모든 코드는 Claude와 함께 작성되었습니다."
}, NI = {
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
  "home.aiChange.hint": "このプロジェクトはAIと協業して作られました。すべてのコードはClaudeと一緒に作成されました。"
}, PI = {
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
  "home.aiChange.hint": "本项目与AI合作创建。所有代码都与Claude一起编写。"
}, Xo = { en: AI, ko: RI, ja: NI, zh: PI };
function $a(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function Gf() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = $a(e);
    if (n !== "en") return n;
  }
  return "en";
}
function xI(t) {
  let e = $a(t) || Gf();
  function n(r) {
    e = $a(r);
  }
  function s() {
    return e;
  }
  function i(r, o = {}) {
    return ((Xo[e] ?? Xo.en)[r] ?? Xo.en[r] ?? r).replace(/\{(\w+)\}/g, (c, h) => o[h] ?? "");
  }
  return { t: i, setLocale: n, getLocale: s };
}
const Kf = Gf(), OI = xI(Kf), DI = Bi(Kf), Zl = L_(
  DI,
  (t) => (e, n = {}) => OI.t(e, n)
);
var MI = /* @__PURE__ */ Y("<span> </span>"), LI = /* @__PURE__ */ Y('<img alt="프로필" class="avatar-image svelte-38psow"/>'), $I = /* @__PURE__ */ Y('<div class="avatar-fallback svelte-38psow"> </div>'), FI = /* @__PURE__ */ Y('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/profile" class="dropdown-item svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span class="svelte-38psow"> </span></button></div>'), UI = /* @__PURE__ */ Y('<img class="avatar-image svelte-38psow"/>'), jI = /* @__PURE__ */ Y('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), WI = /* @__PURE__ */ Y('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/users" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), zI = /* @__PURE__ */ Y('<div class="desktop-menu svelte-38psow"><a href="/forum/list" class="nav-button svelte-38psow"><!> <span class="svelte-38psow"> </span></a> <a href="/auth/login" class="nav-button svelte-38psow"> </a> <a href="/auth/signup" class="primary-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/forum/list" class="icon-button svelte-38psow"><!></a> <a href="/users" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><!></a> <a href="/auth/login" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><div class="avatar-fallback avatar-fallback-small svelte-38psow">?</div></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), HI = /* @__PURE__ */ Y('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><a href="/" class="logo-link svelte-38psow"><div class="logo svelte-38psow"></div></a> <nav class="nav svelte-38psow"><!></nav></div></header>');
const BI = {
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
function VI(t, e) {
  Pn(e, !0), os(t, BI);
  const n = () => Si(Jl, "$user", i), s = () => Si(Zl, "$t", i), [i, r] = tl();
  let o = /* @__PURE__ */ fe(!1), a = /* @__PURE__ */ fe(null);
  function l() {
    E(a) && (E(a).classList.remove("logo-animate-active"), E(a).offsetWidth, E(a).classList.add("logo-animate-active"), setTimeout(
      () => {
        E(a)?.classList.remove("logo-animate-active");
      },
      600
    ));
  }
  async function c() {
    if ((await uI()).success) {
      const v = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(v);
    }
    B(o, !1);
  }
  function h() {
    return n()?.displayName ? n().displayName.charAt(0).toUpperCase() : n()?.email ? n().email.charAt(0).toUpperCase() : "U";
  }
  function d() {
    B(o, !E(o));
  }
  function u(N) {
    const v = document.querySelector(".dropdown-menu"), w = document.querySelector(".dropdown-trigger");
    v && !v.contains(N.target) && !w?.contains(N.target) && B(o, !1);
  }
  Xa(() => {
    const N = setTimeout(
      () => {
        l();
      },
      500
    ), v = setInterval(
      () => {
        l();
      },
      1e4
    );
    return document.addEventListener("click", u), () => {
      clearTimeout(N), clearInterval(v), document.removeEventListener("click", u);
    };
  });
  var f = HI(), p = m(f), g = m(p), b = m(g);
  lo(b, 5, () => s()("프로젝트_명칭").split(""), Za, (N, v, w) => {
    var A = MI();
    Ti(A, 1, `logo-char logo-char-${w + 1}`, "svelte-38psow");
    var $ = m(A, !0);
    _(A), ie(() => R($, E(v))), x(N, A);
  }), _(b), _(g), D_(g, (N) => B(a, N), () => E(a));
  var T = y(g, 2), C = m(T);
  {
    var S = (N) => {
      var v = WI(), w = ye(v), A = m(w), $ = m(A);
      hi($, { size: 16 });
      var U = y($, 2), L = m(U, !0);
      _(U), _(A);
      var P = y(A, 2), H = m(P);
      Gn(H, { size: 16 });
      var re = y(H, 2), G = m(re, !0);
      _(re), _(P);
      var X = y(P, 2), be = m(X);
      As(be, { size: 16 });
      var Ie = y(be, 2), oe = m(Ie, !0);
      _(Ie), _(X);
      var _e = y(X, 2), he = m(_e);
      he.__click = d;
      var Me = m(he), Re = m(Me);
      {
        var nt = (ae) => {
          var se = LI();
          ie(() => de(se, "src", n().photoURL)), x(ae, se);
        }, Ye = (ae) => {
          var se = $I(), Qe = m(se, !0);
          _(se), ie((Rt) => R(Qe, Rt), [h]), x(ae, se);
        };
        Ne(Re, (ae) => {
          n()?.photoURL ? ae(nt) : ae(Ye, !1);
        });
      }
      _(Me);
      var st = y(Me, 2), it = m(st, !0);
      _(st), _(he);
      var rt = y(he, 2);
      {
        var ot = (ae) => {
          var se = FI(), Qe = m(se), Rt = m(Qe, !0);
          _(Qe);
          var Ln = y(Qe, 4), $n = m(Ln);
          ks($n, { size: 16 });
          var Fn = y($n, 2), ds = m(Fn, !0);
          _(Fn), _(Ln);
          var Un = y(Ln, 4);
          Un.__click = c;
          var vt = m(Un);
          Vf(vt, { size: 16 });
          var yt = y(vt, 2), Nt = m(yt, !0);
          _(yt), _(Un), _(se), ie(
            (Ht, hn, jn) => {
              R(Rt, Ht), R(ds, hn), R(Nt, jn);
            },
            [() => s()("내계정"), () => s()("프로필수정"), () => s()("로그아웃")]
          ), x(ae, se);
        };
        Ne(rt, (ae) => {
          E(o) && ae(ot);
        });
      }
      _(_e);
      var mt = y(_e, 2), at = m(mt);
      di(at, { size: 24 }), _(mt), _(w);
      var gt = y(w, 2), ne = m(gt), Le = m(ne);
      hi(Le, { size: 20 }), _(ne);
      var He = y(ne, 2), un = m(He);
      As(un, { size: 20 }), _(He);
      var zt = y(He, 2), sr = m(zt);
      Gn(sr, { size: 20 }), _(zt);
      var us = y(zt, 2), hs = m(us), Xs = m(hs);
      {
        var Ao = (ae) => {
          var se = UI();
          ie(
            (Qe) => {
              de(se, "src", n().photoURL), de(se, "alt", Qe);
            },
            [() => s()("프로필")]
          ), x(ae, se);
        }, ir = (ae) => {
          var se = jI(), Qe = m(se, !0);
          _(se), ie((Rt) => R(Qe, Rt), [h]), x(ae, se);
        };
        Ne(Xs, (ae) => {
          n()?.photoURL ? ae(Ao) : ae(ir, !1);
        });
      }
      _(hs), _(us);
      var Zs = y(us, 2), ei = m(Zs);
      di(ei, { size: 24 }), _(Zs), _(gt), ie(
        (ae, se, Qe, Rt, Ln, $n, Fn, ds, Un) => {
          R(L, ae), R(G, se), R(oe, Qe), R(it, n()?.displayName || n()?.email), de(mt, "title", Rt), de(ne, "title", Ln), de(He, "title", $n), de(zt, "title", Fn), de(us, "title", ds), de(Zs, "title", Un);
        },
        [
          () => s()("포럼"),
          () => s()("채팅"),
          () => s()("사용자찾기"),
          () => s()("메뉴"),
          () => s()("포럼"),
          () => s()("사용자찾기"),
          () => s()("채팅"),
          () => s()("프로필"),
          () => s()("메뉴")
        ]
      ), x(N, v);
    }, k = (N) => {
      var v = zI(), w = ye(v), A = m(w), $ = m(A);
      hi($, { size: 16 });
      var U = y($, 2), L = m(U, !0);
      _(U), _(A);
      var P = y(A, 2), H = m(P, !0);
      _(P);
      var re = y(P, 2), G = m(re, !0);
      _(re);
      var X = y(re, 2), be = m(X);
      di(be, { size: 20 }), _(X), _(w);
      var Ie = y(w, 2), oe = m(Ie), _e = m(oe);
      hi(_e, { size: 20 }), _(oe);
      var he = y(oe, 2), Me = m(he);
      As(Me, { size: 20 }), _(he);
      var Re = y(he, 2), nt = m(Re);
      Gn(nt, { size: 20 }), _(Re);
      var Ye = y(Re, 2), st = y(Ye, 2), it = m(st);
      di(it, { size: 24 }), _(st), _(Ie), ie(
        (rt, ot, mt, at, gt, ne, Le, He, un) => {
          R(L, rt), R(H, ot), R(G, mt), de(X, "title", at), de(oe, "title", gt), de(he, "title", ne), de(Re, "title", Le), de(Ye, "title", He), de(st, "title", un);
        },
        [
          () => s()("포럼"),
          () => s()("로그인"),
          () => s()("회원가입"),
          () => s()("메뉴"),
          () => s()("포럼"),
          () => s()("사용자찾기"),
          () => s()("채팅"),
          () => s()("로그인"),
          () => s()("메뉴")
        ]
      ), x(N, v);
    };
    Ne(C, (N) => {
      n() ? N(S) : N(k, !1);
    });
  }
  _(T), _(p), _(f), x(t, f), xn(), r();
}
Hi(["click"]);
customElements.define("sns-topbar", pe(VI, {}, [], [], !0));
var qI = /* @__PURE__ */ Y('<a href="/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), GI = /* @__PURE__ */ Y('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), KI = /* @__PURE__ */ Y('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/users" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <div class="menu-item disabled svelte-najsij"><!> <span> </span></div></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/users" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-notice svelte-najsij"> </div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const YI = {
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
function QI(t, e) {
  Pn(e, !1), os(t, YI);
  const n = () => Si(Zl, "$t", i), s = () => Si(Jl, "$user", i), [i, r] = tl();
  Sh();
  var o = KI(), a = m(o), l = m(a), c = m(l, !0);
  _(l);
  var h = y(l, 2), d = m(h), u = m(d);
  Hf(u, {
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
  var f = y(u, 2), p = m(f, !0);
  _(f), _(d);
  var g = y(d, 2), b = m(g);
  Gn(b, { size: 20 });
  var T = y(b, 2), C = m(T, !0);
  _(T), _(g);
  var S = y(g, 2), k = m(S);
  As(k, { size: 20 });
  var N = y(k, 2), v = m(N, !0);
  _(N), _(S);
  var w = y(S, 2), A = m(w);
  ks(A, { size: 20 });
  var $ = y(A, 2), U = m($, !0);
  _($), _(w);
  var L = y(w, 2), P = m(L);
  Xl(P, { size: 20 });
  var H = y(P, 2), re = m(H, !0);
  _(H), _(L), _(h);
  var G = y(h, 4), X = m(G), be = m(X, !0);
  _(X);
  var Ie = y(X, 2), oe = m(Ie);
  {
    var _e = (vt) => {
      var yt = qI(), Nt = m(yt);
      ks(Nt, { size: 16 });
      var Ht = y(Nt, 2), hn = m(Ht, !0);
      _(Ht), _(yt), ie((jn) => R(hn, jn), [() => n()("회원정보수정")]), x(vt, yt);
    }, he = (vt) => {
      var yt = GI(), Nt = ye(yt), Ht = m(Nt);
      Bf(Ht, { size: 16 });
      var hn = y(Ht, 2), jn = m(hn, !0);
      _(hn), _(Nt);
      var rr = y(Nt, 2), or = m(rr);
      ks(or, { size: 16 });
      var ar = y(or, 2), Ro = m(ar, !0);
      _(ar), _(rr), ie(
        (No, Po) => {
          R(jn, No), R(Ro, Po);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), x(vt, yt);
    };
    Ne(oe, (vt) => {
      s() ? vt(_e) : vt(he, !1);
    });
  }
  _(Ie), _(G);
  var Me = y(G, 4), Re = m(Me), nt = m(Re);
  As(nt, { size: 16 });
  var Ye = y(nt, 2), st = m(Ye, !0);
  _(Ye), _(Re);
  var it = y(Re, 2), rt = y(m(it), 2), ot = m(rt, !0);
  _(rt);
  var mt = y(rt, 2);
  La(mt, { size: 12, class: "external-icon" }), _(it);
  var at = y(it, 2), gt = m(at);
  Gn(gt, { size: 16 });
  var ne = y(gt, 2), Le = m(ne, !0);
  _(ne);
  var He = y(ne, 2);
  La(He, { size: 12, class: "external-icon" }), _(at);
  var un = y(at, 2), zt = m(un);
  Wf(zt, { size: 16 });
  var sr = y(zt, 2), us = m(sr, !0);
  _(sr), _(un), _(Me);
  var hs = y(Me, 2), Xs = m(hs), Ao = m(Xs, !0);
  _(Xs);
  var ir = y(Xs, 2), Zs = m(ir, !0);
  _(ir), _(hs);
  var ei = y(hs, 2), ae = m(ei), se = m(ae), Qe = m(se, !0);
  _(se);
  var Rt = y(se, 2), Ln = m(Rt, !0);
  _(Rt), _(ae), _(ei);
  var $n = y(ei, 2), Fn = m($n), ds = m(Fn, !0), Un = y(ds, 2);
  _(Fn), _($n), _(a), _(o), ie(
    (vt, yt, Nt, Ht, hn, jn, rr, or, ar, Ro, No, Po, Yf, Qf, Jf, Xf, Zf) => {
      R(c, vt), R(p, yt), R(C, Nt), R(v, Ht), R(U, hn), R(re, jn), R(be, rr), R(st, or), R(ot, ar), R(Le, Ro), R(us, No), R(Ao, Po), R(Zs, Yf), R(Qe, Qf), R(Ln, Jf), R(ds, Xf), R(Un, ` ${Zf ?? ""}`);
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
  ), x(t, o), xn(), r();
}
customElements.define("sns-left-sidebar", pe(QI, {}, [], [], !0));
var JI = /* @__PURE__ */ Y('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const XI = {
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
function ZI(t, e) {
  Pn(e, !0), os(t, XI);
  const n = () => Si(Zl, "$t", s), [s, i] = tl();
  let r = /* @__PURE__ */ fe(Vt({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = JI(), a = m(o), l = m(a), c = m(l, !0);
  _(l);
  var h = y(l, 2), d = m(h), u = m(d), f = m(u);
  ks(f, { size: 20 }), _(u);
  var p = y(u, 2), g = m(p), b = m(g, !0);
  _(g);
  var T = y(g, 2), C = m(T, !0);
  _(T), _(p), _(d);
  var S = y(d, 2), k = m(S), N = m(k);
  qf(N, { size: 20 }), _(k);
  var v = y(k, 2), w = m(v), A = m(w, !0);
  _(w);
  var $ = y(w, 2), U = m($, !0);
  _($), _(v), _(S);
  var L = y(S, 2), P = m(L), H = m(P);
  Xl(H, { size: 20 }), _(P);
  var re = y(P, 2), G = m(re), X = m(G, !0);
  _(G);
  var be = y(G, 2), Ie = m(be, !0);
  _(be);
  var oe = y(be, 2), _e = m(oe, !0);
  _(oe), _(re), _(L);
  var he = y(L, 2), Me = m(he), Re = m(Me);
  Gn(Re, { size: 20 }), _(Me);
  var nt = y(Me, 2), Ye = m(nt), st = m(Ye, !0);
  _(Ye);
  var it = y(Ye, 2), rt = m(it, !0);
  _(it), _(nt), _(he), _(h);
  var ot = y(h, 2), mt = m(ot, !0);
  _(ot), _(a), _(o), ie(
    (at, gt, ne, Le, He, un, zt) => {
      R(c, at), R(b, gt), R(C, E(r).totalUsers), R(A, ne), R(U, E(r).totalScore), R(X, Le), R(Ie, E(r).totalPosts), R(_e, He), R(st, un), R(rt, E(r).totalMessages), R(mt, zt);
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
  ), x(t, o), xn(), i();
}
customElements.define("sns-right-sidebar", pe(ZI, {}, [], [], !0));
var eC = /* @__PURE__ */ Y('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const tC = {
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
function nC(t, e) {
  os(t, tC);
  var n = eC(), s = m(n), i = y(s, 2), r = m(i);
  Ti(r, 1, "left-sidebar svelte-um1xbq");
  var o = y(r, 2), a = m(o);
  ze(a, e, "default", {}), _(o);
  var l = y(o, 2);
  Ti(l, 1, "right-sidebar svelte-um1xbq"), _(i), _(n), x(t, n);
}
customElements.define("sns-layout", pe(nC, {}, ["default"], [], !0));
var sC = /* @__PURE__ */ Y('<div class="text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm"> </div>'), iC = /* @__PURE__ */ Y('<p class="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md border border-blue-200"> </p>'), rC = /* @__PURE__ */ Y('<p class="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-md border border-green-200 mt-2"> </p>'), oC = /* @__PURE__ */ Y('<div class="accordion-content px-6 py-4 bg-white border-t border-gray-100 svelte-m3h71q"><p class="text-gray-700 leading-relaxed mb-3"> </p> <!> <!></div>'), aC = /* @__PURE__ */ Y('<div class="accordion-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"><button class="accordion-trigger w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all svelte-m3h71q"><div class="flex items-center gap-3 flex-1"><!> <span class="text-lg font-semibold text-gray-800"> </span></div> <div><!></div></button> <!></div>'), lC = /* @__PURE__ */ Y('<div class="accordion w-full space-y-4"></div>');
const cC = {
  hash: "svelte-m3h71q",
  code: `\r
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
  }`
};
function uC(t, e) {
  Pn(e, !0), os(t, cC);
  let n = ct(e, "items", 7, "[]"), s = ct(e, "type", 7, "single"), i = ct(e, "collapsible", 7, !0), r = /* @__PURE__ */ ta(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ ta(() => () => {
    const u = i();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ fe(Vt(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(E(a));
    s() === "single" ? f.has(u) ? E(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), B(a, f, !0);
  }
  function c(u) {
    return E(a).has(u);
  }
  var h = {
    get items() {
      return n();
    },
    set items(u = "[]") {
      n(u), Xe();
    },
    get type() {
      return s();
    },
    set type(u = "single") {
      s(u), Xe();
    },
    get collapsible() {
      return i();
    },
    set collapsible(u = !0) {
      i(u), Xe();
    }
  }, d = lC();
  return lo(d, 21, () => E(r), Za, (u, f, p) => {
    var g = aC(), b = m(g);
    b.__click = () => l(p);
    var T = m(b), C = m(T);
    {
      var S = (L) => {
        var P = sC(), H = m(P, !0);
        _(P), ie(() => R(H, E(f).icon)), x(L, P);
      };
      Ne(C, (L) => {
        E(f).icon && L(S);
      });
    }
    var k = y(C, 2), N = m(k, !0);
    _(k), _(T);
    var v = y(T, 2);
    let w;
    var A = m(v);
    zf(A, { size: 20, class: "text-gray-600" }), _(v), _(b);
    var $ = y(b, 2);
    {
      var U = (L) => {
        var P = oC(), H = m(P), re = m(H, !0);
        _(H);
        var G = y(H, 2);
        {
          var X = (oe) => {
            var _e = iC(), he = m(_e, !0);
            _(_e), ie(() => R(he, E(f).hint)), x(oe, _e);
          };
          Ne(G, (oe) => {
            E(f).hint && oe(X);
          });
        }
        var be = y(G, 2);
        {
          var Ie = (oe) => {
            var _e = rC(), he = m(_e, !0);
            _(_e), ie(() => R(he, E(f).gpl)), x(oe, _e);
          };
          Ne(be, (oe) => {
            E(f).gpl && oe(Ie);
          });
        }
        _(P), ie(() => R(re, E(f).content)), x(L, P);
      };
      Ne($, (L) => {
        c(p) && L(U);
      });
    }
    _(g), ie(
      (L, P) => {
        de(b, "aria-expanded", L), R(N, E(f).title), w = Ti(v, 1, "chevron transition-transform duration-200 svelte-m3h71q", null, w, P);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), x(u, g);
  }), _(d), x(t, d), xn(h);
}
Hi(["click"]);
customElements.define("sns-accordion", pe(uC, { items: {}, type: {}, collapsible: {} }, [], [], !0));
function dC(t) {
  const { subscribe: e, set: n } = Bi(null), s = Lt($t, t);
  return Jr(s, (i) => {
    const r = i.val();
    n(r);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => Ql(s)
  };
}
async function fC(t, e) {
  try {
    const n = Lt($t, t);
    return await To(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function pC(t, e) {
  try {
    const n = Lt($t, t);
    return await Da(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function _C(t) {
  try {
    const e = Lt($t, t);
    return await GE(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function mC(t, e) {
  try {
    const n = Lt($t, t), s = qE(n);
    return await To(s, e), { success: !0, key: s.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function gC(t) {
  try {
    const e = Lt($t, t), n = await KE(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function vC(t) {
  const e = Lt($t, `status/${t}`), n = Lt($t, ".info/connected");
  return Jr(n, (s) => {
    s.val() === !0 && (To(e, {
      online: !0,
      lastSeen: Date.now()
    }), Jr(Lt($t, ".info/connected"), (i) => {
      i.val() || Da(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    Da(e, {
      online: !1,
      lastSeen: Date.now()
    }), Ql(n);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  ko as auth,
  dC as createRealtimeStore,
  $t as database,
  _C as deleteData,
  aI as loading,
  mC as pushData,
  gC as readData,
  vC as setupPresence,
  lI as signIn,
  uI as signOut,
  cI as signUp,
  pC as updateData,
  Jl as user,
  fC as writeData
};
