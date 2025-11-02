typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Zh = 1, ed = 2, td = 16, nd = 2, $l = "[", Ti = "[!", to = "]", In = {}, re = Symbol(), sd = "http://www.w3.org/1999/xhtml", Wl = !1;
var Bl = Array.isArray, id = Array.prototype.indexOf, no = Array.from, qs = Object.keys, Ks = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, rd = Object.getOwnPropertyDescriptors, od = Object.prototype, ad = Array.prototype, Hl = Object.getPrototypeOf, va = Object.isExtensible;
const tr = () => {
};
function ld(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Vl() {
  var n, e, t = new Promise((s, i) => {
    n = s, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const ce = 2, so = 4, io = 8, ht = 16, dt = 32, Ot = 64, Si = 128, oe = 1024, Ee = 2048, ft = 4096, Ce = 8192, it = 16384, ro = 32768, Cn = 65536, ya = 1 << 17, cd = 1 << 18, en = 1 << 19, ud = 1 << 20, ke = 256, Ys = 512, Qs = 32768, Ir = 1 << 21, oo = 1 << 22, Vt = 1 << 23, nr = Symbol("$state"), hd = Symbol("legacy props"), dd = Symbol(""), un = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ao = 3, Mn = 8;
function zl(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function pd(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _d() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gd(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function md() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vd() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function yd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ed() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Id() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ri(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Cd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let O = !1;
function et(n) {
  O = n;
}
let P;
function ye(n) {
  if (n === null)
    throw Ri(), In;
  return P = n;
}
function ki() {
  return ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(P)
  );
}
function B(n) {
  if (O) {
    if (/* @__PURE__ */ Qe(P) !== null)
      throw Ri(), In;
    P = n;
  }
}
function bd(n = 1) {
  if (O) {
    for (var e = n, t = P; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(t);
    P = t;
  }
}
function Js(n = !0) {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === Mn) {
      var s = (
        /** @type {Comment} */
        t.data
      );
      if (s === to) {
        if (e === 0) return t;
        e -= 1;
      } else (s === $l || s === Ti) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(t)
    );
    n && t.remove(), t = i;
  }
}
function jl(n) {
  if (!n || n.nodeType !== Mn)
    throw Ri(), In;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Gl(n) {
  return n === this.v;
}
function ql(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Kl(n) {
  return !ql(n, this.v);
}
let Td = !1, we = null;
function bn(n) {
  we = n;
}
function lo(n, e = !1, t) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: null
  };
}
function co(n) {
  var e = (
    /** @type {ComponentContext} */
    we
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var s of t)
      fc(s);
  }
  return n !== void 0 && (e.x = n), e.i = !0, we = e.p, n ?? /** @type {T} */
  {};
}
function Yl() {
  return !0;
}
let Wt = [];
function Ql() {
  var n = Wt;
  Wt = [], ld(n);
}
function Is(n) {
  if (Wt.length === 0 && !Jn) {
    var e = Wt;
    queueMicrotask(() => {
      e === Wt && Ql();
    });
  }
  Wt.push(n);
}
function Sd() {
  for (; Wt.length > 0; )
    Ql();
}
function Jl(n) {
  var e = S;
  if (e === null)
    return R.f |= Vt, n;
  if ((e.f & ro) === 0) {
    if ((e.f & Si) === 0)
      throw n;
    e.b.error(n);
  } else
    Tn(n, e);
}
function Tn(n, e) {
  for (; e !== null; ) {
    if ((e.f & Si) !== 0)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n;
}
const Ls = /* @__PURE__ */ new Set();
let H = null, Ws = null, De = null, ze = [], Ai = null, Cr = !1, Jn = !1;
class Le {
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
    ze = [], Ws = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of e)
      this.#i(s, t);
    this.is_fork || this.#c(), this.#s > 0 || this.is_fork ? (this.#r(t.effects), this.#r(t.render_effects), this.#r(t.block_effects)) : (Ws = this, H = null, Ea(t.render_effects), Ea(t.effects), Ws = null, this.#l?.resolve()), De = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(e, t) {
    e.f ^= oe;
    for (var s = e.first; s !== null; ) {
      var i = s.f, r = (i & (dt | Ot)) !== 0, o = r && (i & oe) !== 0, a = o || (i & Ce) !== 0 || this.skipped_effects.has(s);
      if ((s.f & Si) !== 0 && s.b?.is_pending() && (t = {
        parent: t,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && s.fn !== null) {
        r ? s.f ^= oe : (i & so) !== 0 ? t.effects.push(s) : Cs(s) && ((s.f & ht) !== 0 && t.block_effects.push(s), ls(s));
        var l = s.first;
        if (l !== null) {
          s = l;
          continue;
        }
      }
      var c = s.parent;
      for (s = s.next; s === null && c !== null; )
        c === t.effect && (this.#r(t.effects), this.#r(t.render_effects), this.#r(t.block_effects), t = /** @type {EffectTarget} */
        t.parent), s = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #r(e) {
    for (const t of e)
      ((t.f & Ee) !== 0 ? this.#o : this.#a).push(t), le(t, oe);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), this.current.set(e, e.v), De?.set(e, e.v);
  }
  activate() {
    H = this;
  }
  deactivate() {
    H = null, De = null;
  }
  flush() {
    if (this.activate(), ze.length > 0) {
      if (Xl(), H !== null && H !== this)
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
    if (Ls.size > 1) {
      this.previous.clear();
      var e = De, t = !0, s = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Ls) {
        if (i === this) {
          t = !1;
          continue;
        }
        const r = [];
        for (const [a, l] of this.current) {
          if (i.current.has(a))
            if (t && l !== i.current.get(a))
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
            Zl(c, o, a, l);
          if (ze.length > 0) {
            H = i, i.apply();
            for (const c of ze)
              i.#i(c, s);
            ze = [], i.deactivate();
          }
        }
      }
      H = null, De = e;
    }
    this.committed = !0, Ls.delete(this);
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
      le(e, Ee), jt(e);
    for (const e of this.#a)
      le(e, ft), jt(e);
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
    return (this.#l ??= Vl()).promise;
  }
  static ensure() {
    if (H === null) {
      const e = H = new Le();
      Ls.add(H), Jn || Le.enqueue(() => {
        H === e && e.flush();
      });
    }
    return H;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Is(e);
  }
  apply() {
  }
}
function Xs(n) {
  var e = Jn;
  Jn = !0;
  try {
    for (var t; ; ) {
      if (Sd(), ze.length === 0 && (H?.flush(), ze.length === 0))
        return Ai = null, /** @type {T} */
        t;
      Xl();
    }
  } finally {
    Jn = e;
  }
}
function Xl() {
  var n = gn;
  Cr = !0;
  try {
    var e = 0;
    for (ba(!0); ze.length > 0; ) {
      var t = Le.ensure();
      if (e++ > 1e3) {
        var s, i;
        Rd();
      }
      t.process(ze), Ct.clear();
    }
  } finally {
    Cr = !1, ba(n), Ai = null;
  }
}
function Rd() {
  try {
    md();
  } catch (n) {
    Tn(n, Ai);
  }
}
let Ze = null;
function Ea(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var s = n[t++];
      if ((s.f & (it | Ce)) === 0 && Cs(s) && (Ze = /* @__PURE__ */ new Set(), ls(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null && s.ac === null ? gc(s) : s.fn = null), Ze?.size > 0)) {
        Ct.clear();
        for (const i of Ze) {
          if ((i.f & (it | Ce)) !== 0) continue;
          const r = [i];
          let o = i.parent;
          for (; o !== null; )
            Ze.has(o) && (Ze.delete(o), r.push(o)), o = o.parent;
          for (let a = r.length - 1; a >= 0; a--) {
            const l = r[a];
            (l.f & (it | Ce)) === 0 && ls(l);
          }
        }
        Ze.clear();
      }
    }
    Ze = null;
  }
}
function Zl(n, e, t, s) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const i of n.reactions) {
      const r = i.f;
      (r & ce) !== 0 ? Zl(
        /** @type {Derived} */
        i,
        e,
        t,
        s
      ) : (r & (oo | ht)) !== 0 && (r & Ee) === 0 && // we may have scheduled this one already
      ec(i, e, s) && (le(i, Ee), jt(
        /** @type {Effect} */
        i
      ));
    }
}
function ec(n, e, t) {
  const s = t.get(n);
  if (s !== void 0) return s;
  if (n.deps !== null)
    for (const i of n.deps) {
      if (e.includes(i))
        return !0;
      if ((i.f & ce) !== 0 && ec(
        /** @type {Derived} */
        i,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function jt(n) {
  for (var e = Ai = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (Cr && e === S && (t & ht) !== 0)
      return;
    if ((t & (Ot | dt)) !== 0) {
      if ((t & oe) === 0) return;
      e.f ^= oe;
    }
  }
  ze.push(e);
}
function kd(n) {
  let e = 0, t = Gt(0), s;
  return () => {
    Bd() && (y(t), fo(() => (e === 0 && (s = Pi(() => n(() => Xn(t)))), e += 1, () => {
      Is(() => {
        e -= 1, e === 0 && (s?.(), s = void 0, Xn(t));
      });
    })));
  };
}
var Ad = Cn | en | Si;
function Nd(n, e, t) {
  new Pd(n, e, t);
}
class Pd {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #n = O ? P : null;
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
  #y = kd(() => (this.#d = Gt(this.#f), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, s) {
    this.#e = e, this.#s = t, this.#l = s, this.parent = /** @type {Effect} */
    S.b, this.#t = !!this.#s.pending, this.#o = po(() => {
      if (S.b = this, O) {
        const r = this.#n;
        ki(), /** @type {Comment} */
        r.nodeType === Mn && /** @type {Comment} */
        r.data === Ti ? this.#w() : this.#E();
      } else {
        var i = this.#m();
        try {
          this.#a = Te(() => s(i));
        } catch (r) {
          this.error(r);
        }
        this.#h > 0 ? this.#g() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Ad), O && (this.#e = P);
  }
  #E() {
    try {
      this.#a = Te(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#s.pending;
    e && (this.#i = Te(() => e(this.#e)), Le.enqueue(() => {
      var t = this.#m();
      this.#a = this.#_(() => (Le.ensure(), Te(() => this.#l(t)))), this.#h > 0 ? this.#g() : (_n(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var e = this.#e;
    return this.#t && (this.#u = We(), this.#e.before(this.#u), e = this.#u), e;
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
    var t = S, s = R, i = we;
    Ye(this.#o), me(this.#o), bn(this.#o.ctx);
    try {
      return e();
    } catch (r) {
      return Jl(r), null;
    } finally {
      Ye(t), me(s), bn(i);
    }
  }
  #g() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#s.pending
    );
    this.#a !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), yc(this.#a, this.#c)), this.#i === null && (this.#i = Te(() => e(this.#e)));
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
    this.#h += e, this.#h === 0 && (this.#t = !1, this.#i && _n(this.#i, () => {
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
    this.#v(e), this.#f += e, this.#d && os(this.#d, this.#f);
  }
  get_effect_pending() {
    return this.#y(), y(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = this.#s.onerror;
    let s = this.#s.failed;
    if (this.#p || !t && !s)
      throw e;
    this.#a && (ae(this.#a), this.#a = null), this.#i && (ae(this.#i), this.#i = null), this.#r && (ae(this.#r), this.#r = null), O && (ye(
      /** @type {TemplateNode} */
      this.#n
    ), bd(), ye(Js()));
    var i = !1, r = !1;
    const o = () => {
      if (i) {
        Cd();
        return;
      }
      i = !0, r && Id(), Le.ensure(), this.#f = 0, this.#r !== null && _n(this.#r, () => {
        this.#r = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#_(() => (this.#p = !1, Te(() => this.#l(this.#e)))), this.#h > 0 ? this.#g() : this.#t = !1;
    };
    var a = R;
    try {
      me(null), r = !0, t?.(e, o), r = !1;
    } catch (l) {
      Tn(l, this.#o && this.#o.parent);
    } finally {
      me(a);
    }
    s && Is(() => {
      this.#r = this.#_(() => {
        Le.ensure(), this.#p = !0;
        try {
          return Te(() => {
            s(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Tn(
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
function Od(n, e, t, s) {
  const i = uo;
  if (t.length === 0 && n.length === 0) {
    s(e.map(i));
    return;
  }
  var r = H, o = (
    /** @type {Effect} */
    S
  ), a = Dd();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ xd(c))).then((c) => {
      a();
      try {
        s([...e.map(i), ...c]);
      } catch (h) {
        (o.f & it) === 0 && Tn(h, o);
      }
      r?.deactivate(), Zs();
    }).catch((c) => {
      Tn(c, o);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    a();
    try {
      return l();
    } finally {
      r?.deactivate(), Zs();
    }
  }) : l();
}
function Dd() {
  var n = S, e = R, t = we, s = H;
  return function(r = !0) {
    Ye(n), me(e), bn(t), r && s?.activate();
  };
}
function Zs() {
  Ye(null), me(null), bn(null);
}
// @__NO_SIDE_EFFECTS__
function uo(n) {
  var e = ce | Ee, t = R !== null && (R.f & ce) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return S === null || t !== null && (t.f & ke) !== 0 ? e |= ke : S.f |= en, {
    ctx: we,
    deps: null,
    effects: null,
    equals: Gl,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      re
    ),
    wv: 0,
    parent: t ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function xd(n, e) {
  let t = (
    /** @type {Effect | null} */
    S
  );
  t === null && fd();
  var s = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = Gt(
    /** @type {V} */
    re
  ), o = !R, a = /* @__PURE__ */ new Map();
  return Gd(() => {
    var l = Vl();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === H && c.committed && c.deactivate(), Zs();
      });
    } catch (u) {
      l.reject(u), Zs();
    }
    var c = (
      /** @type {Batch} */
      H
    );
    if (o) {
      var h = !s.is_pending();
      s.update_pending_count(1), c.increment(h), a.get(c)?.reject(un), a.delete(c), a.set(c, l);
    }
    const d = (u, f = void 0) => {
      if (c.activate(), f)
        f !== un && (r.f |= Vt, os(r, f));
      else {
        (r.f & Vt) !== 0 && (r.f ^= Vt), os(r, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(un);
        }
      }
      o && (s.update_pending_count(-1), c.decrement(h));
    };
    l.promise.then(d, (u) => d(null, u || "unknown"));
  }), dc(() => {
    for (const l of a.values())
      l.reject(un);
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
function Md(n) {
  const e = /* @__PURE__ */ uo(n);
  return e.equals = Kl, e;
}
function tc(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      ae(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Ld(n) {
  for (var e = n.parent; e !== null; ) {
    if ((e.f & ce) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ho(n) {
  var e, t = S;
  Ye(Ld(n));
  try {
    n.f &= ~Qs, tc(n), e = Cc(n);
  } finally {
    Ye(t);
  }
  return e;
}
function nc(n) {
  var e = ho(n);
  if (n.equals(e) || (n.v = e, n.wv = wc()), !tn)
    if (De !== null)
      De.set(n, n.v);
    else {
      var t = (wt || (n.f & ke) !== 0) && n.deps !== null ? ft : oe;
      le(n, t);
    }
}
let br = /* @__PURE__ */ new Set();
const Ct = /* @__PURE__ */ new Map();
let sc = !1;
function Gt(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Gl,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function te(n, e) {
  const t = Gt(n);
  return Yd(t), t;
}
// @__NO_SIDE_EFFECTS__
function ic(n, e = !1, t = !0) {
  const s = Gt(n);
  return e || (s.equals = Kl), s;
}
function x(n, e, t = !1) {
  R !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (R.f & ya) !== 0) && Yl() && (R.f & (ce | ht | oo | ya)) !== 0 && !rt?.includes(n) && wd();
  let s = t ? hn(e) : e;
  return os(n, s);
}
function os(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    tn ? Ct.set(n, e) : Ct.set(n, t), n.v = e;
    var s = Le.ensure();
    s.capture(n, t), (n.f & ce) !== 0 && ((n.f & Ee) !== 0 && ho(
      /** @type {Derived} */
      n
    ), le(n, (n.f & ke) === 0 ? oe : ft)), n.wv = wc(), rc(n, Ee), S !== null && (S.f & oe) !== 0 && (S.f & (dt | Ot)) === 0 && (be === null ? Qd([n]) : be.push(n)), !s.is_fork && br.size > 0 && !sc && Fd();
  }
  return e;
}
function Fd() {
  sc = !1;
  const n = Array.from(br);
  for (const e of n)
    (e.f & oe) !== 0 && le(e, ft), Cs(e) && ls(e);
  br.clear();
}
function Xn(n) {
  x(n, n.v + 1);
}
function rc(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var s = t.length, i = 0; i < s; i++) {
      var r = t[i], o = r.f, a = (o & Ee) === 0;
      a && le(r, e), (o & ce) !== 0 ? (o & Qs) === 0 && (r.f |= Qs, rc(
        /** @type {Derived} */
        r,
        ft
      )) : a && ((o & ht) !== 0 && Ze !== null && Ze.add(
        /** @type {Effect} */
        r
      ), jt(
        /** @type {Effect} */
        r
      ));
    }
}
function hn(n) {
  if (typeof n != "object" || n === null || nr in n)
    return n;
  const e = Hl(n);
  if (e !== od && e !== ad)
    return n;
  var t = /* @__PURE__ */ new Map(), s = Bl(n), i = /* @__PURE__ */ te(0), r = zt, o = (a) => {
    if (zt === r)
      return a();
    var l = R, c = zt;
    me(null), Sa(r);
    var h = a();
    return me(l), Sa(c), h;
  };
  return s && t.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && yd();
        var h = t.get(l);
        return h === void 0 ? h = o(() => {
          var d = /* @__PURE__ */ te(c.value);
          return t.set(l, d), d;
        }) : x(h, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in a) {
            const h = o(() => /* @__PURE__ */ te(re));
            t.set(l, h), Xn(i);
          }
        } else
          x(c, re), Xn(i);
        return !0;
      },
      get(a, l, c) {
        if (l === nr)
          return n;
        var h = t.get(l), d = l in a;
        if (h === void 0 && (!d || pn(a, l)?.writable) && (h = o(() => {
          var f = hn(d ? a[l] : re), p = /* @__PURE__ */ te(f);
          return p;
        }), t.set(l, h)), h !== void 0) {
          var u = y(h);
          return u === re ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var h = t.get(l);
          h && (c.value = y(h));
        } else if (c === void 0) {
          var d = t.get(l), u = d?.v;
          if (d !== void 0 && u !== re)
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
        if (l === nr)
          return !0;
        var c = t.get(l), h = c !== void 0 && c.v !== re || Reflect.has(a, l);
        if (c !== void 0 || S !== null && (!h || pn(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = h ? hn(a[l]) : re, f = /* @__PURE__ */ te(u);
            return f;
          }), t.set(l, c));
          var d = y(c);
          if (d === re)
            return !1;
        }
        return h;
      },
      set(a, l, c, h) {
        var d = t.get(l), u = l in a;
        if (s && l === "length")
          for (var f = c; f < /** @type {Source<number>} */
          d.v; f += 1) {
            var p = t.get(f + "");
            p !== void 0 ? x(p, re) : f in a && (p = o(() => /* @__PURE__ */ te(re)), t.set(f + "", p));
          }
        if (d === void 0)
          (!u || pn(a, l)?.writable) && (d = o(() => /* @__PURE__ */ te(void 0)), x(d, hn(c)), t.set(l, d));
        else {
          u = d.v !== re;
          var g = o(() => hn(c));
          x(d, g);
        }
        var v = Reflect.getOwnPropertyDescriptor(a, l);
        if (v?.set && v.set.call(h, c), !u) {
          if (s && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              t.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= A.v && x(A, m + 1);
          }
          Xn(i);
        }
        return !0;
      },
      ownKeys(a) {
        y(i);
        var l = Reflect.ownKeys(a).filter((d) => {
          var u = t.get(d);
          return u === void 0 || u.v !== re;
        });
        for (var [c, h] of t)
          h.v !== re && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ed();
      }
    }
  );
}
var wa, oc, ac, lc;
function Tr() {
  if (wa === void 0) {
    wa = window, oc = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    ac = pn(e, "firstChild").get, lc = pn(e, "nextSibling").get, va(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), va(t) && (t.__t = void 0);
  }
}
function We(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Sn(n) {
  return ac.call(n);
}
// @__NO_SIDE_EFFECTS__
function Qe(n) {
  return lc.call(n);
}
function z(n, e) {
  if (!O)
    return /* @__PURE__ */ Sn(n);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(P)
  );
  if (t === null)
    t = P.appendChild(We());
  else if (e && t.nodeType !== ao) {
    var s = We();
    return t?.before(s), ye(s), s;
  }
  return ye(t), t;
}
function Ia(n, e = !1) {
  if (!O) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Sn(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Qe(t) : t;
  }
  if (e && P?.nodeType !== ao) {
    var s = We();
    return P?.before(s), ye(s), s;
  }
  return P;
}
function ge(n, e = 1, t = !1) {
  let s = O ? P : n;
  for (var i; e--; )
    i = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(s);
  if (!O)
    return s;
  if (t && s?.nodeType !== ao) {
    var r = We();
    return s === null ? i?.after(r) : s.before(r), ye(r), r;
  }
  return ye(s), /** @type {TemplateNode} */
  s;
}
function cc(n) {
  n.textContent = "";
}
function uc() {
  return !1;
}
let Ca = !1;
function hc() {
  Ca || (Ca = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        if (!n.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ni(n) {
  var e = R, t = S;
  me(null), Ye(null);
  try {
    return n();
  } finally {
    me(e), Ye(t);
  }
}
function Ud(n, e, t, s = t) {
  n.addEventListener(e, () => Ni(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), s(!0);
  } : n.__on_r = () => s(!0), hc();
}
function $d(n) {
  S === null && R === null && gd(), R !== null && (R.f & ke) !== 0 && S === null && _d(), tn && pd();
}
function Wd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Je(n, e, t, s = !0) {
  var i = S;
  i !== null && (i.f & Ce) !== 0 && (n |= Ce);
  var r = {
    ctx: we,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | Ee,
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
  if (t)
    try {
      ls(r), r.f |= ro;
    } catch (l) {
      throw ae(r), l;
    }
  else e !== null && jt(r);
  if (s) {
    var o = r;
    if (t && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & en) === 0 && (o = o.first, (n & ht) !== 0 && (n & Cn) !== 0 && o !== null && (o.f |= Cn)), o !== null && (o.parent = i, i !== null && Wd(o, i), R !== null && (R.f & ce) !== 0 && (n & Ot) === 0)) {
      var a = (
        /** @type {Derived} */
        R
      );
      (a.effects ??= []).push(o);
    }
  }
  return r;
}
function Bd() {
  return R !== null && !xe;
}
function dc(n) {
  const e = Je(io, null, !1);
  return le(e, oe), e.teardown = n, e;
}
function Hd(n) {
  $d();
  var e = (
    /** @type {Effect} */
    S.f
  ), t = !R && (e & dt) !== 0 && (e & ro) === 0;
  if (t) {
    var s = (
      /** @type {ComponentContext} */
      we
    );
    (s.e ??= []).push(n);
  } else
    return fc(n);
}
function fc(n) {
  return Je(so | ud, n, !1);
}
function Vd(n) {
  Le.ensure();
  const e = Je(Ot | en, n, !0);
  return () => {
    ae(e);
  };
}
function zd(n) {
  Le.ensure();
  const e = Je(Ot | en, n, !0);
  return (t = {}) => new Promise((s) => {
    t.outro ? _n(e, () => {
      ae(e), s(void 0);
    }) : (ae(e), s(void 0));
  });
}
function jd(n) {
  return Je(so, n, !1);
}
function Gd(n) {
  return Je(oo | en, n, !0);
}
function fo(n, e = 0) {
  return Je(io | e, n, !0);
}
function Bt(n, e = [], t = [], s = []) {
  Od(s, e, t, (i) => {
    Je(io, () => n(...i.map(y)), !0);
  });
}
function po(n, e = 0) {
  var t = Je(ht | e, n, !0);
  return t;
}
function Te(n, e = !0) {
  return Je(dt | en, n, !0, e);
}
function pc(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = tn, s = R;
    Ta(!0), me(null);
    try {
      e.call(null);
    } finally {
      Ta(t), me(s);
    }
  }
}
function _c(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ni(() => {
      i.abort(un);
    });
    var s = t.next;
    (t.f & Ot) !== 0 ? t.parent = null : ae(t, e), t = s;
  }
}
function qd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    (e.f & dt) === 0 && ae(e), e = t;
  }
}
function ae(n, e = !0) {
  var t = !1;
  (e || (n.f & cd) !== 0) && n.nodes_start !== null && n.nodes_end !== null && (Kd(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), _c(n, e && !t), ei(n, 0), le(n, it);
  var s = n.transitions;
  if (s !== null)
    for (const r of s)
      r.stop();
  pc(n);
  var i = n.parent;
  i !== null && i.first !== null && gc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function Kd(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(n)
    );
    n.remove(), n = t;
  }
}
function gc(n) {
  var e = n.parent, t = n.prev, s = n.next;
  t !== null && (t.next = s), s !== null && (s.prev = t), e !== null && (e.first === n && (e.first = s), e.last === n && (e.last = t));
}
function _n(n, e, t = !0) {
  var s = [];
  _o(n, s, !0), mc(s, () => {
    t && ae(n), e && e();
  });
}
function mc(n, e) {
  var t = n.length;
  if (t > 0) {
    var s = () => --t || e();
    for (var i of n)
      i.out(s);
  } else
    e();
}
function _o(n, e, t) {
  if ((n.f & Ce) === 0) {
    if (n.f ^= Ce, n.transitions !== null)
      for (const o of n.transitions)
        (o.is_global || t) && e.push(o);
    for (var s = n.first; s !== null; ) {
      var i = s.next, r = (s.f & Cn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & dt) !== 0 && (n.f & ht) !== 0;
      _o(s, e, r ? t : !1), s = i;
    }
  }
}
function go(n) {
  vc(n, !0);
}
function vc(n, e) {
  if ((n.f & Ce) !== 0) {
    n.f ^= Ce, (n.f & oe) === 0 && (le(n, Ee), jt(n));
    for (var t = n.first; t !== null; ) {
      var s = t.next, i = (t.f & Cn) !== 0 || (t.f & dt) !== 0;
      vc(t, i ? e : !1), t = s;
    }
    if (n.transitions !== null)
      for (const r of n.transitions)
        (r.is_global || e) && r.in();
  }
}
function yc(n, e) {
  for (var t = n.nodes_start, s = n.nodes_end; t !== null; ) {
    var i = t === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(t)
    );
    e.append(t), t = i;
  }
}
let gn = !1;
function ba(n) {
  gn = n;
}
let tn = !1;
function Ta(n) {
  tn = n;
}
let R = null, xe = !1;
function me(n) {
  R = n;
}
let S = null;
function Ye(n) {
  S = n;
}
let rt = null;
function Yd(n) {
  R !== null && (rt === null ? rt = [n] : rt.push(n));
}
let ue = null, Ie = 0, be = null;
function Qd(n) {
  be = n;
}
let Ec = 1, as = 0, zt = as;
function Sa(n) {
  zt = n;
}
let wt = !1;
function wc() {
  return ++Ec;
}
function Cs(n) {
  var e = n.f;
  if ((e & Ee) !== 0)
    return !0;
  if ((e & ft) !== 0) {
    var t = n.deps, s = (e & ke) !== 0;
    if (e & ce && (n.f &= ~Qs), t !== null) {
      var i, r, o = (e & Ys) !== 0, a = s && S !== null && !wt, l = t.length;
      if ((o || a) && (S === null || (S.f & it) === 0)) {
        var c = (
          /** @type {Derived} */
          n
        ), h = c.parent;
        for (i = 0; i < l; i++)
          r = t[i], (o || !r?.reactions?.includes(c)) && (r.reactions ??= []).push(c);
        o && (c.f ^= Ys), a && h !== null && (h.f & ke) === 0 && (c.f ^= ke);
      }
      for (i = 0; i < l; i++)
        if (r = t[i], Cs(
          /** @type {Derived} */
          r
        ) && nc(
          /** @type {Derived} */
          r
        ), r.wv > n.wv)
          return !0;
    }
    (!s || S !== null && !wt) && le(n, oe);
  }
  return !1;
}
function Ic(n, e, t = !0) {
  var s = n.reactions;
  if (s !== null && !rt?.includes(n))
    for (var i = 0; i < s.length; i++) {
      var r = s[i];
      (r.f & ce) !== 0 ? Ic(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? le(r, Ee) : (r.f & oe) !== 0 && le(r, ft), jt(
        /** @type {Effect} */
        r
      ));
    }
}
function Cc(n) {
  var e = ue, t = Ie, s = be, i = R, r = wt, o = rt, a = we, l = xe, c = zt, h = n.f;
  ue = /** @type {null | Value[]} */
  null, Ie = 0, be = null, wt = (h & ke) !== 0 && (xe || !gn || R === null), R = (h & (dt | Ot)) === 0 ? n : null, rt = null, bn(n.ctx), xe = !1, zt = ++as, n.ac !== null && (Ni(() => {
    n.ac.abort(un);
  }), n.ac = null);
  try {
    n.f |= Ir;
    var d = (
      /** @type {Function} */
      n.fn
    ), u = d(), f = n.deps;
    if (ue !== null) {
      var p;
      if (ei(n, Ie), f !== null && Ie > 0)
        for (f.length = Ie + ue.length, p = 0; p < ue.length; p++)
          f[Ie + p] = ue[p];
      else
        n.deps = f = ue;
      if (!wt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & ce) !== 0 && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (p = Ie; p < f.length; p++)
          (f[p].reactions ??= []).push(n);
    } else f !== null && Ie < f.length && (ei(n, Ie), f.length = Ie);
    if (Yl() && be !== null && !xe && f !== null && (n.f & (ce | ft | Ee)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      be.length; p++)
        Ic(
          be[p],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (as++, be !== null && (s === null ? s = be : s.push(.../** @type {Source[]} */
    be))), (n.f & Vt) !== 0 && (n.f ^= Vt), u;
  } catch (g) {
    return Jl(g);
  } finally {
    n.f ^= Ir, ue = e, Ie = t, be = s, R = i, wt = r, rt = o, bn(a), xe = l, zt = c;
  }
}
function Jd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var s = id.call(t, n);
    if (s !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[s] = t[i], t.pop());
    }
  }
  t === null && (e.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !ue.includes(e)) && (le(e, ft), (e.f & (ke | Ys)) === 0 && (e.f ^= Ys), tc(
    /** @type {Derived} **/
    e
  ), ei(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ei(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var s = e; s < t.length; s++)
      Jd(n, t[s]);
}
function ls(n) {
  var e = n.f;
  if ((e & it) === 0) {
    le(n, oe);
    var t = S, s = gn;
    S = n, gn = !0;
    try {
      (e & ht) !== 0 ? qd(n) : _c(n), pc(n);
      var i = Cc(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Ec;
      var r;
      Wl && Td && (n.f & Ee) !== 0 && n.deps;
    } finally {
      gn = s, S = t;
    }
  }
}
async function Xd() {
  await Promise.resolve(), Xs();
}
function y(n) {
  var e = n.f, t = (e & ce) !== 0;
  if (R !== null && !xe) {
    var s = S !== null && (S.f & it) !== 0;
    if (!s && !rt?.includes(n)) {
      var i = R.deps;
      if ((R.f & Ir) !== 0)
        n.rv < as && (n.rv = as, ue === null && i !== null && i[Ie] === n ? Ie++ : ue === null ? ue = [n] : (!wt || !ue.includes(n)) && ue.push(n));
      else {
        (R.deps ??= []).push(n);
        var r = n.reactions;
        r === null ? n.reactions = [R] : r.includes(R) || r.push(R);
      }
    }
  } else if (t && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var o = (
      /** @type {Derived} */
      n
    ), a = o.parent;
    a !== null && (a.f & ke) === 0 && (o.f ^= ke);
  }
  if (tn) {
    if (Ct.has(n))
      return Ct.get(n);
    if (t) {
      o = /** @type {Derived} */
      n;
      var l = o.v;
      return ((o.f & oe) === 0 && o.reactions !== null || bc(o)) && (l = ho(o)), Ct.set(o, l), l;
    }
  } else if (t) {
    if (o = /** @type {Derived} */
    n, De?.has(o))
      return De.get(o);
    Cs(o) && nc(o);
  }
  if (De?.has(n))
    return De.get(n);
  if ((n.f & Vt) !== 0)
    throw n.v;
  return n.v;
}
function bc(n) {
  if (n.v === re) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Ct.has(e) || (e.f & ce) !== 0 && bc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pi(n) {
  var e = xe;
  try {
    return xe = !0, n();
  } finally {
    xe = e;
  }
}
const Zd = -7169;
function le(n, e) {
  n.f = n.f & Zd | e;
}
const Tc = /* @__PURE__ */ new Set(), Sr = /* @__PURE__ */ new Set();
function ef(n, e, t, s = {}) {
  function i(r) {
    if (s.capture || Kn.call(e, r), !r.cancelBubble)
      return Ni(() => t?.call(this, r));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Is(() => {
    e.addEventListener(n, i, s);
  }) : e.addEventListener(n, i, s), i;
}
function tf(n, e, t, s, i) {
  var r = { capture: s, passive: i }, o = ef(n, e, t, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && dc(() => {
    e.removeEventListener(n, o, r);
  });
}
function Sc(n) {
  for (var e = 0; e < n.length; e++)
    Tc.add(n[e]);
  for (var t of Sr)
    t(n);
}
let Ra = null;
function Kn(n) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), s = n.type, i = n.composedPath?.() || [], r = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  Ra = n;
  var o = 0, a = Ra === n && n.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (r = /** @type {Element} */
  i[o] || n.target, r !== e) {
    Ks(n, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var h = R, d = S;
    me(null), Ye(null);
    try {
      for (var u, f = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var g = r["__" + s];
          g != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r) && g.call(r, n);
        } catch (v) {
          u ? f.push(v) : u = v;
        }
        if (n.cancelBubble || p === e || p === null)
          break;
        r = p;
      }
      if (u) {
        for (let v of f)
          queueMicrotask(() => {
            throw v;
          });
        throw u;
      }
    } finally {
      n.__root = e, delete n.currentTarget, me(h), Ye(d);
    }
  }
}
function nf(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function cs(n, e) {
  var t = (
    /** @type {Effect} */
    S
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function He(n, e) {
  var t = (e & nd) !== 0, s, i = !n.startsWith("<!>");
  return () => {
    if (O)
      return cs(P, null), P;
    s === void 0 && (s = nf(i ? n : "<!>" + n), s = /** @type {Node} */
    /* @__PURE__ */ Sn(s));
    var r = (
      /** @type {TemplateNode} */
      t || oc ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    return cs(r, r), r;
  };
}
function ka() {
  if (O)
    return cs(P, null), P;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = We();
  return n.append(e, t), cs(e, t), n;
}
function _e(n, e) {
  if (O) {
    S.nodes_end = P, ki();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
const sf = ["touchstart", "touchmove"];
function rf(n) {
  return sf.includes(n);
}
function Oe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ??= n.nodeValue) && (n.__t = t, n.nodeValue = t + "");
}
function Rc(n, e) {
  return kc(n, e);
}
function of(n, e) {
  Tr(), e.intro = e.intro ?? !1;
  const t = e.target, s = O, i = P;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sn(t)
    ); r && (r.nodeType !== Mn || /** @type {Comment} */
    r.data !== $l); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(r);
    if (!r)
      throw In;
    et(!0), ye(
      /** @type {Comment} */
      r
    );
    const o = kc(n, { ...e, anchor: r });
    return et(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== In && console.warn("Failed to hydrate: ", o), e.recover === !1 && vd(), Tr(), cc(t), et(!1), Rc(n, e);
  } finally {
    et(s), ye(i);
  }
}
const an = /* @__PURE__ */ new Map();
function kc(n, { target: e, anchor: t, props: s = {}, events: i, context: r, intro: o = !0 }) {
  Tr();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var u = 0; u < d.length; u++) {
      var f = d[u];
      if (!a.has(f)) {
        a.add(f);
        var p = rf(f);
        e.addEventListener(f, Kn, { passive: p });
        var g = an.get(f);
        g === void 0 ? (document.addEventListener(f, Kn, { passive: p }), an.set(f, 1)) : an.set(f, g + 1);
      }
    }
  };
  l(no(Tc)), Sr.add(l);
  var c = void 0, h = zd(() => {
    var d = t ?? e.appendChild(We());
    return Nd(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (u) => {
        if (r) {
          lo({});
          var f = (
            /** @type {ComponentContext} */
            we
          );
          f.c = r;
        }
        if (i && (s.$$events = i), O && cs(
          /** @type {TemplateNode} */
          u,
          null
        ), c = n(u, s) || {}, O && (S.nodes_end = P, P === null || P.nodeType !== Mn || /** @type {Comment} */
        P.data !== to))
          throw Ri(), In;
        r && co();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, Kn);
        var f = (
          /** @type {number} */
          an.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, Kn), an.delete(u)) : an.set(u, f);
      }
      Sr.delete(l), d !== t && d.parentNode?.removeChild(d);
    };
  });
  return Rr.set(c, h), c;
}
let Rr = /* @__PURE__ */ new WeakMap();
function af(n, e) {
  const t = Rr.get(n);
  return t ? (Rr.delete(n), t(e)) : Promise.resolve();
}
class lf {
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
  constructor(e, t = !0) {
    this.anchor = e, this.#s = t;
  }
  #l = () => {
    var e = (
      /** @type {Batch} */
      H
    );
    if (this.#t.has(e)) {
      var t = (
        /** @type {Key} */
        this.#t.get(e)
      ), s = this.#e.get(t);
      if (s)
        go(s);
      else {
        var i = this.#n.get(t);
        i && (this.#e.set(t, i.effect), this.#n.delete(t), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), s = i.effect);
      }
      for (const [r, o] of this.#t) {
        if (this.#t.delete(r), r === e)
          break;
        const a = this.#n.get(o);
        a && (ae(a.effect), this.#n.delete(o));
      }
      for (const [r, o] of this.#e) {
        if (r === t) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(r)) {
            var c = document.createDocumentFragment();
            yc(o, c), c.append(We()), this.#n.set(r, { effect: o, fragment: c });
          } else
            ae(o);
          this.#e.delete(r);
        };
        this.#s || !s ? _n(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const t = Array.from(this.#t.values());
    for (const [s, i] of this.#n)
      t.includes(s) || (ae(i.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var s = (
      /** @type {Batch} */
      H
    ), i = uc();
    if (t && !this.#e.has(e) && !this.#n.has(e))
      if (i) {
        var r = document.createDocumentFragment(), o = We();
        r.append(o), this.#n.set(e, {
          effect: Te(() => t(o)),
          fragment: r
        });
      } else
        this.#e.set(
          e,
          Te(() => t(this.anchor))
        );
    if (this.#t.set(s, e), i) {
      for (const [a, l] of this.#e)
        a === e ? s.skipped_effects.delete(l) : s.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === e ? s.skipped_effects.delete(l.effect) : s.skipped_effects.add(l.effect);
      s.oncommit(this.#l), s.ondiscard(this.#o);
    } else
      O && (this.anchor = P), this.#l();
  }
}
function Ac(n) {
  we === null && zl(), Hd(() => {
    const e = Pi(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function cf(n) {
  we === null && zl(), Ac(() => () => Pi(n));
}
function $t(n, e, t = !1) {
  O && ki();
  var s = new lf(n), i = t ? Cn : 0;
  function r(o, a) {
    if (O) {
      const c = jl(n) === Ti;
      if (o === c) {
        var l = Js();
        ye(l), s.anchor = l, et(!1), s.ensure(o, a), et(!0);
        return;
      }
    }
    s.ensure(o, a);
  }
  po(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, r(l, a);
    }), o || r(!1, null);
  }, i);
}
function uf(n, e, t) {
  for (var s = n.items, i = [], r = e.length, o = 0; o < r; o++)
    _o(e[o].e, i, !0);
  var a = r > 0 && i.length === 0 && t !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    cc(l), l.append(
      /** @type {Element} */
      t
    ), s.clear(), Ve(n, e[0].prev, e[r - 1].next);
  }
  mc(i, () => {
    for (var c = 0; c < r; c++) {
      var h = e[c];
      a || (s.delete(h.k), Ve(n, h.prev, h.next)), ae(h.e, !a);
    }
  });
}
function hf(n, e, t, s, i, r = null) {
  var o = n, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      n
    );
    o = O ? ye(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Sn(l)
    ) : l.appendChild(We());
  }
  O && ki();
  var c = null, h = !1, d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ Md(() => {
    var v = t();
    return Bl(v) ? v : v == null ? [] : no(v);
  }), f, p;
  function g() {
    df(
      p,
      f,
      a,
      d,
      o,
      i,
      e,
      s,
      t
    ), r !== null && (f.length === 0 ? c ? go(c) : c = Te(() => r(o)) : c !== null && _n(c, () => {
      c = null;
    }));
  }
  po(() => {
    p ??= /** @type {Effect} */
    S, f = /** @type {V[]} */
    y(u);
    var v = f.length;
    if (h && v === 0)
      return;
    h = v === 0;
    let A = !1;
    if (O) {
      var m = jl(o) === Ti;
      m !== (v === 0) && (o = Js(), ye(o), et(!1), A = !0);
    }
    if (O) {
      for (var I = null, N, D = 0; D < v; D++) {
        if (P.nodeType === Mn && /** @type {Comment} */
        P.data === to) {
          o = /** @type {Comment} */
          P, A = !0, et(!1);
          break;
        }
        var Z = f[D], F = s(Z, D);
        N = kr(
          P,
          a,
          I,
          null,
          Z,
          F,
          D,
          i,
          e,
          t
        ), a.items.set(F, N), I = N;
      }
      v > 0 && ye(Js());
    }
    if (O)
      v === 0 && r && (c = Te(() => r(o)));
    else if (uc()) {
      var K = /* @__PURE__ */ new Set(), V = (
        /** @type {Batch} */
        H
      );
      for (D = 0; D < v; D += 1) {
        Z = f[D], F = s(Z, D);
        var Ne = a.items.get(F) ?? d.get(F);
        Ne ? Nc(Ne, Z, D) : (N = kr(
          null,
          a,
          null,
          null,
          Z,
          F,
          D,
          i,
          e,
          t,
          !0
        ), d.set(F, N)), K.add(F);
      }
      for (const [q, U] of a.items)
        K.has(q) || V.skipped_effects.add(U.e);
      V.oncommit(g);
    } else
      g();
    A && et(!0), y(u);
  }), O && (o = P);
}
function df(n, e, t, s, i, r, o, a, l) {
  var c = e.length, h = t.items, d = t.first, u = d, f, p = null, g = [], v = [], A, m, I, N;
  for (N = 0; N < c; N += 1) {
    if (A = e[N], m = a(A, N), I = h.get(m), I === void 0) {
      var D = s.get(m);
      if (D !== void 0) {
        s.delete(m), h.set(m, D);
        var Z = p ? p.next : u;
        Ve(t, p, D), Ve(t, D, Z), sr(D, Z, i), p = D;
      } else {
        var F = u ? (
          /** @type {TemplateNode} */
          u.e.nodes_start
        ) : i;
        p = kr(
          F,
          t,
          p,
          p === null ? t.first : p.next,
          A,
          m,
          N,
          r,
          o,
          l
        );
      }
      h.set(m, p), g = [], v = [], u = p.next;
      continue;
    }
    if (Nc(I, A, N), (I.e.f & Ce) !== 0 && go(I.e), I !== u) {
      if (f !== void 0 && f.has(I)) {
        if (g.length < v.length) {
          var K = v[0], V;
          p = K.prev;
          var Ne = g[0], q = g[g.length - 1];
          for (V = 0; V < g.length; V += 1)
            sr(g[V], K, i);
          for (V = 0; V < v.length; V += 1)
            f.delete(v[V]);
          Ve(t, Ne.prev, q.next), Ve(t, p, Ne), Ve(t, q, K), u = K, p = q, N -= 1, g = [], v = [];
        } else
          f.delete(I), sr(I, u, i), Ve(t, I.prev, I.next), Ve(t, I, p === null ? t.first : p.next), Ve(t, p, I), p = I;
        continue;
      }
      for (g = [], v = []; u !== null && u.k !== m; )
        (u.e.f & Ce) === 0 && (f ??= /* @__PURE__ */ new Set()).add(u), v.push(u), u = u.next;
      if (u === null)
        continue;
      I = u;
    }
    g.push(I), p = I, u = I.next;
  }
  if (u !== null || f !== void 0) {
    for (var U = f === void 0 ? [] : no(f); u !== null; )
      (u.e.f & Ce) === 0 && U.push(u), u = u.next;
    var ee = U.length;
    if (ee > 0) {
      var Mt = c === 0 ? i : null;
      uf(t, U, Mt);
    }
  }
  n.first = t.first && t.first.e, n.last = p && p.e;
  for (var pe of s.values())
    ae(pe.e);
  s.clear();
}
function Nc(n, e, t, s) {
  os(n.v, e), n.i = t;
}
function kr(n, e, t, s, i, r, o, a, l, c, h) {
  var d = (l & Zh) !== 0, u = (l & td) === 0, f = d ? u ? /* @__PURE__ */ ic(i, !1, !1) : Gt(i) : i, p = (l & ed) === 0 ? o : Gt(o), g = {
    i: p,
    v: f,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: s
  };
  try {
    if (n === null) {
      var v = document.createDocumentFragment();
      v.append(n = We());
    }
    return g.e = Te(() => a(
      /** @type {Node} */
      n,
      f,
      p,
      c
    ), O), g.e.prev = t && t.e, g.e.next = s && s.e, t === null ? h || (e.first = g) : (t.next = g, t.e.next = g.e), s !== null && (s.prev = g, s.e.prev = g.e), g;
  } finally {
  }
}
function sr(n, e, t) {
  for (var s = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, r = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); r !== null && r !== s; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(r)
    );
    i.before(r), r = o;
  }
}
function Ve(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Pc(n, e) {
  jd(() => {
    var t = n.getRootNode(), s = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, s.appendChild(i);
    }
  });
}
const ff = Symbol("is custom element"), pf = Symbol("is html");
function ir(n) {
  if (O) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, n.hasAttribute("value")) {
          var s = n.value;
          Ar(n, "value", null), n.value = s;
        }
        if (n.hasAttribute("checked")) {
          var i = n.checked;
          Ar(n, "checked", null), n.checked = i;
        }
      }
    };
    n.__on_r = t, Is(t), hc();
  }
}
function Ar(n, e, t, s) {
  var i = _f(n);
  O && (i[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || i[e] !== (i[e] = t) && (e === "loading" && (n[dd] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && gf(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function _f(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ??= {
      [ff]: n.nodeName.includes("-"),
      [pf]: n.namespaceURI === sd
    }
  );
}
var Aa = /* @__PURE__ */ new Map();
function gf(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Aa.get(e);
  if (t) return t;
  Aa.set(e, t = []);
  for (var s, i = n, r = Element.prototype; r !== i; ) {
    s = rd(i);
    for (var o in s)
      s[o].set && t.push(o);
    i = Hl(i);
  }
  return t;
}
function rr(n, e, t = e) {
  var s = /* @__PURE__ */ new WeakSet();
  Ud(n, "input", async (i) => {
    var r = i ? n.defaultValue : n.value;
    if (r = or(n) ? ar(r) : r, t(r), H !== null && s.add(H), await Xd(), r !== (r = e())) {
      var o = n.selectionStart, a = n.selectionEnd, l = n.value.length;
      if (n.value = r ?? "", a !== null) {
        var c = n.value.length;
        o === a && a === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = o, n.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (O && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Pi(e) == null && n.value) && (t(or(n) ? ar(n.value) : n.value), H !== null && s.add(H)), fo(() => {
    var i = e();
    if (n === document.activeElement) {
      var r = (
        /** @type {Batch} */
        Ws ?? H
      );
      if (s.has(r))
        return;
    }
    or(n) && i === ar(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function or(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ar(n) {
  return n === "" ? null : +n;
}
const ln = [];
function mo(n, e = tr) {
  let t = null;
  const s = /* @__PURE__ */ new Set();
  function i(a) {
    if (ql(n, a) && (n = a, t)) {
      const l = !ln.length;
      for (const c of s)
        c[1](), ln.push(c, n);
      if (l) {
        for (let c = 0; c < ln.length; c += 2)
          ln[c][0](ln[c + 1]);
        ln.length = 0;
      }
    }
  }
  function r(a) {
    i(a(
      /** @type {T} */
      n
    ));
  }
  function o(a, l = tr) {
    const c = [a, l];
    return s.add(c), s.size === 1 && (t = e(i, r) || tr), a(
      /** @type {T} */
      n
    ), () => {
      s.delete(c), s.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
function Na(n, e, t, s) {
  var i = (
    /** @type {V} */
    s
  ), r = !0, o = () => (r && (r = !1, i = /** @type {V} */
  s), i), a;
  a = /** @type {V} */
  n[e], a === void 0 && s !== void 0 && (a = o());
  var l;
  l = () => {
    var u = (
      /** @type {V} */
      n[e]
    );
    return u === void 0 ? o() : (r = !0, u);
  };
  var c = !1, h = /* @__PURE__ */ uo(() => (c = !1, l())), d = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(u, f) {
      if (arguments.length > 0) {
        const p = f ? y(h) : u;
        return x(h, p), c = !0, i !== void 0 && (i = p), u;
      }
      return tn && c || (d.f & it) !== 0 ? h.v : y(h);
    })
  );
}
function mf(n) {
  return new vf(n);
}
class vf {
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
    var t = /* @__PURE__ */ new Map(), s = (r, o) => {
      var a = /* @__PURE__ */ ic(o, !1, !1);
      return t.set(r, a), a;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(r, o) {
          return y(t.get(o) ?? s(o, Reflect.get(r, o)));
        },
        has(r, o) {
          return o === hd ? !0 : (y(t.get(o) ?? s(o, Reflect.get(r, o))), Reflect.has(r, o));
        },
        set(r, o, a) {
          return x(t.get(o) ?? s(o, a), a), Reflect.set(r, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? of : Rc)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && Xs(), this.#t = i.$$events;
    for (const r of Object.keys(this.#e))
      r === "$set" || r === "$destroy" || r === "$on" || Ks(this, r, {
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
      af(this.#e);
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
  $on(e, t) {
    this.#t[e] = this.#t[e] || [];
    const s = (...i) => t.call(this, ...i);
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
let Oc;
typeof HTMLElement == "function" && (Oc = class extends HTMLElement {
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
  constructor(n, e, t) {
    super(), this.$$ctor = n, this.$$s = e, t && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(n, e, t) {
    if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(e), this.$$c) {
      const s = this.$$c.$on(n, e);
      this.$$l_u.set(e, s);
    }
    super.addEventListener(n, e, t);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(n, e, t) {
    if (super.removeEventListener(n, e, t), this.$$c) {
      const s = this.$$l_u.get(e);
      s && (s(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (i) => {
          const r = document.createElement("slot");
          s !== "default" && (r.name = s), _e(i, r);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = yf(this);
      for (const s of this.$$s)
        s in t && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), e.default = !0) : e[s] = n(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Bs(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = mf({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Vd(() => {
        fo(() => {
          this.$$r = !0;
          for (const s of qs(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = Bs(
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
  attributeChangedCallback(n, e, t) {
    this.$$r || (n = this.$$g_p(n), this.$$d[n] = Bs(n, t, this.$$p_d, "toProp"), this.$$c?.$set({ [n]: this.$$d[n] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(n) {
    return qs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === n || !this.$$p_d[e].attribute && e.toLowerCase() === n
    ) || n;
  }
});
function Bs(n, e, t, s) {
  const i = t[n]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[n])
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
function yf(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Dc(n, e, t, s, i, r) {
  let o = class extends Oc {
    constructor() {
      super(n, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return qs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return qs(e).forEach((a) => {
    Ks(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Bs(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var h = pn(c, a)?.get;
          h ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), s.forEach((a) => {
    Ks(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), n.element = /** @type {any} */
  o, o;
}
const Ef = () => {
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
const xc = {
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
const _ = function(n, e) {
  if (!n)
    throw Ln(e);
}, Ln = function(n) {
  return new Error("Firebase Database (" + xc.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + n);
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
const Mc = function(n) {
  const e = [];
  let t = 0;
  for (let s = 0; s < n.length; s++) {
    let i = n.charCodeAt(s);
    i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && s + 1 < n.length && (n.charCodeAt(s + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++s) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128);
  }
  return e;
}, wf = function(n) {
  const e = [];
  let t = 0, s = 0;
  for (; t < n.length; ) {
    const i = n[t++];
    if (i < 128)
      e[s++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const r = n[t++];
      e[s++] = String.fromCharCode((i & 31) << 6 | r & 63);
    } else if (i > 239 && i < 365) {
      const r = n[t++], o = n[t++], a = n[t++], l = ((i & 7) << 18 | (r & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
      e[s++] = String.fromCharCode(55296 + (l >> 10)), e[s++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const r = n[t++], o = n[t++];
      e[s++] = String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, vo = {
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
  encodeByteArray(n, e) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, s = [];
    for (let i = 0; i < n.length; i += 3) {
      const r = n[i], o = i + 1 < n.length, a = o ? n[i + 1] : 0, l = i + 2 < n.length, c = l ? n[i + 2] : 0, h = r >> 2, d = (r & 3) << 4 | a >> 4;
      let u = (a & 15) << 2 | c >> 6, f = c & 63;
      l || (f = 64, o || (u = 64)), s.push(t[h], t[d], t[u], t[f]);
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
  encodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(Mc(n), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : wf(this.decodeStringToByteArray(n, e));
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
  decodeStringToByteArray(n, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, s = [];
    for (let i = 0; i < n.length; ) {
      const r = t[n.charAt(i++)], a = i < n.length ? t[n.charAt(i)] : 0;
      ++i;
      const c = i < n.length ? t[n.charAt(i)] : 64;
      ++i;
      const d = i < n.length ? t[n.charAt(i)] : 64;
      if (++i, r == null || a == null || c == null || d == null)
        throw new If();
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
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class If extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Lc = function(n) {
  const e = Mc(n);
  return vo.encodeByteArray(e, !0);
}, ti = function(n) {
  return Lc(n).replace(/\./g, "");
}, ni = function(n) {
  try {
    return vo.decodeString(n, !0);
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
function Cf(n) {
  return Fc(void 0, n);
}
function Fc(n, e) {
  if (!(e instanceof Object))
    return e;
  switch (e.constructor) {
    case Date:
      const t = e;
      return new Date(t.getTime());
    case Object:
      n === void 0 && (n = {});
      break;
    case Array:
      n = [];
      break;
    default:
      return e;
  }
  for (const t in e)
    !e.hasOwnProperty(t) || !bf(t) || (n[t] = Fc(n[t], e[t]));
  return n;
}
function bf(n) {
  return n !== "__proto__";
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
function Tf() {
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
const Sf = () => Tf().__FIREBASE_DEFAULTS__, Rf = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const n = process.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, kf = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = n && ni(n[1]);
  return e && JSON.parse(e);
}, yo = () => {
  try {
    return Ef() || Sf() || Rf() || kf();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, Uc = (n) => yo()?.emulatorHosts?.[n], Af = (n) => {
  const e = Uc(n);
  if (!e)
    return;
  const t = e.lastIndexOf(":");
  if (t <= 0 || t + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const s = parseInt(e.substring(t + 1), 10);
  return e[0] === "[" ? [e.substring(1, t - 1), s] : [e.substring(0, t), s];
}, $c = () => yo()?.config, Wc = (n) => yo()?.[`_${n}`];
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
class bs {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, s) => {
      t ? this.reject(t) : this.resolve(s), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, s));
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
function Fn(n) {
  try {
    return (n.startsWith("http://") || n.startsWith("https://") ? new URL(n).hostname : n).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Bc(n) {
  return (await fetch(n, {
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
function Nf(n, e) {
  if (n.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const t = {
    alg: "none",
    type: "JWT"
  }, s = e || "demo-project", i = n.iat || 0, r = n.sub || n.user_id;
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
    ...n
  };
  return [
    ti(JSON.stringify(t)),
    ti(JSON.stringify(o)),
    ""
  ].join(".");
}
const Zn = {};
function Pf() {
  const n = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Zn))
    Zn[e] ? n.emulator.push(e) : n.prod.push(e);
  return n;
}
function Of(n) {
  let e = document.getElementById(n), t = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", n), t = !0), { created: t, element: e };
}
let Pa = !1;
function Hc(n, e) {
  if (typeof window > "u" || typeof document > "u" || !Fn(window.location.host) || Zn[n] === e || Zn[n] || // If already set to use emulator, can't go back to prod.
  Pa)
    return;
  Zn[n] = e;
  function t(u) {
    return `__firebase__banner__${u}`;
  }
  const s = "__firebase__banner", r = Pf().prod.length > 0;
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
      Pa = !0, o();
    }, u;
  }
  function h(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function d() {
    const u = Of(s), f = t("text"), p = document.getElementById(f) || document.createElement("span"), g = t("learnmore"), v = document.getElementById(g) || document.createElement("a"), A = t("preprendIcon"), m = document.getElementById(A) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const I = u.element;
      a(I), h(v, g);
      const N = c();
      l(m, A), I.append(m, p, v, N), document.body.appendChild(I);
    }
    r ? (p.innerText = "Preview backend disconnected.", m.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (m.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
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
function fe() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Eo() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe());
}
function Df() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function xf() {
  const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof n == "object" && n.id !== void 0;
}
function Vc() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Mf() {
  const n = fe();
  return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0;
}
function Lf() {
  return xc.NODE_ADMIN === !0;
}
function Ff() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Uf() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const s = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(s);
      i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(s), n(!0);
      }, i.onupgradeneeded = () => {
        t = !1;
      }, i.onerror = () => {
        e(i.error?.message || "");
      };
    } catch (t) {
      e(t);
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
const $f = "FirebaseError";
class Dt extends Error {
  constructor(e, t, s) {
    super(t), this.code = e, this.customData = s, this.name = $f, Object.setPrototypeOf(this, Dt.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ts.prototype.create);
  }
}
class Ts {
  constructor(e, t, s) {
    this.service = e, this.serviceName = t, this.errors = s;
  }
  create(e, ...t) {
    const s = t[0] || {}, i = `${this.service}/${e}`, r = this.errors[e], o = r ? Wf(r, s) : "Error", a = `${this.serviceName}: ${o} (${i}).`;
    return new Dt(i, a, s);
  }
}
function Wf(n, e) {
  return n.replace(Bf, (t, s) => {
    const i = e[s];
    return i != null ? String(i) : `<${s}?>`;
  });
}
const Bf = /\{\$([^}]+)}/g;
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
function us(n) {
  return JSON.parse(n);
}
function Q(n) {
  return JSON.stringify(n);
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
const zc = function(n) {
  let e = {}, t = {}, s = {}, i = "";
  try {
    const r = n.split(".");
    e = us(ni(r[0]) || ""), t = us(ni(r[1]) || ""), i = r[2], s = t.d || {}, delete t.d;
  } catch {
  }
  return {
    header: e,
    claims: t,
    data: s,
    signature: i
  };
}, Hf = function(n) {
  const e = zc(n), t = e.claims;
  return !!t && typeof t == "object" && t.hasOwnProperty("iat");
}, Vf = function(n) {
  const e = zc(n).claims;
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
function Xe(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Rn(n, e) {
  if (Object.prototype.hasOwnProperty.call(n, e))
    return n[e];
}
function Nr(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
function si(n, e, t) {
  const s = {};
  for (const i in n)
    Object.prototype.hasOwnProperty.call(n, i) && (s[i] = e.call(t, n[i], i, n));
  return s;
}
function qt(n, e) {
  if (n === e)
    return !0;
  const t = Object.keys(n), s = Object.keys(e);
  for (const i of t) {
    if (!s.includes(i))
      return !1;
    const r = n[i], o = e[i];
    if (Oa(r) && Oa(o)) {
      if (!qt(r, o))
        return !1;
    } else if (r !== o)
      return !1;
  }
  for (const i of s)
    if (!t.includes(i))
      return !1;
  return !0;
}
function Oa(n) {
  return n !== null && typeof n == "object";
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
function Un(n) {
  const e = [];
  for (const [t, s] of Object.entries(n))
    Array.isArray(s) ? s.forEach((i) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(s));
  return e.length ? "&" + e.join("&") : "";
}
function Yn(n) {
  const e = {};
  return n.replace(/^\?/, "").split("&").forEach((s) => {
    if (s) {
      const [i, r] = s.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(r);
    }
  }), e;
}
function Qn(n) {
  const e = n.indexOf("?");
  if (!e)
    return "";
  const t = n.indexOf("#", e);
  return n.substring(e, t > 0 ? t : void 0);
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
class zf {
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
  compress_(e, t) {
    t || (t = 0);
    const s = this.W_;
    if (typeof e == "string")
      for (let d = 0; d < 16; d++)
        s[d] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
    else
      for (let d = 0; d < 16; d++)
        s[d] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
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
  update(e, t) {
    if (e == null)
      return;
    t === void 0 && (t = e.length);
    const s = t - this.blockSize;
    let i = 0;
    const r = this.buf_;
    let o = this.inbuf_;
    for (; i < t; ) {
      if (o === 0)
        for (; i <= s; )
          this.compress_(e, i), i += this.blockSize;
      if (typeof e == "string") {
        for (; i < t; )
          if (r[o] = e.charCodeAt(i), ++o, ++i, o === this.blockSize) {
            this.compress_(r), o = 0;
            break;
          }
      } else
        for (; i < t; )
          if (r[o] = e[i], ++o, ++i, o === this.blockSize) {
            this.compress_(r), o = 0;
            break;
          }
    }
    this.inbuf_ = o, this.total_ += t;
  }
  /** @override */
  digest() {
    const e = [];
    let t = this.total_ * 8;
    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    for (let i = this.blockSize - 1; i >= 56; i--)
      this.buf_[i] = t & 255, t /= 256;
    this.compress_(this.buf_);
    let s = 0;
    for (let i = 0; i < 5; i++)
      for (let r = 24; r >= 0; r -= 8)
        e[s] = this.chain_[i] >> r & 255, ++s;
    return e;
  }
}
function jf(n, e) {
  const t = new Gf(n, e);
  return t.subscribe.bind(t);
}
class Gf {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((s) => {
      this.error(s);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
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
  subscribe(e, t, s) {
    let i;
    if (e === void 0 && t === void 0 && s === void 0)
      throw new Error("Missing Observer.");
    qf(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: t,
      complete: s
    }, i.next === void 0 && (i.next = lr), i.error === void 0 && (i.error = lr), i.complete === void 0 && (i.complete = lr);
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
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
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
function qf(n, e) {
  if (typeof n != "object" || n === null)
    return !1;
  for (const t of e)
    if (t in n && typeof n[t] == "function")
      return !0;
  return !1;
}
function lr() {
}
function Oi(n, e) {
  return `${n} failed: ${e} argument `;
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
const Kf = function(n) {
  const e = [];
  let t = 0;
  for (let s = 0; s < n.length; s++) {
    let i = n.charCodeAt(s);
    if (i >= 55296 && i <= 56319) {
      const r = i - 55296;
      s++, _(s < n.length, "Surrogate pair missing trail surrogate.");
      const o = n.charCodeAt(s) - 56320;
      i = 65536 + (r << 10) + o;
    }
    i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : i < 65536 ? (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128);
  }
  return e;
}, Di = function(n) {
  let e = 0;
  for (let t = 0; t < n.length; t++) {
    const s = n.charCodeAt(t);
    s < 128 ? e++ : s < 2048 ? e += 2 : s >= 55296 && s <= 56319 ? (e += 4, t++) : e += 3;
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
function ie(n) {
  return n && n._delegate ? n._delegate : n;
}
class Kt {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, s) {
    this.name = e, this.instanceFactory = t, this.type = s, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
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
const Ft = "[DEFAULT]";
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
class Yf {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const s = new bs();
      if (this.instancesDeferred.set(t, s), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: t
          });
          i && s.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    const t = this.normalizeInstanceIdentifier(e?.identifier), s = e?.optional ?? !1;
    if (this.isInitialized(t) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: t
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
      if (Jf(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ft });
        } catch {
        }
      for (const [t, s] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
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
  clearInstance(e = Ft) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Ft) {
    return this.instances.has(e);
  }
  getOptions(e = Ft) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(s))
      throw Error(`${this.name}(${s}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: s,
      options: t
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
  onInit(e, t) {
    const s = this.normalizeInstanceIdentifier(t), i = this.onInitCallbacks.get(s) ?? /* @__PURE__ */ new Set();
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
  invokeOnInitCallbacks(e, t) {
    const s = this.onInitCallbacks.get(t);
    if (s)
      for (const i of s)
        try {
          i(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let s = this.instances.get(e);
    if (!s && this.component && (s = this.component.instanceFactory(this.container, {
      instanceIdentifier: Qf(e),
      options: t
    }), this.instances.set(e, s), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(s, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, s);
      } catch {
      }
    return s || null;
  }
  normalizeInstanceIdentifier(e = Ft) {
    return this.component ? this.component.multipleInstances ? e : Ft : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Qf(n) {
  return n === Ft ? void 0 : n;
}
function Jf(n) {
  return n.instantiationMode === "EAGER";
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
class Xf {
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
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
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
    const t = new Yf(e, this);
    return this.providers.set(e, t), t;
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
var M;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(M || (M = {}));
const Zf = {
  debug: M.DEBUG,
  verbose: M.VERBOSE,
  info: M.INFO,
  warn: M.WARN,
  error: M.ERROR,
  silent: M.SILENT
}, ep = M.INFO, tp = {
  [M.DEBUG]: "log",
  [M.VERBOSE]: "log",
  [M.INFO]: "info",
  [M.WARN]: "warn",
  [M.ERROR]: "error"
}, np = (n, e, ...t) => {
  if (e < n.logLevel)
    return;
  const s = (/* @__PURE__ */ new Date()).toISOString(), i = tp[e];
  if (i)
    console[i](`[${s}]  ${n.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class wo {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = ep, this._logHandler = np, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in M))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Zf[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, M.DEBUG, ...e), this._logHandler(this, M.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, M.VERBOSE, ...e), this._logHandler(this, M.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, M.INFO, ...e), this._logHandler(this, M.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, M.WARN, ...e), this._logHandler(this, M.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, M.ERROR, ...e), this._logHandler(this, M.ERROR, ...e);
  }
}
const sp = (n, e) => e.some((t) => n instanceof t);
let Da, xa;
function ip() {
  return Da || (Da = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function rp() {
  return xa || (xa = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const jc = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap();
function op(n) {
  const e = new Promise((t, s) => {
    const i = () => {
      n.removeEventListener("success", r), n.removeEventListener("error", o);
    }, r = () => {
      t(bt(n.result)), i();
    }, o = () => {
      s(n.error), i();
    };
    n.addEventListener("success", r), n.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && jc.set(t, n);
  }).catch(() => {
  }), Io.set(e, n), e;
}
function ap(n) {
  if (Pr.has(n))
    return;
  const e = new Promise((t, s) => {
    const i = () => {
      n.removeEventListener("complete", r), n.removeEventListener("error", o), n.removeEventListener("abort", o);
    }, r = () => {
      t(), i();
    }, o = () => {
      s(n.error || new DOMException("AbortError", "AbortError")), i();
    };
    n.addEventListener("complete", r), n.addEventListener("error", o), n.addEventListener("abort", o);
  });
  Pr.set(n, e);
}
let Or = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return Pr.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || Gc.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return bt(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function lp(n) {
  Or = n(Or);
}
function cp(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const s = n.call(ur(this), e, ...t);
    return Gc.set(s, e.sort ? e.sort() : [e]), bt(s);
  } : rp().includes(n) ? function(...e) {
    return n.apply(ur(this), e), bt(jc.get(this));
  } : function(...e) {
    return bt(n.apply(ur(this), e));
  };
}
function up(n) {
  return typeof n == "function" ? cp(n) : (n instanceof IDBTransaction && ap(n), sp(n, ip()) ? new Proxy(n, Or) : n);
}
function bt(n) {
  if (n instanceof IDBRequest)
    return op(n);
  if (cr.has(n))
    return cr.get(n);
  const e = up(n);
  return e !== n && (cr.set(n, e), Io.set(e, n)), e;
}
const ur = (n) => Io.get(n);
function hp(n, e, { blocked: t, upgrade: s, blocking: i, terminated: r } = {}) {
  const o = indexedDB.open(n, e), a = bt(o);
  return s && o.addEventListener("upgradeneeded", (l) => {
    s(bt(o.result), l.oldVersion, l.newVersion, bt(o.transaction), l);
  }), t && o.addEventListener("blocked", (l) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), a.then((l) => {
    r && l.addEventListener("close", () => r()), i && l.addEventListener("versionchange", (c) => i(c.oldVersion, c.newVersion, c));
  }).catch(() => {
  }), a;
}
const dp = ["get", "getKey", "getAll", "getAllKeys", "count"], fp = ["put", "add", "delete", "clear"], hr = /* @__PURE__ */ new Map();
function Ma(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (hr.get(e))
    return hr.get(e);
  const t = e.replace(/FromIndex$/, ""), s = e !== t, i = fp.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (s ? IDBIndex : IDBObjectStore).prototype) || !(i || dp.includes(t))
  )
    return;
  const r = async function(o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let c = l.store;
    return s && (c = c.index(a.shift())), (await Promise.all([
      c[t](...a),
      i && l.done
    ]))[0];
  };
  return hr.set(e, r), r;
}
lp((n) => ({
  ...n,
  get: (e, t, s) => Ma(e, t) || n.get(e, t, s),
  has: (e, t) => !!Ma(e, t) || n.has(e, t)
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
class pp {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (_p(t)) {
        const s = t.getImmediate();
        return `${s.library}/${s.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function _p(n) {
  return n.getComponent()?.type === "VERSION";
}
const Dr = "@firebase/app", La = "0.14.5";
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
const lt = new wo("@firebase/app"), gp = "@firebase/app-compat", mp = "@firebase/analytics-compat", vp = "@firebase/analytics", yp = "@firebase/app-check-compat", Ep = "@firebase/app-check", wp = "@firebase/auth", Ip = "@firebase/auth-compat", Cp = "@firebase/database", bp = "@firebase/data-connect", Tp = "@firebase/database-compat", Sp = "@firebase/functions", Rp = "@firebase/functions-compat", kp = "@firebase/installations", Ap = "@firebase/installations-compat", Np = "@firebase/messaging", Pp = "@firebase/messaging-compat", Op = "@firebase/performance", Dp = "@firebase/performance-compat", xp = "@firebase/remote-config", Mp = "@firebase/remote-config-compat", Lp = "@firebase/storage", Fp = "@firebase/storage-compat", Up = "@firebase/firestore", $p = "@firebase/ai", Wp = "@firebase/firestore-compat", Bp = "firebase", Hp = "12.5.0";
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
const xr = "[DEFAULT]", Vp = {
  [Dr]: "fire-core",
  [gp]: "fire-core-compat",
  [vp]: "fire-analytics",
  [mp]: "fire-analytics-compat",
  [Ep]: "fire-app-check",
  [yp]: "fire-app-check-compat",
  [wp]: "fire-auth",
  [Ip]: "fire-auth-compat",
  [Cp]: "fire-rtdb",
  [bp]: "fire-data-connect",
  [Tp]: "fire-rtdb-compat",
  [Sp]: "fire-fn",
  [Rp]: "fire-fn-compat",
  [kp]: "fire-iid",
  [Ap]: "fire-iid-compat",
  [Np]: "fire-fcm",
  [Pp]: "fire-fcm-compat",
  [Op]: "fire-perf",
  [Dp]: "fire-perf-compat",
  [xp]: "fire-rc",
  [Mp]: "fire-rc-compat",
  [Lp]: "fire-gcs",
  [Fp]: "fire-gcs-compat",
  [Up]: "fire-fst",
  [Wp]: "fire-fst-compat",
  [$p]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [Bp]: "fire-js-all"
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
const ii = /* @__PURE__ */ new Map(), zp = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map();
function Fa(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
  }
}
function kn(n) {
  const e = n.name;
  if (Mr.has(e))
    return lt.debug(`There were multiple attempts to register component ${e}.`), !1;
  Mr.set(e, n);
  for (const t of ii.values())
    Fa(t, n);
  for (const t of zp.values())
    Fa(t, n);
  return !0;
}
function Co(n, e) {
  const t = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function Se(n) {
  return n == null ? !1 : n.settings !== void 0;
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
const jp = {
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
}, Tt = new Ts("app", "Firebase", jp);
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
class Gp {
  constructor(e, t, s) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...t }, this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = s, this.container.addComponent(new Kt(
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
      throw Tt.create("app-deleted", { appName: this._name });
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
const $n = Hp;
function qc(n, e = {}) {
  let t = n;
  typeof e != "object" && (e = { name: e });
  const s = {
    name: xr,
    automaticDataCollectionEnabled: !0,
    ...e
  }, i = s.name;
  if (typeof i != "string" || !i)
    throw Tt.create("bad-app-name", {
      appName: String(i)
    });
  if (t || (t = $c()), !t)
    throw Tt.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const r = ii.get(i);
  if (r) {
    if (qt(t, r.options) && qt(s, r.config))
      return r;
    throw Tt.create("duplicate-app", { appName: i });
  }
  const o = new Xf(i);
  for (const l of Mr.values())
    o.addComponent(l);
  const a = new Gp(t, s, o);
  return ii.set(i, a), a;
}
function Kc(n = xr) {
  const e = ii.get(n);
  if (!e && n === xr && $c())
    return qc();
  if (!e)
    throw Tt.create("no-app", { appName: n });
  return e;
}
function St(n, e, t) {
  let s = Vp[n] ?? n;
  t && (s += `-${t}`);
  const i = s.match(/\s|\//), r = e.match(/\s|\//);
  if (i || r) {
    const o = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    i && o.push(`library name "${s}" contains illegal characters (whitespace or "/")`), i && r && o.push("and"), r && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), lt.warn(o.join(" "));
    return;
  }
  kn(new Kt(
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
const qp = "firebase-heartbeat-database", Kp = 1, hs = "firebase-heartbeat-store";
let dr = null;
function Yc() {
  return dr || (dr = hp(qp, Kp, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          try {
            n.createObjectStore(hs);
          } catch (t) {
            console.warn(t);
          }
      }
    }
  }).catch((n) => {
    throw Tt.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), dr;
}
async function Yp(n) {
  try {
    const t = (await Yc()).transaction(hs), s = await t.objectStore(hs).get(Qc(n));
    return await t.done, s;
  } catch (e) {
    if (e instanceof Dt)
      lt.warn(e.message);
    else {
      const t = Tt.create("idb-get", {
        originalErrorMessage: e?.message
      });
      lt.warn(t.message);
    }
  }
}
async function Ua(n, e) {
  try {
    const s = (await Yc()).transaction(hs, "readwrite");
    await s.objectStore(hs).put(e, Qc(n)), await s.done;
  } catch (t) {
    if (t instanceof Dt)
      lt.warn(t.message);
    else {
      const s = Tt.create("idb-set", {
        originalErrorMessage: t?.message
      });
      lt.warn(s.message);
    }
  }
}
function Qc(n) {
  return `${n.name}!${n.options.appId}`;
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
const Qp = 1024, Jp = 30;
class Xp {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new e_(t), this._heartbeatsCachePromise = this._storage.read().then((s) => (this._heartbeatsCache = s, s));
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
      const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = $a();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((i) => i.date === s))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: s, agent: t }), this._heartbeatsCache.heartbeats.length > Jp) {
        const i = t_(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(i, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      lt.warn(e);
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
      const e = $a(), { heartbeatsToSend: t, unsentEntries: s } = Zp(this._heartbeatsCache.heartbeats), i = ti(JSON.stringify({ version: 2, heartbeats: t }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
    } catch (e) {
      return lt.warn(e), "";
    }
  }
}
function $a() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Zp(n, e = Qp) {
  const t = [];
  let s = n.slice();
  for (const i of n) {
    const r = t.find((o) => o.agent === i.agent);
    if (r) {
      if (r.dates.push(i.date), Wa(t) > e) {
        r.dates.pop();
        break;
      }
    } else if (t.push({
      agent: i.agent,
      dates: [i.date]
    }), Wa(t) > e) {
      t.pop();
      break;
    }
    s = s.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: s
  };
}
class e_ {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Ff() ? Uf().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await Yp(this.app);
      return t?.heartbeats ? t : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Ua(this.app, {
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
      return Ua(this.app, {
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
function Wa(n) {
  return ti(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
function t_(n) {
  if (n.length === 0)
    return -1;
  let e = 0, t = n[0].date;
  for (let s = 1; s < n.length; s++)
    n[s].date < t && (t = n[s].date, e = s);
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
function n_(n) {
  kn(new Kt(
    "platform-logger",
    (e) => new pp(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), kn(new Kt(
    "heartbeat",
    (e) => new Xp(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), St(Dr, La, n), St(Dr, La, "esm2020"), St("fire-js", "");
}
n_("");
var s_ = "firebase", i_ = "12.5.0";
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
St(s_, i_, "app");
function Jc() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const r_ = Jc, Xc = new Ts("auth", "Firebase", Jc());
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
const ri = new wo("@firebase/auth");
function o_(n, ...e) {
  ri.logLevel <= M.WARN && ri.warn(`Auth (${$n}): ${n}`, ...e);
}
function Hs(n, ...e) {
  ri.logLevel <= M.ERROR && ri.error(`Auth (${$n}): ${n}`, ...e);
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
function Be(n, ...e) {
  throw bo(n, ...e);
}
function je(n, ...e) {
  return bo(n, ...e);
}
function Zc(n, e, t) {
  const s = {
    ...r_(),
    [e]: t
  };
  return new Ts("auth", "Firebase", s).create(e, {
    appName: n.name
  });
}
function ot(n) {
  return Zc(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function bo(n, ...e) {
  if (typeof n != "string") {
    const t = e[0], s = [...e.slice(1)];
    return s[0] && (s[0].appName = n.name), n._errorFactory.create(t, ...s);
  }
  return Xc.create(n, ...e);
}
function E(n, e, ...t) {
  if (!n)
    throw bo(e, ...t);
}
function tt(n) {
  const e = "INTERNAL ASSERTION FAILED: " + n;
  throw Hs(e), new Error(e);
}
function ct(n, e) {
  n || tt(e);
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
function Lr() {
  return typeof self < "u" && self.location?.href || "";
}
function a_() {
  return Ba() === "http:" || Ba() === "https:";
}
function Ba() {
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
function l_() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (a_() || xf() || "connection" in navigator) ? navigator.onLine : !0;
}
function c_() {
  if (typeof navigator > "u")
    return null;
  const n = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    n.languages && n.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    n.language || // Couldn't determine language.
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
class Ss {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, ct(t > e, "Short delay should be less than long delay!"), this.isMobile = Eo() || Vc();
  }
  get() {
    return l_() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function To(n, e) {
  ct(n.emulator, "Emulator should always be set here");
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
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
class eu {
  static initialize(e, t, s) {
    this.fetchImpl = e, t && (this.headersImpl = t), s && (this.responseImpl = s);
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
    tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const u_ = {
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
const h_ = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], d_ = new Ss(3e4, 6e4);
function xt(n, e) {
  return n.tenantId && !e.tenantId ? {
    ...e,
    tenantId: n.tenantId
  } : e;
}
async function pt(n, e, t, s, i = {}) {
  return tu(n, i, async () => {
    let r = {}, o = {};
    s && (e === "GET" ? o = s : r = {
      body: JSON.stringify(s)
    });
    const a = Un({
      key: n.config.apiKey,
      ...o
    }).slice(1), l = await n._getAdditionalHeaders();
    l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", n.languageCode && (l[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = n.languageCode);
    const c = {
      method: e,
      headers: l,
      ...r
    };
    return Df() || (c.referrerPolicy = "no-referrer"), n.emulatorConfig && Fn(n.emulatorConfig.host) && (c.credentials = "include"), eu.fetch()(await nu(n, n.config.apiHost, t, a), c);
  });
}
async function tu(n, e, t) {
  n._canInitEmulator = !1;
  const s = { ...u_, ...e };
  try {
    const i = new p_(n), r = await Promise.race([
      t(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await r.json();
    if ("needConfirmation" in o)
      throw Fs(n, "account-exists-with-different-credential", o);
    if (r.ok && !("errorMessage" in o))
      return o;
    {
      const a = r.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Fs(n, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw Fs(n, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw Fs(n, "user-disabled", o);
      const h = s[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Zc(n, h, c);
      Be(n, h);
    }
  } catch (i) {
    if (i instanceof Dt)
      throw i;
    Be(n, "network-request-failed", { message: String(i) });
  }
}
async function Rs(n, e, t, s, i = {}) {
  const r = await pt(n, e, t, s, i);
  return "mfaPendingCredential" in r && Be(n, "multi-factor-auth-required", {
    _serverResponse: r
  }), r;
}
async function nu(n, e, t, s) {
  const i = `${e}${t}?${s}`, r = n, o = r.config.emulator ? To(n.config, i) : `${n.config.apiScheme}://${i}`;
  return h_.includes(t) && (await r._persistenceManagerAvailable, r._getPersistenceType() === "COOKIE") ? r._getPersistence()._getFinalTarget(o).toString() : o;
}
function f_(n) {
  switch (n) {
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
class p_ {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, s) => {
      this.timer = setTimeout(() => s(je(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), d_.get());
    });
  }
}
function Fs(n, e, t) {
  const s = {
    appName: n.name
  };
  t.email && (s.email = t.email), t.phoneNumber && (s.phoneNumber = t.phoneNumber);
  const i = je(n, e, s);
  return i.customData._tokenResponse = t, i;
}
function Ha(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class __ {
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
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e)
        return f_(t.enforcementState);
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
async function g_(n, e) {
  return pt(n, "GET", "/v2/recaptchaConfig", xt(n, e));
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
async function m_(n, e) {
  return pt(n, "POST", "/v1/accounts:delete", e);
}
async function oi(n, e) {
  return pt(n, "POST", "/v1/accounts:lookup", e);
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
function es(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function v_(n, e = !1) {
  const t = ie(n), s = await t.getIdToken(e), i = So(s);
  E(
    i && i.exp && i.auth_time && i.iat,
    t.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const r = typeof i.firebase == "object" ? i.firebase : void 0, o = r?.sign_in_provider;
  return {
    claims: i,
    token: s,
    authTime: es(fr(i.auth_time)),
    issuedAtTime: es(fr(i.iat)),
    expirationTime: es(fr(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: r?.sign_in_second_factor || null
  };
}
function fr(n) {
  return Number(n) * 1e3;
}
function So(n) {
  const [e, t, s] = n.split(".");
  if (e === void 0 || t === void 0 || s === void 0)
    return Hs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = ni(t);
    return i ? JSON.parse(i) : (Hs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return Hs("Caught error parsing JWT payload as JSON", i?.toString()), null;
  }
}
function Va(n) {
  const e = So(n);
  return E(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), E(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), E(
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
async function An(n, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (s) {
    throw s instanceof Dt && y_(s) && n.auth.currentUser === n && await n.auth.signOut(), s;
  }
}
function y_({ code: n }) {
  return n === "auth/user-disabled" || n === "auth/user-token-expired";
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
class E_ {
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
      const t = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), t;
    } else {
      this.errorBackoff = 3e4;
      const s = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
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
class Fr {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = es(this.lastLoginAt), this.creationTime = es(this.createdAt);
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
async function ai(n) {
  const e = n.auth, t = await n.getIdToken(), s = await An(n, oi(e, { idToken: t }));
  E(
    s?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = s.users[0];
  n._notifyReloadListener(i);
  const r = i.providerUserInfo?.length ? su(i.providerUserInfo) : [], o = I_(n.providerData, r), a = n.isAnonymous, l = !(n.email && i.passwordHash) && !o?.length, c = a ? l : !1, h = {
    uid: i.localId,
    displayName: i.displayName || null,
    photoURL: i.photoUrl || null,
    email: i.email || null,
    emailVerified: i.emailVerified || !1,
    phoneNumber: i.phoneNumber || null,
    tenantId: i.tenantId || null,
    providerData: o,
    metadata: new Fr(i.createdAt, i.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(n, h);
}
async function w_(n) {
  const e = ie(n);
  await ai(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function I_(n, e) {
  return [...n.filter((s) => !e.some((i) => i.providerId === s.providerId)), ...e];
}
function su(n) {
  return n.map(({ providerId: e, ...t }) => ({
    providerId: e,
    uid: t.rawId || "",
    displayName: t.displayName || null,
    email: t.email || null,
    phoneNumber: t.phoneNumber || null,
    photoURL: t.photoUrl || null
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
async function C_(n, e) {
  const t = await tu(n, {}, async () => {
    const s = Un({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: r } = n.config, o = await nu(n, i, "/v1/token", `key=${r}`), a = await n._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: s
    };
    return n.emulatorConfig && Fn(n.emulatorConfig.host) && (l.credentials = "include"), eu.fetch()(o, l);
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
async function b_(n, e) {
  return pt(n, "POST", "/v2/accounts:revokeToken", xt(n, e));
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
class mn {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    E(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), E(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), E(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Va(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    E(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = Va(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired ? this.accessToken : (E(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: s, refreshToken: i, expiresIn: r } = await C_(e, t);
    this.updateTokensAndExpiration(s, i, Number(r));
  }
  updateTokensAndExpiration(e, t, s) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + s * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: s, accessToken: i, expirationTime: r } = t, o = new mn();
    return s && (E(typeof s == "string", "internal-error", {
      appName: e
    }), o.refreshToken = s), i && (E(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), r && (E(typeof r == "number", "internal-error", {
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
    return Object.assign(new mn(), this.toJSON());
  }
  _performRefresh() {
    return tt("not implemented");
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
function gt(n, e) {
  E(typeof n == "string" || typeof n > "u", "internal-error", { appName: e });
}
class Fe {
  constructor({ uid: e, auth: t, stsTokenManager: s, ...i }) {
    this.providerId = "firebase", this.proactiveRefresh = new E_(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = t, this.stsTokenManager = s, this.accessToken = s.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new Fr(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await An(this, this.stsTokenManager.getToken(this.auth, e));
    return E(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return v_(this, e);
  }
  reload() {
    return w_(this);
  }
  _assign(e) {
    this !== e && (E(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => ({ ...t })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new Fe({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone()
    });
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    E(
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
  async _updateTokensIfNecessary(e, t = !1) {
    let s = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), s = !0), t && await ai(this), await this.auth._persistUserIfCurrent(this), s && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Se(this.auth.app))
      return Promise.reject(ot(this.auth));
    const e = await this.getIdToken();
    return await An(this, m_(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
  static _fromJSON(e, t) {
    const s = t.displayName ?? void 0, i = t.email ?? void 0, r = t.phoneNumber ?? void 0, o = t.photoURL ?? void 0, a = t.tenantId ?? void 0, l = t._redirectEventId ?? void 0, c = t.createdAt ?? void 0, h = t.lastLoginAt ?? void 0, { uid: d, emailVerified: u, isAnonymous: f, providerData: p, stsTokenManager: g } = t;
    E(
      d && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const v = mn.fromJSON(this.name, g);
    E(
      typeof d == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), gt(s, e.name), gt(i, e.name), E(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), E(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), gt(r, e.name), gt(o, e.name), gt(a, e.name), gt(l, e.name), gt(c, e.name), gt(h, e.name);
    const A = new Fe({
      uid: d,
      auth: e,
      email: i,
      emailVerified: u,
      displayName: s,
      isAnonymous: f,
      photoURL: o,
      phoneNumber: r,
      tenantId: a,
      stsTokenManager: v,
      createdAt: c,
      lastLoginAt: h
    });
    return p && Array.isArray(p) && (A.providerData = p.map((m) => ({ ...m }))), l && (A._redirectEventId = l), A;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, s = !1) {
    const i = new mn();
    i.updateFromServerResponse(t);
    const r = new Fe({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: s
    });
    return await ai(r), r;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, t, s) {
    const i = t.users[0];
    E(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const r = i.providerUserInfo !== void 0 ? su(i.providerUserInfo) : [], o = !(i.email && i.passwordHash) && !r?.length, a = new mn();
    a.updateFromIdToken(s);
    const l = new Fe({
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
      metadata: new Fr(i.createdAt, i.lastLoginAt),
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
const za = /* @__PURE__ */ new Map();
function nt(n) {
  ct(n instanceof Function, "Expected a class definition");
  let e = za.get(n);
  return e ? (ct(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n(), za.set(n, e), e);
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
class iu {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
iu.type = "NONE";
const ja = iu;
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
function Vs(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class vn {
  constructor(e, t, s) {
    this.persistence = e, this.auth = t, this.userKey = s;
    const { config: i, name: r } = this.auth;
    this.fullUserKey = Vs(this.userKey, i.apiKey, r), this.fullPersistenceKey = Vs("persistence", i.apiKey, r), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const t = await oi(this.auth, { idToken: e }).catch(() => {
      });
      return t ? Fe._fromGetAccountInfoResponse(this.auth, t, e) : null;
    }
    return Fe._fromJSON(this.auth, e);
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
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, s = "authUser") {
    if (!t.length)
      return new vn(nt(ja), e, s);
    const i = (await Promise.all(t.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let r = i[0] || nt(ja);
    const o = Vs(s, e.config.apiKey, e.name);
    let a = null;
    for (const c of t)
      try {
        const h = await c._get(o);
        if (h) {
          let d;
          if (typeof h == "string") {
            const u = await oi(e, {
              idToken: h
            }).catch(() => {
            });
            if (!u)
              break;
            d = await Fe._fromGetAccountInfoResponse(e, u, h);
          } else
            d = Fe._fromJSON(e, h);
          c !== r && (a = d), r = c;
          break;
        }
      } catch {
      }
    const l = i.filter((c) => c._shouldAllowMigration);
    return !r._shouldAllowMigration || !l.length ? new vn(r, e, s) : (r = l[0], a && await r._set(o, a.toJSON()), await Promise.all(t.map(async (c) => {
      if (c !== r)
        try {
          await c._remove(o);
        } catch {
        }
    })), new vn(r, e, s));
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
function Ga(n) {
  const e = n.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (lu(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (ru(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (uu(e))
    return "Blackberry";
  if (hu(e))
    return "Webos";
  if (ou(e))
    return "Safari";
  if ((e.includes("chrome/") || au(e)) && !e.includes("edge/"))
    return "Chrome";
  if (cu(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, s = n.match(t);
    if (s?.length === 2)
      return s[1];
  }
  return "Other";
}
function ru(n = fe()) {
  return /firefox\//i.test(n);
}
function ou(n = fe()) {
  const e = n.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function au(n = fe()) {
  return /crios\//i.test(n);
}
function lu(n = fe()) {
  return /iemobile/i.test(n);
}
function cu(n = fe()) {
  return /android/i.test(n);
}
function uu(n = fe()) {
  return /blackberry/i.test(n);
}
function hu(n = fe()) {
  return /webos/i.test(n);
}
function Ro(n = fe()) {
  return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n);
}
function T_(n = fe()) {
  return Ro(n) && !!window.navigator?.standalone;
}
function S_() {
  return Mf() && document.documentMode === 10;
}
function du(n = fe()) {
  return Ro(n) || cu(n) || hu(n) || uu(n) || /windows phone/i.test(n) || lu(n);
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
function fu(n, e = []) {
  let t;
  switch (n) {
    case "Browser":
      t = Ga(fe());
      break;
    case "Worker":
      t = `${Ga(fe())}-${n}`;
      break;
    default:
      t = n;
  }
  const s = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${$n}/${s}`;
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
class R_ {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const s = (r) => new Promise((o, a) => {
      try {
        const l = e(r);
        o(l);
      } catch (l) {
        a(l);
      }
    });
    s.onAbort = t, this.queue.push(s);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const t = [];
    try {
      for (const s of this.queue)
        await s(e), s.onAbort && t.push(s.onAbort);
    } catch (s) {
      t.reverse();
      for (const i of t)
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
async function k_(n, e = {}) {
  return pt(n, "GET", "/v2/passwordPolicy", xt(n, e));
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
const A_ = 6;
class N_ {
  constructor(e) {
    const t = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = t.minPasswordLength ?? A_, t.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength), t.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = t.containsLowercaseCharacter), t.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = t.containsUppercaseCharacter), t.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = t.containsNumericCharacter), t.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = t.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    const t = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, t), this.validatePasswordCharacterOptions(e, t), t.isValid && (t.isValid = t.meetsMinPasswordLength ?? !0), t.isValid && (t.isValid = t.meetsMaxPasswordLength ?? !0), t.isValid && (t.isValid = t.containsLowercaseLetter ?? !0), t.isValid && (t.isValid = t.containsUppercaseLetter ?? !0), t.isValid && (t.isValid = t.containsNumericCharacter ?? !0), t.isValid && (t.isValid = t.containsNonAlphanumericCharacter ?? !0), t;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, t) {
    const s = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    s && (t.meetsMinPasswordLength = e.length >= s), i && (t.meetsMaxPasswordLength = e.length <= i);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(
      t,
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
        t,
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
  updatePasswordCharacterOptionsStatuses(e, t, s, i, r) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = s)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = r));
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
class P_ {
  constructor(e, t, s, i) {
    this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = s, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new qa(this), this.idTokenSubscription = new qa(this), this.beforeStateQueue = new R_(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Xc, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion, this._persistenceManagerAvailable = new Promise((r) => this._resolvePersistenceManagerAvailable = r);
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = nt(t)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await vn.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
        if (this._popupRedirectResolver?._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = this.currentUser?.uid || null, !this._deleted && (this._isInitialized = !0);
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
      const t = await oi(this, { idToken: e }), s = await Fe._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(s);
    } catch (t) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (Se(this.app)) {
      const r = this.app.settings.authIdToken;
      return r ? new Promise((o) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(r).then(o, o));
      }) : this.directlySetCurrentUser(null);
    }
    const t = await this.assertedPersistence.getCurrentUser();
    let s = t, i = !1;
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
          s = t, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(r));
        }
      return s ? this.reloadAndSetCurrentUserOrClear(s) : this.directlySetCurrentUser(null);
    }
    return E(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === s._redirectEventId ? this.directlySetCurrentUser(s) : this.reloadAndSetCurrentUserOrClear(s);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await ai(e);
    } catch (t) {
      if (t?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = c_();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (Se(this.app))
      return Promise.reject(ot(this));
    const t = e ? ie(e) : null;
    return t && E(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && E(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return Se(this.app) ? Promise.reject(ot(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return Se(this.app) ? Promise.reject(ot(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(nt(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await k_(this), t = new N_(e);
    this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Ts("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, s) {
    return this.registerStateListener(this.authStateSubscription, e, t, s);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, s) {
    return this.registerStateListener(this.idTokenSubscription, e, t, s);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser)
        e();
      else {
        const s = this.onAuthStateChanged(() => {
          s(), e();
        }, t);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(), s = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: t
      };
      this.tenantId != null && (s.tenantId = this.tenantId), await b_(this, s);
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
  async _setRedirectUser(e, t) {
    const s = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? s.removeCurrentUser() : s.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && nt(e) || this._popupRedirectResolver;
      E(
        t,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await vn.create(
        this,
        [nt(t._redirectPersistence)],
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
  registerStateListener(e, t, s, i) {
    if (this._deleted)
      return () => {
      };
    const r = typeof t == "function" ? t : t.next.bind(t);
    let o = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (E(
      a,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), a.then(() => {
      o || r(this.currentUser);
    }), typeof t == "function") {
      const l = e.addObserver(t, s, i);
      return () => {
        o = !0, l();
      };
    } else {
      const l = e.addObserver(t);
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
    return E(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = fu(this.config.clientPlatform, this._getFrameworks()));
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
    const t = await this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })?.getHeartbeatsHeader();
    t && (e[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = t);
    const s = await this._getAppCheckToken();
    return s && (e[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = s), e;
  }
  async _getAppCheckToken() {
    if (Se(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && o_(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function nn(n) {
  return ie(n);
}
class qa {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = jf((t) => this.observer = t);
  }
  get next() {
    return E(
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
let xi = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function O_(n) {
  xi = n;
}
function pu(n) {
  return xi.loadJS(n);
}
function D_() {
  return xi.recaptchaEnterpriseScript;
}
function x_() {
  return xi.gapiScript;
}
function M_(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
class L_ {
  constructor() {
    this.enterprise = new F_();
  }
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve("token");
  }
  render(e, t) {
    return "";
  }
}
class F_ {
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve("token");
  }
  render(e, t) {
    return "";
  }
}
const U_ = "recaptcha-enterprise", _u = "NO_RECAPTCHA";
class $_ {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = U_, this.auth = nn(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", t = !1) {
    async function s(r) {
      if (!t) {
        if (r.tenantId == null && r._agentRecaptchaConfig != null)
          return r._agentRecaptchaConfig.siteKey;
        if (r.tenantId != null && r._tenantRecaptchaConfigs[r.tenantId] !== void 0)
          return r._tenantRecaptchaConfigs[r.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        g_(r, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new __(l);
            return r.tenantId == null ? r._agentRecaptchaConfig = c : r._tenantRecaptchaConfigs[r.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function i(r, o, a) {
      const l = window.grecaptcha;
      Ha(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(r, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(_u);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new L_().execute("siteKey", { action: "verify" }) : new Promise((r, o) => {
      s(this.auth).then((a) => {
        if (!t && Ha(window.grecaptcha))
          i(a, r, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = D_();
          l.length !== 0 && (l += a), pu(l).then(() => {
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
async function Ka(n, e, t, s = !1, i = !1) {
  const r = new $_(n);
  let o;
  if (i)
    o = _u;
  else
    try {
      o = await r.verify(t);
    } catch {
      o = await r.verify(t, !0);
    }
  const a = { ...e };
  if (t === "mfaSmsEnrollment" || t === "mfaSmsSignIn") {
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
async function Ur(n, e, t, s, i) {
  if (n._getRecaptchaConfig()?.isProviderEnabled(
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  )) {
    const r = await Ka(
      n,
      e,
      t,
      t === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
    );
    return s(n, r);
  } else
    return s(n, e).catch(async (r) => {
      if (r.code === "auth/missing-recaptcha-token") {
        console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const o = await Ka(
          n,
          e,
          t,
          t === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return s(n, o);
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
function W_(n, e) {
  const t = Co(n, "auth");
  if (t.isInitialized()) {
    const i = t.getImmediate(), r = t.getOptions();
    if (qt(r, e ?? {}))
      return i;
    Be(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function B_(n, e) {
  const t = e?.persistence || [], s = (Array.isArray(t) ? t : [t]).map(nt);
  e?.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(s, e?.popupRedirectResolver);
}
function H_(n, e, t) {
  const s = nn(n);
  E(
    /^https?:\/\//.test(e),
    s,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !1, r = gu(e), { host: o, port: a } = V_(e), l = a === null ? "" : `:${a}`, c = { url: `${r}//${o}${l}/` }, h = Object.freeze({
    host: o,
    port: a,
    protocol: r.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  });
  if (!s._canInitEmulator) {
    E(
      s.config.emulator && s.emulatorConfig,
      s,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), E(
      qt(c, s.config.emulator) && qt(h, s.emulatorConfig),
      s,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  s.config.emulator = c, s.emulatorConfig = h, s.settings.appVerificationDisabledForTesting = !0, Fn(o) ? (Bc(`${r}//${o}${l}`), Hc("Auth", !0)) : z_();
}
function gu(n) {
  const e = n.indexOf(":");
  return e < 0 ? "" : n.substr(0, e + 1);
}
function V_(n) {
  const e = gu(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t)
    return { host: "", port: null };
  const s = t[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(s);
  if (i) {
    const r = i[1];
    return { host: r, port: Ya(s.substr(r.length + 1)) };
  } else {
    const [r, o] = s.split(":");
    return { host: r, port: Ya(o) };
  }
}
function Ya(n) {
  if (!n)
    return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function z_() {
  function n() {
    const e = document.createElement("p"), t = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n());
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
class ko {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return tt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return tt("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return tt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return tt("not implemented");
  }
}
async function j_(n, e) {
  return pt(n, "POST", "/v1/accounts:signUp", e);
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
async function G_(n, e) {
  return Rs(n, "POST", "/v1/accounts:signInWithPassword", xt(n, e));
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
async function q_(n, e) {
  return Rs(n, "POST", "/v1/accounts:signInWithEmailLink", xt(n, e));
}
async function K_(n, e) {
  return Rs(n, "POST", "/v1/accounts:signInWithEmailLink", xt(n, e));
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
class ds extends ko {
  /** @internal */
  constructor(e, t, s, i = null) {
    super("password", s), this._email = e, this._password = t, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, t) {
    return new ds(
      e,
      t,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, t, s = null) {
    return new ds(e, t, "emailLink", s);
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
    const t = typeof e == "string" ? JSON.parse(e) : e;
    if (t?.email && t?.password) {
      if (t.signInMethod === "password")
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === "emailLink")
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Ur(e, t, "signInWithPassword", G_);
      case "emailLink":
        return q_(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        Be(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case "password":
        const s = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Ur(e, s, "signUpPassword", j_);
      case "emailLink":
        return K_(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password
        });
      default:
        Be(
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
async function yn(n, e) {
  return Rs(n, "POST", "/v1/accounts:signInWithIdp", xt(n, e));
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
const Y_ = "http://localhost";
class Yt extends ko {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new Yt(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : Be(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), t;
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
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: s, signInMethod: i, ...r } = t;
    if (!s || !i)
      return null;
    const o = new Yt(s, i);
    return o.idToken = r.idToken || void 0, o.accessToken = r.accessToken || void 0, o.secret = r.secret, o.nonce = r.nonce, o.pendingToken = r.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return yn(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const s = this.buildRequest();
    return s.idToken = t, yn(e, s);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, yn(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: Y_,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = Un(t);
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
function Q_(n) {
  switch (n) {
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
function J_(n) {
  const e = Yn(Qn(n)).link, t = e ? Yn(Qn(e)).deep_link_id : null, s = Yn(Qn(n)).deep_link_id;
  return (s ? Yn(Qn(s)).link : null) || s || t || e || n;
}
class Ao {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const t = Yn(Qn(e)), s = t.apiKey ?? null, i = t.oobCode ?? null, r = Q_(t.mode ?? null);
    E(
      s && i && r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = s, this.operation = r, this.code = i, this.continueUrl = t.continueUrl ?? null, this.languageCode = t.lang ?? null, this.tenantId = t.tenantId ?? null;
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
    const t = J_(e);
    try {
      return new Ao(t);
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
class Wn {
  constructor() {
    this.providerId = Wn.PROVIDER_ID;
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
  static credential(e, t) {
    return ds._fromEmailAndPassword(e, t);
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
  static credentialWithLink(e, t) {
    const s = Ao.parseLink(t);
    return E(
      s,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), ds._fromEmailAndCode(e, s.code, s.tenantId);
  }
}
Wn.PROVIDER_ID = "password";
Wn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Wn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
class mu {
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
class ks extends mu {
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
class mt extends ks {
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
    return Yt._fromParams({
      providerId: mt.PROVIDER_ID,
      signInMethod: mt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return mt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return mt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return mt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
mt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
mt.PROVIDER_ID = "facebook.com";
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
class vt extends ks {
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
  static credential(e, t) {
    return Yt._fromParams({
      providerId: vt.PROVIDER_ID,
      signInMethod: vt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return vt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return vt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: s } = e;
    if (!t && !s)
      return null;
    try {
      return vt.credential(t, s);
    } catch {
      return null;
    }
  }
}
vt.GOOGLE_SIGN_IN_METHOD = "google.com";
vt.PROVIDER_ID = "google.com";
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
class yt extends ks {
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
    return Yt._fromParams({
      providerId: yt.PROVIDER_ID,
      signInMethod: yt.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return yt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return yt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return yt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
yt.GITHUB_SIGN_IN_METHOD = "github.com";
yt.PROVIDER_ID = "github.com";
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
class Et extends ks {
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
  static credential(e, t) {
    return Yt._fromParams({
      providerId: Et.PROVIDER_ID,
      signInMethod: Et.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Et.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Et.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: s } = e;
    if (!t || !s)
      return null;
    try {
      return Et.credential(t, s);
    } catch {
      return null;
    }
  }
}
Et.TWITTER_SIGN_IN_METHOD = "twitter.com";
Et.PROVIDER_ID = "twitter.com";
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
async function X_(n, e) {
  return Rs(n, "POST", "/v1/accounts:signUp", xt(n, e));
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
class Qt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, s, i = !1) {
    const r = await Fe._fromIdTokenResponse(e, s, i), o = Qa(s);
    return new Qt({
      user: r,
      providerId: o,
      _tokenResponse: s,
      operationType: t
    });
  }
  static async _forOperation(e, t, s) {
    await e._updateTokensIfNecessary(
      s,
      /* reload */
      !0
    );
    const i = Qa(s);
    return new Qt({
      user: e,
      providerId: i,
      _tokenResponse: s,
      operationType: t
    });
  }
}
function Qa(n) {
  return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null;
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
class li extends Dt {
  constructor(e, t, s, i) {
    super(t.code, t.message), this.operationType = s, this.user = i, Object.setPrototypeOf(this, li.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: s
    };
  }
  static _fromErrorAndOperation(e, t, s, i) {
    return new li(e, t, s, i);
  }
}
function vu(n, e, t, s) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch((r) => {
    throw r.code === "auth/multi-factor-auth-required" ? li._fromErrorAndOperation(n, r, e, s) : r;
  });
}
async function Z_(n, e, t = !1) {
  const s = await An(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return Qt._forOperation(n, "link", s);
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
async function eg(n, e, t = !1) {
  const { auth: s } = n;
  if (Se(s.app))
    return Promise.reject(ot(s));
  const i = "reauthenticate";
  try {
    const r = await An(n, vu(s, i, e, n), t);
    E(
      r.idToken,
      s,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = So(r.idToken);
    E(
      o,
      s,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return E(
      n.uid === a,
      s,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), Qt._forOperation(n, i, r);
  } catch (r) {
    throw r?.code === "auth/user-not-found" && Be(
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
async function yu(n, e, t = !1) {
  if (Se(n.app))
    return Promise.reject(ot(n));
  const s = "signIn", i = await vu(n, s, e), r = await Qt._fromIdTokenResponse(n, s, i);
  return t || await n._updateCurrentUser(r.user), r;
}
async function tg(n, e) {
  return yu(nn(n), e);
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
async function Eu(n) {
  const e = nn(n);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function ng(n, e, t) {
  if (Se(n.app))
    return Promise.reject(ot(n));
  const s = nn(n), o = await Ur(s, {
    returnSecureToken: !0,
    email: e,
    password: t,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }, "signUpPassword", X_).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && Eu(n), l;
  }), a = await Qt._fromIdTokenResponse(s, "signIn", o);
  return await s._updateCurrentUser(a.user), a;
}
function sg(n, e, t) {
  return Se(n.app) ? Promise.reject(ot(n)) : tg(ie(n), Wn.credential(e, t)).catch(async (s) => {
    throw s.code === "auth/password-does-not-meet-requirements" && Eu(n), s;
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
async function ig(n, e) {
  return pt(n, "POST", "/v1/accounts:update", e);
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
async function rg(n, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0)
    return;
  const s = ie(n), r = {
    idToken: await s.getIdToken(),
    displayName: e,
    photoUrl: t,
    returnSecureToken: !0
  }, o = await An(s, ig(s.auth, r));
  s.displayName = o.displayName || null, s.photoURL = o.photoUrl || null;
  const a = s.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = s.displayName, a.photoURL = s.photoURL), await s._updateTokensIfNecessary(o);
}
function og(n, e, t, s) {
  return ie(n).onIdTokenChanged(e, t, s);
}
function ag(n, e, t) {
  return ie(n).beforeAuthStateChanged(e, t);
}
function lg(n, e, t, s) {
  return ie(n).onAuthStateChanged(e, t, s);
}
function cg(n) {
  return ie(n).signOut();
}
const ci = "__sak";
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
class wu {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(ci, "1"), this.storage.removeItem(ci), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
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
const ug = 1e3, hg = 10;
class Iu extends wu {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = du(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const s = this.storage.getItem(t), i = this.localCache[t];
      s !== i && e(t, i, s);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const s = e.key;
    t ? this.detachListener() : this.stopPolling();
    const i = () => {
      const o = this.storage.getItem(s);
      !t && this.localCache[s] === o || this.notifyListeners(s, o);
    }, r = this.storage.getItem(s);
    S_() && r !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, hg) : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const s = this.listeners[e];
    if (s)
      for (const i of Array.from(s))
        i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, s) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: s
          }),
          /* poll */
          !0
        );
      });
    }, ug);
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
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Iu.type = "LOCAL";
const dg = Iu;
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
class Cu extends wu {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Cu.type = "SESSION";
const bu = Cu;
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
function fg(n) {
  return Promise.all(n.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
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
class Mi {
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
    const t = this.receivers.find((i) => i.isListeningto(e));
    if (t)
      return t;
    const s = new Mi(e);
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
    const t = e, { eventId: s, eventType: i, data: r } = t.data, o = this.handlersMap[i];
    if (!o?.size)
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: s,
      eventType: i
    });
    const a = Array.from(o).map(async (c) => c(t.origin, r)), l = await fg(a);
    t.ports[0].postMessage({
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
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Mi.receivers = [];
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
function No(n = "", e = 10) {
  let t = "";
  for (let s = 0; s < e; s++)
    t += Math.floor(Math.random() * 10);
  return n + t;
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
class pg {
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
  async _send(e, t, s = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let r, o;
    return new Promise((a, l) => {
      const c = No("", 20);
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
        data: t
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
function Ge() {
  return window;
}
function _g(n) {
  Ge().location.href = n;
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
function Tu() {
  return typeof Ge().WorkerGlobalScope < "u" && typeof Ge().importScripts == "function";
}
async function gg() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function mg() {
  return navigator?.serviceWorker?.controller || null;
}
function vg() {
  return Tu() ? self : null;
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
const Su = "firebaseLocalStorageDb", yg = 1, ui = "firebaseLocalStorage", Ru = "fbase_key";
class As {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function Li(n, e) {
  return n.transaction([ui], e ? "readwrite" : "readonly").objectStore(ui);
}
function Eg() {
  const n = indexedDB.deleteDatabase(Su);
  return new As(n).toPromise();
}
function $r() {
  const n = indexedDB.open(Su, yg);
  return new Promise((e, t) => {
    n.addEventListener("error", () => {
      t(n.error);
    }), n.addEventListener("upgradeneeded", () => {
      const s = n.result;
      try {
        s.createObjectStore(ui, { keyPath: Ru });
      } catch (i) {
        t(i);
      }
    }), n.addEventListener("success", async () => {
      const s = n.result;
      s.objectStoreNames.contains(ui) ? e(s) : (s.close(), await Eg(), e(await $r()));
    });
  });
}
async function Ja(n, e, t) {
  const s = Li(n, !0).put({
    [Ru]: e,
    value: t
  });
  return new As(s).toPromise();
}
async function wg(n, e) {
  const t = Li(n, !1).get(e), s = await new As(t).toPromise();
  return s === void 0 ? null : s.value;
}
function Xa(n, e) {
  const t = Li(n, !0).delete(e);
  return new As(t).toPromise();
}
const Ig = 800, Cg = 3;
class ku {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await $r(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const s = await this._openDb();
        return await e(s);
      } catch (s) {
        if (t++ > Cg)
          throw s;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Tu() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Mi._getInstance(vg()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
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
    if (this.activeServiceWorker = await gg(), !this.activeServiceWorker)
      return;
    this.sender = new pg(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || mg() !== this.activeServiceWorker))
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
      const e = await $r();
      return await Ja(e, ci, "1"), await Xa(e, ci), !0;
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
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((s) => Ja(s, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((s) => wg(s, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => Xa(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const r = Li(i, !1).getAll();
      return new As(r).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], s = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: r } of e)
        s.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(r) && (this.notifyListeners(i, r), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !s.has(i) && (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const s = this.listeners[e];
    if (s)
      for (const i of Array.from(s))
        i(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Ig);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
ku.type = "LOCAL";
const bg = ku;
new Ss(3e4, 6e4);
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
function Tg(n, e) {
  return e ? nt(e) : (E(
    n._popupRedirectResolver,
    n,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), n._popupRedirectResolver);
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
class Po extends ko {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return yn(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return yn(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return yn(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function Sg(n) {
  return yu(n.auth, new Po(n), n.bypassAuthState);
}
function Rg(n) {
  const { auth: e, user: t } = n;
  return E(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), eg(t, new Po(n), n.bypassAuthState);
}
async function kg(n) {
  const { auth: e, user: t } = n;
  return E(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Z_(t, new Po(n), n.bypassAuthState);
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
class Au {
  constructor(e, t, s, i, r = !1) {
    this.auth = e, this.resolver = s, this.user = i, this.bypassAuthState = r, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (s) {
        this.reject(s);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: s, postBody: i, tenantId: r, error: o, type: a } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: t,
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
        return Sg;
      case "linkViaPopup":
      case "linkViaRedirect":
        return kg;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Rg;
      default:
        Be(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    ct(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    ct(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const Ag = new Ss(2e3, 1e4);
class dn extends Au {
  constructor(e, t, s, i, r) {
    super(e, t, i, r), this.provider = s, this.authWindow = null, this.pollId = null, dn.currentPopupAction && dn.currentPopupAction.cancel(), dn.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return E(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    ct(this.filter.length === 1, "Popup operations only handle one event");
    const e = No();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(je(
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
    this.reject(je(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, dn.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(je(
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
      this.pollId = window.setTimeout(e, Ag.get());
    };
    e();
  }
}
dn.currentPopupAction = null;
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
const Ng = "pendingRedirect", zs = /* @__PURE__ */ new Map();
class Pg extends Au {
  constructor(e, t, s = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], t, void 0, s), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = zs.get(this.auth._key());
    if (!e) {
      try {
        const s = await Og(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(s);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      zs.set(this.auth._key(), e);
    }
    return this.bypassAuthState || zs.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function Og(n, e) {
  const t = Mg(e), s = xg(n);
  if (!await s._isAvailable())
    return !1;
  const i = await s._get(t) === "true";
  return await s._remove(t), i;
}
function Dg(n, e) {
  zs.set(n._key(), e);
}
function xg(n) {
  return nt(n._redirectPersistence);
}
function Mg(n) {
  return Vs(Ng, n.config.apiKey, n.name);
}
async function Lg(n, e, t = !1) {
  if (Se(n.app))
    return Promise.reject(ot(n));
  const s = nn(n), i = Tg(s, e), o = await new Pg(s, i, t).execute();
  return o && !t && (delete o.user._redirectEventId, await s._persistUserIfCurrent(o.user), await s._setRedirectUser(null, e)), o;
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
const Fg = 600 * 1e3;
class Ug {
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
    let t = !1;
    return this.consumers.forEach((s) => {
      this.isEventForConsumer(e, s) && (t = !0, this.sendToConsumer(e, s), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !$g(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    if (e.error && !Nu(e)) {
      const s = e.error.code?.split("auth/")[1] || "internal-error";
      t.onError(je(this.auth, s));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const s = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && s;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Fg && this.cachedEventUids.clear(), this.cachedEventUids.has(Za(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Za(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Za(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join("-");
}
function Nu({ type: n, error: e }) {
  return n === "unknown" && e?.code === "auth/no-auth-event";
}
function $g(n) {
  switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Nu(n);
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
async function Wg(n, e = {}) {
  return pt(n, "GET", "/v1/projects", e);
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
const Bg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Hg = /^https?/;
async function Vg(n) {
  if (n.config.emulator)
    return;
  const { authorizedDomains: e } = await Wg(n);
  for (const t of e)
    try {
      if (zg(t))
        return;
    } catch {
    }
  Be(
    n,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function zg(n) {
  const e = Lr(), { protocol: t, hostname: s } = new URL(e);
  if (n.startsWith("chrome-extension://")) {
    const o = new URL(n);
    return o.hostname === "" && s === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === s;
  }
  if (!Hg.test(t))
    return !1;
  if (Bg.test(n))
    return s === n;
  const i = n.replace(/\./g, "\\.");
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
const jg = new Ss(3e4, 6e4);
function el() {
  const n = Ge().___jsl;
  if (n?.H) {
    for (const e of Object.keys(n.H))
      if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
        for (let t = 0; t < n.CP.length; t++)
          n.CP[t] = null;
  }
}
function Gg(n) {
  return new Promise((e, t) => {
    function s() {
      el(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          el(), t(je(
            n,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: jg.get()
      });
    }
    if (Ge().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Ge().gapi?.load)
      s();
    else {
      const i = M_("iframefcb");
      return Ge()[i] = () => {
        gapi.load ? s() : t(je(
          n,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, pu(`${x_()}?onload=${i}`).catch((r) => t(r));
    }
  }).catch((e) => {
    throw js = null, e;
  });
}
let js = null;
function qg(n) {
  return js = js || Gg(n), js;
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
const Kg = new Ss(5e3, 15e3), Yg = "__/auth/iframe", Qg = "emulator/auth/iframe", Jg = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Xg = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Zg(n) {
  const e = n.config;
  E(
    e.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? To(e, Qg) : `https://${n.config.authDomain}/${Yg}`, s = {
    apiKey: e.apiKey,
    appName: n.name,
    v: $n
  }, i = Xg.get(n.config.apiHost);
  i && (s.eid = i);
  const r = n._getFrameworks();
  return r.length && (s.fw = r.join(",")), `${t}?${Un(s).slice(1)}`;
}
async function em(n) {
  const e = await qg(n), t = Ge().gapi;
  return E(
    t,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Zg(n),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Jg,
    dontclear: !0
  }, (s) => new Promise(async (i, r) => {
    await s.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = je(
      n,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Ge().setTimeout(() => {
      r(o);
    }, Kg.get());
    function l() {
      Ge().clearTimeout(a), i(s);
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
const tm = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, nm = 500, sm = 600, im = "_blank", rm = "http://localhost";
class tl {
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
function om(n, e, t, s = nm, i = sm) {
  const r = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - s) / 2, 0).toString();
  let a = "";
  const l = {
    ...tm,
    width: s.toString(),
    height: i.toString(),
    top: r,
    left: o
  }, c = fe().toLowerCase();
  t && (a = au(c) ? im : t), ru(c) && (e = e || rm, l.scrollbars = "yes");
  const h = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (T_(c) && a !== "_self")
    return am(e || "", a), new tl(null);
  const d = window.open(e || "", a, h);
  E(
    d,
    n,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    d.focus();
  } catch {
  }
  return new tl(d);
}
function am(n, e) {
  const t = document.createElement("a");
  t.href = n, t.target = e;
  const s = document.createEvent("MouseEvent");
  s.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(s);
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
const lm = "__/auth/handler", cm = "emulator/auth/handler", um = encodeURIComponent("fac");
async function nl(n, e, t, s, i, r) {
  E(
    n.config.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), E(
    n.config.apiKey,
    n,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: s,
    v: $n,
    eventId: i
  };
  if (e instanceof mu) {
    e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", Nr(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [h, d] of Object.entries({}))
      o[h] = d;
  }
  if (e instanceof ks) {
    const h = e.getScopes().filter((d) => d !== "");
    h.length > 0 && (o.scopes = h.join(","));
  }
  n.tenantId && (o.tid = n.tenantId);
  const a = o;
  for (const h of Object.keys(a))
    a[h] === void 0 && delete a[h];
  const l = await n._getAppCheckToken(), c = l ? `#${um}=${encodeURIComponent(l)}` : "";
  return `${hm(n)}?${Un(a).slice(1)}${c}`;
}
function hm({ config: n }) {
  return n.emulator ? To(n, cm) : `https://${n.authDomain}/${lm}`;
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
const pr = "webStorageSupport";
class dm {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = bu, this._completeRedirectFn = Lg, this._overrideRedirectResult = Dg;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, s, i) {
    ct(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const r = await nl(e, t, s, Lr(), i);
    return om(e, r, No());
  }
  async _openRedirect(e, t, s, i) {
    await this._originValidation(e);
    const r = await nl(e, t, s, Lr(), i);
    return _g(r), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: r } = this.eventManagers[t];
      return i ? Promise.resolve(i) : (ct(r, "If manager is not set, promise should be"), r);
    }
    const s = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: s }, s.catch(() => {
      delete this.eventManagers[t];
    }), s;
  }
  async initAndGetManager(e) {
    const t = await em(e), s = new Ug(e);
    return t.register("authEvent", (i) => (E(
      i?.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: s.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: s }, this.iframes[e._key()] = t, s;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(pr, { type: pr }, (i) => {
      const r = i?.[0]?.[pr];
      r !== void 0 && t(!!r), Be(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = Vg(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return du() || ou() || Ro();
  }
}
const fm = dm;
var sl = "@firebase/auth", il = "1.11.1";
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
class pm {
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
    const t = this.auth.onIdTokenChanged((s) => {
      e(s?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    E(
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
function _m(n) {
  switch (n) {
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
function gm(n) {
  kn(new Kt(
    "auth",
    (e, { options: t }) => {
      const s = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), r = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = s.options;
      E(o && !o.includes(":"), "invalid-api-key", { appName: s.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: n,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: fu(n)
      }, c = new P_(s, i, r, l);
      return B_(c, t), c;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, t, s) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), kn(new Kt(
    "auth-internal",
    (e) => {
      const t = nn(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((s) => new pm(s))(t);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), St(sl, il, _m(n)), St(sl, il, "esm2020");
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
const mm = 300, vm = Wc("authIdTokenMaxAge") || mm;
let rl = null;
const ym = (n) => async (e) => {
  const t = e && await e.getIdTokenResult(), s = t && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (s && s > vm)
    return;
  const i = t?.token;
  rl !== i && (rl = i, await fetch(n, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Em(n = Kc()) {
  const e = Co(n, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const t = W_(n, {
    popupRedirectResolver: fm,
    persistence: [
      bg,
      dg,
      bu
    ]
  }), s = Wc("authTokenSyncURL");
  if (s && typeof isSecureContext == "boolean" && isSecureContext) {
    const r = new URL(s, location.origin);
    if (location.origin === r.origin) {
      const o = ym(r.toString());
      ag(t, o, () => o(t.currentUser)), og(t, (a) => o(a));
    }
  }
  const i = Uc("auth");
  return i && H_(t, `http://${i}`), t;
}
function wm() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
O_({
  loadJS(n) {
    return new Promise((e, t) => {
      const s = document.createElement("script");
      s.setAttribute("src", n), s.onload = e, s.onerror = (i) => {
        const r = je(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        r.customData = i, t(r);
      }, s.type = "text/javascript", s.charset = "UTF-8", wm().appendChild(s);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
gm(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const ol = "@firebase/database", al = "1.1.0";
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
let Pu = "";
function Im(n) {
  Pu = n;
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
class Cm {
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
  set(e, t) {
    t == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Q(t));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const t = this.domStorage_.getItem(this.prefixedName_(e));
    return t == null ? null : us(t);
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
class bm {
  constructor() {
    this.cache_ = {}, this.isInMemoryStorage = !0;
  }
  set(e, t) {
    t == null ? delete this.cache_[e] : this.cache_[e] = t;
  }
  get(e) {
    return Xe(this.cache_, e) ? this.cache_[e] : null;
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
const Ou = function(n) {
  try {
    if (typeof window < "u" && typeof window[n] < "u") {
      const e = window[n];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new Cm(e);
    }
  } catch {
  }
  return new bm();
}, Ht = Ou("localStorage"), Tm = Ou("sessionStorage");
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
const En = new wo("@firebase/database"), Sm = /* @__PURE__ */ (function() {
  let n = 1;
  return function() {
    return n++;
  };
})(), Du = function(n) {
  const e = Kf(n), t = new zf();
  t.update(e);
  const s = t.digest();
  return vo.encodeByteArray(s);
}, Ns = function(...n) {
  let e = "";
  for (let t = 0; t < n.length; t++) {
    const s = n[t];
    Array.isArray(s) || s && typeof s == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof s.length == "number" ? e += Ns.apply(null, s) : typeof s == "object" ? e += Q(s) : e += s, e += " ";
  }
  return e;
};
let ts = null, ll = !0;
const Rm = function(n, e) {
  _(!0, "Can't turn on custom loggers persistently."), En.logLevel = M.VERBOSE, ts = En.log.bind(En);
}, ne = function(...n) {
  if (ll === !0 && (ll = !1, ts === null && Tm.get("logging_enabled") === !0 && Rm()), ts) {
    const e = Ns.apply(null, n);
    ts(e);
  }
}, Ps = function(n) {
  return function(...e) {
    ne(n, ...e);
  };
}, Wr = function(...n) {
  const e = "FIREBASE INTERNAL ERROR: " + Ns(...n);
  En.error(e);
}, ut = function(...n) {
  const e = `FIREBASE FATAL ERROR: ${Ns(...n)}`;
  throw En.error(e), new Error(e);
}, de = function(...n) {
  const e = "FIREBASE WARNING: " + Ns(...n);
  En.warn(e);
}, km = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && de("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, Oo = function(n) {
  return typeof n == "number" && (n !== n || // NaN
  n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY);
}, Am = function(n) {
  if (document.readyState === "complete")
    n();
  else {
    let e = !1;
    const t = function() {
      if (!document.body) {
        setTimeout(t, Math.floor(10));
        return;
      }
      e || (e = !0, n());
    };
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
      document.readyState === "complete" && t();
    }), window.attachEvent("onload", t));
  }
}, Nn = "[MIN_NAME]", Jt = "[MAX_NAME]", sn = function(n, e) {
  if (n === e)
    return 0;
  if (n === Nn || e === Jt)
    return -1;
  if (e === Nn || n === Jt)
    return 1;
  {
    const t = cl(n), s = cl(e);
    return t !== null ? s !== null ? t - s === 0 ? n.length - e.length : t - s : -1 : s !== null ? 1 : n < e ? -1 : 1;
  }
}, Nm = function(n, e) {
  return n === e ? 0 : n < e ? -1 : 1;
}, zn = function(n, e) {
  if (e && n in e)
    return e[n];
  throw new Error("Missing required key (" + n + ") in object: " + Q(e));
}, Do = function(n) {
  if (typeof n != "object" || n === null)
    return Q(n);
  const e = [];
  for (const s in n)
    e.push(s);
  e.sort();
  let t = "{";
  for (let s = 0; s < e.length; s++)
    s !== 0 && (t += ","), t += Q(e[s]), t += ":", t += Do(n[e[s]]);
  return t += "}", t;
}, xu = function(n, e) {
  const t = n.length;
  if (t <= e)
    return [n];
  const s = [];
  for (let i = 0; i < t; i += e)
    i + e > t ? s.push(n.substring(i, t)) : s.push(n.substring(i, i + e));
  return s;
};
function se(n, e) {
  for (const t in n)
    n.hasOwnProperty(t) && e(t, n[t]);
}
const Mu = function(n) {
  _(!Oo(n), "Invalid JSON number");
  const e = 11, t = 52, s = (1 << e - 1) - 1;
  let i, r, o, a, l;
  n === 0 ? (r = 0, o = 0, i = 1 / n === -1 / 0 ? 1 : 0) : (i = n < 0, n = Math.abs(n), n >= Math.pow(2, 1 - s) ? (a = Math.min(Math.floor(Math.log(n) / Math.LN2), s), r = a + s, o = Math.round(n * Math.pow(2, t - a) - Math.pow(2, t))) : (r = 0, o = Math.round(n / Math.pow(2, 1 - s - t))));
  const c = [];
  for (l = t; l; l -= 1)
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
}, Pm = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, Om = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function Dm(n, e) {
  let t = "Unknown Error";
  n === "too_big" ? t = "The data requested exceeds the maximum size that can be accessed with a single request." : n === "permission_denied" ? t = "Client doesn't have permission to access the desired data." : n === "unavailable" && (t = "The service is unavailable");
  const s = new Error(n + " at " + e._path.toString() + ": " + t);
  return s.code = n.toUpperCase(), s;
}
const xm = new RegExp("^-?(0*)\\d{1,10}$"), Mm = -2147483648, Lm = 2147483647, cl = function(n) {
  if (xm.test(n)) {
    const e = Number(n);
    if (e >= Mm && e <= Lm)
      return e;
  }
  return null;
}, Bn = function(n) {
  try {
    n();
  } catch (e) {
    setTimeout(() => {
      const t = e.stack || "";
      throw de("Exception was thrown by user callback.", t), e;
    }, Math.floor(0));
  }
}, Fm = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, ns = function(n, e) {
  const t = setTimeout(n, e);
  return typeof t == "number" && // @ts-ignore Is only defined in Deno environments.
  typeof Deno < "u" && // @ts-ignore Deno and unrefTimer are only defined in Deno environments.
  Deno.unrefTimer ? Deno.unrefTimer(t) : typeof t == "object" && t.unref && t.unref(), t;
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
class Um {
  constructor(e, t) {
    this.appCheckProvider = t, this.appName = e.name, Se(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = t?.getImmediate({ optional: !0 }), this.appCheck || t?.get().then((s) => this.appCheck = s);
  }
  getToken(e) {
    if (this.serverAppAppCheckToken) {
      if (e)
        throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
      return Promise.resolve({ token: this.serverAppAppCheckToken });
    }
    return this.appCheck ? this.appCheck.getToken(e) : new Promise((t, s) => {
      setTimeout(() => {
        this.appCheck ? this.getToken(e).then(t, s) : t(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.appCheckProvider?.get().then((t) => t.addTokenListener(e));
  }
  notifyForInvalidToken() {
    de(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
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
class $m {
  constructor(e, t, s) {
    this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = s, this.auth_ = null, this.auth_ = s.getImmediate({ optional: !0 }), this.auth_ || s.onInit((i) => this.auth_ = i);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((t) => t && t.code === "auth/token-not-initialized" ? (ne("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(t)) : new Promise((t, s) => {
      setTimeout(() => {
        this.auth_ ? this.getToken(e).then(t, s) : t(null);
      }, 0);
    });
  }
  addTokenChangeListener(e) {
    this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((t) => t.addAuthTokenListener(e));
  }
  removeTokenChangeListener(e) {
    this.authProvider_.get().then((t) => t.removeAuthTokenListener(e));
  }
  notifyForInvalidToken() {
    let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
    "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', de(e);
  }
}
class Gs {
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
Gs.OWNER = "owner";
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
const xo = "5", Lu = "v", Fu = "s", Uu = "r", $u = "f", Wu = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, Bu = "ls", Hu = "p", Br = "ac", Vu = "websocket", zu = "long_polling";
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
class ju {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, t, s, i, r = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = t, this.namespace = s, this.webSocketOnly = i, this.nodeAdmin = r, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = Ht.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && Ht.set("host:" + this._host, this.internalHost));
  }
  toString() {
    let e = this.toURLString();
    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
  }
  toURLString() {
    const e = this.secure ? "https://" : "http://", t = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${e}${this.host}/${t}`;
  }
}
function Wm(n) {
  return n.host !== n.internalHost || n.isCustomHost() || n.includeNamespaceInQueryParams;
}
function Gu(n, e, t) {
  _(typeof e == "string", "typeof type must == string"), _(typeof t == "object", "typeof params must == object");
  let s;
  if (e === Vu)
    s = (n.secure ? "wss://" : "ws://") + n.internalHost + "/.ws?";
  else if (e === zu)
    s = (n.secure ? "https://" : "http://") + n.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  Wm(n) && (t.ns = n.namespace);
  const i = [];
  return se(t, (r, o) => {
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
class Bm {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, t = 1) {
    Xe(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t;
  }
  get() {
    return Cf(this.counters_);
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
const _r = {}, gr = {};
function Mo(n) {
  const e = n.toString();
  return _r[e] || (_r[e] = new Bm()), _r[e];
}
function Hm(n, e) {
  const t = n.toString();
  return gr[t] || (gr[t] = e()), gr[t];
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
class Vm {
  /**
   * @param onMessage_
   */
  constructor(e) {
    this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
  }
  closeAfter(e, t) {
    this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
  }
  /**
   * Each message from the server comes with a response number, and an array of data. The responseNumber
   * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
   * browsers will respond in the same order as the requests we sent
   */
  handleResponse(e, t) {
    for (this.pendingResponses[e] = t; this.pendingResponses[this.currentResponseNum]; ) {
      const s = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < s.length; ++i)
        s[i] && Bn(() => {
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
const ul = "start", zm = "close", jm = "pLPCommand", Gm = "pRTLPCB", qu = "id", Ku = "pw", Yu = "ser", qm = "cb", Km = "seg", Ym = "ts", Qm = "d", Jm = "dframe", Qu = 1870, Ju = 30, Xm = Qu - Ju, Zm = 25e3, ev = 3e4;
class fn {
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
  constructor(e, t, s, i, r, o, a) {
    this.connId = e, this.repoInfo = t, this.applicationId = s, this.appCheckToken = i, this.authToken = r, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Ps(e), this.stats_ = Mo(t), this.urlFn = (l) => (this.appCheckToken && (l[Br] = this.appCheckToken), Gu(t, zu, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, t) {
    this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new Vm(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(ev)), Am(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new Lo((...r) => {
        const [o, a, l, c, h] = r;
        if (this.incrementIncomingBytes_(r), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === ul)
            this.id = a, this.password = l;
          else if (o === zm)
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
      s[ul] = "t", s[Yu] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (s[qm] = this.scriptTagHolder.uniqueCallbackIdentifier), s[Lu] = xo, this.transportSessionId && (s[Fu] = this.transportSessionId), this.lastSessionId && (s[Bu] = this.lastSessionId), this.applicationId && (s[Hu] = this.applicationId), this.appCheckToken && (s[Br] = this.appCheckToken), typeof location < "u" && location.hostname && Wu.test(location.hostname) && (s[Uu] = $u);
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
    fn.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    fn.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return fn.forceAllow_ ? !0 : !fn.forceDisallow_ && typeof document < "u" && document.createElement != null && !Pm() && !Om();
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
    const t = Q(e);
    this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
    const s = Lc(t), i = xu(s, Xm);
    for (let r = 0; r < i.length; r++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[r]), this.curSegmentNum++;
  }
  /**
   * This is how we notify the server that we're leaving.
   * We aren't able to send requests with DHTML on a window close event, but we can
   * trigger XHR requests in some browsers (everything but Opera basically).
   */
  addDisconnectPingFrame(e, t) {
    this.myDisconnFrame = document.createElement("iframe");
    const s = {};
    s[Jm] = "t", s[qu] = e, s[Ku] = t, this.myDisconnFrame.src = this.urlFn(s), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const t = Q(e).length;
    this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t);
  }
}
class Lo {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, t, s, i) {
    this.onDisconnect = s, this.urlFn = i, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = Sm(), window[jm + this.uniqueCallbackIdentifier] = e, window[Gm + this.uniqueCallbackIdentifier] = t, this.myIFrame = Lo.createIFrame_();
      let r = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (r = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + r + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        ne("frame writing exception"), a.stack && ne(a.stack), ne(a);
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
        e.contentWindow.document || ne("No IE domain setting required");
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
  startLongPoll(e, t) {
    for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(); )
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
      e[qu] = this.myID, e[Ku] = this.myPW, e[Yu] = this.currentSerial;
      let t = this.urlFn(e), s = "", i = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + Ju + s.length <= Qu; ) {
        const o = this.pendingSegs.shift();
        s = s + "&" + Km + i + "=" + o.seg + "&" + Ym + i + "=" + o.ts + "&" + Qm + i + "=" + o.d, i++;
      }
      return t = t + s, this.addLongPollTag_(t, this.currentSerial), !0;
    } else
      return !1;
  }
  /**
   * Queue a packet for transmission to the server.
   * @param segnum - A sequential id for this packet segment used for reassembly
   * @param totalsegs - The total number of segments in this packet
   * @param data - The data for this segment.
   */
  enqueueSegment(e, t, s) {
    this.pendingSegs.push({ seg: e, ts: t, d: s }), this.alive && this.newRequest_();
  }
  /**
   * Add a script tag for a regular long-poll request.
   * @param url - The URL of the script tag.
   * @param serial - The serial number of the request.
   */
  addLongPollTag_(e, t) {
    this.outstandingRequests.add(t);
    const s = () => {
      this.outstandingRequests.delete(t), this.newRequest_();
    }, i = setTimeout(s, Math.floor(Zm)), r = () => {
      clearTimeout(i), s();
    };
    this.addTag(e, r);
  }
  /**
   * Add an arbitrary script tag to the iframe.
   * @param url - The URL for the script tag source.
   * @param loadCB - A callback to be triggered once the script has loaded.
   */
  addTag(e, t) {
    setTimeout(() => {
      try {
        if (!this.sendNewPolls)
          return;
        const s = this.myIFrame.doc.createElement("script");
        s.type = "text/javascript", s.async = !0, s.src = e, s.onload = s.onreadystatechange = function() {
          const i = s.readyState;
          (!i || i === "loaded" || i === "complete") && (s.onload = s.onreadystatechange = null, s.parentNode && s.parentNode.removeChild(s), t());
        }, s.onerror = () => {
          ne("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
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
const tv = 16384, nv = 45e3;
let hi = null;
typeof MozWebSocket < "u" ? hi = MozWebSocket : typeof WebSocket < "u" && (hi = WebSocket);
class Me {
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
  constructor(e, t, s, i, r, o, a) {
    this.connId = e, this.applicationId = s, this.appCheckToken = i, this.authToken = r, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Ps(this.connId), this.stats_ = Mo(t), this.connURL = Me.connectionURL_(t, o, a, i, s), this.nodeAdmin = t.nodeAdmin;
  }
  /**
   * @param repoInfo - The info for the websocket endpoint.
   * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
   *                                         session
   * @param lastSessionId - Optional lastSessionId if there was a previous connection
   * @returns connection url
   */
  static connectionURL_(e, t, s, i, r) {
    const o = {};
    return o[Lu] = xo, typeof location < "u" && location.hostname && Wu.test(location.hostname) && (o[Uu] = $u), t && (o[Fu] = t), s && (o[Bu] = s), i && (o[Br] = i), r && (o[Hu] = r), Gu(e, Vu, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, t) {
    this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, Ht.set("previous_websocket_failure", !0);
    try {
      let s;
      Lf(), this.mySock = new hi(this.connURL, [], s);
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
    Me.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const t = /Android ([0-9]{0,}\.[0-9]{0,})/, s = navigator.userAgent.match(t);
      s && s.length > 1 && parseFloat(s[1]) < 4.4 && (e = !0);
    }
    return !e && hi !== null && !Me.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return Ht.isInMemoryStorage || Ht.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    Ht.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const t = this.frames.join("");
      this.frames = null;
      const s = us(t);
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
    if (_(this.frames === null, "We already have a frame buffer"), e.length <= 6) {
      const t = Number(e);
      if (!isNaN(t))
        return this.handleNewFrameCount_(t), null;
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
    const t = e.data;
    if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), this.frames !== null)
      this.appendFrame_(t);
    else {
      const s = this.extractFrameCount_(t);
      s !== null && this.appendFrame_(s);
    }
  }
  /**
   * Send a message to the server
   * @param data - The JSON object to transmit
   */
  send(e) {
    this.resetKeepAlive();
    const t = Q(e);
    this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
    const s = xu(t, tv);
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
    }, Math.floor(nv));
  }
  /**
   * Send a string over the websocket.
   *
   * @param str - String to send.
   */
  sendString_(e) {
    try {
      this.mySock.send(e);
    } catch (t) {
      this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0);
    }
  }
}
Me.responsesRequiredToBeHealthy = 2;
Me.healthyTimeout = 3e4;
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
class fs {
  static get ALL_TRANSPORTS() {
    return [fn, Me];
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
    const t = Me && Me.isAvailable();
    let s = t && !Me.previouslyFailed();
    if (e.webSocketOnly && (t || de("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), s = !0), s)
      this.transports_ = [Me];
    else {
      const i = this.transports_ = [];
      for (const r of fs.ALL_TRANSPORTS)
        r && r.isAvailable() && i.push(r);
      fs.globalTransportInitialized_ = !0;
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
fs.globalTransportInitialized_ = !1;
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
const sv = 6e4, iv = 5e3, rv = 10 * 1024, ov = 100 * 1024, mr = "t", hl = "d", av = "s", dl = "r", lv = "e", fl = "o", pl = "a", _l = "n", gl = "p", cv = "h";
class uv {
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
  constructor(e, t, s, i, r, o, a, l, c, h) {
    this.id = e, this.repoInfo_ = t, this.applicationId_ = s, this.appCheckToken_ = i, this.authToken_ = r, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = h, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Ps("c:" + this.id + ":"), this.transportManager_ = new fs(t), this.log_("Connection created"), this.start_();
  }
  /**
   * Starts a connection attempt
   */
  start_() {
    const e = this.transportManager_.initialTransport();
    this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const t = this.connReceiver_(this.conn_), s = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(() => {
      this.conn_ && this.conn_.open(t, s);
    }, Math.floor(0));
    const i = e.healthyTimeout || 0;
    i > 0 && (this.healthyTimeout_ = ns(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > ov ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > rv ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
    }, Math.floor(i)));
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(e) {
    return (t) => {
      e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection");
    };
  }
  connReceiver_(e) {
    return (t) => {
      this.state_ !== 2 && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"));
    };
  }
  /**
   * @param dataMsg - An arbitrary data message to be sent to the server
   */
  sendRequest(e) {
    const t = { t: "d", d: e };
    this.sendData_(t);
  }
  tryCleanupConnection() {
    this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null);
  }
  onSecondaryControl_(e) {
    if (mr in e) {
      const t = e[mr];
      t === pl ? this.upgradeIfSecondaryHealthy_() : t === dl ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : t === fl && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const t = zn("t", e), s = zn("d", e);
    if (t === "c")
      this.onSecondaryControl_(s);
    else if (t === "d")
      this.pendingDataMessages.push(s);
    else
      throw new Error("Unknown protocol layer: " + t);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: gl, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: pl, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: _l, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const t = zn("t", e), s = zn("d", e);
    t === "c" ? this.onControl_(s) : t === "d" && this.onDataMessage_(s);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const t = zn(mr, e);
    if (hl in e) {
      const s = e[hl];
      if (t === cv) {
        const i = {
          ...s
        };
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host), this.onHandshake_(i);
      } else if (t === _l) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else t === av ? this.onConnectionShutdown_(s) : t === dl ? this.onReset_(s) : t === lv ? Wr("Server Error: " + s) : t === fl ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Wr("Unknown control packet command: " + t);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const t = e.ts, s = e.v, i = e.h;
    this.sessionId = e.s, this.repoInfo_.host = i, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), xo !== s && de("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const t = this.connReceiver_(this.secondaryConn_), s = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(t, s), ns(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(sv));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, t) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : ns(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor(iv));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: gl, d: {} } }));
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (Ht.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class Xu {
  put(e, t, s, i) {
  }
  merge(e, t, s, i) {
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
  onDisconnectPut(e, t, s) {
  }
  onDisconnectMerge(e, t, s) {
  }
  onDisconnectCancel(e, t) {
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
class Zu {
  constructor(e) {
    this.allowedEvents_ = e, this.listeners_ = {}, _(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  /**
   * To be called by derived classes to trigger events.
   */
  trigger(e, ...t) {
    if (Array.isArray(this.listeners_[e])) {
      const s = [...this.listeners_[e]];
      for (let i = 0; i < s.length; i++)
        s[i].callback.apply(s[i].context, t);
    }
  }
  on(e, t, s) {
    this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({ callback: t, context: s });
    const i = this.getInitialEvent(e);
    i && t.apply(s, i);
  }
  off(e, t, s) {
    this.validateEventType_(e);
    const i = this.listeners_[e] || [];
    for (let r = 0; r < i.length; r++)
      if (i[r].callback === t && (!s || s === i[r].context)) {
        i.splice(r, 1);
        return;
      }
  }
  validateEventType_(e) {
    _(this.allowedEvents_.find((t) => t === e), "Unknown event: " + e);
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
class di extends Zu {
  static getInstance() {
    return new di();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !Eo() && (window.addEventListener("online", () => {
      this.online_ || (this.online_ = !0, this.trigger("online", !0));
    }, !1), window.addEventListener("offline", () => {
      this.online_ && (this.online_ = !1, this.trigger("online", !1));
    }, !1));
  }
  getInitialEvent(e) {
    return _(e === "online", "Unknown event type: " + e), [this.online_];
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
const ml = 32, vl = 768;
class L {
  /**
   * @param pathOrString - Path string to parse, or another path, or the raw
   * tokens array
   */
  constructor(e, t) {
    if (t === void 0) {
      this.pieces_ = e.split("/");
      let s = 0;
      for (let i = 0; i < this.pieces_.length; i++)
        this.pieces_[i].length > 0 && (this.pieces_[s] = this.pieces_[i], s++);
      this.pieces_.length = s, this.pieceNum_ = 0;
    } else
      this.pieces_ = e, this.pieceNum_ = t;
  }
  toString() {
    let e = "";
    for (let t = this.pieceNum_; t < this.pieces_.length; t++)
      this.pieces_[t] !== "" && (e += "/" + this.pieces_[t]);
    return e || "/";
  }
}
function k() {
  return new L("");
}
function C(n) {
  return n.pieceNum_ >= n.pieces_.length ? null : n.pieces_[n.pieceNum_];
}
function At(n) {
  return n.pieces_.length - n.pieceNum_;
}
function W(n) {
  let e = n.pieceNum_;
  return e < n.pieces_.length && e++, new L(n.pieces_, e);
}
function Fo(n) {
  return n.pieceNum_ < n.pieces_.length ? n.pieces_[n.pieces_.length - 1] : null;
}
function hv(n) {
  let e = "";
  for (let t = n.pieceNum_; t < n.pieces_.length; t++)
    n.pieces_[t] !== "" && (e += "/" + encodeURIComponent(String(n.pieces_[t])));
  return e || "/";
}
function ps(n, e = 0) {
  return n.pieces_.slice(n.pieceNum_ + e);
}
function eh(n) {
  if (n.pieceNum_ >= n.pieces_.length)
    return null;
  const e = [];
  for (let t = n.pieceNum_; t < n.pieces_.length - 1; t++)
    e.push(n.pieces_[t]);
  return new L(e, 0);
}
function j(n, e) {
  const t = [];
  for (let s = n.pieceNum_; s < n.pieces_.length; s++)
    t.push(n.pieces_[s]);
  if (e instanceof L)
    for (let s = e.pieceNum_; s < e.pieces_.length; s++)
      t.push(e.pieces_[s]);
  else {
    const s = e.split("/");
    for (let i = 0; i < s.length; i++)
      s[i].length > 0 && t.push(s[i]);
  }
  return new L(t, 0);
}
function T(n) {
  return n.pieceNum_ >= n.pieces_.length;
}
function he(n, e) {
  const t = C(n), s = C(e);
  if (t === null)
    return e;
  if (t === s)
    return he(W(n), W(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + n + ")");
}
function dv(n, e) {
  const t = ps(n, 0), s = ps(e, 0);
  for (let i = 0; i < t.length && i < s.length; i++) {
    const r = sn(t[i], s[i]);
    if (r !== 0)
      return r;
  }
  return t.length === s.length ? 0 : t.length < s.length ? -1 : 1;
}
function Uo(n, e) {
  if (At(n) !== At(e))
    return !1;
  for (let t = n.pieceNum_, s = e.pieceNum_; t <= n.pieces_.length; t++, s++)
    if (n.pieces_[t] !== e.pieces_[s])
      return !1;
  return !0;
}
function Re(n, e) {
  let t = n.pieceNum_, s = e.pieceNum_;
  if (At(n) > At(e))
    return !1;
  for (; t < n.pieces_.length; ) {
    if (n.pieces_[t] !== e.pieces_[s])
      return !1;
    ++t, ++s;
  }
  return !0;
}
class fv {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, t) {
    this.errorPrefix_ = t, this.parts_ = ps(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let s = 0; s < this.parts_.length; s++)
      this.byteLength_ += Di(this.parts_[s]);
    th(this);
  }
}
function pv(n, e) {
  n.parts_.length > 0 && (n.byteLength_ += 1), n.parts_.push(e), n.byteLength_ += Di(e), th(n);
}
function _v(n) {
  const e = n.parts_.pop();
  n.byteLength_ -= Di(e), n.parts_.length > 0 && (n.byteLength_ -= 1);
}
function th(n) {
  if (n.byteLength_ > vl)
    throw new Error(n.errorPrefix_ + "has a key path longer than " + vl + " bytes (" + n.byteLength_ + ").");
  if (n.parts_.length > ml)
    throw new Error(n.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + ml + ") or object contains a cycle " + Ut(n));
}
function Ut(n) {
  return n.parts_.length === 0 ? "" : "in property '" + n.parts_.join(".") + "'";
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
class $o extends Zu {
  static getInstance() {
    return new $o();
  }
  constructor() {
    super(["visible"]);
    let e, t;
    typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (t = "visibilitychange", e = "hidden") : typeof document.mozHidden < "u" ? (t = "mozvisibilitychange", e = "mozHidden") : typeof document.msHidden < "u" ? (t = "msvisibilitychange", e = "msHidden") : typeof document.webkitHidden < "u" && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, () => {
      const s = !document[e];
      s !== this.visible_ && (this.visible_ = s, this.trigger("visible", s));
    }, !1);
  }
  getInitialEvent(e) {
    return _(e === "visible", "Unknown event type: " + e), [this.visible_];
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
const jn = 1e3, gv = 300 * 1e3, yl = 30 * 1e3, mv = 1.3, vv = 3e4, yv = "server_kill", El = 3;
class at extends Xu {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, t, s, i, r, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = s, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = r, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = at.nextPersistentConnectionId_++, this.log_ = Ps("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = jn, this.maxReconnectDelay_ = gv, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    $o.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && di.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, t, s) {
    const i = ++this.requestNumber_, r = { r: i, a: e, b: t };
    this.log_(Q(r)), _(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), s && (this.requestCBHash_[i] = s);
  }
  get(e) {
    this.initConnection_();
    const t = new bs(), i = {
      action: "g",
      request: {
        p: e._path.toString(),
        q: e._queryObject
      },
      onComplete: (o) => {
        const a = o.d;
        o.s === "ok" ? t.resolve(a) : t.reject(a);
      }
    };
    this.outstandingGets_.push(i), this.outstandingGetCount_++;
    const r = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(r), t.promise;
  }
  listen(e, t, s, i) {
    this.initConnection_();
    const r = e._queryIdentifier, o = e._path.toString();
    this.log_("Listen called for " + o + " " + r), this.listens.has(o) || this.listens.set(o, /* @__PURE__ */ new Map()), _(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), _(!this.listens.get(o).has(r), "listen() called twice for same path/queryId.");
    const a = {
      onComplete: i,
      hashFn: t,
      query: e,
      tag: s
    };
    this.listens.get(o).set(r, a), this.connected_ && this.sendListen_(a);
  }
  sendGet_(e) {
    const t = this.outstandingGets_[e];
    this.sendRequest("g", t.request, (s) => {
      delete this.outstandingGets_[e], this.outstandingGetCount_--, this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []), t.onComplete && t.onComplete(s);
    });
  }
  sendListen_(e) {
    const t = e.query, s = t._path.toString(), i = t._queryIdentifier;
    this.log_("Listen on " + s + " for " + i);
    const r = {
      /*path*/
      p: s
    }, o = "q";
    e.tag && (r.q = t._queryObject, r.t = e.tag), r.h = e.hashFn(), this.sendRequest(o, r, (a) => {
      const l = a.d, c = a.s;
      at.warnOnListenWarnings_(l, t), (this.listens.get(s) && this.listens.get(s).get(i)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(s, i), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, t) {
    if (e && typeof e == "object" && Xe(e, "w")) {
      const s = Rn(e, "w");
      if (Array.isArray(s) && ~s.indexOf("no_index")) {
        const i = '".indexOn": "' + t._queryParams.getIndex().toString() + '"', r = t._path.toString();
        de(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(e) {
    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {
    }), this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    (e && e.length === 40 || Vf(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = yl);
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
      const e = this.authToken_, t = Hf(e) ? "auth" : "gauth", s = { cred: e };
      this.authOverride_ === null ? s.noauth = !0 : typeof this.authOverride_ == "object" && (s.authvar = this.authOverride_), this.sendRequest(t, s, (i) => {
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
      const t = e.s, s = e.d || "error";
      t === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, s);
    });
  }
  /**
   * @inheritDoc
   */
  unlisten(e, t) {
    const s = e._path.toString(), i = e._queryIdentifier;
    this.log_("Unlisten called for " + s + " " + i), _(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(s, i) && this.connected_ && this.sendUnlisten_(s, i, e._queryObject, t);
  }
  sendUnlisten_(e, t, s, i) {
    this.log_("Unlisten on " + e + " for " + t);
    const r = {
      /*path*/
      p: e
    }, o = "n";
    i && (r.q = s, r.t = i), this.sendRequest(o, r);
  }
  onDisconnectPut(e, t, s) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, s) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "o",
      data: t,
      onComplete: s
    });
  }
  onDisconnectMerge(e, t, s) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, s) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "om",
      data: t,
      onComplete: s
    });
  }
  onDisconnectCancel(e, t) {
    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
      pathString: e,
      action: "oc",
      data: null,
      onComplete: t
    });
  }
  sendOnDisconnect_(e, t, s, i) {
    const r = {
      /*path*/
      p: t,
      /*data*/
      d: s
    };
    this.log_("onDisconnect " + e, r), this.sendRequest(e, r, (o) => {
      i && setTimeout(() => {
        i(o.s, o.d);
      }, Math.floor(0));
    });
  }
  put(e, t, s, i) {
    this.putInternal("p", e, t, s, i);
  }
  merge(e, t, s, i) {
    this.putInternal("m", e, t, s, i);
  }
  putInternal(e, t, s, i, r) {
    this.initConnection_();
    const o = {
      /*path*/
      p: t,
      /*data*/
      d: s
    };
    r !== void 0 && (o.h = r), this.outstandingPuts_.push({
      action: e,
      request: o,
      onComplete: i
    }), this.outstandingPutCount_++;
    const a = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + t);
  }
  sendPut_(e) {
    const t = this.outstandingPuts_[e].action, s = this.outstandingPuts_[e].request, i = this.outstandingPuts_[e].onComplete;
    this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, s, (r) => {
      this.log_(t + " response", r), delete this.outstandingPuts_[e], this.outstandingPutCount_--, this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []), i && i(r.s, r.d);
    });
  }
  reportStats(e) {
    if (this.connected_) {
      const t = {
        /*counters*/
        c: e
      };
      this.log_("reportStats", t), this.sendRequest(
        /*stats*/
        "s",
        t,
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
      this.log_("from server: " + Q(e));
      const t = e.r, s = this.requestCBHash_[t];
      s && (delete this.requestCBHash_[t], s(e.b));
    } else {
      if ("error" in e)
        throw "A server-side error has occurred: " + e.error;
      "a" in e && this.onDataPush_(e.a, e.b);
    }
  }
  onDataPush_(e, t) {
    this.log_("handleServerMessage", e, t), e === "d" ? this.onDataUpdate_(
      t.p,
      t.d,
      /*isMerge*/
      !1,
      t.t
    ) : e === "m" ? this.onDataUpdate_(
      t.p,
      t.d,
      /*isMerge=*/
      !0,
      t.t
    ) : e === "c" ? this.onListenRevoked_(t.p, t.q) : e === "ac" ? this.onAuthRevoked_(t.s, t.d) : e === "apc" ? this.onAppCheckRevoked_(t.s, t.d) : e === "sd" ? this.onSecurityDebugPacket_(t) : Wr("Unrecognized action received from server: " + Q(e) + `
Are you using the latest client?`);
  }
  onReady_(e, t) {
    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (/* @__PURE__ */ new Date()).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    _(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null, this.establishConnection_();
    }, Math.floor(e));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = jn, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = jn, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > vv && (this.reconnectDelay_ = jn), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let t = Math.max(0, this.reconnectDelay_ - e);
      t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * mv);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), t = this.onReady_.bind(this), s = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + at.nextConnectionId_++, r = this.lastSessionId;
      let o = !1, a = null;
      const l = function() {
        a ? a.close() : (o = !0, s());
      }, c = function(d) {
        _(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(d);
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
        o ? ne("getToken() completed but was canceled") : (ne("getToken() completed. Creating connection."), this.authToken_ = d && d.accessToken, this.appCheckToken_ = u && u.token, a = new uv(
          i,
          this.repoInfo_,
          this.applicationId_,
          this.appCheckToken_,
          this.authToken_,
          e,
          t,
          s,
          /* onKill= */
          (f) => {
            de(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(yv);
          },
          r
        ));
      } catch (d) {
        this.log_("Failed to get token: " + d), o || (this.repoInfo_.nodeAdmin && de(d), l());
      }
    }
  }
  interrupt(e) {
    ne("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    ne("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Nr(this.interruptReasons_) && (this.reconnectDelay_ = jn, this.realtime_ || this.scheduleConnect_(0));
  }
  handleTimestamp_(e) {
    const t = e - (/* @__PURE__ */ new Date()).getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: t });
  }
  cancelSentTransactions_() {
    for (let e = 0; e < this.outstandingPuts_.length; e++) {
      const t = this.outstandingPuts_[e];
      t && /*hash*/
      "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--);
    }
    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []);
  }
  onListenRevoked_(e, t) {
    let s;
    t ? s = t.map((r) => Do(r)).join("$") : s = "default";
    const i = this.removeListen_(e, s);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, t) {
    const s = new L(e).toString();
    let i;
    if (this.listens.has(s)) {
      const r = this.listens.get(s);
      i = r.get(t), r.delete(t), r.size === 0 && this.listens.delete(s);
    } else
      i = void 0;
    return i;
  }
  onAuthRevoked_(e, t) {
    ne("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= El && (this.reconnectDelay_ = yl, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, t) {
    ne("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= El && this.appCheckTokenProvider_.notifyForInvalidToken());
  }
  onSecurityDebugPacket_(e) {
    this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace(`
`, `
FIREBASE: `));
  }
  restoreState_() {
    this.tryAuth(), this.tryAppCheck();
    for (const e of this.listens.values())
      for (const t of e.values())
        this.sendListen_(t);
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
    let t = "js";
    e["sdk." + t + "." + Pu.replace(/\./g, "-")] = 1, Eo() ? e["framework.cordova"] = 1 : Vc() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = di.getInstance().currentlyOnline();
    return Nr(this.interruptReasons_) && e;
  }
}
at.nextPersistentConnectionId_ = 0;
at.nextConnectionId_ = 0;
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
class b {
  constructor(e, t) {
    this.name = e, this.node = t;
  }
  static Wrap(e, t) {
    return new b(e, t);
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
class Fi {
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
  indexedValueChanged(e, t) {
    const s = new b(Nn, e), i = new b(Nn, t);
    return this.compare(s, i) !== 0;
  }
  /**
   * @returns a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  minPost() {
    return b.MIN;
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
let Us;
class nh extends Fi {
  static get __EMPTY_NODE() {
    return Us;
  }
  static set __EMPTY_NODE(e) {
    Us = e;
  }
  compare(e, t) {
    return sn(e.name, t.name);
  }
  isDefinedOn(e) {
    throw Ln("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, t) {
    return !1;
  }
  minPost() {
    return b.MIN;
  }
  maxPost() {
    return new b(Jt, Us);
  }
  makePost(e, t) {
    return _(typeof e == "string", "KeyIndex indexValue must always be a string."), new b(e, Us);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const wn = new nh();
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
class $s {
  /**
   * @param node - Node to iterate.
   * @param isReverse_ - Whether or not to iterate in reverse
   */
  constructor(e, t, s, i, r = null) {
    this.isReverse_ = i, this.resultGenerator_ = r, this.nodeStack_ = [];
    let o = 1;
    for (; !e.isEmpty(); )
      if (e = e, o = t ? s(e.key, t) : 1, i && (o *= -1), o < 0)
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
    let e = this.nodeStack_.pop(), t;
    if (this.resultGenerator_ ? t = this.resultGenerator_(e.key, e.value) : t = { key: e.key, value: e.value }, this.isReverse_)
      for (e = e.left; !e.isEmpty(); )
        this.nodeStack_.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty(); )
        this.nodeStack_.push(e), e = e.left;
    return t;
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
class X {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, t, s, i, r) {
    this.key = e, this.value = t, this.color = s ?? X.RED, this.left = i ?? ve.EMPTY_NODE, this.right = r ?? ve.EMPTY_NODE;
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
  copy(e, t, s, i, r) {
    return new X(e ?? this.key, t ?? this.value, s ?? this.color, i ?? this.left, r ?? this.right);
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
  insert(e, t, s) {
    let i = this;
    const r = s(e, i.key);
    return r < 0 ? i = i.copy(null, null, null, i.left.insert(e, t, s), null) : r === 0 ? i = i.copy(null, t, null, null, null) : i = i.copy(null, null, null, null, i.right.insert(e, t, s)), i.fixUp_();
  }
  /**
   * @returns New tree, with the minimum key removed.
   */
  removeMin_() {
    if (this.left.isEmpty())
      return ve.EMPTY_NODE;
    let e = this;
    return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_();
  }
  /**
   * @param key - The key of the item to remove.
   * @param comparator - Comparator.
   * @returns New tree, with the specified item removed.
   */
  remove(e, t) {
    let s, i;
    if (s = this, t(e, s.key) < 0)
      !s.left.isEmpty() && !s.left.isRed_() && !s.left.left.isRed_() && (s = s.moveRedLeft_()), s = s.copy(null, null, null, s.left.remove(e, t), null);
    else {
      if (s.left.isRed_() && (s = s.rotateRight_()), !s.right.isEmpty() && !s.right.isRed_() && !s.right.left.isRed_() && (s = s.moveRedRight_()), t(e, s.key) === 0) {
        if (s.right.isEmpty())
          return ve.EMPTY_NODE;
        i = s.right.min_(), s = s.copy(i.key, i.value, null, null, s.right.removeMin_());
      }
      s = s.copy(null, null, null, null, s.right.remove(e, t));
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
    const e = this.copy(null, null, X.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, X.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  /**
   * @returns Newt ree, after colorFlip.
   */
  colorFlip_() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
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
X.RED = !0;
X.BLACK = !1;
class Ev {
  /**
   * Returns a copy of the current node.
   *
   * @returns The node copy.
   */
  copy(e, t, s, i, r) {
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
  insert(e, t, s) {
    return new X(e, t, null);
  }
  /**
   * Returns a copy of the tree, with the specified key removed.
   *
   * @param key - The key to remove.
   * @param comparator - Comparator.
   * @returns New tree, with item removed.
   */
  remove(e, t) {
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
class ve {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, t = ve.EMPTY_NODE) {
    this.comparator_ = e, this.root_ = t;
  }
  /**
   * Returns a copy of the map, with the specified key/value added or replaced.
   * (TODO: We should perhaps rename this method to 'put')
   *
   * @param key - Key to be added.
   * @param value - Value to be added.
   * @returns New map, with item added.
   */
  insert(e, t) {
    return new ve(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, X.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new ve(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, X.BLACK, null, null));
  }
  /**
   * Returns the value of the node with the given key, or null.
   *
   * @param key - The key to look up.
   * @returns The value of the node with the given key, or null if the
   * key doesn't exist.
   */
  get(e) {
    let t, s = this.root_;
    for (; !s.isEmpty(); ) {
      if (t = this.comparator_(e, s.key), t === 0)
        return s.value;
      t < 0 ? s = s.left : t > 0 && (s = s.right);
    }
    return null;
  }
  /**
   * Returns the key of the item *before* the specified key, or null if key is the first item.
   * @param key - The key to find the predecessor of
   * @returns The predecessor key.
   */
  getPredecessorKey(e) {
    let t, s = this.root_, i = null;
    for (; !s.isEmpty(); )
      if (t = this.comparator_(e, s.key), t === 0) {
        if (s.left.isEmpty())
          return i ? i.key : null;
        for (s = s.left; !s.right.isEmpty(); )
          s = s.right;
        return s.key;
      } else t < 0 ? s = s.left : t > 0 && (i = s, s = s.right);
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
    return new $s(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, t) {
    return new $s(this.root_, e, this.comparator_, !1, t);
  }
  getReverseIteratorFrom(e, t) {
    return new $s(this.root_, e, this.comparator_, !0, t);
  }
  getReverseIterator(e) {
    return new $s(this.root_, null, this.comparator_, !0, e);
  }
}
ve.EMPTY_NODE = new Ev();
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
function wv(n, e) {
  return sn(n.name, e.name);
}
function Wo(n, e) {
  return sn(n, e);
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
let Hr;
function Iv(n) {
  Hr = n;
}
const sh = function(n) {
  return typeof n == "number" ? "number:" + Mu(n) : "string:" + n;
}, ih = function(n) {
  if (n.isLeafNode()) {
    const e = n.val();
    _(typeof e == "string" || typeof e == "number" || typeof e == "object" && Xe(e, ".sv"), "Priority must be a string or number.");
  } else
    _(n === Hr || n.isEmpty(), "priority of unexpected type.");
  _(n === Hr || n.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
let wl;
class J {
  static set __childrenNodeConstructor(e) {
    wl = e;
  }
  static get __childrenNodeConstructor() {
    return wl;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, t = J.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, _(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), ih(this.priorityNode_);
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
    return new J(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : J.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return T(e) ? this : C(e) === ".priority" ? this.priorityNode_ : J.__childrenNodeConstructor.EMPTY_NODE;
  }
  hasChild() {
    return !1;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, t) {
    return null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, t) {
    return e === ".priority" ? this.updatePriority(t) : t.isEmpty() && e !== ".priority" ? this : J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, t) {
    const s = C(e);
    return s === null ? t : t.isEmpty() && s !== ".priority" ? this : (_(s !== ".priority" || At(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(s, J.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e), t)));
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
  forEachChild(e, t) {
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
      this.priorityNode_.isEmpty() || (e += "priority:" + sh(this.priorityNode_.val()) + ":");
      const t = typeof this.value_;
      e += t + ":", t === "number" ? e += Mu(this.value_) : e += this.value_, this.lazyHash_ = Du(e);
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
    return e === J.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof J.__childrenNodeConstructor ? -1 : (_(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const t = typeof e.value_, s = typeof this.value_, i = J.VALUE_TYPE_ORDER.indexOf(t), r = J.VALUE_TYPE_ORDER.indexOf(s);
    return _(i >= 0, "Unknown leaf type: " + t), _(r >= 0, "Unknown leaf type: " + s), i === r ? s === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : r - i;
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
      const t = e;
      return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_);
    } else
      return !1;
  }
}
J.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
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
let rh, oh;
function Cv(n) {
  rh = n;
}
function bv(n) {
  oh = n;
}
class Tv extends Fi {
  compare(e, t) {
    const s = e.node.getPriority(), i = t.node.getPriority(), r = s.compareTo(i);
    return r === 0 ? sn(e.name, t.name) : r;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, t) {
    return !e.getPriority().equals(t.getPriority());
  }
  minPost() {
    return b.MIN;
  }
  maxPost() {
    return new b(Jt, new J("[PRIORITY-POST]", oh));
  }
  makePost(e, t) {
    const s = rh(e);
    return new b(t, new J("[PRIORITY-POST]", s));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const G = new Tv();
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
const Sv = Math.log(2);
class Rv {
  constructor(e) {
    const t = (r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(r) / Sv, 10)
    ), s = (r) => parseInt(Array(r + 1).join("1"), 2);
    this.count = t(e + 1), this.current_ = this.count - 1;
    const i = s(this.count);
    this.bits_ = e + 1 & i;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & 1 << this.current_);
    return this.current_--, e;
  }
}
const fi = function(n, e, t, s) {
  n.sort(e);
  const i = function(l, c) {
    const h = c - l;
    let d, u;
    if (h === 0)
      return null;
    if (h === 1)
      return d = n[l], u = t ? t(d) : d, new X(u, d.node, X.BLACK, null, null);
    {
      const f = parseInt(h / 2, 10) + l, p = i(l, f), g = i(f + 1, c);
      return d = n[f], u = t ? t(d) : d, new X(u, d.node, X.BLACK, p, g);
    }
  }, r = function(l) {
    let c = null, h = null, d = n.length;
    const u = function(p, g) {
      const v = d - p, A = d;
      d -= p;
      const m = i(v + 1, A), I = n[v], N = t ? t(I) : I;
      f(new X(N, I.node, g, null, m));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (h = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), v = Math.pow(2, l.count - (p + 1));
      g ? u(v, X.BLACK) : (u(v, X.BLACK), u(v, X.RED));
    }
    return h;
  }, o = new Rv(n.length), a = r(o);
  return new ve(s || e, a);
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
let vr;
const cn = {};
class st {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return _(cn && G, "ChildrenNode.ts has not been loaded"), vr = vr || new st({ ".priority": cn }, { ".priority": G }), vr;
  }
  constructor(e, t) {
    this.indexes_ = e, this.indexSet_ = t;
  }
  get(e) {
    const t = Rn(this.indexes_, e);
    if (!t)
      throw new Error("No index defined for " + e);
    return t instanceof ve ? t : null;
  }
  hasIndex(e) {
    return Xe(this.indexSet_, e.toString());
  }
  addIndex(e, t) {
    _(e !== wn, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const s = [];
    let i = !1;
    const r = t.getIterator(b.Wrap);
    let o = r.getNext();
    for (; o; )
      i = i || e.isDefinedOn(o.node), s.push(o), o = r.getNext();
    let a;
    i ? a = fi(s, e.getCompare()) : a = cn;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const h = { ...this.indexes_ };
    return h[l] = a, new st(h, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, t) {
    const s = si(this.indexes_, (i, r) => {
      const o = Rn(this.indexSet_, r);
      if (_(o, "Missing index implementation for " + r), i === cn)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = t.getIterator(b.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), fi(a, o.getCompare());
        } else
          return cn;
      else {
        const a = t.get(e.name);
        let l = i;
        return a && (l = l.remove(new b(e.name, a))), l.insert(e, e.node);
      }
    });
    return new st(s, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, t) {
    const s = si(this.indexes_, (i) => {
      if (i === cn)
        return i;
      {
        const r = t.get(e.name);
        return r ? i.remove(new b(e.name, r)) : i;
      }
    });
    return new st(s, this.indexSet_);
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
let Gn;
class w {
  static get EMPTY_NODE() {
    return Gn || (Gn = new w(new ve(Wo), null, st.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, t, s) {
    this.children_ = e, this.priorityNode_ = t, this.indexMap_ = s, this.lazyHash_ = null, this.priorityNode_ && ih(this.priorityNode_), this.children_.isEmpty() && _(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || Gn;
  }
  /** @inheritDoc */
  updatePriority(e) {
    return this.children_.isEmpty() ? this : new w(this.children_, e, this.indexMap_);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    if (e === ".priority")
      return this.getPriority();
    {
      const t = this.children_.get(e);
      return t === null ? Gn : t;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const t = C(e);
    return t === null ? this : this.getImmediateChild(t).getChild(W(e));
  }
  /** @inheritDoc */
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  /** @inheritDoc */
  updateImmediateChild(e, t) {
    if (_(t, "We should always be passing snapshot nodes"), e === ".priority")
      return this.updatePriority(t);
    {
      const s = new b(e, t);
      let i, r;
      t.isEmpty() ? (i = this.children_.remove(e), r = this.indexMap_.removeFromIndexes(s, this.children_)) : (i = this.children_.insert(e, t), r = this.indexMap_.addToIndexes(s, this.children_));
      const o = i.isEmpty() ? Gn : this.priorityNode_;
      return new w(i, o, r);
    }
  }
  /** @inheritDoc */
  updateChild(e, t) {
    const s = C(e);
    if (s === null)
      return t;
    {
      _(C(e) !== ".priority" || At(e) === 1, ".priority must be the last token in a path");
      const i = this.getImmediateChild(s).updateChild(W(e), t);
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
    const t = {};
    let s = 0, i = 0, r = !0;
    if (this.forEachChild(G, (o, a) => {
      t[o] = a.val(e), s++, r && w.INTEGER_REGEXP_.test(o) ? i = Math.max(i, Number(o)) : r = !1;
    }), !e && r && i < 2 * s) {
      const o = [];
      for (const a in t)
        o[a] = t[a];
      return o;
    } else
      return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t;
  }
  /** @inheritDoc */
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.getPriority().isEmpty() || (e += "priority:" + sh(this.getPriority().val()) + ":"), this.forEachChild(G, (t, s) => {
        const i = s.hash();
        i !== "" && (e += ":" + t + ":" + i);
      }), this.lazyHash_ = e === "" ? "" : Du(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, t, s) {
    const i = this.resolveIndex_(s);
    if (i) {
      const r = i.getPredecessorKey(new b(e, t));
      return r ? r.name : null;
    } else
      return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const t = this.resolveIndex_(e);
    if (t) {
      const s = t.minKey();
      return s && s.name;
    } else
      return this.children_.minKey();
  }
  getFirstChild(e) {
    const t = this.getFirstChildName(e);
    return t ? new b(t, this.children_.get(t)) : null;
  }
  /**
   * Given an index, return the key name of the largest value we have, according to that index
   */
  getLastChildName(e) {
    const t = this.resolveIndex_(e);
    if (t) {
      const s = t.maxKey();
      return s && s.name;
    } else
      return this.children_.maxKey();
  }
  getLastChild(e) {
    const t = this.getLastChildName(e);
    return t ? new b(t, this.children_.get(t)) : null;
  }
  forEachChild(e, t) {
    const s = this.resolveIndex_(e);
    return s ? s.inorderTraversal((i) => t(i.name, i.node)) : this.children_.inorderTraversal(t);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, t) {
    const s = this.resolveIndex_(t);
    if (s)
      return s.getIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getIteratorFrom(e.name, b.Wrap);
      let r = i.peek();
      for (; r != null && t.compare(r, e) < 0; )
        i.getNext(), r = i.peek();
      return i;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, t) {
    const s = this.resolveIndex_(t);
    if (s)
      return s.getReverseIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getReverseIteratorFrom(e.name, b.Wrap);
      let r = i.peek();
      for (; r != null && t.compare(r, e) > 0; )
        i.getNext(), r = i.peek();
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Os ? -1 : 0;
  }
  withIndex(e) {
    if (e === wn || this.indexMap_.hasIndex(e))
      return this;
    {
      const t = this.indexMap_.addIndex(e, this.children_);
      return new w(this.children_, this.priorityNode_, t);
    }
  }
  isIndexed(e) {
    return e === wn || this.indexMap_.hasIndex(e);
  }
  equals(e) {
    if (e === this)
      return !0;
    if (e.isLeafNode())
      return !1;
    {
      const t = e;
      if (this.getPriority().equals(t.getPriority()))
        if (this.children_.count() === t.children_.count()) {
          const s = this.getIterator(G), i = t.getIterator(G);
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
    return e === wn ? null : this.indexMap_.get(e.toString());
  }
}
w.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class kv extends w {
  constructor() {
    super(new ve(Wo), w.EMPTY_NODE, st.Default);
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
    return w.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const Os = new kv();
Object.defineProperties(b, {
  MIN: {
    value: new b(Nn, w.EMPTY_NODE)
  },
  MAX: {
    value: new b(Jt, Os)
  }
});
nh.__EMPTY_NODE = w.EMPTY_NODE;
J.__childrenNodeConstructor = w;
Iv(Os);
bv(Os);
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
const Av = !0;
function Y(n, e = null) {
  if (n === null)
    return w.EMPTY_NODE;
  if (typeof n == "object" && ".priority" in n && (e = n[".priority"]), _(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof n == "object" && ".value" in n && n[".value"] !== null && (n = n[".value"]), typeof n != "object" || ".sv" in n) {
    const t = n;
    return new J(t, Y(e));
  }
  if (!(n instanceof Array) && Av) {
    const t = [];
    let s = !1;
    if (se(n, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = Y(a);
        l.isEmpty() || (s = s || !l.getPriority().isEmpty(), t.push(new b(o, l)));
      }
    }), t.length === 0)
      return w.EMPTY_NODE;
    const r = fi(t, wv, (o) => o.name, Wo);
    if (s) {
      const o = fi(t, G.getCompare());
      return new w(r, Y(e), new st({ ".priority": o }, { ".priority": G }));
    } else
      return new w(r, Y(e), st.Default);
  } else {
    let t = w.EMPTY_NODE;
    return se(n, (s, i) => {
      if (Xe(n, s) && s.substring(0, 1) !== ".") {
        const r = Y(i);
        (r.isLeafNode() || !r.isEmpty()) && (t = t.updateImmediateChild(s, r));
      }
    }), t.updatePriority(Y(e));
  }
}
Cv(Y);
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
class Nv extends Fi {
  constructor(e) {
    super(), this.indexPath_ = e, _(!T(e) && C(e) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, t) {
    const s = this.extractChild(e.node), i = this.extractChild(t.node), r = s.compareTo(i);
    return r === 0 ? sn(e.name, t.name) : r;
  }
  makePost(e, t) {
    const s = Y(e), i = w.EMPTY_NODE.updateChild(this.indexPath_, s);
    return new b(t, i);
  }
  maxPost() {
    const e = w.EMPTY_NODE.updateChild(this.indexPath_, Os);
    return new b(Jt, e);
  }
  toString() {
    return ps(this.indexPath_, 0).join("/");
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
class Pv extends Fi {
  compare(e, t) {
    const s = e.node.compareTo(t.node);
    return s === 0 ? sn(e.name, t.name) : s;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, t) {
    return !e.equals(t);
  }
  minPost() {
    return b.MIN;
  }
  maxPost() {
    return b.MAX;
  }
  makePost(e, t) {
    const s = Y(e);
    return new b(t, s);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const Ov = new Pv();
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
function ah(n) {
  return { type: "value", snapshotNode: n };
}
function Pn(n, e) {
  return { type: "child_added", snapshotNode: e, childName: n };
}
function _s(n, e) {
  return { type: "child_removed", snapshotNode: e, childName: n };
}
function gs(n, e, t) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: n,
    oldSnap: t
  };
}
function Dv(n, e) {
  return { type: "child_moved", snapshotNode: e, childName: n };
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
class Bo {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, t, s, i, r, o) {
    _(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(t);
    return a.getChild(i).equals(s.getChild(i)) && a.isEmpty() === s.isEmpty() || (o != null && (s.isEmpty() ? e.hasChild(t) ? o.trackChildChange(_s(t, a)) : _(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Pn(t, s)) : o.trackChildChange(gs(t, s, a))), e.isLeafNode() && s.isEmpty()) ? e : e.updateImmediateChild(t, s).withIndex(this.index_);
  }
  updateFullNode(e, t, s) {
    return s != null && (e.isLeafNode() || e.forEachChild(G, (i, r) => {
      t.hasChild(i) || s.trackChildChange(_s(i, r));
    }), t.isLeafNode() || t.forEachChild(G, (i, r) => {
      if (e.hasChild(i)) {
        const o = e.getImmediateChild(i);
        o.equals(r) || s.trackChildChange(gs(i, r, o));
      } else
        s.trackChildChange(Pn(i, r));
    })), t.withIndex(this.index_);
  }
  updatePriority(e, t) {
    return e.isEmpty() ? w.EMPTY_NODE : e.updatePriority(t);
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
class ms {
  constructor(e) {
    this.indexedFilter_ = new Bo(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = ms.getStartPost_(e), this.endPost_ = ms.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const t = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0, s = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
    return t && s;
  }
  updateChild(e, t, s, i, r, o) {
    return this.matches(new b(t, s)) || (s = w.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, s, i, r, o);
  }
  updateFullNode(e, t, s) {
    t.isLeafNode() && (t = w.EMPTY_NODE);
    let i = t.withIndex(this.index_);
    i = i.updatePriority(w.EMPTY_NODE);
    const r = this;
    return t.forEachChild(G, (o, a) => {
      r.matches(new b(o, a)) || (i = i.updateImmediateChild(o, w.EMPTY_NODE));
    }), this.indexedFilter_.updateFullNode(e, i, s);
  }
  updatePriority(e, t) {
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
      const t = e.getIndexStartName();
      return e.getIndex().makePost(e.getIndexStartValue(), t);
    } else
      return e.getIndex().minPost();
  }
  static getEndPost_(e) {
    if (e.hasEnd()) {
      const t = e.getIndexEndName();
      return e.getIndex().makePost(e.getIndexEndValue(), t);
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
class xv {
  constructor(e) {
    this.withinDirectionalStart = (t) => this.reverse_ ? this.withinEndPost(t) : this.withinStartPost(t), this.withinDirectionalEnd = (t) => this.reverse_ ? this.withinStartPost(t) : this.withinEndPost(t), this.withinStartPost = (t) => {
      const s = this.index_.compare(this.rangedFilter_.getStartPost(), t);
      return this.startIsInclusive_ ? s <= 0 : s < 0;
    }, this.withinEndPost = (t) => {
      const s = this.index_.compare(t, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? s <= 0 : s < 0;
    }, this.rangedFilter_ = new ms(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, t, s, i, r, o) {
    return this.rangedFilter_.matches(new b(t, s)) || (s = w.EMPTY_NODE), e.getImmediateChild(t).equals(s) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, s, i, r, o) : this.fullLimitUpdateChild_(e, t, s, r, o);
  }
  updateFullNode(e, t, s) {
    let i;
    if (t.isLeafNode() || t.isEmpty())
      i = w.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < t.numChildren() && t.isIndexed(this.index_)) {
      i = w.EMPTY_NODE.withIndex(this.index_);
      let r;
      this.reverse_ ? r = t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : r = t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
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
      i = t.withIndex(this.index_), i = i.updatePriority(w.EMPTY_NODE);
      let r;
      this.reverse_ ? r = i.getReverseIterator(this.index_) : r = i.getIterator(this.index_);
      let o = 0;
      for (; r.hasNext(); ) {
        const a = r.getNext();
        o < this.limit_ && this.withinDirectionalStart(a) && this.withinDirectionalEnd(a) ? o++ : i = i.updateImmediateChild(a.name, w.EMPTY_NODE);
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, s);
  }
  updatePriority(e, t) {
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
  fullLimitUpdateChild_(e, t, s, i, r) {
    let o;
    if (this.reverse_) {
      const d = this.index_.getCompare();
      o = (u, f) => d(f, u);
    } else
      o = this.index_.getCompare();
    const a = e;
    _(a.numChildren() === this.limit_, "");
    const l = new b(t, s), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), h = this.rangedFilter_.matches(l);
    if (a.hasChild(t)) {
      const d = a.getImmediateChild(t);
      let u = i.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === t || a.hasChild(u.name)); )
        u = i.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (h && !s.isEmpty() && f >= 0)
        return r?.trackChildChange(gs(t, s, d)), a.updateImmediateChild(t, s);
      {
        r?.trackChildChange(_s(t, d));
        const g = a.updateImmediateChild(t, w.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (r?.trackChildChange(Pn(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return s.isEmpty() ? e : h && o(c, l) >= 0 ? (r != null && (r.trackChildChange(_s(c.name, c.node)), r.trackChildChange(Pn(t, s))), a.updateImmediateChild(t, s).updateImmediateChild(c.name, w.EMPTY_NODE)) : e;
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
class Ho {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = G;
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
    return _(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
  }
  /**
   * Only valid to call if hasStart() returns true.
   * Returns the starting key name for the range defined by these query parameters
   */
  getIndexStartName() {
    return _(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Nn;
  }
  hasEnd() {
    return this.endSet_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   */
  getIndexEndValue() {
    return _(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
  }
  /**
   * Only valid to call if hasEnd() returns true.
   * Returns the end key name for the range defined by these query parameters
   */
  getIndexEndName() {
    return _(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Jt;
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
    return _(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === G;
  }
  copy() {
    const e = new Ho();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function Mv(n) {
  return n.loadsAllData() ? new Bo(n.getIndex()) : n.hasLimit() ? new xv(n) : new ms(n);
}
function Il(n) {
  const e = {};
  if (n.isDefault())
    return e;
  let t;
  if (n.index_ === G ? t = "$priority" : n.index_ === Ov ? t = "$value" : n.index_ === wn ? t = "$key" : (_(n.index_ instanceof Nv, "Unrecognized index type!"), t = n.index_.toString()), e.orderBy = Q(t), n.startSet_) {
    const s = n.startAfterSet_ ? "startAfter" : "startAt";
    e[s] = Q(n.indexStartValue_), n.startNameSet_ && (e[s] += "," + Q(n.indexStartName_));
  }
  if (n.endSet_) {
    const s = n.endBeforeSet_ ? "endBefore" : "endAt";
    e[s] = Q(n.indexEndValue_), n.endNameSet_ && (e[s] += "," + Q(n.indexEndName_));
  }
  return n.limitSet_ && (n.isViewFromLeft() ? e.limitToFirst = n.limit_ : e.limitToLast = n.limit_), e;
}
function Cl(n) {
  const e = {};
  if (n.startSet_ && (e.sp = n.indexStartValue_, n.startNameSet_ && (e.sn = n.indexStartName_), e.sin = !n.startAfterSet_), n.endSet_ && (e.ep = n.indexEndValue_, n.endNameSet_ && (e.en = n.indexEndName_), e.ein = !n.endBeforeSet_), n.limitSet_) {
    e.l = n.limit_;
    let t = n.viewFrom_;
    t === "" && (n.isViewFromLeft() ? t = "l" : t = "r"), e.vf = t;
  }
  return n.index_ !== G && (e.i = n.index_.toString()), e;
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
class pi extends Xu {
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, t) {
    return t !== void 0 ? "tag$" + t : (_(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString());
  }
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, t, s, i) {
    super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = s, this.appCheckTokenProvider_ = i, this.log_ = Ps("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, t, s, i) {
    const r = e._path.toString();
    this.log_("Listen called for " + r + " " + e._queryIdentifier);
    const o = pi.getListenId_(e, s), a = {};
    this.listens_[o] = a;
    const l = Il(e._queryParams);
    this.restRequest_(r + ".json", l, (c, h) => {
      let d = h;
      if (c === 404 && (d = null, c = null), c === null && this.onDataUpdate_(
        r,
        d,
        /*isMerge=*/
        !1,
        s
      ), Rn(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", i(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, t) {
    const s = pi.getListenId_(e, t);
    delete this.listens_[s];
  }
  get(e) {
    const t = Il(e._queryParams), s = e._path.toString(), i = new bs();
    return this.restRequest_(s + ".json", t, (r, o) => {
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
  restRequest_(e, t = {}, s) {
    return t.format = "export", Promise.all([
      this.authTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      ),
      this.appCheckTokenProvider_.getToken(
        /*forceRefresh=*/
        !1
      )
    ]).then(([i, r]) => {
      i && i.accessToken && (t.auth = i.accessToken), r && r.token && (t.ac = r.token);
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + Un(t);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (s && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = us(a.responseText);
            } catch {
              de("Failed to parse JSON response for " + o + ": " + a.responseText);
            }
            s(null, l);
          } else
            a.status !== 401 && a.status !== 404 && de("Got unsuccessful REST response for " + o + " Status: " + a.status), s(a.status);
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
class Lv {
  constructor() {
    this.rootNode_ = w.EMPTY_NODE;
  }
  getNode(e) {
    return this.rootNode_.getChild(e);
  }
  updateSnapshot(e, t) {
    this.rootNode_ = this.rootNode_.updateChild(e, t);
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
function _i() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function lh(n, e, t) {
  if (T(e))
    n.value = t, n.children.clear();
  else if (n.value !== null)
    n.value = n.value.updateChild(e, t);
  else {
    const s = C(e);
    n.children.has(s) || n.children.set(s, _i());
    const i = n.children.get(s);
    e = W(e), lh(i, e, t);
  }
}
function Vr(n, e, t) {
  n.value !== null ? t(e, n.value) : Fv(n, (s, i) => {
    const r = new L(e.toString() + "/" + s);
    Vr(i, r, t);
  });
}
function Fv(n, e) {
  n.children.forEach((t, s) => {
    e(s, t);
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
class Uv {
  constructor(e) {
    this.collection_ = e, this.last_ = null;
  }
  get() {
    const e = this.collection_.get(), t = { ...e };
    return this.last_ && se(this.last_, (s, i) => {
      t[s] = t[s] - i;
    }), this.last_ = e, t;
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
const bl = 10 * 1e3, $v = 30 * 1e3, Wv = 300 * 1e3;
class Bv {
  constructor(e, t) {
    this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Uv(e);
    const s = bl + ($v - bl) * Math.random();
    ns(this.reportStats_.bind(this), Math.floor(s));
  }
  reportStats_() {
    const e = this.statsListener_.get(), t = {};
    let s = !1;
    se(e, (i, r) => {
      r > 0 && Xe(this.statsToReport_, i) && (t[i] = r, s = !0);
    }), s && this.server_.reportStats(t), ns(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * Wv));
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
var Ue;
(function(n) {
  n[n.OVERWRITE = 0] = "OVERWRITE", n[n.MERGE = 1] = "MERGE", n[n.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", n[n.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
})(Ue || (Ue = {}));
function Vo() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function zo() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function jo(n) {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: n,
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
class gi {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, t, s) {
    this.path = e, this.affectedTree = t, this.revert = s, this.type = Ue.ACK_USER_WRITE, this.source = Vo();
  }
  operationForChild(e) {
    if (T(this.path)) {
      if (this.affectedTree.value != null)
        return _(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const t = this.affectedTree.subtree(new L(e));
        return new gi(k(), t, this.revert);
      }
    } else return _(C(this.path) === e, "operationForChild called for unrelated child."), new gi(W(this.path), this.affectedTree, this.revert);
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
class vs {
  constructor(e, t) {
    this.source = e, this.path = t, this.type = Ue.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return T(this.path) ? new vs(this.source, k()) : new vs(this.source, W(this.path));
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
class Xt {
  constructor(e, t, s) {
    this.source = e, this.path = t, this.snap = s, this.type = Ue.OVERWRITE;
  }
  operationForChild(e) {
    return T(this.path) ? new Xt(this.source, k(), this.snap.getImmediateChild(e)) : new Xt(this.source, W(this.path), this.snap);
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
  constructor(e, t, s) {
    this.source = e, this.path = t, this.children = s, this.type = Ue.MERGE;
  }
  operationForChild(e) {
    if (T(this.path)) {
      const t = this.children.subtree(new L(e));
      return t.isEmpty() ? null : t.value ? new Xt(this.source, k(), t.value) : new On(this.source, k(), t);
    } else
      return _(C(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new On(this.source, W(this.path), this.children);
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
class Nt {
  constructor(e, t, s) {
    this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = s;
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
    if (T(e))
      return this.isFullyInitialized() && !this.filtered_;
    const t = C(e);
    return this.isCompleteForChild(t);
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
class Hv {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function Vv(n, e, t, s) {
  const i = [], r = [];
  return e.forEach((o) => {
    o.type === "child_changed" && n.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && r.push(Dv(o.childName, o.snapshotNode));
  }), qn(n, i, "child_removed", e, s, t), qn(n, i, "child_added", e, s, t), qn(n, i, "child_moved", r, s, t), qn(n, i, "child_changed", e, s, t), qn(n, i, "value", e, s, t), i;
}
function qn(n, e, t, s, i, r) {
  const o = s.filter((a) => a.type === t);
  o.sort((a, l) => jv(n, a, l)), o.forEach((a) => {
    const l = zv(n, a, r);
    i.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, n.query_));
    });
  });
}
function zv(n, e, t) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, n.index_)), e;
}
function jv(n, e, t) {
  if (e.childName == null || t.childName == null)
    throw Ln("Should only compare child_ events.");
  const s = new b(e.childName, e.snapshotNode), i = new b(t.childName, t.snapshotNode);
  return n.index_.compare(s, i);
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
function Ui(n, e) {
  return { eventCache: n, serverCache: e };
}
function ss(n, e, t, s) {
  return Ui(new Nt(e, t, s), n.serverCache);
}
function ch(n, e, t, s) {
  return Ui(n.eventCache, new Nt(e, t, s));
}
function mi(n) {
  return n.eventCache.isFullyInitialized() ? n.eventCache.getNode() : null;
}
function Zt(n) {
  return n.serverCache.isFullyInitialized() ? n.serverCache.getNode() : null;
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
let yr;
const Gv = () => (yr || (yr = new ve(Nm)), yr);
class $ {
  static fromObject(e) {
    let t = new $(null);
    return se(e, (s, i) => {
      t = t.set(new L(s), i);
    }), t;
  }
  constructor(e, t = Gv()) {
    this.value = e, this.children = t;
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
  findRootMostMatchingPathAndValue(e, t) {
    if (this.value != null && t(this.value))
      return { path: k(), value: this.value };
    if (T(e))
      return null;
    {
      const s = C(e), i = this.children.get(s);
      if (i !== null) {
        const r = i.findRootMostMatchingPathAndValue(W(e), t);
        return r != null ? { path: j(new L(s), r.path), value: r.value } : null;
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
    if (T(e))
      return this;
    {
      const t = C(e), s = this.children.get(t);
      return s !== null ? s.subtree(W(e)) : new $(null);
    }
  }
  /**
   * Sets a value at the specified path.
   *
   * @param relativePath - Path to set value at.
   * @param toSet - Value to set.
   * @returns Resulting tree.
   */
  set(e, t) {
    if (T(e))
      return new $(t, this.children);
    {
      const s = C(e), r = (this.children.get(s) || new $(null)).set(W(e), t), o = this.children.insert(s, r);
      return new $(this.value, o);
    }
  }
  /**
   * Removes the value at the specified path.
   *
   * @param relativePath - Path to value to remove.
   * @returns Resulting tree.
   */
  remove(e) {
    if (T(e))
      return this.children.isEmpty() ? new $(null) : new $(null, this.children);
    {
      const t = C(e), s = this.children.get(t);
      if (s) {
        const i = s.remove(W(e));
        let r;
        return i.isEmpty() ? r = this.children.remove(t) : r = this.children.insert(t, i), this.value === null && r.isEmpty() ? new $(null) : new $(this.value, r);
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
    if (T(e))
      return this.value;
    {
      const t = C(e), s = this.children.get(t);
      return s ? s.get(W(e)) : null;
    }
  }
  /**
   * Replace the subtree at the specified path with the given new tree.
   *
   * @param relativePath - Path to replace subtree for.
   * @param newTree - New tree.
   * @returns Resulting tree.
   */
  setTree(e, t) {
    if (T(e))
      return t;
    {
      const s = C(e), r = (this.children.get(s) || new $(null)).setTree(W(e), t);
      let o;
      return r.isEmpty() ? o = this.children.remove(s) : o = this.children.insert(s, r), new $(this.value, o);
    }
  }
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */
  fold(e) {
    return this.fold_(k(), e);
  }
  /**
   * Recursive helper for public-facing fold() method
   */
  fold_(e, t) {
    const s = {};
    return this.children.inorderTraversal((i, r) => {
      s[i] = r.fold_(j(e, i), t);
    }), t(e, this.value, s);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, t) {
    return this.findOnPath_(e, k(), t);
  }
  findOnPath_(e, t, s) {
    const i = this.value ? s(t, this.value) : !1;
    if (i)
      return i;
    if (T(e))
      return null;
    {
      const r = C(e), o = this.children.get(r);
      return o ? o.findOnPath_(W(e), j(t, r), s) : null;
    }
  }
  foreachOnPath(e, t) {
    return this.foreachOnPath_(e, k(), t);
  }
  foreachOnPath_(e, t, s) {
    if (T(e))
      return this;
    {
      this.value && s(t, this.value);
      const i = C(e), r = this.children.get(i);
      return r ? r.foreachOnPath_(W(e), j(t, i), s) : new $(null);
    }
  }
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f - A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */
  foreach(e) {
    this.foreach_(k(), e);
  }
  foreach_(e, t) {
    this.children.inorderTraversal((s, i) => {
      i.foreach_(j(e, s), t);
    }), this.value && t(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((t, s) => {
      s.value && e(t, s.value);
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
class $e {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new $e(new $(null));
  }
}
function is(n, e, t) {
  if (T(e))
    return new $e(new $(t));
  {
    const s = n.writeTree_.findRootMostValueAndPath(e);
    if (s != null) {
      const i = s.path;
      let r = s.value;
      const o = he(i, e);
      return r = r.updateChild(o, t), new $e(n.writeTree_.set(i, r));
    } else {
      const i = new $(t), r = n.writeTree_.setTree(e, i);
      return new $e(r);
    }
  }
}
function zr(n, e, t) {
  let s = n;
  return se(t, (i, r) => {
    s = is(s, j(e, i), r);
  }), s;
}
function Tl(n, e) {
  if (T(e))
    return $e.empty();
  {
    const t = n.writeTree_.setTree(e, new $(null));
    return new $e(t);
  }
}
function jr(n, e) {
  return rn(n, e) != null;
}
function rn(n, e) {
  const t = n.writeTree_.findRootMostValueAndPath(e);
  return t != null ? n.writeTree_.get(t.path).getChild(he(t.path, e)) : null;
}
function Sl(n) {
  const e = [], t = n.writeTree_.value;
  return t != null ? t.isLeafNode() || t.forEachChild(G, (s, i) => {
    e.push(new b(s, i));
  }) : n.writeTree_.children.inorderTraversal((s, i) => {
    i.value != null && e.push(new b(s, i.value));
  }), e;
}
function Rt(n, e) {
  if (T(e))
    return n;
  {
    const t = rn(n, e);
    return t != null ? new $e(new $(t)) : new $e(n.writeTree_.subtree(e));
  }
}
function Gr(n) {
  return n.writeTree_.isEmpty();
}
function Dn(n, e) {
  return uh(k(), n.writeTree_, e);
}
function uh(n, e, t) {
  if (e.value != null)
    return t.updateChild(n, e.value);
  {
    let s = null;
    return e.children.inorderTraversal((i, r) => {
      i === ".priority" ? (_(r.value !== null, "Priority writes must always be leaf nodes"), s = r.value) : t = uh(j(n, i), r, t);
    }), !t.getChild(n).isEmpty() && s !== null && (t = t.updateChild(j(n, ".priority"), s)), t;
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
function $i(n, e) {
  return ph(e, n);
}
function qv(n, e, t, s, i) {
  _(s > n.lastWriteId, "Stacking an older write on top of newer ones"), i === void 0 && (i = !0), n.allWrites.push({
    path: e,
    snap: t,
    writeId: s,
    visible: i
  }), i && (n.visibleWrites = is(n.visibleWrites, e, t)), n.lastWriteId = s;
}
function Kv(n, e, t, s) {
  _(s > n.lastWriteId, "Stacking an older merge on top of newer ones"), n.allWrites.push({
    path: e,
    children: t,
    writeId: s,
    visible: !0
  }), n.visibleWrites = zr(n.visibleWrites, e, t), n.lastWriteId = s;
}
function Yv(n, e) {
  for (let t = 0; t < n.allWrites.length; t++) {
    const s = n.allWrites[t];
    if (s.writeId === e)
      return s;
  }
  return null;
}
function Qv(n, e) {
  const t = n.allWrites.findIndex((a) => a.writeId === e);
  _(t >= 0, "removeWrite called with nonexistent writeId.");
  const s = n.allWrites[t];
  n.allWrites.splice(t, 1);
  let i = s.visible, r = !1, o = n.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const a = n.allWrites[o];
    a.visible && (o >= t && Jv(a, s.path) ? i = !1 : Re(s.path, a.path) && (r = !0)), o--;
  }
  if (i) {
    if (r)
      return Xv(n), !0;
    if (s.snap)
      n.visibleWrites = Tl(n.visibleWrites, s.path);
    else {
      const a = s.children;
      se(a, (l) => {
        n.visibleWrites = Tl(n.visibleWrites, j(s.path, l));
      });
    }
    return !0;
  } else return !1;
}
function Jv(n, e) {
  if (n.snap)
    return Re(n.path, e);
  for (const t in n.children)
    if (n.children.hasOwnProperty(t) && Re(j(n.path, t), e))
      return !0;
  return !1;
}
function Xv(n) {
  n.visibleWrites = hh(n.allWrites, Zv, k()), n.allWrites.length > 0 ? n.lastWriteId = n.allWrites[n.allWrites.length - 1].writeId : n.lastWriteId = -1;
}
function Zv(n) {
  return n.visible;
}
function hh(n, e, t) {
  let s = $e.empty();
  for (let i = 0; i < n.length; ++i) {
    const r = n[i];
    if (e(r)) {
      const o = r.path;
      let a;
      if (r.snap)
        Re(t, o) ? (a = he(t, o), s = is(s, a, r.snap)) : Re(o, t) && (a = he(o, t), s = is(s, k(), r.snap.getChild(a)));
      else if (r.children) {
        if (Re(t, o))
          a = he(t, o), s = zr(s, a, r.children);
        else if (Re(o, t))
          if (a = he(o, t), T(a))
            s = zr(s, k(), r.children);
          else {
            const l = Rn(r.children, C(a));
            if (l) {
              const c = l.getChild(W(a));
              s = is(s, k(), c);
            }
          }
      } else
        throw Ln("WriteRecord should have .snap or .children");
    }
  }
  return s;
}
function dh(n, e, t, s, i) {
  if (!s && !i) {
    const r = rn(n.visibleWrites, e);
    if (r != null)
      return r;
    {
      const o = Rt(n.visibleWrites, e);
      if (Gr(o))
        return t;
      if (t == null && !jr(o, k()))
        return null;
      {
        const a = t || w.EMPTY_NODE;
        return Dn(o, a);
      }
    }
  } else {
    const r = Rt(n.visibleWrites, e);
    if (!i && Gr(r))
      return t;
    if (!i && t == null && !jr(r, k()))
      return null;
    {
      const o = function(c) {
        return (c.visible || i) && (!s || !~s.indexOf(c.writeId)) && (Re(c.path, e) || Re(e, c.path));
      }, a = hh(n.allWrites, o, e), l = t || w.EMPTY_NODE;
      return Dn(a, l);
    }
  }
}
function ey(n, e, t) {
  let s = w.EMPTY_NODE;
  const i = rn(n.visibleWrites, e);
  if (i)
    return i.isLeafNode() || i.forEachChild(G, (r, o) => {
      s = s.updateImmediateChild(r, o);
    }), s;
  if (t) {
    const r = Rt(n.visibleWrites, e);
    return t.forEachChild(G, (o, a) => {
      const l = Dn(Rt(r, new L(o)), a);
      s = s.updateImmediateChild(o, l);
    }), Sl(r).forEach((o) => {
      s = s.updateImmediateChild(o.name, o.node);
    }), s;
  } else {
    const r = Rt(n.visibleWrites, e);
    return Sl(r).forEach((o) => {
      s = s.updateImmediateChild(o.name, o.node);
    }), s;
  }
}
function ty(n, e, t, s, i) {
  _(s || i, "Either existingEventSnap or existingServerSnap must exist");
  const r = j(e, t);
  if (jr(n.visibleWrites, r))
    return null;
  {
    const o = Rt(n.visibleWrites, r);
    return Gr(o) ? i.getChild(t) : Dn(o, i.getChild(t));
  }
}
function ny(n, e, t, s) {
  const i = j(e, t), r = rn(n.visibleWrites, i);
  if (r != null)
    return r;
  if (s.isCompleteForChild(t)) {
    const o = Rt(n.visibleWrites, i);
    return Dn(o, s.getNode().getImmediateChild(t));
  } else
    return null;
}
function sy(n, e) {
  return rn(n.visibleWrites, e);
}
function iy(n, e, t, s, i, r, o) {
  let a;
  const l = Rt(n.visibleWrites, e), c = rn(l, k());
  if (c != null)
    a = c;
  else if (t != null)
    a = Dn(l, t);
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
function ry() {
  return {
    visibleWrites: $e.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function vi(n, e, t, s) {
  return dh(n.writeTree, n.treePath, e, t, s);
}
function Go(n, e) {
  return ey(n.writeTree, n.treePath, e);
}
function Rl(n, e, t, s) {
  return ty(n.writeTree, n.treePath, e, t, s);
}
function yi(n, e) {
  return sy(n.writeTree, j(n.treePath, e));
}
function oy(n, e, t, s, i, r) {
  return iy(n.writeTree, n.treePath, e, t, s, i, r);
}
function qo(n, e, t) {
  return ny(n.writeTree, n.treePath, e, t);
}
function fh(n, e) {
  return ph(j(n.treePath, e), n.writeTree);
}
function ph(n, e) {
  return {
    treePath: n,
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
class ay {
  constructor() {
    this.changeMap = /* @__PURE__ */ new Map();
  }
  trackChildChange(e) {
    const t = e.type, s = e.childName;
    _(t === "child_added" || t === "child_changed" || t === "child_removed", "Only child changes supported for tracking"), _(s !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(s);
    if (i) {
      const r = i.type;
      if (t === "child_added" && r === "child_removed")
        this.changeMap.set(s, gs(s, e.snapshotNode, i.snapshotNode));
      else if (t === "child_removed" && r === "child_added")
        this.changeMap.delete(s);
      else if (t === "child_removed" && r === "child_changed")
        this.changeMap.set(s, _s(s, i.oldSnap));
      else if (t === "child_changed" && r === "child_added")
        this.changeMap.set(s, Pn(s, e.snapshotNode));
      else if (t === "child_changed" && r === "child_changed")
        this.changeMap.set(s, gs(s, e.snapshotNode, i.oldSnap));
      else
        throw Ln("Illegal combination of changes: " + e + " occurred after " + i);
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
class ly {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, t, s) {
    return null;
  }
}
const _h = new ly();
class Ko {
  constructor(e, t, s = null) {
    this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = s;
  }
  getCompleteChild(e) {
    const t = this.viewCache_.eventCache;
    if (t.isCompleteForChild(e))
      return t.getNode().getImmediateChild(e);
    {
      const s = this.optCompleteServerCache_ != null ? new Nt(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return qo(this.writes_, e, s);
    }
  }
  getChildAfterChild(e, t, s) {
    const i = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : Zt(this.viewCache_), r = oy(this.writes_, i, t, 1, s, e);
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
function cy(n) {
  return { filter: n };
}
function uy(n, e) {
  _(e.eventCache.getNode().isIndexed(n.filter.getIndex()), "Event snap not indexed"), _(e.serverCache.getNode().isIndexed(n.filter.getIndex()), "Server snap not indexed");
}
function hy(n, e, t, s, i) {
  const r = new ay();
  let o, a;
  if (t.type === Ue.OVERWRITE) {
    const c = t;
    c.source.fromUser ? o = qr(n, e, c.path, c.snap, s, i, r) : (_(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !T(c.path), o = Ei(n, e, c.path, c.snap, s, i, a, r));
  } else if (t.type === Ue.MERGE) {
    const c = t;
    c.source.fromUser ? o = fy(n, e, c.path, c.children, s, i, r) : (_(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = Kr(n, e, c.path, c.children, s, i, a, r));
  } else if (t.type === Ue.ACK_USER_WRITE) {
    const c = t;
    c.revert ? o = gy(n, e, c.path, s, i, r) : o = py(n, e, c.path, c.affectedTree, s, i, r);
  } else if (t.type === Ue.LISTEN_COMPLETE)
    o = _y(n, e, t.path, s, r);
  else
    throw Ln("Unknown operation type: " + t.type);
  const l = r.getChanges();
  return dy(e, o, l), { viewCache: o, changes: l };
}
function dy(n, e, t) {
  const s = e.eventCache;
  if (s.isFullyInitialized()) {
    const i = s.getNode().isLeafNode() || s.getNode().isEmpty(), r = mi(n);
    (t.length > 0 || !n.eventCache.isFullyInitialized() || i && !s.getNode().equals(r) || !s.getNode().getPriority().equals(r.getPriority())) && t.push(ah(mi(e)));
  }
}
function gh(n, e, t, s, i, r) {
  const o = e.eventCache;
  if (yi(s, t) != null)
    return e;
  {
    let a, l;
    if (T(t))
      if (_(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = Zt(e), h = c instanceof w ? c : w.EMPTY_NODE, d = Go(s, h);
        a = n.filter.updateFullNode(e.eventCache.getNode(), d, r);
      } else {
        const c = vi(s, Zt(e));
        a = n.filter.updateFullNode(e.eventCache.getNode(), c, r);
      }
    else {
      const c = C(t);
      if (c === ".priority") {
        _(At(t) === 1, "Can't have a priority with additional path components");
        const h = o.getNode();
        l = e.serverCache.getNode();
        const d = Rl(s, t, h, l);
        d != null ? a = n.filter.updatePriority(h, d) : a = o.getNode();
      } else {
        const h = W(t);
        let d;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = Rl(s, t, o.getNode(), l);
          u != null ? d = o.getNode().getImmediateChild(c).updateChild(h, u) : d = o.getNode().getImmediateChild(c);
        } else
          d = qo(s, c, e.serverCache);
        d != null ? a = n.filter.updateChild(o.getNode(), c, d, h, i, r) : a = o.getNode();
      }
    }
    return ss(e, a, o.isFullyInitialized() || T(t), n.filter.filtersNodes());
  }
}
function Ei(n, e, t, s, i, r, o, a) {
  const l = e.serverCache;
  let c;
  const h = o ? n.filter : n.filter.getIndexedFilter();
  if (T(t))
    c = h.updateFullNode(l.getNode(), s, null);
  else if (h.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(t, s);
    c = h.updateFullNode(l.getNode(), f, null);
  } else {
    const f = C(t);
    if (!l.isCompleteForPath(t) && At(t) > 1)
      return e;
    const p = W(t), v = l.getNode().getImmediateChild(f).updateChild(p, s);
    f === ".priority" ? c = h.updatePriority(l.getNode(), v) : c = h.updateChild(l.getNode(), f, v, p, _h, null);
  }
  const d = ch(e, c, l.isFullyInitialized() || T(t), h.filtersNodes()), u = new Ko(i, d, r);
  return gh(n, d, t, i, u, a);
}
function qr(n, e, t, s, i, r, o) {
  const a = e.eventCache;
  let l, c;
  const h = new Ko(i, e, r);
  if (T(t))
    c = n.filter.updateFullNode(e.eventCache.getNode(), s, o), l = ss(e, c, !0, n.filter.filtersNodes());
  else {
    const d = C(t);
    if (d === ".priority")
      c = n.filter.updatePriority(e.eventCache.getNode(), s), l = ss(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = W(t), f = a.getNode().getImmediateChild(d);
      let p;
      if (T(u))
        p = s;
      else {
        const g = h.getCompleteChild(d);
        g != null ? Fo(u) === ".priority" && g.getChild(eh(u)).isEmpty() ? p = g : p = g.updateChild(u, s) : p = w.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = n.filter.updateChild(a.getNode(), d, p, u, h, o);
        l = ss(e, g, a.isFullyInitialized(), n.filter.filtersNodes());
      }
    }
  }
  return l;
}
function kl(n, e) {
  return n.eventCache.isCompleteForChild(e);
}
function fy(n, e, t, s, i, r, o) {
  let a = e;
  return s.foreach((l, c) => {
    const h = j(t, l);
    kl(e, C(h)) && (a = qr(n, a, h, c, i, r, o));
  }), s.foreach((l, c) => {
    const h = j(t, l);
    kl(e, C(h)) || (a = qr(n, a, h, c, i, r, o));
  }), a;
}
function Al(n, e, t) {
  return t.foreach((s, i) => {
    e = e.updateChild(s, i);
  }), e;
}
function Kr(n, e, t, s, i, r, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  T(t) ? c = s : c = new $(null).setTree(t, s);
  const h = e.serverCache.getNode();
  return c.children.inorderTraversal((d, u) => {
    if (h.hasChild(d)) {
      const f = e.serverCache.getNode().getImmediateChild(d), p = Al(n, f, u);
      l = Ei(n, l, new L(d), p, i, r, o, a);
    }
  }), c.children.inorderTraversal((d, u) => {
    const f = !e.serverCache.isCompleteForChild(d) && u.value === null;
    if (!h.hasChild(d) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(d), g = Al(n, p, u);
      l = Ei(n, l, new L(d), g, i, r, o, a);
    }
  }), l;
}
function py(n, e, t, s, i, r, o) {
  if (yi(i, t) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (s.value != null) {
    if (T(t) && l.isFullyInitialized() || l.isCompleteForPath(t))
      return Ei(n, e, t, l.getNode().getChild(t), i, r, a, o);
    if (T(t)) {
      let c = new $(null);
      return l.getNode().forEachChild(wn, (h, d) => {
        c = c.set(new L(h), d);
      }), Kr(n, e, t, c, i, r, a, o);
    } else
      return e;
  } else {
    let c = new $(null);
    return s.foreach((h, d) => {
      const u = j(t, h);
      l.isCompleteForPath(u) && (c = c.set(h, l.getNode().getChild(u)));
    }), Kr(n, e, t, c, i, r, a, o);
  }
}
function _y(n, e, t, s, i) {
  const r = e.serverCache, o = ch(e, r.getNode(), r.isFullyInitialized() || T(t), r.isFiltered());
  return gh(n, o, t, s, _h, i);
}
function gy(n, e, t, s, i, r) {
  let o;
  if (yi(s, t) != null)
    return e;
  {
    const a = new Ko(s, e, i), l = e.eventCache.getNode();
    let c;
    if (T(t) || C(t) === ".priority") {
      let h;
      if (e.serverCache.isFullyInitialized())
        h = vi(s, Zt(e));
      else {
        const d = e.serverCache.getNode();
        _(d instanceof w, "serverChildren would be complete if leaf node"), h = Go(s, d);
      }
      h = h, c = n.filter.updateFullNode(l, h, r);
    } else {
      const h = C(t);
      let d = qo(s, h, e.serverCache);
      d == null && e.serverCache.isCompleteForChild(h) && (d = l.getImmediateChild(h)), d != null ? c = n.filter.updateChild(l, h, d, W(t), a, r) : e.eventCache.getNode().hasChild(h) ? c = n.filter.updateChild(l, h, w.EMPTY_NODE, W(t), a, r) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = vi(s, Zt(e)), o.isLeafNode() && (c = n.filter.updateFullNode(c, o, r)));
    }
    return o = e.serverCache.isFullyInitialized() || yi(s, k()) != null, ss(e, c, o, n.filter.filtersNodes());
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
class my {
  constructor(e, t) {
    this.query_ = e, this.eventRegistrations_ = [];
    const s = this.query_._queryParams, i = new Bo(s.getIndex()), r = Mv(s);
    this.processor_ = cy(r);
    const o = t.serverCache, a = t.eventCache, l = i.updateFullNode(w.EMPTY_NODE, o.getNode(), null), c = r.updateFullNode(w.EMPTY_NODE, a.getNode(), null), h = new Nt(l, o.isFullyInitialized(), i.filtersNodes()), d = new Nt(c, a.isFullyInitialized(), r.filtersNodes());
    this.viewCache_ = Ui(d, h), this.eventGenerator_ = new Hv(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function vy(n) {
  return n.viewCache_.serverCache.getNode();
}
function yy(n) {
  return mi(n.viewCache_);
}
function Ey(n, e) {
  const t = Zt(n.viewCache_);
  return t && (n.query._queryParams.loadsAllData() || !T(e) && !t.getImmediateChild(C(e)).isEmpty()) ? t.getChild(e) : null;
}
function Nl(n) {
  return n.eventRegistrations_.length === 0;
}
function wy(n, e) {
  n.eventRegistrations_.push(e);
}
function Pl(n, e, t) {
  const s = [];
  if (t) {
    _(e == null, "A cancel should cancel all event registrations.");
    const i = n.query._path;
    n.eventRegistrations_.forEach((r) => {
      const o = r.createCancelEvent(t, i);
      o && s.push(o);
    });
  }
  if (e) {
    let i = [];
    for (let r = 0; r < n.eventRegistrations_.length; ++r) {
      const o = n.eventRegistrations_[r];
      if (!o.matches(e))
        i.push(o);
      else if (e.hasAnyCallback()) {
        i = i.concat(n.eventRegistrations_.slice(r + 1));
        break;
      }
    }
    n.eventRegistrations_ = i;
  } else
    n.eventRegistrations_ = [];
  return s;
}
function Ol(n, e, t, s) {
  e.type === Ue.MERGE && e.source.queryId !== null && (_(Zt(n.viewCache_), "We should always have a full cache before handling merges"), _(mi(n.viewCache_), "Missing event cache, even though we have a server cache"));
  const i = n.viewCache_, r = hy(n.processor_, i, e, t, s);
  return uy(n.processor_, r.viewCache), _(r.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), n.viewCache_ = r.viewCache, mh(n, r.changes, r.viewCache.eventCache.getNode(), null);
}
function Iy(n, e) {
  const t = n.viewCache_.eventCache, s = [];
  return t.getNode().isLeafNode() || t.getNode().forEachChild(G, (r, o) => {
    s.push(Pn(r, o));
  }), t.isFullyInitialized() && s.push(ah(t.getNode())), mh(n, s, t.getNode(), e);
}
function mh(n, e, t, s) {
  const i = s ? [s] : n.eventRegistrations_;
  return Vv(n.eventGenerator_, e, t, i);
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
let wi;
class vh {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function Cy(n) {
  _(!wi, "__referenceConstructor has already been defined"), wi = n;
}
function by() {
  return _(wi, "Reference.ts has not been loaded"), wi;
}
function Ty(n) {
  return n.views.size === 0;
}
function Yo(n, e, t, s) {
  const i = e.source.queryId;
  if (i !== null) {
    const r = n.views.get(i);
    return _(r != null, "SyncTree gave us an op for an invalid query."), Ol(r, e, t, s);
  } else {
    let r = [];
    for (const o of n.views.values())
      r = r.concat(Ol(o, e, t, s));
    return r;
  }
}
function yh(n, e, t, s, i) {
  const r = e._queryIdentifier, o = n.views.get(r);
  if (!o) {
    let a = vi(t, i ? s : null), l = !1;
    a ? l = !0 : s instanceof w ? (a = Go(t, s), l = !1) : (a = w.EMPTY_NODE, l = !1);
    const c = Ui(new Nt(a, l, !1), new Nt(s, i, !1));
    return new my(e, c);
  }
  return o;
}
function Sy(n, e, t, s, i, r) {
  const o = yh(n, e, s, i, r);
  return n.views.has(e._queryIdentifier) || n.views.set(e._queryIdentifier, o), wy(o, t), Iy(o, t);
}
function Ry(n, e, t, s) {
  const i = e._queryIdentifier, r = [];
  let o = [];
  const a = Pt(n);
  if (i === "default")
    for (const [l, c] of n.views.entries())
      o = o.concat(Pl(c, t, s)), Nl(c) && (n.views.delete(l), c.query._queryParams.loadsAllData() || r.push(c.query));
  else {
    const l = n.views.get(i);
    l && (o = o.concat(Pl(l, t, s)), Nl(l) && (n.views.delete(i), l.query._queryParams.loadsAllData() || r.push(l.query)));
  }
  return a && !Pt(n) && r.push(new (by())(e._repo, e._path)), { removed: r, events: o };
}
function Eh(n) {
  const e = [];
  for (const t of n.views.values())
    t.query._queryParams.loadsAllData() || e.push(t);
  return e;
}
function kt(n, e) {
  let t = null;
  for (const s of n.views.values())
    t = t || Ey(s, e);
  return t;
}
function wh(n, e) {
  if (e._queryParams.loadsAllData())
    return Wi(n);
  {
    const s = e._queryIdentifier;
    return n.views.get(s);
  }
}
function Ih(n, e) {
  return wh(n, e) != null;
}
function Pt(n) {
  return Wi(n) != null;
}
function Wi(n) {
  for (const e of n.views.values())
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
let Ii;
function ky(n) {
  _(!Ii, "__referenceConstructor has already been defined"), Ii = n;
}
function Ay() {
  return _(Ii, "Reference.ts has not been loaded"), Ii;
}
let Ny = 1;
class Dl {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new $(null), this.pendingWriteTree_ = ry(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function Ch(n, e, t, s, i) {
  return qv(n.pendingWriteTree_, e, t, s, i), i ? Hn(n, new Xt(Vo(), e, t)) : [];
}
function Py(n, e, t, s) {
  Kv(n.pendingWriteTree_, e, t, s);
  const i = $.fromObject(t);
  return Hn(n, new On(Vo(), e, i));
}
function It(n, e, t = !1) {
  const s = Yv(n.pendingWriteTree_, e);
  if (Qv(n.pendingWriteTree_, e)) {
    let r = new $(null);
    return s.snap != null ? r = r.set(k(), !0) : se(s.children, (o) => {
      r = r.set(new L(o), !0);
    }), Hn(n, new gi(s.path, r, t));
  } else
    return [];
}
function Ds(n, e, t) {
  return Hn(n, new Xt(zo(), e, t));
}
function Oy(n, e, t) {
  const s = $.fromObject(t);
  return Hn(n, new On(zo(), e, s));
}
function Dy(n, e) {
  return Hn(n, new vs(zo(), e));
}
function xy(n, e, t) {
  const s = Jo(n, t);
  if (s) {
    const i = Xo(s), r = i.path, o = i.queryId, a = he(r, e), l = new vs(jo(o), a);
    return Zo(n, r, l);
  } else
    return [];
}
function Ci(n, e, t, s, i = !1) {
  const r = e._path, o = n.syncPointTree_.get(r);
  let a = [];
  if (o && (e._queryIdentifier === "default" || Ih(o, e))) {
    const l = Ry(o, e, t, s);
    Ty(o) && (n.syncPointTree_ = n.syncPointTree_.remove(r));
    const c = l.removed;
    if (a = l.events, !i) {
      const h = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, d = n.syncPointTree_.findOnPath(r, (u, f) => Pt(f));
      if (h && !d) {
        const u = n.syncPointTree_.subtree(r);
        if (!u.isEmpty()) {
          const f = Fy(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], v = g.query, A = Rh(n, g);
            n.listenProvider_.startListening(rs(v), ys(n, v), A.hashFn, A.onComplete);
          }
        }
      }
      !d && c.length > 0 && !s && (h ? n.listenProvider_.stopListening(rs(e), null) : c.forEach((u) => {
        const f = n.queryToTagMap.get(Bi(u));
        n.listenProvider_.stopListening(rs(u), f);
      }));
    }
    Uy(n, c);
  }
  return a;
}
function bh(n, e, t, s) {
  const i = Jo(n, s);
  if (i != null) {
    const r = Xo(i), o = r.path, a = r.queryId, l = he(o, e), c = new Xt(jo(a), l, t);
    return Zo(n, o, c);
  } else
    return [];
}
function My(n, e, t, s) {
  const i = Jo(n, s);
  if (i) {
    const r = Xo(i), o = r.path, a = r.queryId, l = he(o, e), c = $.fromObject(t), h = new On(jo(a), l, c);
    return Zo(n, o, h);
  } else
    return [];
}
function Yr(n, e, t, s = !1) {
  const i = e._path;
  let r = null, o = !1;
  n.syncPointTree_.foreachOnPath(i, (u, f) => {
    const p = he(u, i);
    r = r || kt(f, p), o = o || Pt(f);
  });
  let a = n.syncPointTree_.get(i);
  a ? (o = o || Pt(a), r = r || kt(a, k())) : (a = new vh(), n.syncPointTree_ = n.syncPointTree_.set(i, a));
  let l;
  r != null ? l = !0 : (l = !1, r = w.EMPTY_NODE, n.syncPointTree_.subtree(i).foreachChild((f, p) => {
    const g = kt(p, k());
    g && (r = r.updateImmediateChild(f, g));
  }));
  const c = Ih(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = Bi(e);
    _(!n.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = $y();
    n.queryToTagMap.set(u, f), n.tagToQueryMap.set(f, u);
  }
  const h = $i(n.pendingWriteTree_, i);
  let d = Sy(a, e, t, h, r, l);
  if (!c && !o && !s) {
    const u = wh(a, e);
    d = d.concat(Wy(n, e, u));
  }
  return d;
}
function Qo(n, e, t) {
  const i = n.pendingWriteTree_, r = n.syncPointTree_.findOnPath(e, (o, a) => {
    const l = he(o, e), c = kt(a, l);
    if (c)
      return c;
  });
  return dh(i, e, r, t, !0);
}
function Ly(n, e) {
  const t = e._path;
  let s = null;
  n.syncPointTree_.foreachOnPath(t, (c, h) => {
    const d = he(c, t);
    s = s || kt(h, d);
  });
  let i = n.syncPointTree_.get(t);
  i ? s = s || kt(i, k()) : (i = new vh(), n.syncPointTree_ = n.syncPointTree_.set(t, i));
  const r = s != null, o = r ? new Nt(s, !0, !1) : null, a = $i(n.pendingWriteTree_, e._path), l = yh(i, e, a, r ? o.getNode() : w.EMPTY_NODE, r);
  return yy(l);
}
function Hn(n, e) {
  return Th(
    e,
    n.syncPointTree_,
    /*serverCache=*/
    null,
    $i(n.pendingWriteTree_, k())
  );
}
function Th(n, e, t, s) {
  if (T(n.path))
    return Sh(n, e, t, s);
  {
    const i = e.get(k());
    t == null && i != null && (t = kt(i, k()));
    let r = [];
    const o = C(n.path), a = n.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = t ? t.getImmediateChild(o) : null, h = fh(s, o);
      r = r.concat(Th(a, l, c, h));
    }
    return i && (r = r.concat(Yo(i, n, s, t))), r;
  }
}
function Sh(n, e, t, s) {
  const i = e.get(k());
  t == null && i != null && (t = kt(i, k()));
  let r = [];
  return e.children.inorderTraversal((o, a) => {
    const l = t ? t.getImmediateChild(o) : null, c = fh(s, o), h = n.operationForChild(o);
    h && (r = r.concat(Sh(h, a, l, c)));
  }), i && (r = r.concat(Yo(i, n, s, t))), r;
}
function Rh(n, e) {
  const t = e.query, s = ys(n, t);
  return {
    hashFn: () => (vy(e) || w.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok")
        return s ? xy(n, t._path, s) : Dy(n, t._path);
      {
        const r = Dm(i, t);
        return Ci(
          n,
          t,
          /*eventRegistration*/
          null,
          r
        );
      }
    }
  };
}
function ys(n, e) {
  const t = Bi(e);
  return n.queryToTagMap.get(t);
}
function Bi(n) {
  return n._path.toString() + "$" + n._queryIdentifier;
}
function Jo(n, e) {
  return n.tagToQueryMap.get(e);
}
function Xo(n) {
  const e = n.indexOf("$");
  return _(e !== -1 && e < n.length - 1, "Bad queryKey."), {
    queryId: n.substr(e + 1),
    path: new L(n.substr(0, e))
  };
}
function Zo(n, e, t) {
  const s = n.syncPointTree_.get(e);
  _(s, "Missing sync point for query tag that we're tracking");
  const i = $i(n.pendingWriteTree_, e);
  return Yo(s, t, i, null);
}
function Fy(n) {
  return n.fold((e, t, s) => {
    if (t && Pt(t))
      return [Wi(t)];
    {
      let i = [];
      return t && (i = Eh(t)), se(s, (r, o) => {
        i = i.concat(o);
      }), i;
    }
  });
}
function rs(n) {
  return n._queryParams.loadsAllData() && !n._queryParams.isDefault() ? new (Ay())(n._repo, n._path) : n;
}
function Uy(n, e) {
  for (let t = 0; t < e.length; ++t) {
    const s = e[t];
    if (!s._queryParams.loadsAllData()) {
      const i = Bi(s), r = n.queryToTagMap.get(i);
      n.queryToTagMap.delete(i), n.tagToQueryMap.delete(r);
    }
  }
}
function $y() {
  return Ny++;
}
function Wy(n, e, t) {
  const s = e._path, i = ys(n, e), r = Rh(n, t), o = n.listenProvider_.startListening(rs(e), i, r.hashFn, r.onComplete), a = n.syncPointTree_.subtree(s);
  if (i)
    _(!Pt(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, h, d) => {
      if (!T(c) && h && Pt(h))
        return [Wi(h).query];
      {
        let u = [];
        return h && (u = u.concat(Eh(h).map((f) => f.query))), se(d, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const h = l[c];
      n.listenProvider_.stopListening(rs(h), ys(n, h));
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
class ea {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const t = this.node_.getImmediateChild(e);
    return new ea(t);
  }
  node() {
    return this.node_;
  }
}
class ta {
  constructor(e, t) {
    this.syncTree_ = e, this.path_ = t;
  }
  getImmediateChild(e) {
    const t = j(this.path_, e);
    return new ta(this.syncTree_, t);
  }
  node() {
    return Qo(this.syncTree_, this.path_);
  }
}
const By = function(n) {
  return n = n || {}, n.timestamp = n.timestamp || (/* @__PURE__ */ new Date()).getTime(), n;
}, xl = function(n, e, t) {
  if (!n || typeof n != "object")
    return n;
  if (_(".sv" in n, "Unexpected leaf node or priority contents"), typeof n[".sv"] == "string")
    return Hy(n[".sv"], e, t);
  if (typeof n[".sv"] == "object")
    return Vy(n[".sv"], e);
  _(!1, "Unexpected server value: " + JSON.stringify(n, null, 2));
}, Hy = function(n, e, t) {
  switch (n) {
    case "timestamp":
      return t.timestamp;
    default:
      _(!1, "Unexpected server value: " + n);
  }
}, Vy = function(n, e, t) {
  n.hasOwnProperty("increment") || _(!1, "Unexpected server value: " + JSON.stringify(n, null, 2));
  const s = n.increment;
  typeof s != "number" && _(!1, "Unexpected increment value: " + s);
  const i = e.node();
  if (_(i !== null && typeof i < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !i.isLeafNode())
    return s;
  const o = i.getValue();
  return typeof o != "number" ? s : o + s;
}, kh = function(n, e, t, s) {
  return na(e, new ta(t, n), s);
}, Ah = function(n, e, t) {
  return na(n, new ea(e), t);
};
function na(n, e, t) {
  const s = n.getPriority().val(), i = xl(s, e.getImmediateChild(".priority"), t);
  let r;
  if (n.isLeafNode()) {
    const o = n, a = xl(o.getValue(), e, t);
    return a !== o.getValue() || i !== o.getPriority().val() ? new J(a, Y(i)) : n;
  } else {
    const o = n;
    return r = o, i !== o.getPriority().val() && (r = r.updatePriority(new J(i))), o.forEachChild(G, (a, l) => {
      const c = na(l, e.getImmediateChild(a), t);
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
class sa {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", t = null, s = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = t, this.node = s;
  }
}
function ia(n, e) {
  let t = e instanceof L ? e : new L(e), s = n, i = C(t);
  for (; i !== null; ) {
    const r = Rn(s.node.children, i) || {
      children: {},
      childCount: 0
    };
    s = new sa(i, s, r), t = W(t), i = C(t);
  }
  return s;
}
function Vn(n) {
  return n.node.value;
}
function Nh(n, e) {
  n.node.value = e, Qr(n);
}
function Ph(n) {
  return n.node.childCount > 0;
}
function zy(n) {
  return Vn(n) === void 0 && !Ph(n);
}
function Hi(n, e) {
  se(n.node.children, (t, s) => {
    e(new sa(t, n, s));
  });
}
function Oh(n, e, t, s) {
  t && e(n), Hi(n, (i) => {
    Oh(i, e, !0);
  });
}
function jy(n, e, t) {
  let s = n.parent;
  for (; s !== null; ) {
    if (e(s))
      return !0;
    s = s.parent;
  }
  return !1;
}
function xs(n) {
  return new L(n.parent === null ? n.name : xs(n.parent) + "/" + n.name);
}
function Qr(n) {
  n.parent !== null && Gy(n.parent, n.name, n);
}
function Gy(n, e, t) {
  const s = zy(t), i = Xe(n.node.children, e);
  s && i ? (delete n.node.children[e], n.node.childCount--, Qr(n)) : !s && !i && (n.node.children[e] = t.node, n.node.childCount++, Qr(n));
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
const qy = /[\[\].#$\/\u0000-\u001F\u007F]/, Ky = /[\[\].#$\u0000-\u001F\u007F]/, Er = 10 * 1024 * 1024, ra = function(n) {
  return typeof n == "string" && n.length !== 0 && !qy.test(n);
}, Dh = function(n) {
  return typeof n == "string" && n.length !== 0 && !Ky.test(n);
}, Yy = function(n) {
  return n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Dh(n);
}, Qy = function(n) {
  return n === null || typeof n == "string" || typeof n == "number" && !Oo(n) || n && typeof n == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Xe(n, ".sv");
}, xh = function(n, e, t, s) {
  s && e === void 0 || Vi(Oi(n, "value"), e, t);
}, Vi = function(n, e, t) {
  const s = t instanceof L ? new fv(t, n) : t;
  if (e === void 0)
    throw new Error(n + "contains undefined " + Ut(s));
  if (typeof e == "function")
    throw new Error(n + "contains a function " + Ut(s) + " with contents = " + e.toString());
  if (Oo(e))
    throw new Error(n + "contains " + e.toString() + " " + Ut(s));
  if (typeof e == "string" && e.length > Er / 3 && Di(e) > Er)
    throw new Error(n + "contains a string greater than " + Er + " utf8 bytes " + Ut(s) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let i = !1, r = !1;
    if (se(e, (o, a) => {
      if (o === ".value")
        i = !0;
      else if (o !== ".priority" && o !== ".sv" && (r = !0, !ra(o)))
        throw new Error(n + " contains an invalid key (" + o + ") " + Ut(s) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      pv(s, o), Vi(n, a, s), _v(s);
    }), i && r)
      throw new Error(n + ' contains ".value" child ' + Ut(s) + " in addition to actual children.");
  }
}, Jy = function(n, e) {
  let t, s;
  for (t = 0; t < e.length; t++) {
    s = e[t];
    const r = ps(s);
    for (let o = 0; o < r.length; o++)
      if (!(r[o] === ".priority" && o === r.length - 1)) {
        if (!ra(r[o]))
          throw new Error(n + "contains an invalid key (" + r[o] + ") in path " + s.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(dv);
  let i = null;
  for (t = 0; t < e.length; t++) {
    if (s = e[t], i !== null && Re(i, s))
      throw new Error(n + "contains a path " + i.toString() + " that is ancestor of another path " + s.toString());
    i = s;
  }
}, Xy = function(n, e, t, s) {
  const i = Oi(n, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(i + " must be an object containing the children to replace.");
  const r = [];
  se(e, (o, a) => {
    const l = new L(o);
    if (Vi(i, a, j(t, l)), Fo(l) === ".priority" && !Qy(a))
      throw new Error(i + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    r.push(l);
  }), Jy(i, r);
}, Mh = function(n, e, t, s) {
  if (!Dh(t))
    throw new Error(Oi(n, e) + 'was an invalid path = "' + t + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, Zy = function(n, e, t, s) {
  t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Mh(n, e, t);
}, oa = function(n, e) {
  if (C(e) === ".info")
    throw new Error(n + " failed = Can't modify data under /.info/");
}, eE = function(n, e) {
  const t = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !ra(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || t.length !== 0 && !Yy(t))
    throw new Error(Oi(n, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class tE {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function zi(n, e) {
  let t = null;
  for (let s = 0; s < e.length; s++) {
    const i = e[s], r = i.getPath();
    t !== null && !Uo(r, t.path) && (n.eventLists_.push(t), t = null), t === null && (t = { events: [], path: r }), t.events.push(i);
  }
  t && n.eventLists_.push(t);
}
function Lh(n, e, t) {
  zi(n, t), Fh(n, (s) => Uo(s, e));
}
function Ae(n, e, t) {
  zi(n, t), Fh(n, (s) => Re(s, e) || Re(e, s));
}
function Fh(n, e) {
  n.recursionDepth_++;
  let t = !0;
  for (let s = 0; s < n.eventLists_.length; s++) {
    const i = n.eventLists_[s];
    if (i) {
      const r = i.path;
      e(r) ? (nE(n.eventLists_[s]), n.eventLists_[s] = null) : t = !1;
    }
  }
  t && (n.eventLists_ = []), n.recursionDepth_--;
}
function nE(n) {
  for (let e = 0; e < n.events.length; e++) {
    const t = n.events[e];
    if (t !== null) {
      n.events[e] = null;
      const s = t.getEventRunner();
      ts && ne("event: " + t.toString()), Bn(s);
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
const sE = "repo_interrupt", iE = 25;
class rE {
  constructor(e, t, s, i) {
    this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = s, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new tE(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = _i(), this.transactionQueueTree_ = new sa(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function oE(n, e, t) {
  if (n.stats_ = Mo(n.repoInfo_), n.forceRestClient_ || Fm())
    n.server_ = new pi(n.repoInfo_, (s, i, r, o) => {
      Ml(n, s, i, r, o);
    }, n.authTokenProvider_, n.appCheckProvider_), setTimeout(() => Ll(
      n,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof t < "u" && t !== null) {
      if (typeof t != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        Q(t);
      } catch (s) {
        throw new Error("Invalid authOverride provided: " + s);
      }
    }
    n.persistentConnection_ = new at(n.repoInfo_, e, (s, i, r, o) => {
      Ml(n, s, i, r, o);
    }, (s) => {
      Ll(n, s);
    }, (s) => {
      aE(n, s);
    }, n.authTokenProvider_, n.appCheckProvider_, t), n.server_ = n.persistentConnection_;
  }
  n.authTokenProvider_.addTokenChangeListener((s) => {
    n.server_.refreshAuthToken(s);
  }), n.appCheckProvider_.addTokenChangeListener((s) => {
    n.server_.refreshAppCheckToken(s.token);
  }), n.statsReporter_ = Hm(n.repoInfo_, () => new Bv(n.stats_, n.server_)), n.infoData_ = new Lv(), n.infoSyncTree_ = new Dl({
    startListening: (s, i, r, o) => {
      let a = [];
      const l = n.infoData_.getNode(s._path);
      return l.isEmpty() || (a = Ds(n.infoSyncTree_, s._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), aa(n, "connected", !1), n.serverSyncTree_ = new Dl({
    startListening: (s, i, r, o) => (n.server_.listen(s, r, i, (a, l) => {
      const c = o(a, l);
      Ae(n.eventQueue_, s._path, c);
    }), []),
    stopListening: (s, i) => {
      n.server_.unlisten(s, i);
    }
  });
}
function Uh(n) {
  const t = n.infoData_.getNode(new L(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + t;
}
function ji(n) {
  return By({
    timestamp: Uh(n)
  });
}
function Ml(n, e, t, s, i) {
  n.dataUpdateCount++;
  const r = new L(e);
  t = n.interceptServerDataCallback_ ? n.interceptServerDataCallback_(e, t) : t;
  let o = [];
  if (i)
    if (s) {
      const l = si(t, (c) => Y(c));
      o = My(n.serverSyncTree_, r, l, i);
    } else {
      const l = Y(t);
      o = bh(n.serverSyncTree_, r, l, i);
    }
  else if (s) {
    const l = si(t, (c) => Y(c));
    o = Oy(n.serverSyncTree_, r, l);
  } else {
    const l = Y(t);
    o = Ds(n.serverSyncTree_, r, l);
  }
  let a = r;
  o.length > 0 && (a = xn(n, r)), Ae(n.eventQueue_, a, o);
}
function Ll(n, e) {
  aa(n, "connected", e), e === !1 && hE(n);
}
function aE(n, e) {
  se(e, (t, s) => {
    aa(n, t, s);
  });
}
function aa(n, e, t) {
  const s = new L("/.info/" + e), i = Y(t);
  n.infoData_.updateSnapshot(s, i);
  const r = Ds(n.infoSyncTree_, s, i);
  Ae(n.eventQueue_, s, r);
}
function la(n) {
  return n.nextWriteId_++;
}
function lE(n, e, t) {
  const s = Ly(n.serverSyncTree_, e);
  return s != null ? Promise.resolve(s) : n.server_.get(e).then((i) => {
    const r = Y(i).withIndex(e._queryParams.getIndex());
    Yr(n.serverSyncTree_, e, t, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = Ds(n.serverSyncTree_, e._path, r);
    else {
      const a = ys(n.serverSyncTree_, e);
      o = bh(n.serverSyncTree_, e._path, r, a);
    }
    return Ae(n.eventQueue_, e._path, o), Ci(n.serverSyncTree_, e, t, null, !0), r;
  }, (i) => (Ms(n, "get for query " + Q(e) + " failed: " + i), Promise.reject(new Error(i))));
}
function cE(n, e, t, s, i) {
  Ms(n, "set", {
    path: e.toString(),
    value: t,
    priority: s
  });
  const r = ji(n), o = Y(t, s), a = Qo(n.serverSyncTree_, e), l = Ah(o, a, r), c = la(n), h = Ch(n.serverSyncTree_, e, l, c, !0);
  zi(n.eventQueue_, h), n.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || de("set at " + e + " failed: " + u);
    const g = It(n.serverSyncTree_, c, !p);
    Ae(n.eventQueue_, e, g), Xr(n, i, u, f);
  });
  const d = ua(n, e);
  xn(n, d), Ae(n.eventQueue_, d, []);
}
function uE(n, e, t, s) {
  Ms(n, "update", { path: e.toString(), value: t });
  let i = !0;
  const r = ji(n), o = {};
  if (se(t, (a, l) => {
    i = !1, o[a] = kh(j(e, a), Y(l), n.serverSyncTree_, r);
  }), i)
    ne("update() called with empty data.  Don't do anything."), Xr(n, s, "ok", void 0);
  else {
    const a = la(n), l = Py(n.serverSyncTree_, e, o, a);
    zi(n.eventQueue_, l), n.server_.merge(e.toString(), t, (c, h) => {
      const d = c === "ok";
      d || de("update at " + e + " failed: " + c);
      const u = It(n.serverSyncTree_, a, !d), f = u.length > 0 ? xn(n, e) : e;
      Ae(n.eventQueue_, f, u), Xr(n, s, c, h);
    }), se(t, (c) => {
      const h = ua(n, j(e, c));
      xn(n, h);
    }), Ae(n.eventQueue_, e, []);
  }
}
function hE(n) {
  Ms(n, "onDisconnectEvents");
  const e = ji(n), t = _i();
  Vr(n.onDisconnect_, k(), (i, r) => {
    const o = kh(i, r, n.serverSyncTree_, e);
    lh(t, i, o);
  });
  let s = [];
  Vr(t, k(), (i, r) => {
    s = s.concat(Ds(n.serverSyncTree_, i, r));
    const o = ua(n, i);
    xn(n, o);
  }), n.onDisconnect_ = _i(), Ae(n.eventQueue_, k(), s);
}
function dE(n, e, t) {
  let s;
  C(e._path) === ".info" ? s = Yr(n.infoSyncTree_, e, t) : s = Yr(n.serverSyncTree_, e, t), Lh(n.eventQueue_, e._path, s);
}
function Jr(n, e, t) {
  let s;
  C(e._path) === ".info" ? s = Ci(n.infoSyncTree_, e, t) : s = Ci(n.serverSyncTree_, e, t), Lh(n.eventQueue_, e._path, s);
}
function fE(n) {
  n.persistentConnection_ && n.persistentConnection_.interrupt(sE);
}
function Ms(n, ...e) {
  let t = "";
  n.persistentConnection_ && (t = n.persistentConnection_.id + ":"), ne(t, ...e);
}
function Xr(n, e, t, s) {
  e && Bn(() => {
    if (t === "ok")
      e(null);
    else {
      const i = (t || "error").toUpperCase();
      let r = i;
      s && (r += ": " + s);
      const o = new Error(r);
      o.code = i, e(o);
    }
  });
}
function $h(n, e, t) {
  return Qo(n.serverSyncTree_, e, t) || w.EMPTY_NODE;
}
function ca(n, e = n.transactionQueueTree_) {
  if (e || Gi(n, e), Vn(e)) {
    const t = Bh(n, e);
    _(t.length > 0, "Sending zero length transaction queue"), t.every(
      (i) => i.status === 0
      /* TransactionStatus.RUN */
    ) && pE(n, xs(e), t);
  } else Ph(e) && Hi(e, (t) => {
    ca(n, t);
  });
}
function pE(n, e, t) {
  const s = t.map((c) => c.currentWriteId), i = $h(n, e, s);
  let r = i;
  const o = i.hash();
  for (let c = 0; c < t.length; c++) {
    const h = t[c];
    _(h.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."), h.status = 1, h.retryCount++;
    const d = he(e, h.path);
    r = r.updateChild(d, h.currentOutputSnapshotRaw);
  }
  const a = r.val(!0), l = e;
  n.server_.put(l.toString(), a, (c) => {
    Ms(n, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let h = [];
    if (c === "ok") {
      const d = [];
      for (let u = 0; u < t.length; u++)
        t[u].status = 2, h = h.concat(It(n.serverSyncTree_, t[u].currentWriteId)), t[u].onComplete && d.push(() => t[u].onComplete(null, !0, t[u].currentOutputSnapshotResolved)), t[u].unwatcher();
      Gi(n, ia(n.transactionQueueTree_, e)), ca(n, n.transactionQueueTree_), Ae(n.eventQueue_, e, h);
      for (let u = 0; u < d.length; u++)
        Bn(d[u]);
    } else {
      if (c === "datastale")
        for (let d = 0; d < t.length; d++)
          t[d].status === 3 ? t[d].status = 4 : t[d].status = 0;
      else {
        de("transaction at " + l.toString() + " failed: " + c);
        for (let d = 0; d < t.length; d++)
          t[d].status = 4, t[d].abortReason = c;
      }
      xn(n, e);
    }
  }, o);
}
function xn(n, e) {
  const t = Wh(n, e), s = xs(t), i = Bh(n, t);
  return _E(n, i, s), s;
}
function _E(n, e, t) {
  if (e.length === 0)
    return;
  const s = [];
  let i = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = he(t, l.path);
    let h = !1, d;
    if (_(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      h = !0, d = l.abortReason, i = i.concat(It(n.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= iE)
        h = !0, d = "maxretry", i = i.concat(It(n.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = $h(n, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          Vi("transaction failed: Data returned ", f, l.path);
          let p = Y(f);
          typeof f == "object" && f != null && Xe(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const v = l.currentWriteId, A = ji(n), m = Ah(p, u, A);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = m, l.currentWriteId = la(n), o.splice(o.indexOf(v), 1), i = i.concat(Ch(n.serverSyncTree_, l.path, m, l.currentWriteId, l.applyLocally)), i = i.concat(It(n.serverSyncTree_, v, !0));
        } else
          h = !0, d = "nodata", i = i.concat(It(n.serverSyncTree_, l.currentWriteId, !0));
      }
    Ae(n.eventQueue_, t, i), i = [], h && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (d === "nodata" ? s.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : s.push(() => e[a].onComplete(new Error(d), !1, null))));
  }
  Gi(n, n.transactionQueueTree_);
  for (let a = 0; a < s.length; a++)
    Bn(s[a]);
  ca(n, n.transactionQueueTree_);
}
function Wh(n, e) {
  let t, s = n.transactionQueueTree_;
  for (t = C(e); t !== null && Vn(s) === void 0; )
    s = ia(s, t), e = W(e), t = C(e);
  return s;
}
function Bh(n, e) {
  const t = [];
  return Hh(n, e, t), t.sort((s, i) => s.order - i.order), t;
}
function Hh(n, e, t) {
  const s = Vn(e);
  if (s)
    for (let i = 0; i < s.length; i++)
      t.push(s[i]);
  Hi(e, (i) => {
    Hh(n, i, t);
  });
}
function Gi(n, e) {
  const t = Vn(e);
  if (t) {
    let s = 0;
    for (let i = 0; i < t.length; i++)
      t[i].status !== 2 && (t[s] = t[i], s++);
    t.length = s, Nh(e, t.length > 0 ? t : void 0);
  }
  Hi(e, (s) => {
    Gi(n, s);
  });
}
function ua(n, e) {
  const t = xs(Wh(n, e)), s = ia(n.transactionQueueTree_, e);
  return jy(s, (i) => {
    wr(n, i);
  }), wr(n, s), Oh(s, (i) => {
    wr(n, i);
  }), t;
}
function wr(n, e) {
  const t = Vn(e);
  if (t) {
    const s = [];
    let i = [], r = -1;
    for (let o = 0; o < t.length; o++)
      t[o].status === 3 || (t[o].status === 1 ? (_(r === o - 1, "All SENT items should be at beginning of queue."), r = o, t[o].status = 3, t[o].abortReason = "set") : (_(t[o].status === 0, "Unexpected transaction status in abort"), t[o].unwatcher(), i = i.concat(It(n.serverSyncTree_, t[o].currentWriteId, !0)), t[o].onComplete && s.push(t[o].onComplete.bind(null, new Error("set"), !1, null))));
    r === -1 ? Nh(e, void 0) : t.length = r + 1, Ae(n.eventQueue_, xs(e), i);
    for (let o = 0; o < s.length; o++)
      Bn(s[o]);
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
function gE(n) {
  let e = "";
  const t = n.split("/");
  for (let s = 0; s < t.length; s++)
    if (t[s].length > 0) {
      let i = t[s];
      try {
        i = decodeURIComponent(i.replace(/\+/g, " "));
      } catch {
      }
      e += "/" + i;
    }
  return e;
}
function mE(n) {
  const e = {};
  n.charAt(0) === "?" && (n = n.substring(1));
  for (const t of n.split("&")) {
    if (t.length === 0)
      continue;
    const s = t.split("=");
    s.length === 2 ? e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]) : de(`Invalid query segment '${t}' in query '${n}'`);
  }
  return e;
}
const Fl = function(n, e) {
  const t = vE(n), s = t.namespace;
  t.domain === "firebase.com" && ut(t.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!s || s === "undefined") && t.domain !== "localhost" && ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), t.secure || km();
  const i = t.scheme === "ws" || t.scheme === "wss";
  return {
    repoInfo: new ju(
      t.host,
      t.secure,
      s,
      i,
      e,
      /*persistenceKey=*/
      "",
      /*includeNamespaceInQueryParams=*/
      s !== t.subdomain
    ),
    path: new L(t.pathString)
  };
}, vE = function(n) {
  let e = "", t = "", s = "", i = "", r = "", o = !0, a = "https", l = 443;
  if (typeof n == "string") {
    let c = n.indexOf("//");
    c >= 0 && (a = n.substring(0, c - 1), n = n.substring(c + 2));
    let h = n.indexOf("/");
    h === -1 && (h = n.length);
    let d = n.indexOf("?");
    d === -1 && (d = n.length), e = n.substring(0, Math.min(h, d)), h < d && (i = gE(n.substring(h, d)));
    const u = mE(n.substring(Math.min(n.length, d)));
    c = e.indexOf(":"), c >= 0 ? (o = a === "https" || a === "wss", l = parseInt(e.substring(c + 1), 10)) : c = e.length;
    const f = e.slice(0, c);
    if (f.toLowerCase() === "localhost")
      t = "localhost";
    else if (f.split(".").length <= 2)
      t = f;
    else {
      const p = e.indexOf(".");
      s = e.substring(0, p).toLowerCase(), t = e.substring(p + 1), r = s;
    }
    "ns" in u && (r = u.ns);
  }
  return {
    host: e,
    port: l,
    domain: t,
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
const Ul = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", yE = /* @__PURE__ */ (function() {
  let n = 0;
  const e = [];
  return function(t) {
    const s = t === n;
    n = t;
    let i;
    const r = new Array(8);
    for (i = 7; i >= 0; i--)
      r[i] = Ul.charAt(t % 64), t = Math.floor(t / 64);
    _(t === 0, "Cannot push at time == 0");
    let o = r.join("");
    if (s) {
      for (i = 11; i >= 0 && e[i] === 63; i--)
        e[i] = 0;
      e[i]++;
    } else
      for (i = 0; i < 12; i++)
        e[i] = Math.floor(Math.random() * 64);
    for (i = 0; i < 12; i++)
      o += Ul.charAt(e[i]);
    return _(o.length === 20, "nextPushId: Length should be 20."), o;
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
class EE {
  /**
   * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
   * @param eventRegistration - The function to call to with the event data. User provided
   * @param snapshot - The data backing the event
   * @param prevName - Optional, the name of the previous child for child_* events.
   */
  constructor(e, t, s, i) {
    this.eventType = e, this.eventRegistration = t, this.snapshot = s, this.prevName = i;
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
    return this.getPath().toString() + ":" + this.eventType + ":" + Q(this.snapshot.exportVal());
  }
}
class wE {
  constructor(e, t, s) {
    this.eventRegistration = e, this.error = t, this.path = s;
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
class Vh {
  constructor(e, t) {
    this.snapshotCallback = e, this.cancelCallback = t;
  }
  onValue(e, t) {
    this.snapshotCallback.call(null, e, t);
  }
  onCancel(e) {
    return _(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e);
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
class ha {
  /**
   * @hideconstructor
   */
  constructor(e, t, s, i) {
    this._repo = e, this._path = t, this._queryParams = s, this._orderByCalled = i;
  }
  get key() {
    return T(this._path) ? null : Fo(this._path);
  }
  get ref() {
    return new _t(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = Cl(this._queryParams), t = Do(e);
    return t === "{}" ? "default" : t;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return Cl(this._queryParams);
  }
  isEqual(e) {
    if (e = ie(e), !(e instanceof ha))
      return !1;
    const t = this._repo === e._repo, s = Uo(this._path, e._path), i = this._queryIdentifier === e._queryIdentifier;
    return t && s && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + hv(this._path);
  }
}
class _t extends ha {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t, new Ho(), !1);
  }
  get parent() {
    const e = eh(this._path);
    return e === null ? null : new _t(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class Es {
  /**
   * @param _node - A SnapshotNode to wrap.
   * @param ref - The location this snapshot came from.
   * @param _index - The iteration order for this snapshot
   * @hideconstructor
   */
  constructor(e, t, s) {
    this._node = e, this.ref = t, this._index = s;
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
    const t = new L(e), s = ws(this.ref, e);
    return new Es(this._node.getChild(t), s, G);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (s, i) => e(new Es(i, ws(this.ref, s), G)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const t = new L(e);
    return !this._node.getChild(t).isEmpty();
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
function qe(n, e) {
  return n = ie(n), n._checkNotDeleted("ref"), e !== void 0 ? ws(n._root, e) : n._root;
}
function ws(n, e) {
  return n = ie(n), C(n._path) === null ? Zy("child", "path", e) : Mh("child", "path", e), new _t(n._repo, j(n._path, e));
}
function IE(n, e) {
  n = ie(n), oa("push", n._path), xh("push", e, n._path, !0);
  const t = Uh(n._repo), s = yE(t), i = ws(n, s), r = ws(n, s);
  let o;
  return o = Promise.resolve(r), i.then = o.then.bind(o), i.catch = o.then.bind(o, void 0), i;
}
function CE(n) {
  return oa("remove", n._path), qi(n, null);
}
function qi(n, e) {
  n = ie(n), oa("set", n._path), xh("set", e, n._path, !1);
  const t = new bs();
  return cE(
    n._repo,
    n._path,
    e,
    /*priority=*/
    null,
    t.wrapCallback(() => {
    })
  ), t.promise;
}
function Zr(n, e) {
  Xy("update", e, n._path);
  const t = new bs();
  return uE(n._repo, n._path, e, t.wrapCallback(() => {
  })), t.promise;
}
function bE(n) {
  n = ie(n);
  const e = new Vh(() => {
  }), t = new Ki(e);
  return lE(n._repo, n, t).then((s) => new Es(s, new _t(n._repo, n._path), n._queryParams.getIndex()));
}
class Ki {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, t) {
    const s = t._queryParams.getIndex();
    return new EE("value", this, new Es(e.snapshotNode, new _t(t._repo, t._path), s));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, t) {
    return this.callbackContext.hasCancelCallback ? new wE(this, e, t) : null;
  }
  matches(e) {
    return e instanceof Ki ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function TE(n, e, t, s, i) {
  let r;
  if (typeof s == "object" && (r = void 0, i = s), typeof s == "function" && (r = s), i && i.onlyOnce) {
    const l = t, c = (h, d) => {
      Jr(n._repo, n, a), l(h, d);
    };
    c.userCallback = t.userCallback, c.context = t.context, t = c;
  }
  const o = new Vh(t, r || void 0), a = new Ki(o);
  return dE(n._repo, n, a), () => Jr(n._repo, n, a);
}
function bi(n, e, t, s) {
  return TE(n, "value", e, t, s);
}
function da(n, e, t) {
  Jr(n._repo, n, null);
}
Cy(_t);
ky(_t);
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
const SE = "FIREBASE_DATABASE_EMULATOR_HOST", eo = {};
let RE = !1;
function kE(n, e, t, s) {
  const i = e.lastIndexOf(":"), r = e.substring(0, i), o = Fn(r);
  n.repoInfo_ = new ju(
    e,
    /* secure= */
    o,
    n.repoInfo_.namespace,
    n.repoInfo_.webSocketOnly,
    n.repoInfo_.nodeAdmin,
    n.repoInfo_.persistenceKey,
    n.repoInfo_.includeNamespaceInQueryParams,
    /*isUsingEmulator=*/
    !0,
    t
  ), s && (n.authTokenProvider_ = s);
}
function AE(n, e, t, s, i) {
  let r = s || n.options.databaseURL;
  r === void 0 && (n.options.projectId || ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), ne("Using default host for project ", n.options.projectId), r = `${n.options.projectId}-default-rtdb.firebaseio.com`);
  let o = Fl(r, i), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[SE]), l ? (r = `http://${l}?ns=${a.namespace}`, o = Fl(r, i), a = o.repoInfo) : o.repoInfo.secure;
  const c = new $m(n.name, n.options, e);
  eE("Invalid Firebase Database URL", o), T(o.path) || ut("Database URL must point to the root of a Firebase Database (not including a child path).");
  const h = PE(a, n, c, new Um(n, t));
  return new OE(h, n);
}
function NE(n, e) {
  const t = eo[e];
  (!t || t[n.key] !== n) && ut(`Database ${e}(${n.repoInfo_}) has already been deleted.`), fE(n), delete t[n.key];
}
function PE(n, e, t, s) {
  let i = eo[e.name];
  i || (i = {}, eo[e.name] = i);
  let r = i[n.toURLString()];
  return r && ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new rE(n, RE, t, s), i[n.toURLString()] = r, r;
}
class OE {
  /** @hideconstructor */
  constructor(e, t) {
    this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (oE(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new _t(this._repo, k())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (NE(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && ut("Cannot call " + e + " on a deleted database.");
  }
}
function DE(n = Kc(), e) {
  const t = Co(n, "database").getImmediate({
    identifier: e
  });
  if (!t._instanceStarted) {
    const s = Af("database");
    s && xE(t, ...s);
  }
  return t;
}
function xE(n, e, t, s = {}) {
  n = ie(n), n._checkNotDeleted("useEmulator");
  const i = `${e}:${t}`, r = n._repoInternal;
  if (n._instanceStarted) {
    if (i === n._repoInternal.repoInfo_.host && qt(s, r.repoInfo_.emulatorOptions))
      return;
    ut("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (r.repoInfo_.nodeAdmin)
    s.mockUserToken && ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Gs(Gs.OWNER);
  else if (s.mockUserToken) {
    const a = typeof s.mockUserToken == "string" ? s.mockUserToken : Nf(s.mockUserToken, n.app.options.projectId);
    o = new Gs(a);
  }
  Fn(e) && (Bc(e), Hc("Database", !0)), kE(r, i, s, o);
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
function ME(n) {
  Im($n), kn(new Kt(
    "database",
    (e, { instanceIdentifier: t }) => {
      const s = e.getProvider("app").getImmediate(), i = e.getProvider("auth-internal"), r = e.getProvider("app-check-internal");
      return AE(s, i, r, t);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), St(ol, al, n), St(ol, al, "esm2020");
}
at.prototype.simpleListen = function(n, e) {
  this.sendRequest("q", { p: n }, e);
};
at.prototype.echo = function(n, e) {
  this.sendRequest("echo", { d: n }, e);
};
ME();
const LE = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}, zh = qc(LE), Yi = Em(zh), Ke = DE(zh), FE = mo(null), UE = mo(!0);
lg(Yi, (n) => {
  FE.set(n), UE.set(!1);
});
async function $E(n, e) {
  try {
    return await sg(Yi, n, e), { success: !0 };
  } catch (t) {
    return console.error("로그인 오류:", t), { success: !1, error: jh(t.code) };
  }
}
async function WE(n, e, t = "") {
  try {
    const s = await ng(Yi, n, e);
    return t && await rg(s.user, {
      displayName: t
    }), { success: !0 };
  } catch (s) {
    return console.error("회원가입 오류:", s), { success: !1, error: jh(s.code) };
  }
}
async function sw() {
  try {
    return await cg(Yi), { success: !0 };
  } catch (n) {
    return console.error("로그아웃 오류:", n), { success: !1, error: n.message };
  }
}
function jh(n) {
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
  }[n] || "알 수 없는 오류가 발생했습니다.";
}
var BE = /* @__PURE__ */ He('<div class="form-group svelte-16585sj"><label for="displayName" class="label svelte-16585sj">이름</label> <input id="displayName" type="text" required placeholder="이름을 입력하세요" class="input svelte-16585sj"/></div>'), HE = /* @__PURE__ */ He('<div class="error-message svelte-16585sj"> </div>'), VE = /* @__PURE__ */ He('<div class="login-container svelte-16585sj"><div class="login-card svelte-16585sj"><h2 class="title svelte-16585sj"> </h2> <form class="form svelte-16585sj"><!> <div class="form-group svelte-16585sj"><label for="email" class="label svelte-16585sj">이메일</label> <input id="email" type="email" required placeholder="email@example.com" class="input svelte-16585sj"/></div> <div class="form-group svelte-16585sj"><label for="password" class="label svelte-16585sj">비밀번호</label> <input id="password" type="password" required placeholder="비밀번호 (최소 6자)" minlength="6" class="input svelte-16585sj"/></div> <!> <button type="submit" class="submit-button svelte-16585sj"> </button> <button type="button" class="toggle-button svelte-16585sj"> </button></form></div></div>');
const zE = {
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
function jE(n, e) {
  lo(e, !0), Pc(n, zE);
  let t = /* @__PURE__ */ te(""), s = /* @__PURE__ */ te(""), i = /* @__PURE__ */ te(""), r = /* @__PURE__ */ te(""), o = /* @__PURE__ */ te(!1), a = /* @__PURE__ */ te(
    !1
    // 회원가입 모드 토글
  );
  async function l(q) {
    q.preventDefault(), x(o, !0), x(r, "");
    let U;
    if (y(a) ? U = await WE(y(t), y(s), y(i)) : U = await $E(y(t), y(s)), U.success) {
      const ee = new CustomEvent("login-success", {
        detail: { email: y(t) },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(ee), x(t, ""), x(s, ""), x(i, "");
    } else {
      x(r, U.error, !0);
      const ee = new CustomEvent("login-error", {
        detail: { error: U.error },
        bubbles: !0,
        composed: !0
      });
      dispatchEvent(ee);
    }
    x(o, !1);
  }
  function c() {
    x(a, !y(a)), x(r, "");
  }
  var h = VE(), d = z(h), u = z(d), f = z(u, !0);
  B(u);
  var p = ge(u, 2), g = z(p);
  {
    var v = (q) => {
      var U = BE(), ee = ge(z(U), 2);
      ir(ee), B(U), Bt(() => ee.disabled = y(o)), rr(ee, () => y(i), (Mt) => x(i, Mt)), _e(q, U);
    };
    $t(g, (q) => {
      y(a) && q(v);
    });
  }
  var A = ge(g, 2), m = ge(z(A), 2);
  ir(m), B(A);
  var I = ge(A, 2), N = ge(z(I), 2);
  ir(N), B(I);
  var D = ge(I, 2);
  {
    var Z = (q) => {
      var U = HE(), ee = z(U, !0);
      B(U), Bt(() => Oe(ee, y(r))), _e(q, U);
    };
    $t(D, (q) => {
      y(r) && q(Z);
    });
  }
  var F = ge(D, 2), K = z(F, !0);
  B(F);
  var V = ge(F, 2);
  V.__click = c;
  var Ne = z(V, !0);
  B(V), B(p), B(d), B(h), Bt(() => {
    Oe(f, y(a) ? "회원가입" : "로그인"), m.disabled = y(o), N.disabled = y(o), F.disabled = y(o), Oe(K, y(o) ? "처리 중..." : y(a) ? "회원가입" : "로그인"), V.disabled = y(o), Oe(Ne, y(a) ? "이미 계정이 있으신가요? 로그인" : "계정이 없으신가요? 회원가입");
  }), tf("submit", p, l), rr(m, () => y(t), (q) => x(t, q)), rr(N, () => y(s), (q) => x(s, q)), _e(n, h), co();
}
Sc(["click"]);
customElements.define("login-form", Dc(jE, {}, [], [], !0));
var GE = /* @__PURE__ */ He('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), qE = /* @__PURE__ */ He('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), KE = /* @__PURE__ */ He('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), YE = /* @__PURE__ */ He('<h3 class="post-title svelte-1t1odzy"> </h3>'), QE = /* @__PURE__ */ He('<p class="post-text svelte-1t1odzy"> </p>'), JE = /* @__PURE__ */ He('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), XE = /* @__PURE__ */ He('<div class="posts svelte-1t1odzy"></div>'), ZE = /* @__PURE__ */ He('<div class="post-list-container svelte-1t1odzy"><!></div>');
const ew = {
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
function tw(n, e) {
  lo(e, !0), Pc(n, ew);
  let t = Na(e, "path", 7, "posts"), s = Na(e, "limit", 7, "10"), i = /* @__PURE__ */ te(hn([])), r = /* @__PURE__ */ te(!0), o = /* @__PURE__ */ te(""), a = null;
  Ac(() => {
    l();
  }), cf(() => {
    c();
  });
  function l() {
    try {
      a = qe(Ke, t()), bi(
        a,
        (m) => {
          const I = m.val();
          I ? x(i, Object.entries(I).map(([N, D]) => ({ id: N, ...D })).sort((N, D) => (D.timestamp || 0) - (N.timestamp || 0)).slice(0, parseInt(s())), !0) : x(i, [], !0), x(r, !1), x(o, "");
        },
        (m) => {
          console.error("데이터 읽기 오류:", m), x(o, "데이터를 불러오는 중 오류가 발생했습니다."), x(r, !1);
        }
      );
    } catch (m) {
      console.error("구독 설정 오류:", m), x(o, "데이터베이스 연결에 실패했습니다."), x(r, !1);
    }
  }
  function c() {
    a && da(a);
  }
  function h(m) {
    const I = new CustomEvent("post-click", { detail: { post: m }, bubbles: !0, composed: !0 });
    dispatchEvent(I);
  }
  function d(m, I) {
    (m.key === "Enter" || m.key === " ") && (m.preventDefault(), h(I));
  }
  function u(m) {
    if (!m) return "";
    const I = typeof m == "string" ? Number(m) : m, N = new Date(I), Z = (/* @__PURE__ */ new Date()).getTime() - N.getTime(), F = Math.floor(Z / 6e4), K = Math.floor(Z / 36e5), V = Math.floor(Z / 864e5);
    return F < 1 ? "방금 전" : F < 60 ? `${F}분 전` : K < 24 ? `${K}시간 전` : V < 7 ? `${V}일 전` : N.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return t();
    },
    set path(m = "posts") {
      t(m), Xs();
    },
    get limit() {
      return s();
    },
    set limit(m = "10") {
      s(m), Xs();
    }
  }, p = ZE(), g = z(p);
  {
    var v = (m) => {
      var I = GE();
      _e(m, I);
    }, A = (m) => {
      var I = ka(), N = Ia(I);
      {
        var D = (F) => {
          var K = qE(), V = z(K), Ne = z(V, !0);
          B(V), B(K), Bt(() => Oe(Ne, y(o))), _e(F, K);
        }, Z = (F) => {
          var K = ka(), V = Ia(K);
          {
            var Ne = (U) => {
              var ee = KE();
              _e(U, ee);
            }, q = (U) => {
              var ee = XE();
              hf(ee, 21, () => y(i), (Mt) => Mt.id, (Mt, pe) => {
                var on = JE();
                on.__click = () => h(y(pe)), on.__keydown = (Pe) => d(Pe, y(pe));
                var Qi = z(on), fa = z(Qi), Ji = z(fa), Gh = z(Ji, !0);
                B(Ji);
                var pa = ge(Ji, 2), qh = z(pa, !0);
                B(pa), B(fa), B(Qi);
                var Xi = ge(Qi, 2), _a = z(Xi);
                {
                  var Kh = (Pe) => {
                    var Lt = YE(), er = z(Lt, !0);
                    B(Lt), Bt(() => Oe(er, y(pe).title)), _e(Pe, Lt);
                  };
                  $t(_a, (Pe) => {
                    y(pe).title && Pe(Kh);
                  });
                }
                var Yh = ge(_a, 2);
                {
                  var Qh = (Pe) => {
                    var Lt = QE(), er = z(Lt, !0);
                    B(Lt), Bt(() => Oe(er, y(pe).content)), _e(Pe, Lt);
                  };
                  $t(Yh, (Pe) => {
                    y(pe).content && Pe(Qh);
                  });
                }
                B(Xi);
                var ga = ge(Xi, 2), Zi = z(ga), Jh = z(Zi);
                B(Zi);
                var ma = ge(Zi, 2), Xh = z(ma);
                B(ma), B(ga), B(on), Bt(
                  (Pe) => {
                    Ar(on, "aria-label", `게시물: ${(y(pe).title || y(pe).content || "제목 없음") ?? ""}`), Oe(Gh, y(pe).author || "익명"), Oe(qh, Pe), Oe(Jh, `👍 ${(y(pe).likes || 0) ?? ""}`), Oe(Xh, `💬 ${(y(pe).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(y(pe).timestamp)]
                ), _e(Mt, on);
              }), B(ee), _e(U, ee);
            };
            $t(
              V,
              (U) => {
                y(i).length === 0 ? U(Ne) : U(q, !1);
              },
              !0
            );
          }
          _e(F, K);
        };
        $t(
          N,
          (F) => {
            y(o) ? F(D) : F(Z, !1);
          },
          !0
        );
      }
      _e(m, I);
    };
    $t(g, (m) => {
      y(r) ? m(v) : m(A, !1);
    });
  }
  return B(p), _e(n, p), co(f);
}
Sc(["click", "keydown"]);
customElements.define("post-list", Dc(tw, { path: {}, limit: {} }, [], [], !0));
function iw(n) {
  const { subscribe: e, set: t } = mo(null), s = qe(Ke, n);
  return bi(s, (i) => {
    const r = i.val();
    t(r);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => da(s)
  };
}
async function rw(n, e) {
  try {
    const t = qe(Ke, n);
    return await qi(t, e), { success: !0 };
  } catch (t) {
    return console.error("데이터 쓰기 오류:", t), { success: !1, error: t.message };
  }
}
async function ow(n, e) {
  try {
    const t = qe(Ke, n);
    return await Zr(t, e), { success: !0 };
  } catch (t) {
    return console.error("데이터 업데이트 오류:", t), { success: !1, error: t.message };
  }
}
async function aw(n) {
  try {
    const e = qe(Ke, n);
    return await CE(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function lw(n, e) {
  try {
    const t = qe(Ke, n), s = IE(t);
    return await qi(s, e), { success: !0, key: s.key };
  } catch (t) {
    return console.error("데이터 추가 오류:", t), { success: !1, error: t.message };
  }
}
async function cw(n) {
  try {
    const e = qe(Ke, n), t = await bE(e);
    return t.exists() ? { success: !0, data: t.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function uw(n) {
  const e = qe(Ke, `status/${n}`), t = qe(Ke, ".info/connected");
  return bi(t, (s) => {
    s.val() === !0 && (qi(e, {
      online: !0,
      lastSeen: Date.now()
    }), bi(qe(Ke, ".info/connected"), (i) => {
      i.val() || Zr(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    Zr(e, {
      online: !1,
      lastSeen: Date.now()
    }), da(t);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  Yi as auth,
  iw as createRealtimeStore,
  Ke as database,
  aw as deleteData,
  UE as loading,
  lw as pushData,
  cw as readData,
  uw as setupPresence,
  $E as signIn,
  sw as signOut,
  WE as signUp,
  ow as updateData,
  FE as user,
  rw as writeData
};
