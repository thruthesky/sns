typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const So = 1, ko = 2, pd = 4, nm = 8, im = 16, rm = 1, sm = 2, md = 4, om = 8, am = 16, lm = 1, cm = 2, _d = "[", Ao = "[!", fl = "]", Hi = {}, We = Symbol(), um = "http://www.w3.org/1999/xhtml", dm = "http://www.w3.org/2000/svg", hm = "@attach", gd = !1;
var pl = Array.isArray, fm = Array.prototype.indexOf, ml = Array.from, js = Object.keys, zr = Object.defineProperty, an = Object.getOwnPropertyDescriptor, vd = Object.getOwnPropertyDescriptors, pm = Object.prototype, mm = Array.prototype, _l = Object.getPrototypeOf, Dc = Object.isExtensible;
function mr(t) {
  return typeof t == "function";
}
const On = () => {
};
function _m(t) {
  return t();
}
function Bs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function bd() {
  var t, e, n = new Promise((i, r) => {
    t = i, e = r;
  });
  return { promise: n, resolve: t, reject: e };
}
function gm(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const i of t)
    if (n.push(i), n.length === e) break;
  return n;
}
const Ye = 2, gl = 4, Ro = 8, mn = 16, _n = 32, Bn = 64, Po = 128, Ge = 1024, ut = 2048, gn = 4096, mt = 8192, ln = 16384, vl = 32768, oi = 65536, Mc = 1 << 17, vm = 1 << 18, _i = 1 << 19, yd = 1 << 20, wt = 256, qs = 512, Gs = 32768, Aa = 1 << 21, bl = 1 << 22, ii = 1 << 23, Vt = Symbol("$state"), yl = Symbol("legacy props"), bm = Symbol(""), Ri = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ym = 1, wl = 3, Ji = 8;
function wd(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function wm() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Em(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Im() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Cm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sm() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function km(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Am() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rm() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Nm() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function No(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function xm() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Om() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function pt(t) {
  F = t;
}
let Q;
function ze(t) {
  if (t === null)
    throw No(), Hi;
  return Q = t;
}
function ai() {
  return ze(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(Q)
  );
}
function m(t) {
  if (F) {
    if (/* @__PURE__ */ Yt(Q) !== null)
      throw No(), Hi;
    Q = t;
  }
}
function At(t = 1) {
  if (F) {
    for (var e = t, n = Q; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n);
    Q = n;
  }
}
function Ks(t = !0) {
  for (var e = 0, n = Q; ; ) {
    if (n.nodeType === Ji) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === fl) {
        if (e === 0) return n;
        e -= 1;
      } else (i === _d || i === Ao) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    t && n.remove(), n = r;
  }
}
function Ed(t) {
  if (!t || t.nodeType !== Ji)
    throw No(), Hi;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Id(t) {
  return t === this.v;
}
function Cd(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Td(t) {
  return !Cd(t, this.v);
}
let Xi = !1, Lm = !1;
function Dm() {
  Xi = !0;
}
let Ce = null;
function Wi(t) {
  Ce = t;
}
function vn(t, e = !1, n) {
  Ce = {
    p: Ce,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xi && !e ? { s: null, u: null, $: [] } : null
  };
}
function bn(t) {
  var e = (
    /** @type {ComponentContext} */
    Ce
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var i of n)
      jd(i);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ce = e.p, t ?? /** @type {T} */
  {};
}
function ls() {
  return !Xi || Ce !== null && Ce.l === null;
}
let ti = [];
function Sd() {
  var t = ti;
  ti = [], Bs(t);
}
function qn(t) {
  if (ti.length === 0 && !Pr) {
    var e = ti;
    queueMicrotask(() => {
      e === ti && Sd();
    });
  }
  ti.push(t);
}
function Mm() {
  for (; ti.length > 0; )
    Sd();
}
function kd(t) {
  var e = z;
  if (e === null)
    return Y.f |= ii, t;
  if ((e.f & vl) === 0) {
    if ((e.f & Po) === 0)
      throw t;
    e.b.error(t);
  } else
    Vi(t, e);
}
function Vi(t, e) {
  for (; e !== null; ) {
    if ((e.f & Po) !== 0)
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
const xs = /* @__PURE__ */ new Set();
let ce = null, Rr = null, Rt = null, Wt = [], xo = null, Ra = !1, Pr = !1;
class xt {
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
  #i = 0;
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
  #s = [];
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
    Wt = [], Rr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const i of e)
      this.#n(i, n);
    this.is_fork || this.#c(), this.#r > 0 || this.is_fork ? (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects)) : (Rr = this, ce = null, $c(n.render_effects), $c(n.effects), Rr = null, this.#l?.resolve()), Rt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(e, n) {
    e.f ^= Ge;
    for (var i = e.first; i !== null; ) {
      var r = i.f, s = (r & (_n | Bn)) !== 0, o = s && (r & Ge) !== 0, a = o || (r & mt) !== 0 || this.skipped_effects.has(i);
      if ((i.f & Po) !== 0 && i.b?.is_pending() && (n = {
        parent: n,
        effect: i,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && i.fn !== null) {
        s ? i.f ^= Ge : (r & gl) !== 0 ? n.effects.push(i) : hs(i) && ((i.f & mn) !== 0 && n.block_effects.push(i), Br(i));
        var l = i.first;
        if (l !== null) {
          i = l;
          continue;
        }
      }
      var c = i.parent;
      for (i = i.next; i === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), this.#a(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), i = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(e) {
    for (const n of e)
      ((n.f & ut) !== 0 ? this.#o : this.#s).push(n), Ke(n, Ge);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), this.current.set(e, e.v), Rt?.set(e, e.v);
  }
  activate() {
    ce = this;
  }
  deactivate() {
    ce = null, Rt = null;
  }
  flush() {
    if (this.activate(), Wt.length > 0) {
      if (Ad(), ce !== null && ce !== this)
        return;
    } else this.#i === 0 && this.process([]);
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
    this.#i === 0 && this.#u();
  }
  #u() {
    if (xs.size > 1) {
      this.previous.clear();
      var e = Rt, n = !0, i = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const r of xs) {
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
            Rd(c, o, a, l);
          if (Wt.length > 0) {
            ce = r, r.apply();
            for (const c of Wt)
              r.#n(c, i);
            Wt = [], r.deactivate();
          }
        }
      }
      ce = null, Rt = e;
    }
    this.committed = !0, xs.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#i += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#i -= 1, e && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const e of this.#o)
      Ke(e, ut), li(e);
    for (const e of this.#s)
      Ke(e, gn), li(e);
    this.#o = [], this.#s = [], this.flush();
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
    return (this.#l ??= bd()).promise;
  }
  static ensure() {
    if (ce === null) {
      const e = ce = new xt();
      xs.add(ce), Pr || xt.enqueue(() => {
        ce === e && e.flush();
      });
    }
    return ce;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    qn(e);
  }
  apply() {
  }
}
function ft(t) {
  var e = Pr;
  Pr = !0;
  try {
    for (var n; ; ) {
      if (Mm(), Wt.length === 0 && (ce?.flush(), Wt.length === 0))
        return xo = null, /** @type {T} */
        n;
      Ad();
    }
  } finally {
    Pr = e;
  }
}
function Ad() {
  var t = Oi;
  Ra = !0;
  try {
    var e = 0;
    for (Wc(!0); Wt.length > 0; ) {
      var n = xt.ensure();
      if (e++ > 1e3) {
        var i, r;
        $m();
      }
      n.process(Wt), Ln.clear();
    }
  } finally {
    Ra = !1, Wc(t), xo = null;
  }
}
function $m() {
  try {
    Tm();
  } catch (t) {
    Vi(t, xo);
  }
}
let tn = null;
function $c(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var i = t[n++];
      if ((i.f & (ln | mt)) === 0 && hs(i) && (tn = /* @__PURE__ */ new Set(), Br(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? Gd(i) : i.fn = null), tn?.size > 0)) {
        Ln.clear();
        for (const r of tn) {
          if ((r.f & (ln | mt)) !== 0) continue;
          const s = [r];
          let o = r.parent;
          for (; o !== null; )
            tn.has(o) && (tn.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (ln | mt)) === 0 && Br(l);
          }
        }
        tn.clear();
      }
    }
    tn = null;
  }
}
function Rd(t, e, n, i) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const r of t.reactions) {
      const s = r.f;
      (s & Ye) !== 0 ? Rd(
        /** @type {Derived} */
        r,
        e,
        n,
        i
      ) : (s & (bl | mn)) !== 0 && (s & ut) === 0 && // we may have scheduled this one already
      Pd(r, e, i) && (Ke(r, ut), li(
        /** @type {Effect} */
        r
      ));
    }
}
function Pd(t, e, n) {
  const i = n.get(t);
  if (i !== void 0) return i;
  if (t.deps !== null)
    for (const r of t.deps) {
      if (e.includes(r))
        return !0;
      if ((r.f & Ye) !== 0 && Pd(
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
function li(t) {
  for (var e = xo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ra && e === z && (n & mn) !== 0)
      return;
    if ((n & (Bn | _n)) !== 0) {
      if ((n & Ge) === 0) return;
      e.f ^= Ge;
    }
  }
  Wt.push(e);
}
function Fm(t) {
  let e = 0, n = Hn(0), i;
  return () => {
    Ym() && (b(n), Lo(() => (e === 0 && (i = qt(() => t(() => Nr(n)))), e += 1, () => {
      qn(() => {
        e -= 1, e === 0 && (i?.(), i = void 0, Nr(n));
      });
    })));
  };
}
var Um = oi | _i | Po;
function Hm(t, e, n) {
  new Wm(t, e, n);
}
class Wm {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #i = F ? Q : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #a = null;
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
  #b = Fm(() => (this.#h = Hn(this.#f), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, i) {
    this.#e = e, this.#r = n, this.#l = i, this.parent = /** @type {Effect} */
    z.b, this.#t = !!this.#r.pending, this.#o = Zi(() => {
      if (z.b = this, F) {
        const s = this.#i;
        ai(), /** @type {Comment} */
        s.nodeType === Ji && /** @type {Comment} */
        s.data === Ao ? this.#w() : this.#y();
      } else {
        var r = this.#g();
        try {
          this.#s = ot(() => i(r));
        } catch (s) {
          this.error(s);
        }
        this.#d > 0 ? this.#_() : this.#t = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Um), F && (this.#e = Q);
  }
  #y() {
    try {
      this.#s = ot(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
    this.#t = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#n = ot(() => e(this.#e)), xt.enqueue(() => {
      var n = this.#g();
      this.#s = this.#m(() => (xt.ensure(), ot(() => this.#l(n)))), this.#d > 0 ? this.#_() : (xi(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#t = !1);
    }));
  }
  #g() {
    var e = this.#e;
    return this.#t && (this.#u = Ct(), this.#e.before(this.#u), e = this.#u), e;
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
    var n = z, i = Y, r = Ce;
    Tt(this.#o), lt(this.#o), Wi(this.#o.ctx);
    try {
      return e();
    } catch (s) {
      return kd(s), null;
    } finally {
      Tt(n), lt(i), Wi(r);
    }
  }
  #_() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#s !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), Qd(this.#s, this.#c)), this.#n === null && (this.#n = ot(() => e(this.#e)));
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
    this.#d += e, this.#d === 0 && (this.#t = !1, this.#n && xi(this.#n, () => {
      this.#n = null;
    }), this.#c && (this.#e.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#v(e), this.#f += e, this.#h && zi(this.#h, this.#f);
  }
  get_effect_pending() {
    return this.#b(), b(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let i = this.#r.failed;
    if (this.#p || !n && !i)
      throw e;
    this.#s && (De(this.#s), this.#s = null), this.#n && (De(this.#n), this.#n = null), this.#a && (De(this.#a), this.#a = null), F && (ze(
      /** @type {TemplateNode} */
      this.#i
    ), At(), ze(Ks()));
    var r = !1, s = !1;
    const o = () => {
      if (r) {
        Om();
        return;
      }
      r = !0, s && Nm(), xt.ensure(), this.#f = 0, this.#a !== null && xi(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#s = this.#m(() => (this.#p = !1, ot(() => this.#l(this.#e)))), this.#d > 0 ? this.#_() : this.#t = !1;
    };
    var a = Y;
    try {
      lt(null), s = !0, n?.(e, o), s = !1;
    } catch (l) {
      Vi(l, this.#o && this.#o.parent);
    } finally {
      lt(a);
    }
    i && qn(() => {
      this.#a = this.#m(() => {
        xt.ensure(), this.#p = !0;
        try {
          return ot(() => {
            i(
              this.#e,
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Vi(
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
function Nd(t, e, n, i) {
  const r = ls() ? cs : El;
  if (n.length === 0 && t.length === 0) {
    i(e.map(r));
    return;
  }
  var s = ce, o = (
    /** @type {Effect} */
    z
  ), a = Vm();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ zm(c))).then((c) => {
      a();
      try {
        i([...e.map(r), ...c]);
      } catch (d) {
        (o.f & ln) === 0 && Vi(d, o);
      }
      s?.deactivate(), Ys();
    }).catch((c) => {
      Vi(c, o);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), Ys();
    }
  }) : l();
}
function Vm() {
  var t = z, e = Y, n = Ce, i = ce;
  return function(s = !0) {
    Tt(t), lt(e), Wi(n), s && i?.activate();
  };
}
function Ys() {
  Tt(null), lt(null), Wi(null);
}
// @__NO_SIDE_EFFECTS__
function cs(t) {
  var e = Ye | ut, n = Y !== null && (Y.f & Ye) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return z === null || n !== null && (n.f & wt) !== 0 ? e |= wt : z.f |= _i, {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: Id,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      We
    ),
    wv: 0,
    parent: n ?? z,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function zm(t, e) {
  let n = (
    /** @type {Effect | null} */
    z
  );
  n === null && wm();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Hn(
    /** @type {V} */
    We
  ), o = !Y, a = /* @__PURE__ */ new Map();
  return Zm(() => {
    var l = bd();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === ce && c.committed && c.deactivate(), Ys();
      });
    } catch (u) {
      l.reject(u), Ys();
    }
    var c = (
      /** @type {Batch} */
      ce
    );
    if (o) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), a.get(c)?.reject(Ri), a.delete(c), a.set(c, l);
    }
    const h = (u, f = void 0) => {
      if (c.activate(), f)
        f !== Ri && (s.f |= ii, zi(s, f));
      else {
        (s.f & ii) !== 0 && (s.f ^= ii), zi(s, u);
        for (const [p, g] of a) {
          if (a.delete(p), p === c) break;
          g.reject(Ri);
        }
      }
      o && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (u) => h(null, u || "unknown"));
  }), us(() => {
    for (const l of a.values())
      l.reject(Ri);
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
function Pa(t) {
  const e = /* @__PURE__ */ cs(t);
  return Jd(e), e;
}
// @__NO_SIDE_EFFECTS__
function El(t) {
  const e = /* @__PURE__ */ cs(t);
  return e.equals = Td, e;
}
function xd(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      De(
        /** @type {Effect} */
        e[n]
      );
  }
}
function jm(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Ye) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Il(t) {
  var e, n = z;
  Tt(jm(t));
  try {
    t.f &= ~Gs, xd(t), e = th(t);
  } finally {
    Tt(n);
  }
  return e;
}
function Od(t) {
  var e = Il(t);
  if (t.equals(e) || (t.v = e, t.wv = Zd()), !gi)
    if (Rt !== null)
      Rt.set(t, t.v);
    else {
      var n = (Pn || (t.f & wt) !== 0) && t.deps !== null ? gn : Ge;
      Ke(t, n);
    }
}
let Na = /* @__PURE__ */ new Set();
const Ln = /* @__PURE__ */ new Map();
let Ld = !1;
function Hn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Id,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ie(t, e) {
  const n = Hn(t);
  return Jd(n), n;
}
// @__NO_SIDE_EFFECTS__
function Cl(t, e = !1, n = !0) {
  const i = Hn(t);
  return e || (i.equals = Td), Xi && n && Ce !== null && Ce.l !== null && (Ce.l.s ??= []).push(i), i;
}
function N(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pt || (Y.f & Mc) !== 0) && ls() && (Y.f & (Ye | mn | bl | Mc)) !== 0 && !cn?.includes(t) && Pm();
  let i = n ? nn(e) : e;
  return zi(t, i);
}
function zi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    gi ? Ln.set(t, e) : Ln.set(t, n), t.v = e;
    var i = xt.ensure();
    i.capture(t, n), (t.f & Ye) !== 0 && ((t.f & ut) !== 0 && Il(
      /** @type {Derived} */
      t
    ), Ke(t, (t.f & wt) === 0 ? Ge : gn)), t.wv = Zd(), Dd(t, ut), ls() && z !== null && (z.f & Ge) !== 0 && (z.f & (_n | Bn)) === 0 && (vt === null ? n_([t]) : vt.push(t)), !i.is_fork && Na.size > 0 && !Ld && Bm();
  }
  return e;
}
function Bm() {
  Ld = !1;
  const t = Array.from(Na);
  for (const e of t)
    (e.f & Ge) !== 0 && Ke(e, gn), hs(e) && Br(e);
  Na.clear();
}
function Fc(t, e = 1) {
  var n = b(t), i = e === 1 ? n++ : n--;
  return N(t, n), i;
}
function Nr(t) {
  N(t, t.v + 1);
}
function Dd(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var i = ls(), r = n.length, s = 0; s < r; s++) {
      var o = n[s], a = o.f;
      if (!(!i && o === z)) {
        var l = (a & ut) === 0;
        l && Ke(o, e), (a & Ye) !== 0 ? (a & Gs) === 0 && (o.f |= Gs, Dd(
          /** @type {Derived} */
          o,
          gn
        )) : l && ((a & mn) !== 0 && tn !== null && tn.add(
          /** @type {Effect} */
          o
        ), li(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function nn(t) {
  if (typeof t != "object" || t === null || Vt in t)
    return t;
  const e = _l(t);
  if (e !== pm && e !== mm)
    return t;
  var n = /* @__PURE__ */ new Map(), i = pl(t), r = /* @__PURE__ */ ie(0), s = ri, o = (a) => {
    if (ri === s)
      return a();
    var l = Y, c = ri;
    lt(null), zc(s);
    var d = a();
    return lt(l), zc(c), d;
  };
  return i && n.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Am();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ ie(c.value);
          return n.set(l, h), h;
        }) : N(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = o(() => /* @__PURE__ */ ie(We));
            n.set(l, d), Nr(r);
          }
        } else
          N(c, We), Nr(r);
        return !0;
      },
      get(a, l, c) {
        if (l === Vt)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || an(a, l)?.writable) && (d = o(() => {
          var f = nn(h ? a[l] : We), p = /* @__PURE__ */ ie(f);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var u = b(d);
          return u === We ? void 0 : u;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = b(d));
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
        if (l === Vt)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== We || Reflect.has(a, l);
        if (c !== void 0 || z !== null && (!d || an(a, l)?.writable)) {
          c === void 0 && (c = o(() => {
            var u = d ? nn(a[l]) : We, f = /* @__PURE__ */ ie(u);
            return f;
          }), n.set(l, c));
          var h = b(c);
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
            p !== void 0 ? N(p, We) : f in a && (p = o(() => /* @__PURE__ */ ie(We)), n.set(f + "", p));
          }
        if (h === void 0)
          (!u || an(a, l)?.writable) && (h = o(() => /* @__PURE__ */ ie(void 0)), N(h, nn(c)), n.set(l, h));
        else {
          u = h.v !== We;
          var g = o(() => nn(c));
          N(h, g);
        }
        var E = Reflect.getOwnPropertyDescriptor(a, l);
        if (E?.set && E.set.call(d, c), !u) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= T.v && N(T, S + 1);
          }
          Nr(r);
        }
        return !0;
      },
      ownKeys(a) {
        b(r);
        var l = Reflect.ownKeys(a).filter((h) => {
          var u = n.get(h);
          return u === void 0 || u.v !== We;
        });
        for (var [c, d] of n)
          d.v !== We && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Rm();
      }
    }
  );
}
function Uc(t) {
  try {
    if (t !== null && typeof t == "object" && Vt in t)
      return t[Vt];
  } catch {
  }
  return t;
}
function qm(t, e) {
  return Object.is(Uc(t), Uc(e));
}
var xa, Md, $d, Fd;
function Oa() {
  if (xa === void 0) {
    xa = window, Md = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    $d = an(e, "firstChild").get, Fd = an(e, "nextSibling").get, Dc(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Dc(n) && (n.__t = void 0);
  }
}
function Ct(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Bt(t) {
  return $d.call(t);
}
// @__NO_SIDE_EFFECTS__
function Yt(t) {
  return Fd.call(t);
}
function _(t, e) {
  if (!F)
    return /* @__PURE__ */ Bt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(Q)
  );
  if (n === null)
    n = Q.appendChild(Ct());
  else if (e && n.nodeType !== wl) {
    var i = Ct();
    return n?.before(i), ze(i), i;
  }
  return ze(n), n;
}
function de(t, e = !1) {
  if (!F) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Bt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
  if (e && Q?.nodeType !== wl) {
    var i = Ct();
    return Q?.before(i), ze(i), i;
  }
  return Q;
}
function y(t, e = 1, n = !1) {
  let i = F ? Q : t;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(i);
  if (!F)
    return i;
  if (n && i?.nodeType !== wl) {
    var s = Ct();
    return i === null ? r?.after(s) : i.before(s), ze(s), s;
  }
  return ze(i), /** @type {TemplateNode} */
  i;
}
function Ud(t) {
  t.textContent = "";
}
function Hd() {
  return !1;
}
function Gm(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, qn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Hc = !1;
function Wd() {
  Hc || (Hc = !0, document.addEventListener(
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
function Oo(t) {
  var e = Y, n = z;
  lt(null), Tt(null);
  try {
    return t();
  } finally {
    lt(e), Tt(n);
  }
}
function Vd(t, e, n, i = n) {
  t.addEventListener(e, () => Oo(n));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), i(!0);
  } : t.__on_r = () => i(!0), Wd();
}
function zd(t) {
  z === null && Y === null && Cm(), Y !== null && (Y.f & wt) !== 0 && z === null && Im(), gi && Em();
}
function Km(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ft(t, e, n, i = !0) {
  var r = z;
  r !== null && (r.f & mt) !== 0 && (t |= mt);
  var s = {
    ctx: Ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | ut,
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
      Br(s), s.f |= vl;
    } catch (l) {
      throw De(s), l;
    }
  else e !== null && li(s);
  if (i) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & _i) === 0 && (o = o.first, (t & mn) !== 0 && (t & oi) !== 0 && o !== null && (o.f |= oi)), o !== null && (o.parent = r, r !== null && Km(o, r), Y !== null && (Y.f & Ye) !== 0 && (t & Bn) === 0)) {
      var a = (
        /** @type {Derived} */
        Y
      );
      (a.effects ??= []).push(o);
    }
  }
  return s;
}
function Ym() {
  return Y !== null && !Pt;
}
function us(t) {
  const e = Ft(Ro, null, !1);
  return Ke(e, Ge), e.teardown = t, e;
}
function La(t) {
  zd();
  var e = (
    /** @type {Effect} */
    z.f
  ), n = !Y && (e & _n) !== 0 && (e & vl) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      Ce
    );
    (i.e ??= []).push(t);
  } else
    return jd(t);
}
function jd(t) {
  return Ft(gl | yd, t, !1);
}
function Qm(t) {
  return zd(), Ft(Ro | yd, t, !0);
}
function Jm(t) {
  xt.ensure();
  const e = Ft(Bn | _i, t, !0);
  return () => {
    De(e);
  };
}
function Xm(t) {
  xt.ensure();
  const e = Ft(Bn | _i, t, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? xi(e, () => {
      De(e), i(void 0);
    }) : (De(e), i(void 0));
  });
}
function ds(t) {
  return Ft(gl, t, !1);
}
function Zm(t) {
  return Ft(bl | _i, t, !0);
}
function Lo(t, e = 0) {
  return Ft(Ro | e, t, !0);
}
function re(t, e = [], n = [], i = []) {
  Nd(i, e, n, (r) => {
    Ft(Ro, () => t(...r.map(b)), !0);
  });
}
function Zi(t, e = 0) {
  var n = Ft(mn | e, t, !0);
  return n;
}
function ot(t, e = !0) {
  return Ft(_n | _i, t, !0, e);
}
function Bd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = gi, i = Y;
    Vc(!0), lt(null);
    try {
      e.call(null);
    } finally {
      Vc(n), lt(i);
    }
  }
}
function qd(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Oo(() => {
      r.abort(Ri);
    });
    var i = n.next;
    (n.f & Bn) !== 0 ? n.parent = null : De(n, e), n = i;
  }
}
function e_(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & _n) === 0 && De(e), e = n;
  }
}
function De(t, e = !0) {
  var n = !1;
  (e || (t.f & vm) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (t_(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), qd(t, e && !n), Qs(t, 0), Ke(t, ln);
  var i = t.transitions;
  if (i !== null)
    for (const s of i)
      s.stop();
  Bd(t);
  var r = t.parent;
  r !== null && r.first !== null && Gd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function t_(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(t)
    );
    t.remove(), t = n;
  }
}
function Gd(t) {
  var e = t.parent, n = t.prev, i = t.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = n));
}
function xi(t, e, n = !0) {
  var i = [];
  Tl(t, i, !0), Kd(i, () => {
    n && De(t), e && e();
  });
}
function Kd(t, e) {
  var n = t.length;
  if (n > 0) {
    var i = () => --n || e();
    for (var r of t)
      r.out(i);
  } else
    e();
}
function Tl(t, e, n) {
  if ((t.f & mt) === 0) {
    if (t.f ^= mt, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var r = i.next, s = (i.f & oi) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & _n) !== 0 && (t.f & mn) !== 0;
      Tl(i, e, s ? n : !1), i = r;
    }
  }
}
function Sl(t) {
  Yd(t, !0);
}
function Yd(t, e) {
  if ((t.f & mt) !== 0) {
    t.f ^= mt, (t.f & Ge) === 0 && (Ke(t, ut), li(t));
    for (var n = t.first; n !== null; ) {
      var i = n.next, r = (n.f & oi) !== 0 || (n.f & _n) !== 0;
      Yd(n, r ? e : !1), n = i;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
function Qd(t, e) {
  for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
    var r = n === i ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(n)
    );
    e.append(n), n = r;
  }
}
let Oi = !1;
function Wc(t) {
  Oi = t;
}
let gi = !1;
function Vc(t) {
  gi = t;
}
let Y = null, Pt = !1;
function lt(t) {
  Y = t;
}
let z = null;
function Tt(t) {
  z = t;
}
let cn = null;
function Jd(t) {
  Y !== null && (cn === null ? cn = [t] : cn.push(t));
}
let Je = null, ht = 0, vt = null;
function n_(t) {
  vt = t;
}
let Xd = 1, jr = 0, ri = jr;
function zc(t) {
  ri = t;
}
let Pn = !1;
function Zd() {
  return ++Xd;
}
function hs(t) {
  var e = t.f;
  if ((e & ut) !== 0)
    return !0;
  if ((e & gn) !== 0) {
    var n = t.deps, i = (e & wt) !== 0;
    if (e & Ye && (t.f &= ~Gs), n !== null) {
      var r, s, o = (e & qs) !== 0, a = i && z !== null && !Pn, l = n.length;
      if ((o || a) && (z === null || (z.f & ln) === 0)) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (r = 0; r < l; r++)
          s = n[r], (o || !s?.reactions?.includes(c)) && (s.reactions ??= []).push(c);
        o && (c.f ^= qs), a && d !== null && (d.f & wt) === 0 && (c.f ^= wt);
      }
      for (r = 0; r < l; r++)
        if (s = n[r], hs(
          /** @type {Derived} */
          s
        ) && Od(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!i || z !== null && !Pn) && Ke(t, Ge);
  }
  return !1;
}
function eh(t, e, n = !0) {
  var i = t.reactions;
  if (i !== null && !cn?.includes(t))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & Ye) !== 0 ? eh(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? Ke(s, ut) : (s.f & Ge) !== 0 && Ke(s, gn), li(
        /** @type {Effect} */
        s
      ));
    }
}
function th(t) {
  var e = Je, n = ht, i = vt, r = Y, s = Pn, o = cn, a = Ce, l = Pt, c = ri, d = t.f;
  Je = /** @type {null | Value[]} */
  null, ht = 0, vt = null, Pn = (d & wt) !== 0 && (Pt || !Oi || Y === null), Y = (d & (_n | Bn)) === 0 ? t : null, cn = null, Wi(t.ctx), Pt = !1, ri = ++jr, t.ac !== null && (Oo(() => {
    t.ac.abort(Ri);
  }), t.ac = null);
  try {
    t.f |= Aa;
    var h = (
      /** @type {Function} */
      t.fn
    ), u = h(), f = t.deps;
    if (Je !== null) {
      var p;
      if (Qs(t, ht), f !== null && ht > 0)
        for (f.length = ht + Je.length, p = 0; p < Je.length; p++)
          f[ht + p] = Je[p];
      else
        t.deps = f = Je;
      if (!Pn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ye) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = ht; p < f.length; p++)
          (f[p].reactions ??= []).push(t);
    } else f !== null && ht < f.length && (Qs(t, ht), f.length = ht);
    if (ls() && vt !== null && !Pt && f !== null && (t.f & (Ye | gn | ut)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      vt.length; p++)
        eh(
          vt[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (jr++, vt !== null && (i === null ? i = vt : i.push(.../** @type {Source[]} */
    vt))), (t.f & ii) !== 0 && (t.f ^= ii), u;
  } catch (g) {
    return kd(g);
  } finally {
    t.f ^= Aa, Je = e, ht = n, vt = i, Y = r, Pn = s, cn = o, Wi(a), Pt = l, ri = c;
  }
}
function i_(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var i = fm.call(n, t);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = e.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (e.f & Ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Je === null || !Je.includes(e)) && (Ke(e, gn), (e.f & (wt | qs)) === 0 && (e.f ^= qs), xd(
    /** @type {Derived} **/
    e
  ), Qs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Qs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var i = e; i < n.length; i++)
      i_(t, n[i]);
}
function Br(t) {
  var e = t.f;
  if ((e & ln) === 0) {
    Ke(t, Ge);
    var n = z, i = Oi;
    z = t, Oi = !0;
    try {
      (e & mn) !== 0 ? e_(t) : qd(t), Bd(t);
      var r = th(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Xd;
      var s;
      gd && Lm && (t.f & ut) !== 0 && t.deps;
    } finally {
      Oi = i, z = n;
    }
  }
}
async function r_() {
  await Promise.resolve(), ft();
}
function b(t) {
  var e = t.f, n = (e & Ye) !== 0;
  if (Y !== null && !Pt) {
    var i = z !== null && (z.f & ln) !== 0;
    if (!i && !cn?.includes(t)) {
      var r = Y.deps;
      if ((Y.f & Aa) !== 0)
        t.rv < jr && (t.rv = jr, Je === null && r !== null && r[ht] === t ? ht++ : Je === null ? Je = [t] : (!Pn || !Je.includes(t)) && Je.push(t));
      else {
        (Y.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Y] : s.includes(Y) || s.push(Y);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), a = o.parent;
    a !== null && (a.f & wt) === 0 && (o.f ^= wt);
  }
  if (gi) {
    if (Ln.has(t))
      return Ln.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return ((o.f & Ge) === 0 && o.reactions !== null || nh(o)) && (l = Il(o)), Ln.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Rt?.has(o))
      return Rt.get(o);
    hs(o) && Od(o);
  }
  if (Rt?.has(t))
    return Rt.get(t);
  if ((t.f & ii) !== 0)
    throw t.v;
  return t.v;
}
function nh(t) {
  if (t.v === We) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ln.has(e) || (e.f & Ye) !== 0 && nh(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function qt(t) {
  var e = Pt;
  try {
    return Pt = !0, t();
  } finally {
    Pt = e;
  }
}
const s_ = -7169;
function Ke(t, e) {
  t.f = t.f & s_ | e;
}
function Ai(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Vt in t)
      Da(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Vt in n && Da(n);
      }
  }
}
function Da(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let i in t)
      try {
        Da(t[i], e);
      } catch {
      }
    const n = _l(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const i = vd(n);
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
const ih = /* @__PURE__ */ new Set(), Ma = /* @__PURE__ */ new Set();
function rh(t, e, n, i = {}) {
  function r(s) {
    if (i.capture || Ir.call(e, s), !s.cancelBubble)
      return Oo(() => n?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? qn(() => {
    e.addEventListener(t, r, i);
  }) : e.addEventListener(t, r, i), r;
}
function Js(t, e, n, i, r) {
  var s = { capture: i, passive: r }, o = rh(t, e, n, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && us(() => {
    e.removeEventListener(t, o, s);
  });
}
function er(t) {
  for (var e = 0; e < t.length; e++)
    ih.add(t[e]);
  for (var n of Ma)
    n(t);
}
let jc = null;
function Ir(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, r = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  jc = t;
  var o = 0, a = jc === t && t.__root;
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
    zr(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = Y, h = z;
    lt(null), Tt(null);
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
      t.__root = e, delete t.currentTarget, lt(d), Tt(h);
    }
  }
}
function sh(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function un(t, e) {
  var n = (
    /** @type {Effect} */
    z
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function W(t, e) {
  var n = (e & lm) !== 0, i = (e & cm) !== 0, r, s = !t.startsWith("<!>");
  return () => {
    if (F)
      return un(Q, null), Q;
    r === void 0 && (r = sh(s ? t : "<!>" + t), n || (r = /** @type {Node} */
    /* @__PURE__ */ Bt(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Md ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      un(a, l);
    } else
      un(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function o_(t, e, n = "svg") {
  var i = !t.startsWith("<!>"), r = `<${n}>${i ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (F)
      return un(Q, null), Q;
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        sh(r)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ Bt(o)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Bt(a);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return un(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function a_(t, e) {
  return /* @__PURE__ */ o_(t, e, "svg");
}
function Te() {
  if (F)
    return un(Q, null), Q;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ct();
  return t.append(e, n), un(e, n), t;
}
function O(t, e) {
  if (F) {
    z.nodes_end = Q, ai();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function l_(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const c_ = [
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
function u_(t) {
  return c_.includes(t);
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
function h_(t) {
  return t = t.toLowerCase(), d_[t] ?? t;
}
const f_ = ["touchstart", "touchmove"];
function p_(t) {
  return f_.includes(t);
}
const m_ = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function __(t) {
  return m_.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function L(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function oh(t, e) {
  return ah(t, e);
}
function g_(t, e) {
  Oa(), e.intro = e.intro ?? !1;
  const n = e.target, i = F, r = Q;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n)
    ); s && (s.nodeType !== Ji || /** @type {Comment} */
    s.data !== _d); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Yt(s);
    if (!s)
      throw Hi;
    pt(!0), ze(
      /** @type {Comment} */
      s
    );
    const o = ah(t, { ...e, anchor: s });
    return pt(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Hi && console.warn("Failed to hydrate: ", o), e.recover === !1 && Sm(), Oa(), Ud(n), pt(!1), oh(t, e);
  } finally {
    pt(i), ze(r);
  }
}
const Ti = /* @__PURE__ */ new Map();
function ah(t, { target: e, anchor: n, props: i = {}, events: r, context: s, intro: o = !0 }) {
  Oa();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var u = 0; u < h.length; u++) {
      var f = h[u];
      if (!a.has(f)) {
        a.add(f);
        var p = p_(f);
        e.addEventListener(f, Ir, { passive: p });
        var g = Ti.get(f);
        g === void 0 ? (document.addEventListener(f, Ir, { passive: p }), Ti.set(f, 1)) : Ti.set(f, g + 1);
      }
    }
  };
  l(ml(ih)), Ma.add(l);
  var c = void 0, d = Xm(() => {
    var h = n ?? e.appendChild(Ct());
    return Hm(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (u) => {
        if (s) {
          vn({});
          var f = (
            /** @type {ComponentContext} */
            Ce
          );
          f.c = s;
        }
        if (r && (i.$$events = r), F && un(
          /** @type {TemplateNode} */
          u,
          null
        ), c = t(u, i) || {}, F && (z.nodes_end = Q, Q === null || Q.nodeType !== Ji || /** @type {Comment} */
        Q.data !== fl))
          throw No(), Hi;
        s && bn();
      }
    ), () => {
      for (var u of a) {
        e.removeEventListener(u, Ir);
        var f = (
          /** @type {number} */
          Ti.get(u)
        );
        --f === 0 ? (document.removeEventListener(u, Ir), Ti.delete(u)) : Ti.set(u, f);
      }
      Ma.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return $a.set(c, d), c;
}
let $a = /* @__PURE__ */ new WeakMap();
function v_(t, e) {
  const n = $a.get(t);
  return n ? ($a.delete(t), n(e)) : Promise.resolve();
}
class lh {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #i = /* @__PURE__ */ new Map();
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
      ce
    );
    if (this.#t.has(e)) {
      var n = (
        /** @type {Key} */
        this.#t.get(e)
      ), i = this.#e.get(n);
      if (i)
        Sl(i);
      else {
        var r = this.#i.get(n);
        r && (this.#e.set(n, r.effect), this.#i.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
      }
      for (const [s, o] of this.#t) {
        if (this.#t.delete(s), s === e)
          break;
        const a = this.#i.get(o);
        a && (De(a.effect), this.#i.delete(o));
      }
      for (const [s, o] of this.#e) {
        if (s === n) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var c = document.createDocumentFragment();
            Qd(o, c), c.append(Ct()), this.#i.set(s, { effect: o, fragment: c });
          } else
            De(o);
          this.#e.delete(s);
        };
        this.#r || !i ? xi(o, a, !1) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    this.#t.delete(e);
    const n = Array.from(this.#t.values());
    for (const [i, r] of this.#i)
      n.includes(i) || (De(r.effect), this.#i.delete(i));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var i = (
      /** @type {Batch} */
      ce
    ), r = Hd();
    if (n && !this.#e.has(e) && !this.#i.has(e))
      if (r) {
        var s = document.createDocumentFragment(), o = Ct();
        s.append(o), this.#i.set(e, {
          effect: ot(() => n(o)),
          fragment: s
        });
      } else
        this.#e.set(
          e,
          ot(() => n(this.anchor))
        );
    if (this.#t.set(i, e), r) {
      for (const [a, l] of this.#e)
        a === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [a, l] of this.#i)
        a === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(this.#l), i.ondiscard(this.#o);
    } else
      F && (this.anchor = Q), this.#l();
  }
}
function fs(t) {
  Ce === null && wd(), Xi && Ce.l !== null ? y_(Ce).m.push(t) : La(() => {
    const e = qt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function b_(t) {
  Ce === null && wd(), fs(() => () => qt(t));
}
function y_(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function be(t, e, n = !1) {
  F && ai();
  var i = new lh(t), r = n ? oi : 0;
  function s(o, a) {
    if (F) {
      const c = Ed(t) === Ao;
      if (o === c) {
        var l = Ks();
        ze(l), i.anchor = l, pt(!1), i.ensure(o, a), pt(!0);
        return;
      }
    }
    i.ensure(o, a);
  }
  Zi(() => {
    var o = !1;
    e((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, r);
}
function Do(t, e) {
  return e;
}
function w_(t, e, n) {
  for (var i = t.items, r = [], s = e.length, o = 0; o < s; o++)
    Tl(e[o].e, r, !0);
  var a = s > 0 && r.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ud(l), l.append(
      /** @type {Element} */
      n
    ), i.clear(), Ht(t, e[0].prev, e[s - 1].next);
  }
  Kd(r, () => {
    for (var c = 0; c < s; c++) {
      var d = e[c];
      a || (i.delete(d.k), Ht(t, d.prev, d.next)), De(d.e, !a);
    }
  });
}
function tr(t, e, n, i, r, s = null) {
  var o = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & pd) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = F ? ze(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Bt(c)
    ) : c.appendChild(Ct());
  }
  F && ai();
  var d = null, h = !1, u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ El(() => {
    var T = n();
    return pl(T) ? T : T == null ? [] : ml(T);
  }), p, g;
  function E() {
    E_(
      g,
      p,
      a,
      u,
      o,
      r,
      e,
      i,
      n
    ), s !== null && (p.length === 0 ? d ? Sl(d) : d = ot(() => s(o)) : d !== null && xi(d, () => {
      d = null;
    }));
  }
  Zi(() => {
    g ??= /** @type {Effect} */
    z, p = /** @type {V[]} */
    b(f);
    var T = p.length;
    if (h && T === 0)
      return;
    h = T === 0;
    let S = !1;
    if (F) {
      var k = Ed(o) === Ao;
      k !== (T === 0) && (o = Ks(), ze(o), pt(!1), S = !0);
    }
    if (F) {
      for (var A = null, D, I = 0; I < T; I++) {
        if (Q.nodeType === Ji && /** @type {Comment} */
        Q.data === fl) {
          o = /** @type {Comment} */
          Q, S = !0, pt(!1);
          break;
        }
        var w = p[I], v = i(w, I);
        D = Fa(
          Q,
          a,
          A,
          null,
          w,
          v,
          I,
          r,
          e,
          n
        ), a.items.set(v, D), A = D;
      }
      T > 0 && ze(Ks());
    }
    if (F)
      T === 0 && s && (d = ot(() => s(o)));
    else if (Hd()) {
      var R = /* @__PURE__ */ new Set(), P = (
        /** @type {Batch} */
        ce
      );
      for (I = 0; I < T; I += 1) {
        w = p[I], v = i(w, I);
        var V = a.items.get(v) ?? u.get(v);
        V ? (e & (So | ko)) !== 0 && ch(V, w, I, e) : (D = Fa(
          null,
          a,
          null,
          null,
          w,
          v,
          I,
          r,
          e,
          n,
          !0
        ), u.set(v, D)), R.add(v);
      }
      for (const [M, H] of a.items)
        R.has(M) || P.skipped_effects.add(H.e);
      P.oncommit(E);
    } else
      E();
    S && pt(!0), b(f);
  }), F && (o = Q);
}
function E_(t, e, n, i, r, s, o, a, l) {
  var c = (o & nm) !== 0, d = (o & (So | ko)) !== 0, h = e.length, u = n.items, f = n.first, p = f, g, E = null, T, S = [], k = [], A, D, I, w;
  if (c)
    for (w = 0; w < h; w += 1)
      A = e[w], D = a(A, w), I = u.get(D), I !== void 0 && (I.a?.measure(), (T ??= /* @__PURE__ */ new Set()).add(I));
  for (w = 0; w < h; w += 1) {
    if (A = e[w], D = a(A, w), I = u.get(D), I === void 0) {
      var v = i.get(D);
      if (v !== void 0) {
        i.delete(D), u.set(D, v);
        var R = E ? E.next : p;
        Ht(n, E, v), Ht(n, v, R), sa(v, R, r), E = v;
      } else {
        var P = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : r;
        E = Fa(
          P,
          n,
          E,
          E === null ? n.first : E.next,
          A,
          D,
          w,
          s,
          o,
          l
        );
      }
      u.set(D, E), S = [], k = [], p = E.next;
      continue;
    }
    if (d && ch(I, A, w, o), (I.e.f & mt) !== 0 && (Sl(I.e), c && (I.a?.unfix(), (T ??= /* @__PURE__ */ new Set()).delete(I))), I !== p) {
      if (g !== void 0 && g.has(I)) {
        if (S.length < k.length) {
          var V = k[0], M;
          E = V.prev;
          var H = S[0], J = S[S.length - 1];
          for (M = 0; M < S.length; M += 1)
            sa(S[M], V, r);
          for (M = 0; M < k.length; M += 1)
            g.delete(k[M]);
          Ht(n, H.prev, J.next), Ht(n, E, H), Ht(n, J, V), p = V, E = J, w -= 1, S = [], k = [];
        } else
          g.delete(I), sa(I, p, r), Ht(n, I.prev, I.next), Ht(n, I, E === null ? n.first : E.next), Ht(n, E, I), E = I;
        continue;
      }
      for (S = [], k = []; p !== null && p.k !== D; )
        (p.e.f & mt) === 0 && (g ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
      I = p;
    }
    S.push(I), E = I, p = I.next;
  }
  if (p !== null || g !== void 0) {
    for (var U = g === void 0 ? [] : ml(g); p !== null; )
      (p.e.f & mt) === 0 && U.push(p), p = p.next;
    var K = U.length;
    if (K > 0) {
      var oe = (o & pd) !== 0 && h === 0 ? r : null;
      if (c) {
        for (w = 0; w < K; w += 1)
          U[w].a?.measure();
        for (w = 0; w < K; w += 1)
          U[w].a?.fix();
      }
      w_(n, U, oe);
    }
  }
  c && qn(() => {
    if (T !== void 0)
      for (I of T)
        I.a?.apply();
  }), t.first = n.first && n.first.e, t.last = E && E.e;
  for (var X of i.values())
    De(X.e);
  i.clear();
}
function ch(t, e, n, i) {
  (i & So) !== 0 && zi(t.v, e), (i & ko) !== 0 ? zi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Fa(t, e, n, i, r, s, o, a, l, c, d) {
  var h = (l & So) !== 0, u = (l & im) === 0, f = h ? u ? /* @__PURE__ */ Cl(r, !1, !1) : Hn(r) : r, p = (l & ko) === 0 ? o : Hn(o), g = {
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
      E.append(t = Ct());
    }
    return g.e = ot(() => a(
      /** @type {Node} */
      t,
      f,
      p,
      c
    ), F), g.e.prev = n && n.e, g.e.next = i && i.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), i !== null && (i.prev = g, i.e.prev = g.e), g;
  } finally {
  }
}
function sa(t, e, n) {
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
      /* @__PURE__ */ Yt(s)
    );
    r.before(s), s = o;
  }
}
function Ht(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Pe(t, e, n, i, r) {
  F && ai();
  var s = e.$$slots?.[n], o = !1;
  s === !0 && (s = e.children, o = !0), s === void 0 || s(t, o ? () => i : i);
}
function I_(t, e, n, i, r, s) {
  let o = F;
  F && ai();
  var a = null;
  F && Q.nodeType === ym && (a = /** @type {Element} */
  Q, ai());
  var l = (
    /** @type {TemplateNode} */
    F ? Q : t
  ), c = new lh(l, !1);
  Zi(() => {
    const d = e() || null;
    var h = dm;
    if (d === null) {
      c.ensure(null, null);
      return;
    }
    return c.ensure(d, (u) => {
      if (d) {
        if (a = F ? (
          /** @type {Element} */
          a
        ) : document.createElementNS(h, d), un(a, a), i) {
          F && __(d) && a.append(document.createComment(""));
          var f = (
            /** @type {TemplateNode} */
            F ? /* @__PURE__ */ Bt(a) : a.appendChild(Ct())
          );
          F && (f === null ? pt(!1) : ze(f)), i(a, f);
        }
        z.nodes_end = a, u.before(a);
      }
      F && ze(u);
    }), () => {
    };
  }, oi), us(() => {
  }), o && (pt(!0), ze(l));
}
function Gn(t, e) {
  ds(() => {
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
function C_(t, e) {
  var n = void 0, i;
  Zi(() => {
    n !== (n = e()) && (i && (De(i), i = null), n && (i = ot(() => {
      ds(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function uh(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (n = uh(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function T_() {
  for (var t, e, n = 0, i = "", r = arguments.length; n < r; n++) (t = arguments[n]) && (e = uh(t)) && (i && (i += " "), i += e);
  return i;
}
function S_(t) {
  return typeof t == "object" ? T_(t) : t ?? "";
}
const Bc = [...` 	
\r\f \v\uFEFF`];
function k_(t, e, n) {
  var i = t == null ? "" : "" + t;
  if (e && (i = i ? i + " " + e : e), n) {
    for (var r in n)
      if (n[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, o = 0; (o = i.indexOf(r, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || Bc.includes(i[o - 1])) && (a === i.length || Bc.includes(i[a])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(a + 1) : o = a;
        }
  }
  return i === "" ? null : i;
}
function qc(t, e = !1) {
  var n = e ? " !important;" : ";", i = "";
  for (var r in t) {
    var s = t[r];
    s != null && s !== "" && (i += " " + r + ": " + s + n);
  }
  return i;
}
function oa(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function A_(t, e) {
  if (e) {
    var n = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, a = !1, l = [];
      i && l.push(...Object.keys(i).map(oa)), r && l.push(...Object.keys(r).map(oa));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var u = t[h];
        if (a ? u === "/" && t[h - 1] === "*" && (a = !1) : s ? s === u && (s = !1) : u === "/" && t[h + 1] === "*" ? a = !0 : u === '"' || u === "'" ? s = u : u === "(" ? o++ : u === ")" && o--, !a && s === !1 && o === 0) {
          if (u === ":" && d === -1)
            d = h;
          else if (u === ";" || h === g - 1) {
            if (d !== -1) {
              var f = oa(t.substring(c, d).trim());
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
    return i && (n += qc(i)), r && (n += qc(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function qr(t, e, n, i, r, s) {
  var o = t.__className;
  if (F || o !== n || o === void 0) {
    var a = k_(n, i, s);
    (!F || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && t.classList.toggle(l, c);
    }
  return s;
}
function aa(t, e = {}, n, i) {
  for (var r in n) {
    var s = n[r];
    e[r] !== s && (n[r] == null ? t.style.removeProperty(r) : t.style.setProperty(r, s, i));
  }
}
function R_(t, e, n, i) {
  var r = t.__style;
  if (F || r !== e) {
    var s = A_(e, i);
    (!F || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else i && (Array.isArray(i) ? (aa(t, n?.[0], i[0]), aa(t, n?.[1], i[1], "important")) : aa(t, n, i));
  return i;
}
function Gr(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!pl(e))
      return xm();
    for (var i of t.options)
      i.selected = e.includes(xr(i));
    return;
  }
  for (i of t.options) {
    var r = xr(i);
    if (qm(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function kl(t) {
  var e = new MutationObserver(() => {
    Gr(t, t.__value);
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
  }), us(() => {
    e.disconnect();
  });
}
function P_(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet(), r = !0;
  Vd(t, "change", (s) => {
    var o = s ? "[selected]" : ":checked", a;
    if (t.multiple)
      a = [].map.call(t.querySelectorAll(o), xr);
    else {
      var l = t.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      a = l && xr(l);
    }
    n(a), ce !== null && i.add(ce);
  }), ds(() => {
    var s = e();
    if (t === document.activeElement) {
      var o = (
        /** @type {Batch} */
        Rr ?? ce
      );
      if (i.has(o))
        return;
    }
    if (Gr(t, s, r), r && s === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (s = xr(a), n(s));
    }
    t.__value = s, r = !1;
  }), kl(t);
}
function xr(t) {
  return "__value" in t ? t.__value : t.value;
}
const _r = Symbol("class"), gr = Symbol("style"), dh = Symbol("is custom element"), hh = Symbol("is html");
function Ua(t) {
  if (F) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var i = t.value;
          ke(t, "value", null), t.value = i;
        }
        if (t.hasAttribute("checked")) {
          var r = t.checked;
          ke(t, "checked", null), t.checked = r;
        }
      }
    };
    t.__on_r = n, qn(n), Wd();
  }
}
function N_(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ke(t, e, n, i) {
  var r = fh(t);
  F && (r[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || r[e] !== (r[e] = n) && (e === "loading" && (t[bm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && ph(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function x_(t, e, n, i, r = !1, s = !1) {
  if (F && r && t.tagName === "INPUT") {
    var o = (
      /** @type {HTMLInputElement} */
      t
    ), a = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Ua(o);
  }
  var l = fh(t), c = l[dh], d = !l[hh];
  let h = F && c;
  h && pt(!1);
  var u = e || {}, f = t.tagName === "OPTION";
  for (var p in e)
    p in n || (n[p] = null);
  n.class ? n.class = S_(n.class) : n[_r] && (n.class = null), n[gr] && (n.style ??= null);
  var g = ph(t);
  for (const I in n) {
    let w = n[I];
    if (f && I === "value" && w == null) {
      t.value = t.__value = "", u[I] = w;
      continue;
    }
    if (I === "class") {
      var E = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      qr(t, E, w, i, e?.[_r], n[_r]), u[I] = w, u[_r] = n[_r];
      continue;
    }
    if (I === "style") {
      R_(t, w, e?.[gr], n[gr]), u[I] = w, u[gr] = n[gr];
      continue;
    }
    var T = u[I];
    if (!(w === T && !(w === void 0 && t.hasAttribute(I)))) {
      u[I] = w;
      var S = I[0] + I[1];
      if (S !== "$$")
        if (S === "on") {
          const v = {}, R = "$$" + I;
          let P = I.slice(2);
          var k = u_(P);
          if (l_(P) && (P = P.slice(0, -7), v.capture = !0), !k && T) {
            if (w != null) continue;
            t.removeEventListener(P, u[R], v), u[R] = null;
          }
          if (w != null)
            if (k)
              t[`__${P}`] = w, er([P]);
            else {
              let V = function(M) {
                u[I].call(this, M);
              };
              u[R] = rh(P, t, V, v);
            }
          else k && (t[`__${P}`] = void 0);
        } else if (I === "style")
          ke(t, I, w);
        else if (I === "autofocus")
          Gm(
            /** @type {HTMLElement} */
            t,
            !!w
          );
        else if (!c && (I === "__value" || I === "value" && w != null))
          t.value = t.__value = w;
        else if (I === "selected" && f)
          N_(
            /** @type {HTMLOptionElement} */
            t,
            w
          );
        else {
          var A = I;
          d || (A = h_(A));
          var D = A === "defaultValue" || A === "defaultChecked";
          if (w == null && !c && !D)
            if (l[I] = null, A === "value" || A === "checked") {
              let v = (
                /** @type {HTMLInputElement} */
                t
              );
              const R = e === void 0;
              if (A === "value") {
                let P = v.defaultValue;
                v.removeAttribute(A), v.defaultValue = P, v.value = v.__value = R ? P : null;
              } else {
                let P = v.defaultChecked;
                v.removeAttribute(A), v.defaultChecked = P, v.checked = R ? P : !1;
              }
            } else
              t.removeAttribute(I);
          else D || g.includes(A) && (c || typeof w != "string") ? (t[A] = w, A in l && (l[A] = We)) : typeof w != "function" && ke(t, A, w);
        }
    }
  }
  return h && pt(!0), u;
}
function Gc(t, e, n = [], i = [], r = [], s, o = !1, a = !1) {
  Nd(r, n, i, (l) => {
    var c = void 0, d = {}, h = t.nodeName === "SELECT", u = !1;
    if (Zi(() => {
      var p = e(...l.map(b)), g = x_(
        t,
        c,
        p,
        s,
        o,
        a
      );
      u && h && "value" in p && Gr(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let T of Object.getOwnPropertySymbols(d))
        p[T] || De(d[T]);
      for (let T of Object.getOwnPropertySymbols(p)) {
        var E = p[T];
        T.description === hm && (!c || E !== c[T]) && (d[T] && De(d[T]), d[T] = ot(() => C_(t, () => E))), g[T] = E;
      }
      c = g;
    }), h) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ds(() => {
        Gr(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), kl(f);
      });
    }
    u = !0;
  });
}
function fh(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [dh]: t.nodeName.includes("-"),
      [hh]: t.namespaceURI === um
    }
  );
}
var Kc = /* @__PURE__ */ new Map();
function ph(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Kc.get(e);
  if (n) return n;
  Kc.set(e, n = []);
  for (var i, r = t, s = Element.prototype; s !== r; ) {
    i = vd(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = _l(r);
  }
  return n;
}
function Yc(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet();
  Vd(t, "input", async (r) => {
    var s = r ? t.defaultValue : t.value;
    if (s = la(t) ? ca(s) : s, n(s), ce !== null && i.add(ce), await r_(), s !== (s = e())) {
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
  qt(e) == null && t.value) && (n(la(t) ? ca(t.value) : t.value), ce !== null && i.add(ce)), Lo(() => {
    var r = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Rr ?? ce
      );
      if (i.has(s))
        return;
    }
    la(t) && r === ca(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function la(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ca(t) {
  return t === "" ? null : +t;
}
function Qc(t, e) {
  return t === e || t?.[Vt] === e;
}
function O_(t = {}, e, n, i) {
  return ds(() => {
    var r, s;
    return Lo(() => {
      r = s, s = [], qt(() => {
        t !== n(...s) && (e(t, ...s), r && Qc(n(...r), t) && e(null, ...r));
      });
    }), () => {
      qn(() => {
        s && Qc(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function mh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Ce
  ), n = e.l.u;
  if (!n) return;
  let i = () => Ai(e.s);
  if (t) {
    let r = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ cs(() => {
      let a = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== s[c] && (s[c] = l[c], a = !0);
      return a && r++, r;
    });
    i = () => b(o);
  }
  n.b.length && Qm(() => {
    Jc(e, i), Bs(n.b);
  }), La(() => {
    const r = qt(() => n.m.map(_m));
    return () => {
      for (const s of r)
        typeof s == "function" && s();
    };
  }), n.a.length && La(() => {
    Jc(e, i), Bs(n.a);
  });
}
function Jc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) b(n);
  e();
}
function Al(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), On;
  const i = qt(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Si = [];
function L_(t, e) {
  return {
    subscribe: nr(t, e).subscribe
  };
}
function nr(t, e = On) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Cd(t, a) && (t = a, n)) {
      const l = !Si.length;
      for (const c of i)
        c[1](), Si.push(c, t);
      if (l) {
        for (let c = 0; c < Si.length; c += 2)
          Si[c][0](Si[c + 1]);
        Si.length = 0;
      }
    }
  }
  function s(a) {
    r(a(
      /** @type {T} */
      t
    ));
  }
  function o(a, l = On) {
    const c = [a, l];
    return i.add(c), i.size === 1 && (n = e(r, s) || On), a(
      /** @type {T} */
      t
    ), () => {
      i.delete(c), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
function D_(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return L_(n, (o, a) => {
    let l = !1;
    const c = [];
    let d = 0, h = On;
    const u = () => {
      if (d)
        return;
      h();
      const p = e(i ? c[0] : c, o, a);
      s ? o(p) : h = typeof p == "function" ? p : On;
    }, f = r.map(
      (p, g) => Al(
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
      Bs(f), h(), l = !1;
    };
  });
}
function M_(t) {
  let e;
  return Al(t, (n) => e = n)(), e;
}
let Os = !1, Ha = Symbol();
function si(t, e, n) {
  const i = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ Cl(void 0),
    unsubscribe: On
  };
  if (i.store !== t && !(Ha in n))
    if (i.unsubscribe(), i.store = t ?? null, t == null)
      i.source.v = void 0, i.unsubscribe = On;
    else {
      var r = !0;
      i.unsubscribe = Al(t, (s) => {
        r ? i.source.v = s : N(i.source, s);
      }), r = !1;
    }
  return t && Ha in n ? M_(t) : b(i.source);
}
function Rl() {
  const t = {};
  function e() {
    us(() => {
      for (var n in t)
        t[n].unsubscribe();
      zr(t, Ha, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function $_(t) {
  var e = Os;
  try {
    return Os = !1, [t(), Os];
  } finally {
    Os = e;
  }
}
const F_ = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return b(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var i = z;
      try {
        Tt(t.parent_effect), t.special[e] = bt(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          md
        );
      } finally {
        Tt(i);
      }
    }
    return t.special[e](n), Fc(t.version), !0;
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
    return t.exclude.includes(e) || (t.exclude.push(e), Fc(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Re(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Hn(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        z
      )
    },
    F_
  );
}
const U_ = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (mr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(t, e, n) {
    let i = t.props.length;
    for (; i--; ) {
      let r = t.props[i];
      mr(r) && (r = r());
      const s = an(r, e);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (mr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = an(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(t, e) {
    if (e === Vt || e === yl) return !1;
    for (let n of t.props)
      if (mr(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (mr(n) && (n = n()), !!n) {
        for (const i in n)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(n))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function He(...t) {
  return new Proxy({ props: t }, U_);
}
function bt(t, e, n, i) {
  var r = !Xi || (n & sm) !== 0, s = (n & om) !== 0, o = (n & am) !== 0, a = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, a = o ? qt(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), d;
  if (s) {
    var h = Vt in t || yl in t;
    d = an(t, e)?.set ?? (h && e in t ? (k) => t[e] = k : void 0);
  }
  var u, f = !1;
  s ? [u, f] = $_(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e], u === void 0 && i !== void 0 && (u = c(), d && (r && km(), d(u)));
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
  }, r && (n & md) === 0)
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, A) {
        return arguments.length > 0 ? ((!r || !A || g || f) && d(A ? p() : k), k) : p();
      })
    );
  }
  var E = !1, T = ((n & rm) !== 0 ? cs : El)(() => (E = !1, p()));
  s && b(T);
  var S = (
    /** @type {Effect} */
    z
  );
  return (
    /** @type {() => V} */
    (function(k, A) {
      if (arguments.length > 0) {
        const D = A ? b(T) : r && s ? nn(k) : k;
        return N(T, D), E = !0, a !== void 0 && (a = D), k;
      }
      return gi && E || (S.f & ln) !== 0 ? T.v : b(T);
    })
  );
}
function H_(t) {
  return new W_(t);
}
class W_ {
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
      var a = /* @__PURE__ */ Cl(o, !1, !1);
      return n.set(s, a), a;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return b(n.get(o) ?? i(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === yl ? !0 : (b(n.get(o) ?? i(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, a) {
          return N(n.get(o) ?? i(o, a), a), Reflect.set(s, o, a);
        }
      }
    );
    this.#e = (e.hydrate ? g_ : oh)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && ft(), this.#t = r.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || zr(this, s, {
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
      v_(this.#e);
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
let _h;
typeof HTMLElement == "function" && (_h = class extends HTMLElement {
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
          i !== "default" && (s.name = i), O(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = V_(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), e.default = !0) : e[i] = t(i));
      for (const i of this.attributes) {
        const r = this.$$g_p(i.name);
        r in this.$$d || (this.$$d[r] = Fs(r, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = H_({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Jm(() => {
        Lo(() => {
          this.$$r = !0;
          for (const i of js(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const r = Fs(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Fs(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return js(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Fs(t, e, n, i) {
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
function V_(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function fe(t, e, n, i, r, s) {
  let o = class extends _h {
    constructor() {
      super(t, n, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return js(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return js(e).forEach((a) => {
    zr(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Fs(a, l, e), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = an(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), i.forEach((a) => {
    zr(o.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
const z_ = () => {
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
const gh = {
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
    throw ir(e);
}, ir = function(t) {
  return new Error("Firebase Database (" + gh.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
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
const vh = function(t) {
  const e = [];
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t.charCodeAt(i);
    r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && i + 1 < t.length && (t.charCodeAt(i + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++i) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128);
  }
  return e;
}, j_ = function(t) {
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
}, Pl = {
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
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(vh(t), e);
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
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : j_(this.decodeStringToByteArray(t, e));
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
        throw new B_();
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
class B_ extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const bh = function(t) {
  const e = vh(t);
  return Pl.encodeByteArray(e, !0);
}, Xs = function(t) {
  return bh(t).replace(/\./g, "");
}, Zs = function(t) {
  try {
    return Pl.decodeString(t, !0);
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
function q_(t) {
  return yh(void 0, t);
}
function yh(t, e) {
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
    !e.hasOwnProperty(n) || !G_(n) || (t[n] = yh(t[n], e[n]));
  return t;
}
function G_(t) {
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
function K_() {
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
const Y_ = () => K_().__FIREBASE_DEFAULTS__, Q_ = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, J_ = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && Zs(t[1]);
  return e && JSON.parse(e);
}, Nl = () => {
  try {
    return z_() || Y_() || Q_() || J_();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, wh = (t) => Nl()?.emulatorHosts?.[t], Eh = (t) => {
  const e = wh(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const i = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), i] : [e.substring(0, n), i];
}, Ih = () => Nl()?.config, Ch = (t) => Nl()?.[`_${t}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps {
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
function vi(t) {
  try {
    return (t.startsWith("http://") || t.startsWith("https://") ? new URL(t).hostname : t).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function xl(t) {
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
function Th(t, e) {
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
    Xs(JSON.stringify(n)),
    Xs(JSON.stringify(o)),
    ""
  ].join(".");
}
const Or = {};
function X_() {
  const t = {
    prod: [],
    emulator: []
  };
  for (const e of Object.keys(Or))
    Or[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function Z_(t) {
  let e = document.getElementById(t), n = !1;
  return e || (e = document.createElement("div"), e.setAttribute("id", t), n = !0), { created: n, element: e };
}
let Xc = !1;
function Ol(t, e) {
  if (typeof window > "u" || typeof document > "u" || !vi(window.location.host) || Or[t] === e || Or[t] || // If already set to use emulator, can't go back to prod.
  Xc)
    return;
  Or[t] = e;
  function n(u) {
    return `__firebase__banner__${u}`;
  }
  const i = "__firebase__banner", s = X_().prod.length > 0;
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
      Xc = !0, o();
    }, u;
  }
  function d(u, f) {
    u.setAttribute("id", f), u.innerText = "Learn more", u.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend", u.setAttribute("target", "__blank"), u.style.paddingLeft = "5px", u.style.textDecoration = "underline";
  }
  function h() {
    const u = Z_(i), f = n("text"), p = document.getElementById(f) || document.createElement("span"), g = n("learnmore"), E = document.getElementById(g) || document.createElement("a"), T = n("preprendIcon"), S = document.getElementById(T) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (u.created) {
      const k = u.element;
      a(k), d(E, g);
      const A = c();
      l(S, T), k.append(S, p, E, A), document.body.appendChild(k);
    }
    s ? (p.innerText = "Preview backend disconnected.", S.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (S.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
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
function Ll() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et());
}
function eg() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function tg() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function Sh() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function ng() {
  const t = et();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function ig() {
  return gh.NODE_ADMIN === !0;
}
function rg() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function sg() {
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
const og = "FirebaseError";
class yn extends Error {
  constructor(e, n, i) {
    super(n), this.code = e, this.customData = i, this.name = og, Object.setPrototypeOf(this, yn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ms.prototype.create);
  }
}
class ms {
  constructor(e, n, i) {
    this.service = e, this.serviceName = n, this.errors = i;
  }
  create(e, ...n) {
    const i = n[0] || {}, r = `${this.service}/${e}`, s = this.errors[e], o = s ? ag(s, i) : "Error", a = `${this.serviceName}: ${o} (${r}).`;
    return new yn(r, a, i);
  }
}
function ag(t, e) {
  return t.replace(lg, (n, i) => {
    const r = e[i];
    return r != null ? String(r) : `<${i}?>`;
  });
}
const lg = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kr(t) {
  return JSON.parse(t);
}
function Le(t) {
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
const kh = function(t) {
  let e = {}, n = {}, i = {}, r = "";
  try {
    const s = t.split(".");
    e = Kr(Zs(s[0]) || ""), n = Kr(Zs(s[1]) || ""), r = s[2], i = n.d || {}, delete n.d;
  } catch {
  }
  return {
    header: e,
    claims: n,
    data: i,
    signature: r
  };
}, cg = function(t) {
  const e = kh(t), n = e.claims;
  return !!n && typeof n == "object" && n.hasOwnProperty("iat");
}, ug = function(t) {
  const e = kh(t).claims;
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
function Qt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ji(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e];
}
function Wa(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function eo(t, e, n) {
  const i = {};
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (i[r] = e.call(n, t[r], r, t));
  return i;
}
function ci(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), i = Object.keys(e);
  for (const r of n) {
    if (!i.includes(r))
      return !1;
    const s = t[r], o = e[r];
    if (Zc(s) && Zc(o)) {
      if (!ci(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const r of i)
    if (!n.includes(r))
      return !1;
  return !0;
}
function Zc(t) {
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
function bi(t) {
  const e = [];
  for (const [n, i] of Object.entries(t))
    Array.isArray(i) ? i.forEach((r) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
  return e.length ? "&" + e.join("&") : "";
}
function Cr(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((i) => {
    if (i) {
      const [r, s] = i.split("=");
      e[decodeURIComponent(r)] = decodeURIComponent(s);
    }
  }), e;
}
function Tr(t) {
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
class dg {
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
function hg(t, e) {
  const n = new fg(t, e);
  return n.subscribe.bind(n);
}
class fg {
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
    pg(e, [
      "next",
      "error",
      "complete"
    ]) ? r = e : r = {
      next: e,
      error: n,
      complete: i
    }, r.next === void 0 && (r.next = ua), r.error === void 0 && (r.error = ua), r.complete === void 0 && (r.complete = ua);
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
function pg(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function ua() {
}
function Mo(t, e) {
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
const mg = function(t) {
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
}, $o = function(t) {
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
function Me(t) {
  return t && t._delegate ? t._delegate : t;
}
class Wn {
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
const Xn = "[DEFAULT]";
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
class _g {
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
      const i = new ps();
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
      if (vg(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Xn });
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
  clearInstance(e = Xn) {
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
  isInitialized(e = Xn) {
    return this.instances.has(e);
  }
  getOptions(e = Xn) {
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
      instanceIdentifier: gg(e),
      options: n
    }), this.instances.set(e, i), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(i, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, i);
      } catch {
      }
    return i || null;
  }
  normalizeInstanceIdentifier(e = Xn) {
    return this.component ? this.component.multipleInstances ? e : Xn : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function gg(t) {
  return t === Xn ? void 0 : t;
}
function vg(t) {
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
class bg {
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
    const n = new _g(e, this);
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
var ue;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(ue || (ue = {}));
const yg = {
  debug: ue.DEBUG,
  verbose: ue.VERBOSE,
  info: ue.INFO,
  warn: ue.WARN,
  error: ue.ERROR,
  silent: ue.SILENT
}, wg = ue.INFO, Eg = {
  [ue.DEBUG]: "log",
  [ue.VERBOSE]: "log",
  [ue.INFO]: "info",
  [ue.WARN]: "warn",
  [ue.ERROR]: "error"
}, Ig = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const i = (/* @__PURE__ */ new Date()).toISOString(), r = Eg[e];
  if (r)
    console[r](`[${i}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Dl {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = wg, this._logHandler = Ig, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ue))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? yg[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, ue.DEBUG, ...e), this._logHandler(this, ue.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ue.VERBOSE, ...e), this._logHandler(this, ue.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ue.INFO, ...e), this._logHandler(this, ue.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ue.WARN, ...e), this._logHandler(this, ue.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ue.ERROR, ...e), this._logHandler(this, ue.ERROR, ...e);
  }
}
const Cg = (t, e) => e.some((n) => t instanceof n);
let eu, tu;
function Tg() {
  return eu || (eu = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Sg() {
  return tu || (tu = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Ah = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Rh = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap();
function kg(t) {
  const e = new Promise((n, i) => {
    const r = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n(Dn(t.result)), r();
    }, o = () => {
      i(t.error), r();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && Ah.set(n, t);
  }).catch(() => {
  }), Ml.set(e, t), e;
}
function Ag(t) {
  if (Va.has(t))
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
  Va.set(t, e);
}
let za = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Va.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Rh.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Dn(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Rg(t) {
  za = t(za);
}
function Pg(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const i = t.call(ha(this), e, ...n);
    return Rh.set(i, e.sort ? e.sort() : [e]), Dn(i);
  } : Sg().includes(t) ? function(...e) {
    return t.apply(ha(this), e), Dn(Ah.get(this));
  } : function(...e) {
    return Dn(t.apply(ha(this), e));
  };
}
function Ng(t) {
  return typeof t == "function" ? Pg(t) : (t instanceof IDBTransaction && Ag(t), Cg(t, Tg()) ? new Proxy(t, za) : t);
}
function Dn(t) {
  if (t instanceof IDBRequest)
    return kg(t);
  if (da.has(t))
    return da.get(t);
  const e = Ng(t);
  return e !== t && (da.set(t, e), Ml.set(e, t)), e;
}
const ha = (t) => Ml.get(t);
function xg(t, e, { blocked: n, upgrade: i, blocking: r, terminated: s } = {}) {
  const o = indexedDB.open(t, e), a = Dn(o);
  return i && o.addEventListener("upgradeneeded", (l) => {
    i(Dn(o.result), l.oldVersion, l.newVersion, Dn(o.transaction), l);
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
const Og = ["get", "getKey", "getAll", "getAllKeys", "count"], Lg = ["put", "add", "delete", "clear"], fa = /* @__PURE__ */ new Map();
function nu(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (fa.get(e))
    return fa.get(e);
  const n = e.replace(/FromIndex$/, ""), i = e !== n, r = Lg.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(r || Og.includes(n))
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
  return fa.set(e, s), s;
}
Rg((t) => ({
  ...t,
  get: (e, n, i) => nu(e, n) || t.get(e, n, i),
  has: (e, n) => !!nu(e, n) || t.has(e, n)
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
class Dg {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (Mg(n)) {
        const i = n.getImmediate();
        return `${i.library}/${i.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function Mg(t) {
  return t.getComponent()?.type === "VERSION";
}
const ja = "@firebase/app", iu = "0.14.5";
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
const hn = new Dl("@firebase/app"), $g = "@firebase/app-compat", Fg = "@firebase/analytics-compat", Ug = "@firebase/analytics", Hg = "@firebase/app-check-compat", Wg = "@firebase/app-check", Vg = "@firebase/auth", zg = "@firebase/auth-compat", jg = "@firebase/database", Bg = "@firebase/data-connect", qg = "@firebase/database-compat", Gg = "@firebase/functions", Kg = "@firebase/functions-compat", Yg = "@firebase/installations", Qg = "@firebase/installations-compat", Jg = "@firebase/messaging", Xg = "@firebase/messaging-compat", Zg = "@firebase/performance", ev = "@firebase/performance-compat", tv = "@firebase/remote-config", nv = "@firebase/remote-config-compat", iv = "@firebase/storage", rv = "@firebase/storage-compat", sv = "@firebase/firestore", ov = "@firebase/ai", av = "@firebase/firestore-compat", lv = "firebase", cv = "12.5.0";
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
const Ba = "[DEFAULT]", uv = {
  [ja]: "fire-core",
  [$g]: "fire-core-compat",
  [Ug]: "fire-analytics",
  [Fg]: "fire-analytics-compat",
  [Wg]: "fire-app-check",
  [Hg]: "fire-app-check-compat",
  [Vg]: "fire-auth",
  [zg]: "fire-auth-compat",
  [jg]: "fire-rtdb",
  [Bg]: "fire-data-connect",
  [qg]: "fire-rtdb-compat",
  [Gg]: "fire-fn",
  [Kg]: "fire-fn-compat",
  [Yg]: "fire-iid",
  [Qg]: "fire-iid-compat",
  [Jg]: "fire-fcm",
  [Xg]: "fire-fcm-compat",
  [Zg]: "fire-perf",
  [ev]: "fire-perf-compat",
  [tv]: "fire-rc",
  [nv]: "fire-rc-compat",
  [iv]: "fire-gcs",
  [rv]: "fire-gcs-compat",
  [sv]: "fire-fst",
  [av]: "fire-fst-compat",
  [ov]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [lv]: "fire-js-all"
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
const to = /* @__PURE__ */ new Map(), dv = /* @__PURE__ */ new Map(), qa = /* @__PURE__ */ new Map();
function ru(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function ui(t) {
  const e = t.name;
  if (qa.has(e))
    return hn.debug(`There were multiple attempts to register component ${e}.`), !1;
  qa.set(e, t);
  for (const n of to.values())
    ru(n, t);
  for (const n of dv.values())
    ru(n, t);
  return !0;
}
function Fo(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function at(t) {
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
const hv = {
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
}, Mn = new ms("app", "Firebase", hv);
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
class fv {
  constructor(e, n, i) {
    this._isDeleted = !1, this._options = { ...e }, this._config = { ...n }, this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = i, this.container.addComponent(new Wn(
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
      throw Mn.create("app-deleted", { appName: this._name });
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
const yi = cv;
function Ph(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const i = {
    name: Ba,
    automaticDataCollectionEnabled: !0,
    ...e
  }, r = i.name;
  if (typeof r != "string" || !r)
    throw Mn.create("bad-app-name", {
      appName: String(r)
    });
  if (n || (n = Ih()), !n)
    throw Mn.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = to.get(r);
  if (s) {
    if (ci(n, s.options) && ci(i, s.config))
      return s;
    throw Mn.create("duplicate-app", { appName: r });
  }
  const o = new bg(r);
  for (const l of qa.values())
    o.addComponent(l);
  const a = new fv(n, i, o);
  return to.set(r, a), a;
}
function $l(t = Ba) {
  const e = to.get(t);
  if (!e && t === Ba && Ih())
    return Ph();
  if (!e)
    throw Mn.create("no-app", { appName: t });
  return e;
}
function zt(t, e, n) {
  let i = uv[t] ?? t;
  n && (i += `-${n}`);
  const r = i.match(/\s|\//), s = e.match(/\s|\//);
  if (r || s) {
    const o = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    r && o.push(`library name "${i}" contains illegal characters (whitespace or "/")`), r && s && o.push("and"), s && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), hn.warn(o.join(" "));
    return;
  }
  ui(new Wn(
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
const pv = "firebase-heartbeat-database", mv = 1, Yr = "firebase-heartbeat-store";
let pa = null;
function Nh() {
  return pa || (pa = xg(pv, mv, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          try {
            t.createObjectStore(Yr);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((t) => {
    throw Mn.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), pa;
}
async function _v(t) {
  try {
    const n = (await Nh()).transaction(Yr), i = await n.objectStore(Yr).get(xh(t));
    return await n.done, i;
  } catch (e) {
    if (e instanceof yn)
      hn.warn(e.message);
    else {
      const n = Mn.create("idb-get", {
        originalErrorMessage: e?.message
      });
      hn.warn(n.message);
    }
  }
}
async function su(t, e) {
  try {
    const i = (await Nh()).transaction(Yr, "readwrite");
    await i.objectStore(Yr).put(e, xh(t)), await i.done;
  } catch (n) {
    if (n instanceof yn)
      hn.warn(n.message);
    else {
      const i = Mn.create("idb-set", {
        originalErrorMessage: n?.message
      });
      hn.warn(i.message);
    }
  }
}
function xh(t) {
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
const gv = 1024, vv = 30;
class bv {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new wv(n), this._heartbeatsCachePromise = this._storage.read().then((i) => (this._heartbeatsCache = i, i));
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
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), i = ou();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((r) => r.date === i))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: i, agent: n }), this._heartbeatsCache.heartbeats.length > vv) {
        const r = Ev(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(r, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      hn.warn(e);
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
      const e = ou(), { heartbeatsToSend: n, unsentEntries: i } = yv(this._heartbeatsCache.heartbeats), r = Xs(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r;
    } catch (e) {
      return hn.warn(e), "";
    }
  }
}
function ou() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function yv(t, e = gv) {
  const n = [];
  let i = t.slice();
  for (const r of t) {
    const s = n.find((o) => o.agent === r.agent);
    if (s) {
      if (s.dates.push(r.date), au(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: r.agent,
      dates: [r.date]
    }), au(n) > e) {
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
class wv {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return rg() ? sg().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await _v(this.app);
      return n?.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return su(this.app, {
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
      return su(this.app, {
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
function au(t) {
  return Xs(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
function Ev(t) {
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
function Iv(t) {
  ui(new Wn(
    "platform-logger",
    (e) => new Dg(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), ui(new Wn(
    "heartbeat",
    (e) => new bv(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), zt(ja, iu, t), zt(ja, iu, "esm2020"), zt("fire-js", "");
}
Iv("");
var Cv = "firebase", Tv = "12.5.0";
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
zt(Cv, Tv, "app");
function Oh() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Sv = Oh, Lh = new ms("auth", "Firebase", Oh());
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
const no = new Dl("@firebase/auth");
function kv(t, ...e) {
  no.logLevel <= ue.WARN && no.warn(`Auth (${yi}): ${t}`, ...e);
}
function Us(t, ...e) {
  no.logLevel <= ue.ERROR && no.error(`Auth (${yi}): ${t}`, ...e);
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
function $t(t, ...e) {
  throw Fl(t, ...e);
}
function _t(t, ...e) {
  return Fl(t, ...e);
}
function Dh(t, e, n) {
  const i = {
    ...Sv(),
    [e]: n
  };
  return new ms("auth", "Firebase", i).create(e, {
    appName: t.name
  });
}
function jt(t) {
  return Dh(t, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function Fl(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], i = [...e.slice(1)];
    return i[0] && (i[0].appName = t.name), t._errorFactory.create(n, ...i);
  }
  return Lh.create(t, ...e);
}
function x(t, e, ...n) {
  if (!t)
    throw Fl(e, ...n);
}
function rn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw Us(e), new Error(e);
}
function fn(t, e) {
  t || rn(e);
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
function Ga() {
  return typeof self < "u" && self.location?.href || "";
}
function Mh() {
  return lu() === "http:" || lu() === "https:";
}
function lu() {
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
function Av() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Mh() || tg() || "connection" in navigator) ? navigator.onLine : !0;
}
function Rv() {
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
class _s {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, fn(n > e, "Short delay should be less than long delay!"), this.isMobile = Ll() || Sh();
  }
  get() {
    return Av() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function Ul(t, e) {
  fn(t.emulator, "Emulator should always be set here");
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
class $h {
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
    rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
    rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Pv = {
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
const Nv = [
  "/v1/accounts:signInWithCustomToken",
  "/v1/accounts:signInWithEmailLink",
  "/v1/accounts:signInWithIdp",
  "/v1/accounts:signInWithPassword",
  "/v1/accounts:signInWithPhoneNumber",
  "/v1/token"
  /* Endpoint.TOKEN */
], xv = new _s(3e4, 6e4);
function dt(t, e) {
  return t.tenantId && !e.tenantId ? {
    ...e,
    tenantId: t.tenantId
  } : e;
}
async function gt(t, e, n, i, r = {}) {
  return Fh(t, r, async () => {
    let s = {}, o = {};
    i && (e === "GET" ? o = i : s = {
      body: JSON.stringify(i)
    });
    const a = bi({
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
    return eg() || (c.referrerPolicy = "no-referrer"), t.emulatorConfig && vi(t.emulatorConfig.host) && (c.credentials = "include"), $h.fetch()(await Uh(t, t.config.apiHost, n, a), c);
  });
}
async function Fh(t, e, n) {
  t._canInitEmulator = !1;
  const i = { ...Pv, ...e };
  try {
    const r = new Lv(t), s = await Promise.race([
      n(),
      r.promise
    ]);
    r.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Sr(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message, [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Sr(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw Sr(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw Sr(t, "user-disabled", o);
      const d = i[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c)
        throw Dh(t, d, c);
      $t(t, d);
    }
  } catch (r) {
    if (r instanceof yn)
      throw r;
    $t(t, "network-request-failed", { message: String(r) });
  }
}
async function Kn(t, e, n, i, r = {}) {
  const s = await gt(t, e, n, i, r);
  return "mfaPendingCredential" in s && $t(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
async function Uh(t, e, n, i) {
  const r = `${e}${n}?${i}`, s = t, o = s.config.emulator ? Ul(t.config, r) : `${t.config.apiScheme}://${r}`;
  return Nv.includes(n) && (await s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(o).toString() : o;
}
function Ov(t) {
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
class Lv {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, i) => {
      this.timer = setTimeout(() => i(_t(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), xv.get());
    });
  }
}
function Sr(t, e, n) {
  const i = {
    appName: t.name
  };
  n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
  const r = _t(t, e, i);
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
function cu(t) {
  return t !== void 0 && t.getResponse !== void 0;
}
function uu(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Hh {
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
        return Ov(n.enforcementState);
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
async function Dv(t) {
  return (await gt(
    t,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function Wh(t, e) {
  return gt(t, "GET", "/v2/recaptchaConfig", dt(t, e));
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
async function Mv(t, e) {
  return gt(t, "POST", "/v1/accounts:delete", e);
}
async function io(t, e) {
  return gt(t, "POST", "/v1/accounts:lookup", e);
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
function Lr(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function $v(t, e = !1) {
  const n = Me(t), i = await n.getIdToken(e), r = Hl(i);
  x(
    r && r.exp && r.auth_time && r.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof r.firebase == "object" ? r.firebase : void 0, o = s?.sign_in_provider;
  return {
    claims: r,
    token: i,
    authTime: Lr(ma(r.auth_time)),
    issuedAtTime: Lr(ma(r.iat)),
    expirationTime: Lr(ma(r.exp)),
    signInProvider: o || null,
    signInSecondFactor: s?.sign_in_second_factor || null
  };
}
function ma(t) {
  return Number(t) * 1e3;
}
function Hl(t) {
  const [e, n, i] = t.split(".");
  if (e === void 0 || n === void 0 || i === void 0)
    return Us("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const r = Zs(n);
    return r ? JSON.parse(r) : (Us("Failed to decode base64 JWT payload"), null);
  } catch (r) {
    return Us("Caught error parsing JWT payload as JSON", r?.toString()), null;
  }
}
function du(t) {
  const e = Hl(t);
  return x(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), x(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), x(
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
async function Bi(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (i) {
    throw i instanceof yn && Fv(i) && t.auth.currentUser === t && await t.auth.signOut(), i;
  }
}
function Fv({ code: t }) {
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
class Uv {
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
class Ka {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Lr(this.lastLoginAt), this.creationTime = Lr(this.createdAt);
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
async function ro(t) {
  const e = t.auth, n = await t.getIdToken(), i = await Bi(t, io(e, { idToken: n }));
  x(
    i?.users.length,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const r = i.users[0];
  t._notifyReloadListener(r);
  const s = r.providerUserInfo?.length ? Vh(r.providerUserInfo) : [], o = Wv(t.providerData, s), a = t.isAnonymous, l = !(t.email && r.passwordHash) && !o?.length, c = a ? l : !1, d = {
    uid: r.localId,
    displayName: r.displayName || null,
    photoURL: r.photoUrl || null,
    email: r.email || null,
    emailVerified: r.emailVerified || !1,
    phoneNumber: r.phoneNumber || null,
    tenantId: r.tenantId || null,
    providerData: o,
    metadata: new Ka(r.createdAt, r.lastLoginAt),
    isAnonymous: c
  };
  Object.assign(t, d);
}
async function Hv(t) {
  const e = Me(t);
  await ro(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Wv(t, e) {
  return [...t.filter((i) => !e.some((r) => r.providerId === i.providerId)), ...e];
}
function Vh(t) {
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
async function Vv(t, e) {
  const n = await Fh(t, {}, async () => {
    const i = bi({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: r, apiKey: s } = t.config, o = await Uh(t, r, "/v1/token", `key=${s}`), a = await t._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    const l = {
      method: "POST",
      headers: a,
      body: i
    };
    return t.emulatorConfig && vi(t.emulatorConfig.host) && (l.credentials = "include"), $h.fetch()(o, l);
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
  };
}
async function zv(t, e) {
  return gt(t, "POST", "/v2/accounts:revokeToken", dt(t, e));
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
class Li {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    x(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), x(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), x(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : du(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    x(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = du(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired ? this.accessToken : (x(
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
    const { accessToken: i, refreshToken: r, expiresIn: s } = await Vv(e, n);
    this.updateTokensAndExpiration(i, r, Number(s));
  }
  updateTokensAndExpiration(e, n, i) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + i * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: i, accessToken: r, expirationTime: s } = n, o = new Li();
    return i && (x(typeof i == "string", "internal-error", {
      appName: e
    }), o.refreshToken = i), r && (x(typeof r == "string", "internal-error", {
      appName: e
    }), o.accessToken = r), s && (x(typeof s == "number", "internal-error", {
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
    return Object.assign(new Li(), this.toJSON());
  }
  _performRefresh() {
    return rn("not implemented");
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
function Tn(t, e) {
  x(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Ot {
  constructor({ uid: e, auth: n, stsTokenManager: i, ...r }) {
    this.providerId = "firebase", this.proactiveRefresh = new Uv(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = e, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new Ka(r.createdAt || void 0, r.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await Bi(this, this.stsTokenManager.getToken(this.auth, e));
    return x(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return $v(this, e);
  }
  reload() {
    return Hv(this);
  }
  _assign(e) {
    this !== e && (x(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => ({ ...n })), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new Ot({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone()
    });
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    x(
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
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), i = !0), n && await ro(this), await this.auth._persistUserIfCurrent(this), i && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (at(this.auth.app))
      return Promise.reject(jt(this.auth));
    const e = await this.getIdToken();
    return await Bi(this, Mv(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    x(
      h && g,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const E = Li.fromJSON(this.name, g);
    x(
      typeof h == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Tn(i, e.name), Tn(r, e.name), x(
      typeof u == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), x(
      typeof f == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Tn(s, e.name), Tn(o, e.name), Tn(a, e.name), Tn(l, e.name), Tn(c, e.name), Tn(d, e.name);
    const T = new Ot({
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
    return p && Array.isArray(p) && (T.providerData = p.map((S) => ({ ...S }))), l && (T._redirectEventId = l), T;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, n, i = !1) {
    const r = new Li();
    r.updateFromServerResponse(n);
    const s = new Ot({
      uid: n.localId,
      auth: e,
      stsTokenManager: r,
      isAnonymous: i
    });
    return await ro(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, n, i) {
    const r = n.users[0];
    x(
      r.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = r.providerUserInfo !== void 0 ? Vh(r.providerUserInfo) : [], o = !(r.email && r.passwordHash) && !s?.length, a = new Li();
    a.updateFromIdToken(i);
    const l = new Ot({
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
      metadata: new Ka(r.createdAt, r.lastLoginAt),
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
const hu = /* @__PURE__ */ new Map();
function sn(t) {
  fn(t instanceof Function, "Expected a class definition");
  let e = hu.get(t);
  return e ? (fn(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), hu.set(t, e), e);
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
class zh {
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
zh.type = "NONE";
const fu = zh;
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
function Hs(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Di {
  constructor(e, n, i) {
    this.persistence = e, this.auth = n, this.userKey = i;
    const { config: r, name: s } = this.auth;
    this.fullUserKey = Hs(this.userKey, r.apiKey, s), this.fullPersistenceKey = Hs("persistence", r.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e)
      return null;
    if (typeof e == "string") {
      const n = await io(this.auth, { idToken: e }).catch(() => {
      });
      return n ? Ot._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return Ot._fromJSON(this.auth, e);
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
      return new Di(sn(fu), e, i);
    const r = (await Promise.all(n.map(async (c) => {
      if (await c._isAvailable())
        return c;
    }))).filter((c) => c);
    let s = r[0] || sn(fu);
    const o = Hs(i, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const d = await c._get(o);
        if (d) {
          let h;
          if (typeof d == "string") {
            const u = await io(e, {
              idToken: d
            }).catch(() => {
            });
            if (!u)
              break;
            h = await Ot._fromGetAccountInfoResponse(e, u, d);
          } else
            h = Ot._fromJSON(e, d);
          c !== s && (a = h), s = c;
          break;
        }
      } catch {
      }
    const l = r.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new Di(s, e, i) : (s = l[0], a && await s._set(o, a.toJSON()), await Promise.all(n.map(async (c) => {
      if (c !== s)
        try {
          await c._remove(o);
        } catch {
        }
    })), new Di(s, e, i));
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
function pu(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Gh(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (jh(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Yh(e))
    return "Blackberry";
  if (Qh(e))
    return "Webos";
  if (Bh(e))
    return "Safari";
  if ((e.includes("chrome/") || qh(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Kh(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, i = t.match(n);
    if (i?.length === 2)
      return i[1];
  }
  return "Other";
}
function jh(t = et()) {
  return /firefox\//i.test(t);
}
function Bh(t = et()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function qh(t = et()) {
  return /crios\//i.test(t);
}
function Gh(t = et()) {
  return /iemobile/i.test(t);
}
function Kh(t = et()) {
  return /android/i.test(t);
}
function Yh(t = et()) {
  return /blackberry/i.test(t);
}
function Qh(t = et()) {
  return /webos/i.test(t);
}
function Wl(t = et()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function jv(t = et()) {
  return Wl(t) && !!window.navigator?.standalone;
}
function Bv() {
  return ng() && document.documentMode === 10;
}
function Jh(t = et()) {
  return Wl(t) || Kh(t) || Qh(t) || Yh(t) || /windows phone/i.test(t) || Gh(t);
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
function Xh(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = pu(et());
      break;
    case "Worker":
      n = `${pu(et())}-${t}`;
      break;
    default:
      n = t;
  }
  const i = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${yi}/${i}`;
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
class qv {
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
async function Gv(t, e = {}) {
  return gt(t, "GET", "/v2/passwordPolicy", dt(t, e));
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
const Kv = 6;
class Yv {
  constructor(e) {
    const n = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = n.minPasswordLength ?? Kv, n.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength), n.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = n.containsLowercaseCharacter), n.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = n.containsUppercaseCharacter), n.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = n.containsNumericCharacter), n.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = n.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "", this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1, this.schemaVersion = e.schemaVersion;
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
class Qv {
  constructor(e, n, i, r) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = i, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new mu(this), this.idTokenSubscription = new mu(this), this.beforeStateQueue = new qv(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Lh, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise((s) => this._resolvePersistenceManagerAvailable = s);
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = sn(n)), this._initializationPromise = this.queue(async () => {
      if (!this._deleted && (this.persistenceManager = await Di.create(this, e), this._resolvePersistenceManagerAvailable?.(), !this._deleted)) {
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
      const n = await io(this, { idToken: e }), i = await Ot._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(i);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    if (at(this.app)) {
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
    return x(
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
      await ro(e);
    } catch (n) {
      if (n?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Rv();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (at(this.app))
      return Promise.reject(jt(this));
    const n = e ? Me(e) : null;
    return n && x(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && x(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return at(this.app) ? Promise.reject(jt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return at(this.app) ? Promise.reject(jt(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(sn(e));
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
    const e = await Gv(this), n = new Yv(e);
    this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n;
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new ms("auth", "Firebase", e());
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
      this.tenantId != null && (i.tenantId = this.tenantId), await zv(this, i);
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
      const n = e && sn(e) || this._popupRedirectResolver;
      x(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Di.create(
        this,
        [sn(n._redirectPersistence)],
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
    if (x(
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
    return x(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Xh(this.config.clientPlatform, this._getFrameworks()));
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
    if (at(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await this.appCheckServiceProvider.getImmediate({ optional: !0 })?.getToken();
    return e?.error && kv(`Error while retrieving App Check token: ${e.error}`), e?.token;
  }
}
function Jt(t) {
  return Me(t);
}
class mu {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = hg((n) => this.observer = n);
  }
  get next() {
    return x(
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
let gs = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function Jv(t) {
  gs = t;
}
function Vl(t) {
  return gs.loadJS(t);
}
function Xv() {
  return gs.recaptchaV2Script;
}
function Zv() {
  return gs.recaptchaEnterpriseScript;
}
function eb() {
  return gs.gapiScript;
}
function Zh(t) {
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
const tb = 500, nb = 6e4, Ls = 1e12;
class ib {
  constructor(e) {
    this.auth = e, this.counter = Ls, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, n) {
    const i = this.counter;
    return this._widgets.set(i, new ob(e, this.auth.name, n || {})), this.counter++, i;
  }
  reset(e) {
    const n = e || Ls;
    this._widgets.get(n)?.delete(), this._widgets.delete(n);
  }
  getResponse(e) {
    const n = e || Ls;
    return this._widgets.get(n)?.getResponse() || "";
  }
  async execute(e) {
    const n = e || Ls;
    return this._widgets.get(n)?.execute(), "";
  }
}
class rb {
  constructor() {
    this.enterprise = new sb();
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
class sb {
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
class ob {
  constructor(e, n, i) {
    this.params = i, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const r = typeof e == "string" ? document.getElementById(e) : e;
    x(r, "argument-error", { appName: n }), this.container = r, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = ab(50);
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
      }, nb);
    }, tb));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function ab(t) {
  const e = [], n = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < t; i++)
    e.push(n.charAt(Math.floor(Math.random() * n.length)));
  return e.join("");
}
const lb = "recaptcha-enterprise", Dr = "NO_RECAPTCHA";
class ef {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = lb, this.auth = Jt(e);
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
        Wh(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            a(new Error("recaptcha Enterprise site key undefined"));
          else {
            const c = new Hh(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = c : s._tenantRecaptchaConfigs[s.tenantId] = c, o(c.siteKey);
          }
        }).catch((l) => {
          a(l);
        });
      });
    }
    function r(s, o, a) {
      const l = window.grecaptcha;
      uu(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((c) => {
          o(c);
        }).catch(() => {
          o(Dr);
        });
      }) : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting ? new rb().execute("siteKey", { action: "verify" }) : new Promise((s, o) => {
      i(this.auth).then((a) => {
        if (!n && uu(window.grecaptcha))
          r(a, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = Zv();
          l.length !== 0 && (l += a), Vl(l).then(() => {
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
async function vr(t, e, n, i = !1, r = !1) {
  const s = new ef(t);
  let o;
  if (r)
    o = Dr;
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
async function Mi(t, e, n, i, r) {
  if (r === "EMAIL_PASSWORD_PROVIDER")
    if (t._getRecaptchaConfig()?.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const s = await vr(
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
          const o = await vr(
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
      const s = await vr(t, e, n);
      return i(t, s).catch(async (o) => {
        if (t._getRecaptchaConfig()?.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ) === "AUDIT" && (o.code === "auth/missing-recaptcha-token" || o.code === "auth/invalid-app-credential")) {
          console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
          const a = await vr(
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
      const s = await vr(
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
async function cb(t) {
  const e = Jt(t), n = await Wh(e, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), i = new Hh(n);
  e.tenantId == null ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i, i.isAnyProviderEnabled() && new ef(e).verify();
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
function ub(t, e) {
  const n = Fo(t, "auth");
  if (n.isInitialized()) {
    const r = n.getImmediate(), s = n.getOptions();
    if (ci(s, e ?? {}))
      return r;
    $t(
      r,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function db(t, e) {
  const n = e?.persistence || [], i = (Array.isArray(n) ? n : [n]).map(sn);
  e?.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(i, e?.popupRedirectResolver);
}
function hb(t, e, n) {
  const i = Jt(t);
  x(
    /^https?:\/\//.test(e),
    i,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const r = !1, s = tf(e), { host: o, port: a } = fb(e), l = a === null ? "" : `:${a}`, c = { url: `${s}//${o}${l}/` }, d = Object.freeze({
    host: o,
    port: a,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: r })
  });
  if (!i._canInitEmulator) {
    x(
      i.config.emulator && i.emulatorConfig,
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ), x(
      ci(c, i.config.emulator) && ci(d, i.emulatorConfig),
      i,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    return;
  }
  i.config.emulator = c, i.emulatorConfig = d, i.settings.appVerificationDisabledForTesting = !0, vi(o) ? (xl(`${s}//${o}${l}`), Ol("Auth", !0)) : pb();
}
function tf(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function fb(t) {
  const e = tf(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const i = n[2].split("@").pop() || "", r = /^(\[[^\]]+\])(:|$)/.exec(i);
  if (r) {
    const s = r[1];
    return { host: s, port: _u(i.substr(s.length + 1)) };
  } else {
    const [s, o] = i.split(":");
    return { host: s, port: _u(o) };
  }
}
function _u(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function pb() {
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
class Uo {
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
    return rn("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return rn("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return rn("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return rn("not implemented");
  }
}
async function mb(t, e) {
  return gt(t, "POST", "/v1/accounts:signUp", e);
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
async function _b(t, e) {
  return Kn(t, "POST", "/v1/accounts:signInWithPassword", dt(t, e));
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
async function gb(t, e) {
  return Kn(t, "POST", "/v1/accounts:signInWithEmailLink", dt(t, e));
}
async function vb(t, e) {
  return Kn(t, "POST", "/v1/accounts:signInWithEmailLink", dt(t, e));
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
class Qr extends Uo {
  /** @internal */
  constructor(e, n, i, r = null) {
    super("password", i), this._email = e, this._password = n, this._tenantId = r;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Qr(
      e,
      n,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, i = null) {
    return new Qr(e, n, "emailLink", i);
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
        return Mi(
          e,
          n,
          "signInWithPassword",
          _b,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return gb(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        $t(
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
        return Mi(
          e,
          i,
          "signUpPassword",
          mb,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return vb(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password
        });
      default:
        $t(
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
async function $i(t, e) {
  return Kn(t, "POST", "/v1/accounts:signInWithIdp", dt(t, e));
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
const bb = "http://localhost";
class di extends Uo {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new di(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : $t(
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
    const o = new di(i, r);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return $i(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const i = this.buildRequest();
    return i.idToken = n, $i(e, i);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, $i(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: bb,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = bi(n);
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
async function gu(t, e) {
  return gt(t, "POST", "/v1/accounts:sendVerificationCode", dt(t, e));
}
async function yb(t, e) {
  return Kn(t, "POST", "/v1/accounts:signInWithPhoneNumber", dt(t, e));
}
async function wb(t, e) {
  const n = await Kn(t, "POST", "/v1/accounts:signInWithPhoneNumber", dt(t, e));
  if (n.temporaryProof)
    throw Sr(t, "account-exists-with-different-credential", n);
  return n;
}
const Eb = {
  USER_NOT_FOUND: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function Ib(t, e) {
  const n = {
    ...e,
    operation: "REAUTH"
  };
  return Kn(t, "POST", "/v1/accounts:signInWithPhoneNumber", dt(t, n), Eb);
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
class Mr extends Uo {
  constructor(e) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    ), this.params = e;
  }
  /** @internal */
  static _fromVerification(e, n) {
    return new Mr({ verificationId: e, verificationCode: n });
  }
  /** @internal */
  static _fromTokenResponse(e, n) {
    return new Mr({ phoneNumber: e, temporaryProof: n });
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return yb(e, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return wb(e, {
      idToken: n,
      ...this._makeVerificationRequest()
    });
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Ib(e, this._makeVerificationRequest());
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
    return !i && !n && !r && !s ? null : new Mr({
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
function Cb(t) {
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
function Tb(t) {
  const e = Cr(Tr(t)).link, n = e ? Cr(Tr(e)).deep_link_id : null, i = Cr(Tr(t)).deep_link_id;
  return (i ? Cr(Tr(i)).link : null) || i || n || e || t;
}
class zl {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    const n = Cr(Tr(e)), i = n.apiKey ?? null, r = n.oobCode ?? null, s = Cb(n.mode ?? null);
    x(
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
    const n = Tb(e);
    try {
      return new zl(n);
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
class rr {
  constructor() {
    this.providerId = rr.PROVIDER_ID;
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
    return Qr._fromEmailAndPassword(e, n);
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
    const i = zl.parseLink(n);
    return x(
      i,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Qr._fromEmailAndCode(e, i.code, i.tenantId);
  }
}
rr.PROVIDER_ID = "password";
rr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
rr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
class nf {
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
class vs extends nf {
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
class Sn extends vs {
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
    return di._fromParams({
      providerId: Sn.PROVIDER_ID,
      signInMethod: Sn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Sn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Sn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Sn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Sn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Sn.PROVIDER_ID = "facebook.com";
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
class kn extends vs {
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
    return di._fromParams({
      providerId: kn.PROVIDER_ID,
      signInMethod: kn.GOOGLE_SIGN_IN_METHOD,
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
    return kn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return kn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: i } = e;
    if (!n && !i)
      return null;
    try {
      return kn.credential(n, i);
    } catch {
      return null;
    }
  }
}
kn.GOOGLE_SIGN_IN_METHOD = "google.com";
kn.PROVIDER_ID = "google.com";
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
class An extends vs {
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
    return di._fromParams({
      providerId: An.PROVIDER_ID,
      signInMethod: An.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return An.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return An.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return An.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
An.GITHUB_SIGN_IN_METHOD = "github.com";
An.PROVIDER_ID = "github.com";
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
class Rn extends vs {
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
    return di._fromParams({
      providerId: Rn.PROVIDER_ID,
      signInMethod: Rn.TWITTER_SIGN_IN_METHOD,
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
    return Rn.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Rn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: i } = e;
    if (!n || !i)
      return null;
    try {
      return Rn.credential(n, i);
    } catch {
      return null;
    }
  }
}
Rn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Rn.PROVIDER_ID = "twitter.com";
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
async function Sb(t, e) {
  return Kn(t, "POST", "/v1/accounts:signUp", dt(t, e));
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
class hi {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, i, r = !1) {
    const s = await Ot._fromIdTokenResponse(e, i, r), o = vu(i);
    return new hi({
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
    const r = vu(i);
    return new hi({
      user: e,
      providerId: r,
      _tokenResponse: i,
      operationType: n
    });
  }
}
function vu(t) {
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
class so extends yn {
  constructor(e, n, i, r) {
    super(n.code, n.message), this.operationType = i, this.user = r, Object.setPrototypeOf(this, so.prototype), this.customData = {
      appName: e.name,
      tenantId: e.tenantId ?? void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: i
    };
  }
  static _fromErrorAndOperation(e, n, i, r) {
    return new so(e, n, i, r);
  }
}
function rf(t, e, n, i) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? so._fromErrorAndOperation(t, s, e, i) : s;
  });
}
async function kb(t, e, n = !1) {
  const i = await Bi(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return hi._forOperation(t, "link", i);
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
async function Ab(t, e, n = !1) {
  const { auth: i } = t;
  if (at(i.app))
    return Promise.reject(jt(i));
  const r = "reauthenticate";
  try {
    const s = await Bi(t, rf(i, r, e, t), n);
    x(
      s.idToken,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = Hl(s.idToken);
    x(
      o,
      i,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: a } = o;
    return x(
      t.uid === a,
      i,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), hi._forOperation(t, r, s);
  } catch (s) {
    throw s?.code === "auth/user-not-found" && $t(
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
async function sf(t, e, n = !1) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = "signIn", r = await rf(t, i, e), s = await hi._fromIdTokenResponse(t, i, r);
  return n || await t._updateCurrentUser(s.user), s;
}
async function of(t, e) {
  return sf(Jt(t), e);
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
async function af(t) {
  const e = Jt(t);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function lf(t, e, n) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Jt(t), o = await Mi(
    i,
    {
      returnSecureToken: !0,
      email: e,
      password: n,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    },
    "signUpPassword",
    Sb,
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
  ).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && af(t), l;
  }), a = await hi._fromIdTokenResponse(i, "signIn", o);
  return await i._updateCurrentUser(a.user), a;
}
function cf(t, e, n) {
  return at(t.app) ? Promise.reject(jt(t)) : of(Me(t), rr.credential(e, n)).catch(async (i) => {
    throw i.code === "auth/password-does-not-meet-requirements" && af(t), i;
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
async function Rb(t, e) {
  return gt(t, "POST", "/v1/accounts:update", e);
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
async function jl(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0)
    return;
  const i = Me(t), s = {
    idToken: await i.getIdToken(),
    displayName: e,
    photoUrl: n,
    returnSecureToken: !0
  }, o = await Bi(i, Rb(i.auth, s));
  i.displayName = o.displayName || null, i.photoURL = o.photoUrl || null;
  const a = i.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  a && (a.displayName = i.displayName, a.photoURL = i.photoURL), await i._updateTokensIfNecessary(o);
}
function Pb(t, e, n, i) {
  return Me(t).onIdTokenChanged(e, n, i);
}
function Nb(t, e, n) {
  return Me(t).beforeAuthStateChanged(e, n);
}
function uf(t, e, n, i) {
  return Me(t).onAuthStateChanged(e, n, i);
}
function xb(t) {
  return Me(t).signOut();
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
function bu(t, e) {
  return gt(t, "POST", "/v2/accounts/mfaEnrollment:start", dt(t, e));
}
const oo = "__sak";
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
class df {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(oo, "1"), this.storage.removeItem(oo), Promise.resolve(!0)) : Promise.resolve(!1);
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
const Ob = 1e3, Lb = 10;
class hf extends df {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Jh(), this._shouldAllowMigration = !0;
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
    Bv() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, Lb) : r();
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
    }, Ob);
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
hf.type = "LOCAL";
const Db = hf;
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
class ff extends df {
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
ff.type = "SESSION";
const pf = ff;
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
function Mb(t) {
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
class Ho {
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
    const i = new Ho(e);
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
    const a = Array.from(o).map(async (c) => c(n.origin, s)), l = await Mb(a);
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
Ho.receivers = [];
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
function Bl(t = "", e = 10) {
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
class $b {
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
      const c = Bl("", 20);
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
function Ae() {
  return window;
}
function Fb(t) {
  Ae().location.href = t;
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
function ql() {
  return typeof Ae().WorkerGlobalScope < "u" && typeof Ae().importScripts == "function";
}
async function Ub() {
  if (!navigator?.serviceWorker)
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Hb() {
  return navigator?.serviceWorker?.controller || null;
}
function Wb() {
  return ql() ? self : null;
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
const mf = "firebaseLocalStorageDb", Vb = 1, ao = "firebaseLocalStorage", _f = "fbase_key";
class bs {
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
function Wo(t, e) {
  return t.transaction([ao], e ? "readwrite" : "readonly").objectStore(ao);
}
function zb() {
  const t = indexedDB.deleteDatabase(mf);
  return new bs(t).toPromise();
}
function Ya() {
  const t = indexedDB.open(mf, Vb);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const i = t.result;
      try {
        i.createObjectStore(ao, { keyPath: _f });
      } catch (r) {
        n(r);
      }
    }), t.addEventListener("success", async () => {
      const i = t.result;
      i.objectStoreNames.contains(ao) ? e(i) : (i.close(), await zb(), e(await Ya()));
    });
  });
}
async function yu(t, e, n) {
  const i = Wo(t, !0).put({
    [_f]: e,
    value: n
  });
  return new bs(i).toPromise();
}
async function jb(t, e) {
  const n = Wo(t, !1).get(e), i = await new bs(n).toPromise();
  return i === void 0 ? null : i.value;
}
function wu(t, e) {
  const n = Wo(t, !0).delete(e);
  return new bs(n).toPromise();
}
const Bb = 800, qb = 3;
class gf {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Ya(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const i = await this._openDb();
        return await e(i);
      } catch (i) {
        if (n++ > qb)
          throw i;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return ql() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Ho._getInstance(Wb()), this.receiver._subscribe("keyChanged", async (e, n) => ({
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
    if (this.activeServiceWorker = await Ub(), !this.activeServiceWorker)
      return;
    this.sender = new $b(this.activeServiceWorker);
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
    if (!(!this.sender || !this.activeServiceWorker || Hb() !== this.activeServiceWorker))
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
      const e = await Ya();
      return await yu(e, oo, "1"), await wu(e, oo), !0;
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
    return this._withPendingWrite(async () => (await this._withRetries((i) => yu(i, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((i) => jb(i, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => wu(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((r) => {
      const s = Wo(r, !1).getAll();
      return new bs(s).toPromise();
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
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Bb);
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
gf.type = "LOCAL";
const Gb = gf;
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
function Eu(t, e) {
  return gt(t, "POST", "/v2/accounts/mfaSignIn:start", dt(t, e));
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
const _a = Zh("rcb"), Kb = new _s(3e4, 6e4);
class Yb {
  constructor() {
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!Ae().grecaptcha?.render;
  }
  load(e, n = "") {
    return x(
      Qb(n),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(n) && cu(Ae().grecaptcha) ? Promise.resolve(Ae().grecaptcha) : new Promise((i, r) => {
      const s = Ae().setTimeout(() => {
        r(_t(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Kb.get());
      Ae()[_a] = () => {
        Ae().clearTimeout(s), delete Ae()[_a];
        const a = Ae().grecaptcha;
        if (!a || !cu(a)) {
          r(_t(
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
      const o = `${Xv()}?${bi({
        onload: _a,
        render: "explicit",
        hl: n
      })}`;
      Vl(o).catch(() => {
        clearTimeout(s), r(_t(
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
    return !!Ae().grecaptcha?.render && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
}
function Qb(t) {
  return t.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(t);
}
class Jb {
  async load(e) {
    return new ib(e);
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
const $r = "recaptcha", Xb = {
  theme: "light",
  type: "image"
};
class Zb {
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
    ...Xb
  }) {
    this.parameters = i, this.type = $r, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = Jt(e), this.isInvisible = this.parameters.size === "invisible", x(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const r = typeof n == "string" ? document.getElementById(n) : n;
    x(
      r,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = r, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Jb() : new Yb(), this.validateStartingState();
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
    x(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), x(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), x(
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
        const i = Ae()[e];
        typeof i == "function" && i(n);
      }
    };
  }
  assertNotDestroyed() {
    x(
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
    x(
      Mh() && !ql(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await ey(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await Dv(this.auth);
    x(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return x(
      this.recaptcha,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.recaptcha;
  }
}
function ey() {
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
class ty {
  constructor(e, n) {
    this.verificationId = e, this.onConfirmation = n;
  }
  confirm(e) {
    const n = Mr._fromVerification(this.verificationId, e);
    return this.onConfirmation(n);
  }
}
async function ny(t, e, n) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Jt(t), r = await iy(i, e, Me(n));
  return new ty(r, (s) => of(i, s));
}
async function iy(t, e, n) {
  if (!t._getRecaptchaConfig())
    try {
      await cb(t);
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
        x(
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
        return (await Mi(
          t,
          s,
          "mfaSmsEnrollment",
          async (c, d) => {
            if (d.phoneEnrollmentInfo.captchaResponse === Dr) {
              x(
                n?.type === $r,
                c,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const h = await ga(c, d, n);
              return bu(c, h);
            }
            return bu(c, d);
          },
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        ).catch((c) => Promise.reject(c))).phoneSessionInfo.sessionInfo;
      } else {
        x(
          r.type === "signin",
          t,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const s = i.multiFactorHint?.uid || i.multiFactorUid;
        x(
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
        return (await Mi(
          t,
          o,
          "mfaSmsSignIn",
          async (d, h) => {
            if (h.phoneSignInInfo.captchaResponse === Dr) {
              x(
                n?.type === $r,
                d,
                "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
              );
              const u = await ga(d, h, n);
              return Eu(d, u);
            }
            return Eu(d, h);
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
      return (await Mi(
        t,
        r,
        "sendVerificationCode",
        async (l, c) => {
          if (c.captchaResponse === Dr) {
            x(
              n?.type === $r,
              l,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const d = await ga(l, c, n);
            return gu(l, d);
          }
          return gu(l, c);
        },
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      ).catch((l) => Promise.reject(l))).sessionInfo;
    }
  } finally {
    n?._reset();
  }
}
async function ga(t, e, n) {
  x(
    n.type === $r,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const i = await n.verify();
  x(
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
function ry(t, e) {
  return e ? sn(e) : (x(
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
class Gl extends Uo {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return $i(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return $i(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return $i(e, this._buildIdpRequest());
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
function sy(t) {
  return sf(t.auth, new Gl(t), t.bypassAuthState);
}
function oy(t) {
  const { auth: e, user: n } = t;
  return x(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Ab(n, new Gl(t), t.bypassAuthState);
}
async function ay(t) {
  const { auth: e, user: n } = t;
  return x(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), kb(n, new Gl(t), t.bypassAuthState);
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
class vf {
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
        return sy;
      case "linkViaPopup":
      case "linkViaRedirect":
        return ay;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return oy;
      default:
        $t(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    fn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    fn(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const ly = new _s(2e3, 1e4);
class Pi extends vf {
  constructor(e, n, i, r, s) {
    super(e, n, r, s), this.provider = i, this.authWindow = null, this.pollId = null, Pi.currentPopupAction && Pi.currentPopupAction.cancel(), Pi.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return x(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    fn(this.filter.length === 1, "Popup operations only handle one event");
    const e = Bl();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(_t(
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
    this.reject(_t(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Pi.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(_t(
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
      this.pollId = window.setTimeout(e, ly.get());
    };
    e();
  }
}
Pi.currentPopupAction = null;
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
const cy = "pendingRedirect", Ws = /* @__PURE__ */ new Map();
class uy extends vf {
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
    let e = Ws.get(this.auth._key());
    if (!e) {
      try {
        const i = await dy(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(i);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Ws.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Ws.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function dy(t, e) {
  const n = py(e), i = fy(t);
  if (!await i._isAvailable())
    return !1;
  const r = await i._get(n) === "true";
  return await i._remove(n), r;
}
function hy(t, e) {
  Ws.set(t._key(), e);
}
function fy(t) {
  return sn(t._redirectPersistence);
}
function py(t) {
  return Hs(cy, t.config.apiKey, t.name);
}
async function my(t, e, n = !1) {
  if (at(t.app))
    return Promise.reject(jt(t));
  const i = Jt(t), r = ry(i, e), o = await new uy(i, r, n).execute();
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
const _y = 600 * 1e3;
class gy {
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
    }), this.hasHandledPotentialRedirect || !vy(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    if (e.error && !bf(e)) {
      const i = e.error.code?.split("auth/")[1] || "internal-error";
      n.onError(_t(this.auth, i));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const i = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && i;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= _y && this.cachedEventUids.clear(), this.cachedEventUids.has(Iu(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Iu(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Iu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function bf({ type: t, error: e }) {
  return t === "unknown" && e?.code === "auth/no-auth-event";
}
function vy(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return bf(t);
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
async function by(t, e = {}) {
  return gt(t, "GET", "/v1/projects", e);
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
const yy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, wy = /^https?/;
async function Ey(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await by(t);
  for (const n of e)
    try {
      if (Iy(n))
        return;
    } catch {
    }
  $t(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Iy(t) {
  const e = Ga(), { protocol: n, hostname: i } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && i === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === i;
  }
  if (!wy.test(n))
    return !1;
  if (yy.test(t))
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
const Cy = new _s(3e4, 6e4);
function Cu() {
  const t = Ae().___jsl;
  if (t?.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function Ty(t) {
  return new Promise((e, n) => {
    function i() {
      Cu(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Cu(), n(_t(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Cy.get()
      });
    }
    if (Ae().gapi?.iframes?.Iframe)
      e(gapi.iframes.getContext());
    else if (Ae().gapi?.load)
      i();
    else {
      const r = Zh("iframefcb");
      return Ae()[r] = () => {
        gapi.load ? i() : n(_t(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Vl(`${eb()}?onload=${r}`).catch((s) => n(s));
    }
  }).catch((e) => {
    throw Vs = null, e;
  });
}
let Vs = null;
function Sy(t) {
  return Vs = Vs || Ty(t), Vs;
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
const ky = new _s(5e3, 15e3), Ay = "__/auth/iframe", Ry = "emulator/auth/iframe", Py = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Ny = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function xy(t) {
  const e = t.config;
  x(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? Ul(e, Ry) : `https://${t.config.authDomain}/${Ay}`, i = {
    apiKey: e.apiKey,
    appName: t.name,
    v: yi
  }, r = Ny.get(t.config.apiHost);
  r && (i.eid = r);
  const s = t._getFrameworks();
  return s.length && (i.fw = s.join(",")), `${n}?${bi(i).slice(1)}`;
}
async function Oy(t) {
  const e = await Sy(t), n = Ae().gapi;
  return x(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: xy(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Py,
    dontclear: !0
  }, (i) => new Promise(async (r, s) => {
    await i.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = _t(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), a = Ae().setTimeout(() => {
      s(o);
    }, ky.get());
    function l() {
      Ae().clearTimeout(a), r(i);
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
const Ly = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Dy = 500, My = 600, $y = "_blank", Fy = "http://localhost";
class Tu {
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
function Uy(t, e, n, i = Dy, r = My) {
  const s = Math.max((window.screen.availHeight - r) / 2, 0).toString(), o = Math.max((window.screen.availWidth - i) / 2, 0).toString();
  let a = "";
  const l = {
    ...Ly,
    width: i.toString(),
    height: r.toString(),
    top: s,
    left: o
  }, c = et().toLowerCase();
  n && (a = qh(c) ? $y : n), jh(c) && (e = e || Fy, l.scrollbars = "yes");
  const d = Object.entries(l).reduce((u, [f, p]) => `${u}${f}=${p},`, "");
  if (jv(c) && a !== "_self")
    return Hy(e || "", a), new Tu(null);
  const h = window.open(e || "", a, d);
  x(
    h,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    h.focus();
  } catch {
  }
  return new Tu(h);
}
function Hy(t, e) {
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
const Wy = "__/auth/handler", Vy = "emulator/auth/handler", zy = encodeURIComponent("fac");
async function Su(t, e, n, i, r, s) {
  x(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), x(
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
    v: yi,
    eventId: r
  };
  if (e instanceof nf) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Wa(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({}))
      o[d] = h;
  }
  if (e instanceof vs) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a))
    a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(), c = l ? `#${zy}=${encodeURIComponent(l)}` : "";
  return `${jy(t)}?${bi(a).slice(1)}${c}`;
}
function jy({ config: t }) {
  return t.emulator ? Ul(t, Vy) : `https://${t.authDomain}/${Wy}`;
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
const va = "webStorageSupport";
class By {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = pf, this._completeRedirectFn = my, this._overrideRedirectResult = hy;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, i, r) {
    fn(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
    const s = await Su(e, n, i, Ga(), r);
    return Uy(e, s, Bl());
  }
  async _openRedirect(e, n, i, r) {
    await this._originValidation(e);
    const s = await Su(e, n, i, Ga(), r);
    return Fb(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: r, promise: s } = this.eventManagers[n];
      return r ? Promise.resolve(r) : (fn(s, "If manager is not set, promise should be"), s);
    }
    const i = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: i }, i.catch(() => {
      delete this.eventManagers[n];
    }), i;
  }
  async initAndGetManager(e) {
    const n = await Oy(e), i = new gy(e);
    return n.register("authEvent", (r) => (x(
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
    this.iframes[e._key()].send(va, { type: va }, (r) => {
      const s = r?.[0]?.[va];
      s !== void 0 && n(!!s), $t(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = Ey(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return Jh() || Bh() || Wl();
  }
}
const qy = By;
var ku = "@firebase/auth", Au = "1.11.1";
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
class Gy {
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
    x(
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
function Ky(t) {
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
function Yy(t) {
  ui(new Wn(
    "auth",
    (e, { options: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: a } = i.options;
      x(o && !o.includes(":"), "invalid-api-key", { appName: i.name });
      const l = {
        apiKey: o,
        authDomain: a,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Xh(t)
      }, c = new Qv(i, r, s, l);
      return db(c, n), c;
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
  })), ui(new Wn(
    "auth-internal",
    (e) => {
      const n = Jt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((i) => new Gy(i))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), zt(ku, Au, Ky(t)), zt(ku, Au, "esm2020");
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
const Qy = 300, Jy = Ch("authIdTokenMaxAge") || Qy;
let Ru = null;
const Xy = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), i = n && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (i && i > Jy)
    return;
  const r = n?.token;
  Ru !== r && (Ru = r, await fetch(t, {
    method: r ? "POST" : "DELETE",
    headers: r ? {
      Authorization: `Bearer ${r}`
    } : {}
  }));
};
function Zy(t = $l()) {
  const e = Fo(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = ub(t, {
    popupRedirectResolver: qy,
    persistence: [
      Gb,
      Db,
      pf
    ]
  }), i = Ch("authTokenSyncURL");
  if (i && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(i, location.origin);
    if (location.origin === s.origin) {
      const o = Xy(s.toString());
      Nb(n, o, () => o(n.currentUser)), Pb(n, (a) => o(a));
    }
  }
  const r = wh("auth");
  return r && hb(n, `http://${r}`), n;
}
function ew() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
Jv({
  loadJS(t) {
    return new Promise((e, n) => {
      const i = document.createElement("script");
      i.setAttribute("src", t), i.onload = e, i.onerror = (r) => {
        const s = _t(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = r, n(s);
      }, i.type = "text/javascript", i.charset = "UTF-8", ew().appendChild(i);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
Yy(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const Pu = "@firebase/database", Nu = "1.1.0";
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
let yf = "";
function tw(t) {
  yf = t;
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
class nw {
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
    n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Le(n));
  }
  /**
   * @returns The value that was stored under this key, or null
   */
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : Kr(n);
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
class iw {
  constructor() {
    this.cache_ = {}, this.isInMemoryStorage = !0;
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : this.cache_[e] = n;
  }
  get(e) {
    return Qt(this.cache_, e) ? this.cache_[e] : null;
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
const wf = function(t) {
  try {
    if (typeof window < "u" && typeof window[t] < "u") {
      const e = window[t];
      return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new nw(e);
    }
  } catch {
  }
  return new iw();
}, ni = wf("localStorage"), rw = wf("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi = new Dl("@firebase/database"), sw = /* @__PURE__ */ (function() {
  let t = 1;
  return function() {
    return t++;
  };
})(), Ef = function(t) {
  const e = mg(t), n = new dg();
  n.update(e);
  const i = n.digest();
  return Pl.encodeByteArray(i);
}, ys = function(...t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Array.isArray(i) || i && typeof i == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof i.length == "number" ? e += ys.apply(null, i) : typeof i == "object" ? e += Le(i) : e += i, e += " ";
  }
  return e;
};
let Fr = null, xu = !0;
const ow = function(t, e) {
  C(!0, "Can't turn on custom loggers persistently."), Fi.logLevel = ue.VERBOSE, Fr = Fi.log.bind(Fi);
}, Ve = function(...t) {
  if (xu === !0 && (xu = !1, Fr === null && rw.get("logging_enabled") === !0 && ow()), Fr) {
    const e = ys.apply(null, t);
    Fr(e);
  }
}, ws = function(t) {
  return function(...e) {
    Ve(t, ...e);
  };
}, Qa = function(...t) {
  const e = "FIREBASE INTERNAL ERROR: " + ys(...t);
  Fi.error(e);
}, pn = function(...t) {
  const e = `FIREBASE FATAL ERROR: ${ys(...t)}`;
  throw Fi.error(e), new Error(e);
}, Ze = function(...t) {
  const e = "FIREBASE WARNING: " + ys(...t);
  Fi.warn(e);
}, aw = function() {
  typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
}, Kl = function(t) {
  return typeof t == "number" && (t !== t || // NaN
  t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY);
}, lw = function(t) {
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
}, qi = "[MIN_NAME]", fi = "[MAX_NAME]", wi = function(t, e) {
  if (t === e)
    return 0;
  if (t === qi || e === fi)
    return -1;
  if (e === qi || t === fi)
    return 1;
  {
    const n = Ou(t), i = Ou(e);
    return n !== null ? i !== null ? n - i === 0 ? t.length - e.length : n - i : -1 : i !== null ? 1 : t < e ? -1 : 1;
  }
}, cw = function(t, e) {
  return t === e ? 0 : t < e ? -1 : 1;
}, br = function(t, e) {
  if (e && t in e)
    return e[t];
  throw new Error("Missing required key (" + t + ") in object: " + Le(e));
}, Yl = function(t) {
  if (typeof t != "object" || t === null)
    return Le(t);
  const e = [];
  for (const i in t)
    e.push(i);
  e.sort();
  let n = "{";
  for (let i = 0; i < e.length; i++)
    i !== 0 && (n += ","), n += Le(e[i]), n += ":", n += Yl(t[e[i]]);
  return n += "}", n;
}, If = function(t, e) {
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
const Cf = function(t) {
  C(!Kl(t), "Invalid JSON number");
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
}, uw = function() {
  return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href));
}, dw = function() {
  return typeof Windows == "object" && typeof Windows.UI == "object";
};
function hw(t, e) {
  let n = "Unknown Error";
  t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
  const i = new Error(t + " at " + e._path.toString() + ": " + n);
  return i.code = t.toUpperCase(), i;
}
const fw = new RegExp("^-?(0*)\\d{1,10}$"), pw = -2147483648, mw = 2147483647, Ou = function(t) {
  if (fw.test(t)) {
    const e = Number(t);
    if (e >= pw && e <= mw)
      return e;
  }
  return null;
}, sr = function(t) {
  try {
    t();
  } catch (e) {
    setTimeout(() => {
      const n = e.stack || "";
      throw Ze("Exception was thrown by user callback.", n), e;
    }, Math.floor(0));
  }
}, _w = function() {
  return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
}, Ur = function(t, e) {
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
class gw {
  constructor(e, n) {
    this.appCheckProvider = n, this.appName = e.name, at(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = n?.getImmediate({ optional: !0 }), this.appCheck || n?.get().then((i) => this.appCheck = i);
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
class vw {
  constructor(e, n, i) {
    this.appName_ = e, this.firebaseOptions_ = n, this.authProvider_ = i, this.auth_ = null, this.auth_ = i.getImmediate({ optional: !0 }), this.auth_ || i.onInit((r) => this.auth_ = r);
  }
  getToken(e) {
    return this.auth_ ? this.auth_.getToken(e).catch((n) => n && n.code === "auth/token-not-initialized" ? (Ve("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(n)) : new Promise((n, i) => {
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
class zs {
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
zs.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ql = "5", Tf = "v", Sf = "s", kf = "r", Af = "f", Rf = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/, Pf = "ls", Nf = "p", Ja = "ac", xf = "websocket", Of = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lf {
  /**
   * @param host - Hostname portion of the url for the repo
   * @param secure - Whether or not this repo is accessed over ssl
   * @param namespace - The namespace represented by the repo
   * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
   * @param nodeAdmin - Whether this instance uses Admin SDK credentials
   * @param persistenceKey - Override the default session persistence storage key
   */
  constructor(e, n, i, r, s = !1, o = "", a = !1, l = !1, c = null) {
    this.secure = n, this.namespace = i, this.webSocketOnly = r, this.nodeAdmin = s, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this.isUsingEmulator = l, this.emulatorOptions = c, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = ni.get("host:" + e) || this._host;
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
    e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && ni.set("host:" + this._host, this.internalHost));
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
function bw(t) {
  return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams;
}
function Df(t, e, n) {
  C(typeof e == "string", "typeof type must == string"), C(typeof n == "object", "typeof params must == object");
  let i;
  if (e === xf)
    i = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === Of)
    i = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else
    throw new Error("Unknown connection type: " + e);
  bw(t) && (n.ns = t.namespace);
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
class yw {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Qt(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += n;
  }
  get() {
    return q_(this.counters_);
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
const ba = {}, ya = {};
function Jl(t) {
  const e = t.toString();
  return ba[e] || (ba[e] = new yw()), ba[e];
}
function ww(t, e) {
  const n = t.toString();
  return ya[n] || (ya[n] = e()), ya[n];
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
class Ew {
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
        i[r] && sr(() => {
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
const Lu = "start", Iw = "close", Cw = "pLPCommand", Tw = "pRTLPCB", Mf = "id", $f = "pw", Ff = "ser", Sw = "cb", kw = "seg", Aw = "ts", Rw = "d", Pw = "dframe", Uf = 1870, Hf = 30, Nw = Uf - Hf, xw = 25e3, Ow = 3e4;
class Ni {
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
    this.connId = e, this.repoInfo = n, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = ws(e), this.stats_ = Jl(n), this.urlFn = (l) => (this.appCheckToken && (l[Ja] = this.appCheckToken), Df(n, Of, l));
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.curSegmentNum = 0, this.onDisconnect_ = n, this.myPacketOrderer = new Ew(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null;
    }, Math.floor(Ow)), lw(() => {
      if (this.isClosed_)
        return;
      this.scriptTagHolder = new Xl((...s) => {
        const [o, a, l, c, d] = s;
        if (this.incrementIncomingBytes_(s), !!this.scriptTagHolder)
          if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, o === Lu)
            this.id = a, this.password = l;
          else if (o === Iw)
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
      i[Lu] = "t", i[Ff] = Math.floor(Math.random() * 1e8), this.scriptTagHolder.uniqueCallbackIdentifier && (i[Sw] = this.scriptTagHolder.uniqueCallbackIdentifier), i[Tf] = Ql, this.transportSessionId && (i[Sf] = this.transportSessionId), this.lastSessionId && (i[Pf] = this.lastSessionId), this.applicationId && (i[Nf] = this.applicationId), this.appCheckToken && (i[Ja] = this.appCheckToken), typeof location < "u" && location.hostname && Rf.test(location.hostname) && (i[kf] = Af);
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
    Ni.forceAllow_ = !0;
  }
  /**
   * Forces longpolling to not be considered as a potential transport
   */
  static forceDisallow() {
    Ni.forceDisallow_ = !0;
  }
  // Static method, use string literal so it can be accessed in a generic way
  static isAvailable() {
    return Ni.forceAllow_ ? !0 : !Ni.forceDisallow_ && typeof document < "u" && document.createElement != null && !uw() && !dw();
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
    const n = Le(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = bh(n), r = If(i, Nw);
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
    i[Pw] = "t", i[Mf] = e, i[$f] = n, this.myDisconnFrame.src = this.urlFn(i), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
  }
  /**
   * Used to track the bytes received by this client
   */
  incrementIncomingBytes_(e) {
    const n = Le(e).length;
    this.bytesReceived += n, this.stats_.incrementCounter("bytes_received", n);
  }
}
class Xl {
  /**
   * @param commandCB - The callback to be called when control commands are received from the server.
   * @param onMessageCB - The callback to be triggered when responses arrive from the server.
   * @param onDisconnect - The callback to be triggered when this tag holder is closed
   * @param urlFn - A function that provides the URL of the endpoint to send data to.
   */
  constructor(e, n, i, r) {
    this.onDisconnect = i, this.urlFn = r, this.outstandingRequests = /* @__PURE__ */ new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(Math.random() * 1e8), this.sendNewPolls = !0;
    {
      this.uniqueCallbackIdentifier = sw(), window[Cw + this.uniqueCallbackIdentifier] = e, window[Tw + this.uniqueCallbackIdentifier] = n, this.myIFrame = Xl.createIFrame_();
      let s = "";
      this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (s = '<script>document.domain="' + document.domain + '";<\/script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close();
      } catch (a) {
        Ve("frame writing exception"), a.stack && Ve(a.stack), Ve(a);
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
        e.contentWindow.document || Ve("No IE domain setting required");
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
      e[Mf] = this.myID, e[$f] = this.myPW, e[Ff] = this.currentSerial;
      let n = this.urlFn(e), i = "", r = 0;
      for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + Hf + i.length <= Uf; ) {
        const o = this.pendingSegs.shift();
        i = i + "&" + kw + r + "=" + o.seg + "&" + Aw + r + "=" + o.ts + "&" + Rw + r + "=" + o.d, r++;
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
    }, r = setTimeout(i, Math.floor(xw)), s = () => {
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
          Ve("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close();
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
const Lw = 16384, Dw = 45e3;
let lo = null;
typeof MozWebSocket < "u" ? lo = MozWebSocket : typeof WebSocket < "u" && (lo = WebSocket);
class Nt {
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
    this.connId = e, this.applicationId = i, this.appCheckToken = r, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = ws(this.connId), this.stats_ = Jl(n), this.connURL = Nt.connectionURL_(n, o, a, r, i), this.nodeAdmin = n.nodeAdmin;
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
    return o[Tf] = Ql, typeof location < "u" && location.hostname && Rf.test(location.hostname) && (o[kf] = Af), n && (o[Sf] = n), i && (o[Pf] = i), r && (o[Ja] = r), s && (o[Nf] = s), Df(e, xf, o);
  }
  /**
   * @param onMessage - Callback when messages arrive
   * @param onDisconnect - Callback with connection lost.
   */
  open(e, n) {
    this.onDisconnect = n, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, ni.set("previous_websocket_failure", !0);
    try {
      let i;
      ig(), this.mySock = new lo(this.connURL, [], i);
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
    Nt.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/, i = navigator.userAgent.match(n);
      i && i.length > 1 && parseFloat(i[1]) < 4.4 && (e = !0);
    }
    return !e && lo !== null && !Nt.forceDisallow_;
  }
  /**
   * Returns true if we previously failed to connect with this transport.
   */
  static previouslyFailed() {
    return ni.isInMemoryStorage || ni.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    ni.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if (this.frames.push(e), this.frames.length === this.totalFrames) {
      const n = this.frames.join("");
      this.frames = null;
      const i = Kr(n);
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
    const n = Le(e);
    this.bytesSent += n.length, this.stats_.incrementCounter("bytes_sent", n.length);
    const i = If(n, Lw);
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
    }, Math.floor(Dw));
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
Nt.responsesRequiredToBeHealthy = 2;
Nt.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr {
  static get ALL_TRANSPORTS() {
    return [Ni, Nt];
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
    const n = Nt && Nt.isAvailable();
    let i = n && !Nt.previouslyFailed();
    if (e.webSocketOnly && (n || Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i)
      this.transports_ = [Nt];
    else {
      const r = this.transports_ = [];
      for (const s of Jr.ALL_TRANSPORTS)
        s && s.isAvailable() && r.push(s);
      Jr.globalTransportInitialized_ = !0;
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
Jr.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mw = 6e4, $w = 5e3, Fw = 10 * 1024, Uw = 100 * 1024, wa = "t", Du = "d", Hw = "s", Mu = "r", Ww = "e", $u = "o", Fu = "a", Uu = "n", Hu = "p", Vw = "h";
class zw {
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
    this.id = e, this.repoInfo_ = n, this.applicationId_ = i, this.appCheckToken_ = r, this.authToken_ = s, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = l, this.onKill_ = c, this.lastSessionId = d, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = ws("c:" + this.id + ":"), this.transportManager_ = new Jr(n), this.log_("Connection created"), this.start_();
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
    r > 0 && (this.healthyTimeout_ = Ur(() => {
      this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > Uw ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > Fw ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()));
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
    if (wa in e) {
      const n = e[wa];
      n === Fu ? this.upgradeIfSecondaryHealthy_() : n === Mu ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === $u && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = br("t", e), i = br("d", e);
    if (n === "c")
      this.onSecondaryControl_(i);
    else if (n === "d")
      this.pendingDataMessages.push(i);
    else
      throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: Hu, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: Fu, d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: Uu, d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = br("t", e), i = br("d", e);
    n === "c" ? this.onControl_(i) : n === "d" && this.onDataMessage_(i);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = br(wa, e);
    if (Du in e) {
      const i = e[Du];
      if (n === Vw) {
        const r = {
          ...i
        };
        this.repoInfo_.isUsingEmulator && (r.h = this.repoInfo_.host), this.onHandshake_(r);
      } else if (n === Uu) {
        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
        for (let r = 0; r < this.pendingDataMessages.length; ++r)
          this.onDataMessage_(this.pendingDataMessages[r]);
        this.pendingDataMessages = [], this.tryCleanupConnection();
      } else n === Hw ? this.onConnectionShutdown_(i) : n === Mu ? this.onReset_(i) : n === Ww ? Qa("Server Error: " + i) : n === $u ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Qa("Unknown control packet command: " + n);
    }
  }
  /**
   * @param handshake - The handshake data returned from the server
   */
  onHandshake_(e) {
    const n = e.ts, i = e.v, r = e.h;
    this.sessionId = e.s, this.repoInfo_.host = r, this.state_ === 0 && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, n), Ql !== i && Ze("Protocol version mismatch detected"), this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
    const n = this.connReceiver_(this.secondaryConn_), i = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, i), Ur(() => {
      this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close());
    }, Math.floor(Mw));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, this.state_ === 1 ? this.close() : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(n, this.sessionId), this.onReady_ = null), this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Ur(() => {
      this.sendPingOnPrimaryIfNecessary_();
    }, Math.floor($w));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: Hu, d: {} } }));
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
    this.conn_ = null, !e && this.state_ === 0 ? (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (ni.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."), this.close();
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
class Wf {
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
class Vf {
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
class co extends Vf {
  static getInstance() {
    return new co();
  }
  constructor() {
    super(["online"]), this.online_ = !0, typeof window < "u" && typeof window.addEventListener < "u" && !Ll() && (window.addEventListener("online", () => {
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
const Wu = 32, Vu = 768;
class he {
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
function ne() {
  return new he("");
}
function B(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function Vn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function me(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new he(t.pieces_, e);
}
function Zl(t) {
  return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null;
}
function jw(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Xr(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function zf(t) {
  if (t.pieceNum_ >= t.pieces_.length)
    return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
    e.push(t.pieces_[n]);
  return new he(e, 0);
}
function Ee(t, e) {
  const n = [];
  for (let i = t.pieceNum_; i < t.pieces_.length; i++)
    n.push(t.pieces_[i]);
  if (e instanceof he)
    for (let i = e.pieceNum_; i < e.pieces_.length; i++)
      n.push(e.pieces_[i]);
  else {
    const i = e.split("/");
    for (let r = 0; r < i.length; r++)
      i[r].length > 0 && n.push(i[r]);
  }
  return new he(n, 0);
}
function G(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Xe(t, e) {
  const n = B(t), i = B(e);
  if (n === null)
    return e;
  if (n === i)
    return Xe(me(t), me(e));
  throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")");
}
function Bw(t, e) {
  const n = Xr(t, 0), i = Xr(e, 0);
  for (let r = 0; r < n.length && r < i.length; r++) {
    const s = wi(n[r], i[r]);
    if (s !== 0)
      return s;
  }
  return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
}
function ec(t, e) {
  if (Vn(t) !== Vn(e))
    return !1;
  for (let n = t.pieceNum_, i = e.pieceNum_; n <= t.pieces_.length; n++, i++)
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
  return !0;
}
function yt(t, e) {
  let n = t.pieceNum_, i = e.pieceNum_;
  if (Vn(t) > Vn(e))
    return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[i])
      return !1;
    ++n, ++i;
  }
  return !0;
}
class qw {
  /**
   * @param path - Initial Path.
   * @param errorPrefix_ - Prefix for any error messages.
   */
  constructor(e, n) {
    this.errorPrefix_ = n, this.parts_ = Xr(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
    for (let i = 0; i < this.parts_.length; i++)
      this.byteLength_ += $o(this.parts_[i]);
    jf(this);
  }
}
function Gw(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1), t.parts_.push(e), t.byteLength_ += $o(e), jf(t);
}
function Kw(t) {
  const e = t.parts_.pop();
  t.byteLength_ -= $o(e), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function jf(t) {
  if (t.byteLength_ > Vu)
    throw new Error(t.errorPrefix_ + "has a key path longer than " + Vu + " bytes (" + t.byteLength_ + ").");
  if (t.parts_.length > Wu)
    throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Wu + ") or object contains a cycle " + Zn(t));
}
function Zn(t) {
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
class tc extends Vf {
  static getInstance() {
    return new tc();
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
const yr = 1e3, Yw = 300 * 1e3, zu = 30 * 1e3, Qw = 1.3, Jw = 3e4, Xw = "server_kill", ju = 3;
class dn extends Wf {
  /**
   * @param repoInfo_ - Data about the namespace we are connecting to
   * @param applicationId_ - The Firebase App ID for this project
   * @param onDataUpdate_ - A callback for new data from the server
   */
  constructor(e, n, i, r, s, o, a, l) {
    if (super(), this.repoInfo_ = e, this.applicationId_ = n, this.onDataUpdate_ = i, this.onConnectStatus_ = r, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = dn.nextPersistentConnectionId_++, this.log_ = ws("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = /* @__PURE__ */ new Map(), this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = yr, this.maxReconnectDelay_ = Yw, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l)
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    tc.getInstance().on("visible", this.onVisible_, this), e.host.indexOf("fblocal") === -1 && co.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, i) {
    const r = ++this.requestNumber_, s = { r, a: e, b: n };
    this.log_(Le(s)), C(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), i && (this.requestCBHash_[r] = i);
  }
  get(e) {
    this.initConnection_();
    const n = new ps(), r = {
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
      dn.warnOnListenWarnings_(l, n), (this.listens.get(i) && this.listens.get(i).get(r)) === e && (this.log_("listen response", a), c !== "ok" && this.removeListen_(i, r), e.onComplete && e.onComplete(c, l));
    });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Qt(e, "w")) {
      const i = ji(e, "w");
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
    (e && e.length === 40 || ug(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = zu);
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
      const e = this.authToken_, n = cg(e) ? "auth" : "gauth", i = { cred: e };
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
      this.log_("from server: " + Le(e));
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
    ) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : Qa("Unrecognized action received from server: " + Le(e) + `
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
    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = yr, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
  }
  onOnline_(e) {
    e ? (this.log_("Browser went online."), this.reconnectDelay_ = yr, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
      this.visible_ ? this.lastConnectionEstablishedTime_ && ((/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_ > Jw && (this.reconnectDelay_ = yr), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime());
      const e = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
      let n = Math.max(0, this.reconnectDelay_ - e);
      n = Math.random() * n, this.log_("Trying to reconnect in " + n + "ms"), this.scheduleConnect_(n), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Qw);
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime(), this.lastConnectionEstablishedTime_ = null;
      const e = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), i = this.onRealtimeDisconnect_.bind(this), r = this.id + ":" + dn.nextConnectionId_++, s = this.lastSessionId;
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
        o ? Ve("getToken() completed but was canceled") : (Ve("getToken() completed. Creating connection."), this.authToken_ = h && h.accessToken, this.appCheckToken_ = u && u.token, a = new zw(
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
            Ze(f + " (" + this.repoInfo_.toString() + ")"), this.interrupt(Xw);
          },
          s
        ));
      } catch (h) {
        this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && Ze(h), l());
      }
    }
  }
  interrupt(e) {
    Ve("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    Ve("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Wa(this.interruptReasons_) && (this.reconnectDelay_ = yr, this.realtime_ || this.scheduleConnect_(0));
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
    n ? i = n.map((s) => Yl(s)).join("$") : i = "default";
    const r = this.removeListen_(e, i);
    r && r.onComplete && r.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const i = new he(e).toString();
    let r;
    if (this.listens.has(i)) {
      const s = this.listens.get(i);
      r = s.get(n), s.delete(n), s.size === 0 && this.listens.delete(i);
    } else
      r = void 0;
    return r;
  }
  onAuthRevoked_(e, n) {
    Ve("Auth token revoked: " + e + "/" + n), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= ju && (this.reconnectDelay_ = zu, this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    Ve("App check token revoked: " + e + "/" + n), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= ju && this.appCheckTokenProvider_.notifyForInvalidToken());
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
    e["sdk." + n + "." + yf.replace(/\./g, "-")] = 1, Ll() ? e["framework.cordova"] = 1 : Sh() && (e["framework.reactnative"] = 1), this.reportStats(e);
  }
  shouldReconnect_() {
    const e = co.getInstance().currentlyOnline();
    return Wa(this.interruptReasons_) && e;
  }
}
dn.nextPersistentConnectionId_ = 0;
dn.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Vo {
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
    const i = new q(qi, e), r = new q(qi, n);
    return this.compare(i, r) !== 0;
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
let Ds;
class Bf extends Vo {
  static get __EMPTY_NODE() {
    return Ds;
  }
  static set __EMPTY_NODE(e) {
    Ds = e;
  }
  compare(e, n) {
    return wi(e.name, n.name);
  }
  isDefinedOn(e) {
    throw ir("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return q.MIN;
  }
  maxPost() {
    return new q(fi, Ds);
  }
  makePost(e, n) {
    return C(typeof e == "string", "KeyIndex indexValue must always be a string."), new q(e, Ds);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".key";
  }
}
const Ui = new Bf();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms {
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
class Ue {
  /**
   * @param key - Key associated with this node.
   * @param value - Value associated with this node.
   * @param color - Whether this node is red.
   * @param left - Left child.
   * @param right - Right child.
   */
  constructor(e, n, i, r, s) {
    this.key = e, this.value = n, this.color = i ?? Ue.RED, this.left = r ?? ct.EMPTY_NODE, this.right = s ?? ct.EMPTY_NODE;
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
    return new Ue(e ?? this.key, n ?? this.value, i ?? this.color, r ?? this.left, s ?? this.right);
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
      return ct.EMPTY_NODE;
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
          return ct.EMPTY_NODE;
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
    const e = this.copy(null, null, Ue.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  /**
   * @returns New tree, after rotateRight.
   */
  rotateRight_() {
    const e = this.copy(null, null, Ue.RED, this.left.right, null);
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
Ue.RED = !0;
Ue.BLACK = !1;
class Zw {
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
    return new Ue(e, n, null);
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
class ct {
  /**
   * @param comparator_ - Key comparator.
   * @param root_ - Optional root node for the map.
   */
  constructor(e, n = ct.EMPTY_NODE) {
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
    return new ct(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Ue.BLACK, null, null));
  }
  /**
   * Returns a copy of the map, with the specified key removed.
   *
   * @param key - The key to remove.
   * @returns New map, with item removed.
   */
  remove(e) {
    return new ct(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Ue.BLACK, null, null));
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
    return new Ms(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new Ms(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new Ms(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new Ms(this.root_, null, this.comparator_, !0, e);
  }
}
ct.EMPTY_NODE = new Zw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e1(t, e) {
  return wi(t.name, e.name);
}
function nc(t, e) {
  return wi(t, e);
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
let Xa;
function t1(t) {
  Xa = t;
}
const qf = function(t) {
  return typeof t == "number" ? "number:" + Cf(t) : "string:" + t;
}, Gf = function(t) {
  if (t.isLeafNode()) {
    const e = t.val();
    C(typeof e == "string" || typeof e == "number" || typeof e == "object" && Qt(e, ".sv"), "Priority must be a string or number.");
  } else
    C(t === Xa || t.isEmpty(), "priority of unexpected type.");
  C(t === Xa || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
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
let Bu;
class Fe {
  static set __childrenNodeConstructor(e) {
    Bu = e;
  }
  static get __childrenNodeConstructor() {
    return Bu;
  }
  /**
   * @param value_ - The value to store in this leaf node. The object type is
   * possible in the event of a deferred value
   * @param priorityNode_ - The priority of this node.
   */
  constructor(e, n = Fe.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, C(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."), Gf(this.priorityNode_);
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
    return new Fe(this.value_, e);
  }
  /** @inheritDoc */
  getImmediateChild(e) {
    return e === ".priority" ? this.priorityNode_ : Fe.__childrenNodeConstructor.EMPTY_NODE;
  }
  /** @inheritDoc */
  getChild(e) {
    return G(e) ? this : B(e) === ".priority" ? this.priorityNode_ : Fe.__childrenNodeConstructor.EMPTY_NODE;
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
    return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = B(e);
    return i === null ? n : n.isEmpty() && i !== ".priority" ? this : (C(i !== ".priority" || Vn(e) === 1, ".priority must be the last token in a path"), this.updateImmediateChild(i, Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e), n)));
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
      this.priorityNode_.isEmpty() || (e += "priority:" + qf(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      e += n + ":", n === "number" ? e += Cf(this.value_) : e += this.value_, this.lazyHash_ = Ef(e);
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
    return e === Fe.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof Fe.__childrenNodeConstructor ? -1 : (C(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  /**
   * Comparison specifically for two leaf nodes
   */
  compareToLeafNode_(e) {
    const n = typeof e.value_, i = typeof this.value_, r = Fe.VALUE_TYPE_ORDER.indexOf(n), s = Fe.VALUE_TYPE_ORDER.indexOf(i);
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
Fe.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Kf, Yf;
function n1(t) {
  Kf = t;
}
function i1(t) {
  Yf = t;
}
class r1 extends Vo {
  compare(e, n) {
    const i = e.node.getPriority(), r = n.node.getPriority(), s = i.compareTo(r);
    return s === 0 ? wi(e.name, n.name) : s;
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
    return new q(fi, new Fe("[PRIORITY-POST]", Yf));
  }
  makePost(e, n) {
    const i = Kf(e);
    return new q(n, new Fe("[PRIORITY-POST]", i));
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".priority";
  }
}
const Ie = new r1();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s1 = Math.log(2);
class o1 {
  constructor(e) {
    const n = (s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseInt(Math.log(s) / s1, 10)
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
const uo = function(t, e, n, i) {
  t.sort(e);
  const r = function(l, c) {
    const d = c - l;
    let h, u;
    if (d === 0)
      return null;
    if (d === 1)
      return h = t[l], u = n ? n(h) : h, new Ue(u, h.node, Ue.BLACK, null, null);
    {
      const f = parseInt(d / 2, 10) + l, p = r(l, f), g = r(f + 1, c);
      return h = t[f], u = n ? n(h) : h, new Ue(u, h.node, Ue.BLACK, p, g);
    }
  }, s = function(l) {
    let c = null, d = null, h = t.length;
    const u = function(p, g) {
      const E = h - p, T = h;
      h -= p;
      const S = r(E + 1, T), k = t[E], A = n ? n(k) : k;
      f(new Ue(A, k.node, g, null, S));
    }, f = function(p) {
      c ? (c.left = p, c = p) : (d = p, c = p);
    };
    for (let p = 0; p < l.count; ++p) {
      const g = l.nextBitIsOne(), E = Math.pow(2, l.count - (p + 1));
      g ? u(E, Ue.BLACK) : (u(E, Ue.BLACK), u(E, Ue.RED));
    }
    return d;
  }, o = new o1(t.length), a = s(o);
  return new ct(i || e, a);
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
let Ea;
const ki = {};
class on {
  /**
   * The default IndexMap for nodes without a priority
   */
  static get Default() {
    return C(ki && Ie, "ChildrenNode.ts has not been loaded"), Ea = Ea || new on({ ".priority": ki }, { ".priority": Ie }), Ea;
  }
  constructor(e, n) {
    this.indexes_ = e, this.indexSet_ = n;
  }
  get(e) {
    const n = ji(this.indexes_, e);
    if (!n)
      throw new Error("No index defined for " + e);
    return n instanceof ct ? n : null;
  }
  hasIndex(e) {
    return Qt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    C(e !== Ui, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const i = [];
    let r = !1;
    const s = n.getIterator(q.Wrap);
    let o = s.getNext();
    for (; o; )
      r = r || e.isDefinedOn(o.node), i.push(o), o = s.getNext();
    let a;
    r ? a = uo(i, e.getCompare()) : a = ki;
    const l = e.toString(), c = { ...this.indexSet_ };
    c[l] = e;
    const d = { ...this.indexes_ };
    return d[l] = a, new on(d, c);
  }
  /**
   * Ensure that this node is properly tracked in any indexes that we're maintaining
   */
  addToIndexes(e, n) {
    const i = eo(this.indexes_, (r, s) => {
      const o = ji(this.indexSet_, s);
      if (C(o, "Missing index implementation for " + s), r === ki)
        if (o.isDefinedOn(e.node)) {
          const a = [], l = n.getIterator(q.Wrap);
          let c = l.getNext();
          for (; c; )
            c.name !== e.name && a.push(c), c = l.getNext();
          return a.push(e), uo(a, o.getCompare());
        } else
          return ki;
      else {
        const a = n.get(e.name);
        let l = r;
        return a && (l = l.remove(new q(e.name, a))), l.insert(e, e.node);
      }
    });
    return new on(i, this.indexSet_);
  }
  /**
   * Create a new IndexMap instance with the given value removed
   */
  removeFromIndexes(e, n) {
    const i = eo(this.indexes_, (r) => {
      if (r === ki)
        return r;
      {
        const s = n.get(e.name);
        return s ? r.remove(new q(e.name, s)) : r;
      }
    });
    return new on(i, this.indexSet_);
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
let wr;
class $ {
  static get EMPTY_NODE() {
    return wr || (wr = new $(new ct(nc), null, on.Default));
  }
  /**
   * @param children_ - List of children of this node..
   * @param priorityNode_ - The priority of this node (as a snapshot node).
   */
  constructor(e, n, i) {
    this.children_ = e, this.priorityNode_ = n, this.indexMap_ = i, this.lazyHash_ = null, this.priorityNode_ && Gf(this.priorityNode_), this.children_.isEmpty() && C(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
  }
  /** @inheritDoc */
  isLeafNode() {
    return !1;
  }
  /** @inheritDoc */
  getPriority() {
    return this.priorityNode_ || wr;
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
      return n === null ? wr : n;
    }
  }
  /** @inheritDoc */
  getChild(e) {
    const n = B(e);
    return n === null ? this : this.getImmediateChild(n).getChild(me(e));
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
      const i = new q(e, n);
      let r, s;
      n.isEmpty() ? (r = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(i, this.children_)) : (r = this.children_.insert(e, n), s = this.indexMap_.addToIndexes(i, this.children_));
      const o = r.isEmpty() ? wr : this.priorityNode_;
      return new $(r, o, s);
    }
  }
  /** @inheritDoc */
  updateChild(e, n) {
    const i = B(e);
    if (i === null)
      return n;
    {
      C(B(e) !== ".priority" || Vn(e) === 1, ".priority must be the last token in a path");
      const r = this.getImmediateChild(i).updateChild(me(e), n);
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
    if (this.forEachChild(Ie, (o, a) => {
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
      this.getPriority().isEmpty() || (e += "priority:" + qf(this.getPriority().val()) + ":"), this.forEachChild(Ie, (n, i) => {
        const r = i.hash();
        r !== "" && (e += ":" + n + ":" + r);
      }), this.lazyHash_ = e === "" ? "" : Ef(e);
    }
    return this.lazyHash_;
  }
  /** @inheritDoc */
  getPredecessorChildName(e, n, i) {
    const r = this.resolveIndex_(i);
    if (r) {
      const s = r.getPredecessorKey(new q(e, n));
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
    return n ? new q(n, this.children_.get(n)) : null;
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
    return n ? new q(n, this.children_.get(n)) : null;
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
      const r = this.children_.getIteratorFrom(e.name, q.Wrap);
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
      const r = this.children_.getReverseIteratorFrom(e.name, q.Wrap);
      let s = r.peek();
      for (; s != null && n.compare(s, e) > 0; )
        r.getNext(), s = r.peek();
      return r;
    }
  }
  compareTo(e) {
    return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Es ? -1 : 0;
  }
  withIndex(e) {
    if (e === Ui || this.indexMap_.hasIndex(e))
      return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new $(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === Ui || this.indexMap_.hasIndex(e);
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
          const i = this.getIterator(Ie), r = n.getIterator(Ie);
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
    return e === Ui ? null : this.indexMap_.get(e.toString());
  }
}
$.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class a1 extends $ {
  constructor() {
    super(new ct(nc), $.EMPTY_NODE, on.Default);
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
const Es = new a1();
Object.defineProperties(q, {
  MIN: {
    value: new q(qi, $.EMPTY_NODE)
  },
  MAX: {
    value: new q(fi, Es)
  }
});
Bf.__EMPTY_NODE = $.EMPTY_NODE;
Fe.__childrenNodeConstructor = $;
t1(Es);
i1(Es);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l1 = !0;
function Oe(t, e = null) {
  if (t === null)
    return $.EMPTY_NODE;
  if (typeof t == "object" && ".priority" in t && (e = t[".priority"]), C(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e), typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]), typeof t != "object" || ".sv" in t) {
    const n = t;
    return new Fe(n, Oe(e));
  }
  if (!(t instanceof Array) && l1) {
    const n = [];
    let i = !1;
    if (je(t, (o, a) => {
      if (o.substring(0, 1) !== ".") {
        const l = Oe(a);
        l.isEmpty() || (i = i || !l.getPriority().isEmpty(), n.push(new q(o, l)));
      }
    }), n.length === 0)
      return $.EMPTY_NODE;
    const s = uo(n, e1, (o) => o.name, nc);
    if (i) {
      const o = uo(n, Ie.getCompare());
      return new $(s, Oe(e), new on({ ".priority": o }, { ".priority": Ie }));
    } else
      return new $(s, Oe(e), on.Default);
  } else {
    let n = $.EMPTY_NODE;
    return je(t, (i, r) => {
      if (Qt(t, i) && i.substring(0, 1) !== ".") {
        const s = Oe(r);
        (s.isLeafNode() || !s.isEmpty()) && (n = n.updateImmediateChild(i, s));
      }
    }), n.updatePriority(Oe(e));
  }
}
n1(Oe);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c1 extends Vo {
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
    const i = this.extractChild(e.node), r = this.extractChild(n.node), s = i.compareTo(r);
    return s === 0 ? wi(e.name, n.name) : s;
  }
  makePost(e, n) {
    const i = Oe(e), r = $.EMPTY_NODE.updateChild(this.indexPath_, i);
    return new q(n, r);
  }
  maxPost() {
    const e = $.EMPTY_NODE.updateChild(this.indexPath_, Es);
    return new q(fi, e);
  }
  toString() {
    return Xr(this.indexPath_, 0).join("/");
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
class u1 extends Vo {
  compare(e, n) {
    const i = e.node.compareTo(n.node);
    return i === 0 ? wi(e.name, n.name) : i;
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
    const i = Oe(e);
    return new q(n, i);
  }
  /**
   * @returns String representation for inclusion in a query spec
   */
  toString() {
    return ".value";
  }
}
const d1 = new u1();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qf(t) {
  return { type: "value", snapshotNode: t };
}
function Gi(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function Zr(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function es(t, e, n) {
  return {
    type: "child_changed",
    snapshotNode: e,
    childName: t,
    oldSnap: n
  };
}
function h1(t, e) {
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
class ic {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, i, r, s, o) {
    C(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const a = e.getImmediateChild(n);
    return a.getChild(r).equals(i.getChild(r)) && a.isEmpty() === i.isEmpty() || (o != null && (i.isEmpty() ? e.hasChild(n) ? o.trackChildChange(Zr(n, a)) : C(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(Gi(n, i)) : o.trackChildChange(es(n, i, a))), e.isLeafNode() && i.isEmpty()) ? e : e.updateImmediateChild(n, i).withIndex(this.index_);
  }
  updateFullNode(e, n, i) {
    return i != null && (e.isLeafNode() || e.forEachChild(Ie, (r, s) => {
      n.hasChild(r) || i.trackChildChange(Zr(r, s));
    }), n.isLeafNode() || n.forEachChild(Ie, (r, s) => {
      if (e.hasChild(r)) {
        const o = e.getImmediateChild(r);
        o.equals(s) || i.trackChildChange(es(r, s, o));
      } else
        i.trackChildChange(Gi(r, s));
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
class ts {
  constructor(e) {
    this.indexedFilter_ = new ic(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = ts.getStartPost_(e), this.endPost_ = ts.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
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
    return this.matches(new q(n, i)) || (i = $.EMPTY_NODE), this.indexedFilter_.updateChild(e, n, i, r, s, o);
  }
  updateFullNode(e, n, i) {
    n.isLeafNode() && (n = $.EMPTY_NODE);
    let r = n.withIndex(this.index_);
    r = r.updatePriority($.EMPTY_NODE);
    const s = this;
    return n.forEachChild(Ie, (o, a) => {
      s.matches(new q(o, a)) || (r = r.updateImmediateChild(o, $.EMPTY_NODE));
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
class f1 {
  constructor(e) {
    this.withinDirectionalStart = (n) => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n), this.withinDirectionalEnd = (n) => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n), this.withinStartPost = (n) => {
      const i = this.index_.compare(this.rangedFilter_.getStartPost(), n);
      return this.startIsInclusive_ ? i <= 0 : i < 0;
    }, this.withinEndPost = (n) => {
      const i = this.index_.compare(n, this.rangedFilter_.getEndPost());
      return this.endIsInclusive_ ? i <= 0 : i < 0;
    }, this.rangedFilter_ = new ts(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_;
  }
  updateChild(e, n, i, r, s, o) {
    return this.rangedFilter_.matches(new q(n, i)) || (i = $.EMPTY_NODE), e.getImmediateChild(n).equals(i) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, i, r, s, o) : this.fullLimitUpdateChild_(e, n, i, s, o);
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
    const l = new q(n, i), c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_), d = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const h = a.getImmediateChild(n);
      let u = r.getChildAfterChild(this.index_, c, this.reverse_);
      for (; u != null && (u.name === n || a.hasChild(u.name)); )
        u = r.getChildAfterChild(this.index_, u, this.reverse_);
      const f = u == null ? 1 : o(u, l);
      if (d && !i.isEmpty() && f >= 0)
        return s?.trackChildChange(es(n, i, h)), a.updateImmediateChild(n, i);
      {
        s?.trackChildChange(Zr(n, h));
        const g = a.updateImmediateChild(n, $.EMPTY_NODE);
        return u != null && this.rangedFilter_.matches(u) ? (s?.trackChildChange(Gi(u.name, u.node)), g.updateImmediateChild(u.name, u.node)) : g;
      }
    } else return i.isEmpty() ? e : d && o(c, l) >= 0 ? (s != null && (s.trackChildChange(Zr(c.name, c.node)), s.trackChildChange(Gi(n, i))), a.updateImmediateChild(n, i).updateImmediateChild(c.name, $.EMPTY_NODE)) : e;
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
class rc {
  constructor() {
    this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = Ie;
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
    return C(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : qi;
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
    return C(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : fi;
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
    return this.loadsAllData() && this.index_ === Ie;
  }
  copy() {
    const e = new rc();
    return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
  }
}
function p1(t) {
  return t.loadsAllData() ? new ic(t.getIndex()) : t.hasLimit() ? new f1(t) : new ts(t);
}
function qu(t) {
  const e = {};
  if (t.isDefault())
    return e;
  let n;
  if (t.index_ === Ie ? n = "$priority" : t.index_ === d1 ? n = "$value" : t.index_ === Ui ? n = "$key" : (C(t.index_ instanceof c1, "Unrecognized index type!"), n = t.index_.toString()), e.orderBy = Le(n), t.startSet_) {
    const i = t.startAfterSet_ ? "startAfter" : "startAt";
    e[i] = Le(t.indexStartValue_), t.startNameSet_ && (e[i] += "," + Le(t.indexStartName_));
  }
  if (t.endSet_) {
    const i = t.endBeforeSet_ ? "endBefore" : "endAt";
    e[i] = Le(t.indexEndValue_), t.endNameSet_ && (e[i] += "," + Le(t.indexEndName_));
  }
  return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_), e;
}
function Gu(t) {
  const e = {};
  if (t.startSet_ && (e.sp = t.indexStartValue_, t.startNameSet_ && (e.sn = t.indexStartName_), e.sin = !t.startAfterSet_), t.endSet_ && (e.ep = t.indexEndValue_, t.endNameSet_ && (e.en = t.indexEndName_), e.ein = !t.endBeforeSet_), t.limitSet_) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"), e.vf = n;
  }
  return t.index_ !== Ie && (e.i = t.index_.toString()), e;
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
class ho extends Wf {
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
    super(), this.repoInfo_ = e, this.onDataUpdate_ = n, this.authTokenProvider_ = i, this.appCheckTokenProvider_ = r, this.log_ = ws("p:rest:"), this.listens_ = {};
  }
  /** @inheritDoc */
  listen(e, n, i, r) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = ho.getListenId_(e, i), a = {};
    this.listens_[o] = a;
    const l = qu(e._queryParams);
    this.restRequest_(s + ".json", l, (c, d) => {
      let h = d;
      if (c === 404 && (h = null, c = null), c === null && this.onDataUpdate_(
        s,
        h,
        /*isMerge=*/
        !1,
        i
      ), ji(this.listens_, o) === a) {
        let u;
        c ? c === 401 ? u = "permission_denied" : u = "rest_error:" + c : u = "ok", r(u, null);
      }
    });
  }
  /** @inheritDoc */
  unlisten(e, n) {
    const i = ho.getListenId_(e, n);
    delete this.listens_[i];
  }
  get(e) {
    const n = qu(e._queryParams), i = e._path.toString(), r = new ps();
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
      const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + bi(n);
      this.log_("Sending REST request for " + o);
      const a = new XMLHttpRequest();
      a.onreadystatechange = () => {
        if (i && a.readyState === 4) {
          this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
          let l = null;
          if (a.status >= 200 && a.status < 300) {
            try {
              l = Kr(a.responseText);
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
class m1 {
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
function fo() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function Jf(t, e, n) {
  if (G(e))
    t.value = n, t.children.clear();
  else if (t.value !== null)
    t.value = t.value.updateChild(e, n);
  else {
    const i = B(e);
    t.children.has(i) || t.children.set(i, fo());
    const r = t.children.get(i);
    e = me(e), Jf(r, e, n);
  }
}
function Za(t, e, n) {
  t.value !== null ? n(e, t.value) : _1(t, (i, r) => {
    const s = new he(e.toString() + "/" + i);
    Za(r, s, n);
  });
}
function _1(t, e) {
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
class g1 {
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
const Ku = 10 * 1e3, v1 = 30 * 1e3, b1 = 300 * 1e3;
class y1 {
  constructor(e, n) {
    this.server_ = n, this.statsToReport_ = {}, this.statsListener_ = new g1(e);
    const i = Ku + (v1 - Ku) * Math.random();
    Ur(this.reportStats_.bind(this), Math.floor(i));
  }
  reportStats_() {
    const e = this.statsListener_.get(), n = {};
    let i = !1;
    je(e, (r, s) => {
      s > 0 && Qt(this.statsToReport_, r) && (n[r] = s, i = !0);
    }), i && this.server_.reportStats(n), Ur(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * b1));
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
var Lt;
(function(t) {
  t[t.OVERWRITE = 0] = "OVERWRITE", t[t.MERGE = 1] = "MERGE", t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
})(Lt || (Lt = {}));
function sc() {
  return {
    fromUser: !0,
    fromServer: !1,
    queryId: null,
    tagged: !1
  };
}
function oc() {
  return {
    fromUser: !1,
    fromServer: !0,
    queryId: null,
    tagged: !1
  };
}
function ac(t) {
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
class po {
  /**
   * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
   */
  constructor(e, n, i) {
    this.path = e, this.affectedTree = n, this.revert = i, this.type = Lt.ACK_USER_WRITE, this.source = sc();
  }
  operationForChild(e) {
    if (G(this.path)) {
      if (this.affectedTree.value != null)
        return C(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
      {
        const n = this.affectedTree.subtree(new he(e));
        return new po(ne(), n, this.revert);
      }
    } else return C(B(this.path) === e, "operationForChild called for unrelated child."), new po(me(this.path), this.affectedTree, this.revert);
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
  constructor(e, n) {
    this.source = e, this.path = n, this.type = Lt.LISTEN_COMPLETE;
  }
  operationForChild(e) {
    return G(this.path) ? new ns(this.source, ne()) : new ns(this.source, me(this.path));
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
class pi {
  constructor(e, n, i) {
    this.source = e, this.path = n, this.snap = i, this.type = Lt.OVERWRITE;
  }
  operationForChild(e) {
    return G(this.path) ? new pi(this.source, ne(), this.snap.getImmediateChild(e)) : new pi(this.source, me(this.path), this.snap);
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
  constructor(e, n, i) {
    this.source = e, this.path = n, this.children = i, this.type = Lt.MERGE;
  }
  operationForChild(e) {
    if (G(this.path)) {
      const n = this.children.subtree(new he(e));
      return n.isEmpty() ? null : n.value ? new pi(this.source, ne(), n.value) : new Ki(this.source, ne(), n);
    } else
      return C(B(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Ki(this.source, me(this.path), this.children);
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
class zn {
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
class w1 {
  constructor(e) {
    this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
  }
}
function E1(t, e, n, i) {
  const r = [], s = [];
  return e.forEach((o) => {
    o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && s.push(h1(o.childName, o.snapshotNode));
  }), Er(t, r, "child_removed", e, i, n), Er(t, r, "child_added", e, i, n), Er(t, r, "child_moved", s, i, n), Er(t, r, "child_changed", e, i, n), Er(t, r, "value", e, i, n), r;
}
function Er(t, e, n, i, r, s) {
  const o = i.filter((a) => a.type === n);
  o.sort((a, l) => C1(t, a, l)), o.forEach((a) => {
    const l = I1(t, a, s);
    r.forEach((c) => {
      c.respondsTo(a.type) && e.push(c.createEvent(l, t.query_));
    });
  });
}
function I1(t, e, n) {
  return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)), e;
}
function C1(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw ir("Should only compare child_ events.");
  const i = new q(e.childName, e.snapshotNode), r = new q(n.childName, n.snapshotNode);
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
function zo(t, e) {
  return { eventCache: t, serverCache: e };
}
function Hr(t, e, n, i) {
  return zo(new zn(e, n, i), t.serverCache);
}
function Xf(t, e, n, i) {
  return zo(t.eventCache, new zn(e, n, i));
}
function mo(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function mi(t) {
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
let Ia;
const T1 = () => (Ia || (Ia = new ct(cw)), Ia);
class pe {
  static fromObject(e) {
    let n = new pe(null);
    return je(e, (i, r) => {
      n = n.set(new he(i), r);
    }), n;
  }
  constructor(e, n = T1()) {
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
      return { path: ne(), value: this.value };
    if (G(e))
      return null;
    {
      const i = B(e), r = this.children.get(i);
      if (r !== null) {
        const s = r.findRootMostMatchingPathAndValue(me(e), n);
        return s != null ? { path: Ee(new he(i), s.path), value: s.value } : null;
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
      const n = B(e), i = this.children.get(n);
      return i !== null ? i.subtree(me(e)) : new pe(null);
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
      return new pe(n, this.children);
    {
      const i = B(e), s = (this.children.get(i) || new pe(null)).set(me(e), n), o = this.children.insert(i, s);
      return new pe(this.value, o);
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
      return this.children.isEmpty() ? new pe(null) : new pe(null, this.children);
    {
      const n = B(e), i = this.children.get(n);
      if (i) {
        const r = i.remove(me(e));
        let s;
        return r.isEmpty() ? s = this.children.remove(n) : s = this.children.insert(n, r), this.value === null && s.isEmpty() ? new pe(null) : new pe(this.value, s);
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
      const n = B(e), i = this.children.get(n);
      return i ? i.get(me(e)) : null;
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
      const i = B(e), s = (this.children.get(i) || new pe(null)).setTree(me(e), n);
      let o;
      return s.isEmpty() ? o = this.children.remove(i) : o = this.children.insert(i, s), new pe(this.value, o);
    }
  }
  /**
   * Performs a depth first fold on this tree. Transforms a tree into a single
   * value, given a function that operates on the path to a node, an optional
   * current value, and a map of child names to folded subtrees
   */
  fold(e) {
    return this.fold_(ne(), e);
  }
  /**
   * Recursive helper for public-facing fold() method
   */
  fold_(e, n) {
    const i = {};
    return this.children.inorderTraversal((r, s) => {
      i[r] = s.fold_(Ee(e, r), n);
    }), n(e, this.value, i);
  }
  /**
   * Find the first matching value on the given path. Return the result of applying f to it.
   */
  findOnPath(e, n) {
    return this.findOnPath_(e, ne(), n);
  }
  findOnPath_(e, n, i) {
    const r = this.value ? i(n, this.value) : !1;
    if (r)
      return r;
    if (G(e))
      return null;
    {
      const s = B(e), o = this.children.get(s);
      return o ? o.findOnPath_(me(e), Ee(n, s), i) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, ne(), n);
  }
  foreachOnPath_(e, n, i) {
    if (G(e))
      return this;
    {
      this.value && i(n, this.value);
      const r = B(e), s = this.children.get(r);
      return s ? s.foreachOnPath_(me(e), Ee(n, r), i) : new pe(null);
    }
  }
  /**
   * Calls the given function for each node in the tree that has a value.
   *
   * @param f - A function to be called with the path from the root of the tree to
   * a node, and the value at that node. Called in depth-first order.
   */
  foreach(e) {
    this.foreach_(ne(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((i, r) => {
      r.foreach_(Ee(e, i), n);
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
class Mt {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new Mt(new pe(null));
  }
}
function Wr(t, e, n) {
  if (G(e))
    return new Mt(new pe(n));
  {
    const i = t.writeTree_.findRootMostValueAndPath(e);
    if (i != null) {
      const r = i.path;
      let s = i.value;
      const o = Xe(r, e);
      return s = s.updateChild(o, n), new Mt(t.writeTree_.set(r, s));
    } else {
      const r = new pe(n), s = t.writeTree_.setTree(e, r);
      return new Mt(s);
    }
  }
}
function el(t, e, n) {
  let i = t;
  return je(n, (r, s) => {
    i = Wr(i, Ee(e, r), s);
  }), i;
}
function Yu(t, e) {
  if (G(e))
    return Mt.empty();
  {
    const n = t.writeTree_.setTree(e, new pe(null));
    return new Mt(n);
  }
}
function tl(t, e) {
  return Ei(t, e) != null;
}
function Ei(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Xe(n.path, e)) : null;
}
function Qu(t) {
  const e = [], n = t.writeTree_.value;
  return n != null ? n.isLeafNode() || n.forEachChild(Ie, (i, r) => {
    e.push(new q(i, r));
  }) : t.writeTree_.children.inorderTraversal((i, r) => {
    r.value != null && e.push(new q(i, r.value));
  }), e;
}
function $n(t, e) {
  if (G(e))
    return t;
  {
    const n = Ei(t, e);
    return n != null ? new Mt(new pe(n)) : new Mt(t.writeTree_.subtree(e));
  }
}
function nl(t) {
  return t.writeTree_.isEmpty();
}
function Yi(t, e) {
  return Zf(ne(), t.writeTree_, e);
}
function Zf(t, e, n) {
  if (e.value != null)
    return n.updateChild(t, e.value);
  {
    let i = null;
    return e.children.inorderTraversal((r, s) => {
      r === ".priority" ? (C(s.value !== null, "Priority writes must always be leaf nodes"), i = s.value) : n = Zf(Ee(t, r), s, n);
    }), !n.getChild(t).isEmpty() && i !== null && (n = n.updateChild(Ee(t, ".priority"), i)), n;
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
function jo(t, e) {
  return ip(e, t);
}
function S1(t, e, n, i, r) {
  C(i > t.lastWriteId, "Stacking an older write on top of newer ones"), r === void 0 && (r = !0), t.allWrites.push({
    path: e,
    snap: n,
    writeId: i,
    visible: r
  }), r && (t.visibleWrites = Wr(t.visibleWrites, e, n)), t.lastWriteId = i;
}
function k1(t, e, n, i) {
  C(i > t.lastWriteId, "Stacking an older merge on top of newer ones"), t.allWrites.push({
    path: e,
    children: n,
    writeId: i,
    visible: !0
  }), t.visibleWrites = el(t.visibleWrites, e, n), t.lastWriteId = i;
}
function A1(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const i = t.allWrites[n];
    if (i.writeId === e)
      return i;
  }
  return null;
}
function R1(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  C(n >= 0, "removeWrite called with nonexistent writeId.");
  const i = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let r = i.visible, s = !1, o = t.allWrites.length - 1;
  for (; r && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible && (o >= n && P1(a, i.path) ? r = !1 : yt(i.path, a.path) && (s = !0)), o--;
  }
  if (r) {
    if (s)
      return N1(t), !0;
    if (i.snap)
      t.visibleWrites = Yu(t.visibleWrites, i.path);
    else {
      const a = i.children;
      je(a, (l) => {
        t.visibleWrites = Yu(t.visibleWrites, Ee(i.path, l));
      });
    }
    return !0;
  } else return !1;
}
function P1(t, e) {
  if (t.snap)
    return yt(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && yt(Ee(t.path, n), e))
      return !0;
  return !1;
}
function N1(t) {
  t.visibleWrites = ep(t.allWrites, x1, ne()), t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1;
}
function x1(t) {
  return t.visible;
}
function ep(t, e, n) {
  let i = Mt.empty();
  for (let r = 0; r < t.length; ++r) {
    const s = t[r];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        yt(n, o) ? (a = Xe(n, o), i = Wr(i, a, s.snap)) : yt(o, n) && (a = Xe(o, n), i = Wr(i, ne(), s.snap.getChild(a)));
      else if (s.children) {
        if (yt(n, o))
          a = Xe(n, o), i = el(i, a, s.children);
        else if (yt(o, n))
          if (a = Xe(o, n), G(a))
            i = el(i, ne(), s.children);
          else {
            const l = ji(s.children, B(a));
            if (l) {
              const c = l.getChild(me(a));
              i = Wr(i, ne(), c);
            }
          }
      } else
        throw ir("WriteRecord should have .snap or .children");
    }
  }
  return i;
}
function tp(t, e, n, i, r) {
  if (!i && !r) {
    const s = Ei(t.visibleWrites, e);
    if (s != null)
      return s;
    {
      const o = $n(t.visibleWrites, e);
      if (nl(o))
        return n;
      if (n == null && !tl(o, ne()))
        return null;
      {
        const a = n || $.EMPTY_NODE;
        return Yi(o, a);
      }
    }
  } else {
    const s = $n(t.visibleWrites, e);
    if (!r && nl(s))
      return n;
    if (!r && n == null && !tl(s, ne()))
      return null;
    {
      const o = function(c) {
        return (c.visible || r) && (!i || !~i.indexOf(c.writeId)) && (yt(c.path, e) || yt(e, c.path));
      }, a = ep(t.allWrites, o, e), l = n || $.EMPTY_NODE;
      return Yi(a, l);
    }
  }
}
function O1(t, e, n) {
  let i = $.EMPTY_NODE;
  const r = Ei(t.visibleWrites, e);
  if (r)
    return r.isLeafNode() || r.forEachChild(Ie, (s, o) => {
      i = i.updateImmediateChild(s, o);
    }), i;
  if (n) {
    const s = $n(t.visibleWrites, e);
    return n.forEachChild(Ie, (o, a) => {
      const l = Yi($n(s, new he(o)), a);
      i = i.updateImmediateChild(o, l);
    }), Qu(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  } else {
    const s = $n(t.visibleWrites, e);
    return Qu(s).forEach((o) => {
      i = i.updateImmediateChild(o.name, o.node);
    }), i;
  }
}
function L1(t, e, n, i, r) {
  C(i || r, "Either existingEventSnap or existingServerSnap must exist");
  const s = Ee(e, n);
  if (tl(t.visibleWrites, s))
    return null;
  {
    const o = $n(t.visibleWrites, s);
    return nl(o) ? r.getChild(n) : Yi(o, r.getChild(n));
  }
}
function D1(t, e, n, i) {
  const r = Ee(e, n), s = Ei(t.visibleWrites, r);
  if (s != null)
    return s;
  if (i.isCompleteForChild(n)) {
    const o = $n(t.visibleWrites, r);
    return Yi(o, i.getNode().getImmediateChild(n));
  } else
    return null;
}
function M1(t, e) {
  return Ei(t.visibleWrites, e);
}
function $1(t, e, n, i, r, s, o) {
  let a;
  const l = $n(t.visibleWrites, e), c = Ei(l, ne());
  if (c != null)
    a = c;
  else if (n != null)
    a = Yi(l, n);
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
function F1() {
  return {
    visibleWrites: Mt.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function _o(t, e, n, i) {
  return tp(t.writeTree, t.treePath, e, n, i);
}
function lc(t, e) {
  return O1(t.writeTree, t.treePath, e);
}
function Ju(t, e, n, i) {
  return L1(t.writeTree, t.treePath, e, n, i);
}
function go(t, e) {
  return M1(t.writeTree, Ee(t.treePath, e));
}
function U1(t, e, n, i, r, s) {
  return $1(t.writeTree, t.treePath, e, n, i, r, s);
}
function cc(t, e, n) {
  return D1(t.writeTree, t.treePath, e, n);
}
function np(t, e) {
  return ip(Ee(t.treePath, e), t.writeTree);
}
function ip(t, e) {
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
class H1 {
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
        this.changeMap.set(i, es(i, e.snapshotNode, r.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(i);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(i, Zr(i, r.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(i, Gi(i, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(i, es(i, e.snapshotNode, r.oldSnap));
      else
        throw ir("Illegal combination of changes: " + e + " occurred after " + r);
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
class W1 {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, i) {
    return null;
  }
}
const rp = new W1();
class uc {
  constructor(e, n, i = null) {
    this.writes_ = e, this.viewCache_ = n, this.optCompleteServerCache_ = i;
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e))
      return n.getNode().getImmediateChild(e);
    {
      const i = this.optCompleteServerCache_ != null ? new zn(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
      return cc(this.writes_, e, i);
    }
  }
  getChildAfterChild(e, n, i) {
    const r = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : mi(this.viewCache_), s = U1(this.writes_, r, n, 1, i, e);
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
function V1(t) {
  return { filter: t };
}
function z1(t, e) {
  C(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"), C(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed");
}
function j1(t, e, n, i, r) {
  const s = new H1();
  let o, a;
  if (n.type === Lt.OVERWRITE) {
    const c = n;
    c.source.fromUser ? o = il(t, e, c.path, c.snap, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered() && !G(c.path), o = vo(t, e, c.path, c.snap, i, r, a, s));
  } else if (n.type === Lt.MERGE) {
    const c = n;
    c.source.fromUser ? o = q1(t, e, c.path, c.children, i, r, s) : (C(c.source.fromServer, "Unknown source."), a = c.source.tagged || e.serverCache.isFiltered(), o = rl(t, e, c.path, c.children, i, r, a, s));
  } else if (n.type === Lt.ACK_USER_WRITE) {
    const c = n;
    c.revert ? o = Y1(t, e, c.path, i, r, s) : o = G1(t, e, c.path, c.affectedTree, i, r, s);
  } else if (n.type === Lt.LISTEN_COMPLETE)
    o = K1(t, e, n.path, i, s);
  else
    throw ir("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return B1(e, o, l), { viewCache: o, changes: l };
}
function B1(t, e, n) {
  const i = e.eventCache;
  if (i.isFullyInitialized()) {
    const r = i.getNode().isLeafNode() || i.getNode().isEmpty(), s = mo(t);
    (n.length > 0 || !t.eventCache.isFullyInitialized() || r && !i.getNode().equals(s) || !i.getNode().getPriority().equals(s.getPriority())) && n.push(Qf(mo(e)));
  }
}
function sp(t, e, n, i, r, s) {
  const o = e.eventCache;
  if (go(i, n) != null)
    return e;
  {
    let a, l;
    if (G(n))
      if (C(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), e.serverCache.isFiltered()) {
        const c = mi(e), d = c instanceof $ ? c : $.EMPTY_NODE, h = lc(i, d);
        a = t.filter.updateFullNode(e.eventCache.getNode(), h, s);
      } else {
        const c = _o(i, mi(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      }
    else {
      const c = B(n);
      if (c === ".priority") {
        C(Vn(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        l = e.serverCache.getNode();
        const h = Ju(i, n, d, l);
        h != null ? a = t.filter.updatePriority(d, h) : a = o.getNode();
      } else {
        const d = me(n);
        let h;
        if (o.isCompleteForChild(c)) {
          l = e.serverCache.getNode();
          const u = Ju(i, n, o.getNode(), l);
          u != null ? h = o.getNode().getImmediateChild(c).updateChild(d, u) : h = o.getNode().getImmediateChild(c);
        } else
          h = cc(i, c, e.serverCache);
        h != null ? a = t.filter.updateChild(o.getNode(), c, h, d, r, s) : a = o.getNode();
      }
    }
    return Hr(e, a, o.isFullyInitialized() || G(n), t.filter.filtersNodes());
  }
}
function vo(t, e, n, i, r, s, o, a) {
  const l = e.serverCache;
  let c;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (G(n))
    c = d.updateFullNode(l.getNode(), i, null);
  else if (d.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, i);
    c = d.updateFullNode(l.getNode(), f, null);
  } else {
    const f = B(n);
    if (!l.isCompleteForPath(n) && Vn(n) > 1)
      return e;
    const p = me(n), E = l.getNode().getImmediateChild(f).updateChild(p, i);
    f === ".priority" ? c = d.updatePriority(l.getNode(), E) : c = d.updateChild(l.getNode(), f, E, p, rp, null);
  }
  const h = Xf(e, c, l.isFullyInitialized() || G(n), d.filtersNodes()), u = new uc(r, h, s);
  return sp(t, h, n, r, u, a);
}
function il(t, e, n, i, r, s, o) {
  const a = e.eventCache;
  let l, c;
  const d = new uc(r, e, s);
  if (G(n))
    c = t.filter.updateFullNode(e.eventCache.getNode(), i, o), l = Hr(e, c, !0, t.filter.filtersNodes());
  else {
    const h = B(n);
    if (h === ".priority")
      c = t.filter.updatePriority(e.eventCache.getNode(), i), l = Hr(e, c, a.isFullyInitialized(), a.isFiltered());
    else {
      const u = me(n), f = a.getNode().getImmediateChild(h);
      let p;
      if (G(u))
        p = i;
      else {
        const g = d.getCompleteChild(h);
        g != null ? Zl(u) === ".priority" && g.getChild(zf(u)).isEmpty() ? p = g : p = g.updateChild(u, i) : p = $.EMPTY_NODE;
      }
      if (f.equals(p))
        l = e;
      else {
        const g = t.filter.updateChild(a.getNode(), h, p, u, d, o);
        l = Hr(e, g, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function Xu(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function q1(t, e, n, i, r, s, o) {
  let a = e;
  return i.foreach((l, c) => {
    const d = Ee(n, l);
    Xu(e, B(d)) && (a = il(t, a, d, c, r, s, o));
  }), i.foreach((l, c) => {
    const d = Ee(n, l);
    Xu(e, B(d)) || (a = il(t, a, d, c, r, s, o));
  }), a;
}
function Zu(t, e, n) {
  return n.foreach((i, r) => {
    e = e.updateChild(i, r);
  }), e;
}
function rl(t, e, n, i, r, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e, c;
  G(n) ? c = i : c = new pe(null).setTree(n, i);
  const d = e.serverCache.getNode();
  return c.children.inorderTraversal((h, u) => {
    if (d.hasChild(h)) {
      const f = e.serverCache.getNode().getImmediateChild(h), p = Zu(t, f, u);
      l = vo(t, l, new he(h), p, r, s, o, a);
    }
  }), c.children.inorderTraversal((h, u) => {
    const f = !e.serverCache.isCompleteForChild(h) && u.value === null;
    if (!d.hasChild(h) && !f) {
      const p = e.serverCache.getNode().getImmediateChild(h), g = Zu(t, p, u);
      l = vo(t, l, new he(h), g, r, s, o, a);
    }
  }), l;
}
function G1(t, e, n, i, r, s, o) {
  if (go(r, n) != null)
    return e;
  const a = e.serverCache.isFiltered(), l = e.serverCache;
  if (i.value != null) {
    if (G(n) && l.isFullyInitialized() || l.isCompleteForPath(n))
      return vo(t, e, n, l.getNode().getChild(n), r, s, a, o);
    if (G(n)) {
      let c = new pe(null);
      return l.getNode().forEachChild(Ui, (d, h) => {
        c = c.set(new he(d), h);
      }), rl(t, e, n, c, r, s, a, o);
    } else
      return e;
  } else {
    let c = new pe(null);
    return i.foreach((d, h) => {
      const u = Ee(n, d);
      l.isCompleteForPath(u) && (c = c.set(d, l.getNode().getChild(u)));
    }), rl(t, e, n, c, r, s, a, o);
  }
}
function K1(t, e, n, i, r) {
  const s = e.serverCache, o = Xf(e, s.getNode(), s.isFullyInitialized() || G(n), s.isFiltered());
  return sp(t, o, n, i, rp, r);
}
function Y1(t, e, n, i, r, s) {
  let o;
  if (go(i, n) != null)
    return e;
  {
    const a = new uc(i, e, r), l = e.eventCache.getNode();
    let c;
    if (G(n) || B(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized())
        d = _o(i, mi(e));
      else {
        const h = e.serverCache.getNode();
        C(h instanceof $, "serverChildren would be complete if leaf node"), d = lc(i, h);
      }
      d = d, c = t.filter.updateFullNode(l, d, s);
    } else {
      const d = B(n);
      let h = cc(i, d, e.serverCache);
      h == null && e.serverCache.isCompleteForChild(d) && (h = l.getImmediateChild(d)), h != null ? c = t.filter.updateChild(l, d, h, me(n), a, s) : e.eventCache.getNode().hasChild(d) ? c = t.filter.updateChild(l, d, $.EMPTY_NODE, me(n), a, s) : c = l, c.isEmpty() && e.serverCache.isFullyInitialized() && (o = _o(i, mi(e)), o.isLeafNode() && (c = t.filter.updateFullNode(c, o, s)));
    }
    return o = e.serverCache.isFullyInitialized() || go(i, ne()) != null, Hr(e, c, o, t.filter.filtersNodes());
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
class Q1 {
  constructor(e, n) {
    this.query_ = e, this.eventRegistrations_ = [];
    const i = this.query_._queryParams, r = new ic(i.getIndex()), s = p1(i);
    this.processor_ = V1(s);
    const o = n.serverCache, a = n.eventCache, l = r.updateFullNode($.EMPTY_NODE, o.getNode(), null), c = s.updateFullNode($.EMPTY_NODE, a.getNode(), null), d = new zn(l, o.isFullyInitialized(), r.filtersNodes()), h = new zn(c, a.isFullyInitialized(), s.filtersNodes());
    this.viewCache_ = zo(h, d), this.eventGenerator_ = new w1(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function J1(t) {
  return t.viewCache_.serverCache.getNode();
}
function X1(t) {
  return mo(t.viewCache_);
}
function Z1(t, e) {
  const n = mi(t.viewCache_);
  return n && (t.query._queryParams.loadsAllData() || !G(e) && !n.getImmediateChild(B(e)).isEmpty()) ? n.getChild(e) : null;
}
function ed(t) {
  return t.eventRegistrations_.length === 0;
}
function e0(t, e) {
  t.eventRegistrations_.push(e);
}
function td(t, e, n) {
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
function nd(t, e, n, i) {
  e.type === Lt.MERGE && e.source.queryId !== null && (C(mi(t.viewCache_), "We should always have a full cache before handling merges"), C(mo(t.viewCache_), "Missing event cache, even though we have a server cache"));
  const r = t.viewCache_, s = j1(t.processor_, r, e, n, i);
  return z1(t.processor_, s.viewCache), C(s.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), t.viewCache_ = s.viewCache, op(t, s.changes, s.viewCache.eventCache.getNode(), null);
}
function t0(t, e) {
  const n = t.viewCache_.eventCache, i = [];
  return n.getNode().isLeafNode() || n.getNode().forEachChild(Ie, (s, o) => {
    i.push(Gi(s, o));
  }), n.isFullyInitialized() && i.push(Qf(n.getNode())), op(t, i, n.getNode(), e);
}
function op(t, e, n, i) {
  const r = i ? [i] : t.eventRegistrations_;
  return E1(t.eventGenerator_, e, n, r);
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
let bo;
class ap {
  constructor() {
    this.views = /* @__PURE__ */ new Map();
  }
}
function n0(t) {
  C(!bo, "__referenceConstructor has already been defined"), bo = t;
}
function i0() {
  return C(bo, "Reference.ts has not been loaded"), bo;
}
function r0(t) {
  return t.views.size === 0;
}
function dc(t, e, n, i) {
  const r = e.source.queryId;
  if (r !== null) {
    const s = t.views.get(r);
    return C(s != null, "SyncTree gave us an op for an invalid query."), nd(s, e, n, i);
  } else {
    let s = [];
    for (const o of t.views.values())
      s = s.concat(nd(o, e, n, i));
    return s;
  }
}
function lp(t, e, n, i, r) {
  const s = e._queryIdentifier, o = t.views.get(s);
  if (!o) {
    let a = _o(n, r ? i : null), l = !1;
    a ? l = !0 : i instanceof $ ? (a = lc(n, i), l = !1) : (a = $.EMPTY_NODE, l = !1);
    const c = zo(new zn(a, l, !1), new zn(i, r, !1));
    return new Q1(e, c);
  }
  return o;
}
function s0(t, e, n, i, r, s) {
  const o = lp(t, e, i, r, s);
  return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o), e0(o, n), t0(o, n);
}
function o0(t, e, n, i) {
  const r = e._queryIdentifier, s = [];
  let o = [];
  const a = jn(t);
  if (r === "default")
    for (const [l, c] of t.views.entries())
      o = o.concat(td(c, n, i)), ed(c) && (t.views.delete(l), c.query._queryParams.loadsAllData() || s.push(c.query));
  else {
    const l = t.views.get(r);
    l && (o = o.concat(td(l, n, i)), ed(l) && (t.views.delete(r), l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return a && !jn(t) && s.push(new (i0())(e._repo, e._path)), { removed: s, events: o };
}
function cp(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function Fn(t, e) {
  let n = null;
  for (const i of t.views.values())
    n = n || Z1(i, e);
  return n;
}
function up(t, e) {
  if (e._queryParams.loadsAllData())
    return Bo(t);
  {
    const i = e._queryIdentifier;
    return t.views.get(i);
  }
}
function dp(t, e) {
  return up(t, e) != null;
}
function jn(t) {
  return Bo(t) != null;
}
function Bo(t) {
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
let yo;
function a0(t) {
  C(!yo, "__referenceConstructor has already been defined"), yo = t;
}
function l0() {
  return C(yo, "Reference.ts has not been loaded"), yo;
}
let c0 = 1;
class id {
  /**
   * @param listenProvider_ - Used by SyncTree to start / stop listening
   *   to server data.
   */
  constructor(e) {
    this.listenProvider_ = e, this.syncPointTree_ = new pe(null), this.pendingWriteTree_ = F1(), this.tagToQueryMap = /* @__PURE__ */ new Map(), this.queryToTagMap = /* @__PURE__ */ new Map();
  }
}
function hp(t, e, n, i, r) {
  return S1(t.pendingWriteTree_, e, n, i, r), r ? or(t, new pi(sc(), e, n)) : [];
}
function u0(t, e, n, i) {
  k1(t.pendingWriteTree_, e, n, i);
  const r = pe.fromObject(n);
  return or(t, new Ki(sc(), e, r));
}
function Nn(t, e, n = !1) {
  const i = A1(t.pendingWriteTree_, e);
  if (R1(t.pendingWriteTree_, e)) {
    let s = new pe(null);
    return i.snap != null ? s = s.set(ne(), !0) : je(i.children, (o) => {
      s = s.set(new he(o), !0);
    }), or(t, new po(i.path, s, n));
  } else
    return [];
}
function Is(t, e, n) {
  return or(t, new pi(oc(), e, n));
}
function d0(t, e, n) {
  const i = pe.fromObject(n);
  return or(t, new Ki(oc(), e, i));
}
function h0(t, e) {
  return or(t, new ns(oc(), e));
}
function f0(t, e, n) {
  const i = fc(t, n);
  if (i) {
    const r = pc(i), s = r.path, o = r.queryId, a = Xe(s, e), l = new ns(ac(o), a);
    return mc(t, s, l);
  } else
    return [];
}
function wo(t, e, n, i, r = !1) {
  const s = e._path, o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || dp(o, e))) {
    const l = o0(o, e, n, i);
    r0(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const c = l.removed;
    if (a = l.events, !r) {
      const d = c.findIndex((u) => u._queryParams.loadsAllData()) !== -1, h = t.syncPointTree_.findOnPath(s, (u, f) => jn(f));
      if (d && !h) {
        const u = t.syncPointTree_.subtree(s);
        if (!u.isEmpty()) {
          const f = _0(u);
          for (let p = 0; p < f.length; ++p) {
            const g = f[p], E = g.query, T = _p(t, g);
            t.listenProvider_.startListening(Vr(E), is(t, E), T.hashFn, T.onComplete);
          }
        }
      }
      !h && c.length > 0 && !i && (d ? t.listenProvider_.stopListening(Vr(e), null) : c.forEach((u) => {
        const f = t.queryToTagMap.get(qo(u));
        t.listenProvider_.stopListening(Vr(u), f);
      }));
    }
    g0(t, c);
  }
  return a;
}
function fp(t, e, n, i) {
  const r = fc(t, i);
  if (r != null) {
    const s = pc(r), o = s.path, a = s.queryId, l = Xe(o, e), c = new pi(ac(a), l, n);
    return mc(t, o, c);
  } else
    return [];
}
function p0(t, e, n, i) {
  const r = fc(t, i);
  if (r) {
    const s = pc(r), o = s.path, a = s.queryId, l = Xe(o, e), c = pe.fromObject(n), d = new Ki(ac(a), l, c);
    return mc(t, o, d);
  } else
    return [];
}
function sl(t, e, n, i = !1) {
  const r = e._path;
  let s = null, o = !1;
  t.syncPointTree_.foreachOnPath(r, (u, f) => {
    const p = Xe(u, r);
    s = s || Fn(f, p), o = o || jn(f);
  });
  let a = t.syncPointTree_.get(r);
  a ? (o = o || jn(a), s = s || Fn(a, ne())) : (a = new ap(), t.syncPointTree_ = t.syncPointTree_.set(r, a));
  let l;
  s != null ? l = !0 : (l = !1, s = $.EMPTY_NODE, t.syncPointTree_.subtree(r).foreachChild((f, p) => {
    const g = Fn(p, ne());
    g && (s = s.updateImmediateChild(f, g));
  }));
  const c = dp(a, e);
  if (!c && !e._queryParams.loadsAllData()) {
    const u = qo(e);
    C(!t.queryToTagMap.has(u), "View does not exist, but we have a tag");
    const f = v0();
    t.queryToTagMap.set(u, f), t.tagToQueryMap.set(f, u);
  }
  const d = jo(t.pendingWriteTree_, r);
  let h = s0(a, e, n, d, s, l);
  if (!c && !o && !i) {
    const u = up(a, e);
    h = h.concat(b0(t, e, u));
  }
  return h;
}
function hc(t, e, n) {
  const r = t.pendingWriteTree_, s = t.syncPointTree_.findOnPath(e, (o, a) => {
    const l = Xe(o, e), c = Fn(a, l);
    if (c)
      return c;
  });
  return tp(r, e, s, n, !0);
}
function m0(t, e) {
  const n = e._path;
  let i = null;
  t.syncPointTree_.foreachOnPath(n, (c, d) => {
    const h = Xe(c, n);
    i = i || Fn(d, h);
  });
  let r = t.syncPointTree_.get(n);
  r ? i = i || Fn(r, ne()) : (r = new ap(), t.syncPointTree_ = t.syncPointTree_.set(n, r));
  const s = i != null, o = s ? new zn(i, !0, !1) : null, a = jo(t.pendingWriteTree_, e._path), l = lp(r, e, a, s ? o.getNode() : $.EMPTY_NODE, s);
  return X1(l);
}
function or(t, e) {
  return pp(
    e,
    t.syncPointTree_,
    /*serverCache=*/
    null,
    jo(t.pendingWriteTree_, ne())
  );
}
function pp(t, e, n, i) {
  if (G(t.path))
    return mp(t, e, n, i);
  {
    const r = e.get(ne());
    n == null && r != null && (n = Fn(r, ne()));
    let s = [];
    const o = B(t.path), a = t.operationForChild(o), l = e.children.get(o);
    if (l && a) {
      const c = n ? n.getImmediateChild(o) : null, d = np(i, o);
      s = s.concat(pp(a, l, c, d));
    }
    return r && (s = s.concat(dc(r, t, i, n))), s;
  }
}
function mp(t, e, n, i) {
  const r = e.get(ne());
  n == null && r != null && (n = Fn(r, ne()));
  let s = [];
  return e.children.inorderTraversal((o, a) => {
    const l = n ? n.getImmediateChild(o) : null, c = np(i, o), d = t.operationForChild(o);
    d && (s = s.concat(mp(d, a, l, c)));
  }), r && (s = s.concat(dc(r, t, i, n))), s;
}
function _p(t, e) {
  const n = e.query, i = is(t, n);
  return {
    hashFn: () => (J1(e) || $.EMPTY_NODE).hash(),
    onComplete: (r) => {
      if (r === "ok")
        return i ? f0(t, n._path, i) : h0(t, n._path);
      {
        const s = hw(r, n);
        return wo(
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
function is(t, e) {
  const n = qo(e);
  return t.queryToTagMap.get(n);
}
function qo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function fc(t, e) {
  return t.tagToQueryMap.get(e);
}
function pc(t) {
  const e = t.indexOf("$");
  return C(e !== -1 && e < t.length - 1, "Bad queryKey."), {
    queryId: t.substr(e + 1),
    path: new he(t.substr(0, e))
  };
}
function mc(t, e, n) {
  const i = t.syncPointTree_.get(e);
  C(i, "Missing sync point for query tag that we're tracking");
  const r = jo(t.pendingWriteTree_, e);
  return dc(i, n, r, null);
}
function _0(t) {
  return t.fold((e, n, i) => {
    if (n && jn(n))
      return [Bo(n)];
    {
      let r = [];
      return n && (r = cp(n)), je(i, (s, o) => {
        r = r.concat(o);
      }), r;
    }
  });
}
function Vr(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (l0())(t._repo, t._path) : t;
}
function g0(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const i = e[n];
    if (!i._queryParams.loadsAllData()) {
      const r = qo(i), s = t.queryToTagMap.get(r);
      t.queryToTagMap.delete(r), t.tagToQueryMap.delete(s);
    }
  }
}
function v0() {
  return c0++;
}
function b0(t, e, n) {
  const i = e._path, r = is(t, e), s = _p(t, n), o = t.listenProvider_.startListening(Vr(e), r, s.hashFn, s.onComplete), a = t.syncPointTree_.subtree(i);
  if (r)
    C(!jn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((c, d, h) => {
      if (!G(c) && d && jn(d))
        return [Bo(d).query];
      {
        let u = [];
        return d && (u = u.concat(cp(d).map((f) => f.query))), je(h, (f, p) => {
          u = u.concat(p);
        }), u;
      }
    });
    for (let c = 0; c < l.length; ++c) {
      const d = l[c];
      t.listenProvider_.stopListening(Vr(d), is(t, d));
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
class _c {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new _c(n);
  }
  node() {
    return this.node_;
  }
}
class gc {
  constructor(e, n) {
    this.syncTree_ = e, this.path_ = n;
  }
  getImmediateChild(e) {
    const n = Ee(this.path_, e);
    return new gc(this.syncTree_, n);
  }
  node() {
    return hc(this.syncTree_, this.path_);
  }
}
const y0 = function(t) {
  return t = t || {}, t.timestamp = t.timestamp || (/* @__PURE__ */ new Date()).getTime(), t;
}, rd = function(t, e, n) {
  if (!t || typeof t != "object")
    return t;
  if (C(".sv" in t, "Unexpected leaf node or priority contents"), typeof t[".sv"] == "string")
    return w0(t[".sv"], e, n);
  if (typeof t[".sv"] == "object")
    return E0(t[".sv"], e);
  C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
}, w0 = function(t, e, n) {
  switch (t) {
    case "timestamp":
      return n.timestamp;
    default:
      C(!1, "Unexpected server value: " + t);
  }
}, E0 = function(t, e, n) {
  t.hasOwnProperty("increment") || C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  const i = t.increment;
  typeof i != "number" && C(!1, "Unexpected increment value: " + i);
  const r = e.node();
  if (C(r !== null && typeof r < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"), !r.isLeafNode())
    return i;
  const o = r.getValue();
  return typeof o != "number" ? i : o + i;
}, gp = function(t, e, n, i) {
  return vc(e, new gc(n, t), i);
}, vp = function(t, e, n) {
  return vc(t, new _c(e), n);
};
function vc(t, e, n) {
  const i = t.getPriority().val(), r = rd(i, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t, a = rd(o.getValue(), e, n);
    return a !== o.getValue() || r !== o.getPriority().val() ? new Fe(a, Oe(r)) : t;
  } else {
    const o = t;
    return s = o, r !== o.getPriority().val() && (s = s.updatePriority(new Fe(r))), o.forEachChild(Ie, (a, l) => {
      const c = vc(l, e.getImmediateChild(a), n);
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
class bc {
  /**
   * @param name - Optional name of the node.
   * @param parent - Optional parent node.
   * @param node - Optional node to wrap.
   */
  constructor(e = "", n = null, i = { children: {}, childCount: 0 }) {
    this.name = e, this.parent = n, this.node = i;
  }
}
function yc(t, e) {
  let n = e instanceof he ? e : new he(e), i = t, r = B(n);
  for (; r !== null; ) {
    const s = ji(i.node.children, r) || {
      children: {},
      childCount: 0
    };
    i = new bc(r, i, s), n = me(n), r = B(n);
  }
  return i;
}
function ar(t) {
  return t.node.value;
}
function bp(t, e) {
  t.node.value = e, ol(t);
}
function yp(t) {
  return t.node.childCount > 0;
}
function I0(t) {
  return ar(t) === void 0 && !yp(t);
}
function Go(t, e) {
  je(t.node.children, (n, i) => {
    e(new bc(n, t, i));
  });
}
function wp(t, e, n, i) {
  n && e(t), Go(t, (r) => {
    wp(r, e, !0);
  });
}
function C0(t, e, n) {
  let i = t.parent;
  for (; i !== null; ) {
    if (e(i))
      return !0;
    i = i.parent;
  }
  return !1;
}
function Cs(t) {
  return new he(t.parent === null ? t.name : Cs(t.parent) + "/" + t.name);
}
function ol(t) {
  t.parent !== null && T0(t.parent, t.name, t);
}
function T0(t, e, n) {
  const i = I0(n), r = Qt(t.node.children, e);
  i && r ? (delete t.node.children[e], t.node.childCount--, ol(t)) : !i && !r && (t.node.children[e] = n.node, t.node.childCount++, ol(t));
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
const S0 = /[\[\].#$\/\u0000-\u001F\u007F]/, k0 = /[\[\].#$\u0000-\u001F\u007F]/, Ca = 10 * 1024 * 1024, wc = function(t) {
  return typeof t == "string" && t.length !== 0 && !S0.test(t);
}, Ep = function(t) {
  return typeof t == "string" && t.length !== 0 && !k0.test(t);
}, A0 = function(t) {
  return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Ep(t);
}, R0 = function(t) {
  return t === null || typeof t == "string" || typeof t == "number" && !Kl(t) || t && typeof t == "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Qt(t, ".sv");
}, Ip = function(t, e, n, i) {
  i && e === void 0 || Ko(Mo(t, "value"), e, n);
}, Ko = function(t, e, n) {
  const i = n instanceof he ? new qw(n, t) : n;
  if (e === void 0)
    throw new Error(t + "contains undefined " + Zn(i));
  if (typeof e == "function")
    throw new Error(t + "contains a function " + Zn(i) + " with contents = " + e.toString());
  if (Kl(e))
    throw new Error(t + "contains " + e.toString() + " " + Zn(i));
  if (typeof e == "string" && e.length > Ca / 3 && $o(e) > Ca)
    throw new Error(t + "contains a string greater than " + Ca + " utf8 bytes " + Zn(i) + " ('" + e.substring(0, 50) + "...')");
  if (e && typeof e == "object") {
    let r = !1, s = !1;
    if (je(e, (o, a) => {
      if (o === ".value")
        r = !0;
      else if (o !== ".priority" && o !== ".sv" && (s = !0, !wc(o)))
        throw new Error(t + " contains an invalid key (" + o + ") " + Zn(i) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      Gw(i, o), Ko(t, a, i), Kw(i);
    }), r && s)
      throw new Error(t + ' contains ".value" child ' + Zn(i) + " in addition to actual children.");
  }
}, P0 = function(t, e) {
  let n, i;
  for (n = 0; n < e.length; n++) {
    i = e[n];
    const s = Xr(i);
    for (let o = 0; o < s.length; o++)
      if (!(s[o] === ".priority" && o === s.length - 1)) {
        if (!wc(s[o]))
          throw new Error(t + "contains an invalid key (" + s[o] + ") in path " + i.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
  }
  e.sort(Bw);
  let r = null;
  for (n = 0; n < e.length; n++) {
    if (i = e[n], r !== null && yt(r, i))
      throw new Error(t + "contains a path " + r.toString() + " that is ancestor of another path " + i.toString());
    r = i;
  }
}, N0 = function(t, e, n, i) {
  const r = Mo(t, "values");
  if (!(e && typeof e == "object") || Array.isArray(e))
    throw new Error(r + " must be an object containing the children to replace.");
  const s = [];
  je(e, (o, a) => {
    const l = new he(o);
    if (Ko(r, a, Ee(n, l)), Zl(l) === ".priority" && !R0(a))
      throw new Error(r + "contains an invalid value for '" + l.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
    s.push(l);
  }), P0(r, s);
}, Cp = function(t, e, n, i) {
  if (!Ep(n))
    throw new Error(Mo(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
}, x0 = function(t, e, n, i) {
  n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Cp(t, e, n);
}, Ec = function(t, e) {
  if (B(e) === ".info")
    throw new Error(t + " failed = Can't modify data under /.info/");
}, O0 = function(t, e) {
  const n = e.path.toString();
  if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !wc(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !A0(n))
    throw new Error(Mo(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
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
class L0 {
  constructor() {
    this.eventLists_ = [], this.recursionDepth_ = 0;
  }
}
function Yo(t, e) {
  let n = null;
  for (let i = 0; i < e.length; i++) {
    const r = e[i], s = r.getPath();
    n !== null && !ec(s, n.path) && (t.eventLists_.push(n), n = null), n === null && (n = { events: [], path: s }), n.events.push(r);
  }
  n && t.eventLists_.push(n);
}
function Tp(t, e, n) {
  Yo(t, n), Sp(t, (i) => ec(i, e));
}
function St(t, e, n) {
  Yo(t, n), Sp(t, (i) => yt(i, e) || yt(e, i));
}
function Sp(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let i = 0; i < t.eventLists_.length; i++) {
    const r = t.eventLists_[i];
    if (r) {
      const s = r.path;
      e(s) ? (D0(t.eventLists_[i]), t.eventLists_[i] = null) : n = !1;
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function D0(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const i = n.getEventRunner();
      Fr && Ve("event: " + n.toString()), sr(i);
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
const M0 = "repo_interrupt", $0 = 25;
class F0 {
  constructor(e, n, i, r) {
    this.repoInfo_ = e, this.forceRestClient_ = n, this.authTokenProvider_ = i, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new L0(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = fo(), this.transactionQueueTree_ = new bc(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
  }
  /**
   * @returns The URL corresponding to the root of this Firebase.
   */
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function U0(t, e, n) {
  if (t.stats_ = Jl(t.repoInfo_), t.forceRestClient_ || _w())
    t.server_ = new ho(t.repoInfo_, (i, r, s, o) => {
      sd(t, i, r, s, o);
    }, t.authTokenProvider_, t.appCheckProvider_), setTimeout(() => od(
      t,
      /* connectStatus= */
      !0
    ), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      try {
        Le(n);
      } catch (i) {
        throw new Error("Invalid authOverride provided: " + i);
      }
    }
    t.persistentConnection_ = new dn(t.repoInfo_, e, (i, r, s, o) => {
      sd(t, i, r, s, o);
    }, (i) => {
      od(t, i);
    }, (i) => {
      H0(t, i);
    }, t.authTokenProvider_, t.appCheckProvider_, n), t.server_ = t.persistentConnection_;
  }
  t.authTokenProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAuthToken(i);
  }), t.appCheckProvider_.addTokenChangeListener((i) => {
    t.server_.refreshAppCheckToken(i.token);
  }), t.statsReporter_ = ww(t.repoInfo_, () => new y1(t.stats_, t.server_)), t.infoData_ = new m1(), t.infoSyncTree_ = new id({
    startListening: (i, r, s, o) => {
      let a = [];
      const l = t.infoData_.getNode(i._path);
      return l.isEmpty() || (a = Is(t.infoSyncTree_, i._path, l), setTimeout(() => {
        o("ok");
      }, 0)), a;
    },
    stopListening: () => {
    }
  }), Ic(t, "connected", !1), t.serverSyncTree_ = new id({
    startListening: (i, r, s, o) => (t.server_.listen(i, s, r, (a, l) => {
      const c = o(a, l);
      St(t.eventQueue_, i._path, c);
    }), []),
    stopListening: (i, r) => {
      t.server_.unlisten(i, r);
    }
  });
}
function kp(t) {
  const n = t.infoData_.getNode(new he(".info/serverTimeOffset")).val() || 0;
  return (/* @__PURE__ */ new Date()).getTime() + n;
}
function Qo(t) {
  return y0({
    timestamp: kp(t)
  });
}
function sd(t, e, n, i, r) {
  t.dataUpdateCount++;
  const s = new he(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (r)
    if (i) {
      const l = eo(n, (c) => Oe(c));
      o = p0(t.serverSyncTree_, s, l, r);
    } else {
      const l = Oe(n);
      o = fp(t.serverSyncTree_, s, l, r);
    }
  else if (i) {
    const l = eo(n, (c) => Oe(c));
    o = d0(t.serverSyncTree_, s, l);
  } else {
    const l = Oe(n);
    o = Is(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = Qi(t, s)), St(t.eventQueue_, a, o);
}
function od(t, e) {
  Ic(t, "connected", e), e === !1 && j0(t);
}
function H0(t, e) {
  je(e, (n, i) => {
    Ic(t, n, i);
  });
}
function Ic(t, e, n) {
  const i = new he("/.info/" + e), r = Oe(n);
  t.infoData_.updateSnapshot(i, r);
  const s = Is(t.infoSyncTree_, i, r);
  St(t.eventQueue_, i, s);
}
function Cc(t) {
  return t.nextWriteId_++;
}
function W0(t, e, n) {
  const i = m0(t.serverSyncTree_, e);
  return i != null ? Promise.resolve(i) : t.server_.get(e).then((r) => {
    const s = Oe(r).withIndex(e._queryParams.getIndex());
    sl(t.serverSyncTree_, e, n, !0);
    let o;
    if (e._queryParams.loadsAllData())
      o = Is(t.serverSyncTree_, e._path, s);
    else {
      const a = is(t.serverSyncTree_, e);
      o = fp(t.serverSyncTree_, e._path, s, a);
    }
    return St(t.eventQueue_, e._path, o), wo(t.serverSyncTree_, e, n, null, !0), s;
  }, (r) => (Ts(t, "get for query " + Le(e) + " failed: " + r), Promise.reject(new Error(r))));
}
function V0(t, e, n, i, r) {
  Ts(t, "set", {
    path: e.toString(),
    value: n,
    priority: i
  });
  const s = Qo(t), o = Oe(n, i), a = hc(t.serverSyncTree_, e), l = vp(o, a, s), c = Cc(t), d = hp(t.serverSyncTree_, e, l, c, !0);
  Yo(t.eventQueue_, d), t.server_.put(e.toString(), o.val(
    /*export=*/
    !0
  ), (u, f) => {
    const p = u === "ok";
    p || Ze("set at " + e + " failed: " + u);
    const g = Nn(t.serverSyncTree_, c, !p);
    St(t.eventQueue_, e, g), ll(t, r, u, f);
  });
  const h = Sc(t, e);
  Qi(t, h), St(t.eventQueue_, h, []);
}
function z0(t, e, n, i) {
  Ts(t, "update", { path: e.toString(), value: n });
  let r = !0;
  const s = Qo(t), o = {};
  if (je(n, (a, l) => {
    r = !1, o[a] = gp(Ee(e, a), Oe(l), t.serverSyncTree_, s);
  }), r)
    Ve("update() called with empty data.  Don't do anything."), ll(t, i, "ok", void 0);
  else {
    const a = Cc(t), l = u0(t.serverSyncTree_, e, o, a);
    Yo(t.eventQueue_, l), t.server_.merge(e.toString(), n, (c, d) => {
      const h = c === "ok";
      h || Ze("update at " + e + " failed: " + c);
      const u = Nn(t.serverSyncTree_, a, !h), f = u.length > 0 ? Qi(t, e) : e;
      St(t.eventQueue_, f, u), ll(t, i, c, d);
    }), je(n, (c) => {
      const d = Sc(t, Ee(e, c));
      Qi(t, d);
    }), St(t.eventQueue_, e, []);
  }
}
function j0(t) {
  Ts(t, "onDisconnectEvents");
  const e = Qo(t), n = fo();
  Za(t.onDisconnect_, ne(), (r, s) => {
    const o = gp(r, s, t.serverSyncTree_, e);
    Jf(n, r, o);
  });
  let i = [];
  Za(n, ne(), (r, s) => {
    i = i.concat(Is(t.serverSyncTree_, r, s));
    const o = Sc(t, r);
    Qi(t, o);
  }), t.onDisconnect_ = fo(), St(t.eventQueue_, ne(), i);
}
function B0(t, e, n) {
  let i;
  B(e._path) === ".info" ? i = sl(t.infoSyncTree_, e, n) : i = sl(t.serverSyncTree_, e, n), Tp(t.eventQueue_, e._path, i);
}
function al(t, e, n) {
  let i;
  B(e._path) === ".info" ? i = wo(t.infoSyncTree_, e, n) : i = wo(t.serverSyncTree_, e, n), Tp(t.eventQueue_, e._path, i);
}
function q0(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(M0);
}
function Ts(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"), Ve(n, ...e);
}
function ll(t, e, n, i) {
  e && sr(() => {
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
function Ap(t, e, n) {
  return hc(t.serverSyncTree_, e, n) || $.EMPTY_NODE;
}
function Tc(t, e = t.transactionQueueTree_) {
  if (e || Jo(t, e), ar(e)) {
    const n = Pp(t, e);
    C(n.length > 0, "Sending zero length transaction queue"), n.every(
      (r) => r.status === 0
      /* TransactionStatus.RUN */
    ) && G0(t, Cs(e), n);
  } else yp(e) && Go(e, (n) => {
    Tc(t, n);
  });
}
function G0(t, e, n) {
  const i = n.map((c) => c.currentWriteId), r = Ap(t, e, i);
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
    Ts(t, "transaction put response", {
      path: l.toString(),
      status: c
    });
    let d = [];
    if (c === "ok") {
      const h = [];
      for (let u = 0; u < n.length; u++)
        n[u].status = 2, d = d.concat(Nn(t.serverSyncTree_, n[u].currentWriteId)), n[u].onComplete && h.push(() => n[u].onComplete(null, !0, n[u].currentOutputSnapshotResolved)), n[u].unwatcher();
      Jo(t, yc(t.transactionQueueTree_, e)), Tc(t, t.transactionQueueTree_), St(t.eventQueue_, e, d);
      for (let u = 0; u < h.length; u++)
        sr(h[u]);
    } else {
      if (c === "datastale")
        for (let h = 0; h < n.length; h++)
          n[h].status === 3 ? n[h].status = 4 : n[h].status = 0;
      else {
        Ze("transaction at " + l.toString() + " failed: " + c);
        for (let h = 0; h < n.length; h++)
          n[h].status = 4, n[h].abortReason = c;
      }
      Qi(t, e);
    }
  }, o);
}
function Qi(t, e) {
  const n = Rp(t, e), i = Cs(n), r = Pp(t, n);
  return K0(t, r, i), i;
}
function K0(t, e, n) {
  if (e.length === 0)
    return;
  const i = [];
  let r = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a], c = Xe(n, l.path);
    let d = !1, h;
    if (C(c !== null, "rerunTransactionsUnderNode_: relativePath should not be null."), l.status === 4)
      d = !0, h = l.abortReason, r = r.concat(Nn(t.serverSyncTree_, l.currentWriteId, !0));
    else if (l.status === 0)
      if (l.retryCount >= $0)
        d = !0, h = "maxretry", r = r.concat(Nn(t.serverSyncTree_, l.currentWriteId, !0));
      else {
        const u = Ap(t, l.path, o);
        l.currentInputSnapshot = u;
        const f = e[a].update(u.val());
        if (f !== void 0) {
          Ko("transaction failed: Data returned ", f, l.path);
          let p = Oe(f);
          typeof f == "object" && f != null && Qt(f, ".priority") || (p = p.updatePriority(u.getPriority()));
          const E = l.currentWriteId, T = Qo(t), S = vp(p, u, T);
          l.currentOutputSnapshotRaw = p, l.currentOutputSnapshotResolved = S, l.currentWriteId = Cc(t), o.splice(o.indexOf(E), 1), r = r.concat(hp(t.serverSyncTree_, l.path, S, l.currentWriteId, l.applyLocally)), r = r.concat(Nn(t.serverSyncTree_, E, !0));
        } else
          d = !0, h = "nodata", r = r.concat(Nn(t.serverSyncTree_, l.currentWriteId, !0));
      }
    St(t.eventQueue_, n, r), r = [], d && (e[a].status = 2, (function(u) {
      setTimeout(u, Math.floor(0));
    })(e[a].unwatcher), e[a].onComplete && (h === "nodata" ? i.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot)) : i.push(() => e[a].onComplete(new Error(h), !1, null))));
  }
  Jo(t, t.transactionQueueTree_);
  for (let a = 0; a < i.length; a++)
    sr(i[a]);
  Tc(t, t.transactionQueueTree_);
}
function Rp(t, e) {
  let n, i = t.transactionQueueTree_;
  for (n = B(e); n !== null && ar(i) === void 0; )
    i = yc(i, n), e = me(e), n = B(e);
  return i;
}
function Pp(t, e) {
  const n = [];
  return Np(t, e, n), n.sort((i, r) => i.order - r.order), n;
}
function Np(t, e, n) {
  const i = ar(e);
  if (i)
    for (let r = 0; r < i.length; r++)
      n.push(i[r]);
  Go(e, (r) => {
    Np(t, r, n);
  });
}
function Jo(t, e) {
  const n = ar(e);
  if (n) {
    let i = 0;
    for (let r = 0; r < n.length; r++)
      n[r].status !== 2 && (n[i] = n[r], i++);
    n.length = i, bp(e, n.length > 0 ? n : void 0);
  }
  Go(e, (i) => {
    Jo(t, i);
  });
}
function Sc(t, e) {
  const n = Cs(Rp(t, e)), i = yc(t.transactionQueueTree_, e);
  return C0(i, (r) => {
    Ta(t, r);
  }), Ta(t, i), wp(i, (r) => {
    Ta(t, r);
  }), n;
}
function Ta(t, e) {
  const n = ar(e);
  if (n) {
    const i = [];
    let r = [], s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 || (n[o].status === 1 ? (C(s === o - 1, "All SENT items should be at beginning of queue."), s = o, n[o].status = 3, n[o].abortReason = "set") : (C(n[o].status === 0, "Unexpected transaction status in abort"), n[o].unwatcher(), r = r.concat(Nn(t.serverSyncTree_, n[o].currentWriteId, !0)), n[o].onComplete && i.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? bp(e, void 0) : n.length = s + 1, St(t.eventQueue_, Cs(e), r);
    for (let o = 0; o < i.length; o++)
      sr(i[o]);
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
function Y0(t) {
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
function Q0(t) {
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
const ad = function(t, e) {
  const n = J0(t), i = n.namespace;
  n.domain === "firebase.com" && pn(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), (!i || i === "undefined") && n.domain !== "localhost" && pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || aw();
  const r = n.scheme === "ws" || n.scheme === "wss";
  return {
    repoInfo: new Lf(
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
    path: new he(n.pathString)
  };
}, J0 = function(t) {
  let e = "", n = "", i = "", r = "", s = "", o = !0, a = "https", l = 443;
  if (typeof t == "string") {
    let c = t.indexOf("//");
    c >= 0 && (a = t.substring(0, c - 1), t = t.substring(c + 2));
    let d = t.indexOf("/");
    d === -1 && (d = t.length);
    let h = t.indexOf("?");
    h === -1 && (h = t.length), e = t.substring(0, Math.min(d, h)), d < h && (r = Y0(t.substring(d, h)));
    const u = Q0(t.substring(Math.min(t.length, h)));
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
const ld = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", X0 = /* @__PURE__ */ (function() {
  let t = 0;
  const e = [];
  return function(n) {
    const i = n === t;
    t = n;
    let r;
    const s = new Array(8);
    for (r = 7; r >= 0; r--)
      s[r] = ld.charAt(n % 64), n = Math.floor(n / 64);
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
      o += ld.charAt(e[r]);
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
class Z0 {
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
    return this.getPath().toString() + ":" + this.eventType + ":" + Le(this.snapshot.exportVal());
  }
}
class eE {
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
class xp {
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
class kc {
  /**
   * @hideconstructor
   */
  constructor(e, n, i, r) {
    this._repo = e, this._path = n, this._queryParams = i, this._orderByCalled = r;
  }
  get key() {
    return G(this._path) ? null : Zl(this._path);
  }
  get ref() {
    return new wn(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = Gu(this._queryParams), n = Yl(e);
    return n === "{}" ? "default" : n;
  }
  /**
   * An object representation of the query parameters used by this Query.
   */
  get _queryObject() {
    return Gu(this._queryParams);
  }
  isEqual(e) {
    if (e = Me(e), !(e instanceof kc))
      return !1;
    const n = this._repo === e._repo, i = ec(this._path, e._path), r = this._queryIdentifier === e._queryIdentifier;
    return n && i && r;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + jw(this._path);
  }
}
class wn extends kc {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n, new rc(), !1);
  }
  get parent() {
    const e = zf(this._path);
    return e === null ? null : new wn(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; )
      e = e.parent;
    return e;
  }
}
class rs {
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
    const n = new he(e), i = ss(this.ref, e);
    return new rs(this._node.getChild(n), i, Ie);
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
    return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (i, r) => e(new rs(r, ss(this.ref, i), Ie)));
  }
  /**
   * Returns true if the specified child path has (non-null) data.
   *
   * @param path - A relative path to the location of a potential child.
   * @returns `true` if data exists at the specified child path; else
   *  `false`.
   */
  hasChild(e) {
    const n = new he(e);
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
function Et(t, e) {
  return t = Me(t), t._checkNotDeleted("ref"), e !== void 0 ? ss(t._root, e) : t._root;
}
function ss(t, e) {
  return t = Me(t), B(t._path) === null ? x0("child", "path", e) : Cp("child", "path", e), new wn(t._repo, Ee(t._path, e));
}
function tE(t, e) {
  t = Me(t), Ec("push", t._path), Ip("push", e, t._path, !0);
  const n = kp(t._repo), i = X0(n), r = ss(t, i), s = ss(t, i);
  let o;
  return o = Promise.resolve(s), r.then = o.then.bind(o), r.catch = o.then.bind(o, void 0), r;
}
function nE(t) {
  return Ec("remove", t._path), Xo(t, null);
}
function Xo(t, e) {
  t = Me(t), Ec("set", t._path), Ip("set", e, t._path, !1);
  const n = new ps();
  return V0(
    t._repo,
    t._path,
    e,
    /*priority=*/
    null,
    n.wrapCallback(() => {
    })
  ), n.promise;
}
function Eo(t, e) {
  N0("update", e, t._path);
  const n = new ps();
  return z0(t._repo, t._path, e, n.wrapCallback(() => {
  })), n.promise;
}
function iE(t) {
  t = Me(t);
  const e = new xp(() => {
  }), n = new Zo(e);
  return W0(t._repo, t, n).then((i) => new rs(i, new wn(t._repo, t._path), t._queryParams.getIndex()));
}
class Zo {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const i = n._queryParams.getIndex();
    return new Z0("value", this, new rs(e.snapshotNode, new wn(n._repo, n._path), i));
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new eE(this, e, n) : null;
  }
  matches(e) {
    return e instanceof Zo ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
function rE(t, e, n, i, r) {
  let s;
  if (typeof i == "object" && (s = void 0, r = i), typeof i == "function" && (s = i), r && r.onlyOnce) {
    const l = n, c = (d, h) => {
      al(t._repo, t, a), l(d, h);
    };
    c.userCallback = n.userCallback, c.context = n.context, n = c;
  }
  const o = new xp(n, s || void 0), a = new Zo(o);
  return B0(t._repo, t, a), () => al(t._repo, t, a);
}
function os(t, e, n, i) {
  return rE(t, "value", e, n, i);
}
function Ac(t, e, n) {
  al(t._repo, t, null);
}
n0(wn);
a0(wn);
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
const sE = "FIREBASE_DATABASE_EMULATOR_HOST", cl = {};
let oE = !1;
function aE(t, e, n, i) {
  const r = e.lastIndexOf(":"), s = e.substring(0, r), o = vi(s);
  t.repoInfo_ = new Lf(
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
function lE(t, e, n, i, r) {
  let s = i || t.options.databaseURL;
  s === void 0 && (t.options.projectId || pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), Ve("Using default host for project ", t.options.projectId), s = `${t.options.projectId}-default-rtdb.firebaseio.com`);
  let o = ad(s, r), a = o.repoInfo, l;
  typeof process < "u" && process.env && (l = process.env[sE]), l ? (s = `http://${l}?ns=${a.namespace}`, o = ad(s, r), a = o.repoInfo) : o.repoInfo.secure;
  const c = new vw(t.name, t.options, e);
  O0("Invalid Firebase Database URL", o), G(o.path) || pn("Database URL must point to the root of a Firebase Database (not including a child path).");
  const d = uE(a, t, c, new gw(t, n));
  return new dE(d, t);
}
function cE(t, e) {
  const n = cl[e];
  (!n || n[t.key] !== t) && pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`), q0(t), delete n[t.key];
}
function uE(t, e, n, i) {
  let r = cl[e.name];
  r || (r = {}, cl[e.name] = r);
  let s = r[t.toURLString()];
  return s && pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), s = new F0(t, oE, n, i), r[t.toURLString()] = s, s;
}
class dE {
  /** @hideconstructor */
  constructor(e, n) {
    this._repoInternal = e, this.app = n, this.type = "database", this._instanceStarted = !1;
  }
  get _repo() {
    return this._instanceStarted || (U0(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
  }
  get _root() {
    return this._rootInternal || (this._rootInternal = new wn(this._repo, ne())), this._rootInternal;
  }
  _delete() {
    return this._rootInternal !== null && (cE(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve();
  }
  _checkNotDeleted(e) {
    this._rootInternal === null && pn("Cannot call " + e + " on a deleted database.");
  }
}
function hE(t = $l(), e) {
  const n = Fo(t, "database").getImmediate({
    identifier: e
  });
  if (!n._instanceStarted) {
    const i = Eh("database");
    i && fE(n, ...i);
  }
  return n;
}
function fE(t, e, n, i = {}) {
  t = Me(t), t._checkNotDeleted("useEmulator");
  const r = `${e}:${n}`, s = t._repoInternal;
  if (t._instanceStarted) {
    if (r === t._repoInternal.repoInfo_.host && ci(i, s.repoInfo_.emulatorOptions))
      return;
    pn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.");
  }
  let o;
  if (s.repoInfo_.nodeAdmin)
    i.mockUserToken && pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new zs(zs.OWNER);
  else if (i.mockUserToken) {
    const a = typeof i.mockUserToken == "string" ? i.mockUserToken : Th(i.mockUserToken, t.app.options.projectId);
    o = new zs(a);
  }
  vi(e) && (xl(e), Ol("Database", !0)), aE(s, r, i, o);
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
function pE(t) {
  tw(yi), ui(new Wn(
    "database",
    (e, { instanceIdentifier: n }) => {
      const i = e.getProvider("app").getImmediate(), r = e.getProvider("auth-internal"), s = e.getProvider("app-check-internal");
      return lE(i, r, s, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), zt(Pu, Nu, t), zt(Pu, Nu, "esm2020");
}
dn.prototype.simpleListen = function(t, e) {
  this.sendRequest("q", { p: t }, e);
};
dn.prototype.echo = function(t, e) {
  this.sendRequest("echo", { d: t }, e);
};
pE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Op = "firebasestorage.googleapis.com", mE = "storageBucket", _E = 120 * 1e3, gE = 600 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends yn {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, n, i = 0) {
    super(Sa(e), `Firebase Storage: ${n} (${Sa(e)})`), this.status_ = i, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, Xt.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  /**
   * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
   */
  _codeEquals(e) {
    return Sa(e) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage;
  }
}
var Gt;
(function(t) {
  t.UNKNOWN = "unknown", t.OBJECT_NOT_FOUND = "object-not-found", t.BUCKET_NOT_FOUND = "bucket-not-found", t.PROJECT_NOT_FOUND = "project-not-found", t.QUOTA_EXCEEDED = "quota-exceeded", t.UNAUTHENTICATED = "unauthenticated", t.UNAUTHORIZED = "unauthorized", t.UNAUTHORIZED_APP = "unauthorized-app", t.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", t.INVALID_CHECKSUM = "invalid-checksum", t.CANCELED = "canceled", t.INVALID_EVENT_NAME = "invalid-event-name", t.INVALID_URL = "invalid-url", t.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", t.NO_DEFAULT_BUCKET = "no-default-bucket", t.CANNOT_SLICE_BLOB = "cannot-slice-blob", t.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", t.NO_DOWNLOAD_URL = "no-download-url", t.INVALID_ARGUMENT = "invalid-argument", t.INVALID_ARGUMENT_COUNT = "invalid-argument-count", t.APP_DELETED = "app-deleted", t.INVALID_ROOT_OPERATION = "invalid-root-operation", t.INVALID_FORMAT = "invalid-format", t.INTERNAL_ERROR = "internal-error", t.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
})(Gt || (Gt = {}));
function Sa(t) {
  return "storage/" + t;
}
function vE() {
  const t = "An unknown error occurred, please check the error payload for server response.";
  return new Xt(Gt.UNKNOWN, t);
}
function bE() {
  return new Xt(Gt.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function yE() {
  return new Xt(Gt.CANCELED, "User canceled the upload/download.");
}
function wE(t) {
  return new Xt(Gt.INVALID_URL, "Invalid URL '" + t + "'.");
}
function EE(t) {
  return new Xt(Gt.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.");
}
function cd(t) {
  return new Xt(Gt.INVALID_ARGUMENT, t);
}
function Lp() {
  return new Xt(Gt.APP_DELETED, "The Firebase app was deleted.");
}
function IE(t) {
  return new Xt(Gt.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
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
class Dt {
  constructor(e, n) {
    this.bucket = e, this.path_ = n;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, n) {
    let i;
    try {
      i = Dt.makeFromUrl(e, n);
    } catch {
      return new Dt(e, "");
    }
    if (i.path === "")
      return i;
    throw EE(e);
  }
  static makeFromUrl(e, n) {
    let i = null;
    const r = "([A-Za-z0-9.\\-_]+)";
    function s(A) {
      A.path.charAt(A.path.length - 1) === "/" && (A.path_ = A.path_.slice(0, -1));
    }
    const o = "(/(.*))?$", a = new RegExp("^gs://" + r + o, "i"), l = { bucket: 1, path: 3 };
    function c(A) {
      A.path_ = decodeURIComponent(A.path);
    }
    const d = "v[A-Za-z0-9_]+", h = n.replace(/[.]/g, "\\."), u = "(/([^?#]*).*)?$", f = new RegExp(`^https?://${h}/${d}/b/${r}/o${u}`, "i"), p = { bucket: 1, path: 3 }, g = n === Op ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n, E = "([^?#]*)", T = new RegExp(`^https?://${g}/${r}/${E}`, "i"), k = [
      { regex: a, indices: l, postModify: s },
      {
        regex: f,
        indices: p,
        postModify: c
      },
      {
        regex: T,
        indices: { bucket: 1, path: 2 },
        postModify: c
      }
    ];
    for (let A = 0; A < k.length; A++) {
      const D = k[A], I = D.regex.exec(e);
      if (I) {
        const w = I[D.indices.bucket];
        let v = I[D.indices.path];
        v || (v = ""), i = new Dt(w, v), D.postModify(i);
        break;
      }
    }
    if (i == null)
      throw wE(e);
    return i;
  }
}
class CE {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e = !1) {
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
function TE(t, e, n) {
  let i = 1, r = null, s = null, o = !1, a = 0;
  function l() {
    return a === 2;
  }
  let c = !1;
  function d(...E) {
    c || (c = !0, e.apply(null, E));
  }
  function h(E) {
    r = setTimeout(() => {
      r = null, t(f, l());
    }, E);
  }
  function u() {
    s && clearTimeout(s);
  }
  function f(E, ...T) {
    if (c) {
      u();
      return;
    }
    if (E) {
      u(), d.call(null, E, ...T);
      return;
    }
    if (l() || o) {
      u(), d.call(null, E, ...T);
      return;
    }
    i < 64 && (i *= 2);
    let k;
    a === 1 ? (a = 2, k = 0) : k = (i + Math.random()) * 1e3, h(k);
  }
  let p = !1;
  function g(E) {
    p || (p = !0, u(), !c && (r !== null ? (E || (a = 2), clearTimeout(r), h(0)) : E || (a = 1)));
  }
  return h(0), s = setTimeout(() => {
    o = !0, g(!0);
  }, n), g;
}
function SE(t) {
  t(!1);
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
function kE(t) {
  return t !== void 0;
}
function ud(t, e, n, i) {
  if (i < e)
    throw cd(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (i > n)
    throw cd(`Invalid value for '${t}'. Expected ${n} or less.`);
}
function AE(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const i in t)
    if (t.hasOwnProperty(i)) {
      const r = e(i) + "=" + e(t[i]);
      n = n + r + "&";
    }
  return n = n.slice(0, -1), n;
}
var Io;
(function(t) {
  t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT";
})(Io || (Io = {}));
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
function RE(t, e) {
  const n = t >= 500 && t < 600, r = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ].indexOf(t) !== -1, s = e.indexOf(t) !== -1;
  return n || r || s;
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
class PE {
  constructor(e, n, i, r, s, o, a, l, c, d, h, u = !0, f = !1) {
    this.url_ = e, this.method_ = n, this.headers_ = i, this.body_ = r, this.successCodes_ = s, this.additionalRetryCodes_ = o, this.callback_ = a, this.errorCallback_ = l, this.timeout_ = c, this.progressCallback_ = d, this.connectionFactory_ = h, this.retry = u, this.isUsingEmulator = f, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((p, g) => {
      this.resolve_ = p, this.reject_ = g, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (i, r) => {
      if (r) {
        i(!1, new $s(!1, null, !0));
        return;
      }
      const s = this.connectionFactory_();
      this.pendingConnection_ = s;
      const o = (a) => {
        const l = a.loaded, c = a.lengthComputable ? a.total : -1;
        this.progressCallback_ !== null && this.progressCallback_(l, c);
      };
      this.progressCallback_ !== null && s.addUploadProgressListener(o), s.send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_).then(() => {
        this.progressCallback_ !== null && s.removeUploadProgressListener(o), this.pendingConnection_ = null;
        const a = s.getErrorCode() === Io.NO_ERROR, l = s.getStatus();
        if (!a || RE(l, this.additionalRetryCodes_) && this.retry) {
          const d = s.getErrorCode() === Io.ABORT;
          i(!1, new $s(!1, null, d));
          return;
        }
        const c = this.successCodes_.indexOf(l) !== -1;
        i(!0, new $s(c, s));
      });
    }, n = (i, r) => {
      const s = this.resolve_, o = this.reject_, a = r.connection;
      if (r.wasSuccessCode)
        try {
          const l = this.callback_(a, a.getResponse());
          kE(l) ? s(l) : s();
        } catch (l) {
          o(l);
        }
      else if (a !== null) {
        const l = vE();
        l.serverResponse = a.getErrorText(), this.errorCallback_ ? o(this.errorCallback_(a, l)) : o(l);
      } else if (r.canceled) {
        const l = this.appDelete_ ? Lp() : yE();
        o(l);
      } else {
        const l = bE();
        o(l);
      }
    };
    this.canceled_ ? n(!1, new $s(!1, null, !0)) : this.backoffId_ = TE(e, n, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && SE(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class $s {
  constructor(e, n, i) {
    this.wasSuccessCode = e, this.connection = n, this.canceled = !!i;
  }
}
function NE(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function xE(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function OE(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function LE(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function DE(t, e, n, i, r, s, o = !0, a = !1) {
  const l = AE(t.urlParams), c = t.url + l, d = Object.assign({}, t.headers);
  return OE(d, e), NE(d, n), xE(d, s), LE(d, i), new PE(c, t.method, d, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, r, o, a);
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
function ME(t) {
  if (t.length === 0)
    return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function $E(t) {
  const e = t.lastIndexOf("/", t.length - 2);
  return e === -1 ? t : t.slice(e + 1);
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
class Co {
  constructor(e, n) {
    this._service = e, n instanceof Dt ? this._location = n : this._location = Dt.makeFromUrl(n, e.host);
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, n) {
    return new Co(e, n);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const e = new Dt(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  /**
   * The name of the bucket containing this reference's object.
   */
  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */
  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  get name() {
    return $E(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */
  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */
  get parent() {
    const e = ME(this._location.path);
    if (e === null)
      return null;
    const n = new Dt(this._location.bucket, e);
    return new Co(this._service, n);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw IE(e);
  }
}
function dd(t, e) {
  const n = e?.[mE];
  return n == null ? null : Dt.makeFromBucketSpec(n, t);
}
function FE(t, e, n, i = {}) {
  t.host = `${e}:${n}`;
  const r = vi(e);
  r && (xl(`https://${t.host}/b`), Ol("Storage", !0)), t._isUsingEmulator = !0, t._protocol = r ? "https" : "http";
  const { mockUserToken: s } = i;
  s && (t._overrideAuthToken = typeof s == "string" ? s : Th(s, t.app.options.projectId));
}
class UE {
  constructor(e, n, i, r, s, o = !1) {
    this.app = e, this._authProvider = n, this._appCheckProvider = i, this._url = r, this._firebaseVersion = s, this._isUsingEmulator = o, this._bucket = null, this._host = Op, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = _E, this._maxUploadRetryTime = gE, this._requests = /* @__PURE__ */ new Set(), r != null ? this._bucket = Dt.makeFromBucketSpec(r, this._host) : this._bucket = dd(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = Dt.makeFromBucketSpec(this._url, e) : this._bucket = dd(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    ud(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxUploadRetryTime = e;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    ud(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxOperationRetryTime = e;
  }
  async _getAuthToken() {
    if (this._overrideAuthToken)
      return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const n = await e.getToken();
      if (n !== null)
        return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    if (at(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  /**
   * Stop running requests and prevent more from being created.
   */
  _delete() {
    return this._deleted || (this._deleted = !0, this._requests.forEach((e) => e.cancel()), this._requests.clear()), Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */
  _makeStorageReference(e) {
    return new Co(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, n, i, r, s = !0) {
    if (this._deleted)
      return new CE(Lp());
    {
      const o = DE(e, this._appId, i, r, n, this._firebaseVersion, s, this._isUsingEmulator);
      return this._requests.add(o), o.getPromise().then(() => this._requests.delete(o), () => this._requests.delete(o)), o;
    }
  }
  async makeRequestWithTokens(e, n) {
    const [i, r] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(e, n, i, r).getPromise();
  }
}
const hd = "@firebase/storage", fd = "0.14.0";
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
const Dp = "storage";
function HE(t = $l(), e) {
  t = Me(t);
  const i = Fo(t, Dp).getImmediate({
    identifier: e
  }), r = Eh("storage");
  return r && WE(i, ...r), i;
}
function WE(t, e, n, i = {}) {
  FE(t, e, n, i);
}
function VE(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(), i = t.getProvider("auth-internal"), r = t.getProvider("app-check-internal");
  return new UE(n, i, r, e, yi);
}
function zE() {
  ui(new Wn(
    Dp,
    VE,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), zt(hd, fd, ""), zt(hd, fd, "esm2020");
}
zE();
const Mp = {
  apiKey: "AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0",
  authDomain: "withcenter-test-5.firebaseapp.com",
  databaseURL: "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "withcenter-test-5",
  storageBucket: "withcenter-test-5.appspot.com",
  messagingSenderId: "1064417466216",
  appId: "1:1064417466216:web:039565a60d9b0b74db28dd"
};
console.log("Firebase Config:", Mp);
const Rc = Ph(Mp), Kt = Zy(Rc), It = hE(Rc);
HE(Rc);
var jE = /* @__PURE__ */ W('<div class="loading svelte-1t1odzy"><div class="spinner svelte-1t1odzy"></div> <p class="svelte-1t1odzy">게시물을 불러오는 중...</p></div>'), BE = /* @__PURE__ */ W('<div class="error svelte-1t1odzy"><p class="svelte-1t1odzy"> </p></div>'), qE = /* @__PURE__ */ W('<div class="empty svelte-1t1odzy"><p class="svelte-1t1odzy">아직 게시물이 없습니다.</p></div>'), GE = /* @__PURE__ */ W('<h3 class="post-title svelte-1t1odzy"> </h3>'), KE = /* @__PURE__ */ W('<p class="post-text svelte-1t1odzy"> </p>'), YE = /* @__PURE__ */ W('<article class="post-card svelte-1t1odzy" role="button" tabindex="0"><div class="post-header svelte-1t1odzy"><div class="author-info svelte-1t1odzy"><span class="author-name svelte-1t1odzy"> </span> <span class="post-date svelte-1t1odzy"> </span></div></div> <div class="post-content svelte-1t1odzy"><!> <!></div> <div class="post-footer svelte-1t1odzy"><span class="stat svelte-1t1odzy"> </span> <span class="stat svelte-1t1odzy"> </span></div></article>'), QE = /* @__PURE__ */ W('<div class="posts svelte-1t1odzy"></div>'), JE = /* @__PURE__ */ W('<div class="post-list-container svelte-1t1odzy"><!></div>');
const XE = {
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
function ZE(t, e) {
  vn(e, !0), Gn(t, XE);
  let n = bt(e, "path", 7, "posts"), i = bt(e, "limit", 7, "10"), r = /* @__PURE__ */ ie(nn([])), s = /* @__PURE__ */ ie(!0), o = /* @__PURE__ */ ie(""), a = null;
  fs(() => {
    l();
  }), b_(() => {
    c();
  });
  function l() {
    try {
      a = Et(It, n()), os(
        a,
        (S) => {
          const k = S.val();
          k ? N(r, Object.entries(k).map(([A, D]) => ({ id: A, ...D })).sort((A, D) => (D.timestamp || 0) - (A.timestamp || 0)).slice(0, parseInt(i())), !0) : N(r, [], !0), N(s, !1), N(o, "");
        },
        (S) => {
          console.error("데이터 읽기 오류:", S), N(o, "데이터를 불러오는 중 오류가 발생했습니다."), N(s, !1);
        }
      );
    } catch (S) {
      console.error("구독 설정 오류:", S), N(o, "데이터베이스 연결에 실패했습니다."), N(s, !1);
    }
  }
  function c() {
    a && Ac(a);
  }
  function d(S) {
    const k = new CustomEvent("post-click", { detail: { post: S }, bubbles: !0, composed: !0 });
    dispatchEvent(k);
  }
  function h(S, k) {
    (S.key === "Enter" || S.key === " ") && (S.preventDefault(), d(k));
  }
  function u(S) {
    if (!S) return "";
    const k = typeof S == "string" ? Number(S) : S, A = new Date(k), I = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), w = Math.floor(I / 6e4), v = Math.floor(I / 36e5), R = Math.floor(I / 864e5);
    return w < 1 ? "방금 전" : w < 60 ? `${w}분 전` : v < 24 ? `${v}시간 전` : R < 7 ? `${R}일 전` : A.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  }
  var f = {
    get path() {
      return n();
    },
    set path(S = "posts") {
      n(S), ft();
    },
    get limit() {
      return i();
    },
    set limit(S = "10") {
      i(S), ft();
    }
  }, p = JE(), g = _(p);
  {
    var E = (S) => {
      var k = jE();
      O(S, k);
    }, T = (S) => {
      var k = Te(), A = de(k);
      {
        var D = (w) => {
          var v = BE(), R = _(v), P = _(R, !0);
          m(R), m(v), re(() => L(P, b(o))), O(w, v);
        }, I = (w) => {
          var v = Te(), R = de(v);
          {
            var P = (M) => {
              var H = qE();
              O(M, H);
            }, V = (M) => {
              var H = QE();
              tr(H, 21, () => b(r), (J) => J.id, (J, U) => {
                var K = YE();
                K.__click = () => d(b(U)), K.__keydown = (ge) => h(ge, b(U));
                var oe = _(K), X = _(oe), Z = _(X), ee = _(Z, !0);
                m(Z);
                var te = y(Z, 2), Se = _(te, !0);
                m(te), m(X), m(oe);
                var ve = y(oe, 2), ye = _(ve);
                {
                  var j = (ge) => {
                    var Be = GE(), qe = _(Be, !0);
                    m(Be), re(() => L(qe, b(U).title)), O(ge, Be);
                  };
                  be(ye, (ge) => {
                    b(U).title && ge(j);
                  });
                }
                var ae = y(ye, 2);
                {
                  var _e = (ge) => {
                    var Be = KE(), qe = _(Be, !0);
                    m(Be), re(() => L(qe, b(U).content)), O(ge, Be);
                  };
                  be(ae, (ge) => {
                    b(U).content && ge(_e);
                  });
                }
                m(ve);
                var Qe = y(ve, 2), Ne = _(Qe), se = _(Ne);
                m(Ne);
                var xe = y(Ne, 2), tt = _(xe);
                m(xe), m(Qe), m(K), re(
                  (ge) => {
                    ke(K, "aria-label", `게시물: ${(b(U).title || b(U).content || "제목 없음") ?? ""}`), L(ee, b(U).author || "익명"), L(Se, ge), L(se, `👍 ${(b(U).likes || 0) ?? ""}`), L(tt, `💬 ${(b(U).comments?.length || 0) ?? ""}`);
                  },
                  [() => u(b(U).timestamp)]
                ), O(J, K);
              }), m(H), O(M, H);
            };
            be(
              R,
              (M) => {
                b(r).length === 0 ? M(P) : M(V, !1);
              },
              !0
            );
          }
          O(w, v);
        };
        be(
          A,
          (w) => {
            b(o) ? w(D) : w(I, !1);
          },
          !0
        );
      }
      O(S, k);
    };
    be(g, (S) => {
      b(s) ? S(E) : S(T, !1);
    });
  }
  return m(p), O(t, p), bn(f);
}
er(["click", "keydown"]);
customElements.define("post-list", fe(ZE, { path: {}, limit: {} }, [], [], !0));
Dm();
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
const eI = {
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
var tI = /* @__PURE__ */ a_("<svg><!><!></svg>");
function $e(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), i = Re(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  vn(e, !1);
  let r = bt(e, "name", 12, void 0), s = bt(e, "color", 12, "currentColor"), o = bt(e, "size", 12, 24), a = bt(e, "strokeWidth", 12, 2), l = bt(e, "absoluteStrokeWidth", 12, !1), c = bt(e, "iconNode", 28, () => []);
  const d = (...g) => g.filter((E, T, S) => !!E && S.indexOf(E) === T).join(" ");
  var h = {
    get name() {
      return r();
    },
    set name(g) {
      r(g), ft();
    },
    get color() {
      return s();
    },
    set color(g) {
      s(g), ft();
    },
    get size() {
      return o();
    },
    set size(g) {
      o(g), ft();
    },
    get strokeWidth() {
      return a();
    },
    set strokeWidth(g) {
      a(g), ft();
    },
    get absoluteStrokeWidth() {
      return l();
    },
    set absoluteStrokeWidth(g) {
      l(g), ft();
    },
    get iconNode() {
      return c();
    },
    set iconNode(g) {
      c(g), ft();
    }
  };
  mh();
  var u = tI();
  Gc(
    u,
    (g, E) => ({
      ...eI,
      ...i,
      width: o(),
      height: o(),
      stroke: s(),
      "stroke-width": g,
      class: E
    }),
    [
      () => (Ai(l()), Ai(a()), Ai(o()), qt(() => l() ? Number(a()) * 24 / Number(o()) : a())),
      () => (Ai(r()), Ai(n), qt(() => d("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", n.class)))
    ]
  );
  var f = _(u);
  tr(f, 1, c, Do, (g, E) => {
    var T = /* @__PURE__ */ Pa(() => gm(b(E), 2));
    let S = () => b(T)[0], k = () => b(T)[1];
    var A = Te(), D = de(A);
    I_(D, S, !0, (I, w) => {
      Gc(I, () => ({ ...k() }));
    }), O(g, A);
  });
  var p = y(f);
  return Pe(p, e, "default", {}), m(u), O(t, u), bn(h);
}
fe(
  $e,
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
function $p(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "book-open" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe($p, {}, ["default"], [], !0);
function ul(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "check" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(ul, {}, ["default"], [], !0);
function Fp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Fp, {}, ["default"], [], !0);
function dl(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "external-link" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(dl, {}, ["default"], [], !0);
function Pc(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "file-text" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Pc, {}, ["default"], [], !0);
function Up(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "house" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Up, {}, ["default"], [], !0);
function kr(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "layout-grid" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(kr, {}, ["default"], [], !0);
function Hp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "log-in" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Hp, {}, ["default"], [], !0);
function Wp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "log-out" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Wp, {}, ["default"], [], !0);
function Ar(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "menu" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Ar, {}, ["default"], [], !0);
function xn(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "message-circle" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(xn, {}, ["default"], [], !0);
function Vp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "phone" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Vp, {}, ["default"], [], !0);
function zp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "send" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(zp, {}, ["default"], [], !0);
function jp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
  ];
  $e(t, He({ name: "server" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(jp, {}, ["default"], [], !0);
function Bp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ];
  $e(t, He({ name: "settings" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Bp, {}, ["default"], [], !0);
function qp(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "trending-up" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(qp, {}, ["default"], [], !0);
function Un(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "user" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(Un, {}, ["default"], [], !0);
function as(t, e) {
  const n = Re(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]);
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
  $e(t, He({ name: "users" }, () => n, {
    get iconNode() {
      return i;
    },
    children: (r, s) => {
      var o = Te(), a = de(o);
      Pe(a, e, "default", {}), O(r, o);
    },
    $$slots: { default: !0 }
  }));
}
fe(as, {}, ["default"], [], !0);
var nI = /* @__PURE__ */ W("<option> </option>"), iI = /* @__PURE__ */ W('<div class="error-message svelte-1e01td3"> </div>'), rI = /* @__PURE__ */ W('<span class="loading-spinner svelte-1e01td3"></span> 전송 중...', 1), sI = /* @__PURE__ */ W("<!> 인증 코드 전송", 1), oI = /* @__PURE__ */ W('<div class="step-phone"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">전화번호로 로그인</h2> <p class="step-description svelte-1e01td3">전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.</p></div> <div class="form-group svelte-1e01td3"><label for="country-code" class="label svelte-1e01td3">국가 선택</label> <select id="country-code" class="select svelte-1e01td3"></select></div> <div class="form-group svelte-1e01td3"><label for="phone-number" class="label svelte-1e01td3">전화번호</label> <div class="phone-input-group svelte-1e01td3"><span class="country-code-display svelte-1e01td3"> </span> <input id="phone-number" type="tel" placeholder="1012345678" class="input phone-input svelte-1e01td3"/></div> <p class="input-hint svelte-1e01td3">숫자만 입력해주세요 (국가 코드 제외)</p></div> <!> <button class="btn btn-primary svelte-1e01td3"><!></button></div>'), aI = /* @__PURE__ */ W('<div class="error-message svelte-1e01td3"> </div>'), lI = /* @__PURE__ */ W('<span class="loading-spinner svelte-1e01td3"></span> 확인 중...', 1), cI = /* @__PURE__ */ W("<!> 로그인", 1), uI = /* @__PURE__ */ W('<div class="step-code"><div class="step-header svelte-1e01td3"><!> <h2 class="step-title svelte-1e01td3">인증 코드 입력</h2> <p class="step-description svelte-1e01td3"> <br/> 6자리 인증 코드를 입력해주세요.</p></div> <div class="form-group svelte-1e01td3"><label for="verification-code" class="label svelte-1e01td3">인증 코드</label> <input id="verification-code" type="text" placeholder="123456" maxlength="6" class="input code-input svelte-1e01td3"/> <p class="input-hint svelte-1e01td3">6자리 숫자를 입력해주세요</p></div> <!> <div class="button-group svelte-1e01td3"><button class="btn btn-secondary svelte-1e01td3">이전으로</button> <button class="btn btn-primary svelte-1e01td3"><!></button></div> <div class="resend-hint svelte-1e01td3">인증 코드를 받지 못하셨나요? <button class="link-button svelte-1e01td3">다시 전송하기</button></div></div>'), dI = /* @__PURE__ */ W('<div class="phone-login svelte-1e01td3"><div class="login-card svelte-1e01td3"><!>  <div id="recaptcha-container" class="recaptcha-container svelte-1e01td3"></div></div></div>');
const hI = {
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
function fI(t, e) {
  vn(e, !0), Gn(t, hI);
  const n = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" }
  ];
  let i = /* @__PURE__ */ ie(
    "+82"
    // 기본값: 한국
  ), r = /* @__PURE__ */ ie(
    ""
    // 전화번호 (국가 코드 제외)
  ), s = /* @__PURE__ */ ie(
    ""
    // SMS 인증 코드
  ), o = /* @__PURE__ */ ie(
    "phone"
    // 'phone' | 'code'
  ), a = /* @__PURE__ */ ie(!1), l = /* @__PURE__ */ ie(""), c = /* @__PURE__ */ ie(null), d = /* @__PURE__ */ ie(null), h = /* @__PURE__ */ ie(
    void 0
    // reCAPTCHA 위젯 ID 저장
  ), u = /* @__PURE__ */ ie(
    null
    // reCAPTCHA 컨테이너 DOM 요소 참조
  );
  function f() {
    return new Promise((v, R) => {
      try {
        if (!b(u)) {
          const P = new Error("reCAPTCHA 컨테이너를 찾을 수 없습니다.");
          console.error(P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
          return;
        }
        if (b(c)) {
          if (b(h) !== void 0 && typeof window.grecaptcha < "u")
            try {
              window.grecaptcha.reset(b(h)), console.log("reCAPTCHA reset completed"), v(b(h));
              return;
            } catch (P) {
              console.warn("Failed to reset reCAPTCHA:", P);
            }
          try {
            b(c).clear(), N(c, null), N(h, void 0);
          } catch (P) {
            console.warn("Failed to clear reCAPTCHA:", P);
          }
        }
        N(
          c,
          new Zb(Kt, b(u).id, {
            size: "invisible",
            // invisible 모드 활성화 - 사용자 상호작용 없이 자동 검증
            callback: (P) => {
              console.log("reCAPTCHA verified (invisible mode)");
            },
            "expired-callback": () => {
              console.warn("reCAPTCHA expired. Resetting..."), typeof window.grecaptcha < "u" && b(h) !== void 0 ? window.grecaptcha.reset(b(h)) : f();
            }
          }),
          !0
        ), b(c).render().then((P) => {
          N(h, P, !0), console.log("reCAPTCHA rendered with widgetId:", P), v(P);
        }).catch((P) => {
          console.error("Failed to render reCAPTCHA:", P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
        });
      } catch (P) {
        console.error("reCAPTCHA 초기화 실패:", P), N(l, "reCAPTCHA 초기화에 실패했습니다."), R(P);
      }
    });
  }
  fs(() => {
    const v = document.createElement("div");
    return v.id = "recaptcha-container-" + Math.random().toString(36).substr(2, 9), v.className = "recaptcha-container-light-dom", v.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `, document.body.appendChild(v), N(u, v, !0), f(), () => {
      v && v.parentNode && v.parentNode.removeChild(v);
    };
  });
  function p(v) {
    return /^[0-9]{6,15}$/.test(v);
  }
  async function g() {
    if (N(l, ""), !p(b(r))) {
      N(l, "올바른 전화번호를 입력해주세요 (6-15자리 숫자)");
      return;
    }
    N(a, !0);
    try {
      const v = `${b(i)}${b(r)}`;
      console.log("Sending verification code to:", v), N(d, await ny(Kt, v, b(c)), !0), console.log("Verification code sent successfully (invisible reCAPTCHA verified)"), N(o, "code");
    } catch (v) {
      console.error("SMS 전송 실패:", v), v.code === "auth/invalid-phone-number" ? N(l, "잘못된 전화번호 형식입니다.") : v.code === "auth/too-many-requests" ? N(l, "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.") : N(l, `SMS 전송 실패: ${v.message}`);
    } finally {
      N(a, !1);
    }
  }
  async function E() {
    if (N(l, ""), b(s).length !== 6) {
      N(l, "6자리 인증 코드를 입력해주세요.");
      return;
    }
    N(a, !0);
    try {
      const v = await b(d).confirm(b(s));
      console.log("Login successful:", v.user);
      const R = new CustomEvent("login-success", {
        detail: { user: v.user, phoneNumber: v.user.phoneNumber }
      });
      dispatchEvent(R), N(r, ""), N(s, ""), N(o, "phone");
    } catch (v) {
      console.error("인증 코드 확인 실패:", v), v.code === "auth/invalid-verification-code" ? N(l, "잘못된 인증 코드입니다.") : v.code === "auth/code-expired" ? N(l, "인증 코드가 만료되었습니다. 다시 시도해주세요.") : N(l, `인증 실패: ${v.message}`);
      const R = new CustomEvent("login-error", { detail: { error: v.message } });
      dispatchEvent(R);
    } finally {
      N(a, !1);
    }
  }
  function T() {
    N(o, "phone"), N(s, ""), N(l, "");
  }
  var S = dI(), k = _(S), A = _(k);
  {
    var D = (v) => {
      var R = oI(), P = _(R), V = _(P);
      Vp(V, { class: "icon-large" }), At(4), m(P);
      var M = y(P, 2), H = y(_(M), 2);
      tr(H, 21, () => n, Do, (j, ae) => {
        var _e = nI(), Qe = _(_e);
        m(_e);
        var Ne = {};
        re(() => {
          L(Qe, `${b(ae).flag ?? ""} ${b(ae).name ?? ""} (${b(ae).code ?? ""})`), Ne !== (Ne = b(ae).code) && (_e.value = (_e.__value = b(ae).code) ?? "");
        }), O(j, _e);
      }), m(H), m(M);
      var J = y(M, 2), U = y(_(J), 2), K = _(U), oe = _(K, !0);
      m(K);
      var X = y(K, 2);
      Ua(X), m(U), At(2), m(J);
      var Z = y(J, 2);
      {
        var ee = (j) => {
          var ae = iI(), _e = _(ae, !0);
          m(ae), re(() => L(_e, b(l))), O(j, ae);
        };
        be(Z, (j) => {
          b(l) && j(ee);
        });
      }
      var te = y(Z, 2);
      te.__click = g;
      var Se = _(te);
      {
        var ve = (j) => {
          var ae = rI();
          At(), O(j, ae);
        }, ye = (j) => {
          var ae = sI(), _e = de(ae);
          zp(_e, { class: "btn-icon" }), At(), O(j, ae);
        };
        be(Se, (j) => {
          b(a) ? j(ve) : j(ye, !1);
        });
      }
      m(te), m(R), re(() => {
        H.disabled = b(a), L(oe, b(i)), X.disabled = b(a), te.disabled = b(a) || !b(r);
      }), P_(H, () => b(i), (j) => N(i, j)), Js("keypress", X, (j) => {
        j.key === "Enter" && (j.preventDefault(), g());
      }), Yc(X, () => b(r), (j) => N(r, j)), O(v, R);
    }, I = (v) => {
      var R = Te(), P = de(R);
      {
        var V = (M) => {
          var H = uI(), J = _(H), U = _(J);
          ul(U, { class: "icon-large" });
          var K = y(U, 4), oe = _(K);
          At(2), m(K), m(J);
          var X = y(J, 2), Z = y(_(X), 2);
          Ua(Z), At(2), m(X);
          var ee = y(X, 2);
          {
            var te = (se) => {
              var xe = aI(), tt = _(xe, !0);
              m(xe), re(() => L(tt, b(l))), O(se, xe);
            };
            be(ee, (se) => {
              b(l) && se(te);
            });
          }
          var Se = y(ee, 2), ve = _(Se);
          ve.__click = T;
          var ye = y(ve, 2);
          ye.__click = E;
          var j = _(ye);
          {
            var ae = (se) => {
              var xe = lI();
              At(), O(se, xe);
            }, _e = (se) => {
              var xe = cI(), tt = de(xe);
              ul(tt, { class: "btn-icon" }), At(), O(se, xe);
            };
            be(j, (se) => {
              b(a) ? se(ae) : se(_e, !1);
            });
          }
          m(ye), m(Se);
          var Qe = y(Se, 2), Ne = y(_(Qe));
          Ne.__click = T, m(Qe), m(H), re(() => {
            L(oe, `${b(i) ?? ""}${b(r) ?? ""}로 전송된`), Z.disabled = b(a), ve.disabled = b(a), ye.disabled = b(a) || b(s).length !== 6;
          }), Js("keypress", Z, (se) => {
            se.key === "Enter" && (se.preventDefault(), E());
          }), Yc(Z, () => b(s), (se) => N(s, se)), O(M, H);
        };
        be(
          P,
          (M) => {
            b(o) === "code" && M(V);
          },
          !0
        );
      }
      O(v, R);
    };
    be(A, (v) => {
      b(o) === "phone" ? v(D) : v(I, !1);
    });
  }
  var w = y(A, 2);
  O_(w, (v) => N(u, v), () => b(u)), m(k), m(S), O(t, S), bn();
}
er(["click"]);
customElements.define("phone-login", fe(fI, {}, [], [], !0));
const Nc = nr(null), pI = nr(!0);
uf(Kt, (t) => {
  Nc.set(t), pI.set(!1);
});
async function dC(t, e) {
  try {
    return await cf(Kt, t, e), { success: !0 };
  } catch (n) {
    return console.error("로그인 오류:", n), { success: !1, error: Gp(n.code) };
  }
}
async function hC(t, e, n = "") {
  try {
    const i = await lf(Kt, t, e);
    return n && await jl(i.user, {
      displayName: n
    }), { success: !0 };
  } catch (i) {
    return console.error("회원가입 오류:", i), { success: !1, error: Gp(i.code) };
  }
}
async function mI() {
  try {
    return await xb(Kt), { success: !0 };
  } catch (t) {
    return console.error("로그아웃 오류:", t), { success: !1, error: t.message };
  }
}
function Gp(t) {
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
class ei {
  // === Singleton 인스턴스 ===
  static #t = null;
  #e = /* @__PURE__ */ ie(
    // === Public 반응형 속성 ===
    // Svelte 5의 $state로 선언되어 자동으로 반응형
    /** @type {boolean} 로딩 상태 (초기값: true) */
    !0
  );
  get loading() {
    return b(this.#e);
  }
  set loading(e) {
    N(this.#e, e, !0);
  }
  #i = /* @__PURE__ */ ie(!1);
  get isAuthenticated() {
    return b(this.#i);
  }
  set isAuthenticated(e) {
    N(this.#i, e, !0);
  }
  uid = null;
  email = null;
  phoneNumber = null;
  #r = /* @__PURE__ */ ie(null);
  get data() {
    return b(this.#r);
  }
  set data(e) {
    N(this.#r, e, !0);
  }
  #l = /* @__PURE__ */ ie(null);
  get error() {
    return b(this.#l);
  }
  set error(e) {
    N(this.#l, e, !0);
  }
  #o = null;
  #s = null;
  #n = null;
  constructor() {
    typeof window < "u" && this.#a();
  }
  /**
   * Singleton 인스턴스 가져오기
   *
   * @returns {FirebaseLoginUser} FirebaseLoginUser 인스턴스
   *
   * @example
   * const loginUser = FirebaseLoginUser.getInstance();
   * console.log(loginUser.isAuthenticated);
   */
  static getInstance() {
    return ei.#t || (ei.#t = new ei()), ei.#t;
  }
  /**
   * Firebase Auth 초기화 및 상태 리스너 설정
   *
   * onAuthStateChanged()를 사용하여 로그인/로그아웃 상태를 감지합니다.
   * 로그인 시 onValue()를 통해 사용자 데이터를 실시간으로 로드하고,
   * uid, email, phoneNumber 같은 static 속성들을 업데이트합니다.
   */
  #a() {
    try {
      if (!Kt)
        throw new Error("Auth instance not available");
      this.#s = uf(
        Kt,
        (e) => {
          if (this.#o = e, e) {
            this.isAuthenticated = !0, this.uid = e.uid, this.email = e.email, this.phoneNumber = e.phoneNumber, this.error = null, this.#n && (this.#n(), this.#n = null);
            const n = Et(It, `users/${e.uid}`);
            this.#n = os(
              n,
              (i) => {
                this.data = i.val();
              },
              (i) => {
                this.error = i;
              }
            );
          } else
            this.isAuthenticated = !1, this.uid = null, this.email = null, this.phoneNumber = null, this.data = null, this.#n && (this.#n(), this.#n = null);
          this.loading = !1;
        },
        (e) => {
          this.error = e, this.loading = !1, this.isAuthenticated = !1;
        }
      );
    } catch (e) {
      this.error = e, this.loading = !1;
    }
  }
  /**
   * 사용자 프로필 업데이트
   *
   * Firebase Auth와 Realtime Database 모두 업데이트합니다.
   * 업데이트 가능한 필드: displayName, photoUrl 등
   *
   * @param {Object} profileData - 업데이트할 프로필 데이터
   * @param {string} [profileData.displayName] - 표시 이름
   * @param {string} [profileData.photoUrl] - 프로필 사진 URL
   * @returns {Promise<void>}
   * @throws {Error} 사용자가 로그인하지 않았거나 업데이트에 실패한 경우
   *
   * @example
   * // displayName 업데이트
   * await firebaseLoginUser.updateProfile({ displayName: '홍길동' });
   *
   * // displayName과 photoUrl 동시 업데이트
   * await firebaseLoginUser.updateProfile({
   *   displayName: '홍길동',
   *   photoUrl: 'https://example.com/photo.jpg'
   * });
   */
  async updateProfile(e) {
    if (!this.#o)
      throw new Error("User is not authenticated");
    try {
      const n = {};
      e.displayName !== void 0 && (n.displayName = e.displayName), e.photoUrl !== void 0 && (n.photoURL = e.photoUrl), Object.keys(n).length > 0 && await jl(this.#o, n);
      const i = { ...e }, r = Et(It, `users/${this.uid}`);
      await Eo(r, i);
    } catch (n) {
      throw this.error = n, n;
    }
  }
  /**
   * 특정 필드만 업데이트
   *
   * @param {string} field - 필드 이름
   * @param {any} value - 필드 값
   * @returns {Promise<void>}
   *
   * @example
   * await firebaseLoginUser.updateField('displayName', '홍길동');
   */
  async updateField(e, n) {
    return this.updateProfile({ [e]: n });
  }
  /**
   * displayName 업데이트 (단축 메서드)
   *
   * @param {string} displayName - 표시 이름
   * @returns {Promise<void>}
   *
   * @example
   * await firebaseLoginUser.updateDisplayName('홍길동');
   */
  async updateDisplayName(e) {
    return this.updateProfile({ displayName: e });
  }
  /**
   * photoUrl 업데이트 (단축 메서드)
   *
   * @param {string} photoUrl - 프로필 사진 URL
   * @returns {Promise<void>}
   *
   * @example
   * await firebaseLoginUser.updatePhotoUrl('https://example.com/photo.jpg');
   */
  async updatePhotoUrl(e) {
    return this.updateProfile({ photoUrl: e });
  }
  /**
   * 리스너 해제 및 정리 (cleanup)
   *
   * 메모리 누수를 방지하기 위해 컴포넌트 unmount 시 호출합니다.
   * 일반적으로는 자동으로 관리되므로 수동 호출이 필요 없습니다.
   *
   * @example
   * // Svelte 컴포넌트에서
   * import { onDestroy } from 'svelte';
   *
   * onDestroy(() => {
   *   firebaseLoginUser.dispose();
   * });
   */
  dispose() {
    this.#s && (this.#s(), this.#s = null), this.#n && (this.#n(), this.#n = null), ei.#t = null;
  }
}
const Ut = ei.getInstance(), _I = "GitHub", gI = {
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
  신고: "Report",
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
  "home.vibeBanner": "100% Built with Vibe Coding",
  "home.techStack.title": "🛠️ Tech Stack",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "Custom Elements",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android and iOS app development",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "Chosen as real-time database",
  "home.techStack.dokplay": "Dokplay",
  "home.techStack.dokplayDesc": "Self-hosting",
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
  "home.todo.item8.label": "Firebase Cloud Functions",
  "home.todo.item8.description": "Server-side logic and data consistency",
  "home.todo.item8.subitem1": "User profile synchronization (onUserProfileUpdate)",
  "home.todo.item8.subitem2": "Like/comment count synchronization",
  "home.todo.item8.subitem3": "Cleanup associated data on post deletion",
  "home.todo.item8.subitem4": "Notification triggers and delivery",
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
  "phoneLogin.error.smsFailed": "SMS sending failed: {error}",
  "label.category.community": "Community",
  "label.category.qna": "Q&A",
  "label.category.news": "News",
  "label.category.market": "Marketplace",
  현재언어: "Current language",
  언어_한국어: "Korean",
  언어_영어: "English",
  언어_일본어: "Japanese",
  언어_중국어: "Chinese",
  공사중메시지: "This page is under construction",
  공사중설명_채팅목록: "The chat list feature is currently under development and will be updated soon.",
  공사중설명_설정: "The settings feature is currently under development and will be updated soon.",
  공사중설명_게시물상세: "The post detail view feature is currently under development and will be updated soon.",
  공사중설명_앱정보: "The about page is currently under development and will be updated soon.",
  공사중설명_도움말: "The help page is currently under development and will be updated soon.",
  공사중설명_이용약관: "The terms of service page is currently under development and will be updated soon.",
  공사중설명_개인정보: "The privacy policy page is currently under development and will be updated soon.",
  공사중설명_문의하기: "The contact page is currently under development and will be updated soon.",
  메뉴로돌아가기: "Back to Menu",
  페이지선택: "Select a page to navigate to below",
  사용자프로필: "User Profile",
  게시물상세예시: "Post Detail (e.g., ID:123)",
  채팅목록: "Chat List",
  테스트게시글생성: "[Dev] Generate Test Posts",
  로그인성공알림: `Login successful!
Phone: {phone}`,
  로그인실패: "Login failed: {error}",
  전화번호로로그인: "Sign in easily with your phone number.",
  로그인하셨습니다: "You are logged in as {phone}.",
  홈으로이동: "Go to Home",
  사용자목록로딩: "Loading user list...",
  등록된사용자없음: "No registered users yet.",
  사용자목록실패: "Failed to load user list.",
  더많은사용자로딩: "Loading more users...",
  모든사용자로딩완료: "All users have been loaded.",
  정보없음: "No information",
  사용자: "User",
  이름없음: "No name",
  나: "Me",
  가입일: "Joined on",
  프로필보기: "View Profile",
  프로필사진: "Profile Photo",
  사진업로드중: "Uploading photo...",
  사진업로드실패: "Failed to upload photo: {error}",
  다른사진작업중: "Another photo operation is in progress...",
  프로필사진제거중: "Removing profile photo...",
  프로필사진제거완료: "Profile photo has been removed.",
  프로필사진제거실패: "Failed to remove profile photo: {error}",
  프로필업데이트중: "Updating profile...",
  프로필업데이트완료: "Profile has been updated successfully.",
  프로필업데이트실패: "Failed to update profile: {error}",
  닉네임입력: "Enter your nickname",
  닉네임최대길이: "Maximum 50 characters",
  소개글: "Bio",
  소개글입력: "Tell us about yourself",
  소개글최대길이: "Maximum 200 characters",
  홈페이지: "Website",
  홈페이지입력: "Enter your website URL",
  GitHub: _I,
  GitHub입력: "Enter your GitHub profile URL",
  사진업로드: "Upload Photo",
  사진제거: "Remove Photo",
  저장하기: "Save Changes",
  저장중: "Saving...",
  테스트게시글생성타이틀: "📝 Generate Test Posts",
  테스트게시글생성설명: "Generate 100 fun test posts for each category, totaling 400 posts.",
  로그인필요메시지: "⚠️ Login required to use this feature.",
  로그인하러가기: "Go to Login",
  게시글생성시작: "Start Generating Posts",
  생성중: "Generating...",
  생성성공: "✅ Successfully generated {count} posts!",
  생성실패: "❌ Failed to generate posts: {error}",
  경고: "⚠️ Warning",
  경고메시지: "This will create {count} test posts. Only use for testing purposes.",
  진행상황: "Progress",
  생성된게시글수: "{count} of {total} posts created",
  로딩중: "Loading...",
  게시판설명: " for the latest news and share your opinions.",
  글쓰기: "Write",
  게시글없음: "No posts yet",
  첫게시글공유: "Share your first story and start the community.",
  새글작성2: "Write New Post",
  게시글로딩중: "Loading posts...",
  게시글로드실패: "Failed to load posts.",
  더많은게시글로딩: "Loading more posts...",
  모든게시글확인: "All posts have been loaded.",
  새게시글작성: "Write New Post",
  카테고리: "Category",
  카테고리선택: "Select Category",
  카테고리선택필요: "Please select a category.",
  제목: "Title",
  제목입력: "Enter title",
  제목입력필요: "Please enter a title.",
  내용: "Content",
  내용입력: "Enter content",
  내용입력필요: "Please enter content.",
  전송: "Send",
  전송중: "Sending...",
  게시글작성완료: "Post has been created.",
  게시글저장실패: "Failed to save post: {error}",
  게시글저장중오류: "An error occurred while saving the post.",
  로그인정보확인불가: "Could not verify login information.",
  좋아요실패: "An error occurred while processing like.",
  이미좋아요: "You already liked this post."
}, vI = {
  프로젝트_명칭: "한",
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
  신고: "신고",
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
  "home.vibeBanner": "100% ✨ 바이브 코딩으로 만들어진 프로젝트입니다",
  "home.techStack.title": "🛠️ 기술 스택",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "커스텀 엘리먼트",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android 및 iOS 앱 제작",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "실시간 데이터베이스로서 선택",
  "home.techStack.dokplay": "Dokplay",
  "home.techStack.dokplayDesc": "셀프 호스팅",
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
  "home.todo.item8.label": "Firebase Cloud Functions",
  "home.todo.item8.description": "서버 측 로직 및 데이터 일관성 보장",
  "home.todo.item8.subitem1": "사용자 프로필 동기화 (onUserProfileUpdate)",
  "home.todo.item8.subitem2": "좋아요/댓글 개수 동기화",
  "home.todo.item8.subitem3": "게시글 삭제 시 연관 데이터 정리",
  "home.todo.item8.subitem4": "알림 트리거 및 전송",
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
  "phoneLogin.error.smsFailed": "SMS 전송 실패: {error}",
  "label.category.community": "커뮤니티",
  "label.category.qna": "질문답변",
  "label.category.news": "뉴스",
  "label.category.market": "회원장터",
  공사중메시지: "이 페이지는 공사중입니다",
  공사중설명_채팅목록: "채팅 목록 기능을 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_설정: "설정 기능을 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_게시물상세: "게시물 상세 보기 기능을 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_앱정보: "앱 정보 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_도움말: "도움말 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_이용약관: "이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_개인정보: "개인정보 처리방침 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",
  공사중설명_문의하기: "문의하기 페이지를 개발 중이며, 곧 업데이트될 예정입니다.",
  메뉴로돌아가기: "메뉴로 돌아가기",
  페이지선택: "아래에서 이동할 페이지를 선택하세요",
  사용자프로필: "사용자 프로필",
  게시물상세예시: "게시물 상세 (예: ID:123)",
  채팅목록: "채팅 목록",
  테스트게시글생성: "[개발] 테스트 게시글 생성",
  로그인성공알림: `로그인 성공!
전화번호: {phone}`,
  로그인실패: "로그인 실패: {error}",
  전화번호로로그인: "전화번호로 간편하게 로그인하세요.",
  로그인하셨습니다: "{phone}로 로그인하셨습니다.",
  홈으로이동: "홈으로 이동",
  게시물상세: "게시물 상세",
  정보없음: "정보 없음",
  이름없음: "이름 없음",
  가입일: "가입일",
  프로필보기: "프로필 보기",
  사용자목록로딩: "사용자 목록을 불러오는 중...",
  등록된사용자없음: "등록된 사용자가 없습니다.",
  사용자목록실패: "사용자 목록을 불러오는데 실패했습니다.",
  더많은사용자로딩: "더 많은 사용자를 불러오는 중...",
  모든사용자로딩완료: "모든 사용자를 불러왔습니다.",
  다른사용자프로필: "다른 사용자 프로필:",
  프로필사진: "프로필 사진",
  프로필사진변경: "프로필 사진 변경",
  프로필사진추가: "프로필 사진 추가",
  프로필사진제거: "프로필 사진 제거",
  프로필사진클릭변경: "프로필 사진을 클릭하여 변경",
  사진저장중: "사진을 저장하는 중입니다...",
  닉네임입력: "닉네임을 입력하세요",
  닉네임헬퍼: "최대 50자까지 입력할 수 있습니다",
  선택하지않음: "선택하지 않음",
  남자: "남자",
  여자: "여자",
  생년월일헬퍼: "YYYY-MM-DD 형식으로 선택해주세요",
  저장중: "저장 중...",
  다른사진작업중: "다른 사진 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.",
  로그인후이용: "로그인 후 이용해주세요.",
  이미지파일만: "이미지 파일만 선택 가능합니다.",
  파일크기제한: "파일 크기는 5MB 이하여야 합니다.",
  프로필사진제거됨: "프로필 사진이 제거되었습니다.",
  사진제거실패: "사진 제거 실패: {error}",
  프로필사진저장됨: "프로필 사진이 저장되었습니다.",
  사진저장실패: "사진 저장 실패: {error}",
  프로필업데이트성공: "프로필이 성공적으로 업데이트되었습니다!",
  프로필업데이트오류: "오류: {error}",
  테스트데이터생성: "테스트 데이터 생성",
  테스트게시글생성타이틀: "📝 테스트 게시글 생성",
  테스트게시글설명: "각 카테고리별로 100개씩, 총 400개의 재미있는 테스트 게시글을 생성합니다.",
  로그인하러가기: "로그인하러 가기",
  게시글생성시작: "게시글 생성 시작",
  실행로그: "실행 로그",
  완료게시판확인: "✅ 완료! 게시판 페이지에서 확인해보세요.",
  사용자: "사용자",
  로딩중: "로딩 중...",
  게시판설명: "에서 최신 소식을 확인하고 의견을 나눠보세요.",
  글쓰기: "글쓰기",
  게시글없음: "아직 등록된 게시글이 없어요",
  첫게시글공유: "첫 번째 이야기를 공유하고 커뮤니티를 시작해보세요.",
  새글작성2: "새 글 작성하기",
  게시글로딩중: "게시글을 불러오는 중입니다...",
  게시글로드실패: "게시글을 불러오는 중 문제가 발생했습니다.",
  더많은게시글로딩: "더 많은 게시글을 불러오는 중...",
  모든게시글확인: "모든 게시글을 확인했습니다.",
  새게시글작성: "새 게시글 작성",
  카테고리: "카테고리",
  카테고리선택: "카테고리 선택",
  카테고리선택필요: "카테고리를 선택해주세요.",
  제목: "제목",
  제목입력: "제목을 입력하세요",
  제목입력필요: "제목을 입력해주세요.",
  내용: "내용",
  내용입력: "내용을 입력하세요",
  내용입력필요: "내용을 입력해주세요.",
  전송: "전송",
  전송중: "전송 중...",
  게시글작성완료: "게시글이 작성되었습니다.",
  게시글저장실패: "게시글 저장 실패: {error}",
  게시글저장중오류: "게시글 저장 중 오류가 발생했습니다.",
  로그인정보확인불가: "로그인 정보를 확인할 수 없습니다.",
  좋아요실패: "좋아요 처리 중 오류가 발생했습니다.",
  이미좋아요: "이미 좋아요를 눌렀습니다."
}, bI = "GitHub", yI = {
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
  신고: "通報",
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
  "home.vibeBanner": "100% ✨ バイブコーディングで作られたプロジェクトです",
  "home.techStack.title": "🛠️ 技術スタック",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "カスタムエレメント",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "AndroidおよびiOSアプリ開発",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "リアルタイムデータベースとして選択",
  "home.techStack.dokplay": "Dokplay",
  "home.techStack.dokplayDesc": "セルフホスティング",
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
  "home.todo.item8.label": "Firebase Cloud Functions",
  "home.todo.item8.description": "サーバー側ロジックとデータ整合性の保証",
  "home.todo.item8.subitem1": "ユーザープロフィール同期 (onUserProfileUpdate)",
  "home.todo.item8.subitem2": "いいね/コメント数の同期",
  "home.todo.item8.subitem3": "投稿削除時の関連データクリーンアップ",
  "home.todo.item8.subitem4": "通知トリガーと配信",
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
  "phoneLogin.error.smsFailed": "SMS送信失敗: {error}",
  "label.category.community": "コミュニティ",
  "label.category.qna": "Q&A",
  "label.category.news": "ニュース",
  "label.category.market": "マーケットプレイス",
  현재언어: "現在の言語",
  언어_한국어: "韓国語",
  언어_영어: "英語",
  언어_일본어: "日本語",
  언어_중국어: "中国語",
  공사중메시지: "このページは工事中です",
  공사중설명_채팅목록: "チャットリスト機能は現在開発中で、まもなく更新される予定です。",
  공사중설명_설정: "設定機能は現在開発中で、まもなく更新される予定です。",
  공사중설명_게시물상세: "投稿詳細表示機能は現在開発中で、まもなく更新される予定です。",
  공사중설명_앱정보: "アプリ情報ページは現在開発中で、まもなく更新される予定です。",
  공사중설명_도움말: "ヘルプページは現在開発中で、まもなく更新される予定です。",
  공사중설명_이용약관: "利用規約ページは現在開発中で、まもなく更新される予定です。",
  공사중설명_개인정보: "プライバシーポリシーページは現在開発中で、まもなく更新される予定です。",
  공사중설명_문의하기: "お問い合わせページは現在開発中で、まもなく更新される予定です。",
  메뉴로돌아가기: "メニューに戻る",
  페이지선택: "移動するページを下から選択してください",
  사용자프로필: "ユーザープロフィール",
  게시물상세예시: "投稿詳細 (例: ID:123)",
  채팅목록: "チャットリスト",
  테스트게시글생성: "[開発] テスト投稿生成",
  로그인성공알림: `ログイン成功!
電話番号: {phone}`,
  로그인실패: "ログイン失敗: {error}",
  전화번호로로그인: "電話番号で簡単にログインしてください。",
  로그인하셨습니다: "{phone}でログインしています。",
  홈으로이동: "ホームへ移動",
  사용자목록로딩: "ユーザーリストを読み込み中...",
  등록된사용자없음: "登録されたユーザーがいません。",
  사용자목록실패: "ユーザーリストの読み込みに失敗しました。",
  더많은사용자로딩: "さらにユーザーを読み込み中...",
  모든사용자로딩완료: "すべてのユーザーを読み込みました。",
  정보없음: "情報なし",
  사용자: "ユーザー",
  이름없음: "名前なし",
  나: "私",
  가입일: "登録日",
  프로필보기: "プロフィール表示",
  프로필사진: "プロフィール写真",
  사진업로드중: "写真をアップロード中...",
  사진업로드실패: "写真のアップロードに失敗しました: {error}",
  다른사진작업중: "他の写真操作が進行中です...",
  프로필사진제거중: "プロフィール写真を削除中...",
  프로필사진제거완료: "プロフィール写真を削除しました。",
  프로필사진제거실패: "プロフィール写真の削除に失敗しました: {error}",
  프로필업데이트중: "プロフィールを更新中...",
  프로필업데이트완료: "プロフィールを正常に更新しました。",
  프로필업데이트실패: "プロフィールの更新に失敗しました: {error}",
  닉네임입력: "ニックネームを入力してください",
  닉네임최대길이: "最大50文字まで入力できます",
  소개글: "自己紹介",
  소개글입력: "自己紹介を入力してください",
  소개글최대길이: "最大200文字まで入力できます",
  홈페이지: "ウェブサイト",
  홈페이지입력: "ウェブサイトURLを入力してください",
  GitHub: bI,
  GitHub입력: "GitHubプロフィールURLを入力してください",
  사진업로드: "写真をアップロード",
  사진제거: "写真を削除",
  저장하기: "変更を保存",
  저장중: "保存中...",
  테스트게시글생성타이틀: "📝 テスト投稿生成",
  테스트게시글생성설명: "各カテゴリーに100件ずつ、合計400件の楽しいテスト投稿を生成します。",
  로그인필요메시지: "⚠️ この機能を使用するにはログインが必要です。",
  로그인하러가기: "ログインへ",
  게시글생성시작: "投稿生成開始",
  생성중: "生成中...",
  생성성공: "✅ {count}件の投稿を正常に生成しました！",
  생성실패: "❌ 投稿の生成に失敗しました: {error}",
  경고: "⚠️ 警告",
  경고메시지: "{count}件のテスト投稿を作成します。テスト目的でのみ使用してください。",
  진행상황: "進行状況",
  생성된게시글수: "{total}件中{count}件の投稿を作成",
  로딩중: "読み込み中...",
  게시판설명: "の最新ニュースを確認し、意見を共有してください。",
  글쓰기: "書く",
  게시글없음: "まだ投稿がありません",
  첫게시글공유: "最初のストーリーを共有してコミュニティを始めましょう。",
  새글작성2: "新規投稿を書く",
  게시글로딩중: "投稿を読み込み中...",
  게시글로드실패: "投稿の読み込みに失敗しました。",
  더많은게시글로딩: "さらに多くの投稿を読み込み中...",
  모든게시글확인: "すべての投稿を読み込みました。",
  새게시글작성: "新規投稿を書く",
  카테고리: "カテゴリ",
  카테고리선택: "カテゴリを選択",
  카테고리선택필요: "カテゴリを選択してください。",
  제목: "タイトル",
  제목입력: "タイトルを入力してください",
  제목입력필요: "タイトルを入力してください。",
  내용: "コンテンツ",
  내용입력: "コンテンツを入力してください",
  내용입력필요: "コンテンツを入力してください。",
  전송: "送信",
  전송중: "送信中...",
  게시글작성완료: "投稿が作成されました。",
  게시글저장실패: "投稿の保存に失敗しました: {error}",
  게시글저장중오류: "投稿の保存中にエラーが発生しました。",
  로그인정보확인불가: "ログイン情報を確認できませんでした。",
  좋아요실패: "いいね処理中にエラーが発生しました。",
  이미좋아요: "すでにいいねしています。"
}, wI = "GitHub", EI = {
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
  신고: "举报",
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
  "home.vibeBanner": "100% ✨ 使用Vibe编码制作的项目",
  "home.techStack.title": "🛠️ 技术栈",
  "home.techStack.svelte": "Svelte",
  "home.techStack.svelteDesc": "自定义元素",
  "home.techStack.flutter": "Flutter",
  "home.techStack.flutterDesc": "Android和iOS应用开发",
  "home.techStack.firebase": "Firebase",
  "home.techStack.firebaseDesc": "选择作为实时数据库",
  "home.techStack.dokplay": "Dokplay",
  "home.techStack.dokplayDesc": "自托管",
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
  "home.todo.item8.label": "Firebase Cloud Functions",
  "home.todo.item8.description": "服务器端逻辑和数据一致性保障",
  "home.todo.item8.subitem1": "用户资料同步 (onUserProfileUpdate)",
  "home.todo.item8.subitem2": "点赞/评论数同步",
  "home.todo.item8.subitem3": "帖子删除时清理关联数据",
  "home.todo.item8.subitem4": "通知触发和发送",
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
  "phoneLogin.error.smsFailed": "短信发送失败: {error}",
  "label.category.community": "社区",
  "label.category.qna": "问答",
  "label.category.news": "新闻",
  "label.category.market": "会员商城",
  현재언어: "当前语言",
  언어_한국어: "韩语",
  언어_영어: "英语",
  언어_일본어: "日语",
  언어_중국어: "中文",
  공사중메시지: "此页面正在建设中",
  공사중설명_채팅목록: "聊天列表功能正在开发中，即将更新。",
  공사중설명_설정: "设置功能正在开发中，即将更新。",
  공사중설명_게시물상세: "帖子详情查看功能正在开发中，即将更新。",
  공사중설명_앱정보: "应用信息页面正在开发中，即将更新。",
  공사중설명_도움말: "帮助页面正在开发中，即将更新。",
  공사중설명_이용약관: "使用条款页面正在开发中，即将更新。",
  공사중설명_개인정보: "隐私政策页面正在开发中，即将更新。",
  공사중설명_문의하기: "联系我们页面正在开发中，即将更新。",
  메뉴로돌아가기: "返回菜单",
  페이지선택: "从下方选择要导航的页面",
  사용자프로필: "用户资料",
  게시물상세예시: "帖子详情 (例: ID:123)",
  채팅목록: "聊天列表",
  테스트게시글생성: "[开发] 生成测试帖子",
  로그인성공알림: `登录成功！
手机号: {phone}`,
  로그인실패: "登录失败: {error}",
  전화번호로로그인: "使用手机号轻松登录。",
  로그인하셨습니다: "您已使用 {phone} 登录。",
  홈으로이동: "前往首页",
  사용자목록로딩: "正在加载用户列表...",
  등록된사용자없음: "尚无注册用户。",
  사용자목록실패: "加载用户列表失败。",
  더많은사용자로딩: "正在加载更多用户...",
  모든사용자로딩완료: "已加载所有用户。",
  정보없음: "无信息",
  사용자: "用户",
  이름없음: "无名称",
  나: "我",
  가입일: "注册日期",
  프로필보기: "查看资料",
  프로필사진: "头像",
  사진업로드중: "正在上传照片...",
  사진업로드실패: "照片上传失败: {error}",
  다른사진작업중: "另一个照片操作正在进行中...",
  프로필사진제거중: "正在删除头像...",
  프로필사진제거완료: "头像已删除。",
  프로필사진제거실패: "删除头像失败: {error}",
  프로필업데이트중: "正在更新资料...",
  프로필업데이트완료: "资料更新成功。",
  프로필업데이트실패: "资料更新失败: {error}",
  닉네임입력: "输入您的昵称",
  닉네임최대길이: "最多可输入50个字符",
  소개글: "个人简介",
  소개글입력: "请输入自我介绍",
  소개글최대길이: "最多可输入200个字符",
  홈페이지: "网站",
  홈페이지입력: "请输入您的网站URL",
  GitHub: wI,
  GitHub입력: "请输入您的GitHub个人资料URL",
  사진업로드: "上传照片",
  사진제거: "删除照片",
  저장하기: "保存更改",
  저장중: "保存中...",
  테스트게시글생성타이틀: "📝 生成测试帖子",
  테스트게시글생성설명: "每个类别生成100条有趣的测试帖子，共400条。",
  로그인필요메시지: "⚠️ 使用此功能需要登录。",
  로그인하러가기: "前往登录",
  게시글생성시작: "开始生成帖子",
  생성중: "生成中...",
  생성성공: "✅ 成功生成了 {count} 条帖子！",
  생성실패: "❌ 生成帖子失败: {error}",
  경고: "⚠️ 警告",
  경고메시지: "这将创建 {count} 条测试帖子。仅用于测试目的。",
  진행상황: "进度",
  생성된게시글수: "已创建 {count} / {total} 条帖子",
  로딩중: "加载中...",
  게시판설명: "的最新新闻，分享您的意见。",
  글쓰기: "写作",
  게시글없음: "还没有帖子",
  첫게시글공유: "分享您的第一个故事并开始社区。",
  새글작성2: "写新帖子",
  게시글로딩중: "正在加载帖子...",
  게시글로드실패: "加载帖子失败。",
  더많은게시글로딩: "正在加载更多帖子...",
  모든게시글확인: "已加载所有帖子。",
  새게시글작성: "写新帖子",
  카테고리: "类别",
  카테고리선택: "选择类别",
  카테고리선택필요: "请选择一个类别。",
  제목: "标题",
  제목입력: "输入标题",
  제목입력필요: "请输入标题。",
  내용: "内容",
  내용입력: "输入内容",
  내용입력필요: "请输入内容。",
  전송: "发送",
  전송중: "发送中...",
  게시글작성완료: "帖子已创建。",
  게시글저장실패: "帖子保存失败: {error}",
  게시글저장중오류: "保存帖子时出错。",
  로그인정보확인불가: "无法验证登录信息。",
  좋아요실패: "处理点赞时出错。",
  이미좋아요: "您已经点赞过了。"
}, ka = { en: gI, ko: vI, ja: yI, zh: EI };
function hl(t) {
  const e = (t ?? "").toLowerCase();
  return e.startsWith("ko") ? "ko" : e.startsWith("ja") ? "ja" : e.startsWith("zh") ? "zh" : "en";
}
function Kp() {
  if (typeof navigator > "u")
    return "en";
  const t = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const e of t) {
    const n = hl(e);
    if (n !== "en") return n;
  }
  return "en";
}
function II(t) {
  let e = hl(t) || Kp();
  function n(s) {
    e = hl(s);
  }
  function i() {
    return e;
  }
  function r(s, o = {}) {
    return ((ka[e] ?? ka.en)[s] ?? ka.en[s] ?? s).replace(/\{(\w+)\}/g, (c, d) => o[d] ?? "");
  }
  return { t: r, setLocale: n, getLocale: i };
}
const xc = "sns-web-locale", Yp = [
  { code: "ko", label: "🇰🇷 한국어" },
  { code: "en", label: "🇺🇸 English" },
  { code: "ja", label: "🇯🇵 日本語" },
  { code: "zh", label: "🇨🇳 中文" }
];
function CI() {
  if (typeof localStorage > "u") return null;
  const t = localStorage.getItem(xc);
  if (!t) return null;
  const e = Yp.find((n) => n.code === t);
  return e ? (
    /** @type {'ko' | 'en' | 'ja' | 'zh'} */
    e.code
  ) : null;
}
const Qp = CI() ?? Kp(), To = II(Qp);
typeof localStorage < "u" && localStorage.setItem(xc, To.getLocale());
const Oc = nr(Qp);
function TI(t) {
  To.setLocale(t);
  const e = To.getLocale();
  Oc.set(e), typeof localStorage < "u" && localStorage.setItem(xc, e);
}
const Lc = D_(
  Oc,
  (t) => (e, n = {}) => To.t(e, n)
), SI = nr("");
var kI = /* @__PURE__ */ W('<div class="page-title-inline svelte-38psow"><h1 class="page-title svelte-38psow"> </h1></div>'), AI = /* @__PURE__ */ W('<img alt="프로필" class="avatar-image svelte-38psow"/>'), RI = /* @__PURE__ */ W('<div class="avatar-fallback svelte-38psow"> </div>'), PI = /* @__PURE__ */ W('<div class="dropdown-menu svelte-38psow"><div class="dropdown-label svelte-38psow"> </div> <div class="dropdown-divider svelte-38psow"></div> <a href="/user/profile" class="dropdown-item svelte-38psow"><!> <span> </span></a> <div class="dropdown-divider svelte-38psow"></div> <button class="dropdown-item svelte-38psow" type="button"><!> <span> </span></button></div>'), NI = /* @__PURE__ */ W('<img class="avatar-image svelte-38psow"/>'), xI = /* @__PURE__ */ W('<div class="avatar-fallback avatar-fallback-small svelte-38psow"> </div>'), OI = /* @__PURE__ */ W('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/list" class="nav-button svelte-38psow"><!> <span> </span></a> <div class="dropdown svelte-38psow"><button class="profile-button dropdown-trigger svelte-38psow" type="button"><div class="avatar svelte-38psow"><!></div> <span class="profile-name svelte-38psow"> </span></button> <!></div> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/user/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/profile" class="icon-button svelte-38psow"><div class="avatar avatar-small svelte-38psow"><!></div></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), LI = /* @__PURE__ */ W('<div class="desktop-menu svelte-38psow"><a href="/post/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/chat/list" class="nav-button svelte-38psow"><!> <span> </span></a> <a href="/user/login" class="nav-button svelte-38psow"> </a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div> <div class="mobile-menu svelte-38psow"><a href="/post/list" class="icon-button svelte-38psow"><!></a> <a href="/chat/list" class="icon-button svelte-38psow"><!></a> <a href="/user/login" class="icon-button svelte-38psow"><!></a> <a href="/menu" class="icon-button svelte-38psow"><!></a></div>', 1), DI = /* @__PURE__ */ W('<header class="topbar svelte-38psow"><div class="container svelte-38psow"><div class="logo-section svelte-38psow"><a href="/" class="logo-link svelte-38psow"><img src="/logo.png" alt="로고" class="logo-img svelte-38psow"/></a> <!></div> <nav class="nav svelte-38psow"><!></nav></div></header>');
const MI = {
  hash: "svelte-38psow",
  code: `\r
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
  /* 아바타 */.avatar.svelte-38psow {width:1.5rem;height:1.5rem;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#e5e7eb;}.avatar-small.svelte-38psow {width:1.75rem;height:1.75rem;}.avatar-image.svelte-38psow {width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}.avatar-fallback.svelte-38psow {width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:500;color:#6b7280;}.avatar-fallback-small.svelte-38psow {font-size:0.625rem;}\r
\r
  /* 드롭다운 */.dropdown.svelte-38psow {position:relative;}.dropdown-menu.svelte-38psow {position:absolute;right:0;top:calc(100% + 0.5rem);min-width:12rem;background:white;border:1px solid #e5e7eb;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);padding:0.5rem;z-index:50;}.dropdown-label.svelte-38psow {padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:600;color:#111827;}.dropdown-divider.svelte-38psow {height:1px;background-color:#e5e7eb;margin:0.25rem 0;}.dropdown-item.svelte-38psow {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem 0.75rem;background:transparent;color:inherit;border:none;border-radius:0.25rem;font-size:0.875rem;text-align:left;cursor:pointer;text-decoration:none;transition:background-color 0.2s;}.dropdown-item.svelte-38psow:hover {background-color:#f3f4f6;}`
};
function $I(t, e) {
  vn(e, !0), Gn(t, MI);
  const n = () => si(SI, "$pageTitle", s), i = () => si(Nc, "$user", s), r = () => si(Lc, "$t", s), [s, o] = Rl();
  let a = /* @__PURE__ */ ie(!1);
  async function l() {
    if ((await mI()).success) {
      const I = new CustomEvent("logout-success", { bubbles: !0, composed: !0 });
      dispatchEvent(I);
    }
    N(a, !1);
  }
  function c() {
    return Ut.data?.displayName ? Ut.data.displayName.charAt(0).toUpperCase() : Ut.email ? Ut.email.charAt(0).toUpperCase() : "U";
  }
  function d() {
    N(a, !b(a));
  }
  function h(D) {
    const I = document.querySelector(".dropdown-menu"), w = document.querySelector(".dropdown-trigger");
    I && !I.contains(D.target) && !w?.contains(D.target) && N(a, !1);
  }
  fs(() => (document.addEventListener("click", h), () => {
    document.removeEventListener("click", h);
  }));
  var u = DI(), f = _(u), p = _(f), g = y(_(p), 2);
  {
    var E = (D) => {
      var I = kI(), w = _(I), v = _(w, !0);
      m(w), m(I), re(() => L(v, n())), O(D, I);
    };
    be(g, (D) => {
      n() && D(E);
    });
  }
  m(p);
  var T = y(p, 2), S = _(T);
  {
    var k = (D) => {
      var I = OI(), w = de(I), v = _(w), R = _(v);
      kr(R, { size: 16 });
      var P = y(R, 2), V = _(P, !0);
      m(P), m(v);
      var M = y(v, 2), H = _(M);
      xn(H, { size: 16 });
      var J = y(H, 2), U = _(J, !0);
      m(J), m(M);
      var K = y(M, 2), oe = _(K);
      as(oe, { size: 16 });
      var X = y(oe, 2), Z = _(X, !0);
      m(X), m(K);
      var ee = y(K, 2), te = _(ee);
      te.__click = d;
      var Se = _(te), ve = _(Se);
      {
        var ye = (we) => {
          var le = AI();
          re(() => ke(le, "src", Ut.data.photoUrl)), O(we, le);
        }, j = (we) => {
          var le = RI(), nt = _(le, !0);
          m(le), re((kt) => L(nt, kt), [c]), O(we, le);
        };
        be(ve, (we) => {
          Ut.data?.photoUrl ? we(ye) : we(j, !1);
        });
      }
      m(Se);
      var ae = y(Se, 2), _e = _(ae, !0);
      m(ae), m(te);
      var Qe = y(te, 2);
      {
        var Ne = (we) => {
          var le = PI(), nt = _(le), kt = _(nt, !0);
          m(nt);
          var In = y(nt, 4), Cn = _(In);
          Un(Cn, { size: 16 });
          var Ii = y(Cn, 2), Ci = _(Ii, !0);
          m(Ii), m(In);
          var Jn = y(In, 4);
          Jn.__click = l;
          var hr = _(Jn);
          Wp(hr, { size: 16 });
          var fr = y(hr, 2), As = _(fr, !0);
          m(fr), m(Jn), m(le), re(
            (ta, it, rt) => {
              L(kt, ta), L(Ci, it), L(As, rt);
            },
            [() => r()("내계정"), () => r()("프로필수정"), () => r()("로그아웃")]
          ), O(we, le);
        };
        be(Qe, (we) => {
          b(a) && we(Ne);
        });
      }
      m(ee);
      var se = y(ee, 2), xe = _(se);
      Ar(xe, { size: 24 }), m(se), m(w);
      var tt = y(w, 2), ge = _(tt), Be = _(ge);
      kr(Be, { size: 20 }), m(ge);
      var qe = y(ge, 2), Yn = _(qe);
      as(Yn, { size: 20 }), m(qe);
      var En = y(qe, 2), Ss = _(En);
      xn(Ss, { size: 20 }), m(En);
      var Qn = y(En, 2), lr = _(Qn), ea = _(lr);
      {
        var cr = (we) => {
          var le = NI();
          re(
            (nt) => {
              ke(le, "src", Ut.data.photoUrl), ke(le, "alt", nt);
            },
            [() => r()("프로필")]
          ), O(we, le);
        }, ur = (we) => {
          var le = xI(), nt = _(le, !0);
          m(le), re((kt) => L(nt, kt), [c]), O(we, le);
        };
        be(ea, (we) => {
          Ut.data?.photoUrl ? we(cr) : we(ur, !1);
        });
      }
      m(lr), m(Qn);
      var dr = y(Qn, 2), ks = _(dr);
      Ar(ks, { size: 24 }), m(dr), m(tt), re(
        (we, le, nt, kt, In, Cn, Ii, Ci, Jn) => {
          L(V, we), L(U, le), L(Z, nt), L(_e, Ut.data?.displayName || Ut.email), ke(se, "title", kt), ke(ge, "title", In), ke(qe, "title", Cn), ke(En, "title", Ii), ke(Qn, "title", Ci), ke(dr, "title", Jn);
        },
        [
          () => r()("게시판"),
          () => r()("채팅"),
          () => r()("사용자찾기"),
          () => r()("메뉴"),
          () => r()("게시판"),
          () => r()("사용자찾기"),
          () => r()("채팅"),
          () => r()("프로필"),
          () => r()("메뉴")
        ]
      ), O(D, I);
    }, A = (D) => {
      var I = LI(), w = de(I), v = _(w), R = _(v);
      kr(R, { size: 16 });
      var P = y(R, 2), V = _(P, !0);
      m(P), m(v);
      var M = y(v, 2), H = _(M);
      xn(H, { size: 16 });
      var J = y(H, 2), U = _(J, !0);
      m(J), m(M);
      var K = y(M, 2), oe = _(K, !0);
      m(K);
      var X = y(K, 2), Z = _(X);
      Ar(Z, { size: 20 }), m(X), m(w);
      var ee = y(w, 2), te = _(ee), Se = _(te);
      kr(Se, { size: 20 }), m(te);
      var ve = y(te, 2), ye = _(ve);
      xn(ye, { size: 20 }), m(ve);
      var j = y(ve, 2), ae = _(j);
      Un(ae, { size: 20 }), m(j);
      var _e = y(j, 2), Qe = _(_e);
      Ar(Qe, { size: 24 }), m(_e), m(ee), re(
        (Ne, se, xe, tt, ge, Be, qe, Yn) => {
          L(V, Ne), L(U, se), L(oe, xe), ke(X, "title", tt), ke(te, "title", ge), ke(ve, "title", Be), ke(j, "title", qe), ke(_e, "title", Yn);
        },
        [
          () => r()("게시판"),
          () => r()("채팅"),
          () => r()("로그인"),
          () => r()("메뉴"),
          () => r()("게시판"),
          () => r()("채팅"),
          () => r()("로그인"),
          () => r()("메뉴")
        ]
      ), O(D, I);
    };
    be(S, (D) => {
      i() ? D(k) : D(A, !1);
    });
  }
  m(T), m(f), m(u), O(t, u), bn(), o();
}
er(["click"]);
customElements.define("sns-topbar", fe($I, {}, [], [], !0));
var FI = /* @__PURE__ */ W('<a href="/user/profile" class="menu-item-small svelte-najsij"><!> <span> </span></a>'), UI = /* @__PURE__ */ W('<a href="/auth/login" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="/auth/signup" class="menu-item-small svelte-najsij"><!> <span> </span></a>', 1), HI = /* @__PURE__ */ W("<option> </option>"), WI = /* @__PURE__ */ W('<aside class="sidebar svelte-najsij"><div class="sidebar-content svelte-najsij"><h2 class="section-title svelte-najsij"> </h2> <nav class="menu svelte-najsij"><a href="/" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/chat/room" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/list" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/user/profile" class="menu-item svelte-najsij"><!> <span> </span></a> <a href="/post/list" class="menu-item svelte-najsij"><!> <span> </span></a></nav> <div class="divider svelte-najsij"></div> <div class="section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="menu svelte-najsij"><!></div></div> <div class="divider svelte-najsij"></div> <div class="menu svelte-najsij"><a href="/user/list" class="menu-item-small svelte-najsij"><!> <span> </span></a> <a href="https://github.com/thruthesky/vibe" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><svg class="icon svelte-najsij" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span> </span> <!></a> <a href="https://open.kakao.com/o/gn2qMetf" target="_blank" rel="noopener noreferrer" class="menu-item-small svelte-najsij"><!> <span> </span> <!></a> <a href="/dev/history" class="menu-item-small svelte-najsij"><!> <span> </span></a></div> <div class="section language-section svelte-najsij"><h3 class="section-subtitle svelte-najsij"> </h3> <div class="language-compact svelte-najsij"><label class="language-label svelte-najsij" for="language-select">🌐</label> <select id="language-select" class="language-select svelte-najsij"></select></div></div> <div class="build-info svelte-najsij"><div class="build-row svelte-najsij"><span> </span> <span class="build-timestamp svelte-najsij"> </span></div></div> <div class="copyleft svelte-najsij"><p class="svelte-najsij"> <br/> </p></div></div></aside>');
const VI = {
  hash: "svelte-najsij",
  code: `
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

  /* 언어 설정 섹션 */.language-section.svelte-najsij {margin-top:1.5rem;padding-top:1rem;border-top:1px solid #e5e7eb;}.language-compact.svelte-najsij {display:flex;align-items:center;gap:0.75rem;}.language-label.svelte-najsij {font-size:0.85rem;font-weight:600;color:#374151;white-space:nowrap;}.language-select.svelte-najsij {flex:1;padding:0.45rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;background-color:#ffffff;color:#111827;font-size:0.85rem;font-weight:500;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 0.75rem center;background-size:12px 8px;cursor:pointer;}.language-select.svelte-najsij:focus {outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.15);}

  /* 빌드 정보 */.build-info.svelte-najsij {margin-top:2rem;padding-top:1rem;border-top:1px solid #e5e7eb;font-size:0.75rem;color:#6b7280;}.build-row.svelte-najsij {display:flex;align-items:center;justify-content:space-between;}.build-timestamp.svelte-najsij {font-family:'Courier New', monospace;}

  /* Copyleft 정보 */.copyleft.svelte-najsij {margin-top:1rem;text-align:center;font-size:0.75rem;color:#6b7280;}.copyleft.svelte-najsij p:where(.svelte-najsij) {line-height:1.5;}

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {.sidebar.svelte-najsij {display:none;}
  }`
};
function zI(t, e) {
  vn(e, !1), Gn(t, VI);
  const n = () => si(Lc, "$t", s), i = () => si(Nc, "$user", s), r = () => si(Oc, "$locale", s), [s, o] = Rl(), a = Yp;
  mh();
  var l = WI(), c = _(l), d = _(c), h = _(d, !0);
  m(d);
  var u = y(d, 2), f = _(u), p = _(f);
  Up(p, { size: 20 });
  var g = y(p, 2), E = _(g, !0);
  m(g), m(f);
  var T = y(f, 2), S = _(T);
  xn(S, { size: 20 });
  var k = y(S, 2), A = _(k, !0);
  m(k), m(T);
  var D = y(T, 2), I = _(D);
  as(I, { size: 20 });
  var w = y(I, 2), v = _(w, !0);
  m(w), m(D);
  var R = y(D, 2), P = _(R);
  Un(P, { size: 20 });
  var V = y(P, 2), M = _(V, !0);
  m(V), m(R);
  var H = y(R, 2), J = _(H);
  Pc(J, { size: 20 });
  var U = y(J, 2), K = _(U, !0);
  m(U), m(H), m(u);
  var oe = y(u, 4), X = _(oe), Z = _(X, !0);
  m(X);
  var ee = y(X, 2), te = _(ee);
  {
    var Se = (it) => {
      var rt = FI(), st = _(rt);
      Un(st, { size: 16 });
      var Zt = y(st, 2), en = _(Zt, !0);
      m(Zt), m(rt), re((pr) => L(en, pr), [() => n()("회원정보수정")]), O(it, rt);
    }, ve = (it) => {
      var rt = UI(), st = de(rt), Zt = _(st);
      Hp(Zt, { size: 16 });
      var en = y(Zt, 2), pr = _(en, !0);
      m(en), m(st);
      var Rs = y(st, 2), Ps = _(Rs);
      Un(Ps, { size: 16 });
      var Ns = y(Ps, 2), na = _(Ns, !0);
      m(Ns), m(Rs), re(
        (ia, ra) => {
          L(pr, ia), L(na, ra);
        },
        [() => n()("로그인"), () => n()("회원가입")]
      ), O(it, rt);
    };
    be(te, (it) => {
      i() ? it(Se) : it(ve, !1);
    });
  }
  m(ee), m(oe);
  var ye = y(oe, 4), j = _(ye), ae = _(j);
  as(ae, { size: 16 });
  var _e = y(ae, 2), Qe = _(_e, !0);
  m(_e), m(j);
  var Ne = y(j, 2), se = y(_(Ne), 2), xe = _(se, !0);
  m(se);
  var tt = y(se, 2);
  dl(tt, { size: 12, class: "external-icon" }), m(Ne);
  var ge = y(Ne, 2), Be = _(ge);
  xn(Be, { size: 16 });
  var qe = y(Be, 2), Yn = _(qe, !0);
  m(qe);
  var En = y(qe, 2);
  dl(En, { size: 12, class: "external-icon" }), m(ge);
  var Ss = y(ge, 2), Qn = _(Ss);
  $p(Qn, { size: 16 });
  var lr = y(Qn, 2), ea = _(lr, !0);
  m(lr), m(Ss), m(ye);
  var cr = y(ye, 2), ur = _(cr), dr = _(ur, !0);
  m(ur);
  var ks = y(ur, 2), we = _(ks), le = y(we, 2);
  tr(le, 5, () => a, Do, (it, rt) => {
    var st = HI(), Zt = _(st, !0);
    m(st);
    var en = {};
    re(() => {
      L(Zt, b(rt).label), en !== (en = b(rt).code) && (st.value = (st.__value = b(rt).code) ?? "");
    }), O(it, st);
  }), m(le);
  var nt;
  kl(le), m(ks), m(cr);
  var kt = y(cr, 2), In = _(kt), Cn = _(In), Ii = _(Cn, !0);
  m(Cn);
  var Ci = y(Cn, 2), Jn = _(Ci, !0);
  m(Ci), m(In), m(kt);
  var hr = y(kt, 2), fr = _(hr), As = _(fr, !0), ta = y(As, 2);
  m(fr), m(hr), m(c), m(l), re(
    (it, rt, st, Zt, en, pr, Rs, Ps, Ns, na, ia, ra, Jp, Xp, Zp, em, tm) => {
      L(h, it), L(E, rt), L(A, st), L(v, Zt), L(M, en), L(K, pr), L(Z, Rs), L(Qe, Ps), L(xe, Ns), L(Yn, na), L(ea, ia), L(dr, ra), ke(we, "aria-label", Jp), nt !== (nt = r()) && (le.value = (le.__value = r()) ?? "", Gr(le, r())), L(Ii, Xp), L(Jn, Zp), L(As, em), L(ta, ` ${tm ?? ""}`);
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
      () => n()("언어설정"),
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
  ), Js("change", le, (it) => TI(it.currentTarget.value)), O(t, l), bn(), o();
}
customElements.define("sns-left-sidebar", fe(zI, {}, [], [], !0));
var jI = /* @__PURE__ */ W('<aside class="sidebar svelte-3epon2"><div class="sidebar-content svelte-3epon2"><h2 class="section-title svelte-3epon2"> </h2> <div class="stats svelte-3epon2"><div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-user svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-score svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-posts svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div> <div class="stat-description svelte-3epon2"> </div></div></div> <div class="stat-item svelte-3epon2"><div class="stat-icon stat-icon-messages svelte-3epon2"><!></div> <div class="stat-content svelte-3epon2"><div class="stat-label svelte-3epon2"> </div> <div class="stat-value svelte-3epon2"> </div></div></div></div> <div class="notice svelte-3epon2"> </div></div></aside>');
const BI = {
  hash: "svelte-3epon2",
  code: `\r
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
  }`
};
function qI(t, e) {
  vn(e, !0), Gn(t, BI);
  const n = () => si(Lc, "$t", i), [i, r] = Rl();
  let s = /* @__PURE__ */ ie(nn({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  }));
  var o = jI(), a = _(o), l = _(a), c = _(l, !0);
  m(l);
  var d = y(l, 2), h = _(d), u = _(h), f = _(u);
  Un(f, { size: 20 }), m(u);
  var p = y(u, 2), g = _(p), E = _(g, !0);
  m(g);
  var T = y(g, 2), S = _(T, !0);
  m(T), m(p), m(h);
  var k = y(h, 2), A = _(k), D = _(A);
  qp(D, { size: 20 }), m(A);
  var I = y(A, 2), w = _(I), v = _(w, !0);
  m(w);
  var R = y(w, 2), P = _(R, !0);
  m(R), m(I), m(k);
  var V = y(k, 2), M = _(V), H = _(M);
  Pc(H, { size: 20 }), m(M);
  var J = y(M, 2), U = _(J), K = _(U, !0);
  m(U);
  var oe = y(U, 2), X = _(oe, !0);
  m(oe);
  var Z = y(oe, 2), ee = _(Z, !0);
  m(Z), m(J), m(V);
  var te = y(V, 2), Se = _(te), ve = _(Se);
  xn(ve, { size: 20 }), m(Se);
  var ye = y(Se, 2), j = _(ye), ae = _(j, !0);
  m(j);
  var _e = y(j, 2), Qe = _(_e, !0);
  m(_e), m(ye), m(te), m(d);
  var Ne = y(d, 2), se = _(Ne, !0);
  m(Ne), m(a), m(o), re(
    (xe, tt, ge, Be, qe, Yn, En) => {
      L(c, xe), L(E, tt), L(S, b(s).totalUsers), L(v, ge), L(P, b(s).totalScore), L(K, Be), L(X, b(s).totalPosts), L(ee, qe), L(ae, Yn), L(Qe, b(s).totalMessages), L(se, En);
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
  ), O(t, o), bn(), r();
}
customElements.define("sns-right-sidebar", fe(qI, {}, [], [], !0));
var GI = /* @__PURE__ */ W('<div class="layout svelte-um1xbq"><sns-topbar></sns-topbar> <div class="main-container svelte-um1xbq"><sns-left-sidebar></sns-left-sidebar> <main class="main-content svelte-um1xbq"><!></main> <sns-right-sidebar></sns-right-sidebar></div></div>', 2);
const KI = {
  hash: "svelte-um1xbq",
  code: `\r
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
  }`
};
function YI(t, e) {
  Gn(t, KI);
  var n = GI(), i = _(n), r = y(i, 2), s = _(r);
  qr(s, 1, "left-sidebar svelte-um1xbq");
  var o = y(s, 2), a = _(o);
  Pe(a, e, "default", {}), m(o);
  var l = y(o, 2);
  qr(l, 1, "right-sidebar svelte-um1xbq"), m(r), m(n), O(t, n);
}
customElements.define("sns-layout", fe(YI, {}, ["default"], [], !0));
var QI = /* @__PURE__ */ W('<div class="icon-container svelte-m3h71q"> </div>'), JI = /* @__PURE__ */ W('<p class="hint-box svelte-m3h71q"> </p>'), XI = /* @__PURE__ */ W('<p class="gpl-box svelte-m3h71q"> </p>'), ZI = /* @__PURE__ */ W('<div class="accordion-content svelte-m3h71q"><p class="content-text svelte-m3h71q"> </p> <!> <!></div>'), eC = /* @__PURE__ */ W('<div class="accordion-item svelte-m3h71q"><button class="accordion-trigger svelte-m3h71q"><div class="trigger-content svelte-m3h71q"><!> <span class="title svelte-m3h71q"> </span></div> <div><!></div></button> <!></div>'), tC = /* @__PURE__ */ W('<div class="accordion svelte-m3h71q"></div>');
const nC = {
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
function iC(t, e) {
  vn(e, !0), Gn(t, nC);
  let n = bt(e, "items", 7, "[]"), i = bt(e, "type", 7, "single"), r = bt(e, "collapsible", 7, !0), s = /* @__PURE__ */ Pa(() => {
    try {
      const u = typeof n() == "string" ? JSON.parse(n()) : n();
      return Array.isArray(u) ? u : [];
    } catch (u) {
      return console.error("Failed to parse accordion items:", u), [];
    }
  }), o = /* @__PURE__ */ Pa(() => () => {
    const u = r();
    return typeof u == "boolean" ? u : typeof u == "string" ? u !== "false" : !0;
  }), a = /* @__PURE__ */ ie(nn(/* @__PURE__ */ new Set()));
  function l(u) {
    const f = new Set(b(a));
    i() === "single" ? f.has(u) ? b(o) && f.delete(u) : (f.clear(), f.add(u)) : f.has(u) ? f.delete(u) : f.add(u), N(a, f, !0);
  }
  function c(u) {
    return b(a).has(u);
  }
  var d = {
    get items() {
      return n();
    },
    set items(u = "[]") {
      n(u), ft();
    },
    get type() {
      return i();
    },
    set type(u = "single") {
      i(u), ft();
    },
    get collapsible() {
      return r();
    },
    set collapsible(u = !0) {
      r(u), ft();
    }
  }, h = tC();
  return tr(h, 21, () => b(s), Do, (u, f, p) => {
    var g = eC(), E = _(g);
    E.__click = () => l(p);
    var T = _(E), S = _(T);
    {
      var k = (V) => {
        var M = QI(), H = _(M, !0);
        m(M), re(() => L(H, b(f).icon)), O(V, M);
      };
      be(S, (V) => {
        b(f).icon && V(k);
      });
    }
    var A = y(S, 2), D = _(A, !0);
    m(A), m(T);
    var I = y(T, 2);
    let w;
    var v = _(I);
    Fp(v, { size: 20 }), m(I), m(E);
    var R = y(E, 2);
    {
      var P = (V) => {
        var M = ZI(), H = _(M), J = _(H, !0);
        m(H);
        var U = y(H, 2);
        {
          var K = (Z) => {
            var ee = JI(), te = _(ee, !0);
            m(ee), re(() => L(te, b(f).hint)), O(Z, ee);
          };
          be(U, (Z) => {
            b(f).hint && Z(K);
          });
        }
        var oe = y(U, 2);
        {
          var X = (Z) => {
            var ee = XI(), te = _(ee, !0);
            m(ee), re(() => L(te, b(f).gpl)), O(Z, ee);
          };
          be(oe, (Z) => {
            b(f).gpl && Z(X);
          });
        }
        m(M), re(() => L(J, b(f).content)), O(V, M);
      };
      be(R, (V) => {
        c(p) && V(P);
      });
    }
    m(g), re(
      (V, M) => {
        ke(E, "aria-expanded", V), L(D, b(f).title), w = qr(I, 1, "chevron svelte-m3h71q", null, w, M);
      },
      [() => c(p), () => ({ "rotate-180": c(p) })]
    ), O(u, g);
  }), m(h), O(t, h), bn(d);
}
er(["click"]);
customElements.define("sns-accordion", fe(iC, { items: {}, type: {}, collapsible: {} }, [], [], !0));
var rC = /* @__PURE__ */ W('<button class="account-button svelte-1uta475" role="menuitem"><span class="account-label svelte-1uta475"> </span> <span class="account-phone svelte-1uta475"> </span></button>'), sC = /* @__PURE__ */ W('<div class="test-fab-menu svelte-1uta475" role="menu"><div class="menu-header svelte-1uta475"><span class="menu-title svelte-1uta475">테스트 도구</span></div> <div class="menu-divider svelte-1uta475"></div> <div class="menu-section svelte-1uta475"><div class="section-title svelte-1uta475"><!> <span>테스트 계정 로그인</span></div> <div class="account-list svelte-1uta475"></div></div> <div class="menu-divider svelte-1uta475"></div> <button class="menu-button svelte-1uta475" role="menuitem"><!> <span>서버 정보 보기</span></button> <div class="menu-divider svelte-1uta475"></div> <div class="version-info svelte-1uta475"><p class="version-label svelte-1uta475">빌드 버전</p> <p class="version-value svelte-1uta475"> </p></div></div>'), oC = /* @__PURE__ */ W('<div class="modal-overlay svelte-1uta475" role="dialog" aria-modal="true" aria-labelledby="server-info-title" tabindex="-1"><div class="modal-content svelte-1uta475"><h2 id="server-info-title" class="modal-title svelte-1uta475">서버 정보</h2> <div class="info-list svelte-1uta475"><div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">환경:</span> <span class="info-value svelte-1uta475"> </span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Svelte:</span> <span class="info-value svelte-1uta475">5.43.2</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Vite:</span> <span class="info-value svelte-1uta475">6.x</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">Firebase:</span> <span class="info-value svelte-1uta475">설정됨</span></div> <div class="info-item svelte-1uta475"><span class="info-label svelte-1uta475">프로젝트 ID:</span> <span class="info-value info-value-small svelte-1uta475"> </span></div></div> <button class="modal-close-button svelte-1uta475">닫기</button></div></div>'), aC = /* @__PURE__ */ W('<div class="test-fab-container svelte-1uta475"><button aria-label="테스트 도구 열기"><!></button> <!></div> <!>', 1);
const lC = {
  hash: "svelte-1uta475",
  code: `
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

  /* reCAPTCHA 컨테이너 숨김 */`
};
function cC(t, e) {
  vn(e, !0), Gn(t, lC);
  const n = [
    { label: "A", name: "apple", email: "apple@test.com" },
    { label: "B", name: "banana", email: "banana@test.com" },
    { label: "C", name: "cherry", email: "cherry@test.com" },
    { label: "D", name: "durian", email: "durian@test.com" },
    { label: "E", name: "elderberry", email: "elderberry@test.com" },
    { label: "F", name: "fig", email: "fig@test.com" },
    { label: "G", name: "grape", email: "grape@test.com" },
    { label: "H", name: "honeydew", email: "honeydew@test.com" }
  ], i = "12345a,*";
  let r = /* @__PURE__ */ ie(
    !1
    // 메뉴 열림 상태
  ), s = /* @__PURE__ */ ie(
    !1
    // 서버 정보 모달 열림 상태
  ), o = /* @__PURE__ */ ie(
    !1
    // 로그인 진행 중 상태
  );
  const a = Date.now(), l = new Date(a).toLocaleString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
  }), c = "withcenter-test-5";
  fs(() => {
    console.log("TestFab 컴포넌트가 마운트되었습니다.");
  });
  async function d(w) {
    if (!b(o)) {
      N(o, !0), console.log(`${w.name} (${w.label}) 계정으로 로그인을 시도합니다...`);
      try {
        let v;
        try {
          v = await cf(Kt, w.email, i), console.log(`${w.name} 계정으로 로그인 성공!`);
        } catch (R) {
          if (R.code === "auth/user-not-found" || R.code === "auth/invalid-credential")
            console.log(`${w.name} 계정이 없습니다. 회원가입을 진행합니다...`), v = await lf(Kt, w.email, i), await jl(v.user, { displayName: w.name }), console.log(`${w.name} 계정 회원가입 및 로그인 성공!`);
          else
            throw R;
        }
        alert(`${w.name} (${w.label}) 계정으로 로그인되었습니다.`), N(r, !1), window.location.href = "/";
      } catch (v) {
        console.error("로그인 오류:", v);
        let R = "로그인에 실패했습니다.";
        v.code === "auth/invalid-email" ? R = "잘못된 이메일 형식입니다." : v.code === "auth/wrong-password" ? R = "비밀번호가 일치하지 않습니다." : v.code === "auth/too-many-requests" ? R = "너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요." : v.code === "auth/weak-password" ? R = "비밀번호가 너무 약합니다." : v.code === "auth/email-already-in-use" && (R = "이미 사용 중인 이메일입니다."), alert(R + `
오류 코드: ` + v.code);
      } finally {
        N(o, !1);
      }
    }
  }
  function h() {
    N(r, !b(r));
  }
  function u() {
    N(s, !b(s)), N(
      r,
      !1
      // 메뉴 닫기
    );
  }
  function f(w) {
    !w.target.closest(".test-fab-menu") && !w.target.closest(".test-fab-button") && N(r, !1);
  }
  var p = aC();
  Js("click", xa, f);
  var g = de(p), E = _(g);
  let T;
  E.__click = h;
  var S = _(E);
  Bp(S, { size: 24 }), m(E);
  var k = y(E, 2);
  {
    var A = (w) => {
      var v = sC(), R = y(_(v), 4), P = _(R), V = _(P);
      Un(V, { size: 16 }), At(2), m(P);
      var M = y(P, 2);
      tr(M, 21, () => n, (X) => X.label, (X, Z) => {
        var ee = rC();
        ee.__click = () => d(b(Z));
        var te = _(ee), Se = _(te, !0);
        m(te);
        var ve = y(te, 2), ye = _(ve, !0);
        m(ve), m(ee), re(() => {
          ee.disabled = b(o), L(Se, b(Z).label), L(ye, b(Z).name);
        }), O(X, ee);
      }), m(M), m(R);
      var H = y(R, 4);
      H.__click = u;
      var J = _(H);
      jp(J, { size: 16 }), At(2), m(H);
      var U = y(H, 4), K = y(_(U), 2), oe = _(K, !0);
      m(K), m(U), m(v), re(() => L(oe, l)), O(w, v);
    };
    be(k, (w) => {
      b(r) && w(A);
    });
  }
  m(g);
  var D = y(g, 2);
  {
    var I = (w) => {
      var v = oC();
      v.__click = u;
      var R = _(v);
      R.__click = (X) => X.stopPropagation();
      var P = y(_(R), 2), V = _(P), M = y(_(V), 2), H = _(M, !0);
      m(M), m(V);
      var J = y(V, 8), U = y(_(J), 2), K = _(U, !0);
      m(U), m(J), m(P);
      var oe = y(P, 2);
      oe.__click = u, m(R), m(v), re(() => {
        L(H, "production"), L(K, c);
      }), O(w, v);
    };
    be(D, (w) => {
      b(s) && w(I);
    });
  }
  re(() => {
    T = qr(E, 1, "test-fab-button svelte-1uta475", null, T, { loading: b(o) }), E.disabled = b(o);
  }), O(t, p), bn();
}
er(["click"]);
customElements.define("test-fab", fe(cC, {}, [], [], !1));
function fC(t) {
  const { subscribe: e, set: n } = nr(null), i = Et(It, t);
  return os(i, (r) => {
    const s = r.val();
    n(s);
  }), {
    subscribe: e,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => Ac(i)
  };
}
async function pC(t, e) {
  try {
    const n = Et(It, t);
    return await Xo(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 쓰기 오류:", n), { success: !1, error: n.message };
  }
}
async function mC(t, e) {
  try {
    const n = Et(It, t);
    return await Eo(n, e), { success: !0 };
  } catch (n) {
    return console.error("데이터 업데이트 오류:", n), { success: !1, error: n.message };
  }
}
async function _C(t) {
  try {
    const e = Et(It, t);
    return await nE(e), { success: !0 };
  } catch (e) {
    return console.error("데이터 삭제 오류:", e), { success: !1, error: e.message };
  }
}
async function gC(t, e) {
  try {
    const n = Et(It, t), i = tE(n);
    return await Xo(i, e), { success: !0, key: i.key };
  } catch (n) {
    return console.error("데이터 추가 오류:", n), { success: !1, error: n.message };
  }
}
async function vC(t) {
  try {
    const e = Et(It, t), n = await iE(e);
    return n.exists() ? { success: !0, data: n.val() } : { success: !0, data: null };
  } catch (e) {
    return console.error("데이터 읽기 오류:", e), { success: !1, error: e.message };
  }
}
function bC(t) {
  const e = Et(It, `status/${t}`), n = Et(It, ".info/connected");
  return os(n, (i) => {
    i.val() === !0 && (Xo(e, {
      online: !0,
      lastSeen: Date.now()
    }), os(Et(It, ".info/connected"), (r) => {
      r.val() || Eo(e, {
        online: !1,
        lastSeen: Date.now()
      });
    }));
  }), () => {
    Eo(e, {
      online: !1,
      lastSeen: Date.now()
    }), Ac(n);
  };
}
console.log("SNS Web Components 로드됨 ✅");
export {
  Kt as auth,
  fC as createRealtimeStore,
  It as database,
  _C as deleteData,
  pI as loading,
  gC as pushData,
  vC as readData,
  bC as setupPresence,
  dC as signIn,
  mI as signOut,
  hC as signUp,
  mC as updateData,
  Nc as user,
  pC as writeData
};
